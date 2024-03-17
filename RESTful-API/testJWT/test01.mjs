import jwt from "jsonwebtoken";
const secrectKey = 'iamantonio';

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
