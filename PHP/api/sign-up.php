<?php
require_once("../db_connect.php");

if(!isset($_POST["email"])){
    $data=[
        "status"=>0,
        "message"=>"請循正常管道註冊"
    ];
    echo json_encode($data); 
    exit;
}

$name=$_POST["name"];
$email=$_POST["email"];
$password=$_POST["password"];
$repassword=$_POST["repassword"];
$time=date('Y-m-d H:i:s');

// 先用postman檢查是否接收到資料
// $data=[
//     "email"=>$email,
//     "name"=>$name,
//     "password"=>$password,
//     "repassword"=>$repassword
// ];
// echo json_encode($data);
// exit;

if(empty($name) || empty($email) || empty($password) || empty($repassword)){
    $data=[
        "status"=>0,
        "message"=>"請輸入必填欄位"
    ];
    echo json_encode($data); 
    exit;
}
// echo "$email, $name, $password, $repassword";
if($password != $repassword){
    $data=[
        "status"=>0,
        "message"=>"輸入密碼不一致"
    ];
    echo json_encode($data); 
    exit;
}

// 檢查email是否已註冊過，查到資料num_rows會>0
$sql="SELECT * FROM users WHERE email='$email'";
$result=$conn->query($sql);
if($rowCount=$result->num_rows !=0){
    $data=[
        "status"=>0,
        "message"=>"此信箱已被註冊"
    ];
    echo json_encode($data); 
    exit;
}

// 密碼加密
$password=md5($password);

$sql="INSERT INTO users (name, password, email, created_at, valid) VALUES ('$name', '$password', '$email', '$time', 1);";

if($conn->query($sql) === TRUE){
    $last_id=$conn->insert_id;
    $data=[
        "status"=>1,
        "message"=>"新增資料完成，最新資料序號: ".$last_id
    ];
    echo json_encode($data); 
    exit;
}else {
    $data=[
        "status"=>0,
        "message"=>"註冊失敗".$conn->error
    ];
    echo json_encode($data); 
    exit;
}
$conn->close();
?>