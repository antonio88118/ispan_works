<?php
require_once("../db_connect.php");

if(!isset($_GET["id"])){
    echo "請循正常管道刪除";
    exit;
}

$id=$_GET["id"];

$sql="UPDATE users SET valid=0 WHERE id=$id";

if($conn->query($sql) === TRUE){
    echo "刪除成功";
    header("Refresh: 2; url=user-list.php", true, 303);
}else{
    echo "刪除失敗";
    $conn->error;
}

$conn->close();
?>