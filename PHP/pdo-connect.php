<?php
$severname = "localhost";
$username = "admin";
$password = "12345";
$dbname = "mydb";

try{
    $conn = new PDO(
        "mysql:host=$severname;
        dbname=$dbname;charset=utf8",
        $username, $password);
}catch(PDOException $e){
    echo "資料庫連線失敗: ".$e->getMessage();
}
?>