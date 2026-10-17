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
- [四國水族館交通](https://shikoku-aquarium.jp/access/)：宇多津站北口步行約 12 分鐘。
- [四國水族館公告](https://shikoku-aquarium.jp/)：官網以「LIFE IN BULE」拼字公告展期 2026/11/05–2027/03/01；以後續公告為準。
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
