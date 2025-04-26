/*! For license information please see propertysrp-main-chunk-main~616c332c.c38d7cc048961a145238.js.LICENSE.txt */
!(function (e) {
  function t(t) {
    for (
      var r, c, i = t[0], l = t[1], s = t[2], p = 0, d = [];
      p < i.length;
      p++
    )
      (c = i[p]),
        Object.prototype.hasOwnProperty.call(n, c) && n[c] && d.push(n[c][0]),
        (n[c] = 0);
    for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    for (u && u(t); d.length; ) d.shift()();
    return o.push.apply(o, s || []), a();
  }
  function a() {
    for (var e, t = 0; t < o.length; t++) {
      for (var a = o[t], r = !0, i = 1; i < a.length; i++) {
        var l = a[i];
        0 !== n[l] && (r = !1);
      }
      r && (o.splice(t--, 1), (e = c((c.s = a[0]))));
    }
    return e;
  }
  var r = {},
    n = { 4: 0 },
    o = [];
  function c(t) {
    var a;
    return (
      r[t] ||
      ((a = r[t] = { i: t, l: !1, exports: {} }),
      e[t].call(a.exports, a, a.exports, c),
      (a.l = !0),
      a)
    ).exports;
  }
  (c.e = function (e) {
    var t,
      a,
      r,
      o,
      i,
      l = [],
      s = n[e];
    return (
      0 !== s &&
        (s
          ? l.push(s[2])
          : ((i = new Promise(function (t, a) {
              s = n[e] = [t, a];
            })),
            l.push((s[2] = i)),
            ((t = document.createElement("script")).charset = "utf-8"),
            (t.timeout = 120),
            c.nc && t.setAttribute("nonce", c.nc),
            (t.src =
              c.p +
              "propertysrpchunk-" +
              ({}[(i = e)] || i) +
              "." +
              { 13: "5ecf709e1523104b6b1f", 14: "580b83ce9b8bfd1ed0e3" }[i] +
              ".js"),
            (a = new Error()),
            (r = function (r) {
              (t.onerror = t.onload = null), clearTimeout(o);
              var c,
                i = n[e];
              0 !== i &&
                (i &&
                  ((c = r && ("load" === r.type ? "missing" : r.type)),
                  (r = r && r.target && r.target.src),
                  (a.message =
                    "Loading chunk " + e + " failed.\n(" + c + ": " + r + ")"),
                  (a.name = "ChunkLoadError"),
                  (a.type = c),
                  (a.request = r),
                  i[1](a)),
                (n[e] = void 0));
            }),
            (o = setTimeout(function () {
              r({ type: "timeout", target: t });
            }, 12e4)),
            (t.onerror = t.onload = r),
            document.head.appendChild(t))),
      Promise.all(l)
    );
  }),
    (c.m = e),
    (c.c = r),
    (c.d = function (e, t, a) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (c.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function (e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (c.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          c.d(
            a,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return a;
    }),
    (c.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return c.d(t, "a", t), t;
    }),
    (c.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = "https://cdn.staticmb.com/srpstatic/client/"),
    (c.oe = function (e) {
      throw (console.error(e), e);
    });
  var i = (l = window.webpackJsonp = window.webpackJsonp || []).push.bind(l);
  l.push = t;
  for (var l = l.slice(), s = 0; s < l.length; s++) t(l[s]);
  var u = i;
  o.push([1842, 11, 12, 6, 1, 0, 10, 8, 7, 5, 9, 3, 2]), a();
})({
  114: function (e, t, a) {
    "use strict";
    a.d(t, "a", function () {
      return o;
    }),
      a.d(t, "b", function () {
        return c;
      }),
      a.d(t, "c", function () {
        return i;
      }),
      a.d(t, "d", function () {
        return l;
      });
    var r = a(14),
      n = a(25),
      o = function () {
        return function (e) {
          r.a.get("/checkForDropOff").then(function (t) {
            e({ type: "primeDropOff", payload: t.data });
          });
        };
      },
      c = function (e) {
        return function (t) {
          t({ type: "viewPrimePopUp", payload: e });
        };
      },
      i = function () {
        return function (e) {
          e({ type: "hideNonPrimeBanners", payload: Object(n.a)() });
        };
      },
      l = function (e) {
        return function (t) {
          t({ type: "setPrimeFreeTrial", payload: e });
        };
      };
  },
  13: function (e, t, a) {
    "use strict";
    a.d(t, "a", function () {
      return d;
    }),
      a.d(t, "d", function () {
        return m;
      }),
      a.d(t, "b", function () {
        return y;
      }),
      a.d(t, "c", function () {
        return v;
      }),
      a(0);
    var r = a(7),
      n = a(9),
      o = (a(2), a(14), a(3)),
      c = a(6),
      i = a(74),
      l = a(306);
    function s(e) {
      return (s =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function u(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function p(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? u(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== s(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== s((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === s(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : u(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    var d = function (e, t, a, r) {
        return function (n, c) {
          var i, l, s;
          e.stopPropagation(),
            "Share Feedback" == t.buttonType
              ? (n(
                  Object(o.e)(
                    p(
                      {
                        event: "event_tracking",
                        eventName: "revamp_srp_dynamic_listing",
                        nonInteraction: !1,
                        eventCategory: "revamp srp - report listing",
                        eventAction: "0 launch",
                        eventLabel: "launch",
                        eventValue: "",
                      },
                      r
                    )
                  )
                ),
                n(b(a.id, r)))
              : ((i = (c = c()).contactData),
                (l = c.userInfoData),
                (s = c.searchBean),
                (c = c.shortlists),
                a &&
                  "N" === a.isPaidUser &&
                  "I" === a.pp &&
                  (t = p(p({}, t), {}, { isFreeOwnerProperty: "Y" })),
                (t = p(
                  p({}, t),
                  {},
                  {
                    category: s.category,
                    search: s.search,
                    semTrackingEnquire: s.semTrackingEnquire,
                  }
                )),
                n(v(i, a, l, t, c)));
        };
      },
      m = function (e) {
        return function (t, a) {
          e.stopPropagation();
          var o = (a = a().userInfoData).userUniqToken,
            i = a.hmacCode;
          try {
            var l = c.a.readCookie("userName"),
              s = c.a.readCookie("userEmail"),
              u = c.a.readCookie("userMobile"),
              d = c.a.readCookie("userMobileCountry"),
              m = Object(n.k)(c.a.readCookie("userType"))
                ? "I"
                : c.a.readCookie("userType");
            Object(n.k)(o) &&
              !Object(n.k)(c.a.readCookie("userUniqToken")) &&
              (o = c.a.readCookie("userUniqToken")),
              (i =
                !Object(n.k)(i) ||
                Object(n.k)(u) ||
                Object(n.k)(localStorage.getItem(u))
                  ? c.a.readCookie("hmacCode")
                  : localStorage.getItem(u)),
              !(
                Object(n.k)(a.userName) &&
                Object(n.k)(a.userMobile) &&
                Object(n.k)(a.userEmail)
              ) ||
              Object(n.k)(l) ||
              Object(n.k)(s) ||
              Object(n.k)(u) ||
              Object(n.k)(d)
                ? Object(n.k)(a.userEmail) ||
                  (!a.userEmail.includes("timesgroup") &&
                    !a.userEmail.includes("indiatimes")) ||
                  Object(n.k)(s) ||
                  Object(n.k)(c.a.readCookie("userUniqToken"))
                  ? Object(n.k)(a.userName) ||
                    Object(n.k)(a.userMobile) ||
                    Object(n.k)(a.userEmail) ||
                    !Object(n.k)(a.userUniqToken) ||
                    Object(n.k)(o) ||
                    t({
                      type: r.b,
                      payload: p(
                        p({}, a),
                        {},
                        { userConsent: "Y", userUniqToken: o }
                      ),
                    })
                  : ((o = c.a.readCookie("userUniqToken")),
                    t({
                      type: r.b,
                      payload: p(
                        p({}, a),
                        {},
                        { userEmail: s, userUniqToken: o }
                      ),
                    }))
                : Object(n.k)(o) || Object(n.k)(i)
                ? t({
                    type: r.b,
                    payload: {
                      userName: l,
                      userEmail: s,
                      userIsdCode: d,
                      firstName: l,
                      userMobile: u,
                      selectIsd: d,
                    },
                  })
                : t({
                    type: r.b,
                    payload: {
                      userName: l,
                      userEmail: s,
                      userIsdCode: d,
                      firstName: l,
                      userConsent: "Y",
                      userMobile: u,
                      whatsAppConsent: !0,
                      optIn: "Y",
                      userUniqToken: o,
                      hmacCode: i,
                      userType: m,
                      selectIsd: d,
                    },
                  });
          } catch (t) {
            console.error(t);
          }
        };
      },
      y = function (e, t, a, r, n) {
        return function (o, c) {
          e.stopPropagation();
          var i = (c = c()).contactData,
            l = c.userInfoData,
            s = c.shortlists;
          c = c.searchBean;
          (t = p(
            p({}, t),
            {},
            {
              buttonType: t.buttonType,
              price: void 0 !== r && null != r ? r : "",
              propertyType: void 0 !== n && null != n ? n : "",
            }
          )),
            (t = p(
              p({}, t),
              {},
              {
                category: c.category,
                search: c.search,
                semTrackingEnquire: c.semTrackingEnquire,
              }
            )),
            o(v(i, a, l, t, s));
        };
      },
      b = function (e, t) {
        return function (a) {
          a({
            type: "OPEN_FEEDBACK",
            payload: { propertyId: e, showFeedbackPopup: !0, propertyGaObj: t },
          });
        };
      },
      v = function e(t, a, o, s, u) {
        return function (d, m) {
          var y,
            b =
              /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
            v =
              navigator.userAgent.match(/safari/i) &&
              !navigator.userAgent.match(/CriOS/i),
            _ = "r" == a.cg || "R" == a.cg ? "R" : "S",
            O = (m = m()).clientBean,
            D = m.form,
            j = m.searchBean,
            S =
              ((m = m.searchAdditionalDataBean),
              Object(n.k)(s.propertyId)
                ? ""
                : s.propertyId + "|" + s.contactType),
            P =
              void 0 !== o &&
              void 0 !== o.userUniqToken &&
              null != o.userUniqToken
                ? o.userUniqToken
                : "",
            N =
              (void 0 !== o &&
                void 0 !== o.hmacCode &&
                null != o.hmacCode &&
                o.hmacCode,
              !Object(n.k)(a.isVis) &&
                "Z".toUpperCase().includes(a.isVis.toUpperCase()) &&
                ((N =
                  !Object(n.k)(a.psmUspImgMob) &&
                  0 < a.psmUspImgMob.split(",").length
                    ? "Y"
                    : "N"),
                (s = p(p({}, s), {}, { isUspImage: N }))),
              f(s, u)),
            w = Object(n.k)(s.campaignCode) ? "propertySearch" : s.campaignCode,
            E = g(s),
            T = h(s, a),
            k = c.a.readCookie("userDropCount"),
            C =
              ((k = "search_wap" === s.requestInterface || 0 < parseInt(k)),
              a.ctaDetailBean &&
                a.ctaDetailBean.ctaid &&
                "101" != a.ctaDetailBean.ctaid &&
                (T =
                  s.buttonType == a.ctaDetailBean.cta2
                    ? ((E = a.ctaDetailBean.formheader),
                      a.ctaDetailBean.formsubheader)
                    : ((E = a.ctaDetailBean.formheadercta1),
                      a.ctaDetailBean.formsubheadercta1)),
              ""),
            A = c.a.readCookie("virtualNumberData"),
            I =
              (c.a.readCookie("userDropCount"),
              Object(n.k)(a) ||
                Object(n.k)(a.isPaidUser) ||
                "N" !== a.isPaidUser ||
                Object(n.k)(a.pp) ||
                "I" !== a.pp ||
                (s = p(p({}, s), {}, { isFreeOwnerProperty: "Y" })),
              Object(n.k)(a) ||
                (Object(n.k)(a.encId) &&
                  Object(n.k)(a.enc_Id) &&
                  Object(n.k)(a.encPropId)) ||
                (C =
                  Object(n.k)(a.encPropId) ||
                  Object(n.k)(s.contact_interface) ||
                  ("nri_top_project_contact" !== s.contact_interface &&
                    "top_project_contact" !== s.contact_interface)
                    ? Object(n.k)(a.enc_Id)
                      ? a.encId
                      : a.enc_Id
                    : a.encPropId),
              {});
          (I =
            Object(n.k)(s.contact_interface) ||
            "itarget_contact" !== s.contact_interface
              ? Object(n.k)(s.contact_interface) ||
                "lead_gen_banner_contact" !== s.contact_interface
                ? (!Object(n.k)(s.contact_interface) &&
                    "contact_similar_props_thank_you" ===
                      s.contact_interface) ||
                  (!Object(n.k)(s.contact_interface) &&
                    "contact_builder_thank_you" === s.contact_interface)
                  ? {
                      payload: I,
                      itargetBannerData: "",
                      contact_interface: s.contact_interface,
                    }
                  : (Object(n.k)(s.contact_interface) ||
                      ("top_project_contact" !== s.contact_interface &&
                        "nri_top_project_contact" !== s.contact_interface &&
                        "society_expert_contact" !== s.contact_interface &&
                        "commercial_guru_contact" !== s.contact_interface &&
                        "property_card_contact" !== s.contact_interface &&
                        "similar_props_card_contact" !== s.contact_interface &&
                        "alternate_discovery_contact" !== s.contact_interface &&
                        "legal_card_contact" !== s.contact_interface &&
                        "luxury_card_contact" !== s.contact_interface &&
                        s.contact_interface),
                    p(
                      p({}, I),
                      {},
                      {
                        itargetBannerData: "",
                        contact_interface: s.contact_interface,
                      }
                    ))
                : {
                    payload: I,
                    itargetBannerData: p(
                      p({}, a),
                      {},
                      {
                        image: a.img,
                        projectName: a.psmName,
                        localityName: a.location,
                        bedroomInfo: a.bhkType,
                        displayPrice: a.price,
                        priceSuffix: "",
                      }
                    ),
                    contact_interface: s.contact_interface,
                  }
              : {
                  payload: I,
                  itargetBannerData: a,
                  contact_interface: s.contact_interface,
                }),
            (I = p(
              p({}, I),
              {},
              {
                category: s.category,
                search: s.search,
                semTrackingEnquire: s.semTrackingEnquire,
              }
            )),
            "Unlock with Prime" === s.buttonType || "MB Prime" === s.buttonType
              ? ((y =
                  "https://www.magicbricks.com/mbprime/primePackages?source=MBPrime_SRP_Item-defaultTemplate&category=" +
                  a.cg +
                  "&ptype=" +
                  a.ty +
                  "&cityCnd=" +
                  a.ct),
                window.open(y, "_blank").focus())
              : (void 0 !== o && "" !== P) ||
                "search_wap" !== s.requestInterface ||
                !k ||
                (null != (y = s) && y.trueCallerAuth) ||
                (1 != (null == O ? void 0 : O.virtualNumberDataAvailable) &&
                  null == A) ||
                ("Call Agent" !== s.buttonType &&
                  "Call Builder" !== s.buttonType &&
                  "Call Owner" !== s.buttonType &&
                  "Call Developer" !== s.buttonType &&
                  "Call MB Expert" !== s.buttonType)
              ? !Object(n.k)(s.truecallerStatus) ||
                (void 0 !== o && "" !== P) ||
                "search_wap" !== s.requestInterface ||
                !k ||
                (null != (y = s) && y.trueCallerAuth) ||
                (1 != (null == O ? void 0 : O.virtualNumberDataAvailable) &&
                  null == A) ||
                ("Get Phone No." !== s.buttonType &&
                  "Request Photo" !== s.buttonType &&
                  "Send Enquiry" !== s.buttonType &&
                  "Enquire Now" !== s.buttonType &&
                  "Request Callback" !== s.buttonType)
                ? !Object(n.k)(s.truecallerStatus) ||
                  (null != s.trueCallerAuth && 1 == s.trueCallerAuth) ||
                  "search_wap" !== s.requestInterface ||
                  (void 0 !== o && "" !== P) ||
                  (b && v) ||
                  ("Get Phone No." !== s.buttonType &&
                    "Request Photo" !== s.buttonType &&
                    "Send Enquiry" !== s.buttonType &&
                    "Enquire Now" !== s.buttonType &&
                    "Request Callback" !== s.buttonType &&
                    "Whatsapp icon" !== s.buttonType)
                  ? Object(n.k)(s.truecallerStatus) &&
                    void 0 !== o &&
                    "" !== P &&
                    "lead_gen_banner_contact" !== s.contact_interface
                    ? (d({
                        type: r.d,
                        payload: p(
                          {
                            userActionType: r.d,
                            isUserAction: !0,
                            isAutoContact: !0,
                            formName: s.formName,
                            price: s.price,
                            buttonType: s.buttonType,
                            detailViewCt: a.detailViewCt || 0,
                            ctaButtonData: a.ctaDetailBean
                              ? s.buttonType == a.ctaDetailBean.cta2
                                ? a.ctaDetailBean.contactbutton
                                : a.ctaDetailBean.contactbuttoncta1
                              : "",
                            isCtaData:
                              a.ctaDetailBean && "101" != a.ctaDetailBean.ctaid
                                ? "Y"
                                : "",
                            header_icon: a.ctaDetailBean
                              ? s.buttonType == a.ctaDetailBean.cta2
                                ? a.ctaDetailBean.header_icon
                                : a.ctaDetailBean.header_iconcta1
                              : "",
                            propertyType: s.propertyType,
                            gaObject:
                              null != s.gaObject && "" !== s.gaObject
                                ? s.gaObject
                                : "",
                            contactFormHeadingText: E,
                            contactFormHeadingDescText: T,
                            advertiserDetailName: a.oname,
                            pType:
                              null != s.pType && "" != s.pType ? s.pType : "",
                            advertiserDetailMaskedMobile: a.maskedMobileNumber,
                            contactType: s.contactType,
                            searchType: s.searchType,
                            encID: C,
                            userType: a.userType,
                            isFreeOwnerProperty: s.isFreeOwnerProperty,
                            pdpUrl: a.url,
                            cityName: a.ctName,
                            requestBody: p(
                              {
                                propertyId: S,
                                advertisers: [
                                  s.advertisers + "|" + s.contactType,
                                ],
                                requestInterface: s.requestInterface,
                                searchType: s.searchType,
                                ctaindex:
                                  a.ctaDetailBean &&
                                  s.buttonType == a.ctaDetailBean.cta2
                                    ? 1
                                    : 0,
                                sbmcndsustatus:
                                  a && a.ctaDetailBean && a.ctaDetailBean.ctaid
                                    ? 123
                                    : "",
                                ctaruleid:
                                  a && a.ctaDetailBean && a.ctaDetailBean.ctaid
                                    ? a.ctaDetailBean.ctaid
                                    : "",
                                searchCityCode: s.searchCity,
                                searchLocalityCodes: s.searchLocality,
                                contact_src: s.contact_src,
                                campaignCode: w,
                                contactTrackCookie:
                                  m &&
                                  null != m.isSeoSearch &&
                                  1 == m.isSeoSearch
                                    ? "r" == a.cg || "R" == a.cg
                                      ? N + "_pppfr"
                                      : N + "_pppfs"
                                    : N,
                                locality: a.lmtDName,
                                city: a.ctName,
                                propTypeD: a.propTypeD,
                                formatPrice: a.priceD,
                                bedroomD: a.bedroomD,
                                localityCode: a.lt,
                                latitude: a.pmtLat,
                                longitude: a.pmtLong,
                                brand: a.brandName,
                                priceCW: a.price,
                                pdpUrl: a.url,
                              },
                              { isCustomSource: "N", customSource: "" }
                            ),
                          },
                          I
                        ),
                      }),
                      d({
                        type: "buyerTaggingFlow",
                        payload: {
                          psmid: a.psmid,
                          prjname: a.prjname,
                          bedroomD: a.bedroomD,
                          bd: a.bd,
                          lmtDName: a.lmtDName,
                          ctName: a.ctName,
                          propertyType: a.ty,
                          category: "r" == a.cg || "R" == a.cg ? "R" : "S",
                          contactId: a.id,
                          price: a.price,
                          locId: a.lt,
                          cityId: a.ct,
                          userType: a.userType,
                          isVis: a.isVis,
                          isPaidUser: a.isPaidUser,
                          propTypeD: a.propTypeD,
                        },
                      }),
                      (document.getElementById("pageLoader").style.display =
                        "block"),
                      console.error("pageLoader after auto contact called"))
                    : (void 0 !== o &&
                        "" !== P &&
                        "Get Phone No." !== s.buttonType &&
                        "Request Photo" !== s.buttonType &&
                        "lead_gen_banner_contact" != s.contact_interface) ||
                      ((k = { isCustomSource: "X", customSource: "" }),
                      "search_wap" !== s.requestInterface ||
                        "S" != _ ||
                        Object(n.k)(s.trueCallerAuth) ||
                        1 != s.trueCallerAuth ||
                        (k = {
                          isCustomSource: "Y",
                          customSource: "whatsapp_layer_wap_SRP",
                        }),
                      d({
                        type: r.f,
                        payload: p(
                          p({}, t),
                          {},
                          {
                            userActionType: r.f,
                            isUserAction: !0,
                            formScreen: r.i,
                            formName: s.formName,
                            price: s.price,
                            buttonType: s.buttonType,
                            detailViewCt: a.detailViewCt || 0,
                            ctaButtonData: a.ctaDetailBean
                              ? s.buttonType == a.ctaDetailBean.cta2
                                ? a.ctaDetailBean.contactbutton
                                : a.ctaDetailBean.contactbuttoncta1
                              : "",
                            isCtaData:
                              a.ctaDetailBean && "101" != a.ctaDetailBean.ctaid
                                ? "Y"
                                : "",
                            header_icon: a.ctaDetailBean
                              ? s.buttonType == a.ctaDetailBean.cta2
                                ? a.ctaDetailBean.header_icon
                                : a.ctaDetailBean.header_iconcta1
                              : "",
                            propertyType: s.propertyType,
                            gaObject:
                              null != s.gaObject && "" !== s.gaObject
                                ? s.gaObject
                                : "",
                            contactFormHeadingText: E,
                            contactFormHeadingDescText: T,
                            advertiserDetailName: a.oname,
                            pType:
                              null != s.pType && "" != s.pType ? s.pType : "",
                            advertiserDetailMaskedMobile: a.maskedMobileNumber,
                            sbmcndsustatus:
                              a && a.ctaDetailBean && a.ctaDetailBean.cta2
                                ? 123
                                : "",
                            contactType: s.contactType,
                            searchType: s.searchType,
                            encID: C,
                            userType: a.userType,
                            isFreeOwnerProperty: s.isFreeOwnerProperty,
                            pdpUrl: a.url,
                            cityName: a.ctName,
                            virtualContactData: { ga: s.vnGa },
                            requestBody: p(
                              p(p({}, t.requestBody), k),
                              {},
                              {
                                propertyId: S,
                                advertisers: [
                                  s.advertisers + "|" + s.contactType,
                                ],
                                requestInterface: s.requestInterface,
                                searchType: s.searchType,
                                ctaindex:
                                  a.ctaDetailBean &&
                                  s.buttonType == a.ctaDetailBean.cta2
                                    ? 1
                                    : 0,
                                sbmcndsustatus:
                                  a && a.ctaDetailBean && a.ctaDetailBean.ctaid
                                    ? 123
                                    : "",
                                ctaruleid:
                                  a && a.ctaDetailBean && a.ctaDetailBean.ctaid
                                    ? a.ctaDetailBean.ctaid
                                    : "",
                                searchCityCode: s.searchCity,
                                searchLocalityCodes: s.searchLocality,
                                contact_src: s.contact_src,
                                campaignCode: w,
                                contactTrackCookie:
                                  m &&
                                  null != m.isSeoSearch &&
                                  1 == m.isSeoSearch
                                    ? "r" == a.cg || "R" == a.cg
                                      ? N + "_pppfr"
                                      : N + "_pppfs"
                                    : N,
                                locality: a.lmtDName,
                                city: a.ctName,
                                propTypeD: a.propTypeD,
                                formatPrice: a.priceD,
                                bedroomD: a.bedroomD,
                                localityCode: a.lt,
                                latitude: a.pmtLat,
                                longitude: a.pmtLong,
                                brand: a.brandName,
                                priceCW: a.price,
                                pdpUrl: a.url,
                                oid: a.oid,
                              }
                            ),
                          },
                          I
                        ),
                      }),
                      d({
                        type: "buyerTaggingFlow",
                        payload: {
                          psmid: a.psmid,
                          prjname: a.prjname,
                          bedroomD: a.bedroomD,
                          bd: a.bd,
                          lmtDName: a.lmtDName,
                          ctName: a.ctName,
                          propertyType: a.ty,
                          category: "r" == a.cg || "R" == a.cg ? "R" : "S",
                          contactId: a.id,
                          price: a.price,
                          locId: a.lt,
                          cityId: a.ct,
                          userType: a.userType,
                          isVis: a.isVis,
                          isPaidUser: a.isPaidUser,
                          propTypeD: a.propTypeD,
                        },
                      }),
                      (!Object(n.k)(s.truecallerStatus) &&
                        ("use_another_number" === s.truecallerStatus ||
                          "user_rejected" === s.truecallerStatus)) ||
                      ("search_wap" === s.requestInterface &&
                        !Object(n.k)(s.trueCallerAuth) &&
                        1 == s.trueCallerAuth)
                        ? d({ type: "askWhatsApp2", payload: !0 })
                        : d({ type: "askWhatsApp2", payload: !1 }))
                  : (console.log("Whats app open from this line"),
                    (y = "property_srp_whatsapp_login"),
                    "Whatsapp icon" === s.buttonType &&
                      (y = "property_srp_whatsapp_login_direct"),
                    (O =
                      (null != o.userEmail ? "repeat" : "fresh") +
                      " " +
                      (null != P ? "converted user" : "unconverted user")),
                    (A =
                      "new properties - dtl - " +
                      s.searchType +
                      " - buy - " +
                      s.propertyType +
                      " - " +
                      O),
                    (_ =
                      "undefined" != typeof document
                        ? c.a.readCookie("userNTrackId")
                        : null),
                    (E = {
                      cd39: "Sale" == (null == a ? void 0 : a.cg) ? "S" : "R",
                      cd56: A,
                      cd59: null == a ? void 0 : a.userType,
                      cd65: null == a ? void 0 : a.ctName,
                      cd66: null == a ? void 0 : a.ct,
                      cd71: null == a ? void 0 : a.ty,
                      cd142:
                        null != o &&
                        void 0 !== o.userUniqToken &&
                        null != o.userUniqToken
                          ? "auto contact"
                          : "otp contact",
                      cd171: _,
                    }),
                    d(l.a.openWhatsappForLogin(a, m, y, E, s)),
                    (T = p(
                      p({}, I),
                      {},
                      {
                        price: s.price,
                        requestInterface: s.requestInterface,
                        buttonType: s.buttonType,
                        propertyType: s.propertyType,
                        userType: a.userType,
                        advertiserDetailName: a.oname,
                        pdpUrl: a.url,
                        cityName: a.ctName,
                        formName: s.formName,
                        pType: null != s.pType && "" != s.pType ? s.pType : "",
                        requestBody: p(
                          p({}, t.requestBody),
                          {},
                          {
                            oid: a.oid,
                            propertyId: S,
                            advertisers: [s.advertisers + "|" + s.contactType],
                            encID: C,
                            city: a.ctName,
                            propTypeD: a.propTypeD,
                            formatPrice: a.priceD,
                            locality: a.lmtDName,
                            isCustomSource: "Y",
                            customSource: "whatsapp_direct_wap",
                          }
                        ),
                        propertyGaObj: E,
                      }
                    )),
                    d({ type: r.D, payload: T }),
                    d(l.a.addConversionCheckEventListner(m, o, T)))
                : "search_wap" !== s.requestInterface ||
                  (b && v) ||
                  (!Object(n.k)(s.trueCallerAuth) && 1 == s.trueCallerAuth)
                ? "Request Photo" != s.buttonType &&
                  (console.log("MohitVN"),
                  (k = "web"),
                  "search_wap" === s.requestInterface && (k = "wap"),
                  (w = p(
                    p({}, I),
                    {},
                    {
                      price: s.price,
                      requestInterface: s.requestInterface,
                      buttonType: s.buttonType,
                      propertyType: s.propertyType,
                      userType: a.userType,
                      advertiserDetailName: a.oname,
                      pdpUrl: a.url,
                      cityName: a.ctName,
                      formName: s.formName,
                      pType: null != s.pType && "" != s.pType ? s.pType : "",
                      requestBody: p(
                        p({}, t.requestBody),
                        {},
                        {
                          oid: a.oid,
                          propertyId: a.id,
                          advertisers: [s.advertisers + "|" + s.contactType],
                          encID: C,
                          city: a.ctName,
                          propTypeD: a.propTypeD,
                          formatPrice: a.priceD,
                          locality: a.lmtDName,
                          isCustomSource: "Y",
                          customSource: "vn_" + k + "_SRP",
                        }
                      ),
                      virtualContactData: p(
                        p({}, t.virtualContactData),
                        {},
                        { ga: s.vnGa }
                      ),
                    }
                  )),
                  d({ type: r.D, payload: w }),
                  i.a.getVirtualNumber(
                    w,
                    a.id,
                    o,
                    D.contactForm,
                    s.buttonType,
                    d,
                    j,
                    m,
                    function () {
                      void 0 !== s.buttonType &&
                        null !== s.buttonType &&
                        ((s.buttonType = "Contact " + a.userType),
                        (s.trueCallerAuth = !0)),
                        d(e(t, a, o, s, u));
                    }
                  ),
                  "search_wap" === s.requestInterface &&
                    d(i.a.addConversionCheckEventListnerForVN(m, o, w)),
                  i.a.increaseContactDrop(!1, 0))
                : (console.log("not MohitVN"),
                  (N =
                    (null != o.userEmail ? "repeat" : "fresh") +
                    " " +
                    (null != P ? "converted user" : "unconverted user")),
                  (O = {
                    cd56:
                      "new properties - dtl - " +
                      s.searchType +
                      " - buy - " +
                      s.propertyType +
                      " - " +
                      N,
                    cd59: s.buttonType.replace("Contact", "").trim(),
                    cd65: a.ctName,
                  }),
                  d(
                    l.a.openWhatsappForLogin(
                      a,
                      m,
                      "property_srp_whatsapp_login",
                      O,
                      s
                    )
                  ),
                  (A = p(
                    p({}, I),
                    {},
                    {
                      price: s.price,
                      requestInterface: s.requestInterface,
                      buttonType: s.buttonType,
                      propertyType: s.propertyType,
                      userType: a.userType,
                      advertiserDetailName: a.oname,
                      pdpUrl: a.url,
                      cityName: a.ctName,
                      formName: s.formName,
                      pType: null != s.pType && "" != s.pType ? s.pType : "",
                      requestBody: p(
                        p({}, t.requestBody),
                        {},
                        {
                          oid: a.oid,
                          propertyId: a.id,
                          advertisers: [s.advertisers + "|" + s.contactType],
                          encID: C,
                          city: a.ctName,
                          propTypeD: a.propTypeD,
                          formatPrice: a.priceD,
                          locality: a.lmtDName,
                          isCustomSource: "Y",
                          customSource: "whatsapp_direct_wap_SRP",
                        }
                      ),
                    }
                  )),
                  d({ type: r.D, payload: A }),
                  d(l.a.addConversionCheckEventListner(m, o, A)))
              : ((_ = s.buttonType),
                "Call MB Expert" === s.buttonType && (_ = "Get Phone No."),
                (y = "web"),
                "search_wap" === s.requestInterface && (y = "wap"),
                (S = p(
                  p({}, I),
                  {},
                  {
                    price: s.price,
                    requestInterface: s.requestInterface,
                    buttonType: _,
                    propertyType: s.propertyType,
                    userType: a.userType,
                    advertiserDetailName: a.oname,
                    pdpUrl: a.url,
                    cityName: a.ctName,
                    formName: s.formName,
                    pType: null != s.pType && "" != s.pType ? s.pType : "",
                    requestBody: p(
                      p({}, t.requestBody),
                      {},
                      {
                        oid: a.oid,
                        propertyId: a.id,
                        advertisers: [s.advertisers + "|" + s.contactType],
                        encID: C,
                        city: a.ctName,
                        propTypeD: a.propTypeD,
                        formatPrice: a.priceD,
                        locality: a.lmtDName,
                        isCustomSource: "Y",
                        customSource: "vn_" + y + "_SRP",
                      }
                    ),
                    virtualContactData: p(
                      p({}, t.virtualContactData),
                      {},
                      { ga: s.vnGa }
                    ),
                  }
                )),
                d({ type: r.D, payload: S }),
                i.a.getVirtualNumber(
                  S,
                  a.id,
                  o,
                  D.contactForm,
                  s.buttonType,
                  d,
                  j,
                  m,
                  function () {
                    void 0 !== s.buttonType &&
                      null !== s.buttonType &&
                      ((s.buttonType = s.buttonType.replace("Call", "Contact")),
                      (s.trueCallerAuth = !0)),
                      d(e(t, a, o, s, u));
                  }
                ),
                i.a.increaseContactDrop(!1, 0));
        };
      },
      f = function (e, t) {
        var a = "",
          r = "";
        a =
          "Contact Builder" ===
            (r =
              Object(n.l)(e) || Object(n.k)(e.buttonType) ? r : e.buttonType) ||
          "Contact Agent" === r ||
          "Contact Owner" === r ||
          "Contacted" === r
            ? "AA-Contact"
            : "Get a Quote" === r
            ? "AA-GET_A_QUOTE"
            : "Get Phone No." === r || "Enquire Now" === r || "Saved" === r
            ? "AA-Phone"
            : "Send Enquiry" === r ||
              "Request Call from Owner" === r ||
              "Request Callback" === r ||
              "Request Sent" === r ||
              "Sent" === r
            ? "AA-RequestCallback"
            : "Request Photo" === r || "Requested" === r
            ? "PROPERTY_BUY__LIST_REQUEST_PHOTO"
            : "Schedule Call" === r
            ? "PROPERTY_BUY__LIST_CONTACT_FORM_SCHEDULE_CALL"
            : "Request Photos" === r ||
              "Ask Society Name" === r ||
              "Check Availability" === r ||
              "Request Site Visit" === r
            ? "AA-" + r.replace(/ /g, "_")
            : "";
        return (
          Object(n.l)(e) ||
            Object(n.k)(e.contactTrackCookie) ||
            (a = e.contactTrackCookie),
          !Object(n.l)(t) && t.isShortList && (a += "-Shortlist"),
          Object(n.l)(e) ||
            Object(n.k)(e.isUspImage) ||
            "Y" != e.isUspImage ||
            (a += "-USP Image"),
          a
        );
      },
      g = function (e) {
        var t,
          a = "";
        return (
          Object(n.l)(e) ||
            Object(n.k)(e.buttonType) ||
            ((t = e.buttonType),
            (a =
              Object(n.k)(e.contact_interface) ||
              "legal_card_contact" !== e.contact_interface
                ? "Contact Builder" === t ||
                  "Contact Agent" === t ||
                  "Contact Owner" === t ||
                  "Contacted" === t ||
                  "Get Phone No." === t ||
                  "Enquire Now" === t ||
                  "Saved" === t ||
                  "Send Enquiry" === t ||
                  "Request Call from Owner" === t ||
                  "Request Callback" === t ||
                  "Request Sent" === t ||
                  "Sent" === t
                  ? "Fill out this one-time form"
                  : "Request Photo" === t || "Requested" === t
                  ? "Request Property Photos"
                  : "Schedule Call" === t
                  ? "Fill out this one-time form"
                  : "Fill this one-time contact form"
                : "Fill this one-time contact form")),
          a
        );
      },
      h = function (e, t) {
        var a,
          r = "";
        t =
          Object(n.k)(t) || Object(n.k)(t.userType) ? "Advertiser" : t.userType;
        return (
          Object(n.l)(e) ||
            Object(n.k)(e.buttonType) ||
            ((a = e.buttonType),
            (r =
              Object(n.k)(e.contact_interface) ||
              "legal_card_contact" !== e.contact_interface
                ? "Contact Builder" === a ||
                  "Contact Agent" === a ||
                  "Contact Owner" === a ||
                  "Contacted" === a ||
                  "Get Phone No." === a ||
                  "Enquire Now" === a ||
                  "Saved" === a ||
                  "Send Enquiry" === a ||
                  "Request Call from Owner" === a ||
                  "Request Callback" === a ||
                  "Request Sent" === a ||
                  "Sent" === a
                  ? "Get " + t + "'s details over email"
                  : "Request Photo" === a || "Requested" === a
                  ? "View once shared by the " + t
                  : "Schedule Call" === a ||
                    ("WhatsApp Builder" !== a &&
                      "WhatsApp Agent" !== a &&
                      "WhatsApp Owner" !== a)
                  ? "Get " + t + "'s details over email"
                  : "You will be redirected to WhatsApp"
                : "")),
          r
        );
      };
  },
  1842: function (e, t, a) {
    "use strict";
    a.r(t);
    var r = a(0),
      n = a.n(r),
      o = ((t = a(338)), (t = a.n(t)), a(573)),
      c = a(2),
      i = a(795),
      l = a(881),
      s = a(894),
      u = a(446),
      p = a(6),
      d = a(41),
      m = a(83),
      y = a(433),
      b = a(559);
    function v(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    function f(e) {
      function t(e) {
        e.stopPropagation();
      }
      var a = (y = e.result).image,
        r = y.isRera,
        o = y.psmSqrFtPrice,
        c = y.psmStatus,
        i = y.bedroom,
        l = y.psmName,
        s = y.propId,
        u = y.localityName,
        p = y.cityName,
        d = y.minPrice,
        m = y.maxPrice,
        y = "Contact " + ((y = y.contactButton) ? y : "Agent"),
        b = d && m && "0" != d && "0" != m;
      return n.a.createElement(
        "div",
        {
          className: "mb-srp__popular-proj-nri__card card-shadow-hover",
          onClick: function () {
            e.fireGaAction();
          },
        },
        n.a.createElement(
          "div",
          { className: "mb-srp__popular-proj-nri__card--graphic" },
          a
            ? n.a.createElement("img", {
                src: a,
                width: "296",
                height: "112",
                alt: "",
                decoding: "async",
              })
            : n.a.createElement(
                "div",
                { className: "mb-srp__no-image" },
                n.a.createElement(
                  "div",
                  { className: "mb-srp__no-image__body" },
                  n.a.createElement("span", {
                    className: "mb-srp__no-image--ico",
                  }),
                  n.a.createElement(
                    "div",
                    { className: "mb-srp__no-image--text" },
                    "No Image Available"
                  )
                )
              ),
          r &&
            "Y" == r &&
            n.a.createElement(
              "span",
              {
                className: "mb-srp__popular-proj-nri__card--graphic--tag-rera",
              },
              "RERA APPROVED"
            )
        ),
        n.a.createElement(
          "div",
          { className: "mb-srp__popular-proj-nri__card--content" },
          n.a.createElement(
            "div",
            { className: "mb-srp__popular-proj-nri__card--name" },
            l
          ),
          n.a.createElement(
            "div",
            { className: "mb-srp__popular-proj-nri__card--loc" },
            p && u ? u + ", " + p : u || p
          ),
          n.a.createElement(
            "div",
            { className: "mb-srp__popular-proj-nri__card--type" },
            (a = i) ? a + " BHK" : " "
          ),
          n.a.createElement(
            "div",
            { className: "mb-srp__popular-proj-nri__card--price" },
            b
              ? n.a.createElement(
                  n.a.Fragment,
                  null,
                  n.a.createElement("span", { className: "rupees" }, "₹"),
                  d,
                  " - ",
                  n.a.createElement("span", { className: "rupees" }, "₹"),
                  m
                )
              : n.a.createElement(
                  "span",
                  { className: "mb-srp__popular-proj-nri__card--callprice" },
                  "Call For Price"
                )
          ),
          n.a.createElement(
            "div",
            { className: "mb-srp__popular-proj-nri__card--fixed" },
            b
              ? o && o.includes(".")
                ? n.a.createElement(
                    "div",
                    { className: "mb-srp__popular-proj-nri__card--size" },
                    o.split(".")[0],
                    " /sqft"
                  )
                : n.a.createElement(
                    "div",
                    { className: "mb-srp__popular-proj-nri__card--size" },
                    o,
                    " /sqft"
                  )
              : n.a.createElement("div", {
                  className: "mb-srp__popular-proj-nri__card--size",
                }),
            n.a.createElement(
              "div",
              { className: "mb-srp__popular-proj-nri__card--status" },
              c
            )
          ),
          n.a.createElement(
            "div",
            { className: "mb-srp__action" },
            e.contactCtaData && e.contactCtaData[s]
              ? n.a.createElement(
                  "span",
                  {
                    className: "mb-srp__action--btn btn-contacted medium",
                    onClick: function (a) {
                      t(a), e.fireContactClickGaAction(a, e.result, e.index);
                    },
                  },
                  "Contacted"
                )
              : n.a.createElement(
                  "span",
                  {
                    className: "mb-srp__action--btn btn-red medium",
                    onClick: function (a) {
                      t(a), e.fireContactClickGaAction(a, e.result, e.index);
                    },
                  },
                  y
                )
          )
        )
      );
    }
    function g(e) {
      return n.a.createElement(
        "div",
        { className: "mb-srp__popular-proj-nri__left" },
        n.a.createElement(
          "div",
          { className: "mb-srp__popular-proj-nri__title" },
          n.a.createElement(
            "div",
            { className: "mb-srp__popular-proj-nri__title--text1" },
            e.headingText
          ),
          n.a.createElement(
            "div",
            { className: "mb-srp__popular-proj-nri__title--text2" },
            e.subHeadingText
          ),
          n.a.createElement(
            "a",
            {
              href: e.headingAllAction,
              onClick: e.fireGaAction,
              className: "mb-srp__popular-proj-nri__title--exploreall",
            },
            e.headingAllText
          )
        )
      );
    }
    var h = function (e) {
        var t = (function (e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                var a =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                if (null != a) {
                  var r,
                    n,
                    o,
                    c,
                    i = [],
                    l = !0,
                    s = !1;
                  try {
                    if (((o = (a = a.call(e)).next), 0 === t)) {
                      if (Object(a) !== a) return;
                      l = !1;
                    } else
                      for (
                        ;
                        !(l = (r = o.call(a)).done) &&
                        (i.push(r.value), i.length !== t);
                        l = !0
                      );
                  } catch (e) {
                    (s = !0), (n = e);
                  } finally {
                    try {
                      if (
                        !l &&
                        null != a.return &&
                        ((c = a.return()), Object(c) !== c)
                      )
                        return;
                    } finally {
                      if (s) throw n;
                    }
                  }
                  return i;
                }
              })(e, t) ||
              (function (e, t) {
                var a;
                if (e)
                  return "string" == typeof e
                    ? v(e, t)
                    : "Map" ===
                        (a =
                          "Object" ===
                            (a = Object.prototype.toString
                              .call(e)
                              .slice(8, -1)) && e.constructor
                            ? e.constructor.name
                            : a) || "Set" === a
                    ? Array.from(e)
                    : "Arguments" === a ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                    ? v(e, t)
                    : void 0;
              })(e, t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          })(Object(r.useState)(!1), 2),
          a = t[0],
          n = t[1],
          o =
            (Object(r.useEffect)(function () {
              return (
                window.addEventListener("scroll", o),
                function () {
                  return window.removeEventListener("scroll", o);
                }
              );
            }, []),
            Object(r.useEffect)(
              function () {
                a && e();
              },
              [a]
            ),
            function () {
              var e;
              document.getElementById("mbsrpPagination") &&
                ((e =
                  document.getElementById("mbsrpPagination").offsetTop - 2e3),
                a || (window.pageYOffset > e && n(!0)));
            });
        return [a, n];
      },
      _ = (a(552), a(884)),
      O = a(821),
      D = a(889),
      j = a(1),
      S = a(560),
      P = a(824),
      N = a(572),
      w = a(58),
      E = a.n(w),
      T = ((w = a(256)), a(451)),
      k = a(357),
      C = a(191),
      A = (a(13), a(52), a(28)),
      I = (a(53), a(3)),
      L = a(67),
      x = a(91);
    function B(e) {
      return (B =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function F(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function R(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? F(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== B(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== B((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === B(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : F(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    function U(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var a =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != a) {
            var r,
              n,
              o,
              c,
              i = [],
              l = !0,
              s = !1;
            try {
              if (((o = (a = a.call(e)).next), 0 === t)) {
                if (Object(a) !== a) return;
                l = !1;
              } else
                for (
                  ;
                  !(l = (r = o.call(a)).done) &&
                  (i.push(r.value), i.length !== t);
                  l = !0
                );
            } catch (e) {
              (s = !0), (n = e);
            } finally {
              try {
                if (
                  !l &&
                  null != a.return &&
                  ((c = a.return()), Object(c) !== c)
                )
                  return;
              } finally {
                if (s) throw n;
              }
            }
            return i;
          }
        })(e, t) ||
        (function (e, t) {
          var a;
          if (e)
            return "string" == typeof e
              ? M(e, t)
              : "Map" ===
                  (a =
                    "Object" ===
                      (a = Object.prototype.toString.call(e).slice(8, -1)) &&
                    e.constructor
                      ? e.constructor.name
                      : a) || "Set" === a
              ? Array.from(e)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? M(e, t)
              : void 0;
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function M(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    function V(e) {
      function t(e, t) {
        return Object(A.c)(e, t, m, y);
      }
      function a(e, a, r) {
        var n = t(a, r);
        r = r + 1 + " / " + s.length;
        d(
          Object(L.a)(
            e,
            {
              buttonType: "Contact " + a.contactButton,
              contactType: "property",
              searchType: "2",
              propertyId: a.propId,
              advertisers: a.propId,
              requestInterface: "search_web",
              contactTrackCookie: "AA-Contact",
              isLoginAndInfra: !1,
              formName: "SRP_TOP_CONTACT",
              contact_interface: "nri_top_project_contact",
            },
            "DYNAMIC_LISTING_NRI_TOP_PROJECTS",
            n,
            "Contact " + a.contactButton,
            r,
            a,
            "",
            !0
          )
        );
      }
      var o,
        i,
        l,
        s = (b = U(Object(r.useState)([]), 2))[0],
        u = b[1],
        p = ((b = U(Object(r.useState)(""), 2))[0], b[1]),
        d = Object(c.c)(),
        m = Object(c.d)(function (e) {
          return e.searchAdditionalDataBean;
        }),
        y = Object(c.d)(function (e) {
          return e.userInfoData;
        }),
        b = Object(c.d)(function (e) {
          return e.searchBean;
        }),
        v = Object(c.d)(function (e) {
          return e.filterData;
        }),
        h = Object(c.d)(function (e) {
          return e.contactCtaData;
        }),
        _ =
          (Object(r.useEffect)(
            function () {
              _();
            },
            [JSON.stringify(e)]
          ),
          function () {
            E.a
              .get(
                "/mbsrp/fetchTopProjectList?ct=" +
                  e.city +
                  "&lt=" +
                  e.lt +
                  "&isConvertedUser=" +
                  e.isConvertedUser +
                  "&row=8&dataFor=" +
                  e.dataFor +
                  "&isNRI=" +
                  e.isNRIUser
              )
              .then(function (e) {
                null !== e.data &&
                  (u(e.data.topProjectDTOList), p(e.data.latLongRadius));
              });
          }),
        O = s && 0 < s.length,
        D = [],
        j =
          (s &&
            s.map(function (e) {
              D.push(e.psmName);
            }),
          window.location + "&projectSociety=" + D.join(",")),
        S =
          (window.location &&
            window.location.href.includes("pppfs") &&
            ((o = "sale"),
            "R" == b.category && (o = "rent"),
            (i = b.search),
            "luxury" == b.search && (i = "residential"),
            (j = window.location.origin),
            window.location.href.includes("mbsrp") && (j += "/mbsrp"),
            (l = []),
            v &&
              v.otherDataMap &&
              v.otherDataMap.propertyTypeKeyValue &&
              Object.keys(v.otherDataMap.propertyTypeKeyValue).map(function (
                e
              ) {
                l.push(v.otherDataMap.propertyTypeKeyValue[e]);
              }),
            (j +=
              "/property-for-" +
              o +
              "/" +
              i +
              "-real-estate?&proptype=" +
              l.join(",") +
              "&cityName=" +
              b.city +
              "&projectSociety=" +
              D.join(","))),
          "Popular projects among NRIs");
      return n.a.createElement(
        "div",
        null,
        O &&
          n.a.createElement(
            "div",
            { className: "mb-srp__popular-proj-nri" },
            n.a.createElement(g, {
              headingText: S,
              subHeadingText:
                "Handpicked projects based on your search queries",
              headingAllText: "Explore All Properties",
              headingAllAction: j,
              fireGaAction: function () {
                d(
                  Object(I.e)({
                    event: "event_tracking",
                    eventName: "revamp_srp_dynamic_listing",
                    nonInteraction: !1,
                    eventCategory: "revamp srp - dynamic listings",
                    eventAction: S,
                    eventLabel: "explore all properties",
                    eventValue: "",
                  })
                );
              },
            }),
            n.a.createElement(
              "div",
              { className: "mb-srp__popular-proj-nri__right" },
              n.a.createElement(
                "div",
                {
                  className:
                    "mb-srp__popular-proj-nri__slider mb-srp__swiper-arrow",
                },
                n.a.createElement("div", {
                  className: "swiper-button-prev",
                  id: "proj-nri-swiper-prev",
                }),
                n.a.createElement("div", {
                  className: "swiper-button-next",
                  id: "proj-nri-swiper-next",
                }),
                n.a.createElement(
                  k.a,
                  {
                    spaceBetween: 16,
                    slidesPerView: 2.5,
                    navigation: {
                      prevEl: "#proj-nri-swiper-prev",
                      nextEl: "#proj-nri-swiper-next",
                    },
                    onSlideChange: function () {},
                    onSwiper: function (e) {},
                  },
                  s.map(function (e, r) {
                    return n.a.createElement(
                      C.a,
                      null,
                      n.a.createElement(f, {
                        key: r,
                        fireContactClickGaAction: a,
                        index: r,
                        result: e,
                        fireGaAction: function () {
                          return (
                            (o = t((a = e), (n = r))),
                            (n = "card click - " + (n + 1) + " / " + s.length),
                            d(
                              Object(I.e)(
                                R(
                                  {
                                    event: "event_tracking",
                                    eventName: "revamp_srp_dynamic_listing",
                                    nonInteraction: !1,
                                    eventCategory:
                                      "revamp srp - dynamic listings",
                                    eventAction: S,
                                    eventLabel: n,
                                    eventValue: "",
                                  },
                                  o
                                )
                              )
                            ),
                            Object(x.a)(a.propId),
                            void window.open(
                              "https://www.magicbricks.com/" + a.pdpUrl,
                              "_blank"
                            )
                          );
                          var a, n, o;
                        },
                        contactCtaData: h,
                      })
                    );
                  })
                )
              )
            )
          )
      );
    }
    function q(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var a =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != a) {
            var r,
              n,
              o,
              c,
              i = [],
              l = !0,
              s = !1;
            try {
              if (((o = (a = a.call(e)).next), 0 === t)) {
                if (Object(a) !== a) return;
                l = !1;
              } else
                for (
                  ;
                  !(l = (r = o.call(a)).done) &&
                  (i.push(r.value), i.length !== t);
                  l = !0
                );
            } catch (e) {
              (s = !0), (n = e);
            } finally {
              try {
                if (
                  !l &&
                  null != a.return &&
                  ((c = a.return()), Object(c) !== c)
                )
                  return;
              } finally {
                if (s) throw n;
              }
            }
            return i;
          }
        })(e, t) ||
        (function (e, t) {
          var a;
          if (e)
            return "string" == typeof e
              ? Y(e, t)
              : "Map" ===
                  (a =
                    "Object" ===
                      (a = Object.prototype.toString.call(e).slice(8, -1)) &&
                    e.constructor
                      ? e.constructor.name
                      : a) || "Set" === a
              ? Array.from(e)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? Y(e, t)
              : void 0;
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function Y(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    function G(e) {
      function t() {
        p(!0);
      }
      var a = Object(c.d)(function (e) {
          return e.contactData;
        }),
        o = Object(c.d)(function (e) {
          return e.userInfoData;
        }),
        i = Object(c.d)(function (e) {
          return e.searchBean;
        }),
        l = Object(c.d)(function (e) {
          return e.searchAdditionalDataBean;
        }),
        s = Object(j.o)(l),
        u = (d = q(Object(r.useState)(!1), 2))[0],
        p = d[1],
        d =
          void 0 !== o && void 0 !== o.userUniqToken && null != o.userUniqToken
            ? o.userUniqToken
            : "",
        m = (y = q(
          Object(r.useState)(
            a.requestBody && a.nonPrimeUserFreeOwnerLimitUsed
              ? a.nonPrimeUserFreeOwnerLimitUsed
              : 0
          ),
          2
        ))[0],
        y = (y[1], "Y" === o.userPrimeMemberLoggedIn),
        b =
          ((m =
            "residential" === i.search &&
            ("S" == i.category || "B" == i.category) &&
            (Object(j.t)(d) ||
              (null != o.isUserLoggedIn && "Y" == o.isUserLoggedIn && m < 2))),
          "residential" === i.search && "R" == i.category),
        v =
          "commercial" === i.search &&
          "R" == i.category &&
          (Object(j.t)(d) || y);
      (d = "plot" === i.search && "S" == i.category && (Object(j.t)(d) || y)),
        (y = m || b || v || d);
      return (
        Object(r.useEffect)(function () {
          [
            "keydown",
            "mousemove",
            "wheel",
            "touchmove",
            "touchstart",
            "touchend",
          ].forEach(function (e) {
            window.addEventListener(e, t, { passive: !0 });
          });
        }, []),
        n.a.createElement(
          n.a.Fragment,
          null,
          6 == e.index &&
            null !== e.resultList &&
            6 < e.resultList.length &&
            "commercial" != i.search &&
            a &&
            a.recieverId &&
            o &&
            o.userEmail &&
            n.a.createElement(
              n.a.Fragment,
              null,
              n.a.createElement(N.a, {
                loc: s,
                category: i.category,
                city: i.city,
                flow: "P",
              })
            ),
          10 == e.index &&
            null !== e.resultList &&
            10 < e.resultList.length &&
            "commercial" != i.search &&
            a &&
            a.recieverId &&
            o &&
            o.userEmail &&
            n.a.createElement(
              n.a.Fragment,
              null,
              n.a.createElement(N.a, {
                loc: s,
                category: i.category,
                city: i.city,
                flow: "R",
              })
            ),
          !l.searchForm.isNRIRadiusSearch &&
            ("S" == i.category || "B" == i.category) &&
            l.isNRIUser &&
            "true" == l.isNRIUser &&
            null !== e.resultList &&
            ((5 == e.index && 5 < e.resultList.length) ||
              (e.resultList.length < 6 &&
                e.index == e.resultList.length - 1)) &&
            n.a.createElement(
              n.a.Fragment,
              null,
              u &&
                n.a.createElement(V, {
                  headingCityName: s,
                  city: i.city,
                  lt: i.locality,
                  isConvertedUser: !1,
                  isNRIUser: l.isNRIUser,
                  dataFor: "plot" == i.search ? "PLOT" : "",
                })
            ),
          6 == e.index &&
            null !== e.resultList &&
            6 < e.resultList.length &&
            !y &&
            n.a.createElement(
              n.a.Fragment,
              null,
              u &&
                n.a.createElement(S.a, { pageName: "reMarketingBannerGeneric" })
            ),
          11 == e.index &&
            null !== e.resultList &&
            11 < e.resultList.length &&
            n.a.createElement(
              n.a.Fragment,
              null,
              u && n.a.createElement(S.a, { pageName: "skyscraperIFollow" })
            ),
          9 == e.index &&
            null !== e.resultList &&
            9 < e.resultList.length &&
            n.a.createElement(P.a, { searchBeanData: i, localityCorridor: !0 })
        )
      );
    }
    w.a.use([T.a]);
    var W = a(44),
      H = a(874),
      z = a(128);
    function J(e) {
      return (J =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function K(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function $(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? K(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== J(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== J((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === J(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : K(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    function Q(e, t, a, r, n, o, c, i, l, s, u, p) {
      return function (s) {
        ("No" != n && "Not Sure" != n) || "" != o
          ? "" != a && "" != r
            ? (c(""), s(te(t, a, r, o, n, e, i, l, p)))
            : ae(a, r, u)
          : (c("Please select atleast one feedback"), ae(a, r, u));
      };
    }
    function X(e, t, a, r, n, o, c) {
      null != o &&
        ("Phone No" == t &&
          -1 != o.toString().indexOf("userMobile") &&
          c(o.replace("userMobile", "")),
        "Email" == t) &&
        -1 != o.toString().indexOf("userEmail") &&
        c(o.replace("userEmail", "")),
        "" !== e.target.value
          ? (a(e.target.value), r(" has-value"))
          : (a(""), r(""), n("Please enter " + t));
    }
    function Z(e, t, a, r, n, o) {
      null != n &&
        ("Phone No" == t &&
          -1 != n.toString().indexOf("userMobile") &&
          o(n.replace("userMobile", "")),
        "Email" == t) &&
        -1 != n.toString().indexOf("userEmail") &&
        o(n.replace("userEmail", "")),
        "" == e.target.value && "comments" != t
          ? (a(" has-error"), r("Please enter " + t))
          : Object(j.B)(e.target.name, e.target.value) ||
            (a(" has-value has-error"), r("Please enter valid " + t));
    }
    function ee(e) {
      var t = e.setter,
        a = e.id,
        r = e.value,
        o = e.label,
        c = e.setHeaderError;
      return n.a.createElement(
        "li",
        { className: "mb-form__checkbox--item" },
        n.a.createElement("input", {
          type: "checkbox",
          name: "feedbackType",
          id: a,
          onChange: function (e) {
            var a, r;
            (a = t),
              (r = c),
              1 == e.target.checked ? (r(""), a(e.target.value)) : a("");
          },
          value: r,
        }),
        n.a.createElement("label", { htmlFor: a }, o)
      );
    }
    var te = function (e, t, a, r, n, o, c, i, l) {
        return function (s) {
          z.a
            .get(
              "/ajax/submitPropertyFeedbackdata?feedbackType=" +
                ("No" == n ? r : "undefined") +
                "&userMobile=" +
                t +
                "&userEmail=" +
                a +
                "&tab=" +
                n +
                "&propertyId=" +
                o +
                "&isdCode=50&ipAddress=172.29.104.30&radioValueother=" +
                ("No" == n ? "undefined" : r) +
                "&source=property_srp&comment=" +
                e
            )
            .then(function (e) {
              e.data &&
                (void 0 !== e.data.errorMsg
                  ? l(e.data.errorMsg)
                  : (l(""),
                    c(5),
                    s(
                      Object(I.e)(
                        $(
                          {
                            event: "event_tracking",
                            eventName: "revamp_srp_dynamic_listing",
                            nonInteraction: !1,
                            eventCategory: "revamp srp - report listing",
                            eventAction: "2. feedback submit success",
                            eventLabel:
                              "Yes" == n || "No" == n ? n : "Unreachable",
                            eventValue: "",
                          },
                          i
                        )
                      )
                    )));
            });
        };
      },
      ae = function (e, t, a) {
        var r = "" == e ? "userMobile," : "";
        "" == t && (r += "userEmail"), ("" != e && "" != t) || a(r);
      };
    function re(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var a =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != a) {
            var r,
              n,
              o,
              c,
              i = [],
              l = !0,
              s = !1;
            try {
              if (((o = (a = a.call(e)).next), 0 === t)) {
                if (Object(a) !== a) return;
                l = !1;
              } else
                for (
                  ;
                  !(l = (r = o.call(a)).done) &&
                  (i.push(r.value), i.length !== t);
                  l = !0
                );
            } catch (e) {
              (s = !0), (n = e);
            } finally {
              try {
                if (
                  !l &&
                  null != a.return &&
                  ((c = a.return()), Object(c) !== c)
                )
                  return;
              } finally {
                if (s) throw n;
              }
            }
            return i;
          }
        })(e, t) ||
        (function (e, t) {
          var a;
          if (e)
            return "string" == typeof e
              ? ne(e, t)
              : "Map" ===
                  (a =
                    "Object" ===
                      (a = Object.prototype.toString.call(e).slice(8, -1)) &&
                    e.constructor
                      ? e.constructor.name
                      : a) || "Set" === a
              ? Array.from(e)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? ne(e, t)
              : void 0;
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function ne(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    function oe(e) {
      var t = e.setter,
        a = e.value,
        o = e.id,
        c = e.label,
        i = e.errorFor,
        l = e.nullID,
        s = e.setNullID,
        u = (e = re(Object(r.useState)(""), 2))[0],
        p = e[1],
        d = (e = re(Object(r.useState)("Please enter " + i), 2))[0],
        m = e[1];
      e = "mb-form__fieldset " + u;
      return (
        null != l && l.includes(o) && (e = "mb-form__fieldset has-error"),
        n.a.createElement(
          "div",
          { className: e },
          "comments" == i
            ? n.a.createElement(
                n.a.Fragment,
                null,
                n.a.createElement(
                  "div",
                  { className: "mb-form__fieldset--label" },
                  c
                ),
                n.a.createElement("textarea", {
                  className: "mb-form--textarea",
                  style: { height: "74px" },
                  value: a,
                  id: o,
                  name: o,
                  onChange: function (e) {
                    X(e, i, t, p, m, l, s);
                  },
                  onBlur: function (e) {
                    Z(e, i, p, m, l, s);
                  },
                  required: "",
                })
              )
            : n.a.createElement(
                n.a.Fragment,
                null,
                n.a.createElement("input", {
                  type: "text",
                  className: "mb-form--input",
                  value: a,
                  id: o,
                  name: o,
                  onChange: function (e) {
                    X(e, i, t, p, m, l, s);
                  },
                  onBlur: function (e) {
                    Z(e, i, p, m, l, s);
                  },
                  required: "",
                }),
                n.a.createElement(
                  "label",
                  { className: "mb-form--label", htmlFor: o },
                  c
                )
              ),
          n.a.createElement("div", { className: "mb-form--error" }, d)
        )
      );
    }
    function ce(e) {
      return (
        (e = e.title),
        n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            "div",
            { className: "mb-share-feed__title" },
            n.a.createElement(
              "div",
              { className: "mb-share-feed__title--text1" },
              e
            )
          )
        )
      );
    }
    function ie(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var a =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != a) {
            var r,
              n,
              o,
              c,
              i = [],
              l = !0,
              s = !1;
            try {
              if (((o = (a = a.call(e)).next), 0 === t)) {
                if (Object(a) !== a) return;
                l = !1;
              } else
                for (
                  ;
                  !(l = (r = o.call(a)).done) &&
                  (i.push(r.value), i.length !== t);
                  l = !0
                );
            } catch (e) {
              (s = !0), (n = e);
            } finally {
              try {
                if (
                  !l &&
                  null != a.return &&
                  ((c = a.return()), Object(c) !== c)
                )
                  return;
              } finally {
                if (s) throw n;
              }
            }
            return i;
          }
        })(e, t) ||
        (function (e, t) {
          var a;
          if (e)
            return "string" == typeof e
              ? le(e, t)
              : "Map" ===
                  (a =
                    "Object" ===
                      (a = Object.prototype.toString.call(e).slice(8, -1)) &&
                    e.constructor
                      ? e.constructor.name
                      : a) || "Set" === a
              ? Array.from(e)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? le(e, t)
              : void 0;
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function le(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    function se(e) {
      var t = e.propertyId,
        a = e.setHeaderError,
        o = e.setFeedbackActive,
        i = e.headerError,
        l = e.propertyGaObj,
        s = e.userInfoData,
        u = e.nullID,
        p = e.setNullID,
        d = (e = ie(Object(r.useState)(""), 2))[0],
        m = ((e = e[1]), (y = ie(Object(r.useState)(""), 2))[0]),
        y = y[1],
        b = (v = ie(
          Object(r.useState)(null != s.userMobile ? s.userMobile : ""),
          2
        ))[0],
        v = v[1],
        f = (g = ie(
          Object(r.useState)(null != s.userEmail ? s.userEmail : ""),
          2
        ))[0],
        g = g[1],
        h = Object(c.c)(),
        _ = ie(Object(r.useState)(""), 2),
        O = _[0],
        D = _[1];
      return n.a.createElement(
        n.a.Fragment,
        null,
        n.a.createElement(
          "div",
          { className: "mb-share-feed__no", id: "shareFeedback-no" },
          n.a.createElement(ce, {
            title: "What detail(s) was/were not correct?",
          }),
          n.a.createElement(
            "div",
            { className: "mb-form" },
            n.a.createElement(
              "div",
              { className: "mb-form__row" },
              n.a.createElement(
                "div",
                {
                  className: "mb-form__fieldset".concat(
                    "" !== i ? " has-error" : ""
                  ),
                },
                n.a.createElement(
                  "div",
                  { className: "mb-form__checkbox" },
                  n.a.createElement(
                    "ul",
                    { className: "mb-form__checkbox__list column-2" },
                    n.a.createElement(ee, {
                      setter: y,
                      setHeaderError: a,
                      id: "propertySold",
                      value: "11351",
                      label: "Property Sold/Rented Out",
                    }),
                    n.a.createElement(ee, {
                      setter: y,
                      setHeaderError: a,
                      id: "inappropriatePrice",
                      value: "11362",
                      label: "Inappropriate price",
                    }),
                    n.a.createElement(ee, {
                      setter: y,
                      setHeaderError: a,
                      id: "inCorrectPhoto",
                      value: "11357",
                      label: "Fake/Incorrect Photos",
                    }),
                    n.a.createElement(ee, {
                      setter: y,
                      setHeaderError: a,
                      id: "inCorrectPrice",
                      value: "11362",
                      label: "Incorrect Price",
                    }),
                    n.a.createElement(ee, {
                      setter: y,
                      setHeaderError: a,
                      id: "incorrectLoc",
                      value: "11364",
                      label: "Incorrect Location/Address",
                    }),
                    n.a.createElement(ee, {
                      setter: y,
                      setHeaderError: a,
                      id: "incorrectSale",
                      value: "11366",
                      label: "Incorrect Sale/Rent Type",
                    }),
                    n.a.createElement(ee, {
                      setter: y,
                      setHeaderError: a,
                      id: "brokerProp",
                      value: "11372",
                      label: "Broker property as Owner",
                    })
                  ),
                  n.a.createElement("div", { className: "mb-form--error" }, i)
                )
              )
            ),
            n.a.createElement(
              "div",
              { className: "mb-form__row" },
              n.a.createElement(oe, {
                setter: e,
                value: d,
                id: "comments",
                label: "Share it here/Comments",
                errorFor: "comments",
                nullID: u,
                setNullID: p,
              })
            ),
            n.a.createElement(
              "div",
              { className: "mb-form__row" },
              n.a.createElement(
                "div",
                { className: "mb-form__row--col2" },
                null == s.userMobile
                  ? n.a.createElement(oe, {
                      id: "userMobile",
                      setter: v,
                      value: b,
                      label: "Phone No",
                      errorFor: "Phone No",
                      nullID: u,
                      setNullID: p,
                    })
                  : null
              ),
              n.a.createElement(
                "div",
                { className: "mb-form__row--col2" },
                null == s.userEmail
                  ? n.a.createElement(oe, {
                      id: "userEmail",
                      setter: g,
                      value: f,
                      label: "Email",
                      errorFor: "Email",
                      nullID: u,
                      setNullID: p,
                    })
                  : null
              )
            ),
            "" != O
              ? n.a.createElement(
                  "div",
                  { className: "mb-share-feed__notification" },
                  O
                )
              : null,
            n.a.createElement(
              "div",
              { className: "mb-srp__action action--right" },
              n.a.createElement(
                "span",
                {
                  className: "mb-srp__action--btn btn-red large",
                  onClick: function () {
                    return h(Q(t, d, b, f, "No", m, a, o, l, 0, p, D));
                  },
                },
                "Submit"
              )
            )
          )
        )
      );
    }
    function ue(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var a =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != a) {
            var r,
              n,
              o,
              c,
              i = [],
              l = !0,
              s = !1;
            try {
              if (((o = (a = a.call(e)).next), 0 === t)) {
                if (Object(a) !== a) return;
                l = !1;
              } else
                for (
                  ;
                  !(l = (r = o.call(a)).done) &&
                  (i.push(r.value), i.length !== t);
                  l = !0
                );
            } catch (e) {
              (s = !0), (n = e);
            } finally {
              try {
                if (
                  !l &&
                  null != a.return &&
                  ((c = a.return()), Object(c) !== c)
                )
                  return;
              } finally {
                if (s) throw n;
              }
            }
            return i;
          }
        })(e, t) ||
        (function (e, t) {
          var a;
          if (e)
            return "string" == typeof e
              ? pe(e, t)
              : "Map" ===
                  (a =
                    "Object" ===
                      (a = Object.prototype.toString.call(e).slice(8, -1)) &&
                    e.constructor
                      ? e.constructor.name
                      : a) || "Set" === a
              ? Array.from(e)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? pe(e, t)
              : void 0;
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function pe(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    function de(e) {
      var t = e.propertyId,
        a = e.setHeaderError,
        o = e.setFeedbackActive,
        i = e.headerError,
        l = e.propertyGaObj,
        s = e.userInfoData,
        u = e.nullID,
        p = e.setNullID,
        d = (e = ue(Object(r.useState)(""), 2))[0],
        m = ((e = e[1]), (y = ue(Object(r.useState)(""), 2))[0]),
        y = y[1],
        b = (v = ue(
          Object(r.useState)(null != s.userMobile ? s.userMobile : ""),
          2
        ))[0],
        v = v[1],
        f = (g = ue(
          Object(r.useState)(null != s.userEmail ? s.userEmail : ""),
          2
        ))[0],
        g = g[1],
        h = Object(c.c)(),
        _ = ue(Object(r.useState)(""), 2),
        O = _[0],
        D = _[1];
      return n.a.createElement(
        n.a.Fragment,
        null,
        n.a.createElement(
          "div",
          {
            className: "mb-share-feed__not-rechable",
            id: "shareFeedback-no-rechable",
          },
          n.a.createElement(ce, { title: "Advertiser is not reachable" }),
          n.a.createElement(
            "div",
            { className: "mb-form" },
            n.a.createElement(
              "div",
              { className: "mb-form__row" },
              n.a.createElement(
                "div",
                {
                  className: "mb-form__fieldset".concat(
                    "" !== i ? " has-error" : ""
                  ),
                },
                n.a.createElement(
                  "div",
                  { className: "mb-form__checkbox" },
                  n.a.createElement(
                    "div",
                    { className: "mb-form__checkbox__heading" },
                    "What was wrong?"
                  ),
                  n.a.createElement(
                    "ul",
                    { className: "mb-form__checkbox__list column-2" },
                    n.a.createElement(ee, {
                      setter: y,
                      setHeaderError: a,
                      id: "wrongInvalid",
                      value: "11359",
                      label: "Wrong or Invalid number",
                    }),
                    n.a.createElement(ee, {
                      setter: y,
                      setHeaderError: a,
                      id: "switchOff",
                      value: "11358",
                      label: "Switched off / Not Reachable",
                    })
                  ),
                  n.a.createElement("div", { className: "mb-form--error" }, i)
                )
              )
            ),
            n.a.createElement(
              "div",
              { className: "mb-form__row" },
              n.a.createElement(oe, {
                setter: e,
                id: "comments",
                label: "Share it here/Comments",
                errorFor: "comments",
                nullID: u,
                setNullID: p,
              })
            ),
            n.a.createElement(
              "div",
              { className: "mb-form__row" },
              n.a.createElement(
                "div",
                { className: "mb-form__row--col2" },
                null == s.userMobile
                  ? n.a.createElement(oe, {
                      id: "userMobile",
                      setter: v,
                      value: b,
                      label: "Phone No",
                      errorFor: "Phone No",
                      nullID: u,
                      setNullID: p,
                    })
                  : null
              ),
              n.a.createElement(
                "div",
                { className: "mb-form__row--col2" },
                null == s.userEmail
                  ? n.a.createElement(oe, {
                      id: "userEmail",
                      setter: g,
                      value: f,
                      label: "Email",
                      errorFor: "Email",
                      nullID: u,
                      setNullID: p,
                    })
                  : null
              )
            ),
            "" != O
              ? n.a.createElement(
                  "div",
                  { className: "mb-share-feed__notification" },
                  O
                )
              : null,
            n.a.createElement(
              "div",
              { className: "mb-srp__action action--right" },
              n.a.createElement(
                "span",
                {
                  className: "mb-srp__action--btn btn-red large",
                  onClick: function () {
                    return h(Q(t, d, b, f, "Not Sure", m, a, o, l, 0, p, D));
                  },
                },
                "Submit"
              )
            )
          )
        )
      );
    }
    function me(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var a =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != a) {
            var r,
              n,
              o,
              c,
              i = [],
              l = !0,
              s = !1;
            try {
              if (((o = (a = a.call(e)).next), 0 === t)) {
                if (Object(a) !== a) return;
                l = !1;
              } else
                for (
                  ;
                  !(l = (r = o.call(a)).done) &&
                  (i.push(r.value), i.length !== t);
                  l = !0
                );
            } catch (e) {
              (s = !0), (n = e);
            } finally {
              try {
                if (
                  !l &&
                  null != a.return &&
                  ((c = a.return()), Object(c) !== c)
                )
                  return;
              } finally {
                if (s) throw n;
              }
            }
            return i;
          }
        })(e, t) ||
        (function (e, t) {
          var a;
          if (e)
            return "string" == typeof e
              ? ye(e, t)
              : "Map" ===
                  (a =
                    "Object" ===
                      (a = Object.prototype.toString.call(e).slice(8, -1)) &&
                    e.constructor
                      ? e.constructor.name
                      : a) || "Set" === a
              ? Array.from(e)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? ye(e, t)
              : void 0;
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function ye(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    function be(e) {
      var t = e.propertyId,
        a = e.setHeaderError,
        o = e.setFeedbackActive,
        i = e.propertyGaObj,
        l = e.userInfoData,
        s = e.nullID,
        u = e.setNullID,
        p = (e = me(Object(r.useState)(""), 2))[0],
        d =
          ((e = e[1]),
          (m = me(
            Object(r.useState)(null != l.userMobile ? l.userMobile : ""),
            2
          ))[0]),
        m = m[1],
        y = (b = me(
          Object(r.useState)(null != l.userEmail ? l.userEmail : ""),
          2
        ))[0],
        b = b[1],
        v = Object(c.c)(),
        f = me(Object(r.useState)(""), 2),
        g = f[0],
        h = f[1];
      return n.a.createElement(
        n.a.Fragment,
        null,
        n.a.createElement(
          "div",
          { className: "mb-share-feed__yes", id: "shareFeedback-yes" },
          n.a.createElement(ce, { title: "Yes, all information is correct." }),
          n.a.createElement(
            "div",
            { className: "mb-share-feed--sub-heading" },
            "How about sharing your experience with us."
          ),
          n.a.createElement(
            "div",
            { className: "mb-form" },
            n.a.createElement(
              "div",
              { className: "mb-form__row" },
              n.a.createElement(oe, {
                id: "comments",
                setter: e,
                value: p,
                label: "Share it here/Comments",
                errorFor: "comments",
                nullID: s,
                setNullID: u,
              })
            ),
            n.a.createElement(
              "div",
              { className: "mb-form__row" },
              n.a.createElement(
                "div",
                { className: "mb-form__row--col2" },
                null == l.userMobile
                  ? n.a.createElement(oe, {
                      id: "userMobile",
                      setter: m,
                      value: d,
                      label: "Phone No",
                      errorFor: "Phone No",
                      nullID: s,
                      setNullID: u,
                    })
                  : null
              ),
              n.a.createElement(
                "div",
                { className: "mb-form__row--col2" },
                null == l.userEmail
                  ? n.a.createElement(oe, {
                      id: "userEmail",
                      setter: b,
                      value: y,
                      label: "Email",
                      errorFor: "Email",
                      nullID: s,
                      setNullID: u,
                    })
                  : null
              )
            ),
            "" != g
              ? n.a.createElement(
                  "div",
                  { className: "mb-share-feed__notification" },
                  g
                )
              : null,
            n.a.createElement(
              "div",
              { className: "mb-srp__action action--right" },
              n.a.createElement(
                "span",
                {
                  className: "mb-srp__action--btn btn-red large",
                  onClick: function () {
                    return v(Q(t, p, d, y, "Yes", "", a, o, i, 0, u, h));
                  },
                },
                "Submit"
              )
            )
          )
        )
      );
    }
    function ve(e) {
      return (ve =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function fe(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function ge(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? fe(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== ve(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== ve((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === ve(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : fe(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    function he(e) {
      var t = e.setFeedbackActive,
        a = e.propertyGaObj,
        r = e.setNullID,
        o = e.setHeaderError,
        i = Object(c.c)();
      return n.a.createElement(
        n.a.Fragment,
        null,
        n.a.createElement(
          "div",
          { className: "mb-share-feed__step1" },
          n.a.createElement(
            "div",
            { className: "mb-share-feed__title" },
            n.a.createElement(
              "div",
              { className: "mb-share-feed__title--text1" },
              "Let us know your feedback",
              n.a.createElement("br", null),
              "this will allow us to serve you better"
            ),
            n.a.createElement(
              "div",
              { className: "mb-share-feed__title--text3" },
              "Are the details of the listing correct?"
            )
          ),
          n.a.createElement(
            "div",
            { className: "mb-share-feed__options" },
            n.a.createElement(
              "span",
              {
                className: "mb-share-feed__options--item",
                onClick: function () {
                  i(
                    Object(I.e)(
                      ge(
                        {
                          event: "event_tracking",
                          eventName: "revamp_srp_dynamic_listing",
                          nonInteraction: !1,
                          eventCategory: "revamp srp - report listing",
                          eventAction: "1. Experience Selected",
                          eventLabel: "Yes",
                          eventValue: "",
                        },
                        a
                      )
                    )
                  ),
                    r(null),
                    o(""),
                    t(2);
                },
              },
              "Yes"
            ),
            n.a.createElement(
              "span",
              {
                className: "mb-share-feed__options--item",
                onClick: function () {
                  i(
                    Object(I.e)(
                      ge(
                        {
                          event: "event_tracking",
                          eventName: "revamp_srp_dynamic_listing",
                          nonInteraction: !1,
                          eventCategory: "revamp srp - report listing",
                          eventAction: "1. Experience Selected",
                          eventLabel: "No",
                          eventValue: "",
                        },
                        a
                      )
                    )
                  ),
                    r(null),
                    o(""),
                    t(3);
                },
              },
              "No"
            ),
            n.a.createElement(
              "span",
              {
                className: "mb-share-feed__options--item",
                onClick: function () {
                  i(
                    Object(I.e)(
                      ge(
                        {
                          event: "event_tracking",
                          eventName: "revamp_srp_dynamic_listing",
                          nonInteraction: !1,
                          eventCategory: "revamp srp - report listing",
                          eventAction: "1. Experience Selected",
                          eventLabel: "Unreachable",
                          eventValue: "",
                        },
                        a
                      )
                    )
                  ),
                    r(null),
                    o(""),
                    t(4);
                },
              },
              "Advertiser Not Reachable"
            )
          )
        )
      );
    }
    function _e() {
      return n.a.createElement(
        "div",
        { className: "mb-share-feed__thanks" },
        n.a.createElement("div", { className: "mb-share-feed__thanks--tick" }),
        n.a.createElement(
          "div",
          { className: "mb-share-feed__thanks--heading" },
          "Thank You!!"
        ),
        n.a.createElement(
          "div",
          { className: "mb-share-feed__thanks--subheading" },
          "We appreciate your valuable and honest review."
        )
      );
    }
    function Oe(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var a =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != a) {
            var r,
              n,
              o,
              c,
              i = [],
              l = !0,
              s = !1;
            try {
              if (((o = (a = a.call(e)).next), 0 === t)) {
                if (Object(a) !== a) return;
                l = !1;
              } else
                for (
                  ;
                  !(l = (r = o.call(a)).done) &&
                  (i.push(r.value), i.length !== t);
                  l = !0
                );
            } catch (e) {
              (s = !0), (n = e);
            } finally {
              try {
                if (
                  !l &&
                  null != a.return &&
                  ((c = a.return()), Object(c) !== c)
                )
                  return;
              } finally {
                if (s) throw n;
              }
            }
            return i;
          }
        })(e, t) ||
        (function (e, t) {
          var a;
          if (e)
            return "string" == typeof e
              ? De(e, t)
              : "Map" ===
                  (a =
                    "Object" ===
                      (a = Object.prototype.toString.call(e).slice(8, -1)) &&
                    e.constructor
                      ? e.constructor.name
                      : a) || "Set" === a
              ? Array.from(e)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? De(e, t)
              : void 0;
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function De(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    function je(e) {
      var t = e.feedbackActive,
        a = e.setFeedbackActive,
        o = e.propertyId,
        c = e.propertyGaObj,
        i = ((e = e.userInfoData), (l = Oe(Object(r.useState)(!1), 2))[0]),
        l = l[1],
        s = (u = Oe(Object(r.useState)(null), 2))[0],
        u = u[1];
      return n.a.createElement(
        n.a.Fragment,
        null,
        n.a.createElement(
          "div",
          { className: "mb-dialog__body" },
          n.a.createElement(
            "div",
            { className: "mb-share-feed" },
            5 === t
              ? n.a.createElement(_e, null)
              : 1 === t
              ? n.a.createElement(he, {
                  setFeedbackActive: a,
                  headerError: i,
                  setHeaderError: l,
                  propertyGaObj: c,
                  nullID: s,
                  setNullID: u,
                })
              : 4 === t
              ? n.a.createElement(de, {
                  setFeedbackActive: a,
                  propertyId: o,
                  headerError: i,
                  setHeaderError: l,
                  propertyGaObj: c,
                  userInfoData: e,
                  nullID: s,
                  setNullID: u,
                })
              : 3 === t
              ? n.a.createElement(se, {
                  setFeedbackActive: a,
                  propertyId: o,
                  headerError: i,
                  setHeaderError: l,
                  propertyGaObj: c,
                  userInfoData: e,
                  nullID: s,
                  setNullID: u,
                })
              : 2 === t &&
                n.a.createElement(be, {
                  setFeedbackActive: a,
                  propertyId: o,
                  headerError: i,
                  setHeaderError: l,
                  propertyGaObj: c,
                  userInfoData: e,
                  nullID: s,
                  setNullID: u,
                })
          )
        )
      );
    }
    function Se(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    function Pe() {
      var e = Object(c.c)(),
        t = (o = (function (e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var a =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != a) {
                var r,
                  n,
                  o,
                  c,
                  i = [],
                  l = !0,
                  s = !1;
                try {
                  if (((o = (a = a.call(e)).next), 0 === t)) {
                    if (Object(a) !== a) return;
                    l = !1;
                  } else
                    for (
                      ;
                      !(l = (r = o.call(a)).done) &&
                      (i.push(r.value), i.length !== t);
                      l = !0
                    );
                } catch (e) {
                  (s = !0), (n = e);
                } finally {
                  try {
                    if (
                      !l &&
                      null != a.return &&
                      ((c = a.return()), Object(c) !== c)
                    )
                      return;
                  } finally {
                    if (s) throw n;
                  }
                }
                return i;
              }
            })(e, t) ||
            (function (e, t) {
              var a;
              if (e)
                return "string" == typeof e
                  ? Se(e, t)
                  : "Map" ===
                      (a =
                        "Object" ===
                          (a = Object.prototype.toString
                            .call(e)
                            .slice(8, -1)) && e.constructor
                          ? e.constructor.name
                          : a) || "Set" === a
                  ? Array.from(e)
                  : "Arguments" === a ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                  ? Se(e, t)
                  : void 0;
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        })(Object(r.useState)(1), 2))[0],
        a = o[1],
        o = Object(c.d)(function (e) {
          return e.feedback;
        }),
        i = Object(c.d)(function (e) {
          return e.userInfoData;
        });
      return n.a.createElement(
        n.a.Fragment,
        null,
        o.showFeedbackPopup &&
          n.a.createElement(
            "div",
            { className: "mb-dialog open" },
            n.a.createElement(
              "div",
              {
                className: "mb-dialog__box",
                style: { width: "705px", height: "auto" },
              },
              (2 === t || 3 === t || 4 === t) &&
                n.a.createElement(
                  "span",
                  {
                    className: "mb-dialog--go-back",
                    onClick: function () {
                      return a(1);
                    },
                  },
                  "Go Back"
                ),
              n.a.createElement("span", {
                className: "mb-dialog--close",
                onClick: function () {
                  e({
                    type: "CLOSE_FEEDBACK",
                    payload: { showFeedbackPopup: !0 },
                  }),
                    a(1);
                },
              }),
              n.a.createElement(je, {
                feedbackActive: t,
                setFeedbackActive: a,
                propertyId: o.propertyId,
                propertyGaObj: o.propertyGaObj,
                userInfoData: i,
              })
            )
          )
      );
    }
    function Ne(e) {
      var t = e.editUrl,
        a =
          ((e =
            (e.editReq,
            e.setEditReq,
            e.userInfoData,
            e.source,
            Object(c.d)(function (e) {
              return e.feedback;
            }),
            Object(c.d)(function (e) {
              return e.clientBean;
            }))),
          Object(c.c)());
      return n.a.createElement(
        n.a.Fragment,
        null,
        "true" == e.editReq &&
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              "div",
              { className: "save-search-popup" },
              n.a.createElement("div", {
                className: "save-search-popup__close",
                onClick: function () {
                  a({ type: "editReq", payload: "false" }),
                    a({ type: "backhistory", payload: 1 });
                },
              }),
              n.a.createElement("iframe", {
                src: t,
                className: "save-search-popup__iframe",
              })
            ),
            n.a.createElement("div", { className: "save-search-overlay" })
          )
      );
    }
    var we = a(295),
      Ee = a(880),
      Te = a(114);
    function ke(e) {
      Object(c.d)(function (e) {
        return e.userInfoData;
      }),
        Object(c.d)(function (e) {
          return e.searchAdditionalDataBean;
        });
      var t = Object(c.c)();
      return (
        Object(r.useEffect)(function () {
          e.showPrimeBanner &&
            t(
              Object(I.e)(
                (function (t) {
                  return {
                    event: "event_tracking",
                    eventName: "revamp_srp_dynamic_listing",
                    nonInteraction: !0,
                    eventCategory: "mb prime entry point impression",
                    eventAction:
                      "MB Prime_SRP_Top_StaticBanner " +
                      (t ? "Clicked_" : "Shown_") +
                      (null != e.searchBeanData.propertyType &&
                      "" != e.searchBeanData.propertyType
                        ? e.searchBeanData.propertyType
                        : "") +
                      "_" +
                      (null != e.searchBeanData.category &&
                      "" != e.searchBeanData.category &&
                      "r" != e.searchBeanData.category.toLowerCase()
                        ? "S"
                        : "R"),
                    eventLabel: e.freeOwnerContact,
                    eventValue: "",
                    cd21: e.searchBeanData.propertyType,
                  };
                })(!1)
              )
            ),
            void 0 !== e.searchBeanData &&
              void 0 !== e.additionalSearchBeanData &&
              t(Object(Te.a)());
        }, []),
        Object(c.d)(function (e) {
          return e.mbPrimeState.dropOffData;
        }),
        n.a.createElement(
          n.a.Fragment,
          null,
          e.showNonPrimeBanners() &&
            e.showPayRentBanner &&
            "Y" != e.additionalSearchBeanData.isNearMeSeoUrl &&
            n.a.createElement(
              "a",
              {
                href: "https://www.magicbricks.com/propertyservices/pay-property-rent-online.html?inc=Desktop_SRP_rent_top_banner",
                target: "_blank",
                className: "mb-srp__bnr-payrent-top",
              },
              n.a.createElement(
                "div",
                { className: "mb-srp__bnr-payrent-top__left" },
                n.a.createElement(
                  "div",
                  { className: "mb-srp__bnr-payrent-top--title" },
                  "Pay rent online with Credit Card"
                ),
                n.a.createElement(
                  "div",
                  { className: "mb-srp__action action--single" },
                  n.a.createElement(
                    "span",
                    { className: "mb-srp__action--btn btn-red medium" },
                    "Explore Now"
                  )
                ),
                n.a.createElement(
                  "span",
                  { className: "mb-srp__bnr-payrent-top--tnc" },
                  "*T&C apply"
                )
              ),
              n.a.createElement(
                "div",
                { className: "mb-srp__bnr-payrent-top__right" },
                n.a.createElement(
                  "div",
                  { className: "mb-srp__bnr-payrent-top__card" },
                  n.a.createElement("div", {
                    className: "mb-srp__bnr-payrent-top__card--graphic elem-1",
                  }),
                  n.a.createElement(
                    "div",
                    { className: "mb-srp__bnr-payrent-top__card--heading" },
                    "Get up to ",
                    n.a.createElement(
                      "span",
                      { className: "highlight" },
                      n.a.createElement("span", { className: "rupees" }, "₹"),
                      "3,000"
                    ),
                    n.a.createElement("br", null),
                    "cashback"
                  ),
                  n.a.createElement(
                    "div",
                    { className: "mb-srp__bnr-payrent-top__card--timer" },
                    "Over 3 months"
                  )
                ),
                n.a.createElement(
                  "div",
                  { className: "mb-srp__bnr-payrent-top__card" },
                  n.a.createElement("div", {
                    className: "mb-srp__bnr-payrent-top__card--graphic elem-2",
                  }),
                  n.a.createElement(
                    "div",
                    { className: "mb-srp__bnr-payrent-top__card--heading" },
                    "Get ",
                    n.a.createElement(
                      "span",
                      { className: "highlight" },
                      n.a.createElement("span", { className: "rupees" }, "₹"),
                      "2,021"
                    ),
                    " worth of",
                    n.a.createElement("br", null),
                    "vouchers"
                  ),
                  n.a.createElement(
                    "div",
                    { className: "mb-srp__bnr-payrent-top__card--timer" },
                    "Over 3 months"
                  )
                ),
                n.a.createElement(
                  "div",
                  { className: "mb-srp__bnr-payrent-top__card" },
                  n.a.createElement("div", {
                    className: "mb-srp__bnr-payrent-top__card--graphic elem-3",
                  }),
                  n.a.createElement(
                    "div",
                    { className: "mb-srp__bnr-payrent-top__card--heading" },
                    "Get flat ",
                    n.a.createElement("span", { className: "highlight" }, "5%"),
                    " Cashback",
                    n.a.createElement("br", null),
                    "upto ",
                    n.a.createElement(
                      "span",
                      { className: "highlight" },
                      n.a.createElement("span", { className: "rupees" }, "₹"),
                      "350"
                    )
                  ),
                  n.a.createElement(
                    "div",
                    { className: "mb-srp__bnr-payrent-top__card--timer" },
                    "On any credit or debit card"
                  )
                )
              )
            ),
          "Y" != e.additionalSearchBeanData.isNearMeSeoUrl &&
            null != e.additionalSearchBeanData.nriUser &&
            null != e.additionalSearchBeanData.nriUser &&
            "Y" == e.additionalSearchBeanData.nriUser &&
            n.a.createElement(
              "div",
              { class: "mb-srp__mbprime" },
              n.a.createElement(
                "a",
                {
                  href: "https://www.magicbricks.com/mbprime/primePackages?source=MBPrime_SRP_Top-mbprimesrpslotonetemplateOne&category=S&ptype=10002",
                  target: "_blank",
                },
                n.a.createElement(
                  "div",
                  { class: "mb-srp__mbprime__body" },
                  n.a.createElement(
                    "div",
                    { class: "mb-srp__mbprime__title" },
                    n.a.createElement(
                      "div",
                      { class: "mb-srp__mbprime__title--text3" },
                      "Introducing  ",
                      n.a.createElement(
                        "span",
                        { class: "text-prime" },
                        "MB Prime"
                      )
                    ),
                    n.a.createElement(
                      "div",
                      { class: "mb-srp__mbprime__title--text5" },
                      "Get complete support in Property Search with a Relationship Manager "
                    )
                  ),
                  n.a.createElement(
                    "ul",
                    { class: "mb-srp__mbprime__list" },
                    n.a.createElement(
                      "li",
                      { class: "mb-srp__mbprime__list--item" },
                      "Shortlisting of  Properties for you"
                    ),
                    n.a.createElement(
                      "li",
                      { class: "mb-srp__mbprime__list--item" },
                      "Making follow-up calls"
                    ),
                    n.a.createElement(
                      "li",
                      { class: "mb-srp__mbprime__list--item" },
                      "Visiting the site on your behalf"
                    )
                  ),
                  n.a.createElement(
                    "div",
                    { class: "mb-srp__action" },
                    n.a.createElement(
                      "span",
                      { class: "mb-srp__action--btn btn-red large" },
                      "Know More"
                    )
                  )
                )
              )
            )
        )
      );
    }
    a(1820);
    var Ce = a(837),
      Ae = a(878),
      Ie = a(838),
      Le = a(887),
      xe = a(888),
      Be = a(434),
      Fe = a(571),
      Re = a(839),
      Ue = a(840),
      Me = (a(664), a(841)),
      Ve = a(564),
      qe = a(565),
      Ye = a(842),
      Ge = a(843),
      We = a(883),
      He = a(156),
      ze = a(879),
      Je = a(890),
      Ke = a(352),
      $e = a(875),
      Qe = a(45),
      Xe = a(47),
      Ze = a(74),
      et = a(844),
      tt = a(845),
      at = a(885),
      rt = a(886),
      nt = a(846),
      ot = a(435),
      ct = a(450),
      it = (a(1821), a(891)),
      lt = a(55),
      st = a(847),
      ut = a(848),
      pt = a(25),
      dt = a(436);
    function mt(e) {
      Object(r.useEffect)(function () {
        e.dispatch(
          Object(I.e)(
            t(
              "revamp srp-banner-skyscrapper-web",
              "post-property-load",
              "post-property-load"
            )
          )
        );
      }, []);
      var t = function (e, t, a) {
        return {
          event: "event_tracking",
          eventName: "revamp_srp-banner-skyscrapper-web",
          nonInteraction: !0,
          eventCategory: e,
          eventAction: t,
          eventLabel: a,
          eventValue: "",
        };
      };
      return n.a.createElement(
        n.a.Fragment,
        null,
        n.a.createElement(
          "div",
          {
            className: "mb-srp-pProp",
            onClick: function () {
              e.dispatch(
                Object(I.e)(
                  t(
                    "revamp srp-banner-skyscrapper-web",
                    "post-property-clicked",
                    "post-property-clicked"
                  )
                )
              ),
                window.open(
                  "https://post.magicbricks.com?inc=propertysrp-skyscrapperbanner-postproperty",
                  "_blank"
                );
            },
          },
          n.a.createElement(
            "div",
            { className: "mb-srp-pProp__rentSell" },
            n.a.createElement(
              "div",
              { className: "mb-srp-pProp__rentSell--text" },
              "Sell/Rent your Property with us for ",
              n.a.createElement("span", { class: "greenText" }, "Free")
            )
          ),
          n.a.createElement(
            "div",
            { className: "mb-srp-pProp__sub-line" },
            "Find Buyers & Tenants easily"
          ),
          n.a.createElement(
            "div",
            { className: "mb-srp-pProp__ctaCont" },
            n.a.createElement(
              "span",
              { className: "mb-srp-pProp__cta" },
              "Post Property"
            )
          ),
          n.a.createElement(
            "div",
            { className: "mb-srp-pProp__listing" },
            n.a.createElement(
              "div",
              { className: "mb-srp-pProp__listing--heading" },
              "Here's why Magicbricks:"
            ),
            n.a.createElement(
              "ul",
              { className: "mb-srp-pProp__listing--list sale-listing" },
              n.a.createElement(
                "li",
                { className: "mb-srp-pProp__listing--listValue" },
                "Get Access to 4 Lakh + Buyers"
              ),
              n.a.createElement(
                "li",
                { className: "mb-srp-pProp__listing--listValue" },
                "Sell Faster with Premium Service"
              ),
              n.a.createElement(
                "li",
                { className: "mb-srp-pProp__listing--listValue" },
                "Find only Genuine Leads"
              ),
              n.a.createElement(
                "li",
                { className: "mb-srp-pProp__listing--listValue" },
                "Get Expert advice on Market Trends & insights"
              )
            )
          )
        )
      );
    }
    var yt = a(876),
      bt = a(566),
      vt = a(849),
      ft = a(850),
      gt = a(892),
      ht = a(851),
      _t = a(852),
      Ot = a(853),
      Dt = a(854),
      jt = a(855),
      St = a(856),
      Pt = a(857),
      Nt = a(877),
      wt = a(893);
    function Et(e) {
      return (Et =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Tt(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function kt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Tt(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== Et(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== Et((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === Et(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : Tt(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    function Ct(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var a =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != a) {
            var r,
              n,
              o,
              c,
              i = [],
              l = !0,
              s = !1;
            try {
              if (((o = (a = a.call(e)).next), 0 === t)) {
                if (Object(a) !== a) return;
                l = !1;
              } else
                for (
                  ;
                  !(l = (r = o.call(a)).done) &&
                  (i.push(r.value), i.length !== t);
                  l = !0
                );
            } catch (e) {
              (s = !0), (n = e);
            } finally {
              try {
                if (
                  !l &&
                  null != a.return &&
                  ((c = a.return()), Object(c) !== c)
                )
                  return;
              } finally {
                if (s) throw n;
              }
            }
            return i;
          }
        })(e, t) ||
        (function (e, t) {
          var a;
          if (e)
            return "string" == typeof e
              ? At(e, t)
              : "Map" ===
                  (a =
                    "Object" ===
                      (a = Object.prototype.toString.call(e).slice(8, -1)) &&
                    e.constructor
                      ? e.constructor.name
                      : a) || "Set" === a
              ? Array.from(e)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? At(e, t)
              : void 0;
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function At(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    function It(e) {
      function t() {
        return !(void 0 !== be && be);
      }
      function a() {
        Et(!0);
      }
      var o = Object(c.d)(function (e) {
          return e.searchResult;
        }),
        v = (o = Ct(Object(r.useState)(o), 2))[0],
        f = o[1],
        g = Object(c.d)(function (e) {
          return e.searchBean;
        }),
        S = Object(c.d)(function (e) {
          return e.contactData;
        }),
        P = Object(c.d)(function (e) {
          return e.contactCtaData;
        }),
        N = Object(c.d)(function (e) {
          return e.userInfoData;
        }),
        w = Object(c.d)(function (e) {
          return e.searchAdditionalDataBean;
        }),
        E =
          ((o = Object(c.d)(function (e) {
            return e.qlist;
          })),
          Object(c.d)(function (e) {
            return e.QlistNoSchema;
          })),
        T = Object(c.d)(function (e) {
          return e.seoContentData;
        }),
        k = Object(c.d)(function (e) {
          return e.constantDataBean;
        }),
        C = (z = Ct(Object(r.useState)(!1), 2))[0],
        A = z[1],
        L =
          ((z = Ct(
            h(function () {
              return g.pageNo < parseInt(w.pageCount) ? x({ type: m.i }) : "";
            }),
            2
          ))[0],
          z[1]),
        x = Object(c.c)(),
        B = (z = Ct(Object(r.useState)(!0), 2))[0],
        F = z[1],
        R = (z = Ct(Object(r.useState)(!1), 2))[0],
        U = z[1],
        M = (z = Ct(
          Object(r.useState)(!(null == w.isSeoSearch || !w.isSeoSearch)),
          2
        ))[0],
        V = z[1],
        q = (z = Ct(
          Object(r.useState)(
            void 0 !== v && null != v && void 0 !== v.length && 0 != v.length
          ),
          2
        ))[0],
        Y = z[1],
        z = Object(j.o)(w),
        J = ($ = Ct(
          Object(r.useState)(
            Object(c.d)(function (e) {
              return e.nsrResultList;
            })
          ),
          2
        ))[0],
        K = $[1],
        $ = Object(c.d)(function (e) {
          return e.navigationRecordsMap;
        }),
        Q = (ie = Ct(Object(r.useState)(!1), 2))[0],
        X = ie[1],
        Z = (ie = Ct(
          Object(r.useState)(
            S.requestBody && S.nonPrimeUserFreeOwnerLimitUsed
              ? S.nonPrimeUserFreeOwnerLimitUsed
              : 0
          ),
          2
        ))[0];
      ie[1];
      var ee = (ie = Ct(Object(r.useState)(Object(Ue.a)(w)), 2))[0];
      ie[1];
      var te = (ie = Ct(Object(r.useState)(null), 2))[0];
      ie[1];
      var ae = (ie = Ct(
          Object(r.useState)(function () {
            return k.flotingFiltermap;
          }),
          2
        ))[0],
        re = ie[1],
        ne = (ie = Ct(Object(r.useState)(null), 2))[0],
        oe = ie[1],
        ce = Object(c.d)(function (e) {
          return e.clientBean;
        }),
        ie =
          null !=
          (ie =
            T &&
            T.AboutLocality &&
            1 <= T.AboutLocality.length &&
            T.AboutLocality[0].locality)
            ? ie
            : z,
        le = (se = Ct(Object(r.useState)(!1), 2))[0],
        se = se[1],
        ue = (pe = Ct(Object(r.useState)(), 2))[0],
        pe = pe[1],
        de = (me = Ct(Object(r.useState)(!1), 2))[0],
        me = me[1],
        ye = Object(c.d)(function (e) {
          return e.multilingualData;
        }),
        be = Object(c.d)(function (e) {
          return e.mbPrimeState.hideNonPrimeBanners;
        }),
        ve =
          (Object(r.useEffect)(
            function () {
              ((null != g.city && "" != g.city) ||
                (null != g.radius && "" != g.radius)) &&
                (w.vnEnableOnStartup &&
                  "false" == w.isNRIUser &&
                  x({ type: "virtualNumberDataAvailable", payload: !0 }),
                B
                  ? F(!1)
                  : ((w.vnEnableOnStartup &&
                      "N" == N.isUserLoggedIn &&
                      null == (null == N ? void 0 : N.userUniqToken)) ||
                      (x({ type: "virtualNumberDataAvailable", payload: !1 }),
                      x({ type: "buyerNumberAvailable", payload: !1 }),
                      x({ type: "isVirtualNumber", payload: !1 }),
                      "undefined" != typeof document &&
                        (p.a.createCookieForVn("virtualNumberData", "", 0),
                        p.a.createCookieForVn("userDropCount", "", 0))),
                    Object(D.a)(g, Y, f, x, K, L, V, v, w, !1, N, ce, Z, k, P),
                    "plot" == g.search &&
                      null == g.appovedAuth &&
                      Object(Ke.b)(g, oe),
                    x(Ze.a.showVirtualNumberFlow(g, w, N, R))));
            },
            [JSON.stringify(g)]
          ),
          Object(r.useEffect)(
            function () {
              ("Y" == w.isNearMeSeoUrl || (null != g.city && "" != g.city)) &&
                (B ? F(!1) : Object(Ge.a)(g, w, S, !1, re));
            },
            [
              g.propertyType,
              g.city,
              g.category,
              g.budgetMin,
              g.budgetMax,
              g.inputListings,
              g.saleType,
              S.contactStatus,
            ]
          ),
          null !== J && 0 < J.length ? J.length : 0),
        fe = Object(W.c)(w.resultCount),
        ge = null !== v && 0 < v.length ? v.length : 0,
        he = Object(I.a)(w),
        _e = Object(Xe.d)(w, g),
        Oe = Ct(Object(r.useState)(""), 2),
        De = Oe[0],
        je = Oe[1],
        Se = (Oe = Ct(Object(r.useState)(!1), 2))[0],
        Et = Oe[1];
      function Tt(e) {
        e.PERMISSION_DENIED
          ? x({
              type: "nearMeSeoJsonData",
              payload: {
                latLong: null,
                error: "Permission Denied",
                errorMsg: "1",
                isLocationFetched: "N",
              },
            })
          : (x({
              type: "nearMeSeoJsonData",
              payload: {
                latLong: null,
                error: "Permission Denied",
                errorMsg: "4",
                isLocationFetched: "N",
              },
            }),
            console.log("Other kind of error: " + e));
      }
      function At() {
        var e = p.a.readCookie("contactedProperties"),
          t = p.a.readCookie("contactCookie");
        console.log(
          "isUserConverted ==>",
          R,
          ", contactProperties ==>",
          e,
          ", contactCookie ==>",
          t
        ),
          R || isEmpty(e) || isEmpty(t) || "Y" !== t || U(!0),
          (t = p.a.readCookie("virtualNumberData"));
        !isEmpty(t) && isStringNumeric(e) && x(Object(d.o)(e));
      }
      function It(e) {
        var t,
          a = "";
        try {
          a =
            "results" !== (e = e.trim()) && e.includes("results")
              ? (t = e.split(" "))[0] +
                " " +
                (null != ye && ye.hasOwnProperty(t[1]) ? ye[t[1]] : t[1])
              : null != ye && ye.hasOwnProperty(e)
              ? ye[e]
              : e;
        } catch (e) {
          console.log(e);
        }
        return a;
      }
      Object(r.useEffect)(function () {
        "Y" !== w.nriUser &&
          "Y" == w.isNearMeSeoUrl &&
          null != (e = navigator) &&
          e.geolocation &&
          navigator.permissions &&
          navigator.permissions
            .query({ name: "geolocation" })
            .then(function (e) {
              "granted" == e.state
                ? navigator.geolocation.getCurrentPosition(function (e) {
                    (e = e.coords.latitude + "," + e.coords.longitude),
                      x({
                        type: "nearMeSeoJsonData",
                        payload: {
                          latLong: e,
                          error: null,
                          errorMsg: "0",
                          isLocationFetched: "Y",
                        },
                      }),
                      x({ type: "nearMeSeo", payload: e + ",5000" }),
                      console.log(e);
                  }, Tt)
                : (x({
                    type: "nearMeSeoJsonData",
                    payload: {
                      latLong: null,
                      error: "Permission Denied",
                      errorMsg: "1",
                      isLocationFetched: "N",
                    },
                  }),
                  console.log("Location permission not granted"));
            }),
          Object(dt.a)(!0, g, w, null, ce, x),
          x({
            type: "CompaignFiltersApplied",
            data: {
              minBudget: g.budgetMin,
              maxBudget: g.budgetMax,
              bhk: g.bhk,
            },
          }),
          Object(ot.a)(g, f, x, v, w, N, k);
        var e = Object(Qe.a)(v);
        try {
          null != v &&
            0 < v.length &&
            x({
              type: "topNudegePropertyInfo",
              payload: {
                encPropId: v[0].encId,
                propId: v[0].id,
                locality: v[0].lt,
              },
            });
        } catch (e) {
          console.log("error in dispatcing prop for top matches nudge");
        }
        var t = Object(Qe.d)(v, N, !1);
        x(
          Object(I.e)(
            kt(
              kt(
                kt(
                  {
                    event: "event_tracking",
                    eventName: "revamp_srp_page_load",
                    nonInteraction: !0,
                    eventCategory: "revamp srp - results load",
                    eventAction: "revamp srp page load",
                    eventLabel: "revamp srp page load",
                    eventValue: ge + ve,
                    cd177: ve,
                    cm11: 1,
                    cd110b: "SRP Load",
                  },
                  e
                ),
                Object(He.a)(w)
              ),
              t
            )
          )
        ),
          "no nsr" !== he &&
            x(
              Object(I.e)({
                event: "event_tracking",
                eventName: "revamp_srp_nsr",
                nonInteraction: !0,
                eventCategory: "nsr",
                eventAction: he,
                eventLabel: "propertysearch",
                eventValue: "",
                cd177: ve,
              })
            ),
          Object(Be.a)(g, w, x),
          (e = Object(b.a)(
            w.isSimPropSearch,
            w.isRadius,
            w.h1TagText,
            w.searchSummary,
            w.resultCount,
            M,
            !1,
            g.pageNo,
            w
          ));
        je(e),
          "plot" == g.search && null == g.appovedAuth && Object(Ke.b)(g, oe),
          x({
            type: "SRP_LOAD",
            payload: kt(kt({}, S), {}, { userActionType: "SRP_LOAD" }),
          }),
          Object(j.a)(),
          [
            "keydown",
            "mousemove",
            "wheel",
            "touchmove",
            "touchstart",
            "touchend",
          ].forEach(function (e) {
            window.addEventListener(e, a, { passive: !0 });
          }),
          w.vnEnableOnStartup &&
            "false" == w.isNRIUser &&
            x({ type: "virtualNumberDataAvailable", payload: !0 }),
          Object(pt.a)() &&
            (Object(pt.h)(w), Object(pt.b)()) &&
            MB_GTM_dataLayer.push(pt.g),
          x(Object(Te.c)()),
          x(Object(d.m)()),
          x(Ze.a.showVirtualNumberFlow(g, w, N, R));
      }, []),
        Object(r.useEffect)(
          function () {
            (window.checkUserConversionFromLDP = At),
              x(Ze.a.showVirtualNumberFlow(g, w, N, R));
          },
          [R]
        ),
        null !==
          (Oe = Object(b.a)(
            w.isSimPropSearch,
            w.isRadius,
            w.h1TagText,
            w.searchSummary,
            w.resultCount,
            M,
            !1,
            g.pageNo,
            w
          )) &&
          "" !== Oe &&
          Oe !== De &&
          je(Oe),
        (null == Oe || "" == Oe) && 0 < fe && (Oe = De);
      De = Object(W.c)(w.projectCount);
      var Lt = Object(W.c)(w.totalPrellaCount),
        xt = Object(W.e)(w),
        Bt = Object(et.a)(v, w, J, !1),
        Ft = (Ut = Ct(
          Object(r.useState)(
            Object(we.a)(w.searchForm, "https://www.magicbricks.com", g, !1, w)
          ),
          2
        ))[0],
        Rt = Ut[1],
        Ut =
          (Ut = null != w.reqUrl ? w.reqUrl : "") && -1 != Ut.indexOf("/page")
            ? Ut.substring(0, Ut.indexOf("/page"))
            : Ut,
        Mt =
          (0 < ve || 0 < fe) &&
          "residential" == g.search &&
          "R" === g.category &&
          w.refreshCount % 2 == 0,
        Vt =
          (0 < ve || 0 < fe) &&
          !Mt &&
          "Y" != N.userPrimeMemberLoggedIn &&
          "plot" != g.search &&
          null !== w.mbPrimeCities &&
          null !== g.city &&
          w.mbPrimeCities.includes(g.city),
        qt = (Yt = Ct(Object(r.useState)(null), 2))[0],
        Yt = Yt[1],
        Gt = Object(j.q)(g, !0),
        Wt = Object(W.b)(w),
        Ht = null == w.reactivationBanner || "N" == w.reactivationBanner;
      return n.a.createElement(
        "div",
        {
          className: "container-fluid",
          onClick: function () {
            C && A(!1);
          },
        },
        n.a.createElement(
          "div",
          { className: "container" },
          n.a.createElement(
            "div",
            { className: "mb-srp" },
            n.a.createElement(
              "div",
              { className: "mb-srp__left" },
              n.a.createElement(Ce.a, {
                breadCrumbData: ee,
                lang: g.language,
                multilingualData: ye,
              }),
              "Y" == w.isNearMeSeoUrl &&
                n.a.createElement(Ye.a, { breadCrumbData: ee }),
              M &&
                ce &&
                ce.nearMeSeoJsonData &&
                "N" == ce.nearMeSeoJsonData.isLocationFetched &&
                "Y" !== w.nriUser &&
                "Y" == w.isNearMeSeoUrl &&
                n.a.createElement(lt.a, null, n.a.createElement(St.a, null)),
              n.a.createElement(lt.a, null, n.a.createElement(rt.a, null)),
              t() &&
                "Y" == N.searchSaved &&
                Object(j.x)() &&
                Gt &&
                Gt.content &&
                Ht
                ? n.a.createElement(nt.a, { isWeb: !0, contentMap: Gt })
                : "Y" == w.nriUser ||
                  (null != N.isUserLoggedIn && "Y" == N.isUserLoggedIn && Ht) ||
                  ("Y" == N.searchSaved && Ht)
                ? n.a.createElement(ke, {
                    showNonPrimeBanners: t,
                    showPayRentBanner: Mt,
                    showPrimeBanner: Vt,
                    freeOwnerContact: Z,
                    searchBeanData: g,
                    additionalSearchBeanData: w,
                  })
                : "",
              t() &&
                n.a.createElement(Ie.a, {
                  searchBeanData: g,
                  localityCorridor: !1,
                  plotCorridorData: qt,
                  setPlotCorridorData: Yt,
                }),
              (null != N.isUserLoggedIn && "Y" == N.isUserLoggedIn) ||
                "Y" == N.searchSaved ||
                "Y" == w.isNearMeSeoUrl
                ? ""
                : n.a.createElement(
                    n.a.Fragment,
                    null,
                    n.a.createElement(Ne, {
                      userInfoData: N,
                      editUrl: Ft,
                      editReq: Q,
                      setEditReq: X,
                      source: "web",
                    })
                  ),
              0 < fe &&
                (null == w.nriCityName || null == w.nriCityName) &&
                n.a.createElement(
                  n.a.Fragment,
                  null,
                  n.a.createElement(i.a, {
                    isSelected: C,
                    setIsSelected: A,
                    result_count: fe,
                    projectCount: De,
                    totalPrellaCount: Lt,
                    searchBean: g,
                    additionalBeanData: w,
                    userInfoData: N,
                    multilingualData: ye,
                  })
                ),
              (0 < fe || 0 < ve) &&
                null != Oe &&
                "" !== Oe &&
                n.a.createElement(
                  "div",
                  { className: "mb-srp__title" },
                  null == w || (null != w.nriCityName && null != w.nriCityName)
                    ? ""
                    : n.a.createElement(
                        "div",
                        { className: "mb-srp__title--text1" },
                        "" != It(Object(W.d)(w.resultCount))
                          ? It(Object(W.d)(w.resultCount)) + " | "
                          : It(Object(W.d)(w.resultCount))
                      ),
                  n.a.createElement(
                    "h1",
                    { className: "mb-srp__title--text1" },
                    Oe
                  ),
                  n.a.createElement(
                    n.a.Fragment,
                    null,
                    "Y" === w.isDsLogicDistGtZero
                      ? n.a.createElement(
                          "span",
                          { className: "mb-srp__title--text1" },
                          " & Similar Properties Nearby"
                        )
                      : n.a.createElement(n.a.Fragment, null)
                  )
                ),
              T &&
                T.srpHeaderDescription &&
                1 <= T.srpHeaderDescription.length &&
                n.a.createElement(jt.a, {
                  srpHeaderDescription: T.srpHeaderDescription[0],
                }),
              "Y" !== w.isNearMeSeoUrl &&
                t() &&
                n.a.createElement(_.a, {
                  bannerTitle: "Society Experts",
                  bannerSubTitle:
                    "Expert agents with best property options for",
                  Society: xt,
                  search: g.search,
                  searchCity: g.city,
                  searchLocality: g.locality,
                  searchOid: g.oid,
                  additionalBeanData: w,
                  propertyType: g.propertyType,
                  category: g.category,
                }),
              _e &&
                0 < _e.length &&
                n.a.createElement("script", {
                  type: "application/ld+json",
                  dangerouslySetInnerHTML: { __html: _e },
                }),
              t() &&
                0 == M &&
                n.a.createElement(at.a, {
                  totalCount: fe,
                  nsrResultCount: ve,
                  isMobile: "N",
                  promotionDefRefNo: "51257",
                }),
              null !== v &&
                0 < v.length &&
                v.map(function (e, a) {
                  return n.a.createElement(
                    n.a.Fragment,
                    null,
                    t() &&
                      !(
                        null != w &&
                        1 == w.isSeoSearch &&
                        null != g &&
                        null != g.pageNo &&
                        1 == g.pageNo
                      ) &&
                      n.a.createElement(y.a, {
                        verifiedpropertyindex: Bt[0],
                        index: a,
                      }),
                    n.a.createElement(u.a, {
                      key: "".concat(e.id, "_").concat(a),
                      cardData: e,
                      searchBeanVal: g,
                      additionalBeanData: w,
                      index: a,
                      multilingualData: ye,
                    }),
                    4 == a &&
                      null != e.ty &&
                      Object(j.p)().includes(e.ty) &&
                      "10000" != e.ty &&
                      null != g &&
                      null != g.category &&
                      ("s" == g.category.toLowerCase() ||
                        "b" == g.category.toLowerCase()) &&
                      n.a.createElement(
                        "div",
                        { className: "mb-srp__loanelgb" },
                        n.a.createElement(
                          lt.a,
                          null,
                          n.a.createElement(wt.a, null)
                        )
                      ),
                    n.a.createElement(it.a, { index: a }),
                    t() &&
                      n.a.createElement(Me.a, {
                        type: g.search,
                        category: g.category,
                        seoSearch: M,
                        index: a,
                        sEObestHomeLoan: w.seoBestHomeLoan,
                        intent: w.intentSeoSlug,
                        cityname: w.cityName,
                        resultList: v,
                        multilingualData: ye,
                      }),
                    n.a.createElement(
                      lt.a,
                      null,
                      t() &&
                        k.isNonSEOPage &&
                        n.a.createElement(G, { index: a, resultList: v })
                    ),
                    t() &&
                      n.a.createElement($e.a, {
                        totalCount: fe,
                        nsrResultCount: ve,
                        searchBean: g,
                        additionalSearchBeanData: w,
                        index: a,
                        userInfoData: N,
                        setEditReq: X,
                        setEditUrl: Rt,
                        editUrl: Ft,
                        breadCrumbData: ee,
                        searchBeanData: g,
                        loadDataUserEvent: Se,
                      }),
                    n.a.createElement(
                      lt.a,
                      null,
                      k.isNonSEOPage &&
                        n.a.createElement(Ae.a, {
                          isMobile: !1,
                          index: a,
                          numberOfContact: Z,
                        }),
                      k.isNonSEOPage &&
                        n.a.createElement(
                          n.a.Fragment,
                          null,
                          t() && Se && n.a.createElement(tt.a, { index: a })
                        ),
                      Se &&
                        n.a.createElement(
                          n.a.Fragment,
                          null,
                          n.a.createElement(Ee.a, {
                            additionalSearchBeanData: w,
                            searchBean: g,
                            index: a,
                          }),
                          n.a.createElement(Le.a, {
                            searchBeanData: g,
                            index: a,
                            additionalSearchBeanData: w,
                          }),
                          n.a.createElement(xe.a, {
                            searchBeanData: g,
                            index: a,
                            additionalSearchBeanData: w,
                          })
                        )
                    ),
                    "Y" == g.shared ||
                      (null != g.bhk && g.bhk.includes("11700")) ||
                      (null != g.budgetMax &&
                        parseInt(g.budgetMax, 10) <= 15e3) ||
                      (null != g.budgetMin && parseInt(g.budgetMin, 10) <= 15e3)
                      ? n.a.createElement(Fe.a, {
                          searchBeanData: g,
                          index: a,
                          additionalSearchBeanData: w,
                          flag: 0,
                        })
                      : n.a.createElement(Fe.a, {
                          searchBeanData: g,
                          index: a,
                          additionalSearchBeanData: w,
                          flag: 1,
                        }),
                    n.a.createElement(lt.a, null),
                    "commercial" == g.search &&
                      n.a.createElement(ze.a, {
                        searchBeanData: g,
                        index: a,
                        additionalSearchBeanData: w,
                        floatingFilterMap: ae,
                        resultList: v,
                      }),
                    ("residential" == g.search || "luxury" == g.search) &&
                      n.a.createElement(We.a, {
                        searchBeanData: g,
                        index: a,
                        additionalSearchBeanData: w,
                        floatingFilterMap: ae,
                        resultList: v,
                      }),
                    "plot" == g.search &&
                      n.a.createElement(Je.a, {
                        searchBeanData: g,
                        index: a,
                        additionalSearchBeanData: w,
                        floatingFilterMap: ae,
                        resultList: v,
                        approvedAuthority: ne,
                      })
                  );
                }),
              n.a.createElement(
                lt.a,
                null,
                ("luxury" != w.searchType ||
                  "S" != g.category ||
                  (null != N.isUserLoggedIn &&
                    "Y" == N.isUserLoggedIn &&
                    null !== w.mbPrimeCities &&
                    null !== g.city &&
                    !w.mbPrimeCities.includes(g.city)) ||
                  "Y" == N.searchSaved ||
                  w.isNearMeSeoUrl,
                ""),
                n.a.createElement(Ne, {
                  userInfoData: N,
                  editUrl: Ft,
                  editReq: Q,
                  setEditReq: X,
                  source: "web",
                })
              ),
              n.a.createElement(H.a, {
                totalCount: fe,
                nsrResultCount: ve,
                additionalSearchBeanData: w,
                searchBeanData: g,
                resultList: v,
                nsrResultList: J,
                sEObestHomeLoan: te,
                verifiedpropertyindex: Bt[1],
                multilingualData: ye,
              }),
              M && 1 == parseInt(w.pageCount)
                ? ""
                : M &&
                  1 < parseInt(w.pageCount) &&
                  (null == w.nriCityName || null == w.nriCityName)
                ? n.a.createElement(O.Pagination, {
                    pageCount: w.pageCount,
                    currentPage: g.pageNo - 1,
                    baseUrl: Ut,
                    callBackPagination: function (e) {
                      x({ type: "seopagination", data: e });
                    },
                  })
                : q
                ? n.a.createElement("div", { id: "mbsrpPagination" })
                : "",
              g &&
                null == g.locality &&
                n.a.createElement(
                  n.a.Fragment,
                  null,
                  T &&
                    T.citySaleSrpTopLocalityInfoSection &&
                    1 <= T.citySaleSrpTopLocalityInfoSection.length &&
                    n.a.createElement(gt.a, {
                      seoTopLocalityData:
                        T.citySaleSrpTopLocalityInfoSection[0],
                      cityName: Wt,
                    }),
                  T &&
                    T.citySaleSrpProjects &&
                    n.a.createElement(bt.a, {
                      seoProjectData: T.citySaleSrpProjects,
                      locName: ie,
                      cityName: Wt,
                      isCitySrp: !0,
                    }),
                  T &&
                    T.citySaleSrpBhkConfigSection &&
                    1 <= T.citySaleSrpBhkConfigSection.length &&
                    n.a.createElement(ht.a, {
                      seoBhkConfigData: T.citySaleSrpBhkConfigSection[0],
                      additionalSearchBeanData: w,
                      cityName: Wt,
                    }),
                  T &&
                    T.citySaleSrpAboutSection &&
                    1 <= T.citySaleSrpAboutSection.length &&
                    n.a.createElement(_t.a, {
                      seoAboutCityData: T.citySaleSrpAboutSection[0],
                      cityName: Wt,
                    }),
                  T &&
                    T.citySaleSrpStampDutySection &&
                    1 <= T.citySaleSrpStampDutySection.length &&
                    n.a.createElement(Ot.a, {
                      seoStampDutySection: T.citySaleSrpStampDutySection[0],
                      cityName: Wt,
                    }),
                  T &&
                    T.citySaleSrpRealEstateSection &&
                    1 <= T.citySaleSrpRealEstateSection.length &&
                    n.a.createElement(Dt.a, {
                      seoRealEstateData: T.citySaleSrpRealEstateSection[0],
                      cityName: Wt,
                    })
                ),
              g &&
                null !== g.locality &&
                n.a.createElement(
                  n.a.Fragment,
                  null,
                  T &&
                    T.AboutLocality &&
                    1 <= T.AboutLocality.length &&
                    n.a.createElement(yt.a, {
                      seoContentLocData: T.AboutLocality[0],
                      locName: ie,
                      cityName: Wt,
                    }),
                  T.srpLocalityPriceTrendDoc &&
                    n.a.createElement(Nt.a, {
                      seoContentData: T,
                      isMobile: !1,
                      loadDataUserEvent: Se,
                    }),
                  T &&
                    T.Projects &&
                    n.a.createElement(bt.a, {
                      seoProjectData: T.Projects,
                      locName: ie,
                      cityName: Wt,
                      category: g.category,
                    }),
                  T &&
                    T.PropertyTypeCard &&
                    n.a.createElement(vt.a, {
                      propertyTypeCard: T.PropertyTypeCard,
                      locName: ie,
                      cityName: Wt,
                    }),
                  T &&
                    T.NrByLoc &&
                    n.a.createElement(ft.a, {
                      nrByLoc: T.NrByLoc,
                      locName: ie,
                      cityName: Wt,
                      category: g.category,
                    })
                ),
              T.investmentZones &&
                0 < T.investmentZones.length &&
                n.a.createElement(Pt.a, { cityName: Wt }),
              n.a.createElement(l.a, {
                isMobile: !1,
                navigationRecordsMap: $,
                Qlist: o,
                QlistNoSchema: E,
                locName: z,
                cityName: g.cityName,
                seoSearch: M,
                qnaHeaderLoc: w.seoFaqLocDesc,
                propType: g.propertyType,
                faqCWDesc: w.coworkingFAQDesc,
                multilingualData: ye,
                lang: g.language,
                additionalSearchBeanData: w,
              }),
              n.a.createElement(
                lt.a,
                null,
                "true" == w.isNRIUser &&
                  w.showNriLiveChatButtonOnSrpMob &&
                  n.a.createElement(
                    n.a.Fragment,
                    null,
                    Se && n.a.createElement(Re.a, { isMobile: !1 })
                  )
              )
            ),
            t() &&
              n.a.createElement(
                "div",
                { className: "mb-srp__right" },
                "Y" == w.isNearMeSeoUrl &&
                  ce.nearMeSeoJsonData.latLong &&
                  w.cityName &&
                  n.a.createElement(Ve.a, {
                    setlocationPoUp: se,
                    cardData: {
                      ct: w.cityName.key,
                      pmtLat: ce.nearMeSeoJsonData.latLong.split(",")[0],
                      pmtLong: ce.nearMeSeoJsonData.latLong.split(",")[1],
                    },
                    setMapActive: me,
                    setMapData: pe,
                    isMapActive: de,
                  }),
                "Y" == w.isNearMeSeoUrl &&
                  ce.nearMeSeoJsonData.latLong &&
                  le &&
                  w.cityName &&
                  n.a.createElement(qe.a, {
                    setlocationPoUp: se,
                    cardData: {
                      ct: w.cityName.key,
                      pmtLat: ce.nearMeSeoJsonData.latLong.split(",")[0],
                      pmtLong: ce.nearMeSeoJsonData.latLong.split(",")[1],
                    },
                    mapData: ue,
                    isMapActive: de,
                    setMapActive: me,
                  }),
                "Y" == w.isNearMeSeoUrl &&
                  !ce.nearMeSeoJsonData.latLong &&
                  w.cityName &&
                  n.a.createElement(Ve.a, {
                    setlocationPoUp: se,
                    cardData: {
                      ct: g.city,
                      pmtLat: w.sp_lmdlatitude,
                      pmtLong: w.sp_lmdlongitude,
                    },
                    setMapActive: me,
                    setMapData: pe,
                    isMapActive: de,
                  }),
                "Y" == w.isNearMeSeoUrl &&
                  !ce.nearMeSeoJsonData.latLong &&
                  le &&
                  w.cityName &&
                  n.a.createElement(qe.a, {
                    setlocationPoUp: se,
                    cardData: {
                      ct: g.city,
                      pmtLat: w.sp_lmdlatitude,
                      pmtLong: w.sp_lmdlongitude,
                    },
                    mapData: ue,
                    isMapActive: de,
                    setMapActive: me,
                  }),
                ("residential" == g.search && g.category,
                n.a.createElement(mt, { dispatch: x })),
                n.a.createElement(
                  lt.a,
                  null,
                  Se &&
                    n.a.createElement(
                      n.a.Fragment,
                      null,
                      n.a.createElement(s.a, null),
                      "luxury" == w.searchType &&
                        "S" == g.category &&
                        n.a.createElement(
                          n.a.Fragment,
                          null,
                          w.refreshCount % 3 == 0 &&
                            n.a.createElement(ct.a, {
                              bannerName: "propertyValuation",
                            }),
                          w.refreshCount % 3 == 1 &&
                            n.a.createElement(ct.a, {
                              bannerName: "safe-investment",
                            }),
                          w.refreshCount % 3 == 2 &&
                            n.a.createElement(ct.a, { bannerName: "home-loan" })
                        )
                    )
                )
              ),
            n.a.createElement(lt.a, null, " ", n.a.createElement(Pe, null)),
            n.a.createElement(
              lt.a,
              null,
              n.a.createElement(Pe, null),
              n.a.createElement(st.a, null)
            )
          ),
          n.a.createElement(
            n.a.Fragment,
            null,
            t() &&
              Se &&
              n.a.createElement(ut.a, { userInfo: N, additionalData: w })
          )
        )
      );
    }
    function Lt(e) {
      var t = e.userInfoData,
        a = e.isMobile,
        o = e.additionalBeanData,
        i = Object(c.c)(),
        l =
          (Object(r.useEffect)(
            function () {
              o.showNps &&
                (l(t, a), i({ type: "showNpsFlag", payload: { showNps: !1 } }));
            },
            [o.showNps]
          ),
          function (e, t) {
            var a = null != e.userName ? e.userName : "Hey!",
              r = null != e.userEmail ? e.userEmail : "a",
              n = null != e.userMobile ? e.userMobile : "9",
              o = null != e.userIsdCode ? e.userIsdCode : "9";
            e = 0;
            "undefined" == typeof mbNps &&
              (s("https://nps.magicbricks.com/npsScript/nps.js?11222021084142"),
              (e = 1500)),
              window.jQuery ||
                s("https://cdn.staticmb.com/scripts/jquery-1.7.2.min.js"),
              setTimeout(function () {
                var e = p.a.readCookie("userNTrackId"),
                  c = "" != n && "9" != n ? n : "" != r && "a" != r ? r : e;
                (mbNps.htmlLocation = "mbSearchNps"),
                  (mbNps.comm_n = a),
                  (mbNps.comm_e = r),
                  (mbNps.comm_m = n),
                  (mbNps.comm_mc = o),
                  (mbNps.comm_ramid = e),
                  (mbNps.provider = "https://nps.magicbricks.com"),
                  (mbNps.source =
                    " undefined" != typeof t && t && 1 == t
                      ? c == e
                        ? "35727"
                        : "35726"
                      : c == e
                      ? "35729"
                      : "35728"),
                  mbNps.init();
              }, e);
          }),
        s = function (e) {
          var t = document.createElement("script");
          (t.type = "application/javascript"),
            (t.src = e),
            document.body.appendChild(t);
        };
      return n.a.createElement(n.a.Fragment, null);
    }
    var xt = a(873),
      Bt = (a(1822), a(299)),
      Ft = a(7),
      Rt = a(551),
      Ut = a(860),
      Mt = a(861),
      Vt = a(862),
      qt = a(568),
      Yt = a(895),
      Gt = a(865);
    function Wt(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var a =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != a) {
            var r,
              n,
              o,
              c,
              i = [],
              l = !0,
              s = !1;
            try {
              if (((o = (a = a.call(e)).next), 0 === t)) {
                if (Object(a) !== a) return;
                l = !1;
              } else
                for (
                  ;
                  !(l = (r = o.call(a)).done) &&
                  (i.push(r.value), i.length !== t);
                  l = !0
                );
            } catch (e) {
              (s = !0), (n = e);
            } finally {
              try {
                if (
                  !l &&
                  null != a.return &&
                  ((c = a.return()), Object(c) !== c)
                )
                  return;
              } finally {
                if (s) throw n;
              }
            }
            return i;
          }
        })(e, t) ||
        (function (e, t) {
          var a;
          if (e)
            return "string" == typeof e
              ? Ht(e, t)
              : "Map" ===
                  (a =
                    "Object" ===
                      (a = Object.prototype.toString.call(e).slice(8, -1)) &&
                    e.constructor
                      ? e.constructor.name
                      : a) || "Set" === a
              ? Array.from(e)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? Ht(e, t)
              : void 0;
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function Ht(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    a(1831);
    (w = a(418)), (T = a(68));
    var zt = a(871),
      Jt = a(8),
      Kt = a(159);
    function $t(e) {
      return ($t =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Qt(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return Xt(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        (function (e, t) {
          var a;
          if (e)
            return "string" == typeof e
              ? Xt(e, t)
              : "Map" ===
                  (a =
                    "Object" ===
                      (a = Object.prototype.toString.call(e).slice(8, -1)) &&
                    e.constructor
                      ? e.constructor.name
                      : a) || "Set" === a
              ? Array.from(e)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? Xt(e, t)
              : void 0;
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function Xt(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    function Zt(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function ea(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Zt(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== $t(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== $t((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === $t(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : Zt(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    function ta() {
      return 0 < arguments.length && void 0 !== arguments[0]
        ? arguments[0]
        : ca;
    }
    var aa = {},
      ra = {},
      na = a(867),
      oa = a(793),
      ca = [],
      ia = [],
      la = [];
    function sa(e) {
      return (sa =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function ua(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function pa(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ua(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== sa(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== sa((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === sa(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : ua(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    var da = {};
    function ma(e) {
      return (ma =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function ya(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function ba(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ya(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== ma(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== ma((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === ma(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : ya(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    var va = [];
    function fa(e) {
      return (fa =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function ga(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    var ha = {};
    function _a(e) {
      return (_a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Oa(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function Da(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Oa(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== _a(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== _a((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === _a(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : Oa(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    var ja = {},
      Sa = [];
    function Pa(e) {
      return (Pa =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Na(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function wa(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Na(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== Pa(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== Pa((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === Pa(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : Na(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    var Ea = { propertyId: "", propertyGaObj: null, showFeedbackPopup: !1 };
    function Ta(e) {
      return (Ta =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function ka(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function Ca(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ka(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== Ta(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== Ta((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === Ta(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : ka(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    var Aa = {
      cardData: null,
      mapData: null,
      isMapActive: !1,
      finalPrice: null,
      cardTitle: null,
    };
    function Ia(e) {
      return (Ia =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function La(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function xa(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? La(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== Ia(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== Ia((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === Ia(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : La(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    var Ba = {
        encPropertyId: null,
        showImageGalleryPopup: !1,
        titleComp: "",
        pdpURLPh: "",
        carDataObj: {},
        isConverted: !1,
        isPhotoGalleryContacted: !1,
      },
      Fa = a(868);
    function Ra(e) {
      return (Ra =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Ua(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function Ma(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Ua(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== Ra(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== Ra((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === Ra(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : Ua(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    var Va = {
      trueCallRequestId: null,
      recentSearchCount: 0,
      lastContactPropertyId: 0,
      resultPropertyIds: 0,
      urlforHistory: "",
      pdppageurl: "",
      editReq: "",
      lastcallfor: "",
      hideFilterPopup: !1,
      backhistory: 0,
      isscrollcalled: !1,
      fromSortBy: null,
      isPropCTAChangeGAFired: !1,
      buyerTaggingBean: null,
      filters: null,
      showRatingPopup: !1,
      seoRichContentSectionReviewData: null,
      virtualNumberDataAvailable: !1,
      buyerNumberAvailable: !1,
      virtualNumberLimitExhaust: !1,
      isShortListFormOpen: !1,
      showVirtualNumberFlow: !1,
      nearMeSeoJsonData: { isLocationFetched: "Y" },
      askWhatsApp2: !1,
    };
    function qa(e) {
      return (qa =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Ya(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function Ga(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Ya(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== qa(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== qa((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === qa(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : Ya(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    var Wa = { viewedProperties: [] };
    function Ha(e) {
      return (Ha =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function za(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function Ja(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? za(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== Ha(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== Ha((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === Ha(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : za(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    var Ka = { popUpsQueue: [] };
    function $a(e) {
      return ($a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Qa(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function Xa(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Qa(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== $a(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== $a((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === $a(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : Qa(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    var Za = {
      isViewWithPrime: !1,
      isPrimeFreeTrial: !1,
      setFreeTrialAfterOtp: !1,
    };
    function er(e) {
      return (er =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function tr(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function ar(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? tr(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== er(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== er((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === er(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : tr(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    var rr = {};
    function nr(e) {
      return (nr =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function or(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    var cr = {};
    function ir(e) {
      return (ir =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function lr(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function sr(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? lr(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== ir(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== ir((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === ir(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : lr(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    var ur = {
      userId: null,
      props: [],
      isShortList: !1,
      shortListGaCommonData: {},
    };
    function pr(e) {
      return (pr =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function dr(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function mr(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? dr(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== pr(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== pr((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === pr(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : dr(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    var yr = {},
      br = a(254),
      vr =
        ((na = Object(T.c)({
          searchBean: function () {
            var e,
              t,
              a,
              r,
              n,
              o,
              c,
              i =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : aa,
              l = 1 < arguments.length ? arguments[1] : void 0;
            if (l.type === m.a)
              return (
                (s = l.data ? l.data.value : null),
                void 0 !== l.isSelected &&
                  (s = Object(Jt.k)(i.bhk, l.data, !0, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    bhk: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if (l.type === m.f) {
              var s = {},
                u = Object(Jt.i)(l.name),
                p = i.search,
                d = null;
              if (
                (l.isSelected || u == p || "plot" == p
                  ? (s = Object(Jt.k)(i.propertyType, l.data, !0, l.isSelected))
                  : ((s = l.data.split("_")),
                    (d = u),
                    (v = i.shared) && (i.shared = null)),
                -1 != s.indexOf("10000") &&
                  -1 == s.indexOf("10002") &&
                  -1 == s.indexOf("10003") &&
                  -1 == s.indexOf("10021") &&
                  -1 == s.indexOf("10022") &&
                  -1 == s.indexOf("10001") &&
                  -1 == s.indexOf("10017"))
              ) {
                for (var y in l.moreFilterArray)
                  1 == Object(Jt.m)(l.moreFilterArray, y) &&
                    (v = i[l.moreFilterArray[y]]) &&
                    ((f = Array.isArray(v)),
                    (i[l.moreFilterArray[y]] = f ? [] : null));
                for (var y in l.topFilterArray)
                  1 == Object(Jt.m)(l.topFilterArray, y) &&
                    (v = i[l.topFilterArray[y]]) &&
                    ((f = Array.isArray(v)),
                    (i[l.topFilterArray[y]] = f ? [] : null));
              }
              var b = i.bhk;
              return (
                ("commercial" != d && "plot" != d) || (b = null),
                ea(
                  ea({}, i),
                  {},
                  d
                    ? {
                        propertyType: s,
                        pageNo: 1,
                        srpAction: "NEW",
                        lastFilter: Object(Jt.l)(
                          i.lastFilter,
                          l.type,
                          !0,
                          l.isSelected
                        ),
                        switchSearchType: d,
                        search: d,
                        bhk: b,
                      }
                    : {
                        propertyType: s,
                        pageNo: 1,
                        srpAction: "NEW",
                        lastFilter: Object(Jt.l)(
                          i.lastFilter,
                          l.type,
                          !0,
                          l.isSelected
                        ),
                      }
                )
              );
            }
            if ("clearAllPropertyType" === l.type)
              return (
                (s = Object(Jt.k)(i.propertyType, l.data, !0, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  { propertyType: s, shared: null, pageNo: 1, srpAction: "NEW" }
                )
              );
            if (l.type === m.e)
              return (
                (s = l.data),
                (d = l.data),
                (r = i.city),
                l.data &&
                Array.isArray(l.data) &&
                0 < l.data.length &&
                l.data[0].includes(",")
                  ? ((n = []),
                    (r = l.data[0].split(",")[1]),
                    l.data.map(function (e) {
                      (e = e.split(",")), n.push(e[0]);
                    }),
                    (s = n))
                  : l.data &&
                    l.data.includes(",") &&
                    ((r = (c = l.data.split(","))[1]), (d = c[0]), (s = c[0])),
                (b = null),
                void 0 !== l.isSelected &&
                  ((s = Object(Jt.k)(i.locality, d, !0, l.isSelected)),
                  (b = Object(Jt.k)(i.localityTop, d, !0, l.isSelected))),
                null == d && i.localityTop
                  ? ((e = []),
                    null !== i.locality &&
                      0 < i.locality.length &&
                      i.locality.map(function (t) {
                        i.localityTop.includes(t) || e.push(t);
                      }),
                    ea(
                      ea({}, i),
                      {},
                      e
                        ? {
                            locality: e,
                            city: r,
                            localityTop: [],
                            pageNo: 1,
                            srpAction: "NEW",
                            lastFilter: Object(Jt.l)(
                              i.lastFilter,
                              l.type,
                              !0,
                              l.isSelected
                            ),
                          }
                        : {
                            locality: [],
                            city: r,
                            localityTop: [],
                            pageNo: 1,
                            srpAction: "NEW",
                            lastFilter: Object(Jt.l)(
                              i.lastFilter,
                              l.type,
                              !0,
                              l.isSelected
                            ),
                          }
                    ))
                  : ea(
                      ea({}, i),
                      {},
                      s
                        ? {
                            locality: s,
                            city: r,
                            ps: b,
                            pageNo: 1,
                            srpAction: "NEW",
                            lastFilter: Object(Jt.l)(
                              i.lastFilter,
                              l.type,
                              !0,
                              l.isSelected
                            ),
                          }
                        : {
                            locality: [],
                            city: r,
                            ps: b,
                            pageNo: 1,
                            srpAction: "NEW",
                            lastFilter: Object(Jt.l)(
                              i.lastFilter,
                              l.type,
                              !0,
                              l.isSelected
                            ),
                          }
                    )
              );
            if (l.type === m.c)
              return (
                (d = s =
                  Object(Jt.k)(i.inputListings, l.data, !0, l.isSelected)),
                "plot" != i.search ||
                  "I" != l.data ||
                  l.isSelected ||
                  (d = [].concat(Qt(d), ["B"])),
                ea(
                  ea({}, i),
                  {},
                  {
                    inputListings: d,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("psmid" === l.type)
              return (
                (o = l.data),
                (r = i.city),
                l.data &&
                Array.isArray(l.data) &&
                0 < l.data.length &&
                l.data[0].includes(",")
                  ? ((t = []),
                    (r = l.data[0].split(",")[1]),
                    l.data.map(function (e) {
                      (e = e.split(",")), t.push(e[0]);
                    }),
                    (o = (o = t).join("_")))
                  : l.data &&
                    l.data.includes(",") &&
                    ((r = (c = l.data.split(","))[1]), (o = c[0])),
                (s = Object(Jt.k)(i.psmid, o, !0, l.isSelected)),
                (b = Object(Jt.k)(i.psmidNearBy, o, !0, l.isSelected)),
                null == o && i.psmidNearBy
                  ? ((a = []),
                    null !== i.psmid &&
                      i.psmid.map(function (e) {
                        i.psmidNearBy.includes(e) || a.push(e);
                      }),
                    ea(
                      ea({}, i),
                      {},
                      {
                        psmid: a,
                        city: r,
                        psmidNearBy: [],
                        pageNo: 1,
                        srpAction: "NEW",
                        lastFilter: Object(Jt.l)(
                          i.lastFilter,
                          l.type,
                          !0,
                          l.isSelected
                        ),
                      }
                    ))
                  : ea(
                      ea({}, i),
                      {},
                      {
                        psmid: s,
                        city: r,
                        psmidNearBy: b,
                        pageNo: 1,
                        srpAction: "NEW",
                        lastFilter: Object(Jt.l)(
                          i.lastFilter,
                          l.type,
                          !0,
                          l.isSelected
                        ),
                      }
                    )
              );
            if ("possessionStatus" === l.type)
              return (
                (s = l.data ? l.data.value : null),
                void 0 !== l.isSelected &&
                  (s = Object(Jt.k)(
                    i.possessionStatus,
                    l.data,
                    !0,
                    l.isSelected
                  )),
                "S" == i.category && "10080" == l.data && l.isSelected
                  ? ea(
                      ea({}, i),
                      {},
                      {
                        possessionStatus: s,
                        pageNo: 1,
                        srpAction: "NEW",
                        possessionIn: null,
                        lastFilter: Object(Jt.l)(
                          i.lastFilter,
                          l.type,
                          !0,
                          l.isSelected
                        ),
                      }
                    )
                  : "S" == i.category && "10081" == l.data && l.isSelected
                  ? ea(
                      ea({}, i),
                      {},
                      {
                        possessionStatus: s,
                        pageNo: 1,
                        srpAction: "NEW",
                        ac: null,
                        lastFilter: Object(Jt.l)(
                          i.lastFilter,
                          l.type,
                          !0,
                          l.isSelected
                        ),
                      }
                    )
                  : ea(
                      ea({}, i),
                      {},
                      {
                        possessionStatus: s,
                        pageNo: 1,
                        srpAction: "NEW",
                        lastFilter: Object(Jt.l)(
                          i.lastFilter,
                          l.type,
                          !0,
                          l.isSelected
                        ),
                      }
                    )
              );
            if ("saleType" === l.type)
              return (
                (s = Object(Jt.k)(i.saleType, l.data, !0, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    saleType: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("possessionIn" === l.type)
              return (
                (s = Object(Jt.k)(i.possessionIn, l.data, !0, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    possessionIn: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("postedSince" === l.type)
              return (
                (s = Object(Jt.k)(i.postedSince, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    postedSince: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("ownershipType" === l.type)
              return (
                (s = Object(Jt.k)(i.ownershipType, l.data, !0, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    ownershipType: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("bathrooms" === l.type)
              return (
                (s = Object(Jt.k)(i.bathrooms, l.data, !0, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    bathrooms: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("furnish" === l.type)
              return (
                (s = l.data ? l.data.value : null),
                void 0 !== l.isSelected &&
                  (s = Object(Jt.k)(i.furnish, l.data, !0, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    furnish: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("facing" === l.type)
              return (
                (s = Object(Jt.k)(i.facing, l.data, !0, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    facing: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("floorNumber" === l.type)
              return (
                (s = Object(Jt.k)(i.floorNumber, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    floorNumber: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("amenities" === l.type)
              return (
                (s = Object(Jt.k)(i.amenities, l.data, !0, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    amenities: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("businessEnalblers" === l.type)
              return (
                (s = Object(Jt.k)(
                  i.businessEnalblers,
                  l.data,
                  !0,
                  l.isSelected
                )),
                ea(
                  ea({}, i),
                  {},
                  {
                    businessEnalblers: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("facilities" === l.type)
              return (
                (s = Object(Jt.k)(i.facilities, l.data, !0, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    facilities: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("funNRelaxation" === l.type)
              return (
                (s = Object(Jt.k)(i.funNRelaxation, l.data, !0, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    funNRelaxation: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("foodNRefreshments" === l.type)
              return (
                (s = Object(Jt.k)(
                  i.foodNRefreshments,
                  l.data,
                  !0,
                  l.isSelected
                )),
                ea(
                  ea({}, i),
                  {},
                  {
                    foodNRefreshments: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("cwParking" === l.type)
              return (
                (s = Object(Jt.k)(i.cwParking, l.data, !0, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    cwParking: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("communityMatters" === l.type)
              return (
                (s = Object(Jt.k)(
                  i.communityMatters,
                  l.data,
                  !0,
                  l.isSelected
                )),
                ea(
                  ea({}, i),
                  {},
                  {
                    communityMatters: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("propertiesIn" === l.type)
              return (
                (s = Object(Jt.k)(i.propertiesIn, l.data, !0, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    propertiesIn: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("subPropertyType" === l.type)
              return (
                (s = Object(Jt.k)(
                  i.propertyType,
                  l.data,
                  !0,
                  l.isSelected,
                  l.type
                )),
                ea(
                  ea({}, i),
                  {},
                  {
                    propertyType: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("imageVideo" === l.type)
              return (
                (s = Object(Jt.k)(i.imageVideo, l.data, !0, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    imageVideo: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("certifiedAgent" === l.type)
              return (
                (s = Object(Jt.k)(i.certifiedAgent, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    certifiedAgent: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("exc" === l.type)
              return (
                (s = Object(Jt.k)(i.exc, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    exc: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("postedBY" === l.type)
              return (
                (s = Object(Jt.k)(i.postedBY, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    postedBY: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("ac" === l.type)
              return (
                (s = Object(Jt.k)(i.ac, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    ac: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("auction" === l.type)
              return (
                (s = Object(Jt.k)(i.auction, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    auction: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("leasedOut" === l.type)
              return (
                (s = Object(Jt.k)(i.leasedOut, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    leasedOut: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("areaUnit" === l.type)
              return (
                (s = Object(Jt.k)(i.areaUnit, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    areaUnit: s,
                    areaFrom: null,
                    areaTo: null,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("areaFrom" === l.type)
              return (
                (s = Object(Jt.k)(i.areaFrom, l.data, !1, l.isSelected)),
                "0" == l.data
                  ? ea(
                      ea({}, i),
                      {},
                      {
                        areaFrom: s,
                        pageNo: 1,
                        srpAction: "NEW",
                        lastFilter: Object(Jt.l)(i.lastFilter, l.type, !0, !0),
                      }
                    )
                  : ea(
                      ea({}, i),
                      {},
                      {
                        areaFrom: s,
                        pageNo: 1,
                        srpAction: "NEW",
                        lastFilter: Object(Jt.l)(i.lastFilter, l.type, !0, !1),
                      }
                    )
              );
            if ("areaTo" === l.type)
              return (
                (s = Object(Jt.k)(i.areaTo, l.data, !1, l.isSelected)),
                "50000" == l.data
                  ? ea(
                      ea({}, i),
                      {},
                      {
                        areaTo: s,
                        pageNo: 1,
                        srpAction: "NEW",
                        lastFilter: Object(Jt.l)(i.lastFilter, l.type, !0, !0),
                      }
                    )
                  : ea(
                      ea({}, i),
                      {},
                      {
                        areaTo: s,
                        pageNo: 1,
                        srpAction: "NEW",
                        lastFilter: Object(Jt.l)(i.lastFilter, l.type, !0, !1),
                      }
                    )
              );
            if ("commGuru" === l.type)
              return (
                (s = Object(Jt.k)(i.commGuru, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    commGuru: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("roadWidth" === l.type)
              return (
                (s = Object(Jt.k)(i.roadWidth, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    roadWidth: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("gateComm" === l.type)
              return (
                (s = Object(Jt.k)(i.gateComm, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    gateComm: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("cornerPlot" === l.type)
              return (
                (s = Object(Jt.k)(i.cornerPlot, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    cornerPlot: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("discountOffers" === l.type)
              return (
                (s = Object(Jt.k)(i.discountOffers, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    discountOffers: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("psmidOC" === l.type)
              return (
                (o = l.data),
                (r = i.city),
                l.data && l.data.includes(",")
                  ? ((r = (c = l.data.split(","))[1]), (o = c[0]))
                  : l.data &&
                    Array.isArray(l.data) &&
                    0 < l.data.length &&
                    l.data[0].includes(",") &&
                    ((n = []),
                    (r = l.data[0].split(",")[1]),
                    l.data.map(function (e) {
                      (e = e.split(",")), n.push(e[0]);
                    }),
                    (o = n)),
                (s = Object(Jt.k)(i.psmidOC, o, !0, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    psmidOC: s,
                    city: r,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("brands" === l.type)
              return (
                (d = l.data),
                (r = i.city),
                l.data && l.data.includes(",")
                  ? ((r = (c = l.data.split(","))[1]), (d = c[0]))
                  : l.data &&
                    Array.isArray(l.data) &&
                    0 < l.data.length &&
                    l.data[0].includes(",") &&
                    ((n = []),
                    (r = l.data[0].split(",")[1]),
                    l.data.map(function (e) {
                      (e = e.split(",")), n.push(e[0]);
                    }),
                    (d = n)),
                (s = Object(Jt.k)(i.brands, d, !0, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    brands: s,
                    city: r,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("transportNearby" === l.type)
              return (
                (b = l.data),
                (r = i.city),
                l.data && l.data.includes(",")
                  ? ((r = (c = l.data.split(","))[1]), (b = c[0]))
                  : l.data &&
                    Array.isArray(l.data) &&
                    0 < l.data.length &&
                    l.data[0].includes(",") &&
                    ((n = []),
                    (r = l.data[0].split(",")[1]),
                    l.data.map(function (e) {
                      (e = e.split(",")), n.push(e[0]);
                    }),
                    (b = n)),
                (s = Object(Jt.k)(i.transportNearby, b, !0, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    transportNearby: s,
                    city: r,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("spaceType" === l.type)
              return (
                (o = l.data),
                (r = i.city),
                l.data && l.data.includes(",")
                  ? ((r = (c = l.data.split(","))[1]), (o = c[0]))
                  : l.data &&
                    Array.isArray(l.data) &&
                    0 < l.data.length &&
                    l.data[0].includes(",") &&
                    ((n = []),
                    (r = l.data[0].split(",")[1]),
                    l.data.map(function (e) {
                      (e = e.split(",")), n.push(e[0]);
                    }),
                    (o = n)),
                (s = Object(Jt.k)(i.spaceType, o, !0, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    spaceType: s,
                    city: r,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("openDays" === l.type)
              return (
                (d = l.data),
                (r = i.city),
                l.data && l.data.includes(",")
                  ? ((r = (c = l.data.split(","))[1]), (d = c[0]))
                  : l.data &&
                    Array.isArray(l.data) &&
                    0 < l.data.length &&
                    l.data[0].includes(",") &&
                    ((n = []),
                    (r = l.data[0].split(",")[1]),
                    l.data.map(function (e) {
                      (e = e.split(",")), n.push(e[0]);
                    }),
                    (d = n)),
                (s = Object(Jt.k)(i.openDays, d, !0, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    openDays: s,
                    city: r,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("openHours" === l.type)
              return (
                (s = Object(Jt.k)(i.openHours, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    openHours: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("venueType" === l.type)
              return (
                (s = Object(Jt.k)(i.venueType, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    venueType: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("appovedAuth" === l.type)
              return (
                (s = l.data ? l.data.value : null),
                void 0 !== l.isSelected &&
                  (s = Object(Jt.k)(i.appovedAuth, l.data, !0, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    appovedAuth: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("verifiedProperties" === l.type)
              return (
                (s = l.data),
                void 0 !== l.isSelected &&
                  (s = Object(Jt.k)(
                    i.verifiedProperties,
                    l.data,
                    !1,
                    l.isSelected
                  )),
                ea(
                  ea({}, i),
                  {},
                  {
                    verifiedProperties: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("reraProperties" === l.type)
              return (
                (s = Object(Jt.k)(i.reraProperties, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    reraProperties: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("reraAgents" === l.type)
              return (
                (s = Object(Jt.k)(i.reraAgents, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    reraAgents: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("socityOnly" === l.type)
              return (
                (s = Object(Jt.k)(i.socityOnly, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    socityOnly: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("tenantPrefer" === l.type)
              return (
                (s = Object(Jt.k)(i.tenantPrefer, l.data, !0, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    tenantPrefer: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("cabins" === l.type)
              return (
                (s = Object(Jt.k)(i.cabins, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    cabins: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("parkings" === l.type)
              return (
                (s = Object(Jt.k)(i.parkings, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    parkings: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("pantry" === l.type)
              return (
                (s = Object(Jt.k)(i.pantry, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    pantry: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("noOfSeats" === l.type)
              return (
                (s = Object(Jt.k)(i.noOfSeats, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    noOfSeats: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("owner" === l.type)
              return (
                (s = Object(Jt.k)(i.owner, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    owner: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("hideviewed" === l.type)
              return (
                (s = Object(Jt.k)(i.hideviewed, l.data, !1, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    hideviewed: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("zone" === l.type)
              return (
                (b = l.data),
                (r = i.city),
                l.data && l.data.includes(",")
                  ? ((r = (c = l.data.split(","))[1]), (b = c[0]))
                  : l.data &&
                    Array.isArray(l.data) &&
                    0 < l.data.length &&
                    l.data[0].includes(",") &&
                    ((n = []),
                    (r = l.data[0].split(",")[1]),
                    l.data.map(function (e) {
                      (e = e.split(",")), n.push(e[0]);
                    }),
                    (b = n)),
                (s = Object(Jt.k)(i.zone, b, !0, l.isSelected)),
                (o = []),
                (o = i.zoneNames ? i.zoneNames : o).push(l.zoneNames),
                l.fromSmartFilterZone
                  ? ea(
                      ea({}, i),
                      {},
                      {
                        zone: s,
                        city: r,
                        pageNo: 1,
                        srpAction: "NEW",
                        lastFilter: Object(Jt.l)(
                          i.lastFilter,
                          l.type,
                          !0,
                          l.isSelected
                        ),
                      }
                    )
                  : ea(
                      ea({}, i),
                      {},
                      {
                        zone: s,
                        city: r,
                        zoneNames: o,
                        pageNo: 1,
                        srpAction: "NEW",
                        lastFilter: Object(Jt.l)(
                          i.lastFilter,
                          l.type,
                          !0,
                          l.isSelected
                        ),
                      }
                    )
              );
            if ("imgVd" === l.type)
              return (
                (s = Object(Jt.k)(i.imgVd, l.data, !0, l.isSelected)),
                ea(
                  ea({}, i),
                  {},
                  {
                    imgVd: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("ps" === l.type)
              return (
                (s = Object(Jt.k)(i.ps, l.data, !0, l.isSelected, l.type)),
                ea(
                  ea({}, i),
                  {},
                  {
                    ps: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("parameter" === l.type)
              return (
                (s = Object(Jt.k)(
                  i.parameter,
                  l.data,
                  !1,
                  l.isSelected,
                  l.type
                )),
                ea(
                  ea({}, i),
                  {},
                  {
                    parameter: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("furnished" === l.type)
              return (
                (s = Object(Jt.k)(
                  i.furnished,
                  l.data,
                  !0,
                  l.isSelected,
                  l.type
                )),
                ea(
                  ea({}, i),
                  {},
                  {
                    furnished: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("nriPref" === l.type)
              return (
                (s = Object(Jt.k)(i.nriPref, l.data, !1, l.isSelected, l.type)),
                ea(
                  ea({}, i),
                  {},
                  {
                    nriPref: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("possessionYears" === l.type)
              return (
                (s = Object(Jt.k)(
                  i.possessionYears,
                  l.data,
                  !0,
                  l.isSelected,
                  l.type
                )),
                ea(
                  ea({}, i),
                  {},
                  {
                    possessionYears: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("budgetMin" === l.type)
              return "0" == l.data
                ? ea(
                    ea({}, i),
                    {},
                    {
                      budgetMin: l.data,
                      pageNo: 1,
                      srpAction: "NEW",
                      lastFilter: Object(Jt.l)(i.lastFilter, l.type, !1, !0),
                    }
                  )
                : ea(
                    ea({}, i),
                    {},
                    {
                      budgetMin: l.data,
                      pageNo: 1,
                      srpAction: "NEW",
                      lastFilter: Object(Jt.l)(i.lastFilter, l.type, !1, !1),
                    }
                  );
            if ("budgetMax" === l.type)
              return "200000000" == l.data
                ? ea(
                    ea({}, i),
                    {},
                    {
                      budgetMax: l.data,
                      pageNo: 1,
                      srpAction: "NEW",
                      lastFilter: Object(Jt.l)(i.lastFilter, l.type, !1, !0),
                    }
                  )
                : ea(
                    ea({}, i),
                    {},
                    {
                      budgetMax: l.data,
                      pageNo: 1,
                      srpAction: "NEW",
                      lastFilter: Object(Jt.l)(i.lastFilter, l.type, !1, !1),
                    }
                  );
            if ("businessType" === l.type)
              return (
                (s = Object(Jt.k)(
                  i.businessType,
                  l.data,
                  !1,
                  l.isSelected,
                  l.type
                )),
                ea(
                  ea({}, i),
                  {},
                  {
                    businessType: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("shared" === l.type)
              return (
                (s = Object(Jt.k)(i.shared, l.data, !1, l.isSelected, l.type)),
                "Y" == l.data && l.isSelected
                  ? ea(
                      ea({}, i),
                      {},
                      {
                        shared: s,
                        gender: null,
                        occupancy: null,
                        pageNo: 1,
                        srpAction: "NEW",
                        lastFilter: Object(Jt.l)(
                          i.lastFilter,
                          l.type,
                          !0,
                          l.isSelected
                        ),
                      }
                    )
                  : ((u = Object(Jt.i)(l.name)),
                    ("commercial" !=
                      (p = (p = i.switchSearchType) || i.search) &&
                      "agricultural" != p) ||
                      (i.propertyType = []),
                    ea(
                      ea({}, i),
                      {},
                      {
                        shared: s,
                        pageNo: 1,
                        srpAction: "NEW",
                        lastFilter: Object(Jt.l)(
                          i.lastFilter,
                          l.type,
                          !0,
                          l.isSelected
                        ),
                        switchSearchType: "residential",
                      }
                    ))
              );
            if ("gender" === l.type)
              return (
                (s = Object(Jt.k)(i.gender, l.data, !1, l.isSelected, l.type)),
                ea(
                  ea({}, i),
                  {},
                  {
                    gender: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("occupancy" === l.type)
              return (
                (s = Object(Jt.k)(
                  i.occupancy,
                  l.data,
                  !0,
                  l.isSelected,
                  l.type
                )),
                ea(
                  ea({}, i),
                  {},
                  {
                    occupancy: s,
                    pageNo: 1,
                    srpAction: "NEW",
                    lastFilter: Object(Jt.l)(
                      i.lastFilter,
                      l.type,
                      !0,
                      l.isSelected
                    ),
                  }
                )
              );
            if ("category" === l.type)
              return (
                (s = Object(Jt.k)(
                  i.category,
                  l.data,
                  !1,
                  l.isSelected,
                  l.type
                )),
                ea(ea({}, i), {}, { category: s, pageNo: 1, srpAction: "NEW" })
              );
            if ("inPurpose" === l.type)
              return "Y" == l.data
                ? ((d = Object(Jt.k)(
                    i.inPurpose,
                    l.data,
                    !1,
                    l.isSelected,
                    l.type
                  )),
                  (c = Object(Jt.k)(
                    i.zone,
                    l.zoneIds,
                    !0,
                    l.isSelected,
                    l.type
                  )),
                  ea(
                    ea({}, i),
                    {},
                    {
                      inPurpose: d,
                      zone: c,
                      pageNo: 1,
                      srpAction: "NEW",
                      lastFilter: Object(Jt.l)(
                        i.lastFilter,
                        l.type,
                        !0,
                        l.isSelected
                      ),
                    }
                  ))
                : ((s = Object(Jt.k)(
                    i.inPurpose,
                    l.data,
                    !1,
                    l.isSelected,
                    l.type
                  )),
                  ea(
                    ea({}, i),
                    {},
                    {
                      inPurpose: s,
                      zone: null,
                      pageNo: 1,
                      srpAction: "NEW",
                      lastFilter: Object(Jt.l)(
                        i.lastFilter,
                        l.type,
                        !0,
                        l.isSelected
                      ),
                    }
                  ));
            if ("search" === l.type) {
              for (var y in l.resetFilterData)
                "propertyType" != l.resetFilterData[y] &&
                  "locality" != l.resetFilterData[y] &&
                  "psmid" != l.resetFilterData[y] &&
                  (i[l.resetFilterData[y]] =
                    l.searchBeanPre[l.resetFilterData[y]]);
              return (
                (i.shared = l.searchBeanPre.shared),
                ea(
                  ea({}, i),
                  {},
                  {
                    category: l.data,
                    search: l.name,
                    pageNo: 1,
                    srpAction: "NEW",
                  }
                )
              );
            }
            if ("changeMsiteTab" === l.type) {
              if (
                l.filterOtherData &&
                l.filterOtherData.topFilterResetData &&
                l.filterOtherData.topFilterResetData.topFilterNames
              ) {
                var v,
                  f,
                  g = [].concat(
                    Qt(l.filterOtherData.topFilterResetData.topFilterNames),
                    Qt(l.filterOtherData.moreFilterResetData.moreFilterNames)
                  );
                for (y in g)
                  "locality" != g[y] &&
                    "psmid" != g[y] &&
                    (v = i[g[y]]) &&
                    ((f = Array.isArray(v)), (i[g[y]] = f ? [] : null));
                return ea(
                  ea(ea({}, i), l.data),
                  {},
                  { pageNo: 1, srpAction: "NEW" }
                );
              }
            } else {
              if ("resetFilters" === l.type)
                return ea(
                  {},
                  {
                    category: i.category,
                    city: i.city,
                    locality: i.locality,
                    propertyType: i.propertyType,
                    psmid: i.psmid,
                    subUrb: i.subUrb,
                    devIds: i.devIds,
                    search: i.search,
                    sortBy: "premiumRecent",
                  }
                );
              if (l.type === m.i)
                return ea(
                  ea({}, i),
                  {},
                  { pageNo: i.pageNo + 1, srpAction: m.j }
                );
              if ("autosuggest" === l.type) {
                if (Object(Kt.f)(i, l.data))
                  return l.autoSuggestPreData && null != l.autoSuggestPreData
                    ? null !== i.srpAction
                      ? ea(
                          ea(ea({}, i), l.data),
                          {},
                          {
                            pageNo: 1,
                            radius: null,
                            srpAction: "NEW",
                            autoSuggestPreData: l.autoSuggestPreData,
                          }
                        )
                      : ea(
                          ea(ea({}, i), l.data),
                          {},
                          {
                            pageNo: 1,
                            radius: null,
                            autoSuggestPreData: l.autoSuggestPreData,
                          }
                        )
                    : null !== i.srpAction
                    ? ea(
                        ea(ea({}, i), l.data),
                        {},
                        { radius: null, pageNo: 1, srpAction: "NEW" }
                      )
                    : ea(
                        ea(ea({}, i), l.data),
                        {},
                        { radius: null, pageNo: 1 }
                      );
              } else {
                if ("sortby" === l.type)
                  return l.data && l.data.sortBy
                    ? ea(
                        ea({}, i),
                        {},
                        { sortBy: l.data.sortBy, pageNo: 1, srpAction: "NEW" }
                      )
                    : ((s = Object(Jt.k)(
                        i.sortBy,
                        l.data,
                        !1,
                        l.isSelected,
                        l.type
                      )),
                      ea(
                        ea({}, i),
                        {},
                        {
                          sortBy: s,
                          pageNo: 1,
                          srpAction: "NEW",
                          lastFilter: Object(Jt.l)(
                            i.lastFilter,
                            l.type,
                            !0,
                            l.isSelected
                          ),
                        }
                      ));
                if ("listingWithImages" === l.type)
                  return (
                    (s = l.data),
                    ea(
                      ea({}, i),
                      {},
                      { listingWithImages: s, pageNo: 1, srpAction: "NEW" }
                    )
                  );
                if ("possessionPreference" === l.type)
                  return (
                    (b = []).push(l.data.value),
                    "10080" == l.data.value
                      ? ea(
                          ea({}, i),
                          {},
                          {
                            possessionStatus: b,
                            pageNo: 1,
                            srpAction: "NEW",
                            possessionIn: l.data.year,
                          }
                        )
                      : ea(
                          ea({}, i),
                          {},
                          {
                            possessionStatus: b,
                            pageNo: 1,
                            srpAction: "NEW",
                            possessionIn: null,
                          }
                        )
                  );
                if ("auctionProperties" == l.type)
                  return ea(
                    ea({}, i),
                    {},
                    { auction: l.data, pageNo: 1, srpAction: "NEW" }
                  );
                if ("resetMore" === l.type) {
                  for (var y in l.data)
                    "propertyType" != l.data[y] &&
                      (v = i[l.data[y]]) &&
                      ((f = Array.isArray(v)), (i[l.data[y]] = f ? [] : null));
                  return (
                    (v = i.shared) && (i.shared = l.searchBeanPre.shared),
                    ea(
                      ea({}, i),
                      {},
                      { pageNo: 1, srpAction: "NEW", lastFilter: null }
                    )
                  );
                }
                if ("resetTopAndMore" === l.type) {
                  for (var y in l.data.moreFilterArray)
                    (v = i[l.data.moreFilterArray[y]]) &&
                      ((f = Array.isArray(v)),
                      (i[l.data.moreFilterArray[y]] = f ? [] : null));
                  for (var y in l.data.topFilterArray)
                    "propertyType" == l.data.topFilterArray[y] &&
                    i.search != l.searchBeanPre.search
                      ? "commercial" == i.search
                        ? (i.propertyType = ["10007", "10018"])
                        : "residential" == i.search
                        ? (i.propertyType = [
                            "10002",
                            "10003",
                            "10021",
                            "10022",
                            "10001",
                            "10017",
                          ])
                        : "plot" == i.search && (i.propertyType = ["10000"])
                      : (v = i[l.data.topFilterArray[y]]) &&
                        (i[l.data.topFilterArray[y]] =
                          l.searchBeanPre[l.data.topFilterArray[y]]);
                  return (
                    (v = i.shared) && (i.shared = null),
                    ea(
                      ea({}, i),
                      {},
                      { pageNo: 1, srpAction: "NEW", lastFilter: null }
                    )
                  );
                }
                if ("seopagination" === l.type)
                  return ea(
                    ea({}, i),
                    {},
                    { srpAction: "SEOPageChange", pageNo: l.data }
                  );
                if ("shortlistVertical" === l.type)
                  return ea(
                    ea(ea({}, i), l.payload),
                    {},
                    { srpAction: "ShortlistVerticalChange" }
                  );
                if ("nearMeSeo" === l.type)
                  return ea(
                    ea({}, i),
                    {},
                    {
                      city: null,
                      radius: l.payload,
                      pageNo: 1,
                      srpAction: "NEW",
                    }
                  );
                if ("nearMeSeoCity" === l.type)
                  return ea(ea({}, i), {}, { city: l.payload });
              }
            }
            return i;
          },
          searchResult: function () {
            var e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : ra;
            return (1 < arguments.length ? arguments[1] : void 0).type === m.b
              ? {}
              : e;
          },
          contactData: na.a,
          contactCtaData: Fa.a,
          form: oa.a,
          isCsr: function () {
            return 0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : "true";
          },
          qlist: ta,
          QlistNoSchema: ta,
          seoContentData: function () {
            return 0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : ia;
          },
          feedback: function () {
            var e =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : Ea,
              t = 1 < arguments.length ? arguments[1] : void 0;
            return "OPEN_FEEDBACK" == t.type
              ? wa(
                  wa({}, e),
                  {},
                  {
                    propertyId: t.payload.propertyId,
                    propertyGaObj: t.payload.propertyGaObj,
                    showFeedbackPopup: t.payload.showFeedbackPopup,
                  }
                )
              : "CLOSE_FEEDBACK" == t.type
              ? wa(wa({}, e), {}, { showFeedbackPopup: !1 })
              : e;
          },
          pdpViewed: function () {
            var e,
              t =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : Wa,
              a = 1 < arguments.length ? arguments[1] : void 0;
            return "PROPERTY_VIEWED" == a.type && null != a.payload
              ? ((e = t.viewedProperties).includes(a.payload) ||
                  (e.push(a.payload), (e = (e = e.reverse()).slice(0, 30))),
                Ga(Ga({}, t), {}, { viewedProperties: e }))
              : t;
          },
          imagePopup: function () {
            var e =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : Ba,
              t = 1 < arguments.length ? arguments[1] : void 0;
            return "OPEN_IMAGE_GALLERY_POPUP" == t.type
              ? xa(
                  xa({}, e),
                  {},
                  {
                    encPropertyId: t.payload.encPropertyId,
                    showImageGalleryPopup: t.payload.showImageGalleryPopup,
                    titleComp: t.payload.titleComp,
                    pdpURLPh: t.payload.pdpURL,
                    carDataObj: t.payload.carDataObj,
                    propertyGaObj: t.payload.propertyGaObj,
                    isConverted: t.payload.isConverted,
                    isPhotoGalleryContacted: t.payload.isPhotoGalleryContacted,
                  }
                )
              : "CLOSE_IMAGE_GALLERY_POPUP" == t.type
              ? xa(
                  xa({}, e),
                  {},
                  { showImageGalleryPopup: !1, encPropertyId: null }
                )
              : "CONTACT_ON_GALLERY" == t.type
              ? xa(xa({}, e), {}, { contactOnGallery: t.payload })
              : e;
          },
          filterData: function () {
            var e =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : da,
              t = 1 < arguments.length ? arguments[1] : void 0;
            return "reloadFilter" === t.type
              ? pa(
                  pa({}, e),
                  {},
                  {
                    topFilterData: t.data.topFilterData,
                    moreFilterData: t.data.moreFilterData,
                    otherDataMap: t.data.otherDataMap,
                    fromSearch: t.data.fromSearch,
                    languageDictionary: t.data.languageDictionary,
                  }
                )
              : e;
          },
          searchAdditionalDataBean: function () {
            var e =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : va,
              t = 1 < arguments.length ? arguments[1] : void 0;
            return "NewAdditionalBeanData" == t.type
              ? ba({}, t.data)
              : "CHANGE_CONTACT_BUTTON_NAME" == t.type
              ? ba(ba({}, e), t.payload)
              : "showNpsFlag" == t.type
              ? ba(ba({}, e), {}, { showNps: t.payload.showNps })
              : e;
          },
          societyExpertData: function () {
            var e =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : ha,
              t = 1 < arguments.length ? arguments[1] : void 0;
            return "societyExpertDataAddition" == t.type
              ? (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? ga(Object(a), !0).forEach(function (t) {
                          var r, n;
                          (r = e),
                            (n = a[t]),
                            (t = (function (e) {
                              return (
                                (e = (function (e, t) {
                                  if ("object" !== fa(e) || null === e)
                                    return e;
                                  var a = e[Symbol.toPrimitive];
                                  if (void 0 === a) return String(e);
                                  if (
                                    "object" !== fa((a = a.call(e, "string")))
                                  )
                                    return a;
                                  throw new TypeError(
                                    "@@toPrimitive must return a primitive value."
                                  );
                                })(e)),
                                "symbol" === fa(e) ? e : String(e)
                              );
                            })(t)) in r
                              ? Object.defineProperty(r, t, {
                                  value: n,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                                })
                              : (r[t] = n);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(a)
                        )
                      : ga(Object(a)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(a, t)
                          );
                        });
                  }
                  return e;
                })({}, t.data)
              : e;
          },
          userInfoData: function () {
            var e =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : ja,
              t = 1 < arguments.length ? arguments[1] : void 0;
            switch (t.type) {
              case "UPDATE_SESSION_COUNT":
                return Da(Da({}, e), {}, { sessionCount: e.sessionCount + 1 });
              case Ft.a:
              case Ft.b:
                return Da(Da({}, e), t.payload);
              default:
                return e;
            }
          },
          nsrResultList: function () {
            return 0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : Sa;
          },
          viewOnMapBean: function () {
            var e =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : Aa,
              t = 1 < arguments.length ? arguments[1] : void 0;
            return "viewOnMap" === t.type
              ? Ca(
                  Ca({}, e),
                  {},
                  {
                    cardData: t.payload.cardData,
                    mapData: t.payload.mapData,
                    isMapActive: t.payload.isMapActive,
                    finalPrice: t.payload.finalPrice,
                    cardTitle: t.payload.cardTitle,
                  }
                )
              : Ca({}, e);
          },
          navigationRecordsMap: function () {
            return 0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : la;
          },
          clientBean: function () {
            var e =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : Va,
              t = 1 < arguments.length ? arguments[1] : void 0;
            return "trueCallRequestId" == t.type
              ? Ma(Ma({}, e), {}, { trueCallRequestId: t.payload })
              : "recentSearchChange" == t.type
              ? Ma(
                  Ma({}, e),
                  {},
                  { recentSearchCount: e.recentSearchCount + 1 }
                )
              : t.type == m.d
              ? Ma(Ma({}, e), {}, { lastContactPropertyId: t.payload })
              : "resultPropertyIds" == t.type
              ? Ma(Ma({}, e), {}, { resultPropertyIds: t.payload })
              : "urlforHistory" == t.type
              ? Ma(Ma({}, e), {}, { urlforHistory: e.urlforHistory + 1 })
              : "pdppageurl" == t.type
              ? Ma(Ma({}, e), {}, { pdppageurl: t.payload })
              : "editReq" == t.type
              ? Ma(Ma({}, e), {}, { editReq: t.payload })
              : "lastcallfor" == t.type
              ? Ma(Ma({}, e), {}, { lastcallfor: t.payload })
              : "hideFilterPopup" == t.type
              ? Ma(Ma({}, e), {}, { hideFilterPopup: t.payload })
              : "backhistory" == t.type
              ? Ma(Ma({}, e), {}, { backhistory: t.payload })
              : "isscrollcalled" == t.type
              ? Ma(Ma({}, e), {}, { isscrollcalled: t.payload })
              : "fromSortBy" == t.type
              ? Ma(Ma({}, e), {}, { fromSortBy: t.payload })
              : "isPropCTAChangeGAFired" == t.type
              ? Ma(Ma({}, e), {}, { isPropCTAChangeGAFired: t.payload })
              : "buyerTaggingFlow" == t.type
              ? Ma(Ma({}, e), {}, { buyerTaggingBean: t.payload })
              : "showRatingPopup" == t.type
              ? Ma(
                  Ma({}, e),
                  {},
                  {
                    showRatingPopup: t.payload.showRatingPopup,
                    seoRichContentSectionReviewData: t.payload.ratingData,
                  }
                )
              : "CompaignFiltersApplied" == t.type
              ? Ma(Ma({}, e), {}, { filters: t.data })
              : "nearMeSeoJsonData" == t.type
              ? Ma(Ma({}, e), {}, { nearMeSeoJsonData: t.payload })
              : "isVirtualNumber" == t.type
              ? Ma(Ma({}, e), {}, { isVirtualNumber: t.payload })
              : "virtualNumberDataAvailable" == t.type
              ? Ma(Ma({}, e), {}, { virtualNumberDataAvailable: t.payload })
              : "isShortListFormOpen" == t.type
              ? Ma(Ma({}, e), {}, { isShortListFormOpen: t.payload })
              : "buyerNumberAvailable" == t.type
              ? Ma(Ma({}, e), {}, { buyerNumberAvailable: t.payload })
              : "virtualNumberLimitExhaust" == t.type
              ? Ma(Ma({}, e), {}, { virtualNumberLimitExhaust: t.payload })
              : "showVirtualNumberFlow" === t.type
              ? Ma(Ma({}, e), {}, { showVirtualNumberFlow: t.payload })
              : "topNudegePropertyInfo" == t.type
              ? Ma(Ma({}, e), {}, { topNudegePropertyInfo: t.payload })
              : "askWhatsApp2" == t.type
              ? Ma(Ma({}, e), {}, { askWhatsApp2: t.payload })
              : e;
          },
          popUps: function () {
            var e,
              t =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : Ka,
              a = 1 < arguments.length ? arguments[1] : void 0;
            return (
              j.t(a) ||
                j.t(a.type) ||
                (a.type === m.h &&
                  ((e = t.popUpsQueue.slice()).push(a.payload.popUpName),
                  (t = Ja(Ja({}, t), {}, { popUpsQueue: e }))),
                a.type === m.g &&
                  ((e = t.popUpsQueue.slice(1)),
                  (t = Ja(Ja({}, t), {}, { popUpsQueue: e })))),
              t
            );
          },
          mbPrimeState: function () {
            var e =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : Za,
              t = 1 < arguments.length ? arguments[1] : void 0;
            switch (t.type) {
              case "primeDropOff":
                return Xa(Xa({}, e), {}, { dropOffData: Xa({}, t.payload) });
              case "viewPrimePopUp":
                return Xa(Xa({}, e), {}, { isViewWithPrime: t.payload });
              case "hideNonPrimeBanners":
                return Xa(Xa({}, e), {}, { hideNonPrimeBanners: t.payload });
              case "setPrimeFreeTrial":
                return Xa(
                  Xa({}, e),
                  {},
                  {
                    isPrimeFreeTrial: t.payload.isPrimeFreeTrial,
                    setFreeTrialAfterOtp: t.payload.setFreeTrialAfterOtp,
                  }
                );
              default:
                return e;
            }
          },
          constantDataBean: function () {
            var e =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : cr,
              t = 1 < arguments.length ? arguments[1] : void 0;
            return "NewConstantDataBean" == t.type
              ? (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? or(Object(a), !0).forEach(function (t) {
                          var r, n;
                          (r = e),
                            (n = a[t]),
                            (t = (function (e) {
                              return (
                                (e = (function (e, t) {
                                  if ("object" !== nr(e) || null === e)
                                    return e;
                                  var a = e[Symbol.toPrimitive];
                                  if (void 0 === a) return String(e);
                                  if (
                                    "object" !== nr((a = a.call(e, "string")))
                                  )
                                    return a;
                                  throw new TypeError(
                                    "@@toPrimitive must return a primitive value."
                                  );
                                })(e)),
                                "symbol" === nr(e) ? e : String(e)
                              );
                            })(t)) in r
                              ? Object.defineProperty(r, t, {
                                  value: n,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                                })
                              : (r[t] = n);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(a)
                        )
                      : or(Object(a)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(a, t)
                          );
                        });
                  }
                  return e;
                })({}, t.data)
              : e;
          },
          buyerTaggingContactObj: function () {
            var e =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : rr,
              t = 1 < arguments.length ? arguments[1] : void 0;
            return "BuyerTaggingContactCountUpdate" !== t.type
              ? e
              : ar(ar({}, e), t.payload);
          },
          shortlists: function () {
            var e =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : ur,
              t = 1 < arguments.length ? arguments[1] : void 0;
            switch (t.type) {
              case Ft.o:
              case Ft.p:
              case Ft.m:
              case Ft.n:
                return sr(sr({}, e), t.payload);
              default:
                return e;
            }
          },
          multilingualData: function () {
            return 0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : null;
          },
          prellaSrpAdditionalBean: function () {
            var e =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : yr,
              t = 1 < arguments.length ? arguments[1] : void 0;
            return "add_prella_srp_additional_bean" !== t.type
              ? e
              : mr(mr({}, e), t.payload);
          },
          buyerApproveDatan: br.b,
        })),
        (Fa = [
          "mybean",
          "userInfoData",
          "contactData",
          "form",
          "contactCtaData",
          "pdpViewed",
          "buyerApproveDatan",
        ]),
        (oa = a(444)),
        (br = a(869)),
        (br = a.n(br)),
        a(870));
    (vr = a.n(vr)),
      a(84),
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || T.d,
      (br = {
        key: "root",
        storage: br.a,
        transforms: [vr()(5184e6, "expirationKey")],
        whitelist: Fa,
      }),
      (vr = Object(T.e)(
        Object(oa.persistReducer)(br, na),
        w.a,
        Object(T.a)(zt.a)
      )),
      (Fa = Object(oa.persistStore)(vr)),
      (br = vr),
      (na = a(177)),
      (w = Object(na.a)()),
      (T = a(872)),
      a(1834),
      a(1835),
      a(1836),
      a(1837),
      a(1838),
      a(1839),
      a(1840),
      a(1841),
      (zt =
        "true" === istool
          ? n.a.createElement(n.a.Fragment, null)
          : n.a.lazy(function () {
              return a.e(14).then(a.bind(null, 1853));
            }));
    t.a.hydrate(
      n.a.createElement(
        o.a,
        { history: w },
        n.a.createElement(
          c.a,
          { store: br },
          n.a.createElement(
            T.a,
            { persistor: Fa },
            n.a.createElement(function () {
              function e() {
                p(!0);
              }
              var t,
                a = Object(c.d)(function (e) {
                  return e.userInfoData;
                }),
                o = Object(c.c)(),
                i = Object(c.d)(function (e) {
                  return e.clientBean;
                }),
                l = (m = Wt(Object(r.useState)({ isGalleryOpen: 0 }), 2))[0],
                s = m[1],
                u = (m = Wt(Object(r.useState)(!1), 2))[0],
                p = m[1],
                m =
                  (l.isGalleryOpen,
                  Object(c.d)(function (e) {
                    return e.searchBean;
                  })),
                y = Object(c.d)(function (e) {
                  return e.searchAdditionalDataBean;
                }),
                b = Object(c.d)(function (e) {
                  return e.constantDataBean;
                }),
                v = Object(c.d)(function (e) {
                  return e.imagePopup;
                }),
                f = Object(c.d)(function (e) {
                  return e.multilingualData;
                }),
                g = Object(r.useCallback)(function (e) {
                  27 === e.keyCode &&
                    (s({ isGalleryOpen: 0 }),
                    (document.body.style.overflow = "scroll"));
                }, []),
                h = Object(r.useCallback)(function (e) {
                  0 === l.isGalleryOpen &&
                    "photoCollageOpen" == e.target.id &&
                    (document.body.style.overflow = "hidden");
                }, []),
                _ =
                  (Object(r.useEffect)(function () {
                    return (
                      Object(Vt.a)(o, a),
                      Object(d.f)(_),
                      o({
                        type: Ft.v,
                        payload: {
                          userActionType: Ft.v,
                          isUserAction: !1,
                          formScreen: Ft.k,
                          isAutoContact: !1,
                        },
                      }),
                      document.addEventListener("keydown", g, !1),
                      document.addEventListener("click", h, !1),
                      function () {
                        document.removeEventListener("keydown", g, !1);
                      }
                    );
                  }, []),
                  function (e, t) {
                    o({ type: Ft.a, payload: { fingerprint: e } });
                  });
              return (
                Object(r.useEffect)(function () {
                  var e = setTimeout(function () {
                    "N" == a.isUserLoggedIn &&
                      o({ type: "showNpsFlag", payload: { showNps: !0 } });
                  }, 18e4);
                  return function () {
                    return clearTimeout(e);
                  };
                }, []),
                Object(r.useEffect)(function () {
                  [
                    "keydown",
                    "mousemove",
                    "wheel",
                    "touchmove",
                    "touchstart",
                    "touchend",
                  ].forEach(function (t) {
                    window.addEventListener(t, e, { passive: !0 });
                  });
                }, []),
                n.a.createElement(
                  n.a.Fragment,
                  null,
                  n.a.createElement(Ut.a, {
                    userData: {
                      firstName: (t = a).userName || "",
                      userType: t.userType || "",
                      isPrimeUser: "Y" === t.userPrimeMemberLoggedIn,
                      loggedIn: "Y" === t.isUserLoggedIn,
                    },
                    isWhiteTheme: !0,
                    isHamburger: !0,
                    includeType: m && m.category,
                    isCityDrop: !1,
                    isSubMenu: !1,
                    isMbPrimeDrop: !1,
                    cityName: Object(qt.a)(y),
                    homeLoanDrop: { isAllLinks: !1 },
                    shortList: {
                      onShortlistClick: function () {
                        console.log("onShortlistClick");
                      },
                      onShortlistHover: function () {
                        console.log("onShortlistHover");
                      },
                      isNRIUser: y && "true" === y.isNRIUser,
                    },
                    envData: {
                      DOMAINURL: "https://www.magicbricks.com",
                      POSTPROPERTYURL: "https://post.magicbricks.com/",
                      OTHSERVERURL: "https://accounts.magicbricks.com/userauth",
                    },
                    postProperty: { isPostProperty: !0 },
                    multilingualData: f,
                  }),
                  n.a.createElement(
                    "div",
                    { id: "body" },
                    n.a.createElement(
                      lt.a,
                      null,
                      n.a.createElement(
                        n.a.Fragment,
                        null,
                        (!(
                          v &&
                          !Object(j.t)(v.showImageGalleryPopup) &&
                          v.showImageGalleryPopup
                        ) ||
                          (v &&
                            !Object(j.t)(v.showImageGalleryPopup) &&
                            v.showImageGalleryPopup &&
                            !Object(j.t)(v.contactOnGallery) &&
                            v.contactOnGallery)) &&
                          n.a.createElement(Bt.a, {
                            source: "search_web",
                            formName: "SRP_TOP_CONTACT",
                            isLegalAndInfra: !1,
                            contactGaAction: I.c,
                            buyerTaggingRequired: b.webBTShow,
                            additionalBeanData: y,
                          })
                      ),
                      n.a.createElement(
                        n.a.Fragment,
                        null,
                        i.showVirtualNumberFlow &&
                          y.vnEnableOnStartup &&
                          "S" == m.category &&
                          "N" == (null == a ? void 0 : a.isUserLoggedIn) &&
                          null == (null == a ? void 0 : a.userUniqToken) &&
                          n.a.createElement(n.a.Fragment, null)
                      )
                    ),
                    n.a.createElement(xt.a, { source: "PROP_SRP" }),
                    n.a.createElement(
                      lt.a,
                      null,
                      " ",
                      n.a.createElement(Yt.a, null),
                      " "
                    ),
                    n.a.createElement(Lt, {
                      userInfoData: a,
                      isMobile: !1,
                      additionalBeanData: y,
                    }),
                    n.a.createElement(It, null),
                    n.a.createElement(
                      lt.a,
                      null,
                      u && n.a.createElement(Gt.a, { source: "web" })
                    ),
                    u && n.a.createElement(Rt.a, { loadingText: "Loading..." })
                  ),
                  n.a.createElement(Mt.a, {
                    cityName: Object(qt.a)(y),
                    envData: {
                      DOMAINURL: "https://www.magicbricks.com",
                      POSTPROPERTYURL: "https://post.magicbricks.com/",
                      OTHSERVERURL: "https://accounts.magicbricks.com/userauth",
                    },
                    multilingualData: f,
                  })
                )
              );
            }, null),
            "false" === istool &&
              n.a.createElement(
                r.Suspense,
                { fallback: n.a.createElement("div", null, "Loading") },
                n.a.createElement(zt, { from: "Web" })
              )
          )
        )
      ),
      document.getElementById("propertysrp")
    );
  },
  255: function (e, t, a) {
    "use strict";
    a.d(t, "a", function () {
      return r;
    });
    var r = function (e) {
      return function (t, a) {
        a();
        try {
          MB_GTM_dataLayer.push(e);
        } catch (t) {
          console.log(t);
        }
      };
    };
  },
  295: function (e, t, a) {
    "use strict";
    a.d(t, "a", function () {
      return r;
    });
    var r = function (e, t, a, r, o) {
      if (
        ((a = a.search),
        (t = r
          ? t + "/mbsearch/mobilePostRequirement?source=mbsrpMob"
          : t +
            "/mbsearch/mobilePostRequirement?source=mbsrpWeb&saveRequirement=Y"),
        !n(e))
      ) {
        if (
          ((t =
            n(e.categoryC) || "commercial" != a
              ? t + "&category=" + e.category
              : t + "&categoryC=" + e.categoryC),
          n(e.pType) || (t = t + "&pType=" + e.pType),
          n(e.propertyType) || (t = t + "&propertyType=" + e.propertyType),
          n(e.budgetMin) || (t = t + "&budgetMin=" + e.budgetMin),
          n(e.budgetMax) || (t = t + "&budgetMax=" + e.budgetMax),
          n(e.bedrooms) || (t = t + "&bedrooms=" + e.bedrooms),
          n(e.city) || (t = t + "&city=" + e.city.split("-")[0]),
          !n(o.psmNames) && 0 < o.psmNames.length)
        ) {
          for (var c = "", i = 0; i < o.psmNames.length; i++)
            c = "" != c ? c + "," + o.psmNames[i].value : o.psmNames[i].value;
          t = t + "&projectSocity=" + c;
        }
        if (!n(o.localityNames) && 0 < o.localityNames.length) {
          for (var l = "", s = 0; s < o.localityNames.length; s++)
            l =
              "" != l
                ? l + "," + o.localityNames[s].value
                : o.localityNames[s].value;
          t = t + "&localityName=" + l;
        }
        r
          ? ((t += "&page=1&disWap=Y&propcategory=" + a),
            n(e.category) || "S" != e.category
              ? (t += "&prcategory=" + e.category)
              : (t += "&prcategory=B"))
          : (t += "&alliance=&banks=&searchType=1");
      }
      return t;
    };
    function n(e) {
      return void 0 === e || null == e || "" === e;
    }
  },
  3: function (e, t, a) {
    "use strict";
    a.d(t, "e", function () {
      return s;
    }),
      a.d(t, "k", function () {
        return m;
      }),
      a.d(t, "l", function () {
        return y;
      }),
      a.d(t, "j", function () {
        return f;
      }),
      a.d(t, "a", function () {
        return h;
      }),
      a.d(t, "b", function () {
        return _;
      }),
      a.d(t, "d", function () {
        return O;
      }),
      a.d(t, "c", function () {
        return D;
      }),
      a.d(t, "h", function () {
        return S;
      }),
      a.d(t, "g", function () {
        return P;
      }),
      a.d(t, "f", function () {
        return N;
      }),
      a.d(t, "i", function () {
        return T;
      });
    var r = a(1),
      n = a(25),
      o = a(6);
    function c(e) {
      return (c =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function i(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function l(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? i(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== c(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== c((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === c(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : i(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    var s = function (e) {
        return function (t, a) {
          (a = a()), (a = l(l({}, u(a)), e));
          try {
            MB_GTM_dataLayer.push(a);
          } catch (t) {
            console.log(t);
          }
        };
      },
      u = function (e) {
        var t,
          a,
          r = e.searchAdditionalDataBean,
          n = e.searchBean,
          c = ((e = e.userInfoData), ""),
          i = "",
          l = f(r),
          s = n.search,
          u =
            (null != s && (s = s.charAt(0).toUpperCase() + s.slice(1)),
            (t =
              "Y" != e.isUserLoggedIn && d(e.userUniqToken)
                ? "logged out"
                : "logged in"),
            d(e.userType) ||
              (c =
                "I" == e.userType
                  ? "Owner"
                  : "A" == e.userType
                  ? "Agent"
                  : "B" == e.userType
                  ? "Builder"
                  : "Individual"),
            d(r.sortBy) || (i = r.sortBy),
            (a = d(r.isNRIUser) || "true" != r.isNRIUser ? "No" : "Yes"),
            "undefined" != typeof document
              ? o.a.readCookie("userNTrackId")
              : null);
        return {
          cd56: v(n, r, e),
          cd95: t,
          cd5: c,
          cd90: r.resultCount + "",
          cd110a: g(r, n),
          cd136: i,
          cd7: l.localityId,
          cd14: l.localityName,
          cd39: n.category,
          cd65: null != r.cityName ? r.cityName.value : "",
          cd66: null != r.cityName ? r.cityName.key : "",
          cd140: p(),
          cd145: a,
          cd146: b(e),
          cd18: null !== n.budgetMin ? n.budgetMin : "-1",
          cd19: null !== n.budgetMax ? n.budgetMax : "100000000000000",
          cd71: m(r),
          cd165: s,
          cd92: j(n, r),
          cd171: u,
        };
      },
      p = function () {
        return Object(n.a)() && Object(n.b)()
          ? "search_source_mbprime_"
              .concat(Object(n.f)(), "_sharerequirement_")
              .concat(n.c)
          : "search source";
      };
    function d(e) {
      return void 0 === e || null == e || "" === e;
    }
    var m = function (e) {
        var t = "";
        return (e = e.searchForm) && !d(e.propTypeDesc)
          ? e.propTypeDesc.replace(/,/g, "|")
          : t;
      },
      y = function (e) {
        var t = "";
        return (e = e.searchForm) && !d(e.propertyType) ? e.propertyType : t;
      },
      b = function (e) {
        var t = "No";
        return d(e.userEmail) ? t : "Yes";
      },
      v = function (e, t, a) {
        var r = "new properties - srp";
        d(e.search) || (r += " - " + e.search),
          d(e.category) || (r += "R" == e.category ? " - rent" : " - buy"),
          (r += " - " + m(t)),
          (e = ""),
          (e =
            !d(t.sessionCount) && 1 < t.sessionCount ? "first time" : "repeat");
        return (
          "Yes" == b(a) ? (e += " converted user") : (e += " unconverted user"),
          d(e) || (r += " - " + e),
          r
        );
      },
      f = function (e) {
        var t = "",
          a = "";
        if (!d(e.localityNames) && 0 < e.localityNames.length) {
          for (var r = e.localityNames, n = 0; n < r.length; n++)
            (t += r[n].key),
              n < r.length - 1 && (t += " | "),
              (a += r[n].value),
              n < r.length - 1 && (a += " | ");
          return { localityId: t, localityName: a };
        }
        return { localityId: "locality na", localityName: "locality na" };
      },
      g = function (e, t) {
        var a = "";
        return (
          null != t.locality && null !== t.locality && 0 < t.locality.length
            ? (a += "locality")
            : t.zone && 0 < t.zone.length
            ? (a += "Investment Corridor")
            : (a += "city"),
          (a += " - " + (1 == t.pageNo || t.pageNo < 2 ? h(e) : "no nsr")),
          "luxury" == e.searchType
            ? (a += " - luxury yes")
            : (a += " - luxury na"),
          a + " - regular"
        );
      },
      h = function (e) {
        return 0 == e.resultCount && 0 == e.nsrResultCount
          ? "pure nsr"
          : e.resultCount < 30 && 0 < e.nsrResultCount
          ? "relaxed nsr"
          : "no nsr";
      },
      _ = function (e, t, a, r, n, o, c) {
        (t = l(
          {
            event: "event_tracking",
            eventName: "revamp_srp_filters",
            nonInteraction: !1,
            eventCategory: "revamp srp - filters",
            eventAction: r,
            eventLabel: t,
            eventValue: a,
            cd110b: "SRP Refinement",
          },
          n
        )),
          (r.includes("Applied") || r.includes("Removed")) &&
            ((t = l(l({}, t), { cm12: 1 })), null != c) &&
            (t = l(l({}, t), c)),
          r.includes("Launch") &&
            (t = l(l({}, t), { cd110b: "", eventValue: "" })),
          e(s(t));
      },
      O = function (e, t) {
        e(
          s({
            event: "event_tracking",
            eventName: "revamp_srp_nudge",
            nonInteraction: !1,
            eventCategory: "revamp srp - Nudges",
            eventAction: "Impression",
            eventLabel: t,
            eventValue: "",
          })
        );
      },
      D = function (e) {
        return function (t, a) {
          a(),
            (a = l(
              {
                event: "event_tracking",
                eventName: "",
                nonInteraction: !1,
                eventCategory: "",
                eventAction: "",
                eventLabel: "",
                eventValue: "",
              },
              e
            )),
            t(s(a));
        };
      },
      j = function (e, t) {
        var a = "";
        try {
          d(e.category) || (a = a + "category:" + e.category),
            d(e.propertyType) ||
              (a = a + ";propertyType:" + e.propertyType.join("|")),
            d(e.budgetMin) ||
              "0" === e.budgetMin ||
              (a = a + ";budgetMin:" + e.budgetMin),
            d(e.budgetMax) || (a = a + ";budgetMax:" + e.budgetMax),
            d(e.bhk) || (a = a + ";bedrooms:" + e.bhk.join("|")),
            d(e.city) ||
              (a =
                !d(e.subUrb) && e.subUrb.includes("-")
                  ? a + ";city:" + e.subUrb
                  : d(e.subUrb) || e.city.includes("-")
                  ? a + ";city:" + e.city
                  : a + ";city:" + e.city + "-" + e.subUrb),
            d(e.locality) || (a = a + ";locality:" + e.locality.join("|")),
            d(e.inputListings) ||
              (a = a + ";PostedBy:" + e.inputListings.join("|")),
            d(e.searchType) || (a = a + ";searchType:" + e.searchType),
            d(e.pageNo) || (a = a + ";page:" + e.pageNo),
            d(e.sortBy) || (a = a + ";sortBy:" + e.sortBy),
            d(e.developerNames) ||
              (a = a + ";developerName:" + e.developerNames.join("|")),
            d(e.psmid) || (a = a + ";psmid:" + e.psmid.join("|")),
            !d(e.possessionStatus) &&
              0 < e.possessionStatus.length &&
              (a = a + ";possessionStatus:" + e.possessionStatus.join("|")),
            !d(e.possessionIn) &&
              0 < e.possessionIn.length &&
              (a = Array.isArray(e.possessionIn)
                ? a + ";possessionYears:" + e.possessionIn.join("|")
                : a + ";possessionYears:" + e.possessionIn),
            !d(e.saleType) &&
              0 < e.saleType.length &&
              (a = a + ";saleType:" + e.saleType.join("|")),
            d(e.postedSince) || (a = a + ";postedSince:" + e.postedSince),
            !d(e.ownershipType) &&
              0 < e.ownershipType.length &&
              (a = a + ";ownershipType:" + e.ownershipType.join("|")),
            !d(e.bathrooms) &&
              0 < e.bathrooms.length &&
              (a = a + ";bathrooms:" + e.bathrooms.join("|")),
            d(e.furnish) || (a = a + ";furnished:" + e.furnish),
            !d(e.facing) &&
              0 < e.facing.length &&
              (a = a + ";facing:" + e.facing.join("|")),
            !d(e.floorNumber) &&
              0 < e.floorNumber.length &&
              (a = a + ";floorNo:" + e.floorNumber.join("|")),
            !d(e.amenities) &&
              0 < e.amenities.length &&
              (a = a + ";amenities:" + e.amenities.join("|")),
            !d(e.propertiesIn) &&
              0 < e.propertiesIn.length &&
              (a = a + ";propertiesIn:" + e.propertiesIn.join("|")),
            !d(e.possessionYears) &&
              0 < e.possessionYears.length &&
              (a = Array.isArray(e.possessionYears)
                ? a + ";possessionYears:" + e.possessionYears.join("|")
                : a + ";possessionYears:" + e.possessionYears),
            d(e.imageVideo) ||
              (a = a + ";imageVideo:" + e.imageVideo.join("|")),
            d(e.certifiedAgent) ||
              (a = a + ";isCertifedAgent:" + e.certifiedAgent),
            d(e.discountOffers) ||
              (a = a + ";discountsOffers:" + e.discountOffers),
            d(e.verifiedProperties) ||
              (a = a + ";verified:" + e.verifiedProperties),
            d(e.reraProperties) || (a = a + ";isRera:" + e.reraProperties),
            d(e.reraAgents) || (a = a + ";isReraAgent:" + e.reraAgents),
            d(e.listingWithImages) ||
              (a = a + ";imageVideo:" + e.listingWithImages),
            d(e.auction) || (a = a + ";auction:" + e.auction),
            d(e.oid) || (a = a + ";oid:" + e.oid),
            d(e.socityOnly) || (a = a + ";socityOnly:" + e.socityOnly),
            d(e.exc) || (a = a + ";exc:" + e.exc),
            d(e.postedBY) || (a = a + ";postedBY:" + e.postedBY),
            d(e.ac) || (a = a + ";ac:" + e.ac),
            d(e.leasedOut) || (a = a + ";leasedOut:" + e.leasedOut),
            d(e.areaUnit) || (a = a + ";areaUnit:" + e.areaUnit),
            d(e.commGuru) || (a = a + ";commGuru:" + e.commGuru),
            d(e.roadWidth) || (a = a + ";roadWidth:" + e.roadWidth),
            d(e.gateComm) || (a = a + ";gateComm:" + e.gateComm),
            d(e.cornerPlot) || (a = a + ";cornerPlot:" + e.cornerPlot),
            d(e.cabins) || (a = a + ";cabins:" + e.cabins),
            d(e.parkings) || (a = a + ";parkings:" + e.parkings),
            d(e.pantry) || (a = a + ";pantry:" + e.pantry),
            d(e.noOfSeats) || (a = a + ";noOfSeats:" + e.noOfSeats),
            d(e.owner) || (a = a + ";owner:" + e.owner),
            d(e.hideviewed) || (a = a + ";hideviewed:" + e.hideviewed),
            d(e.zone) || (a = a + ";zone:" + e.zone),
            d(e.imgVd) || (a = a + ";imgVd:" + e.imgVd),
            d(e.furnished) || (a = a + ";furnished:" + e.furnished),
            d(e.tenantPrefer) || (a = a + ";tenantPrefer:" + e.tenantPrefer),
            d(e.parameter) || (a = a + ";parameter:" + e.parameter),
            d(e.areaFrom) || (a = a + ";areaFrom:" + e.areaFrom),
            d(e.areaTo) || (a = a + ";areaTo:" + e.areaTo),
            d(e.psmidOC) || (a = a + ";psmidOC:" + e.psmidOC),
            d(e.businessType) || (a = a + ";businessType:" + e.businessType),
            d(e.appovedAuth) || (a = a + ";appovedAuth:" + e.appovedAuth),
            d(e.nriPref) || (a = a + ";nriPref:" + e.nriPref),
            d(e.inPurpose) || (a = a + ";inPurpose:" + e.inPurpose),
            d(e.shared) || (a = a + ";shared:" + e.shared),
            d(e.gender) || (a = a + ";gender:" + e.gender),
            d(e.occupancy) || (a = a + ";occupancy:" + e.occupancy);
        } catch (e) {
          console.log(e);
        }
        return a;
      },
      S = function (e) {
        return function (t, a) {
          var r = l({}, e);
          try {
            MB_GTM_dataLayer.push(r);
          } catch (t) {
            console.log(t);
          }
        };
      },
      P = function (e) {
        return function (t, a) {
          var r = (a = a()).searchAdditionalDataBean,
            n = a.searchBean;
          a = a.userInfoData;
          if (null != (n = k(n, r, a))) {
            r = l(l({}, n), e);
            try {
              MB_GTM_dataLayer.push(r);
            } catch (t) {
              console.log(t);
            }
          }
        };
      },
      N = function (e, t, a, r) {
        return function (n, o) {
          if (((o = o()), null != (o = w(o, a, t, r)))) {
            o = l(l({}, o), e);
            try {
              MB_GTM_dataLayer.push(o);
            } catch (n) {
              console.log(n);
            }
          }
        };
      },
      w = function (e, t, a, r) {
        var n, o, c;
        return null == t || null == a || null == r
          ? null
          : ((n = e.searchAdditionalDataBean),
            (o = e.searchBean),
            (e = e.userInfoData),
            E(),
            (c = (c = o.search).charAt(0).toUpperCase() + c.slice(1)),
            e.isUserLoggedIn,
            d(e.userType) ||
              "I" == e.userType ||
              "A" == e.userType ||
              e.userType,
            d(n.sortBy) || n.sortBy,
            d(n.isNRIUser) || n.isNRIUser,
            (c = null) == t || ("r" != t && "R" != t)
              ? null != t && (c = "buy")
              : (c = "rent"),
            (a = T(a, t, r)),
            (t = k(o, n, e)),
            (r = {
              eventName:
                null != c
                  ? "buy" == c
                    ? "home_loan"
                    : "packer and movers"
                  : "",
              eventAction:
                null != c && null != n && null != n.from ? c + "-srp" : "",
              eventLabel: null != a ? a.ctaText : "",
              cd169: null != a ? a.ctaText : "",
              eventValue: "",
            }),
            l(l({}, t), r));
      },
      E = function () {
        return (
          o.a.readCookie("userNTrackId") ||
          localStorage.getItem("userUniqueNTrackId")
        );
      },
      T = function (e, t, a) {
        var n, o, c;
        return null != e &&
          null != t &&
          null != a &&
          ((c = o = null), 0 != (n = e.length)) &&
          ("b" == t || "B" == t || "s" == t || "S" == t
            ? "0" == e[n - 1] || "1" == e[n - 1]
              ? ((o = "Check Loan Eligibility"),
                (c =
                  "https://www.magicbricks.com/homeloan/eligibility-calculator?inc=" +
                  encodeURIComponent("buy-srp-Check-Loan-Eligibility")))
              : "2" == e[n - 1] || "3" == e[n - 1]
              ? ((o = "Calculate EMI"),
                (c =
                  "https://www.magicbricks.com/homeloan/emi-calculator?inc=" +
                  encodeURIComponent("buy-srp-Calculate-EMI")))
              : "4" == e[n - 1] || "5" == e[n - 1]
              ? ((o = "Get Pre Approved Loan"),
                (c =
                  "https://www.magicbricks.com/homeloan/pre-approved-loan/?inc=" +
                  encodeURIComponent("buy-srp-Get-Pre-Approved-Loan")))
              : "6" == e[n - 1] || "7" == e[n - 1]
              ? (c =
                  null == a || ("10000" != a && !Object(r.n)().includes(a))
                    ? ((o = "Get Home Loan"),
                      "https://www.magicbricks.com/homeloan/home?inc=" +
                        encodeURIComponent("buy-srp-Get-Home-Loan"))
                    : ((o = "Get Commercial Loan"),
                      "https://www.magicbricks.com/homeloan/home?inc=" +
                        encodeURIComponent("buy-srp-Get-Commercial-Loan")))
              : ("8" != e[n - 1] && "9" != e[n - 1]) ||
                ((o = "Check Affordability"),
                (c =
                  "https://www.magicbricks.com/homeloan/eligibility-calculator?inc=" +
                  encodeURIComponent("buy-srp-Check-Affordability")))
            : ("r" != t && "R" != t) ||
              ("0" == e[n - 1] || "1" == e[n - 1] || "2" == e[n - 1]
                ? ((o = "Book Home Shifting"),
                  (c =
                    "https://www.magicbricks.com/propertyservices/packers-and-movers/?inc=" +
                    encodeURIComponent("desktop-srp-Book-Home-Shifting")))
                : "3" == e[n - 1] || "4" == e[n - 1] || "5" == e[n - 1]
                ? ((o = "Shifting soon? Check prices"),
                  (c =
                    "https://www.magicbricks.com/propertyservices/packers-and-movers/?inc=" +
                    encodeURIComponent(
                      "desktop-srp-Shifting-soon-Check-prices"
                    )))
                : "6" == e[n - 1] || "7" == e[n - 1]
                ? ((o = "Avail Affordable Shifting"),
                  (c =
                    "https://www.magicbricks.com/propertyservices/packers-and-movers/?inc=" +
                    encodeURIComponent(
                      "desktop-srp-Avail-Affordable-Shifting"
                    )))
                : ("8" != e[n - 1] && "9" != e[n - 1]) ||
                  ((o = "Secure Your Move Now"),
                  (c =
                    "https://www.magicbricks.com/propertyservices/packers-and-movers/?inc=" +
                    encodeURIComponent("desktop-srp-Secure-Your-Move-Now")))),
          null != o) &&
          null != c
          ? { ctaText: o, ctaLink: c }
          : null;
      },
      k = function (e, t, a) {
        var r = E(),
          n = "",
          o = null != a && "Y" == a.isUserLoggedIn ? "logged in" : "logged out",
          c =
            (null == a ||
              d(a.userType) ||
              (n =
                "I" == a.userType
                  ? "Owner"
                  : "A" == a.userType
                  ? "Agent"
                  : "B" == a.userType
                  ? "Builder"
                  : "Individual"),
            null == t || d(t.isNRIUser) || "true" != t.isNRIUser
              ? "No"
              : "Yes");
        return {
          cd56: null != e && null != t && null != a ? v(e, t, a) : null,
          cd95: o,
          cd171: r,
          cd5: n,
          cd65: null != t && null != t.cityName ? t.cityName.value : null,
          cd66: null != t && null != t.cityName ? t.cityName.key : null,
          cd145: c,
          cd146: null != a ? b(a) : null,
        };
      };
  },
  306: function (e, t, a) {
    "use strict";
    var r = a(14),
      n = a(6),
      o = a(7),
      c = a(74),
      i = a(3);
    function l() {
      l = function () {
        return e;
      };
      var e = {},
        t = Object.prototype,
        a = t.hasOwnProperty,
        r =
          Object.defineProperty ||
          function (e, t, a) {
            e[t] = a.value;
          },
        n =
          (v = "function" == typeof Symbol ? Symbol : {}).iterator ||
          "@@iterator",
        o = v.asyncIterator || "@@asyncIterator",
        c = v.toStringTag || "@@toStringTag";
      function i(e, t, a) {
        return (
          Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[t]
        );
      }
      try {
        i({}, "");
      } catch (t) {
        i = function (e, t, a) {
          return (e[t] = a);
        };
      }
      function s(e, t, a, n) {
        var o, c, i, l;
        (t = t && t.prototype instanceof d ? t : d),
          (t = Object.create(t.prototype)),
          (n = new j(n || []));
        return (
          r(t, "_invoke", {
            value:
              ((o = e),
              (c = a),
              (i = n),
              (l = "suspendedStart"),
              function (e, t) {
                if ("executing" === l)
                  throw new Error("Generator is already running");
                if ("completed" === l) {
                  if ("throw" === e) throw t;
                  return { value: void 0, done: !0 };
                }
                for (i.method = e, i.arg = t; ; ) {
                  var a = i.delegate;
                  if (
                    a &&
                    ((a = (function e(t, a) {
                      var r = a.method,
                        n = t.iterator[r];
                      return void 0 === n
                        ? ((a.delegate = null),
                          ("throw" === r &&
                            t.iterator.return &&
                            ((a.method = "return"),
                            (a.arg = void 0),
                            e(t, a),
                            "throw" === a.method)) ||
                            ("return" !== r &&
                              ((a.method = "throw"),
                              (a.arg = new TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method"
                              )))),
                          p)
                        : "throw" === (r = u(n, t.iterator, a.arg)).type
                        ? ((a.method = "throw"),
                          (a.arg = r.arg),
                          (a.delegate = null),
                          p)
                        : (n = r.arg)
                        ? n.done
                          ? ((a[t.resultName] = n.value),
                            (a.next = t.nextLoc),
                            "return" !== a.method &&
                              ((a.method = "next"), (a.arg = void 0)),
                            (a.delegate = null),
                            p)
                          : n
                        : ((a.method = "throw"),
                          (a.arg = new TypeError(
                            "iterator result is not an object"
                          )),
                          (a.delegate = null),
                          p);
                    })(a, i)),
                    a)
                  ) {
                    if (a === p) continue;
                    return a;
                  }
                  if ("next" === i.method) i.sent = i._sent = i.arg;
                  else if ("throw" === i.method) {
                    if ("suspendedStart" === l)
                      throw ((l = "completed"), i.arg);
                    i.dispatchException(i.arg);
                  } else "return" === i.method && i.abrupt("return", i.arg);
                  if (((l = "executing"), "normal" === (a = u(o, c, i)).type)) {
                    if (
                      ((l = i.done ? "completed" : "suspendedYield"),
                      a.arg === p)
                    )
                      continue;
                    return { value: a.arg, done: i.done };
                  }
                  "throw" === a.type &&
                    ((l = "completed"), (i.method = "throw"), (i.arg = a.arg));
                }
              }),
          }),
          t
        );
      }
      function u(e, t, a) {
        try {
          return { type: "normal", arg: e.call(t, a) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      e.wrap = s;
      var p = {};
      function d() {}
      function y() {}
      function b() {}
      var v,
        f,
        g =
          ((f =
            (f =
              (i((v = {}), n, function () {
                return this;
              }),
              Object.getPrototypeOf)) && f(f(S([])))) &&
            f !== t &&
            a.call(f, n) &&
            (v = f),
          (b.prototype = d.prototype = Object.create(v)));
      function h(e) {
        ["next", "throw", "return"].forEach(function (t) {
          i(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function _(e, t) {
        var n;
        r(this, "_invoke", {
          value: function (r, o) {
            function c() {
              return new t(function (n, c) {
                !(function r(n, o, c, i) {
                  var l;
                  if ("throw" !== (n = u(e[n], e, o)).type)
                    return (o = (l = n.arg).value) &&
                      "object" == m(o) &&
                      a.call(o, "__await")
                      ? t.resolve(o.__await).then(
                          function (e) {
                            r("next", e, c, i);
                          },
                          function (e) {
                            r("throw", e, c, i);
                          }
                        )
                      : t.resolve(o).then(
                          function (e) {
                            (l.value = e), c(l);
                          },
                          function (e) {
                            return r("throw", e, c, i);
                          }
                        );
                  i(n.arg);
                })(r, o, n, c);
              });
            }
            return (n = n ? n.then(c, c) : c());
          },
        });
      }
      function O(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function D(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function j(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(O, this),
          this.reset(!0);
      }
      function S(e) {
        if (e) {
          var t,
            r = e[n];
          if (r) return r.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length))
            return (
              (t = -1),
              ((r = function r() {
                for (; ++t < e.length; )
                  if (a.call(e, t)) return (r.value = e[t]), (r.done = !1), r;
                return (r.value = void 0), (r.done = !0), r;
              }).next = r)
            );
        }
        return { next: P };
      }
      function P() {
        return { value: void 0, done: !0 };
      }
      return (
        r(g, "constructor", { value: (y.prototype = b), configurable: !0 }),
        r(b, "constructor", { value: y, configurable: !0 }),
        (y.displayName = i(b, c, "GeneratorFunction")),
        (e.isGeneratorFunction = function (e) {
          return (
            !!(e = "function" == typeof e && e.constructor) &&
            (e === y || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, b)
              : ((e.__proto__ = b), i(e, c, "GeneratorFunction")),
            (e.prototype = Object.create(g)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        h(_.prototype),
        i(_.prototype, o, function () {
          return this;
        }),
        (e.AsyncIterator = _),
        (e.async = function (t, a, r, n, o) {
          void 0 === o && (o = Promise);
          var c = new _(s(t, a, r, n), o);
          return e.isGeneratorFunction(a)
            ? c
            : c.next().then(function (e) {
                return e.done ? e.value : c.next();
              });
        }),
        h(g),
        i(g, c, "Generator"),
        i(g, n, function () {
          return this;
        }),
        i(g, "toString", function () {
          return "[object Generator]";
        }),
        (e.keys = function (e) {
          var t,
            a = Object(e),
            r = [];
          for (t in a) r.push(t);
          return (
            r.reverse(),
            function e() {
              for (; r.length; ) {
                var t = r.pop();
                if (t in a) return (e.value = t), (e.done = !1), e;
              }
              return (e.done = !0), e;
            }
          );
        }),
        (e.values = S),
        (j.prototype = {
          constructor: j,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(D),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  a.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function r(a, r) {
              return (
                (c.type = "throw"),
                (c.arg = e),
                (t.next = a),
                r && ((t.method = "next"), (t.arg = void 0)),
                !!r
              );
            }
            for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
              var o = this.tryEntries[n],
                c = o.completion;
              if ("root" === o.tryLoc) return r("end");
              if (o.tryLoc <= this.prev) {
                var i = a.call(o, "catchLoc"),
                  l = a.call(o, "finallyLoc");
                if (i && l) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                } else if (i) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                } else {
                  if (!l)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
              var n = this.tryEntries[r];
              if (
                n.tryLoc <= this.prev &&
                a.call(n, "finallyLoc") &&
                this.prev < n.finallyLoc
              ) {
                var o = n;
                break;
              }
            }
            var c = (o =
              o &&
              ("break" === e || "continue" === e) &&
              o.tryLoc <= t &&
              t <= o.finallyLoc
                ? null
                : o)
              ? o.completion
              : {};
            return (
              (c.type = e),
              (c.arg = t),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), p)
                : this.complete(c)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              p
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var a = this.tryEntries[t];
              if (a.finallyLoc === e)
                return this.complete(a.completion, a.afterLoc), D(a), p;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var a,
                r,
                n = this.tryEntries[t];
              if (n.tryLoc === e)
                return (
                  "throw" === (a = n.completion).type && ((r = a.arg), D(n)), r
                );
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, a) {
            return (
              (this.delegate = { iterator: S(e), resultName: t, nextLoc: a }),
              "next" === this.method && (this.arg = void 0),
              p
            );
          },
        }),
        e
      );
    }
    function s(e, t, a, r, n, o, c) {
      try {
        var i = e[o](c),
          l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(r, n);
    }
    function u(e) {
      return function () {
        var t = this,
          a = arguments;
        return new Promise(function (r, n) {
          var o = e.apply(t, a);
          function c(e) {
            s(o, r, n, c, i, "next", e);
          }
          function i(e) {
            s(o, r, n, c, i, "throw", e);
          }
          c(void 0);
        });
      };
    }
    function p(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function d(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? p(Object(a), !0).forEach(function (t) {
              b(e, t, a[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : p(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    function m(e) {
      return (m =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function y(e, t) {
      for (var a = 0; a < t.length; a++) {
        var r = t[a];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, v(r.key), r);
      }
    }
    function b(e, t, a) {
      (t = v(t)) in e
        ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = a);
    }
    function v(e) {
      return (
        (e = (function (e, t) {
          if ("object" !== m(e) || null === e) return e;
          var a = e[Symbol.toPrimitive];
          if (void 0 === a) return String(e);
          if ("object" !== m((a = a.call(e, "string")))) return a;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        })(e)),
        "symbol" === m(e) ? e : String(e)
      );
    }
    var f = (function (e, t, a) {
      return (
        t && y(e.prototype, t),
        a && y(e, a),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    })(function e() {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function");
    });
    b(f, "openWhatsappForLogin", function (e, t, a, o, c) {
      return function (s) {
        s(
          Object(i.e)(
            d(
              {
                event: "event_tracking",
                eventName: "revamp_dtl_proptuple_contact",
                nonInteraction: !1,
                eventCategory: "contact_whatsapp_loginpage_open",
                eventAction:
                  "revamp ldp | propertycontact | propertydetail | property tuple | secondary",
                eventLabel: "0/2",
                eventValue: "",
                cd96: (null == c ? void 0 : c.buttonType) + "_whatsapp_direct",
              },
              o
            )
          )
        ),
          s(
            Object(i.e)(
              d(
                {
                  event: "event_tracking",
                  eventName: "revamp_dtl_proptuple_contact",
                  nonInteraction: !1,
                  eventCategory: "contactbuttonclicked",
                  eventAction:
                    "revamp ldp | propertycontact | propertydetail | property tuple | secondary",
                  eventLabel: "0/2",
                  eventValue: "",
                  cd96:
                    (null == c ? void 0 : c.buttonType) + "_whatsapp_direct",
                },
                o
              )
            )
          );
        var p = e.id,
          m = n.a.getSemCookie();
        (function () {
          var e = u(
            l().mark(function e() {
              return l().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        r.a.get(
                          "/wa/generateCorelationId?pId="
                            .concat(p, "&contactInterface=")
                            .concat(a, "&platform=")
                            .concat(t.platform, "&semSource=")
                            .concat(m, "&intent=contact-srp")
                        )
                      );
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })()().then(function (e) {
          var t;
          null != e &&
            null != e.data &&
            ((t =
              "Hello Magicbricks, Kindly assist me with the contact details of this Property- \r\nProperty Id: " +
              e.data),
            window.open(
              "https://api.whatsapp.com/send?phone=919289366466&text=" + t,
              "wap_whats_app_login",
              "width=800,height=500"
            ),
            n.a.createCookie("corelationId", e.data, 0.083));
        });
      };
    }),
      b(f, "addConversionCheckEventListner", function (e, t, a) {
        return function (r) {
          window.addEventListener("visibilitychange", function n() {
            r(f.checkConvertedUserThroughWhatsapp(e, t, a, n));
          });
        };
      }),
      b(f, "checkConvertedUserThroughWhatsapp", function (e, t, a, s) {
        return function (p) {
          var m = n.a.readCookie("corelationId");
          (function () {
            var e = u(
              l().mark(function e() {
                return l().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          r.a.get(
                            "/wa/checkConvertedUserThroughWhatsapp?corelationId=".concat(
                              m
                            )
                          )
                        );
                      case 2:
                        return e.abrupt("return", e.sent);
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })()().then(function (r) {
            var n, l;
            "Success" == (null == r || null == (n = r.data) ? void 0 : n.status)
              ? (console.log("success"),
                null !=
                  (null == (r = null == (n = r.data) ? void 0 : n.buyerDetails)
                    ? void 0
                    : r.userUniqToken) &&
                  "" !== (null == r ? void 0 : r.userUniqToken) &&
                  (window.removeEventListener("visibilitychange", s),
                  p({
                    type: o.b,
                    payload: d(
                      d({}, t),
                      {},
                      {
                        userMobile: r.mobile,
                        userIsdCode: "50",
                        userMobileIsd: 50,
                        selectIsd: "50",
                        userUniqToken: r.userUniqToken,
                        hmacCode: r.hmac,
                        userEmail: r.email,
                        userName: r.name,
                      }
                    ),
                  }),
                  c.a.generateUserInfoCookies(r, e),
                  c.a.generateContactCookies(e),
                  p({
                    type: o.d,
                    payload: d(d({}, a), {}, { isAutoContact: !0 }),
                  }),
                  (n =
                    "revamp ldp | propertycontact | propertydetail | property tuple | " +
                    a.ctaPos),
                  (r = ("primary" == a.ctaPos ? 1 : 2) + "/2"),
                  (l = "revamp_dtl_proptuple_contact"),
                  p(
                    Object(i.e)(
                      d(
                        {
                          event: "event_tracking",
                          eventName: l,
                          nonInteraction: !1,
                          eventCategory: "contactsuccess",
                          eventAction: n,
                          eventLabel: r + " whatsapp",
                          eventValue: "",
                          cd96: a.buttonType + "_whatsapp",
                        },
                        a.propertyGaObj
                      )
                    )
                  ),
                  p(
                    Object(i.e)(
                      d(
                        {
                          event: "event_tracking",
                          eventName: l,
                          nonInteraction: !1,
                          eventCategory: "Top matches",
                          eventAction: "tab opened",
                          eventLabel: r + " whatsapp",
                          eventValue: "",
                          cd96: a.buttonType + "_whatsapp",
                        },
                        a.propertyGaObj
                      )
                    )
                  )))
              : console.log("failure");
          });
        };
      }),
      (t.a = f);
  },
  307: function (e, t, a) {
    "use strict";
    a.d(t, "a", function () {
      return i;
    });
    var r = a(3);
    function n(e) {
      return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function o(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function c(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? o(Object(a), !0).forEach(function (t) {
              var r, o;
              (r = e),
                (o = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== n(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== n((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === n(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = o);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : o(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    var i = function (e, t, a, n, o, i, l) {
      e(
        Object(r.e)(
          c(
            {
              event: "event_tracking",
              eventName: t,
              nonInteraction: !1,
              eventCategory: a,
              eventAction: n,
              eventLabel: o,
              eventValue: i,
            },
            l
          )
        )
      );
    };
  },
  308: function (e, t, a) {
    "use strict";
    a.d(t, "d", function () {
      return d;
    }),
      a.d(t, "a", function () {
        return m;
      }),
      a.d(t, "b", function () {
        return y;
      }),
      a.d(t, "c", function () {
        return b;
      });
    var r = a(7),
      n = a(14);
    function o(e) {
      return (o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function c() {
      c = function () {
        return e;
      };
      var e = {},
        t = Object.prototype,
        a = t.hasOwnProperty,
        r =
          Object.defineProperty ||
          function (e, t, a) {
            e[t] = a.value;
          },
        n =
          (v = "function" == typeof Symbol ? Symbol : {}).iterator ||
          "@@iterator",
        i = v.asyncIterator || "@@asyncIterator",
        l = v.toStringTag || "@@toStringTag";
      function s(e, t, a) {
        return (
          Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[t]
        );
      }
      try {
        s({}, "");
      } catch (t) {
        s = function (e, t, a) {
          return (e[t] = a);
        };
      }
      function u(e, t, a, n) {
        var o, c, i, l;
        (t = t && t.prototype instanceof m ? t : m),
          (t = Object.create(t.prototype)),
          (n = new j(n || []));
        return (
          r(t, "_invoke", {
            value:
              ((o = e),
              (c = a),
              (i = n),
              (l = "suspendedStart"),
              function (e, t) {
                if ("executing" === l)
                  throw new Error("Generator is already running");
                if ("completed" === l) {
                  if ("throw" === e) throw t;
                  return { value: void 0, done: !0 };
                }
                for (i.method = e, i.arg = t; ; ) {
                  var a = i.delegate;
                  if (
                    a &&
                    ((a = (function e(t, a) {
                      var r = a.method,
                        n = t.iterator[r];
                      return void 0 === n
                        ? ((a.delegate = null),
                          ("throw" === r &&
                            t.iterator.return &&
                            ((a.method = "return"),
                            (a.arg = void 0),
                            e(t, a),
                            "throw" === a.method)) ||
                            ("return" !== r &&
                              ((a.method = "throw"),
                              (a.arg = new TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method"
                              )))),
                          d)
                        : "throw" === (r = p(n, t.iterator, a.arg)).type
                        ? ((a.method = "throw"),
                          (a.arg = r.arg),
                          (a.delegate = null),
                          d)
                        : (n = r.arg)
                        ? n.done
                          ? ((a[t.resultName] = n.value),
                            (a.next = t.nextLoc),
                            "return" !== a.method &&
                              ((a.method = "next"), (a.arg = void 0)),
                            (a.delegate = null),
                            d)
                          : n
                        : ((a.method = "throw"),
                          (a.arg = new TypeError(
                            "iterator result is not an object"
                          )),
                          (a.delegate = null),
                          d);
                    })(a, i)),
                    a)
                  ) {
                    if (a === d) continue;
                    return a;
                  }
                  if ("next" === i.method) i.sent = i._sent = i.arg;
                  else if ("throw" === i.method) {
                    if ("suspendedStart" === l)
                      throw ((l = "completed"), i.arg);
                    i.dispatchException(i.arg);
                  } else "return" === i.method && i.abrupt("return", i.arg);
                  if (((l = "executing"), "normal" === (a = p(o, c, i)).type)) {
                    if (
                      ((l = i.done ? "completed" : "suspendedYield"),
                      a.arg === d)
                    )
                      continue;
                    return { value: a.arg, done: i.done };
                  }
                  "throw" === a.type &&
                    ((l = "completed"), (i.method = "throw"), (i.arg = a.arg));
                }
              }),
          }),
          t
        );
      }
      function p(e, t, a) {
        try {
          return { type: "normal", arg: e.call(t, a) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      e.wrap = u;
      var d = {};
      function m() {}
      function y() {}
      function b() {}
      var v,
        f,
        g =
          ((f =
            (f =
              (s((v = {}), n, function () {
                return this;
              }),
              Object.getPrototypeOf)) && f(f(S([])))) &&
            f !== t &&
            a.call(f, n) &&
            (v = f),
          (b.prototype = m.prototype = Object.create(v)));
      function h(e) {
        ["next", "throw", "return"].forEach(function (t) {
          s(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function _(e, t) {
        var n;
        r(this, "_invoke", {
          value: function (r, c) {
            function i() {
              return new t(function (n, i) {
                !(function r(n, c, i, l) {
                  var s;
                  if ("throw" !== (n = p(e[n], e, c)).type)
                    return (c = (s = n.arg).value) &&
                      "object" == o(c) &&
                      a.call(c, "__await")
                      ? t.resolve(c.__await).then(
                          function (e) {
                            r("next", e, i, l);
                          },
                          function (e) {
                            r("throw", e, i, l);
                          }
                        )
                      : t.resolve(c).then(
                          function (e) {
                            (s.value = e), i(s);
                          },
                          function (e) {
                            return r("throw", e, i, l);
                          }
                        );
                  l(n.arg);
                })(r, c, n, i);
              });
            }
            return (n = n ? n.then(i, i) : i());
          },
        });
      }
      function O(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function D(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function j(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(O, this),
          this.reset(!0);
      }
      function S(e) {
        if (e) {
          var t,
            r = e[n];
          if (r) return r.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length))
            return (
              (t = -1),
              ((r = function r() {
                for (; ++t < e.length; )
                  if (a.call(e, t)) return (r.value = e[t]), (r.done = !1), r;
                return (r.value = void 0), (r.done = !0), r;
              }).next = r)
            );
        }
        return { next: P };
      }
      function P() {
        return { value: void 0, done: !0 };
      }
      return (
        r(g, "constructor", { value: (y.prototype = b), configurable: !0 }),
        r(b, "constructor", { value: y, configurable: !0 }),
        (y.displayName = s(b, l, "GeneratorFunction")),
        (e.isGeneratorFunction = function (e) {
          return (
            !!(e = "function" == typeof e && e.constructor) &&
            (e === y || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, b)
              : ((e.__proto__ = b), s(e, l, "GeneratorFunction")),
            (e.prototype = Object.create(g)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        h(_.prototype),
        s(_.prototype, i, function () {
          return this;
        }),
        (e.AsyncIterator = _),
        (e.async = function (t, a, r, n, o) {
          void 0 === o && (o = Promise);
          var c = new _(u(t, a, r, n), o);
          return e.isGeneratorFunction(a)
            ? c
            : c.next().then(function (e) {
                return e.done ? e.value : c.next();
              });
        }),
        h(g),
        s(g, l, "Generator"),
        s(g, n, function () {
          return this;
        }),
        s(g, "toString", function () {
          return "[object Generator]";
        }),
        (e.keys = function (e) {
          var t,
            a = Object(e),
            r = [];
          for (t in a) r.push(t);
          return (
            r.reverse(),
            function e() {
              for (; r.length; ) {
                var t = r.pop();
                if (t in a) return (e.value = t), (e.done = !1), e;
              }
              return (e.done = !0), e;
            }
          );
        }),
        (e.values = S),
        (j.prototype = {
          constructor: j,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(D),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  a.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function r(a, r) {
              return (
                (c.type = "throw"),
                (c.arg = e),
                (t.next = a),
                r && ((t.method = "next"), (t.arg = void 0)),
                !!r
              );
            }
            for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
              var o = this.tryEntries[n],
                c = o.completion;
              if ("root" === o.tryLoc) return r("end");
              if (o.tryLoc <= this.prev) {
                var i = a.call(o, "catchLoc"),
                  l = a.call(o, "finallyLoc");
                if (i && l) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                } else if (i) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                } else {
                  if (!l)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
              var n = this.tryEntries[r];
              if (
                n.tryLoc <= this.prev &&
                a.call(n, "finallyLoc") &&
                this.prev < n.finallyLoc
              ) {
                var o = n;
                break;
              }
            }
            var c = (o =
              o &&
              ("break" === e || "continue" === e) &&
              o.tryLoc <= t &&
              t <= o.finallyLoc
                ? null
                : o)
              ? o.completion
              : {};
            return (
              (c.type = e),
              (c.arg = t),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), d)
                : this.complete(c)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              d
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var a = this.tryEntries[t];
              if (a.finallyLoc === e)
                return this.complete(a.completion, a.afterLoc), D(a), d;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var a,
                r,
                n = this.tryEntries[t];
              if (n.tryLoc === e)
                return (
                  "throw" === (a = n.completion).type && ((r = a.arg), D(n)), r
                );
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, a) {
            return (
              (this.delegate = { iterator: S(e), resultName: t, nextLoc: a }),
              "next" === this.method && (this.arg = void 0),
              d
            );
          },
        }),
        e
      );
    }
    function i(e, t, a, r, n, o, c) {
      try {
        var i = e[o](c),
          l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(r, n);
    }
    function l(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return s(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        (function (e, t) {
          var a;
          if (e)
            return "string" == typeof e
              ? s(e, t)
              : "Map" ===
                  (a =
                    "Object" ===
                      (a = Object.prototype.toString.call(e).slice(8, -1)) &&
                    e.constructor
                      ? e.constructor.name
                      : a) || "Set" === a
              ? Array.from(e)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? s(e, t)
              : void 0;
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function s(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    function u(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function p(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? u(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== o(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== o((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === o(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : u(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    var d = function (e, t) {
        return function (a, o) {
          var c = (o = o()).shortlists;
          o.userInfoData,
            console.log("Shortlist object found :", c),
            console.log("Shortlist payload :", e),
            n.a.post("/prop/shortlist", e).then(function (n) {
              var o, i, s;
              console.log("Shortlist : ", n.data),
                (n = n.data).shortlistrfnum
                  ? ((o = n.pmtrfnumEnc),
                    (s = (i =
                      c.userId === e.ubirfnumEnc ? c.props : []).includes(o)),
                    console.log("Property id  :", o),
                    console.log("Property is already added :", s),
                    s
                      ? ((s = p(
                          p({}, c),
                          {},
                          { userId: e.ubirfnumEnc, props: l(i) }
                        )),
                        a({ type: r.o, payload: s }))
                      : ((s = p(
                          p({}, c),
                          {},
                          { userId: e.ubirfnumEnc, props: [].concat(l(i), [o]) }
                        )),
                        a({ type: r.o, payload: s })))
                  : console.log("Error in shortlisting :", n),
                t(n);
            });
        };
      },
      m = function (e, t) {
        return function (a, o) {
          var l = { encPropId: e.pmtrfnumEnc, ubirfnum: e.ubirfnumEnc },
            s = (o = o()).shortlists,
            u = (o.userInfoData, s.userId === e.ubirfnumEnc ? s.props : []),
            d = e.pmtrfnumEnc;
          (function () {
            e = c().mark(function e() {
              return c().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), n.a.post("/shortlist/delete", l);
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            });
            var e,
              t = function () {
                var t = this,
                  a = arguments;
                return new Promise(function (r, n) {
                  var o = e.apply(t, a);
                  function c(e) {
                    i(o, r, n, c, l, "next", e);
                  }
                  function l(e) {
                    i(o, r, n, c, l, "throw", e);
                  }
                  c(void 0);
                });
              };
            return function () {
              return t.apply(this, arguments);
            };
          })()().then(function (n) {
            var o;
            console.log("get delete api called ", n),
              null !== n &&
                void 0 !== n.data &&
                null !== n.data &&
                (n.data.error
                  ? (t("failure"), console.log("error in deshortlisting"))
                  : ((o = []),
                    u.map(function (e) {
                      e != d && o.push(e);
                    }),
                    (n = p(
                      p({}, s),
                      {},
                      { userId: e.ubirfnumEnc, props: [].concat(o) }
                    )),
                    a({ type: r.o, payload: n }),
                    t("success"),
                    console.log("successfully deshortlisted property")));
          });
        };
      },
      y = function (e) {
        return function (t, a) {
          console.log("getAllShortlist  userIdEnc :", e);
          var o = { ubirfnumEnc: e };
          console.log("************* Fetching all shortlists by user ", e),
            n.a.post("/prop/getshortlists", o).then(function (e) {
              console.log(
                "getAllShortlist data ***********************: ",
                e.data
              ),
                (e = e.data),
                t({ type: r.p, payload: e });
            });
        };
      },
      b = function (e) {
        return function (t, a) {
          t({ type: "isShortListFormOpen", payload: e });
        };
      };
  },
  349: function (e, t, a) {
    "use strict";
    var r = a(0),
      n = a.n(r),
      o = a(2),
      c = (a(252), a(214)),
      i = a(162),
      l = a(188),
      s = a(250),
      u = a(137),
      p = a(175),
      d = a(53),
      m = a(300),
      y = a(139),
      b = a(89),
      v = a(136),
      f = a(61),
      g = a(102),
      h = a(13),
      _ = a(52),
      O = a(44),
      D = a(215),
      j = a(103),
      S = a(161),
      P = a(216),
      N = a(116),
      w = a(47),
      E = a(28),
      T = a(3),
      k = a(115),
      C = a(135),
      A = a(1),
      I = a(91),
      L = a(45),
      x = a(6),
      B = a(25),
      F = a(34),
      R = a(55),
      U = a(60),
      M = a(256),
      V = a(452),
      q = a(896),
      Y = a(357),
      G = a(191),
      W = a(213);
    function H(e) {
      return (H =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function z(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function J(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? z(Object(a), !0).forEach(function (t) {
              K(e, t, a[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : z(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    function K(e, t, a) {
      (t = (function (e) {
        return (
          (e = (function (e, t) {
            if ("object" !== H(e) || null === e) return e;
            var a = e[Symbol.toPrimitive];
            if (void 0 === a) return String(e);
            if ("object" !== H((a = a.call(e, "string")))) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          })(e)),
          "symbol" === H(e) ? e : String(e)
        );
      })(t)) in e
        ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = a);
    }
    function $(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var a =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != a) {
            var r,
              n,
              o,
              c,
              i = [],
              l = !0,
              s = !1;
            try {
              if (((o = (a = a.call(e)).next), 0 === t)) {
                if (Object(a) !== a) return;
                l = !1;
              } else
                for (
                  ;
                  !(l = (r = o.call(a)).done) &&
                  (i.push(r.value), i.length !== t);
                  l = !0
                );
            } catch (e) {
              (s = !0), (n = e);
            } finally {
              try {
                if (
                  !l &&
                  null != a.return &&
                  ((c = a.return()), Object(c) !== c)
                )
                  return;
              } finally {
                if (s) throw n;
              }
            }
            return i;
          }
        })(e, t) ||
        (function (e, t) {
          var a;
          if (e)
            return "string" == typeof e
              ? Q(e, t)
              : "Map" ===
                  (a =
                    "Object" ===
                      (a = Object.prototype.toString.call(e).slice(8, -1)) &&
                    e.constructor
                      ? e.constructor.name
                      : a) || "Set" === a
              ? Array.from(e)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? Q(e, t)
              : void 0;
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function Q(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    M.a.use([V.a, q.a]),
      (t.a = function (e) {
        function t(t, r, n, o) {
          t.stopPropagation();
          var c,
            i,
            l,
            s,
            u,
            p,
            d,
            m,
            y,
            b,
            v,
            f,
            g,
            _,
            O,
            D = "",
            j = "revamp_srp_proptuple_contact",
            S = "",
            P = "",
            N = n + 1,
            w = "",
            k = "WAP",
            C = "search_wap",
            I = x.a.readCookie("trackerCookie");
          Object(A.t)(I)
            ? Object(A.t)(I) &&
              !Object(A.t)(document.referrer) &&
              document.referrer.includes(".google") &&
              (x.a.createCookieRem("trackerCookie", "Google_Organic", 180),
              (k = "wap_Google_Organic"))
            : (k = "wap_" + I),
            Object(A.v)(r)
              ? Object(A.t)(r) || "Request Photo" !== r
                ? Object(A.t)(r) ||
                  "MB Prime" !== r ||
                  ((D = r),
                  (w =
                    "property_for_" + Object(A.l)(H) + "_" + D + "_RevampSRP"),
                  (I = J(
                    {
                      event: "event_tracking",
                      eventName: (j = "revamp_srp_proptuple_contact"),
                      nonInteraction: !1,
                      eventCategory: "contactsuccess",
                      eventAction: P,
                      eventLabel: (S = N + " / " + re.contactList.length),
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (l = J(
                    {
                      event: "event_tracking",
                      eventName: j,
                      nonInteraction: !1,
                      eventCategory: "contactinfoformopen",
                      eventAction: P,
                      eventLabel: S,
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (s = J(
                    {
                      event: "event_tracking",
                      eventName: j,
                      nonInteraction: !1,
                      eventCategory: "Contact Info Form",
                      eventAction: P,
                      eventLabel: S,
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (i = J(
                    {
                      event: "event_tracking",
                      eventName: j,
                      nonInteraction: !1,
                      eventCategory: "Contact Info Form",
                      eventAction: P,
                      eventLabel: S,
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (p = J(
                    {
                      event: "event_tracking",
                      eventName: j,
                      nonInteraction: !1,
                      eventCategory: "contactinfoformsubmit",
                      eventAction: P,
                      eventLabel: S,
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (d = J(
                    {
                      event: "event_tracking",
                      eventName: j,
                      nonInteraction: !1,
                      eventCategory: "contactotpformopen",
                      eventAction: P,
                      eventLabel: S,
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (m = J(
                    {
                      event: "event_tracking",
                      eventName: j,
                      nonInteraction: !1,
                      eventCategory: "Contact Otp Form",
                      eventAction: P,
                      eventLabel: S,
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (y = J(
                    {
                      event: "event_tracking",
                      eventName: j,
                      nonInteraction: !1,
                      eventCategory: "Contact Otp Form",
                      eventAction: P,
                      eventLabel: S,
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (b = J(
                    {
                      event: "event_tracking",
                      eventName: j,
                      nonInteraction: !1,
                      eventCategory: "contactotpformsubmit",
                      eventAction: P,
                      eventLabel: S,
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (v = J(
                    {
                      event: "event_tracking",
                      eventName: "revamp_srp_thank_contact",
                      nonInteraction: !1,
                      eventCategory: "revamp srp - thank you page",
                      eventAction: "page load",
                      eventLabel: "page load",
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (f = J(
                    {
                      event: "event_tracking",
                      eventName: "revamp_srp_thank_contact",
                      nonInteraction: !1,
                      eventCategory: "contactbuttonclicked",
                      eventAction:
                        "revamp srp | propertycontact | propertysearch | thankyou | duplicate",
                      eventLabel: "only",
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (g = J(
                    {
                      event: "event_tracking",
                      eventName: "revamp_srp_thank_contact",
                      nonInteraction: !1,
                      eventCategory: "contactsuccess",
                      eventAction:
                        "revamp srp | propertycontact | propertysearch | thankyou | duplicate",
                      eventLabel: "only",
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (_ = J(
                    {
                      event: "event_tracking",
                      eventName: "revamp_srp_thank_contact",
                      nonInteraction: !1,
                      eventCategory: "contactbuttonclicked",
                      eventAction:
                        "revamp srp | propertycontact | propertysearch | thankyou | reco | primary",
                      eventLabel: "Rank of card / Total cards",
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (O = J(
                    {
                      event: "event_tracking",
                      eventName: "revamp_srp_thank_contact",
                      nonInteraction: !1,
                      eventCategory: "contactsuccess",
                      eventAction:
                        "revamp srp | propertycontact | propertysearch | thankyou | reco | primary",
                      eventLabel: "Rank of card / Total cards",
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (u = J(
                    {
                      event: "event_tracking",
                      eventName: "revamp_srp_thank",
                      nonInteraction: !1,
                      eventCategory: "revamp srp - thank you page",
                      eventAction: "get details on sms",
                      eventLabel: "propertysearch | thankyou",
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  null != e.shortListed && 1 == e.shortListed
                    ? ((c = J(
                        {
                          event: "event_tracking",
                          eventName: "shortlist_page_proptuple_contact",
                          nonInteraction: !1,
                          eventCategory: "contactbuttonclicked",
                          eventAction: Object(E.a)(N, !0),
                          eventLabel: S,
                          eventValue: "",
                          cd96: D,
                        },
                        o
                      )),
                      a({
                        type: "SHORTLIST_GA_DATA",
                        payload: { shortListGaCommonData: c },
                      }),
                      a(Object(T.e)(c)))
                    : a(
                        Object(T.e)(
                          J(
                            {
                              event: "event_tracking",
                              eventName: j,
                              nonInteraction: !1,
                              eventCategory: "contactbuttonclicked",
                              eventAction: P,
                              eventLabel: S,
                              eventValue: "",
                              cd96: D,
                            },
                            o
                          )
                        )
                      ),
                  a(Object(h.d)(t)),
                  a(
                    Object(h.b)(
                      t,
                      {
                        buttonType: "MB Prime",
                        contactType: "property",
                        searchType: 1,
                        propertyId: e.cardData.id,
                        advertisers: e.cardData.id,
                        requestInterface: "search_wap",
                        contactTrackCookie: w,
                        campaignCode: "WAP",
                        isLoginAndInfra: !1,
                        formName: "SRP_TOP_CONTACT",
                        contact_interface: "property_card_contact",
                        gaObject: {
                          contactsuccess: I,
                          contactinfoformopen: l,
                          contactInfoFormError: s,
                          contactInfoFormClose: i,
                          contactinfoformsubmit: p,
                          contactotpformopen: d,
                          contactOtpFormError: m,
                          contactOtpFormClose: y,
                          contactotpformsubmit: b,
                          thankyoupageLoad: v,
                          thankyoucontactBuilderClick: f,
                          thankyoucontactBuilderSuccess: g,
                          thankyoucontactRecommendClick: _,
                          thankyoucontactRecommendSuccess: O,
                          thankyougetdetailsonsms: u,
                        },
                      },
                      e.cardData,
                      le.finalPrice,
                      ie
                    )
                  ))
                : ((D = r),
                  (w =
                    "property_for_" + Object(A.l)(H) + "_" + D + "_RevampSRP"),
                  (j = "revamp_srp_proptuple_contact"),
                  (c = "contactbuttonclicked"),
                  (S = "request photos"),
                  (P =
                    "revamp srp | propertycontact | propertysearch | property tuple | misc | request photos"),
                  (I = J(J({}, o), {}, { cd142: "otp contact" })),
                  (l = Object(L.c)(j, P, S, D, I)),
                  null != X && X.virtualNumberDataAvailable
                    ? a(
                        Object(T.e)(
                          J(
                            {
                              event: "event_tracking",
                              eventName: j,
                              nonInteraction: !1,
                              eventCategory: c,
                              eventAction: P,
                              eventLabel: S,
                              eventValue: "",
                              cd96: D + "_vn",
                            },
                            I
                          )
                        )
                      )
                    : a(
                        Object(T.e)(
                          J(
                            {
                              event: "event_tracking",
                              eventName: j,
                              nonInteraction: !1,
                              eventCategory: c,
                              eventAction: P,
                              eventLabel: S,
                              eventValue: "",
                              cd96: D,
                            },
                            I
                          )
                        )
                      ),
                  a(Object(h.d)(t)),
                  (s = J(
                    {
                      event: "event_tracking",
                      eventName: "revamp_srp_proptuple_contact",
                      nonInteraction: !1,
                      eventCategory: "Virtualnumber-Contact_Form Shown",
                      eventAction: P,
                      eventLabel: S,
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  a(
                    Object(h.b)(
                      t,
                      (K(
                        (i = {
                          buttonType: D,
                          contactType: "property",
                          searchType: 1,
                          propertyId: e.cardData.id,
                          advertisers: e.cardData.id,
                          requestInterface: "search_wap",
                          contactTrackCookie: w,
                          campaignCode: "WAP",
                          isLoginAndInfra: !1,
                          formName: "SRP_TOP_CONTACT",
                          contact_interface: "property_card_contact",
                          pType: e.cardData.ty,
                        }),
                        "campaignCode",
                        k
                      ),
                      K(i, "gaObject", l),
                      K(i, "vnGa", s),
                      i),
                      e.cardData,
                      le.finalPrice,
                      ie
                    )
                  ))
              : (("Ask Owner to Call" != r.btnText &&
                  "Send Enquiry" != r.btnText) ||
                  a(
                    Object(T.e)(
                      J(
                        {
                          event: "event_tracking",
                          eventName: "revamp_srp_dynamic_listing",
                          nonInteraction: !1,
                          eventCategory: "MB Prime_Wap CTA Change Click",
                          eventAction:
                            "MB Prime_Wap_SRP_Free Owner Prop CTA Change Clicked_" +
                            e.cardData.ty +
                            "_" +
                            e.category,
                          eventLabel: Z,
                          eventValue: "",
                          cd21: e.cardData.ty,
                        },
                        o
                      )
                    )
                  ),
                "Show Similar" == r.btnText
                  ? ((p =
                      "property_clicked_on_" +
                      (Object(A.t)(e.cardData.id) ? "" : e.cardData.id) +
                      " | project_clicked_on_" +
                      (Object(A.t)(e.cardData.psmid) ? "" : e.cardData.psmid) +
                      " | advertiser_type_got_clicked_" +
                      (Object(A.t)(e.cardData.userType)
                        ? ""
                        : e.cardData.userType) +
                      " | advertiser_type_paid_" +
                      (Object(A.t)(e.cardData.isPaidUser)
                        ? ""
                        : e.cardData.isPaidUser) +
                      " | service_ids_of_advertiser_" +
                      (Object(A.t)(e.cardData.sid)
                        ? ""
                        : e.cardData.sid.replace(/,/g, "#"))),
                    a(
                      Object(T.e)(
                        J(
                          {
                            event: "event_tracking",
                            eventName: "revamp_srp_dynamic_listing",
                            nonInteraction: !1,
                            eventCategory: "show_similar_builder",
                            eventAction:
                              "show similar clicked_page_SRP-cta label_" +
                              r.btnText,
                            eventLabel: p,
                            eventValue: "",
                            cd21: e.cardData.ty,
                          },
                          o
                        )
                      )
                    ),
                    ve(!0))
                  : ((D = r.btnText),
                    (w =
                      "property_for_" +
                      Object(A.l)(H) +
                      "_" +
                      D +
                      "_RevampSRP"),
                    (j = "revamp_srp_proptuple_contact"),
                    (S = N + " / " + re.contactList.length),
                    (P = Object(E.a)(N, !1)),
                    Object(A.t)(e.isBuilderSimilar) ||
                      1 != e.isBuilderSimilar ||
                      ((d = 1 == n ? "primary" : "secondary"),
                      (m = Object(A.t)(e.cardData.id) ? "" : e.cardData.id),
                      (y = Object(A.t)(e.cardData.psmid)
                        ? ""
                        : e.cardData.psmid),
                      (b =
                        Object(A.t)(e.cardData.cg) || "r" != e.cardData.cg
                          ? "sale"
                          : "rent"),
                      (v = ""),
                      (f =
                        "contact_button_" +
                        d +
                        ",contact_button_label_" +
                        D +
                        ",property_id_" +
                        m +
                        ",project_id_" +
                        y +
                        (v = Object(A.t)(e.serviceIds)
                          ? v
                          : ",serviceIds_" + e.serviceIds)),
                      a(
                        Object(T.e)(
                          J(
                            {
                              event: "event_tracking",
                              eventName: "revamp_srp_dynamic_listing",
                              nonInteraction: !1,
                              eventCategory: "show_similar_builder",
                              eventAction: "contact_button_clicked",
                              eventLabel: f,
                              eventValue: "",
                              cd21: e.cardData.ty,
                            },
                            o
                          )
                        )
                      ),
                      (P =
                        "page_propertysearch-cta label_" +
                        D +
                        " | SRP Similar Property Section"),
                      (w = ""),
                      (!Object(A.t)(e.isMobile) && 0 != e.isMobile) ||
                        ((w = "AA-"), (C = "search_web")),
                      (w =
                        w +
                        "propertysearch_" +
                        b +
                        "_similar project property card_" +
                        D),
                      (k =
                        Object(A.t)(e.isMobile) || 1 != e.isMobile
                          ? "Web_propertysearch_RevampSRP"
                          : "WAP_propertysearch_RevampSRP"),
                      Object(A.t)(e.serviceIds)) ||
                      ((w = w + "_serviceIds_" + e.serviceIds),
                      (S = S + "_serviceIds_" + e.serviceIds)),
                    (g = Object(L.c)(j, P, S, D, o)),
                    null != e.shortListed && 1 == e.shortListed
                      ? ((_ = J(
                          {
                            event: "event_tracking",
                            eventName: "shortlist_page_proptuple_contact",
                            nonInteraction: !1,
                            eventCategory: "contactbuttonclicked",
                            eventAction: Object(E.a)(N, !0),
                            eventLabel: S,
                            eventValue: "",
                            cd96: D,
                          },
                          o
                        )),
                        a({
                          type: "SHORTLIST_GA_DATA",
                          payload: { shortListGaCommonData: _ },
                        }),
                        a(Object(T.e)(_)))
                      : null != X && X.virtualNumberDataAvailable
                      ? a(
                          "Get Phone No." == D ||
                            "Request Callback" == D ||
                            "Enquire Now" == D
                            ? Object(T.e)(
                                J(
                                  {
                                    event: "event_tracking",
                                    eventName: j,
                                    nonInteraction: !1,
                                    eventCategory: "contactbuttonclicked",
                                    eventAction: P,
                                    eventLabel: S,
                                    eventValue: "",
                                    cd96: D + "_whatsapp",
                                  },
                                  o
                                )
                              )
                            : Object(T.e)(
                                J(
                                  {
                                    event: "event_tracking",
                                    eventName: j,
                                    nonInteraction: !1,
                                    eventCategory: "contactbuttonclicked",
                                    eventAction: P,
                                    eventLabel: S,
                                    eventValue: "",
                                    cd96: D + "_vn",
                                  },
                                  o
                                )
                              )
                        )
                      : a(
                          Object(T.e)(
                            J(
                              {
                                event: "event_tracking",
                                eventName: j,
                                nonInteraction: !1,
                                eventCategory: "contactbuttonclicked",
                                eventAction: P,
                                eventLabel: S,
                                eventValue: "",
                                cd96: D,
                              },
                              o
                            )
                          )
                        ),
                    (O = J(
                      {
                        event: "event_tracking",
                        eventName: "revamp_srp_proptuple_contact",
                        nonInteraction: !1,
                        eventCategory: "Virtualnumber-Contact_Form Shown",
                        eventAction: P,
                        eventLabel: S,
                        eventValue: "",
                        cd96: D,
                      },
                      o
                    )),
                    a(Object(h.d)(t)),
                    a(
                      Object(h.b)(
                        t,
                        (K(
                          (u = {
                            buttonType: D,
                            contactType: "property",
                            searchType: 1,
                            propertyId: e.cardData.id,
                            advertisers: e.cardData.id,
                            requestInterface: C,
                            contactTrackCookie: w,
                            campaignCode: "WAP",
                            isLoginAndInfra: !1,
                            formName: "SRP_TOP_CONTACT",
                            contact_interface: "property_card_contact",
                            pType: e.cardData.ty,
                          }),
                          "campaignCode",
                          k
                        ),
                        K(u, "gaObject", g),
                        K(u, "vnGa", O),
                        u),
                        e.cardData,
                        le.finalPrice,
                        ie
                      )
                    ),
                    r.btnText === F.a.PRIMEPLUS_AFTER_EXPIRED_CTA.ctaText &&
                      a(Object(F.b)(e.cardData, Q, F.c.CLICK, "wap"))));
        }
        var a = Object(o.c)(),
          V = e.isSortList,
          q = Object(o.d)(function (e) {
            return e.contactCtaData;
          }),
          H = Object(o.d)(function (e) {
            return e.searchBean;
          }),
          z = Object(o.d)(function (e) {
            return e.contactData;
          }),
          Q = Object(o.d)(function (e) {
            return e.userInfoData;
          }),
          X = Object(o.d)(function (e) {
            return e.clientBean;
          }),
          Z = (z = $(
            Object(r.useState)(
              z.requestBody && z.nonPrimeUserFreeOwnerLimitUsed
                ? z.nonPrimeUserFreeOwnerLimitUsed
                : 0
            ),
            2
          ))[0],
          ee =
            ((z =
              (z[1],
              Object(o.d)(function (e) {
                return e.pdpViewed;
              }))),
            Object(o.d)(function (e) {
              return e.constantDataBean;
            })),
          te = (ne = $(Object(r.useState)("Request Photos"), 2))[0],
          ae = ne[1],
          re =
            (void 0 !== Q.userPrimeMemberLoggedIn &&
              null !== Q.userPrimeMemberLoggedIn &&
              "Y" == Q.userPrimeMemberLoggedIn &&
              void 0 !== e.cardData.pp &&
              null !== e.cardData.pp &&
              "I" == e.cardData.pmp &&
              void 0 !== e.cardData.isPrimeLocProp &&
              null !== e.cardData.isPrimeLocProp &&
              e.cardData.isPrimeLocProp,
            Object(S.a)(
              e.cardData,
              e.additionalBeanData,
              null,
              null,
              e.searchPage,
              null,
              Q,
              ee,
              q,
              X,
              e.isBuilderSimilar
            )),
          ne = Object(b.a)(
            e.cardData,
            e.additionalBeanData,
            "N",
            e.ind,
            !0,
            null,
            e.searchPage,
            re.showPrimeProp
          ),
          oe =
            ((ee = Object(d.c)(e.cardData, null, null)),
            Object(f.d)(
              e.cardData,
              e.additionalBeanData.dynamicArea,
              !0,
              e.category
            )),
          ce =
            (Object(v.a)(e.cardData, e.additionalBeanData.isNRIUser),
            Object(C.a)(e.cardData, e.searchPage, !0)),
          ie =
            ((ce = Object(D.a)(e.cardData, e.searchPage, ce)),
            Object(O.g)(e.cardData, e.additionalBeanData),
            Object(g.a)(
              e.cardData,
              e.additionalBeanData,
              e.ind,
              e.searchPage,
              "",
              "",
              e.multilingualData
            )),
          le = Object(_.b)(e.cardData, e.additionalBeanData),
          se = Object(j.a)(
            e.cardData,
            e.additionalBeanData,
            e.ind,
            "https://www.magicbricks.com/propertyDetails/",
            "https://stgauction.magicbricks.com/"
          ),
          ue = Object(P.a)(re, se),
          pe = Object(E.d)(
            e.cardData,
            le,
            e.ind,
            ee.imgCount,
            e.additionalBeanData,
            e.searchPage,
            ce,
            ne,
            Q,
            e.isNsr,
            re.mbPrimeFreeOwnProp
          ),
          de = Object(N.a)(e.cardData, !0),
          me = (oe =
            (Object(f.e)(oe, e.searchPage, e.cardData.cg, e.multilingualData),
            $(
              Object(r.useState)(
                z &&
                  z.viewedProperties &&
                  0 < z.viewedProperties.length &&
                  -1 !=
                    z.viewedProperties.findIndex(function (t) {
                      return t == e.cardData.id;
                    })
              ),
              2
            )))[0],
          ye = oe[1],
          be =
            ((z = Object(k.a)(
              e.cardData,
              e.additionalBeanData,
              e.searchPage,
              "https://www.magicbricks.com"
            )),
            (oe = Object(f.a)(e.cardData)),
            (ce =
              (Object(f.b)(ce, oe, e.searchPage),
              Object(w.b)(e.additionalBeanData, e.cardData, H))),
            (oe = Object(w.e)(e.additionalBeanData, e.cardData, H)),
            (ge = $(Object(r.useState)(!1), 2))[0]),
          ve = ge[1],
          fe =
            (Object(r.useEffect)(function () {
              Object(A.v)(re) ||
                Object(A.t)(re.contactList) ||
                re.contactList.every(function (t) {
                  return (
                    t.btnText !== F.a.PRIMEPLUS_AFTER_EXPIRED_CTA.ctaText ||
                    (a(Object(F.b)(e.cardData, Q, F.c.IMPRESSION, "wap")), !1)
                  );
                });
            }, []),
            q[e.cardData.id] &&
              null !== re.contactList &&
              re.contactList.map(function (t, a) {
                q[e.cardData.id].contactSecondText &&
                  0 === a &&
                  ((re.contactList[a].btnText =
                    q[e.cardData.id].contactSecondText),
                  (re.contactList[a].btnClass =
                    "mb-srp-m__action--btn medium btn-contacted-o")),
                  q[e.cardData.id].contactFirstText &&
                    1 === a &&
                    ((re.contactList[a].btnText =
                      q[e.cardData.id].contactFirstText),
                    (re.contactList[a].btnClass =
                      "mb-srp-m__action--btn medium btn-contacted"));
              }),
            Object(r.useEffect)(
              function () {
                q[e.cardData.id] &&
                  q[e.cardData.id].photoContactText &&
                  ae(q[e.cardData.id].photoContactText);
              },
              [q[e.cardData.id]]
            ),
            Object(r.useEffect)(
              function () {
                ve(!1);
              },
              [JSON.stringify(H)]
            ),
            []),
          ge = Object(A.t)(e.cardData.psmUspImgWeb)
            ? null
            : e.cardData.psmUspImgWeb;
        if (!Object(A.t)(ge))
          for (var he = ge.split(","), _e = 0; _e < he.length; _e++) {
            var Oe = he[_e].split("|");
            fe.push(Oe);
          }
        var De = n.a.useRef(n.a.createElement(M.a, null));
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            "div",
            {
              className: "mb-srp-m__card builder-card",
              onClick: e.isMobile
                ? function (t) {
                    return (
                      (r = e.cardData.id),
                      Object(I.a)(r),
                      void (re && "Y" !== re.appExclusive
                        ? "Y" == re.primeTag
                          ? ((r =
                              "https://www.magicbricks.com/mbprime/primePackages?source=" +
                              Object(B.e)(
                                "MBPrime_SRP_Item-defaultTemplate",
                                "wap",
                                "UnlockWithPrimeCTA"
                              )),
                            e.cardData.cg,
                            e.cardData.ty,
                            e.cardData.ct,
                            e.cardData.id,
                            a(
                              Object(T.e)(
                                J(
                                  {
                                    event: "event_tracking",
                                    eventName: "revamp_srp_dynamic_listing",
                                    nonInteraction: !1,
                                    eventCategory:
                                      "MB Prime_Wap Entry Point Click",
                                    eventAction:
                                      "MB Prime_Wap_SRP_PrimeExclusiveProperties Clicked_" +
                                      e.cardData.ty +
                                      "_" +
                                      e.category,
                                    eventLabel: Z,
                                    eventValue: "",
                                    cd21: e.cardData.ty,
                                  },
                                  pe
                                )
                              )
                            ),
                            window.open(r, "_blank").focus())
                          : (t.stopPropagation(),
                            Object(A.t)(e.isBuilderSimilar) ||
                              1 != e.isBuilderSimilar ||
                              (a(
                                Object(T.e)(
                                  J(
                                    {
                                      event: "event_tracking",
                                      eventName: "revamp_srp_dynamic_listing",
                                      nonInteraction: !1,
                                      eventCategory: "ldp page load",
                                      eventAction:
                                        "SRP Similar Property Section",
                                      eventLabel: "similar property card",
                                      eventValue: "",
                                      cd21: e.cardData.ty,
                                    },
                                    pe
                                  )
                                )
                              ),
                              a(
                                Object(T.e)(
                                  J(
                                    {
                                      event: "event_tracking",
                                      eventName: "revamp_srp_dynamic_listing",
                                      nonInteraction: !1,
                                      eventCategory: "show_similar_builder",
                                      eventAction: "card clicked",
                                      eventLabel: "LDP Page Load",
                                      eventValue: "",
                                      cd21: e.cardData.ty,
                                    },
                                    pe
                                  )
                                )
                              )),
                            (r =
                              -1 != se.indexOf("?")
                                ? se + "&srcrvmp=Y"
                                : se + "?&srcrvmp=Y"),
                            V
                              ? (Object(A.r)(r),
                                x.a.createCookie("quickViewOpen", "Y", 1 / 24))
                              : window.open(se, "_self"),
                            a(
                              Object(T.e)(
                                J(
                                  {
                                    event: "event_tracking",
                                    eventName: "revamp_srp_ldp_view",
                                    nonInteraction: !1,
                                    eventCategory:
                                      "revamp srp - property tuple misc actions",
                                    eventAction: "ldp launch click",
                                    eventLabel:
                                      "propertysearch | property tuple",
                                    eventValue: "",
                                    cd21: e.cardData.ty,
                                  },
                                  pe
                                )
                              )
                            ),
                            a({ type: "pdppageurl", payload: r }),
                            (t =
                              null != e.showSimiliarProperties &&
                              -1 ==
                                e.showSimiliarProperties
                                  .toString()
                                  .indexOf(e.cardData.id)
                                ? e.showSimiliarProperties.toString() +
                                  "," +
                                  e.cardData.id
                                : e.showSimiliarProperties.toString()),
                            e.setShowSimiliarProperties(t),
                            me ||
                              (ye(!0),
                              a({
                                type: "PROPERTY_VIEWED",
                                payload: e.cardData.id,
                              })))
                        : re &&
                          "Y" == re.appExclusive &&
                          (e.setShowAppDownloadPopup(!0),
                          e.setAppDownloadLink(ue)))
                    );
                    var r;
                  }
                : function (t) {
                    return (
                      (r = e.cardData.id),
                      Object(I.a)(r),
                      void ("Y" == re.primeTag && "N" == re.showPrimeProp
                        ? ((r =
                            "https://www.magicbricks.com/mbprime/primePackages?source=" +
                            getPrimeSourceText() +
                            "&category=" +
                            e.cardData.cg +
                            "&ptype=" +
                            e.cardData.ty +
                            "&cityCnd=" +
                            e.cardData.ct +
                            "&propId=" +
                            e.cardData.id),
                          a(
                            Object(T.e)(
                              J(
                                {
                                  event: "event_tracking",
                                  eventName: "revamp_srp_dynamic_listing",
                                  nonInteraction: !1,
                                  eventCategory: "mb prime entry point click",
                                  eventAction:
                                    "MB Prime_SRP_PrimeExclusiveProperties Clicked_" +
                                    e.cardData.ty +
                                    "_" +
                                    e.category,
                                  eventLabel: Z,
                                  eventValue: "",
                                  cd21: e.cardData.ty,
                                },
                                pe
                              )
                            )
                          ),
                          window.open(r, "_blank").focus())
                        : (Object(A.t)(e.isBuilderSimilar) ||
                            1 != e.isBuilderSimilar ||
                            (a(
                              Object(T.e)(
                                J(
                                  {
                                    event: "event_tracking",
                                    eventName: "revamp_srp_dynamic_listing",
                                    nonInteraction: !1,
                                    eventCategory: "ldp page load",
                                    eventAction: "SRP Similar Property Section",
                                    eventLabel: "similar property card",
                                    eventValue: "",
                                    cd21: e.cardData.ty,
                                  },
                                  pe
                                )
                              )
                            ),
                            a(
                              Object(T.e)(
                                J(
                                  {
                                    event: "event_tracking",
                                    eventName: "revamp_srp_dynamic_listing",
                                    nonInteraction: !1,
                                    eventCategory: "show_similar_builder",
                                    eventAction: "card clicked",
                                    eventLabel: "LDP Page Load",
                                    eventValue: "",
                                    cd21: e.cardData.ty,
                                  },
                                  pe
                                )
                              )
                            )),
                          window.open(se)))
                    );
                    var r;
                  },
              id: "cardid" + e.cardData.id,
            },
            n.a.createElement(
              "div",
              { className: "mb-srp-m__card__container" },
              n.a.createElement(
                "div",
                { className: "mb-srp-m__card__infotr" },
                e.isBuilderSimilar
                  ? n.a.createElement(i.a, {
                      requestPhotoCtaName: te,
                      imagePath:
                        Object(A.t)(e.cardData.psmUspImgMob) ||
                        Object(A.t)(e.cardData.psmUspImgMob.split(",")[0])
                          ? e.cardData.attrImg || ee.imgPath
                          : e.cardData.psmUspImgMob.split(",")[0].split("|")[1],
                      imageNotUploaded: ee.imageNotUploaded,
                      imageCount: ee.imgCount,
                      imagePostedDate: ee.dateCreated,
                      imageAltTag: null != de ? de : "",
                      requestPhotoLabel: ee.requestPhoto,
                      BtnAction: function (e) {
                        return t(e, "Request Photo", 1, pe);
                      },
                      cardIndex: e.ind,
                      postLabel: Object(d.a)(e.cardData)
                        ? "Updated"
                        : e.cardData.postedEditedLabel,
                      isSRPCard: !0,
                      multilingualData: e.multilingualData,
                    })
                  : n.a.createElement(
                      "div",
                      {
                        className: "builder-card-photo",
                        onClick: function (e) {
                          e.stopPropagation();
                        },
                        onTouchStart: function () {
                          De.current && De.current.autoplay.stop();
                        },
                        onTouchEnd: function () {
                          De.current && De.current.autoplay.start();
                        },
                      },
                      n.a.createElement(
                        R.a,
                        null,
                        n.a.createElement(
                          Y.a,
                          {
                            onInit: function (e) {
                              De.current = e;
                            },
                            pagination: { clickable: !0 },
                            autoplay: { delay: 3e3, disableOnInteraction: !1 },
                            loop: !Object(A.u)(fe) && 0 < fe.length,
                            spaceBetween: 16,
                            slidesPerView: 1,
                            onSlideChange: function () {},
                            onSwiper: function (e) {},
                          },
                          n.a.createElement(
                            G.a,
                            null,
                            n.a.createElement(
                              "div",
                              { className: "mb-srp-m__card__tags clearfix" },
                              ne &&
                                0 < ne.length &&
                                n.a.createElement(
                                  n.a.Fragment,
                                  null,
                                  ne.map(function (t, a) {
                                    return n.a.createElement(c.a, {
                                      divClassName: "".concat(t.classText),
                                      tagNameText: "".concat(t.tagText),
                                      key: "tag_".concat(a),
                                      multilingualData: e.multilingualData,
                                    });
                                  })
                                ),
                              null != e.cardData.pc &&
                                null != e.cardData.pc &&
                                0 < e.cardData.pc
                                ? n.a.createElement("div", {
                                    className:
                                      "mb-srp-m__card__tags--society-expert",
                                  })
                                : ""
                            ),
                            n.a.createElement(i.a, {
                              requestPhotoCtaName: te,
                              imagePath: e.cardData.attrImg || ee.imgPath,
                              imageNotUploaded: ee.imageNotUploaded,
                              imageCount: ee.imgCount,
                              imagePostedDate: ee.dateCreated,
                              imageAltTag: null != de ? de : "",
                              requestPhotoLabel: ee.requestPhoto,
                              BtnAction: function (e) {
                                return t(e, "Request Photo", 1, pe);
                              },
                              cardIndex: e.ind,
                              postLabel: Object(d.a)(e.cardData)
                                ? "Updated"
                                : e.cardData.postedEditedLabel,
                              isSRPCard: !0,
                              multilingualData: e.multilingualData,
                            })
                          ),
                          !Object(A.u)(fe) &&
                            0 < fe.length &&
                            fe.map(function (e, t) {
                              return n.a.createElement(
                                G.a,
                                null,
                                n.a.createElement(
                                  "div",
                                  { className: "builder-card-photo__usp" },
                                  e[0]
                                ),
                                n.a.createElement(U.a, {
                                  alt: e[0],
                                  src: e[1],
                                  dataSrc: e[1],
                                  modifyClass:
                                    "mb-srp__card__photo__fig--graphic customLazy",
                                  clickEvent: !1,
                                })
                              );
                            })
                        )
                      )
                    ),
                n.a.createElement(
                  "div",
                  { className: "mb-srp-m__card__info" },
                  !e.isBuilderSimilar &&
                    n.a.createElement(s.a, {
                      url: se,
                      propertyGaObj: pe,
                      priceMap: le,
                      titleText: ie,
                      multilingualData: e.multilingualData,
                      pmtLat: e.cardData.pmtLat,
                      pmtLong: e.cardData.pmtLong,
                      cardData: e.cardData,
                    }),
                  n.a.createElement(
                    "div",
                    { className: "mb-srp-m__card__head" },
                    n.a.createElement(
                      "span",
                      { className: "builder-card__price" },
                      n.a.createElement(u.a, {
                        priceMap: le,
                        multilingualData: e.multilingualData,
                      })
                    ),
                    e.cardData.bedroomD &&
                      n.a.createElement(
                        "span",
                        { className: "builder-card__bhk-sqft" },
                        e.cardData.bedroomD,
                        " BHK"
                      ),
                    e.cardData.coveredArea &&
                      n.a.createElement(
                        "span",
                        { className: "builder-card__bhk-sqft" },
                        e.cardData.coveredArea,
                        " sqft"
                      )
                  ),
                  z.societyName &&
                    n.a.createElement(
                      "div",
                      { className: "mb-srp-m__card__society" },
                      n.a.createElement(p.a, {
                        projectUrl: z.projectUrl,
                        societyName: z.societyName,
                        multilingualData: e.multilingualData,
                      })
                    ),
                  n.a.createElement(
                    "div",
                    { className: "builder-card__city-locality" },
                    e.cardData.lmtDName,
                    ", ",
                    e.cardData.ctName
                  )
                )
              ),
              !e.isBuilderSimilar &&
                n.a.createElement(m.a, {
                  seoSearch: e.seoSearch,
                  card: e.cardData,
                  search: e.searchPage,
                  propertyGaObj: pe,
                  appExclusive: re.appExclusive,
                  additionalBeanData: e.additionalBeanData,
                  category: e.category,
                }),
              re &&
                "N" == re.showPrimeProp &&
                "Y" !== re.appExclusive &&
                "Y" != re.primeTag &&
                re.contactList &&
                n.a.createElement(
                  "div",
                  {
                    className:
                      "mb-srp-m__action mb-srp-m__card__action ".concat(
                        e.isBuilderSimilar ? "" : "has-shortlist"
                      ),
                  },
                  !e.isBuilderSimilar &&
                    n.a.createElement(
                      n.a.Fragment,
                      null,
                      V
                        ? n.a.createElement(l.a, {
                            contactMap: re,
                            carddata: e.cardData,
                            mobile: !0,
                            additionalBeanData: e.additionalBeanData,
                            checkPropSoldOut: !1,
                          })
                        : ""
                    ),
                  null !== re.contactList &&
                    re.contactList.map(function (a, r) {
                      return n.a.createElement(y.a, {
                        BtnClassName: a.btnClass,
                        BtnText: a.btnText,
                        multilingualData: e.multilingualData,
                        BtnAction: function (e) {
                          return t(e, a, r, pe);
                        },
                      });
                    })
                )
            ),
            ce &&
              0 < ce.length &&
              n.a.createElement("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: { __html: ce },
              }),
            oe &&
              0 < oe.length &&
              n.a.createElement("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: { __html: oe },
              })
          ),
          be &&
            n.a.createElement(W.a, {
              propId: e.cardData.id,
              seoSearch: !1,
              additionalBeanData: e.additionalBeanData,
              searchPage: e.additionalBeanData.searchType,
              category: e.category,
              showSimiliarProperties: e.showSimiliarProperties,
              setShowSimiliarProperties: e.setShowSimiliarProperties,
              setShowAppDownloadPopup: e.setShowAppDownloadPopup,
              setAppDownloadLink: e.setAppDownloadLink,
              isSortList: !1,
              isMobile: !0,
              serviceIds: e.cardData.sid,
            })
        );
      });
  },
  418: function (e, t, a) {
    "use strict";
    function r(e) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function n(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function o(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? n(Object(a), !0).forEach(function (t) {
              var n, o;
              (n = e),
                (o = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== r(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== r((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === r(e) ? e : String(e)
                  );
                })(t)) in n
                  ? Object.defineProperty(n, t, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[t] = o);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : n(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    var c = o(
      o({}, window.SERVER_PRELOADED_STATE_ || {}),
      {},
      { isCsr: "true" }
    );
    t.a = c;
  },
  431: function (e, t, a) {
    "use strict";
    var r = a(0),
      n = a.n(r);
    t.a = function (e) {
      var t = e.landmarkDetails,
        a = e.nearMePropDistance;
      return (e = e.cardData) && e.DSLogicDist && "0.0" != e.DSLogicDist
        ? n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              "div",
              { className: "mb-srp-m__card__nearby" },
              n.a.createElement(
                "div",
                { className: "mb-srp-m__card__nearby--row" },
                n.a.createElement(
                  "div",
                  { className: "mb-srp-m__card__nearby__tag" },
                  n.a.createElement(
                    "span",
                    { className: "mb-srp-m__card__nearby__tag--item" },
                    e.DSLogicDist,
                    " KM away from ",
                    e.urlLocName
                  )
                )
              )
            )
          )
        : n.a.createElement(
            n.a.Fragment,
            null,
            ((t && 0 < t.length) || (a && 0 < a.length)) &&
              n.a.createElement(
                "div",
                { className: "mb-srp-m__card__nearby" },
                n.a.createElement(
                  "div",
                  { className: "mb-srp-m__card__nearby--row" },
                  n.a.createElement(
                    "div",
                    { className: "mb-srp-m__card__nearby--title" },
                    "Nearby"
                  ),
                  n.a.createElement(
                    "div",
                    { className: "mb-srp-m__card__nearby__tag" },
                    a &&
                      0 < a.length &&
                      n.a.createElement(
                        "span",
                        {
                          className: "mb-srp-m__card__nearby__tag--item",
                          title: a,
                        },
                        a
                      ),
                    t &&
                      0 < t.length &&
                      t.map(function (e) {
                        return n.a.createElement(
                          "span",
                          { className: "mb-srp-m__card__nearby__tag--item" },
                          e.toString().split("|")[1]
                        );
                      })
                  )
                )
              )
          );
    };
  },
  446: function (e, t, a) {
    "use strict";
    var r = a(0),
      n = a.n(r),
      o = a(2),
      c = a(419),
      i = a(251),
      l = a(284),
      s = a(302),
      u = a(286),
      p = a(421),
      d = a(287),
      m = a(422),
      y = a(423),
      b = a(445),
      v = a(301),
      f = a(97),
      g = a(220),
      h = a(61),
      _ = a(89),
      O = a(160),
      D = a(135),
      j = a(53),
      S = a(136),
      P = a(13),
      N = a(103),
      w = a(115),
      E = a(809),
      T = a(3),
      k = a(52),
      C = a(28),
      A = a(116),
      I = (a(664), a(810)),
      L = a(428),
      x = a(47),
      B = (a(429), a(1)),
      F = a(102),
      R = a(91),
      U = a(45),
      M = (a(383), a(6)),
      V = (a(550), a(292));
    function q(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var a =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != a) {
            var r,
              n,
              o,
              c,
              i = [],
              l = !0,
              s = !1;
            try {
              if (((o = (a = a.call(e)).next), 0 === t)) {
                if (Object(a) !== a) return;
                l = !1;
              } else
                for (
                  ;
                  !(l = (r = o.call(a)).done) &&
                  (i.push(r.value), i.length !== t);
                  l = !0
                );
            } catch (e) {
              (s = !0), (n = e);
            } finally {
              try {
                if (
                  !l &&
                  null != a.return &&
                  ((c = a.return()), Object(c) !== c)
                )
                  return;
              } finally {
                if (s) throw n;
              }
            }
            return i;
          }
        })(e, t) ||
        (function (e, t) {
          var a;
          if (e)
            return "string" == typeof e
              ? Y(e, t)
              : "Map" ===
                  (a =
                    "Object" ===
                      (a = Object.prototype.toString.call(e).slice(8, -1)) &&
                    e.constructor
                      ? e.constructor.name
                      : a) || "Set" === a
              ? Array.from(e)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? Y(e, t)
              : void 0;
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function Y(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    function G(e) {
      var t = e.landmarkDetails,
        a = e.nearMePropDistance,
        o = ((e = e.cardData), q(Object(r.useState)(!1), 2)),
        c = o[0],
        i = o[1];
      return e && e.DSLogicDist && "0.0" != e.DSLogicDist
        ? n.a.createElement(
            "div",
            { class: "mb-srp__card__nearby" },
            n.a.createElement(
              "div",
              { className: "mb-srp__card__nearby--row" },
              n.a.createElement(
                "div",
                { className: "mb-srp__card__nearby__tag" },
                n.a.createElement(
                  "span",
                  { className: "mb-srp__card__nearby__tag--item" },
                  e.DSLogicDist,
                  " KM away from ",
                  e.urlLocName
                )
              )
            )
          )
        : n.a.createElement(
            n.a.Fragment,
            null,
            ((t && 0 < t.length) || (a && 0 < a.length)) &&
              n.a.createElement(
                "div",
                {
                  className: "mb-srp__card__nearby ".concat(c ? "active" : ""),
                  onClick: function (e) {
                    return e.stopPropagation();
                  },
                  onMouseLeave: function () {
                    return i(!1);
                  },
                },
                n.a.createElement(
                  "div",
                  { className: "mb-srp__card__nearby--row" },
                  n.a.createElement(
                    "div",
                    { className: "mb-srp__card__nearby--title" },
                    "Nearby"
                  ),
                  n.a.createElement(
                    "div",
                    { className: "mb-srp__card__nearby__tag" },
                    a &&
                      0 < a.length &&
                      n.a.createElement(
                        "span",
                        {
                          className: "mb-srp__card__nearby__tag--item",
                          title: a,
                        },
                        a
                      ),
                    n.a.createElement(
                      n.a.Fragment,
                      null,
                      t &&
                        0 < t.length &&
                        t.map(function (e) {
                          return n.a.createElement(
                            "span",
                            { className: "mb-srp__card__nearby__tag--item" },
                            e.toString().split("|")[1]
                          );
                        })
                    ),
                    !1 === c &&
                      n.a.createElement("span", {
                        className: "mb-srp__card__nearby__tag--arrow",
                        onMouseOver: function () {
                          return i(!0);
                        },
                      })
                  )
                )
              )
          );
    }
    var W = a(114),
      H = a(25),
      z = a(34),
      J = a(213);
    function K(e) {
      return (K =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function $(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return te(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        ee(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function Q(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function X(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Q(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== K(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== K((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === K(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : Q(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    function Z(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var a =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != a) {
            var r,
              n,
              o,
              c,
              i = [],
              l = !0,
              s = !1;
            try {
              if (((o = (a = a.call(e)).next), 0 === t)) {
                if (Object(a) !== a) return;
                l = !1;
              } else
                for (
                  ;
                  !(l = (r = o.call(a)).done) &&
                  (i.push(r.value), i.length !== t);
                  l = !0
                );
            } catch (e) {
              (s = !0), (n = e);
            } finally {
              try {
                if (
                  !l &&
                  null != a.return &&
                  ((c = a.return()), Object(c) !== c)
                )
                  return;
              } finally {
                if (s) throw n;
              }
            }
            return i;
          }
        })(e, t) ||
        ee(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function ee(e, t) {
      var a;
      if (e)
        return "string" == typeof e
          ? te(e, t)
          : "Map" ===
              (a =
                "Object" ===
                  (a = Object.prototype.toString.call(e).slice(8, -1)) &&
                e.constructor
                  ? e.constructor.name
                  : a) || "Set" === a
          ? Array.from(e)
          : "Arguments" === a ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
          ? te(e, t)
          : void 0;
    }
    function te(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    function ae(e) {
      function t(t, a, r, n) {
        if ("Y" != fe.primeTag) {
          if ((t.stopPropagation(), !je || "Show Similar" === a.btnText)) {
            var o = "",
              c = "revamp_srp_proptuple_contact",
              i = "",
              l = "",
              s = ((r = r + 1), ""),
              u = M.a.readCookie("trackerCookie");
            if (
              (Object(B.t)(u)
                ? Object(B.t)(u) &&
                  !Object(B.t)(document.referrer) &&
                  document.referrer.includes(".google") &&
                  (M.a.createCookieRem("trackerCookie", "Google_Organic", 180),
                  (s = "Google_Organic"))
                : (s = u),
              Object(B.v)(a))
            )
              Object(B.t)(a) ||
                "Request Photo" !== a ||
                ((o = a),
                (c = "revamp_srp_proptuple_contact"),
                (i = "request photos"),
                (l =
                  "revamp srp | propertycontact | propertysearch | property tuple | misc | request photos"),
                (u = X(X({}, n), {}, { cd142: "otp contact" })),
                (p = Object(U.c)(c, l, i, o, u)),
                me(
                  Object(T.e)(
                    X(
                      {
                        event: "event_tracking",
                        eventName: c,
                        nonInteraction: !1,
                        eventCategory: "contactbuttonclicked",
                        eventAction: l,
                        eventLabel: i,
                        eventValue: "",
                        cd96: o,
                      },
                      u
                    )
                  )
                ),
                me(Object(P.d)(t)),
                me(
                  Object(P.a)(
                    t,
                    {
                      buttonType: o,
                      contactType: "property",
                      searchType: 1,
                      propertyId: e.cardData.id,
                      advertisers: e.cardData.id,
                      requestInterface: "search_web",
                      isLoginAndInfra: !1,
                      formName: "SRP_TOP_CONTACT",
                      contact_interface: "property_card_contact",
                      pType: e.cardData.ty,
                      campaignCode: s,
                      gaObject: p,
                    },
                    e.cardData,
                    n
                  )
                ));
            else {
              if ("Share Feedback" == a.btnText)
                me(Object(P.d)(t)),
                  me(
                    Object(P.a)(
                      t,
                      { buttonType: "Share Feedback" },
                      e.cardData,
                      n
                    )
                  );
              else {
                if (
                  (("Ask Owner to Call" != a.btnText &&
                    "Send Enquiry" != a.btnText) ||
                    me(
                      Object(T.e)(
                        X(
                          {
                            event: "event_tracking",
                            eventName: "revamp_srp_dynamic_listing",
                            nonInteraction: !1,
                            eventCategory: "MB Prime CTA Change Click",
                            eventAction:
                              "MB Prime_SRP_Free Owner Prop CTA Change Clicked_" +
                              e.cardData.ty +
                              "_" +
                              e.category,
                            eventLabel: ae,
                            eventValue: "",
                            cd21: e.cardData.ty,
                          },
                          n
                        )
                      )
                    ),
                  "Show Similar" == a.btnText)
                )
                  return (
                    (u =
                      "property_clicked_on_" +
                      (Object(B.t)(e.cardData.id) ? "" : e.cardData.id) +
                      " | project_clicked_on_" +
                      (Object(B.t)(e.cardData.psmid) ? "" : e.cardData.psmid) +
                      " | advertiser_type_got_clicked_" +
                      (Object(B.t)(e.cardData.userType)
                        ? ""
                        : e.cardData.userType) +
                      " | advertiser_type_paid_" +
                      (Object(B.t)(e.cardData.isPaidUser)
                        ? ""
                        : e.cardData.isPaidUser) +
                      " | service_ids_of_advertiser_" +
                      (Object(B.t)(e.cardData.sid)
                        ? ""
                        : e.cardData.sid.replace(/,/g, "#"))),
                    me(
                      Object(T.e)(
                        X(
                          {
                            event: "event_tracking",
                            eventName: "revamp_srp_dynamic_listing",
                            nonInteraction: !1,
                            eventCategory: "show_similar_builder",
                            eventAction:
                              "show similar clicked_page_SRP-cta label_" +
                              a.btnText,
                            eventLabel: u,
                            eventValue: "",
                            cd21: e.cardData.ty,
                          },
                          n
                        )
                      )
                    ),
                    void De(!0)
                  );
                (c = "revamp_srp_proptuple_contact"),
                  (o = a.btnText),
                  (i =
                    r +
                    " / " +
                    fe.contactList.filter(function (e) {
                      return "Share Feedback" != e.btnText;
                    }).length),
                  (l = Object(C.a)(r, !1));
                var p = Object(U.c)(c, l, i, o, n);
                null != e.shortListed && 1 == e.shortListed
                  ? ((u = X(
                      {
                        event: "event_tracking",
                        eventName: "shortlist_page_proptuple_contact",
                        nonInteraction: !1,
                        eventCategory: "contactbuttonclicked",
                        eventAction: Object(C.a)(r, !0),
                        eventLabel: i,
                        eventValue: "",
                        cd96: o,
                      },
                      n
                    )),
                    me({
                      type: "SHORTLIST_GA_DATA",
                      payload: { shortListGaCommonData: u },
                    }),
                    me(Object(T.e)(u)))
                  : me(
                      Object(T.e)(
                        X(
                          {
                            event: "event_tracking",
                            eventName: c,
                            nonInteraction: !1,
                            eventCategory: "contactbuttonclicked",
                            eventAction: l,
                            eventLabel: i,
                            eventValue: "",
                            cd96: o,
                          },
                          n
                        )
                      )
                    ),
                  me(Object(P.d)(t)),
                  me(
                    Object(P.a)(
                      t,
                      {
                        buttonType: o,
                        contactType: "property",
                        searchType: 1,
                        propertyId: e.cardData.id,
                        advertisers: e.cardData.id,
                        requestInterface: "search_web",
                        isLoginAndInfra: !1,
                        formName: "SRP_TOP_CONTACT",
                        contact_interface: "property_card_contact",
                        pType: e.cardData.ty,
                        campaignCode: s,
                        gaObject: p,
                        isShortList: e.shortListed,
                      },
                      e.cardData,
                      n
                    )
                  );
              }
              a.btnText === z.a.PRIMEPLUS_AFTER_EXPIRED_CTA.ctaText &&
                me(Object(z.b)(e.cardData, ee, z.c.CLICK, "web"));
            }
          }
        } else
          "Y" === fe.primeTag &&
            "Video Tour" === a.btnText &&
            (t.stopPropagation(),
            me(Object(W.b)(!0)),
            me(
              Object(T.e)(
                X(
                  {
                    event: "event_tracking",
                    eventName: "revamp_srp_dynamic_listing",
                    nonInteraction: !1,
                    eventCategory: "mb prime entry point click",
                    eventAction:
                      "MB Prime_SRP_PrimeExclusiveProperties Clicked_" +
                      e.cardData.ty +
                      "_" +
                      e.category +
                      "_Video Tour CTA",
                    eventLabel: ae,
                    eventValue: "",
                    cd21: e.cardData.ty,
                  },
                  n
                )
              )
            ),
            console.log("Is prime button is set to true"));
      }
      function a() {
        return (
          (null != e.additionalBeanData &&
            "Y" == e.additionalBeanData.isNearMeSeoUrl) ||
          (null != Pe && 1 == Pe)
        );
      }
      var q,
        Y = Object(o.d)(function (e) {
          return e.contactCtaData;
        }),
        K = Object(o.d)(function (e) {
          return e.contactData;
        }),
        Q = Object(o.d)(function (e) {
          return e.searchBean;
        }),
        ee = Object(o.d)(function (e) {
          return e.userInfoData;
        }),
        te = Object(o.d)(function (e) {
          return e.clientBean;
        }),
        ae = (ue = Z(
          Object(r.useState)(
            K.requestBody && K.nonPrimeUserFreeOwnerLimitUsed
              ? K.nonPrimeUserFreeOwnerLimitUsed
              : 0
          ),
          2
        ))[0];
      ue[1];
      var re = (ue = Z(Object(r.useState)(!1), 2))[0],
        ne = ue[1],
        oe = (ue = Z(Object(r.useState)(null), 2))[0],
        ce = ue[1],
        ie = (ue = Z(Object(r.useState)(!1), 2))[0],
        le = ue[1],
        se = (ue = Z(Object(r.useState)(), 2))[0],
        ue = ue[1],
        pe = (ye = Z(Object(r.useState)("Request Photos"), 2))[0],
        de = ye[1],
        me = Object(o.c)(),
        ye =
          void 0 !== ee.userPrimeMemberLoggedIn &&
          null !== ee.userPrimeMemberLoggedIn &&
          "Y" == ee.userPrimeMemberLoggedIn &&
          void 0 !== e.cardData.pp &&
          null !== e.cardData.pp &&
          "I" == e.cardData.pp &&
          void 0 !== e.cardData.isPrimeLocProp &&
          null !== e.cardData.isPrimeLocProp &&
          "Y" == e.cardData.isPrimeLocProp
            ? "Y"
            : "N",
        be = Object(h.d)(
          e.cardData,
          e.additionalBeanData.dynamicArea,
          !1,
          e.category
        ),
        ve = be.length,
        fe =
          ((ye = Object(_.a)(
            e.cardData,
            e.additionalBeanData,
            "N",
            e.ind,
            !1,
            null,
            e.searchPage,
            ye
          )),
          Object(O.a)(
            e.cardData,
            e.additionalBeanData,
            null,
            null,
            e.searchPage,
            !1,
            ee,
            te
          )),
        ge =
          ((te = Object(D.a)(e.cardData, e.searchPage, !1)),
          Object(j.c)(e.cardData, null, e.additionalBeanData)),
        he = e.cardData,
        _e =
          void 0 !== e.cardData.investorlisting &&
          null != e.cardData.investorlisting &&
          "Y" == e.cardData.investorlisting
            ? "Y"
            : "N",
        Oe =
          ((_e =
            "Y" == fe.primeTag || "Y" == fe.showPrimeProp
              ? "mb-srp__card card-mbprime"
              : "Y" == _e
              ? "mb-srp__card bdr-green"
              : 1 == fe.isPremiumMember
              ? "mb-srp__card has-package"
              : "mb-srp__card"),
          (Se = Z(Object(r.useState)(!1), 2))[0]),
        De = Se[1],
        je = !(
          Object(B.t)(e.cardData.sid) || !e.cardData.sid.includes("1600025")
        ),
        Se = null != e.cardData && null != e.cardData.ty ? e.cardData.ty : null,
        Pe = (we = Z(Object(r.useState)(!1), 2))[0],
        Ne = we[1],
        we = null != e.cardData && null != e.cardData.cg ? e.cardData.cg : null,
        Ee = null != e.cardData && null != e.cardData.ct ? e.cardData.ct : null,
        Te =
          (Object(r.useEffect)(function () {
            Object(B.v)(fe) ||
              Object(B.t)(fe.contactList) ||
              fe.contactList.every(function (t) {
                return (
                  t.btnText !== z.a.PRIMEPLUS_AFTER_EXPIRED_CTA.ctaText ||
                  (me(Object(z.b)(e.cardData, ee, z.c.IMPRESSION, "web")), !1)
                );
              });
          }, []),
          null != Y[e.cardData.id] &&
            null != Y[e.cardData.id] &&
            null !== fe.contactList &&
            fe.contactList.map(function (t, a) {
              Y[e.cardData.id].contactFirstText &&
                0 === a &&
                ((fe.contactList[a].btnText =
                  Y[e.cardData.id].contactFirstText),
                (fe.contactList[a].btnClass =
                  "mb-srp__action--btn medium btn-contacted")),
                Y[e.cardData.id].contactSecondText &&
                  1 === a &&
                  ((fe.contactList[a].btnText =
                    Y[e.cardData.id].contactSecondText),
                  (fe.contactList[a].btnClass =
                    "mb-srp__action--btn medium btn-contacted-o"));
            }),
          Object(r.useEffect)(
            function () {
              var t, a, r, n;
              null != Y[e.cardData.id] &&
                null != Y[e.cardData.id] &&
                Y[e.cardData.id].photoContactText &&
                de(Y[e.cardData.id].photoContactText),
                "Y" == fe.primeTag ||
                  (((e.cardData && e.cardData.ctaDetailBean) ||
                    null == Y[e.cardData.id] ||
                    null == Y[e.cardData.id] ||
                    null == Y[e.cardData.id].contactFirstText ||
                    null == Y[e.cardData.id].contactFirstText ||
                    Object(B.t)(e.additionalBeanData.isNRIUser) ||
                    "false" != e.additionalBeanData.isNRIUser ||
                    "Request Sent" != Y[e.cardData.id].contactFirstText) &&
                    ((n =
                      void 0 !== e.cardData.isPaidUser &&
                      null !== e.cardData.isPaidUser &&
                      "Y" === e.cardData.isPaidUser),
                    (t = "I" === e.cardData.pp),
                    (a = "Y" === fe.primeTag),
                    (r =
                      void 0 !== K.nonPrimeUserFreeOwnerLimitUsed &&
                      null !== K.nonPrimeUserFreeOwnerLimitUsed
                        ? K.nonPrimeUserFreeOwnerLimitUsed
                        : 0),
                    Object(B.t)(e.additionalBeanData.isNRIUser) ||
                      "false" != e.additionalBeanData.isNRIUser ||
                      n ||
                      a ||
                      !t ||
                      !(1 < r) ||
                      (null != (n = M.a.readCookie("freeownercontactedids")) &&
                        "" != n &&
                        n.toString().includes(e.cardData.id)) ||
                      (((e.cardData && e.cardData.ctaDetailBean) ||
                        null == Y[e.cardData.id] ||
                        null == Y[e.cardData.id] ||
                        null == Y[e.cardData.id].contactFirstText ||
                        null == Y[e.cardData.id].contactFirstText ||
                        "Contacted" != Y[e.cardData.id].contactFirstText) &&
                        ((e.cardData && e.cardData.ctaDetailBean) ||
                          null == Y[e.cardData.id] ||
                          null == Y[e.cardData.id] ||
                          null == Y[e.cardData.id].contactSecondText ||
                          null == Y[e.cardData.id].contactSecondText ||
                          "Phone no. sent" !=
                            Y[e.cardData.id].contactSecondText)))) ||
                  le(!0);
            },
            [Y[e.cardData.id], e.cardData, K]
          ),
          Object(S.a)(e.cardData, e.additionalBeanData.isNRIUser)),
        ke = Object(N.a)(
          e.cardData,
          e.additionalBeanData,
          e.ind,
          "https://www.magicbricks.com/propertyDetails/",
          "https://stgauction.magicbricks.com/"
        ),
        Ce = Object(w.a)(
          e.cardData,
          e.additionalBeanData,
          e.searchPage,
          "https://www.magicbricks.com"
        ),
        Ae = Object(k.b)(e.cardData, e.additionalBeanData),
        Ie = Object(C.d)(
          e.cardData,
          Ae,
          e.ind,
          ge.imgCount,
          e.additionalBeanData,
          e.searchPage,
          te,
          ye,
          ee,
          e.isNsr
        ),
        Le = Object(A.a)(e.cardData, !1),
        xe = Object(x.b)(e.additionalBeanData, e.cardData, Q),
        Be = Object(x.e)(e.additionalBeanData, e.cardData, Q),
        Fe = {
          primeTag: fe.primeTag,
          primeGridPageUrl:
            "https://www.magicbricks.com/mbprime/primePackages?source=MBPrime_SRP_Item-defaultTemplate&category=" +
            e.cardData.cg +
            "&ptype=" +
            e.cardData.ty +
            "&cityCnd=" +
            e.cardData.ct,
        },
        Re =
          (Object(r.useEffect)(
            function () {
              Y[e.cardData.id] &&
                Y[e.cardData.id].photoContactText &&
                de(Y[e.cardData.id].photoContactText),
                "Y" == fe.primeTag ||
                  (e.cardData && e.cardData.ctaDetailBean) ||
                  null == Y[e.cardData.id] ||
                  null == Y[e.cardData.id] ||
                  null == Y[e.cardData.id].contactFirstText ||
                  null == Y[e.cardData.id].contactFirstText ||
                  Object(B.t)(e.additionalBeanData.isNRIUser) ||
                  "false" != e.additionalBeanData.isNRIUser ||
                  "Request Sent" != Y[e.cardData.id].contactFirstText ||
                  le(!0);
            },
            [Y[e.cardData.id], e.cardData]
          ),
          null != Y[e.cardData.id] &&
            null != Y[e.cardData.id] &&
            null !== fe.contactList &&
            fe.contactList.map(function (t, a) {
              Y[e.cardData.id].contactFirstText &&
                0 === a &&
                ((fe.contactList[a].btnText =
                  Y[e.cardData.id].contactFirstText),
                (fe.contactList[a].btnClass =
                  "mb-srp__action--btn medium btn-contacted")),
                Y[e.cardData.id].contactSecondText &&
                  1 === a &&
                  ((fe.contactList[a].btnText =
                    Y[e.cardData.id].contactSecondText),
                  (fe.contactList[a].btnClass =
                    "mb-srp__action--btn medium btn-contacted"));
            }),
          Object(r.useEffect)(
            function () {
              De(!1);
            },
            [JSON.stringify(Q)]
          ),
          Object(r.useCallback)(
            function (t, a) {
              var r =
                  void 0 !== e.cardData.isPaidUser &&
                  null !== e.cardData.isPaidUser &&
                  "Y" === e.cardData.isPaidUser,
                n = "I" === e.cardData.pp,
                o = "Y" === fe.primeTag,
                c =
                  void 0 !== K.nonPrimeUserFreeOwnerLimitUsed &&
                  null !== K.nonPrimeUserFreeOwnerLimitUsed
                    ? K.nonPrimeUserFreeOwnerLimitUsed
                    : 0;
              if (
                !r &&
                !o &&
                n &&
                1 < c &&
                (1 !== a || !e.cardData || !e.cardData.ctaDetailBean)
              ) {
                var i = t.btnClass,
                  l = "Ask Owner to Call",
                  s =
                    (Object(B.t)(e.additionalBeanData.isNRIUser) ||
                      "false" != e.additionalBeanData.isNRIUser ||
                      (null != (r = M.a.readCookie("freeownercontactedids")) &&
                      "" != r &&
                      r.toString().includes(e.cardData.id)
                        ? (l = "Call Owner")
                        : (i =
                            t.btnClass +
                            " mb-srp__prime-preContact--btn-disable")),
                    "Send Enquiry");
                switch (
                  (Object(B.t)(e.additionalBeanData.isNRIUser) ||
                    "false" != e.additionalBeanData.isNRIUser ||
                    (s = "Get Phone No."),
                  a)
                ) {
                  case 0:
                    return X(
                      X({}, t),
                      {},
                      { btnText: l, btnClass: t.btnClass }
                    );
                  case 1:
                    return X(X({}, t), {}, { btnText: s, btnClass: i });
                  default:
                    return X({}, t);
                }
              }
              return X({}, t);
            },
            [K, e.cardData]
          ));
      Q = Object(r.useCallback)(
        function (t) {
          return (
            Y[e.cardData.id] &&
              null !== t.contactList &&
              t.contactList.map(function (a, r) {
                Y[e.cardData.id].contactFirstText &&
                  0 === r &&
                  ((t.contactList[r].btnText =
                    Y[e.cardData.id].contactFirstText),
                  (t.contactList[r].btnClass =
                    "mb-srp__action--btn medium btn-contacted")),
                  Y[e.cardData.id].contactSecondText &&
                    1 === r &&
                    ((t.contactList[r].btnText =
                      Y[e.cardData.id].contactSecondText),
                    (t.contactList[r].btnClass =
                      "mb-srp__action--btn medium btn-contacted-o"));
              }),
            t
          );
        },
        [Y, e.cardData]
      );
      return (
        null !== fe &&
          null !== fe.contactList &&
          ((q = fe.contactList.map(function (e, t) {
            return (t = Re(e, t)), X(X({}, e), t);
          })),
          (fe = Q((fe = X(X({}, fe), {}, { contactList: $(q) }))))),
        n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            "div",
            {
              className: _e,
              onClick: function () {
                var t;
                je ||
                  ((t = e.cardData.id),
                  Object(R.a)(t),
                  "Y" == fe.primeTag && "N" == fe.showPrimeProp
                    ? ((t =
                        "https://www.magicbricks.com/mbprime/primePackages?source=" +
                        (function () {
                          var t = e.ind + 1;
                          return (
                            (t =
                              Object(B.t)(e.cardData.primeFixedSlotProp) ||
                              "Y" != e.cardData.primeFixedSlotProp
                                ? ""
                                : "_Fixed_Slot_" + t),
                            (t = "MBPrime_SRP_Item-defaultTemplate".concat(t)),
                            Object(H.e)(t, "web", "UnlockWithPrimeCTA")
                          );
                        })() +
                        "&category=" +
                        e.cardData.cg +
                        "&ptype=" +
                        e.cardData.ty +
                        "&cityCnd=" +
                        e.cardData.ct +
                        "&propId=" +
                        e.cardData.id),
                      me(
                        Object(T.e)(
                          X(
                            {
                              event: "event_tracking",
                              eventName: "revamp_srp_dynamic_listing",
                              nonInteraction: !1,
                              eventCategory: "mb prime entry point click",
                              eventAction:
                                "MB Prime_SRP_PrimeExclusiveProperties Clicked_" +
                                e.cardData.ty +
                                "_" +
                                e.category,
                              eventLabel: ae,
                              eventValue: "",
                              cd21: e.cardData.ty,
                            },
                            Ie
                          )
                        )
                      ),
                      window.open(t, "_blank").focus())
                    : window.open(ke));
              },
            },
            je &&
              n.a.createElement("div", { className: "prop-sold-out-overlay" }),
            n.a.createElement(
              "div",
              {
                className: "mb-srp__card__container ".concat(
                  je ? "prop-sold-out stamp-sold-out" : ""
                ),
              },
              n.a.createElement(
                "div",
                { className: "mb-srp__card__photo" },
                n.a.createElement(c.a, {
                  requestPhotoCtaName: pe,
                  imagePath: e.cardData.attrImg || ge.imgPath,
                  imageCount: ge.imgCount,
                  imagePostedDate: ge.dateCreated,
                  imageAltTag: null != Le ? Le : "",
                  encPropertyId: e.cardData.id,
                  requestPhotoLabel: ge.requestPhoto,
                  imageNotUploaded: ge.imageNotUploaded,
                  BtnAction: function (e) {
                    return t(e, "Request Photo", 1, Ie);
                  },
                  postLabel: Object(j.a)(e.cardData)
                    ? "Updated"
                    : e.cardData.postedEditedLabel,
                  titleComp: Object(F.a)(
                    e.cardData,
                    e.additionalBeanData,
                    e.ind,
                    e.searchPage,
                    "",
                    0
                  ),
                  pdpURLPh: ke,
                  carDataObj: he,
                  primeGrid: Fe,
                  propertyGaObj: Ie,
                  cardIndex: e.ind,
                  multilingualData: e.multilingualData,
                  category: e.cardData.cg,
                }),
                e.cardData &&
                  n.a.createElement(i.a, {
                    AdvertiserData: e.cardData,
                    search: e.searchPage,
                    category: e.category,
                  }),
                e.additionalBeanData.isContactedPage &&
                  "I" === e.cardData.pp &&
                  !Object(B.t)(e.cardData.smo) &&
                  n.a.createElement(
                    "span",
                    { className: "mb-srp__card__phone" },
                    ""
                      .concat("50" === e.cardData.moisd ? "+91 " : "")
                      .concat(e.cardData.smo)
                  )
              ),
              n.a.createElement(
                "div",
                {
                  className: a()
                    ? "mb-srp__card__info"
                    : "mb-srp__card__info mb-srp__card__info-withoutburger",
                },
                a()
                  ? n.a.createElement(
                      "div",
                      { className: "mb-srp__card__sort" },
                      n.a.createElement(l.a, {
                        url: ke,
                        propertyGaObj: Ie,
                        multilingualData: e.multilingualData,
                        pmtLat: e.cardData.pmtLat,
                        pmtLong: e.cardData.pmtLong,
                        cardData: e.cardData,
                        setMapActive: ne,
                        setMapData: ue,
                        isMapActive: re,
                        callbackrequested: ie,
                        contactMap: fe,
                        contactAction: t,
                        isFrom: "srpCardBuyComponent",
                      })
                    )
                  : n.a.createElement(n.a.Fragment, null),
                ye &&
                  0 < ye.length &&
                  n.a.createElement(
                    "div",
                    { className: "mb-srp__card__tags" },
                    ye.map(function (t, a) {
                      return n.a.createElement(s.a, {
                        divClassName: "".concat(t.classText),
                        tagNameText: "".concat(t.tagText),
                        key: "tag_".concat(a),
                        multilingualData: e.multilingualData,
                      });
                    })
                  ),
                n.a.createElement(u.a, {
                  cardData: e.cardData,
                  additionalBeanData: e.additionalBeanData,
                  position: e.ind,
                  search: e.searchPage,
                  sharedOfficeSpace: "",
                  dynamicSeatsValue: 0,
                  shortListed: e.shortListed,
                  multilingualData: e.multilingualData,
                  ind: e.ind,
                  searchPage: e.searchPage,
                  isNsr: e.isNsr,
                  isShareShift: !0,
                  propertyImgMap: ge,
                  url: ke,
                }),
                (Ce.societyName ||
                  ("plot" == e.searchPage &&
                    null != e.cardData.pmtLat &&
                    "0.0" != e.cardData.pmtLat &&
                    null != e.cardData.pmtLong &&
                    "0.0" != e.cardData.pmtLong)) &&
                  n.a.createElement(
                    "div",
                    { className: "mb-srp__card__society" },
                    Ce.societyName
                      ? n.a.createElement(p.a, {
                          multilingualData: e.multilingualData,
                          societyLabel: Ce.societyLabel,
                          projectUrl: Ce.projectUrl,
                          societyName: Ce.societyName,
                          propertyGaObj: Ie,
                          primeGrid: Fe,
                        })
                      : null,
                    "plot" == e.searchPage &&
                      null != e.cardData.pmtLat &&
                      ("0.0" != e.cardData.pmtLat ||
                        "0" != e.cardData.pmtLat) &&
                      null != e.cardData.pmtLong &&
                      ("0.0" != e.cardData.pmtLong ||
                        "0" != e.cardData.pmtLong) &&
                      n.a.createElement(E.a, {
                        mapLabelName: "See on map",
                        cardData: e.cardData,
                        setMapActive: ne,
                        setMapData: ue,
                      })
                  ),
                be &&
                  0 < ve &&
                  n.a.createElement(
                    "div",
                    {
                      className: "mb-srp__card__summary ".concat(
                        oe == e.cardData.id || e.multilingualData ? "open" : ""
                      ),
                      id: "propertiesAction".concat(e.cardData.id),
                    },
                    n.a.createElement(
                      "div",
                      { className: "mb-srp__card__summary__list" },
                      be.map(function (t) {
                        return n.a.createElement(d.a, {
                          summaryLabelText: t.labelText,
                          summaryValueText: t.valueText,
                          summaryDataIcon: t.dataIcon,
                          className: "mb-srp__card__summary__list--item",
                          url: "https://www.magicbricks.com" + t.url,
                          multilingualData: e.multilingualData,
                        });
                      })
                    ),
                    3 < ve &&
                      n.a.createElement(
                        n.a.Fragment,
                        null,
                        !e.multilingualData &&
                          n.a.createElement("div", {
                            className: "mb-srp__card__summary__action",
                            onClick: function (t) {
                              var a;
                              t.stopPropagation(),
                                (t = e.cardData.id),
                                (a = ce),
                                oe == t
                                  ? a(null)
                                  : (me(
                                      Object(T.e)(
                                        X(
                                          {
                                            event: "event_tracking",
                                            eventName:
                                              "revamp_srp_proptuple_misc",
                                            nonInteraction: !1,
                                            eventCategory:
                                              "revamp srp - property tuple misc actions",
                                            eventAction: "expand highlights",
                                            eventLabel:
                                              "propertysearch | property tuple",
                                            eventValue: "",
                                          },
                                          Ie
                                        )
                                      )
                                    ),
                                    a(t));
                            },
                          })
                      )
                  ),
                (0 < te.length ||
                  (e.cardData.srpCardUspDataList &&
                    0 < e.cardData.srpCardUspDataList.length)) &&
                  n.a.createElement(
                    "div",
                    { className: "mb-srp__card__usp" },
                    e.cardData.srpCardUspDataList &&
                      0 < e.cardData.srpCardUspDataList.length &&
                      e.cardData.srpCardUspDataList.map(function (e, t) {
                        return n.a.createElement(
                          n.a.Fragment,
                          null,
                          e.showUsp &&
                            "greenDot" == e.uspName &&
                            n.a.createElement(
                              "div",
                              {
                                className:
                                  "mb-srp__card__usp__ownavlblinfo mb-srp__card__usp__ownavlblinfo--greenanim",
                              },
                              e.uspText
                            ),
                          e.showUsp &&
                            "orangeDot" == e.uspName &&
                            n.a.createElement(
                              "div",
                              { className: "mb-srp__card__usp__ownavlblinfo " },
                              e.uspText
                            ),
                          e.showUsp &&
                            "usp1" == e.uspName &&
                            n.a.createElement(
                              "div",
                              {
                                className:
                                  "mb-srp__card__usp__ownavlblinfo mb-srp__card__usp__ownavlblinfo--tenants",
                              },
                              e.uspText
                            )
                        );
                      }),
                    0 < te.length &&
                      te.map(function (e, t) {
                        return n.a.createElement(m.a, { uspNameText: e });
                      })
                  ),
                Te.offerText &&
                  n.a.createElement(y.a, {
                    offerLabel: Te.offerLbl,
                    offerText: Te.offerText,
                  }),
                ((e.additionalBeanData &&
                  e.additionalBeanData.isNearMeSeoUrl &&
                  "Y" == e.additionalBeanData.isNearMeSeoUrl) ||
                  ("Y" == e.additionalBeanData.isDsListingLogic &&
                    "0.0" != e.cardData.DSLogicDist)) &&
                  n.a.createElement(G, {
                    landmarkDetails: e.cardData.landmarkDetails,
                    nearMePropDistance: e.cardData.nearMePropDistance,
                    cardData: e.cardData,
                  }),
                n.a.createElement(b.a, {
                  card: e.cardData,
                  search: e.searchPage,
                  propertyGaObj: Ie,
                  primeGrid: Fe,
                  additionalBeanData: e.additionalBeanData,
                })
              )
            ),
            n.a.createElement(
              "div",
              {
                className: "mb-srp__card__estimate ".concat(
                  je ? "prop-sold-out show-similar-cta" : ""
                ),
              },
              n.a.createElement(
                "div",
                { className: "mb-srp__card__price" },
                n.a.createElement(v.a, {
                  category: e.category,
                  divClassName: "mb-srp__card__price--offer-label",
                  OfferPriceLabel: "Offer Price",
                  OfferPriceLabelRef1: "1",
                  cardData: e.cardData,
                  additionalBeanData: e.additionalBeanData,
                  priceMap: Ae,
                  propertyGaObj: Ie,
                  multilingualData: e.multilingualData,
                })
              ),
              null != fe &&
                fe.contactList &&
                n.a.createElement(
                  "div",
                  {
                    className:
                      "mb-srp__action action--single mb-srp__card__action",
                  },
                  "Y" == fe.primeTag &&
                    n.a.createElement(g.a, {
                      MBPrimeTagText: "MB Prime",
                      MBPrimeLabelText: "Exclusive Owner Property",
                      MBPrimeHighLight: "",
                    }),
                  "Y" == fe.showPrimeProp &&
                    n.a.createElement(g.a, {
                      MBPrimeTagText: "",
                      MBPrimeLabelText: "Unlocked for you with",
                      MBPrimeHighLight: "MB Prime",
                    }),
                  !ie &&
                    null !== fe.contactList &&
                    fe.contactList.map(function (a, r) {
                      return n.a.createElement(
                        n.a.Fragment,
                        null,
                        n.a.createElement(f.a, {
                          key: "".concat(e.cardData.id, "_").concat(r),
                          BtnClassName: a.btnClass,
                          BtnText: a.btnText,
                          BtnAction: function (e) {
                            return t(e, a, r, Ie);
                          },
                          cardData: e.cardData,
                          multilingualData: e.multilingualData,
                          setShowThreeDot:
                            null != a && "Share Feedback" == a.btnText
                              ? Ne
                              : null,
                        })
                      );
                    }),
                  ie && null != fe && null !== fe.contactList
                    ? n.a.createElement(
                        n.a.Fragment,
                        null,
                        n.a.createElement(V.a, { cardData: e.cardData }),
                        null !== fe.contactList &&
                          fe.contactList.map(function (a, r) {
                            return n.a.createElement(
                              n.a.Fragment,
                              null,
                              null != a && "Share Feedback" == a.btnText
                                ? n.a.createElement(f.a, {
                                    key: ""
                                      .concat(e.cardData.id, "_")
                                      .concat(r),
                                    BtnClassName: a.btnClass,
                                    BtnText: a.btnText,
                                    BtnAction: function (e) {
                                      return t(e, a, r, Ie);
                                    },
                                    cardData: e.cardData,
                                    setShowThreeDot:
                                      null != a && "Share Feedback" == a.btnText
                                        ? Ne
                                        : null,
                                  })
                                : ""
                            );
                          })
                      )
                    : "",
                  null == we || ("r" != we && "R" != we)
                    ? (Object(B.p)().includes(Se) ||
                        Object(B.n)().includes(Se)) &&
                        n.a.createElement(f.a, {
                          cardData: e.cardData,
                          multilingualData: e.multilingualData,
                          isHomeLoanAndPackersMoversCta: !0,
                          propertyTypeOfEachCard: Se,
                        })
                    : Object(B.m)().includes(Ee) &&
                        Object(B.p)().includes(Se) &&
                        n.a.createElement(f.a, {
                          cardData: e.cardData,
                          multilingualData: e.multilingualData,
                          isHomeLoanAndPackersMoversCta: !0,
                          propertyTypeOfEachCard: Se,
                        })
                )
            ),
            !e.shortListed &&
              n.a.createElement(
                n.a.Fragment,
                null,
                "Y" !== e.additionalBeanData.isNearMeSeoUrl &&
                  "residential" == e.searchPage &&
                  null != e.cardData.pmtLat &&
                  "0.0" != e.cardData.pmtLat &&
                  null != e.cardData.pmtLong &&
                  "0.0" != e.cardData.pmtLong &&
                  "r" == e.cardData.cg.toLowerCase() &&
                  e.cardData.psmid &&
                  n.a.createElement(I.a, {
                    landmarkDetails: e.cardData.landmarkDetails,
                    cardData: e.cardData,
                    setMapActive: ne,
                    setMapData: ue,
                    isMapActive: re,
                  }),
                re &&
                  n.a.createElement(L.SrpMapCardWeb, {
                    mapId: "srp_map_" + e.cardData.id,
                    mapData: se,
                    mapCloseAction: function (e) {
                      ne(!1);
                    },
                    mapOptions: { circle: { isShow: !0, radius: 700 } },
                  })
              ),
            xe &&
              0 < xe.length &&
              n.a.createElement("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: { __html: xe },
              }),
            Be &&
              0 < Be.length &&
              n.a.createElement("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: { __html: Be },
              })
          ),
          Oe &&
            n.a.createElement(J.a, {
              propId: e.cardData.id,
              seoSearch: !1,
              additionalBeanData: e.additionalBeanData,
              searchPage: e.additionalBeanData.searchType,
              category: e.category,
              showSimiliarProperties: e.showSimiliarProperties,
              setShowSimiliarProperties: e.setShowSimiliarProperties,
              setShowAppDownloadPopup: e.setShowAppDownloadPopup,
              setAppDownloadLink: e.setAppDownloadLink,
              isSortList: !1,
              isMobile: !1,
              serviceIds: e.cardData.sid,
            })
        )
      );
    }
    a(500);
    var re = a(811),
      ne = a(812),
      oe = a(813),
      ce = a(814),
      ie = a(44),
      le = a(815);
    function se(e) {
      return (se =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function ue(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function pe(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ue(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== se(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== se((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === se(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : ue(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    function de(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var a =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != a) {
            var r,
              n,
              o,
              c,
              i = [],
              l = !0,
              s = !1;
            try {
              if (((o = (a = a.call(e)).next), 0 === t)) {
                if (Object(a) !== a) return;
                l = !1;
              } else
                for (
                  ;
                  !(l = (r = o.call(a)).done) &&
                  (i.push(r.value), i.length !== t);
                  l = !0
                );
            } catch (e) {
              (s = !0), (n = e);
            } finally {
              try {
                if (
                  !l &&
                  null != a.return &&
                  ((c = a.return()), Object(c) !== c)
                )
                  return;
              } finally {
                if (s) throw n;
              }
            }
            return i;
          }
        })(e, t) ||
        (function (e, t) {
          var a;
          if (e)
            return "string" == typeof e
              ? me(e, t)
              : "Map" ===
                  (a =
                    "Object" ===
                      (a = Object.prototype.toString.call(e).slice(8, -1)) &&
                    e.constructor
                      ? e.constructor.name
                      : a) || "Set" === a
              ? Array.from(e)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? me(e, t)
              : void 0;
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function me(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    function ye(e) {
      function t(t, a, r, n) {
        var o, c, i, l, s, u;
        "Y" != ee.primeTag &&
          (t.stopPropagation(),
          (i = "revamp_srp_proptuple_contact"),
          (o = s = l = c = ""),
          !Object(B.t)(document.referrer) &&
            document.referrer.includes(".google") &&
            (o = "Google_Organic"),
          Object(B.t)(a) ||
            "Request Photo" !== a ||
            ((c = a),
            (i = "revamp_srp_proptuple_contact"),
            (l = "request photos"),
            (s =
              "revamp srp | propertycontact | propertysearch | property tuple | misc | request photos"),
            (a = pe(pe({}, n), {}, { cd142: "otp contact" })),
            (u = Object(U.c)(i, s, l, c, a)),
            Z(
              Object(T.e)(
                pe(
                  {
                    event: "event_tracking",
                    eventName: i,
                    nonInteraction: !1,
                    eventCategory: "contactbuttonclicked",
                    eventAction: s,
                    eventLabel: l,
                    eventValue: "",
                    cd96: c,
                  },
                  a
                )
              )
            ),
            Z(Object(P.d)(t)),
            Z(
              Object(P.a)(
                t,
                {
                  buttonType: c,
                  contactType: "property",
                  searchType: 1,
                  propertyId: e.cardData.id,
                  advertisers: e.cardData.id,
                  requestInterface: "search_web",
                  isLoginAndInfra: !1,
                  formName: "SRP_TOP_CONTACT",
                  contact_interface: "luxury_card_contact",
                  pType: e.cardData.ty,
                  campaignCode: o,
                  gaObject: u,
                },
                e.cardData,
                n
              )
            )));
      }
      function a() {
        return (
          (null != e.additionalBeanData &&
            "Y" == e.additionalBeanData.isNearMeSeoUrl) ||
          (null != V && 1 == V)
        );
      }
      Object(o.d)(function (e) {
        return e.searchBean;
      });
      var c = Object(o.d)(function (e) {
          return e.userInfoData;
        }),
        i = Object(o.d)(function (e) {
          return e.clientBean;
        }),
        p =
          void 0 !== c.userPrimeMemberLoggedIn &&
          null !== c.userPrimeMemberLoggedIn &&
          "Y" == c.userPrimeMemberLoggedIn &&
          void 0 !== e.cardData.pmp &&
          null !== e.cardData.pmp &&
          "Y" == e.cardData.pmp &&
          void 0 !== e.cardData.isPrimeLocProp &&
          null !== e.cardData.isPrimeLocProp &&
          "Y" == e.cardData.isPrimeLocProp
            ? "Y"
            : "N",
        m =
          ((p = Object(_.a)(
            e.cardData,
            e.additionalBeanData,
            "N",
            e.ind,
            !1,
            null,
            e.searchPage,
            p
          )),
          Object(j.b)(e.cardData)),
        y = Object(h.a)(e.cardData),
        b = Object(o.d)(function (e) {
          return e.contactData;
        }),
        v = Object(o.d)(function (e) {
          return e.contactCtaData;
        }),
        f = (L = de(Object(r.useState)("Request Photos"), 2))[0],
        g = L[1],
        D = (L = de(
          Object(r.useState)(
            b.requestBody && b.nonPrimeUserFreeOwnerLimitUsed
              ? b.nonPrimeUserFreeOwnerLimitUsed
              : 0
          ),
          2
        ))[0],
        S = (L = (L[1], de(Object(r.useState)(!1), 2)))[0],
        E = L[1],
        I = (L = de(Object(r.useState)(!1), 2))[0],
        L = L[1],
        V = (q = de(Object(r.useState)(!1), 2))[0],
        q = q[1],
        Y = Object(o.d)(function (e) {
          return e.searchBean;
        }),
        G = Object(w.a)(
          e.cardData,
          e.additionalBeanData,
          e.searchPage,
          "https://www.magicbricks.com"
        ),
        W = Object(h.d)(e.cardData, e.additionalBeanData.dynamicArea, !1),
        K = W.length,
        $ = Object(k.a)(e.cardData),
        Q = Object(N.a)(
          e.cardData,
          e.additionalBeanData,
          e.ind,
          "https://www.magicbricks.com/propertyDetails/",
          "https://stgauction.magicbricks.com/"
        ),
        X = Object(C.d)(
          e.cardData,
          $,
          e.ind,
          m.imgCount,
          e.additionalBeanData,
          e.searchPage,
          [],
          p,
          c,
          e.isNsr
        ),
        Z = Object(o.c)(),
        ee = Object(O.a)(
          e.cardData,
          e.additionalBeanData,
          null,
          null,
          e.searchPage,
          !1,
          c,
          i
        ),
        te =
          ((i = Object(A.a)(e.cardData, !1)),
          Object(x.b)(e.additionalBeanData, e.cardData, Y)),
        ae =
          ((Y = Object(x.e)(e.additionalBeanData, e.cardData, Y)),
          "Y" == ee.primeTag
            ? "mb-srp__card card-luxury card-mbprime"
            : 1 == ee.isPremiumMember
            ? "mb-srp__card card-luxury has-package"
            : "mb-srp__card card-luxury"),
        se =
          ((ae =
            null != y && 0 < y.length ? ae : ae + " card-luxury-no-amenities"),
          null != y && 0 < y.length
            ? "mb-srp__card__summary"
            : "mb-srp__card__summary open"),
        ue =
          (null != y &&
            0 < y.length &&
            e.multilingualData &&
            (se = "mb-srp__card__summary open"),
          e.cardData),
        me = {
          primeTag: ee.primeTag,
          primeGridPageUrl:
            "https://www.magicbricks.com/mbprime/primePackages?source=MBPrime_SRP_Item-defaultTemplate&category=" +
            e.cardData.cg +
            "&ptype=" +
            e.cardData.ty +
            "&cityCnd=" +
            e.cardData.ct,
        };
      return (
        null != e.cardData && null != e.cardData.cg && e.cardData.cg,
        null != e.cardData && null != e.cardData.ct && e.cardData.ct,
        null != e.cardData && null != e.cardData.ty && e.cardData.ty,
        Object(r.useEffect)(function () {
          Object(B.v)(ee) ||
            Object(B.t)(ee.contactList) ||
            ee.contactList.every(function (t) {
              return (
                t.btnText !== z.a.PRIMEPLUS_AFTER_EXPIRED_CTA.ctaText ||
                (Z(Object(z.b)(e.cardData, c, z.c.IMPRESSION, "web")), !1)
              );
            });
        }, []),
        Object(r.useEffect)(
          function () {
            var t, a, r, n;
            null != v[e.cardData.id] &&
              null != v[e.cardData.id] &&
              v[e.cardData.id].photoContactText &&
              g(v[e.cardData.id].photoContactText),
              "Y" != ee.primeTag &&
                (null == v[e.cardData.id] ||
                null == v[e.cardData.id] ||
                null == v[e.cardData.id].contactFirstText ||
                null == v[e.cardData.id].contactFirstText ||
                Object(B.t)(e.additionalBeanData.isNRIUser) ||
                "false" != e.additionalBeanData.isNRIUser ||
                "Request Sent" != v[e.cardData.id].contactFirstText
                  ? ((n =
                      void 0 !== e.cardData.isPaidUser &&
                      null !== e.cardData.isPaidUser &&
                      "Y" === e.cardData.isPaidUser),
                    (t = "I" === e.cardData.pp),
                    (a = "Y" === ee.primeTag),
                    (r =
                      void 0 !== b.nonPrimeUserFreeOwnerLimitUsed &&
                      null !== b.nonPrimeUserFreeOwnerLimitUsed
                        ? b.nonPrimeUserFreeOwnerLimitUsed
                        : 0),
                    Object(B.t)(e.additionalBeanData.isNRIUser) ||
                      "false" != e.additionalBeanData.isNRIUser ||
                      n ||
                      a ||
                      !t ||
                      !(1 < r) ||
                      (null != (n = M.a.readCookie("freeownercontactedids")) &&
                        "" != n &&
                        n.toString().includes(e.cardData.id)) ||
                      (((null != v[e.cardData.id] &&
                        null != v[e.cardData.id] &&
                        null != v[e.cardData.id].contactFirstText &&
                        null != v[e.cardData.id].contactFirstText &&
                        "Contacted" == v[e.cardData.id].contactFirstText) ||
                        (null != v[e.cardData.id] &&
                          null != v[e.cardData.id] &&
                          null != v[e.cardData.id].contactSecondText &&
                          null != v[e.cardData.id].contactSecondText &&
                          "Phone no. sent" ==
                            v[e.cardData.id].contactSecondText)) &&
                        E(!0)))
                  : E(!0));
          },
          [v[e.cardData.id], e.cardData, b]
        ),
        n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            "div",
            {
              className: ae,
              onClick: function () {
                var t = e.cardData.id;
                Object(R.a)(t),
                  "Y" == ee.primeTag
                    ? ((t =
                        "https://www.magicbricks.com/mbprime/primePackages?source=" +
                        (function () {
                          var t = e.ind + 1;
                          return (
                            (t =
                              Object(B.t)(e.cardData.primeFixedSlotProp) ||
                              "Y" != e.cardData.primeFixedSlotProp
                                ? ""
                                : "_Fixed_Slot_" + t),
                            (t = "MBPrime_SRP_Item-defaultTemplate".concat(t)),
                            Object(H.e)(t, "web", "UnlockWithPrimeCTA")
                          );
                        })() +
                        "&category=" +
                        e.cardData.cg +
                        "&ptype=" +
                        e.cardData.ty +
                        "&cityCnd=" +
                        e.cardData.ct +
                        "&propId=" +
                        e.cardData.id),
                      Z(
                        Object(T.e)(
                          pe(
                            {
                              event: "event_tracking",
                              eventName: "revamp_srp_dynamic_listing",
                              nonInteraction: !1,
                              eventCategory: "mb prime entry point click",
                              eventAction:
                                "MB Prime_SRP_PrimeExclusiveProperties Clicked_" +
                                e.cardData.ty +
                                "_" +
                                e.category,
                              eventLabel: D,
                              eventValue: "",
                              cd21: e.cardData.ty,
                            },
                            X
                          )
                        )
                      ),
                      window.open(t, "_blank").focus())
                    : window.open(Q);
              },
            },
            n.a.createElement(
              "div",
              { className: "mb-srp__card__container" },
              n.a.createElement(ce.a, {
                requestPhotoCtaName: f,
                imagePath: e.cardData.attrImg || m.imgPath,
                imageCount: m.imgCount,
                imageAltTag: null != i ? i : "",
                encPropertyId: e.cardData.id,
                requestPhotoLabel: m.requestPhoto,
                imageNotUploaded: m.imageNotUploaded,
                BtnAction: function (e) {
                  return t(e, "Request Photo", 0, X);
                },
                propertyImageNew:
                  null != e.cardData.propertyImageNew &&
                  "" != e.cardData.propertyImageNew
                    ? e.cardData.propertyImageNew.split(",")
                    : [],
                leadTag: m.leadTag,
                titleComp: Object(F.a)(
                  e.cardData,
                  e.additionalBeanData,
                  e.ind,
                  e.searchPage,
                  "",
                  0,
                  e.multilingualData
                ),
                pdpURLPh: Q,
                carDataObj: ue,
                primeGrid: me,
                cardIndex: e.ind,
                luxuryTagsList: y,
                multilingualData: e.multilingualData,
                psmUspImages: Object(B.t)(e.cardData.psmUspImgMob)
                  ? null
                  : e.cardData.psmUspImgMob,
                isBuilderCard: e.isBuilderCard,
                category: e.category,
              }),
              n.a.createElement(
                "div",
                {
                  className: a()
                    ? "mb-srp__card__info"
                    : "mb-srp__card__info mb-srp__card__info-withoutburger",
                },
                a()
                  ? n.a.createElement(
                      "div",
                      { className: "mb-srp__card__sort" },
                      n.a.createElement(l.a, {
                        url: Q,
                        propertyGaObj: X,
                        multilingualData: e.multilingualData,
                        cardData: e.cardData,
                        callbackrequested: S,
                        contactMap: ee,
                        contactAction: t,
                        isFrom: "srpCardLuxuryComponent",
                      })
                    )
                  : n.a.createElement(n.a.Fragment, null),
                p &&
                  0 < p.length &&
                  n.a.createElement(
                    "div",
                    { className: "mb-srp__card__tags" },
                    p.map(function (t, a) {
                      return n.a.createElement(s.a, {
                        divClassName: "".concat(t.classText),
                        tagNameText: "".concat(t.tagText),
                        key: "tag_".concat(a),
                        multilingualData: e.multilingualData,
                      });
                    })
                  ),
                n.a.createElement(u.a, {
                  cardData: e.cardData,
                  additionalBeanData: e.additionalBeanData,
                  position: e.ind,
                  search: e.searchPage,
                  multilingualData: e.multilingualData,
                  ind: e.ind,
                  searchPage: e.searchPage,
                  isNsr: e.isNsr,
                  isShareShift: !0,
                  propertyImgMap: m,
                  url: Q,
                }),
                G.societyName &&
                  n.a.createElement(ne.a, {
                    multilingualData: e.multilingualData,
                    projectUrl: G.projectUrl,
                    societyName: G.societyName,
                    devName: G.devName,
                  }),
                W &&
                  0 < K &&
                  n.a.createElement(
                    "div",
                    {
                      className: se,
                      id: "propertiesAction".concat(e.cardData.id),
                    },
                    n.a.createElement(
                      "div",
                      {
                        className: "mb-srp__card__summary__list summary-luxury",
                      },
                      W.map(function (t) {
                        return n.a.createElement(d.a, {
                          summaryLabelText: t.labelText,
                          summaryValueText: t.valueText,
                          summaryDataIcon: t.dataIcon,
                          className: "mb-srp__card__summary__list--item",
                          multilingualData: e.multilingualData,
                        });
                      })
                    ),
                    !e.multilingualData &&
                      n.a.createElement("div", {
                        className: "mb-srp__card__summary__action",
                        onClick: function (t) {
                          return Object(ie.i)(
                            t,
                            "propertiesAction" + e.cardData.id
                          );
                        },
                      })
                  ),
                n.a.createElement(oe.a, {
                  luxAmenMap: e.cardData.luxAmenMap,
                  nonluxAmenMap: e.cardData.nonluxAmenMap,
                  multilingualData: e.multilingualData,
                }),
                n.a.createElement(le.a, {
                  card: e.cardData,
                  search: e.searchPage,
                  propertyGaObj: X,
                  luxuryTagsList: y,
                  multilingualData: e.multilingualData,
                  additionalBeanData: e.additionalBeanData,
                })
              )
            ),
            n.a.createElement(re.a, {
              props: e,
              priceMap: $,
              propertyGaObj: X,
              callbackrequested: S,
              multilingualData: e.multilingualData,
              setSimilarBuilderProp: L,
              setShowThreeDot: q,
            }),
            te &&
              0 < te.length &&
              n.a.createElement("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: { __html: te },
              }),
            Y &&
              0 < Y.length &&
              n.a.createElement("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: { __html: Y },
              })
          ),
          I &&
            n.a.createElement(J.a, {
              propId: e.cardData.id,
              seoSearch: !1,
              additionalBeanData: e.additionalBeanData,
              searchPage: e.additionalBeanData.searchType,
              category: e.category,
              showSimiliarProperties: e.showSimiliarProperties,
              setShowSimiliarProperties: e.setShowSimiliarProperties,
              setShowAppDownloadPopup: e.setShowAppDownloadPopup,
              setAppDownloadLink: e.setAppDownloadLink,
              isSortList: !1,
              isMobile: !1,
              serviceIds: e.cardData.sid,
            })
        )
      );
    }
    var be = a(558),
      ve = a(816),
      fe = a(293),
      ge = a(432),
      he = a(294),
      _e = a(817),
      Oe = a(818),
      De = a(819),
      je = a(820),
      Se = a(140);
    function Pe(e) {
      return (Pe =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Ne(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return Ce(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        ke(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function we(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function Ee(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? we(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== Pe(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== Pe((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === Pe(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : we(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    function Te(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var a =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != a) {
            var r,
              n,
              o,
              c,
              i = [],
              l = !0,
              s = !1;
            try {
              if (((o = (a = a.call(e)).next), 0 === t)) {
                if (Object(a) !== a) return;
                l = !1;
              } else
                for (
                  ;
                  !(l = (r = o.call(a)).done) &&
                  (i.push(r.value), i.length !== t);
                  l = !0
                );
            } catch (e) {
              (s = !0), (n = e);
            } finally {
              try {
                if (
                  !l &&
                  null != a.return &&
                  ((c = a.return()), Object(c) !== c)
                )
                  return;
              } finally {
                if (s) throw n;
              }
            }
            return i;
          }
        })(e, t) ||
        ke(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function ke(e, t) {
      var a;
      if (e)
        return "string" == typeof e
          ? Ce(e, t)
          : "Map" ===
              (a =
                "Object" ===
                  (a = Object.prototype.toString.call(e).slice(8, -1)) &&
                e.constructor
                  ? e.constructor.name
                  : a) || "Set" === a
          ? Array.from(e)
          : "Arguments" === a ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
          ? Ce(e, t)
          : void 0;
    }
    function Ce(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    function Ae(e) {
      function t(t, a, r, n) {
        var o, c, i, l, s, u, p;
        "Share Feedback" == a.btnText
          ? D(Object(P.a)(t, { buttonType: "Share Feedback" }, e.cardData, n))
          : "Y" != ce.primeTag
          ? (t.stopPropagation(),
            (c = "revamp_srp_proptuple_contact"),
            (r += 1),
            (o = s = l = i = ""),
            (u = M.a.readCookie("trackerCookie")),
            Object(B.t)(u)
              ? Object(B.t)(u) &&
                !Object(B.t)(document.referrer) &&
                document.referrer.includes(".google") &&
                (M.a.createCookieRem("trackerCookie", "Google_Organic", 180),
                (o = "Google_Organic"))
              : (o = u),
            Object(B.v)(a)
              ? Object(B.t)(a) ||
                "Request Photo" !== a ||
                ((i = a),
                (c = "revamp_srp_proptuple_contact"),
                (l = "request photos"),
                (s =
                  "revamp srp | propertycontact | propertysearch | property tuple | misc | request photos"),
                (u = Ee(Ee({}, n), {}, { cd142: "otp contact" })),
                (p = Object(U.c)(c, s, l, i, u)),
                D(
                  Object(T.e)(
                    Ee(
                      {
                        event: "event_tracking",
                        eventName: c,
                        nonInteraction: !1,
                        eventCategory: "contactbuttonclicked",
                        eventAction: s,
                        eventLabel: l,
                        eventValue: "",
                        cd96: i,
                      },
                      u
                    )
                  )
                ),
                D(Object(P.d)(t)),
                D(
                  Object(P.a)(
                    t,
                    {
                      buttonType: i,
                      contactType: "property",
                      searchType: 1,
                      propertyId: e.cardData.id,
                      advertisers: e.cardData.id,
                      requestInterface: "search_web",
                      isLoginAndInfra: !1,
                      formName: "SRP_TOP_CONTACT",
                      contact_interface: "property_card_contact",
                      pType: e.cardData.ty,
                      campaignCode: o,
                      gaObject: p,
                    },
                    e.cardData,
                    n
                  )
                ))
              : (("Ask Owner to Call" != a.btnText &&
                  "Send Enquiry" != a.btnText) ||
                  D(
                    Object(T.e)(
                      Ee(
                        {
                          event: "event_tracking",
                          eventName: "revamp_srp_dynamic_listing",
                          nonInteraction: !1,
                          eventCategory: "MB Prime CTA Change Click",
                          eventAction:
                            "MB Prime_SRP_Free Owner Prop CTA Change Clicked_" +
                            e.cardData.ty +
                            "_" +
                            e.category,
                          eventLabel: G,
                          eventValue: "",
                          cd21: e.cardData.ty,
                        },
                        n
                      )
                    )
                  ),
                (c = "revamp_srp_proptuple_contact"),
                (i = a.btnText),
                (l =
                  r +
                  " / " +
                  ce.contactList.filter(function (e) {
                    return "Share Feedback" != e.btnText;
                  }).length),
                (s = Object(C.a)(r, !1)),
                (u = Object(U.c)(c, s, l, i, n)),
                null != e.shortListed && 1 == e.shortListed
                  ? ((p = Ee(
                      {
                        event: "event_tracking",
                        eventName: "shortlist_page_proptuple_contact",
                        nonInteraction: !1,
                        eventCategory: "contactbuttonclicked",
                        eventAction: Object(C.a)(r, !0),
                        eventLabel: l,
                        eventValue: "",
                        cd96: i,
                      },
                      n
                    )),
                    D({
                      type: "SHORTLIST_GA_DATA",
                      payload: { shortListGaCommonData: p },
                    }),
                    D(Object(T.e)(p)))
                  : ("Contact MB Expert" != a.btnText && a.btnText,
                    D(
                      Object(T.e)(
                        Ee(
                          {
                            event: "event_tracking",
                            eventName: c,
                            nonInteraction: !1,
                            eventCategory: "contactbuttonclicked",
                            eventAction: s,
                            eventLabel: l,
                            eventValue: "",
                            cd96: i,
                          },
                          n
                        )
                      )
                    )),
                D(Object(P.d)(t)),
                D(
                  Object(P.a)(
                    t,
                    {
                      buttonType: i,
                      contactType: "property",
                      searchType: 1,
                      propertyId: e.cardData.id,
                      advertisers: e.cardData.id,
                      requestInterface: "search_web",
                      isLoginAndInfra: !1,
                      formName: "SRP_TOP_CONTACT",
                      contact_interface: "property_card_contact",
                      pType: e.cardData.ty,
                      campaignCode: o,
                      gaObject: u,
                    },
                    e.cardData,
                    n
                  )
                )))
          : "Y" === ce.primeTag &&
            "Video Tour" === a.btnText &&
            (t.stopPropagation(),
            D(Object(W.b)(!0)),
            D(
              Object(T.e)(
                Ee(
                  {
                    event: "event_tracking",
                    eventName: "revamp_srp_dynamic_listing",
                    nonInteraction: !1,
                    eventCategory: "mb prime entry point click",
                    eventAction:
                      "MB Prime_SRP_PrimeExclusiveProperties Clicked_" +
                      e.cardData.ty +
                      "_" +
                      e.category +
                      "_Video Tour CTA",
                    eventLabel: G,
                    eventValue: "",
                    cd21: e.cardData.ty,
                  },
                  n
                )
              )
            ),
            console.log("Is prime button is set to true"));
      }
      function a() {
        return (
          (null != e.additionalBeanData &&
            "Y" == e.additionalBeanData.isNearMeSeoUrl) ||
          (null != Ce && 1 == Ce)
        );
      }
      var h,
        D = Object(o.c)(),
        E = Object(o.d)(function (e) {
          return e.contactCtaData;
        }),
        I = Object(o.d)(function (e) {
          return e.contactData;
        }),
        L = Object(o.d)(function (e) {
          return e.userInfoData;
        }),
        q = Object(o.d)(function (e) {
          return e.searchBean;
        }),
        Y = Object(o.d)(function (e) {
          return e.clientBean;
        }),
        G = (X = Te(
          Object(r.useState)(
            I.requestBody && I.nonPrimeUserFreeOwnerLimitUsed
              ? I.nonPrimeUserFreeOwnerLimitUsed
              : 0
          ),
          2
        ))[0];
      X[1];
      var z = (X = Te(n.a.useState("Request Photos"), 2))[0],
        J = X[1],
        K = (X = Te(Object(r.useState)(!1), 2))[0],
        $ = X[1],
        Q = "10026" === e.cardData.ty,
        X = Object(j.c)(e.cardData, null, e.additionalBeanData),
        Z = Object(w.a)(
          e.cardData,
          e.additionalBeanData,
          e.searchPage,
          "https://www.magicbricks.com"
        ),
        ee = Object(k.c)(e.cardData, e.additionalBeanData),
        te =
          void 0 !== L.userPrimeMemberLoggedIn &&
          null !== L.userPrimeMemberLoggedIn &&
          "Y" == L.userPrimeMemberLoggedIn &&
          void 0 !== e.cardData.pmp &&
          null !== e.cardData.pmp &&
          "Y" == e.cardData.pmp &&
          void 0 !== e.cardData.isPrimeLocProp &&
          null !== e.cardData.isPrimeLocProp &&
          "Y" == e.cardData.isPrimeLocProp
            ? "Y"
            : "N",
        ae =
          ((te = Object(_.a)(
            e.cardData,
            e.additionalBeanData,
            "N",
            e.ind,
            !1,
            ee,
            e.searchPage,
            te
          )),
          Object(ge.a)(e.cardData, e.additionalBeanData)),
        re = Object(fe.a)(
          e.cardData,
          e.additionalBeanData,
          !1,
          e.category,
          ae.sharedOfficeSpace,
          ae.dynamicSeatsValue
        ),
        ne = re.length,
        oe = Object(he.b)(e.cardData),
        ce = Object(O.a)(
          e.cardData,
          e.additionalBeanData,
          null,
          null,
          e.searchPage,
          !1,
          L,
          Y
        ),
        ie =
          ((Y =
            "Y" == ce.primeTag || "Y" == ce.showPrimeProp
              ? "mb-srp__card card-mbprime"
              : 1 == ce.isPremiumMember
              ? "mb-srp__card has-package"
              : "mb-srp__card"),
          (Y =
            e.cardData.ty && "10026" !== e.cardData.ty
              ? Y
              : Y + " card-coworking"),
          Object(S.a)(e.cardData, e.additionalBeanData.isNRIUser)),
        le = Object(he.a)(e.cardData),
        se = Object(_e.a)(e.cardData, e.additionalBeanData),
        ue = Object(N.a)(
          e.cardData,
          e.additionalBeanData,
          e.ind,
          "https://www.magicbricks.com/propertyDetails/",
          "https://stgauction.magicbricks.com/"
        ),
        pe = Object(k.b)(e.cardData, e.additionalBeanData, ae),
        de = Object(C.d)(
          e.cardData,
          pe,
          e.ind,
          X.imgCount,
          e.additionalBeanData,
          e.searchPage,
          oe,
          te,
          L,
          e.isNsr
        ),
        me =
          ((L = Object(A.a)(e.cardData, !1)),
          Object(x.b)(e.additionalBeanData, e.cardData, q)),
        ye = Object(x.e)(e.additionalBeanData, e.cardData, q),
        Pe = e.cardData,
        we = {
          primeTag: ce.primeTag,
          primeGridPageUrl:
            "https://www.magicbricks.com/mbprime/primePackages?source=MBPrime_SRP_Item-defaultTemplate&category=" +
            e.cardData.cg +
            "&ptype=" +
            e.cardData.ty +
            "&cityCnd=" +
            e.cardData.ct,
        },
        ke = null != e.cardData && null != e.cardData.ty ? e.cardData.ty : null,
        Ce = (Ie = Te(Object(r.useState)(!1), 2))[0],
        Ae = Ie[1],
        Ie = null != e.cardData && null != e.cardData.cg ? e.cardData.cg : null,
        Le =
          (null != e.cardData && null != e.cardData.ct && e.cardData.ct,
          E[e.cardData.id] &&
            null !== ce.contactList &&
            ce.contactList.map(function (t, a) {
              E[e.cardData.id].contactFirstText &&
                0 === a &&
                ((ce.contactList[a].btnText =
                  E[e.cardData.id].contactFirstText),
                (ce.contactList[a].btnClass =
                  "mb-srp__action--btn medium btn-contacted")),
                E[e.cardData.id].contactSecondText &&
                  1 === a &&
                  ((ce.contactList[a].btnText =
                    E[e.cardData.id].contactSecondText),
                  (ce.contactList[a].btnClass =
                    "mb-srp__action--btn medium btn-contacted-o"));
            }),
          Object(r.useEffect)(
            function () {
              var t, a, r, n;
              E[e.cardData.id] &&
                E[e.cardData.id].photoContactText &&
                J(E[e.cardData.id].photoContactText),
                "Y" != ce.primeTag &&
                  (null == E[e.cardData.id] ||
                  null == E[e.cardData.id] ||
                  null == E[e.cardData.id].contactFirstText ||
                  null == E[e.cardData.id].contactFirstText ||
                  Object(B.t)(e.additionalBeanData.isNRIUser) ||
                  "false" != e.additionalBeanData.isNRIUser ||
                  "Request Sent" != E[e.cardData.id].contactFirstText
                    ? ((n =
                        void 0 !== e.cardData.isPaidUser &&
                        null !== e.cardData.isPaidUser &&
                        "Y" === e.cardData.isPaidUser),
                      (t = "I" === e.cardData.pp),
                      (a = "Y" === ce.primeTag),
                      (r =
                        void 0 !== I.nonPrimeUserFreeOwnerLimitUsed &&
                        null !== I.nonPrimeUserFreeOwnerLimitUsed
                          ? I.nonPrimeUserFreeOwnerLimitUsed
                          : 0),
                      Object(B.t)(e.additionalBeanData.isNRIUser) ||
                        "false" != e.additionalBeanData.isNRIUser ||
                        n ||
                        a ||
                        !t ||
                        !(1 < r) ||
                        (null !=
                          (n = M.a.readCookie("freeownercontactedids")) &&
                          "" != n &&
                          n.toString().includes(e.cardData.id)) ||
                        (((null != E[e.cardData.id] &&
                          null != E[e.cardData.id] &&
                          null != E[e.cardData.id].contactFirstText &&
                          null != E[e.cardData.id].contactFirstText &&
                          "Contacted" == E[e.cardData.id].contactFirstText) ||
                          (null != E[e.cardData.id] &&
                            null != E[e.cardData.id] &&
                            null != E[e.cardData.id].contactSecondText &&
                            null != E[e.cardData.id].contactSecondText &&
                            "Phone no. sent" ==
                              E[e.cardData.id].contactSecondText)) &&
                          $(!0)))
                    : $(!0));
            },
            [E[e.cardData.id], e.cardData, I]
          ),
          Object(r.useCallback)(
            function (t, a) {
              var r =
                  void 0 !== e.cardData.isPaidUser &&
                  null !== e.cardData.isPaidUser &&
                  "Y" === e.cardData.isPaidUser,
                n = "I" === e.cardData.pp,
                o = "Y" === ce.primeTag,
                c =
                  void 0 !== I.nonPrimeUserFreeOwnerLimitUsed &&
                  null !== I.nonPrimeUserFreeOwnerLimitUsed
                    ? I.nonPrimeUserFreeOwnerLimitUsed
                    : 0;
              if (!r && !o && n && 1 < c) {
                var i = t.btnClass,
                  l = "Ask Owner to Call",
                  s =
                    (Object(B.t)(e.additionalBeanData.isNRIUser) ||
                      "false" != e.additionalBeanData.isNRIUser ||
                      (null != (r = M.a.readCookie("freeownercontactedids")) &&
                      "" != r &&
                      r.toString().includes(e.cardData.id)
                        ? (l = "Call Owner")
                        : (i =
                            t.btnClass +
                            " mb-srp__prime-preContact--btn-disable")),
                    "Send Enquiry");
                switch (
                  (Object(B.t)(e.additionalBeanData.isNRIUser) ||
                    "false" != e.additionalBeanData.isNRIUser ||
                    (s = "Get Phone No."),
                  a)
                ) {
                  case 0:
                    return Ee(
                      Ee({}, t),
                      {},
                      { btnText: l, btnClass: t.btnClass }
                    );
                  case 1:
                    return Ee(Ee({}, t), {}, { btnText: s, btnClass: i });
                  default:
                    return Ee({}, t);
                }
              }
              return Ee({}, t);
            },
            [I, e.cardData]
          )),
        xe = Object(r.useCallback)(
          function (t) {
            return (
              E[e.cardData.id] &&
                null !== t.contactList &&
                t.contactList.map(function (a, r) {
                  E[e.cardData.id].contactFirstText &&
                    0 === r &&
                    ((t.contactList[r].btnText =
                      E[e.cardData.id].contactFirstText),
                    (t.contactList[r].btnClass =
                      "mb-srp__action--btn medium btn-contacted")),
                    E[e.cardData.id].contactSecondText &&
                      1 === r &&
                      ((t.contactList[r].btnText =
                        E[e.cardData.id].contactSecondText),
                      (t.contactList[r].btnClass =
                        "mb-srp__action--btn medium btn-contacted-o"));
                }),
              t
            );
          },
          [E, e.cardData]
        );
      return (
        null !== ce &&
          null !== ce.contactList &&
          ((h = ce.contactList.map(function (e, t) {
            return (t = Le(e, t)), Ee(Ee({}, e), t);
          })),
          (ce = xe((ce = Ee(Ee({}, ce), {}, { contactList: Ne(h) }))))),
        n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            "div",
            {
              className: Y,
              onClick: function () {
                Q &&
                  (Se.a.initialize("UA-492553-10"),
                  Se.a.event({
                    event: "send",
                    category: "Coworking SRP | Property clicked",
                    action: "Coworking LDP load",
                    label: "Property " + e.cardData.ct + " Rank 1",
                    eventName: "Coworking LDP load",
                  }));
                var t = e.cardData.id;
                Object(R.a)(t),
                  "Y" == ce.primeTag && "N" == ce.showPrimeProp
                    ? ((t =
                        "https://www.magicbricks.com/mbprime/primePackages?source=" +
                        (function () {
                          var t = e.ind + 1;
                          return (
                            (t =
                              Object(B.t)(e.cardData.primeFixedSlotProp) ||
                              "Y" != e.cardData.primeFixedSlotProp
                                ? ""
                                : "_Fixed_Slot_" + t),
                            (t = "MBPrime_SRP_Item-defaultTemplate".concat(t)),
                            Object(H.e)(t, "web", "UnlockWithPrimeCTA")
                          );
                        })() +
                        "&category=" +
                        e.cardData.cg +
                        "&ptype=" +
                        e.cardData.ty +
                        "&cityCnd=" +
                        e.cardData.ct +
                        "&propId=" +
                        e.cardData.id),
                      D(
                        Object(T.e)(
                          Ee(
                            {
                              event: "event_tracking",
                              eventName: "revamp_srp_dynamic_listing",
                              nonInteraction: !1,
                              eventCategory: "mb prime entry point click",
                              eventAction:
                                "MB Prime_SRP_PrimeExclusiveProperties Clicked_" +
                                e.cardData.ty +
                                "_" +
                                e.category,
                              eventLabel: G,
                              eventValue: "",
                              cd21: e.cardData.ty,
                            },
                            de
                          )
                        )
                      ),
                      window.open(t, "_blank").focus())
                    : (null != ee &&
                        1 == ee.elligibleForStrata &&
                        (ue +=
                          "&elligibleForStrata=Y&strataPrice=" +
                          ee.strataPrice +
                          "&strataAreaValue=" +
                          ee.strataAreaValue),
                      null != ae &&
                        (void 0 !== ae.sharedOfficeSpace &&
                          null !== ae.sharedOfficeSpace &&
                          "" !== ae.sharedOfficeSpace &&
                          (ue += "&dynamicListing=" + ae.sharedOfficeSpace),
                        void 0 !== ae.dynamicPriceValue &&
                          null !== ae.dynamicPriceValue &&
                          "" !== ae.dynamicPriceValue &&
                          (ue += "&budget=" + ae.dynamicPriceValue),
                        void 0 !== ae.dynamicPriceValue &&
                          null !== ae.dynamicPriceValue &&
                          "" !== ae.dynamicPriceValue &&
                          (ue += "&area=" + ae.dynamicAreaValue),
                        void 0 !== ae.dynamicPriceValue &&
                          null !== ae.dynamicPriceValue &&
                          "" !== ae.dynamicPriceValue &&
                          (ue += "&seats=" + ae.dynamicSeatsValue),
                        void 0 !== ae.dynamicPriceValue) &&
                        null !== ae.dynamicPriceValue &&
                        "" !== ae.dynamicPriceValue &&
                        (ue += "&isCoworkingSearch=" + ae.isCoworkingSearch),
                      window.open(ue));
              },
            },
            n.a.createElement(
              "div",
              { className: "mb-srp__card__container" },
              n.a.createElement(
                "div",
                { className: "mb-srp__card__photo" },
                n.a.createElement(c.a, {
                  requestPhotoCtaName: z,
                  imagePath: e.cardData.attrImg || X.imgPath,
                  imageCount: X.imgCount,
                  imagePostedDate: X.dateCreated,
                  imageAltTag: null != L ? L : "",
                  encPropertyId: e.cardData.id,
                  requestPhotoLabel: X.requestPhoto,
                  imageNotUploaded: X.imageNotUploaded,
                  BtnAction: function (e) {
                    return t(e, "Request Photo", 1, de);
                  },
                  postLabel: e.cardData.postedEditedLabel,
                  titleComp: Object(F.a)(
                    e.cardData,
                    e.additionalBeanData,
                    e.ind,
                    e.searchPage,
                    "",
                    0
                  ),
                  pdpURLPh: ue,
                  carDataObj: Pe,
                  primeGrid: we,
                  cardIndex: e.ind,
                  multilingualData: e.multilingualData,
                }),
                e.cardData &&
                  "10026" !== e.cardData.ty &&
                  n.a.createElement(i.a, {
                    AdvertiserData: e.cardData,
                    search: e.searchPage,
                    category: e.category,
                  }),
                e.cardData &&
                  "10026" === e.cardData.ty &&
                  n.a.createElement(Oe.a, { cardData: e.cardData })
              ),
              n.a.createElement(
                "div",
                {
                  className: a()
                    ? "mb-srp__card__info"
                    : "mb-srp__card__info mb-srp__card__info-withoutburger",
                },
                a()
                  ? n.a.createElement(
                      "div",
                      { className: "mb-srp__card__sort" },
                      n.a.createElement(l.a, {
                        url: ue,
                        propertyGaObj: de,
                        multilingualData: e.multilingualData,
                        cardData: e.cardData,
                        callbackrequested: K,
                        contactMap: ce,
                        contactAction: t,
                        isFrom: "srpCardCommercialComponent",
                      })
                    )
                  : n.a.createElement(n.a.Fragment, null),
                te &&
                  0 < te.length &&
                  n.a.createElement(
                    "div",
                    { className: "mb-srp__card__tags" },
                    te.map(function (t, a) {
                      return n.a.createElement(s.a, {
                        divClassName: "".concat(t.classText),
                        tagNameText: "".concat(t.tagText),
                        key: "tag_".concat(a),
                        multilingualData: e.multilingualData,
                      });
                    })
                  ),
                n.a.createElement(u.a, {
                  cardData: e.cardData,
                  additionalBeanData: e.additionalBeanData,
                  position: e.ind,
                  search: e.searchPage,
                  sharedOfficeSpace: ae.sharedOfficeSpace,
                  dynamicSeatsValue: ae.dynamicSeatsValue,
                  shortListed: e.shortListed,
                  multilingualData: e.multilingualData,
                  ind: e.ind,
                  searchPage: e.searchPage,
                  isNsr: e.isNsr,
                  isShareShift: !0,
                  propertyImgMap: X,
                  url: ue,
                }),
                Z.societyName &&
                  n.a.createElement(
                    "div",
                    { className: "mb-srp__card__society" },
                    n.a.createElement(p.a, {
                      societyLabel: Z.societyLabel,
                      projectUrl: Z.projectUrl,
                      societyName: Z.societyName,
                      propertyGaObj: de,
                      primeGrid: we,
                      multilingualData: e.multilingualData,
                    })
                  ),
                re &&
                  0 < ne &&
                  n.a.createElement(
                    "div",
                    {
                      className: "mb-srp__card__summary-commercial",
                      id: "propertiesAction".concat(e.cardData.id),
                    },
                    n.a.createElement(
                      "div",
                      { className: "mb-srp__card__summary-commercial__list" },
                      re.map(function (t) {
                        return n.a.createElement(d.a, {
                          summaryLabelText: t.labelText,
                          summaryValueText: t.valueText,
                          summaryDataIcon: "status",
                          className:
                            "mb-srp__card__summary-commercial__list--item",
                          multilingualData: e.multilingualData,
                        });
                      })
                    )
                  ),
                0 < le.length &&
                  e.cardData &&
                  "10026" !== e.cardData.ty &&
                  n.a.createElement(
                    "div",
                    { className: "mb-srp__card__usp-near" },
                    le.map(function (e) {
                      return n.a.createElement(be.a, {
                        uspNearIcon: e.uspNearIcon,
                        uspNearText: e.uspNearText,
                      });
                    })
                  ),
                0 < oe.length &&
                  e.cardData &&
                  "10026" !== e.cardData.ty &&
                  n.a.createElement(
                    "div",
                    { className: "mb-srp__card__usp" },
                    oe.map(function (e, t) {
                      return n.a.createElement(m.a, { uspNameText: e });
                    })
                  ),
                e.cardData &&
                  "10026" !== e.cardData.ty &&
                  se.map(function (e) {
                    return n.a.createElement(ve.a, {
                      idealLabelText: e.idealLabelText,
                      idealValueText: e.idealValueText,
                      idealMoreValueCount: e.idealMoreValueCount,
                    });
                  }),
                ie.offerText &&
                  n.a.createElement(y.a, {
                    offerLabel: ie.offerLbl,
                    offerText: ie.offerText,
                  }),
                e.cardData &&
                  "10026" === e.cardData.ty &&
                  n.a.createElement(je.a, { cardData: e.cardData }),
                e.cardData &&
                  "10026" === e.cardData.ty &&
                  e.cardData.cowNrByUsp &&
                  n.a.createElement(
                    "div",
                    { className: "mb-srp__card__usp-near" },
                    e.cardData.cowNrByUsp.map(function (e) {
                      return n.a.createElement(be.a, {
                        uspNearIcon: e.uspNearIcon,
                        uspNearText: e.uspNearText,
                      });
                    })
                  ),
                n.a.createElement(b.a, {
                  card: e.cardData,
                  search: e.searchPage,
                  propertyGaObj: de,
                  primeGrid: we,
                  additionalBeanData: e.additionalBeanData,
                })
              )
            ),
            n.a.createElement(
              "div",
              { className: "mb-srp__card__estimate" },
              e.cardData &&
                "10026" !== e.cardData.ty &&
                n.a.createElement(
                  "div",
                  { className: "mb-srp__card__price" },
                  n.a.createElement(v.a, {
                    category: e.category,
                    divClassName: "mb-srp__card__price--offer-label",
                    OfferPriceLabel: "Offer Price",
                    OfferPriceLabelRef1: "1",
                    cardData: e.cardData,
                    additionalBeanData: e.additionalBeanData,
                    priceMap: pe,
                    propertyGaObj: de,
                    multilingualData: e.multilingualData,
                  })
                ),
              e.cardData &&
                "10026" === e.cardData.ty &&
                n.a.createElement(
                  "div",
                  { className: "mb-srp__card__price" },
                  n.a.createElement(De.a, {
                    cardData: e.cardData,
                    searchBeanData: q,
                  })
                ),
              null != ce &&
                ce.contactList &&
                n.a.createElement(
                  "div",
                  {
                    className:
                      "mb-srp__action action--single mb-srp__card__action",
                  },
                  "Y" == ce.primeTag &&
                    n.a.createElement(g.a, {
                      MBPrimeTagText: "MB Prime",
                      MBPrimeLabelText: "Exclusive Owner Property",
                      MBPrimeHighLight: "",
                    }),
                  "Y" == ce.showPrimeProp &&
                    n.a.createElement(g.a, {
                      MBPrimeTagText: "",
                      MBPrimeLabelText: "Unlocked for you with",
                      MBPrimeHighLight: "MB Prime",
                    }),
                  !K &&
                    null !== ce.contactList &&
                    ce.contactList.map(function (a, r) {
                      return n.a.createElement(f.a, {
                        key: "".concat(e.cardData.id, "_").concat(r),
                        BtnClassName: a.btnClass,
                        BtnText: a.btnText,
                        BtnAction: function (e) {
                          return t(e, a, r, de);
                        },
                        cardData: e.cardData,
                        multilingualData: e.multilingualData,
                        setShowThreeDot:
                          null != a && "Share Feedback" == a.btnText
                            ? Ae
                            : null,
                      });
                    }),
                  K && null != ce && null !== ce.contactList
                    ? n.a.createElement(
                        n.a.Fragment,
                        null,
                        n.a.createElement(V.a, { cardData: e.cardData }),
                        null !== ce.contactList &&
                          ce.contactList.map(function (a, r) {
                            return n.a.createElement(
                              n.a.Fragment,
                              null,
                              null != a && "Share Feedback" == a.btnText
                                ? n.a.createElement(f.a, {
                                    key: ""
                                      .concat(e.cardData.id, "_")
                                      .concat(r),
                                    BtnClassName: a.btnClass,
                                    BtnText: a.btnText,
                                    BtnAction: function (e) {
                                      return t(e, a, r, de);
                                    },
                                    cardData: e.cardData,
                                    setShowThreeDot:
                                      null != a && "Share Feedback" == a.btnText
                                        ? Ae
                                        : null,
                                  })
                                : ""
                            );
                          })
                      )
                    : "",
                  null != Ie &&
                    ("s" == Ie.toLowerCase() || "b" == Ie.toLowerCase()) &&
                    null != ke &&
                    Object(B.n)().includes(ke) &&
                    Object(B.n)().includes(ke) &&
                    n.a.createElement(f.a, {
                      cardData: e.cardData,
                      multilingualData: e.multilingualData,
                      isHomeLoanAndPackersMoversCta: !0,
                      propertyTypeOfEachCard: ke,
                    })
                )
            ),
            me &&
              0 < me.length &&
              n.a.createElement("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: { __html: me },
              }),
            ye &&
              0 < ye.length &&
              n.a.createElement("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: { __html: ye },
              })
          )
        )
      );
    }
    t.a = function (e) {
      var t = e.cardData,
        a = e.searchBeanVal,
        r = e.additionalBeanData,
        o = e.index,
        c = (e.parentCusImgShow, e.cusImgShow, e.isNsr),
        i = ((e = e.multilingualData), a.search);
      (a = a.category),
        (i =
          "luxury" === r.searchType
            ? n.a.createElement(ye, {
                key: "".concat(t.id, "_").concat(o),
                cardData: t,
                additionalBeanData: r,
                ind: o,
                searchPage: r.searchType,
                category: a,
                shortListed: !1,
                isNsr: c,
                multilingualData: e,
                isBuilderCard: !1,
              })
            : "commercial" == i
            ? n.a.createElement(Ae, {
                key: "".concat(t.id, "_").concat(o),
                cardData: t,
                additionalBeanData: r,
                ind: o,
                searchPage: i,
                category: a,
                shortListed: !1,
                isNsr: c,
                multilingualData: e,
              })
            : Object(B.t)(t.isVis) ||
              Object(B.t)(r.noBrokerageBuilderVisType) ||
              !r.noBrokerageBuilderVisType
                .toUpperCase()
                .includes(t.isVis.toUpperCase())
            ? n.a.createElement(ae, {
                key: "".concat(t.id, "_").concat(o),
                cardData: t,
                additionalBeanData: r,
                ind: o,
                searchPage: i,
                category: a,
                shortListed: !1,
                isNsr: c,
                multilingualData: e,
              })
            : n.a.createElement(ye, {
                key: "".concat(t.id, "_").concat(o),
                cardData: t,
                additionalBeanData: r,
                ind: o,
                searchPage: r.searchType,
                category: a,
                shortListed: !1,
                isNsr: c,
                multilingualData: e,
                isBuilderCard: !0,
              }));
      return n.a.createElement(
        "div",
        { className: "mb-srp__list", id: "cardid" + t.id },
        i
      );
    };
  },
  552: function (e, t, a) {
    "use strict";
    var r = a(0),
      n = a.n(r),
      o = a(2),
      c = a(295),
      i = a(1);
    t.a = function (e) {
      var t,
        a,
        r,
        l = e.totalCount,
        s = e.nsrResultCount,
        u = e.additionalBeanData,
        p = e.setEditReq,
        d = e.setEditUrl,
        m = (e.editUrl, e.breadCrumbData, e.searchBeanData);
      e = e.loadDataUserEvent;
      return l < 1 && s < 1
        ? n.a.createElement(n.a.Fragment, null)
        : ((t = Object(o.c)()),
          (l = null) !== u.searchForm &&
            void 0 !== u.searchForm.bedRoomDesc &&
            null !== u.searchForm.bedRoomDesc &&
            (l = u.searchForm.bedRoomDesc.replaceAll(",", ", ") + " BHK"),
          (s = null) !== u.searchForm &&
            void 0 !== u.searchForm.propTypeDesc &&
            null !== u.searchForm.propTypeDesc &&
            21 < (s = u.searchForm.propTypeDesc).length &&
            (s = s.substr(0, 18) + "..."),
          null !== u.searchForm &&
          void 0 !== u.searchForm.budgetMinFormatted &&
          null !== u.searchForm.budgetMinFormatted &&
          "0" !== u.searchForm.budgetMinFormatted &&
          void 0 !== u.searchForm.budgetMaxFormatted &&
          null !== u.searchForm.budgetMaxFormatted
            ? (u.searchForm.budgetMinFormatted, u.searchForm.budgetMaxFormatted)
            : null === u.searchForm ||
              (void 0 !== u.searchForm.budgetMinFormatted &&
                null != u.searchForm.budgetMinFormatted &&
                "0" != u.searchForm.budgetMinFormatted) ||
              void 0 === u.searchForm.budgetMaxFormatted ||
              null === u.searchForm.budgetMaxFormatted
            ? null === u.searchForm ||
              void 0 === u.searchForm.budgetMinFormatted ||
              null === u.searchForm.budgetMinFormatted ||
              (void 0 !== u.searchForm.budgetMaxFormatted &&
                null != u.searchForm.budgetMaxFormatted) ||
              u.searchForm.budgetMinFormatted
            : u.searchForm.budgetMaxFormatted,
          null !== (a = u && Object(i.j)(l, s, u)) &&
            64 < a.length &&
            (a = a.substring(0, 63) + "..."),
          (l = u && Object(i.k)(l, s, u)),
          (r = function (e, a, r) {
            var n = Object(c.a)(
              u.searchForm,
              "https://www.magicbricks.com",
              m,
              !1,
              u
            );
            "save" == e
              ? (document.querySelector("#mb-sonic-audio") &&
                  document.querySelector("#mb-sonic-audio").play(),
                n.includes("&saveClick=Y") ? a(n) : a((n += "&saveClick=Y")))
              : "edit" == e &&
                (n.includes("&saveClick=Y")
                  ? a((n = n.replace("&saveClick=Y", "")))
                  : a(n)),
              p(!0),
              t({ type: "editReq", payload: "true" });
          }),
          n.a.createElement(
            "div",
            { className: "nsr-ssc__cont has-breadcrumb" },
            n.a.createElement(
              "div",
              { className: "nsr-ssc__cont__left" },
              a &&
                "false" == u.isNRIUser &&
                n.a.createElement(
                  "div",
                  { className: "nsr-ssc__cont__heading" },
                  n.a.createElement(
                    "span",
                    { className: "nsr-ssc__cont__heading--light-font" },
                    "Looking for a "
                  ),
                  n.a.createElement(
                    "div",
                    { className: "nsr-ssc__cont__fitersAppied" },
                    n.a.createElement(
                      "span",
                      { className: "nsr-ssc__cont__filtered" },
                      a
                    ),
                    "?"
                  )
                ),
              null == a &&
                "false" == u.isNRIUser &&
                n.a.createElement(
                  "div",
                  { className: "nsr-ssc__cont__heading" },
                  "Save Search"
                ),
              "true" == u.isNRIUser &&
                n.a.createElement(
                  "div",
                  { className: "nsr-ssc__cont__heading" },
                  "Tell us what you want"
                ),
              l &&
                "false" == u.isNRIUser &&
                n.a.createElement(
                  "div",
                  { className: "nsr-ssc__cont__subheading" },
                  l
                ),
              null == l &&
                "false" == u.isNRIUser &&
                n.a.createElement(
                  "div",
                  { className: "nsr-ssc__cont__subheading nri-text" },
                  "Get email alerts for the latest properties related to your saved search"
                ),
              "true" == u.isNRIUser &&
                n.a.createElement(
                  "div",
                  { className: "nsr-ssc__cont__subheading nri-text" },
                  "Share your requirements & receive matching properties with amazing NRI deals right in your inbox"
                )
            ),
            n.a.createElement(
              "div",
              { className: "nsr-ssc__cont__right" },
              a &&
                "false" == u.isNRIUser &&
                n.a.createElement(
                  "span",
                  {
                    onClick: function () {
                      r("edit", d);
                    },
                    className: "nsr-ssc__cont__editCTA",
                  },
                  "Edit"
                ),
              null == a &&
                "false" == u.isNRIUser &&
                n.a.createElement(
                  "span",
                  {
                    onClick: function () {
                      r("edit", d);
                    },
                    className: "nsr-ssc__cont__editCTA",
                  },
                  "Edit"
                ),
              "true" == u.isNRIUser &&
                n.a.createElement(
                  "span",
                  {
                    onClick: function () {
                      r("edit", d);
                    },
                    className: "nsr-ssc__cont__editCTA",
                  },
                  "Edit"
                ),
              n.a.createElement(
                "div",
                { className: "nsr-ssc__cont__criteria" },
                n.a.createElement(
                  "div",
                  { className: "nsr-ssc__cont__fitersCTA" },
                  n.a.createElement(
                    "span",
                    {
                      onClick: function () {
                        r("save", d);
                      },
                      className: "nsr-ssc__cont__saveCTA",
                    },
                    "Set Alert"
                  )
                ),
                e &&
                  n.a.createElement(
                    "audio",
                    {
                      controls: !0,
                      className: "mb-sonic-audio",
                      id: "mb-sonic-audio",
                    },
                    n.a.createElement("source", {
                      src: "https://img.staticmb.com/mbimages/appimages/mailers/mb-sonic-audio-opt.wav",
                      type: "audio/mpeg",
                    })
                  )
              )
            )
          ));
    };
  },
  557: function (e, t, a) {
    "use strict";
    var r = a(0),
      n = a.n(r),
      o = a(2),
      c = a(214),
      i = (a(188), a(250), a(137)),
      l = a(175),
      s = a(139),
      u = a(89),
      p = a(53),
      d = a(136),
      m = a(61),
      y = a(102),
      b = a(13),
      v = a(52),
      f = a(44),
      g = a(215),
      h = a(103),
      _ = a(161),
      O = a(216),
      D = a(116),
      j = a(47),
      S = a(28),
      P = a(3),
      N = a(115),
      w = a(135),
      E = a(1),
      T = a(91),
      k = a(45),
      C = a(6),
      A = a(25),
      I = a(34),
      L = a(60);
    function x(e) {
      return (x =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function B(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function F(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? B(Object(a), !0).forEach(function (t) {
              R(e, t, a[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : B(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    function R(e, t, a) {
      (t = (function (e) {
        return (
          (e = (function (e, t) {
            if ("object" !== x(e) || null === e) return e;
            var a = e[Symbol.toPrimitive];
            if (void 0 === a) return String(e);
            if ("object" !== x((a = a.call(e, "string")))) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          })(e)),
          "symbol" === x(e) ? e : String(e)
        );
      })(t)) in e
        ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = a);
    }
    function U(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var a =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != a) {
            var r,
              n,
              o,
              c,
              i = [],
              l = !0,
              s = !1;
            try {
              if (((o = (a = a.call(e)).next), 0 === t)) {
                if (Object(a) !== a) return;
                l = !1;
              } else
                for (
                  ;
                  !(l = (r = o.call(a)).done) &&
                  (i.push(r.value), i.length !== t);
                  l = !0
                );
            } catch (e) {
              (s = !0), (n = e);
            } finally {
              try {
                if (
                  !l &&
                  null != a.return &&
                  ((c = a.return()), Object(c) !== c)
                )
                  return;
              } finally {
                if (s) throw n;
              }
            }
            return i;
          }
        })(e, t) ||
        (function (e, t) {
          var a;
          if (e)
            return "string" == typeof e
              ? M(e, t)
              : "Map" ===
                  (a =
                    "Object" ===
                      (a = Object.prototype.toString.call(e).slice(8, -1)) &&
                    e.constructor
                      ? e.constructor.name
                      : a) || "Set" === a
              ? Array.from(e)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? M(e, t)
              : void 0;
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function M(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    t.a = function (e) {
      var t = Object(o.c)(),
        a = e.isSortList,
        x = Object(o.d)(function (e) {
          return e.contactCtaData;
        }),
        B = Object(o.d)(function (e) {
          return e.searchBean;
        }),
        M = Object(o.d)(function (e) {
          return e.contactData;
        }),
        V = Object(o.d)(function (e) {
          return e.userInfoData;
        }),
        q = Object(o.d)(function (e) {
          return e.clientBean;
        }),
        Y = (M = U(
          Object(r.useState)(
            M.requestBody && M.nonPrimeUserFreeOwnerLimitUsed
              ? M.nonPrimeUserFreeOwnerLimitUsed
              : 0
          ),
          2
        ))[0],
        G =
          ((M =
            (M[1],
            Object(o.d)(function (e) {
              return e.pdpViewed;
            }))),
          Object(o.d)(function (e) {
            return e.constantDataBean;
          })),
        W = ((z = U(Object(r.useState)("Request Photos"), 2))[0], z[1]),
        H =
          (void 0 !== V.userPrimeMemberLoggedIn &&
            null !== V.userPrimeMemberLoggedIn &&
            "Y" == V.userPrimeMemberLoggedIn &&
            void 0 !== e.cardData.pp &&
            null !== e.cardData.pp &&
            "I" == e.cardData.pmp &&
            void 0 !== e.cardData.isPrimeLocProp &&
            null !== e.cardData.isPrimeLocProp &&
            e.cardData.isPrimeLocProp,
          Object(_.a)(
            e.cardData,
            e.additionalBeanData,
            null,
            null,
            e.searchPage,
            null,
            V,
            G,
            x,
            q,
            e.isBuilderSimilar
          )),
        z = Object(u.a)(
          e.cardData,
          e.additionalBeanData,
          "N",
          e.ind,
          !0,
          null,
          e.searchPage,
          H.showPrimeProp
        ),
        J =
          ((G = Object(p.c)(e.cardData, null, null)),
          Object(m.d)(
            e.cardData,
            e.additionalBeanData.dynamicArea,
            !0,
            e.category
          )),
        K =
          (Object(d.a)(e.cardData, e.additionalBeanData.isNRIUser),
          Object(w.a)(e.cardData, e.searchPage, !0)),
        $ =
          ((K = Object(g.a)(e.cardData, e.searchPage, K)),
          Object(f.g)(e.cardData, e.additionalBeanData),
          Object(y.a)(
            e.cardData,
            e.additionalBeanData,
            e.ind,
            e.searchPage,
            "",
            "",
            e.multilingualData
          )),
        Q = Object(v.b)(e.cardData, e.additionalBeanData),
        X = Object(h.a)(
          e.cardData,
          e.additionalBeanData,
          e.ind,
          "https://www.magicbricks.com/propertyDetails/",
          "https://stgauction.magicbricks.com/"
        ),
        Z = Object(O.a)(H, X),
        ee = Object(S.d)(
          e.cardData,
          Q,
          e.ind,
          G.imgCount,
          e.additionalBeanData,
          e.searchPage,
          K,
          z,
          V,
          e.isNsr,
          H.mbPrimeFreeOwnProp
        ),
        te = (G =
          (Object(D.a)(e.cardData, !0),
          Object(m.e)(J, e.searchPage, e.cardData.cg, e.multilingualData),
          U(
            Object(r.useState)(
              M &&
                M.viewedProperties &&
                0 < M.viewedProperties.length &&
                -1 !=
                  M.viewedProperties.findIndex(function (t) {
                    return t == e.cardData.id;
                  })
            ),
            2
          )))[0],
        ae = G[1];
      (J = Object(N.a)(
        e.cardData,
        e.additionalBeanData,
        e.searchPage,
        "https://www.magicbricks.com"
      )),
        (M = Object(m.a)(e.cardData)),
        Object(m.b)(K, M, e.searchPage),
        (G = Object(j.b)(e.additionalBeanData, e.cardData, B)),
        (K = Object(j.e)(e.additionalBeanData, e.cardData, B));
      return (
        Object(r.useEffect)(function () {
          Object(E.v)(H) ||
            Object(E.t)(H.contactList) ||
            H.contactList.every(function (a) {
              return (
                a.btnText !== I.a.PRIMEPLUS_AFTER_EXPIRED_CTA.ctaText ||
                (t(Object(I.b)(e.cardData, V, I.c.IMPRESSION, "wap")), !1)
              );
            });
        }, []),
        x[e.cardData.id] &&
          null !== H.contactList &&
          H.contactList.map(function (t, a) {
            x[e.cardData.id].contactSecondText &&
              0 === a &&
              ((H.contactList[a].btnText = x[e.cardData.id].contactSecondText),
              (H.contactList[a].btnClass =
                "mb-srp-m__action--btn medium btn-contacted-o")),
              x[e.cardData.id].contactFirstText &&
                1 === a &&
                ((H.contactList[a].btnText = x[e.cardData.id].contactFirstText),
                (H.contactList[a].btnClass =
                  "mb-srp-m__action--btn medium btn-contacted"));
          }),
        Object(r.useEffect)(
          function () {
            x[e.cardData.id] &&
              x[e.cardData.id].photoContactText &&
              W(x[e.cardData.id].photoContactText);
          },
          [x[e.cardData.id]]
        ),
        n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            "div",
            {
              className: "".concat(
                e.isMobile
                  ? "mb-srp-m__card builder-similar-big-card"
                  : "builder-card builder-similar-big-card"
              ),
              onClick: e.isMobile
                ? function (r) {
                    return (
                      (n = e.cardData.id),
                      Object(T.a)(n),
                      void (H && "Y" !== H.appExclusive
                        ? "Y" == H.primeTag
                          ? ((n =
                              "https://www.magicbricks.com/mbprime/primePackages?source=" +
                              Object(A.e)(
                                "MBPrime_SRP_Item-defaultTemplate",
                                "wap",
                                "UnlockWithPrimeCTA"
                              )),
                            e.cardData.cg,
                            e.cardData.ty,
                            e.cardData.ct,
                            e.cardData.id,
                            t(
                              Object(P.e)(
                                F(
                                  {
                                    event: "event_tracking",
                                    eventName: "revamp_srp_dynamic_listing",
                                    nonInteraction: !1,
                                    eventCategory:
                                      "MB Prime_Wap Entry Point Click",
                                    eventAction:
                                      "MB Prime_Wap_SRP_PrimeExclusiveProperties Clicked_" +
                                      e.cardData.ty +
                                      "_" +
                                      e.category,
                                    eventLabel: Y,
                                    eventValue: "",
                                    cd21: e.cardData.ty,
                                  },
                                  ee
                                )
                              )
                            ),
                            window.open(n, "_blank").focus())
                          : (r.stopPropagation(),
                            Object(E.t)(e.isBuilderSimilar) ||
                              1 != e.isBuilderSimilar ||
                              (t(
                                Object(P.e)(
                                  F(
                                    {
                                      event: "event_tracking",
                                      eventName: "revamp_srp_dynamic_listing",
                                      nonInteraction: !1,
                                      eventCategory: "ldp page load",
                                      eventAction:
                                        "SRP Similar Property Section",
                                      eventLabel: "similar property card",
                                      eventValue: "",
                                      cd21: e.cardData.ty,
                                    },
                                    ee
                                  )
                                )
                              ),
                              t(
                                Object(P.e)(
                                  F(
                                    {
                                      event: "event_tracking",
                                      eventName: "revamp_srp_dynamic_listing",
                                      nonInteraction: !1,
                                      eventCategory: "show_similar_builder",
                                      eventAction: "card clicked",
                                      eventLabel: "LDP Page Load",
                                      eventValue: "",
                                      cd21: e.cardData.ty,
                                    },
                                    ee
                                  )
                                )
                              )),
                            (n =
                              -1 != X.indexOf("?")
                                ? X + "&srcrvmp=Y"
                                : X + "?&srcrvmp=Y"),
                            a
                              ? (Object(E.r)(n),
                                C.a.createCookie("quickViewOpen", "Y", 1 / 24))
                              : window.open(X, "_self"),
                            t(
                              Object(P.e)(
                                F(
                                  {
                                    event: "event_tracking",
                                    eventName: "revamp_srp_ldp_view",
                                    nonInteraction: !1,
                                    eventCategory:
                                      "revamp srp - property tuple misc actions",
                                    eventAction: "ldp launch click",
                                    eventLabel:
                                      "propertysearch | property tuple",
                                    eventValue: "",
                                    cd21: e.cardData.ty,
                                  },
                                  ee
                                )
                              )
                            ),
                            t({ type: "pdppageurl", payload: n }),
                            (r =
                              null != e.showSimiliarProperties &&
                              -1 ==
                                e.showSimiliarProperties
                                  .toString()
                                  .indexOf(e.cardData.id)
                                ? e.showSimiliarProperties.toString() +
                                  "," +
                                  e.cardData.id
                                : e.showSimiliarProperties.toString()),
                            e.setShowSimiliarProperties(r),
                            te ||
                              (ae(!0),
                              t({
                                type: "PROPERTY_VIEWED",
                                payload: e.cardData.id,
                              })))
                        : H &&
                          "Y" == H.appExclusive &&
                          (e.setShowAppDownloadPopup(!0),
                          e.setAppDownloadLink(Z)))
                    );
                    var n;
                  }
                : function (a) {
                    return (
                      (r = e.cardData.id),
                      Object(T.a)(r),
                      void ("Y" == H.primeTag && "N" == H.showPrimeProp
                        ? ((r =
                            "https://www.magicbricks.com/mbprime/primePackages?source=" +
                            getPrimeSourceText() +
                            "&category=" +
                            e.cardData.cg +
                            "&ptype=" +
                            e.cardData.ty +
                            "&cityCnd=" +
                            e.cardData.ct +
                            "&propId=" +
                            e.cardData.id),
                          t(
                            Object(P.e)(
                              F(
                                {
                                  event: "event_tracking",
                                  eventName: "revamp_srp_dynamic_listing",
                                  nonInteraction: !1,
                                  eventCategory: "mb prime entry point click",
                                  eventAction:
                                    "MB Prime_SRP_PrimeExclusiveProperties Clicked_" +
                                    e.cardData.ty +
                                    "_" +
                                    e.category,
                                  eventLabel: Y,
                                  eventValue: "",
                                  cd21: e.cardData.ty,
                                },
                                ee
                              )
                            )
                          ),
                          window.open(r, "_blank").focus())
                        : (Object(E.t)(e.isBuilderSimilar) ||
                            1 != e.isBuilderSimilar ||
                            (t(
                              Object(P.e)(
                                F(
                                  {
                                    event: "event_tracking",
                                    eventName: "revamp_srp_dynamic_listing",
                                    nonInteraction: !1,
                                    eventCategory: "ldp page load",
                                    eventAction: "SRP Similar Property Section",
                                    eventLabel: "similar property card",
                                    eventValue: "",
                                    cd21: e.cardData.ty,
                                  },
                                  ee
                                )
                              )
                            ),
                            t(
                              Object(P.e)(
                                F(
                                  {
                                    event: "event_tracking",
                                    eventName: "revamp_srp_dynamic_listing",
                                    nonInteraction: !1,
                                    eventCategory: "show_similar_builder",
                                    eventAction: "card clicked",
                                    eventLabel: "LDP Page Load",
                                    eventValue: "",
                                    cd21: e.cardData.ty,
                                  },
                                  ee
                                )
                              )
                            )),
                          window.open(X)))
                    );
                    var r;
                  },
              id: "cardid" + e.cardData.id,
            },
            n.a.createElement(
              "div",
              { className: "builder-similar-big-card__wrap" },
              n.a.createElement(
                "div",
                { className: "builder-card-photo__usp" },
                e.cardData.psmUspImgMob.split(",")[0].split("|")[0]
              ),
              n.a.createElement(L.a, {
                alt: e.cardData.psmUspImgMob.split(",")[0].split("|")[0],
                src: e.cardData.psmUspImgMob.split(",")[0].split("|")[1],
                dataSrc: e.cardData.psmUspImgMob.split(",")[0].split("|")[1],
                modifyClass: "builder-similar-big-card__img customLazy",
                clickEvent: !1,
              }),
              n.a.createElement(
                "div",
                { className: "builder-similar-big-card__content" },
                n.a.createElement(
                  "div",
                  { className: "builder-similar-big-card__price-tag" },
                  n.a.createElement(
                    "span",
                    { className: "builder-similar-big-card__price" },
                    n.a.createElement(i.a, {
                      priceMap: Q,
                      multilingualData: e.multilingualData,
                    })
                  ),
                  n.a.createElement(
                    "div",
                    { className: "mb-srp-m__card__tags clearfix" },
                    z &&
                      0 < z.length &&
                      n.a.createElement(
                        n.a.Fragment,
                        null,
                        z.map(function (t, a) {
                          return n.a.createElement(c.a, {
                            divClassName: "".concat(t.classText),
                            tagNameText: "".concat(t.tagText),
                            key: "tag_".concat(a),
                            multilingualData: e.multilingualData,
                          });
                        })
                      )
                  )
                ),
                J.societyName &&
                  n.a.createElement(
                    "div",
                    { className: "mb-srp-m__card__society" },
                    n.a.createElement(l.a, {
                      projectUrl: J.projectUrl,
                      societyName: J.societyName,
                      multilingualData: e.multilingualData,
                    })
                  ),
                n.a.createElement(
                  "div",
                  { className: "builder-card__city-locality" },
                  e.cardData.lmtDName,
                  ", ",
                  e.cardData.ctName
                ),
                H &&
                  "N" == H.showPrimeProp &&
                  "Y" !== H.appExclusive &&
                  "Y" != H.primeTag &&
                  H.contactList &&
                  n.a.createElement(
                    "div",
                    { className: "mb-srp-m__action mb-srp-m__card__action" },
                    null !== H.contactList &&
                      H.contactList.map(function (a, r) {
                        return n.a.createElement(s.a, {
                          BtnClassName: a.btnClass,
                          BtnText: a.btnText,
                          multilingualData: e.multilingualData,
                          BtnAction: function (n) {
                            return (
                              (o = a),
                              (c = r),
                              (i = ee),
                              n.stopPropagation(),
                              (w = "revamp_srp_proptuple_contact"),
                              (L = c + 1),
                              (x = A = T = N = ""),
                              (U = "WAP"),
                              (M = "search_wap"),
                              (G = C.a.readCookie("trackerCookie")),
                              Object(E.t)(G)
                                ? Object(E.t)(G) &&
                                  !Object(E.t)(document.referrer) &&
                                  document.referrer.includes(".google") &&
                                  (C.a.createCookieRem(
                                    "trackerCookie",
                                    "Google_Organic",
                                    180
                                  ),
                                  (U = "wap_Google_Organic"))
                                : (U = "wap_" + G),
                              void (Object(E.v)(o)
                                ? Object(E.t)(o) || "Request Photo" !== o
                                  ? Object(E.t)(o) ||
                                    "MB Prime" !== o ||
                                    ((N = o),
                                    (x =
                                      "property_for_" +
                                      Object(E.l)(B) +
                                      "_" +
                                      N +
                                      "_RevampSRP"),
                                    (G = F(
                                      {
                                        event: "event_tracking",
                                        eventName: (w =
                                          "revamp_srp_proptuple_contact"),
                                        nonInteraction: !1,
                                        eventCategory: "contactsuccess",
                                        eventAction: A,
                                        eventLabel: (T =
                                          L + " / " + H.contactList.length),
                                        eventValue: "",
                                        cd96: N,
                                      },
                                      i
                                    )),
                                    (u = F(
                                      {
                                        event: "event_tracking",
                                        eventName: w,
                                        nonInteraction: !1,
                                        eventCategory: "contactinfoformopen",
                                        eventAction: A,
                                        eventLabel: T,
                                        eventValue: "",
                                        cd96: N,
                                      },
                                      i
                                    )),
                                    (p = F(
                                      {
                                        event: "event_tracking",
                                        eventName: w,
                                        nonInteraction: !1,
                                        eventCategory: "Contact Info Form",
                                        eventAction: A,
                                        eventLabel: T,
                                        eventValue: "",
                                        cd96: N,
                                      },
                                      i
                                    )),
                                    (s = F(
                                      {
                                        event: "event_tracking",
                                        eventName: w,
                                        nonInteraction: !1,
                                        eventCategory: "Contact Info Form",
                                        eventAction: A,
                                        eventLabel: T,
                                        eventValue: "",
                                        cd96: N,
                                      },
                                      i
                                    )),
                                    (m = F(
                                      {
                                        event: "event_tracking",
                                        eventName: w,
                                        nonInteraction: !1,
                                        eventCategory: "contactinfoformsubmit",
                                        eventAction: A,
                                        eventLabel: T,
                                        eventValue: "",
                                        cd96: N,
                                      },
                                      i
                                    )),
                                    (y = F(
                                      {
                                        event: "event_tracking",
                                        eventName: w,
                                        nonInteraction: !1,
                                        eventCategory: "contactotpformopen",
                                        eventAction: A,
                                        eventLabel: T,
                                        eventValue: "",
                                        cd96: N,
                                      },
                                      i
                                    )),
                                    (v = F(
                                      {
                                        event: "event_tracking",
                                        eventName: w,
                                        nonInteraction: !1,
                                        eventCategory: "Contact Otp Form",
                                        eventAction: A,
                                        eventLabel: T,
                                        eventValue: "",
                                        cd96: N,
                                      },
                                      i
                                    )),
                                    (f = F(
                                      {
                                        event: "event_tracking",
                                        eventName: w,
                                        nonInteraction: !1,
                                        eventCategory: "Contact Otp Form",
                                        eventAction: A,
                                        eventLabel: T,
                                        eventValue: "",
                                        cd96: N,
                                      },
                                      i
                                    )),
                                    (g = F(
                                      {
                                        event: "event_tracking",
                                        eventName: w,
                                        nonInteraction: !1,
                                        eventCategory: "contactotpformsubmit",
                                        eventAction: A,
                                        eventLabel: T,
                                        eventValue: "",
                                        cd96: N,
                                      },
                                      i
                                    )),
                                    (h = F(
                                      {
                                        event: "event_tracking",
                                        eventName: "revamp_srp_thank_contact",
                                        nonInteraction: !1,
                                        eventCategory:
                                          "revamp srp - thank you page",
                                        eventAction: "page load",
                                        eventLabel: "page load",
                                        eventValue: "",
                                        cd96: N,
                                      },
                                      i
                                    )),
                                    (_ = F(
                                      {
                                        event: "event_tracking",
                                        eventName: "revamp_srp_thank_contact",
                                        nonInteraction: !1,
                                        eventCategory: "contactbuttonclicked",
                                        eventAction:
                                          "revamp srp | propertycontact | propertysearch | thankyou | duplicate",
                                        eventLabel: "only",
                                        eventValue: "",
                                        cd96: N,
                                      },
                                      i
                                    )),
                                    (O = F(
                                      {
                                        event: "event_tracking",
                                        eventName: "revamp_srp_thank_contact",
                                        nonInteraction: !1,
                                        eventCategory: "contactsuccess",
                                        eventAction:
                                          "revamp srp | propertycontact | propertysearch | thankyou | duplicate",
                                        eventLabel: "only",
                                        eventValue: "",
                                        cd96: N,
                                      },
                                      i
                                    )),
                                    (D = F(
                                      {
                                        event: "event_tracking",
                                        eventName: "revamp_srp_thank_contact",
                                        nonInteraction: !1,
                                        eventCategory: "contactbuttonclicked",
                                        eventAction:
                                          "revamp srp | propertycontact | propertysearch | thankyou | reco | primary",
                                        eventLabel:
                                          "Rank of card / Total cards",
                                        eventValue: "",
                                        cd96: N,
                                      },
                                      i
                                    )),
                                    (j = F(
                                      {
                                        event: "event_tracking",
                                        eventName: "revamp_srp_thank_contact",
                                        nonInteraction: !1,
                                        eventCategory: "contactsuccess",
                                        eventAction:
                                          "revamp srp | propertycontact | propertysearch | thankyou | reco | primary",
                                        eventLabel:
                                          "Rank of card / Total cards",
                                        eventValue: "",
                                        cd96: N,
                                      },
                                      i
                                    )),
                                    (d = F(
                                      {
                                        event: "event_tracking",
                                        eventName: "revamp_srp_thank",
                                        nonInteraction: !1,
                                        eventCategory:
                                          "revamp srp - thank you page",
                                        eventAction: "get details on sms",
                                        eventLabel: "propertysearch | thankyou",
                                        eventValue: "",
                                        cd96: N,
                                      },
                                      i
                                    )),
                                    null != e.shortListed && 1 == e.shortListed
                                      ? ((l = F(
                                          {
                                            event: "event_tracking",
                                            eventName:
                                              "shortlist_page_proptuple_contact",
                                            nonInteraction: !1,
                                            eventCategory:
                                              "contactbuttonclicked",
                                            eventAction: Object(S.a)(L, !0),
                                            eventLabel: T,
                                            eventValue: "",
                                            cd96: N,
                                          },
                                          i
                                        )),
                                        t({
                                          type: "SHORTLIST_GA_DATA",
                                          payload: { shortListGaCommonData: l },
                                        }),
                                        t(Object(P.e)(l)))
                                      : t(
                                          Object(P.e)(
                                            F(
                                              {
                                                event: "event_tracking",
                                                eventName: w,
                                                nonInteraction: !1,
                                                eventCategory:
                                                  "contactbuttonclicked",
                                                eventAction: A,
                                                eventLabel: T,
                                                eventValue: "",
                                                cd96: N,
                                              },
                                              i
                                            )
                                          )
                                        ),
                                    t(Object(b.d)(n)),
                                    t(
                                      Object(b.b)(
                                        n,
                                        {
                                          buttonType: "MB Prime",
                                          contactType: "property",
                                          searchType: 1,
                                          propertyId: e.cardData.id,
                                          advertisers: e.cardData.id,
                                          requestInterface: "search_wap",
                                          contactTrackCookie: x,
                                          campaignCode: "WAP",
                                          isLoginAndInfra: !1,
                                          formName: "SRP_TOP_CONTACT",
                                          contact_interface:
                                            "property_card_contact",
                                          gaObject: {
                                            contactsuccess: G,
                                            contactinfoformopen: u,
                                            contactInfoFormError: p,
                                            contactInfoFormClose: s,
                                            contactinfoformsubmit: m,
                                            contactotpformopen: y,
                                            contactOtpFormError: v,
                                            contactOtpFormClose: f,
                                            contactotpformsubmit: g,
                                            thankyoupageLoad: h,
                                            thankyoucontactBuilderClick: _,
                                            thankyoucontactBuilderSuccess: O,
                                            thankyoucontactRecommendClick: D,
                                            thankyoucontactRecommendSuccess: j,
                                            thankyougetdetailsonsms: d,
                                          },
                                        },
                                        e.cardData,
                                        Q.finalPrice,
                                        $
                                      )
                                    ))
                                  : ((N = o),
                                    (x =
                                      "property_for_" +
                                      Object(E.l)(B) +
                                      "_" +
                                      N +
                                      "_RevampSRP"),
                                    (w = "revamp_srp_proptuple_contact"),
                                    (l = "contactbuttonclicked"),
                                    (T = "request photos"),
                                    (A =
                                      "revamp srp | propertycontact | propertysearch | property tuple | misc | request photos"),
                                    (G = F(
                                      F({}, i),
                                      {},
                                      { cd142: "otp contact" }
                                    )),
                                    (u = Object(k.c)(w, A, T, N, G)),
                                    null != q && q.virtualNumberDataAvailable
                                      ? t(
                                          Object(P.e)(
                                            F(
                                              {
                                                event: "event_tracking",
                                                eventName: w,
                                                nonInteraction: !1,
                                                eventCategory: l,
                                                eventAction: A,
                                                eventLabel: T,
                                                eventValue: "",
                                                cd96: N + "_vn",
                                              },
                                              G
                                            )
                                          )
                                        )
                                      : t(
                                          Object(P.e)(
                                            F(
                                              {
                                                event: "event_tracking",
                                                eventName: w,
                                                nonInteraction: !1,
                                                eventCategory: l,
                                                eventAction: A,
                                                eventLabel: T,
                                                eventValue: "",
                                                cd96: N,
                                              },
                                              G
                                            )
                                          )
                                        ),
                                    t(Object(b.d)(n)),
                                    (p = F(
                                      {
                                        event: "event_tracking",
                                        eventName:
                                          "revamp_srp_proptuple_contact",
                                        nonInteraction: !1,
                                        eventCategory:
                                          "Virtualnumber-Contact_Form Shown",
                                        eventAction: A,
                                        eventLabel: T,
                                        eventValue: "",
                                        cd96: N,
                                      },
                                      i
                                    )),
                                    t(
                                      Object(b.b)(
                                        n,
                                        (R(
                                          (s = {
                                            buttonType: N,
                                            contactType: "property",
                                            searchType: 1,
                                            propertyId: e.cardData.id,
                                            advertisers: e.cardData.id,
                                            requestInterface: "search_wap",
                                            contactTrackCookie: x,
                                            campaignCode: "WAP",
                                            isLoginAndInfra: !1,
                                            formName: "SRP_TOP_CONTACT",
                                            contact_interface:
                                              "property_card_contact",
                                            pType: e.cardData.ty,
                                          }),
                                          "campaignCode",
                                          U
                                        ),
                                        R(s, "gaObject", u),
                                        R(s, "vnGa", p),
                                        s),
                                        e.cardData,
                                        Q.finalPrice,
                                        $
                                      )
                                    ))
                                : (("Ask Owner to Call" != o.btnText &&
                                    "Send Enquiry" != o.btnText) ||
                                    t(
                                      Object(P.e)(
                                        F(
                                          {
                                            event: "event_tracking",
                                            eventName:
                                              "revamp_srp_dynamic_listing",
                                            nonInteraction: !1,
                                            eventCategory:
                                              "MB Prime_Wap CTA Change Click",
                                            eventAction:
                                              "MB Prime_Wap_SRP_Free Owner Prop CTA Change Clicked_" +
                                              e.cardData.ty +
                                              "_" +
                                              e.category,
                                            eventLabel: Y,
                                            eventValue: "",
                                            cd21: e.cardData.ty,
                                          },
                                          i
                                        )
                                      )
                                    ),
                                  "Show Similar" == o.btnText
                                    ? ((m =
                                        "property_clicked_on_" +
                                        (Object(E.t)(e.cardData.id)
                                          ? ""
                                          : e.cardData.id) +
                                        " | project_clicked_on_" +
                                        (Object(E.t)(e.cardData.psmid)
                                          ? ""
                                          : e.cardData.psmid) +
                                        " | advertiser_type_got_clicked_" +
                                        (Object(E.t)(e.cardData.userType)
                                          ? ""
                                          : e.cardData.userType) +
                                        " | advertiser_type_paid_" +
                                        (Object(E.t)(e.cardData.isPaidUser)
                                          ? ""
                                          : e.cardData.isPaidUser) +
                                        " | service_ids_of_advertiser_" +
                                        (Object(E.t)(e.cardData.sid)
                                          ? ""
                                          : e.cardData.sid.replace(/,/g, "#"))),
                                      t(
                                        Object(P.e)(
                                          F(
                                            {
                                              event: "event_tracking",
                                              eventName:
                                                "revamp_srp_dynamic_listing",
                                              nonInteraction: !1,
                                              eventCategory:
                                                "show_similar_builder",
                                              eventAction:
                                                "show similar clicked_page_SRP-cta label_" +
                                                o.btnText,
                                              eventLabel: m,
                                              eventValue: "",
                                              cd21: e.cardData.ty,
                                            },
                                            i
                                          )
                                        )
                                      ))
                                    : ((N = o.btnText),
                                      (x =
                                        "property_for_" +
                                        Object(E.l)(B) +
                                        "_" +
                                        N +
                                        "_RevampSRP"),
                                      (w = "revamp_srp_proptuple_contact"),
                                      (T = L + " / " + H.contactList.length),
                                      (A = Object(S.a)(L, !1)),
                                      Object(E.t)(e.isBuilderSimilar) ||
                                        1 != e.isBuilderSimilar ||
                                        ((y = 1 == c ? "primary" : "secondary"),
                                        (v = Object(E.t)(e.cardData.id)
                                          ? ""
                                          : e.cardData.id),
                                        (f = Object(E.t)(e.cardData.psmid)
                                          ? ""
                                          : e.cardData.psmid),
                                        (g =
                                          Object(E.t)(e.cardData.cg) ||
                                          "r" != e.cardData.cg
                                            ? "sale"
                                            : "rent"),
                                        (h = ""),
                                        (_ =
                                          "contact_button_" +
                                          y +
                                          ",contact_button_label_" +
                                          N +
                                          ",property_id_" +
                                          v +
                                          ",project_id_" +
                                          f +
                                          (h = Object(E.t)(e.serviceIds)
                                            ? h
                                            : ",serviceIds_" + e.serviceIds)),
                                        t(
                                          Object(P.e)(
                                            F(
                                              {
                                                event: "event_tracking",
                                                eventName:
                                                  "revamp_srp_dynamic_listing",
                                                nonInteraction: !1,
                                                eventCategory:
                                                  "show_similar_builder",
                                                eventAction:
                                                  "contact_button_clicked",
                                                eventLabel: _,
                                                eventValue: "",
                                                cd21: e.cardData.ty,
                                              },
                                              i
                                            )
                                          )
                                        ),
                                        (A =
                                          "page_propertysearch-cta label_" +
                                          N +
                                          " | SRP Similar Property Section"),
                                        (x = ""),
                                        (!Object(E.t)(e.isMobile) &&
                                          0 != e.isMobile) ||
                                          ((x = "AA-"), (M = "search_web")),
                                        (x =
                                          x +
                                          "propertysearch_" +
                                          g +
                                          "_similar project property card_" +
                                          N),
                                        (U =
                                          Object(E.t)(e.isMobile) ||
                                          1 != e.isMobile
                                            ? "Web_propertysearch_RevampSRP"
                                            : "WAP_propertysearch_RevampSRP"),
                                        Object(E.t)(e.serviceIds)) ||
                                        ((x =
                                          x + "_serviceIds_" + e.serviceIds),
                                        (T =
                                          T + "_serviceIds_" + e.serviceIds)),
                                      (O = Object(k.c)(w, A, T, N, i)),
                                      null != e.shortListed &&
                                      1 == e.shortListed
                                        ? ((D = F(
                                            {
                                              event: "event_tracking",
                                              eventName:
                                                "shortlist_page_proptuple_contact",
                                              nonInteraction: !1,
                                              eventCategory:
                                                "contactbuttonclicked",
                                              eventAction: Object(S.a)(L, !0),
                                              eventLabel: T,
                                              eventValue: "",
                                              cd96: N,
                                            },
                                            i
                                          )),
                                          t({
                                            type: "SHORTLIST_GA_DATA",
                                            payload: {
                                              shortListGaCommonData: D,
                                            },
                                          }),
                                          t(Object(P.e)(D)))
                                        : null != q &&
                                          q.virtualNumberDataAvailable
                                        ? t(
                                            Object(P.e)(
                                              F(
                                                {
                                                  event: "event_tracking",
                                                  eventName: w,
                                                  nonInteraction: !1,
                                                  eventCategory:
                                                    "contactbuttonclicked",
                                                  eventAction: A,
                                                  eventLabel: T,
                                                  eventValue: "",
                                                  cd96: N + "_vn",
                                                },
                                                i
                                              )
                                            )
                                          )
                                        : t(
                                            Object(P.e)(
                                              F(
                                                {
                                                  event: "event_tracking",
                                                  eventName: w,
                                                  nonInteraction: !1,
                                                  eventCategory:
                                                    "contactbuttonclicked",
                                                  eventAction: A,
                                                  eventLabel: T,
                                                  eventValue: "",
                                                  cd96: N,
                                                },
                                                i
                                              )
                                            )
                                          ),
                                      (j = F(
                                        {
                                          event: "event_tracking",
                                          eventName:
                                            "revamp_srp_proptuple_contact",
                                          nonInteraction: !1,
                                          eventCategory:
                                            "Virtualnumber-Contact_Form Shown",
                                          eventAction: A,
                                          eventLabel: T,
                                          eventValue: "",
                                          cd96: N,
                                        },
                                        i
                                      )),
                                      t(Object(b.d)(n)),
                                      t(
                                        Object(b.b)(
                                          n,
                                          (R(
                                            (d = {
                                              buttonType: N,
                                              contactType: "property",
                                              searchType: 1,
                                              propertyId: e.cardData.id,
                                              advertisers: e.cardData.id,
                                              requestInterface: M,
                                              contactTrackCookie: x,
                                              campaignCode: "WAP",
                                              isLoginAndInfra: !1,
                                              formName: "SRP_TOP_CONTACT",
                                              contact_interface:
                                                "property_card_contact",
                                              pType: e.cardData.ty,
                                            }),
                                            "campaignCode",
                                            U
                                          ),
                                          R(d, "gaObject", O),
                                          R(d, "vnGa", j),
                                          d),
                                          e.cardData,
                                          Q.finalPrice,
                                          $
                                        )
                                      ),
                                      o.btnText ===
                                        I.a.PRIMEPLUS_AFTER_EXPIRED_CTA
                                          .ctaText &&
                                        t(
                                          Object(I.b)(
                                            e.cardData,
                                            V,
                                            I.c.CLICK,
                                            "wap"
                                          )
                                        ))))
                            );
                            var o,
                              c,
                              i,
                              l,
                              s,
                              u,
                              p,
                              d,
                              m,
                              y,
                              v,
                              f,
                              g,
                              h,
                              _,
                              O,
                              D,
                              j,
                              N,
                              w,
                              T,
                              A,
                              L,
                              x,
                              U,
                              M,
                              G;
                          },
                        });
                      })
                  )
              )
            ),
            G &&
              0 < G.length &&
              n.a.createElement("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: { __html: G },
              }),
            K &&
              0 < K.length &&
              n.a.createElement("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: { __html: K },
              })
          )
        )
      );
    };
  },
  561: function (e, t, a) {
    "use strict";
    a.d(t, "a", function () {
      return l;
    });
    var r = a(14),
      n = a(6),
      o = a(1);
    function c(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return i(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        (function (e, t) {
          var a;
          if (e)
            return "string" == typeof e
              ? i(e, t)
              : "Map" ===
                  (a =
                    "Object" ===
                      (a = Object.prototype.toString.call(e).slice(8, -1)) &&
                    e.constructor
                      ? e.constructor.name
                      : a) || "Set" === a
              ? Array.from(e)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? i(e, t)
              : void 0;
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function i(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    var l = function (e, t, a, i, l, s, u, p) {
      return function (d, m) {
        var y = m().contactData,
          b =
            ((m = m().searchResult),
            (y = encodeURIComponent(y.recieverId)),
            "S" == e ? "B" : e),
          v = [];
        "P" == t &&
          (Object(o.t)(s) || (s && "200000000" === s)) &&
          m &&
          Array.isArray(m) &&
          m.map(function (e, t) {
            t < 10 && v.push(e.id);
          }),
          (m = (m = n.a.readCookie("viewedPropertiesForDetails"))
            ? m.split("|")
            : []),
          (m = [].concat(c(m), v)),
          r.a
            .get(
              "/alternateDiscoveryPath?isVisFlag=&cg=" +
                b +
                "&flow=" +
                t +
                "&ct=" +
                a +
                "&lastContactedId=" +
                y +
                "&loc=" +
                i +
                "&bgrMin=" +
                l +
                "&bgrMax=" +
                s +
                "&bedroomD=" +
                u +
                "&excludeProp=" +
                m
            )
            .then(function (e) {
              null !== e.data && "" != e.data
                ? p(e.data.hitList, e.data.adpLabel)
                : p(null, null);
            });
      };
    };
  },
  74: function (e, t, a) {
    "use strict";
    var r = a(14),
      n = a(6),
      o = a(7),
      c = a(41),
      i = a(3);
    function l() {
      l = function () {
        return e;
      };
      var e = {},
        t = Object.prototype,
        a = t.hasOwnProperty,
        r =
          Object.defineProperty ||
          function (e, t, a) {
            e[t] = a.value;
          },
        n =
          (v = "function" == typeof Symbol ? Symbol : {}).iterator ||
          "@@iterator",
        o = v.asyncIterator || "@@asyncIterator",
        c = v.toStringTag || "@@toStringTag";
      function i(e, t, a) {
        return (
          Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[t]
        );
      }
      try {
        i({}, "");
      } catch (t) {
        i = function (e, t, a) {
          return (e[t] = a);
        };
      }
      function s(e, t, a, n) {
        var o, c, i, l;
        (t = t && t.prototype instanceof d ? t : d),
          (t = Object.create(t.prototype)),
          (n = new j(n || []));
        return (
          r(t, "_invoke", {
            value:
              ((o = e),
              (c = a),
              (i = n),
              (l = "suspendedStart"),
              function (e, t) {
                if ("executing" === l)
                  throw new Error("Generator is already running");
                if ("completed" === l) {
                  if ("throw" === e) throw t;
                  return { value: void 0, done: !0 };
                }
                for (i.method = e, i.arg = t; ; ) {
                  var a = i.delegate;
                  if (
                    a &&
                    ((a = (function e(t, a) {
                      var r = a.method,
                        n = t.iterator[r];
                      return void 0 === n
                        ? ((a.delegate = null),
                          ("throw" === r &&
                            t.iterator.return &&
                            ((a.method = "return"),
                            (a.arg = void 0),
                            e(t, a),
                            "throw" === a.method)) ||
                            ("return" !== r &&
                              ((a.method = "throw"),
                              (a.arg = new TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method"
                              )))),
                          p)
                        : "throw" === (r = u(n, t.iterator, a.arg)).type
                        ? ((a.method = "throw"),
                          (a.arg = r.arg),
                          (a.delegate = null),
                          p)
                        : (n = r.arg)
                        ? n.done
                          ? ((a[t.resultName] = n.value),
                            (a.next = t.nextLoc),
                            "return" !== a.method &&
                              ((a.method = "next"), (a.arg = void 0)),
                            (a.delegate = null),
                            p)
                          : n
                        : ((a.method = "throw"),
                          (a.arg = new TypeError(
                            "iterator result is not an object"
                          )),
                          (a.delegate = null),
                          p);
                    })(a, i)),
                    a)
                  ) {
                    if (a === p) continue;
                    return a;
                  }
                  if ("next" === i.method) i.sent = i._sent = i.arg;
                  else if ("throw" === i.method) {
                    if ("suspendedStart" === l)
                      throw ((l = "completed"), i.arg);
                    i.dispatchException(i.arg);
                  } else "return" === i.method && i.abrupt("return", i.arg);
                  if (((l = "executing"), "normal" === (a = u(o, c, i)).type)) {
                    if (
                      ((l = i.done ? "completed" : "suspendedYield"),
                      a.arg === p)
                    )
                      continue;
                    return { value: a.arg, done: i.done };
                  }
                  "throw" === a.type &&
                    ((l = "completed"), (i.method = "throw"), (i.arg = a.arg));
                }
              }),
          }),
          t
        );
      }
      function u(e, t, a) {
        try {
          return { type: "normal", arg: e.call(t, a) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      e.wrap = s;
      var p = {};
      function d() {}
      function y() {}
      function b() {}
      var v,
        f,
        g =
          ((f =
            (f =
              (i((v = {}), n, function () {
                return this;
              }),
              Object.getPrototypeOf)) && f(f(S([])))) &&
            f !== t &&
            a.call(f, n) &&
            (v = f),
          (b.prototype = d.prototype = Object.create(v)));
      function h(e) {
        ["next", "throw", "return"].forEach(function (t) {
          i(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function _(e, t) {
        var n;
        r(this, "_invoke", {
          value: function (r, o) {
            function c() {
              return new t(function (n, c) {
                !(function r(n, o, c, i) {
                  var l;
                  if ("throw" !== (n = u(e[n], e, o)).type)
                    return (o = (l = n.arg).value) &&
                      "object" == m(o) &&
                      a.call(o, "__await")
                      ? t.resolve(o.__await).then(
                          function (e) {
                            r("next", e, c, i);
                          },
                          function (e) {
                            r("throw", e, c, i);
                          }
                        )
                      : t.resolve(o).then(
                          function (e) {
                            (l.value = e), c(l);
                          },
                          function (e) {
                            return r("throw", e, c, i);
                          }
                        );
                  i(n.arg);
                })(r, o, n, c);
              });
            }
            return (n = n ? n.then(c, c) : c());
          },
        });
      }
      function O(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function D(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function j(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(O, this),
          this.reset(!0);
      }
      function S(e) {
        if (e) {
          var t,
            r = e[n];
          if (r) return r.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length))
            return (
              (t = -1),
              ((r = function r() {
                for (; ++t < e.length; )
                  if (a.call(e, t)) return (r.value = e[t]), (r.done = !1), r;
                return (r.value = void 0), (r.done = !0), r;
              }).next = r)
            );
        }
        return { next: P };
      }
      function P() {
        return { value: void 0, done: !0 };
      }
      return (
        r(g, "constructor", { value: (y.prototype = b), configurable: !0 }),
        r(b, "constructor", { value: y, configurable: !0 }),
        (y.displayName = i(b, c, "GeneratorFunction")),
        (e.isGeneratorFunction = function (e) {
          return (
            !!(e = "function" == typeof e && e.constructor) &&
            (e === y || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, b)
              : ((e.__proto__ = b), i(e, c, "GeneratorFunction")),
            (e.prototype = Object.create(g)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        h(_.prototype),
        i(_.prototype, o, function () {
          return this;
        }),
        (e.AsyncIterator = _),
        (e.async = function (t, a, r, n, o) {
          void 0 === o && (o = Promise);
          var c = new _(s(t, a, r, n), o);
          return e.isGeneratorFunction(a)
            ? c
            : c.next().then(function (e) {
                return e.done ? e.value : c.next();
              });
        }),
        h(g),
        i(g, c, "Generator"),
        i(g, n, function () {
          return this;
        }),
        i(g, "toString", function () {
          return "[object Generator]";
        }),
        (e.keys = function (e) {
          var t,
            a = Object(e),
            r = [];
          for (t in a) r.push(t);
          return (
            r.reverse(),
            function e() {
              for (; r.length; ) {
                var t = r.pop();
                if (t in a) return (e.value = t), (e.done = !1), e;
              }
              return (e.done = !0), e;
            }
          );
        }),
        (e.values = S),
        (j.prototype = {
          constructor: j,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(D),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  a.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function r(a, r) {
              return (
                (c.type = "throw"),
                (c.arg = e),
                (t.next = a),
                r && ((t.method = "next"), (t.arg = void 0)),
                !!r
              );
            }
            for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
              var o = this.tryEntries[n],
                c = o.completion;
              if ("root" === o.tryLoc) return r("end");
              if (o.tryLoc <= this.prev) {
                var i = a.call(o, "catchLoc"),
                  l = a.call(o, "finallyLoc");
                if (i && l) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                } else if (i) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                } else {
                  if (!l)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
              var n = this.tryEntries[r];
              if (
                n.tryLoc <= this.prev &&
                a.call(n, "finallyLoc") &&
                this.prev < n.finallyLoc
              ) {
                var o = n;
                break;
              }
            }
            var c = (o =
              o &&
              ("break" === e || "continue" === e) &&
              o.tryLoc <= t &&
              t <= o.finallyLoc
                ? null
                : o)
              ? o.completion
              : {};
            return (
              (c.type = e),
              (c.arg = t),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), p)
                : this.complete(c)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              p
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var a = this.tryEntries[t];
              if (a.finallyLoc === e)
                return this.complete(a.completion, a.afterLoc), D(a), p;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var a,
                r,
                n = this.tryEntries[t];
              if (n.tryLoc === e)
                return (
                  "throw" === (a = n.completion).type && ((r = a.arg), D(n)), r
                );
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, a) {
            return (
              (this.delegate = { iterator: S(e), resultName: t, nextLoc: a }),
              "next" === this.method && (this.arg = void 0),
              p
            );
          },
        }),
        e
      );
    }
    function s(e, t, a, r, n, o, c) {
      try {
        var i = e[o](c),
          l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(r, n);
    }
    function u(e) {
      return function () {
        var t = this,
          a = arguments;
        return new Promise(function (r, n) {
          var o = e.apply(t, a);
          function c(e) {
            s(o, r, n, c, i, "next", e);
          }
          function i(e) {
            s(o, r, n, c, i, "throw", e);
          }
          c(void 0);
        });
      };
    }
    function p(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function d(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? p(Object(a), !0).forEach(function (t) {
              b(e, t, a[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : p(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    function m(e) {
      return (m =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function y(e, t) {
      for (var a = 0; a < t.length; a++) {
        var r = t[a];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, v(r.key), r);
      }
    }
    function b(e, t, a) {
      (t = v(t)) in e
        ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = a);
    }
    function v(e) {
      return (
        (e = (function (e, t) {
          if ("object" !== m(e) || null === e) return e;
          var a = e[Symbol.toPrimitive];
          if (void 0 === a) return String(e);
          if ("object" !== m((a = a.call(e, "string")))) return a;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        })(e)),
        "symbol" === m(e) ? e : String(e)
      );
    }
    a(1);
    var f = (function (e, t, a) {
      return (
        t && y(e.prototype, t),
        a && y(e, a),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    })(function e() {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function");
    });
    b(f, "showVirtualNumberFlow", function (e, t, a, r) {
      return function (e) {
        var o = !0;
        (t.vnEnableOnStartup &&
          "Y" != (null == a ? void 0 : a.isUserLoggedIn) &&
          null == (null == a ? void 0 : a.userUniqToken) &&
          !r &&
          "Y" != t.nriUser &&
          !t.isContactedPage) ||
          ((o = !1), n.a.createCookieForVn("virtualNumberData", "", 0)),
          e({ type: "showVirtualNumberFlow", payload: o });
      };
    }),
      b(f, "addConversionCheckEventListnerForVN", function (e, t, a) {
        return function (r) {
          window.addEventListener("visibilitychange", function n() {
            r(f.checkConvertedUser("", r, e, t, a, null, n));
          });
        };
      }),
      b(f, "getVirtualNumber", function (e, t, a, c, s, p, m, y, b) {
        var v, g, h, _, O, D, j, S;
        y.vnEnableOnStartup &&
        "N" == a.isUserLoggedIn &&
        null == (null == a ? void 0 : a.userUniqToken)
          ? ((g =
              null != a.userName
                ? a.userName
                : null !=
                  (null == c || null == (v = c.values) ? void 0 : v.userName)
                ? null == c || null == (v = c.values)
                  ? void 0
                  : v.userName
                : n.a.readCookie("userName")),
            null != a.userEmail
              ? a.userEmail
              : null !=
                (null == c || null == (v = c.values) ? void 0 : v.userEmail)
              ? null != c && null != (v = c.values) && v.userEmail
              : n.a.readCookie("userEmail"),
            (h =
              null != a.userMobile
                ? a.userMobile
                : null !=
                  (null == c || null == (v = c.values) ? void 0 : v.userMobile)
                ? null == c || null == (v = c.values)
                  ? void 0
                  : v.userMobile
                : n.a.readCookie("userMobile")),
            (_ = null != a.userRefNo ? a.userRefNo : ""),
            null == g && (g = ""),
            null == h && (h = ""),
            (O = function (a, r, n, c) {
              p({
                type: o.B,
                payload: {
                  virtualContactData: d(
                    d({}, e.virtualContactData),
                    {},
                    { pid: t, id: a, virtualNo: r, extension: n, btnAction: c }
                  ),
                },
              });
            }),
            (D = function () {
              var t,
                a =
                  (null == e ||
                  null == (a = e.virtualContactData) ||
                  null == (a = a.ga)
                    ? void 0
                    : a.eventLabel) + " - virtual number",
                r =
                  "Contact Drop" != (null == e ? void 0 : e.buttonType)
                    ? null == e
                      ? void 0
                      : e.buttonType
                    : null == e ||
                      null == (r = e.virtualContactData) ||
                      null == (r = r.ga)
                    ? void 0
                    : r.cd96,
                n =
                  (null == e ||
                  null == (n = e.virtualContactData) ||
                  null == (n = n.ga)
                    ? void 0
                    : n.eventAction) +
                  " - " +
                  r;
              r =
                (null == e ||
                null == (r = e.virtualContactData) ||
                null == (r = r.ga)
                  ? void 0
                  : r.cd96) + "_vn";
              p(
                Object(i.e)(
                  d(
                    d(
                      {},
                      null == e || null == (t = e.virtualContactData)
                        ? void 0
                        : t.ga
                    ),
                    {},
                    {
                      event: "event_tracking",
                      nonInteraction: !1,
                      eventCategory: "virtualnumber-softcontactsuccess",
                      eventLabel: a,
                      eventAction: n,
                      cd182:
                        null == e || null == (t = e.requestBody)
                          ? void 0
                          : t.oid,
                      cd96: r,
                    }
                  )
                )
              ),
                p(
                  Object(i.e)(
                    d(
                      d(
                        {},
                        null == e || null == (t = e.virtualContactData)
                          ? void 0
                          : t.ga
                      ),
                      {},
                      {
                        event: "event_tracking",
                        nonInteraction: !1,
                        eventCategory: "virtualnumber_dialer_open",
                        eventLabel: a,
                        eventAction: n,
                        cd182:
                          null == e || null == (t = e.requestBody)
                            ? void 0
                            : t.oid,
                        cd96: r,
                      }
                    )
                  )
                );
            }),
            (j = n.a.readCookie("virtualNumberData")),
            (S = f.getVnId()),
            (function () {
              var e = u(
                l().mark(function e() {
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            r.a.get("/vn/checkForUserConversion?id=".concat(S))
                          );
                        case 2:
                          return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()().then(function (o) {
              var c, m, v, S, P, N;
              "success" ==
              (null == o || null == (c = o.data) ? void 0 : c.status)
                ? f.userConversionResponse(o, a, y, e, p)
                : null != j && j.includes(t)
                ? ((c = j.split(t)[1].split(",")[0].split("|")),
                  O(c[1], c[2], c[3], s),
                  "WEB" === (null == y ? void 0 : y.platform) ||
                  "Get Phone No." == s ||
                  "Contact Drop" == s ||
                  "Request Photo" == s ||
                  "Send Enquiry" == s ||
                  "Enquire Now" == s ||
                  "Request Callback" == s
                    ? (p({ type: "isVirtualNumber", payload: !0 }),
                      p({ type: "virtualNumberDataAvailable", payload: !0 }),
                      (S =
                        (null == e ||
                        null == (S = e.virtualContactData) ||
                        null == (S = S.ga)
                          ? void 0
                          : S.eventLabel) + " - virtual number"),
                      (P =
                        "Contact Drop" != (null == e ? void 0 : e.buttonType)
                          ? null == e
                            ? void 0
                            : e.buttonType
                          : null == e ||
                            null == (P = e.virtualContactData) ||
                            null == (P = P.ga)
                          ? void 0
                          : P.cd96),
                      (N =
                        (null == e ||
                        null == (N = e.virtualContactData) ||
                        null == (N = N.ga)
                          ? void 0
                          : N.eventAction) +
                        " - " +
                        P),
                      (P =
                        (null == e ||
                        null == (P = e.virtualContactData) ||
                        null == (P = P.ga)
                          ? void 0
                          : P.cd96) + "_vn"),
                      p(
                        Object(i.e)(
                          d(
                            d(
                              {},
                              null == e || null == (v = e.virtualContactData)
                                ? void 0
                                : v.ga
                            ),
                            {},
                            {
                              event: "event_tracking",
                              nonInteraction: !1,
                              eventCategory: "contactinfoformopen",
                              eventLabel: S,
                              eventAction: N,
                              cd182:
                                null == e || null == (v = e.requestBody)
                                  ? void 0
                                  : v.oid,
                              cd96: P,
                            }
                          )
                        )
                      ))
                    : (D(),
                      p(f.checkLimitExhaust(y)),
                      (document.location.href = "tel:+91 " + c[2])))
                : ((m = n.a.getSemCookie()),
                  (void 0 !== t && null != t) || (t = n.a.readCookie("propId")),
                  (function () {
                    var e = u(
                      l().mark(function e() {
                        return l().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  r.a.get(
                                    "/vn/getOwner?pId=" +
                                      t +
                                      "&name=" +
                                      g +
                                      "&contactInterface=property_srp_vn_login&mobile=" +
                                      h +
                                      "&contactId=" +
                                      _ +
                                      "&platform=" +
                                      y.platform +
                                      "&semSource=" +
                                      m
                                  )
                                );
                              case 2:
                                return e.abrupt("return", e.sent);
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()().then(function (r) {
                    var o, c;
                    1 == (null == r || null == (o = r.data) ? void 0 : o.status)
                      ? (O(
                          r.data.connectionId,
                          r.data.virtualNumber,
                          r.data.extension,
                          s
                        ),
                        (o = d(
                          d({}, e),
                          {},
                          {
                            virtualContactData: d(
                              d({}, e.virtualContactData),
                              {},
                              {
                                pid: t,
                                id: r.data.connectionId,
                                virtualNo: r.data.virtualNumber,
                                btnAction: s,
                              }
                            ),
                          }
                        )),
                        (c =
                          null != (c = n.a.readCookie("virtualNumberData"))
                            ? c +
                              "," +
                              t +
                              "|" +
                              r.data.connectionId +
                              "|" +
                              r.data.virtualNumber
                            : t +
                              "|" +
                              r.data.connectionId +
                              "|" +
                              r.data.virtualNumber),
                        n.a.createCookieForVn("virtualNumberData", c, 2),
                        "WEB" === (null == y ? void 0 : y.platform) ||
                        "Get Phone No." == s ||
                        "Contact Drop" == s ||
                        "Request Photo" == s ||
                        "Send Enquiry" == s ||
                        "Enquire Now" == s ||
                        "Request Callback" == s
                          ? (p({ type: "isVirtualNumber", payload: !0 }),
                            p({
                              type: "virtualNumberDataAvailable",
                              payload: !0,
                            }))
                          : (D(),
                            "search_wap" === e.requestInterface &&
                              p(f.addConversionCheckEventListnerForVN(y, a, o)),
                            p(f.checkLimitExhaust(y)),
                            (document.location.href =
                              "tel:+91 " +
                              (null == r || null == (c = r.data)
                                ? void 0
                                : c.virtualNumber))))
                      : ("WEB" !== (null == y ? void 0 : y.platform) &&
                          p({ type: "askWhatsApp2", payload: !0 }),
                        b());
                  }));
            }))
          : (n.a.createCookieForVn("virtualNumberData", "", 0),
            p({ type: "virtualNumberDataAvailable", payload: !1 }));
      }),
      b(f, "getVnId", function () {
        var e = n.a.readCookie("virtualNumberData"),
          t = "";
        if (null != e)
          for (var a = e.split(/[|,]/), r = 1; r < a.length; r += 3)
            t = t + a[r] + ",";
        return encodeURIComponent(t);
      }),
      b(f, "checkLimitExhaust", function (e) {
        return function (t) {
          var a = null == e ? void 0 : e.virtualNumberScreenStart,
            r = null == e ? void 0 : e.virtualNumberScreenEnd,
            o = n.a.readCookie("userDropCount");
          null != o &&
            o >= parseInt(r) + parseInt(a) &&
            (n.a.createCookieForVn("virtualNumberData", "", 0),
            t({ type: "virtualNumberDataAvailable", payload: !1 }),
            t({ type: "buyerNumberAvailable", payload: !1 }),
            t({ type: "isVirtualNumber", payload: !1 }),
            t({ type: "virtualNumberLimitExhaust", payload: !0 }));
        };
      }),
      b(f, "checkConvertedUser", function (e, t, a, n, o, c, i) {
        var s = f.getVnId();
        console.log("## check for conversion vn"),
          (function () {
            var t = u(
              l().mark(function t() {
                return l().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          r.a.get(
                            "/vn/checkForUserConversion?id=".concat(
                              "" != s ? s : e
                            )
                          )
                        );
                      case 2:
                        return t.abrupt("return", t.sent);
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })()().then(function (e) {
            var r;
            "success" == (null == e || null == (r = e.data) ? void 0 : r.status)
              ? (null !== i &&
                  window.removeEventListener("visibilitychange", i),
                f.userConversionResponse(e, n, a, o, t))
              : (t({ type: "virtualNumberDataAvailable", payload: !0 }),
                t({ type: "buyerNumberAvailable", payload: !1 }),
                t(f.checkLimitExhaust(a))),
              t({ type: "isVirtualNumber", payload: !1 });
          });
      }),
      b(f, "convertedResponse", function (e) {
        for (var t = 0; t < e.length; t++)
          if ("success" == e[t].status) return e[t];
        if (0 < e.length) return e[0];
      }),
      b(f, "userConversionResponse", function (e, t, a, r, l) {
        var s, u, p, m;
        null !=
          (null ==
          (e = f.convertedResponse(null == (e = e.data) ? void 0 : e.data))
            ? void 0
            : e.status) && "success" == (null == e ? void 0 : e.status)
          ? (l({
              type: o.b,
              payload: d(
                d({}, t),
                {},
                {
                  userMobile: e.mobile,
                  userIsdCode: "50",
                  userMobileIsd: 50,
                  selectIsd: "50",
                  userUniqToken: e.userUniqToken,
                  hmacCode: e.hmacCode,
                  userEmail: e.email,
                  userName: e.name,
                  topMatchFromVn: !0,
                }
              ),
            }),
            f.generateUserInfoCookies(e, a),
            f.generateContactCookies(a),
            n.a.createCookieForVn("virtualNumberData", "", 0),
            n.a.createCookieForVn("virtualContactId", e.id, 2),
            l({ type: "virtualNumberDataAvailable", payload: !1 }),
            null == e.name ||
            "MbUser" == e.name ||
            null == e.email ||
            e.email.includes("timesgroup.com")
              ? l({ type: "buyerNumberAvailable", payload: !0 })
              : l({ type: "buyerNumberAvailable", payload: !1 }),
            (u =
              (null == r ||
              null == (u = r.virtualContactData) ||
              null == (u = u.ga)
                ? void 0
                : u.eventLabel) + " - virtual number"),
            (m =
              "Contact drop" !=
              (null == r || null == (m = r.virtualContactData)
                ? void 0
                : m.btnAction)
                ? null == r || null == (m = r.virtualContactData)
                  ? void 0
                  : m.btnAction
                : null == r ||
                  null == (m = r.virtualContactData) ||
                  null == (m = m.ga)
                ? void 0
                : m.cd96),
            (p =
              (null == r ||
              null == (p = r.virtualContactData) ||
              null == (p = p.ga)
                ? void 0
                : p.eventAction) +
              " - " +
              m),
            (m =
              (null == r ||
              null == (m = r.virtualContactData) ||
              null == (m = m.ga)
                ? void 0
                : m.cd96) + "_vn"),
            l(
              Object(i.e)(
                d(
                  d({}, null == (s = r.virtualContactData) ? void 0 : s.ga),
                  {},
                  {
                    event: "event_tracking",
                    nonInteraction: !1,
                    eventCategory: "contactsuccess",
                    eventLabel: u,
                    eventAction: p,
                    cd182:
                      null == r || null == (s = r.requestBody) ? void 0 : s.oid,
                    cd96: m,
                  }
                )
              )
            ),
            l({ type: o.d, payload: d(d({}, r), {}, { isAutoContact: !0 }) }),
            l(
              Object(c.o)(
                null == r || null == (u = r.virtualContactData) ? void 0 : u.pid
              )
            ))
          : null != (null == e ? void 0 : e.mobile)
          ? (l({
              type: o.b,
              payload: d(
                d({}, t),
                {},
                {
                  userMobile: e.mobile,
                  userIsdCode: "50",
                  userMobileIsd: 50,
                  selectIsd: "50",
                  userUniqToken: e.userUniqToken,
                  hmacCode: e.hmac,
                  userEmail: e.email,
                  userName: e.name,
                }
              ),
            }),
            f.generateUserInfoCookies(e, a),
            null == e.name ||
            "MbUser" == e.name ||
            null == e.email ||
            e.email.includes("timesgroup.com")
              ? l({ type: "buyerNumberAvailable", payload: !0 })
              : l({ type: "buyerNumberAvailable", payload: !1 }))
          : (l({ type: "virtualNumberDataAvailable", payload: !0 }),
            l({ type: "buyerNumberAvailable", payload: !1 }),
            l(f.checkLimitExhaust(a)));
      }),
      b(f, "freezVirtualNumber", function (e, t) {
        (function () {
          var t = u(
            l().mark(function t() {
              return l().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        r.a.get("/vn/freezVn?id=" + e + "&ext=001")
                      );
                    case 2:
                      return t.abrupt("return", t.sent);
                    case 3:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })()().then(function (e) {
          "SUCCESS" ==
            (null == e || null == (e = e.data) ? void 0 : e.status) &&
            console.log("contact freez success");
        });
      }),
      b(f, "openDialer", function (e, t) {
        document.location.href = "tel:+91 " + e;
      }),
      b(f, "increaseContactDrop", function (e, t) {
        var a =
          null != (a = n.a.readCookie("userDropCount")) ? parseInt(a) + 1 : 1;
        return (
          ((e && a < t) || !e) && n.a.createCookie("userDropCount", a, 2), a
        );
      }),
      b(f, "validateVirtualNumberFeature", function (e, t) {
        ("2624" == e.city &&
          "S" == e.category &&
          "residential" == e.search &&
          "N" == t.isUserLoggedIn &&
          null == (null == t ? void 0 : t.userUniqToken)) ||
          dispatch({ type: "virtualNumberDataAvailable", payload: !1 });
      }),
      b(f, "generateUserInfoCookies", function (e, t) {
        null != e.name &&
          n.a.createCookieForVn(
            "userName",
            e.name,
            t.contactCookiesExpiryLimit
          ),
          null != e.mobile &&
            n.a.createCookieForVn(
              "userMobile",
              e.mobile,
              t.contactCookiesExpiryLimit
            ),
          null != e.email &&
            n.a.createCookieForVn(
              "userEmail",
              e.email,
              t.contactCookiesExpiryLimit
            ),
          null != e.hmac &&
            n.a.createCookieForVn(
              "hmacCode",
              e.hmac,
              t.contactCookiesExpiryLimit
            ),
          null != e.userUniqToken &&
            n.a.createCookieForVn(
              "userUniqToken",
              e.userUniqToken,
              t.contactCookiesExpiryLimit
            ),
          n.a.createCookieForVn(
            "userMobileCountry",
            "50",
            t.contactCookiesExpiryLimit
          );
      }),
      b(f, "generateContactCookies", function (e) {
        n.a.createCookieForVn("otpFlage", "Y", e.contactCookiesExpiryLimit),
          n.a.createCookieForVn(
            "contactCookie",
            "Y",
            e.contactCookiesExpiryLimit
          ),
          n.a.createCookieForVn(
            "verificationFlag",
            "Y",
            e.contactCookiesExpiryLimit
          ),
          n.a.createCookieForVn(
            "sessionCookieForContact",
            "Y",
            e.contactCookiesExpiryLimit
          );
      }),
      (t.a = f);
  },
  805: function (e, t, a) {
    "use strict";
    a.d(t, "a", function () {
      return n;
    });
    var r = a(7),
      n = function (e) {
        return function (t, a) {
          t({ type: r.b, payload: e });
        };
      };
  },
  830: function (e, t, a) {
    "use strict";
    var r = a(0),
      n = a.n(r),
      o = a(162),
      c = a(137),
      i = a(344),
      l = a(175),
      s = a(831),
      u = a(832),
      p = a(833),
      d = a(834),
      m = a(9),
      y = a(2),
      b = a(53),
      v = a(429),
      f = a(835),
      g = a(52),
      h = a(3),
      _ = a(28),
      O = (a(13), a(103)),
      D = a(67);
    function j(e) {
      return (j =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function S(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function P(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? S(Object(a), !0).forEach(function (t) {
              var r, n;
              (r = e),
                (n = a[t]),
                (t = (function (e) {
                  return (
                    (e = (function (e, t) {
                      if ("object" !== j(e) || null === e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 === a) return String(e);
                      if ("object" !== j((a = a.call(e, "string")))) return a;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    })(e)),
                    "symbol" === j(e) ? e : String(e)
                  );
                })(t)) in r
                  ? Object.defineProperty(r, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[t] = n);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : S(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    function N(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var a =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != a) {
            var r,
              n,
              o,
              c,
              i = [],
              l = !0,
              s = !1;
            try {
              if (((o = (a = a.call(e)).next), 0 === t)) {
                if (Object(a) !== a) return;
                l = !1;
              } else
                for (
                  ;
                  !(l = (r = o.call(a)).done) &&
                  (i.push(r.value), i.length !== t);
                  l = !0
                );
            } catch (e) {
              (s = !0), (n = e);
            } finally {
              try {
                if (
                  !l &&
                  null != a.return &&
                  ((c = a.return()), Object(c) !== c)
                )
                  return;
              } finally {
                if (s) throw n;
              }
            }
            return i;
          }
        })(e, t) ||
        (function (e, t) {
          var a;
          if (e)
            return "string" == typeof e
              ? w(e, t)
              : "Map" ===
                  (a =
                    "Object" ===
                      (a = Object.prototype.toString.call(e).slice(8, -1)) &&
                    e.constructor
                      ? e.constructor.name
                      : a) || "Set" === a
              ? Array.from(e)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? w(e, t)
              : void 0;
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function w(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    t.a = function (e) {
      var t = (A = N(Object(r.useState)(null), 2))[0],
        a = A[1],
        j = (A = N(Object(r.useState)([]), 2))[0],
        S = A[1],
        w =
          (Object(y.d)(function (e) {
            return e.contactData;
          }),
          Object(y.d)(function (e) {
            return e.userInfoData;
          })),
        E = (A = N(Object(r.useState)([]), 2))[0],
        T = A[1],
        k = Object(y.c)(),
        C =
          (Object(r.useEffect)(function () {
            var t = {
              propertyId: e.id,
              propertyToShow: "A",
              cplAchievement: "110",
              noOfProperties: "5",
              removeProps: "",
            };
            Object(f.a)(t, C);
          }, []),
          function (t) {
            var r, n;
            void 0 !== t &&
              null != t &&
              void 0 !== t.similarProperties &&
              null != t.similarProperties &&
              (a(t.similarProperties),
              (r = []),
              (n = []),
              0 < t.similarProperties.length) &&
              (t.similarProperties.map(function (t) {
                r.push(Object(b.c)(t, null, null)),
                  n.push(Object(g.b)(t, e.additionalBeanData));
              }),
              S(r),
              T(n));
          }),
        A = Array.isArray(t) && 0 < t.length,
        I = Object(b.c)(e.cardData, null, null),
        L = Object(g.b)(e.cardData, e.additionalBeanData);
      function x(e) {
        return void 0 === e || null == e || "" === e.trim();
      }
      return (
        Object(_.d)(
          e.cardData,
          L,
          e.index,
          I.imgCount,
          e.additionalBeanData,
          "Similar",
          null,
          null,
          w
        ),
        n.a.createElement(
          n.a.Fragment,
          null,
          A &&
            n.a.createElement(
              "div",
              {
                className:
                  "mb-srp-m__card mb-srp-m__pinkCard mb-srp-m__similar-prop",
              },
              n.a.createElement(d.a, {
                mainHeading: "",
                heading: "Similar Properties",
                subHeading: "",
                actionText: "",
                imagePath: "",
              }),
              n.a.createElement(
                "div",
                { className: "mb-srp-m__card__mbcontainer" },
                t.map(function (a, r) {
                  return n.a.createElement(
                    "div",
                    {
                      className: "mb-srp-m__card__mbinfotr",
                      key: r,
                      onClick: function () {
                        var n, o, c;
                        (n = a),
                          (o = r),
                          (c =
                            -1 !=
                            (c = Object(O.a)(
                              n,
                              e.additionalBeanData,
                              o,
                              "https://www.magicbricks.com/propertyDetails/",
                              "https://stgauction.magicbricks.com/"
                            )).indexOf("?")
                              ? c + "&srcrvmp=Y"
                              : c + "?&srcrvmp=Y"),
                          k({ type: "pdppageurl", payload: c }),
                          (c = Object(_.d)(
                            n,
                            E[o],
                            o,
                            j[o].imgCount,
                            e.additionalBeanData,
                            "Similar",
                            null,
                            null,
                            w
                          )),
                          (n = o + 1 + " / " + t.length),
                          k(
                            Object(h.e)(
                              P(
                                {
                                  event: "event_tracking",
                                  eventName: "revamp_srp_dynamic_listing",
                                  nonInteraction: !1,
                                  eventCategory:
                                    "revamp srp - dynamic listings",
                                  eventAction: "Similar Properties",
                                  eventLabel: "card click - " + n,
                                  eventValue: "",
                                },
                                c
                              )
                            )
                          );
                      },
                    },
                    null != j &&
                      0 < j.length &&
                      null != j[r] &&
                      n.a.createElement(
                        "div",
                        { className: "mb-srp-m__card__mbphoto" },
                        n.a.createElement(o.a, {
                          imagePath: j[r].imgPath,
                          imageNotUploaded:
                            null != j[r].imageNotUploaded &&
                            "Y" == j[r].imageNotUploaded
                              ? j[r].imageNotUploaded
                              : j[r].requestPhoto,
                          imageCount: j[r].imgCount,
                          imagePostedDate: j[r].dateCreated,
                          postLabel: a.postedEditedLabel,
                        })
                      ),
                    n.a.createElement(
                      "div",
                      { className: "mb-srp-m__card__mbinfo" },
                      n.a.createElement(
                        "div",
                        { className: "mb-srp-m__card__head" },
                        null != E &&
                          0 < E.length &&
                          null != E[r] &&
                          n.a.createElement(
                            "div",
                            {
                              className:
                                "mb-srp-m__card__head--item mb-srp-m__card__price",
                            },
                            n.a.createElement(c.a, { priceMap: E[r] })
                          ),
                        n.a.createElement(
                          "div",
                          {
                            className:
                              "mb-srp-m__card__head--item mb-srp-m__card__pType",
                          },
                          n.a.createElement(i.a, {
                            PtypeVal:
                              a.bedroomD && "" != a.bedroomD
                                ? a.bedroomD + " BHK"
                                : Object(m.j)(a),
                          })
                        )
                      ),
                      n.a.createElement(s.a, {
                        flatSize: Object(v.b)(a),
                        flatStatus: Object(v.a)(a),
                      }),
                      a.prjname &&
                        n.a.createElement(
                          "div",
                          { className: "mb-srp-m__card__society" },
                          n.a.createElement(l.a, { societyName: a.prjname })
                        ),
                      a.lmtDName &&
                        n.a.createElement(
                          "div",
                          { className: "mb-srp-m__card__summary" },
                          n.a.createElement(u.a, {
                            addressDetailsText: a.lmtDName,
                          })
                        ),
                      n.a.createElement(p.a, {
                        actionText: "Contact Now",
                        marginTop: "10",
                        onClickAction: function (n) {
                          !(function (a, r, n) {
                            a.stopPropagation();
                            var o,
                              c,
                              i,
                              l,
                              s,
                              u,
                              p = Object(_.d)(
                                r,
                                E[n],
                                n,
                                j[n].imgCount,
                                e.additionalBeanData,
                                "Similar",
                                null,
                                null,
                                w
                              ),
                              d = n + 1 + " / " + t.length,
                              m = "Contact ",
                              y =
                                (null != r.userType &&
                                  "" !== r.userType &&
                                  (m += r.userType),
                                (o = r),
                                (c = e.additionalBeanData),
                                (y = n),
                                (i = e.additionalBeanData.searchType),
                                (s = l = ""),
                                (l = (l = (l = (l = (l = o.propTypeD).includes(
                                  "Multistorey Apartment"
                                )
                                  ? l.replace(
                                      "Multistorey Apartment",
                                      "Apartment"
                                    )
                                  : l).includes("Builder Floor Apartment")
                                  ? l.replace(
                                      "Builder Floor Apartment",
                                      "Builder Floor"
                                    )
                                  : l).includes("Residential")
                                  ? l.replace("Residential", "")
                                  : l).includes("Commercial")
                                  ? l.replace("Commercial", "")
                                  : l).includes("Plot") &&
                                  (l = l.replace("Plot", "Plot/Land")),
                                x(o.shared) ||
                                  "Y" != o.shared ||
                                  (x(o.pgOcc) || "16011" != o.pgOcc
                                    ? (s += "Shared room in ")
                                    : (s += "Single room in ")),
                                y < 3 &&
                                void 0 !== c.cityList &&
                                null !== c.cityList &&
                                0 < c.cityList.trim().length
                                  ? ("Y" == u
                                      ? (s += "Shared " + l)
                                      : "Y" !== u &&
                                        "10026" == o.ty &&
                                        "Y" == c.dynamicListing
                                      ? (s += "Seats at " + l)
                                      : x(o.isCardDesc) || x(o.scdpropdesc)
                                      ? (x(o.bedroomD) ||
                                          (s += o.bedroomD + " BHK"),
                                        (s += " " + l))
                                      : (s += o.scdpropdesc),
                                    o.isCardDesc && !x(o.scdcattype)
                                      ? (s = s + " " + o.scdcattype)
                                      : !x(o.transType) &&
                                        0 < o.transType.trim().length
                                      ? (s += " for " + o.transType + " in")
                                      : "commercial" == i &&
                                        (s += " for Sale in"),
                                    ("commercial" === i ||
                                      x(o.prjname) ||
                                      x(c.cityName.value) ||
                                      ("Bangalore" != c.cityName.value &&
                                        "Chennai" != c.cityName.value &&
                                        "Hyderabad" != c.cityName.value &&
                                        "Noida" != c.cityName.value)) &&
                                      "luxury" !== i &&
                                      !x(o.prjname) &&
                                      (s += " " + o.prjname + ","),
                                    o.isCardDesc &&
                                    !x(o.scdloc) &&
                                    0 < o.scdloc.trim().length
                                      ? (s += " " + o.scdloc)
                                      : x(o.lmtDName)
                                      ? x(o.ltOther)
                                        ? (s += " " + o.ctName)
                                        : (s += " " + o.ltOther)
                                      : (s += " " + o.lmtDName))
                                  : ("Y" == u
                                      ? (s += "Shared " + l)
                                      : "Y" !== u &&
                                        "10026" == o.ty &&
                                        "Y" == c.dynamicListing
                                      ? (s += "Seats at " + l)
                                      : x(o.isCardDesc) || x(o.scdpropdesc)
                                      ? (x(o.bedroomD) ||
                                          (s += o.bedroomD + " BHK"),
                                        x(c.intentSeoSlug) || c.intentSeoSlug,
                                        (s += " " + l))
                                      : (s += o.scdpropdesc),
                                    x(o.isCardDesc) || x(o.scdcattype)
                                      ? !x(o.transType) &&
                                        0 < o.transType.trim().length
                                        ? (s += " for " + o.transType + " in")
                                        : "commercial" == i &&
                                          (s += " for Sale in")
                                      : (s += " " + o.scdcattype),
                                    ("commercial" === i ||
                                      x(o.prjname) ||
                                      !c.cityName ||
                                      x(c.cityName.value) ||
                                      ("Bangalore" != c.cityName.value &&
                                        "Chennai" != c.cityName.value &&
                                        "Hyderabad" != c.cityName.value &&
                                        "Noida" != c.cityName.value)) &&
                                      "luxury" !== i &&
                                      !x(o.prjname) &&
                                      (s += " " + o.prjname + ","),
                                    o.isCardDesc &&
                                    !x(o.scdloc) &&
                                    1 < o.scdloc.trim().length
                                      ? (s += " " + o.scdloc)
                                      : x(o.lmtDName)
                                      ? x(o.ltOther)
                                        ? (s += " " + o.ctName)
                                        : (s += " " + o.ltOther)
                                      : (s += " " + o.lmtDName)),
                                x(o.distance) || (s += " " + o.distance),
                                s);
                            k(
                              Object(D.a)(
                                a,
                                {
                                  buttonType: m,
                                  contactType: "property",
                                  searchType: 1,
                                  propertyId: r.id,
                                  advertisers: r.id,
                                  requestInterface: "search_wap",
                                  contactTrackCookie: "FA-Contact",
                                  searchCityCode: e.searchBeanData.city,
                                  searchLocalityCodes:
                                    e.searchBeanData.locality,
                                  isLoginAndInfra: !1,
                                  formName: "SRP_TOP_CONTACT",
                                  contact_interface:
                                    "similar_props_card_contact",
                                  price: E[n].finalPrice,
                                  propertyType: y,
                                  pType: r.ty,
                                },
                                "DYNAMIC_LISTING_SIMILAR_PROPERTIES",
                                p,
                                m,
                                d,
                                r,
                                null,
                                !0
                              )
                            ),
                              "undefined" != typeof ntrack &&
                                null != ntrack &&
                                (((u = ntrack.getRawDataObject()).contactType =
                                  "Property"),
                                (u.actualOwnerId = r.id),
                                (u.trackingEvent =
                                  ntrack.trackingEvent.Contact),
                                (u.Source = "Web"),
                                ntrack.sendRamTrackEvent(u));
                          })(n, a, r);
                        },
                      })
                    )
                  );
                })
              )
            )
        )
      );
    };
  },
  866: function (e, t, a) {
    "use strict";
    (function (e) {
      a.d(t, "a", function () {
        return l;
      });
      var r = a(118),
        n = a(3);
      function o(e) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function c(e, t) {
        var a,
          r = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((a = Object.getOwnPropertySymbols(e)),
            t &&
              (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            r.push.apply(r, a)),
          r
        );
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(a), !0).forEach(function (t) {
                var r, n;
                (r = e),
                  (n = a[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== o(e) || null === e) return e;
                        var a = e[Symbol.toPrimitive];
                        if (void 0 === a) return String(e);
                        if ("object" !== o((a = a.call(e, "string")))) return a;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === o(e) ? e : String(e)
                    );
                  })(t)) in r
                    ? Object.defineProperty(r, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[t] = n);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : c(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      var l = function (t) {
        return function (a, o) {
          var c = (o = o()).searchAdditionalDataBean,
            l = ((o = o.searchBean), Object(r.c)()),
            s = Object(n.j)(c);
          o = i(
            i(
              {},
              {
                cd56: "SRP",
                cd39: o.category,
                cd21: Object(n.k)(c),
                cd17: Object(n.l)(c),
                cd171: l,
                cd7: s.localityId,
                cd14: s.localityName,
                cd65: null != c.cityName ? c.cityName.value : "",
                cd66: null != c.cityName ? c.cityName.key : "",
                cd172:
                  e.from(c.srbParam, "base64").toString("ascii") +
                  "&ramId=" +
                  l,
              }
            ),
            t
          );
          try {
            MB_GTM_dataLayer.push(o);
          } catch (a) {
            console.log(a);
          }
        };
      };
    }.call(this, a(163).Buffer));
  },
  882: function (e, t, a) {
    "use strict";
    var r = a(0),
      n = a.n(r),
      o = a(2),
      c = a(1),
      i = a(252),
      l = a(214),
      s = a(162),
      u = a(188),
      p = a(250),
      d = a(137),
      m = a(344),
      y = a(438),
      b = a(350),
      v = a(175),
      f = a(296),
      g = a(439),
      h = a(53),
      _ = a(300),
      O = a(139),
      D = a(309),
      j = a(89),
      S = a(136),
      P = a(61),
      N = a(102),
      w = a(13),
      E = a(52),
      T = a(44),
      k = a(215),
      C = a(103),
      A = a(161),
      I = a(216),
      L = a(116),
      x = a(47),
      B = a(430),
      F = a(28),
      R = a(3),
      U = a(115),
      M = a(135),
      V = a(91),
      q = a(45),
      Y = (a(383), a(6)),
      G = a(562),
      W = a(25),
      H = a(431),
      z = a(22),
      J = a.n(z),
      K = a(34),
      $ = (a(74), a(213)),
      Q = a(563),
      X = a(14),
      Z = a(7);
    function ee(e) {
      return (ee =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function te() {
      te = function () {
        return e;
      };
      var e = {},
        t = Object.prototype,
        a = t.hasOwnProperty,
        r =
          Object.defineProperty ||
          function (e, t, a) {
            e[t] = a.value;
          },
        n =
          (y = "function" == typeof Symbol ? Symbol : {}).iterator ||
          "@@iterator",
        o = y.asyncIterator || "@@asyncIterator",
        c = y.toStringTag || "@@toStringTag";
      function i(e, t, a) {
        return (
          Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[t]
        );
      }
      try {
        i({}, "");
      } catch (t) {
        i = function (e, t, a) {
          return (e[t] = a);
        };
      }
      function l(e, t, a, n) {
        var o, c, i, l;
        (t = t && t.prototype instanceof p ? t : p),
          (t = Object.create(t.prototype)),
          (n = new O(n || []));
        return (
          r(t, "_invoke", {
            value:
              ((o = e),
              (c = a),
              (i = n),
              (l = "suspendedStart"),
              function (e, t) {
                if ("executing" === l)
                  throw new Error("Generator is already running");
                if ("completed" === l) {
                  if ("throw" === e) throw t;
                  return { value: void 0, done: !0 };
                }
                for (i.method = e, i.arg = t; ; ) {
                  var a = i.delegate;
                  if (
                    a &&
                    ((a = (function e(t, a) {
                      var r = a.method,
                        n = t.iterator[r];
                      return void 0 === n
                        ? ((a.delegate = null),
                          ("throw" === r &&
                            t.iterator.return &&
                            ((a.method = "return"),
                            (a.arg = void 0),
                            e(t, a),
                            "throw" === a.method)) ||
                            ("return" !== r &&
                              ((a.method = "throw"),
                              (a.arg = new TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method"
                              )))),
                          u)
                        : "throw" === (r = s(n, t.iterator, a.arg)).type
                        ? ((a.method = "throw"),
                          (a.arg = r.arg),
                          (a.delegate = null),
                          u)
                        : (n = r.arg)
                        ? n.done
                          ? ((a[t.resultName] = n.value),
                            (a.next = t.nextLoc),
                            "return" !== a.method &&
                              ((a.method = "next"), (a.arg = void 0)),
                            (a.delegate = null),
                            u)
                          : n
                        : ((a.method = "throw"),
                          (a.arg = new TypeError(
                            "iterator result is not an object"
                          )),
                          (a.delegate = null),
                          u);
                    })(a, i)),
                    a)
                  ) {
                    if (a === u) continue;
                    return a;
                  }
                  if ("next" === i.method) i.sent = i._sent = i.arg;
                  else if ("throw" === i.method) {
                    if ("suspendedStart" === l)
                      throw ((l = "completed"), i.arg);
                    i.dispatchException(i.arg);
                  } else "return" === i.method && i.abrupt("return", i.arg);
                  if (((l = "executing"), "normal" === (a = s(o, c, i)).type)) {
                    if (
                      ((l = i.done ? "completed" : "suspendedYield"),
                      a.arg === u)
                    )
                      continue;
                    return { value: a.arg, done: i.done };
                  }
                  "throw" === a.type &&
                    ((l = "completed"), (i.method = "throw"), (i.arg = a.arg));
                }
              }),
          }),
          t
        );
      }
      function s(e, t, a) {
        try {
          return { type: "normal", arg: e.call(t, a) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      e.wrap = l;
      var u = {};
      function p() {}
      function d() {}
      function m() {}
      var y,
        b,
        v =
          ((b =
            (b =
              (i((y = {}), n, function () {
                return this;
              }),
              Object.getPrototypeOf)) && b(b(D([])))) &&
            b !== t &&
            a.call(b, n) &&
            (y = b),
          (m.prototype = p.prototype = Object.create(y)));
      function f(e) {
        ["next", "throw", "return"].forEach(function (t) {
          i(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function g(e, t) {
        var n;
        r(this, "_invoke", {
          value: function (r, o) {
            function c() {
              return new t(function (n, c) {
                !(function r(n, o, c, i) {
                  var l;
                  if ("throw" !== (n = s(e[n], e, o)).type)
                    return (o = (l = n.arg).value) &&
                      "object" == ee(o) &&
                      a.call(o, "__await")
                      ? t.resolve(o.__await).then(
                          function (e) {
                            r("next", e, c, i);
                          },
                          function (e) {
                            r("throw", e, c, i);
                          }
                        )
                      : t.resolve(o).then(
                          function (e) {
                            (l.value = e), c(l);
                          },
                          function (e) {
                            return r("throw", e, c, i);
                          }
                        );
                  i(n.arg);
                })(r, o, n, c);
              });
            }
            return (n = n ? n.then(c, c) : c());
          },
        });
      }
      function h(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function _(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function O(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(h, this),
          this.reset(!0);
      }
      function D(e) {
        if (e) {
          var t,
            r = e[n];
          if (r) return r.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length))
            return (
              (t = -1),
              ((r = function r() {
                for (; ++t < e.length; )
                  if (a.call(e, t)) return (r.value = e[t]), (r.done = !1), r;
                return (r.value = void 0), (r.done = !0), r;
              }).next = r)
            );
        }
        return { next: j };
      }
      function j() {
        return { value: void 0, done: !0 };
      }
      return (
        r(v, "constructor", { value: (d.prototype = m), configurable: !0 }),
        r(m, "constructor", { value: d, configurable: !0 }),
        (d.displayName = i(m, c, "GeneratorFunction")),
        (e.isGeneratorFunction = function (e) {
          return (
            !!(e = "function" == typeof e && e.constructor) &&
            (e === d || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, m)
              : ((e.__proto__ = m), i(e, c, "GeneratorFunction")),
            (e.prototype = Object.create(v)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        f(g.prototype),
        i(g.prototype, o, function () {
          return this;
        }),
        (e.AsyncIterator = g),
        (e.async = function (t, a, r, n, o) {
          void 0 === o && (o = Promise);
          var c = new g(l(t, a, r, n), o);
          return e.isGeneratorFunction(a)
            ? c
            : c.next().then(function (e) {
                return e.done ? e.value : c.next();
              });
        }),
        f(v),
        i(v, c, "Generator"),
        i(v, n, function () {
          return this;
        }),
        i(v, "toString", function () {
          return "[object Generator]";
        }),
        (e.keys = function (e) {
          var t,
            a = Object(e),
            r = [];
          for (t in a) r.push(t);
          return (
            r.reverse(),
            function e() {
              for (; r.length; ) {
                var t = r.pop();
                if (t in a) return (e.value = t), (e.done = !1), e;
              }
              return (e.done = !0), e;
            }
          );
        }),
        (e.values = D),
        (O.prototype = {
          constructor: O,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(_),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  a.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function r(a, r) {
              return (
                (c.type = "throw"),
                (c.arg = e),
                (t.next = a),
                r && ((t.method = "next"), (t.arg = void 0)),
                !!r
              );
            }
            for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
              var o = this.tryEntries[n],
                c = o.completion;
              if ("root" === o.tryLoc) return r("end");
              if (o.tryLoc <= this.prev) {
                var i = a.call(o, "catchLoc"),
                  l = a.call(o, "finallyLoc");
                if (i && l) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                } else if (i) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                } else {
                  if (!l)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
              var n = this.tryEntries[r];
              if (
                n.tryLoc <= this.prev &&
                a.call(n, "finallyLoc") &&
                this.prev < n.finallyLoc
              ) {
                var o = n;
                break;
              }
            }
            var c = (o =
              o &&
              ("break" === e || "continue" === e) &&
              o.tryLoc <= t &&
              t <= o.finallyLoc
                ? null
                : o)
              ? o.completion
              : {};
            return (
              (c.type = e),
              (c.arg = t),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), u)
                : this.complete(c)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              u
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var a = this.tryEntries[t];
              if (a.finallyLoc === e)
                return this.complete(a.completion, a.afterLoc), _(a), u;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var a,
                r,
                n = this.tryEntries[t];
              if (n.tryLoc === e)
                return (
                  "throw" === (a = n.completion).type && ((r = a.arg), _(n)), r
                );
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, a) {
            return (
              (this.delegate = { iterator: D(e), resultName: t, nextLoc: a }),
              "next" === this.method && (this.arg = void 0),
              u
            );
          },
        }),
        e
      );
    }
    function ae(e, t, a, r, n, o, c) {
      try {
        var i = e[o](c),
          l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(r, n);
    }
    function re(e) {
      return function () {
        var t = this,
          a = arguments;
        return new Promise(function (r, n) {
          var o = e.apply(t, a);
          function c(e) {
            ae(o, r, n, c, i, "next", e);
          }
          function i(e) {
            ae(o, r, n, c, i, "throw", e);
          }
          c(void 0);
        });
      };
    }
    function ne(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function oe(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ne(Object(a), !0).forEach(function (t) {
              ce(e, t, a[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : ne(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    function ce(e, t, a) {
      (t = (function (e) {
        return (
          (e = (function (e, t) {
            if ("object" !== ee(e) || null === e) return e;
            var a = e[Symbol.toPrimitive];
            if (void 0 === a) return String(e);
            if ("object" !== ee((a = a.call(e, "string")))) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          })(e)),
          "symbol" === ee(e) ? e : String(e)
        );
      })(t)) in e
        ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = a);
    }
    function ie(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var a =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != a) {
            var r,
              n,
              o,
              c,
              i = [],
              l = !0,
              s = !1;
            try {
              if (((o = (a = a.call(e)).next), 0 === t)) {
                if (Object(a) !== a) return;
                l = !1;
              } else
                for (
                  ;
                  !(l = (r = o.call(a)).done) &&
                  (i.push(r.value), i.length !== t);
                  l = !0
                );
            } catch (e) {
              (s = !0), (n = e);
            } finally {
              try {
                if (
                  !l &&
                  null != a.return &&
                  ((c = a.return()), Object(c) !== c)
                )
                  return;
              } finally {
                if (s) throw n;
              }
            }
            return i;
          }
        })(e, t) ||
        (function (e, t) {
          var a;
          if (e)
            return "string" == typeof e
              ? le(e, t)
              : "Map" ===
                  (a =
                    "Object" ===
                      (a = Object.prototype.toString.call(e).slice(8, -1)) &&
                    e.constructor
                      ? e.constructor.name
                      : a) || "Set" === a
              ? Array.from(e)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? le(e, t)
              : void 0;
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function le(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    function se(e) {
      function t(t) {
        var r;
        Ae ||
          (Me(t, "LDP"),
          (r = e.cardData.id),
          Object(V.a)(r),
          ye && "Y" !== ye.appExclusive
            ? "Y" == ye.primeTag
              ? ((r =
                  "https://www.magicbricks.com/mbprime/primePackages?source=" +
                  Object(W.e)(
                    "MBPrime_SRP_Item-defaultTemplate",
                    "wap",
                    "UnlockWithPrimeCTA"
                  )),
                e.cardData.cg,
                e.cardData.ty,
                e.cardData.ct,
                e.cardData.id,
                a(
                  Object(R.e)(
                    oe(
                      {
                        event: "event_tracking",
                        eventName: "revamp_srp_dynamic_listing",
                        nonInteraction: !1,
                        eventCategory: "MB Prime_Wap Entry Point Click",
                        eventAction:
                          "MB Prime_Wap_SRP_PrimeExclusiveProperties Clicked_" +
                          e.cardData.ty +
                          "_" +
                          e.category,
                        eventLabel: se,
                        eventValue: "",
                        cd21: e.cardData.ty,
                      },
                      Se
                    )
                  )
                ),
                window.open(r, "_blank").focus())
              : (t.stopPropagation(),
                (r =
                  -1 != De.indexOf("?")
                    ? De + "&srcrvmp=Y"
                    : De + "?&srcrvmp=Y"),
                m
                  ? (Object(c.r)(r),
                    Y.a.createCookie("quickViewOpen", "Y", 1 / 24))
                  : window.open(De, "_self"),
                a(
                  Object(R.e)(
                    oe(
                      {
                        event: "event_tracking",
                        eventName: "revamp_srp_ldp_view",
                        nonInteraction: !1,
                        eventCategory:
                          "revamp srp - property tuple misc actions",
                        eventAction: "ldp launch click",
                        eventLabel: "propertysearch | property tuple",
                        eventValue: "",
                        cd21: e.cardData.ty,
                      },
                      Se
                    )
                  )
                ),
                a({ type: "pdppageurl", payload: r }),
                (t =
                  null != e.showSimiliarProperties &&
                  -1 ==
                    e.showSimiliarProperties.toString().indexOf(e.cardData.id)
                    ? e.showSimiliarProperties.toString() + "," + e.cardData.id
                    : e.showSimiliarProperties.toString()),
                e.setShowSimiliarProperties(t),
                Ne ||
                  (we(!0),
                  a({ type: "PROPERTY_VIEWED", payload: e.cardData.id })))
            : ye &&
              "Y" == ye.appExclusive &&
              (e.setShowAppDownloadPopup(!0), e.setAppDownloadLink(je)));
      }
      var a = Object(o.c)(),
        m = e.isSortList,
        z = Object(o.d)(function (e) {
          return e.contactCtaData;
        }),
        ee = Object(o.d)(function (e) {
          return e.searchBean;
        }),
        ae = Object(o.d)(function (e) {
          return e.contactData;
        }),
        ne = Object(o.d)(function (e) {
          return e.userInfoData;
        }),
        le = Object(o.d)(function (e) {
          return e.clientBean;
        }),
        se = (ue = ie(
          Object(r.useState)(
            ae.requestBody && ae.nonPrimeUserFreeOwnerLimitUsed
              ? ae.nonPrimeUserFreeOwnerLimitUsed
              : 0
          ),
          2
        ))[0],
        ue =
          (ue[1],
          Object(o.d)(function (e) {
            return e.pdpViewed;
          })),
        pe = Object(o.d)(function (e) {
          return e.constantDataBean;
        });
      Object(o.d)(function (e) {
        return e.searchAdditionalDataBean;
      });
      var de = (be = ie(Object(r.useState)("Request Photos"), 2))[0],
        me = be[1],
        ye =
          (void 0 !== ne.userPrimeMemberLoggedIn &&
            null !== ne.userPrimeMemberLoggedIn &&
            "Y" == ne.userPrimeMemberLoggedIn &&
            void 0 !== e.cardData.pp &&
            null !== e.cardData.pp &&
            "I" == e.cardData.pmp &&
            void 0 !== e.cardData.isPrimeLocProp &&
            null !== e.cardData.isPrimeLocProp &&
            e.cardData.isPrimeLocProp,
          Object(A.a)(
            e.cardData,
            e.additionalBeanData,
            null,
            null,
            e.searchPage,
            null,
            ne,
            pe,
            z,
            le
          )),
        be = Object(j.a)(
          e.cardData,
          e.additionalBeanData,
          "N",
          e.ind,
          !0,
          null,
          e.searchPage,
          ye.showPrimeProp
        ),
        ve =
          ((pe = Object(h.c)(e.cardData, null, e.additionalBeanData)),
          Object(P.d)(
            e.cardData,
            e.additionalBeanData.dynamicArea,
            !0,
            e.category
          )),
        fe = Object(S.a)(e.cardData, e.additionalBeanData.isNRIUser),
        ge = Object(M.a)(e.cardData, e.searchPage, !0),
        he = Object(k.a)(e.cardData, e.searchPage, ge),
        _e =
          ((ge = Object(T.g)(e.cardData, e.additionalBeanData)),
          Object(N.a)(
            e.cardData,
            e.additionalBeanData,
            e.ind,
            e.searchPage,
            "",
            "",
            e.multilingualData
          )),
        Oe = Object(E.b)(e.cardData, e.additionalBeanData),
        De = Object(C.a)(
          e.cardData,
          e.additionalBeanData,
          e.ind,
          "https://www.magicbricks.com/propertyDetails/",
          "https://stgauction.magicbricks.com/"
        ),
        je = Object(I.a)(ye, De),
        Se = Object(F.d)(
          e.cardData,
          Oe,
          e.ind,
          pe.imgCount,
          e.additionalBeanData,
          e.searchPage,
          he,
          be,
          ne,
          e.isNsr,
          ye.mbPrimeFreeOwnProp
        ),
        Pe = Object(L.a)(e.cardData, !0),
        Ne =
          ((ve = Object(P.e)(
            ve,
            e.searchPage,
            e.cardData.cg,
            e.multilingualData
          )),
          (ue = ie(
            Object(r.useState)(
              ue &&
                ue.viewedProperties &&
                0 < ue.viewedProperties.length &&
                -1 !=
                  ue.viewedProperties.findIndex(function (t) {
                    return t == e.cardData.id;
                  })
            ),
            2
          ))[0]),
        we = ue[1],
        Ee =
          ((ue = Object(U.a)(
            e.cardData,
            e.additionalBeanData,
            e.searchPage,
            "https://www.magicbricks.com"
          )),
          Object(P.a)(e.cardData)),
        Te =
          ((he = Object(P.b)(he, Ee, e.searchPage)),
          (Ee = Object(x.b)(e.additionalBeanData, e.cardData, ee)),
          Object(x.e)(e.additionalBeanData, e.cardData, ee)),
        ke = (Ie = ie(Object(r.useState)(!1), 2))[0],
        Ce = Ie[1],
        Ae =
          ((Ie = ie(Object(r.useState)(!0), 2))[0],
          Ie[1],
          !(
            Object(c.t)(e.cardData.sid) || !e.cardData.sid.includes("1600025")
          )),
        Ie = ne.userUniqToken,
        Le =
          null ==
            (Ie =
              Object(c.t)(Ie) &&
              "undefined" != typeof document &&
              !Object(c.t)(Y.a.readCookie("userUniqToken"))
                ? Y.a.readCookie("userUniqToken")
                : Ie) &&
          null == e.additionalBeanData.userUniqTokenFromServerCookie,
        xe =
          Object(c.t)(Ie) &&
          null != e.cardData &&
          null != e.cardData.ct &&
          [
            "4320",
            "2624",
            "2951",
            "509",
            "7045",
            "6403",
            "6146",
            "2944",
            "4320",
            "25201",
            "4341",
            "3327",
          ].includes(e.cardData.ct);
      function Be(t, r, n, o) {
        var i;
        t.stopPropagation(),
          (Ae && "Show Similar" !== r.btnText) ||
            (null,
            (i = (function (t, r, n, o) {
              var i = localStorage.getItem("TrueCallerRequestId"),
                l = !1;
              if (
                !Object(c.t)(ne.userUniqToken) ||
                Object(c.t)(i) ||
                !Object(c.t)(Y.a.readCookie("userUniqToken"))
              )
                return Ue(t, r, n, o), l;
              X.a
                .get("/truecaller/checkConversion/".concat(i, "/").concat("N"))
                .then(function (c) {
                  var i;
                  return null != c &&
                    null != c.data &&
                    "success" == c.data.status &&
                    null != c.data.userUniqToken &&
                    "" !== c.data.userUniqToken
                    ? (a({
                        type: Z.b,
                        payload: oe(
                          oe({}, ne),
                          {},
                          {
                            userMobile: c.data.mobile,
                            userIsdCode: "50",
                            userMobileIsd: 50,
                            selectIsd: "50",
                            userUniqToken: c.data.userUniqToken,
                            hmacCode: c.data.hmacCode,
                            userEmail: c.data.email,
                            userName: c.data.name,
                          }
                        ),
                      }),
                      (i = {
                        buttonType: r.btnText,
                        contactType: "property",
                        searchType: 1,
                        propertyId: e.cardData.id,
                        advertisers: e.cardData.id,
                        requestInterface: "search_wap",
                        contactTrackCookie: "",
                        campaignCode: "WAP",
                        isLoginAndInfra: !1,
                        formName: "SRP_TOP_CONTACT",
                        contact_interface: "property_card_contact",
                        pType: e.cardData.ty,
                      }),
                      Re(
                        t,
                        r,
                        n,
                        o,
                        c,
                        i,
                        e.cardData,
                        "revamp_srp_proptuple_contact",
                        (i = n + 1) + " / " + ye.contactList.length,
                        Object(F.a)(i, !1)
                      ),
                      (l = !0))
                    : (null == c ||
                      null == c.data ||
                      ("use_another_number" != c.data.status &&
                        "user_rejected" != c.data.status)
                        ? Ue(t, r, n, o)
                        : ((i = oe(
                            oe(
                              {},
                              (i = {
                                buttonType: r.btnText,
                                contactType: "property",
                                searchType: 1,
                                propertyId: e.cardData.id,
                                advertisers: e.cardData.id,
                                requestInterface: "search_wap",
                                contactTrackCookie: "",
                                campaignCode: "WAP",
                                isLoginAndInfra: !1,
                                formName: "SRP_TOP_CONTACT",
                                contact_interface: "property_card_contact",
                                pType: e.cardData.ty,
                              })
                            ),
                            {},
                            { truecallerStatus: c.data.status }
                          )),
                          a(Object(w.c)(ae, e.cardData, ne, i, {}))),
                      l);
                });
            })(t, r, n, o)),
            console.log("nnnnnnnnnnnnn : " + i));
      }
      Object(r.useEffect)(function () {
        Object(c.v)(ye) ||
          Object(c.t)(ye.contactList) ||
          ye.contactList.every(function (t) {
            return (
              t.btnText !== K.a.PRIMEPLUS_AFTER_EXPIRED_CTA.ctaText ||
              (a(Object(K.b)(e.cardData, ne, K.c.IMPRESSION, "wap")), !1)
            );
          });
      }, []),
        z[e.cardData.id] &&
          null !== ye.contactList &&
          ye.contactList.map(function (t, a) {
            z[e.cardData.id].contactSecondText &&
              0 === a &&
              ((ye.contactList[a].btnText = z[e.cardData.id].contactSecondText),
              (ye.contactList[a].btnClass =
                "mb-srp-m__action--btn medium btn-contacted-o")),
              z[e.cardData.id].contactFirstText &&
                1 === a &&
                ((ye.contactList[a].btnText =
                  z[e.cardData.id].contactFirstText),
                (ye.contactList[a].btnClass =
                  "mb-srp-m__action--btn medium btn-contacted"));
          }),
        Object(r.useEffect)(
          function () {
            z[e.cardData.id] &&
              z[e.cardData.id].photoContactText &&
              me(z[e.cardData.id].photoContactText);
          },
          [z[e.cardData.id]]
        ),
        Object(r.useEffect)(
          function () {
            Ce(!1);
          },
          [JSON.stringify(ee)]
        );
      var Fe = (function () {
          var t = re(
            te().mark(function t(r, n, o, i, l, s, u) {
              var p;
              return te().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 3), Object(c.z)(!0);
                    case 3:
                      if (!(p = t.sent)) {
                        t.next = 15;
                        break;
                      }
                      a(
                        Object(R.e)(
                          oe(
                            {
                              event: "event_tracking",
                              eventName: l,
                              nonInteraction: !1,
                              eventCategory: "contactbuttonclicked",
                              eventAction: u,
                              eventLabel: s,
                              eventValue: "",
                              cd96: n.buttonType + "_truecaller",
                            },
                            i
                          )
                        )
                      ),
                        a(
                          Object(R.e)(
                            oe(
                              {
                                event: "event_tracking",
                                eventName: l,
                                nonInteraction: !1,
                                eventCategory: "Truecaller_widget_open",
                                eventAction: u,
                                eventLabel: s,
                                eventValue: "",
                                cd96: n.buttonType + "_truecaller",
                              },
                              i
                            )
                          )
                        ),
                        console.log("trueCallerStatus: " + p),
                        (t.next = 12);
                      var d = r,
                        m = n,
                        y = o,
                        b = i,
                        v = l,
                        f = s,
                        g = u,
                        h = 0,
                        _ = !1,
                        O = setInterval(function () {
                          X.a
                            .get(
                              "/truecaller/checkConversion/"
                                .concat(d, "/")
                                .concat("Y")
                            )
                            .then(function (t) {
                              var r;
                              null != t &&
                              null != t.data &&
                              "success" == t.data.status &&
                              null != t.data.userUniqToken &&
                              "" !== t.data.userUniqToken
                                ? ((_ = !0),
                                  clearInterval(O),
                                  a({
                                    type: Z.b,
                                    payload: oe(
                                      oe({}, ne),
                                      {},
                                      {
                                        userMobile: t.data.mobile,
                                        userIsdCode: "50",
                                        userMobileIsd: 50,
                                        selectIsd: "50",
                                        userUniqToken: t.data.userUniqToken,
                                        hmacCode: t.data.hmacCode,
                                        userEmail: t.data.email,
                                        userName: t.data.name,
                                      }
                                    ),
                                  }),
                                  void 0 !==
                                    (r =
                                      document.getElementById("pageLoader")) &&
                                    null != r &&
                                    (document.getElementById(
                                      "pageLoader"
                                    ).style.display = "none"),
                                  a(
                                    Object(R.e)(
                                      oe(
                                        {
                                          event: "event_tracking",
                                          eventName: "Truecaller_" + v,
                                          nonInteraction: !1,
                                          eventCategory: "contactsuccess",
                                          eventAction: g,
                                          eventLabel: f,
                                          eventValue: "",
                                          cd96: m.buttonType + "_truecaller",
                                        },
                                        b
                                      )
                                    )
                                  ),
                                  Object(c.f)(t.data, e.additionalBeanData),
                                  Object(c.e)(e.additionalBeanData),
                                  (r = {
                                    price: m.price,
                                    detailViewCt: y.detailViewCt || 0,
                                    buttonType: m.buttonType,
                                    propertyType: m.propertyType,
                                    userType: y.userType,
                                    advertiserDetailName: y.oname,
                                    pdpUrl: y.url,
                                    cityName: y.ctName,
                                    formName: m.formName,
                                    pType:
                                      null != m.pType && "" != m.pType
                                        ? m.pType
                                        : "",
                                    requestBody: oe(
                                      oe({}, ae.requestBody),
                                      {},
                                      {
                                        oid: y.oid,
                                        propertyId: y.id,
                                        advertisers: [
                                          m.advertisers + "|" + m.contactType,
                                        ],
                                        encID: y.encId,
                                        city: y.ctName,
                                        propTypeD: y.propTypeD,
                                        formatPrice: y.priceD,
                                        locality: y.lmtDName,
                                        ctaindex:
                                          y.ctaDetailBean &&
                                          m.buttonType == y.ctaDetailBean.cta2
                                            ? 1
                                            : 0,
                                        sbmcndsustatus:
                                          y &&
                                          y.ctaDetailBean &&
                                          y.ctaDetailBean.ctaid
                                            ? 123
                                            : "",
                                        ctaruleid:
                                          y &&
                                          y.ctaDetailBean &&
                                          y.ctaDetailBean.ctaid
                                            ? y.ctaDetailBean.ctaid
                                            : "",
                                        isCustomSource: "Y",
                                        customSource: "truecaller_wap_SRP",
                                      }
                                    ),
                                  }),
                                  a({ type: Z.D, payload: r }),
                                  a({
                                    type: "buyerTaggingFlow",
                                    payload: {
                                      psmid: y.psmid,
                                      prjname: y.prjname,
                                      bedroomD: y.bedroomD,
                                      bd: y.bd,
                                      lmtDName: y.lmtDName,
                                      ctName: y.ctName,
                                      propertyType: y.ty,
                                      category:
                                        "r" == y.cg || "R" == y.cg ? "R" : "S",
                                      contactId: y.id,
                                      price: y.price,
                                      locId: y.lt,
                                      cityId: y.ct,
                                      userType: y.userType,
                                      isVis: y.isVis,
                                      isPaidUser: y.isPaidUser,
                                      propTypeD: y.propTypeD,
                                    },
                                  }),
                                  a({
                                    type: Z.d,
                                    payload: oe(
                                      oe({}, r),
                                      {},
                                      { isAutoContact: !0 }
                                    ),
                                  }),
                                  a(
                                    Object(R.e)(
                                      oe(
                                        {
                                          event: "event_tracking",
                                          eventName: v,
                                          nonInteraction: !1,
                                          eventCategory: "Top matches",
                                          eventAction: "tab opened",
                                          eventLabel: "source-srp featureclick",
                                          eventValue: "",
                                          cd96: m.buttonType + "_truecaller",
                                        },
                                        b
                                      )
                                    )
                                  ))
                                : null == t ||
                                  null == t.data ||
                                  ("use_another_number" != t.data.status &&
                                    "user_rejected" != t.data.status)
                                ? ((h += 1),
                                  (r = document.getElementById("pageLoader")),
                                  20 <= h
                                    ? e.setTruecallerToast(!1)
                                    : void 0 !== r &&
                                      null != r &&
                                      10 == h &&
                                      ((document.getElementById(
                                        "pageLoader"
                                      ).style.display = "none"),
                                      a(
                                        Object(R.e)(
                                          oe(
                                            {
                                              event: "event_tracking",
                                              eventName: "toast message opened",
                                              nonInteraction: !1,
                                              eventCategory: "truecaller toast",
                                              eventAction: g,
                                              eventLabel: f,
                                              eventValue: "",
                                              cd96:
                                                m.buttonType + "_truecaller",
                                            },
                                            b
                                          )
                                        )
                                      ),
                                      e.setTruecallerToast(!0)))
                                : ((_ = !0),
                                  clearInterval(O),
                                  (m = oe(
                                    oe({}, m),
                                    {},
                                    { truecallerStatus: t.data.status }
                                  )),
                                  void 0 !==
                                    (r =
                                      document.getElementById("pageLoader")) &&
                                    null != r &&
                                    (document.getElementById(
                                      "pageLoader"
                                    ).style.display = "none"),
                                  a(Object(w.c)(ae, y, ne, m, {})));
                            });
                        }, 500);
                      return new Promise(function (t) {
                        setTimeout(function () {
                          clearInterval(O),
                            "undefined" != typeof elem &&
                              null != elem &&
                              10 <= h &&
                              (document.getElementById(
                                "pageLoader"
                              ).style.display = "none"),
                            e.setTruecallerToast(!1),
                            t(_);
                        }, 15e3);
                      });
                    case 12:
                      t.sent, (t.next = 15);
                      break;
                    case 15:
                      return t.abrupt("return", p);
                    case 16:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e, a, r, n, o, c, i) {
            return t.apply(this, arguments);
          };
        })(),
        Re = function (t, r, n, o, i, l, s, u, p, d) {
          n += 1;
          var m = Y.a.readCookie("trackerCookie");
          !Object(c.t)(m) ||
            (Object(c.t)(m) &&
              !Object(c.t)(document.referrer) &&
              document.referrer.includes(".google") &&
              Y.a.createCookieRem("trackerCookie", "Google_Organic", 180)),
            Object(c.v)(r) ||
              (("Ask Owner to Call" != r.btnText &&
                "Send Enquiry" != r.btnText) ||
                a(
                  Object(R.e)(
                    oe(
                      {
                        event: "event_tracking",
                        eventName: "revamp_srp_dynamic_listing",
                        nonInteraction: !1,
                        eventCategory: "MB Prime_Wap CTA Change Click",
                        eventAction:
                          "MB Prime_Wap_SRP_Free Owner Prop CTA Change Clicked_" +
                          e.cardData.ty +
                          "_" +
                          e.category,
                        eventLabel: se,
                        eventValue: "",
                        cd21: e.cardData.ty,
                      },
                      o
                    )
                  )
                ),
              "Know More" == r.btnText || "Call" == r.btnText
                ? a(
                    Object(R.e)(
                      oe(
                        {
                          event: "event_tracking",
                          eventName: "revamp_srp_proptuple_contact",
                          nonInteraction: !1,
                          eventCategory: "contactbuttonclicked",
                          eventAction:
                            "revamp srp | propertycontact | propertysearch | property tuple | primary | property_expert_cta_clicked",
                          eventLabel: n + " / " + ye.contactList.length,
                          eventValue: "",
                          cd21: e.cardData.ty,
                        },
                        o
                      )
                    )
                  )
                : ((m = Object(c.t)(e.cardData.id) ? "" : e.cardData.id),
                  "Show Similar" == r.btnText
                    ? ((n =
                        "property_clicked_on_" +
                        m +
                        " | project_clicked_on_" +
                        (Object(c.t)(e.cardData.psmid)
                          ? ""
                          : e.cardData.psmid) +
                        " | advertiser_type_got_clicked_" +
                        (Object(c.t)(e.cardData.userType)
                          ? ""
                          : e.cardData.userType) +
                        " | advertiser_type_paid_" +
                        (Object(c.t)(e.cardData.isPaidUser)
                          ? ""
                          : e.cardData.isPaidUser) +
                        " | service_ids_of_advertiser_" +
                        (Object(c.t)(e.cardData.sid)
                          ? ""
                          : e.cardData.sid.replace(/,/g, "#"))),
                      a(
                        Object(R.e)(
                          oe(
                            {
                              event: "event_tracking",
                              eventName: "revamp_srp_dynamic_listing",
                              nonInteraction: !1,
                              eventCategory: "show_similar_builder",
                              eventAction:
                                "show similar clicked_page_SRP-cta label_" +
                                r.btnText,
                              eventLabel: n,
                              eventValue: "",
                              cd21: e.cardData.ty,
                            },
                            o
                          )
                        )
                      ),
                      Ce(!0))
                    : (a(
                        Object(R.e)(
                          oe(
                            {
                              event: "event_tracking",
                              eventName: "Truecaller_" + u,
                              nonInteraction: !1,
                              eventCategory: "contactsuccess",
                              eventAction: d,
                              eventLabel: p,
                              eventValue: "",
                              cd96: l.buttonType + "_truecaller",
                            },
                            o
                          )
                        )
                      ),
                      Object(c.f)(i.data, e.additionalBeanData),
                      Object(c.e)(e.additionalBeanData),
                      (m = {
                        price: l.price,
                        detailViewCt: s.detailViewCt || 0,
                        buttonType: l.buttonType,
                        propertyType: l.propertyType,
                        userType: s.userType,
                        advertiserDetailName: s.oname,
                        pdpUrl: s.url,
                        cityName: s.ctName,
                        formName: l.formName,
                        pType: null != l.pType && "" != l.pType ? l.pType : "",
                        requestBody: oe(
                          oe({}, ae.requestBody),
                          {},
                          {
                            oid: s.oid,
                            propertyId: s.id,
                            advertisers: [l.advertisers + "|" + l.contactType],
                            encID: s.encId,
                            city: s.ctName,
                            propTypeD: s.propTypeD,
                            formatPrice: s.priceD,
                            locality: s.lmtDName,
                            ctaindex:
                              s.ctaDetailBean &&
                              l.buttonType == s.ctaDetailBean.cta2
                                ? 1
                                : 0,
                            sbmcndsustatus:
                              s && s.ctaDetailBean && s.ctaDetailBean.ctaid
                                ? 123
                                : "",
                            ctaruleid:
                              s && s.ctaDetailBean && s.ctaDetailBean.ctaid
                                ? s.ctaDetailBean.ctaid
                                : "",
                            isCustomSource: "Y",
                            customSource: "truecaller_wap_SRP",
                          }
                        ),
                      }),
                      a({ type: Z.D, payload: m }),
                      a({
                        type: "buyerTaggingFlow",
                        payload: {
                          psmid: s.psmid,
                          prjname: s.prjname,
                          bedroomD: s.bedroomD,
                          bd: s.bd,
                          lmtDName: s.lmtDName,
                          ctName: s.ctName,
                          propertyType: s.ty,
                          category: "r" == s.cg || "R" == s.cg ? "R" : "S",
                          contactId: s.id,
                          price: s.price,
                          locId: s.lt,
                          cityId: s.ct,
                          userType: s.userType,
                          isVis: s.isVis,
                          isPaidUser: s.isPaidUser,
                          propTypeD: s.propTypeD,
                        },
                      }),
                      a({
                        type: Z.d,
                        payload: oe(oe({}, m), {}, { isAutoContact: !0 }),
                      }),
                      a(
                        Object(R.e)(
                          oe(
                            {
                              event: "event_tracking",
                              eventName: u,
                              nonInteraction: !1,
                              eventCategory: "Top matches",
                              eventAction: "tab opened",
                              eventLabel: "source-srp featureclick",
                              eventValue: "",
                              cd96: l.buttonType + "_truecaller",
                            },
                            o
                          )
                        )
                      ))));
        },
        Ue = function (t, r, n, o) {
          var i,
            l,
            s,
            u,
            p,
            d,
            m,
            y,
            b,
            v,
            f,
            g,
            h,
            _,
            O,
            D = "",
            j = "revamp_srp_proptuple_contact",
            S = "",
            P = "",
            N = n + 1,
            E = "",
            T = "WAP";
          n = Y.a.readCookie("trackerCookie");
          Object(c.t)(n)
            ? Object(c.t)(n) &&
              !Object(c.t)(document.referrer) &&
              document.referrer.includes(".google") &&
              (Y.a.createCookieRem("trackerCookie", "Google_Organic", 180),
              (T = "wap_Google_Organic"))
            : (T = "wap_" + n),
            Object(c.v)(r)
              ? Object(c.t)(r) || "Request Photo" !== r
                ? Object(c.t)(r) ||
                  "MB Prime" !== r ||
                  ((D = r),
                  (E =
                    "property_for_" + Object(c.l)(ee) + "_" + D + "_RevampSRP"),
                  (j = "revamp_srp_proptuple_contact"),
                  (S = N + " / " + ye.contactList.length),
                  (n = oe(
                    {
                      event: "event_tracking",
                      eventName: j,
                      nonInteraction: !1,
                      eventCategory: "contactsuccess",
                      eventAction: P,
                      eventLabel: S,
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (u = oe(
                    {
                      event: "event_tracking",
                      eventName: j,
                      nonInteraction: !1,
                      eventCategory: "contactinfoformopen",
                      eventAction: P,
                      eventLabel: S,
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (p = oe(
                    {
                      event: "event_tracking",
                      eventName: j,
                      nonInteraction: !1,
                      eventCategory: "Contact Info Form",
                      eventAction: P,
                      eventLabel: S,
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (s = oe(
                    {
                      event: "event_tracking",
                      eventName: j,
                      nonInteraction: !1,
                      eventCategory: "Contact Info Form",
                      eventAction: P,
                      eventLabel: S,
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (d = oe(
                    {
                      event: "event_tracking",
                      eventName: j,
                      nonInteraction: !1,
                      eventCategory: "contactinfoformsubmit",
                      eventAction: P,
                      eventLabel: S,
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (m = oe(
                    {
                      event: "event_tracking",
                      eventName: j,
                      nonInteraction: !1,
                      eventCategory: "contactotpformopen",
                      eventAction: P,
                      eventLabel: S,
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (y = oe(
                    {
                      event: "event_tracking",
                      eventName: j,
                      nonInteraction: !1,
                      eventCategory: "Contact Otp Form",
                      eventAction: P,
                      eventLabel: S,
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (b = oe(
                    {
                      event: "event_tracking",
                      eventName: j,
                      nonInteraction: !1,
                      eventCategory: "Contact Otp Form",
                      eventAction: P,
                      eventLabel: S,
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (v = oe(
                    {
                      event: "event_tracking",
                      eventName: j,
                      nonInteraction: !1,
                      eventCategory: "contactotpformsubmit",
                      eventAction: P,
                      eventLabel: S,
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (g = oe(
                    {
                      event: "event_tracking",
                      eventName: "revamp_srp_thank_contact",
                      nonInteraction: !1,
                      eventCategory: "revamp srp - thank you page",
                      eventAction: "page load",
                      eventLabel: "page load",
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (h = oe(
                    {
                      event: "event_tracking",
                      eventName: "revamp_srp_thank_contact",
                      nonInteraction: !1,
                      eventCategory: "contactbuttonclicked",
                      eventAction:
                        "revamp srp | propertycontact | propertysearch | thankyou | duplicate",
                      eventLabel: "only",
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (_ = oe(
                    {
                      event: "event_tracking",
                      eventName: "revamp_srp_thank_contact",
                      nonInteraction: !1,
                      eventCategory: "contactsuccess",
                      eventAction:
                        "revamp srp | propertycontact | propertysearch | thankyou | duplicate",
                      eventLabel: "only",
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (O = oe(
                    {
                      event: "event_tracking",
                      eventName: "revamp_srp_thank_contact",
                      nonInteraction: !1,
                      eventCategory: "contactbuttonclicked",
                      eventAction:
                        "revamp srp | propertycontact | propertysearch | thankyou | reco | primary",
                      eventLabel: "Rank of card / Total cards",
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (f = oe(
                    {
                      event: "event_tracking",
                      eventName: "revamp_srp_thank_contact",
                      nonInteraction: !1,
                      eventCategory: "contactsuccess",
                      eventAction:
                        "revamp srp | propertycontact | propertysearch | thankyou | reco | primary",
                      eventLabel: "Rank of card / Total cards",
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  (i = oe(
                    {
                      event: "event_tracking",
                      eventName: "revamp_srp_thank",
                      nonInteraction: !1,
                      eventCategory: "revamp srp - thank you page",
                      eventAction: "get details on sms",
                      eventLabel: "propertysearch | thankyou",
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  null != e.shortListed && 1 == e.shortListed
                    ? ((l = oe(
                        {
                          event: "event_tracking",
                          eventName: "shortlist_page_proptuple_contact",
                          nonInteraction: !1,
                          eventCategory: "contactbuttonclicked",
                          eventAction: Object(F.a)(N, !0),
                          eventLabel: S,
                          eventValue: "",
                          cd96: D,
                        },
                        o
                      )),
                      a({
                        type: "SHORTLIST_GA_DATA",
                        payload: { shortListGaCommonData: l },
                      }),
                      a(Object(R.e)(l)))
                    : a(
                        Object(R.e)(
                          oe(
                            {
                              event: "event_tracking",
                              eventName: j,
                              nonInteraction: !1,
                              eventCategory: "contactbuttonclicked",
                              eventAction: P,
                              eventLabel: S,
                              eventValue: "",
                              cd96: D,
                            },
                            o
                          )
                        )
                      ),
                  a(Object(w.d)(t)),
                  a(
                    Object(w.b)(
                      t,
                      {
                        buttonType: "MB Prime",
                        contactType: "property",
                        searchType: 1,
                        propertyId: e.cardData.id,
                        advertisers: e.cardData.id,
                        requestInterface: "search_wap",
                        contactTrackCookie: E,
                        campaignCode: "WAP",
                        isLoginAndInfra: !1,
                        formName: "SRP_TOP_CONTACT",
                        contact_interface: "property_card_contact",
                        gaObject: {
                          contactsuccess: n,
                          contactinfoformopen: u,
                          contactInfoFormError: p,
                          contactInfoFormClose: s,
                          contactinfoformsubmit: d,
                          contactotpformopen: m,
                          contactOtpFormError: y,
                          contactOtpFormClose: b,
                          contactotpformsubmit: v,
                          thankyoupageLoad: g,
                          thankyoucontactBuilderClick: h,
                          thankyoucontactBuilderSuccess: _,
                          thankyoucontactRecommendClick: O,
                          thankyoucontactRecommendSuccess: f,
                          thankyougetdetailsonsms: i,
                        },
                      },
                      e.cardData,
                      Oe.finalPrice,
                      _e
                    )
                  ))
                : ((D = r),
                  (E =
                    "property_for_" + Object(c.l)(ee) + "_" + D + "_RevampSRP"),
                  (j = "revamp_srp_proptuple_contact"),
                  (l = "contactbuttonclicked"),
                  (S = "request photos"),
                  (P =
                    "revamp srp | propertycontact | propertysearch | property tuple | misc | request photos"),
                  (n = oe(oe({}, o), {}, { cd142: "otp contact" })),
                  (u = Object(q.c)(j, P, S, D, n)),
                  null != le && le.virtualNumberDataAvailable
                    ? a(
                        Object(R.e)(
                          oe(
                            {
                              event: "event_tracking",
                              eventName: j,
                              nonInteraction: !1,
                              eventCategory: l,
                              eventAction: P,
                              eventLabel: S,
                              eventValue: "",
                              cd96: D + "_vn",
                            },
                            n
                          )
                        )
                      )
                    : a(
                        Object(R.e)(
                          oe(
                            {
                              event: "event_tracking",
                              eventName: j,
                              nonInteraction: !1,
                              eventCategory: l,
                              eventAction: P,
                              eventLabel: S,
                              eventValue: "",
                              cd96: D,
                            },
                            n
                          )
                        )
                      ),
                  a(Object(w.d)(t)),
                  (p = oe(
                    {
                      event: "event_tracking",
                      eventName: "revamp_srp_proptuple_contact",
                      nonInteraction: !1,
                      eventCategory: "Virtualnumber-Contact_Form Shown",
                      eventAction: P,
                      eventLabel: S,
                      eventValue: "",
                      cd96: D,
                    },
                    o
                  )),
                  a(
                    Object(w.b)(
                      t,
                      (ce(
                        (s = {
                          buttonType: D,
                          contactType: "property",
                          searchType: 1,
                          propertyId: e.cardData.id,
                          advertisers: e.cardData.id,
                          requestInterface: "search_wap",
                          contactTrackCookie: E,
                          campaignCode: "WAP",
                          isLoginAndInfra: !1,
                          formName: "SRP_TOP_CONTACT",
                          contact_interface: "property_card_contact",
                          pType: e.cardData.ty,
                        }),
                        "campaignCode",
                        T
                      ),
                      ce(s, "gaObject", u),
                      ce(s, "vnGa", p),
                      s),
                      e.cardData,
                      Oe.finalPrice,
                      _e
                    )
                  ))
              : (("Ask Owner to Call" != r.btnText &&
                  "Send Enquiry" != r.btnText) ||
                  a(
                    Object(R.e)(
                      oe(
                        {
                          event: "event_tracking",
                          eventName: "revamp_srp_dynamic_listing",
                          nonInteraction: !1,
                          eventCategory: "MB Prime_Wap CTA Change Click",
                          eventAction:
                            "MB Prime_Wap_SRP_Free Owner Prop CTA Change Clicked_" +
                            e.cardData.ty +
                            "_" +
                            e.category,
                          eventLabel: se,
                          eventValue: "",
                          cd21: e.cardData.ty,
                        },
                        o
                      )
                    )
                  ),
                "Know More" == r.btnText || "Call" == r.btnText
                  ? a(
                      Object(R.e)(
                        oe(
                          {
                            event: "event_tracking",
                            eventName: "revamp_srp_proptuple_contact",
                            nonInteraction: !1,
                            eventCategory: "contactbuttonclicked",
                            eventAction:
                              "revamp srp | propertycontact | propertysearch | property tuple | primary | property_expert_cta_clicked",
                            eventLabel: N + " / " + ye.contactList.length,
                            eventValue: "",
                            cd21: e.cardData.ty,
                          },
                          o
                        )
                      )
                    )
                  : ((d = Object(c.t)(e.cardData.id) ? "" : e.cardData.id),
                    "Show Similar" == r.btnText
                      ? ((m =
                          "property_clicked_on_" +
                          d +
                          " | project_clicked_on_" +
                          (Object(c.t)(e.cardData.psmid)
                            ? ""
                            : e.cardData.psmid) +
                          " | advertiser_type_got_clicked_" +
                          (Object(c.t)(e.cardData.userType)
                            ? ""
                            : e.cardData.userType) +
                          " | advertiser_type_paid_" +
                          (Object(c.t)(e.cardData.isPaidUser)
                            ? ""
                            : e.cardData.isPaidUser) +
                          " | service_ids_of_advertiser_" +
                          (Object(c.t)(e.cardData.sid)
                            ? ""
                            : e.cardData.sid.replace(/,/g, "#"))),
                        a(
                          Object(R.e)(
                            oe(
                              {
                                event: "event_tracking",
                                eventName: "revamp_srp_dynamic_listing",
                                nonInteraction: !1,
                                eventCategory: "show_similar_builder",
                                eventAction:
                                  "show similar clicked_page_SRP-cta label_" +
                                  r.btnText,
                                eventLabel: m,
                                eventValue: "",
                                cd21: e.cardData.ty,
                              },
                              o
                            )
                          )
                        ),
                        Ce(!0))
                      : Object(c.t)(ne.userUniqToken) &&
                        Object(c.t)(Y.a.readCookie("userUniqToken")) &&
                        ("Get Phone No." == r.btnText ||
                          "Get a Quote" == r.btnText ||
                          "Contact Developer" == r.btnText ||
                          "Contact Builder" == r.btnText ||
                          "Contact Owner" == r.btnText ||
                          "Contact Agent" == r.btnText ||
                          "Contact MB Expert" == r.btnText ||
                          "Ask Owner to Call" == r.btnText)
                      ? (Y.a.createCookie("propId", d, 2),
                        (y = Y.a.getSemCookie()),
                        (b = Q.Math.random().toString(36).slice(2)),
                        G.a.trueCallerAuth(d, b, "SRP", y, "N"),
                        (v = {
                          buttonType: r.btnText,
                          contactType: "property",
                          searchType: 1,
                          propertyId: e.cardData.id,
                          advertisers: e.cardData.id,
                          requestInterface: "search_wap",
                          contactTrackCookie: "",
                          campaignCode: "WAP",
                          isLoginAndInfra: !1,
                          formName: "SRP_TOP_CONTACT",
                          contact_interface: "property_card_contact",
                          pType: e.cardData.ty,
                        }),
                        Fe(
                          b,
                          v,
                          e.cardData,
                          o,
                          "revamp_srp_proptuple_contact",
                          N + " / " + ye.contactList.length,
                          Object(F.a)(N, !1)
                        ).then(function (n) {
                          var i, l;
                          console.log(n),
                            n ||
                              ((D = r.btnText),
                              (E =
                                "property_for_" +
                                Object(c.l)(ee) +
                                "_" +
                                D +
                                "_RevampSRP"),
                              (j = "revamp_srp_proptuple_contact"),
                              (S = N + " / " + ye.contactList.length),
                              (P = Object(F.a)(N, !1)),
                              (n = Object(q.c)(j, P, S, D, o)),
                              null != e.shortListed && 1 == e.shortListed
                                ? ((l = oe(
                                    {
                                      event: "event_tracking",
                                      eventName:
                                        "shortlist_page_proptuple_contact",
                                      nonInteraction: !1,
                                      eventCategory: "contactbuttonclicked",
                                      eventAction: Object(F.a)(N, !0),
                                      eventLabel: S,
                                      eventValue: "",
                                      cd96: D,
                                    },
                                    o
                                  )),
                                  a({
                                    type: "SHORTLIST_GA_DATA",
                                    payload: { shortListGaCommonData: l },
                                  }),
                                  a(Object(R.e)(l)))
                                : null != le && le.virtualNumberDataAvailable
                                ? a(
                                    "Get Phone No." == D ||
                                      "Request Callback" == D ||
                                      "Enquire Now" == D
                                      ? Object(R.e)(
                                          oe(
                                            {
                                              event: "event_tracking",
                                              eventName: j,
                                              nonInteraction: !1,
                                              eventCategory:
                                                "contactbuttonclicked",
                                              eventAction: P,
                                              eventLabel: S,
                                              eventValue: "",
                                              cd96: D + "_whatsapp_layer",
                                            },
                                            o
                                          )
                                        )
                                      : Object(R.e)(
                                          oe(
                                            {
                                              event: "event_tracking",
                                              eventName: j,
                                              nonInteraction: !1,
                                              eventCategory:
                                                "contactbuttonclicked",
                                              eventAction: P,
                                              eventLabel: S,
                                              eventValue: "",
                                              cd96: D + "_vn",
                                            },
                                            o
                                          )
                                        )
                                  )
                                : a(
                                    Object(R.e)(
                                      oe(
                                        {
                                          event: "event_tracking",
                                          eventName: j,
                                          nonInteraction: !1,
                                          eventCategory:
                                            "contact_whatsapp_loginpage_open",
                                          eventAction: P,
                                          eventLabel: S,
                                          eventValue: "",
                                          cd96: D + "_whatsapp_layer",
                                        },
                                        o
                                      )
                                    )
                                  ),
                              (l = oe(
                                {
                                  event: "event_tracking",
                                  eventName: "revamp_srp_proptuple_contact",
                                  nonInteraction: !1,
                                  eventCategory:
                                    "Virtualnumber-Contact_Form Shown",
                                  eventAction: P,
                                  eventLabel: S,
                                  eventValue: "",
                                  cd96: D,
                                },
                                o
                              )),
                              a(Object(w.d)(t)),
                              a(
                                Object(w.b)(
                                  t,
                                  (ce(
                                    (i = {
                                      buttonType: D,
                                      contactType: "property",
                                      searchType: 1,
                                      propertyId: e.cardData.id,
                                      advertisers: e.cardData.id,
                                      requestInterface: "search_wap",
                                      contactTrackCookie: E,
                                      campaignCode: "WAP",
                                      isLoginAndInfra: !1,
                                      formName: "SRP_TOP_CONTACT",
                                      contact_interface:
                                        "property_card_contact",
                                      pType: e.cardData.ty,
                                    }),
                                    "campaignCode",
                                    T
                                  ),
                                  ce(i, "gaObject", n),
                                  ce(i, "vnGa", l),
                                  ce(i, "trueCallerAuth", !0),
                                  i),
                                  e.cardData,
                                  Oe.finalPrice,
                                  _e
                                )
                              ),
                              r.btnText ===
                                K.a.PRIMEPLUS_AFTER_EXPIRED_CTA.ctaText &&
                                a(
                                  Object(K.b)(e.cardData, ne, K.c.CLICK, "wap")
                                ));
                        }))
                      : ((D = r.btnText),
                        (E =
                          "property_for_" +
                          Object(c.l)(ee) +
                          "_" +
                          D +
                          "_RevampSRP"),
                        (j = "revamp_srp_proptuple_contact"),
                        (S = N + " / " + ye.contactList.length),
                        (P = Object(F.a)(N, !1)),
                        (g = !1),
                        ("Get a Quote" != r.btnText &&
                          "Contact Developer" != r.btnText &&
                          "Contact Builder" != r.btnText &&
                          "Contact Owner" != r.btnText &&
                          "Contact Agent" != r.btnText &&
                          "Contact MB Expert" != r.btnText &&
                          "Ask Owner to Call" != r.btnText) ||
                          (g = !0),
                        (h = Object(q.c)(j, P, S, D, o)),
                        null != e.shortListed && 1 == e.shortListed
                          ? ((_ = oe(
                              {
                                event: "event_tracking",
                                eventName: "shortlist_page_proptuple_contact",
                                nonInteraction: !1,
                                eventCategory: "contactbuttonclicked",
                                eventAction: Object(F.a)(N, !0),
                                eventLabel: S,
                                eventValue: "",
                                cd96: D,
                              },
                              o
                            )),
                            a({
                              type: "SHORTLIST_GA_DATA",
                              payload: { shortListGaCommonData: _ },
                            }),
                            a(Object(R.e)(_)))
                          : ((null != le && le.virtualNumberDataAvailable) ||
                              g) &&
                            "r" !== e.cardData.cg &&
                            "R" !== e.cardData.cg
                          ? "Get Phone No." == D ||
                            "Request Callback" == D ||
                            "Enquire Now" == D
                            ? a(
                                Object(R.e)(
                                  oe(
                                    {
                                      event: "event_tracking",
                                      eventName: j,
                                      nonInteraction: !1,
                                      eventCategory: "contactbuttonclicked",
                                      eventAction: P,
                                      eventLabel: S,
                                      eventValue: "",
                                      cd96: D + "_whatsapp",
                                    },
                                    o
                                  )
                                )
                              )
                            : g
                            ? (a(
                                Object(R.e)(
                                  oe(
                                    {
                                      event: "event_tracking",
                                      eventName: j,
                                      nonInteraction: !1,
                                      eventCategory: "contactbuttonclicked",
                                      eventAction: P,
                                      eventLabel: S,
                                      eventValue: "",
                                      cd96: D + "_whatsapp",
                                    },
                                    o
                                  )
                                )
                              ),
                              a(
                                Object(R.e)(
                                  oe(
                                    {
                                      event: "event_tracking",
                                      eventName: j,
                                      nonInteraction: !1,
                                      eventCategory:
                                        "contact_whatsapp_loginpage_open",
                                      eventAction: P,
                                      eventLabel: S,
                                      eventValue: "",
                                      cd96: D + "_whatsapp",
                                    },
                                    o
                                  )
                                )
                              ))
                            : a(
                                Object(R.e)(
                                  oe(
                                    {
                                      event: "event_tracking",
                                      eventName: j,
                                      nonInteraction: !1,
                                      eventCategory: "contactbuttonclicked",
                                      eventAction: P,
                                      eventLabel: S,
                                      eventValue: "",
                                      cd96: D + "_vn",
                                    },
                                    o
                                  )
                                )
                              )
                          : (("Get Phone No." != D &&
                              "Request Callback" != D &&
                              "Enquire Now" != D) ||
                              a(
                                Object(R.e)(
                                  oe(
                                    {
                                      event: "event_tracking",
                                      eventName: j,
                                      nonInteraction: !1,
                                      eventCategory: "contactbuttonclicked",
                                      eventAction: P,
                                      eventLabel: S,
                                      eventValue: "",
                                      cd96: D + "_whatsapp",
                                    },
                                    o
                                  )
                                )
                              ),
                            a(
                              Object(R.e)(
                                oe(
                                  {
                                    event: "event_tracking",
                                    eventName: j,
                                    nonInteraction: !1,
                                    eventCategory: "contactbuttonclicked",
                                    eventAction: P,
                                    eventLabel: S,
                                    eventValue: "",
                                    cd96: D,
                                  },
                                  o
                                )
                              )
                            )),
                        (O = oe(
                          {
                            event: "event_tracking",
                            eventName: "revamp_srp_proptuple_contact",
                            nonInteraction: !1,
                            eventCategory: "Virtualnumber-Contact_Form Shown",
                            eventAction: P,
                            eventLabel: S,
                            eventValue: "",
                            cd96: D,
                          },
                          o
                        )),
                        a(Object(w.d)(t)),
                        a(
                          Object(w.b)(
                            t,
                            (ce(
                              (f = {
                                buttonType: D,
                                contactType: "property",
                                searchType: 1,
                                propertyId: e.cardData.id,
                                advertisers: e.cardData.id,
                                requestInterface: "search_wap",
                                contactTrackCookie: E,
                                campaignCode: "WAP",
                                isLoginAndInfra: !1,
                                formName: "SRP_TOP_CONTACT",
                                contact_interface: "property_card_contact",
                                pType: e.cardData.ty,
                              }),
                              "campaignCode",
                              T
                            ),
                            ce(f, "gaObject", h),
                            ce(f, "vnGa", O),
                            ce(f, "trueCallerAuth", g),
                            f),
                            e.cardData,
                            Oe.finalPrice,
                            _e
                          )
                        ),
                        r.btnText === K.a.PRIMEPLUS_AFTER_EXPIRED_CTA.ctaText &&
                          a(Object(K.b)(e.cardData, ne, K.c.CLICK, "wap")))));
        };
      function Me(e, t) {
        e.stopPropagation();
        e = localStorage.getItem("TrueCallerRequestId");
        var r,
          n,
          o,
          i = Se.cd42;
        Object(c.t)(e) && Object(c.t)(null == ne ? void 0 : ne.userUniqToken)
          ? ((r = Q.Math.random().toString(36).slice(2)),
            a({ type: "trueCallRequestId", payload: r }),
            (n = Y.a.getSemCookie()),
            G.a.trueCallerAuth(i, r, t, n, "Y"),
            Ve(r, t))
          : null != Y.a.readCookie("RequirementSaveCookie") ||
            Object(c.t)(e) ||
            Object(c.t)(ne.userMobile) ||
            ((o = {
              propertyId: i,
              mobile: ne.userMobile,
              source: "wap-srp",
              code: "SRP_Truecaller Nudge on wait",
            }),
            (function () {
              var e = re(
                te().mark(function e() {
                  return te().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), X.a.post("/saveReuirement", o);
                        case 2:
                          return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()().then(function (e) {
              "Success" == (null == e ? void 0 : e.data) &&
                Y.a.createCookie("RequirementSaveCookie", "Y", 1);
            }));
      }
      var Ve = (function () {
        var e = re(
          te().mark(function e(t, r) {
            var n;
            return te().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    e.next = 3;
                    var o = !0,
                      c = t;
                    return new Promise(function (e) {
                      setTimeout(function () {
                        (o = document.hasFocus()
                          ? (console.log(
                              "True Caller App Not Present in Your Device."
                            ),
                            !1)
                          : (window.localStorage.setItem(
                              "TrueCallerRequestId",
                              c
                            ),
                            console.log(
                              "True Caller App is Present in Your Device."
                            ),
                            !0)),
                          e(o);
                      }, 1e3);
                    });
                  case 3:
                    return (
                      (n = e.sent)
                        ? (a(
                            Object(R.e)(
                              oe(
                                {
                                  event: "event_tracking",
                                  eventName: "revamp_srp_proptuple_Clicked",
                                  nonInteraction: !1,
                                  eventCategory: "Truecaller_widget_open",
                                  eventAction:
                                    "revamp srp | propertycontact | propertysearch | property tuple | " +
                                    r +
                                    " click",
                                  eventLabel: "truecaller_flow",
                                  eventValue: "",
                                  cd96: r + "_Click_truecaller",
                                },
                                Se
                              )
                            )
                          ),
                          console.log("trueCallerStatus: " + n),
                          console.log("true.......1"))
                        : console.log("true.......2"),
                      e.abrupt("return", n)
                    );
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, a) {
          return e.apply(this, arguments);
        };
      })();
      return n.a.createElement(
        n.a.Fragment,
        null,
        n.a.createElement(
          "div",
          {
            className: "mb-srp-m__card ".concat(
              "luxury" == e.searchPage
                ? 1 == ye.isPremiumMember
                  ? "isLuxury has-package"
                  : "isLuxury"
                : 1 == ye.isPremiumMember
                ? "mb-srp-m__card has-package"
                : ""
            ),
            onClick: t,
            id: "cardid" + e.cardData.id,
          },
          n.a.createElement(
            "div",
            {
              className: "mb-srp-m__card__container ".concat(
                Ae ? "prop-sold-out" : ""
              ),
            },
            n.a.createElement(
              "div",
              { className: "mb-srp-m__card__tags clearfix" },
              Ne
                ? n.a.createElement(i.a, {
                    divClassName: "mb-srp-m__card__tags--viewed",
                    tagNameText: "Viewed",
                  })
                : !ge ||
                  (null != e.additionalBeanData &&
                    null != e.additionalBeanData.isSeoSearch &&
                    1 == e.additionalBeanData.isSeoSearch)
                ? null
                : n.a.createElement(i.a, {
                    divClassName: "mb-srp-m__card__tags--posted",
                    tagNameText: "Just Out",
                  }),
              be &&
                0 < be.length &&
                n.a.createElement(
                  n.a.Fragment,
                  null,
                  be.map(function (t, a) {
                    return n.a.createElement(l.a, {
                      divClassName: "".concat(t.classText),
                      tagNameText: "".concat(t.tagText),
                      key: "tag_".concat(a),
                      multilingualData: e.multilingualData,
                    });
                  })
                ),
              null != e.cardData.pc &&
                null != e.cardData.pc &&
                0 < e.cardData.pc
                ? n.a.createElement("div", {
                    className: "mb-srp-m__card__tags--society-expert",
                  })
                : ""
            ),
            n.a.createElement(
              "div",
              { className: "mb-srp-m__card__infotr" },
              n.a.createElement(s.a, {
                requestPhotoCtaName: de,
                imagePath: e.cardData.attrImg || pe.imgPath,
                imageNotUploaded: pe.imageNotUploaded,
                imageCount: pe.imgCount,
                imagePostedDate: pe.dateCreated,
                imageAltTag: null != Pe ? Pe : "",
                requestPhotoLabel: pe.requestPhoto,
                BtnAction: function (e) {
                  return Be(e, "Request Photo", 1, Se);
                },
                cardIndex: e.ind,
                postLabel: Object(h.a)(e.cardData)
                  ? "Updated"
                  : e.cardData.postedEditedLabel,
                isSRPCard: !0,
                multilingualData: e.multilingualData,
              }),
              n.a.createElement(
                "div",
                { className: "mb-srp-m__card__info" },
                !Ae &&
                  n.a.createElement(p.a, {
                    url: De,
                    propertyGaObj: Se,
                    priceMap: Oe,
                    titleText: _e,
                    multilingualData: e.multilingualData,
                    pmtLat: e.cardData.pmtLat,
                    pmtLong: e.cardData.pmtLong,
                    cardData: e.cardData,
                  }),
                m
                  ? n.a.createElement(u.a, {
                      contactMap: ye,
                      carddata: e.cardData,
                      mobile: !0,
                      additionalBeanData: e.additionalBeanData,
                      checkPropSoldOut: Ae,
                    })
                  : "",
                n.a.createElement(
                  "div",
                  { className: "mb-srp-m__card__head" },
                  n.a.createElement(d.a, {
                    priceMap: Oe,
                    multilingualData: e.multilingualData,
                  })
                ),
                _e &&
                  n.a.createElement(y.a, {
                    titleText: _e,
                    cardData: e.cardData,
                    additionalBeanData: e.additionalBeanData,
                  }),
                ue.societyName &&
                  n.a.createElement(
                    "div",
                    { className: "mb-srp-m__card__society" },
                    n.a.createElement(v.a, {
                      cardTrueCallClick: Me,
                      projectUrl: xe
                        ? "javascript:void(0);"
                        : Ae
                        ? "propSoldOut"
                        : ue.projectUrl,
                      societyName: ue.societyName,
                      multilingualData: e.multilingualData,
                      disablePsmRedirection: xe,
                      onClick: function (e) {
                        return xe ? t(e) : "";
                      },
                    })
                  ),
                ve &&
                  0 < ve.length &&
                  n.a.createElement(
                    "div",
                    {
                      className: "mb-srp-m__card__summary__list",
                      id: "propertiesAction".concat(e.ind),
                    },
                    ve.map(function (t) {
                      return n.a.createElement(b.a, {
                        summaryLabelText: t.labelText,
                        summaryValueText: t.valueText,
                        summaryDataIcon: t.dataIcon,
                        summaryContentDisplay:
                          "residential" == e.searchPage && "r" == e.cardData.cg
                            ? "inline"
                            : null,
                        multilingualData: e.multilingualData,
                      });
                    })
                  )
              )
            ),
            fe.offerText &&
              n.a.createElement(f.a, {
                offerLabel: fe.offerLbl,
                offerText: fe.offerText,
              }),
            ((he && 0 < he.length) ||
              (e.cardData.srpCardUspDataList &&
                0 < e.cardData.srpCardUspDataList.length)) &&
              n.a.createElement(
                "div",
                { className: "mb-srp-m__card__usp__scroll" },
                e.cardData.srpCardUspDataList &&
                  0 < e.cardData.srpCardUspDataList.length &&
                  e.cardData.srpCardUspDataList.map(function (e, t) {
                    return n.a.createElement(
                      n.a.Fragment,
                      null,
                      e.showUsp &&
                        "greenDot" == e.uspName &&
                        n.a.createElement(
                          "div",
                          {
                            className:
                              "mb-srp-m__card__usp__ownavlblm mb-srp-m__card__usp__ownavlblm--greenanim",
                          },
                          e.uspText
                        ),
                      e.showUsp &&
                        "orangeDot" == e.uspName &&
                        n.a.createElement(
                          "div",
                          { className: "mb-srp-m__card__usp__ownavlblm" },
                          e.uspText
                        ),
                      e.showUsp &&
                        "usp1" == e.uspName &&
                        n.a.createElement(
                          "div",
                          {
                            className:
                              "mb-srp-m__card__usp__ownavlblm mb-srp-m__card__usp__ownavlblm--tenants",
                          },
                          e.uspText
                        )
                    );
                  }),
                he &&
                  0 < he.length &&
                  he.length < 4 &&
                  e.cardData &&
                  e.cardData.nonluxAmenMap &&
                  Object.keys(e.cardData.nonluxAmenMap).map(function (t, a) {
                    return he.length + a < 4
                      ? n.a.createElement(g.a, {
                          uspNameText: e.cardData.nonluxAmenMap[t],
                          multilingualData: e.multilingualData,
                        })
                      : "";
                  })
              ),
            "plot" == e.searchPage &&
              null != e.cardData.pmtLat &&
              "0.0" != e.cardData.pmtLat &&
              null != e.cardData.pmtLong &&
              "0.0" != e.cardData.pmtLong &&
              n.a.createElement(B.a, {
                mapLinkText: "View property on map",
                cardData: e.cardData,
                finalPrice: Oe.finalPrice,
                cardTitle: _e,
              }),
            ((e.additionalBeanData &&
              e.additionalBeanData.isNearMeSeoUrl &&
              "Y" == e.additionalBeanData.isNearMeSeoUrl) ||
              ("Y" == e.additionalBeanData.isDsListingLogic &&
                "0.0" != e.cardData.DSLogicDist)) &&
              n.a.createElement(H.a, {
                landmarkDetails: e.cardData.landmarkDetails,
                nearMePropDistance: e.cardData.nearMePropDistance,
                cardData: e.cardData,
              }),
            n.a.createElement(_.a, {
              seoSearch: e.seoSearch,
              card: e.cardData,
              search: e.searchPage,
              propertyGaObj: Se,
              appExclusive: ye.appExclusive,
              additionalBeanData: e.additionalBeanData,
              category: e.category,
              landmarkDetails: e.cardData.landmarkDetails,
              isNearMeSeoUrl: e.additionalBeanData.isNearMeSeoUrl,
              disablePsmRedirection: xe,
              psmRedirectionUrl: Ae ? "propSoldOut" : ue.projectUrl,
              societyMap: ue,
              cardTrueCallClick: function (e) {
                return !Object(c.t)(xe) && xe ? Me(e, "LDP") : "";
              },
            }),
            e.additionalBeanData.isContactedPage &&
              "I" === e.cardData.pp &&
              n.a.createElement(
                "div",
                { className: "mb-srp-m__card__contactedinfo" },
                !Object(c.t)(e.cardData.smo) &&
                  n.a.createElement(
                    "span",
                    { className: "mb-srp-m__card__contactedinfo__phone" },
                    ""
                      .concat("50" === e.cardData.moisd ? "+91 " : "")
                      .concat(e.cardData.smo)
                  ),
                !Object(c.t)(e.cardData.pEmail) &&
                  n.a.createElement(
                    "span",
                    { className: "mb-srp-m__card__contactedinfo__mail" },
                    "".concat(e.cardData.pEmail)
                  )
              ),
            !Object(c.t)(e.cardData.primeBrokerageText) &&
              n.a.createElement(
                "div",
                {
                  className:
                    "mb-srp-m__card__tags mb-srp-m__card__tags--filled mb-srp-m__card__tags--tick",
                },
                n.a.createElement(
                  "span",
                  { className: "mb-srp-m__card__tags__txtblock" },
                  J()(
                    e.cardData.primeBrokerageText.replace(
                      "${rupeesSymbol}",
                      '<span class="rupees">&#8377;</span>'
                    )
                  )
                )
              ),
            ye &&
              "Y" == ye.showPrimeProp &&
              "Y" !== ye.appExclusive &&
              "Y" != ye.primeTag &&
              ye.contactList &&
              n.a.createElement(
                "div",
                { className: "mb-srp-m__action__prime" },
                n.a.createElement(
                  "div",
                  { className: "mb-srp-m__action__prime-head" },
                  "Unlocked for you with MB Prime"
                ),
                n.a.createElement(
                  "div",
                  { className: "mb-srp-m__action mb-srp-m__card__action" },
                  null !== ye.contactList &&
                    ye.contactList.map(function (t, a) {
                      return n.a.createElement(O.a, {
                        BtnClassName: t.btnClass,
                        BtnText: t.btnText,
                        multilingualData: e.multilingualData,
                        BtnAction: function (e) {
                          return Be(e, t, a, Se);
                        },
                      });
                    })
                )
              ),
            ye &&
              "N" == ye.showPrimeProp &&
              "Y" !== ye.appExclusive &&
              "Y" != ye.primeTag &&
              ye.contactList &&
              n.a.createElement(
                "div",
                {
                  className: Le
                    ? "mb-srp-m__action mb-srp-m__card__action has-shortlist"
                    : "mb-srp-m__action mb-srp-m__card__action",
                },
                Le &&
                  n.a.createElement("div", {
                    onClick: function (e) {
                      e.stopPropagation(),
                        Be(
                          e,
                          { btnClass: "", btnText: "Whatsapp icon" },
                          -1,
                          Se
                        );
                    },
                    className: "mb-srp-m__action__btn-whatsApp",
                  }),
                null !== ye.contactList &&
                  ye.contactList.map(function (t, a) {
                    return n.a.createElement(O.a, {
                      BtnClassName: t.btnClass,
                      BtnText: t.btnText,
                      multilingualData: e.multilingualData,
                      BtnAction: function (e) {
                        return Be(e, t, a, Se);
                      },
                    });
                  })
              ),
            ye &&
              "Y" == ye.appExclusive &&
              n.a.createElement(D.a, {
                exclusiveTitleText: "App Exclusive",
                userType: "Owner Property",
                btnText: "View in App",
                BtnAction: function (e) {
                  e.stopPropagation(),
                    a(
                      Object(R.e)(
                        oe(
                          {
                            event: "event_tracking",
                            eventName: "revamp_srp_app_download",
                            nonInteraction: !1,
                            eventCategory: "revamp srp - App Download Clicked",
                            eventAction: "app exclusive property",
                            eventLabel: "propertysearch",
                            eventValue: "",
                            cd96: "View in App",
                          },
                          Se
                        )
                      )
                    ),
                    window.open(je, "_self");
                },
              }),
            ye &&
              "Y" !== ye.appExclusive &&
              "Y" == ye.primeTag &&
              n.a.createElement(D.a, {
                exclusiveTitleText: "MB Prime",
                exclusiveTitleIcon: "mb-srp-m__icon--mbPrime",
                userType: "Exclusive Owner Property",
                btnText: "Unlock with Prime",
                BtnAction: function (e) {
                  e.stopPropagation(), t(e);
                },
              })
          ),
          Ee &&
            0 < Ee.length &&
            n.a.createElement("script", {
              type: "application/ld+json",
              dangerouslySetInnerHTML: { __html: Ee },
            }),
          Te &&
            0 < Te.length &&
            n.a.createElement("script", {
              type: "application/ld+json",
              dangerouslySetInnerHTML: { __html: Te },
            })
        ),
        ke &&
          n.a.createElement($.a, {
            propId: e.cardData.id,
            seoSearch: !1,
            additionalBeanData: e.additionalBeanData,
            searchPage: e.additionalBeanData.searchType,
            category: e.category,
            showSimiliarProperties: e.showSimiliarProperties,
            setShowSimiliarProperties: e.setShowSimiliarProperties,
            setShowAppDownloadPopup: e.setShowAppDownloadPopup,
            setAppDownloadLink: e.setAppDownloadLink,
            isSortList: !1,
            isMobile: !0,
            serviceIds: e.cardData.sid,
          })
      );
    }
    a(306);
    var ue = a(825),
      pe = a(293),
      de = a(294),
      me = a(432),
      ye = a(826),
      be = a(827),
      ve = a(828),
      fe = a(829),
      ge = a(140);
    function he(e) {
      return (he =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function _e(e, t) {
      var a,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(e)),
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a)),
        r
      );
    }
    function Oe(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? _e(Object(a), !0).forEach(function (t) {
              De(e, t, a[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : _e(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    function De(e, t, a) {
      (t = (function (e) {
        return (
          (e = (function (e, t) {
            if ("object" !== he(e) || null === e) return e;
            var a = e[Symbol.toPrimitive];
            if (void 0 === a) return String(e);
            if ("object" !== he((a = a.call(e, "string")))) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          })(e)),
          "symbol" === he(e) ? e : String(e)
        );
      })(t)) in e
        ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = a);
    }
    function je(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var a =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != a) {
            var r,
              n,
              o,
              c,
              i = [],
              l = !0,
              s = !1;
            try {
              if (((o = (a = a.call(e)).next), 0 === t)) {
                if (Object(a) !== a) return;
                l = !1;
              } else
                for (
                  ;
                  !(l = (r = o.call(a)).done) &&
                  (i.push(r.value), i.length !== t);
                  l = !0
                );
            } catch (e) {
              (s = !0), (n = e);
            } finally {
              try {
                if (
                  !l &&
                  null != a.return &&
                  ((c = a.return()), Object(c) !== c)
                )
                  return;
              } finally {
                if (s) throw n;
              }
            }
            return i;
          }
        })(e, t) ||
        (function (e, t) {
          var a;
          if (e)
            return "string" == typeof e
              ? Se(e, t)
              : "Map" ===
                  (a =
                    "Object" ===
                      (a = Object.prototype.toString.call(e).slice(8, -1)) &&
                    e.constructor
                      ? e.constructor.name
                      : a) || "Set" === a
              ? Array.from(e)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? Se(e, t)
              : void 0;
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function Se(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    function Pe(e) {
      function t() {
        ee &&
          (ge.a.initialize("UA-492553-10"),
          ge.a.event({
            event: "send",
            category: "Coworking SRP | Property clicked",
            action: "Coworking LDP load",
            label: "Property " + e.cardData.ct + " Rank 1",
            eventName: "Coworking LDP load",
          }));
        var t = e.cardData.id;
        Object(V.a)(t),
          re && "Y" !== re.appExclusive
            ? "Y" == re.primeTag
              ? ((t =
                  "https://www.magicbricks.com/mbprime/primePackages?source=" +
                  Object(W.e)(
                    "MBPrime_SRP_Item-defaultTemplate",
                    "wap",
                    "UnlockWithPrimeCTA"
                  ) +
                  "&category=" +
                  e.cardData.cg +
                  "&ptype=" +
                  e.cardData.ty +
                  "&cityCnd=" +
                  e.cardData.ct),
                Se(
                  Object(R.e)(
                    Oe(
                      {
                        event: "event_tracking",
                        eventName: "revamp_srp_dynamic_listing",
                        nonInteraction: !1,
                        eventCategory: "MB Prime_Wap Entry Point Click",
                        eventAction:
                          "MB Prime_Wap_SRP_PrimeExclusiveProperties Clicked_" +
                          e.cardData.ty +
                          "_" +
                          e.category,
                        eventLabel: Q,
                        eventValue: "",
                        cd21: e.cardData.ty,
                      },
                      Te
                    )
                  )
                ),
                window.open(t, "_blank").focus())
              : ((t =
                  -1 != _e.indexOf("?")
                    ? _e + "&srcrvmp=Y"
                    : _e + "?&srcrvmp=Y"),
                B
                  ? ee ||
                    (Object(c.r)(t),
                    Y.a.createCookie("quickViewOpen", "Y", 1 / 24))
                  : window.open(_e, "_self"),
                Se(
                  Object(R.e)(
                    Oe(
                      {
                        event: "event_tracking",
                        eventName: "revamp_srp_ldp_view",
                        nonInteraction: !1,
                        eventCategory:
                          "revamp srp - property tuple misc actions",
                        eventAction: "ldp launch click",
                        eventLabel: "propertysearch | property tuple",
                        eventValue: "",
                        cd21: e.cardData.ty,
                      },
                      Te
                    )
                  )
                ),
                Se({ type: "pdppageurl", payload: t }),
                (t =
                  null != e.showSimiliarProperties &&
                  -1 ==
                    e.showSimiliarProperties.toString().indexOf(e.cardData.id)
                    ? e.showSimiliarProperties.toString() + "," + e.cardData.id
                    : e.showSimiliarProperties.toString()),
                e.setShowSimiliarProperties(t),
                we ||
                  (Ee(!0),
                  Se({ type: "PROPERTY_VIEWED", payload: e.cardData.id })))
            : re &&
              "Y" == re.appExclusive &&
              (e.setShowAppDownloadPopup(!0), e.setAppDownloadLink(ke));
      }
      function a(t, a, r, n) {
        t.stopPropagation();
        var o,
          i,
          l,
          s,
          u,
          p,
          d,
          m,
          y,
          b,
          v,
          f,
          g,
          h,
          _,
          O = "",
          D = "revamp_srp_proptuple_contact",
          j = "",
          S = "",
          P = "",
          N = ((r = r + 1), ""),
          E = "",
          T = Y.a.readCookie("trackerCookie");
        Object(c.t)(T)
          ? Object(c.t)(T) &&
            !Object(c.t)(document.referrer) &&
            document.referrer.includes(".google") &&
            (Y.a.createCookieRem("trackerCookie", "Google_Organic", 180),
            (E = "wap_Google_Organic"))
          : (E = "wap_" + T),
          Object(c.v)(a)
            ? Object(c.t)(a) || "Request Photo" !== a
              ? Object(c.t)(a) ||
                "MB Prime" !== a ||
                ((O = a),
                (N = "property_for_" + Object(c.l)(H) + "_" + O + "_RevampSRP"),
                (T = Oe(
                  {
                    event: "event_tracking",
                    eventName: (D = "revamp_srp_proptuple_contact"),
                    nonInteraction: !1,
                    eventCategory: "contactsuccess",
                    eventAction: P,
                    eventLabel: (S = r + " / " + re.contactList.length),
                    eventValue: "",
                    cd96: O,
                  },
                  n
                )),
                (v = Oe(
                  {
                    event: "event_tracking",
                    eventName: D,
                    nonInteraction: !1,
                    eventCategory: "contactinfoformopen",
                    eventAction: P,
                    eventLabel: S,
                    eventValue: "",
                    cd96: O,
                  },
                  n
                )),
                (y = Oe(
                  {
                    event: "event_tracking",
                    eventName: D,
                    nonInteraction: !1,
                    eventCategory: "Contact Info Form",
                    eventAction: P,
                    eventLabel: S,
                    eventValue: "",
                    cd96: O,
                  },
                  n
                )),
                (g = Oe(
                  {
                    event: "event_tracking",
                    eventName: D,
                    nonInteraction: !1,
                    eventCategory: "Contact Info Form",
                    eventAction: P,
                    eventLabel: S,
                    eventValue: "",
                    cd96: O,
                  },
                  n
                )),
                (h = Oe(
                  {
                    event: "event_tracking",
                    eventName: D,
                    nonInteraction: !1,
                    eventCategory: "contactinfoformsubmit",
                    eventAction: P,
                    eventLabel: S,
                    eventValue: "",
                    cd96: O,
                  },
                  n
                )),
                (_ = Oe(
                  {
                    event: "event_tracking",
                    eventName: D,
                    nonInteraction: !1,
                    eventCategory: "contactotpformopen",
                    eventAction: P,
                    eventLabel: S,
                    eventValue: "",
                    cd96: O,
                  },
                  n
                )),
                (f = Oe(
                  {
                    event: "event_tracking",
                    eventName: D,
                    nonInteraction: !1,
                    eventCategory: "Contact Otp Form",
                    eventAction: P,
                    eventLabel: S,
                    eventValue: "",
                    cd96: O,
                  },
                  n
                )),
                (o = Oe(
                  {
                    event: "event_tracking",
                    eventName: D,
                    nonInteraction: !1,
                    eventCategory: "Contact Otp Form",
                    eventAction: P,
                    eventLabel: S,
                    eventValue: "",
                    cd96: O,
                  },
                  n
                )),
                (i = Oe(
                  {
                    event: "event_tracking",
                    eventName: D,
                    nonInteraction: !1,
                    eventCategory: "contactotpformsubmit",
                    eventAction: P,
                    eventLabel: S,
                    eventValue: "",
                    cd96: O,
                  },
                  n
                )),
                (l = Oe(
                  {
                    event: "event_tracking",
                    eventName: "revamp_srp_thank_contact",
                    nonInteraction: !1,
                    eventCategory: "revamp srp - thank you page",
                    eventAction: "page load",
                    eventLabel: "page load",
                    eventValue: "",
                    cd96: O,
                  },
                  n
                )),
                (s = Oe(
                  {
                    event: "event_tracking",
                    eventName: "revamp_srp_thank_contact",
                    nonInteraction: !1,
                    eventCategory: "contactbuttonclicked",
                    eventAction:
                      "revamp srp | propertycontact | propertysearch | thankyou | duplicate",
                    eventLabel: "only",
                    eventValue: "",
                    cd96: O,
                  },
                  n
                )),
                (u = Oe(
                  {
                    event: "event_tracking",
                    eventName: "revamp_srp_thank_contact",
                    nonInteraction: !1,
                    eventCategory: "contactsuccess",
                    eventAction:
                      "revamp srp | propertycontact | propertysearch | thankyou | duplicate",
                    eventLabel: "only",
                    eventValue: "",
                    cd96: O,
                  },
                  n
                )),
                (p = Oe(
                  {
                    event: "event_tracking",
                    eventName: "revamp_srp_thank_contact",
                    nonInteraction: !1,
                    eventCategory: "contactbuttonclicked",
                    eventAction:
                      "revamp srp | propertycontact | propertysearch | thankyou | reco | primary",
                    eventLabel: "Rank of card / Total cards",
                    eventValue: "",
                    cd96: O,
                  },
                  n
                )),
                (d = Oe(
                  {
                    event: "event_tracking",
                    eventName: "revamp_srp_thank_contact",
                    nonInteraction: !1,
                    eventCategory: "contactsuccess",
                    eventAction:
                      "revamp srp | propertycontact | propertysearch | thankyou | reco | primary",
                    eventLabel: "Rank of card / Total cards",
                    eventValue: "",
                    cd96: O,
                  },
                  n
                )),
                (m = Oe(
                  {
                    event: "event_tracking",
                    eventName: "revamp_srp_thank",
                    nonInteraction: !1,
                    eventCategory: "revamp srp - thank you page",
                    eventAction: "get details on sms",
                    eventLabel: "propertysearch | thankyou",
                    eventValue: "",
                    cd96: O,
                  },
                  n
                )),
                null != e.shortListed && 1 == e.shortListed
                  ? ((b = Oe(
                      {
                        event: "event_tracking",
                        eventName: "shortlist_page_proptuple_contact",
                        nonInteraction: !1,
                        eventCategory: "contactbuttonclicked",
                        eventAction: Object(F.a)(r, !0),
                        eventLabel: S,
                        eventValue: "",
                        cd96: O,
                      },
                      n
                    )),
                    Se({
                      type: "SHORTLIST_GA_DATA",
                      payload: { shortListGaCommonData: b },
                    }),
                    Se(Object(R.e)(b)))
                  : Se(
                      Object(R.e)(
                        Oe(
                          {
                            event: "event_tracking",
                            eventName: D,
                            nonInteraction: !1,
                            eventCategory: "contactbuttonclicked",
                            eventAction: P,
                            eventLabel: S,
                            eventValue: "",
                            cd96: O,
                          },
                          n
                        )
                      )
                    ),
                Se(Object(w.d)(t)),
                Se(
                  Object(w.b)(
                    t,
                    {
                      buttonType: "MB Prime",
                      contactType: "property",
                      searchType: 1,
                      propertyId: e.cardData.id,
                      advertisers: e.cardData.id,
                      requestInterface: "search_wap",
                      contactTrackCookie: N,
                      campaignCode: "WAP",
                      isLoginAndInfra: !1,
                      formName: "SRP_TOP_CONTACT",
                      contact_interface: "property_card_contact",
                      gaObject: {
                        contactsuccess: T,
                        contactinfoformopen: v,
                        contactInfoFormError: y,
                        contactInfoFormClose: g,
                        contactinfoformsubmit: h,
                        contactotpformopen: _,
                        contactOtpFormError: f,
                        contactOtpFormClose: o,
                        contactotpformsubmit: i,
                        thankyoupageLoad: l,
                        thankyoucontactBuilderClick: s,
                        thankyoucontactBuilderSuccess: u,
                        thankyoucontactRecommendClick: p,
                        thankyoucontactRecommendSuccess: d,
                        thankyougetdetailsonsms: m,
                      },
                    },
                    e.cardData,
                    he.finalPrice,
                    le
                  )
                ))
              : ((O = a),
                (N = "property_for_" + Object(c.l)(H) + "_" + O + "_RevampSRP"),
                (D = "revamp_srp_proptuple_contact"),
                (j = "contactbuttonclicked"),
                (S = "request photos"),
                (P =
                  "revamp srp | propertycontact | propertysearch | property tuple | misc | request photos"),
                (b = Oe(Oe({}, n), {}, { cd142: "otp contact" })),
                (T = Object(q.c)(D, P, S, O, b)),
                (v = Oe(
                  {
                    event: "event_tracking",
                    eventName: "revamp_srp_proptuple_contact",
                    nonInteraction: !1,
                    eventCategory: "Virtualnumber-Contact_Form Shown",
                    eventAction: P,
                    eventLabel: S,
                    eventValue: "",
                    cd96: O,
                  },
                  n
                )),
                "WhatsApp" != O && null != $ && $.virtualNumberDataAvailable
                  ? Se(
                      Object(R.e)(
                        Oe(
                          {
                            event: "event_tracking",
                            eventName: D,
                            nonInteraction: !1,
                            eventCategory: j,
                            eventAction: P,
                            eventLabel: S,
                            eventValue: "",
                            cd96: O + "_vn",
                          },
                          b
                        )
                      )
                    )
                  : Se(
                      Object(R.e)(
                        Oe(
                          {
                            event: "event_tracking",
                            eventName: D,
                            nonInteraction: !1,
                            eventCategory: j,
                            eventAction: P,
                            eventLabel: S,
                            eventValue: "",
                            cd96: O,
                          },
                          b
                        )
                      )
                    ),
                Se(Object(w.d)(t)),
                Se(
                  Object(w.b)(
                    t,
                    (De(
                      (y = {
                        buttonType: O,
                        contactType: "property",
                        searchType: 1,
                        propertyId: e.cardData.id,
                        advertisers: e.cardData.id,
                        requestInterface: "search_wap",
                        contactTrackCookie: N,
                        campaignCode: "WAP",
                        isLoginAndInfra: !1,
                        formName: "SRP_TOP_CONTACT",
                        contact_interface: "property_card_contact",
                        pType: e.cardData.ty,
                      }),
                      "campaignCode",
                      E
                    ),
                    De(y, "gaObject", T),
                    De(y, "vnGa", v),
                    y),
                    e.cardData,
                    he.finalPrice,
                    le
                  )
                ))
            : (("Ask Owner to Call" != a.btnText &&
                "Send Enquiry" != a.btnText) ||
                Se(
                  Object(R.e)(
                    Oe(
                      {
                        event: "event_tracking",
                        eventName: "revamp_srp_dynamic_listing",
                        nonInteraction: !1,
                        eventCategory: "MB Prime_Wap CTA Change Click",
                        eventAction:
                          "MB Prime_Wap_SRP_Free Owner Prop CTA Change Clicked_" +
                          e.cardData.ty +
                          "_" +
                          e.category,
                        eventLabel: Q,
                        eventValue: "",
                        cd21: e.cardData.ty,
                      },
                      n
                    )
                  )
                ),
              (O = a.btnText),
              (N = "property_for_" + Object(c.l)(H) + "_" + O + "_RevampSRP"),
              (D = "revamp_srp_proptuple_contact"),
              (S = r + " / " + re.contactList.length),
              (P = Object(F.a)(r, !1)),
              (g = Object(q.c)(D, P, S, O, n)),
              null != e.shortListed && 1 == e.shortListed
                ? ((h = Oe(
                    {
                      event: "event_tracking",
                      eventName: "shortlist_page_proptuple_contact",
                      nonInteraction: !1,
                      eventCategory: "contactbuttonclicked",
                      eventAction: Object(F.a)(r, !0),
                      eventLabel: S,
                      eventValue: "",
                      cd96: O,
                    },
                    n
                  )),
                  Se({
                    type: "SHORTLIST_GA_DATA",
                    payload: { shortListGaCommonData: h },
                  }),
                  Se(Object(R.e)(h)))
                : "Contact MB Expert" == a.btnText ||
                  "Get Best Price" == a.btnText
                ? Se(
                    Object(R.e)(
                      Oe(
                        {
                          event: "event_tracking",
                          eventName: D,
                          nonInteraction: !1,
                          eventCategory: "contactbuttonclicked",
                          eventAction: P,
                          eventLabel: S,
                          eventValue: "",
                          cd96: O,
                        },
                        n
                      )
                    )
                  )
                : null != $ && $.virtualNumberDataAvailable
                ? Se(
                    "Get Phone No." == O ||
                      "Request Callback" == O ||
                      "Enquire Now" == O
                      ? Object(R.e)(
                          Oe(
                            {
                              event: "event_tracking",
                              eventName: D,
                              nonInteraction: !1,
                              eventCategory: "contactbuttonclicked",
                              eventAction: P,
                              eventLabel: S,
                              eventValue: "",
                              cd96: O + "_whatsapp",
                            },
                            n
                          )
                        )
                      : Object(R.e)(
                          Oe(
                            {
                              event: "event_tracking",
                              eventName: D,
                              nonInteraction: !1,
                              eventCategory: "contactbuttonclicked",
                              eventAction: P,
                              eventLabel: S,
                              eventValue: "",
                              cd96: O + "_vn",
                            },
                            n
                          )
                        )
                  )
                : Se(
                    "Get Phone No." == O ||
                      "Request Callback" == O ||
                      "Enquire Now" == O
                      ? Object(R.e)(
                          Oe(
                            {
                              event: "event_tracking",
                              eventName: D,
                              nonInteraction: !1,
                              eventCategory: "contactbuttonclicked",
                              eventAction: P,
                              eventLabel: S,
                              eventValue: "",
                              cd96: O + "_whatsapp",
                            },
                            n
                          )
                        )
                      : Object(R.e)(
                          Oe(
                            {
                              event: "event_tracking",
                              eventName: D,
                              nonInteraction: !1,
                              eventCategory: "contactbuttonclicked",
                              eventAction: P,
                              eventLabel: S,
                              eventValue: "",
                              cd96: O,
                            },
                            n
                          )
                        )
                  ),
              (_ = Oe(
                {
                  event: "event_tracking",
                  eventName: "revamp_srp_proptuple_contact",
                  nonInteraction: !1,
                  eventCategory: "Virtualnumber-Contact_Form Shown",
                  eventAction: P,
                  eventLabel: S,
                  eventValue: "",
                  cd96: O,
                },
                n
              )),
              Se(Object(w.d)(t)),
              Se(
                Object(w.b)(
                  t,
                  (De(
                    (f = {
                      buttonType: O,
                      contactType: "property",
                      searchType: 1,
                      propertyId: e.cardData.id,
                      advertisers: e.cardData.id,
                      requestInterface: "search_wap",
                      contactTrackCookie: N,
                      campaignCode: "WAP",
                      isLoginAndInfra: !1,
                      formName: "SRP_TOP_CONTACT",
                      contact_interface: "property_card_contact",
                      pType: e.cardData.ty,
                    }),
                    "campaignCode",
                    E
                  ),
                  De(f, "gaObject", g),
                  De(f, "vnGa", _),
                  f),
                  e.cardData,
                  he.finalPrice,
                  le
                )
              ));
      }
      var B = e.isSortList,
        G = Object(o.d)(function (e) {
          return e.contactCtaData;
        }),
        H = Object(o.d)(function (e) {
          return e.searchBean;
        }),
        z = Object(o.d)(function (e) {
          return e.pdpViewed;
        }),
        J = Object(o.d)(function (e) {
          return e.contactData;
        }),
        K = Object(o.d)(function (e) {
          return e.userInfoData;
        }),
        $ = Object(o.d)(function (e) {
          return e.clientBean;
        }),
        Q = (J = je(
          Object(r.useState)(
            J.requestBody && J.nonPrimeUserFreeOwnerLimitUsed
              ? J.nonPrimeUserFreeOwnerLimitUsed
              : 0
          ),
          2
        ))[0];
      J[1];
      var X = (J = je(Object(r.useState)("Request Photos"), 2))[0],
        Z = J[1],
        ee = "10026" === e.cardData.ty,
        te =
          ((J = Object(h.c)(e.cardData, null, e.additionalBeanData)),
          Object(E.c)(e.cardData, e.additionalBeanData)),
        ae = Object(o.d)(function (e) {
          return e.constantDataBean;
        }),
        re =
          (void 0 !== K.userPrimeMemberLoggedIn &&
            null !== K.userPrimeMemberLoggedIn &&
            "Y" == K.userPrimeMemberLoggedIn &&
            void 0 !== e.cardData.pp &&
            null !== e.cardData.pp &&
            "I" == e.cardData.pmp &&
            void 0 !== e.cardData.isPrimeLocProp &&
            null !== e.cardData.isPrimeLocProp &&
            e.cardData.isPrimeLocProp,
          Object(A.a)(
            e.cardData,
            e.additionalBeanData,
            null,
            null,
            e.searchPage,
            null,
            K,
            ae,
            G,
            $
          )),
        ne =
          ((ae = Object(j.a)(
            e.cardData,
            e.additionalBeanData,
            "N",
            e.ind,
            !0,
            te,
            e.searchPage,
            re.showPrimeProp
          )),
          (te = Object(me.a)(e.cardData, e.additionalBeanData)),
          Object(pe.a)(
            e.cardData,
            e.additionalBeanData,
            !0,
            e.category,
            te.sharedOfficeSpace,
            te.dynamicSeatsValue
          )),
        oe = Object(S.a)(e.cardData, e.additionalBeanData.isNRIUser),
        ce = Object(M.a)(e.cardData, e.searchPage, !1),
        ie =
          ((ce = Object(k.a)(e.cardData, e.searchPage, ce)),
          Object(T.g)(e.cardData, e.additionalBeanData)),
        le = Object(N.a)(
          e.cardData,
          e.additionalBeanData,
          e.ind,
          e.searchPage,
          "",
          "",
          e.multilingualData
        ),
        se = Object(de.a)(e.cardData, e.searchPage, !1),
        he = Object(E.b)(e.cardData, e.additionalBeanData, te),
        _e = Object(C.a)(
          e.cardData,
          e.additionalBeanData,
          e.ind,
          "https://www.magicbricks.com/propertyDetails/",
          "https://stgauction.magicbricks.com/"
        ),
        Se =
          ((ne =
            e.cardData.ty && "10026" !== e.cardData.ty
              ? Object(P.e)(ne, e.searchPage, e.cardData.cg)
              : ne),
          Object(o.c)()),
        Pe = Object(x.b)(e.additionalBeanData, e.cardData, H),
        Ne = Object(x.e)(e.additionalBeanData, e.cardData, H),
        we = (z = je(
          Object(r.useState)(
            z &&
              z.viewedProperties &&
              0 < z.viewedProperties.length &&
              -1 !=
                z.viewedProperties.findIndex(function (t) {
                  return t == e.cardData.id;
                })
          ),
          2
        ))[0],
        Ee = z[1],
        Te =
          ((z = Object(L.a)(e.cardData, !0)),
          Object(F.d)(
            e.cardData,
            he,
            e.ind,
            J.imgCount,
            e.additionalBeanData,
            e.searchPage,
            ce,
            ae,
            K,
            e.isNsr,
            re.mbPrimeFreeOwnProp
          )),
        ke =
          ((K = Object(U.a)(
            e.cardData,
            e.additionalBeanData,
            e.searchPage,
            "https://www.magicbricks.com"
          )),
          Object(I.a)(re, _e));
      return (
        G[e.cardData.id] &&
          null !== re.contactList &&
          re.contactList.map(function (t, a) {
            G[e.cardData.id].contactSecondText &&
              0 === a &&
              ((re.contactList[a].btnText = G[e.cardData.id].contactSecondText),
              (re.contactList[a].btnClass =
                "mb-srp-m__action--btn medium btn-contacted-o")),
              G[e.cardData.id].contactFirstText &&
                1 === a &&
                ((re.contactList[a].btnText =
                  G[e.cardData.id].contactFirstText),
                (re.contactList[a].btnClass =
                  "mb-srp-m__action--btn medium btn-contacted"));
          }),
        Object(r.useEffect)(
          function () {
            G[e.cardData.id] &&
              G[e.cardData.id].photoContactText &&
              Z(G[e.cardData.id].photoContactText);
          },
          [G[e.cardData.id]]
        ),
        n.a.createElement(
          "div",
          {
            className: "mb-srp-m__card ".concat(
              1 == re.isPremiumMember ? "has-package" : ""
            ),
            onClick: t,
          },
          n.a.createElement(
            "div",
            { className: "mb-srp-m__card__container" },
            n.a.createElement(
              "div",
              { className: "mb-srp-m__card__tags clearfix" },
              we
                ? n.a.createElement(i.a, {
                    divClassName: "mb-srp-m__card__tags--viewed",
                    tagNameText: "Viewed",
                  })
                : !ie ||
                  (null != e.additionalBeanData &&
                    null != e.additionalBeanData.isSeoSearch &&
                    1 == e.additionalBeanData.isSeoSearch)
                ? null
                : n.a.createElement(i.a, {
                    divClassName: "mb-srp-m__card__tags--posted",
                    tagNameText: "Just Out",
                  }),
              ae &&
                0 < ae.length &&
                n.a.createElement(
                  n.a.Fragment,
                  null,
                  ae.map(function (t, a) {
                    return n.a.createElement(l.a, {
                      divClassName: "".concat(t.classText),
                      tagNameText: "".concat(t.tagText),
                      key: "tag_".concat(a),
                      multilingualData: e.multilingualData,
                    });
                  })
                )
            ),
            n.a.createElement(
              "div",
              { className: "mb-srp-m__card__infotr" },
              n.a.createElement(
                "div",
                { className: "mb-srp-m__card__photo" },
                n.a.createElement(s.a, {
                  requestPhotoCtaName: X,
                  imagePath: e.cardData.attrImg || J.imgPath,
                  imageCount: J.imgCount,
                  imagePostedDate: J.dateCreated,
                  imageAltTag: null != z ? z : "",
                  requestPhotoLabel: J.requestPhoto,
                  imageNotUploaded: J.imageNotUploaded,
                  BtnAction: function (e) {
                    return a(e, "Request Photo", 1, Te);
                  },
                  cardIndex: e.ind,
                  postLabel: e.cardData.postedEditedLabel,
                  multilingualData: e.multilingualData,
                })
              ),
              n.a.createElement(
                "div",
                { className: "mb-srp-m__card__info" },
                n.a.createElement(p.a, {
                  url: _e,
                  propertyGaObj: Te,
                  priceMap: he,
                  titleText: le,
                  multilingualData: e.multilingualData,
                }),
                n.a.createElement(
                  "div",
                  { className: "mb-srp-m__card__head" },
                  e.cardData &&
                    "10026" !== e.cardData.ty &&
                    n.a.createElement(
                      "div",
                      {
                        className:
                          "mb-srp-m__card__head--item mb-srp-m__card__price",
                      },
                      n.a.createElement(d.a, {
                        priceMap: he,
                        multilingualData: e.multilingualData,
                      })
                    ),
                  e.cardData.minRatePSqFt &&
                    0 != e.cardData.minRatePSqFt &&
                    "10026" !== e.cardData.ty &&
                    "Call for Price" !== he.finalPrice &&
                    n.a.createElement(
                      "div",
                      {
                        className:
                          "mb-srp-m__card__head--item mb-srp-m__card__pType",
                      },
                      n.a.createElement(m.a, {
                        rupeeIcon: !0,
                        PtypeVal: e.cardData.minRatePSqFt,
                        multilingualData: e.multilingualData,
                      })
                    )
                ),
                le &&
                  "10026" !== e.cardData.ty &&
                  n.a.createElement(y.a, {
                    titleText: le,
                    search: e.searchPage,
                    cardData: e.cardData,
                    additionalBeanData: e.additionalBeanData,
                  }),
                e.cardData &&
                  "10026" === e.cardData.ty &&
                  n.a.createElement(
                    "div",
                    { className: "mb-srp__card__price" },
                    n.a.createElement(ye.a, {
                      cardData: e.cardData,
                      searchBeanData: H,
                    })
                  ),
                le &&
                  "10026" === e.cardData.ty &&
                  n.a.createElement(ve.a, {
                    titleText: le,
                    search: e.searchPage,
                  }),
                "10026" !== e.cardData.ty &&
                  K.societyName &&
                  n.a.createElement(
                    "div",
                    { className: "mb-srp-m__card__society" },
                    n.a.createElement(v.a, {
                      projectUrl: K.projectUrl,
                      societyName: K.societyName,
                      multilingualData: e.multilingualData,
                    })
                  ),
                "10026" !== e.cardData.ty &&
                  ne &&
                  0 < ne.length &&
                  n.a.createElement(
                    "div",
                    { className: "mb-srp-m__card__summary" },
                    n.a.createElement(
                      "div",
                      { className: "mb-srp-m__card__summary__list" },
                      ne.map(function (t, a) {
                        return n.a.createElement(
                          n.a.Fragment,
                          { key: a },
                          3 == ne.length && 1 == a
                            ? n.a.createElement(b.a, {
                                summaryLabelText: t.labelText,
                                summaryValueText: t.valueText,
                                summaryDataIcon: t.dataIcon,
                                summaryLabelModifier: "hasDivider",
                                multilingualData: e.multilingualData,
                              })
                            : n.a.createElement(b.a, {
                                summaryLabelText: t.labelText,
                                summaryValueText: t.valueText,
                                summaryDataIcon: t.dataIcon,
                                multilingualData: e.multilingualData,
                              })
                        );
                      })
                    )
                  ),
                e.cardData &&
                  "10026" === e.cardData.ty &&
                  n.a.createElement(be.a, { cardData: e.cardData })
              )
            ),
            "10026" !== e.cardData.ty &&
              oe.offerText &&
              n.a.createElement(f.a, {
                offerLabel: oe.offerLbl,
                offerText: oe.offerText,
              }),
            se &&
              0 < se.length &&
              e.cardData &&
              "10026" !== e.cardData.ty &&
              n.a.createElement(
                "div",
                { className: "mb-srp-m__card__usp-near" },
                n.a.createElement(
                  "div",
                  { className: "mb-srp-m__card__usp-near__scroll" },
                  se.map(function (t) {
                    return n.a.createElement(ue.a, {
                      uspNearIcon: t.uspNearIcon,
                      uspNearText: t.uspNearText,
                      multilingualData: e.multilingualData,
                    });
                  })
                )
              ),
            ce &&
              0 < ce.length &&
              e.cardData &&
              "10026" !== e.cardData.ty &&
              n.a.createElement(
                "div",
                { className: "mb-srp-m__card__usp" },
                n.a.createElement(
                  "div",
                  { className: "mb-srp-m__card__usp__scroll" },
                  ce.map(function (t, a) {
                    return n.a.createElement(g.a, {
                      uspNameText: t,
                      multilingualData: e.multilingualData,
                    });
                  })
                )
              ),
            n.a.createElement(_.a, {
              seoSearch: e.seoSearch,
              card: e.cardData,
              search: e.searchPage,
              propertyGaObj: Te,
              appExclusive: re.appExclusive,
              additionalBeanData: e.additionalBeanData,
              category: e.category,
              dynamicListing: te,
            }),
            "10026" === e.cardData.ty &&
              ne &&
              0 < ne.length &&
              n.a.createElement(fe.a, {
                cardData: e.cardData,
                multilingualData: e.multilingualData,
              }),
            re &&
              "Y" == re.showPrimeProp &&
              "Y" !== re.appExclusive &&
              "Y" != re.primeTag &&
              re.contactList &&
              n.a.createElement(
                "div",
                { className: "mb-srp-m__action__prime" },
                n.a.createElement(
                  "div",
                  { className: "mb-srp-m__action__prime-head" },
                  "Unlocked for you with ",
                  n.a.createElement("span", null, "MB Prime")
                ),
                n.a.createElement(
                  "div",
                  { className: "mb-srp-m__action mb-srp-m__card__action" },
                  null !== re.contactList &&
                    re.contactList.map(function (t, r) {
                      return n.a.createElement(O.a, {
                        BtnClassName: t.btnClass,
                        BtnText: t.btnText,
                        multilingualData: e.multilingualData,
                        BtnAction: function (e) {
                          return a(e, t, r, Te);
                        },
                      });
                    })
                )
              ),
            re &&
              "N" == re.showPrimeProp &&
              "Y" !== re.appExclusive &&
              "Y" != re.primeTag &&
              re.contactList &&
              n.a.createElement(
                "div",
                {
                  className:
                    "mb-srp-m__action mb-srp-m__card__action has-shortlist",
                },
                B
                  ? n.a.createElement(u.a, {
                      contactMap: re,
                      carddata: e.cardData,
                      mobile: !0,
                      additionalBeanData: e.additionalBeanData,
                      checkPropSoldOut: !1,
                    })
                  : "",
                null !== re.contactList &&
                  re.contactList.map(function (t, r) {
                    return n.a.createElement(O.a, {
                      BtnClassName: t.btnClass,
                      BtnText: t.btnText,
                      multilingualData: e.multilingualData,
                      BtnAction: function (e) {
                        return a(e, t, r, Te);
                      },
                    });
                  })
              ),
            re &&
              "Y" == re.appExclusive &&
              n.a.createElement(D.a, {
                exclusiveTitleText: "App Exclusive",
                userType: "Owner Property",
                btnText: "View in App",
                BtnAction: function (e) {
                  e.stopPropagation(),
                    Se(
                      Object(R.e)(
                        Oe(
                          {
                            event: "event_tracking",
                            eventName: "revamp_srp_app_download",
                            nonInteraction: !1,
                            eventCategory: "revamp srp - App Download Clicked",
                            eventAction: "app exclusive property",
                            eventLabel: "propertysearch",
                            eventValue: "",
                            cd96: "View in App",
                          },
                          Te
                        )
                      )
                    ),
                    window.open(ke, "_self");
                },
              }),
            re &&
              "Y" !== re.appExclusive &&
              "Y" == re.primeTag &&
              n.a.createElement(D.a, {
                exclusiveTitleText: "MB Prime",
                exclusiveTitleIcon: "mb-srp-m__icon--mbPrime",
                userType: "Exclusive Owner Property",
                btnText: "Unlock with Prime",
                BtnAction: function (e) {
                  e.stopPropagation(), t();
                },
              })
          ),
          Pe &&
            0 < Pe.length &&
            n.a.createElement("script", {
              type: "application/ld+json",
              dangerouslySetInnerHTML: { __html: Pe },
            }),
          Ne &&
            0 < Ne.length &&
            n.a.createElement("script", {
              type: "application/ld+json",
              dangerouslySetInnerHTML: { __html: Ne },
            })
        )
      );
    }
    var Ne = a(349);
    t.a = function (e) {
      var t = e.searchBeanVal,
        a = e.cardData,
        r = e.additionalBeanData,
        o = e.index,
        c = e.showSimiliarProperties,
        i = e.setShowSimiliarProperties,
        l = e.seoSearch,
        s = e.setShowAppDownloadPopup,
        u = e.setAppDownloadLink,
        p = e.isNsr,
        d = e.multilingualData;
      e = e.setTruecallerToast;
      function m(e) {
        return void 0 === e || null == e || "" === e;
      }
      var y = t.search;
      (t = t.category),
        (y =
          "commercial" == y
            ? n.a.createElement(Pe, {
                seoSearch: l,
                cardData: a,
                additionalBeanData: r,
                ind: o,
                searchPage: y,
                category: t,
                showSimiliarProperties: c,
                setShowSimiliarProperties: i,
                setShowAppDownloadPopup: s,
                setAppDownloadLink: u,
                isSortList: !0,
                isNsr: p,
                multilingualData: d,
              })
            : r.isFixedSeoPage ||
              m(a.isVis) ||
              m(r.noBrokerageBuilderVisType) ||
              !r.noBrokerageBuilderVisType
                .toUpperCase()
                .includes(a.isVis.toUpperCase())
            ? n.a.createElement(se, {
                seoSearch: l,
                cardData: a,
                additionalBeanData: r,
                ind: o,
                searchPage: r.searchType,
                category: t,
                showSimiliarProperties: c,
                setShowSimiliarProperties: i,
                setShowAppDownloadPopup: s,
                setAppDownloadLink: u,
                isSortList: !0,
                isNsr: p,
                multilingualData: d,
                setTruecallerToast: e,
              })
            : n.a.createElement(Ne.a, {
                seoSearch: l,
                cardData: a,
                additionalBeanData: r,
                ind: o,
                searchPage: r.searchType,
                category: t,
                showSimiliarProperties: c,
                setShowSimiliarProperties: i,
                setShowAppDownloadPopup: s,
                setAppDownloadLink: u,
                isSortList: !0,
                isNsr: p,
                multilingualData: d,
                isBuilderSimilar: !1,
                isMobile: !0,
              }));
      return n.a.createElement(n.a.Fragment, null, y);
    };
  },
});
//# sourceMappingURL=propertysrp-main-chunk-main~616c332c.c38d7cc048961a145238.js.map
