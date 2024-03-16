<?php session_start();
if(isset($_SESSION["user"])){
    header("location: dashboard.php");
    exit;
}
?>

<!doctype html>
<html lang="en">

<head>
  <title>Sign in</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS v5.2.1 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <style>
        .login-panel{
            /* background: #ccc; */
            width: 260px;
            .logo{
                width: 72px;
            }
            /* please sign in跟remember me文字樣式 */
            & h1, .form-check-label{
                color: #fff;
                text-shadow: 0 0 5px #000;
            }
        }
        body{
            background: url(/images/Several-clouds.2e16d0ba.fill-1200x630.jpg) center center/cover;
            color: #212529;
        }
        .input-area{
            :first-child{
                .form-control{
                    border-bottom: 0;
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                }
            }
            :last-child{
                .form-control{
                    border-top-right-radius: 0;
                    border-top-left-radius: 0;
                }
            }
            /* :focus input元素特有的偽類 */
            .form-control:focus{
                position: relative;
                z-index: 2;
                /* border: 1px solid #333;
                box-shadow: none; */
            }
            .form-control{
                background: rgba(255, 255, 255, .8);
            }
            /* label是行內元素，被包覆在form-floating容器中，所以把z-index調高也不會蓋住focus */
            .form-floating{
                & label{
                    z-index: 3;
                }
            }
        }
        .btn-primary {
            --bs-btn-color: #fff;
            --bs-btn-bg: #348FFF;
            --bs-btn-border-color: #348FFF;
            --bs-btn-hover-color: #fff;
            --bs-btn-hover-bg: #334EFF;
            --bs-btn-hover-border-color: #0a58ca;
            --bs-btn-focus-shadow-rgb: 49,132,253;
            --bs-btn-active-color: #fff;
            --bs-btn-active-bg: #0a58ca;
            --bs-btn-active-border-color: #0a53be;
            --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
            --bs-btn-disabled-color: #fff;
            --bs-btn-disabled-bg: #0d6efd;
            --bs-btn-disabled-border-color: #0d6efd;
        }
    </style>
</head>

<body>
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="login-panel">
            <img src="/images/bootstrap-logo.svg" alt="" class="logo">

            <h1 class="h3 md-3 fw-normal">Please sign in</h1>
            <!-- 若有輸入錯誤，且次數達5次以上，不顯示輸入表單 -->
            <?php if(isset($_SESSION["error"]["times"]) && $_SESSION["error"]["times"]>5): ?>
            <div class="text-danger text-center">錯誤次數已達上限，請稍後再試</div>
            <?php else: ?>
            <form action="doLogin.php" method="post">
                <div class="input-area">
                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="Email address" name="email">
                        <label for="floatingInput">Email address</label>
                    </div>
        
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password">
                        <label for="floatingPassword">Password</label>
                    </div>
                </div>
                <?php if(isset($_SESSION["error"]["message"])): ?>
                <div class="mt-2 text-danger"><?=$_SESSION["error"]["message"]?></div>
                <?php endif;?>
                <div class="py-2">
                    <div class="form-check text-start my-3">
                        <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">Remember me</label>
                    </div>
                </div>

                <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
            </form>
            <?php endif;?>
            <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </div>
        <?php unset($_SESSION["error"]["message"]); ?>

    
  <!-- Bootstrap JavaScript Libraries -->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
    integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
  </script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
    integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
  </script>
</body>

</html>