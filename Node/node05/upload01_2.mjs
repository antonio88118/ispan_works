import express from "express";
import { dirname, extname, resolve } from "path";
import { fileURLToPath } from "url";
import { rename, renameSync } from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));

import multer from "multer";
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, resolve(__dirname, "public/upload"));
    },
    filename: function(req, file, cb){
        if(!req.timestamp){
            req.timestamp = Date.now();
            req.index = 0;
            req.body.files = [];
        }else{
            req.index++;
        }
        let newName = (req.timestamp + req.index) + extname(file.originalname);
        cb(null, newName);
        req.body.files.push(newName);
    }
})
const upload = multer({storage: storage});

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

app.post("/upload1", upload.single("myFile"), (req, res)=>{
    res.json({body: req.body, file: req.file});
});

app.post("/upload2", upload.array("myFile", 3), (req, res)=>{
    res.json({xxx: req.body});
});

app.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000");
});