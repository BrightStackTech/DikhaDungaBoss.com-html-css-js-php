var select = document.getElementById("selectCountry");
    
var countries = new Array("IND +91",
"USA +1",
"ARE +971",
"GBR +44",
"SGP +65",
"SAU +966",
"CAN +1",
"AUS +61",
"DEU +49",
"QAT +974",
"FRA +33",
"OMN +968",
"HKG +852",
"AFG +93",
"AGO +244",
"AIA +264",
"ALB +355",
"AND +376",
"ANT +599",
"ARG +54",
"ARM +374",
"ASM +684",
"ATG +268",
"AUT +43",
"AZE +994",
"BDI +257",
"BEL +32",
"BFA +226",
"BGD +880",
"BGR +359",
"BHR +973",
"BHS +1242",
"BIH +387",
"BLR +375",
"BLZ +501",
"BMU +1441",
"BOL +591",
"BRA +55",
"BRB +1246",
"BRN +673",
"BTN +975",
"BWA +267",
"CAF +236",
"CHE +41",
"CHL +56",
"CHN +86",
"CIV +225",
"CMR +237",
"COD +243",
"COG +242",
"COK +682",
"COL +57",
"COM +269",
"CPV +238",
"CRI +506",
"CUB +53",
"CYM +345",
"CYP +357",
"CZE +420",
"DJI +253",
"DMA +767",
"DNK +45",
"DOM +1",
"DZA +213",
"ECU +593",
"EGY +20",
"ERI +291",
"ESP +34",
"EST +372",
"ETH +251",
"FIN +358",
"FJI +679",
"FLK +500",
"FRO +298",
"FSM +691",
"GAB +241",
"GEO +995",
"GHA +233",
"GIB +350",
"GIN +224",
"GLP +590",
"GMB +220",
"GNB +245",
"GNQ +240",
"GRC +30",
"GRD +473",
"GRL +299",
"GTM +502",
"GUF +594",
"GUM +671",
"GUY +592",
"HND +504",
"HRV +385",
"HTI +509",
"HUN +36",
"IDN +62",
"IRL +353",
"IRN +98",
"IRQ +964",
"ISL +354",
"ISR +972",
"ITA +39",
"JAM +1",
"JOR +962",
"JPN +81",
"KAZ +7",
"KEN +254",
"KGZ +996",
"KHM +855",
"KIR +686",
"KNA +869",
"KOR +373",
"KWT +965",
"LAO +856",
"LBN +961",
"LBR +231",
"LBY +218",
"LCA +758",
"LIE +423",
"LKA +94",
"LSO +266",
"LTU +370",
"LUX +352",
"LVA +371",
"MAC +853",
"MAR +212",
"MCO +377",
"MDA +82",
"MDG +261",
"MDV +960",
"MEX +52",
"MKD +389",
"MLI +223",
"MLT +356",
"MMR +95",
"MNG +976",
"MOZ +258",
"MRT +222",
"MSR +664",
"MTQ +596",
"MUS +230",
"MWI +265",
"MYS +60",
"MYT +269",
"NAM +264",
"NCL +687",
"NER +227",
"NFK +672",
"NGA +234",
"NIC +505",
"NIU +683",
"NLD +31",
"NOR +47",
"NPL +977",
"NRU +674",
"NZL +64",
"PAK +92",
"PAN +507",
"PCN +649",
"PER +51",
"PHL +63",
"PNG +675",
"POL +48",
"PRI +939",
"PRK +850",
"PRT +351",
"PRY +595",
"PYF +689",
"REU +262",
"RNR +260",
"ROU +40",
"RUS +7",
"RWA +250",
"SCG +381",
"SDN +249",
"SEN +221",
"SHN +290",
"SLB +677",
"SLE +232",
"SLV +503",
"SMR +378",
"SOM +252",
"SPM +508",
"STP +239",
"SUR +597",
"SVK +421",
"SVN +386",
"SWE +46",
"SWZ +268",
"SYC +248",
"SYR +963",
"TCA +649",
"TCD +235",
"TGO +228",
"THA +66",
"TJK +992",
"TKL +690",
"TKM +993",
"TLS +670",
"TON +676",
"TTO +868",
"TUN +216",
"TUR +90",
"TUV +688",
"TWN +886",
"TZA +255",
"UGA +256",
"UKR +380",
"URY +598",
"UZB +998",
"VCT +784",
"VEN +58",
"VGB +284",
"VIR +340",
"VNM +84",
"VUT +678",
"WLF +681",
"WSM +685",
"YEM +967",
"YUG +381",
"ZAF +27",
"ZWE +263");
console.log(countries);
console.log(select);
    
for (var i = 0; i < countries.length; i++) {
    
    var option = document.createElement("option"); 
  //for every turn of the loop create an option tag
    //console.log(option);
    var txt = document.createTextNode(countries[i]); 
  //for every turn of the loop create the inner text
    //console.log(txt);
    option.appendChild(txt); 
  //for every turn of the loop put the words from txt inside the <option> tags
    //console.log(option);
    option.setAttribute("value",countries[i]); //for every turn of the loop set the value attribute to corresponding country name
    //console.log(option);
    select.insertBefore(option,select.lastChild);
    //console.log(select);
    
}

document.addEventListener ('DOMContentLoaded', function() {
    //console.log('DOM fully loaded and parsed');
    document.querySelector('select[name="selectCountry"]').onchange = alertCountry;
     }, false);
    
function alertCountry(event) {
    //console.log('DOM loaded');
    //use "this" to refer to selected element
    if(!event.target.value) alert('Please select your calling code');
    else alert('You chose ' + event.target.value + '. Yay, grab a beer!');
}

let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("ppassword");
let eyeicon1 = document.getElementById("reeyeicon");
let password1 = document.getElementById("repassword");


eyeicon.onclick = function(){
  if(password.type == "password"){
    password.type = "text";
    eyeicon.src = "../resources/eye-open.png";
  }
  else{
    password.type = "password";
    eyeicon.src = "../resources/eye-close.png";
  }
}

eyeicon1.onclick = function(){
  if(password1.type == "password"){
    password1.type = "text";
    eyeicon1.src = "../resources/eye-open.png";
  }
  else{
    password1.type = "password";
    eyeicon1.src = "../resources/eye-close.png";
  }
}
