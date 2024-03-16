<?php
require_once("../db_connect.php");

// 新增一個儲存長度3的age欄位，儲存整數
$sql="ALTER TABLE users DROP COLUMN age;";

if ($conn->query($sql) === TRUE) {
    echo "資料表 users 欄位刪除完成";
}else{
    echo "資料表欄位刪除錯誤: ".$conn->error;
}

$conn->close();
?>