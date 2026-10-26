# 高松旅記 · 2026 TAKAMATSU TRIP

繁體中文、手機優先的五天四夜家庭旅遊手冊。React + Vite + Tailwind CSS + Lucide + vite-plugin-pwa；純靜態網站，無登入、後端或資料庫。

## 開始使用

建議 Node.js 22 LTS 或更新版本。GitHub Actions 使用 npm ci 與 package-lock.json，部署正式建置後的 dist。

```sh
npm ci
npm run dev
```

開啟終端機顯示的網址。正式版檢查：

```sh
npm test
npm run build
npm run preview
```

若使用 pnpm，可使用原有 pnpm-lock.yaml；自動部署以 package-lock.json 為準。PWA 只在正式 build、HTTPS 或 localhost 運作，開發模式不註冊 Service Worker。請勿用 file:// 直接開 index.html。

## 資訊架構與 UI

| 入口 | 功能 |
| --- | --- |
| Home | 原創海景插畫、五天入口、重要提醒、回飯店導航 |
| DailyItinerary | 五個日期分頁、一次顯示一天、垂直時間軸、完成勾選 |
| TimelineCard | 時間、插畫、介紹、停留、交通、提醒、Google Maps、官網 |
| Transportation | 航班、接送、兩條渡輪、JR、直島島內移動 |
| Reservations | 七筆預約／票券摘要、展開卡片、私人編號本機輸入及複製 |
| Checklist / Budget | 行前清單、日圓費用、常用資訊、緊急聯絡、安裝說明 |
| BottomNavigation | 手機固定五入口；桌面顯示頂部導航 |

奶油白、鼠尾草綠與深藍灰；正文手機 17px，卡片主要文字約 17px，次要標示較小。按鈕最小約 44–48px。支援鍵盤日期切換、焦點外框、螢幕閱讀器標籤、減少動態效果偏好、安全區底部間距。字型採 Noto Sans TC（本機有安裝時）、PingFang TC、Microsoft JhengHei 與系統字型，無外部字型下載需求。

## GitHub Pages 部署

1. 建立 GitHub Repository，例如 `takamatsu-trip`。
2. 將此資料夾**內的內容**放進 Repository 根目錄，包含隱藏的 `.github/`、`.gitignore`，以及 `package-lock.json`。不要上傳 node_modules 或 dist。
3. 預設分支設為 `main`；若不同，修改 `.github/workflows/deploy.yml` 的分支名稱。
4. 在 Repository → **Settings → Pages → Build and deployment → Source** 選 **GitHub Actions**。
5. 推送到 main，或在 Actions → Deploy GitHub Pages → Run workflow 執行。
6. 等 build 與 deploy 成功，從 Actions deployment 或 Settings → Pages 開啟實際網址，通常為 `https://帳號.github.io/takamatsu-trip/`。

工作流使用 GitHub 官方 Pages Actions，最小權限 contents:read、pages:write、id-token:write。`configure-pages` 回傳 `base_path`，建置時設定 `VITE_BASE_PATH`，因此 Repository 子路徑、帳號根網站、自訂網域都不需要硬編碼 Repository 名稱。

若手動建置固定子路徑：

```sh
# macOS / Linux
VITE_BASE_PATH=/takamatsu-trip/ npm run build
```

```powershell
# Windows PowerShell
$env:VITE_BASE_PATH='/takamatsu-trip/'
npm run build
Remove-Item Env:VITE_BASE_PATH
```

未指定時固定使用 `/takamatsu-trip/`。若要部署帳號根網站，請指定 `VITE_BASE_PATH=/`。插畫來源透過 `import.meta.env.BASE_URL`；PWA 的 scope/start_url 同樣相對於部署根目錄。頁面導覽使用 hash（例如 `#daily`），重新整理不需要伺服器 rewrite 或 404.html。請使用網址尾端 `/`。

## 修改行程與圖片

