<?php
// 若require_once()讀入的程式錯誤，會提前終止整支程式
require_once("../db_connect.php");
// 取得資料總筆數
$sqlTotal="SELECT * FROM users WHERE valid=1";
$resultTotal=$conn->query($sqlTotal);
$totalUser=$resultTotal->num_rows;

// 預設每頁資料顯示4筆
$perPage=4;
// 無條件進位，計算顯示所有資料需要的頁數
$pageCount=ceil($totalUser/$perPage);

if(isset($_GET["search"])){
    $search=$_GET["search"];
    $sql="SELECT * FROM users WHERE name LIKE '%$search%' AND valid=1";
}elseif(isset($_GET["page"]) && isset($_GET["order"])){
    $page=$_GET["page"];
    $order=$_GET["order"];
    switch($order){
        case 1:
            $orderSql="ASC";
            break;
        case 2:
            $orderSql="DESC";
            break;
    }
    // 每頁第一筆資料的id
    $startItem=($page-1)*$perPage;
    // ORDER BY id ASC: 依照id由小到大排序
    $sql="SELECT * FROM users WHERE valid=1 ORDER BY id $orderSql LIMIT $startItem,$perPage";
}else{
    // 初次進入頁面，給予page初始值1
    $page=1;
    $order=1;
    // 從[4]開始，拿四筆資料
    $sql="SELECT * FROM users WHERE valid=1 ORDER BY id ASC LIMIT 0,$perPage";
}

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

  <!-- 引入UI同樣可用require_once()，但習慣上會使用include，即使樣式檔案讀入失敗，程式也會繼續執行 -->
<?php include("css.php"); ?>
</head>

<body>
    <div class="container">
        <?php
            $userCount=$result->num_rows;
        ?>
        <!-- 增加使用者按鍵 -->
        <div class="py-2 d-flex justify-content-end">
            <a class="btn btn-primary fs-5 px-4" href="add-user.php"><i class="bi bi-person-fill-add" title="增加使用者"></i></a>
        </div>
        <div class="py-2">
            <form action="" method="get">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search user name..." name="search">
                    <button class="btn btn-primary" type="submit" id=""><i class="bi bi-search"></i></button>
                </div>
            </form>
            <div>
                <?php if(isset($_GET["search"])):?>
                    <a class="btn btn-primary mb-2" href="user-list.php"><i class="bi bi-arrow-left" title="回使用者列表"></i></a><br>
                    符合資料共 <?=$userCount?> 筆
                    <?php echo "(關鍵字：".$_GET["search"].")";?>
                <?php endif;?>
            </div>
        </div>
        <?php if(!isset($_GET["search"])): ?>
        <div class="pb-2 d-flex justify-content-end">
            <div class="btn-group">
                <a class="btn btn-primary" href="user-list.php?page=<?=$page?>&order=1">id <i class="bi bi-sort-down-alt"></i></a>
                <a class="btn btn-primary" href="user-list.php?page=<?=$page?>&order=2">id <i class="bi bi-sort-down"></i></a>
            </div>
        </div>
        <?php endif;?>
        <div class="pb-2 d-flex justify-content-end">
            <div class="btn-group">
                <a class="btn btn-info" href="" id="ASC">id <i class="bi bi-sort-down-alt"></i></a>
                <a class="btn btn-info" href="" id="DESC">id <i class="bi bi-sort-down"></i></a>
            </div>
        </div>
        <?php
            // fetch_all()的參數:ASSOC->關聯式陣列;NUM->索引式陣列;BOTH->兩者皆有
            $rows=$result->fetch_all(MYSQLI_ASSOC);
            // $rows現在是關聯式陣列
        ?>
        <!-- 當存在下一筆資料時 -->
        <?php if($userCount>0): ?>
        <table class="table table-bordered">
            <thead>
                <tr class="text-center">
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Pohne</th>
                    <th>用戶詳情</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach($rows as $row): ?>
                <tr class="change-order">
                    <td><?=$row["id"]?></td>
                    <td><?=$row["name"]?></td>
                    <td><?=$row["email"]?></td>
                    <td><?=$row["phone"]?></td>
                    <td class="text-center">
                        <a class="btn btn-primary fs-6 px-3" href="user.php?id=<?= $row["id"]?>"><i class="bi bi-info-circle-fill" title="詳細資料"></i></a>
                    </td>
                </tr>
                <?php endforeach;?>
            </tbody>
        </table>
        <!-- 沒有輸入搜尋時，顯示頁碼 -->
        <?php if(!isset($_GET["search"])): ?>
        <div class="py-2">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <?php for($i=1;$i<=$pageCount;$i++):?>
                    <li class="page-item <?php if($page==$i) echo "active"?>">
                        <a class="page-link" href="user-list.php?page=<?=$i?>&order=<?=$order?>"><?=$i?></a></li>
                    <?php endfor;?>
                </ul>
            </nav>
        </div>
        <?php endif;?>
        <?php else: ?>
            目前無使用者資料
        <?php endif;?>
    </div>

    <script>
    const ascBtn=document.getElementById("ASC"), descBtn=document.getElementById("DESC");
    const rowOrder=document.getElementsByClassName("change-order");
    ascBtn.addEventListener("click",function(){
        rowOrder.style.backgroundColor= "red";
    })
    </script>
  <!-- Bootstrap JavaScript Libraries -->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
    integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
  </script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
    integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
  </script>
  <script>
    let users=<?=json_encode($rows) ?>;
    console.log(users);
  </script>
</body>

</html>