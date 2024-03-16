<?php
require_once("../db_connect.php");

// 模糊搜尋:LIKE '%字串%' 無論字串出現在何處，不區分大小寫
$sql="SELECT * FROM users WHERE name LIKE '%An%'";

$result=$conn->query($sql);
$rows=$result->fetch_all(MYSQLI_ASSOC);

print_r($rows);

$conn->close();
?>