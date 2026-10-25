import {preparationTasks} from './preparation.js';
export const links={air:'https://www.starlux-airlines.com/',hotel:'https://www.takamatsu-century.com/',ferry:'https://shikokukisen.com/takamatsu-miyanoura/',shodo:'https://www.shikokuferry.com/route2',konpira:'https://www.konpira.or.jp/',kotobus:'https://www.kotobus.com/climbing/tw/',kotoden:'https://www.kotoden.co.jp/',jr:'https://www.jr-shikoku.co.jp/',airport:'https://www.takamatsu-airport.com/',ougi:'https://ougiya-naoshima.jp/',bus:'https://shodoshima-kotu.com/tw/plan/shuttlebus/',tamamo:'https://www.takamatsujyo.com/',alley:'https://www.kitahama-alley.jp/',museum:'https://www.city.takamatsu.kagawa.jp/museum/takamatsu/'};
export const dinner={id:'dinner',title:'大衆焼肉しんすけ トキワ新町店',place:'大衆焼肉しんすけ トキワ新町店 香川県高松市瓦町1丁目10-16',date:'2026/11/02',time:'18:30',guests:3,status:'已確認',url:'https://shinsuke-yakiniku.com/access/'};
export const wasen={id:'wasen',date:'2026/11/05',time:'15:30',deadline:'15:00',guests:3,amount:2550,place:'栗林公園 南湖 和船乗り場',url:'https://www.my-kagawa.jp/ritsuringarden/feature/ritsuringarden/wasen'};
export const outboundJR={id:'jr-outbound',date:'2026/11/05',train:'SHIMANTO 3／しまんと3号',departure:'08:25',arrival:'09:00',guests:3,amount:12607};
export const museumTickets=[
{id:'nnmoa',title:'直島新美術館',jp:'直島新美術館',date:'2026/11/03',quantity:3,unitPrice:1500,url:'https://benesse-artsite.jp/art/nnmoa.html'},
{id:'benesse',title:'Benesse House Museum／Valley Gallery',jp:'ベネッセハウス ミュージアム',date:'2026/11/03',quantity:3,unitPrice:1300,url:'https://benesse-artsite.jp/art/benessehouse-museum.html'}
];
export const knownExpenses=[{id:outboundJR.id,title:'JR 去程 SHIMANTO 3 · 成人 3 人',amount:outboundJR.amount,status:'已預訂・憑證支付金額'},{id:'bus',title:'小豆島觀光巴士 · 3 人',amount:29400,status:'付款待確認'},...museumTickets.map(t=>({id:t.id,title:t.title+' · 成人 '+t.quantity+' 張',amount:t.quantity*t.unitPrice,status:'已購票'}))];
export const mapUrl=q=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
export const hotel='高松センチュリーホテル 香川県高松市錦町1丁目4-19';
const item=(id,time,title,jp,description,duration,transport,note,scene='sea',official)=>({id,time,title,jp,description,duration,transport,note,scene,official});
export const days=[
{id:1,date:'11/02',weekday:'一',title:'初見高松',subtitle:'高松・栗林公園',scene:'city',intro:'抵達後寄放行李、午餐，下午只逛栗林公園，不安排購物，晚上赴已確認的燒肉晚餐。',alert:'接機車輛行李容量待確認；飯店 16:00 後入住，下午先寄放行李。晚餐 18:30 已確認，3 位成人；不安排購物。栗林公園依入境及體力彈性縮短，18:30 晚餐不變；D1 到園時詢問辦理 11/05 和船預約取消，目前尚未取消。',items:[
item('1a','08:50–12:20','飛往高松','高松空港','星宇航空 JX300｜台中 → 高松。時間依您提供的訂單，仍須以航空公司通知為準。','航程 2 小時 30 分','飛機','台灣與日本時差 1 小時；本手冊皆為所在地時間。','sea',links.air),
item('1b','12:20–13:30','入境與接機會合','高松空港 国際線到着ロビー','入境、領取行李，依 Klook 憑證指示與司機會合。','預留 70 分','Klook 接機','確切集合位置以憑證與司機通知為準；Toyota Altis 或同級，確認三人行李。','sea',links.airport),
item('1c','下午・預估','飯店寄放行李',hotel,'高松世紀飯店｜四晚三人房，含早餐。','約 30 分','接機車輛','入住 16:00 後；可先詢問寄放行李。','city',links.hotel),
item('1-lunch','寄放行李後・彈性','午餐與休息','JR高松駅','先吃午餐、補充水分，再依入境進度前往栗林公園。','約 30–60 分，可調整','步行／計程車','若班機或入境延誤，縮短或略過公園；不壓縮休息來趕行程。','city'),
item('1d','約 15:00–16:30・規劃','栗林公園・庭園散步','栗林公園','取代玉藻公園與購物，慢慢欣賞庭園；僅安排散步，沒有新增 D1 和船預約。','約 1–1.5 小時，可縮短','計程車／公車＋園內步行','11 月開園 06:30–17:00。入園與交通依當日情況；先確認原和船取消受理，再依體力走園。','city','https://ritsuringarden.com/ritsurin/'),
item('1-cancel-wasen','D1 到園時・待辦','詢問取消 11/05 和船預約',wasen.place,'到園時向和船售票處或服務櫃台出示私人預約通知，請求取消原 11/05 15:30、成人 3 人的預約。','依櫃台處理時間','園內步行','尚未取消。原通知要求電話取消，現場能否代辦需詢問；若無法受理，請電話聯絡事務所（087-833-7413，日本時間 08:30–17:00）。不能直接改期。','city',wasen.url),
item('1e','約 16:30 後・規劃','回飯店入住與休息',hotel,'飯店 16:00 後可入住；園後先回飯店休息，再依交通前往 18:30 晚餐。JR 琴平去程取票另外找方便的時間確認，不排成必跑景點。','彈性，保留前往晚餐交通','計程車／公車＋步行','如果抵達較晚，可先入住再調整公園停留；不安排三越或商店街購物。','city',links.hotel),
item('1-dinner','18:30・已確認','しんすけ トキワ新町店・燒肉晚餐',dinner.place,'11/02 18:30，3 位成人。依旅客確認及預約憑證，第一晚到大衆焼肉しんすけ トキワ新町店用餐。','用餐長度未提供','步行／計程車','地址：香川県高松市瓦町1丁目10-16。請預留交通並提早抵店；菜單、餐費與付款細節未提供。私人訂位憑證自行保管。','city',dinner.url),
item('1g','晚餐後・彈性','回飯店休息',hotel,'晚餐後返回飯店休息，為明天的直島早起留一點餘裕。','彈性','步行／計程車','早餐供應時間請向櫃台確認。','city',links.hotel)]},
{id:2,date:'11/03',weekday:'二',title:'在島上，遇見藝術',subtitle:'直島藝術巡禮',scene:'art',intro:'新版路線：宮浦紅南瓜 → 本村／直島新美術館 → 午餐 → Benesse House Museum／Valley Gallery → 黃南瓜（視體力）→ 宮浦還車。參觀時段為規劃，依票券條件調整。',alert:'日本文化日假期。直島新美術館與 Benesse House Museum／Valley Gallery 各 3 張已購票（11/03），入場時段截圖未顯示，待確認。以下以兩組已購票館舍為主，其餘景點依時間與體力取捨。',items:[
item('2a','06:40','飯店出發・高松港','高松港 四国汽船 フェリー乗り場','提前到港購票，確認直島宮浦航線的候船處。','預留至登船','步行／計程車','建議至少開船前 30 分鐘抵達，假日再提早；06:40 為行程規劃。','sea',links.ferry),
item('2b','08:12–09:02','渡輪前往直島','直島 宮浦港','高松港 → 宮浦港；讓瀨戶內海慢慢展開。','約 50 分','渡輪','現行官方船表相符（2026/10/17 查核）；當日運航再確認，未視為訂票。','sea',links.ferry),
item('2c','09:30','OUGIYA 電動自行車','おうぎや レンタサイクル 直島','預約三台電動自行車，現場付款。','取車約 30 分','電動自行車','檢查煞車、電量與還車時間；不舒服就改搭車。','art',links.ougi),
item('2d','上午・彈性','紅南瓜與本村聚落','赤かぼちゃ 直島 宮浦港','先看港邊藝術，再沿路前往本村散步。','依體力安排','自行車／町營巴士','本村藝術聚落另有導航；家計畫入場票與開館日待確認。','art','https://www.benesse-artsite.jp/'),
item('2-new','上午・規劃待安排','直島新美術館・已購票','直島新美術館','11/03 成人票 3 張，每張 ¥1,500，小計 ¥4,500。建議與本村散步一併規劃，順序待確認。','待安排','自行車／町營巴士＋步行','截圖未顯示入場時段，請查原始票券；QR Code 留在私人憑證中，不上傳公開網站。','art',museumTickets[0].url),
item('2e','中午・彈性','本村午餐','直島 本村','找一間小店坐下，補充水分與體力。','約 1 小時','步行','餐廳尚未預約，假日可能候位。','city'),
item('2-benesse','下午・規劃待安排','Benesse House Museum／Valley Gallery・已購票','ベネッセハウス ミュージアム','11/03 成人票 3 張，每張 ¥1,300，小計 ¥3,900。此票種名稱包含 Museum／Valley Gallery；兩處另有導航。','待安排，含兩處移動','步行／園區接駁','截圖未顯示入場時段，請查票券適用條件；參觀先後、接駁及還車時間需一起確認。','art',museumTickets[1].url),
item('2g','彈性備選','李禹煥美術館與黃南瓜','李禹煥美術館 直島','依體力選擇參觀，再到海邊與黃南瓜相遇。','約 1–1.5 小時，視取捨','步行／園區接駁','李禹煥美術館未有購票確認；黃南瓜另有導航，依時間取捨。園區自行車限制、接駁請看官方。','art','https://www.benesse-artsite.jp/'),
item('2h','約 16:00','歸還自行車','おうぎや レンタサイクル 直島','回宮浦還車、休息並準備回程。','約 30 分','自行車','實際最晚還車時間以店家通知為準。','sea',links.ougi),
item('2i','17:00–18:00','回到高松港','宮浦港 フェリー乗り場','宮浦港 → 高松港。','約 1 小時','渡輪','現行官方船表相符；建議 16:30 前抵港，當日運航需再確認。','sea',links.ferry)]},
{id:3,date:'11/04',weekday:'三',title:'小豆島的秋日風景',subtitle:'小豆島觀光',scene:'olive',intro:'搭上觀光巴士，把移動交給司機，好好看風景。',alert:'觀光巴士付款狀態待確認；景點順序與停留時間以旅行社安排為準。',items:[
item('3a','08:02–09:02','渡輪前往土庄港','高松港 小豆島フェリー 土庄行き','高松港 → 小豆島土庄港。','約 60 分','渡輪','建議 07:30 前抵達；官網現行船表相符，仍須查當日運航。','sea',links.shodo),
item('3b','09:30–10:10','觀光巴士報到','土庄港観光センター','備好憑證，三位成人一起報到。','報到窗口 40 分','步行','10:15 發車；付款狀態待確認，集合位置以憑證為準。','olive',links.bus),
item('3c','10:15–16:15','小豆島觀光巴士','寒霞渓 ロープウェイ 紅雲亭駅','寒霞溪、橄欖公園、二十四瞳電影村，悠閒走訪島上風景。','約 6 小時','觀光巴士','順序非固定；各景點另有下方導航。餐食、纜車及門票是否包含須查憑證。','olive',links.bus),
item('3d','16:15 後・彈性','土庄港休息候船','土庄港 フェリーターミナル','留一點緩衝時間，坐下喝水、整理伴手禮。','約 1 小時','步行','若巴士延誤，先查下一班船，避免趕路。','sea',links.shodo),
item('3e','17:30–18:30','渡輪回高松','土庄港 高松行き フェリー乗り場','土庄港 → 高松港。','約 60 分','渡輪','建議 17:00 前到港；現行官方船表相符，當天再查運航。','sea',links.shodo)]},
{id:4,date:'11/05',weekday:'四',title:'慢慢走，琴平的秋日',subtitle:'金刀比羅宮・琴平慢遊',scene:'city',intro:'JR 08:25–09:00 已預訂。今天只留琴平：慢慢參拜、午餐、參道散步與咖啡休息，回程依體力選琴電，不再趕栗林公園或和船。',alert:'保留全天餘裕，不以登頂或走完 785 階為目標。大門至御本宮仍約有 420 階；可休息、折返或搭接駁。回程琴電未購票，班次當天再查。原和船預約待 D1 辦理取消，不能視為已取消。',items:[
item('4-breakfast','07:00–07:45・規劃','飯店早餐',hotel,'悠閒吃早餐，再準備今天的琴平散步。','約 1 小時','飯店內','早餐實際供應時間請向飯店確認。','city',links.hotel),
item('4-outbound','08:25–09:00・已預訂','JR 特急しまんと3号・高松 → 琴平','琴平駅','SHIMANTO 3／しまんと3号，指定席，成人 3 人。憑證支付金額 ¥12,607，僅記為此筆訂單金額，不推算一般票價。','車程 35 分','JR 特急・指定席','建議 08:00 前抵 JR 高松站，預留取票與找月台時間；取票 QR Code、條件及期限請查私人 NAVITIME 憑證。此訂單只有去程，回程未訂到。','city',links.jr),
item('4-shuttle','約 09:15–09:45・規劃','琴平抵達與接駁評估','金刀比羅宮 大門','依長輩體力考慮登山接駁車至大門附近；不搭車則慢走，隨時調整。','預留約 30 分，依實際交通調整','登山接駁待確認／步行','未預約接駁；價格、當日營運、叫車方式及上下車位置皆待確認，並非保證可搭。','city',links.kotobus),
item('4-shrine','約 09:45 起・依體力','金刀比羅宮・慢步參拜','金刀比羅宮','秋季參拜，沿途慢走、休息，以家人體力決定走到哪裡。','慢走並保留上下山與休息，不硬性卡結束時間','步行・階梯','不以完成 785 階為目標。文件提醒大門至御本宮仍約 420 階；接駁不代表免爬階梯。11 月初紅葉可能尚未盛開。','city',links.konpira),
item('4-lunch','約 12:00–13:00・彈性','琴平表參道・烏龍麵午餐','金刀比羅宮 表参道','在表參道或老街找一間讚岐烏龍麵店，坐下慢慢休息。','約 1 小時','步行','餐廳未指定、未預約；候位及營業時間依當日店家為準。','city'),
item('4-oldtown','午餐後・彈性','琴平參道・散步與咖啡休息','金刀比羅宮 表参道','以散步、找座位休息為主，不必大量購物；可依體力多坐一會兒或提早返回高松。','約 1–2 小時，可自由縮短或延長','步行','依體力自由調整，可提早回高松休息。','city'),
item('4-return','下午・依體力選班次','琴電返回高松','琴電琴平駅','JR 回程未訂到，改以琴電琴平站往瓦町或高松築港方向為備案；依飯店交通選下車站，未購票。','依實際候車、班次與下車站','琴電＋步行／計程車','不再綁定 13:12 班次，也不需趕 15:00 和船購票。JR 琴平站與琴電琴平站不同，出發前核對運航。','city',links.kotoden),
item('4-rest','返回高松後・彈性','回飯店休息',hotel,'回高松後先回飯店休息，晚餐與整理行李依體力安排。','彈性','步行／計程車','長輩若累了，直接留在飯店休息即可。','city',links.hotel),
item('4-evening','17:30 後・彈性','最後一晚・晚餐與整理行李','高松丸亀町商店街','晚餐、伴手禮採買，回飯店整理行李。','彈性','步行','確認隔日前往機場的交通與行李容量。','city')
]},
{id:5,date:'11/06',weekday:'五',title:'把瀨戶內帶回日常',subtitle:'高松返程',scene:'sea',intro:'行李前晚收好，早餐後短逛玉藻公園，回飯店拿行李退房，再安心前往機場。',alert:'回程接送尚未預訂，先確認交通再固定散步時間。玉藻公園僅短逛，遇下雨、疲累或接送提早則略過；10:00 前退房，機場交通與航空公司要求優先。',items:[
item('5a','出門前・規劃','早餐與最後行李檢查',hotel,'前一晚先整理行李；吃早餐後，把寄存與退房安排向櫃台確認。','配合飯店早餐時間','飯店內','不把整理行李留到散步回來；早餐時間仍需飯店確認。','city',links.hotel),
item('5-tamamo','約 08:00–08:45・可略過','玉藻公園・高松城跡晨間散步','玉藻公園 西門','從西門進出短逛護城河與城跡，不再加排 Sunport 或其他景點。','約 45 分，可縮短','步行／依體力計程車','11 月西門 06:30、東門 08:30 開門。09:00–09:15 回到飯店為規劃目標，若交通安排需提早或天候不佳就略過。','city','https://www.city.takamatsu.kagawa.jp/kurashi/kurashi/shisetsu/park/tamamo/bunzai2018060.html'),
item('5b','約 09:00–09:30・10:00 前','拿行李與飯店退房',hotel,'確認隨身物品、證件及行李都已備齊。','約 15 分','步行','建議配合接送時間提早完成。','city',links.hotel),
item('5c','約 09:45–10:00 出發','前往高松機場','高松空港 国際線出発ロビー','預計從市區出發，實際依預訂接送或機場巴士調整。','車程依交通狀況','接送待訂／機場巴士備案','回程尚未預訂；請以航空公司報到期限倒推時間。','sea',links.airport),
item('5d','13:20–15:40','高松 → 台中','臺中國際機場','星宇航空 JX301。五天四夜，謝謝彼此的陪伴。','航程 3 小時 20 分','飛機','時間依您提供訂單；以航空公司最新通知為準。','sea',links.air)]}
];
export const places=[['栗林公園','栗林公園'],['和船取消詢問處（原預約）',wasen.place],['玉藻公園西門','玉藻公園 西門'],['琴電栗林公園站','栗林公園駅'],['第一晚燒肉・しんすけ',dinner.place],['直島新美術館','直島新美術館'],['Benesse House Museum','ベネッセハウス ミュージアム'],['Valley Gallery','ベネッセハウス ヴァレーギャラリー'],['高松三越','高松三越'],['本村藝術聚落','直島 家プロジェクト 本村'],['直島黃南瓜','南瓜 草間彌生 直島 ベネッセ'],['小豆島橄欖公園','道の駅 小豆島オリーブ公園'],['二十四瞳電影村','二十四の瞳映画村'],['金刀比羅宮','金刀比羅宮'],['琴平表參道','金刀比羅宮 表参道'],['JR 琴平站','琴平駅'],['琴電琴平站','琴電琴平駅'],['琴電高松築港站','高松築港駅'],['飯店',hotel]];
export const reservations=[{id:outboundJR.id,title:'JR 特急しまんと3号・單程指定席',status:'已預訂・11/05 08:25',text:'11/05 高松 08:25 → 琴平 09:00｜SHIMANTO 3，指定席，成人 3 位。憑證支付金額 ¥12,607，付款方式 Credit card。請依私人 NAVITIME 確認頁查看紙票取票 QR Code 與領票條件。回程未訂到，琴電備案未購票。',url:links.jr,place:'JR高松駅'},{id:wasen.id,title:'栗林公園南湖和船・第 27 便',status:'待 D1 現場詢問取消・尚未取消',text:'原預約 11/05 15:30 南湖第 27 便，成人 3 人，¥2,550，現場付款。已決定不參加，從 D4 行程與預計支出移除，但實際預約尚未取消。預計 D1 到栗林公園時詢問現場代辦；原通知要求電話取消，若現場不能受理，請致電 087-833-7413（日本時間 08:30–17:00）。不能直接更改，需取消後另訂；本次未新增任何船班。',url:wasen.url,place:wasen.place},{id:dinner.id,title:dinner.title,status:'已確認・11/02 18:30',text:'11/02（一）18:30｜3 位成人。地址：香川県高松市瓦町1丁目10-16。依旅客確認及提供憑證整理；餐費、套餐與付款細節未提供，費用頁不自行估列。取消與退款條件請查原始憑證及店家規定。',url:dinner.url,place:dinner.place},...museumTickets.map(t=>({id:t.id,title:t.title,status:'已購票・11/03',text:`${t.date}｜成人 ${t.quantity} 張 × ¥${t.unitPrice.toLocaleString('ja-JP')} = ¥${(t.quantity*t.unitPrice).toLocaleString('ja-JP')}。依旅客提供的購票截圖確認；入場時段截圖未顯示，請查原始票券。票券 QR Code 請保存在私人裝置。`,url:t.url,place:t.jp})),{id:'air',title:'星宇航空・來回機票',status:'依提供訂單',text:'3 位成人｜11/02 JX300 08:50–12:20；11/06 JX301 13:20–15:40。時間為各地當地時間。',url:links.air},{id:'hotel',title:'高松世紀飯店・四晚',status:'依提供訂單',text:'11/02 16:00 後入住，11/06 10:00 前退房。三人房含早餐。1-4-19 Nishikimachi, Takamatsu, Kagawa。',url:links.hotel,place:hotel},{id:'pickup',title:'Klook・抵達接機',status:'行李容量待確認',text:'11/02 高松機場 → 飯店。3 人，Toyota Altis 或同級；須確認行李能否放下及實際集合點。',url:'https://www.klook.com/zh-TW/'},{id:'bike',title:'OUGIYA・電動自行車',status:'現場付款',text:'11/03 09:30，3 台。約 16:00 還車為行程規劃，最晚還車依店家確認。',url:links.ougi,place:'おうぎや レンタサイクル 直島'},{id:'bus',title:'小豆島・觀光巴士',status:'付款待確認',text:'11/04 10:15–16:15，3 人共 ¥29,400。09:30–10:10 土庄港觀光中心報到；景點順序以旅行社為準。',url:links.bus,place:'土庄港観光センター'}];
export const todos=preparationTasks.filter(t=>!t.defaultDone).map(t=>t.title);



