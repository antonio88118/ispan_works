<?php
// fopen()開啟檔案，a+表示可讀寫
$handle=fopen("output.txt", "a+");
// PHP_EOL根據系統加上換行符號
fwrite($handle, "Hello World".PHP_EOL);
fwrite($handle, "This is line 2".PHP_EOL);
fwrite($handle, "This is line 3".PHP_EOL);
fclose($handle);
?>