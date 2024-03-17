const fs = require("fs");

for(let i=1; i<=20; i++){
    let file1 = `./work${i}.html`;
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
        console.log("寫入失敗");
        console.log(error);
    }
}