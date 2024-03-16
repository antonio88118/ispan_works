<?php
$a=77;
$b="77";

// 以下比較會先轉換型態
var_dump($a==$b);
echo "<br>";
var_dump($a>=$b);
echo "<br>";
// ===嚴格比較，連型別一起判斷
var_dump($a===$b);
echo "<br>";
var_dump($a!==$b);
echo "<br>";
?>