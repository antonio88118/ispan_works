import express from "express";
import multer from "multer";
const upload = multer();
import moment from "moment";
import cors from "cors";
import jwt from "jsonwebtoken";
const secretKey = process.argv[2];
// 存入過期token，用於測試
const blacklistToken = [];
import { LowSync } from "lowdb";
import { JSONFileSync } from "lowdb/node";
import { v4 as uuidv4 } from "uuid";
const defaultData = { products: [], user: [] };
const db = new LowSync(new JSONFileSync("db.json"), defaultData);
db.read();

let whitelist = ["http://localhost:5500", "http://localhost:3000", undefined];
let corsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
const app = express();
app.use(cors(corsOptions));

// 路由部份
app.get("/", (req, res) => {
  res.send("首頁");
});

app.post("/api/users/login", upload.none(), async (req, res) => {
  let user, error;
  await userLogin(req)
    .then((result) => {
      user = result;
    })
    .catch((err) => {
      error = err;
    });
  if (error) {
    res.status(400).json(error);
    return false;
  }
  if (user) {
    const token = jwt.sign(
      { account: user.account, username: user.name, head: user.head },
      secretKey,
      { expiresIn: "30m" }
    );
    res.status(200).json({ msg: "登入成功", token });
  }
  // res.send(`使用者登入 ${account} ${password}`);
});

app.post("/api/users/logout", checkToken, (req, res) => {
  // res.send('使用者登出');
  let token = req.get("Authorization");

  if (token && token.indexOf("Bearer ") === 0) {
    token = token.slice(7);
  }
  blacklistToken.push(token);

  token = jwt.sign({ account: "", username: "", head: "" }, secretKey, {
    expiresIn: "-10s",
  });
  res.status(200).json({ msg: "登出成功", token });
});

app.get("/api/users/search", async (req, res) => {
  let user, error;
  await userSearch(req)
    .then((result) => {
      user = result;
    })
    .catch((err) => {
      error = err;
    });
  if (error) {
    res.status(400).json(error);
    return false;
  }
  if (user) {
    res.status(200).json(user);
  }
});

// 讀取所有使用者
app.get("/api/users/", checkToken, async (req, res) => {
  let user, error;
  await getAllUser(req)
    .then((result) => {
      user = result;
    })
    .catch((err) => {
      error = err;
    });
  if (error) {
    res.status(400).json(error);
    return false;
  }
  if (user) {
    res.status(200).json(user);
  }
});

// 讀取單一使用者
app.get("/api/users/:id", async (req, res) => {
  let user, error;
  await getSingleUser(req)
    .then((result) => {
      user = result;
    })
    .catch((err) => {
      error = err;
    });
  if (error) {
    res.status(404).json(error);
    return false;
  }
  if (user) {
    res.status(200).json(user);
  }
});

// 使用者註冊
app.post("/api/users/signup/", upload.none(), async (req, res) => {
  let user, error;
  await userSignUp(req)
    .then((result) => {
      user = result;
    })
    .catch((err) => {
      error = err;
    });
  if (error) {
    res.status(409).json(error);
    return false;
  }
  if (user) {
    res.status(200).json({ msg: "註冊成功", user });
  }
});

// 修改使用者資料
app.put("/api/users/:id", checkToken, upload.none(), async (req, res) => {
  let id = req.params.id;
  let user, error;
  await userUpdate(req)
    .then((result) => {
      user = result;
    })
    .catch((err) => {
      error = err;
    });
  if (error) {
    res.status(400).json(error);
    return false;
  }
  if (user) {
    let token = req.get("Authorization");

    if (token && token.indexOf("Bearer ") === 0) {
      token = token.slice(7);
    }

    token = jwt.sign({ account: "", username: "", head: "" }, secretKey, {
      expiresIn: "-10s",
    });
    blacklistToken.push(token);

    res.status(200).json({ msg: "修改成功，請重新登入", token });
  }
});

