import ejs from "ejs";
import { readFileSync } from "fs";

let name = "Andy";
let str = "Hello world !";
// 使用toString()從buffer轉換成
let template = readFileSync("./template01.html").toString();
console.log(template);

// 要渲染的變數放在物件中傳入{name, str}
let result = ejs.render(template, {name, str});

console.log(result);