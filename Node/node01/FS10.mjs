import { rename, renameSync } from "fs";

// rename("./登鸛雀樓.txt", "./text/登鸛雀樓.txt", (error)=>{
//     if(error){
//         console.log("更名失敗");
//         return false;
//     }
//     console.log("更名成功");
// });
renameSync("./text/登鸛雀樓.txt", "./text/登鸛雀樓2.txt");