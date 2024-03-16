<?php
require_once("../db_connect.php");

$sql="SELECT * FROM product WHERE price > 500";

$result=$conn->query($sql);
$rows=$result->fetch_all(MYSQLI_ASSOC);

$conn->close();
?>