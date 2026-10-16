import re,json
import relay

ICON = {"on_call":"phone","authority":"phone","credentials":"lock","safe_account":"bank","pressure":"clock",
	"secrecy":"msg","remote":"lock","cash":"bank","shock":"phone","spoof116":"phone","new_payee":"user","amount_high":"info",
	"purpose_words":"info","iban_foreign":"id","iban_invalid":"id","iban_reported":"id","repeat_payee":"info",
	"many_attempts":"info","dictated":"phone","night":"clock","money":"bank","police_story":"phone","tech":"lock"}
GROUP = {"unknown_payee":"new_payee","rushed":"pressure","many_new_payees":"many_attempts","payee_words":"purpose_words","move_money":"money"}
# the scam story helps more than generic signs like pressure
STORY = {"shock","police_story","tech","spoof116","cash","remote"}
# the frontend shows vop itself
SKIP = {"vop_mismatch","vop_close","vop_none","laya_type"}
BAN = re.compile(r"betrug|alarm|dringend|\bwarnung\b|fraud|scam|urgent|alert|!",re.I)
# cheap check that the llm answered in the right language
LANG = {"de":re.compile(r"\b(sie|nie|die|der|das|und|ist|nicht|ihr|ihre|ihren|ein|eine|bank)\b",re.I),
	"en":re.compile(r"\b(the|you|your|never|is|and|not|a|an|bank)\b",re.I)}
NOT = {"de":re.compile(r"\b(the|you|your|never)\b",re.I),"en":re.compile(r"\b(sie|nie|ihr|nicht)\b",re.I)}
EX = {"de":"Banken bitten nie am Telefon um eine Freigabe.","en":"Banks never ask you to confirm a transfer on the phone."}

TPL = {
"de":{
	"on_call":("Banken fragen am Telefon nie nach PIN oder TAN.","Auch nicht, wenn die Nummer auf dem Display echt aussieht. Anrufer können Nummern fälschen."),
	"authority":("Der Anrufer sagt, er sei von der Bank oder der Polizei.","Legen Sie auf und rufen Sie selbst an: mit der Nummer auf Ihrer Karte."),
	"credentials":("Niemand von der Bank fragt nach Ihrer TAN oder PIN.","Geben Sie nur Freigaben frei, die Sie selbst gestartet haben."),
	"safe_account":("Echte Banken verschieben nie Geld auf ein „Sicherheitskonto“.","Auf Ihrem eigenen Konto ist Ihr Geld am sichersten."),
	"pressure":("Eile ist ein typisches Warnzeichen.","Echte Bankmitarbeiter geben Ihnen immer Zeit."),
	"secrecy":("Sie sollen niemandem davon erzählen?","Gerade dann hilft es, kurz mit jemandem zu sprechen, dem Sie vertrauen."),
	"remote":("Installieren Sie keine App, um die ein Anrufer bittet.","Mit Fernwartungs-Apps können Fremde Ihr Gerät steuern."),
	"cash":("Banken und Polizei holen nie Geld, Karten oder Schmuck ab.","Geben Sie an der Haustür nichts heraus."),
	"shock":("Ein Angehöriger in Not? Rufen Sie unter der bekannten Nummer zurück.","So merken Sie schnell, ob die Geschichte stimmt."),
	"spoof116":("Von 116 116 kommen nie Anrufe.","Die Nummer auf dem Display kann gefälscht sein."),
	"new_payee":("Der Empfänger ist neu für Sie.","Sie haben noch nie Geld an dieses Konto geschickt."),
	"amount_high":("Es geht um einen großen Betrag.","Bei viel Geld lohnt sich eine kurze Pause."),
	"purpose_words":("Der Verwendungszweck klingt nach einer bekannten Masche.","Begriffe wie „Sicherheitsumbuchung“ nutzen echte Banken nicht."),
	"iban_foreign":("Das Empfängerkonto liegt im Ausland.","Von dort ist Geld schwer zurückzuholen."),
	"iban_invalid":("Die IBAN scheint nicht zu stimmen.","Bitte prüfen Sie die Nummer noch einmal."),
	"iban_reported":("Dieses Konto wurde schon einmal gemeldet.","Bitte senden Sie kein Geld dorthin."),
	"repeat_payee":("Das ist heute schon ein weiterer Versuch an diesen Empfänger.","Lassen Sie sich nicht drängen."),
	"many_attempts":("Heute gab es schon viele Zahlungsversuche.","Machen Sie kurz Pause und sprechen Sie mit jemandem."),
	"dictated":("Jemand sagt Ihnen gerade, was Sie tippen sollen.","Legen Sie auf. Echte Bankmitarbeiter tun das nie."),
	"night":("Es ist mitten in der Nacht.","Wichtige Zahlungen können bis morgen warten."),
	"money":("Der Anrufer bittet Sie um Geld.","Prüfen Sie das immer zuerst mit jemandem, dem Sie vertrauen."),
	"police_story":("Die echte Polizei ruft nie an, um Ihr Geld oder Ihre Wertsachen zu schützen.","Legen Sie auf und wählen Sie selbst die 110."),
	"tech":("Microsoft, Apple oder Ihr Anbieter rufen nie von sich aus wegen eines Virus an.","Legen Sie auf und lassen Sie niemanden an Ihr Gerät."),
},
"en":{
	"on_call":("Banks never ask for a PIN or TAN on the phone.","Not even if the number on screen looks real. Callers can fake numbers."),
	"authority":("The caller says they are from the bank or the police.","Hang up and call back yourself, using the number on your card."),
	"credentials":("Nobody from the bank asks for your TAN or PIN.","Only approve requests you started yourself."),
	"safe_account":("Real banks never move money to a \"safe account\".","Your money is safest in your own account."),
	"pressure":("Rushing you is a typical warning sign.","Real bank staff always give you time."),
	"secrecy":("You were told not to tell anyone?","That's exactly when it helps to talk to someone you trust."),
	"remote":("Don't install an app because a caller asks you to.","Remote access apps let strangers control your device."),
	"cash":("Banks and police never collect cash, cards or jewellery.","Don't hand anything over at the door."),
	"shock":("A relative in trouble? Call them back on the number you know.","That way you quickly find out if the story is true."),
	"spoof116":("116 116 never calls you.","The number on screen can be faked."),
	"new_payee":("This payee is new to you.","You've never sent money to this account before."),
	"amount_high":("This is a large amount.","With a lot of money, a short pause is worth it."),
	"purpose_words":("The payment reference sounds like a known trick.","Real banks don't use words like \"security transfer\"."),
	"iban_foreign":("The account is abroad.","Money sent there is hard to get back."),
	"iban_invalid":("The IBAN doesn't look right.","Please check the number again."),
	"iban_reported":("This account has been reported before.","Please don't send money there."),
	"repeat_payee":("This is another attempt to this payee today.","Don't let anyone rush you."),
	"many_attempts":("There have been many payment attempts today.","Take a short break and talk to someone."),
	"dictated":("Someone is telling you what to type.","Hang up. Real bank staff never do this."),
	"night":("It's the middle of the night.","Important payments can wait until tomorrow."),
	"money":("The caller is asking you for money.","Always check with someone you trust first."),
	"police_story":("Real police never call to protect your money or valuables.","Hang up and dial 110 yourself."),
	"tech":("Microsoft, Apple or your provider never call you about a virus.","Hang up and don't let anyone onto your device."),
}}

