<?php
require_once("../pdo-connect.php");

if(!isset($_GET["id"])){
    $id=1;
}else{
    $id=$_GET["id"];
}

// :id PDO語法中設定的value值
$stmt=$conn->prepare('SELECT * FROM users WHERE id=:id AND valid=1');

try{
    // 執行PDO內容:讓:id的值=$id
    $stmt->execute([":id"=>$id]);
    $row=$stmt->fetch(PDO::FETCH_ASSOC);
    var_dump($row);
}catch(PDOException $e){
    echo $e->getMessage();
}

$conn=null;
?>