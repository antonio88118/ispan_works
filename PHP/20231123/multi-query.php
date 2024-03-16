<?php
require_once("../db_connect.php");

$time=date('Y-m-d H:i:s');

$sql = "INSERT INTO users (name, phone, email, created_at) VALUES ('Ken', '0900000000', 'ken@example.com', '$time');";

$sql .= "INSERT INTO users (name, phone, email, created_at) VALUES ('Sue', '0900000000', 'sue@example.com', '$time');";

$sql .= "INSERT INTO users (name, phone, email, created_at) VALUES ('Lucy', '0900000000', 'lucy@example.com', '$time')";

// echo $sql;

if($conn->multi_query($sql) === TRUE){
    echo "新增資料完成";
}else {
    echo "新增資料錯誤:".$conn->error;
}

$conn->close();
?>