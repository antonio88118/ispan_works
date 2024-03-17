import http from 'http';

const server = http.createServer((request, response)=>{
    response.setHeader("content-type", "text/html;charset=utf-8");
    response.end("Hello, server! 你好主機");
});

server.listen(9000, ()=>{
    console.log("伺服器已啟動，http://localhost:9000");
});