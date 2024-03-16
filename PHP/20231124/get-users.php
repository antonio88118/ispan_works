<?php 
require_once("../db_connect.php");
// sql指令
$sql = "SELECT id, name FROM users";
// 傳送指令，並接收結果
$result=$conn->query($sql);
$rows=$result->fetch_all(MYSQLI_ASSOC);

var_dump($rows);

?>