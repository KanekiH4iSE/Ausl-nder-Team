const T={
de:{
 skip:"Zur Demo springen",sound:"Ton",fullApp:"App im Vollbild",backSite:"Zur Website",keysHint:"Tipp: Tasten J, N oder ? funktionieren auch.",loadMsgs:["Ruhe wird geladen","Fragen werden sortiert","Anna wird benachrichtigt","Pause bereit"],loadSub:"ruhig, Schritt für Schritt, nie allein",loaded:"Seite geladen",mapLabel:"Illustration: Deutschlandkarte aus Punkten in den Farben der Flagge. Rote Linien zeigen gemeldete Betrugsanrufe, goldene Ringe zeigen, wo SafePause die Zahlung pausiert hätte.",lgCall:"gemeldeter Anruf",lgPause:"pausiert",lgSrc:"Illustration · Orte aus Polizeimeldungen, Sep–Okt 2026",homeL:"Herr Klaus",tkLabel:"Polizeimeldungen",
 tk:[["11.10.2026","Kaiserslautern","87 Jahre, falscher Polizist, hoher fünfstelliger Betrag überwiesen"],["05.10.2026","Kassel","falsche Bankmitarbeiter, mehrere Zehntausend Euro"],["25.09.2026","Günzburg","rund 129.000 € über Freigaben in der Banking-App"],["04.10.2026","Weimar","60 Jahre, über 6.500 € nach einer App-Freigabe"],["05.10.2026","Memmingen","73 Jahre, TAN am Telefon weitergegeben"],["11.09.2026","Hemer","ein Anruf über dreieinhalb Stunden"],["28.09.2026","Waldeck-Frankenberg","gefälschte Bank-Nummer auf dem Display"]],navDemo:"Demo",navWhy:"Warum",navPat:"Maschen",navA11y:"Barrierefreiheit",
 heroH:"Eine Pause, bevor das Geld *weg* ist.",
 heroSub:"Wenn ein falscher Bankmitarbeiter anruft, bremst SafePause den Moment: drei einfache Fragen, ein Anruf bei jemandem, dem man vertraut, und eine sichere Pause.",
 ctaDemo:"Demo starten",ctaStates:"Alle Zustände ansehen",mio:"Mio. €",
 st1:"Schaden durch falsche Polizisten 2025 (BKA)",st2:"angezeigte Fälle allein dieser Masche, 2025",st3:"Sperr-Notruf. In SafePause immer einen Tipp entfernt.",
 motionOff:"Bewegung anhalten",motionOn:"Bewegung fortsetzen",
 demoH:"Probieren Sie es *aus*.",demoIntro:"Sie sind Herr Klaus, 74. Gerade ruft „Ihre Bank“ an und bittet um eine Freigabe.",
 cmpH:"Gleicher Moment. *Anderes* Gefühl.",cmpIntro:"Betrüger arbeiten mit Eile, Autorität und Isolation. Eine laute Warnung macht noch mehr Druck. SafePause macht das Gegenteil.",
 cmpLeft:"Typische Warnung",alarmH:"WARNUNG! Verdächtige Transaktion erkannt!",alarmS:"Handeln Sie sofort!",alarmB:"Trotzdem senden",
 calmH:"Diese Überweisung wirkt ungewöhnlich.",calmS:"Lassen Sie uns kurz gemeinsam prüfen.",
 cmpN1:"Rot, Großbuchstaben, Countdown: Das Gehirn schaltet auf Flucht.",cmpN2:"Ruhiger Ton, eine Frage pro Bildschirm, keine Uhr gegen Sie.",
 patH:"Fünf Maschen. Fünf *ruhige* Antworten.",patIntro:"Aus Warnungen der Polizei und der Verbraucherzentralen. Tippen Sie auf eine Karte.",
 flipF:"Was SafePause tut",flipB:"Zurück",
 pats:[["Falscher Bankmitarbeiter","„Wir sehen verdächtige Buchungen auf Ihrem Konto.“","Frage 1 erkennt den laufenden Anruf. Hinweis: Banken fragen nie nach PIN oder TAN."],
  ["Schockanruf","„Ihr Sohn hatte einen Unfall. Sagen Sie niemandem etwas.“","Frage 2 erkennt Druck und Geheimhaltung. Ein Tipp, und Anna ist dran."],
  ["Kartenabholung","„Ein Kollege holt Ihre Karte gleich ab.“","Klarer Hinweis: Echte Banken holen nie Karten ab. Sperren über 116 116."],
  ["Push-TAN-Trick","„Bestätigen Sie bitte kurz in Ihrer App.“","Die Zahlung pausiert. Erinnerung: Nur selbst ausgelöste TANs freigeben."],
  ["Falsche 116 116","„Hier ist der Sperr-Notruf. Wir sichern Ihr Konto.“","Hinweis: Von 116 116 kommen nie Anrufe. Die Nummer auf dem Display kann gefälscht sein."]],
 accH:"Für alle gebaut. Und *messbar*.",accIntro:"Seit Juni 2025 muss Online-Banking in Deutschland barrierefrei sein. Diese Werte misst die Seite gerade live.",
 f1:"Kontrast von Text auf Hintergrund (Ziel: 4,5:1)",f2:"kleinste Schrift in der App",f3:"Höhe jedes Knopfs (WCAG verlangt 24)",f4:"Sprachniveau der Texte. Gesetzliche Grenze: B2.",f5:"Animationen bisher auf dieser Seite. Alle aus, wenn Ihr System „Bewegung reduzieren“ wünscht.",
 foot1:"Prototyp. Fiktive Bank, fiktive Personen, keine echten Daten. Gestaltet mit BFSG und WCAG 2.2 im Blick – kein Zertifikat.",
 foot2:"Zahlen: Polizeiliche Kriminalstatistik 2025 (BKA, via dpa).",
 size:"Größer",contrast:"Kontrast",simple:"Einfach",detailed:"Ausführlich",read:"Vorlesen",stopRead:"Stopp",judge:"Alle Zustände",
 jScen:"Szenario",jScreen:"Bildschirm",jContrast:"Kontrast, live gemessen",ffwd:"Pause vorspulen",
 annaLbl:"Annas Handy",annaExplain:"Die Vertrauensperson sieht nur das Nötigste: gerundeter Betrag, „neuer Empfänger“. Keine IBAN.",
 scen:{klaus:"Herr Klaus (Anruf)",mismatch:"Name passt nicht",close:"Name passt fast",nocontact:"Keine Vertrauensperson",repeat:"Zweiter Versuch",expired:"Pause abgelaufen",offline:"Offline"},
 screens:{bank:"Bank",notice:"1 Hinweis",q:"2 Fragen",findings:"3 Aufgefallen",trust:"4 Vertrauen",pause:"5 Pause",done:"6 Geschafft"},
 transfer:"Überweisung",from:"Von: Girokonto Klaus Becker",payee:"Empfänger",iban:"IBAN",amountL:"Betrag",purpose:"Verwendungszweck",purposeV:"Sicherheitsumbuchung",
 callNow:"Laufender Anruf: „Ihre Bank“",
 script:["Guten Tag, hier ist die Sicherheitsabteilung Ihrer Bank.","Wir sehen verdächtige Abbuchungen auf Ihrem Konto.","Bitte bestätigen Sie jetzt die Sicherheitsumbuchung."],
 approve:"Mit Push-TAN freigeben",demoNote:"Demo. Tippen Sie auf „Freigeben“, um zu sehen, was passiert.",
 offline:"Keine Internetverbindung. Ihre Zahlung bleibt sicher pausiert, bis Sie wieder online sind.",
 noticeH:"Diese Überweisung wirkt ungewöhnlich.",noticeL:"Lassen Sie uns kurz gemeinsam prüfen. Das dauert etwa eine Minute.",
 newP:"neu",check:"Gemeinsam prüfen",notNow:"Jetzt nicht",notNowHint:"Dann pausieren wir die Zahlung zur Sicherheit.",
 repeat:"Das ist heute schon der zweite Versuch an diesen Empfänger.",
 stepOf:(a,b)=>`Frage ${a} von ${b}`,
 qs:["Telefoniert oder chattet gerade jemand mit Ihnen?","Werden Sie zur Eile oder zur Geheimhaltung gedrängt?","Kennen Sie den Empfänger persönlich?"],
 yes:"Ja",no:"Nein",unsure:"Ich bin unsicher",dictated:"Jemand sagt mir gerade, was ich tippen soll",
 findH:"Das ist uns aufgefallen",
 pCall:"Banken fragen am Telefon nie nach PIN oder TAN.",pCallD:"Auch nicht, wenn die Nummer auf dem Display echt aussieht. Anrufer können Nummern fälschen.",
 pRush:"Eile ist ein typisches Warnzeichen.",pRushD:"Echte Bankmitarbeiter geben Ihnen immer Zeit.",
 pNew:"Der Empfänger ist neu für Sie.",pNewD:"Sie haben noch nie Geld an dieses Konto geschickt.",
 vMatch:"Der Name passt zur IBAN. Das heißt aber nicht, dass die Zahlung sicher ist.",vMatchD:"Die Bank prüft nur den Namen, nicht die Absicht dahinter.",
 vMis:"Der Name passt nicht zur IBAN. Das Geld würde an jemand anderen gehen.",vMisD:"Das Konto gehört laut Bank „Kellner Trading GmbH“.",
 vClose:"Der Name passt nur fast zur IBAN. Bitte prüfen Sie ihn genau.",vCloseD:"Die Bank kennt das Konto als „M. Kellner“.",
 ask:"Jemanden fragen",pauseBtn:"Zahlung pausieren",anyway:"Trotzdem fortfahren",
 anywayH:"Sie entscheiden.",anywayL:"Wir empfehlen trotzdem: erst kurz mit jemandem sprechen, dem Sie vertrauen.",askFirst:"Doch erst jemanden fragen",sendNow:"Zahlung jetzt ausführen",
 trustH:"Fragen Sie jemanden, dem Sie vertrauen.",trustL:"Sie müssen das nicht allein entscheiden.",
 callAnna:"Anna anrufen",textAnna:"Anna schreiben",callBank:"Bank anrufen (Nummer auf Ihrer Karte)",block:"Zugang sperren: 116 116",
 trustNote:"Echte Bankmitarbeiter warten gern. Betrüger nicht.",toPause:"Weiter zur sicheren Pause",
 emptyH:"Sie haben noch keine Vertrauensperson.",emptyL:"Eine Person aus der Familie oder ein guter Freund kann Ihnen in solchen Momenten helfen.",addContact:"Vertrauensperson hinzufügen",
 pauseH:"Ihre Zahlung ist pausiert.",safe:"Ihr Geld ist noch auf Ihrem Konto.",left:"verbleibend",
 inhale:"Einatmen …",exhale:"… und ausatmen.",whileCall:"Die Pause bleibt, solange der Anruf läuft.",
 tanNote:"Geben Sie nur Push-TANs frei, die Sie selbst ausgelöst haben.",
 cancelPay:"Zahlung abbrechen",later:"Später fortsetzen",annaMsg:"Anna: „Bitte nicht senden! Ich rufe dich gleich an.“",
 expH:"Die Pause ist vorbei.",expL:"Nichts wurde gesendet. Die Zahlung wartet weiterhin auf Ihre Freigabe.",recheck:"Noch einmal prüfen",
 doneH:"Gut gemacht. Die Zahlung ist abgebrochen.",doneL:"Ihr Geld ist sicher.",
 laterH:"Die Zahlung bleibt pausiert.",laterL:"Sie können sie später in Ruhe prüfen. Nichts geht ohne Ihre Freigabe raus.",
 sentH:"Die Zahlung wurde ausgeführt.",sentL:"Falls Sie unsicher werden: Rufen Sie sofort Ihre Bank an. Je schneller, desto besser.",
 n1:"Ruft die Person wieder an? Legen Sie einfach auf.",n2:"Im Zweifel: Zugang sperren unter 116 116.",n3:"Echte Banken holen nie Karten an der Haustür ab.",
 report:"Versuch melden (Polizei oder Bank)",close:"Schließen",
 nLock:"Montag, 19. Oktober",nApp:"SafePause · Papa",nText:"Papa möchte ca. 4.800 € an einen neuen Empfänger senden. Er telefoniert gerade.",
 nStop:"Bitte stoppen",nOk:"Passt, alles gut",nPriv:"Du siehst keine IBAN und keine Kontodaten.",nIdle:"Keine neuen Mitteilungen",
 nStopped:"Du hast die Zahlung angehalten. Ruf Papa jetzt an.",nOked:"Du hast bestätigt. Papa entscheidet selbst.",
 tAnnaStop:"Anna hat die Zahlung angehalten.",tAnnaOk:"Anna hat bestätigt.",tCalling:"Anna wird benachrichtigt …",tCallSim:"In der echten App öffnet sich jetzt das Telefon.",tAdd:"Im Prototyp nicht verfügbar.",tReport:"Im Prototyp nicht verfügbar. In der echten App: 110 oder Ihre Bank.",
 noVoice:"Vorlesen wird von diesem Browser nicht unterstützt.",cText:"Text auf Hintergrund",cMuted:"Grauer Text",cBtn:"Knopf-Text",cGold:"Text auf Gold",amount:"4.800,00 €"
},
en:{
 skip:"Skip to demo",sound:"Sound",fullApp:"Full-screen app",backSite:"Back to website",keysHint:"Tip: keys Y, N or ? work too.",loadMsgs:["Loading calm","Sorting the questions","Letting Anna know","Pause ready"],loadSub:"calm, step by step, never alone",loaded:"Page loaded",mapLabel:"Illustration: a map of Germany made of dots in the flag colours. Red lines show reported scam calls; gold rings show where SafePause would have paused the payment.",lgCall:"reported call",lgPause:"paused",lgSrc:"Illustration · places from police reports, Sep–Oct 2026",homeL:"Herr Klaus",tkLabel:"Police reports",
 tk:[["11.10.2026","Kaiserslautern","aged 87, fake police officer, high five-figure sum transferred"],["05.10.2026","Kassel","fake bank employees, tens of thousands of euros"],["25.09.2026","Günzburg","about €129,000 via banking-app approvals"],["04.10.2026","Weimar","aged 60, over €6,500 after one app approval"],["05.10.2026","Memmingen","aged 73, TAN shared on the phone"],["11.09.2026","Hemer","one call lasting three and a half hours"],["28.09.2026","Waldeck-Frankenberg","faked bank number on the caller display"]],navDemo:"Demo",navWhy:"Why",navPat:"Scams",navA11y:"Accessibility",
 heroH:"A pause before the money is *gone*.",
 heroSub:"When a fake bank employee calls, SafePause slows the moment down: three simple questions, a call to someone you trust, and a safe pause.",
 ctaDemo:"Start demo",ctaStates:"See all states",mio:"M €",
 st1:"lost to fake police officers in Germany, 2025 (BKA)",st2:"reported cases of this scam alone, 2025",st3:"Germany's blocking hotline. Always one tap away in SafePause.",
 motionOff:"Pause motion",motionOn:"Resume motion",
 demoH:"Try it *yourself*.",demoIntro:"You're Herr Klaus, 74. \"Your bank\" is on the phone, asking you to approve something.",
 cmpH:"Same moment. *Different* feeling.",cmpIntro:"Scammers rely on urgency, authority and isolation. A loud warning adds even more pressure. SafePause does the opposite.",
 cmpLeft:"Typical warning",alarmH:"WARNING! Suspicious transaction detected!",alarmS:"Act now!",alarmB:"Send anyway",
 calmH:"This transfer looks unusual.",calmS:"Let's check it together.",
 cmpN1:"Red, capitals, countdown: the brain switches to flight mode.",cmpN2:"Calm tone, one question per screen, no clock against you.",
 patH:"Five scams. Five *calm* answers.",patIntro:"Based on police and consumer-centre warnings. Tap a card.",
 flipF:"What SafePause does",flipB:"Back",
 pats:[["Fake bank employee","\"We see suspicious transactions on your account.\"","Question 1 detects the ongoing call. Tip: banks never ask for a PIN or TAN."],
  ["Shock call","\"Your son had an accident. Don't tell anyone.\"","Question 2 detects pressure and secrecy. One tap, and Anna is on the line."],
  ["Card pick-up","\"A colleague will collect your card shortly.\"","Clear tip: real banks never collect cards. Block via 116 116."],
  ["Push-TAN trick","\"Please just confirm quickly in your app.\"","The payment pauses. Reminder: approve only TANs you started yourself."],
  ["Fake 116 116","\"This is the blocking hotline. We're securing your account.\"","Tip: 116 116 never calls you. The number on the display can be faked."]],
 accH:"Built for everyone. *Measurably*.",accIntro:"Since June 2025, online banking in Germany must be accessible. This page measures these values live.",
 f1:"Contrast of text on background (target: 4.5:1)",f2:"smallest text in the app",f3:"height of every button (WCAG asks for 24)",f4:"Language level of the copy. Legal limit: B2.",f5:"animations so far on this page. All off when your system asks to reduce motion.",
 foot1:"Prototype. Fictional bank, fictional people, no real data. Designed with BFSG and WCAG 2.2 in mind – not certified.",
 foot2:"Figures: German police crime statistics 2025 (BKA, via dpa).",
 size:"Larger",contrast:"Contrast",simple:"Simple",detailed:"Detailed",read:"Read aloud",stopRead:"Stop",judge:"All states",
 jScen:"Scenario",jScreen:"Screen",jContrast:"Contrast, measured live",ffwd:"Fast-forward pause",
 annaLbl:"Anna's phone",annaExplain:"The trusted person sees only what's needed: a rounded amount and \"new payee\". No IBAN.",
 scen:{klaus:"Herr Klaus (call)",mismatch:"Name doesn't match",close:"Name almost matches",nocontact:"No trusted person",repeat:"Second attempt",expired:"Pause expired",offline:"Offline"},
 screens:{bank:"Bank",notice:"1 Notice",q:"2 Questions",findings:"3 Findings",trust:"4 Trust",pause:"5 Pause",done:"6 Done"},
 transfer:"Transfer",from:"From: current account Klaus Becker",payee:"Payee",iban:"IBAN",amountL:"Amount",purpose:"Reference",purposeV:"Security transfer",
 callNow:"Ongoing call: \"Your bank\"",
 script:["Good afternoon, this is your bank's security department.","We see suspicious withdrawals on your account.","Please confirm the security transfer now."],
 approve:"Approve with push-TAN",demoNote:"Demo. Tap \"Approve\" to see what happens.",
 offline:"No internet connection. Your payment stays safely paused until you're back online.",
 noticeH:"This transfer looks unusual.",noticeL:"Let's check it together. It takes about a minute.",
 newP:"new",check:"Check together",notNow:"Not now",notNowHint:"Then we'll pause the payment to be safe.",
 repeat:"This is already the second attempt to this payee today.",
 stepOf:(a,b)=>`Question ${a} of ${b}`,
 qs:["Is someone on the phone or chatting with you right now?","Are you being rushed or asked to keep this secret?","Do you know the payee personally?"],
 yes:"Yes",no:"No",unsure:"I'm not sure",dictated:"Someone is telling me what to type right now",
 findH:"Here's what we noticed",
 pCall:"Banks never ask for a PIN or TAN on the phone.",pCallD:"Not even if the number on screen looks real. Callers can fake numbers.",
 pRush:"Rushing you is a typical warning sign.",pRushD:"Real bank staff always give you time.",
 pNew:"This payee is new to you.",pNewD:"You've never sent money to this account before.",
 vMatch:"The name matches the IBAN. That doesn't mean the payment is safe.",vMatchD:"The bank checks only the name, not the intent behind it.",
 vMis:"The name doesn't match the IBAN. The money would go to someone else.",vMisD:"According to the bank, the account belongs to \"Kellner Trading GmbH\".",
 vClose:"The name only almost matches the IBAN. Please check it carefully.",vCloseD:"The bank knows the account as \"M. Kellner\".",
 ask:"Ask someone",pauseBtn:"Pause payment",anyway:"Continue anyway",
 anywayH:"It's your decision.",anywayL:"We still recommend talking to someone you trust first.",askFirst:"Ask someone first",sendNow:"Send payment now",
 trustH:"Ask someone you trust.",trustL:"You don't have to decide this alone.",
 callAnna:"Call Anna",textAnna:"Text Anna",callBank:"Call the bank (number on your card)",block:"Block access: 116 116",
 trustNote:"Real bank staff are happy to wait. Scammers aren't.",toPause:"Go to safe pause",
 emptyH:"You haven't added a trusted person yet.",emptyL:"A family member or close friend can help you in moments like this.",addContact:"Add trusted person",
 pauseH:"Your payment is paused.",safe:"Your money is still in your account.",left:"remaining",
 inhale:"Breathe in …",exhale:"… and breathe out.",whileCall:"The pause stays on while the call continues.",
 tanNote:"Only approve push-TANs you started yourself.",
 cancelPay:"Cancel payment",later:"Continue later",annaMsg:"Anna: \"Please don't send it! I'll call you right now.\"",
 expH:"The pause is over.",expL:"Nothing was sent. The payment is still waiting for your approval.",recheck:"Check again",
 doneH:"Well done. The payment is cancelled.",doneL:"Your money is safe.",
 laterH:"The payment stays paused.",laterL:"You can review it calmly later. Nothing leaves without your approval.",
 sentH:"The payment was sent.",sentL:"If you start to feel unsure, call your bank right away. The sooner, the better.",
 n1:"Does the person call again? Just hang up.",n2:"When in doubt, block access via 116 116.",n3:"Real banks never collect cards at your door.",
 report:"Report the attempt (police or bank)",close:"Close",
 nLock:"Monday, 19 October",nApp:"SafePause · Dad",nText:"Dad wants to send about €4,800 to a new payee. He's on a call right now.",
 nStop:"Please stop",nOk:"It's fine",nPriv:"You don't see the IBAN or any account details.",nIdle:"No new notifications",
 nStopped:"You paused the payment. Call Dad now.",nOked:"You confirmed. Dad decides himself.",
 tAnnaStop:"Anna paused the payment.",tAnnaOk:"Anna confirmed.",tCalling:"Notifying Anna …",tCallSim:"In the real app, the phone dialer opens now.",tAdd:"Not available in the prototype.",tReport:"Not available in the prototype. In the real app: 110 or your bank.",
 noVoice:"Read aloud isn't supported in this browser.",cText:"Text on background",cMuted:"Grey text",cBtn:"Button text",cGold:"Text on gold",amount:"€4,800.00"
}};

