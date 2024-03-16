<h2>array_merge</h2>
<?php
$arr1=[
    "name"=>"john",
    2,
    3
];
$arr2=[
    "a",
    "b",
    "name"=>"sam",
    "age"=>18,
    4
];

$result=array_merge($arr1, $arr2);
?>
<p>與"+"的合併方式不同，key重複時，array_merge會保留第二個參數的內容</p>
<pre>
    <?php print_r($result);?>
</pre>

<h2>array_merge_recursive</h2>
<p>有重複的key會合併，其他value依順序填入</p>
<?php
$result2=array_merge_recursive($arr1, $arr2);
?>
<pre>
    <?php print_r($result2);?>
</pre>

<h2>compact</h2>
<p>對應陣列變數名稱的參數字串當key，合併成更大的陣列</p>
<?php
$var1="green";
$var2="yellow";
$var3="blue";
$myArr=compact("var1","var2","var3");
var_dump($myArr);
echo "<br>";

$user=[
    "name"=>"John",
    "email"=>"john@test.com"
];
$products=[
    [
        "id"=>1,
        "name"=>"item1"
    ],
    [
        "id"=>2,
        "name"=>"item2"
    ],
    [
        "id"=>3,
        "name"=>"item3"
    ]
];
// 用user和products當key
$data=compact("user", "products");
?>
<pre>
    <?php print_r($data);?>
</pre>
<div>
    hi, <?= $data["user"]["name"]?>.
</div>

<h2>array_chunk</h2>
<p>array_chunk($arr, n)把參數陣列的元素每n個分配給一個新陣列</p>
<?php
$arr3=["a","b","c","d","e"];
$result_chunk=array_chunk($arr3, 3);
?>
<pre>
    <?php print_r($result_chunk);?>
</pre>

<h2>array_combine</h2>
<p>前面的當key，後面當value</p>
<?php
$c=["John", "Sam"];
$d=[28,32];
$result_combine=array_combine($c, $d);
?>
<pre>
    <?php print_r($result_combine);?>
</pre>