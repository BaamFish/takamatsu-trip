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

// 僅收錄可辨識商店的刷卡通知，不收錄卡號、個資或原始截圖。
// 通知的台幣金額不是最終入帳金額，不與日圓現金直接相加。
export const matchedCardTransactions = [
  {
    id: 'airport-duty-notification',
    merchant: '高松機場免稅店',
    merchantOnNotice: 'TAKAMATSU AIRPORT DUTY',
    amount: 267,
    currency: 'TWD',
    source: '使用者提供的刷卡通知',
    status: '商店名稱可辨識・待正式帳單核對',
    includedInFinalTotal: false,
  },
];
