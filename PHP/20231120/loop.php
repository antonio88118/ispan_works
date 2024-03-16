<h2>While</h2>
<?php
$i=0;
// while($i<10){
//     echo "$i<br>";
//     $i++;
// }

while($i<10):
    echo "$i<br>";
    $i++;
endwhile;

$j=1;
?>
<ul>
    <?php while($j<=10): ?>
    <li>item<?=$j?></li>
    <?php
    $j++;
    endwhile;
    ?>
</ul>

<h2>do wwhile</h2>
<?php
$k=1;
do{
    echo "$k<br>";
    $k++;
}while($k<10);
?>

<h2>for</h2>
<?php
for($i=0; $i<10; $i++){
    echo $i."<br>";
}
?>
<ul>
    <?php for($i=1; $i<=10; $i++):?>
    <li>item<?=$i?></li>
    <?php endfor;?>
</ul>

<h2>break</h2>
<?php
for($i=0;$i<10;$i++){
    if($i===4)break;
    echo "$i<br>";
}
?>

<h2>continue</h2>
<?php
for($i=0; $i<20; $i++){
    // 不是3的倍數就跳過
    if($i%3!=0)continue;
    echo "$i<br>";
}
?>