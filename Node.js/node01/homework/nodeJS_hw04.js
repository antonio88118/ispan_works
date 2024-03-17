const fs = require("fs");
const path = require("path");

// 建立資料夾
if(!fs.existsSync("./zero")){
    try{
        fs.mkdirSync("./zero");
        console.log("建立資料夾成功");
    }catch(error){
        console.log("建立資料夾失敗" + error);
        return
    }
}

// 產生檔案
for(let i=1; i<=20; i++){
    let file1 = `./zero/work${i}.html`;
    let content1 = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>work${i}</title>
    </head>
    <body>
        <h1>這是第 ${i} 個 HTML 檔</h1>
    </body>
    </html>`;
    try{
        fs.writeFileSync(file1, content1);
        console.log("寫入成功");
    }catch(error){
        console.log("寫入失敗" + error);
        return
    }
}

// 檔案改名
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