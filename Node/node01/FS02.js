const fs = require("fs");

const file1 = "./測試寫入2.txt";
const content1 = "松下問童子，言師採藥去";
// writeFileSync()讓檔案依撰寫順序執行
fs.writeFileSync(file1, content1);