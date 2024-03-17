import { writeFileSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

// node.js中直接使用 __dirname的用法已被移除
writeFileSync(__dirname+"/test.html", "test test 123");