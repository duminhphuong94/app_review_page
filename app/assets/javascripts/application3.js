/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-apng-backdropfilter-canvas-csspositionsticky-csstransforms3d-csstransitions-forcetouch-touchevents-video-setclasses !*/
! function(e, n, t) {
    function o(e, n) {
        return typeof e === n
    }

    function r() {
        var e, n, t, r, i, s, a;
        for (var f in y)
            if (y.hasOwnProperty(f)) {
                if (e = [], n = y[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (r = o(n.fn, "function") ? n.fn() : n.fn, i = 0; i < e.length; i++) s = e[i], a = s.split("."), 1 === a.length ? _[a[0]] = r : (!_[a[0]] || _[a[0]] instanceof Boolean || (_[a[0]] = new Boolean(_[a[0]])), _[a[0]][a[1]] = r), w.push((r ? "" : "no-") + a.join("-"))
            }
    }

    function i(e) {
        var n = T.className,
            t = _._config.classPrefix || "";
        if (E && (n = n.baseVal), _._config.enableJSClass) {
            var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(o, "$1" + t + "js$2")
        }
        _._config.enableClasses && (n += " " + t + e.join(" " + t), E ? T.className.baseVal = n : T.className = n)
    }

    function s() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : E ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }

    function a(e, n) {
        return !!~("" + e).indexOf(n)
    }

    function f() {
        var e = n.body;
        return e || (e = s(E ? "svg" : "body"), e.fake = !0), e
    }

    function u(e, t, o, r) {
        var i, a, u, c, l = "modernizr",
            d = s("div"),
            p = f();
        if (parseInt(o, 10))
            for (; o--;) u = s("div"), u.id = r ? r[o] : l + (o + 1), d.appendChild(u);
        return i = s("style"), i.type = "text/css", i.id = "s" + l, (p.fake ? p : d).appendChild(i), p.appendChild(d), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(n.createTextNode(e)), d.id = l, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = T.style.overflow, T.style.overflow = "hidden", T.appendChild(p)), a = t(d, e), p.fake ? (p.parentNode.removeChild(p), T.style.overflow = c, T.offsetHeight) : d.parentNode.removeChild(d), !!a
    }

    function c(e) {
        return e.replace(/([A-Z])/g, function(e, n) {
            return "-" + n.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function l(n, o) {
        var r = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; r--;)
                if (e.CSS.supports(c(n[r]), o)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var i = []; r--;) i.push("(" + c(n[r]) + ":" + o + ")");
            return i = i.join(" or "), u("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return t
    }

    function d(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
            return n + t.toUpperCase()
        }).replace(/^-/, "")
    }

    function p(e, n, r, i) {
        function f() {
            c && (delete B.style, delete B.modElem)
        }
        if (i = o(i, "undefined") ? !1 : i, !o(r, "undefined")) {
            var u = l(e, r);
            if (!o(u, "undefined")) return u
        }
        for (var c, p, A, v, g, h = ["modernizr", "tspan"]; !B.style;) c = !0, B.modElem = s(h.shift()), B.style = B.modElem.style;
        for (A = e.length, p = 0; A > p; p++)
            if (v = e[p], g = B.style[v], a(v, "-") && (v = d(v)), B.style[v] !== t) {
                if (i || o(r, "undefined")) return f(), "pfx" == n ? v : !0;
                try {
                    B.style[v] = r
                }
                catch (m) {}
                if (B.style[v] != g) return f(), "pfx" == n ? v : !0
            }
        return f(), !1
    }

    function A(e, n) {
        return function() {
            return e.apply(n, arguments)
        }
    }

    function v(e, n, t) {
        var r;
        for (var i in e)
            if (e[i] in n) return t === !1 ? e[i] : (r = n[e[i]], o(r, "function") ? A(r, t || n) : r);
        return !1
    }

    function g(e, n, t, r, i) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + S.join(s + " ") + s).split(" ");
        return o(n, "string") || o(n, "undefined") ? p(a, n, r, i) : (a = (e + " " + O.join(s + " ") + s).split(" "), v(a, n, t))
    }

    function h(e, n, o) {
        return g(e, t, t, n, o)
    }

    function m(e, n) {
        if ("object" == typeof e)
            for (var t in e) L(e, t) && m(t, e[t]);
        else {
            e = e.toLowerCase();
            var o = e.split("."),
                r = _[o[0]];
            if (2 == o.length && (r = r[o[1]]), "undefined" != typeof r) return _;
            n = "function" == typeof n ? n() : n, 1 == o.length ? _[o[0]] = n : (!_[o[0]] || _[o[0]] instanceof Boolean || (_[o[0]] = new Boolean(_[o[0]])), _[o[0]][o[1]] = n), i([(n && 0 != n ? "" : "no-") + o.join("-")]), _._trigger(e, n)
        }
        return _
    }
    var y = [],
        C = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() {
                    n(t[e])
                }, 0)
            },
            addTest: function(e, n, t) {
                y.push({
                    name: e,
                    fn: n,
                    options: t
                })
            },
            addAsyncTest: function(e) {
                y.push({
                    name: null,
                    fn: e
                })
            }
        },
        _ = function() {};
    _.prototype = C, _ = new _;
    var w = [],
        T = n.documentElement,
        E = "svg" === T.nodeName.toLowerCase();
    _.addTest("canvas", function() {
        var e = s("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    });
    var x = function() {
        function e(e, n) {
            var r;
            return e ? (n && "string" != typeof n || (n = s(n || "div")), e = "on" + e, r = e in n, !r && o && (n.setAttribute || (n = s("div")), n.setAttribute(e, ""), r = "function" == typeof n[e], n[e] !== t && (n[e] = t), n.removeAttribute(e)), r) : !1
        }
        var o = !("onblur" in n.documentElement);
        return e
    }();
    C.hasEvent = x;
    var b = "Moz O ms Webkit",
        S = C._config.usePrefixes ? b.split(" ") : [];
    C._cssomPrefixes = S;
    var P = {
        elem: s("modernizr")
    };
    _._q.push(function() {
        delete P.elem
    });
    var B = {
        style: P.elem.style
    };
    _._q.unshift(function() {
        delete B.style
    });
    var O = C._config.usePrefixes ? b.toLowerCase().split(" ") : [];
    C._domPrefixes = O, C.testAllProps = g;
    var j = function(n) {
        var o, r = z.length,
            i = e.CSSRule;
        if ("undefined" == typeof i) return t;
        if (!n) return !1;
        if (n = n.replace(/^@/, ""), o = n.replace(/-/g, "_").toUpperCase() + "_RULE", o in i) return "@" + n;
        for (var s = 0; r > s; s++) {
            var a = z[s],
                f = a.toUpperCase() + "_" + o;
            if (f in i) return "@-" + a.toLowerCase() + "-" + n
        }
        return !1
    };
    C.atRule = j;
    var k = C.prefixed = function(e, n, t) {
        return 0 === e.indexOf("@") ? j(e) : (-1 != e.indexOf("-") && (e = d(e)), n ? g(e, n, t) : g(e, "pfx"))
    };
    _.addTest("forcetouch", function() {
        return x(k("mouseforcewillbegin", e, !1), e) ? MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN && MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN : !1
    });
    var z = C._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
    C._prefixes = z;
    var N = C.testStyles = u;
    _.addTest("touchevents", function() {
        var t;
        if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;
        else {
            var o = ["@media (", z.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            N(o, function(e) {
                t = 9 === e.offsetTop
            })
        }
        return t
    }), _.addTest("video", function() {
        var e = s("video"),
            n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), n.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), n.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        }
        catch (t) {}
        return n
    }), C.testAllProps = h, _.addTest("backdropfilter", h("backdropFilter")), _.addTest("csspositionsticky", function() {
        var e = "position:",
            n = "sticky",
            t = s("a"),
            o = t.style;
        return o.cssText = e + z.join(n + ";" + e).slice(0, -e.length), -1 !== o.position.indexOf(n)
    });
    var R = "CSS" in e && "supports" in e.CSS,
        U = "supportsCSS" in e;
    _.addTest("supports", R || U), _.addTest("csstransforms3d", function() {
        var e = !!h("perspective", "1px", !0),
            n = _._config.usePrefixes;
        if (e && (!n || "webkitPerspective" in T.style)) {
            var t, o = "#modernizr{width:0;height:0}";
            _.supports ? t = "@supports (perspective: 1px)" : (t = "@media (transform-3d)", n && (t += ",(-webkit-transform-3d)")), t += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", N(o + t, function(n) {
                e = 7 === n.offsetWidth && 18 === n.offsetHeight
            })
        }
        return e
    }), _.addTest("csstransitions", h("transition", "all", !0));
    var L;
    ! function() {
        var e = {}.hasOwnProperty;
        L = o(e, "undefined") || o(e.call, "undefined") ? function(e, n) {
            return n in e && o(e.constructor.prototype[n], "undefined")
        } : function(n, t) {
            return e.call(n, t)
        }
    }(), C._l = {}, C.on = function(e, n) {
        this._l[e] || (this._l[e] = []), this._l[e].push(n), _.hasOwnProperty(e) && setTimeout(function() {
            _._trigger(e, _[e])
        }, 0)
    }, C._trigger = function(e, n) {
        if (this._l[e]) {
            var t = this._l[e];
            setTimeout(function() {
                var e, o;
                for (e = 0; e < t.length; e++)(o = t[e])(n)
            }, 0), delete this._l[e]
        }
    }, _._q.push(function() {
        C.addTest = m
    }), _.addAsyncTest(function() {
        if (!_.canvas) return !1;
        var e = new Image,
            n = s("canvas"),
            t = n.getContext("2d");
        e.onload = function() {
            m("apng", function() {
                return "undefined" == typeof n.getContext ? !1 : (t.drawImage(e, 0, 0), 0 === t.getImageData(0, 0, 1, 1).data[3])
            })
        }, e.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="
    }), r(), i(w), delete C.addTest, delete C.addAsyncTest;
    for (var M = 0; M < _._q.length; M++) _._q[M]();
    e.Modernizr = _
}(window, document);