// ==========================================================================
// Global Notification
//
// Golbal Component for Web and Mobile
// ==========================================================================
var browserNotifPop = false;
var notificationModule = "";
var isOfflineEventData = isOfflineEventData || "search";
var pushNotKey =
  "BCGzQeHjqzBk96LxZ2BRlRUxOzTc7V7hnKRRsOabsNNpcLdafLRZNtRl6MVb4sIIzmqdUIhVj0m__PCVqrR_w4E";
function showBrowserNotification(isMobile, module) {
  var browserNotPopUpShown = sessionStorage.getItem("browserNotPopUpShown");
  if (
    isMobile == "N" &&
    browserNotifPop == true &&
    readCookie("webpushCookieRead") == null &&
    browserNotPopUpShown != "Y"
  ) {
    sessionStorage.setItem("browserNotPopUpShown", "Y");
    // On Contact Close
    if (module == "CONTACT") {
      notificationModule = "SRP_Contact";
      $("#letUsSendId").text(
        "Get alerts for newly added properties matching your requirement."
      );
      setTimeout(function () {
        $("#browserNotifPop").show();
      }, 5000);
    } else if (module == "EXIT") {
      notificationModule = "SRP_Exit";
      $("#letUsSendId").text("Couldn’t find what you’re looking for?");
      $("#browserNNotiId").text(
        "Get notified when a property matching your requirement is posted."
      );
      $("#browserNotifPop").show();
    }
  }
}

function showBrowserNotificationForSRPFilter(title) {
  var browserNotPopUpShown = sessionStorage.getItem("browserNotPopUpShown");
  if (
    browserNotifPop == true &&
    readCookie("webpushCookieRead") == null &&
    browserNotPopUpShown != "Y"
  ) {
    sessionStorage.setItem("browserNotPopUpShown", "Y");
    notificationModule = "SRP_Filter";
    $("#letUsSendId").text(title);
    $("#browserNNotiId").text("Subscribe to our notifications");
    setTimeout(function () {
      $("#browserNotifPop").show();
    }, 1000);
  }
}

function hidebrowserNotifPop() {
  $("#browserNotifPop").hide();
}
try {
  window.addEventListener("beforeinstallprompt", function (e) {
    try {
      e.userChoice.then(function (choiceResult) {});
    } catch (e) {
      console.log("error in aths");
    }
  });
} catch (e) {
  console.log("error in aths");
}

if (document.readyState === "complete") {
  if (
    navigator.serviceWorker &&
    location &&
    (location.protocol.indexOf("https") > -1 ||
      location.host.indexOf("localhost") > -1)
  ) {
    navigator.serviceWorker
      .register(notification["service-worker"])
      .then(
        function () {
          return navigator.serviceWorker.ready;
        },
        function (err) {
          console.log("SW register fail", err);
        }
      )
      .then(function (reg) {
        try {
          var timestmp = new Date().getTime();
          // Add pop-up html for 2-step chrome notificationd
          // add1stepHTML("searchPage");
          var gdpr = sessionStorage.getItem("mbgc");
          var gdprCookie = getCookie("mbcc");
          if (
            !(
              typeof gdpr != "undefined" &&
              gdpr == "Y" &&
              typeof gdprCookie != "undefined" &&
              gdprCookie != "Y"
            )
          ) {
            // Not Showing chrome notification in case of GDPR
            activatePushNotification("searchPage");
          }
        } catch (e) {
          console.log(
            "error in push notifcation after service worker registration" + e
          );
        }
      });
  } else {
    console.log("service worker not supported in browser");
  }
}

function add1stepHTML(pageName) {
  let htmlPopup =
    '<div class="browserNotiPop-bg"></div>' +
    '<div class="browserNotiPop">' +
    '<div class="notifyStep1">' +
    '<div class="notifiClose"></div>' +
    '<div class="browserNotiLogo"></div>' +
    '<div class="browserNotiCont">' +
    '<div class="letUsSend">Instant Property Updates & Alerts!</div>' +
    '<div class="browserNNoti">' +
    "Get all the latest Property recommendations, updates & more. You can check for browser settings to manage alerts.</div>" +
    '<div class="actionBlock"><a href="javascript://" onclick="blockChromeNoti();" class="remindMeL">Not Now</a>' +
    ' <a href="javascript://" onclick="askForChromeNotifications();" class="allowMe">Allow</a></div></div><div class="clearAll"></div></div>' +
    "</div></div>";
  let popUpBlocked = false;
  let cookieValForPopUp = readCookie("blockChromePop");
  if (
    typeof cookieValForPopUp !== "undefined" &&
    cookieValForPopUp != null &&
    cookieValForPopUp == "Y"
  ) {
    popUpBlocked = true;
  }

  if (Notification.permission === "default" && !popUpBlocked) {
    $("body").append(htmlPopup);
  }
}

