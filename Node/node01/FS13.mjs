import { stat } from "fs";

stat("../video/movie.mp4", (error, data)=>{
    if(error){
        console.log("讀取失敗");
        console.log(error);
    }else{
        console.log("讀取成功");
        console.log(data);
        console.log(data.isFile());
        console.log(data.isDirectory());
    }
});