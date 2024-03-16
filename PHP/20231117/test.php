<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>test</title>
</head>
<body>
    <h1>Hello World</h1>
    <h1><?php echo "Hello World" ?></h1>
    <?php echo "<h1>Hello World</h1>" ?>
    <!-- echo的省略寫法 -->
    <h1><?= "Hello world" ?></h1>
    <!-- 取得?id= -->
    <h2>id: <?= $_GET["id"] ?></h2>
    <!-- http://localhost/20231117/test.php?id=2&name=Jack -->
    <h2>name: <?= $_GET["name"] ?></h2>
    
</body>
</html>