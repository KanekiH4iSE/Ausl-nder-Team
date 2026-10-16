import re

def rx(*ps):
	return [re.compile(p,re.I) for p in ps]

# call transcript patterns, de + en : code -> (weight,patterns)
CALL = {
	"authority":(15,rx(
		r"\b(sicherheits|betrugs|fraud|security)[ -]?(abteilung|department|team)",
		r"\b(sparkasse|volksbank|raiffeisenbank|commerzbank|deutsche bank|postbank|hypovereinsbank|ing|dkb|n26|comdirect|ihrer bank|your bank)\b",
		r"\b(kriminal)?polizei\b|\b(haupt|ober|kriminal)*kommissar|\bpolice\b|\bdetective\b|\bofficer\b",
		r"\b(ober)?staatsanwalt|\bprosecutor\b|\brechtsanwalt|\blawyer\b|\battorney\b",
		r"\b(bafin|bundesbank|europol|interpol|bka|microsoft|apple|telekom|vodafone)\b")),
	"credentials":(35,rx(
		r"\b(push-?)?tans?\b|\bpins?\b|\bpin-brief|\bpasswort|\bpassword|\bzugangsdaten|\blogin details",
		r"\b(kredit)?kartennummer|\bcard number|\b(windows|lizenz|license)[ -]?(schlüssel|key)",
		r"\b(one-time|verification|security|bestätigungs|sicherheits|\w+-digit|sechsstellig\w*)[ -]?code",
		r"\bcode\b.{0,40}\b(sms|app|erhalten|bekommen|received|sent|geschickt|vorlesen|durchgeben|nennen)",
		r"\bread (me )?(out )?the (code|number)",
		r"\b(bestätigen|freigeben|freigabe|genehmigen)\b.{0,60}(\bapp\b|umbuchung|überweisung|auftrag|transaktion)",
		r"(\bapp\b|umbuchung|überweisung|auftrag|transaktion).{0,40}\b(bestätigen|freigeben|genehmigen)",
		r"\b(approve|confirm|authori[sz]e)\b.{0,60}\b(app|transfer|request|payment|transaction)\b")),
	"safe_account":(40,rx(
		r"sicherheits(konto|umbuchung|überweisung|ueberweisung)",
		r"\b(schutz|treuhand|sonder)konto",
		r"geld in sicherheit|auf ein (sicheres|neues) konto",
		r"\b(geld|erspartes|ersparnisse|vermögen|bank)\b.{0,40}\bnicht (mehr )?sicher",
		r"\b(money|savings|bank)\b.{0,40}\bnot (safe|secure)",
		r"\bsafe account|\bsecurity transfer|\b(protect|secure) your (money|savings|funds)",
		r"\b(move|transfer) (all )?(your|the) (money|savings) to")),
	"pressure":(15,rx(
		r"\b(sofort|umgehend|dringend|eilig|immediately|urgent(ly)?|hurry|right now|as soon as possible)\b",
		r"\bkeine zeit\b|\bno time\b",
		r"\bsonst\b.{0,40}\b(gesperrt|weg|verloren|gefängnis|verhaftet|polizei|abgeschaltet)",
		r"\botherwise\b.{0,40}\b(lose|lost|blocked|frozen|jail|arrest|cut off)",
		r"\bin den nächsten \w+ minuten|\bwithin the next \w+ minutes",
		r"\bjetzt\b.{0,25}\b(bestätigen|freigeben|überweisen)|\b(bestätigen|freigeben|überweisen)\b.{0,25}\bjetzt\b",
		r"\b(confirm|approve|transfer)\b.{0,25}\bnow\b",
		r"\b(kompromittiert|manipuliert|gehackt|missbraucht|infiziert|hacked|compromised|infected)\b")),
	"secrecy":(25,rx(
		r"\b(niemandem|keinem)\b.{0,30}\b(erzählen|sagen|davon|sprechen|reden|darüber)",
		r"\bnicht auflegen|\b(leg|legen sie)\b.{0,20}\bnicht auf\b|\b(bleiben sie|bleib) (dran|am telefon|in der leitung)",
		r"\b(sag|sagen sie)\b.{0,20}\bnichts\b|\bgeheim\b",
		r"\bnicht mit (ihrer|deiner) (familie|bank|filiale)|\b(nicht|kein\w*) (zu )?(trauen|vertrauen)",
		r"\b(don'?t|do not|must not) (tell|mention|hang up|speak)|\bstay on the line",
		r"\b(confidential|secret|between us)\b|\b(cannot|can'?t) be trusted")),
	"remote":(35,rx(
		r"\b(anydesk|teamviewer|quick ?support|rustdesk|supremo|ultraviewer)\b",
		r"\bfernwartung|\bfernzugriff|\b(sie|you|ihnen)\b.{0,30}\bremote\b|\bremote\b.{0,10}\b(zugriff|access|support|desktop|help|hilfe)",
		r"\b(app|programm|software)\b.{0,20}\b(installieren|herunterladen)",
		r"\b(install|download) (an |the |this )?(app|program|software)")),
	"cash":(35,rx(
		r"\b(kollege|kollegin|kurier|bote|mitarbeiter\w*|beamter?|beamtin|fahrer)\b.{0,60}\b(abholen|abholt|vorbei|sicherzustellen|sicherstellen)",
		r"\bbei ihnen\b.{0,30}\babhol|\babhol\w*\b.{0,20}\bbei ihnen\b",
		r"\b(wertsachen|schmuck|gold|bargeld)\b.{0,60}\b(abhol|übergeben|sicherstell|bereitlegen|vorbei)",
		r"\bgeld abheben\b",
		r"\b(courier|colleague|officer|driver|someone)\b.{0,60}\b(pick (it |them )?up|collect|come (by|to your))",
		r"\b(jewel(le)?ry|valuables|gold|cash)\b.{0,60}\b(collect|hand (it |them )?over|pick(ed)? up)",
		r"\bwithdraw\b.{0,30}\b(cash|money|euros?|\d)|\bhand (it|them|the \w+) (over )?to\b")),
	"money":(25,rx(
		r"\d[\d.,]*\s?(euro|€|eur)\b.{0,60}\b(überweis|zahl|abheb|leih|schick|bring|bereit|hol)",
		r"\b(geh|gehen sie|go)\b.{0,15}\b(zur bank|to the bank)",
		r"\b(bill|rechnung|kosten|fee|gebühr)\b.{0,20}\b(is |are |be )?(paid|bezahlt|beglichen)\b",
		r"\b(überweis|zahl|abheb|leih|schick|brauch)\w*\b.{0,60}\d[\d.,]*\s?(euro|€|eur)\b",
		r"\b(need|transfer|send|pay|withdraw|wire|lend)\w*\b.{0,60}(\d[\d.,]*\s?(euros?|pounds?|dollars?)|[€£$]\s?\d)",
		r"(\d[\d.,]*\s?(euros?|pounds?)|[€£$]\s?\d[\d.,]*)\b.{0,60}\b(transfer|send|pay|withdraw|upfront|in cash|release|bail|surgery)",
		r"\bkostenübernahme|\b(bitcoin|krypto|crypto)\b",
		r"\b(gift ?cards?|gutschein\w*|guthabenkarte|paysafe)\b.{0,60}\b(kaufen|codes?|nummer\w*|buy|numbers?|read)")),
	"police_story":(25,rx(
		r"\b(einbrecher\w*|bande|dieb\w*|thie(f|ves))\b.{0,60}\b(festgenommen|gefasst|gefunden|ermitteln|abgesehen|verhaftet)",
		r"\b(liste|list)\b.{0,40}\b(name|adresse|address)|\b(name|adresse|address)\b.{0,40}\b(liste|list)\b",
		r"\b(caught|arrested|apprehended)\b.{0,30}\b(gang|ring|burglars?)|\bburglars?\b.{0,40}\b(caught|arrested|list)")),
	"tech":(25,rx(
		r"\b(microsoft|apple|windows|icloud|telekom|vodafone|o2)\b.{0,100}\b(virus|trojan\w*|malware|schadsoftware|hacker|gehackt|infiziert|kompromittiert|gesperrt|abgeschaltet|rückerstattung|refund|locked|infected|hacked|compromised|cut off|unauthori[sz]ed access|unbefugt\w*)",
		r"\b(virus|trojan\w*|malware|hacker|infiziert|infected)\b.{0,60}\b(computer|rechner|router|laptop|handy|phone)")),
	"shock":(15,rx(
		r"\b(unfall|kaution|gefängnis|haft|verhaftet|krankenhaus|klinik|intensivstation|(not)?operation)\b",
		r"\b(accident|bail|jail|prison|arrested|hospital|surgery|operation)\b",
		r"\b(oma|opa|mama|papa|tante|onkel|grandma|grandpa|granny|mum|mom|dad|auntie?|uncle)\b.{0,30}\b(ich bin'?s|ich bin es|it'?s me)\b",
		r"\b(ich bin'?s|ich bin es|it'?s me)\b.{0,30}\b(dein|deine|your) (enkel\w*|sohn|tochter|neffe|nichte|grandson|granddaughter|son|daughter|nephew|niece)",
		r"\bneue (handy)?nummer\b|\bnew (phone )?number\b",
		r"\b(oma|opa|mama|papa|grandma|grandpa|granny|mum|mom|dad)\b.{0,40}\b(brauche|geld|hilfe|need|money|help)")),
	"spoof116":(25,rx(
		r"\bsperr-?notruf\b",
		r"\b116 ?116\b.{0,40}\b(hier|ruft|anruf|calling|this is)",
		r"\b(hier|this is)\b.{0,20}\b116 ?116\b")),
}

