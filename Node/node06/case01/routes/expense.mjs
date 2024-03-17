import express from "express";
import moment from "moment";
import connection from "../db.mjs";
import multer from "multer";

const router = express.Router();
const upload = multer();

router.get("/", (req, res, next)=>{
    let time = moment().format("YYYY-MM-DD");
    res.redirect("expense/d/"+time);
});

router.get("/d/:date", async (req, res, next)=>{
    // res.send("讀取指定日期的消費");
    let date = req.params.date;
    let sort = await getSort().then((data) => {
        // resolve
            return data;
        })
        .catch((error) => {
            // reject
            return undefined;
        });
    // 依據傳入日期獲得當日消費內容
    let dateData = await getDateData(date).then((data)=>{
        return data;
    }).catch((error)=>{});
    // console.log(dateData);
    if(sort && dateData){
        res.render("index", {date, sort, dateData});
    }else{
        res.send("發生錯誤");
    }
});

router.post("/", (req, res, next)=>{
    let title = req.body.title;
    let sort = parseInt(req.body.sort, 10);
    let money = parseInt(req.body.money, 10);
    let date = req.body.date;
    connection.execute(
        "INSERT INTO `expense` (`id`, `title`, `sort`, `money`, `date`) VALUES (NULL, ?, ?, ?, ?)",
        [title, sort, money, date],
        (error, results) => {
            res.redirect("/expense/d/"+date);
        }
    )
    // res.send("新增指定日期的消費");
});

router.put("/", upload.none(), async (req, res, next)=>{
    // 使用multer(upload)接收後轉換格式的表單資料，會存在req.body裡
    // console.log(req.body);
    // res.send("修改指定日期的消費");
    // 執行updateData
    let returnNum =  await updateData(req.body).then(() => {
        return 1;
    }).catch(() => {
        return 0;
    });
    res.json({returnNum});
});

router.delete("/", upload.none(), async (req, res, next)=>{
    // res.send("刪除指定日期的消費");
    // console.log(req.body.id);
    let returnNum = await deleteData(req.body).then(() => {
        return 1;
    }).catch(() => {
        return 0;
    });
    res.json({returnNum});
});

// 用於產生下拉式選單的選項
function getSort(){
    return new Promise((resolve, reject)=>{
        connection.execute(
            "SELECT * FROM `sort`",
            (error, results) => {
                if(error){
                    reject(error);
                    return false;
                }
                let sort = results.map(item => {
                    return {
                        id: item.id,
                        name: item.name
                    }
                });
                resolve(sort);
            }
        );
    });
}

function getDateData(date){
    return new Promise((resolve, reject)=>{
        connection.execute(
            "SELECT * FROM `expense` WHERE `date` = ?",
            [date],
            (error, results)=>{
                if(error){
                    reject(error);
                    return false;
                }
                resolve(results);
            }
        );
    });
}

function updateData(data){
    let title = data.title;
    let sort = parseInt(data.sort, 10);
    let money = parseInt(data.money, 10);
    let id = parseInt(data.id);
    let date = data.date;
    return new Promise((resolve, reject)=>{
        connection.execute(
            "UPDATE `expense` SET `title` = ?, `sort` = ?, `money` = ?, `date` = ? WHERE `expense`.`id` = ?;",
            [title, sort, money, date, id],
            (error, results)=>{
                if(error){
                    reject(error);
                    return false;
                }
                resolve({result: "success"});
            }
        );
    });
}

function deleteData(data){
    let id = parseInt(data.id);
    return new Promise((resolve, reject) => {
        connection.execute(
            "DELETE FROM `expense` WHERE `expense`.`id` = ?;",
            [id],
            (error, results) => {
                if(error){
                    reject();
                    return false;
                }
                resolve();
            }
        );
    });
}

export default router;