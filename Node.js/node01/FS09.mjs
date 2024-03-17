import { createReadStream, createWriteStream } from "fs";

let rs = createReadStream("../video/movie.mp4");
let ws = createWriteStream("../video/moive4.mp4");

// let n = 0;
// chunk: 原檔案拆分成的小區塊，將被ws.write()逐一寫入
// rs.on("data", (chunk)=>{
//     n++;
//     console.log(`寫入中${n}`);
//     ws.write(chunk);
// });

// rs.on("end", ()=>{
//     console.log("複製完成");
// });

// 簡寫
rs.pipe(ws);