const SCEN={klaus:{vop:"match",contacts:true},mismatch:{vop:"mismatch",contacts:true},close:{vop:"close",contacts:true},nocontact:{vop:"match",contacts:false},repeat:{vop:"match",contacts:true,repeat:true},expired:{vop:"match",contacts:true,start:"pause",expired:true},offline:{vop:"match",contacts:true,offline:true}};
const ORDER=["bank","notice","q","findings","trust","pause","done"];
const RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE=matchMedia("(hover: hover) and (pointer: fine)").matches;
const OUT="cubic-bezier(.22,1,.36,1)",SPRING="cubic-bezier(.34,1.56,.64,1)";

let ANIMS=0;
function A(el,kf,o){if(RM||!el||!el.animate)return null;ANIMS++;return el.animate(kf,o)}

const ic={
 phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
 msg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 5h16v11H8l-4 4z"/></svg>',
 bank:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 10l9-6 9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"/></svg>',
 lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
 clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
 user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
 id:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.5"/><path d="M14 10h4M14 14h3"/></svg>',
 shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg>',
 info:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>',
 wifi:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 3l18 18M8.5 16.5a5 5 0 0 1 7 0M5 13a10 10 0 0 1 5-2.7M14 10.3A10 10 0 0 1 19 13"/></svg>',
 plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
 flip:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 12a8 8 0 0 1 14-5.3M20 4v4h-4M20 12a8 8 0 0 1-14 5.3M4 20v-4h4"/></svg>'
};

