import asyncio, json
from playwright.async_api import async_playwright
import pathlib
URL=(pathlib.Path(__file__).resolve().parent.parent/'index.html').as_uri()
AXE=open(pathlib.Path(__file__).resolve().parent/'node_modules/axe-core/axe.min.js').read()
R=[]
def rep(ok,name,detail=''): R.append(('PASS' if ok else 'FAIL',name,detail))
async def axe(pg,ctx):
    await pg.add_script_tag(content=AXE)
    res=await pg.evaluate("async c=>{const r=await axe.run(c?document.querySelector(c):document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa','wcag22aa']}});return r.violations.map(v=>({id:v.id,impact:v.impact,n:v.nodes.length,t:v.nodes.slice(0,3).map(x=>x.target.join(' '))}))}",ctx)
    return res
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch()
    # 1 load desktop
    pg=await b.new_page(viewport={'width':1366,'height':900}); errs=[]
    pg.on('pageerror',lambda e:errs.append(str(e)))
    await pg.goto(URL); await pg.wait_for_timeout(3500)
    rep(not errs,'No JS errors on load (desktop)',errs)
    rep(not await pg.evaluate('!!document.getElementById("loader")'),'Preloader removes itself')
    # scenarios via judge mode
    await pg.click('#tJudge')
    checks={'mismatch':('findings','passt nicht zur IBAN'),'close':('findings','nur fast'),'nocontact':('trust','noch keine Vertrauensperson'),'repeat':('notice','zweite Versuch'),'offline':('bank','Keine Internetverbindung'),'expired':('pause','Die Pause ist vorbei')}
    for sc,(screen,txt) in checks.items():
        await pg.click(f'[data-scen={sc}]'); await pg.wait_for_timeout(500)
        await pg.click(f'[data-jump={screen}]'); await pg.wait_for_timeout(700)
        t=await pg.inner_text('#screen'); rep(txt in t,f'Scenario "{sc}" shows expected state',txt)
    # full klaus flow with keyboard answers
    await pg.click('[data-scen=klaus]'); await pg.wait_for_timeout(600)
    await pg.click('[data-act=approve]'); await pg.wait_for_timeout(700)
    await pg.click('[data-act=check]'); await pg.wait_for_timeout(800)
    for k in ['j','n','Shift+Slash']:
        await pg.keyboard.press(k); await pg.wait_for_timeout(900)
    rep('aufgefallen' in await pg.inner_text('#screen'),'Keyboard answers J/N/? complete the questions')
    pts=await pg.locator('.points li').count(); rep(pts<=3,'Findings show max 3 points',pts)
    await pg.click('[data-act=trust]'); await pg.wait_for_timeout(800)
    await pg.click('[data-act=anna]'); await pg.wait_for_timeout(900)
    n=await pg.inner_text('#pscreen'); rep('IBAN' not in n.replace('keine IBAN','').replace('Du siehst keine IBAN',''),'Anna sees no IBAN')
    await pg.click('[data-anna=stop]'); await pg.wait_for_timeout(1200)
    t=await pg.inner_text('#screen'); rep('pausiert' in t and 'Anna' in t,'Anna "Bitte stoppen" pauses payment on Klaus screen')
    rep('noch auf Ihrem Konto' in t,'Pause screen says money is still in account')
    await pg.click('[data-act=cancel]'); await pg.wait_for_timeout(1200)
    rep('abgebrochen' in await pg.inner_text('#screen'),'Cancel leads to Done screen')
    # continue anyway path
    await pg.click('[data-jump=findings]'); await pg.wait_for_timeout(700)
    await pg.click('[data-act=anyway]'); await pg.wait_for_timeout(700)
    rep('Sie entscheiden' in await pg.inner_text('#screen'),'"Trotzdem fortfahren" is available without pressure')
    # fast forward
    await pg.click('[data-act=ffwd]'); await pg.wait_for_timeout(7000)
    rep('vorbei' in await pg.inner_text('#screen'),'Fast-forward pause reaches expired state')
    # forbidden words in app copy
    app=await pg.evaluate('JSON.stringify(Object.values(T.de).filter(v=>typeof v==="string"))')
    bad=[w for w in ['BETRUG','ALARM','DRINGEND'] if w in app]; rep(not bad,'No BETRUG/ALARM/DRINGEND in app copy',bad)
    # button heights & font sizes inside app screens (walk all screens)
    minbtn=999; minfont=999; small=[]
    for sc in ['bank','notice','q','findings','trust','pause','done']:
        await pg.click(f'[data-jump={sc}]'); await pg.wait_for_timeout(600)
        r=await pg.evaluate('''()=>{const s=document.getElementById("screen");let mb=999,mf=999,sm=[];
          s.querySelectorAll("button").forEach(b=>{const h=b.getBoundingClientRect().height;if(h<mb)mb=h});
          const w=document.createTreeWalker(s,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode()){if(!n.textContent.trim())continue;const e=n.parentElement;if(e.closest(".sr"))continue;const st=getComputedStyle(e);if(st.display==="none"||e.getAttribute("aria-hidden")==="true")continue;const f=parseFloat(st.fontSize);if(f<mf)mf=f;if(f<18)sm.push(f.toFixed(1)+"px:"+n.textContent.trim().slice(0,30))}
          return [mb,mf,sm]}''')
        minbtn=min(minbtn,r[0]); minfont=min(minfont,r[1]); small+= [sc+' '+x for x in r[2][:2]]
    rep(minbtn>=60,'All app buttons ≥ 60px high',f'min {minbtn:.0f}px')
    rep(minbtn>=44,'All app buttons ≥ 44px (AAA target size)',f'min {minbtn:.0f}px')
    rep(minfont>=18,'Smallest app text ≥ 18px',f'min {minfont:.1f}px; e.g. {small[:4]}')
    # contrast tokens: light app, high contrast
    async def ratios():
        return await pg.evaluate('''()=>{const cs=getComputedStyle(document.getElementById("screen")),g=n=>cs.getPropertyValue(n);
          const pairs=[["ink","paper"],["muted","paper"],["paper","ink"],["gold-ink","gold-soft"],["red","paper"],["ok","paper"]];
          return pairs.map(([a,b])=>[a+"/"+b,+ratio(g("--"+a),g("--"+b)).toFixed(2)])}''')
    rs=await ratios(); low=[x for x in rs if x[1]<4.5]; rep(not low,'App colour tokens ≥ 4.5:1 (light)',rs)
    await pg.click('#tContrast'); await pg.wait_for_timeout(300)
    rs=await ratios(); low=[x for x in rs if x[1]<4.5]; rep(not low,'App colour tokens ≥ 4.5:1 (high contrast)',rs)
    await pg.click('#tContrast')
    # stop button white text contrast
    sr=await pg.evaluate('ratio("#FFFFFF",getComputedStyle(document.getElementById("screen")).getPropertyValue("--red"))'); rep(sr>=4.5,'White text on red "Zahlung abbrechen" ≥ 4.5:1',round(sr,2))
    # landing tokens on night
    lr=await pg.evaluate('(()=>{const cs=getComputedStyle(document.body);return [ratio(cs.getPropertyValue("--muted"),"#141412"),ratio(cs.getPropertyValue("--muted"),cs.getPropertyValue("--paper")),ratio("#FFCC00","#0B0B0A")]})()')
    rep(min(lr)>=4.5,'Landing grey/gold text on dark ≥ 4.5:1',[round(x,2) for x in lr])
    # focus visible
    await pg.click('[data-jump=notice]'); await pg.wait_for_timeout(600)
    await pg.focus('[data-act=check]'); await pg.keyboard.press('Tab'); await pg.keyboard.press('Shift+Tab')
    fv=await pg.evaluate('(()=>{const e=document.activeElement,s=getComputedStyle(e);return s.outlineStyle+" "+s.outlineWidth})()'); rep('solid' in fv,'Visible focus outline on buttons',fv)
    # EN
    await pg.click('#tLang'); await pg.wait_for_timeout(800)
    await pg.click('[data-jump=q]'); await pg.wait_for_timeout(700)
    t=await pg.inner_text('#screen'); rep('Question 1 of 3' in t and 'Y' in t,'English mode: questions + Y key',t[:40])
    await pg.keyboard.press('y'); await pg.wait_for_timeout(900)
    rep('Question 2' in await pg.inner_text('#screen'),'Y key answers in English')
    await pg.click('#tLang'); await pg.wait_for_timeout(500)
    # axe
    await pg.wait_for_timeout(1500); v=await axe(pg,None); rep(not v,'axe-core WCAG 2.2 AA – landing + demo',json.dumps(v,ensure_ascii=False)[:600])
    # 200% text: scale 2 reflow
    await pg.evaluate('document.documentElement.style.setProperty("--scale",2)'); await pg.wait_for_timeout(500)
    ov=await pg.evaluate('document.documentElement.scrollWidth-document.documentElement.clientWidth'); rep(ov<=1,'No horizontal scroll at 200% text (1366px)',ov)
    await pg.evaluate('document.documentElement.style.setProperty("--scale",1)')
    # app mode + mobile
    m=await b.new_page(viewport={'width':320,'height':640}); me=[]; m.on('pageerror',lambda e:me.append(str(e)))
    await m.goto(URL+'?app'); await m.wait_for_timeout(1500)
    rep(not me,'?app loads without errors',me)
    rep(await m.evaluate('document.body.classList.contains("appmode")') and not await m.is_visible('#hero'),'?app hides landing')
    ov=await m.evaluate('document.documentElement.scrollWidth-document.documentElement.clientWidth'); rep(ov<=1,'No horizontal scroll at 320px (≈400% zoom)',ov)
    v=await axe(m,None); rep(not v,'axe-core – app mode 320px',json.dumps(v,ensure_ascii=False)[:500])
    # reduced motion
    rm=await b.new_context(reduced_motion='reduce',viewport={'width':1366,'height':900}); r=await rm.new_page()
    await r.goto(URL); await r.wait_for_timeout(1200)
    a=await r.evaluate('ANIMS'); vis=await r.evaluate('getComputedStyle(document.querySelector(".reveal")).opacity')
    rep(a==0 and not await r.evaluate('!!document.getElementById("loader")') and vis=='1','Reduced motion: no animations, no loader, content visible',f'anims={a} opacity={vis}')
    # dark scheme app tokens
    dk=await b.new_context(color_scheme='dark'); d=await dk.new_page(); await d.goto(URL+'?app'); await d.wait_for_timeout(1000)
    rs=await d.evaluate('''(()=>{const cs=getComputedStyle(document.getElementById("screen")),g=n=>cs.getPropertyValue(n);return [["ink","paper"],["muted","paper"],["gold-ink","gold-soft"],["red","paper"]].map(([a,b])=>[a+"/"+b,+ratio(g("--"+a),g("--"+b)).toFixed(2)])})()''')
    rep(all(x[1]>=4.5 for x in rs),'App colour tokens ≥ 4.5:1 (system dark)',rs)
    await b.close()
asyncio.run(main())
for s,n,d in R: print(f'{s}  {n}' + (f'  -> {d}' if d not in ('',[],None) else ''))
print(sum(1 for x in R if x[0]=='PASS'),'/',len(R),'passed')
