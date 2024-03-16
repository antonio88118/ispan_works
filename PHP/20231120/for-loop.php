<!doctype html>
<html lang="en">

<head>
  <title>平方</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS v5.2.1 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

</head>

<body>
    <div class="container">
        <div class="row">
            <!-- 先在外部判斷迴圈條件 -->
            <?php for($i=2, $j=2;$i<10, $j<10;$i++, $j++):?>
            <div class="col-lg-3 col-md-4 col-sm 6">
                <div class="card p-2">
                    <!-- 結果容器內進行計算 -->
                    <?=$i?>x<?=$j?>=<?=$i*$j?>
                </div>
            </div>
            <?php endfor?>
        </div>
    </div>
</body>

</html>