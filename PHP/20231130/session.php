<?php
session_start();
$_SESSION["name"]="Joe";

echo $_SESSION["name"];

$_SESSION["user"]=[
    "name"=>"Amy",
    "email"=>"amy@test.com",
    "phone"=>"0922333111"
];
?>