function askForChromeNotifications() {
  removeStep1PopUp();
  activatePushNotification("searchPage");
}

function blockChromeNoti() {
  removeStep1PopUp();
  createCookieNotification("blockChromePop", "Y", 24);
}

function removeStep1PopUp() {
  $(".browserNotiPop").hide();
  $(".browserNotiPop-bg").hide();
}

try {
  $(".browserNotiPop-bg").click(function () {
    removeStep1PopUp();
    createCookieNotification("blockChromePop", "Y", 0);
  });
} catch (err) {}

function activatePushNotification2Step(pageRoot) {
  $("#browserNotifPop").hide();

  navigator.serviceWorker.ready.then(function (reg) {
    setTimeout(function () {
      if (
        !("PushManager" in Window) &&
        readCookie("webpushCookieRead") == null &&
        typeof Notification !== "undefined" &&
        Notification &&
        Notification.permission != "denied"
      ) {
        navigator.serviceWorker.ready.then(function (
          serviceWorkerRegistration
        ) {
          var alertRaisedCountTemp = getCookie("alertRaisedCount");
          if (alertRaisedCountTemp && !isNaN(alertRaisedCountTemp)) {
            alertRaisedCountTemp++;
          } else {
            alertRaisedCountTemp = 1;
          }
          createCookieNotification("alertRaisedCount", alertRaisedCountTemp, 0);
          //also create google-prompt cookie
          //createCookie("g-prompt", new Date().getTime(), 1);
          notif_google = 1;
          try {
            if (Notification && Notification.permission == "default") {
              if (notificationModule != "") {
                ga(
                  "send",
                  "event",
                  "ChromeNotification",
                  notificationModule,
                  "Popup"
                );
              } else {
                ga("send", "event", "ChromeNotification", pageRoot, "Popup");
              }
            }
          } catch (e) {
            console.log(e);
          }
          serviceWorkerRegistration.pushManager
            .subscribe({
              userVisibleOnly: true,
              applicationServerKey: urlBase64ToUint8Array(pushNotKey),
            })
            .then(
              function (pushSubscription) {
                if (pushSubscription) {
                  sendSubcription(pushSubscription);
                } else {
                  $("#browserNotifPopConfirm").show();
                  subscribePush(pageRoot);
                  return true;
                }
                if (notificationModule != "") {
                  ga(
                    "send",
                    "event",
                    "ChromeNotification",
                    notificationModule,
                    "Granted"
                  );
                } else {
                  ga(
                    "send",
                    "event",
                    "ChromeNotification",
                    pageRoot,
                    "Granted"
                  );
                }
              }.bind(this)
            )
            ["catch"](function (e) {
              console.log("Error getting subscription", e);

              if (notificationModule != "") {
                ga(
                  "send",
                  "event",
                  "ChromeNotification",
                  notificationModule,
                  "Denied"
                );
              } else {
                ga("send", "event", "ChromeNotification", pageRoot, "Denied");
              }
            });
        });
      } else if (
        typeof Notification !== "undefined" &&
        Notification &&
        Notification.permission == "denied"
      ) {
        remove_cookie("alertRaisedCount");
        remove_cookie("webpushCookieRead");
        remove_cookie("m_web_push");
      }
    }, 1);
  });
}

function activatePushNotification(pageRoot) {
  var newFcmChk = getCookie("newFcmChk");
  if (newFcmChk == null || newFcmChk == undefined) {
    navigator.serviceWorker.ready.then(function (reg) {
      reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(pushNotKey),
      });
    });
  }
  navigator.serviceWorker.ready.then(function (reg) {
    setTimeout(function () {
      var alertRaisedCountTemp = getCookie("alertRaisedCount");
      var allowPopUp = true;
      if (
        alertRaisedCountTemp &&
        !isNaN(alertRaisedCountTemp) &&
        alertRaisedCountTemp >= alertRaisedCount
      ) {
        allowPopUp = false;
      }
      if (
        !("PushManager" in Window) &&
        readCookie("webpushCookieRead") == null &&
        typeof Notification !== "undefined" &&
        Notification &&
        Notification.permission != "denied" &&
        allowPopUp
      ) {
        checkSubscription(pageRoot);
      } else if (
        typeof Notification !== "undefined" &&
        Notification &&
        Notification.permission == "denied"
      ) {
        remove_cookie("alertRaisedCount");
        remove_cookie("webpushCookieRead");
        remove_cookie("m_web_push");
        if (
          !(typeof canShowGoogleYolo === "undefined") &&
          !(typeof hintGoogleSignOn === "undefined") &&
          canShowGoogleYolo()
        )
          hintGoogleSignOn();
      } else if (
        !(typeof canShowGoogleYolo === "undefined") &&
        !(typeof hintGoogleSignOn === "undefined") &&
        canShowGoogleYolo()
      )
        hintGoogleSignOn();
    }, 30);
  });
}

