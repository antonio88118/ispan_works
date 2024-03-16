<?php
$user=[
    "name"=>"John",
    "email"=>"john@test.com"
];

var_dump($user);

// unset()刪除陣列中的指定節點
unset($user["email"]);
echo "<br>";
var_dump($user);
?>