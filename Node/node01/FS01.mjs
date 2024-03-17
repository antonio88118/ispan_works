// mjs的副檔名必定是使用ES6規範
// 引入成為全域變數
import { writeFile } from "fs";

const file1 = "./測試寫入ESM.txt";
const content1 = "松下問童子，言師採藥去";
console.log("1 寫入開始");
// {flag: "a / w"}
// a: 內容附加到檔案的尾部，而不是覆蓋檔案中已有的內容。這意味著如果指定的檔案已存在，新的內容將被添加到現有內容的尾部。
// f: 預設行為，將內容寫入新的檔案中，如果檔案已存在，則會覆蓋原有內容。
writeFile(file1, content1,{flag: "a"}, (error)=>{
    if(error){
        console.log("2 寫入失敗");
        return false;
    }else{
        console.log("2 寫入成功");
    }
});
console.log("3 測試用字串");