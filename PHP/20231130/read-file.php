<?php 
$handle=fopen("output.txt", "r");

// fgets()一次讀一行
while($line=fgets($handle)){
    // nl2br()讓檔案中的換行符號在瀏覽器顯示時也能換行
    echo nl2br($line);
}

// 回到檔案開頭
rewind($handle);
// fgetc()一次讀一個字符
echo fgetc($handle);

fclose($handle);
?>