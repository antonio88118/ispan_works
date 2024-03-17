import { createWriteStream } from "fs";

// writeFile 的寫入檔案，是會先與檔案建立一次性的通道，寫入後就斷開連結
// 但有時候可能會需要寫入大檔案，這時候可能就會透過網路陸續傳入部分檔案
// 如果是使用了 wirteFile，那第一次寫入完後就會斷開連結，無法繼續寫入
const ws = createWriteStream("./連續寫入測試.txt");
ws.on("finish", ()=>{
    console.log("全部寫入完成");
});
ws.write("白日依山盡，\r\n");
ws.write("黃河入海流。\r\n");
ws.write("欲窮千里目，\r\n");
ws.write("更上一層樓。\r\n");
// 會執行ws.on()中finish事件的內容
ws.end();