<?php
session_start();

echo $_SESSION["name"];

echo "<hr>";
var_dump($_SESSION["user"]);
echo "<hr>";
var_dump($_SESSION);
unset($_SESSION["name"]);
echo "<hr>";
var_dump($_SESSION);
?>