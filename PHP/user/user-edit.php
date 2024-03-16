<?php
// 若沒有輸入id，頁面回到user-list
if(!isset($_GET["id"])){
    header("location: user-list.php");
}
// 從user-list按鍵的href="user.php?id=<?= $row["id"]?/>取得id
$id=$_GET["id"];
require_once("../db_connect.php");

$sql="SELECT * FROM users WHERE id=$id AND valid=1";

$result=$conn->query($sql);
$userCount = $result->num_rows;

$row=$result->fetch_assoc();
?>

<!doctype html>
<html lang="en">

<head>
  <title>User Edit</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<?php include("../user/css.php"); ?>

</head>

<body>
    <div class="modal fade" id="alertModal" tabindex="-1">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">警告：即將刪除資料</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">是否確認刪除？</div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                <a href="doDeleteUser.php?id=<?=$row["id"]?>" class="btn btn-danger">確認</a>
            </div>
            </div>
        </div>
    </div>

    <div class="container my-5">
        <form action="doUpdateUser.php" method="post">
            <?php if($userCount==0): ?>
                <h1>使用者不存在</h1>
            <?php else: ?>
            <table class="table table-bordered">
                <input type="hidden" name="id" value="<?=$row["id"] ?>">
                <tr>
                    <th>name</th>
                    <td><input type="text" class="form-control" name="name" value="<?=$row["name"] ?>"></td>
                </tr>
                <tr>
                    <th>email</th>
                    <td><input type="email" class="form-control" name="email" value="<?=$row["email"] ?>"></td>
                </tr>
                <tr>
                    <th>phone</th>
                    <td><input type="tel" class="form-control" name="phone" value="<?=$row["phone"] ?>"></td>
                </tr>
            </table>
            <div class="py-2 d-flex justify-content-between">
                <div>
                    <button type="submit" class="btn btn-primary">儲存</button>
                    <a class="btn btn-primary" href="user.php?id=<?= $row["id"]?>">取消</a>
                </div>
                <div>
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#alertModal">刪除</button>
                </div>
            </div>
        </form>
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