<?php
require_once("../db_connect.php");

$sql="DELETE FROM users WHERE id=14";

if($conn->query($sql) === TRUE){
    echo "刪除成功";
}else{
    echo "刪除失敗";
    $conn->error;
}

$conn->close();
?>