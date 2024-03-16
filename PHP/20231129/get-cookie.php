<?php
// 預設只會抓存在同一個目錄的cookie
if(isset($_COOKIE["account"])){
    echo $_COOKIE["account"];
}

?>