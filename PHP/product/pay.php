<?php
session_start();

if(!isset($_SESSION["cart"])){
    echo "購物車不得為空";
    exit;
}

require_once("../db_connect.php");

// 未登入，先預設會員編號1
$user_id=1;

?>