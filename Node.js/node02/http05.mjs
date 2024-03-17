import http from "http";

// 方法二: 取網址參數
const server = http.createServer((request, response)=>{
    // NodeJS 官方推薦使用new URL的方法
    let url = new URL(request.url, "http://localhost");
    console.log(url.pathname);
    console.log(url.searchParams.get("name"));
    console.log(url.searchParams.get("password"));
    response.setHeader("content-type", "text/html;charset=utf-8");
    response.end("你好主機");
});

server.listen(9000, ()=>{
    console.log("伺服器已啟動 http://localhost:9000/");
});