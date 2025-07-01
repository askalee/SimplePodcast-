# Web Podcast Player 規格書 (草稿 v0.1)

## 專案概覽

**目的**：在瀏覽器端提供一套 Podcast 播放器，支援訂閱、離線下載及播放進度記錄，並可直接部署於 GitHub Pages。

**核心理念**：離線優先（Offline-First）、本機儲存（Local-Only）、無伺服器（Serverless），未來可再擴充雲端同步。

---

## 目標與非目標

| 項目 | 說明 |
| ---- | ---- |
| ✅ 目標 | • 訂閱 RSS/Atom Podcast Feed <br>• 顯示與搜尋節目/單集 <br>• 下載單集至本機並離線播放 <br>• 追蹤每一集的播放進度 <br>• PWA 安裝、離線啟動 <br>• 部署於 GitHub Pages，僅使用靜態資源 |
| ❌ 非目標 | • 跨裝置同步（可列入未來工作） <br>• 使用伺服器端資料庫 <br>• 付費或會員機制 |

---

## 功能需求

### 1. 訂閱管理
- 新增訂閱：輸入 RSS 連結或從預設推薦清單選擇。
- 刪除 / 暫停更新
- OPML 匯入 / 匯出（選擇性）

### 2. 節目與單集瀏覽
- 顯示節目封面、描述、最新發布日期。
- 按發布時間 / 未聽完排序。

### 3. 播放與進度追蹤
- 基於 `<audio>` 播放，支援前/後 30 秒跳轉、倍速。
- 使用 Media Session API 讓鎖屏/藍牙控制鍵可用。
- 每 10 秒自動寫入當前播放秒數。

### 4. 離線下載
- 單集列表可點擊「下載」；顯示即時進度條。
- 已下載單集離線可播放；可一鍵刪除釋放空間。

### 5. PWA 能力
- `manifest.json` 提供 Icon、名稱、顏色。
- 首次載入後即能離線啟動。
- 可被「加入主畫面」並獨立運行。

---

## 非功能需求
- **效能**：首頁 LCP < 2.5s（桌面）
- **儲存配額**：預設限制 500 MB，可在設定頁調整。
- **可存取性**：符合 WCAG 2.1 AA；鍵盤可操作。
- **多裝置支援**：Chrome、Edge、Safari（iOS 需偵測並降級無下載）。

---

## 技術設計

### 5.1 技術堆疊

| 層級 | 技術 | 說明 |
| ---- | ---- | ---- |
| UI | React + TypeScript + Vite | Vite 提供快速 build，React Component 化易維護 |
| 狀態管理 | Zustand (輕量) | 全域儲存使用者設定與播放狀態 |
| 路由 | React Router v6 | |
| Styling | Tailwind CSS | 快速樣式迭代；可配套 shadcn/ui 元件 |
| Service Worker | Workbox v7 | 產生 precache & runtime caching 策略 |
| 資料庫 | IndexedDB (idb wrapper) | 儲存訂閱、播放進度、下載檔資訊 |

### 5.2 前端架構

```
App (Layout)
 ├─ Sidebar (PodcastList)
 ├─ Main
 │   ├─ EpisodeList
 │   ├─ EpisodeDetail
```

---

## Tasks
以下清單可依開發進度勾選：

- [x] 初始化 Vite + React + TypeScript 專案
- [ ] 建立 Zustand 狀態管理結構
- [ ] 設計路由與基本頁面（Sidebar、EpisodeList、EpisodeDetail）
- [ ] 實作訂閱管理（新增、刪除／暫停、OPML 匯入／匯出）
- [ ] 撰寫 Podcast Feed 解析與節目／單集資料呈現
- [ ] 建立播放器元件，包含跳轉、倍速與 Media Session API
- [ ] 實作播放進度持續寫入 IndexedDB
- [ ] 加入單集下載、進度條與離線播放能力
- [ ] 建立 PWA manifest 與 Service Worker（Workbox）
- [ ] 控制儲存配額並提供刪除功能
- [ ] 確保 WCAG 2.1 AA 無障礙要求與多瀏覽器測試
- [ ] 部署至 GitHub Pages