function checkAndUpdateNotification() {
  if (
    navigator.serviceWorker &&
    location &&
    (location.protocol.indexOf("https") > -1 ||
      location.host.indexOf("localhost") > -1) &&
    readCookie("webpushCookieRead") == null &&
    typeof isMobilePlatform !== "undefined" &&
    (isMobilePlatform == false || isMobilePlatform == "false")
  ) {
    navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
      serviceWorkerRegistration.pushManager
        .subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(pushNotKey),
        })
        .then(
          function (pushSubscription) {
            if (!pushSubscription && Notification.permission == "default") {
              return;
            }
          }.bind(this)
        )
        ["catch"](function (e) {
          console.log("Error getting subscription", e);
        });
    });
  }
}

var alertRaisedCount = 1;

//
//checks status if push manager is enabled and user is already subscribed or not
//==========================================================================
function checkSubscription(pageRoot) {
  navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
    var alertRaisedCountTemp = getCookie("alertRaisedCount");
    if (alertRaisedCountTemp && !isNaN(alertRaisedCountTemp)) {
      alertRaisedCountTemp++;
    } else {
      alertRaisedCountTemp = 1;
    }
    createCookieNotification("alertRaisedCount", alertRaisedCountTemp, 0);
    //also create google-prompt cookie
    //createCookie("g-prompt", new Date().getTime(), 1);
    notif_google = 1;
    try {
      if (Notification && Notification.permission == "default") {
        if (notificationModule != "") {
          ga(
            "send",
            "event",
            "ChromeNotification",
            notificationModule,
            "Popup"
          );
        } else {
          ga("send", "event", "ChromeNotification", pageRoot, "Popup");
        }
      }
    } catch (e) {
      console.log(e);
    }

    serviceWorkerRegistration.pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(pushNotKey),
      })
      .then(
        function (pushSubscription) {
          if (pushSubscription) {
            sendSubcription(pushSubscription);
          } else {
            subscribePush(pageRoot);
            return;
          }

          if (notificationModule != "") {
            ga(
              "send",
              "event",
              "ChromeNotification",
              notificationModule,
              "Granted"
            );
          } else {
            ga("send", "event", "ChromeNotification", pageRoot, "Granted");
          }
        }.bind(this)
      )
      ["catch"](function (e) {
        console.log("Error getting subscription", e);
        if (notificationModule != "") {
          ga(
            "send",
            "event",
            "ChromeNotification",
            notificationModule,
            "Denied"
          );
        } else {
          ga("send", "event", "ChromeNotification", pageRoot, "Denied");
        }
      });
  });
}

//
//subscribe api specific to bricks
//==========================================================================
function sendSubcription(pushSubscription) {
  if (pushSubscription) {
    const endPoint = pushSubscription.endpoint.slice(
      pushSubscription.endpoint.lastIndexOf("/") + 1
    );

    var eJson = JSON.stringify(pushSubscription);

    ga("send", "event", "ChromeNotification-step1", endPoint, "rid");
    fetch(
      notification["track-notification"] +
        "notification/mbnotificationapi/browser/subscribe",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: eJson,
      }
    )
      .then(function (res) {
        if (res && res.ok) {
          createCookieNotification("newFcmChk", 1, 90 * 24 * 60);
          ntrack.wapNotificationEvent(endPoint);
          ga(
            "send",
            "event",
            "ChromeNotification-step2",
            userNTrackId,
            endPoint
          );
        } else {
          createCookieNotification("alertRaisedCount", 0);
        }
      })
      .catch(function (e) {
        console.log("Error sending subscription to server:", e);
      });
  }
}

