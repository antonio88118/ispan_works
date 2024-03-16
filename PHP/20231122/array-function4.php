<h2>array_diff</h2>
<p>array_diff($a, $b) 比較$a、$b陣列，並回傳$a的相異元素</p>
<?php
    $a=["a","b","c","d"];
    $b=["a","b","x","y"];
    print_r($a);
    echo "<br>";
    print_r($b);
    echo "<br>";
    print_r(array_diff($a, $b));
?>

<h2>array_sum</h2>
<p>array_sum($arr) 回傳陣列元素(ex:[2,4,5])加總</p>
<?php
    $arr=[2,4,5];
    echo array_sum($arr);
?>

<h2>array_unique</h2>
<p>刪除陣列中重複的元素，只保留前者</p>
<?php
    $input=[
        "a"=>"John",
        "Sam",
        "b"=>"John",
        "Sam",
        "Mary"
    ];
    print_r($input);
    echo "<br>";
    $result=array_unique($input);
    print_r($result);
?>

<h2>array_pad</h2>
<p>$input=[1,2,3]；array_pad($input, 5, 10) 令原陣列長度為5，沒有對應value的key填入10</p>
<?php
$input=[1,2,3];
$result=array_pad($input, 5, 10);
print_r($result);
?>

<h2>in_array</h2>
<p>in_array("Oudi", $cars) 檢查陣列中是否指定元素</p>
<?php
$cars=["BMW", "Toyota", "Tesla", "Honda"];
$car="BMW";
var_dump(in_array($car, $cars));
echo "<br>";
var_dump(in_array("Oudi", $cars));
?>

<h2>array_search</h2>
<p>array_search($car, $cars) 若在陣列中找到指定元素，回傳key；若無則回傳false</p>
<?php
echo array_search($car, $cars)."<br>";
var_dump(array_search("Oudi", $cars));
?>

<h2>array_key_exists</h2>
<p>array_key_exists("John", $students) 檢查陣列中是否存在指定的key</p>
<?php
$students=[
    "John"=>101,
    "May"=>102
];
var_dump(array_key_exists("John", $students));
?>

<h2>asort</h2>
<p>asort($cars) 以key的unicode為基準重新排序</p>
<?php
$cars=[
    "Toyata"=>"Altis",
    "BMW"=>"530i",
    "Tesla"=>"Model S"
];
print_r($cars);
echo "<br>";
asort($cars);
print_r($cars);
?>

<h2>rsort</h2>
<p>rsort($cars) 排序和asort相反，且會去除key值</p>
<?php
rsort($cars);
print_r($cars);
?>

<h2>natsort</h2>
<p>natsort($array1) 有別於asort用unicode排序，natsort依據陣列元素字串中的數字大小排序，由小而大</p>
<?php
$array1=["id_22", "id_10", "id_2", "id_1"];
asort($array1);
print_r($array1);
echo "<br>";
natsort($array1);
print_r($array1);
?>