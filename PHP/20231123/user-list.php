<?php
require_once("../db_connect.php");

$sql="SELECT * FROM users";
// $conn->query() 向資料庫拿資料，參數$sql索取了users資料表中所有的資料
$result=$conn->query($sql);
?>

<!doctype html>
<html lang="en">

<head>
  <title>user list</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS v5.2.1 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

</head>

<body>
    <div class="container">
        <?php
            $userCount=$result->num_rows;
        ?>
        <div class="py-2 d-flex justify-content-between">
            <div>共 <?=$userCount?> 人</div>
            <a class="btn btn-info" href="add-user.php">增加使用者</a>
        </div>
        <div>
            <?php
            // fetch_assoc() 抓一筆資料，把資料轉換成關聯式陣列
            // $row = $result->fetch_assoc();
            // var_dump($row);
            // echo "<br>";
            // // fetch_row() 抓一筆資料，把資料轉換成索引式陣列
            // $row = $result->fetch_row();
            // var_dump($row);
            // echo "<br>";
            // // fetch_array() 抓一筆資料，把資料轉換成關聯&索引式陣列
            // $row = $result->fetch_array();
            // var_dump($row);
            ?>
        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Pohne</th>
                </tr>
            </thead>
            <tbody>
                <?php if($userCount>0): ?>
                <!-- 當存在下一筆資料時 -->
                <?php while($row=$result->fetch_assoc()): ?>
                <tr>
                    <td><?=$row["id"]?></td>
                    <td><?=$row["name"]?></td>
                    <td><?=$row["email"]?></td>
                    <td><?=$row["phone"]?></td>
                </tr>

                <?php endwhile;?>
                <?php else: ?>
                    目前無使用者資料
                <?php endif;?>
            </tbody>
        </table>
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