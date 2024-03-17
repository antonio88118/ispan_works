function sayMyName(){
    console.log("Kenny");
}
function sayMyConutry(){
    console.log("Taiwan");
}
// 匯出方式一
// module.exports = {
//     sayMyName: sayMyName,
//     sayMyConutry: sayMyConutry
// };

// 匯出方式二
exports.sayMyName = sayMyName;
exports.sayMyConutry = sayMyConutry;