let pref={lang:"de",scale:1,contrast:false,simple:true,sound:true};
try{const p=JSON.parse(localStorage.getItem("sp-pref")||"null");if(p)pref=Object.assign(pref,p)}catch(e){}
const savePref=()=>{try{localStorage.setItem("sp-pref",JSON.stringify(pref))}catch(e){}};
const $=id=>document.getElementById(id);
const t=()=>T[pref.lang];

function fresh(key){const s=SCEN[key];return{scen:key,screen:s.start||"bank",q:0,ans:[],anna:0,annaMsg:false,left:1800,expired:!!s.expired,variant:"cancel",anyway:false}}
let st=fresh("klaus"),timer=null,breathT=null,typeT=null,busy=false;

/* ---------- text splitting ---------- */
function split(el){
  const raw=el.textContent.trim(),txt=raw.replace(/\*/g,"");el.setAttribute("aria-label",txt);
  const chars=w=>[...w].map(c=>`<span class="ch">${c}</span>`).join("");
  el.innerHTML=raw.split(" ").map(w=>{const m=w.match(/^\*(.+)\*([.,!?]?)$/);
    return m?`<span class="w" aria-hidden="true"><span class="em">${chars(m[1])}</span>${chars(m[2])}</span>`:`<span class="w" aria-hidden="true">${chars(w)}</span>`}).join(" ");
}
function playSplit(el,delay=0){
  el.querySelectorAll(".ch").forEach((c,i)=>A(c,[{transform:"translateY(70%) rotate(8deg)",opacity:0},{transform:"none",opacity:1}],{duration:760,delay:delay+i*24,easing:OUT,fill:"backwards"}));
}

/* ---------- static i18n ---------- */
function applyStatic(){
  const L=t();
  document.querySelectorAll("[data-i]").forEach(el=>{const k=el.dataset.i;if(L[k]===undefined)return;
    if(el.hasAttribute("data-split")){el.textContent=L[k];split(el)}else el.textContent=L[k]});
  $("skip").textContent=L.skip;$("foot1").textContent=L.foot1;$("foot2").textContent=L.foot2;
  $("annaLbl").textContent=L.annaLbl;$("annaExplain").textContent=L.annaExplain;
  $("jh1").textContent=L.jScen;$("jh2").textContent=L.jScreen;$("jh3").textContent=L.jContrast;
  tilesRender();
}

function applyPrefs(){
  const r=document.documentElement,L=t();
  r.lang=pref.lang;r.style.setProperty("--scale",pref.scale);
  if(pref.contrast)r.setAttribute("data-contrast","high");else r.removeAttribute("data-contrast");
  $("tSize").setAttribute("aria-pressed",pref.scale>1);$("tContrast").setAttribute("aria-pressed",pref.contrast);$("tSimple").setAttribute("aria-pressed",pref.simple);
  $("langLbl").textContent=pref.lang==="de"?"EN":"DE";
  $("tLang").setAttribute("aria-label",pref.lang==="de"?"Switch to English":"Auf Deutsch wechseln");
  $("sizeLbl").textContent=L.size+(pref.scale>1.3?" +2":pref.scale>1?" +1":"");
  $("contrastLbl").textContent=L.contrast;$("simpleLbl").textContent=pref.simple?L.simple:L.detailed;
  $("readLbl").textContent=L.read;$("judgeLbl").textContent=L.judge;$("soundLbl").textContent=L.sound;[["tSize",L.size],["tContrast",L.contrast],["tSimple",pref.simple?L.simple:L.detailed],["tSound",L.sound],["tRead",L.read],["tJudge",L.judge],["fullLink",L.fullApp]].forEach(([id,l])=>{const e=$(id);if(e)e.setAttribute("aria-label",l)});$("tSound").setAttribute("aria-pressed",pref.sound);$("fullLbl").textContent=L.fullApp;$("backLbl").textContent=L.backSite;$("backSite").setAttribute("aria-label",L.backSite);
  $("motionLbl").textContent=motionPaused?L.motionOn:L.motionOff;
  document.title="SafePause – "+L.heroH.replace(/\*/g,"").replace(/\.$/,"");
  savePref();
}

