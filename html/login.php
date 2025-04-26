<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="../css/styleAll.css">
    <link rel="shortcut icon" href="../resources/DDB(4).png" />
</head>
<body>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    include '../93vTP979/_conn.php';
    $loggedin = false;
    $email = $_POST['email'];
    $password = $_POST['password'];
    $sql = "SELECT * from p7udata WHERE email='$email' AND password='$password'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    print_r($result);

    if (mysqli_num_rows($result) == 1) {
        $loggedin = true;
        session_start();
        $_SESSION['loggedin'] = true;
        $_SESSION['type'] = $row['type'];
        $_SESSION['firstname'] = $row['firstname'];
        $_SESSION['lastname'] = $row['lastname'];
        $_SESSION['email'] = $row['email'];
        $_SESSION['countrycode'] = $row['countrycode'];
        $_SESSION['mobnum'] = $row['mobnum'];

        header("location: dikhadungaboss.com/dikhadungaboss.php");
    }
    else{
        echo "<script>alert('Incorrect email/password');</script>";
    }
}
?>
    <div class="form_wrapper">
        <div class="form_container">
            <div class="title_container">
                <h2 style="font-family: century gothic">Login</h2><br><br>
                <hr>
            </div>

            <div class="row clearfix">
                <div>
                    <form action="login.php" method="post">

                        <div class="input_field">
                            <span><i class="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                            <input type="email" name="email" placeholder="Email" required>
                        </div>

                        <div class="input_field">
                            <span>
                                <input type="password" name="password" placeholder="Password" required id="logpassword"></span>
                            <span style="height: 170%;"><i class="fa fa-lock" aria-hidden="true"></i>
                            </span>
                            <img src="../resources/eye-close.png" alt="eye-close" style="position: relative; left: 90%; margin-bottom: -3%" id="logeyeicon">
                        </div><br>



                        <input class="button" type="submit" value="Login">

                        <div class="extraLinks1">
                            <p>Need help? <a class="customLink1" href="forgot.html">Forgot Password</a></p>
                        </div>
                        <hr style="margin-bottom: 20px;">
                        <br>
                        <div class="media-options">
                            <a href="https://facebook.com" class="field facebook" target="_blank">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" class="facebook-img">
                                <!-- <i class='bx bxl-facebook facebook-icon'></i> -->
                                <span>Login with Facebook</span>
                            </a>
                        </div>

                        <div class="media-options">
                            <a href="https://accounts.google.com/v3/signin/identifier?dsh=S1409923751%3A1690384964794268&continue=https%3A%2F%2Fwww.google.com%3Fhl%3Den-US&ec=GAlA8wE&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession" class="field google" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png?w=740&t=st=1689855808~exp=1689856408~hmac=150cd1818e240106f70363398d592820a1ed60c21f693215deb9169d4b2e3744" alt="" class="google-img">
                                <span>Login with Google</span>
                            </a>
                        </div>

                        <div class="extraLinks2"><br>
                            <p>Don't have a Account? <a class="customLink2" href="register.php">Sign Up</a></p>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    </div>



    <div class="sliderbody">
        <div class="scontainer">
            <div class="slide active">
                <img src="https://www.shapesbyhydro.com/globalassets/shapes/expert-thoughts/materials-for-supertall-buildings01.jpg" alt="" />
            </div>
            <div class="slide">
                <img src="https://nla-production.s3.eu-west-2.amazonaws.com/27723/marsh-wall-tall-buildings-survey-tn.jpg?v=1618504929" alt="" />
            </div>
            <div class="slide">
                <img src="https://hbr.org/resources/images/article_assets/2023/01/Jan23_07_iMdsjoiftZo_-o9F8dRoSucM.jpg" alt="" />
            </div>
            <div class="slide">
                <img src="https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>
            <!-- <div id="button-prev" class="slider-button"> < </div>
            <div id="button-next" class="slider-button"> > </div> -->
            <div class="dots-container">
                <div class="dot activeDot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>
    </div>


    <!-- <p class="credit">Developed By <a target="_blank" href="#">Ali Aslan</a></p> -->
    <script>
        let eyeicon2 = document.getElementById("logeyeicon");
        let password2 = document.getElementById("logpassword");
        eyeicon2.onclick = function() {
            if (password2.type == "password") {
                password2.type = "text";
                eyeicon2.src = "../resources/eye-open.png";
            } else {
                password2.type = "password";
                eyeicon2.src = "../resources/eye-close.png";
            }
        }
    </script>
    <!-- <script src="../js/country.js"></script> -->
    <script src="../js/sliderScript.js"></script>
</body>

</html>