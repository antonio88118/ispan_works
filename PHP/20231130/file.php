<?php
// 在伺服器中的完整檔案路徑
echo $_SERVER["PHP_SELF"]."<br>";
// 在硬碟中的完整檔案路徑
echo $_SERVER["SCRIPT_FILENAME"]."<br>";
// 在硬碟中的完整檔案路徑，但路徑用反斜線\相隔
echo __FILE__."<br>";
// 在硬碟中不包含檔案本身的路徑
echo __DIR__."<br>";
// 在硬碟中不包含檔案本身的路徑，"."表示檔案存在的父資料夾
echo "Current Path is: ".realpath(".");
echo "<hr>";

$path=__FILE__;
// 取得路徑(C:\xampp\htdocs\20231130)
echo "PATHINFO_DIRNAME: ".pathinfo($path, PATHINFO_DIRNAME)."<br>";
// 取得完整檔名(file.php)
echo "PATHINFO_BASENAME: ".pathinfo($path, PATHINFO_BASENAME)."<br>";
// 取得副檔名(php)
echo "PATHINFO_EXTENSION: ".pathinfo($path, PATHINFO_EXTENSION)."<br>";
// 取得檔案名稱(file)
echo "PATHINFO_FILENAME: ".pathinfo($path, PATHINFO_FILENAME)."<br>";
?>