import mysql from "mysql2/promise";

const db = await mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "admin",
    password: "12345",
    database: "nodejs",
    // 無可用連線時是否等待pool連線釋放(預設為true)
    waitForConnections: true,
    // 連線池可建立的總連線數上限(預設最多為10個連線數)
    connectionLimit: 5,
    // 等待連線的數量上限(無上限)
    queueLimit: 0
});

const [results, fields] = await db.execute(
    "SELECT * FROM `sort` WHERE `id` = ?",
    [6]
).catch(error => {
    console.log(error);
    // 回傳空陣列
    return [[], []];
});

console.log(results);