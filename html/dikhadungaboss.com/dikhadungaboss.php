<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link
    rel="shortcut icon"
    href="../../resources/DDB(4).png"/>

    <title>DikhaDungaBoss.com</title>
</head>
<body>
    <header>
        <nav class="navGeneral">
            <!-- <img src="Logo.png" alt="Logo.img"> -->
            <img src="../../resources/DDB(3).png" alt="DDB(2).png" style="border-radius: 20px;" class="mainlogo">
            <div class="supernav-menu">
                <div class="nav__menu" id="nav-menu">
                    <ul class="nav-list">
                    <?php if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
                            echo '<li class="nav-item"><a href="../logout.php" class="nav__link">Logout</a></li><li class="nav-item"><a class="nav__link" onclick="profile()">Profile</a></li>';
                        } else {
                            echo '<li class="nav-item"><a href="../login.php" class="nav__link">Login</a></li>';
                        } ?>
                        <li class="nav-item"><a href="#" class="nav__link">Post Property</a></li>
                        <li class="nav-item"><a href="../contactus.html" class="nav__link">Contact Us</a></li>
                        <li class="nav-item"><a href="../aboutus.html" class="nav__link">About Us</a></li>
                    </ul>
                </div>
                <div class="nav__close" id="nav-close">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div> 
                <div class="nav__toggle" id="nav-toggle">
                    <h1  onclick="horizontal()"> ||| </h1>
                    <!-- <i class="fa-solid fa-bars"></i> -->
                </div>        
        </nav>
        <script>
            let profile = ()=>{
                document.getElementById("profile").style.display ="flex";
            };
            let profileclose = ()=>{
                document.getElementById("profile").style.display ="none";
            };
        </script>
        <?php if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
            echo '<section id="profile" style="display:none;">
                            <div>
                                <h2>Name: ' . $_SESSION['firstname'] . "&nbsp;" . $_SESSION['lastname'] . '</h2>
                                <h2>' . $_SESSION['type'] . '</h2>
                                <h2>' . $_SESSION['email'] . '</h2>
                                <h2>' . $_SESSION['countrycode'] . "&nbsp;" . $_SESSION['mobnum'] . '</h2>
                                <button onclick="profileclose()">Close</button>
                            </div>
                        </section>';
        }
        ?>
        <br>
        <!-- <hr /> -->
        <div>
          <!-- <h1>Home That Makes <br />You Living Life!</h1> -->
          <?php if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
                echo "<h1>Welcome " . $_SESSION['firstname'] . " <br />Chalo ghar dekhte hai</h1>";
            } else {
                echo "<h1>D-Maart ke bajume <br />ghar chahiye? <br />Dikha Dunga Bossss</h1>";
            } ?>
          <p>
            <!-- Are you looking for amazing Real estate? Don't worry! we got it for
            you -->
            <!-- Aajaao Boss! -->
          </p><br><br><br>
          <a href="#section" class="AajaoBoss">
            <button>Aajaao Boss!</button></a>
        </div>
        <div class="search" >
            <div class="searchwrapper">
                <a href="" target="_blank" hidden id="searchurl"></a>
                <div class="input-boxx">
                    <input type="text" placeholder="Enter location"/>
                </div>
                <div>
                    <button class="iconn" >Search</button>
                </div>
                <div class="autocom-box">
                    <!-- here list are inserted from javascript -->
                </div>
            </div>
        </div>
    </header>


    <!-- TABS -->

    <section class="my-logos" id="section">
        <a href="#" style="color: #ffffff; font-size:20px;"><h3>Buy</h3></a><p style="color: #ffffff; font-weight: bolder;">|</p>
        <a href="#" style="color: #ffffff; font-size:20px;"><h3>Sell</h3></a><p style="color: #ffffff; font-weight: bolder;">|</p>
        <a href="#" style="color: #ffffff; font-size:20px;"><h3>Rent</h3></a><p style="color: #ffffff; font-weight: bolder;">|</p>
        <a href="#" style="color: #ffffff; font-size:20px;"><h3>Pay Rent</h3></a><p style="color: #ffffff; font-weight: bolder;">|</p>
        <a href="#" style="color: #ffffff; font-size:20px;"><h3>Paying Guest</h3></a>
        <!-- <a href="#" style="color: #ffffff; font-size:20px;"><h3>Post Property</h3></a> -->
        <!-- <div class = "services">
            <img src = "PackersMovers.png">
            <a href="#" style="text-align: center"><h3>Packers and Movers</h3></a>
        </div>
        <div class = "services">
            <img src = "BestDeals.png">
            <a href="#" style="text-align: center"><h3>Best Home Loan deals</h3></a>
        </div>
        <div class = "services">
            <img src = "PayRent.png">
            <a href="#" style="text-align: center"><h3>Pay Rent</h3></a>
        </div>
        <div class = "services">
            <img src = "LegalServices.png">
            <a href="#" style="text-align: center"><h3>Legal Services</h3></a>
        </div> -->
    </section><br><br>
    <!-- <div id="progress-bar"></div> -->



    <!--WE SELL PROPERTIES IN THESE PLACES-->

    <!-- <p style="background-color:red; height: 30px; align-items: center;">
        <marquee style="color:#ffffff; font-size: 20px;"><b>Currently we operate in only those cities which are mentioned below.  New cities will be added soon!</b></marquee>
    </p>
    <br><br><br> -->
    <section class="card-wapper-section">
        <h2><b>We offer services in following cities:</b></h2>
        <div class="card-wapper">
            <div class="card">
                <!-- <img src="cardImage1.png" alt="img1"> -->
                <img src="../../resources/cardy1.png" alt="img1">
                <div class="imgcontainer"></div>
                <div class="card-box">
                    <div>
                        <h3>Mumbai</h3>
                        <!-- <p>₹2.51 Cr.</p> -->
                    </div>
                    <button><a href="../../html/Mumbaisubproperties/Mumsubproperties1.html" target="_blank">See</a></button>
                </div>
            </div>
            <div class="card">
                <img src="../../resources/cardy2.png" alt="img1">
                <div class="imgcontainer"></div>
                <div class="card-box">
                    <div>
                        <h3>Thane</h3>
                        <!-- <p>₹75 Lac.</p> -->
                    </div>
                    <button><a href="../../html/Thanesubproperties/Thanesubproperties1.html" target="_blank">See</a></button>
                </div>
            </div>
            <div class="card">
                <img src="../../resources/cardy3.png" alt="img1">
                <div class="imgcontainer"></div>
                <div class="card-box">
                    <div>
                        <h3>Navi Mumbai</h3>
                        <!-- <p>₹75 Lac.</p> -->
                    </div>
                    <button><a href="../../html/NaviMumbaisubproperties/NaviMumsubproperties1.html" target="_blank">See</a></button>
                </div>
            </div>
            <div class="card">
                <img src="../../resources/cardy4.png" alt="img1">
                <div class="imgcontainer"></div>
                <div class="card-box">
                    <div>
                        <h3>Delhi</h3>
                        <!-- <p>₹1.42 Cr.</p> -->
                    </div>
                    <button><a href="../../html/Delhisubproperties/Delhisubproperties1.html" target="_blank">See</a></button>
                </div>
            </div>
            <div class="card">
                <img src="../../resources/cardy5.png" alt="img1">
                <div class="imgcontainer"></div>
                <div class="card-box">
                    <div>
                        <h3>Gurgoan</h3>
                        <!-- <p>₹1.95 Cr.</p> -->
                    </div>
                    <button><a href="../../html/Gurgoansubproperties/Gurgoansubproperties1.html" target="_blank">See</a></button>
                </div>
            </div>
            <div class="card">
                <img src="../../resources/cardy6.png" alt="img1">
                <div class="imgcontainer"></div>
                <div class="card-box">
                    <div>
                        <h3>New Delhi</h3>
                        <!-- <p>₹5.42 Cr.</p> -->
                    </div>
                    <button><a href="../../html/NewDelhisubproperties/NewDelhisubproperties1.html" target="_blank">See</a></button>
                </div>
            </div>
            <div class="card">
                <img src="../../resources/cardy7.png" alt="img1">
                <div class="imgcontainer"></div>
                <div class="card-box">
                    <div>
                        <h3>Pune</h3>
                        <!-- <p>₹2.54 Cr.</p> -->
                    </div>
                    <button><a href="../../html/Punesubproperties/Punesubproperties1.html" target="_blank">See</a></button>
                </div>
            </div>
            <div class="card">
                <img src="../../resources/cardy8.png" alt="img1">
                <div class="imgcontainer"></div>
                <div class="card-box">
                    <div>
                        <h3>Banglore</h3>
                        <!-- <p>₹6.90 Cr.</p> -->
                    </div>
                    <button><a href="../../html/Bangloresubproperties/Bansubproperties1.html" target="_blank">See</a></button>
                </div>
            </div>
            <div class="card">
                <img src="../../resources/cardy9.png" alt="img1">
                <div class="imgcontainer"></div>
                <div class="card-box">
                    <div>
                        <h3>Ahemdabad</h3>
                        <!-- <p>₹1.12 Cr.</p> -->
                    </div>
                    <button><a href="../../html/Ahemdabadsubproperties/ADBsubproperties1.html" target="_blank">See</a></button>
                </div>
            </div>
        </div>
    </section>



        
    <!-- <br><br><br><br><br><br><br><br> -->
    
    
    <!-- <section class="section-work-data">
        <div>
            <h2 class="counter-numbers" data-number="2000">0+</h2>
            <p>project completed</p>
        </div>
        <div>
            <h2 class="counter-numbers" data-number="6000">0+</h2>
            <p>happy clients</p>
        </div>
        <div>
            <h2 class="counter-numbers" data-number="5000">0+</h2>
            <p>cups of coffee</p>
        </div>
        <div>
            <h2 class="counter-numbers" data-number="3000">0+</h2>
            <p>real professionals</p>
        </div>
    </section> -->
