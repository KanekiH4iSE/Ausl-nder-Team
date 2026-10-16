import os,threading,time
from pathlib import Path

Q = {
	"authority":{"type":"noul","instructions":"Does the caller claim to be from a bank, the police, a public authority or tech support?"},
	"credentials":{"type":"noul","instructions":"Does the caller ask for a PIN, TAN, password, code or to approve something in a banking app?"},
	"move_money":{"type":"noul","instructions":"Does the caller ask the person to transfer, withdraw or hand over money, cards or valuables?"},
	"pressure":{"type":"noul","instructions":"Does the caller create urgency, fear or pressure to act right now?"},
	"secrecy":{"type":"noul","instructions":"Does the caller tell the person not to hang up or not to tell anyone?"},
	"scam_type":{"type":"choice","instructions":"Which kind of call is this?","criteria":{
		"fake_bank":"caller pretends to be the bank's security team",
		"fake_police":"caller pretends to be police or prosecutor",
		"shock_call":"relative in trouble, accident, bail money",
		"tech_support":"computer or remote access support",
		"normal":"ordinary everyday call with no scam signs"}},
}

r = None
st = "off"
lk = threading.Lock()

# fine-tuned checkpoint from laya_train.py, zero-shot router if missing
TUNED = os.getenv("LAYA_MODEL") or str(Path(__file__).resolve().parent/"models"/"laya-calls")

def load():
	global r,st
	st = "loading"
	try:
		import laya
		dev = os.getenv("LAYA_DEVICE") or None
		tuned = os.path.exists(os.path.join(TUNED,"rl_agent_config.json"))
		x = laya.load(TUNED,device=dev) if tuned else laya.Router(preload=True,device=dev)
		x.predict("Hallo, wie geht es dir heute?",Q)
		x.predict("Hello, how are you today?",Q)
		r = x
		st = "ready (tuned)" if tuned else "ready (zero-shot)"
	except Exception as e:
		st = f"error : {e}"
		print("laya :",st)

def start():
	if os.getenv("LAYA_ENABLED","1") != "0":
		threading.Thread(target=load,daemon=True).start()

def state():
	return st

def ask(txt):
	if not r or not (txt or "").strip():
		return None
	t = time.time()
	with lk:
		res = r.predict(txt[-1500:],Q)
	a = dict(res["answers"])
	ty = a.pop("scam_type")
	return {
		"p":{k:round(v["noul"],3) for k,v in a.items()},
		"type":ty["choice"],
		"typeP":round(ty["probabilities"][ty["choice"]],3),
		"model":res.get("routing",{}).get("model","tuned"),
		"ms":round((time.time()-t)*1000),
	}