/* ---------- hero map ---------- */
const GER=[[8.66,54.91],[9.42,54.83],[9.98,54.79],[10.95,54.36],[11.09,54.0],[12.0,54.18],[12.52,54.47],[13.65,54.53],[14.21,53.93],[14.39,53.25],[14.12,52.82],[14.64,52.57],[14.53,51.97],[14.97,51.42],[15.04,51.02],[14.31,51.05],[13.55,50.71],[12.94,50.42],[12.24,50.27],[12.52,49.99],[12.47,49.57],[13.03,49.31],[13.84,48.77],[13.73,48.51],[13.39,48.36],[12.76,48.13],[13.0,47.64],[12.21,47.69],[11.1,47.4],[10.45,47.55],[10.18,47.27],[9.6,47.53],[8.6,47.62],[7.67,47.53],[7.59,47.83],[7.86,48.6],[8.23,48.97],[7.12,49.12],[6.37,49.46],[6.24,49.9],[6.13,50.13],[6.36,50.33],[6.05,50.73],[5.97,51.05],[6.17,51.18],[5.95,51.8],[6.72,51.9],[6.98,52.23],[7.05,52.64],[6.69,53.3],[7.2,53.25],[7.9,53.75],[8.5,53.55],[8.85,54.05],[8.6,54.3]];
const CITIES=[["Berlin",13.4,52.52,1],["Kaiserslautern",7.77,49.44],["Kassel",9.48,51.31],["Günzburg",10.27,48.45],["Weimar",11.33,50.98],["Memmingen",10.18,47.99],["Hemer",7.77,51.38],["Korbach",8.87,51.27],["Delmenhorst",8.63,53.05],["Kusel",7.4,49.53],["Saarlouis",6.75,49.32]];
let MAP=null,mapVisible=true,C={};
function mapColors(){const cs=getComputedStyle(document.body);C={ink:cs.getPropertyValue("--ink").trim(),paper:cs.getPropertyValue("--paper").trim(),red:"#E3241B",gold:"#FFCC00",muted:cs.getPropertyValue("--muted").trim(),font:getComputedStyle(document.body).fontFamily}}
function proj(lon,lat,W,H){const a=5.6,b=15.3,c=47.0,d=55.2,k=Math.cos(51*Math.PI/180),sx=(b-a)*k,sy=d-c,sc=Math.min(W/sx,H/sy)*.92,ox=(W-sx*sc)/2,oy=(H-sy*sc)/2;return[ox+(lon-a)*k*sc,oy+(d-lat)*sc]}
function inPoly(x,y,P){let c=false;for(let i=0,j=P.length-1;i<P.length;j=i++){const[xi,yi]=P[i],[xj,yj]=P[j];if(((yi>y)!==(yj>y))&&(x<(xj-xi)*(y-yi)/(yj-yi)+xi))c=!c}return c}
function buildMap(){
  const cv=$("map");if(!cv)return;const W=cv.clientWidth,H=cv.clientHeight;if(!W||!H)return;
  const dpr=Math.min(2,devicePixelRatio||1);cv.width=W*dpr;cv.height=H*dpr;const ctx=cv.getContext("2d");ctx.setTransform(dpr,0,0,dpr,0,0);
  const P=GER.map(q=>proj(q[0],q[1],W,H)),step=Math.max(7.5,W/48),top=proj(0,55.06,W,H)[1],bot=proj(0,47.27,W,H)[1],dots=[];
  for(let y=step/2;y<H;y+=step)for(let x=step/2;x<W;x+=step)if(inPoly(x,y,P)){const f=(y-top)/(bot-top);dots.push({x,y,b:f<1/3?0:f<2/3?1:2,born:Math.random()})}
  const cities=CITIES.map(c=>{const[x,y]=proj(c[1],c[2],W,H);return{name:c[0],x,y,home:!!c[3],state:0,since:0}});
  const old=MAP;MAP={cv,ctx,W,H,dots,cities,arcs:[],rings:[],next:performance.now()+900,start:old?old.start:performance.now(),n:0};
  mapColors();$("map").setAttribute("aria-label",t().mapLabel);
}
function qpt(a,c,b,p){const u=1-p;return[u*u*a[0]+2*u*p*c[0]+p*p*b[0],u*u*a[1]+2*u*p*c[1]+p*p*b[1]]}
function spawnArc(now){
  const m=MAP,pool=m.cities.filter(c=>!c.home&&c.state===0);m.n++;
  const target=(m.n%4===0)?m.cities[0]:pool[Math.floor(Math.random()*pool.length)];if(!target)return;
  const side=Math.random();const from=side<.5?[m.W+30,Math.random()*m.H*.6]:[Math.random()*m.W,-30];
  const ctrl=[(from[0]+target.x)/2+(Math.random()-.5)*80,Math.min(from[1],target.y)-m.H*.22];
  m.arcs.push({a:from,c:ctrl,b:[target.x,target.y],t0:now,dur:1500,city:target,hit:false});ANIMS++;
}
function drawMap(now){
  const m=MAP;if(!m)return;const{ctx,W,H}=m;ctx.clearRect(0,0,W,H);
  const still=RM||motionPaused,tt=(now-m.start)/1000,cx=W*.55,cy=H*.45;
  for(const d of m.dots){
    const intro=still?1:Math.min(1,Math.max(0,(tt-.3-Math.hypot(d.x-cx,d.y-cy)/W*1.6)/.6));if(intro<=0)continue;
    const pl=still?.7:(Math.sin(tt*1.5-Math.hypot(d.x-cx,d.y-cy)/W*10)+1)/2,r=(1.05+pl*1.45)*intro;
    ctx.globalAlpha=(.3+pl*.7)*intro;ctx.beginPath();ctx.arc(d.x,d.y,r,0,6.283);
    if(d.b===0){ctx.strokeStyle=C.ink;ctx.lineWidth=1.1;ctx.stroke()}else{ctx.fillStyle=d.b===1?C.red:C.gold;ctx.fill()}
  }
  ctx.globalAlpha=1;
  if(!still&&now>m.next&&tt>2.2){spawnArc(now);m.next=now+1400+Math.random()*1200}
  m.arcs=m.arcs.filter(a=>{
    const age=now-a.t0,p=Math.min(1,age/a.dur),fade=a.hit?Math.max(0,1-(age-a.dur)/900):1;if(fade<=0)return false;
    ctx.save();ctx.globalAlpha=fade;ctx.strokeStyle=C.red;ctx.lineWidth=1.8;ctx.setLineDash([6,6]);ctx.lineDashOffset=-tt*30;ctx.beginPath();
    const n=40;for(let i=0;i<=n*p;i++){const q=qpt(a.a,a.c,a.b,i/n);i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1])}ctx.stroke();ctx.setLineDash([]);
    if(p<1){const h=qpt(a.a,a.c,a.b,p);ctx.fillStyle=C.red;ctx.beginPath();ctx.arc(h[0],h[1],3.5,0,6.283);ctx.fill()}
    ctx.restore();
    if(p>=1&&!a.hit){a.hit=true;const c=a.city;c.state=1;c.since=now;m.rings.push({x:c.x,y:c.y,t0:now,col:C.red});ANIMS++;
      setTimeout(()=>{c.state=2;c.since=performance.now();MAP&&MAP.rings.push({x:c.x,y:c.y,t0:performance.now(),col:C.gold,big:1});ANIMS++},700);
      setTimeout(()=>{c.state=0},6200)}
    return true});
  m.rings=m.rings.filter(r=>{const age=(now-r.t0)/1000,life=r.big?1.6:1;if(age>life)return false;ctx.globalAlpha=1-age/life;ctx.strokeStyle=r.col;ctx.lineWidth=r.big?2.5:2;ctx.beginPath();ctx.arc(r.x,r.y,5+age*(r.big?42:26),0,6.283);ctx.stroke();return true});
  ctx.globalAlpha=1;ctx.font=`600 12px ${C.font}`;ctx.textBaseline="middle";
  for(const c of m.cities){
    const show=c.home||c.state>0;
    if(c.home){const pl=still?0:(Math.sin(tt*2)+1)/2;ctx.strokeStyle=C.gold;ctx.globalAlpha=.6-pl*.4;ctx.lineWidth=2;ctx.beginPath();ctx.arc(c.x,c.y,7+pl*7,0,6.283);ctx.stroke();ctx.globalAlpha=1}
    ctx.fillStyle=c.home||c.state===2?C.gold:c.state===1?C.red:C.ink;
    ctx.beginPath();ctx.arc(c.x,c.y,c.state||c.home?4.5:2.2,0,6.283);ctx.fill();
    if(c.state===2){ctx.fillStyle="#000";ctx.fillRect(c.x-2.1,c.y-2.4,1.4,4.8);ctx.fillRect(c.x+.7,c.y-2.4,1.4,4.8)}
    if(show){const lbl=c.home?`${t().homeL}, Berlin`:c.name,w=ctx.measureText(lbl).width,lx=Math.min(c.x+10,W-w-8);
      ctx.globalAlpha=c.home?1:Math.min(1,(now-c.since)/300);ctx.lineJoin="round";ctx.lineWidth=5;ctx.strokeStyle=C.paper;ctx.strokeText(lbl,lx,c.y-12);ctx.fillStyle=C.ink;ctx.fillText(lbl,lx,c.y-12);ctx.globalAlpha=1}
  }
}
function mapLoop(now){if(MAP&&mapVisible)drawMap(now);requestAnimationFrame(mapLoop)}
new IntersectionObserver(es=>es.forEach(e=>mapVisible=e.isIntersecting)).observe($("mapwrap"));
new ResizeObserver(()=>buildMap()).observe($("map"));
if(FINE&&!RM){const w=$("mapwrap"),tl=$("tilt");
  w.addEventListener("pointermove",e=>{const r=w.getBoundingClientRect(),dx=(e.clientX-r.left)/r.width-.5,dy=(e.clientY-r.top)/r.height-.5;tl.style.transform=`rotateX(${-dy*10}deg) rotateY(${dx*12}deg)`});
  w.addEventListener("pointerleave",()=>{tl.style.transform=""})}
