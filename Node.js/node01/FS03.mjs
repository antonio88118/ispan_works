import { appendFile } from "fs";

// 附加內容
const file1 = "./測試寫入2.txt";
const content1 = "\r\n只在此山中，雲深不知處。";
appendFile(file1, content1, (error)=>{
    if(error){
        console.log("寫入失敗");
        return false;
    }else{
        console.log("寫入成功");
    }
})