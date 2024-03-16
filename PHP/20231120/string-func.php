<h2>strlen()</h2>
<?php 
$string="Hello World";
echo strlen($string);
?>
<h2>str_word_count</h2>
<?php 
echo str_word_count($string);
?>

<h2>substr</h2>
<?php 
$name="Samantha";
echo substr($name, 2);
echo "<br>";
// 從後面數
echo substr($name, -2);
echo "<br>";
// 從第3個字之後，顯示4個字
echo substr($name, 3, 4);
echo "<br>";
?>

<h2>strstr</h2>
<?php
$email="jack@test.com";
// 從原字串分隔包含指定字元在內的字串
echo strstr($email, '@');
echo "<br>";
// 從原字串分隔指定字元前的字串
echo strstr($email, '@', true);
?>

<h2>strpos</h2>
<?php
// 回傳第一次出現的位置之索引
echo strpos($string, 'World');
echo "<br>";
$ifExist=strpos($string, 'world');
// 字串不存在，回傳false
var_dump($ifExist);
?>

<h2>explode</h2>
<?php
$saying="Hello John, how are you?";
// 依空格分割字串，存成陣列
$sayArr=explode(" ", $saying);
var_dump($sayArr);
?>

<h2>str_replace</h2>
<?php
// 把$string中的World替換成Kitty
$output=str_replace("World", "Kitty", $string);
echo $output;
?>