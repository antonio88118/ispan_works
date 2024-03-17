import express from "express";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
// A Node.js module for parsing form data, especially file uploads.
import formidable from "formidable";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(resolve(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "views"));
app.use('/bootstrap', express.static(resolve(__dirname, 'node_modules/bootstrap/dist')));

app.get("/", (req, res)=>{
    res.send("主頁");
})

app.get("/form1", (req, res)=>{
    res.render("form1");
})

app.get("/form2", (req, res)=>{
    res.render("form2");
})

app.post("/upload1", (req, res, next)=>{
    // formidable({uploadDir, keepExtensions})
    const form = formidable({
        // 指定儲存路徑，未指定會儲存在本地的temp
        uploadDir: resolve(__dirname, "public/upload"),
        // 保留副檔名
        keepExtensions: true
    });

    // fields儲存表單內容，files儲存上傳檔案資訊
    form.parse(req, (error, fields, files)=>{
        if(error){
            next(error);
            return false;
        }
        res.json({fields, files});
    })
})

app.post("/upload2", (req, res, next)=>{
    const form = formidable({
        uploadDir: resolve(__dirname, "public/upload"),
        keepExtensions: true,
        // 允許多檔上傳
        multiples: true
    });

    form.parse(req, (error, fields, files)=>{
        if(error){
            next(error);
            return false;
        }
        res.json({fields, files});
    })
})

app.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000");
})