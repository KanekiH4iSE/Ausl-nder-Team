# SafePause

**Eine Pause, bevor das Geld weg ist.** · *A pause before the money is gone.*

SafePause is a calm fraud-alert experience for German online-banking users aged 60+. When a fake bank employee is on the phone and pushes someone to approve a transfer, SafePause slows the moment down: three simple questions, a plain-language explanation, one tap to a trusted person, and a safe pause while the money stays in the account.

Motto: *ruhig, Schritt für Schritt, nie allein* (calm, step by step, never alone).

Built for **Hyperbloom October 2026 – UI/UX and Web Design**.

## Live

| | Link |
|---|---|
| Website + embedded demo | https://safepause-eine-pause-bevor-das-geld.vercel.app |
| Full-screen web app | https://safepause-eine-pause-bevor-das-geld.vercel.app/?app |
| Figma prototype | *add link* |
| Video | *add link* |

## The problem

- Phone scams against older people are a live problem in Germany. In 2025 the BKA counted 4,646 reported "fake police officer" cases with €49.5M in losses, and 4,798 grandchild-trick / shock-call cases with €49.0M (PKS 2025, via dpa). There is no separate federal figure for fake bank employees; regional police reports from September–October 2026 show repeated cases (Kassel, Kaiserslautern, Günzburg, Weimar, Memmingen, Hemer, Waldeck-Frankenberg).
- Since 9 October 2025, banks must run **Verification of Payee** (name vs. IBAN) before SEPA transfers. It catches typos and some invoice fraud, but not phone pressure: in a push-TAN scam the name often *matches*. **VoP checks the name, not the intent.**
- Since 28 June 2025, the **BFSG** requires consumer online banking to be accessible; §17 BFSGV limits explanations of banking services to language level B2.

## The flow (6 screens)

1. **Calm notice** – "Diese Überweisung wirkt ungewöhnlich. Lassen Sie uns kurz gemeinsam prüfen."
2. **Three questions**, one per screen: Is someone on the phone? Are you being rushed or asked to keep a secret? Do you know the payee? Plus a shortcut: *"Someone is telling me what to type right now."*
3. **What we noticed** – max. three points in plain words, including the VoP result (match / close match / no match).
4. **Ask someone you trust** – call or text Anna, call the bank on the number on your card, block access via 116 116.
5. **Safe pause** – 30-minute timer with a breathing circle; "Your money is still in your account."
6. **Done** – what to do if the caller returns, report the attempt.

**Trusted Contact Mode:** Anna's phone gets a gentle notice with minimal data (rounded amount, "new payee", no IBAN) and can tap "Please stop".

## Design principles

- Kind-neighbour tone, never BETRUG / ALARM / DRINGEND.
- One action per screen; the safe choice is always the most visible.
- Pause instead of block; "Continue anyway" stays available without pressure.
- Never alone: trusted person and 116 116 are always one tap away.
- Redundant signals: text + icon + (optional) sound; colour never carries meaning alone.
- Palette from the German flag on warm neutrals; inside the app, red is reserved for real danger: the active call and "Cancel payment".

## Accessibility

Targets WCAG 2.2 AA / EN 301 549:

- Contrast ≥ 4.5:1 for all text tokens, measured live on the page; separate high-contrast mode.
- Base text 18 px, two larger text levels, layouts work at 200% text.
- Buttons 60 px high (WCAG 2.2 AA asks for 24 × 24 px).
- Full keyboard support, visible focus, answers via J/N/? (DE) or Y/N/? (EN).
- Screen-reader labels, live regions, read-aloud via Web Speech API (de-DE / en-GB).
- All motion off with `prefers-reduced-motion`, plus a "pause motion" button.
- Copy at roughly A2–B1, below the legal B2 limit; Simple / Detailed toggle.
- Font: Atkinson Hyperlegible, designed for low-vision readers.

## Judge mode

Open **"Alle Zustände / All states"** in the demo to jump to any screen or scenario: name mismatch, close match, no trusted person, repeated attempt, pause expired, offline. "Fast-forward pause" shows the expiry state.

## Tech

- Plain HTML, CSS and vanilla JavaScript, no build step, no backend:
  - `index.html` – markup
  - `css/style.css` – design tokens, themes (dark page, light app screen, high contrast), layout, motion
  - `js/main.js` – copy (DE/EN), app flow and scenarios, animations, map, accessibility features
- Web Animations API and Canvas for motion (dot-matrix map of Germany), Web Audio API for soft cues, Web Speech API for read-aloud.
- Google Fonts: Atkinson Hyperlegible Next, Barlow Condensed.
- Deployed as a static site on Vercel.

Run locally: `npx serve .` (or open `index.html` in a browser).

## Testing

`tests/qa.py` drives the site in a headless browser (Playwright) and checks every claim in this README: all seven scenarios, the full Herr Klaus flow, Anna's "Please stop", keyboard answers in DE and EN, button height and minimum text size on every app screen, colour contrast in light, dark and high-contrast mode, focus visibility, reflow at 200% text and at 320 px, reduced motion, and an axe-core WCAG 2.2 AA scan of the landing page and the app.

Latest run: **35 / 35 passed**, 0 axe-core violations.

```bash
cd tests
pip install playwright && python -m playwright install chromium
npm i axe-core
python qa.py
```

## Honest limitations

- This is a UX prototype. The bank, people and transfers are fictional; no data is stored or sent.
- A browser cannot detect an active phone call; the call signal is simulated. A real banking app would use OS signals where available and question 1 otherwise.
- VoP results and risk scoring would come from the bank.
- "Designed with BFSG and WCAG 2.2 in mind", not certified compliant.
- User feedback so far is formative (small sample), not validation.

## Built during the hackathon

The concept and early sketches existed before registration. The code, final designs, copy and research summary in this repository were built during the event (11–19 October 2026).

## AI tools disclosure

We used Claude (Anthropic) to help with research, copywriting and front-end code. All design decisions and content were reviewed by the team.

## Team

- *Name – role*
- *Name – role*
- *Name – role*

## License

MIT – see `LICENSE`.
