import express from "express";
import multer from "multer";
import moment from "moment";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import users from "./users.mjs";

const upload = multer();
dotenv.config();
const secretKey = process.env.SECRET_KEY;

// 設定允許互動的網域，讓port 3000  和 5500間可以互動
const whitelist = [
	'http://localhost:5500',
	'http://localhost:3000',
	'http://127.0.0.1:5500',
	undefined,
];
const corsOptions = {
	credentials: true,
	origin(origin, callback) {
		if (whitelist.includes(origin)) {
			callback(null, true);
		} else {
			callback(new Error('不允許傳遞資料'));
		}
	},
};

const app = express();

// middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("首頁");
});

// 登入
app.post("/api/users/login", upload.none(), (req, res) => {
	// 接收欄位輸入值: account 跟 password
	const {account, password} = req.body;
	// 核對是否存在對應資料
	const user = users.find(item => item.account === account && item.password === password);
	// console.log(user);

	if (user) {
		// jwt.sign()核發token
		// 參數1: token中包含的資料，此處是user資料；參數2:用於加/解密的密鑰；參數3:option，這裡選擇填入有效時間 30 minutes
		const token = jwt.sign({
			account: user.account,
			name: user.name,
			mail: user.mail,
			head: user.head,
		}, secretKey, {expiresIn: "30m"});

		// 回傳結果，token在往後所有的動作中，都將扮演驗證的關鍵角色
		res.status(200).json({
			status: 'success',
			token,
		});

	} else {
		res.status(400).json({
			status: 'error',
			message: '使用者帳號或密碼錯誤',
		});
	}
});

// 登出
app.post("/api/users/logout", checkToken, (req, res) => {
	// 解析結果中的 iat 代表toekn建立時間(自1970算起)，exp 代表到期時間
	console.log(req.decoded);
	const user = users.find(item => item.account === req.decoded.account);

	if (user) {
		// 把token中的資料清空，並設定到期時間 -10s ，意即程式執行後會馬上到期
		const token = jwt.sign({
			account: "",
			name: "",
			mail: "",
			head: "",
		}, secretKey, {expiresIn: "-10s"});

		res.status(200).json({
			status: 'success',
			token,
		});
		
	} else {
		res.status(401).json({
			status: 'error',
			message: '登出失敗',
		});
	}
});

app.post("/api/users/status", checkToken, (req, res) => {
	const user = users.find(item => item.account === req.decoded.account);
	if (user) {
		const token = jwt.sign({
			account: user.account,
			name: user.name,
			mail: user.mail,
			head: user.head,
		}, secretKey, {expiresIn: "30m"});

		res.status(200).json({
			status: 'token ok',
			token,
		});
	} else {
		res.status(401).json({
			status: 'error',
			message: '請先登入',
		});
	}
    // res.status(200).json({message: 'login status checking success'});
});

app.listen(3000, ()=>{
    console.log("server at http://localhost:3000");
});

// middleware
function checkToken(req, res, next){
	// console.log(req.get("authorization"));

	// 使用express中的get方法，獲得header中的變數
	let token = req.get("Authorization");

	// Bearer是字串中第一個字，索引值=0
	// 另一個寫法: token.startWith("Bearer ") === true
	if (token && token.indexOf("Bearer ") === 0 ) {
		// 把Bearer 和後面實際的token字串分離
		token = token.slice(7);
		// 驗證token，使用secretKey還原token在sign之前的值
		jwt.verify(token, secretKey, (error, decoded) => {
			if (error) {
				return res.status(401).json({
					status: "error",
					message: "登入驗證失敗，請重新登入",
				});
			} else {
				// req.decoded是在req中定義的屬性
				req.decoded = decoded;
				next();
			}
		});
	} else {
		res.status(401).json({
			status: "error",
			message: "無登入驗證資料，請重新登入",
		})
	}
}
