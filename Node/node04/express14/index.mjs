import express from "express";
import front from "./routes/front.mjs";
import back from "./routes/back.mjs";
import users from "./routes/users.mjs";

const app = express();
app.use(front);
app.use(back);
app.use("/users", users);

app.listen(3000, ()=>{
    console.log("server is runninig at http://localhost:3000");
})