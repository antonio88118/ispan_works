<?php
if(file_exists("sess.php")){
    // 複製檔案，取新檔名
    copy("sess.php", "sess-new.php");
}
?>