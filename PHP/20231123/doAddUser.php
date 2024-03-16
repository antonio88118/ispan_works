<?php
require_once("../db_connect.php");

if(!isset($_POST["name"])){
    echo "請循正常管道進入";
    die;
}

$name=$_POST["name"];
$email=$_POST["email"];
$phone=$_POST["phone"];
$time=date('Y-m-d H:i:s');

if(empty($name) || empty($email) || empty($phone)){
    echo "請輸入完整資料";
    die;
}

// echo "$name, $email, $phone";

$sql="INSERT INTO users (name, phone, email, created_at) VALUES ('$name', '$phone', '$email', '$time');";

if($conn->query($sql) === TRUE){
    echo "新增資料完成，";
    $last_id=$conn->insert_id;
    echo "最新資料序號: ".$last_id;
}else {
    echo "新增資料錯誤:".$conn->error;
}

$conn->close();

// 跳轉至add-user.php(表單)
header("location: user-list.php");
?>