<?php
// setcookie(名稱, 值, time()+過期時間(option), 可用範圍(option，預設為同一目錄下的檔案))
setcookie("account", "sam", time()+3600, "/");

echo $_COOKIE["account"];
?>