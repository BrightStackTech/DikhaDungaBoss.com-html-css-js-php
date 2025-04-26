/*! For license information please see propertysrpchunk-14.580b83ce9b8bfd1ed0e3.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    1853: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r(0),
        o = r.n(n),
        i = r(2),
        a = r(1),
        c = r(207);
      function u(t) {
        return (u =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function l() {
        l = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          o =
            (m = "function" == typeof Symbol ? Symbol : {}).iterator ||
            "@@iterator",
          i = m.asyncIterator || "@@asyncIterator",
          a = m.toStringTag || "@@toStringTag";
        function c(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (e) {
          c = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, o) {
          var i, a, c, u;
          (e = e && e.prototype instanceof d ? e : d),
            (e = Object.create(e.prototype)),
            (o = new E(o || []));
          return (
            n(e, "_invoke", {
              value:
                ((i = t),
                (a = r),
                (c = o),
                (u = "suspendedStart"),
                function (t, e) {
                  if ("executing" === u)
                    throw new Error("Generator is already running");
                  if ("completed" === u) {
                    if ("throw" === t) throw e;
                    return { value: void 0, done: !0 };
                  }
                  for (c.method = t, c.arg = e; ; ) {
                    var r = c.delegate;
                    if (
                      r &&
                      ((r = (function t(e, r) {
                        var n = r.method,
                          o = e.iterator[n];
                        return void 0 === o
                          ? ((r.delegate = null),
                            ("throw" === n &&
                              e.iterator.return &&
                              ((r.method = "return"),
                              (r.arg = void 0),
                              t(e, r),
                              "throw" === r.method)) ||
                              ("return" !== n &&
                                ((r.method = "throw"),
                                (r.arg = new TypeError(
                                  "The iterator does not provide a '" +
                                    n +
                                    "' method"
                                )))),
                            p)
                          : "throw" === (n = f(o, e.iterator, r.arg)).type
                          ? ((r.method = "throw"),
                            (r.arg = n.arg),
                            (r.delegate = null),
                            p)
                          : (o = n.arg)
                          ? o.done
                            ? ((r[e.resultName] = o.value),
                              (r.next = e.nextLoc),
                              "return" !== r.method &&
                                ((r.method = "next"), (r.arg = void 0)),
                              (r.delegate = null),
                              p)
                            : o
                          : ((r.method = "throw"),
                            (r.arg = new TypeError(
                              "iterator result is not an object"
                            )),
                            (r.delegate = null),
                            p);
                      })(r, c)),
                      r)
                    ) {
                      if (r === p) continue;
                      return r;
                    }
                    if ("next" === c.method) c.sent = c._sent = c.arg;
                    else if ("throw" === c.method) {
                      if ("suspendedStart" === u)
                        throw ((u = "completed"), c.arg);
                      c.dispatchException(c.arg);
                    } else "return" === c.method && c.abrupt("return", c.arg);
                    if (
                      ((u = "executing"), "normal" === (r = f(i, a, c)).type)
                    ) {
                      if (
                        ((u = c.done ? "completed" : "suspendedYield"),
                        r.arg === p)
                      )
                        continue;
                      return { value: r.arg, done: c.done };
                    }
                    "throw" === r.type &&
                      ((u = "completed"),
                      (c.method = "throw"),
                      (c.arg = r.arg));
                  }
                }),
            }),
            e
          );
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = s;
        var p = {};
        function d() {}
        function h() {}
        function y() {}
        var m,
          v,
          b =
            ((v =
              (v =
                (c((m = {}), o, function () {
                  return this;
                }),
                Object.getPrototypeOf)) && v(v(k([])))) &&
              v !== e &&
              r.call(v, o) &&
              (m = v),
            (y.prototype = d.prototype = Object.create(m)));
        function g(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var o;
          n(this, "_invoke", {
            value: function (n, i) {
              function a() {
                return new e(function (o, a) {
                  !(function n(o, i, a, c) {
                    var l;
                    if ("throw" !== (o = f(t[o], t, i)).type)
                      return (i = (l = o.arg).value) &&
                        "object" == u(i) &&
                        r.call(i, "__await")
                        ? e.resolve(i.__await).then(
                            function (t) {
                              n("next", t, a, c);
                            },
                            function (t) {
                              n("throw", t, a, c);
                            }
                          )
                        : e.resolve(i).then(
                            function (t) {
                              (l.value = t), a(l);
                            },
                            function (t) {
                              return n("throw", t, a, c);
                            }
                          );
                    c(o.arg);
                  })(n, i, o, a);
                });
              }
              return (o = o ? o.then(a, a) : a());
            },
          });
        }
        function j(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function O(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function E(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(j, this),
            this.reset(!0);
        }
        function k(t) {
          if (t) {
            var e,
              n = t[o];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length))
              return (
                (e = -1),
                ((n = function n() {
                  for (; ++e < t.length; )
                    if (r.call(t, e)) return (n.value = t[e]), (n.done = !1), n;
                  return (n.value = void 0), (n.done = !0), n;
                }).next = n)
              );
          }
          return { next: x };
        }
        function x() {
          return { value: void 0, done: !0 };
        }
        return (
          n(b, "constructor", { value: (h.prototype = y), configurable: !0 }),
          n(y, "constructor", { value: h, configurable: !0 }),
          (h.displayName = c(y, a, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            return (
              !!(t = "function" == typeof t && t.constructor) &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, y)
                : ((t.__proto__ = y), c(t, a, "GeneratorFunction")),
              (t.prototype = Object.create(b)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          g(w.prototype),
          c(w.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new w(s(e, r, n, o), i);
            return t.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          g(b),
          c(b, a, "Generator"),
          c(b, o, function () {
            return this;
          }),
          c(b, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e,
              r = Object(t),
              n = [];
            for (e in r) n.push(e);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var e = n.pop();
                  if (e in r) return (t.value = e), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = k),
          (E.prototype = {
            constructor: E,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (a.type = "throw"),
                  (a.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; 0 <= o; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var c = r.call(i, "catchLoc"),
                    u = r.call(i, "finallyLoc");
                  if (c && u) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              var a = (i =
                i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc
                  ? null
                  : i)
                ? i.completion
                : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), p)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                p
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), O(r), p;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                var r,
                  n,
                  o = this.tryEntries[e];
                if (o.tryLoc === t)
                  return (
                    "throw" === (r = o.completion).type && ((n = r.arg), O(o)),
                    n
                  );
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: k(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          t
        );
      }
      function s(t, e, r, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void r(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(n, o);
      }
      function f(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != r) {
              var n,
                o,
                i,
                a,
                c = [],
                u = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (n = i.call(r)).done) &&
                    (c.push(n.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return c;
            }
          })(t, e) ||
          (function (t, e) {
            var r;
            if (t)
              return "string" == typeof t
                ? p(t, e)
                : "Map" ===
                    (r =
                      "Object" ===
                        (r = Object.prototype.toString.call(t).slice(8, -1)) &&
                      t.constructor
                        ? t.constructor.name
                        : r) || "Set" === r
                ? Array.from(t)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? p(t, e)
                : void 0;
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function p(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function d(t) {
        var e = Object(i.d)(function (t) {
            return t.searchBean;
          }),
          r = Object(i.d)(function (t) {
            return t.clientBean;
          }),
          u = Object(i.d)(function (t) {
            return t.searchResult;
          }),
          p = Object(i.d)(function (t) {
            return t.searchAdditionalDataBean;
          }),
          d = Object(i.c)(),
          y = f(Object(n.useState)(!1), 2),
          m = y[0],
          v = y[1],
          b =
            (Object(n.useEffect)(
              function () {
                setTimeout(function () {
                  try {
                    d({ type: "isscrollcalled", payload: !0 }),
                      m &&
                        null != e.city &&
                        0 != e.city &&
                        ((r = t.from),
                        (n = e),
                        (o = p),
                        ((i = ntrack.getRawDataObject()).rawUrl = Object(c.a)(
                          n,
                          o
                        ).replace("localityName", "locality")),
                        (i.psm = n.psmid),
                        (i.trackingEvent = ntrack.trackingEvent.Search),
                        (i.Source =
                          "Web" == r
                            ? ntrack.Source.Web
                            : ntrack.Source.Web_Mobile),
                        (i.EventActivityType =
                          ntrack.EventActivityType.Property),
                        ntrack.sendRamTrackEvent(i));
                  } catch (r) {
                    console.log(r);
                  }
                  var r, n, o, i;
                }, 2500);
              },
              [JSON.stringify(e), m]
            ),
            Object(n.useEffect)(function () {
              return (
                setTimeout(function () {
                  !(function () {
                    j.apply(this, arguments);
                  })();
                }, 1e3),
                window.addEventListener("scroll", b),
                function () {
                  return window.removeEventListener("scroll", b);
                }
              );
            }, []),
            function () {
              u.map(function (t, r) {
                var n, o, i;
                (function (t) {
                  var e;
                  if (!Object(a.t)(t))
                    return (
                      (e = (t = t.getBoundingClientRect()).top),
                      (t = t.bottom),
                      0 <= e && t <= window.innerHeight
                    );
                })(document.getElementById("cardid" + t.id)) &&
                  h.indexOf(t.id) < 0 &&
                  (h.push(t.id),
                  (n = new Object()),
                  e.psmid && e.psmid.length && (n.psm = e.psmid),
                  e.locality && (n.locality = e.locality),
                  e.bhk && (n.bedrooms = e.bhk),
                  e.propertyType && (n.prop_type = e.propertyType),
                  e.budgetMin && (n.min_budget = e.budgetMin),
                  e.budgetMax && (n.max_budget = e.budgetMax),
                  (n.category = "R" == e.category ? "Rent" : "Buy"),
                  (n.city = e.city),
                  (n.result_count = "" + p.resultCount),
                  (o = []),
                  ((i = new Object()).propertyId = t.id),
                  (i.position = "" + r),
                  (i.adId = ""),
                  o.push(i),
                  window.addEventListener("load", function () {
                    var t = ntrack.getRawDataObject();
                    (t.trackingEvent = ntrack.trackingEvent.SrpCardView),
                      (t.Source = ntrack.Source.Web),
                      (t.categ = e.category),
                      (t.propertyInfo = n),
                      (t.propPositions = o),
                      ntrack.sendRamTrackEvent(t);
                  }));
              });
            }),
          g =
            (Object(n.useEffect)(
              function () {
                try {
                  var e;
                  r.lastContactPropertyId &&
                    0 != r.lastContactPropertyId &&
                    (((e = ntrack.getRawDataObject()).contactType = "Property"),
                    (e.actualOwnerId = r.lastContactPropertyId.split("|")[0]),
                    (e.trackingEvent = ntrack.trackingEvent.Contact),
                    (e.Source =
                      "Web" == t.from
                        ? ntrack.Source.Web
                        : ntrack.Source.Web_Mobile),
                    ntrack.sendRamTrackEvent(e));
                } catch (e) {
                  console.log(e);
                }
              },
              [r.lastContactPropertyId]
            ),
            function (t) {
              var e = document.createElement("script");
              (e.type = "application/javascript"),
                (e.src = t),
                document.body.appendChild(e);
            }),
          w = function () {
            var t;
            !m &&
              p.isNRIUser &&
              "true" === p.isNRIUser &&
              ((t = document.createElement("script")).setAttribute(
                "id",
                "ze-snippet"
              ),
              t.setAttribute(
                "src",
                "https://static.zdassets.com/ekr/snippet.js?key=0a1546fa-b1f0-46eb-9400-f08b4f00549b"
              ),
              document.body.appendChild(t));
          };
        function j() {
          var t;
          return (
            (t = l().mark(function t() {
              return l().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (window.jQuery) {
                        t.next = 3;
                        break;
                      }
                      return (
                        (t.next = 3),
                        g(
                          "https://cdn.staticmb.com/scripts/jquery-1.11.0.min.js"
                        )
                      );
                    case 3:
                      return (
                        (t.next = 5), g(jsRootUrl + "scripts/porthole.min.js")
                      );
                    case 5:
                      return (
                        (t.next = 7),
                        setTimeout(function () {
                          g(jsRootUrl + "scripts/ntracking.js");
                        }, 400)
                      );
                    case 7:
                      return (t.next = 10), w();
                    case 10:
                      v(!0);
                    case 11:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })),
            (j = function () {
              var e = this,
                r = arguments;
              return new Promise(function (n, o) {
                var i = t.apply(e, r);
                function a(t) {
                  s(i, n, o, a, c, "next", t);
                }
                function c(t) {
                  s(i, n, o, a, c, "throw", t);
                }
                a(void 0);
              });
            }).apply(this, arguments)
          );
        }
        return o.a.createElement(o.a.Fragment, null);
      }
      var h = [];
      function y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function m(t) {
        var e = (function (t, e) {
            return (
              (function (t) {
                if (Array.isArray(t)) return t;
              })(t) ||
              (function (t, e) {
                var r =
                  null == t
                    ? null
                    : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                      t["@@iterator"];
                if (null != r) {
                  var n,
                    o,
                    i,
                    a,
                    c = [],
                    u = !0,
                    l = !1;
                  try {
                    if (((i = (r = r.call(t)).next), 0 === e)) {
                      if (Object(r) !== r) return;
                      u = !1;
                    } else
                      for (
                        ;
                        !(u = (n = i.call(r)).done) &&
                        (c.push(n.value), c.length !== e);
                        u = !0
                      );
                  } catch (t) {
                    (l = !0), (o = t);
                  } finally {
                    try {
                      if (
                        !u &&
                        null != r.return &&
                        ((a = r.return()), Object(a) !== a)
                      )
                        return;
                    } finally {
                      if (l) throw o;
                    }
                  }
                  return c;
                }
              })(t, e) ||
              (function (t, e) {
                var r;
                if (t)
                  return "string" == typeof t
                    ? y(t, e)
                    : "Map" ===
                        (r =
                          "Object" ===
                            (r = Object.prototype.toString
                              .call(t)
                              .slice(8, -1)) && t.constructor
                            ? t.constructor.name
                            : r) || "Set" === r
                    ? Array.from(t)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? y(t, e)
                    : void 0;
              })(t, e) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          })(Object(n.useState)(!1), 2),
          r =
            (e[0],
            e[1],
            Object(n.useEffect)(function () {
              setTimeout(function () {
                [].push({ c1: "2", c2: "6036484" }),
                  r("https://sb.scorecardresearch.com/beacon.js");
              }, 3500);
            }, []),
            function (t) {
              var e = document.createElement("script");
              (e.type = "application/javascript"),
                (e.defer = !0),
                (e.src = t),
                document.body.appendChild(e);
            });
        return o.a.createElement(o.a.Fragment, null);
      }
      function v(t) {
        Object(n.useEffect)(function () {
          e();
        }, []);
        var e = function (t) {
          var e = document.createElement("script");
          (e.type = "application/javascript"),
            (e.src = jsRootUrl + "scripts/global-notification.js"),
            document.body.appendChild(e);
        };
        return o.a.createElement(o.a.Fragment, null);
      }
      function b(t) {
        Object(n.useEffect)(function () {
          e();
        }, []);
        var e = function (t) {
          var e = document.createElement("script");
          (e.type = "application/javascript"),
            (e.src = gdprUrl),
            document.body.appendChild(e);
        };
        return o.a.createElement(o.a.Fragment, null);
      }
      function g(t) {
        Object(i.d)(function (t) {
          return t.searchAdditionalDataBean;
        }),
          Object(n.useEffect)(function () {
            e();
          }, []);
        var e = function (t) {
          var e = "",
            r = new URLSearchParams(window.location.search),
            n =
              void 0 !== (r = Object.fromEntries(r.entries())).utm_source
                ? r.utm_source
                : "",
            o = void 0 !== r.utm_medium ? r.utm_medium : "",
            i = void 0 !== r.utm_campaign ? r.utm_campaign : "",
            c = void 0 !== r.utm_content ? r.utm_content : "",
            u = void 0 !== r.utm_term ? r.utm_term : "",
            l =
              ((r = void 0 !== r.mbtracker ? r.mbtracker : ""),
              void 0 !== document.referrer &&
              -1 == document.referrer.indexOf(document.domain)
                ? document.referrer
                : ""),
            s =
              (30 < n.length && (n = n.substring(0, 30)),
              30 < o.length && (o = o.substring(0, 30)),
              30 < i.length && i.substring(0, 30),
              30 < c.length && (i = c.substring(0, 30)),
              30 < u.length && (u = u.substring(0, 30)),
              30 < r.length && (r = r.substring(0, 30)),
              30 < l.length && (l = l.substring(0, 30)));
          (s =
            Object(a.t)(n) &&
            Object(a.t)(o) &&
            Object(a.t)(i) &&
            Object(a.t)(c) &&
            Object(a.t)(u) &&
            Object(a.t)(r) &&
            ((!Object(a.t)(l) && 0 <= l.indexOf("https://www.google.")) ||
              0 < window.location.href.indexOf("pppfr") ||
              0 < window.location.href.indexOf("pppfs"))
              ? "Seo"
              : Object(a.t)(n) &&
                Object(a.t)(o) &&
                Object(a.t)(i) &&
                Object(a.t)(c) &&
                Object(a.t)(u) &&
                Object(a.t)(r) &&
                Object(a.t)(l)
              ? "Direct"
              : ((e =
                  n +
                  "|" +
                  o +
                  "|" +
                  i +
                  "|" +
                  c +
                  "|" +
                  u +
                  "|" +
                  r +
                  "|" +
                  l),
                "External")),
            (n = w.a.readCookie("semAttributesCookie"));
          Object(a.t)(n)
            ? Object(a.t)(n) && (n = s + "#" + e)
            : (n = decodeURIComponent(n)),
            w.a.createCookie("semAttributesCookie", n, 30);
        };
        return o.a.createElement(o.a.Fragment, null);
      }
      r(41);
      var w = r(6);
      function j(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      e.default = function (t) {
        function e() {
          a(!0);
        }
        var r = (function (t, e) {
            return (
              (function (t) {
                if (Array.isArray(t)) return t;
              })(t) ||
              (function (t, e) {
                var r =
                  null == t
                    ? null
                    : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                      t["@@iterator"];
                if (null != r) {
                  var n,
                    o,
                    i,
                    a,
                    c = [],
                    u = !0,
                    l = !1;
                  try {
                    if (((i = (r = r.call(t)).next), 0 === e)) {
                      if (Object(r) !== r) return;
                      u = !1;
                    } else
                      for (
                        ;
                        !(u = (n = i.call(r)).done) &&
                        (c.push(n.value), c.length !== e);
                        u = !0
                      );
                  } catch (t) {
                    (l = !0), (o = t);
                  } finally {
                    try {
                      if (
                        !u &&
                        null != r.return &&
                        ((a = r.return()), Object(a) !== a)
                      )
                        return;
                    } finally {
                      if (l) throw o;
                    }
                  }
                  return c;
                }
              })(t, e) ||
              (function (t, e) {
                var r;
                if (t)
                  return "string" == typeof t
                    ? j(t, e)
                    : "Map" ===
                        (r =
                          "Object" ===
                            (r = Object.prototype.toString
                              .call(t)
                              .slice(8, -1)) && t.constructor
                            ? t.constructor.name
                            : r) || "Set" === r
                    ? Array.from(t)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? j(t, e)
                    : void 0;
              })(t, e) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          })(Object(n.useState)(!1), 2),
          i = r[0],
          a = r[1];
        return (
          Object(n.useEffect)(function () {
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
          "true" === istool
            ? o.a.createElement(o.a.Fragment, null)
            : o.a.createElement(
                o.a.Fragment,
                null,
                o.a.createElement(m, null),
                o.a.createElement(g, null),
                i &&
                  o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(d, { from: t.from }),
                    o.a.createElement(v, null),
                    o.a.createElement(b, null)
                  )
              )
        );
      };
    },
  },
]);
//# sourceMappingURL=propertysrpchunk-14.580b83ce9b8bfd1ed0e3.js.map
