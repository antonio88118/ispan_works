<?php
$fruit=["apple", "banana", "peach", "melon"];
?>
原始: <?php print_r($fruit);?>
<h2>array_shift</h2>
<?php
array_shift($fruit);
?>
<?php print_r($fruit);?>

<h2>array_unshift</h2>
<?php
array_unshift($fruit, "apple");
?>
<?php print_r($fruit);?>

<h2>array_pop</h2>
<?php
array_pop($fruit);
?>
<?php print_r($fruit);?>

<h2>array_push</h2>
<?php
array_push($fruit, "mango");
?>
<?php print_r($fruit);?>

<h2>array_slice</h2>
<p>$fruit2=array_slice($fruit, 1) 從索引1開始複製</p>
<?php
$fruit2=array_slice($fruit, 0);
print_r($fruit2);
echo "<br>";
$fruit3=array_slice($fruit, 1, 4);
print_r($fruit3);
?>

<h2>array_splice</h2>
<p>array_splice($fruit, 2, 1) 從索引2開始，刪除1筆</p>
<p>array_splice($fruit, 3, 0, "peach") 從索引2開始，不刪除元素，加入peach</p>
<?php
    array_splice($fruit, 2, 1);
    print_r($fruit);
    echo "<br>";
    array_splice($fruit, 2, 0, "peach");
    print_r($fruit);
?>

<h2>array_rand</h2>
<p>$array_rand=array_rand($fruit, 2) 隨機取兩個元素</p>
<?php
    $array_rand=array_rand($fruit, 2);
    print_r($array_rand);
    echo "<br>";
    for($i=0; $i<count($array_rand); $i++){
        echo $fruit[$array_rand[$i]]."<br>";
    }
?>

<h2>array_flip</h2>
<p>把陣列的key和value對調</p>
<?php
    $cars=["BMW", "Toyota", "Tesla"];
    $flipCars=array_flip($cars);
    print_r($flipCars);
?>