PURPOSE = re.compile(r"sicherheits(konto|umbuchung|überweisung|ueberweisung|transfer|prüfung)|schutzkonto|treuhand|(?<!miet)kaution|rückbuchung|rueckbuchung|safe account|security (transfer|account)|\bbail\b|bitcoin|krypto|crypto|\bbtc\b|\busdt\b",re.I)
PAYEE = re.compile(r"sicherheitskonto|treuhand|schutzkonto|safe account|security account|binance|kraken|coinbase|bitpanda|bybit|\bokx\b|crypto|krypto|wallet",re.I)

def norm(iban):
	return re.sub(r"\s","",iban or "").upper()

def ibanOk(iban):
	s = norm(iban)
	if not re.fullmatch(r"[A-Z]{2}\d{2}[A-Z0-9]{11,30}",s):
		return False
	return int("".join(str(int(c,36)) for c in s[4:]+s[:4])) % 97 == 1

# "we will never ask for your pin" is a good sign, not a bad one
NEG = re.compile(r"\b(nie|niemals|nicht|kein\w*|niemand|never|won'?t|will not|no need|(don'?t|do not) need|without)\b[^.?!,;]{0,40}$",re.I)

def negated(txt,m):
	return bool(NEG.search(re.split(r"[.?!,;]",txt[max(0,m.start()-60):m.start()])[-1]))

