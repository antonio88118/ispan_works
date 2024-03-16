<h2>單引號</h2>
<?php 
$foo='This is a string.';
echo 'foo is $foo.';
echo "<br>";
echo 'I said "go home"!';
echo "<br>";
echo 'The path is C:\newpath';
echo "<br>";
// 單引號中\或\\皆能顯示反斜線
echo 'The path is C:\\newpath';
?>
<h2>雙引號</h2>
<p>雙引號內可以使用變數</p>
<?php 
echo "foo is $foo.";
echo "<br>";
// 跳脫字元
echo "I said \"go home\"!";
echo "<br>";
// \n是換行符號，雙引號中顯示\要寫\\
echo "The path is C:\newpath<br>";
echo "The path is C:\\newpath";
echo "<br>";
$time="a day";
echo "I earn \$10 dollars $time";
?>

<h2>字串連結</h2>
<p>php中，字串+數字=數字</p>
<?php 
$num1=4 + "3";
echo '$num1=4 + "3"= ';
echo "<u>$num1</u>";
?>
<p>字串連結有別於js的"+"，應使用"."</p>
<?php
$string="Hello";
$string=$string." World";
echo $string;
?>