SYS = """You write short, calm explanations for SafePause, a banking app that pauses risky transfers for older people in Germany.
Write everything in {lang}, even if the input is in another language. Plain words (CEFR A2-B1), like a kind neighbour.{sie}
Never use these words : Betrug, Alarm, dringend, Warnung, fraud, scam, urgent, alert. No exclamation marks. Never blame the person.
Use only the facts given. Do not invent names, numbers or events.
Describe warning signs, never claim for certain that the call is fake or that the caller is lying.
You get candidate points (code + default text). Pick the 1 to 3 that best help the person understand this moment, most important first.
Rewrite them to fit the situation, e.g. mention what the caller asked for.
The title is often shown alone, so it must carry the helpful message itself (e.g. "{ex}"), not just describe the situation.
Return only JSON : {{"points":[{{"code":"<candidate code>","title":"<max 12 words>","detail":"<max 22 words>"}}]}}"""

def lang(l):
	return "de" if l == "de" else "en"

def fallback(sig,l,n=3):
	l = lang(l)
	out,seen = [],set()
	for x in sorted(sig,key=lambda x:(not x.get("hard"),-x["w"]-(15 if x["code"] in STORY else 0))):
		g = GROUP.get(x["code"],x["code"])
		if g in seen or g in SKIP or g not in TPL[l]:
			continue
		seen.add(g)
		ti,de = TPL[l][g]
		out.append({"code":g,"icon":ICON.get(g,"info"),"title":ti,"detail":de})
	return out[:n]

def parse(txt,ok,l):
	m = re.search(r"\{.*\}",txt or "",re.S)
	if not m:
		return []
	out = []
	for p in json.loads(m.group(0)).get("points") or []:
		c,ti,de = p.get("code"),str(p.get("title") or "").strip(),str(p.get("detail") or "").strip()
		s = ti+" "+de
		if c not in ok or c in [x["code"] for x in out] or not ti or len(ti) > 120 or len(de) > 220 or BAN.search(s):
			continue
		if not LANG[l].search(s) or NOT[l].search(s):
			continue
		out.append({"code":c,"icon":ICON.get(c,"info"),"title":ti,"detail":de})
	return out[:3]

def explain(sig,l,facts):
	l = lang(l)
	cand = fallback(sig,l,5)
	if not cand:
		return [],False
	sysm = SYS.format(lang="German" if l == "de" else "English",sie=" Address the person with formal \"Sie\"." if l == "de" else "",ex=EX[l])
	user = json.dumps({"candidates":[{"code":c["code"],"default":c["title"]+" "+c["detail"]} for c in cand],"facts":facts},ensure_ascii=False)
	try:
		pts = parse(relay.chat([{"role":"system","content":sysm},{"role":"user","content":user}]),{c["code"] for c in cand},l)
	except Exception as e:
		print("explain :",e)
		pts = []
	return (pts,True) if pts else (cand[:3],False)
