import express from "express";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
let user;

// 設定視覺樣板引擎使用ejs格式
app.set("view engine", "ejs");
// 設定視覺樣板來自views資料夾
app.set("views", resolve(__dirname, "views"));
app.use('/bootstrap', express.static(resolve(__dirname, 'node_modules/bootstrap/dist')));
app.use('/jquery', express.static(resolve(__dirname, 'node_modules/jquery/dist')));

app.get("/", (req, res)=>{
    res.send("主頁");
});

app.get("/test1", (req, res)=>{
    let name = "Andy";
    let str = "Hello world !";
    res.render("test1", {name, str})
});

app.get("/test2", (req, res)=>{
    const blackpink = ["Jennie", "Jisoo", "Lisa", "Rosé"];
    res.render("test2", {blackpink})
});


app.get("/test3", (req, res)=>{
    res.render("test3", {user})
});

app.get("/login", (req, res)=>{
    user = {
        name: "Miguel Austin",
        img: "https://randomuser.me/api/portraits/men/30.jpg"
    }
    res.redirect("/test3");
});

app.get("/logout", (req, res)=>{
    user = undefined;
    res.redirect("/test3");
});

app.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000");
});