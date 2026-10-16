import os,time,threading
from pathlib import Path
from contextlib import asynccontextmanager
from dotenv import load_dotenv

ROOT = Path(__file__).resolve().parent.parent
load_dotenv(ROOT/".env")

from fastapi import FastAPI,Request,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from starlette.concurrency import run_in_threadpool
from pydantic import BaseModel
import rules,laya_svc,relay,explain,store

class Tx(BaseModel):
	payee:str = ""
	iban:str = ""
	amount:float = 0
	purpose:str = ""
	vop:str = "none"
	newPayee:bool = True

class Ctx(BaseModel):
	onCall:bool = False
	answers:list[str] = []
	dictated:bool = False
	hour:int|None = None

class CheckIn(BaseModel):
	sid:str = ""
	uid:str = "demo"
	lang:str = "de"
	tx:Tx
	ctx:Ctx = Ctx()
	transcript:str = ""
	explain:bool = True

class CallIn(BaseModel):
	sid:str = ""
	lang:str = "de"
	text:str

class ReportIn(BaseModel):
	sid:str = ""
	uid:str = "demo"
	iban:str
	note:str = ""

sess = {}
slk = threading.Lock()

def transcript(sid,add=""):
	if not sid:
		return add
	now = time.time()
	with slk:
		for k in [k for k,v in sess.items() if now-v["at"] > 3600]:
			del sess[k]
		s = sess.setdefault(sid,{"text":"","at":now})
		if add:
			s["text"] = (s["text"]+" "+add).strip()[-4000:]
		s["at"] = now
		return s["text"]

# laya question -> weight, only counted when the rules missed it
LW = {"authority":15,"credentials":30,"move_money":25,"pressure":15,"secrecy":25}

def analyze(txt):
	sig = rules.call(txt)
	lay = laya_svc.ask(txt)
	if lay:
		have = {x["code"] for x in sig}
		if have & {"safe_account","cash"}:
			have.add("move_money")
		for k,p in lay["p"].items():
			if p < .6:
				continue
			if k in have:
				for x in sig:
					if x["code"] == k:
						x["src"] = "rule+laya"
			else:
				sig.append({"code":k,"w":round(LW[k]*p),"src":"laya","p":p})
		if lay["type"] != "normal" and lay["typeP"] >= .5:
			sig.append({"code":"laya_type","w":10,"src":"laya","type":lay["type"],"p":lay["typeP"]})
	return sig,lay

def callOut(sid,lang,txt,new):
	sig,lay = analyze(txt)
	n,hard,lvl = rules.score(sig)
	return {"sid":sid,"text":new,"transcript":txt,"score":n,"hard":hard,"level":lvl,"signals":sig,"points":explain.fallback(sig,lang),"laya":lay}

@asynccontextmanager
async def life(app):
	laya_svc.start()
	yield

app = FastAPI(title="SafePause API",lifespan=life)
app.add_middleware(CORSMiddleware,allow_origins=["*"],allow_methods=["*"],allow_headers=["*"])

@app.get("/api/health")
def health():
	return {"ok":True,"laya":laya_svc.state(),"stt":os.getenv("STT_MODEL"),"llm":os.getenv("LLM_MODEL")}

@app.post("/api/check")
def check(b:CheckIn):
	t0 = time.time()
	iban = rules.norm(b.tx.iban)
	txt = b.transcript or transcript(b.sid)
	sig = rules.tx(b.tx,b.ctx,store.hist(b.uid,iban))
	csig,lay = analyze(txt)
	sig += csig
	n,hard,lvl = rules.score(sig)
	pts,llm = explain.fallback(sig,b.lang),False
	if b.explain and lvl != "ok":
		facts = {"amount":f"about {round(b.tx.amount,-2):.0f} EUR","vop":b.tx.vop,"newPayee":b.tx.newPayee,"onCall":b.ctx.onCall,
			"callerSaid":txt[-500:],"callType":lay["type"] if lay else None}
		pts,llm = explain.explain(sig,b.lang,facts)
	store.log("check",b.sid,b.uid,iban,b.tx.newPayee,b.tx.amount,n,lvl,{"signals":[x["code"] for x in sig],"llm":llm})
	return {"score":n,"hard":hard,"level":lvl,"signals":sig,"points":pts,"lang":explain.lang(b.lang),
		"ai":{"laya":lay is not None,"llm":llm},"ms":round((time.time()-t0)*1000)}

@app.post("/api/call")
def callText(b:CallIn):
	return callOut(b.sid,b.lang,transcript(b.sid,b.text),b.text)

@app.post("/api/listen")
async def listen(req:Request,sid:str = "",lang:str = "de"):
	wav = await req.body()
	if len(wav) > 3_000_000:
		raise HTTPException(413,"audio too long, send chunks under 60s")
	try:
		txt = await run_in_threadpool(relay.stt,wav)
	except Exception as e:
		raise HTTPException(502,f"stt failed : {e}")
	return await run_in_threadpool(callOut,sid,lang,transcript(sid,txt),txt)

@app.post("/api/report")
def report(b:ReportIn):
	iban = rules.norm(b.iban)
	if not rules.ibanOk(iban):
		raise HTTPException(400,"invalid iban")
	store.block(iban,b.note[:200])
	store.log("report",b.sid,b.uid,iban)
	return {"ok":True}

@app.get("/")
def index():
	return FileResponse(ROOT/"index.html")

# only the frontend folders, never the repo root (.env lives there)
app.mount("/css",StaticFiles(directory=ROOT/"css"),name="css")
app.mount("/js",StaticFiles(directory=ROOT/"js"),name="js")

if __name__ == "__main__":
	import uvicorn
	uvicorn.run(app,host=os.getenv("HOST","127.0.0.1"),port=int(os.getenv("PORT","8000")))
