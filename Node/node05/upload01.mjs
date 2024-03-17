import express from "express";
import multer from "multer";
import { dirname, extname, resolve } from "path";
import { fileURLToPath } from "url";
import { rename, renameSync } from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));


const upload = multer({dest: resolve(__dirname, "public")});

const app = express();

app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "views"));
app.use('/bootstrap', express.static(resolve(__dirname, 'node_modules/bootstrap/dist')));

app.get("/", (req, res)=>{
    res.send("主頁");
});

app.get("/form1", (req, res)=>{
    res.render("form1");
});

app.get("/form2", (req, res)=>{
    res.render("form2");
});

app.get("/form3", (req, res)=>{
    res.render("form3");
});

// form接收到的上傳檔案會交給upload.single()，()內填入input欄位的name
app.post("/upload1", upload.single("myFile"), (req, res)=>{
    let timestamp = Date.now();
    // 為檔案取新檔名 = 時間戳記 + 原檔副檔名
    let newFileName = timestamp + extname(req.file.originalname);
    renameSync(req.file.path, resolve(__dirname, "public/upload", newFileName));
    // body: 接收表單資料 ；file: 接收上傳檔案，可以用下面這行觀察表單的資料結構
    res.json({body: req.body, file: req.file});
});

// upload.array("name", 3) 接收多個檔案上傳，最多3個
app.post("/upload2", upload.array("myFile", 3), (req, res)=>{
    let myFiles = [];
    let timestamp = Date.now();
    req.files.forEach((file, index)=>{
        // 避免時間戳記相同，加上index
        let newFileName = (timestamp+index) + extname(req.files[index].originalname);
        renameSync(req.files[index].path, resolve(__dirname, "public/upload", newFileName));
        myFiles.push(newFileName);
    })
    req.body.myFiles = myFiles;
    // 多個檔案時，使用req.files
    res.json({body: req.body, file: req.files});
});

app.post("/upload3", upload.array("myFile[]", 3), (req, res)=>{
    let myFiles = [];
    let timestamp = Date.now();
    req.files.forEach((file, index)=>{
        let newFileName = (timestamp+index) + extname(req.files[index].originalname);
        renameSync(req.files[index].path, resolve(__dirname, "public/upload", newFileName));
        myFiles.push(newFileName);
    })
    req.body.myFiles = myFiles;
    // 多個檔案時，使用req.files
    res.json({body: req.body, file: req.files});
});

app.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000");
});