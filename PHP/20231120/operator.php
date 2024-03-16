<h2>算術運算子</h2>
<?php
$a=3;
$b=2;
echo -$a."<br>";
// 加
echo "$a + $b = ";
echo $a+$b;
echo "<br>";
// 減
echo "$a - $b = ";
echo $a-$b;
echo "<br>";
// 乘
echo "$a * $b = ";
echo $a*$b;
echo "<br>";
// 除
echo "$a / $b = ";
echo $a/$b;
echo "<br>";
// 餘
echo "$a % $b = ";
echo $a%$b;
echo "<br>";
// 次方
echo "$a ** $b = ";
echo $a**$b;
echo "<br>";

echo "\$a++: ";
$a++;
echo $a;
echo "<br>";
echo "++\$a: ";
++$a;
echo $a;
echo "<br>";

echo "\$a*=5: ";
$a*=5;
echo $a;
echo "<br>";

$string="Hello";
// 字串相加用"."
$string.="World";
echo $string;
?>