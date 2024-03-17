import http from "http";
import { dirname, extname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { readFile, readFileSync } from 'fs';
// 定義副檔名，用於設定媒體類型
let mimes = {
    html: "text/html",
    css: "text/css",
    js: "text/javascript",
    png: "image/png",
    jpg: "image/jpeg",
    gif: "image/gif",
    mp4: "video/mp4",
    mp3: "audio/mpeg",
    json: "application/json"
  }
const __dirname = dirname(fileURLToPath(import.meta.url));

const server = http.createServer((request, response)=>{
    let {pathname} = new URL(request.url, "http://localhost");
    if(pathname === "/"){
        pathname = "/index.html";
    }
    // 根目錄
    let root = __dirname + "/pages";
    // pathname.substring(1)會取出去掉第一個字元(/)的字串(pages)
    let filePath = resolve(root, pathname.substring(1));
    // 取得去掉.的副檔名 ex: js
    let ext = extname(filePath).slice(1);
    let type = mimes[ext];
    readFile(filePath, (error, data)=>{
        if(error){
            response.statusCode = 500;
            response.setHeader("content-type", "text/html;charset=utf-8");
            response.end("<h1>文件讀取失敗</h1>");
        }else{
            if(type){
                if(type === "html"){
                    response.setHeader("content-type", type+";charset=utf-8");
                }else{
                    response.setHeader("content-type", type);
                }
            }else{
                response.setHeader("content-type", "application/octet-stream");
            }
            response.end(data);
        }
    });
});

server.listen(9000, ()=>{
    console.log("伺服器已啟動 http://localhost:9000/");
});