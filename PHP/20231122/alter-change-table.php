<?php
require_once("../db_connect.php");

// 變更users資料表中的userName欄位名稱為name
$sql = "ALTER TABLE users CHANGE COLUMN userName name VARCHAR(5);";

if ($conn->query($sql) === TRUE) {
    echo "資料表 users 修改完成";
} else {
    echo "資料表修改錯誤: " . $conn->error;
}

$conn->close();