// 刪除使用者
app.delete("/api/users/:id", checkToken, async (req, res) => {
  let id = req.params.id;
  let user, error;
  await userDelete(req)
    .then((result) => {
      user = result;
    })
    .catch((err) => {
      error = err;
    });
  if (error) {
    res.status(400).json(error);
    return false;
  }
  if (user) {
    let token = req.get("Authorization");

    if (token && token.indexOf("Bearer ") === 0) {
      token = token.slice(7);
    }
    blacklistToken.push(token);

    token = jwt.sign({ account: "", username: "", head: "" }, secretKey, {
      expiresIn: "-10s",
    });
    res.status(200).json({ msg: "刪除成功，欲使用服務請重新註冊", token });
  }
});

app.listen(3000, () => {
  console.log("server is running");
});

function userDelete(req) {
    return new Promise((resolve, reject) => {
        // 取出token資料
        const {account} = req.decoded;
        let user = db.data.user.find(u => u.account === account);
        if(user) {
            // 使用filter刪除使用者
            db.data.user = db.data.user.filter(u => u.account !== account);
            db.write();
            resolve(user);
        } else {
            reject({status: 'error', msg: '無對應使用者'});
        }
    })
}

function userUpdate(req) {
  return new Promise((resolve, reject) => {
    const { account: tokenAccount } = req.decoded;
    const { account, password, name, head } = req.body;
    // 若修改帳號與token帳號不符
    if (tokenAccount !== account) {
      reject({ status: "error", msg: "無修改權限" });
      return false;
    }
    let user = db.data.user.find((u) => u.account === account);
    Object.assign(user, { password, name, head });
    // 更新資料庫
    db.write();
    resolve(user);
  });
}

function userSignUp(req) {
  return new Promise((resolve, reject) => {
    const { account, password, name, mail, head } = req.body;
    // 檢查是否已存在相同account或mail
    let result = db.data.user.find((u) => u.account === account);
    if (result) {
      reject({ status: "error", msg: "此帳號已被註冊" });
      return false;
    }
    result = db.data.user.find((u) => u.mail === mail);
    if (result) {
      reject({ status: "error", msg: "此信箱已被註冊" });
      return false;
    }
    let id = uuidv4();
    let user = { id, account, password, name, mail, head };
    db.data.user.push(user);
    db.write();
    resolve(user);
  });
}

function getAllUser(req) {
  return new Promise((resolve, reject) => {
    resolve(db.data.user);
  });
}

function getSingleUser(req) {
  return new Promise((resolve, reject) => {
    const id = req.params.id;
    let result = db.data.user.find((u) => {
      return u.id === id;
    });
    if (result) {
      resolve(result);
    } else {
      reject({ status: "error", msg: "無使用者資料" });
    }
  });
}

function userSearch(req) {
  return new Promise((resolve, reject) => {
    const key = req.query.key;
    let result = db.data.user.find((u) => {
      return u.account === key;
    });
    if (result) {
      resolve(result);
    } else {
      reject({ status: "error", msg: "查無資料" });
    }
  });
}

function userLogin(req) {
  return new Promise((resolve, reject) => {
    const { account, password } = req.body;
    let result = db.data.user.find((u) => {
      return u.account === account && u.password === password;
    });
    if (result) {
      resolve(result);
    } else {
      reject({ status: "error", msg: "帳號或密碼錯誤" });
    }
  });
}

function checkToken(req, res, next) {
  let token = req.get("Authorization");

  if (token && token.indexOf("Bearer ") === 0) {
    token = token.slice(7);
    // 如果是過期的token，終止程式
    if (blacklistToken.includes(token)) {
      res
        .status(401)
        .json({ status: "error", message: "登入已過期，請重新登入" });
      return false;
    }
    // 驗證token
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ status: "error", message: "登入驗證失效，請重新登入。" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res
      .status(401)
      .json({ status: "error", message: "無登入驗證資料，請先登入。" });
  }
}
