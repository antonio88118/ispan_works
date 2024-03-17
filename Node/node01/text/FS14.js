const fs = require("fs");
// __dirname: 當前檔案所在路徑
fs.writeFileSync(__dirname+"/test.html", "abc abc 123");
console.log(__dirname);