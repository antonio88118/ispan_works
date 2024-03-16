<h2>time()</h2>
<?php
// 從1970/1/1到現在經過的秒數
echo time();
?>
<h2>date_default_timezone_get</h2>
<?php
echo date_default_timezone_get();
?>
<h2>現在時間</h2>
<?php echo date("Y/m/d H:i:s"); ?>
<h3>東京時間</h3>
<?php
date_default_timezone_set("Asia/Tokyo");
echo date("Y/m/d H:i:s");
?>