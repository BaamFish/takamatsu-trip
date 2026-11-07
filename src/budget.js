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
