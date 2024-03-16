<?php 

require_once("../db_connect.php");

if(!isset($_POST["name"])){
    echo "請循正常管道進入修改";
    exit;
}

$id=$_POST["id"];
$name=$_POST["name"];
$email=$_POST["email"];
$phone=$_POST["phone"];
$updateTime=date('Y-m-d H:i:s');

$sql="UPDATE users SET name='$name', email='$email', phone='$phone', update_time='$updateTime' WHERE id=$id";

if($conn->query($sql) === TRUE){
    echo "資料修改成功!";
    header("Refresh:2; url=http://localhost/user/user.php?id=$id", true, 303);
} else {
    echo "資料更新失敗";
    $conn->error;
}

$conn->close();
?>