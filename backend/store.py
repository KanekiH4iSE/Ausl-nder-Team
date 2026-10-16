import json,time,sqlite3,threading
from pathlib import Path

P = Path(__file__).resolve().parent/"data"/"safepause.db"
P.parent.mkdir(exist_ok=True)
db = sqlite3.connect(P,check_same_thread=False)
lk = threading.Lock()
db.executescript("""
CREATE TABLE IF NOT EXISTS events(id INTEGER PRIMARY KEY,at REAL,kind TEXT,sid TEXT,uid TEXT,iban TEXT,new INTEGER,amount REAL,score INTEGER,level TEXT,detail TEXT);
CREATE INDEX IF NOT EXISTS ev_uid ON events(uid,at);
CREATE TABLE IF NOT EXISTS blocked(iban TEXT PRIMARY KEY,at REAL,note TEXT);
""")

def one(sql,*a):
	with lk:
		return db.execute(sql,a).fetchone()[0]

def hist(uid,iban):
	now = time.time()
	return {
		"samePayee":one("SELECT COUNT(*) FROM events WHERE kind='check' AND uid=? AND iban=? AND at>?",uid,iban,now-86400) if iban else 0,
		"lastHour":one("SELECT COUNT(*) FROM events WHERE kind='check' AND uid=? AND at>?",uid,now-3600),
		"newPayees":one("SELECT COUNT(DISTINCT iban) FROM events WHERE kind='check' AND uid=? AND new=1 AND iban!=? AND at>?",uid,iban,now-86400),
		"blocked":bool(one("SELECT COUNT(*) FROM blocked WHERE iban=?",iban)) if iban else False,
	}

def log(kind,sid="",uid="",iban="",new=False,amount=0,score=0,level="",detail=None):
	with lk:
		db.execute("INSERT INTO events(at,kind,sid,uid,iban,new,amount,score,level,detail) VALUES(?,?,?,?,?,?,?,?,?,?)",
			(time.time(),kind,sid,uid,iban,int(new),amount,score,level,json.dumps(detail or {})))
		db.commit()

def block(iban,note=""):
	with lk:
		db.execute("INSERT OR REPLACE INTO blocked VALUES(?,?,?)",(iban,time.time(),note))
		db.commit()
