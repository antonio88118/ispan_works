<h2>Catch error</h2>
<?php
// 自訂錯誤應對
$var=1;
try{
    $var->method();
}
catch(Error $e){
    echo "Error";
}
?>
<h2>DivisionByZeroError</h2>
<?php
try{
    $d=0;
    $result=1/$d;
}
catch(DivisionByZeroError $e){
    echo "DivisionByZeroError: ";
    echo $e->getMessage(); //得到錯誤訊息
}
?>
<h2>TypeError</h2>
<?php
function add(int $a, int $b) {
    return $a + $b;
}
try{
    $result=add("one_cat", "two_cat");
}catch(TypeError $e){
    echo $e->getMessage();
}
?>
<h2>Exception</h2>
<?php
$score=-3;
try{
    if($score<0){
        // 定義Exception的錯誤訊息(message)與代碼(code)
        throw new Exception("Exception: Score shouldn't be negative", 1002);
    }
}catch(Exception $e){
    echo $e->getMessage()."<br>";
    echo "code: ".$e->getcode();
}
?>