<h1>預設常數:</h1>
<?php 
echo PHP_VERSION."<br>";
echo PHP_OS."<br>";
?>
<h1>魔術常數:</h1>
<p>寫在不同的地方會得到不同結果</p>
<h2>__LINE__</h2>
<?php 
// 顯示在程式碼的行數編號
echo __LINE__;
?>
<h2>__FILE__</h2>
<?php 
// 顯示包含絕對路徑的檔案名稱
echo __FILE__;
?>
<h2>__DIR__</h2>
<?php
// 顯示絕對路徑
echo __DIR__;
?>
<h2>__FUNCTION__</h2>
<?php 
function test(){
    echo __FUNCTION__;
}
test();
?>