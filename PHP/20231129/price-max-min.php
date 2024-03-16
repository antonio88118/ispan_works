<h1>Max</h1>
<?php
require_once("../db_connect.php");

$sqlMax="SELECT * FROM product WHERE price = (SELECT MAX(price) FROM product)";
$resultMax=$conn->query($sqlMax);
$rowsMax=$resultMax->fetch_all(MYSQLI_ASSOC);

var_dump($rowsMax);
?>

<h1>Min</h1>
<?php
$sqlMin="SELECT * FROM product WHERE price = (SELECT MIN(price) FROM product)";
$resultMin=$conn->query($sqlMin);
$rowsMin=$resultMin->fetch_all(MYSQLI_ASSOC);

var_dump($rowsMin);
?>