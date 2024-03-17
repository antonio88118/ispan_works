import express from "express";

const app = express();

let checkCodeMiddleware = (req, res, next)=>{
    // http://localhost:3000/admin?code=
    if(!req.query.code){
        res.send("請輸入密碼");
    }else{
        if(req.query.code === "464"){
            next();
        }else{
            res.send("密碼錯誤");
        }
    }
}

app.get("/", (req, res)=>{
    res.send("這是首頁");
})

app.get("/home", (req, res)=>{
    res.send("前台首頁");
})

app.get("/admin", checkCodeMiddleware, (req, res)=>{
    res.send("後台首頁");
})

app.get("/setting", checkCodeMiddleware,(req, res)=>{
    res.send("後台設定頁");
})

app.all("*", (req, res)=>{
    res.status(404)
        .send("<h1>404 - Not Found</h1>");
})

app.listen(3000, ()=>{
    console.log("server is runninig at http://localhost:3000");
})