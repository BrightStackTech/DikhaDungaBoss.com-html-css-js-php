new ((function () {
  function e() {
    (this.srb_widget_close_icon =
      '<svg xmlns="http://www.w3.org/2000/svg" width="8.5" height="8.498" viewBox="0 0 8.5 8.498"><path id="Icon_ionic-ios-close" data-name="Icon ionic-ios-close" d="M16.542,15.538,19.578,12.5A.711.711,0,0,0,18.572,11.5l-3.036,3.036L12.5,11.5A.711.711,0,1,0,11.494,12.5l3.036,3.036-3.036,3.036A.711.711,0,0,0,12.5,19.579l3.036-3.036,3.036,3.036a.711.711,0,1,0,1.006-1.006Z" transform="translate(-11.285 -11.289)"/></svg>'),
      (this.srb_widget_expand_icon =
        '<svg xmlns="http://www.w3.org/2000/svg" width="9.936" height="9.937" viewBox="0 0 9.936 9.937"><path id="Union_40" data-name="Union 40" d="M16997.455-2860.065a.62.62,0,0,1-.623-.619l.8-.8-2.045-2.044.889-.887,2.043,2.043.8-.8a.62.62,0,0,1,.623.619v1.865a.62.62,0,0,1-.623.619Zm-6.834,0a.619.619,0,0,1-.619-.619v-1.865a.619.619,0,0,1,.619-.619l.8.8,2.043-2.043.893.887-2.043,2.044.793.8a.619.619,0,0,1-.619.619Zm4.965-6.472,2.045-2.044-.8-.8a.624.624,0,0,1,.623-.623h1.859a.624.624,0,0,1,.623.623v1.865a.62.62,0,0,1-.623.619l-.8-.8-2.043,2.044Zm-4.168-1.156-.8.8a.619.619,0,0,1-.619-.619v-1.865a.623.623,0,0,1,.619-.623h1.863a.623.623,0,0,1,.619.623l-.793.8,2.043,2.044-.893.887Z" transform="translate(-16990.002 2870.001)"/></svg>'),
      (this.srb_widget_min_icon =
        '<svg xmlns="http://www.w3.org/2000/svg" width="12.019" height="12.019" viewBox="0 0 12.019 12.019"><path id="Icon_ionic-ios-close" data-name="Icon ionic-ios-close" d="M16.542,15.538l-1.006-1.006L12.5,11.5A.711.711,0,1,0,11.494,12.5l3.036,3.036,1.006,1.006,3.036,3.036a.711.711,0,1,0,1.006-1.006Z" transform="translate(-15.962 6.008) rotate(-45)"/></svg>'),
      window.addEventListener("message", function (e) {
        var t = e.data;
        "url" === t.type &&
          null == window.open(t.url, "_blank") &&
          alert("Please disable your pop-up blocker in your browser settings.");
      });
  }
  return (
    (e.prototype.makeid = function () {
      for (
        var e = "",
          t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
          o = 0;
        o < 5;
        o++
      )
        e += t.charAt(Math.floor(Math.random() * t.length));
      return e;
    }),
    (e.prototype.loadWidgetCss = function (e) {
      var t = document.createElement("link");
      (t.rel = "stylesheet"),
        (t.href = e),
        document.getElementsByTagName("head")[0].appendChild(t);
    }),
    (e.prototype.customerHistoryUUID = function (e, t) {
      var o = "";
      return e && !t
        ? localStorage.getItem("unique_user")
          ? (o = localStorage.getItem("unique_user"))
          : ((o = this.makeid()), localStorage.setItem("unique_user", o), o)
        : t;
    }),
    (e.prototype.startExecution = function (e, t) {
      var o,
        i = this,
        s = document.getElementById("bot-container");
      s ||
        (((s = document.createElement("div")).id = "bot-container"),
        document.body.append(s));
      try {
        if (null == e ? void 0 : e.message)
          return void (s.innerHTML =
            '<div class="sb_widget_message" \n                style="\n                    background: red; \n                    color:#fff;\n                    position: absolute;\n                    right:10px; \n                    max-width: 240px; \n                    bottom: 10px;\n                    border-radius:4px;\n                    padding: 4px 12px;"\n                >'.concat(
              null == e ? void 0 : e.message,
              "</div>"
            ));
        o = JSON.parse(e.bot);
      } catch (e) {
        console.log(e);
      }
      if (o) {
        var n = "",
          a = o.autoload;
        o.widget_name && (n = o.widget_name);
        var r = o.widget_type,
          c = o.widget_size,
          l = o.widget_screen_size,
          _ = o.widget_location,
          d = o.widget_popup_time,
          m = o.contentVersion,
          u = o.widget_auto_popup_hrs,
          b = o.cust_history;
        t.srb_1 = this.customerHistoryUUID(b, t.srb_1);
        var g = ""
          .concat(t.domain, "/static/")
          .concat(m, '/css/custom/widget.css?v=1.0"');
        this.loadWidgetCss(g);
        var p,
          h = o.bucket_name;
        (p =
          null !== o.widget_image_url
            ? o.widget_image_url
            : "https://" +
              h +
              ".s3.amazonaws.com/bots/uploads/widget_logos/" +
              n),
          0 == n.length &&
            (p = t.domain + "/static/" + m + "/images/widget_chat_icon.png"),
          (html =
            '<a href="javascript:void(0)" class="preview_icon sb_new_chat" data-iframe="'
              .concat(t.domain, "/widget-bot/")
              .concat(t.bot_id, "?srb_1=")
              .concat(t.srb_1, "&srb_2=")
              .concat(t.srb_2, "&srb_3=")
              .concat(t.srb_3, '">\n                            <img src ="')
              .concat(
                p,
                '" style="max-width:100px; max-height:100px; opacity:0;" />\n                        </a>'
              )),
          (s.innerHTML = html);
        var v = e.bot_theme;
        if (
          ("theme_3" != v.bot_theme && s.classList.add("old_theme"),
          "icon" == r &&
            ("" != _ && s.classList.add(_),
            "" != l && s.classList.add(l),
            "" != d))
        ) {
          var w = parseInt(d),
            f = s.querySelector("a.preview_icon");
          if (u) {
            var y = localStorage.getItem("timerValue");
            y
              ? new Date().getTime() - new Date(y).getTime() >=
                  1e3 * u * 3600 &&
                (localStorage.removeItem("timerValue"),
                setTimeout(function () {
                  f.click();
                }, 1e3 * w))
              : setTimeout(function () {
                  f.click();
                }, 1e3 * w);
          } else
            setTimeout(function () {
              f.click();
            }, 1e3 * w);
        }
        s.addEventListener("click", function (e) {
          var t =
            "sb_new_chat" === e.target.className
              ? e.target
              : e.target.closest("a.sb_new_chat");
          if (t) {
            var o = t.getAttribute("data-iframe"),
              n =
                '<div class="sb_close_min_icon">\n                                        <a href="javascript:void(0)" class="sb_min_chat"></a>\n                                        <a href="javascript:void(0)" class="close_chat_box"></a>\n                                    </div>\n                                    <div class="sb_confirm_box" style="display:none;">\n                                        <div class="sb_confirm_body">\n                                            <div>Are you sure you want to close this?</div>\n                                            <div class="sb_confirm_footer">\n                                                <button class="sb_yes_btn">Yes</button>\n                                                <button class="sb_no_btn">No</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <iframe id="srb_iframe" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin allow-top-navigation" allow="geolocation" width="360" height = "460" class="srb_chatbot_window" src="'.concat(
                  o,
                  '"></iframe>'
                );
            s.querySelectorAll("iframe").length ||
              ((s.innerHTML = s.innerHTML + n),
              (t = s.querySelector(".preview_icon")),
              s.classList.add("sb_open"),
              v &&
                Object.keys(v).length &&
                ((i.srb_widget_close_icon = i.srb_widget_close_icon.replace(
                  /#ffffff/g,
                  v.color.header_text
                )),
                (i.srb_widget_expand_icon = i.srb_widget_expand_icon.replace(
                  /#ffffff/g,
                  v.color.header_text
                )),
                (i.srb_widget_min_icon = i.srb_widget_min_icon.replace(
                  /#ffffff/g,
                  v.color.header_text
                )),
                (s.querySelector(
                  ".sb_confirm_footer button.sb_yes_btn"
                ).style.background = v.theme_color),
                (s.querySelector(
                  ".sb_confirm_footer button.sb_no_btn, .sb_confirm_footer button.sb_yes_btn"
                ).style.borderColor = v.theme_color),
                (s.querySelector(
                  ".sb_confirm_footer button.sb_no_btn"
                ).style.color = v.theme_color)),
              (s.querySelector("a.close_chat_box").innerHTML =
                i.srb_widget_close_icon),
              (s.querySelector("a.sb_min_chat").innerHTML =
                i.srb_widget_min_icon)),
              (t.style.display = "none"),
              L(function (e) {
                e &&
                  (document
                    .querySelector("#srb_iframe")
                    .contentWindow.postMessage("close", "*"),
                  setTimeout(function () {
                    (s.innerHTML = html),
                      s.classList.remove("sb_open"),
                      s.classList.remove("chat_minimized");
                  }, 100));
              });
          }
        }),
          1 == a &&
            (($element = s.querySelector("a.preview_icon")), $element.click()),
          s.addEventListener("click", function (e) {
            "close_chat_box" === e.target.className &&
              (s.querySelector(".sb_confirm_box").style.display = "block");
          }),
          s.addEventListener("click", function (e) {
            e.preventDefault(),
              e.target.classList.contains("sb_min_chat") &&
                (s.classList.toggle("chat_minimized"),
                s.classList.remove("sb_open"),
                s
                  .querySelector(".preview_icon")
                  .classList.remove("sb_new_chat"),
                s
                  .querySelector(".preview_icon")
                  .classList.add("sb_minimized_chat"),
                (s.querySelector(".sb_close_min_icon").style.display = "none"),
                (s.querySelector("iframe").style.display = "none"),
                (s.querySelector(".preview_icon").style.display = "block"));
          }),
          s.addEventListener("click", function (e) {
            var t;
            e.preventDefault();
            var o =
              "sb_minimized_chat" === e.target.className
                ? e.target
                : e.target.closest("a.sb_minimized_chat");
            (null === (t = null == o ? void 0 : o.classList) || void 0 === t
              ? void 0
              : t.contains("sb_minimized_chat")) &&
              (s.classList.toggle("chat_minimized"),
              s.classList.add("sb_open"),
              s
                .querySelector(".preview_icon")
                .classList.remove("sb_minimized_chat"),
              s.querySelector(".preview_icon").classList.add("sb_new_chat"),
              (s.querySelector(".sb_close_min_icon").style.display = "flex"),
              (s.querySelector("iframe").style.display = "block"),
              (s.querySelector(".preview_icon").style.display = "none"));
          }),
          s.addEventListener("click", function (e) {
            "reload_srb_bot" === e.target.className &&
              ((s.innerHTML = html),
              s.classList.remove("sb_open"),
              s.classList.remove("chat_minimized"),
              s.querySelector(".preview_icon").click());
          });
        var L = function (e) {
          s.querySelector(".sb_yes_btn").addEventListener("click", function () {
            if ((e(!0), "icon" == r && u && localStorage)) {
              var t = localStorage.getItem("timerValue");
              t ||
                ((t = new Date().toString()),
                localStorage.setItem("timerValue", t)),
                new Date().getTime() - new Date(t).getTime() >=
                  1e3 * u * 3600 &&
                  localStorage.setItem("timerValue", new Date().toString());
            }
          }),
            s
              .querySelector(".sb_no_btn")
              .addEventListener("click", function () {
                e(!1),
                  (s.querySelector(".sb_confirm_box").style.display = "none");
              });
        };
        try {
          if ("banner" == r) {
            var S = (c = c.split("/"))[0],
              x = c[1];
            s.classList.add("srb_banner_widget"),
              (s.style.width = "".concat(S, "px")),
              (s.style.height = "".concat(x, "px"));
          }
        } catch (e) {}
      }
    }),
    (e.prototype.getWidgetParams = function () {
      for (
        var e,
          t = this,
          o = document.getElementsByTagName("script"),
          i = function (i) {
            var s =
              (null === (e = o[i].attributes.getNamedItem("src")) ||
              void 0 === e
                ? void 0
                : e.value) || "";
            if (-1 !== s.indexOf("js/custom/widget_surbo.js")) {
              var n = new URL(s),
                a = new URLSearchParams(n.search),
                r = {};
              (r.bot_id = a.get("id")),
                (r.domain = n.origin),
                (r.srb_1 = a.get("srb_1")),
                (r.srb_2 = a.get("srb_2")),
                (r.srb_3 = a.get("srb_3"));
              var c =
                  r.domain +
                  "/web-bot/" +
                  r.bot_id +
                  "?content_type=json&chat_session=false",
                l = new XMLHttpRequest();
              return (
                (l.onreadystatechange = function (e) {
                  4 != l.readyState ||
                    (200 !== l.status && 202 !== l.status) ||
                    t.startExecution(JSON.parse(l.response), r);
                }),
                l.open("GET", c, !0),
                l.send(),
                "break"
              );
            }
          },
          s = 0;
        s < o.length && "break" !== i(s);
        s++
      );
    }),
    (e.prototype.init = function () {
      this.getWidgetParams();
    }),
    e
  );
})())().init();
