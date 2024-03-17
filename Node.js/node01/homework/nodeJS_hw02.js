const fs = require("fs");

for(let i=1; i<=20; i++){
    fs.renameSync(`./work${i}.html`,`./work/work${i}.html`);
    console.log(`搬運中，第 ${i} 筆`);
}
console.log("搬運完成");