# ispan_works 資策會課程練習作品目錄&內容說明

## HTML5+CSS3+Bootstrap

- [HTML5](./HTML5+CSS3+Bootstrap/HTML5)
  - 課堂練習
  - 驗收作業：動漫人物介紹頁面、活動資訊頁面
- [CSS3](./HTML5+CSS3+Bootstrap/CSS3)
  - 課堂練習
  - 驗收作業：活動資訊頁面
- [Bootstrap](./HTML5+CSS3+Bootstrap/Bootstrap)
  - 課堂練習
  - 驗收作業：NinjaMail首頁製作

## [Javascript](./Javascript)

- **20231107 ~ 20231109**
  - 資料型別
  - 常數、變數、作用域、變數提升(hosting)
  - 陣列與陣列方法
  - 運算子
  - 條件判斷
  - 函式與立即執行函式(IIFE)
  - 數學物件(Math)
- **20231110**
  - 續 陣列方法
  - 物件
  - 重複流程結構
  - 傳值與傳址
  - callback function
  - call、apply與bind
- **20231113 ~ 20231114**
  - Date物件
  - setTimeout與setInterval，製作時鐘
  - BOM與DOM操作
- **20231115 ~ 20231116**
  - 箭頭函式
  - 正規表達式
  - 省略運算子與展開運算子
  - 事件處理-觀念：DOM0/2級事件、事件捕獲與冒泡
  - 事件處理-實作：變更DOM物件class內容、網頁計算機、表單輸入內容檢查

## [PHP & MySQL (搭配XAMPP)](./PHP)

- **CRUD技術集成**
  - [user](./PHP/user)：使用登入、註冊和使用者列表等介面，進行使用者資料增刪查改
  - [product](./PHP/product)
    - 使用商品與訂單列表介面，進行資料查詢
    - 簡易購物車(使用session)
- **20231117 ~ 20231121**
  - 基礎觀念：常數、變數、陣列與陣列函式、字串函式、運算子、條件判斷、重複流程結構
- **20231122 ~ 20231124**
  - 資料庫操作：新增資料表、新增/修改欄位、刪除欄位/索引
  - HTTP methods：GET、POST
  - CRUD：C/新增使用者、R/獲得所有使用者資料
- **20231129 ~ 20231130**
  - SQL語法：MAX/MIN、COUNT、GROUP BY
  - 認識儲存型與反射型XSS
  - cookie & session
  - 檔案處理：複製、上傳、讀取、取得檔案資訊、刪除
- **20231201**
  - 正規表達式(regexp)
  - try...catch語法
  - 使用AJAX發送GET/POST請求
  - PDO
 
## [jQuery](./jQuery)

- **驗收作業**
  - [作業1-表單驗證，變更未填欄位樣式](./jQuery/作業/作業1)
  - [作業2-透過點擊事件動態新增檔案上傳欄位](./jQuery/作業/作業2)
  - [作業3-點擊頁碼切換圖片與圖片輪播](./jQuery/作業/作業3)
  - [作業4-連接觀光資料.json，製作有100筆資料的景點資訊列表](./jQuery/作業/作業4)
- **20231225 ~ 20231226**
  - 選擇器
  - 滑鼠事件
  - 鍵盤事件
- **20231227**
  - 表單事件(搭配作業1)
  - 載入事件
  - 瀏覽器事件：視窗大小變化(resize)、捲動(scroll)
- **20231228 ~ 20240102**
  - 遍歷、篩選與節點操作(搭配作業3)
  - 方法(grep、inArray、isArray、makeArray、unique/sort、map、merge、parseHTML、data)
  - AJAX(搭配作業4)
  - [練習作品：樂透抽選、模擬信用卡號輸入，輸入完翻面](./jQuery/20231229)
- **20240103**
  - rotate、fade、silde
  - [練習作品：網頁射擊小遊戲](./jQuery/20240103/pageGame6.html)

## Node.js

