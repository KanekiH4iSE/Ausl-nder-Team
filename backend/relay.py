import os,io,json,math,wave,array,base64,httpx

cli = httpx.Client(timeout=httpx.Timeout(60,connect=10))

STT_SYS = ("You are a speech-to-text engine for phone calls in German or English. "
	"Output only the exact words spoken, in the spoken language. "
	"No comments, no translation, no speaker labels. If there is no speech, output nothing.")

def url():
	return os.getenv("RELAY_BASE_URL","https://relay.crunchman.info/v1").rstrip("/")+"/chat/completions"

def hdr():
	return {"Authorization":"Bearer "+os.environ["RELAY_API_KEY"]}

def loud(wav):
	try:
		w = wave.open(io.BytesIO(wav))
		if w.getsampwidth() != 2:
			return True
		a = array.array("h",w.readframes(w.getnframes()))
	except Exception:
		return True
	return bool(a) and math.sqrt(sum(x*x for x in a)/len(a)) > 300

def stt(wav):
	if not loud(wav):
		return ""
	b64 = base64.b64encode(wav).decode()
	body = {
		"model":os.getenv("STT_MODEL","qwen3-omni-flash"),
		"messages":[
			{"role":"system","content":STT_SYS},
			{"role":"user","content":[{"type":"input_audio","input_audio":{"data":"data:audio/wav;base64,"+b64,"format":"wav"}}]},
		],
		"stream":True,
		"modalities":["text"],
	}
	txt = ""
	with cli.stream("POST",url(),headers=hdr(),json=body) as r:
		if r.status_code != 200:
			r.read()
			raise RuntimeError(f"stt {r.status_code} : {r.text[:200]}")
		for ln in r.iter_lines():
			if not ln.startswith("data:") or ln.endswith("[DONE]"):
				continue
			for ch in json.loads(ln[5:]).get("choices") or []:
				txt += (ch.get("delta") or {}).get("content") or ""
	return txt.strip()

def chat(msgs,maxTok=600):
	body = {"model":os.getenv("LLM_MODEL","deepseek-v4.1-flash"),"messages":msgs,"max_tokens":maxTok,"enable_thinking":False}
	r = cli.post(url(),headers=hdr(),json=body)
	r.raise_for_status()
	return r.json()["choices"][0]["message"].get("content") or ""
