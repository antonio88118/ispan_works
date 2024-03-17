import connection from "./db.mjs";
import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("首頁");
})

app.get("/d/:id", (req, res) => {
    let id = req.params.id;
    connection.execute(
        'SELECT * FROM `sort` WHERE `id` = ?',
        [id],
        (err, results, fields) => {
            let newResult = results.map(item=>{
                return {id: item.id, name: item.name}
            });
            res.json({result: newResult})
        }
    );
    // res.send("");
})

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
})

// let id = 5;
