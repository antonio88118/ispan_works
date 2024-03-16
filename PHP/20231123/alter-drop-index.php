<?php
require_once("../db_connect.php");

// 新增一個儲存長度3的age欄位，儲存整數
$sql="ALTER TABLE users DROP INDEX name;";

if ($conn->query($sql) === TRUE) {
    echo "資料表 users 索引刪除完成";
}else{
    echo "資料表索引刪除錯誤: ".$conn->error;
}

$conn->close();
?>