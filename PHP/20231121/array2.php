<?php
$student["name"]="John";
$student["height"]=180;
$student["weight"]=83;
// var_dump($student);
?>
<?=$student["name"] ?>'s height is
<?=$student["height"] ?>cm, weight
is <?=$student["weight"] ?>kg.
<hr>
<?php 
$student=[
    // =>用來定義陣列
    "name"=>"Sam",
    "height"=>173,
    "weight"=>72
];
/*
js物件(JSON)定義方式:
let student={
    name: "Sam",
    height: 173,
    weight: 72
}
*/
?>
<?=$student["name"] ?>'s height is
<?=$student["height"] ?>cm, weight
is <?=$student["weight"] ?>kg.
<hr>
<?php
// 把php關聯式陣列轉換成JSON物件
echo json_encode($student);
?>
<script>
    let student=<?=json_encode($student)?>;
    console.log(student);
</script>

<h2>多維關聯式陣列</h2>
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
<pre>
    <?php
    print_r($students);
    ?>
</pre>
共 <?= count($students)?> 個學生
<ul>
    <?php for($i=0; $i<count($students); $i++):?>
    <li><?=$students[$i]["name"]?>'s height is <?=$students[$i]["height"]?>cm, weight is <?=$students[$i]["weight"]?>kg.</li>
    <?php endfor;?>
</ul>