<h2>if else</h2>
<?php
$john_score=90;
$sam_score=90;
// if($john_score>$sam_score){
//     echo "John is better";
// }else if($john_score==$sam_score){
//     echo "John and Sam are same";
// }else{
//     echo "Sam is better";
// }

// if($john_score>$sam_score):
//     echo "John is better";
// elseif($john_score==$sam_score):
//     echo "John and Sam are same";
// else:
//     echo "Sam is better";
// endif;

if($john_score > $sam_score) : ?>
    John is better
<?php elseif ($john_score == $sam_score) : ?>
    John and Sam are same
<?php else : ?>
    Sam is better
<?php endif ?>
