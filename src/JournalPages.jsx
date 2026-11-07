import {useState} from 'react';
import {visitPoints,visitStatus} from './visitPoints';
import CostSummary from './CostSummary.jsx';
import {ArrowRight,ArrowUpRight,MapPin} from 'lucide-react';
import {trip,journalDays,spots,credits,mapUrl,bookingEvidence} from './journal';
import {tripSpending,matchedCardTransactions,suicaTransactions,suicaExpenseSubtotal} from './budget';
export const asset=p=>import.meta.env.BASE_URL+p;
const yen=n=>'¥'+n.toLocaleString('ja-JP');
const money=(n,c)=>n===null?'金額待補':(c==='TWD'?'NT$':'¥')+n.toLocaleString('zh-TW',{maximumFractionDigits:2});
export function External({href,children}){return <a className="out-link" href={href} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={16}/></a>}
export function Photo({id,hero=false}){const c=credits[id];return <figure className={hero?'photo hero-photo':'photo'}><img src={asset(c.file)} alt={spots.find(s=>s.id===id)?.name+'景點參考照片'} loading={hero?'eager':'lazy'} decoding="async"/><figcaption><a href={c.source} target="_blank" rel="noopener noreferrer">{c.author} / {c.license}</a><span>授權參考照片</span></figcaption></figure>}
export function Label({children}){return <p className="kicker">{children}</p>}
export function Intro({label,title,children}){return <header className="page-intro"><Label>{label}</Label><h1>{title}</h1><p>{children}</p></header>}
function DayCards(){return <div className="day-cards">{journalDays.map(d=><a href={`#day-${d.id}`} className="day-card" key={d.id}><div className="day-card-image"><img src={asset(credits[d.photo].file)} alt={d.area} loading="lazy"/><span>DAY {String(d.id).padStart(2,'0')}</span></div><div className="day-card-copy"><small>{d.date} / {d.weekday}</small><h3>{d.title}</h3><p>{d.area}</p><span className="read-link">閱讀這一天 <ArrowRight size={17}/></span></div></a>)}</div>}
export function JournalHome(){return <>
 <section className="cover"><div className="cover-copy"><Label>SETOUCHI / A FAMILY TRAVEL JOURNAL</Label><p className="cover-date">02 — 06 NOVEMBER, 2026</p><h1>在瀨戶內，<br/>慢慢旅行<span>。</span></h1><p className="cover-sub">高松・直島・小豆島<br/>三位成人的五天四夜家庭自由行</p><a className="solid-button" href="#daily">從五天路線開始 <ArrowRight size={19}/></a><span className="cover-index">JAPAN, KAGAWA　34° N / 134° E</span></div><Photo id="ritsurin" hero/><div className="vertical-note">家族と、瀬戸内を旅する。</div></section>
 <div className="trip-facts"><span><b>05</b> 天的旅行</span><span><b>03</b> 位成人同行</span><span><b>04</b> 晚住在高松</span><span className="facts-last">2026 秋・旅後整理</span></div>
 <section className="editorial-section intro-layout"><Label>THE STORY</Label><div><h2>一個落腳處，<br/>五天不一樣的風景。</h2><p>{trip.intro}</p><p>這份紀錄整理了出發前的規劃，也納入旅後確認的路線：週一在栗林公園搭和船，週四串聯金刀比羅宮與四國水族館，週五早上走訪玉藻公園。沒有完整記錄的時間，會保留為規劃參考，不寫成實際搭乘。</p><a href="#travel" className="text-link">先看交通與住宿怎麼安排 <ArrowRight size={18}/></a></div></section>
 <section className="editorial-section"><div className="section-heading"><div><Label>FIVE DAYS, FIVE CHAPTERS</Label><h2>把五天，慢慢展開。</h2></div><a href="#daily" className="text-link">完整行程 <ArrowRight size={18}/></a></div><DayCards/></section>
 <section className="money-teaser"><div><Label>THE COST OF THIS JOURNEY</Label><h2>花了多少，<br/>也說清楚花在哪裡。</h2><p>現金約用掉 ¥48,000～49,000。機票、住宿與其他刷卡支出分開整理，讓每一筆都有它的位置。</p><a className="solid-button" href="#expenses">打開旅行帳本 <ArrowRight size={18}/></a></div><dl><div><dt>三人來回機票</dt><dd>NT$36,150</dd><small>航空公司付款郵件已核對</small></div><div><dt>三人房・四晚含早餐</dt><dd>NT$17,274.32</dd><small>住宿收據已核對</small></div><div><dt>含現金的旅行情境概算</dt><dd className="pending-total">三人約 NT$85,000</dd><small>每人約 NT$28,300・現金購物待拆，詳見計算假設</small></div></dl></section>
 <section className="editorial-section"><div className="section-heading"><div><Label>PLACES ALONG THE WAY</Label><h2>從庭園，到島嶼的海。</h2></div><a className="text-link" href="#places">景點與官方連結 <ArrowRight size={18}/></a></div><div className="spot-preview">{['olive','aquarium'].map(id=><div key={id}><Photo id={id}/><h3><a href="#places">{spots.find(s=>s.id===id).name}</a></h3></div>)}</div></section>
 <aside className="editor-note"><Label>A NOTE FOR FELLOW TRAVELERS</Label><p>這是 2026 年 11 月的個人旅行規劃與花費紀錄，提供安排路線的參考。船班、營業時間與價格會變動；重新出發前，請由各頁的官方連結確認。照片為開放授權的景點參考影像，非本次旅行實拍。</p></aside>
 </>}
