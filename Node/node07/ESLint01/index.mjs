import express from 'express';
import moment from 'moment';
import connection from '../db.mjs';
import multer from 'multer';

// eslint-disable-next-line new-cap
const router = express.Router();
const upload = multer();

router.get('/', (req, res) => {
	const time = moment().format('YYYY-MM-DD');
	res.redirect('expense/d/' + time);
});

router.get('/d/:date', async (req, res) => {
// Res.send("讀取指定日期的消費");
	const {date} = req.params;
	const sort = await getSort().then(data =>
	// Resolve
		data,
	)
		.catch(() =>
		// Reject
			undefined,
		);
	// 依據傳入日期獲得當日消費內容
	const dateData = await getDateData(date).then(data => data).catch(() => {});
	// Console.log(dateData);
	if (sort && dateData) {
		res.render('index', {date, sort, dateData});
	} else {
		res.send('發生錯誤');
	}
});

router.post('/', (req, res) => {
	const {title} = req.body;
	const sort = parseInt(req.body.sort, 10);
	const money = parseInt(req.body.money, 10);
	const {date} = req.body.date;
	connection.execute(
		'INSERT INTO `expense` (`id`, `title`, `sort`, `money`, `date`) VALUES (NULL, ?, ?, ?, ?)',
		[title, sort, money, date],
		() => {
			res.redirect('/expense/d/' + date);
		},
	);
	// Res.send("新增指定日期的消費");
});

router.put('/', upload.none(), async (req, res) => {
	// 使用multer(upload)接收後轉換格式的表單資料，會存在req.body裡
	// console.log(req.body);
	// res.send("修改指定日期的消費");
	// 執行updateData
	const returnNum = await updateData(req.body).then(() => 1).catch(() => 0);
	res.json({returnNum});
});

router.delete('/', upload.none(), async (req, res) => {
	// Res.send("刪除指定日期的消費");
	// console.log(req.body.id);
	const returnNum = await deleteData(req.body).then(() => 1).catch(() => 0);
	res.json({returnNum});
});

// 用於產生下拉式選單的選項
function getSort() {
	return new Promise((resolve, reject) => {
		connection.execute(
			'SELECT * FROM `sort`',
			(error, results) => {
				if (error) {
					reject(error);
					return false;
				}

				const sort = results.map(item => ({
					id: item.id,
					name: item.name,
				}));
				resolve(sort);
			},
		);
	});
}

function getDateData(date) {
	return new Promise((resolve, reject) => {
		connection.execute(
			'SELECT * FROM `expense` WHERE `date` = ?',
			[date],
			(error, results) => {
				if (error) {
					reject(error);
					return false;
				}

				resolve(results);
			},
		);
	});
}

function updateData(data) {
	// eslint-disable-next-line prefer-destructuring
	const title = data.title;
	const sort = parseInt(data.sort, 10);
	const money = parseInt(data.money, 10);
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