var feebackUrl = "nps/saveFeedbackRequest";
var ratingSaved = false;
var appUrl =
  appUrl ||
  "market://details?id=com.timesgroup.magicbricks&referrer=utm_source%3DWAP_SMART_Sticky";
var contactDataObj = {
  uMob: "",
  uNam: "",
  uEmail: "",
  uMobIsd: "",
  source: "",
  rating: "",
  ramid: "",
  remark: "",
  ques: "",
  ans: "",
  others: "",
  propCat: "",
};
var widgetDataObj = {
  code: "",
  rated: "",
  npsPoints: "",
  npsQuestions: "",
};
var mbNps = {
  host: document.domain,
  provider: "https://nps.magicbricks.com",
  source: "35703",
  npsLocation: "",
  contactData: "",
  htmlLocation: "",
  comm_n: "",
  comm_e: "",
  comm_m: "",
  comm_mc: "",
  comm_ramid: "",
  isFrame: false,
  userCompletedServicesPoints: null,
  npsQuestions: "",
  rated: "", //needed in case of mailer landing
  widgetQueryData: "",
  isMultiQnA: false,
  init: function () {
    //alert('widget');
    if (mbNps.showWidget()) {
      if (!window.jQuery) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://cdn.staticmb.com/scripts/jquery-1.7.2.min.js";
        document.getElementsByTagName("head")[0].appendChild(script);
      }
      //	var contactLocalData = "{\"uMob\":"+mbNps.comm_m+",\"uNam\":\""+mbNps.comm_n+"\",\"uEmail\":\""+mbNps.comm_e+"\"";
      //	mbNps.contactData = contactLocalData + ",\"uMobIsd\":\""+mbNps.comm_mc+"\",\"source\":\""+mbNps.source+"\"}";
      // initilizing contact data .
      contactDataObj.uMob = mbNps.comm_m;
      contactDataObj.uNam = mbNps.comm_n;
      contactDataObj.uEmail = mbNps.comm_e;
      contactDataObj.uMobIsd = mbNps.comm_mc;
      contactDataObj.source = mbNps.source;
      contactDataObj.ramid = mbNps.comm_ramid;
      contactDataObj.propCat = mbNps.comm_propCat;
      mbNps.contactData = contactDataObj;
      this.getNpsWidget();
    }
  },
  initRevamp: function () {
    //alert('widget');
    //	if (mbNps.showWidgetRevamp()) {
    if (!window.jQuery) {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://cdn.staticmb.com/scripts/jquery-1.7.2.min.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    }
    //	var contactLocalData = "{\"uMob\":"+mbNps.comm_m+",\"uNam\":\""+mbNps.comm_n+"\",\"uEmail\":\""+mbNps.comm_e+"\"";
    //	mbNps.contactData = contactLocalData + ",\"uMobIsd\":\""+mbNps.comm_mc+"\",\"source\":\""+mbNps.source+"\"}";
    // initilizing contact data .
    contactDataObj.uMob = mbNps.comm_m;
    contactDataObj.uNam = mbNps.comm_n;
    contactDataObj.uEmail = mbNps.comm_e;
    contactDataObj.uMobIsd = mbNps.comm_mc;
    contactDataObj.source = mbNps.source;
    contactDataObj.ramid = mbNps.comm_ramid;
    contactDataObj.propCat = mbNps.comm_propCat;
    mbNps.contactData = contactDataObj;
    this.getNpsWidgetRevamp();
    //	}
  },
  initNpsPoints: function () {
    if (!window.jQuery) {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://cdn.staticmb.com/scripts/jquery-1.7.2.min.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    }
    // initilizing contact data .
    contactDataObj.uMob = mbNps.comm_m;
    contactDataObj.uNam = mbNps.comm_n;
    contactDataObj.uEmail = mbNps.comm_e;
    contactDataObj.uMobIsd = mbNps.comm_mc;
    contactDataObj.source = mbNps.source;
    contactDataObj.ramid = mbNps.comm_ramid;
    mbNps.contactData = contactDataObj;
    this.getNpsPointsWidget();
  },
  getNpsPointsWidget: function () {
    widgetDataObj.code = mbNps.source;
    widgetDataObj.rated = mbNps.rated;
    widgetDataObj.npsPoints = mbNps.userCompletedServicesPoints;
    widgetDataObj.npsQuestions = mbNps.npsQuestions;
    mbNps.widgetQueryData = widgetDataObj;

    var urlStr = this.provider + "/nps/feedbackPointsWidget";
    if (this.isMultiQnA) {
      urlStr = this.provider + "/nps/feedbackPointsWidgetMultiQnA";
    }
    $.ajax({
      dataType: "html",
      contentType: "application/json; charset=utf-8",
      type: "POST",
      data: JSON.stringify(mbNps.widgetQueryData),
      url: urlStr,
      crossDomain: true,
      cache: false,
      async: true,
      success: function (obj) {
        if (mbNps.rated != "") {
          $("#" + mbNps.htmlLocation).html(obj);
          if (mbNps.comm_n != "") {
            $("#successName").html(mbNps.comm_n + ",");
          }
          if ($("#npsSidePopWrap").length > 0) {
            jqNpsSlideOpen("npsSidePopWrap");
            $(".npsRatingBox").trigger("click");
          }
        } else {
          if (mbNps.isFrame) {
            // window.parent.document.getElementById(mbNps.htmlLocation).innerHTML = obj+"";
            // alert("fram1");
            $("#" + mbNps.htmlLocation, window.parent.document).html(obj);
            if (mbNps.comm_n != "") {
              $("#successName", window.parent.document).html(
                mbNps.comm_n + ","
              );
            }
            if ($("#npsSidePopWrap", window.parent.document).length > 0) {
              setTimeout(function () {
                $("#npsSidePopWrap", window.parent.document).addClass("open");
                $(".bgNpsLayer", window.parent.document).css(
                  "display",
                  "block"
                );
              }, 2000);
            }
          } else {
            $("#" + mbNps.htmlLocation).html(obj);
            if (mbNps.comm_n != "") {
              $("#successName").html(mbNps.comm_n + ",");
            }
            if ($("#npsSidePopWrap").length > 0)
              setTimeout(function () {
                jqNpsSlideOpen("npsSidePopWrap");
              }, 5000);
            if ($("#npsContainer").length > 0) $("#npsContainer").show();
            else {
              if (!$("#" + mbNps.htmlLocation).is(":visible")) {
                $("#" + mbNps.htmlLocation).show();
              }
            }
          }
        }
      },
    });
  },
  getNpsWidget: function () {
    var urlStr = this.provider + "/nps/feedback?code=" + mbNps.source;
    $.ajax({
      dataType: "html",
      type: "GET",
      url: urlStr,
      crossDomain: true,
      cache: true,
      async: true,
      success: function (obj) {
        if (mbNps.source == "35682") {
          $("#" + mbNps.htmlLocation).html(obj);
          if (mbNps.comm_n != "") {
            $("#successName").html(mbNps.comm_n + ",");
          }
          if ($("#npsSidePopWrap").length > 0) {
            jqNpsSlideOpen("npsSidePopWrap");

            var rated = $("#rated").val();
            $("#rating" + rated).prop("checked", true);

            if (
              rated == "0" ||
              rated == "1" ||
              rated == "2" ||
              rated == "3" ||
              rated == "4" ||
              rated == "5" ||
              rated == "6"
            ) {
              $("#npsSidePopConScore6").show();
            } else if (rated == "7" || rated == "8") {
              $("#npsSidePopConScore6").show();
            } else if (rated == "9") {
              $("#npsSidePopConScore10").show();
              $("#npsSidePopConStep1").hide();
            } else if (rated == "10") {
              $("#npsSidePopConScore11").show();
              $("#npsSidePopConStep1").hide();
            } else {
              $("#npsSidePopConScore11").show();
              $("#npsSidePopConStep1").hide();
            }

            $(".npsRatingBox").trigger("click");
          }
        } else {
          // creating cookie to not show nps for next 90 days
          mbNps.createCookie("mbNps", "Y", 90);
          if (mbNps.isFrame) {
            // window.parent.document.getElementById(mbNps.htmlLocation).innerHTML = obj+"";
            // alert("fram1");
            $("#" + mbNps.htmlLocation, window.parent.document).html(obj);
            if (mbNps.comm_n != "") {
              $("#successName", window.parent.document).html(
                mbNps.comm_n + ","
              );
            }
            if ($("#npsSidePopWrap", window.parent.document).length > 0) {
              setTimeout(function () {
                $("#npsSidePopWrap", window.parent.document).addClass("open");
                $(".bgNpsLayer", window.parent.document).css(
                  "display",
                  "block"
                );
              }, 2000);
            }
          } else {
            $("#" + mbNps.htmlLocation).html(obj);
            if (mbNps.comm_n != "") {
              $("#successName").html(mbNps.comm_n + ",");
            }
            if ($("#npsSidePopWrap").length > 0)
              setTimeout(function () {
                jqNpsSlideOpen("npsSidePopWrap");
              }, 5000);
          }

          var contactInfo =
            contactDataObj.uMob != "" && contactDataObj.uMob != "9"
              ? contactDataObj.uMob
              : contactDataObj.uEmail != "" && contactDataObj.uEmail != "a"
              ? contactDataObj.uEmail
              : contactDataObj.ramid;
          if (contactInfo == mbNps.comm_ramid) {
            ga(
              "send",
              "event",
              "NPS_PRE_CONTACT",
              "NPS Widget Show",
              contactInfo
            );
          } else {
            ga(
              "send",
              "event",
              "NPS_POST_CONTACT",
              "NPS Widget Show",
              contactDataObj.uMob + "|" + contactDataObj.uEmail
            );
          }
          ratingSaved = false;
        }
      },
    });
  },
  getNpsWidgetRevamp: function () {
    var urlStr = this.provider + "/nps/feedbackRevamp?code=" + mbNps.source;
    $.ajax({
      dataType: "html",
      type: "GET",
      url: urlStr,
      crossDomain: true,
      cache: true,
      async: true,
      success: function (obj) {
        if (mbNps.source == "35682") {
          $("#" + mbNps.htmlLocation).html(obj);
          if (mbNps.comm_n != "") {
            $("#successName").html(mbNps.comm_n + ",");
          }
          if ($("#npsSidePopWrap").length > 0) {
            jqNpsSlideOpen("npsSidePopWrap");

            var rated = $("#rated").val();
            $("#rating" + rated).prop("checked", true);

            if (
              rated == "0" ||
              rated == "1" ||
              rated == "2" ||
              rated == "3" ||
              rated == "4" ||
              rated == "5" ||
              rated == "6"
            ) {
              $("#npsSidePopConScore6").show();
            } else if (rated == "7" || rated == "8") {
              $("#npsSidePopConScore6").show();
            } else if (rated == "9") {
              $("#npsSidePopConScore10").show();
              $("#npsSidePopConStep1").hide();
            } else if (rated == "10") {
              $("#npsSidePopConScore11").show();
              $("#npsSidePopConStep1").hide();
            } else {
              $("#npsSidePopConScore11").show();
              $("#npsSidePopConStep1").hide();
            }

            $(".npsRatingBox").trigger("click");
          }
        } else {
          // creating cookie to not show nps for next 90 days
          mbNps.createCookie("mbNps", "Y", 90);
          if (mbNps.isFrame) {
            // window.parent.document.getElementById(mbNps.htmlLocation).innerHTML = obj+"";
            // alert("fram1");
            $("#" + mbNps.htmlLocation, window.parent.document).html(obj);
            if (mbNps.comm_n != "") {
              $("#successName", window.parent.document).html(
                mbNps.comm_n + ","
              );
            }
            if ($("#npsSidePopWrap", window.parent.document).length > 0) {
              setTimeout(function () {
                $("#npsSidePopWrap", window.parent.document).addClass("open");
                $(".bgNpsLayer", window.parent.document).css(
                  "display",
                  "block"
                );
              }, 2000);
            }
          } else {
            $("#" + mbNps.htmlLocation).html(obj);
            if (mbNps.comm_n != "") {
              $("#successName").html(mbNps.comm_n + ",");
            }
            if ($("#npsSidePopWrap").length > 0)
              setTimeout(function () {
                jqNpsSlideOpen("npsSidePopWrap");
              }, 5000);
          }

          var contactInfo =
            contactDataObj.uMob != "" && contactDataObj.uMob != "9"
              ? contactDataObj.uMob
              : contactDataObj.uEmail != "" && contactDataObj.uEmail != "a"
              ? contactDataObj.uEmail
              : contactDataObj.ramid;
          if (contactInfo == mbNps.comm_ramid) {
            ga(
              "send",
              "event",
              "NPS_PRE_CONTACT",
              "NPS Widget Show",
              contactInfo
            );
          } else {
            ga(
              "send",
              "event",
              "NPS_POST_CONTACT",
              "NPS Widget Show",
              contactDataObj.uMob + "|" + contactDataObj.uEmail
            );
          }
          ratingSaved = false;
        }
      },
    });
  },
  isNpsRequired: function (src) {
    var isReq = false;
    var urlStr =
      this.provider + "/nps/isNpsReq?email=" + mbNps.comm_e + "&source=" + src;
    $.ajax({
      type: "GET",
      url: urlStr,
      crossDomain: true,
      cache: false,
      async: false,
      success: function (obj) {
        if (obj == "Y") {
          isReq = true;
        }
      },
    });
    return isReq;
  },
  getLocation: function () {
    //alert(mbNps.npsLocation+'ghghgh');
    return mbNps.npsLocation;
  },
  showWidget: function () {
    // changed logic always returning true to ask feed back for all users .
    var val = this.readCookie("mbNps");
    //var randomNum = Math.random() * 100;
    //	console.log(randomNum);
    //	console.log(randomNum <= 10);

    if (val == null || mbNps.source == "35682") {
      return true;
    }
    return false;
  },
  showWidgetRevamp: function () {
    // changed logic always returning true to ask feed back for all users .
    var val = this.readCookie("mbNps");
    //var randomNum = Math.random() * 100;
    //	console.log(randomNum);
    //	console.log(randomNum <= 10);

    if (val == null || mbNps.source == "35682" || val == "Y") {
      return true;
    }
    return false;
  },
  createCookie: function (name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toGMTString();
    }
    document.cookie =
      name + "=" + value + expires + "; domain=.magicbricks.com; path=/";
  },
  readCookie: function (name) {
    var ca = document.cookie.split(";");
    var nameEQ = name + "=";
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length); //delete spaces
      if (c.indexOf(nameEQ) == 0) {
        retVal = c.substring(nameEQ.length, c.length);

        return retVal;
      }
    }
    return null;
  },
};

