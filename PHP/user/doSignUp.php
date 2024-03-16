<?php
require_once("../db_connect.php");

if(!isset($_POST["email"])){
    echo "請循正常管道註冊";
    exit;
}

$name=$_POST["name"];
$email=$_POST["email"];
$password=$_POST["password"];
$repassword=$_POST["repassword"];
$time=date('Y-m-d H:i:s');

if(empty($name) || empty($email) || empty($password) || empty($repassword)){
    echo "請輸入完整資料";
    exit;
}
// echo "$email, $name, $password, $repassword";
if($password != $repassword){
    echo "輸入密碼不一致，請重新輸入";
    exit;
}

// 檢查email是否已註冊過，查到資料num_rows會>0
$sql="SELECT * FROM users WHERE email='$email'";
$result=$conn->query($sql);
if($rowCount=$result->num_rows !=0){
    die("帳號已存在");
}

$password=md5($password);

$sql="INSERT INTO users (name, password, email, created_at, valid) VALUES ('$name', '$password', '$email', '$time', 1);";

if($conn->query($sql) === TRUE){
    echo "註冊成功，";
    $last_id=$conn->insert_id;
    echo "最新資料序號: ".$last_id."，3秒後導回註冊畫面";
    header("Refresh:3; url=http://localhost/user/sign-up.php", true, 303);
}else {
    echo "註冊失敗:".$conn->error;
}

$conn->close();


?>