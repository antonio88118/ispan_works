// 條件渲染
import ejs from "ejs";
import { readFileSync } from "fs";
let user = {
    name: "Miguel Austin",
    img: "https://randomuser.me/api/portraits/men/30.jpg"
}

// if(user){
//     console.log(`
//         <img src="${user.img}"><span>${user.name}</span>
//         <button>登出</button>
//     `);
// }else{
//     console.log(`<button>註冊</button> <button>登入</button>`);
// }

let template = readFileSync("./template03.html").toString();
let result = ejs.render(template, {user});

// trim() 方法會移除字串起始及結尾處的空白字元，其包括所有空格字元（如：空格、欄標、無間斷空格等等）及換行字元（如：換行、回車等等）。
console.log(result.trim());