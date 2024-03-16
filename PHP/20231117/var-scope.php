<?php 
// 全域變數宣告後，會存到$GLOBALS陣列，用key-value的方式呼叫
$a=99;

function show(){
    $b=10;
    $a=$GLOBALS["a"];
    static $c=1;

    echo "a is $a.<br>";
    // php 的雙引號內可直接引用變數
    echo "b is $b.<br>";
    echo "c is $c.<br>";
    echo "<hr>";
    $b++;
    // 靜態變數c會存在程式直到結束，a、b只在執行函式時存在
    $c++;
}
show();
show();
show();
?>