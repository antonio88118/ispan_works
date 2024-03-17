import { mkdir, readdir, rmdir } from "fs";
// make direction

// mkdir("./html", (error)=>{
// 建立多層資料夾，需使用遞迴參數
// mkdir("./a/b/c", {recursive: true}, (error)=>{
//     if(error){
//         console.log("建立資料夾失敗");
//         console.log(error);
//     }else{
//         console.log("建立資料夾成功");
//     }
// });

// 讀取當前資料夾
readdir("./", (error, data)=>{
    if(error){
        console.log("讀取資料夾失敗");
        console.log(error);
    }else{
        console.log("讀取資料夾成功");
        console.log(data);
    }
});

// a下面還有包其他資料夾，需使用遞迴
// rmdir("./a", {recursive: true}, (error)=>{
//     if(error){
//         console.log("刪除資料夾失敗");
//         console.log(error);
//     }else{
//         console.log("資料夾刪除成功");
//     }
// });