function readCookieContactDetails(name) {
  var ca = document.cookie.split(";");
  var nameEQ = name + "=";
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length); //delete spaces
    if (c.indexOf(nameEQ) == 0) {
      retVal = c.substring(nameEQ.length, c.length);
      if (name == "userType" && retVal.indexOf(",") > 0)
        return retVal.substring(0, retVal.indexOf(","));
      else if (name == "userEmail") {
        return retVal.replace(/^"(.\*)"$/, "$1");
      } else if (name == "userName") {
        return retVal.replace(/^"(.\*)"$/, "$1");
      } else return retVal;
    }
  }
  return null;
}

var pageRoot = "orderdashboard";

function jqNpsContinue(obj, rating, revamp) {
  // done to handle multiple clicks on rating
  if ($(obj).hasClass("npsRatingClicked")) {
    return false;
  }

  $(obj).addClass("npsRatingClicked");

  var contactInfo =
    contactDataObj.uMob != "" && contactDataObj.uMob != "9"
      ? contactDataObj.uMob
      : contactDataObj.uEmail != "" && contactDataObj.uEmail != "a"
      ? contactDataObj.uEmail
      : contactDataObj.ramid;
  //var npsRatingValue = parseInt($("input[name='npsRating']:checked").val());
  var npsRatingValue = parseInt(rating);
  var frameRating = 0;

  if (
    mbNps.source == 4311010 ||
    mbNps.source == "4311011" ||
    mbNps.source == "4311021" ||
    mbNps.source == "4311022"
  ) {
    createQuetionPopup();
    $(".iconThankyou svg").attr("height", "52px");
    $(".iconThankyou svg").attr("width", "82px");
    if (npsRatingValue <= 8) {
      if (npsRatingValue <= 6) {
        $(".npsPopupV2__form__content").show();
        $(".npsPopupV2__step2__icon").hide();
        $(".npsPopupV2__step2__iconScore6").show();
      } else {
        $(".npsPopupV2__form__content").show();
        $(".npsPopupV2__step2__icon").hide();
        $(".npsPopupV2__step2__iconScore8").show();
      }
      var npsSidePopConScore = "npsSidePopConQna";
      $("#npsSidePopWrap").addClass("height341");
      $("#recommendLabel_2").hide();
      $("#recommendLabel_1").show();
    } else {
      var npsSidePopConScore = "npsSidePopConQna";
      $("#npsSidePopWrap").addClass("height341");
      $("#recommendLabel_1").hide();
      $("#recommendLabel_2").show();
      $(".npsPopupV2__form__content").show();
      $(".npsPopupV2__step2__icon").hide();
      $(".npsPopupV2__step1__iconScore10").show();
    }
  } else {
    if (revamp == "npsPopupV2") {
      //$("#nps").removeAttr("class");
      $(".iconThankyou svg").attr("height", "52px");
      $(".iconThankyou svg").attr("width", "82px");

      if (npsRatingValue <= 6) {
        $(".npsPopupV2__form__content").show();
        $(".npsPopupV2__step2__icon").hide();
        $("#npsPopupV2__step2__iconScore6").show();
        $(".yourRatingHead").html("Thanks for your honest feedback.");
        var npsSidePopConScore = "npsSidePopConScore6";
        frameRating = 1;
        $("#formBtn16").show();
        $("#formBtn78").hide();
      } else if (npsRatingValue >= 7 && npsRatingValue < 9) {
        $(".npsPopupV2__form__content").show();
        $(".npsPopupV2__step2__icon").hide();
        $("#npsPopupV2__step2__iconScore8").show();
        $(".yourRatingHead").html("Thanks for your honest feedback.");
        var npsSidePopConScore = "npsSidePopConScore6";
        frameRating = 2;
        $("#formBtn16").hide();
        $("#formBtn78").show();
      } else if (npsRatingValue >= 9) {
        var npsSidePopConScore = "npsSidePopConScore9";
        frameRating = 3;
      } else {
        return false;
      }
    } else {
      if (npsRatingValue <= 6) {
        var npsSidePopConScore = "npsSidePopConScore6";
        $("#yourRating1").html(npsRatingValue);
        $("#yourRatingHeadMsg").html("You've rated us");
        $("#ratingMsgLabel").html(
          "Please tell us how can we make your experience better."
        );
        frameRating = 1;
        $("#formBtn16").show();
        $("#formBtn78").hide();
        //var npsSidePopConScore = "npsSidePopConScore10";
      } else if (npsRatingValue >= 7 && npsRatingValue < 9) {
        var npsSidePopConScore = "npsSidePopConScore6";
        $("#yourRating1").html(npsRatingValue);
        $("#yourRatingHeadMsg").html("You've rated us");
        $("#ratingMsgLabel").html(
          "Please tell us how can we make you happier."
        );
        frameRating = 2;
        $("#formBtn16").hide();
        $("#formBtn78").show();
        //var npsSidePopConScore = "npsSidePopConScore11";
      } else if (npsRatingValue >= 9) {
        var npsSidePopConScore = "npsSidePopConScore9";
        frameRating = 3;
      } else {
        return false;
      }
    }
  }

  if (frameRating > 0) {
    contactDataObj.rating = npsRatingValue;
    mbNps.contactData = contactDataObj;
    mbNps.comm_e = mbNps.comm_e.replace(/\"/g, "");
    var urlStrContact = mbNps.provider + "/nps/feedbackUser";
    $.ajax({
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      type: "POST",
      data: JSON.stringify(mbNps.contactData),
      url: urlStrContact,
      crossDomain: true,
      cache: false,
      async: false,
      success: function (data, textStatus, request) {
        mbNps.npsLocation = data["Location"] + "";
        //	mbNps.createCookie('mbNps','Y',90);
        if (
          contactInfo == mbNps.comm_ramid ||
          (mbNps.fromSRP && mbNps.fromSRP == "Y")
        ) {
          /*(mbNps.source=='35717' || mbNps.source=='35720')&&*/
          ga(
            "send",
            "event",
            "NPS_PRE_CONTACT",
            "Entered " + contactDataObj.rating,
            contactInfo
          );
        } else {
          if (
            mbNps.source &&
            (mbNps.source == "35727" || mbNps.source == "35726")
          ) {
            $("#npsSidePopConScore9-web").hide();
            $("#npsSidePopConScore9-mobile").show();
            if (appUrl) {
              $("#npsAppDownload").attr("href", appUrl);
            }
          } else {
            $("#npsSidePopConScore9-mobile").hide();
            $("#npsSidePopConScore9-web").show();
          }
          ga(
            "send",
            "event",
            "NPS_POST_CONTACT",
            "Entered " + contactDataObj.rating,
            contactDataObj.uMob + "|" + mbNps.comm_e
          );
        }
        ratingSaved = true;

        /*//pre contact=35717,35720
				//post contact=35716,35718,35719
				//_gaq.push(["_trackEvent", "NPS_COMPLETED","NPS");*/
      },
    });

    //	var rating = "{\"rating\":"+npsRatingValue+"}";
    /*$.ajax({
			dataType : "json",
			contentType: "application/json; charset=utf-8",
			type : "POST",
			data: rating,
			url : mbNps.getLocation(),
			crossDomain:true,
			cache : false,
			async : false,
			success : function(data, textStatus, request) {
				mbNps.createCookie('mbNps','Y',90);
			}
		});*/
  }
  if (mbNps.source != "35682") {
    jqNpsSlide(npsSidePopConScore, "npsSidePopConStep1");
  }
}

function jqNpsContinueNew(obj, rating) {
  // done to handle multiple clicks on rating
  if ($(obj).hasClass("npsRatingClicked")) {
    return false;
  }

  $(obj).addClass("npsRatingClicked");

  var contactInfo =
    contactDataObj.uMob != "" && contactDataObj.uMob != "9"
      ? contactDataObj.uMob
      : contactDataObj.uEmail != "" && contactDataObj.uEmail != "a"
      ? contactDataObj.uEmail
      : contactDataObj.ramid;
  var npsRatingValue = parseInt(rating);
  var frameRating = 0;

  var npsSidePopConScore = "npsSidePopConQna";
  $("#npsSidePopWrap").addClass("height341");
  if (npsRatingValue <= 8) {
    $("#22351").show();
  } else {
    $("#22352").show();
  }

  jqNpsSlideNew(npsSidePopConScore, "npsSidePopConStep1");
}

$("body").on("click", "input[name='npsRating']", function () {
  $(".npsBtnContinue a").addClass("continue");
});

function showBackClose() {
  $(".fbk__cont__close, .fbk__cont__back").removeClass("showMe");
  setTimeout(function () {
    $(".fbk__cont__close, .fbk__cont__back").addClass("showMe");
  }, 300);
}
showBackClose();

$(document).ready(function () {
  var jsonObj = {};
  jsonObj = createJsonArray(null);
  var obj = JSON.stringify(jsonObj);
  var baseUrl = $("#domcache_feedback").data("calldomainurl");
  if (baseUrl) {
    $.ajax({
      type: "POST",
      url: baseUrl + "nps/questionfeedback",
      data: obj,
      dataType: "html",
      contentType: "application/json",
      success: function (objSucess) {
        $("#firstQuestion").html(objSucess);
        var owername = $("#domcache_feedback").data("ownername");
        $("#ownerFeedbackId").html(owername);
        $("#otherSection").show();
        if (_gaq) {
          var propertyid = $("#domcache_feedback").data("id");
          var email = $("#domcache_feedback").data("email");
          _gaq.push([
            "_trackEvent",
            "Feedback",
            "Feedback Shown",
            propertyid + " | " + email,
          ]);
        }
      },
    });
  }
});

function steptoNextQuestion(obj) {
  var hiddenObj = $(obj).parent();
  var currentValue = $(obj).attr("value");
  createHiddenTag(currentValue);
  var objjs = createJsonObject(obj, false);
  var rVal = $("input[name=ansList]:checked").val();
  var pid = hiddenObj.attr("id");
  var nextId = $("#nextid" + pid).val();
  var baseUrl = $("#domcache_feedback").data("calldomainurl");
  if (pid) {
    $.ajax({
      type: "POST",
      url: baseUrl + feebackUrl,
      data: objjs,
      contentType: "application/json; charset=utf-8",
      success: function (objSucess) {
        if (objSucess) {
          var obj = JSON.parse(objSucess);
          var pk = obj.pk;
          document.getElementById("pk").value = pk;
        }
      },
    });
    var nexturl = "nps/nextquestion/" + nextId + "";
    if (nextId == "36349") {
      nexturl = nexturl + "?type=check";
    }
    $.ajax({
      type: "GET",
      url: baseUrl + nexturl,
      //data : objjs,
      dataType: "html",
      success: function (objSucess) {
        $("#firstQuestion").addClass("fbk__slidebox__goleft");
        $("#nextQuestion").removeClass("fbk__slidebox__goright");
        $("#nextQuestion").html(objSucess);
        showBackClose();
      },
    });
  }
}

function backToPerviousQuestion(removeId, currentId) {
  $("#" + removeId).removeClass("fbk__slidebox__goleft");
  $("#" + currentId).addClass("fbk__slidebox__goright");
  showBackClose();
}

function furtherQuestions(obj) {
  var currentValue = $(obj).attr("value");
  futherQuestionAjax(obj, currentValue);
}

function futherQuestionAjax(obj, currentValue) {
  if (currentValue === "36360" || currentValue === "36364") {
    createTextBoxSectionForQuestion(obj, currentValue);
    return;
  }
  var objjs = createJsonObject(obj, true);
  var prevValue = document.getElementById("fq").value;
  var pk = document.getElementById("pk").value;
  var udUrl = "nps/updateFeedbackRequest/" + pk + "";
  var favorite = showSuccessScreen(obj);
  var baseUrl = $("#domcache_feedback").data("calldomainurl");
  $.ajax({
    type: "POST",
    url: baseUrl + udUrl,
    data: objjs,
    contentType: "application/json",
    success: function (objSucess) {
      if (currentValue == "36346" || currentValue == "36347") {
        feedbackAjax(currentValue);
      } else {
        showSuccess(obj, currentValue);
      }
    },
  });
}

function showSuccess(obj, currentValue) {
  if (currentValue === "36360" || currentValue === "36364") {
    $("#otherSection").addClass("fbk__slidebox__goleft");
  } else {
    $("#nextQuestion").addClass("fbk__slidebox__goleft");
  }
  $("#thankScreen").removeClass("fbk__slidebox__goright");

  var htmlCode = "";
  htmlCode += '<div class="fbk__cont__tblock">';
  htmlCode +=
    '<div class="fbk__cont__close showMe"><i class="fbk__cont__closeico"></i></div>';
  htmlCode += "</div>";
  htmlCode += '<div class="fbk__formblock">';
  htmlCode += '<div class="fbk__formbtxblock">';
  var domObjType = $("#" + obj.id).attr("type");
  if (domObjType === "button") {
    var favorite = showSuccessScreen(obj);
    if (favorite) {
      currentValue = favorite[0];
    }
  }
  var otherId = $("#otherAnsId").val();
  if (otherId) {
    currentValue = otherId;
  }

  if (
    currentValue == "36350" ||
    currentValue == "36351" ||
    currentValue == "36352" ||
    currentValue == "36353" ||
    currentValue == "36354" ||
    currentValue == "36355"
  ) {
    htmlCode +=
      '<div class="fbk__formtxheading">We\'r Sorry for your inconvenience</div>';
  } else if (
    currentValue == "36357" ||
    currentValue == "36358" ||
    currentValue == "36359" ||
    currentValue == "36360"
  ) {
    htmlCode +=
      '<div class="fbk__formtxheading">Sorry for your inconvenience</div>';
  } else if (
    currentValue == "36362" ||
    currentValue == "36363" ||
    currentValue == "36364"
  ) {
    htmlCode += '<div class="fbk__formtxheading">Thank you for feedback!</div>';
  } else {
    htmlCode +=
      '<div class="fbk__formtxheading">Thank you for your valuable feedback!</div>';
  }
  if (
    currentValue == "36350" ||
    currentValue == "36351" ||
    currentValue == "36352" ||
    currentValue == "36353" ||
    currentValue == "36354" ||
    currentValue == "36355"
  ) {
    htmlCode +=
      '<div class="fbk__formtxtxt">A reminder via SMS/Email will be sent to you, so you can plan your site visit.  </div>';
  } else if (
    currentValue == "36362" ||
    currentValue == "36363" ||
    currentValue == "36364"
  ) {
    htmlCode +=
      '<div class="fbk__formtxtxt">You can connect with Advertiser in some time.</div>';
  } else if (
    currentValue == "36357" ||
    currentValue == "36358" ||
    currentValue == "36359" ||
    currentValue == "36360"
  ) {
    htmlCode +=
      '<div class="fbk__formtxtxt">We\'ll notify the advertiser to connect with you</div>';
  } else {
    htmlCode +=
      '<div class="fbk__formtxtxt">A reminder via SMS/Email will be sent to you, so you can plan your site visit.  </div>';
  }
  htmlCode += "</div>";
  htmlCode += "</div>";
  htmlCode += "";
  $("#thankScreen").html(htmlCode);
  showBackClose();
}
function feedbackAjax(currentValue) {
  var nexturl = "nps/sitevisitform/" + currentValue + "";
  var baseUrl = $("#domcache_feedback").data("calldomainurl");
  $.ajax({
    type: "GET",
    url: baseUrl + nexturl,
    dataType: "html",
    success: function (objSucess) {
      //	$('#nextQuestion').html('');
      $("#nextQuestion").addClass("fbk__slidebox__goleft");
      $("#sitevisitform").removeClass("fbk__slidebox__goright");
      $("#sitevisitform").html(objSucess);
      booksitevisitObj();
      showBackClose();
    },
  });
}

function createHiddenTag(currentValue) {
  var divId = document.getElementById("fq");
  if (!divId) {
    var input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", "fq");
    input.setAttribute("id", "fq");
    input.setAttribute("value", currentValue);
    document.getElementById("feedbacksection").appendChild(input);
  }
}

function createJsonObject(obj, flag) {
  var hiddenObj = $(obj).parent();
  var pid = hiddenObj.attr("id");
  var jsonObj = {};
  var nextId = $("#nextid" + pid).val();
  // yaha
  if (!flag) {
    nextId = $("#nextidQ" + pid).val();
    jsonObj = createJsonArray(nextId);
  } else {
    jsonObj = createJsonArray(nextId);
  }

  if (flag) {
    var domObjType = null;
    if (obj && obj.id) {
      domObjType = $("#" + obj.id).attr("type");
    }
    var otherId = $("#otherAnsId").val();
    if (domObjType === "button") {
      var favorite = showSuccessScreen(obj);
      if (favorite) {
        jsonObj["feedbackDetail"] = favorite.join(", ");
      }
    } else if (otherId) {
      var textData = $("#otherSectionDetail").val();
      jsonObj["feedbackDetail"] = otherId + "-" + textData;
    } else {
      var rVal = $("input[name=ansList]:checked").val();
      jsonObj["feedbackDetail"] = rVal;
    }
  }
  var obj = JSON.stringify(jsonObj);
  return obj;
}
function showSuccessScreen(obj) {
  var domObjType = $("#" + obj.id).attr("type");
  if (domObjType === "button") {
    var favorite = [];
    $.each($("input[name='ansListCheck']:checked"), function () {
      favorite.push($(this).val());
    });
    return favorite;
  }
}
$(document).ready(function () {
  $(".fbk__formtextarea")
    .on("keydown", function (e) {
      if (e.which == 13) {
        e.preventDefault();
      }
    })
    .on("input", function () {
      $(this).height(1);
      var totalHeight =
        $(this).prop("scrollHeight") -
        parseInt($(this).css("padding-top")) -
        parseInt($(this).css("padding-bottom")) +
        20;
      $(this).height(totalHeight);

      var len = $(".fbk__formtextarea").val().length;
      //console.log(len);
      if (len > 0) {
        $(".fbk__actiosubmit").removeAttr("disabled");
      } else {
        $(".fbk__actiosubmit").attr("disabled", "disabled");
      }
    });

  var textGet;

  if ($("#otherSectionDetail").length > 0) {
    textGet = $(".fbk__formtextarea").val().split(/\s+/, 200).join(" ").length;
  }
  if (textGet > 1) {
    $(".fbk__formtextarea").height(1);
    var totalHeight =
      $(".fbk__formtextarea").prop("scrollHeight") -
      parseInt($(".fbk__formtextarea").css("padding-top")) -
      parseInt($(".fbk__formtextarea").css("padding-bottom"));
    $(".fbk__formtextarea").height(totalHeight);
  }

  $("body").on("click", ".fbk__cont__closeico, .fbk__overlay", function () {
    $("#callFeedbackZone").html("");
  });
});

function createTextBoxSectionForQuestion(obj, currentValue) {
  if (currentValue === "36360" || currentValue === "36364") {
    var input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", "otherAnsId");
    input.setAttribute("id", "otherAnsId");
    input.setAttribute("value", currentValue);
    document.getElementById("nextQuestion").appendChild(input);
    $("#nextQuestion").addClass("fbk__slidebox__goleft");
    $("#otherSection").removeClass("fbk__slidebox__goright");
    showBackClose();
  }
}

function submitOtherDetails(obj) {
  var objJson = createJsonObject(null, true);
  var prevValue = document.getElementById("fq").value;
  var pk = document.getElementById("pk").value;
  var baseUrl = $("#domcache_feedback").data("calldomainurl");
  var udUrl = baseUrl + "nps/updateFeedbackRequest/" + pk + "";
  var currentValue = $("#otherAnsId").val();
  //var favorite = showSuccessScreen(obj);
  $.ajax({
    type: "POST",
    url: udUrl,
    data: objJson,
    contentType: "application/json",
    success: function (objSucess) {
      showSuccess(obj, currentValue);
    },
  });
}

function createJsonArray(nextId) {
  var jsonObj = {};
  var propertyid = $("#domcache_feedback").data("id");
  var email = $("#domcache_feedback").data("email");
  var mobile = $("#domcache_feedback").data("mobile");
  var isd = $("#domcache_feedback").data("isd");
  var fingerprint = $("#domcache_feedback").data("fingerprint");
  jsonObj["pmtfeedback"] = nextId;
  jsonObj["pmtfmobile"] = mobile;
  jsonObj["pmtfemailid"] = email;
  jsonObj["pmtfcndisd"] = isd;
  jsonObj["pmtfpmtrfnum"] = propertyid;
  jsonObj["pmtfpfingerprint"] = fingerprint;
  return jsonObj;
}

function jqNpsSlideClose(str) {
  if (typeof isAnyPopUpVisible !== "undefined" && isAnyPopUpVisible === true) {
    // Already defined some pop up
    isAnyPopUpVisible = false;
  }
  $("#" + str).removeClass("open");
  $(".bgNpsLayer").css("display", "none");
  $("#npsSidePopWrap").removeClass("height341");
  if (!ratingSaved) {
    var contactInfo =
      contactDataObj.uMob != "" && contactDataObj.uMob != "9"
        ? contactDataObj.uMob
        : contactDataObj.uEmail != "" && contactDataObj.uEmail != "a"
        ? contactDataObj.uEmail
        : contactDataObj.ramid;
    if (contactInfo == mbNps.comm_ramid) {
      ga("send", "event", "NPS_PRE_CONTACT", "NPS Widget Closed", contactInfo);
    } else {
      ga(
        "send",
        "event",
        "NPS_POST_CONTACT",
        "NPS Widget Closed",
        contactDataObj.uMob + "|" + contactDataObj.uEmail
      );
    }
  }
  if (mbNps) {
    if (!$("#npsSidePopConStep1").hasClass("npsSidePopConPrevious")) {
      mbNps.createCookie("mbNps", "Y", 7);
    }
  }
}

function jqNpsSlide(str, str1) {
  if (mbNps != undefined && mbNps != null && mbNps.source == "35682") {
    $("#" + str).show();
    $("#" + str1).hide();
    $("#npsSidePopConStep1").hide();
  } else {
    $("#" + str).addClass("npsSidePopConCurrent");
    $("#" + str1).addClass("npsSidePopConPrevious");
  }

  if (str == "npsSidePopConQnaThanks") {
    $("#npsSidePopWrap").removeClass("height341");
  }
}

function feedbackPopUp(str, str1) {
  $("#feedbackPopUpMobile").css("pointer-events", "none");
  var ratingSel = "";
  var qnaSel = "";
  var feedremarks = "";
  jQuery("input[name='npsRating']").each(function () {
    if (this.checked == true) ratingSel = this.value;
  });

  $("input[name='qna']:checked").each(function () {
    var idVal = $(this).attr("id");
    qnaSel = $("label[for='" + idVal + "']").text();
  });
  console.log("qnaSel :: " + qnaSel);
  var feedremarks = $("#qnaFeedback").val();

  if (ratingSel < 9) {
    var questionText = document.getElementById("recommendLabel_1").innerHTML;
  }
  if (ratingSel > 8) {
    var questionText = document.getElementById("recommendLabel_2").innerHTML;
  }
  saveFeedBack(ratingSel, qnaSel, questionText, feedremarks);
  jqNpsSlide(str, str1);
}

function saveFeedBack(ratingSel, qnaSel, questionText, feedremarks) {
  console.log("qnaSel2 :: " + qnaSel);
  contactDataObj.rating = ratingSel;
  contactDataObj.ans = qnaSel;
  contactDataObj.ques = questionText;
  contactDataObj.remark = feedremarks;
  mbNps.contactData = contactDataObj;
  mbNps.comm_e = mbNps.comm_e.replace(/\"/g, "");
  var urlStrContact = mbNps.provider + "/nps/feedbackUserPopup";
  $.ajax({
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    type: "POST",
    data: JSON.stringify(mbNps.contactData),
    url: urlStrContact,
    crossDomain: true,
    cache: false,
    async: false,
    success: function (data) {},
  });
}

function createQuetionPopup() {
  if ($("#feedbackPopup") != null && $("#feedbackPopup").val() === "Y") {
    var service1 = $("#serviceCompeleted1").val();
    var service2 = $("#serviceCompeleted2").val();
    var isListingType = $("#userIsListing").val();
    //if( typeof service1 !== 'undefined' || typeof service2 !== 'undefined' ) {
    // Listing Services
    if (service1) {
      $("#npsSidePopWrap").addClass("height381");
      $("label[for=radiocompletedService1]").html(service1);
    } else {
      $("#npsSidePopWrap").removeClass("height381");
      $("#radiocompletedService1").parent().hide();
    }

    if (service2) {
      $("label[for=radiocompletedService2]").html(service2);
    } else {
      $("#radiocompletedService2").parent().hide();
    }
    // $("#litsingPkg").show();
    //	}
    if (isListingType === "Y") {
      $("#litsingPkg").show();
    } else {
      // Non Listing Services
      $("#nonlistingpkg").show();
    }
  }
}

function feedbackPopUpDataSaver(str, str1) {
  var ratingSel = "";
  var qnaSel = "";
  var feedremarks = "";

  jQuery("input[name='npsRating']").each(function () {
    if (this.checked == true) ratingSel = this.value;
  });

  $("input[name='qna']:checked").each(function () {
    qnaSel = $(this).val();
  });

  var feedremarks = $("#qnaFeedback").val();

  if (ratingSel < 9) {
    var questionText = "22351";
  }
  if (ratingSel > 8) {
    var questionText = "22352";
  }

  saveFeedBack(ratingSel, qnaSel, questionText, feedremarks);
  jqNpsSlideNew(str, str1);
}

function jqNpsSlideNew(str, str1) {
  $("#" + str).addClass("npsSidePopConCurrent");
  $("#" + str1).addClass("npsSidePopConPrevious");
  if (str == "npsSidePopConQnaThanks") {
    $("#npsSidePopWrap").removeClass("height341");
  }
}

function jqNpsNextStep(obj, rating) {
  var npsRatingValue = parseInt(rating);
  $("#npsSidePopConQna").show();
  $(".nps-container__item").hide();
  if (npsRatingValue <= 6) {
    $("#npsStep_0").show();
  } else if (npsRatingValue >= 7 && npsRatingValue < 9) {
    $("#npsStep_1").show();
  } else if (npsRatingValue >= 9) {
    $("#npsStep_2").show();
  } else {
    return false;
  }
}

function jqNpsPopupClose(str) {
  jQuery("input[name='npsRatingWap']").each(function () {
    if (this.checked == true) this.checked = false;
  });
  $("#" + str).removeClass("open");
  $(".bgNpsLayer").css("display", "none");
}

function jqNpsPopupShow(str) {
  $("#" + str).addClass("open");
  $(".bgNpsLayer").css("display", "block");
}
function npsPopupSubmit(str) {
  $(".npsSidePopCon").hide();
  var npsSouceDivId = $("#npsSouceDivId").val();
  $("#" + npsSouceDivId).hide();
  $("#" + str).show();
  npsCapture();
}

function npsCapture() {
  var ratingSel = "";
  var ansSel = "";
  var quesSel = "";
  var feedremarks = "";

  jQuery("input[name='npsRating']").each(function () {
    if (this.checked == true) ratingSel = this.value;
  });

  $("input[name='qna']:checked").each(function () {
    ansSel = $(this).val();
    quesSel = $(this).data("quesid");
  });

  var feedremarks = $("#qnaFeedback").val();

  saveFeedBack(ratingSel, ansSel, quesSel, feedremarks);
}
function animateTop() {
  var elementPosition = $("#qnaFeedback").position().top;
  $(".npsSidePopCon").animate({ scrollTop: elementPosition }, 600);
}

function jqNpsSelect(obj, rating) {
  $(".npsPopupV2__step1__icon").hide();
  var npsRatingValue = parseInt(rating);
  if (npsRatingValue <= 6) {
    $("#npsPopupV2__step1__iconScore6").show();
  } else if (npsRatingValue >= 7 && npsRatingValue < 9) {
    $("#npsPopupV2__step1__iconScore8").show();
  } else if (npsRatingValue >= 9) {
    $("#npsPopupV2__step1__iconScore10").show();
  }
}

function jqNpsBack(str, str1) {
  $("#" + str1).removeClass("npsSidePopConCurrent");
  $("#" + str).removeClass("npsSidePopConPrevious");
  $("#" + str).addClass("npsSidePopConCurrent");
  $(".npsPopupV2__action a").removeClass("npsRatingClicked");
  $("#npsSidePopWrap").removeClass("height341");
}
