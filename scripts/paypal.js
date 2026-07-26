! function(n, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("Donation", [], e) : "object" == typeof exports ? exports.Donation = e() : n.Donation = e()
}("undefined" != typeof self ? self : this, (function() {
    return function(n) {
        var e = {};

        function t(r) {
            if (e[r]) return e[r].exports;
            var o = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return n[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }
        return t.m = n, t.c = e, t.d = function(n, e, r) {
            t.o(n, e) || Object.defineProperty(n, e, {
                enumerable: !0,
                get: r
            })
        }, t.r = function(n) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(n, "__esModule", {
                value: !0
            })
        }, t.t = function(n, e) {
            if (1 & e && (n = t(n)), 8 & e) return n;
            if (4 & e && "object" == typeof n && n && n.__esModule) return n;
            var r = Object.create(null);
            if (t.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: n
                }), 2 & e && "string" != typeof n)
                for (var o in n) t.d(r, o, function(e) {
                    return n[e]
                }.bind(null, o));
            return r
        }, t.n = function(n) {
            var e = n && n.__esModule ? function() {
                return n.default
            } : function() {
                return n
            };
            return t.d(e, "a", e), e
        }, t.o = function(n, e) {
            return {}.hasOwnProperty.call(n, e)
        }, t.p = "", t(t.s = 19)
    }([function(n, e, t) {
        "use strict";

        function r() {
            return window.navigator.mockUserAgent || window.navigator.userAgent
        }

        function o(n) {
            return void 0 === n && (n = r()), !!n.match(/Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i)
        }

        function i(n) {
            return void 0 === n && (n = r()), /Firefox/i.test(n)
        }

        function a(n) {
            return void 0 === n && (n = r()), /Opera Mini/i.test(n)
        }

        function u(n) {
            return void 0 === n && (n = r()), /Android/.test(n)
        }

        function c(n) {
            return void 0 === n && (n = r()), /iPhone|iPod|iPad/.test(n)
        }

        function s() {
            if (window.document.documentMode) try {
                var n = window.status;
                return window.status = "testIntranetMode", "testIntranetMode" === window.status && (window.status = n, !0)
            } catch (n) {
                return !1
            }
            return !1
        }

        function d(n) {
            return void 0 === n && (n = r()), !(function(n) {
                return void 0 === n && (n = r()), /(iPhone|iPod|iPad|Macintosh).*AppleWebKit(?!.*Safari)|.*WKWebView/i.test(n) || /\bwv\b/.test(n) || /Android.*Version\/(\d)\.(\d)/i.test(n)
            }(n) || function(n) {
                return void 0 === n && (n = r()), !!c(n) && (!! function(n) {
                    return void 0 === n && (n = r()), /\bGSA\b/.test(n)
                }(n) || /.+AppleWebKit(?!.*Safari)|.*WKWebView/.test(n))
            }(n) || function(n) {
                return void 0 === n && (n = r()), !!u(n) && /Version\/[\d.]+/.test(n) && !a(n)
            }(n) || a(n) || function(n) {
                return void 0 === n && (n = r()), /FxiOS/i.test(n)
            }(n) || function(n) {
                return void 0 === n && (n = r()), u(n) && i(n)
            }(n) || function(n) {
                return void 0 === n && (n = r()), /EdgiOS/i.test(n)
            }(n) || function(n) {
                return void 0 === n && (n = r()), /FBAN/.test(n) || /FBAV/.test(n)
            }(n) || function(n) {
                return void 0 === n && (n = r()), /QQBrowser/.test(n)
            }(n) || "undefined" != typeof process && process.versions && process.versions.electron || (e = r(), /Macintosh.*AppleWebKit(?!.*Safari)/i.test(e)) || !0 === window.navigator.standalone || window.matchMedia("(display-mode: standalone)").matches);
            var e
        }

        function f(n) {
            return void 0 === n && (n = r()), !(/iPhone|iPod/.test(n) || !(/iPad/.test(n) || function(n) {
                return void 0 === n && (n = r()), /Safari/.test(n) && ! function(n) {
                    return void 0 === n && (n = r()), /Chrome|Chromium|CriOS/.test(n) && !/SamsungBrowser|Silk|EdgA/.test(n)
                }(n) && !/Silk|FxiOS|EdgiOS/.test(n)
            }(n) && navigator.maxTouchPoints >= 1))
        }
        t.d(e, "I", (function() {
            return o
        })), t.d(e, "L", (function() {
            return i
        })), t.d(e, "N", (function() {
            return c
        })), t.d(e, "M", (function() {
            return s
        })), t.d(e, "mb", (function() {
            return d
        })), t.d(e, "O", (function() {
            return f
        })), t.d(e, "rb", (function() {
            return ln
        })), t.d(e, "bb", (function() {
            return pn
        })), t.d(e, "s", (function() {
            return wn
        })), t.d(e, "G", (function() {
            return vn
        })), t.d(e, "z", (function() {
            return yn
        })), t.d(e, "P", (function() {
            return gn
        })), t.d(e, "t", (function() {
            return En
        })), t.d(e, "d", (function() {
            return bn
        })), t.d(e, "w", (function() {
            return _n
        })), t.d(e, "o", (function() {
            return Sn
        })), t.d(e, "cb", (function() {
            return Fn
        })), t.d(e, "tb", (function() {
            return Cn
        })), t.d(e, "g", (function() {
            return An
        })), t.d(e, "D", (function() {
            return Tn
        })), t.d(e, "b", (function() {
            return xn
        })), t.d(e, "c", (function() {
            return Mn
        })), t.d(e, "hb", (function() {
            return Ln
        })), t.d(e, "B", (function() {
            return Wn
        })), t.d(e, "m", (function() {
            return Hn
        })), t.d(e, "K", (function() {
            return Un
        })), t.d(e, "sb", (function() {
            return zn
        })), t.d(e, "Z", (function() {
            return Bn
        })), t.d(e, "y", (function() {
            return qn
        })), t.d(e, "T", (function() {
            return Zn
        })), t.d(e, "F", (function() {
            return Kn
        })), t.d(e, "u", (function() {
            return Vn
        })), t.d(e, "v", (function() {
            return Jn
        })), t.d(e, "lb", (function() {
            return $n
        })), t.d(e, "q", (function() {
            return te
        })), t.d(e, "A", (function() {
            return Xn
        })), t.d(e, "J", (function() {
            return E
        })), t.d(e, "i", (function() {
            return O
        })), t.d(e, "h", (function() {
            return S
        })), t.d(e, "pb", (function() {
            return P
        })), t.d(e, "U", (function() {
            return T
        })), t.d(e, "V", (function() {
            return x
        })), t.d(e, "E", (function() {
            return R
        })), t.d(e, "W", (function() {
            return I
        })), t.d(e, "ab", (function() {
            return k
        })), t.d(e, "jb", (function() {
            return D
        })), t.d(e, "kb", (function() {
            return M
        })), t.d(e, "ib", (function() {
            return L
        })), t.d(e, "r", (function() {
            return W
        })), t.d(e, "qb", (function() {
            return H
        })), t.d(e, "nb", (function() {
            return U
        })), t.d(e, "Y", (function() {
            return z
        })), t.d(e, "C", (function() {
            return B
        })), t.d(e, "db", (function() {
            return q
        })), t.d(e, "gb", (function() {
            return Z
        })), t.d(e, "n", (function() {
            return K
        })), t.d(e, "p", (function() {
            return G
        })), t.d(e, "l", (function() {
            return V
        })), t.d(e, "j", (function() {
            return Y
        })), t.d(e, "e", (function() {
            return $
        })), t.d(e, "eb", (function() {
            return nn
        })), t.d(e, "H", (function() {
            return en
        })), t.d(e, "S", (function() {
            return tn
        })), t.d(e, "x", (function() {
            return rn
        })), t.d(e, "k", (function() {
            return on
        })), t.d(e, "f", (function() {
            return an
        })), t.d(e, "fb", (function() {
            return oe
        })), t.d(e, "Q", (function() {
            return ie
        })), t.d(e, "R", (function() {
            return ae
        })), t.d(e, "ob", (function() {
            return se
        })), t.d(e, "X", (function() {
            return de
        })), t.d(e, "a", (function() {
            return g
        }));
        var l, p = t(10),
            h = t(1),
            w = t(5),
            m = t(2),
            v = t(12),
            y = t(16),
            g = {
                UID: "data-uid"
            };

        function E(n) {
            var e = !1;
            try {
                (n instanceof window.Element || null !== n && "object" == typeof n && 1 === n.nodeType && "object" == typeof n.style && "object" == typeof n.ownerDocument) && (e = !0)
            } catch (n) {}
            return e
        }

        function b(n) {
            return n.name || n.__name__ || n.displayName || "anonymous"
        }

        function _(n, e) {
            try {
                delete n.name, n.name = e
            } catch (n) {}
            return n.__name__ = n.displayName = e, n
        }

        function O(n) {
            if ("function" == typeof btoa) return btoa(encodeURIComponent(n).replace(/%([0-9A-F]{2})/g, (function(n, e) {
                return String.fromCharCode(parseInt(e, 16))
            }))).replace(/[=]/g, "");
            if ("undefined" != typeof Buffer) return Buffer.from(n, "utf8").toString("base64").replace(/[=]/g, "");
            throw new Error("Can not find window.btoa or Buffer")
        }

        function S(n) {
            if ("function" == typeof atob) return decodeURIComponent([].map.call(atob(n), (function(n) {
                return "%" + ("00" + n.charCodeAt(0).toString(16)).slice(-2)
            })).join(""));
            if ("undefined" != typeof Buffer) return Buffer.from(n, "base64").toString("utf8");
            throw new Error("Can not find window.atob or Buffer")
        }

        function P() {
            var n = "0123456789abcdef";
            return "uid_" + "xxxxxxxxxx".replace(/./g, (function() {
                return n.charAt(Math.floor(Math.random() * n.length))
            })) + "_" + O((new Date).toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
        }

        function N() {
            if ("undefined" != typeof window) return window;
            if ("undefined" != typeof window) return window;
            if ("undefined" != typeof global) return global;
            throw new Error("No global found")
        }

        function F(n) {
            try {
                return JSON.stringify([].slice.call(n), (function(n, e) {
                    return "function" == typeof e ? "memoize[" + function(n) {
                        if (l = l || new v.a, null == n || "object" != typeof n && "function" != typeof n) throw new Error("Invalid object");
                        var e = l.get(n);
                        return e || (e = typeof n + ":" + P(), l.set(n, e)), e
                    }(e) + "]" : E(e) ? {} : e
                }))
            } catch (n) {
                throw new Error("Arguments not serializable -- can not be used to memoize")
            }
        }

        function C() {
            return {}
        }
        var j = 0,
            A = 0;

        function T(n, e) {
            void 0 === e && (e = {});
            var t, r, o = e.thisNamespace,
                i = void 0 !== o && o,
                a = e.time,
                u = j;
            j += 1;
            var c = function() {
                for (var e = arguments.length, o = new Array(e), c = 0; c < e; c++) o[c] = arguments[c];
                var s, d;
                u < A && (t = null, r = null, u = j, j += 1), s = i ? (r = r || new v.a).getOrSet(this, C) : t = t || {};
                try {
                    d = F(o)
                } catch (e) {
                    return n.apply(this, arguments)
                }
                var f = s[d];
                if (f && a && Date.now() - f.time < a && (delete s[d], f = null), f) return f.value;
                var l = Date.now(),
                    p = n.apply(this, arguments);
                return s[d] = {
                    time: l,
                    value: p
                }, p
            };
            return c.reset = function() {
                t = null, r = null
            }, _(c, (e.name || b(n)) + "::memoized")
        }

        function x(n) {
            var e = {};

            function t() {
                for (var t = arguments, r = this, o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                var u = F(i);
                return e.hasOwnProperty(u) || (e[u] = w.a.try((function() {
                    return n.apply(r, t)
                })).finally((function() {
                    delete e[u]
                }))), e[u]
            }
            return t.reset = function() {
                e = {}
            }, _(t, b(n) + "::promiseMemoized")
        }

        function R(n, e, t) {
            void 0 === t && (t = []);
            var r = n.__inline_memoize_cache__ = n.__inline_memoize_cache__ || {},
                o = F(t);
            return r.hasOwnProperty(o) ? r[o] : r[o] = e.apply(void 0, t)
        }

        function I() {}

        function k(n) {
            var e = !1;
            return _((function() {
                if (!e) return e = !0, n.apply(this, arguments)
            }), b(n) + "::once")
        }

        function D(n, e) {
            if (void 0 === e && (e = 1), e >= 3) return "stringifyError stack overflow";
            try {
                if (!n) return "<unknown error: " + {}.toString.call(n) + ">";
                if ("string" == typeof n) return n;
                if (n instanceof Error) {
                    var t = n && n.stack,
                        r = n && n.message;
                    if (t && r) return -1 !== t.indexOf(r) ? t : r + "\n" + t;
                    if (t) return t;
                    if (r) return r
                }
                return n && n.toString && "function" == typeof n.toString ? n.toString() : {}.toString.call(n)
            } catch (n) {
                return "Error while stringifying error: " + D(n, e + 1)
            }
        }

        function M(n) {
            var e = "<unknown error: " + {}.toString.call(n) + ">";
            return n ? n instanceof Error ? n.message || e : "string" == typeof n.message && n.message || e : e
        }

        function L(n) {
            return "string" == typeof n ? n : n && n.toString && "function" == typeof n.toString ? n.toString() : {}.toString.call(n)
        }

        function W(n, e) {
            if (!e) return n;
            if (Object.assign) return Object.assign(n, e);
            for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
            return n
        }

        function H(n) {
            if (Object.values) return Object.values(n);
            var e = [];
            for (var t in n) n.hasOwnProperty(t) && e.push(n[t]);
            return e
        }

        function U(n) {
            return "data:image/svg+xml;base64," + O(n)
        }

        function z(n, e) {
            void 0 === e && (e = Boolean);
            var t = {};
            for (var r in n) n.hasOwnProperty(r) && e(n[r], r) && (t[r] = n[r]);
            return t
        }

        function B(n) {
            return n
        }

        function q(n, e) {
            var t, r;
            return void 0 === e && (e = 50), _((function() {
                r && clearTimeout(r);
                var o = t = t || new w.a;
                return r = setTimeout((function() {
                    t = null, r = null, w.a.try(n).then((function(n) {
                        o.resolve(n)
                    }), (function(n) {
                        o.reject(n)
                    }))
                }), e), o
            }), b(n) + "::promiseDebounced")
        }

        function Z(n, e) {
            var t;
            return function r() {
                t = setTimeout((function() {
                    n(), r()
                }), e)
            }(), {
                cancel: function() {
                    clearTimeout(t)
                }
            }
        }

        function K(n, e, t) {
            for (var r in void 0 === e && (e = ""), void 0 === t && (t = {}), e = e ? e + "." : e, n) n.hasOwnProperty(r) && null != n[r] && "function" != typeof n[r] && (n[r] && Array.isArray(n[r]) && n[r].length && n[r].every((function(n) {
                return "object" != typeof n
            })) ? t["" + e + r + "[]"] = n[r].join(",") : n[r] && "object" == typeof n[r] ? t = K(n[r], "" + e + r, t) : t["" + e + r] = n[r].toString());
            return t
        }

        function G() {
            var n = {},
                e = {},
                t = {
                    on: function(n, t) {
                        var r = e[n] = e[n] || [];
                        r.push(t);
                        var o = !1;
                        return {
                            cancel: function() {
                                o || (o = !0, r.splice(r.indexOf(t), 1))
                            }
                        }
                    },
                    once: function(n, e) {
                        var r = t.on(n, (function() {
                            r.cancel(), e()
                        }));
                        return r
                    },
                    trigger: function(n) {
                        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
                        var i = e[n],
                            a = [];
                        if (i)
                            for (var u = function() {
                                    var n = i[c];
                                    a.push(w.a.try((function() {
                                        return n.apply(void 0, r)
                                    })))
                                }, c = 0; c < i.length; c++) u();
                        return w.a.all(a).then(I)
                    },
                    triggerOnce: function(e) {
                        if (n[e]) return w.a.resolve();
                        n[e] = !0;
                        for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
                        return t.trigger.apply(t, [e].concat(o))
                    },
                    reset: function() {
                        e = {}
                    }
                };
            return t
        }

        function V(n) {
            return n.replace(/-([a-z])/g, (function(n) {
                return n[1].toUpperCase()
            }))
        }

        function Y(n) {
            return n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()
        }

        function J(n, e, t) {
            if (Array.isArray(n)) {
                if ("number" != typeof e) throw new TypeError("Array key must be number")
            } else if ("object" == typeof n && null !== n && "string" != typeof e) throw new TypeError("Object key must be string");
            Object.defineProperty(n, e, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    delete n[e];
                    var r = t();
                    return n[e] = r, r
                },
                set: function(t) {
                    delete n[e], n[e] = t
                }
            })
        }

        function $(n) {
            return [].slice.call(n)
        }

        function X(n) {
            return "object" == typeof(e = n) && null !== e && "[object Object]" === {}.toString.call(n);
            var e
        }

        function Q(n) {
            if (!X(n)) return !1;
            var e = n.constructor;
            if ("function" != typeof e) return !1;
            var t = e.prototype;
            return !!X(t) && !!t.hasOwnProperty("isPrototypeOf")
        }

        function nn(n, e, t) {
            if (void 0 === t && (t = ""), Array.isArray(n)) {
                for (var r = n.length, o = [], i = function(r) {
                        J(o, r, (function() {
                            var o = t ? t + "." + r : "" + r,
                                i = e(n[r], r, o);
                            return (Q(i) || Array.isArray(i)) && (i = nn(i, e, o)), i
                        }))
                    }, a = 0; a < r; a++) i(a);
                return o
            }
            if (Q(n)) {
                var u = {},
                    c = function(r) {
                        if (!n.hasOwnProperty(r)) return 1;
                        J(u, r, (function() {
                            var o = t ? t + "." + r : "" + r,
                                i = e(n[r], r, o);
                            return (Q(i) || Array.isArray(i)) && (i = nn(i, e, o)), i
                        }))
                    };
                for (var s in n) c(s);
                return u
            }
            throw new Error("Pass an object or array")
        }

        function en(n) {
            return null != n
        }

        function tn(n) {
            return "[object RegExp]" === {}.toString.call(n)
        }

        function rn(n, e, t) {
            if (n.hasOwnProperty(e)) return n[e];
            var r = t();
            return n[e] = r, r
        }

        function on(n) {
            var e, t = [],
                r = !1,
                o = {
                    set: function(e, t) {
                        return r || (n[e] = t, o.register((function() {
                            delete n[e]
                        }))), t
                    },
                    register: function(n) {
                        var o = k((function() {
                            return n(e)
                        }));
                        return r ? n(e) : t.push(o), {
                            cancel: function() {
                                var n = t.indexOf(o); - 1 !== n && t.splice(n, 1)
                            }
                        }
                    },
                    all: function(n) {
                        e = n;
                        var o = [];
                        for (r = !0; t.length;) {
                            var i = t.shift();
                            o.push(i())
                        }
                        return w.a.all(o).then(I)
                    }
                };
            return o
        }

        function an(n, e) {
            if (null == e) throw new Error("Expected " + n + " to be present");
            return e
        }
        T.clear = function() {
            A = j
        }, T(H);
        var un = function(n) {
            function e(e) {
                var t;
                return (t = n.call(this, e) || this).name = t.constructor.name, "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(t, t.constructor) : t.stack = new Error(e).stack, t
            }
            return Object(p.a)(e, n), e
        }(Object(y.a)(Error));

        function cn() {
            var n = document.body;
            if (!n) throw new Error("Body element not found");
            return n
        }

        function sn() {
            return Boolean(document.body) && "complete" === document.readyState
        }

        function dn() {
            return Boolean(document.body) && "interactive" === document.readyState
        }

        function fn(n) {
            return encodeURIComponent(n)
        }

        function ln() {
            return R(ln, (function() {
                return new w.a((function(n) {
                    sn() && n(), window.addEventListener("load", (function() {
                        return n()
                    }))
                }))
            }))
        }

        function pn(n) {
            return R(pn, (function() {
                var e = {};
                if (!n) return e;
                if (-1 === n.indexOf("=")) return e;
                for (var t = 0, r = n.split("&"); t < r.length; t++) {
                    var o = r[t];
                    (o = o.split("="))[0] && o[1] && (e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]))
                }
                return e
            }), [n])
        }

        function hn(n, e) {
            return void 0 === e && (e = {}), e && Object.keys(e).length ? (void 0 === (t = Object(h.a)({}, pn(n), e)) && (t = {}), Object.keys(t).filter((function(n) {
                return "string" == typeof t[n] || "boolean" == typeof t[n]
            })).map((function(n) {
                var e = t[n];
                if ("string" != typeof e && "boolean" != typeof e) throw new TypeError("Invalid type for query");
                return fn(n) + "=" + fn(e.toString())
            })).join("&")) : n;
            var t
        }

        function wn(n, e) {
            var t, r, o = e.query || {},
                i = e.hash || {},
                a = n.split("#");
            r = a[1];
            var u = (t = a[0]).split("?");
            t = u[0];
            var c = hn(u[1], o),
                s = hn(r, i);
            return c && (t = t + "?" + c), s && (t = t + "#" + s), t
        }

        function mn() {
            return R(mn, (function() {
                var n = window.performance;
                if (n && n.now && n.timing && n.timing.connectEnd && n.timing.navigationStart && Math.abs(n.now() - Date.now()) > 1e3 && n.now() - (n.timing.connectEnd - n.timing.navigationStart) > 0) return n
            }))
        }

        function vn() {
            return "undefined" != typeof window && void 0 !== window.location
        }

        function yn(n) {
            var e = n.host,
                t = void 0 === e ? window.location.host : e,
                r = n.path,
                o = n.reverse,
                i = void 0 !== o && o;
            return R(yn, (function() {
                var n = "" + t + r,
                    e = [].slice.call(document.getElementsByTagName("script"));
                i && e.reverse();
                for (var o = 0; o < e.length; o++) {
                    var a = e[o];
                    if (a.src && a.src.replace(/^https?:\/\//, "").split("?")[0] === n) return a
                }
            }), [r])
        }

        function gn() {
            return R(gn, (function() {
                try {
                    if ("undefined" == typeof window) return !1;
                    if (window.localStorage) {
                        var n = Math.random().toString();
                        window.localStorage.setItem("__test__localStorage__", n);
                        var e = window.localStorage.getItem("__test__localStorage__");
                        if (window.localStorage.removeItem("__test__localStorage__"), n === e) return !0
                    }
                } catch (n) {}
                return !1
            }))
        }

        function En() {
            var n = window.navigator,
                e = n.languages ? [].concat(n.languages) : [];
            return n.language && e.push(n.language), n.userLanguage && e.push(n.userLanguage), e.map((function(n) {
                if (n && n.match(/^[a-z]{2}[-_][A-Z]{2}$/)) {
                    var e = n.split(/[-_]/);
                    return {
                        country: e[1],
                        lang: e[0]
                    }
                }
                return n && n.match(/^[a-z]{2}$/) ? {
                    lang: n
                } : null
            })).filter(Boolean)
        }

        function bn(n, e) {
            n.appendChild(e)
        }

        function _n(n, e) {
            return void 0 === e && (e = document), E(n) ? n : "string" == typeof n ? e.querySelector(n) : void 0
        }

        function On(n, e) {
            void 0 === e && (e = document);
            var t = _n(n, e);
            if (t) return t;
            throw new Error("Can not find element: " + L(n))
        }

        function Sn(n) {
            return new w.a((function(e, t) {
                var r = L(n),
                    o = _n(n);
                if (o) return e(o);
                if (sn()) return t(new Error("Document is ready and element " + r + " does not exist"));
                var i = setInterval((function() {
                    return (o = _n(n)) ? (e(o), void clearInterval(i)) : sn() ? (clearInterval(i), t(new Error("Document is ready and element " + r + " does not exist"))) : void 0
                }), 10)
            }))
        }
        T((function() {
            return new w.a((function(n) {
                if (sn() || dn()) return n();
                var e = setInterval((function() {
                    if (sn() || dn()) return clearInterval(e), n()
                }), 10)
            }))
        }));
        var Pn, Nn = function(n) {
            function e() {
                return n.apply(this, arguments) || this
            }
            return Object(p.a)(e, n), e
        }(un);

        function Fn(n, e) {
            var t = (e = e || {}).closeOnUnload,
                r = void 0 === t ? 1 : t,
                o = e.name,
                i = void 0 === o ? "" : o,
                a = e.width,
                u = e.height,
                c = 0,
                s = 0;
            a && (window.outerWidth ? s = Math.round((window.outerWidth - a) / 2) + window.screenX : window.screen.width && (s = Math.round((window.screen.width - a) / 2))), u && (window.outerHeight ? c = Math.round((window.outerHeight - u) / 2) + window.screenY : window.screen.height && (c = Math.round((window.screen.height - u) / 2))), delete e.closeOnUnload, delete e.name, a && u && (e = Object(h.a)({
                top: c,
                left: s,
                width: a,
                height: u,
                status: 1,
                toolbar: 0,
                menubar: 0,
                resizable: 1,
                scrollbars: 1
            }, e));
            var d, f, l = Object.keys(e).map((function(n) {
                if (null != e[n]) return n + "=" + L(e[n])
            })).filter(Boolean).join(",");
            try {
                d = window.open(n, i, l)
            } catch (f) {
                throw new Nn("Can not open popup window - " + (f.stack || f.message))
            }
            if (Object(m.y)(d)) throw new Nn("Can not open popup window - blocked");
            return r && window.addEventListener("unload", (function() {
                return d.close()
            })), d
        }

        function Cn(n, e) {
            var t = e.tagName.toLowerCase();
            if ("html" !== t) throw new Error("Expected element to be html, got " + t);
            for (var r = n.document.documentElement, o = 0, i = $(r.children); o < i.length; o++) r.removeChild(i[o]);
            for (var a = 0, u = $(e.children); a < u.length; a++) r.appendChild(u[a])
        }

        function jn(n) {
            if ((Pn = Pn || new v.a).has(n)) {
                var e = Pn.get(n);
                if (e) return e
            }
            var t = new w.a((function(e, t) {
                n.addEventListener("load", (function() {
                    Object(m.z)(n), e(n)
                })), n.addEventListener("error", (function(r) {
                    n.contentWindow ? e(n) : t(r)
                }))
            }));
            return Pn.set(n, t), t
        }

        function An(n) {
            return jn(n).then((function(n) {
                if (!n.contentWindow) throw new Error("Could not find window in iframe");
                return n.contentWindow
            }))
        }

        function Tn(n, e) {
            void 0 === n && (n = {});
            var t = n.attributes || {},
                r = n.style || {},
                o = function(n, e, t) {
                    void 0 === n && (n = "div"), void 0 === e && (e = {}), n = n.toLowerCase();
                    var r, o, i, a = document.createElement(n);
                    if (e.style && W(a.style, e.style), e.class && (a.className = e.class.join(" ")), e.id && a.setAttribute("id", e.id), e.attributes)
                        for (var u = 0, c = Object.keys(e.attributes); u < c.length; u++) {
                            var s = c[u];
                            a.setAttribute(s, e.attributes[s])
                        }
                    if (e.styleSheet && (r = a, o = e.styleSheet, void 0 === i && (i = window.document), r.styleSheet ? r.styleSheet.cssText = o : r.appendChild(i.createTextNode(o))), e.html) {
                        if ("iframe" === n) throw new Error("Iframe html can not be written unless container provided and iframe in DOM");
                        a.innerHTML = e.html
                    }
                    return a
                }("iframe", {
                    attributes: Object(h.a)({
                        allowTransparency: "true"
                    }, t),
                    style: Object(h.a)({
                        backgroundColor: "transparent",
                        border: "none"
                    }, r),
                    html: n.html,
                    class: n.class
                }),
                i = window.navigator.userAgent.match(/MSIE|Edge/i);
            return o.hasAttribute("id") || o.setAttribute("id", P()), jn(o), e && On(e).appendChild(o), (n.url || i) && o.setAttribute("src", n.url || "about:blank"), o
        }

        function xn(n, e, t) {
            return n.addEventListener(e, t), {
                cancel: function() {
                    n.removeEventListener(e, t)
                }
            }
        }

        function Rn(n, e, t) {
            t = k(t);
            for (var r = 0; r < e.length; r++) n.addEventListener(e[r], t);
            return {
                cancel: k((function() {
                    for (var r = 0; r < e.length; r++) n.removeEventListener(e[r], t)
                }))
            }
        }
        var In = ["webkit", "moz", "ms", "o"],
            kn = ["animationstart", "webkitAnimationStart", "oAnimationStart", "MSAnimationStart"],
            Dn = ["animationend", "webkitAnimationEnd", "oAnimationEnd", "MSAnimationEnd"];

        function Mn(n, e, t, r) {
            return void 0 === r && (r = 1e3), new w.a((function(o, i) {
                var a = On(n);
                if (!a) return o();
                var u, c, s, d, f = !1;

                function l() {
                    clearTimeout(u), clearTimeout(c), s.cancel(), d.cancel()
                }
                s = Rn(a, kn, (function(n) {
                        n.target === a && n.animationName === e && (clearTimeout(u), n.stopPropagation(), s.cancel(), f = !0, c = setTimeout((function() {
                            l(), o()
                        }), r))
                    })), d = Rn(a, Dn, (function(n) {
                        if (n.target === a && n.animationName === e) return l(), "string" == typeof n.animationName && n.animationName !== e ? i("Expected animation name to be " + e + ", found " + n.animationName) : o()
                    })),
                    function(n, e, t) {
                        n.style[e] = t;
                        for (var r = Y(e), o = 0; o < In.length; o++) n.style["" + In[o] + r] = t
                    }(a, "animationName", e), u = setTimeout((function() {
                        if (!f) return l(), o()
                    }), 200), t && t(l)
            }))
        }

        function Ln(n) {
            n.style.setProperty("display", "")
        }

        function Wn(n) {
            n.style.setProperty("display", "none", "important")
        }

        function Hn(n) {
            n && n.parentNode && n.parentNode.removeChild(n)
        }

        function Un(n) {
            return !(n && n.parentNode && n.ownerDocument && n.ownerDocument.documentElement && n.ownerDocument.documentElement.contains(n))
        }

        function zn(n, e) {
            e = k(e);
            var t, r, o, i = !1,
                a = [],
                u = function() {
                    i = !0;
                    for (var n = 0; n < a.length; n++) a[n].disconnect();
                    t && t.cancel(), o && o.removeEventListener("unload", c), r && Hn(r)
                },
                c = function() {
                    i || (e(), u())
                };
            if (Un(n)) return c(), {
                cancel: u
            };
            if (window.MutationObserver)
                for (var s = n.parentElement; s;) {
                    var d = new window.MutationObserver((function() {
                        Un(n) && c()
                    }));
                    d.observe(s, {
                        childList: !0
                    }), a.push(d), s = s.parentElement
                }
            return (r = document.createElement("iframe")).setAttribute("name", "__detect_close_" + P() + "__"), r.style.display = "none", An(r).then((function(n) {
                (o = Object(m.c)(n)).addEventListener("unload", c)
            })), n.appendChild(r), t = Z((function() {
                Un(n) && c()
            }), 1e3), {
                cancel: u
            }
        }

        function Bn(n, e, t) {
            var r = void 0 === t ? {} : t,
                o = r.width,
                i = void 0 === o || o,
                a = r.height,
                u = void 0 === a || a,
                c = r.interval,
                s = void 0 === c ? 100 : c,
                d = r.win,
                f = void 0 === d ? window : d,
                l = n.offsetWidth,
                p = n.offsetHeight,
                h = !1;
            e({
                width: l,
                height: p
            });
            var w, m, v = function() {
                if (!h && function(n) {
                        return Boolean(n.offsetWidth || n.offsetHeight || n.getClientRects().length)
                    }(n)) {
                    var t = n.offsetWidth,
                        r = n.offsetHeight;
                    (i && t !== l || u && r !== p) && e({
                        width: t,
                        height: r
                    }), l = t, p = r
                }
            };
            return f.addEventListener("resize", v), void 0 !== f.ResizeObserver ? ((w = new f.ResizeObserver(v)).observe(n), m = Z(v, 10 * s)) : void 0 !== f.MutationObserver ? ((w = new f.MutationObserver(v)).observe(n, {
                attributes: !0,
                childList: !0,
                subtree: !0,
                characterData: !1
            }), m = Z(v, 10 * s)) : m = Z(v, s), {
                cancel: function() {
                    h = !0, w.disconnect(), window.removeEventListener("resize", v), m.cancel()
                }
            }
        }

        function qn(n) {
            var e = mn();
            if (e && "function" == typeof e.getEntries)
                for (var t = e.getEntries(), r = 0; r < t.length; r++) {
                    var o = t[r];
                    if (o && o.name && 0 === o.name.indexOf(n) && "number" == typeof o.duration) return Math.floor(o.duration)
                }
        }

        function Zn(n) {
            for (; n.parentNode;) n = n.parentNode;
            return "[object ShadowRoot]" === n.toString()
        }

        function Kn(n) {
            var e = function(n) {
                var e = function(n) {
                    for (; n.parentNode;) n = n.parentNode;
                    if (Zn(n)) return n
                }(n);
                if (e && e.host) return e.host
            }(n);
            if (!e) throw new Error("Element is not in shadow dom");
            var t = "shadow-slot-" + P(),
                r = document.createElement("slot");
            r.setAttribute("name", t), n.appendChild(r);
            var o = document.createElement("div");
            return o.setAttribute("slot", t), e.appendChild(o), Zn(e) ? Kn(o) : o
        }
        var Gn = "undefined" != typeof document ? document.currentScript : null,
            Vn = T((function() {
                if (Gn) return Gn;
                if (Gn = function() {
                        try {
                            var n = function() {
                                    try {
                                        throw new Error("_")
                                    } catch (n) {
                                        return n.stack || ""
                                    }
                                }(),
                                e = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(n),
                                t = e && e[1];
                            if (!t) return;
                            for (var r = 0, o = [].slice.call(document.getElementsByTagName("script")).reverse(); r < o.length; r++) {
                                var i = o[r];
                                if (i.src && i.src === t) return i
                            }
                        } catch (n) {}
                    }()) return Gn;
                throw new Error("Can not determine current script")
            })),
            Yn = P(),
            Jn = T((function() {
                var n;
                try {
                    n = Vn()
                } catch (n) {
                    return Yn
                }
                var e = n.getAttribute(g.UID);
                if (e && "string" == typeof e) return e;
                if ((e = n.getAttribute(g.UID + "-auto")) && "string" == typeof e) return e;
                if (n.src) {
                    var t = function(n) {
                        for (var e = "", t = 0; t < n.length; t++) {
                            var r = n[t].charCodeAt(0) * t;
                            n[t + 1] && (r += n[t + 1].charCodeAt(0) * (t - 1)), e += String.fromCharCode(97 + Math.abs(r) % 26)
                        }
                        return e
                    }(JSON.stringify({
                        src: n.src,
                        dataset: n.dataset
                    }));
                    e = "uid_" + t.slice(t.length - 30)
                } else e = P();
                return n.setAttribute(g.UID + "-auto", e), e
            }));

        function $n(n) {
            var e = n.url,
                t = n.target,
                r = n.body,
                o = n.method,
                i = void 0 === o ? "post" : o,
                a = document.createElement("form");
            if (a.setAttribute("target", t), a.setAttribute("method", i), a.setAttribute("action", e), a.style.display = "none", r)
                for (var u = 0, c = Object.keys(r); u < c.length; u++) {
                    var s, d = c[u],
                        f = document.createElement("input");
                    f.setAttribute("name", d), f.setAttribute("value", null == (s = r[d]) ? void 0 : s.toString()), a.appendChild(f)
                }
            cn().appendChild(a), a.submit(), cn().removeChild(a)
        }

        function Xn(n) {
            var e = n.name,
                t = n.lifetime,
                r = void 0 === t ? 12e5 : t,
                o = n.stickySessionId;
            return R(Xn, (function() {
                var n, t = "__" + e + "_storage__",
                    i = P();

                function a(e) {
                    var r, o = gn();
                    if (n && (r = n), !r && o) {
                        var a = window.localStorage.getItem(t);
                        a && (r = JSON.parse(a))
                    }
                    r || (r = N()[t]), r || (r = {
                        id: i
                    }), r.id || (r.id = i), n = r;
                    var u = e(r);
                    return o ? window.localStorage.setItem(t, JSON.stringify(r)) : N()[t] = r, n = null, u
                }

                function u() {
                    return a((function(n) {
                        return n.id
                    }))
                }

                function c(n) {
                    return a((function(e) {
                        var t = e.__session__,
                            i = Date.now();
                        return t && i - t.created > r && (t = null), t || (t = {
                            guid: o || P(),
                            created: i
                        }), e.__session__ = t, n(t)
                    }))
                }
                return {
                    getState: a,
                    getID: u,
                    isStateFresh: function() {
                        return u() === i
                    },
                    getSessionState: function(n) {
                        return c((function(e) {
                            return e.state = e.state || {}, n(e.state)
                        }))
                    },
                    getSessionID: function() {
                        return c((function(n) {
                            return n.guid
                        }))
                    }
                }
            }), [{
                name: e,
                lifetime: r
            }])
        }

        function Qn() {
            return Xn({
                name: "belter_experiment"
            })
        }

        function ne(n) {
            return Qn().getSessionState((function(e) {
                return e.loggedBeacons = e.loggedBeacons || [], -1 === e.loggedBeacons.indexOf(n) && (e.loggedBeacons.push(n), !0)
            }))
        }

        function ee(n) {
            return Math.floor(Math.random() * n)
        }

        function te(n) {
            var e, t = n.name,
                r = n.sample,
                o = void 0 === r ? 50 : r,
                i = n.logTreatment,
                a = void 0 === i ? I : i,
                u = n.logCheckpoint,
                c = void 0 === u ? I : u,
                s = n.sticky,
                d = void 0 === s || s ? function(n) {
                    return Qn().getState((function(e) {
                        return e.throttlePercentiles = e.throttlePercentiles || {}, e.throttlePercentiles[n] = e.throttlePercentiles[n] || ee(100), e.throttlePercentiles[n]
                    }))
                }(t) : ee(100),
                f = t + "_" + (e = d < o ? "test" : o >= 50 || o <= d && d < 2 * o ? "control" : "throttle"),
                l = !1,
                p = !1;
            try {
                window.localStorage && window.localStorage.getItem(t) && (p = !0)
            } catch (n) {}
            var h = {
                isEnabled: function() {
                    return "test" === e || p
                },
                isDisabled: function() {
                    return "test" !== e && !p
                },
                getTreatment: function() {
                    return f
                },
                log: function(n, e) {
                    return void 0 === e && (e = {}), l ? (ne(f + "_" + JSON.stringify(e)) && a({
                        name: t,
                        treatment: f,
                        payload: e,
                        throttle: d
                    }), ne(f + "_" + n + "_" + JSON.stringify(e)) && c({
                        name: t,
                        treatment: f,
                        checkpoint: n,
                        payload: e,
                        throttle: d
                    }), h) : h
                },
                logStart: function(n) {
                    return void 0 === n && (n = {}), l = !0, h.log("start", n)
                },
                logComplete: function(n) {
                    return void 0 === n && (n = {}), h.log("complete", n)
                }
            };
            return h
        }
        var re = [];

        function oe(n) {
            var e = n.url,
                t = n.method,
                r = void 0 === t ? "get" : t,
                o = n.headers,
                i = void 0 === o ? {} : o,
                a = n.json,
                u = n.data,
                c = n.body,
                s = n.win,
                d = void 0 === s ? window : s,
                f = n.timeout,
                l = void 0 === f ? 0 : f;
            return new w.a((function(n, t) {
                if (a && u || a && c || u && a) throw new Error("Only options.json or options.data or options.body should be passed");
                for (var o = {}, s = 0, f = Object.keys(i); s < f.length; s++) {
                    var p = f[s];
                    o[p.toLowerCase()] = i[p]
                }
                a ? o["content-type"] = o["content-type"] || "application/json" : (u || c) && (o["content-type"] = o["content-type"] || "application/x-www-form-urlencoded; charset=utf-8"), o.accept = o.accept || "application/json";
                for (var h = 0; h < re.length; h++)
                    for (var w = (0, re[h])(), m = 0, v = Object.keys(w); m < v.length; m++) {
                        var y = v[m];
                        o[y.toLowerCase()] = w[y]
                    }
                var g = new d.XMLHttpRequest;
                for (var E in g.addEventListener("load", (function() {
                        var o = function(n) {
                            void 0 === n && (n = "");
                            for (var e = {}, t = 0, r = n.trim().split("\n"); t < r.length; t++) {
                                var o = r[t].split(":"),
                                    i = o[0],
                                    a = o.slice(1);
                                e[i.toLowerCase()] = a.join(":").trim()
                            }
                            return e
                        }(this.getAllResponseHeaders());
                        if (!this.status) return t(new Error("Request to " + r.toLowerCase() + " " + e + " failed: no response status code."));
                        var i = o["content-type"],
                            a = i && (0 === i.indexOf("application/json") || 0 === i.indexOf("text/json")),
                            u = this.responseText;
                        try {
                            u = JSON.parse(u)
                        } catch (n) {
                            if (a) return t(new Error("Invalid json: " + this.responseText + "."))
                        }
                        return n({
                            status: this.status,
                            headers: o,
                            body: u
                        })
                    }), !1), g.addEventListener("error", (function(n) {
                        t(new Error("Request to " + r.toLowerCase() + " " + e + " failed: " + n.toString() + "."))
                    }), !1), g.open(r, e, !0), o) o.hasOwnProperty(E) && g.setRequestHeader(E, o[E]);
                a ? c = JSON.stringify(a) : u && (c = Object.keys(u).map((function(n) {
                    return encodeURIComponent(n) + "=" + (u ? encodeURIComponent(u[n]) : "")
                })).join("&")), g.timeout = l, g.ontimeout = function() {
                    t(new Error("Request to " + r.toLowerCase() + " " + e + " has timed out"))
                }, g.send(c)
            }))
        }

        function ie(n) {
            return "string" == typeof n && /^[0-9]+%$/.test(n)
        }

        function ae(n) {
            return "string" == typeof n && /^[0-9]+px$/.test(n)
        }

        function ue(n) {
            if ("number" == typeof n) return n;
            var e = n.match(/^([0-9]+)(px|%)$/);
            if (!e) throw new Error("Could not match css value from " + n);
            return parseInt(e[1], 10)
        }

        function ce(n) {
            return ue(n) + "px"
        }

        function se(n) {
            return "number" == typeof n ? ce(n) : ie(n) ? n : ce(n)
        }

        function de(n, e) {
            if ("number" == typeof n) return n;
            if (ie(n)) return parseInt(e * ue(n) / 100, 10);
            if (ae(n)) return ue(n);
            throw new Error("Can not normalize dimension: " + n)
        }
    }, function(n, e, t) {
        "use strict";

        function r() {
            return (r = Object.assign || function(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = arguments[e];
                    for (var r in t)({}).hasOwnProperty.call(t, r) && (n[r] = t[r])
                }
                return n
            }).apply(this, arguments)
        }
        t.d(e, "a", (function() {
            return r
        }))
    }, function(n, e, t) {
        "use strict";

        function r(n) {
            return "[object RegExp]" === {}.toString.call(n)
        }
        t.d(e, "o", (function() {
            return d
        })), t.d(e, "n", (function() {
            return f
        })), t.d(e, "i", (function() {
            return h
        })), t.d(e, "r", (function() {
            return w
        })), t.d(e, "u", (function() {
            return m
        })), t.d(e, "c", (function() {
            return v
        })), t.d(e, "f", (function() {
            return _
        })), t.d(e, "w", (function() {
            return O
        })), t.d(e, "y", (function() {
            return N
        })), t.d(e, "z", (function() {
            return F
        })), t.d(e, "p", (function() {
            return C
        })), t.d(e, "k", (function() {
            return j
        })), t.d(e, "e", (function() {
            return A
        })), t.d(e, "t", (function() {
            return T
        })), t.d(e, "g", (function() {
            return x
        })), t.d(e, "q", (function() {
            return R
        })), t.d(e, "h", (function() {
            return k
        })), t.d(e, "m", (function() {
            return D
        })), t.d(e, "v", (function() {
            return M
        })), t.d(e, "A", (function() {
            return L
        })), t.d(e, "D", (function() {
            return W
        })), t.d(e, "j", (function() {
            return H
        })), t.d(e, "C", (function() {
            return U
        })), t.d(e, "x", (function() {
            return z
        })), t.d(e, "s", (function() {
            return B
        })), t.d(e, "B", (function() {
            return q
        })), t.d(e, "l", (function() {
            return Z
        })), t.d(e, "d", (function() {
            return K
        })), t.d(e, "a", (function() {
            return o
        })), t.d(e, "b", (function() {
            return i
        }));
        var o = {
                MOCK: "mock:",
                FILE: "file:",
                ABOUT: "about:"
            },
            i = {
                IFRAME: "iframe",
                POPUP: "popup"
            },
            a = "Call was rejected by callee.\r\n";

        function u(n) {
            return void 0 === n && (n = window), n.location.protocol
        }

        function c(n) {
            if (void 0 === n && (n = window), n.mockDomain) {
                var e = n.mockDomain.split("//")[0];
                if (e) return e
            }
            return u(n)
        }

        function s(n) {
            return void 0 === n && (n = window), c(n) === o.ABOUT
        }

        function d(n) {
            if (void 0 === n && (n = window), n) try {
                if (n.parent && n.parent !== n) return n.parent
            } catch (n) {}
        }

        function f(n) {
            if (void 0 === n && (n = window), n && !d(n)) try {
                return n.opener
            } catch (n) {}
        }

        function l(n) {
            try {
                return !0
            } catch (n) {}
            return !1
        }

        function p(n) {
            void 0 === n && (n = window);
            var e = n.location;
            if (!e) throw new Error("Can not read window location");
            var t = u(n);
            if (!t) throw new Error("Can not read window protocol");
            if (t === o.FILE) return o.FILE + "//";
            if (t === o.ABOUT) {
                var r = d(n);
                return r && l() ? p(r) : o.ABOUT + "//"
            }
            var i = e.host;
            if (!i) throw new Error("Can not read window host");
            return t + "//" + i
        }

        function h(n) {
            void 0 === n && (n = window);
            var e = p(n);
            return e && n.mockDomain && 0 === n.mockDomain.indexOf(o.MOCK) ? n.mockDomain : e
        }

        function w(n) {
            try {
                if (!n.location.href) return !0;
                if ("about:blank" === n.location.href) return !0
            } catch (n) {}
            return !1
        }

        function m(n) {
            if (! function(n) {
                    try {
                        if (n === window) return !0
                    } catch (n) {}
                    try {
                        var e = Object.getOwnPropertyDescriptor(n, "location");
                        if (e && !1 === e.enumerable) return !1
                    } catch (n) {}
                    try {
                        if (s(n) && l()) return !0
                    } catch (n) {}
                    try {
                        if (function(n) {
                                return void 0 === n && (n = window), c(n) === o.MOCK
                            }(n) && l()) return !0
                    } catch (n) {}
                    try {
                        if (p(n) === p(window)) return !0
                    } catch (n) {}
                    return !1
                }(n)) return !1;
            try {
                if (n === window) return !0;
                if (s(n) && l()) return !0;
                if (h(window) === h(n)) return !0
            } catch (n) {}
            return !1
        }

        function v(n) {
            if (!m(n)) throw new Error("Expected window to be same domain");
            return n
        }

        function y(n, e) {
            if (!n || !e) return !1;
            var t = d(e);
            return t ? t === n : -1 !== function(n) {
                var e = [];
                try {
                    for (; n.parent !== n;) e.push(n.parent), n = n.parent
                } catch (n) {}
                return e
            }(e).indexOf(n)
        }

        function g(n) {
            var e, t, r = [];
            try {
                e = n.frames
            } catch (t) {
                e = n
            }
            try {
                t = e.length
            } catch (n) {}
            if (0 === t) return r;
            if (t) {
                for (var o = 0; o < t; o++) {
                    var i = void 0;
                    try {
                        i = e[o]
                    } catch (n) {
                        continue
                    }
                    r.push(i)
                }
                return r
            }
            for (var a = 0; a < 100; a++) {
                var u = void 0;
                try {
                    u = e[a]
                } catch (n) {
                    return r
                }
                if (!u) return r;
                r.push(u)
            }
            return r
        }

        function E(n) {
            for (var e = [], t = 0, r = g(n); t < r.length; t++) {
                var o = r[t];
                e.push(o);
                for (var i = 0, a = E(o); i < a.length; i++) e.push(a[i])
            }
            return e
        }

        function b(n) {
            void 0 === n && (n = window);
            try {
                if (n.top) return n.top
            } catch (n) {}
            if (d(n) === n) return n;
            try {
                if (y(window, n) && window.top) return window.top
            } catch (n) {}
            try {
                if (y(n, window) && window.top) return window.top
            } catch (n) {}
            for (var e = 0, t = E(n); e < t.length; e++) {
                var r = t[e];
                try {
                    if (r.top) return r.top
                } catch (n) {}
                if (d(r) === r) return r
            }
        }

        function _(n) {
            var e = b(n);
            if (!e) throw new Error("Can not determine top window");
            var t = [].concat(E(e), [e]);
            return -1 === t.indexOf(n) && (t = [].concat(t, [n], E(n))), t
        }

        function O(n) {
            return n === b(n)
        }
        var S = [],
            P = [];

        function N(n, e) {
            void 0 === e && (e = !0);
            try {
                if (n === window) return !1
            } catch (n) {
                return !0
            }
            try {
                if (!n) return !0
            } catch (n) {
                return !0
            }
            try {
                if (n.closed) return !0
            } catch (n) {
                return !n || n.message !== a
            }
            if (e && m(n)) try {
                if (n.mockclosed) return !0
            } catch (n) {}
            try {
                if (!n.parent || !n.top) return !0
            } catch (n) {}
            var t = function(n, e) {
                for (var t = 0; t < n.length; t++) try {
                    if (n[t] === e) return t
                } catch (n) {}
                return -1
            }(S, n);
            if (-1 !== t) {
                var r = P[t];
                if (r && function(n) {
                        if (!n.contentWindow) return !0;
                        if (!n.parentNode) return !0;
                        var e = n.ownerDocument;
                        if (e && e.documentElement && !e.documentElement.contains(n)) {
                            for (var t = n; t.parentNode && t.parentNode !== t;) t = t.parentNode;
                            if (!t.host || !e.documentElement.contains(t.host)) return !0
                        }
                        return !1
                    }(r)) return !0
            }
            return !1
        }

        function F(n) {
            if (function() {
                    for (var n = 0; n < S.length; n++) {
                        var e = !1;
                        try {
                            e = S[n].closed
                        } catch (n) {}
                        e && (P.splice(n, 1), S.splice(n, 1))
                    }
                }(), n && n.contentWindow) try {
                S.push(n.contentWindow), P.push(n)
            } catch (n) {}
        }

        function C(n) {
            return (n = n || window).navigator.mockUserAgent || n.navigator.userAgent
        }

        function j(n, e) {
            for (var t = g(n), r = 0; r < t.length; r++) {
                var o = t[r];
                try {
                    if (m(o) && o.name === e && -1 !== t.indexOf(o)) return o
                } catch (n) {}
            }
            try {
                if (-1 !== t.indexOf(n.frames[e])) return n.frames[e]
            } catch (n) {}
            try {
                if (-1 !== t.indexOf(n[e])) return n[e]
            } catch (n) {}
        }

        function A(n, e) {
            return j(n, e) || function n(e, t) {
                var r = j(e, t);
                if (r) return r;
                for (var o = 0, i = g(e); o < i.length; o++) {
                    var a = n(i[o], t);
                    if (a) return a
                }
            }(b(n) || n, e)
        }

        function T(n, e) {
            return n === f(e)
        }

        function x(n) {
            return void 0 === n && (n = window), f(n = n || window) || d(n) || void 0
        }

        function R(n, e) {
            var t = x(e);
            if (t) return t === n;
            if (e === n) return !1;
            if (b(e) === e) return !1;
            for (var r = 0, o = g(n); r < o.length; r++)
                if (o[r] === e) return !0;
            return !1
        }

        function I(n, e) {
            for (var t = 0; t < n.length; t++)
                for (var r = n[t], o = 0; o < e.length; o++)
                    if (r === e[o]) return !0;
            return !1
        }

        function k(n) {
            void 0 === n && (n = window);
            for (var e = 0, t = n; t;)(t = d(t)) && (e += 1);
            return e
        }

        function D(n, e) {
            return void 0 === e && (e = 1),
                function(n, e) {
                    void 0 === e && (e = 1);
                    for (var t = n, r = 0; r < e; r++) {
                        if (!t) return;
                        t = d(t)
                    }
                    return t
                }(n, k(n) - e)
        }

        function M(n, e) {
            var t = b(n) || n,
                r = b(e) || e;
            try {
                if (t && r) return t === r
            } catch (n) {}
            var o = _(n),
                i = _(e);
            if (I(o, i)) return !0;
            var a = f(t),
                u = f(r);
            return a && I(_(a), i) || u && I(_(u), o), !1
        }

        function L(n, e) {
            if ("string" == typeof n) {
                if ("string" == typeof e) return "*" === n || e === n;
                if (r(e)) return !1;
                if (Array.isArray(e)) return !1
            }
            return r(n) ? r(e) ? n.toString() === e.toString() : !Array.isArray(e) && Boolean(e.match(n)) : !!Array.isArray(n) && (Array.isArray(e) ? JSON.stringify(n) === JSON.stringify(e) : !r(e) && n.some((function(n) {
                return L(n, e)
            })))
        }

        function W(n) {
            return Array.isArray(n) ? "(" + n.join(" | ") + ")" : r(n) ? "RegExp(" + n.toString() + ")" : n.toString()
        }

        function H(n) {
            return n.match(/^(https?|mock|file):\/\//) ? n.split("/").slice(0, 3).join("/") : h()
        }

        function U(n, e, t, r) {
            var o;
            void 0 === t && (t = 1e3), void 0 === r && (r = 1 / 0);
            var i = function() {
                if (N(n)) return o && clearTimeout(o), e();
                r <= 0 ? clearTimeout(o) : (r -= t, o = setTimeout(i, t))
            };
            return i(), {
                cancel: function() {
                    o && clearTimeout(o)
                }
            }
        }

        function z(n) {
            try {
                if (n === window) return !0
            } catch (n) {
                if (n && n.message === a) return !0
            }
            try {
                if ("[object Window]" === {}.toString.call(n)) return !0
            } catch (n) {
                if (n && n.message === a) return !0
            }
            try {
                if (window.Window && n instanceof window.Window) return !0
            } catch (n) {
                if (n && n.message === a) return !0
            }
            try {
                if (n && n.self === n) return !0
            } catch (n) {
                if (n && n.message === a) return !0
            }
            try {
                if (n && n.parent === n) return !0
            } catch (n) {
                if (n && n.message === a) return !0
            }
            try {
                if (n && n.top === n) return !0
            } catch (n) {
                if (n && n.message === a) return !0
            }
            try {
                if (n && "__unlikely_value__" === n.__cross_domain_utils_window_check__) return !1
            } catch (n) {
                return !0
            }
            try {
                if ("postMessage" in n && "self" in n && "location" in n) return !0
            } catch (n) {}
            return !1
        }

        function B(n) {
            return "undefined" != typeof window && void 0 !== window.location && h() === n
        }

        function q(n) {
            if (0 !== H(n).indexOf(o.MOCK)) return n;
            throw new Error("Mock urls not supported out of test mode")
        }

        function Z(n) {
            if (m(n)) return v(n).frameElement;
            for (var e = 0, t = document.querySelectorAll("iframe"); e < t.length; e++) {
                var r = t[e];
                if (r && r.contentWindow && r.contentWindow === n) return r
            }
        }

        function K(n) {
            if (function(n) {
                    return void 0 === n && (n = window), Boolean(d(n))
                }(n)) {
                var e = Z(n);
                if (e && e.parentElement) return void e.parentElement.removeChild(e)
            }
            try {
                n.close()
            } catch (n) {}
        }
    }, function(n, e, t) {
        "use strict";
        t.d(e, "e", (function() {
            return w
        })), t.d(e, "f", (function() {
            return m
        })), t.d(e, "h", (function() {
            return v
        })), t.d(e, "g", (function() {
            return y
        })), t.d(e, "i", (function() {
            return g
        })), t.d(e, "j", (function() {
            return E
        })), t.d(e, "m", (function() {
            return b
        })), t.d(e, "o", (function() {
            return _
        })), t.d(e, "k", (function() {
            return O
        })), t.d(e, "l", (function() {
            return S
        })), t.d(e, "n", (function() {
            return P
        })), t.d(e, "b", (function() {
            return r
        })), t.d(e, "c", (function() {
            return o
        })), t.d(e, "q", (function() {
            return i
        })), t.d(e, "d", (function() {
            return a
        })), t.d(e, "a", (function() {
            return N
        })), t.d(e, "z", (function() {
            return F
        })), t.d(e, "p", (function() {
            return u
        })), t.d(e, "x", (function() {
            return c
        })), t.d(e, "v", (function() {
            return s
        })), t.d(e, "w", (function() {
            return d
        })), t.d(e, "u", (function() {
            return f
        })), t.d(e, "y", (function() {
            return l
        })), t.d(e, "t", (function() {
            return p
        })), t.d(e, "r", (function() {
            return h
        })), t.d(e, "s", (function() {
            return C
        }));
        var r = {
                VISA: "visa",
                MASTERCARD: "mastercard",
                AMEX: "amex",
                DISCOVER: "discover",
                HIPER: "hiper",
                ELO: "elo",
                JCB: "jcb",
                CUP: "cup",
                DINERS: "diners",
                MAESTRO: "maestro",
                EFTPOS: "eftpos",
                CB_NATIONALE: "cb_nationale"
            },
            o = {
                AD: "AD",
                AE: "AE",
                AG: "AG",
                AI: "AI",
                AL: "AL",
                AM: "AM",
                AN: "AN",
                AO: "AO",
                AR: "AR",
                AT: "AT",
                AU: "AU",
                AW: "AW",
                AZ: "AZ",
                BA: "BA",
                BB: "BB",
                BE: "BE",
                BF: "BF",
                BG: "BG",
                BH: "BH",
                BI: "BI",
                BJ: "BJ",
                BM: "BM",
                BN: "BN",
                BO: "BO",
                BR: "BR",
                BS: "BS",
                BT: "BT",
                BW: "BW",
                BY: "BY",
                BZ: "BZ",
                CA: "CA",
                CD: "CD",
                CG: "CG",
                CH: "CH",
                CI: "CI",
                CK: "CK",
                CL: "CL",
                CM: "CM",
                CN: "CN",
                CO: "CO",
                CR: "CR",
                CV: "CV",
                CY: "CY",
                CZ: "CZ",
                DE: "DE",
                DJ: "DJ",
                DK: "DK",
                DM: "DM",
                DO: "DO",
                DZ: "DZ",
                EC: "EC",
                EE: "EE",
                EG: "EG",
                ER: "ER",
                ES: "ES",
                ET: "ET",
                FI: "FI",
                FJ: "FJ",
                FK: "FK",
                FM: "FM",
                FO: "FO",
                FR: "FR",
                GA: "GA",
                GB: "GB",
                GD: "GD",
                GE: "GE",
                GF: "GF",
                GI: "GI",
                GL: "GL",
                GM: "GM",
                GN: "GN",
                GP: "GP",
                GR: "GR",
                GT: "GT",
                GW: "GW",
                GY: "GY",
                HK: "HK",
                HN: "HN",
                HR: "HR",
                HU: "HU",
                ID: "ID",
                IE: "IE",
                IL: "IL",
                IN: "IN",
                IS: "IS",
                IT: "IT",
                JM: "JM",
                JO: "JO",
                JP: "JP",
                KE: "KE",
                KG: "KG",
                KH: "KH",
                KI: "KI",
                KM: "KM",
                KN: "KN",
                KR: "KR",
                KW: "KW",
                KY: "KY",
                KZ: "KZ",
                LA: "LA",
                LC: "LC",
                LI: "LI",
                LK: "LK",
                LS: "LS",
                LT: "LT",
                LU: "LU",
                LV: "LV",
                MA: "MA",
                MC: "MC",
                MD: "MD",
                ME: "ME",
                MG: "MG",
                MH: "MH",
                MK: "MK",
                ML: "ML",
                MN: "MN",
                MQ: "MQ",
                MR: "MR",
                MS: "MS",
                MT: "MT",
                MU: "MU",
                MV: "MV",
                MW: "MW",
                MX: "MX",
                MY: "MY",
                MZ: "MZ",
                NA: "NA",
                NC: "NC",
                NE: "NE",
                NF: "NF",
                NG: "NG",
                NI: "NI",
                NL: "NL",
                NO: "NO",
                NP: "NP",
                NR: "NR",
                NU: "NU",
                NZ: "NZ",
                OM: "OM",
                PA: "PA",
                PE: "PE",
                PF: "PF",
                PG: "PG",
                PH: "PH",
                PL: "PL",
                PM: "PM",
                PN: "PN",
                PT: "PT",
                PW: "PW",
                PY: "PY",
                QA: "QA",
                RE: "RE",
                RO: "RO",
                RS: "RS",
                RU: "RU",
                RW: "RW",
                SA: "SA",
                SB: "SB",
                SC: "SC",
                SE: "SE",
                SG: "SG",
                SH: "SH",
                SI: "SI",
                SJ: "SJ",
                SK: "SK",
                SL: "SL",
                SM: "SM",
                SN: "SN",
                SO: "SO",
                SR: "SR",
                ST: "ST",
                SV: "SV",
                SZ: "SZ",
                TC: "TC",
                TD: "TD",
                TG: "TG",
                TH: "TH",
                TJ: "TJ",
                TM: "TM",
                TN: "TN",
                TO: "TO",
                TR: "TR",
                TT: "TT",
                TV: "TV",
                TW: "TW",
                TZ: "TZ",
                UA: "UA",
                UG: "UG",
                US: "US",
                UY: "UY",
                VA: "VA",
                VC: "VC",
                VE: "VE",
                VG: "VG",
                VN: "VN",
                VU: "VU",
                WF: "WF",
                WS: "WS",
                YE: "YE",
                YT: "YT",
                ZA: "ZA",
                ZM: "ZM",
                ZW: "ZW"
            },
            i = {
                AR: "ar",
                BG: "bg",
                CS: "cs",
                DA: "da",
                DE: "de",
                EL: "el",
                EN: "en",
                ES: "es",
                ET: "et",
                FI: "fi",
                FR: "fr",
                HE: "he",
                HU: "hu",
                ID: "id",
                IT: "it",
                JA: "ja",
                KO: "ko",
                LT: "lt",
                LV: "lv",
                MS: "ms",
                NL: "nl",
                NO: "no",
                PL: "pl",
                PT: "pt",
                RO: "ro",
                RU: "ru",
                SI: "si",
                SK: "sk",
                SL: "sl",
                SQ: "sq",
                SV: "sv",
                TH: "th",
                TL: "tl",
                TR: "tr",
                VI: "vi",
                ZH: "zh",
                ZH_HANT: "zh_Hant"
            },
            a = {
                AD: [i.EN, i.FR, i.ES, i.ZH],
                AE: [i.EN, i.FR, i.ES, i.ZH, i.AR],
                AG: [i.EN, i.FR, i.ES, i.ZH],
                AI: [i.EN, i.FR, i.ES, i.ZH],
                AL: [i.SQ, i.EN],
                AM: [i.EN, i.FR, i.ES, i.ZH],
                AN: [i.EN, i.FR, i.ES, i.ZH],
                AO: [i.EN, i.FR, i.ES, i.ZH],
                AR: [i.ES, i.EN],
                AT: [i.DE, i.EN],
                AU: [i.EN],
                AW: [i.EN, i.FR, i.ES, i.ZH],
                AZ: [i.EN, i.FR, i.ES, i.ZH],
                BA: [i.EN],
                BB: [i.EN, i.FR, i.ES, i.ZH],
                BE: [i.EN, i.NL, i.FR],
                BF: [i.FR, i.EN, i.ES, i.ZH],
                BG: [i.BG, i.EN],
                BH: [i.AR, i.EN, i.FR, i.ES, i.ZH],
                BI: [i.FR, i.EN, i.ES, i.ZH],
                BJ: [i.FR, i.EN, i.ES, i.ZH],
                BM: [i.EN, i.FR, i.ES, i.ZH],
                BN: [i.MS, i.EN],
                BO: [i.ES, i.EN, i.FR, i.ZH],
                BR: [i.PT, i.EN],
                BS: [i.EN, i.FR, i.ES, i.ZH],
                BT: [i.EN],
                BW: [i.EN, i.FR, i.ES, i.ZH],
                BY: [i.EN],
                BZ: [i.EN, i.ES, i.FR, i.ZH],
                CA: [i.EN, i.FR],
                CD: [i.FR, i.EN, i.ES, i.ZH],
                CG: [i.EN, i.FR, i.ES, i.ZH],
                CH: [i.DE, i.FR, i.EN],
                CI: [i.FR, i.EN],
                CK: [i.EN, i.FR, i.ES, i.ZH],
                CL: [i.ES, i.EN, i.FR, i.ZH],
                CM: [i.FR, i.EN],
                CN: [i.ZH],
                CO: [i.ES, i.EN, i.FR, i.ZH],
                CR: [i.ES, i.EN, i.FR, i.ZH],
                CV: [i.EN, i.FR, i.ES, i.ZH],
                CY: [i.EN],
                CZ: [i.CS, i.EN],
                DE: [i.DE, i.EN],
                DJ: [i.FR, i.EN, i.ES, i.ZH],
                DK: [i.DA, i.EN],
                DM: [i.EN, i.FR, i.ES, i.ZH],
                DO: [i.ES, i.EN, i.FR, i.ZH],
                DZ: [i.AR, i.EN, i.FR, i.ES, i.ZH],
                EC: [i.ES, i.EN, i.FR, i.ZH],
                EE: [i.ET, i.EN, i.RU],
                EG: [i.AR, i.EN, i.FR, i.ES, i.ZH],
                ER: [i.EN, i.FR, i.ES, i.ZH],
                ES: [i.ES, i.EN],
                ET: [i.EN, i.FR, i.ES, i.ZH],
                FI: [i.FI, i.EN],
                FJ: [i.EN, i.FR, i.ES, i.ZH],
                FK: [i.EN, i.FR, i.ES, i.ZH],
                FM: [i.EN],
                FO: [i.DA, i.EN, i.FR, i.ES, i.ZH],
                FR: [i.FR, i.EN],
                GA: [i.FR, i.EN, i.ES, i.ZH],
                GB: [i.EN],
                GD: [i.EN, i.FR, i.ES, i.ZH],
                GE: [i.EN, i.FR, i.ES, i.ZH],
                GF: [i.EN, i.FR, i.ES, i.ZH],
                GI: [i.EN, i.FR, i.ES, i.ZH],
                GL: [i.DA, i.EN, i.FR, i.ES, i.ZH],
                GM: [i.EN, i.FR, i.ES, i.ZH],
                GN: [i.FR, i.EN, i.ES, i.ZH],
                GP: [i.EN, i.FR, i.ES, i.ZH],
                GR: [i.EL, i.EN],
                GT: [i.ES, i.EN, i.FR, i.ZH],
                GW: [i.EN, i.FR, i.ES, i.ZH],
                GY: [i.EN, i.FR, i.ES, i.ZH],
                HK: [i.EN, i.ZH_HANT, i.ZH],
                HN: [i.ES, i.EN, i.FR, i.ZH],
                HR: [i.EN],
                HU: [i.HU, i.EN],
                ID: [i.ID, i.EN],
                IE: [i.EN, i.FR, i.ES, i.ZH],
                IL: [i.HE, i.EN],
                IN: [i.EN],
                IS: [i.EN],
                IT: [i.IT, i.EN],
                JM: [i.EN, i.ES, i.FR, i.ZH],
                JO: [i.AR, i.EN, i.FR, i.ES, i.ZH],
                JP: [i.JA, i.EN],
                KE: [i.EN, i.FR, i.ES, i.ZH],
                KG: [i.EN, i.FR, i.ES, i.ZH],
                KH: [i.EN],
                KI: [i.EN, i.FR, i.ES, i.ZH],
                KM: [i.FR, i.EN, i.ES, i.ZH],
                KN: [i.EN, i.FR, i.ES, i.ZH],
                KR: [i.KO, i.EN],
                KW: [i.AR, i.EN, i.FR, i.ES, i.ZH],
                KY: [i.EN, i.FR, i.ES, i.ZH],
                KZ: [i.EN, i.FR, i.ES, i.ZH],
                LA: [i.EN],
                LC: [i.EN, i.FR, i.ES, i.ZH],
                LI: [i.EN, i.FR, i.ES, i.ZH],
                LK: [i.SI, i.EN],
                LS: [i.EN, i.FR, i.ES, i.ZH],
                LT: [i.LT, i.EN, i.RU, i.ZH],
                LU: [i.EN, i.DE, i.FR, i.ES, i.ZH],
                LV: [i.LV, i.EN, i.RU],
                MA: [i.AR, i.EN, i.FR, i.ES, i.ZH],
                MC: [i.FR, i.EN],
                MD: [i.EN],
                ME: [i.EN],
                MG: [i.EN, i.FR, i.ES, i.ZH],
                MH: [i.EN, i.FR, i.ES, i.ZH],
                MK: [i.EN],
                ML: [i.FR, i.EN, i.ES, i.ZH],
                MN: [i.EN],
                MQ: [i.EN, i.FR, i.ES, i.ZH],
                MR: [i.EN, i.FR, i.ES, i.ZH],
                MS: [i.EN, i.FR, i.ES, i.ZH],
                MT: [i.EN],
                MU: [i.EN, i.FR, i.ES, i.ZH],
                MV: [i.EN],
                MW: [i.EN, i.FR, i.ES, i.ZH],
                MX: [i.ES, i.EN],
                MY: [i.MS, i.EN],
                MZ: [i.EN, i.FR, i.ES, i.ZH],
                NA: [i.EN, i.FR, i.ES, i.ZH],
                NC: [i.EN, i.FR, i.ES, i.ZH],
                NE: [i.FR, i.EN, i.ES, i.ZH],
                NF: [i.EN, i.FR, i.ES, i.ZH],
                NG: [i.EN],
                NI: [i.ES, i.EN, i.FR, i.ZH],
                NL: [i.NL, i.EN],
                NO: [i.NO, i.EN],
                NP: [i.EN],
                NR: [i.EN, i.FR, i.ES, i.ZH],
                NU: [i.EN, i.FR, i.ES, i.ZH],
                NZ: [i.EN, i.FR, i.ES, i.ZH],
                OM: [i.AR, i.EN, i.FR, i.ES, i.ZH],
                PA: [i.ES, i.EN, i.FR, i.ZH],
                PE: [i.ES, i.EN, i.FR, i.ZH],
                PF: [i.EN, i.FR, i.ES, i.ZH],
                PG: [i.EN, i.FR, i.ES, i.ZH],
                PH: [i.TL, i.EN],
                PL: [i.PL, i.EN],
                PM: [i.EN, i.FR, i.ES, i.ZH],
                PN: [i.EN, i.FR, i.ES, i.ZH],
                PT: [i.PT, i.EN],
                PW: [i.EN, i.FR, i.ES, i.ZH],
                PY: [i.ES, i.EN],
                QA: [i.EN, i.FR, i.ES, i.ZH, i.AR],
                RE: [i.EN, i.FR, i.ES, i.ZH],
                RO: [i.RO, i.EN],
                RS: [i.EN, i.FR, i.ES, i.ZH],
                RU: [i.RU, i.EN],
                RW: [i.FR, i.EN, i.ES, i.ZH],
                SA: [i.AR, i.EN, i.FR, i.ES, i.ZH],
                SB: [i.EN, i.FR, i.ES, i.ZH],
                SC: [i.FR, i.EN, i.ES, i.ZH],
                SE: [i.SV, i.EN],
                SG: [i.EN],
                SH: [i.EN, i.FR, i.ES, i.ZH],
                SI: [i.SL, i.EN],
                SJ: [i.EN, i.FR, i.ES, i.ZH],
                SK: [i.SK, i.EN],
                SL: [i.EN, i.FR, i.ES, i.ZH],
                SM: [i.EN, i.FR, i.ES, i.ZH],
                SN: [i.FR, i.EN, i.ES, i.ZH],
                SO: [i.EN, i.FR, i.ES, i.ZH],
                SR: [i.EN, i.FR, i.ES, i.ZH],
                ST: [i.EN, i.FR, i.ES, i.ZH],
                SV: [i.ES, i.EN, i.FR, i.ZH],
                SZ: [i.EN, i.FR, i.ES, i.ZH],
                TC: [i.EN, i.FR, i.ES, i.ZH],
                TD: [i.FR, i.EN, i.ES, i.ZH],
                TG: [i.FR, i.EN, i.ES, i.ZH],
                TH: [i.TH, i.EN],
                TJ: [i.EN, i.FR, i.ES, i.ZH],
                TM: [i.EN, i.FR, i.ES, i.ZH],
                TN: [i.AR, i.EN, i.FR, i.ES, i.ZH],
                TO: [i.EN],
                TR: [i.TR, i.EN],
                TT: [i.EN, i.FR, i.ES, i.ZH],
                TV: [i.EN, i.FR, i.ES, i.ZH],
                TW: [i.ZH_HANT, i.ZH, i.EN],
                TZ: [i.EN, i.FR, i.ES, i.ZH],
                UA: [i.EN, i.RU, i.FR, i.ES, i.ZH],
                UG: [i.EN, i.FR, i.ES, i.ZH],
                US: [i.EN, i.FR, i.ES, i.ZH],
                UY: [i.ES, i.EN, i.FR, i.ZH],
                VA: [i.EN, i.FR, i.ES, i.ZH],
                VC: [i.EN, i.FR, i.ES, i.ZH],
                VE: [i.ES, i.EN, i.FR, i.ZH],
                VG: [i.EN, i.FR, i.ES, i.ZH],
                VN: [i.VI, i.EN],
                VU: [i.EN, i.FR, i.ES, i.ZH],
                WF: [i.EN, i.FR, i.ES, i.ZH],
                WS: [i.EN],
                YE: [i.AR, i.EN, i.FR, i.ES, i.ZH],
                YT: [i.EN, i.FR, i.ES, i.ZH],
                ZA: [i.EN, i.FR, i.ES, i.ZH],
                ZM: [i.EN, i.FR, i.ES, i.ZH],
                ZW: [i.EN]
            },
            u = {
                CAPTURE: "capture",
                AUTHORIZE: "authorize",
                ORDER: "order",
                TOKENIZE: "tokenize",
                SUBSCRIPTION: "subscription"
            },
            c = {
                AMOUNT: "data-amount",
                API_STAGE_HOST: "data-api-stage-host",
                CLIENT_METADATA_ID: "data-client-metadata-id",
                CLIENT_TOKEN: "data-client-token",
                CSP_NONCE: "data-csp-nonce",
                ENABLE_3DS: "data-enable-3ds",
                JS_SDK_LIBRARY: "data-js-sdk-library",
                MERCHANT_ID: "data-merchant-id",
                NAMESPACE: "data-namespace",
                PAGE_TYPE: "data-page-type",
                PARTNER_ATTRIBUTION_ID: "data-partner-attribution-id",
                POPUPS_DISABLED: "data-popups-disabled",
                SDK_INTEGRATION_SOURCE: "data-sdk-integration-source",
                SDK_TOKEN: "data-sdk-client-token",
                SHOPPER_SESSION_ID: "data-shopper-session-id",
                STAGE_HOST: "data-stage-host",
                USER_EXPERIENCE_FLOW: "data-user-experience-flow",
                USER_ID_TOKEN: "data-user-id-token"
            },
            s = c,
            d = {
                COMPONENTS: "components",
                ENV: "env",
                DEBUG: "debug",
                CACHEBUST: "cachebust",
                CLIENT_ID: "client-id",
                MERCHANT_ID: "merchant-id",
                LOCALE: "locale",
                CURRENCY: "currency",
                INTENT: "intent",
                COMMIT: "commit",
                VAULT: "vault",
                BUYER_COUNTRY: "buyer-country",
                ENABLE_FUNDING: "enable-funding",
                DISABLE_FUNDING: "disable-funding",
                DISABLE_CARD: "disable-card",
                INTEGRATION_DATE: "integration-date",
                STAGE_HOST: "stage-host",
                STAGE_ALIAS: "stage-alias",
                CDN_REGISTRY: "cdn-registry",
                VERSION: "version"
            },
            f = {
                TRUE: "true",
                FALSE: "false"
            },
            l = "unknown",
            p = {
                HTTP: "http",
                HTTPS: "https"
            },
            h = {
                HOME: "home",
                PRODUCT: "product",
                CART: "cart",
                CHECKOUT: "checkout",
                PRODUCT_LISTING: "product-listing",
                SEARCH_RESULTS: "search-results",
                PRODUCT_DETAILS: "product-details",
                MINI_CART: "mini-cart"
            },
            w = "USD",
            m = u.CAPTURE,
            v = !0,
            y = !0,
            g = !1,
            E = {
                LOCAL: "local",
                STAGE: "stage",
                SANDBOX: "sandbox",
                PRODUCTION: "production",
                TEST: "test"
            },
            b = {
                BUTTON_LAYOUT: "button_layout",
                BUTTON_MESSAGE_AMOUNT: "button_message_amount",
                BUTTON_MESSAGE_CREDIT_PRODUCT_IDENTIFIER: "button_message_credit_product_identifier",
                BUTTON_MESSAGE_COLOR: "button_message_color",
                BUTTON_MESSAGE_CURRENCY: "button_message_currency",
                BUTTON_MESSAGE_ALIGN: "button_message_align",
                BUTTON_MESSAGE_POSITION: "button_message_position",
                BUTTON_MESSAGE_OFFER_COUNTRY: "button_message_offer_country",
                BUTTON_MESSAGE_OFFER_TYPE: "button_message_offer_type",
                BUTTON_MESSAGE_TYPE: "button_message_type",
                BUTTON_SESSION_UID: "button_session_id",
                BUTTON_SOURCE: "button_source",
                BUTTON_TYPE: "button_type",
                BUTTON_VERSION: "button_version",
                BUYER_COUNTRY: "buyer_cntry",
                CHECKOUT_APP: "checkout_app",
                CHOSEN_FI_TYPE: "chosen_fi_type",
                CHOSEN_FUNDING: "selected_payment_method",
                CLIENT_ID: "client_id",
                CONTEXT_CORRID: "context_correlation_id",
                CONTEXT_ID: "context_id",
                CONTEXT_TYPE: "context_type",
                CPL_CHUNK_METRICS: "cpl_chunk_metrics",
                CPL_COMP_METRICS: "cpl_comp_metrics",
                CPL_QUERY_METRICS: "cpl_query_metrics",
                DATA_SOURCE: "serverside_data_source",
                DISABLE_CARD: "disable_card",
                DISABLE_FUNDING: "disable_funding",
                ERROR_CODE: "ext_error_code",
                ERROR_DESC: "ext_error_desc",
                EVENT_NAME: "event_name",
                EXPERIMENT_EXPERIENCE: "experimentation_experience",
                EXPERIMENT_NAME: "pxp_exp_id",
                EXPERIMENT_TREATMENT: "experimentation_treatment",
                FEED: "feed_name",
                FI_ID: "fi_id",
                FI_LIST: "fi_list",
                FIELDS_COMPONENT_SESSION_ID: "fields_component_session_id",
                FUNDING_COUNT: "eligible_payment_count",
                FUNDING_LIST: "eligible_payment_methods",
                HOSTED_BUTTON_ID: "hosted_button_id",
                INTEGRATION_IDENTIFIER: "integration_identifier",
                IS_VAULT: "is_vault",
                JS_SDK_LIBRARY: "js_sdk_library",
                LOCALE: "locale",
                MERCHANT_DOMAIN: "merchant_domain",
                MOBILE_APP_VERSION: "mobile_app_version",
                MOBILE_BUNDLE_IDENTIFIER: "mapv",
                OPTION_SELECTED: "optsel",
                PAGE: "page_name",
                PAGE_LOAD_TIME: "page_load_time",
                PAGE_TYPE: "pp_placement",
                PARTNER_ATTRIBUTION_ID: "bn_code",
                PAY_ID: "pay_id",
                PAY_NOW: "pay_now",
                PAYMENT_FLOW: "payment_flow",
                POTENTIAL_PAYMENT_METHODS: "potential_payment_methods",
                PRODUCT: "product",
                RECOMMENDED_PAYMENT: "recommended_payment",
                REFERER: "referer_url",
                REFERRER_DOMAIN: "referrer_domain",
                RESPONSE_DURATION: "response_duration",
                SDK_CACHE: "sdk_cache",
                SDK_ENVIRONMENT: "sdk_environment",
                SDK_INTEGRATION_SOURCE: "sdk_integration_source",
                SDK_LOAD_TIME: "sdk_load_time",
                SDK_NAME: "sdk_name",
                SDK_VERSION: "sdk_version",
                SELECTED_FI: "merchant_selected_funding_source",
                SELLER_ID: "seller_id",
                SESSION_UID: "page_session_id",
                STATE: "state_name",
                STICKINESS_ID: "stickiness_id",
                TIMESTAMP: "t",
                TOKEN: "token",
                TRANSITION: "transition_name",
                TRANSITION_TIME: "transition_time",
                TREATMENT_NAME: "pxp_trtmnt_id",
                USER_ACTION: "user_action",
                USER_AGENT: "user_agent",
                USER_IDENTITY_METHOD: "user_identity_method",
                VERSION: "checkoutjs_version",
                AVAILABLE_PAYMENT_NETWORKS: "available_payment_networks",
                SELECTED_CARD_TYPE: "selected_card_type",
                CURRENCY: "currency",
                AMOUNT: "amount"
            },
            _ = {
                COMMIT: "commit",
                CONTINUE: "continue"
            },
            O = {
                PAYMENTS_SDK: "checkout"
            },
            S = {
                PAYMENTS_SDK: "payments_sdk"
            },
            P = {
                PAYMENTS_SDK: "payments_sdk"
            },
            N = "pp.sdks.ppcp",
            F = {
                sdk_platform: "web",
                major_version: "5"
            },
            C = {
                DESKTOP: "desktop",
                MOBILE: "mobile"
            };
        t(15)
    }, function(n, e, t) {
        "use strict";
        t.r(e), t.d(e, "getUserAgent", (function() {
            return o
        })), t.d(e, "isDevice", (function() {
            return a
        })), t.d(e, "isTablet", (function() {
            return u
        })), t.d(e, "isWebView", (function() {
            return c
        })), t.d(e, "isStandAlone", (function() {
            return s
        })), t.d(e, "isFacebookWebView", (function() {
            return d
        })), t.d(e, "isFirefox", (function() {
            return f
        })), t.d(e, "isFirefoxIOS", (function() {
            return l
        })), t.d(e, "isEdgeIOS", (function() {
            return p
        })), t.d(e, "isOperaMini", (function() {
            return h
        })), t.d(e, "isAndroid", (function() {
            return w
        })), t.d(e, "isIos", (function() {
            return m
        })), t.d(e, "isIOS14", (function() {
            return v
        })), t.d(e, "isGoogleSearchApp", (function() {
            return y
        })), t.d(e, "isQQBrowser", (function() {
            return g
        })), t.d(e, "isIosWebview", (function() {
            return E
        })), t.d(e, "isSFVC", (function() {
            return b
        })), t.d(e, "isSFVCorSafari", (function() {
            return _
        })), t.d(e, "isAndroidWebview", (function() {
            return O
        })), t.d(e, "isIE", (function() {
            return S
        })), t.d(e, "isIECompHeader", (function() {
            return P
        })), t.d(e, "isElectron", (function() {
            return N
        })), t.d(e, "isIEIntranet", (function() {
            return F
        })), t.d(e, "isMacOsCna", (function() {
            return C
        })), t.d(e, "supportsPopups", (function() {
            return j
        })), t.d(e, "isChrome", (function() {
            return A
        })), t.d(e, "isSafari", (function() {
            return T
        })), t.d(e, "isApplePaySupported", (function() {
            return x
        })), t.d(e, "getBody", (function() {
            return he
        })), t.d(e, "isDocumentReady", (function() {
            return we
        })), t.d(e, "isDocumentInteractive", (function() {
            return me
        })), t.d(e, "urlEncode", (function() {
            return ve
        })), t.d(e, "waitForWindowReady", (function() {
            return ye
        })), t.d(e, "waitForDocumentReady", (function() {
            return ge
        })), t.d(e, "waitForDocumentBody", (function() {
            return Ee
        })), t.d(e, "parseQuery", (function() {
            return be
        })), t.d(e, "getQueryParam", (function() {
            return _e
        })), t.d(e, "urlWillRedirectPage", (function() {
            return Oe
        })), t.d(e, "formatQuery", (function() {
            return Se
        })), t.d(e, "extendQuery", (function() {
            return Pe
        })), t.d(e, "extendUrl", (function() {
            return Ne
        })), t.d(e, "redirect", (function() {
            return Fe
        })), t.d(e, "hasMetaViewPort", (function() {
            return Ce
        })), t.d(e, "isElementVisible", (function() {
            return je
        })), t.d(e, "getPerformance", (function() {
            return Ae
        })), t.d(e, "enablePerformance", (function() {
            return Te
        })), t.d(e, "getPageRenderTime", (function() {
            return xe
        })), t.d(e, "htmlEncode", (function() {
            return Re
        })), t.d(e, "isBrowser", (function() {
            return Ie
        })), t.d(e, "querySelectorAll", (function() {
            return ke
        })), t.d(e, "onClick", (function() {
            return De
        })), t.d(e, "getScript", (function() {
            return Me
        })), t.d(e, "isLocalStorageEnabled", (function() {
            return Le
        })), t.d(e, "getBrowserLocales", (function() {
            return We
        })), t.d(e, "appendChild", (function() {
            return He
        })), t.d(e, "getElementSafe", (function() {
            return Ue
        })), t.d(e, "getElement", (function() {
            return ze
        })), t.d(e, "elementReady", (function() {
            return Be
        })), t.d(e, "PopupOpenError", (function() {
            return Ze
        })), t.d(e, "popup", (function() {
            return Ke
        })), t.d(e, "writeToWindow", (function() {
            return Ge
        })), t.d(e, "writeElementToWindow", (function() {
            return Ve
        })), t.d(e, "setStyle", (function() {
            return Ye
        })), t.d(e, "awaitFrameLoad", (function() {
            return Je
        })), t.d(e, "awaitFrameWindow", (function() {
            return $e
        })), t.d(e, "createElement", (function() {
            return Xe
        })), t.d(e, "iframe", (function() {
            return Qe
        })), t.d(e, "addEventListener", (function() {
            return nt
        })), t.d(e, "bindEvents", (function() {
            return et
        })), t.d(e, "setVendorCSS", (function() {
            return rt
        })), t.d(e, "animate", (function() {
            return at
        })), t.d(e, "makeElementVisible", (function() {
            return ut
        })), t.d(e, "makeElementInvisible", (function() {
            return ct
        })), t.d(e, "showElement", (function() {
            return st
        })), t.d(e, "hideElement", (function() {
            return dt
        })), t.d(e, "destroyElement", (function() {
            return ft
        })), t.d(e, "showAndAnimate", (function() {
            return lt
        })), t.d(e, "animateAndHide", (function() {
            return pt
        })), t.d(e, "addClass", (function() {
            return ht
        })), t.d(e, "removeClass", (function() {
            return wt
        })), t.d(e, "isElementClosed", (function() {
            return mt
        })), t.d(e, "watchElementForClose", (function() {
            return vt
        })), t.d(e, "fixScripts", (function() {
            return yt
        })), t.d(e, "onResize", (function() {
            return gt
        })), t.d(e, "getResourceLoadTime", (function() {
            return Et
        })), t.d(e, "isShadowElement", (function() {
            return bt
        })), t.d(e, "getShadowRoot", (function() {
            return _t
        })), t.d(e, "getShadowHost", (function() {
            return Ot
        })), t.d(e, "insertShadowSlot", (function() {
            return St
        })), t.d(e, "preventClickFocus", (function() {
            return Pt
        })), t.d(e, "getStackTrace", (function() {
            return Nt
        })), t.d(e, "getCurrentScript", (function() {
            return Ct
        })), t.d(e, "getCurrentScriptUID", (function() {
            return At
        })), t.d(e, "submitForm", (function() {
            return Tt
        })), t.d(e, "experiment", (function() {
            return Dt
        })), t.d(e, "getGlobalNameSpace", (function() {
            return Mt
        })), t.d(e, "getStorage", (function() {
            return xt
        })), t.d(e, "isElement", (function() {
            return H
        })), t.d(e, "getFunctionName", (function() {
            return U
        })), t.d(e, "setFunctionName", (function() {
            return z
        })), t.d(e, "base64encode", (function() {
            return B
        })), t.d(e, "base64decode", (function() {
            return q
        })), t.d(e, "uniqueID", (function() {
            return Z
        })), t.d(e, "getGlobal", (function() {
            return K
        })), t.d(e, "getObjectID", (function() {
            return G
        })), t.d(e, "getEmptyObject", (function() {
            return Y
        })), t.d(e, "memoize", (function() {
            return X
        })), t.d(e, "promiseIdentity", (function() {
            return Q
        })), t.d(e, "memoizePromise", (function() {
            return nn
        })), t.d(e, "promisify", (function() {
            return en
        })), t.d(e, "inlineMemoize", (function() {
            return tn
        })), t.d(e, "noop", (function() {
            return rn
        })), t.d(e, "once", (function() {
            return on
        })), t.d(e, "hashStr", (function() {
            return an
        })), t.d(e, "strHashStr", (function() {
            return un
        })), t.d(e, "match", (function() {
            return cn
        })), t.d(e, "awaitKey", (function() {
            return sn
        })), t.d(e, "stringifyError", (function() {
            return dn
        })), t.d(e, "stringifyErrorMessage", (function() {
            return fn
        })), t.d(e, "stringify", (function() {
            return ln
        })), t.d(e, "domainMatches", (function() {
            return pn
        })), t.d(e, "patchMethod", (function() {
            return hn
        })), t.d(e, "extend", (function() {
            return wn
        })), t.d(e, "values", (function() {
            return mn
        })), t.d(e, "memoizedValues", (function() {
            return vn
        })), t.d(e, "perc", (function() {
            return yn
        })), t.d(e, "min", (function() {
            return gn
        })), t.d(e, "max", (function() {
            return En
        })), t.d(e, "roundUp", (function() {
            return bn
        })), t.d(e, "regexMap", (function() {
            return _n
        })), t.d(e, "svgToBase64", (function() {
            return On
        })), t.d(e, "objFilter", (function() {
            return Sn
        })), t.d(e, "identity", (function() {
            return Pn
        })), t.d(e, "regexTokenize", (function() {
            return Nn
        })), t.d(e, "promiseDebounce", (function() {
            return Fn
        })), t.d(e, "safeInterval", (function() {
            return Cn
        })), t.d(e, "isInteger", (function() {
            return jn
        })), t.d(e, "isFloat", (function() {
            return An
        })), t.d(e, "serializePrimitive", (function() {
            return Tn
        })), t.d(e, "deserializePrimitive", (function() {
            return xn
        })), t.d(e, "dotify", (function() {
            return Rn
        })), t.d(e, "undotify", (function() {
            return In
        })), t.d(e, "eventEmitter", (function() {
            return kn
        })), t.d(e, "camelToDasherize", (function() {
            return Dn
        })), t.d(e, "dasherizeToCamel", (function() {
            return Mn
        })), t.d(e, "capitalizeFirstLetter", (function() {
            return Ln
        })), t.d(e, "get", (function() {
            return Wn
        })), t.d(e, "safeTimeout", (function() {
            return Hn
        })), t.d(e, "defineLazyProp", (function() {
            return Un
        })), t.d(e, "arrayFrom", (function() {
            return zn
        })), t.d(e, "isObject", (function() {
            return Bn
        })), t.d(e, "isObjectObject", (function() {
            return qn
        })), t.d(e, "isPlainObject", (function() {
            return Zn
        })), t.d(e, "replaceObject", (function() {
            return Kn
        })), t.d(e, "copyProp", (function() {
            return Gn
        })), t.d(e, "regex", (function() {
            return Vn
        })), t.d(e, "regexAll", (function() {
            return Yn
        })), t.d(e, "isDefined", (function() {
            return Jn
        })), t.d(e, "cycle", (function() {
            return $n
        })), t.d(e, "debounce", (function() {
            return Xn
        })), t.d(e, "isRegex", (function() {
            return Qn
        })), t.d(e, "weakMapMemoize", (function() {
            return ne
        })), t.d(e, "weakMapMemoizePromise", (function() {
            return ee
        })), t.d(e, "getOrSet", (function() {
            return te
        })), t.d(e, "cleanup", (function() {
            return re
        })), t.d(e, "tryCatch", (function() {
            return oe
        })), t.d(e, "removeFromArray", (function() {
            return ie
        })), t.d(e, "assertExists", (function() {
            return ae
        })), t.d(e, "unique", (function() {
            return ue
        })), t.d(e, "constHas", (function() {
            return ce
        })), t.d(e, "dedupeErrors", (function() {
            return se
        })), t.d(e, "ExtendableError", (function() {
            return de
        })), t.d(e, "request", (function() {
            return Wt
        })), t.d(e, "addHeaderBuilder", (function() {
            return Ht
        })), t.d(e, "TYPES", (function() {
            return Ut
        })), t.d(e, "memoized", (function() {
            return zt
        })), t.d(e, "promise", (function() {
            return Bt
        })), t.d(e, "isPerc", (function() {
            return qt
        })), t.d(e, "isPx", (function() {
            return Zt
        })), t.d(e, "toNum", (function() {
            return Kt
        })), t.d(e, "toPx", (function() {
            return Gt
        })), t.d(e, "toCSS", (function() {
            return Vt
        })), t.d(e, "percOf", (function() {
            return Yt
        })), t.d(e, "normalizeDimension", (function() {
            return Jt
        })), t.d(e, "wrapPromise", (function() {
            return $t
        })), t.d(e, "KEY_CODES", (function() {
            return fe
        })), t.d(e, "ATTRIBUTES", (function() {
            return le
        })), t.d(e, "UID_HASH_LENGTH", (function() {
            return pe
        })), t.d(e, "sfvcScreens", (function() {
            return r
        }));
        var r = {
            926: {
                device: "iPhone 12/13 Pro Max",
                textSizeHeights: [752, 748, 744, 738],
                textSizeHeightsNoTabs: [860, 858, 856, 854],
                zoomHeight: {
                    1.15: [752, 747, 744, 738],
                    1.25: [753, 748, 744, 738],
                    1.5: [752, 749, 744, 738],
                    1.75: [753, 747, 744, 739],
                    2: [752, 748, 744],
                    2.5: [753, 748],
                    3: [753, 744]
                },
                maybeSafari: {
                    2: [738],
                    2.5: [745, 738],
                    3: [747, 738]
                }
            },
            896: {
                device: "iPhone XS Max, iPhone 11 Pro Max, iPhone XR, iPhone 11",
                textSizeHeights: [721, 717, 713, 707],
                textSizeHeightsNoTabs: [829, 827, 825, 823],
                zoomHeight: {
                    1.15: [721, 716, 713, 707],
                    1.25: [721, 718, 713, 708],
                    1.5: [722, 717, 713],
                    1.75: [721, 718, 712, 707],
                    2: [722, 718, 714, 708],
                    2.5: [720, 718, 713, 708],
                    3: [720, 717, 708]
                },
                maybeSafari: {
                    1.5: [707],
                    3: [714]
                }
            },
            844: {
                device: "iPhone 12, iPhone 12 Pro",
                textSizeHeights: [670, 666, 662, 656],
                textSizeHeightsNoTabs: [778, 776, 774, 772],
                zoomHeight: {
                    1.15: [670, 666, 662],
                    1.25: [670, 666, 663, 656],
                    1.5: [671, 666, 662],
                    1.75: [670, 667, 662, 656],
                    2: [670, 666, 662],
                    2.5: [670, 663],
                    3: [669, 666, 663, 657]
                },
                maybeSafari: {
                    1.15: [656],
                    1.5: [656],
                    2: [656],
                    2.5: [665, 655],
                    3: [663]
                }
            },
            812: {
                device: "iPhone X, iPhone XS, iPhone 11 Pro, iPhone 12 Mini",
                textSizeHeights: [641, 637, 633, 627],
                textSizeHeightsNoTabs: [749, 747, 745, 743],
                zoomHeight: {
                    1.15: [641, 637, 633, 627],
                    1.25: [641, 638, 633, 628],
                    1.5: [641, 638, 633, 627],
                    1.75: [641, 637, 634],
                    2: [642, 638, 634, 628],
                    2.5: [640, 638, 633, 628],
                    3: [642, 633]
                },
                maybeSafari: {
                    1.75: [627],
                    3: [636, 627]
                }
            },
            736: {
                device: "iPhone 6 Plus, iPhone 6S Plus, iPhone 7 Plus, iPhone 8 Plus",
                textSizeHeights: [628, 624, 620, 614],
                textSizeHeightsNoTabs: [736, 734, 732, 730],
                zoomHeight: {
                    1.15: [628, 624, 620, 614],
                    1.25: [628, 624, 620, 614],
                    1.5: [629, 624, 620],
                    1.75: [628, 625, 620, 614],
                    2: [628, 624, 620],
                    2.5: [628, 625, 620, 615],
                    3: [627, 624, 615]
                },
                maybeSafari: {
                    1.5: [614],
                    2: [614],
                    3: [621]
                }
            },
            667: {
                device: "iPhone 6, iPhone 6S, iPhone 7, iPhone 8,  iPhone SE2",
                textSizeHeights: [559, 555, 551, 545],
                textSizeHeightsNoTabs: [667, 665, 663, 661],
                zoomHeight: {
                    1.15: [559, 555, 551, 545],
                    1.25: [559, 555, 551, 545],
                    1.5: [560, 555, 551],
                    1.75: [558, 555, 551],
                    2: [560, 556, 552, 546],
                    2.5: [560, 555, 550],
                    3: [558, 555, 546]
                },
                maybeSafari: {
                    1.5: [545],
                    1.75: [544],
                    2.5: [545],
                    3: [552]
                }
            }
        };

        function o() {
            return window.navigator.mockUserAgent || window.navigator.userAgent
        }
        var i = /ip(a|ro)d|silk|xoom|playbook|tablet|kindle|Nexus 7|GT-P10|SC-01C|SHW-M180S|SM-T320|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC( Flyer|_Flyer)|Sprint ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos S7|Dell Streak 7|Advent Vega|A101IT|A70BHT|MID7015|Next2|nook|FOLIO|MB511.*RUTEM|Mac OS.*Silk/i;

        function a(n) {
            return void 0 === n && (n = o()), !!n.match(/Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i)
        }

        function u(n) {
            return void 0 === n && (n = o()), i.test(n)
        }

        function c() {
            var n = o();
            return /(iPhone|iPod|iPad|Macintosh).*AppleWebKit(?!.*Safari)|.*WKWebView/i.test(n) || /\bwv\b/.test(n) || /Android.*Version\/(\d)\.(\d)/i.test(n)
        }

        function s() {
            return !0 === window.navigator.standalone || window.matchMedia("(display-mode: standalone)").matches
        }

        function d(n) {
            return void 0 === n && (n = o()), /FBAN/.test(n) || /FBAV/.test(n)
        }

        function f(n) {
            return void 0 === n && (n = o()), /Firefox/i.test(n)
        }

        function l(n) {
            return void 0 === n && (n = o()), /FxiOS/i.test(n)
        }

        function p(n) {
            return void 0 === n && (n = o()), /EdgiOS/i.test(n)
        }

        function h(n) {
            return void 0 === n && (n = o()), /Opera Mini/i.test(n)
        }

        function w(n) {
            return void 0 === n && (n = o()), /Android/.test(n)
        }

        function m(n) {
            return void 0 === n && (n = o()), /iPhone|iPod|iPad/.test(n)
        }

        function v(n) {
            return void 0 === n && (n = o()), /iPhone.*OS.*(1)?(?:(1)[0-4]| [0-9])_/.test(n)
        }

        function y(n) {
            return void 0 === n && (n = o()), /\bGSA\b/.test(n)
        }

        function g(n) {
            return void 0 === n && (n = o()), /QQBrowser/.test(n)
        }

        function E(n) {
            return void 0 === n && (n = o()), !!m(n) && (!!y(n) || /.+AppleWebKit(?!.*Safari)|.*WKWebView/.test(n))
        }

        function b(n) {
            if (void 0 === n && (n = o()), m(n)) {
                var e = window.innerHeight,
                    t = Math.round(window.screen.width / window.innerWidth * 100) / 100,
                    i = Math.round(e * t),
                    a = null;
                if (v(n)) a = r[window.outerHeight];
                else {
                    if (1 !== t) return !0;
                    a = r[window.outerHeight]
                }
                return !a || (t > 1 && a.zoomHeight && a.zoomHeight[t] ? -1 !== a.zoomHeight[t].indexOf(i) : -1 !== a.textSizeHeights.indexOf(i) || -1 !== a.textSizeHeightsNoTabs.indexOf(i))
            }
            return !1
        }

        function _(n) {
            if (void 0 === n && (n = o()), m(n)) {
                var e = b(n),
                    t = v(n) ? r[window.outerHeight] : null;
                if (!t) return !1;
                var i = window.innerHeight,
                    a = Math.round(window.screen.width / window.innerWidth * 100) / 100,
                    u = Math.round(i * a),
                    c = t.maybeSafari,
                    s = !1;
                return a > 1 && c[a] && -1 !== c[a].indexOf(u) && (s = !0), e || s
            }
            return !1
        }

        function O(n) {
            return void 0 === n && (n = o()), !!w(n) && /Version\/[\d.]+/.test(n) && !h(n)
        }

        function S() {
            return !!window.document.documentMode || Boolean(window.navigator && window.navigator.userAgent && /Edge|MSIE|rv:11/i.test(window.navigator.userAgent))
        }

        function P() {
            var n = window.document.querySelector('meta[http-equiv="X-UA-Compatible"]'),
                e = window.document.querySelector('meta[content="IE=edge"]');
            return !(!n || !e)
        }

        function N() {
            return !("undefined" == typeof process || !process.versions || !process.versions.electron)
        }

        function F() {
            if (window.document.documentMode) try {
                var n = window.status;
                return window.status = "testIntranetMode", "testIntranetMode" === window.status && (window.status = n, !0)
            } catch (n) {
                return !1
            }
            return !1
        }

        function C() {
            var n = o();
            return /Macintosh.*AppleWebKit(?!.*Safari)/i.test(n)
        }

        function j(n) {
            return void 0 === n && (n = o()), !(E(n) || O(n) || h(n) || l(n) || p(n) || d(n) || g(n) || N() || C() || s())
        }

        function A(n) {
            return void 0 === n && (n = o()), /Chrome|Chromium|CriOS/.test(n) && !/SamsungBrowser|Silk|EdgA/.test(n)
        }

        function T(n) {
            return void 0 === n && (n = o()), /Safari/.test(n) && !A(n) && !/Silk|FxiOS|EdgiOS/.test(n)
        }

        function x() {
            try {
                if (window.ApplePaySession && window.ApplePaySession.supportsVersion(3) && window.ApplePaySession.canMakePayments()) return !0
            } catch (n) {
                return !1
            }
            return !1
        }
        var R, I = t(10),
            k = t(1),
            D = t(7),
            M = t(6),
            L = t(11),
            W = t(16);

        function H(n) {
            var e = !1;
            try {
                (n instanceof window.Element || null !== n && "object" == typeof n && 1 === n.nodeType && "object" == typeof n.style && "object" == typeof n.ownerDocument) && (e = !0)
            } catch (n) {}
            return e
        }

        function U(n) {
            return n.name || n.__name__ || n.displayName || "anonymous"
        }

        function z(n, e) {
            try {
                delete n.name, n.name = e
            } catch (n) {}
            return n.__name__ = n.displayName = e, n
        }

        function B(n) {
            if ("function" == typeof btoa) return btoa(encodeURIComponent(n).replace(/%([0-9A-F]{2})/g, (function(n, e) {
                return String.fromCharCode(parseInt(e, 16))
            }))).replace(/[=]/g, "");
            if ("undefined" != typeof Buffer) return Buffer.from(n, "utf8").toString("base64").replace(/[=]/g, "");
            throw new Error("Can not find window.btoa or Buffer")
        }

        function q(n) {
            if ("function" == typeof atob) return decodeURIComponent([].map.call(atob(n), (function(n) {
                return "%" + ("00" + n.charCodeAt(0).toString(16)).slice(-2)
            })).join(""));
            if ("undefined" != typeof Buffer) return Buffer.from(n, "base64").toString("utf8");
            throw new Error("Can not find window.atob or Buffer")
        }

        function Z() {
            var n = "0123456789abcdef";
            return "uid_" + "xxxxxxxxxx".replace(/./g, (function() {
                return n.charAt(Math.floor(Math.random() * n.length))
            })) + "_" + B((new Date).toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
        }

        function K() {
            if ("undefined" != typeof window) return window;
            if ("undefined" != typeof window) return window;
            if ("undefined" != typeof global) return global;
            throw new Error("No global found")
        }

        function G(n) {
            if (R = R || new L.a, null == n || "object" != typeof n && "function" != typeof n) throw new Error("Invalid object");
            var e = R.get(n);
            return e || (e = typeof n + ":" + Z(), R.set(n, e)), e
        }

        function V(n) {
            try {
                return JSON.stringify([].slice.call(n), (function(n, e) {
                    return "function" == typeof e ? "memoize[" + G(e) + "]" : H(e) ? {} : e
                }))
            } catch (n) {
                throw new Error("Arguments not serializable -- can not be used to memoize")
            }
        }

        function Y() {
            return {}
        }
        var J = 0,
            $ = 0;

        function X(n, e) {
            void 0 === e && (e = {});
            var t, r, o = e.thisNamespace,
                i = void 0 !== o && o,
                a = e.time,
                u = J;
            J += 1;
            var c = function() {
                for (var e = arguments.length, o = new Array(e), c = 0; c < e; c++) o[c] = arguments[c];
                var s, d;
                u < $ && (t = null, r = null, u = J, J += 1), s = i ? (r = r || new L.a).getOrSet(this, Y) : t = t || {};
                try {
                    d = V(o)
                } catch (e) {
                    return n.apply(this, arguments)
                }
                var f = s[d];
                if (f && a && Date.now() - f.time < a && (delete s[d], f = null), f) return f.value;
                var l = Date.now(),
                    p = n.apply(this, arguments);
                return s[d] = {
                    time: l,
                    value: p
                }, p
            };
            return c.reset = function() {
                t = null, r = null
            }, z(c, (e.name || U(n)) + "::memoized")
        }

        function Q(n) {
            return D.a.resolve(n)
        }

        function nn(n) {
            var e = {};

            function t() {
                for (var t = arguments, r = this, o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                var u = V(i);
                return e.hasOwnProperty(u) || (e[u] = D.a.try((function() {
                    return n.apply(r, t)
                })).finally((function() {
                    delete e[u]
                }))), e[u]
            }
            return t.reset = function() {
                e = {}
            }, z(t, U(n) + "::promiseMemoized")
        }

        function en(n, e) {
            function t() {
                return D.a.try(n, this, arguments)
            }
            return void 0 === e && (e = {}), e.name && (t.displayName = e.name + ":promisified"), z(t, U(n) + "::promisified")
        }

        function tn(n, e, t) {
            void 0 === t && (t = []);
            var r = n.__inline_memoize_cache__ = n.__inline_memoize_cache__ || {},
                o = V(t);
            return r.hasOwnProperty(o) ? r[o] : r[o] = e.apply(void 0, t)
        }

        function rn() {}

        function on(n) {
            var e = !1;
            return z((function() {
                if (!e) return e = !0, n.apply(this, arguments)
            }), U(n) + "::once")
        }

        function an(n) {
            for (var e = 0, t = 0; t < n.length; t++) e += n[t].charCodeAt(0) * Math.pow(t % 10 + 1, 5);
            return Math.floor(Math.pow(Math.sqrt(e), 5))
        }

        function un(n) {
            for (var e = "", t = 0; t < n.length; t++) {
                var r = n[t].charCodeAt(0) * t;
                n[t + 1] && (r += n[t + 1].charCodeAt(0) * (t - 1)), e += String.fromCharCode(97 + Math.abs(r) % 26)
            }
            return e
        }

        function cn(n, e) {
            var t = n.match(e);
            if (t) return t[1]
        }

        function sn(n, e) {
            return new D.a((function(t) {
                var r = n[e];
                if (r) return t(r);
                delete n[e], Object.defineProperty(n, e, {
                    configurable: !0,
                    set: function(n) {
                        (r = n) && t(r)
                    },
                    get: function() {
                        return r
                    }
                })
            }))
        }

        function dn(n, e) {
            if (void 0 === e && (e = 1), e >= 3) return "stringifyError stack overflow";
            try {
                if (!n) return "<unknown error: " + {}.toString.call(n) + ">";
                if ("string" == typeof n) return n;
                if (n instanceof Error) {
                    var t = n && n.stack,
                        r = n && n.message;
                    if (t && r) return -1 !== t.indexOf(r) ? t : r + "\n" + t;
                    if (t) return t;
                    if (r) return r
                }
                return n && n.toString && "function" == typeof n.toString ? n.toString() : {}.toString.call(n)
            } catch (n) {
                return "Error while stringifying error: " + dn(n, e + 1)
            }
        }

        function fn(n) {
            var e = "<unknown error: " + {}.toString.call(n) + ">";
            return n ? n instanceof Error ? n.message || e : "string" == typeof n.message && n.message || e : e
        }

        function ln(n) {
            return "string" == typeof n ? n : n && n.toString && "function" == typeof n.toString ? n.toString() : {}.toString.call(n)
        }

        function pn(n, e) {
            var t = (n = n.split("://")[1]).indexOf(e);
            return -1 !== t && n.slice(t) === e
        }

        function hn(n, e, t) {
            var r = n[e];
            n[e] = function() {
                var n = arguments,
                    e = this;
                return t({
                    context: this,
                    args: [].slice.call(arguments),
                    original: r,
                    callOriginal: function() {
                        return r.apply(e, n)
                    }
                })
            }
        }

        function wn(n, e) {
            if (!e) return n;
            if (Object.assign) return Object.assign(n, e);
            for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
            return n
        }

        function mn(n) {
            if (Object.values) return Object.values(n);
            var e = [];
            for (var t in n) n.hasOwnProperty(t) && e.push(n[t]);
            return e
        }
        X.clear = function() {
            $ = J
        };
        var vn = X(mn);

        function yn(n, e) {
            return Math.round(n * e / 100)
        }

        function gn() {
            return Math.min.apply(Math, arguments)
        }

        function En() {
            return Math.max.apply(Math, arguments)
        }

        function bn(n, e) {
            var t = n % e;
            return t ? n - t + e : n
        }

        function _n(n, e, t) {
            var r = [];
            return n.replace(e, (function(n) {
                r.push(t ? t.apply(null, arguments) : n)
            })), r
        }

        function On(n) {
            return "data:image/svg+xml;base64," + B(n)
        }

        function Sn(n, e) {
            void 0 === e && (e = Boolean);
            var t = {};
            for (var r in n) n.hasOwnProperty(r) && e(n[r], r) && (t[r] = n[r]);
            return t
        }

        function Pn(n) {
            return n
        }

        function Nn(n, e) {
            var t = [];
            return n.replace(e, (function(n) {
                return t.push(n), ""
            })), t
        }

        function Fn(n, e) {
            var t, r;
            return void 0 === e && (e = 50), z((function() {
                r && clearTimeout(r);
                var o = t = t || new D.a;
                return r = setTimeout((function() {
                    t = null, r = null, D.a.try(n).then((function(n) {
                        o.resolve(n)
                    }), (function(n) {
                        o.reject(n)
                    }))
                }), e), o
            }), U(n) + "::promiseDebounced")
        }

        function Cn(n, e) {
            var t;
            return function r() {
                t = setTimeout((function() {
                    n(), r()
                }), e)
            }(), {
                cancel: function() {
                    clearTimeout(t)
                }
            }
        }

        function jn(n) {
            return Boolean(n.match(/^[0-9]+$/))
        }

        function An(n) {
            return Boolean(n.match(/^[0-9]+\.[0-9]+$/))
        }

        function Tn(n) {
            return n.toString()
        }

        function xn(n) {
            return "true" === n || "false" !== n && (jn(n) ? parseInt(n, 10) : An(n) ? parseFloat(n) : n)
        }

        function Rn(n, e, t) {
            for (var r in void 0 === e && (e = ""), void 0 === t && (t = {}), e = e ? e + "." : e, n) n.hasOwnProperty(r) && null != n[r] && "function" != typeof n[r] && (n[r] && Array.isArray(n[r]) && n[r].length && n[r].every((function(n) {
                return "object" != typeof n
            })) ? t["" + e + r + "[]"] = n[r].join(",") : n[r] && "object" == typeof n[r] ? t = Rn(n[r], "" + e + r, t) : t["" + e + r] = Tn(n[r]));
            return t
        }

        function In(n) {
            var e = {};
            for (var t in n)
                if (n.hasOwnProperty(t) && "string" == typeof n[t]) {
                    var r = n[t];
                    t.match(/^.+\[\]$/) ? (t = t.slice(0, -2), r = r.split(",").map(xn)) : r = xn(r);
                    for (var o = e, i = t.split("."), a = 0; a < i.length; a++) {
                        var u = i[a],
                            c = a + 1 === i.length,
                            s = !c && jn(i[a + 1]);
                        if ("constructor" === u || "prototype" === u || "__proto__" === u) throw new Error("Disallowed key: " + u);
                        c ? o[u] = r : o = o[u] = o[u] || (s ? [] : {})
                    }
                } return e
        }

        function kn() {
            var n = {},
                e = {},
                t = {
                    on: function(n, t) {
                        var r = e[n] = e[n] || [];
                        r.push(t);
                        var o = !1;
                        return {
                            cancel: function() {
                                o || (o = !0, r.splice(r.indexOf(t), 1))
                            }
                        }
                    },
                    once: function(n, e) {
                        var r = t.on(n, (function() {
                            r.cancel(), e()
                        }));
                        return r
                    },
                    trigger: function(n) {
                        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
                        var i = e[n],
                            a = [];
                        if (i)
                            for (var u = function() {
                                    var n = i[c];
                                    a.push(D.a.try((function() {
                                        return n.apply(void 0, r)
                                    })))
                                }, c = 0; c < i.length; c++) u();
                        return D.a.all(a).then(rn)
                    },
                    triggerOnce: function(e) {
                        if (n[e]) return D.a.resolve();
                        n[e] = !0;
                        for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
                        return t.trigger.apply(t, [e].concat(o))
                    },
                    reset: function() {
                        e = {}
                    }
                };
            return t
        }

        function Dn(n) {
            return n.replace(/([A-Z])/g, (function(n) {
                return "-" + n.toLowerCase()
            }))
        }

        function Mn(n) {
            return n.replace(/-([a-z])/g, (function(n) {
                return n[1].toUpperCase()
            }))
        }

        function Ln(n) {
            return n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()
        }

        function Wn(n, e, t) {
            if (!e) return t;
            for (var r = e.split("."), o = 0; o < r.length; o++) {
                if ("object" != typeof n || null === n) return t;
                n = n[r[o]]
            }
            return void 0 === n ? t : n
        }

        function Hn(n, e) {
            var t = Cn((function() {
                (e -= 100) <= 0 && (t.cancel(), n())
            }), 100)
        }

        function Un(n, e, t) {
            if (Array.isArray(n)) {
                if ("number" != typeof e) throw new TypeError("Array key must be number")
            } else if ("object" == typeof n && null !== n && "string" != typeof e) throw new TypeError("Object key must be string");
            Object.defineProperty(n, e, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    delete n[e];
                    var r = t();
                    return n[e] = r, r
                },
                set: function(t) {
                    delete n[e], n[e] = t
                }
            })
        }

        function zn(n) {
            return [].slice.call(n)
        }

        function Bn(n) {
            return "object" == typeof n && null !== n
        }

        function qn(n) {
            return Bn(n) && "[object Object]" === {}.toString.call(n)
        }

        function Zn(n) {
            if (!qn(n)) return !1;
            var e = n.constructor;
            if ("function" != typeof e) return !1;
            var t = e.prototype;
            return !!qn(t) && !!t.hasOwnProperty("isPrototypeOf")
        }

        function Kn(n, e, t) {
            if (void 0 === t && (t = ""), Array.isArray(n)) {
                for (var r = n.length, o = [], i = function(r) {
                        Un(o, r, (function() {
                            var o = t ? t + "." + r : "" + r,
                                i = e(n[r], r, o);
                            return (Zn(i) || Array.isArray(i)) && (i = Kn(i, e, o)), i
                        }))
                    }, a = 0; a < r; a++) i(a);
                return o
            }
            if (Zn(n)) {
                var u = {},
                    c = function(r) {
                        if (!n.hasOwnProperty(r)) return 1;
                        Un(u, r, (function() {
                            var o = t ? t + "." + r : "" + r,
                                i = e(n[r], r, o);
                            return (Zn(i) || Array.isArray(i)) && (i = Kn(i, e, o)), i
                        }))
                    };
                for (var s in n) c(s);
                return u
            }
            throw new Error("Pass an object or array")
        }

        function Gn(n, e, t, r) {
            if (n.hasOwnProperty(t)) {
                var o = Object.getOwnPropertyDescriptor(n, t);
                Object.defineProperty(e, t, o)
            } else e[t] = r
        }

        function Vn(n, e, t) {
            void 0 === t && (t = 0), "string" == typeof n && (n = new RegExp(n));
            var r = e.slice(t).match(n);
            if (r) {
                var o = r.index,
                    i = r[0];
                return {
                    text: i,
                    groups: r.slice(1),
                    start: t + o,
                    end: t + o + i.length,
                    length: i.length,
                    replace: function(n) {
                        return i ? "" + i.slice(0, t + o) + n + i.slice(o + i.length) : ""
                    }
                }
            }
        }

        function Yn(n, e) {
            for (var t = [], r = 0;;) {
                var o = Vn(n, e, r);
                if (!o) break;
                t.push(o), r = cn.end
            }
            return t
        }

        function Jn(n) {
            return null != n
        }

        function $n(n) {
            return D.a.try(n).then((function() {
                return $n(n)
            }))
        }

        function Xn(n, e) {
            var t;
            return void 0 === e && (e = 100), z((function() {
                var r = arguments,
                    o = this;
                clearTimeout(t), t = setTimeout((function() {
                    return n.apply(o, r)
                }), e)
            }), U(n) + "::debounced")
        }

        function Qn(n) {
            return "[object RegExp]" === {}.toString.call(n)
        }
        var ne = function(n) {
                var e = new L.a;
                return function(t) {
                    var r = this;
                    return e.getOrSet(t, (function() {
                        return n.call(r, t)
                    }))
                }
            },
            ee = function(n) {
                var e = new L.a;
                return function(t) {
                    var r = this;
                    return e.getOrSet(t, (function() {
                        return n.call(r, t).finally((function() {
                            e.delete(t)
                        }))
                    }))
                }
            };

        function te(n, e, t) {
            if (n.hasOwnProperty(e)) return n[e];
            var r = t();
            return n[e] = r, r
        }

        function re(n) {
            var e, t = [],
                r = !1,
                o = {
                    set: function(e, t) {
                        return r || (n[e] = t, o.register((function() {
                            delete n[e]
                        }))), t
                    },
                    register: function(n) {
                        var o = on((function() {
                            return n(e)
                        }));
                        return r ? n(e) : t.push(o), {
                            cancel: function() {
                                var n = t.indexOf(o); - 1 !== n && t.splice(n, 1)
                            }
                        }
                    },
                    all: function(n) {
                        e = n;
                        var o = [];
                        for (r = !0; t.length;) {
                            var i = t.shift();
                            o.push(i())
                        }
                        return D.a.all(o).then(rn)
                    }
                };
            return o
        }

        function oe(n) {
            var e, t;
            try {
                e = n()
            } catch (n) {
                t = n
            }
            return {
                result: e,
                error: t
            }
        }

        function ie(n, e) {
            var t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
        }

        function ae(n, e) {
            if (null == e) throw new Error("Expected " + n + " to be present");
            return e
        }

        function ue(n) {
            for (var e = {}, t = 0; t < n.length; t++) e[n[t]] = !0;
            return Object.keys(e)
        }
        var ce = function(n, e) {
            return -1 !== vn(n).indexOf(e)
        };

        function se(n) {
            var e = [],
                t = {};
            return function(r) {
                if (-1 === e.indexOf(r)) {
                    e.push(r);
                    var o = dn(r);
                    if (!t[o]) return t[o] = !0, n(r)
                }
            }
        }
        var de = function(n) {
                function e(e) {
                    var t;
                    return (t = n.call(this, e) || this).name = t.constructor.name, "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(t, t.constructor) : t.stack = new Error(e).stack, t
                }
                return Object(I.a)(e, n), e
            }(Object(W.a)(Error)),
            fe = {
                ENTER: 13,
                SPACE: 32
            },
            le = {
                UID: "data-uid"
            },
            pe = 30;

        function he() {
            var n = document.body;
            if (!n) throw new Error("Body element not found");
            return n
        }

        function we() {
            return Boolean(document.body) && "complete" === document.readyState
        }

        function me() {
            return Boolean(document.body) && "interactive" === document.readyState
        }

        function ve(n) {
            return encodeURIComponent(n)
        }

        function ye() {
            return tn(ye, (function() {
                return new D.a((function(n) {
                    we() && n(), window.addEventListener("load", (function() {
                        return n()
                    }))
                }))
            }))
        }
        var ge = X((function() {
            return new D.a((function(n) {
                if (we() || me()) return n();
                var e = setInterval((function() {
                    if (we() || me()) return clearInterval(e), n()
                }), 10)
            }))
        }));

        function Ee() {
            return D.a.try((function() {
                return document.body ? document.body : ge().then((function() {
                    if (document.body) return document.body;
                    throw new Error("Document ready but document.body not present")
                }))
            }))
        }

        function be(n) {
            return tn(be, (function() {
                var e = {};
                if (!n) return e;
                if (-1 === n.indexOf("=")) return e;
                for (var t = 0, r = n.split("&"); t < r.length; t++) {
                    var o = r[t];
                    (o = o.split("="))[0] && o[1] && (e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]))
                }
                return e
            }), [n])
        }

        function _e(n) {
            return be(window.location.search.slice(1))[n]
        }

        function Oe(n) {
            return -1 === n.indexOf("#") || 0 !== n.indexOf("#") && n.split("#")[0] !== window.location.href.split("#")[0]
        }

        function Se(n) {
            return void 0 === n && (n = {}), Object.keys(n).filter((function(e) {
                return "string" == typeof n[e] || "boolean" == typeof n[e]
            })).map((function(e) {
                var t = n[e];
                if ("string" != typeof t && "boolean" != typeof t) throw new TypeError("Invalid type for query");
                return ve(e) + "=" + ve(t.toString())
            })).join("&")
        }

        function Pe(n, e) {
            return void 0 === e && (e = {}), e && Object.keys(e).length ? Se(Object(k.a)({}, be(n), e)) : n
        }

        function Ne(n, e) {
            var t, r, o = e.query || {},
                i = e.hash || {},
                a = n.split("#");
            r = a[1];
            var u = (t = a[0]).split("?");
            t = u[0];
            var c = Pe(u[1], o),
                s = Pe(r, i);
            return c && (t = t + "?" + c), s && (t = t + "#" + s), t
        }

        function Fe(n, e) {
            return void 0 === e && (e = window), new D.a((function(t) {
                e.location = n, Oe(n) || t()
            }))
        }

        function Ce() {
            var n = document.querySelector("meta[name=viewport]");
            return !(a() && window.screen.width < 660 && !n)
        }

        function je(n) {
            return Boolean(n.offsetWidth || n.offsetHeight || n.getClientRects().length)
        }

        function Ae() {
            return tn(Ae, (function() {
                var n = window.performance;
                if (n && n.now && n.timing && n.timing.connectEnd && n.timing.navigationStart && Math.abs(n.now() - Date.now()) > 1e3 && n.now() - (n.timing.connectEnd - n.timing.navigationStart) > 0) return n
            }))
        }

        function Te() {
            return Boolean(Ae())
        }

        function xe() {
            return ge().then((function() {
                var n = Ae();
                if (n) {
                    var e = n.timing;
                    return e.connectEnd && e.domInteractive ? e.domInteractive - e.connectEnd : void 0
                }
            }))
        }

        function Re(n) {
            return void 0 === n && (n = ""), n.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#x2F;")
        }

        function Ie() {
            return "undefined" != typeof window && void 0 !== window.location
        }

        function ke(n, e) {
            return void 0 === e && (e = window.document), [].slice.call(e.querySelectorAll(n))
        }

        function De(n, e) {
            n.addEventListener("touchstart", rn), n.addEventListener("click", e), n.addEventListener("keypress", (function(n) {
                if (n.keyCode === fe.ENTER || n.keyCode === fe.SPACE) return e(n)
            }))
        }

        function Me(n) {
            var e = n.host,
                t = void 0 === e ? window.location.host : e,
                r = n.path,
                o = n.reverse,
                i = void 0 !== o && o;
            return tn(Me, (function() {
                var n = "" + t + r,
                    e = [].slice.call(document.getElementsByTagName("script"));
                i && e.reverse();
                for (var o = 0; o < e.length; o++) {
                    var a = e[o];
                    if (a.src && a.src.replace(/^https?:\/\//, "").split("?")[0] === n) return a
                }
            }), [r])
        }

        function Le() {
            return tn(Le, (function() {
                try {
                    if ("undefined" == typeof window) return !1;
                    if (window.localStorage) {
                        var n = Math.random().toString();
                        window.localStorage.setItem("__test__localStorage__", n);
                        var e = window.localStorage.getItem("__test__localStorage__");
                        if (window.localStorage.removeItem("__test__localStorage__"), n === e) return !0
                    }
                } catch (n) {}
                return !1
            }))
        }

        function We() {
            var n = window.navigator,
                e = n.languages ? [].concat(n.languages) : [];
            return n.language && e.push(n.language), n.userLanguage && e.push(n.userLanguage), e.map((function(n) {
                if (n && n.match(/^[a-z]{2}[-_][A-Z]{2}$/)) {
                    var e = n.split(/[-_]/);
                    return {
                        country: e[1],
                        lang: e[0]
                    }
                }
                return n && n.match(/^[a-z]{2}$/) ? {
                    lang: n
                } : null
            })).filter(Boolean)
        }

        function He(n, e) {
            n.appendChild(e)
        }

        function Ue(n, e) {
            return void 0 === e && (e = document), H(n) ? n : "string" == typeof n ? e.querySelector(n) : void 0
        }

        function ze(n, e) {
            void 0 === e && (e = document);
            var t = Ue(n, e);
            if (t) return t;
            throw new Error("Can not find element: " + ln(n))
        }

        function Be(n) {
            return new D.a((function(e, t) {
                var r = ln(n),
                    o = Ue(n);
                if (o) return e(o);
                if (we()) return t(new Error("Document is ready and element " + r + " does not exist"));
                var i = setInterval((function() {
                    return (o = Ue(n)) ? (e(o), void clearInterval(i)) : we() ? (clearInterval(i), t(new Error("Document is ready and element " + r + " does not exist"))) : void 0
                }), 10)
            }))
        }
        var qe, Ze = function(n) {
            function e() {
                return n.apply(this, arguments) || this
            }
            return Object(I.a)(e, n), e
        }(de);

        function Ke(n, e) {
            var t = (e = e || {}).closeOnUnload,
                r = void 0 === t ? 1 : t,
                o = e.name,
                i = void 0 === o ? "" : o,
                a = e.width,
                u = e.height,
                c = 0,
                s = 0;
            a && (window.outerWidth ? s = Math.round((window.outerWidth - a) / 2) + window.screenX : window.screen.width && (s = Math.round((window.screen.width - a) / 2))), u && (window.outerHeight ? c = Math.round((window.outerHeight - u) / 2) + window.screenY : window.screen.height && (c = Math.round((window.screen.height - u) / 2))), delete e.closeOnUnload, delete e.name, a && u && (e = Object(k.a)({
                top: c,
                left: s,
                width: a,
                height: u,
                status: 1,
                toolbar: 0,
                menubar: 0,
                resizable: 1,
                scrollbars: 1
            }, e));
            var d, f, l = Object.keys(e).map((function(n) {
                if (null != e[n]) return n + "=" + ln(e[n])
            })).filter(Boolean).join(",");
            try {
                d = window.open(n, i, l)
            } catch (f) {
                throw new Ze("Can not open popup window - " + (f.stack || f.message))
            }
            if (Object(M.v)(d)) throw new Ze("Can not open popup window - blocked");
            return r && window.addEventListener("unload", (function() {
                return d.close()
            })), d
        }

        function Ge(n, e) {
            try {
                n.document.open(), n.document.write(e), n.document.close()
            } catch (t) {
                try {
                    n.location = "javascript: document.open(); document.write(" + JSON.stringify(e) + "); document.close();"
                } catch (n) {}
            }
        }

        function Ve(n, e) {
            var t = e.tagName.toLowerCase();
            if ("html" !== t) throw new Error("Expected element to be html, got " + t);
            for (var r = n.document.documentElement, o = 0, i = zn(r.children); o < i.length; o++) r.removeChild(i[o]);
            for (var a = 0, u = zn(e.children); a < u.length; a++) r.appendChild(u[a])
        }

        function Ye(n, e, t) {
            void 0 === t && (t = window.document), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(t.createTextNode(e))
        }

        function Je(n) {
            if ((qe = qe || new L.a).has(n)) {
                var e = qe.get(n);
                if (e) return e
            }
            var t = new D.a((function(e, t) {
                n.addEventListener("load", (function() {
                    Object(M.w)(n), e(n)
                })), n.addEventListener("error", (function(r) {
                    n.contentWindow ? e(n) : t(r)
                }))
            }));
            return qe.set(n, t), t
        }

        function $e(n) {
            return Je(n).then((function(n) {
                if (!n.contentWindow) throw new Error("Could not find window in iframe");
                return n.contentWindow
            }))
        }

        function Xe(n, e, t) {
            void 0 === n && (n = "div"), void 0 === e && (e = {}), n = n.toLowerCase();
            var r = document.createElement(n);
            if (e.style && wn(r.style, e.style), e.class && (r.className = e.class.join(" ")), e.id && r.setAttribute("id", e.id), e.attributes)
                for (var o = 0, i = Object.keys(e.attributes); o < i.length; o++) {
                    var a = i[o];
                    r.setAttribute(a, e.attributes[a])
                }
            if (e.styleSheet && Ye(r, e.styleSheet), t && He(t, r), e.html)
                if ("iframe" === n) {
                    if (!t || !r.contentWindow) throw new Error("Iframe html can not be written unless container provided and iframe in DOM");
                    Ge(r.contentWindow, e.html)
                } else r.innerHTML = e.html;
            return r
        }

        function Qe(n, e) {
            void 0 === n && (n = {});
            var t = n.attributes || {},
                r = n.style || {},
                o = Xe("iframe", {
                    attributes: Object(k.a)({
                        allowTransparency: "true"
                    }, t),
                    style: Object(k.a)({
                        backgroundColor: "transparent",
                        border: "none"
                    }, r),
                    html: n.html,
                    class: n.class
                }),
                i = window.navigator.userAgent.match(/MSIE|Edge/i);
            return o.hasAttribute("id") || o.setAttribute("id", Z()), Je(o), e && ze(e).appendChild(o), (n.url || i) && o.setAttribute("src", n.url || "about:blank"), o
        }

        function nt(n, e, t) {
            return n.addEventListener(e, t), {
                cancel: function() {
                    n.removeEventListener(e, t)
                }
            }
        }

        function et(n, e, t) {
            t = on(t);
            for (var r = 0; r < e.length; r++) n.addEventListener(e[r], t);
            return {
                cancel: on((function() {
                    for (var r = 0; r < e.length; r++) n.removeEventListener(e[r], t)
                }))
            }
        }
        var tt = ["webkit", "moz", "ms", "o"];

        function rt(n, e, t) {
            n.style[e] = t;
            for (var r = Ln(e), o = 0; o < tt.length; o++) n.style["" + tt[o] + r] = t
        }
        var ot = ["animationstart", "webkitAnimationStart", "oAnimationStart", "MSAnimationStart"],
            it = ["animationend", "webkitAnimationEnd", "oAnimationEnd", "MSAnimationEnd"];

        function at(n, e, t, r) {
            return void 0 === r && (r = 1e3), new D.a((function(o, i) {
                var a = ze(n);
                if (!a) return o();
                var u, c, s, d, f = !1;

                function l() {
                    clearTimeout(u), clearTimeout(c), s.cancel(), d.cancel()
                }
                s = et(a, ot, (function(n) {
                    n.target === a && n.animationName === e && (clearTimeout(u), n.stopPropagation(), s.cancel(), f = !0, c = setTimeout((function() {
                        l(), o()
                    }), r))
                })), d = et(a, it, (function(n) {
                    if (n.target === a && n.animationName === e) return l(), "string" == typeof n.animationName && n.animationName !== e ? i("Expected animation name to be " + e + ", found " + n.animationName) : o()
                })), rt(a, "animationName", e), u = setTimeout((function() {
                    if (!f) return l(), o()
                }), 200), t && t(l)
            }))
        }

        function ut(n) {
            n.style.setProperty("visibility", "")
        }

        function ct(n) {
            n.style.setProperty("visibility", "hidden", "important")
        }

        function st(n) {
            n.style.setProperty("display", "")
        }

        function dt(n) {
            n.style.setProperty("display", "none", "important")
        }

        function ft(n) {
            n && n.parentNode && n.parentNode.removeChild(n)
        }

        function lt(n, e, t) {
            var r = at(n, e, t);
            return st(n), r
        }

        function pt(n, e, t) {
            return at(n, e, t).then((function() {
                dt(n)
            }))
        }

        function ht(n, e) {
            n.classList.add(e)
        }

        function wt(n, e) {
            n.classList.remove(e)
        }

        function mt(n) {
            return !(n && n.parentNode && n.ownerDocument && n.ownerDocument.documentElement && n.ownerDocument.documentElement.contains(n))
        }

        function vt(n, e) {
            e = on(e);
            var t, r, o, i = !1,
                a = [],
                u = function() {
                    i = !0;
                    for (var n = 0; n < a.length; n++) a[n].disconnect();
                    t && t.cancel(), o && o.removeEventListener("unload", c), r && ft(r)
                },
                c = function() {
                    i || (e(), u())
                };
            if (mt(n)) return c(), {
                cancel: u
            };
            if (window.MutationObserver)
                for (var s = n.parentElement; s;) {
                    var d = new window.MutationObserver((function() {
                        mt(n) && c()
                    }));
                    d.observe(s, {
                        childList: !0
                    }), a.push(d), s = s.parentElement
                }
            return (r = document.createElement("iframe")).setAttribute("name", "__detect_close_" + Z() + "__"), r.style.display = "none", $e(r).then((function(n) {
                (o = Object(M.c)(n)).addEventListener("unload", c)
            })), n.appendChild(r), t = Cn((function() {
                mt(n) && c()
            }), 1e3), {
                cancel: u
            }
        }

        function yt(n, e) {
            void 0 === e && (e = window.document);
            for (var t = 0, r = ke("script", n); t < r.length; t++) {
                var o = r[t],
                    i = o.parentNode;
                if (i) {
                    var a = e.createElement("script");
                    a.text = o.textContent, i.replaceChild(a, o)
                }
            }
        }

        function gt(n, e, t) {
            var r = void 0 === t ? {} : t,
                o = r.width,
                i = void 0 === o || o,
                a = r.height,
                u = void 0 === a || a,
                c = r.interval,
                s = void 0 === c ? 100 : c,
                d = r.win,
                f = void 0 === d ? window : d,
                l = n.offsetWidth,
                p = n.offsetHeight,
                h = !1;
            e({
                width: l,
                height: p
            });
            var w, m, v = function() {
                if (!h && je(n)) {
                    var t = n.offsetWidth,
                        r = n.offsetHeight;
                    (i && t !== l || u && r !== p) && e({
                        width: t,
                        height: r
                    }), l = t, p = r
                }
            };
            return f.addEventListener("resize", v), void 0 !== f.ResizeObserver ? ((w = new f.ResizeObserver(v)).observe(n), m = Cn(v, 10 * s)) : void 0 !== f.MutationObserver ? ((w = new f.MutationObserver(v)).observe(n, {
                attributes: !0,
                childList: !0,
                subtree: !0,
                characterData: !1
            }), m = Cn(v, 10 * s)) : m = Cn(v, s), {
                cancel: function() {
                    h = !0, w.disconnect(), window.removeEventListener("resize", v), m.cancel()
                }
            }
        }

        function Et(n) {
            var e = Ae();
            if (e && "function" == typeof e.getEntries)
                for (var t = e.getEntries(), r = 0; r < t.length; r++) {
                    var o = t[r];
                    if (o && o.name && 0 === o.name.indexOf(n) && "number" == typeof o.duration) return Math.floor(o.duration)
                }
        }

        function bt(n) {
            for (; n.parentNode;) n = n.parentNode;
            return "[object ShadowRoot]" === n.toString()
        }

        function _t(n) {
            for (; n.parentNode;) n = n.parentNode;
            if (bt(n)) return n
        }

        function Ot(n) {
            var e = _t(n);
            if (e && e.host) return e.host
        }

        function St(n) {
            var e = Ot(n);
            if (!e) throw new Error("Element is not in shadow dom");
            var t = "shadow-slot-" + Z(),
                r = document.createElement("slot");
            r.setAttribute("name", t), n.appendChild(r);
            var o = document.createElement("div");
            return o.setAttribute("slot", t), e.appendChild(o), bt(e) ? St(o) : o
        }

        function Pt(n) {
            var e = function(t) {
                return n.removeEventListener("focus", e), t.preventDefault(), n.blur(), !1
            };
            n.addEventListener("mousedown", (function() {
                n.addEventListener("focus", e), setTimeout((function() {
                    n.removeEventListener("focus", e)
                }), 1)
            }))
        }

        function Nt() {
            try {
                throw new Error("_")
            } catch (n) {
                return n.stack || ""
            }
        }
        var Ft = "undefined" != typeof document ? document.currentScript : null,
            Ct = X((function() {
                if (Ft) return Ft;
                if (Ft = function() {
                        try {
                            var n = Nt(),
                                e = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(n),
                                t = e && e[1];
                            if (!t) return;
                            for (var r = 0, o = [].slice.call(document.getElementsByTagName("script")).reverse(); r < o.length; r++) {
                                var i = o[r];
                                if (i.src && i.src === t) return i
                            }
                        } catch (n) {}
                    }()) return Ft;
                throw new Error("Can not determine current script")
            })),
            jt = Z(),
            At = X((function() {
                var n;
                try {
                    n = Ct()
                } catch (n) {
                    return jt
                }
                var e = n.getAttribute(le.UID);
                if (e && "string" == typeof e) return e;
                if ((e = n.getAttribute(le.UID + "-auto")) && "string" == typeof e) return e;
                if (n.src) {
                    var t = un(JSON.stringify({
                        src: n.src,
                        dataset: n.dataset
                    }));
                    e = "uid_" + t.slice(t.length - pe)
                } else e = Z();
                return n.setAttribute(le.UID + "-auto", e), e
            }));

        function Tt(n) {
            var e = n.url,
                t = n.target,
                r = n.body,
                o = n.method,
                i = void 0 === o ? "post" : o,
                a = document.createElement("form");
            if (a.setAttribute("target", t), a.setAttribute("method", i), a.setAttribute("action", e), a.style.display = "none", r)
                for (var u = 0, c = Object.keys(r); u < c.length; u++) {
                    var s, d = c[u],
                        f = document.createElement("input");
                    f.setAttribute("name", d), f.setAttribute("value", null == (s = r[d]) ? void 0 : s.toString()), a.appendChild(f)
                }
            he().appendChild(a), a.submit(), he().removeChild(a)
        }

        function xt(n) {
            var e = n.name,
                t = n.lifetime,
                r = void 0 === t ? 12e5 : t;
            return tn(xt, (function() {
                var n, t = "__" + e + "_storage__",
                    o = Z();

                function i(e) {
                    var r, i = Le();
                    if (n && (r = n), !r && i) {
                        var a = window.localStorage.getItem(t);
                        a && (r = JSON.parse(a))
                    }
                    r || (r = K()[t]), r || (r = {
                        id: o
                    }), r.id || (r.id = o), n = r;
                    var u = e(r);
                    return i ? window.localStorage.setItem(t, JSON.stringify(r)) : K()[t] = r, n = null, u
                }

                function a() {
                    return i((function(n) {
                        return n.id
                    }))
                }

                function u(n) {
                    return i((function(e) {
                        var t = e.__session__,
                            o = Date.now();
                        return t && o - t.created > r && (t = null), t || (t = {
                            guid: Z(),
                            created: o
                        }), e.__session__ = t, n(t)
                    }))
                }
                return {
                    getState: i,
                    getID: a,
                    isStateFresh: function() {
                        return a() === o
                    },
                    getSessionState: function(n) {
                        return u((function(e) {
                            return e.state = e.state || {}, n(e.state)
                        }))
                    },
                    getSessionID: function() {
                        return u((function(n) {
                            return n.guid
                        }))
                    }
                }
            }), [{
                name: e,
                lifetime: r
            }])
        }

        function Rt() {
            return xt({
                name: "belter_experiment"
            })
        }

        function It(n) {
            return Rt().getSessionState((function(e) {
                return e.loggedBeacons = e.loggedBeacons || [], -1 === e.loggedBeacons.indexOf(n) && (e.loggedBeacons.push(n), !0)
            }))
        }

        function kt(n) {
            return Math.floor(Math.random() * n)
        }

        function Dt(n) {
            var e, t = n.name,
                r = n.sample,
                o = void 0 === r ? 50 : r,
                i = n.logTreatment,
                a = void 0 === i ? rn : i,
                u = n.logCheckpoint,
                c = void 0 === u ? rn : u,
                s = n.sticky,
                d = void 0 === s || s ? function(n) {
                    return Rt().getState((function(e) {
                        return e.throttlePercentiles = e.throttlePercentiles || {}, e.throttlePercentiles[n] = e.throttlePercentiles[n] || kt(100), e.throttlePercentiles[n]
                    }))
                }(t) : kt(100),
                f = t + "_" + (e = d < o ? "test" : o >= 50 || o <= d && d < 2 * o ? "control" : "throttle"),
                l = !1,
                p = !1;
            try {
                window.localStorage && window.localStorage.getItem(t) && (p = !0)
            } catch (n) {}
            var h = {
                isEnabled: function() {
                    return "test" === e || p
                },
                isDisabled: function() {
                    return "test" !== e && !p
                },
                getTreatment: function() {
                    return f
                },
                log: function(n, e) {
                    return void 0 === e && (e = {}), l ? (It(f + "_" + JSON.stringify(e)) && a({
                        name: t,
                        treatment: f,
                        payload: e,
                        throttle: d
                    }), It(f + "_" + n + "_" + JSON.stringify(e)) && c({
                        name: t,
                        treatment: f,
                        checkpoint: n,
                        payload: e,
                        throttle: d
                    }), h) : h
                },
                logStart: function(n) {
                    return void 0 === n && (n = {}), l = !0, h.log("start", n)
                },
                logComplete: function(n) {
                    return void 0 === n && (n = {}), h.log("complete", n)
                }
            };
            return h
        }

        function Mt(n) {
            var e = n.name,
                t = n.version,
                r = void 0 === t ? "latest" : t,
                o = K(),
                i = "__" + e + "__" + r + "_global__",
                a = o[i] = o[i] || {};
            return {
                get: function(n, e) {
                    return e = e || {}, a[n] = a[n] || e
                }
            }
        }
        var Lt = [];

        function Wt(n) {
            var e = n.url,
                t = n.method,
                r = void 0 === t ? "get" : t,
                o = n.headers,
                i = void 0 === o ? {} : o,
                a = n.json,
                u = n.data,
                c = n.body,
                s = n.win,
                d = void 0 === s ? window : s,
                f = n.timeout,
                l = void 0 === f ? 0 : f;
            return new D.a((function(n, t) {
                if (a && u || a && c || u && a) throw new Error("Only options.json or options.data or options.body should be passed");
                for (var o = {}, s = 0, f = Object.keys(i); s < f.length; s++) {
                    var p = f[s];
                    o[p.toLowerCase()] = i[p]
                }
                a ? o["content-type"] = o["content-type"] || "application/json" : (u || c) && (o["content-type"] = o["content-type"] || "application/x-www-form-urlencoded; charset=utf-8"), o.accept = o.accept || "application/json";
                for (var h = 0; h < Lt.length; h++)
                    for (var w = (0, Lt[h])(), m = 0, v = Object.keys(w); m < v.length; m++) {
                        var y = v[m];
                        o[y.toLowerCase()] = w[y]
                    }
                var g = new d.XMLHttpRequest;
                for (var E in g.addEventListener("load", (function() {
                        var o = function(n) {
                            void 0 === n && (n = "");
                            for (var e = {}, t = 0, r = n.trim().split("\n"); t < r.length; t++) {
                                var o = r[t].split(":"),
                                    i = o[0],
                                    a = o.slice(1);
                                e[i.toLowerCase()] = a.join(":").trim()
                            }
                            return e
                        }(this.getAllResponseHeaders());
                        if (!this.status) return t(new Error("Request to " + r.toLowerCase() + " " + e + " failed: no response status code."));
                        var i = o["content-type"],
                            a = i && (0 === i.indexOf("application/json") || 0 === i.indexOf("text/json")),
                            u = this.responseText;
                        try {
                            u = JSON.parse(u)
                        } catch (n) {
                            if (a) return t(new Error("Invalid json: " + this.responseText + "."))
                        }
                        return n({
                            status: this.status,
                            headers: o,
                            body: u
                        })
                    }), !1), g.addEventListener("error", (function(n) {
                        t(new Error("Request to " + r.toLowerCase() + " " + e + " failed: " + n.toString() + "."))
                    }), !1), g.open(r, e, !0), o) o.hasOwnProperty(E) && g.setRequestHeader(E, o[E]);
                a ? c = JSON.stringify(a) : u && (c = Object.keys(u).map((function(n) {
                    return encodeURIComponent(n) + "=" + (u ? encodeURIComponent(u[n]) : "")
                })).join("&")), g.timeout = l, g.ontimeout = function() {
                    t(new Error("Request to " + r.toLowerCase() + " " + e + " has timed out"))
                }, g.send(c)
            }))
        }

        function Ht(n) {
            Lt.push(n)
        }
        var Ut = !0;

        function zt(n, e, t) {
            t.value = X(t.value, {
                name: e,
                thisNamespace: !0
            })
        }

        function Bt(n, e, t) {
            t.value = en(t.value, {
                name: e
            })
        }

        function qt(n) {
            return "string" == typeof n && /^[0-9]+%$/.test(n)
        }

        function Zt(n) {
            return "string" == typeof n && /^[0-9]+px$/.test(n)
        }

        function Kt(n) {
            if ("number" == typeof n) return n;
            var e = n.match(/^([0-9]+)(px|%)$/);
            if (!e) throw new Error("Could not match css value from " + n);
            return parseInt(e[1], 10)
        }

        function Gt(n) {
            return Kt(n) + "px"
        }

        function Vt(n) {
            return "number" == typeof n ? Gt(n) : qt(n) ? n : Gt(n)
        }

        function Yt(n, e) {
            return parseInt(n * Kt(e) / 100, 10)
        }

        function Jt(n, e) {
            if ("number" == typeof n) return n;
            if (qt(n)) return Yt(e, n);
            if (Zt(n)) return Kt(n);
            throw new Error("Can not normalize dimension: " + n)
        }

        function $t(n, e) {
            var t = (void 0 === e ? {} : e).timeout,
                r = void 0 === t ? 5e3 : t,
                o = [],
                i = [];
            return new D.a((function(e, t) {
                var a = setTimeout((function() {
                        o.length && t(new Error("Expected " + o[0].name + " to be called in " + r + "ms")), i.length && t(new Error("Expected " + i[0].name + " promise to complete in " + r + "ms"))
                    }), r),
                    u = function(n, e) {
                        void 0 === e && (e = rn);
                        var t = {
                            name: n,
                            handler: e
                        };
                        return o.push(t),
                            function() {
                                for (var r = this, a = arguments.length, u = new Array(a), c = 0; c < a; c++) u[c] = arguments[c];
                                ie(o, t);
                                var s = oe((function() {
                                        var n;
                                        return (n = e).call.apply(n, [r].concat(u))
                                    })),
                                    d = s.result,
                                    f = s.error;
                                if (f) throw i.push({
                                    name: n,
                                    promise: D.a.asyncReject(f)
                                }), f;
                                return i.push({
                                    name: n,
                                    promise: D.a.resolve(d)
                                }), d
                            }
                    },
                    c = function(n, e) {
                        return void 0 === e && (e = rn),
                            function() {
                                var t;
                                i.push({
                                    name: n,
                                    promise: D.a.asyncReject(new Error("Expected " + n + " to not be called"))
                                });
                                for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                                return (t = e).call.apply(t, [this].concat(o))
                            }
                    },
                    s = function(n, e) {
                        void 0 === e && (e = rn);
                        var t = {
                            name: n,
                            handler: e
                        };
                        return o.push(t),
                            function() {
                                for (var r = this, a = arguments.length, u = new Array(a), c = 0; c < a; c++) u[c] = arguments[c];
                                ie(o, t);
                                var s = oe((function() {
                                        var n;
                                        return (n = e).call.apply(n, [r].concat(u))
                                    })),
                                    d = s.result,
                                    f = s.error;
                                if (f) throw f;
                                return i.push({
                                    name: n,
                                    promise: D.a.resolve(d).then((function() {
                                        throw new Error("Expected " + n + " to throw an error")
                                    }), rn)
                                }), d
                            }
                    },
                    d = function() {
                        return D.a.try((function() {
                            if (i.length) {
                                var n = i[0];
                                return n.promise.finally((function() {
                                    ie(i, n)
                                })).then(d)
                            }
                        })).then((function() {
                            if (o.length) return D.a.delay(10).then(d)
                        }))
                    };
                i.push({
                    name: "wrapPromise handler",
                    promise: D.a.try((function() {
                        return n({
                            expect: u,
                            avoid: c,
                            expectError: s,
                            error: c,
                            wait: function() {
                                return D.a.resolve()
                            }
                        })
                    }))
                }), d().finally((function() {
                    clearTimeout(a)
                })).then(e, t)
            }))
        }
    }, function(n, e, t) {
        "use strict";

        function r(n) {
            try {
                if (!n) return !1;
                if ("undefined" != typeof Promise && n instanceof Promise) return !0;
                if ("undefined" != typeof window && "function" == typeof window.Window && n instanceof window.Window) return !1;
                if ("undefined" != typeof window && "function" == typeof window.constructor && n instanceof window.constructor) return !1;
                var e = {}.toString;
                if (e) {
                    var t = e.call(n);
                    if ("[object Window]" === t || "[object global]" === t || "[object DOMWindow]" === t) return !1
                }
                if ("function" == typeof n.then) return !0
            } catch (n) {
                return !1
            }
            return !1
        }
        t.d(e, "a", (function() {
            return f
        })), t(18);
        var o, i = [],
            a = [],
            u = 0;

        function c() {
            if (!u && o) {
                var n = o;
                o = null, n.resolve()
            }
        }

        function s() {
            u += 1
        }

        function d() {
            u -= 1, c()
        }
        var f = function() {
            function n(n) {
                var e = this;
                if (this.resolved = void 0, this.rejected = void 0, this.errorHandled = void 0, this.value = void 0, this.error = void 0, this.handlers = void 0, this.dispatching = void 0, this.stack = void 0, this.resolved = !1, this.rejected = !1, this.errorHandled = !1, this.handlers = [], n) {
                    var t, r, o = !1,
                        i = !1,
                        a = !1;
                    s();
                    try {
                        n((function(n) {
                            a ? e.resolve(n) : (o = !0, t = n)
                        }), (function(n) {
                            a ? e.reject(n) : (i = !0, r = n)
                        }))
                    } catch (n) {
                        return d(), void this.reject(n)
                    }
                    d(), a = !0, o ? this.resolve(t) : i && this.reject(r)
                }
            }
            var e = n.prototype;
            return e.resolve = function(n) {
                if (this.resolved || this.rejected) return this;
                if (r(n)) throw new Error("Can not resolve promise with another promise");
                return this.resolved = !0, this.value = n, this.dispatch(), this
            }, e.reject = function(n) {
                var e = this;
                if (this.resolved || this.rejected) return this;
                if (r(n)) throw new Error("Can not reject promise with another promise");
                if (!n) {
                    var t = n && "function" == typeof n.toString ? n.toString() : {}.toString.call(n);
                    n = new Error("Expected reject to be called with Error, got " + t)
                }
                return this.rejected = !0, this.error = n, this.errorHandled || setTimeout((function() {
                    e.errorHandled || function(n, e) {
                        if (-1 === i.indexOf(n)) {
                            i.push(n), setTimeout((function() {
                                throw n
                            }), 1);
                            for (var t = 0; t < a.length; t++) a[t](n, e)
                        }
                    }(n, e)
                }), 1), this.dispatch(), this
            }, e.asyncReject = function(n) {
                return this.errorHandled = !0, this.reject(n), this
            }, e.dispatch = function() {
                var e = this.resolved,
                    t = this.rejected,
                    o = this.handlers;
                if (!this.dispatching && (e || t)) {
                    this.dispatching = !0, s();
                    for (var i = function(n, e) {
                            return n.then((function(n) {
                                e.resolve(n)
                            }), (function(n) {
                                e.reject(n)
                            }))
                        }, a = 0; a < o.length; a++) {
                        var u = o[a],
                            c = u.onSuccess,
                            f = u.onError,
                            l = u.promise,
                            p = void 0;
                        if (e) try {
                            p = c ? c(this.value) : this.value
                        } catch (n) {
                            l.reject(n);
                            continue
                        } else if (t) {
                            if (!f) {
                                l.reject(this.error);
                                continue
                            }
                            try {
                                p = f(this.error)
                            } catch (n) {
                                l.reject(n);
                                continue
                            }
                        } if (p instanceof n && (p.resolved || p.rejected)) {
                            var h = p;
                            h.resolved ? l.resolve(h.value) : l.reject(h.error), h.errorHandled = !0
                        } else r(p) ? p instanceof n && (p.resolved || p.rejected) ? p.resolved ? l.resolve(p.value) : l.reject(p.error) : i(p, l) : l.resolve(p)
                    }
                    o.length = 0, this.dispatching = !1, d()
                }
            }, e.then = function(e, t) {
                if (e && "function" != typeof e && !e.call) throw new Error("Promise.then expected a function for success handler");
                if (t && "function" != typeof t && !t.call) throw new Error("Promise.then expected a function for error handler");
                var r = new n;
                return this.handlers.push({
                    promise: r,
                    onSuccess: e,
                    onError: t
                }), this.errorHandled = !0, this.dispatch(), r
            }, e.catch = function(n) {
                return this.then(void 0, n)
            }, e.finally = function(e) {
                if (e && "function" != typeof e && !e.call) throw new Error("Promise.finally expected a function");
                return this.then((function(t) {
                    return n.try(e).then((function() {
                        return t
                    }))
                }), (function(t) {
                    return n.try(e).then((function() {
                        throw t
                    }))
                }))
            }, e.timeout = function(n, e) {
                var t = this;
                if (this.resolved || this.rejected) return this;
                var r = setTimeout((function() {
                    t.resolved || t.rejected || t.reject(e || new Error("Promise timed out after " + n + "ms"))
                }), n);
                return this.then((function(n) {
                    return clearTimeout(r), n
                }))
            }, e.toPromise = function() {
                if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
                return Promise.resolve(this)
            }, e.lazy = function() {
                return this.errorHandled = !0, this
            }, n.resolve = function(e) {
                return e instanceof n ? e : r(e) ? new n((function(n, t) {
                    return e.then(n, t)
                })) : (new n).resolve(e)
            }, n.reject = function(e) {
                return (new n).reject(e)
            }, n.asyncReject = function(e) {
                return (new n).asyncReject(e)
            }, n.all = function(e) {
                var t = new n,
                    o = e.length,
                    i = [].slice();
                if (!o) return t.resolve(i), t;
                for (var a = function(n, e, r) {
                        return e.then((function(e) {
                            i[n] = e, 0 == (o -= 1) && t.resolve(i)
                        }), (function(n) {
                            r.reject(n)
                        }))
                    }, u = 0; u < e.length; u++) {
                    var c = e[u];
                    if (c instanceof n) {
                        if (c.resolved) {
                            i[u] = c.value, o -= 1;
                            continue
                        }
                    } else if (!r(c)) {
                        i[u] = c, o -= 1;
                        continue
                    }
                    a(u, n.resolve(c), t)
                }
                return 0 === o && t.resolve(i), t
            }, n.hash = function(e) {
                var t = {},
                    o = [],
                    i = function(n) {
                        if (e.hasOwnProperty(n)) {
                            var i = e[n];
                            r(i) ? o.push(i.then((function(e) {
                                t[n] = e
                            }))) : t[n] = i
                        }
                    };
                for (var a in e) i(a);
                return n.all(o).then((function() {
                    return t
                }))
            }, n.map = function(e, t) {
                return n.all(e.map(t))
            }, n.onPossiblyUnhandledException = function(n) {
                return function(n) {
                    return a.push(n), {
                        cancel: function() {
                            a.splice(a.indexOf(n), 1)
                        }
                    }
                }(n)
            }, n.try = function(e, t, r) {
                if (e && "function" != typeof e && !e.call) throw new Error("Promise.try expected a function");
                var o;
                s();
                try {
                    o = e.apply(t, r || [])
                } catch (e) {
                    return d(), n.reject(e)
                }
                return d(), n.resolve(o)
            }, n.delay = function(e) {
                return new n((function(n) {
                    setTimeout(n, e)
                }))
            }, n.isPromise = function(e) {
                return !!(e && e instanceof n) || r(e)
            }, n.flush = function() {
                return e = o = o || new n, c(), e;
                var e
            }, n
        }()
    }, function(n, e, t) {
        "use strict";

        function r(n) {
            return "[object RegExp]" === {}.toString.call(n)
        }
        t.d(e, "n", (function() {
            return d
        })), t.d(e, "m", (function() {
            return f
        })), t.d(e, "h", (function() {
            return h
        })), t.d(e, "q", (function() {
            return w
        })), t.d(e, "s", (function() {
            return m
        })), t.d(e, "c", (function() {
            return v
        })), t.d(e, "e", (function() {
            return _
        })), t.d(e, "v", (function() {
            return P
        })), t.d(e, "w", (function() {
            return N
        })), t.d(e, "o", (function() {
            return F
        })), t.d(e, "j", (function() {
            return C
        })), t.d(e, "r", (function() {
            return j
        })), t.d(e, "f", (function() {
            return A
        })), t.d(e, "p", (function() {
            return T
        })), t.d(e, "g", (function() {
            return R
        })), t.d(e, "l", (function() {
            return I
        })), t.d(e, "t", (function() {
            return k
        })), t.d(e, "x", (function() {
            return D
        })), t.d(e, "A", (function() {
            return M
        })), t.d(e, "i", (function() {
            return L
        })), t.d(e, "z", (function() {
            return W
        })), t.d(e, "u", (function() {
            return H
        })), t.d(e, "y", (function() {
            return U
        })), t.d(e, "k", (function() {
            return z
        })), t.d(e, "d", (function() {
            return B
        })), t.d(e, "a", (function() {
            return o
        })), t.d(e, "b", (function() {
            return i
        }));
        var o = {
                MOCK: "mock:",
                FILE: "file:",
                ABOUT: "about:"
            },
            i = {
                IFRAME: "iframe",
                POPUP: "popup"
            },
            a = "Call was rejected by callee.\r\n";

        function u(n) {
            return void 0 === n && (n = window), n.location.protocol
        }

        function c(n) {
            if (void 0 === n && (n = window), n.mockDomain) {
                var e = n.mockDomain.split("//")[0];
                if (e) return e
            }
            return u(n)
        }

        function s(n) {
            return void 0 === n && (n = window), c(n) === o.ABOUT
        }

        function d(n) {
            if (void 0 === n && (n = window), n) try {
                if (n.parent && n.parent !== n) return n.parent
            } catch (n) {}
        }

        function f(n) {
            if (void 0 === n && (n = window), n && !d(n)) try {
                return n.opener
            } catch (n) {}
        }

        function l(n) {
            try {
                return !0
            } catch (n) {}
            return !1
        }

        function p(n) {
            void 0 === n && (n = window);
            var e = n.location;
            if (!e) throw new Error("Can not read window location");
            var t = u(n);
            if (!t) throw new Error("Can not read window protocol");
            if (t === o.FILE) return o.FILE + "//";
            if (t === o.ABOUT) {
                var r = d(n);
                return r && l() ? p(r) : o.ABOUT + "//"
            }
            var i = e.host;
            if (!i) throw new Error("Can not read window host");
            return t + "//" + i
        }

        function h(n) {
            void 0 === n && (n = window);
            var e = p(n);
            return e && n.mockDomain && 0 === n.mockDomain.indexOf(o.MOCK) ? n.mockDomain : e
        }

        function w(n) {
            try {
                if (!n.location.href) return !0;
                if ("about:blank" === n.location.href) return !0
            } catch (n) {}
            return !1
        }

        function m(n) {
            if (! function(n) {
                    try {
                        if (n === window) return !0
                    } catch (n) {}
                    try {
                        var e = Object.getOwnPropertyDescriptor(n, "location");
                        if (e && !1 === e.enumerable) return !1
                    } catch (n) {}
                    try {
                        if (s(n) && l()) return !0
                    } catch (n) {}
                    try {
                        if (function(n) {
                                return void 0 === n && (n = window), c(n) === o.MOCK
                            }(n) && l()) return !0
                    } catch (n) {}
                    try {
                        if (p(n) === p(window)) return !0
                    } catch (n) {}
                    return !1
                }(n)) return !1;
            try {
                if (n === window) return !0;
                if (s(n) && l()) return !0;
                if (h(window) === h(n)) return !0
            } catch (n) {}
            return !1
        }

        function v(n) {
            if (!m(n)) throw new Error("Expected window to be same domain");
            return n
        }

        function y(n, e) {
            if (!n || !e) return !1;
            var t = d(e);
            return t ? t === n : -1 !== function(n) {
                var e = [];
                try {
                    for (; n.parent !== n;) e.push(n.parent), n = n.parent
                } catch (n) {}
                return e
            }(e).indexOf(n)
        }

        function g(n) {
            var e, t, r = [];
            try {
                e = n.frames
            } catch (t) {
                e = n
            }
            try {
                t = e.length
            } catch (n) {}
            if (0 === t) return r;
            if (t) {
                for (var o = 0; o < t; o++) {
                    var i = void 0;
                    try {
                        i = e[o]
                    } catch (n) {
                        continue
                    }
                    r.push(i)
                }
                return r
            }
            for (var a = 0; a < 100; a++) {
                var u = void 0;
                try {
                    u = e[a]
                } catch (n) {
                    return r
                }
                if (!u) return r;
                r.push(u)
            }
            return r
        }

        function E(n) {
            for (var e = [], t = 0, r = g(n); t < r.length; t++) {
                var o = r[t];
                e.push(o);
                for (var i = 0, a = E(o); i < a.length; i++) e.push(a[i])
            }
            return e
        }

        function b(n) {
            void 0 === n && (n = window);
            try {
                if (n.top) return n.top
            } catch (n) {}
            if (d(n) === n) return n;
            try {
                if (y(window, n) && window.top) return window.top
            } catch (n) {}
            try {
                if (y(n, window) && window.top) return window.top
            } catch (n) {}
            for (var e = 0, t = E(n); e < t.length; e++) {
                var r = t[e];
                try {
                    if (r.top) return r.top
                } catch (n) {}
                if (d(r) === r) return r
            }
        }

        function _(n) {
            var e = b(n);
            if (!e) throw new Error("Can not determine top window");
            var t = [].concat(E(e), [e]);
            return -1 === t.indexOf(n) && (t = [].concat(t, [n], E(n))), t
        }
        var O = [],
            S = [];

        function P(n, e) {
            void 0 === e && (e = !0);
            try {
                if (n === window) return !1
            } catch (n) {
                return !0
            }
            try {
                if (!n) return !0
            } catch (n) {
                return !0
            }
            try {
                if (n.closed) return !0
            } catch (n) {
                return !n || n.message !== a
            }
            if (e && m(n)) try {
                if (n.mockclosed) return !0
            } catch (n) {}
            try {
                if (!n.parent || !n.top) return !0
            } catch (n) {}
            var t = function(n, e) {
                for (var t = 0; t < n.length; t++) try {
                    if (n[t] === e) return t
                } catch (n) {}
                return -1
            }(O, n);
            if (-1 !== t) {
                var r = S[t];
                if (r && function(n) {
                        if (!n.contentWindow) return !0;
                        if (!n.parentNode) return !0;
                        var e = n.ownerDocument;
                        if (e && e.documentElement && !e.documentElement.contains(n)) {
                            for (var t = n; t.parentNode && t.parentNode !== t;) t = t.parentNode;
                            if (!t.host || !e.documentElement.contains(t.host)) return !0
                        }
                        return !1
                    }(r)) return !0
            }
            return !1
        }

        function N(n) {
            if (function() {
                    for (var n = 0; n < O.length; n++) {
                        var e = !1;
                        try {
                            e = O[n].closed
                        } catch (n) {}
                        e && (S.splice(n, 1), O.splice(n, 1))
                    }
                }(), n && n.contentWindow) try {
                O.push(n.contentWindow), S.push(n)
            } catch (n) {}
        }

        function F(n) {
            return (n = n || window).navigator.mockUserAgent || n.navigator.userAgent
        }

        function C(n, e) {
            for (var t = g(n), r = 0; r < t.length; r++) {
                var o = t[r];
                try {
                    if (m(o) && o.name === e && -1 !== t.indexOf(o)) return o
                } catch (n) {}
            }
            try {
                if (-1 !== t.indexOf(n.frames[e])) return n.frames[e]
            } catch (n) {}
            try {
                if (-1 !== t.indexOf(n[e])) return n[e]
            } catch (n) {}
        }

        function j(n, e) {
            return n === f(e)
        }

        function A(n) {
            return void 0 === n && (n = window), f(n = n || window) || d(n) || void 0
        }

        function T(n, e) {
            var t = A(e);
            if (t) return t === n;
            if (e === n) return !1;
            if (b(e) === e) return !1;
            for (var r = 0, o = g(n); r < o.length; r++)
                if (o[r] === e) return !0;
            return !1
        }

        function x(n, e) {
            for (var t = 0; t < n.length; t++)
                for (var r = n[t], o = 0; o < e.length; o++)
                    if (r === e[o]) return !0;
            return !1
        }

        function R(n) {
            void 0 === n && (n = window);
            for (var e = 0, t = n; t;)(t = d(t)) && (e += 1);
            return e
        }

        function I(n, e) {
            return void 0 === e && (e = 1),
                function(n, e) {
                    void 0 === e && (e = 1);
                    for (var t = n, r = 0; r < e; r++) {
                        if (!t) return;
                        t = d(t)
                    }
                    return t
                }(n, R(n) - e)
        }

        function k(n, e) {
            var t = b(n) || n,
                r = b(e) || e;
            try {
                if (t && r) return t === r
            } catch (n) {}
            var o = _(n),
                i = _(e);
            if (x(o, i)) return !0;
            var a = f(t),
                u = f(r);
            return a && x(_(a), i) || u && x(_(u), o), !1
        }

        function D(n, e) {
            if ("string" == typeof n) {
                if ("string" == typeof e) return "*" === n || e === n;
                if (r(e)) return !1;
                if (Array.isArray(e)) return !1
            }
            return r(n) ? r(e) ? n.toString() === e.toString() : !Array.isArray(e) && Boolean(e.match(n)) : !!Array.isArray(n) && (Array.isArray(e) ? JSON.stringify(n) === JSON.stringify(e) : !r(e) && n.some((function(n) {
                return D(n, e)
            })))
        }

        function M(n) {
            return Array.isArray(n) ? "(" + n.join(" | ") + ")" : r(n) ? "RegExp(" + n.toString() + ")" : n.toString()
        }

        function L(n) {
            return n.match(/^(https?|mock|file):\/\//) ? n.split("/").slice(0, 3).join("/") : h()
        }

        function W(n, e, t, r) {
            var o;
            void 0 === t && (t = 1e3), void 0 === r && (r = 1 / 0);
            var i = function() {
                if (P(n)) return o && clearTimeout(o), e();
                r <= 0 ? clearTimeout(o) : (r -= t, o = setTimeout(i, t))
            };
            return i(), {
                cancel: function() {
                    o && clearTimeout(o)
                }
            }
        }

        function H(n) {
            try {
                if (n === window) return !0
            } catch (n) {
                if (n && n.message === a) return !0
            }
            try {
                if ("[object Window]" === {}.toString.call(n)) return !0
            } catch (n) {
                if (n && n.message === a) return !0
            }
            try {
                if (window.Window && n instanceof window.Window) return !0
            } catch (n) {
                if (n && n.message === a) return !0
            }
            try {
                if (n && n.self === n) return !0
            } catch (n) {
                if (n && n.message === a) return !0
            }
            try {
                if (n && n.parent === n) return !0
            } catch (n) {
                if (n && n.message === a) return !0
            }
            try {
                if (n && n.top === n) return !0
            } catch (n) {
                if (n && n.message === a) return !0
            }
            try {
                if (n && "__unlikely_value__" === n.__cross_domain_utils_window_check__) return !1
            } catch (n) {
                return !0
            }
            try {
                if ("postMessage" in n && "self" in n && "location" in n) return !0
            } catch (n) {}
            return !1
        }

        function U(n) {
            if (0 !== L(n).indexOf(o.MOCK)) return n;
            throw new Error("Mock urls not supported out of test mode")
        }

        function z(n) {
            if (m(n)) return v(n).frameElement;
            for (var e = 0, t = document.querySelectorAll("iframe"); e < t.length; e++) {
                var r = t[e];
                if (r && r.contentWindow && r.contentWindow === n) return r
            }
        }

        function B(n) {
            if (function(n) {
                    return void 0 === n && (n = window), Boolean(d(n))
                }(n)) {
                var e = z(n);
                if (e && e.parentElement) return void e.parentElement.removeChild(e)
            }
            try {
                n.close()
            } catch (n) {}
        }
    }, function(n, e, t) {
        "use strict";

        function r(n) {
            try {
                if (!n) return !1;
                if ("undefined" != typeof Promise && n instanceof Promise) return !0;
                if ("undefined" != typeof window && "function" == typeof window.Window && n instanceof window.Window) return !1;
                if ("undefined" != typeof window && "function" == typeof window.constructor && n instanceof window.constructor) return !1;
                var e = {}.toString;
                if (e) {
                    var t = e.call(n);
                    if ("[object Window]" === t || "[object global]" === t || "[object DOMWindow]" === t) return !1
                }
                if ("function" == typeof n.then) return !0
            } catch (n) {
                return !1
            }
            return !1
        }
        t.d(e, "a", (function() {
            return f
        })), t(18);
        var o, i = [],
            a = [],
            u = 0;

        function c() {
            if (!u && o) {
                var n = o;
                o = null, n.resolve()
            }
        }

        function s() {
            u += 1
        }

        function d() {
            u -= 1, c()
        }
        var f = function() {
            function n(n) {
                var e = this;
                if (this.resolved = void 0, this.rejected = void 0, this.errorHandled = void 0, this.value = void 0, this.error = void 0, this.handlers = void 0, this.dispatching = void 0, this.stack = void 0, this.resolved = !1, this.rejected = !1, this.errorHandled = !1, this.handlers = [], n) {
                    var t, r, o = !1,
                        i = !1,
                        a = !1;
                    s();
                    try {
                        n((function(n) {
                            a ? e.resolve(n) : (o = !0, t = n)
                        }), (function(n) {
                            a ? e.reject(n) : (i = !0, r = n)
                        }))
                    } catch (n) {
                        return d(), void this.reject(n)
                    }
                    d(), a = !0, o ? this.resolve(t) : i && this.reject(r)
                }
            }
            var e = n.prototype;
            return e.resolve = function(n) {
                if (this.resolved || this.rejected) return this;
                if (r(n)) throw new Error("Can not resolve promise with another promise");
                return this.resolved = !0, this.value = n, this.dispatch(), this
            }, e.reject = function(n) {
                var e = this;
                if (this.resolved || this.rejected) return this;
                if (r(n)) throw new Error("Can not reject promise with another promise");
                if (!n) {
                    var t = n && "function" == typeof n.toString ? n.toString() : {}.toString.call(n);
                    n = new Error("Expected reject to be called with Error, got " + t)
                }
                return this.rejected = !0, this.error = n, this.errorHandled || setTimeout((function() {
                    e.errorHandled || function(n, e) {
                        if (-1 === i.indexOf(n)) {
                            i.push(n), setTimeout((function() {
                                throw n
                            }), 1);
                            for (var t = 0; t < a.length; t++) a[t](n, e)
                        }
                    }(n, e)
                }), 1), this.dispatch(), this
            }, e.asyncReject = function(n) {
                return this.errorHandled = !0, this.reject(n), this
            }, e.dispatch = function() {
                var e = this.resolved,
                    t = this.rejected,
                    o = this.handlers;
                if (!this.dispatching && (e || t)) {
                    this.dispatching = !0, s();
                    for (var i = function(n, e) {
                            return n.then((function(n) {
                                e.resolve(n)
                            }), (function(n) {
                                e.reject(n)
                            }))
                        }, a = 0; a < o.length; a++) {
                        var u = o[a],
                            c = u.onSuccess,
                            f = u.onError,
                            l = u.promise,
                            p = void 0;
                        if (e) try {
                            p = c ? c(this.value) : this.value
                        } catch (n) {
                            l.reject(n);
                            continue
                        } else if (t) {
                            if (!f) {
                                l.reject(this.error);
                                continue
                            }
                            try {
                                p = f(this.error)
                            } catch (n) {
                                l.reject(n);
                                continue
                            }
                        } if (p instanceof n && (p.resolved || p.rejected)) {
                            var h = p;
                            h.resolved ? l.resolve(h.value) : l.reject(h.error), h.errorHandled = !0
                        } else r(p) ? p instanceof n && (p.resolved || p.rejected) ? p.resolved ? l.resolve(p.value) : l.reject(p.error) : i(p, l) : l.resolve(p)
                    }
                    o.length = 0, this.dispatching = !1, d()
                }
            }, e.then = function(e, t) {
                if (e && "function" != typeof e && !e.call) throw new Error("Promise.then expected a function for success handler");
                if (t && "function" != typeof t && !t.call) throw new Error("Promise.then expected a function for error handler");
                var r = new n;
                return this.handlers.push({
                    promise: r,
                    onSuccess: e,
                    onError: t
                }), this.errorHandled = !0, this.dispatch(), r
            }, e.catch = function(n) {
                return this.then(void 0, n)
            }, e.finally = function(e) {
                if (e && "function" != typeof e && !e.call) throw new Error("Promise.finally expected a function");
                return this.then((function(t) {
                    return n.try(e).then((function() {
                        return t
                    }))
                }), (function(t) {
                    return n.try(e).then((function() {
                        throw t
                    }))
                }))
            }, e.timeout = function(n, e) {
                var t = this;
                if (this.resolved || this.rejected) return this;
                var r = setTimeout((function() {
                    t.resolved || t.rejected || t.reject(e || new Error("Promise timed out after " + n + "ms"))
                }), n);
                return this.then((function(n) {
                    return clearTimeout(r), n
                }))
            }, e.toPromise = function() {
                if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
                return Promise.resolve(this)
            }, e.lazy = function() {
                return this.errorHandled = !0, this
            }, n.resolve = function(e) {
                return e instanceof n ? e : r(e) ? new n((function(n, t) {
                    return e.then(n, t)
                })) : (new n).resolve(e)
            }, n.reject = function(e) {
                return (new n).reject(e)
            }, n.asyncReject = function(e) {
                return (new n).asyncReject(e)
            }, n.all = function(e) {
                var t = new n,
                    o = e.length,
                    i = [].slice();
                if (!o) return t.resolve(i), t;
                for (var a = function(n, e, r) {
                        return e.then((function(e) {
                            i[n] = e, 0 == (o -= 1) && t.resolve(i)
                        }), (function(n) {
                            r.reject(n)
                        }))
                    }, u = 0; u < e.length; u++) {
                    var c = e[u];
                    if (c instanceof n) {
                        if (c.resolved) {
                            i[u] = c.value, o -= 1;
                            continue
                        }
                    } else if (!r(c)) {
                        i[u] = c, o -= 1;
                        continue
                    }
                    a(u, n.resolve(c), t)
                }
                return 0 === o && t.resolve(i), t
            }, n.hash = function(e) {
                var t = {},
                    o = [],
                    i = function(n) {
                        if (e.hasOwnProperty(n)) {
                            var i = e[n];
                            r(i) ? o.push(i.then((function(e) {
                                t[n] = e
                            }))) : t[n] = i
                        }
                    };
                for (var a in e) i(a);
                return n.all(o).then((function() {
                    return t
                }))
            }, n.map = function(e, t) {
                return n.all(e.map(t))
            }, n.onPossiblyUnhandledException = function(n) {
                return function(n) {
                    return a.push(n), {
                        cancel: function() {
                            a.splice(a.indexOf(n), 1)
                        }
                    }
                }(n)
            }, n.try = function(e, t, r) {
                if (e && "function" != typeof e && !e.call) throw new Error("Promise.try expected a function");
                var o;
                s();
                try {
                    o = e.apply(t, r || [])
                } catch (e) {
                    return d(), n.reject(e)
                }
                return d(), n.resolve(o)
            }, n.delay = function(e) {
                return new n((function(n) {
                    setTimeout(n, e)
                }))
            }, n.isPromise = function(e) {
                return !!(e && e instanceof n) || r(e)
            }, n.flush = function() {
                return e = o = o || new n, c(), e;
                var e
            }, n
        }()
    }, function(n, e, t) {
        "use strict";

        function r(n, e) {
            if (null == n) return {};
            var t, r, o = {},
                i = Object.keys(n);
            for (r = 0; r < i.length; r++) e.indexOf(t = i[r]) >= 0 || (o[t] = n[t]);
            return o
        }
        t.d(e, "a", (function() {
            return r
        }))
    }, function(n, e, t) {
        "use strict";
        t.r(e), t.d(e, "setupSDK", (function() {
            return zn
        })), t.d(e, "SUPPORTED_BROWSERS", (function() {
            return A
        })), t.d(e, "CLIENT_ID_ALIAS", (function() {
            return x
        })), t.d(e, "URI", (function() {
            return R
        })), t.d(e, "getLogger", (function() {
            return Wn
        })), t.d(e, "sendCountMetric", (function() {
            return Hn
        })), t.d(e, "_TYPES", (function() {
            return Zn
        })), t.d(e, "TYPES", (function() {
            return qn.a
        })), t.d(e, "getSDKHost", (function() {
            return a
        })), t.d(e, "getProtocol", (function() {
            return u
        })), t.d(e, "getHost", (function() {
            return c
        })), t.d(e, "getHostName", (function() {
            return s
        })), t.d(e, "getPort", (function() {
            return d
        })), t.d(e, "getPath", (function() {
            return f
        })), t.d(e, "getEnv", (function() {
            return l
        })), t.d(e, "getPayPalDomain", (function() {
            return p
        })), t.d(e, "getPayPalAPIDomain", (function() {
            return h
        })), t.d(e, "getDefaultServiceStageHost", (function() {
            return w
        })), t.d(e, "getDefaultStageHost", (function() {
            return m
        })), t.d(e, "getDefaultAPIStageHost", (function() {
            return v
        })), t.d(e, "getStageHost", (function() {
            return y
        })), t.d(e, "getAPIStageHost", (function() {
            return g
        })), t.d(e, "getVersion", (function() {
            return E
        })), t.d(e, "getCorrelationID", (function() {
            return b
        })), t.d(e, "getDefaultNamespace", (function() {
            return _
        })), t.d(e, "getDebug", (function() {
            return O
        })), t.d(e, "getComponents", (function() {
            return S
        })), t.d(e, "getFundingEligibility", (function() {
            return P
        })), t.d(e, "getPlatform", (function() {
            return N
        })), t.d(e, "getDisableSetCookie", (function() {
            return F
        })), t.d(e, "getExperimentation", (function() {
            return C
        })), t.d(e, "getFirstRenderExperiments", (function() {
            return j
        })), t.d(e, "getSDKScript", (function() {
            return k
        })), t.d(e, "getSDKAttributes", (function() {
            return D
        })), t.d(e, "getSDKAttribute", (function() {
            return M
        })), t.d(e, "getSDKQueryParams", (function() {
            return L
        })), t.d(e, "getSDKQueryParam", (function() {
            return W
        })), t.d(e, "getScriptUrl", (function() {
            return H
        })), t.d(e, "getSDKQueryParamBool", (function() {
            return U
        })), t.d(e, "getClientID", (function() {
            return z
        })), t.d(e, "getMerchantID", (function() {
            return B
        })), t.d(e, "getIntent", (function() {
            return q
        })), t.d(e, "getCommit", (function() {
            return Z
        })), t.d(e, "getVault", (function() {
            return K
        })), t.d(e, "getCurrency", (function() {
            return G
        })), t.d(e, "getEnableFunding", (function() {
            return V
        })), t.d(e, "getDisableFunding", (function() {
            return Y
        })), t.d(e, "getDisableCard", (function() {
            return J
        })), t.d(e, "getBuyerCountry", (function() {
            return $
        })), t.d(e, "getNamespace", (function() {
            return X
        })), t.d(e, "getClientToken", (function() {
            return Q
        })), t.d(e, "getAmount", (function() {
            return nn
        })), t.d(e, "getClientAccessToken", (function() {
            return en
        })), t.d(e, "getPartnerAttributionID", (function() {
            return tn
        })), t.d(e, "getMerchantRequestedPopupsDisabled", (function() {
            return rn
        })), t.d(e, "getPageType", (function() {
            return on
        })), t.d(e, "getLocale", (function() {
            return an
        })), t.d(e, "getCSPNonce", (function() {
            return un
        })), t.d(e, "getEnableThreeDomainSecure", (function() {
            return cn
        })), t.d(e, "getSDKIntegrationSource", (function() {
            return sn
        })), t.d(e, "getJsSdkLibrary", (function() {
            return dn
        })), t.d(e, "getUserExperienceFlow", (function() {
            return fn
        })), t.d(e, "getUserIDToken", (function() {
            return ln
        })), t.d(e, "getSDKToken", (function() {
            return pn
        })), t.d(e, "decodeCustomerIdFromToken", (function() {
            return hn
        })), t.d(e, "getCustomerId", (function() {
            return wn
        })), t.d(e, "getShopperSessionId", (function() {
            return mn
        })), t.d(e, "isChildWindow", (function() {
            return vn
        })), t.d(e, "getUserAccessToken", (function() {
            return yn
        })), t.d(e, "getUserAuthCode", (function() {
            return gn
        })), t.d(e, "getCountry", (function() {
            return En
        })), t.d(e, "getLang", (function() {
            return bn
        })), t.d(e, "createConfigScript", (function() {
            return Yn
        })), t.d(e, "createFraudnetScript", (function() {
            return Jn
        })), t.d(e, "loadFraudnet", (function() {
            return $n
        })), t.d(e, "getSDKMeta", (function() {
            return Qn
        })), t.d(e, "createAccessToken", (function() {
            return ne
        })), t.d(e, "createOrder", (function() {
            return ee
        })), t.d(e, "createExperiment", (function() {
            return te
        })), t.d(e, "getClientMetadataID", (function() {
            return re
        })), t.d(e, "getSDKStorage", (function() {
            return oe
        })), t.d(e, "getSessionID", (function() {
            return ie
        })), t.d(e, "getStorageState", (function() {
            return ae
        })), t.d(e, "getStorageID", (function() {
            return ue
        })), t.d(e, "getSessionState", (function() {
            return ce
        })), t.d(e, "wasShopperInsightsUsed", (function() {
            return se
        })), t.d(e, "getEventEmitter", (function() {
            return le
        })), t.d(e, "insertMockSDKScript", (function() {
            return ye
        })), t.d(e, "callGraphQL", (function() {
            return ge
        })), t.d(e, "getGraphQLFundingEligibility", (function() {
            return Ee
        })), t.d(e, "getPayPalLoggerDomain", (function() {
            return Cn
        })), t.d(e, "buildPayPalUrl", (function() {
            return jn
        })), t.d(e, "buildPayPalAPIUrl", (function() {
            return An
        })), t.d(e, "getPayPalLoggerUrl", (function() {
            return Tn
        })), t.d(e, "getAuthAPIUrl", (function() {
            return xn
        })), t.d(e, "getOrderAPIUrl", (function() {
            return Rn
        })), t.d(e, "getPayPalDomainRegex", (function() {
            return In
        })), t.d(e, "getVenmoDomainRegex", (function() {
            return kn
        })), t.d(e, "isPayPalDomain", (function() {
            return Dn
        })), t.d(e, "isPayPalTrustedDomain", (function() {
            return Mn
        })), t.d(e, "isPayPalTrustedUrl", (function() {
            return Ln
        })), t.d(e, "getJsLibrary", (function() {
            return pe
        })), t.d(e, "getSDKInitTime", (function() {
            return he
        })), t.d(e, "setupLogger", (function() {
            return we
        })), t.d(e, "getComputedLocales", (function() {
            return I
        })), t.d(e, "buildDPoPHeaders", (function() {
            return ke
        }));
        var r = t(8),
            o = t(0),
            i = t(3);

        function a() {
            return __SDK_HOST__
        }

        function u() {
            return "undefined" != typeof __PROTOCOL__ ? __PROTOCOL__ : i.t.HTTPS
        }

        function c() {
            return __HOST__
        }

        function s() {
            return __HOSTNAME__
        }

        function d() {
            return __PORT__
        }

        function f() {
            return __PATH__
        }

        function l() {
            return "production"
        }

        function p() {
            return "https://www.paypal.com"
        }

        function h() {
            return __PAYPAL_API_DOMAIN__
        }

        function w() {
            if ("undefined" != typeof __SERVICE_STAGE_HOST__ && null !== __SERVICE_STAGE_HOST__) return __SERVICE_STAGE_HOST__
        }

        function m() {
            if ("undefined" != typeof __STAGE_HOST__ && null !== __STAGE_HOST__) return __STAGE_HOST__
        }

        function v() {
            var n = w(),
                e = m();
            return n || e || void 0
        }

        function y() {
            return m()
        }

        function g() {
            var n = v();
            if (n) return n.replace("www.", "api.")
        }

        function E() {
            return __VERSION__
        }

        function b() {
            return __CORRELATION_ID__
        }

        function _() {
            return __NAMESPACE__
        }

        function O() {
            return !1
        }

        function S() {
            return __COMPONENTS__
        }

        function P() {
            return __FUNDING_ELIGIBILITY__
        }

        function N() {
            return Object(o.I)() ? i.s.MOBILE : i.s.DESKTOP
        }

        function F() {
            return "undefined" != typeof __DISABLE_SET_COOKIE__ && __DISABLE_SET_COOKIE__
        }

        function C() {
            if ("undefined" != typeof __EXPERIMENTATION__ && __EXPERIMENTATION__) {
                var n = {};
                return __EXPERIMENTATION__.__EXPERIENCE__ && (n.experience = __EXPERIMENTATION__.__EXPERIENCE__), __EXPERIMENTATION__.__TREATMENT__ && (n.treatment = __EXPERIMENTATION__.__TREATMENT__), n
            }
            return null
        }

        function j() {
            return "undefined" != typeof __FIRST_RENDER_EXPERIMENTS__ ? __FIRST_RENDER_EXPERIMENTS__ : {}
        }
        var A = {
                msie: "11",
                firefox: "30",
                chrome: "27",
                safari: "7",
                opera: "16",
                msedge: "12",
                samsungBrowser: "2.1",
                silk: "59.3",
                ucbrowser: "10.0.0.488",
                vivaldi: "1.91"
            },
            T = "AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R",
            x = {
                sandbox: T,
                sb: T,
                test: T
            },
            R = {
                LOGGER: "/xoplatform/logger/api/logger",
                AUTH: "/v1/oauth2/token",
                ORDER: "/v2/checkout/orders"
            };

        function I(n) {
            var e = n.split("_"),
                t = e[0],
                r = e[1];
            t = i.q[t.toUpperCase()];
            var o = i.d[r = i.c[r]];
            return o && -1 !== o.indexOf(i.q.ZH_HANT) && t === i.q.ZH && (t = i.q.ZH_HANT), {
                lang: t,
                country: r
            }
        }
        var k = Object(o.U)((function() {
                try {
                    return Object(o.u)()
                } catch (n) {
                    throw function(n, e, t) {
                        var r = t ? Object(o.jb)(t) : "";
                        return new Error('PayPal Payments SDK script not found on page! Expected to find <script src="https://' + n + e + '">\n\n' + r)
                    }(a(), f(), n)
                }
            })),
            D = Object(o.U)((function() {
                for (var n = {}, e = 0, t = k().attributes; e < t.length; e++) {
                    var r = t[e];
                    0 === r.name.indexOf("data-") && (n[r.name] = r.value)
                }
                return n[o.a.UID] = Object(o.v)(), n
            }));

        function M(n, e) {
            return D()[n] || e
        }

        function L() {
            var n = k();
            return Object(o.bb)(n.src.split("?")[1] || "")
        }
        var W = function(n, e) {
            return L()[n] || e
        };

        function H() {
            var n = k().getAttribute("src");
            if (!n) throw new Error("Can not find src for sdk script");
            return n
        }

        function U(n, e) {
            return W(n, e ? e.toString() : i.u.FALSE) === i.u.TRUE
        }

        function z() {
            var n = W(i.w.CLIENT_ID);
            if (!n) throw new Error("Expected " + i.w.CLIENT_ID + " parameter in sdk url");
            return x[n] ? x[n] : n
        }

        function B() {
            var n = W(i.w.MERCHANT_ID);
            if ("*" === n) {
                var e = M(i.v.MERCHANT_ID);
                if (!e) throw new Error("Must pass " + i.v.MERCHANT_ID + " when " + i.w.MERCHANT_ID + "=* passed in url");
                var t = e.split(",");
                if (t.length <= 1) throw new Error("Must pass multiple merchant ids to " + i.v.MERCHANT_ID + ". If passing a single id, pass " + i.w.MERCHANT_ID + "=XYZ in url");
                if (t.some((function(n, e) {
                        return t && t.indexOf(n) !== e
                    }))) throw new Error("Duplicates " + i.v.MERCHANT_ID + ". Must pass unique merchant ids to " + i.v.MERCHANT_ID + ".");
                return t
            }
            return n ? n.split(",") : []
        }

        function q() {
            return W(i.w.INTENT, i.f)
        }

        function Z() {
            return U(i.w.COMMIT, q() === i.p.CAPTURE ? i.h : i.g)
        }

        function K() {
            return U(i.w.VAULT, i.i)
        }

        function G() {
            return W(i.w.CURRENCY, i.e)
        }

        function V() {
            var n = W(i.w.ENABLE_FUNDING);
            return n ? n.split(",") : []
        }

        function Y() {
            var n = W(i.w.DISABLE_FUNDING);
            return n ? n.split(",") : []
        }

        function J() {
            var n = W(i.w.DISABLE_CARD);
            return n ? n.split(",") : []
        }

        function $() {
            return W(i.w.BUYER_COUNTRY)
        }

        function X() {
            return M(i.v.NAMESPACE) || _()
        }

        function Q() {
            return M(i.v.CLIENT_TOKEN)
        }

        function nn() {
            var n = M(i.v.AMOUNT);
            if (n && !n.match(/^\d+\.\d\d$/)) throw new Error("Invalid amount: " + n);
            return n
        }

        function en() {
            var n = Q();
            if (n) return JSON.parse(Object(o.h)(n)).paypal.accessToken
        }

        function tn() {
            return M(i.v.PARTNER_ATTRIBUTION_ID)
        }

        function rn() {
            return "true" === M(i.v.POPUPS_DISABLED)
        }

        function on() {
            var n = M(i.v.PAGE_TYPE, "");
            if (-1 === Object(o.qb)(i.r).indexOf(n.toLowerCase()) && n.length) throw new Error("Invalid page type, '" + n + "'");
            return n.toLowerCase()
        }

        function an() {
            var n = W(i.w.LOCALE);
            if (n) return I(n);
            for (var e, t = function() {
                    var n = a[r],
                        e = n.country,
                        t = n.lang;
                    if (e = e && i.c[e], t = t && i.q[t.toUpperCase()], e && t && i.d[e] && -1 !== i.d[e].indexOf(t)) return {
                        v: {
                            country: e,
                            lang: t
                        }
                    };
                    if (t) {
                        var o = Object.keys(i.d).filter((function(n) {
                            return i.d[n].some((function(n) {
                                return n === t
                            }))
                        }));
                        if (1 === o.length) return {
                            v: {
                                country: o[0],
                                lang: t
                            }
                        }
                    }
                }, r = 0, a = Object(o.t)(); r < a.length; r++)
                if (e = t()) return e.v;
            for (var u = 0, c = Object(o.t)(); u < c.length; u++) {
                var s = c[u].country;
                if (i.d.hasOwnProperty(s)) return {
                    country: s,
                    lang: i.d[s][0]
                }
            }
            return {
                lang: i.q.EN,
                country: i.c.US
            }
        }

        function un() {
            return M(i.v.CSP_NONCE) || ""
        }

        function cn() {
            return D().hasOwnProperty(i.v.ENABLE_3DS)
        }

        function sn() {
            return M(i.v.SDK_INTEGRATION_SOURCE)
        }

        function dn() {
            return M(i.v.JS_SDK_LIBRARY)
        }

        function fn() {
            return M(i.v.USER_EXPERIENCE_FLOW)
        }

        function ln() {
            return M(i.v.SDK_TOKEN) && !M(i.v.USER_ID_TOKEN) ? M(i.v.SDK_TOKEN) : M(i.v.USER_ID_TOKEN)
        }

        function pn() {
            if (M(i.v.SDK_TOKEN) && M(i.v.USER_ID_TOKEN)) throw new Error("Do not pass SDK token and ID token");
            return M(i.v.SDK_TOKEN)
        }
        var hn = Object(o.U)((function(n) {
            try {
                if (n && "function" == typeof atob) {
                    var e = JSON.parse(window.atob(n.split(".")[1])).options;
                    return (void 0 === e ? {} : e).customer_id || ""
                }
                return ""
            } catch (n) {
                throw new Error("Error decoding SDK token")
            }
        }));

        function wn() {
            var n = M(i.v.SDK_TOKEN) || "";
            return hn(n)
        }

        function mn() {
            return M(i.v.SHOPPER_SESSION_ID) || ""
        }

        function vn() {
            return Boolean(window.xprops)
        }

        function yn() {}

        function gn() {}

        function En() {
            return an().country
        }

        function bn() {
            return an().lang
        }
        var _n = t(1),
            On = t(5),
            Sn = ["warn", "error"],
            Pn = ["error", "warn", "info", "debug"],
            Nn = function(n, e) {
                for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t])
            },
            Fn = t(2);

        function Cn() {
            if ("production" === i.j.LOCAL) {
                var n = y();
                if (!n) throw new Error("No stage host found");
                return u() + "://" + n
            }
            return "https://www.paypal.com"
        }

        function jn(n) {
            return void 0 === n && (n = ""), "https://www.paypal.com" + n
        }

        function An(n) {
            return void 0 === n && (n = ""), "" + (Object(Fn.s)("https://www.paypal.com") ? "https://www.paypal.com" : h()) + n
        }

        function Tn() {
            return jn(R.LOGGER)
        }

        function xn() {
            return An(R.AUTH)
        }

        function Rn() {
            return An(R.ORDER)
        }

        function In() {
            return "production" === i.j.LOCAL ? /.*loca.*/ : /\.paypal\.(com|cn)(:\d+)?$/
        }

        function kn() {
            return /http.*(\.|\/)venmo\.com(:\d*)?$/
        }

        function Dn() {
            return Boolean(Object(Fn.i)().match(In()))
        }

        function Mn() {
            return Boolean(Object(Fn.i)().match(In())) || Boolean(Object(Fn.i)().match(/http.*(\.|\/)venmo\.com(:\d*)?$/))
        }

        function Ln(n) {
            try {
                var e = new URL(n).origin;
                return Boolean(e.match(In())) || Boolean(e.match(/http.*(\.|\/)venmo\.com(:\d*)?$/))
            } catch (n) {
                return !1
            }
        }
        var Wn = Object(o.U)((function() {
                return function(n) {
                    var e = n.url,
                        t = n.prefix,
                        r = n.metricNamespacePrefix,
                        i = n.logLevel,
                        a = void 0 === i ? "warn" : i,
                        u = n.transport,
                        c = void 0 === u ? function(n) {
                            var e = n.url,
                                t = n.method,
                                r = n.headers,
                                i = n.json,
                                a = n.enableSendBeacon,
                                u = void 0 !== a && a;
                            return On.a.try((function() {
                                var n = window,
                                    a = Object(Fn.u)(n) ? Object(Fn.c)(n) : window,
                                    c = !1;
                                return function(n) {
                                    var e = n.headers,
                                        t = n.enableSendBeacon,
                                        r = e && Object.keys(e).length;
                                    return !!(window && window.navigator.sendBeacon && !r && t && window.Blob)
                                }({
                                    headers: r,
                                    enableSendBeacon: u
                                }) && (c = function(n) {
                                    var e = n.win,
                                        t = void 0 === e ? window : e,
                                        r = n.url,
                                        o = n.data,
                                        i = n.useBlob,
                                        a = void 0 === i || i;
                                    try {
                                        var u = JSON.stringify(o);
                                        if (!t.navigator.sendBeacon) throw new Error("No sendBeacon available");
                                        if (a) {
                                            var c = new Blob([u], {
                                                type: "application/json"
                                            });
                                            return t.navigator.sendBeacon(r, c)
                                        }
                                        return t.navigator.sendBeacon(r, u)
                                    } catch (n) {
                                        return !1
                                    }
                                }({
                                    win: a,
                                    url: e,
                                    data: i,
                                    useBlob: !0
                                })), c || Object(o.fb)({
                                    win: a,
                                    url: e,
                                    method: t,
                                    headers: r,
                                    json: i
                                })
                            })).then(o.W)
                        } : u,
                        s = n.flushInterval,
                        d = void 0 === s ? 6e4 : s,
                        f = n.enableSendBeacon,
                        l = void 0 !== f && f,
                        p = [],
                        h = [],
                        w = [],
                        m = [],
                        v = [],
                        y = [],
                        g = [],
                        E = [];

                    function b(n, e, t) {
                        if (Object(o.G)() && window.console && window.console.log && !(Pn.indexOf(n) > Pn.indexOf(a))) {
                            var r = [e];
                            r.push(t), (t.error || t.warning) && r.push("\n\n", t.error || t.warning);
                            try {
                                window.console[n] && window.console[n].apply ? window.console[n].apply(window.console, r) : window.console.log && window.console.log.apply && window.console.log.apply(window.console, r)
                            } catch (n) {}
                        }
                    }

                    function _() {
                        return On.a.try((function() {
                            if (Object(o.G)() && "file:" !== window.location.protocol && (p.length || h.length || w.length)) {
                                for (var n = {}, t = 0; t < v.length; t++) Nn(n, (0, v[t])(n));
                                for (var r, i = {}, a = 0; a < E.length; a++) Nn(i, (0, E[a])(i));
                                return e && (r = c({
                                    method: "POST",
                                    url: e,
                                    headers: i,
                                    json: {
                                        events: p,
                                        meta: n,
                                        tracking: h,
                                        metrics: w
                                    },
                                    enableSendBeacon: l
                                }).catch(o.W)), p = [], h = [], w = [], On.a.resolve(r).then(o.W)
                            }
                        }))
                    }
                    var O = Object(o.db)(_);

                    function S(n, e, r) {
                        if (void 0 === r && (r = {}), !Object(o.G)()) return F;
                        t && (e = t + "_" + e);
                        for (var i = Object(_n.a)({}, Object(o.Y)(r), {
                                timestamp: Date.now().toString()
                            }), a = 0; a < m.length; a++) Nn(i, (0, m[a])(i));
                        return function(n, e, t) {
                            p.push({
                                level: n,
                                event: e,
                                payload: t
                            }), -1 !== Sn.indexOf(n) && O()
                        }(n, e, i), b(n, e, i), F
                    }

                    function P(n, e) {
                        return n.push(e), F
                    }

                    function N(n) {
                        if (!Object(o.G)()) return F;
                        r && (n.metricNamespace = r + "." + n.metricNamespace), g.length > 0 && !n.dimensions && (n.dimensions = {});
                        for (var e = 0; e < g.length; e++) Nn(n.dimensions || {}, (0, g[e])(n.dimensions || {}));
                        return b("debug", "metric." + n.metricNamespace, n.dimensions || {}), w.push(n), F
                    }
                    Object(o.G)() && Object(o.gb)(O, d), "object" == typeof window && (window.addEventListener("beforeunload", (function() {
                        _()
                    })), window.addEventListener("unload", (function() {
                        _()
                    })), window.addEventListener("pagehide", (function() {
                        _()
                    })));
                    var F = {
                        debug: function(n, e) {
                            return S("debug", n, e)
                        },
                        info: function(n, e) {
                            return S("info", n, e)
                        },
                        warn: function(n, e) {
                            return S("warn", n, e)
                        },
                        error: function(n, e) {
                            return S("error", n, e)
                        },
                        track: function(n) {
                            if (void 0 === n && (n = {}), !Object(o.G)()) return F;
                            for (var e = Object(o.Y)(n), t = 0; t < y.length; t++) Nn(e, (0, y[t])(e));
                            return b("debug", "track", e), h.push(e), F
                        },
                        metric: N,
                        metricCounter: function(n) {
                            var e;
                            return N({
                                metricNamespace: n.namespace,
                                metricEventName: n.event,
                                metricValue: null != (e = n.value) ? e : 1,
                                metricType: "counter",
                                dimensions: n.dimensions
                            })
                        },
                        metricGauge: function(n) {
                            return N({
                                metricNamespace: n.namespace,
                                metricEventName: n.event,
                                metricValue: n.value,
                                metricType: "gauge",
                                dimensions: n.dimensions
                            })
                        },
                        metricHistogram: function(n) {
                            return N({
                                metricNamespace: n.namespace,
                                metricEventName: n.event,
                                metricValue: n.value,
                                metricType: "histogram",
                                dimensions: n.dimensions
                            })
                        },
                        flush: O,
                        immediateFlush: _,
                        addPayloadBuilder: function(n) {
                            return P(m, n)
                        },
                        addMetaBuilder: function(n) {
                            return P(v, n)
                        },
                        addMetricDimensionBuilder: function(n) {
                            return P(g, n)
                        },
                        addTrackingBuilder: function(n) {
                            return P(y, n)
                        },
                        addHeaderBuilder: function(n) {
                            return P(E, n)
                        },
                        setTransport: function(n) {
                            return c = n, F
                        },
                        configure: function(n) {
                            return n.url && (e = n.url), n.prefix && (t = n.prefix), n.logLevel && (a = n.logLevel), n.transport && (c = n.transport), n.flushInterval && (d = n.flushInterval), n.enableSendBeacon && (l = n.enableSendBeacon), F
                        },
                        __buffer__: {
                            get events() {
                                return p
                            },
                            get tracking() {
                                return h
                            },
                            get metrics() {
                                return w
                            }
                        }
                    };
                    return Object.defineProperty(F, "__buffer__", {
                        writable: !1
                    }), F
                }({
                    url: F() ? Tn() + "?disableSetCookie=true" : Tn(),
                    metricNamespacePrefix: i.a
                })
            })),
            Hn = function(n) {
                var e = n.dimensions,
                    t = n.event,
                    r = n.name,
                    o = n.value,
                    i = void 0 === o ? 1 : o;
                return Wn().metric({
                    dimensions: e,
                    metricEventName: t,
                    metricNamespace: r,
                    metricValue: i,
                    metricType: "counter"
                })
            };

        function Un(n) {
            var e = function(n, e) {
                if ("object" != typeof n || !n) return n;
                var t = n[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var r = t.call(n, "string");
                    if ("object" != typeof r) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(n)
            }(n);
            return "symbol" == typeof e ? e : e + ""
        }

        function zn(n) {
            var e, t = X(),
                i = E(),
                a = window[t],
                u = a && a.version;
            if (a)
                if (u.startsWith("6.")) Wn().info("setup_sdk_v6_integration_found", {
                    v5Version: i,
                    v6Version: u
                }), delete window[t];
                else {
                    if (!a.__internal_destroy__) throw i ? new Error("Attempted to load sdk version " + i + " on page, but window." + t + " at version " + u + ' already loaded.\n\nTo load this sdk alongside the existing version, please specify a different namespace in the script tag, e.g. <script src="https://www.paypal.com/sdk/js?client-id=CLIENT_ID" data-namespace="paypal_sdk"><\/script>, then use the paypal_sdk namespace in place of paypal in your code.') : new Error("Attempted to load sdk version " + i + " on page, but window." + t + " already present. Please ensure window." + t + " is not previously set before loading the sdk");
                    a.__internal_destroy__(new Error("New SDK instance loaded, existing instance destroyed (" + t + " / " + i + ")")), delete window[t]
                } window[t] = window[t] || {}, window[t].version = i, "paypal" === t && null != (e = window.__paypal_sdk__) && e.v6 && (window.paypal.v6 = window.__paypal_sdk__.v6);
            for (var c = [], s = function() {
                    var e = n[d],
                        o = e.name,
                        i = e.requirer,
                        a = e.setupHandler;
                    try {
                        var u = i(),
                            s = u[a],
                            f = u.setup,
                            l = u.destroy,
                            p = Object(r.a)(u, [a, "setup", "destroy"].map(Un));
                        s ? s() : f && f(), l && c.push(l);
                        for (var h = 0, w = Object.keys(p); h < w.length; h++) {
                            var m = w[h],
                                v = p[m];
                            v && v.__get__ && (v = v.__get__()), v && (window[t][m] = v)
                        }
                    } catch (n) {
                        return setTimeout((function() {
                            throw new Error("Bootstrap Error for " + o + ":\n\n" + n.message + "\n\n" + n.stack)
                        }), 1), 1
                    }
                }, d = 0; d < n.length; d++) s();
            Object.defineProperty(window[t], "__internal_destroy__", {
                enumerable: !1,
                value: function(n) {
                    void 0 === n && (n = new Error("SDK instance destroyed (" + t + " / " + i + ")")), c.forEach((function(e) {
                        return e(n)
                    })), Object(o.m)(k()), delete window[t]
                }
            })
        }
        var Bn, qn = t(15),
            Zn = !0;

        function Kn(n, e, t, r, o, i, a) {
            try {
                var u = n[i](a),
                    c = u.value
            } catch (n) {
                return void t(n)
            }
            u.done ? e(c) : Promise.resolve(c).then(r, o)
        }

        function Gn(n) {
            return function() {
                var e = this,
                    t = arguments;
                return new Promise((function(r, o) {
                    var i = n.apply(e, t);

                    function a(n) {
                        Kn(i, r, o, a, u, "next", n)
                    }

                    function u(n) {
                        Kn(i, r, o, a, u, "throw", n)
                    }
                    a(void 0)
                }))
            }
        }
        var Vn = ((Bn = {})[i.j.LOCAL] = "https://cdn-latest.static.engineering.dev.paypalinc.com/qaRdaAssets/fraudnet/async/fb-raw.js", Bn[i.j.STAGE] = "https://cdn-latest.static.engineering.dev.paypalinc.com/qaRdaAssets/fraudnet/async/fb-raw.js", Bn[i.j.SANDBOX] = "https://c.paypal.com/da/r/fb.js", Bn[i.j.PRODUCTION] = "https://c.paypal.com/da/r/fb.js", Bn[i.j.TEST] = "https://c.paypal.com/da/r/fb.js", Bn),
            Yn = function(n) {
                var e = n.env,
                    t = n.cspNonce,
                    r = void 0 === t ? "" : t,
                    o = n.clientMetadataID,
                    a = n.appName;
                return new On.a((function(n) {
                    var t, u = {
                        f: o,
                        s: a,
                        io: !0,
                        cb1: "fnCallback"
                    };
                    e === i.j.SANDBOX && (u.sandbox = !0);
                    var c = document.createElement("script");
                    c.setAttribute("nonce", r), c.setAttribute("type", "application/json"), c.setAttribute("id", "fconfig"), c.setAttribute("fncls", "fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99"), c.text = JSON.stringify(u), null == (t = document.body) || t.appendChild(c), n()
                }))
            },
            Jn = function(n) {
                var e = n.cspNonce,
                    t = n.env,
                    r = n.queryStringParams,
                    o = void 0 === r ? {} : r;
                return new On.a((function(n, r) {
                    var i, a = document.createElement("script"),
                        u = Object.keys(o).map((function(n) {
                            return n + "=" + encodeURIComponent(String(o[n]))
                        })).join("&"),
                        c = u.length ? Vn[t] + "?" + u : Vn[t];
                    a.setAttribute("nonce", e || ""), a.setAttribute("src", c), window.fnCallback = n, null == (i = document.body) || i.appendChild(a), a.addEventListener("load", (function() {
                        n()
                    })), a.addEventListener("error", (function() {
                        r(new Error("Fraudnet failed to load."))
                    })), a.addEventListener("abort", (function() {
                        r(new Error("Fraudnet load was aborted."))
                    }))
                }))
            },
            $n = Object(o.U)((function(n) {
                var e = n.env,
                    t = n.cspNonce,
                    r = n.queryStringParams,
                    o = void 0 === r ? {} : r;
                Yn({
                    env: e,
                    cspNonce: t,
                    clientMetadataID: n.clientMetadataID,
                    appName: n.appName
                });
                var i, a = Jn({
                    cspNonce: t,
                    env: e,
                    queryStringParams: o
                }).catch((function() {
                    Wn().warn("ppcp_axo_init_fraudnet_failed")
                }));
                return {
                    collect: (i = Gn((function*() {
                        try {
                            yield a, yield window.PAYPAL.asyncData.collect()
                        } catch (n) {
                            Wn().warn("ppcp_axo_collect_fraudnet_failed")
                        }
                    })), function() {
                        return i.apply(this, arguments)
                    })
                }
            })),
            Xn = [i.x.AMOUNT, i.x.MERCHANT_ID, i.x.PARTNER_ATTRIBUTION_ID, i.x.POPUPS_DISABLED, i.x.ENABLE_3DS, i.x.SDK_INTEGRATION_SOURCE, i.x.CLIENT_METADATA_ID, o.a.UID, i.x.CSP_NONCE];

        function Qn() {
            for (var n = H(), e = D(), t = {}, r = 0, i = Object.keys(e); r < i.length; r++) {
                var a = i[r]; - 1 !== Xn.indexOf(a) && (t[a] = e[a])
            }
            return Object(o.i)(JSON.stringify({
                url: n,
                attrs: t
            })).replace(/\=+$/, "")
        }
        var ne = Object(o.U)((function(n) {
            Wn().info("rest_api_create_access_token");
            var e = Object(o.i)(n + ":");
            return Object(o.fb)({
                method: "post",
                url: xn(),
                headers: {
                    Authorization: "Basic " + e
                },
                data: {
                    grant_type: "client_credentials"
                }
            }).then((function(e) {
                var t = e.body;
                if (t && "invalid_client" === t.error) throw new Error("Auth Api invalid client id: " + n + ":\n\n" + JSON.stringify(t, null, 4));
                if (!t || !t.access_token) throw new Error("Auth Api response error:\n\n" + JSON.stringify(t, null, 4));
                return t.access_token
            }))
        }));

        function ee(n, e, t) {
            var r = (void 0 === t ? {} : t).fptiState,
                a = void 0 === r ? "" : r;
            if (Wn().info("rest_api_create_order_token"), !n) throw new Error("Client ID not passed");
            if (!e) throw new Error("Expected order details to be passed");
            var u = G(),
                c = q(),
                s = B();
            if ((e = Object(_n.a)({}, e)).intent && e.intent.toLowerCase() !== c) throw new Error("Unexpected intent: " + e.intent + " passed to order.create. Please ensure you are passing /sdk/js?" + i.w.INTENT + "=" + e.intent.toLowerCase() + " in the paypal script tag.");
            return (e = Object(_n.a)({}, e, {
                intent: c.toUpperCase()
            })).purchase_units = e.purchase_units.map((function(n) {
                if (n.amount.currency_code && n.amount.currency_code !== u) throw new Error("Unexpected currency: " + n.amount.currency_code + " passed to order.create. Please ensure you are passing /sdk/js?" + i.w.CURRENCY + "=" + n.amount.currency_code + " in the paypal script tag.");
                var e = n.payee;
                if (e && !s) throw new Error("Pass " + i.w.MERCHANT_ID + "=XYZ in the paypal script tag. Pass " + i.w.MERCHANT_ID + "=" + i.y + " if you do not have access to the merchant id");
                return Object(_n.a)({}, n, {
                    payee: e,
                    amount: Object(_n.a)({}, n.amount, {
                        currency_code: u
                    })
                })
            })), e.application_context = e.application_context || {}, ne(n).then((function(n) {
                var t = {
                    Authorization: "Bearer " + n,
                    "PayPal-Partner-Attribution-Id": tn()
                };
                return Object(o.fb)({
                    method: "post",
                    url: Rn(),
                    headers: t,
                    json: e
                })
            })).then((function(n) {
                var e, t = n.body;
                if (!t || !t.id) throw new Error("Order Api response error:\n\n" + JSON.stringify(t, null, 4));
                return Wn().track(((e = {})[i.m.STATE] = a, e[i.m.TRANSITION] = "process_create_order", e[i.m.CONTEXT_TYPE] = "EC-Token", e[i.m.TOKEN] = t.id, e[i.m.CONTEXT_ID] = t.id, e)), t.id
            }))
        }

        function te(n, e, t) {
            var r = t || Wn();
            return Object(o.q)({
                name: n,
                sample: e,
                logTreatment: function(e) {
                    var t, o = e.treatment,
                        a = e.payload,
                        u = Object(_n.a)(((t = {})[i.m.STATE] = "PXP_CHECK", t[i.m.TRANSITION] = "process_pxp_check", t[i.m.EXPERIMENT_NAME] = n, t[i.m.TREATMENT_NAME] = o, t), a);
                    r.track(u), r.flush()
                },
                logCheckpoint: function(e) {
                    var t = e.treatment,
                        o = e.checkpoint,
                        i = e.payload; - 1 !== t.indexOf(n) ? r.info(t + "_" + o, i) : r.info(n + "_" + t + "_" + o, i), r.flush()
                }
            })
        }

        function re() {
            return M(i.x.CLIENT_METADATA_ID)
        }

        function oe() {
            return Object(o.A)({
                name: X(),
                stickySessionId: re() || ""
            })
        }

        function ie() {
            return oe().getSessionID()
        }

        function ae(n) {
            return oe().getState(n)
        }

        function ue() {
            return oe().getID()
        }

        function ce(n) {
            return oe().getSessionState(n)
        }

        function se() {
            var n = !1;
            return ce((function(e) {
                var t = e.shopperInsights;
                n = Boolean((null == t ? void 0 : t.shopperInsightsIsMemberUsed) || (null == t ? void 0 : t.getRecommendedPaymentMethodsUsed))
            })), n
        }
        var de, fe, le = Object(o.U)(o.p),
            pe = function() {
                return dn() || "none"
            };

        function he() {
            if (void 0 === de) throw new TypeError("SDK not initialized");
            return de
        }

        function we() {
            var n = Wn(),
                e = on() || "none",
                t = sn() || "none",
                r = pe(),
                a = E(),
                u = Z() ? i.o.COMMIT : i.o.CONTINUE,
                c = an(),
                s = c.lang,
                d = c.country,
                f = B();
            de = Date.now(), n.addPayloadBuilder((function() {
                return {
                    uid: ie(),
                    env: "production",
                    clientId: z(),
                    csnwCorrelationId: b(),
                    referrer: window.location.host,
                    version: a,
                    merchantId: f,
                    sessionId: ie(),
                    userAction: u
                }
            })), n.addTrackingBuilder((function() {
                var n;
                return (n = {})[i.m.CLIENT_ID] = z(), n[i.m.CONTEXT_CORRID] = b(), n[i.m.DATA_SOURCE] = i.k.PAYMENTS_SDK, n[i.m.FEED] = i.l.PAYMENTS_SDK, n[i.m.INTEGRATION_IDENTIFIER] = z(), n[i.m.JS_SDK_LIBRARY] = r, n[i.m.LOCALE] = s + "_" + d, n[i.m.PAGE_TYPE] = e, n[i.m.PARTNER_ATTRIBUTION_ID] = tn(), n[i.m.REFERER] = window.location.host, n[i.m.SDK_INTEGRATION_SOURCE] = t, n[i.m.SDK_NAME] = i.n.PAYMENTS_SDK, n[i.m.SDK_VERSION] = a, n[i.m.SELLER_ID] = f && f.toString(), n[i.m.SESSION_UID] = ie(), n[i.m.USER_ACTION] = u, n[i.m.USER_AGENT] = window.navigator && window.navigator.userAgent, n
            })), n.addMetricDimensionBuilder((function() {
                return i.z
            })), On.a.onPossiblyUnhandledException((function(e) {
                var t;
                n.track(((t = {})[i.m.ERROR_CODE] = "payments_sdk_error", t[i.m.ERROR_DESC] = Object(o.kb)(e), t)), n.error("paypal_js_sdk_v5_unhandled_exception", {
                    err: Object(o.jb)(e)
                }), n.flush().catch(o.W)
            })), Object(o.rb)().then((function() {
                var c, f, l = k(),
                    p = Object(o.y)(l.src),
                    h = Object(o.P)(),
                    w = Dn() && window.xprops ? "paypal" : "non_paypal";
                n.addPayloadBuilder((function() {
                    return {
                        loadedInFrame: w
                    }
                })).addTrackingBuilder((function() {
                    return {
                        loaded_in_frame: w
                    }
                })).addMetricDimensionBuilder((function() {
                    return {
                        isPayPalDomain: Boolean(w).toString()
                    }
                })), f = 0 === p ? "sdk_client_cache_hit" : "number" == typeof p ? "sdk_client_cache_miss" : "sdk_client_cache_unknown";
                var m = "number" == typeof p ? p : void 0;
                n.info("paypal_js_sdk_v5_init", Object(_n.a)({}, Object(o.M)() ? {
                    ie_intranet_mode: !0
                } : {}, {
                    uidAttribute: l.hasAttribute(o.a.UID) ? "present" : "missing",
                    loadTime: m,
                    cacheType: f,
                    jsSdkLibrary: r,
                    locale: s + "_" + d,
                    integrationSource: t,
                    localStorageEnabled: h
                })).track((c = {}, c[i.m.TRANSITION] = "process_js_sdk_init_client", c[i.m.SDK_LOAD_TIME] = m, c[i.m.SDK_CACHE] = f, c.local_storage_enabled = h, c)).metricCounter({
                    namespace: "sdk_client.init.count",
                    event: "init",
                    dimensions: {
                        components: S().join(","),
                        integrationSource: t,
                        jsSdkLibrary: r,
                        localStorageEnabled: h,
                        pageType: e,
                        token: Q() ? "client-token" : ln() ? "user-id-token" : pn() ? "sdk-token" : "none",
                        userAction: u,
                        version: a
                    }
                }).flush()
            }))
        }
        var me = ((fe = {})[i.w.CLIENT_ID] = "abcxyz123", fe),
            ve = {};

        function ye(n) {
            for (var e = void 0 === n ? {} : n, t = e.query, r = void 0 === t ? me : t, i = e.attributes, a = void 0 === i ? ve : i, u = document.querySelectorAll('script[type="test/javascript"]'), s = 0; s < u.length; s++) {
                var d = u[s];
                d && d.parentNode && d.parentNode.removeChild(d)
            }
            delete o.z.__inline_memoize_cache__, delete k.__inline_memoize_cache__, delete D.__inline_memoize_cache__;
            var l = document.createElement("script");
            l.setAttribute("type", "test/javascript"), l.setAttribute("id", "test-sdk-script");
            var p = Object(o.s)("https://" + c() + f(), {
                query: Object(_n.a)({}, me, r)
            });
            l.setAttribute("src", p);
            for (var h = 0, w = Object.keys(a); h < w.length; h++) {
                var m = w[h];
                l.setAttribute(m, a[m])
            }
            if (!document.body) throw new Error("No document body found");
            return document.body.appendChild(l), o.U.clear(), we(), p
        }

        function ge(n) {
            var e = n.query,
                t = n.variables,
                r = void 0 === t ? {} : t,
                i = n.headers,
                a = void 0 === i ? {} : i;
            return Object(o.fb)({
                url: jn("/graphql"),
                method: "POST",
                json: {
                    query: e,
                    variables: r
                },
                headers: Object(_n.a)({
                    "x-app-name": "hosted_fields"
                }, a)
            }).then((function(n) {
                var e = n.status,
                    t = n.body,
                    r = t.errors || [];
                if (r.length) {
                    var o = r[0].message || JSON.stringify(r[0]);
                    throw new Error(o)
                }
                if (200 !== e) throw new Error("/graphql returned status " + e);
                return t.data
            }))
        }

        function Ee(n) {
            var e, t, r, i, a, u, c, s, d, f;
            return ge({
                query: "\n            query GetFundingEligibility(\n                $clientID:String,\n                $merchantID:[ String ],\n                $buyerCountry:CountryCodes,\n                $currency:SupportedCountryCurrencies,\n                $intent:FundingEligibilityIntent,\n                $commit:Boolean,\n                $vault:Boolean,\n                $enableFunding:[ SupportedPaymentMethodsType ],\n                $disableFunding:[ SupportedPaymentMethodsType ],\n                $disableCard:[ SupportedCardsType ]\n            ) {\n            fundingEligibility(\n                clientId:$clientID,\n                buyerCountry:$buyerCountry,\n                currency:$currency,\n                intent:$intent,\n                commit:$commit,\n                vault:$vault,\n                enableFunding:$enableFunding,\n                disableFunding:$disableFunding,\n                disableCard:$disableCard,\n                merchantId:$merchantID\n            ) {\n                " + n + "\n            }\n          }\n        ",
                variables: (e = z(), t = B(), r = $(), i = G(), a = Z(), u = K(), c = q(), s = V(), d = Y(), f = J(), {
                    clientID: e,
                    merchantID: t,
                    buyerCountry: r,
                    currency: i,
                    commit: a,
                    vault: u,
                    intent: c ? c.toUpperCase() : c,
                    enableFunding: s ? s.map((function(n) {
                        return n && n.toUpperCase()
                    })) : s,
                    disableFunding: d ? d.map((function(n) {
                        return n && n.toUpperCase()
                    })) : d,
                    disableCard: f ? f.map((function(n) {
                        return n && n.toUpperCase()
                    })) : f
                })
            }).then((function(n) {
                if (!n || !n.fundingEligibility) throw new Error("GraphQL fundingEligibility returned no fundingEligibility object");
                return n && n.fundingEligibility
            })).catch((function(n) {
                return Wn().error("graphql_fundingeligibility_error", {
                    err: Object(o.jb)(n)
                }), On.a.reject(n)
            }))
        }
        var be, _e, Oe, Se, Pe, Ne, Fe = {
                alg: "RS256",
                create: {
                    hash: "SHA-256",
                    modulusLength: 4096,
                    name: "RSASSA-PKCS1-v1_5",
                    publicExponent: new Uint8Array([1, 0, 1])
                },
                extractable: !1,
                sign: {
                    hash: "SHA-256",
                    name: "RSASSA-PKCS1-v1_5"
                },
                usages: ["sign", "verify"]
            },
            Ce = (_e = Gn((function*() {
                if (!be) {
                    var n = Fe.create,
                        e = Fe.extractable,
                        t = Fe.usages,
                        r = yield window.crypto.subtle.generateKey(n, e, t);
                    be = be || {
                        publicKey: r.publicKey,
                        privateKey: r.privateKey
                    }
                }
                return be
            })), function() {
                return _e.apply(this, arguments)
            }),
            je = function(n) {
                return new Uint8Array(n.split("").map((function(n) {
                    return n.charCodeAt(0)
                })))
            },
            Ae = function(n) {
                return String.fromCharCode.apply(String, n)
            },
            Te = function(n) {
                return btoa(n).replace(/[=]+/g, "").replace(/\+/g, "-").replace(/\//g, "_")
            },
            xe = (Oe = Gn((function*(n) {
                var e = je(n),
                    t = yield window.crypto.subtle.digest("sha-256", e), r = Ae(new Uint8Array(t));
                return Te(r)
            })), function(n) {
                return Oe.apply(this, arguments)
            }),
            Re = (Se = Gn((function*(n) {
                var e = n.crv,
                    t = n.e,
                    r = n.kty,
                    o = n.n,
                    i = n.x,
                    a = n.y;
                return yield xe(JSON.stringify({
                    crv: e,
                    e: t,
                    kty: r,
                    n: o,
                    x: i,
                    y: a
                }))
            })), function(n) {
                return Se.apply(this, arguments)
            }),
            Ie = (Pe = Gn((function*(n) {
                var e = n.accessToken,
                    t = n.method,
                    r = n.nonce,
                    o = n.publicKey,
                    i = n.privateKey,
                    a = n.uri,
                    u = yield window.crypto.subtle.exportKey("jwk", o), c = Te(JSON.stringify({
                        alg: Fe.alg,
                        typ: "dpop+jwt",
                        jwk: u
                    })), s = {
                        ath: e ? yield xe(e) : void 0,
                        cnf: {
                            jkt: yield Re(u)
                        },
                        htm: t,
                        htu: a,
                        iat: Math.floor(new Date / 1e3),
                        jti: window.crypto.randomUUID(),
                        nonce: r
                    }, d = Te(JSON.stringify(s)), f = yield window.crypto.subtle.sign(Fe.sign, i, je(c + "." + d));
                return c + "." + d + "." + Te(Ae(new Uint8Array(f)))
            })), function(n) {
                return Pe.apply(this, arguments)
            }),
            ke = (Ne = Gn((function*(n) {
                var e = n.accessToken,
                    t = n.method,
                    r = n.uri,
                    o = n.nonce,
                    i = yield Ce(), a = i.privateKey, u = i.publicKey, c = yield Ie({
                        accessToken: e,
                        method: t,
                        uri: r,
                        nonce: o,
                        publicKey: u,
                        privateKey: a
                    });
                return Object(_n.a)({}, e && {
                    Authorization: "DPoP " + e
                }, {
                    DPoP: c
                })
            })), function(n) {
                return Ne.apply(this, arguments)
            })
    }, function(n, e, t) {
        "use strict";
        t.d(e, "a", (function() {
            return o
        }));
        var r = t(13);

        function o(n, e) {
            n.prototype = Object.create(e.prototype), n.prototype.constructor = n, Object(r.a)(n, e)
        }
    }, function(n, e, t) {
        "use strict";
        t.d(e, "a", (function() {
            return i
        }));
        var r = t(6);

        function o(n, e) {
            for (var t = 0; t < n.length; t++) try {
                if (n[t] === e) return t
            } catch (n) {}
            return -1
        }
        var i = function() {
            function n() {
                if (this.name = void 0, this.weakmap = void 0, this.keys = void 0, this.values = void 0, this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__", function() {
                        if ("undefined" == typeof WeakMap) return !1;
                        if (void 0 === Object.freeze) return !1;
                        try {
                            var n = new WeakMap,
                                e = {};
                            return Object.freeze(e), n.set(e, "__testvalue__"), "__testvalue__" === n.get(e)
                        } catch (n) {
                            return !1
                        }
                    }()) try {
                    this.weakmap = new WeakMap
                } catch (n) {}
                this.keys = [], this.values = []
            }
            var e = n.prototype;
            return e._cleanupClosedWindows = function() {
                for (var n = this.weakmap, e = this.keys, t = 0; t < e.length; t++) {
                    var o = e[t];
                    if (Object(r.u)(o) && Object(r.v)(o)) {
                        if (n) try {
                            n.delete(o)
                        } catch (n) {}
                        e.splice(t, 1), this.values.splice(t, 1), t -= 1
                    }
                }
            }, e.isSafeToReadWrite = function(n) {
                return !Object(r.u)(n)
            }, e.set = function(n, e) {
                if (!n) throw new Error("WeakMap expected key");
                var t = this.weakmap;
                if (t) try {
                    t.set(n, e)
                } catch (n) {
                    delete this.weakmap
                }
                if (this.isSafeToReadWrite(n)) try {
                    var r = this.name,
                        i = n[r];
                    return void(i && i[0] === n ? i[1] = e : Object.defineProperty(n, r, {
                        value: [n, e],
                        writable: !0
                    }))
                } catch (n) {}
                this._cleanupClosedWindows();
                var a = this.keys,
                    u = this.values,
                    c = o(a, n); - 1 === c ? (a.push(n), u.push(e)) : u[c] = e
            }, e.get = function(n) {
                if (!n) throw new Error("WeakMap expected key");
                var e = this.weakmap;
                if (e) try {
                    if (e.has(n)) return e.get(n)
                } catch (n) {
                    delete this.weakmap
                }
                if (this.isSafeToReadWrite(n)) try {
                    var t = n[this.name];
                    return t && t[0] === n ? t[1] : void 0
                } catch (n) {}
                this._cleanupClosedWindows();
                var r = o(this.keys, n);
                if (-1 !== r) return this.values[r]
            }, e.delete = function(n) {
                if (!n) throw new Error("WeakMap expected key");
                var e = this.weakmap;
                if (e) try {
                    e.delete(n)
                } catch (n) {
                    delete this.weakmap
                }
                if (this.isSafeToReadWrite(n)) try {
                    var t = n[this.name];
                    t && t[0] === n && (t[0] = t[1] = void 0)
                } catch (n) {}
                this._cleanupClosedWindows();
                var r = this.keys,
                    i = o(r, n); - 1 !== i && (r.splice(i, 1), this.values.splice(i, 1))
            }, e.has = function(n) {
                if (!n) throw new Error("WeakMap expected key");
                var e = this.weakmap;
                if (e) try {
                    if (e.has(n)) return !0
                } catch (n) {
                    delete this.weakmap
                }
                if (this.isSafeToReadWrite(n)) try {
                    var t = n[this.name];
                    return !(!t || t[0] !== n)
                } catch (n) {}
                return this._cleanupClosedWindows(), -1 !== o(this.keys, n)
            }, e.getOrSet = function(n, e) {
                if (this.has(n)) return this.get(n);
                var t = e();
                return this.set(n, t), t
            }, n
        }()
    }, function(n, e, t) {
        "use strict";
        t.d(e, "a", (function() {
            return i
        }));
        var r = t(2);

        function o(n, e) {
            for (var t = 0; t < n.length; t++) try {
                if (n[t] === e) return t
            } catch (n) {}
            return -1
        }
        var i = function() {
            function n() {
                if (this.name = void 0, this.weakmap = void 0, this.keys = void 0, this.values = void 0, this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__", function() {
                        if ("undefined" == typeof WeakMap) return !1;
                        if (void 0 === Object.freeze) return !1;
                        try {
                            var n = new WeakMap,
                                e = {};
                            return Object.freeze(e), n.set(e, "__testvalue__"), "__testvalue__" === n.get(e)
                        } catch (n) {
                            return !1
                        }
                    }()) try {
                    this.weakmap = new WeakMap
                } catch (n) {}
                this.keys = [], this.values = []
            }
            var e = n.prototype;
            return e._cleanupClosedWindows = function() {
                for (var n = this.weakmap, e = this.keys, t = 0; t < e.length; t++) {
                    var o = e[t];
                    if (Object(r.x)(o) && Object(r.y)(o)) {
                        if (n) try {
                            n.delete(o)
                        } catch (n) {}
                        e.splice(t, 1), this.values.splice(t, 1), t -= 1
                    }
                }
            }, e.isSafeToReadWrite = function(n) {
                return !Object(r.x)(n)
            }, e.set = function(n, e) {
                if (!n) throw new Error("WeakMap expected key");
                var t = this.weakmap;
                if (t) try {
                    t.set(n, e)
                } catch (n) {
                    delete this.weakmap
                }
                if (this.isSafeToReadWrite(n)) try {
                    var r = this.name,
                        i = n[r];
                    return void(i && i[0] === n ? i[1] = e : Object.defineProperty(n, r, {
                        value: [n, e],
                        writable: !0
                    }))
                } catch (n) {}
                this._cleanupClosedWindows();
                var a = this.keys,
                    u = this.values,
                    c = o(a, n); - 1 === c ? (a.push(n), u.push(e)) : u[c] = e
            }, e.get = function(n) {
                if (!n) throw new Error("WeakMap expected key");
                var e = this.weakmap;
                if (e) try {
                    if (e.has(n)) return e.get(n)
                } catch (n) {
                    delete this.weakmap
                }
                if (this.isSafeToReadWrite(n)) try {
                    var t = n[this.name];
                    return t && t[0] === n ? t[1] : void 0
                } catch (n) {}
                this._cleanupClosedWindows();
                var r = o(this.keys, n);
                if (-1 !== r) return this.values[r]
            }, e.delete = function(n) {
                if (!n) throw new Error("WeakMap expected key");
                var e = this.weakmap;
                if (e) try {
                    e.delete(n)
                } catch (n) {
                    delete this.weakmap
                }
                if (this.isSafeToReadWrite(n)) try {
                    var t = n[this.name];
                    t && t[0] === n && (t[0] = t[1] = void 0)
                } catch (n) {}
                this._cleanupClosedWindows();
                var r = this.keys,
                    i = o(r, n); - 1 !== i && (r.splice(i, 1), this.values.splice(i, 1))
            }, e.has = function(n) {
                if (!n) throw new Error("WeakMap expected key");
                var e = this.weakmap;
                if (e) try {
                    if (e.has(n)) return !0
                } catch (n) {
                    delete this.weakmap
                }
                if (this.isSafeToReadWrite(n)) try {
                    var t = n[this.name];
                    return !(!t || t[0] !== n)
                } catch (n) {}
                return this._cleanupClosedWindows(), -1 !== o(this.keys, n)
            }, e.getOrSet = function(n, e) {
                if (this.has(n)) return this.get(n);
                var t = e();
                return this.set(n, t), t
            }, n
        }()
    }, function(n, e, t) {
        "use strict";

        function r(n, e) {
            return (r = Object.setPrototypeOf || function(n, e) {
                return n.__proto__ = e, n
            })(n, e)
        }
        t.d(e, "a", (function() {
            return r
        }))
    }, function(n, e, t) {
        var r = t(9),
            o = r.getPayPalDomain,
            i = r.getSDKMeta,
            a = t(4).extendUrl,
            u = t(17).allowedButtonParams;

        function c() {
            return window.btoa(JSON.stringify({
                zoidVersion: "9_0_58",
                target: "DONATE",
                sdkVersion: "0.9.0"
            }))
        }

        function s(n, e) {
            var t = n.baseUrl;
            if (void 0 === e && (e = ""), t) return "" + t + e;
            switch (n.env) {
                case "production":
                    t = "https://www.paypal.com" + e;
                    break;
                case "sandbox":
                    t = "https://www.sandbox.paypal.com" + e;
                    break;
                case "stage":
                    t = "https://www.msmaster.qa.paypal.com" + e;
                    break;
                default:
                    t = o() + "/donate/", console.log("donateCheckoutUrl", t)
            }
            return t
        }

        function d(n) {
            var e = Object.keys(n).filter((function(e) {
                return null !== n[e] && u.includes(e)
            })).reduce((function(e, t) {
                return e[t] = n[t], e
            }), {});
            return n.token && (e.token = n.token), e.targetMeta = c(), e.sdkMeta = i(), e
        }
        n.exports = {
            getTargetMeta: c,
            getZoidUrl: s,
            getAllowedParams: d,
            getRedirectionUrl: function(n) {
                return function() {
                    var e = s(n, "/donate/");
                    return a(e, {
                        query: d(n)
                    })
                }
            }
        }
    }, function(n, e, t) {
        "use strict";
        t.d(e, "a", (function() {
            return r
        }));
        var r = !0
    }, function(n, e, t) {
        "use strict";

        function r(n) {
            return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                return n.__proto__ || Object.getPrototypeOf(n)
            })(n)
        }
        t.d(e, "a", (function() {
            return u
        }));
        var o = t(13);

        function i() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (n) {
                return !1
            }
        }

        function a(n, e, t) {
            return (a = i() ? Reflect.construct : function(n, e, t) {
                var r = [null];
                r.push.apply(r, e);
                var i = new(Function.bind.apply(n, r));
                return t && Object(o.a)(i, t.prototype), i
            }).apply(null, arguments)
        }

        function u(n) {
            var e = "function" == typeof Map ? new Map : void 0;
            return (u = function(n) {
                if (null === n || -1 === Function.toString.call(n).indexOf("[native code]")) return n;
                if ("function" != typeof n) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(n)) return e.get(n);
                    e.set(n, t)
                }

                function t() {
                    return a(n, arguments, r(this).constructor)
                }
                return t.prototype = Object.create(n.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), Object(o.a)(t, n)
            })(n)
        }
    }, function(n, e) {
        n.exports = {
            allowedButtonParams: ["hosted_button_id", "business", "amount", "currency_code", "no_recurring", "no_shipping", "no_note", "cn", "item_name", "item_number", "cancel_return", "notify_url", "return", "cpp_header_image", "image_url", "invoice", "custom", "rm", "night_phone_a", "night_phone_b", "night_phone_c", "first_name", "last_name", "email", "address1", "address2", "city", "state", "zip", "country", "button_source", "bn", "on0", "os0", "on1", "os1"]
        }
    }, function(n, e, t) {}, function(n, e, t) {
        "use strict";
        t.r(e), t.d(e, "Checkout", (function() {
            return Gt
        })), t.d(e, "Button", (function() {
            return Vt
        }));
        var r = t(9),
            o = t(4),
            i = t(1),
            a = t(6),
            u = t(7),
            c = t(11);

        function s(n) {
            void 0 === n && (n = window);
            var e = "__post_robot_10_0_46__";
            return n !== window ? n[e] : n[e] = n[e] || {}
        }
        var d = function() {
            return {}
        };

        function f(n, e) {
            return void 0 === n && (n = "store"), void 0 === e && (e = d), Object(o.getOrSet)(s(), n, (function() {
                var n = e();
                return {
                    has: function(e) {
                        return n.hasOwnProperty(e)
                    },
                    get: function(e, t) {
                        return n.hasOwnProperty(e) ? n[e] : t
                    },
                    set: function(e, t) {
                        return n[e] = t, t
                    },
                    del: function(e) {
                        delete n[e]
                    },
                    getOrSet: function(e, t) {
                        return Object(o.getOrSet)(n, e, t)
                    },
                    reset: function() {
                        n = e()
                    },
                    keys: function() {
                        return Object.keys(n)
                    }
                }
            }))
        }
        var l, p = function() {};

        function h() {
            var n = s();
            return n.WINDOW_WILDCARD = n.WINDOW_WILDCARD || new p, n.WINDOW_WILDCARD
        }

        function w(n, e) {
            return void 0 === n && (n = "store"), void 0 === e && (e = d), f("windowStore").getOrSet(n, (function() {
                var t = new c.a,
                    r = function(n) {
                        return t.getOrSet(n, e)
                    };
                return {
                    has: function(e) {
                        return r(e).hasOwnProperty(n)
                    },
                    get: function(e, t) {
                        var o = r(e);
                        return o.hasOwnProperty(n) ? o[n] : t
                    },
                    set: function(e, t) {
                        return r(e)[n] = t, t
                    },
                    del: function(e) {
                        delete r(e)[n]
                    },
                    getOrSet: function(e, t) {
                        var i = r(e);
                        return Object(o.getOrSet)(i, n, t)
                    }
                }
            }))
        }

        function m() {
            return f("instance").getOrSet("instanceID", o.uniqueID)
        }

        function v(n, e) {
            var t = e.domain,
                r = w("helloPromises"),
                o = r.get(n);
            o && o.resolve({
                domain: t
            });
            var i = u.a.resolve({
                domain: t
            });
            return r.set(n, i), i
        }

        function y(n, e) {
            return (0, e.send)(n, "postrobot_hello", {
                instanceID: m()
            }, {
                domain: "*",
                timeout: -1
            }).then((function(e) {
                var t = e.origin,
                    r = e.data.instanceID;
                return v(n, {
                    domain: t
                }), {
                    win: n,
                    domain: t,
                    instanceID: r
                }
            }))
        }

        function g(n, e) {
            var t = e.send;
            return w("windowInstanceIDPromises").getOrSet(n, (function() {
                return y(n, {
                    send: t
                }).then((function(n) {
                    return n.instanceID
                }))
            }))
        }

        function E(n) {
            w("knownWindows").set(n, !0)
        }

        function b(n) {
            return "object" == typeof n && null !== n && "string" == typeof n.__type__
        }

        function _(n) {
            return void 0 === n ? "undefined" : null === n ? "null" : Array.isArray(n) ? "array" : "function" == typeof n ? "function" : "object" == typeof n ? n instanceof Error ? "error" : "function" == typeof n.then ? "promise" : "[object RegExp]" === {}.toString.call(n) ? "regex" : "[object Date]" === {}.toString.call(n) ? "date" : "object" : "string" == typeof n ? "string" : "number" == typeof n ? "number" : "boolean" == typeof n ? "boolean" : void 0
        }

        function O(n, e) {
            return {
                __type__: n,
                __val__: e
            }
        }
        var S, P = ((l = {}).function = function() {}, l.error = function(n) {
                return O("error", {
                    message: n.message,
                    stack: n.stack,
                    code: n.code,
                    data: n.data
                })
            }, l.promise = function() {}, l.regex = function(n) {
                return O("regex", n.source)
            }, l.date = function(n) {
                return O("date", n.toJSON())
            }, l.array = function(n) {
                return n
            }, l.object = function(n) {
                return n
            }, l.string = function(n) {
                return n
            }, l.number = function(n) {
                return n
            }, l.boolean = function(n) {
                return n
            }, l.null = function(n) {
                return n
            }, l[void 0] = function(n) {
                return O("undefined", n)
            }, l),
            N = {},
            F = ((S = {}).function = function() {
                throw new Error("Function serialization is not implemented; nothing to deserialize")
            }, S.error = function(n) {
                var e = n.stack,
                    t = n.code,
                    r = n.data,
                    o = new Error(n.message);
                return o.code = t, r && (o.data = r), o.stack = e + "\n\n" + o.stack, o
            }, S.promise = function() {
                throw new Error("Promise serialization is not implemented; nothing to deserialize")
            }, S.regex = function(n) {
                return new RegExp(n)
            }, S.date = function(n) {
                return new Date(n)
            }, S.array = function(n) {
                return n
            }, S.object = function(n) {
                return n
            }, S.string = function(n) {
                return n
            }, S.number = function(n) {
                return n
            }, S.boolean = function(n) {
                return n
            }, S.null = function(n) {
                return n
            }, S[void 0] = function() {}, S),
            C = {};

        function j() {
            for (var n = f("idToProxyWindow"), e = 0, t = n.keys(); e < t.length; e++) {
                var r = t[e];
                n.get(r).shouldClean() && n.del(r)
            }
        }

        function A(n, e) {
            var t = e.send,
                r = e.id,
                i = void 0 === r ? Object(o.uniqueID)() : r,
                c = n.then((function(n) {
                    if (Object(a.s)(n)) return Object(a.c)(n).name
                })),
                s = n.then((function(n) {
                    if (Object(a.v)(n)) throw new Error("Window is closed, can not determine type");
                    return Object(a.m)(n) ? a.b.POPUP : a.b.IFRAME
                }));
            c.catch(o.noop), s.catch(o.noop);
            var d = function() {
                return n.then((function(n) {
                    if (!Object(a.v)(n)) return Object(a.s)(n) ? Object(a.c)(n).name : c
                }))
            };
            return {
                id: i,
                getType: function() {
                    return s
                },
                getInstanceID: Object(o.memoizePromise)((function() {
                    return n.then((function(n) {
                        return g(n, {
                            send: t
                        })
                    }))
                })),
                close: function() {
                    return n.then(a.d)
                },
                getName: d,
                focus: function() {
                    return n.then((function(n) {
                        n.focus()
                    }))
                },
                isClosed: function() {
                    return n.then((function(n) {
                        return Object(a.v)(n)
                    }))
                },
                setLocation: function(e, t) {
                    return void 0 === t && (t = {}), n.then((function(n) {
                        var r = window.location.protocol + "//" + window.location.host,
                            i = t.method,
                            u = void 0 === i ? "get" : i,
                            c = t.body;
                        if (0 === e.indexOf("/")) e = "" + r + e;
                        else if (!e.match(/^https?:\/\//) && 0 !== e.indexOf(r)) throw new Error("Expected url to be http or https url, or absolute path, got " + JSON.stringify(e));
                        if ("post" === u) return d().then((function(n) {
                            if (!n) throw new Error("Can not post to window without target name");
                            Object(o.submitForm)({
                                url: e,
                                target: n,
                                method: u,
                                body: c
                            })
                        }));
                        if ("get" !== u) throw new Error("Unsupported method: " + u);
                        if (Object(a.s)(n)) try {
                            if (n.location && "function" == typeof n.location.replace) return void n.location.replace(e)
                        } catch (n) {}
                        n.location = e
                    }))
                },
                setName: function(e) {
                    return n.then((function(n) {
                        var t = Object(a.s)(n),
                            r = Object(a.k)(n);
                        if (!t) throw new Error("Can not set name for cross-domain window: " + e);
                        Object(a.c)(n).name = e, r && r.setAttribute("name", e), c = u.a.resolve(e)
                    }))
                }
            }
        }
        new u.a((function(n) {
            if (window.document && window.document.body) return n(window.document.body);
            var e = setInterval((function() {
                if (window.document && window.document.body) return clearInterval(e), n(window.document.body)
            }), 10)
        }));
        var T = function() {
            function n(n) {
                var e = n.send,
                    t = n.win,
                    r = n.serializedWindow;
                this.id = void 0, this.isProxyWindow = !0, this.serializedWindow = void 0, this.actualWindow = void 0, this.actualWindowPromise = void 0, this.send = void 0, this.name = void 0, this.actualWindowPromise = new u.a, this.serializedWindow = r || A(this.actualWindowPromise, {
                    send: e
                }), f("idToProxyWindow").set(this.getID(), this), t && this.setWindow(t, {
                    send: e
                })
            }
            var e = n.prototype;
            return e.getID = function() {
                return this.serializedWindow.id
            }, e.getType = function() {
                return this.serializedWindow.getType()
            }, e.isPopup = function() {
                return this.getType().then((function(n) {
                    return n === a.b.POPUP
                }))
            }, e.setLocation = function(n, e) {
                var t = this;
                return this.serializedWindow.setLocation(n, e).then((function() {
                    return t
                }))
            }, e.getName = function() {
                return this.serializedWindow.getName()
            }, e.setName = function(n) {
                var e = this;
                return this.serializedWindow.setName(n).then((function() {
                    return e
                }))
            }, e.close = function() {
                var n = this;
                return this.serializedWindow.close().then((function() {
                    return n
                }))
            }, e.focus = function() {
                var n = this,
                    e = this.isPopup(),
                    t = this.getName(),
                    r = u.a.hash({
                        isPopup: e,
                        name: t
                    }).then((function(n) {
                        var e = n.name;
                        n.isPopup && e && window.open("", e, "noopener")
                    })),
                    o = this.serializedWindow.focus();
                return u.a.all([r, o]).then((function() {
                    return n
                }))
            }, e.isClosed = function() {
                return this.serializedWindow.isClosed()
            }, e.getWindow = function() {
                return this.actualWindow
            }, e.setWindow = function(n, e) {
                var t = e.send;
                this.actualWindow = n, this.actualWindowPromise.resolve(this.actualWindow), this.serializedWindow = A(this.actualWindowPromise, {
                    send: t,
                    id: this.getID()
                }), w("winToProxyWindow").set(n, this)
            }, e.awaitWindow = function() {
                return this.actualWindowPromise
            }, e.matchWindow = function(n, e) {
                var t = this,
                    r = e.send;
                return u.a.try((function() {
                    return t.actualWindow ? n === t.actualWindow : u.a.hash({
                        proxyInstanceID: t.getInstanceID(),
                        knownWindowInstanceID: g(n, {
                            send: r
                        })
                    }).then((function(e) {
                        var o = e.proxyInstanceID === e.knownWindowInstanceID;
                        return o && t.setWindow(n, {
                            send: r
                        }), o
                    }))
                }))
            }, e.unwrap = function() {
                return this.actualWindow || this
            }, e.getInstanceID = function() {
                return this.serializedWindow.getInstanceID()
            }, e.shouldClean = function() {
                return Boolean(this.actualWindow && Object(a.v)(this.actualWindow))
            }, e.serialize = function() {
                return this.serializedWindow
            }, n.unwrap = function(e) {
                return n.isProxyWindow(e) ? e.unwrap() : e
            }, n.serialize = function(e, t) {
                var r = t.send;
                return j(), n.toProxyWindow(e, {
                    send: r
                }).serialize()
            }, n.deserialize = function(e, t) {
                var r = t.send;
                return j(), f("idToProxyWindow").get(e.id) || new n({
                    serializedWindow: e,
                    send: r
                })
            }, n.isProxyWindow = function(n) {
                return Boolean(n && !Object(a.u)(n) && n.isProxyWindow)
            }, n.toProxyWindow = function(e, t) {
                var r = t.send;
                if (j(), n.isProxyWindow(e)) return e;
                var o = e;
                return w("winToProxyWindow").get(o) || new n({
                    win: o,
                    send: r
                })
            }, n
        }();

        function x(n, e, t, r, o) {
            var i = w("methodStore"),
                a = f("proxyWindowMethods");
            T.isProxyWindow(r) ? a.set(n, {
                val: e,
                name: t,
                domain: o,
                source: r
            }) : (a.del(n), i.getOrSet(r, (function() {
                return {}
            }))[n] = {
                domain: o,
                name: t,
                val: e,
                source: r
            })
        }

        function R(n, e) {
            var t = w("methodStore"),
                r = f("proxyWindowMethods");
            return t.getOrSet(n, (function() {
                return {}
            }))[e] || r.get(e)
        }

        function I(n, e, t, r, i) {
            var c, s, d;
            s = (c = {
                on: i.on,
                send: i.send
            }).on, d = c.send, f("builtinListeners").getOrSet("functionCalls", (function() {
                return s("postrobot_method", {
                    domain: "*"
                }, (function(n) {
                    var e = n.source,
                        t = n.origin,
                        r = n.data,
                        i = r.id,
                        c = r.name,
                        s = R(e, i);
                    if (!s) throw new Error("Could not find method '" + c + "' with id: " + r.id + " in " + Object(a.h)(window));
                    var f = s.source,
                        l = s.domain,
                        p = s.val;
                    return u.a.try((function() {
                        if (!Object(a.x)(l, t)) throw new Error("Method '" + r.name + "' domain " + JSON.stringify(Object(o.isRegex)(s.domain) ? s.domain.source : s.domain) + " does not match origin " + t + " in " + Object(a.h)(window));
                        if (T.isProxyWindow(f)) return f.matchWindow(e, {
                            send: d
                        }).then((function(n) {
                            if (!n) throw new Error("Method call '" + r.name + "' failed - proxy window does not match source in " + Object(a.h)(window))
                        }))
                    })).then((function() {
                        return p.apply({
                            source: e,
                            origin: t
                        }, r.args)
                    }), (function(n) {
                        return u.a.try((function() {
                            if (p.onError) return p.onError(n)
                        })).then((function() {
                            var e;
                            throw n.stack && (n.stack = "Remote call to " + c + "(" + (void 0 === (e = r.args) && (e = []), Object(o.arrayFrom)(e).map((function(n) {
                                return "string" == typeof n ? "'" + n + "'" : void 0 === n ? "undefined" : null === n ? "null" : "boolean" == typeof n ? n.toString() : Array.isArray(n) ? "[ ... ]" : "object" == typeof n ? "{ ... }" : "function" == typeof n ? "() => { ... }" : "<" + typeof n + ">"
                            })).join(", ") + ") failed\n\n") + n.stack), n
                        }))
                    })).then((function(n) {
                        return {
                            result: n,
                            id: i,
                            name: c
                        }
                    }))
                }))
            }));
            var l = t.__id__ || Object(o.uniqueID)();
            n = T.unwrap(n);
            var p = t.__name__ || t.name || r;
            return "string" == typeof p && "function" == typeof p.indexOf && 0 === p.indexOf("anonymous::") && (p = p.replace("anonymous::", r + "::")), T.isProxyWindow(n) ? (x(l, t, p, n, e), n.awaitWindow().then((function(n) {
                x(l, t, p, n, e)
            }))) : x(l, t, p, n, e), O("cross_domain_function", {
                id: l,
                name: p
            })
        }

        function k(n, e, t, r) {
            var o, i = r.on,
                u = r.send;
            return function(n, e) {
                void 0 === e && (e = N);
                var t = JSON.stringify(n, (function(n) {
                    var t = this[n];
                    if (b(this)) return t;
                    var r = _(t);
                    if (!r) return t;
                    var o = e[r] || P[r];
                    return o ? o(t, n) : t
                }));
                return void 0 === t ? "undefined" : t
            }(t, ((o = {}).promise = function(t, r) {
                return function(n, e, t, r, o) {
                    return O("cross_domain_zalgo_promise", {
                        then: I(n, e, (function(n, e) {
                            return t.then(n, e)
                        }), r, {
                            on: o.on,
                            send: o.send
                        })
                    })
                }(n, e, t, r, {
                    on: i,
                    send: u
                })
            }, o.function = function(t, r) {
                return I(n, e, t, r, {
                    on: i,
                    send: u
                })
            }, o.object = function(n) {
                return Object(a.u)(n) || T.isProxyWindow(n) ? O("cross_domain_window", T.serialize(n, {
                    send: u
                })) : n
            }, o))
        }

        function D(n, e, t, r) {
            var o, i = r.send;
            return function(n, e) {
                if (void 0 === e && (e = C), "undefined" !== n) return JSON.parse(n, (function(n, t) {
                    if (b(this)) return t;
                    var r, o;
                    if (b(t) ? (r = t.__type__, o = t.__val__) : (r = _(t), o = t), !r) return o;
                    var i = e[r] || F[r];
                    return i ? i(o, n) : o
                }))
            }(t, ((o = {}).cross_domain_zalgo_promise = function(n) {
                return function(n, e, t) {
                    return new u.a(t.then)
                }(0, 0, n)
            }, o.cross_domain_function = function(t) {
                return function(n, e, t, r) {
                    var o = t.id,
                        i = t.name,
                        u = r.send,
                        c = function(t) {
                            function r() {
                                var c = arguments;
                                return T.toProxyWindow(n, {
                                    send: u
                                }).awaitWindow().then((function(n) {
                                    var s = R(n, o);
                                    if (s && s.val !== r) return s.val.apply({
                                        source: window,
                                        origin: Object(a.h)()
                                    }, c);
                                    var d = [].slice.call(c);
                                    return t.fireAndForget ? u(n, "postrobot_method", {
                                        id: o,
                                        name: i,
                                        args: d
                                    }, {
                                        domain: e,
                                        fireAndForget: !0
                                    }) : u(n, "postrobot_method", {
                                        id: o,
                                        name: i,
                                        args: d
                                    }, {
                                        domain: e,
                                        fireAndForget: !1
                                    }).then((function(n) {
                                        return n.data.result
                                    }))
                                })).catch((function(n) {
                                    throw n
                                }))
                            }
                            return void 0 === t && (t = {}), r.__name__ = i, r.__origin__ = e, r.__source__ = n, r.__id__ = o, r.origin = e, r
                        },
                        s = c();
                    return s.fireAndForget = c({
                        fireAndForget: !0
                    }), s
                }(n, e, t, {
                    send: i
                })
            }, o.cross_domain_window = function(n) {
                return T.deserialize(n, {
                    send: i
                })
            }, o))
        }
        var M = {};

        function L(n, e, t, r) {
            var i = r.on,
                c = r.send;
            return u.a.try((function() {
                var r = w().getOrSet(n, (function() {
                    return {}
                }));
                return r.buffer = r.buffer || [], r.buffer.push(t), r.flush = r.flush || u.a.flush().then((function() {
                    if (Object(a.v)(n)) throw new Error("Window is closed");
                    var t, u = k(n, e, ((t = {}).__post_robot_10_0_46__ = r.buffer || [], t), {
                        on: i,
                        send: c
                    });
                    delete r.buffer;
                    for (var s = Object.keys(M), d = [], f = 0; f < s.length; f++) {
                        var l = s[f];
                        try {
                            M[l](n, u, e)
                        } catch (n) {
                            d.push(n)
                        }
                    }
                    if (d.length === s.length) throw new Error("All post-robot messaging strategies failed:\n\n" + d.map((function(n, e) {
                        return e + ". " + Object(o.stringifyError)(n)
                    })).join("\n\n"))
                })), r.flush.then((function() {
                    delete r.flush
                }))
            })).then(o.noop)
        }

        function W(n) {
            return f("responseListeners").get(n)
        }

        function H(n) {
            f("responseListeners").del(n)
        }

        function U(n) {
            return f("erroredResponseListeners").has(n)
        }

        function z(n) {
            var e = n.name,
                t = n.win,
                r = n.domain,
                o = w("requestListeners");
            if ("*" === t && (t = null), "*" === r && (r = null), !e) throw new Error("Name required to get request listener");
            for (var i = 0, u = [t, h()]; i < u.length; i++) {
                var c = u[i];
                if (c) {
                    var s = o.get(c);
                    if (s) {
                        var d = s[e];
                        if (d) {
                            if (r && "string" == typeof r) {
                                if (d[r]) return d[r];
                                if (d.__domain_regex__)
                                    for (var f = 0, l = d.__domain_regex__; f < l.length; f++) {
                                        var p = l[f],
                                            m = p.regex,
                                            v = p.listener;
                                        if (Object(a.x)(m, r)) return v
                                    }
                            }
                            if (d["*"]) return d["*"]
                        }
                    }
                }
            }
        }

        function B(n, e) {
            var t = e.on,
                r = e.send,
                i = f("receivedMessages");
            try {
                if (!window || window.closed || !n.source) return
            } catch (n) {
                return
            }
            var c = n.source,
                s = n.origin,
                d = function(n, e, t, r) {
                    var o, i = r.on,
                        a = r.send;
                    try {
                        o = D(e, t, n, {
                            on: i,
                            send: a
                        })
                    } catch (n) {
                        return
                    }
                    if (o && "object" == typeof o && null !== o) {
                        var u = o.__post_robot_10_0_46__;
                        if (Array.isArray(u)) return u
                    }
                }(n.data, c, s, {
                    on: t,
                    send: r
                });
            if (d) {
                E(c);
                for (var l, p = function() {
                        var n = d[h];
                        if (i.has(n.id)) return {
                            v: void 0
                        };
                        if (i.set(n.id, !0), Object(a.v)(c) && !n.fireAndForget) return {
                            v: void 0
                        };
                        0 === n.origin.indexOf(a.a.FILE) && (s = a.a.FILE + "//");
                        try {
                            "postrobot_message_request" === n.type ? function(n, e, t, r) {
                                var i = r.on,
                                    c = r.send,
                                    s = z({
                                        name: t.name,
                                        win: n,
                                        domain: e
                                    }),
                                    d = "postrobot_method" === t.name && t.data && "string" == typeof t.data.name ? t.data.name + "()" : t.name;

                                function f(r, s, f) {
                                    return u.a.flush().then((function() {
                                        if (!t.fireAndForget && !Object(a.v)(n)) try {
                                            return L(n, e, {
                                                id: Object(o.uniqueID)(),
                                                origin: Object(a.h)(window),
                                                type: "postrobot_message_response",
                                                hash: t.hash,
                                                name: t.name,
                                                ack: r,
                                                data: s,
                                                error: f
                                            }, {
                                                on: i,
                                                send: c
                                            })
                                        } catch (n) {
                                            throw new Error("Send response message failed for " + d + " in " + Object(a.h)() + "\n\n" + Object(o.stringifyError)(n))
                                        }
                                    }))
                                }
                                u.a.all([u.a.flush().then((function() {
                                    if (!t.fireAndForget && !Object(a.v)(n)) try {
                                        return L(n, e, {
                                            id: Object(o.uniqueID)(),
                                            origin: Object(a.h)(window),
                                            type: "postrobot_message_ack",
                                            hash: t.hash,
                                            name: t.name
                                        }, {
                                            on: i,
                                            send: c
                                        })
                                    } catch (n) {
                                        throw new Error("Send ack message failed for " + d + " in " + Object(a.h)() + "\n\n" + Object(o.stringifyError)(n))
                                    }
                                })), u.a.try((function() {
                                    if (!s) throw new Error("No handler found for post message: " + t.name + " from " + e + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                                    return s.handler({
                                        source: n,
                                        origin: e,
                                        data: t.data
                                    })
                                })).then((function(n) {
                                    return f("success", n)
                                }), (function(n) {
                                    return f("error", null, n)
                                }))]).then(o.noop).catch((function(n) {
                                    if (s && s.handleError) return s.handleError(n);
                                    throw n
                                }))
                            }(c, s, n, {
                                on: t,
                                send: r
                            }) : "postrobot_message_response" === n.type ? function(n, e, t) {
                                if (!U(t.hash)) {
                                    var r = W(t.hash);
                                    if (!r) throw new Error("No handler found for post message response for message: " + t.name + " from " + e + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                                    if (!Object(a.x)(r.domain, e)) throw new Error("Response origin " + e + " does not match domain " + Object(a.A)(r.domain));
                                    if (n !== r.win) throw new Error("Response source does not match registered window");
                                    H(t.hash), "error" === t.ack ? r.promise.reject(t.error) : "success" === t.ack && r.promise.resolve({
                                        source: n,
                                        origin: e,
                                        data: t.data
                                    })
                                }
                            }(c, s, n) : "postrobot_message_ack" === n.type && function(n, e, t) {
                                if (!U(t.hash)) {
                                    var r = W(t.hash);
                                    if (!r) throw new Error("No handler found for post message ack for message: " + t.name + " from " + e + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                                    try {
                                        if (!Object(a.x)(r.domain, e)) throw new Error("Ack origin " + e + " does not match domain " + r.domain.toString());
                                        if (n !== r.win) throw new Error("Ack source does not match registered window")
                                    } catch (n) {
                                        r.promise.reject(n)
                                    }
                                    r.ack = !0
                                }
                            }(c, s, n)
                        } catch (n) {
                            setTimeout((function() {
                                throw n
                            }), 0)
                        }
                    }, h = 0; h < d.length; h++)
                    if (l = p()) return l.v
            }
        }

        function q(n, e, t) {
            if (!n) throw new Error("Expected name");
            if ("function" == typeof(e = e || {}) && (t = e, e = {}), !t) throw new Error("Expected handler");
            var r = function n(e, t) {
                var r = e.name,
                    i = e.win,
                    a = e.domain,
                    u = w("requestListeners");
                if (!r || "string" != typeof r) throw new Error("Name required to add request listener");
                if (i && "*" !== i && T.isProxyWindow(i)) {
                    var c = i.awaitWindow().then((function(e) {
                        return n({
                            name: r,
                            win: e,
                            domain: a
                        }, t)
                    }));
                    return {
                        cancel: function() {
                            c.then((function(n) {
                                return n.cancel()
                            }), o.noop)
                        }
                    }
                }
                var s = i;
                if (Array.isArray(s)) {
                    for (var d = [], f = 0, l = s; f < l.length; f++) d.push(n({
                        name: r,
                        domain: a,
                        win: l[f]
                    }, t));
                    return {
                        cancel: function() {
                            for (var n = 0; n < d.length; n++) d[n].cancel()
                        }
                    }
                }
                if (Array.isArray(a)) {
                    for (var p = [], m = 0, v = a; m < v.length; m++) p.push(n({
                        name: r,
                        win: s,
                        domain: v[m]
                    }, t));
                    return {
                        cancel: function() {
                            for (var n = 0; n < p.length; n++) p[n].cancel()
                        }
                    }
                }
                var y = z({
                    name: r,
                    win: s,
                    domain: a
                });
                s && "*" !== s || (s = h());
                var g = (a = a || "*").toString();
                if (y) throw s && a ? new Error("Request listener already exists for " + r + " on domain " + a.toString() + " for " + (s === h() ? "wildcard" : "specified") + " window") : s ? new Error("Request listener already exists for " + r + " for " + (s === h() ? "wildcard" : "specified") + " window") : a ? new Error("Request listener already exists for " + r + " on domain " + a.toString()) : new Error("Request listener already exists for " + r);
                var E, b, _ = u.getOrSet(s, (function() {
                        return {}
                    })),
                    O = Object(o.getOrSet)(_, r, (function() {
                        return {}
                    }));
                return Object(o.isRegex)(a) ? (E = Object(o.getOrSet)(O, "__domain_regex__", (function() {
                    return []
                }))).push(b = {
                    regex: a,
                    listener: t
                }) : O[g] = t, {
                    cancel: function() {
                        delete O[g], b && (E.splice(E.indexOf(b, 1)), E.length || delete O.__domain_regex__), Object.keys(O).length || delete _[r], s && !Object.keys(_).length && u.del(s)
                    }
                }
            }({
                name: n,
                win: e.window,
                domain: e.domain || "*"
            }, {
                handler: t || e.handler,
                handleError: e.errorHandler || function(n) {
                    throw n
                }
            });
            return {
                cancel: function() {
                    r.cancel()
                }
            }
        }
        M.postrobot_post_message = function(n, e, t) {
            0 === t.indexOf(a.a.FILE) && (t = "*"), n.postMessage(e, t)
        }, M.postrobot_global = function(n, e) {
            if (!Object(a.o)(window).match(/MSIE|rv:11|trident|edge\/12|edge\/13/i)) throw new Error("Global messaging not needed for browser");
            if (!Object(a.s)(n)) throw new Error("Post message through global disabled between different domain windows");
            if (!1 !== Object(a.t)(window, n)) throw new Error("Can only use global to communicate between two different windows, not between frames");
            var t = s(n);
            if (!t) throw new Error("Can not find postRobot global on foreign window");
            t.receiveMessage({
                source: window,
                origin: Object(a.h)(),
                data: e
            })
        };
        var Z = function(n, e, t, r) {
            var i = (r = r || {}).domain || "*",
                c = r.timeout || -1,
                s = r.timeout || 5e3,
                d = r.fireAndForget || !1;
            return T.toProxyWindow(n, {
                send: Z
            }).awaitWindow().then((function(n) {
                return u.a.try((function() {
                    if (function(n, e, t) {
                            if (!n) throw new Error("Expected name");
                            if (t && "string" != typeof t && !Array.isArray(t) && !Object(o.isRegex)(t)) throw new TypeError("Can not send " + n + ". Expected domain " + JSON.stringify(t) + " to be a string, array, or regex");
                            if (Object(a.v)(e)) throw new Error("Can not send " + n + ". Target window is closed")
                        }(e, n, i), Object(a.p)(window, n)) return function(n, e, t) {
                        void 0 === e && (e = 5e3), void 0 === t && (t = "Window");
                        var r = function(n) {
                            return w("helloPromises").getOrSet(n, (function() {
                                return new u.a
                            }))
                        }(n);
                        return -1 !== e && (r = r.timeout(e, new Error(t + " did not load after " + e + "ms"))), r
                    }(n, s)
                })).then((function(e) {
                    return function(n, e, t, r) {
                        var i = r.send;
                        return u.a.try((function() {
                            return "string" == typeof e ? e : u.a.try((function() {
                                return t || y(n, {
                                    send: i
                                }).then((function(n) {
                                    return n.domain
                                }))
                            })).then((function(n) {
                                if (!Object(a.x)(e, e)) throw new Error("Domain " + Object(o.stringify)(e) + " does not match " + Object(o.stringify)(e));
                                return n
                            }))
                        }))
                    }(n, i, (void 0 === e ? {} : e).domain, {
                        send: Z
                    })
                })).then((function(r) {
                    var i = r,
                        s = "postrobot_method" === e && t && "string" == typeof t.name ? t.name + "()" : e,
                        l = new u.a,
                        p = e + "_" + Object(o.uniqueID)();
                    if (!d) {
                        var h = {
                            name: e,
                            win: n,
                            domain: i,
                            promise: l
                        };
                        ! function(n, e) {
                            f("responseListeners").set(n, e)
                        }(p, h);
                        var m = w("requestPromises").getOrSet(n, (function() {
                            return []
                        }));
                        m.push(l), l.catch((function() {
                            ! function(n) {
                                f("erroredResponseListeners").set(n, !0)
                            }(p), H(p)
                        }));
                        var v = function(n) {
                                return w("knownWindows").get(n, !1)
                            }(n) ? 1e4 : 2e3,
                            y = c,
                            g = v,
                            E = y,
                            b = Object(o.safeInterval)((function() {
                                return Object(a.v)(n) ? l.reject(new Error("Window closed for " + e + " before " + (h.ack ? "response" : "ack"))) : h.cancelled ? l.reject(new Error("Response listener was cancelled for " + e)) : (g = Math.max(g - 500, 0), -1 !== E && (E = Math.max(E - 500, 0)), h.ack || 0 !== g ? 0 === E ? l.reject(new Error("No response for postMessage " + s + " in " + Object(a.h)() + " in " + y + "ms")) : void 0 : l.reject(new Error("No ack for postMessage " + s + " in " + Object(a.h)() + " in " + v + "ms")))
                            }), 500);
                        l.finally((function() {
                            b.cancel(), m.splice(m.indexOf(l, 1))
                        })).catch(o.noop)
                    }
                    return L(n, i, {
                        id: Object(o.uniqueID)(),
                        origin: Object(a.h)(window),
                        type: "postrobot_message_request",
                        hash: p,
                        name: e,
                        data: t,
                        fireAndForget: d
                    }, {
                        on: q,
                        send: Z
                    }).then((function() {
                        return d ? l.resolve() : l
                    }), (function(n) {
                        throw new Error("Send request message failed for " + s + " in " + Object(a.h)() + "\n\n" + Object(o.stringifyError)(n))
                    }))
                }))
            }))
        };

        function K(n, e, t) {
            return k(n, e, t, {
                on: q,
                send: Z
            })
        }

        function G(n, e, t) {
            return D(n, e, t, {
                on: q,
                send: Z
            })
        }

        function V(n) {
            return T.toProxyWindow(n, {
                send: Z
            })
        }

        function Y() {
            var n, e, t;
            s().initialized || (s().initialized = !0, function(n) {
                var e = n.on,
                    t = n.send,
                    r = s();
                r.receiveMessage = r.receiveMessage || function(n) {
                    return B(n, {
                        on: e,
                        send: t
                    })
                }
            }({
                on: q,
                send: Z
            }), e = (n = {
                on: q,
                send: Z
            }).on, t = n.send, f().getOrSet("postMessageListener", (function() {
                return Object(o.addEventListener)(window, "message", (function(n) {
                    ! function(n, e) {
                        var t = e.on,
                            r = e.send;
                        u.a.try((function() {
                            try {
                                Object(o.noop)(n.source)
                            } catch (n) {
                                return
                            }
                            var e = n.source || n.sourceElement,
                                i = n.origin || n.originalEvent && n.originalEvent.origin,
                                u = n.data;
                            if ("null" === i && (i = a.a.FILE + "//"), e) {
                                if (!i) throw new Error("Post message did not have origin domain");
                                B({
                                    source: e,
                                    origin: i,
                                    data: u
                                }, {
                                    on: t,
                                    send: r
                                })
                            }
                        }))
                    }(n, {
                        on: e,
                        send: t
                    })
                }))
            })), function(n) {
                var e = n.on,
                    t = n.send;
                f("builtinListeners").getOrSet("helloListener", (function() {
                    var n = e("postrobot_hello", {
                            domain: "*"
                        }, (function(n) {
                            return v(n.source, {
                                domain: n.origin
                            }), {
                                instanceID: m()
                            }
                        })),
                        r = Object(a.f)();
                    return r && y(r, {
                        send: t
                    }).catch((function(n) {})), n
                }))
            }({
                on: q,
                send: Z
            }))
        }

        function J(n) {
            for (var e = 0, t = w("requestPromises").get(n, []); e < t.length; e++) t[e].reject(new Error("Window " + (Object(a.v)(n) ? "closed" : "cleaned up") + " before response")).catch(o.noop)
        }

        function $(n) {
            if (void 0 === n && (n = window), !Object(a.s)(n)) throw new Error("Can not get global for window on different domain");
            return n.__zoid_9_0_58__ || (n.__zoid_9_0_58__ = {}), n.__zoid_9_0_58__
        }

        function X(n) {
            return {
                get: function() {
                    var e = this;
                    return u.a.try((function() {
                        if (e.source && e.source !== window) throw new Error("Can not call get on proxy object from a remote window");
                        return n
                    }))
                }
            }
        }
        Y();
        var Q = a.b;

        function nn(n, e, t, r, o) {
            if (!n.hasOwnProperty(t)) return r;
            var i = n[t];
            return "function" == typeof i.childDecorate ? i.childDecorate({
                value: r,
                uid: o.uid,
                close: o.close,
                focus: o.focus,
                onError: o.onError,
                onProps: o.onProps,
                resize: o.resize,
                getParent: o.getParent,
                getParentDomain: o.getParentDomain,
                show: o.show,
                hide: o.hide
            }) : r
        }

        function en(n) {
            return Object(o.inlineMemoize)(en, (function() {
                if (!n) throw new Error("No window name");
                var e = n.split("__"),
                    t = e[1],
                    r = e[2],
                    i = e[3];
                if ("zoid" !== t) throw new Error("Window not rendered by zoid - got " + t);
                if (!r) throw new Error("Expected component name");
                if (!i) throw new Error("Expected encoded payload");
                try {
                    return JSON.parse(Object(o.base64decode)(i))
                } catch (n) {
                    throw new Error("Can not decode window name payload: " + i + ": " + Object(o.stringifyError)(n))
                }
            }), [n])
        }

        function tn() {
            try {
                return en(window.name)
            } catch (n) {}
        }

        function rn() {
            return u.a.try((function() {
                window.focus()
            }))
        }

        function on() {
            return u.a.try((function() {
                window.close()
            }))
        }

        function an(n, e, t) {
            return u.a.try((function() {
                return "function" == typeof n.queryParam ? n.queryParam({
                    value: t
                }) : "string" == typeof n.queryParam ? n.queryParam : e
            }))
        }

        function un(n, e, t) {
            return u.a.try((function() {
                return "function" == typeof n.queryValue && Object(o.isDefined)(t) ? n.queryValue({
                    value: t
                }) : t
            }))
        }

        function cn(n, e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = window);
            var r, c, s, d = n.propsDef,
                f = n.containerTemplate,
                l = n.prerenderTemplate,
                p = n.tag,
                h = n.name,
                w = n.attributes,
                m = n.dimensions,
                v = n.autoResize,
                y = n.url,
                g = n.domain,
                E = new u.a,
                b = [],
                _ = Object(o.cleanup)(),
                O = {},
                S = {
                    visible: !0
                },
                P = e.event ? e.event : Object(o.eventEmitter)(),
                N = e.props ? e.props : {},
                F = e.onError,
                C = e.getProxyContainer,
                j = e.show,
                A = e.hide,
                x = e.close,
                R = e.renderContainer,
                I = e.getProxyWindow,
                k = e.setProxyWin,
                D = e.openFrame,
                M = e.openPrerenderFrame,
                L = e.prerender,
                W = e.open,
                H = e.openPrerender,
                U = e.watchForUnload,
                z = e.getInternalState,
                B = e.setInternalState,
                q = function(n) {
                    for (var e = {}, t = 0, r = Object.keys(N); t < r.length; t++) {
                        var o = r[t],
                            i = d[o];
                        i && !1 === i.sendToChild || i && i.sameDomain && !Object(a.x)(n, Object(a.h)(window)) || (e[o] = N[o])
                    }
                    return u.a.hash(e)
                },
                G = function() {
                    return u.a.try((function() {
                        return z ? z() : S
                    }))
                },
                Y = function(n) {
                    return u.a.try((function() {
                        return B ? B(n) : S = Object(i.a)({}, S, n)
                    }))
                },
                nn = function() {
                    return I ? I() : u.a.try((function() {
                        var n = N.window;
                        if (n) {
                            var e = V(n);
                            return _.register((function() {
                                return n.close()
                            })), e
                        }
                        return new T({
                            send: Z
                        })
                    }))
                },
                en = function(n) {
                    return C ? C(n) : u.a.try((function() {
                        return Object(o.elementReady)(n)
                    })).then((function(n) {
                        return Object(o.isShadowElement)(n) && (n = Object(o.insertShadowSlot)(n)), X(n)
                    }))
                },
                tn = function(n) {
                    return k ? k(n) : u.a.try((function() {
                        r = n
                    }))
                },
                rn = function() {
                    return j ? j() : u.a.hash({
                        setState: Y({
                            visible: !0
                        }),
                        showElement: c ? c.get().then(o.showElement) : null
                    }).then(o.noop)
                },
                on = function() {
                    return A ? A() : u.a.hash({
                        setState: Y({
                            visible: !1
                        }),
                        showElement: c ? c.get().then(o.hideElement) : null
                    }).then(o.noop)
                },
                cn = function() {
                    return "function" == typeof y ? y({
                        props: N
                    }) : y
                },
                sn = function() {
                    return "function" == typeof w ? w({
                        props: N
                    }) : w
                },
                dn = function() {
                    return g && "string" == typeof g ? g : Object(a.i)(cn())
                },
                fn = function() {
                    return g && Object(o.isRegex)(g) ? g : dn()
                },
                ln = function(n, e) {
                    var t = e.windowName;
                    return D ? D(n, {
                        windowName: t
                    }) : u.a.try((function() {
                        if (n === Q.IFRAME) {
                            var e = Object(i.a)({
                                name: t,
                                title: h
                            }, sn().iframe);
                            return X(Object(o.iframe)({
                                attributes: e
                            }))
                        }
                    }))
                },
                pn = function(n) {
                    return M ? M(n) : u.a.try((function() {
                        if (n === Q.IFRAME) {
                            var e = Object(i.a)({
                                name: "__zoid_prerender_frame__" + h + "_" + Object(o.uniqueID)() + "__",
                                title: "prerender__" + h
                            }, sn().iframe);
                            return X(Object(o.iframe)({
                                attributes: e
                            }))
                        }
                    }))
                },
                hn = function(n, e, t) {
                    return H ? H(n, e, t) : u.a.try((function() {
                        if (n === Q.IFRAME) {
                            if (!t) throw new Error("Expected proxy frame to be passed");
                            return t.get().then((function(n) {
                                return _.register((function() {
                                    return Object(o.destroyElement)(n)
                                })), Object(o.awaitFrameWindow)(n).then((function(n) {
                                    return Object(a.c)(n)
                                })).then((function(n) {
                                    return V(n)
                                }))
                            }))
                        }
                        if (n === Q.POPUP) return e;
                        throw new Error("No render context available for " + n)
                    }))
                },
                wn = function() {
                    return u.a.try((function() {
                        if (r) return u.a.all([P.trigger("zoid-focus"), r.focus()]).then(o.noop)
                    }))
                },
                mn = function(n, e, t, r) {
                    if (e === Object(a.h)(window)) {
                        var o = $(window);
                        return o.windows = o.windows || {}, o.windows[t] = window, _.register((function() {
                            delete o.windows[t]
                        })), {
                            type: "global",
                            uid: t
                        }
                    }
                    return r === Q.POPUP ? {
                        type: "opener"
                    } : {
                        type: "parent",
                        distance: Object(a.g)(window)
                    }
                },
                vn = function(n) {
                    return u.a.try((function() {
                        s = n, E.resolve(), _.register((function() {
                            return n.close.fireAndForget().catch(o.noop)
                        }))
                    }))
                },
                yn = function(n) {
                    var e = n.width,
                        t = n.height;
                    return u.a.try((function() {
                        P.trigger("zoid-resize", {
                            width: e,
                            height: t
                        })
                    }))
                },
                gn = function(n) {
                    return u.a.try((function() {
                        return P.trigger("zoid-destroy")
                    })).catch(o.noop).then((function() {
                        return _.all()
                    })).then((function() {
                        E.asyncReject(n || new Error("Component destroyed"))
                    }))
                },
                En = function() {
                    return x ? x() : u.a.try((function() {
                        return P.trigger("zoid-close")
                    })).then((function() {
                        return gn(new Error("Window closed"))
                    }))
                },
                bn = function(n, e) {
                    var t = e.proxyWin,
                        r = e.proxyFrame,
                        c = e.windowName;
                    return W ? W(n, {
                        proxyWin: t,
                        proxyFrame: r,
                        windowName: c
                    }) : u.a.try((function() {
                        if (n === Q.IFRAME) {
                            if (!r) throw new Error("Expected proxy frame to be passed");
                            return r.get().then((function(n) {
                                return Object(o.awaitFrameWindow)(n).then((function(e) {
                                    var t = Object(o.watchElementForClose)(n, En);
                                    return _.register((function() {
                                        return t.cancel()
                                    })), _.register((function() {
                                        return Object(o.destroyElement)(n)
                                    })), _.register((function() {
                                        return J(e)
                                    })), e
                                }))
                            }))
                        }
                        if (n === Q.POPUP) {
                            var e = m.width,
                                t = m.height;
                            e = Object(o.normalizeDimension)(e, window.outerWidth), t = Object(o.normalizeDimension)(t, window.outerWidth);
                            var u = Object(i.a)({
                                    name: c,
                                    width: e,
                                    height: t
                                }, sn().popup),
                                s = Object(o.popup)("", u);
                            return _.register((function() {
                                return Object(a.d)(s)
                            })), _.register((function() {
                                return J(s)
                            })), s
                        }
                        throw new Error("No render context available for " + n)
                    })).then((function(n) {
                        return t.setWindow(n, {
                            send: Z
                        }), t
                    }))
                },
                _n = function() {
                    return u.a.try((function() {
                        var n = Object(o.addEventListener)(window, "unload", Object(o.once)((function() {
                                gn(new Error("Window navigated away"))
                            }))),
                            e = Object(a.z)(t, gn, 3e3);
                        if (_.register(e.cancel), _.register(n.cancel), U) return U()
                    }))
                },
                On = function(n) {
                    var e = !1;
                    return _.register((function() {
                        e = !0
                    })), u.a.delay(2e3).then((function() {
                        return n.isClosed()
                    })).then((function(t) {
                        return t ? En() : e ? void 0 : On(n)
                    }))
                },
                Sn = function(n) {
                    var e = !1;
                    return n.isClosed().then((function(t) {
                        return t ? (e = !0, En()) : u.a.delay(200).then((function() {
                            return n.isClosed()
                        })).then((function(n) {
                            if (n) return e = !0, En()
                        }))
                    })).then((function() {
                        return e
                    }))
                },
                Pn = function(n) {
                    return F ? F(n) : u.a.try((function() {
                        if (-1 === b.indexOf(n)) return b.push(n), E.asyncReject(n), P.trigger("zoid-error", n)
                    }))
                };
            vn.onError = Pn;
            var Nn = function(n, e) {
                    return n({
                        container: e.container,
                        context: e.context,
                        uid: e.uid,
                        doc: e.doc,
                        frame: e.frame,
                        prerenderFrame: e.prerenderFrame,
                        focus: wn,
                        close: En,
                        state: O,
                        props: N,
                        tag: p,
                        dimensions: m,
                        event: P
                    })
                },
                Fn = function(n, e) {
                    var t = e.context,
                        r = e.uid;
                    return L ? L(n, {
                        context: t,
                        uid: r
                    }) : u.a.try((function() {
                        if (l) {
                            var e = n.getWindow();
                            if (e && Object(a.s)(e) && Object(a.q)(e)) {
                                var i = (e = Object(a.c)(e)).document,
                                    u = Nn(l, {
                                        context: t,
                                        uid: r,
                                        doc: i
                                    });
                                if (u) {
                                    if (u.ownerDocument !== i) throw new Error("Expected prerender template to have been created with document from child window");
                                    Object(o.writeElementToWindow)(e, u);
                                    var c = v.width,
                                        s = void 0 !== c && c,
                                        d = v.height,
                                        f = void 0 !== d && d,
                                        p = v.element,
                                        h = void 0 === p ? "body" : p;
                                    if ((h = Object(o.getElementSafe)(h, i)) && (s || f)) {
                                        var w = Object(o.onResize)(h, (function(n) {
                                            yn({
                                                width: s ? n.width : void 0,
                                                height: f ? n.height : void 0
                                            })
                                        }), {
                                            width: s,
                                            height: f,
                                            win: e
                                        });
                                        P.on("zoid-rendered", w.cancel)
                                    }
                                }
                            }
                        }
                    }))
                },
                Cn = function(n, e) {
                    var t = e.proxyFrame,
                        r = e.proxyPrerenderFrame,
                        i = e.context,
                        a = e.uid;
                    return R ? R(n, {
                        proxyFrame: t,
                        proxyPrerenderFrame: r,
                        context: i,
                        uid: a
                    }) : u.a.hash({
                        container: n.get(),
                        frame: t ? t.get() : null,
                        prerenderFrame: r ? r.get() : null,
                        internalState: G()
                    }).then((function(n) {
                        var e = n.container,
                            t = n.internalState.visible,
                            r = Nn(f, {
                                context: i,
                                uid: a,
                                container: e,
                                frame: n.frame,
                                prerenderFrame: n.prerenderFrame,
                                doc: document
                            });
                        if (r) return t || Object(o.hideElement)(r), Object(o.appendChild)(e, r), _.register((function() {
                            return Object(o.destroyElement)(r)
                        })), c = X(r)
                    }))
                },
                jn = function() {
                    return {
                        state: O,
                        event: P,
                        close: En,
                        focus: wn,
                        resize: yn,
                        onError: Pn,
                        updateProps: Tn,
                        show: rn,
                        hide: on
                    }
                },
                An = function(n, e) {
                    void 0 === e && (e = !1);
                    var t = jn();
                    ! function(n, e, t, r, i) {
                        void 0 === i && (i = !1), t = t || {}, Object(o.extend)(e, t);
                        for (var a = i ? [] : [].concat(Object.keys(n)), u = 0, c = Object.keys(t); u < c.length; u++) {
                            var s = c[u]; - 1 === a.indexOf(s) && a.push(s)
                        }
                        for (var d = [], f = r.state, l = r.close, p = r.focus, h = r.event, w = r.onError, m = 0; m < a.length; m++) {
                            var v = a[m],
                                y = n[v],
                                g = t[v];
                            if (y) {
                                var E = y.alias;
                                if (E && (!Object(o.isDefined)(g) && Object(o.isDefined)(t[E]) && (g = t[E]), d.push(E)), y.value && (g = y.value({
                                        props: e,
                                        state: f,
                                        close: l,
                                        focus: p,
                                        event: h,
                                        onError: w
                                    })), !Object(o.isDefined)(g) && y.default && (g = y.default({
                                        props: e,
                                        state: f,
                                        close: l,
                                        focus: p,
                                        event: h,
                                        onError: w
                                    })), Object(o.isDefined)(g) && ("array" === y.type ? !Array.isArray(g) : typeof g !== y.type)) throw new TypeError("Prop is not of type " + y.type + ": " + v);
                                e[v] = g
                            }
                        }
                        for (var b = 0; b < d.length; b++) delete e[d[b]];
                        for (var _ = 0, O = Object.keys(e); _ < O.length; _++) {
                            var S = O[_],
                                P = n[S],
                                N = e[S];
                            P && Object(o.isDefined)(N) && P.decorate && (e[S] = P.decorate({
                                value: N,
                                props: e,
                                state: f,
                                close: l,
                                focus: p,
                                event: h,
                                onError: w
                            }))
                        }
                        for (var F = 0, C = Object.keys(n); F < C.length; F++) {
                            var j = C[F],
                                A = e[j];
                            if (!1 !== n[j].required && !Object(o.isDefined)(A)) throw new Error('Expected prop "' + j + '" to be defined')
                        }
                    }(d, N, n, t, e)
                },
                Tn = function(n) {
                    return An(n, !0), E.then((function() {
                        var n = s,
                            e = r;
                        if (n && e) return q(fn()).then((function(t) {
                            return n.updateProps(t).catch((function(n) {
                                return Sn(e).then((function(e) {
                                    if (!e) throw n
                                }))
                            }))
                        }))
                    }))
                };
            return {
                init: function() {
                    P.on("zoid-render", (function() {
                        return N.onRender()
                    })), P.on("zoid-display", (function() {
                        return N.onDisplay()
                    })), P.on("zoid-rendered", (function() {
                        return N.onRendered()
                    })), P.on("zoid-close", (function() {
                        return N.onClose()
                    })), P.on("zoid-destroy", (function() {
                        return N.onDestroy()
                    })), P.on("zoid-resize", (function() {
                        return N.onResize()
                    })), P.on("zoid-focus", (function() {
                        return N.onFocus()
                    })), P.on("zoid-props", (function(n) {
                        return N.onProps(n)
                    })), P.on("zoid-error", (function(n) {
                        return N && N.onError ? N.onError(n) : E.reject(n).then((function() {
                            setTimeout((function() {
                                throw n
                            }), 1)
                        }))
                    })), _.register(P.reset)
                },
                render: function(n, e, t) {
                    return u.a.try((function() {
                        var i = "zoid-" + p + "-" + Object(o.uniqueID)(),
                            c = fn(),
                            s = dn();
                        ! function(n, e, t) {
                            if (n !== window) {
                                if (!Object(a.t)(window, n)) throw new Error("Can only renderTo an adjacent frame");
                                var r = Object(a.h)();
                                if (!Object(a.x)(e, r) && !Object(a.s)(n)) throw new Error("Can not render remotely to " + e.toString() + " - can only render to " + r);
                                if (t && "string" != typeof t) throw new Error("Container passed to renderTo must be a string selector, got " + typeof t + " }")
                            }
                        }(n, c, e);
                        var f = u.a.try((function() {
                                if (n !== window) return function(n, e) {
                                    for (var t = {}, r = 0, i = Object.keys(N); r < i.length; r++) {
                                        var u = i[r],
                                            c = d[u];
                                        c && c.allowDelegate && (t[u] = N[u])
                                    }
                                    var s = Z(e, "zoid_delegate_" + h, {
                                        overrides: {
                                            props: t,
                                            event: P,
                                            close: En,
                                            onError: Pn,
                                            getInternalState: G,
                                            setInternalState: Y
                                        }
                                    }).then((function(n) {
                                        var t = n.data.parent;
                                        return _.register((function() {
                                            if (!Object(a.v)(e)) return t.destroy()
                                        })), t.getDelegateOverrides()
                                    })).catch((function(n) {
                                        throw new Error("Unable to delegate rendering. Possibly the component is not loaded in the target window.\n\n" + Object(o.stringifyError)(n))
                                    }));
                                    return C = function() {
                                        for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
                                        return s.then((function(n) {
                                            return n.getProxyContainer.apply(n, e)
                                        }))
                                    }, R = function() {
                                        for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
                                        return s.then((function(n) {
                                            return n.renderContainer.apply(n, e)
                                        }))
                                    }, j = function() {
                                        for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
                                        return s.then((function(n) {
                                            return n.show.apply(n, e)
                                        }))
                                    }, A = function() {
                                        for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
                                        return s.then((function(n) {
                                            return n.hide.apply(n, e)
                                        }))
                                    }, U = function() {
                                        for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
                                        return s.then((function(n) {
                                            return n.watchForUnload.apply(n, e)
                                        }))
                                    }, n === Q.IFRAME ? (I = function() {
                                        for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
                                        return s.then((function(n) {
                                            return n.getProxyWindow.apply(n, e)
                                        }))
                                    }, D = function() {
                                        for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
                                        return s.then((function(n) {
                                            return n.openFrame.apply(n, e)
                                        }))
                                    }, M = function() {
                                        for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
                                        return s.then((function(n) {
                                            return n.openPrerenderFrame.apply(n, e)
                                        }))
                                    }, L = function() {
                                        for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
                                        return s.then((function(n) {
                                            return n.prerender.apply(n, e)
                                        }))
                                    }, W = function() {
                                        for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
                                        return s.then((function(n) {
                                            return n.open.apply(n, e)
                                        }))
                                    }, H = function() {
                                        for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
                                        return s.then((function(n) {
                                            return n.openPrerender.apply(n, e)
                                        }))
                                    }) : n === Q.POPUP && (k = function() {
                                        for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
                                        return s.then((function(n) {
                                            return n.setProxyWin.apply(n, e)
                                        }))
                                    }), s
                                }(t, n)
                            })),
                            l = N.window,
                            w = _n(),
                            m = function(n, e) {
                                var t = {},
                                    r = Object.keys(e);
                                return u.a.all(r.map((function(r) {
                                    var i = n[r];
                                    if (i) return u.a.resolve().then((function() {
                                        var n = e[r];
                                        if (n && i.queryParam) return n
                                    })).then((function(n) {
                                        if (null != n) return u.a.all([an(i, r, n), un(i, 0, n)]).then((function(n) {
                                            var e, a = n[0],
                                                u = n[1];
                                            if ("boolean" == typeof u) e = u.toString();
                                            else if ("string" == typeof u) e = u.toString();
                                            else if ("object" == typeof u && null !== u) {
                                                if ("json" === i.serialization) e = JSON.stringify(u);
                                                else if ("base64" === i.serialization) e = btoa(JSON.stringify(u));
                                                else if ("dotify" === i.serialization || !i.serialization) {
                                                    e = Object(o.dotify)(u, r);
                                                    for (var c = 0, s = Object.keys(e); c < s.length; c++) {
                                                        var d = s[c];
                                                        t[d] = e[d]
                                                    }
                                                    return
                                                }
                                            } else "number" == typeof u && (e = u.toString());
                                            t[a] = e
                                        }))
                                    }))
                                }))).then((function() {
                                    return t
                                }))
                            }(d, N).then((function(n) {
                                return Object(o.extendUrl)(Object(a.y)(cn()), {
                                    query: n
                                })
                            })),
                            v = P.trigger("zoid-render"),
                            y = en(e),
                            g = nn(),
                            b = g.then((function(e) {
                                return function(n) {
                                    var e = void 0 === n ? {} : n,
                                        t = e.proxyWin,
                                        r = e.childDomain,
                                        o = e.domain,
                                        i = (void 0 === e.target && window, e.context),
                                        u = e.uid;
                                    return function(n, e, t, r) {
                                        return q(t).then((function(o) {
                                            var i = K(n, t, o),
                                                u = e === Object(a.h)() ? {
                                                    type: "uid",
                                                    uid: r
                                                } : {
                                                    type: "raw",
                                                    value: i
                                                };
                                            if ("uid" === u.type) {
                                                var c = $(window);
                                                c.props = c.props || {}, c.props[r] = i, _.register((function() {
                                                    delete c.props[r]
                                                }))
                                            }
                                            return u
                                        }))
                                    }(t, r, o, u).then((function(n) {
                                        return {
                                            uid: u,
                                            context: i,
                                            tag: p,
                                            version: "9_0_58",
                                            childDomain: r,
                                            parentDomain: Object(a.h)(window),
                                            parent: mn(0, r, u, i),
                                            props: n,
                                            exports: K(t, o, (e = t, {
                                                init: vn,
                                                close: En,
                                                checkClose: function() {
                                                    return Sn(e)
                                                },
                                                resize: yn,
                                                onError: Pn,
                                                show: rn,
                                                hide: on
                                            }))
                                        };
                                        var e
                                    }))
                                }({
                                    proxyWin: (r = {
                                        proxyWin: e,
                                        childDomain: s,
                                        domain: c,
                                        target: n,
                                        context: t,
                                        uid: i
                                    }).proxyWin,
                                    childDomain: r.childDomain,
                                    domain: r.domain,
                                    target: r.target,
                                    context: r.context,
                                    uid: r.uid
                                }).then((function(n) {
                                    return "__zoid__" + h + "__" + Object(o.base64encode)(JSON.stringify(n)) + "__"
                                }));
                                var r
                            })),
                            O = b.then((function(n) {
                                return ln(t, {
                                    windowName: n
                                })
                            })),
                            S = pn(t),
                            F = u.a.hash({
                                proxyContainer: y,
                                proxyFrame: O,
                                proxyPrerenderFrame: S
                            }).then((function(n) {
                                return Cn(n.proxyContainer, {
                                    context: t,
                                    uid: i,
                                    proxyFrame: n.proxyFrame,
                                    proxyPrerenderFrame: n.proxyPrerenderFrame
                                })
                            })).then((function(n) {
                                return n
                            })),
                            T = u.a.hash({
                                windowName: b,
                                proxyFrame: O,
                                proxyWin: g
                            }).then((function(n) {
                                var e = n.proxyWin;
                                return l ? e : bn(t, {
                                    windowName: n.windowName,
                                    proxyWin: e,
                                    proxyFrame: n.proxyFrame
                                })
                            })),
                            x = u.a.hash({
                                proxyWin: T,
                                proxyPrerenderFrame: S
                            }).then((function(n) {
                                return hn(t, n.proxyWin, n.proxyPrerenderFrame)
                            })),
                            z = T.then((function(n) {
                                return r = n, tn(n)
                            })),
                            B = u.a.hash({
                                proxyPrerenderWin: x,
                                state: z
                            }).then((function(n) {
                                return Fn(n.proxyPrerenderWin, {
                                    context: t,
                                    uid: i
                                })
                            })),
                            V = u.a.hash({
                                proxyWin: T,
                                windowName: b
                            }).then((function(n) {
                                if (l) return n.proxyWin.setName(n.windowName)
                            })),
                            J = u.a.hash({
                                proxyWin: T,
                                builtUrl: m,
                                windowName: V,
                                prerender: B
                            }).then((function(n) {
                                return n.proxyWin.setLocation(n.builtUrl)
                            })),
                            X = T.then((function(n) {
                                On(n)
                            })),
                            sn = u.a.hash({
                                container: F,
                                prerender: B
                            }).then((function() {
                                return P.trigger("zoid-display")
                            })),
                            wn = T.then((function(n) {})),
                            gn = J.then((function() {
                                return u.a.try((function() {
                                    var n = N.timeout;
                                    if (n) return E.timeout(n, new Error("Loading component timed out after " + n + " milliseconds"))
                                }))
                            })),
                            Nn = E.then((function() {
                                return P.trigger("zoid-rendered")
                            }));
                        return u.a.hash({
                            initPromise: E,
                            buildUrlPromise: m,
                            onRenderPromise: v,
                            getProxyContainerPromise: y,
                            openFramePromise: O,
                            openPrerenderFramePromise: S,
                            renderContainerPromise: F,
                            openPromise: T,
                            openPrerenderPromise: x,
                            setStatePromise: z,
                            prerenderPromise: B,
                            loadUrlPromise: J,
                            buildWindowNamePromise: b,
                            setWindowNamePromise: V,
                            watchForClosePromise: X,
                            onDisplayPromise: sn,
                            openBridgePromise: wn,
                            runTimeoutPromise: gn,
                            onRenderedPromise: Nn,
                            delegatePromise: f,
                            watchForUnloadPromise: w
                        })
                    })).catch((function(n) {
                        return u.a.all([Pn(n), gn(n)]).then((function() {
                            throw n
                        }), (function() {
                            throw n
                        }))
                    })).then(o.noop)
                },
                destroy: gn,
                setProps: An,
                getHelpers: jn,
                getDelegateOverrides: function() {
                    return u.a.try((function() {
                        return {
                            getProxyContainer: en,
                            show: rn,
                            hide: on,
                            renderContainer: Cn,
                            getProxyWindow: nn,
                            watchForUnload: _n,
                            openFrame: ln,
                            openPrerenderFrame: pn,
                            prerender: Fn,
                            open: bn,
                            openPrerender: hn,
                            setProxyWin: tn
                        }
                    }))
                }
            }
        }
        var sn = t(10),
            dn = {
                register: function(n, e, t, r) {
                    var i = r.React,
                        a = r.ReactDOM;
                    return function(n) {
                        function e() {
                            return n.apply(this, arguments) || this
                        }
                        Object(sn.a)(e, n);
                        var r = e.prototype;
                        return r.render = function() {
                            return i.createElement("div", null)
                        }, r.componentDidMount = function() {
                            var n = a.findDOMNode(this),
                                e = t(Object(o.extend)({}, this.props));
                            e.render(n, Q.IFRAME), this.setState({
                                parent: e
                            })
                        }, r.componentDidUpdate = function() {
                            this.state && this.state.parent && this.state.parent.updateProps(Object(o.extend)({}, this.props)).catch(o.noop)
                        }, e
                    }(i.Component)
                }
            },
            fn = {
                register: function(n, e, t, r) {
                    return r.component(n, {
                        render: function(n) {
                            return n("div")
                        },
                        inheritAttrs: !1,
                        mounted: function() {
                            var n = this.$el;
                            this.parent = t(Object(i.a)({}, this.$attrs)), this.parent.render(n, Q.IFRAME)
                        },
                        watch: {
                            $attrs: {
                                handler: function() {
                                    this.parent && this.$attrs && this.parent.updateProps(Object(i.a)({}, this.$attrs)).catch(o.noop)
                                },
                                deep: !0
                            }
                        }
                    })
                }
            },
            ln = {
                register: function(n, e, t, r) {
                    return r.module(n, []).directive(Object(o.dasherizeToCamel)(n), (function() {
                        for (var n = {}, r = 0, i = Object.keys(e); r < i.length; r++) n[i[r]] = "=";
                        return n.props = "=", {
                            scope: n,
                            restrict: "E",
                            controller: ["$scope", "$element", function(n, e) {
                                function r() {
                                    if ("$apply" !== n.$root.$$phase && "$digest" !== n.$root.$$phase) try {
                                        n.$apply()
                                    } catch (n) {}
                                }
                                var i = function() {
                                        return Object(o.replaceObject)(n.props, (function(n) {
                                            return "function" == typeof n ? function() {
                                                var e = n.apply(this, arguments);
                                                return r(), e
                                            } : n
                                        }))
                                    },
                                    a = t(i());
                                a.render(e[0], Q.IFRAME), n.$watch((function() {
                                    a.updateProps(i()).catch(o.noop)
                                }))
                            }]
                        }
                    }))
                }
            },
            pn = {
                register: function(n, e, t, r) {
                    var a = r.NgModule,
                        u = r.ElementRef,
                        c = r.NgZone,
                        s = function(n) {
                            return Object(o.replaceObject)(Object(i.a)({}, n.internalProps, n.props), (function(e) {
                                return "function" == typeof e ? function() {
                                    var t = arguments,
                                        r = this;
                                    return n.zone.run((function() {
                                        return e.apply(r, t)
                                    }))
                                } : e
                            }))
                        },
                        d = (0, r.Component)({
                            selector: n,
                            template: "<div></div>",
                            inputs: ["props"]
                        }).Class({
                            constructor: [u, c, function(n, e) {
                                this._props = {}, this.elementRef = n, this.zone = e
                            }],
                            ngOnInit: function() {
                                var n = this.elementRef.nativeElement;
                                this.parent = t(s(this)), this.parent.render(n, Q.IFRAME)
                            },
                            ngDoCheck: function() {
                                this.parent && ! function(n, e) {
                                    var t = {};
                                    for (var r in n)
                                        if (n.hasOwnProperty(r) && (t[r] = !0, n[r] !== e[r])) return !1;
                                    for (var o in e)
                                        if (!t[o]) return !1;
                                    return !0
                                }(this._props, this.props) && (this._props = Object(i.a)({}, this.props), this.parent.updateProps(s(this)))
                            }
                        });
                    return a({
                        declarations: [d],
                        exports: [d]
                    }).Class({
                        constructor: function() {}
                    })
                }
            };

        function hn(n) {
            var e = n.uid,
                t = n.frame,
                r = n.prerenderFrame,
                i = n.doc,
                a = n.props,
                u = n.event,
                c = n.dimensions,
                s = c.width,
                d = c.height;
            if (t && r) {
                var f = i.createElement("div");
                f.setAttribute("id", e);
                var l = i.createElement("style");
                return a.cspNonce && l.setAttribute("nonce", a.cspNonce), l.appendChild(i.createTextNode("\n            #" + e + " {\n                display: inline-block;\n                position: relative;\n                width: " + s + ";\n                height: " + d + ";\n            }\n\n            #" + e + " > iframe {\n                display: inline-block;\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                transition: opacity .2s ease-in-out;\n            }\n\n            #" + e + " > iframe.zoid-invisible {\n                opacity: 0;\n            }\n\n            #" + e + " > iframe.zoid-visible {\n                opacity: 1;\n        }\n        ")), f.appendChild(t), f.appendChild(r), f.appendChild(l), r.classList.add("zoid-visible"), t.classList.add("zoid-invisible"), u.on("zoid-rendered", (function() {
                    r.classList.remove("zoid-visible"), r.classList.add("zoid-invisible"), t.classList.remove("zoid-invisible"), t.classList.add("zoid-visible"), setTimeout((function() {
                        Object(o.destroyElement)(r)
                    }), 1)
                })), u.on("zoid-resize", (function(n) {
                    var e = n.width,
                        t = n.height;
                    "number" == typeof e && (f.style.width = Object(o.toCSS)(e)), "number" == typeof t && (f.style.height = Object(o.toCSS)(t))
                })), f
            }
        }

        function wn(n) {
            var e = n.doc,
                t = n.props,
                r = e.createElement("html"),
                o = e.createElement("body"),
                i = e.createElement("style"),
                a = e.createElement("div");
            return a.classList.add("spinner"), t.cspNonce && i.setAttribute("nonce", t.cspNonce), r.appendChild(o), o.appendChild(a), o.appendChild(i), i.appendChild(e.createTextNode("\n            html, body {\n                width: 100%;\n                height: 100%;\n            }\n\n            .spinner {\n                position: fixed;\n                max-height: 60vmin;\n                max-width: 60vmin;\n                height: 40px;\n                width: 40px;\n                top: 50%;\n                left: 50%;\n                box-sizing: border-box;\n                border: 3px solid rgba(0, 0, 0, .2);\n                border-top-color: rgba(33, 128, 192, 0.8);\n                border-radius: 100%;\n                animation: rotation .7s infinite linear;\n            }\n\n            @keyframes rotation {\n                from {\n                    transform: translateX(-50%) translateY(-50%) rotate(0deg);\n                }\n                to {\n                    transform: translateX(-50%) translateY(-50%) rotate(359deg);\n                }\n            }\n        ")), r
        }
        var mn = function() {
                return o.noop
            },
            vn = function(n) {
                var e = n.value;
                return Object(o.once)(e)
            },
            yn = Object(o.cleanup)();

        function gn(n) {
            var e = function(n) {
                    var e = n.tag,
                        t = n.url,
                        r = n.domain,
                        u = n.bridgeUrl,
                        c = n.props,
                        s = void 0 === c ? {} : c,
                        d = n.dimensions,
                        f = void 0 === d ? {} : d,
                        l = n.autoResize,
                        p = void 0 === l ? {} : l,
                        h = n.allowedParentDomains,
                        w = void 0 === h ? "*" : h,
                        m = n.attributes,
                        v = void 0 === m ? {} : m,
                        y = n.defaultContext,
                        g = void 0 === y ? Q.IFRAME : y,
                        E = n.containerTemplate,
                        b = void 0 === E ? hn : E,
                        _ = n.prerenderTemplate,
                        O = void 0 === _ ? wn : _,
                        S = n.validate,
                        P = n.eligible,
                        N = void 0 === P ? function() {
                            return {
                                eligible: !0
                            }
                        } : P,
                        F = n.logger,
                        C = void 0 === F ? {
                            info: o.noop
                        } : F,
                        j = e.replace(/-/g, "_"),
                        A = f.width,
                        x = void 0 === A ? "300px" : A,
                        R = f.height,
                        I = void 0 === R ? "150px" : R;
                    if (s = Object(i.a)({}, {
                            window: {
                                type: "object",
                                sendToChild: !1,
                                required: !1,
                                allowDelegate: !0,
                                validate: function(n) {
                                    var e = n.value;
                                    if (!Object(a.u)(e) && !T.isProxyWindow(e)) throw new Error("Expected Window or ProxyWindow");
                                    if (Object(a.u)(e)) {
                                        if (Object(a.v)(e)) throw new Error("Window is closed");
                                        if (!Object(a.s)(e)) throw new Error("Window is not same domain")
                                    }
                                },
                                decorate: function(n) {
                                    return V(n.value)
                                }
                            },
                            timeout: {
                                type: "number",
                                required: !1,
                                sendToChild: !1
                            },
                            close: {
                                type: "function",
                                required: !1,
                                sendToChild: !1,
                                childDecorate: function(n) {
                                    return n.close
                                }
                            },
                            focus: {
                                type: "function",
                                required: !1,
                                sendToChild: !1,
                                childDecorate: function(n) {
                                    return n.focus
                                }
                            },
                            resize: {
                                type: "function",
                                required: !1,
                                sendToChild: !1,
                                childDecorate: function(n) {
                                    return n.resize
                                }
                            },
                            uid: {
                                type: "string",
                                required: !1,
                                sendToChild: !1,
                                childDecorate: function(n) {
                                    return n.uid
                                }
                            },
                            cspNonce: {
                                type: "string",
                                required: !1
                            },
                            getParent: {
                                type: "function",
                                required: !1,
                                sendToChild: !1,
                                childDecorate: function(n) {
                                    return n.getParent
                                }
                            },
                            getParentDomain: {
                                type: "function",
                                required: !1,
                                sendToChild: !1,
                                childDecorate: function(n) {
                                    return n.getParentDomain
                                }
                            },
                            show: {
                                type: "function",
                                required: !1,
                                sendToChild: !1,
                                childDecorate: function(n) {
                                    return n.show
                                }
                            },
                            hide: {
                                type: "function",
                                required: !1,
                                sendToChild: !1,
                                childDecorate: function(n) {
                                    return n.hide
                                }
                            },
                            onDisplay: {
                                type: "function",
                                required: !1,
                                sendToChild: !1,
                                allowDelegate: !0,
                                default: mn,
                                decorate: vn
                            },
                            onRendered: {
                                type: "function",
                                required: !1,
                                sendToChild: !1,
                                default: mn,
                                decorate: vn
                            },
                            onRender: {
                                type: "function",
                                required: !1,
                                sendToChild: !1,
                                default: mn,
                                decorate: vn
                            },
                            onClose: {
                                type: "function",
                                required: !1,
                                sendToChild: !1,
                                allowDelegate: !0,
                                default: mn,
                                decorate: vn
                            },
                            onDestroy: {
                                type: "function",
                                required: !1,
                                sendToChild: !1,
                                allowDelegate: !0,
                                default: mn,
                                decorate: vn
                            },
                            onResize: {
                                type: "function",
                                required: !1,
                                sendToChild: !1,
                                allowDelegate: !0,
                                default: mn
                            },
                            onFocus: {
                                type: "function",
                                required: !1,
                                sendToChild: !1,
                                allowDelegate: !0,
                                default: mn
                            },
                            onError: {
                                type: "function",
                                required: !1,
                                sendToChild: !1,
                                childDecorate: function(n) {
                                    return n.onError
                                }
                            },
                            onProps: {
                                type: "function",
                                required: !1,
                                sendToChild: !1,
                                default: mn,
                                childDecorate: function(n) {
                                    return n.onProps
                                }
                            }
                        }, s), !b) throw new Error("Container template required");
                    return {
                        name: j,
                        tag: e,
                        url: t,
                        domain: r,
                        bridgeUrl: u,
                        propsDef: s,
                        dimensions: {
                            width: x,
                            height: I
                        },
                        autoResize: p,
                        allowedParentDomains: w,
                        attributes: v,
                        defaultContext: g,
                        containerTemplate: b,
                        prerenderTemplate: O,
                        validate: S,
                        logger: C,
                        eligible: N
                    }
                }(n),
                t = e.name,
                r = e.tag,
                c = e.defaultContext,
                s = e.propsDef,
                d = e.eligible,
                f = $(),
                l = {},
                p = [],
                h = function() {
                    var n = tn();
                    return Boolean(n && n.tag === r && n.childDomain === Object(a.h)())
                },
                w = Object(o.memoize)((function() {
                    if (h()) {
                        if (window.xprops) throw delete f.components[r], new Error("Can not register " + t + " as child - child already registered");
                        var n = function(n) {
                            var e, t = n.propsDef,
                                r = n.autoResize,
                                i = n.allowedParentDomains,
                                c = [],
                                s = tn();
                            if (!s) throw new Error("No child payload found");
                            if ("9_0_58" !== s.version) throw new Error("Parent window has zoid version " + s.version + ", child window has version 9_0_58");
                            var d = s.uid,
                                f = s.parentDomain,
                                l = s.exports,
                                p = s.context,
                                h = s.props,
                                w = function(n) {
                                    var e = n.type;
                                    if ("opener" === e) return Object(o.assertExists)("opener", Object(a.m)(window));
                                    if ("parent" === e && "number" == typeof n.distance) return Object(o.assertExists)("parent", Object(a.l)(window, n.distance));
                                    if ("global" === e && n.uid && "string" == typeof n.uid) {
                                        var t = n.uid,
                                            r = Object(a.f)(window);
                                        if (!r) throw new Error("Can not find ancestor window");
                                        for (var i = 0, u = Object(a.e)(r); i < u.length; i++) {
                                            var c = u[i];
                                            if (Object(a.s)(c)) {
                                                var s = $(c);
                                                if (s && s.windows && s.windows[t]) return s.windows[t]
                                            }
                                        }
                                    }
                                    throw new Error("Unable to find " + e + " parent component window")
                                }(s.parent),
                                m = G(w, f, l),
                                v = m.show,
                                y = m.hide,
                                g = m.close,
                                b = function() {
                                    return w
                                },
                                _ = function() {
                                    return f
                                },
                                O = function(n) {
                                    c.push(n)
                                },
                                S = function(n) {
                                    return u.a.try((function() {
                                        if (m && m.onError) return m.onError(n);
                                        throw n
                                    }))
                                },
                                P = function(n) {
                                    return m.resize.fireAndForget({
                                        width: n.width,
                                        height: n.height
                                    })
                                },
                                N = function(n, r, i) {
                                    void 0 === i && (i = !1);
                                    var u = function(n, e, t, r, o, i) {
                                        void 0 === i && (i = !1);
                                        for (var u = {}, c = 0, s = Object.keys(t); c < s.length; c++) {
                                            var d = s[c],
                                                f = e[d];
                                            if (!f || !f.sameDomain || r === Object(a.h)(window) && Object(a.s)(n)) {
                                                var l = nn(e, 0, d, t[d], o);
                                                u[d] = l, f && f.alias && !u[f.alias] && (u[f.alias] = l)
                                            }
                                        }
                                        if (!i)
                                            for (var p = 0, h = Object.keys(e); p < h.length; p++) {
                                                var w = h[p];
                                                t.hasOwnProperty(w) || (u[w] = nn(e, 0, w, void 0, o))
                                            }
                                        return u
                                    }(w, t, n, r, {
                                        show: v,
                                        hide: y,
                                        close: g,
                                        focus: rn,
                                        onError: S,
                                        resize: P,
                                        onProps: O,
                                        getParent: b,
                                        getParentDomain: _,
                                        uid: d
                                    }, i);
                                    e ? Object(o.extend)(e, u) : e = u;
                                    for (var s = 0; s < c.length; s++)(0, c[s])(e)
                                },
                                F = function(n) {
                                    return u.a.try((function() {
                                        return N(n, f, !0)
                                    }))
                                };
                            return {
                                init: function() {
                                    return u.a.try((function() {
                                        return function(n, e) {
                                            if (!Object(a.x)(n, e)) throw new Error("Can not be rendered by domain: " + e)
                                        }(i, f), E(w), window.addEventListener("beforeunload", (function() {
                                            m.checkClose.fireAndForget()
                                        })), window.addEventListener("unload", (function() {
                                            m.checkClose.fireAndForget()
                                        })), Object(a.z)(w, (function() {
                                            on()
                                        })), m.init({
                                            updateProps: F,
                                            close: on
                                        })
                                    })).then((function() {
                                        return (n = r.width, e = void 0 !== n && n, t = r.height, i = void 0 !== t && t, a = r.element, u = void 0 === a ? "body" : a, Object(o.elementReady)(u).catch(o.noop).then((function(n) {
                                            return {
                                                width: e,
                                                height: i,
                                                element: n
                                            }
                                        }))).then((function(n) {
                                            var e = n.width,
                                                t = n.height,
                                                r = n.element;
                                            r && (e || t) && p !== Q.POPUP && Object(o.onResize)(r, (function(n) {
                                                P({
                                                    width: e ? n.width : void 0,
                                                    height: t ? n.height : void 0
                                                })
                                            }), {
                                                width: e,
                                                height: t
                                            })
                                        }));
                                        var n, e, t, i, a, u
                                    })).catch((function(n) {
                                        S(n)
                                    }))
                                },
                                getProps: function() {
                                    return e || (N(function(n, e, t) {
                                        var r, i = t.type,
                                            u = t.uid;
                                        if ("raw" === i) r = t.value;
                                        else if ("uid" === i) {
                                            if (!Object(a.s)(n)) throw new Error("Parent component window is on a different domain - expected " + Object(a.h)() + " - can not retrieve props");
                                            var c = $(n);
                                            r = Object(o.assertExists)("props", c && c.props[u])
                                        }
                                        if (!r) throw new Error("Could not find props");
                                        return G(n, e, r)
                                    }(w, f, h), f), e)
                                }
                            }
                        }(e);
                        return n.init(), n
                    }
                })),
                m = function(n) {
                    var r, s = d({
                            props: n = n || {}
                        }),
                        f = s.eligible,
                        l = s.reason,
                        h = n.onDestroy;
                    n.onDestroy = function() {
                        if (r && f && p.splice(p.indexOf(r), 1), h) return h.apply(void 0, arguments)
                    };
                    var w = cn(e);
                    w.init(), f ? w.setProps(n) : n.onDestroy && n.onDestroy(), yn.register((function() {
                        w.destroy(new Error("zoid destroyed all components"))
                    }));
                    var v = function(e, r, i) {
                        return u.a.try((function() {
                            if (!f) return w.destroy().then((function() {
                                throw new Error(l || t + " component is not eligible")
                            }));
                            if (!Object(a.u)(e)) throw new Error("Must pass window to renderTo");
                            return function(n, e) {
                                return u.a.try((function() {
                                    if (n.window) return V(n.window).getType();
                                    if (e) {
                                        if (e !== Q.IFRAME && e !== Q.POPUP) throw new Error("Unrecognized context: " + e);
                                        return e
                                    }
                                    return c
                                }))
                            }(n, i)
                        })).then((function(n) {
                            return r = function(n, e) {
                                if (e) {
                                    if ("string" != typeof e && !Object(o.isElement)(e)) throw new TypeError("Expected string or element selector to be passed");
                                    return e
                                }
                                if (n === Q.POPUP) return "body";
                                throw new Error("Expected element to be passed to render iframe")
                            }(n, r), w.render(e, r, n)
                        })).catch((function(n) {
                            return w.destroy(n).then((function() {
                                throw n
                            }))
                        }))
                    };
                    return r = Object(i.a)({}, w.getHelpers(), {
                        isEligible: function() {
                            return f
                        },
                        clone: function(e) {
                            var t = (void 0 === e ? {} : e).decorate;
                            return m((void 0 === t ? o.identity : t)(n))
                        },
                        render: function(n, e) {
                            return v(window, n, e)
                        },
                        renderTo: function(n, e, t) {
                            return v(n, e, t)
                        }
                    }), f && p.push(r), r
                };
            if (w(), q("zoid_allow_delegate_" + t, (function() {
                    return !0
                })), q("zoid_delegate_" + t, (function(n) {
                    return {
                        parent: cn(e, n.data.overrides, n.source)
                    }
                })), f.components = f.components || {}, f.components[r]) throw new Error("Can not register multiple components with the same tag: " + r);
            return f.components[r] = !0, {
                init: m,
                instances: p,
                driver: function(n, e) {
                    var t = {
                        react: dn,
                        angular: ln,
                        vue: fn,
                        angular2: pn
                    };
                    if (!t[n]) throw new Error("Could not find driver for framework: " + n);
                    return l[n] || (l[n] = t[n].register(r, s, m, e)), l[n]
                },
                isChild: h,
                canRenderTo: function(n) {
                    return Z(n, "zoid_allow_delegate_" + t).then((function(n) {
                        return n.data
                    })).catch((function() {
                        return !1
                    }))
                },
                registerChild: w
            }
        }

        function En(n) {
            Y();
            var e = gn(n),
                t = function(n) {
                    return e.init(n)
                };
            t.driver = function(n, t) {
                return e.driver(n, t)
            }, t.isChild = function() {
                return e.isChild()
            }, t.canRenderTo = function(n) {
                return e.canRenderTo(n)
            }, t.instances = e.instances;
            var r = e.registerChild();
            return r && (window.xprops = t.xprops = r.getProps()), t
        }

        function bn(n, e) {
            for (var t = [], r = 0; r < n.length; r++) {
                var o = n[r].render(e);
                if (o)
                    if (Array.isArray(o))
                        for (var i = 0; i < o.length; i++) {
                            var a = o[i];
                            a && t.push(a)
                        } else t.push(o)
            }
            return t
        }
        var _n = function() {
                function n(n, e, t) {
                    this.type = "element", this.name = void 0, this.props = void 0, this.children = void 0, this.onRender = void 0, this.name = n, this.props = e || {}, this.children = t;
                    var r = this.props.onRender;
                    "function" == typeof r && (this.onRender = r, delete e.onRender)
                }
                var e = n.prototype;
                return e.render = function(n) {
                    var e = n(this);
                    return this.onRender && this.onRender(e), e
                }, e.renderChildren = function(n) {
                    return bn(this.children, n)
                }, n
            }(),
            On = function() {
                function n(n) {
                    this.type = "fragment", this.children = void 0, this.children = n
                }
                return n.prototype.render = function(n) {
                    return bn(this.children, n)
                }, n
            }(),
            Sn = function() {
                function n(n) {
                    this.type = "text", this.text = void 0, this.text = n
                }
                return n.prototype.render = function(n) {
                    return n(this)
                }, n
            }(),
            Pn = function() {
                function n(n, e, t) {
                    this.type = "component", this.component = void 0, this.props = void 0, this.children = void 0, this.component = n, this.props = e || {}, this.children = t, this.props.children = t
                }
                var e = n.prototype;
                return e.renderComponent = function(n) {
                    var e = function(n) {
                        var e = Nn(Array.isArray(n) ? n : [n]);
                        return 1 === e.length ? e[0] : e.length > 1 ? new On(e) : void 0
                    }(this.component(this.props, this.children));
                    if (e) return e.render(n)
                }, e.render = function(n) {
                    return n(this)
                }, e.renderChildren = function(n) {
                    return bn(this.children, n)
                }, n
            }();

        function Nn(n) {
            for (var e = [], t = 0; t < n.length; t++) {
                var r = n[t];
                if (r)
                    if ("string" == typeof r || "number" == typeof r) e.push(new Sn(r.toString()));
                    else {
                        if ("boolean" == typeof r) continue;
                        if (Array.isArray(r))
                            for (var o = 0, i = Nn(r); o < i.length; o++) e.push(i[o]);
                        else {
                            if (!r || "element" !== r.type && "text" !== r.type && "component" !== r.type) throw new TypeError("Unrecognized node type: " + typeof r);
                            e.push(r)
                        }
                    }
            }
            return e
        }
        var Fn, Cn, jn, An = function(n, e) {
                for (var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), o = 2; o < t; o++) r[o - 2] = arguments[o];
                if (r = Nn(r), "string" == typeof n) return new _n(n, e, r);
                if ("function" == typeof n) return new Pn(n, e, r);
                throw new TypeError("Expected jsx element to be a string or a function")
            },
            Tn = ((Fn = {}).svg = "http://www.w3.org/2000/svg", Fn),
            xn = ((Cn = {})["xlink:href"] = "http://www.w3.org/1999/xlink", Cn);

        function Rn(n, e) {
            return n.createTextNode(e.text)
        }

        function In(n, e) {
            for (var t = e.props, r = 0, o = Object.keys(t); r < o.length; r++) {
                var i = o[r],
                    a = t[i];
                if (null != a && "el" !== i && "innerHTML" !== i)
                    if (i.match(/^on[A-Z][a-z]/) && "function" == typeof a) n.addEventListener(i.slice(2).toLowerCase(), a);
                    else if ("string" == typeof a || "number" == typeof a) {
                    var u = xn[i];
                    u ? n.setAttributeNS(u, i, a.toString()) : n.setAttribute(i, a.toString())
                } else "boolean" == typeof a && !0 === a && n.setAttribute(i, "")
            }
            "iframe" !== n.tagName.toLowerCase() || t.id || n.setAttribute("id", "jsx-iframe-" + "xxxxxxxxxx".replace(/./g, (function() {
                return "0123456789abcdef".charAt(Math.floor(Math.random() * "0123456789abcdef".length))
            })))
        }
        var kn = ((jn = {}).iframe = function(n, e) {
            var t = e.children[0];
            if (1 !== e.children.length || !t || "element" !== t.type || "html" !== t.name) throw new Error("Expected only single html element node as child of iframe element");
            n.addEventListener("load", (function() {
                var e = n.contentWindow;
                if (!e) throw new Error("Expected frame to have contentWindow");
                for (var r = e.document, o = r.documentElement; o.children && o.children.length;) o.removeChild(o.children[0]);
                for (var i = t.render(Mn({
                        doc: r
                    })); i.children.length;) o.appendChild(i.children[0])
            }))
        }, jn.script = function(n, e) {
            var t = e.children[0];
            if (1 !== e.children.length || !t || "text" !== t.type) throw new Error("Expected only single text node as child of script element");
            n.text = t.text
        }, jn.default = function(n, e, t) {
            for (var r = 0, o = e.renderChildren(t); r < o.length; r++) n.appendChild(o[r])
        }, jn);

        function Dn(n, e, t, r) {
            if (e.props.hasOwnProperty("innerHTML")) {
                if (e.children.length) throw new Error("Expected no children to be passed when innerHTML prop is set");
                var o = e.props.innerHTML;
                if ("string" != typeof o) throw new TypeError("innerHTML prop must be string");
                "script" === e.name ? n.text = o : (n.innerHTML = o, function(n, e) {
                    void 0 === e && (e = window.document);
                    for (var t = 0, r = n.querySelectorAll("script"); t < r.length; t++) {
                        var o = r[t],
                            i = o.parentNode;
                        if (i) {
                            var a = e.createElement("script");
                            a.text = o.textContent, i.replaceChild(a, o)
                        }
                    }
                }(n, t))
            } else(kn[e.name] || kn.default)(n, e, r)
        }

        function Mn(n) {
            void 0 === n && (n = {});
            var e = n.doc,
                t = void 0 === e ? document : e,
                r = function(n, e) {
                    if ("component" === n.type) return n.renderComponent((function(n) {
                        return r(n, e)
                    }));
                    if ("text" === n.type) return Rn(t, n);
                    if ("element" === n.type) {
                        var o = function(n, e, t) {
                            return n.createElementNS(t, e.name)
                        }(t, n, e);
                        return In(o, n), Dn(o, n, t, (function(n) {
                            return r(n, e)
                        })), o
                    }
                    throw new TypeError("Unhandleable node")
                },
                o = function(n) {
                    if ("component" === n.type) return n.renderComponent(o);
                    if ("text" === n.type) return Rn(t, n);
                    if ("element" === n.type) {
                        var e = Tn[n.name.toLowerCase()];
                        if (e) return r(n, e);
                        var i = function(n, e) {
                            return e.props.el ? e.props.el : n.createElement(e.name)
                        }(t, n);
                        return In(i, n), Dn(i, n, t, o), i
                    }
                    throw new TypeError("Unhandleable node")
                };
            return o
        }
        var Ln = t(8);

        function Wn(n, e) {
            for (var t = [], r = 0; r < n.length; r++) {
                var o = n[r].render(e);
                if (o)
                    if (Array.isArray(o))
                        for (var i = 0; i < o.length; i++) {
                            var a = o[i];
                            a && t.push(a)
                        } else t.push(o)
            }
            return t
        }
        var Hn = function() {
                function n(n, e, t) {
                    this.type = "element", this.name = void 0, this.props = void 0, this.children = void 0, this.onRender = void 0, this.name = n, this.props = e || {}, this.children = t;
                    var r = this.props.onRender;
                    "function" == typeof r && (this.onRender = r, delete e.onRender)
                }
                var e = n.prototype;
                return e.render = function(n) {
                    var e = n(this);
                    return this.onRender && this.onRender(e), e
                }, e.renderChildren = function(n) {
                    return Wn(this.children, n)
                }, n
            }(),
            Un = function() {
                function n(n) {
                    this.type = "fragment", this.children = void 0, this.children = n
                }
                return n.prototype.render = function(n) {
                    return Wn(this.children, n)
                }, n
            }(),
            zn = function() {
                function n(n) {
                    this.type = "text", this.text = void 0, this.text = n
                }
                return n.prototype.render = function(n) {
                    return n(this)
                }, n
            }(),
            Bn = function() {
                function n(n, e, t) {
                    this.type = "component", this.component = void 0, this.props = void 0, this.children = void 0, this.component = n, this.props = e || {}, this.children = t, this.props.children = t
                }
                var e = n.prototype;
                return e.renderComponent = function(n) {
                    var e = function(n) {
                        var e = qn(Array.isArray(n) ? n : [n]);
                        return 1 === e.length ? e[0] : e.length > 1 ? new Un(e) : void 0
                    }(this.component(this.props, this.children));
                    if (e) return e.render(n)
                }, e.render = function(n) {
                    return n(this)
                }, e.renderChildren = function(n) {
                    return Wn(this.children, n)
                }, n
            }();

        function qn(n) {
            for (var e = [], t = 0; t < n.length; t++) {
                var r = n[t];
                if (r)
                    if ("string" == typeof r || "number" == typeof r) e.push(new zn(r.toString()));
                    else {
                        if ("boolean" == typeof r) continue;
                        if (Array.isArray(r))
                            for (var o = 0, i = qn(r); o < i.length; o++) e.push(i[o]);
                        else {
                            if (!r || "element" !== r.type && "text" !== r.type && "component" !== r.type) throw new TypeError("Unrecognized node type: " + typeof r);
                            e.push(r)
                        }
                    }
            }
            return e
        }
        var Zn, Kn, Gn, Vn = function(n, e) {
                for (var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), o = 2; o < t; o++) r[o - 2] = arguments[o];
                if (r = qn(r), "string" == typeof n) return new Hn(n, e, r);
                if ("function" == typeof n) return new Bn(n, e, r);
                throw new TypeError("Expected jsx element to be a string or a function")
            },
            Yn = ((Zn = {}).svg = "http://www.w3.org/2000/svg", Zn),
            Jn = ((Kn = {})["xlink:href"] = "http://www.w3.org/1999/xlink", Kn);

        function $n(n, e) {
            return n.createTextNode(e.text)
        }

        function Xn(n, e) {
            for (var t = e.props, r = 0, o = Object.keys(t); r < o.length; r++) {
                var i = o[r],
                    a = t[i];
                if (null != a && "el" !== i && "innerHTML" !== i)
                    if (i.match(/^on[A-Z][a-z]/) && "function" == typeof a) n.addEventListener(i.slice(2).toLowerCase(), a);
                    else if ("string" == typeof a || "number" == typeof a) {
                    var u = Jn[i];
                    u ? n.setAttributeNS(u, i, a.toString()) : n.setAttribute(i, a.toString())
                } else "boolean" == typeof a && !0 === a && n.setAttribute(i, "")
            }
            "iframe" !== n.tagName.toLowerCase() || t.id || n.setAttribute("id", "jsx-iframe-" + "xxxxxxxxxx".replace(/./g, (function() {
                return "0123456789abcdef".charAt(Math.floor(Math.random() * "0123456789abcdef".length))
            })))
        }
        var Qn = ((Gn = {}).iframe = function(n, e) {
            var t = e.children[0];
            if (1 !== e.children.length || !t || "element" !== t.type || "html" !== t.name) throw new Error("Expected only single html element node as child of iframe element");
            n.addEventListener("load", (function() {
                var e = n.contentWindow;
                if (!e) throw new Error("Expected frame to have contentWindow");
                for (var r = e.document, o = r.documentElement; o.children && o.children.length;) o.removeChild(o.children[0]);
                for (var i = t.render(function(n) {
                        void 0 === n && (n = {});
                        var e = n.doc,
                            t = void 0 === e ? document : e,
                            r = function(n, e) {
                                if ("component" === n.type) return n.renderComponent((function(n) {
                                    return r(n, e)
                                }));
                                if ("text" === n.type) return $n(t, n);
                                if ("element" === n.type) {
                                    var o = function(n, e, t) {
                                        return n.createElementNS(t, e.name)
                                    }(t, n, e);
                                    return Xn(o, n), ne(o, n, t, (function(n) {
                                        return r(n, e)
                                    })), o
                                }
                                throw new TypeError("Unhandleable node")
                            },
                            o = function(n) {
                                if ("component" === n.type) return n.renderComponent(o);
                                if ("text" === n.type) return $n(t, n);
                                if ("element" === n.type) {
                                    var e = Yn[n.name.toLowerCase()];
                                    if (e) return r(n, e);
                                    var i = function(n, e) {
                                        return e.props.el ? e.props.el : n.createElement(e.name)
                                    }(t, n);
                                    return Xn(i, n), ne(i, n, t, o), i
                                }
                                throw new TypeError("Unhandleable node")
                            };
                        return o
                    }({
                        doc: r
                    })); i.children.length;) o.appendChild(i.children[0])
            }))
        }, Gn.script = function(n, e) {
            var t = e.children[0];
            if (1 !== e.children.length || !t || "text" !== t.type) throw new Error("Expected only single text node as child of script element");
            n.text = t.text
        }, Gn.default = function(n, e, t) {
            for (var r = 0, o = e.renderChildren(t); r < o.length; r++) n.appendChild(o[r])
        }, Gn);

        function ne(n, e, t, r) {
            if (e.props.hasOwnProperty("innerHTML")) {
                if (e.children.length) throw new Error("Expected no children to be passed when innerHTML prop is set");
                var o = e.props.innerHTML;
                if ("string" != typeof o) throw new TypeError("innerHTML prop must be string");
                "script" === e.name ? n.text = o : (n.innerHTML = o, function(n, e) {
                    void 0 === e && (e = window.document);
                    for (var t = 0, r = n.querySelectorAll("script"); t < r.length; t++) {
                        var o = r[t],
                            i = o.parentNode;
                        if (i) {
                            var a = e.createElement("script");
                            a.text = o.textContent, i.replaceChild(a, o)
                        }
                    }
                }(n, t))
            } else(Qn[e.name] || Qn.default)(n, e, r)
        }
        var ee = {
            br: !0
        };

        function te(n) {
            return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#x2F;")
        }
        var re = t(0),
            oe = t(2),
            ie = t(5),
            ae = t(12);

        function ue(n) {
            void 0 === n && (n = window);
            var e = "__post_robot_10_0_46__";
            return n !== window ? n[e] : n[e] = n[e] || {}
        }
        var ce = function() {
            return {}
        };

        function se(n, e) {
            return void 0 === n && (n = "store"), void 0 === e && (e = ce), Object(re.x)(ue(), n, (function() {
                var n = e();
                return {
                    has: function(e) {
                        return n.hasOwnProperty(e)
                    },
                    get: function(e, t) {
                        return n.hasOwnProperty(e) ? n[e] : t
                    },
                    set: function(e, t) {
                        return n[e] = t, t
                    },
                    del: function(e) {
                        delete n[e]
                    },
                    getOrSet: function(e, t) {
                        return Object(re.x)(n, e, t)
                    },
                    reset: function() {
                        n = e()
                    },
                    keys: function() {
                        return Object.keys(n)
                    }
                }
            }))
        }
        var de, fe = function() {};

        function le() {
            var n = ue();
            return n.WINDOW_WILDCARD = n.WINDOW_WILDCARD || new fe, n.WINDOW_WILDCARD
        }

        function pe(n, e) {
            return void 0 === n && (n = "store"), void 0 === e && (e = ce), se("windowStore").getOrSet(n, (function() {
                var t = new ae.a,
                    r = function(n) {
                        return t.getOrSet(n, e)
                    };
                return {
                    has: function(e) {
                        return r(e).hasOwnProperty(n)
                    },
                    get: function(e, t) {
                        var o = r(e);
                        return o.hasOwnProperty(n) ? o[n] : t
                    },
                    set: function(e, t) {
                        return r(e)[n] = t, t
                    },
                    del: function(e) {
                        delete r(e)[n]
                    },
                    getOrSet: function(e, t) {
                        var o = r(e);
                        return Object(re.x)(o, n, t)
                    }
                }
            }))
        }

        function he() {
            return se("instance").getOrSet("instanceID", re.pb)
        }

        function we(n, e) {
            var t = e.domain,
                r = pe("helloPromises"),
                o = r.get(n);
            o && o.resolve({
                domain: t
            });
            var i = ie.a.resolve({
                domain: t
            });
            return r.set(n, i), i
        }

        function me(n, e) {
            return (0, e.send)(n, "postrobot_hello", {
                instanceID: he()
            }, {
                domain: "*",
                timeout: -1
            }).then((function(e) {
                var t = e.origin,
                    r = e.data.instanceID;
                return we(n, {
                    domain: t
                }), {
                    win: n,
                    domain: t,
                    instanceID: r
                }
            }))
        }

        function ve(n, e) {
            var t = e.send;
            return pe("windowInstanceIDPromises").getOrSet(n, (function() {
                return me(n, {
                    send: t
                }).then((function(n) {
                    return n.instanceID
                }))
            }))
        }

        function ye(n) {
            return "object" == typeof n && null !== n && "string" == typeof n.__type__
        }

        function ge(n) {
            return void 0 === n ? "undefined" : null === n ? "null" : Array.isArray(n) ? "array" : "function" == typeof n ? "function" : "object" == typeof n ? n instanceof Error ? "error" : "function" == typeof n.then ? "promise" : "[object RegExp]" === {}.toString.call(n) ? "regex" : "[object Date]" === {}.toString.call(n) ? "date" : "object" : "string" == typeof n ? "string" : "number" == typeof n ? "number" : "boolean" == typeof n ? "boolean" : void 0
        }

        function Ee(n, e) {
            return {
                __type__: n,
                __val__: e
            }
        }
        var be, _e = ((de = {}).function = function() {}, de.error = function(n) {
                return Ee("error", {
                    message: n.message,
                    stack: n.stack,
                    code: n.code,
                    data: n.data
                })
            }, de.promise = function() {}, de.regex = function(n) {
                return Ee("regex", n.source)
            }, de.date = function(n) {
                return Ee("date", n.toJSON())
            }, de.array = function(n) {
                return n
            }, de.object = function(n) {
                return n
            }, de.string = function(n) {
                return n
            }, de.number = function(n) {
                return n
            }, de.boolean = function(n) {
                return n
            }, de.null = function(n) {
                return n
            }, de[void 0] = function(n) {
                return Ee("undefined", n)
            }, de),
            Oe = {},
            Se = ((be = {}).function = function() {
                throw new Error("Function serialization is not implemented; nothing to deserialize")
            }, be.error = function(n) {
                var e = n.stack,
                    t = n.code,
                    r = n.data,
                    o = new Error(n.message);
                return o.code = t, r && (o.data = r), o.stack = e + "\n\n" + o.stack, o
            }, be.promise = function() {
                throw new Error("Promise serialization is not implemented; nothing to deserialize")
            }, be.regex = function(n) {
                return new RegExp(n)
            }, be.date = function(n) {
                return new Date(n)
            }, be.array = function(n) {
                return n
            }, be.object = function(n) {
                return n
            }, be.string = function(n) {
                return n
            }, be.number = function(n) {
                return n
            }, be.boolean = function(n) {
                return n
            }, be.null = function(n) {
                return n
            }, be[void 0] = function() {}, be),
            Pe = {};

        function Ne() {
            for (var n = se("idToProxyWindow"), e = 0, t = n.keys(); e < t.length; e++) {
                var r = t[e];
                n.get(r).shouldClean() && n.del(r)
            }
        }

        function Fe(n, e) {
            var t = e.send,
                r = e.id,
                o = void 0 === r ? Object(re.pb)() : r,
                i = n.then((function(n) {
                    if (Object(oe.u)(n)) return Object(oe.c)(n).name
                })),
                a = n.then((function(n) {
                    if (Object(oe.y)(n)) throw new Error("Window is closed, can not determine type");
                    return Object(oe.n)(n) ? oe.b.POPUP : oe.b.IFRAME
                }));
            i.catch(re.W), a.catch(re.W);
            var u = function() {
                return n.then((function(n) {
                    if (!Object(oe.y)(n)) return Object(oe.u)(n) ? Object(oe.c)(n).name : i
                }))
            };
            return {
                id: o,
                getType: function() {
                    return a
                },
                getInstanceID: Object(re.V)((function() {
                    return n.then((function(n) {
                        return ve(n, {
                            send: t
                        })
                    }))
                })),
                close: function() {
                    return n.then(oe.d)
                },
                getName: u,
                focus: function() {
                    return n.then((function(n) {
                        n.focus()
                    }))
                },
                isClosed: function() {
                    return n.then((function(n) {
                        return Object(oe.y)(n)
                    }))
                },
                setLocation: function(e, t) {
                    return void 0 === t && (t = {}), n.then((function(n) {
                        var r = window.location.protocol + "//" + window.location.host,
                            o = t.method,
                            i = void 0 === o ? "get" : o,
                            a = t.body;
                        if (0 === e.indexOf("/")) e = "" + r + e;
                        else if (!e.match(/^https?:\/\//) && 0 !== e.indexOf(r)) throw new Error("Expected url to be http or https url, or absolute path, got " + JSON.stringify(e));
                        if ("post" === i) return u().then((function(n) {
                            if (!n) throw new Error("Can not post to window without target name");
                            Object(re.lb)({
                                url: e,
                                target: n,
                                method: i,
                                body: a
                            })
                        }));
                        if ("get" !== i) throw new Error("Unsupported method: " + i);
                        if (Object(oe.u)(n)) try {
                            if (n.location && "function" == typeof n.location.replace) return void n.location.replace(e)
                        } catch (n) {}
                        n.location = e
                    }))
                },
                setName: function(e) {
                    return n.then((function(n) {
                        var t = Object(oe.u)(n),
                            r = Object(oe.l)(n);
                        if (!t) throw new Error("Can not set name for cross-domain window: " + e);
                        Object(oe.c)(n).name = e, r && r.setAttribute("name", e), i = ie.a.resolve(e)
                    }))
                }
            }
        }
        new ie.a((function(n) {
            if (window.document && window.document.body) return n(window.document.body);
            var e = setInterval((function() {
                if (window.document && window.document.body) return clearInterval(e), n(window.document.body)
            }), 10)
        }));
        var Ce = function() {
            function n(n) {
                var e = n.send,
                    t = n.win,
                    r = n.serializedWindow;
                this.id = void 0, this.isProxyWindow = !0, this.serializedWindow = void 0, this.actualWindow = void 0, this.actualWindowPromise = void 0, this.send = void 0, this.name = void 0, this.actualWindowPromise = new ie.a, this.serializedWindow = r || Fe(this.actualWindowPromise, {
                    send: e
                }), se("idToProxyWindow").set(this.getID(), this), t && this.setWindow(t, {
                    send: e
                })
            }
            var e = n.prototype;
            return e.getID = function() {
                return this.serializedWindow.id
            }, e.getType = function() {
                return this.serializedWindow.getType()
            }, e.isPopup = function() {
                return this.getType().then((function(n) {
                    return n === oe.b.POPUP
                }))
            }, e.setLocation = function(n, e) {
                var t = this;
                return this.serializedWindow.setLocation(n, e).then((function() {
                    return t
                }))
            }, e.getName = function() {
                return this.serializedWindow.getName()
            }, e.setName = function(n) {
                var e = this;
                return this.serializedWindow.setName(n).then((function() {
                    return e
                }))
            }, e.close = function() {
                var n = this;
                return this.serializedWindow.close().then((function() {
                    return n
                }))
            }, e.focus = function() {
                var n = this,
                    e = this.isPopup(),
                    t = this.getName(),
                    r = ie.a.hash({
                        isPopup: e,
                        name: t
                    }).then((function(n) {
                        var e = n.name;
                        n.isPopup && e && window.open("", e, "noopener")
                    })),
                    o = this.serializedWindow.focus();
                return ie.a.all([r, o]).then((function() {
                    return n
                }))
            }, e.isClosed = function() {
                return this.serializedWindow.isClosed()
            }, e.getWindow = function() {
                return this.actualWindow
            }, e.setWindow = function(n, e) {
                var t = e.send;
                this.actualWindow = n, this.actualWindowPromise.resolve(this.actualWindow), this.serializedWindow = Fe(this.actualWindowPromise, {
                    send: t,
                    id: this.getID()
                }), pe("winToProxyWindow").set(n, this)
            }, e.awaitWindow = function() {
                return this.actualWindowPromise
            }, e.matchWindow = function(n, e) {
                var t = this,
                    r = e.send;
                return ie.a.try((function() {
                    return t.actualWindow ? n === t.actualWindow : ie.a.hash({
                        proxyInstanceID: t.getInstanceID(),
                        knownWindowInstanceID: ve(n, {
                            send: r
                        })
                    }).then((function(e) {
                        var o = e.proxyInstanceID === e.knownWindowInstanceID;
                        return o && t.setWindow(n, {
                            send: r
                        }), o
                    }))
                }))
            }, e.unwrap = function() {
                return this.actualWindow || this
            }, e.getInstanceID = function() {
                return this.serializedWindow.getInstanceID()
            }, e.shouldClean = function() {
                return Boolean(this.actualWindow && Object(oe.y)(this.actualWindow))
            }, e.serialize = function() {
                return this.serializedWindow
            }, n.unwrap = function(e) {
                return n.isProxyWindow(e) ? e.unwrap() : e
            }, n.serialize = function(e, t) {
                var r = t.send;
                return Ne(), n.toProxyWindow(e, {
                    send: r
                }).serialize()
            }, n.deserialize = function(e, t) {
                var r = t.send;
                return Ne(), se("idToProxyWindow").get(e.id) || new n({
                    serializedWindow: e,
                    send: r
                })
            }, n.isProxyWindow = function(n) {
                return Boolean(n && !Object(oe.x)(n) && n.isProxyWindow)
            }, n.toProxyWindow = function(e, t) {
                var r = t.send;
                if (Ne(), n.isProxyWindow(e)) return e;
                var o = e;
                return pe("winToProxyWindow").get(o) || new n({
                    win: o,
                    send: r
                })
            }, n
        }();

        function je(n, e, t, r, o) {
            var i = pe("methodStore"),
                a = se("proxyWindowMethods");
            Ce.isProxyWindow(r) ? a.set(n, {
                val: e,
                name: t,
                domain: o,
                source: r
            }) : (a.del(n), i.getOrSet(r, (function() {
                return {}
            }))[n] = {
                domain: o,
                name: t,
                val: e,
                source: r
            })
        }

        function Ae(n, e) {
            var t = pe("methodStore"),
                r = se("proxyWindowMethods");
            return t.getOrSet(n, (function() {
                return {}
            }))[e] || r.get(e)
        }

        function Te(n, e, t, r, o) {
            var i, a, u;
            a = (i = {
                on: o.on,
                send: o.send
            }).on, u = i.send, se("builtinListeners").getOrSet("functionCalls", (function() {
                return a("postrobot_method", {
                    domain: "*"
                }, (function(n) {
                    var e = n.source,
                        t = n.origin,
                        r = n.data,
                        o = r.id,
                        i = r.name,
                        a = Ae(e, o);
                    if (!a) throw new Error("Could not find method '" + i + "' with id: " + r.id + " in " + Object(oe.i)(window));
                    var c = a.source,
                        s = a.domain,
                        d = a.val;
                    return ie.a.try((function() {
                        if (!Object(oe.A)(s, t)) throw new Error("Method '" + r.name + "' domain " + JSON.stringify(Object(re.S)(a.domain) ? a.domain.source : a.domain) + " does not match origin " + t + " in " + Object(oe.i)(window));
                        if (Ce.isProxyWindow(c)) return c.matchWindow(e, {
                            send: u
                        }).then((function(n) {
                            if (!n) throw new Error("Method call '" + r.name + "' failed - proxy window does not match source in " + Object(oe.i)(window))
                        }))
                    })).then((function() {
                        return d.apply({
                            source: e,
                            origin: t
                        }, r.args)
                    }), (function(n) {
                        return ie.a.try((function() {
                            if (d.onError) return d.onError(n)
                        })).then((function() {
                            var e;
                            throw n.stack && (n.stack = "Remote call to " + i + "(" + (void 0 === (e = r.args) && (e = []), Object(re.e)(e).map((function(n) {
                                return "string" == typeof n ? "'" + n + "'" : void 0 === n ? "undefined" : null === n ? "null" : "boolean" == typeof n ? n.toString() : Array.isArray(n) ? "[ ... ]" : "object" == typeof n ? "{ ... }" : "function" == typeof n ? "() => { ... }" : "<" + typeof n + ">"
                            })).join(", ") + ") failed\n\n") + n.stack), n
                        }))
                    })).then((function(n) {
                        return {
                            result: n,
                            id: o,
                            name: i
                        }
                    }))
                }))
            }));
            var c = t.__id__ || Object(re.pb)();
            n = Ce.unwrap(n);
            var s = t.__name__ || t.name || r;
            return "string" == typeof s && "function" == typeof s.indexOf && 0 === s.indexOf("anonymous::") && (s = s.replace("anonymous::", r + "::")), Ce.isProxyWindow(n) ? (je(c, t, s, n, e), n.awaitWindow().then((function(n) {
                je(c, t, s, n, e)
            }))) : je(c, t, s, n, e), Ee("cross_domain_function", {
                id: c,
                name: s
            })
        }

        function xe(n, e, t, r) {
            var o, i = r.send;
            return function(n, e) {
                if (void 0 === e && (e = Pe), "undefined" !== n) return JSON.parse(n, (function(n, t) {
                    if (ye(this)) return t;
                    var r, o;
                    if (ye(t) ? (r = t.__type__, o = t.__val__) : (r = ge(t), o = t), !r) return o;
                    var i = e[r] || Se[r];
                    return i ? i(o, n) : o
                }))
            }(t, ((o = {}).cross_domain_zalgo_promise = function(n) {
                return function(n, e, t) {
                    return new ie.a(t.then)
                }(0, 0, n)
            }, o.cross_domain_function = function(t) {
                return function(n, e, t, r) {
                    var o = t.id,
                        i = t.name,
                        a = r.send,
                        u = function(t) {
                            function r() {
                                var u = arguments;
                                return Ce.toProxyWindow(n, {
                                    send: a
                                }).awaitWindow().then((function(n) {
                                    var c = Ae(n, o);
                                    if (c && c.val !== r) return c.val.apply({
                                        source: window,
                                        origin: Object(oe.i)()
                                    }, u);
                                    var s = [].slice.call(u);
                                    return t.fireAndForget ? a(n, "postrobot_method", {
                                        id: o,
                                        name: i,
                                        args: s
                                    }, {
                                        domain: e,
                                        fireAndForget: !0
                                    }) : a(n, "postrobot_method", {
                                        id: o,
                                        name: i,
                                        args: s
                                    }, {
                                        domain: e,
                                        fireAndForget: !1
                                    }).then((function(n) {
                                        return n.data.result
                                    }))
                                })).catch((function(n) {
                                    throw n
                                }))
                            }
                            return void 0 === t && (t = {}), r.__name__ = i, r.__origin__ = e, r.__source__ = n, r.__id__ = o, r.origin = e, r
                        },
                        c = u();
                    return c.fireAndForget = u({
                        fireAndForget: !0
                    }), c
                }(n, e, t, {
                    send: i
                })
            }, o.cross_domain_window = function(n) {
                return Ce.deserialize(n, {
                    send: i
                })
            }, o))
        }
        var Re = {};

        function Ie(n, e, t, r) {
            var o = r.on,
                i = r.send;
            return ie.a.try((function() {
                var r = pe().getOrSet(n, (function() {
                    return {}
                }));
                return r.buffer = r.buffer || [], r.buffer.push(t), r.flush = r.flush || ie.a.flush().then((function() {
                    if (Object(oe.y)(n)) throw new Error("Window is closed");
                    var t, a = function(n, e, t, r) {
                        var o, i = r.on,
                            a = r.send;
                        return function(n, e) {
                            void 0 === e && (e = Oe);
                            var t = JSON.stringify(n, (function(n) {
                                var t = this[n];
                                if (ye(this)) return t;
                                var r = ge(t);
                                if (!r) return t;
                                var o = e[r] || _e[r];
                                return o ? o(t, n) : t
                            }));
                            return void 0 === t ? "undefined" : t
                        }(t, ((o = {}).promise = function(t, r) {
                            return function(n, e, t, r, o) {
                                return Ee("cross_domain_zalgo_promise", {
                                    then: Te(n, e, (function(n, e) {
                                        return t.then(n, e)
                                    }), r, {
                                        on: o.on,
                                        send: o.send
                                    })
                                })
                            }(n, e, t, r, {
                                on: i,
                                send: a
                            })
                        }, o.function = function(t, r) {
                            return Te(n, e, t, r, {
                                on: i,
                                send: a
                            })
                        }, o.object = function(n) {
                            return Object(oe.x)(n) || Ce.isProxyWindow(n) ? Ee("cross_domain_window", Ce.serialize(n, {
                                send: a
                            })) : n
                        }, o))
                    }(n, e, ((t = {}).__post_robot_10_0_46__ = r.buffer || [], t), {
                        on: o,
                        send: i
                    });
                    delete r.buffer;
                    for (var u = Object.keys(Re), c = [], s = 0; s < u.length; s++) {
                        var d = u[s];
                        try {
                            Re[d](n, a, e)
                        } catch (n) {
                            c.push(n)
                        }
                    }
                    if (c.length === u.length) throw new Error("All post-robot messaging strategies failed:\n\n" + c.map((function(n, e) {
                        return e + ". " + Object(re.jb)(n)
                    })).join("\n\n"))
                })), r.flush.then((function() {
                    delete r.flush
                }))
            })).then(re.W)
        }

        function ke(n) {
            return se("responseListeners").get(n)
        }

        function De(n) {
            se("responseListeners").del(n)
        }

        function Me(n) {
            return se("erroredResponseListeners").has(n)
        }

        function Le(n) {
            var e = n.name,
                t = n.win,
                r = n.domain,
                o = pe("requestListeners");
            if ("*" === t && (t = null), "*" === r && (r = null), !e) throw new Error("Name required to get request listener");
            for (var i = 0, a = [t, le()]; i < a.length; i++) {
                var u = a[i];
                if (u) {
                    var c = o.get(u);
                    if (c) {
                        var s = c[e];
                        if (s) {
                            if (r && "string" == typeof r) {
                                if (s[r]) return s[r];
                                if (s.__domain_regex__)
                                    for (var d = 0, f = s.__domain_regex__; d < f.length; d++) {
                                        var l = f[d],
                                            p = l.regex,
                                            h = l.listener;
                                        if (Object(oe.A)(p, r)) return h
                                    }
                            }
                            if (s["*"]) return s["*"]
                        }
                    }
                }
            }
        }

        function We(n, e) {
            var t = e.on,
                r = e.send,
                o = se("receivedMessages");
            try {
                if (!window || window.closed || !n.source) return
            } catch (n) {
                return
            }
            var i, a = n.source,
                u = n.origin,
                c = function(n, e, t, r) {
                    var o, i = r.on,
                        a = r.send;
                    try {
                        o = xe(e, t, n, {
                            on: i,
                            send: a
                        })
                    } catch (n) {
                        return
                    }
                    if (o && "object" == typeof o && null !== o) {
                        var u = o.__post_robot_10_0_46__;
                        if (Array.isArray(u)) return u
                    }
                }(n.data, a, u, {
                    on: t,
                    send: r
                });
            if (c) {
                i = a, pe("knownWindows").set(i, !0);
                for (var s, d = function() {
                        var n = c[f];
                        if (o.has(n.id)) return {
                            v: void 0
                        };
                        if (o.set(n.id, !0), Object(oe.y)(a) && !n.fireAndForget) return {
                            v: void 0
                        };
                        0 === n.origin.indexOf(oe.a.FILE) && (u = oe.a.FILE + "//");
                        try {
                            "postrobot_message_request" === n.type ? function(n, e, t, r) {
                                var o = r.on,
                                    i = r.send,
                                    a = Le({
                                        name: t.name,
                                        win: n,
                                        domain: e
                                    }),
                                    u = "postrobot_method" === t.name && t.data && "string" == typeof t.data.name ? t.data.name + "()" : t.name;

                                function c(r, a, c) {
                                    return ie.a.flush().then((function() {
                                        if (!t.fireAndForget && !Object(oe.y)(n)) try {
                                            return Ie(n, e, {
                                                id: Object(re.pb)(),
                                                origin: Object(oe.i)(window),
                                                type: "postrobot_message_response",
                                                hash: t.hash,
                                                name: t.name,
                                                ack: r,
                                                data: a,
                                                error: c
                                            }, {
                                                on: o,
                                                send: i
                                            })
                                        } catch (n) {
                                            throw new Error("Send response message failed for " + u + " in " + Object(oe.i)() + "\n\n" + Object(re.jb)(n))
                                        }
                                    }))
                                }
                                ie.a.all([ie.a.flush().then((function() {
                                    if (!t.fireAndForget && !Object(oe.y)(n)) try {
                                        return Ie(n, e, {
                                            id: Object(re.pb)(),
                                            origin: Object(oe.i)(window),
                                            type: "postrobot_message_ack",
                                            hash: t.hash,
                                            name: t.name
                                        }, {
                                            on: o,
                                            send: i
                                        })
                                    } catch (n) {
                                        throw new Error("Send ack message failed for " + u + " in " + Object(oe.i)() + "\n\n" + Object(re.jb)(n))
                                    }
                                })), ie.a.try((function() {
                                    if (!a) throw new Error("No handler found for post message: " + t.name + " from " + e + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                                    return a.handler({
                                        source: n,
                                        origin: e,
                                        data: t.data
                                    })
                                })).then((function(n) {
                                    return c("success", n)
                                }), (function(n) {
                                    return c("error", null, n)
                                }))]).then(re.W).catch((function(n) {
                                    if (a && a.handleError) return a.handleError(n);
                                    throw n
                                }))
                            }(a, u, n, {
                                on: t,
                                send: r
                            }) : "postrobot_message_response" === n.type ? function(n, e, t) {
                                if (!Me(t.hash)) {
                                    var r = ke(t.hash);
                                    if (!r) throw new Error("No handler found for post message response for message: " + t.name + " from " + e + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                                    if (!Object(oe.A)(r.domain, e)) throw new Error("Response origin " + e + " does not match domain " + Object(oe.D)(r.domain));
                                    if (n !== r.win) throw new Error("Response source does not match registered window");
                                    De(t.hash), "error" === t.ack ? r.promise.reject(t.error) : "success" === t.ack && r.promise.resolve({
                                        source: n,
                                        origin: e,
                                        data: t.data
                                    })
                                }
                            }(a, u, n) : "postrobot_message_ack" === n.type && function(n, e, t) {
                                if (!Me(t.hash)) {
                                    var r = ke(t.hash);
                                    if (!r) throw new Error("No handler found for post message ack for message: " + t.name + " from " + e + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                                    try {
                                        if (!Object(oe.A)(r.domain, e)) throw new Error("Ack origin " + e + " does not match domain " + r.domain.toString());
                                        if (n !== r.win) throw new Error("Ack source does not match registered window")
                                    } catch (n) {
                                        r.promise.reject(n)
                                    }
                                    r.ack = !0
                                }
                            }(a, u, n)
                        } catch (n) {
                            setTimeout((function() {
                                throw n
                            }), 0)
                        }
                    }, f = 0; f < c.length; f++)
                    if (s = d()) return s.v
            }
        }

        function He(n, e, t) {
            if (!n) throw new Error("Expected name");
            if ("function" == typeof(e = e || {}) && (t = e, e = {}), !t) throw new Error("Expected handler");
            var r = function n(e, t) {
                var r = e.name,
                    o = e.win,
                    i = e.domain,
                    a = pe("requestListeners");
                if (!r || "string" != typeof r) throw new Error("Name required to add request listener");
                if (o && "*" !== o && Ce.isProxyWindow(o)) {
                    var u = o.awaitWindow().then((function(e) {
                        return n({
                            name: r,
                            win: e,
                            domain: i
                        }, t)
                    }));
                    return {
                        cancel: function() {
                            u.then((function(n) {
                                return n.cancel()
                            }), re.W)
                        }
                    }
                }
                var c = o;
                if (Array.isArray(c)) {
                    for (var s = [], d = 0, f = c; d < f.length; d++) s.push(n({
                        name: r,
                        domain: i,
                        win: f[d]
                    }, t));
                    return {
                        cancel: function() {
                            for (var n = 0; n < s.length; n++) s[n].cancel()
                        }
                    }
                }
                if (Array.isArray(i)) {
                    for (var l = [], p = 0, h = i; p < h.length; p++) l.push(n({
                        name: r,
                        win: c,
                        domain: h[p]
                    }, t));
                    return {
                        cancel: function() {
                            for (var n = 0; n < l.length; n++) l[n].cancel()
                        }
                    }
                }
                var w = Le({
                    name: r,
                    win: c,
                    domain: i
                });
                c && "*" !== c || (c = le());
                var m = (i = i || "*").toString();
                if (w) throw c && i ? new Error("Request listener already exists for " + r + " on domain " + i.toString() + " for " + (c === le() ? "wildcard" : "specified") + " window") : c ? new Error("Request listener already exists for " + r + " for " + (c === le() ? "wildcard" : "specified") + " window") : i ? new Error("Request listener already exists for " + r + " on domain " + i.toString()) : new Error("Request listener already exists for " + r);
                var v, y, g = a.getOrSet(c, (function() {
                        return {}
                    })),
                    E = Object(re.x)(g, r, (function() {
                        return {}
                    }));
                return Object(re.S)(i) ? (v = Object(re.x)(E, "__domain_regex__", (function() {
                    return []
                }))).push(y = {
                    regex: i,
                    listener: t
                }) : E[m] = t, {
                    cancel: function() {
                        delete E[m], y && (v.splice(v.indexOf(y, 1)), v.length || delete E.__domain_regex__), Object.keys(E).length || delete g[r], c && !Object.keys(g).length && a.del(c)
                    }
                }
            }({
                name: n,
                win: e.window,
                domain: e.domain || "*"
            }, {
                handler: t || e.handler,
                handleError: e.errorHandler || function(n) {
                    throw n
                }
            });
            return {
                cancel: function() {
                    r.cancel()
                }
            }
        }
        Re.postrobot_post_message = function(n, e, t) {
            0 === t.indexOf(oe.a.FILE) && (t = "*"), n.postMessage(e, t)
        }, Re.postrobot_global = function(n, e) {
            if (!Object(oe.p)(window).match(/MSIE|rv:11|trident|edge\/12|edge\/13/i)) throw new Error("Global messaging not needed for browser");
            if (!Object(oe.u)(n)) throw new Error("Post message through global disabled between different domain windows");
            if (!1 !== Object(oe.v)(window, n)) throw new Error("Can only use global to communicate between two different windows, not between frames");
            var t = ue(n);
            if (!t) throw new Error("Can not find postRobot global on foreign window");
            t.receiveMessage({
                source: window,
                origin: Object(oe.i)(),
                data: e
            })
        };
        var Ue, ze, Be, qe = function(n, e, t, r) {
            var o = (r = r || {}).domain || "*",
                i = r.timeout || -1,
                a = r.timeout || 5e3,
                u = r.fireAndForget || !1;
            return Ce.toProxyWindow(n, {
                send: qe
            }).awaitWindow().then((function(n) {
                return ie.a.try((function() {
                    if (function(n, e, t) {
                            if (!n) throw new Error("Expected name");
                            if (t && "string" != typeof t && !Array.isArray(t) && !Object(re.S)(t)) throw new TypeError("Can not send " + n + ". Expected domain " + JSON.stringify(t) + " to be a string, array, or regex");
                            if (Object(oe.y)(e)) throw new Error("Can not send " + n + ". Target window is closed")
                        }(e, n, o), Object(oe.q)(window, n)) return function(n, e, t) {
                        void 0 === e && (e = 5e3), void 0 === t && (t = "Window");
                        var r = function(n) {
                            return pe("helloPromises").getOrSet(n, (function() {
                                return new ie.a
                            }))
                        }(n);
                        return -1 !== e && (r = r.timeout(e, new Error(t + " did not load after " + e + "ms"))), r
                    }(n, a)
                })).then((function(e) {
                    return function(n, e, t, r) {
                        var o = r.send;
                        return ie.a.try((function() {
                            return "string" == typeof e ? e : ie.a.try((function() {
                                return t || me(n, {
                                    send: o
                                }).then((function(n) {
                                    return n.domain
                                }))
                            })).then((function(n) {
                                if (!Object(oe.A)(e, e)) throw new Error("Domain " + Object(re.ib)(e) + " does not match " + Object(re.ib)(e));
                                return n
                            }))
                        }))
                    }(n, o, (void 0 === e ? {} : e).domain, {
                        send: qe
                    })
                })).then((function(r) {
                    var o = r,
                        a = "postrobot_method" === e && t && "string" == typeof t.name ? t.name + "()" : e,
                        c = new ie.a,
                        s = e + "_" + Object(re.pb)();
                    if (!u) {
                        var d = {
                            name: e,
                            win: n,
                            domain: o,
                            promise: c
                        };
                        ! function(n, e) {
                            se("responseListeners").set(n, e)
                        }(s, d);
                        var f = pe("requestPromises").getOrSet(n, (function() {
                            return []
                        }));
                        f.push(c), c.catch((function() {
                            ! function(n) {
                                se("erroredResponseListeners").set(n, !0)
                            }(s), De(s)
                        }));
                        var l = function(n) {
                                return pe("knownWindows").get(n, !1)
                            }(n) ? 1e4 : 2e3,
                            p = i,
                            h = l,
                            w = p,
                            m = Object(re.gb)((function() {
                                return Object(oe.y)(n) ? c.reject(new Error("Window closed for " + e + " before " + (d.ack ? "response" : "ack"))) : d.cancelled ? c.reject(new Error("Response listener was cancelled for " + e)) : (h = Math.max(h - 500, 0), -1 !== w && (w = Math.max(w - 500, 0)), d.ack || 0 !== h ? 0 === w ? c.reject(new Error("No response for postMessage " + a + " in " + Object(oe.i)() + " in " + p + "ms")) : void 0 : c.reject(new Error("No ack for postMessage " + a + " in " + Object(oe.i)() + " in " + l + "ms")))
                            }), 500);
                        c.finally((function() {
                            m.cancel(), f.splice(f.indexOf(c, 1))
                        })).catch(re.W)
                    }
                    return Ie(n, o, {
                        id: Object(re.pb)(),
                        origin: Object(oe.i)(window),
                        type: "postrobot_message_request",
                        hash: s,
                        name: e,
                        data: t,
                        fireAndForget: u
                    }, {
                        on: He,
                        send: qe
                    }).then((function() {
                        return u ? c.resolve() : c
                    }), (function(n) {
                        throw new Error("Send request message failed for " + a + " in " + Object(oe.i)() + "\n\n" + Object(re.jb)(n))
                    }))
                }))
            }))
        };

        function Ze(n) {
            var e = Object({
                __VERSION__: "9_0_58",
                __GLOBAL_KEY__: "__zoid_9_0_58__",
                __IFRAME_SUPPORT__: !0,
                __POPUP_SUPPORT__: !0,
                __FRAMEWORK_SUPPORT__: !0,
                __DEFAULT_CONTAINER__: !0,
                __DEFAULT_PRERENDER__: !0
            }).__SCRIPT_NAMESPACE__ ? "__zoid_9_0_58___" + Object(re.v)() : "__zoid_9_0_58__";
            if (!Object(oe.u)(n)) throw new Error("Can not get global for window on different domain");
            return n[e] || (n[e] = {}), n[e]
        }

        function Ke(n, e) {
            try {
                return e(Ze(n))
            } catch (n) {}
        }

        function Ge(n) {
            if (!n) throw new Error("No window name");
            var e = n.split("__"),
                t = e[1],
                r = e[2],
                o = e[3];
            if ("zoid" !== t) throw new Error("Window not rendered by zoid - got " + t);
            if (!r) throw new Error("Expected component name");
            if (!o) throw new Error("Expected serialized payload ref");
            return {
                name: r,
                serializedInitialPayload: o
            }
        }
        ue().initialized || (ue().initialized = !0, function(n) {
            var e = n.on,
                t = n.send,
                r = ue();
            r.receiveMessage = r.receiveMessage || function(n) {
                return We(n, {
                    on: e,
                    send: t
                })
            }
        }({
            on: He,
            send: qe
        }), ze = (Ue = {
            on: He,
            send: qe
        }).on, Be = Ue.send, se().getOrSet("postMessageListener", (function() {
            return Object(re.b)(window, "message", (function(n) {
                ! function(n, e) {
                    var t = e.on,
                        r = e.send;
                    ie.a.try((function() {
                        try {
                            Object(re.W)(n.source)
                        } catch (n) {
                            return
                        }
                        var e = n.source || n.sourceElement,
                            o = n.origin || n.originalEvent && n.originalEvent.origin,
                            i = n.data;
                        if ("null" === o && (o = oe.a.FILE + "//"), e) {
                            if (!o) throw new Error("Post message did not have origin domain");
                            We({
                                source: e,
                                origin: o,
                                data: i
                            }, {
                                on: t,
                                send: r
                            })
                        }
                    }))
                }(n, {
                    on: ze,
                    send: Be
                })
            }))
        })), function(n) {
            var e = n.on,
                t = n.send;
            se("builtinListeners").getOrSet("helloListener", (function() {
                var n = e("postrobot_hello", {
                        domain: "*"
                    }, (function(n) {
                        return we(n.source, {
                            domain: n.origin
                        }), {
                            instanceID: he()
                        }
                    })),
                    r = Object(oe.g)();
                return r && me(r, {
                    send: t
                }).catch((function(n) {})), n
            }))
        }({
            on: He,
            send: qe
        })), Object(re.U)((function(n) {
            var e = function(n) {
                var e, t, r = n.sender,
                    o = n.basic,
                    i = void 0 !== o && o,
                    a = function(n) {
                        return JSON.parse(Object(re.h)(n))
                    }(n.data),
                    u = a.reference,
                    c = a.metaData;
                e = "function" == typeof r.win ? r.win({
                    metaData: c
                }) : r.win, t = "function" == typeof r.domain ? r.domain({
                    metaData: c
                }) : "string" == typeof r.domain ? r.domain : a.sender.domain;
                var s = function(n, e) {
                    if ("raw" === e.type) return e.val;
                    if ("uid" === e.type) return function(n) {
                        var e = Ze(n);
                        return e.references = e.references || {}, e.references
                    }(n)[e.uid];
                    throw new Error("Unsupported ref type: " + e.type)
                }(e, u);
                return {
                    data: i ? JSON.parse(s) : function(n, e, t) {
                        return xe(n, e, t, {
                            on: He,
                            send: qe
                        })
                    }(e, t, s),
                    metaData: c,
                    sender: {
                        win: e,
                        domain: t
                    },
                    reference: u
                }
            }({
                data: Ge(n).serializedInitialPayload,
                sender: {
                    win: function(n) {
                        return function(n) {
                            if ("opener" === n.type) return Object(re.f)("opener", Object(oe.n)(window));
                            if ("parent" === n.type && "number" == typeof n.distance) return Object(re.f)("parent", Object(oe.m)(window, n.distance));
                            if ("global" === n.type && n.uid && "string" == typeof n.uid) {
                                var e = n.uid,
                                    t = Object(oe.g)(window);
                                if (!t) throw new Error("Can not find ancestor window");
                                for (var r = 0, o = Object(oe.f)(t); r < o.length; r++) {
                                    var i = o[r];
                                    if (Object(oe.u)(i)) {
                                        var a = Ke(i, (function(n) {
                                            return n.windows && n.windows[e]
                                        }));
                                        if (a) return a
                                    }
                                }
                            } else if ("name" === n.type) {
                                var u = n.name;
                                return Object(re.f)("namedWindow", Object(oe.e)(Object(re.f)("ancestor", Object(oe.g)(window)), u))
                            }
                            throw new Error("Unable to find " + n.type + " parent component window")
                        }(n.metaData.windowRef)
                    }
                }
            });
            return {
                parent: e.sender,
                payload: e.data,
                reference: e.reference
            }
        })), Object(re.k)(), Object(re.k)();
        var Ve, Ye, Je, $e, Xe, Qe, nt, et, tt, rt = ["svg", "cdnUrl"],
            ot = ["render", "name", "logoColor"];

        function it(n) {
            var e, t = n.svg,
                r = n.cdnUrl,
                o = Object(Ln.a)(n, rt);
            if (r) {
                var a = Object(i.a)({
                    src: r
                }, o);
                return Vn("img", a)
            }
            if (!t) throw new TypeError("Expected svg prop");
            if ("string" != typeof(t = t.render((e = function(n) {
                    if ("component" === n.type) return [].concat(n.renderComponent(e)).join("");
                    if ("element" === n.type) {
                        var t = (o = n.props, (i = Object.keys(o).filter((function(n) {
                            var e = o[n];
                            return "innerHTML" !== n && ("string" == typeof e || "number" == typeof e || !0 === e)
                        }))).length ? " " + i.map((function(n) {
                            var e = o[n];
                            if (!0 === e) return "" + te(n);
                            if ("string" != typeof e && "number" != typeof e) throw new TypeError("Unexpected prop type: " + typeof e);
                            return "" === e ? te(n) : te(n) + '="' + te(e.toString()) + '"'
                        })).join(" ") : "");
                        if (ee[n.name]) return "<" + n.name + t + " />";
                        var r = "string" == typeof n.props.innerHTML ? n.props.innerHTML : n.renderChildren(e).join("");
                        return "<" + n.name + t + ">" + r + "</" + n.name + ">"
                    }
                    var o, i;
                    if ("text" === n.type) return te(n.text);
                    throw new TypeError("Unhandleable node: " + n.type)
                }, e)))) throw new TypeError("Expected svg prop to be a string or jsx node");
            var u = Object(i.a)({
                src: Object(re.nb)(t)
            }, o);
            return Vn("img", u)
        }

        function at(n) {
            var e = n.render,
                t = n.name,
                r = n.logoColor,
                o = Object(Ln.a)(n, ot);
            return Vn(it, Object(i.a)({}, o, {
                svg: e ? e() : null,
                alt: "",
                class: "paypal-logo paypal-logo-" + t + " " + (r ? "paypal-logo-color-" + r : "")
            }))
        }

        function ut(n, e, t) {
            var r;
            if (t && (r = e[t]), r || (r = e.default), !r) throw new Error("No " + (t || "default") + " logo available for " + n);
            return r
        }
        t(3), (Ve = {}).default = {
            primary: "#ffffff",
            secondary: "#ffffff"
        }, Ve.white = {
            primary: "#ffffff",
            secondary: "#ffffff"
        }, Ve.black = {
            primary: "#000000",
            secondary: "#000000"
        }, (Ye = {}).default = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF",
            tertiary: "#FFFFFF",
            quaternary: "#FFFFFF"
        }, Ye.white = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF",
            tertiary: "#FFFFFF",
            quaternary: "#FFFFFF"
        }, Ye.black = {
            primary: "#1E3764",
            secondary: "#005AB9",
            tertiary: "#FBA900",
            quaternary: "#FFD800"
        }, (Je = {}).default = {
            primary: "#333030"
        }, Je.white = {
            primary: "#ffffff"
        }, Je.black = {
            primary: "#333030"
        }, ($e = {}).default = {
            primary: "#003087"
        }, $e.blue = {
            primary: "#003087"
        }, $e.white = {
            primary: "#ffffff"
        }, $e.black = {
            primary: "#333030"
        }, (Xe = {}).default = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF"
        }, Xe.white = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF"
        }, Xe.black = {
            primary: "#C8036F",
            secondary: "#71706F"
        }, (Qe = {}).default = {
            primary: "#FFFFFF",
            secondary: "#003A7D",
            tertiary: "#ED1C24",
            quaternary: "#FFFFFF",
            quinary: "#FFFFFF"
        }, Qe.white = {
            primary: "#000000",
            secondary: "#FFFFFF",
            tertiary: "#FFFFFF",
            quaternary: "#000000",
            quinary: "#FFFFFF"
        }, Qe.black = {
            primary: "#FFFFFF",
            secondary: "#003A7D",
            tertiary: "#ED1C24",
            quaternary: "#FFFFFF",
            quinary: "#003A7D"
        }, (nt = {}).default = {
            primary: "#FFFFFF",
            secondary: "#CC0066"
        }, nt.white = {
            primary: "#FFFFFF",
            secondary: "#CC0066"
        }, nt.black = {
            primary: "#FFFFFF",
            secondary: "#CC0066"
        }, (et = {}).default = {
            primary: "#00C0EE",
            secondary: "#FFFFFF"
        }, et.white = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF"
        }, et.black = {
            primary: "#00C0EE",
            secondary: "#1A4B67"
        }, (tt = {}).default = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF"
        }, tt.white = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF"
        }, tt.black = {
            primary: "#B3B1B1",
            secondary: "#D03238"
        };
        var ct, st, dt, ft, lt, pt, ht, wt, mt, vt, yt, gt, Et, bt, _t, Ot, St, Pt = ["logoColor"],
            Nt = ["logoColor"],
            Ft = ((ct = {}).default = {
                primary: "#003087",
                secondary: "#009cde"
            }, ct.blue = {
                primary: "#003087",
                secondary: "#009cde"
            }, ct.white = {
                primary: "#ffffff",
                secondary: "#ffffff"
            }, ct.black = {
                primary: "#333030",
                secondary: "#636363"
            }, ct.monochrome = {
                primary: "#000000",
                secondary: "#000000"
            }, ct),
            Ct = function(n) {
                var e, t, r, o = n.logoColor,
                    a = void 0 === o ? "default" : o,
                    u = Object(Ln.a)(n, Pt),
                    c = (r = (e = ut("paypal", Ft, a)).secondary, Vn("svg", {
                        width: "101px",
                        height: "32",
                        viewBox: "0 0 101 32",
                        preserveAspectRatio: "xMinYMin meet",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, Vn("path", {
                        fill: t = e.primary,
                        d: "M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z"
                    }), Vn("path", {
                        fill: t,
                        d: "M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z"
                    }), Vn("path", {
                        fill: t,
                        d: "M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z"
                    }), Vn("path", {
                        fill: r,
                        d: "M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.037 23.7 L 61.937 18 C 62.037 17.5 62.437 17.1 63.037 17.1 L 65.537 17.1 C 70.637 17.1 73.637 14.6 74.437 9.7 C 74.737 7.6 74.437 5.9 73.437 4.7 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z"
                    }), Vn("path", {
                        fill: r,
                        d: "M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z"
                    }), Vn("path", {
                        fill: r,
                        d: "M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z"
                    })));
                return Vn(at, Object(i.a)({}, u, {
                    name: "paypal",
                    alt: "PayPal",
                    role: "presentation",
                    logoColor: a,
                    render: function() {
                        return c
                    }
                }))
            },
            jt = ((st = {}).default = {
                primary: "#009cde",
                secondary: "#012169",
                tertiary: "#003087"
            }, st.blue = {
                primary: "#009cde",
                secondary: "#012169",
                tertiary: "#003087"
            }, st.white = {
                primary: "#ffffff",
                primaryOpacity: "0.7",
                secondary: "#ffffff",
                secondaryOpacity: "0.7",
                tertiary: "#ffffff"
            }, st.black = {
                primary: "#808080",
                secondary: "#000000",
                tertiary: "#1a1a1a"
            }, st),
            At = function(n) {
                var e, t, r, o, a, u, c, s, d = n.logoColor,
                    f = void 0 === d ? "default" : d,
                    l = Object(Ln.a)(n, Nt),
                    p = (t = (e = ut("pp", jt, f)).secondary, r = e.tertiary, u = void 0 === (a = e.secondaryOpacity) ? "1" : a, s = void 0 === (c = e.tertiaryOpacity) ? "1" : c, Vn("svg", {
                        width: "24",
                        height: "32",
                        viewBox: "0 0 24 32",
                        preserveAspectRatio: "xMinYMin meet",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, Vn("path", {
                        fill: e.primary,
                        opacity: void 0 === (o = e.primaryOpacity) ? "1" : o,
                        d: "M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 6.694 26.557 C 6.6 26.957 6.881 27.257 7.255 27.257 L 11.375 27.257 C 11.844 27.257 12.311 26.957 12.405 26.457 L 12.405 26.157 L 13.247 20.957 L 13.247 20.757 C 13.341 20.257 13.809 19.857 14.277 19.857 L 14.84 19.857 C 18.864 19.857 21.954 18.157 22.89 13.157 C 23.358 11.057 23.172 9.357 22.048 8.157 C 21.767 7.757 21.298 7.457 20.924 7.157 L 20.924 7.157"
                    }), Vn("path", {
                        fill: t,
                        opacity: u,
                        d: "M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 8.192 16.357 C 8.286 15.757 8.754 15.357 9.315 15.357 L 11.655 15.357 C 16.243 15.357 19.801 13.357 20.924 7.757 C 20.831 7.457 20.924 7.357 20.924 7.157"
                    }), Vn("path", {
                        fill: r,
                        opacity: s,
                        d: "M 9.504 7.157 C 9.596 6.857 9.784 6.557 10.065 6.357 C 10.251 6.357 10.345 6.257 10.532 6.257 L 16.711 6.257 C 17.461 6.257 18.208 6.357 18.772 6.457 C 18.958 6.457 19.146 6.457 19.333 6.557 C 19.52 6.657 19.707 6.657 19.801 6.757 C 19.894 6.757 19.987 6.757 20.082 6.757 C 20.362 6.857 20.643 7.057 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.257 C 18.677 0.857 16.525 0.257 13.809 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.657 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 9.504 7.157 Z"
                    })));
                return Vn(at, Object(i.a)({}, l, {
                    name: "pp",
                    alt: "PP",
                    role: "presentation",
                    logoColor: f,
                    render: function() {
                        return p
                    }
                }))
            };

        function Tt(n) {
            return Vn("div", {
                class: "preloader spinner"
            }, Vn("style", {
                nonce: n.nonce,
                innerHTML: "\n\n    body {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        position: fixed;\n        top: 0;\n        left: 0;\n        margin: 0;\n    }\n\n    .spinner {\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        z-index: 10\n    }\n\n    .spinner .spinWrap {\n        width: 200px;\n        height: 100px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-left: -100px;\n        margin-top: -50px\n    }\n\n    .spinner .loader,\n    .spinner .spinnerImage {\n        height: 100px;\n        width: 100px;\n        position: absolute;\n        top: 0;\n        left: 50%;\n        opacity: 1;\n        filter: alpha(opacity=100)\n    }\n\n    .spinner .spinnerImage {\n        margin: 28px 0 0 -25px;\n        background: url(https://www.paypalobjects.com/images/checkout/hermes/icon_ot_spin_lock_skinny.png) no-repeat\n    }\n\n    .spinner .loader {\n        margin: 0 0 0 -55px;\n        background-color: transparent;\n        animation: rotation .7s infinite linear;\n        border-left: 5px solid #cbcbca;\n        border-right: 5px solid #cbcbca;\n        border-bottom: 5px solid #cbcbca;\n        border-top: 5px solid #2380be;\n        border-radius: 100%\n    }\n\n    @keyframes rotation {\n        from {\n            transform: rotate(0deg)\n        }\n        to {\n            transform: rotate(359deg)\n        }\n    }\n"
            }), Vn("div", {
                class: "spinWrap"
            }, Vn("p", {
                class: "spinnerImage"
            }), Vn("p", {
                class: "loader"
            })))
        }

        function xt(n, e) {
            var t = n.nonce;
            return Vn("html", null, Vn("head", null, Vn("title", null, "PayPal"), Vn("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            })), Vn("body", null, Vn(Tt, {
                nonce: t
            }), e))
        }

        function Rt(n) {
            var e, t = n.context,
                r = n.close,
                i = n.focus,
                a = n.event,
                u = n.frame,
                c = n.prerenderFrame,
                s = n.content,
                d = void 0 === s ? {} : s,
                f = n.autoResize,
                l = n.hideCloseButton,
                p = "paypal-overlay-" + Object(o.uniqueID)(),
                h = function(n) {
                    return function(e) {
                        a.on("zoid-display", (function() {
                            return Object(o.animate)(e, "show-" + n, o.noop)
                        })), a.on("zoid-close", (function() {
                            return Object(o.animate)(e, "hide-" + n, o.noop)
                        }))
                    }
                };
            return u && c && (u.classList.add("component-frame"), c.classList.add("prerender-frame"), c.classList.add("visible"), u.classList.add("invisible"), a.on("zoid-rendered", (function() {
                c.classList.remove("visible"), c.classList.add("invisible"), u.classList.remove("invisible"), u.classList.add("visible"), setTimeout((function() {
                    Object(o.destroyElement)(c)
                }), 1)
            })), e = An("div", {
                class: "outlet",
                onRender: function(n) {
                    h("component")(n), f && function(n) {
                        a.on("zoid-resize", (function(e) {
                            var t = e.width,
                                r = e.height;
                            "number" == typeof t && (n.style.width = Object(o.toCSS)(t)), "number" == typeof r && (n.style.height = Object(o.toCSS)(r))
                        }))
                    }(n)
                }
            }, An("node", {
                el: u
            }), An("node", {
                el: c
            }))), An("div", {
                id: p,
                onRender: h("container"),
                class: "paypal-checkout-sandbox"
            }, An("style", null, function(n) {
                var e = n.uid;
                return "\n        #" + e + ".paypal-checkout-sandbox {\n            display: block;\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            width: 100vw;\n            height: 100vh;\n            max-width: 100%;\n            max-height: 100%;\n            min-width: 100%;\n            min-height: 100%;\n            z-index: 2147483647;\n            animation-duration: 0.3s;\n            animation-iteration-count: 1;\n            animation-fill-mode: forwards !important;\n            opacity: 0;\n        }\n        #" + e + ".paypal-checkout-sandbox .paypal-checkout-sandbox-iframe {\n            display: block;\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n        }\n        @keyframes show-container {\n            from {\n                opacity: 0;\n            }\n            to {\n                opacity: 1;\n            }\n        }\n        @keyframes hide-container {\n            from {\n                opacity: 1;\n            }\n            50% {\n                opacity: 1;\n            }\n            to {\n                opacity: 0;\n            }\n        }\n    "
            }({
                uid: p
            })), An("iframe", {
                title: "PayPal Checkout Overlay",
                name: "__paypal_checkout_sandbox_" + p + "__",
                scrolling: "no",
                class: "paypal-checkout-sandbox-iframe"
            }, An("html", null, An("body", null, An("div", {
                id: p,
                onClick: function(n) {
                    n.preventDefault(), n.stopPropagation(), Object(o.supportsPopups)() && (Object(o.isIos)() ? window.alert("Please switch tabs to reactivate the PayPal window") : Object(o.isFirefox)() ? window.alert('Don\'t see the popup window?\n\nSelect "Window" in your toolbar to find "Log in to your PayPal account"') : i())
                },
                class: "paypal-overlay-context-" + t + " paypal-checkout-overlay"
            }, !l && An("a", {
                href: "#",
                class: "paypal-checkout-close",
                onClick: function(n) {
                    n.preventDefault(), n.stopPropagation(), r()
                },
                "aria-label": "close",
                role: "button"
            }), An("div", {
                class: "paypal-checkout-modal"
            }, An("div", {
                class: "paypal-checkout-logo"
            }, An(At, {
                logoColor: "white"
            }), An(Ct, {
                logoColor: "white"
            })), d.windowMessage && An("div", {
                class: "paypal-checkout-message"
            }, d.windowMessage), d.continueMessage && An("div", {
                class: "paypal-checkout-continue"
            }, An("a", {
                onClick: i,
                href: "#"
            }, d.continueMessage)), An("div", {
                class: "paypal-checkout-loader"
            }, An("div", {
                class: "paypal-spinner"
            }))), An("div", {
                class: "paypal-checkout-iframe-container"
            }, e), An("style", null, function(n) {
                var e = n.uid;
                return "\n        #" + e + " {\n            position: absolute;\n            z-index: 2147483647;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            transform: translate3d(0, 0, 0);\n            background-color: black;\n            background-color: rgba(0, 0, 0, 0.8);\n            background: radial-gradient(50% 50% at 50% 50%, #000000 34.9%, rgba(0, 0, 0, 0.8) 100%);\n            color: #fff;\n        }\n        #" + e + " a {\n            color: #fff;\n        }\n        #" + e + " .paypal-checkout-close:before,\n        #" + e + " .paypal-checkout-close:after {\n            background-color: #fff;\n        }\n        #" + e + ".paypal-overlay-context-" + Q.POPUP + " {\n            cursor: pointer;\n        }\n        #" + e + " a {\n            text-decoration: none;\n        }\n        #" + e + ' .paypal-checkout-modal {\n            font-family: "HelveticaNeue", "HelveticaNeue-Light", "Helvetica Neue Light", helvetica, arial, sans-serif;\n            font-size: 14px;\n            text-align: center;\n            box-sizing: border-box;\n            max-width: 612px;\n            top: 50%;\n            left: 50%;\n            position: absolute;\n            transform: translateX(-50%) translateY(-50%);\n            cursor: pointer;\n            text-align: center;\n        }\n        #' + e + ".paypal-overlay-loading .paypal-checkout-message, #" + e + ".paypal-overlay-loading .paypal-checkout-continue {\n            display: none;\n        }\n        .paypal-checkout-loader {\n            display: none;\n        }\n        #" + e + ".paypal-overlay-loading .paypal-checkout-loader {\n            display: block;\n        }\n        #" + e + " .paypal-checkout-modal .paypal-checkout-logo {\n            cursor: pointer;\n            margin-bottom: 30px;\n            display: inline-block;\n        }\n        #" + e + " .paypal-checkout-modal .paypal-checkout-logo img {\n            height: 36px;\n        }\n        #" + e + " .paypal-checkout-modal .paypal-checkout-logo img.paypal-checkout-logo-pp {\n            margin-right: 10px;\n        }\n        #" + e + " .paypal-checkout-modal .paypal-checkout-message {\n            font-size: 15px;\n            line-height: 1.5;\n            padding: 10px 0;\n        }\n        #" + e + ".paypal-overlay-context-" + Q.IFRAME + " .paypal-checkout-message, #" + e + ".paypal-overlay-context-" + Q.IFRAME + " .paypal-checkout-continue {\n            display: none;\n        }\n        #" + e + " .paypal-checkout-modal .paypal-checkout-continue {\n            font-size: 15px;\n            line-height: 1.35;\n            padding: 10px 0;\n            font-weight: bold;\n        }\n        #" + e + " .paypal-checkout-modal .paypal-checkout-continue a {\n            border-bottom: 1px solid white;\n        }\n        #" + e + " .paypal-checkout-close {\n            position: absolute;\n            right: 16px;\n            top: 16px;\n            width: 16px;\n            height: 16px;\n            opacity: 0.6;\n        }\n        #" + e + ".paypal-overlay-loading .paypal-checkout-close {\n            display: none;\n        }\n        #" + e + " .paypal-checkout-close:hover {\n            opacity: 1;\n        }\n        #" + e + " .paypal-checkout-close:before, .paypal-checkout-close:after {\n            position: absolute;\n            left: 8px;\n            content: ' ';\n            height: 16px;\n            width: 2px;\n        }\n        #" + e + " .paypal-checkout-close:before {\n            transform: rotate(45deg);\n        }\n        #" + e + " .paypal-checkout-close:after {\n            transform: rotate(-45deg);\n        }\n        #" + e + " .paypal-checkout-iframe-container {\n            display: none;\n        }\n        #" + e + ".paypal-overlay-context-" + Q.IFRAME + " .paypal-checkout-iframe-container,\n        #" + e + ".paypal-overlay-context-" + Q.IFRAME + " .paypal-checkout-iframe-container > .outlet,\n        #" + e + ".paypal-overlay-context-" + Q.IFRAME + " .paypal-checkout-iframe-container > .outlet > iframe {\n            max-height: 95vh;\n            max-width: 95vw;\n        }\n        #" + e + ".paypal-overlay-context-" + Q.IFRAME + " .paypal-checkout-iframe-container {\n            display: block;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            min-width: 612px;\n            transform: translate(-50%, -50%);\n            transform: translate3d(-50%, -50%, 0);\n            border-radius: 10px;\n            overflow: hidden;\n        }\n        #" + e + ".paypal-overlay-context-" + Q.IFRAME + " .outlet {\n            position: relative;\n            transition: all 0.3s ease;\n            animation-duration: 0.3s;\n            animation-fill-mode: forwards !important;\n            min-width: 612px;\n            max-width: 612px;\n            width: 612px;\n            height: 760px;\n            background-color: white;\n            overflow: auto;\n            opacity: 0;\n            transform: scale3d(.3, .3, .3);\n            -webkit-overflow-scrolling: touch;\n        }\n        #" + e + ".paypal-overlay-context-" + Q.IFRAME + " .outlet > iframe {\n            position: absolute;\n            top: 0;\n            left: 0;\n            transition: opacity .4s ease-in-out;\n        }\n        #" + e + ".paypal-overlay-context-" + Q.IFRAME + " .outlet > iframe.component-frame {\n            z-index: 100;\n        }\n        #" + e + ".paypal-overlay-context-" + Q.IFRAME + " .outlet > iframe.prerender-frame {\n            z-index: 200;\n        }\n        #" + e + ".paypal-overlay-context-" + Q.IFRAME + " .outlet > iframe.visible {\n            opacity: 1;\n            z-index: 200;\n        }\n        #" + e + ".paypal-overlay-context-" + Q.IFRAME + " .outlet > iframe.invisible {\n            opacity: 0;\n            z-index: 100;\n        }\n        @media screen and (max-width: 470px) {\n            #" + e + ".paypal-overlay-context-" + Q.IFRAME + " .paypal-checkout-iframe-container,\n            #" + e + ".paypal-overlay-context-" + Q.IFRAME + " .outlet {\n                min-width: 100%;\n                min-width: calc(100% - 20px);\n                max-width: 100%;\n                max-width: calc(100% - 20px);\n                min-height: 100%;\n                min-height: calc(100% - 20px);\n                max-height: 100%;\n                max-height: calc(100% - 20px);\n                height: 100%;\n                height: calc(100% - 20px);\n            }\n        }\n        #" + e + ".paypal-overlay-context-" + Q.IFRAME + " .outlet iframe {\n            width: 1px;\n            min-width: 100%;\n            height: 100%;\n        }\n        @keyframes show-component {\n            from {\n                opacity: 0;\n                transform: scale3d(.3, .3, .3);\n            }\n            to {\n                opacity: 1;\n                transform: scale3d(1, 1, 1);\n            }\n        }\n        @keyframes hide-component {\n            from {\n                opacity: 1;\n                transform: scale3d(1, 1, 1);\n            }\n            to {\n                opacity: 0;\n                transform: scale3d(.3, .3, .3);\n            }\n        }\n        .paypal-spinner {\n            height: 30px;\n            width: 30px;\n            display: inline-block;\n            box-sizing: content-box;\n            opacity: 1;\n            filter: alpha(opacity=100);\n            animation: rotation .7s infinite linear;\n            border-left: 8px solid rgba(0, 0, 0, .2);\n            border-right: 8px solid rgba(0, 0, 0, .2);\n            border-bottom: 8px solid rgba(0, 0, 0, .2);\n            border-top: 8px solid #fff;\n            border-radius: 100%\n        }\n        @keyframes rotation {\n            from {\n                transform: rotate(0deg)\n            }\n            to {\n                transform: rotate(359deg)\n            }\n        }\n    "
            }({
                uid: p
            })))))))
        }(dt = {}).default = {
            main: "#005DA0",
            card: "#AEB1BC"
        }, dt.white = {
            main: "#FFFFFF",
            card: "#FFFFFF"
        }, dt.black = {
            main: "#333030",
            card: "#333030"
        }, (ft = {}).default = {
            primary: "#EDEDED",
            secondary: "#393A41"
        }, ft.white = {
            primary: "#FFFFFF",
            secondary: "#000000"
        }, ft.black = {
            primary: "#393A41",
            secondary: "#EDEDED"
        }, (lt = {}).default = {
            primary: "#3D93CE"
        }, lt.blue = {
            primary: "#3D93CE"
        }, lt.white = {
            primary: "#ffffff"
        }, lt.black = {
            primary: "#333030"
        }, (pt = {}).default = {
            primary: "#ffffff"
        }, pt.blue = {
            primary: "#003087"
        }, pt.white = {
            primary: "#ffffff"
        }, pt.black = {
            primary: "#333030"
        }, (ht = {}).default = {
            primary: "#1AAD19",
            secondary: "#FFFFFF"
        }, ht.white = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF"
        }, ht.black = {
            primary: "#1AAD19",
            secondary: "#4D4D4D"
        }, (wt = {}).default = {
            primary: "#A6C307"
        }, wt.white = {
            primary: "#FFFFFF"
        }, wt.black = {
            primary: "#2C2E2F"
        }, (mt = {}).default = {
            primary: "#FF0000",
            secondary: "#E83E49",
            tertiary: "#FF00FF",
            quaternary: "#000000",
            senary: "#FFFFFF"
        }, mt.white = {
            primary: "#000000",
            secondary: "#000000",
            tertiary: "#000000",
            quaternary: "#000000",
            senary: "#FFFFFF"
        }, mt.black = {
            primary: "#FF0000",
            secondary: "#E83E49",
            tertiary: "#FF00FF",
            quaternary: "#4D4D4F",
            senary: "#FFFFFF"
        }, (vt = {}).default = {
            primary: "#0EE06E"
        }, vt.white = {
            primary: "#FFFFFF"
        }, vt.black = {
            primary: "#000000"
        }, (yt = {}).default = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF"
        }, yt.white = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF"
        }, yt.black = {
            primary: "#E39E39",
            secondary: "#D8232A"
        }, (gt = {}).default = {
            primary: "#FFFFFF"
        }, gt.white = {
            primary: "#FFFFFF"
        }, gt.black = {
            primary: "#000000"
        }, (Et = {}).default = {
            primary: "#009EE3",
            secondary: "#FFFFFF",
            tertiary: "#009EE3",
            quaternary: "#FFFFFF"
        }, Et.white = {
            primary: "#000000",
            secondary: "#FFFFFF",
            tertiary: "#000000",
            quaternary: "#FFFFFF"
        }, Et.black = {
            primary: "#FFFFFF",
            secondary: "#2D3277",
            tertiary: "#009EE3",
            quaternary: "#009EE3"
        }, (bt = {}).default = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF"
        }, bt.white = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF"
        }, bt.black = {
            primary: "#1866AB",
            secondary: "#373535"
        }, (_t = {}).default = {
            primary: "#FFFFFF"
        }, _t.white = {
            primary: "#FFFFFF"
        }, _t.black = {
            primary: "#2C2E2F"
        }, (Ot = {}).default = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF",
            tertiary: "#FFFFFF"
        }, Ot.white = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF",
            tertiary: "#FFFFFF"
        }, Ot.black = {
            primary: "#A6009C",
            secondary: "#FF009C",
            tertiary: "#1C1C1C"
        }, (St = {}).default = {
            primary: "#000000"
        }, St.black = {
            primary: "#000000"
        }, St.white = {
            primary: "#FFFFFF"
        }, St.blue = {
            primary: "#60CDFF"
        };
        var It, kt, Dt = {
                ar: [{
                    countries: [],
                    content: {
                        windowMessage: "Ù‡Ù„ ØªÙˆØ§Ø¬Ù‡ ØµØ¹ÙˆØ¨Ø© ÙÙŠ Ù…Ø´Ø§Ù‡Ø¯Ø© Ù…ØªØµÙØ­ PayPal Ø§Ù„Ø¢Ù…Ù†ØŸ Ø³Ù†Ø³Ø§Ø¹Ø¯Ùƒ ÙÙŠ Ø¥Ø¹Ø§Ø¯Ø© ÙØªØ­ Ø§Ù„Ù†Ø§ÙØ°Ø© Ù„Ø§Ø³ØªÙƒÙ…Ø§Ù„ ØªØ¨Ø±Ø¹Ùƒ.",
                        continueMessage: "Ø§Ù†Ù‚Ø± Ù„Ù„Ù…ØªØ§Ø¨Ø¹Ø©"
                    }
                }],
                bg: [{
                    countries: [],
                    content: {
                        continueMessage: "Ð©Ñ€Ð°ÐºÐ½ÐµÑ‚Ðµ, Ð·Ð° Ð´Ð° Ð¿Ñ€Ð¾Ð´ÑŠÐ»Ð¶Ð¸Ñ‚Ðµ",
                        windowMessage: "ÐÐµ Ð²Ð¸Ð¶Ð´Ð°Ñ‚Ðµ Ð»Ð¸ Ð·Ð°Ñ‰Ð¸Ñ‚ÐµÐ½Ð¸Ñ Ð±Ñ€Ð°ÑƒÐ·ÑŠÑ€ Ð½Ð° PayPal? Ð©Ðµ Ð²Ð¸ Ð¿Ð¾Ð¼Ð¾Ð³Ð½ÐµÐ¼ Ð´Ð° Ð¾Ñ‚Ð²Ð¾Ñ€Ð¸Ñ‚Ðµ Ð¾Ñ‚Ð½Ð¾Ð²Ð¾ Ð¿Ñ€Ð¾Ð·Ð¾Ñ€ÐµÑ†Ð°, Ð·Ð° Ð´Ð° Ð·Ð°Ð²ÑŠÑ€ÑˆÐ¸Ñ‚Ðµ Ð´Ð°Ñ€ÐµÐ½Ð¸ÐµÑ‚Ð¾ ÑÐ¸."
                    }
                }],
                cs: [{
                    countries: [],
                    content: {
                        windowMessage: "Nezobrazuje se vÃ¡m bezpeÄnÃ½ prohlÃ­Å¾eÄ PayPal? PomÅ¯Å¾eme vÃ¡m okno znovu otevÅ™Ã­t, abyste mohli pÅ™Ã­spÄ›vek dokonÄit.",
                        continueMessage: "KliknutÃ­m pokraÄujte"
                    }
                }],
                da: [{
                    countries: [],
                    content: {
                        windowMessage: "Kan du ikke se PayPals sikre browser? Vi hjÃ¦lper dig med at genÃ¥bne vinduet, sÃ¥ du kan betale.",
                        continueMessage: "Klik for at fortsÃ¦tte"
                    }
                }],
                de: [{
                    countries: [],
                    content: {
                        windowMessage: "Das PayPal-Fenster wird nicht angezeigt? Wir helfen Ihnen, das Fenster erneut zu Ã¶ffnen, um Ihre Spende abzuschlieÃŸen.",
                        continueMessage: "Weiter"
                    }
                }],
                el: [{
                    countries: [],
                    content: {
                        windowMessage: "Î”ÎµÎ½ Î²Î»Î­Ï€ÎµÏ„Îµ Ï„Î¿ Î±ÏƒÏ†Î±Î»Î­Ï‚ Ï€ÏÏŒÎ³ÏÎ±Î¼Î¼Î± Ï€ÎµÏÎ¹Î®Î³Î·ÏƒÎ·Ï‚ PayPal; Î˜Î± ÏƒÎ±Ï‚ Î²Î¿Î·Î¸Î®ÏƒÎ¿Ï…Î¼Îµ Î½Î± ÎµÏ€Î±Î½ÎµÎºÎºÎ¹Î½Î®ÏƒÎµÏ„Îµ Ï„Î¿ Ï€Î±ÏÎ¬Î¸Ï…ÏÎ¿ Î³Î¹Î± Î½Î± Î¿Î»Î¿ÎºÎ»Î·ÏÏŽÏƒÎµÏ„Îµ Ï„Î· Î´Ï‰ÏÎµÎ¬ ÏƒÎ±Ï‚.",
                        continueMessage: "Î Î±Ï„Î®ÏƒÏ„Îµ Î³Î¹Î± Î½Î± ÏƒÏ…Î½ÎµÏ‡Î¯ÏƒÎµÏ„Îµ"
                    }
                }],
                en: [{
                    countries: [],
                    content: {
                        windowMessage: "Donâ€™t see the secure PayPal browser? Weâ€™ll help you re-launch the window to complete your donation.",
                        continueMessage: "Click to Continue"
                    }
                }, {
                    countries: ["AU", "GB", "IN", "SG"],
                    content: {
                        continueMessage: "Click to Continue",
                        windowMessage: "Canâ€™t see the secure PayPal browser? Weâ€™ll help you re-launch the window to complete your donation."
                    }
                }],
                es: [{
                    countries: [],
                    content: {
                        windowMessage: "Â¿No ve el sÃ­mbolo de navegaciÃ³n segura de PayPal? Le ayudaremos a abrir de nuevo la ventana para completar su donaciÃ³n.",
                        continueMessage: "Haga clic para continuar"
                    }
                }, {
                    countries: ["ES"],
                    content: {
                        continueMessage: "Haz clic para continuar",
                        windowMessage: "Â¿No ves el sÃ­mbolo de navegaciÃ³n segura de PayPal? Te ayudaremos a abrir de nuevo la ventana para completar el donativo."
                    }
                }, {
                    countries: ["MX"],
                    content: {
                        continueMessage: "Haga clic para continuar",
                        windowMessage: "Â¿No ve el navegador seguro de PayPal? Le ayudaremos a abrir de nuevo la ventana para completar su donaciÃ³n."
                    }
                }],
                et: [{
                    countries: [],
                    content: {
                        continueMessage: "JÃ¤tkamiseks klÃµpsake",
                        windowMessage: "Kas te ei nÃ¤e turvalist PayPali brauserit? Aitame teil annetuse lÃµpuleviimiseks akna uuesti avada."
                    }
                }],
                fi: [{
                    countries: [],
                    content: {
                        windowMessage: "EtkÃ¶ nÃ¤e suojattua PayPal-selainta? Autamme avaamaan ikkunan uudelleen lahjoituksen viimeistelyÃ¤ varten.",
                        continueMessage: "Jatka klikkaamalla"
                    }
                }],
                fr: [{
                    countries: [],
                    content: {
                        continueMessage: "Cliquer pour continuer",
                        windowMessage: "Vous ne voyez pas le navigateur sÃ©curisÃ© PayPalÂ ? Nous allons vous aider Ã  relancer la fenÃªtre pour effectuer votre don."
                    }
                }, {
                    countries: ["CA"],
                    content: {
                        continueMessage: "Cliquer pour continuer",
                        windowMessage: "Vous ne voyez pas le navigateur PayPal sÃ©curisÃ©Â ? Nous vous aiderons Ã  relancer la fenÃªtre pour effectuer votre don."
                    }
                }],
                he: [{
                    countries: [],
                    content: {
                        windowMessage: "××™× ×š ×¨×•××” ××ª ×“×¤×“×¤×Ÿ PayPal ×”×ž××•×‘×˜×—? ×× ×• × ×¢×–×•×¨ ×œ×š ×œ×¤×ª×•×— ×ž×—×“×© ××ª ×”×—×œ×•×Ÿ ×›×“×™ ×œ×”×©×œ×™× ××ª ×”×ª×¨×•×ž×” ×©×œ×š.",
                        continueMessage: "×™×© ×œ×œ×—×•×¥ ×›×“×™ ×œ×”×ž×©×™×š"
                    }
                }],
                hu: [{
                    countries: [],
                    content: {
                        windowMessage: "Nem lÃ¡tja a biztonsÃ¡gos PayPal-bÃ¶ngÃ©szÅ‘t? SegÃ­tÃ¼nk Ãºjra betÃ¶lteni az ablakot, hogy befejezhesse az adomÃ¡nyozÃ¡st.",
                        continueMessage: "A folytatÃ¡shoz kattintson ide"
                    }
                }],
                id: [{
                    countries: [],
                    content: {
                        windowMessage: "Peramban PayPal yang aman tidak terlihat? Kami akan membantu menampilkan ulang jendelanya untuk menyelesaikan donasi Anda.",
                        continueMessage: "Klik untuk Melanjutkan"
                    }
                }],
                it: [{
                    countries: [],
                    content: {
                        windowMessage: "Non vedi il browser sicuro di PayPal? Ti aiuteremo a riavviare la pagina per completare la donazione.",
                        continueMessage: "Clicca per continuare"
                    }
                }],
                ja: [{
                    countries: [],
                    content: {
                        windowMessage: "ã‚»ã‚­ãƒ¥ã‚¢ãªPayPalãƒ–ãƒ©ã‚¦ã‚¶ãŒè¡¨ç¤ºã•ã‚Œãªã„å ´åˆã¯ã€ã‚¦ã‚£ãƒ³ãƒ‰ã‚¦ã‚’å†èµ·å‹•ã—ã¦ã€å¯„ä»˜ã‚’å®Œäº†ã§ãã‚‹ã‚ˆã†ãŠæ‰‹ä¼ã„ã„ãŸã—ã¾ã™ã€‚",
                        continueMessage: "ã‚¯ãƒªãƒƒã‚¯ã—ã¦ç¶šè¡Œ"
                    }
                }],
                ko: [{
                    countries: [],
                    content: {
                        windowMessage: "ë³´ì•ˆ PayPal ë¸Œë¼ìš°ì €ê°€ ë³´ì´ì§€ ì•Šìœ¼ì„¸ìš”? ì°½ì„ ë‹¤ì‹œ ì‹¤í–‰í•˜ì—¬ ê¸°ë¶€ë¥¼ ì™„ë£Œí•  ìˆ˜ ìžˆë„ë¡ ë„ì™€ë“œë¦¬ê² ìŠµë‹ˆë‹¤.",
                        continueMessage: "í´ë¦­í•˜ì—¬ ê³„ì†"
                    }
                }],
                lt: [{
                    countries: [],
                    content: {
                        continueMessage: "Spauskite, jei norite tÄ™sti",
                        windowMessage: "Nematote saugios â€žPayPalâ€œ narÅ¡yklÄ—s? PadÄ—sime iÅ¡ naujo paleisti langÄ…, kad uÅ¾baigtumÄ—te aukojimo veiksmÄ…."
                    }
                }],
                lv: [{
                    countries: [],
                    content: {
                        continueMessage: "NoklikÅ¡Ä·iniet, lai turpinÄtu",
                        windowMessage: "Vai neredzat droÅ¡o PayPal pÄrlÅ«kprogrammu? MÄ“s palÄ«dzÄ“sim jums atkÄrtoti palaist logu, lai pabeigtu pirkumu."
                    }
                }],
                ms: [{
                    countries: [],
                    content: {
                        continueMessage: "Klik untuk Meneruskan",
                        windowMessage: "Tidak melihat pelayar PayPal selamat? Kami akan membantu anda melancarkan semula tetingkap untuk melengkapkan derma anda."
                    }
                }],
                no: [{
                    countries: [],
                    content: {
                        windowMessage: "Ser du ikke den sikre PayPal-nettleseren? Vi Ã¥pner vinduet pÃ¥ nytt sÃ¥ du kan fullfÃ¸re donasjonen.",
                        continueMessage: "Klikk for Ã¥ fortsette"
                    }
                }],
                nl: [{
                    countries: [],
                    content: {
                        windowMessage: "Zie je de beveiligde PayPal-browser niet? We helpen je het venster opnieuw te openen om je donatie te voltooien.",
                        continueMessage: "Klik op Doorgaan"
                    }
                }],
                pl: [{
                    countries: [],
                    content: {
                        windowMessage: "Nie widzisz bezpiecznej przeglÄ…darki PayPal? PomoÅ¼emy Ci ponownie otworzyÄ‡ to okno, aby dokoÅ„czyÄ‡ przekazywanie darowizny.",
                        continueMessage: "Kliknij, aby kontynuowaÄ‡"
                    }
                }],
                pt: [{
                    countries: [],
                    content: {
                        windowMessage: "NÃ£o vÃª a indicaÃ§Ã£o de navegador seguro PayPal? Vamos ajudar a reabrir a janela para poder concluir o seu donativo.",
                        continueMessage: "Clicar para continuar"
                    }
                }, {
                    countries: ["BR"],
                    content: {
                        continueMessage: "Clique para Continuar",
                        windowMessage: "NÃ£o estÃ¡ vendo o navegador seguro do PayPal? Ajudaremos vocÃª a abrir a janela novamente para concluir a doaÃ§Ã£o."
                    }
                }],
                ro: [{
                    countries: [],
                    content: {
                        windowMessage: "Nu vezi browser-ul securizat PayPal? Te vom ajuta sÄƒ lansezi din nou fereastra pentru a finaliza donaÈ›ia.",
                        continueMessage: "DÄƒ clic pentru a continua"
                    }
                }],
                ru: [{
                    countries: [],
                    content: {
                        windowMessage: "ÐÐµ Ð¾Ñ‚Ð¾Ð±Ñ€Ð°Ð¶Ð°ÐµÑ‚ÑÑ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð°Ñ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð° PayPal Ð² Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€Ðµ? ÐœÑ‹ Ð¿Ð¾Ð¼Ð¾Ð¶ÐµÐ¼ Ð²Ð°Ð¼ Ð¿Ð¾Ð²Ñ‚Ð¾Ñ€Ð½Ð¾ Ð·Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚ÑŒ Ð¾ÐºÐ½Ð¾, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ÑŒ Ð²Ð°ÑˆÐµ Ð¿Ð¾Ð¶ÐµÑ€Ñ‚Ð²Ð¾Ð²Ð°Ð½Ð¸Ðµ.",
                        continueMessage: "ÐÐ°Ð¶Ð¼Ð¸Ñ‚Ðµ ÑÑŽÐ´Ð°, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¿Ñ€Ð¾Ð´Ð¾Ð»Ð¶Ð¸Ñ‚ÑŒ"
                    }
                }],
                sk: [{
                    countries: [],
                    content: {
                        windowMessage: "Nezobrazuje sa vÃ¡m zabezpeÄenÃ½ prehliadaÄ PayPal? PomÃ´Å¾eme vÃ¡m znova otvoriÅ¥ okno, aby ste mohli dokonÄiÅ¥ prÃ­spevok.",
                        continueMessage: "PokraÄujte kliknutÃ­m"
                    }
                }],
                sl: [{
                    countries: [],
                    content: {
                        continueMessage: "Kliknite za nadaljevanje",
                        windowMessage: "Ne vidite PayPalovega varnega brskalnika? Pomagali vam bomo znova zagnati okno za dokonÄanje donacije."
                    }
                }],
                sv: [{
                    countries: [],
                    content: {
                        windowMessage: "Ser du inte den sÃ¤kra PayPal-webblÃ¤saren? Vi hjÃ¤lper dig att starta om fÃ¶nstret fÃ¶r att slutfÃ¶ra din donation.",
                        continueMessage: "Klicka fÃ¶r att fortsÃ¤tta"
                    }
                }],
                th: [{
                    countries: [],
                    content: {
                        windowMessage: "à¸–à¹‰à¸²à¸„à¸¸à¸“à¹„à¸¡à¹ˆà¹€à¸«à¹‡à¸™à¹€à¸šà¸£à¸²à¸§à¹Œà¹€à¸‹à¸­à¸£à¹Œà¸—à¸µà¹ˆà¸¡à¸µà¸£à¸°à¸šà¸šà¸„à¸§à¸²à¸¡à¸›à¸¥à¸­à¸”à¸ à¸±à¸¢à¸‚à¸­à¸‡ PayPal à¹€à¸£à¸²à¸ˆà¸°à¸Šà¹ˆà¸§à¸¢à¸„à¸¸à¸“à¹€à¸›à¸´à¸”à¸«à¸™à¹‰à¸²à¸•à¹ˆà¸²à¸‡à¸­à¸µà¸à¸„à¸£à¸±à¹‰à¸‡à¹€à¸žà¸·à¹ˆà¸­à¸šà¸£à¸ˆà¸²à¸„à¹€à¸‡à¸´à¸™à¹ƒà¸«à¹‰à¹€à¸£à¸µà¸¢à¸šà¸£à¹‰à¸­à¸¢",
                        continueMessage: "à¸„à¸¥à¸´à¸à¹€à¸žà¸·à¹ˆà¸­à¸”à¸³à¹€à¸™à¸´à¸™à¸à¸²à¸£à¸•à¹ˆà¸­"
                    }
                }],
                tl: [{
                    countries: [],
                    content: {
                        continueMessage: "I-click para Magpatuloy",
                        windowMessage: "Hindi nakikita ang secure na PayPal browser? Tutulungan ka naming i-launch ulit ang window para makumpleto ang donasyon mo."
                    }
                }],
                vi: [{
                    countries: [],
                    content: {
                        windowMessage: "Báº¡n khÃ´ng tháº¥y trÃ¬nh duyá»‡t PayPal báº£o máº­t? ChÃºng tÃ´i sáº½ giÃºp báº¡n má»Ÿ láº¡i cá»­a sá»• Ä‘á»ƒ hoÃ n táº¥t khoaÌ‰n quyÃªn goÌp cuÌ‰a baÌ£n.",
                        continueMessage: "Nháº¥p vÃ o Ä‘á»ƒ tiáº¿p tá»¥c"
                    }
                }],
                zh: [{
                    countries: [],
                    content: {
                        windowMessage: "æ²¡æœ‰æ‰¾åˆ°PayPalå®‰å…¨æµè§ˆå™¨ï¼Ÿæˆ‘ä»¬å°†å¸®åŠ©æ‚¨é‡å¯çª—å£ä»¥å®Œæˆææ¬¾ã€‚",
                        continueMessage: "ç‚¹å‡»ä»¥ç»§ç»­"
                    }
                }, {
                    countries: ["C2"],
                    content: {
                        continueMessage: "ç‚¹å‡»ä»¥ç»§ç»­",
                        windowMessage: "æ²¡æœ‰æ‰¾åˆ°å®‰å…¨çš„PayPalæµè§ˆå™¨ï¼Ÿæˆ‘ä»¬å°†å¸®åŠ©æ‚¨é‡å¯çª—å£ä»¥å®Œæˆææ¬¾ã€‚"
                    }
                }, {
                    countries: ["HK"],
                    content: {
                        continueMessage: "æŒ‰ä¸€ä¸‹ç¹¼çºŒ",
                        windowMessage: "çœ‹ä¸åˆ°å®‰å…¨çš„ PayPal ç€è¦½å™¨è¦–çª—ï¼Ÿæˆ‘å€‘æœƒåŠ©ä½ é‡æ–°é–‹å•Ÿè¦–çª—ä»¥å®Œæˆææ¬¾ã€‚"
                    }
                }, {
                    countries: ["TW"],
                    content: {
                        continueMessage: "æŒ‰ä¸€ä¸‹ä¸¦ç¹¼çºŒ",
                        windowMessage: "çœ‹ä¸åˆ°å®‰å…¨é€£ç·šçš„ PayPal ç€è¦½å™¨ï¼Ÿæˆ‘å€‘å°‡å”åŠ©é‡æ–°å•Ÿå‹•è¦–çª—ä»¥å®Œæˆä½ çš„ææ¬¾ã€‚"
                    }
                }]
            },
            Mt = t(14);

        function Lt(n) {
            n && (n.popupOpened = void 0)
        }

        function Wt(n) {
            return n && n.popupOpened
        }

        function Ht() {
            var n = kt.getRedirectionUrl();
            if (Lt(kt), document.documentMode) window.location.href = n;
            else try {
                var e = kt.originalRenderTo.apply(null, arguments);
                if (e.then((function(n, e) {
                        console.log("Popup opened successfully and Donate has fully loaded.")
                    })), e && e.error && "PopupOpenError" === e.error.name) return console.log("zalgoPromise.error ", e.error), void(window.location.href = n);
                if (e && e.error && e.error.name) return console.log("zalgoPromise.error ", e.error), void(window.location.href = n);
                setTimeout((function() {
                    Wt(kt) || (window.location.href = n)
                }), 500)
            } catch (n) {
                console.log("error ", n)
            }
        }
        var Ut = function() {
            return It || (It = En({
                    tag: "donate-checkout",
                    url: function(n) {
                        var e = n.props;
                        return Object(Mt.getZoidUrl)(e, "/donate/")
                    },
                    defaultContext: Object(o.supportsPopups)() ? Q.POPUP : Q.IFRAME,
                    logger: Object(r.getLogger)(),
                    prerenderTemplate: function(n) {
                        var e, t = n.doc,
                            r = n.props;
                        return (e = kt) && (e.popupOpened = !0), An(xt, {
                            nonce: r.nonce
                        }).render(Mn({
                            doc: t
                        }))
                    },
                    dimensions: Object(o.isDevice)() ? {
                        width: "100%",
                        height: "760px"
                    } : {
                        width: "612px",
                        height: "760px"
                    },
                    props: {
                        env: {
                            type: "string",
                            required: !1
                        },
                        baseUrl: {
                            type: "string",
                            required: !1
                        },
                        sdkMeta: {
                            type: "string",
                            queryParam: !0,
                            value: r.getSDKMeta
                        },
                        getPopupBridge: {
                            type: "function",
                            required: !1,
                            value: function() {
                                return function() {
                                    if (window.popupBridge) return {
                                        nativeUrl: window.popupBridge.getReturnUrlPrefix(),
                                        start: function(n) {
                                            return new u.a((function(e, t) {
                                                window.popupBridge.onComplete = function(n, r) {
                                                    return n ? t(n) : e(r.queryItems)
                                                }, window.popupBridge.open(n)
                                            }))
                                        }
                                    }
                                }
                            }
                        },
                        nonce: {
                            type: "string",
                            required: !1,
                            value: r.getCSPNonce
                        },
                        onComplete: {
                            type: "function",
                            required: !1
                        },
                        targetMeta: {
                            type: "string",
                            value: Mt.getTargetMeta,
                            queryParam: "targetMeta"
                        },
                        redirectParentWindow: {
                            type: "function",
                            required: !1,
                            value: function() {
                                return function(n) {
                                    window.parent.location.href = n
                                }
                            }
                        },
                        token: {
                            type: "string",
                            required: !1,
                            queryParam: "token"
                        },
                        business: {
                            type: "string",
                            required: !1,
                            queryParam: "business"
                        },
                        hosted_button_id: {
                            type: "string",
                            required: !1,
                            queryParam: "hosted_button_id"
                        },
                        amount: {
                            type: "string",
                            required: !1,
                            queryParam: "amount"
                        },
                        currency_code: {
                            type: "string",
                            required: !1,
                            queryParam: "currency_code"
                        },
                        no_recurring: {
                            type: "string",
                            required: !1,
                            queryParam: "no_recurring"
                        },
                        no_shipping: {
                            type: "string",
                            required: !1,
                            queryParam: "no_shipping"
                        },
                        no_note: {
                            type: "string",
                            required: !1,
                            queryParam: "no_note"
                        },
                        cn: {
                            type: "string",
                            required: !1,
                            queryParam: "cn"
                        },
                        item_name: {
                            type: "string",
                            required: !1,
                            queryParam: "item_name"
                        },
                        item_number: {
                            type: "string",
                            required: !1,
                            queryParam: "item_number"
                        },
                        cancel_return: {
                            type: "string",
                            required: !1,
                            queryParam: "cancel_return"
                        },
                        notify_url: {
                            type: "string",
                            required: !1,
                            queryParam: "notify_url"
                        },
                        return: {
                            type: "string",
                            required: !1,
                            queryParam: "return"
                        },
                        cpp_header_image: {
                            type: "string",
                            required: !1,
                            queryParam: "cpp_header_image"
                        },
                        image_url: {
                            type: "string",
                            required: !1,
                            queryParam: "image_url"
                        },
                        invoice: {
                            type: "string",
                            required: !1,
                            queryParam: "invoice"
                        },
                        custom: {
                            type: "string",
                            required: !1,
                            queryParam: "custom"
                        },
                        rm: {
                            type: "string",
                            required: !1,
                            queryParam: "rm"
                        },
                        night_phone_a: {
                            type: "string",
                            required: !1,
                            queryParam: "night_phone_a"
                        },
                        night_phone_b: {
                            type: "string",
                            required: !1,
                            queryParam: "night_phone_b"
                        },
                        night_phone_c: {
                            type: "string",
                            required: !1,
                            queryParam: "night_phone_c"
                        },
                        first_name: {
                            type: "string",
                            required: !1,
                            queryParam: "first_name"
                        },
                        last_name: {
                            type: "string",
                            required: !1,
                            queryParam: "last_name"
                        },
                        email: {
                            type: "string",
                            required: !1,
                            queryParam: "email"
                        },
                        address1: {
                            type: "string",
                            required: !1,
                            queryParam: "address1"
                        },
                        address2: {
                            type: "string",
                            required: !1,
                            queryParam: "address2"
                        },
                        city: {
                            type: "string",
                            required: !1,
                            queryParam: "city"
                        },
                        state: {
                            type: "string",
                            required: !1,
                            queryParam: "state"
                        },
                        zip: {
                            type: "string",
                            required: !1,
                            queryParam: "zip"
                        },
                        country: {
                            type: "string",
                            required: !1,
                            queryParam: "country"
                        },
                        button_source: {
                            type: "string",
                            required: !1,
                            queryParam: "button_source"
                        },
                        bn: {
                            type: "string",
                            required: !1,
                            queryParam: "bn"
                        },
                        on0: {
                            type: "string",
                            required: !1,
                            queryParam: "on0"
                        },
                        os0: {
                            type: "string",
                            required: !1,
                            queryParam: "os0"
                        },
                        on1: {
                            type: "string",
                            required: !1,
                            queryParam: "on1"
                        },
                        os1: {
                            type: "string",
                            required: !1,
                            queryParam: "os1"
                        }
                    },
                    containerTemplate: function(n) {
                        var e = n.context,
                            t = n.close,
                            r = n.focus,
                            o = n.doc,
                            i = n.event,
                            a = n.frame,
                            u = n.prerenderFrame,
                            c = navigator && navigator.language || "",
                            s = c.split("-")[1] || "US";
                        s = s.toUpperCase();
                        var d = c.split("-")[0] || "en",
                            f = function(n, e) {
                                for (var t = Dt[e] || Dt.en, r = 1; r < t.length; r++)
                                    if (t[r].countries.indexOf(n) >= 0) return t[r].content;
                                return t[0].content
                            }(s, d = d.toLowerCase());
                        return An("div", {
                            className: "popup-overlay-checkout"
                        }, An(Rt, {
                            context: e,
                            close: t,
                            focus: r,
                            event: i,
                            frame: a,
                            prerenderFrame: u,
                            content: f
                        })).render(Mn({
                            doc: o
                        }))
                    }
                }))(),
                function(n) {
                    return (kt = It(n)).getRedirectionUrl = Object(Mt.getRedirectionUrl)(n), kt.originalRenderTo = kt.renderTo, kt.renderTo = Ht, kt.showCheckout = Ht, kt.event.on("zoid-destroy", (function() {
                        console.log("zoid-destroy: EVENT_RECEIVED ")
                    })), kt.event.on("zoid-close", (function() {
                        console.log("zoid-close: EVENT_RECEIVED ")
                    })), kt
                }
        };
        window.PayPal = window.PayPal || {}, window.PayPal.Donation = window.PayPal.Donation || {}, window.PayPal.Donation.Checkout = Ut(), window.Donation = window.Donation || {}, window.Donation.Checkout = Ut();
        var zt = t(17),
            Bt = function(n) {
                return function(n) {
                    return {
                        init: function() {
                            return {
                                render: function(e) {
                                    var t, r, o, a, u, c = document.querySelector(e);
                                    if (c) {
                                        var s = (null == n || null == (t = n.image) ? void 0 : t.src) || "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",
                                            d = (null == n || null == (r = n.image) ? void 0 : r.title) || "",
                                            f = (null == n || null == (o = n.image) ? void 0 : o.alt) || "",
                                            l = (null == n || null == (a = n.image) ? void 0 : a.height) || "",
                                            p = (null == n || null == (u = n.image) ? void 0 : u.width) || "",
                                            h = "";
                                        l && (h = "height:" + l + ";"), p && (h += "width:" + p + ";");
                                        var w = document.createElement("IMG");
                                        w.setAttribute("src", s), w.setAttribute("id", "donate-button"), w.setAttribute("style", "cursor: pointer;" + h), w.setAttribute("title", d), w.setAttribute("alt", f);
                                        var m = function() {
                                            var e = {};
                                            for (var t in n) zt.allowedButtonParams.includes(t) && (e[t] = n[t].toString());
                                            return e
                                        }();
                                        w.addEventListener("click", (function(e) {
                                            PayPal.Donation.Checkout(Object(i.a)({
                                                env: n.env,
                                                baseUrl: n.baseUrl,
                                                token: n.token,
                                                onComplete: n.onComplete
                                            }, m)).renderTo(window.parent)
                                        })), c.appendChild(w)
                                    } else console.log("Donate Button Container not found for ", e)
                                }
                            }
                        }
                    }
                }(n).init()
            };

        function qt(n) {
            var e = n.onRenderCheckout;
            return An("html", null, An("body", {
                style: "margin: 0;"
            }, An("div", null, An("input", {
                onClick: function() {
                    if (Object(o.supportsPopups)()) {
                        var n = Object(a.c)(Object(o.popup)("", {
                                width: "200px",
                                height: "100px"
                            })),
                            t = window.document,
                            r = An("div", null, "PrerenderedDonateButton: This is from handleClick. TODO: Show SpinnerPage component").render(Mn({
                                doc: t
                            }));
                        Object(o.writeElementToWindow)(n, r), e({
                            win: n
                        })
                    } else e({})
                },
                id: "donate-button",
                type: "image",
                src: "https://www.paypal.com/en_US/i/btn/btn_donateCC_LG.gif"
            }))))
        }
        var Zt = En({
                tag: "donate-button",
                url: function(n) {
                    var e = n.props;
                    if (e.baseUrl) return e.baseUrl + "/donate/smart/buttons";
                    var t = Object(r.getPayPalDomain)() + "/donate/smart/buttons";
                    return console.log("donateButtonUrl ", t), t
                },
                getPageUrl: {
                    type: "function",
                    value: function() {
                        return function() {
                            return window.location.href
                        }
                    }
                },
                dimensions: {
                    width: "150px",
                    height: "50px"
                },
                autoResize: {
                    width: !1,
                    height: !0
                },
                logger: Object(r.getLogger)(),
                prerenderTemplate: function(n) {
                    var e = n.state,
                        t = n.props,
                        r = n.doc;
                    return An(qt, {
                        nonce: t.nonce,
                        props: t,
                        onRenderCheckout: function(n) {
                            e.prerenderDetails = {
                                win: n.win
                            }
                        }
                    }).render(Mn({
                        doc: r
                    }))
                },
                props: {
                    sdkMeta: {
                        type: "string",
                        queryParam: !0,
                        value: r.getSDKMeta
                    },
                    getPopupBridge: {
                        type: "function",
                        required: !1,
                        value: function() {
                            return function() {
                                if (window.popupBridge) return {
                                    nativeUrl: window.popupBridge.getReturnUrlPrefix(),
                                    start: function(n) {
                                        return new u.a((function(e, t) {
                                            window.popupBridge.onComplete = function(n, r) {
                                                return n ? t(n) : e(r.queryItems)
                                            }, window.popupBridge.open(n)
                                        }))
                                    }
                                }
                            }
                        }
                    },
                    onComplete: {
                        type: "function",
                        required: !1
                    },
                    env: {
                        type: "string",
                        required: !1
                    },
                    baseUrl: {
                        type: "string",
                        required: !1
                    },
                    targetMeta: {
                        type: "string",
                        value: Mt.getTargetMeta,
                        queryParam: "targetMeta"
                    },
                    hostedButtonId: {
                        type: "string",
                        required: !1,
                        queryParam: "hosted_button_id"
                    },
                    token: {
                        type: "string",
                        required: !1,
                        queryParam: "token"
                    }
                }
            }),
            Kt = function() {
                return function(n) {
                    return console.log("DonateButtonManager props ", n), n.type && "remote" === n.type ? Zt.apply(this, arguments) : Bt.apply(this, arguments)
                }
            };
        window.PayPal = window.PayPal || {}, window.PayPal.Donation = window.PayPal.Donation || {}, window.PayPal.Donation.Button = Kt(), window.Donation = window.Donation || {}, window.Donation.Button = Kt();
        var Gt = Ut(),
            Vt = Kt()
    }])
}));