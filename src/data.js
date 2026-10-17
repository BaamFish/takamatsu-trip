export const links={air:'https://www.starlux-airlines.com/',hotel:'https://www.takamatsu-century.com/',ferry:'https://shikokukisen.com/takamatsu-miyanoura/',shodo:'https://www.shikokuferry.com/route2',aquarium:'https://shikoku-aquarium.jp/',jr:'https://www.jr-shikoku.co.jp/',airport:'https://www.takamatsu-airport.com/',ougi:'https://ougiya-naoshima.jp/',bus:'https://shodoshima-kotu.com/tw/plan/shuttlebus/',tamamo:'https://www.takamatsujyo.com/',alley:'https://www.kitahama-alley.jp/',museum:'https://www.city.takamatsu.kagawa.jp/museum/takamatsu/'};
export const museumTickets=[
{id:'nnmoa',title:'直島新美術館',jp:'直島新美術館',date:'2026/11/03',quantity:3,unitPrice:1500,url:'https://benesse-artsite.jp/art/nnmoa.html'},
{id:'benesse',title:'Benesse House Museum／Valley Gallery',jp:'ベネッセハウス ミュージアム',date:'2026/11/03',quantity:3,unitPrice:1300,url:'https://benesse-artsite.jp/art/benessehouse-museum.html'}
];
export const knownExpenses=[{id:'bus',title:'小豆島觀光巴士 · 3 人',amount:29400,status:'付款待確認'},...museumTickets.map(t=>({id:t.id,title:t.title+' · 成人 '+t.quantity+' 張',amount:t.quantity*t.unitPrice,status:'已購票'}))];
export const mapUrl=q=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
export const hotel='高松センチュリーホテル 香川県高松市錦町1丁目4-19';
const item=(id,time,title,jp,description,duration,transport,note,scene='sea',official)=>({id,time,title,jp,description,duration,transport,note,scene,official});
export const days=[
{id:1,date:'11/02',weekday:'一',title:'初見高松',subtitle:'高松市區',scene:'city',intro:'從海港城市開始，把第一天留給慢慢散步。',alert:'接機車輛行李容量待確認；飯店 16:00 後入住，下午先寄放行李。',items:[
item('1a','08:50–12:20','飛往高松','高松空港','星宇航空 JX300｜台中 → 高松。時間依您提供的訂單，仍須以航空公司通知為準。','航程 2 小時 30 分','飛機','台灣與日本時差 1 小時；本手冊皆為所在地時間。','sea',links.air),
item('1b','12:20–13:30','入境與接機會合','高松空港 国際線到着ロビー','入境、領取行李，依 Klook 憑證指示與司機會合。','預留 70 分','Klook 接機','確切集合位置以憑證與司機通知為準；Toyota Altis 或同級，確認三人行李。','sea',links.airport),
item('1c','下午・預估','飯店寄放行李',hotel,'高松世紀飯店｜四晚三人房，含早餐。','約 30 分','接機車輛','入住 16:00 後；可先詢問寄放行李。','city',links.hotel),
item('1d','15:00–16:00','玉藻公園・高松城跡','史跡高松城跡 玉藻公園','沿著海水護城河，感受城下町的安靜午後。','約 1 小時','步行／依體力搭計程車','規劃時間；開園與入園費出發前確認。','city',links.tamamo),
item('1e','16:00–16:30','高松站購買 JR 套票','JR高松駅 みどりの窓口','詢問四國水族館套票及 11/05 適用車次。','約 30 分','步行','尚待購買；套票販售、效期與使用列車須由窗口確認。','city',links.jr),
item('1f','16:30–18:30','三越與丸龜町商店街','高松丸亀町商店街','逛逛高松三越，沿拱廊找一家喜歡的晚餐店。','約 2 小時','步行','高松三越可由下方地點連結導航；依體力提早回飯店。','city','https://kame3.jp/'),
item('1g','晚上・彈性','晚餐與休息',hotel,'吃飽、休息，為明天的直島早起留一點餘裕。','彈性','步行／計程車','早餐供應時間請向櫃台確認。','city',links.hotel)]},
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
{id:4,date:'11/05',weekday:'四',title:'與四國的海相遇',subtitle:'四國水族館',scene:'aquarium',intro:'看魚群游過，午後留給咖啡與城市散步。',alert:'JR 套票尚待購買；列車班次未選定。藝術展以當日公告與入館條件為準。',items:[
item('4a','約 09:30','搭 JR 前往宇多津','JR高松駅','高松站 → 宇多津站；到站後步行約 12 分鐘至水族館。','依所選車次','JR＋步行','此為預估出發時間，確認是否轉車及套票可搭列車。','city',links.jr),
item('4b','10:30–13:00','四國水族館','四国水族館 香川県綾歌郡宇多津町浜一番丁4','慢慢欣賞四國的水中風景，館內安排休息。','約 2.5 小時','步行','官網公告 LIFE IN BULE 展期 2026/11/05–2027/03/01；出發前再確認。','aquarium',links.aquarium),
item('4c','中午・彈性','宇多津午餐','宇多津駅','午餐後依車次返回高松。','約 1 小時','步行／JR','約 14:45 回到高松為預估，尚未指定班次。','city'),
item('4d','15:00–17:00','北濱 Alley 或高松市美術館','北浜alley 高松','海邊倉庫咖啡與藝文空間，兩個選項擇一安排。','約 2 小時','步行／計程車','高松市美術館另有導航；展覽、營業時間待查。','city',links.alley),
item('4e','晚上・彈性','伴手禮與晚餐','高松丸亀町商店街','最後一晚，慢慢挑選旅途的紀念。','彈性','步行','回飯店整理行李，確認明日機場交通。','city')]},
{id:5,date:'11/06',weekday:'五',title:'把瀨戶內帶回日常',subtitle:'高松返程',scene:'sea',intro:'早餐、最後一眼海景，帶著回憶回家。',alert:'回程接送尚未預訂。10:00 前退房；09:45–10:00 出發為暫估，依交通安排與航空公司要求調整。',items:[
item('5a','上午・視時間','早餐與 Sunport 散步','サンポート高松','若時間充裕，吃過早餐再去海邊走走。','彈性','步行','以不影響機場出發為前提；行李先整理完。','sea'),
item('5b','10:00 前','飯店退房',hotel,'確認隨身物品、證件及行李都已備齊。','約 15 分','步行','建議配合接送時間提早完成。','city',links.hotel),
item('5c','約 09:45–10:00 出發','前往高松機場','高松空港 国際線出発ロビー','預計從市區出發，實際依預訂接送或機場巴士調整。','車程依交通狀況','接送待訂／機場巴士備案','回程尚未預訂；請以航空公司報到期限倒推時間。','sea',links.airport),
item('5d','13:20–15:40','高松 → 台中','臺中國際機場','星宇航空 JX301。五天四夜，謝謝彼此的陪伴。','航程 3 小時 20 分','飛機','時間依您提供訂單；以航空公司最新通知為準。','sea',links.air)]}
];
export const places=[['直島新美術館','直島新美術館'],['Benesse House Museum','ベネッセハウス ミュージアム'],['Valley Gallery','ベネッセハウス ヴァレーギャラリー'],['高松三越','高松三越'],['本村藝術聚落','直島 家プロジェクト 本村'],['直島黃南瓜','南瓜 草間彌生 直島 ベネッセ'],['小豆島橄欖公園','道の駅 小豆島オリーブ公園'],['二十四瞳電影村','二十四の瞳映画村'],['宇多津站','JR宇多津駅'],['高松市美術館','高松市美術館'],['飯店',hotel]];
export const reservations=[...museumTickets.map(t=>({id:t.id,title:t.title,status:'已購票・11/03',text:`${t.date}｜成人 ${t.quantity} 張 × ¥${t.unitPrice.toLocaleString('ja-JP')} = ¥${(t.quantity*t.unitPrice).toLocaleString('ja-JP')}。依旅客提供的購票截圖確認；入場時段截圖未顯示，請查原始票券。票券 QR Code 請保存在私人裝置。`,url:t.url,place:t.jp})),{id:'air',title:'星宇航空・來回機票',status:'依提供訂單',text:'3 位成人｜11/02 JX300 08:50–12:20；11/06 JX301 13:20–15:40。時間為各地當地時間。',url:links.air},{id:'hotel',title:'高松世紀飯店・四晚',status:'依提供訂單',text:'11/02 16:00 後入住，11/06 10:00 前退房。三人房含早餐。1-4-19 Nishikimachi, Takamatsu, Kagawa。',url:links.hotel,place:hotel},{id:'pickup',title:'Klook・抵達接機',status:'行李容量待確認',text:'11/02 高松機場 → 飯店。3 人，Toyota Altis 或同級；須確認行李能否放下及實際集合點。',url:'https://www.klook.com/zh-TW/'},{id:'bike',title:'OUGIYA・電動自行車',status:'現場付款',text:'11/03 09:30，3 台。約 16:00 還車為行程規劃，最晚還車依店家確認。',url:links.ougi,place:'おうぎや レンタサイクル 直島'},{id:'bus',title:'小豆島・觀光巴士',status:'付款待確認',text:'11/04 10:15–16:15，3 人共 ¥29,400。09:30–10:10 土庄港觀光中心報到；景點順序以旅行社為準。',url:links.bus,place:'土庄港観光センター'}];
export const todos=['確認兩組已購票館舍的參觀動線','確認 Klook 三人行李容量與集合點','預訂回程機場交通','確認小豆島巴士付款與包含項目','購買 JR 四國水族館套票並查列車','再次確認渡輪班次、天氣與停航資訊','確認自行車歸還時間及巴士備案','確認水族館展覽與營業時間','準備護照、保險與離線憑證','準備常備藥、行動電源與網路','先開啟網站一次，檢查飛航模式離線閱讀','確認兩種已購美術館票券的入場時段與適用條件，私人保存 6 張票券','優先安排兩組已購票館舍，李禹煥美術館視時間取捨'];



