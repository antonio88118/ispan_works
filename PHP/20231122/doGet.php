<?php
// issset()顧名思義就是已設置，因此指的是變數是否存在，如果有設置變數，即使是空值也會返回true
// !isset()表示false，防止使用者透過輸入網址跳過下方驗證
if(!isset($_GET["email"]) || !isset($_GET["password"])){
    echo "請循正當管道進入此頁";
    exit;
}

$email=$_GET["email"];
$password=$_GET["password"];

// 檢查是否填寫email欄位
// empty()顧名思義就是空的，因此指的是變數的值是否為空，如果有設置變數，且裡面是空值，包含null、0、""，都會返回true
if(empty($email)){
    echo "email 不可為空";
    exit;
}

if(empty($password)){
    echo "password 不可為空";
    exit;
}

echo "$email, $password";
?>