/* ---------- counters & reveals ---------- */
function countUp(el){
  const to=parseFloat(el.dataset.count),dec=+el.dataset.dec,plain=el.hasAttribute("data-plain");
  const fmt=v=>plain?String(Math.round(v)).replace(/(\d{3})(\d{3})/,"$1 $2"):v.toLocaleString(pref.lang==="de"?"de-DE":"en-GB",{minimumFractionDigits:dec,maximumFractionDigits:dec});
  if(RM){el.textContent=fmt(to);return}
  ANIMS++;const t0=performance.now(),dur=1600;
  const step=n=>{const p=Math.min(1,(n-t0)/dur),e=1-Math.pow(1-p,4);el.textContent=fmt(to*e);if(p<1)requestAnimationFrame(step)};
  requestAnimationFrame(step);
}
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target;io.unobserve(el);
  if(el.hasAttribute("data-split")){playSplit(el)}
  else if(el.classList.contains("reveal")){el.style.opacity=1;A(el,[{opacity:0,transform:"translateY(24px)",filter:"blur(6px)"},{opacity:1,transform:"none",filter:"blur(0)"}],{duration:700,easing:OUT,fill:"backwards",delay:+(el.dataset.d||0)});
    el.querySelectorAll("[data-count]").forEach(countUp);
    el.querySelectorAll("[data-fill]").forEach(b=>{b.style.transform=`scaleX(${b.dataset.fill})`;A(b,[{transform:"scaleX(0)"},{transform:`scaleX(${b.dataset.fill})`}],{duration:1100,delay:200,easing:OUT,fill:"backwards"})});
    if(el.querySelector("#figContrast"))contrastFig();
  }
  else if(el.classList.contains("tile")){A(el,[{opacity:0,transform:"translateY(30px) rotateX(18deg)"},{opacity:1,transform:"none"}],{duration:700,delay:+el.dataset.d,easing:OUT,fill:"backwards"})}
})},{threshold:.18});
function observeAll(){document.querySelectorAll("[data-split]:not(#heroH),.reveal,.tile").forEach((el,i)=>{if(el.classList.contains("reveal"))el.dataset.d=el.dataset.d||0;io.observe(el)});
  document.querySelectorAll(".stats .reveal,.figs .reveal,.compare .reveal").forEach((el,i)=>el.dataset.d=(i%5)*90)}
if(RM)document.querySelectorAll(".reveal").forEach(e=>e.style.opacity=1);

/* ---------- compare alarm ---------- */
let cdv=59;
function alarmLoop(){
  const a=$("alarm");
  A(a,[{transform:"translateX(0)"},{transform:"translateX(-6px)"},{transform:"translateX(6px)"},{transform:"translateX(-4px)"},{transform:"translateX(0)"}],{duration:420,iterations:Infinity,delay:0,easing:"linear",endDelay:2200});
  A(a,[{filter:"brightness(1)"},{filter:"brightness(1.25)"},{filter:"brightness(1)"}],{duration:900,iterations:Infinity});
  setInterval(()=>{cdv=cdv<=1?59:cdv-1;$("cd").textContent="0:"+String(cdv).padStart(2,"0")},1000);
}

/* ---------- pattern tiles ---------- */
function tilesRender(){
  const L=t(),cols=[["#000","var(--flag-red)","var(--gold)"]];
  $("tiles").innerHTML=L.pats.map((p,i)=>`<button class="tile" aria-pressed="false" data-d="${i*90}" aria-label="${p[0]}">
    <span class="in">
      <span class="face front spot"><span class="bar3" aria-hidden="true"><i style="background:${i%3===0?"var(--ink)":"var(--line)"}"></i><i style="background:${i%3===1?"var(--flag-red)":"var(--line)"}"></i><i style="background:${i%3===2?"var(--gold)":"var(--line)"}"></i></span>
        <span class="num" aria-hidden="true">0${i+1}</span><span class="h3">${p[0]}</span><span class="qt">${p[1]}</span><span class="flip">${ic.flip}${L.flipF}</span></span>
      <span class="face back"><span class="num" aria-hidden="true">0${i+1}</span><span class="h3">SafePause</span><span class="pp">${p[2]}</span><span class="flip">${ic.flip}${L.flipB}</span></span>
    </span></button>`).join("");
}
$("tiles").addEventListener("click",e=>{const b=e.target.closest(".tile");if(!b)return;const on=b.getAttribute("aria-pressed")!=="true";b.setAttribute("aria-pressed",on);
  const face=b.querySelector(on?".back":".front");face.querySelectorAll(".h3,.qt,.pp,.flip").forEach((x,i)=>A(x,[{opacity:0,transform:"translateY(8px)"},{opacity:1,transform:"none"}],{duration:380,delay:260+i*60,easing:OUT,fill:"backwards"}))});

/* ---------- contrast ---------- */
function hexLum(h){h=h.trim().replace("#","");if(h.length===3)h=h.split("").map(c=>c+c).join("");const v=[0,2,4].map(i=>parseInt(h.substr(i,2),16)/255).map(c=>c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4));return .2126*v[0]+.7152*v[1]+.0722*v[2]}
function ratio(a,b){const x=hexLum(a),y=hexLum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)}
function vars(){const cs=getComputedStyle($("screen"));return n=>cs.getPropertyValue(n)}
function contrastRender(){
  const g=vars(),L=t();
  const rows=[[L.cText,g("--ink"),g("--paper")],[L.cMuted,g("--muted"),g("--paper")],[L.cBtn,g("--paper"),g("--ink")],[L.cGold,g("--gold-ink"),g("--gold-soft")]];
  $("contrastPanel").innerHTML=rows.map(r=>{const v=ratio(r[1],r[2]);return `<div class="crow"><span>${r[0]}</span><span>${v.toFixed(1)}:1 <span class="pass">${v>=4.5?"✓ AA":"✗"}</span></span></div>`}).join("");
}
function contrastFig(){
  const g=vars(),v=ratio(g("--ink"),g("--paper")),el=$("figContrast"),bar=$("barC"),fill=Math.min(1,v/21);
  bar.style.transform=`scaleX(${fill})`;
  if(RM){el.textContent=v.toFixed(1).replace(".",pref.lang==="de"?",":".")+":1";return}
  ANIMS++;A(bar,[{transform:"scaleX(0)"},{transform:`scaleX(${fill})`}],{duration:1200,easing:OUT,fill:"backwards"});
  const t0=performance.now();const s=n=>{const p=Math.min(1,(n-t0)/1300),e=1-Math.pow(1-p,4);el.textContent=(v*e).toFixed(1).replace(".",pref.lang==="de"?",":".")+":1";if(p<1)requestAnimationFrame(s)};requestAnimationFrame(s);
}

/* ---------- app ---------- */
function judgeRender(){
  const L=t();
  $("scenChips").innerHTML=Object.keys(SCEN).map(k=>`<button class="chip ${st.scen===k?"on":""}" data-scen="${k}" aria-pressed="${st.scen===k}">${L.scen[k]}</button>`).join("");
  $("screenChips").innerHTML=ORDER.map(k=>`<button class="chip ${st.screen===k?"on":""}" data-jump="${k}" aria-pressed="${st.screen===k}">${L.screens[k]}</button>`).join("")+`<button class="chip" data-act="ffwd">${L.ffwd}</button>`;
  contrastRender();
}
function progressRender(){
  const idx=["notice","q","findings","trust","pause","done"].indexOf(st.screen);
  [...$("progress").children].forEach((s,i)=>{s.className=idx<0?"":i<idx?"done":i===idx?"now":""});
  $("progress").style.visibility=idx<0?"hidden":"visible";
}
function sumCard(){const L=t();return `<div class="card sum"><div><p class="meta">${L.payee}</p><p style="margin:.15rem 0 0;font-weight:700;font-size:1.15rem">M. Keller <span class="tag">${L.newP}</span></p></div><div class="amount" data-read>${L.amount}</div></div>`}

