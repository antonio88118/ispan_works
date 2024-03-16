<?php 
session_start();
// 若購物車為空，回到商品頁
if(!isset($_SESSION["cart"])){
    header("location: product-list.php");
}

require_once("../db_connect.php");
?>

<!doctype html>
<html lang="en">

<head>
  <title>購物車</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS v5.2.1 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

</head>

<body>
<div class="container">
    <div class="py-2 text-end">
        <a class="btn btn-primary" href="product-list.php">繼續購物</a>
    </div>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>商品名稱</th>
                <th>單價</th>
                <th>數量</th>
                <th>小計</th>
            </tr>
        </thead>
        <tbody>
            <?php
                $total = 0;
                foreach($_SESSION["cart"] as $item):
            ?>
            <?php
                $product_id = key($item);
                $sql = "SELECT * FROM product WHERE id=$product_id";
                $result=$conn->query($sql);
                $row=$result->fetch_assoc();
                // 小計，用current()取得關聯式陣列$item的value
                $subTotal=$row["price"]*current($item);
                $total+=$subTotal;
            ?>
            
                <tr>
                    <td><?=$row["name"]?></td>
                    <td><?=$row["price"]?></td>
                    <td><?=current($item)?></td>
                    <td><?=$subTotal?></td>
                </tr>
            <?php endforeach;?>
            <tr>
                <td colspan="4" class="text-end">總計：<span><?=$total?></span></td>
            </tr>
        </tbody>
    </table>
    <div class="py-2 text-end">
        <a href="pay.php" class="btn btn-primary">結帳</a>
    </div>
</div>

  <!-- Bootstrap JavaScript Libraries -->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
    integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous">
  </script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
    integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous">
  </script>
</body>

</html>