function subscribePush(pageRoot) {
  //check if notification is off then ask user for notifcation
  if (Notification.permission === "denied") {
    console.warn("Permission for Notifications was denied");
    Notification.requestPermission(function (permission) {
      if (permission != "granted") {
        if (notificationModule != "") {
          ga(
            "send",
            "event",
            "ChromeNotification",
            notificationModule,
            "Denied"
          );
        } else {
          ga("send", "event", "ChromeNotification", pageRoot, "Denied");
        }

        return false;
      } else {
        subscribeOnclick(pageRoot);
      }
    }).catch(function (e) {
      if (notificationModule != "") {
        ga("send", "event", "ChromeNotification", notificationModule, "Denied");
      } else {
        ga("send", "event", "ChromeNotification", pageRoot, "Denied");
      }
    });
  } else {
    subscribeOnclick(pageRoot);
  }
}
function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}

function subscribeOnclick(pageRoot) {
  navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(pushNotKey),
      })
      .then(function (pushSubscription) {
        sendSubcription(pushSubscription);
        if (notificationModule != "") {
          ga(
            "send",
            "event",
            "ChromeNotification",
            notificationModule,
            "Granted"
          );
        } else {
          ga("send", "event", "ChromeNotification", pageRoot, "Granted");
        }
        if ($("#browserNotifPopConfirm").length != 0) {
          $("#browserNotifPopConfirm").hide();
        }
      })
      .catch(function (e) {
        if (Notification.permission === "denied") {
          console.warn("Permission for Notifications was denied");
          sendSubcription(null);
          if ($("#browserNotifPopConfirm").length != 0) {
            $("#browserNotifPopConfirm").hide();
          }
          if (notificationModule != "") {
            ga(
              "send",
              "event",
              "ChromeNotification",
              notificationModule,
              "Denied"
            );
          } else {
            ga("send", "event", "ChromeNotification", pageRoot, "Denied");
          }
          return;
        } else {
          console.log("Unable to subscribe to push.");
        }
        if (notificationModule != "") {
          ga(
            "send",
            "event",
            "ChromeNotification",
            notificationModule,
            "Denied"
          );
        } else {
          ga("send", "event", "ChromeNotification", pageRoot, "Denied");
        }
        if ($("#browserNotifPopConfirm").length != 0) {
          $("#browserNotifPopConfirm").hide();
        }
      });
  });
}

function remove_cookie(name) {
  document.cookie =
    name + "=; Path=/; secure; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

function createCookieNotification(name, value, hour) {
  var host = location.host;
  var expires = "";
  if (hour) {
    var date = new Date();
    date.setTime(date.getTime() + hour * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  }

  if (host.split(".").length === 1) {
    document.cookie = name + "=" + value + expires + "; path=/; secure;";
  } else {
    var domainParts = host.split(".");
    domainParts.shift();
    var domain = "." + domainParts.join(".");
    document.cookie =
      name + "=" + value + expires + "; path=/;secure;domain=" + domain;
  }
}

function isOffline() {
  try {
    if (navigator.serviceWorker && !navigator.onLine) {
      $("body").append(
        '<div class="alert-box" id="offlineinfo">You are Offline</div>'
      );
      $("#offlineinfo").fadeIn(300);
      return true;
    } else return false;
  } catch (e) {
    return false;
  }
}

function getCookie(name) {
  try {
    var i, c;
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (i = 0; i < ca.length; i++) {
      c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        var value = c.substring(nameEQ.length, c.length);
        if (
          value == "" &&
          (window.location.hostname.includes("deployment") ||
            window.location.hostname.includes("localhost") ||
            window.location.hostname.includes("release"))
        ) {
          continue;
        }

        return unescape(value.replace(/%20/g, ""));
      }
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

function readCookie(name) {
  try {
    var ca = document.cookie.split(";");
    var nameEQ = name + "=";
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) {
        retVal = c.substring(nameEQ.length, c.length);
        if (
          retVal == "" &&
          (window.location.hostname.includes("deployment") ||
            window.location.hostname.includes("localhost") ||
            window.location.hostname.includes("release"))
        ) {
          continue;
        }
        if (name == "userTypeflSlider" && retVal.indexOf(",") > 0)
          return retVal.substring(0, retVal.indexOf(","));
        else if (name == "userEmailflSlider") {
          return retVal.replace(/^"(.*)"$/, "$1");
        } else if (name == "userNameflSlider") {
          return retVal.replace(/^"(.\*)"$/, "$1");
        } else return retVal;
      }
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}
