import jwt from "jsonwebtoken";
import dotenv from "dotenv";
// 執行環境變數
dotenv.config();
const secrectKey = process.env.SECRET_KEY;

// const token = jwt.sign({userID: 'a12345'}, secrectKey);

const tokenString = jwt.sign({userID: 'a12345'}, secrectKey);

const token = jwt.verify(tokenString, secrectKey, (error, data) => {
    console.log(data);
    if (error) {
        console.log("token驗證失敗");
    } else {
        console.log("token驗證成功", data);
    }
});