function screenHTML(){
  const L=t(),S=SCEN[st.scen];
  const off=S.offline?`<div class="banner" role="alert">${ic.wifi}<span>${L.offline}</span></div>`:"";
  switch(st.screen){
  case "bank":return `${off}<p class="meta">${L.from}</p><h1 tabindex="-1" data-read>${L.transfer}</h1>
    <div class="call"><div class="top"><span class="dot" aria-hidden="true"></span><span data-read>${L.callNow}</span></div>
      <p class="say"><span class="sr">${L.script.join(" ")}</span><span id="say" aria-hidden="true"></span><span class="caret" aria-hidden="true"></span></p></div>
    <div class="card"><div class="field"><span>${L.payee}</span><span>M. Keller</span></div><div class="field"><span>${L.iban}</span><span>DE89 3704 0044 0532 0130 00</span></div>
      <div class="field"><span>${L.purpose}</span><span>${L.purposeV}</span></div><div class="field" style="border:0"><span>${L.amountL}</span><span class="amount">${L.amount}</span></div></div>
    <div class="grow"></div><p class="meta" style="margin-top:1rem">${L.demoNote}</p><button class="btn pri" data-act="approve">${L.approve}</button>`;
  case "notice":return `${off}${S.repeat?`<div class="banner">${ic.info}<span data-read>${L.repeat}</span></div>`:""}<h1 tabindex="-1" data-read>${L.noticeH}</h1><p class="lead" data-read>${L.noticeL}</p>${sumCard()}<div class="grow"></div>
    <button class="btn pri" data-act="check">${L.check}</button><button class="btn" data-act="notnow" aria-describedby="nnh">${L.notNow}</button><p class="meta" id="nnh" style="text-align:center;margin-top:.6rem">${L.notNowHint}</p>`;
  case "q":return `<p class="step">${L.stepOf(st.q+1,3)}</p><h1 class="q" tabindex="-1" data-read>${L.qs[st.q]}</h1>
    <div class="answers grow"><button class="btn" data-ans="yes"><span class="k" aria-hidden="true">${pref.lang==="de"?"J":"Y"}</span>${L.yes}</button><button class="btn" data-ans="no"><span class="k" aria-hidden="true">N</span>${L.no}</button><button class="btn" data-ans="unsure"><span class="k" aria-hidden="true">?</span>${L.unsure}</button></div>
    <button class="btn quiet" data-act="dictated">${L.dictated}</button>${FINE?`<p class="meta" style="text-align:center;margin-top:.4rem">${L.keysHint}</p>`:""}`;
  case "findings":{
    if(st.anyway)return `<h1 tabindex="-1" data-read>${L.anywayH}</h1><p class="lead" data-read>${L.anywayL}</p><div class="grow"></div><button class="btn pri" data-act="trust">${L.askFirst}</button><button class="btn" data-act="send">${L.sendNow}</button>`;
    const a=st.ans,pts=[];
    if(a[0]!=="no")pts.push([ic.phone,L.pCall,L.pCallD]);if(a[1]!=="no")pts.push([ic.clock,L.pRush,L.pRushD]);if(a[2]!=="yes")pts.push([ic.user,L.pNew,L.pNewD]);
    const v=S.vop==="mismatch"?[L.vMis,L.vMisD]:S.vop==="close"?[L.vClose,L.vCloseD]:[L.vMatch,L.vMatchD];
    const list=pts.slice(0,2).concat([[ic.id,v[0],v[1]]]);
    return `<h1 tabindex="-1" data-read>${L.findH}</h1><ul class="points">${list.map(p=>`<li><span class="ic">${p[0]}</span><span><span data-read>${p[1]}</span>${pref.simple?"":`<small data-read>${p[2]}</small>`}</span></li>`).join("")}</ul><div class="grow"></div>
    <button class="btn pri" data-act="trust">${L.ask}</button><button class="btn" data-act="pause">${L.pauseBtn}</button><button class="btn quiet" data-act="anyway">${L.anyway}</button>`;}
  case "trust":
    if(!S.contacts)return `<h1 tabindex="-1" data-read>${L.emptyH}</h1><p class="lead" data-read>${L.emptyL}</p><button class="btn pri left" data-act="add">${ic.plus}${L.addContact}</button><button class="btn left" data-act="bankcall">${ic.bank}${L.callBank}</button><button class="btn left" data-act="block">${ic.lock}${L.block}</button><div class="grow"></div><button class="btn quiet" data-act="pause">${L.toPause}</button>`;
    return `<h1 tabindex="-1" data-read>${L.trustH}</h1><p class="lead" data-read>${L.trustL}</p><div class="pair"><button class="btn pri" data-act="anna">${ic.phone}${L.callAnna}</button><button class="btn" data-act="anna">${ic.msg}${L.textAnna}</button></div>
      <button class="btn left" data-act="bankcall">${ic.bank}${L.callBank}</button><button class="btn left" data-act="block">${ic.lock}${L.block}</button>
      <p class="meta" style="margin-top:1.1rem;text-align:center;font-weight:700;color:var(--ink)" data-read>${L.trustNote}</p><div class="grow"></div><button class="btn quiet" data-act="pause">${L.toPause}</button>`;
  case "pause":
    if(st.expired)return `<h1 tabindex="-1" data-read>${L.expH}</h1><p class="lead" data-read>${L.expL}</p><p class="safe">${ic.shield}<span data-read>${L.safe}</span></p><div class="grow"></div><button class="btn stop" data-act="cancel">${L.cancelPay}</button><button class="btn" data-act="recheck">${L.recheck}</button>`;
    return `${off}${st.annaMsg?`<div class="banner" role="status">${ic.msg}<span>${L.annaMsg}</span></div>`:""}<h1 tabindex="-1" data-read>${L.pauseH}</h1><p class="safe">${ic.shield}<span data-read>${L.safe}</span></p>
      <div class="breath" role="timer" aria-label="${L.left}"><div class="disc" aria-hidden="true"></div><div class="orbit" aria-hidden="true">${Array.from({length:12},(_,i)=>`<i style="transform:rotate(${i*30}deg) translateY(calc(min(280px,68vw) * -.55))"></i>`).join("")}</div>
        <svg class="ring" viewBox="0 0 240 240" aria-hidden="true"><circle cx="120" cy="120" r="112" fill="none" stroke="var(--line)" stroke-width="8"/><circle id="ring" cx="120" cy="120" r="112" fill="none" stroke="#FFCC00" stroke-width="8" stroke-linecap="round" stroke-dasharray="703.7" stroke-dashoffset="0"/></svg>
        <div class="t"><b id="tm">30:00</b><span>${L.left}</span></div></div>
      <p class="hint" id="bhint" aria-hidden="true"></p>${pref.simple?"":`<p class="meta" style="text-align:center" data-read>${L.whileCall}</p>`}<p class="meta" style="text-align:center;margin-top:.3rem" data-read>${L.tanNote}</p><div class="grow"></div>
      <button class="btn stop" data-act="cancel">${L.cancelPay}</button><button class="btn" data-act="later">${L.later}</button>`;
  case "done":{
    const h=st.variant==="sent"?[L.sentH,L.sentL]:st.variant==="later"?[L.laterH,L.laterL]:[L.doneH,L.doneL];
    const okIcon=st.variant==="sent"?"":`<div class="donewrap" id="donewrap"><svg class="check" viewBox="0 0 84 84" aria-hidden="true"><circle cx="42" cy="42" r="39"/><path id="chk" d="M25 43l11 11 23-24"/></svg></div>`;
    return `${okIcon}<h1 tabindex="-1" data-read>${h[0]}</h1><p class="lead" data-read>${h[1]}</p>
      <ul class="points"><li><span class="ic">${ic.phone}</span><span data-read>${L.n1}</span></li><li><span class="ic">${ic.lock}</span><span data-read>${L.n2}</span></li><li><span class="ic">${ic.bank}</span><span data-read>${L.n3}</span></li></ul><div class="grow"></div>
      <button class="btn" data-act="report">${L.report}</button><button class="btn pri" data-act="restart">${L.close}</button>`;}
  }
}

function annaRender(animate){
  const L=t(),el=$("pscreen"),now=new Date(),hh=String(now.getHours()).padStart(2,"0"),mm=String(now.getMinutes()).padStart(2,"0");
  let body="";
  if(st.anna===0)body=`<p class="pidle">${L.nIdle}</p>`;
  else{const tail=st.anna===1?`<button class="nbtn stopn" data-anna="stop">${L.nStop}</button><button class="nbtn" data-anna="ok">${L.nOk}</button><p class="privacy">${L.nPriv}</p>`:`<p style="margin:.2rem 0 0;font-weight:700">${st.anna===2?L.nStopped:L.nOked}</p>`;
    body=`<div class="notif" id="notif" role="group" aria-label="${L.nApp}"><div class="h"><span class="m" aria-hidden="true"><i style="background:#000"></i><i style="background:#DD0000"></i><i style="background:#FFCC00"></i></span>${L.nApp}</div><p>${L.nText}</p>${tail}</div>`}
  el.innerHTML=`<div class="clock" aria-hidden="true">${hh}:${mm}</div><div class="date">${L.nLock}</div>${body}`;
  if(animate){const n=$("notif");A(n,[{transform:"translateY(-60px) scale(.96)",opacity:0},{transform:"none",opacity:1}],{duration:620,easing:SPRING,fill:"backwards"});
    A(el.parentElement,[{transform:"rotate(0)"},{transform:"rotate(-2deg)"},{transform:"rotate(2deg)"},{transform:"rotate(-1.5deg)"},{transform:"rotate(1.5deg)"},{transform:"rotate(0)"}],{duration:480,delay:280,easing:"linear"});
    n.querySelectorAll("p,button").forEach((x,i)=>A(x,[{opacity:0,transform:"translateY(8px)"},{opacity:1,transform:"none"}],{duration:380,delay:420+i*70,easing:OUT,fill:"backwards"}))}
}

