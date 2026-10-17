# 交付驗證紀錄

2026/10/17

## GitHub Pages 空白頁修復

- 線上 Repository 原先僅有開發用 index.html，直接引用 /src/main.jsx；未提供 Vite 建置產物。
- Vite 預設 base 固定為 /takamatsu-trip/，仍可用 VITE_BASE_PATH 覆寫。
- 新增 package-lock.json；已實際執行 npm ci、npm test（3/3）、npm run build。
- build 現在包含 scripts/verify-build.mjs：拒絕開發入口並檢查正式 JS、CSS、本地圖片、manifest、PWA 快取。
- 正式版以 http://127.0.0.1:4174/takamatsu-trip/ 測試，HTML、JS、CSS、圖示、manifest、sw.js 皆為 200。
- 390×844 手機 viewport 五日切換顯示 7/9/5/5/4 張行程卡，圖片載入成功、沒有水平溢出，瀏覽器未記錄 warning/error。
- 發佈前掃描未發現旅客提供的真實訂位代碼或常見 GitHub/API key、私鑰格式。
- GitHub Pages Source 已從 Deploy from a branch 改為 GitHub Actions；雲端部署結果以後續紀錄為準。

- pnpm 鎖檔安裝成功；esbuild 的建置腳本已明確列入 allowBuilds。
- Node 資料測試 3/3 通過：五日日期、必要欄位、圖片檔案、Google Maps query、待確認狀態。
- Vite production build 成功，根路徑與 `/takamatsu-trip/` 子路徑皆通過。
- 產出 Service Worker、manifest、PNG 安裝圖示；快取包含應用程式與全部五張插畫。
- 本地 HTTP 首頁及安裝圖示回傳 200。
- 瀏覽器桌面首頁視覺檢查；390×844 手機版日期切換、底部導航、預約展開操作正常。
- 勾選行程後重新整理，完成數維持 1/9；日期選擇保留。
- 預約使用 DEMO-TRIP 測試字串，儲存、複製回讀成功，並清除測試編號。
- 費用輸入 1,000 後由 29,400 加總至 30,400，測試後已清除；待辦可勾選取消。

尚未執行：真實手機 PWA 安裝、飛航模式完整驗收、GitHub Actions 雲端執行與 GitHub Pages 實際發佈。請依 README 部署後完成這些檢查。地圖 query 已檢查格式，尚未逐一現場驗證定位；官方連結不是訂單驗證。
