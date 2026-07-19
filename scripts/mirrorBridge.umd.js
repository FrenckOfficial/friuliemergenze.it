"use strict";
var IframeBridge = (() => {
  var f = Object.defineProperty;
  var B = Object.getOwnPropertyDescriptor;
  var D = Object.getOwnPropertyNames,
    E = Object.getOwnPropertySymbols;
  var L = Object.prototype.hasOwnProperty,
    F = Object.prototype.propertyIsEnumerable;
  var S = (e, t, n) =>
      t in e
        ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (e[t] = n),
    l = (e, t) => {
      for (var n in t || (t = {})) L.call(t, n) && S(e, n, t[n]);
      if (E) for (var n of E(t)) F.call(t, n) && S(e, n, t[n]);
      return e;
    };
  var _ = (e, t) => {
      for (var n in t) f(e, n, { get: t[n], enumerable: !0 });
    },
    C = (e, t, n, i) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let r of D(t))
          !L.call(e, r) &&
            r !== n &&
            f(e, r, {
              get: () => t[r],
              enumerable: !(i = B(t, r)) || i.enumerable,
            });
      return e;
    };
  var P = (e) => C(f({}, "__esModule", { value: !0 }), e);
  var ce = {};
  _(ce, { iFrameSetup: () => W });
  var H = () => typeof window < "u",
    q = () => window.self !== window.top,
    I = (e) => e instanceof HTMLIFrameElement,
    $ = (e) => {
      window.document.readyState === "complete"
        ? e()
        : window.addEventListener("load", e);
    },
    U = (e, t) => {
      (t(), e.addEventListener("load", t));
    },
    V = (e, t) => {
      var n, i;
      let r =
        ((n = e.contentWindow) == null ? void 0 : n.document.readyState) ===
        "complete";
      return e.src !== "about:blank" &&
        ((i = e.contentWindow) == null ? void 0 : i.location.href) !==
          "about:blank" &&
        r
        ? t()
        : e.addEventListener("load", t);
    },
    G = () => ({ offsetSize: 0, checkOrigin: !0, enableLegacyLibSupport: !1 }),
    N = (e) => {
      try {
        return new URL(e.src).origin === window.location.origin;
      } catch (t) {
        return !1;
      }
    },
    j = (e) => {
      try {
        let t = new URL(e.src).origin;
        if (t !== "about:blank") return t;
      } catch (t) {}
      return null;
    },
    K = (e) => (
      Object.keys(e).forEach((t) => e[t] === void 0 && delete e[t]),
      e
    ),
    R = (e) => {
      let { height: t, width: n } = e.getBoundingClientRect();
      return { height: Math.ceil(t), width: Math.ceil(n) };
    },
    w = (e, t) => (e ? (t ? e.querySelector(t) : e.documentElement) : null),
    T = (e, t) => {
      e &&
        (t.bodyPadding && (e.body.style.padding = t.bodyPadding),
        t.bodyMargin && (e.body.style.margin = t.bodyMargin));
    },
    h = (e) => (e <= 100 ? 100 : e <= 120 ? 1e3 : 1e4),
    Q = () =>
      "[iFrameSizer]ID:0:false:false:32:true:true::auto:::0:false:child:auto:true:::true:::false";
  function X(e) {
    if (
      typeof e.data != "string" ||
      !e.data.startsWith("[iFrameSizer]") ||
      (!e.data.endsWith("mutationObserver") &&
        !e.data.endsWith("resizeObserver"))
    )
      return null;
    let [t, n] = e.data.split(":"),
      i = +n;
    return i > 0 ? i : null;
  }
  var z = ie(),
    g = [],
    O = (e, t) => {
      if (!H()) return [];
      let n = l(l({}, G()), K(e != null ? e : {})),
        i = Y(t),
        r = J(n, i);
      return i.map((a) => {
        let o = {
            iframe: a,
            settings: n,
            interactionState: { isHovered: !1 },
            initContext: { isInitialized: !1, retryAttempts: 0 },
          },
          s = Z(o, r);
        return (
          g.push(o),
          {
            unsubscribe: () => {
              (s(), (g = g.filter((c) => c.iframe !== a)));
            },
          }
        );
      });
    };
  function Y(e) {
    return typeof e == "string"
      ? Array.from(document.querySelectorAll(e)).filter(I)
      : e
        ? I(e)
          ? [e]
          : []
        : Array.from(document.getElementsByTagName("iframe"));
  }
  function J(e, t) {
    if (Array.isArray(e.checkOrigin)) return e.checkOrigin;
    if (!e.checkOrigin) return [];
    let n = [];
    for (let i of t) {
      let r = j(i);
      r && n.push(r);
    }
    return n;
  }
  function Z(e, t) {
    let n = N(e.iframe) ? te(e) : ee(e, t),
      i = ne(e);
    return () => {
      (n(), i());
    };
  }
  function ee(e, t) {
    let {
        iframe: n,
        initContext: i,
        settings: {
          checkOrigin: r,
          enableLegacyLibSupport: a,
          targetElementSelector: o,
          bodyPadding: s,
          bodyMargin: c,
        },
      } = e,
      m = (d) => {
        var b;
        let A = !r || t.includes(d.origin);
        if (!(n.contentWindow !== d.source || !A)) {
          if (((b = d.data) == null ? void 0 : b.type) === "iframe-resized") {
            let { height: u } = d.data;
            u && y({ newHeight: u, registeredElement: e });
            return;
          }
          if (a) {
            let u = X(d);
            u !== null && y({ newHeight: u, registeredElement: e });
            return;
          }
        }
      };
    window.addEventListener("message", m);
    let x = a
        ? Q()
        : {
            type: "iframe-child-init",
            targetElementSelector: o,
            bodyPadding: s,
            bodyMargin: c,
          },
      v = () => {
        (U(n, () => {
          var d;
          return (d = n.contentWindow) == null ? void 0 : d.postMessage(x, "*");
        }),
          i.retryAttempts++,
          (i.retryTimeoutId = window.setTimeout(v, h(i.retryAttempts))));
      };
    return (v(), () => window.removeEventListener("message", m));
  }
  function te(e) {
    let { iframe: t, settings: n } = e,
      { targetElementSelector: i } = n,
      r = 0,
      a = () => {
        let o = w(t.contentDocument, i);
        if (!t.contentDocument || !o) return (r++, setTimeout(a, h(r)));
        (T(t.contentDocument, n), z().observe(o));
      };
    return (
      V(t, a),
      () => {
        let o = w(t.contentDocument, i);
        (o && z().unobserve(o), t.removeEventListener("load", a));
      }
    );
  }
  function ne({ iframe: e, interactionState: t }) {
    let n = () => {
        t.isHovered = !0;
      },
      i = () => {
        t.isHovered = !1;
      };
    return (
      e.addEventListener("mouseenter", n),
      e.addEventListener("mouseleave", i),
      () => {
        (e.removeEventListener("mouseenter", n),
          e.removeEventListener("mouseleave", i));
      }
    );
  }
  function ie() {
    let e = null;
    return () => {
      if (!e) {
        let t = ({ target: n }) => {
          let i = g.find(
            ({ iframe: c }) => c.contentDocument === n.ownerDocument,
          );
          if (!i) return;
          let { iframe: r, settings: a } = i,
            o = w(r.contentDocument, a.targetElementSelector);
          if (!o) return;
          let { height: s } = R(o);
          s && y({ newHeight: s, registeredElement: i });
        };
        e = new ResizeObserver((n) => n.forEach(t));
      }
      return e;
    };
  }
  function y({ registeredElement: e, newHeight: t }) {
    var n;
    let { iframe: i, settings: r, interactionState: a, initContext: o } = e;
    if (
      (o.isInitialized ||
        ((o.isInitialized = !0), clearTimeout(o.retryTimeoutId)),
      ((n = r.onBeforeIframeResize) == null
        ? void 0
        : n.call(r, { iframe: i, settings: l({}, r), observedHeight: t })) ===
        !1)
    )
      return;
    let s = i.getBoundingClientRect(),
      c = t + r.offsetSize;
    if (((i.style.height = `${c}px`), !r.onIframeResize)) return;
    let m = {
      iframe: i,
      settings: l({}, r),
      interactionState: l({}, a),
      previousRenderState: { rect: s },
      nextRenderState: { rect: i.getBoundingClientRect() },
    };
    r.onIframeResize(m);
  }
  var re = ae(),
    M = !1;
  oe();
  function oe() {
    !H() ||
      !q() ||
      window.addEventListener("message", (e) => {
        var t;
        ((t = e.data) == null ? void 0 : t.type) === "iframe-child-init" &&
          $(() => k(e));
      });
  }
  function k(e, t = 0) {
    let { targetElementSelector: n, bodyPadding: i, bodyMargin: r } = e.data,
      a = w(document, n);
    if (M || window.parent !== e.source) return;
    if (!a) return setTimeout(() => k(e, t + 1), h(t));
    T(document, { bodyMargin: r, bodyPadding: i });
    let o = re();
    (o.disconnect(), o.observe(a), (M = !0));
  }
  function ae() {
    let e = null;
    return () => (
      e ||
        (e = new ResizeObserver((t) => {
          if (!t[0].target) return;
          let { height: n, width: i } = R(t[0].target),
            r = { type: "iframe-resized", width: i, height: n };
          window.parent.postMessage(r, "*");
        })),
      e
    );
  }
  var p = new Map(),
    se = (e) => {
      let t = e.id;
      (O({ checkOrigin: !1 }, `#${t}`), p.set(t, e));
    },
    de = () => {
      window.__iframeBridgeHandlerInitialized ||
        (window.addEventListener("message", (e) => {
          var t;
          if (e.data && e.data.type === "get_viewport_info") {
            let n = null;
            for (let [i, r] of p.entries())
              if (r.contentWindow === e.source) {
                n = r;
                break;
              }
            if (
              (!n && p.size > 0 && (n = Array.from(p.values())[0] || null), n)
            ) {
              let i = n.getBoundingClientRect(),
                r = {
                  type: "viewport_info_response",
                  iframeTopInViewport: i.top,
                  iframeLeftInViewport: i.left,
                  viewportHeight: window.innerHeight,
                  viewportWidth: window.innerWidth,
                  scrollTop: window.scrollY,
                  scrollLeft: window.scrollX,
                  requestId: (t = e.data.data) == null ? void 0 : t.requestId,
                };
              e.source && e.source.postMessage(r, { targetOrigin: e.origin });
            }
          }
        }),
        (window.__iframeBridgeHandlerInitialized = !0));
    },
    W = (e) => {
      (e.id ||
        (e.id = `iframe-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`),
        de(),
        se(e));
    };
  typeof window != "undefined" && (window.iFrameSetup = W);
  return P(ce);
})();