<?php
session_start();

$product_id = $_POST["product_id"];

// 單筆商品
$newItem=[
    // 讓product_id當key，amount當value，為了簡化問題，先預設商品購買數量皆為1
    // product_id => amount
    $product_id=>1
];

// 若session存在購物車資料，把資料存入$cart陣列；若否，則創建一空的購物車陣列
if(isset($_SESSION["cart"])){
    $cart = $_SESSION["cart"];
}else{
    $cart=[];
}

// 檢查購物車內是否已存在某商品
$product_exist=0;
foreach($cart as $value){
    // 若cart陣列內存在和product_id相同key值(value)的資料
    if(array_key_exists($product_id, $value)){
        $product_exist=1;
        break;
    }
}
// 無同樣項目，可加入購物車
if($product_exist==0){
    array_push($cart, $newItem);
}

// 更新購物車資料
$_SESSION["cart"] = $cart;

// 回傳儲存購物車陣列商品筆數的json物件
$data = [
    "count" => count($cart)
];
echo json_encode($data);
?>