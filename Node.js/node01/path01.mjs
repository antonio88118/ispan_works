import { basename, dirname, extname, parse, resolve, sep } from "path";
import { fileURLToPath } from "url";

console.log(sep);
// resolve把一系列路徑解析成絕對路徑
console.log(resolve("test.txt"));
// parse把路徑解析成物件
console.log(parse(import.meta.url));

console.log(parse(fileURLToPath(import.meta.url)));
console.log(basename("/Users/test/Desktop/demo.txt"));
console.log(dirname("/Users/test/Desktop/demo.txt"));
console.log(extname("/Users/test/Desktop/demo.txt"));