<?php
// 若沒有輸入id，頁面回到user-list
if(!isset($_GET["id"])){
    header("location: user-list.php");
}
// 從user-list按鍵的href="user.php?id=<?= $row["id"]?/>取得id
$id=$_GET["id"];
require_once("../db_connect.php");

$sql="SELECT * FROM users WHERE id=$id AND valid=1";
// 此時$result會存入$sql指令指定的資料
$result=$conn->query($sql);
// $result儲存的資料筆數，此時只有對應id的一筆
$userCount = $result->num_rows;
// echo "共有".$userCount."筆資料";

$row=$result->fetch_assoc();

// 獲得喜愛商品
$sqlLikes="SELECT user_like.*, product.* FROM user_like
JOIN product ON user_like.product_id = product.id
WHERE user_like.user_id = $id";
$resultLikes=$conn->query($sqlLikes);
$rowLikes=$resultLikes->fetch_all(MYSQLI_ASSOC);
?>

<!doctype html>
<html lang="en">

<head>
  <title>User</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<?php include("../user/css.php"); ?>

</head>

<body>
    <div class="container">
        <div class="py-2">
            <a class="btn btn-primary" href="user-list.php"><i class="bi bi-arrow-left" title="回使用者列表"></i></a>
        </div>
        <!-- 例外檢查，$userCount==0表示該id不存在資料($result的筆數0) -->
        <?php if($userCount==0): ?>
            <h1>使用者不存在</h1>
        <?php else: ?>
        <table class="table table-bordered">
            <tr>
                <th>id</th>
                <td><?=$row["id"];?></td>
            </tr>
            <tr>
                <th>name</th>
                <td><?=$row["name"];?></td>
            </tr>
            <tr>
                <th>email</th>
                <td><?=$row["email"];?></td>
            </tr>
            <tr>
                <th>phone</th>
                <td><?=$row["phone"];?></td>
            </tr>
            <tr>
                <th>create time</th>
                <td><?=$row["created_at"];?></td>
            </tr>
            <tr>
                <th>update time</th>
                <td><?=$row["update_time"];?></td>
            </tr>
        </table>
        <div class="py-2">
            <a class="btn btn-primary" href="user-edit.php?id=<?= $row["id"]?>"><i class="bi bi-pencil-fill" title="修改資料"></i></a>
        </div>
        <?php endif;?>

        <h2>收藏商品</h2>
        <?php $likesCount=$resultLikes->num_rows; if($likesCount>0):?>
        <div class="row g-3">
            <?php foreach($rowLikes as $row):?>
            <div class="col-lg-3 col-md-4 col-6">
                <a href="/product/product.php?id=<?=$row["product_id"]?>">
                    <div class="ratio ratio-4x3 mb-2">
                        <img src="/images/<?=$row["img"]?>" alt="" class="object-fit-cover">
                    </div>
                </a>
                <!-- $rowLikes沒有和users關聯，裡面只有存product的name -->
                <h3><a href="/product/product.php?id=<?=$row["product_id"]?>"><?= $row["name"]?></a></h3>
            </div>
            <?php endforeach;?>
        </div>
        <?php else: echo "尚未收藏商品"?>
        <?php endif;?>
    </div>

  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
    integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
  </script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
    integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
  </script>
</body>

</html>