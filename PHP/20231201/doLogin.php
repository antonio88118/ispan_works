<?php
require_once("../db_connect.php");

$email=$_POST["email"];
$password=$_POST["password"];

$sql="SELECT * FROM users WHERE email='$email' AND password='$password' AND valid=1";

echo $sql;
$result=$conn->query($sql);
$rows=$result->fetch_all(MYSQLI_ASSOC);

$conn->close();
?>
<pre>
    <?php print_r($rows)?>
</pre>