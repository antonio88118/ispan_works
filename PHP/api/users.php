<?php
require_once("../db_connect.php");
$sql="SELECT * FROM users WHERE valid=1 ORDER BY id DESC";
$result=$conn->query($sql);
$rows=$result->fetch_all(MYSQLI_ASSOC);
// print_r($rows);
echo json_encode($rows);

$conn->close();
?>