import {referenceRate,itemizedRows,itemizedTotal,itemizedPerPerson,familyEstimate,familyPerPerson,shoppingTransactions,visibleShoppingTwd} from './costSummary';
const nt=n=>'NT$'+Math.round(n).toLocaleString('zh-TW');
const rounded=n=>'NT$'+(Math.round(n/100)*100).toLocaleString('zh-TW');
export default function CostSummary(){return <section className="editorial-section cost-summary">
 <p className="kicker">TRIP COST / THREE ADULTS</p><h2>這趟旅行，一人大約多少？</h2>
 <div className="expense-overview summary-cards">
  <article className="cash-highlight"><span className="status">已列明行程費用・不加現金彙總</span><h3>三人約 {rounded(itemizedTotal)}</h3><p><b>均攤每人約 {rounded(itemizedPerPerson)}</b></p><p>含已列機票、飯店、接機、JR、巴士、美術館、自行車、兩餐及可見景點／交通交易。不含已辨識機場購物；未列明餐飲、渡輪等也未補估，因此不是全部旅費。</p></article>
  <article className="cash-highlight"><span className="status">含現金使用的情境試算・非結算</span><h3>三人約 {rounded(familyEstimate.min)}～{rounded(familyEstimate.max)}</h3><p><b>均攤每人約 {rounded((familyPerPerson.min+familyPerPerson.max)/2)}</b></p><p>{familyEstimate.assumption}</p><p><b>尚未完全剔除現金中的伴手禮，不代表純行程最終總額。</b>若家人支付的餐費已包含在現金彙總，還須扣除重複部分。</p></article>
 </div>
 <p className="small-note">日圓統一以 ¥1＝NT${referenceRate.toFixed(2)} 作比較用試算，不是銀行實際匯率。兩種算法是不同角度，不能相加；仍待正式帳單與付款來源核對。</p>
 <details className="cost-details"><summary>展開已列明行程費用的計算項目</summary><div className="table-wrap"><table><thead><tr><th>項目</th><th>台幣試算</th></tr></thead><tbody>{itemizedRows.map(r=><tr key={r.id}><td>{r.title}</td><td>{nt(r.twd)}</td></tr>)}</tbody></table></div><p className="small-note">水族館子商家的品項仍待收據確認，若屬伴手禮須從行程項目移出。Suica 僅列可辨識交通三筆；另兩筆消費因用途不明留在明細，不納此小計。</p></details>
 <div className="shopping-summary"><h3>伴手禮／購物，另外看</h3><p>目前可辨識的機場購物通知合計 <b>{nt(visibleShoppingTwd)}</b>，另外列示，未納入上述試算。</p>{shoppingTransactions.map(t=><div className="ledger-row" key={t.id}><span>{t.merchant}<small>品項待確認，暫列購物，不直接認定全部是伴手禮</small></span><b>¥{t.originalAmount.toLocaleString()} ／ {nt(t.amount)}</b></div>)}<p className="small-note">其他購物及現金中的伴手禮尚未拆分。這是已辨識購物的小計，不是所有伴手禮總額。</p></div>
 </section>}
