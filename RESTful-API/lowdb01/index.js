import {LowSync} from "lowdb";
import {JSONFileSync} from 'lowdb/node';
import {v4 as uuidv4} from 'uuid';

const defaultData = {user: {}, products: []};
const db = new LowSync(new JSONFileSync('db.json'), defaultData);

// 讀取資料
db.read();

// DELETE 刪除資料
db.data.products = db.data.products.filter(p => p.id !== '06f15555-5710-41f1-8a50-bf5622cf377d');

// PUT 更新資料 api/products/06f15555-5710-41f1-8a50-bf5622cf377d
// db.data.products.find(p => p.id === '06f15555-5710-41f1-8a50-bf5622cf377d').stock = 50;
db.write();

// api/products/?page=1&sort=desc
// let page = 1;
// let limit = 5;
// let start = (page-1) * limit;
// let end =  page * limit;
// let data = db.data.products.sort((a, b) => {return b.price - a.price}).slice(start, end);

// api/products/?page=1
// let page = 2;
// let limit = 5;
// let start = (page-1) * limit;
// let end =  page * limit;
// let data = db.data.products.slice(start, end);

// api/products/search?key=瓜
// let data = db.data.products.filter(item => item.title.includes('瓜'));

// api/products/cfcf5a9b-b100-4d81-9502-d361c667c579
// let data = db.data.products.find((item) => { return item.id === 'cfcf5a9b-b100-4d81-9502-d361c667c579'});

// console.log(data);


// 新增一項商品
// db.data.products.push({
//     id: uuidv4(),
//     title: '木瓜',
//     price: 50,
//     stock: 100,
//     createDate: Date.now()
// });

// unshift() 向前插入陣列
// db.data.products.unshift({
//     id: uuidv4(),
//     title: '西瓜',
//     price: 60,
//     stock: 50,
//     createDate: Date.now()
// });

// 新增用戶假資料
// let id = uuidv4();
// db.data.user[id] = {
//     id: id,
//     account: 'andy',
//     password: 'a1234',
//     name: 'Andy Yang'
// }

// db.write();