```text
src/data.js                 行程、日文搜尋地點、官方連結、預約摘要、待辦
src/components/             各頁面及共用卡片
src/hooks.js                容錯 localStorage 存取
src/styles.css              Tailwind 入口與響應式視覺
public/images/*.svg         隨專案提供的本地原創插畫佔位圖
public/icon.svg             網站 / PWA 向量圖示
vite.config.js              base、manifest、離線快取設定
tests/data.test.mjs          日期、行程必要欄位、導航、圖片、預約狀態檢查
.github/workflows/deploy.yml 自動測試、建置與部署
```

每張插畫都明示為非實景。此專案不使用第三方圖片熱連結，可公開部署，也可換為您有權使用的照片：檔案放入 public/images，更新資料與元件副檔名、alt 文字，並把來源與授權補到 ASSETS.md。保留同樣檔名更新圖片時，PWA 下次建置會更新快取。

## 私隱與資料儲存

公開原始碼與建置檔沒有您提供的實際訂位代號、Agoda/Klook/自行車/巴士訂單號。請自行在「預約」展開卡片輸入私人編號，再按儲存。複製的是已儲存的版本。編號不會傳送到任何伺服器；只放在本機 localStorage，**未加密**，同一來源的程式可讀取，不適合共用裝置。

完成狀態、日期選擇、待辦、費用與私人編號各自儲存，不跨手機同步。不支援或禁用儲存時顯示錯誤提示，當次操作仍可繼續。清除瀏覽器資料會遺失狀態；私人編號另提供一鍵清除。請保留原始預約憑證。不要把護照、完整個資或真實編號補進公開原始碼、README、commit 或 Issue。

## PWA 與離線

首次連線載入完成，會顯示「離線手冊已就緒」，預先快取應用程式、五張插畫與圖示。之後可離線重新開啟、切換五天與其他頁面、查看行程並勾選。地圖與外部官方網站需要網路；此網站不提供離線地圖或即時運航資料。瀏覽器可能因儲存空間不足清除快取，出發前請親自飛航模式測試。

iPhone 使用 Safari → 分享 → 加入主畫面；Android Chrome → 選單 → 安裝應用程式／加入主畫面。安裝選項依平台而異，附有 192、512px PNG 安裝圖示及 180px Apple touch icon。偵測到新版時顯示更新按鈕，點選後更新重新載入。圖示來源是 public/icon.svg，可依需求重新匯出 PNG。

## 時間、費用與查核來源

所有旅遊時間為所在地當地時間。航班及既有預約依旅客提供資訊整理，沒有連線驗證訂單。預估、彈性、尚未購票與未預訂皆有明確標示；不保證未來航班及渡輪運航。小豆島巴士已知總額 ¥29,400，付款待確認；費用頁其他空白項目不當作完整總費用，也不使用未經確認的匯率。

2026/10/17 查核官方公開資訊：

