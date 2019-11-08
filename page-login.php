<?php
session_start();
$message="";
if(isset($_POST['login_submit'])) {
 $con = mysqli_connect('localhost','root','','uadb') or die('Unable To connect');
$result = mysqli_query($con,"SELECT * FROM user WHERE email='" . $_POST["email"] . "' and password = '". $_POST["password"]."'");
$row  = mysqli_fetch_array($result);
if(is_array($row)) {
    echo "yes";
$_SESSION["id"] = $row['id'];
$_SESSION["name"] = $row['name'];
$_SESSION["email"] = $row['email'];
$_SESSION["user_level"] = $row['user_level'];
} else {
    echo "no";
$message = "Invalid Username or Password!";
}
}
if(isset($_SESSION["id"])) {
header("Location:overview.php");
}
?>
<!DOCTYPE html>
<html class="h-100" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Utility Analytics Dashboard - Login</title>
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon.png">
    <!-- <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"> -->
    <link href="css/style.css" rel="stylesheet">
    
</head>

<body class="h-100">
    
    <!--*******************
        Preloader start
    ********************-->
    <div id="preloader">
        <div class="loader">
            <svg class="circular" viewBox="25 25 50 50">
                <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10" />
            </svg>
        </div>
    </div>
    <!--*******************
        Preloader end
    ********************-->

    



    <div class="login-form-bg h-100">
        <div class="container h-100">
            <div class="row justify-content-center h-100">
                <div class="col-xl-6">
                    <div class="form-input-content">
                        <div class="card login-form mb-0">
                            <div class="card-body pt-5">
                                <a class="text-center" href="page-login.php"> <h4>Utility Login</h4></a>
        
                                <form class="mt-5 mb-5 login-input" method='POST'>
                                    <div class="form-group">
                                        <input name= "email" type="email" class="form-control" placeholder="Email">
                                    </div>
                                    <div class="form-group">
                                        <input name = "password" type="password" class="form-control" placeholder="Password">
                                    </div>
                                    <button name="login_submit" class="btn login-form__btn submit w-100">Sign In</button>
                                </form>
                                <p class="mt-5 login-form__footer">Dont have account? <a href="page-register.php" class="text-primary">Sign Up</a> now</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    

    <!--**********************************
        Scripts
    ***********************************-->
    <script src="plugins/common/common.min.js"></script>
    <script src="js/custom.min.js"></script>
    <script src="js/settings.js"></script>
    <script src="js/gleek.js"></script>
    <script src="js/styleSwitcher.js"></script>
</body>
</html>