export function JournalItinerary({route,go}){const selected=route.startsWith('day-')?Number(route.slice(4)):1;const day=journalDays[selected-1];return <>
 <Intro label="THE ITINERARY" title="五天，五段旅途。">從高松出發，搭船看島嶼，搭 JR 走訪琴平與宇多津。選一天，閱讀路線與安排。</Intro>
 <nav className="journal-tabs" aria-label="選擇旅行日期">{journalDays.map(d=><button key={d.id} onClick={()=>go(`day-${d.id}`)} aria-pressed={selected===d.id}><small>DAY {d.id} · {d.date}</small><span>{d.area}</span></button>)}</nav>
 <article className="day-article"><div className="day-article-heading"><Label>CHAPTER {String(day.id).padStart(2,'0')} / {day.date} {day.weekday}</Label><h2>{day.title}</h2><p>{day.lead}</p></div><Photo id={day.photo}/><div className="route-summary"><MapPin size={20}/><p>{day.route}</p></div>
 <div className="article-columns"><div className="journal-timeline">{day.stops.map(([time,title,description,place,official],i)=><section key={title} className="stop"><span className="stop-number">{String(i+1).padStart(2,'0')}</span><Label>{time}</Label><h3>{title}</h3><p>{description}</p><div className="stop-links"><External href={mapUrl(place)}><MapPin size={16}/>Google Maps</External><External href={official}>官方資訊</External></div></section>)}</div><aside className="reading-aside"><Label>PLANNING NOTES</Label><h3>這一天的安排重點</h3>{day.notes.map(n=><p key={n}>{n}</p>)}<p className="small-note">精確時間來自原始訂單；未核實的渡輪時間已明示為旅前規劃。自行重排時，請重新查官方時刻。</p></aside></div>
 <nav className="chapter-nav" aria-label="切換文章">{selected>1?<a href={`#day-${selected-1}`}>← 前一天</a>:<span/>}{selected<5?<a href={`#day-${selected+1}`}>下一天：{journalDays[selected].area} →</a>:<a href="#expenses">接著看旅行花費 →</a>}</nav></article>
 </>}