function enterScreen(focus){
  const box=$("screen");
  box.innerHTML=screenHTML();progressRender();judgeRender();
  [...box.children].forEach((c,i)=>A(c,[{opacity:0,transform:"translateY(18px)",filter:"blur(5px)"},{opacity:1,transform:"none",filter:"blur(0)"}],{duration:520,delay:i*55,easing:OUT,fill:"backwards"}));
  box.querySelectorAll(".points li .ic").forEach((x,i)=>A(x,[{transform:"scale(.6) rotate(-20deg)",opacity:0},{transform:"none",opacity:1}],{duration:520,delay:260+i*110,easing:SPRING,fill:"backwards"}));
  const h=box.querySelector(".q");if(h){const txt=h.textContent;h.setAttribute("aria-label",txt);h.innerHTML=txt.split(" ").map(w=>`<span class="w" aria-hidden="true">${w}</span>`).join(" ");h.querySelectorAll(".w").forEach((w,i)=>A(w,[{opacity:0,transform:"translateY(40%)"},{opacity:1,transform:"none"}],{duration:520,delay:80+i*45,easing:OUT,fill:"backwards"}))}
  if(st.screen==="bank")typeScript();
  if(st.screen==="pause"&&!st.expired)startTimer();
  if(st.screen==="done"&&st.variant!=="sent")celebrate();
  if(focus){const hh=box.querySelector("h1");if(hh)hh.focus({preventScroll:true})}
}
function render(focus=true){
  clearInterval(timer);clearInterval(breathT);clearTimeout(typeT);
  const box=$("screen");
  if(RM||!box.children.length){enterScreen(focus);return}
  busy=true;
  const a=A(box,[{opacity:1,filter:"blur(0)",transform:"none"},{opacity:0,filter:"blur(6px)",transform:"translateY(-8px)"}],{duration:160,easing:"cubic-bezier(.4,0,1,1)"});
  const done=()=>{busy=false;enterScreen(focus)};
  if(a)a.onfinish=done;else done();
}
function typeScript(){
  const L=t(),el=$("say");if(!el)return;let li=0,ci=0;
  if(RM){el.textContent=L.script[0];return}
  const tick=()=>{if(!$("say"))return;const line=L.script[li];
    if(ci<=line.length){el.textContent=line.slice(0,ci);ci++;typeT=setTimeout(tick,38)}
    else{typeT=setTimeout(()=>{li=(li+1)%L.script.length;ci=0;tick()},1800)}};
  tick();
}
function celebrate(){
  const c=$("chk"),w=$("donewrap");if(!w)return;
  A(w,[{transform:"scale(.7)",opacity:0},{transform:"scale(1)",opacity:1}],{duration:560,easing:SPRING,fill:"backwards"});
  A(c,[{strokeDashoffset:60},{strokeDashoffset:0}],{duration:620,delay:220,easing:OUT,fill:"backwards"});
  if(RM)return;
  const cols=["#000","#DD0000","#FFCC00"];
  for(let i=0;i<36;i++){const s=document.createElement("span");s.className="spark";s.style.background=cols[i%3];w.appendChild(s);
    const ang=(i/36)*Math.PI*2+Math.random()*.3,dist=60+Math.random()*70;
    const an=A(s,[{transform:"translate(0,0) scale(1)",opacity:1},{transform:`translate(${Math.cos(ang)*dist}px,${Math.sin(ang)*dist}px) scale(.3)`,opacity:0}],{duration:900+Math.random()*500,delay:380,easing:OUT,fill:"backwards"});
    if(an)an.onfinish=()=>s.remove()}
}
function fmt(s){return String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0")}
function startTimer(){
  const upd=()=>{const tm=$("tm"),r=$("ring");if(!tm)return;tm.textContent=fmt(st.left);r.style.strokeDashoffset=703.7*(1-st.left/1800)};
  upd();
  timer=setInterval(()=>{st.left--;if(st.left<=0){st.left=0;st.expired=true;render()}else upd()},1000);
  document.querySelectorAll(".orbit i").forEach((d,i)=>A(d,[{opacity:.25},{opacity:1},{opacity:.25}],{duration:2400,delay:i*200,iterations:Infinity}));
  const L=t(),hint=$("bhint");let inh=true;
  if(!RM&&hint){hint.textContent=L.inhale;breathT=setInterval(()=>{inh=!inh;hint.textContent=inh?L.inhale:L.exhale;A(hint,[{opacity:0},{opacity:1}],{duration:500})},4000)}
}
function go(screen,extra){st.screen=screen;Object.assign(st,extra||{});render()}

let toastT;
function toast(msg){const el=$("toast");el.textContent=msg;el.classList.add("show");clearTimeout(toastT);toastT=setTimeout(()=>el.classList.remove("show"),3500)}

/* ripple on press */
document.addEventListener("pointerdown",e=>{
  const b=e.target.closest(".btn,.cta,.nbtn");if(!b||RM)return;
  const r=b.getBoundingClientRect(),s=document.createElement("span");s.className="rip";s.style.left=(e.clientX-r.left)+"px";s.style.top=(e.clientY-r.top)+"px";b.appendChild(s);
  const an=A(s,[{transform:"scale(.2)",opacity:.5},{transform:`scale(${Math.max(r.width,r.height)/10})`,opacity:0}],{duration:650,easing:OUT});if(an)an.onfinish=()=>s.remove();else s.remove();
});

$("screen").addEventListener("click",e=>{
  const b=e.target.closest("button");if(!b||busy)return;
  if(b.dataset.ans){st.ans[st.q]=b.dataset.ans;b.classList.add("sel");A(b,[{transform:"scale(.97)"},{transform:"scale(1.02)"},{transform:"scale(1)"}],{duration:320,easing:SPRING});
    busy=true;setTimeout(()=>{busy=false;if(st.q<2){st.q++;render()}else go("findings")},300);return}
  const a=b.dataset.act,L=t();
  if(a==="approve"){go("notice");chime("calm")}if(a==="check")go("q",{q:0,ans:[]});if(a==="notnow")go("pause");if(a==="dictated")go("trust");
  if(a==="trust")go("trust",{anyway:false});if(a==="pause")go("pause");if(a==="anyway"){st.anyway=true;render()}
  if(a==="send")go("done",{variant:"sent",anyway:false});
  if(a==="anna"){toast(L.tCalling);if(st.anna===0){st.anna=1;annaRender(true);chime("ping");if(navigator.vibrate)navigator.vibrate([60,40,60])}}
  if(a==="bankcall"||a==="block")toast(L.tCallSim);if(a==="add")toast(L.tAdd);if(a==="report")toast(L.tReport);
  if(a==="cancel"){go("done",{variant:"cancel"});chime("done")}if(a==="later")go("done",{variant:"later"});
  if(a==="recheck")go("findings",{expired:false,left:1800});
  if(a==="restart"){st=fresh(st.scen);annaRender();render()}
});
$("pscreen").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;const L=t();
  if(b.dataset.anna==="stop"){st.anna=2;st.annaMsg=true;annaRender();toast(L.tAnnaStop);if(st.screen!=="done")go("pause")}
  if(b.dataset.anna==="ok"){st.anna=3;annaRender();toast(L.tAnnaOk)}});
$("judge").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;
  if(b.dataset.scen){st=fresh(b.dataset.scen);annaRender();render(false)}
  if(b.dataset.jump){const k=b.dataset.jump;if(k==="q")st.q=0;if(k==="findings"&&!st.ans.length)st.ans=["yes","unsure","no"];st.anyway=false;if(k!=="pause")st.expired=false;st.screen=k;render(false)}
  if(b.dataset.act==="ffwd"){st.screen="pause";st.left=5;st.expired=false;render(false)}});

function openJudge(open){const j=$("judge"),o=open===undefined?!j.classList.contains("open"):open;j.classList.toggle("open",o);$("tJudge").setAttribute("aria-expanded",o);$("tJudge").setAttribute("aria-pressed",o);
  if(o){contrastRender();A(j,[{opacity:0,transform:"translateY(-10px)"},{opacity:1,transform:"none"}],{duration:300,easing:OUT});j.querySelectorAll(".chip").forEach((c,i)=>A(c,[{opacity:0,transform:"scale(.92)"},{opacity:1,transform:"none"}],{duration:280,delay:i*20,easing:OUT,fill:"backwards"}))}}
$("tJudge").onclick=()=>openJudge();
$("ctaStates").addEventListener("click",()=>setTimeout(()=>openJudge(true),RM?0:500));
$("tLang").onclick=()=>{pref.lang=pref.lang==="de"?"en":"de";applyPrefs();applyStatic();tickerRender();if(MAP)$("map").setAttribute("aria-label",t().mapLabel);document.querySelectorAll("[data-split]").forEach(el=>playSplit(el));annaRender();render(false);
  document.querySelectorAll("[data-count]").forEach(countUp);contrastFig()};
$("tSize").onclick=()=>{pref.scale=pref.scale>=1.5?1:pref.scale>=1.25?1.5:1.25;applyPrefs()};
$("tContrast").onclick=()=>{pref.contrast=!pref.contrast;applyPrefs();contrastRender();contrastFig();mapColors()};
$("tSimple").onclick=()=>{pref.simple=!pref.simple;applyPrefs();render(false)};
let speaking=false;
$("tRead").onclick=()=>{const L=t();if(!("speechSynthesis" in window)){toast(L.noVoice);return}
  if(speaking){speechSynthesis.cancel();speaking=false;$("readLbl").textContent=L.read;$("tRead").setAttribute("aria-pressed","false");return}
  const txt=[...$("screen").querySelectorAll("[data-read]")].map(n=>(n.getAttribute("aria-label")||n.textContent).trim()).join(". ");
  const u=new SpeechSynthesisUtterance(txt);u.lang=pref.lang==="de"?"de-DE":"en-GB";u.rate=.88;
  const v=speechSynthesis.getVoices().find(x=>x.lang&&x.lang.toLowerCase().startsWith(pref.lang));if(v)u.voice=v;
  u.onend=()=>{speaking=false;$("readLbl").textContent=t().read;$("tRead").setAttribute("aria-pressed","false")};
  speechSynthesis.cancel();speechSynthesis.speak(u);speaking=true;$("readLbl").textContent=L.stopRead;$("tRead").setAttribute("aria-label",L.stopRead);$("tRead").setAttribute("aria-pressed","true")};

