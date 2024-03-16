<?php
require_once("../pdo-connect.php");

// 把sql語法利用PDO進行預處理，防範惡意攻擊
$stmt=$conn->prepare('SELECT * FROM users WHERE valid=1');

try{
    // 執行PDO內容
    $stmt->execute();
    $rows=$stmt->fetchAll(PDO::FETCH_ASSOC);
    var_dump($rows);
}catch(PDOException $e){
    echo $e->getMessage();
}

$conn=null;
?>