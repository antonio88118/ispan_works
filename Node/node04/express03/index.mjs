import express from "express";

const app = express();

app.get("/", (req, res)=>{
    res.send("這是首頁")
})

app.get("/request", (req, res)=>{
    res.send("測試取得要求的訊息");
    // GET
    // console.log(req.method);
    // /request
    // console.log(req.url);
    // 1.1
    // console.log(req.httpVersion);
    // localhost:3000
    // console.log(req.get("host"));
    // /request
    console.log(req.path);
    // {}
    console.log(req.query);
    // ::1
    console.log(req.ip);

})

app.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000");
})