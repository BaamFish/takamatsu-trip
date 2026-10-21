import TripJapanese from './TripJapanese';
import {useState} from 'react';
import {handbookPhrases} from '../handbook';
import {pronunciationTips} from '../language';
import {Heading,CopyButton} from './Shared';
const categories=[...new Set(handbookPhrases.map(p=>p.category))];
export default function JapaneseHandbook({notify}){
 const [view,setView]=useState('practice');const [query,setQuery]=useState('');const [category,setCategory]=useState('全部');const [role,setRole]=useState('all');
 const visible=handbookPhrases.filter(p=>(category==='全部'||p.category===category)&&(role==='all'||p.role===role)&&[p.category,p.meaning,p.japanese,p.kana,p.romaji,p.note].join(' ').toLowerCase().includes(query.trim().toLowerCase()));
 return <><Heading eyebrow="JAPANESE TRAVEL HANDBOOK" title="這趟旅行，日文小手冊。">從點餐到搭船，整理你可能要說的話，也幫你聽懂對方的問題。共 {handbookPhrases.length} 句，附假名、羅馬拼音與中文用法。</Heading>
 <div className="notice inline-notice">不必整句背下來。先找中文意思，把日文出示給對方；店員說法可能略有不同。例句中的餐點、交通與服務僅供溝通，不代表已預約。</div>
 <div className="handbook-filters handbook-views" role="group" aria-label="小手冊內容">{[['practice','行程情境題'],['places','景點日文'],['phrases','常用短句']].map(([id,label])=><button key={id} aria-pressed={view===id} onClick={()=>setView(id)}>{label}</button>)}</div>{view!=='phrases'&&<TripJapanese mode={view} notify={notify}/>}<div hidden={view!=='phrases'}><div className="handbook-controls"><label className="phrase-search">搜尋日文小手冊<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="例如：加熱、袋子、廁所、土庄、等多久"/></label><div className="handbook-filters" role="group" aria-label="短句對話方向">{[['all','全部對話'],['say','我要說的'],['hear','我可能聽到的']].map(([id,label])=><button key={id} aria-pressed={role===id} onClick={()=>setRole(id)}>{label}</button>)}</div><label className="handbook-select">使用情境<select value={category} onChange={e=>setCategory(e.target.value)}>{['全部',...categories].map(c=><option key={c}>{c}</option>)}</select></label></div>
 <div className="handbook-categories" role="group" aria-label="情境快速切換">{['全部',...categories].map(c=><button key={c} aria-pressed={category===c} onClick={()=>setCategory(c)}>{c}</button>)}</div>
 <details className="panel pronunciation"><summary>羅馬拼音怎麼讀？長音、停頓與助詞</summary><ul>{pronunciationTips.map(t=><li key={t}>{t}</li>)}</ul></details>
 <p className="handbook-count" role="status">找到 {visible.length} 句{category!=='全部'?' · '+category:''}</p>
 {!visible.length&&<div className="panel"><p>找不到符合的短句，試試其他關鍵字或切回全部。</p><button className="text-button" onClick={()=>{setQuery('');setCategory('全部');setRole('all')}}>清除篩選</button></div>}
 <div className="handbook-list">{categories.filter(c=>visible.some(p=>p.category===c)).map(c=><details className="panel handbook-group" key={c} open={category!=='全部'||!!query.trim()}><summary><span>{c}</span><small>{visible.filter(p=>p.category===c).length} 句</small></summary>{visible.filter(p=>p.category===c).map(p=><article className={'handbook-card '+p.role} key={p.id}><span className="badge">{p.role==='say'?'我要說的':'對方可能會說'}</span><h2>{p.meaning}</h2><p className="phrase-japanese" lang="ja">{p.japanese}</p><p className="handbook-kana" lang="ja">讀音：{p.kana}</p><p className="romaji" lang="ja-Latn">{p.romaji}</p><p className="muted">{p.note}</p><CopyButton text={p.japanese} notify={notify}/></article>)}</details>)}</div></div></>
}
