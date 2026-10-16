from types import SimpleNamespace as NS
import rules

def tx(**kw):
	d = {"payee":"","iban":"","amount":0,"purpose":"","vop":"match","newPayee":False}
	d.update(kw)
	return NS(**d)

def ctx(**kw):
	d = {"onCall":False,"answers":[],"dictated":False,"hour":None}
	d.update(kw)
	return NS(**d)

def codes(sig):
	return {x["code"] for x in sig}

def test_iban():
	assert rules.ibanOk("DE89 3704 0044 0532 0130 00")
	assert not rules.ibanOk("DE88 3704 0044 0532 0130 00")
	assert not rules.ibanOk("hello")

def test_call_de():
	c = codes(rules.call("Guten Tag, hier ist die Sicherheitsabteilung Ihrer Sparkasse. Bitte bestätigen Sie jetzt die Sicherheitsumbuchung in Ihrer App und legen Sie nicht auf. Erzählen Sie niemandem davon."))
	assert {"authority","safe_account","credentials","pressure","secrecy"} <= c

def test_call_en():
	c = codes(rules.call("This is your bank's fraud department. Move your money to a safe account right now and don't tell anyone. Read me the code."))
	assert {"authority","safe_account","pressure","secrecy","credentials"} <= c

def test_shock_de():
	c = codes(rules.call("Oma, ich bin's. Ich hatte einen Unfall und brauche sofort 8000 Euro für die Kaution. Sag bitte Papa nichts."))
	assert {"shock","pressure","secrecy"} <= c

def test_fake_police_de():
	s = rules.call("Hier spricht Hauptkommissar Weber. In Ihrer Straße wurde eine Bande festgenommen, auf einer Liste steht Ihr Name. Ihr Erspartes ist bei der Bank nicht mehr sicher.")
	assert {"authority","safe_account"} <= codes(s)
	assert rules.score(s)[2] != "ok"

def test_negation():
	assert not rules.call("Wir werden Sie niemals am Telefon nach Ihrer PIN oder TAN fragen.")
	assert not rules.call("We will never ask for your password.")
	c = codes(rules.call("Sie dürfen nicht warten, Sie müssen sofort die TAN durchgeben."))
	assert {"pressure","credentials"} <= c

def test_genuine_bank_ok():
	for t in ["Guten Tag, hier ist Frau Lehmann von der Sparkasse. Ihre neue Karte liegt in der Filiale, Sie können sie jederzeit abholen.",
		"Hello, this is Sarah from Barclays, I'm calling to confirm your appointment on Thursday to update your account details."]:
		assert rules.score(rules.call(t))[2] == "ok",(t,rules.call(t))

def test_money_and_tech():
	assert "money" in codes(rules.call("Ich brauche dringend 1.900 Euro für die Miete, kannst du das heute noch überweisen?"))
	assert "tech" in codes(rules.call("This is Kevin from Microsoft Support, we detected a Trojan on your Windows computer."))
	assert "police_story" in codes(rules.call("Wir haben zwei Einbrecher festgenommen, auf deren Liste steht auch Ihre Adresse."))

def test_cash_and_remote():
	assert "cash" in codes(rules.call("Ein Kollege kommt gleich vorbei und holt Ihre Karte ab."))
	assert "remote" in codes(rules.call("Please install AnyDesk so I can help you."))
	assert "spoof116" in codes(rules.call("Hier ist der Sperr-Notruf, wir sichern Ihr Konto."))

def test_normal_calls():
	for t in ["Hallo Mama, ich wollte nur fragen, ob wir am Sonntag zum Kaffee vorbeikommen können.",
		"Hi, this is Dr. Weber's office calling to confirm your appointment next Tuesday at ten.",
		"Kannst du die Kinder heute um vier abholen? Ich komme später."]:
		n,hard,lvl = rules.score(rules.call(t))
		assert lvl == "ok",(t,rules.call(t))

def test_klaus_pauses():
	s = rules.tx(tx(payee="M. Keller",iban="DE89370400440532013000",amount=4800,purpose="Sicherheitsumbuchung",newPayee=True),ctx(onCall=True,answers=["yes","unsure","no"]),{})
	s += rules.call("Guten Tag, hier ist die Sicherheitsabteilung Ihrer Bank. Bitte bestätigen Sie jetzt die Sicherheitsumbuchung.")
	assert rules.score(s)[2] == "pause"

def test_normal_transfer_ok():
	s = rules.tx(tx(payee="Stadtwerke",iban="DE89370400440532013000",amount=120,purpose="Rechnung 4711"),ctx(answers=["no","no","yes"]),{})
	assert rules.score(s)[2] == "ok"

def test_mietkaution_not_flagged():
	s = rules.tx(tx(purpose="Mietkaution Wohnung 3"),ctx(),{})
	assert "purpose_words" not in codes(s)

def test_hard_flags():
	assert rules.score(rules.tx(tx(),ctx(dictated=True),{}))[1]
	assert rules.score(rules.tx(tx(),ctx(),{"lastHour":5}))[1]
	assert "repeat_payee" in codes(rules.tx(tx(iban="DE89370400440532013000"),ctx(),{"samePayee":1}))
