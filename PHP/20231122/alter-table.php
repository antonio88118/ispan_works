<?php
require_once("../db_connect.php");

// 新增一個儲存長度3的age欄位，儲存整數
$sql="ALTER TABLE users ADD COLUMN age INT(3)";

if ($conn->query($sql) === TRUE) {
    echo "資料表 users 修改完成";
}else{
    echo "資料表修改錯誤: ".$conn->error;
}

$conn->close();
?>