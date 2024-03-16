<?php
$a=["0", "1", "2"];
$b=[0, 1, 2];

var_dump($a==$b);
echo "<br>";
var_dump($a===$b);
echo "<br>";
var_dump($a!=$b);
echo "<br>";
var_dump($a<>$b);
echo "<br>";
var_dump($a!==$b);
echo "<br>";
?>
<h2>陣列的聯集</h2>
<?php
$c=[
    "John"=>["John", 1],
    "Sam"=>["Sam", 2]
];
$d=[
    "John"=>["John", 3],
    "Mary"=>["Mary", 4]
];
$e=$c+$d;
?>
<p>陣列聯集合併後，會保留前者刪除key重複的內容</p>
<pre>
    <?php print_r($e);?>
</pre>