<?php

if(!isset($_POST["email"]) || !isset($_POST["password"])){
    echo "請循正當管道進入此頁";
    exit;
}

$email=$_POST["email"];
$password=$_POST["password"];
$phones=$_POST["phones"];
$gender=$_POST["gender"];
$telecom=$_POST["telecom"];
// var_dump($phones);

// 過濾陣列中的空值，沒有值的元素不會存在新陣列，確保3個phone欄位都有填
$phones=array_filter($phones);
// var_dump($phones);
// exit;


if(empty($email)){
    echo "email 不可為空";
    exit;
}

if(empty($password)){
    echo "password 不可為空";
    exit;
}

switch($telecom){
    case 1:
        $telecomName = "中華電信";
        break;
    case 2:
        $telecomName = "台灣大哥大";
        break;
    case 3:
        $telecomName = "遠傳電信";
        break;
}

echo "email: $email, password: $password, telecom is $telecomName, gender is $gender, phones: ";
// foreach($phones as $phone){
//     echo $phone.", ";
// }

// implode(string, array) php中的join，在陣列間插入字串
echo implode(", ", $phones);

?>