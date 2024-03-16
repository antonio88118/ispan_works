<?php
require_once("../db_connect.php");

$sql="SELECT * FROM users WHERE valid=1 ORDER BY id DESC";
$result=$conn->query($sql);
$rows=$result->fetch_all(MYSQLI_ASSOC);

?>

<!doctype html>
<html lang="en">

<head>
  <title>Users Ajax</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS v5.2.1 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

</head>

<body>
    <div class="container">
        <button type="button" class="btn btn-primary" id="getUsers">get users</button>
        <hr>
        <div class="py-2">
          <div>id: <span id="id"></span></div>
          <div>name: <span id="name"></span></div>
          <div>email: <span id="email"></span></div>
          <div>phone: <span id="phone"></span></div>
        </div>
        <div class="row g-3">
          <?php foreach($rows as $row): ?>
          <div class="col-lg-3 col-md-4 col-6">
            <div class="d-grid">
              <button data-id="<?=$row["id"]?>" class="btn btn-primary user-btn"><?=$row["name"]?></button>
            </div>
          </div>
          <?php endforeach;?>
        </div>
    </div>
  <!-- Bootstrap JavaScript Libraries -->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
    integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous">
  </script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
    integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous">
  </script>

<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

<script>
    const getUsers=document.querySelector("#getUsers");
    getUsers.addEventListener("click", function(){
      $.ajax({
        method: "GET",  //or GET
    	  url: "/api/users.php",
    	  dataType: "json",
      })
      .done(function( response ) {
          console.log(response);
      }).fail(function( jqXHR, textStatus ) {
          console.log( "Request failed: " + textStatus );
      });
    });

    const userId=document.querySelector("#id"), name=document.querySelector("#name"), email=document.querySelector("#email"), phone=document.querySelector("#phone");
    const userBtns=document.querySelectorAll(".user-btn");

for(let i=0; i<userBtns.length; i++){
    userBtns[i].addEventListener("click", function(){
    // dataset.id=data-id
    let id=this.dataset.id;
        $.ajax({
            method: "POST",  //or GET
            url: "/api/user.php", // 請求資料的網址
            dataType: "json", // 請求資料的類型
            data:{
                id: id  // 前:傳出的變數名稱；後:值
            }
        })
        .done(function( response ) {
            let status=response.status;
        if(status==0){
            alert(response.message)
        }else{
            // console.log(response.data);
            let userData=response.data;
            userId.innerText=userData.id;
            name.innerText=userData.name;
            email.innerText=userData.email;
            phone.innerText=userData.phone;
        }
        }).fail(function( jqXHR, textStatus ) {
            console.log( "Request failed: " + textStatus );
        });
    })
}
    
</script>
</body>

</html>