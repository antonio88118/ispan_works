<?php
require_once("../db_connect.php");
$sql="SELECT * FROM users WHERE id=2";

$result=$conn->query($sql);
// 即使只拿一筆資料，fetch_all()會儲存多維陣列
// $rows=$result->fetch_all(MYSQLI_ASSOC);

// var_dump($rows);
// echo "<br>";
// echo $rows[0]["name"];

// 只拿一筆、想讓顯示更直觀單純時，使用fetch_assoc()
$row=$result->fetch_assoc();
var_dump($row);
?>