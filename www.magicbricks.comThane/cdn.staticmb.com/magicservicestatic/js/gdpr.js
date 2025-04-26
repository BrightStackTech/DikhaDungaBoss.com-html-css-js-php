/* MB consent cookie start 
============================
mbcc= mb consent Cookie, duration : 30 days
mbgc= mb gdpr country, duration: session storage
=========================================*/
var mbConsent = {
  version: "1.0.0.1", // Created/Updated on 26-04-2021

  init: function () {
    // Initilazation of MB consent cookie engine
    this.validate();
  },

  validate: function () {
    // Validate for MB consent cookie
    // console.log('fn called');
    var consentCookie = this.readCookie("mbcc");
    if (consentCookie != null && consentCookie == "Y") {
      // console.log('Exist');
    } else {
      // console.log('Not Exist');
      this.getUserConsentFromFetch();
      // console.log('set val to gdpr country');
      let isGDPRCountry = sessionStorage.getItem("mbgc");
      // manually setting to Y
      // isGDPRCountry = 'Y';
      // sessionStorage.setItem('mbgc','Y');
      if (
        typeof isGDPRCountry !== "undefined" &&
        (isGDPRCountry == "Y" || isGDPRCountry == "y")
      ) {
        this.insertUI();
      }
    }
  },

  deviceCheck: function () {
    // Mobile Device check
    var isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          isMobile.Android() ||
          isMobile.BlackBerry() ||
          isMobile.iOS() ||
          isMobile.Opera() ||
          isMobile.Windows()
        );
      },
    };
    /* if (isMobile.any()) {
			document.getElementsByTagName('html')[0].classList.add('isMobile');
		} */
    return isMobile.any();
  },

  acceptCookie: function () {
    // User accept for MB consent cookie
    var askConsent = "Y"; // Value need to be changed
    this.createCookie("mbcc", askConsent, 30);
    if (document.querySelector("#mb-consent-cookie") != null) {
      document.querySelector("#mb-consent-cookie").remove();
    }
    //console.log('MB consent cookie created');
  },

  removeFooterStickyBanner: function () {
    // User clicks on OK button of sticky banner
    if (document.querySelector("#mb-consent-cookie") != null) {
      document.querySelector("#mb-consent-cookie").remove();
    }
    //console.log('Removes Footer Sticky Banner');
  },

  createCookie: function (name, value, days) {
    // Create MB consent cookie
    var domain = document.domain + "";
    if (domain.indexOf(".magicbricks.com") != -1) {
      domain = ".magicbricks.com";
    }
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toGMTString();
    }
    document.cookie =
      name +
      "=" +
      encodeURIComponent(value) +
      expires +
      "; path=/; secure; domain=" +
      domain;
  },

  getUserConsentFromFetch: function () {
    let gdprCookieExist = sessionStorage.getItem("mbgc");
    if (
      typeof gdprCookieExist !== "undefined" &&
      gdprCookieExist !== "" &&
      (gdprCookieExist == "Y" || gdprCookieExist == "N")
    ) {
      // console.log('country cookie exists');
    } else {
      if (location.hostname === "localhost") {
        let askConsent = "N";
        sessionStorage.setItem("mbgc", askConsent);
      } else {
        var domain = "https://" + new URL(location.href).host;
        const seoRootUrl = domain + "/mbutility/getConsentCookie";
        fetch(seoRootUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        })
          .then((res) => {
            if (res.status === 404) {
              let askConsent = "N";
              sessionStorage.setItem("mbgc", askConsent);
              // console.log("mbgc"+ askConsent);
            }
            // console.log(res);
            return res.json();
          })
          .then((obj) => {
            // console.log(obj);
            // let obj = JSON.parse(this.responseText);
            if (
              typeof obj !== "undefined" &&
              typeof obj.isGDPRCountry !== "undefined"
            ) {
              let askConsent = obj.isGDPRCountry;
              sessionStorage.setItem("mbgc", askConsent);
              // console.log("mbgc"+ askConsent);
            }
            mbConsent.callUI();
          })
          .catch((error) => {
            console.log(error);
            let askConsent = "N";
            sessionStorage.setItem("mbgc", askConsent);
          });
      }
    }
  },
  callUI: function () {
    let isGDPRCountry = sessionStorage.getItem("mbgc");
    if (
      typeof isGDPRCountry !== "undefined" &&
      (isGDPRCountry == "Y" || isGDPRCountry == "y")
    ) {
      this.insertUI();
    }
  },
  getUserConsentFromXhr: function () {
    let gdprCookieExist = sessionStorage.getItem("mbgc");
    if (
      typeof gdprCookieExist !== "undefined" &&
      gdprCookieExist !== "" &&
      (gdprCookieExist == "Y" || gdprCookieExist == "N")
    ) {
      // console.log('country cookie exists');
    } else {
      if (location.hostname === "localhost") {
        let askConsent = "N";
        sessionStorage.setItem("mbgc", askConsent);
      } else {
        var domain = "https://" + new URL(location.href).host;
        const seoRootUrl = domain + "/mbutility/getConsentCookie";
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            let obj = JSON.parse(this.responseText);
            if (
              typeof obj !== "undefined" &&
              typeof obj.isGDPRCountry !== "undefined"
            ) {
              let askConsent = obj.isGDPRCountry;
              sessionStorage.setItem("mbgc", askConsent);
              //  console.log("mbgc" + askConsent);
            }
          } else if (this.status == 404) {
            let askConsent = "N";
            sessionStorage.setItem("mbgc", askConsent);
            // console.log("mbgc" + askConsent);
          }
        };
        xhttp.open("GET", seoRootUrl, false);
        xhttp.send();
      }
    }
  },

  deleteCookie: function () {
    // Delete MB consent cookie
    this.createCookie("mbcc", "", -1);
  },

  readCookie: function (name) {
    // Read MB consent cookie
    var ca = document.cookie.split(";");
    var nameEQ = name + "=";
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) {
        retVal = c.substring(nameEQ.length, c.length);
        if (name == "userTypeflSlider" && retVal.indexOf(",") > 0)
          return retVal.substring(0, retVal.indexOf(","));
        else if (name == "userEmailflSlider") {
          return retVal.replace(/^"(.*)"$/, "$1");
        } else if (name == "userNameflSlider") {
          return retVal.replace(/^"(.\*)"$/, "$1");
        } else return retVal;
      }
    }
    return null;
  },

  insertUI: function () {
    // MB consent cookie UI template
    var content =
      'By continuing to use our website, you agree to our <a href="https://property.magicbricks.com/terms/terms.html" target="_blank" style="color:#303030; font-weight:600; text-decoration: underline;">privacy policy</a> & <a href="https://property.magicbricks.com/terms/terms.html" target="_blank" style="color:#303030; font-weight:600; text-decoration: underline;">cookie policy</a>';
    var webTemplate =
      '<div id="mb-consent-cookie" style="width: 208px; height: 164px; box-sizing:border-box; border-radius:4px 4px 0 0; position: fixed; bottom:0px; left: 24px; z-index: 80; background-color: #fbe9e9;">' +
      '<div style="width: 100%; box-sizing:border-box; color:#303030; font-size: 14px; line-height:20px; padding:16px;">' +
      content +
      '<a href="javascript:void(0)" onclick="mbConsent.acceptCookie()" style="display: block; box-sizing:border-box; margin-top:16px; padding: 0 48px; border-radius: 18px; text-align:center; background-color: #b8141b; color:#fff; font-weight: 600; font-size: 14px; line-height: 36px; text-decoration: none;">Okay</a>' +
      "</div>" +
      "</div>";
    var mobileTemplate =
      '<div id="mb-consent-cookie" style="width: 90%; height: 44px; display:flex; position: fixed;  border-radius:4px; bottom:62px; left: 5%; z-index: 10; background-color: #fbe9e9; box-sizing: border-box; box-shadow: 1px 4px 6px 0 rgba(48, 48, 48, 0.1);">' +
      '<div style="width: 70%;  padding:6px 12px; color:#303030; font-size: 10px;">' +
      content +
      "</div>" +
      '<div style="width: 30%; background-color: #b8141b; color:#fff; font-weight: 600; font-size: 12px; line-height: 44px; text-align:center; border-radius:0 4px 4px 0;"  onclick="mbConsent.acceptCookie()">Okay</div>' +
      "</div>";
    var template = webTemplate;
    if (this.deviceCheck()) {
      template = mobileTemplate;
    }
    document.querySelector("body").insertAdjacentHTML("beforeend", template);
  },
};

if (document.querySelector("body") != null) {
  mbConsent.init(); // MB consent cookie Function call
} else {
  window.addEventListener("DOMContentLoaded", function () {
    mbConsent.init(); // MB consent cookie Function call
  });
}

/* MB consent cookie ends ------------------------------------*/
