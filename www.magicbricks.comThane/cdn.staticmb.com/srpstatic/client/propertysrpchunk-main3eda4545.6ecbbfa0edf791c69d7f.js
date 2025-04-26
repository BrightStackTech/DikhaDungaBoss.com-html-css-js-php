(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    102: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      var r = a(573),
        n = a(416),
        o = function (e, t, a, o, i, c, s) {
          null != e.locSeoName && e.lmtDName;
          var u = Object(r.b)().search,
            p = Object(r.b)().pathname + Object(r.b)().search,
            m = {
              templateId: 0,
              propertyType: "",
              locality: "",
              city: "",
              category: "",
              bhk: "",
            },
            d = "",
            b = "",
            f = !1,
            y = !1;
          return (
            !l(p) &&
              p.includes("in-india") &&
              null != t.isSeoSearch &&
              1 == t.isSeoSearch &&
              (f = !0),
            !l(p) && p.includes("low-budget-flats-")
              ? (d = "Low Budget Flat")
              : u.includes("isFlatSearch=Y")
              ? (d = "Flat")
              : (d = (d = (d = (d = (d = (d = e.propTypeD).includes(
                  "Multistorey Apartment"
                )
                  ? d.replace("Multistorey Apartment", "Apartment")
                  : d).includes("Builder Floor Apartment")
                  ? d.replace("Builder Floor Apartment", "Builder Floor")
                  : d).includes("Residential")
                  ? d.replace("Residential", "")
                  : d).includes("Commercial")
                  ? d.replace("Commercial", "")
                  : d).includes("Plot")
                  ? d.replace("Plot", "Plot/Land")
                  : d).includes("Co-working") &&
                (d = d.replace("Co-working", "Coworking")),
            u &&
              !u.includes("/luxury-flats") &&
              u.includes("-pppf") &&
              d.includes("Apartment"),
            l(e.shared) ||
              "Y" != e.shared ||
              (l(e.pgOcc) || "16011" != e.pgOcc
                ? (b += "Shared room in ")
                : (b += "Single room in ")),
            a < 3 &&
            void 0 !== t.cityList &&
            null !== t.cityList &&
            0 < t.cityList.trim().length
              ? ("Y" == i
                  ? (b += "Shared " + d)
                  : "Y" !== i && "10026" == e.ty && "Y" == t.dynamicListing
                  ? (b +=
                      0 < c
                        ? (c = Math.ceil(c)) + " Seats at " + d
                        : "Seats at " + d)
                  : l(e.isCardDesc) || l(e.scdpropdesc)
                  ? l(e.isCardDesc) || l(e.scdpropdescmbl)
                    ? (l(e.bedroomD) || (b += e.bedroomD + " BHK"),
                      (b += " " + d))
                    : (b += e.scdpropdescmbl).includes(" for Sale") &&
                      (b = b.replace(" for Sale", ""))
                  : (b += e.scdpropdesc),
                e.isCardDesc && !l(e.scdcattype)
                  ? (b = b + " " + e.scdcattype)
                  : !l(p) &&
                    (p.includes("pppfs") || p.includes("pppfr")) &&
                    p.includes("-noida-") &&
                    (p.includes("1-") ||
                      p.includes("/2-") ||
                      (p.includes("-noida-") &&
                        (p.includes("1-") || p.includes("/3-"))))
                  ? (b += " in")
                  : !l(e.transType) && 0 < e.transType.trim().length
                  ? (b += " for " + e.transType + " in")
                  : "commercial" == o && (b += " for Sale in"),
                !(
                  "commercial" === o ||
                  l(e.prjname) ||
                  l(t.cityName.value) ||
                  ("Bangalore" != t.cityName.value &&
                    "Chennai" != t.cityName.value &&
                    "Hyderabad" != t.cityName.value &&
                    "Noida" != t.cityName.value)
                ) ||
                  "luxury" === o ||
                  l(e.prjname) ||
                  (null !== t.isSeoSearch && !1 !== t.isSeoSearch) ||
                  (b += " " + e.prjname + ","),
                e.isCardDesc && !l(e.scdloc) && 0 < e.scdloc.trim().length
                  ? (b += " " + e.scdloc)
                  : (e &&
                    e.DSLogicDist &&
                    "0.0" != e.DSLogicDist &&
                    e.locSeoName &&
                    e.urlLocName
                      ? (b +=
                          " " +
                          e.locSeoName +
                          " near " +
                          e.urlLocName +
                          " " +
                          e.ctName)
                      : (l(e.urlLocName) || 1 != t.isSeoSearch
                          ? l(e.lmtDName)
                            ? l(e.ltOther) || (b += " " + e.ltOther)
                            : (b += " " + e.lmtDName)
                          : (b += " " + e.urlLocName),
                        (b += " " + e.ctName)),
                    (y = !0)))
              : ("Y" == i
                  ? (b += "Shared " + d)
                  : "Y" !== i && "10026" == e.ty && "Y" == t.dynamicListing
                  ? (b +=
                      0 < c
                        ? (c = Math.ceil(c)) + " Seats at " + d
                        : "Seats at " + d)
                  : l(e.isCardDesc) || l(e.scdpropdesc)
                  ? l(e.isCardDesc) || l(e.scdpropdescmbl)
                    ? (l(e.bedroomD) || (b += e.bedroomD + " BHK"),
                      l(t.intentSeoSlug) || t.intentSeoSlug,
                      (b += " " + d))
                    : (b += e.scdpropdescmbl).includes(" for Sale") &&
                      (b = b.replace("for Sale", ""))
                  : (b += e.scdpropdesc),
                l(e.isCardDesc) || l(e.scdcattype)
                  ? !l(p) &&
                    (p.includes("pppfs") || p.includes("pppfr")) &&
                    p.includes("-noida-") &&
                    (p.includes("1-") ||
                      p.includes("/2-") ||
                      (p.includes("-noida-") &&
                        (p.includes("1-") || p.includes("/3-"))))
                    ? (b += " in")
                    : !l(e.transType) && 0 < e.transType.trim().length
                    ? (b += " for " + e.transType + " in")
                    : "commercial" == o && (b += " for Sale in")
                  : (b += " " + e.scdcattype),
                !(
                  "commercial" === o ||
                  l(e.prjname) ||
                  !t.cityName ||
                  l(t.cityName.value) ||
                  ("Bangalore" != t.cityName.value &&
                    "Chennai" != t.cityName.value &&
                    "Hyderabad" != t.cityName.value &&
                    "Noida" != t.cityName.value)
                ) ||
                  "luxury" === o ||
                  l(e.prjname) ||
                  (null !== t.isSeoSearch && !1 !== t.isSeoSearch) ||
                  (b += " " + e.prjname + ","),
                e.isCardDesc && !l(e.scdloc) && 1 < e.scdloc.trim().length
                  ? ((b += " " + e.scdloc),
                    !l(e.ctName) && e.scdloc.includes(e.ctName) && (y = !0))
                  : (e &&
                    e.DSLogicDist &&
                    "0.0" != e.DSLogicDist &&
                    e.locSeoName &&
                    e.urlLocName
                      ? (b +=
                          " " +
                          e.locSeoName +
                          " near " +
                          e.urlLocName +
                          " " +
                          e.ctName)
                      : (l(e.urlLocName) || 1 != t.isSeoSearch
                          ? l(e.lmtDName)
                            ? l(e.ltOther) || (b += " " + e.ltOther)
                            : (b += " " + e.lmtDName)
                          : (b += " " + e.urlLocName),
                        (b += " " + e.ctName)),
                    (y = !0))),
            l(e.distance) || (b += " " + e.distance),
            f &&
              !l(b) &&
              (y || l(e.ctName)
                ? (b += ", India")
                : (b = b + ", " + e.ctName + ", India")),
            b.includes("Coworking") &&
              ((u = " "),
              l(e.brandName) || (u = "by " + e.brandName + " "),
              (b = b.replace("for Rent ", u)),
              y || (b = b + ", " + e.ctName)),
            Object(n.a)(s)
              ? (!l(p) &&
                  p.includes("coworking") &&
                  ((m.templateId = 4),
                  (m.brandName = l(e.brandName)
                    ? e.brandName
                    : e.brandName.trim())),
                !l(p) && p.includes("for-sale")
                  ? !l(d) &&
                    (d.includes("Shop") ||
                      d.includes("Plot/Land") ||
                      d.includes("Showroom"))
                    ? (m.templateId = 2)
                    : (m.templateId = 0)
                  : !l(p) &&
                    p.includes("for-rent") &&
                    (!l(d) &&
                    (d.includes("Shop") ||
                      d.includes("Plot/Land") ||
                      d.includes("Showroom"))
                      ? (m.templateId = 3)
                      : (m.templateId = 1)),
                (m.propertyType = l(d) ? "" : d.trim()),
                (m.locality = l(e.locSeoName)
                  ? e.ltOther
                  : e.locSeoName.trim()),
                (m.city = l(e.ctName) ? "" : e.ctName.trim()),
                (m.bhk = l(e.bedroomD) ? "" : e.bedroomD.trim() + " " + s.BHK),
                (a = m),
                (c = (i = s).cardTitle[a.templateId]),
                (c = (c = a.propertyType
                  ? c.replace(
                      "$propertyType",
                      null != i && i.hasOwnProperty(a.propertyType)
                        ? i[a.propertyType]
                        : a.propertyType
                    )
                  : c).replace(
                  "$bhk",
                  null != i && i.hasOwnProperty(a.bhk) ? i[a.bhk] : a.bhk
                )),
                a.locality &&
                  (c = c.replace(
                    "$locality",
                    null != i && i.hasOwnProperty(a.locality)
                      ? i[a.locality]
                      : a.locality
                  )),
                a.city &&
                  (c = c.replace(
                    "$city",
                    null != i && i.hasOwnProperty(a.city) ? i[a.city] : a.city
                  )),
                a.brandName
                  ? c.replace(
                      "$brandName",
                      null != i && i.hasOwnProperty(a.brandName)
                        ? i[a.brandName]
                        : a.brandName
                    )
                  : c)
              : b
          );
        };
      function l(e) {
        return void 0 === e || null == e || "" === e.trim();
      }
    },
    103: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      }),
        a(6);
      var r = function (e, t, a, r, o) {
        var l = "",
          i = "",
          c = "";
        return (
          n(t.alliance) || (i = "?alliance=" + t.alliance),
          n(e.primSpons) || "Y" != e.primSpons
            ? n(e.secSpons) ||
              "Y" != e.secSpons ||
              (l = n(i)
                ? "?sem=Y&semsrc=CPLADS_" +
                  (a + 1) +
                  "_PDP_New_Web&slot=" +
                  (a + 1)
                : "&sem=Y&semsrc=CPLADS_" +
                  (a + 1) +
                  "_PDP_New_Web&slot=" +
                  (a + 1))
            : (l = n(i)
                ? "?sem=Y&semsrc=CPLADS_" +
                  (a + 1) +
                  "_PDP_Existing_Web&slot=" +
                  (a + 1)
                : "&sem=Y&semsrc=CPLADS_" +
                  (a + 1) +
                  "_PDP_Existing_Web&slot=" +
                  (a + 1)),
          n(e.auc)
            ? (c = r + e.url)
            : !n(e.auc) && e.auc.includes("auction")
            ? (c = o + e.aucType + "/propertyDetails/" + e.url)
            : n(e.auc) || e.auc.includes("auction") || (c = r + e.url),
          c + i + l
        );
      };
      function n(e) {
        return void 0 === e || null == e || "" === e;
      }
    },
    115: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return n;
      });
      var r = a(9),
        n = function (e, t, a, n) {
          var o,
            l = null,
            i = ((n = n + "/" + e.projectSocietyLink), e.prjname);
          return (
            "luxury" != a || Object(r.k)(e.devName) || (o = e.devName),
            (("commercial" != a || Object(r.k)(e.prjname)) &&
              (Object(r.k)(e.prjname) ||
                !t.cityName ||
                Object(r.k)(t.cityName.value) ||
                ("Bangalore" != t.cityName.value &&
                  "Chennai" != t.cityName.value &&
                  "Hyderabad" != t.cityName.value &&
                  "Noida" != t.cityName.value))) ||
              !Object(r.k)(t.alliance) ||
              ("commercial" == a && "10007" == e.ty
                ? (l = "Office Complex")
                : "commercial" == a && "10026" == e.ty
                ? (l = "Building")
                : "commercial" == a &&
                  "10007" !== e.ty &&
                  (l = "Commercial Complex")),
            { societyLabel: l, projectUrl: n, societyName: i, devName: o }
          );
        };
    },
    116: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      });
      var r = function (e, t) {
        return (t = (function (e) {
          if (void 0 === e || null == e || "" === e) return 1;
        })(e.isCardDesc)
          ? e.propertyTitle
          : t
          ? e.scdimgaltmbl
          : e.scdimgalt);
      };
    },
    135: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      });
      var r = function (e, t, a) {
        var r = [];
        return (
          (n(e.auc) || "Y" != e.auc) &&
            ((n(e.pmtUsp) && n(e.pmtUsp1) && n(e.pmtUsp2)) ||
              (n(e.pmtUsp) ||
                (e.pmtUsp.startsWith("AUTO_DES")
                  ? r.push(e.pmtUsp.substring(e.pmtUsp.indexOf("AUTO_DES") + 1))
                  : r.push(e.pmtUsp)),
              n(e.pmtUsp1) ||
                (e.pmtUsp1.startsWith("AUTO_DES")
                  ? r.push(
                      e.pmtUsp1.substring(e.pmtUsp1.indexOf("AUTO_DES") + 1)
                    )
                  : r.push(e.pmtUsp1)),
              n(e.pmtUsp2)) ||
              (e.pmtUsp2.startsWith("AUTO_DES")
                ? r.push(e.pmtUsp2.substring(e.pmtUsp2.indexOf("AUTO_DES") + 1))
                : r.push(e.pmtUsp2)),
            (!n(e.investorlisting) && "Y" == e.investorlisting) ||
              (n(e.investorlisting) &&
                "Project" == e.pmtSource &&
                "plot" == t &&
                !n(e.pp) &&
                "B" == e.pp)) &&
            (n(e.prjHl1) || r.push(e.prjHl1),
            n(e.prjLtHl1) || r.push(e.prjLtHl1)),
          n(e.appovedAuthC) ||
            "plot" != t ||
            0 != a ||
            r.push("Approved by " + e.appovedAuthC),
          r
        );
      };
      function n(e) {
        return void 0 === e || null == e || "" === e;
      }
    },
    1351: function (e, t, a) {},
    1352: function (e, t, a) {},
    1353: function (e, t, a) {
      "use strict";
      a(0), a(22);
    },
    1354: function (e, t, a) {
      "use strict";
      a(0), a(22);
    },
    136: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      });
      var r = function (e, t) {
        var a = null,
          r = null;
        return (
          n(e.cwDiscount) || 0 === e.cwDiscount
            ? n(t) || "true" != t || n(e.isNriPreferred) || n(e.dealDesc)
              ? n(e.dealDesc) || ((a = "OFFER"), (r = e.dealDesc))
              : ((a = "NRI OFFER"), (r = e.dealDesc))
            : ((a = "OFFER"), (r = "Get Upto " + e.cwDiscount + "% Off")),
          { offerLbl: a, offerText: r }
        );
      };
      function n(e) {
        return void 0 === e || null == e || "" === e;
      }
    },
    137: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r),
        o = ((r = (a(52), a(22))), a.n(r));
      t.a = function (e) {
        var t,
          a = e.priceMap,
          r = e.multilingualData;
        return n.a.createElement(
          n.a.Fragment,
          null,
          null != a &&
            a.finalPrice &&
            n.a.createElement(
              n.a.Fragment,
              null,
              "Call for Price" !== a.finalPrice
                ? n.a.createElement(
                    "span",
                    { className: "rupees" },
                    o()("&#8377;")
                  )
                : "",
              ((e = a.finalPrice),
              (t = ""),
              ("sqft" !== e && e.includes("sqft")) ||
              ("Lac" !== e && e.includes("Lac")) ||
              ("Cr" !== e && e.includes("Cr"))
                ? e.split(" ").forEach(function (e) {
                    t += (null != r && r.hasOwnProperty(e) ? r[e] : e) + " ";
                  })
                : (t = null != r && r.hasOwnProperty(e) ? r[e] : e),
              t)
            )
        );
      };
    },
    138: function (e, t, a) {
      "use strict";
      function r(e) {
        var t = Object(l.d)(function (e) {
            return e.multilingualData;
          }),
          a = e.filterValue.name;
        return (
          t &&
            a &&
            (-1 != a.indexOf("BHK")
              ? (a = a.replace("BHK", t.BHK))
              : t[a] && (a = t[a])),
          o.a.createElement(
            "div",
            { className: "floating-filter__item" },
            o.a.createElement("input", {
              className: "floating-filter__item__input",
              onChange: function () {
                e.onChange(e.filterValue);
              },
              type: "checkbox",
              value: e.filterValue.value,
              name: e.filterValue.cat,
              id: e.filterValue.id + "-" + e.key,
            }),
            o.a.createElement(
              "label",
              {
                className: "floating-filter__item__label",
                htmlFor: e.filterValue.id + "-" + e.key,
              },
              a
            )
          )
        );
      }
      var n = a(0),
        o = a.n(n),
        l = a(2);
      t.a = function (e) {
        var t = Object(l.d)(function (e) {
          return e.multilingualData;
        });
        return o.a.createElement(
          "div",
          { className: "floating-filter" },
          o.a.createElement(
            "div",
            { className: "floating-filter__wrap single-line" },
            o.a.createElement(
              "div",
              { className: "floating-filter__column " + e.columModifierClass },
              o.a.createElement(
                "div",
                { className: "floating-filter__heading" },
                t && t[e.heading] ? t[e.heading] : e.heading
              )
            ),
            o.a.createElement(
              "div",
              { className: "floating-filter__column " + e.columModifierClass },
              e.filterdata.filters.map(function (t, a) {
                return o.a.createElement(r, {
                  filterValue: t,
                  key: a,
                  onChange: e.onSelectionChange,
                });
              })
            )
          )
        );
      };
    },
    139: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r);
      t.a = function (e) {
        function t(e) {
          return null != l && l.hasOwnProperty(e) ? l[e] : e;
        }
        var a = e.BtnClassName,
          r = e.BtnText,
          o = e.BtnAction,
          l = e.multilingualData;
        return "Know More" == r || "Call" == r
          ? n.a.createElement(
              n.a.Fragment,
              null,
              "Know More" == r
                ? n.a.createElement(
                    "a",
                    {
                      href: "tel:08068386851",
                      className: "".concat(a),
                      onClick: o,
                    },
                    t(r && r.trim())
                  )
                : n.a.createElement(
                    "a",
                    {
                      href: "tel:08068386852",
                      className: "".concat(a),
                      onClick: o,
                    },
                    t("Call")
                  )
            )
          : n.a.createElement(
              n.a.Fragment,
              null,
              n.a.createElement(
                "span",
                { className: "".concat(a), onClick: o },
                t(r && r.trim())
              )
            );
      };
    },
    156: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      });
      var r = function (e) {
        return "Y" == e.nriUser
          ? { cm15: e.nriPrefProps, cm16: e.nriPaidProps }
          : {};
      };
    },
    158: function (e, t, a) {
      "use strict";
      a.d(t, "d", function () {
        return r;
      }),
        a.d(t, "a", function () {
          return n;
        }),
        a.d(t, "c", function () {
          return o;
        }),
        a.d(t, "b", function () {
          return l;
        });
      var r = function (e, t, a, r, n, o, l, c, s) {
          var u = [],
            p = "";
          return (
            (0 < t ||
              0 < e ||
              ("Y" == a &&
                ("undefined" == n ||
                  "" == n ||
                  ("undefined" !== n && !n.includes("nestaway.com"))))) &&
              (0 < t || 0 < e
                ? (p = "agentDetail")
                : i(c.crisilStarRating) || (p = "certifiedAgent"),
              u.push({
                icon: "agent-certified",
                text: "Certified Agent",
                toolTip: p,
              }),
              "Y" !== r &&
                "R" == l &&
                null != t &&
                0 < t &&
                u.push({ icon: "society-expert", text: "Society Expert" }),
              null != e) &&
              0 < e &&
              u.push({
                icon: "locality-superstar",
                text: "Locality Superstar",
              }),
            null != r && "Y" == r && "commercial" == s
              ? u.push({
                  icon: "commercial-guru",
                  text: "Commercial Guru",
                  toolTip: (p = "commercialGuru"),
                })
              : ((void 0 !== c && !i(c.cc) && 1 < c.cc) ||
                  (!i(c.ccc) && 1 < c.ccc) ||
                  ("Agent" == c.userType &&
                    !i(c.isprimeListingType) &&
                    "true" == c.isprimeListingType)) &&
                (((!i(c.cc) && 1 < c.cc) || (!i(c.ccc) && 1 < c.ccc)) &&
                  u.push({
                    icon: "commercial-consultant",
                    text: "Commercial Consultant",
                    toolTip: (p = "commercialConsultant"),
                  }),
                i(c.criLogo) ||
                  u.push({
                    icon: "crisil-certified",
                    text: "Crisil Certified",
                    toolTip: "crisilCertified",
                  })),
            u
          );
        },
        n = function (e) {
          var t = null;
          return (
            i(e.userType) ||
              "Agent" != e.userType ||
              i(e.criLogo) ||
              ("12021" == e.criLogo
                ? (t = {
                    tagIcon: "crisil-gold-agent",
                    tagText: "Crisil Gold Agent",
                  })
                : "12022" == e.criLogo
                ? (t = {
                    tagIcon: "crisil-silver-agent",
                    tagText: "Crisil Silver Agent",
                  })
                : "12023" == e.criLogo
                ? (t = {
                    tagIcon: "crisil-bronze-agent",
                    tagText: "Crisil Bronze Agent",
                  })
                : "12024" == e.criLogo &&
                  (t = {
                    tagIcon: "crisil-platinum-agent",
                    tagText: "Crisil Platinum Agent",
                  })),
            t
          );
        },
        o = function (e) {
          for (var t = "", a = 0; a < e.length; a++)
            if (!i(e[a].toolTip)) {
              t = e[a].toolTip;
              break;
            }
          return t;
        },
        l = function (e) {
          var t = [];
          return (
            "Y" == e.isPaidUser &&
              "Owner" == e.userType &&
              !i(e.sid) &&
              (e.sid.includes("13538") ||
                e.sid.includes("13502") ||
                e.sid.includes("13534") ||
                e.sid.includes("13535")) &&
              t.push({
                clsName:
                  "mb-srp__card__memcatgry mb-srp__card__memcatgry--premium",
                text: "Premium Member",
              }),
            t
          );
        };
      function i(e) {
        return void 0 === e || null == e || "" === e;
      }
    },
    160: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return s;
      });
      var r = a(34),
        n = a(1),
        o = a(6);
      function l(e) {
        return (l =
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
      function c(e) {
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
                        if ("object" !== l(e) || null === e) return e;
                        var a = e[Symbol.toPrimitive];
                        if (void 0 === a) return String(e);
                        if ("object" !== l((a = a.call(e, "string")))) return a;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === l(e) ? e : String(e)
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
      var s = function (e, t, a, l, i, s, p, m, d) {
        var b = [],
          f = "N",
          y = ((a = ""), "N"),
          g =
            ("N" != e.isPaidUser ||
              "Owner" != e.userType ||
              0 != s ||
              u(p.userPrimeMemberLoggedIn) ||
              p.userPrimeMemberLoggedIn,
            s ? "mb-srp-m__action--" : "mb-srp__action--"),
          v = !1,
          h = u(t.serviceIdsForSimilarCta)
            ? []
            : t.serviceIdsForSimilarCta.split(","),
          _ =
            ((h =
              (!u(e.sid) &&
                0 < h.length &&
                (u(
                  (h = h.findIndex(function (t) {
                    return e.sid.includes(t);
                  }))
                ) ||
                  -1 == h ||
                  (v = !0)),
              !1)),
            ["13538", "13502", "13534", "13535"]),
          S =
            ((_ =
              (!u(e.sid) &&
                0 < _.length &&
                "Y" == e.isPaidUser &&
                "Owner" == e.userType &&
                (u(
                  (_ = _.findIndex(function (t) {
                    return e.sid.includes(t);
                  }))
                ) ||
                  -1 == _ ||
                  (h = !0)),
              u(p.userPrimeMemberLoggedIn) ||
              "Y" != p.userPrimeMemberLoggedIn ||
              u(e.pp) ||
              "I" != e.pp ||
              u(e.isPrimeLocProp) ||
              "Y" != e.isPrimeLocProp ||
              0 != v
                ? u(e.pmp) ||
                  "Y" != e.pmp ||
                  u(e.isPrimeLocProp) ||
                  "Y" != e.isPrimeLocProp
                  ? u(t.appExcWebCities) ||
                    "Y" != t.appExcWebCities ||
                    u(e.tag) ||
                    ("MAGICBRICKS EXCLUSIVE" != e.tag &&
                      "Exclusively on Magicbricks" != e.tag) ||
                    u(e.pp) ||
                    "I" != e.pp ||
                    u(e.isPaidUser) ||
                    "N" != e.isPaidUser ||
                    (a = "Y")
                  : (l = "Y")
                : (y = "Y"),
              u(l) ||
                "Y" != l ||
                (b.push({
                  btnClass: g + "btn medium btn-red",
                  btnText: "Unlock with Prime",
                }),
                b.push({
                  btnClass: g + "btn medium btn-white btn-locked-contact",
                  btnText: "Get Phone No.",
                }),
                (f = "Y")),
              null)),
            null);
        "undefined" != typeof document &&
          ((_ = null != o.a && o.a.readCookie("virtualNumberData")),
          (S = null != o.a && o.a.readCookie("contactCookie"))),
          (d =
            t.vnEnableOnStartup &&
            1 == (null == d ? void 0 : d.showVirtualNumberFlow) &&
            (1 == (null == d ? void 0 : d.virtualNumberDataAvailable) ||
              null != _)),
          (d = !(
            null != S ||
            !t.vnEnableOnStartup ||
            "false" != t.isNRIUser ||
            null != (null == p ? void 0 : p.hmacCode) ||
            "N" != (null == p ? void 0 : p.isUserLoggedIn)
          )),
          (_ =
            Object(n.A)().includes(e.ct) ||
            "false" != t.isNRIUser ||
            null != (null == p ? void 0 : p.hmacCode) ||
            "N" != (null == p ? void 0 : p.isUserLoggedIn)
              ? ""
              : " btn-black wi-whatsapp"),
          (S = 1 == d ? " vnum-cta-green vnum-cta-green__large" : "");
        return (
          (!u(e.adOwnerProp) && "Y" === e.adOwnerProp) ||
            (!u(a) && "Y" === a) ||
            (!u(l) && "Y" === l) ||
            (u(e.investorlisting) ||
            "Y" != e.investorlisting ||
            (null != e.pp && "" != e.pp && "Z" === e.pp)
              ? u(t.showreqcallbk) ||
                "Y" != t.showreqcallbk ||
                "N" != e.isPaidUser ||
                "Owner" != e.userType ||
                u(e.isPrimeLocProp) ||
                "Y" != e.isPrimeLocProp
                ? v && (u(m) || 0 == m)
                  ? b.push({
                      btnClass: g + "btn medium btn-red",
                      btnText: "Show Similar",
                    })
                  : !u(e.sid) &&
                    e.sid.includes("1600000") &&
                    "Builder" == e.userType
                  ? b.push({
                      btnClass: g + "btn medium btn-white" + _,
                      btnText: "Request Callback",
                    })
                  : "10026" === e.ty
                  ? b.push({
                      btnClass: g + "btn medium btn-red" + S,
                      btnText: 1 == d ? "Call MB Expert" : "Contact MB Expert",
                    })
                  : ((a = "Contact"),
                    u(e.auc) || "Y" != e.auc
                      ? (d && (a = "Call"),
                        "plot" == i && "Builder" == e.userType
                          ? d ||
                            u(e.isVis) ||
                            !"Z".toUpperCase().includes(e.isVis.toUpperCase())
                            ? (a += " Developer")
                            : (a = "Get Info")
                          : "Builder" == e.userType &&
                            !u(e.isVis) &&
                            "Z".toUpperCase().includes(e.isVis.toUpperCase())
                          ? d
                            ? (a += " Developer")
                            : (a = "Get Info")
                          : (a += " " + e.userType))
                      : (a += " Now"),
                    b.push({
                      btnClass: g + "btn medium btn-red" + S,
                      btnText: "".concat(a),
                    }))
                : !u(t.isNRIUser) &&
                  "false" == t.isNRIUser &&
                  null != (a = t.freeOwnerContactedIds) &&
                  "" != a &&
                  a.toString().includes(e.id)
                ? b.push({
                    btnClass: g + "btn medium btn-red" + S,
                    btnText: "Call Owner",
                  })
                : b.push({
                    btnClass: g + "btn medium btn-red" + S,
                    btnText: 1 == d ? "Call Owner" : "Ask Owner to Call",
                  })
              : v && (u(m) || 0 == m)
              ? b.push({
                  btnClass: g + "btn medium btn-red",
                  btnText: "Show Similar",
                })
              : (!u(e.sid) &&
                  e.sid.includes("1600000") &&
                  "Builder" == e.userType) ||
                (!u(e.pp) &&
                  !u(e.sid) &&
                  "B" == e.pp &&
                  e.sid.includes("1600000"))
              ? b.push({
                  btnClass: g + "btn medium btn-white" + _,
                  btnText: "Request Callback",
                })
              : "plot" == i
              ? d
                ? b.push({
                    btnClass: g + "btn medium btn-red" + S,
                    btnText: "Call Developer",
                  })
                : !u(e.isVis) &&
                  "Z".toUpperCase().includes(e.isVis.toUpperCase())
                ? b.push({
                    btnClass: g + "btn medium btn-red",
                    btnText: "Get Info",
                  })
                : b.push({
                    btnClass: g + "btn medium btn-red",
                    btnText: "Contact Developer",
                  })
              : d
              ? b.push({
                  btnClass: g + "btn medium btn-red" + S,
                  btnText: "Call Builder",
                })
              : !u(e.isVis) && "Z".toUpperCase().includes(e.isVis.toUpperCase())
              ? b.push({
                  btnClass: g + "btn medium btn-red",
                  btnText: "Get Info",
                })
              : b.push({
                  btnClass: g + "btn medium btn-red",
                  btnText: "Contact Builder",
                }),
            t.isContactedPage
              ? b.push({
                  btnClass: g + "btn medium btn-white",
                  btnText: "Share Feedback",
                })
              : u(e.investorlisting) ||
                "Y" != e.investorlisting ||
                (!u(e.investorguide) && "N" != e.investorguide) ||
                (null != e.pp && "" != e.pp && "Z" === e.pp)
              ? "10026" !== e.ty &&
                (e &&
                e.ctaDetailBean &&
                e.ctaDetailBean.cta2 &&
                e.cg &&
                ("r" == e.cg || ("r" != e.cg && p.userUniqToken))
                  ? ("Y" == p.userPrimeMemberLoggedIn &&
                      ((e.ctaDetailBean.cta2 = "Check Availability"),
                      (e.ctaDetailBean.formheader = "Enter your WhatsApp No."),
                      (e.ctaDetailBean.formsubheader =
                        "to get Availability Confirmation from the Owner")),
                    b.push({
                      btnClass: g + "btn medium btn-white",
                      btnText: e.ctaDetailBean.cta2,
                    }))
                  : u(e.liveVidTour) &&
                    u(e.futureVidTour) &&
                    u(e.isVTReqEligible) &&
                    (u(t.showreqcallbk) ||
                    "Y" != t.showreqcallbk ||
                    "N" != e.isPaidUser ||
                    "Owner" != e.userType ||
                    u(e.isPrimeLocProp) ||
                    "Y" != e.isPrimeLocProp
                      ? u(e.isVis) || "Y" != e.isVis
                        ? (!u(e.b2cEnabledCity) &&
                            "N" == e.isPaidUser &&
                            "Owner" == e.userType) ||
                          !u(e.b2cEnabledCity) ||
                          u(e.isVis) ||
                          u(e.userType) ||
                          "Builder" != e.userType ||
                          !"Z".toUpperCase().includes(e.isVis.toUpperCase())
                          ? b.push({
                              btnClass: g + "btn medium btn-white" + _,
                              btnText: "Get Phone No.",
                            })
                          : b.push({
                              btnClass: g + "btn medium btn-white" + _,
                              btnText: "Request Callback",
                            })
                        : u(t.isNRIUser) || "true" != t.isNRIUser
                        ? u(e.isVis) ||
                          u(e.userType) ||
                          "Builder" != e.userType ||
                          !"Z".toUpperCase().includes(e.isVis.toUpperCase())
                          ? b.push({
                              btnClass: g + "btn medium btn-white" + _,
                              btnText: "Enquire Now",
                            })
                          : b.push({
                              btnClass: g + "btn medium btn-white" + _,
                              btnText: "Request Callback",
                            })
                        : b.push({
                            btnClass: g + "btn medium btn-white",
                            btnText: "Get Phone No.",
                          })
                      : u(t.isNRIUser) || "false" != t.isNRIUser
                      ? b.push({
                          btnClass: g + "btn medium btn-white",
                          btnText: "Send Enquiry",
                        })
                      : null != (a = t.freeOwnerContactedIds) &&
                        "" != a &&
                        a.toString().includes(e.id)
                      ? b.push({
                          btnClass: g + "btn medium btn-white" + _,
                          btnText: "Get Phone No.",
                        })
                      : b.push({
                          btnClass:
                            g +
                            "btn medium btn-white mb-srp__prime-preContact--btn-disable" +
                            _,
                          btnText: "Get Phone No.",
                        })))
              : b.push({
                  btnClass: g + "btn medium btn-white" + _,
                  btnText: "Request Callback",
                }),
            (m = ""),
            u(e.isVTReqEligible) || (m = "Take Video Tour"),
            u(e.futureVidTour) ||
              "Y" != e.futureVidTour ||
              (m = "Take Video Tour"),
            u(e.liveVidTour) || "Y" != e.liveVidTour || (m = "Join Live Tour"),
            t.isContactedPage ||
              u(m) ||
              "10026" === e.ty ||
              0 != v ||
              (0 ==
                b.filter(function (e) {
                  return e && "Get Phone No." == e.btnText;
                }).length &&
                b.push({
                  btnClass: g + "btn medium btn-white" + _,
                  btnText: "Get Phone No.",
                })),
            u(e.liveVidTour) &&
              u(e.futureVidTour) &&
              u(e.isVTReqEligible) &&
              !u(e.investorlisting) &&
              "Y" !== e.investorlisting &&
              ("N" != e.isPaidUser ||
                "Owner" != e.userType ||
                u(e.isPrimeLocProp) ||
                e.isPrimeLocProp),
            s) ||
            t.isContactedPage ||
            ((u(l) || "Y" !== l) &&
              u(e.liveVidTour) &&
              u(e.futureVidTour) &&
              u(e.isVTReqEligible) &&
              "commercial" !== i &&
              0 == v &&
              b.push({ btnClass: g + "link", btnText: "Share Feedback" })),
          "10026" === e.ty &&
            b.push({
              btnClass: g + "btn medium btn-white",
              btnText: "Get Best Price",
            }),
          (b = b.map(function (t) {
            return c(c({}, t), {}, { btnText: Object(r.d)(p, t.btnText, e) });
          })),
          {
            primeTag: "".concat(f),
            contactList: b,
            showPrimeProp: y,
            isPremiumMember: h,
          }
        );
      };
      function u(e) {
        return void 0 === e || null == e || "" === e;
      }
    },
    161: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return u;
      });
      var r = a(25),
        n = a(1),
        o = a(34),
        l = a(6);
      function i(e) {
        return (i =
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
      function s(e) {
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
                        if ("object" !== i(e) || null === e) return e;
                        var a = e[Symbol.toPrimitive];
                        if (void 0 === a) return String(e);
                        if ("object" !== i((a = a.call(e, "string")))) return a;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === i(e) ? e : String(e)
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
      var u = function (e, t, a, i, c, u, m, d, b, f, y) {
        var g,
          v,
          h = [],
          _ = "N",
          S = ((a = ""), "mb-srp-m__action--"),
          T = "N",
          N = "N",
          P = (Object(n.c)(m), !1),
          O = p(t.serviceIdsForSimilarCta)
            ? []
            : t.serviceIdsForSimilarCta.split(","),
          E =
            ((O =
              (!p(e.sid) &&
                0 < O.length &&
                (p(
                  (O = O.findIndex(function (t) {
                    return e.sid.includes(t);
                  }))
                ) ||
                  -1 == O ||
                  (P = !0)),
              !1)),
            ["13538", "13502", "13534", "13535"]);
        !p(e.sid) &&
          0 < E.length &&
          "Y" == e.isPaidUser &&
          "Owner" == e.userType &&
          (p(
            (E = E.findIndex(function (t) {
              return e.sid.includes(t);
            }))
          ) ||
            -1 == E ||
            (O = !0)),
          p(m.userPrimeMemberLoggedIn) ||
          "Y" != m.userPrimeMemberLoggedIn ||
          p(e.isPrimeLocProp) ||
          "Y" != e.isPrimeLocProp ||
          p(e.pp) ||
          "I" != e.pp ||
          p(e.isPaidUser) ||
          "Y" != e.isPaidUser ||
          0 != P
            ? !Object(r.a)() ||
              p(e.pp) ||
              "I" != e.pp ||
              p(e.isPaidUser) ||
              "N" != e.isPaidUser ||
              p(e.isPrimeLocProp) ||
              "Y" != e.isPrimeLocProp ||
              p(e.pmp) ||
              "Y" != e.pmp
              ? p(e.cg) ||
                "r" != e.cg ||
                p(e.ct) ||
                !["5196", "2060"].includes(e.ct) ||
                p(e.pmp) ||
                "Y" != e.pmp ||
                p(e.isPrimeLocProp) ||
                "Y" != e.isPrimeLocProp
                ? p(e.pp) ||
                  "I" != e.pp ||
                  p(e.isPrimeLocProp) ||
                  "Y" != e.isPrimeLocProp ||
                  p(e.isPaidUser) ||
                  "N" != e.isPaidUser
                  ? p(e.pp) ||
                    "I" != e.pp ||
                    p(e.isPrimeLocProp) ||
                    "Y" != e.isPrimeLocProp ||
                    p(e.isPaidUser) ||
                    "N" != e.isPaidUser
                    ? p(e.pp) ||
                      "I" != e.pp ||
                      p(e.isPrimeLocProp) ||
                      "Y" != e.isPrimeLocProp ||
                      p(e.isPaidUser) ||
                      "Y" != e.isPaidUser
                      ? p(t.appExcWebCities) ||
                        "Y" != t.appExcWebCities ||
                        p(e.tag) ||
                        ("MAGICBRICKS EXCLUSIVE" != e.tag &&
                          "Exclusively on Magicbricks" != e.tag) ||
                        p(e.pp) ||
                        "I" != e.pp ||
                        p(e.isPaidUser) ||
                        "N" != e.isPaidUser ||
                        (a = "Y")
                      : (g = "N")
                    : (g = "Y")
                  : p(d) ||
                    "N" != d.showAppExclusiveCTA ||
                    p(e.cpmp) ||
                    "Y" != e.cpmp ||
                    (!Object(n.v)(b) && 0 != Object.keys(b).length)
                  ? (g = "Y")
                  : ((g = "N"), (N = "Y"))
                : ((i = "Y"),
                  p(m.userPrimeMemberLoggedIn) ||
                    "Y" != m.userPrimeMemberLoggedIn ||
                    ((i = "N"), (T = "Y")))
              : (i = "Y")
            : (T = "Y"),
          "Y" != g ||
            p(e.cg) ||
            "r" == e.cg ||
            p(t.cityName) ||
            p(t.cityName.key) ||
            "5196,2624,2944,2951,6146,6403,7045".includes(t.cityName.key) ||
            (!p(m) && !p(m.userUniqToken)) ||
            (g = "N"),
          ((p(t.cityName) ||
            5196 != t.cityName.key ||
            p(e.cg) ||
            "r" == e.cg ||
            (!p(m) && !p(m.userUniqToken))) &&
            (p(t.cityName) ||
              5196 != t.cityName.key ||
              p(e.cg) ||
              "r" == e.cg ||
              p(m) ||
              p(m.userUniqToken) ||
              (!p(e.cpmp) && "Y" == e.cpmp))) ||
            (g = "N"),
          p(m.userUniqToken) && !p(e.cg) && "r" != e.cg && (g = "N"),
          p(i) ||
            "Y" != i ||
            (h.push({
              btnClass: S + "btn medium btn-white",
              btnText: "Unlock with Prime",
            }),
            (_ = "Y"),
            null != u &&
              (0 == u.length ||
                (0 < u.length &&
                  0 ==
                    u.filter(function (e) {
                      return e && null != e.tagText && "MB Prime" === e.tagText;
                    }).length)) &&
              (u.push({
                classText: "mb-srp-m__card__tags--mb-prime",
                tagText: "MB Prime",
              }),
              (u = u.reverse()))),
          (E = ""),
          p(e.isVTReqEligible) || (E = "Take Video Tour"),
          p(e.futureVidTour) ||
            "Y" != e.futureVidTour ||
            (E = "Take Video Tour"),
          p(e.liveVidTour) || "Y" != e.liveVidTour || (E = "Join Live Tour"),
          "10026" === e.ty &&
            h.push({
              btnClass: S + "btn medium btn-white",
              btnText: "Get Best Price",
            }),
          (d = null),
          (b = null),
          "undefined" != typeof document &&
            ((d = null != l.a && l.a.readCookie("virtualNumberData")),
            (b = null != l.a && l.a.readCookie("contactCookie"))),
          (u =
            1 == (null == f ? void 0 : f.showVirtualNumberFlow) &&
            (1 == (null == f ? void 0 : f.virtualNumberDataAvailable) ||
              null != d)),
          (u = !(
            (null != f && f.virtualNumberLimitExhaust) ||
            null != b ||
            !t.vnEnableOnStartup ||
            "false" != t.isNRIUser ||
            null != (null == m ? void 0 : m.hmacCode) ||
            "N" != (null == m ? void 0 : m.isUserLoggedIn)
          )),
          (d = "Get Phone No."),
          (f = "Get Phone No."),
          Object(n.A)().includes(e.ct) ||
            "false" != t.isNRIUser ||
            null != (null == m ? void 0 : m.hmacCode) ||
            (null != m && m.isUserLoggedIn),
          (b = 1 == u ? " vnum-cta-green vnum-cta-green__large" : "");
        return (
          "10026" === e.ty ||
            p(E) ||
            h.push({ btnClass: S + "btn medium btn-white", btnText: d }),
          (!p(e.adOwnerProp) && "Y" === e.adOwnerProp && "Y" != N) ||
            (!p(a) && "Y" === a) ||
            (!p(i) && "Y" === i) ||
            (p(e.investorlisting) ||
            "Y" != e.investorlisting ||
            (!p(e.investorguide) && "N" != e.investorguide) ||
            (null != e.pp && "" != e.pp && "Z" === e.pp)
              ? "10026" !== e.ty &&
                (e &&
                e.ctaDetailBean &&
                e.ctaDetailBean.cta2 &&
                e.cg &&
                m.userUniqToken
                  ? ("Y" == m.userPrimeMemberLoggedIn &&
                      ((e.ctaDetailBean.cta2 = "Check Availability"),
                      (e.ctaDetailBean.formheader = "Enter your WhatsApp No."),
                      (e.ctaDetailBean.formsubheader =
                        "to get Availability Confirmation from the Owner")),
                    h.push({
                      btnClass: S + "btn medium btn-white",
                      btnText: e.ctaDetailBean.cta2,
                    }))
                  : p(e.liveVidTour) &&
                    p(e.futureVidTour) &&
                    p(e.isVTReqEligible) &&
                    !p(e.supV) &&
                    "Y" == e.supV &&
                    (p(t.showreqcallbk) ||
                    "Y" != t.showreqcallbk ||
                    "N" != e.isPaidUser ||
                    "Owner" != e.userType ||
                    p(e.isPrimeLocProp) ||
                    "Y" != e.isPrimeLocProp
                      ? p(e.isVis) || "Y" != e.isVis
                        ? (p(e.b2cEnabledCity) ||
                            "N" != e.isPaidUser ||
                            "Owner" != e.userType) &&
                          p(e.b2cEnabledCity)
                          ? "Y" == e.supV &&
                            (p(e.isVis) ||
                            p(e.userType) ||
                            "Builder" != e.userType ||
                            !"Z".toUpperCase().includes(e.isVis.toUpperCase())
                              ? h.push({
                                  btnClass: S + "btn medium btn-white",
                                  btnText: d,
                                })
                              : h.push({
                                  btnClass: S + "btn medium btn-white",
                                  btnText: f,
                                }))
                          : h.push({
                              btnClass: S + "btn medium btn-white",
                              btnText: d,
                            })
                        : (!p(t.isNRIUser) && "true" == t.isNRIUser) ||
                          p(e.isVis) ||
                          p(e.userType) ||
                          "Builder" != e.userType ||
                          !"Z".toUpperCase().includes(e.isVis.toUpperCase())
                        ? h.push({
                            btnClass: S + "btn medium btn-white",
                            btnText: "Get Phone No.",
                          })
                        : h.push({
                            btnClass: S + "btn medium btn-white",
                            btnText: f,
                          })
                      : h.push({
                          btnClass: S + "btn medium btn-white",
                          btnText: "Send Enquiry",
                        })))
              : e && e.ctaDetailBean && e.ctaDetailBean.cta2 && "10026" !== e.ty
              ? ("Y" == m.userPrimeMemberLoggedIn &&
                  ((e.ctaDetailBean.cta2 = "Check Availability"),
                  (e.ctaDetailBean.formheader = "Enter your WhatsApp No."),
                  (e.ctaDetailBean.formsubheader =
                    "to get Availability Confirmation from the Owner")),
                h.push({
                  btnClass: S + "btn medium btn-white",
                  btnText: e.ctaDetailBean.cta2,
                }))
              : h.push({ btnClass: S + "btn medium btn-white", btnText: f }),
            p(e.investorlisting) ||
            "Y" != e.investorlisting ||
            (null != e.pp && "" != e.pp && "Z" === e.pp)
              ? p(t.isNRIUser) || "true" != t.isNRIUser
                ? p(t.showreqcallbk) ||
                  "Y" != t.showreqcallbk ||
                  "N" != e.isPaidUser ||
                  "Owner" != e.userType ||
                  p(e.isPrimeLocProp) ||
                  "Y" != e.isPrimeLocProp
                  ? P && (p(y) || 0 == y)
                    ? h.push({
                        btnClass: S + "btn medium btn-red",
                        btnText: "Show Similar",
                      })
                    : !p(e.sid) &&
                      e.sid.includes("1600000") &&
                      "Builder" == e.userType
                    ? h.push({
                        btnClass: S + "btn medium btn-white",
                        btnText: f,
                      })
                    : "10026" === e.ty
                    ? h.push({
                        btnClass: S + "btn medium btn-red" + b,
                        btnText:
                          1 == u ? "Call MB Expert" : "Contact MB Expert",
                      })
                    : ((v = "Contact"),
                      p(e.auc) || "Y" != e.auc
                        ? (u && (v = "Call"),
                          "plot" == c && "Builder" == e.userType
                            ? u ||
                              p(e.isVis) ||
                              !"Z".toUpperCase().includes(e.isVis.toUpperCase())
                              ? (v += " Developer")
                              : (v = "Get a Quote")
                            : p(e.isVis) ||
                              p(e.userType) ||
                              "Builder" != e.userType ||
                              !"Z".toUpperCase().includes(e.isVis.toUpperCase())
                            ? (v += " " + e.userType)
                            : u
                            ? (v += " Developer")
                            : (v = "Get a Quote"))
                        : (v += " Now"),
                      h.push({
                        btnClass: S + "btn medium btn-red" + b,
                        btnText: "".concat(v),
                      }))
                  : h.push({
                      btnClass: S + "btn medium btn-red" + b,
                      btnText: 1 == u ? "Call Owner" : "Ask Owner to Call",
                    })
                : ((v = "WhatsApp " + e.userType),
                  h.push({
                    btnClass: S + "btn medium btn-red",
                    btnText: "".concat(v),
                  }))
              : P && (p(y) || 0 == y)
              ? h.push({
                  btnClass: S + "btn medium btn-red",
                  btnText: "Show Similar",
                })
              : !p(e.sid) &&
                e.sid.includes("1600000") &&
                "Builder" == e.userType
              ? h.push({ btnClass: S + "btn medium btn-white", btnText: f })
              : "plot" == c
              ? u
                ? h.push({
                    btnClass: S + "btn medium btn-red" + b,
                    btnText: "Call Developer",
                  })
                : p(e.isVis) ||
                  p(e.userType) ||
                  "Builder" != e.userType ||
                  !"Z".toUpperCase().includes(e.isVis.toUpperCase())
                ? h.push({
                    btnClass: S + "btn medium btn-red",
                    btnText: "Contact Developer",
                  })
                : h.push({
                    btnClass: S + "btn medium btn-red",
                    btnText: "Get a Quote",
                  })
              : u
              ? h.push({
                  btnClass: S + "btn medium btn-red" + b,
                  btnText: "Call Builder",
                })
              : p(e.isVis) ||
                p(e.userType) ||
                "Builder" != e.userType ||
                !"Z".toUpperCase().includes(e.isVis.toUpperCase())
              ? h.push({
                  btnClass: S + "btn medium btn-red",
                  btnText: "Contact Builder",
                })
              : h.push({
                  btnClass: S + "btn medium btn-red",
                  btnText: "Get a Quote",
                })),
          (h = h.map(function (t) {
            return s(s({}, t), {}, { btnText: Object(o.d)(m, t.btnText, e) });
          })),
          "Y" === _ ||
            "Y" === g ||
            1 != h.length ||
            (h[0].btnText.includes(d) &&
              h[0].btnText.includes("Show Similar")) ||
            (!P || h[0].btnText.includes("Show Similar") || (!p(y) && 0 != y)
              ? h[0].btnText.includes(d) ||
                (h.push({ btnClass: S + "btn medium btn-white", btnText: d }),
                (h = h.reverse()))
              : h.push({
                  btnClass: S + "btn medium btn-red",
                  btnText: "Show Similar",
                })),
          {
            primeTag: "".concat(_),
            contactList: h,
            appExclusive: g,
            showPrimeProp: T,
            mbPrimeFreeOwnProp: N,
            isPremiumMember: O,
          }
        );
      };
      function p(e) {
        return void 0 === e || null == e || "" === e;
      }
    },
    162: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r),
        o = a(2),
        l = (a(597), a(60));
      t.a = function (e) {
        function t(e) {
          var t = "";
          try {
            e && e.includes(" ")
              ? e.split(" ").forEach(function (e) {
                  t += (null != b && b.hasOwnProperty(e) ? b[e] : e) + " ";
                })
              : (t = null != b && b.hasOwnProperty(e) ? b[e] : e);
          } catch (e) {}
          return t;
        }
        var a = e.imagePath,
          r = e.imageCount,
          i = e.imagePostedDate,
          c = e.requestPhotoLabel,
          s = (e.BtnAction, e.postLabel),
          u = e.imageAltTag,
          p = e.imageNotUploaded,
          m = e.cardIndex,
          d = e.isSRPCard,
          b = e.multilingualData;
        return (
          Object(o.d)(function (e) {
            return e.clientBean;
          }),
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              "div",
              {
                className: d
                  ? "mb-srp-m__card__photo__fig srp-card-img"
                  : "mb-srp-m__card__photo__fig",
              },
              "Ypp" == c
                ? n.a.createElement(
                    "div",
                    { className: "mb-srp-m__card__photo__fig--request-photo" },
                    i &&
                      n.a.createElement(
                        "div",
                        { className: "mb-srp-m__card__photo__fig--post" },
                        t(s),
                        " ",
                        t(i)
                      )
                  )
                : "Y" == p || "Y" == c
                ? n.a.createElement(
                    n.a.Fragment,
                    null,
                    null != m && m < 2
                      ? n.a.createElement(
                          "div",
                          { className: "mb-srp-m__no-image" },
                          n.a.createElement(
                            "div",
                            {
                              className: "mb-srp-m__no-image__body no-img-src",
                            },
                            n.a.createElement("img", {
                              className: "mb-srp-m__no-image__img",
                              src: "https://cdn.staticmb.com/srpstatic/images/no-image.svg",
                              alt: "",
                            }),
                            n.a.createElement(
                              "div",
                              { className: "mb-srp-m__no-image--text" },
                              "No Image Available"
                            )
                          ),
                          i &&
                            n.a.createElement(
                              "div",
                              { className: "mb-srp-m__card__photo__fig--post" },
                              t(s),
                              " ",
                              t(i)
                            )
                        )
                      : n.a.createElement(
                          "div",
                          { className: "mb-srp-m__no-image" },
                          n.a.createElement(
                            "div",
                            { className: "mb-srp-m__no-image__body" },
                            n.a.createElement("span", {
                              className: "mb-srp-m__no-image--ico",
                            }),
                            n.a.createElement(
                              "div",
                              { className: "mb-srp-m__no-image--text" },
                              "No Image Available"
                            )
                          ),
                          i &&
                            n.a.createElement(
                              "div",
                              { className: "mb-srp-m__card__photo__fig--post" },
                              t(s),
                              " ",
                              t(i)
                            )
                        )
                  )
                : n.a.createElement(
                    n.a.Fragment,
                    null,
                    0 < r
                      ? n.a.createElement(
                          "span",
                          {
                            className:
                              1 < r
                                ? "mb-srp-m__card__photo__fig--count sign-plus"
                                : "mb-srp-m__card__photo__fig--count",
                          },
                          r
                        )
                      : "",
                    null != m && m < 2
                      ? n.a.createElement("img", {
                          src: "".concat(a),
                          width: "100%",
                          height: "100%",
                          decoding: "async",
                          alt: "".concat(u),
                          title: "".concat(u),
                          className: "mb-srp-m__card__photo__fig--graphic",
                          fetchpriority: "high",
                        })
                      : n.a.createElement(l.a, {
                          alt: u,
                          src: "Y" == p ? "".concat(a, ".webp") : "".concat(a),
                          dataSrc:
                            "Y" == p ? "".concat(a, ".webp") : "".concat(a),
                          modifyClass:
                            "mb-srp-m__card__photo__fig--graphic customLazy",
                          clickEvent: !1,
                        }),
                    i &&
                      n.a.createElement(
                        "div",
                        { className: "mb-srp-m__card__photo__fig--post" },
                        t(s),
                        " ",
                        t(i)
                      )
                  )
            )
          )
        );
      };
    },
    174: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return n;
      }),
        a.d(t, "b", function () {
          return o;
        }),
        a(0);
      var r = a(14),
        n = function (e, t, a, n, o, l, i) {
          return function (c) {
            var s = { city: e.ct, lat: e.pmtLat, lng: e.pmtLong };
            r.a
              .post(
                "/getMapLandmark?isRental=" +
                  t +
                  "&isPlot=" +
                  a +
                  "&propId=" +
                  e.id,
                s
              )
              .then(function (t) {
                null != t.data &&
                  (n(t.data),
                  o(!0),
                  c({
                    type: "viewOnMap",
                    payload: {
                      cardData: e,
                      mapData: t.data,
                      isMapActive: !0,
                      finalPrice: l,
                      cardTitle: i,
                    },
                  }));
              });
          };
        },
        o = function (e, t, a, n, o) {
          var l = { city: e.ct, lat: e.pmtLat, lng: e.pmtLong };
          r.a
            .post(
              "/getMapLandmark?isRental=" +
                t +
                "&isPlot=" +
                a +
                "&propId=" +
                e.id,
              l
            )
            .then(function (e) {
              n(e.data), o(!0);
            });
        };
    },
    175: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r),
        o = a(1);
      t.a = function (e) {
        function t(e) {
          return null != i && i.hasOwnProperty(e) ? i[e] : e;
        }
        var a = e.societyLabel,
          r = e.societyName,
          l = e.projectUrl,
          i = e.multilingualData,
          c = e.cardTrueCallClick,
          s = e.disablePsmRedirection;
        return n.a.createElement(
          n.a.Fragment,
          null,
          a
            ? n.a.createElement(
                "span",
                { className: "mb-srp-m__card__society--label" },
                a,
                ":"
              )
            : "",
          "propSoldOut" === l
            ? n.a.createElement(
                "span",
                { className: "mb-srp-m__card__society--name" },
                t(r)
              )
            : s
            ? n.a.createElement(
                "span",
                {
                  className: "mb-srp-m__card__society--name",
                  href: l,
                  onClick: function (e) {
                    (!Object(o.t)(s) && s) ||
                      (e.stopPropagation(), c(e, "PDP"));
                  },
                  target: "_self",
                },
                t(r)
              )
            : n.a.createElement(
                "a",
                {
                  className: "mb-srp-m__card__society--name",
                  href: l,
                  target: "_self",
                },
                t(r)
              )
        );
      };
    },
    208: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      });
      var r = function (e) {
        var t = e.city;
        return void 0 !== e.subUrb && null !== e.subUrb
          ? e.subUrb.includes("-")
            ? e.subUrb
            : t + "-" + e.subUrb
          : t;
      };
    },
    214: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r);
      t.a = function (e) {
        var t = e.divClassName,
          a = e.tagNameText,
          r = e.multilingualData;
        e = "";
        return (
          "Only on Magicbricks" == a && (e = " no-tick"),
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              "span",
              { className: "".concat(t, " ").concat(e) },
              (function (e) {
                var t = "";
                try {
                  t = null != r && r.hasOwnProperty(e) ? r[e] : e;
                } catch (e) {
                  console.log(e);
                }
                return t;
              })(a)
            )
          )
        );
      };
    },
    215: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      });
      var r = function (e, t, a) {
        var r = [];
        return (
          n(e.isNriPreferred) &&
            (("10008" != e.ty && "10009" != e.ty) || n(e.bsD)
              ? (n(e.pmtUspWap) && n(e.pmtUsp1Wap) && n(e.pmtUsp2Wap)) ||
                (n(e.pmtUspWap) || r.push(e.pmtUspWap),
                n(e.pmtUsp1Wap) || r.push(e.pmtUsp1Wap),
                n(e.pmtUsp2Wap)) ||
                r.push(e.pmtUsp2Wap)
              : r.push("Suitable for:" + e.bsD.replace(",", ", "))),
          ((!n(e.investorlisting) && "Y" == e.investorlisting) ||
            (n(e.investorlisting) &&
              "Project" == e.pmtSource &&
              "plot" == t &&
              !n(e.pp) &&
              "B" == e.pp)) &&
            (n(e.prjHl1) || r.push(e.prjHl1),
            n(e.prjLtHl1) || r.push(e.prjLtHl1)),
          null != a &&
            0 < a.length &&
            a.map(function (e) {
              r.push(e);
            }),
          (r = r.filter(function (e, t, a) {
            return (
              t ===
              a.findIndex(function (t) {
                return t == e;
              })
            );
          }))
        );
      };
      function n(e) {
        return void 0 === e || null == e || "" === e;
      }
    },
    216: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      });
      var r = function (e, t) {
        var a = "";
        return e && "Y" == e.appExclusive && t && "" != t
          ? "https://s8cpx.app.goo.gl/?link=" +
              encodeURIComponent(t.split("?")[0]) +
              "&apn=com.timesgroup.magicbricks&isi=486328406&ibi=com.timesgroup.magicbricksdist&efr=1"
          : a;
      };
    },
    250: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r),
        o = a(2),
        l = a(3),
        i = a(209),
        c = a(137),
        s = (a(416), a(285)),
        u = a(430);
      function p(e) {
        return (p =
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
      function m(e, t) {
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
            ? m(Object(a), !0).forEach(function (t) {
                var r, n;
                (r = e),
                  (n = a[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== p(e) || null === e) return e;
                        var a = e[Symbol.toPrimitive];
                        if (void 0 === a) return String(e);
                        if ("object" !== p((a = a.call(e, "string")))) return a;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === p(e) ? e : String(e)
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
            : m(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      function b(e, t) {
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
                l,
                i = [],
                c = !0,
                s = !1;
              try {
                if (((o = (a = a.call(e)).next), 0 === t)) {
                  if (Object(a) !== a) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(a)).done) &&
                    (i.push(r.value), i.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (n = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != a.return &&
                    ((l = a.return()), Object(l) !== l)
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
                ? f(e, t)
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
                ? f(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
        return r;
      }
      t.a = function (e) {
        function t() {
          x(!0);
        }
        var a,
          p = e.propertyGaObj,
          m = e.url,
          f = e.priceMap,
          y = e.titleText,
          g = e.multilingualData,
          v = e.pmtLat,
          h = e.pmtLong,
          _ =
            ((e = e.cardData),
            Object(o.d)(function (e) {
              return e.userInfoData;
            })),
          S = Object(o.d)(function (e) {
            return e.clientBean;
          }),
          T = Object(o.d)(function (e) {
            return e.searchAdditionalDataBean;
          }),
          N = (a = b(Object(r.useState)(!1), 2))[0],
          P = a[1],
          O = Object(o.c)(),
          E = (a = b(Object(r.useState)(!1), 2))[0],
          x = a[1],
          D = (a = b(Object(r.useState)(m), 2))[0],
          w = a[1];
        return n.a.createElement(
          n.a.Fragment,
          null,
          "Y" == T.isNearMeSeoUrl
            ? n.a.createElement(
                "div",
                {
                  className: "mb-srp-m__card__sort",
                  onClick: function (e) {
                    e.stopPropagation();
                  },
                },
                n.a.createElement("span", {
                  className: "mb-srp-m__card__sort--doat",
                  onClick: t,
                })
              )
            : n.a.createElement(
                "div",
                {
                  className:
                    "mb-srp-m__card__sort mb-srp-m__card__sort__nosort",
                  onClick: function (e) {
                    e.stopPropagation();
                  },
                },
                n.a.createElement("span", {
                  className: "mb-srp-m__card__share",
                  onClick: t,
                })
              ),
          N &&
            n.a.createElement(i.a, {
              url: D,
              setModalOpen: P,
              propertyGaObj: p,
            }),
          E &&
            n.a.createElement(
              "div",
              {
                className: "sort-popup show",
                onClick: function (e) {
                  e.stopPropagation();
                },
              },
              n.a.createElement(
                "div",
                { className: "sort-popup__flex" },
                n.a.createElement(
                  "div",
                  { className: "sort-popup__content" },
                  n.a.createElement("div", {
                    className: "sort-popup__close",
                    onClick: function () {
                      x(!1);
                    },
                  }),
                  n.a.createElement(
                    "div",
                    { className: "sort-popup__header" },
                    n.a.createElement(
                      "div",
                      { className: "sort-popup__header__price" },
                      n.a.createElement(c.a, {
                        priceMap: f,
                        multilingualData: g,
                      })
                    ),
                    n.a.createElement(
                      "div",
                      { className: "sort-popup__header__desc" },
                      y
                    )
                  ),
                  n.a.createElement(
                    "div",
                    { className: "sort-popup__list" },
                    n.a.createElement(
                      "li",
                      { className: "sort-popup__list__item" },
                      n.a.createElement(
                        "a",
                        {
                          href: "javascript:void(0)",
                          className: "share-property",
                          onClick: function (e) {
                            e.stopPropagation(),
                              O(
                                Object(l.e)({
                                  event: "event_tracking",
                                  eventCategory: "srp - share property",
                                  eventAction: "share click",
                                  eventLabel: "srp properties tuple",
                                  cd95:
                                    "n" === _.isUserLoggedIn.toLowerCase()
                                      ? "Logged Out"
                                      : "Logged In",
                                })
                              ),
                              P(!0),
                              null != (e = document) &&
                                e
                                  .getElementsByTagName("html")[0]
                                  .classList.add("no-scroll"),
                              null != (e = document) &&
                                e.body.classList.add("no-scroll"),
                              O(
                                Object(l.e)(
                                  d(
                                    {
                                      event: "event_tracking",
                                      eventName: "revamp_srp_share_property",
                                      nonInteraction: !1,
                                      eventCategory:
                                        "revamp srp - Share Property",
                                      eventAction: "Launch",
                                      eventLabel:
                                        "propertysearch | property tuple",
                                      eventValue: "",
                                      cd96: "Share",
                                    },
                                    p
                                  )
                                )
                              ),
                              Object(s.a)(w, D),
                              O(
                                Object(l.e)({
                                  event: "event_tracking",
                                  eventName: "srp - share property",
                                  eventAction: "launch",
                                  eventLabel: "srp properties grid",
                                  cd95:
                                    "n" === _.isUserLoggedIn.toLowerCase()
                                      ? "Logged Out"
                                      : "Logged In",
                                })
                              );
                          },
                        },
                        ((m = "Share"),
                        null != g && g.hasOwnProperty(m) ? g[m] : m)
                      )
                    ),
                    "Y" == T.isNearMeSeoUrl &&
                      n.a.createElement(
                        "li",
                        { className: "sort-popup__list__item" },
                        n.a.createElement(u.a, {
                          mapLinkText: "View on map",
                          cardData: e,
                          setOpenBurgerMenu: x,
                        })
                      ),
                    "Y" == T.isNearMeSeoUrl &&
                      v &&
                      h &&
                      S.nearMeSeoJsonData.latLong &&
                      n.a.createElement(
                        "li",
                        { className: "sort-popup__list__item" },
                        n.a.createElement(
                          "a",
                          {
                            className: "direction",
                            href:
                              "https://maps.google.com/maps?saddr=" +
                              S.nearMeSeoJsonData.latLong +
                              "&daddr=" +
                              v +
                              "," +
                              h,
                            target: "_blank",
                          },
                          "Get Direction"
                        )
                      ),
                    "Y" == T.isNearMeSeoUrl &&
                      v &&
                      h &&
                      !S.nearMeSeoJsonData.latLong &&
                      T.sp_lmdlatitude &&
                      T.sp_lmdlongitude &&
                      n.a.createElement(
                        "li",
                        { className: "sort-popup__list__item" },
                        n.a.createElement(
                          "a",
                          {
                            className: "view-map",
                            href:
                              "https://maps.google.com/maps?saddr=" +
                              T.sp_lmdlatitude +
                              "," +
                              T.sp_lmdlongitude +
                              "&daddr=" +
                              v +
                              "," +
                              h,
                            target: "_blank",
                          },
                          "Get Direction"
                        )
                      )
                  )
                )
              )
            )
        );
      };
    },
    252: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r);
      t.a = function (e) {
        var t = e.divClassName;
        e = e.tagNameText;
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement("div", { className: "".concat(t) }, e)
        );
      };
    },
    28: function (e, t, a) {
      "use strict";
      a.d(t, "d", function () {
        return c;
      }),
        a.d(t, "c", function () {
          return p;
        }),
        a.d(t, "e", function () {
          return m;
        }),
        a.d(t, "a", function () {
          return d;
        }),
        a.d(t, "b", function () {
          return b;
        });
      var r = a(1),
        n = a(53);
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
      function l(e, t) {
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
            ? l(Object(a), !0).forEach(function (t) {
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
            : l(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      a(89);
      var c = function (e, t, a, o, l, c, p, m, d, b, y) {
          var g =
              void 0 !== e.companyname && 0 < e.companyname.length
                ? e.companyname
                : void 0 !== e.contName && 0 < e.contName.length
                ? e.contName
                : e.oname,
            v =
              void 0 !== e.commGuru && null !== e.commGuru && "Y" == e.commGuru
                ? "Yes"
                : "No",
            h =
              void 0 !== l.searchType &&
              null !== l.searchType &&
              "luxury" == l.searchType
                ? "Luxury Search"
                : "Luxury NA";
          (a += 1),
            (y =
              Object(r.t)(y) || "Y" != y
                ? "NA"
                : "unlocked free owner properties for unconverted users");
          return i(
            i(
              {},
              (g = {
                cd42: Object(r.t)(e.id) ? "" : e.id,
                cd57: Object(r.t)(e.prjname) ? "" : e.prjname,
                cd58: Object(r.t)(e.psmid) ? "" : e.psmid,
                cd59: Object(r.t)(e.userType) ? "" : e.userType,
                cd60: Object(r.t)(g) ? "" : g,
                cd61: Object(r.t)(e.oid) ? "" : e.oid,
                cd67: v,
                cd169:
                  "true" == Object(n.a)(e) ? "Updated" : e.postedEditedLabel,
                cd62: Object(r.t)(t.finalPrice) ? "" : t.finalPrice,
                cd73: Object(r.t)(t.sqrFtPrice) ? "" : t.sqrFtPrice,
                cd63:
                  void 0 !== e.ctdDateForDateFeedItem &&
                  null !== e.ctdDateForDateFeedItem
                    ? e.ctdDateForDateFeedItem
                    : Object(r.t)(e.modifiedDate)
                    ? ""
                    : e.modifiedDate,
                cd64: Object(r.t)(e.possStatusD) ? "" : e.possStatusD,
                cd135: h,
                cd16:
                  void 0 !== e.bedroomD && null !== e.bedroomD
                    ? e.bedroomD + " BHK"
                    : "",
                cd74: u(p),
                cd84: s(m),
                cd93: a + "",
                cd80: null != o ? o + "" : "0",
                cd21: Object(r.t)(e.propTypeD) ? "" : e.propTypeD,
                cd17: Object(r.t)(e.ty) ? "" : e.ty,
                cd142:
                  null != d &&
                  void 0 !== d.userUniqToken &&
                  null != d.userUniqToken
                    ? "auto contact"
                    : "otp contact",
                cd144:
                  void 0 !== l.subUrbName && null != l.subUrbName
                    ? l.subUrbName.value
                    : "",
                cd69:
                  void 0 !== e.coveredArea && null !== e.coveredArea
                    ? e.coveredArea
                    : "",
                cd70:
                  void 0 !== e.carpetArea && null !== e.carpetArea
                    ? e.carpetArea
                    : "",
                cd164:
                  void 0 !== e.isPaidUser &&
                  null !== e.isPaidUser &&
                  "Y" == e.isPaidUser
                    ? "Paid"
                    : "Free",
                cd143: y,
                cd170: f(e, l),
                cd189:
                  e && e.ctaDetailBean && e.ctaDetailBean.ctaid
                    ? e.ctaDetailBean.ctaid
                    : "NA",
                cd186:
                  d && d.userPrimeMemberLoggedIn
                    ? d.userPrimeMemberLoggedIn
                    : "N",
              })
            ),
            {},
            b ? { cd136: l.sortBy + "_NSR" } : { cd136: l.sortBy + "_NonNSR" }
          );
        },
        s = function (e) {
          var t = e;
          return null != e && 0 < e.length
            ? t
                .map(function (e, t) {
                  return e.tagText;
                })
                .join("|")
            : "";
        },
        u = function (e) {
          return null != e && 0 < e.length
            ? e
                .map(function (e, t) {
                  return e;
                })
                .join("|")
            : "";
        },
        p = function (e, t, a, n) {
          var o = void 0 !== e.psmName && 0 < e.psmName.length ? e.psmName : "",
            l =
              void 0 !== e.commGuru && null !== e.commGuru && "Y" == e.commGuru
                ? "Yes"
                : "No",
            i =
              void 0 !== a.searchType &&
              null !== a.searchType &&
              "luxury" == a.searchType
                ? "Luxury Search"
                : "Luxury NA";
          t += 1;
          return {
            cd42: Object(r.t)(e.propId) ? "" : e.propId,
            cd57: Object(r.t)(e.psmName) ? "" : e.psmName,
            cd58: Object(r.t)(e.psmid) ? "" : e.psmid,
            cd59: Object(r.t)(e.contactType) ? "" : e.contactType,
            cd60: Object(r.t)(o) ? "" : o,
            cd61: Object(r.t)(e.contactId) ? "" : e.contactId,
            cd67: l,
            cd62:
              Object(r.t)(e.minPrice) || Object(r.t)(e.maxPrice)
                ? ""
                : e.minPrice + " - " + e.maxPrice,
            cd73: Object(r.t)(e.psmSqrFtPrice) ? "" : e.psmSqrFtPrice,
            cd63:
              void 0 !== e.ctdDateForDateFeedItem &&
              null !== e.ctdDateForDateFeedItem
                ? e.ctdDateForDateFeedItem
                : Object(r.t)(e.modifiedDate)
                ? ""
                : e.modifiedDate,
            cd64: Object(r.t)(e.psmStatus) ? "" : e.psmStatus,
            cd135: i,
            cd16:
              void 0 !== e.bedroom && null !== e.bedroom
                ? e.bedroom + " BHK"
                : "",
            cd74: "",
            cd84: "",
            cd93: t + "",
            cd80:
              void 0 !== e.imageCount && null !== e.imageCount
                ? e.imageCount + ""
                : "0",
            cd21: Object(r.t)(e.propTypeD) ? "" : e.propTypeD,
            cd17: Object(r.t)(e.ty) ? "" : e.ty,
            cd142:
              null != n && void 0 !== n.userUniqToken && null != n.userUniqToken
                ? "auto contact"
                : "otp contact",
            cd144:
              void 0 !== a.subUrbName && null != a.subUrbName
                ? a.subUrbName.value
                : "",
            cd69:
              void 0 !== e.coveredArea && null !== e.coveredArea
                ? e.coveredArea
                : "",
            cd70:
              void 0 !== e.carpetArea && null !== e.carpetArea
                ? e.carpetArea
                : "",
            cd164:
              void 0 !== e.isPaidUser &&
              null !== e.isPaidUser &&
              "Y" == e.isPaidUser
                ? "Paid"
                : "Free",
          };
        },
        m = function (e, t, a, n, o, l) {
          var i =
              void 0 !== e.companyname && 0 < e.companyname.length
                ? e.companyname
                : void 0 !== e.contName && 0 < e.contName.length
                ? e.contName
                : e.oname,
            c =
              void 0 !== e.commGuru && null !== e.commGuru && "Y" == e.commGuru
                ? "Yes"
                : "No";
          a += 1;
          return {
            cd42: Object(r.t)(e.id) ? "" : e.id,
            cd57: Object(r.t)(e.prjname) ? "" : e.prjname,
            cd58: Object(r.t)(e.psmid) ? "" : e.psmid,
            cd59: Object(r.t)(e.userType) ? "" : e.userType,
            cd60: Object(r.t)(i) ? "" : i,
            cd61: Object(r.t)(e.oid) ? "" : e.oid,
            cd67: c,
            cd62: Object(r.t)(t.finalPrice) ? "" : t.finalPrice,
            cd73: Object(r.t)(t.sqrFtPrice) ? "" : t.sqrFtPrice,
            cd63:
              void 0 !== e.ctdDateForDateFeedItem &&
              null !== e.ctdDateForDateFeedItem
                ? e.ctdDateForDateFeedItem
                : Object(r.t)(e.modifiedDate)
                ? ""
                : e.modifiedDate,
            cd64: Object(r.t)(e.possStatusD) ? "" : e.possStatusD,
            cd16:
              void 0 !== e.bedroomD && null !== e.bedroomD
                ? e.bedroomD + " BHK"
                : "",
            cd74: u(n),
            cd84: s(o),
            cd93: a + "",
            cd80:
              void 0 !== e.imgCount && null !== e.imgCount
                ? e.imgCount + ""
                : "0",
            cd21: Object(r.t)(e.propTypeD) ? "" : e.propTypeD,
            cd17: Object(r.t)(e.ty) ? "" : e.ty,
            cd142:
              null != l &&
              void 0 !== l.isUserLoggedIn &&
              null != l.isUserLoggedIn &&
              "Y" == l.isUserLoggedIn
                ? "logged in flow"
                : "logged out flow",
            cd69:
              void 0 !== e.coveredArea && null !== e.coveredArea
                ? e.coveredArea
                : "",
            cd70:
              void 0 !== e.carpetArea && null !== e.carpetArea
                ? e.carpetArea
                : "",
            cd164:
              void 0 !== e.isPaidUser &&
              null !== e.isPaidUser &&
              "Y" == e.isPaidUser
                ? "Paid"
                : "Free",
          };
        },
        d = function (e, t) {
          var a = "";
          return (
            t
              ? 1 === e
                ? (a =
                    "shortlist page | propertycontact | property tuple | primary")
                : 2 === e &&
                  (a =
                    "shortlist page | propertycontact | property tuple | secondary")
              : 1 === e
              ? (a =
                  "revamp srp | propertycontact | propertysearch | property tuple | primary")
              : 2 === e &&
                (a =
                  "revamp srp | propertycontact | propertysearch | property tuple | secondary"),
            a
          );
        },
        b = function (e, t) {
          var a = "";
          return (
            t
              ? (a =
                  "shortlist page | propertycontact | property photos | grid")
              : 1 === e
              ? (a =
                  "revamp srp | propertycontact | propertysearch | property tuple | primary")
              : 2 === e &&
                (a =
                  "revamp srp | propertycontact | propertysearch | property tuple | secondary"),
            a
          );
        },
        f = function (e, t) {
          var a = 0;
          return Object(r.t)(e.isVis) ||
            Object(r.t)(t.noBrokerageBuilderVisType) ||
            !t.noBrokerageBuilderVisType
              .toUpperCase()
              .includes(e.isVis.toUpperCase())
            ? a
            : Object(r.t)(e.psmUspImgMob)
            ? 0
            : e.psmUspImgMob.split(",").length;
        };
    },
    285: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return n;
      });
      var r = a(14),
        n = function (e, t) {
          r.a.get("/prepareDeepLinkUrl?url=" + t).then(function (a) {
            e(null != a ? a.data : t);
          });
        };
    },
    293: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return n;
      });
      var r = a(52),
        n = function (e, t, a, n, l, i) {
          var c,
            s = [],
            u = 0,
            p = (t = (t.dynamicListing, t.dynamicArea, Object(r.c)(e, t)))
              .elligibleForStrata;
          t = t.strataAreaValue;
          return (
            o(e.ty) || ("10007" != e.ty && "10018" != e.ty)
              ? o(e.ty) || ("10008" != e.ty && "10009" != e.ty)
                ? o(e.ty) || ("10012" != e.ty && "10006" != e.ty)
                  ? o(e.ty) || "10026" != e.ty
                    ? (o(e.carpetArea) ||
                      "0" === e.carpetArea ||
                      o(e.carpAreaUnit)
                        ? o(e.coveredArea) ||
                          o(e.coverAreaUnitD) ||
                          ((c = p
                            ? t + " sqft"
                            : e.coveredArea +
                              " " +
                              e.coverAreaUnitD.replace(/-/g, "").toLowerCase()),
                          s.push({
                            labelText: "Super Area",
                            valueText: c,
                            dataIcon: "area",
                          }),
                          (u += 1))
                        : ((c = p
                            ? t + " sqft"
                            : e.carpetArea +
                              " " +
                              e.carpAreaUnit.replace(/-/g, "").toLowerCase()),
                          s.push({
                            labelText: "Carpet Area",
                            valueText: c,
                            dataIcon: "area",
                          }),
                          (u += 1)),
                      !o(e.furnishedD) &&
                        u < 6 &&
                        (s.push({
                          labelText: "Furnishing Status",
                          valueText: e.furnishedD,
                        }),
                        (u += 1)),
                      !o(e.floorNo) &&
                        u < 6 &&
                        ((c = e.floorNo),
                        o(e.floors) || (c = c + " out of " + e.floors),
                        s.push({
                          labelText: "Floor",
                          valueText: c,
                          dataIcon: "floor",
                        }),
                        (u += 1)),
                      !o(e.possStatusD) &&
                        u < 6 &&
                        (("project" !== e.pmtSource &&
                          "NRI" !== e.pmtSource &&
                          ("Ready to Move" == e.possStatusD ||
                            "Immediately" == e.possStatusD)) ||
                          (!o(e.pmtSource) &&
                            0 < e.pmtSource.length &&
                            ("project" == e.pmtSource ||
                              "NRI" == e.pmtSource) &&
                            o(e.possBy))) &&
                        ("Immediately" == e.possStatusD
                          ? s.push({
                              labelText: "Status",
                              valueText: e.possStatusD + " Available",
                            })
                          : s.push({
                              labelText: "Status",
                              valueText: e.possStatusD,
                            }),
                        (u += 1)),
                      !o(e.pmtSource) &&
                        0 < e.pmtSource.length &&
                        ("project" == e.pmtSource || "NRI" == e.pmtSource) &&
                        u < 6 &&
                        !o(e.possBy) &&
                        (s.push({
                          labelText: "Status",
                          valueText: "Possession by " + e.possBy,
                        }),
                        (u += 1)),
                      !o(e.availableFrom) &&
                        "Ready to Move" !== e.possStatusD &&
                        "Immediately" !== e.possStatusD &&
                        u < 6 &&
                        (s.push({
                          labelText: "Available From",
                          valueText: e.availableFrom,
                        }),
                        (u += 1)),
                      !o(e.acD) &&
                        u < 6 &&
                        ((c = e.acD),
                        "Under Construction" !== e.acD &&
                          "New Construction" !== e.acD &&
                          (c += " old"),
                        s.push({ labelText: "Property Age", valueText: c }),
                        (u += 1)),
                      !o(e.rdWidth) &&
                        u < 6 &&
                        (s.push({
                          labelText: "Width of Road",
                          valueText: e.rdWidth + " mts",
                        }),
                        (u += 1)),
                      !o(e.nOs) &&
                        u < 6 &&
                        (-1 !== (c = e.nOs + "").indexOf("Side Open")
                          ? s.push({
                              labelText: "Open Sides",
                              valueText: c.replace("Side Open", ""),
                            })
                          : s.push({ labelText: "Open Sides", valueText: c }),
                        (u += 1)),
                      !o(e.parkingD) &&
                        u < 6 &&
                        (s.push({
                          labelText: "Parking",
                          valueText: e.parkingD,
                        }),
                        (u += 1)),
                      o(e.parkingD) &&
                        !o(e.comPkr) &&
                        u < 6 &&
                        (s.push({
                          labelText: "ParkingRatio",
                          valueText: e.comPkr + ":1000 sqft",
                        }),
                        (u += 1)),
                      !o(e.comZone) &&
                        u < 6 &&
                        (s.push({ labelText: "Zoning", valueText: e.comZone }),
                        (u += 1)),
                      !o(e.isCornerPlot) &&
                        "Y" == e.isCornerPlot &&
                        u < 6 &&
                        ((c = "Corner Shop"),
                        o(e.amenFacingD) ||
                          "Not Available" === e.amenFacingD ||
                          (c = c + "|" + e.amenFacingD),
                        s.push({ labelText: "Sides Open", valueText: c }),
                        (u += 1)))
                    : (!o(e.hotDesk) &&
                        0 !== e.hotDesk &&
                        u < 6 &&
                        (s.push({
                          labelText: "HOT DESK",
                          valueText: e.hotDesk,
                        }),
                        (u += 1)),
                      !o(e.dediDesk) &&
                        0 !== e.dediDesk &&
                        u < 6 &&
                        (s.push({
                          labelText: "DEDICATED DESK",
                          valueText: e.dediDesk,
                        }),
                        (u += 1)),
                      !o(e.privOffice) &&
                        0 !== e.privOffice &&
                        u < 6 &&
                        (s.push({
                          labelText: "PRIVATE OFFICE",
                          valueText: e.privOffice,
                        }),
                        (u += 1)))
                  : (!o(e.la) &&
                      !o(e.landAreaUnitD) &&
                      u < 6 &&
                      (s.push({
                        labelText: "Plot Area",
                        valueText: e.landAreaUnitD
                          .replace(/-/g, "")
                          .toLowerCase(),
                      }),
                      (u += 1)),
                    !o(e.floorNo) &&
                      u < 6 &&
                      ((c = e.floorNo),
                      o(e.floors) || (c = c + " out of " + e.floors),
                      s.push({
                        labelText: "Floor",
                        valueText: c,
                        dataIcon: "floor",
                      }),
                      (u += 1)),
                    !o(e.possStatusD) &&
                      u < 6 &&
                      (("project" !== e.pmtSource &&
                        "NRI" !== e.pmtSource &&
                        ("Ready to Move" == e.possStatusD ||
                          "Immediately" == e.possStatusD)) ||
                        (!o(e.pmtSource) &&
                          0 < e.pmtSource.length &&
                          ("project" == e.pmtSource || "NRI" == e.pmtSource) &&
                          o(e.possBy))) &&
                      ("Immediately" == e.possStatusD
                        ? s.push({
                            labelText: "Status",
                            valueText: e.possStatusD + " Available",
                          })
                        : s.push({
                            labelText: "Status",
                            valueText: e.possStatusD,
                          }),
                      (u += 1)),
                    "project" !== e.pmtSource &&
                      "NRI" !== e.pmtSource &&
                      u < 6 &&
                      !o(e.availableFrom) &&
                      "Ready to Move" !== e.possStatusD &&
                      "Immediately" !== e.possStatusD &&
                      (s.push({
                        labelText: "Status",
                        valueText: "Possession by " + e.availableFrom,
                      }),
                      (u += 1)),
                    !o(e.pmtSource) &&
                      0 < e.pmtSource.length &&
                      ("project" == e.pmtSource || "NRI" == e.pmtSource) &&
                      u < 6 &&
                      !o(e.possBy) &&
                      (s.push({
                        labelText: "Status",
                        valueText: "Possession by " + e.possBy,
                      }),
                      (u += 1)),
                    (o(e.comUsp1Src) ||
                      (!o(e.comUsp1Src) && "isCornerPlot" !== e.comUsp1Src)) &&
                      (o(e.comUsp2Src) ||
                        (!o(e.comUsp2Src) &&
                          "isCornerPlot" !== e.comUsp2Src)) &&
                      !o(e.isCornerPlot) &&
                      "Y" == e.isCornerPlot &&
                      u < 6 &&
                      ((c = "Corner Plot"),
                      o(e.amenFacingD) ||
                        "Not Available" === e.amenFacingD ||
                        (c = c + "|" + e.amenFacingD),
                      s.push({ labelText: "Sides Open", valueText: c }),
                      (u += 1)),
                    !o(e.dimD) &&
                      u < 6 &&
                      ((c = e.dimD.replace("Dimensions", "").trim().split(" ")),
                      s.push({
                        labelText: "Plot (L X B)",
                        valueText: c[0] + " X " + c[2],
                      }),
                      (u += 1)),
                    (c = 0),
                    (o(e.comUsp1Src) ||
                      (!o(e.comUsp1Src) && "comMall" !== e.comUsp1Src)) &&
                      (o(e.comUsp2Src) ||
                        (!o(e.comUsp2Src) && "comMall" !== e.comUsp2Src)) &&
                      !o(e.comMallDt) &&
                      c < 2 &&
                      u < 6 &&
                      "0.5 Km" == e.comMallDt &&
                      (s.push({
                        labelText: "Shopping Mall",
                        valueText: e.comMallDt,
                      }),
                      (u += 1),
                      (c += 1)),
                    (o(e.comUsp1Src) ||
                      (!o(e.comUsp1Src) && "comSc" !== e.comUsp1Src)) &&
                      (o(e.comUsp2Src) ||
                        (!o(e.comUsp2Src) && "comSc" !== e.comUsp2Src)) &&
                      !o(e.comScDt) &&
                      c < 2 &&
                      u < 6 &&
                      "0.5 Km" == e.comScDt &&
                      (s.push({
                        labelText: "University/School",
                        valueText: e.comScDt,
                      }),
                      (u += 1),
                      (c += 1)),
                    (o(e.comUsp1Src) ||
                      (!o(e.comUsp1Src) && "comHp" !== e.comUsp1Src)) &&
                      (o(e.comUsp2Src) ||
                        (!o(e.comUsp2Src) && "comHp" !== e.comUsp2Src)) &&
                      !o(e.comHpDt) &&
                      c < 2 &&
                      u < 6 &&
                      "0.5 Km" == e.comHpDt &&
                      (s.push({ labelText: "Hospital", valueText: e.comHpDt }),
                      (u += 1),
                      (c += 1)),
                    (o(e.comUsp1Src) ||
                      (!o(e.comUsp1Src) && "comOffice" !== e.comUsp1Src)) &&
                      (o(e.comUsp2Src) ||
                        (!o(e.comUsp2Src) && "comOffice" !== e.comUsp2Src)) &&
                      !o(e.comOfficeDt) &&
                      c < 2 &&
                      u < 6 &&
                      "0.5 Km" == e.comOfficeDt &&
                      (s.push({
                        labelText: "Office Complex",
                        valueText: e.comOfficeDt,
                      }),
                      (u += 1),
                      (c += 1)),
                    (o(e.comUsp1Src) ||
                      (!o(e.comUsp1Src) && "comAp" !== e.comUsp1Src)) &&
                      (o(e.comUsp2Src) ||
                        (!o(e.comUsp2Src) && "comAp" !== e.comUsp2Src)) &&
                      !o(e.comApDt) &&
                      c < 2 &&
                      u < 6 &&
                      "0.5 Km" == e.comApDt &&
                      (s.push({ labelText: "Airport", valueText: e.comApDt }),
                      (u += 1),
                      (c += 1)),
                    !o(e.availableFrom) &&
                      "Ready to Move" !== e.possStatusD &&
                      "Immediately" !== e.possStatusD &&
                      u < 6 &&
                      (s.push({
                        labelText: "Available From",
                        valueText: e.availableFrom,
                      }),
                      (u += 1)),
                    !o(e.parkingD) &&
                      u < 6 &&
                      (s.push({ labelText: "Parking", valueText: e.parkingD }),
                      (u += 1)),
                    o(e.parkingD) &&
                      !o(e.comPkr) &&
                      u < 6 &&
                      (s.push({
                        labelText: "ParkingRatio",
                        valueText: e.comPkr + ":1000 sqft",
                      }),
                      (u += 1)),
                    !o(e.comBusinessFr) &&
                      u < 6 &&
                      (s.push({
                        labelText: "Ideal For",
                        valueText: e.comBusinessFr,
                      }),
                      (u += 1)),
                    !o(e.comZone) &&
                      u < 6 &&
                      (s.push({ labelText: "Zoning", valueText: e.comZone }),
                      (u += 1)),
                    !o(e.facingD) &&
                      u < 6 &&
                      (s.push({ labelText: "Facing", valueText: e.facingD }),
                      (u += 1)))
                : (o(e.carpetArea) || "0" === e.carpetArea || o(e.carpAreaUnit)
                    ? o(e.coveredArea) ||
                      o(e.coverAreaUnitD) ||
                      ((c = p
                        ? t + " sqft"
                        : e.coveredArea +
                          " " +
                          e.coverAreaUnitD.replace(/-/g, "").toLowerCase()),
                      s.push({
                        labelText: "Super Area",
                        valueText: c,
                        dataIcon: "area",
                      }),
                      (u += 1))
                    : ((c = p
                        ? t + " sqft"
                        : e.carpetArea +
                          " " +
                          e.carpAreaUnit.replace(/-/g, "").toLowerCase()),
                      s.push({
                        labelText: "Carpet Area",
                        valueText: c,
                        dataIcon: "area",
                      }),
                      (u += 1)),
                  "R" !== n && "r" !== n
                    ? (!o(e.floorNo) &&
                        u < 6 &&
                        ((c = e.floorNo),
                        o(e.floors) || (c = c + " out of " + e.floors),
                        s.push({ labelText: "Floor", valueText: c }),
                        (u += 1)),
                      !o(e.possStatusD) &&
                        u < 6 &&
                        (("project" !== e.pmtSource &&
                          "NRI" !== e.pmtSource &&
                          ("Ready to Move" == e.possStatusD ||
                            "Immediately" == e.possStatusD)) ||
                          (!o(e.pmtSource) &&
                            0 < e.pmtSource.length &&
                            ("project" == e.pmtSource ||
                              "NRI" == e.pmtSource) &&
                            o(e.possBy))) &&
                        ("Immediately" == e.possStatusD
                          ? s.push({
                              labelText: "Status",
                              valueText: e.possStatusD + " Available",
                            })
                          : s.push({
                              labelText: "Status",
                              valueText: e.possStatusD,
                            }),
                        (u += 1)),
                      "project" !== e.pmtSource &&
                        "NRI" !== e.pmtSource &&
                        u < 6 &&
                        !o(e.availableFrom) &&
                        "Ready to Move" !== e.possStatusD &&
                        "Immediately" !== e.possStatusD &&
                        (s.push({
                          labelText: "Status",
                          valueText: "Possession by " + e.availableFrom,
                        }),
                        (u += 1)),
                      !o(e.pmtSource) &&
                        0 < e.pmtSource.length &&
                        ("project" == e.pmtSource || "NRI" == e.pmtSource) &&
                        u < 6 &&
                        !o(e.possBy) &&
                        (s.push({
                          labelText: "Status",
                          valueText: "Possession by " + e.possBy,
                        }),
                        (u += 1)),
                      (o(e.comUsp1Src) ||
                        (!o(e.comUsp1Src) &&
                          "isCornerPlot" !== e.comUsp1Src)) &&
                        (o(e.comUsp2Src) ||
                          (!o(e.comUsp2Src) &&
                            "isCornerPlot" !== e.comUsp2Src)) &&
                        !o(e.isCornerPlot) &&
                        "Y" == e.isCornerPlot &&
                        u < 6 &&
                        ((c = "Corner Shop"),
                        o(e.amenFacingD) ||
                          "Not Available" === e.amenFacingD ||
                          (c = c + "|" + e.amenFacingD),
                        s.push({ labelText: "Sides Open", valueText: c }),
                        (u += 1)),
                      !o(e.cg) &&
                        "r" == e.cg &&
                        (o(e.comUsp1Src) ||
                          (!o(e.comUsp1Src) && "comAsRt" !== e.comUsp1Src)) &&
                        (o(e.comUsp2Src) ||
                          (!o(e.comUsp2Src) && "comAsRt" !== e.comUsp2Src)) &&
                        !o(e.comAsRt) &&
                        u < 6 &&
                        (s.push({
                          labelText: "Assured Returns",
                          valueText: e.comAsRt + "% p.a.",
                        }),
                        (u += 1)),
                      !o(e.comEntWd) &&
                        u < 6 &&
                        (s.push({
                          labelText: "Entrance",
                          valueText: e.comEntWd + " ft wide",
                        }),
                        (u += 1)),
                      !o(e.pmtLockPeriod) &&
                        u < 6 &&
                        (s.push({
                          labelText: "Lock In Period",
                          valueText: e.pmtLockPeriod + " years",
                        }),
                        (u += 1)),
                      !o(e.availableFrom) &&
                        "Ready to Move" !== e.possStatusD &&
                        "Immediately" !== e.possStatusD &&
                        u < 6 &&
                        (s.push({
                          labelText: "Available From",
                          valueText: e.availableFrom,
                        }),
                        (u += 1)),
                      !o(e.acD) &&
                        u < 6 &&
                        ((c = e.acD),
                        "Under Construction" !== e.acD &&
                          "New Construction" !== e.acD &&
                          (c += " old"),
                        s.push({ labelText: "Property Age", valueText: c }),
                        (u += 1)),
                      !o(e.furnishedD) &&
                        u < 6 &&
                        (s.push({
                          labelText: "Furnishing Status",
                          valueText: e.furnishedD,
                        }),
                        (u += 1)),
                      !o(e.waterStatus) &&
                        u < 6 &&
                        (s.push({
                          labelText: "Water Availability",
                          valueText: e.waterStatus.replace(
                            "Water Availability",
                            ""
                          ),
                        }),
                        (u += 1)),
                      !o(e.parkingD) &&
                        u < 6 &&
                        (s.push({
                          labelText: "Parking",
                          valueText: e.parkingD,
                        }),
                        (u += 1)),
                      o(e.parkingD) &&
                        !o(e.comPkr) &&
                        u < 6 &&
                        (s.push({
                          labelText: "ParkingRatio",
                          valueText: e.comPkr + ":1000 sqft",
                        }),
                        (u += 1)),
                      !o(e.cg) &&
                        "r" == e.cg &&
                        !o(e.comSplZone) &&
                        u < 6 &&
                        (s.push({ labelText: "Zone", valueText: e.comSplZone }),
                        (u += 1)),
                      !o(e.cg) &&
                        "r" == e.cg &&
                        (o(e.comUsp1Src) ||
                          (!o(e.comUsp1Src) && "comVs" !== e.comUsp1Src)) &&
                        (o(e.comUsp2Src) ||
                          (!o(e.comUsp2Src) && "comVs" !== e.comUsp2Src)) &&
                        !o(e.comVs) &&
                        u < 6 &&
                        (s.push({
                          labelText: "Virtual Space",
                          valueText: "Virtual Space Option Available",
                        }),
                        (u += 1)),
                      !o(e.comZone) &&
                        u < 6 &&
                        (s.push({ labelText: "Zoning", valueText: e.comZone }),
                        (u += 1)),
                      !o(e.facingD) &&
                        u < 6 &&
                        (s.push({ labelText: "Facing", valueText: e.facingD }),
                        (u += 1)))
                    : o(e.cg) ||
                      "r" != e.cg ||
                      (!o(e.floorNo) &&
                        u < 6 &&
                        ((c = e.floorNo),
                        o(e.floors) || (c = c + " out of " + e.floors),
                        s.push({ labelText: "Floor", valueText: c }),
                        (u += 1)),
                      (o(e.comUsp1Src) ||
                        (!o(e.comUsp1Src) &&
                          "isCornerPlot" !== e.comUsp1Src)) &&
                        (o(e.comUsp2Src) ||
                          (!o(e.comUsp2Src) &&
                            "isCornerPlot" !== e.comUsp2Src)) &&
                        !o(e.isCornerPlot) &&
                        "Y" == e.isCornerPlot &&
                        u < 6 &&
                        ((c = "Corner Shop"),
                        o(e.amenFacingD) ||
                          "Not Available" === e.amenFacingD ||
                          (c = c + "|" + e.amenFacingD),
                        s.push({ labelText: "Sides Open", valueText: c }),
                        (u += 1)),
                      !o(e.comEntWd) &&
                        u < 6 &&
                        (s.push({
                          labelText: "Entrance",
                          valueText: e.comEntWd + " ft wide",
                        }),
                        (u += 1)),
                      !o(e.pmtLockPeriod) &&
                        u < 6 &&
                        (s.push({
                          labelText: "Lock In Period",
                          valueText: e.pmtLockPeriod + " years",
                        }),
                        (u += 1)),
                      !o(e.availableFrom) &&
                        "Ready to Move" !== e.possStatusD &&
                        "Immediately" !== e.possStatusD &&
                        u < 6 &&
                        (s.push({
                          labelText: "Available From",
                          valueText: e.availableFrom,
                        }),
                        (u += 1)),
                      !o(e.possStatusD) &&
                        "Immediately" == e.possStatusD &&
                        u < 6 &&
                        (s.push({
                          labelText: "Availability",
                          valueText: e.possStatusD + " Available",
                        }),
                        (u += 1)),
                      !o(e.acD) &&
                        u < 6 &&
                        ((c = e.acD),
                        "Under Construction" !== e.acD &&
                          "New Construction" !== e.acD &&
                          (c += " old"),
                        s.push({ labelText: "Property Age", valueText: c }),
                        (u += 1)),
                      !o(e.furnishedD) &&
                        u < 6 &&
                        (s.push({
                          labelText: "Furnishing Status",
                          valueText: e.furnishedD,
                        }),
                        (u += 1)),
                      !o(e.waterStatus) &&
                        u < 6 &&
                        (s.push({
                          labelText: "Water Availability",
                          valueText: e.waterStatus.replace(
                            "Water Availability",
                            ""
                          ),
                        }),
                        (u += 1)),
                      !o(e.parkingD) &&
                        u < 6 &&
                        (s.push({
                          labelText: "Parking",
                          valueText: e.parkingD,
                        }),
                        (u += 1)),
                      o(e.parkingD) &&
                        !o(e.comPkr) &&
                        u < 6 &&
                        (s.push({
                          labelText: "ParkingRatio",
                          valueText: e.comPkr + ":1000 sqft",
                        }),
                        (u += 1)),
                      !o(e.cg) &&
                        "r" == e.cg &&
                        !o(e.comSplZone) &&
                        u < 6 &&
                        (s.push({ labelText: "Zone", valueText: e.comSplZone }),
                        (u += 1)),
                      !o(e.comZone) &&
                        u < 6 &&
                        (s.push({ labelText: "Zoning", valueText: e.comZone }),
                        (u += 1)),
                      !o(e.facingD) &&
                        u < 6 &&
                        (s.push({ labelText: "Facing", valueText: e.facingD }),
                        (u += 1))))
              : (o(e.carpetArea) || "0" === e.carpetArea || o(e.carpAreaUnit)
                  ? o(e.coveredArea) ||
                    o(e.coverAreaUnitD) ||
                    ((c = p
                      ? t + " sqft"
                      : e.coveredArea +
                        " " +
                        e.coverAreaUnitD.replace(/-/g, "").toLowerCase()),
                    s.push({
                      labelText: "Super Area",
                      valueText: c,
                      dataIcon: "area",
                    }),
                    (u += 1))
                  : ((c = p
                      ? t + " sqft"
                      : e.carpetArea +
                        " " +
                        e.carpAreaUnit.replace(/-/g, "").toLowerCase()),
                    s.push({
                      labelText: "Carpet Area",
                      valueText: c,
                      dataIcon: "area",
                    }),
                    (u += 1)),
                "R" === n ||
                  "r" === n ||
                  (!o(e.cg) && "r" === e.cg) ||
                  (!o(e.possStatusD) &&
                    u < 6 &&
                    (("project" !== e.pmtSource &&
                      "NRI" !== e.pmtSource &&
                      ("Ready to Move" == e.possStatusD ||
                        "Immediately" == e.possStatusD)) ||
                      (!o(e.pmtSource) &&
                        0 < e.pmtSource.length &&
                        ("project" == e.pmtSource || "NRI" == e.pmtSource) &&
                        o(e.possBy))) &&
                    ("Immediately" == e.possStatusD
                      ? s.push({
                          labelText: "Status",
                          valueText: e.possStatusD + " Available",
                        })
                      : s.push({
                          labelText: "Status",
                          valueText: e.possStatusD,
                        }),
                    (u += 1)),
                  "project" !== e.pmtSource &&
                    "NRI" !== e.pmtSource &&
                    u < 6 &&
                    !o(e.availableFrom) &&
                    "Ready to Move" !== e.possStatusD &&
                    "Immediately" !== e.possStatusD &&
                    (s.push({
                      labelText: "Status",
                      valueText: "Possession by " + e.availableFrom,
                    }),
                    (u += 1)),
                  !o(e.pmtSource) &&
                    0 < e.pmtSource.length &&
                    ("project" == e.pmtSource || "NRI" == e.pmtSource) &&
                    u < 6 &&
                    !o(e.possBy) &&
                    (s.push({
                      labelText: "Status",
                      valueText: "Possession by " + e.possBy,
                    }),
                    (u += 1)),
                  !o(e.facingD) &&
                    u < 6 &&
                    "East" == e.facingD &&
                    (s.push({
                      labelText: "Facing",
                      valueText: e.facingD,
                      dataIcon: "facing",
                    }),
                    (u += 1)),
                  !o(e.bathD) &&
                    u < 6 &&
                    (s.push({ labelText: "Washroom", valueText: e.bathD }),
                    (u += 1)),
                  !o(e.parkingD) &&
                    u < 6 &&
                    (s.push({ labelText: "Parking", valueText: e.parkingD }),
                    (u += 1)),
                  !o(e.comPantry) &&
                    u < 6 &&
                    (s.push({ labelText: "Pantry", valueText: e.comPantry }),
                    (u += 1)),
                  !o(e.amenFacingD) &&
                    ("Main Road" == e.amenFacingD ||
                      e.amenFacingD.includes("Main Road")) &&
                    u < 6 &&
                    (s.push({
                      labelText: "Overlooking",
                      valueText: e.amenFacingD.replace(" Facing", ""),
                    }),
                    (u += 1)),
                  !o(e.floorNo) &&
                    u < 6 &&
                    ((p = e.floorNo),
                    o(e.floors) || (p = p + " out of " + e.floors),
                    s.push({
                      labelText: "Floor",
                      valueText: p,
                      dataIcon: "floor",
                    }),
                    (u += 1)),
                  !o(e.furnishedD) &&
                    !o(e.possStatusD) &&
                    "Ready to Move" == e.possStatusD &&
                    u < 6 &&
                    ((t = ""),
                    (t =
                      "Unfurnished" == e.furnishedD
                        ? "Bareshell"
                        : e.furnishedD),
                    s.push({ labelText: "Furnishing Status", valueText: t }),
                    (u += 1)),
                  !(
                    (o(e.pmtTCabin) &&
                      o(e.totalSeat) &&
                      ("Y" != l || o(e.smr))) ||
                    (!o(e.furnishedD) && "Unfurnished" === e.furnishedD)
                  ) &&
                    u < 6 &&
                    ((n = c = ""),
                    (o(e.pmtTCabin) && ("Y" != l || o(e.smr))) ||
                      ((n = "Cabins"),
                      (c = "Y" == l ? (o(e.smr) ? "" : e.smr) : e.pmtTCabin),
                      o(e.totalSeat) && "Y" != l) ||
                      ((n += "|"),
                      "Y" == l ? (c = c + !o(e.smr) ? "|" : "") : (c += "|")),
                    (o(e.totalSeat) && "Y" != l) ||
                      ((n += "Seats"),
                      "Y" == l
                        ? ((p = "" + i).endsWith(".0") &&
                            (c += i.replace(".0", "")),
                          p.endsWith(".0") || (c += i))
                        : (c += e.totalSeat)),
                    s.push({ labelText: n, valueText: c }),
                    (u += 1)),
                  !o(e.acD) &&
                    u < 6 &&
                    ((t = e.acD),
                    "Under Construction" !== e.acD &&
                      "New Construction" !== e.acD &&
                      (t += " old"),
                    s.push({ labelText: "Property Age", valueText: t }),
                    (u += 1))),
                o(e.cg) ||
                  "r" != e.cg ||
                  (!o(e.furnishedD) &&
                    u < 6 &&
                    ((l = ""),
                    (l =
                      "Unfurnished" == e.furnishedD
                        ? "Bareshell"
                        : "Furnished" == e.furnishedD
                        ? "Ready to Move"
                        : e.furnishedD),
                    s.push({ labelText: "Furnishing Status", valueText: l }),
                    (u += 1)),
                  !(
                    (o(e.pmtTCabin) && o(e.totalSeat)) ||
                    (!o(e.furnishedD) && "Unfurnished" === e.furnishedD)
                  ) &&
                    u < 6 &&
                    ((i = p = ""),
                    o(e.pmtTCabin) ||
                      ((i = "Cabins"), (p = e.pmtTCabin), o(e.totalSeat)) ||
                      ((i += "|"), (p += "|")),
                    o(e.totalSeat) || ((i += "Seats"), (p += e.totalSeat)),
                    s.push({ labelText: i, valueText: p }),
                    (u += 1)),
                  !o(e.parkingD) &&
                    u < 6 &&
                    (s.push({ labelText: "Parking", valueText: e.parkingD }),
                    (u += 1)),
                  !o(e.bathD) &&
                    u < 6 &&
                    (s.push({ labelText: "Washroom", valueText: e.bathD }),
                    (u += 1)),
                  !o(e.comPantry) &&
                    u < 6 &&
                    (s.push({ labelText: "Pantry", valueText: e.comPantry }),
                    (u += 1)),
                  !o(e.amenFacingD) &&
                    ("Main Road" == e.amenFacingD ||
                      e.amenFacingD.includes("Main Road")) &&
                    u < 6 &&
                    (s.push({
                      labelText: "Overlooking",
                      valueText: e.amenFacingD.replace(" Facing", ""),
                    }),
                    (u += 1)),
                  !o(e.amenities) &&
                    e.amenities.includes("12215") &&
                    u < 6 &&
                    (s.push({
                      labelText: "Air Conditioning",
                      valueText: "Air Conditioned",
                    }),
                    (u += 1)),
                  !o(e.floorNo) &&
                    u < 6 &&
                    ((n = e.floorNo),
                    o(e.floors) || (n = n + " out of " + e.floors),
                    s.push({ labelText: "Floor", valueText: n }),
                    (u += 1)),
                  !o(e.facingD) &&
                    u < 6 &&
                    (s.push({ labelText: "Facing", valueText: e.facingD }),
                    (u += 1)),
                  !o(e.acD) &&
                    u < 6 &&
                    ((c = e.acD),
                    "Under Construction" !== e.acD &&
                      "New Construction" !== e.acD &&
                      (c += " old"),
                    s.push({ labelText: "Property Age", valueText: c }),
                    (u += 1)),
                  !o(e.availableFrom) &&
                    "Ready to Move" !== e.possStatusD &&
                    "Immediately" !== e.possStatusD &&
                    u < 6 &&
                    (s.push({
                      labelText: "Available From",
                      valueText: e.availableFrom,
                    }),
                    (u += 1)))),
            s
          );
        };
      function o(e) {
        return void 0 === e || null == e || "" === e;
      }
    },
    294: function (e, t, a) {
      "use strict";
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
        return r;
      }
      a.d(t, "a", function () {
        return n;
      }),
        a.d(t, "b", function () {
          return o;
        });
      var n = function (e) {
          var t = [];
          if (!l(e.hasDataForCnPoi) && "true" == e.hasDataForCnPoi) {
            e = e.dataForCnPoi;
            for (var a = 0, r = Object.entries(e); a < r.length; a++) {
              var n = {
                uspNearIcon: (n = r[a])[1].iconName,
                uspNearText: n[0] + n[1].value,
              };
              if ((t.push(n), 2 == t.length || 2 < t.length)) break;
            }
          }
          return t;
        },
        o = function (e) {
          var t = [];
          if (
            !l(e.hasDataForCommerHighlights) &&
            "true" == e.hasDataForCommerHighlights
          ) {
            var a,
              n = (function (e, t) {
                var a,
                  n,
                  o,
                  l,
                  i =
                    ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
                if (i)
                  return (
                    (n = !(a = !0)),
                    {
                      s: function () {
                        i = i.call(e);
                      },
                      n: function () {
                        var e = i.next();
                        return (a = e.done), e;
                      },
                      e: function (e) {
                        (n = !0), (o = e);
                      },
                      f: function () {
                        try {
                          a || null == i.return || i.return();
                        } finally {
                          if (n) throw o;
                        }
                      },
                    }
                  );
                if (
                  Array.isArray(e) ||
                  (i = (function (e, t) {
                    var a;
                    if (e)
                      return "string" == typeof e
                        ? r(e, t)
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
                        ? r(e, t)
                        : void 0;
                  })(e)) ||
                  (t && e && "number" == typeof e.length)
                )
                  return (
                    i && (e = i),
                    (l = 0),
                    {
                      s: (t = function () {}),
                      n: function () {
                        return l >= e.length
                          ? { done: !0 }
                          : { done: !1, value: e[l++] };
                      },
                      e: function (e) {
                        throw e;
                      },
                      f: t,
                    }
                  );
                throw new TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })(e.dataForCommerHighlights);
            try {
              for (n.s(); !(a = n.n()).done; ) {
                var o = a.value;
                t.push(o);
              }
            } catch (e) {
              n.e(e);
            } finally {
              n.f();
            }
          }
          return t;
        };
      function l(e) {
        return void 0 === e || null == e || "" === e;
      }
    },
    296: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r),
        o = ((r = a(22)), a.n(r));
      t.a = function (e) {
        var t = e.offerLabel;
        e = e.offerText;
        return n.a.createElement(
          "div",
          { className: "mb-srp-m__card__offer" },
          n.a.createElement(
            "span",
            { className: "mb-srp-m__card__offer--label" },
            t
          ),
          n.a.createElement("p", null, o()(e))
        );
      };
    },
    297: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return n;
      }),
        a.d(t, "a", function () {
          return o;
        }),
        a.d(t, "c", function () {
          return l;
        }),
        a(0);
      var r = a(14),
        n = function (e, t) {
          r.a
            .get(
              "/getCommercialOfficeProjects.html?locality=" +
                e.locality +
                "&Category=" +
                e.category
            )
            .then(function (e) {
              t(e.data.projectDetail);
            });
        },
        o = function (e) {
          var t = !1;
          return (
            (void 0 !== e.propertyType &&
              null !== e.propertyType &&
              0 < e.propertyType.length &&
              "10007" == e.propertyType[0] &&
              "10018" == e.propertyType[1]) ||
            t
          );
        },
        l = function (e, t) {
          null != e.zone
            ? r.a
                .get(
                  "/getBuilderDetailsSRP.html?ct=" + e.city + "&zone=" + e.zone
                )
                .then(function (e) {
                  t(e.data.projectDetail);
                })
            : null != e.locality
            ? r.a
                .get(
                  "/getBuilderDetailsSRP.html?ct=" +
                    e.city +
                    "&lt=" +
                    e.locality +
                    "&localityFlag=" +
                    !0
                )
                .then(function (e) {
                  t(e.data.projectDetail);
                })
            : t(null);
        };
    },
    298: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r),
        o = a(2);
      t.a = function (e) {
        var t = Object(o.d)(function (e) {
          return e.multilingualData;
        });
        return n.a.createElement(
          "div",
          { className: "floating-filter" },
          n.a.createElement(
            "div",
            { className: "floating-filter__wrap" },
            n.a.createElement(
              "div",
              { className: "floating-filter__column" },
              n.a.createElement(
                "div",
                { className: "floating-filter__heading" },
                t && t[e.heading] ? t[e.heading] : e.heading
              )
            ),
            n.a.createElement(
              "div",
              { className: "floating-filter__column" },
              n.a.createElement(
                "div",
                { className: "floating-filter__switch-on-off" },
                n.a.createElement("input", {
                  type: "checkbox",
                  onChange: e.onChange,
                  name: e.floatingFilterCat,
                  class: "floating-filter__switch-on-off__input",
                  id: e.floatingFilterId,
                  value: "",
                }),
                n.a.createElement(
                  "label",
                  {
                    class: "floating-filter__switch-on-off__label",
                    htmlFor: e.floatingFilterId,
                  },
                  n.a.createElement("div", {
                    className: "floating-filter__switch-on-off__label__track",
                  }),
                  n.a.createElement("div", {
                    className: "floating-filter__switch-on-off__label__thumb",
                  })
                )
              )
            )
          )
        );
      };
    },
    300: function (e, t, a) {
      "use strict";
      function r(e) {
        var t = e.infoTitle;
        e = e.infoValue;
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            "span",
            { className: "mb-srp-m__card__otrInfo__usp--tag" },
            t,
            ": ",
            e
          )
        );
      }
      function n(e) {
        var t = e.infoIcon;
        e = e.infoText;
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            "div",
            {
              class: "mb-srp-m__card__ads__shield--item",
              "data-shieldicon": t,
            },
            e
          )
        );
      }
      function o(e) {
        e = e.cardData;
        var t =
            !Object(f.t)(e.companyname) && 0 < e.companyname.length
              ? e.companyname
              : !Object(f.t)(e.contName) && 0 < e.contName.length
              ? e.contName
              : e.oname,
          a = t.charAt(0);
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            "div",
            { className: "mb-srp-m__card__ads__info" },
            i.a.createElement(
              "div",
              { className: "mb-srp-m__card__ads__info--letter" },
              " ",
              a
            ),
            i.a.createElement(
              "div",
              { className: "mb-srp-m__card__ads__info--right" },
              i.a.createElement(
                "div",
                { className: "mb-srp-m__card__ads__info--name" },
                t
              ),
              e && !Object(f.t)(e.agentContinuityStr)
                ? i.a.createElement(
                    "div",
                    { className: "mb-srp-m__card__ads__info--buyer" },
                    e.agentContinuityStr
                  )
                : Object(f.t)(e.operatingSince)
                ? Object(f.t)(e.opSnD)
                  ? Object(f.t)(e.devOpSn)
                    ? null
                    : i.a.createElement(
                        "div",
                        { className: "mb-srp-m__card__ads__info--buyer" },
                        "Operating Since: ",
                        e.devOpSn
                      )
                  : i.a.createElement(
                      "div",
                      { className: "mb-srp-m__card__ads__info--buyer" },
                      "Operating Since: ",
                      e.opSnD
                    )
                : i.a.createElement(
                    "div",
                    { className: "mb-srp-m__card__ads__info--buyer" },
                    "Operating Since: ",
                    e.operatingSince
                  )
            )
          )
        );
      }
      var l = a(0),
        i = a.n(l),
        c = a(22),
        s = a.n(c),
        u = a(2),
        p = a(3),
        m = a(61),
        d = a(293),
        b = (a(251), a(158)),
        f = a(1),
        y = a(431);
      function g(e, t) {
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
                l,
                i = [],
                c = !0,
                s = !1;
              try {
                if (((o = (a = a.call(e)).next), 0 === t)) {
                  if (Object(a) !== a) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(a)).done) &&
                    (i.push(r.value), i.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (n = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != a.return &&
                    ((l = a.return()), Object(l) !== l)
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
                        (a = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
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
      }
      function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
        return r;
      }
      t.a = function (e) {
        e.seoSearch;
        var t = e.card,
          a = e.search,
          c = e.propertyGaObj,
          v = (e.appExclusive, e.additionalBeanData),
          h = e.category,
          _ = e.dynamicListing,
          S = e.landmarkDetails,
          T = e.isNearMeSeoUrl,
          N = e.disablePsmRedirection,
          P = e.psmRedirectionUrl,
          O = e.societyMap,
          E = ((e = e.cardTrueCallClick), ""),
          x = "",
          D =
            v &&
            v.searchForm &&
            v.searchForm.page &&
            parseInt(v.searchForm.page),
          w = void 0 !== t.pEmail && null !== t.pEmail ? t.pEmail : "",
          C =
            null !== t.dynamicCardDescSeo && void 0 !== t.dynamicCardDescSeo
              ? t.dynamicCardDescSeo
              : "",
          j =
            ((w = Object(b.d)(
              t.lc,
              t.pc,
              t.agtCerStatus,
              t.commGuru,
              w,
              t.sid,
              h,
              t,
              a
            ).splice(0, 2)),
            Object(u.c)());
        _ =
          "commercial" == a
            ? Object(d.a)(t, v, !0, h, _.sharedOfficeSpace, _.dynamicSeatsValue)
            : Object(m.d)(t, v.dynamicArea, !0, h);
        function k(e, t) {
          e.stopPropagation(),
            "readMore" == t
              ? (j(
                  Object(p.e)({
                    event: "event_tracking",
                    eventName: "revamp_srp_proptuple_misc",
                    nonInteraction: !1,
                    eventCategory: "property tuple misc actions",
                    eventAction: "read more description",
                    eventLabel: "propertysearch | property tuple",
                    eventValue: "",
                    propertyGaObj: c,
                  })
                ),
                I(!1))
              : I(!0);
        }
        (_ =
          null !== (_ = "commercial" == a ? Object(m.c)(_, a) : _) &&
          6 < _.length
            ? _.splice(2, 4)
            : null !== _ && 0 < _.length
            ? _.splice(2, _.length - 1)
            : _),
          null !=
            (E =
              null ==
              (a = E =
                v &&
                v.isSeoSearch &&
                null != t.seoDesc &&
                "" !== t.seoDesc &&
                (NaN == D || D <= 5)
                  ? null == t.dtldesc ||
                    "" === t.dtldesc ||
                    t.dtldesc.includes("AUTO_DES")
                    ? t.seoDesc
                    : 220 < t.dtldesc.length
                    ? t.dtldesc
                    : ((x = t.dtldesc + " " + t.seoDesc),
                      t.dtldesc + "<br><br>" + t.seoDesc)
                  : null != t.dtldesc && "" !== t.dtldesc
                  ? t.dtldesc
                  : t.auto_desc)
                ? void 0
                : a.replace("AUTO_DES", "")) && (E += C),
          t &&
            t.ty &&
            "10017" == t.ty &&
            v &&
            v.intentSeoSlug &&
            "independent-house" == v.intentSeoSlug.toLowerCase() &&
            null != E &&
            ((D = E.lastIndexOf("villa")),
            (a = E.lastIndexOf("Villa")),
            (C = Math.max(D, a)),
            (E =
              E.slice(0, C)
                .replace(/villa /g, "house ")
                .replace(/Villa /g, "House ") +
              E.slice(C)
                .replace(/villa /g, "villa / house ")
                .replace(/Villa /g, "Villa / House ")));
        D = (v = g(Object(l.useState)(!0), 2))[0];
        var I = v[1],
          A = ((C = (a = g(Object(l.useState)(!0), 2))[0]), a[1]);
        Object(l.useEffect)(function () {
          A(!1);
        }, []),
          (v = "");
        return (
          1 == C
            ? (v = i.a.createElement(
                "div",
                { className: "mb-srp-m__card--desc--text readmore-desc" },
                i.a.createElement("p", null, s()(E))
              ))
            : 1 == D
            ? null != E && 60 < E.length
              ? (E.substring(0, 60),
                null != x && 60 < x.length && x.substring(0, 60),
                (v = i.a.createElement(
                  "div",
                  { className: "mb-srp-m__card--desc--text readmore-desc" },
                  i.a.createElement("p", null, s()(E)),
                  i.a.createElement("span", {
                    className: "mb-srp-m__card--desc--readmore",
                    onClick: function (e) {
                      return k(e, "readMore");
                    },
                  })
                )))
              : null != E &&
                (v = i.a.createElement(
                  "div",
                  {
                    className:
                      "mb-srp-m__card--desc--text mb-srp-m__card--desc--text-noWrap",
                  },
                  i.a.createElement("p", null, s()(E))
                ))
            : (v = i.a.createElement(
                "div",
                { className: "mb-srp-m__card--desc--text" },
                i.a.createElement("p", null, s()(E)),
                (void 0 === T || null == T) &&
                  null != h &&
                  ("r" == h || "R" == h) &&
                  i.a.createElement(y.a, { landmarkDetails: S }),
                i.a.createElement(
                  "span",
                  {
                    className: "mb-srp-m__card--desc--readmore lesstxt",
                    onClick: function (e) {
                      return k(e, "readLess");
                    },
                  },
                  "Read Less"
                )
              )),
          !Object(f.t)(N) &&
            N &&
            (_ = _.filter(function (e, t) {
              return "Society" != e.labelText;
            })),
          i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              "div",
              {
                className: "mb-srp-m__card--desc ".concat(
                  D ? "" : "show-other-info"
                ),
              },
              v,
              i.a.createElement(
                "div",
                {
                  className: "mb-srp-m__card__otrInfo ".concat(
                    D ? "seo-hide-info" : ""
                  ),
                },
                null != _ &&
                  0 < _.length &&
                  i.a.createElement(
                    "div",
                    { className: "mb-srp-m__card__otrInfo__usp" },
                    _.map(function (e, t) {
                      return i.a.createElement(r, {
                        infoTitle: e.labelText,
                        infoValue: e.valueText,
                      });
                    }),
                    !Object(f.t)(N) &&
                      N &&
                      O.societyName &&
                      i.a.createElement(
                        "a",
                        {
                          href: P,
                          className: "mb-srp-m__card__otrInfo__usp--tag",
                          onClick: e,
                        },
                        " ",
                        O.societyName
                      )
                  ),
                i.a.createElement(
                  "div",
                  { className: "mb-srp-m__card__ads" },
                  i.a.createElement(o, { cardData: t }),
                  null != w &&
                    0 < w.length &&
                    i.a.createElement(
                      "div",
                      { class: "mb-srp-m__card__ads__shield" },
                      w.map(function (e, t) {
                        return i.a.createElement(n, {
                          infoIcon: e.icon,
                          infoText: e.text,
                        });
                      })
                    )
                )
              )
            )
          )
        );
      };
    },
    305: function (e, t, a) {
      "use strict";
      function r(e) {
        var t = Object(l.d)(function (e) {
            return e.multilingualData;
          }),
          a = null,
          r = null;
        return o.a.createElement(
          "div",
          { className: "floating-filter" },
          o.a.createElement(
            "div",
            { className: "floating-filter__wrap single-line" },
            o.a.createElement(
              "div",
              { className: "floating-filter__column" },
              o.a.createElement(
                "div",
                { className: "floating-filter__heading" },
                t && t[e.heading] ? t[e.heading] : e.heading
              )
            ),
            o.a.createElement(
              "div",
              { className: "floating-filter__column" },
              o.a.createElement(i.a, {
                min: e.min,
                max: e.max,
                currentValueMin: e.currentValueMin,
                currentValueMax: e.currentValueMax,
                diffValue: e.diffValue,
                budgetType: e.budgetType,
                minKayName: "budgetMin",
                maxKayName: "budgetMax",
                rupeeIcon: "₹",
                budgetRange: e.budgetRange,
                callBack: function (e, t) {
                  "budgetMin" == e && (r = t), "budgetMax" == e && (a = t);
                },
                callBackTitle: function (e, t) {},
              }),
              o.a.createElement(
                "div",
                {
                  className: "floating-filter__apply-btn",
                  onClick: function () {
                    return e.callBack(r, a);
                  },
                },
                t && t[e.buttonText] ? t[e.buttonText] : e.buttonText
              )
            )
          )
        );
      }
      var n = a(0),
        o = a.n(n),
        l = a(2),
        i = a(221);
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
      function s(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(a), !0).forEach(function (t) {
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
            : s(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      t.a = function (e) {
        var t = e.budgetMin,
          a = e.budgetMax,
          n = (e.length, e.index, e.floatingFilterBudgetBuy),
          i = e.category,
          c = e.additionalSearchBeanData,
          s =
            ((e = e.propType),
            Object(l.d)(function (e) {
              return e.multilingualData;
            })),
          p = Object(l.c)(),
          m = "R" == i ? 7e5 : 2e7,
          d = "R" == i ? 7e5 : 2e7,
          b = "R" == i ? 5e3 : 5e5,
          f = "R" == i ? "budget-rent" : "budget-buy",
          y = "Set your budget range",
          g = "Apply Budget",
          v =
            (null != e &&
              1 == e.length &&
              "10026" == e[0] &&
              ((y = "Set your budget/seat range"),
              (g = "Apply Budget Per Seat"),
              (b = 2e3),
              (i = "Coworking"),
              (d = m = 2e4),
              (f = "budget-coworking")),
            n(i));
        if (s)
          for (var h in v.range) {
            var _,
              S,
              T = v.range[h].name;
            -1 != T.indexOf(" ") &&
              ((S = s[(_ = T.split(" "))[1]]) && (T = _[0] + " " + S),
              (v.range[h].name = T));
          }
        return o.a.createElement(
          o.a.Fragment,
          null,
          null == t &&
            null == a &&
            o.a.createElement(r, {
              heading: y,
              min: 0,
              max: m,
              currentValueMin: 0,
              currentValueMax: d,
              diffValue: b,
              budgetType: f,
              budgetRange: v,
              buttonText: g,
              callBack: function (e, t) {
                p({ type: "budgetMax", data: t }),
                  p({ type: "budgetMin", data: e }),
                  p({
                    type: "NewAdditionalBeanData",
                    data: u(u({}, c), {
                      lastFilterData: {
                        type: "budgetMax,budgetMin",
                        data: t + "," + e,
                        appliedFor: "Floating_Applied",
                        isSelected: null,
                        name: null,
                        prev1: null,
                        prevValue: null,
                        type1: null,
                      },
                    }),
                  });
              },
            })
        );
      };
    },
    309: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r),
        o = a(2),
        l = a(139);
      t.a = function (e) {
        function t() {
          return "Unlock with Prime" === c;
        }
        var a = e.exclusiveTitleText,
          r = e.exclusiveTitleIcon,
          i = e.userType,
          c = e.btnText;
        e = e.BtnAction;
        return (
          Object(o.d)(function (e) {
            return e.searchBean;
          }),
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              "div",
              {
                className: "mb-srp-m__exclusive",
                style: t() ? { background: "#FFEBB3" } : {},
              },
              n.a.createElement(
                "div",
                { className: "mb-srp-m__exclusive__item" },
                !t() &&
                  n.a.createElement(
                    "div",
                    { className: "mb-srp-m__exclusive__title" },
                    r
                      ? n.a.createElement("div", {
                          class: "mb-srp-m__icon " + r,
                        })
                      : null,
                    a
                  ),
                n.a.createElement(
                  "div",
                  { className: "mb-srp-m__exclusive__userType" },
                  i
                )
              ),
              n.a.createElement(l.a, {
                BtnClassName: "mb-srp-m__action--btn medium ".concat(
                  t()
                    ? "btn-red"
                    : "btn-white btn-exclusive btn-exclusive-gray btn-anim"
                ),
                BtnText: c,
                BtnAction: e,
              })
            )
          )
        );
      };
    },
    344: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r);
      t.a = function (e) {
        var t,
          a = e.PtypeVal,
          r = e.rupeeIcon,
          o = e.multilingualData;
        e = a;
        return (
          r || (e = a.split(" ", 2).join(" ")),
          n.a.createElement(
            n.a.Fragment,
            null,
            r
              ? n.a.createElement(
                  n.a.Fragment,
                  null,
                  n.a.createElement(
                    "div",
                    { className: "text-sqft" },
                    n.a.createElement("span", { className: "rupees" }, "₹"),
                    e,
                    " / ",
                    ((t = ""),
                    (a = "sqft") !== a && a.includes("sqft")
                      ? a.split(" ").forEach(function (e) {
                          t +=
                            (null != o && o.hasOwnProperty(e) ? o[e] : e) + " ";
                        })
                      : (t = null != o && o.hasOwnProperty(a) ? o[a] : a),
                    t)
                  )
                )
              : n.a.createElement(n.a.Fragment, null, e)
          )
        );
      };
    },
    350: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r);
      t.a = function (e) {
        function t(e) {
          var t,
            a,
            r,
            n,
            o = "";
          try {
            o =
              "sqft" !== (e = e.trim()) && e.includes("sqft")
                ? (t = e.split(" "))[0] +
                  " " +
                  (null != i && i.hasOwnProperty(t[1]) ? i[t[1]] : t[1])
                : "Covered" !== e && e.includes("Covered")
                ? (a = e.split(" "))[0] +
                  " " +
                  (null != i && i.hasOwnProperty(a[1]) ? i[a[1]] : a[1])
                : "out of" !== e && e.includes("out of")
                ? ((r = (r = e.replace("out of", "#")).split("#")),
                  null != i && i.hasOwnProperty("out of")
                    ? r[1] + " " + i["out of"] + " " + r[0]
                    : e)
                : "sqyrd" !== e && e.includes("sqyrd")
                ? (n = e.split(" "))[0] +
                  " " +
                  (null != i && i.hasOwnProperty(n[1]) ? i[n[1]] : n[1])
                : null != i && i.hasOwnProperty(e)
                ? i[e]
                : e;
          } catch (e) {
            console.log(e);
          }
          return o;
        }
        var a = e.summaryLabelText,
          r = e.summaryValueText,
          o = e.summaryContentDisplay,
          l = e.summaryLabelModifier,
          i = e.multilingualData;
        return n.a.createElement(
          n.a.Fragment,
          null,
          o
            ? n.a.createElement(
                "div",
                { className: "mb-srp-m__card__summary__content" },
                t(a),
                " ",
                t(r)
              )
            : n.a.createElement(
                n.a.Fragment,
                null,
                n.a.createElement(
                  "div",
                  {
                    className: l
                      ? "mb-srp-m__card__summary__list--item " + l
                      : "mb-srp-m__card__summary__list--item",
                  },
                  n.a.createElement(
                    "div",
                    { className: "mb-srp-m__card__summary--label" },
                    t(a)
                  ),
                  n.a.createElement(
                    "div",
                    { className: "mb-srp-m__card__summary--value" },
                    t(r)
                  )
                )
              )
        );
      };
    },
    352: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return l;
      }),
        a.d(t, "a", function () {
          return i;
        });
      var r = a(14);
      function n(e, t) {
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
                l,
                i = [],
                c = !0,
                s = !1;
              try {
                if (((o = (a = a.call(e)).next), 0 === t)) {
                  if (Object(a) !== a) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(a)).done) &&
                    (i.push(r.value), i.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (n = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != a.return &&
                    ((l = a.return()), Object(l) !== l)
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
                ? o(e, t)
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
                ? o(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
        return r;
      }
      var l = function (e, t) {
          var a = "approvedByAuthoritiesSRP.html?";
          c(e.category) || (a = a + "&category=" + e.category),
            c(e.propertyType) ||
              (a = a + "&propertyType=" + e.propertyType.toString()),
            c(e.propertyType) ||
              (a = a + "&pType=" + e.propertyType.toString()),
            c(e.city) ||
              (a =
                !c(e.subUrb) && e.subUrb.includes("-")
                  ? a + "&city=" + e.subUrb
                  : c(e.subUrb) || e.city.includes("-")
                  ? a + "&city=" + e.city
                  : a + "&city=" + e.city + "-" + e.subUrb),
            r.a.get((a += "&alliance=&banks=&searchType=1")).then(function (e) {
              e.data, null != e.data && t(e.data);
            });
        },
        i = function (e) {
          var t = [];
          if (null !== e)
            for (var a = 0, r = Object.entries(e); a < r.length; a++) {
              var o = (l = n(r[a], 2))[0],
                l = l[1];
              t.push({
                name: l,
                id: "fl-authority_" + o,
                value: [o],
                cat: "fl-authority",
              });
            }
          return { title: "", filters: t };
        };
      function c(e) {
        return void 0 === e || null == e || "" === e;
      }
    },
    353: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return n;
      }),
        a.d(t, "a", function () {
          return o;
        });
      var r = a(1),
        n = function (e) {
          var t,
            a = "",
            n = "10002,10003,10022,10021,10001,10017";
          return (
            Object(r.t)(e.category) ||
              ((t = "B"),
              "R" == e.category &&
                ((t = "R"), (n = "10002,10003,10022,10021,10020,10001,10017")),
              (a = a + "&category=" + t)),
            "commercial" == e.search && (n = "10007,10018,10008,10009"),
            Object(r.t)(e.propertyType) || (a = a + "&propertyType=" + n),
            Object(r.t)(e.bhk) || (a = a + "&bedrooms=" + e.bhk.toString()),
            Object(r.t)(e.propertyType) ? a : a + "&pType=" + n
          );
        },
        o = function (e, t, a) {
          var n,
            o = "https://www.magicbricks.com";
          return Object(r.t)(e.category) ||
            ((n = "sale"),
            "R" == e.category && (n = "rent"),
            (o =
              "commercial" == e.search
                ? o +
                  "/property-for-" +
                  n +
                  "/commercial-real-estate?proptype=Commercial-Office-Space,Office-ITPark-SEZ,Commercial-Shop,Commercial-Showroom"
                : "rent" == n
                ? o +
                  "/property-for-" +
                  n +
                  "/residential-real-estate?proptype=Multistorey-Apartment,Builder-Floor-Apartment,Penthouse,Studio-Apartment,Service-Apartment,Residential-House,Villa"
                : o +
                  "/property-for-" +
                  n +
                  "/residential-real-estate?proptype=Multistorey-Apartment,Builder-Floor-Apartment,Penthouse,Studio-Apartment,Residential-House,Villa"),
            Object(r.t)(t) || (o = o + "&cityName=" + t),
            Object(r.t)(a))
            ? o
            : o + "&localityName=" + a;
        };
    },
    355: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      var r = a(207),
        n = a(14),
        o = function (e, t, a, o) {
          return function (l) {
            var i, c, s, u;
            if (e !== t)
              return (
                -1 ==
                  (i = Object(r.a)(a, o).split("editSearch=Y")[1]).indexOf(
                    "mbTrackSrc=tabChange"
                  ) && (i += "&mbTrackSrc=tabChange"),
                (i = (i = i.indexOf("category=B")
                  ? i.replace("category=B", "category=S")
                  : i)
                  .split("&")
                  .filter(function (e) {
                    return !e.includes("sortBy");
                  })
                  .filter(function (e) {
                    return !e.includes("localityName");
                  })
                  .filter(function (e) {
                    return !e.includes("psmid");
                  })
                  .join("&")),
                o.localityNames &&
                  0 < o.localityNames.length &&
                  ((i += "&Locality="),
                  (c = ""),
                  o.localityNames.map(function (e) {
                    c = c + e.value + ",";
                  }),
                  (i += c)),
                o.psmNames &&
                  0 < o.psmNames.length &&
                  ((i += "&projectSociety="),
                  (u = s = ""),
                  o.psmNames.map(function (e) {
                    (s = "" !== s ? s + "," + e.value : s + e.value),
                      (u = "" !== u ? u + "," + e.key : u + e.key);
                  }),
                  (i = (i += s) + "&psmid=" + u)),
                n.a.get("/generateSeoLink?" + i).then(function (e) {
                  var r, n, l;
                  e.data &&
                    ((r = "https://www.magicbricks.com"),
                    -1 == (e = e.data).indexOf("mbTrackSrc=tabChange") &&
                      (e += "&mbTrackSrc=tabChange"),
                    4 == t &&
                      (r =
                        r +
                        "/mbsrp/project-for-sale/new-launch-projects-in-" +
                        o.cityName.value +
                        "?" +
                        i),
                    3 == t
                      ? (r =
                          r +
                          "/Real-estate-property-top-agents/agent-in-" +
                          o.cityName.value +
                          "?" +
                          e)
                      : 2 == t
                      ? (r =
                          r +
                          "/Real-estate-projects-Search/residential-new-project?" +
                          e)
                      : 1 == t &&
                        ((n = "sale"),
                        "S" != a.category && "B" != a.category && (n = "rent"),
                        new URLSearchParams(window.location.search),
                        (r =
                          null !=
                            (l = sessionStorage.getItem("campaignForSrp")) &&
                          "true" === l
                            ? r +
                              "/mbsrp/property-forcampaign-" +
                              n +
                              "?" +
                              (e =
                                e +
                                "&utm_campaign=" +
                                sessionStorage.getItem("utm_campaign") +
                                "&utm_source=" +
                                sessionStorage.getItem("utm_source") +
                                "&utm_medium=" +
                                sessionStorage.getItem("utm_medium") +
                                "&campaignForSrp=true")
                            : r +
                              "/property-for-" +
                              n +
                              "/residential-real-estate?" +
                              e)),
                    (window.location.href = r));
                })
              );
          };
        };
    },
    427: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return n;
      });
      var r = a(14),
        n = function (e, t) {
          r.a.get("/getpropworth?id=" + e.id).then(function (e) {
            null !== e.data && t(e.data);
          });
        };
    },
    429: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      }),
        a.d(t, "b", function () {
          return n;
        }),
        a(14);
      var r = function (e) {
          return o(e.possStatusD) ||
            ("Immediately" != e.possStatusD && "Ready to Move" != e.possStatusD)
            ? "Under Construction"
            : e.possStatusD;
        },
        n = function (e) {
          return o(e.ca) || "0" === e.ca
            ? (!o(e.ca) && (o(e.ca) || "0" === e.ca)) || o(e.la) || "0" === e.la
              ? void 0
              : e.la + " " + e.landAreaUnitD.replace("-", "").toLowerCase()
            : e.ca + " " + e.coverAreaUnitD.replace("-", "").toLowerCase();
        };
      function o(e) {
        return void 0 === e || null == e || "" === e;
      }
    },
    430: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r),
        o = a(2),
        l = a(174);
      function i(e, t) {
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
                l,
                i = [],
                c = !0,
                s = !1;
              try {
                if (((o = (a = a.call(e)).next), 0 === t)) {
                  if (Object(a) !== a) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(a)).done) &&
                    (i.push(r.value), i.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (n = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != a.return &&
                    ((l = a.return()), Object(l) !== l)
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
                ? c(e, t)
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
                ? c(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
        return r;
      }
      t.a = function (e) {
        var t = e.mapLinkText,
          a = e.cardData,
          c = e.finalPrice,
          s = e.cardTitle,
          u = e.setOpenBurgerMenu,
          p = Object(o.c)(),
          m = ((e = i(Object(r.useState)(!1), 2))[0], e[1]),
          d = ((e = i(Object(r.useState)(null), 2))[0], e[1]);
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            "div",
            {
              className: "mb-srp-m__card__map--link",
              onClick: function (e) {
                var t;
                (t = a),
                  e.stopPropagation(),
                  p(Object(l.a)(t, "", "Y", d, m, c, s)),
                  u(!1);
              },
            },
            t
          )
        );
      };
    },
    432: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return n;
      });
      var r = a(44),
        n = function (e, t) {
          var a = "N",
            n = 0,
            i = 0,
            c = 0,
            s = 0,
            u = 0,
            p = 0;
          return (
            "Y" != t.dynamicListing ||
              ("Y" != e.ssFlag && "10026" != e.ty) ||
              ((n =
                null != e.sPrice && null != e.sPrice && "" != e.sPrice
                  ? o(e.sPrice)
                  : n),
              l(e.priceD) ||
                e.priceD.includes("Call for Price") ||
                (i =
                  null != e.priceD && null != e.priceD && "" != e.priceD
                    ? o(e.priceD)
                    : i),
              (c =
                null != e.totalSeat && null != e.totalSeat && "" != e.totalSeat
                  ? o(e.totalSeat)
                  : c),
              !l(e.priceD) && e.priceD.includes("Lac") && (i *= 1e5),
              "10026" == e.ty && (s = c * i),
              "10007" != e.ty && "10018" != e.ty && "10026" != e.ty) ||
              !(
                0 < t.dynamicSeats ||
                (!l(t.dynamicArea) && 0 < t.dynamicArea) ||
                (!l(t.dynamicBudget) && 0 < t.dynamicBudget)
              ) ||
              (0 < t.dynamicSeats
                ? (p = t.dynamicSeats)
                : !l(t.dynamicArea) && 0 < t.dynamicArea
                ? ((p =
                    "10026" == e.ty ? t.dynamicArea / 70 : t.dynamicArea / 100),
                  (u = t.dynamicArea))
                : "10026" == e.ty
                ? (s = (p = t.dynamicBudget / i) * i)
                : (p = t.dynamicBudget / n),
              (u = 100 * p),
              "10026" !== e.ty &&
                (0 < t.dynamicSeats && p < c && (c < 1.2 * p || 1.2 * p == c)
                  ? (a = "N")
                  : "Furnished" == e.furnishedD
                  ? p < c && (a = "Y")
                  : null != e.carpetArea &&
                    null !== e.carpetArea &&
                    "0" !== e.carpetArea
                  ? p < (c = o(e.carpetArea) / 100) && (a = "Y")
                  : p <
                      (c =
                        (null != e.coveredArea &&
                        null != e.coveredArea &&
                        "0" != e.coveredArea
                          ? o(e.coveredArea)
                          : 0) / 100) && (a = "Y"),
                (s = p * n)),
              "10026" == e.ty && (s = p * i)),
            null != t.isCoworkingSearch &&
              "Y" == t.isCoworkingSearch &&
              ((i = t.dynamicSeats),
              l(t.dynamicSeats) && l(t.dynamicBudget) && (i = 8),
              ("10007" != e.ty && "10018" != e.ty) ||
                (!(0 < i) && l(t.dynamicBudget)) ||
                ((c =
                  null != e.totalSeat &&
                  null != e.totalSeat &&
                  "" != e.totalSeat
                    ? o(e.totalSeat)
                    : c),
                (n =
                  null != e.sPrice && null != e.sPrice && "" != e.sPrice
                    ? o(e.sPrice)
                    : n),
                0 < i
                  ? ((p = i),
                    "Furnished" == e.furnishedD
                      ? (p < c || p == c) &&
                        (e.ms < p || e.ms == p) &&
                        (a = "Y")
                      : null != e.carpetArea &&
                        null !== e.carpetArea &&
                        "0" !== e.carpetArea
                      ? (p < (c = o(e.carpetArea) / 100) || p == c) &&
                        (e.ms < p || e.ms == p) &&
                        (a = "Y")
                      : (p <
                          (c =
                            (null != e.coveredArea &&
                            null != e.coveredArea &&
                            "0" != e.coveredArea
                              ? o(e.coveredArea)
                              : 0) / 100) ||
                          p == c) &&
                        (e.ms < p || e.ms == p) &&
                        (a = "Y"))
                  : e.sPrice < t.dynamicBudget &&
                    e.sPrice > t.minInputBudget &&
                    ((a = "Y"), (p = e.totalSeat)),
                (s = e.sPrice))),
            {
              dynamicPriceValue: (s = 0 != s && "" != s ? Object(r.a)(s) : s),
              dynamicSeatsValue: p,
              dynamicAreaValue: u,
              sharedOfficeSpace: a,
              isCoworkingSearch: "Y",
            }
          );
        };
      function o(e) {
        return e.toString().replace(/\D/g, "");
      }
      function l(e) {
        return void 0 === e || null == e || "" === e;
      }
    },
    434: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return l;
      });
      var r = a(6),
        n = a(207);
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
      var l = function (e, t, a) {
          var r,
            n = u(e),
            o =
              (null != e.category &&
                (r = "r" != e.category.toLowerCase() ? "b" : "r"),
              "");
          "commercial" == e.search && (o = "c"),
            localStorage.setItem(o + r + "-searchurl", n),
            localStorage.setItem("lastCity", e.city),
            i(e, t),
            s(e, t, a);
        },
        i = function (e, t) {
          var a,
            o = "pageType=property",
            l = Object(n.a)(e, t).split("&"),
            i = !1;
          for (a in l) {
            var s = l[a];
            -1 != s.indexOf("=") &&
              (s = s.split("="))[0] &&
              s[1] &&
              ("propertyType_new" == s[0] ||
              "propertyType_R_new" == s[0] ||
              "propertyType" == s[0]
                ? 0 == i && ((o += "|propType=" + s[1]), (i = !0))
                : "city" == s[0]
                ? ((o += "|city=" + s[1]),
                  -1 != s[1].indexOf("-") &&
                    (s[1] = s[1].substring(0, s[1].indexOf("-"))),
                  (o += "|completeCityCode=" + s[1]))
                : "category" == s[0] || "categoryC" == s[0]
                ? (o += "|listType=" + s[1])
                : "bedrooms" == s[0]
                ? (o += "|bedrooms=" + s[1])
                : "budgetMin" == s[0]
                ? (o += "|minBudget=" + s[1])
                : "budgetMax" == s[0]
                ? (o += "|maxBudget=" + s[1])
                : "keyword" == s[0]
                ? (o += "|keyword=" + s[1])
                : "projectSocity" == s[0]
                ? (o += "|projectSocity=" + s[1])
                : "developerName" == s[0]
                ? (o += "|developerName=" + s[1])
                : "localityName" == s[0]
                ? (o += "|locality=" + s[1])
                : "nearByLoc" == s[0] && (o += "|nearByCheck=" + s[1]));
          }
          (e = !c(e.psmid) && 0 < e.psmid.length ? e.psmid.join(",") : ""),
            r.a.createCookieRem("psmIds", e, "30"),
            (null != t.isStateSearch && (t.isStateSearch || t.isCitySearch)) ||
              r.a.createCookieRem("mbRecommendationCookies", o, "30");
        };
      function c(e) {
        return void 0 === e || null == e || "" === e;
      }
      var s = function (e, t, a) {
          var r,
            n = "luxury" == t.searchType,
            o =
              (null != t.recentSearch && (r = JSON.parse(t.recentSearch)),
              JSON.parse(localStorage.getItem("rs-data")));
          if (
            (n &&
              r &&
              0 !== Object.getOwnPropertyNames(r).length &&
              ((t = []).push(r),
              localStorage.setItem("rs-LuxData", JSON.stringify(t))),
            (o = o || []),
            r && 0 !== Object.getOwnPropertyNames(r).length)
          ) {
            for (
              var l = [], i = !1, c = o.length < 4 ? o.length : 4, s = 0;
              s < c;
              s++
            ) {
              var u = o[s];
              p(r.searchParams, u.searchParams)
                ? (l.unshift(r), (i = !0))
                : l.push(o[s]);
            }
            i || (l = 4 == l.length ? l.slice(0, 3) : l).unshift(r),
              localStorage.setItem("rs-data", JSON.stringify(l)),
              i || a({ type: "recentSearchChange" });
          }
        },
        u = function (e) {
          var t = "";
          return (
            c(e.category) || (t = t + "&category=" + e.category),
            c(e.propertyType) ||
              (t = t + "&propertyType=" + e.propertyType.toString()),
            c(e.budgetMin) ||
              "0" === e.budgetMin ||
              (t = t + "&budgetMin=" + e.budgetMin),
            c(e.budgetMax) || (t = t + "&budgetMax=" + e.budgetMax),
            c(e.bhk) || (t = t + "&bedrooms=" + e.bhk.toString()),
            c(e.city) ||
              (t =
                !c(e.subUrb) && e.subUrb.includes("-")
                  ? t + "&city=" + e.subUrb
                  : c(e.subUrb) || e.city.includes("-")
                  ? t + "&city=" + e.city
                  : t + "&city=" + e.city + "-" + e.subUrb),
            c(e.locality)
              ? t
              : t + "&localityName=" + e.locality.toString().replace(/ /g, "-")
          );
        },
        p = function e(t, a) {
          for (var r in t) {
            if (t.hasOwnProperty(r) !== a.hasOwnProperty(r)) return !1;
            switch (o(t[r])) {
              case "object":
                if (e(t[r], a[r])) break;
                return !1;
              case "function":
                if (
                  void 0 === a[r] ||
                  ("compare" != r && t[r].toString() != a[r].toString())
                )
                  return !1;
                break;
              default:
                if (t[r] != a[r]) return !1;
            }
          }
          for (var r in a) {
            if (null == t) return !1;
            if (void 0 === t[r]) return !1;
          }
          return !0;
        };
    },
    435: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return d;
      });
      var r = a(207),
        n = a(14),
        o = a(1),
        l = a(6),
        i = a(189);
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
      function s(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return u(e);
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
                ? u(e, t)
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
                ? u(e, t)
                : void 0;
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
        return r;
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
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(a), !0).forEach(function (t) {
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
      var d = function (e, t, a, c, u, p, d) {
        try {
          var b, f, y, g, v, h, _, S, T, N, P;
          !Object(o.t)(c) &&
          0 < c.length &&
          !Object(o.t)(u.resultCount) &&
          29 < u.resultCount &&
          !Object(o.t)(d.isNonSEOPage) &&
          d.isNonSEOPage &&
          !Object(o.t)(u.showPrimePropertiesAtFixedSlots) &&
          "Y" == u.showPrimePropertiesAtFixedSlots
            ? ((b = l.a.readCookie("sessionCookieForContact")),
              (f = l.a.readCookie("userEmail")),
              (y = !1),
              (Object(o.t)(f) && (Object(o.t)(b) || "Y" != b)) || (y = !0),
              (g = !0),
              !Object(o.t)(e.inputListings) &&
                0 < e.inputListings.length &&
                ((v = e.inputListings.toString()),
                (1 == e.inputListings.length && "I" !== v) ||
                  (2 == e.inputListings.length && !v.includes("I"))) &&
                (g = !1),
              (h = "R" == e.category ? i.a : i.b),
              (_ =
                e.sortBy &&
                ("Lowest_Price" == e.sortBy ||
                  "Highest_Price" == e.sortBy ||
                  "postRecency" == e.sortBy ||
                  "Lowest_Sqft_Price" == e.sortBy ||
                  "Highest_Sqft_Price" == e.sortBy)),
              (S = []),
              (T = ""),
              c.map(function (e) {
                Object(o.t)(e.id) ||
                  ((T = Object(o.t)(T) ? e.id : T + "," + e.id),
                  Object(o.t)(e.cpmp)) ||
                  S.push(e);
              }),
              !Object(o.t)(c) &&
              0 < c.length &&
              e.pageNo &&
              1 == e.pageNo &&
              !d.primePropsAtFixedSlots &&
              y &&
              g &&
              !_ &&
              S.length >= h.split(",").length &&
              p &&
              "Y" != p.userPrimeMemberLoggedIn &&
              (Object(o.t)(u.nriUser) ||
                (!Object(o.t)(u.nriUser) && "N" == u.nriUser))
                ? a({
                    type: "NewConstantDataBean",
                    data: m(m({}, d), {}, { primePropsAtFixedSlots: !0 }),
                  })
                : !Object(o.t)(c) &&
                  0 < c.length &&
                  e.pageNo &&
                  1 == e.pageNo &&
                  y &&
                  g &&
                  !_ &&
                  S.length < h.split(",").length &&
                  p &&
                  "Y" != p.userPrimeMemberLoggedIn &&
                  (Object(o.t)(u.nriUser) ||
                    (!Object(o.t)(u.nriUser) && "N" == u.nriUser)) &&
                  ((P = Object(r.a)(e, u)),
                  (N = h.split(",").length - S.length),
                  (P =
                    P +
                    "&skipPrimeshuffle=Y&cpmp=Y&excludeIds=" +
                    T +
                    "&showCnt=" +
                    N),
                  n.a
                    .get(P)
                    .then(function (e) {
                      var r, n, l, i;
                      console.log("response--", e.data.resultList),
                        null !== e.data.resultList &&
                          0 < e.data.resultList.length &&
                          ((S = [].concat(s(S), s(e.data.resultList))),
                          console.log("primeProperties", S)),
                        0 < S.length
                          ? ((r = 1),
                            (n = S.length),
                            (l = []),
                            (i = ""),
                            S.map(function (e) {
                              Object(o.t)(e.id) ||
                                (i = Object(o.t)(i) ? e.id : i + "," + e.id);
                            }),
                            a({
                              type: "NewConstantDataBean",
                              data: m(
                                m({}, d),
                                {},
                                { primePropsAtFixedSlots: !0 }
                              ),
                            }),
                            c.map(function (e) {
                              var t;
                              Object(o.t)(e.id) ||
                                (0 != n &&
                                  h.split(",").includes(r.toString()) &&
                                  ((t = m(
                                    m({}, (t = S[S.length - n])),
                                    {},
                                    { primeFixedSlotProp: "Y" }
                                  )),
                                  l.push(t),
                                  n--,
                                  r++),
                                i.includes(e.id)) ||
                                (l.push(e), r++);
                            }),
                            console.log("modified response--", l),
                            t(l))
                          : a({
                              type: "NewConstantDataBean",
                              data: m(
                                m({}, d),
                                {},
                                { primePropsAtFixedSlots: !1 }
                              ),
                            });
                    })
                    .catch(function (e) {})))
            : a({
                type: "NewConstantDataBean",
                data: m(m({}, d), {}, { primePropsAtFixedSlots: !1 }),
              });
        } catch (e) {
          console.log("getPrimePropertiesUtil", e);
        }
      };
    },
    436: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return n;
      });
      var r = a(1);
      a(41);
      var n = function (e, t, a, r, n, l) {
          e || o(t, a, r, n, l);
        },
        o = function (e, t, a, n, o) {
          var l = !1;
          return (
            Object(r.t)(t.cityName) ||
              Object(r.t)(t.cityName.value) ||
              Object(r.t)(a.cityName) ||
              Object(r.t)(a.cityName.value) ||
              t.cityName.value == a.cityName.value ||
              (l = !0),
            ((Object(r.t)(t.localityNames) && !Object(r.t)(a.localityNames)) ||
              (!Object(r.t)(t.localityNames) && Object(r.t)(a.localityNames)) ||
              (!Object(r.t)(t.localityNames) &&
                !Object(r.t)(a.localityNames) &&
                t.localityNames.length != a.localityNames.length)) &&
              (l = !0),
            Object(r.t)(n.filters)
              ? (Object(r.t)(e.budgetMin) &&
                  Object(r.t)(e.budgetMax) &&
                  Object(r.t)(e.bhk)) ||
                (l = !0)
              : (Object(r.t)(e.budgetMin) ||
                  (((!Object(r.t)(n.filters.minBudget) &&
                    e.budgetMin != n.filters.minBudget) ||
                    Object(r.t)(n.filters.minBudget)) &&
                    (l = !0)),
                Object(r.t)(e.budgetMax) ||
                  (((!Object(r.t)(n.filters.maxBudget) &&
                    e.budgetMax != n.filters.maxBudget) ||
                    Object(r.t)(n.filters.maxBudget)) &&
                    (l = !0)),
                Object(r.t)(e.bhk) ||
                  (((!Object(r.t)(n.filters.bhk) && e.bhk != n.filters.bhk) ||
                    Object(r.t)(n.filters.bhk)) &&
                    (l = !0))),
            o({
              type: "CompaignFiltersApplied",
              data: {
                minBudget: e.budgetMin,
                maxBudget: e.budgetMax,
                bhk: e.bhk,
              },
            }),
            l
          );
        };
    },
    437: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return n;
      }),
        a.d(t, "a", function () {
          return o;
        });
      var r = a(14),
        n = function (e, t) {
          "plot" == e.search &&
          "r" != e.category.toLowerCase() &&
          null != e.zone &&
          null == e.locality &&
          null == e.psmid &&
          "" != e.city &&
          null != e.city
            ? r.a.get("/plot/USP?zn=" + e.zone).then(function (e) {
                null != e && t(e.data);
              })
            : t(null);
        },
        o = function (e, t) {
          "plot" == e.search &&
          "r" != e.category.toLowerCase() &&
          null == e.zone &&
          null != e.locality &&
          null == e.psmid &&
          "" != e.city &&
          null != e.city
            ? r.a
                .get("/plot/USP?locality=" + e.locality + "&cityId=" + e.city)
                .then(function (e) {
                  null != e && t(e.data);
                })
            : t(null);
        };
    },
    438: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r);
      t.a = function (e) {
        var t = e.titleText,
          a = e.cardData,
          r = "",
          o =
            (e = e.additionalBeanData).localityNames &&
            0 < e.localityNames.length &&
            e.localityNames[0].key + "",
          l = a.lt + "";
        return (
          null != a.urlLocName &&
            null != a.urlLocName &&
            a.urlLocName != a.locSeoName &&
            o != l &&
            (r = a.locSeoName),
          n.a.createElement(
            n.a.Fragment,
            null,
            1 != e.isSeoSearch ||
              null == r ||
              "" == r ||
              (null != a.DSLogicDist &&
                null != a.DSLogicDist &&
                "0.0" !== a.DSLogicDist)
              ? n.a.createElement(
                  "h2",
                  { className: "mb-srp-m__card--title" },
                  t
                )
              : n.a.createElement(
                  "div",
                  { className: "mb-srp-m__card__title-wrap" },
                  n.a.createElement(
                    "h2",
                    { className: "mb-srp-m__card--title" },
                    t
                  ),
                  n.a.createElement(
                    "span",
                    { className: "mb-srp-m__card--title" },
                    "(",
                    r,
                    ")"
                  )
                )
          )
        );
      };
    },
    439: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r);
      t.a = function (e) {
        var t = e.uspNameText;
        e = e.multilingualData;
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            "div",
            { className: "mb-srp-m__card__usp--item" },
            null != e && e.hasOwnProperty(t) ? e[t] : t
          )
        );
      };
    },
    44: function (e, t, a) {
      "use strict";
      a.d(t, "e", function () {
        return r;
      }),
        a.d(t, "c", function () {
          return n;
        }),
        a.d(t, "f", function () {
          return o;
        }),
        a.d(t, "g", function () {
          return l;
        }),
        a.d(t, "h", function () {
          return i;
        }),
        a.d(t, "i", function () {
          return c;
        }),
        a.d(t, "a", function () {
          return s;
        }),
        a.d(t, "b", function () {
          return u;
        }),
        a.d(t, "d", function () {
          return p;
        });
      var r = function (e) {
          var t = "";
          return (
            null != e &&
              (!m(e.psmNames) && 0 < e.psmNames.length && !m(e.psmNames[0])
                ? (t = e.psmNames[0].value)
                : !m(e.localityNames) &&
                  0 < e.localityNames.length &&
                  !m(e.localityNames[0])
                ? (t = e.localityNames[0].value)
                : m(e.cityName) || (t = e.cityName.value)),
            t
          );
        },
        n = function (e) {
          var t = 0;
          return m(e) || "" === e ? t : e;
        },
        o = function (e) {
          return "Lowest_Price" != e &&
            "Highest_Price" != e &&
            "postRecency" != e &&
            "Lowest_Sqft_Price" != e &&
            "Highest_Sqft_Price" != e
            ? "Relevance"
            : e;
        },
        l = function (e, t) {
          return (
            (t = null != t.visitedDate ? t.visitedDate : ""),
            !m(e.rEcd) && "" !== t && (e.rEcd > t || e.rEcd === t)
          );
        },
        i = function (e) {
          var t = !1;
          return (
            (null != e &&
              0 <
                e.filter(function (e) {
                  return e.tagText
                    .toString()
                    .toLowerCase()
                    .includes("verified");
                }).length) ||
            t
          );
        },
        c = function (e, t) {
          e.stopPropagation(),
            (e = document.getElementById(t)).classList.contains("open")
              ? e.classList.remove("open")
              : e.classList.add("open");
        },
        s = function (e) {
          var t = "";
          return m(e)
            ? t
            : 5 < (e = e.toString().split(".")[0]).toString().length
            ? 7 < e.toString().length
              ? +(e /= 1e7).toFixed(2) + " Cr"
              : +(e /= 1e5).toFixed(2) + " Lac"
            : parseInt(e).toLocaleString("hi");
        },
        u = function (e) {
          var t = "";
          return null == e || m(e.cityName) ? t : e.cityName.value;
        },
        p = function (e) {
          if (null != e && 0 < e) return e + " results | ";
        };
      function m(e) {
        return void 0 === e || null == e;
      }
    },
    440: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r),
        o = a(2),
        l = a(138);
      function i(e) {
        return (i =
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
      function s(e) {
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
                        if ("object" !== i(e) || null === e) return e;
                        var a = e[Symbol.toPrimitive];
                        if (void 0 === a) return String(e);
                        if ("object" !== i((a = a.call(e, "string")))) return a;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === i(e) ? e : String(e)
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
      t.a = function (e) {
        var t = e.category,
          a = e.possessionStatus,
          r = e.possessionFilter,
          i = e.additionalSearchBeanData,
          c = Object(o.c)();
        return n.a.createElement(
          n.a.Fragment,
          null,
          "R" !== t &&
            (null == a || "" == a || 0 == a.length) &&
            n.a.createElement(l.a, {
              heading: "Select possession preference",
              filterdata: r,
              columModifierClass: "min-width-for-col",
              onSelectionChange: function (e) {
                c({ type: "possessionPreference", data: e }),
                  c({
                    type: "NewAdditionalBeanData",
                    data: s(s({}, i), {
                      lastFilterData: {
                        type: "possessionStatus",
                        data: e,
                        appliedFor: "Floating_Applied",
                        isSelected: null,
                        name: null,
                        prev1: null,
                        prevValue: null,
                        type1: null,
                      },
                    }),
                  });
              },
            })
        );
      };
    },
    441: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r),
        o = a(2),
        l = a(298);
      t.a = function (e) {
        e.index;
        var t = e.listingWithImages,
          a = (e.length, Object(o.c)());
        return n.a.createElement(
          n.a.Fragment,
          null,
          "1" !== t &&
            n.a.createElement(l.a, {
              heading: "View properties with photos only",
              floatingFilterCat: "floatinglistingWithImages",
              floatingFilterId: "floatinglistingWithImagesId",
              onChange: function () {
                return a({ type: "listingWithImages", data: "1" });
              },
            })
        );
      };
    },
    442: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r),
        o = a(2),
        l = a(138);
      t.a = function (e) {
        var t = e.showCons,
          a = ((e = (e.index, e.constructionStatusFF)), Object(o.c)());
        return n.a.createElement(
          n.a.Fragment,
          null,
          "Y" == t &&
            n.a.createElement(l.a, {
              heading: "Select construction status",
              filterdata: e(),
              columModifierClass: "min-width-for-col",
              onSelectionChange: function (e) {
                return a({ type: "possessionStatus", data: e });
              },
            })
        );
      };
    },
    443: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r),
        o = a(2),
        l = a(138);
      t.a = function (e) {
        var t = e.furnish,
          a = ((e = e.furnishingFilter), Object(o.c)());
        return n.a.createElement(
          n.a.Fragment,
          null,
          null == t &&
            n.a.createElement(l.a, {
              heading: "Select the Furnishing Status",
              filterdata: e,
              columModifierClass: "min-width-for-col",
              onSelectionChange: function (e) {
                return a({ type: "furnish", data: e });
              },
            })
        );
      };
    },
    45: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return u;
      }),
        a.d(t, "d", function () {
          return p;
        }),
        a.d(t, "e", function () {
          return m;
        }),
        a.d(t, "c", function () {
          return d;
        }),
        a.d(t, "b", function () {
          return b;
        });
      var r = a(3),
        n = a(160),
        o = a(161),
        l = a(1);
      function i(e) {
        return (i =
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
      function s(e) {
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
                        if ("object" !== i(e) || null === e) return e;
                        var a = e[Symbol.toPrimitive];
                        if (void 0 === a) return String(e);
                        if ("object" !== i((a = a.call(e, "string")))) return a;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === i(e) ? e : String(e)
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
      var u = function (e) {
          var t = 0,
            a =
              (null !== e &&
                0 < e.length &&
                (t += e.filter(function (e) {
                  return (
                    e &&
                    !f(e.pp) &&
                    "I" == e.pp &&
                    !f(e.isPrimeLocProp) &&
                    "Y" == e.isPrimeLocProp &&
                    !f(e.isPaidUser) &&
                    "N" == e.isPaidUser
                  );
                }).length),
              0);
          return {
            cm13: t,
            cm103: (a =
              null !== e && 0 < e.length
                ? e.filter(function (e) {
                    return e && !f(e.ctaDetailBean);
                  }).length
                : a),
          };
        },
        p = function (e, t, a) {
          var r = 0;
          if (null !== e && 0 < e.length)
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              f(o.isPrimeLocProp) ||
                "Y" != o.isPrimeLocProp ||
                f(o.pp) ||
                "I" != o.pp ||
                f(o.isPaidUser) ||
                "Y" != o.isPaidUser ||
                (r += 1);
            }
          return { cm17: r };
        },
        m = function (e, t, a, l, i, c, s, u, p, m, d) {
          return function (b) {
            var y = !1;
            if (!s && ((p && !f(e) && !e.isPropCTAChangeGAFired) || !p)) {
              if (null !== l && 0 < l.length)
                for (var g = 0; g < l.length; g++) {
                  var v = l[g];
                  if (
                    (v = s
                      ? Object(o.a)(
                          v,
                          a,
                          null,
                          null,
                          a.searchType,
                          null,
                          c,
                          m,
                          d
                        )
                      : Object(n.a)(
                          v,
                          a,
                          null,
                          null,
                          a.searchType,
                          !1,
                          c,
                          e
                        )) &&
                    null != v.contactList &&
                    0 < v.contactList.length &&
                    0 <
                      v.contactList.filter(function (e) {
                        return (
                          "Ask Owner to Call" == e.btnText ||
                          "Send Enquiry" == e.btnText
                        );
                      }).length
                  ) {
                    (y = !0),
                      b(
                        s
                          ? Object(r.e)({
                              event: "event_tracking",
                              eventName: "revamp_srp_dynamic_listing",
                              nonInteraction: !0,
                              eventCategory:
                                "MB Prime_Wap CTA Change Impression",
                              eventAction:
                                "MB Prime_Wap_SRP_Free Owner Prop CTA Change Shown_" +
                                t.propertyType +
                                "_" +
                                t.category,
                              eventLabel: u,
                              eventValue: "",
                              cd21: t.propertyType,
                            })
                          : Object(r.e)({
                              event: "event_tracking",
                              eventName: "revamp_srp_dynamic_listing",
                              nonInteraction: !0,
                              eventCategory: "MB Prime CTA Change Impression",
                              eventAction:
                                "MB Prime_SRP_Free Owner Prop CTA Change Shown_" +
                                t.propertyType +
                                "_" +
                                t.category,
                              eventLabel: u,
                              eventValue: "",
                              cd21: t.propertyType,
                            })
                      ),
                      b({ type: "isPropCTAChangeGAFired", payload: !0 });
                    break;
                  }
                }
              if (!y && null !== i && 0 < i.length)
                for (var h = 0; h < i.length; h++) {
                  var _ = i[h];
                  if (
                    (_ = s
                      ? Object(o.a)(
                          _,
                          a,
                          null,
                          null,
                          a.searchType,
                          null,
                          c,
                          m,
                          d
                        )
                      : Object(n.a)(
                          _,
                          a,
                          null,
                          null,
                          a.searchType,
                          !1,
                          c,
                          e
                        )) &&
                    null != _.contactList &&
                    0 < _.contactList.length &&
                    0 <
                      _.contactList.filter(function (e) {
                        return (
                          "Ask Owner to Call" == e.btnText ||
                          "Send Enquiry" == e.btnText
                        );
                      }).length
                  ) {
                    b(
                      s
                        ? Object(r.e)({
                            event: "event_tracking",
                            eventName: "revamp_srp_dynamic_listing",
                            nonInteraction: !0,
                            eventCategory: "MB Prime_Wap CTA Change Impression",
                            eventAction:
                              "MB Prime_Wap_SRP_Free Owner Prop CTA Change Shown_" +
                              t.propertyType +
                              "_" +
                              t.category,
                            eventLabel: u,
                            eventValue: "",
                            cd21: t.propertyType,
                          })
                        : Object(r.e)({
                            event: "event_tracking",
                            eventName: "revamp_srp_dynamic_listing",
                            nonInteraction: !0,
                            eventCategory: "MB Prime CTA Change Impression",
                            eventAction:
                              "MB Prime_SRP_Free Owner Prop CTA Change Shown_" +
                              t.propertyType +
                              "_" +
                              t.category,
                            eventLabel: u,
                            eventValue: "",
                            cd21: t.propertyType,
                          })
                    ),
                      b({ type: "isPropCTAChangeGAFired", payload: !0 });
                    break;
                  }
                }
            }
          };
        },
        d = function (e, t, a, r, n) {
          var o = s(
              {
                event: "event_tracking",
                eventName: e,
                nonInteraction: !1,
                eventCategory: "contactsuccess",
                eventAction: t,
                eventLabel: a,
                eventValue: "",
                cd96: r,
              },
              n
            ),
            l = s(
              {
                event: "event_tracking",
                eventName: e,
                nonInteraction: !1,
                eventCategory: "contactinfoformopen",
                eventAction: t,
                eventLabel: a,
                eventValue: "",
                cd96: r,
              },
              n
            ),
            i = s(
              {
                event: "event_tracking",
                eventName: e,
                nonInteraction: !1,
                eventCategory: "Contact Info Form",
                eventAction: t,
                eventLabel: a,
                eventValue: "",
                cd96: r,
              },
              n
            ),
            c = s(
              {
                event: "event_tracking",
                eventName: e,
                nonInteraction: !1,
                eventCategory: "Contact Info Form",
                eventAction: t,
                eventLabel: a,
                eventValue: "",
                cd96: r,
              },
              n
            ),
            u = s(
              {
                event: "event_tracking",
                eventName: e,
                nonInteraction: !1,
                eventCategory: "contactinfoformsubmit",
                eventAction: t,
                eventLabel: a,
                eventValue: "",
                cd96: r,
              },
              n
            ),
            p = s(
              {
                event: "event_tracking",
                eventName: e,
                nonInteraction: !1,
                eventCategory: "contactotpformopen",
                eventAction: t,
                eventLabel: a,
                eventValue: "",
                cd96: r,
              },
              n
            ),
            m = s(
              {
                event: "event_tracking",
                eventName: e,
                nonInteraction: !1,
                eventCategory: "Contact Otp Form",
                eventAction: t,
                eventLabel: a,
                eventValue: "",
                cd96: r,
              },
              n
            ),
            d = s(
              {
                event: "event_tracking",
                eventName: e,
                nonInteraction: !1,
                eventCategory: "Contact Otp Form",
                eventAction: t,
                eventLabel: a,
                eventValue: "",
                cd96: r,
              },
              n
            ),
            b =
              ((e = s(
                {
                  event: "event_tracking",
                  eventName: e,
                  nonInteraction: !1,
                  eventCategory: "contactotpformsubmit",
                  eventAction: t,
                  eventLabel: a,
                  eventValue: "",
                  cd96: r,
                },
                n
              )),
              (t = s(
                {
                  event: "event_tracking",
                  eventName: "revamp_srp_thank_contact",
                  nonInteraction: !1,
                  eventCategory: "revamp srp - thank you page",
                  eventAction: "page load",
                  eventLabel: "page load",
                  eventValue: "",
                  cd96: r,
                },
                n
              )),
              (a = s(
                {
                  event: "event_tracking",
                  eventName: "revamp_srp_thank_contact",
                  nonInteraction: !1,
                  eventCategory: "contactbuttonclicked",
                  eventAction:
                    "revamp srp | propertycontact | propertysearch | thankyou | duplicate",
                  eventLabel: "only",
                  eventValue: "",
                  cd96: r,
                },
                n
              )),
              s(
                {
                  event: "event_tracking",
                  eventName: "revamp_srp_thank_contact",
                  nonInteraction: !1,
                  eventCategory: "contactsuccess",
                  eventAction:
                    "revamp srp | propertycontact | propertysearch | thankyou | duplicate",
                  eventLabel: "only",
                  eventValue: "",
                  cd96: r,
                },
                n
              )),
            f = s(
              {
                event: "event_tracking",
                eventName: "revamp_srp_thank_contact",
                nonInteraction: !1,
                eventCategory: "contactbuttonclicked",
                eventAction:
                  "revamp srp | propertycontact | propertysearch | thankyou | reco | primary",
                eventValue: "",
                cd96: r,
              },
              n
            ),
            y = s(
              {
                event: "event_tracking",
                eventName: "revamp_srp_thank_contact",
                nonInteraction: !1,
                eventCategory: "contactsuccess",
                eventAction:
                  "revamp srp | propertycontact | propertysearch | thankyou | reco | primary",
                eventValue: "",
                cd96: r,
              },
              n
            );
          r = s(
            {
              event: "event_tracking",
              eventName: "revamp_srp_thank",
              nonInteraction: !1,
              eventCategory: "revamp srp - thank you page",
              eventAction: "get details on sms",
              eventLabel: "propertysearch | thankyou",
              eventValue: "",
              cd96: r,
            },
            n
          );
          return s(
            s({}, {}),
            {},
            {
              contactsuccess: o,
              contactinfoformopen: l,
              contactInfoFormError: i,
              contactInfoFormClose: c,
              contactinfoformsubmit: u,
              contactotpformopen: p,
              contactOtpFormError: m,
              contactOtpFormClose: d,
              contactotpformsubmit: e,
              thankyoupageLoad: t,
              thankyoucontactBuilderClick: a,
              thankyoucontactBuilderSuccess: b,
              thankyoucontactRecommendClick: f,
              thankyoucontactRecommendSuccess: y,
              thankyougetdetailsonsms: r,
            }
          );
        },
        b = function (e, t, a) {
          var r = 0,
            n = !1;
          return (
            f(t) ||
              "N" != t.showAppExclusiveCTA ||
              (!Object(l.v)(a) && 0 != Object.keys(a).length) ||
              (n = !0),
            null !== e &&
              0 < e.length &&
              (r += e.filter(function (e) {
                return (
                  e &&
                  !f(e.pp) &&
                  "I" == e.pp &&
                  !f(e.isPrimeLocProp) &&
                  "Y" == e.isPrimeLocProp &&
                  !f(e.isPaidUser) &&
                  "N" == e.isPaidUser &&
                  !f(e.cpmp) &&
                  "Y" == e.cpmp &&
                  1 == n
                );
              }).length),
            { cm18: r }
          );
        };
      function f(e) {
        return void 0 === e || null == e || "" === e;
      }
    },
    47: function (e, t, a) {
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
      function n(e, t, a) {
        return (
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
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      a.d(t, "b", function () {
        return o;
      }),
        a.d(t, "e", function () {
          return l;
        }),
        a.d(t, "a", function () {
          return i;
        }),
        a.d(t, "c", function () {
          return c;
        }),
        a.d(t, "d", function () {
          return s;
        }),
        a(0);
      var o = function (e, t, a) {
          var r = u(t, e),
            n =
              ((a =
                (!t.ty ||
                  ("10000" !== t.ty &&
                    "10001" !== t.ty &&
                    "10017" !== t.ty &&
                    "10050" !== t.ty) ||
                  "9001" === t.ty ||
                  (c = "SingleFamilyResidence"),
                !t.ty ||
                  ("10002" !== t.ty &&
                    "10003" !== t.ty &&
                    "10021" !== t.ty &&
                    "10022" !== t.ty &&
                    "9000" !== t.ty) ||
                  "9001" === t.ty ||
                  "en" !== a.language ||
                  (c = "Apartment"),
                "RealEstateAgent")),
              t.pp &&
                (a =
                  "I" === t.pp
                    ? "Person"
                    : "B" === t.pp
                    ? "Organization"
                    : "RealEstateAgent"),
              "https://www.magicbricks.com/propertyDetails/".concat(t.url)),
            o = r,
            l = !0,
            i = e && e.searchForm && e.searchForm["intent-text"],
            c =
              (((!t.newUrl && t.transType && "Rent" !== t.transType) ||
                (t.newUrl &&
                  t.transType &&
                  "Rent" !== t.transType &&
                  i &&
                  "project" === i)) &&
                (l = void 0),
              t.transType &&
                "Rent" === t.transType &&
                i &&
                "project" === i &&
                (l = void 0),
              t.newUrl &&
                t.transType &&
                "Rent" !== t.transType &&
                i &&
                "project" !== i &&
                ((n = "https://www.magicbricks.com/".concat(t.newUrl)),
                t.prjname) &&
                (o = t.prjname),
              void 0 !== c
                ? {
                    "@context": "https://schema.org",
                    "@type": "".concat(c),
                    "@id": "".concat(n),
                    url: "".concat(n),
                    numberOfRooms:
                      void 0 !== t.bedroomD ? "".concat(t.bedroomD) : void 0,
                    image: void 0 !== t.image ? "".concat(t.image) : void 0,
                    name: "".concat(r),
                    geo:
                      void 0 !== t.pmtLat &&
                      0 < t.pmtLat &&
                      void 0 !== t.pmtLong &&
                      0 < t.pmtLong
                        ? {
                            "@type": "GeoCoordinates",
                            latitude: "".concat(t.pmtLat),
                            longitude: "".concat(t.pmtLong),
                          }
                        : void 0 !== t.ltcoordGeo &&
                          null != t.ltcoordGeo.split(",")[0] &&
                          0 != t.ltcoordGeo.split(",")[0] &&
                          void 0 !== t.pmtLong &&
                          null != t.ltcoordGeo.split(",")[1] &&
                          0 != t.ltcoordGeo.split(",")[1]
                        ? {
                            "@type": "GeoCoordinates",
                            latitude: "".concat(t.ltcoordGeo.split(",")[0]),
                            longitude: "".concat(t.ltcoordGeo.split(",")[1]),
                          }
                        : void 0,
                    potentialAction:
                      t.transType && "Rent" !== t.transType
                        ? {
                            "@type": "BuyAction",
                            seller: {
                              "@type": "".concat(a),
                              name:
                                void 0 !== t.oname
                                  ? "".concat(t.oname)
                                  : "Guest User",
                            },
                          }
                        : void 0,
                    address: {
                      "@type": "PostalAddress",
                      addressLocality:
                        void 0 !== t.lmtDName ? "".concat(t.lmtDName) : void 0,
                      addressRegion:
                        void 0 !== t.ctName ? "".concat(t.ctName) : void 0,
                      addressCountry: "IN",
                      streetAddress:
                        void 0 !== t.catAdd1 && i && "independent-house" == i
                          ? "".concat(t.catAdd1)
                          : void 0,
                    },
                    event:
                      void 0 === l ||
                      !e.cityName ||
                      ("6903" !== e.cityName.key &&
                        "2951" !== e.cityName.key &&
                        "6403" !== e.cityName.key)
                        ? void 0
                        : {
                            "@type": "Event",
                            image:
                              void 0 !== t.image ? "".concat(t.image) : void 0,
                            url: "".concat(n),
                            name: "".concat(o),
                            startDate:
                              void 0 !== t.postDateT
                                ? "".concat(t.postDateT)
                                : void 0,
                            endDate:
                              void 0 !== t.endDateT
                                ? "".concat(t.endDateT)
                                : void 0,
                            location: {
                              "@type": "Place",
                              address: {
                                "@type": "PostalAddress",
                                addressLocality:
                                  void 0 !== t.lmtDName
                                    ? "".concat(t.lmtDName)
                                    : void 0,
                                addressRegion:
                                  void 0 !== t.ctName
                                    ? "".concat(t.ctName)
                                    : void 0,
                                addressCountry: "IN",
                              },
                            },
                            offers:
                              void 0 !== t.price
                                ? {
                                    "@type": "Offer",
                                    price: "".concat(t.price),
                                    priceCurrency: "INR",
                                  }
                                : void 0,
                          },
                  }
                : void 0);
          if (c) return JSON.stringify(c);
        },
        l = function (e, t, a) {
          var r = "agent";
          e = u(t, e);
          if (
            (t.pp && (r = "I" === t.pp ? "landlord" : "agent"),
            t.transType && "Rent" === t.transType && "en" === a.language)
          )
            return (
              (a = n(
                {
                  "@context": "https://schema.org",
                  "@type": "RentAction",
                  object: { "@type": "Residence", name: "".concat(e) },
                },
                r,
                {
                  "@type": "Person",
                  name: void 0 !== t.oname ? "".concat(t.oname) : "Guest User",
                }
              )),
              JSON.stringify(a)
            );
        },
        i = function (e, t, a) {
          function r(e) {
            return null != t && t.hasOwnProperty(e) ? t[e] : e;
          }
          var n;
          if (
            e &&
            e.dataBean &&
            e.dataBean.bclist &&
            0 < e.dataBean.bclist.length
          )
            return (
              (n = {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [],
              }),
              e.dataBean.bclist &&
                e.dataBean.bclist.map(function (t, o) {
                  n.itemListElement.push({
                    "@type": "ListItem",
                    item: {
                      "@id":
                        "Link" == t.type
                          ? "".concat(
                              "https://www.magicbricks.com" +
                                (a &&
                                "en" != a &&
                                "Link" == t.type &&
                                null != t.url &&
                                null != t.url &&
                                !t.url.includes("pg-") &&
                                (t.url.includes("-pppfs") ||
                                  t.url.includes("-pppfr"))
                                  ? "/" + a + "-in" + t.url
                                  : t.url &&
                                    a &&
                                    "en" != a &&
                                    "Link" == t.type &&
                                    t.url.includes("-pppfa")
                                  ? "/hi" + t.url
                                  : t.url)
                            )
                          : void 0,
                      name:
                        "Link" == t.type
                          ? "".concat(
                              a && "en" != a && null != t.labelLang
                                ? t.labelLang
                                : t.label
                            )
                          : "Text" == t.type &&
                            e.business_name &&
                            "R" == t.listtype &&
                            null == t.cndlocality
                          ? "".concat(
                              e.business_name +
                                " for rent in " +
                                e.business_city
                            )
                          : "Text" == t.type &&
                            e.business_name &&
                            "S" == t.listtype &&
                            null == t.cndlocality
                          ? "".concat(
                              e.business_name +
                                " for sale in " +
                                e.business_city
                            )
                          : "Text" == t.type &&
                            e.psmnameForBreadcrumb &&
                            "en" == a &&
                            "S" == e.categoryForBreadcrumb
                          ? "".concat(
                              "Property for sale in " + e.psmnameForBreadcrumb
                            )
                          : "Text" == t.type &&
                            e.psmnameForBreadcrumb &&
                            "hi" == a &&
                            "S" == e.categoryForBreadcrumb
                          ? "".concat(
                              r(e.psmnameForBreadcrumb) +
                                " में बिक्री के लिए उपलब्ध प्रॉपर्टी"
                            )
                          : "Text" == t.type &&
                            e.psmnameForBreadcrumb &&
                            "hi" == a &&
                            "R" == e.categoryForBreadcrumb
                          ? "".concat(
                              r(e.psmnameForBreadcrumb) +
                                " में किराए पर प्रॉपर्टी"
                            )
                          : "Text" == t.type &&
                            e.psmnameForBreadcrumb &&
                            "en" == a &&
                            "R" == e.categoryForBreadcrumb
                          ? "".concat(
                              "Property for rent in " + e.psmnameForBreadcrumb
                            )
                          : "Text" == t.type
                          ? "".concat(
                              a && "en" != a && null != t.labelLang
                                ? t.labelLang
                                : t.label
                            )
                          : void 0,
                    },
                    position: "".concat(o + 1),
                  });
                }),
              JSON.stringify(n)
            );
        },
        c = function (e, t) {
          if ("en" === t.language) {
            var a = {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [],
            };
            if (
              (e &&
                e.map(function (e, t) {
                  a.mainEntity.push({
                    "@type": "Question",
                    name: "".concat(e.ques),
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "".concat(e.ans),
                    },
                  });
                }),
              e && 0 < e.length)
            )
              return JSON.stringify(a);
          }
        },
        s = function (e, t) {
          var a;
          if (
            (a =
              null != e &&
              null != e.searchForm &&
              null != e.searchForm.category &&
              "r" != e.searchForm.category.toLowerCase()
                ? e && e.lowest_price
                  ? {
                      "@context": "https://schema.org",
                      "@type": "Product",
                      description:
                        void 0 !== e.description
                          ? "".concat(e.description)
                          : void 0,
                      name:
                        void 0 !== e.h1TagText
                          ? "".concat(e.h1TagText)
                          : void 0 !== e.searchSummary
                          ? "".concat(e.searchSummary)
                          : void 0,
                      image:
                        "https://cdn.staticmb.com/blogstatic/11262020033257/images/MB-logo.svg",
                      brand: { "@type": "Organization", name: "Magicbricks" },
                      offers: {
                        "@type": "AggregateOffer",
                        priceCurrency: "INR",
                        lowPrice: "".concat(e.lowest_price),
                        highPrice:
                          void 0 !== e.highest_price
                            ? "".concat(e.highest_price)
                            : void 0,
                        offerCount:
                          void 0 !== e.resultCount
                            ? "".concat(e.resultCount)
                            : void 0,
                      },
                    }
                  : void 0
                : a) &&
            "en" === t.language
          )
            return JSON.stringify(a);
        },
        u = function (e, t) {
          var a = "",
            r =
              null != window && null != window.location
                ? window.location.href
                : "";
          return (
            p(e.isCardDesc) || p(e.scdpropdesc)
              ? (p(e.bedroomD) || (a = e.bedroomD + " BHK "),
                p(e.propTypeD) || (a += e.propTypeD))
              : (a = e.scdpropdesc),
            e.isCardDesc && !p(e.scdcattype)
              ? (a = a + " " + e.scdcattype)
              : !p(r) &&
                (r.includes("pppfs") || r.includes("pppfr")) &&
                r.includes("-noida-") &&
                (r.includes("1-") || r.includes("/2-") || r.includes("/3-"))
              ? (a += " in")
              : p(e.transType)
              ? "commercial" == t.searchType && (a += " for Sale in")
              : (a = a + " for " + e.transType + " in"),
            p(e.prjname) || (a = a + " " + e.prjname + ","),
            e.isCardDesc
              ? p(e.scdloc) || (a = a + " " + e.scdloc)
              : 1 != t.isStateSearch && 1 != t.isCitySearch
              ? e &&
                e.DSLogicDist &&
                "0.0" != e.DSLogicDist &&
                e.locSeoName &&
                e.urlLocName
                ? (a +=
                    " " +
                    e.locSeoName +
                    " near " +
                    e.urlLocName +
                    " " +
                    e.ctName)
                : p(e.urlLocName) || 1 != t.isSeoSearch
                ? p(e.lmtDName) || "Other" === e.lmtDName
                  ? (p(e.lmtDName) ||
                      (!p(e.lmtDName) && "Other" === e.lmtDName)) &&
                    (a = a + " " + e.ctName)
                  : (a = a + " " + e.lmtDName + " " + e.ctName)
                : (a += " " + e.urlLocName + " " + e.ctName)
              : (a =
                  (a =
                    p(e.lmtDName) || "Other" === e.lmtDName
                      ? a
                      : a + " " + e.lmtDName) +
                  " " +
                  e.ctName),
            p(e.transType) ||
              "Rent" !== e.transType ||
              p(e.bedroomD) ||
              "1" === e.bedroomD ||
              (e.isCardDesc
                ? (a = a + " " + e.scdarea)
                : p(e.coveredArea) || p(e.coverAreaUnitD)
                ? p(e.la) ||
                  p(e.coverAreaUnitD) ||
                  (a = a + " " + e.la + " " + e.coverAreaUnitD.replace("-", ""))
                : (a =
                    a +
                    " " +
                    e.coveredArea +
                    " " +
                    e.coverAreaUnitD.replace("-", ""))),
            a
          );
        };
      function p(e) {
        return void 0 === e || null == e || "" === e;
      }
    },
    52: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return r;
      }),
        a.d(t, "a", function () {
          return n;
        }),
        a.d(t, "c", function () {
          return o;
        });
      var r = function (e, t, a) {
          var r, n, i, c, s, u, p, m;
          return l(e)
            ? {}
            : ((r = (n = o(e, t)).elligibleForStrata),
              n.strataAreaValue,
              (n = n.strataPrice),
              (s = "N"),
              l(e.auc) || "Y" != e.auc
                ? ((l(e.priceD) || (!l(e.sdp) && "N" == e.sdp)) &&
                    (i = "Call for Price"),
                  l(e.priceD) ||
                    (!l(e.sdp) && "N" === e.sdp) ||
                    (1 == r
                      ? ((u = 0),
                        (m = p = "N"),
                        99999 < n && n < 9999999
                          ? ((u = n / 1e5), (p = "Y"))
                          : 9999999 < n
                          ? ((u = n / 1e7), (m = "Y"))
                          : n < 99999 && ((u = n), (m = p = "N")),
                        (i = u),
                        "Y" == p && (i += " Lac"),
                        "Y" == m && (i += " Cr"))
                      : (i = e.priceD),
                    l(e.minRatePSqFt) &&
                      "Sale" == e.transType &&
                      (((l(e.carpetArea) || "0" == e.carpetArea) &&
                        l(e.carpAreaUnit)) ||
                        "Y" == r) &&
                      ("Y" == r
                        ? (c =
                            parseInt(strataPriceperAreaUnit).toLocaleString(
                              "hi"
                            ) + " per sqft")
                        : (l(e.sqFtPrice) ||
                            l(e.coveredArea) ||
                            (c =
                              parseInt(e.sqFtPrice).toLocaleString("hi") +
                              " per sqft"),
                          !l(e.coveredArea) ||
                            l(e.sqFtPrice) ||
                            l(e.la) ||
                            (c =
                              parseInt(e.sqFtPrice).toLocaleString("hi") +
                              " per sqft"))),
                    l(e.minRatePSqFt) ||
                      "0" === e.minRatePSqFt ||
                      (c =
                        parseInt(e.minRatePSqFt).toLocaleString("hi") +
                        " per sqft"),
                    l(e.soc) || "Y" != e.soc || (s = "Y"),
                    null != a &&
                      "r" == e.cg.toString().toLowerCase() &&
                      (((null != a.sharedOfficeSpace &&
                        "Y" == a.sharedOfficeSpace &&
                        0 !== a.dynamicPriceValue) ||
                        ("10026" == e.ty &&
                          !l(a.dynamicPriceValue) &&
                          0 !== a.dynamicPriceValue &&
                          "Y" == t.dynamicListing)) &&
                        (i = a.dynamicPriceValue),
                      l(e.soc) ||
                        "Y" != e.soc ||
                        null == a.sharedOfficeSpace ||
                        "Y" == a.sharedOfficeSpace ||
                        (s = "Y")),
                    "0" != i && null != i) ||
                    ((i = "Call for Price"), (s = "N")))
                : (l(e.priceD) ||
                    (!l(e.sdp) && "N" === e.sdp) ||
                    (i = e.priceD),
                  (l(e.priceD) || (!l(e.sdp) && "N" == e.sdp)) &&
                    (i = "Call for Price"),
                  l(e.pmtmisPriceUp) || (i = e.pmtmtrendPercentage + " %")),
              (null != c && (null == c || 0 != c.length)) ||
                l(e.sqFtPrice) ||
                ((c =
                  -1 != e.sqFtPrice.toString().indexOf(".")
                    ? e.sqFtPrice.toString().split(".")[0]
                    : e.sqFtPrice),
                (c = parseInt(c).toLocaleString("hi") + " per sqft")),
              "R" == t.searchForm.category
                ? { finalPrice: i, seeOtherCharges: s }
                : { finalPrice: i, sqrFtPrice: c, seeOtherCharges: s });
        },
        n = function (e) {
          var t,
            a,
            r = "N";
          return (
            l(e.priceD) ||
              (!l(e.sdp) && "N" === e.sdp) ||
              ((t = e.priceD), l(e.sqFtPrice)) ||
              ((a =
                -1 != e.sqFtPrice.toString().indexOf(".")
                  ? e.sqFtPrice.toString().split(".")[0]
                  : e.sqFtPrice),
              (a = parseInt(a).toLocaleString("hi") + " per sqft")),
            {
              finalPrice: (t =
                l(e.priceD) || (!l(e.sdp) && "N" == e.sdp)
                  ? "Call for Price"
                  : t),
              sqrFtPrice: a,
              seeOtherCharges: (r = l(e.soc) || "Y" != e.soc ? r : "Y"),
            }
          );
        },
        o = function (e, t) {
          var a,
            r,
            n,
            o,
            i,
            c,
            s = !1,
            u = null;
          return l(e)
            ? {}
            : (l(e.stFlag) ||
                "Y" != e.stFlag ||
                (l(t.dynamicArea) && l(t.dynamicBudget)) ||
                ((r = parseInt(e.sPrice)),
                (r = parseInt(r / 1e7)),
                (n = parseInt(e.msa)),
                (o = parseInt(t.dynamicArea)),
                l(t.dynamicArea) ||
                  (!l(e.caSqft) &&
                    parseInt(e.caSqft) > o &&
                    (n == o || n < o) &&
                    ((s = !0), (u = (a = o) * r))),
                l(t.dynamicBudget)) ||
                ((i = o = 0),
                (t = parseInt(t.dynamicBudget)),
                e.priceD.includes("Call for Price") ||
                  ((c = (c = e.priceD).includes("Cr")
                    ? c.replace("Cr", "").trim()
                    : c).includes("Lac") && (c = c.replace("Lac", "").trim()),
                  (i = parseFloat(c.match(/\d+/), 10))),
                e.priceD.includes("Cr") && (o = 1e4 * i),
                t / 1e3 < (o = e.priceD.includes("Lac") ? 100 * i : o) &&
                  ((c = n * r) == t || c < t) &&
                  ((a = (u = t) / r), (s = !0))),
              { elligibleForStrata: s, strataPrice: u, strataAreaValue: a });
        };
      function l(e) {
        return void 0 === e || null == e || "" === e;
      }
    },
    53: function (e, t, a) {
      "use strict";
      a.d(t, "c", function () {
        return r;
      }),
        a.d(t, "a", function () {
          return o;
        }),
        a.d(t, "b", function () {
          return l;
        });
      var r = function (e, t, a) {
          var r,
            l,
            c,
            s,
            u,
            p,
            m,
            d = "N",
            b = "N",
            f = "https://cdn.staticmb.com/srpstatic/images/";
          return (
            i(e.pmp) ||
              "Y" != e.pmp ||
              i(e.isPrimeLocProp) ||
              "Y" != e.isPrimeLocProp ||
              (t = "Y"),
            i(e.pp) ||
              "I" != e.pp ||
              i(e.isPrimeLocProp) ||
              "Y" != e.isPrimeLocProp ||
              i(e.isPaidUser) ||
              "N" != e.isPaidUser ||
              (t = "Y"),
            (m = i(e.propertyImageNew)
              ? !i(e.psmImgCt) && 0 < e.psmImgCt
                ? ((c = e.image),
                  i(e.ranPropImg) || (c = e.ranPropImg),
                  i(e.image) ||
                    e.image.includes("underScreening") ||
                    (r = e.psmImgCt),
                  "N")
                : (i(t) || "Y" != t
                    ? (i(e.isCardDesc) || i(e.scdimgalt),
                      (c = f + "img-not-uploaded.svg"),
                      (d = "Y"))
                    : ((c = f + "img-not-uploaded.svg"), (b = "Y")),
                  i(e.psmImgCt) &&
                    !i(e.localityPhoto) &&
                    0 < e.localityPhoto &&
                    (r = e.localityPhoto),
                  "Y")
              : ((t = e.propertyImageNew.split(",")),
                (c = e.image),
                i(e.propImg) ||
                  i(e.image) ||
                  e.image.includes(e.propImg) ||
                  ((l = e.propImg.split(".")[0].toUpperCase()),
                  -1 !=
                    (f = t.findIndex(function (e) {
                      return e.toUpperCase().includes(l);
                    })) && (c = t[f])),
                i(e.ranPropImg) || (c = e.ranPropImg),
                i(e.image) ||
                  e.image.includes("underScreening") ||
                  (r = t.length),
                "N")),
            (f = o(e)
              ? n(e.dsla, e)
              : i(e.ctdDateForDateFeedItem)
              ? e.modifiedDate
              : e.ctdDateForDateFeedItem),
            i(e.postDateT) ||
              ((t = new Date(e.postDateT).getTime()),
              90 <= (new Date().getTime() - t) / 864e5 && (f = "3 months ago")),
            a &&
              a.isSeoSearch &&
              1 == a.isSeoSearch &&
              (!e ||
                i(e.tmsrt) ||
                i(e.ecd) ||
                (14 == (t = e.ecd + e.tmsrt).length &&
                  ((a = t.substr(0, 4)),
                  (e = parseInt(t.substr(4, 2)) - 1),
                  (s = t.substr(6, 2)),
                  (u = t.substr(8, 2)),
                  (p = t.substr(10, 2)),
                  (t = t.substr(12, 2)),
                  (a = new Date(a, e, s, u, p, t).getTime()),
                  (u = (e = new Date()).getTime()),
                  (p = e.getDate()),
                  0 <= (t = Math.round((u - a) / 36e5))) &&
                  t <= 24 &&
                  p == s &&
                  (f =
                    0 == t || 1 == t
                      ? "1 hour ago"
                      : 24 == t
                      ? "today"
                      : t.toString() + " hours ago"))),
            {
              imgPath: c,
              imgCount: r,
              requestPhoto: d,
              dateCreated: f,
              cusImgShow: m,
              imageNotUploaded: b,
            }
          );
        },
        n = function (e, t) {
          var a = null;
          if ("r" == t.cg || "R" == t.cg)
            switch (!0) {
              case 0 == e:
              case 1 == e:
                a = "today";
                break;
              case 2 == e:
                a = "yesterday";
                break;
              case e <= 7:
                a = e + " days ago";
                break;
              case e <= 14:
                a = "1 week ago";
                break;
              case e <= 21:
                a = "2 weeks ago";
                break;
              case e <= 28:
                a = "3 weeks ago";
                break;
              case e <= 35:
                a = "4 weeks ago";
                break;
              default:
                a = t.modifiedDate;
            }
          if ("b" == t.cg || "B" == t.cg)
            switch (!0) {
              case 0 == e:
              case 1 == e:
                a = "today";
                break;
              case 2 == e:
                a = "yesterday";
                break;
              case e <= 7:
                a = e + " days ago";
                break;
              case e <= 14:
                a = "1 week ago";
                break;
              case e <= 21:
                a = "2 weeks ago";
                break;
              case e <= 28:
                a = "3 weeks ago";
                break;
              case e <= 35:
                a = "4 weeks ago";
                break;
              case e <= 65:
                a = "1 month ago";
                break;
              default:
                a = t.modifiedDate;
            }
          return a;
        },
        o = function (e) {
          if (!i(e.dsla)) {
            if (("b" == e.cg || "B" == e.cg) && e.dsla <= 66) return !0;
            if (("r" == e.cg || "R" == e.cg) && e.dsla <= 36) return !0;
          }
          return !1;
        },
        l = function (e) {
          var t,
            a,
            r,
            n = "N",
            o = "N",
            l = null;
          return (
            i(e.pmp) ||
              "Y" != e.pmp ||
              i(e.isPrimeLocProp) ||
              "Y" != e.isPrimeLocProp ||
              (l = "Y"),
            i(e.pp) ||
              "I" != e.pp ||
              i(e.isPrimeLocProp) ||
              "Y" != e.isPrimeLocProp ||
              i(e.isPaidUser) ||
              "N" != e.isPaidUser ||
              (l = "Y"),
            !i(e.luxAmenitiesD) &&
              0 < e.luxAmenitiesD.length &&
              (r = e.luxAmenitiesD.split(",")[0]),
            i(e.image)
              ? i(l) || "Y" != l
                ? (i(e.isCardDesc) || i(e.scdimgalt), (n = "Y"))
                : (o = "Y")
              : ((a = e.image),
                i(e.ranPropImg) || (a = e.ranPropImg),
                i(e.image) ||
                  e.image.includes("underScreening") ||
                  (0 < e.psmImgCt && (t = e.psmImgCt))),
            {
              imgPath: a,
              imgCount: t,
              leadTag: r,
              requestPhoto: n,
              imageNotUploaded: o,
            }
          );
        };
      function i(e) {
        return void 0 === e || null == e || "" === e;
      }
    },
    559: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      });
      var r = function (e, t, a, r, o, l, i, c, s) {
        var u = "";
        return (
          n(e) || "true" != e || n(o)
            ? n(t) && !n(a)
              ? (u = a)
              : n(r) ||
                (u =
                  "Properties from Top Agents" == r
                    ? r
                    : r.includes("PG/Hostel for Rent")
                    ? r.replace("or Rent", "")
                    : r.includes("Co-working")
                    ? r.replace("Co-working", "Coworking")
                    : r)
            : (u = " Similar Properties"),
          s.isSeoSearch || "Y" != s.isNearMeSeoUrl || (u += " near me"),
          !s.isSeoSearch && u.includes("- Page") ? u.split("- Page")[0] : u
        );
      };
      function n(e) {
        return null == e || "" === e;
      }
    },
    568: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      });
      var r = function (e) {
        return {
          displayCity: e.cityName ? e.cityName.value : "New Delhi",
          urlCity: e.cityName
            ? e.cityName.value.includes(" ")
              ? e.cityName.value.toLowerCase().split(" ").join("-")
              : e.cityName.value.toLowerCase()
            : "new-delhi",
        };
      };
    },
    569: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return i;
      });
      var r = a(863);
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
      function l(e) {
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
      var i = function (e, t, a, n, o, i) {
        (e = "/property/photos?propId=" + e),
          o && (e = e + "&type=" + o),
          r.a.get((e = i ? e + "&propType=" + i : e)).then(function (e) {
            if (null != e) {
              var r = [],
                o = e.data;
              if (null != o) {
                if (!c(o.propPhotos))
                  for (var i = 0; i < o.propPhotos.length; i++)
                    if (!c(o.propPhotos[i].photos))
                      for (var s = 0; s < o.propPhotos[i].photos.length; s++) {
                        var u = l(
                          l({}, o.propPhotos[i].photos[s]),
                          {},
                          {
                            categoryName: o.propPhotos[i].categoryName,
                            type: o.propPhotos[i].type,
                          }
                        );
                        r.push(u);
                      }
                if (!c(o.projectPhotos))
                  for (i = 0; i < o.projectPhotos.length; i++)
                    if (!c(o.projectPhotos[i].photos))
                      for (
                        var p = 0;
                        p < o.projectPhotos[i].photos.length;
                        p++
                      ) {
                        var m = l(
                          l({}, o.projectPhotos[i].photos[p]),
                          {},
                          {
                            categoryName: o.projectPhotos[i].categoryName,
                            type: o.projectPhotos[i].type,
                          }
                        );
                        r.push(m);
                      }
                if (!c(o.localityPhotos))
                  for (i = 0; i < o.localityPhotos.length; i++)
                    if (!c(o.localityPhotos[i].photos))
                      for (
                        var d = 0;
                        d < o.localityPhotos[i].photos.length;
                        d++
                      ) {
                        var b = l(
                          l({}, o.localityPhotos[i].photos[d]),
                          {},
                          {
                            categoryName: o.localityPhotos[i].categoryName,
                            type: o.localityPhotos[i].type,
                          }
                        );
                        r.push(b);
                      }
              }
              0 < r.length && n(r[0].categoryName);
              var f = [];
              o.propPhotos &&
                0 < o.propPhotos.length &&
                o.propPhotos.map(function (e) {
                  (e = { categoryName: e.categoryName, count: e.count }),
                    f.push(e);
                }),
                o.projectPhotos &&
                  0 < o.projectPhotos.length &&
                  o.projectPhotos.map(function (e) {
                    (e = { categoryName: e.categoryName, count: e.count }),
                      f.push(e);
                  }),
                o.localityPhotos &&
                  0 < o.localityPhotos.length &&
                  o.localityPhotos.map(function (e) {
                    (e = { categoryName: e.categoryName, count: e.count }),
                      f.push(e);
                  }),
                t(f),
                a([].concat(r));
            }
          });
      };
      function c(e) {
        return !(void 0 !== e && null != e && 0 < e.length);
      }
    },
    571: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r),
        o = a(1),
        l = (a(25), a(14)),
        i = a(2),
        c = a(6),
        s = a(3),
        u = a(60);
      function p(e) {
        return (p =
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
      function m(e, t) {
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
            ? m(Object(a), !0).forEach(function (t) {
                var r, n;
                (r = e),
                  (n = a[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== p(e) || null === e) return e;
                        var a = e[Symbol.toPrimitive];
                        if (void 0 === a) return String(e);
                        if ("object" !== p((a = a.call(e, "string")))) return a;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === p(e) ? e : String(e)
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
            : m(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      function b(e) {
        function t(e, t) {
          var a = "https://www.magicbricks.com/propertyDetail/" + e.url,
            n = {
              cd42: e.pgid,
              cd57: e.pgName,
              cd58: e.pgrfnum,
              cd62: e.minPrice + "",
              cd80: e.imagecount,
              cd21: "PG",
              cd17: "36576",
            },
            i = r + 1 + " / " + o;
          l(
            Object(s.e)({
              event: "event_tracking",
              eventName: "revamp_srp_dynamic_listing",
              nonInteraction: !1,
              eventCategory: "revamp srp - dynamic listings",
              eventAction: "Want to Explore PG Homes too?",
              eventLabel: "card click  - " + i,
              eventValue: "",
              cd100: e.pgid + "",
            })
          ),
            t
              ? (c.a.createCookieRem("buttonClicked", "contactBtn" + e.pgid),
                l(
                  Object(s.e)(
                    d(
                      {
                        event: "event_tracking",
                        eventName: "revamp_srp_dynamic_listing_contact",
                        nonInteraction: !1,
                        eventCategory: "contactbuttonclicked",
                        eventAction:
                          "revamp srp | propertycontact | propertysearch | dynamic listings | Want to Explore PG Homes too?",
                        eventLabel: i,
                        eventValue: "",
                      },
                      n
                    )
                  )
                ),
                l(
                  Object(s.e)({
                    event: "event_tracking",
                    eventName: "revamp_srp_dynamic_listing",
                    nonInteraction: !1,
                    eventCategory: "revamp srp - dynamic listings",
                    eventAction: "Want to Explore PG Homes too?",
                    eventLabel: "Contact Now click - " + i,
                    eventValue: "",
                    cd100: e.pgid + "",
                  })
                ))
              : l(
                  Object(s.e)(
                    d(
                      {
                        event: "event_tracking",
                        eventName: "revamp_srp_dynamic_listing",
                        nonInteraction: !1,
                        eventCategory: "revamp srp - dynamic listings",
                        eventAction: "Want to Explore PG Homes too?",
                        eventLabel: "card click - " + i,
                        eventValue: "",
                      },
                      n
                    )
                  )
                ),
            window.open(a);
        }
        var a = e.item,
          r = e.index,
          o = e.total,
          l = Object(i.c)();
        return n.a.createElement(
          "div",
          {
            className: "mb-srp__explore-pg__card card-shadow-hover",
            onClick: function () {
              return t(a, !1);
            },
          },
          n.a.createElement(
            "div",
            { className: "mb-srp__explore-pg__card__graphic" },
            n.a.createElement(u.a, {
              alt: "",
              src: 0 < a.imagecount && a.images[0],
              dataSrc: 0 < a.imagecount && a.images[0],
              modifyClass: "customLazy",
              clickEvent: !1,
            })
          ),
          n.a.createElement(
            "div",
            { className: "mb-srp__explore-pg__card__body" },
            n.a.createElement(
              "div",
              { className: "mb-srp__explore-pg__card__row" },
              n.a.createElement(
                "div",
                { className: "mb-srp__explore-pg__card--price" },
                n.a.createElement("span", { className: "rupees" }, "₹"),
                a.minPrice
              ),
              n.a.createElement(
                "div",
                { className: "mb-srp__explore-pg__card--type" },
                "Both" == a.gender || "Girls & Boys" == a.gender
                  ? "For Girls & Boys"
                  : "For " + a.gender + " Only"
              )
            ),
            n.a.createElement(
              "div",
              { className: "mb-srp__explore-pg__card--name" },
              a.seoPgName
            ),
            n.a.createElement(
              "div",
              { className: "mb-srp__explore-pg__card--loc" },
              a.lname,
              ", ",
              a.cityName
            ),
            n.a.createElement(
              "span",
              {
                className: "mb-srp__explore-pg__card--link",
                onClick: function (e) {
                  e.stopPropagation(), t(a, !0);
                },
              },
              "Contact Now"
            )
          )
        );
      }
      var f = a(22),
        y = a.n(f),
        g = a(55),
        v = ((f = a(256)), a(451)),
        h = a(357),
        _ = a(191);
      function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
        return r;
      }
      function T(e) {
        var t = e.headingText,
          a = e.exploreListing,
          c = e.searchBeanData,
          u = e.additionalSearchBeanData,
          p =
            ((e = Object(i.d)(function (e) {
              return e.constantDataBean;
            })),
            (e = (function (e, t) {
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
                      l,
                      i = [],
                      c = !0,
                      s = !1;
                    try {
                      if (((o = (a = a.call(e)).next), 0 === t)) {
                        if (Object(a) !== a) return;
                        c = !1;
                      } else
                        for (
                          ;
                          !(c = (r = o.call(a)).done) &&
                          (i.push(r.value), i.length !== t);
                          c = !0
                        );
                    } catch (e) {
                      (s = !0), (n = e);
                    } finally {
                      try {
                        if (
                          !c &&
                          null != a.return &&
                          ((l = a.return()), Object(l) !== l)
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
                      ? S(e, t)
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
                      ? S(e, t)
                      : void 0;
                })(e, t) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
              );
            })(Object(r.useState)(e.pgcardsdata), 2))[0]),
          m = e[1],
          d = Object(i.c)();
        return (
          Object(r.useEffect)(
            function () {
              var e, t;
              p &&
                0 < p.length &&
                ((e = p[1]
                  .map(function (e) {
                    return e.pgid;
                  })
                  .join(", ")),
                d(
                  Object(s.e)({
                    event: "event_tracking",
                    eventName: "revamp_srp_dynamic_listing",
                    nonInteraction: !1,
                    eventCategory: "revamp srp - explore pg widget",
                    eventAction: "shown",
                    eventLabel: p[0].count,
                    eventValue: "",
                    cd100: e,
                  })
                )),
                (t = m),
                "residential" == (e = c).search &&
                "r" == e.category.toLowerCase() &&
                null == e.locality &&
                "" != e.city &&
                null != e.city
                  ? l.a
                      .get(
                        "/fetchPGCards.html?city=" +
                          e.city +
                          "&wantToExploreWidgetCheck=Y" +
                          (null != e.budgetMin
                            ? "&budgetMin=" + e.budgetMin
                            : "") +
                          (null != e.budgetMax
                            ? "&budgetMax=" + e.budgetMax
                            : "")
                      )
                      .then(function (e) {
                        null != e && t(e.data);
                      })
                  : "residential" == e.search &&
                    "r" == e.category.toLowerCase() &&
                    null != e.locality &&
                    "" != e.locality &&
                    "" != e.city &&
                    null != e.city
                  ? l.a
                      .get(
                        "/fetchPGCards.html?city=" +
                          e.city +
                          "&locality=" +
                          e.locality +
                          "&wantToExploreWidgetCheck=Y" +
                          (null != e.budgetMin
                            ? "&budgetMin=" + e.budgetMin
                            : "") +
                          (null != e.budgetMax
                            ? "&budgetMax=" + e.budgetMax
                            : "")
                      )
                      .then(function (e) {
                        null != e && t(e.data);
                      })
                  : t(null);
            },
            [c]
          ),
          n.a.createElement(
            n.a.Fragment,
            null,
            p &&
              0 < p.length &&
              n.a.createElement(
                "div",
                { className: "mb-srp__explore-pg" },
                n.a.createElement(
                  g.a,
                  null,
                  n.a.createElement(
                    "div",
                    { className: "mb-srp__explore-pg__left" },
                    n.a.createElement(
                      "div",
                      { className: "mb-srp__explore-pg__title" },
                      n.a.createElement(
                        "div",
                        { className: "mb-srp__explore-pg__title--text1" },
                        y()(t)
                      )
                    ),
                    n.a.createElement(
                      "ul",
                      { className: "mb-srp__explore-pg__list" },
                      a.map(function (e) {
                        return n.a.createElement(
                          "li",
                          { className: "mb-srp__explore-pg__list--item" },
                          e
                        );
                      })
                    ),
                    n.a.createElement(
                      "span",
                      {
                        className: "mb-srp__explore-pg--link",
                        onClick: function () {
                          return (
                            d(
                              Object(s.e)({
                                event: "event_tracking",
                                eventName: "revamp_srp_dynamic_listing",
                                nonInteraction: !1,
                                eventCategory: "revamp srp - dynamic listings",
                                eventAction: "Want to Explore PG Homes too?",
                                eventLabel: "view all",
                                eventValue: "",
                              })
                            ),
                            d(
                              Object(s.e)({
                                event: "event_tracking",
                                eventName: "revamp_srp_dynamic_listing",
                                nonInteraction: !1,
                                eventCategory: "revamp srp - dynamic listings",
                                eventAction: "Want to Explore PG Homes too?",
                                eventLabel: "See All click",
                                eventValue: "",
                              })
                            ),
                            (e =
                              "https://www.magicbricks.com/property-for-rent/residential-paying-guest?"),
                            Object(o.t)(u.cityName) ||
                              (e +=
                                "cityName=" +
                                u.cityName.value.toString().replace(/ /g, "-")),
                            Object(o.t)(u.localityNames) ||
                              (e +=
                                "&Locality=" +
                                u.localityNames
                                  .map(function (e) {
                                    return e.value
                                      .toString()
                                      .replace(/ /g, "-");
                                  })
                                  .join(",")),
                            Object(o.t)(c.budgetMin) ||
                              "0" === c.budgetMin ||
                              (e += "&BudgetMin=" + c.budgetMin),
                            Object(o.t)(c.budgetMax) ||
                              (e += "&BudgetMax=" + c.budgetMax),
                            e.includes("amp;") &&
                              (e = e.replaceAll("amp;", "")),
                            void window.open(e)
                          );
                          var e;
                        },
                      },
                      "Explore All PG Homes"
                    )
                  ),
                  n.a.createElement(
                    "div",
                    {
                      className:
                        "mb-srp__explore-pg__right mb-srp__swiper-arrow",
                    },
                    n.a.createElement("div", {
                      className: "swiper-button-prev",
                      id: "explore-pg-swiper-prev",
                    }),
                    n.a.createElement("div", {
                      className: "swiper-button-next",
                      id: "explore-pg-swiper-next",
                    }),
                    n.a.createElement(
                      h.a,
                      {
                        spaceBetween: 16,
                        slidesPerView: 3,
                        navigation: {
                          prevEl: "#explore-pg-swiper-prev",
                          nextEl: "#explore-pg-swiper-next",
                        },
                        onSlideChange: function () {},
                        onSwiper: function (e) {},
                      },
                      p[1].map(function (e, t) {
                        return n.a.createElement(
                          _.a,
                          { key: t },
                          n.a.createElement(b, {
                            total: p[1].length,
                            index: t,
                            item: e,
                          })
                        );
                      })
                    )
                  )
                )
              )
          )
        );
      }
      f.a.use([v.a]),
        (t.a = function (e) {
          return (1 == e.index &&
            !e.flag &&
            "residential" == e.searchBeanData.search &&
            null == e.searchBeanData.psmid) ||
            (5 == e.index && e.flag && null == e.searchBeanData.psmid)
            ? n.a.createElement(
                n.a.Fragment,
                null,
                n.a.createElement(T, {
                  headingText: "Trendy PG Rooms<br/>by Owners",
                  exploreListing: [
                    "Near Offices/Coaching",
                    "Furnished, WiFi, Food",
                    "No Commission",
                  ],
                  explorePgLinkText: "Explore 3600 PG Homes",
                  explorePgLink: "",
                  searchBeanData: e.searchBeanData,
                  additionalSearchBeanData: e.additionalSearchBeanData,
                })
              )
            : n.a.createElement(n.a.Fragment, null);
        });
    },
    572: function (e, t, a) {
      "use strict";
      function r(e) {
        var t = e.result,
          a = t.propertyImageNew,
          r = t.image,
          n = t.lmtDName,
          o = t.propTypeD,
          i = t.priceD,
          c = t.userType,
          s = t.bedroomD,
          u = (t.transactionTypeD, t.imgCount),
          p = t.caSqFt,
          m = t.coverAreaUnitD,
          d = t.possStatusD;
        return (
          t.url,
          l.a.createElement(
            "div",
            { className: "mb-srp__bhk-prop__card card-shadow-hover" },
            l.a.createElement(
              "a",
              { target: "_blank", onClick: e.fireGaAction },
              l.a.createElement(
                "div",
                { className: "mb-srp__bhk-prop__card--graphic" },
                l.a.createElement("img", {
                  src: r || a,
                  width: "296",
                  height: "112",
                  alt: "",
                  decoding: "async",
                }),
                l.a.createElement(
                  "span",
                  { className: "mb-srp__bhk-prop__card--pic-count" },
                  u,
                  l.a.createElement("span", { className: "sign-plus" }, "+")
                )
              ),
              l.a.createElement(
                "div",
                { className: "mb-srp__bhk-prop__card--content" },
                l.a.createElement(
                  "div",
                  { className: "mb-srp__bhk-prop__card--type" },
                  s ? s + " BHK Flat" : o
                ),
                l.a.createElement(
                  "div",
                  { className: "mb-srp__bhk-prop__card--price" },
                  l.a.createElement("span", { className: "rupees" }, "₹"),
                  i,
                  null != p && null != m
                    ? l.a.createElement(
                        "span",
                        { className: "mb-srp__bhk-prop__card--size" },
                        p + " " + m
                      )
                    : null
                ),
                l.a.createElement(
                  "div",
                  { className: "mb-srp__bhk-prop__card--loc" },
                  n
                ),
                l.a.createElement(
                  "div",
                  { className: "mb-srp__bhk-prop__card--fixed" },
                  l.a.createElement(
                    "div",
                    { className: "mb-srp__bhk-prop__card--status" },
                    d
                  )
                ),
                l.a.createElement(
                  "div",
                  { className: "mb-srp__action" },
                  l.a.createElement(
                    "span",
                    {
                      className: "mb-srp__action--btn btn-red medium",
                      onClick: e.BtnAction,
                    },
                    "Contact " + c
                  )
                )
              )
            )
          )
        );
      }
      function n(e) {
        var t = e.adpLabel;
        return l.a.createElement(
          "div",
          { className: "mb-srp__alternate-path__title" },
          l.a.createElement(
            "div",
            { className: "mb-srp__alternate-path__title--text1 strip-orange" },
            l.a.createElement("span", { className: "highlight" }, t)
          ),
          8 < e.listSize &&
            l.a.createElement(
              "a",
              {
                href: "",
                onClick: function () {
                  e.viewAll;
                },
                className:
                  "mb-srp__alternate-path__title--anchor-see-all push-right",
              },
              "See all"
            )
        );
      }
      var o = a(0),
        l = a.n(o),
        i = a(2),
        c = a(256),
        s = a(451),
        u = a(357),
        p = a(191),
        m = a(1),
        d = a(67),
        b = a(52),
        f = a(28),
        y = a(53),
        g = a(91),
        v = a(561),
        h = (a(13), a(3)),
        _ = a(22),
        S = a.n(_);
      function T(e) {
        return (T =
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
      function N(e, t) {
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
            ? N(Object(a), !0).forEach(function (t) {
                var r, n;
                (r = e),
                  (n = a[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== T(e) || null === e) return e;
                        var a = e[Symbol.toPrimitive];
                        if (void 0 === a) return String(e);
                        if ("object" !== T((a = a.call(e, "string")))) return a;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === T(e) ? e : String(e)
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
            : N(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      function O(e, t) {
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
                l,
                i = [],
                c = !0,
                s = !1;
              try {
                if (((o = (a = a.call(e)).next), 0 === t)) {
                  if (Object(a) !== a) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(a)).done) &&
                    (i.push(r.value), i.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (n = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != a.return &&
                    ((l = a.return()), Object(l) !== l)
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
                ? E(e, t)
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
                ? E(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
        return r;
      }
      c.a.use([s.a]),
        (t.a = function (e) {
          var t = "S" == e.category ? "B" : e.category,
            a = Object(i.c)(),
            c = (E = O(Object(o.useState)([]), 2))[0],
            s = E[1],
            _ = (E = O(Object(o.useState)(""), 2))[0],
            T = E[1],
            N = Object(i.d)(function (e) {
              return e.searchBean;
            }),
            E = Object(i.d)(function (e) {
              return e.contactData;
            }),
            x = Object(i.d)(function (e) {
              return e.userInfoData;
            }),
            D = Object(i.d)(function (e) {
              return e.searchAdditionalDataBean;
            }),
            w = Object(m.h)(N.bhk),
            C = "",
            j =
              (Object(o.useEffect)(function () {
                a(
                  Object(v.a)(
                    t,
                    e.flow,
                    e.city,
                    N.locality,
                    N.budgetMin,
                    N.budgetMax,
                    w,
                    j
                  )
                );
              }, []),
              Object(o.useEffect)(
                function () {
                  a(
                    Object(v.a)(
                      t,
                      e.flow,
                      e.city,
                      N.locality,
                      N.budgetMin,
                      N.budgetMax,
                      w,
                      j
                    )
                  );
                },
                [
                  N.city,
                  N.locality,
                  E.recieverId,
                  N.locality,
                  N.budgetMin,
                  N.budgetMax,
                  N.bhk,
                ]
              ),
              function (e, t) {
                t &&
                  t.includes("Properties under") &&
                  (t = S()(
                    t.replace("Properties under", "Properties under &#8377;")
                  )),
                  T(t),
                  s(e),
                  (C = t);
              });
          return l.a.createElement(
            "div",
            null,
            c &&
              0 < c.length &&
              3 <= c.length &&
              l.a.createElement(
                "div",
                { className: "mb-srp__alternate-path" },
                l.a.createElement(n, {
                  adpLabel: _,
                  cityName: e.loc,
                  viewAll: function () {
                    a(
                      Object(h.e)({
                        event: "event_tracking",
                        eventName: "revamp_srp_dynamic_listing",
                        nonInteraction: !1,
                        eventCategory: "revamp srp - dynamic listings",
                        eventAction: C,
                        eventLabel: "explore all properties",
                        eventValue: "",
                      })
                    );
                  },
                  listSize: c.length,
                }),
                l.a.createElement(
                  "div",
                  { className: "mb-srp__bhk-prop mb-srp__swiper-arrow" },
                  l.a.createElement("div", {
                    className: "swiper-button-prev",
                    id: "bhk-prop-swiper-prev",
                  }),
                  l.a.createElement("div", {
                    className: "swiper-button-next",
                    id: "bhk-prop-swiper-next",
                  }),
                  l.a.createElement(
                    u.a,
                    {
                      spaceBetween: 16,
                      slidesPerView: 3.4,
                      navigation: {
                        prevEl: "#bhk-prop-swiper-prev",
                        nextEl: "#bhk-prop-swiper-next",
                      },
                      onSlideChange: function () {},
                      onSwiper: function (e) {},
                    },
                    c.map(function (e, t) {
                      if (t <= 7)
                        return l.a.createElement(
                          p.a,
                          null,
                          l.a.createElement(r, {
                            fireGaAction: function () {
                              var r, n, o, l;
                              (r = e),
                                (n = t),
                                (o = Object(y.c)(r, null, null)),
                                (l = Object(b.b)(r, D)),
                                (l = Object(f.d)(
                                  r,
                                  l,
                                  n,
                                  o.imgCount,
                                  D,
                                  N.search,
                                  null,
                                  null,
                                  x
                                )),
                                (o = n + 1 + " / " + c.length),
                                a(
                                  Object(h.e)(
                                    P(
                                      {
                                        event: "event_tracking",
                                        eventName: "revamp_srp_dynamic_listing",
                                        nonInteraction: !1,
                                        eventCategory:
                                          "revamp srp - dynamic listings",
                                        eventAction: C,
                                        eventLabel: "card click - " + o,
                                        eventValue: "",
                                      },
                                      l
                                    )
                                  )
                                ),
                                Object(g.a)(r.id),
                                window.open(
                                  "https://www.magicbricks.com/propertyDetails/" +
                                    r.url,
                                  "_blank"
                                );
                            },
                            result: e,
                            BtnAction: function (r) {
                              return (
                                (n = e),
                                (o = t),
                                r.stopPropagation(),
                                (l = Object(y.c)(n, null, null)),
                                (i = Object(b.b)(n, D)),
                                (i = Object(f.d)(
                                  n,
                                  i,
                                  o,
                                  l.imgCount,
                                  D,
                                  N.search,
                                  null,
                                  null,
                                  x
                                )),
                                (l = o + 1 + " / " + c.length),
                                (o = "Contact "),
                                null != n.userType &&
                                  "" !== n.userType &&
                                  (o += n.userType),
                                void a(
                                  Object(d.a)(
                                    r,
                                    {
                                      buttonType: o,
                                      contactType: "property",
                                      searchType: 1,
                                      propertyId: n.id,
                                      advertisers: n.id,
                                      requestInterface: "search_web",
                                      contactTrackCookie: "AA-Contact",
                                      searchCityCode: N.city,
                                      searchLocalityCodes: N.locality,
                                      isLoginAndInfra: !1,
                                      formName: "SRP_TOP_CONTACT",
                                      contact_interface:
                                        "alternate_discovery_contact",
                                      pType: n.ty,
                                    },
                                    "DYNAMIC_LISTING_ALTERNATIVE_DISCOVERY",
                                    i,
                                    o,
                                    l,
                                    n,
                                    C,
                                    !0
                                  )
                                )
                              );
                              var n, o, l, i;
                            },
                          })
                        );
                    })
                  )
                )
              )
          );
        });
    },
    61: function (e, t, a) {
      "use strict";
      function r(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return n(e);
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
                ? n(e, t)
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
                ? n(e, t)
                : void 0;
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
        return r;
      }
      a.d(t, "d", function () {
        return o;
      }),
        a.d(t, "a", function () {
          return l;
        }),
        a.d(t, "b", function () {
          return c;
        }),
        a.d(t, "e", function () {
          return s;
        }),
        a.d(t, "c", function () {
          return u;
        });
      var o = function (e, t, a, n) {
          var o,
            l,
            i = [],
            c = !1,
            s = [];
          return (
            p(e.shared) ||
              p(e.pgOccD) ||
              s.push({
                labelText: "Occupancy",
                valueText: e.pgOccD,
                dataIcon: "occupancy",
              }),
            p(e.shared) ||
              p(e.pgAccD) ||
              s.push({
                labelText: "Gender",
                valueText: e.pgAccD,
                dataIcon: "tenent-preffered",
              }),
            p(e.stFlag) ||
              "Y" != e.stFlag ||
              p(t) ||
              ((l = parseInt(e.msa)),
              (t = parseInt(t)),
              !p(e.caSqft) &&
                parseInt(e.caSqft) > t &&
                (l == t || l < t) &&
                ((o = t), (c = !0))),
            p(e.carpetArea) || "0" === e.carpetArea || p(e.carpAreaUnit)
              ? p(e.coveredArea) || p(e.coverAreaUnitD)
                ? p(e.la) ||
                  p(e.landAreaUnitD) ||
                  ((l = ""),
                  (l =
                    p(e.ty) ||
                    ("10000" != e.ty && "10005" != e.ty && "10004" != e.ty)
                      ? "Built Area"
                      : "Plot Area"),
                  i.push({
                    labelText: l,
                    valueText:
                      e.la +
                      " " +
                      e.landAreaUnitD.replace(/-/g, "").toLowerCase(),
                    dataIcon: "plot-area",
                  }))
                : ((t = c
                    ? o + " sqft"
                    : e.coveredArea +
                      " " +
                      e.coverAreaUnitD.replace(/-/g, "").toLowerCase()),
                  i.push({
                    labelText: "Super Area",
                    valueText: t,
                    dataIcon: "super-area",
                  }))
              : ((l = c
                  ? o + " sqft"
                  : e.carpetArea +
                    " " +
                    e.carpAreaUnit.replace(/-/g, "").toLowerCase()),
                i.push({
                  labelText: "Carpet Area",
                  valueText: l,
                  dataIcon: "carpet-area",
                })),
            p(e.ty) || ("10000" != e.ty && "10005" != e.ty)
              ? ("R" !== n &&
                  (p(e.possStatusD) ||
                    (!p(e.pmtSource) &&
                    (("project" !== e.pmtSource &&
                      "NRI" !== e.pmtSource &&
                      "Ready to Move" == e.possStatusD) ||
                      "project" == e.pmtSource ||
                      ("NRI" == e.pmtSource && p(e.possBy)))
                      ? i.push({
                          labelText: "Status",
                          valueText: e.possStatusD,
                          dataIcon: "status",
                        })
                      : !p(e.pmtSource) &&
                        (("project" !== e.pmtSource &&
                          "NRI" !== e.pmtSource &&
                          "Immediately" == e.possStatusD) ||
                          "project" == e.pmtSource ||
                          ("NRI" == e.pmtSource && p(e.possBy))) &&
                        i.push({
                          labelText: "Immediately",
                          valueText: "Const. Age " + e.acD,
                          dataIcon: "status",
                        })),
                  p(e.pmtSource) ||
                    "project" === e.pmtSource ||
                    "NRI" === e.pmtSource ||
                    p(e.availableFrom) ||
                    "Ready to Move" === e.possStatusD ||
                    "Immediately" === e.possStatusD ||
                    i.push({
                      labelText: "Under Construction",
                      valueText: "Poss. by " + e.availableFrom,
                      dataIcon: "status",
                    }),
                  p(e.pmtSource) ||
                    ("project" != e.pmtSource && "NRI" != e.pmtSource) ||
                    p(e.possBy) ||
                    i.push({
                      labelText: "Under Construction",
                      valueText: "Poss. by " + e.possBy,
                      dataIcon: "status",
                    })),
                p(e.floorNo) ||
                  ((t = e.floorNo),
                  p(e.floors) || (t = t + " out of " + e.floors),
                  i.push({
                    labelText: "Floor",
                    valueText: t,
                    dataIcon: "floor",
                  })),
                p(e.transactionTypeD) ||
                  "Rent" === e.transactionTypeD ||
                  i.push({
                    labelText: "Transaction",
                    valueText: e.transactionTypeD,
                    dataIcon: "transaction",
                  }),
                p(e.ty) ||
                  ("10002" != e.ty &&
                    "10003" != e.ty &&
                    "10021" != e.ty &&
                    "10022" != e.ty) ||
                  (p(e.furnishedD) ||
                    ("R" == n ? s : i).push({
                      labelText: "Furnishing",
                      valueText: e.furnishedD,
                      dataIcon: "furnishing",
                    }),
                  p(e.facingD) ||
                    i.push({
                      labelText: "facing",
                      valueText: e.facingD,
                      dataIcon: "facing",
                    }),
                  p(e.amenFacingD) ||
                    "Not Available" === e.amenFacingD ||
                    i.push({
                      labelText: "overlooking",
                      valueText: e.amenFacingD.replace("Facing", ""),
                      dataIcon: "overlooking",
                    }),
                  (p(e.prjname) ||
                    p(e.ctName) ||
                    ("Bangalore" != e.ctName &&
                      "Chennai" != e.ctName &&
                      "Hyderabad" != e.ctName &&
                      "Noida" != e.ctName)) &&
                    !p(e.prjname) &&
                    i.push({
                      labelText: "Society",
                      valueText: e.prjname,
                      dataIcon: "society",
                    }),
                  p(e.OwnershipTypeD)) ||
                  i.push({
                    labelText: "Ownership",
                    valueText: e.OwnershipTypeD,
                    dataIcon: "ownership",
                  }),
                p(e.ty) ||
                  ("10001" != e.ty && "10017" != e.ty && "10004" != e.ty) ||
                  (p(e.furnishedD) ||
                    ("R" == n ? s : i).push({
                      labelText: "Furnishing",
                      valueText: e.furnishedD,
                      dataIcon: "furnishing",
                    }),
                  p(e.facingD) ||
                    i.push({
                      labelText: "facing",
                      valueText: e.facingD,
                      dataIcon: "facing",
                    }),
                  p(e.amenFacingD) ||
                    "Not Available" === e.amenFacingD ||
                    i.push({
                      labelText: "overlooking",
                      valueText: e.amenFacingD.replace("Facing", ""),
                      dataIcon: "overlooking",
                    }),
                  p(e.OwnershipTypeD) ||
                    i.push({
                      labelText: "Ownership",
                      valueText: e.OwnershipTypeD,
                      dataIcon: "ownership",
                    }),
                  (p(e.prjname) ||
                    p(e.ctName) ||
                    ("Bangalore" != e.ctName &&
                      "Chennai" != e.ctName &&
                      "Hyderabad" != e.ctName &&
                      "Noida" != e.ctName)) &&
                    !p(e.prjname) &&
                    i.push({
                      labelText: "Society",
                      valueText: e.prjname,
                      dataIcon: "society",
                    }),
                  p(e.dimD)) ||
                  ((c = e.dimD.replace("Dimensions", "")),
                  i.push({
                    labelText: "Dimensions",
                    valueText: c,
                    dataIcon: "dimensions",
                  })),
                p(e.parkingD) ||
                  "R" === n ||
                  i.push({
                    labelText: "Car Parking",
                    valueText: e.parkingD,
                    dataIcon: "parking",
                  }),
                p(e.bathD) ||
                  i.push({
                    labelText: "Bathroom",
                    valueText: e.bathD,
                    dataIcon: "bathroom",
                  }),
                p(e.balconiesD) ||
                  i.push({
                    labelText: "Balcony",
                    valueText: e.balconiesD,
                    dataIcon: "balcony",
                  }),
                p(e.pmtmlegalStatus) ||
                  i.push({
                    labelText: "Legal Status",
                    valueText: e.pmtmlegalStatus,
                    dataIcon: "legal-status",
                  }))
              : (p(e.dimD) ||
                  ((o = e.dimD.replace("Dimensions", "").trim().split(" ")),
                  i.push({
                    labelText: "Dimensions (L X B)",
                    valueText: o[0] + " X " + o[2],
                    dataIcon: "dimensions",
                  })),
                p(e.OwnershipTypeD) ||
                  i.push({
                    labelText: "Ownership",
                    valueText: e.OwnershipTypeD,
                    dataIcon: "ownership",
                  }),
                "R" !== n &&
                  (p(e.possStatusD) ||
                  p(e.pmtSource) ||
                  !(
                    ("project" !== e.pmtSource &&
                      "NRI" !== e.pmtSource &&
                      "Ready to Move" == e.possStatusD) ||
                    "project" == e.pmtSource ||
                    ("NRI" == e.pmtSource && p(e.possBy))
                  )
                    ? p(e.possStatusD) ||
                      p(e.pmtSource) ||
                      !(
                        ("project" !== e.pmtSource &&
                          "NRI" !== e.pmtSource &&
                          "Immediately" == e.possStatusD) ||
                        "project" == e.pmtSource ||
                        ("NRI" == e.pmtSource && p(e.possBy))
                      ) ||
                      i.push({
                        labelText: "Immediately",
                        valueText: "Const. Age " + e.acD,
                        dataIcon: "status",
                      })
                    : i.push({
                        labelText: "Status",
                        valueText: e.possStatusD,
                        dataIcon: "status",
                      }),
                  "project" === e.pmtSource ||
                    "NRI" === e.pmtSource ||
                    p(e.availableFrom) ||
                    "Ready to Move" === e.possStatusD ||
                    "Immediately" === e.possStatusD ||
                    i.push({
                      labelText: "Under Construction",
                      valueText: "Poss. by " + e.availableFrom,
                      dataIcon: "status",
                    }),
                  p(e.pmtSource) ||
                    !(0 < e.pmtSource.length) ||
                    ("project" != e.pmtSource && "NRI" != e.pmtSource) ||
                    p(e.possBy) ||
                    i.push({
                      labelText: "Under Construction",
                      valueText: "Poss. by " + e.possBy,
                      dataIcon: "status",
                    })),
                p(e.pmtmlegalStatus) ||
                  i.push({
                    labelText: "Legal Status",
                    valueText: e.pmtmlegalStatus,
                    dataIcon: "legal-status",
                  }),
                p(e.transactionTypeD) ||
                  "Rent" === e.transactionTypeD ||
                  i.push({
                    labelText: "Transaction",
                    valueText: e.transactionTypeD,
                    dataIcon: "transaction",
                  }),
                p(e.floorCsntrAllowed) ||
                  i.push({
                    labelText: "floors allowed for construction",
                    valueText: e.floorCsntrAllowed,
                    dataIcon: "floor",
                  }),
                p(e.nOs) ||
                  (-1 !== (l = e.nOs + "").indexOf("Side Open")
                    ? i.push({
                        labelText: "Open Sides",
                        valueText: l.replace("Side Open", ""),
                        dataIcon: "open-sides",
                      })
                    : i.push({
                        labelText: "Open Sides",
                        valueText: l,
                        dataIcon: "open-sides",
                      })),
                p(e.rdWidth) ||
                  i.push({
                    labelText: "Width of road facing the plot",
                    valueText: e.rdWidth + " m",
                    dataIcon: "width-road-facing",
                  }),
                p(e.amenFacingD) ||
                  "Not Available" === e.amenFacingD ||
                  i.push({
                    labelText: "overlooking",
                    valueText: e.amenFacingD.replace("Facing", ""),
                    dataIcon: "overlooking",
                  }),
                p(e.boundaryWall) ||
                  i.push({
                    labelText: "Boundary",
                    valueText: e.boundaryWall,
                    dataIcon: "boundary",
                  })),
            !p(e.tenantsPreference) &&
              "R" == n &&
              p(e.shared) &&
              s.push({
                labelText: "Tenant Preferred",
                valueText: e.tenantsPreference,
                dataIcon: "tenent-preffered",
              }),
            p(e.ownerResides) ||
              "R" != n ||
              s.push({
                labelText: "Owner Resides",
                valueText: "Y" == e.ownerResides ? "Same Premise" : "Away",
                dataIcon: "owner-resides",
              }),
            p(e.parkingD) ||
              "R" != n ||
              s.push({
                labelText: "Car Parking",
                valueText: e.parkingD,
                dataIcon: "parking",
              }),
            "R" == n &&
              (p(e.possStatusD) ||
                (("project" === e.pmtSource ||
                  "NRI" === e.pmtSource ||
                  ("Ready to Move" != e.possStatusD &&
                    "Immediately" != e.possStatusD)) &&
                  (p(e.pmtSource) ||
                    ("project" != e.pmtSource && "NRI" != e.pmtSource) ||
                    !p(e.possBy))) ||
                s.push({
                  labelText: "Availability",
                  valueText: e.possStatusD,
                  dataIcon: "status",
                }),
              "project" === e.pmtSource ||
                "NRI" === e.pmtSource ||
                p(e.availableFrom) ||
                "Ready to Move" === e.possStatusD ||
                "Immediately" === e.possStatusD ||
                s.push({
                  labelText: "Availability",
                  valueText: "From " + e.availableFrom,
                  dataIcon: "status",
                }),
              p(e.pmtSource) ||
                !(0 < e.pmtSource.length) ||
                ("project" != e.pmtSource && "NRI" != e.pmtSource) ||
                p(e.possBy) ||
                s.push({
                  labelText: "Availability",
                  valueText: "From " + e.possBy,
                  dataIcon: "status",
                }),
              (i = [].concat(s, r(i)))),
            i
          );
        },
        l = function (e) {
          return i(e.luxAmenitiesD);
        },
        i = function (e) {
          var t;
          return !p(e) && 0 < e.length ? e.split(",") : t;
        },
        c = function (e, t, a) {
          var r = e;
          return (
            "luxury" == a &&
              (null != t &&
                0 < t.length &&
                t.map(function (e) {
                  r.push(e);
                }),
              (r = r.filter(function (e, t, a) {
                return (
                  t ===
                  a.findIndex(function (t) {
                    return t == e;
                  })
                );
              }))),
            r
          );
        },
        s = function (e, t, a) {
          var r,
            n = [],
            o = !1;
          return (
            "plot" == t
              ? null != e &&
                0 < e.length &&
                e.forEach(function (e, t) {
                  t < 2 && n.push(e);
                })
              : "commercial" != t
              ? "r" == a
                ? ((r = !1),
                  null != e &&
                    0 < e.length &&
                    e.forEach(function (e) {
                      e.labelText.includes("Gender")
                        ? ((r = !0), n.push(e))
                        : !r &&
                          e.labelText.toLowerCase().includes("area") &&
                          n.push(e);
                    }))
                : null != e &&
                  0 < e.length &&
                  e.forEach(function (e, t) {
                    t < 2 && n.push(e);
                  })
              : (null != e &&
                  0 < e.length &&
                  e.forEach(function (e) {
                    e.labelText.toLowerCase().includes("cabin") &&
                    e.valueText &&
                    1 < e.valueText.split("|").length
                      ? ((o = !0),
                        n.push({
                          labelText: "Cabins",
                          valueText: e.valueText.split("|")[0],
                        }),
                        n.push({
                          labelText: "Seats",
                          valueText: e.valueText.split("|")[1],
                        }))
                      : n.push(e);
                  }),
                (n = o
                  ? n.filter(function (e) {
                      return (
                        e.labelText.toLowerCase().includes("area") ||
                        e.labelText.toLowerCase().includes("cabin") ||
                        e.labelText.toLowerCase().includes("seat")
                      );
                    })
                  : n.slice(0, 2))),
            n
          );
        },
        u = function (e, t) {
          var a = [];
          return (
            "commercial" == t &&
              null != e &&
              0 < e.length &&
              e.forEach(function (e) {
                e.labelText.toLowerCase().includes("cabin") || a.push(e);
              }),
            a
          );
        };
      function p(e) {
        return void 0 === e || null == e || "" === e;
      }
    },
    796: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      });
      var r = function (e) {
        var t,
          a = "New Projects";
        return (
          null != e &&
            null != e.search &&
            "commercial" == e.search &&
            null != e.category &&
            "R" == e.category &&
            null != e.propertyType &&
            0 < e.propertyType.length &&
            ((t = !1),
            (1 != e.propertyType.length && 2 != e.propertyType.length) ||
              (e.propertyType.filter(function (e) {
                return e.includes("10007") || e.includes("10018");
              }).length == e.propertyType.length &&
                (t = !0)),
            (a = t ? "Office Complex" : "Commercial Complex")),
          a
        );
      };
    },
    807: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r);
      t.a = function (e) {
        var t = "6px";
        return (
          (e.switchResToComError || e.propertyTypeNullError) && (t = "-10px"),
          n.a.createElement(
            n.a.Fragment,
            null,
            (e.cityError ||
              e.switchResToComError ||
              e.propertyTypeNullError ||
              e.propertyTypeAutoSuggestNullError) &&
              n.a.createElement(
                "div",
                { className: "mb-form--error", style: { marginTop: t } },
                e.cityError && "Please enter a valid location.",
                e.switchResToComError &&
                  "You can only select Residential or Commercial Property type at a time.",
                e.propertyTypeNullError && "Please select a Property type.",
                e.propertyTypeAutoSuggestNullError &&
                  "Please select a Property type."
              )
          )
        );
      };
    },
    817: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      });
      var r = function (e, t) {
        var a = [];
        if (!n(e.hasDataForCommerTags) && "true" == e.hasDataForCommerTags)
          for (
            var r = 0, o = Object.entries(e.dataForCommerTags);
            r < o.length;
            r++
          ) {
            for (
              var l = o[r],
                i = l[0],
                c = l[1],
                s = 2 < c.length ? 2 : c.length,
                u = "",
                p = 0;
              p < s;
              p++
            )
              (u += c[p]), 1 < c.length && (u += ", ");
            (l = 2 < c.length ? c.length - 2 : ""),
              a.push({
                idealLabelText: i,
                idealValueText: u,
                idealMoreValueCount: l,
              });
          }
        if (("10008" == e.ty || "10009" == e.ty) && !n(e.bsD)) {
          for (
            var m = e.bsD.split(","),
              d = 4 < m.length ? 4 : m.length,
              b = "",
              f = 0;
            f < d;
            f++
          )
            (b += m[f]), 1 < m.length && f < m.length - 1 && (b += ", ");
          (e = 4 < m.length ? m.length - 4 : ""),
            a.push({
              idealLabelText: "Suitable For:",
              idealValueText: b,
              idealMoreValueCount: e,
            });
        }
        return a;
      };
      function n(e) {
        return void 0 === e || null == e || "" === e;
      }
    },
    823: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r),
        o = ((r = a(22)), a.n(r));
      t.a = function (e) {
        var t = e.data,
          a = (e.isMobile, e.BtnAction);
        return n.a.createElement(
          "div",
          { className: "mb-srp__itarget" },
          n.a.createElement(
            "div",
            { class: "mb-srp__itarget__card card-shadow-hover" },
            n.a.createElement(
              "a",
              {
                href: "javascript:void(0)",
                target: "",
                onClick: function (e) {
                  return a(e, !1);
                },
              },
              n.a.createElement(
                "div",
                { className: "mb-srp__itarget__card--graphic" },
                n.a.createElement("img", {
                  className: "img-lazy",
                  src: "",
                  "data-src": t.image,
                  alt: t.projectName,
                  decoding: "async",
                }),
                n.a.createElement(
                  "div",
                  { className: "mb-srp__itarget__card--tag" },
                  t.imageTopSuperscript
                )
              ),
              n.a.createElement(
                "div",
                { className: "mb-srp__itarget__card--content" },
                n.a.createElement(
                  "div",
                  { className: "mb-srp__itarget__card--name" },
                  t.projectName
                ),
                n.a.createElement(
                  "div",
                  { className: "mb-srp__itarget__card--loc" },
                  t.localityName
                ),
                n.a.createElement(
                  "div",
                  { className: "mb-srp__itarget__card--priceWrap" },
                  null != t.bedroomInfo && "" != t.bedroomInfo
                    ? n.a.createElement(
                        "div",
                        { className: "mb-srp__itarget__card--type" },
                        t.bedroomInfo
                      )
                    : null != t.extraDescription &&
                      "" != t.extraDescription &&
                      "" == t.bedroomInfo
                    ? n.a.createElement(
                        "div",
                        { className: "mb-srp__itarget__card--type" },
                        t.extraDescription
                      )
                    : "",
                  n.a.createElement(
                    "span",
                    { className: "itarget-mobile-text" },
                    "in"
                  ),
                  n.a.createElement(
                    "div",
                    { className: "mb-srp__itarget__card--price" },
                    null != t.rupeePresent && "Y" == t.rupeePresent
                      ? n.a.createElement("span", { className: "rupees" }, "₹")
                      : "",
                    t.displayPrice,
                    " ",
                    null != t.priceSuffix && "" != t.priceSuffix
                      ? n.a.createElement(
                          "span",
                          { className: "onwards" },
                          t.priceSuffix
                        )
                      : ""
                  )
                ),
                void 0 !== t.offerDesc &&
                  null != t.offerDesc &&
                  "" != t.offerDesc.trim()
                  ? n.a.createElement(
                      "div",
                      { className: "mb-srp__itarget__card__offer" },
                      n.a.createElement(
                        "span",
                        { className: "mb-srp__itarget__card__offer--label" },
                        t.offerTitle
                      ),
                      n.a.createElement("p", null, o()(t.offerDesc))
                    )
                  : "",
                n.a.createElement(
                  "div",
                  { className: "mb-srp__itarget__card__marketed" },
                  n.a.createElement(
                    "div",
                    { className: "mb-srp__itarget__card__marketed--label" },
                    t.advertisorTitle
                  ),
                  n.a.createElement(
                    "div",
                    { className: "mb-srp__itarget__card__marketed--value" },
                    t.advertisorDesc
                  )
                ),
                n.a.createElement(
                  "div",
                  {
                    className:
                      "mb-srp__action action--right mb-srp__itarget__link",
                  },
                  n.a.createElement(
                    "span",
                    {
                      className: "mb-srp__action--btn btn-gray medium",
                      onClick: function (e) {
                        return a(e, !0);
                      },
                    },
                    t.contactTitle,
                    n.a.createElement("span", {
                      className: "mb-srp__itarget__link__arrow d-mobile-text",
                    })
                  )
                )
              )
            )
          )
        );
      };
    },
    825: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r);
      t.a = function (e) {
        var t = e.uspNearIcon,
          a = e.uspNearText;
        e = e.multilingualData;
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            "div",
            {
              className: "mb-srp-m__card__usp-near--item",
              "data-uspNear": "".concat(t),
            },
            ((t = a), null != e && e.hasOwnProperty(t) ? e[t] : t)
          )
        );
      };
    },
    826: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r);
      t.a = function (e) {
        var t = e.cardData,
          a = (e = e.searchBeanData).noOfSeats;
        e = e.propertyType;
        return n.a.createElement(
          n.a.Fragment,
          null,
          ((void 0 !== t.monthlyRate && 0 !== t.monthlyRate) ||
            (void 0 !== t.dailyRate && 0 !== t.dailyRate) ||
            (void 0 !== t.houryRate && 0 !== t.houryRate)) &&
            n.a.createElement(
              "div",
              { className: "mb-srp-m__card__price-coworking" },
              n.a.createElement(
                "div",
                { className: "mb-srp-m__card__price-coworking__list" },
                void 0 !== t.monthlyRate &&
                  0 !== t.monthlyRate &&
                  n.a.createElement(
                    "div",
                    null,
                    a && e.includes("10007")
                      ? n.a.createElement(
                          n.a.Fragment,
                          null,
                          n.a.createElement(
                            "div",
                            {
                              className:
                                "mb-srp-m__card__price-coworking__list--item",
                            },
                            n.a.createElement(
                              "span",
                              {
                                className:
                                  "mb-srp-m__card__price-coworking__list--value monthly",
                              },
                              n.a.createElement(
                                "span",
                                { className: "rupees" },
                                "₹"
                              ),
                              t.monthlyRate * a
                            ),
                            n.a.createElement(
                              "span",
                              {
                                className:
                                  "mb-srp-m__card__price-coworking__list--perSeatSeprator",
                              },
                              "|"
                            ),
                            n.a.createElement(
                              "span",
                              {
                                className:
                                  "mb-srp-m__card__price-coworking__list--valuePerSeat",
                              },
                              n.a.createElement(
                                "span",
                                { className: "rupeesPerSeat" },
                                "₹"
                              ),
                              " ",
                              "".concat(
                                t.monthlyRate.toLocaleString(),
                                " per seat"
                              )
                            )
                          )
                        )
                      : n.a.createElement(
                          n.a.Fragment,
                          null,
                          n.a.createElement(
                            "div",
                            {
                              className:
                                "mb-srp-m__card__price-coworking__list--item",
                            },
                            n.a.createElement(
                              "span",
                              {
                                className:
                                  "mb-srp-m__card__price-coworking__list--value monthly",
                              },
                              n.a.createElement(
                                "span",
                                { className: "rupees" },
                                "₹"
                              ),
                              t.monthlyRate
                            ),
                            n.a.createElement(
                              "span",
                              {
                                className:
                                  "mb-srp-m__card__price-coworking__list--tenure",
                              },
                              " ",
                              (a && e.includes("10007"), "Monthly per seat"),
                              " "
                            )
                          )
                        )
                  )
              )
            )
        );
      };
    },
    827: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r);
      t.a = function (e) {
        return (
          (e = e.cardData),
          n.a.createElement(
            "div",
            { className: "mb-srp-m__card__coworking-time" },
            void 0 !== e.cwLockin &&
              -1 !== e.cwLockin &&
              n.a.createElement(
                "div",
                { className: "mb-srp-m__card__coworking-time--item" },
                n.a.createElement(
                  "span",
                  { className: "mb-srp-m__card__coworking-time--item--label" },
                  "Minimum Lock-in "
                ),
                n.a.createElement(
                  "span",
                  { className: "mb-srp-m__card__coworking-time--item--value" },
                  e.cwLockin,
                  " months"
                )
              ),
            void 0 !== e.openTimingMobile &&
              0 !== e.openTimingMobile &&
              n.a.createElement(
                "div",
                { className: "mb-srp-m__card__coworking-time--item" },
                n.a.createElement(
                  "span",
                  { className: "mb-srp-m__card__coworking-time--item--label" },
                  "Hours Open: "
                ),
                n.a.createElement(
                  "span",
                  { className: "mb-srp-m__card__coworking-time--item--value" },
                  e.openTimingMobile
                )
              )
          )
        );
      };
    },
    828: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r);
      t.a = function (e) {
        return (
          (e = e.titleText),
          n.a.createElement(
            "h2",
            { className: "mb-srp-m__card__coworking-head" },
            e
          )
        );
      };
    },
    829: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r);
      t.a = function (e) {
        function t(e) {
          var t,
            a,
            n,
            o = "";
          try {
            o =
              "sqft" !== (e = e.trim()) && e.includes("sqft")
                ? (t = e.split(" "))[0] +
                  " " +
                  (null != r && r.hasOwnProperty(t[1]) ? r[t[1]] : t[1])
                : "Covered" !== e && e.includes("Covered")
                ? (a = e.split(" "))[0] +
                  " " +
                  (null != r && r.hasOwnProperty(a[1]) ? r[a[1]] : a[1])
                : "out of" !== e && e.includes("out of")
                ? ((n = (n = e.replace("out of", "#")).split("#")),
                  null != r && r.hasOwnProperty("out of")
                    ? n[1] + " " + r["out of"] + " " + n[0]
                    : e)
                : null != r && r.hasOwnProperty(e)
                ? r[e]
                : e;
          } catch (e) {
            console.log(e);
          }
          return o;
        }
        var a = e.cardData,
          r = e.multilingualData;
        return n.a.createElement(
          "div",
          { className: "mb-srp-m__card__coworking-summary" },
          void 0 !== a.hotDesk &&
            0 !== a.hotDesk &&
            n.a.createElement(
              "div",
              { className: "mb-srp-m__card__coworking-summary__col" },
              n.a.createElement(
                "div",
                { className: "mb-srp-m__card__coworking-summary__text" },
                t(a.hotDesk)
              ),
              n.a.createElement(
                "div",
                { className: "mb-srp-m__card__coworking-summary__label" },
                t("Hot Desk")
              )
            ),
          void 0 !== a.dediDesk &&
            0 !== a.dediDesk &&
            n.a.createElement(
              "div",
              { className: "mb-srp-m__card__coworking-summary__col" },
              n.a.createElement(
                "div",
                { className: "mb-srp-m__card__coworking-summary__text" },
                t(a.dediDesk)
              ),
              n.a.createElement(
                "div",
                { className: "mb-srp-m__card__coworking-summary__label" },
                t("Dedicated Desk")
              )
            ),
          void 0 !== a.privOffice &&
            0 !== a.privOffice &&
            n.a.createElement(
              "div",
              { className: "mb-srp-m__card__coworking-summary__col" },
              n.a.createElement(
                "div",
                { className: "mb-srp-m__card__coworking-summary__text" },
                t(a.privOffice)
              ),
              n.a.createElement(
                "div",
                { className: "mb-srp-m__card__coworking-summary__label" },
                t("Private Office")
              )
            )
        );
      };
    },
    831: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r);
      t.a = function (e) {
        var t = e.flatSize;
        e = e.flatStatus;
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            "div",
            { className: "mb-srp-m__card--title" },
            t,
            t &&
              n.a.createElement(
                "div",
                { className: "mb-srp-m__card--dot" },
                n.a.createElement("span", null, " ")
              ),
            e
          )
        );
      };
    },
    832: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r);
      t.a = function (e) {
        return (
          (e = e.addressDetailsText),
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              "div",
              { className: "mb-srp-m__card__summary__list--item" },
              n.a.createElement(
                "div",
                { className: "mb-srp-m__card__summary--address" },
                e
              )
            )
          )
        );
      };
    },
    833: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r);
      t.a = function (e) {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            "div",
            {
              className: "mb-srp-m__card--actionText",
              style: { marginTop: e.marginTop + "px" },
              onClick: e.onClickAction,
            },
            e.actionText || "",
            e.children || ""
          )
        );
      };
    },
    834: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r),
        o = a(2);
      t.a = function (e) {
        var t = e.mainHeading,
          a = e.heading,
          r = e.actionText,
          l = e.subHeading,
          i = e.imagePath,
          c = e.modifierClass,
          s = e.textAction,
          u = e.isTitle,
          p = e.listSize,
          m =
            ((e = e.resultCount),
            Object(o.d)(function (e) {
              return e.searchAdditionalDataBean;
            }));
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            "div",
            {
              className:
                "" !== r
                  ? "mb-srp-m__card__topHeading hasSeeAll"
                  : "mb-srp-m__card__topHeading",
            },
            ("" == t && "" !== a && "" == l) ||
              ("" == t && "" !== a && "" !== l)
              ? n.a.createElement(
                  n.a.Fragment,
                  null,
                  n.a.createElement(
                    "div",
                    { className: "mb-srp-m__card__topHeading--heading" },
                    i &&
                      n.a.createElement(
                        "span",
                        null,
                        n.a.createElement("img", { src: i, decoding: "async" })
                      ),
                    t,
                    n.a.createElement(
                      "div",
                      { className: "mb-srp-m__card__topHeading--heading" },
                      a
                    ),
                    "" !== l
                      ? n.a.createElement(
                          n.a.Fragment,
                          null,
                          n.a.createElement(
                            "div",
                            {
                              className:
                                "mb-srp-m__card__topHeading--subheading",
                            },
                            l
                          )
                        )
                      : null
                  ),
                  null != p
                    ? "" != r &&
                        8 < p &&
                        n.a.createElement(
                          "div",
                          { className: "mb-srp-m__card__topHeading--seeAll" },
                          n.a.createElement("a", { onClick: s }, r)
                        )
                    : "" != r
                    ? n.a.createElement(
                        "div",
                        { className: "mb-srp-m__card__topHeading--seeAll" },
                        n.a.createElement("a", { onClick: s }, r)
                      )
                    : null
                )
              : null,
            "" !== t && "" == a && "" == l && "" != r
              ? n.a.createElement(
                  n.a.Fragment,
                  null,
                  n.a.createElement(
                    "div",
                    { className: "mb-srp-m__card__topHeading--headingRegular" },
                    i &&
                      n.a.createElement(
                        "span",
                        null,
                        n.a.createElement("img", { src: i, decoding: "async" })
                      ),
                    t
                  ),
                  null != p
                    ? "" != r &&
                        8 < p &&
                        n.a.createElement(
                          "div",
                          { className: "mb-srp-m__card__topHeading--seeAll" },
                          r
                        )
                    : "" != r &&
                        n.a.createElement(
                          "div",
                          { className: "mb-srp-m__card__topHeading--seeAll" },
                          r
                        )
                )
              : null,
            "" === t || "" != a || "" != l || "" != r || u
              ? null
              : n.a.createElement(
                  n.a.Fragment,
                  null,
                  n.a.createElement(
                    "div",
                    {
                      className: "mb-srp-m__card__topHeading1 ".concat(
                        null != c ? c : ""
                      ),
                    },
                    i &&
                      n.a.createElement(
                        "span",
                        null,
                        n.a.createElement("img", { src: i, decoding: "async" })
                      ),
                    n.a.createElement(
                      "div",
                      {
                        className: "mb-srp-m__card__topHeading--headingRegular",
                      },
                      t
                    )
                  )
                ),
            "" !== t && "" == a && "" == l && "" == r && u
              ? n.a.createElement(
                  n.a.Fragment,
                  null,
                  n.a.createElement(
                    "div",
                    {
                      className: "mb-srp-m__card__topHeading1 ".concat(
                        null != c ? c : ""
                      ),
                    },
                    null == m.nriCityName || null == m.nriCityName
                      ? n.a.createElement(
                          "div",
                          {
                            className:
                              "mb-srp-m__card__topHeading--headingRegular",
                          },
                          e
                        )
                      : "",
                    n.a.createElement(
                      "h1",
                      {
                        className: "mb-srp-m__card__topHeading--headingRegular",
                      },
                      t
                    ),
                    n.a.createElement(
                      n.a.Fragment,
                      null,
                      "Y" === m.isDsLogicDistGtZero
                        ? n.a.createElement(
                            "span",
                            {
                              className:
                                "mb-srp-m__card__topHeading--headingRegular",
                            },
                            " & Similar Properties Nearby"
                          )
                        : n.a.createElement(n.a.Fragment, null)
                    )
                  )
                )
              : null
          )
        );
      };
    },
    835: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return l;
      });
      var r = a(836);
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
      var l = function (e, t) {
        (e = (function (e) {
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
                          if ("object" !== n((a = a.call(e, "string"))))
                            return a;
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
        })({}, e)),
          (e = r.a.post("/thankYouPage/similarProperty", e));
        var a = window.pageYOffset || document.documentElement.scrollTop;
        window.scrollTo(0, a + 800),
          e
            .then(function (e) {
              void 0 !== e &&
              null != e &&
              void 0 !== e.status &&
              null != e.status &&
              200 === e.status
                ? (t(e.data),
                  setTimeout(function () {
                    var e =
                      window.pageYOffset || document.documentElement.scrollTop;
                    window.scrollTo(0, e - 1e3);
                  }, 1e3))
                : (console.log("Error in Response: ", e),
                  setTimeout(function () {
                    var e =
                      window.pageYOffset || document.documentElement.scrollTop;
                    window.scrollTo(0, e - 800);
                  }, 1e3));
            })
            .catch(function (e) {
              console.log("Error :", e),
                setTimeout(function () {
                  var e =
                    window.pageYOffset || document.documentElement.scrollTop;
                  window.scrollTo(0, e - 800);
                }, 1e3);
            });
      };
    },
    840: function (e, t, a) {
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
      a.d(t, "a", function () {
        return l;
      });
      var l = function (e) {
        var t = { lastUpdatedDate: e.lastUpdatedDate };
        return e &&
          !e.alliance &&
          !e.isSimPropSearch &&
          e.seoBreadcrumbBean &&
          e.seoBreadcrumbBean.bclist &&
          0 < e.seoBreadcrumbBean.bclist.length
          ? o(
              o({}, t),
              {},
              {
                dataBean: e.seoBreadcrumbBean,
                business_name: e.businesstype,
                business_city: e.businessCity,
                categoryForBreadcrumb: e.categoryForBreadcrumb,
                psmnameForBreadcrumb: e.psmnameForBreadcrumb,
              }
            )
          : t;
      };
    },
    843: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return n;
      });
      var r = a(14),
        n = function (e, t, a, n, l) {
          var i = "getFloatingFilterPos?";
          o(e.propertyType) ||
            (i = i + "&propertyType=" + e.propertyType.toString()),
            o(e.category) || (i = i + "&category=" + e.category),
            (i += n ? "&plateform=Wap" : "&plateform=Web"),
            o(a.contactStatus) || "SUCCESS" != a.contactStatus
              ? (i += "&isConverted=N")
              : (i += "&isConverted=Y"),
            o(e.city) || (i = i + "&city=" + e.city),
            o(t.refreshCount) || (i = i + "&sessionCount=" + t.refreshCount),
            o(e.budgetMin) || (i = i + "&budgetMin=" + e.budgetMin),
            o(e.budgetMax) || (i = i + "&budgetMax=" + e.budgetMax),
            o(e.inputListings) ||
              (i =
                i +
                "&inputListings=" +
                e.inputListings.toString().replace(/ /g, "-")),
            !o(e.saleType) &&
              0 < e.saleType.length &&
              (i = i + "&saleType=" + e.saleType.toString().replace(/ /g, "-")),
            r.a.get(i).then(function (t) {
              var a, n;
              o(t.data) || 0 === Object.keys(t.data).length
                ? ((a = i).includes("&city=") &&
                    (a = a.replace("&city=" + e.city, "&city=50")),
                  (n = l),
                  r.a.get(a).then(function (e) {
                    n(e.data);
                  }))
                : l(t.data);
            });
        };
      function o(e) {
        return void 0 === e || null == e || "" === e;
      }
    },
    844: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return l;
      });
      var r = a(89),
        n = a(44),
        o = a(6),
        l = function (e, t, a, l) {
          var i = [-1, -1];
          try {
            if (!t.verfiedInfoCardShown) {
              if (void 0 !== e && null != e && 0 < e.length)
                for (var c = 0; c < e.length; c++) {
                  var s = Object(r.a)(e[c], t, "N", c, l, null);
                  if (Object(n.h)(s)) {
                    (i[0] = c),
                      o.a.createCookieRem("VerifiedInfoCardShown", "Y", 10);
                    break;
                  }
                }
              if (i[0] < 0 && void 0 !== a && null != a && 0 < a.length)
                for (c = 0; c < a.length; c++) {
                  var u = Object(r.a)(a[c], t, "N", c, l, null);
                  if (Object(n.h)(u)) {
                    (i[1] = c),
                      o.a.createCookieRem("VerifiedInfoCardShown", "Y", 10);
                    break;
                  }
                }
            }
          } catch (e) {
            console.error(e);
          }
          return i;
        };
    },
    858: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r),
        o = a(2);
      t.a = function (e) {
        Object(o.d)(function (e) {
          return e.multilingualData;
        });
        var t = e.filterValue.cat + "_" + e.filterValue.id;
        return n.a.createElement(
          "div",
          { className: "filter-mobile-property-item" },
          n.a.createElement("input", {
            className: "filter-mobile-property-item__input",
            type: e.inputType,
            value: e.filterValue.value,
            name: e.filterValue.cat,
            id: t,
            checked: e.preSelect,
          }),
          n.a.createElement(
            "label",
            {
              className: "filter-mobile-property-item__label",
              htmlFor: t,
              onClick: function () {
                e.callBack(
                  e.filterValue.cat,
                  e.filterValue.value,
                  e.filterValue.name,
                  e.preSelect
                );
              },
            },
            ("Flat" == e.filterValue.nameInEnglish ||
              "Flat" == e.filterValue.name) &&
              n.a.createElement("span", {
                className: "filter-mobile-property-item__label__icon type-flat",
              }),
            ("House/Villa" == e.filterValue.nameInEnglish ||
              "House/Villa" == e.filterValue.name) &&
              n.a.createElement("span", {
                className:
                  "filter-mobile-property-item__label__icon type-house-villa",
              }),
            ("Plot/Land" == e.filterValue.nameInEnglish ||
              "Plot/Land" == e.filterValue.name) &&
              n.a.createElement("span", {
                className: "filter-mobile-property-item__label__icon type-plot",
              }),
            ("Commercial Office Space" == e.filterValue.nameInEnglish ||
              "Commercial Office Space" == e.filterValue.name ||
              "Office Space" == e.filterValue.nameInEnglish ||
              "Office Space" == e.filterValue.name) &&
              n.a.createElement("span", {
                className:
                  "filter-mobile-property-item__label__icon type-office-space",
              }),
            ("Shops Showrooms" == e.filterValue.nameInEnglish ||
              "Shops Showrooms" == e.filterValue.name ||
              "Shop/Showroom" == e.filterValue.nameInEnglish ||
              "Shop/Showroom" == e.filterValue.name) &&
              n.a.createElement("span", {
                className:
                  "filter-mobile-property-item__label__icon type-shop-showroom",
              }),
            ("Commercial Land" == e.filterValue.nameInEnglish ||
              "Commercial Land" == e.filterValue.name) &&
              n.a.createElement("span", {
                className:
                  "filter-mobile-property-item__label__icon type-commercial-land",
              }),
            ("Warehouse/ Godown" == e.filterValue.nameInEnglish ||
              "Warehouse/ Godown" == e.filterValue.name) &&
              n.a.createElement("span", {
                className:
                  "filter-mobile-property-item__label__icon type-warehouse-godown",
              }),
            ("Industrial Building" == e.filterValue.nameInEnglish ||
              "Industrial Building" == e.filterValue.name) &&
              n.a.createElement("span", {
                className:
                  "filter-mobile-property-item__label__icon type-industrial-building",
              }),
            ("Other Commercial" == e.filterValue.nameInEnglish ||
              "Other Commercial" == e.filterValue.name) &&
              n.a.createElement("span", {
                className:
                  "filter-mobile-property-item__label__icon type-industrial-building",
              }),
            ("Industrial Shed" == e.filterValue.nameInEnglish ||
              "Industrial Shed" == e.filterValue.name) &&
              n.a.createElement("span", {
                className:
                  "filter-mobile-property-item__label__icon type-industrial-shed",
              }),
            ("Agricultural Land" == e.filterValue.nameInEnglish ||
              "Agricultural Land" == e.filterValue.name) &&
              n.a.createElement("span", {
                className:
                  "filter-mobile-property-item__label__icon type-agriculture-land",
              }),
            ("Farm House" == e.filterValue.nameInEnglish ||
              "Farm House" == e.filterValue.name) &&
              n.a.createElement("span", {
                className:
                  "filter-mobile-property-item__label__icon type-farm-house",
              }),
            ("Shared Flat" == e.filterValue.nameInEnglish ||
              "Shared Flat" == e.filterValue.name) &&
              n.a.createElement("span", {
                className:
                  "filter-mobile-property-item__label__icon type-shared-room",
              }),
            ("Coworking Space" == e.filterValue.nameInEnglish ||
              "Coworking Space" == e.filterValue.name) &&
              n.a.createElement("span", {
                className:
                  "filter-mobile-property-item__label__icon type-co-worker",
              }),
            n.a.createElement(
              "span",
              { className: "filter-mobile-property-item__label__text" },
              e.filterValue.name
            )
          )
        );
      };
    },
    860: function (e, t, a) {
      "use strict";
      var r = a(780);
      a.d(t, "a", function () {
        return r.HeaderWeb;
      }),
        a(781);
    },
    861: function (e, t, a) {
      "use strict";
      var r = a(782);
      a.d(t, "a", function () {
        return r.FooterWeb;
      }),
        a(790);
    },
    877: function (e, t, a) {
      "use strict";
      function r(e) {
        function t(e, t, a) {
          return null != a && null != a[t] && null != a[t][e];
        }
        function a(e, t, a) {
          return null != a && null != a[t] && null != a[t][e];
        }
        function r(e, t, a) {
          return null != a && null != a[t] && null != a[t][e];
        }
        function n(e, t, a) {
          return null != a && null != a[t] && null != a[t][e];
        }
        var o = e.qoqTrendsYearly,
          i = e.nearbyLocalityFirstQoqTrendsYearly,
          c = e.nearbyLocalitySecondQoqTrendsYearly,
          s = e.nearbyLocalityThirdQoqTrendsYearly,
          u = e.yearState,
          p = e.graphView,
          m = e.nrByLocFirst,
          d = e.nrByLocSecond,
          b = e.thirdNrByLocName,
          f = e.yoyGrowth,
          y = e.nearbyLocalityFirstYoyGrowth,
          g = e.nearbyLocalitySecondYoyGrowth,
          v = e.nearbyLocalityThirdYoyGrowth,
          h = e.currLocName,
          _ = e.intentOfPTrend,
          S = null,
          T = null;
        e = ["oneY", "threeY", "fiveY"];
        return (
          null != u && "1" == u && ((S = "oneY"), (T = 4)),
          null != u && "3" == u && ((S = "threeY"), (T = 3)),
          null != u && "5" == u && ((S = "fiveY"), (T = 5)),
          l.a.createElement(
            l.a.Fragment,
            null,
            (null == o && null == i && null == c && null == s) ||
              null == S ||
              null == T
              ? l.a.createElement(l.a.Fragment, null)
              : l.a.createElement(
                  "div",
                  {
                    className: "".concat(
                      p
                        ? "table-scroll-view hide-table-graph"
                        : "table-scroll-view"
                    ),
                  },
                  e &&
                    e.map(function (e, u) {
                      var p = null,
                        N = null,
                        P = null,
                        O = null;
                      return (
                        (T =
                          "oneY" == e
                            ? ((p = o), (N = i), (P = c), (O = s), 4)
                            : ((p = f),
                              (N = y),
                              (P = g),
                              (O = v),
                              "threeY" == e ? 3 : 5)),
                        p && p[e] && p[e].reverse(),
                        N && N[e] && N[e].reverse(),
                        P && P[e] && P[e].reverse(),
                        O && O[e] && O[e].reverse(),
                        l.a.createElement(
                          l.a.Fragment,
                          null,
                          l.a.createElement(
                            "table",
                            {
                              cellspacing: "0",
                              cellpadding: "0",
                              className: e != S ? "seo-hide-info" : "",
                            },
                            l.a.createElement(
                              "tr",
                              null,
                              l.a.createElement(
                                "th",
                                null,
                                "oneY" == e ? "Quarter" : "Year"
                              ),
                              null != p &&
                                l.a.createElement(
                                  "th",
                                  null,
                                  l.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "mb-srp__locrates__tablesec__heading",
                                    },
                                    h
                                  ),
                                  l.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "mb-srp__locrates__tablesec__val",
                                    },
                                    "oneY" == e
                                      ? "(% Change in Q-o-Q)"
                                      : "(% Change in Y-o-Y)"
                                  )
                                ),
                              null != N &&
                                l.a.createElement(
                                  "th",
                                  null,
                                  l.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "mb-srp__locrates__tablesec__heading",
                                    },
                                    m
                                  ),
                                  l.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "mb-srp__locrates__tablesec__val",
                                    },
                                    "oneY" == e
                                      ? "(% Change in Q-o-Q)"
                                      : "(% Change in Y-o-Y)"
                                  )
                                ),
                              null != P &&
                                l.a.createElement(
                                  "th",
                                  null,
                                  l.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "mb-srp__locrates__tablesec__heading",
                                    },
                                    d
                                  ),
                                  l.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "mb-srp__locrates__tablesec__val",
                                    },
                                    "oneY" == e
                                      ? "(% Change in Q-o-Q)"
                                      : "(% Change in Y-o-Y)"
                                  )
                                ),
                              null != O &&
                                l.a.createElement(
                                  "th",
                                  null,
                                  l.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "mb-srp__locrates__tablesec__heading",
                                    },
                                    b
                                  ),
                                  l.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "mb-srp__locrates__tablesec__val",
                                    },
                                    "oneY" == e
                                      ? "(% Change in Q-o-Q)"
                                      : "(% Change in Y-o-Y)"
                                  )
                                )
                            ),
                            null != T &&
                              null != e &&
                              Array.from(Array(T), function (o, i) {
                                return l.a.createElement(
                                  l.a.Fragment,
                                  null,
                                  l.a.createElement(
                                    "tr",
                                    null,
                                    l.a.createElement(
                                      "td",
                                      null,
                                      t(i, e, p) && null != p[e][i].qIdentifier
                                        ? p[e][i].qIdentifier
                                        : a(i, e, N) &&
                                          null != N[e][i].qIdentifier
                                        ? N[e][i].qIdentifier
                                        : r(i, e, P) &&
                                          null != P[e][i].qIdentifier
                                        ? P[e][i].qIdentifier
                                        : n(i, e, O) &&
                                          null != O[e][i].qIdentifier
                                        ? O[e][i].qIdentifier
                                        : "--"
                                    ),
                                    p
                                      ? !t(i, e, p) ||
                                        (null == p[e][i].qAvgP &&
                                          null == p[e][i].qChValP)
                                        ? l.a.createElement("td", null, "--")
                                        : l.a.createElement(
                                            "td",
                                            null,
                                            p[e][i].qAvgP &&
                                              l.a.createElement(
                                                l.a.Fragment,
                                                null,
                                                l.a.createElement(
                                                  "span",
                                                  { className: "rupees" },
                                                  "₹"
                                                ),
                                                " ",
                                                p[e][i].qAvgP,
                                                " / ",
                                                l.a.createElement(
                                                  l.a.Fragment,
                                                  null,
                                                  "residentialplotsland" == _
                                                    ? l.a.createElement(
                                                        l.a.Fragment,
                                                        null,
                                                        "sq.yd"
                                                      )
                                                    : l.a.createElement(
                                                        l.a.Fragment,
                                                        null,
                                                        "sq.ft"
                                                      )
                                                )
                                              ),
                                            null != p[e][i].qChValP &&
                                              l.a.createElement(
                                                l.a.Fragment,
                                                null,
                                                0 <= parseFloat(p[e][i].qChValP)
                                                  ? l.a.createElement(
                                                      "span",
                                                      {
                                                        className:
                                                          "mb-srp__locrates__tablesec__greentxt",
                                                      },
                                                      p[e][i].qChValP,
                                                      "%"
                                                    )
                                                  : l.a.createElement(
                                                      "span",
                                                      {
                                                        className:
                                                          "mb-srp__locrates__tablesec__redtxt",
                                                      },
                                                      p[e][i].qChValP,
                                                      "%"
                                                    )
                                              )
                                          )
                                      : l.a.createElement(l.a.Fragment, null),
                                    N
                                      ? !a(i, e, N) ||
                                        (null == N[e][i].qAvgP &&
                                          null == N[e][i].qChValP)
                                        ? l.a.createElement("td", null, "--")
                                        : l.a.createElement(
                                            "td",
                                            null,
                                            l.a.createElement(
                                              "span",
                                              { className: "rupees" },
                                              "₹"
                                            ),
                                            " ",
                                            N[e][i].qAvgP,
                                            " / ",
                                            l.a.createElement(
                                              l.a.Fragment,
                                              null,
                                              "residentialplotsland" == _
                                                ? l.a.createElement(
                                                    l.a.Fragment,
                                                    null,
                                                    "sq.yd"
                                                  )
                                                : l.a.createElement(
                                                    l.a.Fragment,
                                                    null,
                                                    "sq.ft"
                                                  )
                                            ),
                                            null != N[e][i].qChValP &&
                                              l.a.createElement(
                                                l.a.Fragment,
                                                null,
                                                0 <= parseFloat(N[e][i].qChValP)
                                                  ? l.a.createElement(
                                                      "span",
                                                      {
                                                        className:
                                                          "mb-srp__locrates__tablesec__greentxt",
                                                      },
                                                      N[e][i].qChValP,
                                                      "%"
                                                    )
                                                  : l.a.createElement(
                                                      "span",
                                                      {
                                                        className:
                                                          "mb-srp__locrates__tablesec__redtxt",
                                                      },
                                                      N[e][i].qChValP,
                                                      "%"
                                                    )
                                              )
                                          )
                                      : l.a.createElement(l.a.Fragment, null),
                                    P
                                      ? !r(i, e, P) ||
                                        (null == P[e][i].qAvgP &&
                                          null == P[e][i].qChValP)
                                        ? l.a.createElement("td", null, "--")
                                        : l.a.createElement(
                                            "td",
                                            null,
                                            l.a.createElement(
                                              "span",
                                              { className: "rupees" },
                                              "₹"
                                            ),
                                            " ",
                                            P[e][i].qAvgP,
                                            " / ",
                                            l.a.createElement(
                                              l.a.Fragment,
                                              null,
                                              "residentialplotsland" == _
                                                ? l.a.createElement(
                                                    l.a.Fragment,
                                                    null,
                                                    "sq.yd"
                                                  )
                                                : l.a.createElement(
                                                    l.a.Fragment,
                                                    null,
                                                    "sq.ft"
                                                  )
                                            ),
                                            null != P[e][i].qChValP &&
                                              l.a.createElement(
                                                l.a.Fragment,
                                                null,
                                                0 <= parseFloat(P[e][i].qChValP)
                                                  ? l.a.createElement(
                                                      "span",
                                                      {
                                                        className:
                                                          "mb-srp__locrates__tablesec__greentxt",
                                                      },
                                                      P[e][i].qChValP,
                                                      "%"
                                                    )
                                                  : l.a.createElement(
                                                      "span",
                                                      {
                                                        className:
                                                          "mb-srp__locrates__tablesec__redtxt",
                                                      },
                                                      P[e][i].qChValP,
                                                      "%"
                                                    )
                                              )
                                          )
                                      : l.a.createElement(l.a.Fragment, null),
                                    O
                                      ? !n(i, e, O) ||
                                        (null == O[e][i].qAvgP &&
                                          null == O[e][i].qChValP)
                                        ? l.a.createElement("td", null, "--")
                                        : l.a.createElement(
                                            "td",
                                            null,
                                            l.a.createElement(
                                              "span",
                                              { className: "rupees" },
                                              "₹"
                                            ),
                                            " ",
                                            O[e][i].qAvgP,
                                            " / ",
                                            l.a.createElement(
                                              l.a.Fragment,
                                              null,
                                              "residentialplotsland" == _
                                                ? l.a.createElement(
                                                    l.a.Fragment,
                                                    null,
                                                    "sq.yd"
                                                  )
                                                : l.a.createElement(
                                                    l.a.Fragment,
                                                    null,
                                                    "sq.ft"
                                                  )
                                            ),
                                            null != O[e][i].qChValP &&
                                              l.a.createElement(
                                                l.a.Fragment,
                                                null,
                                                0 <= parseFloat(O[e][i].qChValP)
                                                  ? l.a.createElement(
                                                      "span",
                                                      {
                                                        className:
                                                          "mb-srp__locrates__tablesec__greentxt",
                                                      },
                                                      O[e][i].qChValP,
                                                      "%"
                                                    )
                                                  : l.a.createElement(
                                                      "span",
                                                      {
                                                        className:
                                                          "mb-srp__locrates__tablesec__redtxt",
                                                      },
                                                      O[e][i].qChValP,
                                                      "%"
                                                    )
                                              )
                                          )
                                      : l.a.createElement(l.a.Fragment, null)
                                  )
                                );
                              })
                          )
                        )
                      );
                    })
                )
          )
        );
      }
      function n(e) {
        function t() {
          return null != o.firstNearbyLocalityDetails;
        }
        function a() {
          return null != o.secondNearbyLocalityDetails;
        }
        function r() {
          return null != o.thirdNearbyLocalityDetails;
        }
        var n = e.currnetLocName,
          o = e.recentQuarterDetails,
          i = e.firstNrByLocName,
          c = e.secondNrByLocName,
          s = e.thirdNrByLocName,
          u = null;
        return (
          "independenthouse" == (e = e.keyForPTrendData)
            ? (u = "House")
            : "residentialplotsland" == e
            ? (u = "Plot")
            : "flats" == e
            ? (u = "Flat")
            : "villa" == e && (u = "Villa"),
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              "div",
              { className: "mb-srp__locrates__leftbox" },
              null != o.currentLocalityDetails &&
                l.a.createElement(
                  "div",
                  { className: "mb-srp__locrates__avgprice" },
                  l.a.createElement(
                    "div",
                    { className: "mb-srp__locrates__leftbox__heading" },
                    "Q-o-Q* (Avg. Price / ",
                    "Plot" == u
                      ? l.a.createElement(l.a.Fragment, null, "sq.yd")
                      : l.a.createElement(l.a.Fragment, null, "sq.ft"),
                    ")"
                  ),
                  l.a.createElement(
                    "div",
                    { className: "mb-srp__locrates__avgprice__title" },
                    "Average ",
                    u,
                    " Price in ",
                    n
                  ),
                  l.a.createElement(
                    "div",
                    { className: "mb-srp__locrates__pricesec" },
                    o.currentLocalityDetails.averagePrice
                      ? l.a.createElement(
                          l.a.Fragment,
                          null,
                          l.a.createElement(
                            "span",
                            { className: "rupees" },
                            "₹"
                          ),
                          " ",
                          l.a.createElement(
                            "span",
                            { className: "mb-srp__locrates__pricesec--bold" },
                            o.currentLocalityDetails.averagePrice
                          ),
                          " / ",
                          "Plot" == u
                            ? l.a.createElement(l.a.Fragment, null, "sq.yd")
                            : l.a.createElement(l.a.Fragment, null, "sq.ft")
                        )
                      : l.a.createElement(l.a.Fragment, null, " --  "),
                    null != o.currentLocalityDetails.percentChange
                      ? l.a.createElement(
                          l.a.Fragment,
                          null,
                          0 <=
                            parseFloat(o.currentLocalityDetails.percentChange)
                            ? l.a.createElement(
                                "span",
                                {
                                  className:
                                    "mb-srp__locrates__pricesec--green",
                                },
                                o.currentLocalityDetails.percentChange,
                                "% ",
                                l.a.createElement("span", {
                                  className:
                                    "mb-srp__locrates__pricesec__greenarrow",
                                })
                              )
                            : l.a.createElement(
                                "span",
                                {
                                  className: "mb-srp__locrates__pricesec--red",
                                },
                                o.currentLocalityDetails.percentChange,
                                "% ",
                                l.a.createElement("span", {
                                  className:
                                    "mb-srp__locrates__pricesec__redarrow",
                                })
                              ),
                          l.a.createElement(
                            "span",
                            {
                              className: "mb-srp__locrates__pricesec--greybold",
                            },
                            "QoQ*"
                          )
                        )
                      : l.a.createElement(l.a.Fragment, null, "*")
                  )
                ),
              (i || c || s) &&
                l.a.createElement(
                  "div",
                  { className: "mb-srp__locrates__leftbox__body" },
                  l.a.createElement(
                    "div",
                    { className: "mb-srp__locrates__leftbox__heading" },
                    "Nearby Locality (Avg. Price / ",
                    "Plot" == u
                      ? l.a.createElement(l.a.Fragment, null, "sq.yd")
                      : l.a.createElement(l.a.Fragment, null, "sq.ft"),
                    ")"
                  ),
                  l.a.createElement(
                    "div",
                    { className: "mb-srp__locrates__leftbox__body__row" },
                    i &&
                      l.a.createElement(
                        "div",
                        { className: "mb-srp__locrates__leftbox__body__col" },
                        l.a.createElement(
                          "div",
                          { className: "mb-srp__locrates__leftbox__body__loc" },
                          i
                        ),
                        l.a.createElement(
                          "div",
                          { className: "mb-srp__locrates__pricesec" },
                          t() && o.firstNearbyLocalityDetails.averagePrice
                            ? l.a.createElement(
                                l.a.Fragment,
                                null,
                                l.a.createElement(
                                  "span",
                                  { className: "rupees" },
                                  "₹"
                                ),
                                " ",
                                l.a.createElement(
                                  "span",
                                  {
                                    className:
                                      "mb-srp__locrates__pricesec--bold",
                                  },
                                  o.firstNearbyLocalityDetails.averagePrice
                                ),
                                " / ",
                                "Plot" == u
                                  ? l.a.createElement(
                                      l.a.Fragment,
                                      null,
                                      "sq.yd"
                                    )
                                  : l.a.createElement(
                                      l.a.Fragment,
                                      null,
                                      "sq.ft"
                                    )
                              )
                            : l.a.createElement(l.a.Fragment, null, " -- "),
                          t() &&
                            null != o.firstNearbyLocalityDetails.percentChange
                            ? l.a.createElement(
                                l.a.Fragment,
                                null,
                                0 <=
                                  parseFloat(
                                    o.firstNearbyLocalityDetails.percentChange
                                  )
                                  ? l.a.createElement(
                                      "span",
                                      {
                                        className:
                                          "mb-srp__locrates__pricesec--green",
                                      },
                                      o.firstNearbyLocalityDetails
                                        .percentChange,
                                      "% ",
                                      l.a.createElement("span", {
                                        className:
                                          "mb-srp__locrates__pricesec__greenarrow",
                                      })
                                    )
                                  : l.a.createElement(
                                      "span",
                                      {
                                        className:
                                          "mb-srp__locrates__pricesec--red",
                                      },
                                      o.firstNearbyLocalityDetails
                                        .percentChange,
                                      "% ",
                                      l.a.createElement("span", {
                                        className:
                                          "mb-srp__locrates__pricesec__redarrow",
                                      })
                                    ),
                                l.a.createElement(
                                  "span",
                                  {
                                    className:
                                      "mb-srp__locrates__pricesec--greybold",
                                  },
                                  "QoQ*"
                                )
                              )
                            : l.a.createElement(l.a.Fragment, null, "*")
                        )
                      ),
                    c &&
                      l.a.createElement(
                        "div",
                        { className: "mb-srp__locrates__leftbox__body__col" },
                        l.a.createElement(
                          "div",
                          { className: "mb-srp__locrates__leftbox__body__loc" },
                          c
                        ),
                        l.a.createElement(
                          "div",
                          { className: "mb-srp__locrates__pricesec" },
                          a() && o.secondNearbyLocalityDetails.averagePrice
                            ? l.a.createElement(
                                l.a.Fragment,
                                null,
                                l.a.createElement(
                                  "span",
                                  { className: "rupees" },
                                  "₹"
                                ),
                                " ",
                                l.a.createElement(
                                  "span",
                                  {
                                    className:
                                      "mb-srp__locrates__pricesec--bold",
                                  },
                                  o.secondNearbyLocalityDetails.averagePrice
                                ),
                                " / ",
                                "Plot" == u
                                  ? l.a.createElement(
                                      l.a.Fragment,
                                      null,
                                      "sq.yd"
                                    )
                                  : l.a.createElement(
                                      l.a.Fragment,
                                      null,
                                      "sq.ft"
                                    )
                              )
                            : l.a.createElement(l.a.Fragment, null, " -- "),
                          a() &&
                            null != o.secondNearbyLocalityDetails.percentChange
                            ? l.a.createElement(
                                l.a.Fragment,
                                null,
                                0 <=
                                  parseFloat(
                                    o.secondNearbyLocalityDetails.percentChange
                                  )
                                  ? l.a.createElement(
                                      "span",
                                      {
                                        className:
                                          "mb-srp__locrates__pricesec--green",
                                      },
                                      o.secondNearbyLocalityDetails
                                        .percentChange,
                                      "% ",
                                      l.a.createElement("span", {
                                        className:
                                          "mb-srp__locrates__pricesec__greenarrow",
                                      })
                                    )
                                  : l.a.createElement(
                                      "span",
                                      {
                                        className:
                                          "mb-srp__locrates__pricesec--red",
                                      },
                                      o.secondNearbyLocalityDetails
                                        .percentChange,
                                      "% ",
                                      l.a.createElement("span", {
                                        className:
                                          "mb-srp__locrates__pricesec__rednarrow",
                                      })
                                    ),
                                l.a.createElement(
                                  "span",
                                  {
                                    className:
                                      "mb-srp__locrates__pricesec--greybold",
                                  },
                                  "QoQ*"
                                )
                              )
                            : l.a.createElement(l.a.Fragment, null, "*")
                        )
                      ),
                    s &&
                      l.a.createElement(
                        "div",
                        { className: "mb-srp__locrates__leftbox__body__col" },
                        l.a.createElement(
                          "div",
                          { className: "mb-srp__locrates__leftbox__body__loc" },
                          s
                        ),
                        l.a.createElement(
                          "div",
                          { className: "mb-srp__locrates__pricesec" },
                          r() && o.thirdNearbyLocalityDetails.averagePrice
                            ? l.a.createElement(
                                l.a.Fragment,
                                null,
                                l.a.createElement(
                                  "span",
                                  { className: "rupees" },
                                  "₹"
                                ),
                                " ",
                                l.a.createElement(
                                  "span",
                                  {
                                    className:
                                      "mb-srp__locrates__pricesec--bold",
                                  },
                                  o.thirdNearbyLocalityDetails.averagePrice
                                ),
                                " / ",
                                "Plot" == u
                                  ? l.a.createElement(
                                      l.a.Fragment,
                                      null,
                                      "sq.yd"
                                    )
                                  : l.a.createElement(
                                      l.a.Fragment,
                                      null,
                                      "sq.ft"
                                    )
                              )
                            : l.a.createElement(l.a.Fragment, null, " -- "),
                          r() &&
                            null != o.thirdNearbyLocalityDetails.percentChange
                            ? l.a.createElement(
                                l.a.Fragment,
                                null,
                                0 <=
                                  parseFloat(
                                    o.thirdNearbyLocalityDetails.percentChange
                                  )
                                  ? l.a.createElement(
                                      "span",
                                      {
                                        className:
                                          "mb-srp__locrates__pricesec--green",
                                      },
                                      o.thirdNearbyLocalityDetails
                                        .percentChange,
                                      "% ",
                                      l.a.createElement("span", {
                                        className:
                                          "mb-srp__locrates__pricesec__greenarrow",
                                      })
                                    )
                                  : l.a.createElement(
                                      "span",
                                      {
                                        className:
                                          "mb-srp__locrates__pricesec--red",
                                      },
                                      o.thirdNearbyLocalityDetails
                                        .percentChange,
                                      "% ",
                                      l.a.createElement("span", {
                                        className:
                                          "mb-srp__locrates__pricesec__rednarrow",
                                      })
                                    ),
                                l.a.createElement(
                                  "span",
                                  {
                                    className:
                                      "mb-srp__locrates__pricesec--greybold",
                                  },
                                  "QoQ*"
                                )
                              )
                            : l.a.createElement(l.a.Fragment, null, "*")
                        )
                      )
                  )
                )
            )
          )
        );
      }
      var o = a(0),
        l = a.n(o),
        i = a(2);
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
      function s(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(a), !0).forEach(function (t) {
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
            : s(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      a(55);
      var p = a(58),
        m = a.n(p);
      function d(e, t) {
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
                l,
                i = [],
                c = !0,
                s = !1;
              try {
                if (((o = (a = a.call(e)).next), 0 === t)) {
                  if (Object(a) !== a) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(a)).done) &&
                    (i.push(r.value), i.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (n = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != a.return &&
                    ((l = a.return()), Object(l) !== l)
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
                ? b(e, t)
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
                ? b(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
        return r;
      }
      var f = l.a.lazy(function () {
        return a.e(13).then(a.bind(null, 1854));
      });
      t.a = function (e) {
        var t = e.seoContentData,
          a =
            ((e = (e.isMobile, e.loadDataUserEvent)),
            (O = d(Object(o.useState)(null), 2))[0]),
          c = O[1],
          s = (O = d(Object(o.useState)(null), 2))[0],
          p = O[1],
          b = (O = d(Object(o.useState)(null), 2))[0],
          y = O[1],
          g = (O = d(Object(o.useState)(null), 2))[0],
          v = O[1],
          h = (O = d(Object(o.useState)("1"), 2))[0],
          _ = O[1],
          S = (O = d(Object(o.useState)(!0), 2))[0],
          T = O[1],
          N = (O = d(Object(o.useState)(t), 2))[0],
          P = O[1],
          O =
            ((t = Object(i.d)(function (e) {
              return e.searchAdditionalDataBean;
            })),
            t && t.searchForm && t.searchForm.localityName
              ? t.searchForm.localityName
              : ""),
          E = t && t.cityName && t.cityName.value ? t.cityName.value : "",
          x = ((t = t.intentSeoSlug), null),
          D = (I = d(Object(o.useState)(null), 2))[0],
          w = I[1];
        function C(e, t) {
          w(null), F(e && e.replaceAll("-", ""));
          var a = null != s ? s : "";
          null != b && (0 != a.length && (a += "-"), (a += b)),
            null != g && (0 != a.length && (a += "-"), (a += g)),
            m.a
              .get(
                "/mbsrp/fetchPropertySrpPriceTrend?localityid=" +
                  t +
                  "&forIntent=" +
                  e +
                  "&nearByLocalityIds=" +
                  a
              )
              .then(function (t) {
                console.log(t.data),
                  console.log(t.data.priceTrendData),
                  null !== t.data &&
                    null != t.data.priceTrendData &&
                    (null != (t = t.data.priceTrendData) &&
                    null != t[e] &&
                    (function (e, t) {
                      var a, r;
                      return !!(
                        e &&
                        e.srpLocalityPriceTrendDoc &&
                        ((e =
                          (r = a = null) ==
                          (e =
                            null ==
                            (e =
                              null == (e = e.srpLocalityPriceTrendDoc)
                                ? void 0
                                : e.map(function (e, t) {
                                    return JSON.parse(e.jsoncontent);
                                  }))
                              ? void 0
                              : e.map(function (e, t) {
                                  return e.propPriceTrendBeanMap;
                                }))
                            ? void 0
                            : e.map(function (e, a) {
                                return e[t.replaceAll("-", "")];
                              })) &&
                          e.map(function (e, t) {
                            (a = null == e ? void 0 : e.qoqTrendsYearly),
                              (r = null == e ? void 0 : e.yoyGrowth);
                          }),
                        a) &&
                        r &&
                        a.oneY &&
                        ((a.oneY[3] && a.oneY[3].qAvgP) ||
                          (a.oneY[2] && a.oneY[2].qAvgP))
                      );
                    })(t[e], e)
                      ? P(t[e])
                      : w(!1),
                    (function (e) {
                      document
                        .querySelectorAll(".mb-srp__locrates__tabs__item")
                        .forEach(function (t) {
                          var a = t.dataset.intent;
                          t.classList.remove("selected"),
                            e == a && t.classList.add("selected");
                        });
                    })(e));
              });
        }
        function j() {
          var e, t, a, r, n;
          N.srpLocalityPriceTrendDoc &&
            A &&
            ("independenthouse" == A
              ? (x = "Independent Houses")
              : "residentialplotsland" == A
              ? (x = "Plots")
              : "flats" == A
              ? (x = "Flats")
              : "villa" == A && (x = "Villas"),
            (n =
              null ==
              (n =
                null ==
                (n =
                  null == (n = N.srpLocalityPriceTrendDoc)
                    ? void 0
                    : n.map(function (e, t) {
                        return (
                          (L = e.locality), e.city, JSON.parse(e.jsoncontent)
                        );
                      }))
                  ? void 0
                  : n.map(function (e, t) {
                      return e.propPriceTrendBeanMap;
                    }))
                ? void 0
                : n.map(function (e, t) {
                    return e[A];
                  })),
            console.log("bbbbbbbb", n),
            n &&
              n.map(function (e, t) {
                (B = null == e ? void 0 : e.qoqTrendsYearly),
                  (U = null == e ? void 0 : e.yoyGrowth);
              }),
            console.log("aaaaaaaaaaaaa", B)),
            N.nrByPriceTrendDoc &&
              ((n = N.nrByPriceTrendDoc),
              (e = []),
              null != n &&
                n.map(function (t, a) {
                  0 == a && (e = t);
                }),
              null !=
                (r =
                  null ==
                  (r =
                    null ==
                    (r =
                      null == (r = e)
                        ? void 0
                        : r.map(function (e, t) {
                            return (V = e.locality), JSON.parse(e.jsoncontent);
                          }))
                      ? void 0
                      : r.map(function (e, t) {
                          return e.propPriceTrendBeanMap;
                        }))
                    ? void 0
                    : r.map(function (e, t) {
                        return e[A];
                      })) &&
                r.map(function (e, t) {
                  (Y = null == e ? void 0 : e.qoqTrendsYearly),
                    (R = null == e ? void 0 : e.yoyGrowth);
                }),
              1 < n.length &&
                ((t = []),
                null != n &&
                  n.map(function (e, a) {
                    1 == a && (t = e);
                  }),
                t) &&
                null !=
                  (r =
                    null ==
                    (r =
                      null ==
                      (r =
                        null == (r = t)
                          ? void 0
                          : r.map(function (e, t) {
                              return (
                                (G = e.locality), JSON.parse(e.jsoncontent)
                              );
                            }))
                        ? void 0
                        : r.map(function (e, t) {
                            return e.propPriceTrendBeanMap;
                          }))
                      ? void 0
                      : r.map(function (e, t) {
                          return e[A];
                        })) &&
                r.map(function (e, t) {
                  (M = null == e ? void 0 : e.qoqTrendsYearly),
                    (q = null == e ? void 0 : e.yoyGrowth);
                }),
              2 < n.length) &&
              ((a = []),
              null != n &&
                n.map(function (e, t) {
                  2 == t && (a = e);
                }),
              a) &&
              null !=
                (n =
                  null ==
                  (r =
                    null ==
                    (n =
                      null == (r = a)
                        ? void 0
                        : r.map(function (e, t) {
                            return (K = e.locality), JSON.parse(e.jsoncontent);
                          }))
                      ? void 0
                      : n.map(function (e, t) {
                          return e.propPriceTrendBeanMap;
                        }))
                    ? void 0
                    : r.map(function (e, t) {
                        return e[A];
                      })) &&
              n.map(function (e, t) {
                (H = null == e ? void 0 : e.qoqTrendsYearly),
                  (W = null == e ? void 0 : e.yoyGrowth);
              }),
            (Q = (function (e, t, a, r) {
              var n = function (e, t, a) {
                  return (
                    null != a &&
                    null != a[t] &&
                    null != a[t][e] &&
                    null != a[t][e].qAvgP
                  );
                },
                o = null,
                l = null,
                i = null,
                c = null,
                s = null,
                p = null,
                m = null,
                d = null,
                b = 19,
                f = null;
              for (b = 19; 17 < b; b--)
                if (null != e && n(b, "fiveY", e)) {
                  (f = b),
                    null != t && n(b, "fiveY", t) && (p = !0),
                    null != a && n(b, "fiveY", a) && (s = !0),
                    null != r && n(b, "fiveY", r) && (m = !0);
                  break;
                }
              return (
                null == o &&
                  null != f &&
                  (null != e.fiveY[f].qAvgP &&
                    (o = u(u({}, o), {}, { averagePrice: e.fiveY[f].qAvgP })),
                  null != e.fiveY[f].qChValP &&
                    (o = u(
                      u({}, o),
                      {},
                      { percentChange: e.fiveY[f].qChValP }
                    )),
                  (d = e.fiveY[f].qIdentifier)),
                null == l &&
                  null != f &&
                  p &&
                  (null != t.fiveY[f].qAvgP &&
                    (l = u(u({}, l), {}, { averagePrice: t.fiveY[f].qAvgP })),
                  null != t.fiveY[f].qChValP &&
                    (l = u(
                      u({}, l),
                      {},
                      { percentChange: t.fiveY[f].qChValP }
                    )),
                  null != d) &&
                  (d = t.fiveY[f].qIdentifier),
                null == i &&
                  null != f &&
                  s &&
                  (null != a.fiveY[f].qAvgP &&
                    (i = u(u({}, i), {}, { averagePrice: a.fiveY[f].qAvgP })),
                  null != a.fiveY[f].qChValP &&
                    (i = u(
                      u({}, i),
                      {},
                      { percentChange: a.fiveY[f].qChValP }
                    )),
                  null != d) &&
                  (d = a.fiveY[f].qIdentifier),
                null == c &&
                  null != f &&
                  m &&
                  (null != r.fiveY[f].qAvgP &&
                    (c = u(u({}, c), {}, { averagePrice: r.fiveY[f].qAvgP })),
                  null != r.fiveY[f].qChValP &&
                    (c = u(
                      u({}, c),
                      {},
                      { percentChange: r.fiveY[f].qChValP }
                    )),
                  null != d) &&
                  (d = r.fiveY[f].qIdentifier),
                {
                  currentLocalityDetails: o,
                  firstNearbyLocalityDetails: l,
                  secondNearbyLocalityDetails: i,
                  thirdNearbyLocalityDetails: c,
                  recentQid: d,
                }
              );
            })(B, Y, M, H));
        }
        function k(e, t) {
          _(t);
        }
        "property" === t && (t = "flats");
        var I,
          A = (I = d(Object(o.useState)(t && t.replaceAll("-", "")), 2))[0],
          F = I[1],
          L = null,
          B = null,
          U = null,
          Y = null,
          R = null,
          V = null,
          M = null,
          q = null,
          G = null,
          H = null,
          W = null,
          K = null,
          Q = null;
        return (
          j(),
          Object(o.useEffect)(
            function () {
              j(),
                _("3"),
                setTimeout(function () {
                  _("1"), T(!0);
                }, 50);
            },
            [N]
          ),
          Object(o.useEffect)(function () {
            var e,
              t,
              a,
              r = null,
              n = null,
              o = null,
              l = null;
            N &&
              N.srpLocalityPriceTrendDoc &&
              N.srpLocalityPriceTrendDoc.map(function (e, t) {
                r = e.localityId;
              }),
              N &&
                N.nrByPriceTrendDoc &&
                ((e = []),
                (t = []),
                (a = []),
                N.nrByPriceTrendDoc.map(function (r, n) {
                  0 == n && (e = r), 1 == n && (t = r), 2 == n && (a = r);
                }),
                e &&
                  e.map(function (e, t) {
                    n = e.localityId;
                  }),
                t &&
                  t.map(function (e, t) {
                    o = e.localityId;
                  }),
                a) &&
                a.map(function (e, t) {
                  l = e.localityId;
                }),
              c(r),
              p(n),
              y(o),
              v(l);
          }, []),
          l.a.createElement(
            l.a.Fragment,
            null,
            B &&
              B.oneY &&
              ((B.oneY[3] && B.oneY[3].qAvgP) || (B.oneY[2] && B.oneY[2].qAvgP))
              ? l.a.createElement(
                  l.a.Fragment,
                  null,
                  (null != B || null != Y || null != M) &&
                    l.a.createElement(
                      "div",
                      { className: "mb-srp__locrates" },
                      l.a.createElement(
                        "h2",
                        { className: "mb-srp__locrates__heading" },
                        "independent-house" != t
                          ? "Property Rates"
                          : "House Price Trends",
                        " in ",
                        O,
                        ", ",
                        E
                      ),
                      "independent-house" != t &&
                        l.a.createElement(
                          "div",
                          { className: "mb-srp__locrates__tabs" },
                          l.a.createElement(
                            "div",
                            {
                              className:
                                "mb-srp__locrates__tabs__item selected",
                              "data-intent": "flats",
                              onClick: function () {
                                return C("flats", a);
                              },
                            },
                            "Flat"
                          ),
                          l.a.createElement(
                            "div",
                            {
                              className: "mb-srp__locrates__tabs__item",
                              "data-intent": "independent-house",
                              onClick: function () {
                                return C("independent-house", a);
                              },
                            },
                            "Residential House"
                          ),
                          l.a.createElement(
                            "div",
                            {
                              className: "mb-srp__locrates__tabs__item",
                              "data-intent": "villa",
                              onClick: function () {
                                return C("villa", a);
                              },
                            },
                            "Villa"
                          ),
                          l.a.createElement(
                            "div",
                            {
                              className: "mb-srp__locrates__tabs__item",
                              "data-intent": "residential-plots-land",
                              onClick: function () {
                                return C("residential-plots-land", a);
                              },
                            },
                            "Residential Plot"
                          )
                        ),
                      l.a.createElement(
                        "div",
                        { className: "mb-srp__locrates__body" },
                        null != Q &&
                          l.a.createElement(n, {
                            currnetLocName: L,
                            recentQuarterDetails: Q,
                            firstNrByLocName: V,
                            secondNrByLocName: G,
                            thirdNrByLocName: K,
                            keyForPTrendData: A,
                          }),
                        l.a.createElement(
                          "div",
                          { className: "mb-srp__locrates__tablesec" },
                          l.a.createElement(
                            "div",
                            { className: "mb-srp__locrates__trends" },
                            l.a.createElement(
                              "div",
                              { className: "mb-srp__locrates__title" },
                              "Price Trends"
                            ),
                            l.a.createElement(
                              "div",
                              { className: "mb-srp__locrates__rightsec" },
                              l.a.createElement(
                                "div",
                                { className: "mb-srp__locrates__years" },
                                l.a.createElement(
                                  "span",
                                  {
                                    className:
                                      "mb-srp__locrates__years__part ".concat(
                                        "1" == h ? "selected" : ""
                                      ),
                                    onClick: function (e) {
                                      return k(0, "1");
                                    },
                                  },
                                  "1Y"
                                ),
                                l.a.createElement(
                                  "span",
                                  {
                                    className:
                                      "mb-srp__locrates__years__part ".concat(
                                        "3" == h ? "selected" : ""
                                      ),
                                    onClick: function (e) {
                                      return k(0, "3");
                                    },
                                  },
                                  "3Y"
                                ),
                                l.a.createElement(
                                  "span",
                                  {
                                    className:
                                      "mb-srp__locrates__years__part ".concat(
                                        "5" == h ? "selected" : ""
                                      ),
                                    onClick: function (e) {
                                      return k(0, "5");
                                    },
                                  },
                                  "5Y"
                                )
                              ),
                              l.a.createElement(
                                "div",
                                {
                                  className:
                                    "mb-srp__locrates__tableviewsec ".concat(
                                      S ? "graph-view" : ""
                                    ),
                                  onClick: function () {
                                    T(!S);
                                  },
                                },
                                l.a.createElement("span", {
                                  className:
                                    "mb-srp__locrates__tableviewsec__graph-ic",
                                }),
                                l.a.createElement(
                                  "span",
                                  {
                                    className:
                                      "mb-srp__locrates__tableviewsec__txt",
                                  },
                                  S ? "Table View" : "Graph View",
                                  l.a.createElement("span", {
                                    className:
                                      "mb-srp__locrates__tableviewsec__txt__icon",
                                  })
                                )
                              )
                            )
                          ),
                          l.a.createElement(
                            "div",
                            {
                              className: "locality-graph ".concat(
                                S ? "" : "hide-table-graph"
                              ),
                            },
                            e &&
                              l.a.createElement(
                                o.Suspense,
                                {
                                  fallback: l.a.createElement(
                                    l.a.Fragment,
                                    null
                                  ),
                                },
                                l.a.createElement(f, {
                                  qoqTrendsYearly: B,
                                  nearbyLocalityFirstQoqTrendsYearly: Y,
                                  nearbyLocalitySecondQoqTrendsYearly: M,
                                  nearbyLocalityThirdQoqTrendsYearly: H,
                                  year: h,
                                  graphView: S,
                                  firstNrByLocName: V,
                                  secondNrByLocName: G,
                                  thirdNrByLocName: K,
                                  currLocName: L,
                                  intentOfPTrend: A,
                                })
                              )
                          ),
                          l.a.createElement(r, {
                            qoqTrendsYearly: B,
                            nearbyLocalityFirstQoqTrendsYearly: Y,
                            nearbyLocalitySecondQoqTrendsYearly: M,
                            nearbyLocalityThirdQoqTrendsYearly: H,
                            yearState: h,
                            graphView: S,
                            nrByLocFirst: V,
                            nrByLocSecond: G,
                            thirdNrByLocName: K,
                            yoyGrowth: U,
                            nearbyLocalityFirstYoyGrowth: R,
                            nearbyLocalitySecondYoyGrowth: q,
                            nearbyLocalityThirdYoyGrowth: W,
                            currLocName: L,
                            intentOfPTrend: A,
                          })
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { className: "mb-srp__locrates__tnc" },
                        l.a.createElement(
                          "div",
                          { className: "mb-srp__locrates__tnc__txt" },
                          "*Based on ",
                          Q && Q.recentQid,
                          " Quarter data. All data based on ",
                          x,
                          " available for sale on MagicBricks."
                        )
                      )
                    )
                )
              : "independent-house" != t
              ? l.a.createElement(
                  "div",
                  {
                    className:
                      null != D && 0 == D
                        ? "mb-srp__locrates no-data"
                        : "mb-srp__locrates graph-loader",
                  },
                  l.a.createElement(
                    "h2",
                    { className: "mb-srp__locrates__heading" },
                    "independent-house" != t
                      ? "Property Rates"
                      : "House Price Trends",
                    " in ",
                    O,
                    ", ",
                    E
                  ),
                  "independent-house" != t &&
                    l.a.createElement(
                      "div",
                      { className: "mb-srp__locrates__tabs" },
                      l.a.createElement(
                        "div",
                        {
                          className: "mb-srp__locrates__tabs__item",
                          "data-intent": "flats",
                          onClick: function () {
                            return C("flats", a);
                          },
                        },
                        "Flat"
                      ),
                      l.a.createElement(
                        "div",
                        {
                          className: "mb-srp__locrates__tabs__item",
                          "data-intent": "independent-house",
                          onClick: function () {
                            return C("independent-house", a);
                          },
                        },
                        "Residential House"
                      ),
                      l.a.createElement(
                        "div",
                        {
                          className: "mb-srp__locrates__tabs__item",
                          "data-intent": "villa",
                          onClick: function () {
                            return C("villa", a);
                          },
                        },
                        "Villa"
                      ),
                      l.a.createElement(
                        "div",
                        {
                          className: "mb-srp__locrates__tabs__item",
                          "data-intent": "residential-plots-land",
                          onClick: function () {
                            return C("residential-plots-land", a);
                          },
                        },
                        "Residential Plot"
                      )
                    ),
                  null != D &&
                    !1 === D &&
                    l.a.createElement(
                      "div",
                      { className: "mb-srp__locrates__no-data" },
                      "Data not Available"
                    )
                )
              : l.a.createElement(l.a.Fragment, null)
          )
        );
      };
    },
    879: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r),
        o = a(2),
        l = a(298);
      function i(e) {
        return (i =
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
      function s(e) {
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
                        if ("object" !== i(e) || null === e) return e;
                        var a = e[Symbol.toPrimitive];
                        if (void 0 === a) return String(e);
                        if ("object" !== i((a = a.call(e, "string")))) return a;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === i(e) ? e : String(e)
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
      function u(e) {
        var t = e.commGuru,
          a = e.additionalSearchBeanData,
          r = Object(o.c)();
        return n.a.createElement(
          n.a.Fragment,
          null,
          "Y" !== t &&
            n.a.createElement(l.a, {
              heading: "View Commercial Guru properties only",
              floatingFilterCat: "floatingCommGuruProperties",
              floatingFilterId: "floatingCommGuruProperties",
              onChange: function () {
                r({ type: "commGuru", data: "Y" }),
                  r({
                    type: "NewAdditionalBeanData",
                    data: s(s({}, a), {
                      lastFilterData: {
                        type: "commGuru",
                        data: "Y",
                        appliedFor: "Floating_Applied",
                        isSelected: null,
                        name: null,
                        prev1: null,
                        prevValue: null,
                        type1: null,
                      },
                    }),
                  });
              },
            })
        );
      }
      function p(e) {
        var t = e.businessType,
          a = ((e = e.businessTypeList), Object(o.c)());
        return n.a.createElement(
          n.a.Fragment,
          null,
          null == t &&
            n.a.createElement(y.a, {
              heading: "Select the business you need a shop for",
              filterdata: e,
              columModifierClass: "min-width-for-col",
              onSelectionChange: function (e) {
                return a({ type: "businessType", data: e });
              },
            })
        );
      }
      var m = a(441),
        d = a(305),
        b = a(440),
        f = a(442),
        y = a(138),
        g = a(443),
        v = a(88);
      function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
        return r;
      }
      t.a = function (e) {
        var t,
          a,
          r,
          o = e.searchBeanData,
          l = e.index,
          i = e.additionalSearchBeanData,
          c = e.floatingFilterMap;
        e = e.resultList;
        return null == c || void 0 === (c = c[(l % 20) + ""]) || null == c
          ? n.a.createElement(n.a.Fragment, null)
          : ("Y" !== Object.keys(c)[1] && 30 < l && n.a.Fragment,
            (t = null),
            "possession" == (c = Object.keys(c)[0]) &&
              (t = Object(v.e)(i.possessionVals)),
            (a = null),
            "BusinessType" == c &&
              (a = (function (e) {
                var t,
                  a = [];
                if (null != e) {
                  var r,
                    n = (function (e, t) {
                      var a,
                        r,
                        n,
                        o,
                        l =
                          ("undefined" != typeof Symbol &&
                            e[Symbol.iterator]) ||
                          e["@@iterator"];
                      if (l)
                        return (
                          (r = !(a = !0)),
                          {
                            s: function () {
                              l = l.call(e);
                            },
                            n: function () {
                              var e = l.next();
                              return (a = e.done), e;
                            },
                            e: function (e) {
                              (r = !0), (n = e);
                            },
                            f: function () {
                              try {
                                a || null == l.return || l.return();
                              } finally {
                                if (r) throw n;
                              }
                            },
                          }
                        );
                      if (
                        Array.isArray(e) ||
                        (l = (function (e, t) {
                          var a;
                          if (e)
                            return "string" == typeof e
                              ? h(e, t)
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
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                  a
                                )
                              ? h(e, t)
                              : void 0;
                        })(e)) ||
                        (t && e && "number" == typeof e.length)
                      )
                        return (
                          l && (e = l),
                          (o = 0),
                          {
                            s: (t = function () {}),
                            n: function () {
                              return o >= e.length
                                ? { done: !0 }
                                : { done: !1, value: e[o++] };
                            },
                            e: function (e) {
                              throw e;
                            },
                            f: t,
                          }
                        );
                      throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })(e);
                  try {
                    for (n.s(); !(r = n.n()).done; ) {
                      var o = r.value;
                      a.push({
                        name: o,
                        id: "floatingFilterBusinesstype_" + o,
                        value: o,
                        cat: "floatingFilterBusinesstype",
                      });
                    }
                  } catch (e) {
                    n.e(e);
                  } finally {
                    n.f();
                  }
                  t = { title: "", filters: a };
                }
                return t;
              })(i.floatingFilterbusinessTypesList)),
            (r =
              null == o.possessionStatus || 0 == o.possessionStatus.length
                ? "Y"
                : "N"),
            n.a.createElement(
              "div",
              null,
              "CG" == c &&
                (null == o.propertyType ||
                  1 !== o.propertyType.length ||
                  "10026" !== o.propertyType[0]) &&
                n.a.createElement(u, {
                  commGuru: o.commGuru,
                  additionalSearchBeanData: i,
                }),
              "Listing with Images" == c &&
                n.a.createElement(m.a, {
                  index: l,
                  listingWithImages: o.listingWithImages,
                  length: e.length,
                }),
              "Budget" == c &&
                n.a.createElement(d.a, {
                  budgetMin: o.budgetMin,
                  budgetMax: o.budgetMax,
                  length: e.length,
                  index: l,
                  floatingFilterBudgetBuy: v.c,
                  category: o.category,
                  additionalSearchBeanData: i,
                  propType: o.propertyType,
                }),
              "possession" == c &&
                n.a.createElement(b.a, {
                  category: o.category,
                  possessionStatus: o.possessionStatus,
                  possessionFilter: t,
                  additionalSearchBeanData: i,
                }),
              "Construction Status" == c &&
                (null == o.propertyType ||
                  1 !== o.propertyType.length ||
                  "10026" !== o.propertyType[0]) &&
                n.a.createElement(f.a, {
                  showCons: r,
                  index: l,
                  constructionStatusFF: v.a,
                }),
              "BusinessType" == c &&
                null != a &&
                0 < a.length &&
                n.a.createElement(p, {
                  businessType: o.businessType,
                  businessTypeList: a,
                }),
              "furnishing" == c &&
                (null == o.propertyType ||
                  1 !== o.propertyType.length ||
                  "10026" !== o.propertyType[0]) &&
                n.a.createElement(g.a, {
                  furnish: o.furnish,
                  furnishingFilter:
                    "furnishing" == c
                      ? {
                          title: "",
                          filters: [
                            {
                              name: "Bareshell",
                              id: "furnishingFF_11901",
                              value: "11901",
                              cat: "furnishingFF",
                            },
                            {
                              name: "Semi-Furnished",
                              id: "furnishingFF_11902",
                              value: "11902",
                              cat: "furnishingFF",
                            },
                            {
                              name: "Fully Furnished",
                              id: "furnishingFF_11900",
                              value: "11900",
                              cat: "furnishingFF",
                            },
                          ],
                        }
                      : null,
                })
            ));
      };
    },
    88: function (e, t, a) {
      "use strict";
      function r(e, t) {
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
                l,
                i = [],
                c = !0,
                s = !1;
              try {
                if (((o = (a = a.call(e)).next), 0 === t)) {
                  if (Object(a) !== a) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(a)).done) &&
                    (i.push(r.value), i.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (n = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != a.return &&
                    ((l = a.return()), Object(l) !== l)
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
                ? n(e, t)
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
                ? n(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
        return r;
      }
      a.d(t, "e", function () {
        return o;
      }),
        a.d(t, "b", function () {
          return l;
        }),
        a.d(t, "c", function () {
          return i;
        }),
        a.d(t, "a", function () {
          return c;
        }),
        a.d(t, "d", function () {
          return s;
        });
      var o = function (e) {
          var t = [],
            a =
              (t.push({
                name: "Immediately",
                id: "possessionStatus_Immedia",
                value: "10081",
                cat: "fl-possessionStatus",
                year: "",
              }),
              0);
          if (null != e)
            for (var n = 0, o = Object.entries(e); n < o.length; n++) {
              var l = (i = r(o[n], 2))[0],
                i =
                  ((i = i[1]).includes("yrs")
                    ? (i = i.replace("yrs", "Year"))
                    : i.includes("yr") && (i = i.replace("yr", "Year")),
                  {
                    name: (i = "Within " + i),
                    id: "fl-possessionStatus_" + l,
                    value: "10080",
                    cat: "fl-possessionStatus",
                    year: l,
                  });
              if ((t.push(i), 2 == a)) break;
              a++;
            }
          return { filters: t };
        },
        l = function () {
          return {
            title: "",
            filters: [
              {
                name: "1 BHK",
                id: "floatingFilterBhk_11700",
                value: ["11700"],
                cat: "floatingFilterBhk",
              },
              {
                name: "2 BHK",
                id: "floatingFilterBhk_11701",
                value: ["11701"],
                cat: "floatingFilterBhk",
              },
              {
                name: "3 BHK",
                id: "floatingFilterBhk_11702",
                value: ["11702"],
                cat: "floatingFilterBhk",
              },
              {
                name: "4 BHK",
                id: "floatingFilterBhk_11703",
                value: ["11703"],
                cat: "floatingFilterBhk",
              },
              {
                name: "5 BHK",
                id: "floatingFilterBhk_11704",
                value: ["11704"],
                cat: "floatingFilterBhk",
              },
              {
                name: ">5 BHK",
                id: "floatingFilterBhk_11705",
                value: ["11705", "11706", "11707", "11708", "11709", "11710"],
                cat: "floatingFilterBhk",
              },
            ],
          };
        },
        i = function (e) {
          return (e =
            "R" == e
              ? {
                  title: "",
                  range: [
                    { name: "5000", value: 5e3, cat: "budgetRent" },
                    { name: "10000", value: 1e4, cat: "budgetRent" },
                    { name: "15000", value: 15e3, cat: "budgetRent" },
                    { name: "20000", value: 2e4, cat: "budgetRent" },
                    { name: "25000", value: 25e3, cat: "budgetRent" },
                    { name: "30000", value: 3e4, cat: "budgetRent" },
                    { name: "35000", value: 35e3, cat: "budgetRent" },
                    { name: "40000", value: 4e4, cat: "budgetRent" },
                    { name: "50000", value: 5e4, cat: "budgetRent" },
                    { name: "60000", value: 6e4, cat: "budgetRent" },
                    { name: "70000", value: 7e4, cat: "budgetRent" },
                    { name: "85000", value: 85e3, cat: "budgetRent" },
                    { name: "1 Lac", value: 1e5, cat: "budgetRent" },
                    { name: "1.5 Lac", value: 15e4, cat: "budgetRent" },
                    { name: "2 Lac", value: 2e5, cat: "budgetRent" },
                    { name: "4 Lac", value: 4e5, cat: "budgetRent" },
                    { name: "7 Lac", value: 7e5, cat: "budgetRent" },
                  ],
                }
              : "Coworking" == e
              ? {
                  title: "",
                  range: [
                    { name: "4000", value: 4e3, cat: "budgetRent" },
                    { name: "6000", value: 6e3, cat: "budgetRent" },
                    { name: "8000", value: 8e3, cat: "budgetRent" },
                    { name: "10000", value: 1e4, cat: "budgetRent" },
                    { name: "12000", value: 12e3, cat: "budgetRent" },
                    { name: "14000", value: 14e3, cat: "budgetRent" },
                    { name: "16000", value: 16e3, cat: "budgetRent" },
                    { name: "18000", value: 18e3, cat: "budgetRent" },
                    { name: "20000", value: 2e4, cat: "budgetRent" },
                  ],
                }
              : {
                  title: "",
                  range: [
                    { name: "10 Lac", value: 1e6, cat: "budgetBuy" },
                    { name: "20 Lac", value: 2e6, cat: "budgetBuy" },
                    { name: "30 Lac", value: 3e6, cat: "budgetBuy" },
                    { name: "40 Lac", value: 4e6, cat: "budgetBuy" },
                    { name: "50 Lac", value: 5e6, cat: "budgetBuy" },
                    { name: "60 Lac", value: 6e6, cat: "budgetBuy" },
                    { name: "70 Lac", value: 7e6, cat: "budgetBuy" },
                    { name: "80 Lac", value: 8e6, cat: "budgetBuy" },
                    { name: "90 Lac", value: 9e6, cat: "budgetBuy" },
                    { name: "1 Cr", value: 1e7, cat: "budgetBuy" },
                    { name: "1.2 Cr", value: 12e6, cat: "budgetBuy" },
                    { name: "1.4 Cr", value: 14e6, cat: "budgetBuy" },
                    { name: "1.6 Cr", value: 16e6, cat: "budgetBuy" },
                    { name: "1.8 Cr", value: 18e6, cat: "budgetBuy" },
                    { name: "2 Cr", value: 2e7, cat: "budgetBuy" },
                  ],
                });
        },
        c = function () {
          return {
            title: "",
            filters: [
              {
                name: "Ready To Move",
                id: "constructionStatusFF_10081",
                value: "10081",
                cat: "constructionStatusFF",
              },
              {
                name: "Under Construction",
                id: "constructionStatusFF_10080",
                value: "10080",
                cat: "constructionStatusFF",
              },
            ],
          };
        },
        s = function () {
          return {
            title: "",
            filters: [
              {
                name: "Furnished",
                id: "furnishingFF_11900",
                value: "11900",
                cat: "furnishingFF",
              },
              {
                name: "Semi-Furnished",
                id: "furnishingFF_11902",
                value: "11902",
                cat: "furnishingFF",
              },
              {
                name: "Unfurnished",
                id: "furnishingFF_11901",
                value: "11901",
                cat: "furnishingFF",
              },
            ],
          };
        };
    },
    883: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r),
        o = a(2),
        l = a(298);
      function i(e) {
        return (i =
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
      function s(e) {
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
                        if ("object" !== i(e) || null === e) return e;
                        var a = e[Symbol.toPrimitive];
                        if (void 0 === a) return String(e);
                        if ("object" !== i((a = a.call(e, "string")))) return a;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === i(e) ? e : String(e)
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
      function u(e) {
        var t = e.verifiedProperties,
          a = e.additionalSearchBeanData,
          r = Object(o.c)();
        return n.a.createElement(
          n.a.Fragment,
          null,
          "Y" !== t &&
            n.a.createElement(l.a, {
              heading: "View verified properties only",
              floatingFilterCat: "floatingVerifiedProperties",
              floatingFilterId: "floatingVerifiedPropertiesId",
              onChange: function () {
                r({ type: "verifiedProperties", data: "Y" }),
                  r({
                    type: "NewAdditionalBeanData",
                    data: s(s({}, a), {
                      lastFilterData: {
                        type: "verifiedProperties",
                        data: "Y",
                        appliedFor: "Floating_Applied",
                        isSelected: null,
                        name: null,
                        prev1: null,
                        prevValue: null,
                        type1: null,
                      },
                    }),
                  });
              },
            })
        );
      }
      var p = a(440),
        m = a(441),
        d = a(305),
        b = a(138);
      function f(e) {
        return (f =
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
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? y(Object(a), !0).forEach(function (t) {
                var r, n;
                (r = e),
                  (n = a[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== f(e) || null === e) return e;
                        var a = e[Symbol.toPrimitive];
                        if (void 0 === a) return String(e);
                        if ("object" !== f((a = a.call(e, "string")))) return a;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === f(e) ? e : String(e)
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
            : y(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      function v(e) {
        var t = e.showBhk,
          a = (e.index, e.bhkFilter, e.floatingFilterBhk),
          r = e.additionalSearchBeanData,
          l = Object(o.c)();
        return n.a.createElement(
          n.a.Fragment,
          null,
          "Y" == t &&
            n.a.createElement(b.a, {
              heading: "Select the no. of bedrooms",
              filterdata: a(),
              columModifierClass: "min-width-for-col",
              onSelectionChange: function (e) {
                l({ type: "bhk", data: e }),
                  l({
                    type: "NewAdditionalBeanData",
                    data: g(g({}, r), {
                      lastFilterData: {
                        type: "bhk",
                        data: e,
                        appliedFor: "Floating_Applied",
                        isSelected: null,
                        name: null,
                        prev1: null,
                        prevValue: null,
                        type1: null,
                      },
                    }),
                  });
              },
            })
        );
      }
      var h = a(442),
        _ = a(443),
        S = a(88);
      t.a = function (e) {
        var t,
          a,
          r,
          o,
          l = e.searchBeanData,
          i = e.index,
          c = e.additionalSearchBeanData,
          s = e.floatingFilterMap;
        e = e.resultList;
        return null == s || void 0 === (s = s[(i % 20) + ""]) || null == s
          ? n.a.createElement(n.a.Fragment, null)
          : ("Y" !== Object.keys(s)[1] && 30 < i && n.a.Fragment,
            (t = null),
            "possession" == (s = Object.keys(s)[0]) &&
              (t = Object(S.e)(c.possessionVals)),
            (a = null),
            "furnishing" == s && (a = Object(S.d)()),
            (r = null == l.bhk || 0 == l.bhk.length ? "Y" : "N"),
            (o =
              null == l.possessionStatus || 0 == l.possessionStatus.length
                ? "Y"
                : "N"),
            n.a.createElement(
              "div",
              null,
              "verified properties" == s &&
                "N" === c.isDsListingLogic &&
                n.a.createElement(u, {
                  verifiedProperties: l.verifiedProperties,
                  additionalSearchBeanData: c,
                }),
              "possession" == s &&
                n.a.createElement(p.a, {
                  category: l.category,
                  possessionStatus: l.possessionStatus,
                  possessionFilter: t,
                  additionalSearchBeanData: c,
                }),
              "Listing with Images" == s &&
                "N" === c.isDsListingLogic &&
                n.a.createElement(m.a, {
                  index: i,
                  listingWithImages: l.listingWithImages,
                  length: e.length,
                }),
              "Budget" == s &&
                n.a.createElement(d.a, {
                  budgetMin: l.budgetMin,
                  budgetMax: l.budgetMax,
                  length: e.length,
                  index: i,
                  floatingFilterBudgetBuy: S.c,
                  category: l.category,
                  additionalSearchBeanData: c,
                  propType: l.propertyType,
                }),
              "Bedroom" == s &&
                n.a.createElement(v, {
                  showBhk: r,
                  index: i,
                  floatingFilterBhk: S.b,
                  additionalSearchBeanData: c,
                }),
              "Construction Status" == s &&
                n.a.createElement(h.a, {
                  showCons: o,
                  index: i,
                  constructionStatusFF: S.a,
                }),
              "furnishing" == s &&
                "R" == l.category &&
                null !== l.locality &&
                0 < l.locality.length &&
                "N" == r &&
                (null !== l.budgetMax || null != l.budgetMin) &&
                n.a.createElement(_.a, {
                  furnish: l.furnish,
                  furnishingFilter: a,
                })
            ));
      };
    },
    889: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return N;
      });
      var r = a(207),
        n = a(822),
        o = a(83),
        l = a(14),
        i = a(434),
        c = a(3),
        s = a(8),
        u = a(156),
        p = a(45),
        m = a(44);
      function d(e) {
        return (d =
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
      function b(e, t) {
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
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(a), !0).forEach(function (t) {
                var r, n;
                (r = e),
                  (n = a[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== d(e) || null === e) return e;
                        var a = e[Symbol.toPrimitive];
                        if (void 0 === a) return String(e);
                        if ("object" !== d((a = a.call(e, "string")))) return a;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === d(e) ? e : String(e)
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
            : b(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      var y = a(435),
        g = a(436);
      function v(e) {
        return (v =
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
      function h(e, t) {
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
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(a), !0).forEach(function (t) {
                var r, n;
                (r = e),
                  (n = a[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== v(e) || null === e) return e;
                        var a = e[Symbol.toPrimitive];
                        if (void 0 === a) return String(e);
                        if ("object" !== v((a = a.call(e, "string")))) return a;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === v(e) ? e : String(e)
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
            : h(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      function S(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return T(e);
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
                ? T(e, t)
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
                ? T(e, t)
                : void 0;
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function T(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
        return r;
      }
      var N = function (e, t, a, d, b, v, h, T, N, O, E, x, D, w, C, j, k) {
        var I,
          A,
          F = !1;
        !N.lastFilterData ||
          ("propertyType" != N.lastFilterData.type &&
            "clearAllPropertyType" != N.lastFilterData.type) ||
          ((null == e.propertyType ||
            (e.propertyType && 0 == e.propertyType.length)) &&
            ((F = !0),
            Object(s.g)(N.resultPerPageCount, N, e, d, !1, !1, T, {
              cm17: 0,
            }))),
          ((null != e.propertyType && 0 < e.propertyType.length) ||
            (null != e.shared && "Y" == e.shared)) &&
            (void 0 === (T = document.getElementById("pageLoader")) ||
              null == T ||
              (O && !k) ||
              (document.getElementById("pageLoader").style.display = "block"),
            (T = O ? Object(n.a)(e, null, N) : Object(r.a)(e, N)),
            O &&
              (k
                ? ((I =
                    window.pageYOffset || document.documentElement.scrollTop),
                  (A =
                    window.pageXOffset || document.documentElement.scrollLeft),
                  (window.onscroll = function () {
                    window.scrollTo(A, I);
                  }))
                : j(!0)),
            l.a
              .get(T)
              .then(function (r) {
                if (
                  (void 0 !== (B = document.getElementById("pageLoader")) &&
                    null != B &&
                    (document.getElementById("pageLoader").style.display =
                      "none"),
                  e.pageNo &&
                    1 == e.pageNo &&
                    (void 0 === r.data.resultList ||
                    null === r.data.resultList ||
                    void 0 === r.data.resultList.length ||
                    0 == r.data.resultList.length ||
                    (void 0 !== r.data.resultList &&
                      null !== r.data.resultList &&
                      void 0 !== r.data.resultList.length &&
                      r.data.resultList.length < 20)
                      ? t(!1)
                      : t(!0)),
                  null !== r.data.resultList)
                )
                  if (e.srpAction === o.j)
                    a(function (e) {
                      return [].concat(S(e), S(r.data.resultList));
                    });
                  else {
                    a(r.data.resultList);
                    try {
                      d({
                        type: "topNudegePropertyInfo",
                        payload: {
                          encPropId: r.data.resultList[0].encId,
                          propId: r.data.resultList[0].id,
                          locality: r.data.resultList[0].lt,
                        },
                      });
                    } catch (B) {
                      console.log(
                        "error in dispatcing prop for top matches nudge"
                      );
                    }
                    window.scroll(0, 0);
                  }
                else e.srpAction !== o.j && (a([]), window.scroll(0, 0));
                var n,
                  l,
                  T,
                  I,
                  A,
                  L,
                  B = Object(p.a)(r.data.resultList),
                  U = {},
                  Y =
                    (O && (U = Object(p.b)(r.data.resultList, w, C)),
                    _(_({}, B), U)),
                  R =
                    ((B = _(_({}, B), U)),
                    _(
                      _({}, (R = r.data.editAdditionalDataBean)),
                      {},
                      {
                        refreshCount: N.refreshCount,
                        filterKeyValueMap: N.filterKeyValueMap,
                        isFixedSeoPage: N.isFixedSeoPage,
                        projectCount: N.projectCount,
                      }
                    )),
                  V =
                    ("no nsr" !==
                      (V =
                        (O || Object(y.a)(e, a, d, r.data.resultList, R, E, w),
                        "Y" == R.isNearMeSeoUrl &&
                          (d({
                            type: "nearMeSeoCity",
                            payload: R.cityName.key,
                          }),
                          d({
                            type: "nearMeSeoJsonData",
                            payload: _(
                              _({}, x.nearMeSeoJsonData),
                              {},
                              { city: R.cityName.value }
                            ),
                          })),
                        Object(c.a)(R))) &&
                      d(
                        Object(c.e)({
                          event: "event_tracking",
                          eventName: "revamp_srp_nsr",
                          nonInteraction: !0,
                          eventCategory: "revamp srp - nsr",
                          eventAction: V,
                          eventLabel: "propertysearch",
                          eventValue: "",
                        })
                      ),
                    Object(p.d)(r.data.resultList, E, O)),
                  M = null !== r.data.resultList ? r.data.resultList.length : 0;
                d(
                  ((n = x),
                  (l = e),
                  (T = R),
                  (I = B),
                  (A = V),
                  (L = M),
                  function (e) {
                    var t, a, r;
                    null != n &&
                      null != n.fromSortBy &&
                      "" != n.fromSortBy &&
                      ((t = Object(m.f)(n.fromSortBy)),
                      (a = Object(m.f)(l.sortBy)),
                      (r = I),
                      a != t) &&
                      (e(
                        Object(c.e)(
                          f(
                            f(
                              f(
                                {
                                  event: "event_tracking",
                                  eventName: "revamp_srp_sort",
                                  nonInteraction: !1,
                                  eventCategory: "revamp srp - sort",
                                  eventAction: "to: " + a,
                                  eventLabel: "from: " + t,
                                  eventValue: L + "",
                                  cd110b: "SRP Refinement",
                                  cm12: 1,
                                },
                                r
                              ),
                              Object(u.a)(T)
                            ),
                            A
                          )
                        )
                      ),
                      e({ type: "fromSortBy", payload: l.sortBy }));
                  })
                ),
                  (B = !1),
                  e.srpAction === o.j
                    ? (d(
                        Object(c.e)(
                          _(
                            _(
                              _(
                                {
                                  event: "event_tracking",
                                  eventName: "revamp_srp_results_load",
                                  nonInteraction: !0,
                                  eventCategory: "revamp srp - results load",
                                  eventAction:
                                    "revamp srp additional results load",
                                  eventLabel:
                                    "revamp srp additional results load",
                                  eventValue: M,
                                },
                                Y
                              ),
                              Object(u.a)(R)
                            ),
                            V
                          )
                        )
                      ),
                      (B = !0))
                    : "SEOPageChange" === e.srpAction &&
                      ((R = _(_({}, R), {}, { isSeoSearch: !0 })),
                      d(
                        Object(c.e)(
                          _(
                            _(
                              _(
                                {
                                  event: "event_tracking",
                                  eventName: "revamp_srp_results_load",
                                  nonInteraction: !0,
                                  eventCategory: "revamp srp - results load",
                                  eventAction:
                                    "revamp srp additional results load",
                                  eventLabel:
                                    "revamp srp additional results load",
                                  eventValue: M,
                                },
                                Y
                              ),
                              Object(u.a)(R)
                            ),
                            V
                          )
                        )
                      ),
                      (B = !0)),
                  d(
                    Object(p.e)(
                      x,
                      e,
                      R,
                      r.data.resultList,
                      r.data.nsrResultList,
                      E,
                      O,
                      D,
                      B,
                      w,
                      C
                    )
                  ),
                  (M =
                    null !== r.data.resultList ? r.data.resultList.length : 0);
                Object(g.a)(!1, e, N, R, x, d),
                  d({ type: "NewAdditionalBeanData", data: R }),
                  (N = _(
                    _({}, N),
                    {},
                    {
                      nriPrefProps: R.nriPrefProps,
                      nriPaidProps: R.nriPaidProps,
                    }
                  )),
                  (V = _(_({}, V), U)),
                  Object(s.g)(M, N, e, d, !1, F, r.data.resultList, V),
                  d({
                    type: "societyExpertDataAddition",
                    data: r.data.societyExpertResultList,
                  }),
                  b(r.data.nsrResultList),
                  v(!1),
                  h(!1),
                  Object(i.a)(e, R, d),
                  O &&
                    (k
                      ? setTimeout(function () {
                          P();
                        }, 1e3)
                      : setTimeout(function () {
                          j(!1);
                        }, 500));
              })
              .catch(function (e) {
                var t = document.getElementById("pageLoader");
                void 0 !== t &&
                  null != t &&
                  (document.getElementById("pageLoader").style.display =
                    "none"),
                  window.scroll(0, 0),
                  O &&
                    (k
                      ? setTimeout(function () {
                          P();
                        }, 1e3)
                      : setTimeout(function () {
                          j(!1);
                        }, 500));
              }));
      };
      function P() {
        window.onscroll = function () {};
      }
    },
    89: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      }),
        a(22);
      var r = function (e, t, a, r, o, l, i, c) {
        var s = [],
          u = "",
          p = !1;
        if (void 0 === e.ty || "10026" !== e.ty) {
          if (
            (void 0 !== e.pmtuspD &&
              null !== e.pmtuspD &&
              "null" !== e.pmtuspD &&
              "N" == a &&
              0 !== r &&
              (a = "Y"),
            (r = o ? "mb-srp-m__card__tags--" : "mb-srp__card__tags--"),
            n(t.appExcWebCities) ||
              "Y" != t.appExcWebCities ||
              n(e.tag) ||
              ("MAGICBRICKS EXCLUSIVE" != e.tag &&
                "Exclusively on Magicbricks" != e.tag) ||
              n(e.pp) ||
              "I" != e.pp ||
              n(e.isPaidUser) ||
              "N" != e.isPaidUser ||
              (u = "Y"),
            n(e.isVis) ||
              n(e.userType) ||
              "Builder" != e.userType ||
              n(t.noBrokerageBuilderVisType) ||
              !t.noBrokerageBuilderVisType
                .toUpperCase()
                .includes(e.isVis.toUpperCase()) ||
              (s.push({ classText: r + "tick", tagText: "ZERO BROKERAGE" }),
              (p = !0)),
            n(c) ||
              "Y" != c ||
              0 != o ||
              s.push({ classText: r + "mb-prime", tagText: "MB PRIME" }),
            1 != o ||
              ((n(e.pp) ||
                "I" != e.pp ||
                n(e.isPrimeLocProp) ||
                "Y" != e.isPrimeLocProp ||
                n(e.isPaidUser) ||
                "N" != e.isPaidUser) &&
                "Y" != c) ||
              s.push({ classText: r + "mb-prime", tagText: "MB PRIME" }),
            n(t.isNRIUser) ||
              "true" != t.isNRIUser ||
              n(e.isRera) ||
              "Y" != e.isRera ||
              s.push({ classText: r + "tick", tagText: "RERA Approved" }),
            n(e.isNriPreferred) ||
              s.push({ classText: r + "tick", tagText: "NRI Preferred" }),
            n(e.investorlisting) ||
              "Y" != e.investorlisting ||
              s.push({
                classText: r + "tick",
                tagText: "VALUE FOR INVESTMENT",
              }),
            n(l) ||
              1 != l.elligibleForStrata ||
              s.push({
                classText: r + "tick",
                tagText: "Fractional Investment",
              }),
            (!n(e.commGuru) &&
              "Y" == e.commGuru &&
              !n(e.ctVerifd) &&
              "Y" == e.ctVerifd &&
              "Y" == a) ||
            (!n(e.ctVerifd) &&
              "Y" == e.ctVerifd &&
              "VERIFIED PROPERTY" !== e.tag)
              ? s.push({ classText: r + "tick", tagText: "Verified on Site" })
              : n(e.ctVerifd) ||
                "T" != e.ctVerifd ||
                "VERIFIED PROPERTY" === e.tag ||
                s.push({ classText: r + "tick", tagText: "Verified on Call" }),
            o)
          )
            return (
              n(e.investorlisting) &&
                "Project" == e.pmtSource &&
                null != i &&
                "plot" == i &&
                !n(e.pp) &&
                "B" == e.pp &&
                s.push({ classText: r + "mb-demand", tagText: "In Demand" }),
              n(e.campText1) ||
                s.push({
                  classText: r + "tick",
                  tagText: "".concat(e.campText1),
                }),
              n(e.commGuru) ||
                "Y" != e.commGuru ||
                "commercial" != i ||
                s.push({ classText: r + "tick", tagText: "COMMERCIAL GURU" }),
              n(e.pmtuspDWap) ||
                "N" != a ||
                s.push({
                  classText: r + "tick",
                  tagText: "Exclusive Deal ".concat(e.pmtuspDWap),
                }),
              n(e.tagWap) ||
                s.push({ classText: r + "tick", tagText: "".concat(e.tagWap) }),
              -1 !=
                (c = s.findIndex(function (e) {
                  return e.tagText
                    .toLowerCase()
                    .includes("verified property".toLowerCase());
                })) &&
                (((t = s[c]).tagText = t.tagText.replace(
                  /Verified Property/i,
                  "Verified on Site"
                )),
                (s[c] = t)),
              -1 !=
                (l = s.findIndex(function (e) {
                  return e.tagText
                    .toUpperCase()
                    .includes("MAGICBRICKS EXCLUSIVE".toUpperCase());
                })) &&
                (((o = s[l]).tagText = o.tagText.replace(
                  /MAGICBRICKS EXCLUSIVE/i,
                  "Only on Magicbricks"
                )),
                (s[l] = o)),
              -1 !=
                (c = s.findIndex(function (e) {
                  return e.tagText
                    .toUpperCase()
                    .includes("EXCLUSIVELY ON MAGICBRICKS".toUpperCase());
                })) &&
                (((t = s[c]).tagText = t.tagText.replace(
                  /EXCLUSIVELY ON MAGICBRICKS/i,
                  "Only on Magicbricks"
                )),
                (s[c] = t)),
              null == i ||
                "plot" != i ||
                n(e.appovedAuthC) ||
                s.push({
                  classText: r + "tick-gray",
                  tagText: "".concat(e.appovedAuthC, " Approved"),
                }),
              !n(e.primeBrokerageText) &&
                0 == p &&
                s.length < 2 &&
                s.push({
                  classText: r + "tick",
                  tagText: "50% off on Brokerage",
                }),
              s.filter(function (e, t, a) {
                return (
                  t ===
                  a.findIndex(function (t) {
                    return (
                      t.classText === e.classText && t.tagText === e.tagText
                    );
                  })
                );
              })
            );
          n(e.investorlisting) &&
            "Project" == e.pmtSource &&
            "plot" == i &&
            !n(e.pp) &&
            "B" == e.pp &&
            s.push({ classText: r + "tick", tagText: "In Demand" }),
            "Y" == u &&
              s.push({
                classText: r + "tick",
                tagText: "APP EXCLUSIVE OWNER PROPERTY",
              }),
            n(e.pmtuspD) ||
              "N" != a ||
              s.push({ classText: r + "tick", tagText: "".concat(e.pmtuspD) }),
            n(e.auc) &&
              !n(e.tag) &&
              s.push({ classText: r + "tick", tagText: "".concat(e.tag) }),
            (l = s.findIndex(function (e) {
              return e.tagText
                .toLowerCase()
                .includes("verified property".toLowerCase());
            })),
            -1 != l &&
              (((o = s[l]).tagText = o.tagText.replace(
                /Verified Property/i,
                "Verified on Site"
              )),
              (s[l] = o)),
            (c = s.findIndex(function (e) {
              return e.tagText
                .toUpperCase()
                .includes("MAGICBRICKS EXCLUSIVE".toUpperCase());
            })),
            -1 != c &&
              (((t = s[c]).tagText = t.tagText.replace(
                /MAGICBRICKS EXCLUSIVE/i,
                "Only on Magicbricks"
              )),
              (s[c] = t)),
            (i = s.findIndex(function (e) {
              return e.tagText
                .toUpperCase()
                .includes("EXCLUSIVELY ON MAGICBRICKS".toUpperCase());
            })),
            -1 != i &&
              (((u = s[i]).tagText = u.tagText.replace(
                /EXCLUSIVELY ON MAGICBRICKS/i,
                "Only on Magicbricks"
              )),
              (s[i] = u)),
            "13584" == e.pkgid &&
              "10070" == e.pkg &&
              s.push({ classText: r + "tick", tagText: "FEATURED" }),
            null != e.scProcessed &&
              "Y" == e.scProcessed &&
              n(e.dtrs) &&
              s.push({ classText: r + "tick", tagText: "FEATURED LISTING" }),
            !n(e.primeBrokerageText) &&
              0 == p &&
              s.length < 2 &&
              s.push({
                classText: r + "tick",
                tagText: "50% off on Brokerage",
              });
        }
        return s;
      };
      function n(e) {
        return void 0 === e || null == e || "" === e;
      }
    },
    890: function (e, t, a) {
      "use strict";
      var r = a(0),
        n = a.n(r),
        o = a(305),
        l = a(2),
        i = a(138);
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
      function s(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(a), !0).forEach(function (t) {
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
            : s(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      function p(e) {
        var t = e.appovedAuth,
          a = e.authorityFilter,
          r = e.additionalSearchBeanData,
          o = Object(l.c)();
        return n.a.createElement(
          n.a.Fragment,
          null,
          (null == t || 0 == t.length) &&
            n.a.createElement(i.a, {
              heading: "Select Plots approved by Authorities",
              filterdata: a,
              columModifierClass: "min-width-for-col",
              onSelectionChange: function (e) {
                o({ type: "appovedAuth", data: e }),
                  o({
                    type: "NewAdditionalBeanData",
                    data: u(u({}, r), {
                      lastFilterData: {
                        type: "appovedAuth",
                        data: e,
                        appliedFor: "Floating_Applied",
                        isSelected: null,
                        name: null,
                        prev1: null,
                        prevValue: null,
                        type1: null,
                      },
                    }),
                  });
              },
            })
        );
      }
      var m = a(352),
        d = a(88);
      t.a = function (e) {
        var t,
          a = e.searchBeanData,
          r = e.index,
          l = e.additionalSearchBeanData,
          i = e.floatingFilterMap,
          c = e.resultList;
        e = e.approvedAuthority;
        return null == i || void 0 === (i = i[(r % 20) + ""]) || null == i
          ? n.a.createElement(n.a.Fragment, null)
          : ("Y" !== Object.keys(i)[1] && 30 < r && n.a.Fragment,
            (t = null),
            "Authority" == (i = Object.keys(i)[0]) && (t = Object(m.a)(e)),
            n.a.createElement(
              "div",
              null,
              "Budget" == i &&
                n.a.createElement(o.a, {
                  budgetMin: a.budgetMin,
                  budgetMax: a.budgetMax,
                  length: c.length,
                  index: r,
                  floatingFilterBudgetBuy: d.c,
                  category: a.category,
                  additionalSearchBeanData: l,
                  propType: a.propertyType,
                }),
              "Authority" == i &&
                n.a.createElement(p, {
                  appovedAuth: a.appovedAuth,
                  authorityFilter: t,
                  additionalSearchBeanData: l,
                })
            ));
      };
    },
    91: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return n;
      });
      var r = a(6),
        n = function (e) {
          for (
            var t,
              a = "viewedPropertiesForDetails",
              n = r.a.readCookie(a),
              o = (n =
                "" +
                (n =
                  n && "" != n
                    ? (16 < (i = n.split("|")).length && i.shift(),
                      (null != n && "" != n && -1 != n.indexOf(e)) || i.push(e),
                      i.join())
                    : e)).split(","),
              l = 0;
            l < o.length;
            l++
          )
            0 == l ? (t = o[l]) : (t += o[l]), l < o.length - 1 && (t += "|");
          var i = new Date();
          i.setTime(i.getTime() + 5184e6),
            (e = "; expires=" + i.toGMTString()),
            (document.cookie = a + "=" + t + e + "; path=/; secure;");
        };
    },
  },
]);
