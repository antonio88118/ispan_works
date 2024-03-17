import express from "express";
import { dirname, extname, resolve } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use((req, res, next)=>{
    let referer = req.get("referer");
    let ext = extname(req.url);
    if(ext){
        // 取得去掉 . 的副檔名，換成全大寫
        ext = ext.slice(1).toUpperCase();
        // 檢查是否請求圖檔
        if(ext === "JPG" || ext === "PNG"){
            // 檢查是否存在referer
            if(referer){
                let {hostname} = new URL(referer);
                // hostname = localhost or 127.0.0.1
                console.log(hostname);
                // 是否來自允許的host
                if(hostname !== "127.0.0.1"){
                    res.redirect("https://www.lifewire.com/thmb/auk-givypeTY383aFHJnpl6fQSU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/404-not-found-error-explained-2622936-Final-fde7be1b7e2e499c9f039d97183e7f52.jpg");
                    return false;
                }
            }
        }
    }
    next();
})

// 須顧及執行緒，先檢查hostname
app.use(express.static(resolve(__dirname, "public")));

app.get("/", (req, res)=>{
    res.send("這是首頁");
})

app.listen(3000, ()=>{
    console.log("server is runninig at http://localhost:3000");
})