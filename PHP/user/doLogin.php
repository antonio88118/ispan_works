<?php
require_once("../db_connect.php");

session_start();

if(!isset($_POST["email"])){
    echo "請循正常管道登入";
    exit;
}

$email=$_POST["email"];
$password=$_POST["password"];

if(empty($email)){
    $message="請輸入email";
    $_SESSION["error"]["message"]=$message;
    header("location: sign-in.php");
    exit;
}

if(empty($password)){
    $message="請輸入密碼";
    $_SESSION["error"]["message"]=$message;
    header("location: sign-in.php");
    exit;
}
$password=md5($password);

$sql="SELECT id, name, email, phone FROM users WHERE email='$email' AND password='$password' AND valid=1";
$result=$conn->query($sql);
// 若沒有對應資料
if($result->num_rows==0){
    // 累計輸入錯誤次數
    if(isset($_SESSION["error"]["times"])){
        $_SESSION["error"]["times"]++;
    }else{
        $_SESSION["error"]["times"]=1;
    }

    $message="帳號或密碼錯誤";
    $_SESSION["error"]["message"]=$message;
    header("location: sign-in.php");
    exit;
}

$row=$result->fetch_assoc();
$_SESSION["user"]=$row;
// 清除登入錯誤
unset($_SESSION["error"]);
header("location: dashboard.php");

$conn->close();
?>