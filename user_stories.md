# User Stories for Web Podcast Player

這份文件以使用者故事（User Story）方式描述開發步驟，將功能拆解為可逐步實作的單位。故事將依照重要性與複雜度排序，從最基本功能開始。

## Story 1: 基本訂閱
- **角色**：一般使用者
- **需求**：希望能從推薦清單或自行輸入 RSS 連結來訂閱 Podcast 節目。
- **理由**：方便快速建立個人的收聽清單。

## Story 2: 瀏覽節目與單集
- **角色**：已訂閱的使用者
- **需求**：能在側邊欄看到已訂閱節目，並在主區域瀏覽該節目的單集列表。
- **理由**：讓使用者可以輕鬆找到想聽的單集。

## Story 3: 播放單集
- **角色**：收聽者
- **需求**：點擊單集後能播放，並提供播放、暫停與進度條。
- **理由**：最基礎的收聽體驗。

## Story 4: 進度記錄
- **角色**：長期收聽者
- **需求**：播放器每隔數秒記錄當前播放進度，下次開啟能自動繼續。
- **理由**：方便中斷後再回來收聽。

## Story 5: 離線下載
- **角色**：需離線收聽的使用者
- **需求**：在單集列表中提供下載按鈕，可將音檔存至本機並顯示下載進度。
- **理由**：在沒有網路時仍可收聽。

## Story 6: 安裝為 PWA
- **角色**：常用者
- **需求**：網站具備 PWA 能力，可加入主畫面並離線啟動。
- **理由**：提供近似原生 App 的體驗。

