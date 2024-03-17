import express from "express";

const app = express();

app.get("/", (req, res)=>{
    res.send("這是首頁");
})

app.get("/p/:id/", (req, res)=>{
    let id = req.params.id;
    let contentText = "";
    console.log(id);
    if(id === "CvRz0e3Awmi"){
        contentText = "ぷるんぷるんすぎるマシュマロアイス(Too plump marshmallow ice cream in Japan)》";
    }else if(id === "CvZP-PIguWG"){
        contentText = "《浅草で一番おすすめしたい抹茶クレープ(The most recommended matcha crepe in Asakusa)》";
    }
    res.send(contentText);
})

app.get("/users/:userID?/", (req, res)=>{
    let userID = req.params.userID;
    console.log(userID);
    res.send(`Hello, ${(req.params.userID) ? req.params.userID : "Guest"}`);
})

app.listen(3000, ()=>{
    console.log("server is runninig at http://localhost:3000");
})