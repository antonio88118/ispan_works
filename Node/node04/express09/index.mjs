import express from "express";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(resolve(__dirname, "public")));

app.get("/", (req, res)=>{
    res.send("首頁");
})

app.get("/login", (req, res)=>{
    res.send("首頁");
})

app.listen(3000, ()=>{
    console.log("server is runninig at http://localhost:3000");
})