import {writeFileSync} from "fs";

const file1 = "./測試寫入2ESM.txt";
const content1 = "松下問童子，言師採藥去";
// writeFileSync()讓檔案依撰寫順序執行(同步)
writeFileSync(file1, content1);