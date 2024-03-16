<h2>$GLOBALS</h2>
<?php 
$num=2;
// 關聯式陣列
echo $GLOBALS["num"];
?>
<h2>$_ENV</h2>
<?php 
var_dump($_ENV)
?>
<h2>$_SERVER</h2>
<?php 
echo "PHP_SELF: ".$_SERVER["PHP_SELF"]."<br>";
echo "SERVER_ADDR: ".$_SERVER["SERVER_ADDR"]."<br>";
echo "SERVER_NAME: ".$_SERVER["SERVER_NAME"]."<br>";
// 時間戳記
echo "REQUEST_TIME: ".$_SERVER["REQUEST_TIME"]."<br>";
echo "REMOTE_ADDR: ".$_SERVER["REMOTE_ADDR"]."<br>";
echo "REMOTE_PORT: ".$_SERVER["REMOTE_PORT"]."<br>";
echo "HTTP_HOST: ".$_SERVER["HTTP_HOST"]."<br>";
echo "DOCUMENT_ROOT: ".$_SERVER["DOCUMENT_ROOT"]."<br>";
?>
