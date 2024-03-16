<?php 
require_once("../db_connect.php");

if(!isset($_GET["start"]) || !isset($_GET["end"])){
    header("Location: product-orders.php");
    exit;
}
$dateStart=$_GET["start"];
$dateEnd=$_GET["end"];

// 從user_order取出:user_order所有的資料、product中的name(命名product_name)、product中的price、users中的name(命名user_name)
$sql="SELECT user_order.*, product.name AS product_name, product.price, users.name AS user_name FROM user_order 
-- 透過關聯:product中的id和user_order的product_id相同，且users中的id和user_order的user_id相同者
JOIN product ON product.id = user_order.product_id 
JOIN users ON users.id = user_order.user_id
-- 雙引號內用單引號''
WHERE user_order.order_date BETWEEN '$dateStart' AND '$dateEnd'
ORDER BY user_order.order_date DESC";
$result=$conn->query($sql);
$rows=$result->fetch_all(MYSQLI_ASSOC);

$count=$result->num_rows;

$pageTitle=$dateStart."~".$dateEnd."銷售紀錄";
?>

<!doctype html>
<html lang="en">

<head>
  <title><?=$pageTitle ?></title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <?php include("../user/css.php"); ?>

</head>

<body>
    <div class="container">
    <?php if($count>0): ?>    
    <!-- 因為fetch_all()，陣列要加[0]；每筆資料的product_name都相同，所以可以直接呼叫 -->
        <h1 class="text-center"><?=$pageTitle ?></h1>
        <div class="py-2">
            <a class="btn btn-primary" href="product-orders.php"><i class="bi bi-arrow-left" title="回總銷售清單"></i></a>
        </div>

        <div class="py-2">
            <form action="date-range.php">
                <div class="row g-3">
                    <div class="col-auto">
                        <input type="date" class="form-control" name="start" value="<?=$dateStart?>">
                    </div>
                    <div class="col-auto"> ~ </div>
                    <div class="col-auto">
                        <input type="date" class="form-control" name="end" value="<?=$dateEnd?>">
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary">GO</button>
                    </div>
                </div>
            </form>
        </div>

        <div class="table-responsive">
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
                    <?php 
                    $totalTotal=0;
                    foreach($rows as $row): ?>
                    <tr>
                        <td><?=$row["id"] ?></td>
                        <td><?=$row["order_date"] ?></td>
                        <td><?=$row["product_name"] ?></td>
                        <td class="text-end"><?=$row["amount"] ?></td>
                        <!-- number_format()加入逗號 -->
                        <td class="text-end">$<?=number_format($row["price"]) ?></td>
                        <td class="text-end">$
                            <?php 
                            $total=$row["price"]*$row["amount"];
                            $totalTotal+=$total;
                            echo number_format($total); ?>
                        </td>
                        <td><?=$row["user_name"] ?></td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
            <div class="text-end">總銷售額: $<?= number_format($totalTotal)?></div>    
        </div>
        <?php else: echo "目前無資料";?>
        <?php endif;?>
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