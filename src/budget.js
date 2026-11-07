// 使用者提供的旅後概算；現金以彙總記錄，不與逐筆估算重複加總。
export const tripSpending = {
  travelers: 3,
  duration: '五天四夜',
  currency: 'JPY',
  cash: {
    prepared: 50000,
    preparedLabel: '約 ¥50,000',
    remainingLabel: '約 ¥1,000 多',
    usedMin: 48000,
    usedMax: 49000,
    usedLabel: '約 ¥48,000～49,000',
    status: '使用者提供的概算',
    accounting: 'summary',
  },
  creditCard: { amount: null, status: '待正式信用卡帳單核對' },
  total: { amount: null, status: '尚未結算' },
};

// Wallet 原幣交易與先前刷卡通知配對，兩種幣別描述同一筆交易。
export const matchedCardTransactions = [
  ['airport-duty-notification','高松機場免稅店','TAKAMATSU AIRPORT DUTY',1275,267],
  ['airport-sky-shop','高松商運 天空商店','高松商運 天空商店',2200,461],
  ['tamamo','玉藻公園','Tamamokouen',900,188],
  ['aquarium-miyu','四國水族館・商家紀錄 Miyu-Jia','Shikokusuizokukanmiyu-Jia',550,115],
  ['aquarium-event','四國水族館・商家紀錄 Ibentosu','Shikokusuizokukanibentosu',2360,493],
  ['aquarium','四國水族館','Shikokusuizokukann',4200,878],
].map(([id,merchant,merchantOnNotice,originalAmount,amount])=>({
  id,merchant,merchantOnNotice,originalAmount,originalCurrency:'JPY',amount,currency:'TWD',
  source:'使用者提供的 Wallet 交易與刷卡通知',
  status:'原幣金額相符・待正式帳單核對',includedInFinalTotal:false,
}));

export const suicaTransactions = [
  {id:'ic-shop-180',title:'高松市消費・商店未顯示',amount:180,type:'expense'},
  {id:'ic-bus-1300',title:'高松市公車・路線未顯示',amount:1300,type:'expense'},
  {id:'ic-shop-1200',title:'高松市消費・商店未顯示',amount:1200,type:'expense'},
  {id:'ic-utazu-takamatsu',title:'JR 宇多津 → 高松',amount:630,type:'expense'},
  {id:'ic-kotohira-utazu',title:'JR 琴平 → 宇多津',amount:430,type:'expense'},
  {id:'ic-topup',title:'Suica 儲值（資金移轉）',amount:3000,type:'transfer'},
];
export const suicaExpenseSubtotal=suicaTransactions.filter(t=>t.type==='expense').reduce((sum,t)=>sum+t.amount,0);
