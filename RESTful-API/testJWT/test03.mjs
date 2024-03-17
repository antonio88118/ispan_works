import jwt from 'jsonwebtoken';

const secretKey = process.argv[2];

const tokenString = jwt.sign({userID: 'a12345'}, secretKey);

const token = jwt.verify(tokenString, secretKey, (error, data) => {
    if(error){
        console.log("Token 驗證失敗");
    }else{
        console.log("Token 驗證成功", data);
    }
})