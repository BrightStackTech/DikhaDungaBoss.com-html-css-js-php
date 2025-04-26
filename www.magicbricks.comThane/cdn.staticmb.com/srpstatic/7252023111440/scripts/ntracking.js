var clientIP = "";
try {
  var ntrack = ntrack || {};
  var $ = window.jQuery || window.Zepto || window.$;
  var userNTrackId, currentBrowseSessionId, activeSessionId, userUniqueNTrackId;
  var currentBrowseSessionTTL = 4 * 60; // 4 hours
  var userNTrackTTL = 1 * 365 * 24 * 60; // 2 years
  var isReady = false;
  var queue = [];
  var canStringify =
    typeof JSON !== "undefined" && typeof JSON.stringify !== "undefined";
  var eventQueue = [];
  var visitsUrl = ntrack.visitsUrl || "/ntrack/visits";
  //var eventsUrl = ntrack.eventsUrl || "http://115.112.207.70/bricks/ajax/tracking";
  var eventsUrl = ntrack.eventsUrl || "/bricks/ajax/tracking";
  var isDebugModOn = false;
  var RamTrackingHittingPoint =
    "https://ingestor.magicbricks.com/ramIngestorService/";
  var RamTrackingServerContract =
    "https://ingestor.magicbricks.com/server.html";

  //http://stackoverflow.com/a/2117523/1177228
  function generateId() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  if (
    localStorage.getItem("userUniqueNTrackId") == null ||
    localStorage.getItem("userUniqueNTrackId") == ""
  ) {
    userUniqueNTrackId = generateId();
    localStorage.setItem("userUniqueNTrackId", userUniqueNTrackId);
  }

  ntrack.getRawDataObject = function () {
    return {};
  };

  function log() {
    if (!location.hostname.includes("www.magicbricks.com")) {
      for (var i = 0; i < arguments.length; i++) {
        //console.log(arguments[i]);
      }
    }
  }

  function checkBrowserSupportForTracking() {
    // check all the functionality of the user browser
    if (canStringify == "undefined") return false;
    if (window.localStorage == "undefined") return false;
    if (window.sessionStorage == "undefined") return false;
    return true;
  }

  if (!checkBrowserSupportForTracking()) {
    var err = "browser not support tracking functionality";
    throw err;
  }

  ntrack.trackingGlobalData = {};

  ntrack.trackingEvent = {
    ASandBD: "ASandBD",
    Compare: "Compare",
    Contact: "Contact",
    DetailView: "DetailView",
    MailOpen: "MailOpen",
    MailSent: "MailSent",
    NotificationOpen: "NotificationOpen",
    NotificationSent: "NotificationSent",
    Requirement: "Requirement",
    Search: "Search",
    Shortlist: "Shortlist",
    BrowserNotification: "BrowserNotification",
    SrpCardView: "SrpCardView",
    SrpPropertyClick: "SrpPropertyClick",
    Shortlist: "Shortlist",
    SrpContactClick: "SrpContactClick",
    PageView: "PageView",
  };

  ntrack.EventActivityType = {
    Property: "Property",
    PSM: "PSM",
    PRJ: "PRJ",
    Agent: "Agent",
    Locality: "Locality",
    Others: "Others",
  };

  ntrack.Source = {
    Web: "Web",
    Web_Mobile: "Web_Mobile",
    Web_Others: "Web_Others",
    Mobile: "Mobile",
    App_Android: "App_Android",
    App_Ios: "App_Ios",
    App_Others: "App_Others",
    Alert: "Alert",
    Notification: "Notification",
  };

  ntrack.dataPostUrlsFor = {
    Search: RamTrackingHittingPoint + "search",
    Contact: RamTrackingHittingPoint + "contact",
    MailOpen: RamTrackingHittingPoint + "mailOpen",
    MailSent: RamTrackingHittingPoint + "mailSent",
    DetailView: RamTrackingHittingPoint + "detailView",
    Requirement: RamTrackingHittingPoint + "requirement",
    SrpCardView: RamTrackingHittingPoint + "impression",
    SrpPropertyClick: RamTrackingHittingPoint + "impression",
    Shortlist: RamTrackingHittingPoint + "impression",
    SrpContactClick: RamTrackingHittingPoint + "impression",
    PageView: RamTrackingHittingPoint + "pageView",
  };

  ntrack.ramTrackingEventModel = {
    getTrackingEventModel: function (typeOfModel) {
      var modelEvent;
      switch (typeOfModel) {
        case ntrack.trackingEvent.Search:
          modelEvent = {
            eventInfo: {
              eventType: "",
              activityType: "",
              source: "",
            },
            ext_id: [],
            requestInfo: {
              referrer: "",
              campaign_type: "",
              utm_source: "",
              deviceInfo: {
                ip: "",
                device: "",
                resolution: "",
                platform: "",
              },
              from_page: "",
            },
            userInfo: {
              user_id: "",
              email_id: "",
              active_session_id: "",
              name: "",
              mobile: "",
              verified_mob: "",
              user_type: "",
              col_uuid: "",
            },
            propertyInfo: {
              category: "",
              prop_type: [],
              parent_prop_type: "",
              locality: [],
              psm: [],
              project_type: "",
              locality_type: "",
              localityname: "",
              point_of_interest: "",
              transaction_type: [],
              city: 0,
              min_budget: 0,
              max_budget: 0,
              budget_per_sqft_min: 0,
              budget_per_sqft_max: 0,
              area_from: 0,
              area_to: 0,
              bedrooms: [],
              posted_by: [],
              searchpostedby: [],
              construction_status: [],
              construction_age: [],
              amenities: [],
              furnished_status: [],
              with_photo: false,
              with_video: false,
              bathroom: [],
              additional_room: [],
              preferred_floor: [],
              parking_type: 0,
              num_Of_parking: [],
              facing: [],
              overlooking: [],
              preferred_psm: [],
              preferred_builder: [],
              society_type: [],
              max_brokrage: 0,
              max_security: 0,
              deals_offers_interests: false,
              dealing_in: [],
              verified: false,
              featured_agent: false,
              landmark: 0,
              landmarkLatLong: 0,
              landmarkTravelTime: 0,
              landmarkModeOfTrans: 0,
              landmarkDistance: 0,
            },
            additionalData: [],
          };
          break;
        case ntrack.trackingEvent.Contact:
          modelEvent = {
            eventInfo: {
              eventType: "",
              activityType: "",
              source: "",
            },
            ext_id: [],
            requestInfo: {
              referrer: "",
              campaign_type: "",
              utm_source: "",
              deviceInfo: {
                ip: "",
                device: "",
                resolution: "",
                platform: "",
              },
              from_page: "",
            },
            userInfo: {
              user_id: "",
              email_id: "",
              active_session_id: "",
              name: "",
              mobile: "",
              verified_mob: "",
              user_type: "",
              col_uuid: "",
            },
            homeLoan: false,
            interested: [],
            additionalData: [],
          };
          break;
        case ntrack.trackingEvent.BrowserNotification:
          modelEvent = {
            eventInfo: {
              eventType: "",
              activityType: "",
              source: "",
            },
            rid: "",
            requestInfo: {
              referrer: "",
              campaign_type: "",
              utm_source: "",
              deviceInfo: {
                ip: "",
                device: "",
                resolution: "",
                platform: "",
              },
              from_page: "",
            },
            userInfo: {
              user_id: "",
              email_id: "",
              active_session_id: "",
              name: "",
              mobile: "",
              verified_mob: "",
              user_type: "",
              col_uuid: "",
            },
          };
          break;
        case ntrack.trackingEvent.SrpCardView:
        case ntrack.trackingEvent.SrpPropertyClick:
        case ntrack.trackingEvent.Shortlist:
        case ntrack.trackingEvent.SrpContactClick:
          modelEvent = {
            eventInfo: {
              eventType: "",
              activityType: "",
              source: "",
            },
            userSearchId: "",
            sortingType: "",
            categ: "",
            propPositions: [],
            propertyInfo: {
              psm: [],
              localityname: [],
              city: 0,
              min_budget: 0,
              max_budget: 0,
              bedrooms: [],
              posted_by: [],
              prop_type: [],
            },
            additionalData: [],
            requestInfo: {
              referrer: "",
              campaign_type: "",
              utm_source: "",
              deviceInfo: {
                ip: "",
                device: "",
                resolution: "",
                platform: "",
              },
              from_page: "",
            },
            userInfo: {
              user_id: "",
              email_id: "",
              active_session_id: "",
              name: "",
              mobile: "",
              verified_mob: "",
              user_type: "",
              col_uuid: "",
            },
            additionalData: [],
          };
          break;
        case ntrack.trackingEvent.DetailView:
          modelEvent = {
            eventInfo: {
              eventType: "",
              activityType: "",
              source: "",
            },
            ext_id: 0,
            requestInfo: {
              referrer: "",
              campaign_type: "",
              utm_source: "",
              deviceInfo: {
                ip: "",
                device: "",
                resolution: "",
                platform: "",
              },
              from_page: "",
            },
            userInfo: {
              user_id: "",
              email_id: "",
              active_session_id: "",
              name: "",
              mobile: "",
              verified_mob: "",
              user_type: "",
              col_uuid: "",
            },
            additionalData: [],
          };
          break;
        case ntrack.trackingEvent.PageView:
          modelEvent = {
            eventInfo: {
              eventType: "",
              activityType: "",
              source: "",
            },
            ext_id: 0,
            requestInfo: {
              referrer: "",
              campaign_type: "",
              utm_source: "",
              deviceInfo: {
                ip: "",
                device: "",
                resolution: "",
                platform: "",
              },
              from_page: "",
            },
            userInfo: {
              user_id: "",
              email_id: "",
              active_session_id: "",
              name: "",
              mobile: "",
              verified_mob: "",
              user_type: "",
              col_uuid: "",
            },
            additionalData: [],
            pageTitle: "",
            pageUrl: "",
            pageComponent: "",
          };
          break;
      }

      return modelEvent;
    },
  };

  ntrack.eventMappingObject = {
    getEventMappingModel: function (typeOfModel) {
      var modelEvent;
      switch (typeOfModel) {
        case ntrack.trackingEvent.Search:
          modelEvent = {
            url: "",
            activityType: "EventActivityType",
            eventType: "trackingEvent",
            ext_id: "",
            source: "Source",
            ip: "",
            device: "Source",
            resolution: "",
            referrer: "",
            act_sess_id: "",
            campaign_type: "",
            utm_source: "",
            platform: "",
            from_page: "",
            user_id: "",
            mobile: "",
            category: "category",
            prop_type: "prop_type",
            parent_prop_type: "parent_prop_type",
            locality: "locality",
            locality_type: "LocalityType",
            localityname: "localityName",
            psm: "psm",
            city: "city",
            min_budget: "budgetMin",
            max_budget: "budgetMax",
            bedrooms: "bedrooms",
            posted_by: "inputListings",
            transaction_type: "saleType",
            furnished_status: "furnished",
            area_from: "areaFrom",
            area_to: "areaTo",
            area_unit: "areaUnit",
            with_photo: "with_photo",
            with_video: "with_video",
            construction_status: "possessionStatus",
            construction_age: "ageConstruction",
            deals_offers_interests: "deals_offers_interests",
            amenities: "amenities",
            keyword: "keyword",
            project_type: "projectsType",
            dealing_in: "transactionType",
            verified: "verified",
            featured_agent: "featured",
            budget_per_sqft_min: "",
            budget_per_sqft_max: "",
            point_of_interest: "",
            bathroom: "bathrooms",
            facing: "facing",
            landmark: "searchLocName",
            landmarkLatLong: "radius",
            landmarkTravelTime: "searchLocTime",
            landmarkModeOfTrans: "searchTransMode",
            landmarkDistance: "searchLocDist",
            preferred_floor: "preferred_floor",
            preferred_psm: "preferred_psm",
            /*"additional_room":"",
            		"parking_type":"",
            		
            		"overlooking":"",
            		"preferred_builder":"",
            		"society_type":"",
            		"max_brokerage":"",
            		"max_security":"",
            		*/
            additionalData: "additionalData",
          };
          break;
        case ntrack.trackingEvent.Contact:
          modelEvent = {
            activityType: "EventActivityType",
            eventType: "trackingEvent",
            ext_id: "actualOwnerId",
            source: "Source",
            ip: "",
            device: "Source",
            resolution: "",
            referrer: "",
            act_sess_id: "",
            campaign_type: "",
            utm_source: "",
            platform: "",
            from_page: "",
            user_id: "",
            email_id: "email_id",
            name: "name",
            mobile: "mobile",
            verified_mob: "verified_mob",
            user_type: "",
            col_uuid: "",
            homeLoan: "homeLoan",
            interested: "interested",
            mailer_id: "actualOwnerId",
          };
          break;
        case ntrack.trackingEvent.BrowserNotification:
          modelEvent = {
            activityType: "EventActivityType",
            eventType: "trackingEvent",
            rid: "rid",
            source: "Source",
            ip: "",
            device: "Source",
            resolution: "",
            referrer: "",
            act_sess_id: "",
            campaign_type: "",
            utm_source: "",
            platform: "",
            from_page: "",
            user_id: "",
            email_id: "email_id",
            name: "name",
            mobile: "mobile",
            verified_mob: "verified_mob",
            user_type: "",
            col_uuid: "",
          };
          break;
        case ntrack.trackingEvent.SrpCardView:
        case ntrack.trackingEvent.SrpPropertyClick:
        case ntrack.trackingEvent.Shortlist:
        case ntrack.trackingEvent.SrpContactClick:
          modelEvent = {
            activityType: "EventActivityType",
            eventType: "trackingEvent",
            rid: "rid",
            source: "Source",
            ip: "",
            device: "Source",
            resolution: "",
            referrer: "",
            act_sess_id: "",
            campaign_type: "",
            utm_source: "",
            platform: "",
            from_page: "",
            user_id: "",
            email_id: "email_id",
            name: "name",
            mobile: "mobile",
            verified_mob: "verified_mob",
            user_type: "",
            col_uuid: "",
            sortingType: "",
            categ: "",
            propPositions: "",
            localityname: "localityName",
            psm: "psm",
            city: "city",
            additionalData: "additionalData",
          };
          break;

        case ntrack.trackingEvent.DetailView:
          modelEvent = {
            activityType: "EventActivityType",
            eventType: "trackingEvent",
            ext_id: "id",
            source: "Source",
            ip: "",
            device: "Source",
            resolution: "",
            referrer: "",
            act_sess_id: "",
            campaign_type: "",
            utm_source: "",
            platform: "",
            from_page: "",
            user_id: "",
            email_id: "",
            name: "",
            mobile: "",
            verified_mob: "",
            user_type: "",
            col_uuid: "",
          };
          break;
        case ntrack.trackingEvent.PageView:
          modelEvent = {
            activityType: "EventActivityType",
            eventType: "trackingEvent",
            ext_id: "id",
            source: "Source",
            ip: "",
            device: "Source",
            resolution: "",
            referrer: "",
            act_sess_id: "",
            campaign_type: "",
            utm_source: "",
            platform: "",
            from_page: "",
            user_id: "",
            email_id: "",
            name: "",
            mobile: "",
            verified_mob: "",
            user_type: "",
            col_uuid: "",
            pageTitle: "pageTitle",
            pageUrl: "pageUrl",
            pageComponent: "pageComponent",
          };
          break;
      }

      return modelEvent;
    },
  };

  ntrack.ramTrackingHelper = {
    searchHelperUtil: {
      DefaultValues: {
        activityType: "Others",
        parent_prop_type: "Others",
        locality_type: "Others",
        project_type: "Others",
        campaign_type: "Others",
      },
    },
  };

  //activeSessionId = getCookie("activeSessionId");
  //append a child iframe in body tag
  try {
    /*if(document.body != null){
		var wrapper= document.createElement('div');
		wrapper.setAttribute("visibility", "hidden");
		wrapper.innerHTML = '<iframe style="display:none;" border="none" id="guestFrame1" name="guestFrame1" width="0px" height="0px" frameborder="1" src="'+RamTrackingServerContract+'" scrolling="no"></iframe>';
		document.body.appendChild(wrapper);
	}*/

    $("html").append(
      '<iframe style="display:none;" border="none" id="guestFrame1" name="guestFrame1" width="0px" height="0px" frameborder="1" src="' +
        RamTrackingServerContract +
        '" scrolling="no"></iframe>'
    );

    function onMessage1(messageEvent) {
      if (!location.hostname.includes("www.magicbricks.com"))
        console.log(messageEvent);
    }

    var windowProxy1;
    windowProxy1 = new Porthole.WindowProxy(
      RamTrackingServerContract,
      "guestFrame1"
    );
    windowProxy1.addEventListener(onMessage1);
  } catch (error) {
    log(error + "problem in iframe creation");
  }

  ntrack.getDataPostLocation = function (trackingEvent) {
    var url = null;
    switch (trackingEvent) {
      case ntrack.trackingEvent.Search:
        url = ntrack.dataPostUrlsFor.Search;
        break;
      case ntrack.trackingEvent.Contact:
        url = ntrack.dataPostUrlsFor.Contact;
        break;
      case ntrack.trackingEvent.MailOpen:
        url = ntrack.dataPostUrlsFor.MailOpen;
        break;
      case ntrack.trackingEvent.MailSent:
        url = ntrack.dataPostUrlsFor.MailSent;
        break;
      case ntrack.trackingEvent.DetailView:
        url = ntrack.dataPostUrlsFor.DetailView;
        break;
      case ntrack.trackingEvent.Requirement:
        url = ntrack.dataPostUrlsFor.Requirement;
        break;
      case ntrack.trackingEvent.SrpCardView:
        url = ntrack.dataPostUrlsFor.SrpCardView;
        break;
      case ntrack.trackingEvent.SrpPropertyClick:
        url = ntrack.dataPostUrlsFor.SrpPropertyClick;
        break;
      case ntrack.trackingEvent.Shortlist:
        url = ntrack.dataPostUrlsFor.Shortlist;
        break;
      case ntrack.trackingEvent.SrpContactClick:
        url = ntrack.dataPostUrlsFor.SrpContactClick;
        break;
      case ntrack.trackingEvent.PageView:
        url = ntrack.dataPostUrlsFor.PageView;
        break;
    }
    return url;
  };

  function fillRawObject(from, to, depth) {
    try {
      for (var objData in from) {
        switch (Object.prototype.toString.call(from[objData])) {
          case "[object Boolean]":
            to[objData] = from[objData];
            break;
          case "[object Number]":
            to[objData] = from[objData];
            break;
          case "[object String]":
            to[objData] = from[objData];
            break;
          case "[object Array]":
            to[objData] = from[objData];
            break;
          case "[object HTMLInputElement]":
            break;
          case "[object global]":
            break;
          case "[object Object]":
            var temp = from[objData];
            if (depth < 1) {
              depth++;
              fillRawObject(temp, to, depth);
              depth--;
            }
            break;
          default:
        }
      }
    } catch (err) {
      log(err);
    }
  }
  ntrack.getTrackingGlobalData = function () {
    var systemInfo = {
      resolution: window.screen.availWidth + "X" + window.screen.availHeight,
      referrer: document.referrer,
      platform: navigator.appName + navigator.appVersion,
      name: getCookie("userName") || getCookie("contactNameCookie"),
      mobile: getCookie("userMobile") || getCookie("contackMobileCookie"),
      email_id: getCookie("userEmail") || getCookie("contactEmailCookie"),
      userMobileCountry:
        getCookie("userMobileCountry") || getCookie("contactIsdCookie"),
      user_type:
        getCookie("userType") || getCookie("contactUserTypeCookie") || "I",
      col_uuid: getCookie("_col_uuid"),
      verified_mob: getCookie("verificationFlag"),
      user_id: getCookie("userNTrackId"),
      active_session_id: sessionStorage.currentBrowseSessionId,
      ip: clientIP,
    };
    return systemInfo;
  };
  //
  ntrack.sendEvent = function (event) {
    try {
      // console.log(event.eventInfo.eventType);
      var eventStringConvert = event.eventInfo.eventType;
      eventStringConvert =
        eventStringConvert.charAt(0).toLowerCase() +
        eventStringConvert.slice(1);
      eventStringConvert = checkForImpression(eventStringConvert);
      windowProxy1.post({
        event: event,
        url: RamTrackingHittingPoint + eventStringConvert,
      });
    } catch (error) {
      return false;
    }
  };

  function checkForImpression(eventStringConvert) {
    var temp = eventStringConvert.toUpperCase();
    if (
      temp === "SRPCARDVIEW" ||
      temp === "SRPPROPERTYCLICK" ||
      temp === "SRPCONTACTCLICK" ||
      temp === "SHORTLIST"
    ) {
      return "impression";
    } else {
      return eventStringConvert;
    }
  }

  ntrack.eventValidate = function (eventType, eventToValidateObject) {
    var eventObject =
      ntrack.ramTrackingEventModel.getTrackingEventModel(eventType);
    var depth = 0;
    var valid = ntrack.validateTypeOfObjects(
      eventObject,
      eventToValidateObject,
      depth
    );
    if (!valid) log("not Valid Bean");
  };
  ntrack.validateTypeOfObjects = function (
    eventObject,
    eventToValidateObject,
    depth
  ) {
    for (var objData in eventToValidateObject) {
      switch (Object.prototype.toString.call(eventToValidateObject[objData])) {
        case "[object Object]":
          if (depth < 3) {
            depth++;
            ntrack.validateTypeOfObjects(
              eventObject[objData],
              eventToValidateObject[objData]
            );
            depth--;
          }
          break;
        default:
          if (
            Object.prototype.toString.call(eventObject[objData]) !=
            Object.prototype.toString.call(eventToValidateObject[objData])
          ) {
            return false;
          }
      }
    }
    return true;
  };

  function setCookie(name, value, ttl) {
    value = value.replace(/%20/g, "");
    var expires = "";
    var cookieDomain = "";
    if (ttl) {
      var date = new Date();
      date.setTime(date.getTime() + ttl * 60 * 1000);
      expires = "; expires=" + date.toGMTString();
    }
    if (ntrack.domain) {
      cookieDomain = "; domain=" + ntrack.domain;
    }
    document.cookie =
      name + "=" + escape(value) + expires + cookieDomain + "; path=/; secure;";
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

  function destroyCookie(name) {
    setCookie(name, "", -1);
  }

  function setReady() {
    var callback;
    while ((callback = queue.shift())) {
      callback();
    }
    isReady = true;
  }

  function ready(callback) {
    if (isReady) {
      callback();
    } else {
      queue.push(callback);
    }
  }

  //eventsUrl+"?eventType="+event.eventInfo.eventType
  function trackEvent(event) {
    ready(function () {
      var status = ntrack.sendEvent(event);
      if (status == false) {
        $.ajax({
          type: "POST",
          contentType: "application/json",
          url: eventsUrl + "?eventType=" + event.eventInfo.eventType,
          data: JSON.stringify(event),
          dataType: "json",
          async: true,
          success: function () {
            // console.log("done sending");
          },
        });
      }
    });
  }

  function page() {
    return ntrack.page || window.location.pathname;
  }

  function eventProperties(e) {
    var $target = $(e.currentTarget);
    return {
      tag: $target.get(0).tagName.toLowerCase(),
      id: $target.attr("id"),
      class: $target.attr("class"),
      page: page(),
      section: $target.closest("*[data-section]").data("section"),
    };
  }

  ntrack.fillUserSystemInfo = function (sendEvent) {
    // if userEmail is exist then fill in sendEvent
    ntrack.trackingGlobalData.systemInfo = ntrack.getTrackingGlobalData();
    if (
      ntrack.trackingGlobalData.systemInfo.email_id != null &&
      ntrack.trackingGlobalData.systemInfo.email_id != undefined
    ) {
      ntrack.trackingGlobalData.systemInfo.email_id =
        ntrack.trackingGlobalData.systemInfo.email_id.replace(/['"]+/g, "");
    }
    Object.getOwnPropertyNames(ntrack.trackingGlobalData.systemInfo).forEach(
      function (name, index, dummyArray) {
        fillModel(name, ntrack.trackingGlobalData.systemInfo[name], sendEvent);
        //sendEvent.info[name] = ntrack.trackingGlobalData.systemInfo[name];
      }
    );
    switch (sendEvent.trackingEvent) {
      case ntrack.trackingEvent.Search:
        break;
      case ntrack.trackingEvent.Contact:
        break;
      case ntrack.trackingEvent.MailOpen:
        break;
      case ntrack.trackingEvent.MailSent:
        break;
      case ntrack.trackingEvent.DetailView:
        break;
      case ntrack.trackingEvent.Requirement:
        break;
      case ntrack.trackingEvent.PageView:
        break;
      default:
    }
  };

  function getIdsList(key, paramsMap) {
    var propsArr = [];
    if (paramsMap[key] != null) {
      paramsMap[key] = paramsMap[key] + "";
      if (paramsMap[key].indexOf("||") != -1) {
        propsArr = paramsMap[key].split("||");
      } else if (paramsMap[key].indexOf(",") != -1) {
        propsArr = paramsMap[key].split(",");
      } else if (paramsMap[key].indexOf("-") != -1) {
        propsArr = paramsMap[key].split("-");
      } else if (paramsMap[key].indexOf("_") != -1) {
        propsArr = paramsMap[key].split("_");
      } else if (paramsMap[key].indexOf("=") != -1) {
        propsArr = paramsMap[key].split("=");
      } else if (paramsMap[key].indexOf('"') != -1) {
        propsArr = paramsMap[key].split('"');
      } else {
        propsArr = [paramsMap[key]];
      }
    }
    return propsArr;
  }

  function giveMeArray(stringContainingValues) {
    var propsArr = {};
    if (stringContainingValues != null) {
      stringContainingValues = stringContainingValues + "";
      if (stringContainingValues.indexOf("||") != -1) {
        propsArr = stringContainingValues.split("||");
      } else if (stringContainingValues.indexOf(",") != -1) {
        propsArr = stringContainingValues.split(",");
      } else if (stringContainingValues.indexOf("-") != -1) {
        propsArr = stringContainingValues.split("-");
      } else if (stringContainingValues.indexOf("_") != -1) {
        propsArr = stringContainingValues.split("_");
      } else if (stringContainingValues.indexOf("=") != -1) {
        propsArr = stringContainingValues.split("=");
      } else if (stringContainingValues.indexOf('"') != -1) {
        propsArr = stringContainingValues.split('"');
      } else {
        propsArr = [stringContainingValues];
      }
    }
    return propsArr;
  }

  ntrack.getVisitId = ntrack.getVisitToken = function () {
    return visitId;
  };

  ntrack.getVisitorId = ntrack.getVisitorToken = function () {
    return visitorId;
  };

  ntrack.reset = function () {
    destroyCookie("userNTrackId");
    destroyCookie("currentBrowseSessionId");
    destroyCookie("ntrack_events");
    destroyCookie("activeSessionId");
    return true;
  };

  ntrack.debug = function (enabled) {
    if (enabled === false) {
      destroyCookie("ntrack_debug");
    } else {
      setCookie("ntrack_debug", "t", 365 * 24 * 60); // 1 year
    }
    return true;
  };

  ntrack.trackView = function () {
    var properties = {
      url: window.location.href,
      title: document.title,
      page: page(),
    };
    ntrack.track("$view", properties);
  };

  ntrack.trackClicks = function () {
    $(document).on("click", "a, button, input[type=submit]", function (e) {
      var $target = $(e.currentTarget);
      var properties = eventProperties(e);
      properties.text =
        properties.tag == "input"
          ? $target.val()
          : $.trim($target.text().replace(/[\s\r\n]+/g, " "));
      properties.href = $target.attr("href");
      ntrack.track("$click", properties);
    });
  };

  ntrack.trackSubmits = function () {
    $(document).on("submit", "form", function (e) {
      var properties = eventProperties(e);
      ntrack.track("$submit", properties);
    });
  };

  ntrack.trackChanges = function () {
    $(document).on("change", "input, textarea, select", function (e) {
      var properties = eventProperties(e);
      ntrack.track("$change", properties);
    });
  };

  ntrack.trackAll = function () {
    ntrack.trackView();
    ntrack.trackClicks();
    ntrack.trackSubmits();
    ntrack.trackChanges();
  };

  ntrack.getUrlOtherParams = function (otherParams) {
    // if(url !=null){
    var paramstemp = otherParams.split("|");
    var paramsMap = [];
    for (var index in paramstemp) {
      var paramNamVal = paramstemp[index].split("=");
      paramsMap[paramNamVal[0]] = paramNamVal[1];
    }

    return paramsMap;
    //}
  };

  ntrack.getSearchBy = function () {
    var params = ntrack.getUrlParams(ntrack.visitsUrl);
    var searchBy = "cityName";
    for (var param in params) {
      var paramNamVal = param.split("=");
      if (paramNamVal.length > 1) {
        if (paramNamVal[0] == "projectSocity") {
          searchBy = "projectSocity";
        } else if (paramNamVal[0] == "Locality") {
          searchBy = "Locality";
        } else if (paramNamVal[0] == "developerName") {
          searchBy = "developerName";
        }
      }
    }
    return searchBy;
  };

  // this function will return all the data in string-string Map
  ntrack.getDataMapFromThisEventSourceObject = function (
    rawSourceData,
    eventDataMap
  ) {
    var depth = 0;
    fillRawObject(rawSourceData, eventDataMap, depth);
  };

  ntrack.searchCatagory = function () {
    var landingpage = window.location.href;
    var urlTokens = landingpage.split("/");
    return urlTokens[3];
  };

  ntrack.setEventActivityType = function (rawSourceData) {
    switch (rawSourceData.trackingEvent) {
      case ntrack.trackingEvent.Search:
        if (
          rawSourceData.searchType !== null &&
          rawSourceData.EventActivityType == null
        ) {
          if (rawSourceData.searchType == "1") {
            rawSourceData.EventActivityType = ntrack.EventActivityType.Property;
          } else if (rawSourceData.searchType == "2") {
            rawSourceData.EventActivityType = ntrack.EventActivityType.Agent;
          } else if (rawSourceData.searchType == "3") {
            // buyers
            rawSourceData.EventActivityType = ntrack.EventActivityType.Others;
          } else if (rawSourceData.searchType == "4") {
            // agent and Builder
            rawSourceData.EventActivityType = ntrack.EventActivityType.Agent;
          } else if (rawSourceData.searchType == "5") {
            rawSourceData.EventActivityType = ntrack.EventActivityType.PSM;
          } else {
            rawSourceData.EventActivityType = ntrack.EventActivityType.Others;
          }
        }
        if (rawSourceData.EventActivityType == null) {
          rawSourceData.EventActivityType = ntrack.EventActivityType.Others;
        }
        break;
      case ntrack.trackingEvent.Contact:
        if (
          rawSourceData.contactType !== null &&
          rawSourceData.EventActivityType == null
        ) {
          if (
            rawSourceData.contactType == "property" ||
            rawSourceData.contactType == ntrack.EventActivityType.Property
          ) {
            rawSourceData.EventActivityType = ntrack.EventActivityType.Property;
          } else if (
            rawSourceData.contactType == "agent" ||
            rawSourceData.contactType == ntrack.EventActivityType.Agent
          ) {
            rawSourceData.EventActivityType = ntrack.EventActivityType.Agent;
          } else if (
            rawSourceData.contactType == ntrack.EventActivityType.PRJ
          ) {
            rawSourceData.EventActivityType = ntrack.EventActivityType.PRJ;
          } else if (
            rawSourceData.contactType == ntrack.EventActivityType.PSM
          ) {
            rawSourceData.EventActivityType = ntrack.EventActivityType.PSM;
          } else if (
            rawSourceData.contactType == "project" ||
            rawSourceData.contactType == "Project"
          ) {
            rawSourceData.EventActivityType = ntrack.EventActivityType.Property;
          } else {
            rawSourceData.EventActivityType = ntrack.EventActivityType.Others;
          }
        }
        if (rawSourceData.EventActivityType == null) {
          rawSourceData.EventActivityType = ntrack.EventActivityType.Others;
        }
        break;
      case ntrack.trackingEvent.MailOpen:
        break;
      case ntrack.trackingEvent.SrpCardView:
        rawSourceData.EventActivityType = ntrack.EventActivityType.Property;
        break;
      case ntrack.trackingEvent.SrpPropertyClick:
        rawSourceData.EventActivityType = ntrack.EventActivityType.Property;
        break;
      case ntrack.trackingEvent.Shortlist:
        rawSourceData.EventActivityType = ntrack.EventActivityType.Property;
        break;
      case ntrack.trackingEvent.SrpContactClick:
        rawSourceData.EventActivityType = ntrack.EventActivityType.Property;
        break;
      case ntrack.trackingEvent.MailSent:
        break;
      case ntrack.trackingEvent.DetailView:
        // decide which event project or property
        if (!rawSourceData.EventActivityType) {
          rawSourceData.EventActivityType = ntrack.EventActivityType.Property;
        }
        break;
      case ntrack.trackingEvent.Requirement:
        break;
      case ntrack.trackingEvent.PageView:
        // decide which event project or property
        if (!rawSourceData.EventActivityType) {
          rawSourceData.EventActivityType = ntrack.EventActivityType.Property;
        }
        if (rawSourceData.EventActivityType == "property") {
          rawSourceData.EventActivityType = ntrack.EventActivityType.Property;
        }
        if (rawSourceData.EventActivityType == "project") {
          rawSourceData.EventActivityType = ntrack.EventActivityType.Property;
        }
        break;
      default:
    }
  };

  ntrack.fillEventModelByEventData = function (
    sendEvent,
    eventMapping,
    eventDataMap
  ) {
    Object.getOwnPropertyNames(eventDataMap).forEach(function (
      eventDataIndx,
      eventDataVal,
      dummyArray
    ) {
      Object.getOwnPropertyNames(eventMapping).forEach(function (
        sendEventName,
        rawEventName,
        dummyArray
      ) {
        if (eventMapping[sendEventName] == eventDataIndx) {
          fillModel(sendEventName, eventDataMap[eventDataIndx], sendEvent);
        }
      });
    });
  };

  function fillModel(name, val, eventObject) {
    var find = false;
    for (var obj in eventObject) {
      if (obj == name) {
        eventObject[name] = val;
        find = true;
        break;
      } else if (
        typeof eventObject[obj] != null &&
        typeof eventObject[obj] == "object"
      ) {
        // then call fillRawObject
        //console.log("Object is been Hit "+obj);
        find = fillModel(name, val, eventObject[obj]);
        if (find) return find;
      }
      /*// put in the additional params
			
*/
    }
    return find;
    //fillRawObject(name,val,eventObject);
  }

  ntrack.modifyEventMappingObject = function (
    rawSourceData,
    eventMappingObject
  ) {
    switch (rawSourceData.trackingEvent) {
      case ntrack.trackingEvent.Search:
        if (rawSourceData.searchType !== null) {
          if (rawSourceData.searchType == "1") {
            //rawSourceData.EventActivityType = ntrack.EventActivityType.Property;
          } else if (rawSourceData.searchType == "2") {
            //rawSourceData.EventActivityType = ntrack.EventActivityType.Agent;
            //eventMappingObject.transaction_type = "transactionType";
            eventMappingObject.verified = "criAgents";
          } else if (rawSourceData.searchType == "3") {
            // buyers
            //rawSourceData.EventActivityType = ntrack.EventActivityType.Others;
          } else if (rawSourceData.searchType == "4") {
            // agent and Builder
            //rawSourceData.EventActivityType = ntrack.EventActivityType.Agent;
          } else if (rawSourceData.searchType == "5") {
            //rawSourceData.EventActivityType = ntrack.EventActivityType.Project;
            eventMappingObject.construction_status = "possessionYears";
          } else {
            //rawSourceData.EventActivityType = ntrack.EventActivityType.Others;
          }
        }
        if (rawSourceData.EventActivityType == null) {
          //rawSourceData.EventActivityType = ntrack.EventActivityType.Others;
        }
        break;
      case ntrack.trackingEvent.Contact:
        if (
          rawSourceData.contactType !== null &&
          rawSourceData.EventActivityType == null
        ) {
          if (rawSourceData.contactType == "property") {
            //rawSourceData.EventActivityType = ntrack.EventActivityType.Property;
          } else if (rawSourceData.contactType == "agent") {
            //rawSourceData.EventActivityType = ntrack.EventActivityType.Agent;
          } else {
            //rawSourceData.EventActivityType = ntrack.EventActivityType.Others;
          }
        }
        if (
          rawSourceData.EventActivityType != null &&
          rawSourceData.EventActivityType == ntrack.EventActivityType.PSM
        ) {
          eventMappingObject.ext_id = "propertyIdStringArray";
        }
        if (rawSourceData.EventActivityType == null) {
          //rawSourceData.EventActivityType = ntrack.EventActivityType.Others;
        }
        break;
      case ntrack.trackingEvent.MailOpen:
        break;
      case ntrack.trackingEvent.MailSent:
        break;
      case ntrack.trackingEvent.DetailView:
        break;
      case ntrack.trackingEvent.Requirement:
        break;
      case ntrack.trackingEvent.PageView:
        break;
      default:
    }
  };

  ntrack.modifySendEventFromUrl = function (sendEvent, eventDataMap) {
    // get the url
    var valuesInUrl = window.location.href.split("&");
    var rawSourceData = [];
    for (var i = 0; i < valuesInUrl.length; i++) {
      if (valuesInUrl[i].indexOf("emailid") == 0) {
        var emailparam = valuesInUrl[i];
        emailparam = emailparam.substr(8, emailparam.length);
        rawSourceData["emailid"] = emailparam.replace(/['"]+/g, "");
      } else if (valuesInUrl[i].indexOf("mobile") == 0) {
        var mobileparam = valuesInUrl[i];
        mobileparam = mobileparam.substr(7, mobileparam.length);
        rawSourceData["mobile"] = mobileparam;
      } else {
        var keyValuePair = valuesInUrl[i].split("=");
        rawSourceData[keyValuePair[0]] = keyValuePair[1];
      }
    }
    if (rawSourceData["emailid"]) {
      sendEvent.userInfo.email_id = rawSourceData["emailid"];
      sendEvent.mail_id = rawSourceData["emailid"];
    }
    if (rawSourceData["mobile"]) {
      sendEvent.userInfo.mobile = rawSourceData["mobile"];
    }

    // for campaignType and utm_source
    if (rawSourceData["pid"]) {
      sendEvent.requestInfo.campaign_type = "Paid";
    } else {
      var campaignType = "Others";
      if (document.referrer && document.referrer != "") {
        if (
          document.referrer.indexOf("magicbricks.com") < 20 &&
          document.referrer.indexOf("magicbricks.com") != -1
        ) {
          campaignType = "Internal";
        } else {
          campaignType = "Organic";
        }
      } else if (window.opener) {
        var openerWin = window.opener.location.hostname;
        if (
          !(typeof openerWin === "undefined") &&
          openerWin != null &&
          openerWin != ""
        ) {
          if (
            openerWin != null &&
            openerWin != undefined &&
            document.domain != null &&
            document.domain != undefined &&
            openerWin.indexOf(document.domain) < 20
          ) {
            campaignType = "Internal";
          } else {
            campaignType = "Organic";
          }
        }
      }
      sendEvent.requestInfo.campaign_type = campaignType;
    }
    if (rawSourceData["utm_source"]) {
      sendEvent.requestInfo.utm_source = rawSourceData["utm_source"];
    }
    switch (sendEvent.trackingEvent) {
      case ntrack.trackingEvent.Search:
        break;
      case ntrack.trackingEvent.Contact:
        break;
      case ntrack.trackingEvent.MailOpen:
        break;
      case ntrack.trackingEvent.MailSent:
        break;
      case ntrack.trackingEvent.DetailView:
        break;
      case ntrack.trackingEvent.Requirement:
        break;
      case ntrack.trackingEvent.PageView:
        break;
      default:
    }
  };

  ntrack.util = {
    createSchemaFrom: function (sendEvent) {
      for (var objData in sendEvent) {
        //console.log(objData.toString()+Object.prototype.toString.call( eventToValidateObject[objData]));
        switch (Object.prototype.toString.call(sendEvent[objData])) {
          case "[object Boolean]":
            sendEvent[objData] = false;
            break;
          case "[object Number]":
            sendEvent[objData] = 0;
            break;
          case "[object String]":
            /*Object.getOwnPropertyNames(ntrack.ramTrackingHelper.searchHelperUtil.DefaultValues).forEach(function(name,Val, dummyArray) {
			        		if( name == objData){
			        			sendEvent[objData] = ntrack.ramTrackingHelper.searchHelperUtil.DefaultValues[name];
			        			return;
			        		}else{
			        			sendEvent[objData] = "";
			        		}
			        	});*/
            sendEvent[objData] = "";
            break;
          case "[object Array]":
            sendEvent[objData] = [];
            break;
          case "[object HTMLInputElement]":
            break;
          case "[object global]":
            break;
          case "[object Object]":
            //var temp = eventToValidateObject[objData];
            ntrack.util.createSchemaFrom(sendEvent[objData]);
            //pr(objData);
            break;
          default:
        }
      }
    },
    getParantPropertyNameFromCode: function (code) {},
    getProjectTypeNameFromCode: function (code) {},

    isAdditionalSearchParam: function (paramMaps, mappingObject) {},
    Search: {
      Residential: [
        "10000",
        "10017",
        "10001",
        "10002",
        "10003",
        "10054",
        "10020",
        "10021",
        "10022",
      ],
      Commercial: [
        "10018",
        "10006",
        "10012",
        "10015",
        "10016",
        "10007",
        "10008",
        "10009",
        "10052",
        "10051",
        "10010",
        "10011",
        "10013",
        "10014",
        "10030",
      ],
    },
  };

  ntrack.util.putAdditionalData = function (
    sendEvent,
    eventDataMap,
    eventMappingObject
  ) {
    //ntrack.util.isAdditionalSearchParam(paramMaps,mappingObject,additionalParamArray);
    switch (eventDataMap.trackingEvent) {
      case ntrack.trackingEvent.Search:
      case ntrack.trackingEvent.PageView:
        var tempKeyValueData = eventDataMap["rawUrl"].split("&");
        var paramValues = {};
        for (var i = 0; i < tempKeyValueData.length; i++) {
          var keyValuePair = tempKeyValueData[i].split("=");
          paramValues[keyValuePair[0]] = keyValuePair[1];
        }

        // delete additional data which is comming
        var removal = [
          "imageVideo",
          "Search_Param_Maps",
          "propertyType_new",
          "source",
          "searchType",
          "price",
          "page",
          "tab1",
          "SRP",
          "propertyType_R_new",
          "mbTrackSrc",
          "firstLocalityLinkRender",
          "resultPerPage",
          "propertyType",
          "nsrSearchBar",
          "searchTransMode",
          "state",
          "sortBy",
          "projectsIn",
        ];
        for (var i = 0, len = removal.length; i < len; i++) {
          if (paramValues[removal[i]] != null) {
            // remove this element form the rawSourceData
            delete paramValues[removal[i]];
          }
        }
        Object.getOwnPropertyNames(paramValues).forEach(function (
          paramValuesIndx,
          paramValuesVal,
          dummyArray
        ) {
          var found = false;
          Object.getOwnPropertyNames(eventMappingObject).forEach(function (
            eventMappingObjectIndx,
            eventMappingObjectVal,
            dummyArray
          ) {
            if (
              eventMappingObject[eventMappingObjectIndx] != null &&
              eventMappingObject[eventMappingObjectIndx] == paramValuesIndx
            ) {
              found = true;
              return;
            }
          });
          if (!found) {
            // additional param put it
            var temp = {
              paramType: "AdditionalParam-1",
              paramValues: ["123XX", "654FFF", "765DDD"],
            };
            temp.paramType = paramValuesIndx;
            temp.paramValues = giveMeArray(paramValues[paramValuesIndx]);
            sendEvent.additionalData.push(temp);
          }
        });
        break;
      case ntrack.trackingEvent.Contact:
        break;
      case ntrack.trackingEvent.MailOpen:
        break;
      case ntrack.trackingEvent.MailSent:
        break;
      case ntrack.trackingEvent.DetailView:
        break;
      case ntrack.trackingEvent.Requirement:
        break;
      case ntrack.trackingEvent.SrpCardView:
      case ntrack.trackingEvent.SrpPropertyClick:
      case ntrack.trackingEvent.Shortlist:
      case ntrack.trackingEvent.SrpContactClick:
        var searchInfo = new Object();
        if (eventDataMap["psm"] != null) {
          searchInfo["psm"] = eventDataMap["psm"];
        }
        if (eventDataMap["localityname"] != null) {
          searchInfo["localityname"] = eventDataMap["localityname"];
        }
        // modify city for suburb search
        if (eventDataMap["city"] != null) {
          searchInfo["city"] = eventDataMap["city"].toString().split("-")[0];
        }
        if (eventDataMap["category"] != null) {
          searchInfo["category"] = eventDataMap["category"].toString();
        }
        if (eventDataMap["prop_type"] != null) {
          searchInfo["prop_type"] = eventDataMap["prop_type"];
        }
        if (eventDataMap["min_budget"] != null) {
          searchInfo["min_budget"] = eventDataMap["min_budget"];
        }
        if (eventDataMap["max_budget"] != null) {
          searchInfo["max_budget"] = eventDataMap["max_budget"];
        }
        var additionalData = [];
        if (eventDataMap["bedrooms"] != null) {
          searchInfo["bedrooms"] = eventDataMap["bedrooms"];

          var paramBean = new Object();
          paramBean["paramType"] = "bedrooms";
          paramBean["paramValues"] = eventDataMap["bedrooms"];
          additionalData.push(paramBean);
        }
        if (eventDataMap["posted_by"] != null) {
          searchInfo["posted_by"] = eventDataMap["posted_by"];

          var paramBean = new Object();
          paramBean["paramType"] = "posted_by";
          paramBean["paramValues"] = eventDataMap["posted_by"];
          additionalData.push(paramBean);
        }
        if (eventDataMap["result_count"] != null) {
          var paramBean = new Object();
          paramBean["paramType"] = "result_count";
          paramBean["paramValues"] = [eventDataMap["result_count"]];
          additionalData.push(paramBean);
        }
        var paramBean = new Object();
        var gaUserId = document.cookie
          .match(/_ga=(.+?);/)[1]
          .split(".")
          .slice(-2)
          .join(".");
        paramBean["paramType"] = "ga_tracking_id";
        paramBean["paramValues"] = [gaUserId];
        additionalData.push(paramBean);

        if (eventDataMap["Shortlist"] != null) {
          var sortCodeBean = new Object();
          sortCodeBean["paramType"] = "shortlisted";
          sortCodeBean["paramValues"] = [eventDataMap["Shortlist"]];
          additionalData.push(sortCodeBean);
        }

        sendEvent.additionalData = additionalData;
        sendEvent.propertyInfo = searchInfo;
        sendEvent.propPositions = eventDataMap.propPositions;
        sendEvent.sortingType = eventDataMap.sortingType;
        sendEvent.categ = eventDataMap.categ;
        sendEvent.userSearchId = eventDataMap.userSearchId;
        break;
      default:
    }
  };

  ntrack.sendRamTrackEvent = function (rawSourceData) {
    switch (rawSourceData.trackingEvent) {
      case ntrack.trackingEvent.Search:
        var tempKeyValueData = rawSourceData["rawUrl"].split("&");
        for (var i = 0; i < tempKeyValueData.length; i++) {
          var keyValuePair = tempKeyValueData[i].split("=");
          rawSourceData[keyValuePair[0]] = keyValuePair[1];
        }
        if (
          rawSourceData["propertyType"] == undefined ||
          rawSourceData["propertyType"] == null
        )
          return;
        var propertiesType = rawSourceData["propertyType"].split(",");
        var eventSeparationData = {
          Residential: [],
          Commercial: [],
          Others: [],
        };
        for (var propertyString in propertiesType) {
          var propArr = propertiesType[propertyString].split("_");
          for (var prop in propArr) {
            if (ntrack.util.Search.Residential.includes(propArr[prop])) {
              eventSeparationData.Residential.push(propArr[prop]);
            } else if (ntrack.util.Search.Commercial.includes(propArr[prop])) {
              eventSeparationData.Commercial.push(propArr[prop]);
            } else if (!isNaN(propArr[prop])) {
              eventSeparationData.Others.push(propArr[prop]);
            }
          }
        }
        // delete propertyType_new from rawSourceData
        Object.getOwnPropertyNames(eventSeparationData).forEach(function (
          name,
          dummyName,
          dummyArray
        ) {
          if (eventSeparationData[name].length != 0) {
            // now set property and send event
            rawSourceData["prop_type"] = eventSeparationData[name];
            rawSourceData["parent_prop_type"] = name;
            var newRawSourceData = JSON.parse(JSON.stringify(rawSourceData));
            ntrack.doSingleEventProcessing(newRawSourceData);
          }
        });
        break;
      case ntrack.trackingEvent.Contact:
        ntrack.doSingleEventProcessing(rawSourceData);
        break;
      case ntrack.trackingEvent.MailOpen:
        break;
      case ntrack.trackingEvent.MailSent:
        break;
      case ntrack.trackingEvent.DetailView:
        ntrack.doSingleEventProcessing(rawSourceData);
        break;
      case ntrack.trackingEvent.Requirement:
        break;
      case ntrack.trackingEvent.SrpCardView:
        ntrack.doSingleEventProcessing(rawSourceData);
        break;
      case ntrack.trackingEvent.SrpPropertyClick:
        ntrack.doSingleEventProcessing(rawSourceData);
        break;
      case ntrack.trackingEvent.Shortlist:
        ntrack.doSingleEventProcessing(rawSourceData);
        break;
      case ntrack.trackingEvent.SrpContactClick:
        ntrack.doSingleEventProcessing(rawSourceData);
        break;
      case ntrack.trackingEvent.BrowserNotification:
        ntrack.doSingleEventProcessing(rawSourceData);
        break;
      case ntrack.trackingEvent.PageView:
        ntrack.doSingleEventProcessing(rawSourceData);
        break;
      default:
    }
  };

  ntrack.doSingleEventProcessing = function (rawSourceData) {
    log("inRamTracking");
    ntrack.refactorData(rawSourceData);
    log(rawSourceData);
    var eventDataMap = {};
    // fillBasicEventSpecificData(rawSourceData,eventDataMap)

    ntrack.getDataMapFromThisEventSourceObject(rawSourceData, eventDataMap);
    log(eventDataMap);
    // prepare bar
    setTimeout(function () {
      ntrack.track(ntrack.getSendEventData(eventDataMap));
    }, 100);
  };

  ntrack.getSendEventData = function (eventDataMap) {
    // some global data will come here
    // if user is login then change the
    if (getCookie("userEmail")) {
      if (localStorage.getItem("knownTrack") == "true") {
        setCookie("userNTrackId", getCookie("userEmail"), userNTrackTTL);
      } else {
        // state Changed for first Time Known
        localStorage.setItem("knownTrack", "true");

        //ntrack.known = true;
      }
    }
    var eventMappingObject = ntrack.eventMappingObject.getEventMappingModel(
      eventDataMap.trackingEvent
    );
    var sendEvent = ntrack.ramTrackingEventModel.getTrackingEventModel(
      eventDataMap.trackingEvent
    );
    ntrack.util.createSchemaFrom(sendEvent);
    ntrack.modifyEventMappingObject(eventDataMap, eventMappingObject);
    // fill the data from eventDataMap -- > sendEvent based on this eventMappingObject
    // do poc for this orm
    ntrack.fillUserSystemInfo(sendEvent);
    ntrack.modifySendEventFromUrl(sendEvent, eventDataMap);
    ntrack.util.putAdditionalData(sendEvent, eventDataMap, eventMappingObject);
    ntrack.fillEventModelByEventData(
      sendEvent,
      eventMappingObject,
      eventDataMap
    );

    return sendEvent;
  };
  ntrack.updateInMobile = function () {
    var email = getCookie("userEmail") || getCookie("contactEmailCookie");
    setCookie("userNTrackId", email, userNTrackTTL);
    mobileUpdUrl += "#" + email;
    if ($("#mFrame1")) {
      $("#mFrame1").remove();
    }
    $("html").append(
      '<iframe style="display:none;" border="none" id="mFrame1" name="mFrame1" width="0px" height="0px" frameborder="1" src="' +
        mobileUpdUrl +
        '" scrolling="no"></iframe>'
    );
  };
  ntrack.refactorData = function (rawSourceData) {
    switch (rawSourceData.trackingEvent) {
      case ntrack.trackingEvent.Search:
        var arrayTypeProperties = [
          "facing",
          "postedSince",
          "inputListings",
          "saleType",
          "imageVideo",
          "amenities",
          "localityName",
          "bedrooms",
          "possessionYears",
          "transactionType",
          "furnished",
          "ageConstruction",
          "bathrooms",
          "locality",
          "psm",
          "possessionStatus",
        ];
        Object.getOwnPropertyNames(arrayTypeProperties).forEach(function (
          arrayTypePropertiesName,
          dummyData,
          dummyArray
        ) {
          rawSourceData[arrayTypeProperties[arrayTypePropertiesName]] =
            getIdsList(
              arrayTypeProperties[arrayTypePropertiesName],
              rawSourceData
            );
        });
        // Prefered Floor Data Adding Up.
        if (rawSourceData["floorNo"] != null) {
          if (rawSourceData["floorNo"] == "1") {
            rawSourceData["preferred_floor"] = [-1];
          } else if (rawSourceData["floorNo"] == "2") {
            rawSourceData["preferred_floor"] = [0];
          } else if (rawSourceData["floorNo"] == "3") {
            rawSourceData["preferred_floor"] = [1, 2, 3, 4];
          } else if (rawSourceData["floorNo"] == "4") {
            rawSourceData["preferred_floor"] = [5, 6, 7, 8];
          } else if (rawSourceData["floorNo"] == "5") {
            rawSourceData["preferred_floor"] = [9, 10, 11, 12];
          } else if (rawSourceData["floorNo"] == "6") {
            rawSourceData["preferred_floor"] = [13, 14, 15, 16];
          } else if (rawSourceData["floorNo"] == "7") {
            rawSourceData["preferred_floor"] = [16, 17, 18, 19, 20];
          }
        }
        // modify city for subarb search
        if (rawSourceData["city"] != null) {
          rawSourceData["city"] = rawSourceData["city"].split("-")[0];
        }

        if (rawSourceData["radius"]) {
          rawSourceData["searchLocDist"] =
            rawSourceData["radius"].split(",")[2];
          rawSourceData["searchLocDist"] =
            rawSourceData["searchLocDist"].split(".")[0];
          rawSourceData["landmarkLatLong"] = rawSourceData["radius"].split(",");
          var str =
            rawSourceData["landmarkLatLong"][0] +
            "," +
            rawSourceData["landmarkLatLong"][1];
          rawSourceData["radius"] = str;
        }
        /*if(rawSourceData['searchLocType']== "distance"){
    		
    		rawSourceData['landmarkLatLong'] = rawSourceData['radius'].split(','); 
    		var str = rawSourceData['landmarkLatLong'][0] +","+ rawSourceData['landmarkLatLong'][1];
    		rawSourceData['radius'] = str;
    	}*/

        /*
		locality_type:"Others",
		*/
        //rawSourceData["propertyType_new"] = rawSourceData["propertyType_new"].split('_');
        if (rawSourceData["psmid"] != null) {
          rawSourceData["psm"] = rawSourceData["psmid"].split(",");
          rawSourceData["preferred_psm"] = rawSourceData["psmid"].split(",");
        }

        if (rawSourceData["discountsOffers"]) {
          rawSourceData["deals_offers_interests"] = true;
        }
        if (rawSourceData["featured"] == "y") {
          rawSourceData["featured"] = true;
        }
        if (rawSourceData["criAgents"] == "y") {
          rawSourceData["criAgents"] = true;
        }
        if (rawSourceData["verified"] == "Y") {
          rawSourceData["verified"] = true;
        }
        if (rawSourceData["category"] == "S") {
          rawSourceData["category"] = "Buy";
        } else if (rawSourceData["category"] == "R") {
          rawSourceData["category"] = "Rent";
        } else if (
          rawSourceData["category"] != "Rent" &&
          rawSourceData["category"] != "Buy"
        ) {
          rawSourceData["category"] = "Buy";
        }
        for (var imgIndex in rawSourceData["imageVideo"]) {
          if (rawSourceData["imageVideo"][imgIndex] == "1") {
            rawSourceData["with_photo"] = true;
          } else if (rawSourceData["imageVideo"][imgIndex] == "2") {
            rawSourceData["with_video"] = true;
          }
        }
        // done
        rawSourceData["LocalityType"] = "Others";
        if (rawSourceData["projectsType"]) {
          var projTypes = rawSourceData["projectsType"];
          for (var projType in projTypes.split(",")) {
            if (rawSourceData["projectsType"][projType] == "0") {
              rawSourceData["projectsType"] = "Budget";
            } else if (rawSourceData["projectsType"][projType] == "1") {
              rawSourceData["projectsType"] = "Premium";
            } else if (rawSourceData["projectsType"][projType] == "2") {
              rawSourceData["projectsType"] = "Luxory";
            } else {
              rawSourceData["projectsType"] = "Others";
            }
          }
        } else {
          rawSourceData["projectsType"] = "Others";
        }
        // setting locality for project
        if (rawSourceData["projectsIn"]) {
          var projsIn = rawSourceData["projectsIn"];
          for (var projType in projsIn.split(",")) {
            if (rawSourceData["projectsIn"][projType] == "0") {
              rawSourceData["LocalityType"] = "Upcoming";
            } else if (rawSourceData["projectsIn"][projType] == "1") {
              rawSourceData["LocalityType"] = "Developed";
            } else if (rawSourceData["projectsIn"][projType] == "2") {
              rawSourceData["LocalityType"] = "Premium";
            } else {
              rawSourceData["LocalityType"] = "Others";
            }
          }
        } else if (rawSourceData["projectsIn"]) {
          rawSourceData["LocalityType"] = "Others";
        }

        // setting locality for property
        if (rawSourceData["propertiesIn"]) {
          for (var projType in rawSourceData["propertiesIn"].split(",")) {
            if (rawSourceData["propertiesIn"][projType] == "0") {
              rawSourceData["LocalityType"] = "Upcoming";
            } else if (rawSourceData["propertiesIn"][projType] == "1") {
              rawSourceData["LocalityType"] = "Developed";
            } else if (rawSourceData["propertiesIn"][projType] == "2") {
              rawSourceData["LocalityType"] = "Premium";
            } else {
              rawSourceData["LocalityType"] = "Others";
            }
          }
        } else if (rawSourceData["propertiesIn"]) {
          rawSourceData["LocalityType"] = "Others";
        }

        if (rawSourceData["campaignCode"]) {
          // change these campCode in Application
          var campCodeInRam = ["Paid", "Internal", "Organic", "Others"];
          if (campCodeInRam.indexOf(rawSourceData["campaignCode"]) == -1) {
            rawSourceData["campaignCode"] = "Others";
          }
        } else {
          rawSourceData["campaignCode"] = "Others";
        }
        /* if(rawSourceData['propertiesIn']){
        	for(var projType in rawSourceData['propertiesIn'].split(",")){
                if(rawSourceData['propertiesIn'][projType] == "0"){
               	 rawSourceData['propertiesIn'] = "Budget";
                }else if(rawSourceData['propertiesIn'][projType] == "1"){
               	 rawSourceData['propertiesIn'] = "Premium";
                }else if(rawSourceData['propertiesIn'][projType] == "2"){
               	 rawSourceData['propertiesIn'] = "Luxory";
                }else {
               	 rawSourceData['propertiesIn'] = "Others";
                }
            }
        }else{
        	rawSourceData['propertiesIn'] = "Others";
        }*/

        //rawSourceData['AlertType'] = "AGENT";
        if (rawSourceData["bedrooms"]) {
          if (typeof rawSourceData["bedrooms"] == "string") {
            // convert to array
            rawSourceData["bedrooms"] = [rawSourceData["bedrooms"]];
          }
          // particular handling for the error
          var tempArray = [];
          for (var i = 0; i < rawSourceData["bedrooms"].length; i++) {
            if (rawSourceData["bedrooms"][i].includes("-")) {
              tempArray = tempArray.concat(
                rawSourceData["bedrooms"][i].split("-")
              );
            } else {
              tempArray = tempArray.concat(rawSourceData["bedrooms"][i]);
            }
          }
          rawSourceData["bedrooms"] = tempArray;
        }
        // if no mapping then put additional data

        break;
      case ntrack.trackingEvent.SrpCardView:
      case ntrack.trackingEvent.SrpPropertyClick:
      case ntrack.trackingEvent.Shortlist:
      case ntrack.trackingEvent.SrpContactClick:
        if (rawSourceData["campaignCode"]) {
          // change these campCode in Application
          var campCodeInRam = ["Paid", "Internal", "Organic", "Others"];
          if (campCodeInRam.indexOf(rawSourceData["campaignCode"]) == -1) {
            rawSourceData["campaignCode"] = "Others";
          }
        } else {
          rawSourceData["campaignCode"] = "Others";
        }

        rawSourceData["userSearchId"] = getCookie("uniqUserSearchId");

        break;

      case ntrack.trackingEvent.Contact:
        var propertyIds = rawSourceData.propertyIdStringArray;
        rawSourceData.propertyIdStringArray = [];
        for (var prop in propertyIds) {
          rawSourceData.propertyIdStringArray.push(
            giveMeArray(propertyIds[prop])[0]
          );
        }
        rawSourceData.actualOwnerId = giveMeArray(rawSourceData.actualOwnerId);
        rawSourceData.interested = [];
        if (rawSourceData.homeLoanCheckVal2) {
          rawSourceData.interested.push("Site Visit");
        }
        if (rawSourceData.homeLoanCheckVal3) {
          rawSourceData.interested.push("Purchase");
        }
        if (rawSourceData.loanLead) {
          rawSourceData.homeLoan = true;
        }
        if (rawSourceData["campaignCode"]) {
          // change these campCode in Application
          var campCodeInRam = ["Paid", "Internal", "Organic", "Others"];
          if (campCodeInRam.indexOf(rawSourceData["campaignCode"]) == -1) {
            rawSourceData["campaignCode"] = "Others";
          }
        } else {
          rawSourceData["campaignCode"] = "Others";
        }
        // console.log(rawSourceData);
        break;
      case ntrack.trackingEvent.MailOpen:
        break;
      case ntrack.trackingEvent.MailSent:
        break;
      case ntrack.trackingEvent.DetailView:
        if (rawSourceData["comScorePageUrl"]) {
          // extract information for projectDetailView
          //project_search_detail_5070137_C
          rawSourceData.id = rawSourceData["comScorePageUrl"].slice(
            "project_search_detail_".length,
            rawSourceData["comScorePageUrl"].length - 2
          );
          rawSourceData.EventActivityType = ntrack.EventActivityType.PSM;
        }
        if (rawSourceData["campaignCode"]) {
          // change these campCode in Application
          var campCodeInRam = ["Paid", "Internal", "Organic", "Others"];
          if (campCodeInRam.indexOf(rawSourceData["campaignCode"]) == -1) {
            rawSourceData["campaignCode"] = "Others";
          }
        } else {
          rawSourceData["campaignCode"] = "Others";
        }
        break;
      case ntrack.trackingEvent.Requirement:
        break;
      case ntrack.trackingEvent.PageView:
        break;
      default:
        log("unknown event is been hit");
    }
    // set EventActivityType
    ntrack.setEventActivityType(rawSourceData);
  };

  ntrack.track = function (eventObj) {
    eventQueue.push(eventObj);
    //alert(JSON.stringify(eventObj));
    // wait in case navigating to reduce duplicate events
    setTimeout(function () {
      trackEvent(eventObj);
    }, 1000);
  };

  //anonymousUserTrackId,currentSessionId,activeSessionId;
  userNTrackId = getCookie("userNTrackId");
  currentBrowseSessionId = getCookie("currentBrowseSessionId");

  if (userNTrackId) {
    // we are tracking it already do nothing
    var noeuCookie = getCookie("NOEU");
    if (
      typeof noeuCookie == "undefined" ||
      noeuCookie == null ||
      noeuCookie == ""
    ) {
      setCookie("NOEU", "old", userNTrackTTL);
    }
    if (typeof Storage !== "undefined") {
      if (sessionStorage.currentBrowseSessionId) {
        // do nothing
        //alert(sessionStorage.currentBrowseSessionId);
      } else {
        sessionStorage.currentBrowseSessionId = generateId();
        //alert(sessionStorage.currentBrowseSessionId);
      }
      // document.getElementById("result").innerHTML = "You have clicked the button " + sessionStorage.clickcount + " time(s) in this session.";
    } else {
      //document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
      log("your browser does not support session Storage");
    }

    log("Active visit");
    setReady();
  } else {
    // not tracking
    // start tracking it
    if (!userNTrackId) {
      userNTrackId = localStorage.getItem("userUniqueNTrackId");
      //userNTrackId = generateId();
      setCookie("userNTrackId", userNTrackId, userNTrackTTL);
      var noeuCookie = getCookie("NOEU");
      if (
        typeof noeuCookie == "undefined" ||
        noeuCookie == null ||
        noeuCookie == ""
      ) {
        setCookie("NOEU", "new", userNTrackTTL);
      }
      localStorage.setItem("knownTrack", "false");
      if (typeof Storage !== "undefined") {
        if (sessionStorage.currentBrowseSessionId) {
        } else {
          sessionStorage.currentBrowseSessionId = generateId();
        }
      } else {
        log("your browser does not support session Storage");
      }
    }

    /*
	if (!currentBrowseSessionId) {
		currentBrowseSessionId = generateId();
	     setCookie("currentBrowseSessionId", currentBrowseSessionId, currentBrowseSessionTTL);
	}*/
    // may be take this data directily from the cookie
    /*if(!activeSessionId){
		// server side JSESSIONID and timeTolive
		setCookie("activeSessionId", getCookie("JSESSIONID"), UserNTrackTTL);
	}*/
    // make sure cookies are enabled
    if (getCookie("UserNTrackId")) {
      log("Visit started");
      var data = {
        visit_token: currentBrowseSessionId,
        visitor_token: userNTrackId,
        platform: ntrack.platform || "Web",
        landing_page: window.location.href,
        screen_width: window.screen.width,
        screen_height: window.screen.height,
      };

      // referrer
      if (document.referrer.length > 0) {
        data.referrer = document.referrer;
      }

      log(data);

      $.post(visitsUrl, data, setReady, "json");
    } else {
      log("Cookies disabled");
      setReady();
    }
  }

  ntrack.wapNotificationEvent = function (endPoint) {
    var webpush = endPoint;
    var webpushCookieRead = getCookie("webpushCookieRead");
    if (webpush != null && webpushCookieRead == null) {
      setCookie("webpushCookieRead", "true", 90 * 24 * 60);
      setCookie("m_web_push", endPoint, 90 * 24 * 60);
      try {
        var rawDataObject = ntrack.getRawDataObject();
        rawDataObject.trackingEvent = ntrack.trackingEvent.BrowserNotification;
        rawDataObject.Source = ntrack.Source.Web_Mobile;
        rawDataObject.rid = webpush;
        rawDataObject.EventActivityType = ntrack.EventActivityType.Others;
        ntrack.sendRamTrackEvent(rawDataObject);
      } catch (e) {
        console.log(e);
      }
    }
  };

  //push events from queue
  try {
    eventQueue = JSON.parse(getCookie("ntrack_events") || "[]");
  } catch (e) {
    // do nothing
  }

  for (var i = 0; i < eventQueue.length; i++) {
    trackEvent(eventQueue[i]);
  }
} catch (err) {
  console.log(err);
}

/************* Implicit Tracking ************/
function implicitTrackingUser() {
  try {
    var uemail = getCookie("userEmail") || getCookie("contactEmailCookie");
    if (dataLayer && uemail != null) {
      dataLayer.push({ cd72: uemail });
      dataLayer.push({ ga_category: "contactsuccess" });
      dataLayer.push({ event: "property_contact" });
    }
  } catch (e) {
    console.log("error in implicitTrackingUser");
  }
}
function implicitTrackingActivity(activity) {
  try {
    var uemail = getCookie("userEmail") || getCookie("contactEmailCookie");
    if (dataLayer && uemail != null) {
      var act = activity.replaceAll(" ", "_");
      dataLayer.push({ cd72: uemail });
      dataLayer.push({ cd73: activity });
      dataLayer.push({ ga_category: act });
      dataLayer.push({ event: act });
    }
  } catch (e) {
    console.log("error in implicitTrackingActivity");
  }
}
function trackEventData(EventActivity) {
  try {
    var rawDataObject = ntrack.getRawDataObject();
    rawDataObject.EventActivityType = EventActivity[0];
    rawDataObject.pageComponent = EventActivity[1];
    rawDataObject.Source = EventActivity[2];
    rawDataObject["rawUrl"] = EventActivity[3];
    rawDataObject.trackingEvent = ntrack.trackingEvent.PageView;
    rawDataObject.pageUrl = window.location.href;
    rawDataObject.pageTitle = document.title;
    ntrack.sendRamTrackEvent(rawDataObject);
  } catch (e) {
    console.error(e);
  }
}
