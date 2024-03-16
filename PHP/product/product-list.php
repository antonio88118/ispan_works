<?php 
require_once("../db_connect.php");
session_start();


$sqlCategory="SELECT * FROM product_category";
$resultCategory=$conn->query($sqlCategory);
$rowsCategory=$resultCategory->fetch_all(MYSQLI_ASSOC);

if(isset($_GET["price-min"]) && isset($_GET["price-max"])){
    $min=$_GET["price-min"];
    $max=$_GET["price-max"];
    $sql="SELECT product.*, product_category.name AS category_name FROM product 
    JOIN product_category ON product.category_id = product_category.id 
    WHERE product.price > $min AND product.price < $max ORDER BY product.id ASC";
}else if(isset($_GET["category"])){
    $category=$_GET["category"];
    $sql="SELECT product.*, product_category.name AS category_name FROM product 
    JOIN product_category ON product.category_id = product_category.id 
    WHERE product.category_id = $category ORDER BY product.id ASC";
}
else{
    $sql="SELECT product.*, product_category.name AS category_name FROM product 
    JOIN product_category ON product.category_id = product_category.id 
    ORDER BY product.id ASC";
}

$result=$conn->query($sql);
$productCount=$result->num_rows;
$rows=$result->fetch_all(MYSQLI_ASSOC);
?>

<!doctype html>
<html lang="en">

<head>
  <title>Product List</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <?php include("../user/css.php");?>

<style>
    .cart-count{
        width: 28px;
        height: 28px;
        background: red;
        color: #fff;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        position: absolute;
        top: -14px;
        right: -14px;
    }
</style>

</head>

<body>
    <div class="container">
        <!-- 若session內有購物車資料，計算車內商品數量 -->
        <?php $cartCount = isset($_SESSION["cart"]) ? count($_SESSION["cart"]) : 0; ?>
        <div class="pt-5 pb-2 text-end">
            <a class="btn btn-primary position-relative" href="cart.php">購物車<span class="cart-count" id="cartCount"><?=$cartCount?></span></a>
        </div>
        <div class="py-2">
            <form action="" method="get">
                <div class="row g-3 align-items-center">
                    <?php if(isset($_GET["price-min"])): ?>
                    <div class="col-auto">
                        <a class="btn btn-primary" href="product-list.php"><i class="bi bi-arrow-left"></i></a>
                    </div>
                    <?php endif; ?>
                    <div class="col-auto">
                        <label for="price-min" class="col-form-label">輸入底價</label>
                    </div>
                    <div class="col-auto price-input">
                        <input type="number" class="form-control text-end" name="price-min" value=
                        "<?php $priceMin=(isset($_GET["price-min"]))? $min:0; echo $priceMin; ?>">
                    </div>
                    <div class="col-auto">~</div>
                    <div class="col-auto price-input">
                        <input type="number" class="form-control text-end" name="price-max" value=
                        "<?php $priceMax=(isset($_GET["price-max"]))? $max : 99999; echo $priceMax; ?>">
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-primary" type="submit">Go</button>
                    </div>
                </div>
            </form>
            <div class="py-2">共 <?= $productCount?> 筆</div>
        </div>
        <div>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link <?php if(!isset($_GET["category"])) { echo "active";} ?>" 
                    aria-current="page" href="product-list.php">全部</a>
                </li>
                <?php foreach($rowsCategory as $category):?>
                <li class="nav-item">
                    <a class="nav-link <?php if(isset($_GET["category"]) && $_GET["category"]==$category["id"]){ echo "active"; } ?>" 
                    href="product-list.php?category=<?= $category["id"]?>"><?=$category["name"]?></a>
                </li>
                <?php endforeach;?>
            </ul>
        </div>

        <div class="row g-3 porduct-list">
        <?php foreach($rows as $row):?>
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="card">
                    <a href="product.php?id=<?=$row["id"]?>">
                        <div class="ratio ratio-4x3">
                            <img class="object-fit-cover card-img-top" src="/images/<?=$row["img"]?>" alt="<?=$row["name"]?>">
                        </div>
                    </a>
                    <div class="card-body">
                        <div><a href="product-list.php?category=<?=$row["category_id"]?>"><?=$row["category_name"]?></a></div>
                        <h3 class="card-title"><a href="product.php?id=<?=$row["id"]?>"><?=$row["name"]?></a></h3>
                        <div class="text-end text-danger fs-4 price">$<?=number_format($row["price"])?></div>

                        <div class="py-2">
                            <div class="d-grid">
                                <button class="btn btn-primary btn-cart" data-id="<?=$row["id"]?>"> 加入購物車</button>
                            </div>
                        </div>

                    </div>
                </div>    
            </div>
        <?php endforeach;?>
        </div>
    </div>
    <script>
        const cartBtns = document.querySelectorAll(".btn-cart");
        // 購物車商品數字
        const cartCountElem = document.querySelector("#cartCount");

        for(let i=0; i<cartBtns.length; i++){
            cartBtns[i].addEventListener("click", function(){
                // dataset.id 即button內定義的屬性data-id
                let id = this.dataset.id;
                $.ajax({
                    method: "POST",  //or GET
                    url: "/api/add-cart.php", // 請求資料的網址
                    dataType: "json", // 請求資料的類型
                    data: { product_id: id } // 前:傳出的變數名稱(key)；後:value
                })
                .done(function( response ) {
                    let cartCount=response.count;
                    cartCountElem.innerText=cartCount;
                    alert("加入購物車成功");
                }).fail(function( jqXHR, textStatus ) {
                    console.log( "Request failed: " + textStatus );
                });
            });
        }
    </script>


  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
    integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
  </script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
    integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
  </script>
    
    <!-- 引入jQuery -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
</body>

</html>