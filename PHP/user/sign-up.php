<!doctype html>
<html lang="en">

<head>
  <title>Sign Up</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <?php include("../user/css.php"); ?>
    <style>
        i{
            cursor: pointer;
        }
    </style>
</head>

<body>
    <div class="container">
        <form action="doSignUp.php" method="post">
        <h1 class="text-center">Sign Up</h1>
            <div class="row mb-3">
                <label for="email" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="email" name="email">
                </div>
            </div>
            <div class="row mb-3">
                <label for="name" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="name" name="name">
                </div>
            </div>
            <div class="row mb-3">
                <label for="password" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10 d-flex justify-content-between align-items-center">
                    <input type="password" class="form-control" id="password" name="password">
                    <i class="bi bi-eye" id="viewPassword" style="margin-left: -70px; padding-right: 20px;"></i>
                    <i class="bi bi-eye-slash d-none" id="deviewPassword" style="margin-left: -70px; padding-right: 20px;"></i>
                </div>
            </div>
            <div class="row mb-3">
                <label for="repassword" class="col-sm-2 col-form-label">Re-Type Password</label>
                <div class="col-sm-10 d-flex justify-content-between align-items-center">
                    <input type="password" class="form-control" id="repassword" name="repassword">
                    <i class="bi bi-eye" id="viewRepassword" style="margin-left: -70px; padding-right: 20px;"></i>
                    <i class="bi bi-eye-slash d-none" id="deviewRepassword" style="margin-left: -70px; padding-right: 20px;"></i>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">送出</button>
        </form>
    </div>

    <script>
        const viewPasswordBtn=document.querySelector("#viewPassword"), viewRepasswordBtn=document.querySelector("#viewRepassword");
        const deviewPasswordBtn=document.querySelector("#deviewPassword"), deviewRepasswordBtn=document.querySelector("#deviewRepassword");
        const password=document.querySelector("#password"), repassword=document.querySelector("#repassword");
        viewPasswordBtn.addEventListener("click", function(){
            password.type = "text";
            viewPasswordBtn.className="bi bi-eye d-none";
            deviewPasswordBtn.className="bi bi-eye-slash";
        });
        deviewPasswordBtn.addEventListener("click", function(){
            password.type = "password";
            viewPasswordBtn.className="bi bi-eye";
            deviewPasswordBtn.className="bi bi-eye-slash d-none";
        });
        viewRepasswordBtn.addEventListener("click", function(){
            repassword.type = "text";
            viewRepasswordBtn.className="bi bi-eye d-none";
            deviewRepasswordBtn.className="bi bi-eye-slash";
        });
        deviewRepasswordBtn.addEventListener("click", function(){
            repassword.type = "password";
            viewRepasswordBtn.className="bi bi-eye";
            deviewRepasswordBtn.className="bi bi-eye-slash d-none";
        });
    </script>
  <!-- Bootstrap JavaScript Libraries -->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
    integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
  </script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
    integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
  </script>
</body>

</html>