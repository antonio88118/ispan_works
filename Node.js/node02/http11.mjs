import http from "http";
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { readFile, readFileSync } from 'fs';
const __dirname = dirname(fileURLToPath(import.meta.url));

const server = http.createServer((request, response)=>{
    let {pathname} = new URL(request.url, "http://localhost");
    if(pathname === "/"){
        pathname = "/index.html";
    }

    let filePath = resolve(__dirname, "pages", pathname.substring(1));
    readFile(filePath, (error, data)=>{
        if(error){
            response.statusCode = 500;
            response.setHeader("content-type", "text/html;charset=utf-8");
            response.end("<h1>文件讀取失敗</h1>");
        }else{
            response.end(data);
        }
        
    });

    // if(pathname === "/"){
    //     let htmlContent = readFileSync(resolve(__dirname, "pages/index.html"));
    //     response.end(htmlContent);
    // }else if(pathname === "/css/main.css"){
    //     // test.css
    //     let cssContent = readFileSync(resolve(__dirname, "pages", "/css/main.css"));
    //     response.end(cssContent);
    // }else if(pathname === "/js/main.js"){
    //     // test.js
    //     let jsContent = readFileSync(resolve(__dirname, "pages", "js/main.js"));
    //     response.end(jsContent);
    // }else if(pathname === "/images/23_HBD_Pikmin_1920_1080.jpg"){
    //     // test.js
    //     let imageContent = readFileSync(resolve(__dirname, "pages", "images/23_HBD_Pikmin_1920_1080.jpg"));
    //     response.end(imageContent);
    // }else{
    //     // 404
    //     response.setHeader("content-type", "text/html;charset=utf-8");
    //     response.end("<h1>找不到檔案</h1>")
    // }
});

server.listen(9000, ()=>{
    console.log("伺服器已啟動 http://localhost:9000/");
});