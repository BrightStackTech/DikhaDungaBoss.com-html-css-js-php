/*! For license information please see propertysrpchunk-main~5a9d3704.dabba2d8daa0b8fe63bc.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    141: function (e, t, r) {
      "use strict";
      var n = r(0),
        a = r.n(n);
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            var r;
            if (e)
              return "string" == typeof e
                ? c(e, t)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
                        ? e.constructor.name
                        : r) || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
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
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function i(e) {
        var t = (i = o(Object(n.useState)(""), 2))[0],
          r = i[1],
          c = (i = e.meta).error,
          i = !(!i.touched || !c);
        return (
          Object(n.useEffect)(function () {}),
          Object(n.useEffect)(function () {}, []),
          Object(n.useEffect)(
            function () {
              r(e.className);
            },
            [e, t]
          ),
          a.a.createElement(
            a.a.Fragment,
            null,
            i && a.a.createElement("div", { className: t }, e.errorMessage)
          )
        );
      }
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r,
                  n = arguments[t];
                for (r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      t.a = function (e) {
        var t = e.id,
          r = e.type,
          o = e.label,
          c = e.modifierLabelClass,
          s = e.modifierInputClass,
          u = e.divClassName,
          m = e.divErrorClassName,
          p = e.onError,
          f = e.inputmode,
          d = e.meta.error && e.meta.touched ? "contact-form__error" : "",
          y = e.meta.error && e.meta.touched && m ? m : "";
        m = u && "" !== u ? u : "";
        return (
          u && "" !== u && y && "" !== y
            ? (m = u + " " + y)
            : y && "" !== y && (m = y),
          Object(n.useEffect)(function () {
            for (
              var e = document.querySelectorAll(".contact-form__input"), t = 0;
              t < e.length;
              t++
            )
              0 < e[t].value.length
                ? e[t].parentElement.parentElement.classList.add("inputFocused")
                : e[t].parentElement.parentElement.classList.remove(
                    "inputFocused"
                  );
          }),
          Object(n.useEffect)(
            function () {
              var t;
              e.meta.error && e.meta.touched
                ? (((t = {})[e.input.name] = y), "function" == typeof p && p(t))
                : void 0 === e.meta.error &&
                  e.meta.touched &&
                  "function" == typeof p &&
                  (((t = {})[e.input.name] = ""), p(t));
            },
            [y]
          ),
          a.a.createElement(
            "div",
            { className: m && "" !== m ? m : "" },
            a.a.createElement(
              "input",
              l({}, e.input, {
                type: r,
                id: t,
                name: e.input.name,
                className: "contact-form__input " + s,
                list: e.list,
                autoComplete: "off",
                value: e.input.value,
                inputmode: f,
              })
            ),
            o &&
              a.a.createElement(
                "label",
                { className: "contact-form__label " + c, htmlFor: t },
                o,
                e.handleSubmit
              ),
            a.a.createElement(i, {
              meta: e.meta,
              errorMessage: e.meta.error,
              className: d,
            })
          )
        );
      };
    },
    159: function (e, t, r) {
      "use strict";
      r.d(t, "d", function () {
        return u;
      }),
        r.d(t, "b", function () {
          return m;
        }),
        r.d(t, "c", function () {
          return f;
        }),
        r.d(t, "a", function () {
          return d;
        }),
        r.d(t, "e", function () {
          return y;
        }),
        r.d(t, "f", function () {
          return b;
        }),
        r(0);
      var n = r(14);
      function a(e) {
        return (a =
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
      function o(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return c(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            var r;
            if (e)
              return "string" == typeof e
                ? c(e, t)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
                        ? e.constructor.name
                        : r) || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? c(e, t)
                : void 0;
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function i(e, t) {
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                s(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function s(e, t, r) {
        return (
          (t = (function (e) {
            return (
              (e = (function (e, t) {
                if ("object" !== a(e) || null === e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 === r) return String(e);
                if ("object" !== a((r = r.call(e, "string")))) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              })(e)),
              "symbol" === a(e) ? e : String(e)
            );
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      r(1);
      var u = function (e, t, r, a, o, c, i, s) {
          var u, m, f, d, y;
          o.city &&
            ((u = ""),
            ((f = m = null) == c || (c && 0 == c.length)) &&
            (null == o.psmid || (o.psmid && 0 == o.psmid.length))
              ? "S" == o.category
                ? (u += "topProjects,topLocalities")
                : (u += "topLocalities")
              : c && 0 <= c.length
              ? ((u += "nearByLocalities"), (m = c[c.length - 1]))
              : o.psmid &&
                0 <= o.psmid.length &&
                ((u += "nearByLocalities"), (f = o.psmid.join(","))),
            (c = o.propertyType && o.propertyType.join("_")),
            (y = o.propertyType && o.propertyType.join(",")),
            (d = o.pageNo || "1"),
            (c = {
              dataRequired: u,
              queryString:
                "propertyType_new=" +
                c +
                "&postedSince=-1&city=" +
                o.city +
                "&searchType=1&propertyType=" +
                y +
                "&disWeb=Y&pType=" +
                y +
                "&page=" +
                d +
                "&category=" +
                o.category +
                "&city=" +
                o.city +
                "&rows=20",
              locality: m,
              city: o.city,
              psmid: f,
            }),
            "topProjects,topLocalities" == u
              ? ((c = l(
                  l({}, c),
                  {},
                  { dataRequired: "topLocalities", v2: !0 }
                )),
                n.a.post("/popularlocalitiesandprojects", c).then(function (e) {
                  e && t(p(o.locality, e.data.popularLocality));
                }))
              : n.a.post("/popularlocalitiesandprojects", c).then(function (n) {
                  n &&
                    (t(null),
                    e(null),
                    r(p(o.locality, n.data.popularLocality)));
                }),
            f) &&
            s &&
            ((y = "plot" == o.search ? "PLOT" : ""),
            n.a
              .get(
                "/fetchTopProjectList?ct=" +
                  o.city +
                  "&lt=" +
                  o.locality +
                  "&isConvertedUser=" +
                  !1 +
                  "&row=8&dataFor=" +
                  y +
                  "&psmid=" +
                  o.psmid +
                  "&isNRI=" +
                  i.isNRIUser
              )
              .then(function (e) {
                null !== e.data && a(p(o.psmid, e.data.topProjectDTOList));
              }));
        },
        m = function (e, t) {
          var r;
          return t && e
            ? ((r = {}),
              Object.keys(t).filter(function (n, a) {
                -1 == e.indexOf(n) && (r = l(l({}, r), s({}, n, t[n])));
              }),
              r)
            : null;
        },
        p = function (e, t) {
          var r;
          return t && e
            ? ((r = []),
              Object.keys(t).filter(function (n, a) {
                var o = t[n].id;
                o.includes(",") && (o = o.split(",")[0]),
                  -1 == e.indexOf(o) && r.push(t[n]);
              }),
              r)
            : t;
        },
        f = function (e, t, r) {
          t &&
            n.a.get("/zoneData?city=" + t).then(function (t) {
              null != t &&
                (e(t.data), r) &&
                (document.querySelector("#zone-corridor-data").style.display =
                  "block");
            });
        },
        d = function (e, t, r, n, a) {
          var c, i, u;
          r.propertyType && 0 == r.propertyType.length && a
            ? a(!0)
            : ((a = r[e] || []),
              (c = r.city),
              (u = (u = t.psmid) || t.psmId),
              e && "psmid" == e && !a.includes(u)
                ? (a.push(u),
                  (u = s({}, e, a)),
                  t &&
                    t.id &&
                    t.id.includes(",") &&
                    ((r = r.locality || []),
                    (i = t.id.split(",")),
                    r.includes(i[1]) || r.push(i[1]),
                    (u = l(l({}, u), {}, { locality: r, city: i[2] }))),
                  n({ type: "autosuggest", data: u }))
                : e && "locality" == e && !a.includes(t.id.split(",")[0])
                ? (a.push(t.id.split(",")[0]),
                  (c = t.id.split(",")[1]),
                  n({
                    type: "autosuggest",
                    data: (s((r = {}), e, a), s(r, "city", c), r),
                  }))
                : e &&
                  "recentSearch" == e &&
                  !a.includes(t.id.split(",")[0]) &&
                  ((a = []),
                  (i = t.id.split("-")[0].split(",")),
                  a.push.apply(a, o(i)),
                  (c = t.id.split("-")[1]),
                  s((u = {}), (e = "locality"), a),
                  s(u, "city", c),
                  n({ type: "autosuggest", data: u })));
        },
        y = function (e, t) {
          var r = [],
            n = JSON.parse(localStorage.getItem("rs-data"));
          if (n && 0 !== n.length)
            for (var a = n.length, o = 0; o < a; o++) {
              var c,
                i,
                l = n[o].searchParams;
              l.cityCode == e.city &&
                void 0 !== l.ltCode &&
                null !== l.ltCode &&
                ((c = l.cityCode),
                (i = l.ltCode),
                (l = l.ltName + ", " + l.city),
                r.push({ id: i + "-" + c, name: l }));
            }
          0 < r.length && t(r);
        },
        b = function (e, t) {
          return (
            t.city !== e.city ||
            t.locality !== e.locality ||
            t.psmid !== e.psmid ||
            t.subUrb !== e.subUrb ||
            t.developerNames !== e.developerNames ||
            t.zone !== e.zone ||
            t.zoneNames !== e.zoneNames
          );
        };
    },
    1822: function (e, t, r) {
      "use strict";
      r(0), r(2), r(3), r(74), r(424);
    },
    221: function (e, t, r) {
      "use strict";
      var n = r(0),
        a = r.n(n),
        o = r(2);
      function c(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            var r;
            if (e)
              return "string" == typeof e
                ? i(e, t)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
                        ? e.constructor.name
                        : r) || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? i(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      t.a = function (e) {
        function t(t) {
          return (e.currentValueMin / e.max) * 100;
        }
        function r(t) {
          return 100 - (e.currentValueMax / e.max) * 100;
        }
        function i(t) {
          var r = e.currentValueMin;
          return (
            "budget-buy" == e.budgetType
              ? 9999999 < r
                ? (t = r / 1e7 + " Cr")
                : r == e.min
                ? b(!(t = "Min"))
                : ((t = r / 1e5 + " Lac"), b(!0))
              : "budget-rent" == e.budgetType
              ? 99999 < r
                ? (t = r / 1e5 + " Lac")
                : r == e.min
                ? b(!(t = "Min"))
                : ((t = r), b(!0))
              : (t = r == e.min ? "Min" : r),
            d &&
              ("Min" == t && d.Min
                ? (t = d.Min)
                : 2 == (r = t.split(" ")).length && (t = r[0] + " " + d[r[1]])),
            t
          );
        }
        function l(t) {
          var r = e.currentValueMax;
          return (
            "budget-buy" == e.budgetType
              ? 9999999 < r
                ? r == e.max
                  ? h(!(t = "Max"))
                  : ((t = r / 1e7 + " Cr"), h(!0))
                : (t = r / 1e5 + " Lac")
              : "budget-rent" == e.budgetType
              ? 99999 < r
                ? r == e.max
                  ? h(!(t = "Max"))
                  : ((t = r / 1e5 + " Lac"), h(!0))
                : (t = r)
              : (t = r == e.max ? "Max" : r),
            d &&
              ("Max" == t && d.Max
                ? (t = d.Max)
                : 2 == (r = t.split(" ")).length && (t = r[0] + " " + d[r[1]])),
            t
          );
        }
        function s(t) {
          var n = t.target.value,
            a = (n / e.max) * 100,
            o = 0;
          0 == n && e.callBack("".concat(e.minKayName)),
            n > j - e.diffValue &&
              (e.callBack("".concat(e.minKayName), n),
              e.callBack("".concat(e.maxKayName)),
              C(e.max),
              T(l),
              O(r)),
            n > e.budgetRange.range[e.budgetRange.range.length - 2].value
              ? document
                  .querySelector(".budget-min")
                  .classList.add("z-index-max")
              : document
                  .querySelector(".budget-min")
                  .classList.remove("z-index-max"),
            _(a),
            S(n),
            e.callBackTitle && e.callBackTitle("budgetMin", n),
            "budget-buy" == e.budgetType
              ? 9999999 < n
                ? (o = n / 1e7 + " Cr")
                : n == e.min
                ? b(!(o = "Min"))
                : ((o = n / 1e5 + " Lac"), b(!0))
              : "budget-rent" == e.budgetType
              ? 99999 < n
                ? (o = n / 1e5 + " Lac")
                : n == e.min
                ? b(!(o = "Min"))
                : ((o = n), b(!0))
              : (o = n == e.min ? "Min" : n),
            d &&
              ("Min" == o && d.Min
                ? (o = d.Min)
                : 2 == (a = o.split(" ")).length && (o = a[0] + " " + d[a[1]])),
            k(o),
            "filter-budget__select" == t.target.className &&
              e.currentValueMin != n &&
              (0 == n
                ? e.callBack("".concat(e.minKayName))
                : e.callBack("".concat(e.minKayName), n));
        }
        function u() {
          e.currentValueMin != w && e.callBack("".concat(e.minKayName), w);
        }
        function m(r) {
          var n = r.target.value,
            a = 100 - (n / e.max) * 100,
            o = 0;
          "max" == n
            ? e.callBack("".concat(e.maxKayName))
            : 0 == n
            ? (e.callBack("".concat(e.minKayName)),
              e.callBack("".concat(e.maxKayName), e.budgetRange.range[0].value))
            : (n < e.budgetRange.range[0].value
                ? document
                    .querySelector(".budget-max")
                    .classList.add("z-index-max")
                : document
                    .querySelector(".budget-max")
                    .classList.remove("z-index-max"),
              n - e.diffValue < w &&
                (e.callBack("".concat(e.minKayName)),
                e.callBack("".concat(e.maxKayName), n),
                S(0),
                k(i),
                _(t)),
              O(a),
              C(n),
              e.callBackTitle && e.callBackTitle("budgetMax", n),
              "budget-buy" == e.budgetType
                ? 9999009 < n
                  ? n == e.max
                    ? h(!(o = "Max"))
                    : ((o = n / 1e7 + " Cr"), h(!0))
                  : (o = n / 1e5 + " Lac")
                : "budget-rent" == e.budgetType
                ? 99999 < n
                  ? n == e.max
                    ? h(!(o = "Max"))
                    : ((o = n / 1e5 + " Lac"), h(!0))
                  : (o = n)
                : (o = n == e.max ? "Max" : n),
              d &&
                ("Max" == o && d.Max
                  ? (o = d.Max)
                  : 2 == (a = o.split(" ")).length &&
                    (o = a[0] + " " + d[a[1]])),
              T(o),
              "filter-budget__select" == r.target.className &&
                e.currentValueMax != n &&
                e.callBack("".concat(e.maxKayName), n));
        }
        function p() {
          0 == j
            ? (e.callBack("".concat(e.minKayName)),
              e.callBack("".concat(e.maxKayName), e.budgetRange.range[0].value))
            : e.currentValueMax != j && e.callBack("".concat(e.maxKayName), j);
        }
        var f,
          d = Object(o.d)(function (e) {
            return e.multilingualData;
          }),
          y = (f = c(Object(n.useState)(!0), 2))[0],
          b = f[1],
          v = (f = c(Object(n.useState)(!0), 2))[0],
          h = f[1],
          g = (f = c(Object(n.useState)(t), 2))[0],
          _ = f[1],
          E = (f = c(Object(n.useState)(r), 2))[0],
          O = f[1],
          w = (f = c(Object(n.useState)(e.currentValueMin), 2))[0],
          S = f[1],
          j = (f = c(Object(n.useState)(e.currentValueMax), 2))[0],
          C = f[1],
          N = (f = c(Object(n.useState)(i), 2))[0],
          k = f[1],
          P = (f = c(Object(n.useState)(l), 2))[0],
          T = f[1];
        return (
          Object(n.useEffect)(
            function () {
              S(e.currentValueMin),
                C(e.currentValueMax),
                k(i),
                T(l),
                _(t),
                O(r);
            },
            [e.currentValueMin, e.currentValueMax]
          ),
          a.a.createElement(
            "div",
            { className: "filter__common__component clearfix" },
            a.a.createElement(
              "div",
              { className: "filter-budget" },
              a.a.createElement(
                "div",
                { className: "filter-budget__fieldset" },
                a.a.createElement(
                  "div",
                  { className: "filter-budget__fieldset__min-max min" },
                  a.a.createElement(
                    "select",
                    { className: "filter-budget__select", onChange: s },
                    a.a.createElement(
                      "option",
                      { value: "0" },
                      null != d && d.hasOwnProperty(d.Min) ? d.Min : "Min"
                    ),
                    e.budgetRange &&
                      e.budgetRange.range &&
                      e.budgetRange.range.map(function (t, r) {
                        return "budget-buy" != e.budgetType || t.value <= 5e7
                          ? t.value == e.currentValueMin
                            ? a.a.createElement(
                                "option",
                                { selected: !0, key: r, value: t.value },
                                e.rupeeIcon,
                                " ",
                                t.name
                              )
                            : a.a.createElement(
                                "option",
                                { key: r, value: t.value },
                                e.rupeeIcon,
                                " ",
                                t.name
                              )
                          : void 0;
                      })
                  ),
                  "area" != e.budgetType &&
                    y &&
                    a.a.createElement(
                      "span",
                      { className: "filter-budget__rupee" },
                      "₹"
                    ),
                  a.a.createElement(
                    "div",
                    { className: "filter-budget__fieldset__input" },
                    N
                  )
                ),
                a.a.createElement(
                  "div",
                  { className: "filter-budget__fieldset__to" },
                  null != d && d.hasOwnProperty(d.to) ? d.to : "to"
                ),
                a.a.createElement(
                  "div",
                  { className: "filter-budget__fieldset__min-max max" },
                  a.a.createElement(
                    "select",
                    { className: "filter-budget__select", onChange: m },
                    a.a.createElement(
                      "option",
                      { value: "max" },
                      null != d && d.hasOwnProperty(d.Max) ? d.Max : "Max"
                    ),
                    e.budgetRange &&
                      e.budgetRange.range &&
                      e.budgetRange.range.map(function (t, r) {
                        if ("budget-buy" == e.budgetType) {
                          if (t.value < 5e7 && parseInt(t.value) > parseInt(w))
                            return t.value == e.currentValueMax
                              ? a.a.createElement(
                                  "option",
                                  { selected: !0, key: r, value: t.value },
                                  e.rupeeIcon,
                                  " ",
                                  t.name
                                )
                              : a.a.createElement(
                                  "option",
                                  { key: r, value: t.value },
                                  e.rupeeIcon,
                                  " ",
                                  t.name
                                );
                        } else if (parseInt(t.value) > parseInt(w)) return t.value == e.currentValueMax ? a.a.createElement("option", { selected: !0, key: r, value: t.value }, e.rupeeIcon, " ", t.name) : a.a.createElement("option", { key: r, value: t.value }, e.rupeeIcon, " ", t.name);
                      }),
                    "budget-buy" == e.budgetType &&
                      a.a.createElement(
                        "option",
                        { value: "max" },
                        e.rupeeIcon,
                        null != d && d.hasOwnProperty(d[" 5 Cr+"])
                          ? d[" 5 Cr+"]
                          : " 5 Cr+"
                      )
                  ),
                  "area" != e.budgetType &&
                    v &&
                    a.a.createElement(
                      "span",
                      { className: "filter-budget__rupee" },
                      "₹"
                    ),
                  a.a.createElement(
                    "div",
                    { className: "filter-budget__fieldset__input" },
                    P
                  )
                )
              ),
              a.a.createElement(
                "div",
                { className: "filter-budget__slider-wrap" },
                a.a.createElement("div", {
                  className: "filter-budget__range--filler",
                  style: { left: g + "%", right: E + "%" },
                }),
                a.a.createElement("input", {
                  className: "filter-budget__range budget-min",
                  name: "budgetRangeMin",
                  type: "range",
                  value: w,
                  min: e.min,
                  max: e.max,
                  step: e.diffValue,
                  onChange: s,
                  onMouseUp: u,
                  onTouchEnd: u,
                  onBlur: function (e) {
                    e.target.disabled = !1;
                  },
                }),
                a.a.createElement("input", {
                  className: "filter-budget__range budget-max",
                  name: "budgetRangeMax",
                  type: "range",
                  value: j,
                  min: e.min,
                  max: e.max,
                  step: e.diffValue,
                  onChange: m,
                  onMouseUp: p,
                  onTouchEnd: p,
                  onBlur: function (e) {
                    e.target.disabled = !1;
                  },
                })
              )
            )
          )
        );
      };
    },
    254: function (e, t, r) {
      "use strict";
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
      function a(e, t) {
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                var a, o;
                (a = e),
                  (o = r[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== n(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 === r) return String(e);
                        if ("object" !== n((r = r.call(e, "string")))) return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === n(e) ? e : String(e)
                    );
                  })(t)) in a
                    ? Object.defineProperty(a, t, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (a[t] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      r.d(t, "a", function () {
        return c;
      }),
        r.d(t, "b", function () {
          return l;
        });
      var c = {
          UPDATE_STATE: "UPDATE_STATE",
          UPDATE_STATE_S: "UPDATE_STATE_S",
        },
        i = { R: {}, S: {} },
        l = function () {
          var e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : i,
            t = 1 < arguments.length ? arguments[1] : void 0;
          switch (t.type) {
            case c.UPDATE_STATE:
              return o(o({}, e), {}, { R: o({}, t.payload) });
            case c.UPDATE_STATE_S:
              return o(o({}, e), {}, { S: o({}, t.payload) });
            default:
              return e;
          }
        };
    },
    288: function (e, t, r) {
      "use strict";
      var n = r(0),
        a = r.n(n);
      t.a = function (e) {
        return a.a.createElement(
          "button",
          {
            type: e.type,
            className: "".concat(e.className),
            onClick: e.onClick,
          },
          e.children || "",
          e.label || ""
        );
      };
    },
    299: function (e, t, r) {
      "use strict";
      var n = r(0),
        a = r.n(n),
        o = r(2),
        c = r(424),
        i = r(113),
        l = r(791),
        s = r(792),
        u = r(90),
        m = r(117),
        p = r(5);
      function f(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            var r;
            if (e)
              return "string" == typeof e
                ? d(e, t)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
                        ? e.constructor.name
                        : r) || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? d(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function y(e) {
        var t = Object(o.c)(),
          r = Object(o.d)(function (e) {
            return e.form.contactForm;
          }),
          c = f(Object(n.useState)("sec"), 2),
          i = c[0],
          l = c[1],
          s = (c = f(
            Object(n.useState)("Not received the OTP yet? Try again in "),
            2
          ))[0],
          u = c[1],
          d = (c = f(Object(n.useState)(e.time + " "), 2))[0],
          y = c[1];
        return (
          a.a.useEffect(
            function () {
              (!Object(p.a)(e.time) && e.time.startsWith("00")) ||
              (!Object(p.a)(e.time) && e.time.startsWith("-1"))
                ? (u("Not received the OTP yet? Try again now"), y(""), l(""))
                : (u("Not received the OTP yet? Try again in "),
                  y(e.time + " "),
                  l("sec"));
            },
            [e.time]
          ),
          a.a.createElement(
            "div",
            { className: "contact-form__resend" },
            e.showTryAgainText &&
              a.a.createElement(
                "div",
                { className: "contact-form__resend-head" },
                s,
                " ",
                a.a.createElement("span", null, d),
                " ",
                i
              ),
            a.a.createElement(
              "div",
              {
                className:
                  "contact-form__resend__whatsapp " + e.reSendCodeStatus,
                id: "smsCodeSent",
                onClick: function () {
                  e.onClickReSendCode("disable", !0, !1);
                },
              },
              a.a.createElement(
                "span",
                { className: "contact-form__resend__whatsapp-icon" },
                a.a.createElement(
                  "svg",
                  {
                    width: 24,
                    height: 24,
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  a.a.createElement(
                    "g",
                    { fillRule: "nonzero", fill: "none" },
                    a.a.createElement("path", {
                      d: "M20.52 3.449C18.24 1.245 15.24 0 12.045 0 2.875 0-2.883 9.935 1.696 17.838L0 24l6.335-1.652c2.76 1.491 5.02 1.359 5.716 1.447 10.633 0 15.926-12.864 8.454-20.307l.015-.039z",
                      fill: "#F5F5F5",
                    }),
                    a.a.createElement("path", {
                      d: "m12.067 21.751-.006-.001h-.016c-3.182 0-5.215-1.507-5.415-1.594l-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 0 1-1.516-5.26c0-8.793 10.745-13.19 16.963-6.975 6.203 6.15 1.848 16.875-7.026 16.875z",
                      fill: "#4CAF50",
                    }),
                    a.a.createElement("path", {
                      d: "m17.507 14.307-.01.075c-.3-.15-1.766-.867-2.04-.966-.612-.227-.44-.036-1.616 1.312-.175.195-.35.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.293-.506.32-.578.878-1.634.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.576-.05-.997-.042-1.368.344-1.614 1.774-1.207 3.604.174 5.55 2.714 3.552 4.16 4.206 6.804 5.114.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z",
                      fill: "#FFF",
                    })
                  )
                )
              ),
              a.a.createElement(
                "span",
                { className: "contact-form__resend__whatsapp-text" },
                "Resend on WhatsApp"
              )
            ),
            !e.isNRIContact &&
              a.a.createElement(
                "div",
                {
                  className: "contact-form__resend__sms " + e.reSendCodeStatus,
                },
                a.a.createElement(
                  "a",
                  {
                    href: "javascript:void(0)",
                    onClick: function () {
                      e.onClickReSendCode("disable", !1, !0);
                    },
                  },
                  "Resend on ",
                  e.isNRIContact ? "EMAIL" : "SMS"
                )
              ),
            e.isNRIContact &&
              a.a.createElement(
                "div",
                {
                  className: "contact-form__chat-link " + e.chatLinkStatus,
                  id: "chatOnOtp",
                },
                "Facing Issue?",
                a.a.createElement(
                  "a",
                  {
                    href: "javascript:void(0)",
                    onClick: function () {
                      return Object(m.c)(r, t);
                    },
                  },
                  "Chat with us"
                )
              )
          )
        );
      }
      function b(e) {
        var t = e.otpReciever;
        e = e.onClickAction;
        return a.a.createElement(
          "div",
          { className: "contact-form__otp-text" },
          "Enter 3-digit verification code sent on",
          a.a.createElement(
            "div",
            { className: "contact-form__otp-text-2" },
            t,
            a.a.createElement(
              "span",
              { className: "contact-form__otp-edit", onClick: e },
              "Edit"
            )
          )
        );
      }
      function v(e) {
        var t = e.label,
          r = e.timeLeft;
        e = e.modifierClass;
        return a.a.createElement(
          "div",
          { className: "contact-form__otp-timer " + e },
          a.a.createElement("span", null, t),
          a.a.createElement(
            "span",
            { className: "contact-form__otp-timer-left" },
            r
          ),
          " Sec"
        );
      }
      var h = r(288),
        g = r(141),
        _ = r(58);
      _ = r.n(_);
      function E(e) {
        return (E =
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
      function O(e, t) {
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(Object(r), !0).forEach(function (t) {
                var n, a;
                (n = e),
                  (a = r[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== E(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 === r) return String(e);
                        if ("object" !== E((r = r.call(e, "string")))) return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === E(e) ? e : String(e)
                    );
                  })(t)) in n
                    ? Object.defineProperty(n, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[t] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : O(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function S(e, t, r, n, a) {
        var o = {};
        void 0 !== e &&
          null != e &&
          ((o.sendSMS = e.sendSMS),
          (o.sendEmail = e.sendEmail),
          (o.mobileNumberIsd = e.selectIsd),
          (o.mobileNumber = e.userMobile),
          (o.emailId = e.userEmail),
          (o.userName = e.userName),
          (o.sendWhatsApp = e.sendWhatsApp)),
          (o = w(w({}, o), e)),
          T.post("generateMobileOtp", o)
            .then(function (e) {
              void 0 !== e &&
              null != e &&
              void 0 !== e.status &&
              null != e.status &&
              200 === e.status
                ? n(e.data, t, r)
                : a(e.data);
            })
            .catch(function (e) {
              console.log("Generate otp Error :", e);
            });
      }
      function j(e, t, r) {
        0 === e.hrs && 0 === e.mins && 0 === e.secs
          ? (t([e.hrs, e.mins, e.secs - 1]), r("", !1, !1), I())
          : 0 === e.mins && 0 === e.secs
          ? t([e.hrs - 1, 59, 59])
          : 0 === e.secs
          ? t([e.hrs, e.mins - 1, 59])
          : -1 != e.secs && t([e.hrs, e.mins, e.secs - 1]);
      }
      function C(e, t) {
        e([parseInt(t.hours), parseInt(t.minutes), parseInt(t.seconds)]);
      }
      function N(e) {
        return (
          void 0 === e ||
          null == e ||
          0 === Object.keys(e).length ||
          Object.getPrototypeOf(e) !== Object.prototype
        );
      }
      function k(e) {
        return void 0 === e || null == e || "" === e.trim();
      }
      r(261);
      var P = window.origin + "/mbcontact/",
        T = ((P = "".concat(P).concat("")), _.a.create({ baseURL: P })),
        I = function () {
          document.getElementById("chatOnOtp") &&
            document.getElementById("chatOnOtp").classList.remove("disable");
        };
      function L(e) {
        return (L =
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
      function A() {
        A = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a =
            (d = "function" == typeof Symbol ? Symbol : {}).iterator ||
            "@@iterator",
          o = d.asyncIterator || "@@asyncIterator",
          c = d.toStringTag || "@@toStringTag";
        function i(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
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
          i = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function l(e, t, r, a) {
          var o, c, i, l;
          (t = t && t.prototype instanceof m ? t : m),
            (t = Object.create(t.prototype)),
            (a = new E(a || []));
          return (
            n(t, "_invoke", {
              value:
                ((o = e),
                (c = r),
                (i = a),
                (l = "suspendedStart"),
                function (e, t) {
                  if ("executing" === l)
                    throw new Error("Generator is already running");
                  if ("completed" === l) {
                    if ("throw" === e) throw t;
                    return { value: void 0, done: !0 };
                  }
                  for (i.method = e, i.arg = t; ; ) {
                    var r = i.delegate;
                    if (
                      r &&
                      ((r = (function e(t, r) {
                        var n = r.method,
                          a = t.iterator[n];
                        return void 0 === a
                          ? ((r.delegate = null),
                            ("throw" === n &&
                              t.iterator.return &&
                              ((r.method = "return"),
                              (r.arg = void 0),
                              e(t, r),
                              "throw" === r.method)) ||
                              ("return" !== n &&
                                ((r.method = "throw"),
                                (r.arg = new TypeError(
                                  "The iterator does not provide a '" +
                                    n +
                                    "' method"
                                )))),
                            u)
                          : "throw" === (n = s(a, t.iterator, r.arg)).type
                          ? ((r.method = "throw"),
                            (r.arg = n.arg),
                            (r.delegate = null),
                            u)
                          : (a = n.arg)
                          ? a.done
                            ? ((r[t.resultName] = a.value),
                              (r.next = t.nextLoc),
                              "return" !== r.method &&
                                ((r.method = "next"), (r.arg = void 0)),
                              (r.delegate = null),
                              u)
                            : a
                          : ((r.method = "throw"),
                            (r.arg = new TypeError(
                              "iterator result is not an object"
                            )),
                            (r.delegate = null),
                            u);
                      })(r, i)),
                      r)
                    ) {
                      if (r === u) continue;
                      return r;
                    }
                    if ("next" === i.method) i.sent = i._sent = i.arg;
                    else if ("throw" === i.method) {
                      if ("suspendedStart" === l)
                        throw ((l = "completed"), i.arg);
                      i.dispatchException(i.arg);
                    } else "return" === i.method && i.abrupt("return", i.arg);
                    if (
                      ((l = "executing"), "normal" === (r = s(o, c, i)).type)
                    ) {
                      if (
                        ((l = i.done ? "completed" : "suspendedYield"),
                        r.arg === u)
                      )
                        continue;
                      return { value: r.arg, done: i.done };
                    }
                    "throw" === r.type &&
                      ((l = "completed"),
                      (i.method = "throw"),
                      (i.arg = r.arg));
                  }
                }),
            }),
            t
          );
        }
        function s(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        e.wrap = l;
        var u = {};
        function m() {}
        function p() {}
        function f() {}
        var d,
          y,
          b =
            ((y =
              (y =
                (i((d = {}), a, function () {
                  return this;
                }),
                Object.getPrototypeOf)) && y(y(O([])))) &&
              y !== t &&
              r.call(y, a) &&
              (d = y),
            (f.prototype = m.prototype = Object.create(d)));
        function v(e) {
          ["next", "throw", "return"].forEach(function (t) {
            i(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function h(e, t) {
          var a;
          n(this, "_invoke", {
            value: function (n, o) {
              function c() {
                return new t(function (a, c) {
                  !(function n(a, o, c, i) {
                    var l;
                    if ("throw" !== (a = s(e[a], e, o)).type)
                      return (o = (l = a.arg).value) &&
                        "object" == L(o) &&
                        r.call(o, "__await")
                        ? t.resolve(o.__await).then(
                            function (e) {
                              n("next", e, c, i);
                            },
                            function (e) {
                              n("throw", e, c, i);
                            }
                          )
                        : t.resolve(o).then(
                            function (e) {
                              (l.value = e), c(l);
                            },
                            function (e) {
                              return n("throw", e, c, i);
                            }
                          );
                    i(a.arg);
                  })(n, o, a, c);
                });
              }
              return (a = a ? a.then(c, c) : c());
            },
          });
        }
        function g(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function _(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function E(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(g, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t,
              n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length))
              return (
                (t = -1),
                ((n = function n() {
                  for (; ++t < e.length; )
                    if (r.call(e, t)) return (n.value = e[t]), (n.done = !1), n;
                  return (n.value = void 0), (n.done = !0), n;
                }).next = n)
              );
          }
          return { next: w };
        }
        function w() {
          return { value: void 0, done: !0 };
        }
        return (
          n(b, "constructor", { value: (p.prototype = f), configurable: !0 }),
          n(f, "constructor", { value: p, configurable: !0 }),
          (p.displayName = i(f, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            return (
              !!(e = "function" == typeof e && e.constructor) &&
              (e === p || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), i(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          v(h.prototype),
          i(h.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = h),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var c = new h(l(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? c
              : c.next().then(function (e) {
                  return e.done ? e.value : c.next();
                });
          }),
          v(b),
          i(b, c, "Generator"),
          i(b, a, function () {
            return this;
          }),
          i(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t,
              r = Object(e),
              n = [];
            for (t in r) n.push(t);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var t = n.pop();
                  if (t in r) return (e.value = t), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (E.prototype = {
            constructor: E,
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
                    r.call(this, t) &&
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
              function n(r, n) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; 0 <= a; --a) {
                var o = this.tryEntries[a],
                  c = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var i = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (i && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (i) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
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
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), _(r), u;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                var r,
                  n,
                  a = this.tryEntries[t];
                if (a.tryLoc === e)
                  return (
                    "throw" === (r = a.completion).type && ((n = r.arg), _(a)),
                    n
                  );
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                u
              );
            },
          }),
          e
        );
      }
      function x(e, t, r, n, a, o, c) {
        try {
          var i = e[o](c),
            l = i.value;
        } catch (e) {
          return void r(e);
        }
        i.done ? t(l) : Promise.resolve(l).then(n, a);
      }
      function B(e) {
        return function (t) {
          var r,
            n = t.length > e;
          return 0 == n ? (r = t) : n && (r = t.substr(0, e)), r;
        };
      }
      var F = (function () {
          e = A().mark(function e(t, r) {
            var n, a, o, c;
            return A().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (n = 6),
                      (a = 10),
                      (o = t.userMobile),
                      (c = t.selectIsd) && "50" != c && (a = n),
                      t.userMobile
                        ? (e.next = 9)
                        : ((r.userMobile =
                            "Please enter a " + a + "-digit Mobile number!"),
                          (e.next = 26));
                    break;
                  case 9:
                    if (
                      (((c && (0 == c.length || "50" == c) && o.length < 10) ||
                        (c && "50" != c && o.length < n)) &&
                        (r.userMobile =
                          "Incomplete Mobile number. Please enter " +
                          a +
                          " digits!"),
                      /^[0]/.exec(o))
                    )
                      return (
                        (c && 0 == c.length) || "50" == c
                          ? (r.userMobile =
                              "Enter a valid number starting with 6,7,8,9 only")
                          : (r.userMobile =
                              "Mobile no. should be " + n + " digits."),
                        e.abrupt("return", !1)
                      );
                    e.next = 14;
                    break;
                  case 14:
                    if (null == c || (0 != c.length && "50" != c));
                    else if (/^[^6789]/.exec(o))
                      return (
                        (r.userMobile =
                          "Enter a valid number starting with 6,7,8,9 only"),
                        e.abrupt("return", !1)
                      );
                    e.next = 19;
                    break;
                  case 19:
                    if (M(o) < 2)
                      return (
                        c && c.length,
                        (r.userMobile = "Please enter a valid number."),
                        e.abrupt("return", !1)
                      );
                    e.next = 22;
                    break;
                  case 22:
                    if (/^[0-9]{10}$/.exec(o)) {
                      e.next = 26;
                      break;
                    }
                    return (
                      ((c && 0 == c.length) || "50" == c) &&
                        (r.userMobile =
                          "Please enter a " + a + "-digit Mobile number!"),
                      e.abrupt("return", !1)
                    );
                  case 26:
                  case "end":
                    return e.stop();
                }
            }, e);
          });
          var e,
            t = function () {
              var t = this,
                r = arguments;
              return new Promise(function (n, a) {
                var o = e.apply(t, r);
                function c(e) {
                  x(o, n, a, c, i, "next", e);
                }
                function i(e) {
                  x(o, n, a, c, i, "throw", e);
                }
                c(void 0);
              });
            };
          return function (e, r) {
            return t.apply(this, arguments);
          };
        })(),
        M = function (e) {
          for (var t = new Object(), r = e.length, n = 0; n < r; n++) {
            var a = e.charAt(n);
            t[a] = isNaN(t[a]) ? 1 : t[a] + 1;
          }
          return Object.size(t);
        },
        D =
          ((Object.size = function (e) {
            var t,
              r = 0;
            for (t in e) e.hasOwnProperty(t) && r++;
            return r;
          }),
          r(41)),
        R = r(7),
        q = r(140);
      function U(e) {
        return (U =
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
      function G() {
        G = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a =
            (d = "function" == typeof Symbol ? Symbol : {}).iterator ||
            "@@iterator",
          o = d.asyncIterator || "@@asyncIterator",
          c = d.toStringTag || "@@toStringTag";
        function i(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
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
          i = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function l(e, t, r, a) {
          var o, c, i, l;
          (t = t && t.prototype instanceof m ? t : m),
            (t = Object.create(t.prototype)),
            (a = new E(a || []));
          return (
            n(t, "_invoke", {
              value:
                ((o = e),
                (c = r),
                (i = a),
                (l = "suspendedStart"),
                function (e, t) {
                  if ("executing" === l)
                    throw new Error("Generator is already running");
                  if ("completed" === l) {
                    if ("throw" === e) throw t;
                    return { value: void 0, done: !0 };
                  }
                  for (i.method = e, i.arg = t; ; ) {
                    var r = i.delegate;
                    if (
                      r &&
                      ((r = (function e(t, r) {
                        var n = r.method,
                          a = t.iterator[n];
                        return void 0 === a
                          ? ((r.delegate = null),
                            ("throw" === n &&
                              t.iterator.return &&
                              ((r.method = "return"),
                              (r.arg = void 0),
                              e(t, r),
                              "throw" === r.method)) ||
                              ("return" !== n &&
                                ((r.method = "throw"),
                                (r.arg = new TypeError(
                                  "The iterator does not provide a '" +
                                    n +
                                    "' method"
                                )))),
                            u)
                          : "throw" === (n = s(a, t.iterator, r.arg)).type
                          ? ((r.method = "throw"),
                            (r.arg = n.arg),
                            (r.delegate = null),
                            u)
                          : (a = n.arg)
                          ? a.done
                            ? ((r[t.resultName] = a.value),
                              (r.next = t.nextLoc),
                              "return" !== r.method &&
                                ((r.method = "next"), (r.arg = void 0)),
                              (r.delegate = null),
                              u)
                            : a
                          : ((r.method = "throw"),
                            (r.arg = new TypeError(
                              "iterator result is not an object"
                            )),
                            (r.delegate = null),
                            u);
                      })(r, i)),
                      r)
                    ) {
                      if (r === u) continue;
                      return r;
                    }
                    if ("next" === i.method) i.sent = i._sent = i.arg;
                    else if ("throw" === i.method) {
                      if ("suspendedStart" === l)
                        throw ((l = "completed"), i.arg);
                      i.dispatchException(i.arg);
                    } else "return" === i.method && i.abrupt("return", i.arg);
                    if (
                      ((l = "executing"), "normal" === (r = s(o, c, i)).type)
                    ) {
                      if (
                        ((l = i.done ? "completed" : "suspendedYield"),
                        r.arg === u)
                      )
                        continue;
                      return { value: r.arg, done: i.done };
                    }
                    "throw" === r.type &&
                      ((l = "completed"),
                      (i.method = "throw"),
                      (i.arg = r.arg));
                  }
                }),
            }),
            t
          );
        }
        function s(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        e.wrap = l;
        var u = {};
        function m() {}
        function p() {}
        function f() {}
        var d,
          y,
          b =
            ((y =
              (y =
                (i((d = {}), a, function () {
                  return this;
                }),
                Object.getPrototypeOf)) && y(y(O([])))) &&
              y !== t &&
              r.call(y, a) &&
              (d = y),
            (f.prototype = m.prototype = Object.create(d)));
        function v(e) {
          ["next", "throw", "return"].forEach(function (t) {
            i(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function h(e, t) {
          var a;
          n(this, "_invoke", {
            value: function (n, o) {
              function c() {
                return new t(function (a, c) {
                  !(function n(a, o, c, i) {
                    var l;
                    if ("throw" !== (a = s(e[a], e, o)).type)
                      return (o = (l = a.arg).value) &&
                        "object" == U(o) &&
                        r.call(o, "__await")
                        ? t.resolve(o.__await).then(
                            function (e) {
                              n("next", e, c, i);
                            },
                            function (e) {
                              n("throw", e, c, i);
                            }
                          )
                        : t.resolve(o).then(
                            function (e) {
                              (l.value = e), c(l);
                            },
                            function (e) {
                              return n("throw", e, c, i);
                            }
                          );
                    i(a.arg);
                  })(n, o, a, c);
                });
              }
              return (a = a ? a.then(c, c) : c());
            },
          });
        }
        function g(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function _(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function E(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(g, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t,
              n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length))
              return (
                (t = -1),
                ((n = function n() {
                  for (; ++t < e.length; )
                    if (r.call(e, t)) return (n.value = e[t]), (n.done = !1), n;
                  return (n.value = void 0), (n.done = !0), n;
                }).next = n)
              );
          }
          return { next: w };
        }
        function w() {
          return { value: void 0, done: !0 };
        }
        return (
          n(b, "constructor", { value: (p.prototype = f), configurable: !0 }),
          n(f, "constructor", { value: p, configurable: !0 }),
          (p.displayName = i(f, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            return (
              !!(e = "function" == typeof e && e.constructor) &&
              (e === p || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), i(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          v(h.prototype),
          i(h.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = h),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var c = new h(l(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? c
              : c.next().then(function (e) {
                  return e.done ? e.value : c.next();
                });
          }),
          v(b),
          i(b, c, "Generator"),
          i(b, a, function () {
            return this;
          }),
          i(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t,
              r = Object(e),
              n = [];
            for (t in r) n.push(t);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var t = n.pop();
                  if (t in r) return (e.value = t), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (E.prototype = {
            constructor: E,
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
                    r.call(this, t) &&
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
              function n(r, n) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; 0 <= a; --a) {
                var o = this.tryEntries[a],
                  c = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var i = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (i && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (i) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
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
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), _(r), u;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                var r,
                  n,
                  a = this.tryEntries[t];
                if (a.tryLoc === e)
                  return (
                    "throw" === (r = a.completion).type && ((n = r.arg), _(a)),
                    n
                  );
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                u
              );
            },
          }),
          e
        );
      }
      function Y(e, t, r, n, a, o, c) {
        try {
          var i = e[o](c),
            l = i.value;
        } catch (e) {
          return void r(e);
        }
        i.done ? t(l) : Promise.resolve(l).then(n, a);
      }
      function V(e, t) {
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function W(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? V(Object(r), !0).forEach(function (t) {
                var n, a;
                (n = e),
                  (a = r[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== U(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 === r) return String(e);
                        if ("object" !== U((r = r.call(e, "string")))) return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === U(e) ? e : String(e)
                    );
                  })(t)) in n
                    ? Object.defineProperty(n, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[t] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : V(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function H(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            var r;
            if (e)
              return "string" == typeof e
                ? K(e, t)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
                        ? e.constructor.name
                        : r) || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? K(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function K(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function z(e) {
        return a.a.createElement(
          "div",
          { className: "contact-thankyou__userInfo__rq" },
          a.a.createElement("div", { className: "text-blue" }, e.text),
          a.a.createElement(v, {
            label: "Didn't receive? Resend in: ",
            timeLeft: e.timeLeft,
            modifierClass: "",
          })
        );
      }
      var $ = Object(s.a)({
          form: "OtpForm",
          validate: function (e, t) {
            var r = {};
            return (
              t.setOtpLimitMessage(""),
              e.otp
                ? /^[\d]{3}$/.test(e.otp)
                  ? void 0
                  : ((r.otp = "Please enter 3 digit OTP"), r)
                : ((r.otp = "You must enter OTP"), r)
            );
          },
          onSubmitFail: function (e, t, r, n) {
            Object(D.d)(e, t, n);
          },
          asyncValidate: function (e, t, r, n) {
            return k(r.otpLimitMessage)
              ? Promise.resolve(r.otpLimitMessage).then(
                  function (e) {},
                  function (e) {}
                )
              : Promise.reject({ otp: r.otpLimitMessage });
          },
          enableReinitialize: !0,
          asyncBlurFields: ["otp"],
        })(function (e) {
          var t = { hours: 0, minutes: 0, seconds: 60 },
            r = (w = H(Object(n.useState)("disable"), 2))[0],
            c = w[1],
            s = (w = H(Object(n.useState)("disable"), 2))[0],
            m = w[1],
            p = (w = H(Object(n.useState)(!0), 2))[0],
            f = w[1],
            d = Object(o.c)(),
            v = Object(o.d)(function (e) {
              return e.form.contactForm;
            }),
            _ =
              (Object(o.d)(function (e) {
                return e.userInfoData;
              }),
              Object(o.d)(function (e) {
                return e.contactData;
              })),
            E = (w = H(
              Object(n.useState)(e.mobileIsdVal + "-" + e.mobile),
              2
            ))[0],
            O = w[1],
            w = H(a.a.useState([t.hours, t.minutes, t.seconds]), 2),
            P = (K = H(w[0], 3))[0],
            L = K[1],
            A = K[2],
            x = w[1],
            F = (K = H(
              Object(n.useState)(
                e.isNRIContact ||
                  (void 0 !== v &&
                    null != v &&
                    void 0 !== v.values &&
                    null != v.values &&
                    void 0 !== v.values.selectIsd &&
                    null != v.values.selectIsd &&
                    "50" != v.values.selectIsd)
              ),
              2
            ))[0],
            M =
              ((w = (K[1], H(Object(n.useState)("Verify"), 2)))[0],
              w[1],
              "10026" === e.contactDataGA.pType),
            D =
              (console.log(
                "props contactDataGA pType" +
                  e.contactDataGA.pType +
                  " is coworking " +
                  M
              ),
              Object(o.d)(function (e) {
                return e.shortlists;
              })),
            U = Object(o.d)(function (e) {
              return e.mbPrimeState.isPrimeFreeTrial;
            }),
            V = Object(o.d)(function (e) {
              return e.mbPrimeState.setFreeTrialAfterOtp;
            }),
            K =
              (a.a.useEffect(function () {
                var e = { hrs: P, mins: L, secs: A },
                  t = setInterval(function () {
                    return j(e, x, z);
                  }, 1e3);
                return function () {
                  return clearInterval(t);
                };
              }),
              a.a.useEffect(function () {
                var t;
                console.log("About to check nri"),
                  F
                    ? (console.log("About to change NRI flow"),
                      void 0 !== v &&
                        null != v &&
                        void 0 !== v.values &&
                        null != v.values &&
                        void 0 !== v.values.userEmail &&
                        null != v.values.userEmail &&
                        (console.log("Changed to whatsapp number"),
                        O("WhatsApp no. " + e.mobileIsdVal + "-" + e.mobile)),
                      e.setIsNRIContact(!0),
                      d({
                        type: R.l,
                        payload: W(W({}, _), {}, { isNRIContact: !0 }),
                      }))
                    : (console.log("is not nri"),
                      O(e.mobileIsdVal + "-" + e.mobile),
                      d({
                        type: R.l,
                        payload: W(W({}, _), {}, { isNRIContact: !1 }),
                      })),
                  N(_.gaObject) ||
                    N(_.gaObject.contactotpformopen) ||
                    "" === _.gaObject.contactotpformopen ||
                    (D.isShortList
                      ? ((t = W(
                          W({}, D.shortListGaCommonData),
                          {},
                          { eventCategory: "contactotpformopen" }
                        )),
                        d(e.contactGaAction(t)))
                      : ((t = W(
                          W({}, _.gaObject.contactotpformopen),
                          {},
                          { eventCategory: "contactotpformopen" }
                        )),
                        d(e.contactGaAction(t))));
              }, []),
              a.a.useEffect(
                function () {
                  var t = P,
                    r = L,
                    n = A;
                  "Verify" === e.verifyOtpButtonLabel &&
                    0 == t &&
                    0 == r &&
                    n <= 0 &&
                    (c(""), m(""));
                },
                [e.verifyOtpButtonLabel]
              ),
              (function () {
                t = G().mark(function t(r) {
                  var n, a, o, i;
                  return G().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            (Z(),
                            c("disable"),
                            m("disable"),
                            e.setVerifyOtpButtonLabel("verifying.."),
                            void 0 === v ||
                              null == v ||
                              void 0 === v.values ||
                              null == v.values ||
                              void 0 === v.values.userMobile ||
                              null == v.values.userMobile)
                          ) {
                            t.next = 16;
                            break;
                          }
                          (n =
                            void 0 !== v.values.userConsent &&
                            null != v.values.userConsent &&
                            v.values.userConsent
                              ? "Y"
                              : "N"),
                            (a =
                              void 0 !== v.values.optIn &&
                              null != v.values.optIn &&
                              v.values.optIn
                                ? "Y"
                                : "N"),
                            (o = v.values.userEmail),
                            (i = v.values.userName);
                          try {
                            (i = i && i.replace(/^"(.*)"$/, "$1")),
                              (o = o && o.replace(/^"(.*)"$/, "$1"));
                          } catch (t) {}
                          return (
                            (o = W(
                              W(
                                {},
                                {
                                  mobile: v.values.userMobile,
                                  mobileIsd: v.values.selectIsd,
                                  otp: r.otp,
                                  email: o,
                                  userName: i,
                                  userAcceptance: n,
                                  optIn: a,
                                  whatsAppConsent: v.values.whatsAppConsent,
                                  contactEventFrom:
                                    _.requestBody.contactEventFrom,
                                  propertyId: _.requestBody.propertyId,
                                  advertisers: _.requestBody.advertisers,
                                  contactType: _.contactType,
                                  searchType: _.searchType,
                                  source: _.requestBody.campaignCode,
                                  isPrimeFreeTrial: U,
                                  setFreeTrialAfterOtp: V,
                                }
                              ),
                              {},
                              { userType: v.values.userType }
                            )),
                            (t.next = 14),
                            T.post("verifyMobileOtp", o)
                          );
                        case 14:
                          (i = t.sent), e.onSubmit(r, i, I);
                        case 16:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                });
                var t,
                  r = function () {
                    var e = this,
                      r = arguments;
                    return new Promise(function (n, a) {
                      var o = t.apply(e, r);
                      function c(e) {
                        Y(o, n, a, c, i, "next", e);
                      }
                      function i(e) {
                        Y(o, n, a, c, i, "throw", e);
                      }
                      c(void 0);
                    });
                  };
                return function (e) {
                  return r.apply(this, arguments);
                };
              })()),
            z = function (t, r, n) {
              c(t), m(t);
              t = {
                mobileNumberIsd: v.values.selectIsd,
                mobileNumber: v.values.userMobile,
                emailId: v.values.userEmail,
                userName: v.values.userName,
              };
              var a,
                o = "Error - Resend on Whatsapp";
              r &&
                ((o = "Error - Resend on Whatsapp"),
                M && !N(_.gaObject)
                  ? (q.a.initialize("UA-492553-10"),
                    q.a.event({
                      event: "send",
                      category: "Resend on whatsApp clicked",
                      action:
                        "Coworking SRP | Verify your number | Resend on WhatsApp",
                      label: "OTP sent on WhatsApp",
                      eventName: "Resend on whatsApp clicked",
                    }))
                  : N(_.gaObject) ||
                    N(_.gaObject.contactOtpFormError) ||
                    "" === _.gaObject.contactOtpFormError ||
                    ((a = W(
                      W({}, _.gaObject.contactOtpFormError),
                      {},
                      { eventLabel: o }
                    )),
                    d(e.contactGaAction(a))),
                N(_.gaObject) ||
                  N(_.gaObject.contactOtpFormError) ||
                  "" === _.gaObject.contactOtpFormError ||
                  (D.isShortList
                    ? ((a = W(
                        W({}, D.shortListGaCommonData),
                        {},
                        { eventCategory: "Contact Otp Form", eventLabel: o }
                      )),
                      d(e.contactGaAction(a)))
                    : ((a = W(
                        W({}, _.gaObject.contactOtpFormError),
                        {},
                        { eventLabel: o }
                      )),
                      d(e.contactGaAction(a)))),
                (a = W(
                  W({}, t),
                  {},
                  { sendSMS: n, sendEmail: n, sendWhatsApp: r }
                )),
                d(Object(i.a)("OtpForm")),
                S(a, r, n, $, J)),
                n &&
                  ((o = "Error - Resend on SMS"),
                  N(_.gaObject) ||
                    N(_.gaObject.contactOtpFormError) ||
                    "" === _.gaObject.contactOtpFormError ||
                    (D.isShortList
                      ? ((a = W(
                          W({}, D.shortListGaCommonData),
                          {},
                          { eventCategory: "Contact Otp Form", eventLabel: o }
                        )),
                        d(e.contactGaAction(a)))
                      : ((a = W(
                          W({}, _.gaObject.contactOtpFormError),
                          {},
                          { eventLabel: o }
                        )),
                        d(e.contactGaAction(a)))),
                  (o = W(
                    W({}, t),
                    {},
                    { sendSMS: !F, sendEmail: F, sendWhatsApp: r }
                  )),
                  d(Object(i.a)("OtpForm")),
                  S(o, r, n, $, J));
            },
            $ = function (r, n, a) {
              !N(r) && r.generatedOTPStatus
                ? (C(x, t),
                  z("disable", !1, !1),
                  e.setOtpLimitMessage(""),
                  f(!0),
                  n && O("WhatsApp no. " + e.mobileIsdVal + "-" + e.mobile),
                  a &&
                    O(F ? v.values.userEmail : e.mobileIsdVal + "-" + e.mobile))
                : J(r);
            },
            J = function (r) {
              var n;
              N(r) ||
                r.generatedOTPStatus ||
                (C(x, t),
                z("disable", !1, !1),
                (n = ""),
                (!k(r.errorCode) && "120" == r.errorCode) ||
                (!k(r.errordesc) &&
                  "otp validation failed 1 min limit reached" == r.errordesc)
                  ? (n = "OTP Limit Reached. Please try again after 1 min")
                  : (!k(r.errorCode) && "119" == r.errorCode) ||
                    (!k(r.errordesc) &&
                      "otp validation failed 10 min limit reached" ==
                        r.errordesc)
                  ? (n = "OTP Limit Reached. Please try again after 10 mins")
                  : (!k(r.errorCode) && "118" == r.errorCode) ||
                    (!k(r.errordesc) &&
                      "otp validation failed 60 min limit reached" ==
                        r.errordesc)
                  ? (n = "OTP Limit Reached. Please try again after 60 mins")
                  : (!k(r.errorCode) && "117" == r.errorCode) ||
                    (!k(r.errordesc) &&
                      "otp validation failed 12 hour limit reached" ==
                        r.errordesc)
                  ? (n = "OTP Limit Reached. Please try again after 12 hrs")
                  : ((!k(r.errorCode) && "116" == r.errorCode) ||
                      (!k(r.errordesc) &&
                        "otp validation failed one day limit reached" ==
                          r.errordesc)) &&
                    (n = "OTP Limit Reached. Please try again after 1 day"),
                k(n)) ||
                (f(!1), e.setOtpLimitMessage(n), d(Object(i.b)("OtpForm")));
            },
            Z = function () {
              document.getElementsByClassName("contact-form__error") &&
                document.getElementsByClassName("contact-form__error")[0] &&
                document.getElementsByClassName("contact-form__error")[0]
                  .textContent &&
                0 <
                  document.getElementsByClassName("contact-form__error")[0]
                    .textContent.length &&
                I();
            };
          w = e.isNRI ? "Verify your email" : "Verify your number";
          return a.a.createElement(
            "div",
            {
              className: "contact-form__slide contact-form__slide--otp",
              id: "contact-slide-otp",
              style: { display: "block" },
            },
            a.a.createElement(u.a, { heading: w }),
            a.a.createElement(b, {
              otpReciever: E,
              onClickAction: function () {
                return (
                  (t = "FILL_CONTACT_DETAILS"),
                  (r = "VERIFY_OTP"),
                  e.onEditContactHandler(t, r),
                  void (
                    N(_.gaObject) ||
                    N(_.gaObject.contactOtpFormError) ||
                    "" === _.gaObject.contactOtpFormError ||
                    ((t = "Error - Edit Number"),
                    D.isShortList
                      ? ((r = W(
                          W({}, D.shortListGaCommonData),
                          {},
                          { eventCategory: "Contact Otp Form", eventLabel: t }
                        )),
                        d(e.contactGaAction(r)))
                      : ((r = W(
                          W({}, _.gaObject.contactOtpFormError),
                          {},
                          { eventLabel: t }
                        )),
                        d(e.contactGaAction(r))))
                  )
                );
                var t, r;
              },
            }),
            a.a.createElement(
              "form",
              { onSubmit: e.handleSubmit(K) },
              a.a.createElement(
                "div",
                { className: "contact-form__input-wrap" },
                a.a.createElement(l.a, {
                  name: "otp",
                  type: "text",
                  label: "",
                  divClassName: "contact-form__fieldset",
                  divErrorClassName: "has-error",
                  modifierInputClass: "contact-form__input--otp",
                  component: g.a,
                  onError: function (e) {
                    void 0 !== e && e !== {} && m("");
                  },
                  normalize: B(3),
                  onBlur: Z,
                })
              ),
              a.a.createElement(h.a, {
                label: e.verifyOtpButtonLabel,
                className: "contact-form__btn",
                type: "submit",
              })
            ),
            a.a.createElement(y, {
              time: "".concat(A.toString().padStart(2, "0")),
              reSendCodeStatus: r,
              chatLinkStatus: s,
              isNRIContact: F,
              showTryAgainText: p,
              onClickReSendCode: z,
              isCoworking: M,
            })
          );
        }),
        J = r(9);
      function Z(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            var r;
            if (e)
              return "string" == typeof e
                ? Q(e, t)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
                        ? e.constructor.name
                        : r) || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
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
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function X(e) {
        var t = e.name,
          r = e.linkText,
          n = { hours: 0, minutes: 0, seconds: 20 },
          o = Z(a.a.useState([n.hours, n.minutes, n.seconds]), 2),
          c = Z(o[0], 3),
          i = c[0],
          l = c[1],
          s = c[2],
          u = o[1];
        return (
          a.a.useEffect(
            function () {
              var t, r;
              if (e.recieverDetailRequested)
                return (
                  (t = { hrs: i, mins: l, secs: s }),
                  (r = setInterval(function () {
                    return Object(J.p)(t, u, e.enableResendRecieverDetailsLink);
                  }, 1e3)),
                  function () {
                    return clearInterval(r);
                  }
                );
            },
            [e.recieverDetailRequested, s]
          ),
          a.a.useEffect(
            function () {
              e.recieverDetailRequested && Object(J.m)(u, n);
            },
            [e.recieverDetailRequested]
          ),
          a.a.createElement(
            "div",
            { className: "contact-thankyou__userInfo" },
            a.a.createElement(
              "div",
              { className: "contact-thankyou__userInfo__i" },
              void 0 !== t && null != t ? t.charAt(0) : ""
            ),
            a.a.createElement(
              "div",
              { className: "contact-thankyou__userInfo__col2" },
              a.a.createElement(
                "div",
                { className: "contact-thankyou__userInfo__name" },
                t
              ),
              "Builder" === e.userType &&
                a.a.createElement(
                  "span",
                  { className: "contact-thankyou__userInfo__mobile" },
                  e.builderContactInfos
                ),
              !e.recieverDetailRequested &&
                "Builder" !== e.userType &&
                3 <= e.recieverDetailRequestedCount &&
                (Object(p.c)(e.nonPrimeUserFreeOwnerLimit) ||
                  0 ===
                    e.nonPrimeUserFreeOwnerLimit
                      .nonPrimeUserFreeOwnerLimitUsed ||
                  e.nonPrimeUserFreeOwnerLimit.nonPrimeUserFreeOwnerLimitUsed <=
                    e.nonPrimeUserFreeOwnerLimit
                      .nonPrimeUserFreeOwnerMaxLimit) &&
                a.a.createElement(
                  "span",
                  { className: "contact-thankyou__userInfo__link disable" },
                  r
                ),
              !e.recieverDetailRequested &&
                "Builder" !== e.userType &&
                e.recieverDetailRequestedCount < 3 &&
                (Object(p.c)(e.nonPrimeUserFreeOwnerLimit) ||
                  0 ===
                    e.nonPrimeUserFreeOwnerLimit
                      .nonPrimeUserFreeOwnerLimitUsed ||
                  e.nonPrimeUserFreeOwnerLimit.nonPrimeUserFreeOwnerLimitUsed <=
                    e.nonPrimeUserFreeOwnerLimit
                      .nonPrimeUserFreeOwnerMaxLimit) &&
                a.a.createElement(
                  "span",
                  {
                    className: "contact-thankyou__userInfo__link",
                    onClick: e.onRecieverDetailsClickHandler,
                  },
                  r
                ),
              e.recieverDetailRequested &&
                a.a.createElement(z, {
                  text: "Requested",
                  timeLeft: ""
                    .concat(l.toString().padStart(2, "0"), ":")
                    .concat(s.toString().padStart(2, "0")),
                })
            )
          )
        );
      }
      function ee(e) {
        var t = e.text1,
          r = e.text2;
        return a.a.createElement(
          "div",
          { className: "contact-thankyou__btmInfo" },
          a.a.createElement(
            "div",
            { className: "contact-thankyou__btmInfo__text1" },
            t
          ),
          a.a.createElement(
            "div",
            { className: "contact-thankyou__btmInfo__text2" },
            r
          ),
          a.a.createElement(oe.a, {
            label: "Contact Builder",
            onClick: e.onClick,
            className: "contact-form__btn",
            type: "button",
          })
        );
      }
      function te(e) {
        function t(e, t) {
          e.stopPropagation(),
            r(
              Object(ie.e)({
                event: "event_tracking",
                eventName: "revamp_srp_app_download",
                nonInteraction: !1,
                eventCategory: "revamp srp - App Download Clicked",
                eventAction: "contact Thank You",
                eventLabel: "10X Faster - Get the App",
                eventValue: "",
              })
            ),
            "Android" == t
              ? window.open(
                  "https://play.google.com/store/apps/details?id=com.timesgroup.magicbricks&referrer=utm_source%3Dthank_you%26utm_medium%3Dwap2app%26utm_campaign%3Drevamp_srp"
                )
              : window.open(
                  "https://itunes.apple.com/us/app/magicbricks/id486328406?ls=1&mt=8&referrer=utm_source%3DWAP_Revamp"
                );
        }
        var r = Object(o.c)(),
          c = Object(o.d)(function (e) {
            return e.searchAdditionalDataBean;
          });
        return (
          Object(n.useEffect)(function () {
            r(
              Object(ie.e)({
                event: "event_tracking",
                eventName: "revamp_srp_app_download",
                nonInteraction: !0,
                eventCategory: "revamp srp - App Download Impression",
                eventAction: "contact Thank You",
                eventLabel: "10X Faster - Get the App",
                eventValue: "",
              })
            );
          }, []),
          a.a.createElement(
            "div",
            { className: "contact-app-banner" },
            a.a.createElement(
              "div",
              { className: "contact-app-banner__inner" },
              a.a.createElement(
                "div",
                { className: "contact-app-banner__head" },
                "We’re 10X Faster on our App!"
              ),
              a.a.createElement(
                "div",
                { className: "contact-app-banner__list" },
                a.a.createElement(
                  "div",
                  { className: "contact-app-banner__list__item" },
                  "6000+ Owner Properties Added Daily"
                ),
                a.a.createElement(
                  "div",
                  { className: "contact-app-banner__list__item" },
                  "Get Instant Updates for Best Matches"
                )
              ),
              a.a.createElement(
                "div",
                { className: "contact-app-banner__action-mob" },
                a.a.createElement(oe.a, {
                  label: "Get the App",
                  onClick: function (e) {
                    t(
                      e,
                      Object(ce.t)(c.deviceType) || "ios" !== c.deviceType
                        ? "Android"
                        : "IOS"
                    );
                  },
                  className: "contact-form__btn contact-form__btn--s",
                  type: "button",
                })
              )
            ),
            a.a.createElement(
              "div",
              { className: "contact-app-banner__action-browser" },
              a.a.createElement("a", {
                className: "contact-app-banner__btn-google-play",
                onClick: function (e) {
                  t(e, "Android");
                },
              }),
              a.a.createElement("a", {
                className: "contact-app-banner__btn-app-store",
                onClick: function (e) {
                  t(e, "IOS");
                },
              })
            )
          )
        );
      }
      function re(e) {
        return a.a.createElement(
          a.a.Fragment,
          null,
          e.children &&
            a.a.createElement("div", { className: e.modifierClass }, e.children)
        );
      }
      function ne(e) {
        return a.a.createElement(
          "div",
          { className: "payrent-bnr", style: { display: "block" } },
          a.a.createElement(
            "div",
            { className: "payrent-bnr__inner" },
            a.a.createElement(
              "div",
              { className: "payrent-bnr__content-1" },
              a.a.createElement(
                "span",
                { className: "payrent-bnr__content-1__bold" },
                "ZERO Convenience fee"
              ),
              " on rent payment. Pay rent for ",
              a.a.createElement(
                "span",
                { className: "payrent-bnr__content-1__bold" },
                "FREE!"
              )
            ),
            a.a.createElement(
              "div",
              { className: "payrent-bnr__action" },
              a.a.createElement(
                oe.a,
                {
                  className: "payrent-bnr__action__link",
                  type: "button",
                  onClick: function () {
                    window.open(
                      "https://www.magicbricks.com/propertyservices/pay-property-rent-online.html",
                      "_blank"
                    );
                  },
                },
                "See How It Works   ",
                a.a.createElement("span", { className: "right-arrow" })
              )
            ),
            a.a.createElement(
              "span",
              { className: "payrent-bnr__tnc" },
              "*T&C apply"
            )
          )
        );
      }
      function ae(e) {
        var t = Object(o.c)();
        return a.a.createElement(
          "div",
          {
            href: "javascript:void(0)",
            class: "officeSpaceWrapper",
            onClick: function () {
              t(
                Object(ie.h)({
                  event: "event_tracking",
                  eventName: "calculator_page_load",
                  nonInteraction: !0,
                  eventAction: "source: Agent Details Pop Up",
                  eventValue: "",
                  eventCategory: "calculator page load",
                  eventLabel: "calculator page load",
                })
              ),
                window.open("/commutility/office-space-calculator");
            },
          },
          a.a.createElement(
            "div",
            { class: "officeSpaceWrapper__innerOfficeSpace" },
            a.a.createElement(
              "div",
              { class: "officeSpaceWrapper__heading" },
              "Not sure about how large",
              a.a.createElement("br", null),
              a.a.createElement(
                "span",
                { class: "bold" },
                "office space you need for "
              ),
              a.a.createElement("br", null),
              a.a.createElement("span", { class: "bold" }, "your team?")
            ),
            a.a.createElement(
              "div",
              { class: "officeSpaceWrapper__link" },
              "Office Space ",
              a.a.createElement("br", null),
              "Calculator",
              a.a.createElement("span", { class: "arrowRight" })
            ),
            a.a.createElement("div", {
              class: "officeSpaceWrapper__bannerImgOfficeSpace",
            })
          )
        );
      }
      var oe = r(54),
        ce = r(1),
        ie = r(3),
        le = r(13),
        se = r(25);
      function ue(e) {
        return (ue =
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
      function me(e, t) {
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? me(Object(r), !0).forEach(function (t) {
                var n, a;
                (n = e),
                  (a = r[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== ue(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 === r) return String(e);
                        if ("object" !== ue((r = r.call(e, "string"))))
                          return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === ue(e) ? e : String(e)
                    );
                  })(t)) in n
                    ? Object.defineProperty(n, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[t] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : me(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function fe(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            var r;
            if (e)
              return "string" == typeof e
                ? de(e, t)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
                        ? e.constructor.name
                        : r) || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? de(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function de(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function ye(e) {
        function t(e) {
          (e = pe(
            pe({}, Object(J.g)(!0, e, E, O, g)),
            {},
            {
              nonInteraction: !1,
              eventCategory:
                "WEB" != E.platform
                  ? "MB Prime_Wap Entry Point Click"
                  : "mb prime entry point click",
            }
          )),
            n(Object(ie.e)(e));
        }
        function r(e) {
          e.stopPropagation(), t("LargePrime"), window.open(k, "_blank");
        }
        var n = Object(o.c)(),
          c =
            (e.primeInfo.packageId,
            e.recieverInfos.propId,
            e.recieverInfos.cg,
            e.recieverInfos.propType,
            e.recieverInfos.city,
            Object(J.k)(e.recieverInfos.userType)
              ? "Advertiser"
              : e.recieverInfos.userType),
          i = (N = fe(
            a.a.useState(c + "'s details sent to your email account"),
            2
          ))[0],
          l = N[1],
          s = (N = fe(a.a.useState(e.recieverInfos.onwerName), 2))[0],
          m = N[1],
          p =
            ((c = (N = fe(
              a.a.useState("Get " + c.toLowerCase() + "'s details on SMS"),
              2
            ))[0]),
            N[1]),
          f = (N = fe(a.a.useState(""), 2))[0],
          d = N[1],
          y = (N = fe(a.a.useState(!1), 2))[0],
          b = N[1],
          v = (N = fe(a.a.useState(0), 2))[0],
          h = N[1],
          g = Object(o.d)(function (e) {
            return e.contactData;
          }),
          _ = Object(o.d)(function (e) {
            return e.userInfoData;
          }),
          E = Object(o.d)(function (e) {
            return e.searchAdditionalDataBean;
          }),
          O = Object(o.d)(function (e) {
            return e.searchBean;
          }),
          w = ((N = fe(a.a.useState({}), 2))[0], N[1]),
          S = (N = fe(a.a.useState(!1), 2))[0],
          j = N[1],
          C = Object(o.d)(function (e) {
            return e.shortlists;
          }),
          N = Object(J.k)(E.platform) ? "" : E.platform,
          k =
            "https://www.magicbricks.com/mbprime/primePackages?source=" +
            Object(se.e)(
              "MBPRIME_ContactAccept_Free_Contact",
              N.toLowerCase(),
              "AcceptFreeContact"
            ) +
            "&category=" +
            e.recieverInfos.cg +
            "&ptype=" +
            e.recieverInfos.propType +
            "&cityCnd=" +
            e.recieverInfos.city +
            "&nri=" +
            (e.isNRIContact ? "Y" : "N");
        return (
          a.a.useEffect(function () {
            1 < v &&
              (p(
                3 <= v
                  ? "SMS resent with " + e.recieverInfos.userType + "'s details"
                  : "Resend " + e.recieverInfos.userType + "'s details on SMS"
              ),
              e.isNRIContact) &&
              p(""),
              "Builder" === e.recieverInfos.userType &&
                d(
                  "+" + e.recieverInfos.mobileIsd + "-" + e.recieverInfos.mobile
                );
          }),
          a.a.useEffect(
            function () {
              var t,
                r,
                a = Object(J.k)(e.recieverInfos.userType)
                  ? "Advertiser"
                  : e.recieverInfos.userType;
              !Object(J.l)(e.nonPrimeUserFreeOwnerLimit) &&
              0 !==
                e.nonPrimeUserFreeOwnerLimit.nonPrimeUserFreeOwnerLimitUsed &&
              e.nonPrimeUserFreeOwnerLimit.nonPrimeUserFreeOwnerLimitUsed >
                e.nonPrimeUserFreeOwnerLimit.nonPrimeUserFreeOwnerMaxLimit
                ? l("Call back request sent to Owner")
                : (console.log("isPrimePlusUser", _.isPrimePlusUser),
                  Object(J.k)(_) ||
                  void 0 === _.isPrimePlusUser ||
                  "Y" !== _.isUserLoggedIn ||
                  "Y" !== _.isPrimePlusUser
                    ? l(a + "'s details sent to your email account")
                    : l(
                        "Relationship Manager's details sent to your email account"
                      )),
                m(e.recieverInfos.onwerName),
                "Builder" === e.recieverInfos.userType &&
                  ((t = e.recieverInfos.sid),
                  (r = e.recieverInfos.city),
                  Object(J.k)(t) || Object(J.k)(r) || !t.includes("1600000")
                    ? d(
                        "+" +
                          e.recieverInfos.mobileIsd +
                          "-" +
                          e.recieverInfos.mobile
                      )
                    : d(
                        "2944" == r ||
                          "6146" == r ||
                          "7045" == r ||
                          "2951" == r ||
                          "4320" == r ||
                          "4341" == r ||
                          "2624" == r ||
                          "6403" == r ||
                          "4378" == r ||
                          "4442" == r
                          ? "+91-8800494980"
                          : "+91-9717787976"
                      )),
                Object(J.k)(_) ||
                void 0 === _.isPrimePlusUser ||
                "Y" !== _.isUserLoggedIn ||
                "Y" !== _.isPrimePlusUser
                  ? p("Get " + a.toLowerCase() + "'s details on SMS")
                  : p("Get Relationship Manager's details on SMS"),
                e.isNRIContact && p(""),
                b(!1),
                h(0),
                n(Object(J.o)(e.recieverInfos, w));
            },
            [e.recieverInfos]
          ),
          a.a.useEffect(
            function () {
              (!Object(J.l)(e.builderProperty) &&
                !Object(J.k)(e.builderProperty.isElem) &&
                "N" !== e.builderProperty.isElem) ||
              (!Object(J.l)(g.thankYouBannerToShowMap) &&
                (g.thankYouBannerToShowMap.SMALL_PRIME_BANNER ||
                  g.thankYouBannerToShowMap.LARGE_PRIME_BANNER ||
                  g.thankYouBannerToShowMap.PAY_RENT_BANNER))
                ? j(!1)
                : g.shouldShowAppBanner && j(!0);
            },
            [g.thankYouBannerToShowMap]
          ),
          a.a.createElement(
            "div",
            null,
            a.a.createElement(u.a, { heading: i }),
            a.a.createElement(X, {
              name: s,
              linkText: c,
              userType: e.recieverInfos.userType,
              builderContactInfos: f,
              recieverDetailRequested: y,
              onRecieverDetailsClickHandler: function () {
                var t = {
                    selectIsd: _.selectIsd,
                    userEmail: _.userEmail,
                    userMobile: _.userMobile,
                    userMobileIsd: _.userIsdCode,
                    userName: _.userName,
                    userConsent: _.userConsent,
                    optIn: _.optIn,
                    whatsAppConsent: _.whatsAppConsent,
                  },
                  r = {
                    requestInterface: g.requestInterface,
                    contactType: g.contactType,
                    searchType: g.searchType,
                  };
                Object(J.n)(t, g, _, r),
                  Object(J.l)(g.gaObject) ||
                    Object(J.l)(g.gaObject.thankyougetdetailsonsms) ||
                    "" === g.gaObject.thankyougetdetailsonsms ||
                    ((t = pe(pe({}, g.gaObject.thankyougetdetailsonsms), {})),
                    n(e.contactGaAction(t))),
                  b(!0),
                  h(v + 1);
              },
              enableResendRecieverDetailsLink: function () {
                b(!1), h(v + 1);
              },
              nonPrimeUserFreeOwnerLimit: e.nonPrimeUserFreeOwnerLimit,
              recieverDetailRequestedCount: v,
            }),
            !Object(J.l)(e.builderProperty) &&
              !Object(J.k)(e.builderProperty.isElem) &&
              "Y" === e.builderProperty.isElem &&
              a.a.createElement(ee, {
                onClick: function (t) {
                  return (
                    (r = "Contact Builder"),
                    t.stopPropagation(),
                    Object(J.l)(g.gaObject) ||
                      Object(J.l)(g.gaObject.thankyoucontactBuilderClick) ||
                      "" === g.gaObject.thankyoucontactBuilderClick ||
                      ((o = {
                        event: "event_tracking",
                        eventName: "revamp_srp_thank_contact",
                        nonInteraction: !(a = {
                          event: "event_tracking",
                          eventName: "revamp_srp_thank_contact",
                          nonInteraction: !1,
                          eventCategory: "contactbuttonclicked",
                          eventAction:
                            "revamp srp | propertycontact | propertysearch | thankyou | duplicate",
                          eventLabel: "only",
                          eventValue: "",
                          cd96: r,
                        }),
                        eventCategory: "contactsuccess",
                        eventAction:
                          "revamp srp | propertycontact | propertysearch | thankyou | duplicate",
                        eventLabel: "only",
                        eventValue: "",
                        cd96: r,
                      }),
                      n({
                        type: R.y,
                        payload: pe(
                          pe({}, g),
                          {},
                          {
                            contact_interface: "contact_builder_thank_you",
                            gaObject: pe(
                              pe({}, g.gaObject),
                              {},
                              { thankyoucontactBuilderSuccess: o }
                            ),
                          }
                        ),
                      }),
                      C.isShortList
                        ? ((o = pe(
                            pe({}, C.shortListGaCommonData),
                            {},
                            { eventCategory: "contactsuccess" }
                          )),
                          n(e.contactGaAction(o)))
                        : ((o = pe(
                            pe({}, g.gaObject.thankyoucontactBuilderClick),
                            a
                          )),
                          n(e.contactGaAction(o)))),
                    n(Object(le.d)(t)),
                    void n(
                      Object(le.a)(
                        t,
                        {
                          buttonType: r,
                          contactType: "agent",
                          searchType: 2,
                          propertyId: e.builderProperty.id,
                          advertisers: e.builderProperty.oid,
                          requestInterface: "search_web",
                          isLoginAndInfra: !1,
                          formName: "SRP_TOP_CONTACT",
                          contact_interface: "contact_builder_thank_you",
                          gaObject: g.gaObject,
                        },
                        { id: e.builderProperty.oid }
                      )
                    )
                  );
                  var r, a, o;
                },
                text1: "Want a good deal?",
                text2: "Contact the Builder directly to get one",
              }),
            !Object(J.l)(g.thankYouBannerToShowMap) &&
              g.thankYouBannerToShowMap.SMALL_PRIME_BANNER &&
              (Object(J.k)(_.userPrimeMemberLoggedIn) ||
                "Y" !== _.userPrimeMemberLoggedIn) &&
              a.a.createElement(
                a.a.Fragment,
                null,
                !Object(J.l)(e.recieverInfos) &&
                  !Object(J.k)(e.recieverInfos.isFreeOwnerProperty) &&
                  "Y" === e.recieverInfos.isFreeOwnerProperty &&
                  a.a.createElement(
                    re,
                    { modifierClass: "contact-form__limit__content-unlock" },
                    e.nonPrimeUserFreeOwnerLimit
                      .nonPrimeUserFreeOwnerLimitUsed >
                      e.nonPrimeUserFreeOwnerLimit
                        .nonPrimeUserFreeOwnerMaxLimit &&
                      "Your MB Prime Free Trial pack is exhausted now!",
                    e.nonPrimeUserFreeOwnerLimit
                      .nonPrimeUserFreeOwnerLimitUsed >=
                      e.nonPrimeUserFreeOwnerLimit
                        .nonPrimeUserFreeOwnerLimitStart &&
                      e.nonPrimeUserFreeOwnerLimit
                        .nonPrimeUserFreeOwnerLimitUsed <=
                        e.nonPrimeUserFreeOwnerLimit
                          .nonPrimeUserFreeOwnerMaxLimit &&
                      "You've unlocked Free MB Prime trial with " +
                        e.nonPrimeUserFreeOwnerLimit
                          .nonPrimeUserFreeOwnerMaxLimit +
                        " Owner contacts"
                  ),
                a.a.createElement(
                  re,
                  { modifierClass: "contact-form__limit__upgrade" },
                  a.a.createElement(
                    "span",
                    { className: "contact-form__limit__upgrade__icon" },
                    a.a.createElement("span", { className: "icon-mb-prime" })
                  ),
                  "Get access to more owner contacts",
                  a.a.createElement(
                    "div",
                    null,
                    a.a.createElement(
                      "a",
                      {
                        onClick: function (e) {
                          e.stopPropagation(),
                            t("SmallPrime"),
                            window.open(k, "_blank");
                        },
                        className: "contact-form__limit__upgrade__link",
                      },
                      "Upgrade Now"
                    )
                  )
                )
              ),
            "N" == E.nriUser &&
              !Object(J.l)(g.thankYouBannerToShowMap) &&
              g.thankYouBannerToShowMap.LARGE_PRIME_BANNER &&
              (Object(J.k)(_.userPrimeMemberLoggedIn) ||
                "Y" !== _.userPrimeMemberLoggedIn) &&
              a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(
                  "div",
                  { className: "contact-prime-banner" },
                  a.a.createElement(
                    re,
                    { modifierClass: "contact-prime-banner__head" },
                    "Get exclusive access to Properties by Owners with  ",
                    a.a.createElement("span", { className: "icon-mb-prime" }),
                    "  ",
                    a.a.createElement(
                      "span",
                      { className: "text-mb-prime" },
                      "MB Prime"
                    )
                  ),
                  a.a.createElement(
                    re,
                    { modifierClass: "contact-prime-banner__list" },
                    a.a.createElement(
                      "div",
                      { className: "contact-prime-banner__list__item" },
                      "Contact Owners directly"
                    ),
                    a.a.createElement(
                      "div",
                      { className: "contact-prime-banner__list__item" },
                      "Save Time & Money"
                    ),
                    a.a.createElement(
                      "div",
                      { className: "contact-prime-banner__list__item" },
                      "b" === e.recieverInfos.cg
                        ? "Assured Home Loan Cashback"
                        : "Get FREE Rent Agreement"
                    ),
                    a.a.createElement(
                      "div",
                      { className: "contact-prime-banner__list__other" },
                      "+ other benefits worth upto ₹ 6k"
                    )
                  ),
                  a.a.createElement(oe.a, {
                    onClick: r,
                    label: "View Membership Plans",
                    className: "contact-form__btn contact-form__btn--s",
                    type: "button",
                  })
                )
              ),
            "Y" == E.nriUser &&
              !Object(J.l)(g.thankYouBannerToShowMap) &&
              g.thankYouBannerToShowMap.LARGE_PRIME_BANNER &&
              (Object(J.k)(_.userPrimeMemberLoggedIn) ||
                "Y" !== _.userPrimeMemberLoggedIn) &&
              a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(
                  "div",
                  { className: "contact-prime-banner" },
                  a.a.createElement(
                    re,
                    { modifierClass: "contact-prime-banner__head" },
                    "Get end-to-end Property Search assistance with  ",
                    a.a.createElement("span", { className: "icon-mb-prime" }),
                    "  ",
                    a.a.createElement(
                      "span",
                      { className: "text-mb-prime" },
                      "MB Prime"
                    )
                  ),
                  a.a.createElement(
                    re,
                    { modifierClass: "contact-prime-banner__list" },
                    a.a.createElement(
                      "div",
                      { className: "contact-prime-banner__list__item" },
                      "Dedicated Relationship Manager"
                    ),
                    a.a.createElement(
                      "div",
                      { className: "contact-prime-banner__list__item" },
                      "Shortlisting of Properties for you"
                    ),
                    a.a.createElement(
                      "div",
                      { className: "contact-prime-banner__list__item" },
                      "Making follow-up calls "
                    ),
                    a.a.createElement(
                      "div",
                      { className: "contact-prime-banner__list__other" },
                      "+ other benefits "
                    )
                  ),
                  a.a.createElement(oe.a, {
                    onClick: r,
                    label: "View Membership Plans",
                    className: "contact-form__btn contact-form__btn--s",
                    type: "button",
                  })
                )
              ),
            "R" == O.category && "commercial" == O.search
              ? a.a.createElement(ae, null)
              : !Object(J.l)(g.thankYouBannerToShowMap) &&
                  g.thankYouBannerToShowMap.PAY_RENT_BANNER &&
                  a.a.createElement(ne, null),
            S && a.a.createElement(te, { contactData: g })
          )
        );
      }
      var be = r(6);
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
      function he(e, t) {
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function ge(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? he(Object(r), !0).forEach(function (t) {
                var n, a;
                (n = e),
                  (a = r[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== ve(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 === r) return String(e);
                        if ("object" !== ve((r = r.call(e, "string"))))
                          return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === ve(e) ? e : String(e)
                    );
                  })(t)) in n
                    ? Object.defineProperty(n, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[t] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : he(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function _e(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Ee(e) {
        function t(t, n, a, o) {
          var c, i;
          t.stopPropagation(),
            Object(p.c)(r.gaObject) ||
              Object(p.c)(r.gaObject.thankyoucontactRecommendClick) ||
              "" === r.gaObject.thankyoucontactRecommendClick ||
              ((o = {
                event: "event_tracking",
                eventName: "revamp_srp_thank_contact",
                nonInteraction: !(i = {
                  event: "event_tracking",
                  eventName: "revamp_srp_thank_contact",
                  nonInteraction: !1,
                  eventCategory: "contactbuttonclicked",
                  eventAction:
                    "revamp srp | propertycontact | propertysearch | thankyou | reco | " +
                    o,
                  eventLabel: (c = e.index + 1 + " / " + e.totalSimilarProps),
                  eventValue: "",
                  cd96: n,
                }),
                eventCategory: "contactsuccess",
                eventAction:
                  "revamp srp | propertycontact | propertysearch | thankyou | reco | " +
                  o,
                eventLabel: c,
                eventValue: "",
                cd96: n,
              }),
              u({
                type: R.y,
                payload: ge(
                  ge({}, r),
                  {},
                  {
                    contact_interface: "contact_similar_props_thank_you",
                    gaObject: ge(
                      ge({}, r.gaObject),
                      {},
                      { thankyoucontactRecommendSuccess: o }
                    ),
                  }
                ),
              }),
              m.isShortList
                ? ((c = ge(
                    ge({}, m.shortListGaCommonData),
                    {},
                    { eventCategory: "contactsuccess" }
                  )),
                  u(e.contactGaAction(c)))
                : ((c = ge(
                    ge({}, r.gaObject.thankyoucontactRecommendClick),
                    i
                  )),
                  u(e.contactGaAction(c))),
              u(Object(le.d)(t)),
              (c = ge(
                ge({}, r.gaObject),
                {},
                {
                  thankyoucontactRecommendClick: i,
                  thankyoucontactRecommendSuccess: o,
                }
              )),
              (i = ""),
              (o = be.a.readCookie("trackerCookie")),
              Object(p.a)(o) || (i = o),
              u(
                Object(le.a)(
                  t,
                  {
                    buttonType: n,
                    contactType: "property",
                    searchType: 1,
                    propertyId: e.propCard.id,
                    advertisers: e.propCard.id,
                    requestInterface: "search_web",
                    contactTrackCookie: a,
                    isLoginAndInfra: !1,
                    formName: "SRP_TOP_CONTACT",
                    contact_interface: "contact_similar_props_thank_you",
                    campaignCode: i,
                    gaObject: c,
                  },
                  e.propCard
                )
              ),
              "undefined" != typeof ntrack &&
                null != ntrack &&
                (((o = ntrack.getRawDataObject()).contactType = "Property"),
                (o.actualOwnerId = e.propCard.id),
                (o.trackingEvent = ntrack.trackingEvent.Contact),
                (o.Source = "Web"),
                ntrack.sendRamTrackEvent(o)));
        }
        var r = Object(o.d)(function (e) {
            return e.contactData;
          }),
          c = (i = (function (e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                var r =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                if (null != r) {
                  var n,
                    a,
                    o,
                    c,
                    i = [],
                    l = !0,
                    s = !1;
                  try {
                    if (((o = (r = r.call(e)).next), 0 === t)) {
                      if (Object(r) !== r) return;
                      l = !1;
                    } else
                      for (
                        ;
                        !(l = (n = o.call(r)).done) &&
                        (i.push(n.value), i.length !== t);
                        l = !0
                      );
                  } catch (e) {
                    (s = !0), (a = e);
                  } finally {
                    try {
                      if (
                        !l &&
                        null != r.return &&
                        ((c = r.return()), Object(c) !== c)
                      )
                        return;
                    } finally {
                      if (s) throw a;
                    }
                  }
                  return i;
                }
              })(e, t) ||
              (function (e, t) {
                var r;
                if (e)
                  return "string" == typeof e
                    ? _e(e, t)
                    : "Map" ===
                        (r =
                          "Object" ===
                            (r = Object.prototype.toString
                              .call(e)
                              .slice(8, -1)) && e.constructor
                            ? e.constructor.name
                            : r) || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? _e(e, t)
                    : void 0;
              })(e, t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          })(Object(n.useState)(e.propCard), 2))[0],
          i = (i[1], Object(J.f)(e.propCard)),
          l = Object(J.e)(e.propCard),
          s = Object(J.h)(e.propCard),
          u = Object(o.c)(),
          m = Object(o.d)(function (e) {
            return e.shortlists;
          });
        return a.a.createElement(
          "div",
          { className: "c-similar-properties__card" },
          a.a.createElement(
            "div",
            { className: "c-similar-properties__card__head" },
            "₹ ",
            i
          ),
          a.a.createElement(
            "div",
            { className: "c-similar-properties__card__desc" },
            l
          ),
          a.a.createElement(
            "div",
            { className: "c-similar-properties__card__dt" },
            a.a.createElement(
              "span",
              { className: "c-similar-properties__card__dt-prj" },
              e.propCard.prjname
            ),
            !Object(p.a)(s) &&
              a.a.createElement(
                "span",
                { className: "c-similar-properties__card__dt-poss" },
                s
              )
          ),
          a.a.createElement(
            "div",
            { className: "c-similar-properties__card__action" },
            a.a.createElement(oe.a, {
              label: "Get Phone no.",
              onClick: function (e) {
                return t(
                  e,
                  "Get Phone no.",
                  "AA-MBRecommend-ViewPhone",
                  "secondary"
                );
              },
              className: "c-similar-properties__btn",
              type: "button",
            }),
            a.a.createElement(oe.a, {
              label: "Contact " + c.userType,
              onClick: function (e) {
                return t(
                  e,
                  "Contact " + c.userType,
                  "AA-MBRecommend-Contact",
                  "primary"
                );
              },
              className:
                "c-similar-properties__btn c-similar-properties__btn--red",
              type: "button",
            })
          )
        );
      }
      function Oe(e) {
        var t = e.heading,
          r = e.properties.length;
        return a.a.createElement(
          "div",
          null,
          a.a.createElement(
            "div",
            { className: "c-similar-properties" },
            a.a.createElement(
              "div",
              { className: "c-similar-properties__heading" },
              t
            ),
            e.properties.map(function (t, n) {
              return a.a.createElement(Ee, {
                propCard: t,
                index: n,
                totalSimilarProps: r,
                contactGaAction: e.contactGaAction,
              });
            })
          )
        );
      }
      function we(e) {
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            "div",
            { className: "dwldModal__content" },
            a.a.createElement(
              "div",
              { className: "dwldModal__content--heading" },
              "Callback Request Sent!"
            ),
            a.a.createElement(
              "div",
              { className: "dwldModal__content--getApp" },
              "To Call the Owner directly, Get App now"
            ),
            a.a.createElement(
              "div",
              { className: "dwldModal__content--dwnldlink" },
              "Check your phone for App Download Link"
            ),
            a.a.createElement(
              "div",
              { className: "dwldModal__howWorks" },
              a.a.createElement(
                "div",
                { className: "dwldModal__howWorks__topSec" },
                a.a.createElement(
                  "div",
                  { className: "dwldModal__howWorks__text" },
                  a.a.createElement(
                    "div",
                    { className: "dwldModal__howWorks__text--heading" },
                    "How it works?"
                  ),
                  a.a.createElement(
                    "ul",
                    { className: "dwldModal__howWorks__text--list" },
                    a.a.createElement(
                      "li",
                      { className: "dwldModal__howWorks__text--listVal" },
                      "Use your camera to scan the QR code"
                    ),
                    a.a.createElement(
                      "li",
                      { className: "dwldModal__howWorks__text--listVal" },
                      "Download the app on your phone"
                    ),
                    a.a.createElement(
                      "li",
                      { className: "dwldModal__howWorks__text--listVal" },
                      "Open & view Owner details easily"
                    )
                  )
                ),
                a.a.createElement(
                  "div",
                  { className: "dwldModal__howWorks__qr" },
                  a.a.createElement(
                    "div",
                    { className: "dwldModal__howWorks__qr--cont" },
                    a.a.createElement("div", {
                      className: "dwldModal__howWorks__qr--barCode",
                    })
                  )
                )
              ),
              a.a.createElement(
                "div",
                { className: "dwldModal__btnSec" },
                a.a.createElement("a", {
                  href: "javascript:void(0);",
                  className: "dwldModal__btnSec__googleBtn",
                }),
                a.a.createElement("a", {
                  href: "javascript:void(0);",
                  className: "dwldModal__btnSec__appleBtn",
                })
              )
            )
          ),
          !Object(p.a)(e.tyUrl) &&
            !Object(p.a)(e.showTopMatchesForPrime) &&
            a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement("br", null),
              a.a.createElement(oe.a, {
                onClick: e.showTopMatchesForPrime,
                label: "Show Me Similar Properties",
                className: "contact-form__btn contact-form__btn--white",
                type: "button",
              })
            )
        );
      }
      function Se(e) {
        return (Se =
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
      function je(e, t) {
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function Ce(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? je(Object(r), !0).forEach(function (t) {
                var n, a;
                (n = e),
                  (a = r[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== Se(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 === r) return String(e);
                        if ("object" !== Se((r = r.call(e, "string"))))
                          return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === Se(e) ? e : String(e)
                    );
                  })(t)) in n
                    ? Object.defineProperty(n, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[t] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : je(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function Ne(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            var r;
            if (e)
              return "string" == typeof e
                ? ke(e, t)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
                        ? e.constructor.name
                        : r) || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? ke(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ke(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Pe(e) {
        var t = (s = Ne(a.a.useState([]), 2))[0],
          r = s[1],
          c = (s = Ne(a.a.useState({}), 2))[0],
          i = s[1],
          l = Object(o.d)(function (e) {
            return e.contactData;
          }),
          s =
            (Object(o.d)(function (e) {
              return e.searchAdditionalDataBean;
            }),
            Object(o.d)(function (e) {
              return e.userInfoData;
            })),
          u = Object(o.c)(),
          m = Object(J.k)(
            e.nonPrimeUserFreeOwnerLimit.nonPrimeUserFreeOwnerLimitUsed
          )
            ? 0
            : e.nonPrimeUserFreeOwnerLimit.nonPrimeUserFreeOwnerLimitUsed,
          p = Object(J.k)(
            e.nonPrimeUserFreeOwnerLimit.nonPrimeUserFreeOwnerMaxLimit
          )
            ? 1
            : e.nonPrimeUserFreeOwnerLimit.nonPrimeUserFreeOwnerMaxLimit,
          f =
            (Object(n.useEffect)(
              function () {
                var t = l.requestBody.propertyId,
                  r = l.formName;
                t = {
                  propertyId: t,
                  propertyToShow: "A",
                  cplAchievement: "110",
                  noOfProperties: "8",
                  removeProps: "",
                };
                Object(J.c)(t, f),
                  (!Object(J.k)(r) && "PHOTO_SIDE_CONTACT_STICKY" == r) ||
                    Object(J.d)(t, f),
                  N(l.gaObject) ||
                    N(l.gaObject.thankyoupageLoad) ||
                    "" === l.gaObject.thankyoupageLoad ||
                    ((r = Ce(
                      Ce({}, l.gaObject.thankyoupageLoad),
                      {},
                      { eventCategory: "revamp srp - thank you page" }
                    )),
                    u(e.contactGaAction(r)));
              },
              [l.requestBody.propertyId]
            ),
            Object(n.useEffect)(
              function () {
                Array.isArray(t) && t.length <= 0
                  ? (document
                      .getElementById("contact-thankyou")
                      .classList.remove("contact-form__inner--816"),
                    document
                      .getElementById("contact-thankyou")
                      .classList.add("contact-form__inner--392"))
                  : Array.isArray(t) &&
                    0 < t.length &&
                    (document
                      .getElementById("contact-thankyou")
                      .classList.remove("contact-form__inner--392"),
                    document
                      .getElementById("contact-thankyou")
                      .classList.add("contact-form__inner--816"));
              },
              [t]
            ),
            function (e) {
              void 0 !== e &&
                null != e &&
                void 0 !== e.similarProperties &&
                null != e.similarProperties &&
                r(e.similarProperties),
                N(e) ||
                  N(e.builderProperty) ||
                  Object(J.k)(e.builderProperty.isElem) ||
                  "Y" !== e.builderProperty.isElem ||
                  i(e.builderProperty);
            });
        return a.a.createElement(
          "div",
          {
            className:
              "contact-form__inner contact-form__inner--392 contact-thankyou",
            style: { display: "block" },
            id: "contact-thankyou",
          },
          a.a.createElement(
            "div",
            { className: "contact-thankyou__flex" },
            a.a.createElement(
              "div",
              { className: "contact-thankyou__left" },
              (Object(J.k)(s.userPrimeMemberLoggedIn) ||
                "N" == s.userPrimeMemberLoggedIn) &&
                "Y" == e.recieverInfos.isFreeOwnerProperty &&
                m <= p
                ? a.a.createElement(we, {
                    tyUrl: e.tyUrl,
                    editTy: e.editTy,
                    showTopMatchesForPrime: e.showTopMatchesForPrime,
                  })
                : a.a.createElement(ye, {
                    primeInfo: e.primeInfo,
                    builderProperty: c,
                    recieverInfos: e.recieverInfos,
                    nonPrimeUserFreeOwnerLimit: e.nonPrimeUserFreeOwnerLimit,
                    contactGaAction: e.contactGaAction,
                    isNRIContact: e.isNRIContact,
                  })
            ),
            Array.isArray(t) &&
              0 < t.length &&
              a.a.createElement(
                "div",
                { className: "contact-thankyou__right" },
                a.a.createElement(Oe, {
                  heading: "Don't miss out on these properties",
                  properties: t,
                  contactGaAction: e.contactGaAction,
                })
              )
          )
        );
      }
      var Te = r(340);
      function Ie(e) {
        return (Ie =
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
      function Le(e, t) {
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function Ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Le(Object(r), !0).forEach(function (t) {
                var n, a;
                (n = e),
                  (a = r[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== Ie(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 === r) return String(e);
                        if ("object" !== Ie((r = r.call(e, "string"))))
                          return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === Ie(e) ? e : String(e)
                    );
                  })(t)) in n
                    ? Object.defineProperty(n, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[t] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Le(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function xe(e) {
        var t = Object(o.c)(),
          r = Object(o.d)(function (e) {
            return e.contactData;
          }),
          n = Object(o.d)(function (e) {
            return e.shortlists;
          });
        return a.a.createElement(
          "div",
          null,
          a.a.createElement(
            "div",
            { className: "contact-form__disclaimer" },
            "I Agree to MagicBricks' ",
            a.a.createElement(
              "a",
              {
                href: !0,
                className: "contact-form__link",
                onClick: function (a) {
                  var o;
                  a.stopPropagation(),
                    Object(ce.v)(r.gaObject) ||
                      Object(ce.v)(r.gaObject.contactInfoFormError) ||
                      "" === r.gaObject.contactInfoFormError ||
                      ((a = "Error - Terms of service link clicked"),
                      n.isShortList
                        ? ((o = Ae(
                            Ae({}, n.shortListGaCommonData),
                            {},
                            {
                              eventCategory: "Contact Info Form",
                              eventLabel: a,
                            }
                          )),
                          t(e.contactGaAction(o)))
                        : ((o = Ae(
                            Ae({}, r.gaObject.contactInfoFormError),
                            {},
                            { eventLabel: a }
                          )),
                          t(e.contactGaAction(o)))),
                    window.open(
                      "https://property.magicbricks.com/terms/terms.html"
                    );
                },
              },
              "Terms of Use"
            )
          )
        );
      }
      var Be = r(343),
        Fe = r(426);
      function Me(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function De(e) {
        var t = (o = (function (e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                var r =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                if (null != r) {
                  var n,
                    a,
                    o,
                    c,
                    i = [],
                    l = !0,
                    s = !1;
                  try {
                    if (((o = (r = r.call(e)).next), 0 === t)) {
                      if (Object(r) !== r) return;
                      l = !1;
                    } else
                      for (
                        ;
                        !(l = (n = o.call(r)).done) &&
                        (i.push(n.value), i.length !== t);
                        l = !0
                      );
                  } catch (e) {
                    (s = !0), (a = e);
                  } finally {
                    try {
                      if (
                        !l &&
                        null != r.return &&
                        ((c = r.return()), Object(c) !== c)
                      )
                        return;
                    } finally {
                      if (s) throw a;
                    }
                  }
                  return i;
                }
              })(e, t) ||
              (function (e, t) {
                var r;
                if (e)
                  return "string" == typeof e
                    ? Me(e, t)
                    : "Map" ===
                        (r =
                          "Object" ===
                            (r = Object.prototype.toString
                              .call(e)
                              .slice(8, -1)) && e.constructor
                            ? e.constructor.name
                            : r) || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? Me(e, t)
                    : void 0;
              })(e, t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          })(Object(n.useState)(""), 2))[0],
          r = o[1],
          o = !!e.meta.error;
        return (
          Object(n.useEffect)(function () {}),
          Object(n.useEffect)(function () {}, []),
          Object(n.useEffect)(
            function () {
              r(e.className);
            },
            [e, t]
          ),
          a.a.createElement(
            a.a.Fragment,
            null,
            o && a.a.createElement("div", { className: t }, e.errorMessage)
          )
        );
      }
      function Re() {
        return (Re = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r,
                  n = arguments[t];
                for (r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function qe(e) {
        var t = e.meta.error ? "contact-form__error" : "",
          r = e.id,
          o = e.type,
          c = e.label,
          i = e.name,
          l = e.modifierLabelClass,
          s = e.modifierInputClass,
          u = (e.isChecked, e.divClassName),
          m = e.divErrorClassName,
          p = e.onError,
          f = e.meta.error && m ? m : "";
        m = u && "" !== u ? u : "";
        return (
          u && "" !== u && f && "" !== f
            ? (m = u + " " + f)
            : f && "" !== f && (m = f),
          Object(n.useEffect)(
            function () {
              var t;
              e.meta.error
                ? (((t = {})[e.input.name] = f), "function" == typeof p && p(t))
                : void 0 === e.meta.error &&
                  "function" == typeof p &&
                  (((t = {})[e.input.name] = ""), p(t));
            },
            [f]
          ),
          a.a.createElement(
            "div",
            { className: m && "" !== m ? m : "" },
            a.a.createElement(
              "input",
              Re({}, e.input, {
                type: o,
                className: "contact-form__checkbox__input " + s,
                id: r,
                name: i,
                autoComplete: "off",
                defaultChecked: e.defaultChecked,
              })
            ),
            a.a.createElement(
              "label",
              { className: "contact-form__checkbox__label " + l, htmlFor: r },
              c,
              e.children
            ),
            a.a.createElement(De, {
              meta: e.meta,
              errorMessage: e.meta.error,
              className: t,
            })
          )
        );
      }
      function Ue(e) {
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            "datalist",
            { id: e.listId },
            !Object(p.b)(e.list) &&
              0 < e.list.length &&
              e.list.map(function (e, t) {
                return a.a.createElement("option", { value: e });
              })
          )
        );
      }
      function Ge(e) {
        var t = e.name,
          r = e.mobile;
        e = e.modifierClass;
        return a.a.createElement(
          a.a.Fragment,
          null,
          null != t &&
            null != r &&
            a.a.createElement(
              "div",
              { className: "contact-thankyou__userInfo " + e },
              a.a.createElement(
                "div",
                { className: "contact-thankyou__userInfo__i" },
                void 0 !== t && null != t ? t.charAt(0) : ""
              ),
              a.a.createElement(
                "div",
                { className: "contact-thankyou__userInfo__col2" },
                a.a.createElement(
                  "div",
                  { className: "contact-thankyou__userInfo__name" },
                  t
                ),
                a.a.createElement(
                  "div",
                  { className: "contact-thankyou__userInfo__mobile" },
                  r
                )
              )
            )
        );
      }
      function Ye(e) {
        var t = e.imagePath,
          r = e.projectName,
          n = e.localityName,
          o = e.bhkProp,
          c = e.price,
          i = e.modifierClass;
        return (
          e.onwards,
          a.a.createElement(
            "div",
            { className: "contact-form__prjInfo " + i },
            a.a.createElement(
              "div",
              { className: "contact-form__prjInfo__fig" },
              null != t
                ? a.a.createElement("img", {
                    src: t,
                    className: "contact-form__prjInfo__fig--graphic",
                    decoding: "async",
                  })
                : a.a.createElement(
                    a.a.Fragment,
                    null,
                    a.a.createElement(
                      "div",
                      { className: "contact-form__prjInfo__no-image" },
                      a.a.createElement(
                        "div",
                        { className: "contact-form__prjInfo__no-image__body" },
                        a.a.createElement("span", {
                          className: "contact-form__prjInfo__no-image--ico",
                        }),
                        a.a.createElement(
                          "div",
                          {
                            className: "contact-form__prjInfo__no-image--text",
                          },
                          "No Image Available"
                        )
                      )
                    )
                  )
            ),
            a.a.createElement(
              "div",
              { className: "contact-form__prjInfo__name" },
              r
            ),
            a.a.createElement(
              "div",
              { className: "contact-form__prjInfo__loc" },
              n
            ),
            a.a.createElement(
              "div",
              { className: "contact-form__prjInfo__content" },
              a.a.createElement(
                "div",
                { className: "contact-form__prjInfo__bhk" },
                o
              ),
              a.a.createElement(
                "div",
                { className: "contact-form__prjInfo__price" },
                a.a.createElement("span", null, " ", Ve()("&#8377;"), " ", c),
                " ",
                e.onwards || ""
              )
            )
          )
        );
      }
      _ = r(22);
      var Ve = r.n(_);
      function We(e) {
        return (We =
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
      function He() {
        He = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a =
            (d = "function" == typeof Symbol ? Symbol : {}).iterator ||
            "@@iterator",
          o = d.asyncIterator || "@@asyncIterator",
          c = d.toStringTag || "@@toStringTag";
        function i(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
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
          i = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function l(e, t, r, a) {
          var o, c, i, l;
          (t = t && t.prototype instanceof m ? t : m),
            (t = Object.create(t.prototype)),
            (a = new E(a || []));
          return (
            n(t, "_invoke", {
              value:
                ((o = e),
                (c = r),
                (i = a),
                (l = "suspendedStart"),
                function (e, t) {
                  if ("executing" === l)
                    throw new Error("Generator is already running");
                  if ("completed" === l) {
                    if ("throw" === e) throw t;
                    return { value: void 0, done: !0 };
                  }
                  for (i.method = e, i.arg = t; ; ) {
                    var r = i.delegate;
                    if (
                      r &&
                      ((r = (function e(t, r) {
                        var n = r.method,
                          a = t.iterator[n];
                        return void 0 === a
                          ? ((r.delegate = null),
                            ("throw" === n &&
                              t.iterator.return &&
                              ((r.method = "return"),
                              (r.arg = void 0),
                              e(t, r),
                              "throw" === r.method)) ||
                              ("return" !== n &&
                                ((r.method = "throw"),
                                (r.arg = new TypeError(
                                  "The iterator does not provide a '" +
                                    n +
                                    "' method"
                                )))),
                            u)
                          : "throw" === (n = s(a, t.iterator, r.arg)).type
                          ? ((r.method = "throw"),
                            (r.arg = n.arg),
                            (r.delegate = null),
                            u)
                          : (a = n.arg)
                          ? a.done
                            ? ((r[t.resultName] = a.value),
                              (r.next = t.nextLoc),
                              "return" !== r.method &&
                                ((r.method = "next"), (r.arg = void 0)),
                              (r.delegate = null),
                              u)
                            : a
                          : ((r.method = "throw"),
                            (r.arg = new TypeError(
                              "iterator result is not an object"
                            )),
                            (r.delegate = null),
                            u);
                      })(r, i)),
                      r)
                    ) {
                      if (r === u) continue;
                      return r;
                    }
                    if ("next" === i.method) i.sent = i._sent = i.arg;
                    else if ("throw" === i.method) {
                      if ("suspendedStart" === l)
                        throw ((l = "completed"), i.arg);
                      i.dispatchException(i.arg);
                    } else "return" === i.method && i.abrupt("return", i.arg);
                    if (
                      ((l = "executing"), "normal" === (r = s(o, c, i)).type)
                    ) {
                      if (
                        ((l = i.done ? "completed" : "suspendedYield"),
                        r.arg === u)
                      )
                        continue;
                      return { value: r.arg, done: i.done };
                    }
                    "throw" === r.type &&
                      ((l = "completed"),
                      (i.method = "throw"),
                      (i.arg = r.arg));
                  }
                }),
            }),
            t
          );
        }
        function s(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        e.wrap = l;
        var u = {};
        function m() {}
        function p() {}
        function f() {}
        var d,
          y,
          b =
            ((y =
              (y =
                (i((d = {}), a, function () {
                  return this;
                }),
                Object.getPrototypeOf)) && y(y(O([])))) &&
              y !== t &&
              r.call(y, a) &&
              (d = y),
            (f.prototype = m.prototype = Object.create(d)));
        function v(e) {
          ["next", "throw", "return"].forEach(function (t) {
            i(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function h(e, t) {
          var a;
          n(this, "_invoke", {
            value: function (n, o) {
              function c() {
                return new t(function (a, c) {
                  !(function n(a, o, c, i) {
                    var l;
                    if ("throw" !== (a = s(e[a], e, o)).type)
                      return (o = (l = a.arg).value) &&
                        "object" == We(o) &&
                        r.call(o, "__await")
                        ? t.resolve(o.__await).then(
                            function (e) {
                              n("next", e, c, i);
                            },
                            function (e) {
                              n("throw", e, c, i);
                            }
                          )
                        : t.resolve(o).then(
                            function (e) {
                              (l.value = e), c(l);
                            },
                            function (e) {
                              return n("throw", e, c, i);
                            }
                          );
                    i(a.arg);
                  })(n, o, a, c);
                });
              }
              return (a = a ? a.then(c, c) : c());
            },
          });
        }
        function g(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function _(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function E(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(g, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t,
              n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length))
              return (
                (t = -1),
                ((n = function n() {
                  for (; ++t < e.length; )
                    if (r.call(e, t)) return (n.value = e[t]), (n.done = !1), n;
                  return (n.value = void 0), (n.done = !0), n;
                }).next = n)
              );
          }
          return { next: w };
        }
        function w() {
          return { value: void 0, done: !0 };
        }
        return (
          n(b, "constructor", { value: (p.prototype = f), configurable: !0 }),
          n(f, "constructor", { value: p, configurable: !0 }),
          (p.displayName = i(f, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            return (
              !!(e = "function" == typeof e && e.constructor) &&
              (e === p || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), i(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          v(h.prototype),
          i(h.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = h),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var c = new h(l(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? c
              : c.next().then(function (e) {
                  return e.done ? e.value : c.next();
                });
          }),
          v(b),
          i(b, c, "Generator"),
          i(b, a, function () {
            return this;
          }),
          i(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t,
              r = Object(e),
              n = [];
            for (t in r) n.push(t);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var t = n.pop();
                  if (t in r) return (e.value = t), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (E.prototype = {
            constructor: E,
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
                    r.call(this, t) &&
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
              function n(r, n) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; 0 <= a; --a) {
                var o = this.tryEntries[a],
                  c = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var i = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (i && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (i) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
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
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), _(r), u;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                var r,
                  n,
                  a = this.tryEntries[t];
                if (a.tryLoc === e)
                  return (
                    "throw" === (r = a.completion).type && ((n = r.arg), _(a)),
                    n
                  );
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                u
              );
            },
          }),
          e
        );
      }
      function Ke(e, t, r, n, a, o, c) {
        try {
          var i = e[o](c),
            l = i.value;
        } catch (e) {
          return void r(e);
        }
        i.done ? t(l) : Promise.resolve(l).then(n, a);
      }
      function ze(e, t) {
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function $e(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ze(Object(r), !0).forEach(function (t) {
                var n, a;
                (n = e),
                  (a = r[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== We(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 === r) return String(e);
                        if ("object" !== We((r = r.call(e, "string"))))
                          return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === We(e) ? e : String(e)
                    );
                  })(t)) in n
                    ? Object.defineProperty(n, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[t] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ze(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function Je(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            var r;
            if (e)
              return "string" == typeof e
                ? Ze(e, t)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
                        ? e.constructor.name
                        : r) || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? Ze(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Ze(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Qe(e) {
        return a.a.createElement(
          "div",
          { className: "contact-form__limit" },
          a.a.createElement(
            u.a,
            { heading: "" },
            a.a.createElement(
              "div",
              { className: "contact-form__heading--prime" },
              a.a.createElement("span", { className: "oops-text" }, "Oops!"),
              "Your Contact Limit is Over"
            )
          ),
          a.a.createElement(
            re,
            { modifierClass: "contact-form__limit-content1" },
            "To make more contacts, download the app now"
          ),
          a.a.createElement(te, null)
        );
      }
      var Xe = Object(s.a)({
        form: "contactForm",
        validate: function (e) {
          var t,
            r,
            n,
            a,
            o = {};
          return (
            (r = o),
            (a =
              "Invalid name entered! \n Use only alphabets & length between 3-30 characters."),
            (t = e).userName
              ? t.userName && t.userName.length < 3
                ? ((r.userName = a),
                  (n = Object(p.d)(t.userName)),
                  /^[a-zA-Z ]*$/.exec(n) || (r.userName = a))
                : (t.userName && 30 < t.userName.length) ||
                  ((n = Object(p.d)(t.userName)), !/^[a-zA-Z ]*$/.exec(n))
                ? (r.userName = a)
                : ((t = n[0]),
                  new Array(n.length + 1).join(t) == n &&
                    (r.userName =
                      "Entered name is blocked! Please use another"))
              : (r.userName =
                  "Name field can't be left blank. Please enter your name!"),
            (function (e, t) {
              if (e.userEmail)
                if (e.userEmail && 100 < e.userEmail.length)
                  t.userEmail =
                    "Email ID length exceeded! Please use upto 100 char only";
                else {
                  if (
                    !(
                      1 <
                        Object(p.d)(e.userEmail)
                          .toLowerCase()
                          .indexOf("@timesjobs.com") ||
                      1 <
                        Object(p.d)(e.userEmail)
                          .toLowerCase()
                          .indexOf("@timesjob.com")
                    )
                  ) {
                    if (
                      (2 <
                        (e = Object(p.d)(e.userEmail).toLowerCase()).length &&
                        '"' == e[0] &&
                        '"' == e[e.length - 1] &&
                        (e = e.substring(1, e.length - 1)),
                      !/^[a-zA-Z0-9]/.exec(e))
                    )
                      return (t.userEmail = "Please enter valid Email Id.");
                    if (/^[a-zA-Z0-9]*$/.exec(e))
                      return (t.userEmail = "Please enter valid Email Id.");
                    if (!/.*^[a-zA-Z0-9_.@-]*$.*/.exec(e))
                      return (t.userEmail = "Please enter valid Email Id.");
                    var r =
                      1 < e.split("@").length
                        ? e.split("@")[1].split(".com")
                        : e.split("@");
                    if (/.*([\._]){2}.*/.exec(e) || 2 < r.length)
                      return (t.userEmail = "Please enter valid Email Id.");
                    if (/(.+)@$/.exec(e))
                      return (t.userEmail =
                        "Your Email ID can not begin or end with ‘@’. Please enter a valid Email ID.");
                    if (20 < e.length && -1 == e.indexOf("@"))
                      return (t.userEmail =
                        "Your Email ID is missing ‘@’.  Please enter again!");
                    if (e.indexOf("@") < 2 || 50 < e.indexOf("@"))
                      return (t.userEmail = "Please enter Valid Email Id");
                    if (-1 != e.indexOf("@")) {
                      if (
                        4 <
                          (r = e
                            .substring(e.indexOf("@") + 1, e.length)
                            .split(".").length) ||
                        1 == r
                      )
                        return (t.userEmail =
                          "Domain name missing after ‘@’. Please enter a valid ID.");
                      if (
                        !/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g.exec(
                          e
                        )
                      )
                        return (t.userEmail =
                          "Domain name missing after ‘@’. Please enter a valid ID.");
                      if (2 < r) {
                        if (!/^(.+)@((.+){2,})\.((.+){2,})\.(.+)$/.exec(e))
                          return (t.userEmail = "Please enter valid Email Id.");
                        if (
                          3 < r &&
                          !/^(.+)@((.+){2,})\.((.+){2,})\.((.+){1,})\.(.+)$/.exec(
                            e
                          )
                        )
                          return (t.userEmail = "Please enter valid Email Id.");
                      }
                    }
                    return /.*([\._@-]){2}.*/.exec(e)
                      ? (t.userEmail =
                          "Found multiple ‘@’ in Email ID! Please enter again.")
                      : /^[0-9a-zA-Z]+([0-9a-zA-Z-_]*[.]?)*([0-9a-zA-Z]+)@([0-9a-zA-Z-_]+[.])+([a-zA-Z]){2,7}$/.exec(
                          e
                        ) ||
                          (t.userEmail =
                            "Found multiple ‘@’ in Email ID! Please enter again.");
                  }
                  t.userEmail = "Email not allowed.";
                }
              else
                t.userEmail =
                  "Email ID field can't be left blank. Please enter!";
            })(e, o),
            F(e, o),
            o
          );
        },
        touchOnBlur: !0,
        enableReinitialize: !1,
        destroyOnUnmount: !1,
        forceUnregisterOnUnmount: !0,
        asyncValidate: function (e, t, r, n) {
          var a = {};
          if (!Object(p.a)(e.userEmail))
            return D.a
              .post("/email/validation", { email: e.userEmail })
              .then(function (e) {
                if (200 == e.status && !Object(p.c)(e.data))
                  return Object(D.j)(e.data)
                    ? Object(p.c)(e.data) || Object(p.b)(e.data.autocorrect)
                      ? void 0
                      : Promise.resolve(e.data.autocorrect).then(
                          function (e) {
                            r.setEmailSuggestion(
                              $e(
                                $e({}, r.emailSuggestion),
                                {},
                                { hasEmailSuggestion: !0, email: e }
                              )
                            );
                          },
                          function (e) {}
                        )
                    : ((a.userEmail = "Please enter valid Email Id."),
                      Object(p.c)(e.data) ||
                        !0 !== e.data.isDisposableEmail ||
                        (a.userEmail = "Use a valid domain name."),
                      Promise.reject({ userEmail: a.userEmail }));
              });
        },
        onSubmitFail: function (e, t, r, n) {
          Object(D.c)(e, t, n);
        },
        asyncBlurFields: ["userEmail"],
      })(function (e) {
        function t(e) {
          var t =
              Object(p.c)(i) || Object(p.c)(i.syncErrors) ? {} : i.syncErrors,
            r =
              Object(p.c)(i) || Object(p.c)(i.submitErrors)
                ? {}
                : i.submitErrors,
            n =
              Object(p.c)(i) || Object(p.c)(i.asyncErrors) ? {} : i.asyncErrors,
            a = Object(p.c)(i) || Object(p.c)(i.fields) ? {} : i.fields;
          void 0 !== e && e !== {} && b($e($e({}, y), e)),
            !Object(p.c)(a) &&
            (3 === Object.keys(t).length ||
              3 === Object.keys(r).length ||
              t.userName ||
              r.userName ||
              t.userEmail ||
              r.userEmail ||
              n.userEmail ||
              t.userMobile ||
              r.userMobile ||
              t.userConsent ||
              r.userConsent)
              ? b(
                  $e(
                    $e({}, y),
                    {},
                    {
                      userName:
                        (t.userName || r.userName) &&
                        !Object(p.c)(a.userName) &&
                        a.userName.touched
                          ? "has-error"
                          : (Object(p.c)(t) || Object(p.a)(t.userName)) &&
                            (Object(p.c)(r) || Object(p.a)(r.userName))
                          ? "has-success"
                          : "",
                      userEmail:
                        (t.userEmail || r.userEmail || n.userEmail) &&
                        !Object(p.c)(a.userEmail) &&
                        a.userEmail.touched
                          ? "has-error"
                          : (Object(p.c)(t) || Object(p.a)(t.userEmail)) &&
                            (Object(p.c)(r) || Object(p.a)(r.userEmail))
                          ? "has-success"
                          : "",
                      userMobile:
                        (t.userMobile || r.userMobile) &&
                        !Object(p.c)(a.userMobile) &&
                        a.userMobile.touched
                          ? "has-error"
                          : (Object(p.c)(t) || Object(p.a)(t.userMobile)) &&
                            (Object(p.c)(r) || Object(p.a)(r.userMobile))
                          ? "has-success"
                          : "",
                      userConsent:
                        t.userConsent || r.userConsent ? "has-error" : "",
                    }
                  )
                )
              : Object(p.c)(t) ||
                (!t.userConsent && !r.userConsent) ||
                b(
                  $e(
                    $e({}, y),
                    {},
                    {
                      userConsent:
                        t.userConsent || r.userConsent ? "has-error" : "",
                    }
                  )
                );
        }
        function r(e) {
          e.target.parentElement.parentElement.classList.add("inputFocused");
        }
        function c(e) {
          var t, r, n;
          0 < e.target.value.length
            ? (e.target.parentElement.parentElement.classList.add(
                "inputFocused"
              ),
              (t =
                Object(p.c)(i) || Object(p.c)(i.syncErrors)
                  ? {}
                  : i.syncErrors),
              (r =
                Object(p.c)(i) || Object(p.c)(i.submitErrors)
                  ? {}
                  : i.submitErrors),
              (n =
                Object(p.c)(i) || Object(p.c)(i.asyncErrors)
                  ? {}
                  : i.asyncErrors),
              "userEmail" === e.target.name &&
              (Object(p.c)(t) || Object(p.a)(t.userEmail)) &&
              (Object(p.c)(r) || Object(p.a)(r.userEmail)) &&
              (Object(p.c)(n) || Object(p.a)(n.userEmail))
                ? (b($e($e({}, y), {}, { userEmail: "has-success" })), M(!0))
                : "userEmail" !== e.target.name ||
                  (!Object(p.c)(t) && !Object(p.a)(t.userEmail)) ||
                  (!Object(p.c)(r) && !Object(p.a)(r.userEmail)) ||
                  Object(p.c)(n) ||
                  Object(p.a)(n.userEmail),
              "userName" === e.target.name &&
              (Object(p.c)(t) || Object(p.a)(t.userName)) &&
              (Object(p.c)(r) || Object(p.a)(r.userName))
                ? (b($e($e({}, y), {}, { userName: "has-success" })), x(!0))
                : "userName" !== e.target.name ||
                  (!Object(p.c)(t) && !Object(p.a)(t.userName)) ||
                  Object(p.c)(r) ||
                  Object(p.a)(r.userName),
              "userMobile" === e.target.name &&
              (Object(p.c)(t) || Object(p.a)(t.userMobile)) &&
              (Object(p.c)(r) || Object(p.a)(r.userMobile))
                ? b($e($e({}, y), {}, { userMobile: "has-success" }))
                : "userMobile" !== e.target.name ||
                  (!Object(p.c)(t) && !Object(p.a)(t.userMobile)) ||
                  Object(p.c)(r) ||
                  Object(p.a)(r.userMobile))
            : e.target.parentElement.parentElement.classList.remove(
                "inputFocused"
              );
        }
        var i = Object(o.d)(function (e) {
            return e.form.contactForm;
          }),
          s = Object(o.d)(function (e) {
            return e.userInfoData;
          }),
          m = Object(o.d)(function (e) {
            return e.shortlists;
          }),
          f = Object(o.d)(function (e) {
            return e.contactData;
          }),
          d = Object(o.c)(),
          y = (C = Je(
            a.a.useState({
              userName: "",
              userEmail: "",
              userMobile: "",
              userConsent: "",
            }),
            2
          ))[0],
          b = C[1],
          v = (C = Je(
            a.a.useState(
              Object(p.c)(i) || Object(p.c)(i.values) || !i.values.userName
                ? s.userName || ""
                : i.values.userName
            ),
            2
          ))[0],
          _ = (C =
            (C[1],
            Je(
              a.a.useState(
                Object(p.c)(i) || Object(p.c)(i.values) || !i.values.userEmail
                  ? s.userEmail || ""
                  : i.values.userEmail
              ),
              2
            )))[0],
          E = (C =
            (C[1],
            Je(
              a.a.useState(
                Object(p.c)(i) || Object(p.c)(i.values) || !i.values.userMobile
                  ? s.userMobile || ""
                  : i.values.userMobile
              ),
              2
            )))[0],
          O = (s = (C[1], Je(a.a.useState(e.selectIsd), 2)))[0],
          w = s[1],
          S = (C = Je(a.a.useState(e.selectIsd), 2))[0],
          j = C[1],
          C = (s = Je(a.a.useState(e.isGdprCountry), 2))[0],
          N = (s = (s[1], Je(a.a.useState(e.userConsent), 2)))[0],
          k = (s = (s[1], Je(a.a.useState(e.whatsAppConsent), 2)))[0],
          P = (s = (s[1], Je(a.a.useState(e.optIn), 2)))[0],
          T = (s = (s[1], Je(a.a.useState("I"), 2)))[0],
          I = (s = (s[1], Je(a.a.useState(e.buttonType), 2)))[0],
          L = (s = (s[1], Je(a.a.useState(e.buttonName), 2)))[0],
          A = (s = (s[1], Je(Object(n.useState)(!1), 2)))[0],
          x = s[1],
          F = (s = Je(Object(n.useState)(!1), 2))[0],
          M = s[1],
          R = (s = Je(a.a.useState([]), 2))[0],
          q = s[1],
          U = (s = Je(a.a.useState(50 != O ? 15 : 10), 2))[0],
          G = s[1];
        Object(n.useEffect)(function () {
          var t;
          Object(p.c)(f.gaObject) ||
            Object(p.c)(f.gaObject.contactinfoformopen) ||
            "" === f.gaObject.contactinfoformopen ||
            (m.isShortList
              ? ((t = $e(
                  $e({}, m.shortListGaCommonData),
                  {},
                  { eventCategory: "contactinfoformopen" }
                )),
                d(e.contactGaAction(t)))
              : ((t = $e(
                  $e({}, f.gaObject.contactinfoformopen),
                  {},
                  { eventCategory: "contactinfoformopen" }
                )),
                d(e.contactGaAction(t)))),
            v && _ && (x(!0), M(!0));
        }, []),
          Object(n.useEffect)(
            function () {
              var t = Object(p.c)(i) || Object(p.c)(i.values) ? {} : i.values,
                r =
                  Object(p.c)(i) || Object(p.c)(i.syncErrors)
                    ? {}
                    : i.syncErrors,
                n =
                  Object(p.c)(i) || Object(p.c)(i.asyncErrors)
                    ? {}
                    : i.asyncErrors;
              e.initialize(
                $e(
                  $e({}, t),
                  {},
                  {
                    userConsent: N,
                    selectIsd: O,
                    whatsAppConsent: k,
                    optIn: P,
                    userType: T,
                    userName: v,
                    userEmail: _,
                    userMobile: E,
                    userMobileIsd: S,
                  }
                )
              ),
                b($e($e($e({}, r), n), y));
            },
            [N, O, k, C, P, T, v, _, E, S]
          ),
          (s = (function () {
            t = He().mark(function t(r) {
              var n;
              return He().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        console.log(
                          "LOG contact form : " +
                            JSON.stringify(i.values.selectIsd)
                        ),
                        x(!0),
                        M(!0),
                        (n = Object(D.g)(r)),
                        e.setMobileIsd(n),
                        (n = $e({}, r)),
                        (t.next = 8),
                        D.a.post("/validateContact", n)
                      );
                    case 8:
                      void 0 === (n = t.sent) ||
                      null == n ||
                      void 0 === n.status ||
                      null == n.status ||
                      200 !== n.status
                        ? (t.next = 13)
                        : (e.onSubmit(r, n.data), (t.next = 15));
                      break;
                    case 13:
                      throw (
                        ((document.getElementById("pageLoader").style.display =
                          "none"),
                        new Te.a({
                          userName: "Validation error",
                          userEmail: "Validation error",
                          userMobile: "Validation error",
                        }))
                      );
                    case 15:
                    case "end":
                      return t.stop();
                  }
              }, t);
            });
            var t,
              r = function () {
                var e = this,
                  r = arguments;
                return new Promise(function (n, a) {
                  var o = t.apply(e, r);
                  function c(e) {
                    Ke(o, n, a, c, i, "next", e);
                  }
                  function i(e) {
                    Ke(o, n, a, c, i, "throw", e);
                  }
                  c(void 0);
                });
              };
            return function (e) {
              return r.apply(this, arguments);
            };
          })());
        return a.a.createElement(
          "div",
          {
            className: "contact-form__slide contact-form__slide--default",
            id: "contact-slide-default",
          },
          "Y" == f.isCtaData
            ? a.a.createElement(
                "div",
                { className: "contact-form__buyer-journey" },
                e.contactFormHeadingText,
                " ",
                a.a.createElement("span", {
                  className: "" != f.header_icon ? f.header_icon : "",
                }),
                " ",
                e.contactFormHeadingDescText
              )
            : a.a.createElement(
                a.a.Fragment,
                null,
                (Object(p.a)(f.pType) || "10026" !== f.pType) &&
                  a.a.createElement(u.a, { heading: e.contactFormHeadingText }),
                (Object(p.a)(f.pType) || "10026" !== f.pType) &&
                  a.a.createElement(Be.a, {
                    text: e.contactFormHeadingDescText,
                  })
              ),
          (Object(p.a)(f.pType) || "10026" !== f.pType) &&
            !Object(p.a)(f.contact_interface) &&
            ("itarget_contact" === f.contact_interface ||
              "lead_gen_banner_contact" === f.contact_interface) &&
            a.a.createElement(Ye, {
              imagePath: f.itargetBannerData.image,
              projectName: f.itargetBannerData.projectName,
              localityName: f.itargetBannerData.localityName,
              bhkProp: f.itargetBannerData.bedroomInfo,
              price: f.itargetBannerData.displayPrice,
              onwards: f.itargetBannerData.priceSuffix,
              modifierClass: "prj-top-info",
            }),
          "Y" == f.isCtaData
            ? ""
            : a.a.createElement(
                a.a.Fragment,
                null,
                (Object(p.a)(f.pType) || "10026" !== f.pType) &&
                  "SRP_TOP_CONTACT" === e.formName &&
                  "search_wap" === e.source &&
                  (Object(p.a)(f.contact_interface) ||
                    "itarget_contact" !== f.contact_interface) &&
                  (Object(p.a)(f.buttonType) ||
                    "Request Photo" !== f.buttonType) &&
                  a.a.createElement(Ge, {
                    name: e.advertiserDetail.advertiserDetailName,
                    mobile: e.advertiserDetail.advertiserDetailMaskedMobile,
                    modifierClass: "advertiser-top-info",
                  })
              ),
          a.a.createElement(
            "form",
            { onSubmit: e.handleSubmit(s), className: "" },
            a.a.createElement(
              "div",
              { className: "contact-form__fieldset " + y.userName },
              a.a.createElement(l.a, {
                name: "userName",
                id: "userName",
                label: "Your Name",
                type: "text",
                modifierInputClass: "",
                modifierLabelClass: "",
                divErrorClassName: "has-error",
                component: g.a,
                onError: t,
                onFocus: r,
                onBlur: c,
                normalize: B(30),
              })
            ),
            a.a.createElement(
              "div",
              { className: "contact-form__fieldset " + y.userEmail },
              a.a.createElement(l.a, {
                name: "userEmail",
                id: "userEmail",
                list: "domains",
                label: "Email",
                type: "text",
                modifierInputClass: "",
                modifierLabelClass: "",
                divErrorClassName: "has-error",
                component: g.a,
                onError: t,
                onFocus: r,
                onBlur: c,
                onChange: function (t) {
                  (t = t.target.value),
                    e.setEmailSuggestion(
                      $e(
                        $e({}, e.emailSuggestion),
                        {},
                        { hasEmailSuggestion: !1, email: t }
                      )
                    ),
                    !Object(p.a)(t) &&
                      t.endsWith("@") &&
                      q([
                        t + "yahoo.com",
                        t + "gmail.com",
                        t + "hotmail.com",
                        t + "rediffmail.com",
                      ]);
                },
                normalize: B(100),
              }),
              e.emailSuggestion.hasEmailSuggestion &&
                a.a.createElement(
                  "div",
                  { class: "contact-form__hint-text" },
                  "Did you mean ",
                  a.a.createElement(
                    "a",
                    {
                      href: "javascript:void(0)",
                      title: "Did you mean " + e.emailSuggestion.email + "?",
                      onClick: function (t) {
                        var r = e.emailSuggestion.email;
                        t.stopPropagation(),
                          t.target.innerHTML,
                          e.change("userEmail", r[0]),
                          e.setEmailSuggestion(
                            $e(
                              $e({}, e.emailSuggestion),
                              {},
                              { hasEmailSuggestion: !1, email: r }
                            )
                          );
                      },
                    },
                    e.emailSuggestion.email
                  ),
                  "?"
                ),
              a.a.createElement(Ue, { listId: "domains", list: R })
            ),
            a.a.createElement(
              "div",
              {
                className: ((!Object(p.a)(f.category) && "R" == f.category) ||
                (A && F)
                  ? "contact-form__fieldset showMobile p16 "
                  : "contact-form__fieldset hideMobile p16 "
                ).concat(y.userMobile),
              },
              a.a.createElement(
                "div",
                { className: "contact-form__prefix" },
                a.a.createElement(l.a, {
                  name: "selectIsd",
                  id: "selectIsd",
                  value: O,
                  defaultValue: O,
                  modifierSelectClass: "contact-form__country-isd",
                  component: Fe.a,
                  onChange: function (t) {
                    var r = t.target.selectedOptions[0].value;
                    e.setMobileIsd(
                      Object(D.h)(t.target.selectedOptions[0].innerHTML)
                    ),
                      w(r),
                      j(r),
                      G("50" != r ? 15 : 10);
                  },
                })
              ),
              "Y" == f.isCtaData
                ? a.a.createElement(l.a, {
                    name: "userMobile",
                    id: "userMobile",
                    label: "Your WhatsApp Number",
                    type: "text",
                    modifierInputClass: "contact-form__mobile-no",
                    modifierLabelClass: "contact-form__label-no",
                    divErrorClassName: "has-error",
                    component: g.a,
                    onError: t,
                    onFocus: r,
                    onBlur: c,
                    normalize: B(U),
                    inputmode: "numeric",
                  })
                : a.a.createElement(l.a, {
                    name: "userMobile",
                    id: "userMobile",
                    label: "Mobile Number",
                    type: "text",
                    modifierInputClass: "contact-form__mobile-no",
                    modifierLabelClass: "contact-form__label-no",
                    divErrorClassName: "has-error",
                    component: g.a,
                    onError: t,
                    onFocus: r,
                    onBlur: c,
                    normalize: B(U),
                    inputmode: "numeric",
                  })
            ),
            "Request Photo" === I &&
              a.a.createElement(
                "div",
                { className: "contact-form__fieldset p16 " },
                a.a.createElement(l.a, {
                  name: "optIn",
                  id: "optIn",
                  label:
                    "Allow other advertisers with similar properties to contact you",
                  type: "checkbox",
                  modifierInputClass: "",
                  modifierLabelClass: "",
                  divErrorClassName: "has-error",
                  value: P,
                  defaultChecked: P,
                  isRequired: "",
                  component: qe,
                })
              ),
            !C &&
              a.a.createElement(
                a.a.Fragment,
                null,
                "50" != O &&
                  i.values &&
                  "50" != i.values.selectIsd &&
                  a.a.createElement(
                    "div",
                    { className: "contact-form__fieldset p16 " },
                    a.a.createElement(l.a, {
                      name: "whatsAppConsent",
                      id: "whatsAppConsent",
                      label: "I wish to be contacted by MB expert on WhatsApp",
                      type: "checkbox",
                      modifierInputClass: "",
                      modifierLabelClass: "",
                      divErrorClassName: "has-error",
                      value: k,
                      defaultChecked: k,
                      isRequired: "required",
                      component: qe,
                    })
                  ),
                a.a.createElement(xe, { contactGaAction: e.contactGaAction })
              ),
            C &&
              a.a.createElement(
                "div",
                { className: "contact-form__fieldset p16 " + y.userConsent },
                a.a.createElement(
                  l.a,
                  {
                    name: "userConsent",
                    id: "userConsent",
                    label: "I Agree to MagicBricks' ",
                    type: "checkbox",
                    modifierInputClass: "",
                    modifierLabelClass: "contact-form__label--disclaimer",
                    divErrorClassName: "has-error",
                    value: N,
                    defaultChecked: N,
                    isRequired: "",
                    component: qe,
                    onError: t,
                  },
                  a.a.createElement(
                    "a",
                    {
                      class: "contact-form__link",
                      target: "_blank",
                      href: "https://property.magicbricks.com/terms/terms.html",
                    },
                    "T&C"
                  ),
                  ",",
                  a.a.createElement(
                    "a",
                    {
                      class: "contact-form__link",
                      target: "_blank",
                      href: "https://property.magicbricks.com/terms/terms.html",
                    },
                    " Privacy Policy"
                  ),
                  " &",
                  a.a.createElement(
                    "a",
                    {
                      class: "contact-form__link",
                      target: "_blank",
                      href: "https://property.magicbricks.com/terms/terms.html",
                    },
                    " Cookie Policy"
                  )
                )
              ),
            a.a.createElement(h.a, {
              label: L,
              onClick: function () {
                Object(p.a)(f.category) || "R" != f.category
                  ? x(!0)
                  : ("contact-slide-otp",
                    "contact-slide-default",
                    (document.getElementById(
                      "contact-slide-otp"
                    ).style.display = "block"),
                    (document.getElementById(
                      "contact-slide-default"
                    ).style.display = "none")),
                  M(!0);
              },
              className: "contact-form__btn",
              type: "submit",
            })
          )
        );
      });
      function et(e) {
        return (et =
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
      function tt(e, t) {
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function rt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tt(Object(r), !0).forEach(function (t) {
                var n, a;
                (n = e),
                  (a = r[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== et(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 === r) return String(e);
                        if ("object" !== et((r = r.call(e, "string"))))
                          return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === et(e) ? e : String(e)
                    );
                  })(t)) in n
                    ? Object.defineProperty(n, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[t] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : tt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function nt(e) {
        function t(e) {
          e.stopPropagation(),
            (e = "Intermediate"),
            (e = rt(
              rt({}, Object(J.g)(!0, e, r, c, i)),
              {},
              {
                nonInteraction: !1,
                eventCategory:
                  "WEB" != r.platform
                    ? "MB Prime_Wap Entry Point Click"
                    : "mb prime entry point click",
              }
            )),
            l(Object(ie.e)(e)),
            window.open(p, "_blank");
        }
        var r = Object(o.d)(function (e) {
            return e.searchAdditionalDataBean;
          }),
          c = Object(o.d)(function (e) {
            return e.searchBean;
          }),
          i = Object(o.d)(function (e) {
            return e.contactData;
          }),
          l = Object(o.c)(),
          s = Object(ce.t)(r.platform) ? "" : r.platform,
          m =
            "https://www.magicbricks.com/mbprime/primePackages?source=" +
            Object(se.e)(
              "MBPRIME_ContactAccept_Free_Contact",
              s.toLowerCase(),
              "AcceptFreeContact"
            ) +
            "&category=" +
            e.recieverInfos.cg +
            "&ptype=" +
            e.recieverInfos.propType +
            "&cityCnd=" +
            e.recieverInfos.city,
          p =
            "https://www.magicbricks.com/mbprime/buypackageByPackageid?pkgid=" +
            e.primeInfo.packageId +
            "&popertyid=" +
            e.recieverInfos.propId +
            "&source=" +
            Object(se.e)(
              "MBPRIME_ContactAccept_Free_Contact",
              s.toLowerCase(),
              "AcceptFreeContact"
            ) +
            "&category=" +
            e.recieverInfos.cg +
            "&ptype=" +
            e.recieverInfos.propType +
            "&cityCnd=" +
            e.recieverInfos.city;
        return (
          Object(n.useEffect)(function () {
            l(Object(ie.e)(Object(J.g)(!1, "Intermediate", r, c, i)));
          }, []),
          a.a.createElement(
            "div",
            { className: "contact-form__limit" },
            "N" == r.nriUser &&
              e.contactLimit.nonPrimeUserFreeOwnerLimitUsed >
                e.contactLimit.nonPrimeUserFreeOwnerMaxLimit &&
              a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(
                  u.a,
                  null,
                  a.a.createElement(
                    "div",
                    { className: "contact-form__heading--prime" },
                    "Your Contact details have been sent to this Owner!"
                  )
                ),
                a.a.createElement(
                  re,
                  { modifierClass: "contact-form__limit-content1 pb16" },
                  "To continue to view details, upgrade to MB Prime. Contact upto 35 Property Owners."
                ),
                a.a.createElement(
                  re,
                  { modifierClass: "contact-form__limit-content2" },
                  "See all ",
                  a.a.createElement(
                    "a",
                    { href: m, target: "_blank" },
                    "benefits here"
                  )
                ),
                a.a.createElement(
                  oe.a,
                  {
                    onClick: t,
                    className: "contact-form__btn mb24",
                    type: "button",
                  },
                  "Upgrade Now @ ₹ ",
                  e.primeInfo.oprice
                ),
                !Object(ce.t)(e.tyUrl) &&
                  a.a.createElement(
                    a.a.Fragment,
                    null,
                    a.a.createElement(oe.a, {
                      onClick: e.showTopMatchesForPrime,
                      label: "Show Me Similar Properties",
                      className: "contact-form__btn contact-form__btn--white",
                      type: "button",
                    })
                  )
              ),
            "Y" == r.nriUser &&
              e.contactLimit.nonPrimeUserFreeOwnerLimitUsed >
                e.contactLimit.nonPrimeUserFreeOwnerMaxLimit &&
              a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(
                  u.a,
                  null,
                  a.a.createElement(
                    "div",
                    { className: "contact-form__heading--prime" },
                    "FREE Contact Access ",
                    a.a.createElement("br", null),
                    "Limit is Over!"
                  )
                ),
                a.a.createElement(
                  re,
                  { modifierClass: "contact-form__limit-content1 nri-prime" },
                  "You can get end-to-end assistance from ",
                  a.a.createElement("span", null, "NRI Property Expert"),
                  ", upto 35 Contacts & more with ",
                  a.a.createElement("span", null, "MB Prime")
                ),
                a.a.createElement(
                  re,
                  { modifierClass: "contact-form__limit-content2" },
                  "See all ",
                  a.a.createElement(
                    "a",
                    { href: m, target: "_blank" },
                    "benefits here"
                  )
                ),
                a.a.createElement(
                  oe.a,
                  {
                    onClick: function (e) {
                      e.stopPropagation(),
                        window.open(
                          "https://www.magicbricks.com/mbprime/primePackages",
                          "_blank"
                        );
                    },
                    className: "contact-form__btn mb24",
                    type: "button",
                  },
                  "Join MB Prime Now"
                ),
                !Object(ce.t)(e.tyUrl) &&
                  a.a.createElement(
                    a.a.Fragment,
                    null,
                    a.a.createElement(oe.a, {
                      onClick: e.showTopMatchesForPrime,
                      label: "Show Me Similar Properties",
                      className: "contact-form__btn contact-form__btn--white",
                      type: "button",
                    })
                  )
              ),
            e.contactLimit.nonPrimeUserFreeOwnerLimitUsed >
              e.contactLimit.nonPrimeUserFreeOwnerLimitStart &&
              e.contactLimit.nonPrimeUserFreeOwnerLimitUsed <=
                e.contactLimit.nonPrimeUserFreeOwnerMaxLimit &&
              a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(
                  u.a,
                  null,
                  a.a.createElement(
                    "div",
                    { className: "contact-form__heading--prime pb16" },
                    "Owner Contact unlocked for ",
                    a.a.createElement(
                      "span",
                      { className: "text-free" },
                      "FREE!"
                    )
                  )
                ),
                a.a.createElement(
                  re,
                  {
                    modifierClass:
                      "contact-form__limit-content1 contact-form__limit-content1--balance",
                  },
                  "Balance: ",
                  parseInt(e.contactLimit.nonPrimeUserFreeOwnerMaxLimit) -
                    parseInt(e.contactLimit.nonPrimeUserFreeOwnerLimitUsed),
                  " of ",
                  e.contactLimit.nonPrimeUserFreeOwnerMaxLimit,
                  " remaining"
                ),
                a.a.createElement(
                  re,
                  { modifierClass: "contact-form__limit-content1 pb16" },
                  "Upgrade to  ",
                  a.a.createElement("span", { className: "icon-mb-prime" }),
                  "  MB Prime & view contact of upto 35 property Owners"
                ),
                a.a.createElement(
                  re,
                  { modifierClass: "contact-form__limit-content2" },
                  "See all ",
                  a.a.createElement(
                    "a",
                    { href: m, target: "_blank" },
                    "benefits here"
                  )
                ),
                a.a.createElement(
                  oe.a,
                  {
                    onClick: t,
                    label: "",
                    className: "contact-form__btn mb24",
                    type: "button",
                  },
                  "Upgrade Now @ ₹ ",
                  e.primeInfo.oprice
                ),
                a.a.createElement(oe.a, {
                  onClick: e.showThankYou,
                  label: "Continue to View Owner Details",
                  className: "contact-form__btn contact-form__btn--white",
                  type: "button",
                })
              ),
            e.contactLimit.nonPrimeUserFreeOwnerLimitUsed ===
              e.contactLimit.nonPrimeUserFreeOwnerLimitStart &&
              a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(
                  u.a,
                  null,
                  a.a.createElement(
                    "div",
                    { className: "contact-form__heading--prime pb16" },
                    "Owner Contact unlocked for ",
                    a.a.createElement(
                      "span",
                      { className: "text-free" },
                      "FREE!"
                    )
                  )
                ),
                a.a.createElement(
                  re,
                  {
                    modifierClass:
                      "contact-form__limit-content1 contact-form__limit-content1--balance",
                  },
                  "Balance: ",
                  parseInt(e.contactLimit.nonPrimeUserFreeOwnerMaxLimit) -
                    parseInt(e.contactLimit.nonPrimeUserFreeOwnerLimitUsed),
                  " of ",
                  e.contactLimit.nonPrimeUserFreeOwnerMaxLimit,
                  " remaining"
                ),
                a.a.createElement(
                  re,
                  { modifierClass: "contact-form__limit-content1 pb16" },
                  "Upgrade to  ",
                  a.a.createElement("span", { className: "icon-mb-prime" }),
                  "  MB Prime & view contact of upto 35 property Owners"
                ),
                a.a.createElement(
                  re,
                  { modifierClass: "contact-form__limit-content2" },
                  "View all MB Prime ",
                  a.a.createElement(
                    "a",
                    { href: m, target: "_blank" },
                    "benefits here"
                  )
                ),
                a.a.createElement(
                  oe.a,
                  {
                    onClick: t,
                    label: "",
                    className: "contact-form__btn mb24",
                    type: "button",
                  },
                  "Upgrade Now @ ₹ ",
                  e.primeInfo.oprice
                ),
                a.a.createElement(oe.a, {
                  onClick: e.showThankYou,
                  label: "Continue to View Owner Details",
                  className: "contact-form__btn contact-form__btn--white",
                  type: "button",
                })
              )
          )
        );
      }
      function at(e) {
        return (at =
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
      function ot(e, t) {
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function ct(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ot(Object(r), !0).forEach(function (t) {
                var n, a;
                (n = e),
                  (a = r[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== at(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 === r) return String(e);
                        if ("object" !== at((r = r.call(e, "string"))))
                          return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === at(e) ? e : String(e)
                    );
                  })(t)) in n
                    ? Object.defineProperty(n, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[t] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ot(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function it(e) {
        var t = Object(o.d)(function (e) {
            return e.searchAdditionalDataBean;
          }),
          r = Object(o.d)(function (e) {
            return e.searchBean;
          }),
          c = Object(o.d)(function (e) {
            return e.contactData;
          }),
          i = Object(o.c)(),
          l = Object(ce.t)(t.platform) ? "" : t.platform,
          s =
            "https://www.magicbricks.com/mbprime/buypackageByPackageid?pkgid=" +
            e.primeInfo.packageId +
            "&popertyid=" +
            e.recieverInfos.propId +
            "&source=" +
            Object(se.e)(
              "MBPRIME_ContactAccept_Free_Contact",
              l.toLowerCase(),
              "AcceptFreeContact"
            ) +
            "&category=" +
            e.recieverInfos.cg +
            "&ptype=" +
            e.recieverInfos.propType +
            "&cityCnd=" +
            e.recieverInfos.city;
        return (
          Object(n.useEffect)(function () {
            i(Object(ie.e)(Object(J.g)(!1, "LimitError", t, r, c)));
          }, []),
          a.a.createElement(
            "div",
            { className: "contact-form__limit" },
            a.a.createElement(
              u.a,
              { heading: "" },
              a.a.createElement(
                "div",
                { className: "contact-form__heading--prime" },
                a.a.createElement("span", { className: "oops-text" }, "Oops!"),
                "Your Contact Limit is Over"
              )
            ),
            a.a.createElement(
              re,
              { modifierClass: "contact-form__limit-content1" },
              "Don't limit your search, explore more with ",
              a.a.createElement("span", { className: "icon-mb-prime" }),
              " MB Prime"
            ),
            a.a.createElement(
              re,
              { modifierClass: "contact-form__limit-content2" },
              "Upgrade now and get upto ",
              a.a.createElement("span", null, "35 contacts instantly")
            ),
            a.a.createElement(
              oe.a,
              {
                onClick: function (e) {
                  e.stopPropagation(),
                    (e = "LimitError"),
                    (e = ct(
                      ct({}, Object(J.g)(!0, e, t, r, c)),
                      {},
                      {
                        nonInteraction: !1,
                        eventCategory:
                          "WEB" != t.platform
                            ? "MB Prime_Wap Entry Point Click"
                            : "mb prime entry point click",
                      }
                    )),
                    i(Object(ie.e)(e)),
                    window.open(s, "_blank");
                },
                label: "",
                className: "contact-form__btn",
                type: "button",
              },
              "Upgrade Now @ ₹ ",
              e.primeInfo.oprice
            ),
            !Object(ce.t)(e.tyUrl) &&
              !(
                "Y" == c.isFreeOwnerProperty &&
                "0" == c.nonPrimeUserFreeOwnerLimitStart &&
                "0" == c.nonPrimeUserFreeOwnerLimitUsed &&
                "0" == c.nonPrimeUserFreeOwnerMaxLimit
              ) &&
              a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement("br", null),
                a.a.createElement(oe.a, {
                  onClick: e.showTopMatchesForPrime,
                  label: "Continue with Builder & Agent Properties",
                  className: "contact-form__btn contact-form__btn--white",
                  type: "button",
                })
              )
          )
        );
      }
      function lt(e) {
        return (lt =
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
      function st(e, t) {
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function ut(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? st(Object(r), !0).forEach(function (t) {
                var n, a;
                (n = e),
                  (a = r[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== lt(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 === r) return String(e);
                        if ("object" !== lt((r = r.call(e, "string"))))
                          return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === lt(e) ? e : String(e)
                    );
                  })(t)) in n
                    ? Object.defineProperty(n, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[t] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : st(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function mt(e) {
        var t = Object(o.d)(function (e) {
            return e.contactData;
          }),
          r = Object(o.c)();
        return (
          Object(n.useEffect)(function () {
            r({
              type: R.u,
              payload: ut(
                ut({}, t),
                {},
                {
                  recieverId: t.requestBody.propertyId,
                  isUserAction: !0,
                  formScreen: R.t,
                }
              ),
            });
          }),
          a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement("div", {
              className: "free-mb-prime-overlay",
              style: { display: "block" },
            }),
            a.a.createElement(
              "div",
              { className: "free-mb-prime-unlock show" },
              a.a.createElement(
                "div",
                { className: "free-mb-prime-unlock__inner" },
                a.a.createElement(
                  "div",
                  { className: "free-mb-prime-unlock__box" },
                  a.a.createElement(
                    "div",
                    { className: "free-mb-prime-unlock__title" },
                    a.a.createElement(
                      "span",
                      { className: "free-mb-prime-unlock__title__icon" },
                      a.a.createElement("i", { className: "icon-mb-prime" })
                    ),
                    "MB Prime"
                  ),
                  a.a.createElement(
                    "div",
                    { className: "free-mb-prime-unlock__text" },
                    "Yay! You've unlocked ",
                    a.a.createElement("br", null),
                    a.a.createElement("span", null, "Free"),
                    " MB Prime Trial"
                  )
                )
              )
            )
          )
        );
      }
      function pt(e) {
        function t() {
          c(!1),
            "PHOTO_SIDE_CONTACT_STICKY" != s.formName && i(),
            window &&
              window.document &&
              "hidden" == window.document.body.style.overflow &&
              (window.document.body.style.overflow = "");
        }
        var r = e.tyUrl,
          n = e.editTy,
          c = e.setEditTy,
          i = e.closeContactForm,
          l = e.requestInterface,
          s = e.contactData;
        return (
          Object(o.d)(function (e) {
            return e.feedback;
          }),
          console.log("top matches url: ", r),
          console.log("top matches editTy: ", n),
          a.a.createElement(
            a.a.Fragment,
            null,
            1 == n &&
              a.a.createElement(
                a.a.Fragment,
                null,
                "search_wap" == l
                  ? a.a.createElement(
                      a.a.Fragment,
                      null,
                      a.a.createElement(
                        "div",
                        { className: "save-search-popup" },
                        a.a.createElement("div", {
                          className:
                            "save-search-popup__close2 save-search-popup__close2--pos",
                          onClick: t,
                        }),
                        a.a.createElement("iframe", {
                          src: r,
                          className: "save-search-popup",
                        })
                      ),
                      a.a.createElement("div", {
                        className: "save-search-overlay",
                      })
                    )
                  : a.a.createElement(
                      a.a.Fragment,
                      null,
                      " ",
                      s &&
                        a.a.createElement(
                          "div",
                          { className: "save-search-popup iframe-top-matches" },
                          a.a.createElement(
                            "div",
                            { className: "top-matches-header" },
                            a.a.createElement("a", {
                              href: "javascript:void(0)",
                              className: "top-matches__back",
                              onClick: t,
                            }),
                            a.a.createElement(
                              "a",
                              {
                                href: "javascript:void(0)",
                                className: "top-matches__gotoHome",
                                onClick: t,
                              },
                              "Go back to Search Results"
                            )
                          ),
                          a.a.createElement("div", {
                            className:
                              "save-search-popup__close2 save-search-popup__close2--pos",
                            onClick: t,
                          }),
                          a.a.createElement("iframe", {
                            src: r,
                            className: "save-search-popup",
                          })
                        )
                    )
              )
          )
        );
      }
      function ft(e) {
        var t = e.heading;
        e = e.subHeading;
        return (
          "Photo Request sent successfully!" === t &&
            MB_GTM_dataLayer.push({
              eventCategory: "requirement saved successfully",
              eventAction: "revamp srp - request photos",
              eventLabel: "revamp srp - request photos",
            }),
          a.a.createElement(
            "div",
            { className: "contact-form__thanks" },
            a.a.createElement(
              "div",
              { className: "contact-form__thanks__flex" },
              a.a.createElement("div", {
                className: "contact-form__thanks__icon",
              }),
              a.a.createElement(
                "div",
                { className: "contact-form__thanks__heading" },
                t
              ),
              a.a.createElement(
                "div",
                { className: "contact-form__thanks__sunHeading" },
                e
              )
            )
          )
        );
      }
      r(551), r(159);
      var dt = r(345);
      function yt(e, t) {
        var r;
        if (e)
          return "string" == typeof e
            ? bt(e, t)
            : "Map" ===
                (r =
                  "Object" ===
                    (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                  e.constructor
                    ? e.constructor.name
                    : r) || "Set" === r
            ? Array.from(e)
            : "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            ? bt(e, t)
            : void 0;
      }
      function bt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function vt(e) {
        function t(t) {
          console.log("ContactFormCoWorkingScreens", t),
            t.forEach(function (t) {
              var r;
              !0 === t.isChecked &&
                (console.log(
                  "ContactFormCoWorkingScreens-id",
                  t.label,
                  t.id,
                  t.value,
                  t.name
                ),
                (r = { id: t.id, value: t.value }),
                console.log("ContactFormCoWorkingScreens newArray: ", r),
                i(
                  Object(ie.e)({
                    event: "event_tracking",
                    eventName: "revamp_srp_proptuple_contact",
                    nonInteraction: !1,
                    eventCategory: "lead quality form - s" + e.screen,
                    eventAction:
                      "revamp srp | propertycontact | propertysearch | property tuple | primary",
                    eventLabel: "submit : " + t.label,
                    eventValue: "",
                    cd96: e.buttonType,
                  })
                ),
                e.screen < 3 &&
                  i(
                    Object(ie.e)({
                      event: "event_tracking",
                      eventName: "revamp_srp_proptuple_contact",
                      nonInteraction: !1,
                      eventCategory: "lead quality form - s" + (e.screen + 1),
                      eventAction:
                        "revamp srp | propertycontact | propertysearch | property tuple | primary",
                      eventLabel: "Form open",
                      eventValue: "",
                      cd96: e.buttonType,
                    })
                  ),
                c(
                  [].concat(
                    (function (e) {
                      return (
                        (function (e) {
                          if (Array.isArray(e)) return bt(e);
                        })(e) ||
                        (function (e) {
                          if (
                            ("undefined" != typeof Symbol &&
                              null != e[Symbol.iterator]) ||
                            null != e["@@iterator"]
                          )
                            return Array.from(e);
                        })(e) ||
                        yt(e) ||
                        (function () {
                          throw new TypeError(
                            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        })()
                      );
                    })(n),
                    [r]
                  )
                ),
                e.setScreen(e.screen + 1));
            });
        }
        var r = (function (e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                var r =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                if (null != r) {
                  var n,
                    a,
                    o,
                    c,
                    i = [],
                    l = !0,
                    s = !1;
                  try {
                    if (((o = (r = r.call(e)).next), 0 === t)) {
                      if (Object(r) !== r) return;
                      l = !1;
                    } else
                      for (
                        ;
                        !(l = (n = o.call(r)).done) &&
                        (i.push(n.value), i.length !== t);
                        l = !0
                      );
                  } catch (e) {
                    (s = !0), (a = e);
                  } finally {
                    try {
                      if (
                        !l &&
                        null != r.return &&
                        ((c = r.return()), Object(c) !== c)
                      )
                        return;
                    } finally {
                      if (s) throw a;
                    }
                  }
                  return i;
                }
              })(e, t) ||
              yt(e, t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          })(a.a.useState([]), 2),
          n = r[0],
          c = r[1],
          i = Object(o.c)();
        return a.a.createElement(
          "div",
          { className: "co-working-contact__container" },
          1 === e.screen &&
            a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(
                "div",
                { className: "co-working-contact__first-row" },
                a.a.createElement("span", {
                  className: "co-working-contact__icn",
                }),
                "Get free access of meeting rooms for 100 hours"
              ),
              a.a.createElement(
                "div",
                { className: "co-working-contact__title" },
                "Get Something Extra"
              ),
              a.a.createElement(
                "div",
                { className: "co-working-contact__detail" },
                "We contact the owner and negotiate for you as per your business requirement"
              ),
              a.a.createElement(
                "div",
                { className: "co-working-contact__question" },
                "How many seats do you require?"
              ),
              a.a.createElement(
                "div",
                { className: "co-working-contact__options" },
                a.a.createElement(dt.MbSelectGroup, {
                  singleSelect: !0,
                  dataHandler: t,
                  isTraditional: !1,
                  selectData: [
                    {
                      isChecked: !1,
                      label: "1 - 5",
                      id: 19650,
                      cssClass: "",
                      name: "seatsCount",
                      value: "seats",
                    },
                    {
                      isChecked: !1,
                      label: "5 - 15",
                      id: 19651,
                      cssClass: "",
                      name: "seatsCount",
                      value: "seats",
                    },
                    {
                      isChecked: !1,
                      label: "More than 15",
                      id: 19652,
                      cssClass: "",
                      name: "seatsCount",
                      value: "seats",
                    },
                  ],
                })
              )
            ),
          2 === e.screen &&
            a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(
                "div",
                { className: "co-working-contact__first-row" },
                a.a.createElement("span", {
                  className: "co-working-contact__icn",
                }),
                "Free car parking for visitors"
              ),
              a.a.createElement(
                "div",
                { className: "co-working-contact__title" },
                "Get Something Extra"
              ),
              a.a.createElement(
                "div",
                { className: "co-working-contact__detail" },
                "We contact the owner and negotiate for you as per your business requirement"
              ),
              a.a.createElement(
                "div",
                { className: "co-working-contact__question" },
                "How long do you need the space?"
              ),
              a.a.createElement(
                "div",
                { className: "co-working-contact__options" },
                a.a.createElement(dt.MbSelectGroup, {
                  singleSelect: !0,
                  dataHandler: t,
                  isTraditional: !1,
                  selectData: [
                    {
                      isChecked: !1,
                      label: "1-5 months",
                      id: 19660,
                      cssClass: "",
                      name: "spaceDuration",
                      value: "duration",
                    },
                    {
                      isChecked: !1,
                      label: "6 months or more",
                      id: 19661,
                      cssClass: "",
                      name: "spaceDuration",
                      value: "duration",
                    },
                  ],
                })
              )
            ),
          3 === e.screen &&
            a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(
                "div",
                { className: "co-working-contact__first-row" },
                a.a.createElement("span", {
                  className: "co-working-contact__icn",
                }),
                "Don't Pay for Cofee, It's free forever"
              ),
              a.a.createElement(
                "div",
                { className: "co-working-contact__title" },
                "Get Something Extra"
              ),
              a.a.createElement(
                "div",
                { className: "co-working-contact__detail" },
                "We contact the owner and negotiate for you as per your business requirement"
              ),
              a.a.createElement(
                "div",
                { className: "co-working-contact__question" },
                "What type of space do you need?"
              ),
              a.a.createElement(
                "div",
                { className: "co-working-contact__options" },
                a.a.createElement(dt.MbSelectGroup, {
                  singleSelect: !0,
                  dataHandler: t,
                  isTraditional: !1,
                  selectData: [
                    {
                      isChecked: !1,
                      label: "Hot Desk",
                      id: 10290,
                      cssClass: "",
                      name: "spaceType",
                      value: "Hot Desk",
                    },
                    {
                      isChecked: !1,
                      label: "Private Office",
                      id: 10291,
                      cssClass: "",
                      name: "spaceType",
                      value: "Private Office",
                    },
                    {
                      isChecked: !1,
                      label: "Dedicated Desk",
                      id: 10292,
                      cssClass: "",
                      name: "spaceType",
                      value: "Dedicated Desk",
                    },
                  ],
                })
              )
            ),
          4 === e.screen &&
            (e.formScreen && e.formScreen === e.actionType
              ? a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(
                    "div",
                    { className: "co-working-contact__first-row" },
                    a.a.createElement("span", {
                      className: "co-working-contact__icn",
                    })
                  ),
                  a.a.createElement(
                    "div",
                    { className: "co-working-contact__title" },
                    "Thank you"
                  ),
                  a.a.createElement(
                    "div",
                    { className: "co-working-contact__detail" },
                    "Our Space Expert will contact you soon."
                  )
                )
              : a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(
                    "div",
                    { className: "co-working-contact__first-row" },
                    a.a.createElement("span", {
                      className: "co-working-contact__icn",
                    }),
                    "Get free access of meeting rooms for 100 hours"
                  ),
                  a.a.createElement(
                    "div",
                    { className: "co-working-contact__title" },
                    "Get Something Extra"
                  ),
                  a.a.createElement(
                    "div",
                    { className: "co-working-contact__detail" },
                    "We contact the owner and negotiate for you as per your business requirement"
                  ),
                  void (4 === e.screen && e.onCoWorkingSubmit(n, e.screen))
                ))
        );
      }
      function ht(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function gt(e) {
        function t(e, t) {
          (e = {
            queid: c,
            ansid: "35902" == r ? (null == e ? void 0 : e.ansid) : l,
          }),
            s([]),
            i(e);
        }
        var r = e.questionType,
          n = e.question,
          o = e.label,
          c = e.queid,
          i = e.onSubmitAnswer,
          l = (e = (function (e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                var r =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                if (null != r) {
                  var n,
                    a,
                    o,
                    c,
                    i = [],
                    l = !0,
                    s = !1;
                  try {
                    if (((o = (r = r.call(e)).next), 0 === t)) {
                      if (Object(r) !== r) return;
                      l = !1;
                    } else
                      for (
                        ;
                        !(l = (n = o.call(r)).done) &&
                        (i.push(n.value), i.length !== t);
                        l = !0
                      );
                  } catch (e) {
                    (s = !0), (a = e);
                  } finally {
                    try {
                      if (
                        !l &&
                        null != r.return &&
                        ((c = r.return()), Object(c) !== c)
                      )
                        return;
                    } finally {
                      if (s) throw a;
                    }
                  }
                  return i;
                }
              })(e, t) ||
              (function (e, t) {
                var r;
                if (e)
                  return "string" == typeof e
                    ? ht(e, t)
                    : "Map" ===
                        (r =
                          "Object" ===
                            (r = Object.prototype.toString
                              .call(e)
                              .slice(8, -1)) && e.constructor
                            ? e.constructor.name
                            : r) || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? ht(e, t)
                    : void 0;
              })(e, t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          })(a.a.useState([]), 2))[0],
          s = e[1];
        return a.a.createElement(
          "div",
          {
            className:
              "35902" == r
                ? "c-buyer-tagging__qna single-select"
                : "c-buyer-tagging__qna",
          },
          a.a.createElement("div", { className: "c-buyer-tagging__qna__q" }, n),
          a.a.createElement(
            "div",
            { className: "c-buyer-tagging__qna__a" },
            o.map(function (e) {
              return a.a.createElement(
                "div",
                { className: "c-buyer-tagging__qna__item" },
                a.a.createElement("input", {
                  className: "c-buyer-tagging__qna__item__input",
                  type: "35902" == r ? "radio" : "checkbox",
                  name: "b-tagging",
                  id: "b-tagging".concat(null == e ? void 0 : e.ansid),
                  value: null == e ? void 0 : e.label,
                  onClick: function (n) {
                    return "35902" === r
                      ? t(e)
                      : ((a = e),
                        (o = l.indexOf(a.ansid)),
                        (c = Object.assign(l)),
                        -1 < o ? c.splice(o, 1) : c.push(a.ansid),
                        void s(c));
                    var a, o, c;
                  },
                }),
                a.a.createElement(
                  "label",
                  {
                    className: "c-buyer-tagging__qna__item__label",
                    htmlFor: "b-tagging".concat(null == e ? void 0 : e.ansid),
                  },
                  null == e ? void 0 : e.label
                )
              );
            })
          ),
          "35901" === r &&
            a.a.createElement(
              "div",
              {
                className: "c-buyer-tagging__qna__btn-next",
                onClick: function (e) {
                  return t("item");
                },
              },
              "Next",
              a.a.createElement("span", {
                className: "c-buyer-tagging__qna__btn-next__arrow",
              })
            )
        );
      }
      function _t(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            var r;
            if (e)
              return "string" == typeof e
                ? Et(e, t)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
                        ? e.constructor.name
                        : r) || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? Et(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Et(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Ot(e) {
        function t(e, t, r) {
          ("min" == e ? (u(r), p("Max"), l(""), c) : (p(r), l))(t);
        }
        var r = e.onSubmitAnswer,
          n = e.question,
          o = ((e = e.category), (f = _t(a.a.useState(0), 2))[0]),
          c = f[1],
          i = (f = _t(a.a.useState(""), 2))[0],
          l = f[1],
          s = (f = _t(a.a.useState("Min"), 2))[0],
          u = f[1],
          m = (f = _t(a.a.useState("Max"), 2))[0],
          p = f[1],
          f = (function (e) {
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
          })(e);
        return a.a.createElement(
          "div",
          { className: "c-buyer-tagging__qna" },
          a.a.createElement("div", { className: "c-buyer-tagging__qna__q" }, n),
          a.a.createElement(
            "div",
            { className: "c-buyer-tagging__fieldset" },
            a.a.createElement(
              "div",
              { className: "c-buyer-tagging__fieldset__min-max min" },
              a.a.createElement(
                "select",
                {
                  class: "c-buyer-tagging__select",
                  onChange: function (e) {
                    return t(
                      "min",
                      e.target.value,
                      e.target.options[e.target.selectedIndex].text
                    );
                  },
                },
                a.a.createElement("option", { value: "0" }, "Min"),
                f.range.map(function (e, t) {
                  return a.a.createElement(
                    "option",
                    { value: e.value },
                    "₹ ",
                    e.name
                  );
                })
              ),
              a.a.createElement(
                "div",
                { className: "c-buyer-tagging__fieldset__input" },
                s
              )
            ),
            a.a.createElement(
              "div",
              { className: "c-buyer-tagging__fieldset__to" },
              "to"
            ),
            a.a.createElement(
              "div",
              { className: "c-buyer-tagging__fieldset__min-max max" },
              a.a.createElement(
                "select",
                {
                  class: "c-buyer-tagging__select",
                  onChange: function (e) {
                    return t(
                      "max",
                      e.target.value,
                      e.target.options[e.target.selectedIndex].text
                    );
                  },
                },
                a.a.createElement("option", { value: "0" }, "Max"),
                f.range.map(function (e, t) {
                  if (parseInt(e.value) > parseInt(o))
                    return a.a.createElement(
                      "option",
                      { value: e.value },
                      "₹ ",
                      e.name
                    );
                })
              ),
              a.a.createElement(
                "div",
                { className: "c-buyer-tagging__fieldset__input" },
                m
              )
            )
          ),
          a.a.createElement(
            "div",
            {
              className: "c-buyer-tagging__qna__btn-next",
              onClick: function () {
                r({ minBudget: o, maxBudget: i });
              },
            },
            "Next",
            a.a.createElement("span", {
              className: "c-buyer-tagging__qna__btn-next__arrow",
            })
          )
        );
      }
      function wt(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            var r;
            if (e)
              return "string" == typeof e
                ? St(e, t)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
                        ? e.constructor.name
                        : r) || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? St(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function St(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function jt(e) {
        var t = e.onSubmitAnswer,
          r = e.question,
          o = e.ansId,
          c = e.queid,
          i = e.userData,
          l = (e = wt(Object(n.useState)(""), 2))[0],
          s = e[1],
          u = (e = wt(Object(n.useState)(!1), 2))[0],
          m = e[1],
          p = (e = wt(
            Object(n.useState)("Please enter a 10-digit Mobile number!"),
            2
          ))[0],
          f = e[1];
        return a.a.createElement(
          "div",
          { className: "c-buyer-tagging__qna" },
          a.a.createElement("div", { className: "c-buyer-tagging__qna__q" }, r),
          a.a.createElement(
            "div",
            { className: "c-buyer-tagging__qna__a" },
            a.a.createElement(
              "div",
              { className: "c-buyer-tagging__qna__field" },
              a.a.createElement(
                "div",
                { className: "c-buyer-tagging__qna__field__isd" },
                a.a.createElement(
                  "select",
                  {
                    id: "isdPhone",
                    name: "isdPhone",
                    className: "c-buyer-tagging__qna__field__select isd-number",
                  },
                  a.a.createElement(
                    "option",
                    { value: "50", defaultValue: !0 },
                    "IND +91"
                  ),
                  a.a.createElement("option", { value: "51" }, "USA +1"),
                  a.a.createElement("option", { value: "52" }, "GBR +44"),
                  a.a.createElement("option", { value: "53" }, "ARE +971"),
                  a.a.createElement("option", { value: "54" }, "CAN +1"),
                  a.a.createElement("option", { value: "55" }, "AUS +61"),
                  a.a.createElement("option", { value: "56" }, "PAK +92"),
                  a.a.createElement("option", { value: "57" }, "SAU +966"),
                  a.a.createElement("option", { value: "58" }, "KWT +965"),
                  a.a.createElement("option", { value: "59" }, "ZAF +27"),
                  a.a.createElement("option", { value: "60" }, "AFG +93"),
                  a.a.createElement("option", { value: "61" }, "ALB +355"),
                  a.a.createElement("option", { value: "62" }, "DZA +213"),
                  a.a.createElement("option", { value: "63" }, "ASM +684"),
                  a.a.createElement("option", { value: "64" }, "AND +376"),
                  a.a.createElement("option", { value: "65" }, "AGO +244"),
                  a.a.createElement("option", { value: "66" }, "AIA +264"),
                  a.a.createElement("option", { value: "67" }, "ATG +268"),
                  a.a.createElement("option", { value: "68" }, "ARG +54"),
                  a.a.createElement("option", { value: "69" }, "ARM +374"),
                  a.a.createElement("option", { value: "70" }, "AUT +43"),
                  a.a.createElement("option", { value: "71" }, "AZE +994"),
                  a.a.createElement("option", { value: "72" }, "BHS +1242"),
                  a.a.createElement("option", { value: "73" }, "BHR +973"),
                  a.a.createElement("option", { value: "74" }, "BGD +880"),
                  a.a.createElement("option", { value: "75" }, "BRB +1246"),
                  a.a.createElement("option", { value: "76" }, "BLR +375"),
                  a.a.createElement("option", { value: "77" }, "BEL +32"),
                  a.a.createElement("option", { value: "78" }, "BLZ +501"),
                  a.a.createElement("option", { value: "79" }, "BMU +1441"),
                  a.a.createElement("option", { value: "80" }, "BTN +975"),
                  a.a.createElement("option", { value: "81" }, "BOL +591"),
                  a.a.createElement("option", { value: "82" }, "BIH +387"),
                  a.a.createElement("option", { value: "83" }, "BWA +267"),
                  a.a.createElement("option", { value: "84" }, "BRA +55"),
                  a.a.createElement("option", { value: "85" }, "BRN +673"),
                  a.a.createElement("option", { value: "86" }, "BGR +359"),
                  a.a.createElement("option", { value: "87" }, "BFA +226"),
                  a.a.createElement("option", { value: "88" }, "BDI +257"),
                  a.a.createElement("option", { value: "89" }, "KHM +855"),
                  a.a.createElement("option", { value: "90" }, "CMR +237"),
                  a.a.createElement("option", { value: "91" }, "CPV +238"),
                  a.a.createElement("option", { value: "92" }, "CYM +345"),
                  a.a.createElement("option", { value: "93" }, "CAF +236"),
                  a.a.createElement("option", { value: "94" }, "TCD +235"),
                  a.a.createElement("option", { value: "95" }, "CHL +56"),
                  a.a.createElement("option", { value: "97" }, "COL +57"),
                  a.a.createElement("option", { value: "98" }, "COM +269"),
                  a.a.createElement("option", { value: "99" }, "COD +243"),
                  a.a.createElement("option", { value: "100" }, "COG +242"),
                  a.a.createElement("option", { value: "101" }, "COK +682"),
                  a.a.createElement("option", { value: "102" }, "CRI +506"),
                  a.a.createElement("option", { value: "103" }, "CIV +225"),
                  a.a.createElement("option", { value: "104" }, "HRV +385"),
                  a.a.createElement("option", { value: "105" }, "CUB +53"),
                  a.a.createElement("option", { value: "106" }, "CYP +357"),
                  a.a.createElement("option", { value: "107" }, "CZE +420"),
                  a.a.createElement("option", { value: "108" }, "DNK +45"),
                  a.a.createElement("option", { value: "109" }, "DJI +253"),
                  a.a.createElement("option", { value: "110" }, "DMA +767"),
                  a.a.createElement("option", { value: "111" }, "DOM +1"),
                  a.a.createElement("option", { value: "112" }, "TLS +670"),
                  a.a.createElement("option", { value: "113" }, "ECU +593"),
                  a.a.createElement("option", { value: "114" }, "EGY +20"),
                  a.a.createElement("option", { value: "115" }, "SLV +503"),
                  a.a.createElement("option", { value: "116" }, "GNQ +240"),
                  a.a.createElement("option", { value: "117" }, "ERI +291"),
                  a.a.createElement("option", { value: "118" }, "EST +372"),
                  a.a.createElement("option", { value: "119" }, "ETH +251"),
                  a.a.createElement("option", { value: "120" }, "FLK +500"),
                  a.a.createElement("option", { value: "121" }, "FRO +298"),
                  a.a.createElement("option", { value: "122" }, "FJI +679"),
                  a.a.createElement("option", { value: "123" }, "FIN +358"),
                  a.a.createElement("option", { value: "124" }, "FRA +33"),
                  a.a.createElement("option", { value: "125" }, "GUF +594"),
                  a.a.createElement("option", { value: "126" }, "PYF +689"),
                  a.a.createElement("option", { value: "127" }, "GAB +241"),
                  a.a.createElement("option", { value: "128" }, "GMB +220"),
                  a.a.createElement("option", { value: "129" }, "GEO +995"),
                  a.a.createElement("option", { value: "130" }, "DEU +49"),
                  a.a.createElement("option", { value: "131" }, "GHA +233"),
                  a.a.createElement("option", { value: "132" }, "GIB +350"),
                  a.a.createElement("option", { value: "133" }, "GRC +30"),
                  a.a.createElement("option", { value: "134" }, "GRL +299"),
                  a.a.createElement("option", { value: "135" }, "GRD +473"),
                  a.a.createElement("option", { value: "136" }, "GLP +590"),
                  a.a.createElement("option", { value: "137" }, "GUM +671"),
                  a.a.createElement("option", { value: "138" }, "GTM +502"),
                  a.a.createElement("option", { value: "139" }, "GIN +224"),
                  a.a.createElement("option", { value: "140" }, "GNB +245"),
                  a.a.createElement("option", { value: "141" }, "GUY +592"),
                  a.a.createElement("option", { value: "142" }, "HTI +509"),
                  a.a.createElement("option", { value: "143" }, "HND +504"),
                  a.a.createElement("option", { value: "144" }, "HKG +852"),
                  a.a.createElement("option", { value: "145" }, "HUN +36"),
                  a.a.createElement("option", { value: "146" }, "ISL +354"),
                  a.a.createElement("option", { value: "147" }, "IDN +62"),
                  a.a.createElement("option", { value: "148" }, "IRN +98"),
                  a.a.createElement("option", { value: "149" }, "IRQ +964"),
                  a.a.createElement("option", { value: "150" }, "IRL +353"),
                  a.a.createElement("option", { value: "151" }, "ISR +972"),
                  a.a.createElement("option", { value: "152" }, "ITA +39"),
                  a.a.createElement("option", { value: "153" }, "JAM +1"),
                  a.a.createElement("option", { value: "154" }, "JPN +81"),
                  a.a.createElement("option", { value: "155" }, "JOR +962"),
                  a.a.createElement("option", { value: "156" }, "KAZ +7"),
                  a.a.createElement("option", { value: "157" }, "KEN +254"),
                  a.a.createElement("option", { value: "158" }, "KIR +686"),
                  a.a.createElement("option", { value: "159" }, "MDA +82"),
                  a.a.createElement("option", { value: "160" }, "KGZ +996"),
                  a.a.createElement("option", { value: "161" }, "LAO +856"),
                  a.a.createElement("option", { value: "162" }, "LVA +371"),
                  a.a.createElement("option", { value: "163" }, "LBN +961"),
                  a.a.createElement("option", { value: "164" }, "LSO +266"),
                  a.a.createElement("option", { value: "165" }, "LBR +231"),
                  a.a.createElement("option", { value: "166" }, "LBY +218"),
                  a.a.createElement("option", { value: "167" }, "LIE +423"),
                  a.a.createElement("option", { value: "168" }, "LTU +370"),
                  a.a.createElement("option", { value: "169" }, "LUX +352"),
                  a.a.createElement("option", { value: "170" }, "MAC +853"),
                  a.a.createElement("option", { value: "171" }, "MKD +389"),
                  a.a.createElement("option", { value: "172" }, "MDG +261"),
                  a.a.createElement("option", { value: "173" }, "MWI +265"),
                  a.a.createElement("option", { value: "174" }, "MYS +60"),
                  a.a.createElement("option", { value: "175" }, "MDV +960"),
                  a.a.createElement("option", { value: "176" }, "MLI +223"),
                  a.a.createElement("option", { value: "177" }, "MLT +356"),
                  a.a.createElement("option", { value: "178" }, "MTQ +596"),
                  a.a.createElement("option", { value: "179" }, "MRT +222"),
                  a.a.createElement("option", { value: "180" }, "MUS +230"),
                  a.a.createElement("option", { value: "181" }, "MYT +269"),
                  a.a.createElement("option", { value: "182" }, "MEX +52"),
                  a.a.createElement("option", { value: "183" }, "FSM +691"),
                  a.a.createElement("option", { value: "184" }, "KOR +373"),
                  a.a.createElement("option", { value: "185" }, "MCO +377"),
                  a.a.createElement("option", { value: "186" }, "MNG +976"),
                  a.a.createElement("option", { value: "187" }, "MSR +664"),
                  a.a.createElement("option", { value: "188" }, "MAR +212"),
                  a.a.createElement("option", { value: "189" }, "MOZ +258"),
                  a.a.createElement("option", { value: "190" }, "MMR +95"),
                  a.a.createElement("option", { value: "191" }, "NAM +264"),
                  a.a.createElement("option", { value: "192" }, "NRU +674"),
                  a.a.createElement("option", { value: "193" }, "NPL +977"),
                  a.a.createElement("option", { value: "194" }, "ANT +599"),
                  a.a.createElement("option", { value: "195" }, "NLD +31"),
                  a.a.createElement("option", { value: "196" }, "NCL +687"),
                  a.a.createElement("option", { value: "197" }, "NZL +64"),
                  a.a.createElement("option", { value: "198" }, "NIC +505"),
                  a.a.createElement("option", { value: "199" }, "NER +227"),
                  a.a.createElement("option", { value: "200" }, "NGA +234"),
                  a.a.createElement("option", { value: "201" }, "NIU +683"),
                  a.a.createElement("option", { value: "202" }, "NFK +672"),
                  a.a.createElement("option", { value: "203" }, "PRK +850"),
                  a.a.createElement("option", { value: "204" }, "NOR +47"),
                  a.a.createElement("option", { value: "205" }, "OMN +968"),
                  a.a.createElement("option", { value: "206" }, "PAN +507"),
                  a.a.createElement("option", { value: "207" }, "PNG +675"),
                  a.a.createElement("option", { value: "208" }, "PRY +595"),
                  a.a.createElement("option", { value: "209" }, "PER +51"),
                  a.a.createElement("option", { value: "210" }, "PHL +63"),
                  a.a.createElement("option", { value: "211" }, "PCN +649"),
                  a.a.createElement("option", { value: "212" }, "POL +48"),
                  a.a.createElement("option", { value: "213" }, "PRT +351"),
                  a.a.createElement("option", { value: "214" }, "PRI +939"),
                  a.a.createElement("option", { value: "215" }, "QAT +974"),
                  a.a.createElement("option", { value: "216" }, "REU +262"),
                  a.a.createElement("option", { value: "217" }, "ROU +40"),
                  a.a.createElement("option", { value: "218" }, "RUS +7"),
                  a.a.createElement("option", { value: "219" }, "RWA +250"),
                  a.a.createElement("option", { value: "220" }, "WSM +685"),
                  a.a.createElement("option", { value: "221" }, "SMR +378"),
                  a.a.createElement("option", { value: "222" }, "STP +239"),
                  a.a.createElement("option", { value: "223" }, "SEN +221"),
                  a.a.createElement("option", { value: "224" }, "SCG +381"),
                  a.a.createElement("option", { value: "225" }, "SYC +248"),
                  a.a.createElement("option", { value: "226" }, "SLE +232"),
                  a.a.createElement("option", { value: "227" }, "SGP +65"),
                  a.a.createElement("option", { value: "228" }, "SVK +421"),
                  a.a.createElement("option", { value: "229" }, "SVN +386"),
                  a.a.createElement("option", { value: "230" }, "SLB +677"),
                  a.a.createElement("option", { value: "231" }, "SOM +252"),
                  a.a.createElement("option", { value: "232" }, "ESP +34"),
                  a.a.createElement("option", { value: "233" }, "LKA +94"),
                  a.a.createElement("option", { value: "234" }, "SHN +290"),
                  a.a.createElement("option", { value: "235" }, "KNA +869"),
                  a.a.createElement("option", { value: "236" }, "LCA +758"),
                  a.a.createElement("option", { value: "237" }, "SPM +508"),
                  a.a.createElement("option", { value: "238" }, "VCT +784"),
                  a.a.createElement("option", { value: "239" }, "SDN +249"),
                  a.a.createElement("option", { value: "240" }, "SUR +597"),
                  a.a.createElement("option", { value: "241" }, "SWZ +268"),
                  a.a.createElement("option", { value: "242" }, "SWE +46"),
                  a.a.createElement("option", { value: "243" }, "CHE +41"),
                  a.a.createElement("option", { value: "244" }, "SYR +963"),
                  a.a.createElement("option", { value: "245" }, "TWN +886"),
                  a.a.createElement("option", { value: "246" }, "TJK +992"),
                  a.a.createElement("option", { value: "247" }, "TZA +255"),
                  a.a.createElement("option", { value: "248" }, "THA +66"),
                  a.a.createElement("option", { value: "249" }, "TGO +228"),
                  a.a.createElement("option", { value: "250" }, "TKL +690"),
                  a.a.createElement("option", { value: "251" }, "TON +676"),
                  a.a.createElement("option", { value: "252" }, "TTO +868"),
                  a.a.createElement("option", { value: "253" }, "TUN +216"),
                  a.a.createElement("option", { value: "254" }, "TUR +90"),
                  a.a.createElement("option", { value: "255" }, "TKM +993"),
                  a.a.createElement("option", { value: "256" }, "TCA +649"),
                  a.a.createElement("option", { value: "257" }, "TUV +688"),
                  a.a.createElement("option", { value: "258" }, "UGA +256"),
                  a.a.createElement("option", { value: "259" }, "UKR +380"),
                  a.a.createElement("option", { value: "260" }, "URY +598"),
                  a.a.createElement("option", { value: "261" }, "UZB +998"),
                  a.a.createElement("option", { value: "262" }, "VUT +678"),
                  a.a.createElement("option", { value: "263" }, "VEN +58"),
                  a.a.createElement("option", { value: "264" }, "VNM +84"),
                  a.a.createElement("option", { value: "265" }, "VGB +284"),
                  a.a.createElement("option", { value: "266" }, "VIR +340"),
                  a.a.createElement("option", { value: "267" }, "WLF +681"),
                  a.a.createElement("option", { value: "268" }, "YEM +967"),
                  a.a.createElement("option", { value: "269" }, "YUG +381"),
                  a.a.createElement("option", { value: "270" }, "RNR +260"),
                  a.a.createElement("option", { value: "271" }, "ZWE +263")
                )
              ),
              a.a.createElement(
                "div",
                { className: "c-buyer-tagging__qna__field__mobile" },
                a.a.createElement("input", {
                  className: "c-buyer-tagging__qna__field__input mobile-no",
                  name: "alternativeNumber",
                  id: "alternativeNumber",
                  type: "text",
                  maxLength: 10,
                  value: l,
                  required: !0,
                  onKeyUp: function (e) {
                    var t,
                      r = document.querySelector("#isdPhone").value;
                    if (
                      (/^\d+$/.test(l) ||
                        ((t = l.replaceAll(/[\D]/g, "")),
                        s(t),
                        (document.querySelector("#alternativeNumber").value =
                          t)),
                      0 == r || 50 == r)
                    ) {
                      if (/^[^6789]/.exec(e.target.value))
                        return (
                          f("Enter a valid number starting with 6,7,8,9 only"),
                          m(!0),
                          !1
                        );
                      m(!1);
                    }
                  },
                  onChange: function (e) {
                    (e = (null == e ? void 0 : e.target).value), s(e);
                  },
                }),
                a.a.createElement(
                  "label",
                  {
                    className: "c-buyer-tagging__qna__field__label mobile-no",
                    htmlFor: "alternativeNumber",
                  },
                  "Mobile Number"
                ),
                u &&
                  a.a.createElement(
                    "div",
                    { className: "c-buyer-tagging__error" },
                    p
                  )
              )
            )
          ),
          4607 == c &&
            a.a.createElement(
              "div",
              {
                className: "c-buyer-tagging__qna__btn-maybe-later",
                style: { float: "left" },
                onClick: function () {
                  t({ ansInputId: o, ansInputText: "" });
                },
              },
              "Maybe Later"
            ),
          a.a.createElement(
            "div",
            {
              className: "c-buyer-tagging__qna__btn-next",
              style: { float: "right", width: "140px" },
              onClick: function () {
                return (
                  (e = { ansInputId: o, ansInputText: l }),
                  l.length < 10
                    ? (f("Please enter a 10-digit Mobile number!"), m(!0), !1)
                    : l == i.mobile
                    ? (f("Cannot use your own number"), m(!0), !1)
                    : (m(!1), void (u || t(e)))
                );
                var e;
              },
            },
            "Next",
            a.a.createElement("span", {
              className: "c-buyer-tagging__qna__btn-next__arrow",
            })
          )
        );
      }
      function Ct(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Nt(e) {
        var t = e.onSubmitAnswer,
          r = e.questionType,
          o = e.ansId,
          c =
            ((e = e.question),
            (function (e, t) {
              return (
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                  var r =
                    null == e
                      ? null
                      : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                        e["@@iterator"];
                  if (null != r) {
                    var n,
                      a,
                      o,
                      c,
                      i = [],
                      l = !0,
                      s = !1;
                    try {
                      if (((o = (r = r.call(e)).next), 0 === t)) {
                        if (Object(r) !== r) return;
                        l = !1;
                      } else
                        for (
                          ;
                          !(l = (n = o.call(r)).done) &&
                          (i.push(n.value), i.length !== t);
                          l = !0
                        );
                    } catch (e) {
                      (s = !0), (a = e);
                    } finally {
                      try {
                        if (
                          !l &&
                          null != r.return &&
                          ((c = r.return()), Object(c) !== c)
                        )
                          return;
                      } finally {
                        if (s) throw a;
                      }
                    }
                    return i;
                  }
                })(e, t) ||
                (function (e, t) {
                  var r;
                  if (e)
                    return "string" == typeof e
                      ? Ct(e, t)
                      : "Map" ===
                          (r =
                            "Object" ===
                              (r = Object.prototype.toString
                                .call(e)
                                .slice(8, -1)) && e.constructor
                              ? e.constructor.name
                              : r) || "Set" === r
                      ? Array.from(e)
                      : "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      ? Ct(e, t)
                      : void 0;
                })(e, t) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
              );
            })(Object(n.useState)(""), 2)),
          i = c[0],
          l = c[1];
        return a.a.createElement(
          "div",
          { className: "c-buyer-tagging__qna" },
          a.a.createElement("div", { className: "c-buyer-tagging__qna__q" }, e),
          a.a.createElement(
            "div",
            { className: "c-buyer-tagging__qna__a" },
            a.a.createElement(
              "div",
              { className: "c-buyer-tagging__qna__field" },
              a.a.createElement("input", {
                className: "c-buyer-tagging__qna__field__input",
                name: "alternativeTextNum",
                id: "alternativeTextNum",
                type:
                  "35906" === r
                    ? "number"
                    : "35907" === r
                    ? "text"
                    : "email" === r
                    ? "email"
                    : void 0,
                value: i,
                required: !0,
                onChange: function (e) {
                  (e = (null == e ? void 0 : e.target).value), l(e);
                },
              }),
              "email" === r &&
                a.a.createElement(
                  "label",
                  {
                    className: "c-buyer-tagging__qna__field__label",
                    htmlFor: "alternativeTextNum",
                  },
                  "Email"
                )
            )
          ),
          a.a.createElement(
            "div",
            {
              className: "c-buyer-tagging__qna__btn-next",
              onClick: function () {
                t({ ansInputId: o, ansInputText: i });
              },
            },
            "Next",
            a.a.createElement("span", {
              className: "c-buyer-tagging__qna__btn-next__arrow",
            })
          )
        );
      }
      r(1145);
      var kt = r(447),
        Pt = r(348),
        Tt = r(14),
        It = r(807);
      function Lt(e) {
        return (Lt =
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
      function At() {
        At = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a =
            (d = "function" == typeof Symbol ? Symbol : {}).iterator ||
            "@@iterator",
          o = d.asyncIterator || "@@asyncIterator",
          c = d.toStringTag || "@@toStringTag";
        function i(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
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
          i = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function l(e, t, r, a) {
          var o, c, i, l;
          (t = t && t.prototype instanceof m ? t : m),
            (t = Object.create(t.prototype)),
            (a = new E(a || []));
          return (
            n(t, "_invoke", {
              value:
                ((o = e),
                (c = r),
                (i = a),
                (l = "suspendedStart"),
                function (e, t) {
                  if ("executing" === l)
                    throw new Error("Generator is already running");
                  if ("completed" === l) {
                    if ("throw" === e) throw t;
                    return { value: void 0, done: !0 };
                  }
                  for (i.method = e, i.arg = t; ; ) {
                    var r = i.delegate;
                    if (
                      r &&
                      ((r = (function e(t, r) {
                        var n = r.method,
                          a = t.iterator[n];
                        return void 0 === a
                          ? ((r.delegate = null),
                            ("throw" === n &&
                              t.iterator.return &&
                              ((r.method = "return"),
                              (r.arg = void 0),
                              e(t, r),
                              "throw" === r.method)) ||
                              ("return" !== n &&
                                ((r.method = "throw"),
                                (r.arg = new TypeError(
                                  "The iterator does not provide a '" +
                                    n +
                                    "' method"
                                )))),
                            u)
                          : "throw" === (n = s(a, t.iterator, r.arg)).type
                          ? ((r.method = "throw"),
                            (r.arg = n.arg),
                            (r.delegate = null),
                            u)
                          : (a = n.arg)
                          ? a.done
                            ? ((r[t.resultName] = a.value),
                              (r.next = t.nextLoc),
                              "return" !== r.method &&
                                ((r.method = "next"), (r.arg = void 0)),
                              (r.delegate = null),
                              u)
                            : a
                          : ((r.method = "throw"),
                            (r.arg = new TypeError(
                              "iterator result is not an object"
                            )),
                            (r.delegate = null),
                            u);
                      })(r, i)),
                      r)
                    ) {
                      if (r === u) continue;
                      return r;
                    }
                    if ("next" === i.method) i.sent = i._sent = i.arg;
                    else if ("throw" === i.method) {
                      if ("suspendedStart" === l)
                        throw ((l = "completed"), i.arg);
                      i.dispatchException(i.arg);
                    } else "return" === i.method && i.abrupt("return", i.arg);
                    if (
                      ((l = "executing"), "normal" === (r = s(o, c, i)).type)
                    ) {
                      if (
                        ((l = i.done ? "completed" : "suspendedYield"),
                        r.arg === u)
                      )
                        continue;
                      return { value: r.arg, done: i.done };
                    }
                    "throw" === r.type &&
                      ((l = "completed"),
                      (i.method = "throw"),
                      (i.arg = r.arg));
                  }
                }),
            }),
            t
          );
        }
        function s(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        e.wrap = l;
        var u = {};
        function m() {}
        function p() {}
        function f() {}
        var d,
          y,
          b =
            ((y =
              (y =
                (i((d = {}), a, function () {
                  return this;
                }),
                Object.getPrototypeOf)) && y(y(O([])))) &&
              y !== t &&
              r.call(y, a) &&
              (d = y),
            (f.prototype = m.prototype = Object.create(d)));
        function v(e) {
          ["next", "throw", "return"].forEach(function (t) {
            i(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function h(e, t) {
          var a;
          n(this, "_invoke", {
            value: function (n, o) {
              function c() {
                return new t(function (a, c) {
                  !(function n(a, o, c, i) {
                    var l;
                    if ("throw" !== (a = s(e[a], e, o)).type)
                      return (o = (l = a.arg).value) &&
                        "object" == Lt(o) &&
                        r.call(o, "__await")
                        ? t.resolve(o.__await).then(
                            function (e) {
                              n("next", e, c, i);
                            },
                            function (e) {
                              n("throw", e, c, i);
                            }
                          )
                        : t.resolve(o).then(
                            function (e) {
                              (l.value = e), c(l);
                            },
                            function (e) {
                              return n("throw", e, c, i);
                            }
                          );
                    i(a.arg);
                  })(n, o, a, c);
                });
              }
              return (a = a ? a.then(c, c) : c());
            },
          });
        }
        function g(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function _(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function E(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(g, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t,
              n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length))
              return (
                (t = -1),
                ((n = function n() {
                  for (; ++t < e.length; )
                    if (r.call(e, t)) return (n.value = e[t]), (n.done = !1), n;
                  return (n.value = void 0), (n.done = !0), n;
                }).next = n)
              );
          }
          return { next: w };
        }
        function w() {
          return { value: void 0, done: !0 };
        }
        return (
          n(b, "constructor", { value: (p.prototype = f), configurable: !0 }),
          n(f, "constructor", { value: p, configurable: !0 }),
          (p.displayName = i(f, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            return (
              !!(e = "function" == typeof e && e.constructor) &&
              (e === p || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), i(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          v(h.prototype),
          i(h.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = h),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var c = new h(l(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? c
              : c.next().then(function (e) {
                  return e.done ? e.value : c.next();
                });
          }),
          v(b),
          i(b, c, "Generator"),
          i(b, a, function () {
            return this;
          }),
          i(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t,
              r = Object(e),
              n = [];
            for (t in r) n.push(t);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var t = n.pop();
                  if (t in r) return (e.value = t), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (E.prototype = {
            constructor: E,
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
                    r.call(this, t) &&
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
              function n(r, n) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; 0 <= a; --a) {
                var o = this.tryEntries[a],
                  c = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var i = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (i && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (i) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
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
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), _(r), u;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                var r,
                  n,
                  a = this.tryEntries[t];
                if (a.tryLoc === e)
                  return (
                    "throw" === (r = a.completion).type && ((n = r.arg), _(a)),
                    n
                  );
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                u
              );
            },
          }),
          e
        );
      }
      function xt(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Dt(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          Mt(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Bt(e, t, r, n, a, o, c) {
        try {
          var i = e[o](c),
            l = i.value;
        } catch (e) {
          return void r(e);
        }
        i.done ? t(l) : Promise.resolve(l).then(n, a);
      }
      function Ft(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          Mt(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Mt(e, t) {
        var r;
        if (e)
          return "string" == typeof e
            ? Dt(e, t)
            : "Map" ===
                (r =
                  "Object" ===
                    (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                  e.constructor
                    ? e.constructor.name
                    : r) || "Set" === r
            ? Array.from(e)
            : "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            ? Dt(e, t)
            : void 0;
      }
      function Dt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Rt(e) {
        var t = e.onSubmitAnswer,
          r =
            ((e = e.question),
            Object(o.d)(function (e) {
              return e.searchBean;
            })),
          c = Object(o.d)(function (e) {
            return e.searchAdditionalDataBean;
          }),
          i = (f = Ft(Object(n.useState)(null), 2))[0],
          l = f[1],
          s = (f = Ft(Object(n.useState)(!1), 2))[0],
          u = f[1],
          m = (f = Ft(Object(n.useState)(!0), 2))[0],
          p = f[1],
          f = Object(Pt.a)(r, c),
          d = ((f = Object(Pt.b)(f, r)), (c = Ft(Object(n.useState)(f), 2))[0]),
          y = c[1];
        f = (function () {
          e = At().mark(function e(t) {
            var n, a, o, c, i, l, s, u, m;
            return At().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      Tt.a.get(
                        "/homepageAutoSuggest?searchtxt=" +
                          t.text +
                          "&city=" +
                          r.city
                      )
                    );
                  case 2:
                    for (
                      i = (i = e.sent).data,
                        n = i.locationMap.LOCATION,
                        a = [],
                        o = 0;
                      o < n.length;
                      o++
                    )
                      "lt_pg" !== n[o].suggestType && a.push(n[o]);
                    if (
                      ((n = a),
                      (c = i.locationMap.PROJECT),
                      (i = i.locationMap.BUILDER),
                      (u = [
                        {
                          result: "Location",
                          state: "",
                          stateName: "",
                          city: "",
                          rfnum: "-1",
                          suggestType: "title",
                          latitude: "",
                          longitude: "",
                        },
                      ]),
                      (m = [
                        {
                          result: "Project",
                          state: "",
                          stateName: "",
                          city: "",
                          rfnum: "-2",
                          suggestType: "title",
                          latitude: "",
                          longitude: "",
                        },
                      ]),
                      (l = [
                        {
                          result: "Builder",
                          state: "",
                          stateName: "",
                          city: "",
                          rfnum: "-3",
                          suggestType: "title",
                          latitude: "",
                          longitude: "",
                        },
                      ]),
                      (s = []),
                      null != n &&
                        ((u = [].concat(u, xt(n))), (s = s.concat(u))),
                      null != c &&
                        ((u = [].concat(m, xt(c))), (s = s.concat(u))),
                      null != i &&
                        ((m = [].concat(l, xt(i))), (s = s.concat(m))),
                      s)
                    )
                      return e.abrupt("return", s);
                    e.next = 19;
                    break;
                  case 19:
                    return e.abrupt("return", null);
                  case 20:
                  case "end":
                    return e.stop();
                }
            }, e);
          });
          var e,
            t = function () {
              var t = this,
                r = arguments;
              return new Promise(function (n, a) {
                var o = e.apply(t, r);
                function c(e) {
                  Bt(o, n, a, c, i, "next", e);
                }
                function i(e) {
                  Bt(o, n, a, c, i, "throw", e);
                }
                c(void 0);
              });
            };
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
        return a.a.createElement(
          "div",
          { className: "c-buyer-tagging__auto-suggest" },
          a.a.createElement("div", { className: "c-buyer-tagging__qna__q" }, e),
          a.a.createElement(
            "div",
            { className: "search-filter__wrap-autosuggest" },
            a.a.createElement(
              "div",
              { className: "auto-suggest-head clearfix" },
              a.a.createElement("div", {
                className: "search-filter__head__back",
                onClick: function () {
                  u(!1),
                    0 == d.length
                      ? l(!0)
                      : (u(!1),
                        r.autoSuggestPreData &&
                          null != r.autoSuggestPreData &&
                          0 == d.length &&
                          setTimeout(function () {
                            document.querySelector(
                              "#keywordAutoSuggestDropDown .auto-suggest__input"
                            ).value = "Add More";
                          }, 6e3),
                        l(!1),
                        document
                          .querySelector("#keywordAutoSuggestDropDown")
                          .classList.remove(
                            "top-filter-autosuggest__drop-down"
                          ),
                        document
                          .querySelector("#keywordAutoSuggestDropDown")
                          .parentNode.classList.remove("fixed-auto-keword"),
                        (document.querySelector(
                          "#recent-proj-loc-data"
                        ).style.display = "none"),
                        0 < d.length &&
                          (p(!1),
                          setTimeout(function () {
                            p(!0);
                          }, 50)),
                        p(!1),
                        setTimeout(function () {
                          p(!0);
                        }, 50));
                },
              })
            ),
            a.a.createElement(
              "div",
              {
                id: "keywordAutoSuggestDropDown",
                className: "webkit__scroll-filter",
                onClick: function (e) {
                  l(!1),
                    u(!1),
                    document
                      .querySelector("#keywordAutoSuggestDropDown")
                      .classList.add("top-filter-autosuggest__drop-down"),
                    document
                      .querySelector("#keywordAutoSuggestDropDown")
                      .parentNode.classList.add("fixed-auto-keword"),
                    (document.querySelector(
                      "#recent-proj-loc-data"
                    ).style.display = "block");
                },
              },
              m &&
                a.a.createElement(kt.a, {
                  placeholder: "Enter City, Locality, Project",
                  inputFocusClass: "topCityLocality",
                  value: "",
                  searcher: f,
                  callback: function (e) {
                    console.log("getSelectedCityLocalityData", e),
                      y(e),
                      p(!1),
                      setTimeout(function () {
                        p(!0), console.log("preSelectedData", d);
                      }, 50);
                  },
                  delayapiCallBy: "300",
                  preSelectedData: d,
                  singleAutoSuggestType: "N",
                  checkIsPropsUpdate: !1,
                }),
              a.a.createElement(It.a, {
                cityError: i,
                propertyTypeAutoSuggestNullError: s,
              })
            )
          ),
          a.a.createElement(
            "div",
            {
              className: "c-buyer-tagging__qna__btn-next",
              onClick: function () {
                t({ localities: d });
              },
            },
            "Next",
            a.a.createElement("span", {
              className: "c-buyer-tagging__qna__btn-next__arrow",
            })
          )
        );
      }
      function qt(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            var r;
            if (e)
              return "string" == typeof e
                ? Ut(e, t)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
                        ? e.constructor.name
                        : r) || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? Ut(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Ut(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Gt(e) {
        var t = e.ansId,
          r = e.question,
          o = e.onSubmitAnswer,
          c = (e = qt(Object(n.useState)(""), 2))[0],
          i = e[1],
          l = (e = qt(Object(n.useState)(!1), 2))[0],
          s = e[1];
        return a.a.createElement(
          "div",
          { className: "c-buyer-tagging__qna" },
          a.a.createElement("div", { className: "c-buyer-tagging__qna__q" }, r),
          a.a.createElement(
            "div",
            { className: "c-buyer-tagging__qna__a" },
            a.a.createElement(
              "div",
              { className: "c-buyer-tagging__qna__field" },
              a.a.createElement("input", {
                className: "c-buyer-tagging__qna__field__input",
                name: "alternativeEmail",
                id: "alternativeEmail",
                type: "text",
                value: c,
                required: !0,
                onBlur: function (e) {
                  if (0 == e.target.value.length) return s(!1), !1;
                  e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                    ? s(!1)
                    : s(!0);
                },
                onChange: function (e) {
                  (e = (null == e ? void 0 : e.target).value), i(e);
                },
              }),
              a.a.createElement(
                "label",
                {
                  className: "c-buyer-tagging__qna__field__label",
                  htmlFor: "alternativeEmail",
                },
                "Email"
              ),
              l &&
                a.a.createElement(
                  "div",
                  { className: "c-buyer-tagging__error" },
                  "Please enter valid Email Id."
                )
            )
          ),
          a.a.createElement(
            "div",
            {
              className: "c-buyer-tagging__qna__btn-next",
              onClick: function () {
                l || o({ ansInputId: t, ansInputText: c });
              },
            },
            "Next",
            a.a.createElement("span", {
              className: "c-buyer-tagging__qna__btn-next__arrow",
            })
          )
        );
      }
      function Yt(e) {
        var t = e.dataQuestions,
          r = e.submitAnswer,
          n = e.category;
        e = e.userData;
        return null == t
          ? a.a.createElement(a.a.Fragment, null)
          : (setTimeout(function () {
              var e, t;
              document
                .querySelectorAll(".c-buyer-tagging__qna__item__input:checked")
                .forEach(function (e, t) {
                  e.checked = !1;
                }),
                (e = document.querySelector(
                  ".c-buyer-tagging__qna__q"
                ).offsetHeight),
                (t = document.querySelector(".c-buyer-tagging__qna__a")) &&
                  ((t.style.maxHeight = 42 < e ? "124px" : "150px"), 68 < e) &&
                  (t.style.maxHeight = "98px");
            }, 150),
            console.log(t, "dataQuestions"),
            a.a.createElement(
              "div",
              { className: "c-buyer-tagging__qna-wrap" },
              ("35901" == t.type || "35902" == t.type) &&
                a.a.createElement(gt, {
                  questionType: t.type,
                  question: t.label,
                  label: t.ansList,
                  queid: t.queid,
                  onSubmitAnswer: r,
                }),
              "35917" === t.type &&
                a.a.createElement(Ot, {
                  onSubmitAnswer: function (e) {
                    return r(e);
                  },
                  questionType: t.type,
                  question: t.label,
                  category: n,
                }),
              ("35907" === t.type || "35906" === t.type) &&
                (4579 === t.queid || 4580 === t.queid
                  ? a.a.createElement(Gt, {
                      ansId:
                        null |
                        (null == t || null == (n = t.ansList[0])
                          ? void 0
                          : n.ansid),
                      question: t.label,
                      onSubmitAnswer: r,
                    })
                  : 4577 === t.queid || 4578 === t.queid
                  ? a.a.createElement(jt, {
                      onSubmitAnswer: r,
                      question: t.label,
                      ansId:
                        null |
                        (null == t || null == (n = t.ansList[0])
                          ? void 0
                          : n.ansid),
                      queid: t.queid,
                      userData: e,
                    })
                  : a.a.createElement(Nt, {
                      onSubmitAnswer: r,
                      questionType: t.type,
                      ansId:
                        null |
                        (null == t || null == (n = t.ansList[0])
                          ? void 0
                          : n.ansid),
                      question: t.label,
                    })),
              "35922" === t.type &&
                a.a.createElement(jt, {
                  onSubmitAnswer: r,
                  question: t.label,
                  ansId:
                    null |
                    (null == t || null == (n = t.ansList[0])
                      ? void 0
                      : n.ansid),
                  queid: t.queid,
                  userData: e,
                }),
              "35911" === t.type &&
                a.a.createElement(Rt, {
                  onSubmitAnswer: function (e) {
                    return r(e);
                  },
                  questionType: t.type,
                  question: t.label,
                })
            ));
      }
      var Vt = r(556),
        Wt = r(255),
        Ht = function (e, t) {
          var r = "srp";
          return (
            Object(ce.t)(e.searchType) || (r += " - " + e.searchType),
            Object(ce.t)(t.category) ||
              (r += "R" == t.category ? " - rent" : " - buy"),
            r + " - " + t.propTypeD
          );
        };
      function Kt(e) {
        return (Kt =
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
      function zt(e, t) {
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function $t(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? zt(Object(r), !0).forEach(function (t) {
                var n, a;
                (n = e),
                  (a = r[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== Kt(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 === r) return String(e);
                        if ("object" !== Kt((r = r.call(e, "string"))))
                          return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === Kt(e) ? e : String(e)
                    );
                  })(t)) in n
                    ? Object.defineProperty(n, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[t] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : zt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function Jt() {
        Jt = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a =
            (d = "function" == typeof Symbol ? Symbol : {}).iterator ||
            "@@iterator",
          o = d.asyncIterator || "@@asyncIterator",
          c = d.toStringTag || "@@toStringTag";
        function i(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
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
          i = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function l(e, t, r, a) {
          var o, c, i, l;
          (t = t && t.prototype instanceof m ? t : m),
            (t = Object.create(t.prototype)),
            (a = new E(a || []));
          return (
            n(t, "_invoke", {
              value:
                ((o = e),
                (c = r),
                (i = a),
                (l = "suspendedStart"),
                function (e, t) {
                  if ("executing" === l)
                    throw new Error("Generator is already running");
                  if ("completed" === l) {
                    if ("throw" === e) throw t;
                    return { value: void 0, done: !0 };
                  }
                  for (i.method = e, i.arg = t; ; ) {
                    var r = i.delegate;
                    if (
                      r &&
                      ((r = (function e(t, r) {
                        var n = r.method,
                          a = t.iterator[n];
                        return void 0 === a
                          ? ((r.delegate = null),
                            ("throw" === n &&
                              t.iterator.return &&
                              ((r.method = "return"),
                              (r.arg = void 0),
                              e(t, r),
                              "throw" === r.method)) ||
                              ("return" !== n &&
                                ((r.method = "throw"),
                                (r.arg = new TypeError(
                                  "The iterator does not provide a '" +
                                    n +
                                    "' method"
                                )))),
                            u)
                          : "throw" === (n = s(a, t.iterator, r.arg)).type
                          ? ((r.method = "throw"),
                            (r.arg = n.arg),
                            (r.delegate = null),
                            u)
                          : (a = n.arg)
                          ? a.done
                            ? ((r[t.resultName] = a.value),
                              (r.next = t.nextLoc),
                              "return" !== r.method &&
                                ((r.method = "next"), (r.arg = void 0)),
                              (r.delegate = null),
                              u)
                            : a
                          : ((r.method = "throw"),
                            (r.arg = new TypeError(
                              "iterator result is not an object"
                            )),
                            (r.delegate = null),
                            u);
                      })(r, i)),
                      r)
                    ) {
                      if (r === u) continue;
                      return r;
                    }
                    if ("next" === i.method) i.sent = i._sent = i.arg;
                    else if ("throw" === i.method) {
                      if ("suspendedStart" === l)
                        throw ((l = "completed"), i.arg);
                      i.dispatchException(i.arg);
                    } else "return" === i.method && i.abrupt("return", i.arg);
                    if (
                      ((l = "executing"), "normal" === (r = s(o, c, i)).type)
                    ) {
                      if (
                        ((l = i.done ? "completed" : "suspendedYield"),
                        r.arg === u)
                      )
                        continue;
                      return { value: r.arg, done: i.done };
                    }
                    "throw" === r.type &&
                      ((l = "completed"),
                      (i.method = "throw"),
                      (i.arg = r.arg));
                  }
                }),
            }),
            t
          );
        }
        function s(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        e.wrap = l;
        var u = {};
        function m() {}
        function p() {}
        function f() {}
        var d,
          y,
          b =
            ((y =
              (y =
                (i((d = {}), a, function () {
                  return this;
                }),
                Object.getPrototypeOf)) && y(y(O([])))) &&
              y !== t &&
              r.call(y, a) &&
              (d = y),
            (f.prototype = m.prototype = Object.create(d)));
        function v(e) {
          ["next", "throw", "return"].forEach(function (t) {
            i(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function h(e, t) {
          var a;
          n(this, "_invoke", {
            value: function (n, o) {
              function c() {
                return new t(function (a, c) {
                  !(function n(a, o, c, i) {
                    var l;
                    if ("throw" !== (a = s(e[a], e, o)).type)
                      return (o = (l = a.arg).value) &&
                        "object" == Kt(o) &&
                        r.call(o, "__await")
                        ? t.resolve(o.__await).then(
                            function (e) {
                              n("next", e, c, i);
                            },
                            function (e) {
                              n("throw", e, c, i);
                            }
                          )
                        : t.resolve(o).then(
                            function (e) {
                              (l.value = e), c(l);
                            },
                            function (e) {
                              return n("throw", e, c, i);
                            }
                          );
                    i(a.arg);
                  })(n, o, a, c);
                });
              }
              return (a = a ? a.then(c, c) : c());
            },
          });
        }
        function g(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function _(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function E(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(g, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t,
              n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length))
              return (
                (t = -1),
                ((n = function n() {
                  for (; ++t < e.length; )
                    if (r.call(e, t)) return (n.value = e[t]), (n.done = !1), n;
                  return (n.value = void 0), (n.done = !0), n;
                }).next = n)
              );
          }
          return { next: w };
        }
        function w() {
          return { value: void 0, done: !0 };
        }
        return (
          n(b, "constructor", { value: (p.prototype = f), configurable: !0 }),
          n(f, "constructor", { value: p, configurable: !0 }),
          (p.displayName = i(f, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            return (
              !!(e = "function" == typeof e && e.constructor) &&
              (e === p || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), i(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          v(h.prototype),
          i(h.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = h),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var c = new h(l(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? c
              : c.next().then(function (e) {
                  return e.done ? e.value : c.next();
                });
          }),
          v(b),
          i(b, c, "Generator"),
          i(b, a, function () {
            return this;
          }),
          i(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t,
              r = Object(e),
              n = [];
            for (t in r) n.push(t);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var t = n.pop();
                  if (t in r) return (e.value = t), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (E.prototype = {
            constructor: E,
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
                    r.call(this, t) &&
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
              function n(r, n) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; 0 <= a; --a) {
                var o = this.tryEntries[a],
                  c = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var i = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (i && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (i) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
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
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), _(r), u;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                var r,
                  n,
                  a = this.tryEntries[t];
                if (a.tryLoc === e)
                  return (
                    "throw" === (r = a.completion).type && ((n = r.arg), _(a)),
                    n
                  );
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                u
              );
            },
          }),
          e
        );
      }
      function Zt(e, t, r, n, a, o, c) {
        try {
          var i = e[o](c),
            l = i.value;
        } catch (e) {
          return void r(e);
        }
        i.done ? t(l) : Promise.resolve(l).then(n, a);
      }
      function Qt(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, a) {
            var o = e.apply(t, r);
            function c(e) {
              Zt(o, n, a, c, i, "next", e);
            }
            function i(e) {
              Zt(o, n, a, c, i, "throw", e);
            }
            c(void 0);
          });
        };
      }
      function Xt(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            var r;
            if (e)
              return "string" == typeof e
                ? er(e, t)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
                        ? e.constructor.name
                        : r) || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? er(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function er(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function tr(e) {
        function t(e, t) {
          return e.map(function (e) {
            return { id: t ? e.rfnum : e.key, name: t ? e.result : e.value };
          });
        }
        function r(e) {
          var t = "";
          return (
            Object(p.a)(e) ||
              e.map(function (e) {
                "" !== t && (t += ","), (t += e.name);
              }),
            t
          );
        }
        var c,
          i = e.setShowBuyerTagging,
          l = e.showBuyerTagging,
          s = e.userType,
          u =
            ((e = e.closeContactForm),
            Object(o.d)(function (e) {
              return e.contactData;
            })),
          m = Xt(a.a.useState(null), 2),
          f = m[0],
          d = m[1],
          y = (m = Xt(a.a.useState(!1), 2))[0],
          b = m[1],
          v = (m = Xt(a.a.useState(null), 2))[0],
          h = m[1],
          g = Object(o.d)(function (e) {
            return e.clientBean;
          }),
          _ = Object(o.d)(function (e) {
            return e.searchAdditionalDataBean;
          }),
          E = Object(o.d)(function (e) {
            return e.userInfoData;
          }),
          O = Object(o.d)(function (e) {
            return e.buyerTaggingContactObj;
          }),
          w = g.buyerTaggingBean,
          S = Object(o.c)(),
          j =
            ((m = w),
            (C = E),
            (c = _),
            {
              cd165: Object(ce.t)(c.searchType) ? "" : c.searchType,
              cd39:
                Object(ce.t)(m.category) || "R" != m.category ? "Sale" : "Rent",
              cd102: Math.round(new Date().getTime() / 1e3),
              cd162: Object(ce.t)(C.userEmail) ? "" : C.userEmail,
              cd56: Ht(c, m),
            }),
          C =
            (console.log("countBT-" + l + "-" + y),
            { mobile: E.userMobile, email: E.userEmail });
        return (
          Object(n.useEffect)(
            function () {
              if (null != w) {
                if (
                  (console.log("inside buyer tagging wrapper"),
                  !Object(p.c)(O) &&
                    !Object(p.a)(O.totalContactCount) &&
                    null != w)
                ) {
                  if (
                    "Agent" == w.userType &&
                    parseInt(O.totalContactCount) <=
                      parseInt(O.buyerTaggingAgentContactCount)
                  )
                    return void i(!1);
                  if (
                    "Builder" == w.userType &&
                    parseInt(O.totalContactCount) <=
                      parseInt(O.buyerTaggingBuilderContactCount)
                  )
                    return void i(!1);
                  if (
                    "Owner" == w.userType &&
                    "Y" == w.isPaidUser &&
                    parseInt(O.totalContactCount) <=
                      parseInt(O.buyerTaggingPaidOwnerContactCount)
                  )
                    return void i(!1);
                  if (
                    "Owner" == w.userType &&
                    "N" == w.isPaidUser &&
                    parseInt(O.totalContactCount) <=
                      parseInt(O.buyerTaggingFreeOwnerContactCount)
                  )
                    return void i(!1);
                }
                var e, r, n, a, o;
                null != g &&
                  void 0 !== g.buyerTaggingBean &&
                  null !== g.buyerTaggingBean &&
                  ((e = be.a.readCookie("userNTrackId")),
                  (r = "commercial" == _.searchType ? "true" : "false"),
                  (n = be.a.readCookie("iniInt")),
                  (a = be.a.readCookie("finInt")),
                  (o = {
                    module: "post_contact",
                    pageName: "",
                    category: w.category,
                    isCommercial: r,
                    propertyType: w.propertyType,
                    intentId: "",
                    userEmail: E.userEmail,
                    userMobile: E.userMobile,
                    currentBrowseSessionId: e,
                    contactId: w.contactId,
                    price: w.price,
                    locId: w.locId,
                    cityId: w.cityId,
                    checkBrokerConnect: "",
                    userName: E.userName,
                    loc: "",
                    downloadReport: "",
                    iniInt: n,
                    finInt: a,
                    psmName: "",
                    locality:
                      null != _.localityNames ? t(_.localityNames, !1) : null,
                    budgetMin: _.searchForm.budgetMin,
                    budgetMax: _.searchForm.budgetMax,
                    bhk: _.searchForm.bedRoomDesc,
                    propertyTypeList: _.searchForm.propTypeDesc,
                    source: "SRP",
                    isMobile: null == _.deviceType ? "WEB" : "WAP",
                  }),
                  (function () {
                    var e = Qt(
                      Jt().mark(function e() {
                        return Jt().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  Vt.a.post("/getContactFormQuestionnaire", o)
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
                  })()()
                    .then(function (e) {
                      console.log("get question api called ", e),
                        null !== e &&
                        void 0 !== e.data &&
                        null !== e.data &&
                        void 0 !== e.data.responseBean &&
                        null !== e.data.responseBean &&
                        void 0 !== e.data.responseBean.qlist &&
                        null !== e.data.responseBean.qlist &&
                        0 < e.data.responseBean.qlist.length
                          ? (e.data.success ? i(!0) : i(!1),
                            b(!0),
                            h(e.data),
                            d(e.data.responseBean.qlist[0]),
                            S(
                              Object(Wt.a)(
                                $t(
                                  {
                                    event: "event_tracking",
                                    eventName: "buyer_tagging",
                                    nonInteraction: !0,
                                    eventCategory: "new buyer tagging",
                                    eventAction:
                                      e.data.responseBean.intent +
                                      "-" +
                                      e.data.responseBean.questionCount +
                                      "-" +
                                      e.data.qIds +
                                      "-" +
                                      e.data.responseBean.qlist[0].label,
                                    eventLabel: "impression",
                                    eventValue: "",
                                    cd10:
                                      1 == e.data.responseBean.questionCount
                                        ? "new"
                                        : "repeat",
                                  },
                                  j
                                )
                              )
                            ),
                            console.log(f))
                          : i(!1);
                    })
                    .catch(function (e) {
                      console.log("get question api err : ", e), i(!1), b(!1);
                    }));
              }
            },
            [w]
          ),
          a.a.createElement(
            a.a.Fragment,
            null,
            1 == l &&
              u.formScreen &&
              u.formScreen === R.u &&
              a.a.createElement(rr, {
                dataQuestions: f,
                submitAnswer: function (e) {
                  var n,
                    a,
                    o = be.a.readCookie("userNTrackId"),
                    c =
                      (console.log("answer data for next : ", e),
                      4605 == (null == e ? void 0 : e.queid) &&
                        "Y" == _.redirectPostPropertyFromBT &&
                        0 <
                          (null == f || null == (n = f.ansList)
                            ? void 0
                            : n.filter(function (t) {
                                return (
                                  (null == t ? void 0 : t.ansid) == e.ansid &&
                                  (null == t ? void 0 : t.label.includes("Yes"))
                                );
                              })
                          ).length &&
                        (window.open(
                          "https://post.magicbricks.com/?utm_source=owner&utm_medium=post_contact&utm_campaign=buyer_tagging_redirect",
                          "_blank"
                        ),
                        S(
                          Object(Wt.a)(
                            $t(
                              {
                                event: "event_tracking",
                                eventName: "buyer_tagging",
                                nonInteraction: !1,
                                eventCategory: "Buyer as Owner",
                                eventAction:
                                  "Post Contact | " +
                                  ("S" == w.category ? "Sale" : "Rent"),
                                eventLabel: "Post Property redirection",
                                eventValue: "",
                              },
                              j
                            )
                          )
                        )),
                      {
                        qnsIds: f.queid,
                        ansIds: e.ansid
                          ? ((n = e.ansid),
                            (a = ""),
                            Array.isArray(n)
                              ? (n.forEach(function (e) {
                                  a = a + "," + e;
                                }),
                                a.substring(1))
                              : n)
                          : "",
                        contactId: w.contactId,
                        intentIndex: v.intentIndex,
                        currentBrowseSessionId: o,
                        userEmail: E.userEmail,
                        userMobile: E.userMobile,
                        propertyType: w.propertyType,
                        price: w.price,
                        locId: w.locId,
                        cityId: w.cityId,
                        category: w.category,
                        ty: "",
                        areaMin: "",
                        areaMax: "",
                        areaUnit: "",
                        bd: "",
                        quesNo: v.quesNo,
                        budMin: e.minBudget || "",
                        budMax: e.maxBudget || "",
                        checkBrokerConnect: v.chkBkrCnt,
                        userName: E.userName,
                        downloadReport: v.downloadReport,
                        autoCt: "",
                        autoLoc: "",
                        autoPSM: "",
                        autoSuggLoc:
                          null != e.localities ? t(e.localities, !0) : null,
                        rawQArr: f.queid,
                        rawTypeArr: f.type,
                        module: v.module,
                        ubiAgent: "",
                        stop: "",
                        ansInputId: e.ansInputId || "",
                        ansInputTxt: e.ansInputText,
                        psmName: "",
                        locality:
                          null != _.localityNames
                            ? t(_.localityNames, !1)
                            : null,
                        budgetMin:
                          "null" != _.searchForm.budgetMin
                            ? _.searchForm.budgetMin
                            : null,
                        budgetMax:
                          "null" != _.searchForm.budgetMax
                            ? _.searchForm.budgetMax
                            : null,
                        bhk: _.searchForm.bedRoomDesc,
                        propertyTypeList: _.searchForm.propTypeDesc,
                        source: "SRP",
                        isMobile: null == _.deviceType ? "WEB" : "WAP",
                      });
                  (function () {
                    var e = Qt(
                      Jt().mark(function e() {
                        return Jt().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  Vt.a.post("/submitAnswerOfQuestion", c)
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
                  })()()
                    .then(function (t) {
                      var n, a;
                      console.log("submit answer called ", t),
                        null !== t &&
                        void 0 !== t.data &&
                        null !== t.data &&
                        void 0 !== t.data.responseBean &&
                        null !== t.data.responseBean
                          ? (t.data.success
                              ? (i(!0),
                                (a =
                                  "submit" +
                                  (Object(p.a)(e.ansid) ? "" : "-" + e.ansid) +
                                  (Object(p.a)(e.ansInputId)
                                    ? ""
                                    : "-" + e.ansInputId) +
                                  (Object(p.a)(e.ansInputText)
                                    ? ""
                                    : "-" + e.ansInputText)),
                                (n = r(c.autoSuggLoc)),
                                (a =
                                  "submit" == a
                                    ? a + (Object(p.a)(n) ? "" : "-" + n)
                                    : a),
                                S(
                                  Object(Wt.a)(
                                    $t(
                                      {
                                        event: "event_tracking",
                                        eventName: "buyer_tagging",
                                        nonInteraction: !1,
                                        eventCategory: "new buyer tagging",
                                        eventAction:
                                          v.responseBean.intent +
                                          "-" +
                                          v.responseBean.questionCount +
                                          "-" +
                                          f.queid +
                                          "-" +
                                          f.label,
                                        eventLabel: a,
                                        eventValue: "",
                                        cd10:
                                          1 == v.responseBean.questionCount
                                            ? "new"
                                            : "repeat",
                                      },
                                      j
                                    )
                                  )
                                ))
                              : i(!1),
                            void 0 !== t.data.responseBean.qlist &&
                            null !== t.data.responseBean.qlist &&
                            0 < t.data.responseBean.qlist.length
                              ? (h(t.data),
                                d(t.data.responseBean.qlist[0]),
                                S(
                                  Object(Wt.a)(
                                    $t(
                                      {
                                        event: "event_tracking",
                                        eventName: "buyer_tagging",
                                        nonInteraction: !0,
                                        eventCategory: "new buyer tagging",
                                        eventAction:
                                          t.data.responseBean.intent +
                                          "-" +
                                          t.data.responseBean.questionCount +
                                          "-" +
                                          t.data.qIds +
                                          "-" +
                                          t.data.responseBean.qlist[0].label,
                                        eventLabel: "impression",
                                        eventValue: "",
                                        cd10:
                                          1 == t.data.responseBean.questionCount
                                            ? "new"
                                            : "repeat",
                                      },
                                      j
                                    )
                                  )
                                ),
                                console.log(f))
                              : i(!1),
                            t.data.responseBean.questionLimitReached &&
                              be.a.createCookie("showBuyerTagging", "N", 365))
                          : i(!1);
                    })
                    .catch(function (t) {
                      console.log("submit answer api err : ", t);
                      var n =
                          "error-" +
                          t +
                          (Object(p.a)(e.ansid) ? "" : "-" + e.ansid) +
                          (Object(p.a)(e.ansInputId)
                            ? "" + !Object(p.a)(e.ansInputText)
                              ? "-" + e.ansInputText
                              : ""
                            : "-" + e.ansInputId),
                        a = r(c.autoSuggLoc);
                      n =
                        n == "error-" + t
                          ? n + (Object(p.a)(a) ? "" : "-" + a)
                          : n;
                      S(
                        Object(Wt.a)(
                          $t(
                            {
                              event: "event_tracking",
                              eventName: "buyer_tagging",
                              nonInteraction: !1,
                              eventCategory: "new buyer tagging",
                              eventAction:
                                v.responseBean.intent +
                                "-" +
                                v.responseBean.questionCount +
                                "-" +
                                f.queid +
                                "-" +
                                f.label,
                              eventLabel: n,
                              eventValue: "",
                              cd10:
                                1 == v.responseBean.questionCount
                                  ? "new"
                                  : "repeat",
                            },
                            j
                          )
                        )
                      );
                    });
                },
                skipButtonClicked: function () {
                  i(!1),
                    be.a.createCookie("showBuyerTagging", "N", 365),
                    S(
                      Object(Wt.a)(
                        $t(
                          {
                            event: "event_tracking",
                            eventName: "buyer_tagging",
                            nonInteraction: !1,
                            eventCategory: "new buyer tagging",
                            eventAction:
                              v.responseBean.intent +
                              "-" +
                              v.responseBean.questionCount +
                              "-" +
                              f.queid,
                            eventLabel: "form skipped",
                            eventValue: "",
                            cd10:
                              1 == v.responseBean.questionCount
                                ? "new"
                                : "repeat",
                          },
                          j
                        )
                      )
                    );
                },
                category: w.category,
                userType: s,
                closeContactForm: e,
                userData: C,
              })
          )
        );
      }
      var rr = a.a.memo(function (e) {
        var t = e.dataQuestions,
          r = e.submitAnswer,
          n = e.skipButtonClicked,
          o = e.category,
          c = e.userType,
          i = e.closeContactForm;
        return (
          (e = e.userData),
          a.a.createElement(
            "div",
            { className: "c-buyer-tagging-wrap" },
            a.a.createElement(
              "div",
              { className: "c-buyer-tagging" },
              a.a.createElement("div", {
                className: "c-buyer-tagging__close",
                onClick: i,
              }),
              a.a.createElement(
                "div",
                { className: "c-buyer-tagging__thanks" },
                a.a.createElement(
                  "div",
                  { className: "c-buyer-tagging__thanks-wrap" },
                  a.a.createElement(
                    "div",
                    { className: "c-buyer-tagging__thanks__title" },
                    c,
                    " details are being shared!"
                  )
                ),
                a.a.createElement(
                  "div",
                  { className: "c-buyer-tagging__content" },
                  a.a.createElement(
                    "div",
                    { className: "c-buyer-tagging__thanks__msg" },
                    "Meanwhile, help us with more details to get the best property"
                  ),
                  a.a.createElement(Yt, {
                    dataQuestions: t,
                    submitAnswer: r,
                    category: o,
                    userData: e,
                  })
                )
              ),
              a.a.createElement(
                "div",
                {
                  className: "c-buyer-tagging__btn-skip",
                  onClick: function (e) {
                    e.stopPropagation(), n();
                  },
                },
                "Skip"
              )
            )
          )
        );
      });
      function nr(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            var r;
            if (e)
              return "string" == typeof e
                ? ar(e, t)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
                        ? e.constructor.name
                        : r) || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? ar(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ar(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function or(e) {
        var t = Object(o.d)(function (e) {
            return e.form.contactForm;
          }),
          r = Object(o.d)(function (e) {
            return e.contactData;
          }),
          c = nr(Object(n.useState)("sec"), 2),
          i = c[0],
          l = c[1],
          s = (c = nr(Object(n.useState)("Session expired in "), 2))[0],
          u = c[1],
          f = (c = nr(Object(n.useState)(e.time + " "), 2))[0],
          d = c[1],
          y = Object(o.c)();
        return (
          a.a.useEffect(
            function () {
              (!Object(p.a)(e.time) && e.time.startsWith("00")) ||
              (!Object(p.a)(e.time) && e.time.startsWith("-1"))
                ? (u("Session expired"), d(""), l(""))
                : (u("Session expired in "), d(e.time + " "), l("sec"));
            },
            [e.time]
          ),
          a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              "div",
              { className: "contact-form__missed-call__session" },
              a.a.createElement(
                "div",
                { className: "contact-form__missed-call__session--expired" },
                s,
                " ",
                a.a.createElement("span", null, " ", f),
                " ",
                i
              ),
              Object(p.a)(e.tryAgainStatus) &&
                a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(
                    "div",
                    {
                      className:
                        "contact-form__missed-call__session--try-again",
                      onClick: function () {
                        return (
                          console.log("Inside tryAgain method..."),
                          console.log("Phone number picked : " + e.mobile),
                          console.log("ISD Picked : " + t.values.selectIsd),
                          C(e.setTime, e.hoursMinSecs),
                          0 != e.time && e.setTryAgainState("disable"),
                          (r = T.get(
                            "/checkOtpStatus?phoneNumber=" +
                              e.mobile +
                              "&isd=" +
                              t.values.selectIsd
                          ))
                            .then(function (t) {
                              console.log(
                                "my response ::::: 49:::::::::" + t.status
                              ),
                                1 == t.data
                                  ? (console.log("checkOtpStatus success"),
                                    console.log(r),
                                    e.setCallTopMatchesState(!0),
                                    e.onSubmit())
                                  : (console.log(
                                      "Error in checkOtpStatus : " + t
                                    ),
                                    console.log(r),
                                    e.setCallTopMatchesState(!1));
                            })
                            .catch(function (e) {
                              console.log("Error caught : " + e);
                            })
                        );
                        var r;
                      },
                    },
                    "Try again now"
                  ),
                  a.a.createElement(
                    "div",
                    {
                      className: "contact-form__missed-call__session--or-text",
                    },
                    "OR"
                  )
                )
            ),
            a.a.createElement(
              "div",
              {
                className: "contact-form__resend__whatsapp " + e.tryAgainStatus,
                id: "smsCodeSent",
                onClick: function () {
                  console.log("formScreen : " + r.formScreen),
                    console.log("Props passed are : " + JSON.stringify(e)),
                    e.onClickReSendCode("disable", !0, !1),
                    e.switchToOtpScreen(!0);
                },
              },
              a.a.createElement(
                "span",
                { className: "contact-form__resend__whatsapp-icon" },
                a.a.createElement(
                  "svg",
                  {
                    width: 24,
                    height: 24,
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  a.a.createElement(
                    "g",
                    { fillRule: "nonzero", fill: "none" },
                    a.a.createElement("path", {
                      d: "M20.52 3.449C18.24 1.245 15.24 0 12.045 0 2.875 0-2.883 9.935 1.696 17.838L0 24l6.335-1.652c2.76 1.491 5.02 1.359 5.716 1.447 10.633 0 15.926-12.864 8.454-20.307l.015-.039z",
                      fill: "#F5F5F5",
                    }),
                    a.a.createElement("path", {
                      d: "m12.067 21.751-.006-.001h-.016c-3.182 0-5.215-1.507-5.415-1.594l-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 0 1-1.516-5.26c0-8.793 10.745-13.19 16.963-6.975 6.203 6.15 1.848 16.875-7.026 16.875z",
                      fill: "#4CAF50",
                    }),
                    a.a.createElement("path", {
                      d: "m17.507 14.307-.01.075c-.3-.15-1.766-.867-2.04-.966-.612-.227-.44-.036-1.616 1.312-.175.195-.35.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.293-.506.32-.578.878-1.634.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.576-.05-.997-.042-1.368.344-1.614 1.774-1.207 3.604.174 5.55 2.714 3.552 4.16 4.206 6.804 5.114.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z",
                      fill: "#FFF",
                    })
                  )
                )
              ),
              a.a.createElement(
                "span",
                { className: "contact-form__resend__whatsapp-text" },
                "Receive on WhatsApp"
              )
            ),
            a.a.createElement(
              "div",
              {
                className: "contact-form__chat-link " + e.chatLinkStatus,
                id: "chatOnOtp",
              },
              "Facing Issue?",
              a.a.createElement(
                "a",
                {
                  href: "javascript:void(0)",
                  onClick: function () {
                    return Object(m.c)(t, y);
                  },
                },
                "Chat with us"
              )
            )
          )
        );
      }
      function cr(e) {
        return (cr =
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
      function ir() {
        ir = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a =
            (d = "function" == typeof Symbol ? Symbol : {}).iterator ||
            "@@iterator",
          o = d.asyncIterator || "@@asyncIterator",
          c = d.toStringTag || "@@toStringTag";
        function i(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
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
          i = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function l(e, t, r, a) {
          var o, c, i, l;
          (t = t && t.prototype instanceof m ? t : m),
            (t = Object.create(t.prototype)),
            (a = new E(a || []));
          return (
            n(t, "_invoke", {
              value:
                ((o = e),
                (c = r),
                (i = a),
                (l = "suspendedStart"),
                function (e, t) {
                  if ("executing" === l)
                    throw new Error("Generator is already running");
                  if ("completed" === l) {
                    if ("throw" === e) throw t;
                    return { value: void 0, done: !0 };
                  }
                  for (i.method = e, i.arg = t; ; ) {
                    var r = i.delegate;
                    if (
                      r &&
                      ((r = (function e(t, r) {
                        var n = r.method,
                          a = t.iterator[n];
                        return void 0 === a
                          ? ((r.delegate = null),
                            ("throw" === n &&
                              t.iterator.return &&
                              ((r.method = "return"),
                              (r.arg = void 0),
                              e(t, r),
                              "throw" === r.method)) ||
                              ("return" !== n &&
                                ((r.method = "throw"),
                                (r.arg = new TypeError(
                                  "The iterator does not provide a '" +
                                    n +
                                    "' method"
                                )))),
                            u)
                          : "throw" === (n = s(a, t.iterator, r.arg)).type
                          ? ((r.method = "throw"),
                            (r.arg = n.arg),
                            (r.delegate = null),
                            u)
                          : (a = n.arg)
                          ? a.done
                            ? ((r[t.resultName] = a.value),
                              (r.next = t.nextLoc),
                              "return" !== r.method &&
                                ((r.method = "next"), (r.arg = void 0)),
                              (r.delegate = null),
                              u)
                            : a
                          : ((r.method = "throw"),
                            (r.arg = new TypeError(
                              "iterator result is not an object"
                            )),
                            (r.delegate = null),
                            u);
                      })(r, i)),
                      r)
                    ) {
                      if (r === u) continue;
                      return r;
                    }
                    if ("next" === i.method) i.sent = i._sent = i.arg;
                    else if ("throw" === i.method) {
                      if ("suspendedStart" === l)
                        throw ((l = "completed"), i.arg);
                      i.dispatchException(i.arg);
                    } else "return" === i.method && i.abrupt("return", i.arg);
                    if (
                      ((l = "executing"), "normal" === (r = s(o, c, i)).type)
                    ) {
                      if (
                        ((l = i.done ? "completed" : "suspendedYield"),
                        r.arg === u)
                      )
                        continue;
                      return { value: r.arg, done: i.done };
                    }
                    "throw" === r.type &&
                      ((l = "completed"),
                      (i.method = "throw"),
                      (i.arg = r.arg));
                  }
                }),
            }),
            t
          );
        }
        function s(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        e.wrap = l;
        var u = {};
        function m() {}
        function p() {}
        function f() {}
        var d,
          y,
          b =
            ((y =
              (y =
                (i((d = {}), a, function () {
                  return this;
                }),
                Object.getPrototypeOf)) && y(y(O([])))) &&
              y !== t &&
              r.call(y, a) &&
              (d = y),
            (f.prototype = m.prototype = Object.create(d)));
        function v(e) {
          ["next", "throw", "return"].forEach(function (t) {
            i(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function h(e, t) {
          var a;
          n(this, "_invoke", {
            value: function (n, o) {
              function c() {
                return new t(function (a, c) {
                  !(function n(a, o, c, i) {
                    var l;
                    if ("throw" !== (a = s(e[a], e, o)).type)
                      return (o = (l = a.arg).value) &&
                        "object" == cr(o) &&
                        r.call(o, "__await")
                        ? t.resolve(o.__await).then(
                            function (e) {
                              n("next", e, c, i);
                            },
                            function (e) {
                              n("throw", e, c, i);
                            }
                          )
                        : t.resolve(o).then(
                            function (e) {
                              (l.value = e), c(l);
                            },
                            function (e) {
                              return n("throw", e, c, i);
                            }
                          );
                    i(a.arg);
                  })(n, o, a, c);
                });
              }
              return (a = a ? a.then(c, c) : c());
            },
          });
        }
        function g(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function _(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function E(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(g, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t,
              n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length))
              return (
                (t = -1),
                ((n = function n() {
                  for (; ++t < e.length; )
                    if (r.call(e, t)) return (n.value = e[t]), (n.done = !1), n;
                  return (n.value = void 0), (n.done = !0), n;
                }).next = n)
              );
          }
          return { next: w };
        }
        function w() {
          return { value: void 0, done: !0 };
        }
        return (
          n(b, "constructor", { value: (p.prototype = f), configurable: !0 }),
          n(f, "constructor", { value: p, configurable: !0 }),
          (p.displayName = i(f, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            return (
              !!(e = "function" == typeof e && e.constructor) &&
              (e === p || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), i(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          v(h.prototype),
          i(h.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = h),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var c = new h(l(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? c
              : c.next().then(function (e) {
                  return e.done ? e.value : c.next();
                });
          }),
          v(b),
          i(b, c, "Generator"),
          i(b, a, function () {
            return this;
          }),
          i(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t,
              r = Object(e),
              n = [];
            for (t in r) n.push(t);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var t = n.pop();
                  if (t in r) return (e.value = t), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (E.prototype = {
            constructor: E,
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
                    r.call(this, t) &&
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
              function n(r, n) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; 0 <= a; --a) {
                var o = this.tryEntries[a],
                  c = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var i = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (i && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (i) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
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
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), _(r), u;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                var r,
                  n,
                  a = this.tryEntries[t];
                if (a.tryLoc === e)
                  return (
                    "throw" === (r = a.completion).type && ((n = r.arg), _(a)),
                    n
                  );
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                u
              );
            },
          }),
          e
        );
      }
      function lr(e, t) {
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function sr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? lr(Object(r), !0).forEach(function (t) {
                var n, a;
                (n = e),
                  (a = r[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== cr(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 === r) return String(e);
                        if ("object" !== cr((r = r.call(e, "string"))))
                          return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === cr(e) ? e : String(e)
                    );
                  })(t)) in n
                    ? Object.defineProperty(n, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[t] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : lr(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function ur(e, t, r, n, a, o, c) {
        try {
          var i = e[o](c),
            l = i.value;
        } catch (e) {
          return void r(e);
        }
        i.done ? t(l) : Promise.resolve(l).then(n, a);
      }
      function mr(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            var r;
            if (e)
              return "string" == typeof e
                ? pr(e, t)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
                        ? e.constructor.name
                        : r) || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? pr(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function pr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function fr(e) {
        function t(t, n, a) {
          !N(t) && t.generatedOTPStatus
            ? (C(f, r),
              A("disable", !1, !1),
              e.setOtpLimitMessage(""),
              h(!0),
              n && v("WhatsApp no. " + e.mobileIsdVal + "-" + e.mobile),
              a &&
                (isNRI
                  ? v(E.values.userEmail)
                  : v(e.mobileIsdVal + "-" + e.mobile)))
            : x(t);
        }
        var r = { hours: 0, minutes: 0, seconds: 60 },
          c = mr(a.a.useState([r.hours, r.minutes, r.seconds]), 2),
          l = mr(c[0], 3),
          s = l[0],
          m = l[1],
          p = l[2],
          f = c[1],
          d = ((c = (l = mr(Object(n.useState)("disable"), 2))[0]), l[1]),
          y = (l = mr(Object(n.useState)("disable"), 2))[0],
          b = l[1],
          v =
            ((l = mr(
              Object(n.useState)(e.mobileIsdVal + "-" + e.mobile),
              2
            ))[0],
            l[1]),
          h = ((l = mr(Object(n.useState)(!0), 2))[0], l[1]);
        (l = mr(Object(n.useState)(!1), 2))[0],
          l[1],
          (l = mr(Object(n.useState)("disable"), 2))[0];
        var g = l[1],
          _ = Object(o.d)(function (e) {
            return e.contactData;
          }),
          E = Object(o.d)(function (e) {
            return e.form.contactForm;
          }),
          O = Object(o.c)(),
          w =
            (Object(n.useEffect)(function () {
              v(e.mobileIsdVal + "-" + e.mobile);
              var t = { hrs: s, mins: m, secs: p },
                r = setInterval(function () {
                  return j(t, f, L);
                }, 1e3);
              return function () {
                return clearInterval(r);
              };
            }),
            Object(n.useEffect)(function () {
              w();
            }, []),
            function () {
              var t = E.values.userMobile,
                r = E.values.selectIsd;
              console.log(
                "Hitting => " +
                  T.get("/checkOtpStatus?phoneNumber=" + t + "&isd=" + r)
              ),
                T.get("/checkOtpStatus?phoneNumber=" + t + "&isd=" + r).then(
                  function (t) {
                    1 == t.data
                      ? (console.log("checkOtpStatus Api returned true"),
                        e.setCallTopMatchesState(!0),
                        P())
                      : (console.log("Response : " + JSON.stringify(t)),
                        console.log("checkOtpStatus Api returned false"),
                        e.setCallTopMatchesState(!1));
                  }
                );
            }),
          P = (function () {
            t = ir().mark(function t(r) {
              var n, a, o, c;
              return ir().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        (console.log("Inside onSubmit function ..."),
                        document.getElementsByClassName(
                          "contact-form__error"
                        ) &&
                          document.getElementsByClassName(
                            "contact-form__error"
                          )[0] &&
                          document.getElementsByClassName(
                            "contact-form__error"
                          )[0].textContent &&
                          0 <
                            document.getElementsByClassName(
                              "contact-form__error"
                            )[0].textContent.length &&
                          I(),
                        g("disable"),
                        b("disable"),
                        e.setVerifyOtpButtonLabel("verifying.."),
                        void 0 === E ||
                          null == E ||
                          void 0 === E.values ||
                          null == E.values ||
                          void 0 === E.values.userMobile ||
                          null == E.values.userMobile)
                      ) {
                        t.next = 17;
                        break;
                      }
                      (n =
                        void 0 !== E.values.userConsent &&
                        null != E.values.userConsent &&
                        E.values.userConsent
                          ? "Y"
                          : "N"),
                        (a =
                          void 0 !== E.values.optIn &&
                          null != E.values.optIn &&
                          E.values.optIn
                            ? "Y"
                            : "N"),
                        (o = E.values.userEmail),
                        (c = E.values.userName);
                      try {
                        (c = c && c.replace(/^"(.*)"$/, "$1")),
                          (o = o && o.replace(/^"(.*)"$/, "$1"));
                      } catch (t) {}
                      return (
                        (o = sr(
                          sr(
                            {},
                            {
                              mobile: E.values.userMobile,
                              mobileIsd: E.values.selectIsd,
                              otp: "000",
                              email: o,
                              userName: c,
                              userAcceptance: n,
                              optIn: a,
                              whatsAppConsent: E.values.whatsAppConsent,
                              contactEventFrom: _.requestBody.contactEventFrom,
                              propertyId: _.requestBody.propertyId,
                              advertisers: _.requestBody.advertisers,
                              contactType: _.contactType,
                              searchType: _.searchType,
                              source: _.requestBody.campaignCode,
                            }
                          ),
                          {},
                          { userType: E.values.userType }
                        )),
                        (t.next = 15),
                        T.post("verifyMobileOtp", o)
                      );
                    case 15:
                      (c = t.sent), e.onSubmit(null, c, I);
                    case 17:
                    case "end":
                      return t.stop();
                  }
              }, t);
            });
            var t,
              r = function () {
                var e = this,
                  r = arguments;
                return new Promise(function (n, a) {
                  var o = t.apply(e, r);
                  function c(e) {
                    ur(o, n, a, c, i, "next", e);
                  }
                  function i(e) {
                    ur(o, n, a, c, i, "throw", e);
                  }
                  c(void 0);
                });
              };
            return function (e) {
              return r.apply(this, arguments);
            };
          })(),
          L = function () {
            d(""), b("");
          },
          A = function (e, r, n) {
            d(e), b(e);
            var a;
            e = {
              mobileNumberIsd: E.values.selectIsd,
              mobileNumber: E.values.userMobile,
              emailId: E.values.userEmail,
              userName: E.values.userName,
            };
            r &&
              ((a = sr(
                sr({}, e),
                {},
                { sendSMS: n, sendEmail: n, sendWhatsApp: r }
              )),
              O(Object(i.a)("OtpForm")),
              S(a, r, n, t, x)),
              n &&
                ((a = sr(
                  sr({}, e),
                  {},
                  { sendSMS: !isNRI, sendEmail: isNRI, sendWhatsApp: r }
                )),
                O(Object(i.a)("OtpForm")),
                S(a, r, n, t, x));
          },
          x = function (t) {
            var n;
            N(t) ||
              t.generatedOTPStatus ||
              (C(f, r),
              L("disable", !1, !1),
              (n = ""),
              (!k(t.errorCode) && "120" == t.errorCode) ||
              (!k(t.errordesc) &&
                "otp validation failed 1 min limit reached" == t.errordesc)
                ? (n = "OTP Limit Reached. Please try again after 1 min")
                : (!k(t.errorCode) && "119" == t.errorCode) ||
                  (!k(t.errordesc) &&
                    "otp validation failed 10 min limit reached" == t.errordesc)
                ? (n = "OTP Limit Reached. Please try again after 10 mins")
                : (!k(t.errorCode) && "118" == t.errorCode) ||
                  (!k(t.errordesc) &&
                    "otp validation failed 60 min limit reached" == t.errordesc)
                ? (n = "OTP Limit Reached. Please try again after 60 mins")
                : (!k(t.errorCode) && "117" == t.errorCode) ||
                  (!k(t.errordesc) &&
                    "otp validation failed 12 hour limit reached" ==
                      t.errordesc)
                ? (n = "OTP Limit Reached. Please try again after 12 hrs")
                : ((!k(t.errorCode) && "116" == t.errorCode) ||
                    (!k(t.errordesc) &&
                      "otp validation failed one day limit reached" ==
                        t.errordesc)) &&
                  (n = "OTP Limit Reached. Please try again after 1 day"),
              k(n)) ||
              (h(!1), e.setOtpLimitMessage(n), O(Object(i.b)("OtpForm")));
          };
        return a.a.createElement(
          "div",
          { className: "contact-form__missed-call" },
          a.a.createElement(u.a, { heading: "Verify your number" }),
          a.a.createElement(
            "div",
            { className: "contact-form__otp-text" },
            "Give a missed call free of charge from ",
            a.a.createElement("br", null),
            "your no.",
            a.a.createElement(
              "span",
              { className: "contact-form__otp-text-2" },
              e.mobile,
              " -",
              a.a.createElement(
                "span",
                {
                  className: "contact-form__otp-edit",
                  onClick: function () {
                    return (
                      (t = "FILL_CONTACT_DETAILS"),
                      (r = "VERIFY_OTP"),
                      console.log("Inside showContactNextStep"),
                      e.onEditContactHandler(t, r),
                      void (
                        N(_.gaObject) ||
                        N(_.gaObject.contactOtpFormError) ||
                        "" === _.gaObject.contactOtpFormError ||
                        ((t = "Error - Edit Number"),
                        shortlists.isShortList
                          ? ((r = sr(
                              sr({}, shortlists.shortListGaCommonData),
                              {},
                              {
                                eventCategory: "Contact Otp Form",
                                eventLabel: t,
                              }
                            )),
                            O(e.contactGaAction(r)))
                          : ((r = sr(
                              sr({}, _.gaObject.contactOtpFormError),
                              {},
                              { eventLabel: t }
                            )),
                            O(e.contactGaAction(r))))
                      )
                    );
                    var t, r;
                  },
                },
                "Edit"
              )
            )
          ),
          a.a.createElement(
            "div",
            { className: "contact-form__missed-call__on-text" },
            "on"
          ),
          a.a.createElement(
            "div",
            { className: "contact-form__missed-call__mob" },
            "+91 - 9870284623"
          ),
          a.a.createElement(or, {
            time: "".concat(p.toString().padStart(2, "0")),
            tryAgainStatus: c,
            chatLinkStatus: y,
            onClickReSendCode: A,
            mobile:
              null != E && null != E.values && null != E.values.userMobile
                ? E.values.userMobile
                : "",
            onSubmit: P,
            onEditContactHandler: e.onEditContactHandler,
            isNRIContact: e.isNRIContact,
            selectIsd: e.selectIsd,
            verifyOtpButtonLabel: e.verifyOtpButtonLabel,
            contactDataGA: e.contactDataGA,
            setVerifyOtpButtonLabel: e.setVerifyOtpButtonLabel,
            contactGaAction: e.contactGaAction,
            setIsNRIContact: e.setIsNRIContact,
            otpLimitMessage: e.otpLimitMessage,
            setOtpLimitMessage: e.setOtpLimitMessage,
            shortlists: e.shortlists,
            switchToOtpScreen: e.switchToOtpScreen,
            setCallTopMatchesState: function (t) {
              console.log("Updating callTopMatches state to : " + t),
                e.setCallTopMatchesState(t);
            },
            hoursMinSecs: r,
            setTime: function (e) {
              console.log("Updating Timer for try again method"), f(e);
            },
            setTryAgainState: function (e) {
              d(e);
            },
          })
        );
      }
      var dr = r(114);
      function yr(e) {
        return (yr =
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
      function br(e, t) {
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function vr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? br(Object(r), !0).forEach(function (t) {
                var n, a;
                (n = e),
                  (a = r[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== yr(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 === r) return String(e);
                        if ("object" !== yr((r = r.call(e, "string"))))
                          return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === yr(e) ? e : String(e)
                    );
                  })(t)) in n
                    ? Object.defineProperty(n, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[t] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : br(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function hr(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            var r;
            if (e)
              return "string" == typeof e
                ? gr(e, t)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
                        ? e.constructor.name
                        : r) || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? gr(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function gr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function _r(e) {
        function t(e, t, r) {
          (e = vr(
            vr({}, s.gaObject.thankyoupageLoad),
            {},
            { eventCategory: e, eventAction: t, eventLabel: r }
          )),
            u(c(e));
        }
        var r = e.tyUrl,
          c = e.contactGaAction,
          i = (e = hr(Object(n.useState)(!1), 2))[0],
          l = e[1],
          s =
            ((e = hr(a.a.useState({}), 2))[0],
            e[1],
            Object(o.d)(function (e) {
              return e.contactData;
            })),
          u = Object(o.c)();
        return (
          Object(n.useEffect)(function () {
            t(
              "Primeplusformopen",
              "revamp srp | propertycontact | propertysearch | property tuple | primary",
              "3/3"
            );
          }, []),
          a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              "div",
              {
                className: "contact-form__inner contact-form__inner--392 mt-40",
              },
              a.a.createElement(
                "div",
                { className: "mb-srp-pplus" },
                a.a.createElement(
                  "div",
                  { className: "mb-srp-pplus__content" },
                  a.a.createElement(
                    "div",
                    { className: "mb-srp-pplus__content__topheader" },
                    a.a.createElement(
                      "div",
                      { className: "mb-srp-pplus__content__mail-sent" },
                      "Relationship Manager details have been sent to your email."
                    )
                  ),
                  a.a.createElement(
                    "div",
                    { className: "mb-srp-pplus__content__title" },
                    "Prime",
                    a.a.createElement("span", {
                      className: "mb-srp-pplus__content__title--plus",
                    }),
                    "Membership Activated for you!"
                  ),
                  a.a.createElement(
                    "div",
                    { className: "mb-srp-pplus__benefits" },
                    a.a.createElement(
                      "div",
                      { className: "mb-srp-pplus__benefits__title" },
                      "Enjoy all benefits with 21-day Trial Pack"
                    ),
                    a.a.createElement(
                      "ul",
                      {
                        className:
                          "mb-srp-pplus__benefits__listing webkit__scroll-search",
                      },
                      a.a.createElement(
                        "li",
                        { className: "mb-srp-pplus__benefits__listing__val" },
                        a.a.createElement(
                          "span",
                          {
                            className:
                              "mb-srp-pplus__benefits__listing__val--boldelm",
                          },
                          "50% OFF on Brokerage"
                        )
                      ),
                      a.a.createElement(
                        "li",
                        { className: "mb-srp-pplus__benefits__listing__val" },
                        "Full Support by ",
                        a.a.createElement(
                          "span",
                          {
                            className:
                              "mb-srp-pplus__benefits__listing__val--boldelm",
                          },
                          "Relationship Manager"
                        )
                      ),
                      a.a.createElement(
                        "li",
                        {
                          className:
                            "mb-srp-pplus__benefits__listing__val hidden ".concat(
                              i ? "show" : ""
                            ),
                        },
                        "Direct Access to  ",
                        a.a.createElement(
                          "span",
                          {
                            className:
                              "mb-srp-pplus__benefits__listing__val--boldelm",
                          },
                          "Owner Properties"
                        )
                      ),
                      a.a.createElement(
                        "li",
                        {
                          className:
                            "mb-srp-pplus__benefits__listing__val hidden ".concat(
                              i ? "show" : ""
                            ),
                        },
                        "Legal Consultation with ",
                        a.a.createElement(
                          "span",
                          {
                            className:
                              "mb-srp-pplus__benefits__listing__val--boldelm",
                          },
                          "Property Lawyer"
                        )
                      )
                    ),
                    a.a.createElement(
                      "a",
                      {
                        className: "mb-srp-pplus__benefits__showmore",
                        onClick: function () {
                          t(
                            "Showmorebuttonclicked",
                            "revamp srp | propertycontact | propertysearch | property tuple | primary",
                            "detailed"
                          ),
                            l(true),
                            document
                              .querySelector(
                                ".mb-srp-pplus__benefits__showmore"
                              )
                              .classList.add("hide");
                        },
                      },
                      "Show More"
                    )
                  ),
                  a.a.createElement(
                    "div",
                    { className: "mb-srp-pplus__ctasec" },
                    a.a.createElement(
                      "a",
                      {
                        className:
                          "mb-srp-pplus__ctasec__btn mb-srp-pplus__ctasec__btn--solid-btn",
                        onClick: function () {
                          t(
                            "SimilarPropbuttonclicked",
                            "revamp srp | propertycontact | propertysearch | property tuple | primary",
                            "redirected"
                          ),
                            window.open(r);
                        },
                      },
                      "View Similar Properties"
                    )
                  )
                )
              )
            )
          )
        );
      }
      r(189);
      var Er = r(808),
        Or = r(254);
      function wr(e) {
        return (wr =
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
      function Sr(e, t) {
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function jr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Sr(Object(r), !0).forEach(function (t) {
                var n, a;
                (n = e),
                  (a = r[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== wr(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 === r) return String(e);
                        if ("object" !== wr((r = r.call(e, "string"))))
                          return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === wr(e) ? e : String(e)
                    );
                  })(t)) in n
                    ? Object.defineProperty(n, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[t] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Sr(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function Cr(e, t, r, n, a) {
        return function (o) {
          Object(ce.v)(e)
            ? D.a
                .get("/moreDetailOwnerWant?ptype=" + n, { headers: Pr(t) })
                .then(function (e) {
                  200 === e.status &&
                    (console.log(
                      "moreDetailOwnerWant ==> response.data ==>",
                      e.data
                    ),
                    Object(ce.v)(e.data) ||
                      "success" !== e.data.status ||
                      o({
                        type:
                          "R" == n ? Or.a.UPDATE_STATE : Or.a.UPDATE_STATE_S,
                        payload: Tr(e.data.result, r, a),
                      }));
                })
                .catch(function (e) {
                  console.log(
                    "Exception occured in moreDetailOwnerWant ==>",
                    e
                  );
                })
            : o({
                type: "R" == n ? Or.a.UPDATE_STATE : Or.a.UPDATE_STATE_S,
                payload: jr(
                  jr({}, e),
                  {},
                  {
                    main: "Meanwhile, "
                      .concat(r, " (")
                      .concat(
                        a,
                        ") would like to know some more details about you"
                      ),
                  }
                ),
              });
        };
      }
      function Nr(e) {
        var t = !1;
        return (
          Object(ce.v)(e) ||
            e.questions.every(function (e) {
              return (
                (e = e.options.find(function (e) {
                  return e.isChecked;
                })),
                !(t = void 0 !== e || t)
              );
            }),
          t
        );
      }
      var kr = {
          CONTACT_OWNER_NOW: "Contact Owner Now",
          CALL_NOW: "Call Now",
          CALL_OWNER_NOW: "Call Owner Now",
        },
        Pr = function (e) {
          var t =
            Object(ce.v)(e) || Object(ce.t)(e.userUniqToken)
              ? ""
              : e.userUniqToken;
          return {
            userUniqToken: t,
            access_token: t,
            token_type: "Bearer",
            hmacCode:
              Object(ce.v)(e) || Object(ce.t)(e.hmacCode) ? "" : e.hmacCode,
          };
        },
        Tr = function (e, t, r) {
          t = {
            main: "Meanwhile, "
              .concat(t, " (")
              .concat(r, ") would like to know some more details about you"),
            class: "",
            questions: [],
          };
          var n = {
              isChecked: !1,
              label: "",
              id: "",
              cssClass: "",
              name: "",
              value: "",
            },
            a = { title: "", options: [] };
          (r = Object.keys(e).map(function (t) {
            var r = e["".concat(t)].map(function (e) {
              return jr(
                jr({}, n),
                {},
                {
                  label: e.cnddesc,
                  id: "".concat(e.cndrfnum),
                  name: "".concat(e.cndcndrfnum),
                  displayName: "".concat(e.exfield2),
                  value: "".concat(e.cndrfnum),
                }
              );
            });
            return jr(jr({}, a), {}, { title: t, options: r });
          })),
            (t = jr(jr({}, t), {}, { questions: r }));
          return console.log("final buyerData ==> ", t), t;
        };
      function Ir(e) {
        return (Ir =
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
      function Lr(e, t) {
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function Ar(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Lr(Object(r), !0).forEach(function (t) {
                var n, a;
                (n = e),
                  (a = r[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== Ir(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 === r) return String(e);
                        if ("object" !== Ir((r = r.call(e, "string"))))
                          return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === Ir(e) ? e : String(e)
                    );
                  })(t)) in n
                    ? Object.defineProperty(n, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[t] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Lr(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function xr(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            var r;
            if (e)
              return "string" == typeof e
                ? Br(e, t)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
                        ? e.constructor.name
                        : r) || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? Br(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Br(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Fr(e) {
        function t(e, t, r) {
          try {
            var n;
            Object(ce.v)(c.gaObject) ||
              Object(ce.v)(c.gaObject.contactsuccess) ||
              ((n = Ar(
                Ar({}, (n = c.gaObject.contactsuccess)),
                {},
                {
                  cd169: e,
                  eventName: "mbprime",
                  eventAction: "Buyer Profile Thankyou Screen",
                  eventCategory:
                    "MB Prime Entry Point " + (r ? "Shown" : "Clicked"),
                  eventLabel: t,
                  nonInteraction: r,
                }
              )),
              m(Object(ie.e)(n)));
          } catch (e) {
            console.log(e);
          }
        }
        function r() {
          var e = 0;
          try {
            e = Object(ce.t)(be.a.readCookie("broadcastdeniedcount"))
              ? 0
              : parseInt(be.a.readCookie("broadcastdeniedcount"));
          } catch (e) {}
          return e;
        }
        var c = e.contactData,
          i = e.additionalSearchBeanData,
          l = e.userInfoData,
          s = e.closeContactForm,
          u = e.isMobile,
          m = Object(o.c)(),
          p = Object(o.d)(function (e) {
            return e.clientBean;
          }).buyerTaggingBean;
        (e = xr(Object(n.useState)(!1), 2))[0], e[1];
        var f = (e = xr(Object(n.useState)(null), 2))[0],
          d = e[1],
          y = Object(o.d)(function (e) {
            return "R" == p.category
              ? e.buyerApproveDatan.R
              : e.buyerApproveDatan.S;
          }),
          b = "Y" === l.userPrimeMemberLoggedIn,
          v = (l.isUserLoggedIn, c.advertiserDetailName),
          h = c.userType,
          g = b ? "Call Owner_Within Limit" : "Call Owner_Limit Exhausted",
          _ = b ? "Unlock No. Now" : kr.CONTACT_OWNER_NOW,
          E = function (e, t, r) {
            try {
              var n;
              Object(ce.v)(c.gaObject) ||
                Object(ce.v)(c.gaObject.contactsuccess) ||
                ((n = Ar(
                  Ar({}, (n = c.gaObject.contactsuccess)),
                  {},
                  {
                    cd169: e,
                    eventCategory: "post contact tenant flow",
                    eventLabel: t,
                    nonInteraction: r,
                  }
                )),
                m(Object(ie.e)(n)));
            } catch (e) {
              console.log(e);
            }
          },
          O =
            (Object(n.useEffect)(function () {
              m(Cr(y, l, v, p.category, h)),
                O(d),
                Nr(y) && "Owner" == c.userType && t(_, g, !0);
            }, []),
            Object(n.useEffect)(
              function () {
                try {
                  var e;
                  Object(ce.v)(y) ||
                    Object(ce.t)(y.questions) ||
                    Object(ce.v)(c.gaObject) ||
                    Object(ce.v)(c.gaObject.contactsuccess) ||
                    ((e = c.gaObject.contactsuccess),
                    (e = Nr(y)
                      ? Ar(
                          Ar({}, e),
                          {},
                          {
                            cd169: "screen load",
                            eventCategory: "post contact tenant flow",
                            eventLabel: "thank you screen",
                            nonInteraction: !0,
                          }
                        )
                      : Ar(
                          Ar({}, e),
                          {},
                          {
                            cd169: "screen load",
                            eventCategory: "post contact tenant flow",
                            eventLabel: "tenant profile screen",
                            nonInteraction: !0,
                          }
                        )),
                    m(Object(ie.e)(e)));
                } catch (e) {
                  console.log(e);
                }
              },
              [JSON.stringify(y.questions)]
            ),
            function (e) {
              var t = l.userMobile,
                r = l.userEmail,
                n = p.locId;
              D.a
                .get(
                  "api/buyerBroadcastConsent?locality=" +
                    n +
                    "&mobile=" +
                    t +
                    "&email=" +
                    r
                )
                .then(function (t) {
                  null != t.data && e(t.data);
                });
            });
        return Object(ce.v)(y) ||
          Object(ce.t)(y.questions) ||
          null == f ||
          ("I" != c.userType &&
            "Owner" != c.userType &&
            ("Y" != f.result || (Nr(y) && b)) &&
            (s(), 1))
          ? null
          : a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(Er.ContactBuyerSection, {
                propertyType: p.category,
                isEditPageShow: "I" == c.userType || "Owner" == c.userType,
                buyerQueryData: y,
                submitCallback: function (e) {
                  if (
                    (t(_, g, !0),
                    console.log("buyerQueryData submit callback ==> ", e),
                    !Object(ce.v)(e) && Nr(e))
                  ) {
                    m(Cr(e, l, v, p.category, h));
                    var r = i,
                      n = l,
                      a = e,
                      o = p.category;
                    (r = (function (e, t, r, n) {
                      var a =
                        Object(ce.v)(t) || Object(ce.t)(t.userUniqToken)
                          ? ""
                          : t.userUniqToken;
                      return {
                        body: {
                          clickedContentObjbean: r,
                          mobile:
                            Object(ce.v)(t) || Object(ce.t)(t.userMobile)
                              ? ""
                              : t.userMobile,
                          email:
                            Object(ce.v)(t) || Object(ce.t)(t.userEmail)
                              ? ""
                              : t.userEmail,
                          isNriUser:
                            !Object(ce.v)(e) &&
                            !Object(ce.t)(e.nriUser) &&
                            "Y" === e.nriUser,
                          userUniqToken: a,
                          cg: n,
                        },
                        headers: Pr(t),
                      };
                    })(
                      r,
                      n,
                      (function (e) {
                        var t = [];
                        return Object(ce.v)(e)
                          ? t
                          : e.questions.map(function (e) {
                              if (
                                void 0 !==
                                (e = e.options.find(function (e) {
                                  return e.isChecked;
                                }))
                              )
                                return {
                                  qid: "".concat(e.name),
                                  ansid: "".concat(e.value),
                                };
                            });
                      })(a),
                      o
                    )),
                      console.log("requestPayload ==> ", r),
                      D.a.post("/api/saveTenantInfo.html", r.body, {
                        headers: r.headers,
                      });
                    try {
                      !(function (e, t) {
                        for (
                          var r = !0,
                            n = 0,
                            a =
                              e.questions && 0 < e.questions.length
                                ? e.questions
                                : [],
                            o = 0;
                          o < a.length;
                          o++
                        )
                          (a[o].options && 0 < a[o].options.length
                            ? a[o].options
                            : []
                          ).forEach(function (e, t) {
                            1 == e.isChecked && n++;
                          });
                        n == a.length && (r = !1),
                          E(
                            "post contact tenant flow",
                            "tenant profile screen",
                            !0
                          ),
                          Object(ce.v)(t.gaObject) ||
                            Object(ce.v)(t.gaObject.contactsuccess) ||
                            ((e = n + " / " + a.length + " - complete submit"),
                            r &&
                              (e = n + " / " + a.length + " - partial submit"),
                            E(e, "tenant profile screen", !0));
                      })(e, c);
                    } catch (e) {
                      console.log(e);
                    }
                  }
                },
                userName: l.userName,
                propertyOwnerType: h,
                primeDetails: {
                  isShow: !0,
                  isPrime: b,
                  title:
                    c.detailViewCt && 4 < c.detailViewCt
                      ? c.detailViewCt +
                        " Buyers viewed " +
                        v +
                        "'s Property in the last 2 days"
                      : "",
                  subTitle: a.a.createElement(
                    a.a.Fragment,
                    null,
                    "Get MB Prime & Contact direclty"
                  ),
                  viewPhoneCallback: function (e) {
                    var r =
                        Object(ce.v)(l) || Object(ce.t)(l.userEmail)
                          ? ""
                          : l.userEmail,
                      n =
                        !Object(ce.v)(i) &&
                        !Object(ce.t)(i.nriUser) &&
                        "Y" === i.nriUser,
                      a =
                        Object(ce.v)(l) || Object(ce.t)(l.userUniqToken)
                          ? ""
                          : l.userUniqToken;
                    D.a
                      .get(
                        "getContactDetailForPrimeBuyer?mobile=" +
                          l.userMobile +
                          "&email=" +
                          r +
                          "&isNriUser=" +
                          n +
                          "&userUniqToken=" +
                          a
                      )
                      .then(function (r) {
                        null != r.data &&
                          (E(
                            "callownernow-buttonclicked",
                            "thank you screen",
                            !1
                          ),
                          t("Unlock No. Now", g, !0),
                          e(r.data));
                      });
                  },
                  mobileNo: "XXX-XXX-XXXX",
                  isSingleContact: !(1 < be.a.propertyContactedCount()),
                  ownerName: v,
                  link: {
                    url:
                      ((e = {
                        category:
                          Object(ce.v)(i) ||
                          Object(ce.v)(i.searchForm) ||
                          Object(ce.t)(i.searchForm.category)
                            ? ""
                            : i.searchForm.category,
                        ptype:
                          Object(ce.v)(c) || Object(ce.t)(c.pType)
                            ? ""
                            : c.pType,
                        cityCnd:
                          Object(ce.v)(i) ||
                          Object(ce.v)(i.searchForm) ||
                          Object(ce.t)(i.searchForm.city)
                            ? ""
                            : i.searchForm.city,
                        propId:
                          Object(ce.v)(c) ||
                          Object(ce.v)(c.requestBody) ||
                          Object(ce.t)(c.requestBody.propertyId)
                            ? ""
                            : c.requestBody.propertyId.split("|")[0],
                      }),
                      ""
                        .concat(
                          "https://www.magicbricks.com/mbprime/",
                          "primePackages?source=Buyer_Profile_Thankyou_Screen_Call_Owner_Limit_Exhausted"
                        )
                        .concat(
                          "&category="
                            .concat(e.category, "&ptype=")
                            .concat(e.ptype, "&cityCnd=")
                            .concat(e.cityCnd, "&propId=")
                            .concat(
                              e.propId,
                              "&eventLabel=Buyer Profile Thankyou Screen&cd169=Call Owner_Limit Exhausted"
                            )
                        )),
                    label:
                      1 < be.a.propertyContactedCount()
                        ? kr.CALL_NOW
                        : kr.CALL_OWNER_NOW,
                  },
                },
                contactClose: s,
                defaultScreen: Nr(y) ? ("Owner" == c.userType ? 2 : 3) : 1,
                broadCastData: {
                  isShow: !!(f && f.result && "Y" == f.result && !b && r() < 4),
                  title:
                    "We found more Properties for you posted by " +
                    h +
                    " in nearby localities.",
                  label:
                    "Would you like Magicbricks to reach out to " +
                    h +
                    " with matching properties on your behalf?",
                  filterData: Object(ce.i)(p),
                  optionalFilter: {
                    isShow: !(
                      !(
                        f &&
                        f.result &&
                        "Y" == f.result &&
                        f.parentlocalityid &&
                        f.parentlocalityid != p.locId &&
                        f.parentlocalitydesc
                      ) || b
                    ),
                    label:
                      f &&
                      f.result &&
                      "Y" == f.result &&
                      f.parentlocalityid &&
                      f.parentlocalitydesc
                        ? f.parentlocalitydesc
                        : "",
                    isSelected: !1,
                  },
                  cta: {
                    primary: {
                      label: "Yes",
                      callBack: function (e) {
                        E("yes-submit-button-clicked", "broadcast intiate", !1),
                          s(),
                          console.log(e),
                          (e = (function (e, t, r) {
                            var n =
                              Object(ce.v)(e) || Object(ce.t)(e.userUniqToken)
                                ? ""
                                : e.userUniqToken;
                            return {
                              body: Ar(
                                Ar({}, t),
                                {},
                                {
                                  source: 12940,
                                  platform: u ? "11592" : "11591",
                                  plocality:
                                    f &&
                                    f.result &&
                                    "Y" == f.result &&
                                    f.parentlocalityid &&
                                    r
                                      ? f.parentlocalityid
                                      : null,
                                  ubirfnum:
                                    f && f.result && "Y" == f.result && f.uid
                                      ? f.uid
                                      : null,
                                  mobile:
                                    Object(ce.v)(e) ||
                                    Object(ce.t)(e.userMobile)
                                      ? ""
                                      : e.userMobile,
                                  email:
                                    Object(ce.v)(e) || Object(ce.t)(e.userEmail)
                                      ? ""
                                      : e.userEmail,
                                  isNriUser:
                                    !Object(ce.v)(i) &&
                                    !Object(ce.t)(i.nriUser) &&
                                    "Y" === i.nriUser,
                                  userUniqToken: n,
                                }
                              ),
                              headers: Pr(e),
                            };
                          })(l, p, e)),
                          D.a.post("/updateBuyerBroadcast.html", e.body, {
                            headers: e.headers,
                          });
                      },
                    },
                    secondary: {
                      label: "No",
                      callBack: function () {
                        E("no-submit-button-clicked", "broadcast intiate", !1),
                          be.a.createCookie(
                            "broadcastdeniedcount",
                            r() + 1,
                            parseInt(1)
                          ),
                          s();
                      },
                    },
                  },
                },
                gaCallback: function (e) {
                  console.log(e),
                    Object(ce.t)(e) || "thankyouEdit" != e
                      ? !Object(ce.t)(e) && Object.values(kr).includes(e)
                        ? t(e, g, !1)
                        : Object(ce.t)(e) || "Skip Now" != e
                        ? Object(ce.t)(e) || "ContiniueToBroadcast" != e
                          ? Object(ce.t)(e) || "ContiniueToSearch" != e
                            ? Object(ce.t)(e) || "LocalityRemoved" != e
                              ? Object(ce.t)(e) || "LocalityAdded" != e
                                ? Object(ce.t)(e) || "FraudAlertCtaClick" != e
                                  ? Object(ce.t)(e) ||
                                    "FraudAlertScreenLoaded" != e
                                    ? Object(ce.t)(e) ||
                                      E(e + " clicked", "thank you screen", !1)
                                    : E(
                                        "screen load",
                                        "fraud advisory screen",
                                        !0
                                      )
                                  : E(
                                      "screen Clicked",
                                      "fraud advisory screen",
                                      !1
                                    )
                                : E(
                                    "Locality Added clicked",
                                    "broadcast intiate",
                                    !1
                                  )
                              : E(
                                  "Locality Removed clicked",
                                  "broadcast intiate",
                                  !1
                                )
                            : E(
                                "Continiue To Search clicked",
                                "thank you screen",
                                !1
                              )
                          : (E("Continue clicked", "thank you screen", !1),
                            E("screen load", "broadcast intiate", !1))
                        : t(_, g, !0)
                      : E("Edit clicked", "thank you screen", !1);
                },
              })
            );
      }
      function Mr(e) {
        return (Mr =
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
      var Dr = ["hasError"];
      function Rr() {
        Rr = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a =
            (d = "function" == typeof Symbol ? Symbol : {}).iterator ||
            "@@iterator",
          o = d.asyncIterator || "@@asyncIterator",
          c = d.toStringTag || "@@toStringTag";
        function i(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
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
          i = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function l(e, t, r, a) {
          var o, c, i, l;
          (t = t && t.prototype instanceof m ? t : m),
            (t = Object.create(t.prototype)),
            (a = new E(a || []));
          return (
            n(t, "_invoke", {
              value:
                ((o = e),
                (c = r),
                (i = a),
                (l = "suspendedStart"),
                function (e, t) {
                  if ("executing" === l)
                    throw new Error("Generator is already running");
                  if ("completed" === l) {
                    if ("throw" === e) throw t;
                    return { value: void 0, done: !0 };
                  }
                  for (i.method = e, i.arg = t; ; ) {
                    var r = i.delegate;
                    if (
                      r &&
                      ((r = (function e(t, r) {
                        var n = r.method,
                          a = t.iterator[n];
                        return void 0 === a
                          ? ((r.delegate = null),
                            ("throw" === n &&
                              t.iterator.return &&
                              ((r.method = "return"),
                              (r.arg = void 0),
                              e(t, r),
                              "throw" === r.method)) ||
                              ("return" !== n &&
                                ((r.method = "throw"),
                                (r.arg = new TypeError(
                                  "The iterator does not provide a '" +
                                    n +
                                    "' method"
                                )))),
                            u)
                          : "throw" === (n = s(a, t.iterator, r.arg)).type
                          ? ((r.method = "throw"),
                            (r.arg = n.arg),
                            (r.delegate = null),
                            u)
                          : (a = n.arg)
                          ? a.done
                            ? ((r[t.resultName] = a.value),
                              (r.next = t.nextLoc),
                              "return" !== r.method &&
                                ((r.method = "next"), (r.arg = void 0)),
                              (r.delegate = null),
                              u)
                            : a
                          : ((r.method = "throw"),
                            (r.arg = new TypeError(
                              "iterator result is not an object"
                            )),
                            (r.delegate = null),
                            u);
                      })(r, i)),
                      r)
                    ) {
                      if (r === u) continue;
                      return r;
                    }
                    if ("next" === i.method) i.sent = i._sent = i.arg;
                    else if ("throw" === i.method) {
                      if ("suspendedStart" === l)
                        throw ((l = "completed"), i.arg);
                      i.dispatchException(i.arg);
                    } else "return" === i.method && i.abrupt("return", i.arg);
                    if (
                      ((l = "executing"), "normal" === (r = s(o, c, i)).type)
                    ) {
                      if (
                        ((l = i.done ? "completed" : "suspendedYield"),
                        r.arg === u)
                      )
                        continue;
                      return { value: r.arg, done: i.done };
                    }
                    "throw" === r.type &&
                      ((l = "completed"),
                      (i.method = "throw"),
                      (i.arg = r.arg));
                  }
                }),
            }),
            t
          );
        }
        function s(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        e.wrap = l;
        var u = {};
        function m() {}
        function p() {}
        function f() {}
        var d,
          y,
          b =
            ((y =
              (y =
                (i((d = {}), a, function () {
                  return this;
                }),
                Object.getPrototypeOf)) && y(y(O([])))) &&
              y !== t &&
              r.call(y, a) &&
              (d = y),
            (f.prototype = m.prototype = Object.create(d)));
        function v(e) {
          ["next", "throw", "return"].forEach(function (t) {
            i(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function h(e, t) {
          var a;
          n(this, "_invoke", {
            value: function (n, o) {
              function c() {
                return new t(function (a, c) {
                  !(function n(a, o, c, i) {
                    var l;
                    if ("throw" !== (a = s(e[a], e, o)).type)
                      return (o = (l = a.arg).value) &&
                        "object" == Mr(o) &&
                        r.call(o, "__await")
                        ? t.resolve(o.__await).then(
                            function (e) {
                              n("next", e, c, i);
                            },
                            function (e) {
                              n("throw", e, c, i);
                            }
                          )
                        : t.resolve(o).then(
                            function (e) {
                              (l.value = e), c(l);
                            },
                            function (e) {
                              return n("throw", e, c, i);
                            }
                          );
                    i(a.arg);
                  })(n, o, a, c);
                });
              }
              return (a = a ? a.then(c, c) : c());
            },
          });
        }
        function g(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function _(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function E(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(g, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t,
              n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length))
              return (
                (t = -1),
                ((n = function n() {
                  for (; ++t < e.length; )
                    if (r.call(e, t)) return (n.value = e[t]), (n.done = !1), n;
                  return (n.value = void 0), (n.done = !0), n;
                }).next = n)
              );
          }
          return { next: w };
        }
        function w() {
          return { value: void 0, done: !0 };
        }
        return (
          n(b, "constructor", { value: (p.prototype = f), configurable: !0 }),
          n(f, "constructor", { value: p, configurable: !0 }),
          (p.displayName = i(f, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            return (
              !!(e = "function" == typeof e && e.constructor) &&
              (e === p || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), i(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          v(h.prototype),
          i(h.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = h),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var c = new h(l(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? c
              : c.next().then(function (e) {
                  return e.done ? e.value : c.next();
                });
          }),
          v(b),
          i(b, c, "Generator"),
          i(b, a, function () {
            return this;
          }),
          i(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t,
              r = Object(e),
              n = [];
            for (t in r) n.push(t);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var t = n.pop();
                  if (t in r) return (e.value = t), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (E.prototype = {
            constructor: E,
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
                    r.call(this, t) &&
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
              function n(r, n) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; 0 <= a; --a) {
                var o = this.tryEntries[a],
                  c = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var i = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (i && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (i) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
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
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), _(r), u;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                var r,
                  n,
                  a = this.tryEntries[t];
                if (a.tryLoc === e)
                  return (
                    "throw" === (r = a.completion).type && ((n = r.arg), _(a)),
                    n
                  );
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                u
              );
            },
          }),
          e
        );
      }
      function qr(e, t, r, n, a, o, c) {
        try {
          var i = e[o](c),
            l = i.value;
        } catch (e) {
          return void r(e);
        }
        i.done ? t(l) : Promise.resolve(l).then(n, a);
      }
      function Ur(e, t) {
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function Gr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ur(Object(r), !0).forEach(function (t) {
                var n, a;
                (n = e),
                  (a = r[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== Mr(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 === r) return String(e);
                        if ("object" !== Mr((r = r.call(e, "string"))))
                          return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === Mr(e) ? e : String(e)
                    );
                  })(t)) in n
                    ? Object.defineProperty(n, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[t] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ur(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function Yr(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            var r;
            if (e)
              return "string" == typeof e
                ? Vr(e, t)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
                        ? e.constructor.name
                        : r) || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? Vr(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Vr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      t.a = function (e) {
        function t() {
          var t, r, n, a;
          ((Object(p.c)(f) ||
            Object(p.c)(f.values) ||
            !f.values ||
            "50" == f.values.selectIsd) &&
            "50" == F) ||
            Object(m.d)(s, N),
            Object(p.c)(s.gaObject) ||
              Object(p.c)(s.gaObject.contactInfoFormClose) ||
              "" === s.gaObject.contactInfoFormClose ||
              !s.formScreen ||
              s.formScreen !== R.i ||
              (s.pType && "10026" == s.pType && S < 4
                ? ((a = "Form Close"),
                  (n = "lead quality form - s" + S),
                  (t = s.buttonType),
                  y.isShortList
                    ? ((r = Gr(
                        Gr({}, y.shortListGaCommonData),
                        {},
                        { eventCategory: "Contact Info Form", eventLabel: a }
                      )),
                      N(e.contactGaAction(r)))
                    : ((r = Gr(
                        Gr({}, s.gaObject.contactInfoFormClose),
                        {},
                        { eventLabel: a, eventCategory: n, cd96: t }
                      )),
                      N(e.contactGaAction(r))),
                  j(4),
                  w.splice(0, w.length))
                : ((a = "Form Close"),
                  y.isShortList
                    ? ((n = Gr(
                        Gr({}, y.shortListGaCommonData),
                        {},
                        { eventCategory: "Contact Info Form", eventLabel: a }
                      )),
                      N(e.contactGaAction(n)))
                    : ((t = Gr(
                        Gr({}, s.gaObject.contactInfoFormClose),
                        {},
                        { eventLabel: a }
                      )),
                      N(e.contactGaAction(t))),
                  j(4))),
            s.pType && "10026" == s.pType && j(4),
            Object(p.c)(s.gaObject) ||
              Object(p.c)(s.gaObject.contactOtpFormClose) ||
              "" === s.gaObject.contactOtpFormClose ||
              !s.formScreen ||
              s.formScreen !== R.C ||
              ((r = "Form Close"),
              y.isShortList
                ? ((n = Gr(
                    Gr({}, y.shortListGaCommonData),
                    {},
                    { eventCategory: "Contact OTP Form", eventLabel: r }
                  )),
                  N(e.contactGaAction(n)))
                : ((a = Gr(
                    Gr({}, s.gaObject.contactOtpFormClose),
                    {},
                    { eventLabel: r }
                  )),
                  N(e.contactGaAction(a)))),
            "search_wap" === e.source &&
              "contact_form" === history.state &&
              history.back(),
            Object(p.c)(xe) ||
              Object(p.a)(xe.askWhatsApp2) ||
              1 != xe.askWhatsApp2 ||
              N({ type: "askWhatsApp2", payload: !1 }),
            N({
              type: R.e,
              payload: Gr(
                Gr({}, s),
                {},
                { userActionType: R.e, isUserAction: !0, formScreen: R.k }
              ),
            }),
            s.requestBody &&
              !Object(p.a)(s.requestBody.sbmcndsustatus) &&
              Oe(!0);
        }
        function r(t, r, n) {
          if ((Z(""), !r.data.otpVerifyStatus))
            throw (
              (n(),
              se("Verify"),
              Object(p.c)(s.gaObject) ||
                Object(p.c)(s.gaObject.contactOtpFormError) ||
                "" === s.gaObject.contactOtpFormError ||
                ((n =
                  "Otp Error - " + r.data.errorCode + " | " + r.data.errordesc),
                y.isShortList
                  ? ((a = Gr(
                      Gr({}, y.shortListGaCommonData),
                      {},
                      { eventCategory: "Contact Otp Form", eventLabel: n }
                    )),
                    N(e.contactGaAction(a)))
                  : ((a = Gr(
                      Gr({}, s.gaObject.contactOtpFormError),
                      {},
                      { eventLabel: n }
                    )),
                    N(e.contactGaAction(a)))),
              new Te.a({ otp: "OTP is incorrect", _error: "OTP is incorrect" }))
            );
          if (
            (Ne(!0),
            (function () {
              var e,
                t =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              try {
                Object(p.c)(t) ||
                  Object(p.a)(t.data.userUniqToken) ||
                  !t.data.otpVerifyStatus ||
                  (be.a.createContactCookie(
                    "sessionCookieForContact",
                    "Y",
                    b.contactCookiesExpiryLimit,
                    !0
                  ),
                  be.a.createContactCookie(
                    "otpFlage",
                    "Y",
                    b.contactCookiesExpiryLimit,
                    !0
                  ),
                  be.a.createContactCookie(
                    "verificationFlag",
                    "Y",
                    b.contactCookiesExpiryLimit,
                    !0
                  ),
                  be.a.createContactCookie(
                    "verifcationFlag",
                    "Y",
                    b.contactCookiesExpiryLimit,
                    !0
                  ),
                  be.a.createContactCookie(
                    "userUniqToken",
                    t.data.userUniqToken,
                    b.contactCookiesExpiryLimit,
                    !0
                  ),
                  be.a.createContactCookie(
                    "firstContact",
                    "Y",
                    b.contactCookiesExpiryLimit,
                    !0
                  ),
                  be.a.createContactCookie(
                    "contactCookie",
                    "Y",
                    b.contactCookiesExpiryLimit,
                    !0
                  ),
                  be.a.createContactCookie(
                    "hmacCode",
                    t.data.hmacCode,
                    b.contactCookiesExpiryLimit,
                    !0
                  ),
                  Object(p.c)(t.data.addInfos) ||
                    Object(p.c)(t.data.addInfos.userInfoData) ||
                    Object(p.a)(t.data.addInfos.userInfoData.userType) ||
                    be.a.createContactCookie(
                      "userTypeSRP",
                      t.data.addInfos.userInfoData.userType,
                      b.contactCookiesExpiryLimit,
                      !0
                    ),
                  Object(p.c)(t.data.addInfos) ||
                    Object(p.c)(t.data.addInfos.userInfoData) ||
                    Object(p.a)(t.data.addInfos.userInfoData.encuserval) ||
                    be.a.createContactCookie(
                      "encuserval",
                      t.data.addInfos.userInfoData.encuserval,
                      b.contactCookiesExpiryLimit,
                      !0
                    ),
                  !Object(p.c)(t.data.addInfos) &&
                    t.data.addInfos.UUID &&
                    be.a.addFingerPrint(
                      C.fingerprint,
                      t.data.addInfos.USERID,
                      t.data.addInfos.UUID,
                      b.contactCookiesExpiryLimit
                    ),
                  Object(p.a)(t.config)) ||
                  Object(p.c)(t.config) ||
                  ((e = JSON.parse(t.config.data)), Object(p.a)(e)) ||
                  Object(p.c)(e) ||
                  localStorage.setItem(e.mobile, t.data.hmacCode);
              } catch (e) {
                console.error(e);
              }
            })(r),
            P(r.data.addInfos.recieverInfos),
            (function (e) {
              var t, r;
              e.data.otpVerifyStatus &&
                ((r = t = "N"),
                !Object(p.a)(e.data.addInfos.primeFreeTrialActivated) &&
                  e.data.addInfos.primeFreeTrialActivated &&
                  (Ie(e.data.addInfos.URL), Ae(!0), (r = t = "Y")),
                N({
                  type: R.b,
                  payload: Gr(
                    Gr(Gr({}, C), f.values),
                    {},
                    {
                      userIsdCode: f.values.selectIsd,
                      firstName: f.values.userName,
                      userConsent: f.values.userConsent,
                      whatsAppConsent: f.values.whatsAppConsent,
                      optIn: f.values.optIn,
                      userUniqToken: e.data.userUniqToken,
                      hmacCode: e.data.hmacCode,
                      isUserLoggedIn: t,
                      userType: f.values.userType,
                      userPrimeMemberLoggedIn:
                        e.data.addInfos.userInfoData.is_prime_subscribed_user,
                      isFreeUser: e.data.addInfos.userInfoData.is_free_user,
                      isPrimePlusUser: r,
                    }
                  ),
                }));
            })(r),
            !r.data.isSpamContact ||
              !r.data.hasError ||
              (!r.data.isIpSpam &&
                r.data.isMobileVerified &&
                r.data.isValidToken))
          ) {
            N(Object(D.n)()),
              Object(p.c)(s.gaObject) ||
                Object(p.c)(s.gaObject.contactsuccess) ||
                "" === s.gaObject.contactsuccess ||
                (y.isShortList
                  ? ((n = Gr(
                      Gr({}, y.shortListGaCommonData),
                      {},
                      { eventCategory: "contactsuccess" }
                    )),
                    N(e.contactGaAction(n)))
                  : ((a = Gr(
                      Gr({}, s.gaObject.contactsuccess),
                      {},
                      { eventCategory: "contactsuccess" }
                    )),
                    (n = Object(p.a)(s.contactSource)
                      ? ""
                      : " " + s.contactSource),
                    (n = a.cd96 + "" + n),
                    N(e.contactGaAction(Gr(Gr({}, a), {}, { cd96: n }))))),
              Object(p.c)(s.gaObject) ||
                Object(p.c)(s.gaObject.contactotpformsubmit) ||
                "" === s.gaObject.contactotpformsubmit ||
                (y.isShortList
                  ? ((a = Gr(
                      Gr({}, y.shortListGaCommonData),
                      {},
                      { eventCategory: "contactotpformsubmit" }
                    )),
                    N(e.contactGaAction(a)))
                  : ((n = Gr(
                      Gr({}, s.gaObject.contactotpformsubmit),
                      {},
                      { eventCategory: "contactotpformsubmit" }
                    )),
                    N(e.contactGaAction(n))));
            var a = be.a.readCookie("contactedProperties"),
              o = ((n = ""), s.requestBody.propertyId.toString().split("|")[0]),
              c = {
                userUniqToken: (a =
                  ((n =
                    null != a && "" != a
                      ? ((c = a.toString().includes("%7C")
                          ? a.toString().split("%7C")
                          : a.toString().split("|")),
                        a.toString().includes(o) || c.push(o),
                        c.join("|"))
                      : o),
                  be.a.createCookieRem("contactedProperties", n, 60),
                  be.a.createCookieRem(
                    "Properties_C",
                    n.split("|").join(","),
                    30
                  ),
                  Object(ce.d)(o),
                  void 0 !== r.data &&
                  void 0 !== r.data.userUniqToken &&
                  null != r.data.userUniqToken
                    ? r.data.userUniqToken
                    : "")),
                access_token: a,
                token_type: "Bearer",
                hmacCode:
                  void 0 !== r.data &&
                  void 0 !== r.data.hmacCode &&
                  null != r.data.hmacCode
                    ? r.data.hmacCode
                    : "",
              },
              i =
                ((n =
                  void 0 !== f &&
                  null != f &&
                  void 0 !== f.values.userConsent &&
                  null != f.values.userConsent &&
                  f.values.userConsent
                    ? "Y"
                    : "N"),
                (a =
                  void 0 !== f &&
                  null != f.values &&
                  void 0 !== f.values.optIn &&
                  null != f.values.optIn &&
                  f.values.optIn
                    ? "Y"
                    : "N"),
                {
                  contactType: s.contactType,
                  searchType: s.searchType,
                  id: r.data.addInfos.recieverInfos.id,
                });
            (i = Gr(
              Gr(Gr(Gr({}, s.requestBody), i), f.values),
              {},
              {
                userMobileIsd: f.values.selectIsd,
                fingerprint: C.fingerprint,
                userAcceptance: n,
                optIn: a,
              }
            )),
              (n = window.btoa(JSON.stringify({ payload: i, headers: c })));
            if (
              (sessionStorage.setItem(s.requestBody.advertisers[0], n),
              e.isLegalAndInfra)
            )
              (a = R.k),
                N({
                  type: R.C,
                  payload: Gr(
                    Gr({}, s),
                    {},
                    {
                      recieverId: s.requestBody.propertyId,
                      userActionType: R.e,
                      isUserAction: !0,
                      formScreen: a,
                      requestInterface: e.source,
                      contactStatus: "SUCCESS",
                    }
                  ),
                });
            else {
              (i = R.u),
                "Y" !== r.data.addInfos.recieverInfos.isPrimeLocProp ||
                  "Y" !== r.data.addInfos.recieverInfos.isFreeOwnerProperty ||
                  (!Object(p.a)(
                    r.data.addInfos.userInfoData.is_prime_subscribed_user
                  ) &&
                    "N" !==
                      r.data.addInfos.userInfoData.is_prime_subscribed_user) ||
                  Object(p.a)(r.data.addInfos.userInfoData.is_free_user) ||
                  "Y" !== r.data.addInfos.userInfoData.is_free_user ||
                  ((i = R.t), Object(p.c)(T)) ||
                  void 0 === T.nonPrimeUserFreeOwnerLimitUsed ||
                  null == T.nonPrimeUserFreeOwnerLimitUsed ||
                  1 !== T.nonPrimeUserFreeOwnerLimitUsed ||
                  (i = R.r),
                N({
                  type: R.C,
                  payload: Gr(
                    Gr({}, s),
                    {},
                    {
                      recieverId: s.requestBody.propertyId,
                      userActionType: R.C,
                      isUserAction: !0,
                      formScreen: i,
                      requestInterface: e.source,
                      contactStatus: "SUCCESS",
                    }
                  ),
                });
              try {
                e.additionalBeanData.mbtracker &&
                  ((m = e.additionalBeanData.mbtracker),
                  (u = o),
                  ((l = document.createElement("iframe")).style.display =
                    "none"),
                  m.includes("Digital_Marketing_Camp_Delente") &&
                    ((l.src =
                      "https://edsolutions.o18.click/p?o=19103419&m=4261&tid=".concat(
                        u
                      )),
                    document.body.appendChild(l)),
                  m.includes("Digital_Marketing_Camp_Dialstar") &&
                    ((l.src =
                      "https://dialstar.trackneo.net/track/conv?m=ifr&campaign_id=142&transaction_id=transaction_id&adv_sub=".concat(
                        u
                      )),
                    document.body.appendChild(l)),
                  m.includes("Digital_Marketing_Camp_PayTm")) &&
                  ((l.src =
                    "https://paytm43.gotrackier.com/pixel?adid=632e7f374e10a164165bab49"),
                  document.body.appendChild(l));
              } catch (t) {
                console.error(t);
              }
              (c = r.data.addInfos.recieverInfos.id),
                (n = Gr(
                  Gr(Gr(Gr({}, L), r.data.addInfos.recieverInfos), T),
                  {},
                  { buttonType: s.buttonType }
                )),
                "Y" == s.isFreeOwnerProperty &&
                  (n = Gr(Gr({}, n), {}, { isFreeOwnerProperty: "Y" })),
                (n = Object(J.b)(b, n, s)),
                (a = window.btoa(JSON.stringify(n))),
                (o = ""),
                (o =
                  Object(p.a)(s.requestBody.isCustomSource) ||
                  "Y" != s.requestBody.isCustomSource
                    ? "https://www.magicbricks.com/mbsearch/top-matches-aln?ctaType=thankYou&source=" +
                      e.source +
                      "&utm_source=" +
                      e.source +
                      "&utm_medium=search&nem=" +
                      r.data.addInfos.userInfoData.nem +
                      "&userType=" +
                      f.values.userType +
                      "&name=" +
                      r.data.addInfos.userInfoData.userName +
                      "&emailid=" +
                      r.data.addInfos.userInfoData.userEmail +
                      "&userMobileCountry=" +
                      r.data.addInfos.userInfoData.userMobileCountry +
                      "&id=" +
                      c +
                      "&otherInfos=" +
                      a
                    : "https://www.magicbricks.com/mbsearch/top-matches-aln?ctaType=thankYou&source=" +
                      s.requestBody.customSource +
                      "&utm_source=" +
                      s.requestBody.customSource +
                      "&utm_medium=" +
                      s.requestBody.customSource +
                      "&fromGeneratedUrl=Y&nem=" +
                      r.data.addInfos.userInfoData.nem +
                      "&userType=" +
                      f.values.userType +
                      "&name=" +
                      r.data.addInfos.userInfoData.userName +
                      "&emailid=" +
                      r.data.addInfos.userInfoData.userEmail +
                      "&userMobileCountry=" +
                      r.data.addInfos.userInfoData.userMobileCountry +
                      "&id=" +
                      c +
                      "&otherInfos=" +
                      a),
                Object(p.a)(oe) || (o += "&wa=" + oe),
                Object(p.a)(te) || (o += "&isNRIContact=" + te),
                ye(o),
                "property" !== s.contactType ||
                  (i !== R.u &&
                    i !== R.t &&
                    (i !== R.r ||
                      Object(p.a)(o) ||
                      "search_wap" !== e.source)) ||
                  fe(!0);
            }
          } else {
            var l,
              u = R.q,
              m =
                (Object(p.c)(r.data.addInfos) ||
                  Object(p.c)(r.data.addInfos.recieverInfos) ||
                  "Y" !== r.data.addInfos.recieverInfos.isPrimeLocProp ||
                  "Y" !== r.data.addInfos.recieverInfos.isFreeOwnerProperty ||
                  (!Object(p.a)(
                    r.data.addInfos.userInfoData.is_prime_subscribed_user
                  ) &&
                    "N" !==
                      r.data.addInfos.userInfoData.is_prime_subscribed_user) ||
                  Object(p.a)(r.data.addInfos.userInfoData.is_free_user) ||
                  "Y" !== r.data.addInfos.userInfoData.is_free_user ||
                  (u = R.s),
                Gr(
                  Gr({}, s),
                  {},
                  {
                    recieverId: s.requestBody.propertyId,
                    requestInterface: e.source,
                    userActionType: R.j,
                    isUserAction: !0,
                    formScreen: u,
                    isAutoContact: !1,
                  }
                ));
            Ge(m),
              Object(p.c)(s.gaObject) ||
                Object(p.c)(s.gaObject.contactOtpFormError) ||
                "" === s.gaObject.contactOtpFormError ||
                ((l = "Error - OTP is incorrect"),
                y.isShortList
                  ? ((n = Gr(
                      Gr({}, y.shortListGaCommonData),
                      {},
                      { eventCategory: "Contact Otp Form", eventLabel: l }
                    )),
                    N(e.contactGaAction(n)))
                  : ((c = Gr(
                      Gr({}, s.gaObject.contactOtpFormError),
                      {},
                      { eventLabel: l }
                    )),
                    N(e.contactGaAction(c))));
          }
        }
        function i() {
          Object(p.a)(de) || (top.location.href = de);
        }
        function l(e, t) {
          N({
            type: R.h,
            payload: Gr(
              Gr({}, s),
              {},
              { userActionType: R.h, isUserAction: !0, formScreen: R.i }
            ),
          });
        }
        var s = Object(o.d)(function (e) {
            return e.contactData;
          }),
          u = Object(o.d)(function (e) {
            return e.imagePopup;
          }),
          f = Object(o.d)(function (e) {
            return e.form.contactForm;
          }),
          d =
            (Object(o.d)(function (e) {
              return e.questionData;
            }),
            Object(o.d)(function (e) {
              return e.buyerTaggingContactObj;
            })),
          y = Object(o.d)(function (e) {
            return e.shortlists;
          }),
          b = Object(o.d)(function (e) {
            return e.searchAdditionalDataBean;
          }),
          v = !1,
          h = !1,
          g = (ae = Yr(a.a.useState(!1), 2))[0],
          _ = ae[1],
          E = (ae = Yr(a.a.useState(!0), 2))[0],
          O = ae[1],
          w = (console.log("contactForm form data", f), []),
          S = (ae = Yr(a.a.useState(4), 2))[0],
          j = ae[1],
          C = Object(o.d)(function (e) {
            return e.userInfoData;
          }),
          N = Object(o.c)(),
          k = (ae = Yr(a.a.useState({}), 2))[0],
          P = ae[1],
          T = (ae = Yr(a.a.useState({}), 2))[0],
          I = ae[1],
          L = (ae = Yr(a.a.useState({}), 2))[0],
          A = ae[1],
          x = (ae = Yr(a.a.useState(!1), 2))[0],
          B = ae[1],
          F = (ae = Yr(a.a.useState("50"), 2))[0],
          M = ae[1],
          q = (ae = Yr(a.a.useState(!1), 2))[0],
          U = ae[1],
          G = (ae = Yr(a.a.useState(!0), 2))[0],
          Y = ae[1],
          V = (ae = Yr(a.a.useState(!1), 2))[0],
          W = ae[1],
          H = (ae = Yr(a.a.useState(!0), 2))[0],
          K = ae[1],
          z = (ae = Yr(a.a.useState(""), 2))[0],
          Z = ae[1],
          Q = (ae = Yr(a.a.useState(s.buttonType), 2))[0],
          X = (ae = (ae[1], Yr(a.a.useState("Get Contact Details"), 2)))[0],
          ee = ae[1],
          te = (ae = Yr(a.a.useState(!1), 2))[0],
          re = ae[1],
          ne = (ae = Yr(a.a.useState({ hasEmailSuggestion: !1 }), 2))[0],
          ae = ae[1],
          oe = (he = Yr(a.a.useState(""), 2))[0],
          ie = he[1],
          le = (he = Yr(a.a.useState("Verify"), 2))[0],
          se = he[1],
          ue = (he = Yr(
            a.a.useState({
              advertiserDetailName: s.advertiserDetailName,
              advertiserDetailMaskedMobile: s.advertiserDetailMaskedMobile,
            }),
            2
          ))[0],
          me = he[1],
          pe = (he = Yr(a.a.useState(!1), 2))[0],
          fe = he[1],
          de = (he = Yr(a.a.useState(""), 2))[0],
          ye = he[1],
          ve = (he =
            ((he = Yr(a.a.useState(!1), 2))[0],
            he[1],
            Yr(a.a.useState(""), 2)))[0],
          he = he[1],
          ge = (_e = Yr(
            a.a.useState(
              !Object(p.a)(e.buyerTaggingRequired) &&
                "Y" == e.buyerTaggingRequired
            ),
            2
          ))[0],
          _e = _e[1],
          Ee = (Me = Yr(a.a.useState(!1), 2))[0],
          Oe = Me[1],
          we = Object(o.d)(function (e) {
            return void 0 !== e.searchBean.city && null !== e.searchBean.city
              ? e.searchBean.city
              : "";
          }),
          Se = (Me = Yr(a.a.useState(!1), 2))[0],
          je = Me[1],
          Ce = (Me = Yr(a.a.useState(!1), 2))[0],
          Ne = Me[1],
          ke = (Me =
            ((Me = Yr(a.a.useState(!1), 2))[0],
            Me[1],
            Yr(a.a.useState(""), 2)))[0],
          Ie = Me[1],
          Le = (Me = Yr(a.a.useState(!1), 2))[0],
          Ae = Me[1],
          xe = Object(o.d)(function (e) {
            return e.clientBean;
          }),
          Be = be.a.readCookie("showBuyerTagging"),
          Fe = ((Be = Object(p.a)(Be) || "N" !== Be ? "Y" : "N"), !1),
          Me = !1,
          De =
            ((Fe =
              !(
                (0 != ge && "N" != Be) ||
                "10026" === s.pType ||
                !s.formScreen ||
                (s.formScreen !== R.u &&
                  s.formScreen !== R.t &&
                  s.formScreen !== R.s &&
                  s.formScreen !== R.r) ||
                "property" !== s.contactType
              ) || Fe) || (Me = !0),
            u && u.showImageGalleryPopup && (Fe = !(Me = !0)),
            (s.formScreen !== R.u && s.formScreen !== R.t) ||
              (!s.requestBody ||
                Object(p.a)(s.requestBody.sbmcndsustatus) ||
                Object(p.a)(s.requestBody.ctaruleid) ||
                (Me = Fe = !1),
              s.requestBody &&
                !Object(p.a)(s.requestBody.sbmcndsustatus) &&
                Object(p.a)(s.requestBody.ctaruleid) &&
                (Me = !(Fe = !0))),
            Object(n.useEffect)(function () {
              console.log("Callig onLoadContactForm"), De();
            }, []),
            Object(n.useEffect)(
              function () {
                console.log(
                  "Condition Check =  - showTopMatches - " +
                    Fe +
                    " - showBuyerTagging - " +
                    ge +
                    " - contactData.pType - " +
                    s.pType +
                    " - contactData.formScreen - " +
                    s.formScreen +
                    " - contactData.contactType - " +
                    s.contactType
                ),
                  (Fe = !0);
              },
              [Ee]
            ),
            Object(n.useEffect)(
              function () {
                (0 != ge && "N" != Be) ||
                  "10026" === s.pType ||
                  !s.formScreen ||
                  (s.formScreen !== R.u &&
                    s.formScreen !== R.t &&
                    s.formScreen !== R.s &&
                    s.formScreen !== R.r) ||
                  "property" !== s.contactType ||
                  (Fe = !0);
              },
              [ge]
            ),
            Object(n.useEffect)(
              function () {
                var t, r;
                s.isAutoContact &&
                  ("10026" === s.pType &&
                    (_((v = !0)), console.log("coworkingAutoContact: ", v)),
                  "10026" !== s.pType) &&
                  ((t = {
                    selectIsd: C.selectIsd,
                    userEmail: C.userEmail,
                    userMobile: C.userMobile,
                    userMobileIsd: C.userIsdCode,
                    userName: C.userName,
                    userConsent: C.userConsent,
                    optIn: C.optIn,
                    whatsAppConsent: C.whatsAppConsent,
                    cwSeats: "",
                    cwDuration: "",
                    cwSpacetype: "",
                    pType: "",
                  }),
                  console.log("Use Effect pType:", s.pType),
                  "10026" == s.pType &&
                    ((t.pType = "10026"),
                    console.log("Use Effect extended: ", w, w.length),
                    w.forEach(function (e) {
                      console.log("Use Effect forEach"),
                        e.forEach(function (e) {
                          "seats" == e.value
                            ? (t.cwSeats = e.id)
                            : "duration" == e.value
                            ? (t.cwDuration = e.id)
                            : (t.cwSpacetype = e.id);
                        });
                    }),
                    console.log("use Effect formValues: ", t)),
                  je(!1),
                  (r = {
                    requestInterface: e.source,
                    contactType: s.contactType,
                    searchType: s.searchType,
                  }),
                  Object(D.b)(t, s, C, r, Ue));
              },
              [s.isAutoContact]
            ),
            Object(n.useEffect)(
              function () {
                var e;
                void 0 !== s &&
                  null != s &&
                  s &&
                  "NO_ACTION" != (null == s ? void 0 : s.userActionType) &&
                  (me({
                    advertiserDetailName: s.advertiserDetailName,
                    advertiserDetailMaskedMobile:
                      s.advertiserDetailMaskedMobile,
                  }),
                  B(s.isUserAction),
                  s.isUserAction
                    ? ((e =
                        !Object(p.a)(s.userActionType) &&
                        s.userActionType != R.e),
                      B(e))
                    : ((e =
                        !Object(p.a)(s.userActionType) &&
                        s.userActionType != R.v),
                      B(e)),
                  Re());
              },
              [s]
            ),
            function () {
              "Request Photo" === Q && K(!0), Object(D.e)(qe);
            }),
          Re = function () {
            var e;
            "WhatsApp Builder" === s.buttonType ||
            "WhatsApp Agent" === s.buttonType ||
            "WhatsApp Owner" === s.buttonType
              ? (ee(s.buttonType), ie("r"))
              : "Legal & Civic Infra Status" === s.buttonType
              ? (ee("Login To View"),
                s.userActionType != R.v &&
                  document.body.classList.remove("no-overflow"))
              : (null != s.ctaButtonData && "" != s.ctaButtonData
                  ? ee(s.ctaButtonData)
                  : "Request Photo" === s.buttonType
                  ? ee("Send Request")
                  : s.pType && "10026" == s.pType
                  ? ee("Continue")
                  : ee("Get Contact Details"),
                (e = !Object(p.a)(s.userActionType) && s.userActionType != R.e),
                s.userActionType != R.v &&
                  (document.body.classList.add("no-overflow"),
                  e || document.body.classList.remove("no-overflow"),
                  u.showImageGalleryPopup ||
                    document.body.classList.remove("no-overflow")),
                s.userActionType == R.v &&
                  document.body.classList.remove("no-overflow"));
          },
          qe = function (e, t) {
            M(t),
              U(e),
              (e || "50" != t
                ? (console.log(
                    "Inside updateCountryInfo with country code as : " +
                      t +
                      " & gdprData as : " +
                      e
                  ),
                  re)
                : (re(!1), O))(!0),
              e ? Y(!1) : ("50" === t ? Y : (Y(!0), W))(!0);
          },
          Ue = function (t) {
            var r,
              n,
              a,
              o,
              c,
              i,
              l,
              u,
              m,
              f,
              v,
              h,
              g,
              _,
              E,
              O =
                void 0 !== C.userUniqToken && null != C.userUniqToken
                  ? C.userUniqToken
                  : "";
            if (
              (void 0 !== C.hmacCode && null != C.hmacCode && C.hmacCode,
              t.hasError &&
                ("BANNED_WORD" === t.error_type ||
                  "INVALID_EMAIL_FORMAT" === t.error_type ||
                  "NRI_MOBILE_INVALID" === t.error_type ||
                  "NRI_MOBILE_BLOCK" === t.error_type))
            )
              throw (
                ((E = Gr(
                  Gr({}, s),
                  {},
                  {
                    userActionType: R.f,
                    isUserAction: !0,
                    formScreen: R.i,
                    isAutoContact: !1,
                    requestInterface: e.source,
                  }
                )),
                Ge(E),
                document.getElementById("pageLoader") &&
                  (document.getElementById("pageLoader").style.display =
                    "none"),
                t.hasError,
                (E = (function (e, t) {
                  if (null == e) return {};
                  var r,
                    n = (function (e, t) {
                      if (null == e) return {};
                      var r,
                        n,
                        a = {},
                        o = Object.keys(e);
                      for (n = 0; n < o.length; n++)
                        (r = o[n]), 0 <= t.indexOf(r) || (a[r] = e[r]);
                      return a;
                    })(e, t);
                  if (Object.getOwnPropertySymbols)
                    for (
                      var a = Object.getOwnPropertySymbols(e), o = 0;
                      o < a.length;
                      o++
                    )
                      (r = a[o]),
                        0 <= t.indexOf(r) ||
                          (Object.prototype.propertyIsEnumerable.call(e, r) &&
                            (n[r] = e[r]));
                  return n;
                })(t, Dr)),
                new Te.a(E))
              );
            je(t.isPrimeFreeTrial),
              document.getElementById("pageLoader") &&
                (document.getElementById("pageLoader").style.display = "none");
            try {
              t &&
                t.isMobileVerified &&
                null != t.recieverInfos.propId &&
                e.additionalBeanData.mbtracker &&
                ((i = e.additionalBeanData.mbtracker),
                (f = t.recieverInfos.propId),
                ((r = document.createElement("iframe")).style.display = "none"),
                i.includes("Digital_Marketing_Camp_Delente") &&
                  ((r.src =
                    "https://edsolutions.o18.click/p?o=19103419&m=4261&tid=".concat(
                      f
                    )),
                  document.body.appendChild(r),
                  r.click(),
                  setTimeout(function () {
                    document.body.removeChild(r);
                  }, 1e3)),
                i.includes("Digital_Marketing_Camp_Dialstar") &&
                  ((r.src =
                    "https://dialstar.trackneo.net/track/conv?m=ifr&campaign_id=142&transaction_id=transaction_id&adv_sub=".concat(
                      f
                    )),
                  document.body.appendChild(r),
                  r.click(),
                  setTimeout(function () {
                    document.body.removeChild(r);
                  }, 1e3)),
                i.includes("Digital_Marketing_Camp_PayTm")) &&
                ((r.src =
                  "https://paytm43.gotrackier.com/pixel?adid=632e7f374e10a164165bab49"),
                document.body.appendChild(r),
                r.click(),
                setTimeout(function () {
                  document.body.removeChild(r);
                }, 1e3));
            } catch (r) {
              console.error(r);
            }
            t &&
            !t.isIpSpam &&
            t.isMobileVerified &&
            t.isValidToken &&
            !t.isSpamContact &&
            "" !== O
              ? (Object(p.c)(s.gaObject) ||
                  Object(p.c)(s.gaObject.contactsuccess) ||
                  "" === s.gaObject.contactsuccess ||
                  "contact_similar_props_thank_you" == s.contact_interface ||
                  (y.isShortList
                    ? ((E = Gr(
                        Gr({}, y.shortListGaCommonData),
                        {},
                        { eventCategory: "contactsuccess" }
                      )),
                      N(e.contactGaAction(E)))
                    : ((f = Gr(
                        Gr({}, s.gaObject.contactsuccess),
                        {},
                        { eventCategory: "contactsuccess" }
                      )),
                      (i = Object(p.a)(s.contactSource)
                        ? ""
                        : " " + s.contactSource),
                      (E = f.cd96 + "" + i),
                      N(e.contactGaAction(Gr(Gr({}, f), {}, { cd96: E }))))),
                Object(p.c)(s.gaObject) ||
                  Object(p.c)(s.gaObject.thankyoucontactBuilderSuccess) ||
                  "" === s.gaObject.thankyoucontactBuilderSuccess ||
                  Object(p.a)(s.contact_interface) ||
                  "contact_builder_thank_you" !== s.contact_interface ||
                  ((i = Gr({}, s.gaObject.thankyoucontactBuilderSuccess)),
                  N(e.contactGaAction(i))),
                Object(p.c)(s.gaObject) ||
                  Object(p.c)(s.gaObject.thankyoucontactRecommendSuccess) ||
                  "" === s.gaObject.thankyoucontactRecommendSuccess ||
                  Object(p.a)(s.contact_interface) ||
                  "contact_similar_props_thank_you" !== s.contact_interface ||
                  ((f = Gr({}, s.gaObject.thankyoucontactRecommendSuccess)),
                  N(e.contactGaAction(f))),
                (E = be.a.readCookie("contactedProperties")),
                (i = ""),
                (f = s.requestBody.propertyId.toString().split("|")[0]),
                (i =
                  null != E && "" != E
                    ? ((_ = E.toString().includes("%7C")
                        ? E.toString().split("%7C")
                        : E.toString().split("|")),
                      E.toString().includes(f) || _.push(f),
                      _.join("|"))
                    : f),
                be.a.createCookieRem("contactedProperties", i, 60),
                be.a.createCookieRem(
                  "Properties_C",
                  i.split("|").join(","),
                  30
                ),
                Object(ce.d)(f),
                e.isLegalAndInfra
                  ? ((E = R.k),
                    N({
                      type: R.C,
                      payload: Gr(
                        Gr({}, s),
                        {},
                        {
                          recieverId: s.requestBody.propertyId,
                          userActionType: R.e,
                          isUserAction: !0,
                          formScreen: E,
                          requestInterface: e.source,
                          contactStatus: "SUCCESS",
                        }
                      ),
                    }))
                  : (N(Object(D.n)()),
                    (f = i = _ = 0),
                    (n = R.u),
                    "Y" !== t.recieverInfos.isPrimeLocProp ||
                      "Y" !== t.recieverInfos.isFreeOwnerProperty ||
                      (!Object(p.a)(t.userInfoData.is_prime_subscribed_user) &&
                        "N" !== t.userInfoData.is_prime_subscribed_user) ||
                      Object(p.a)(t.userInfoData.is_free_user) ||
                      "Y" !== t.userInfoData.is_free_user ||
                      ((n = R.t),
                      t.nonPrimeUserFreeOwnerMaxLimit <=
                        t.nonPrimeUserFreeOwnerLimitUsed + 1 &&
                        be.a.createCookieRem("showreqcallbk", "Y", 15),
                      (0 !== t.nonPrimeUserFreeOwnerLimitUsed &&
                        1 !== t.nonPrimeUserFreeOwnerLimitUsed) ||
                        ((E = be.a.readCookie("freeownercontactedids")),
                        (g = ""),
                        (v = s.requestBody.propertyId.toString().split("|")[0]),
                        (g =
                          null != E && "" != E
                            ? ((h = E.toString().includes("%2C")
                                ? E.toString().split("%2C")
                                : E.toString().split(",")),
                              E.toString().includes(v) || h.push(v),
                              h.join(","))
                            : v),
                        be.a.createCookieRem("freeownercontactedids", g, 15)),
                      (E = {
                        email: C.userEmail,
                        mobile: C.userMobile,
                        ptype: t.recieverInfos.propType,
                        cg: t.recieverInfos.cg,
                        source: e.source,
                        userId: "",
                        cityCnd: we,
                      }),
                      s.formScreen &&
                        ("search_web" === e.source ||
                          ("property" !== s.contactType &&
                            "search_wap" === e.source)) &&
                        (console.log("getPrimePackagePrice 1"),
                        Object(J.i)(E, L, A)),
                      (_ = t.nonPrimeUserFreeOwnerLimitStart),
                      (i = t.nonPrimeUserFreeOwnerLimitUsed + 1),
                      (f = t.nonPrimeUserFreeOwnerMaxLimit),
                      void 0 !== i && null != i && 1 === i && (n = R.r)),
                    I({
                      nonPrimeUserFreeOwnerLimitStart: _,
                      nonPrimeUserFreeOwnerLimitUsed: i,
                      nonPrimeUserFreeOwnerMaxLimit: f,
                    }),
                    Ye(d, t),
                    (h = Gr(
                      Gr({}, s),
                      {},
                      {
                        userActionType: R.j,
                        isUserAction: !0,
                        recieverId: s.requestBody.propertyId,
                        formScreen: n,
                        isAutoContact: !1,
                        nonPrimeUserFreeOwnerLimitStart: _,
                        nonPrimeUserFreeOwnerLimitUsed: i,
                        nonPrimeUserFreeOwnerMaxLimit: f,
                        requestInterface: e.source,
                        contactStatus: "SUCCESS",
                      }
                    )),
                    s.isAutoContact
                      ? P(t.recieverInfos)
                      : Object(p.c)(t.addInfos) ||
                        Object(p.a)(t.addInfos.recieverInfos) ||
                        P(t.addInfos.recieverInfos),
                    Ge(h),
                    (a = t.recieverInfos.id),
                    (o = {
                      email: C.userEmail,
                      mobile: C.userMobile,
                      ptype: t.recieverInfos.propType,
                      cg: t.recieverInfos.cg,
                      source: e.source,
                      userId: "",
                      cityCnd: we,
                    }),
                    (v = J.a.get("/thankYouPage/getPrimePrice", { params: o })),
                    (c = ""),
                    v
                      .then(function (r) {
                        var i;
                        Object(p.c)(r) ||
                        200 !== r.status ||
                        Object(p.c)(r.data)
                          ? (console.log(
                              "Error in getPrimePrice Response: ",
                              r
                            ),
                            (i = Gr(
                              Gr({}, t.recieverInfos),
                              {},
                              {
                                nonPrimeUserFreeOwnerLimitStart:
                                  t.nonPrimeUserFreeOwnerLimitStart,
                                nonPrimeUserFreeOwnerLimitUsed:
                                  t.nonPrimeUserFreeOwnerLimitUsed + 1,
                                nonPrimeUserFreeOwnerMaxLimit:
                                  t.nonPrimeUserFreeOwnerMaxLimit,
                                buttonType: s.buttonType,
                                requestInterface: e.source,
                              }
                            )),
                            "Y" == s.isFreeOwnerProperty &&
                              (i = Gr(
                                Gr({}, i),
                                {},
                                { isFreeOwnerProperty: "Y" }
                              )),
                            (i = Object(J.b)(b, i, s)),
                            (i = window.btoa(JSON.stringify(i))),
                            (c =
                              "https://www.magicbricks.com/mbsearch/top-matches-aln?ctaType=thankYou"),
                            (c =
                              (c =
                                Object(p.a)(s.requestBody.isCustomSource) ||
                                "Y" != s.requestBody.isCustomSource
                                  ? c +
                                    "&source=" +
                                    e.source +
                                    "&utm_source=" +
                                    e.source +
                                    "&utm_medium=search"
                                  : c +
                                    "&source=" +
                                    s.requestBody.customSource +
                                    "&utm_source=" +
                                    s.requestBody.customSource +
                                    "&utm_medium=" +
                                    s.requestBody.customSource +
                                    "&fromGeneratedUrl=Y") +
                              "&nem=" +
                              t.userInfoData.nem +
                              "&userType=" +
                              C.userType +
                              "&name=" +
                              t.userInfoData.userName +
                              "&emailid=" +
                              t.userInfoData.userEmail +
                              "&userMobileCountry=" +
                              t.userInfoData.userMobileCountry +
                              "&id=" +
                              a +
                              "&otherInfos=" +
                              i),
                            Object(p.a)(oe) || (c += "&wa=" + oe),
                            Object(p.a)(te) || (c += "&isNRIContact=" + te),
                            Object(p.a)(s.requestBody.isCustomSource) ||
                              "N" != s.requestBody.isCustomSource ||
                              (c += "&isAutoContact=Y"),
                            ye(c),
                            (C.topMatchFromVn ||
                              ("property" === s.contactType &&
                                (n === R.u ||
                                  n === R.t ||
                                  (n === R.r &&
                                    !Object(p.a)(c) &&
                                    "search_wap" === e.source)))) &&
                              fe(!0))
                          : (console.log(
                              "Request Params from CommonContactForm.js for PrimePackages => ",
                              JSON.stringify(o)
                            ),
                            console.log(
                              "From CommonContactForm.js => updateContactFormState() called..."
                            ),
                            console.log(
                              "Printing PrimePackages from CommonContactForm.js => ",
                              JSON.stringify(r.data)
                            ),
                            (i = Gr(Gr({}, L), r.data)),
                            console.log(
                              "From CommonContactForm.js, updatedPrimeInfo => ",
                              JSON.stringify(i)
                            ),
                            A(i),
                            (i = Gr(
                              Gr(Gr({}, r.data), t.recieverInfos),
                              {},
                              {
                                nonPrimeUserFreeOwnerLimitStart:
                                  t.nonPrimeUserFreeOwnerLimitStart,
                                nonPrimeUserFreeOwnerLimitUsed:
                                  t.nonPrimeUserFreeOwnerLimitUsed + 1,
                                nonPrimeUserFreeOwnerMaxLimit:
                                  t.nonPrimeUserFreeOwnerMaxLimit,
                                buttonType: s.buttonType,
                                requestInterface: e.source,
                              }
                            )),
                            "Y" == s.isFreeOwnerProperty &&
                              (i = Gr(
                                Gr({}, i),
                                {},
                                { isFreeOwnerProperty: "Y" }
                              )),
                            (i = Object(J.b)(b, i, s)),
                            (r = window.btoa(JSON.stringify(i))),
                            (c =
                              "https://www.magicbricks.com/mbsearch/top-matches-aln?ctaType=thankYou"),
                            (c =
                              (c =
                                Object(p.a)(s.requestBody.isCustomSource) ||
                                "Y" != s.requestBody.isCustomSource
                                  ? c +
                                    "&source=" +
                                    e.source +
                                    "&utm_source=" +
                                    e.source +
                                    "&utm_medium=search"
                                  : c +
                                    "&source=" +
                                    s.requestBody.customSource +
                                    "&utm_source=" +
                                    s.requestBody.customSource +
                                    "&utm_medium=" +
                                    s.requestBody.customSource +
                                    "&fromGeneratedUrl=Y") +
                              "&nem=" +
                              t.userInfoData.nem +
                              "&userType=" +
                              C.userType +
                              "&name=" +
                              t.userInfoData.userName +
                              "&emailid=" +
                              t.userInfoData.userEmail +
                              "&userMobileCountry=" +
                              t.userInfoData.userMobileCountry +
                              "&id=" +
                              a +
                              "&otherInfos=" +
                              r),
                            Object(p.a)(oe) || (c += "&wa=" + oe),
                            Object(p.a)(te) || (c += "&isNRIContact=" + te),
                            Object(p.a)(s.requestBody.isCustomSource) ||
                              "N" != s.requestBody.isCustomSource ||
                              (c += "&isAutoContact=Y"),
                            ye(c),
                            Object(p.a)(s.requestInterface) &&
                            !Object(p.a)(e.source)
                              ? e.source
                              : Object(p.a)(s.requestInterface) ||
                                s.requestInterface,
                            "property" !== s.contactType ||
                              (n !== R.u &&
                                n !== R.t &&
                                (n !== R.r ||
                                  Object(p.a)(c) ||
                                  "search_wap" !== e.source)) ||
                              fe(!0));
                      })
                      .catch(function (r) {
                        console.log("Error in getPrimePrice Response: ", r),
                          (r = Gr(
                            Gr({}, t.recieverInfos),
                            {},
                            {
                              nonPrimeUserFreeOwnerLimitStart:
                                t.nonPrimeUserFreeOwnerLimitStart,
                              nonPrimeUserFreeOwnerLimitUsed:
                                t.nonPrimeUserFreeOwnerLimitUsed + 1,
                              nonPrimeUserFreeOwnerMaxLimit:
                                t.nonPrimeUserFreeOwnerMaxLimit,
                              buttonType: s.buttonType,
                              requestInterface: e.source,
                            }
                          )),
                          "Y" == s.isFreeOwnerProperty &&
                            (r = Gr(
                              Gr({}, r),
                              {},
                              { isFreeOwnerProperty: "Y" }
                            )),
                          (r = Object(J.b)(b, r, s)),
                          (r = window.btoa(JSON.stringify(r))),
                          (c =
                            "https://www.magicbricks.com/mbsearch/top-matches-aln?ctaType=thankYou"),
                          (c =
                            (c =
                              Object(p.a)(s.requestBody.isCustomSource) ||
                              "Y" != s.requestBody.isCustomSource
                                ? c +
                                  "&source=" +
                                  e.source +
                                  "&utm_source=" +
                                  e.source +
                                  "&utm_medium=search"
                                : c +
                                  "&source=" +
                                  s.requestBody.customSource +
                                  "&utm_source=" +
                                  s.requestBody.customSource +
                                  "&utm_medium=" +
                                  s.requestBody.customSource +
                                  "&fromGeneratedUrl=Y") +
                            "&nem=" +
                            t.userInfoData.nem +
                            "&userType=" +
                            C.userType +
                            "&name=" +
                            t.userInfoData.userName +
                            "&emailid=" +
                            t.userInfoData.userEmail +
                            "&userMobileCountry=" +
                            t.userInfoData.userMobileCountry +
                            "&id=" +
                            a +
                            "&otherInfos=" +
                            r),
                          Object(p.a)(oe) || (c += "&wa=" + oe),
                          Object(p.a)(te) || (c += "&isNRIContact=" + te),
                          Object(p.a)(s.requestBody.isCustomSource) ||
                            "N" != s.requestBody.isCustomSource ||
                            (c += "&isAutoContact=Y"),
                          ye(c),
                          "property" !== s.contactType ||
                            (n !== R.u &&
                              n !== R.t &&
                              (n !== R.r ||
                                Object(p.a)(c) ||
                                "search_wap" !== e.source)) ||
                            fe(!0);
                      })))
              : !t ||
                t.isIpSpam ||
                t.isMobileVerified ||
                t.isValidToken ||
                t.isSpamContact ||
                "" !== O
              ? t &&
                "" !== O &&
                !t.isIpSpam &&
                !t.isValidToken &&
                t.isSpamContact &&
                t.hasError &&
                "INVALID_TOKEN" === t.error_type
                ? (N({
                    type: "ADD_USER_DATA",
                    payload: Gr(Gr({}, C), {}, { userUniqToken: null }),
                  }),
                  (g = Gr(
                    Gr({}, s),
                    {},
                    {
                      userActionType: R.f,
                      isUserAction: !0,
                      formScreen: R.i,
                      isAutoContact: !1,
                      requestInterface: e.source,
                    }
                  )),
                  Ge(g))
                : t &&
                  t.hasError &&
                  (t.isIpSpam ||
                    t.isSpamContact ||
                    !t.isMobileVerified ||
                    !t.isValidToken) &&
                  ((E = R.q),
                  Object(p.c)(t.recieverInfos) ||
                    Object(p.a)(t.recieverInfos.isPrimeLocProp) ||
                    "Y" !== t.recieverInfos.isPrimeLocProp ||
                    Object(p.a)(t.recieverInfos.isFreeOwnerProperty) ||
                    "Y" !== t.recieverInfos.isFreeOwnerProperty ||
                    (!Object(p.a)(t.userInfoData.is_prime_subscribed_user) &&
                      "N" !== t.userInfoData.is_prime_subscribed_user) ||
                    Object(p.a)(t.userInfoData.is_free_user) ||
                    "Y" !== t.userInfoData.is_free_user ||
                    ((_ = {
                      email: C.userEmail,
                      mobile: C.userMobile,
                      ptype: t.recieverInfos.propType,
                      cg: t.recieverInfos.cg,
                      source: e.source,
                      userId: "",
                      cityCnd: we,
                    }),
                    console.log("getPrimePackagePrice 3"),
                    console.log(
                      "requestParams before getPrimePackagePrice => ",
                      JSON.stringify(_)
                    ),
                    Object(J.i)(_, L, A),
                    s.isAutoContact,
                    P(t.recieverInfos),
                    (E = R.s)),
                  (i = Gr(
                    Gr({}, s),
                    {},
                    {
                      userActionType: R.j,
                      isUserAction: !0,
                      formScreen: E,
                      isAutoContact: !1,
                      requestInterface: e.source,
                    }
                  )),
                  Ge(i))
              : ("Y" !== t.recieverInfos.isPrimeLocProp ||
                  "Y" !== t.recieverInfos.isFreeOwnerProperty ||
                  (!Object(p.a)(t.userInfoData.is_prime_subscribed_user) &&
                    "N" !== t.userInfoData.is_prime_subscribed_user) ||
                  Object(p.a)(t.userInfoData.is_free_user) ||
                  "Y" !== t.userInfoData.is_free_user ||
                  (t.nonPrimeUserFreeOwnerMaxLimit <=
                    t.nonPrimeUserFreeOwnerLimitUsed + 1 &&
                    be.a.createCookieRem("showreqcallbk", "Y", 15),
                  (0 !== t.nonPrimeUserFreeOwnerLimitUsed &&
                    1 !== t.nonPrimeUserFreeOwnerLimitUsed) ||
                    ((f = be.a.readCookie("freeownercontactedids")),
                    (h = ""),
                    (v = s.requestBody.propertyId.toString().split("|")[0]),
                    (h =
                      null != f && "" != f
                        ? ((O = f.toString().includes("%2C")
                            ? f.toString().split("%2C")
                            : f.toString().split(",")),
                          f.toString().includes(v) || O.push(v),
                          O.join(","))
                        : v),
                    be.a.createCookieRem("freeownercontactedids", h, 15)),
                  (g = {
                    email: C.userEmail,
                    mobile: C.userMobile,
                    ptype: t.recieverInfos.propType,
                    cg: t.recieverInfos.cg,
                    source: e.source,
                    userId: "",
                    cityCnd: we,
                  }),
                  console.log("getPrimePackagePrice 2"),
                  Object(J.i)(g, L, A),
                  (l = t.nonPrimeUserFreeOwnerLimitStart),
                  (u = t.nonPrimeUserFreeOwnerLimitUsed + 1),
                  (m = t.nonPrimeUserFreeOwnerMaxLimit),
                  I({
                    nonPrimeUserFreeOwnerLimitStart:
                      t.nonPrimeUserFreeOwnerLimitStart,
                    nonPrimeUserFreeOwnerLimitUsed:
                      t.nonPrimeUserFreeOwnerLimitUsed + 1,
                    nonPrimeUserFreeOwnerMaxLimit:
                      t.nonPrimeUserFreeOwnerMaxLimit,
                  })),
                (_ = Gr(
                  Gr({}, s),
                  {},
                  {
                    userActionType: R.j,
                    isUserAction: !0,
                    formScreen: R.C,
                    isAutoContact: !1,
                    nonPrimeUserFreeOwnerLimitStart: l,
                    nonPrimeUserFreeOwnerLimitUsed: u,
                    nonPrimeUserFreeOwnerMaxLimit: m,
                    requestInterface: e.source,
                  }
                )),
                Ye(d, t),
                Ge(_)),
              Object(p.a)(t.isPrimeFreeTrial) ||
                Object(p.a)(t.setFreeTrialAfterOtp) ||
                ((E = {
                  isPrimeFreeTrial: t.isPrimeFreeTrial,
                  setFreeTrialAfterOtp: t.setFreeTrialAfterOtp,
                }),
                N(Object(dr.d)(E)));
          },
          Ge = function (e) {
            N({ type: R.j, payload: e });
          },
          Ye = function (e, t) {
            var r = 0,
              n = be.a.readCookie("totalContactCountBT");
            (r =
              Object(p.c)(e) || Object(p.a)(e.totalContactCount)
                ? 0 != r || Object(p.a)(n)
                  ? parseInt(t.buyerTaggingContact.totalContactCountBT) + 1
                  : parseInt(be.a.readCookie("totalContactCountBT")) + 1
                : parseInt(e.totalContactCount) + 1),
              be.a.createCookie("totalContactCountBT", r, 1 / 24),
              (n = {
                totalContactCount: r,
                buyerTaggingFreeOwnerContactCount:
                  t.buyerTaggingContact.buyerTaggingFreeOwnerContactCount,
                buyerTaggingPaidOwnerContactCount:
                  t.buyerTaggingContact.buyerTaggingPaidOwnerContactCount,
                buyerTaggingAgentContactCount:
                  t.buyerTaggingContact.buyerTaggingAgentContactCount,
                buyerTaggingBuilderContactCount:
                  t.buyerTaggingContact.buyerTaggingBuilderContactCount,
              });
            N({ type: "BuyerTaggingContactCountUpdate", payload: n });
          };
        return a.a.createElement(
          a.a.Fragment,
          null,
          e.formName === s.formName &&
            x &&
            a.a.createElement(
              "div",
              { className: "contact-form show", id: "contact-form" },
              a.a.createElement(
                "div",
                { className: "contact-form__flex" },
                a.a.createElement(
                  "div",
                  { className: "contact-form__content" },
                  a.a.createElement("div", {
                    className: "contact-form__close",
                    onClick: t,
                  }),
                  "10026" === s.pType &&
                    a.a.createElement(vt, {
                      onCoWorkingSubmit: function (t, r) {
                        var n;
                        console.log("onCoWorkingSubmit", t),
                          j(r),
                          ee("Continue"),
                          w.push(t),
                          console.log("onCoWorkingSubmit extended: ", w),
                          (!v && !g) ||
                            h ||
                            ((h = !0),
                            (n = {
                              selectIsd: C.selectIsd,
                              userEmail: C.userEmail,
                              userMobile: C.userMobile,
                              userMobileIsd: C.userIsdCode,
                              userName: C.userName,
                              userConsent: C.userConsent,
                              optIn: C.optIn,
                              whatsAppConsent: C.whatsAppConsent,
                              cwSeats: "",
                              cwDuration: "",
                              cwSpacetype: "",
                              pType: "",
                              contact_src: "legal_Infra_status_X",
                            }),
                            console.log("Use Effect pType line-744:", s.pType),
                            "10026" == s.pType &&
                              ((n.pType = "10026"),
                              console.log("Use Effect extended: ", w, w.length),
                              w.forEach(function (e) {
                                console.log("Use Effect forEach"),
                                  e.forEach(function (e) {
                                    "seats" == e.value
                                      ? (n.cwSeats = e.id)
                                      : "duration" == e.value
                                      ? (n.cwDuration = e.id)
                                      : (n.cwSpacetype = e.id);
                                  });
                              }),
                              (n.contact_src = "legal_Infra_status_X"),
                              console.log("use Effect formValues: ", n)),
                            je(!1),
                            (r = {
                              requestInterface: e.source,
                              contactType: s.contactType,
                              searchType: s.searchType,
                            }),
                            Object(D.b)(n, s, C, r, Ue)),
                          _(!1),
                          (v = !1);
                      },
                      formScreen: s.formScreen,
                      actionType: R.u,
                      screen: S,
                      setScreen: j,
                      buttonType: s.buttonType,
                    }),
                  ("10026" !== s.pType || ("10026" === s.pType && 4 === S)) &&
                    a.a.createElement(
                      a.a.Fragment,
                      null,
                      "10026" !== s.pType &&
                        s.formScreen &&
                        ("search_web" === e.source ||
                          ("property" !== s.contactType &&
                            "search_wap" === e.source) ||
                          ("property" === s.contactType &&
                            "search_wap" === e.source &&
                            s.formScreen !== R.u)) &&
                        !Object(p.a)(s.contact_interface) &&
                        !(
                          "itarget_contact" === s.contact_interface ||
                          "lead_gen_banner_contact" === s.contact_interface
                        ) &&
                        a.a.createElement(c.a, {
                          price: s.price,
                          pType: s.propertyType,
                        }),
                      s.formScreen &&
                        (s.formScreen === R.i || s.formScreen === R.C) &&
                        a.a.createElement(
                          "div",
                          {
                            className:
                              "contact-form__inner contact-form__inner--392",
                            id: "contact-default",
                          },
                          a.a.createElement(
                            a.a.Fragment,
                            null,
                            xe.askWhatsApp2 &&
                              s.formScreen &&
                              s.formScreen === R.i
                              ? a.a.createElement(
                                  "div",
                                  {
                                    className: "contact-continue-whatsapp",
                                    id: "contact-whatsapp",
                                  },
                                  a.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "contact-continue-whatsapp__wrap",
                                    },
                                    a.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "contact-continue-whatsapp__img-sec",
                                      },
                                      a.a.createElement("img", {
                                        src: "https://cdn.staticmb.com/srpstatic/images/continue-whatsapp.png",
                                        alt: "",
                                      })
                                    ),
                                    a.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "contact-continue-whatsapp__title",
                                      },
                                      "To Contact, Continue on"
                                    ),
                                    a.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "contact-continue-whatsapp__btn",
                                        onClick: function () {
                                          var t = s.requestBody.propertyId
                                              .toString()
                                              .split("|")[0],
                                            r = be.a.getSemCookie(),
                                            n =
                                              ((function () {
                                                n = Rr().mark(function n() {
                                                  return Rr().wrap(function (
                                                    n
                                                  ) {
                                                    for (;;)
                                                      switch (
                                                        (n.prev = n.next)
                                                      ) {
                                                        case 0:
                                                          return (
                                                            (n.next = 2),
                                                            Tt.a.get(
                                                              "/wa/generateCorelationId?pId=" +
                                                                t +
                                                                "&contactInterface=property_srp_whatsapp_login&platform=" +
                                                                e
                                                                  .additionalBeanData
                                                                  .platform +
                                                                "&semSource=" +
                                                                r +
                                                                "&intent=contact-srp"
                                                            )
                                                          );
                                                        case 2:
                                                          return n.abrupt(
                                                            "return",
                                                            n.sent
                                                          );
                                                        case 3:
                                                        case "end":
                                                          return n.stop();
                                                      }
                                                  },
                                                  n);
                                                });
                                                var n,
                                                  a = function () {
                                                    var e = this,
                                                      t = arguments;
                                                    return new Promise(
                                                      function (r, a) {
                                                        var o = n.apply(e, t);
                                                        function c(e) {
                                                          qr(
                                                            o,
                                                            r,
                                                            a,
                                                            c,
                                                            i,
                                                            "next",
                                                            e
                                                          );
                                                        }
                                                        function i(e) {
                                                          qr(
                                                            o,
                                                            r,
                                                            a,
                                                            c,
                                                            i,
                                                            "throw",
                                                            e
                                                          );
                                                        }
                                                        c(void 0);
                                                      }
                                                    );
                                                  };
                                                return function () {
                                                  return a.apply(
                                                    this,
                                                    arguments
                                                  );
                                                };
                                              })()().then(function (e) {
                                                var t;
                                                null != e &&
                                                  null != e.data &&
                                                  ((t =
                                                    "Hello Magicbricks, Kindly assist me with the contact details of this Property- \r\nProperty Id: " +
                                                    e.data),
                                                  window.open(
                                                    "https://api.whatsapp.com/send?phone=919289366466&text=" +
                                                      t,
                                                    "wap_whats_app_login",
                                                    "width=800,height=500"
                                                  ),
                                                  be.a.createCookie(
                                                    "corelationId",
                                                    e.data,
                                                    0.083
                                                  ));
                                              }),
                                              Gr(
                                                Gr(
                                                  {},
                                                  s.gaObject.contactinfoformopen
                                                ),
                                                {},
                                                {
                                                  eventLabel:
                                                    "whatsapp_cta_clicked | whatsapp_flow",
                                                  eventCategory:
                                                    "Contact_Whatsapp_LoginPage_Click",
                                                }
                                              ));
                                          N(e.contactGaAction(n));
                                        },
                                      },
                                      "Whatsapp"
                                    ),
                                    a.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "contact-continue-whatsapp__skip",
                                      },
                                      "and Skip the Registration"
                                    ),
                                    a.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "contact-continue-whatsapp__or",
                                      },
                                      "Or"
                                    )
                                  ),
                                  a.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "contact-continue-whatsapp__register-btn",
                                      onClick: function () {
                                        return (
                                          (t = Gr(
                                            Gr(
                                              {},
                                              s.gaObject.contactInfoFormOpen
                                            ),
                                            {},
                                            {
                                              eventLabel:
                                                "register_here_clicked | whatsapp_flow",
                                              eventCategory:
                                                "Contact_Whatsapp_LoginPage_Click",
                                            }
                                          )),
                                          N(e.contactGaAction(t)),
                                          void N({
                                            type: "askWhatsApp2",
                                            payload: !1,
                                          })
                                        );
                                        var t;
                                      },
                                    },
                                    "Register on Magicbricks"
                                  )
                                )
                              : a.a.createElement(
                                  a.a.Fragment,
                                  null,
                                  !xe.askWhatsApp2 &&
                                    s.formScreen &&
                                    s.formScreen === R.i &&
                                    a.a.createElement(Xe, {
                                      contactFormHeadingText:
                                        s.contactFormHeadingText,
                                      contactFormHeadingDescText:
                                        s.contactFormHeadingDescText,
                                      buttonType: s.buttonType,
                                      onSubmit: function (t, r) {
                                        if (
                                          ("10026" === s.pType &&
                                            ((t.pType = "10026"),
                                            w.forEach(function (e) {
                                              console.log(
                                                "onSubmitContactDetails forEach"
                                              ),
                                                e.forEach(function (e) {
                                                  "seats" == e.value
                                                    ? (t.cwSeats = e.id)
                                                    : "duration" == e.value
                                                    ? (t.cwDuration = e.id)
                                                    : (t.cwSpacetype = e.id);
                                                });
                                            }),
                                            (t.contact_src =
                                              "legal_Infra_status_X")),
                                          void 0 !== q && q)
                                        ) {
                                          var n = {};
                                          if (
                                            ((a = n),
                                            !t.userConsent &&
                                              (a.userConsent =
                                                "Please agree to T&C, Privacy Policy and Cookie Policy"),
                                            !Object(p.c)(n))
                                          )
                                            throw new Te.a(n);
                                        }
                                        var a;
                                        if (!Object(D.i)(r))
                                          throw (
                                            ((a = Object(D.p)(t, r)),
                                            new Te.a(a))
                                          );
                                        N({
                                          type: "lastContactPropertyId",
                                          payload: s.requestBody.propertyId,
                                        }),
                                          void 0 !== s.semTrackingEnquire &&
                                            null !== s.semTrackingEnquire &&
                                            "Y" == s.semTrackingEnquire &&
                                            ("commercial" == s.search
                                              ? gtag("event", "conversion", {
                                                  send_to:
                                                    "AW-994415509/JFe6CP3Fxm0QlaeW2gM",
                                                })
                                              : "plot" != s.search &&
                                                "R" == s.category
                                              ? gtag("event", "conversion", {
                                                  send_to:
                                                    "AW-994415509/Uhr6CLa6gXMQlaeW2gM",
                                                })
                                              : gtag("event", "conversion", {
                                                  send_to:
                                                    "AW-994415509/FF6vCMWr_FcQlaeW2gM",
                                                })),
                                          je(!1),
                                          (document.getElementById(
                                            "pageLoader"
                                          ).style.display = "block"),
                                          (n = {
                                            requestInterface: e.source,
                                            contactType: s.contactType,
                                            searchType: s.searchType,
                                          }),
                                          Object(D.l)(t, s, C, n, Ue),
                                          (function () {
                                            var e,
                                              t =
                                                0 < arguments.length &&
                                                void 0 !== arguments[0]
                                                  ? arguments[0]
                                                  : {};
                                            try {
                                              Object(p.c)(t) ||
                                                Object(p.a)(t.userName) ||
                                                be.a.createContactCookie(
                                                  "userName",
                                                  t.userName,
                                                  b.contactCookiesExpiryLimit,
                                                  !0
                                                ),
                                                Object(p.c)(t) ||
                                                  Object(p.a)(t.userMobile) ||
                                                  be.a.createContactCookie(
                                                    "userMobile",
                                                    t.userMobile,
                                                    b.contactCookiesExpiryLimit,
                                                    !0
                                                  ),
                                                Object(p.c)(t) ||
                                                  Object(p.a)(t.userEmail) ||
                                                  (2 <
                                                    (e = Object(p.d)(
                                                      t.userEmail
                                                    )).length &&
                                                    '"' == e[0] &&
                                                    '"' == e[e.length - 1] &&
                                                    (e = e.substring(
                                                      1,
                                                      e.length - 1
                                                    )),
                                                  be.a.createContactCookie(
                                                    "userEmail",
                                                    e,
                                                    b.contactCookiesExpiryLimit,
                                                    !0
                                                  )),
                                                Object(p.c)(t) ||
                                                  Object(p.a)(t.selectIsd) ||
                                                  be.a.createContactCookie(
                                                    "userMobileCountry",
                                                    t.selectIsd,
                                                    b.contactCookiesExpiryLimit,
                                                    !0
                                                  );
                                            } catch (e) {
                                              console.error(e);
                                            }
                                          })(t),
                                          Object(p.c)(s.gaObject) ||
                                            Object(p.c)(
                                              s.gaObject.contactinfoformsubmit
                                            ) ||
                                            "" ===
                                              s.gaObject
                                                .contactinfoformsubmit ||
                                            (y.isShortList
                                              ? ((r = Gr(
                                                  Gr(
                                                    {},
                                                    y.shortListGaCommonData
                                                  ),
                                                  {},
                                                  {
                                                    eventCategory:
                                                      "contactinfoformsubmit",
                                                  }
                                                )),
                                                N(e.contactGaAction(r)))
                                              : ((n = Gr(
                                                  {},
                                                  s.gaObject
                                                    .contactinfoformsubmit
                                                )),
                                                N(e.contactGaAction(n))));
                                      },
                                      contactDataGA: s,
                                      selectIsd: F,
                                      isGdprCountry: q,
                                      userConsent: G,
                                      whatsAppConsent: V,
                                      optIn: H,
                                      buttonName: X,
                                      emailSuggestion: ne,
                                      setEmailSuggestion: ae,
                                      advertiserDetail: ue,
                                      formName: e.formName,
                                      contactGaAction: e.contactGaAction,
                                      source: e.source,
                                      setMobileIsd: he,
                                      shortlists: y,
                                      setShowOtp: O,
                                    })
                                ),
                            E &&
                              s.formScreen &&
                              s.formScreen === R.C &&
                              a.a.createElement($, {
                                mobile:
                                  null != f &&
                                  null != f.values &&
                                  null != f.values.userMobile
                                    ? f.values.userMobile
                                    : "",
                                onSubmit: r,
                                onEditContactHandler: l,
                                isNRIContact: te,
                                mobileIsdVal: ve,
                                verifyOtpButtonLabel: le,
                                contactDataGA: s,
                                setVerifyOtpButtonLabel: se,
                                contactGaAction: e.contactGaAction,
                                setIsNRIContact: re,
                                otpLimitMessage: z,
                                setOtpLimitMessage: Z,
                                shortlists: y,
                              }),
                            !E &&
                              s.formScreen &&
                              s.formScreen === R.C &&
                              a.a.createElement(fr, {
                                mobile:
                                  null != f &&
                                  null != f.values &&
                                  null != f.values.userMobile
                                    ? f.values.userMobile
                                    : "",
                                onSubmit: r,
                                onEditContactHandler: l,
                                isNRIContact: te,
                                mobileIsdVal: ve,
                                verifyOtpButtonLabel: le,
                                contactDataGA: s,
                                setVerifyOtpButtonLabel: se,
                                contactGaAction: e.contactGaAction,
                                setIsNRIContact: re,
                                otpLimitMessage: z,
                                setOtpLimitMessage: Z,
                                shortlists: y,
                                switchToOtpScreen: O,
                                selectIsd: F,
                                setCallTopMatchesState: function (e) {
                                  Oe(e);
                                },
                              })
                          )
                        ),
                      s.requestBody &&
                        Object(p.a)(s.requestBody.sbmcndsustatus) &&
                        "Y" == e.buyerTaggingRequired &&
                        "Y" == Be &&
                        s.formScreen &&
                        s.formScreen === R.u &&
                        a.a.createElement(tr, {
                          setShowBuyerTagging: _e,
                          showBuyerTagging: ge,
                          userType: k.userType,
                          closeContactForm: t,
                        }),
                      s.requestBody &&
                        !Object(p.a)(s.requestBody.sbmcndsustatus) &&
                        !Object(p.a)(s.requestBody.ctaruleid) &&
                        s.formScreen &&
                        (s.formScreen === R.u || s.formScreen === R.t) &&
                        a.a.createElement(Fr, {
                          contactData: s,
                          additionalSearchBeanData: b,
                          userInfoData: C,
                          isMobile: "search_wap" === e.source,
                          closeContactForm: function () {
                            (document.querySelector(
                              ".contact-form__close"
                            ).style.display = "block"),
                              "I" == s.userType || "Owner" == s.userType
                                ? (pe || (ye(de), fe(!0)),
                                  N({
                                    type: "UPDATECONTACTBODY",
                                    payload: { ctaruleid: "" },
                                  }))
                                : N({
                                    type: "UPDATECONTACTBODY",
                                    payload: {
                                      sbmcndsustatus: "",
                                      ctaruleid: "",
                                    },
                                  });
                          },
                        }),
                      s.requestBody &&
                        Me &&
                        "10026" !== s.pType &&
                        s.formScreen &&
                        s.formScreen === R.u &&
                        ("search_web" === s.requestInterface ||
                          ("property" !== s.contactType &&
                            "search_wap" === s.requestInterface)) &&
                        "Request Photo" !== s.buttonType &&
                        a.a.createElement(Pe, {
                          primeInfo: L,
                          recieverInfos: k,
                          nonPrimeUserFreeOwnerLimit: T,
                          contactGaAction: e.contactGaAction,
                          isNRIContact: te,
                          tyUrl: de,
                          editTy: pe,
                          showTopMatchesForPrime: i,
                        }),
                      Se &&
                        (Ce ||
                          "Y" === be.a.readCookie("otpFlage") ||
                          "Y" === be.a.readCookie("verificationFlag") ||
                          "Y" === be.a.readCookie("verifcationFlag"))
                        ? a.a.createElement(_r, {
                            tyUrl: de,
                            contactGaAction: e.contactGaAction,
                          })
                        : Me &&
                            "10026" !== s.pType &&
                            s.formScreen &&
                            s.formScreen === R.u &&
                            ("search_web" === s.requestInterface ||
                              "search_wap" === s.requestInterface) &&
                            "Request Photo" === s.buttonType &&
                            a.a.createElement(
                              "div",
                              {
                                className:
                                  "contact-form__inner contact-form__inner--392",
                              },
                              a.a.createElement(ft, {
                                heading: "Photo Request sent successfully!",
                                subHeading:
                                  "Keep exploring to get the best match possible",
                                isNRIContact: te,
                              })
                            ),
                      !Se &&
                        !Object(p.a)(de) &&
                        Fe &&
                        (0 == ge ||
                          "N" == Be ||
                          !Object(p.a)(s.requestBody.sbmcndsustatus)) &&
                        "10026" !== s.pType &&
                        s.formScreen &&
                        (s.formScreen === R.u ||
                          s.formScreen === R.t ||
                          s.formScreen === R.s ||
                          s.formScreen === R.r) &&
                        "property" === s.contactType &&
                        a.a.createElement(
                          a.a.Fragment,
                          null,
                          a.a.createElement(pt, {
                            tyUrl: de,
                            editTy: pe,
                            setEditTy: fe,
                            closeContactForm: t,
                            requestInterface: s.requestInterface,
                            contactData: s,
                          })
                        ),
                      !Se &&
                        Me &&
                        "10026" !== s.pType &&
                        s.formScreen &&
                        s.formScreen === R.t &&
                        a.a.createElement(
                          "div",
                          {
                            className:
                              "contact-form__inner contact-form__inner--392",
                          },
                          a.a.createElement(nt, {
                            contactLimit: T,
                            primeInfo: L,
                            recieverInfos: k,
                            showThankYou: function () {
                              var e = R.u,
                                t = Gr(
                                  Gr({}, s),
                                  {},
                                  {
                                    userActionType: R.j,
                                    isUserAction: !0,
                                    recieverId: s.requestBody.propertyId,
                                    formScreen: e,
                                    isAutoContact: !1,
                                  }
                                );
                              Ge(t),
                                "property" === s.contactType &&
                                  e === R.u &&
                                  (ye(de), fe(!0));
                            },
                            tyUrl: de,
                            editTy: pe,
                            showTopMatchesForPrime: i,
                          })
                        ),
                      !Se &&
                        Me &&
                        "10026" !== s.pType &&
                        s.formScreen &&
                        s.formScreen === R.s &&
                        a.a.createElement(
                          "div",
                          {
                            className:
                              "contact-form__inner contact-form__inner--392",
                          },
                          a.a.createElement(it, {
                            primeInfo: L,
                            recieverInfos: k,
                            tyUrl: de,
                            editTy: pe,
                            showTopMatchesForPrime: i,
                          })
                        ),
                      !Se &&
                        Me &&
                        "10026" !== s.pType &&
                        s.formScreen &&
                        s.formScreen === R.q &&
                        a.a.createElement(
                          "div",
                          {
                            className:
                              "contact-form__inner contact-form__inner--392",
                          },
                          a.a.createElement(Qe, null)
                        )
                    )
                )
              ),
              "10026" !== s.pType &&
                s.formScreen &&
                s.formScreen === R.r &&
                a.a.createElement(mt, null),
              Le &&
                a.a.createElement(
                  "span",
                  { style: { display: "none" } },
                  a.a.createElement("iframe", { src: ke })
                )
            )
        );
      };
    },
    343: function (e, t, r) {
      "use strict";
      var n = r(0),
        a = r.n(n);
      t.a = function (e) {
        return a.a.createElement(
          "div",
          { className: "contact-form__text" },
          e.text
        );
      };
    },
    348: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return n;
      }),
        r.d(t, "b", function () {
          return a;
        });
      var n = function (e, t) {
          var r,
            n = [];
          return (
            e.city &&
              e.developerNames &&
              t.developerNames &&
              0 < t.developerNames.length &&
              t.developerNames.map(function (t) {
                (t = {
                  result: t.value.split(",")[0].replaceAll("-", " "),
                  state: "",
                  stateName: "",
                  city: e.city,
                  rfnum: t.key,
                  suggestType: "builder",
                  latitude: "",
                  longitude: "",
                }),
                  n.push(t);
              }),
            e.city &&
              t.psmNames &&
              0 < t.psmNames.length &&
              "Y" !== t.isNearMeSeoUrl &&
              t.psmNames.map(function (t) {
                (t = {
                  result: t.value,
                  state: "",
                  stateName: "",
                  city: e.city,
                  rfnum: t.key,
                  suggestType: "prj",
                  latitude: "",
                  longitude: "",
                }),
                  n.push(t);
              }),
            e.city &&
              t.localityNames &&
              0 < t.localityNames.length &&
              t.localityNames.map(function (t) {
                (t = {
                  result: t.value,
                  state: "",
                  stateName: "",
                  city: e.city,
                  rfnum: t.key,
                  suggestType: "lt",
                  latitude: "",
                  longitude: "",
                }),
                  n.push(t);
              }),
            e.city &&
              t.subUrbName &&
              ((r = {
                result: t.subUrbName.value,
                state: "",
                stateName: "",
                city: e.city,
                rfnum: t.subUrbName.key,
                suggestType: "sub",
                latitude: "",
                longitude: "",
              }),
              n.push(r)),
            e.city &&
              t.stateName &&
              ((r = {
                result: t.stateName.value,
                state: "",
                stateName: "",
                city: e.city,
                rfnum: t.stateName.key,
                suggestType: "state_name",
                latitude: "",
                longitude: "",
              }),
              n.push(r)),
            e.city &&
              t.indiaUrl &&
              ((r = {
                result: "India",
                state: "",
                stateName: "",
                city: e.city,
                rfnum: t.cityName.key,
                suggestType: "india",
                latitude: "",
                longitude: "",
              }),
              n.push(r)),
            e.city &&
              t.cityName &&
              ((r = {
                result: t.cityName.value,
                state: "",
                stateName: "",
                city: e.city,
                rfnum: t.cityName.key,
                suggestType: "city_name",
                latitude: "",
                longitude: "",
              }),
              n.push(r)),
            n
          );
        },
        a = function (e, t) {
          return (
            t.city &&
              t.zoneNames &&
              0 < t.zoneNames.length &&
              t.zoneNames.map(function (r) {
                (r = {
                  result: r.value,
                  state: "",
                  stateName: "",
                  city: t.city,
                  rfnum: r.key,
                  suggestType: "zone",
                  latitude: "",
                  longitude: "",
                }),
                  e.push(r);
              }),
            e
          );
        };
    },
    41: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return _;
      }),
        r.d(t, "i", function () {
          return w;
        }),
        r.d(t, "j", function () {
          return j;
        }),
        r.d(t, "f", function () {
          return k;
        }),
        r.d(t, "l", function () {
          return P;
        }),
        r.d(t, "b", function () {
          return T;
        }),
        r.d(t, "e", function () {
          return I;
        }),
        r.d(t, "g", function () {
          return L;
        }),
        r.d(t, "c", function () {
          return A;
        }),
        r.d(t, "d", function () {
          return x;
        }),
        r.d(t, "n", function () {
          return B;
        }),
        r.d(t, "o", function () {
          return F;
        }),
        r.d(t, "h", function () {
          return M;
        }),
        r.d(t, "k", function () {
          return D;
        }),
        r.d(t, "p", function () {
          return O;
        }),
        r.d(t, "m", function () {
          return R;
        });
      (t = r(58)), (t = r.n(t));
      var n = r(340),
        a = r(798);
      r(84);
      var o = r(5),
        c = r(6),
        i = r(7),
        l = r(67),
        s = r(117),
        u = r(1);
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
      function p(e, t) {
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                d(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function d(e, t, r) {
        return (
          (t = (function (e) {
            return (
              (e = (function (e, t) {
                if ("object" !== m(e) || null === e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 === r) return String(e);
                if ("object" !== m((r = r.call(e, "string")))) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              })(e)),
              "symbol" === m(e) ? e : String(e)
            );
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function y(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            var r;
            if (e)
              return "string" == typeof e
                ? b(e, t)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
                        ? e.constructor.name
                        : r) || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
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
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function v() {
        v = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a =
            (y = "function" == typeof Symbol ? Symbol : {}).iterator ||
            "@@iterator",
          o = y.asyncIterator || "@@asyncIterator",
          c = y.toStringTag || "@@toStringTag";
        function i(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
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
          i = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function l(e, t, r, a) {
          var o, c, i, l;
          (t = t && t.prototype instanceof p ? t : p),
            (t = Object.create(t.prototype)),
            (a = new w(a || []));
          return (
            n(t, "_invoke", {
              value:
                ((o = e),
                (c = r),
                (i = a),
                (l = "suspendedStart"),
                function (e, t) {
                  if ("executing" === l)
                    throw new Error("Generator is already running");
                  if ("completed" === l) {
                    if ("throw" === e) throw t;
                    return { value: void 0, done: !0 };
                  }
                  for (i.method = e, i.arg = t; ; ) {
                    var r = i.delegate;
                    if (
                      r &&
                      ((r = (function e(t, r) {
                        var n = r.method,
                          a = t.iterator[n];
                        return void 0 === a
                          ? ((r.delegate = null),
                            ("throw" === n &&
                              t.iterator.return &&
                              ((r.method = "return"),
                              (r.arg = void 0),
                              e(t, r),
                              "throw" === r.method)) ||
                              ("return" !== n &&
                                ((r.method = "throw"),
                                (r.arg = new TypeError(
                                  "The iterator does not provide a '" +
                                    n +
                                    "' method"
                                )))),
                            u)
                          : "throw" === (n = s(a, t.iterator, r.arg)).type
                          ? ((r.method = "throw"),
                            (r.arg = n.arg),
                            (r.delegate = null),
                            u)
                          : (a = n.arg)
                          ? a.done
                            ? ((r[t.resultName] = a.value),
                              (r.next = t.nextLoc),
                              "return" !== r.method &&
                                ((r.method = "next"), (r.arg = void 0)),
                              (r.delegate = null),
                              u)
                            : a
                          : ((r.method = "throw"),
                            (r.arg = new TypeError(
                              "iterator result is not an object"
                            )),
                            (r.delegate = null),
                            u);
                      })(r, i)),
                      r)
                    ) {
                      if (r === u) continue;
                      return r;
                    }
                    if ("next" === i.method) i.sent = i._sent = i.arg;
                    else if ("throw" === i.method) {
                      if ("suspendedStart" === l)
                        throw ((l = "completed"), i.arg);
                      i.dispatchException(i.arg);
                    } else "return" === i.method && i.abrupt("return", i.arg);
                    if (
                      ((l = "executing"), "normal" === (r = s(o, c, i)).type)
                    ) {
                      if (
                        ((l = i.done ? "completed" : "suspendedYield"),
                        r.arg === u)
                      )
                        continue;
                      return { value: r.arg, done: i.done };
                    }
                    "throw" === r.type &&
                      ((l = "completed"),
                      (i.method = "throw"),
                      (i.arg = r.arg));
                  }
                }),
            }),
            t
          );
        }
        function s(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        e.wrap = l;
        var u = {};
        function p() {}
        function f() {}
        function d() {}
        var y,
          b,
          h =
            ((b =
              (b =
                (i((y = {}), a, function () {
                  return this;
                }),
                Object.getPrototypeOf)) && b(b(S([])))) &&
              b !== t &&
              r.call(b, a) &&
              (y = b),
            (d.prototype = p.prototype = Object.create(y)));
        function g(e) {
          ["next", "throw", "return"].forEach(function (t) {
            i(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function _(e, t) {
          var a;
          n(this, "_invoke", {
            value: function (n, o) {
              function c() {
                return new t(function (a, c) {
                  !(function n(a, o, c, i) {
                    var l;
                    if ("throw" !== (a = s(e[a], e, o)).type)
                      return (o = (l = a.arg).value) &&
                        "object" == m(o) &&
                        r.call(o, "__await")
                        ? t.resolve(o.__await).then(
                            function (e) {
                              n("next", e, c, i);
                            },
                            function (e) {
                              n("throw", e, c, i);
                            }
                          )
                        : t.resolve(o).then(
                            function (e) {
                              (l.value = e), c(l);
                            },
                            function (e) {
                              return n("throw", e, c, i);
                            }
                          );
                    i(a.arg);
                  })(n, o, a, c);
                });
              }
              return (a = a ? a.then(c, c) : c());
            },
          });
        }
        function E(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function w(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function S(e) {
          if (e) {
            var t,
              n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length))
              return (
                (t = -1),
                ((n = function n() {
                  for (; ++t < e.length; )
                    if (r.call(e, t)) return (n.value = e[t]), (n.done = !1), n;
                  return (n.value = void 0), (n.done = !0), n;
                }).next = n)
              );
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          n(h, "constructor", { value: (f.prototype = d), configurable: !0 }),
          n(d, "constructor", { value: f, configurable: !0 }),
          (f.displayName = i(d, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            return (
              !!(e = "function" == typeof e && e.constructor) &&
              (e === f || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), i(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(h)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          g(_.prototype),
          i(_.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = _),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var c = new _(l(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? c
              : c.next().then(function (e) {
                  return e.done ? e.value : c.next();
                });
          }),
          g(h),
          i(h, c, "Generator"),
          i(h, a, function () {
            return this;
          }),
          i(h, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t,
              r = Object(e),
              n = [];
            for (t in r) n.push(t);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var t = n.pop();
                  if (t in r) return (e.value = t), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = S),
          (w.prototype = {
            constructor: w,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
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
              function n(r, n) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; 0 <= a; --a) {
                var o = this.tryEntries[a],
                  c = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var i = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (i && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (i) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
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
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), u;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                var r,
                  n,
                  a = this.tryEntries[t];
                if (a.tryLoc === e)
                  return (
                    "throw" === (r = a.completion).type && ((n = r.arg), O(a)),
                    n
                  );
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                u
              );
            },
          }),
          e
        );
      }
      function h(e, t, r, n, a, o, c) {
        try {
          var i = e[o](c),
            l = i.value;
        } catch (e) {
          return void r(e);
        }
        i.done ? t(l) : Promise.resolve(l).then(n, a);
      }
      function g(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, a) {
            var o = e.apply(t, r);
            function c(e) {
              h(o, n, a, c, i, "next", e);
            }
            function i(e) {
              h(o, n, a, c, i, "throw", e);
            }
            c(void 0);
          });
        };
      }
      (r = window.origin + "/mbcontact/"), (r = "".concat(r).concat(""));
      var _ = t.a.create({ baseURL: r }),
        E = t.a.create({ baseURL: "/mbsearch" }),
        O = function (e, t) {
          var r = {};
          if (
            void 0 !== t &&
            null != t &&
            t &&
            void 0 !== t.BlockwordsResponse &&
            null != t.BlockwordsResponse &&
            t.BlockwordsResponse &&
            S(t.BlockwordsResponse)
          ) {
            var a =
              void 0 !== t.BlockwordsResponse.blockWords &&
              null != t.BlockwordsResponse.blockWords
                ? t.BlockwordsResponse.blockWords.join(" ")
                : "";
            a.includes(e.userName) &&
              (r.userName = "Entered name is blocked! Please use another"),
              a.includes(e.userEmail) &&
                (r.userEmail =
                  "Entered email Id is blocked! Please use another"),
              a.includes(e.userMobile) &&
                (r.userMobile =
                  "Entered number is blocked! Please use another");
          } else {
            if (
              void 0 !== t &&
              null != t &&
              t &&
              void 0 !== t.validateUserEmailResponse &&
              null != t.validateUserEmailResponse &&
              t.validateUserEmailResponse &&
              !j(t.validateUserEmailResponse)
            )
              throw (
                ((r.userEmail = "Please enter valid Email Id."),
                Object(o.c)(t.validateUserEmailResponse) ||
                  !0 !== t.validateUserEmailResponse.isDisposableEmail ||
                  (r.userEmail = "Use a valid domain name."),
                new n.a({ userEmail: r.userEmail }))
              );
            if (
              void 0 !== t &&
              null != t &&
              t &&
              null != t.validateUserMobileIsdResponse &&
              !t.validateUserMobileIsdResponse
            )
              throw (
                ((r.userMobile = "Invalid number for given country."),
                new n.a({ userMobile: r.userMobile }))
              );
          }
          return r;
        },
        w = function (e) {
          var t = !1;
          return (
            !!(
              void 0 !== e &&
              null != e &&
              e &&
              void 0 !== e.BlockwordsResponse &&
              null != e.BlockwordsResponse &&
              e.BlockwordsResponse &&
              !S(e.BlockwordsResponse) &&
              void 0 !== e.validateUserEmailResponse &&
              null != e.validateUserEmailResponse &&
              e.validateUserEmailResponse &&
              j(e.validateUserEmailResponse) &&
              null != e.validateUserMobileIsdResponse &&
              e.validateUserMobileIsdResponse
            ) || t
          );
        },
        S = function (e) {
          return (
            void 0 === e ||
            null == e ||
            !e ||
            void 0 === e.blockWrodsfound ||
            null == e.blockWrodsfound ||
            !1 !== e.blockWrodsfound
          );
        },
        j = function (e) {
          return !!(
            Object(o.c)(e) ||
            void 0 === e.isValidFormat ||
            null == e.isValidFormat ||
            (!1 !== e.isValidFormat &&
              !1 !== e.deliverability &&
              !0 !== e.isDisposableEmail)
          );
        },
        C = a.a.load(),
        N = (function () {
          var e = g(
            v().mark(function e() {
              var t, r;
              return v().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), C;
                    case 2:
                      return (t = e.sent), (e.next = 5), t.get();
                    case 5:
                      return (
                        (t = e.sent), (r = t.visitorId), e.abrupt("return", r)
                      );
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        k = (function () {
          var e = g(
            v().mark(function e(t) {
              return v().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      fetch("https://extreme-ip-lookup.com/json")
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          return Promise.all([e, N()]);
                        })
                        .then(function (e) {
                          var r = (e = y(e, 2))[0];
                          e = e[1];
                          t(e, r);
                        });
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        P = (function () {
          var e = g(
            v().mark(function e(t, r, n, a, i) {
              var l, s, m, p, d, y, b, h, g, E;
              return v().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((l = {
                          message: "",
                          sendMailnSms: !1,
                          palnToBuy: "",
                          maxBudget: "",
                          minBudget: "",
                          interestedIn: "",
                          quotePrice: "",
                          downloadReport: "",
                          isFromAlert: !1,
                          conRecType: "",
                        }),
                        (y =
                          void 0 !== n &&
                          void 0 !== n.userUniqToken &&
                          null != n.userUniqToken
                            ? n.userUniqToken
                            : ""),
                        (b =
                          void 0 !== n &&
                          void 0 !== n.hmacCode &&
                          null != n.hmacCode
                            ? n.hmacCode
                            : ""),
                        (s = {
                          userUniqToken: y,
                          access_token: y,
                          token_type: "Bearer",
                          hmacCode: b,
                        }),
                        (p =
                          void 0 !== t &&
                          null != t &&
                          void 0 !== t.userConsent &&
                          null != t.userConsent &&
                          t.userConsent
                            ? "Y"
                            : "N"),
                        (d =
                          void 0 !== t &&
                          null != t &&
                          void 0 !== t.optIn &&
                          null != t.optIn &&
                          t.optIn
                            ? "Y"
                            : "N"),
                        (E = r.requestBody.propertyId),
                        (h = r.requestBody.propertyId),
                        !Object(o.a)(E) && !Object(o.a)(r.encID))
                      )
                        try {
                          (m = E.split("|")), (h = r.encID + "|" + m[1]);
                        } catch (e) {
                          console.error(e);
                        }
                      return (
                        (l = f(
                          f(f(f(f({}, l), a), r.requestBody), t),
                          {},
                          {
                            userMobileIsd:
                              null != t.selectIsd
                                ? t.selectIsd
                                : t.userMobileIsd,
                            fingerprint: n.fingerprint,
                            userAcceptance: p,
                            optIn: d,
                            userUniqToken: y,
                            hmacCode: b,
                            propertyId: h,
                          }
                        )),
                        (E = c.a.readCookie("gclid")),
                        Object(o.a)(E) || (l = f(f({}, l), {}, { gclid: E })),
                        (p = c.a.readCookie("userCookie")),
                        Object(o.a)(p) ||
                          (l = f(f({}, l), {}, { sbmdAlias: p })),
                        (d = c.a.readCookie("semAttributesCookie")),
                        (y = Object(u.y)()),
                        Object(o.a)(d) ||
                          (Object(o.a)(y) || (d += "#" + y),
                          (l = f(f({}, l), {}, { semAttributesCookie: d }))),
                        (b = { payload: l, headers: s }),
                        (h = window.btoa(JSON.stringify(b))),
                        sessionStorage.setItem(r.requestBody.advertisers[0], h),
                        (e.next = 22),
                        _.post("/initiateContact", l, { headers: s })
                      );
                    case 22:
                      if (
                        void 0 !== (g = e.sent) &&
                        null != g &&
                        void 0 !== g.status &&
                        null != g.status &&
                        200 === g.status
                      )
                        return (
                          (e.next = 26),
                          _.post("/getTotalContactBT", l, { headers: s })
                        );
                      e.next = 31;
                      break;
                    case 26:
                      void 0 !== (E = e.sent) &&
                        null != E &&
                        void 0 !== E.status &&
                        null != E.status &&
                        200 === E.status &&
                        (g.data = f(f({}, g.data), E.data)),
                        i(g.data),
                        (e.next = 32);
                      break;
                    case 31:
                      console.log("Error in Save Contact Response: ", g);
                    case 32:
                      return e.abrupt("return", g);
                    case 33:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, r, n, a, o) {
            return e.apply(this, arguments);
          };
        })(),
        T = function (e, t, r, n, a) {
          P(e, t, r, n, a);
        },
        I = (function () {
          var e = g(
            v().mark(function e(t) {
              var r, n, a, o;
              return v().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (r = c.a.readCookie("isGdpr")),
                        (n = c.a.readCookie("countryCnd")),
                        null == r || null == n
                          ? (e.next = 6)
                          : (t("true" == r, n), (e.next = 13));
                      break;
                    case 6:
                      return (
                        (e.next = 8),
                        Promise.all([
                          E.get("/getGdprData"),
                          _.get("/getCountryCndRFNumByIp"),
                        ])
                      );
                    case 8:
                      (r = e.sent),
                        (n = y(r, 2)),
                        (a = n[0]),
                        (o = n[1]),
                        200 == a.status &&
                          void 0 !== a.data &&
                          null != a.data &&
                          200 == o.status &&
                          void 0 !== o.data &&
                          null != o.data &&
                          t(a.data, o.data);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        L = function (e) {
          var t = document.getElementById("selectIsd");
          if (!Object(o.a)(e.userMobile) && null != t)
            return (
              0 < (e = t.options[t.selectedIndex].text).indexOf(" ") &&
              1 < e.split(" ").length
                ? (e = e.split(" ")[1])
                : 0 < e.indexOf("+") &&
                  1 < e.split("+").length &&
                  (e = "+" + e.split("+")[1]),
              e
            );
        },
        A = function (e, t, r) {
          var n = "";
          Object(o.c)(r) ||
            Object(o.c)(r.contactDataGA) ||
            Object(o.c)(r.contactDataGA.gaObject) ||
            Object(o.c)(r.contactDataGA.gaObject.contactInfoFormError) ||
            "" === r.contactDataGA.gaObject.contactInfoFormError ||
            (null == e.userName &&
              null == e.userEmail &&
              null == e.userMobile) ||
            (null != e.userName && (n = "Error - " + e.userName),
            null != e.userEmail &&
              (n =
                "" != n ? n + " | " + e.userEmail : "Error - " + e.userEmail),
            null != e.userMobile &&
              (n =
                "" != n ? n + " | " + e.userMobile : "Error - " + e.userMobile),
            r.shortlists.isShortList
              ? ((e = f(
                  f({}, r.shortlists.shortListGaCommonData),
                  {},
                  { eventCategory: "Contact Info Form", eventLabel: n }
                )),
                t(r.contactGaAction(e)))
              : ((e = f(
                  f({}, r.contactDataGA.gaObject.contactInfoFormError),
                  {},
                  { eventLabel: n }
                )),
                t(r.contactGaAction(e))));
        },
        x = function (e, t, r) {
          var n = "";
          Object(o.c)(r) ||
            Object(o.c)(r.contactDataGA) ||
            Object(o.c)(r.contactDataGA.gaObject) ||
            Object(o.c)(r.contactDataGA.gaObject.contactOtpFormError) ||
            "" === r.contactDataGA.gaObject.contactOtpFormError ||
            Object(o.a)(e) ||
            null == e.otp ||
            "OTP is incorrect" == e.otp ||
            ((n = "Error - " + e.otp),
            r.shortlists.isShortList
              ? ((e = f(
                  f({}, r.shortlists.shortListGaCommonData),
                  {},
                  { eventCategory: "Contact Otp Form", eventLabel: n }
                )),
                t(r.contactGaAction(e)))
              : ((e = f(
                  f({}, r.contactDataGA.gaObject.contactOtpFormError),
                  {},
                  { eventLabel: n }
                )),
                t(r.contactGaAction(e))));
        },
        B = function () {
          return function (e, t) {
            var r = (t = t()).contactCtaData,
              n =
                ((t = t.contactData).recieverId.split("|")[0],
                t.requestBody.advertisers[0].split("|")[0]),
              a = "",
              o = "Contacted";
            "WhatsApp Builder" === t.buttonType ||
            "WhatsApp Agent" === t.buttonType ||
            "WhatsApp Owner" === t.buttonType ||
            "Contact Builder" === t.buttonType ||
            "Contact Agent" === t.buttonType ||
            "Contact Owner" === t.buttonType ||
            "Contact" === t.buttonType ||
            "Join PrimePlus" === t.buttonType
              ? ((a = "contactFirstText"), (o = "Contacted"))
              : "Get a Quote" === t.buttonType
              ? ((a = "contactFirstText"), (o = "Requested"))
              : "Request Callback" === t.buttonType
              ? ((a = "contactSecondText"), (o = "Requested"))
              : "Enquire Now" === t.buttonType
              ? ((a = "contactSecondText"), (o = "Contacted"))
              : "Get Phone No." === t.buttonType
              ? ((a = "contactSecondText"), (o = "Phone no. sent"))
              : "Send Enquiry" === t.buttonType
              ? ((a = "contactSecondText"), (o = "Enquiry Sent"))
              : "Request Photo" === t.buttonType
              ? ((a = "photoContactText"), (o = "Photo Requested"))
              : "Ask Owner to Call" === t.buttonType
              ? ((a = "contactFirstText"), (o = "Request Sent"))
              : "Call Owner" === t.buttonType ||
                "Call Agent" === t.buttonType ||
                "Call Builder" === t.buttonType
              ? ((a = "contactFirstText"), (o = "Contacted"))
              : ("Request Photos" !== t.buttonType &&
                  "Ask Society Name" !== t.buttonType &&
                  "Check Availability" !== t.buttonType &&
                  "Request Site Visit" !== t.buttonType) ||
                ((a = "contactSecondText"), (o = "Request Sent")),
              (t = d({}, n, f(f({}, r[n]), {}, d({}, a, o))));
            e({ type: i.w, payload: t });
          };
        },
        F = function (e) {
          return function (t, r) {
            var n = (r = r()).contactCtaData,
              a = "",
              o = "Contacted";
            "WhatsApp Builder" === (r = r.contactData).buttonType ||
            "WhatsApp Agent" === r.buttonType ||
            "WhatsApp Owner" === r.buttonType ||
            "Contact Builder" === r.buttonType ||
            "Contact Agent" === r.buttonType ||
            "Contact Owner" === r.buttonType ||
            "Contact" === r.buttonType ||
            "Join PrimePlus" === r.buttonType
              ? ((a = "contactFirstText"), (o = "Contacted"))
              : "Request Callback" === r.buttonType
              ? ((a = "contactSecondText"), (o = "Callback Requested"))
              : "Enquire Now" === r.buttonType
              ? ((a = "contactSecondText"), (o = "Contacted"))
              : "Get Phone No." === r.buttonType
              ? ((a = "contactSecondText"), (o = "Phone no. sent"))
              : "Send Enquiry" === r.buttonType
              ? ((a = "contactSecondText"), (o = "Enquiry Sent"))
              : "Request Photo" === r.buttonType
              ? ((a = "photoContactText"), (o = "Photo Requested"))
              : "Ask Owner to Call" === r.buttonType
              ? ((a = "contactFirstText"), (o = "Request Sent"))
              : ("Call Owner" !== r.buttonType &&
                  "Call Agent" !== r.buttonType &&
                  "Call Builder" !== r.buttonType) ||
                ((a = "contactFirstText"), (o = "Contacted")),
              (r = d({}, e, f(f({}, n[e]), {}, d({}, a, o))));
            t({ type: i.w, payload: r });
          };
        },
        M = function (e) {
          if (e && 0 < e.length && 0 < e.indexOf(" ")) return e.split(" ")[1];
        },
        D = function (e, t, r) {
          return function (n, a) {
            var c,
              u = (a = a()).contactData;
            a = a.form;
            ((Object(o.c)(a.contactForm) ||
              Object(o.c)(a.contactForm.values) ||
              !a.contactForm.values ||
              "50" == a.contactForm.values.selectIsd) &&
              "50" == t) ||
              Object(s.d)(u, n),
              Object(o.c)(u.gaObject) ||
                Object(o.c)(u.gaObject.contactInfoFormClose) ||
                "" === u.gaObject.contactInfoFormClose ||
                !u.formScreen ||
                u.formScreen !== i.i ||
                ((a = "Form Close"),
                null != r && r.isShortList
                  ? ((c = f(
                      f({}, r.shortListGaCommonData),
                      {},
                      { eventCategory: "Contact Info Form", eventLabel: a }
                    )),
                    n(Object(l.a)(c)))
                  : ((c = f(
                      f({}, u.gaObject.contactInfoFormClose),
                      {},
                      { eventLabel: a }
                    )),
                    n(Object(l.a)(c)))),
              Object(o.c)(u.gaObject) ||
                Object(o.c)(u.gaObject.contactOtpFormClose) ||
                "" === u.gaObject.contactOtpFormClose ||
                !u.formScreen ||
                u.formScreen !== i.C ||
                ((a = "Form Close"),
                null != r && r.isShortList
                  ? ((c = f(
                      f({}, r.shortListGaCommonData),
                      {},
                      { eventCategory: "Contact OTP Form", eventLabel: a }
                    )),
                    n(Object(l.a)(c)))
                  : ((c = f(
                      f({}, u.gaObject.contactOtpFormClose),
                      {},
                      { eventLabel: a }
                    )),
                    n(Object(l.a)(c)))),
              "search_wap" === e &&
                "contact_form" === history.state &&
                history.back(),
              n({
                type: i.e,
                payload: f(
                  f({}, u),
                  {},
                  { userActionType: i.e, isUserAction: !0, formScreen: i.k }
                ),
              });
          };
        },
        R = function () {
          return function (e, t) {
            var r = c.a.readCookie("conPropExp"),
              n = (t = t()).contactCtaData;
            t.contactData,
              r &&
                null != r &&
                ((t = r.split(/\|/).map(function (t) {
                  var r;
                  null != t &&
                    "" != t &&
                    ((r = +(t = t.split("#"))[0]),
                    (t = t[1].split("-")),
                    (t = new Date(t[2], t[1] - 1, t[0])),
                    new Date() <= t
                      ? (n[r] && null != n[r]) ||
                        ((t = d(
                          {},
                          r,
                          f(
                            f({}, n[r]),
                            {},
                            d({}, "contactFirstText", "Contacted")
                          )
                        )),
                        e({ type: i.w, payload: t }))
                      : n[r] && null != n[r] && e({ type: i.g, payload: r }));
                })),
                console.log(t));
          };
        };
    },
    424: function (e, t, r) {
      "use strict";
      var n = r(0),
        a = r.n(n),
        o = ((n = r(22)), r.n(n));
      t.a = function (e) {
        var t = e.price,
          r =
            ((e = e.pType),
            "Call for Price" == t ? "Contact for" : "Contact for &#8377;");
        return a.a.createElement(
          "div",
          { className: "contact-form__mobileHeader d-mobile" },
          a.a.createElement(
            a.a.Fragment,
            null,
            null != t && "" !== t && null != e && "" !== e
              ? a.a.createElement(
                  a.a.Fragment,
                  null,
                  o()(r),
                  a.a.createElement(
                    "span",
                    { className: "contact-form__mobileHeader-price" },
                    t
                  ),
                  "|",
                  a.a.createElement(
                    "span",
                    { className: "contact-form__mobileHeader-pType" },
                    e
                  )
                )
              : null
          )
        );
      };
    },
    426: function (e, t, r) {
      "use strict";
      var n = r(0),
        a = r.n(n);
      function o() {
        return (o = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r,
                  n = arguments[t];
                for (r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      t.a = function (e) {
        var t = e.id,
          r = e.name,
          n = e.modifierSelectClass;
        return a.a.createElement(
          "div",
          null,
          a.a.createElement(
            "select",
            o({}, e.input, {
              id: t,
              name: r,
              className: "contact-form__select " + n,
              value: e.input.value,
              defaultValue: e.defaultValue,
            }),
            a.a.createElement(
              "option",
              { value: "50", defaultValue: !0 },
              "IND +91"
            ),
            a.a.createElement("option", { value: "51" }, "USA +1"),
            a.a.createElement("option", { value: "52" }, "GBR +44"),
            a.a.createElement("option", { value: "53" }, "ARE +971"),
            a.a.createElement("option", { value: "54" }, "CAN +1"),
            a.a.createElement("option", { value: "55" }, "AUS +61"),
            a.a.createElement("option", { value: "56" }, "PAK +92"),
            a.a.createElement("option", { value: "57" }, "SAU +966"),
            a.a.createElement("option", { value: "58" }, "KWT +965"),
            a.a.createElement("option", { value: "59" }, "ZAF +27"),
            a.a.createElement("option", { value: "60" }, "AFG +93"),
            a.a.createElement("option", { value: "61" }, "ALB +355"),
            a.a.createElement("option", { value: "62" }, "DZA +213"),
            a.a.createElement("option", { value: "63" }, "ASM +684"),
            a.a.createElement("option", { value: "64" }, "AND +376"),
            a.a.createElement("option", { value: "65" }, "AGO +244"),
            a.a.createElement("option", { value: "66" }, "AIA +264"),
            a.a.createElement("option", { value: "67" }, "ATG +268"),
            a.a.createElement("option", { value: "68" }, "ARG +54"),
            a.a.createElement("option", { value: "69" }, "ARM +374"),
            a.a.createElement("option", { value: "70" }, "AUT +43"),
            a.a.createElement("option", { value: "71" }, "AZE +994"),
            a.a.createElement("option", { value: "72" }, "BHS +1242"),
            a.a.createElement("option", { value: "73" }, "BHR +973"),
            a.a.createElement("option", { value: "74" }, "BGD +880"),
            a.a.createElement("option", { value: "75" }, "BRB +1246"),
            a.a.createElement("option", { value: "76" }, "BLR +375"),
            a.a.createElement("option", { value: "77" }, "BEL +32"),
            a.a.createElement("option", { value: "78" }, "BLZ +501"),
            a.a.createElement("option", { value: "79" }, "BMU +1441"),
            a.a.createElement("option", { value: "80" }, "BTN +975"),
            a.a.createElement("option", { value: "81" }, "BOL +591"),
            a.a.createElement("option", { value: "82" }, "BIH +387"),
            a.a.createElement("option", { value: "83" }, "BWA +267"),
            a.a.createElement("option", { value: "84" }, "BRA +55"),
            a.a.createElement("option", { value: "85" }, "BRN +673"),
            a.a.createElement("option", { value: "86" }, "BGR +359"),
            a.a.createElement("option", { value: "87" }, "BFA +226"),
            a.a.createElement("option", { value: "88" }, "BDI +257"),
            a.a.createElement("option", { value: "89" }, "KHM +855"),
            a.a.createElement("option", { value: "90" }, "CMR +237"),
            a.a.createElement("option", { value: "91" }, "CPV +238"),
            a.a.createElement("option", { value: "92" }, "CYM +345"),
            a.a.createElement("option", { value: "93" }, "CAF +236"),
            a.a.createElement("option", { value: "94" }, "TCD +235"),
            a.a.createElement("option", { value: "95" }, "CHL +56"),
            a.a.createElement("option", { value: "97" }, "COL +57"),
            a.a.createElement("option", { value: "98" }, "COM +269"),
            a.a.createElement("option", { value: "99" }, "COD +243"),
            a.a.createElement("option", { value: "100" }, "COG +242"),
            a.a.createElement("option", { value: "101" }, "COK +682"),
            a.a.createElement("option", { value: "102" }, "CRI +506"),
            a.a.createElement("option", { value: "103" }, "CIV +225"),
            a.a.createElement("option", { value: "104" }, "HRV +385"),
            a.a.createElement("option", { value: "105" }, "CUB +53"),
            a.a.createElement("option", { value: "106" }, "CYP +357"),
            a.a.createElement("option", { value: "107" }, "CZE +420"),
            a.a.createElement("option", { value: "108" }, "DNK +45"),
            a.a.createElement("option", { value: "109" }, "DJI +253"),
            a.a.createElement("option", { value: "110" }, "DMA +767"),
            a.a.createElement("option", { value: "111" }, "DOM +1"),
            a.a.createElement("option", { value: "112" }, "TLS +670"),
            a.a.createElement("option", { value: "113" }, "ECU +593"),
            a.a.createElement("option", { value: "114" }, "EGY +20"),
            a.a.createElement("option", { value: "115" }, "SLV +503"),
            a.a.createElement("option", { value: "116" }, "GNQ +240"),
            a.a.createElement("option", { value: "117" }, "ERI +291"),
            a.a.createElement("option", { value: "118" }, "EST +372"),
            a.a.createElement("option", { value: "119" }, "ETH +251"),
            a.a.createElement("option", { value: "120" }, "FLK +500"),
            a.a.createElement("option", { value: "121" }, "FRO +298"),
            a.a.createElement("option", { value: "122" }, "FJI +679"),
            a.a.createElement("option", { value: "123" }, "FIN +358"),
            a.a.createElement("option", { value: "124" }, "FRA +33"),
            a.a.createElement("option", { value: "125" }, "GUF +594"),
            a.a.createElement("option", { value: "126" }, "PYF +689"),
            a.a.createElement("option", { value: "127" }, "GAB +241"),
            a.a.createElement("option", { value: "128" }, "GMB +220"),
            a.a.createElement("option", { value: "129" }, "GEO +995"),
            a.a.createElement("option", { value: "130" }, "DEU +49"),
            a.a.createElement("option", { value: "131" }, "GHA +233"),
            a.a.createElement("option", { value: "132" }, "GIB +350"),
            a.a.createElement("option", { value: "133" }, "GRC +30"),
            a.a.createElement("option", { value: "134" }, "GRL +299"),
            a.a.createElement("option", { value: "135" }, "GRD +473"),
            a.a.createElement("option", { value: "136" }, "GLP +590"),
            a.a.createElement("option", { value: "137" }, "GUM +671"),
            a.a.createElement("option", { value: "138" }, "GTM +502"),
            a.a.createElement("option", { value: "139" }, "GIN +224"),
            a.a.createElement("option", { value: "140" }, "GNB +245"),
            a.a.createElement("option", { value: "141" }, "GUY +592"),
            a.a.createElement("option", { value: "142" }, "HTI +509"),
            a.a.createElement("option", { value: "143" }, "HND +504"),
            a.a.createElement("option", { value: "144" }, "HKG +852"),
            a.a.createElement("option", { value: "145" }, "HUN +36"),
            a.a.createElement("option", { value: "146" }, "ISL +354"),
            a.a.createElement("option", { value: "147" }, "IDN +62"),
            a.a.createElement("option", { value: "148" }, "IRN +98"),
            a.a.createElement("option", { value: "149" }, "IRQ +964"),
            a.a.createElement("option", { value: "150" }, "IRL +353"),
            a.a.createElement("option", { value: "151" }, "ISR +972"),
            a.a.createElement("option", { value: "152" }, "ITA +39"),
            a.a.createElement("option", { value: "153" }, "JAM +1"),
            a.a.createElement("option", { value: "154" }, "JPN +81"),
            a.a.createElement("option", { value: "155" }, "JOR +962"),
            a.a.createElement("option", { value: "156" }, "KAZ +7"),
            a.a.createElement("option", { value: "157" }, "KEN +254"),
            a.a.createElement("option", { value: "158" }, "KIR +686"),
            a.a.createElement("option", { value: "159" }, "MDA +82"),
            a.a.createElement("option", { value: "160" }, "KGZ +996"),
            a.a.createElement("option", { value: "161" }, "LAO +856"),
            a.a.createElement("option", { value: "162" }, "LVA +371"),
            a.a.createElement("option", { value: "163" }, "LBN +961"),
            a.a.createElement("option", { value: "164" }, "LSO +266"),
            a.a.createElement("option", { value: "165" }, "LBR +231"),
            a.a.createElement("option", { value: "166" }, "LBY +218"),
            a.a.createElement("option", { value: "167" }, "LIE +423"),
            a.a.createElement("option", { value: "168" }, "LTU +370"),
            a.a.createElement("option", { value: "169" }, "LUX +352"),
            a.a.createElement("option", { value: "170" }, "MAC +853"),
            a.a.createElement("option", { value: "171" }, "MKD +389"),
            a.a.createElement("option", { value: "172" }, "MDG +261"),
            a.a.createElement("option", { value: "173" }, "MWI +265"),
            a.a.createElement("option", { value: "174" }, "MYS +60"),
            a.a.createElement("option", { value: "175" }, "MDV +960"),
            a.a.createElement("option", { value: "176" }, "MLI +223"),
            a.a.createElement("option", { value: "177" }, "MLT +356"),
            a.a.createElement("option", { value: "178" }, "MTQ +596"),
            a.a.createElement("option", { value: "179" }, "MRT +222"),
            a.a.createElement("option", { value: "180" }, "MUS +230"),
            a.a.createElement("option", { value: "181" }, "MYT +269"),
            a.a.createElement("option", { value: "182" }, "MEX +52"),
            a.a.createElement("option", { value: "183" }, "FSM +691"),
            a.a.createElement("option", { value: "184" }, "KOR +373"),
            a.a.createElement("option", { value: "185" }, "MCO +377"),
            a.a.createElement("option", { value: "186" }, "MNG +976"),
            a.a.createElement("option", { value: "187" }, "MSR +664"),
            a.a.createElement("option", { value: "188" }, "MAR +212"),
            a.a.createElement("option", { value: "189" }, "MOZ +258"),
            a.a.createElement("option", { value: "190" }, "MMR +95"),
            a.a.createElement("option", { value: "191" }, "NAM +264"),
            a.a.createElement("option", { value: "192" }, "NRU +674"),
            a.a.createElement("option", { value: "193" }, "NPL +977"),
            a.a.createElement("option", { value: "194" }, "ANT +599"),
            a.a.createElement("option", { value: "195" }, "NLD +31"),
            a.a.createElement("option", { value: "196" }, "NCL +687"),
            a.a.createElement("option", { value: "197" }, "NZL +64"),
            a.a.createElement("option", { value: "198" }, "NIC +505"),
            a.a.createElement("option", { value: "199" }, "NER +227"),
            a.a.createElement("option", { value: "200" }, "NGA +234"),
            a.a.createElement("option", { value: "201" }, "NIU +683"),
            a.a.createElement("option", { value: "202" }, "NFK +672"),
            a.a.createElement("option", { value: "203" }, "PRK +850"),
            a.a.createElement("option", { value: "204" }, "NOR +47"),
            a.a.createElement("option", { value: "205" }, "OMN +968"),
            a.a.createElement("option", { value: "206" }, "PAN +507"),
            a.a.createElement("option", { value: "207" }, "PNG +675"),
            a.a.createElement("option", { value: "208" }, "PRY +595"),
            a.a.createElement("option", { value: "209" }, "PER +51"),
            a.a.createElement("option", { value: "210" }, "PHL +63"),
            a.a.createElement("option", { value: "211" }, "PCN +649"),
            a.a.createElement("option", { value: "212" }, "POL +48"),
            a.a.createElement("option", { value: "213" }, "PRT +351"),
            a.a.createElement("option", { value: "214" }, "PRI +939"),
            a.a.createElement("option", { value: "215" }, "QAT +974"),
            a.a.createElement("option", { value: "216" }, "REU +262"),
            a.a.createElement("option", { value: "217" }, "ROU +40"),
            a.a.createElement("option", { value: "218" }, "RUS +7"),
            a.a.createElement("option", { value: "219" }, "RWA +250"),
            a.a.createElement("option", { value: "220" }, "WSM +685"),
            a.a.createElement("option", { value: "221" }, "SMR +378"),
            a.a.createElement("option", { value: "222" }, "STP +239"),
            a.a.createElement("option", { value: "223" }, "SEN +221"),
            a.a.createElement("option", { value: "224" }, "SCG +381"),
            a.a.createElement("option", { value: "225" }, "SYC +248"),
            a.a.createElement("option", { value: "226" }, "SLE +232"),
            a.a.createElement("option", { value: "227" }, "SGP +65"),
            a.a.createElement("option", { value: "228" }, "SVK +421"),
            a.a.createElement("option", { value: "229" }, "SVN +386"),
            a.a.createElement("option", { value: "230" }, "SLB +677"),
            a.a.createElement("option", { value: "231" }, "SOM +252"),
            a.a.createElement("option", { value: "232" }, "ESP +34"),
            a.a.createElement("option", { value: "233" }, "LKA +94"),
            a.a.createElement("option", { value: "234" }, "SHN +290"),
            a.a.createElement("option", { value: "235" }, "KNA +869"),
            a.a.createElement("option", { value: "236" }, "LCA +758"),
            a.a.createElement("option", { value: "237" }, "SPM +508"),
            a.a.createElement("option", { value: "238" }, "VCT +784"),
            a.a.createElement("option", { value: "239" }, "SDN +249"),
            a.a.createElement("option", { value: "240" }, "SUR +597"),
            a.a.createElement("option", { value: "241" }, "SWZ +268"),
            a.a.createElement("option", { value: "242" }, "SWE +46"),
            a.a.createElement("option", { value: "243" }, "CHE +41"),
            a.a.createElement("option", { value: "244" }, "SYR +963"),
            a.a.createElement("option", { value: "245" }, "TWN +886"),
            a.a.createElement("option", { value: "246" }, "TJK +992"),
            a.a.createElement("option", { value: "247" }, "TZA +255"),
            a.a.createElement("option", { value: "248" }, "THA +66"),
            a.a.createElement("option", { value: "249" }, "TGO +228"),
            a.a.createElement("option", { value: "250" }, "TKL +690"),
            a.a.createElement("option", { value: "251" }, "TON +676"),
            a.a.createElement("option", { value: "252" }, "TTO +868"),
            a.a.createElement("option", { value: "253" }, "TUN +216"),
            a.a.createElement("option", { value: "254" }, "TUR +90"),
            a.a.createElement("option", { value: "255" }, "TKM +993"),
            a.a.createElement("option", { value: "256" }, "TCA +649"),
            a.a.createElement("option", { value: "257" }, "TUV +688"),
            a.a.createElement("option", { value: "258" }, "UGA +256"),
            a.a.createElement("option", { value: "259" }, "UKR +380"),
            a.a.createElement("option", { value: "260" }, "URY +598"),
            a.a.createElement("option", { value: "261" }, "UZB +998"),
            a.a.createElement("option", { value: "262" }, "VUT +678"),
            a.a.createElement("option", { value: "263" }, "VEN +58"),
            a.a.createElement("option", { value: "264" }, "VNM +84"),
            a.a.createElement("option", { value: "265" }, "VGB +284"),
            a.a.createElement("option", { value: "266" }, "VIR +340"),
            a.a.createElement("option", { value: "267" }, "WLF +681"),
            a.a.createElement("option", { value: "268" }, "YEM +967"),
            a.a.createElement("option", { value: "269" }, "YUG +381"),
            a.a.createElement("option", { value: "270" }, "RNR +260"),
            a.a.createElement("option", { value: "271" }, "ZWE +263")
          )
        );
      };
    },
    5: function (e, t, r) {
      "use strict";
      r.d(t, "d", function () {
        return n;
      }),
        r.d(t, "a", function () {
          return c;
        }),
        r.d(t, "c", function () {
          return i;
        }),
        r.d(t, "b", function () {
          return l;
        });
      var n = function (e) {
          return e.length < 1 || ((e = a(e)), "" == (e = o(e))) ? "" : e;
        },
        a = function (e) {
          var t = String.fromCharCode(32),
            r = e.length,
            n = "";
          if (r < 0) return "";
          for (var a = r - 1; -1 < a; ) {
            if (e.charAt(a) != t) {
              n = e.substring(0, a + 1);
              break;
            }
            a -= 1;
          }
          return n;
        },
        o = function (e) {
          for (
            var t = String.fromCharCode(32), r = e.length, n = "", a = 0;
            a < r;

          ) {
            if (e.charAt(a) != t) {
              n = e.substring(a, r);
              break;
            }
            a += 1;
          }
          return n;
        },
        c = function (e) {
          return void 0 === e || null == e || "" === e;
        },
        i = function (e) {
          return (
            void 0 === e ||
            null == e ||
            0 === Object.keys(e).length ||
            Object.getPrototypeOf(e) !== Object.prototype
          );
        },
        l = function (e) {
          return Array.isArray(e) && 0 === e.length;
        };
    },
    54: function (e, t, r) {
      "use strict";
      var n = r(0),
        a = r.n(n);
      t.a = function (e) {
        return a.a.createElement(
          "button",
          {
            type: e.type,
            className: "".concat(e.className),
            onClick: e.onClick,
          },
          e.children || "",
          e.label || ""
        );
      };
    },
    7: function (e, t, r) {
      "use strict";
      r.d(t, "v", function () {
        return n;
      }),
        r.d(t, "f", function () {
          return a;
        }),
        r.d(t, "j", function () {
          return o;
        }),
        r.d(t, "C", function () {
          return c;
        }),
        r.d(t, "h", function () {
          return i;
        }),
        r.d(t, "u", function () {
          return l;
        }),
        r.d(t, "t", function () {
          return s;
        }),
        r.d(t, "r", function () {
          return u;
        }),
        r.d(t, "q", function () {
          return m;
        }),
        r.d(t, "s", function () {
          return p;
        }),
        r.d(t, "e", function () {
          return f;
        }),
        r.d(t, "i", function () {
          return d;
        }),
        r.d(t, "k", function () {
          return y;
        }),
        r.d(t, "a", function () {
          return b;
        }),
        r.d(t, "b", function () {
          return v;
        }),
        r.d(t, "d", function () {
          return h;
        }),
        r.d(t, "z", function () {
          return g;
        }),
        r.d(t, "w", function () {
          return _;
        }),
        r.d(t, "g", function () {
          return E;
        }),
        r.d(t, "y", function () {
          return O;
        }),
        r.d(t, "A", function () {
          return w;
        }),
        r.d(t, "c", function () {
          return S;
        }),
        r.d(t, "o", function () {
          return j;
        }),
        r.d(t, "p", function () {
          return C;
        }),
        r.d(t, "m", function () {
          return N;
        }),
        r.d(t, "n", function () {
          return k;
        }),
        r.d(t, "B", function () {
          return P;
        }),
        r.d(t, "D", function () {
          return T;
        }),
        r.d(t, "l", function () {
          return I;
        }),
        r.d(t, "x", function () {
          return L;
        });
      var n = "SRP_LOAD",
        a = "CONTACT_BUTTON_CLICK",
        o = "GET_CONTACT_DETAILS",
        c = "VERIFY_OTP",
        i = "EDIT_BUTTON_CLICK",
        l = "SHOW_THANK_YOU",
        s = "SHOW_PRIME_SCREEN",
        u = "SHOW_FIRST_PRIME_SCREEN",
        m = "SHOW_CONTACT_LIMIT_ERROR",
        p = "SHOW_PRIME_LIMIT_ERROR",
        f = "CLOSE_CONTACT_FORM",
        d = "FILL_CONTACT_DETAILS",
        y = "NA",
        b = "ADD_FINGERPRINT",
        v = "ADD_USER_DATA",
        h = "AUTO_CONTACT",
        g = "UPDATE_THANK_YOU_BANNER",
        _ = "UPDATE_CONTACT_CTA",
        E = "DELETE_CONTACT_CTA",
        O = "UPDATE_GA_OBJECT",
        w = "UPDATE_THANK_YOU_BANNER_MAP",
        S = "APP_DOWNLOAD_BANNER",
        j = "SHORTLIST_PROP",
        C = "SHORTLIST_PROP_INIT",
        N = "SET_SHORTLIST_TRUE",
        k = "SHORTLIST_GA_DATA",
        P = "UPDATE_VN_DATA",
        T = "VIRTUAL_CONTACT",
        I = "NRI_CONTACT",
        L = "UPDATE_CONTACT_SOURCE";
    },
    864: function (e, t, r) {
      "use strict";
      var n = r(0),
        a = r.n(n),
        o = r(90),
        c = r(343),
        i = r(54);
      t.a = function (e) {
        return a.a.createElement(
          "div",
          { className: "contact-form show", id: "contact-form" },
          a.a.createElement(
            "div",
            { className: "contact-form__flex" },
            a.a.createElement(
              "div",
              { className: "contact-form__content" },
              a.a.createElement(
                "div",
                { className: "contact-from__get-detailes" },
                a.a.createElement(o.a, {
                  heading: "Want to know more about this Property?",
                }),
                a.a.createElement(c.a, {
                  text: "Connect with the Advertiser Now",
                }),
                a.a.createElement(i.a, {
                  label: "Get Contact Details",
                  className: "contact-form__btn contact-form__btn--get-details",
                  type: "button",
                  onClick: e.clickHandler,
                })
              )
            )
          )
        );
      };
    },
    867: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return l;
      });
      var n = r(7);
      function a(e) {
        return (a =
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
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                var n, o;
                (n = e),
                  (o = r[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== a(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 === r) return String(e);
                        if ("object" !== a((r = r.call(e, "string")))) return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === a(e) ? e : String(e)
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
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var i = {
          id: "contactForm",
          recieverId: "0",
          contactType: "property",
          source: "SRP",
          formType: "DEFAULT",
          userActionType: "SRP_LOAD",
          isUserAction: !1,
          formScreen: "NA",
          contactStatus: "NA",
          isAutoContact: !1,
          gaObject: "",
          pType: "",
          thankYouBannerToShowMap: {},
          shouldShowAppBanner: !1,
          contactSource: "",
          requestBody: {
            advertisers: ["0|property"],
            propertyId: "0|property",
            campaignCode: "propertySearch",
            contactEventFrom: "search",
            contactTrackCookie: "AA-Contact",
            userAcceptance: "",
            searchType: "1",
            firstInteractionSrc: "F",
            contactDynamicSeatVal: "",
            alert: !0,
            loanLead: !1,
            optIn: "N",
          },
        },
        l = function () {
          var e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : i,
            t = 1 < arguments.length ? arguments[1] : void 0;
          switch (t.type) {
            case n.v:
            case n.f:
            case n.j:
            case n.C:
            case n.h:
            case n.u:
            case n.e:
              return c(c({}, e), t.payload);
            case n.d:
              return c(
                c(c({}, e), t.payload),
                {},
                { requestBody: c(c({}, e.requestBody), t.payload.requestBody) }
              );
            case n.z:
            case n.A:
            case n.c:
            case n.y:
            case n.B:
            case n.D:
            case n.l:
            case n.x:
              return c(c({}, e), t.payload);
            case "UPDATECONTACTBODY":
              return c(
                c(c({}, e), t.payload),
                {},
                { requestBody: c(c({}, e.requestBody), t.payload) }
              );
            default:
              return e;
          }
        };
    },
    868: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return s;
      });
      var n = r(7);
      function a(e) {
        return (a =
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
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function i(e, t, r) {
        return (
          (t = (function (e) {
            return (
              (e = (function (e, t) {
                if ("object" !== a(e) || null === e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 === r) return String(e);
                if ("object" !== a((r = r.call(e, "string")))) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              })(e)),
              "symbol" === a(e) ? e : String(e)
            );
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var l = {},
        s = function () {
          var e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : l,
            t = 1 < arguments.length ? arguments[1] : void 0;
          switch (t.type) {
            case n.w:
              return c(c({}, e), t.payload);
            case n.g:
              var r = {};
              return (
                Object.entries(e)
                  .filter(function (e) {
                    return e[0] != "" + t.payload;
                  })
                  .map(function (e) {
                    return (e[0] = +e[0]), e;
                  })
                  .forEach(function (e) {
                    (e = i({}, e[0], e[1])), (r = c(c({}, r), e));
                  }),
                r
              );
            default:
              return e;
          }
        };
    },
    873: function (e, t, r) {
      "use strict";
      function n(e) {
        return o.a.createElement(
          "div",
          { className: "filter-covered-wrap" },
          o.a.createElement(i.a, {
            min: 0,
            max: e.filter
              ? e.filter.range[e.filter.range.length - 1].value
              : 5e4,
            currentValueMin: e.selectedMin || 0,
            currentValueMax:
              e.selectedMax ||
              (e.filter
                ? e.filter.range[e.filter.range.length - 1].value
                : 5e4),
            diffValue: 100,
            budgetType: "area",
            minKayName: "areaFrom",
            maxKayName: "areaTo",
            budgetRange: e.filterValue,
            callBack: function (t, r) {
              e.callBack(t, r);
            },
          })
        );
      }
      var a = r(0),
        o = r.n(a),
        c = r(858),
        i = r(221),
        l = r(222),
        s = r(567),
        u = r(859),
        m = r(2);
      function p(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            var r;
            if (e)
              return "string" == typeof e
                ? f(e, t)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
                        ? e.constructor.name
                        : r) || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
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
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function d(e) {
        var t =
            "Covered area is the actual area of the property which includes the thickness of wall, balcony etc.",
          r = Object(m.d)(function (e) {
            return e.multilingualData;
          }),
          i = (_ = p(Object(a.useState)(!0), 2))[0],
          f = _[1],
          d = (_ = p(Object(a.useState)(!1), 2))[0],
          y = _[1],
          b = Object(m.d)(function (e) {
            return e.searchBean;
          }),
          v = !1,
          h = e.filterdata && e.filterdata.maxLimit,
          g = 0,
          _ = "",
          E = !1,
          O = !1,
          w = Object(a.useRef)(),
          S =
            ((_ =
              null == e.filterdata ||
              ("Posted By Certified Agents" != e.filterdata.englishTitle &&
                "Properties with Offers" != e.filterdata.englishTitle &&
                "Verified Properties" != e.filterdata.englishTitle &&
                "RERA Registered Properties" != e.filterdata.englishTitle &&
                "RERA Registered Agents" != e.filterdata.englishTitle &&
                "Hide Viewed" != e.filterdata.englishTitle &&
                "Owner" != e.filterdata.englishTitle &&
                "Properties On Auction" != e.filterdata.englishTitle &&
                "Pre Leased" != e.filterdata.englishTitle &&
                "Commercial Guru" != e.filterdata.englishTitle &&
                "MB Exclusive Properties" != e.filterdata.englishTitle &&
                "NRI Preferred" != e.filterdata.englishTitle &&
                "Society Only" != e.filterdata.englishTitle)
                ? ((v = !1), "")
                : ((v = !0), " on-off-filter")),
            "");
        return (
          null == e.filterdata ||
            ("Posted Since" != e.filterdata.englishTitle &&
              "Floor" != e.filterdata.englishTitle) ||
            (S = " single-select"),
          Object(a.useEffect)(function () {
            function e(e) {
              w.current && !w.current.contains(e.target) && y(!1);
            }
            return (
              document.body.addEventListener("click", e, { capture: !0 }),
              function () {
                document.body.removeEventListener("click", e, { capture: !0 });
              }
            );
          }, []),
          o.a.createElement(
            o.a.Fragment,
            null,
            e.filterdata &&
              e.filterdata.showDataInMore &&
              o.a.createElement(
                "div",
                {
                  className: "filter__common__component ".concat(
                    _,
                    " clearfix"
                  ),
                  id: e.moreFilterId,
                },
                e.filterdata.title &&
                  o.a.createElement(
                    "div",
                    {
                      className: e.showToggle
                        ? "filter__common__component__title for-toggle"
                        : "filter__common__component__title",
                      onClick: function () {
                        var t;
                        (t = e.moreFilterId),
                          !v &&
                            e.showToggle &&
                            (i
                              ? ((document.querySelector(
                                  "#" + t + " .filter__common__component__row"
                                )
                                  ? document.querySelector(
                                      "#" +
                                        t +
                                        " .filter__common__component__row"
                                    )
                                  : document.querySelector(
                                      "#" + t + " .filter-covered-component"
                                    )
                                ).classList.add("hide-filter"),
                                document
                                  .querySelector(
                                    "#" +
                                      t +
                                      " .filter__common__component__title"
                                  )
                                  .classList.add("toggle-down"),
                                f(!1))
                              : ((document.querySelector(
                                  "#" + t + " .filter__common__component__row"
                                )
                                  ? document.querySelector(
                                      "#" +
                                        t +
                                        " .filter__common__component__row"
                                    )
                                  : document.querySelector(
                                      "#" + t + " .filter-covered-component"
                                    )
                                ).classList.remove("hide-filter"),
                                document
                                  .querySelector(
                                    "#" +
                                      t +
                                      " .filter__common__component__title"
                                  )
                                  .classList.remove("toggle-down"),
                                f(!0)));
                      },
                    },
                    e.filterdata.title,
                    "Covered Area" === e.filterdata.englishTitle &&
                      o.a.createElement(
                        o.a.Fragment,
                        null,
                        " (",
                        b.areaUnit
                          ? "12851" == b.areaUnit
                            ? "sqyrd"
                            : "12852" == b.areaUnit
                            ? "sqm"
                            : "sqft"
                          : "sqft",
                        ")",
                        o.a.createElement(
                          "div",
                          { className: "covered-tool-tip", ref: w },
                          o.a.createElement(
                            "span",
                            {
                              className: "covered-tool-tip__i",
                              onClick: function (e) {
                                e.stopPropagation(), y(!0);
                              },
                            },
                            "i"
                          ),
                          d &&
                            o.a.createElement(
                              "div",
                              { className: "covered-tool-tip__info" },
                              o.a.createElement("div", {
                                className: "covered-tool-tip__close",
                                onClick: function (e) {
                                  e.stopPropagation(), y(!1);
                                },
                              }),
                              r && r[t] ? r[t] : t
                            )
                        )
                      )
                  ),
                o.a.createElement(
                  "div",
                  {
                    className:
                      "Covered Area" === e.filterdata.englishTitle
                        ? "filter-covered-component ".concat(_, " clearfix")
                        : "filter__common__component__row "
                            .concat(_, " ")
                            .concat(S, " clearfix"),
                  },
                  e.filterdata.filters &&
                    e.filterdata.filters.map(function (t, r) {
                      g++;
                      var a,
                        i,
                        m = !1,
                        p = "checkbox";
                      if (
                        (i =
                          e.type && "more" == e.type
                            ? ((a = t.cat),
                              (p =
                                "postedSince" == t.cat ||
                                "pantry" == t.cat ||
                                "gender" == t.cat
                                  ? "radio"
                                  : "checkbox"),
                              e.preSelect[
                                (a =
                                  "subPropertyType" == a ? "propertyType" : a)
                              ])
                            : e.preSelect)
                      )
                        if (Array.isArray(i)) {
                          if (
                            null != e.filterdata &&
                            "Brands" == e.filterdata.englishTitle
                          ) {
                            for (var f in i)
                              if (t.value == i[f]) {
                                m = !0;
                                break;
                              }
                          } else
                            for (var f in i)
                              if (-1 != t.value.indexOf(i[f])) {
                                m = !0;
                                break;
                              }
                        } else t.value == i && (m = !0);
                      if (
                        ("propertyType_10008_10009" ==
                          (null == t ? void 0 : t.id) &&
                          m &&
                          (E = !0),
                        "propertyType_10006_10012" ==
                          (null == t ? void 0 : t.id) &&
                          m &&
                          (O = !0),
                        1 == h || g <= h)
                      )
                        return v
                          ? o.a.createElement(u.OnOffComponent, {
                              dataValue: t,
                              callBack: function (t, r, n, a) {
                                e.callBack(t, r, n, a);
                              },
                              preSelect: m,
                              key: r,
                            })
                          : "Covered Area" !== e.filterdata.englishTitle
                          ? "Property Type" == e.filterdata.englishTitle
                            ? o.a.createElement(c.a, {
                                filterValue: t,
                                key: r,
                                callBack: function (t, r, n, a) {
                                  e.callBack(t, r, n, a);
                                },
                                preSelect: m,
                                inputType: p,
                              })
                            : "Amenities" == e.filterdata.englishTitle ||
                              "Popular Locality" == e.filterdata.englishTitle
                            ? "Amenities" == e.filterdata.englishTitle
                              ? o.a.createElement(
                                  "div",
                                  {
                                    className:
                                      r < 6
                                        ? "filter__common__component__amenities"
                                        : "filter__common__component__amenities hide-data",
                                  },
                                  o.a.createElement(s.CheckboxComponent, {
                                    dataValue: t,
                                    callBack: function (t, r, n, a) {
                                      e.callBack(t, r, n, a);
                                    },
                                    preSelect: m,
                                    key: r,
                                  })
                                )
                              : o.a.createElement(s.CheckboxComponent, {
                                  dataValue: t,
                                  callBack: function (t, r, n, a) {
                                    e.callBack(t, r, n, a);
                                  },
                                  preSelect: m,
                                  key: r,
                                })
                            : (E &&
                                "propertyType_10006_10012" ==
                                  (null == t ? void 0 : t.id)) ||
                              (O &&
                                "propertyType_10008_10009" ==
                                  (null == t ? void 0 : t.id))
                            ? void 0
                            : o.a.createElement(l.ButtonComponent, {
                                inputType: p,
                                dataValue: t,
                                callBack: function (t, r, n, a) {
                                  e.callBack(t, r, n, a);
                                },
                                preSelect: m,
                                key: r,
                              })
                          : 0 == r
                          ? o.a.createElement(n, {
                              filterValue: e.filterdata,
                              key: r,
                              callBack: function (t, r) {
                                e.callBack(t, r);
                              },
                              selectedMin: b.areaFrom,
                              selectedMax: b.areaTo,
                            })
                          : void 0;
                    })
                ),
                "Amenities" == e.filterdata.englishTitle &&
                  6 < e.filterdata.filters.length &&
                  o.a.createElement(
                    "div",
                    {
                      className:
                        "filter__common__component__more amenities-more",
                      onClick: function () {
                        return (
                          "filter__common__component__amenities",
                          "amenities-more",
                          document
                            .querySelectorAll(
                              ".filter__common__component__amenities"
                            )
                            .forEach(function (e) {
                              e.classList.remove("hide-data");
                            }),
                          void document
                            .querySelector(".amenities-more")
                            .classList.add("hide-more")
                        );
                      },
                    },
                    "+ ",
                    e.filterdata.filters.length - 6,
                    " more"
                  )
              )
          )
        );
      }
      function y(e) {
        var t,
          r,
          n = Object(m.d)(function (e) {
            return e.multilingualData;
          }),
          a = "",
          c = !1,
          i = Object(m.c)(),
          l =
            (e.filter &&
              e.filter.filters &&
              e.filter.filters.map(function (t, r) {
                if (e.preSelect)
                  if (Array.isArray(e.preSelect)) {
                    for (var n in e.preSelect)
                      if (-1 != t.id.indexOf(e.preSelect[n])) {
                        (n = t.name),
                          "bhk" == t.cat && ((n = n.split(" ")[0]), (c = !0)),
                          0 == a.length ? (a = n) : (a += ", " + n);
                        break;
                      }
                  } else
                    "16001" == e.preSelect
                      ? (a = "Men")
                      : "16002" == e.preSelect && (a = "Women");
              }),
            0 == a.length && e.filter
              ? (a = e.filter.title)
              : c && (a += " " + e.filter.title),
            ""),
          s =
            (e.preSelect &&
              (!Array.isArray(e.preSelect) ||
                (0 < e.preSelect.length &&
                  (("psmid" != e.propName && "locality" != e.propName) ||
                    ((t = !0),
                    e.filter.filters.filter(function (r) {
                      1 ==
                        e.preSelect.filter(function (e) {
                          return e == r.id;
                        }).length && (t = !1);
                    }),
                    0 == t)))) &&
              (l = " selected"),
            "filter__component " + e.modifierClass),
          u = (e.showFilter && (s += " activeFilter"), !1),
          p =
            (("locality" != e.propName && "psmid" != e.propName) || (u = !0),
            !1);
        return (
          "psmid" == e.propName
            ? ((r = !0),
              e.filter.filters.map(function (t, n) {
                var a = t.value;
                t.value.indexOf(!0) && (a = t.value.split(",")[0]),
                  e.preSelect && -1 == e.preSelect.indexOf(a) && (r = !1);
              }),
              (p = r))
            : e.preSelect &&
              e.preSelect.length == e.filter.filters.length &&
              (p = !0),
          o.a.createElement(
            "div",
            { className: s },
            "psmid" == e.propName &&
              " selected" == l &&
              e.preSelect &&
              1 < e.preSelect.length &&
              o.a.createElement("span", {
                className: "filter__component__clear",
                onClick: function () {
                  e.callBack(e.propName);
                },
              }),
            "psmid" != e.propName &&
              " selected" == l &&
              e.preSelect &&
              0 < e.preSelect.length &&
              o.a.createElement("span", {
                className: "filter__component__clear",
                onClick: function () {
                  e.callBack(e.propName);
                },
              }),
            o.a.createElement(
              "div",
              {
                className: "filter__component__title" + l,
                onClick: function (t) {
                  var r;
                  (r = e.filter.title),
                    -1 !=
                    t.target.parentNode.parentNode.className.indexOf(
                      "activeFilter"
                    )
                      ? (document
                          .querySelector(".filter-overlay")
                          .classList.remove("show"),
                        document
                          .querySelectorAll(".filter__component")
                          .forEach(function (e) {
                            e.classList.remove("activeFilter");
                          }))
                      : (document
                          .querySelector(".filter-overlay")
                          .classList.add("show"),
                        document
                          .querySelectorAll(".filter__component")
                          .forEach(function (e) {
                            e.classList.remove("activeFilter");
                          }),
                        document
                          .querySelector("." + e.modifierClass)
                          .classList.add("activeFilter"),
                        Object(h.b)(
                          i,
                          r,
                          e.resultPerPageCount,
                          "Top Launch",
                          {},
                          "WEB"
                        ));
                },
              },
              o.a.createElement("div", { className: "title-ellipsis" }, a)
            ),
            o.a.createElement(
              "div",
              {
                className: e.showFilter
                  ? "filter__component__drop-down nudge-case-dropdown"
                  : "filter__component__drop-down",
              },
              e.showFilter &&
                o.a.createElement(
                  "div",
                  { className: "nudge-case-title" },
                  "Select the no. of Bedrooms"
                ),
              o.a.createElement(d, {
                filterdata: e.filter,
                callBack: function (t, r, n, a) {
                  e.callBack(t, r, n, a);
                },
                preSelect: e.preSelect,
              }),
              u &&
                o.a.createElement(
                  "div",
                  { className: "filter__component__selectall" },
                  o.a.createElement("input", {
                    className: "filter__component__selectall__input",
                    type: "checkbox",
                    value: "Y",
                    name: "".concat(e.propName, "_top-loc-proj"),
                    id: "".concat(e.propName, "_top-loc-proj"),
                    onClick: function (t) {
                      var r = [];
                      e.filter.filters.map(function (e, t) {
                        r.push(e.value);
                      }),
                        t.target.checked
                          ? e.callBack(e.propName, r)
                          : e.callBack(e.propName);
                    },
                    checked: p ? "checked" : "",
                  }),
                  o.a.createElement(
                    "label",
                    {
                      className: "filter__component__selectall__label",
                      htmlFor: "".concat(e.propName, "_top-loc-proj"),
                    },
                    " ",
                    null != n && n.hasOwnProperty(n["Select All"])
                      ? n["Select All"]
                      : "Select All"
                  )
                ),
              !e.showFilter &&
                o.a.createElement(
                  "div",
                  {
                    className: "filter__component__cta-done",
                    onClick: e.doneCallBack,
                  },
                  " ",
                  null != n && n.hasOwnProperty(n.Done) ? n.Done : "Done"
                ),
              e.showFilter &&
                o.a.createElement(
                  "div",
                  {
                    className: "mb-srp__action--btn search-now-btn",
                    onClick: e.doneCallBack,
                  },
                  "Start Your Search"
                )
            ),
            e.showFilter &&
              e.hideAllCall &&
              document.querySelector(".filter-overlay").classList.add("show")
          )
        );
      }
      function b(e) {
        var t = Object(m.d)(function (e) {
            return e.multilingualData;
          }),
          r = [],
          n =
            (e.filter &&
              e.filter.residentialPropertyTypes &&
              e.filter.residentialPropertyTypes.filters &&
              (r = r.concat(e.filter.residentialPropertyTypes.filters)),
            e.filter &&
              e.filter.commercialPropertyTypes &&
              e.filter.commercialPropertyTypes.filters &&
              (r = r.concat(e.filter.commercialPropertyTypes.filters)),
            e.filter &&
              e.filter.otherPropertyTypes &&
              e.filter.otherPropertyTypes.filters &&
              (r = r.concat(e.filter.otherPropertyTypes.filters)),
            Object(m.c)()),
          a = "",
          c = 0,
          i =
            ((r =
              (r.map(function (t, r) {
                if (e.preSelect && Array.isArray(e.preSelect))
                  for (var n in e.preSelect)
                    if (-1 != t.id.indexOf(e.preSelect[n])) {
                      0 == a.length ? (a = t.name) : c++;
                      break;
                    }
              }),
              0 < c && (a += " +" + c),
              0 == a.length && (a = e.title),
              "")),
            e.preSelect && 0 < e.preSelect.length && (r = " selected"),
            "filter__component " + e.modifierClass);
        return (
          e.showFilter && (i += " activeFilter"),
          o.a.createElement(
            "div",
            { className: i },
            e.preSelect &&
              0 < e.preSelect.length &&
              o.a.createElement("span", {
                className: "filter__component__clear",
                onClick: function () {
                  e.callBack("clearAllPropertyType");
                },
              }),
            o.a.createElement(
              "div",
              {
                className: "filter__component__title" + r,
                onClick: function (t) {
                  -1 !=
                  t.target.parentNode.parentNode.className.indexOf(
                    "activeFilter"
                  )
                    ? (document
                        .querySelector(".filter-overlay")
                        .classList.remove("show"),
                      document
                        .querySelectorAll(".filter__component")
                        .forEach(function (e) {
                          e.classList.remove("activeFilter");
                        }))
                    : (document
                        .querySelector(".filter-overlay")
                        .classList.add("show"),
                      document
                        .querySelectorAll(".filter__component")
                        .forEach(function (e) {
                          e.classList.remove("activeFilter");
                        }),
                      document
                        .querySelector("." + e.modifierClass)
                        .classList.add("activeFilter"),
                      Object(h.b)(
                        n,
                        "Property Type",
                        e.resultPerPageCount,
                        "Top Launch",
                        {},
                        "WEB"
                      ));
                },
              },
              o.a.createElement("div", { className: "title-ellipsis" }, a)
            ),
            o.a.createElement(
              "div",
              { className: "filter__component__drop-down propertyType" },
              e.catSearchType &&
                ("residential" == e.catSearchType ||
                  "luxury" == e.catSearchType ||
                  "plot" == e.catSearchType) &&
                o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(d, {
                    filterdata: e.filter.residentialPropertyTypes,
                    callBack: function (t, r, n, a) {
                      e.callBack("propertyType", r, n, a);
                    },
                    preSelect: e.preSelect,
                  }),
                  o.a.createElement(d, {
                    filterdata: e.filter.commercialPropertyTypes,
                    callBack: function (t, r, n, a) {
                      e.callBack("propertyType", r, n, a);
                    },
                    preSelect: e.preSelect,
                  }),
                  o.a.createElement(d, {
                    filterdata: e.filter.otherPropertyTypes,
                    callBack: function (t, r, n, a) {
                      e.callBack("propertyType", r, n, a);
                    },
                    preSelect: e.preSelect,
                  })
                ),
              e.catSearchType &&
                "commercial" == e.catSearchType &&
                o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(d, {
                    filterdata: e.filter.commercialPropertyTypes,
                    callBack: function (t, r, n, a) {
                      e.callBack("propertyType", r, n, a);
                    },
                    preSelect: e.preSelect,
                  }),
                  o.a.createElement(d, {
                    filterdata: e.filter.residentialPropertyTypes,
                    callBack: function (t, r, n, a) {
                      e.callBack("propertyType", r, n, a);
                    },
                    preSelect: e.preSelect,
                  }),
                  o.a.createElement(d, {
                    filterdata: e.filter.otherPropertyTypes,
                    callBack: function (t, r, n, a) {
                      e.callBack("propertyType", r, n, a);
                    },
                    preSelect: e.preSelect,
                  })
                ),
              e.catSearchType &&
                "agricultural" == e.catSearchType &&
                o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(d, {
                    filterdata: e.filter.otherPropertyTypes,
                    callBack: function (t, r, n, a) {
                      e.callBack("propertyType", r, n, a);
                    },
                    preSelect: e.preSelect,
                  }),
                  o.a.createElement(d, {
                    filterdata: e.filter.residentialPropertyTypes,
                    callBack: function (t, r, n, a) {
                      e.callBack("propertyType", r, n, a);
                    },
                    preSelect: e.preSelect,
                  }),
                  o.a.createElement(d, {
                    filterdata: e.filter.commercialPropertyTypes,
                    callBack: function (t, r, n, a) {
                      e.callBack("propertyType", r, n, a);
                    },
                    preSelect: e.preSelect,
                  })
                ),
              o.a.createElement(
                "div",
                {
                  className: "filter__component__cta-done",
                  onClick: e.doneCallBack,
                },
                null != t && t.hasOwnProperty(t.Done) ? t.Done : "Done"
              )
            ),
            e.showFilter &&
              document.querySelector(".filter-overlay").classList.add("show")
          )
        );
      }
      var v = r(8),
        h = r(3);
      function g(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            var r;
            if (e)
              return "string" == typeof e
                ? _(e, t)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
                        ? e.constructor.name
                        : r) || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? _(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function E(e) {
        function t(e, t) {
          ("budgetMin" == e ? c : l)(t);
        }
        var r = (p = g(Object(a.useState)(e.title), 2))[0],
          n = p[1],
          c = ((p = g(Object(a.useState)(e.selectedMin), 2))[0], p[1]),
          l = ((p = g(Object(a.useState)(e.selectedMax), 2))[0], p[1]),
          s = Object(m.d)(function (e) {
            return e.multilingualData;
          }),
          u = Object(m.c)(),
          p =
            (Object(a.useEffect)(
              function () {
                var t = e.title;
                e.selectedMin && e.selectedMax
                  ? (t =
                      0 == Object(v.e)(e.selectedMin, s)
                        ? "Upto " + Object(v.e)(e.selectedMax, s)
                        : Object(v.e)(e.selectedMin, s) +
                          " - " +
                          Object(v.e)(e.selectedMax, s))
                  : e.selectedMin
                  ? (t =
                      0 == Object(v.e)(e.selectedMin, s)
                        ? "Budget"
                        : "Min " + Object(v.e)(e.selectedMin, s))
                  : e.selectedMax &&
                    (t = "Upto " + Object(v.e)(e.selectedMax, s)),
                  n(t);
              },
              [e.selectedMin, e.selectedMax]
            ),
            "filter__component " + e.modifierClass),
          f = (e.showFilter && (p += " activeFilter"), !1);
        return (
          (0 < e.selectedMin || 0 < e.selectedMax) && (f = !0),
          e.filter.englishTitle,
          o.a.createElement(
            "div",
            { className: p },
            f &&
              o.a.createElement("span", {
                className: "filter__component__clear",
                onClick: function () {
                  e.callBack("budgetMin"), e.callBack("budgetMax");
                },
              }),
            o.a.createElement(
              "div",
              {
                className:
                  e.selectedMin || e.selectedMax
                    ? "filter__component__title selected"
                    : "filter__component__title",
                onClick: function (t) {
                  -1 !=
                  t.target.parentNode.parentNode.className.indexOf(
                    "activeFilter"
                  )
                    ? (document
                        .querySelector(".filter-overlay")
                        .classList.remove("show"),
                      document
                        .querySelectorAll(".filter__component")
                        .forEach(function (e) {
                          e.classList.remove("activeFilter");
                        }))
                    : (document
                        .querySelector(".filter-overlay")
                        .classList.add("show"),
                      document
                        .querySelectorAll(".filter__component")
                        .forEach(function (e) {
                          e.classList.remove("activeFilter");
                        }),
                      document
                        .querySelector("." + e.modifierClass)
                        .classList.add("activeFilter"),
                      Object(h.b)(
                        u,
                        "Budget",
                        e.resultPerPageCount,
                        "Top Launch",
                        {},
                        "WEB"
                      ));
                },
              },
              o.a.createElement("div", { className: "title-ellipsis" }, r)
            ),
            o.a.createElement(
              "div",
              { className: "filter__component__drop-down" },
              e.showFilter &&
                o.a.createElement(
                  "div",
                  { className: "nudge-case-title" },
                  "Set your preferred Budget"
                ),
              "budgetBuy" == e.filter.title &&
                o.a.createElement(i.a, {
                  min: 0,
                  max: e.filter
                    ? e.filter.range[e.filter.range.length - 3].value
                    : 5e7,
                  currentValueMin: e.selectedMin || 0,
                  currentValueMax:
                    e.selectedMax ||
                    (e.filter
                      ? e.filter.range[e.filter.range.length - 3].value
                      : 5e7),
                  diffValue: 5e5,
                  budgetType: "budget-buy",
                  minKayName: "budgetMin",
                  maxKayName: "budgetMax",
                  rupeeIcon: "₹",
                  budgetRange: e.filter,
                  callBack: function (t, r) {
                    e.callBack(t, r);
                  },
                  callBackTitle: function (e, r) {
                    t(e, r);
                  },
                }),
              "budgetRent" == e.filter.title &&
                o.a.createElement(i.a, {
                  min: 0,
                  max: e.filter
                    ? e.filter.range[e.filter.range.length - 1].value
                    : 1e6,
                  currentValueMin: e.selectedMin || 0,
                  currentValueMax:
                    e.selectedMax ||
                    (e.filter
                      ? e.filter.range[e.filter.range.length - 1].value
                      : 1e6),
                  diffValue: 5e3,
                  budgetType: "budget-rent",
                  minKayName: "budgetMin",
                  maxKayName: "budgetMax",
                  rupeeIcon: "₹",
                  budgetRange: e.filter,
                  callBack: function (t, r) {
                    e.callBack(t, r);
                  },
                  callBackTitle: function (e, r) {
                    t(e, r);
                  },
                }),
              "budgetCoworking" == e.filter.title &&
                o.a.createElement(i.a, {
                  min: 0,
                  max: e.filter
                    ? e.filter.range[e.filter.range.length - 1].value
                    : 1e6,
                  currentValueMin: e.selectedMin || 0,
                  currentValueMax:
                    e.selectedMax ||
                    (e.filter
                      ? e.filter.range[e.filter.range.length - 1].value
                      : 1e6),
                  diffValue: 2e3,
                  budgetType: "budget-coworking",
                  minKayName: "budgetMin",
                  maxKayName: "budgetMax",
                  rupeeIcon: "₹",
                  budgetRange: e.filter,
                  callBack: function (t, r) {
                    e.callBack(t, r);
                  },
                  callBackTitle: function (e, r) {
                    t(e, r);
                  },
                }),
              !e.showFilter &&
                o.a.createElement(
                  "div",
                  {
                    className: "filter__component__cta-done",
                    onClick: e.doneCallBack,
                  },
                  s ? s.Done : "Done"
                ),
              e.showFilter &&
                o.a.createElement(
                  "div",
                  {
                    className: "mb-srp__action--btn search-now-btn",
                    onClick: e.doneCallBack,
                  },
                  "Start Your Search"
                )
            ),
            e.showFilter &&
              e.hideAllCall &&
              document.querySelector(".filter-overlay").classList.add("show")
          )
        );
      }
      var O = r(14);
      function w(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            var r;
            if (e)
              return "string" == typeof e
                ? S(e, t)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
                        ? e.constructor.name
                        : r) || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? S(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function j(e) {
        function t(e, t) {
          (t = document.querySelector("#" + t).offsetTop),
            document.querySelector("#more-filter-dropdown").scrollTo(0, t),
            document
              .querySelectorAll(".filter__component__more-title")
              .forEach(function (e) {
                e.classList.remove("active");
              }),
            document.querySelector("#" + e).classList.add("active");
        }
        var r = (c = w(Object(a.useState)({}), 2))[0],
          n = c[1],
          c = Object(m.d)(function (e) {
            return e.searchAdditionalDataBean;
          }),
          i = Object(m.d)(function (e) {
            return e.searchBean;
          }),
          l = Object(m.c)(),
          s = Object(m.d)(function (e) {
            return e.multilingualData;
          });
        return (
          Object(a.useEffect)(
            function () {
              Object(v.o)(e.filter, e.preSelect, n);
            },
            [e.preSelect, e.filter, e.showOccupencyAndGenderInMore]
          ),
          o.a.createElement(
            "div",
            { className: "filter__component " + e.modifierClass },
            o.a.createElement("span", {
              className: "filter__component__more-icon",
            }),
            r &&
              0 < r.moreCount &&
              o.a.createElement(
                "span",
                { className: "filter__component__more-count" },
                r.moreCount
              ),
            o.a.createElement(
              "div",
              {
                className: "filter__component__title more-title",
                onClick: function (t) {
                  -1 != t.target.parentNode.className.indexOf("activeFilter")
                    ? (document
                        .querySelector(".filter-overlay")
                        .classList.remove("show"),
                      document
                        .querySelectorAll(".filter__component")
                        .forEach(function (e) {
                          e.classList.remove("activeFilter");
                        }))
                    : (document
                        .querySelector(".filter-overlay")
                        .classList.add("show"),
                      document
                        .querySelectorAll(".filter__component")
                        .forEach(function (e) {
                          e.classList.remove("activeFilter");
                        }),
                      document
                        .querySelector("." + e.modifierClass)
                        .classList.add("activeFilter"),
                      Object(h.b)(
                        l,
                        "More Filters",
                        e.resultPerPageCount,
                        "More Launch",
                        {},
                        "WEB"
                      ));
                },
              },
              e.title
            ),
            o.a.createElement(
              "div",
              { className: "filter__component__drop-down filter-more" },
              o.a.createElement(
                "div",
                { id: "moreRefined" },
                o.a.createElement(
                  "div",
                  {
                    className:
                      "filter__component__more-left webkit__scroll-filter",
                  },
                  e.filter &&
                    e.filter.map(function (r, n) {
                      var a = r.filters[0].cat;
                      if (
                        ("subPropertyType" == a && (a = "propertyType"),
                        r.showHeadingInMore &&
                          Object(v.c)(r, e.showOccupencyAndGenderInMore) &&
                          Object(v.d)(r, i))
                      )
                        return "areaUnit" == a
                          ? o.a.createElement(
                              "div",
                              {
                                key: n,
                                className: "filter__component__more-title",
                                id: "moreFilterTitle_" + n,
                                onClick: function () {
                                  t("moreFilterTitle_" + n, "moreFilter_" + n);
                                },
                              },
                              r.title,
                              0 < i.areaFrom &&
                                o.a.createElement("span", {
                                  className: "green-dot",
                                }),
                              0 < i.areaTo &&
                                o.a.createElement("span", {
                                  className: "green-dot",
                                })
                            )
                          : o.a.createElement(
                              "div",
                              {
                                key: n,
                                className: "filter__component__more-title",
                                id: "moreFilterTitle_" + n,
                                onClick: function () {
                                  t("moreFilterTitle_" + n, "moreFilter_" + n);
                                },
                              },
                              r.title,
                              i[a] &&
                                0 < i[a].length &&
                                o.a.createElement("span", {
                                  className: "green-dot",
                                })
                            );
                    })
                ),
                o.a.createElement(
                  "div",
                  {
                    className:
                      "filter__component__more-right webkit__scroll-filter",
                    id: "more-filter-dropdown",
                  },
                  o.a.createElement(
                    "div",
                    { className: "more-filter-inner" },
                    e.filter &&
                      e.filter.map(function (t, r) {
                        if (
                          Object(v.c)(t, e.showOccupencyAndGenderInMore) &&
                          Object(v.d)(t, i)
                        )
                          return o.a.createElement(d, {
                            filterdata: t,
                            key: r,
                            preSelect: e.preSelect,
                            callBack: function (t, r, n, a) {
                              e.callBack(t, r, n, a);
                            },
                            type: "more",
                            moreFilterId: "moreFilter_" + r,
                          });
                      })
                  )
                ),
                o.a.createElement(
                  "div",
                  { className: "filter__component__more-fixed" },
                  o.a.createElement(
                    "div",
                    { className: "filter__component__more-fixed__btn-sec" },
                    o.a.createElement(
                      "div",
                      {
                        className:
                          "filter__component__more-fixed__clear-filter",
                        onClick: function () {
                          e.resetCallBack(r.moreFilterNames);
                        },
                      },
                      null != s && s.hasOwnProperty(s["Clear All"])
                        ? s["Clear All"]
                        : "Clear All"
                    ),
                    o.a.createElement(
                      "div",
                      {
                        className: "filter__component__btn",
                        onClick: e.doneCallBack,
                      },
                      null != s && s.hasOwnProperty(s.View)
                        ? s.View + " "
                        : "View ",
                      c && c.resultCount,
                      null != s && s.hasOwnProperty(s.Properties)
                        ? " " + s.Properties
                        : " Properties"
                    )
                  )
                )
              )
            )
          )
        );
      }
      function C(e) {
        var t = Object(m.d)(function (e) {
            return e.multilingualData;
          }),
          r = e.preSelect.category,
          n = e.preSelect.search,
          a = r && "R" == r ? "Rent" : "Buy",
          c = 0;
        return (
          "commercial" == n
            ? (a =
                "R" == r
                  ? ((c = 4), "Commercial Lease")
                  : ((c = 3), "Commercial Buy"))
            : (c = "R" == r ? 2 : 1),
          o.a.createElement(
            "div",
            { className: "filter__component " + e.modifierClass },
            o.a.createElement(
              "div",
              {
                className: "filter__component__title",
                onClick: function (t) {
                  -1 !=
                  t.target.parentNode.parentNode.className.indexOf(
                    "activeFilter"
                  )
                    ? (document
                        .querySelector(".filter-overlay")
                        .classList.remove("show"),
                      document
                        .querySelectorAll(".filter__component")
                        .forEach(function (e) {
                          e.classList.remove("activeFilter");
                        }))
                    : (document
                        .querySelector(".filter-overlay")
                        .classList.add("show"),
                      document
                        .querySelectorAll(".filter__component")
                        .forEach(function (e) {
                          e.classList.remove("activeFilter");
                        }),
                      document
                        .querySelector("." + e.modifierClass)
                        .classList.add("activeFilter")),
                    document
                      .querySelector("#keywordAutoSuggestDropDown")
                      .classList.remove("top-filter-autosuggest__drop-down"),
                    document
                      .querySelector("#keywordAutoSuggestDropDown")
                      .parentNode.classList.remove("open-dropdown"),
                    document
                      .querySelectorAll(".top-filter__item")
                      .forEach(function (e) {
                        e.classList.remove("hide-filters");
                      }),
                    (document.querySelector(
                      "#recent-proj-loc-data"
                    ).style.display = "none"),
                    (document.querySelector(
                      "#zone-corridor-data"
                    ).style.display = "none");
                },
              },
              o.a.createElement(
                "div",
                { className: "title-ellipsis" },
                null != t && t.hasOwnProperty(t[a]) ? t[a] : a,
                " "
              )
            ),
            o.a.createElement(
              "div",
              {
                className: "filter__component__drop-down",
                style: { minWidth: "260px" },
              },
              o.a.createElement(
                "div",
                {
                  className: "filter__common__component single-select clearfix",
                },
                o.a.createElement(
                  "div",
                  { className: "filter__common__component__title" },
                  null != t && t.hasOwnProperty(t.Residential)
                    ? t.Residential
                    : "Residential"
                ),
                o.a.createElement(
                  "div",
                  { className: "filter__common__component__item" },
                  o.a.createElement("input", {
                    className: "filter__common__component__item__input",
                    type: "radio",
                    value: "buy",
                    name: "categoriesTop",
                    id: "catResidentialBuy",
                    checked: 1 == c,
                  }),
                  o.a.createElement(
                    "label",
                    {
                      className: "filter__common__component__item__label",
                      htmlFor: "catResidentialBuy",
                      onClick: function () {
                        1 != c &&
                          e.callBack(
                            "search",
                            e.filter.residentialSaleUrl,
                            "residential buy"
                          );
                      },
                    },
                    null != t && t.hasOwnProperty(t.Buy) ? t.Buy : "Buy"
                  )
                ),
                o.a.createElement(
                  "div",
                  { className: "filter__common__component__item" },
                  o.a.createElement("input", {
                    className: "filter__common__component__item__input",
                    type: "radio",
                    value: "rent",
                    name: "categoriesTop",
                    id: "catResidentialRent",
                    checked: 2 == c,
                  }),
                  o.a.createElement(
                    "label",
                    {
                      className: "filter__common__component__item__label",
                      htmlFor: "catResidentialRent",
                      onClick: function () {
                        2 != c &&
                          e.callBack(
                            "search",
                            e.filter.residentialRentUrl,
                            "residential rent"
                          );
                      },
                    },
                    null != t && t.hasOwnProperty(t.Rent) ? t.Rent : "Rent"
                  )
                ),
                o.a.createElement(
                  "div",
                  { className: "filter__common__component__item" },
                  o.a.createElement("input", {
                    className: "filter__common__component__item__input",
                    type: "radio",
                    value: "pg",
                    name: "categoriesTop",
                    id: "catResidentialPg",
                  }),
                  o.a.createElement(
                    "label",
                    {
                      className: "filter__common__component__item__label",
                      htmlFor: "catResidentialPg",
                      onClick: function () {
                        e.callBack("search", e.filter.PGSearchUrl, "PG");
                      },
                    },
                    null != t && t.hasOwnProperty(t.PG) ? t.PG : "PG"
                  )
                )
              ),
              o.a.createElement(
                "div",
                {
                  className: "filter__common__component single-select clearfix",
                },
                o.a.createElement(
                  "div",
                  { className: "filter__common__component__title" },
                  null != t && t.hasOwnProperty(t.Commercial)
                    ? t.Commercial
                    : "Commercial"
                ),
                o.a.createElement(
                  "div",
                  { className: "filter__common__component__item" },
                  o.a.createElement("input", {
                    className: "filter__common__component__item__input",
                    type: "radio",
                    value: "buy",
                    name: "categoriesTop",
                    id: "catCommercialBuy",
                    checked: 3 == c,
                  }),
                  o.a.createElement(
                    "label",
                    {
                      className: "filter__common__component__item__label",
                      htmlFor: "catCommercialBuy",
                      onClick: function () {
                        3 != c &&
                          e.callBack(
                            "search",
                            e.filter.commercialSaleUrl,
                            "commercial buy"
                          );
                      },
                    },
                    null != t && t.hasOwnProperty(t.Buy) ? t.Buy : "Buy"
                  )
                ),
                o.a.createElement(
                  "div",
                  { className: "filter__common__component__item" },
                  o.a.createElement("input", {
                    className: "filter__common__component__item__input",
                    type: "radio",
                    value: "rent",
                    name: "categoriesTop",
                    id: "catCommercialLease",
                    checked: 4 == c,
                  }),
                  o.a.createElement(
                    "label",
                    {
                      className: "filter__common__component__item__label",
                      htmlFor: "catCommercialLease",
                      onClick: function () {
                        4 != c &&
                          e.callBack(
                            "search",
                            e.filter.commercialRentUrl,
                            "commercial lease"
                          );
                      },
                    },
                    null != t && t.hasOwnProperty(t.Lease) ? t.Lease : "Lease"
                  )
                )
              )
            )
          )
        );
      }
      function N(e) {
        var t = e.pupularProjectData,
          r = e.nearByLocalityData,
          n = e.pupularLocalityData,
          a = e.recentlySearchData,
          c = e.callback,
          i = Object(m.d)(function (e) {
            return e.multilingualData;
          }),
          l =
            ((e = Object(m.d)(function (e) {
              return e.searchAdditionalDataBean;
            })),
            Object(m.d)(function (e) {
              return e.searchBean;
            }));
        return o.a.createElement(
          "div",
          { id: "recent-proj-loc-data" },
          a &&
            null !== a &&
            0 < a.length &&
            o.a.createElement(
              "div",
              { className: "recent-proj-loc__wrap" },
              o.a.createElement(
                "div",
                { className: "recent-proj-loc__wrap__title" },
                null != i && i.hasOwnProperty(i["Recently Searched"])
                  ? i["Recently Searched"]
                  : "Recently Searched"
              ),
              a.map(function (e, t) {
                if (t < 5) {
                  var r = e.name;
                  if (i) {
                    var n = r.split(",");
                    r = "";
                    for (t in n) {
                      var a = n[t].trim();
                      a = i && i[a] ? i[a] : a;
                      0 == r.length ? (r += a) : (r += ", " + a);
                    }
                  }
                  var l = (l = r.split(","))[l.length - 1].trim(),
                    s = new RegExp(l, "ig");
                  return (
                    (r = r.replace(s, "<span>" + l + "</span>")),
                    o.a.createElement("div", {
                      key: e.id,
                      className: "recent-proj-loc__wrap__item",
                      onClick: function () {
                        return c("recentSearch", e);
                      },
                      dangerouslySetInnerHTML: { __html: r },
                    })
                  );
                }
              })
            ),
          l.city &&
            n &&
            null == r &&
            0 < n.length &&
            o.a.createElement(
              "div",
              { className: "recent-proj-loc__wrap" },
              o.a.createElement(
                "div",
                { className: "recent-proj-loc__wrap__title" },
                i
                  ? e.cityName &&
                      i[e.cityName.value] +
                        " " +
                        (null != i["Top Localities in"]
                          ? i["Top Localities in"]
                          : "")
                  : "Top Localities in " + (e.cityName && e.cityName.value)
              ),
              n.map(function (e, t) {
                if (t < 5) {
                  var r = e.name;
                  if (i) {
                    var n = r.split(",");
                    r = "";
                    for (t in n) {
                      var a = n[t].trim();
                      a = i && i[a] ? i[a] : a;
                      0 == r.length ? (r += a) : (r += ", " + a);
                    }
                  }
                  var l = (l = r.split(","))[l.length - 1].trim(),
                    s = new RegExp(l, "ig");
                  return (
                    (r = r.replace(s, "<span>" + l + "</span>")),
                    o.a.createElement("div", {
                      key: e.id,
                      className: "recent-proj-loc__wrap__item",
                      onClick: function () {
                        return c("locality", e);
                      },
                      dangerouslySetInnerHTML: { __html: r },
                    })
                  );
                }
              })
            ),
          l.city &&
            r &&
            0 < r.length &&
            o.a.createElement(
              "div",
              { className: "recent-proj-loc__wrap divider" },
              o.a.createElement(
                "div",
                { className: "recent-proj-loc__wrap__title" },
                i
                  ? i["Similar Localities nearby selected Localities"]
                  : "Similar Localities nearby selected Localities"
              ),
              r.map(function (e, t) {
                if (t < 5) {
                  var r = e.name;
                  if (i) {
                    var n = r.split(",");
                    r = "";
                    for (t in n) {
                      var a = n[t].trim();
                      a = i && i[a] ? i[a] : a;
                      0 == r.length ? (r += a) : (r += ", " + a);
                    }
                  }
                  var l = (l = r.split(","))[l.length - 1].trim(),
                    s = new RegExp(l, "ig");
                  return (
                    (r = r.replace(s, " <span>" + l + "</span>")),
                    o.a.createElement("div", {
                      key: e.id,
                      className: "recent-proj-loc__wrap__item",
                      onClick: function () {
                        return c("locality", e);
                      },
                      dangerouslySetInnerHTML: { __html: r },
                    })
                  );
                }
              })
            ),
          l.city &&
            t &&
            null == r &&
            0 < t.length &&
            o.a.createElement(
              "div",
              { className: "recent-proj-loc__wrap divider" },
              o.a.createElement(
                "div",
                { className: "recent-proj-loc__wrap__title" },
                i
                  ? e.cityName &&
                      i[e.cityName.value] +
                        " " +
                        (null != i["Top Projects in"]
                          ? i["Top Projects in"]
                          : "")
                  : "Top Projects in " + (e.cityName && e.cityName.value)
              ),
              t.map(function (e, t) {
                if (t < 5) {
                  var r = e.name;
                  if (i) {
                    var n = r.split(",");
                    r = "";
                    for (t in n) {
                      var a = n[t].trim();
                      a = i && i[a] ? i[a] : a;
                      0 == r.length ? (r += a) : (r += ", " + a);
                    }
                  }
                  var l = (l = r.split(","))[l.length - 1].trim(),
                    s = new RegExp(l, "ig");
                  return (
                    (r = r.replace(s, " <span>" + l + "</span>")),
                    o.a.createElement("div", {
                      key: e.id,
                      className: "recent-proj-loc__wrap__item",
                      onClick: function () {
                        return c("psmid", e);
                      },
                      dangerouslySetInnerHTML: { __html: r },
                    })
                  );
                }
              })
            )
        );
      }
      function k(e) {
        var t = e.corridorData,
          r = e.setPropertyTypeNullError,
          n = Object(m.d)(function (e) {
            return e.multilingualData;
          }),
          a =
            ((e = Object(m.d)(function (e) {
              return e.searchAdditionalDataBean;
            })),
            Object(m.d)(function (e) {
              return e.searchBean;
            })),
          c = Object(m.c)(),
          i = t,
          l = ((t = Object(L.b)(a.zone, t)), []);
        return (
          (i = t || i) &&
            Object.keys(i).forEach(function (e, t) {
              l.push({ id: e, name: i[e] });
            }),
          o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              "div",
              { id: "zone-corridor-data" },
              a.city &&
                l &&
                0 < l.length &&
                o.a.createElement(
                  "div",
                  { className: "recent-proj-loc__wrap divider" },
                  o.a.createElement(
                    "div",
                    { className: "recent-proj-loc__wrap__title" },
                    n
                      ? e.cityName &&
                          n[e.cityName.value] +
                            " " +
                            n["Top Investment Corridors in"]
                      : "Top Investment Corridors in " +
                          (e.cityName && e.cityName.value)
                  ),
                  l.map(function (e, t) {
                    var i;
                    if (t < 5)
                      return (
                        (i = e.name),
                        (i = n ? n[i] : i),
                        o.a.createElement("div", {
                          key: e.i,
                          className: "recent-proj-loc__wrap__item",
                          onClick: function () {
                            var t, n;
                            (t = e.id),
                              (n = i),
                              a.propertyType && 0 == a.propertyType.length && r
                                ? r(!0)
                                : c({
                                    type: "zone",
                                    data: t,
                                    zoneNames: { key: t, value: n },
                                  });
                          },
                          dangerouslySetInnerHTML: { __html: i },
                        })
                      );
                  })
                )
            )
          )
        );
      }
      var P = r(1),
        T = r(447),
        I = r(348),
        L = r(159);
      function A(e) {
        return (A =
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
      function x(e, t) {
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? x(Object(r), !0).forEach(function (t) {
                var n, a;
                (n = e),
                  (a = r[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== A(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 === r) return String(e);
                        if ("object" !== A((r = r.call(e, "string")))) return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === A(e) ? e : String(e)
                    );
                  })(t)) in n
                    ? Object.defineProperty(n, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[t] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : x(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function F() {
        F = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a =
            (d = "function" == typeof Symbol ? Symbol : {}).iterator ||
            "@@iterator",
          o = d.asyncIterator || "@@asyncIterator",
          c = d.toStringTag || "@@toStringTag";
        function i(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
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
          i = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function l(e, t, r, a) {
          var o, c, i, l;
          (t = t && t.prototype instanceof m ? t : m),
            (t = Object.create(t.prototype)),
            (a = new E(a || []));
          return (
            n(t, "_invoke", {
              value:
                ((o = e),
                (c = r),
                (i = a),
                (l = "suspendedStart"),
                function (e, t) {
                  if ("executing" === l)
                    throw new Error("Generator is already running");
                  if ("completed" === l) {
                    if ("throw" === e) throw t;
                    return { value: void 0, done: !0 };
                  }
                  for (i.method = e, i.arg = t; ; ) {
                    var r = i.delegate;
                    if (
                      r &&
                      ((r = (function e(t, r) {
                        var n = r.method,
                          a = t.iterator[n];
                        return void 0 === a
                          ? ((r.delegate = null),
                            ("throw" === n &&
                              t.iterator.return &&
                              ((r.method = "return"),
                              (r.arg = void 0),
                              e(t, r),
                              "throw" === r.method)) ||
                              ("return" !== n &&
                                ((r.method = "throw"),
                                (r.arg = new TypeError(
                                  "The iterator does not provide a '" +
                                    n +
                                    "' method"
                                )))),
                            u)
                          : "throw" === (n = s(a, t.iterator, r.arg)).type
                          ? ((r.method = "throw"),
                            (r.arg = n.arg),
                            (r.delegate = null),
                            u)
                          : (a = n.arg)
                          ? a.done
                            ? ((r[t.resultName] = a.value),
                              (r.next = t.nextLoc),
                              "return" !== r.method &&
                                ((r.method = "next"), (r.arg = void 0)),
                              (r.delegate = null),
                              u)
                            : a
                          : ((r.method = "throw"),
                            (r.arg = new TypeError(
                              "iterator result is not an object"
                            )),
                            (r.delegate = null),
                            u);
                      })(r, i)),
                      r)
                    ) {
                      if (r === u) continue;
                      return r;
                    }
                    if ("next" === i.method) i.sent = i._sent = i.arg;
                    else if ("throw" === i.method) {
                      if ("suspendedStart" === l)
                        throw ((l = "completed"), i.arg);
                      i.dispatchException(i.arg);
                    } else "return" === i.method && i.abrupt("return", i.arg);
                    if (
                      ((l = "executing"), "normal" === (r = s(o, c, i)).type)
                    ) {
                      if (
                        ((l = i.done ? "completed" : "suspendedYield"),
                        r.arg === u)
                      )
                        continue;
                      return { value: r.arg, done: i.done };
                    }
                    "throw" === r.type &&
                      ((l = "completed"),
                      (i.method = "throw"),
                      (i.arg = r.arg));
                  }
                }),
            }),
            t
          );
        }
        function s(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        e.wrap = l;
        var u = {};
        function m() {}
        function p() {}
        function f() {}
        var d,
          y,
          b =
            ((y =
              (y =
                (i((d = {}), a, function () {
                  return this;
                }),
                Object.getPrototypeOf)) && y(y(O([])))) &&
              y !== t &&
              r.call(y, a) &&
              (d = y),
            (f.prototype = m.prototype = Object.create(d)));
        function v(e) {
          ["next", "throw", "return"].forEach(function (t) {
            i(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function h(e, t) {
          var a;
          n(this, "_invoke", {
            value: function (n, o) {
              function c() {
                return new t(function (a, c) {
                  !(function n(a, o, c, i) {
                    var l;
                    if ("throw" !== (a = s(e[a], e, o)).type)
                      return (o = (l = a.arg).value) &&
                        "object" == A(o) &&
                        r.call(o, "__await")
                        ? t.resolve(o.__await).then(
                            function (e) {
                              n("next", e, c, i);
                            },
                            function (e) {
                              n("throw", e, c, i);
                            }
                          )
                        : t.resolve(o).then(
                            function (e) {
                              (l.value = e), c(l);
                            },
                            function (e) {
                              return n("throw", e, c, i);
                            }
                          );
                    i(a.arg);
                  })(n, o, a, c);
                });
              }
              return (a = a ? a.then(c, c) : c());
            },
          });
        }
        function g(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function _(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function E(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(g, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t,
              n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length))
              return (
                (t = -1),
                ((n = function n() {
                  for (; ++t < e.length; )
                    if (r.call(e, t)) return (n.value = e[t]), (n.done = !1), n;
                  return (n.value = void 0), (n.done = !0), n;
                }).next = n)
              );
          }
          return { next: w };
        }
        function w() {
          return { value: void 0, done: !0 };
        }
        return (
          n(b, "constructor", { value: (p.prototype = f), configurable: !0 }),
          n(f, "constructor", { value: p, configurable: !0 }),
          (p.displayName = i(f, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            return (
              !!(e = "function" == typeof e && e.constructor) &&
              (e === p || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), i(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          v(h.prototype),
          i(h.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = h),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var c = new h(l(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? c
              : c.next().then(function (e) {
                  return e.done ? e.value : c.next();
                });
          }),
          v(b),
          i(b, c, "Generator"),
          i(b, a, function () {
            return this;
          }),
          i(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t,
              r = Object(e),
              n = [];
            for (t in r) n.push(t);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var t = n.pop();
                  if (t in r) return (e.value = t), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (E.prototype = {
            constructor: E,
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
                    r.call(this, t) &&
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
              function n(r, n) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; 0 <= a; --a) {
                var o = this.tryEntries[a],
                  c = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var i = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (i && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (i) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
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
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), _(r), u;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                var r,
                  n,
                  a = this.tryEntries[t];
                if (a.tryLoc === e)
                  return (
                    "throw" === (r = a.completion).type && ((n = r.arg), _(a)),
                    n
                  );
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                u
              );
            },
          }),
          e
        );
      }
      function M(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return U(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          q(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function D(e, t, r, n, a, o, c) {
        try {
          var i = e[o](c),
            l = i.value;
        } catch (e) {
          return void r(e);
        }
        i.done ? t(l) : Promise.resolve(l).then(n, a);
      }
      function R(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          q(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function q(e, t) {
        var r;
        if (e)
          return "string" == typeof e
            ? U(e, t)
            : "Map" ===
                (r =
                  "Object" ===
                    (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                  e.constructor
                    ? e.constructor.name
                    : r) || "Set" === r
            ? Array.from(e)
            : "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            ? U(e, t)
            : void 0;
      }
      function U(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var G = o.a.memo(function (e) {
        var t = Object(m.d)(function (e) {
            return e.searchBean;
          }),
          r = Object(m.d)(function (e) {
            return e.searchAdditionalDataBean;
          }),
          n = Object(m.d)(function (e) {
            return e.clientBean;
          }),
          c = (w = R(Object(a.useState)(null), 2))[0],
          i = w[1],
          l = (w = R(Object(a.useState)(null), 2))[0],
          s = w[1],
          u = (w = R(Object(a.useState)(null), 2))[0],
          p = w[1],
          f = (w = R(Object(a.useState)(null), 2))[0],
          d = w[1],
          y = (w = R(Object(a.useState)(0), 2))[0],
          b = w[1],
          v = (w = R(Object(a.useState)(null), 2))[0],
          h = w[1],
          g = Object(I.a)(t, r),
          _ = [],
          E =
            (1 < g.length &&
              0 !=
                (_ = g.filter(function (e) {
                  return "city_name" === e.suggestType;
                })).length &&
              (g = g.filter(function (e) {
                return "city_name" !== e.suggestType;
              })),
            Object(m.c)()),
          w =
            (Object(a.useEffect)(function () {}, []),
            Object(a.useEffect)(
              function () {
                Object(L.d)(s, d, p, null, t, t.locality, r, !1);
              },
              [JSON.stringify(g), t.category]
            ),
            Object(a.useEffect)(
              function () {
                Object(L.e)(t, h);
              },
              [n.recentSearchCount]
            ),
            (function () {
              e = F().mark(function e(r) {
                var n, a, o, c, i, l, s, u, m;
                return F().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          O.a.get(
                            "/homepageAutoSuggest?searchtxt=" +
                              r.text +
                              "&city=" +
                              t.city
                          )
                        );
                      case 2:
                        for (
                          i = (i = e.sent).data,
                            n = i.locationMap.LOCATION,
                            a = [],
                            o = 0;
                          o < n.length;
                          o++
                        )
                          "lt_pg" !== n[o].suggestType && a.push(n[o]);
                        if (
                          ((n = a),
                          (c = i.locationMap.PROJECT),
                          (i = i.locationMap.BUILDER),
                          (u = [
                            {
                              result: "Locations",
                              state: "",
                              stateName: "",
                              city: "",
                              rfnum: "-1",
                              suggestType: "title",
                              latitude: "",
                              longitude: "",
                            },
                          ]),
                          (m = [
                            {
                              result: "Projects",
                              state: "",
                              stateName: "",
                              city: "",
                              rfnum: "-2",
                              suggestType: "title",
                              latitude: "",
                              longitude: "",
                            },
                          ]),
                          (l = [
                            {
                              result: "Builders",
                              state: "",
                              stateName: "",
                              city: "",
                              rfnum: "-3",
                              suggestType: "title",
                              latitude: "",
                              longitude: "",
                            },
                          ]),
                          (s = []),
                          null != n &&
                            ((u = [].concat(u, M(n))), (s = s.concat(u))),
                          null != c &&
                            ((u = [].concat(m, M(c))), (s = s.concat(u))),
                          null != i &&
                            ((m = [].concat(l, M(i))), (s = s.concat(m))),
                          s)
                        )
                          return e.abrupt("return", s);
                        e.next = 19;
                        break;
                      case 19:
                        return e.abrupt("return", null);
                      case 20:
                      case "end":
                        return e.stop();
                    }
                }, e);
              });
              var e,
                r = function () {
                  var t = this,
                    r = arguments;
                  return new Promise(function (n, a) {
                    var o = e.apply(t, r);
                    function c(e) {
                      D(o, n, a, c, i, "next", e);
                    }
                    function i(e) {
                      D(o, n, a, c, i, "throw", e);
                    }
                    c(void 0);
                  });
                };
              return function (e) {
                return r.apply(this, arguments);
              };
            })());
        n = function (r) {
          var n;
          document
            .querySelector("#keywordAutoSuggestDropDown")
            .parentNode.classList.contains("open-dropdown") ||
            (document
              .querySelector("#keywordAutoSuggestDropDown")
              .classList.add("top-filter-autosuggest__drop-down"),
            document
              .querySelector("#keywordAutoSuggestDropDown")
              .parentNode.classList.add("open-dropdown"),
            document
              .querySelector(".autosuggest-overlay")
              .classList.add("show"),
            document
              .querySelector(".top-filter__item-all-filter")
              .classList.add("hide-filters"),
            document
              .querySelectorAll(".filter__component")
              .forEach(function (e) {
                e.classList.remove("activeFilter");
              }),
            t.city &&
              t.propertyType.includes("10000") &&
              Object(L.c)(i, t.city, !0),
            (document.querySelector(
              "#proj-loc-data-corridor-wrap"
            ).style.display = "block"),
            (document.querySelector("#recent-proj-loc-data").style.display =
              "block"),
            (n =
              document.querySelector(".auto-suggest-web-main-wrap")
                .clientHeight + 24),
            b(n),
            e.setShowLocationHelpText(!1));
        };
        return (
          Object(a.useEffect)(
            function () {
              var e =
                document.querySelector(".auto-suggest-web-main-wrap")
                  .clientHeight + 24;
              b(e);
            },
            [g]
          ),
          o.a.createElement(
            "div",
            { className: "top-filter__wrap-autosuggest", onClick: n },
            o.a.createElement(
              "div",
              {
                id: "keywordAutoSuggestDropDown",
                className: "webkit__scroll-filter",
              },
              o.a.createElement(
                "div",
                { className: "auto-suggest-web-main-wrap clearfix" },
                o.a.createElement(T.a, {
                  placeholder: "Enter City, Locality, Project",
                  inputFocusClass: "topCityLocality",
                  value: "",
                  searcher: w,
                  callback: function (e) {
                    !(function (e) {
                      var t = [],
                        r = [],
                        n = [],
                        a = {
                          city: null,
                          psmid: null,
                          subUrb: null,
                          locality: null,
                          developerNames: null,
                        };
                      e.map(function (e) {
                        !e.suggestType ||
                          ("city_name" !== e.suggestType &&
                            "state_name" !== e.suggestType) ||
                          (a = B(B({}, a), {}, { city: e.rfnum })),
                          e.suggestType &&
                            "prj" === e.suggestType &&
                            (r.push(e.rfnum),
                            (a = B(
                              B({}, a),
                              {},
                              { city: e.city },
                              { psmid: r }
                            ))),
                          e.suggestType &&
                            "sub" === e.suggestType &&
                            (a = B(
                              B({}, a),
                              {},
                              { city: e.city, subUrb: e.rfnum }
                            )),
                          e.suggestType &&
                            "lt" === e.suggestType &&
                            (t.push(e.rfnum),
                            (a = B(
                              B({}, a),
                              {},
                              { city: e.city },
                              { locality: t }
                            ))),
                          e.suggestType &&
                            "builder" === e.suggestType &&
                            (n.push(e.result.replaceAll(" ", "-")),
                            (a = B(
                              B({}, a),
                              {},
                              { city: e.city },
                              { developerNames: n }
                            )));
                      }),
                        0 < _.length &&
                          ((g = [].concat(M(g), M(_))),
                          (a = B(B({}, a), {}, { city: _[0].city }))),
                        2 == g.length &&
                          0 == e.length &&
                          1 == _.length &&
                          (a = B(B({}, a), {}, { city: null })),
                        E({
                          type: "nearMeSeoJsonData",
                          payload: {
                            latLong: null,
                            error: null,
                            errorMsg: "0",
                          },
                        }),
                        E({ type: "autosuggest", data: a }),
                        E({
                          type: "EDIT_BUTTON_CLICK",
                          payload: { userActionType: "NO_ACTION" },
                        });
                    })(e);
                  },
                  delayapiCallBy: "300",
                  preSelectedData: g,
                  singleAutoSuggestType: "N",
                  checkIsPropsUpdate: !0,
                })
              ),
              o.a.createElement(
                "div",
                {
                  className: "recent-proj-loc webkit__scroll-filter",
                  id: "proj-loc-data-corridor-wrap",
                  style: { top: y },
                },
                o.a.createElement(N, {
                  pupularProjectData: l,
                  nearByLocalityData: u,
                  pupularLocalityData: f,
                  recentlySearchData: v,
                  callback: function (e, r) {
                    Object(L.a)(e, r, t, E);
                  },
                }),
                o.a.createElement(k, { corridorData: c })
              )
            )
          )
        );
      });
      function Y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function V(e) {
        var t = (function (e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                var r =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                if (null != r) {
                  var n,
                    a,
                    o,
                    c,
                    i = [],
                    l = !0,
                    s = !1;
                  try {
                    if (((o = (r = r.call(e)).next), 0 === t)) {
                      if (Object(r) !== r) return;
                      l = !1;
                    } else
                      for (
                        ;
                        !(l = (n = o.call(r)).done) &&
                        (i.push(n.value), i.length !== t);
                        l = !0
                      );
                  } catch (e) {
                    (s = !0), (a = e);
                  } finally {
                    try {
                      if (
                        !l &&
                        null != r.return &&
                        ((c = r.return()), Object(c) !== c)
                      )
                        return;
                    } finally {
                      if (s) throw a;
                    }
                  }
                  return i;
                }
              })(e, t) ||
              (function (e, t) {
                var r;
                if (e)
                  return "string" == typeof e
                    ? Y(e, t)
                    : "Map" ===
                        (r =
                          "Object" ===
                            (r = Object.prototype.toString
                              .call(e)
                              .slice(8, -1)) && e.constructor
                            ? e.constructor.name
                            : r) || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? Y(e, t)
                    : void 0;
              })(e, t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          })(Object(a.useState)(!1), 2),
          r = t[0],
          n = t[1];
        return o.a.createElement(
          "div",
          { className: "filter__common__component clearfix" },
          o.a.createElement(
            "div",
            { className: "filter__common__component__title" },
            null != (t = e.languageDictionary) &&
              t.hasOwnProperty(e.languageDictionary["Seat(s)"])
              ? e.languageDictionary["Seat(s)"]
              : "Seat(s)"
          ),
          o.a.createElement(
            "div",
            { className: "filter__common__component__row clearfix" },
            o.a.createElement(
              "div",
              { className: "filter__common__component__item-seat" },
              o.a.createElement("input", {
                className: "filter__common__component__item-seat__input",
                onBlur: function (t) {
                  (t = t.target.value),
                    isNaN(t)
                      ? n(!0)
                      : (n(!1),
                        e.callBack("noOfSeats", t, "noOfSeats", e.preSelect));
                },
                id: "comSeat",
                required: !0,
                autoComplete: "off",
              }),
              r &&
                o.a.createElement(
                  "div",
                  { className: "top-filter__help-text" },
                  null != (t = e.languageDictionary) &&
                    t.hasOwnProperty(
                      e.languageDictionary["Please enter a valid seat no"]
                    )
                    ? e.languageDictionary["Please enter a valid seat no"]
                    : "Please enter a valid seat no",
                  "."
                ),
              o.a.createElement(
                "label",
                {
                  className: "filter__common__component__item-seat__label",
                  htmlFor: "comSeat",
                },
                e.preSelect
                  ? ""
                  : null != (r = e.languageDictionary) &&
                    r.hasOwnProperty(e.languageDictionary["No. of Seat"])
                  ? e.languageDictionary["No. of Seat"]
                  : "No. of Seat"
              )
            )
          )
        );
      }
      function W(e) {
        var t = Object(m.d)(function (e) {
            return e.multilingualData;
          }),
          r = Object(m.c)(),
          n = "",
          a =
            (e.preSelect && (n = " selected"),
            "filter__component " + e.modifierClass);
        return (
          e.showFilter && (a += " activeFilter"),
          o.a.createElement(
            "div",
            { className: a },
            e.preSelect &&
              0 < e.preSelect.length &&
              o.a.createElement("span", {
                className: "filter__component__clear",
                onClick: function () {
                  (document.querySelector(
                    ".filter__common__component__item-seat__input"
                  ).value = ""),
                    e.callBack(e.propName);
                },
              }),
            o.a.createElement(
              "div",
              {
                className: "filter__component__title" + n,
                onClick: function (t) {
                  -1 !=
                  t.target.parentNode.parentNode.className.indexOf(
                    "activeFilter"
                  )
                    ? (document
                        .querySelector(".filter-overlay")
                        .classList.remove("show"),
                      document
                        .querySelectorAll(".filter__component")
                        .forEach(function (e) {
                          e.classList.remove("activeFilter");
                        }))
                    : (document
                        .querySelector(".filter-overlay")
                        .classList.add("show"),
                      document
                        .querySelectorAll(".filter__component")
                        .forEach(function (e) {
                          e.classList.remove("activeFilter");
                        }),
                      document
                        .querySelector("." + e.modifierClass)
                        .classList.add("activeFilter"),
                      Object(h.b)(
                        r,
                        "Seat",
                        e.resultPerPageCount,
                        "Top Launch",
                        {},
                        "WEB"
                      ));
                },
              },
              o.a.createElement(
                "div",
                { className: "title-ellipsis" },
                e.preSelect ? e.preSelect + e.title : e.title
              )
            ),
            o.a.createElement(
              "div",
              { className: "filter__component__drop-down" },
              o.a.createElement(V, {
                title: e.title,
                languageDictionary: t,
                filterdata: e.filter,
                callBack: function (t, r, n, a) {
                  e.callBack(t, r, n, a);
                },
                preSelect: e.preSelect,
              }),
              o.a.createElement(
                "div",
                {
                  className: "filter__component__cta-done",
                  onClick: e.doneCallBack,
                },
                " ",
                null != t && t.hasOwnProperty(t.Done) ? t.Done : "Done"
              )
            )
          )
        );
      }
      function H(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            var r;
            if (e)
              return "string" == typeof e
                ? K(e, t)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
                        ? e.constructor.name
                        : r) || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? K(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function K(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function z(e) {
        function t(t, n) {
          t.target.className.includes("active")
            ? document
                .querySelectorAll(".filter-business__item")
                .forEach(function (e) {
                  e.classList.remove("active");
                })
            : r(n.replace(/\s+/g, "-")),
            e.close(),
            e.callBack(e.filterCat, n.replace(/\s+/g, "-"));
        }
        function r(e) {
          document
            .querySelectorAll(".filter-business__item")
            .forEach(function (e) {
              e.classList.remove("active");
            }),
            document
              .querySelector(".filter-business__item.".concat(e))
              .classList.add("active");
        }
        var n = Object(m.d)(function (e) {
            return e.multilingualData;
          }),
          c = H(Object(a.useState)([]), 2),
          i = c[0],
          l = c[1],
          s = ((c = H(Object(a.useState)(""), 2))[0], c[1]),
          u = Object(m.d)(function (e) {
            return e.searchBean;
          });
        return (
          Object(a.useEffect)(
            function () {
              u.businessType &&
                0 < e.businessFrontData.length &&
                r(u.businessType);
            },
            [e.businessFrontData]
          ),
          o.a.createElement(
            "div",
            { className: "filter__common__component clearfix" },
            o.a.createElement(
              "div",
              { className: "filter__common__component__row clearfix" },
              o.a.createElement(
                "div",
                { className: "filter-business webkit__scroll-autosuggest" },
                o.a.createElement("input", {
                  className: "filter-business__input",
                  placeholder:
                    null != (c = e.languageDictionary) &&
                    c.hasOwnProperty(
                      e.languageDictionary["Enter Business Type"]
                    )
                      ? n["Enter Business Type"]
                      : "Enter Business Type",
                  onChange: function (e) {
                    return s(e.target.value);
                  },
                  onKeyUp: function (t) {
                    return (
                      (r = t.target.value.toLowerCase()),
                      (n = []),
                      e.businessSearchData.filter(function (e) {
                        e.toLowerCase().includes(r) && n.push(e);
                      }),
                      void (0 < r.length ? l(n) : l(e.businessFrontData))
                    );
                    var r, n;
                  },
                }),
                o.a.createElement(
                  "div",
                  { className: "filter__common__component__title" },
                  n ? n["Frequently Searched"] : "Frequently Searched"
                ),
                0 == i.length &&
                  o.a.createElement(
                    "div",
                    { className: "clearfix" },
                    e.businessFrontData &&
                      e.businessFrontData.map(function (e, r) {
                        return o.a.createElement(
                          "div",
                          {
                            key: r,
                            className: "filter-business__item ".concat(
                              e.replace(/\s+/g, "-")
                            ),
                            onClick: function (r) {
                              return t(r, e);
                            },
                          },
                          n && n[e] ? n[e] : e
                        );
                      })
                  ),
                0 < i.length &&
                  o.a.createElement(
                    "div",
                    { className: "clearfix" },
                    i.map(function (e, r) {
                      return o.a.createElement(
                        "div",
                        {
                          key: r,
                          className: "filter-business__item ".concat(
                            e.replace(/\s+/g, "-")
                          ),
                          onClick: function (r) {
                            return t(r, e);
                          },
                        },
                        n && n[e] ? n[e] : e
                      );
                    })
                  )
              )
            )
          )
        );
      }
      function $(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            var r;
            if (e)
              return "string" == typeof e
                ? J(e, t)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                      e.constructor
                        ? e.constructor.name
                        : r) || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? J(e, t)
                : void 0;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function J(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Z(e) {
        function t(t) {
          O.a
            .get(
              "/topBusinessTypeList?currCity="
                .concat(e.city, "&category=")
                .concat(t)
            )
            .then(function (e) {
              null != e && ("parent" == t ? c : l)(e.data);
            });
        }
        var r = Object(m.d)(function (e) {
            return e.multilingualData;
          }),
          n = (u = $(Object(a.useState)(null), 2))[0],
          c = u[1],
          i = (u = $(Object(a.useState)(null), 2))[0],
          l = u[1],
          s = Object(m.c)(),
          u = e.title,
          p =
            (e.preSelect &&
              ((u = e.preSelect.replaceAll("-", " ")),
              (u = null != r && r.hasOwnProperty(r[u]) ? r[u] : u)),
            ""),
          f =
            (e.preSelect && (p = " selected"),
            "filter__component " + e.modifierClass);
        return (
          e.showFilter && (f += " activeFilter"),
          o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              "div",
              { className: f },
              e.preSelect &&
                0 < e.preSelect.length &&
                o.a.createElement("span", {
                  className: "filter__component__clear",
                  onClick: function () {
                    e.callBack(e.propName),
                      document
                        .querySelectorAll(".filter-business__item")
                        .forEach(function (e) {
                          e.classList.remove("active");
                        });
                  },
                }),
              o.a.createElement(
                "div",
                {
                  className: "filter__component__title" + p,
                  onClick: function (r) {
                    -1 !=
                    r.target.parentNode.parentNode.className.indexOf(
                      "activeFilter"
                    )
                      ? (document
                          .querySelector(".filter-overlay")
                          .classList.remove("show"),
                        document
                          .querySelectorAll(".filter__component")
                          .forEach(function (e) {
                            e.classList.remove("activeFilter");
                          }))
                      : (document
                          .querySelector(".filter-overlay")
                          .classList.add("show"),
                        document
                          .querySelectorAll(".filter__component")
                          .forEach(function (e) {
                            e.classList.remove("activeFilter");
                          }),
                        document
                          .querySelector("." + e.modifierClass)
                          .classList.add("activeFilter"),
                        t("parent"),
                        t("child"),
                        Object(h.b)(
                          s,
                          "Business Type",
                          e.resultPerPageCount,
                          "Top Launch",
                          {},
                          "WEB"
                        ));
                  },
                },
                o.a.createElement("div", { className: "title-ellipsis" }, u)
              ),
              o.a.createElement(
                "div",
                { className: "filter__component__drop-down" },
                o.a.createElement(z, {
                  businessFrontData: n,
                  businessSearchData: i,
                  filterCat: "businessType",
                  callBack: function (t, r) {
                    e.callBack(t, r);
                  },
                  close: e.doneCallBack,
                }),
                o.a.createElement(
                  "div",
                  {
                    className: "filter__component__cta-done",
                    onClick: e.doneCallBack,
                  },
                  " ",
                  r ? r.Done : "Done"
                )
              )
            )
          )
        );
      }
      function Q(e) {
        var t;
        return o.a.createElement(
          "div",
          { className: "filter__common__component clearfix" },
          o.a.createElement(
            "div",
            { className: "filter__common__component__title" },
            null != (t = e.languageDictionary) &&
              t.hasOwnProperty(
                e.languageDictionary[
                  "Are you looking to buy plot for investment purpose"
                ]
              )
              ? e.languageDictionary[
                  "Are you looking to buy plot for investment purpose"
                ]
              : "Are you looking to buy plot for investment purpose",
            "?"
          ),
          o.a.createElement(
            "div",
            { className: "filter__common__component__row  clearfix" },
            o.a.createElement(
              "div",
              { className: "filter__common__component__item" },
              o.a.createElement("input", {
                className: "filter__common__component__item__input",
                type: "radio",
                name: "purpose",
                id: "zone_purposeY",
                value: "Y",
              }),
              o.a.createElement(
                "label",
                {
                  className: "filter__common__component__item__label",
                  for: "zone_purposeY",
                  onClick: function () {
                    e.callBack("inPurpose", "Y", "yes");
                  },
                },
                null != (t = e.languageDictionary) &&
                  t.hasOwnProperty(e.languageDictionary.Yes)
                  ? e.languageDictionary.Yes
                  : "Yes"
              )
            ),
            o.a.createElement(
              "div",
              { className: "filter__common__component__item" },
              o.a.createElement("input", {
                className: "filter__common__component__item__input",
                type: "radio",
                name: "purpose",
                id: "zone_purposeN",
                value: "N",
              }),
              o.a.createElement(
                "label",
                {
                  className: "filter__common__component__item__label",
                  for: "zone_purposeN",
                  onClick: function () {
                    e.callBack("inPurpose", "N", "no");
                  },
                },
                null != (t = e.languageDictionary) &&
                  t.hasOwnProperty(e.languageDictionary.No)
                  ? e.languageDictionary.No
                  : "No"
              )
            )
          )
        );
      }
      function X(e) {
        var t = Object(m.d)(function (e) {
            return e.multilingualData;
          }),
          r = "",
          n = !1,
          a = Object(m.c)(),
          c =
            (e.filter &&
              e.filter.filters &&
              e.filter.filters.map(function (t, a) {
                if (e.preSelect && Array.isArray(e.preSelect))
                  for (var o in e.preSelect)
                    if (-1 != t.id.indexOf(e.preSelect[o])) {
                      (o = t.name),
                        "bhk" == t.cat && ((o = o.split(" ")[0]), (n = !0)),
                        0 == r.length ? (r = o) : (r += ", " + o);
                      break;
                    }
              }),
            0 == r.length ? (r = e.filter.title) : n && (r += " BHK"),
            ""),
          i =
            (e.preSelect && (c = " selected"),
            "filter__component " + e.modifierClass);
        return (
          e.showFilter && (i += " activeFilter"),
          o.a.createElement(
            "div",
            { className: i },
            e.preSelect &&
              0 < e.preSelect.length &&
              o.a.createElement("span", {
                className: "filter__component__clear",
                onClick: function () {
                  e.callBack(e.propName);
                },
              }),
            o.a.createElement(
              "div",
              {
                className: "filter__component__title" + c,
                onClick: function (t) {
                  -1 !=
                  t.target.parentNode.parentNode.className.indexOf(
                    "activeFilter"
                  )
                    ? (document
                        .querySelector(".filter-overlay")
                        .classList.remove("show"),
                      document
                        .querySelectorAll(".filter__component")
                        .forEach(function (e) {
                          e.classList.remove("activeFilter");
                        }))
                    : (document
                        .querySelector(".filter-overlay")
                        .classList.add("show"),
                      document
                        .querySelectorAll(".filter__component")
                        .forEach(function (e) {
                          e.classList.remove("activeFilter");
                        }),
                      document
                        .querySelector("." + e.modifierClass)
                        .classList.add("activeFilter"),
                      Object(h.b)(
                        a,
                        "Purpose",
                        e.resultPerPageCount,
                        "Top Launch",
                        {},
                        "WEB"
                      ));
                },
              },
              o.a.createElement("div", { className: "title-ellipsis" }, r)
            ),
            o.a.createElement(
              "div",
              { className: "filter__component__drop-down" },
              o.a.createElement(Q, {
                languageDictionary: t,
                filterdata: e.filter,
                callBack: function (t, r, n, a) {
                  e.callBack(t, r, n, a);
                },
                preSelect: e.preSelect,
              }),
              o.a.createElement(
                "div",
                {
                  className: "filter__component__cta-done",
                  onClick: e.doneCallBack,
                },
                " ",
                null != t && t.hasOwnProperty(t.Done) ? t.Done : "Done"
              )
            )
          )
        );
      }
      function ee(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function te(e) {
        var t = (function (e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                var r =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                if (null != r) {
                  var n,
                    a,
                    o,
                    c,
                    i = [],
                    l = !0,
                    s = !1;
                  try {
                    if (((o = (r = r.call(e)).next), 0 === t)) {
                      if (Object(r) !== r) return;
                      l = !1;
                    } else
                      for (
                        ;
                        !(l = (n = o.call(r)).done) &&
                        (i.push(n.value), i.length !== t);
                        l = !0
                      );
                  } catch (e) {
                    (s = !0), (a = e);
                  } finally {
                    try {
                      if (
                        !l &&
                        null != r.return &&
                        ((c = r.return()), Object(c) !== c)
                      )
                        return;
                    } finally {
                      if (s) throw a;
                    }
                  }
                  return i;
                }
              })(e, t) ||
              (function (e, t) {
                var r;
                if (e)
                  return "string" == typeof e
                    ? ee(e, t)
                    : "Map" ===
                        (r =
                          "Object" ===
                            (r = Object.prototype.toString
                              .call(e)
                              .slice(8, -1)) && e.constructor
                            ? e.constructor.name
                            : r) || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? ee(e, t)
                    : void 0;
              })(e, t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          })(Object(a.useState)([]), 2),
          r = t[0],
          n = t[1];
        return o.a.createElement(
          "div",
          { className: "filter__common__component clearfix" },
          o.a.createElement(
            "div",
            { className: "filter__common__component__row clearfix" },
            o.a.createElement(
              "div",
              { className: "filter-business webkit__scroll-autosuggest" },
              o.a.createElement("input", {
                className: "filter-business__input",
                placeholder: "Enter Office Complex Name",
                onKeyUp: function (t) {
                  return (
                    (r = t.target.value.toLowerCase()),
                    (a = []),
                    e.searchData.filter(function (e) {
                      e.name.toLowerCase().includes(r) && a.push(e);
                    }),
                    void (0 < r.length ? n(a) : n(e.frontData))
                  );
                  var r, a;
                },
              }),
              0 == r.length &&
                o.a.createElement(
                  "div",
                  { className: "clearfix" },
                  e.frontData &&
                    e.frontData.map(function (t, r) {
                      var n,
                        a,
                        c = !1;
                      if (
                        (a =
                          e.type && "more" == e.type
                            ? ((n = t.cat), e.preSelect[n])
                            : e.preSelect)
                      )
                        if (Array.isArray(a)) {
                          for (var i in a)
                            if (-1 != t.id.indexOf(a[i])) {
                              c = !0;
                              break;
                            }
                        } else t.id == a && (c = !0);
                      return o.a.createElement(l.ButtonComponent, {
                        inputType: "checkbox",
                        dataValue: t,
                        callBack: function (t, r, n, a) {
                          e.callBack(t, r, n, a);
                        },
                        key: r,
                        preSelect: c,
                      });
                    })
                ),
              0 < r.length &&
                o.a.createElement(
                  "div",
                  { className: "clearfix" },
                  r.map(function (t, r) {
                    var n,
                      a,
                      c = !1;
                    if (
                      (a =
                        e.type && "more" == e.type
                          ? ((n = t.cat), e.preSelect[n])
                          : e.preSelect)
                    )
                      if (Array.isArray(a)) {
                        for (var i in a)
                          if (-1 != t.id.indexOf(a[i])) {
                            c = !0;
                            break;
                          }
                      } else t.id == a && (c = !0);
                    return o.a.createElement(l.ButtonComponent, {
                      inputType: "checkbox",
                      dataValue: t,
                      callBack: function (t, r, n, a) {
                        e.callBack(t, r, n, a);
                      },
                      key: r,
                      preSelect: c,
                    });
                  })
                )
            )
          )
        );
      }
      function re(e) {
        var t = Object(m.d)(function (e) {
            return e.multilingualData;
          }),
          r = Object(m.c)(),
          n = "",
          a =
            (e.preSelect && 0 < e.preSelect.length && (n = " selected"),
            "filter__component " + e.modifierClass);
        return (
          e.showFilter && (a += " activeFilter"),
          o.a.createElement(
            "div",
            { className: a },
            e.preSelect &&
              0 < e.preSelect.length &&
              o.a.createElement("span", {
                className: "filter__component__clear",
                onClick: function () {
                  e.callBack(e.propName);
                },
              }),
            o.a.createElement(
              "div",
              {
                className: "filter__component__title" + n,
                onClick: function (t) {
                  -1 !=
                  t.target.parentNode.parentNode.className.indexOf(
                    "activeFilter"
                  )
                    ? (document
                        .querySelector(".filter-overlay")
                        .classList.remove("show"),
                      document
                        .querySelectorAll(".filter__component")
                        .forEach(function (e) {
                          e.classList.remove("activeFilter");
                        }))
                    : (document
                        .querySelector(".filter-overlay")
                        .classList.add("show"),
                      document
                        .querySelectorAll(".filter__component")
                        .forEach(function (e) {
                          e.classList.remove("activeFilter");
                        }),
                      document
                        .querySelector("." + e.modifierClass)
                        .classList.add("activeFilter"),
                      Object(h.b)(
                        r,
                        "Office Complex",
                        e.resultPerPageCount,
                        "Top Launch",
                        {},
                        "WEB"
                      ));
                },
              },
              o.a.createElement(
                "div",
                { className: "title-ellipsis" },
                "Office Complex"
              )
            ),
            o.a.createElement(
              "div",
              {
                className: "filter__component__drop-down",
                style: { width: "390px" },
              },
              o.a.createElement(te, {
                frontData: e.filter.psmidOC.filters,
                searchData: e.filter.psmidOC.filters,
                filterCat: "psmidOC",
                callBack: function (t, r, n, a) {
                  e.callBack(t, r, n, a);
                },
                preSelect: e.preSelect,
              }),
              o.a.createElement(
                "div",
                { className: "filter__component__selectall" },
                o.a.createElement("input", {
                  className: "filter__component__selectall__input",
                  type: "checkbox",
                  value: "Y",
                  name: "".concat(e.propName, "_office_complex"),
                  id: "".concat(e.propName, "_office_complex"),
                  onClick: function (t) {
                    var r = [];
                    e.filter.psmidOC.filters.map(function (e, t) {
                      r.push(e.value);
                    }),
                      t.target.checked
                        ? e.callBack("psmidOC", r.join("_"))
                        : e.callBack("psmidOC", "");
                  },
                  defaultChecked: !1,
                }),
                o.a.createElement(
                  "label",
                  {
                    className: "filter__component__selectall__label",
                    htmlFor: "".concat(e.propName, "_office_complex"),
                  },
                  "Select All"
                )
              ),
              o.a.createElement(
                "div",
                {
                  className: "filter__component__cta-done",
                  onClick: e.doneCallBack,
                },
                " ",
                t ? t.Done : "Done"
              )
            )
          )
        );
      }
      function ne(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function ae(e) {
        var t = (function (e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                var r =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                if (null != r) {
                  var n,
                    a,
                    o,
                    c,
                    i = [],
                    l = !0,
                    s = !1;
                  try {
                    if (((o = (r = r.call(e)).next), 0 === t)) {
                      if (Object(r) !== r) return;
                      l = !1;
                    } else
                      for (
                        ;
                        !(l = (n = o.call(r)).done) &&
                        (i.push(n.value), i.length !== t);
                        l = !0
                      );
                  } catch (e) {
                    (s = !0), (a = e);
                  } finally {
                    try {
                      if (
                        !l &&
                        null != r.return &&
                        ((c = r.return()), Object(c) !== c)
                      )
                        return;
                    } finally {
                      if (s) throw a;
                    }
                  }
                  return i;
                }
              })(e, t) ||
              (function (e, t) {
                var r;
                if (e)
                  return "string" == typeof e
                    ? ne(e, t)
                    : "Map" ===
                        (r =
                          "Object" ===
                            (r = Object.prototype.toString
                              .call(e)
                              .slice(8, -1)) && e.constructor
                            ? e.constructor.name
                            : r) || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? ne(e, t)
                    : void 0;
              })(e, t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          })(Object(a.useState)([]), 2),
          r = t[0];
        return (
          t[1],
          o.a.createElement(
            "div",
            { className: "filter__common__component clearfix" },
            o.a.createElement(
              "div",
              { className: "filter__common__component__row clearfix" },
              o.a.createElement(
                "div",
                { className: "filter-business" },
                0 == r.length &&
                  o.a.createElement(
                    "div",
                    { className: "clearfix" },
                    e.frontData &&
                      e.frontData.map(function (t, r) {
                        var n,
                          a,
                          c = !1;
                        if (
                          (a =
                            e.type && "more" == e.type
                              ? ((n = t.cat), e.preSelect[n])
                              : e.preSelect)
                        )
                          if (Array.isArray(a)) {
                            for (var i in a)
                              if (t.id == a[i]) {
                                c = !0;
                                break;
                              }
                          } else t.id == a && (c = !0);
                        return o.a.createElement(l.ButtonComponent, {
                          inputType: "checkbox",
                          dataValue: t,
                          callBack: function (t, r, n, a) {
                            e.callBack(t, r, n, a);
                          },
                          key: r,
                          preSelect: c,
                        });
                      })
                  ),
                0 < r.length &&
                  o.a.createElement(
                    "div",
                    { className: "clearfix" },
                    r.map(function (t, r) {
                      var n,
                        a,
                        c = !1;
                      if (
                        (a =
                          e.type && "more" == e.type
                            ? ((n = t.cat), e.preSelect[n])
                            : e.preSelect)
                      )
                        if (Array.isArray(a)) {
                          for (var i in a)
                            if (t.id == a[i]) {
                              c = !0;
                              break;
                            }
                        } else t.id == a && (c = !0);
                      return o.a.createElement(l.ButtonComponent, {
                        inputType: "checkbox",
                        dataValue: t,
                        callBack: function (t, r, n, a) {
                          e.callBack(t, r, n, a);
                        },
                        key: r,
                        preSelect: c,
                      });
                    })
                  )
              )
            )
          )
        );
      }
      function oe(e) {
        function t(t) {
          var r = [];
          "brands" == e.propName
            ? e.filter.brands.filters.map(function (e, t) {
                r.push(e.value);
              })
            : "transportNearby" == e.propName &&
              e.filter.transportNearby.filters.map(function (e, t) {
                r.push(e.value);
              }),
            t.target.checked
              ? e.callBack(e.propName, r.join("_"))
              : e.callBack(e.propName, "");
        }
        var r = Object(m.d)(function (e) {
            return e.multilingualData;
          }),
          n = Object(m.c)(),
          a = "",
          c =
            (e.preSelect && 0 < e.preSelect.length && (a = " selected"),
            "filter__component " + e.modifierClass);
        return (
          e.showFilter && (c += " activeFilter"),
          o.a.createElement(
            "div",
            { className: c },
            e.preSelect &&
              0 < e.preSelect.length &&
              o.a.createElement("span", {
                className: "filter__component__clear",
                onClick: function () {
                  e.callBack(e.propName);
                },
              }),
            o.a.createElement(
              "div",
              {
                className: "filter__component__title" + a,
                onClick: function (t) {
                  -1 !=
                  t.target.parentNode.parentNode.className.indexOf(
                    "activeFilter"
                  )
                    ? (document
                        .querySelector(".filter-overlay")
                        .classList.remove("show"),
                      document
                        .querySelectorAll(".filter__component")
                        .forEach(function (e) {
                          e.classList.remove("activeFilter");
                        }))
                    : (document
                        .querySelector(".filter-overlay")
                        .classList.add("show"),
                      document
                        .querySelectorAll(".filter__component")
                        .forEach(function (e) {
                          e.classList.remove("activeFilter");
                        }),
                      document
                        .querySelector("." + e.modifierClass)
                        .classList.add("activeFilter"),
                      Object(h.b)(
                        n,
                        e.title,
                        e.resultPerPageCount,
                        "Top Launch",
                        {},
                        "WEB"
                      ));
                },
              },
              o.a.createElement("div", { className: "title-ellipsis" }, e.title)
            ),
            o.a.createElement(
              "div",
              {
                className: "filter__component__drop-down",
                style: { width: "390px" },
              },
              "brands" == e.propName &&
                o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(ae, {
                    frontData: e.filter.brands.filters,
                    searchData: e.filter.brands.filters,
                    filterCat: "brands",
                    callBack: function (t, r, n, a) {
                      e.callBack(t, r, n, a);
                    },
                    preSelect: e.preSelect,
                  }),
                  o.a.createElement(
                    "div",
                    { className: "filter__component__selectall" },
                    o.a.createElement("input", {
                      className: "filter__component__selectall__input",
                      type: "checkbox",
                      value: "Y",
                      name: "".concat(e.propName, "_brands"),
                      id: "".concat(e.propName, "_brands"),
                      onClick: t,
                      defaultChecked: !1,
                    }),
                    o.a.createElement(
                      "label",
                      {
                        className: "filter__component__selectall__label",
                        htmlFor: "".concat(e.propName, "_brands"),
                      },
                      null != r && r.hasOwnProperty(r["Select All"])
                        ? r["Select All"]
                        : "Select All"
                    )
                  )
                ),
              "transportNearby" == e.propName &&
                o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(ae, {
                    frontData: e.filter.transportNearby.filters,
                    searchData: e.filter.transportNearby.filters,
                    filterCat: "transportNearby",
                    callBack: function (t, r, n, a) {
                      e.callBack(t, r, n, a);
                    },
                    preSelect: e.preSelect,
                  }),
                  o.a.createElement(
                    "div",
                    { className: "filter__component__selectall" },
                    o.a.createElement("input", {
                      className: "filter__component__selectall__input",
                      type: "checkbox",
                      value: "Y",
                      name: "".concat(e.propName, "_transportNearby"),
                      id: "".concat(e.propName, "_transportNearby"),
                      onClick: t,
                      defaultChecked: !1,
                    }),
                    o.a.createElement(
                      "label",
                      {
                        className: "filter__component__selectall__label",
                        htmlFor: "".concat(e.propName, "_transportNearby"),
                      },
                      null != r && r.hasOwnProperty(r["Select All"])
                        ? r["Select All"]
                        : "Select All"
                    )
                  )
                ),
              o.a.createElement(
                "div",
                {
                  className: "filter__component__cta-done",
                  onClick: e.doneCallBack,
                },
                " ",
                null != r && r.hasOwnProperty(r.Done) ? r.Done : "Done"
              )
            )
          )
        );
      }
      function ce(e) {
        var t,
          r = "";
        return (
          e.preSelect &&
            (Array.isArray(e.preSelect)
              ? 0 < e.preSelect.length &&
                (("psmid" == e.propName &&
                  ((t = !0),
                  e.filter.filters.filter(function (r) {
                    1 ==
                      e.preSelect.filter(function (e) {
                        return e == r.id;
                      }).length && (t = !1);
                  }),
                  0 != t)) ||
                  (r = " selected"))
              : (r = " selected")),
          o.a.createElement(
            "div",
            { className: "filter__component" },
            e.preSelect &&
              0 < e.preSelect.length &&
              o.a.createElement("span", {
                className: "filter__component__clear",
                onClick: function () {
                  e.callBack(e.propName);
                },
              }),
            o.a.createElement(
              "div",
              { className: "filter__component__nri-title" + r },
              e.filter.filters &&
                e.filter.filters.map(function (t, r) {
                  return o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement("input", {
                      className: "filter__component__nri-title__input",
                      type: "checkbox",
                      value: t.value,
                      name: t.cat,
                      id: t.id,
                      checked: e.preSelect,
                    }),
                    o.a.createElement(
                      "label",
                      {
                        className: "filter__component__nri-title__label",
                        htmlFor: t.id,
                        onClick: function () {
                          e.callBack(t.cat, t.value, t.name, e.preSelect);
                        },
                      },
                      t.name
                    )
                  );
                })
            )
          )
        );
      }
      function ie(e) {
        function t() {
          document.querySelector(".filter-overlay") &&
            document.querySelector(".filter-overlay").classList.remove("show");
        }
        var r,
          n = Object(m.d)(function (e) {
            return e.multilingualData;
          }),
          a =
            "Your search results will switch to display options for " +
            e.categorySwitchData.title +
            " properties only",
          c = "Do you want to go ahead";
        return o.a.createElement(
          o.a.Fragment,
          null,
          e.categorySwitchData &&
            e.categorySwitchData.title &&
            o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(
                "div",
                { className: "prop-cat-switch", style: { zIndex: 1e4 } },
                o.a.createElement("div", {
                  className: "prop-cat-switch__close",
                  onClick: function () {
                    e.callBack("N"), t();
                  },
                }),
                o.a.createElement(
                  "div",
                  { className: "prop-cat-switch__title" },
                  null != (r = e.languageDictionary) &&
                    r.hasOwnProperty(e.languageDictionary[a])
                    ? n[a]
                    : a,
                  "."
                ),
                o.a.createElement(
                  "div",
                  { className: "prop-cat-switch__heading" },
                  null != (r = e.languageDictionary) &&
                    r.hasOwnProperty(e.languageDictionary[c])
                    ? n[c]
                    : c,
                  "?"
                ),
                o.a.createElement(
                  "div",
                  { className: "clearfix" },
                  o.a.createElement(
                    "div",
                    {
                      className: "mb-srp__action--btn medium btn-white",
                      onClick: function () {
                        e.callBack("N"), t();
                      },
                    },
                    null != (a = e.languageDictionary) &&
                      a.hasOwnProperty(e.languageDictionary.No)
                      ? n.No
                      : "No"
                  ),
                  o.a.createElement(
                    "div",
                    {
                      className: "mb-srp__action--btn medium btn-red",
                      onClick: function () {
                        e.callBack("Y");
                      },
                    },
                    null != (r = e.languageDictionary) &&
                      r.hasOwnProperty(e.languageDictionary.Yes)
                      ? n.Yes
                      : "Yes"
                  )
                )
              ),
              o.a.createElement("div", { className: "cat-switch-overlay show" })
            )
        );
      }
      var le = r(6),
        se = r(55);
      function ue(e) {
        return (ue =
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
      function me(e, t) {
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? me(Object(r), !0).forEach(function (t) {
                var n, a;
                (n = e),
                  (a = r[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== ue(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 === r) return String(e);
                        if ("object" !== ue((r = r.call(e, "string"))))
                          return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === ue(e) ? e : String(e)
                    );
                  })(t)) in n
                    ? Object.defineProperty(n, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[t] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : me(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function fe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function de(e) {
        function t() {
          var e = ye.propertyType;
          600 < window.scrollY &&
            ("4320" == ye.cityId || "25201" == ye.cityId) &&
            "S" == ye.category &&
            (null == ye.locality || 0 == ye.locality.length) &&
            (e.includes("10002") ||
              e.includes("10003") ||
              e.includes("10021") ||
              e.includes("10022")) &&
            0 == ye.popupOpenCount &&
            (r(ve(!0)), i(1), (ye.popupOpenCount = 1));
        }
        var r = Object(m.c)(),
          n = (function (e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                var r =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                if (null != r) {
                  var n,
                    a,
                    o,
                    c,
                    i = [],
                    l = !0,
                    s = !1;
                  try {
                    if (((o = (r = r.call(e)).next), 0 === t)) {
                      if (Object(r) !== r) return;
                      l = !1;
                    } else
                      for (
                        ;
                        !(l = (n = o.call(r)).done) &&
                        (i.push(n.value), i.length !== t);
                        l = !0
                      );
                  } catch (e) {
                    (s = !0), (a = e);
                  } finally {
                    try {
                      if (
                        !l &&
                        null != r.return &&
                        ((c = r.return()), Object(c) !== c)
                      )
                        return;
                    } finally {
                      if (s) throw a;
                    }
                  }
                  return i;
                }
              })(e, t) ||
              (function (e, t) {
                var r;
                if (e)
                  return "string" == typeof e
                    ? fe(e, t)
                    : "Map" ===
                        (r =
                          "Object" ===
                            (r = Object.prototype.toString
                              .call(e)
                              .slice(8, -1)) && e.constructor
                            ? e.constructor.name
                            : r) || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? fe(e, t)
                    : void 0;
              })(e, t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          })(Object(a.useState)(0), 2),
          c = n[0],
          i = n[1],
          l = Object(m.d)(function (e) {
            return e.searchBean;
          }),
          s = Object(m.d)(function (e) {
            return e.userInfoData;
          });
        return (
          Object(a.useEffect)(function () {
            window.addEventListener("scroll", t);
          }, []),
          Object(a.useEffect)(
            function () {
              (ye.cityId = l.city),
                (ye.propertyType = l.propertyType.toString()),
                (ye.category = l.category),
                (ye.locality = l.locality),
                (ye.popupOpenCount = c);
            },
            [l.city, l.propertyType, l.category, l.locality]
          ),
          o.a.createElement(
            "div",
            {
              className: "filter__component__drop-down locality-selector-nudge",
            },
            o.a.createElement("div", {
              className: "locality-selector-nudge__close",
              onClick: function () {
                r(ve(!1));
              },
            }),
            o.a.createElement(
              "div",
              { className: "filter__common__component__title" },
              "Add your preferred Locality for relevant matches"
            ),
            o.a.createElement(
              "div",
              { className: "locality-selector-nudge__try" },
              o.a.createElement(
                "div",
                { className: "locality-selector-nudge__or" },
                "Or"
              ),
              o.a.createElement(
                "div",
                {
                  className: "locality-selector-nudge__try__title",
                  onClick: function () {
                    r(
                      Object(h.e)(
                        pe(
                          pe({}, be),
                          {},
                          {
                            eventCategory: "locality explorer - nudge",
                            eventAction: "locality explorer clicked",
                            eventLabel: "locality explorer clicked",
                            cd162: s ? s.userRefNo + "" : "0",
                          }
                        )
                      )
                    ),
                      window.open(
                        "/mbproject/localitySelector?ct=4320",
                        "_parent"
                      );
                  },
                },
                "Not sure? ",
                o.a.createElement("span", null, "Try Locality Explorer")
              )
            )
          )
        );
      }
      var ye = {},
        be = {
          event: "event_tracking",
          nonInteraction: !1,
          pageType: "",
          eventName: "",
          eventCategory: "",
          eventAction: "",
          eventLabel: "",
          city: "",
          cd162: "",
        },
        ve = function (e) {
          return function (t, r) {
            var n,
              a = document.querySelector("#keywordAutoSuggestDropDown")
                .classList.value;
            e
              ? (document
                  .querySelector(".autosuggest-overlay")
                  .classList.add("show"),
                document
                  .querySelector(".top-filter__item-all-filter")
                  .classList.add("hide-filters"),
                document
                  .querySelector(".locality-selector-nudge")
                  .classList.add("show"),
                t(function (e, t) {
                  e(
                    Object(h.e)(
                      pe(
                        pe({}, be),
                        {},
                        {
                          eventCategory: "revamp srp - filters",
                          eventAction: "nudge launch",
                          eventLabel: "locality selector",
                        }
                      )
                    )
                  );
                }),
                t(function (e, t) {
                  e(
                    Object(h.e)(
                      pe(
                        pe({}, be),
                        {},
                        {
                          eventCategory: "locality explorer - nudge",
                          eventAction: "nudge launch impression",
                          eventLabel: "nudge launch impression",
                        }
                      )
                    )
                  );
                }))
              : ((n = document
                  .querySelector(".locality-selector-nudge")
                  .classList.contains("show")),
                "webkit__scroll-filter" === a &&
                  (document
                    .querySelector(".autosuggest-overlay")
                    .classList.remove("show"),
                  document
                    .querySelector(".top-filter__item-all-filter")
                    .classList.remove("hide-filters")),
                document
                  .querySelector(".locality-selector-nudge")
                  .classList.remove("show"),
                n &&
                  t(function (e, t) {
                    e(
                      Object(h.e)(
                        pe(
                          pe({}, be),
                          {},
                          {
                            eventCategory: "revamp srp - filters",
                            eventAction: "nudge close",
                            eventLabel: "locality selector",
                          }
                        )
                      )
                    );
                  })),
              document
                .querySelector(".filter-overlay")
                .classList.remove("show"),
              document
                .querySelectorAll(".filter__component")
                .forEach(function (e) {
                  e.classList.remove("activeFilter");
                });
          };
        };
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
      function ge(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Se(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          we(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _e(e, t) {
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function Ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _e(Object(r), !0).forEach(function (t) {
                var n, a;
                (n = e),
                  (a = r[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== he(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 === r) return String(e);
                        if ("object" !== he((r = r.call(e, "string"))))
                          return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === he(e) ? e : String(e)
                    );
                  })(t)) in n
                    ? Object.defineProperty(n, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[t] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : _e(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function Oe(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                c,
                i = [],
                l = !0,
                s = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((c = r.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          we(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function we(e, t) {
        var r;
        if (e)
          return "string" == typeof e
            ? Se(e, t)
            : "Map" ===
                (r =
                  "Object" ===
                    (r = Object.prototype.toString.call(e).slice(8, -1)) &&
                  e.constructor
                    ? e.constructor.name
                    : r) || "Set" === r
            ? Array.from(e)
            : "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            ? Se(e, t)
            : void 0;
      }
      function Se(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var je = {};
      t.a = function (e) {
        function t() {
          document.querySelector(".filter-overlay").classList.remove("show"),
            document
              .querySelector(".autosuggest-overlay")
              .classList.remove("show"),
            document
              .querySelectorAll(".filter__component")
              .forEach(function (e) {
                e.classList.remove("activeFilter");
              }),
            document
              .querySelector("#keywordAutoSuggestDropDown")
              .classList.remove("top-filter-autosuggest__drop-down"),
            document
              .querySelector("#keywordAutoSuggestDropDown")
              .parentNode.classList.remove("open-dropdown"),
            document
              .querySelector(".top-filter__item-all-filter")
              .classList.remove("hide-filters"),
            (document.querySelector("#recent-proj-loc-data").style.display =
              "none"),
            (document.querySelector("#zone-corridor-data").style.display =
              "none"),
            s(!0),
            p(!1),
            d(ve(!1));
        }
        function r(e, r, n, a, o) {
          "en" != h.language &&
            je[n] &&
            "search" != e &&
            "Flats" == (n = je[n]) &&
            (n = "Flat");
          var c = !0;
          if (
            "propertyType" == e ||
            !h.propertyType ||
            0 != h.propertyType.length ||
            h.shared
          ) {
            if ("search" == e) (c = !1), H((l = { url: r, title: n }));
            else if ("propertyType" == e && !a && "plot" != h.search) {
              var i,
                l,
                s = v.i(n),
                u = "";
              for (i in h.propertyType)
                u += (0 == u.length ? "" : ",") + h.propertyType[i];
              -1 != u.indexOf("10004") || -1 != u.indexOf("10005")
                ? "agricultural" == s
                  ? (c = !0)
                  : ((c = !1), (l = { url: N.otherDataMap[n], title: s }), H(l))
                : s != h.search &&
                  ((c = !1), (l = { url: N.otherDataMap[n], title: s }), H(l));
            }
            c &&
              (v.a(e, r, n, a, o, h, _, k, N, z, I, d, !1, H), _.isSeoSearch) &&
              t(),
              "Plot/Land" == n &&
                (document
                  .querySelector(".filter-overlay")
                  .classList.remove("show"),
                document
                  .querySelectorAll(".filter__component")
                  .forEach(function (e) {
                    e.classList.remove("activeFilter");
                  }));
          }
        }
        function n() {
          document.querySelector(".filter-overlay").classList.remove("show"),
            document
              .querySelectorAll(".filter__component")
              .forEach(function (e) {
                e.classList.remove("activeFilter");
              });
        }
        var c,
          i,
          l = (w = Oe(Object(a.useState)(!1), 2))[0],
          s = w[1],
          u = (w = Oe(Object(a.useState)(!0), 2))[0],
          p = w[1],
          f = ((w = Oe(Object(a.useState)(!1), 2))[0], w[1]),
          d = Object(m.c)(),
          h = Object(m.d)(function (e) {
            return e.searchBean;
          }),
          g = Object(m.d)(function (e) {
            return e.contactData;
          }),
          _ = Object(m.d)(function (e) {
            return e.searchAdditionalDataBean;
          }),
          w = Object(m.d)(function (e) {
            return e.userInfoData;
          }),
          S = Object(m.d)(function (e) {
            return e.filterData;
          }),
          N = (i = Oe(Object(a.useState)(S), 2))[0],
          k = i[1],
          T = ((i = Oe(Object(a.useState)(!1), 2))[0], i[1]),
          I = (i = Oe(Object(a.useState)(h), 2))[0],
          L = i[1],
          A = (i = Oe(Object(a.useState)(!1), 2))[0],
          x = (i = (i[1], Oe(Object(a.useState)(!1), 2)))[0],
          B = (i = (i[1], Oe(Object(a.useState)({}), 2)))[0],
          F = i[1],
          M = (i = Oe(Object(a.useState)(0), 2))[0],
          D = i[1],
          R = (i = Oe(Object(a.useState)({}), 2))[0],
          q = i[1],
          U = (i = Oe(Object(a.useState)({}), 2))[0],
          Y = i[1],
          V = (i = Oe(Object(a.useState)({}), 2))[0],
          H = i[1],
          K = Object(m.d)(function (e) {
            return e.multilingualData;
          }),
          z = {
            filterKeyValueMap: R,
            moreFilterResetData: U,
            topFilterResetData: B,
            filterCount: M,
          },
          $ =
            (o.a.useRef(!0),
            Object(a.useEffect)(
              function () {
                v.n(N, h, Y, F, q, D);
              },
              [JSON.stringify(h), N]
            ),
            Object(a.useEffect)(
              function () {
                f(Object(P.s)(g));
              },
              [w.userEmail]
            ),
            Object(a.useEffect)(function () {
              L(h);
            }, []),
            !1),
          J =
            (Object(a.useEffect)(function () {
              null != _.isSeoSearch && T(_.isSeoSearch);
            }, []),
            Object(a.useEffect)(
              function () {
                sessionStorage.getItem("mbgc"),
                  le.a.readCookie("mbcc"),
                  Notification.permission;
              },
              [N.topFilterData]
            ),
            Object(a.useEffect)(
              function () {
                (h.city ||
                  (h.locality && 0 < h.locality.length) ||
                  (h.psmid && 0 < h.psmid.length)) &&
                  h.category &&
                  0 < h.category.length &&
                  ((h.propertyType && 0 < h.propertyType.length) ||
                    (h.shared && "Y" == h.shared)) &&
                  O.a
                    .post(
                      "/fetch-filter-data",
                      Ee(Ee({}, h), { nriUser: _.nriUser })
                    )
                    .then(function (e) {
                      var t;
                      e.data &&
                        ("en" != h.language && v.f(e.data, je),
                        null == S.fromSearch
                          ? d({
                              type: "reloadFilter",
                              data: Ee(Ee({}, e.data), {}, { fromSearch: !0 }),
                            })
                          : 1 == S.fromSearch &&
                            d({
                              type: "reloadFilter",
                              data: Ee(Ee({}, e.data), {}, { fromSearch: !1 }),
                            }),
                        k(e.data),
                        (t = !1),
                        document
                          .querySelectorAll(".filter__component")
                          .forEach(function (e) {
                            e.className.includes("activeFilter") && (t = !0);
                          }),
                        t ||
                          document
                            .querySelector(".filter-overlay")
                            .classList.remove("show"));
                    });
              },
              [h.city, h.propertyType, h.category, h.locality, h.psmid]
            ),
            Object(a.useEffect)(
              function () {
                null != h.brands &&
                  "" != h.brands &&
                  r("brands", null, null, null, "TOP_FILTER");
              },
              [h.city]
            ),
            !1),
          Q = !1,
          ee = !1,
          te = h.search;
        return (
          "commercial" != te &&
            null != h.propertyType &&
            (h.propertyType.includes("10004") ||
              h.propertyType.includes("10005")) &&
            (te = "agricultural"),
          o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              "div",
              { className: "top-filter" },
              o.a.createElement(
                "div",
                { className: "top-filter--wrap" },
                o.a.createElement(
                  "div",
                  { className: "top-filter__item" },
                  o.a.createElement(
                    "div",
                    { className: "top-filter__cat-autosuggest" },
                    e.source && "prellaSRPWeb" == e.source
                      ? o.a.createElement("span", {
                          className: "top-filter--ico-loc",
                        })
                      : o.a.createElement(C, {
                          modifierClass: "topCat",
                          preSelect: h,
                          filter: N.otherDataMap,
                          callBack: function (e, t, n) {
                            r(e, t, n);
                          },
                        }),
                    o.a.createElement(G, {
                      setShowLocationHelpText: s,
                      hideAllDropDown: t,
                    }),
                    o.a.createElement(se.a, null, o.a.createElement(de, null)),
                    !h.city &&
                      l &&
                      o.a.createElement(
                        "div",
                        {
                          className: "top-filter__help-text",
                          style: { left: 90 },
                        },
                        K && K["Please enter a Location"]
                          ? K["Please enter a Location"]
                          : "Please enter a Location"
                      )
                  )
                ),
                o.a.createElement(
                  "div",
                  { className: "top-filter__item-all-filter" },
                  N.topFilterData &&
                    N.topFilterData.map(function (t, a) {
                      return (
                        ($ = !1),
                        !x ||
                        "budget" !== t.key ||
                        (null != h.budgetMin && null != h.budgetMax)
                          ? !A ||
                            (null == h.budgetMin && null == h.budgetMax) ||
                            "bhk" !== t.key ||
                            h.srpAction ||
                            ($ = !0)
                          : h.srpAction || ($ = !0),
                        "propertyType" == t.key
                          ? ((c = h.shared
                              ? [].concat(ge(h[t.key]), ge(h.shared))
                              : h[t.key]),
                            h.shared &&
                              "Y" == h.shared &&
                              (v.b(t, h) ? (ee = !0) : (Q = !0)),
                            o.a.createElement(
                              "div",
                              { className: "top-filter__item", key: a },
                              o.a.createElement(b, {
                                catSearchType: te,
                                modifierClass: t.className,
                                showFilter: $,
                                title: t.title,
                                preSelect: c,
                                filter: t.value,
                                callBack: function (e, t, n, a) {
                                  r(e, t, n, a, "TOP_FILTER");
                                },
                                doneCallBack: n,
                                resultPerPageCount: _.resultPerPageCount,
                              }),
                              0 == c.length &&
                                o.a.createElement(
                                  "div",
                                  { className: "top-filter__help-text" },
                                  null != K &&
                                    K.hasOwnProperty(
                                      K[
                                        "Select at least one property typeSearch Now"
                                      ]
                                    )
                                    ? K["Select at least one property type"]
                                    : "Select at least one property type"
                                )
                            ))
                          : ("budget" == t.key && "Y" === t.cowBudget) ||
                            "budget" == t.key
                          ? o.a.createElement(
                              "div",
                              { className: "top-filter__item", key: a },
                              o.a.createElement(E, {
                                modifierClass: t.className,
                                showFilter: $,
                                hideAllCall: u,
                                title: t.title,
                                filter: t.value[t.key],
                                selectedMin: h.budgetMin,
                                selectedMax: h.budgetMax,
                                callBack: function (e, t) {
                                  r(e, t, null, null, "TOP_FILTER");
                                },
                                doneCallBack: n,
                                resultPerPageCount: _.resultPerPageCount,
                              })
                            )
                          : "noOfSeats" == t.key
                          ? o.a.createElement(
                              "div",
                              { className: "top-filter__item", key: a },
                              o.a.createElement(W, {
                                modifierClass: t.className,
                                propName: t.key,
                                preSelect: h[t.key],
                                showFilter: $,
                                title: t.title,
                                filter: t.value[t.key],
                                callBack: function (e, t) {
                                  r(e, t, null, null, "TOP_FILTER");
                                },
                                doneCallBack: n,
                                resultPerPageCount: _.resultPerPageCount,
                              })
                            )
                          : "businessType" == t.key
                          ? o.a.createElement(
                              "div",
                              { className: "top-filter__item" },
                              o.a.createElement(Z, {
                                modifierClass: t.className,
                                title: t.title,
                                preSelect: h[t.key],
                                city: h.city,
                                propName: t.key,
                                callBack: function (e, t) {
                                  r(e, t, null, null, "TOP_FILTER");
                                },
                                doneCallBack: n,
                                resultPerPageCount: _.resultPerPageCount,
                              })
                            )
                          : "psmidOC" == t.key
                          ? o.a.createElement(
                              "div",
                              { className: "top-filter__item" },
                              o.a.createElement(re, {
                                modifierClass: t.className,
                                preSelect: h[t.key],
                                city: h.city,
                                propName: t.key,
                                filter: t.value,
                                callBack: function (e, t, n, a) {
                                  r(e, t, n, a, "TOP_FILTER");
                                },
                                doneCallBack: n,
                                resultPerPageCount: _.resultPerPageCount,
                              })
                            )
                          : "brands" == t.key
                          ? o.a.createElement(
                              "div",
                              { className: "top-filter__item" },
                              o.a.createElement(oe, {
                                title: t.title,
                                modifierClass: t.className,
                                preSelect: h[t.key],
                                city: h.city,
                                propName: t.key,
                                filter: t.value,
                                callBack: function (e, t, n, a) {
                                  r(e, t, n, a, "TOP_FILTER");
                                },
                                doneCallBack: n,
                                resultPerPageCount: _.resultPerPageCount,
                              })
                            )
                          : "transportNearby" == t.key
                          ? o.a.createElement(
                              "div",
                              { className: "top-filter__item" },
                              o.a.createElement(oe, {
                                title: "Transport Nearby",
                                modifierClass: "transportNearby",
                                preSelect: h[t.key],
                                city: h.city,
                                propName: t.key,
                                filter: t.value,
                                callBack: function (e, t, n, a) {
                                  r(e, t, n, a, "TOP_FILTER");
                                },
                                doneCallBack: n,
                                resultPerPageCount: _.resultPerPageCount,
                              })
                            )
                          : "inPurpose" == t.key && 1 == J
                          ? o.a.createElement(
                              "div",
                              { className: "top-filter__item" },
                              o.a.createElement(X, {
                                modifierClass: t.className,
                                showFilter: $,
                                preSelect: h.inPurpose,
                                propName: t.key,
                                filter: t.value[t.key],
                                callBack: function (e, t, n, a) {
                                  r(e, t, n, a, "TOP_FILTER");
                                },
                                doneCallBack: n,
                                resultPerPageCount: _.resultPerPageCount,
                              })
                            )
                          : "nriPref" == t.key
                          ? o.a.createElement(
                              "div",
                              { className: "top-filter__item" },
                              o.a.createElement(ce, {
                                modifierClass: t.className,
                                showFilter: $,
                                preSelect: h[t.key],
                                propName: t.key,
                                filter: t.value[t.key],
                                callBack: function (e, t, n, a) {
                                  r(e, t, n, a);
                                },
                                doneCallBack: n,
                              })
                            )
                          : "inputListings" == t.key &&
                            "prellaSRPWeb" != e.source
                          ? o.a.createElement(
                              "div",
                              { className: "top-filter__item", key: a },
                              o.a.createElement(y, {
                                modifierClass: t.className,
                                showFilter: $,
                                hideAllCall: u,
                                preSelect: v.j(t.key, h),
                                propName: t.key,
                                filter: t.value[t.key],
                                callBack: function (e, t, n, a) {
                                  r(e, t, n, a, "TOP_FILTER");
                                },
                                doneCallBack: n,
                                resultPerPageCount: _.resultPerPageCount,
                              })
                            )
                          : ("inPurpose" != t.key &&
                              "gender" != t.key &&
                              "occupancy" != t.key &&
                              "bhk" != t.key) ||
                            ("gender" != t.key &&
                              "occupancy" != t.key &&
                              !Q &&
                              "bhk" == t.key) ||
                            (("gender" == t.key || "occupancy" == t.key) && Q)
                          ? o.a.createElement(
                              o.a.Fragment,
                              null,
                              "prellaSRPWeb" != e.source ||
                                ("InputListings" != t.key &&
                                  "inputListings" != t.key)
                                ? o.a.createElement(
                                    "div",
                                    { className: "top-filter__item", key: a },
                                    (J = "zone" == t.key),
                                    o.a.createElement(y, {
                                      modifierClass: t.className,
                                      showFilter: $,
                                      hideAllCall: u,
                                      preSelect: v.j(t.key, h),
                                      propName: t.key,
                                      filter: t.value[t.key],
                                      callBack: function (e, t, n, a) {
                                        r(e, t, n, a, "TOP_FILTER");
                                      },
                                      doneCallBack: n,
                                      resultPerPageCount: _.resultPerPageCount,
                                    })
                                  )
                                : o.a.createElement(o.a.Fragment, null)
                            )
                          : void 0
                      );
                    }),
                  e.source && "prellaSRPWeb" == e.source
                    ? o.a.createElement(o.a.Fragment, null)
                    : o.a.createElement(
                        "div",
                        { className: "top-filter__item" },
                        o.a.createElement(j, {
                          modifierClass: "topMoreFilters",
                          title: N.moreFilter,
                          filter: N.moreFilterData,
                          preSelect: h,
                          callBack: function (e, t, n, a) {
                            r(e, t, n, a, "MORE_FILTER");
                          },
                          doneCallBack: n,
                          resetCallBack: function (e) {
                            v.h(d, e.join(","), _, "Removed", {}, "WEB"),
                              d({
                                type: "resetMore",
                                data: e,
                                searchBeanPre: I,
                              });
                          },
                          showOccupencyAndGenderInMore: ee,
                          resultPerPageCount: _.resultPerPageCount,
                        })
                      )
                )
              )
            ),
            o.a.createElement("div", {
              className: $ ? "filter-overlay show" : "filter-overlay",
              onClick: t,
            }),
            o.a.createElement("div", {
              className: "autosuggest-overlay",
              onClick: t,
            }),
            o.a.createElement(ie, {
              callBack: function (e) {
                "Y" == e &&
                  (document.getElementById("pageLoader").style.display =
                    "block"),
                  document
                    .querySelectorAll(".filter__component")
                    .forEach(function (e) {
                      e.classList.remove("activeFilter");
                    }),
                  "Y" == e && window.open(V.url, "_self"),
                  H({});
              },
              categorySwitchData: V,
            })
          )
        );
      };
    },
    9: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return s;
      }),
        r.d(t, "d", function () {
          return u;
        }),
        r.d(t, "c", function () {
          return m;
        }),
        r.d(t, "k", function () {
          return p;
        }),
        r.d(t, "l", function () {
          return f;
        }),
        r.d(t, "f", function () {
          return d;
        }),
        r.d(t, "j", function () {
          return y;
        }),
        r.d(t, "e", function () {
          return b;
        }),
        r.d(t, "h", function () {
          return v;
        }),
        r.d(t, "p", function () {
          return h;
        }),
        r.d(t, "m", function () {
          return g;
        }),
        r.d(t, "n", function () {
          return _;
        }),
        r.d(t, "i", function () {
          return E;
        }),
        r.d(t, "o", function () {
          return O;
        }),
        r.d(t, "g", function () {
          return w;
        }),
        r.d(t, "b", function () {
          return S;
        });
      (t = r(58)), (t = r.n(t));
      var n = r(420),
        a = r(7),
        o = r(3);
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
        var r,
          n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            n.push.apply(n, r)),
          n
        );
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                var n, a;
                (n = e),
                  (a = r[t]),
                  (t = (function (e) {
                    return (
                      (e = (function (e, t) {
                        if ("object" !== c(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 === r) return String(e);
                        if ("object" !== c((r = r.call(e, "string")))) return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      })(e)),
                      "symbol" === c(e) ? e : String(e)
                    );
                  })(t)) in n
                    ? Object.defineProperty(n, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[t] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      (r = window.origin + "/mbcontact/"), (r = "".concat(r).concat(""));
      var s = t.a.create({ baseURL: r }),
        u = function (e, t) {
          (e = l(
            l(
              {},
              {
                propertyId: "28536285",
                propertyToShow: "A",
                cplAchievement: "110",
                noOfProperties: "2",
                removeProps: "",
              }
            ),
            e
          )),
            s
              .post("/thankYouPage/similarProperty", e)
              .then(function (e) {
                void 0 !== e &&
                null != e &&
                void 0 !== e.status &&
                null != e.status &&
                200 === e.status
                  ? t(e.data)
                  : console.log("Error in Save Contact Response: ", e);
              })
              .catch(function (e) {
                console.log("Error :", e);
              });
        },
        m = function (e, t) {
          (e = l(l({}, { propertyId: "28536285" }), e)),
            s
              .get("/api/requireBuilderDetailData.html", { params: e })
              .then(function (e) {
                f(e) ||
                void 0 === e.status ||
                null == e.status ||
                200 !== e.status
                  ? console.log(
                      "Error in Fetch Builder Property Data Response: ",
                      e
                    )
                  : ((e = { builderProperty: e.data }), t(e));
              })
              .catch(function (e) {
                console.log("Error :", e);
              });
        },
        p = function (e) {
          return void 0 === e || null == e || "" === e;
        },
        f = function (e) {
          return (
            void 0 === e ||
            null == e ||
            0 === Object.keys(e).length ||
            Object.getPrototypeOf(e) !== Object.prototype
          );
        },
        d = function (e) {
          var t = "";
          return (
            (t += e.priceD),
            p(e.isCardDesc) || p(e.scdpropdesc)
              ? p(e.bedroomD) || (t += " | " + e.bedroomD + " BHK ")
              : (t += " | " + e.scdpropdesc),
            e.isCardDesc && !p(e.scdcattype) && (t += " | " + e.scdcattype),
            p(e.caSqFt) || (t += " | " + e.caSqFt),
            p(e.caSqFt) || (t += " sqft"),
            t
          );
        },
        y = function (e) {
          return (
            "" +
            ((e = (e = (e = (e = e.propTypeD).includes("Multistorey Apartment")
              ? e.replace("Multistorey Apartment", "Apartment")
              : e).includes("Builder Floor Apartment")
              ? e.replace("Builder Floor Apartment", "Builder Floor")
              : e).includes("Residential")
              ? e.replace("Residential", "")
              : e).includes("Plot")
              ? e.replace("Plot", "Plot/Land")
              : e)
          );
        },
        b = function (e) {
          var t = "",
            r = e.propTypeD;
          return (
            (t += r =
              (r = (r = (r = r.includes("Multistorey Apartment")
                ? r.replace("Multistorey Apartment", "Apartment")
                : r).includes("Builder Floor Apartment")
                ? r.replace("Builder Floor Apartment", "Builder Floor")
                : r).includes("Residential")
                ? r.replace("Residential", "")
                : r).includes("Plot")
                ? r.replace("Plot", "Plot/Land")
                : r),
            !p(e.cg) && 0 < e.cg.trim().length
              ? (t +=
                  " for " +
                  ("s" === e.cg.toLowerCase() ||
                  "sale" === e.cg.toLowerCase() ||
                  "b" === e.cg.toLowerCase() ||
                  "buy" === e.cg.toLowerCase()
                    ? "sale"
                    : "rent") +
                  " in")
              : (t += " for Sale in"),
            e.isCardDesc &&
              !p(e.scdloc) &&
              0 < e.scdloc.trim().length &&
              (t += " " + e.scdloc),
            p(e.lmtDName)
              ? p(e.ltOther) || (t += " " + e.ltOther)
              : (t += " " + e.lmtDName),
            p(e.ctName) || (t += ", " + e.ctName),
            t
          );
        },
        v = function (e) {
          var t = "";
          return p(e.prjPossDateFormattedStr)
            ? t
            : "Possession " + e.prjPossDateFormattedStr;
        },
        h = function (e, t, r) {
          0 === e.hrs && 0 === e.mins && 0 === e.secs
            ? r()
            : 0 === e.mins && 0 === e.secs
            ? t([e.hrs - 1, 59, 59])
            : 0 === e.secs
            ? t([e.hrs, e.mins - 1, 59])
            : t([e.hrs, e.mins, e.secs - 1]);
        },
        g = function (e, t) {
          e([parseInt(t.hours), parseInt(t.minutes), parseInt(t.seconds)]);
        },
        _ = function (e, t, r, n) {
          var a = {
              message: "",
              sendMailnSms: !1,
              palnToBuy: "",
              maxBudget: "",
              minBudget: "",
              interestedIn: "",
              quotePrice: "",
              downloadReport: "",
              isFromAlert: !1,
              conRecType: "",
            },
            o =
              void 0 !== r &&
              void 0 !== r.userUniqToken &&
              null != r.userUniqToken
                ? r.userUniqToken
                : "",
            c =
              void 0 !== r && void 0 !== r.hmacCode && null != r.hmacCode
                ? r.hmacCode
                : "",
            i = {
              userUniqToken: o,
              access_token: o,
              token_type: "Bearer",
              hmacCode: c,
            },
            u =
              void 0 !== e &&
              null != e &&
              void 0 !== e.userConsent &&
              null != e.userConsent &&
              e.userConsent
                ? "Y"
                : "N",
            m =
              void 0 !== e &&
              null != e &&
              void 0 !== e.optIn &&
              null != e.optIn &&
              e.optIn
                ? "Y"
                : "N",
            f = t.requestBody.propertyId,
            d = t.requestBody.propertyId;
          if (!p(f) && !p(t.encID))
            try {
              var y = f.split("|");
              d = t.encID + "|" + y[1];
            } catch (e) {
              console.error(e);
            }
          (a = l(
            l(l(l(l({}, a), t.requestBody), e), n),
            {},
            {
              userMobileIsd: e.selectIsd,
              fingerprint: r.fingerprint,
              userAcceptance: u,
              optIn: m,
              propertyId: d,
              userUniqToken: o,
              hmacCode: c,
            }
          )),
            s
              .post("/sendRecieverDetails", a, { headers: i })
              .then(function (e) {
                (void 0 !== e &&
                  null != e &&
                  void 0 !== e.status &&
                  null != e.status &&
                  200 === e.status) ||
                  console.log(
                    "Error in SendRecieverDetails Contact Response: ",
                    e
                  );
              })
              .catch(function (e) {
                console.log(
                  "Error in SendRecieverDetails Contact Response: ",
                  e
                );
              });
        },
        E = function (e, t, r) {
          s.get("/thankYouPage/getPrimePrice", { params: e })
            .then(function (n) {
              f(n) || 200 !== n.status || f(n.data)
                ? console.log("Error in getPrimePrice Response: ", n)
                : (console.log(
                    "Request Params from thankYouService.js => ",
                    JSON.stringify(e)
                  ),
                  console.log(
                    "From thankYouService.js => getPrimePackagePrice called..."
                  ),
                  console.log(
                    "Printing Prime Packages from thankYouService.js => ",
                    JSON.stringify(n.data)
                  ),
                  (t = l(l({}, t), n.data)),
                  console.log(
                    "From thankYouService.js, primeInfo => ",
                    JSON.stringify(t)
                  ),
                  r(t));
            })
            .catch(function (e) {
              console.log("Error in getPrimePrice Response: ", e);
            });
        },
        O = function (e, t) {
          return function (t, r) {
            var n = (r = r()).contactData,
              c = r.searchAdditionalDataBean,
              i = ((r = r.searchBean), !1);
            p(e.isFreeOwnerProperty) ||
            "Y" !== e.isFreeOwnerProperty ||
            p(e.isPrimeLocProp) ||
            "Y" !== e.isPrimeLocProp
              ? (!p(e.isFreeOwnerProperty) && "N" !== e.isFreeOwnerProperty) ||
                p(e.isPrimeLocProp) ||
                "Y" !== e.isPrimeLocProp ||
                (t({
                  type: a.A,
                  payload: {
                    thankYouBannerToShowMap: {
                      LARGE_PRIME_BANNER: !0,
                      SMALL_PRIME_BANNER: !1,
                      PAY_RENT_BANNER: !1,
                    },
                    shouldShowAppBanner: !1,
                  },
                }),
                (i = !0),
                t(Object(o.e)(w(!1, "LargePrime", c, r, n))))
              : (t({
                  type: a.A,
                  payload: {
                    thankYouBannerToShowMap: {
                      LARGE_PRIME_BANNER: !1,
                      SMALL_PRIME_BANNER: !0,
                      PAY_RENT_BANNER: !1,
                    },
                    shouldShowAppBanner: !1,
                  },
                }),
                (i = !0),
                t(Object(o.e)(w(!1, "SmallPrime", c, r, n)))),
              ("r" !== e.cg && "R" !== e.cg) ||
                (!p(n.thankYouBannerToShow) &&
                  "LARGE_PRIME_BANNER" !== n.thankYouBannerToShow) ||
                (t({
                  type: a.A,
                  payload: {
                    thankYouBannerToShowMap: {
                      LARGE_PRIME_BANNER: !1,
                      SMALL_PRIME_BANNER: !0,
                      PAY_RENT_BANNER: !0,
                    },
                    shouldShowAppBanner: !1,
                  },
                }),
                (i = !0)),
              i ||
                p(e) ||
                t({
                  type: a.A,
                  payload: {
                    thankYouBannerToShowMap: {},
                    shouldShowAppBanner: !0,
                  },
                }),
              (c =
                "LARGE_PRIME_BANNER" !== n.thankYouBannerToShow
                  ? "LARGE_PRIME_BANNER"
                  : "PAY_RENT_BANNER");
            t({ type: a.z, payload: { thankYouBannerToShow: c } });
          };
        },
        w = function (e, t, r, a, o) {
          t = n.a[t];
          var c = null != o.pType && "" != o.pType ? o.pType : "";
          a =
            a &&
            null != a.category &&
            "" != a.category &&
            "r" != a.category.toLowerCase()
              ? "S"
              : "R";
          return {
            event: "event_tracking",
            eventName: "revamp_srp_dynamic_listing",
            nonInteraction: !0,
            eventCategory:
              "WEB" != r.platform
                ? "MB Prime_Wap Entry Point Impression"
                : "mb prime entry point impression",
            eventAction:
              ("WEB" != r.platform
                ? "MB Prime_Wap_SRP_" + t
                : "MB Prime_SRP_" + t) +
              (e ? " Clicked_" : " Shown_") +
              c +
              "_" +
              a,
            eventLabel:
              o.requestBody && o.nonPrimeUserFreeOwnerLimitUsed
                ? o.nonPrimeUserFreeOwnerLimitUsed
                : 0,
            eventValue: "",
            cd21: o.pType,
          };
        },
        S = function (e, t, r) {
          if (!p(e) && !p(e.searchQueryForTopMatches)) {
            var n = e.searchQueryForTopMatches.split("&");
            if (
              e.searchQueryForTopMatches.includes("excludeIds") &&
              -1 !=
                (e = n.findIndex(function (e) {
                  return e.includes("excludeIds");
                }))
            ) {
              var a = n[e];
              if (!p(r) && !p(r.requestBody) && !p(r.requestBody.propertyId)) {
                for (
                  var o = r.requestBody.propertyId.split("|")[0],
                    c = a.split(","),
                    i = "",
                    s = 0;
                  s < c.length && (p(c[s]) || !c[s].includes(o));
                  s++
                )
                  i = p(i) ? c[s] : i + "," + c[s];
                n[e] = i;
              }
              (r = n.join("&")),
                (t = l(l({}, t), {}, { urlForSearchFiltersSRP: r }));
            }
          }
          return t;
        };
    },
    90: function (e, t, r) {
      "use strict";
      var n = r(0),
        a = r.n(n);
      t.a = function (e) {
        return a.a.createElement(
          "div",
          { className: "contact-form__heading" },
          e.heading || "",
          e.children || ""
        );
      };
    },
  },
]);
//# sourceMappingURL=propertysrpchunk-main~5a9d3704.dabba2d8daa0b8fe63bc.js.map
