<h2>is_array()</h2>
<?php
$arr=[1,2,3];
echo is_array($arr)? "true":"false";
?>

<h2>list</h2>
<?php
$user=["John", 28, "sales"];
list($name, $age, $job)=$user;
echo "$name";
?>

<h2>range</h2>
<p>生成陣列，每隔2產生一個2~20的數值元素</p>
<?php
$r=range(2, 20 ,2);
var_dump($r);
?>

<h2>array_values</h2>
<p>只顯示value</p>
<?php
$student=[
    "name"=>"Sam",
    "height"=>173,
    "weight"=>72
];
print_r(array_values($student));
?>

<h2>array_count_values</h2>
<?php
$users=["John", "Sam", "Peter", "Sam", "May", "Sam"];
print_r(array_count_values($users));
?>

<h2>browse</h2>
<?php
$arr=["one", "two", "three", "four"];
echo current($arr);
echo "<br>";
next($arr);
next($arr);
echo current($arr);
echo "<br>";
prev($arr);
echo current($arr);
echo "<br>";
reset($arr);
echo current($arr);
?>
<hr>
<?php
do{
    echo current($arr);
    echo "<br>";
}while(next($arr));
?>