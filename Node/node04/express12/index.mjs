import bodyParser from "body-parser";
import express from "express";
import { dirname, resolve, join } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
// import bodyParser from "body-parser";

const app = express();

app.use(express.static(resolve(__dirname, "public")));
app.use("/bootstrap" ,express.static(join(__dirname, "node_modules/bootstrap/dist")));
app.use("/fontawesome" ,express.static(join(__dirname, "node_modules/@fortawesome/fontawesome-free")));
app.use("/jquery" ,express.static(join(__dirname, "node_modules/jquery/dist")));

// body-parser已被express買下，導入express即可調用
// urlencoded -> 接收表單資料
// const jsonParser = bodyParser.json()
// const urlencodedParser = bodyParser.urlencoded({ extended: true })

// extended: true 展開內容
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    res.send("這是首頁");
})

app.get("/login", (req, res)=>{
    res.sendFile(resolve(__dirname, "public", "form.html"));
})

app.post("/login", (req, res)=>{
    // body-parser會把接收內容儲存在body裡
    console.log(req.body.id);
    res.send("取得使用者資訊");
})

app.listen(3000, ()=>{
    console.log("server is runninig at http://localhost:3000");
})