let motionPaused=false;
$("tMotion").onclick=()=>{motionPaused=!motionPaused;document.getAnimations().forEach(a=>{const it=a.effect&&a.effect.getTiming&&a.effect.getTiming().iterations;if(it===Infinity)motionPaused?a.pause():a.play()});
  $("tMotion").setAttribute("aria-pressed",motionPaused);applyPrefs()};

/* magnetic CTAs */
if(FINE&&!RM)document.querySelectorAll(".magnet").forEach(m=>{
  m.addEventListener("pointermove",e=>{const r=m.getBoundingClientRect();m.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.18}px)`});
  m.addEventListener("pointerleave",()=>{m.style.transform=""})});

/* sound: soft, redundant cue (text + icon + sound) */
let AC=null;
function chime(kind){
  if(!pref.sound)return;
  try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();if(AC.state==="suspended")AC.resume();
    const notes=kind==="done"?[523.25,659.25,783.99]:kind==="ping"?[880,1174.66]:[392,523.25];
    notes.forEach((f,i)=>{const o=AC.createOscillator(),g=AC.createGain(),t0=AC.currentTime+i*.16;o.type="sine";o.frequency.value=f;
      g.gain.setValueAtTime(0,t0);g.gain.linearRampToValueAtTime(.07,t0+.03);g.gain.exponentialRampToValueAtTime(.0001,t0+.9);o.connect(g).connect(AC.destination);o.start(t0);o.stop(t0+1)})}catch(e){}
}
$("tSound").onclick=()=>{pref.sound=!pref.sound;applyPrefs();if(pref.sound)chime("calm")};
/* keyboard answers */
document.addEventListener("keydown",e=>{
  if(st.screen!=="q"||busy||e.metaKey||e.ctrlKey||e.altKey)return;
  const tg=e.target;if(tg&&/INPUT|TEXTAREA|SELECT/.test(tg.tagName))return;
  const k=e.key.toLowerCase(),map={j:"yes",y:"yes",n:"no","?":"unsure",u:"unsure"},a=map[k];if(!a)return;
  const b=$("screen").querySelector(`[data-ans="${a}"]`);if(b){e.preventDefault();b.focus();b.click()}
});
/* spotlight borders */
if(FINE)document.addEventListener("pointermove",e=>{const el=e.target.closest&&e.target.closest(".spot");if(!el)return;const r=el.getBoundingClientRect();el.style.setProperty("--mx",(e.clientX-r.left)+"px");el.style.setProperty("--my",(e.clientY-r.top)+"px")},{passive:true});
/* scroll progress */
let ticking=false;
addEventListener("scroll",()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{const h=document.documentElement,p=h.scrollTop/(h.scrollHeight-h.clientHeight||1);$("pline").style.transform=`scaleX(${p})`;ticking=false})},{passive:true});

/* live counter */
setInterval(()=>{const el=$("animCount");if(el)el.textContent=ANIMS.toLocaleString(pref.lang==="de"?"de-DE":"en-GB")},400);
setInterval(()=>{const d=new Date();$("clockTop").textContent=String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0")},15000);
matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{contrastRender();contrastFig()});

function tickerRender(){
  const L=t(),items=L.tk.map(x=>`<span class="item"><b>${x[0]}</b><b>${x[1]}</b><span>${x[2]}</span></span>`).join("");
  $("tkSr").innerHTML=L.tk.map(x=>`<li>${x[0]}, ${x[1]}: ${x[2]}</li>`).join("");
  const tr=$("track");tr.innerHTML=items+items;
  if(tr._a)tr._a.cancel();
  tr._a=A(tr,[{transform:"translateX(0)"},{transform:"translateX(-50%)"}],{duration:L.tk.length*7000,iterations:Infinity,easing:"linear"});
  if(tr._a&&motionPaused)tr._a.pause();
}
if(FINE)document.querySelector(".ticker").addEventListener("pointerenter",()=>{const a=$("track")._a;if(a&&!motionPaused)a.pause()});
if(FINE)document.querySelector(".ticker").addEventListener("pointerleave",()=>{const a=$("track")._a;if(a&&!motionPaused)a.play()});
const railIO=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){document.querySelectorAll(".rail a").forEach(a=>a.classList.toggle("on",a.dataset.sec===e.target.id))}}),{rootMargin:"-45% 0px -50% 0px"});
["hero","demo","compare","patterns","access"].forEach(id=>railIO.observe($(id)));
function berlin(){try{$("berlin").textContent="Berlin "+new Intl.DateTimeFormat("de-DE",{timeZone:"Europe/Berlin",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date())}catch(e){}}
setInterval(berlin,1000);berlin();
function startIntro(){
  document.querySelectorAll(".flag span").forEach((s,i)=>A(s,[{transform:"scaleX(0)"},{transform:"scaleX(1)"}],{duration:800,delay:100+i*160,easing:OUT,fill:"backwards"}));
  document.querySelectorAll(".mark i").forEach((s,i)=>A(s,[{transform:"scaleY(0)"},{transform:"scaleY(1)"}],{duration:560,delay:300+i*120,easing:SPRING,fill:"backwards"}));
  document.querySelectorAll("nav.links a").forEach((s,i)=>A(s,[{opacity:0,transform:"translateY(-8px)"},{opacity:1,transform:"none"}],{duration:500,delay:400+i*70,easing:OUT,fill:"backwards"}));
  playSplit($("heroH"),150);
  document.querySelectorAll(".rail a").forEach((s,i)=>A(s,[{opacity:0,transform:"translateX(-10px)"},{opacity:1,transform:"none"}],{duration:500,delay:700+i*80,easing:OUT,fill:"backwards"}));
  A($("berlin"),[{opacity:0},{opacity:1}],{duration:600,delay:600,fill:"backwards"});
  if(MAP){MAP.start=performance.now();MAP.next=performance.now()+2400}
  if(RM){document.querySelectorAll("[data-count]").forEach(countUp)}
  observeAll();
}
function runLoader(done){
  const box=$("loader"),L=t();
  $("lsub").textContent=L.loadSub;
  if(RM){box.remove();$("loadStatus").textContent=L.loaded;done();return}
  const root=document.documentElement;root.style.overflow="hidden";
  const pct=$("lpct"),bar=$("lbar"),msg=$("lmsg"),t0=performance.now();
  let shown=0,ready=false,mi=-1,exiting=false;
  (document.fonts?document.fonts.ready:Promise.resolve()).then(()=>ready=true);setTimeout(()=>ready=true,1500);
  A(box.querySelector(".lt"),[{opacity:0,transform:"translateY(-10px)"},{opacity:1,transform:"none"}],{duration:500,easing:OUT});
  A(box.querySelector(".lpct"),[{opacity:0,transform:"translateY(30%)"},{opacity:1,transform:"none"}],{duration:700,easing:OUT});
  const step=now=>{
    const el=now-t0,target=Math.min(ready?100:90,el/11);
    shown+=Math.max(.35,(target-shown)*.14);if(shown>target)shown=target;
    pct.textContent=String(Math.floor(shown)).padStart(2,"0");bar.style.transform=`scaleX(${shown/100})`;
    const k=Math.min(L.loadMsgs.length-1,Math.floor(shown/26));
    if(k!==mi){mi=k;msg.textContent=L.loadMsgs[k];A(msg,[{opacity:0,transform:"translateY(8px)"},{opacity:1,transform:"none"}],{duration:300,easing:OUT})}
    if(shown>=100&&el>1100){if(!exiting){exiting=true;setTimeout(exit,180)}}else requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
  function exit(){
    A(box.querySelector(".lpct"),[{transform:"none",opacity:1},{transform:"translateY(-30%)",opacity:0}],{duration:420,easing:"cubic-bezier(.4,0,1,1)",fill:"forwards"});
    A(box.querySelector(".lt"),[{opacity:1},{opacity:0}],{duration:300,fill:"forwards"});
    A(msg,[{opacity:1},{opacity:0}],{duration:300,fill:"forwards"});
    A($("wr"),[{transform:"translateY(100%)"},{transform:"translateY(0)"}],{duration:520,delay:120,easing:"cubic-bezier(.76,0,.24,1)",fill:"forwards"});
    const g=A($("wg"),[{transform:"translateY(100%)"},{transform:"translateY(0)"}],{duration:520,delay:240,easing:"cubic-bezier(.76,0,.24,1)",fill:"forwards"});
    g.onfinish=()=>{
      const out=A(box,[{transform:"translateY(0)"},{transform:"translateY(-100%)"}],{duration:760,easing:"cubic-bezier(.76,0,.24,1)",fill:"forwards"});
      setTimeout(()=>{root.style.overflow="";done()},260);
      out.onfinish=()=>{box.remove();$("loadStatus").textContent=L.loaded};
    };
  }
}
const APP=new URLSearchParams(location.search).has("app")||location.hash==="#app";
if(APP){document.body.classList.add("appmode");document.title="SafePause – App"}
(function init(){
  const d=new Date();$("clockTop").textContent=String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0");
  applyPrefs();applyStatic();tickerRender();annaRender();enterScreen(false);
  buildMap();requestAnimationFrame(mapLoop);
  alarmLoop();
  if(APP){const l=$("loader");if(l)l.remove();startIntro()}else runLoader(startIntro);
})();
