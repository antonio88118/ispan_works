import express from 'express';
import cors from 'cors';
import multer from 'multer';
import session from 'express-session';
import db from './db.mjs';

const upload = multer();

// 允許名單
const whitelist = ['http://localhost:5500', 'http://127.0.0.1:5500', 'http://localhost:3000', undefined];
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
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({
	secret: 'mySecretKey',
	resave: false,
	saveUninitialized: true,
	cookie: {
		maxAge: 1200000,
	},
}));

app.get('/', (req, res) => {
	res.send('首頁');
});

app.post('/', upload.none(), async (req, res) => {
	const {userID, userPWD} = req.body;
	const [results] = await db.execute(
		'SELECT * FROM `users` WHERE `uid` = ? && `pwd` = ?',
		[userID, userPWD],
	).catch(error => {
		console.log(error);
		return [];
	});

	const user = results[0];
	// eslint-disable-next-line capitalized-comments
	console.log(user);

	if (user) {
		req.session.user = user;
		res.json({message: 'welcome', user});
	} else {
		res.json({message: 'failed'});
	}
});

app.get('/checkLogin', (req, res) => {
	console.log(req.session.user);
	const {user} = req.session;
	if (user) {
		req.session.user = user;
		res.json({message: 'welcome', user});
	} else {
		res.json({message: 'failed'});
	}
});

app.get('/logout', (req, res) => {
	delete req.session.user;
	res.json({message: 'logout'});
});

app.listen(3000, () => {
	console.log('running at http://localhost:3000');
});