export function JournalExpenses(){const cash=tripSpending.cash;return <>
 <Intro label="THE TRAVEL LEDGER" title="花多少，也看花去哪裡。">五天四夜、三位成人的旅費紀錄。訂單、現金概算與刷卡通知分開呈現，保留核對依據，也保留尚未確定的部分。</Intro>
 <CostSummary/>
 <div className="expense-overview"><div className="cash-highlight"><Label>CASH USED / JPY</Label><h2>¥48,000<span>—</span>49,000</h2><p>實際現金使用概算・三人合計</p><dl><div><dt>準備現金</dt><dd>{cash.preparedLabel}</dd></div><div><dt>旅行結束剩餘</dt><dd>{cash.remainingLabel}</dd></div></dl><span className="status">使用者提供的概算</span></div><div className="total-pending"><h3>整趟總花費，尚未結算。</h3><p>現金使用不等於全部旅費。正式信用卡帳單還沒完整核對，交通卡也須先排除儲值重複，因此不把不同來源硬加成一個總數。</p><p>以下金額都不是目前可直接相加的總帳。</p></div></div>
 <section className="editorial-section"><Label>BOOKINGS & RECEIPTS</Label><h2>大項費用，有據可查。</h2><p className="section-description">依本人訂單與 Gmail 確認信、收據核對。只刊出去除個資的摘要，原始文件不公開；這些費用可能與刷卡帳單或現金彙總重疊。</p><div className="evidence-list">{bookingEvidence.map(e=><article key={e.id}><div><span className="status">{e.status}</span><h3>{e.title}</h3><p>{e.detail}</p><small>核對依據：{e.source}</small></div><strong>{e.approximate?'約 ':''}{money(e.amount,e.currency)}</strong></article>)}</div></section>
 <section className="editorial-section"><Label>CARD TRANSACTIONS / MATCHED</Label><h2>刷卡花在哪裡？</h2><p className="section-description">六筆商店交易已由 Wallet 原幣紀錄與刷卡通知配對。日圓與台幣是同一筆交易的兩種顯示，不重複計算。通知金額仍待正式帳單核對。</p><div className="table-wrap"><table><caption>可辨識商家・非完整刷卡總額</caption><thead><tr><th>商家</th><th>日圓原幣</th><th>台幣通知</th></tr></thead><tbody>{matchedCardTransactions.map(t=><tr key={t.id}><td>{t.merchant}<small>{t.merchantOnNotice}</small></td><td>{yen(t.originalAmount)}</td><td>{money(t.amount,'TWD')}</td></tr>)}</tbody></table></div><p className="small-note">水族館館方子商家的實際購買品項未從收據確認；¥4,200 也不當作三位成人的標準門票。未辨識的商店不依金額猜測歸類。</p></section>
 <section className="editorial-section"><Label>SUICA / PAYMENTS, NOT TOP-UPS</Label><h2>交通卡，算扣款不算儲值。</h2><div className="suica-layout"><div>{suicaTransactions.map(t=><div className="ledger-row" key={t.id}><span>{t.title}{t.type==='transfer'&&<small>資金移轉・不列消費</small>}</span><b>{yen(t.amount)}</b></div>)}</div><aside><span className="status">截圖可見五筆消費</span><strong>{yen(suicaExpenseSubtotal)}</strong><p>非完整 Suica 消費，亦非三人全部交通費。¥3,000 儲值與信用卡 Suica 扣款為同一筆資金移轉；「未收費／讀卡」紀錄不列支出。</p></aside></div></section>
 <aside className="accounting-note"><h3>這份旅行帳本怎麼看</h3><ul><li>現金用彙總金額記錄，不再疊加零散現金估算。</li><li>換匯、提款與 Suica 儲值屬資金移轉，不另外算消費。</li><li>台幣、日圓及住宿收據中的美元不能直接相加；同一筆訂單只記一次。</li><li>待正式帳單、退款及支付來源核對後，再更新最終旅行總支出。</li></ul></aside>
 </>}
