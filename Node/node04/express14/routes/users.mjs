import express from "express";
const router = express.Router();

router.get("/users/", (req, res)=>{
    res.send("使用者入口頁");
})

router.get("/:id", (req, res)=>{
    let id = req.params.id;
    res.send(`使用者${id}的個人頁`);
})

export default router;