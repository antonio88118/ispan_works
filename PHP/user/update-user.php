<?php 
require_once("../db_connect.php");

$sql="UPDATE users SET phone='0911111111' WHERE id=2";

if($conn->query($sql) === TRUE){
    echo "資料更新成功";
} else {
    echo "資料更新失敗";
    $conn->error;
}

$conn->close();
?>