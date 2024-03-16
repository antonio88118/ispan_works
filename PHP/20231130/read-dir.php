<?php
$path='C:\xampp\htdocs\20231130';
// 開啟20231130資料夾
$handle=opendir($path);

// 顯示從資料夾中讀取的內容
while($file=readdir($handle)){
    echo $file."<br>";
}

// 關閉資料夾
closedir($handle);
?>