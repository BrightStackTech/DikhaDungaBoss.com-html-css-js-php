<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['submit'])) {
        include '../93vTP979/_conn.php';


        $radiogroup1 = $_POST["radiogroup1"];
        $firstname = $_POST["name"];
        $lastname = $_POST["lastname"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        $countrycode = $_POST["country"];
        $mobnum = $_POST["MobileNo"];
        $tnc = $_POST["t&c"];

        $sql = "INSERT INTO `p7udata` (`type`, `firstname`, `lastname`, `email`, `password`, `countrycode`, `mobnum`, `t&c`,`time`) VALUES ('$radiogroup1', '$firstname', '$lastname', '$email', '$password', '$countrycode', '$mobnum', '$tnc', current_timestamp())";

        $existSql = "SELECT * FROM `p7udata` WHERE email = '$email';";
        $existingUsers = mysqli_num_rows(mysqli_query($conn, $existSql));
        if (!($existingUsers > 1)) {
            $result = mysqli_query($conn, $sql);
            if ($result) {
                echo "<script>alert('Account created successfully');</script>";
            } else {
                echo "<script>alert('Account not created');</script>";
            }
        } else {
            echo "<script>alert('Email already exists!');</script>";
        }
    }
}
?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="../css/styleAll.css">
    <link rel="shortcut icon" href="../resources/DDB(4).png" />
</head>

<body>
    <div class="form_wrapper">
        <div class="form_container">
            <div class="title_container">
                <h2 style="font-family: century gothic">Sign Up</h2><br><br>
                <hr style="margin-bottom:  -20px;">
            </div>

            <div class="row clearfix">
                <div>
                    <form method="post" action="register.php">
                        <p> I am</p>
                        <div class="input_field  radio_option">
                            <input type="radio" name="radiogroup1" id="rd1" value="Buyer/Owner/Tenant">
                            <label for="rd1">Buyer/Owner/Tenant</label>
                            <input type="radio" name="radiogroup1" id="rd2" value="Agent">
                            <label for="rd2">Agent</label>
                            <input type="radio" name="radiogroup1" id="rd3" value="Builder">
                            <label for="rd3">Builder</label>
                        </div>


                        <div class="row clearfix">
                            <div class="col_half">
                                <div class="input_field">
                                    <span>
                                        <i class="fa fa-user" aria-hidden="true"></i>
                                    </span>
                                    <input type="text" name="name" placeholder="First Name" required>
                                </div>
                            </div>
                            <div class="col_half">
                                <div class="input_field">
                                    <span>
                                        <i class="fa fa-user" aria-hidden="true"></i>
                                    </span>
                                    <input type="text" name="lastname" placeholder="Last Name" required>
                                </div>
                            </div>
                        </div>

                        <div class="input_field">
                            <span>
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                            <input type="email" name="email" placeholder="Email" required>
                        </div>

                        <div class="input_field">
                            <span>
                                <input type="password" name="password" placeholder="Password" required id="ppassword">
                            </span>
                            <span style="height: 170%;">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                            </span>
                            <img src="../resources/eye-close.png" alt="eye-close" style="position: relative; left: 90%; margin-bottom: -3%" id="eyeicon">
                        </div><br>

                        <!-- <div class="input_field">
                        <span>
                            <input type="password" name="password" placeholder="Re-type Password" required id="repassword">
                        </span>
                        <span  style="height: 170%;">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                        </span>
                        <img src="../resources/eye-close.png" alt="eye-close" style="position: relative; left: 90%; margin-bottom: -3%" id="reeyeicon">
                    </div><br> -->




                        <div class="input_field select_option">
                            <div class="input_field">
                                <span>
                                    <select name="country" id="selectCountry" style="width: 70px;">
                                    </select>
                                </span>
                                <input type="number" name="MobileNo" placeholder="Mobile Number" maxlength="10" id="mobileNUMBER" style="width: 388%; margin-left: 80px;">
                            </div>
                        </div>


                        <div class="input_field checkbox_option">
                            <input type="checkbox" name="t&c" id="cb1" value="1" required>
                            <label for="cb1" style="font-size: 11px;">I agree to Dikhadungaboss T&C, Privacy & Cookie Policy</label>
                        </div>

                        <!-- <div class="input_field checkbox_option">
                        <input type="checkbox" name="" id="cb2">
                        <label for="cb2">I want to receive the newsletter</label>
                    </div> -->

                        <input class="button" type="submit" name="submit" value="Register">

                        <div class="extraLinks3">
                            <p>Already Registered? <a class="customLink3" href="login.php">Login</a></p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>


    <div class="sliderbody" style="margin-top:-90px">
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
    <script src="../js/country.js"></script>
    <script src="../js/sliderScript.js"></script>
</body>

</html>