<!--     

    <br><br><br><br><br> -->

    <!--TRENDING PROPERTIES-->

    <div class="trending-properties">
        <p id = "more"><a href="#" style="color:red"><u>more</u>-></a></p>
        <p id = "trending"><br><br>Trending Properties in Mumbai</p><hr size="10px"><br>
    </div>
    <div class = "media-scroller">
        <div class = "media-element">
            <img src="../../resources/element1.jpg">
            <p class = "title">Short title</p>
        </div>
        <div class = "media-element">
            <img src="../../resources/element2.jpg">
            <p class = "title">Short title</p>
        </div>
        <div class = "media-element">
            <img src="../../resources/element3.jpg">
            <p class = "title">Short title</p>
        </div>
        <div class = "media-element">
            <img src="../../resources/element4.jpg">
            <p class = "title">Short title</p>
        </div>
        <div class = "media-element">
            <img src="../../resources/element5.jpg">
            <p class = "title">4 BHK Flat For Sale in Chaitanya Towers, Prabhadevi, Mumbai</p>
        </div>
        <div class = "media-element">
            <img src="../../resources/element6.jpg">
            <p class = "title">2 BHK Flat For Sale in Rizvi Oak, Malad East, Mumbai</p>
        </div>
        <div class = "media-element">
            <img src="../../resources/element7.jpg">
            <p class = "title">3 BHK Flat For Sale in Dongri, Mumbai</p>
        </div>
        <div class = "media-element">
            <img src="../../resources/element8.jpg">
            <p class = "title">2 BHK Flat For Sale in Mona Apartments, Andheri West, Mumbai</p>
        </div>
        <div class = "media-element">
            <img src="../../resources/element9.jpg">
            <p class = "title">2 BHK Flat For Sale in Runwal Orchard Residency, Ghatkopar West, Mumbai</p>
        </div>
        <div class = "media-element">
            <img src="../../resources/element10.jpg">
            <p class = "title">1 BHK Flat For Sale in Colaba, Mumbai</p>
        </div>
        <div class = "media-element">
            <img src="../../resources/element11.jpg">
            <p class = "title">4 BHK Flat For Sale in Acme Akshay Girikunj, Andheri West, Mumbai</p>
        </div>
        <div class = "media-element">
            <img src="../../resources/element12.jpg">
            <p class = "title">2 BHK Flat For Sale in Mahadev Apartment, Kandivali East, Mumbai</p>
        </div>
    </div>


    <div class="trending-properties3">
        <p id = "more3"><a href="#" style="color:red"><u>more</u>-></a></p>
        <p id = "trending3"><br><br>Trending Properties in Thane</p><hr size="10px"><br>
    </div>
    <div class = "media-scroller3">
        <div class = "media-element3">
            <img src="../../resources/element1.jpg">
            <p class = "title">Short title</p>
        </div>
        <div class = "media-element3">
            <img src="../../resources/element2.jpg">
            <p class = "title">Short title</p>
        </div>
        <div class = "media-element3">
            <img src="../../resources/element3.jpg">
            <p class = "title">Short title</p>
        </div>
        <div class = "media-element3">
            <img src="../../resources/element4.jpg">
            <p class = "title">Short title</p>
        </div>
        <div class = "media-element3">
            <img src="../../resources/element5.jpg">
            <p class = "title">4 BHK Flat For Sale in Chaitanya Towers, Prabhadevi, Mumbai</p>
        </div>
        <div class = "media-element3">
            <img src="../../resources/element6.jpg">
            <p class = "title">2 BHK Flat For Sale in Rizvi Oak, Malad East, Mumbai</p>
        </div>
        <div class = "media-element3">
            <img src="../../resources/element7.jpg">
            <p class = "title">3 BHK Flat For Sale in Dongri, Mumbai</p>
        </div>
        <div class = "media-element3">
            <img src="../../resources/element8.jpg">
            <p class = "title">2 BHK Flat For Sale in Mona Apartments, Andheri West, Mumbai</p>
        </div>
        <div class = "media-element3">
            <img src="../../resources/element9.jpg">
            <p class = "title">2 BHK Flat For Sale in Runwal Orchard Residency, Ghatkopar West, Mumbai</p>
        </div>
        <div class = "media-element3">
            <img src="../../resources/element10.jpg">
            <p class = "title">1 BHK Flat For Sale in Colaba, Mumbai</p>
        </div>
        <div class = "media-element3">
            <img src="../../resources/element11.jpg">
            <p class = "title">4 BHK Flat For Sale in Acme Akshay Girikunj, Andheri West, Mumbai</p>
        </div>
        <div class = "media-element3">
            <img src="../../resources/element12.jpg">
            <p class = "title">2 BHK Flat For Sale in Mahadev Apartment, Kandivali East, Mumbai</p>
        </div>
    </div>



    <!--RECENT PROJECTS-->

    <div class = "recent-projects">
        <p id = "more2"><a href="#" style="color:red"><u>more</u>-></a></p>
        <p id = "recent"><br><br>Recent Projects</p><hr size="10px"><br>
    </div>
    <div class = "media-scroller2">
        <div class = "media-element2">
            <img src="../../resources/element1.jpg">
            <p class = "title">Short title</p>
        </div>
        <div class = "media-element2">
            <img src="../../resources/element2.jpg">
            <p class = "title">Short title</p>
        </div>
        <div class = "media-element2">
            <img src="../../resources/element3.jpg">
            <p class = "title">Short title</p>
        </div>
        <div class = "media-element2">
            <img src="../../resources/recent1.png">
            <p class = "title">Ananta</p>
            <p style="font-size:17px;">Virtuoso Realty & Maxus Realty,<br>Mira Road, Mumbai</p>
            <a href="#" style="color:red; font-size: 15px;"><u>more</u></a>
        </div>
        <div class = "media-element2">
            <img src="../../resources/recent2.png">
            <p class = "title">Kalpatru Racidence</p>
            <p style="font-size:17px;">Kalpataru Ltd<br>Mumbai</p>
            <a href="#" style="color:red; font-size: 15px;"><u>more</u></a>
        </div>
        <div class = "media-element2">
            <img src="../../resources/recent3.png">
            <p class = "title">Lodha Woods</p>
            <p style="font-size:17px;position: relative;">Lodha Builders<br> Kandivali East, Mumbai</p>
            <a href="#" style="color:red; font-size: 15px;"><u>more</u></a>
        </div>
        <div class = "media-element2">
            <img src="../../resources/recent4.png">
            <p class = "title">Rivali Park Sunburst</p>
            <p style="font-size:17px;position: relative;">CCI Projects Pvt. Ltd.<br>Borivali East, Mumbai</p>
            <a href="#" style="color:red; font-size: 15px;"><u>more</u></a>
        </div>
        <div class = "media-element2">
            <img src="../../resources/recent5.png">
            <p class = "title">Kanakia Silicon Vally</p>
            <p style="font-size:17px;position: relative;">Kanakia Spaces Realty Pvt. Ltd.<br>Powai, Mumbai</p>
            <a href="#" style="color:red; font-size: 15px;"><u>more</u></a>
        </div>
        <div class = "media-element2">
            <img src="../../resources/recent6.png">
            <p class = "title">Luxaria</p>
            <p style="font-size:17px;position: relative;">Vihang Group & Reyanshp Realty LLP<br>Mumbai</p>
            <a href="#" style="color:red; font-size: 15px;"><u>more</u></a>
        </div>
        <div class = "media-element2">
            <img src="../../resources/recent7.png">
            <p class = "title">Atmiya Centria</p>
            <p style="font-size:17px;position: relative;">Atmiya Group<br>Santacruz East, Mumbai</p>
            <a href="#" style="color:red; font-size: 15px;"><u>more</u></a>
        </div>
        <!-- <div class = "media-element-2">
            <img src="element11.jpg">
            <p class = "title">Short title</p>
        </div>
        <div class = "media-element-2">
            <img src="element12.jpg">
            <p class = "title">Short title</p>
        </div> -->
    </div>

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <!-- <section class="feature-section first-section">
        <div>
            <img src="featureImageBg1.png" alt="" class="featureimgbg1">
            <img src="featuresImage1.png" alt="" class="featureimg1">
        </div>
        <div>
            <h1 class="features-section-h1">Modern, Trendy, Affordable</h1>
            <p class="features-section-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit, Dolorem quo
              rem officia nisi exercitationem porro?
            </p>
            <button>Early Bird Book</button>
          </div>
    </section>
    <section class="feature-section second-section">
        <div>
            <h1 class="features-section-h1">Unique House for Long Term!</h1>
            <p class="features-section-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quo
              rem officia nisi exercitationem porro?
            </p>
            <button>Early Bird Book</button>
        </div>
        <div>
            <img src="featureImageBg2.png" alt="" class="featureimgbg2">
            <img src="featuresImage2.png" alt="" class="featureimg2">
        </div>
    </section> -->

    <div class="whyDDB">    
        <h1>Why <span class ="redDDB" style="color: red;">DikhaDunga</span>Boss.Com?</h1>
        <br><br><br>
        <p>DikhaDungaBoss.com is a disruptive real-estate platform that makes it possible to buy/sell/rent a property.<br><br>
            At present, DikhaDungaBoss.com prides itself for having around nine lakh property listings spanning across 9 major cities of India.
            Of all, the website held over 5.7 lakh paid listings at the end of FY 2018-19. In addition to providing an online platform to real
            estate developers, brokers and property owners for listing their property for sale, purchase or rent, DikhaDungaBoss.com offers advertisement
            stints such as microsites, banners, home page links and project pages to the clients for better visibility and branding in the market.
            With the ever-evolving online search behaviour, DikhaDungaBoss.com shares updated information pertinent to real estate activities,
            assisting prospective buyers to make informed buying decision. We make online property search easier, quicker and smarter!
        </p>
    </div> 


    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>


    <div class="websitefeature1">

        <div id="webboxeouter1"></div>
        <div id="webboxe1">
            <img src="../../resources/firstbldg.jpg">
        </div>
        <h1 style="position: relative; left: 70px; top: -990px; font-size: 60px; color: #fff;">More than 60K Properties <br />listed on the site</h1>
    </div>


    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

    <div class="websitefeature2">

        <div id="webboxeouter2"></div>
        <div id="webboxe2">
            <img src="https://dn9g5fz2o8iu4.cloudfront.net/wa_nwmls/res/fd97ee4802ea13d31d003b65524371dd-1.jpg?v=1682449961">
        </div>
        <h1 style="position: relative; left: 790px; top: -1000px; font-size: 60px; color: #fff;">Get best property deals.</h1>
    </div>
    


    <br><br><br><br><br><br><br><br><br><br><br><br><br><br>

    <div class="websitefeature3">

        <div id="webboxeouter3"></div>
        <div id="webboxe3">
            <img src="https://media-cloud.corcoranlabs.com/ListingFullAPI/RealogyMLS/ML:8369914/ddf88575723161355337c85c5003a817">
        </div>
        <h1 style="position: relative; left: 70px; top: -1050px; font-size: 60px; color: #fff;">More than 2k verified sellers</h1>
    </div> 


  
    
    
    <br><br><br><br>


    <!--NEWSLETTER-->

    <section class="newsletter">
        <h1>Subscribe to Our Newsletter <br> For Weekly Article Update.</h1>
      <p>
        We have real estate-related blog so we can share our thoughts and
        rutinity in our blog that updated weekly. We will not spam you, we promise.
      </p>
      <form>
        <div>
          <div style="background-color: red; border-radius: 100px; width: 70px; height: 50px;">
            <img src="../../resources/mail.png" alt="mail">
          </div>  
          <input type="text" placeholder="Enter tour e-mail address" style="font-size: 25px;"/>
        </div>
        <button>Subscribe</button>
      </form>
    </section>


    <!--FOOTER-->
    <div style="background-color: red; ">
        <footer>
            <div class="left-footer">
                <img src="../../resources/DDB(3).png" alt="">
                <div>
                    <a href="https://www.facebook.com/"><img src="../../resources/facebook (1).png" style="background-color:red" alt=""></a>
                    <a href="https://www.twitter.com/"><img src="../../resources/twitter (1).png" style="background-color:red" alt=""></a>
                    <a href="https://www.instagram.com/"><img src="../../resources/instagram (1).png" style="background-color:red" alt=""></a>
                    <p style="color: #fff;">2022 Award winning Real estate and Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div class="right-footer">
                <div class="footer-links-content">
                <ul>
                    <li><a href="#">Location</a></li>
                    <li><a href="#">America</a></li>
                    <li><a href="#">Asia</a></li>
                    <li><a href="#">Europe</a></li>
                    <li><a href="#">Africa</a></li>
                </ul>
                </div>
                <div class="footer-links-content">
                <ul>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Teams</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
                </div>
                <div class="footer-links-content">
                <ul>
                    <li><a href="#">Legals</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Disclaimer</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Company</a></li>
                </ul>
                </div>
        </footer>
    </div>
<!-- 
    <div style="background-color: red; height: 400px; position: relative; margin-top: -150px;">
        
    </div> -->


    <script src="../../js/searchSuggestions.js"></script>
    <script src="../../js/searchScript.js"></script>
    <script src="../../js/toggleScript.js"></script>
    <script src="../../js/animatednumbers.js"></script>
</body>
</html>