- [四國汽船高松－宮浦航線](https://shikokukisen.com/takamatsu-miyanoura/)：現行渡輪含 08:12–09:02、17:00–18:00；仍須當日確認運航。
- [小豆島渡輪高松－土庄](https://www.shikokuferry.com/route2)：現行時刻含 08:02–09:02、17:30–18:30。
- [JNTO 旅客協助](https://www.japan.travel/en/plan/hotline/)：緊急求助指引；日本消防救護 119、警察 110。

其他店家、套票、展覽、餐食、巴士包含項目與精確集合點均應依官方或憑證再次確認。地圖按鈕採 Google Maps 搜尋 API，使用日文名稱或飯店完整地址；並非即時定位或保證到正確登船口。

## 驗收建議

- 手機 390px 與桌面寬度下查看首頁、五日分頁、導航與底部列。
- 勾選一個行程並重新整理，確認完成狀態保留。
- 用測試字串輸入預約欄位、儲存、複製、清除，不要把真實編號放進測試檔。
- 費用空白時合計已知巴士及已購美術館門票 ¥37,800，輸入後可重開檢查。
- 正式 build 後，在 HTTPS 或 localhost 開啟到離線就緒，再以飛航模式重新載入。
- Repository 子路徑部署後直接開 `#daily`、重新整理，確認插畫、CSS、JS、manifest 與 sw.js 正常。

目前目標 Repository 為 https://github.com/BaamFish/takamatsu-trip，網站為 https://baamfish.github.io/takamatsu-trip/ 。請使用 GitHub Actions 作為 Pages Source，不可將開發用 index.html 直接用分支根目錄發佈。



## 2026/10/18 票券更新


原始截圖、私人票券頁網址及 QR Code 不收進專案。公開資料僅保留票種、日期、人數與價格。費用頁保留既有本機自記金額；若先前已記入本次門票，使用者應扣除重複金額。官方館舍連結：[直島新美術館](https://benesse-artsite.jp/art/nnmoa.html)、[Benesse House Museum](https://benesse-artsite.jp/art/benessehouse-museum.html)。


目前行程版本：2026/10/18・行程 v3。PWA 採 autoUpdate，新 Service Worker 啟用後自動載入新版，保留 localStorage 的完成狀態與自記資料。

## Day 4 更新（2026/10/18）

依 Google Drive 旅遊說明書，11/05 改為金刀比羅宮與琴平老街。08:00 早餐、09:00 出發、10:15 抵達與接駁評估、10:30–12:30 參拜、12:30 午餐、13:30–15:00 老街、15:00–16:30 返回高松、16:30 休息、17:30 後晚餐。皆為規劃，列車及接駁營運、價格尚待確認。保留長輩階梯與彈性折返提醒。同步更新 Day 1 交通確認、首頁入口、交通、預約提醒、費用與待辦。文件內私人姓名、訂位代號、訂單及郵件連結不匯入。先前移除的館舍維持移除。

## 日文口袋手冊（2026/10/21）

景點、車站、港口與住宿顯示日文名稱、假名與赫本式羅馬字。資料集中於 src/language.js；地圖搜尋字串維持精確地點與地址。行前頁提供 33 句常用日文、繁體中文用途說明、羅馬字、搜尋與日文複製功能；支援既有 PWA 離線快取。ā ī ū ē ō 表長音，雙子音表示促音，助詞 は／を／へ 按讀音 wa／o／e 標示。官方名稱參照金刀比羅宮、香川觀光協會與 Benesse 公開網站；羅馬字為發音輔助，不代表新的預約或時程。

## 獨立日文小手冊（v6）

網址 #japanese，頂部及手機底部「日文」入口、首頁與行前頁皆可開啟。111 句分為 12 情境，區分旅客要說的與對方可能說的，皆有日文、假名、羅馬字、中文與使用說明。支援搜尋、情境切換、對話方向篩選、日文複製、分類展開與離線查看。資料在 src/handbook.js，介面在 JapaneseHandbook.jsx。句子為溝通範例，不代表實際預約或店家的保證回答。

## 景點與行程情境題（v7）

日文小手冊新增「行程情境題／景點日文／常用短句」三入口。16 題依五天實際行程設計，含三選一、即時回饋、可展開的雙向模擬對話、日文假名與羅馬字、複製及地圖。景點字典依行程與附加景點產生，並保留第四天琴平路線。資料在 src/scenarios.js，可依日期和關鍵字查詢；不把模擬回答當成預約確認或運航保證。

## 第一晚晚餐更新（v8）

依旅客確認與提供憑證，11/02 18:30、3 位成人，大衆焼肉しんすけ トキワ新町店，地址香川県高松市瓦町1丁目10-16，狀態已確認。購物規劃調整為 16:30–17:45，預留前往晚餐交通。用餐長度、套餐、餐費與付款細節未提供，不自行估列；取消退款以原始憑證為準。新增餐廳讀音、預約摘要及入店情境題。私人姓名、訂位編號及截圖不收進公開專案。店名及地址參照[餐廳官方交通頁](https://shinsuke-yakiniku.com/access/)，注意為トキワ新町店，非鍛冶屋町店。

## 第四天和船更新（v9）

依旅客提供預約通知：11/05 南湖第 27 便、15:30、成人 3 人、¥2,550，當日現場付款。15:00 前須完成購票，逾時預約失效；入園費另計。依旅客同意縮短逛街，暫排 08:00 出發琴平、上午參拜、11:30 午餐、約 13:00 離開琴平、14:30 前抵園。列車尚待查，不宣稱已確認班次。已知費用合計 ¥40,350，含巴士、兩組美術館票與和船，不代表全部已付款或完整旅行費用。原始預約姓名、電話、Email、編號及截圖不公開。官方查核：https://www.my-kagawa.jp/ritsuringarden/feature/ritsuringarden/wasen 。

## JR 單程更新（v10）

11/05 特急 SHIMANTO 3／しまんと3号，高松 08:25→琴平 09:00，指定席、3 位成人，已預訂。憑證支付金額 ¥12,607 計入已知費用（合計 ¥52,957，非完整總費用）；不當作一般 JR 定價。領票需查看私人 NAVITIME 確認頁，不收錄含申請識別碼的網址、QR Code、姓名、電話、Email。回程 JR 未訂到，琴電琴平→栗林公園站為備案，現行官網 13:12 高松築港行作候選，未購票；出發當日再確認。查核來源：https://www.kotoden.co.jp/publichtm/sp/main/k21.html 。目標 14:30 抵園，和船購票期限 15:00 不變。

## 行前核對與天氣（v11，2026/10/25）

preparation.js 為待辦唯一來源，按最優先、出發前、前晚當天與已完成預約分組。10 項有憑證的預約預設勾選；付款、領票、交通確認另列未完成。採穩定 ID 和 localStorage v2，保留可對應的舊待辦勾選，不將舊混合項目誤當新付款或取票完成。通知按五天整理。weather.js 是 10/25 查核之 tenki.jp 高松市兩週預報快照，非即時／非各島獨立預報；日期超過查核日即顯示過期提醒，附氣象廳與渡輪官方連結。11/05 降雨 50%、可信度 E，未宣稱當日必雨或船班必開。天氣來源：https://tenki.jp/forecast/8/40/7200/37201/10days.html 。

## 最新採用行程（v12，2026/10/26）

依旅客決定：D1 改栗林公園約 15:00–16:30，取消三越與商店街購物，回飯店入住休息，18:30 晚餐不變。D1 到園詢問原 11/05 和船取消；原通知要求電話取消，現場能否受理待詢，不能視為已取消。D4 保留 JR 08:25–09:00，全天悠閒琴平，午餐、散步與咖啡依體力，回程琴電不再綁定 13:12 或和船期限。D5 約 08:00–08:45 玉藻公園西門短逛，目標 09:00–09:15 回飯店拿行李退房；機場交通優先，必要時略過，不加 Sunport。

原和船 ¥2,550 從預計支出移除（已知金額現為 ¥50,407），保留待取消預約紀錄，未宣稱已取消或已退款。待辦將和船付款改為新 ID 的取消待辦，舊勾選不會誤認取消完成。通知、交通與日文練習同步更新。天氣仍是 10/25 舊快照，須自行開來源重查。開園時間查核：栗林公園 https://ritsuringarden.com/ritsurin/ ；玉藻公園 https://www.city.takamatsu.kagawa.jp/kurashi/kurashi/shisetsu/park/tamamo/bunzai2018060.html 。

## 旅客介面內容規範

各頁只陳述目前行程與有效預約狀態，不顯示版本號、歷史安排或更換理由。D1 為栗林公園、飯店休息、計程車至壹番街圓頂廣場、丸龜町短段、18:30 確認晚餐；商店街可略過，D5 玉藻公園保留。五個選店方向依商店街官方名錄 https://kame3.jp/shoplist/ 整理，未保證當天營業。和船取消是尚待辦理的預約管理事項。來源資料與日文情境保持一致，私人編號不公開。

D1 路線：飯店寄放行李→栗林公園→計程車至圓頂廣場→丸龜町短逛與咖啡休息→18:30 晚餐→回飯店入住。下午不安排飯店往返，晚餐後入住與最晚受理時間須先向飯店確認。

天氣資料：2026/10/26 查核日本氣象協會 tenki.jp 高松市頁面，來源發布 10/26 22:00（日本時間）。11/02 多雲轉晴 21/14°C、40%；11/03 晴時多雲 20/12°C、20%；11/04 晴時多雲 18/12°C、20%；11/05 晴轉多雲 20/11°C、20%；11/06 晴時多雲 21/11°C、20%、可信度 C。資料為靜態快照，非島嶼或山區獨立預報。
