<?php require_once("../db_connect.php");

// 從user_order取出:user_order所有的資料、product中的name(命名product_name)、product中的price、users中的name(命名user_name)
$sql="SELECT user_order.*, product.name AS product_name, product.price, users.name AS user_name FROM user_order 
-- 透過關聯:product中的id和user_order的product_id相同，且users中的id和user_order的user_id相同者
JOIN product ON product.id = user_order.product_id 
JOIN users ON users.id = user_order.user_id
ORDER BY order_date DESC";
$result=$conn->query($sql);
$rows=$result->fetch_all(MYSQLI_ASSOC);

$count=$result->num_rows;

$pageName="總銷售紀錄";
?>

<!doctype html>
<html lang="en">

<head>
  <title>Product Orders</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <?php include("../user/css.php"); ?>

</head>

<body>
    <div class="container">
        <h1 class="text-center"><?=$pageName?></h1>
        <!-- 日期區間查詢 -->
        <div class="py-2">
            <form action="date-range.php">
                <div class="row g-3">
                    <div class="col-auto">
                        <input type="date" class="form-control" name="start">
                    </div>
                    <div class="col-auto"> ~ </div>
                    <div class="col-auto">
                        <input type="date" class="form-control" name="end">
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary">GO</button>
                    </div>
                </div>
            </form>
        </div>

        <!-- 紀錄表格 -->
        <div class="table-responsive">
            <?php if($count>0): ?>
            <table class="table table-bordered">
                <thead>
                    <tr class="text-nowrap">
                        <th>訂單編號</th>
                        <th>日期</th>
                        <th>品名</th>
                        <th>數量</th>
                        <th>單價</th>
                        <th>總價</th>
                        <th>購買人</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach($rows as $row): ?>
                    <tr>
                        <td><?=$row["id"] ?></td>
                        <td><a href="date-orders.php?date=<?=$row["order_date"]?>"><?=$row["order_date"] ?></a></td>
                        <!-- 連結至該品項的總銷售清單 -->
                        <td><a href="product-single-orders.php?id=<?=$row["product_id"]?>"><?=$row["product_name"] ?></a></td>
                        <td class="text-end"><?=$row["amount"] ?></td>
                        <!-- number_format()加入逗號 -->
                        <td class="text-end">$<?=number_format($row["price"]) ?></td>
                        <td class="text-end">$<?=number_format($row["price"]*$row["amount"]) ?></td>
                        <td><a href="user-orders.php?id=<?=$row["user_id"]?>"><?=$row["user_name"] ?></a></td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
            <?php else: echo "目前無資料";?>
            <?php endif;?>
        </div>
    </div>

  <!-- Bootstrap JavaScript Libraries -->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
    integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
  </script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
    integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
  </script>
</body>

</html>