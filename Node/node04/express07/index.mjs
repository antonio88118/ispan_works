import express from "express";
import { fileURLToPath } from "url";
import * as fs from "fs";
import moment from "moment";
import { dirname, resolve } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

// middleware，必定有這3個參數
let logMiddleware = (req, res, next)=>{
    // 調出req物件內存在的元素
    let {path, ip} = req;
    let time =  moment().format("YYYY-MM-DDTHH:mm:ss");
    // fs.appendFile(目標文件, 寫入內容, 函數(必填))，會為文件增加新內容，檔案不存在時，會建立檔案
    fs.appendFile(resolve(__dirname, "access.log"),
        `${time} ${ip} ${path}\r\n`,
        (error)=>{console.log(error);}
    );
    next();
}

app.use(logMiddleware);

app.get("/", (req, res)=>{
    res.send("這是首頁");
})

app.get("/home", (req, res)=>{
    res.send("歡迎來到首頁");
})

app.get("/login", (req, res)=>{
    res.send("這是登入頁");
})

app.get("*", (req, res)=>{
    res.status(404)
        .send("<h1>404 - Not Found</h1>");
})

app.listen(3000, ()=>{
    console.log("server is runninig at http://localhost:3000");
})