def call(txt):
	txt = txt or ""
	out = []
	for code,(w,pats) in CALL.items():
		m = next((m for p in pats for m in p.finditer(txt) if code == "secrecy" or not negated(txt,m)),None)
		if m:
			out.append({"code":code,"w":w,"src":"rule","hit":m.group(0)})
	return out

def tx(t,c,h):
	out = []
	def add(code,w,src="tx",hard=False,**kw):
		out.append({"code":code,"w":w,"src":src,"hard":hard,**kw})

	iban = norm(t.iban)
	if iban and not ibanOk(iban):
		add("iban_invalid",0,hard=True)
	if h.get("blocked"):
		add("iban_reported",40,"history")
	if iban[:2] and iban[:2] != "DE":
		add("iban_foreign",15,country=iban[:2])

	if t.vop == "mismatch":
		add("vop_mismatch",35)
	elif t.vop == "close":
		add("vop_close",20)
	elif t.vop == "none":
		add("vop_none",10)
	if t.newPayee:
		add("new_payee",15)
	if t.amount >= 10000:
		add("amount_high",25)
	elif t.amount >= 2000:
		add("amount_high",15)
	m = PURPOSE.search(t.purpose or "")
	if m:
		add("purpose_words",30,hit=m.group(0))
	m = PAYEE.search(t.payee or "")
	if m:
		add("payee_words",20,hit=m.group(0))

	a = (list(c.answers)+["","",""])[:3]
	if c.onCall:
		add("on_call",25,"ctx")
	elif a[0] == "yes":
		add("on_call",25,"answer")
	elif a[0] == "unsure":
		add("on_call",10,"answer")
	if a[1] == "yes":
		add("rushed",25,"answer")
	elif a[1] == "unsure":
		add("rushed",10,"answer")
	if a[2] == "no":
		add("unknown_payee",10,"answer")
	elif a[2] == "unsure":
		add("unknown_payee",5,"answer")
	if c.dictated:
		add("dictated",0,"answer",True)
	if c.hour is not None and 0 <= c.hour < 6:
		add("night",10)

	if h.get("samePayee",0) >= 1:
		add("repeat_payee",20,"history",n=h["samePayee"])
	if h.get("lastHour",0) >= 5:
		add("many_attempts",0,"history",True,n=h["lastHour"])
	if t.newPayee and h.get("newPayees",0) >= 2:
		add("many_new_payees",15,"history",n=h["newPayees"])
	return out

def score(sig):
	n = min(100,round(sum(x["w"] for x in sig)))
	hard = any(x.get("hard") for x in sig)
	lvl = "pause" if hard or n >= 60 else "notice" if n >= 35 else "ok"
	return n,hard,lvl
