import {readFile} from "fs";

readFile("./連續寫入測試.txt", (error, successData)=>{
    if(error){
        console.log("讀入失敗");
        return false;
    }
    console.log("讀入成功");
    // 讀取出的內容是buffer的位元組格式，因此需要轉換成字串
    console.log(successData.toString());
});