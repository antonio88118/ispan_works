import { readdirSync, renameSync } from "fs";
import path from "path";



let works = [];
if(works = readdirSync("./work")){
    console.log("讀取成功");
    // console.log(works);
    works.forEach(work => {
        // console.log(work);
        // console.log(typeof(work));

        // 使用path.resolve()，組合出檔案所在資料夾+檔名的完整絕對路徑
        let filePath = path.resolve("work", work);
        // console.log(filePath);

        // 取出檔名中的數字部分，並把不足兩位數的在前面補0
        // match是符合正規表達式檢查的結果，在此即是數字1~20
        const newName = work.replace(/\d+/, (match) => match.padStart(2, '0'));
        console.log(newName);
        renameSync(filePath, path.resolve("work", newName));
    });
    console.log("更新成功");
}else{
    console.log("讀取失敗");
}
