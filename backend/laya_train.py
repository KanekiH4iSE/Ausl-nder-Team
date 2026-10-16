"""fine-tune laya on de/en phone call transcripts

python laya_train.py gen     synthetic labelled calls via the relay llm -> laya_data/
python laya_train.py train   fine-tune laya-multilingual -> models/laya-calls/
python laya_train.py eval    rules only vs zero-shot laya vs tuned laya on laya_data/eval.jsonl
"""
import os,sys,json,random
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from dotenv import load_dotenv

H = Path(__file__).resolve().parent
load_dotenv(H.parent/".env")
import relay,rules,laya_svc
from laya_svc import Q

DATA = H/"laya_data"
OUT = H/"models"/"laya-calls"
LBL = ["authority","credentials","move_money","pressure","secrecy"]
KINDS = {
	"fake_bank":"a scammer pretending to be the bank's security or fraud team (push-TAN approval, 'safe account', card pickup, remote online banking help)",
	"fake_police":"a scammer pretending to be police, a detective or a prosecutor (burglars caught, your name on their list, money at the bank not safe, an officer collects valuables)",
	"shock_call":"a scammer pretending to be a grandchild, child or relative, or their doctor or lawyer (accident, bail, hospital bill, new phone number, needs money fast)",
	"tech_support":"a scammer pretending to be Microsoft, Apple or telecom support (virus, install AnyDesk or TeamViewer, refund, log into online banking)",
	"normal_family":"an ordinary call with family or friends (plans, health, kids, birthdays), no scam",
	"normal_service":"an ordinary call from a doctor's office, pharmacy, delivery service, craftsman, insurance or utility company, no scam",
	"normal_bank":"a genuine call from the person's real bank advisor (appointment, new card arrived by post, savings offer) that never asks for PIN, TAN, approvals or transfers",
	"normal_trouble":"a genuine call about a real problem (police returning a found wallet, a relative in hospital asking for a visit, branch closing) with no request for money, codes or secrecy",
}
STYLE = {
	"full":"a full call of 4-10 sentences, only the caller's words",
	"fragment":"a short fragment of 1-2 sentences from the middle of the call, like one 5-second speech-to-text chunk",
	"asr":"3-6 sentences from both speakers as raw speech-to-text output: no speaker labels, little punctuation, small recognition errors",
}
CITIES = ["Kassel","Weimar","Memmingen","Hemer","Günzburg","Kaiserslautern","Bremen","Leipzig","Köln","Rostock","Passau","Freiburg","London","Manchester","Leeds"]

PROMPT = """Write {n} different phone call transcripts in {lang}.
Each one is {kind}.
Format of each transcript : {style}.
Vary names, banks, cities (e.g. {cities}), amounts, tone and tactics.{sie}
For each transcript label what the CALLER clearly does in this text (true only if it is actually in the text) :
authority : claims to be from a bank, police, a public authority or tech support
credentials : asks for a PIN, TAN, password, code or to approve something in a banking app
move_money : asks to transfer, withdraw or hand over money, cards or valuables
pressure : creates urgency, fear or pressure to act right now
secrecy : tells the person not to hang up or not to tell anyone
Return only JSON : {{"calls":[{{"text":"...","authority":false,"credentials":false,"move_money":false,"pressure":false,"secrecy":false}}]}}"""

def batch(job):
	lang,kind,style,n = job
	p = PROMPT.format(n=n,lang="German" if lang == "de" else "English",kind=KINDS[kind],style=STYLE[style],
		cities=", ".join(random.sample(CITIES,3)),sie=" Strangers use formal Sie." if lang == "de" else "")
	try:
		txt = relay.chat([{"role":"system","content":"You create realistic training data for a phone-scam detector that protects older people. Return only JSON."},
			{"role":"user","content":p}],maxTok=4000)
		calls = json.loads(txt[txt.find("{"):txt.rfind("}")+1])["calls"]
	except Exception as e:
		print("gen fail :",job,e)
		return []
	out = []
	for c in calls:
		t = str(c.get("text") or "").strip()
		if not t:
			continue
		exp = {k:bool(c.get(k)) for k in LBL}
		exp["scam_type"] = "normal" if kind.startswith("normal") else kind
		out.append({"state":t,"questions":Q,"expected":exp,"lang":lang,"kind":kind,"style":style})
	return out

def gen():
	DATA.mkdir(exist_ok=True)
	for name,reps,n in [("train",2,6),("eval",1,3)]:
		jobs = [(l,k,s,n) for l in ["de","en"] for k in KINDS for s in STYLE for i in range(reps)]
		with ThreadPoolExecutor(8) as ex:
			rows = [r for b in ex.map(batch,jobs) for r in b]
		seen,uniq = set(),[]
		for r in rows:
			if r["state"] not in seen:
				seen.add(r["state"])
				uniq.append(r)
		with open(DATA/f"{name}.jsonl","w",encoding="utf-8") as f:
			for r in uniq:
				f.write(json.dumps(r,ensure_ascii=False)+"\n")
		print(f"{name} : {len(uniq)} calls")

def train():
	from laya.train import finetune,TrainConfig
	cfg = TrainConfig(epochs=5,micro_batch=8,grad_accum=2,loss="soft-ce",eval_data=str(DATA/"eval.jsonl"))
	res = finetune(str(DATA/"train.jsonl"),"multilingual",str(OUT),cfg)
	print(json.dumps(res,default=str,indent=1)[:4000])

def load(path):
	return [json.loads(l) for l in open(path,encoding="utf-8")]

def score(name,rows):
	import app
	acc = {k:[0,0] for k in LBL+["scam_type"]}
	res = {}
	for r in rows:
		sig,lay = app.analyze(r["state"])
		lvl = rules.score(sig)[2]
		key = (r["lang"],"scam" if r["expected"]["scam_type"] != "normal" else "normal")
		hit = lvl != "ok"
		res.setdefault(key,[0,0])
		res[key][0] += hit
		res[key][1] += 1
		if lay:
			for k in LBL:
				acc[k][0] += (lay["p"][k] >= .5) == r["expected"][k]
				acc[k][1] += 1
			acc["scam_type"][0] += lay["type"] == r["expected"]["scam_type"]
			acc["scam_type"][1] += 1
	print(f"== {name}")
	for (l,kind),(h,n) in sorted(res.items()):
		print(f"   {l} {kind:6} flagged {h}/{n} = {h/n:.0%}")
	if acc["authority"][1]:
		print("   laya acc :",{k:f"{a/n:.0%}" for k,(a,n) in acc.items()})

def evaluate():
	from laya import Router,load as lload
	rows = load(DATA/"eval.jsonl")
	laya_svc.r = None
	score("rules only",rows)
	laya_svc.r = Router(preload=True,device=os.getenv("LAYA_DEVICE") or None)
	score("rules + zero-shot laya",rows)
	if (OUT/"rl_agent_config.json").exists():
		laya_svc.r = lload(str(OUT),device=os.getenv("LAYA_DEVICE") or None)
		score("rules + tuned laya",rows)

if __name__ == "__main__":
	{"gen":gen,"train":train,"eval":evaluate}[sys.argv[1] if len(sys.argv) > 1 else "eval"]()
