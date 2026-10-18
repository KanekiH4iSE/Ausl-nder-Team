# SafePause – Devpost kit

Everything needed for the Hyperbloom October submission. Copy the texts, upload the images from `docs/`, record the video with the script below.

---

## 1. Devpost fields

**Project name:** SafePause

**Tagline (max ~60 characters):** A calm pause before the money is gone.

**Thumbnail / cover:** `docs/cover.png` (1500 × 1000, 3:2)

**Built with:** html, css, javascript, web-animations-api, canvas, web-speech-api, web-audio-api, python, fastapi, sqlite, laya, vercel, deployxa, figma

**Links:**
- Live website: https://safepause-eine-pause-bevor-das-geld.vercel.app
- Web app: https://safepause-eine-pause-bevor-das-geld.vercel.app/?app
- Deployxa: *add link after deploy*
- GitHub: https://github.com/KanekiH4iSE/Ausl-nder-Team *(rename the repo to `safepause` before submitting, then update)*
- Figma: https://www.figma.com/design/zqsFbcjS9xFOHUwD7kcv7V/SafePause
- Video: *add YouTube link*

**Screenshots (upload in this order):** `docs/screenshots/01-hero.png`, `03-calm-notice.png`, `04-question.png`, `05-what-we-noticed.png`, `06-anna.png`, `07-safe-pause.png`, `08-calm-vs-alarm.png`, `09-scam-patterns.png`, `10-accessibility.png`, `11-phone.png`, `12-high-contrast-large-text.png`

---

## 2. Project story (≈ 480 words)

### Inspiration
In September and October 2026, German police reported the same story again and again: someone calls an older person, says they are from the bank's security team, and talks them into approving a "security transfer" in the banking app. In Hemer the call lasted three and a half hours. In Kassel the doubts only came when the couple called their son. Fake police officers alone cost people €49.5 million in 2025 (BKA).

Germany already has two new rules. Since October 2025 banks must check that the payee name matches the IBAN. Since June 2025 online banking must be accessible. But in a push-TAN scam the name often matches, and an accessible "WARNING!" is still a warning that adds panic. Scammers win with urgency, authority and isolation. We wanted an interface that does the opposite.

### What it does
When a risky transfer meets an active call, SafePause slows the moment down:
1. A calm notice: "This transfer looks unusual. Let's check it together."
2. Three questions, one per screen, plus a shortcut: "Someone is telling me what to type right now."
3. Up to three plain-language findings, including the name check: *the name matches – that doesn't mean it's safe.*
4. One tap to a trusted person, the bank, or the 116 116 blocking line. Anna gets a gentle notice without the IBAN and can tap "Please stop".
5. A 30-minute safe pause with a breathing circle. The money stays in the account.

It never blocks and never accuses. "Continue anyway" is always there, without pressure.

### How we built it
The interface is plain HTML, CSS and JavaScript, German first with English, designed in Figma. Behind it, a FastAPI backend scores the transfer and the call: rules for IBAN, payee check, amount, history and scam phrases in German and English; the open Laya model for what the rules miss, fine-tuned on 571 synthetic calls; and an LLM that rewrites the findings in calm A2–B1 language and is never allowed to say "Betrug" or "Alarm". The microphone can check a call on speaker in real time.

### Accessibility
Text never goes below 18 px, buttons are 60 px, contrast is at least 4.5:1 in light, dark and high-contrast mode, and everything works with the keyboard, a screen reader, 200 % text and reduced motion. An automated test checks all of this: 36/36 passed, 0 axe-core violations.

### Challenges
Making a fraud warning that doesn't feel like an alarm. Every red element, countdown and exclamation mark had to earn its place. And being honest: a browser can't detect a phone call, so the demo simulates it and says so.

### What we're proud of
The calm-versus-alarm comparison on the landing page, Anna's phone, and a test suite that proves our accessibility claims instead of just stating them.

### What's next
Testing with older people in Berlin, more languages for migrant seniors (Turkish, Russian, Arabic), and talking to a bank about real call signals.

---

## 3. Video (max. 2:00) – script and shot list

**Record:** Windows `Win + Alt + R` (Xbox Game Bar) or OBS, 1920 × 1080, browser at 100 % zoom, notifications off. Voice-over in English, interface in German, add subtitles.

**The demo part plays itself:** open `…vercel.app/?tour` (German UI) and start recording. It runs about one minute and taps through the whole Herr Klaus flow, including Anna's "Please stop".

| Time | Screen | Voice-over |
|---|---|---|
| 0:00–0:10 | `?app`, bank screen. The caller text types itself. Title card: "Dramatisierung – fiktive Bank". | *(German, calm but firm male voice)* "Guten Tag, hier ist die Sicherheitsabteilung Ihrer Bank. Bitte bestätigen Sie jetzt die Sicherheitsumbuchung." |
| 0:10–0:25 | Landing page hero, map with calls being paused. | "This call happens every day in Germany. Fake police officers alone took €49.5 million last year. Banks now check the payee's name – but in this scam, the name matches." |
| 0:25–1:20 | `?tour` recording. | "SafePause steps in calmly. No siren – one question at a time. Is someone on the phone? Are you being rushed? … It explains what it noticed, in plain words. Then: never alone. One tap and Anna, his daughter, gets a gentle message – no account details. She taps 'Please stop'. The payment pauses for 30 minutes, with a breathing circle. The money stays in the account." |
| 1:20–1:40 | `?app`: click Larger twice, Contrast, press Tab a few times, click Read aloud; open "Alle Zustände" and show the live contrast numbers. | "Built for older eyes and hands: 18-pixel text, 60-pixel buttons, high contrast, full keyboard, read-aloud. And we don't just claim it – 36 automated checks, zero axe-core violations." |
| 1:40–1:55 | Landing "Calm vs alarm" section, then logo. | "A warning that shouts adds panic. SafePause slows down, explains, and brings someone in. Calm, step by step, never alone." |

---

## 4. Message to the organisers (Discord)

> Hi! Two quick questions about Hyperbloom October:
> 1. We had an early concept/sketch of our idea before the hackathon, but all code and final designs were built during the event (Oct 11–19). Is that OK under the "build a new project" rule?
> 2. What are the criteria for "Best Use of Deployxa"? We deploy our full app (website + FastAPI backend) on Deployxa with a Dockerfile – is that enough, or do you expect something specific?
> Thanks!

---

## 5. Final checklist (Sunday, submit by 20:00 Berlin)

- [ ] Repo renamed to `safepause` and public; README links updated
- [ ] Team names and roles in README and on Devpost; all 3 members accepted the Devpost invite
- [ ] Deployxa link works (`/api/health` returns ok)
- [ ] Video uploaded (public or unlisted), opens in an incognito window
- [ ] Figma file shared as "Anyone with the link can view"
- [ ] Cover + screenshots uploaded
- [ ] "Best Use of Deployxa" selected if the form asks
- [ ] If you tested with older people: add 1–2 quotes to the story and README
- [ ] Status shows **Submitted**, not Draft
