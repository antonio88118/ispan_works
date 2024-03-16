<?php
require_once("../pdo-connect.php");

if(!isset($_GET["id"])){
    $id=4;
}else{
    $id=$_GET["id"];
}
$name="Ken";
$email="ken@test.com";
$phone="0988777666";

// :id PDO語法中設定的value值
$stmt=$conn->prepare('UPDATE users SET name=:name, email=:email, phone=:phone WHERE id=:id');

try{
    // 執行PDO內容:讓:id的值=$id
    $stmt->execute([
        ":id"=>$id,
        "name"=> $name,
        ":email"=>$email,
        ":phone"=>$phone
    ]);

}catch(PDOException $e){
    echo $e->getMessage();
}

$conn=null;
?>