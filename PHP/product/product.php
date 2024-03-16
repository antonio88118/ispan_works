<?php
require_once("../db_connect.php");

if(!isset($_GET["id"])){
    header("Location: /404.php");
    exit;
}
$id=$_GET["id"];
$sql="SELECT * FROM product WHERE id=$id";
$result=$conn->query($sql);
// 查無資料的話，顯示404
if($result->num_rows==0){
    header("Location: /404.php");
    exit;
}
$row=$result->fetch_assoc();

$sqlUserLike="SELECT user_like.*, users.* FROM user_like
JOIN users ON user_like.user_id = users.id
WHERE user_like.product_id=$id";
$sqlUserResult=$conn->query($sqlUserLike);
$userRow=$sqlUserResult->fetch_all(MYSQLI_ASSOC);

?>

<!doctype html>
<html lang="en">

<head>
  <title><?=$row["name"]?></title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<?php include("../user/css.php") ?>
</head>

<body>
    <div class="container">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><i class="bi bi-house-fill"></i><a href="product-list.php">產品列表</a></li>
            <li class="breadcrumb-item active" aria-current="page"><?=$row["name"] ?></li>
        </ol>
    </nav>
        <div class="row g-3">
            <div class="col-md-6">
                <img class="img-fluid" src="/images/<?=$row["img"]?>" alt="">
            </div>
            <div class="col-md-6">
                <h1><?=$row["name"]?></h1>
                <div class="h2 text-danger">$<?=number_format($row["price"]) ?></div>
                <h2 class="mt-3">已收藏用戶</h2>
                <?php if($sqlUserResult->num_rows==0): echo "無用戶收藏"?>
                <?php else: ?>
                <table class="table table-boarded">
                    <thead>
                        <tr>
                            <th>用戶編號</th>
                            <th>用戶名</th>
                            <th>手機</th>
                            <th>信箱</th>
                        </tr>
                    </thead>
                    <?php foreach($userRow as $user):?>
                    <tbody>
                        <tr>
                            <td><?=$user["user_id"]?></td>
                            <td><a href="/user/user.php?id=<?=$user["user_id"]?>"><?=$user["name"]?></a></td>
                            <td><?=$user["phone"]?></td>
                            <td><?=$user["email"]?></td>
                        </tr>
                    </tbody>
                    <?php endforeach;?>
                </table>
                <?php endif; ?>
            </div>
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