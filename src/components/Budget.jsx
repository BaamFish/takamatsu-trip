import {knownExpenses} from '../data';
import {tripSpending,matchedCardTransactions,suicaTransactions,suicaExpenseSubtotal} from '../budget';
import {useStored} from '../hooks';

const fields=[['flight','機票（3 人）'],['hotel','飯店（4 晚）'],['pickup','機場交通'],['ferry','渡輪'],['bike','自行車'],['kotohira','琴平交通與接駁'],['art','其他美術館門票'],['food','餐飲與其他']];

export default function Budget(){
  const [costs,setCosts,error]=useStored('takamatsu-budget-v1',{});
  const {cash,creditCard,total}=tripSpending;
  return <section className="section">
    <p className="eyebrow">TRAVEL EXPENSES</p>
    <h2>旅行費用，一起記。</h2>
    <p className="muted">五天四夜・3 位成人家庭自由行。以下現金為三人合計概算，信用卡另行統計。</p>
    <div className="departure-grid">
      <article className="panel">
        <h3>現金花費</h3>
        <div className="budget-row"><span>準備現金</span><b>{cash.preparedLabel}</b></div>
        <div className="budget-row"><span>旅行結束剩餘</span><b>{cash.remainingLabel}</b></div>
        <div className="budget-row"><span>實際現金使用</span><b>{cash.usedLabel}</b></div>
        <p><span className="badge">{cash.status}</span></p>
        <p>缺少逐筆現金明細，目前以使用總額作為彙總紀錄。現金使用不等於整趟旅行總花費。</p>
      </article>
      <article className="panel">
        <h3>信用卡花費</h3>
        <p><b>{creditCard.status}</b></p>
        <p>尚無可確認的完整刷卡總額；未填金額不代表零支出。取得正式帳單後，再核對各筆消費、退款及入帳幣別。</p>
      </article>
    </div>
    <section className="panel">
      <h3>已對應商店的刷卡通知</h3>
      <p className="muted">以下為通知金額，並非正式帳單或完整刷卡總額。日圓原幣與台幣通知為同一筆交易，不重複計算，尚未計入整趟旅行總花費。</p>
      {matchedCardTransactions.map(t=><article key={t.id} className="shopping-option">
        <h4>{t.merchant}</h4>
        <p>{t.merchantOnNotice}</p>
        <p><b>原幣：¥{t.originalAmount.toLocaleString('ja-JP')} ／ 通知：NT${t.amount.toLocaleString('zh-TW')}</b></p>
        <p><span className="badge">{t.status}</span></p>
        <p className="muted">來源：{t.source}。正式入帳、匯率及手續費以帳單為準。</p>
      </article>)}
      <p className="muted">其餘通知的商店名稱或交易內容尚未辨識清楚，未分配到特定店家。換匯、提款、非本次旅行消費與重複通知不列為新增旅費。</p>
    </section>
    <section className="panel">
      <h3>Suica 實際扣款</h3>
      <p className="muted">僅為截圖可見紀錄，非完整 Suica 消費總額；不代表三人全程交通費。</p>
      {suicaTransactions.map(t=><div className="budget-row" key={t.id}><span>{t.title}</span><b>¥{t.amount.toLocaleString('ja-JP')}</b><span className="badge">{t.type==='transfer'?'不列消費':'實際扣款'}</span></div>)}
      <p><b>截圖可見消費小計：¥{suicaExpenseSubtotal.toLocaleString('ja-JP')}</b></p>
      <p className="muted">¥3,000 儲值與信用卡 Suica 扣款是同一筆資金移轉，不另算消費。「未收費／已讀取卡片」不列支出。商店、公車路線及完整日期未顯示，不自行推定；星期四鐵路紀錄與琴平、宇多津、高松路線相符。</p>
      <p className="muted">合併總額前仍須核對 Suica 儲值來源，避免與現金彙總或信用卡儲值重複計算。</p>
    </section>
    <div className="budget-total">
      <span>整趟旅行總花費・3 人合計</span>
      <strong>{total.status}</strong>
      <small>待正式信用卡帳單核對後，再合併現金與其他未重複的實際支出；不同幣別須先統一換算。</small>
    </div>
    <div className="notice">
      <b>費用計算方式</b>
      <p>換匯與提款是資金移轉，不另外當作旅費。現金彙總已涵蓋的消費，不再加上零散現金估算；下方預約金額與自記分類可能已包含於現金或刷卡紀錄，因此不直接計入總額。</p>
    </div>
    <details className="panel">
      <summary>預約與票券金額參考（不另加總）</summary>
      <p className="muted">供對帳使用；預約金額不等於新增支出，付款狀態仍以原始憑證與帳單為準。</p>
      {knownExpenses.map(e=><div className="budget-row" key={e.id}><span>{e.title}</span><b>¥{e.amount.toLocaleString('ja-JP')}</b><span className="badge">{e.status}</span></div>)}
    </details>
    <details className="panel">
      <summary>本機自記分類參考（不計入總額）</summary>
      <p className="muted">保留這台裝置既有的分類紀錄，供後續對帳。金額為日圓，可能包含估算或與現金彙總重疊，尚未按付款方式核對，不作為新增支出。</p>
      {costs.jr&&<p className="muted">待歸類交通紀錄：¥{Number(costs.jr).toLocaleString('ja-JP')}，不計入總額。</p>}
      {fields.map(([id,label])=><label className="budget-row" key={id}><span>{label}</span><span className="budget-input">¥ <input type="number" min="0" max="99999999" step="1" inputMode="numeric" placeholder="尚未填寫" value={costs[id]??''} onChange={e=>{const v=e.target.value;if(v===''||(Number.isFinite(Number(v))&&Number(v)>=0&&Number(v)<=99999999))setCosts({...costs,[id]:v})}} aria-label={`${label}日圓金額`}/></span></label>)}
    </details>
    {error&&<p role="alert">費用無法儲存在此瀏覽器。</p>}
  </section>;
}
