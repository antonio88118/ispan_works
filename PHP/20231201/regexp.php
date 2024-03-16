<?php
$input="Sam loves his mother";
// "/ 正規表達式 /"
$pattern="/(fa|mo)ther/";
if(preg_match($pattern, $input)){
    echo "match!";
}else{
    echo "no match!";
}
?>
<h2>preg_split</h2>
<?php
$email="john@test.com.tw";
$pattern2="/\.|@/";
$output=preg_split($pattern2, $email);
var_dump($output);
?>