function VisitPoint({point}){return <article className="visit-card">
 {point.photo&&<Photo id={point.photo}/>}
 <div className="visit-card-top"><span className="visit-kind">{point.kind}</span><span className={`status visit-status-${point.status}`}>{visitStatus[point.status]}</span></div>
 <h3>{point.name}</h3><p className="jp-caption">{point.jp}</p><p>{point.description}</p>
 <div className="stop-links"><External href={point.official}>官方資訊</External><External href={mapUrl(point.jp)}><MapPin size={16}/>Google Maps</External></div>
 <a className="text-link" href={`#day-${point.day}`}>對應 D{point.day}：{point.stop} <ArrowRight size={15}/></a>
 </article>}
export function JournalPlaces(){
 const [dayFilter,setDayFilter]=useState(0);
 const [kind,setKind]=useState('全部');
 const matching=visitPoints.filter(p=>(!dayFilter||p.day===dayFilter)&&(kind==='全部'||p.kind===kind));
 const days=journalDays.filter(d=>matching.some(p=>p.day===d.id));
 return <><Intro label="OUR TRIP, PLACE BY PLACE" title="把走過的路，對上每一個地方。">依 D1～D5 的行程，把景點、美術館、體驗與餐廳拆開整理。已確認到訪、行程紀錄與已購票分別標示；彈性規劃另外收起，不當作到訪證明。</Intro>
 <section className="visit-controls" aria-label="篩選旅途地點">
 <nav className="journal-tabs" aria-label="依日期篩選地點"><button aria-pressed={dayFilter===0} onClick={()=>setDayFilter(0)}><small>ALL FIVE DAYS</small><span>完整旅途索引</span></button>{journalDays.map(d=><button key={d.id} aria-pressed={dayFilter===d.id} onClick={()=>setDayFilter(d.id)}><small>DAY {d.id} · {d.date}</small><span>{d.area}</span></button>)}</nav>
 <div className="visit-filter-row"><p>{matching.filter(p=>p.status!=='optional').length} 個景點／餐飲／體驗紀錄・{matching.filter(p=>p.status==='optional').length} 個彈性規劃</p><label>類型 <select value={kind} onChange={e=>setKind(e.target.value)}>{['全部',...new Set(visitPoints.map(p=>p.kind))].map(k=><option key={k}>{k}</option>)}</select></label></div>
 <p className="small-note">索引直接對應每日文章。已購票不等於已確認入館；區域照片是授權參考影像，不代表每張卡片的店家或場館實照。</p>
 </section>
 {days.length===0&&<div className="editor-note"><p>這一天沒有符合類型的紀錄。</p><button className="solid-button" onClick={()=>{setDayFilter(0);setKind('全部')}}>查看全部地點</button></div>}
 <div className="visit-days">{days.map(day=>{const records=matching.filter(p=>p.day===day.id&&p.status!=='optional');const optional=matching.filter(p=>p.day===day.id&&p.status==='optional');return <section className="visit-day" key={day.id}>
 <header className="visit-day-heading"><div><Label>DAY {day.id} / {day.date} {day.weekday}</Label><h2>{day.area}</h2><p>{day.route}</p><a className="text-link" href={`#day-${day.id}`}>閱讀這一天的完整行程 <ArrowRight size={17}/></a></div><Photo id={day.photo}/></header>
 <div className="visit-grid">{records.map(p=><VisitPoint key={p.id} point={p}/>)}</div>
 {optional.length>0&&<details className="optional-visits"><summary>彈性規劃・尚未確認到訪（{optional.length}）</summary><div className="visit-grid">{optional.map(p=><VisitPoint key={p.id} point={p}/>)}</div></details>}
 </section>})}</div>
 <section className="photo-credits"><Label>PHOTO CREDITS</Label><h2>照片來源與使用說明</h2><p>以下影像由 Wikimedia Commons 開放授權取得，下載後存放於本站，並非本次旅行實拍，也不代表當日天候或季節。影像已縮圖、壓縮，版面可能裁切；各影像沿用其原授權。</p>{Object.entries(credits).map(([id,c])=><div className="credit-row" key={id}><b>{spots.find(s=>s.id===id)?.name}</b><span>{c.author}</span><External href={c.source}>來源檔案</External><External href={c.licenseUrl}>{c.license}</External></div>)}</section></>;
}
