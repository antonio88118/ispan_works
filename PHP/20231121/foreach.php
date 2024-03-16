<?php
$arr=[1,2,3,4];

foreach($arr as $value){
    echo "$value<br>";
}
?>
<hr>
<?php
$cars=["BMW", "Toyota", "Tesla"];

foreach($cars as $index=>$car){
    echo "$index. $car<br>";
}
?>
<hr>
<?php
$students=[
    [
        "name"=>"John",
        "height"=>180,
        "weight"=>83
    ],
    [
        "name"=>"Sam",
        "height"=>173,
        "weight"=>72
    ],
    [
        "name"=>"May",
        "height"=>165,
        "weight"=>50
    ]
];
?>
<ul>
    <?php foreach($students as $student):?>
    <li><?=$student["name"]?>'s height is <?=$student["height"]?>cm, weight is <?=$student["weight"]?>kg.</li>
    <?php endforeach;?>
</ul>