- [node01 檔案操作](./Node/node01)
  - 認識ES6
  - 認識fs模組
  - 檔案
    - 寫入(writeFile/writeFileSync、appendFile、createWriteStream)
    - 讀取(readFile/readFileSync、createReadStream)
    - 修改檔名(rename/renameSync)
    - 刪除(unlick/rmSync)
  - 資料夾操作
    - 建立(mkdir)
    - 讀取(readdir)
    - 刪除(rmdir)
  - 查看檔案資訊(stat)
  - url與path模組
    - url：fileURLToPath
    - path：basename、dirname、extname、parse、resolve、sep
- [node02 http模組](./Node/node02)
  - createSever
  - response(setHeader、end)
  - 搭配檔案操作
- [node03 模組化練習](./Node/node03)
  - 練習拆解程式為模組
- [node04 Express](./Node/node04)
  - 認識路由(express01 ~ express02)
  - 取得要求訊息參數：req.method/url/httpVersion/headers(express03)
  - 取得路由參數(express04 ~ express05)
  - 一般回應設定：res.send/status/json/set/redirect/sendFile(express06)
  - middleware(express07 ~ express08)
  - 使用靜態資源(static)：引入Bootstrap、jQuery、自製html網頁(express09 ~ express12)
  - 防止連結資源盗用：req.get("referer")(express13)
  - 路由模組化：express.Router()(express14)
  - express generator(generator01)
- node05 樣板引擎-使用ejs
  - [使用ejs樣板建立網頁視覺](./Node/node05/ejs04.mjs)
  - 檔案上傳練習：[multer](./Node.js/node05/upload01.mjs)、[formiable](./Node/node05/upload02.mjs)
- node06 連接資料庫
  - Promise語法練習
  - [使用mysql2、mysql2/promise連接資料庫](./Node/node06/case01)
    - createConnection/createPool
- node07 ESLint、CORS與SESSION
  - 命令參數(argv)與環境參數(env)
  - ESLint練習
  - [製作簡易前後端，整合CORS、SESSION，連接資料庫並記錄使用者登入狀態](./Node/node07/loginsession)

## [React-NEXT](./React-NEXT)

- **cs-0124 ~ cs-0126**
  - JSX語法
  - 狀態(state)與不可改變性(immutability)、useState()
  - 條件渲染
  - 物件陣列的各種操作、根據陣列渲染(使用map)
  - 純函式
- **cs-0129**
  - 元件拆分練習：書籍資料列表與收藏
  - 使用屬性(props)傳值給子元件
- **cs-0130**
  - context練習：使用者登入/登出與記錄資訊
- **cs-0201 ~ cs-0205**
  - 可控與不可控表單(useRef())
  - [商品列表與購物車介面實作練習](./React-NEXT/pages/cs-0201/checkout)
  - useEffect()

## HTML5-API

- [FileReader](./HTML5-API/file)
  - 認識fileList
  - 讀取文字、影像、聲音格式檔案
  - 改變上傳檔案欄位樣式，可預覽上傳圖片
- [Web Storage](./HTML5-API/storage)
  - cookie使用練習
  - localstorage使用練習：模擬購物流程(商品列表-結帳)，購物車儲存於localstorage
- [Form](./HTML5-API/form)
  - 測試所有HTML5表單元素、屬性(pattern、step、autocomplete等)與自訂required提示(setCustomValidity())
  - 認識語意標籤<details>與<summary>，以及contenteditable屬性
  - [自製月曆輸入欄位介面](./HTML5-API/form/calendar.html)

## RESTful-API
- [完整API規劃](./RESTful-API/lowdb2)
  - 使用lowdb實作資料庫
  - 規劃並實作使用者資料增刪改查與登入等API
- [使用token驗證登入](./RESTful-API/loginToken)
  - 使用JWT實作
  - 製作前後端，實作使用者登入
- **WebSocket 線上聊天室**
  - [公共頻道聊天](./RESTful-API/websocket01)
  - [公共頻道聊天+悄悄話](./RESTful-API/websocket02_exam)
  - [公共頻道聊天+悄悄話+建立私人聊天室](./RESTful-API/websocket03)
