// 每筆索引綁定當天文章中的停留點，避免景點頁與實際路線脫節。
// confirmed＝使用者／消費紀錄確認；record＝行程紀錄；ticket＝已購票；optional＝未確認到訪。
const benesse='https://benesse-artsite.jp/';
export const visitPoints=[
 {id:'ritsurin',day:1,stop:'栗林公園與南湖和船',name:'栗林公園',jp:'栗林公園',kind:'景點',status:'confirmed',description:'第一天下午實際走訪的庭園。把園內散步與南湖和船安排在同一個下午，減少折返。',official:'https://www.my-kagawa.jp/ritsuringarden'},
 {id:'wasen',day:1,stop:'栗林公園與南湖和船',name:'栗林公園・南湖和船',jp:'栗林公園 南湖 和船乗り場',kind:'體驗',status:'confirmed',description:'本次週一已搭乘。這筆獨立列成體驗，與庭園入園分開辨識；實際票價尚未補明細。',official:'https://www.my-kagawa.jp/ritsuringarden/feature/ritsuringarden/wasen'},
 {id:'dinner-d1',day:1,stop:'大衆焼肉しんすけ トキワ新町店',name:'大衆焼肉しんすけ トキワ新町店',jp:'大衆焼肉しんすけ トキワ新町店 香川県高松市瓦町1丁目10-16',kind:'餐飲',status:'confirmed',description:'首晚 18:30 的三人燒肉晚餐，合計約 NT$3,300，由家人刷卡支付。金額為旅後概算。',official:'https://shinsuke-yakiniku.com/access/'},
 {id:'marugame',day:1,stop:'丸龜町一帶短逛',name:'丸龜町商店街・壹番街圓頂廣場',jp:'高松丸亀町壱番街前ドーム広場',kind:'散步',status:'optional',description:'晚餐前的順路短逛參考，原規劃以休息與短段步行為主；尚未獨立確認實際走訪範圍。',official:'https://www.kame3.jp/'},
 {id:'miyanoura',day:2,stop:'高松港 → 宮浦港',name:'直島・宮浦港',jp:'宮浦港 直島',kind:'交通',status:'record',description:'直島一日進出與取還自行車的港口。高松出發、宮浦抵達，不與小豆島的土庄港混淆。',official:'https://shikokukisen.com/takamatsu-miyanoura/'},
 {id:'ougiya',day:2,stop:'OUGIYA 電動自行車',name:'OUGIYA・電動自行車',jp:'おうぎや レンタサイクル 直島',kind:'體驗',status:'record',description:'09:30 預約三台，每台一日 ¥1,500，三台共 ¥4,500。美術館周邊依車輛限制與體力搭配巴士。',official:'https://ougiya-naoshima.jp/'},
 {id:'red-pumpkin',day:2,stop:'宮浦紅南瓜與本村地區',name:'宮浦港・紅南瓜',jp:'赤かぼちゃ 直島 宮浦港',kind:'藝術',status:'record',description:'宮浦港一帶的港口藝術點，與本村分開列出，方便閱讀當天移動路線。',official:benesse},
 {id:'honmura',day:2,stop:'宮浦紅南瓜與本村地區',name:'本村藝術聚落・家計畫',jp:'直島 家プロジェクト 本村',kind:'藝術',status:'record',description:'本村地區的藝術路線；個別家計畫場館是否入內與門票，未從現有紀錄確認，不列成逐館都參觀過。',official:'https://benesse-artsite.jp/art/arthouse.html'},
 {id:'nnmoa',day:2,stop:'直島新美術館',name:'直島新美術館',jp:'直島新美術館',kind:'美術館',status:'ticket',description:'11/03 成人三張已購票，¥1,500×3＝¥4,500。票券與行程都有對應，實際入館時間未補完整紀錄。',official:'https://benesse-artsite.jp/art/nnmoa.html'},
 {id:'benesse-house',day:2,stop:'Benesse House Museum／Valley Gallery',name:'Benesse House Museum',jp:'ベネッセハウス ミュージアム',kind:'美術館',status:'ticket',description:'與 Valley Gallery 同組票，成人三張 ¥1,300×3＝¥3,900。拆成兩個場館索引，但費用只算一組。',official:'https://benesse-artsite.jp/art/benessehouse-museum.html'},
 {id:'valley',day:2,stop:'Benesse House Museum／Valley Gallery',name:'Valley Gallery',jp:'ベネッセハウス ヴァレーギャラリー',kind:'美術館',status:'ticket',description:'本次已購票組合涵蓋的另一場館。與 Benesse House 的票價合併，不另外重複列入費用；實際入館時間待補。',official:'https://benesse-artsite.jp/art/benessehouse-museum.html'},
 {id:'yellow-pumpkin',day:2,stop:'Benesse House Museum／Valley Gallery',name:'海邊黃南瓜',jp:'南瓜 草間彌生 直島',kind:'藝術',status:'optional',description:'美術館周邊順遊的彈性點，目前尚未有獨立到訪確認，與已購票場館分開呈現。',official:benesse},
 {id:'tonosho',day:3,stop:'土庄港觀光中心',name:'土庄港・觀光中心',jp:'土庄港観光センター',kind:'交通',status:'record',description:'小豆島觀光巴士報到點，09:30–10:10 報到、10:15 出發。不要與直島宮浦港混淆。',official:'https://shodoshima-kotu.com/tw/plan/shuttlebus/'},
 {id:'kankakei',day:3,stop:'小豆島島巡觀光巴士',name:'寒霞溪',jp:'寒霞渓 ロープウェイ',kind:'景點',status:'record',description:'小豆島島巡巴士路線的主要景點之一。實際順序由業者安排；纜車是否搭乘與方案包含內容未另行確認。',official:'https://www.kankakei.co.jp/'},
 {id:'olive',day:3,stop:'小豆島島巡觀光巴士',name:'小豆島橄欖公園',jp:'道の駅 小豆島オリーブ公園',kind:'景點',status:'record',description:'本次巴士路線的橄欖與風車景點，與寒霞溪、電影村分開列出，方便讀者查地圖。',official:'https://www.olive-pk.jp/'},
 {id:'24eyes',day:3,stop:'小豆島島巡觀光巴士',name:'二十四瞳電影村',jp:'二十四の瞳映画村',kind:'景點',status:'record',description:'小豆島觀光巴士路線中的電影村。此處不把它列在固定第幾站，也不虛填當天停留時間。',official:'https://www.24hitomi.or.jp/'},
 {id:'ichikara',day:3,stop:'高松站二樓・骨付鳥',name:'高松站二樓・骨付鳥晚餐',jp:'さぬき骨付鳥いちから 高松オルネ 南館2階',kind:'餐飲',status:'confirmed',description:'小豆島回來後的晚餐，每人約 NT$800、三人約 NT$2,400，由家人支付。依樓層與料理對應「さぬき骨付鳥いちから」，店名未經收據核實。',official:'https://takamatsu-orne.jp/shop/detail/2022060010?tenant_cd=2022060010'},
 {id:'konpira',day:4,stop:'金刀比羅宮・表參道',name:'金刀比羅宮',jp:'金刀比羅宮',kind:'景點',status:'confirmed',description:'週四上午實際採用的參拜路線。同行家人的體力與階梯休息是安排重點，沒有紀錄的登階範圍不補寫。',official:'https://www.konpira.or.jp/'},
 {id:'omotesando',day:4,stop:'金刀比羅宮・表參道',name:'琴平・金刀比羅宮表參道',jp:'金刀比羅宮 表参道',kind:'散步',status:'record',description:'與參拜路線一同整理的參道散步區。未提供的午餐店名與消費不自行加入。',official:'https://www.konpira.or.jp/'},
 {id:'aquarium',day:4,stop:'四國水族館',name:'四國水族館',jp:'四国水族館',kind:'景點',status:'confirmed',photo:'aquarium',description:'金刀比羅宮後搭 JR 到宇多津，參觀後再搭 JR 回高松。館方交易 ¥4,200，另有 ¥550、¥2,360 子商家交易，品項待核對。',official:'https://www.shikoku-aquarium.jp/'},
 {id:'tamamo',day:5,stop:'玉藻公園・高松城跡',name:'玉藻公園・高松城跡',jp:'玉藻公園',kind:'景點',status:'confirmed',description:'週五早上實際造訪的城跡與護城河散步點；Wallet 交易 ¥900。之後回飯店拿行李、退房前往機場。',official:'https://www.takamatsujyo.com/'}
];
export const visitStatus={confirmed:'已確認到訪',record:'行程路線紀錄',ticket:'已購票・參觀時間未補',optional:'彈性規劃・到訪未確認'};
