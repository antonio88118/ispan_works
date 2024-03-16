<?php
require_once("../db_connect.php");

// 建立名為users的資料表
$sql="CREATE TABLE users (
    id INT(4) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    phone VARCHAR(30),
    email VARCHAR(50)
)";

if ($conn->query($sql)===true) {
    echo "資料表 users 建立完成";
}else{
    echo "建立錯誤: ".$conn->error;
}

$conn->close();
?>