import {preparationTasks} from './preparation.js';
export const links={
  "air": "https://www.starlux-airlines.com/",
  "hotel": "https://www.takamatsu-century.com/",
  "ferry": "https://shikokukisen.com/takamatsu-miyanoura/",
  "shodo": "https://www.shikokuferry.com/route2",
  "konpira": "https://www.konpira.or.jp/",
  "kotobus": "https://www.kotobus.com/climbing/tw/",
  "kotoden": "https://www.kotoden.co.jp/",
  "jr": "https://www.jr-shikoku.co.jp/",
  "airport": "https://www.takamatsu-airport.com/",
  "ougi": "https://ougiya-naoshima.jp/",
  "bus": "https://shodoshima-kotu.com/tw/plan/shuttlebus/",
  "tamamo": "https://www.takamatsujyo.com/",
  "alley": "https://www.kitahama-alley.jp/",
  "museum": "https://www.city.takamatsu.kagawa.jp/museum/takamatsu/"
};
export const dinner={
  "id": "dinner",
  "title": "大衆焼肉しんすけ トキワ新町店",
  "place": "大衆焼肉しんすけ トキワ新町店 香川県高松市瓦町1丁目10-16",
  "date": "2026/11/02",
  "time": "18:30",
  "guests": 3,
  "status": "已確認",
  "url": "https://shinsuke-yakiniku.com/access/"
};
export const wasen={
  "id": "wasen",
  "date": "2026/11/05",
  "time": "15:30",
  "deadline": "15:00",
  "guests": 3,
  "amount": 2550,
  "place": "栗林公園 南湖 和船乗り場",
  "url": "https://www.my-kagawa.jp/ritsuringarden/feature/ritsuringarden/wasen"
};
export const outboundJR={
  "id": "jr-outbound",
  "date": "2026/11/05",
  "train": "SHIMANTO 3／しまんと3号",
  "departure": "08:25",
  "arrival": "09:00",
  "guests": 3,
  "amount": 12607
};
export const museumTickets=[
  {
    "id": "nnmoa",
    "title": "直島新美術館",
    "jp": "直島新美術館",
    "date": "2026/11/03",
    "quantity": 3,
    "unitPrice": 1500,
    "url": "https://benesse-artsite.jp/art/nnmoa.html"
  },
  {
    "id": "benesse",
    "title": "Benesse House Museum／Valley Gallery",
    "jp": "ベネッセハウス ミュージアム",
    "date": "2026/11/03",
    "quantity": 3,
    "unitPrice": 1300,
    "url": "https://benesse-artsite.jp/art/benessehouse-museum.html"
  }
];
export const knownExpenses=[
  {
    "id": "jr-outbound",
    "title": "JR 去程 SHIMANTO 3 · 成人 3 人",
    "amount": 12607,
    "status": "已預訂・憑證支付金額"
  },
  {
    "id": "bus",
    "title": "小豆島觀光巴士 · 3 人",
    "amount": 29400,
    "status": "付款待確認"
  },
  {
    "id": "nnmoa",
    "title": "直島新美術館 · 成人 3 張",
    "amount": 4500,
    "status": "已購票"
  },
  {
    "id": "benesse",
    "title": "Benesse House Museum／Valley Gallery · 成人 3 張",
    "amount": 3900,
    "status": "已購票"
  }
];
export const hotel="高松センチュリーホテル 香川県高松市錦町1丁目4-19";
export const days=[
  {
    "id": 1,
    "date": "11/02",
    "weekday": "一",
    "title": "初見高松",
    "subtitle": "高松・栗林公園",
    "scene": "city",
    "intro": "抵達後寄放行李、午餐與栗林公園散步；回飯店入住休息後，挑壹番街圓頂廣場與丸龜町短段逛逛，18:30 赴燒肉晚餐。",
    "alert": "下午時間為規劃；若入境延誤或爸爸疲累，先縮短商店街，休息與 18:30 晚餐優先。景點間可搭計程車，步行分成短段，不必走完整條商店街。",
    "items": [
      {
        "id": "1a",
        "time": "08:50–12:20",
        "title": "飛往高松",
        "jp": "高松空港",
        "description": "星宇航空 JX300｜台中 → 高松。時間依您提供的訂單，仍須以航空公司通知為準。",
        "duration": "航程 2 小時 30 分",
        "transport": "飛機",
        "note": "台灣與日本時差 1 小時；本手冊皆為所在地時間。",
        "scene": "sea",
        "official": "https://www.starlux-airlines.com/"
      },
      {
        "id": "1b",
        "time": "12:20–13:30",
        "title": "入境與接機會合",
        "jp": "高松空港 国際線到着ロビー",
        "description": "入境、領取行李，依 Klook 憑證指示與司機會合。",
        "duration": "預留 70 分",
        "transport": "Klook 接機",
        "note": "確切集合位置以憑證與司機通知為準；Toyota Altis 或同級，確認三人行李。",
        "scene": "sea",
        "official": "https://www.takamatsu-airport.com/"
      },
      {
        "id": "1c",
        "time": "下午・預估",
        "title": "飯店寄放行李",
        "jp": "高松センチュリーホテル 香川県高松市錦町1丁目4-19",
        "description": "高松世紀飯店｜四晚三人房，含早餐。",
        "duration": "約 30 分",
        "transport": "接機車輛",
        "note": "入住 16:00 後；可先詢問寄放行李。",
        "scene": "city",
        "official": "https://www.takamatsu-century.com/"
      },
      {
        "id": "1-lunch",
        "time": "寄放行李後・彈性",
        "title": "午餐與休息",
        "jp": "JR高松駅",
        "description": "先吃午餐、補充水分，再依入境進度前往栗林公園。",
        "duration": "約 30–60 分，可調整",
        "transport": "步行／計程車",
        "note": "若班機或入境延誤，縮短或略過公園；不壓縮休息來趕行程。",
        "scene": "city"
      },
      {
        "id": "1d",
        "time": "約 15:00–16:15・規劃",
        "title": "栗林公園・庭園散步",
        "jp": "栗林公園",
        "description": "依體力欣賞庭園與湖景，慢慢散步、坐下休息；本次僅安排入園散步。",
        "duration": "約 1 小時，可縮短",
        "transport": "計程車／公車＋園內步行",
        "note": "11 月開園 06:30–17:00。入園及交通依當日情況；若入境延誤，縮短參觀並保留休息。",
        "scene": "city",
        "official": "https://ritsuringarden.com/ritsurin/"
      },
      {
        "id": "1-cancel-wasen",
        "time": "D1 到園時・待辦",
        "title": "詢問取消 11/05 和船預約",
        "jp": "栗林公園 南湖 和船乗り場",
        "description": "到園時向和船售票處或服務櫃台出示私人預約通知，詢問取消 11/05 15:30、成人 3 人的預約。",
        "duration": "依櫃台處理時間",
        "transport": "園內步行",
        "note": "取消尚未辦妥。通知要求電話取消；現場能否代辦須詢問，若無法受理，致電事務所 087-833-7413（日本時間 08:30–17:00）。",
        "scene": "city",
        "official": "https://www.my-kagawa.jp/ritsuringarden/feature/ritsuringarden/wasen"
      },
      {
        "id": "1e",
        "time": "約 16:15–17:00・規劃",
        "title": "回飯店入住與休息",
        "jp": "高松センチュリーホテル 香川県高松市錦町1丁目4-19",
        "description": "回飯店辦理入住，讓爸爸坐下休息；出門搭計程車至壹番街圓頂廣場附近，從商店街北端向瓦町方向移動。",
        "duration": "約 30–45 分，視移動調整",
        "transport": "計程車／公車＋步行",
        "note": "入住 16:00 後。若休息需要更久，直接從飯店搭計程車去餐廳；商店街不是必去行程。",
        "scene": "city",
        "official": "https://www.takamatsu-century.com/"
      },
      {
        "id": "1-dome",
        "time": "約 17:10–17:25・彈性",
        "title": "壹番街圓頂廣場・短暫拍照",
        "jp": "高松丸亀町壱番街前ドーム広場",
        "description": "計程車抵達丸龜町北端，看看玻璃圓頂與街景。附近高松三越、和菓子店可視興趣擇一，不必逐間逛。",
        "duration": "約 10–15 分，可略過",
        "transport": "飯店出發搭計程車＋短段步行",
        "note": "沿丸龜町往南走向瓦町晚餐區，不加排兵庫町、片原町或獅子通支線；店家當日營業與臨休須現場確認。",
        "scene": "city",
        "official": "https://kame3.jp/"
      },
      {
        "id": "1-shopping",
        "time": "約 17:25–17:50・彈性",
        "title": "丸龜町商店街・買一點、坐一下",
        "jp": "高松丸亀町商店街",
        "description": "只逛一小段：伴手禮和菓子、生活雜貨、藥妝或咖啡甜點選一兩項即可。想坐下就以咖啡休息取代購物，不需走到商店街盡頭。",
        "duration": "最多約 25 分，含休息",
        "transport": "短段步行；前往餐廳可搭計程車",
        "note": "17:50 左右結束散步，預留至少約 30 分鐘前往瓦町餐廳與找入口，18:30 用餐已確認。步行單段以約 10–15 分鐘為舒適目標，累了直接搭車。",
        "scene": "city",
        "official": "https://kame3.jp/shoplist/"
      },
      {
        "id": "1-dinner",
        "time": "18:30・已確認",
        "title": "しんすけ トキワ新町店・燒肉晚餐",
        "jp": "大衆焼肉しんすけ トキワ新町店 香川県高松市瓦町1丁目10-16",
        "description": "11/02 18:30，3 位成人。依旅客確認及預約憑證，第一晚到大衆焼肉しんすけ トキワ新町店用餐。",
        "duration": "用餐長度未提供",
        "transport": "步行／計程車",
        "note": "地址：香川県高松市瓦町1丁目10-16。請預留交通並提早抵店；菜單、餐費與付款細節未提供。私人訂位憑證自行保管。",
        "scene": "city",
        "official": "https://shinsuke-yakiniku.com/access/"
      },
      {
        "id": "1g",
        "time": "晚餐後・彈性",
        "title": "回飯店休息",
        "jp": "高松センチュリーホテル 香川県高松市錦町1丁目4-19",
        "description": "晚餐後返回飯店休息，為明天的直島早起留一點餘裕。",
        "duration": "彈性",
        "transport": "步行／計程車",
        "note": "早餐供應時間請向櫃台確認。",
        "scene": "city",
        "official": "https://www.takamatsu-century.com/"
      }
    ]
  },
  {
    "id": 2,
    "date": "11/03",
    "weekday": "二",
    "title": "在島上，遇見藝術",
    "subtitle": "直島藝術巡禮",
    "scene": "art",
    "intro": "路線：宮浦紅南瓜 → 本村／直島新美術館 → 午餐 → Benesse House Museum／Valley Gallery → 黃南瓜（視體力）→ 宮浦還車。參觀時段為規劃，依票券條件調整。",
    "alert": "日本文化日假期。直島新美術館與 Benesse House Museum／Valley Gallery 各 3 張已購票（11/03），入場時段截圖未顯示，待確認。以下以兩組已購票館舍為主，其餘景點依時間與體力取捨。",
    "items": [
      {
        "id": "2a",
        "time": "06:40",
        "title": "飯店出發・高松港",
        "jp": "高松港 四国汽船 フェリー乗り場",
        "description": "提前到港購票，確認直島宮浦航線的候船處。",
        "duration": "預留至登船",
        "transport": "步行／計程車",
        "note": "建議至少開船前 30 分鐘抵達，假日再提早；06:40 為行程規劃。",
        "scene": "sea",
        "official": "https://shikokukisen.com/takamatsu-miyanoura/"
      },
      {
        "id": "2b",
        "time": "08:12–09:02",
        "title": "渡輪前往直島",
        "jp": "直島 宮浦港",
        "description": "高松港 → 宮浦港；讓瀨戶內海慢慢展開。",
        "duration": "約 50 分",
        "transport": "渡輪",
        "note": "現行官方船表相符（2026/10/17 查核）；當日運航再確認，未視為訂票。",
        "scene": "sea",
        "official": "https://shikokukisen.com/takamatsu-miyanoura/"
      },
      {
        "id": "2c",
        "time": "09:30",
        "title": "OUGIYA 電動自行車",
        "jp": "おうぎや レンタサイクル 直島",
        "description": "預約三台電動自行車，現場付款。",
        "duration": "取車約 30 分",
        "transport": "電動自行車",
        "note": "檢查煞車、電量與還車時間；不舒服就改搭車。",
        "scene": "art",
        "official": "https://ougiya-naoshima.jp/"
      },
      {
        "id": "2d",
        "time": "上午・彈性",
        "title": "紅南瓜與本村聚落",
        "jp": "赤かぼちゃ 直島 宮浦港",
        "description": "先看港邊藝術，再沿路前往本村散步。",
        "duration": "依體力安排",
        "transport": "自行車／町營巴士",
        "note": "本村藝術聚落另有導航；家計畫入場票與開館日待確認。",
        "scene": "art",
        "official": "https://www.benesse-artsite.jp/"
      },
      {
        "id": "2-new",
        "time": "上午・規劃待安排",
        "title": "直島新美術館・已購票",
        "jp": "直島新美術館",
        "description": "11/03 成人票 3 張，每張 ¥1,500，小計 ¥4,500。建議與本村散步一併規劃，順序待確認。",
        "duration": "待安排",
        "transport": "自行車／町營巴士＋步行",
        "note": "截圖未顯示入場時段，請查原始票券；QR Code 留在私人憑證中，不上傳公開網站。",
        "scene": "art",
        "official": "https://benesse-artsite.jp/art/nnmoa.html"
      },
      {
        "id": "2e",
        "time": "中午・彈性",
        "title": "本村午餐",
        "jp": "直島 本村",
        "description": "找一間小店坐下，補充水分與體力。",
        "duration": "約 1 小時",
        "transport": "步行",
        "note": "餐廳尚未預約，假日可能候位。",
        "scene": "city"
      },
      {
        "id": "2-benesse",
        "time": "下午・規劃待安排",
        "title": "Benesse House Museum／Valley Gallery・已購票",
        "jp": "ベネッセハウス ミュージアム",
        "description": "11/03 成人票 3 張，每張 ¥1,300，小計 ¥3,900。此票種名稱包含 Museum／Valley Gallery；兩處另有導航。",
        "duration": "待安排，含兩處移動",
        "transport": "步行／園區接駁",
        "note": "截圖未顯示入場時段，請查票券適用條件；參觀先後、接駁及還車時間需一起確認。",
        "scene": "art",
        "official": "https://benesse-artsite.jp/art/benessehouse-museum.html"
      },
      {
        "id": "2g",
        "time": "彈性備選",
        "title": "李禹煥美術館與黃南瓜",
        "jp": "李禹煥美術館 直島",
        "description": "依體力選擇參觀，再到海邊與黃南瓜相遇。",
        "duration": "約 1–1.5 小時，視取捨",
        "transport": "步行／園區接駁",
        "note": "李禹煥美術館未有購票確認；黃南瓜另有導航，依時間取捨。園區自行車限制、接駁請看官方。",
        "scene": "art",
        "official": "https://www.benesse-artsite.jp/"
      },
      {
        "id": "2h",
        "time": "約 16:00",
        "title": "歸還自行車",
        "jp": "おうぎや レンタサイクル 直島",
        "description": "回宮浦還車、休息並準備回程。",
        "duration": "約 30 分",
        "transport": "自行車",
        "note": "實際最晚還車時間以店家通知為準。",
        "scene": "sea",
        "official": "https://ougiya-naoshima.jp/"
      },
      {
        "id": "2i",
        "time": "17:00–18:00",
        "title": "回到高松港",
        "jp": "宮浦港 フェリー乗り場",
        "description": "宮浦港 → 高松港。",
        "duration": "約 1 小時",
        "transport": "渡輪",
        "note": "現行官方船表相符；建議 16:30 前抵港，當日運航需再確認。",
        "scene": "sea",
        "official": "https://shikokukisen.com/takamatsu-miyanoura/"
      }
    ]
  },
  {
    "id": 3,
    "date": "11/04",
    "weekday": "三",
    "title": "小豆島的秋日風景",
    "subtitle": "小豆島觀光",
    "scene": "olive",
    "intro": "搭上觀光巴士，把移動交給司機，好好看風景。",
    "alert": "觀光巴士付款狀態待確認；景點順序與停留時間以旅行社安排為準。",
    "items": [
      {
        "id": "3a",
        "time": "08:02–09:02",
        "title": "渡輪前往土庄港",
        "jp": "高松港 小豆島フェリー 土庄行き",
        "description": "高松港 → 小豆島土庄港。",
        "duration": "約 60 分",
        "transport": "渡輪",
        "note": "建議 07:30 前抵達；官網現行船表相符，仍須查當日運航。",
        "scene": "sea",
        "official": "https://www.shikokuferry.com/route2"
      },
      {
        "id": "3b",
        "time": "09:30–10:10",
        "title": "觀光巴士報到",
        "jp": "土庄港観光センター",
        "description": "備好憑證，三位成人一起報到。",
        "duration": "報到窗口 40 分",
        "transport": "步行",
        "note": "10:15 發車；付款狀態待確認，集合位置以憑證為準。",
        "scene": "olive",
        "official": "https://shodoshima-kotu.com/tw/plan/shuttlebus/"
      },
      {
        "id": "3c",
        "time": "10:15–16:15",
        "title": "小豆島觀光巴士",
        "jp": "寒霞渓 ロープウェイ 紅雲亭駅",
        "description": "寒霞溪、橄欖公園、二十四瞳電影村，悠閒走訪島上風景。",
        "duration": "約 6 小時",
        "transport": "觀光巴士",
        "note": "順序非固定；各景點另有下方導航。餐食、纜車及門票是否包含須查憑證。",
        "scene": "olive",
        "official": "https://shodoshima-kotu.com/tw/plan/shuttlebus/"
      },
      {
        "id": "3d",
        "time": "16:15 後・彈性",
        "title": "土庄港休息候船",
        "jp": "土庄港 フェリーターミナル",
        "description": "留一點緩衝時間，坐下喝水、整理伴手禮。",
        "duration": "約 1 小時",
        "transport": "步行",
        "note": "若巴士延誤，先查下一班船，避免趕路。",
        "scene": "sea",
        "official": "https://www.shikokuferry.com/route2"
      },
      {
        "id": "3e",
        "time": "17:30–18:30",
        "title": "渡輪回高松",
        "jp": "土庄港 高松行き フェリー乗り場",
        "description": "土庄港 → 高松港。",
        "duration": "約 60 分",
        "transport": "渡輪",
        "note": "建議 17:00 前到港；現行官方船表相符，當天再查運航。",
        "scene": "sea",
        "official": "https://www.shikokuferry.com/route2"
      }
    ]
  },
  {
    "id": 4,
    "date": "11/05",
    "weekday": "四",
    "title": "慢慢走，琴平的秋日",
    "subtitle": "金刀比羅宮・琴平慢遊",
    "scene": "city",
    "intro": "JR 08:25–09:00 已預訂。今天只留琴平：慢慢參拜、午餐、參道散步與咖啡休息，回程依體力選琴電，依體力休息與返程。",
    "alert": "保留全天餘裕，不以登頂或走完 785 階為目標。大門至御本宮仍約有 420 階；可休息、折返或搭接駁。回程琴電未購票，班次當天再查。和船預約待 D1 辦理取消，不能視為已取消。",
    "items": [
      {
        "id": "4-breakfast",
        "time": "07:00–07:45・規劃",
        "title": "飯店早餐",
        "jp": "高松センチュリーホテル 香川県高松市錦町1丁目4-19",
        "description": "悠閒吃早餐，再準備今天的琴平散步。",
        "duration": "約 1 小時",
        "transport": "飯店內",
        "note": "早餐實際供應時間請向飯店確認。",
        "scene": "city",
        "official": "https://www.takamatsu-century.com/"
      },
      {
        "id": "4-outbound",
        "time": "08:25–09:00・已預訂",
        "title": "JR 特急しまんと3号・高松 → 琴平",
        "jp": "琴平駅",
        "description": "SHIMANTO 3／しまんと3号，指定席，成人 3 人。憑證支付金額 ¥12,607，僅記為此筆訂單金額，不推算一般票價。",
        "duration": "車程 35 分",
        "transport": "JR 特急・指定席",
        "note": "建議 08:00 前抵 JR 高松站，預留取票與找月台時間；取票 QR Code、條件及期限請查私人 NAVITIME 憑證。此訂單只有去程，回程未訂到。",
        "scene": "city",
        "official": "https://www.jr-shikoku.co.jp/"
      },
      {
        "id": "4-shuttle",
        "time": "約 09:15–09:45・規劃",
        "title": "琴平抵達與接駁評估",
        "jp": "金刀比羅宮 大門",
        "description": "依長輩體力考慮登山接駁車至大門附近；不搭車則慢走，隨時調整。",
        "duration": "預留約 30 分，依實際交通調整",
        "transport": "登山接駁待確認／步行",
        "note": "未預約接駁；價格、當日營運、叫車方式及上下車位置皆待確認，並非保證可搭。",
        "scene": "city",
        "official": "https://www.kotobus.com/climbing/tw/"
      },
      {
        "id": "4-shrine",
        "time": "約 09:45 起・依體力",
        "title": "金刀比羅宮・慢步參拜",
        "jp": "金刀比羅宮",
        "description": "秋季參拜，沿途慢走、休息，以家人體力決定走到哪裡。",
        "duration": "慢走並保留上下山與休息，不硬性卡結束時間",
        "transport": "步行・階梯",
        "note": "不以完成 785 階為目標。文件提醒大門至御本宮仍約 420 階；接駁不代表免爬階梯。11 月初紅葉可能尚未盛開。",
        "scene": "city",
        "official": "https://www.konpira.or.jp/"
      },
      {
        "id": "4-lunch",
        "time": "約 12:00–13:00・彈性",
        "title": "琴平表參道・烏龍麵午餐",
        "jp": "金刀比羅宮 表参道",
        "description": "在表參道或老街找一間讚岐烏龍麵店，坐下慢慢休息。",
        "duration": "約 1 小時",
        "transport": "步行",
        "note": "餐廳未指定、未預約；候位及營業時間依當日店家為準。",
        "scene": "city"
      },
      {
        "id": "4-oldtown",
        "time": "午餐後・彈性",
        "title": "琴平參道・散步與咖啡休息",
        "jp": "金刀比羅宮 表参道",
        "description": "以散步、找座位休息為主，不必大量購物；可依體力多坐一會兒或提早返回高松。",
        "duration": "約 1–2 小時，可自由縮短或延長",
        "transport": "步行",
        "note": "依體力自由調整，可提早回高松休息。",
        "scene": "city"
      },
      {
        "id": "4-return",
        "time": "下午・依體力選班次",
        "title": "琴電返回高松",
        "jp": "琴電琴平駅",
        "description": "JR 回程未訂到，改以琴電琴平站往瓦町或高松築港方向為備案；依飯店交通選下車站，未購票。",
        "duration": "依實際候車、班次與下車站",
        "transport": "琴電＋步行／計程車",
        "note": "依體力選擇下午回程班次，保留候車與休息時間。JR 琴平站與琴電琴平站不同，出發前核對運航。",
        "scene": "city",
        "official": "https://www.kotoden.co.jp/"
      },
      {
        "id": "4-rest",
        "time": "返回高松後・彈性",
        "title": "回飯店休息",
        "jp": "高松センチュリーホテル 香川県高松市錦町1丁目4-19",
        "description": "回高松後先回飯店休息，晚餐與整理行李依體力安排。",
        "duration": "彈性",
        "transport": "步行／計程車",
        "note": "長輩若累了，直接留在飯店休息即可。",
        "scene": "city",
        "official": "https://www.takamatsu-century.com/"
      },
      {
        "id": "4-evening",
        "time": "17:30 後・彈性",
        "title": "最後一晚・晚餐與整理行李",
        "jp": "高松丸亀町商店街",
        "description": "晚餐、伴手禮採買，回飯店整理行李。",
        "duration": "彈性",
        "transport": "步行",
        "note": "確認隔日前往機場的交通與行李容量。",
        "scene": "city"
      }
    ]
  },
  {
    "id": 5,
    "date": "11/06",
    "weekday": "五",
    "title": "把瀨戶內帶回日常",
    "subtitle": "高松返程",
    "scene": "sea",
    "intro": "行李前晚收好，早餐後短逛玉藻公園，回飯店拿行李退房，再安心前往機場。",
    "alert": "回程接送尚未預訂，先確認交通再固定散步時間。玉藻公園僅短逛，遇下雨、疲累或接送提早則略過；10:00 前退房，機場交通與航空公司要求優先。",
    "items": [
      {
        "id": "5a",
        "time": "出門前・規劃",
        "title": "早餐與最後行李檢查",
        "jp": "高松センチュリーホテル 香川県高松市錦町1丁目4-19",
        "description": "前一晚先整理行李；吃早餐後，把寄存與退房安排向櫃台確認。",
        "duration": "配合飯店早餐時間",
        "transport": "飯店內",
        "note": "不把整理行李留到散步回來；早餐時間仍需飯店確認。",
        "scene": "city",
        "official": "https://www.takamatsu-century.com/"
      },
      {
        "id": "5-tamamo",
        "time": "約 08:00–08:45・可略過",
        "title": "玉藻公園・高松城跡晨間散步",
        "jp": "玉藻公園 西門",
        "description": "從西門進出短逛護城河與城跡，只安排公園短逛，機場交通優先。",
        "duration": "約 45 分，可縮短",
        "transport": "步行／依體力計程車",
        "note": "11 月西門 06:30、東門 08:30 開門。09:00–09:15 回到飯店為規劃目標，若交通安排需提早或天候不佳就略過。",
        "scene": "city",
        "official": "https://www.city.takamatsu.kagawa.jp/kurashi/kurashi/shisetsu/park/tamamo/bunzai2018060.html"
      },
      {
        "id": "5b",
        "time": "約 09:00–09:30・10:00 前",
        "title": "拿行李與飯店退房",
        "jp": "高松センチュリーホテル 香川県高松市錦町1丁目4-19",
        "description": "確認隨身物品、證件及行李都已備齊。",
        "duration": "約 15 分",
        "transport": "步行",
        "note": "建議配合接送時間提早完成。",
        "scene": "city",
        "official": "https://www.takamatsu-century.com/"
      },
      {
        "id": "5c",
        "time": "約 09:45–10:00 出發",
        "title": "前往高松機場",
        "jp": "高松空港 国際線出発ロビー",
        "description": "預計從市區出發，實際依預訂接送或機場巴士調整。",
        "duration": "車程依交通狀況",
        "transport": "接送待訂／機場巴士備案",
        "note": "回程尚未預訂；請以航空公司報到期限倒推時間。",
        "scene": "sea",
        "official": "https://www.takamatsu-airport.com/"
      },
      {
        "id": "5d",
        "time": "13:20–15:40",
        "title": "高松 → 台中",
        "jp": "臺中國際機場",
        "description": "星宇航空 JX301。五天四夜，謝謝彼此的陪伴。",
        "duration": "航程 3 小時 20 分",
        "transport": "飛機",
        "note": "時間依您提供訂單；以航空公司最新通知為準。",
        "scene": "sea",
        "official": "https://www.starlux-airlines.com/"
      }
    ]
  }
];
export const places=[
  [
    "壹番街圓頂廣場",
    "高松丸亀町壱番街前ドーム広場"
  ],
  [
    "丸龜町商店街",
    "高松丸亀町商店街"
  ],
  [
    "栗林公園",
    "栗林公園"
  ],
  [
    "和船取消詢問處",
    "栗林公園 南湖 和船乗り場"
  ],
  [
    "玉藻公園西門",
    "玉藻公園 西門"
  ],
  [
    "琴電栗林公園站",
    "栗林公園駅"
  ],
  [
    "第一晚燒肉・しんすけ",
    "大衆焼肉しんすけ トキワ新町店 香川県高松市瓦町1丁目10-16"
  ],
  [
    "直島新美術館",
    "直島新美術館"
  ],
  [
    "Benesse House Museum",
    "ベネッセハウス ミュージアム"
  ],
  [
    "Valley Gallery",
    "ベネッセハウス ヴァレーギャラリー"
  ],
  [
    "高松三越",
    "高松三越"
  ],
  [
    "本村藝術聚落",
    "直島 家プロジェクト 本村"
  ],
  [
    "直島黃南瓜",
    "南瓜 草間彌生 直島 ベネッセ"
  ],
  [
    "小豆島橄欖公園",
    "道の駅 小豆島オリーブ公園"
  ],
  [
    "二十四瞳電影村",
    "二十四の瞳映画村"
  ],
  [
    "金刀比羅宮",
    "金刀比羅宮"
  ],
  [
    "琴平表參道",
    "金刀比羅宮 表参道"
  ],
  [
    "JR 琴平站",
    "琴平駅"
  ],
  [
    "琴電琴平站",
    "琴電琴平駅"
  ],
  [
    "琴電高松築港站",
    "高松築港駅"
  ],
  [
    "飯店",
    "高松センチュリーホテル 香川県高松市錦町1丁目4-19"
  ]
];
export const reservations=[
  {
    "id": "jr-outbound",
    "title": "JR 特急しまんと3号・單程指定席",
    "status": "已預訂・11/05 08:25",
    "text": "11/05 高松 08:25 → 琴平 09:00｜SHIMANTO 3，指定席，成人 3 位。憑證支付金額 ¥12,607，付款方式 Credit card。請依私人 NAVITIME 確認頁查看紙票取票 QR Code 與領票條件。回程未訂到，琴電備案未購票。",
    "url": "https://www.jr-shikoku.co.jp/",
    "place": "JR高松駅"
  },
  {
    "id": "wasen",
    "title": "栗林公園南湖和船・第 27 便",
    "status": "取消待辦・尚未取消",
    "text": "11/05 15:30 南湖第 27 便，成人 3 人，票面 ¥2,550，當日現場付款；目前取消尚未辦妥。預計 D1 到園詢問取消受理；通知要求電話取消，若現場無法協助，請致電 087-833-7413（日本時間 08:30–17:00）。不能直接改期，須先取消後另訂。此項不列為參加活動及預計支出。",
    "url": "https://www.my-kagawa.jp/ritsuringarden/feature/ritsuringarden/wasen",
    "place": "栗林公園 南湖 和船乗り場"
  },
  {
    "id": "dinner",
    "title": "大衆焼肉しんすけ トキワ新町店",
    "status": "已確認・11/02 18:30",
    "text": "11/02（一）18:30｜3 位成人。地址：香川県高松市瓦町1丁目10-16。依旅客確認及提供憑證整理；餐費、套餐與付款細節未提供，費用頁不自行估列。取消與退款條件請查原始憑證及店家規定。",
    "url": "https://shinsuke-yakiniku.com/access/",
    "place": "大衆焼肉しんすけ トキワ新町店 香川県高松市瓦町1丁目10-16"
  },
  {
    "id": "nnmoa",
    "title": "直島新美術館",
    "status": "已購票・11/03",
    "text": "2026/11/03｜成人 3 張 × ¥1,500 = ¥4,500。依旅客提供的購票截圖確認；入場時段截圖未顯示，請查原始票券。票券 QR Code 請保存在私人裝置。",
    "url": "https://benesse-artsite.jp/art/nnmoa.html",
    "place": "直島新美術館"
  },
  {
    "id": "benesse",
    "title": "Benesse House Museum／Valley Gallery",
    "status": "已購票・11/03",
    "text": "2026/11/03｜成人 3 張 × ¥1,300 = ¥3,900。依旅客提供的購票截圖確認；入場時段截圖未顯示，請查原始票券。票券 QR Code 請保存在私人裝置。",
    "url": "https://benesse-artsite.jp/art/benessehouse-museum.html",
    "place": "ベネッセハウス ミュージアム"
  },
  {
    "id": "air",
    "title": "星宇航空・來回機票",
    "status": "依提供訂單",
    "text": "3 位成人｜11/02 JX300 08:50–12:20；11/06 JX301 13:20–15:40。時間為各地當地時間。",
    "url": "https://www.starlux-airlines.com/"
  },
  {
    "id": "hotel",
    "title": "高松世紀飯店・四晚",
    "status": "依提供訂單",
    "text": "11/02 16:00 後入住，11/06 10:00 前退房。三人房含早餐。1-4-19 Nishikimachi, Takamatsu, Kagawa。",
    "url": "https://www.takamatsu-century.com/",
    "place": "高松センチュリーホテル 香川県高松市錦町1丁目4-19"
  },
  {
    "id": "pickup",
    "title": "Klook・抵達接機",
    "status": "行李容量待確認",
    "text": "11/02 高松機場 → 飯店。3 人，Toyota Altis 或同級；須確認行李能否放下及實際集合點。",
    "url": "https://www.klook.com/zh-TW/"
  },
  {
    "id": "bike",
    "title": "OUGIYA・電動自行車",
    "status": "現場付款",
    "text": "11/03 09:30，3 台。約 16:00 還車為行程規劃，最晚還車依店家確認。",
    "url": "https://ougiya-naoshima.jp/",
    "place": "おうぎや レンタサイクル 直島"
  },
  {
    "id": "bus",
    "title": "小豆島・觀光巴士",
    "status": "付款待確認",
    "text": "11/04 10:15–16:15，3 人共 ¥29,400。09:30–10:10 土庄港觀光中心報到；景點順序以旅行社為準。",
    "url": "https://shodoshima-kotu.com/tw/plan/shuttlebus/",
    "place": "土庄港観光センター"
  }
];
export const mapUrl=q=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
export const todos=preparationTasks.filter(t=>!t.defaultDone).map(t=>t.title);
