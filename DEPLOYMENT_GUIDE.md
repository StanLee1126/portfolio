# 建築作品集 - GitHub 網站發布與更新手冊 (Deployment Guide)

恭喜您選擇了最專業且一勞永逸的做法！透過 GitHub，您未來的更新都會變得像是「雲端存檔」一樣簡單，且擁有專屬的工程師級網址。請跟著以下步驟進行：

---

## 階段一：準備工具（只需做一次）

1. **註冊 GitHub 帳號**
   - 前往 [GitHub 官網 (https://github.com)](https://github.com) 註冊一個免費帳號。
   - ⚠️ **強烈建議**：您的「Username（使用者名稱）」請慎重挑選，因為它將會成為您作品集網址的一部分（例如：`stanlee-arch.github.io`）。

2. **下載 GitHub Desktop**
   - 前往 [GitHub Desktop 官網 (https://desktop.github.com)](https://desktop.github.com) 下載並安裝。
   - 安裝完成後開啟軟體，使用您剛剛註冊的 GitHub 帳號登入 (Sign In)。

---

## 階段二：將電腦裡的資料夾變成「版本庫」

1. 開啟 GitHub Desktop 軟體。
2. 在左上角的選單點擊 **File** ➡️ **Add local repository...** (新增本機儲存庫)。
3. 點擊 **Choose...**，然後選取您的作品集資料夾（路徑：`C:\Users\StanLee\.gemini\antigravity\scratch\portfolio`）。
4. 此時軟體可能會跳出紅字警告說這不是一個 Git 儲存庫。請不用擔心，直接點擊下方藍字連結 **「create a repository」**（在此處建立儲存庫）。
5. 彈出的視窗中，名稱預設會是 `portfolio`，您可以保持原樣，直接點擊藍色按鈕 **Create repository**。
6. 恭喜！您已經成功將資料夾綁定成軟體工程師專用的版本庫了。

---

## 階段三：將網站推上雲端與發布 (Publish)

1. 在 GitHub Desktop 畫面的正上方或是正中間，您會看到一個藍色大按鈕寫著 **「Publish repository」**（發布儲存庫），請點擊它。
2. ⚠️ **【極度重要】**：彈出的視窗中，請務必將 **「Keep this code private (保持為私人)」的打勾取消！** （如果不取消，GitHub 會不允許免費帳號發布網頁）。
3. 點擊 **Publish repository**。稍等幾秒鐘，軟體就會把您的程式碼上傳到雲端。
4. **開啟您的 GitHub 網頁**：在瀏覽器登入您的 GitHub，點擊右上角的頭像進入「Your repositories」，您就會看到剛剛上傳的 `portfolio` 專案，點擊進入。

---

## 階段四：啟動 GitHub Pages (正式產生網址！)

1. 在您的 `portfolio` 專案網頁中，點擊偏右上角的 ⚙️ **Settings** (設定) 頁籤。
2. 在左側欄選單中往下滾，找到並點擊 **Pages**。
3. 在中間的 **Build and deployment** 區塊：
   - Source 維持在 `Deploy from a branch`。
   - Branch (分支) 的地方，點擊 `None`，選擇 **`main`**（或 master），然後旁邊維持 **`/(root)`**。
   - 點擊右邊的 **Save** 按鈕！
4. **大功告成！** 網頁最上方會出現類似這樣的字：「Your site is live at `https://您的帳號.github.io/portfolio/`」。
   *(註：初次設定後，雲端伺服器大約需要等待 1 到 3 分鐘處理，您可以泡杯咖啡後再點擊那個網址，您的網站就會出現在全世界面前了！)*

---

## 🔄 未來如何更新網站？(更新 3 步驟)

未來當您在這個電腦資料夾裡，修改了 `data.js` 的文字，或是丟入了新的照片，您只需要：
1. **開啟 GitHub Desktop**，您會在左側看到所有被您修改過的檔案。
2. **寫下更新紀錄**：在左下角的 Summary 框框裡，隨便寫一句話（例如：「更新 2026 新作品」）。點擊藍色按鈕 **Commit to main** (確認存檔)。
3. **推上雲端**：點擊畫面右上角的藍色按鈕 **Push origin**。
   
接著等個 1 分鐘讓雲端伺服器重新整理，您的專屬網址內容就會自動更新為最新版了！非常優雅且自動化。

---

## 🎨 常見問題：如何修改 About (關於我) 區塊的文字大小與顏色？

因為我們將網站改為「動態生成」以方便您後續只需要專注在 `data.js` 填寫資料就能自動更新畫面，所以 `index.html` 裡面 About 區塊的程式碼被移到了負責處理邏輯的 **`app.js`** 中。

若您想要調整 About 區塊的文字大小 (font-size)、顏色 (color) 或粗細 (font-weight)：
1. 請開啟 **`app.js`**。
2. 找到大約第 **14 ~ 36 行** 附近。
3. 您會看到我們在程式碼中特別標註了 `/* === 使用者請注意... === */` 的註解。
4. 直接修改 HTML 標籤內 `style="..."` 裡面的 CSS 數值即可。例如將 `color: #222;` 改成 `color: #0000FF;` 就能變為藍色，`font-size: 3rem;` 可以調大或調小。
