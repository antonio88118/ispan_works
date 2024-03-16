<?php
require_once("../db_connect.php");

// COUNT():計算指定欄位的資料數量
// GROUP BY:搭配聚合函數(aggregation function)使用，即AVG()、COUNT()、MAX()、MIN()、SUM() 等內建函數，
// 用來將查詢結果中特定欄位值相同的資料分為若干個群組(這裡根據product_id)，每個群組都會傳回一個資料列
// 若沒加GROUP BY，將只會回傳一筆彙總資料，count為總數量
$sql="SELECT product.name AS product_name, user_like.*, COUNT(user_like.product_id) AS product_count FROM user_like
JOIN product ON user_like.product_id = product.id
GROUP BY user_like.product_id";

$result=$conn->query($sql);
$rows=$result->fetch_all(MYSQLI_ASSOC);
?>

<pre>
    <?php print_r($rows);?>
</pre>