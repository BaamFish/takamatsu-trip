// 行前待辦：預約完成、付款與取消分開記錄。
export const preparationTasks=[
  {
    "id": "booked-flight",
    "title": "來回機票已訂",
    "note": "11/02 JX300、11/06 JX301，成人 3 人。",
    "group": "已完成的預約",
    "defaultDone": true
  },
  {
    "id": "booked-hotel",
    "title": "四晚飯店已訂",
    "note": "11/02–11/06，高松世紀飯店，三人房含早餐。",
    "group": "已完成的預約",
    "defaultDone": true
  },
  {
    "id": "booked-pickup",
    "title": "11/02 Klook 接機已預約",
    "note": "僅抵達接機；不代表回程或行李容量已確認。",
    "group": "已完成的預約",
    "defaultDone": true
  },
  {
    "id": "booked-bike",
    "title": "11/03 電動自行車 3 台已預約",
    "note": "OUGIYA 09:30；仍須現場付款與確認還車期限。",
    "group": "已完成的預約",
    "defaultDone": true
  },
  {
    "id": "booked-bus",
    "title": "11/04 小豆島觀光巴士已預約",
    "note": "成人 3 人；付款狀態及包含項目仍待核對。",
    "group": "已完成的預約",
    "defaultDone": true
  },
  {
    "id": "booked-nnmoa",
    "title": "11/03 直島新美術館 3 張已購票",
    "note": "已提供票券截圖；適用時段與離線憑證另列待辦。",
    "group": "已完成的預約",
    "defaultDone": true
  },
  {
    "id": "booked-benesse",
    "title": "11/03 Benesse House／Valley Gallery 3 張已購票",
    "note": "已提供票券截圖；票券適用條件另需確認。",
    "group": "已完成的預約",
    "defaultDone": true
  },
  {
    "id": "booked-dinner",
    "title": "11/02 18:30 燒肉晚餐已確認",
    "note": "しんすけ トキワ新町店，成人 3 人。",
    "group": "已完成的預約",
    "defaultDone": true
  },
  {
    "id": "booked-jr",
    "title": "11/05 JR 去程指定席已預訂",
    "note": "しまんと3号，高松 08:25 → 琴平 09:00，成人 3 人；領票另辦。",
    "group": "已完成的預約",
    "defaultDone": true
  },
  {
    "id": "luggage",
    "group": "最優先",
    "title": "確認接機三人行李容量及集合點",
    "note": "Toyota Altis 或同級；請向 Klook 供應商確認實際行李尺寸及數量。",
    "defaultDone": false,
    "legacyIndex": 1
  },
  {
    "id": "airport-return",
    "group": "最優先",
    "title": "安排 11/06 飯店→機場交通",
    "note": "現有接機不是往返，回程尚未有確認憑證。",
    "defaultDone": false,
    "legacyIndex": 2
  },
  {
    "id": "bus-payment",
    "group": "最優先",
    "title": "核對小豆島巴士付款與包含項目",
    "note": "¥29,400 付款待確認；餐食、門票、纜車是否包含請查訂單。",
    "defaultDone": false,
    "legacyIndex": 3
  },
  {
    "id": "jr-pickup",
    "group": "最優先",
    "title": "確認 JR 紙票領取方式與期限",
    "note": "在私人 NAVITIME 頁查看領票 QR Code；勿只帶郵件就當作已可乘車。",
    "defaultDone": false
  },
  {
    "id": "kotoden-return",
    "group": "最優先",
    "title": "再查 11/05 琴電回程時刻與購票方式",
    "note": "琴電回高松未購票，下午依體力選班次；核對車站、下車站與飯店交通。",
    "defaultDone": false
  },
  {
    "id": "museum-terms",
    "group": "出發前",
    "title": "確認兩種美術館票券的時段與適用條件",
    "note": "優先安排已購票館舍；截圖未顯示入場時段，請查原始憑證。",
    "defaultDone": false
  },
  {
    "id": "offline-tickets",
    "group": "出發前",
    "title": "私人保存機票、JR、美術館與各項預約憑證",
    "note": "票券與 QR Code 不放進公開網站；確認手機離線仍可開啟。",
    "defaultDone": false
  },
  {
    "id": "bike-return",
    "group": "出發前",
    "title": "確認自行車還車期限與巴士備案",
    "note": "依長輩體力調整；最晚還車時間由店家確認。",
    "defaultDone": false,
    "legacyIndex": 6
  },
  {
    "id": "shrine-shuttle",
    "group": "出發前",
    "title": "確認琴平登山接駁營運與叫車方式",
    "note": "未預約；費用及集合點待確認，接駁後仍有階梯。",
    "defaultDone": false
  },
  {
    "id": "breakfast",
    "group": "出發前",
    "title": "問飯店早餐開始時間，備好搭船日輕食",
    "note": "11/03、11/04 早班船可能來不及吃飯店早餐。",
    "defaultDone": false
  },
  {
    "id": "documents",
    "group": "出發前",
    "title": "準備護照、入境資料與旅遊保險",
    "note": "尚未收到準備完成的確認，不自動勾選。",
    "defaultDone": false
  },
  {
    "id": "packing",
    "group": "出發前",
    "title": "準備常備藥、行動電源、網路、外套及雨具",
    "note": "多層穿搭、防風外層、止滑好走的鞋；依實際天氣微調。",
    "defaultDone": false,
    "legacyIndex": 9
  },
  {
    "id": "offline-test",
    "group": "出發前",
    "title": "開啟旅遊手冊並測試飛航模式",
    "note": "離線可閱讀；地圖、最新天氣與運航仍需網路。",
    "defaultDone": false,
    "legacyIndex": 10
  },
  {
    "id": "weather-sailing",
    "group": "前晚與當天",
    "title": "再查天氣、風浪及兩天渡輪運航",
    "note": "先前船表查核不代表當天一定開航；11/03 為文化日，提早候船。",
    "defaultDone": false
  },
  {
    "id": "bike-pay",
    "group": "前晚與當天",
    "title": "11/03 OUGIYA 現場付款並檢查車況",
    "note": "已預約不等於已付款；煞車、電量、停車規定取車時確認。",
    "defaultDone": false
  },
  {
    "id": "checkin",
    "group": "前晚與當天",
    "title": "辦理航班報到並再查行李額度與機場交通",
    "note": "依航空公司及個人機票規定；11/06 務必重新確認報到期限。",
    "defaultDone": false
  },
  {
    "id": "cancel-wasen-d1",
    "group": "最優先",
    "title": "D1 到栗林公園詢問取消11/05 和船預約",
    "note": "尚未取消。預約通知要求電話取消，現場能否代辦須詢問；若不能受理，致電 087-833-7413，日本時間 08:30–17:00。",
    "defaultDone": false
  }
];
export const departureReminders=[
  {
    "title": "11/02 抵達與晚餐",
    "text": "接機行李容量待確認。寄放行李及午餐後，約 15:00–16:15 栗林公園散步並詢問和船取消。回飯店休息後搭車至圓頂廣場，丸龜町短逛可略過；18:30 燒肉晚餐已確認。"
  },
  {
    "title": "11/03 文化日・直島",
    "text": "早起前先備輕食；依官方運航提早候船。兩組美術館已購票，但時段請查憑證；自行車 09:30 取車、現場付款。"
  },
  {
    "title": "11/04 小豆島",
    "text": "觀光巴士已預約，付款未確認；09:30–10:10 報到，順序與包含項目依旅行社。"
  },
  {
    "title": "11/05 悠閒琴平",
    "text": "JR 去程 08:25–09:00 已預訂。慢慢參拜、午餐、散步與休息；回程琴電未購票，依體力選班次。和船取消仍待辦理，詳見預約與待辦清單。"
  },
  {
    "title": "11/06 返程",
    "text": "行李前晚收好，早餐後約 08:00–08:45 玉藻公園西門短逛，09:00–09:15 回飯店拿行李退房為目標。機場交通尚待安排，若需提早出發則略過散步；不加排 Sunport。"
  }
];
export function initialChecklist(legacy={}){return Object.fromEntries(preparationTasks.map(t=>[t.id,t.defaultDone||(t.legacyIndex!==undefined&&legacy[t.legacyIndex]===true)]))}
