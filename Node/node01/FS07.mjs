import { createReadStream } from "fs";

const rs = createReadStream("../video/movie.mp4");
rs.on("data", (chunk)=>{
    // 列出讀取資料的位元數
    console.log(chunk.length);
});
rs.on("end", ()=>{
    console.log("讀取結束");
});