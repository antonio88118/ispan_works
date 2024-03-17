import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

// console.log(process.env);

const db = await mysql.createPool({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER1,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0
});

const [results, fields] = await db.execute(
    "SELECT * FROM `sort` WHERE `id` = ?",
    [20]
).catch(error => {
    console.log(error);
    // 回傳空陣列
    return [[], []];
});

console.log(results);