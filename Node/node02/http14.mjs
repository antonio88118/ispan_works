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
            response.setHeader("content-type", "text/html;charset=utf-8");
            switch(error.code){
                case "ENOENT":
                    response.statusCode = 404;
                    response.end("<h1>找不到頁面</h1>");
                    break;
                default:
                    response.statusCode = 500;
                    response.end("<h1>文件讀取失敗</h1>");
            }
        }else{
            if(type){
                if(type === "html"){
                    response.setHeader("content-type", type+";charset=utf-8");
                }else{
                    // 其他檔案類型沒有文字編碼問題，不須加上charset=utf-8
                    response.setHeader("content-type", type);
                }
            }else{
                // 沒有用type定義的副檔名，使用application/octet-stream設定為下載檔案
                response.setHeader("content-type", "application/octet-stream");
            }
            response.end(data);
        }
    });
});

server.listen(9000, ()=>{
    console.log("伺服器已啟動 http://localhost:9000/");
});