function u_(e, t) {
  return (
    t.forEach(function (r) {
      r &&
        typeof r != "string" &&
        !Array.isArray(r) &&
        Object.keys(r).forEach(function (n) {
          if (n !== "default" && !(n in e)) {
            var o = Object.getOwnPropertyDescriptor(r, n);
            Object.defineProperty(
              e,
              n,
              o.get
                ? o
                : {
                    enumerable: !0,
                    get: function () {
                      return r[n];
                    },
                  }
            );
          }
        });
    }),
    Object.freeze(
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
    )
  );
}
const c_ = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = r(o);
    fetch(o.href, i);
  }
};
c_();
var yl =
  typeof globalThis != "undefined"
    ? globalThis
    : typeof window != "undefined"
    ? window
    : typeof global != "undefined"
    ? global
    : typeof self != "undefined"
    ? self
    : {};
function f_(e) {
  if (e.__esModule) return e;
  var t = Object.defineProperty({}, "__esModule", { value: !0 });
  return (
    Object.keys(e).forEach(function (r) {
      var n = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        t,
        r,
        n.get
          ? n
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    t
  );
}
var Wd = {},
  Sc = { exports: {} },
  cr = {},
  v = { exports: {} },
  ve = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ks = Symbol.for("react.element"),
  d_ = Symbol.for("react.portal"),
  p_ = Symbol.for("react.fragment"),
  h_ = Symbol.for("react.strict_mode"),
  m_ = Symbol.for("react.profiler"),
  v_ = Symbol.for("react.provider"),
  g_ = Symbol.for("react.context"),
  y_ = Symbol.for("react.forward_ref"),
  w_ = Symbol.for("react.suspense"),
  x_ = Symbol.for("react.memo"),
  b_ = Symbol.for("react.lazy"),
  yg = Symbol.iterator;
function S_(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (yg && e[yg]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var rw = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  nw = Object.assign,
  ow = {};
function ca(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = ow),
    (this.updater = r || rw);
}
ca.prototype.isReactComponent = {};
ca.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ca.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function iw() {}
iw.prototype = ca.prototype;
function Dh(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = ow),
    (this.updater = r || rw);
}
var Fh = (Dh.prototype = new iw());
Fh.constructor = Dh;
nw(Fh, ca.prototype);
Fh.isPureReactComponent = !0;
var wg = Array.isArray,
  aw = Object.prototype.hasOwnProperty,
  Lh = { current: null },
  sw = { key: !0, ref: !0, __self: !0, __source: !0 };
function lw(e, t, r) {
  var n,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      aw.call(t, n) && !sw.hasOwnProperty(n) && (o[n] = t[n]);
  var s = arguments.length - 2;
  if (s === 1) o.children = r;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (n in ((s = e.defaultProps), s)) o[n] === void 0 && (o[n] = s[n]);
  return {
    $$typeof: Ks,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: Lh.current,
  };
}
function E_(e, t) {
  return {
    $$typeof: Ks,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Mh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ks;
}
function C_(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var xg = /\/+/g;
function Mf(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? C_("" + e.key)
    : t.toString(36);
}
function Gl(e, t, r, n, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ks:
          case d_:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = n === "" ? "." + Mf(a, 0) : n),
      wg(o)
        ? ((r = ""),
          e != null && (r = e.replace(xg, "$&/") + "/"),
          Gl(o, t, r, "", function (u) {
            return u;
          }))
        : o != null &&
          (Mh(o) &&
            (o = E_(
              o,
              r +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(xg, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (n = n === "" ? "." : n + ":"), wg(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = n + Mf(i, s);
      a += Gl(i, t, r, l, o);
    }
  else if (((l = S_(e)), typeof l == "function"))
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (l = n + Mf(i, s++)), (a += Gl(i, t, r, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function wl(e, t, r) {
  if (e == null) return e;
  var n = [],
    o = 0;
  return (
    Gl(e, n, "", "", function (i) {
      return t.call(r, i, o++);
    }),
    n
  );
}
function O_(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Lt = { current: null },
  Yl = { transition: null },
  __ = {
    ReactCurrentDispatcher: Lt,
    ReactCurrentBatchConfig: Yl,
    ReactCurrentOwner: Lh,
  };
ve.Children = {
  map: wl,
  forEach: function (e, t, r) {
    wl(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      wl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      wl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Mh(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ve.Component = ca;
ve.Fragment = p_;
ve.Profiler = m_;
ve.PureComponent = Dh;
ve.StrictMode = h_;
ve.Suspense = w_;
ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = __;
ve.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var n = nw({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Lh.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t)
      aw.call(t, l) &&
        !sw.hasOwnProperty(l) &&
        (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    n.children = s;
  }
  return { $$typeof: Ks, type: e.type, key: o, ref: i, props: n, _owner: a };
};
ve.createContext = function (e) {
  return (
    (e = {
      $$typeof: g_,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: v_, _context: e }),
    (e.Consumer = e)
  );
};
ve.createElement = lw;
ve.createFactory = function (e) {
  var t = lw.bind(null, e);
  return (t.type = e), t;
};
ve.createRef = function () {
  return { current: null };
};
ve.forwardRef = function (e) {
  return { $$typeof: y_, render: e };
};
ve.isValidElement = Mh;
ve.lazy = function (e) {
  return { $$typeof: b_, _payload: { _status: -1, _result: e }, _init: O_ };
};
ve.memo = function (e, t) {
  return { $$typeof: x_, type: e, compare: t === void 0 ? null : t };
};
ve.startTransition = function (e) {
  var t = Yl.transition;
  Yl.transition = {};
  try {
    e();
  } finally {
    Yl.transition = t;
  }
};
ve.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
ve.useCallback = function (e, t) {
  return Lt.current.useCallback(e, t);
};
ve.useContext = function (e) {
  return Lt.current.useContext(e);
};
ve.useDebugValue = function () {};
ve.useDeferredValue = function (e) {
  return Lt.current.useDeferredValue(e);
};
ve.useEffect = function (e, t) {
  return Lt.current.useEffect(e, t);
};
ve.useId = function () {
  return Lt.current.useId();
};
ve.useImperativeHandle = function (e, t, r) {
  return Lt.current.useImperativeHandle(e, t, r);
};
ve.useInsertionEffect = function (e, t) {
  return Lt.current.useInsertionEffect(e, t);
};
ve.useLayoutEffect = function (e, t) {
  return Lt.current.useLayoutEffect(e, t);
};
ve.useMemo = function (e, t) {
  return Lt.current.useMemo(e, t);
};
ve.useReducer = function (e, t, r) {
  return Lt.current.useReducer(e, t, r);
};
ve.useRef = function (e) {
  return Lt.current.useRef(e);
};
ve.useState = function (e) {
  return Lt.current.useState(e);
};
ve.useSyncExternalStore = function (e, t, r) {
  return Lt.current.useSyncExternalStore(e, t, r);
};
ve.useTransition = function () {
  return Lt.current.useTransition();
};
ve.version = "18.2.0";
v.exports = ve;
var be = v.exports,
  Kd = u_({ __proto__: null, default: be }, [v.exports]),
  uw = { exports: {} },
  cw = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, K) {
    var W = D.length;
    D.push(K);
    e: for (; 0 < W; ) {
      var oe = (W - 1) >>> 1,
        le = D[oe];
      if (0 < o(le, K)) (D[oe] = K), (D[W] = le), (W = oe);
      else break e;
    }
  }
  function r(D) {
    return D.length === 0 ? null : D[0];
  }
  function n(D) {
    if (D.length === 0) return null;
    var K = D[0],
      W = D.pop();
    if (W !== K) {
      D[0] = W;
      e: for (var oe = 0, le = D.length, _e = le >>> 1; oe < _e; ) {
        var Re = 2 * (oe + 1) - 1,
          ie = D[Re],
          ye = Re + 1,
          Se = D[ye];
        if (0 > o(ie, W))
          ye < le && 0 > o(Se, ie)
            ? ((D[oe] = Se), (D[ye] = W), (oe = ye))
            : ((D[oe] = ie), (D[Re] = W), (oe = Re));
        else if (ye < le && 0 > o(Se, W)) (D[oe] = Se), (D[ye] = W), (oe = ye);
        else break e;
      }
    }
    return K;
  }
  function o(D, K) {
    var W = D.sortIndex - K.sortIndex;
    return W !== 0 ? W : D.id - K.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    p = 3,
    h = !1,
    w = !1,
    m = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate != "undefined" ? setImmediate : null;
  typeof navigator != "undefined" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(D) {
    for (var K = r(u); K !== null; ) {
      if (K.callback === null) n(u);
      else if (K.startTime <= D)
        n(u), (K.sortIndex = K.expirationTime), t(l, K);
      else break;
      K = r(u);
    }
  }
  function S(D) {
    if (((m = !1), x(D), !w))
      if (r(l) !== null) (w = !0), ne(C);
      else {
        var K = r(u);
        K !== null && fe(S, K.startTime - D);
      }
  }
  function C(D, K) {
    (w = !1), m && ((m = !1), y(R), (R = -1)), (h = !0);
    var W = p;
    try {
      for (
        x(K), d = r(l);
        d !== null && (!(d.expirationTime > K) || (D && !F()));

      ) {
        var oe = d.callback;
        if (typeof oe == "function") {
          (d.callback = null), (p = d.priorityLevel);
          var le = oe(d.expirationTime <= K);
          (K = e.unstable_now()),
            typeof le == "function" ? (d.callback = le) : d === r(l) && n(l),
            x(K);
        } else n(l);
        d = r(l);
      }
      if (d !== null) var _e = !0;
      else {
        var Re = r(u);
        Re !== null && fe(S, Re.startTime - K), (_e = !1);
      }
      return _e;
    } finally {
      (d = null), (p = W), (h = !1);
    }
  }
  var $ = !1,
    P = null,
    R = -1,
    M = 5,
    L = -1;
  function F() {
    return !(e.unstable_now() - L < M);
  }
  function B() {
    if (P !== null) {
      var D = e.unstable_now();
      L = D;
      var K = !0;
      try {
        K = P(!0, D);
      } finally {
        K ? z() : (($ = !1), (P = null));
      }
    } else $ = !1;
  }
  var z;
  if (typeof g == "function")
    z = function () {
      g(B);
    };
  else if (typeof MessageChannel != "undefined") {
    var G = new MessageChannel(),
      X = G.port2;
    (G.port1.onmessage = B),
      (z = function () {
        X.postMessage(null);
      });
  } else
    z = function () {
      b(B, 0);
    };
  function ne(D) {
    (P = D), $ || (($ = !0), z());
  }
  function fe(D, K) {
    R = b(function () {
      D(e.unstable_now());
    }, K);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || h || ((w = !0), ne(C));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(l);
    }),
    (e.unstable_next = function (D) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = p;
      }
      var W = p;
      p = K;
      try {
        return D();
      } finally {
        p = W;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, K) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var W = p;
      p = D;
      try {
        return K();
      } finally {
        p = W;
      }
    }),
    (e.unstable_scheduleCallback = function (D, K, W) {
      var oe = e.unstable_now();
      switch (
        (typeof W == "object" && W !== null
          ? ((W = W.delay), (W = typeof W == "number" && 0 < W ? oe + W : oe))
          : (W = oe),
        D)
      ) {
        case 1:
          var le = -1;
          break;
        case 2:
          le = 250;
          break;
        case 5:
          le = 1073741823;
          break;
        case 4:
          le = 1e4;
          break;
        default:
          le = 5e3;
      }
      return (
        (le = W + le),
        (D = {
          id: c++,
          callback: K,
          priorityLevel: D,
          startTime: W,
          expirationTime: le,
          sortIndex: -1,
        }),
        W > oe
          ? ((D.sortIndex = W),
            t(u, D),
            r(l) === null &&
              D === r(u) &&
              (m ? (y(R), (R = -1)) : (m = !0), fe(S, W - oe)))
          : ((D.sortIndex = le), t(l, D), w || h || ((w = !0), ne(C))),
        D
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (D) {
      var K = p;
      return function () {
        var W = p;
        p = K;
        try {
          return D.apply(this, arguments);
        } finally {
          p = W;
        }
      };
    });
})(cw);
uw.exports = cw;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fw = v.exports,
  lr = uw.exports;
function j(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var dw = new Set(),
  gs = {};
function Yo(e, t) {
  Gi(e, t), Gi(e + "Capture", t);
}
function Gi(e, t) {
  for (gs[e] = t, e = 0; e < t.length; e++) dw.add(t[e]);
}
var bn = !(
    typeof window == "undefined" ||
    typeof window.document == "undefined" ||
    typeof window.document.createElement == "undefined"
  ),
  qd = Object.prototype.hasOwnProperty,
  $_ =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  bg = {},
  Sg = {};
function P_(e) {
  return qd.call(Sg, e)
    ? !0
    : qd.call(bg, e)
    ? !1
    : $_.test(e)
    ? (Sg[e] = !0)
    : ((bg[e] = !0), !1);
}
function N_(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function T_(e, t, r, n) {
  if (t === null || typeof t == "undefined" || N_(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Mt(e, t, r, n, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var St = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    St[e] = new Mt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  St[t] = new Mt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  St[e] = new Mt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  St[e] = new Mt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    St[e] = new Mt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  St[e] = new Mt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  St[e] = new Mt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  St[e] = new Mt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  St[e] = new Mt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ih = /[\-:]([a-z])/g;
function jh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ih, jh);
    St[t] = new Mt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ih, jh);
    St[t] = new Mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ih, jh);
  St[t] = new Mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  St[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
St.xlinkHref = new Mt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  St[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Uh(e, t, r, n) {
  var o = St.hasOwnProperty(t) ? St[t] : null;
  (o !== null
    ? o.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (T_(t, r, o, n) && (r = null),
    n || o === null
      ? P_(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : o.mustUseProperty
      ? (e[o.propertyName] = r === null ? (o.type === 3 ? !1 : "") : r)
      : ((t = o.attributeName),
        (n = o.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (r = o === 3 || (o === 4 && r === !0) ? "" : "" + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var Nn = fw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  xl = Symbol.for("react.element"),
  yi = Symbol.for("react.portal"),
  wi = Symbol.for("react.fragment"),
  Bh = Symbol.for("react.strict_mode"),
  Gd = Symbol.for("react.profiler"),
  pw = Symbol.for("react.provider"),
  hw = Symbol.for("react.context"),
  zh = Symbol.for("react.forward_ref"),
  Yd = Symbol.for("react.suspense"),
  Qd = Symbol.for("react.suspense_list"),
  Hh = Symbol.for("react.memo"),
  In = Symbol.for("react.lazy"),
  mw = Symbol.for("react.offscreen"),
  Eg = Symbol.iterator;
function Na(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Eg && e[Eg]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ye = Object.assign,
  If;
function Ya(e) {
  if (If === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      If = (t && t[1]) || "";
    }
  return (
    `
` +
    If +
    e
  );
}
var jf = !1;
function Uf(e, t) {
  if (!e || jf) return "";
  jf = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = n.stack.split(`
`),
          a = o.length - 1,
          s = i.length - 1;
        1 <= a && 0 <= s && o[a] !== i[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || o[a] !== i[s])) {
                var l =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (jf = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? Ya(e) : "";
}
function R_(e) {
  switch (e.tag) {
    case 5:
      return Ya(e.type);
    case 16:
      return Ya("Lazy");
    case 13:
      return Ya("Suspense");
    case 19:
      return Ya("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Uf(e.type, !1)), e;
    case 11:
      return (e = Uf(e.type.render, !1)), e;
    case 1:
      return (e = Uf(e.type, !0)), e;
    default:
      return "";
  }
}
function Xd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case wi:
      return "Fragment";
    case yi:
      return "Portal";
    case Gd:
      return "Profiler";
    case Bh:
      return "StrictMode";
    case Yd:
      return "Suspense";
    case Qd:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case hw:
        return (e.displayName || "Context") + ".Consumer";
      case pw:
        return (e._context.displayName || "Context") + ".Provider";
      case zh:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Hh:
        return (
          (t = e.displayName || null), t !== null ? t : Xd(e.type) || "Memo"
        );
      case In:
        (t = e._payload), (e = e._init);
        try {
          return Xd(e(t));
        } catch {}
    }
  return null;
}
function A_(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Xd(t);
    case 8:
      return t === Bh ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function io(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function vw(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function k_(e) {
  var t = vw(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r != "undefined" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var o = r.get,
      i = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (n = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (a) {
          n = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function bl(e) {
  e._valueTracker || (e._valueTracker = k_(e));
}
function gw(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = vw(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function $u(e) {
  if (
    ((e = e || (typeof document != "undefined" ? document : void 0)),
    typeof e == "undefined")
  )
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Jd(e, t) {
  var r = t.checked;
  return Ye({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r != null ? r : e._wrapperState.initialChecked,
  });
}
function Cg(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = io(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function yw(e, t) {
  (t = t.checked), t != null && Uh(e, "checked", t, !1);
}
function Zd(e, t) {
  yw(e, t);
  var r = io(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ep(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && ep(e, t.type, io(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Og(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function ep(e, t, r) {
  (t !== "number" || $u(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Qa = Array.isArray;
function Li(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
    for (r = 0; r < e.length; r++)
      (o = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== o && (e[r].selected = o),
        o && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + io(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        (e[o].selected = !0), n && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function tp(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return Ye({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function _g(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(j(92));
      if (Qa(r)) {
        if (1 < r.length) throw Error(j(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: io(r) };
}
function ww(e, t) {
  var r = io(t.value),
    n = io(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n);
}
function $g(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function xw(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function rp(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? xw(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Sl,
  bw = (function (e) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Sl = Sl || document.createElement("div"),
          Sl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Sl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ys(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ts = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  D_ = ["Webkit", "ms", "Moz", "O"];
Object.keys(ts).forEach(function (e) {
  D_.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ts[t] = ts[e]);
  });
});
function Sw(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (ts.hasOwnProperty(e) && ts[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ew(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        o = Sw(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : (e[r] = o);
    }
}
var F_ = Ye(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function np(e, t) {
  if (t) {
    if (F_[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function op(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ip = null;
function Vh(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ap = null,
  Mi = null,
  Ii = null;
function Pg(e) {
  if ((e = Ys(e))) {
    if (typeof ap != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = $c(t)), ap(e.stateNode, e.type, t));
  }
}
function Cw(e) {
  Mi ? (Ii ? Ii.push(e) : (Ii = [e])) : (Mi = e);
}
function Ow() {
  if (Mi) {
    var e = Mi,
      t = Ii;
    if (((Ii = Mi = null), Pg(e), t)) for (e = 0; e < t.length; e++) Pg(t[e]);
  }
}
function _w(e, t) {
  return e(t);
}
function $w() {}
var Bf = !1;
function Pw(e, t, r) {
  if (Bf) return e(t, r);
  Bf = !0;
  try {
    return _w(e, t, r);
  } finally {
    (Bf = !1), (Mi !== null || Ii !== null) && ($w(), Ow());
  }
}
function ws(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = $c(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(j(231, t, typeof r));
  return r;
}
var sp = !1;
if (bn)
  try {
    var Ta = {};
    Object.defineProperty(Ta, "passive", {
      get: function () {
        sp = !0;
      },
    }),
      window.addEventListener("test", Ta, Ta),
      window.removeEventListener("test", Ta, Ta);
  } catch {
    sp = !1;
  }
function L_(e, t, r, n, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var rs = !1,
  Pu = null,
  Nu = !1,
  lp = null,
  M_ = {
    onError: function (e) {
      (rs = !0), (Pu = e);
    },
  };
function I_(e, t, r, n, o, i, a, s, l) {
  (rs = !1), (Pu = null), L_.apply(M_, arguments);
}
function j_(e, t, r, n, o, i, a, s, l) {
  if ((I_.apply(this, arguments), rs)) {
    if (rs) {
      var u = Pu;
      (rs = !1), (Pu = null);
    } else throw Error(j(198));
    Nu || ((Nu = !0), (lp = u));
  }
}
function Qo(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function Nw(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ng(e) {
  if (Qo(e) !== e) throw Error(j(188));
}
function U_(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Qo(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var o = r.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((n = o.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === r) return Ng(o), e;
        if (i === n) return Ng(o), t;
        i = i.sibling;
      }
      throw Error(j(188));
    }
    if (r.return !== n.return) (r = o), (n = i);
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        if (s === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          if (s === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(j(189));
      }
    }
    if (r.alternate !== n) throw Error(j(190));
  }
  if (r.tag !== 3) throw Error(j(188));
  return r.stateNode.current === r ? e : t;
}
function Tw(e) {
  return (e = U_(e)), e !== null ? Rw(e) : null;
}
function Rw(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Rw(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Aw = lr.unstable_scheduleCallback,
  Tg = lr.unstable_cancelCallback,
  B_ = lr.unstable_shouldYield,
  z_ = lr.unstable_requestPaint,
  et = lr.unstable_now,
  H_ = lr.unstable_getCurrentPriorityLevel,
  Wh = lr.unstable_ImmediatePriority,
  kw = lr.unstable_UserBlockingPriority,
  Tu = lr.unstable_NormalPriority,
  V_ = lr.unstable_LowPriority,
  Dw = lr.unstable_IdlePriority,
  Ec = null,
  Qr = null;
function W_(e) {
  if (Qr && typeof Qr.onCommitFiberRoot == "function")
    try {
      Qr.onCommitFiberRoot(Ec, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ir = Math.clz32 ? Math.clz32 : G_,
  K_ = Math.log,
  q_ = Math.LN2;
function G_(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((K_(e) / q_) | 0)) | 0;
}
var El = 64,
  Cl = 4194304;
function Xa(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ru(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = r & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? (n = Xa(s)) : ((i &= a), i !== 0 && (n = Xa(i)));
  } else (a = r & ~o), a !== 0 ? (n = Xa(a)) : i !== 0 && (n = Xa(i));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    (t & o) === 0 &&
    ((o = n & -n), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if (((n & 4) !== 0 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - Ir(t)), (o = 1 << r), (n |= e[r]), (t &= ~o);
  return n;
}
function Y_(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Q_(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Ir(i),
      s = 1 << a,
      l = o[a];
    l === -1
      ? ((s & r) === 0 || (s & n) !== 0) && (o[a] = Y_(s, t))
      : l <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function up(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Fw() {
  var e = El;
  return (El <<= 1), (El & 4194240) === 0 && (El = 64), e;
}
function zf(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function qs(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ir(t)),
    (e[t] = r);
}
function X_(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - Ir(r),
      i = 1 << o;
    (t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~i);
  }
}
function Kh(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - Ir(r),
      o = 1 << n;
    (o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o);
  }
}
var Ne = 0;
function Lw(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var Mw,
  qh,
  Iw,
  jw,
  Uw,
  cp = !1,
  Ol = [],
  Yn = null,
  Qn = null,
  Xn = null,
  xs = new Map(),
  bs = new Map(),
  zn = [],
  J_ =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Rg(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Yn = null;
      break;
    case "dragenter":
    case "dragleave":
      Qn = null;
      break;
    case "mouseover":
    case "mouseout":
      Xn = null;
      break;
    case "pointerover":
    case "pointerout":
      xs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      bs.delete(t.pointerId);
  }
}
function Ra(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Ys(t)), t !== null && qh(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Z_(e, t, r, n, o) {
  switch (t) {
    case "focusin":
      return (Yn = Ra(Yn, e, t, r, n, o)), !0;
    case "dragenter":
      return (Qn = Ra(Qn, e, t, r, n, o)), !0;
    case "mouseover":
      return (Xn = Ra(Xn, e, t, r, n, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return xs.set(i, Ra(xs.get(i) || null, e, t, r, n, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), bs.set(i, Ra(bs.get(i) || null, e, t, r, n, o)), !0
      );
  }
  return !1;
}
function Bw(e) {
  var t = Po(e.target);
  if (t !== null) {
    var r = Qo(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = Nw(r)), t !== null)) {
          (e.blockedOn = t),
            Uw(e.priority, function () {
              Iw(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ql(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = fp(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (ip = n), r.target.dispatchEvent(n), (ip = null);
    } else return (t = Ys(r)), t !== null && qh(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function Ag(e, t, r) {
  Ql(e) && r.delete(t);
}
function e$() {
  (cp = !1),
    Yn !== null && Ql(Yn) && (Yn = null),
    Qn !== null && Ql(Qn) && (Qn = null),
    Xn !== null && Ql(Xn) && (Xn = null),
    xs.forEach(Ag),
    bs.forEach(Ag);
}
function Aa(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    cp ||
      ((cp = !0),
      lr.unstable_scheduleCallback(lr.unstable_NormalPriority, e$)));
}
function Ss(e) {
  function t(o) {
    return Aa(o, e);
  }
  if (0 < Ol.length) {
    Aa(Ol[0], e);
    for (var r = 1; r < Ol.length; r++) {
      var n = Ol[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    Yn !== null && Aa(Yn, e),
      Qn !== null && Aa(Qn, e),
      Xn !== null && Aa(Xn, e),
      xs.forEach(t),
      bs.forEach(t),
      r = 0;
    r < zn.length;
    r++
  )
    (n = zn[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < zn.length && ((r = zn[0]), r.blockedOn === null); )
    Bw(r), r.blockedOn === null && zn.shift();
}
var ji = Nn.ReactCurrentBatchConfig,
  Au = !0;
function t$(e, t, r, n) {
  var o = Ne,
    i = ji.transition;
  ji.transition = null;
  try {
    (Ne = 1), Gh(e, t, r, n);
  } finally {
    (Ne = o), (ji.transition = i);
  }
}
function r$(e, t, r, n) {
  var o = Ne,
    i = ji.transition;
  ji.transition = null;
  try {
    (Ne = 4), Gh(e, t, r, n);
  } finally {
    (Ne = o), (ji.transition = i);
  }
}
function Gh(e, t, r, n) {
  if (Au) {
    var o = fp(e, t, r, n);
    if (o === null) Jf(e, t, n, ku, r), Rg(e, n);
    else if (Z_(o, e, t, r, n)) n.stopPropagation();
    else if ((Rg(e, n), t & 4 && -1 < J_.indexOf(e))) {
      for (; o !== null; ) {
        var i = Ys(o);
        if (
          (i !== null && Mw(i),
          (i = fp(e, t, r, n)),
          i === null && Jf(e, t, n, ku, r),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && n.stopPropagation();
    } else Jf(e, t, n, null, r);
  }
}
var ku = null;
function fp(e, t, r, n) {
  if (((ku = null), (e = Vh(n)), (e = Po(e)), e !== null))
    if (((t = Qo(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = Nw(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ku = e), null;
}
function zw(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (H_()) {
        case Wh:
          return 1;
        case kw:
          return 4;
        case Tu:
        case V_:
          return 16;
        case Dw:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Kn = null,
  Yh = null,
  Xl = null;
function Hw() {
  if (Xl) return Xl;
  var e,
    t = Yh,
    r = t.length,
    n,
    o = "value" in Kn ? Kn.value : Kn.textContent,
    i = o.length;
  for (e = 0; e < r && t[e] === o[e]; e++);
  var a = r - e;
  for (n = 1; n <= a && t[r - n] === o[i - n]; n++);
  return (Xl = o.slice(e, 1 < n ? 1 - n : void 0));
}
function Jl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function _l() {
  return !0;
}
function kg() {
  return !1;
}
function fr(e) {
  function t(r, n, o, i, a) {
    (this._reactName = r),
      (this._targetInst = o),
      (this.type = n),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((r = e[s]), (this[s] = r ? r(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? _l
        : kg),
      (this.isPropagationStopped = kg),
      this
    );
  }
  return (
    Ye(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = _l));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = _l));
      },
      persist: function () {},
      isPersistent: _l,
    }),
    t
  );
}
var fa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Qh = fr(fa),
  Gs = Ye({}, fa, { view: 0, detail: 0 }),
  n$ = fr(Gs),
  Hf,
  Vf,
  ka,
  Cc = Ye({}, Gs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Xh,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ka &&
            (ka && e.type === "mousemove"
              ? ((Hf = e.screenX - ka.screenX), (Vf = e.screenY - ka.screenY))
              : (Vf = Hf = 0),
            (ka = e)),
          Hf);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Vf;
    },
  }),
  Dg = fr(Cc),
  o$ = Ye({}, Cc, { dataTransfer: 0 }),
  i$ = fr(o$),
  a$ = Ye({}, Gs, { relatedTarget: 0 }),
  Wf = fr(a$),
  s$ = Ye({}, fa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  l$ = fr(s$),
  u$ = Ye({}, fa, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  c$ = fr(u$),
  f$ = Ye({}, fa, { data: 0 }),
  Fg = fr(f$),
  d$ = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  p$ = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  h$ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function m$(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = h$[e]) ? !!t[e] : !1;
}
function Xh() {
  return m$;
}
var v$ = Ye({}, Gs, {
    key: function (e) {
      if (e.key) {
        var t = d$[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Jl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? p$[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Xh,
    charCode: function (e) {
      return e.type === "keypress" ? Jl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Jl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  g$ = fr(v$),
  y$ = Ye({}, Cc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Lg = fr(y$),
  w$ = Ye({}, Gs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Xh,
  }),
  x$ = fr(w$),
  b$ = Ye({}, fa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  S$ = fr(b$),
  E$ = Ye({}, Cc, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  C$ = fr(E$),
  O$ = [9, 13, 27, 32],
  Jh = bn && "CompositionEvent" in window,
  ns = null;
bn && "documentMode" in document && (ns = document.documentMode);
var _$ = bn && "TextEvent" in window && !ns,
  Vw = bn && (!Jh || (ns && 8 < ns && 11 >= ns)),
  Mg = String.fromCharCode(32),
  Ig = !1;
function Ww(e, t) {
  switch (e) {
    case "keyup":
      return O$.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Kw(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var xi = !1;
function $$(e, t) {
  switch (e) {
    case "compositionend":
      return Kw(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ig = !0), Mg);
    case "textInput":
      return (e = t.data), e === Mg && Ig ? null : e;
    default:
      return null;
  }
}
function P$(e, t) {
  if (xi)
    return e === "compositionend" || (!Jh && Ww(e, t))
      ? ((e = Hw()), (Xl = Yh = Kn = null), (xi = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Vw && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var N$ = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function jg(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!N$[e.type] : t === "textarea";
}
function qw(e, t, r, n) {
  Cw(n),
    (t = Du(t, "onChange")),
    0 < t.length &&
      ((r = new Qh("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t }));
}
var os = null,
  Es = null;
function T$(e) {
  ox(e, 0);
}
function Oc(e) {
  var t = Ei(e);
  if (gw(t)) return e;
}
function R$(e, t) {
  if (e === "change") return t;
}
var Gw = !1;
if (bn) {
  var Kf;
  if (bn) {
    var qf = "oninput" in document;
    if (!qf) {
      var Ug = document.createElement("div");
      Ug.setAttribute("oninput", "return;"),
        (qf = typeof Ug.oninput == "function");
    }
    Kf = qf;
  } else Kf = !1;
  Gw = Kf && (!document.documentMode || 9 < document.documentMode);
}
function Bg() {
  os && (os.detachEvent("onpropertychange", Yw), (Es = os = null));
}
function Yw(e) {
  if (e.propertyName === "value" && Oc(Es)) {
    var t = [];
    qw(t, Es, e, Vh(e)), Pw(T$, t);
  }
}
function A$(e, t, r) {
  e === "focusin"
    ? (Bg(), (os = t), (Es = r), os.attachEvent("onpropertychange", Yw))
    : e === "focusout" && Bg();
}
function k$(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Oc(Es);
}
function D$(e, t) {
  if (e === "click") return Oc(t);
}
function F$(e, t) {
  if (e === "input" || e === "change") return Oc(t);
}
function L$(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ur = typeof Object.is == "function" ? Object.is : L$;
function Cs(e, t) {
  if (Ur(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var o = r[n];
    if (!qd.call(t, o) || !Ur(e[o], t[o])) return !1;
  }
  return !0;
}
function zg(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Hg(e, t) {
  var r = zg(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = zg(r);
  }
}
function Qw(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Qw(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Xw() {
  for (var e = window, t = $u(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = $u(e.document);
  }
  return t;
}
function Zh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function M$(e) {
  var t = Xw(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    Qw(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && Zh(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = r.textContent.length,
          i = Math.min(n.start, o);
        (n = n.end === void 0 ? i : Math.min(n.end, o)),
          !e.extend && i > n && ((o = n), (n = i), (i = o)),
          (o = Hg(r, i));
        var a = Hg(r, n);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > n
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var I$ = bn && "documentMode" in document && 11 >= document.documentMode,
  bi = null,
  dp = null,
  is = null,
  pp = !1;
function Vg(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  pp ||
    bi == null ||
    bi !== $u(n) ||
    ((n = bi),
    "selectionStart" in n && Zh(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (is && Cs(is, n)) ||
      ((is = n),
      (n = Du(dp, "onSelect")),
      0 < n.length &&
        ((t = new Qh("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = bi))));
}
function $l(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var Si = {
    animationend: $l("Animation", "AnimationEnd"),
    animationiteration: $l("Animation", "AnimationIteration"),
    animationstart: $l("Animation", "AnimationStart"),
    transitionend: $l("Transition", "TransitionEnd"),
  },
  Gf = {},
  Jw = {};
bn &&
  ((Jw = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Si.animationend.animation,
    delete Si.animationiteration.animation,
    delete Si.animationstart.animation),
  "TransitionEvent" in window || delete Si.transitionend.transition);
function _c(e) {
  if (Gf[e]) return Gf[e];
  if (!Si[e]) return e;
  var t = Si[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in Jw) return (Gf[e] = t[r]);
  return e;
}
var Zw = _c("animationend"),
  ex = _c("animationiteration"),
  tx = _c("animationstart"),
  rx = _c("transitionend"),
  nx = new Map(),
  Wg =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function uo(e, t) {
  nx.set(e, t), Yo(t, [e]);
}
for (var Yf = 0; Yf < Wg.length; Yf++) {
  var Qf = Wg[Yf],
    j$ = Qf.toLowerCase(),
    U$ = Qf[0].toUpperCase() + Qf.slice(1);
  uo(j$, "on" + U$);
}
uo(Zw, "onAnimationEnd");
uo(ex, "onAnimationIteration");
uo(tx, "onAnimationStart");
uo("dblclick", "onDoubleClick");
uo("focusin", "onFocus");
uo("focusout", "onBlur");
uo(rx, "onTransitionEnd");
Gi("onMouseEnter", ["mouseout", "mouseover"]);
Gi("onMouseLeave", ["mouseout", "mouseover"]);
Gi("onPointerEnter", ["pointerout", "pointerover"]);
Gi("onPointerLeave", ["pointerout", "pointerover"]);
Yo(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Yo(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Yo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Yo(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Yo(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Yo(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ja =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  B$ = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ja));
function Kg(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), j_(n, t, void 0, e), (e.currentTarget = null);
}
function ox(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      o = n.event;
    n = n.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = n.length - 1; 0 <= a; a--) {
          var s = n[a],
            l = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), l !== i && o.isPropagationStopped())) break e;
          Kg(o, s, u), (i = l);
        }
      else
        for (a = 0; a < n.length; a++) {
          if (
            ((s = n[a]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Kg(o, s, u), (i = l);
        }
    }
  }
  if (Nu) throw ((e = lp), (Nu = !1), (lp = null), e);
}
function Me(e, t) {
  var r = t[yp];
  r === void 0 && (r = t[yp] = new Set());
  var n = e + "__bubble";
  r.has(n) || (ix(t, e, 2, !1), r.add(n));
}
function Xf(e, t, r) {
  var n = 0;
  t && (n |= 4), ix(r, e, n, t);
}
var Pl = "_reactListening" + Math.random().toString(36).slice(2);
function Os(e) {
  if (!e[Pl]) {
    (e[Pl] = !0),
      dw.forEach(function (r) {
        r !== "selectionchange" && (B$.has(r) || Xf(r, !1, e), Xf(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Pl] || ((t[Pl] = !0), Xf("selectionchange", !1, t));
  }
}
function ix(e, t, r, n) {
  switch (zw(t)) {
    case 1:
      var o = t$;
      break;
    case 4:
      o = r$;
      break;
    default:
      o = Gh;
  }
  (r = o.bind(null, t, r, e)),
    (o = void 0),
    !sp ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    n
      ? o !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: o })
        : e.addEventListener(t, r, !0)
      : o !== void 0
      ? e.addEventListener(t, r, { passive: o })
      : e.addEventListener(t, r, !1);
}
function Jf(e, t, r, n, o) {
  var i = n;
  if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
    e: for (;;) {
      if (n === null) return;
      var a = n.tag;
      if (a === 3 || a === 4) {
        var s = n.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (a === 4)
          for (a = n.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = Po(s)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            n = i = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      n = n.return;
    }
  Pw(function () {
    var u = i,
      c = Vh(r),
      d = [];
    e: {
      var p = nx.get(e);
      if (p !== void 0) {
        var h = Qh,
          w = e;
        switch (e) {
          case "keypress":
            if (Jl(r) === 0) break e;
          case "keydown":
          case "keyup":
            h = g$;
            break;
          case "focusin":
            (w = "focus"), (h = Wf);
            break;
          case "focusout":
            (w = "blur"), (h = Wf);
            break;
          case "beforeblur":
          case "afterblur":
            h = Wf;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Dg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = i$;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = x$;
            break;
          case Zw:
          case ex:
          case tx:
            h = l$;
            break;
          case rx:
            h = S$;
            break;
          case "scroll":
            h = n$;
            break;
          case "wheel":
            h = C$;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = c$;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Lg;
        }
        var m = (t & 4) !== 0,
          b = !m && e === "scroll",
          y = m ? (p !== null ? p + "Capture" : null) : p;
        m = [];
        for (var g = u, x; g !== null; ) {
          x = g;
          var S = x.stateNode;
          if (
            (x.tag === 5 &&
              S !== null &&
              ((x = S),
              y !== null && ((S = ws(g, y)), S != null && m.push(_s(g, S, x)))),
            b)
          )
            break;
          g = g.return;
        }
        0 < m.length &&
          ((p = new h(p, w, null, r, c)), d.push({ event: p, listeners: m }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          p &&
            r !== ip &&
            (w = r.relatedTarget || r.fromElement) &&
            (Po(w) || w[Sn]))
        )
          break e;
        if (
          (h || p) &&
          ((p =
            c.window === c
              ? c
              : (p = c.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          h
            ? ((w = r.relatedTarget || r.toElement),
              (h = u),
              (w = w ? Po(w) : null),
              w !== null &&
                ((b = Qo(w)), w !== b || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((h = null), (w = u)),
          h !== w)
        ) {
          if (
            ((m = Dg),
            (S = "onMouseLeave"),
            (y = "onMouseEnter"),
            (g = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((m = Lg),
              (S = "onPointerLeave"),
              (y = "onPointerEnter"),
              (g = "pointer")),
            (b = h == null ? p : Ei(h)),
            (x = w == null ? p : Ei(w)),
            (p = new m(S, g + "leave", h, r, c)),
            (p.target = b),
            (p.relatedTarget = x),
            (S = null),
            Po(c) === u &&
              ((m = new m(y, g + "enter", w, r, c)),
              (m.target = x),
              (m.relatedTarget = b),
              (S = m)),
            (b = S),
            h && w)
          )
            t: {
              for (m = h, y = w, g = 0, x = m; x; x = li(x)) g++;
              for (x = 0, S = y; S; S = li(S)) x++;
              for (; 0 < g - x; ) (m = li(m)), g--;
              for (; 0 < x - g; ) (y = li(y)), x--;
              for (; g--; ) {
                if (m === y || (y !== null && m === y.alternate)) break t;
                (m = li(m)), (y = li(y));
              }
              m = null;
            }
          else m = null;
          h !== null && qg(d, p, h, m, !1),
            w !== null && b !== null && qg(d, b, w, m, !0);
        }
      }
      e: {
        if (
          ((p = u ? Ei(u) : window),
          (h = p.nodeName && p.nodeName.toLowerCase()),
          h === "select" || (h === "input" && p.type === "file"))
        )
          var C = R$;
        else if (jg(p))
          if (Gw) C = F$;
          else {
            C = k$;
            var $ = A$;
          }
        else
          (h = p.nodeName) &&
            h.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (C = D$);
        if (C && (C = C(e, u))) {
          qw(d, C, r, c);
          break e;
        }
        $ && $(e, p, u),
          e === "focusout" &&
            ($ = p._wrapperState) &&
            $.controlled &&
            p.type === "number" &&
            ep(p, "number", p.value);
      }
      switch ((($ = u ? Ei(u) : window), e)) {
        case "focusin":
          (jg($) || $.contentEditable === "true") &&
            ((bi = $), (dp = u), (is = null));
          break;
        case "focusout":
          is = dp = bi = null;
          break;
        case "mousedown":
          pp = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (pp = !1), Vg(d, r, c);
          break;
        case "selectionchange":
          if (I$) break;
        case "keydown":
        case "keyup":
          Vg(d, r, c);
      }
      var P;
      if (Jh)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        xi
          ? Ww(e, r) && (R = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (Vw &&
          r.locale !== "ko" &&
          (xi || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && xi && (P = Hw())
            : ((Kn = c),
              (Yh = "value" in Kn ? Kn.value : Kn.textContent),
              (xi = !0))),
        ($ = Du(u, R)),
        0 < $.length &&
          ((R = new Fg(R, e, null, r, c)),
          d.push({ event: R, listeners: $ }),
          P ? (R.data = P) : ((P = Kw(r)), P !== null && (R.data = P)))),
        (P = _$ ? $$(e, r) : P$(e, r)) &&
          ((u = Du(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Fg("onBeforeInput", "beforeinput", null, r, c)),
            d.push({ event: c, listeners: u }),
            (c.data = P)));
    }
    ox(d, t);
  });
}
function _s(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Du(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = ws(e, r)),
      i != null && n.unshift(_s(e, i, o)),
      (i = ws(e, t)),
      i != null && n.push(_s(e, i, o))),
      (e = e.return);
  }
  return n;
}
function li(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function qg(e, t, r, n, o) {
  for (var i = t._reactName, a = []; r !== null && r !== n; ) {
    var s = r,
      l = s.alternate,
      u = s.stateNode;
    if (l !== null && l === n) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((l = ws(r, i)), l != null && a.unshift(_s(r, l, s)))
        : o || ((l = ws(r, i)), l != null && a.push(_s(r, l, s)))),
      (r = r.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var z$ = /\r\n?/g,
  H$ = /\u0000|\uFFFD/g;
function Gg(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      z$,
      `
`
    )
    .replace(H$, "");
}
function Nl(e, t, r) {
  if (((t = Gg(t)), Gg(e) !== t && r)) throw Error(j(425));
}
function Fu() {}
var hp = null,
  mp = null;
function vp(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var gp = typeof setTimeout == "function" ? setTimeout : void 0,
  V$ = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Yg = typeof Promise == "function" ? Promise : void 0,
  W$ =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Yg != "undefined"
      ? function (e) {
          return Yg.resolve(null).then(e).catch(K$);
        }
      : gp;
function K$(e) {
  setTimeout(function () {
    throw e;
  });
}
function Zf(e, t) {
  var r = t,
    n = 0;
  do {
    var o = r.nextSibling;
    if ((e.removeChild(r), o && o.nodeType === 8))
      if (((r = o.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(o), Ss(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = o;
  } while (r);
  Ss(t);
}
function Jn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Qg(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var da = Math.random().toString(36).slice(2),
  Gr = "__reactFiber$" + da,
  $s = "__reactProps$" + da,
  Sn = "__reactContainer$" + da,
  yp = "__reactEvents$" + da,
  q$ = "__reactListeners$" + da,
  G$ = "__reactHandles$" + da;
function Po(e) {
  var t = e[Gr];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[Sn] || r[Gr])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = Qg(e); e !== null; ) {
          if ((r = e[Gr])) return r;
          e = Qg(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function Ys(e) {
  return (
    (e = e[Gr] || e[Sn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ei(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function $c(e) {
  return e[$s] || null;
}
var wp = [],
  Ci = -1;
function co(e) {
  return { current: e };
}
function Be(e) {
  0 > Ci || ((e.current = wp[Ci]), (wp[Ci] = null), Ci--);
}
function Fe(e, t) {
  Ci++, (wp[Ci] = e.current), (e.current = t);
}
var ao = {},
  Tt = co(ao),
  qt = co(!1),
  jo = ao;
function Yi(e, t) {
  var r = e.type.contextTypes;
  if (!r) return ao;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in r) o[i] = t[i];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Gt(e) {
  return (e = e.childContextTypes), e != null;
}
function Lu() {
  Be(qt), Be(Tt);
}
function Xg(e, t, r) {
  if (Tt.current !== ao) throw Error(j(168));
  Fe(Tt, t), Fe(qt, r);
}
function ax(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var o in n) if (!(o in t)) throw Error(j(108, A_(e) || "Unknown", o));
  return Ye({}, r, n);
}
function Mu(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ao),
    (jo = Tt.current),
    Fe(Tt, e),
    Fe(qt, qt.current),
    !0
  );
}
function Jg(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(j(169));
  r
    ? ((e = ax(e, t, jo)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      Be(qt),
      Be(Tt),
      Fe(Tt, e))
    : Be(qt),
    Fe(qt, r);
}
var pn = null,
  Pc = !1,
  ed = !1;
function sx(e) {
  pn === null ? (pn = [e]) : pn.push(e);
}
function Y$(e) {
  (Pc = !0), sx(e);
}
function fo() {
  if (!ed && pn !== null) {
    ed = !0;
    var e = 0,
      t = Ne;
    try {
      var r = pn;
      for (Ne = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (pn = null), (Pc = !1);
    } catch (o) {
      throw (pn !== null && (pn = pn.slice(e + 1)), Aw(Wh, fo), o);
    } finally {
      (Ne = t), (ed = !1);
    }
  }
  return null;
}
var Oi = [],
  _i = 0,
  Iu = null,
  ju = 0,
  mr = [],
  vr = 0,
  Uo = null,
  vn = 1,
  gn = "";
function wo(e, t) {
  (Oi[_i++] = ju), (Oi[_i++] = Iu), (Iu = e), (ju = t);
}
function lx(e, t, r) {
  (mr[vr++] = vn), (mr[vr++] = gn), (mr[vr++] = Uo), (Uo = e);
  var n = vn;
  e = gn;
  var o = 32 - Ir(n) - 1;
  (n &= ~(1 << o)), (r += 1);
  var i = 32 - Ir(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (n & ((1 << a) - 1)).toString(32)),
      (n >>= a),
      (o -= a),
      (vn = (1 << (32 - Ir(t) + o)) | (r << o) | n),
      (gn = i + e);
  } else (vn = (1 << i) | (r << o) | n), (gn = e);
}
function em(e) {
  e.return !== null && (wo(e, 1), lx(e, 1, 0));
}
function tm(e) {
  for (; e === Iu; )
    (Iu = Oi[--_i]), (Oi[_i] = null), (ju = Oi[--_i]), (Oi[_i] = null);
  for (; e === Uo; )
    (Uo = mr[--vr]),
      (mr[vr] = null),
      (gn = mr[--vr]),
      (mr[vr] = null),
      (vn = mr[--vr]),
      (mr[vr] = null);
}
var sr = null,
  or = null,
  Ve = !1,
  kr = null;
function ux(e, t) {
  var r = gr(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function Zg(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (sr = e), (or = Jn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (sr = e), (or = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = Uo !== null ? { id: vn, overflow: gn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = gr(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (sr = e),
            (or = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function xp(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function bp(e) {
  if (Ve) {
    var t = or;
    if (t) {
      var r = t;
      if (!Zg(e, t)) {
        if (xp(e)) throw Error(j(418));
        t = Jn(r.nextSibling);
        var n = sr;
        t && Zg(e, t)
          ? ux(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (Ve = !1), (sr = e));
      }
    } else {
      if (xp(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (Ve = !1), (sr = e);
    }
  }
}
function ey(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  sr = e;
}
function Tl(e) {
  if (e !== sr) return !1;
  if (!Ve) return ey(e), (Ve = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !vp(e.type, e.memoizedProps))),
    t && (t = or))
  ) {
    if (xp(e)) throw (cx(), Error(j(418)));
    for (; t; ) ux(e, t), (t = Jn(t.nextSibling));
  }
  if ((ey(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              or = Jn(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      or = null;
    }
  } else or = sr ? Jn(e.stateNode.nextSibling) : null;
  return !0;
}
function cx() {
  for (var e = or; e; ) e = Jn(e.nextSibling);
}
function Qi() {
  (or = sr = null), (Ve = !1);
}
function rm(e) {
  kr === null ? (kr = [e]) : kr.push(e);
}
var Q$ = Nn.ReactCurrentBatchConfig;
function Rr(e, t) {
  if (e && e.defaultProps) {
    (t = Ye({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var Uu = co(null),
  Bu = null,
  $i = null,
  nm = null;
function om() {
  nm = $i = Bu = null;
}
function im(e) {
  var t = Uu.current;
  Be(Uu), (e._currentValue = t);
}
function Sp(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function Ui(e, t) {
  (Bu = e),
    (nm = $i = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (Wt = !0), (e.firstContext = null));
}
function wr(e) {
  var t = e._currentValue;
  if (nm !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), $i === null)) {
      if (Bu === null) throw Error(j(308));
      ($i = e), (Bu.dependencies = { lanes: 0, firstContext: e });
    } else $i = $i.next = e;
  return t;
}
var No = null;
function am(e) {
  No === null ? (No = [e]) : No.push(e);
}
function fx(e, t, r, n) {
  var o = t.interleaved;
  return (
    o === null ? ((r.next = r), am(t)) : ((r.next = o.next), (o.next = r)),
    (t.interleaved = r),
    En(e, n)
  );
}
function En(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var jn = !1;
function sm(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function dx(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function yn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Zn(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), (we & 2) !== 0)) {
    var o = n.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (n.pending = t),
      En(e, r)
    );
  }
  return (
    (o = n.interleaved),
    o === null ? ((t.next = t), am(n)) : ((t.next = o.next), (o.next = t)),
    (n.interleaved = t),
    En(e, r)
  );
}
function Zl(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Kh(e, r);
  }
}
function ty(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var o = null,
      i = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var a = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (r = r.next);
      } while (r !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function zu(e, t, r, n) {
  var o = e.updateQueue;
  jn = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var l = s,
      u = l.next;
    (l.next = null), a === null ? (i = u) : (a.next = u), (a = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== a &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (a = 0), (c = u = l = null), (s = i);
    do {
      var p = s.lane,
        h = s.eventTime;
      if ((n & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var w = e,
            m = s;
          switch (((p = t), (h = r), m.tag)) {
            case 1:
              if (((w = m.payload), typeof w == "function")) {
                d = w.call(h, d, p);
                break e;
              }
              d = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = m.payload),
                (p = typeof w == "function" ? w.call(h, d, p) : w),
                p == null)
              )
                break e;
              d = Ye({}, d, p);
              break e;
            case 2:
              jn = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (p = o.effects),
          p === null ? (o.effects = [s]) : p.push(s));
      } else
        (h = {
          eventTime: h,
          lane: p,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (a |= p);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (p = s),
          (s = p.next),
          (p.next = null),
          (o.lastBaseUpdate = p),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (zo |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function ry(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        o = n.callback;
      if (o !== null) {
        if (((n.callback = null), (n = r), typeof o != "function"))
          throw Error(j(191, o));
        o.call(n);
      }
    }
}
var px = new fw.Component().refs;
function Ep(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : Ye({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Nc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Qo(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = Dt(),
      o = to(e),
      i = yn(n, o);
    (i.payload = t),
      r != null && (i.callback = r),
      (t = Zn(e, i, o)),
      t !== null && (jr(t, e, o, n), Zl(t, e, o));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = Dt(),
      o = to(e),
      i = yn(n, o);
    (i.tag = 1),
      (i.payload = t),
      r != null && (i.callback = r),
      (t = Zn(e, i, o)),
      t !== null && (jr(t, e, o, n), Zl(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = Dt(),
      n = to(e),
      o = yn(r, n);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Zn(e, o, n)),
      t !== null && (jr(t, e, n, r), Zl(t, e, n));
  },
};
function ny(e, t, r, n, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Cs(r, n) || !Cs(o, i)
      : !0
  );
}
function hx(e, t, r) {
  var n = !1,
    o = ao,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = wr(i))
      : ((o = Gt(t) ? jo : Tt.current),
        (n = t.contextTypes),
        (i = (n = n != null) ? Yi(e, o) : ao)),
    (t = new t(r, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Nc),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function oy(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Nc.enqueueReplaceState(t, t.state, null);
}
function Cp(e, t, r, n) {
  var o = e.stateNode;
  (o.props = r), (o.state = e.memoizedState), (o.refs = px), sm(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = wr(i))
    : ((i = Gt(t) ? jo : Tt.current), (o.context = Yi(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ep(e, t, i, r), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Nc.enqueueReplaceState(o, o.state, null),
      zu(e, r, o, n),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Da(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(j(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(j(147, e));
      var o = n,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = o.refs;
            s === px && (s = o.refs = {}),
              a === null ? delete s[i] : (s[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!r._owner) throw Error(j(290, e));
  }
  return e;
}
function Rl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function iy(e) {
  var t = e._init;
  return t(e._payload);
}
function mx(e) {
  function t(y, g) {
    if (e) {
      var x = y.deletions;
      x === null ? ((y.deletions = [g]), (y.flags |= 16)) : x.push(g);
    }
  }
  function r(y, g) {
    if (!e) return null;
    for (; g !== null; ) t(y, g), (g = g.sibling);
    return null;
  }
  function n(y, g) {
    for (y = new Map(); g !== null; )
      g.key !== null ? y.set(g.key, g) : y.set(g.index, g), (g = g.sibling);
    return y;
  }
  function o(y, g) {
    return (y = ro(y, g)), (y.index = 0), (y.sibling = null), y;
  }
  function i(y, g, x) {
    return (
      (y.index = x),
      e
        ? ((x = y.alternate),
          x !== null
            ? ((x = x.index), x < g ? ((y.flags |= 2), g) : x)
            : ((y.flags |= 2), g))
        : ((y.flags |= 1048576), g)
    );
  }
  function a(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function s(y, g, x, S) {
    return g === null || g.tag !== 6
      ? ((g = sd(x, y.mode, S)), (g.return = y), g)
      : ((g = o(g, x)), (g.return = y), g);
  }
  function l(y, g, x, S) {
    var C = x.type;
    return C === wi
      ? c(y, g, x.props.children, S, x.key)
      : g !== null &&
        (g.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === In &&
            iy(C) === g.type))
      ? ((S = o(g, x.props)), (S.ref = Da(y, g, x)), (S.return = y), S)
      : ((S = iu(x.type, x.key, x.props, null, y.mode, S)),
        (S.ref = Da(y, g, x)),
        (S.return = y),
        S);
  }
  function u(y, g, x, S) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== x.containerInfo ||
      g.stateNode.implementation !== x.implementation
      ? ((g = ld(x, y.mode, S)), (g.return = y), g)
      : ((g = o(g, x.children || [])), (g.return = y), g);
  }
  function c(y, g, x, S, C) {
    return g === null || g.tag !== 7
      ? ((g = Fo(x, y.mode, S, C)), (g.return = y), g)
      : ((g = o(g, x)), (g.return = y), g);
  }
  function d(y, g, x) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (g = sd("" + g, y.mode, x)), (g.return = y), g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case xl:
          return (
            (x = iu(g.type, g.key, g.props, null, y.mode, x)),
            (x.ref = Da(y, null, g)),
            (x.return = y),
            x
          );
        case yi:
          return (g = ld(g, y.mode, x)), (g.return = y), g;
        case In:
          var S = g._init;
          return d(y, S(g._payload), x);
      }
      if (Qa(g) || Na(g))
        return (g = Fo(g, y.mode, x, null)), (g.return = y), g;
      Rl(y, g);
    }
    return null;
  }
  function p(y, g, x, S) {
    var C = g !== null ? g.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return C !== null ? null : s(y, g, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case xl:
          return x.key === C ? l(y, g, x, S) : null;
        case yi:
          return x.key === C ? u(y, g, x, S) : null;
        case In:
          return (C = x._init), p(y, g, C(x._payload), S);
      }
      if (Qa(x) || Na(x)) return C !== null ? null : c(y, g, x, S, null);
      Rl(y, x);
    }
    return null;
  }
  function h(y, g, x, S, C) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (y = y.get(x) || null), s(g, y, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case xl:
          return (y = y.get(S.key === null ? x : S.key) || null), l(g, y, S, C);
        case yi:
          return (y = y.get(S.key === null ? x : S.key) || null), u(g, y, S, C);
        case In:
          var $ = S._init;
          return h(y, g, x, $(S._payload), C);
      }
      if (Qa(S) || Na(S)) return (y = y.get(x) || null), c(g, y, S, C, null);
      Rl(g, S);
    }
    return null;
  }
  function w(y, g, x, S) {
    for (
      var C = null, $ = null, P = g, R = (g = 0), M = null;
      P !== null && R < x.length;
      R++
    ) {
      P.index > R ? ((M = P), (P = null)) : (M = P.sibling);
      var L = p(y, P, x[R], S);
      if (L === null) {
        P === null && (P = M);
        break;
      }
      e && P && L.alternate === null && t(y, P),
        (g = i(L, g, R)),
        $ === null ? (C = L) : ($.sibling = L),
        ($ = L),
        (P = M);
    }
    if (R === x.length) return r(y, P), Ve && wo(y, R), C;
    if (P === null) {
      for (; R < x.length; R++)
        (P = d(y, x[R], S)),
          P !== null &&
            ((g = i(P, g, R)), $ === null ? (C = P) : ($.sibling = P), ($ = P));
      return Ve && wo(y, R), C;
    }
    for (P = n(y, P); R < x.length; R++)
      (M = h(P, y, R, x[R], S)),
        M !== null &&
          (e && M.alternate !== null && P.delete(M.key === null ? R : M.key),
          (g = i(M, g, R)),
          $ === null ? (C = M) : ($.sibling = M),
          ($ = M));
    return (
      e &&
        P.forEach(function (F) {
          return t(y, F);
        }),
      Ve && wo(y, R),
      C
    );
  }
  function m(y, g, x, S) {
    var C = Na(x);
    if (typeof C != "function") throw Error(j(150));
    if (((x = C.call(x)), x == null)) throw Error(j(151));
    for (
      var $ = (C = null), P = g, R = (g = 0), M = null, L = x.next();
      P !== null && !L.done;
      R++, L = x.next()
    ) {
      P.index > R ? ((M = P), (P = null)) : (M = P.sibling);
      var F = p(y, P, L.value, S);
      if (F === null) {
        P === null && (P = M);
        break;
      }
      e && P && F.alternate === null && t(y, P),
        (g = i(F, g, R)),
        $ === null ? (C = F) : ($.sibling = F),
        ($ = F),
        (P = M);
    }
    if (L.done) return r(y, P), Ve && wo(y, R), C;
    if (P === null) {
      for (; !L.done; R++, L = x.next())
        (L = d(y, L.value, S)),
          L !== null &&
            ((g = i(L, g, R)), $ === null ? (C = L) : ($.sibling = L), ($ = L));
      return Ve && wo(y, R), C;
    }
    for (P = n(y, P); !L.done; R++, L = x.next())
      (L = h(P, y, R, L.value, S)),
        L !== null &&
          (e && L.alternate !== null && P.delete(L.key === null ? R : L.key),
          (g = i(L, g, R)),
          $ === null ? (C = L) : ($.sibling = L),
          ($ = L));
    return (
      e &&
        P.forEach(function (B) {
          return t(y, B);
        }),
      Ve && wo(y, R),
      C
    );
  }
  function b(y, g, x, S) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === wi &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case xl:
          e: {
            for (var C = x.key, $ = g; $ !== null; ) {
              if ($.key === C) {
                if (((C = x.type), C === wi)) {
                  if ($.tag === 7) {
                    r(y, $.sibling),
                      (g = o($, x.props.children)),
                      (g.return = y),
                      (y = g);
                    break e;
                  }
                } else if (
                  $.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === In &&
                    iy(C) === $.type)
                ) {
                  r(y, $.sibling),
                    (g = o($, x.props)),
                    (g.ref = Da(y, $, x)),
                    (g.return = y),
                    (y = g);
                  break e;
                }
                r(y, $);
                break;
              } else t(y, $);
              $ = $.sibling;
            }
            x.type === wi
              ? ((g = Fo(x.props.children, y.mode, S, x.key)),
                (g.return = y),
                (y = g))
              : ((S = iu(x.type, x.key, x.props, null, y.mode, S)),
                (S.ref = Da(y, g, x)),
                (S.return = y),
                (y = S));
          }
          return a(y);
        case yi:
          e: {
            for ($ = x.key; g !== null; ) {
              if (g.key === $)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === x.containerInfo &&
                  g.stateNode.implementation === x.implementation
                ) {
                  r(y, g.sibling),
                    (g = o(g, x.children || [])),
                    (g.return = y),
                    (y = g);
                  break e;
                } else {
                  r(y, g);
                  break;
                }
              else t(y, g);
              g = g.sibling;
            }
            (g = ld(x, y.mode, S)), (g.return = y), (y = g);
          }
          return a(y);
        case In:
          return ($ = x._init), b(y, g, $(x._payload), S);
      }
      if (Qa(x)) return w(y, g, x, S);
      if (Na(x)) return m(y, g, x, S);
      Rl(y, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        g !== null && g.tag === 6
          ? (r(y, g.sibling), (g = o(g, x)), (g.return = y), (y = g))
          : (r(y, g), (g = sd(x, y.mode, S)), (g.return = y), (y = g)),
        a(y))
      : r(y, g);
  }
  return b;
}
var Xi = mx(!0),
  vx = mx(!1),
  Qs = {},
  Xr = co(Qs),
  Ps = co(Qs),
  Ns = co(Qs);
function To(e) {
  if (e === Qs) throw Error(j(174));
  return e;
}
function lm(e, t) {
  switch ((Fe(Ns, t), Fe(Ps, e), Fe(Xr, Qs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : rp(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = rp(t, e));
  }
  Be(Xr), Fe(Xr, t);
}
function Ji() {
  Be(Xr), Be(Ps), Be(Ns);
}
function gx(e) {
  To(Ns.current);
  var t = To(Xr.current),
    r = rp(t, e.type);
  t !== r && (Fe(Ps, e), Fe(Xr, r));
}
function um(e) {
  Ps.current === e && (Be(Xr), Be(Ps));
}
var Ke = co(0);
function Hu(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var td = [];
function cm() {
  for (var e = 0; e < td.length; e++)
    td[e]._workInProgressVersionPrimary = null;
  td.length = 0;
}
var eu = Nn.ReactCurrentDispatcher,
  rd = Nn.ReactCurrentBatchConfig,
  Bo = 0,
  qe = null,
  at = null,
  ft = null,
  Vu = !1,
  as = !1,
  Ts = 0,
  X$ = 0;
function Ot() {
  throw Error(j(321));
}
function fm(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!Ur(e[r], t[r])) return !1;
  return !0;
}
function dm(e, t, r, n, o, i) {
  if (
    ((Bo = i),
    (qe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (eu.current = e === null || e.memoizedState === null ? tP : rP),
    (e = r(n, o)),
    as)
  ) {
    i = 0;
    do {
      if (((as = !1), (Ts = 0), 25 <= i)) throw Error(j(301));
      (i += 1),
        (ft = at = null),
        (t.updateQueue = null),
        (eu.current = nP),
        (e = r(n, o));
    } while (as);
  }
  if (
    ((eu.current = Wu),
    (t = at !== null && at.next !== null),
    (Bo = 0),
    (ft = at = qe = null),
    (Vu = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function pm() {
  var e = Ts !== 0;
  return (Ts = 0), e;
}
function Kr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ft === null ? (qe.memoizedState = ft = e) : (ft = ft.next = e), ft;
}
function xr() {
  if (at === null) {
    var e = qe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = at.next;
  var t = ft === null ? qe.memoizedState : ft.next;
  if (t !== null) (ft = t), (at = e);
  else {
    if (e === null) throw Error(j(310));
    (at = e),
      (e = {
        memoizedState: at.memoizedState,
        baseState: at.baseState,
        baseQueue: at.baseQueue,
        queue: at.queue,
        next: null,
      }),
      ft === null ? (qe.memoizedState = ft = e) : (ft = ft.next = e);
  }
  return ft;
}
function Rs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function nd(e) {
  var t = xr(),
    r = t.queue;
  if (r === null) throw Error(j(311));
  r.lastRenderedReducer = e;
  var n = at,
    o = n.baseQueue,
    i = r.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (n.baseQueue = o = i), (r.pending = null);
  }
  if (o !== null) {
    (i = o.next), (n = n.baseState);
    var s = (a = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Bo & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (n = u.hasEagerState ? u.eagerState : e(n, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((s = l = d), (a = n)) : (l = l.next = d),
          (qe.lanes |= c),
          (zo |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (a = n) : (l.next = s),
      Ur(n, t.memoizedState) || (Wt = !0),
      (t.memoizedState = n),
      (t.baseState = a),
      (t.baseQueue = l),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (qe.lanes |= i), (zo |= i), (o = o.next);
    while (o !== e);
  } else o === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function od(e) {
  var t = xr(),
    r = t.queue;
  if (r === null) throw Error(j(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    o = r.pending,
    i = t.memoizedState;
  if (o !== null) {
    r.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    Ur(i, t.memoizedState) || (Wt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (r.lastRenderedState = i);
  }
  return [i, n];
}
function yx() {}
function wx(e, t) {
  var r = qe,
    n = xr(),
    o = t(),
    i = !Ur(n.memoizedState, o);
  if (
    (i && ((n.memoizedState = o), (Wt = !0)),
    (n = n.queue),
    hm(Sx.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || (ft !== null && ft.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      As(9, bx.bind(null, r, n, o, t), void 0, null),
      pt === null)
    )
      throw Error(j(349));
    (Bo & 30) !== 0 || xx(r, t, o);
  }
  return o;
}
function xx(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = qe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (qe.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function bx(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), Ex(t) && Cx(e);
}
function Sx(e, t, r) {
  return r(function () {
    Ex(t) && Cx(e);
  });
}
function Ex(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Ur(e, r);
  } catch {
    return !0;
  }
}
function Cx(e) {
  var t = En(e, 1);
  t !== null && jr(t, e, 1, -1);
}
function ay(e) {
  var t = Kr();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Rs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = eP.bind(null, qe, e)),
    [t.memoizedState, e]
  );
}
function As(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = qe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (qe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function Ox() {
  return xr().memoizedState;
}
function tu(e, t, r, n) {
  var o = Kr();
  (qe.flags |= e),
    (o.memoizedState = As(1 | t, r, void 0, n === void 0 ? null : n));
}
function Tc(e, t, r, n) {
  var o = xr();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (at !== null) {
    var a = at.memoizedState;
    if (((i = a.destroy), n !== null && fm(n, a.deps))) {
      o.memoizedState = As(t, r, i, n);
      return;
    }
  }
  (qe.flags |= e), (o.memoizedState = As(1 | t, r, i, n));
}
function sy(e, t) {
  return tu(8390656, 8, e, t);
}
function hm(e, t) {
  return Tc(2048, 8, e, t);
}
function _x(e, t) {
  return Tc(4, 2, e, t);
}
function $x(e, t) {
  return Tc(4, 4, e, t);
}
function Px(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Nx(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), Tc(4, 4, Px.bind(null, t, e), r)
  );
}
function mm() {}
function Tx(e, t) {
  var r = xr();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && fm(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function Rx(e, t) {
  var r = xr();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && fm(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function Ax(e, t, r) {
  return (Bo & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (Wt = !0)), (e.memoizedState = r))
    : (Ur(r, t) || ((r = Fw()), (qe.lanes |= r), (zo |= r), (e.baseState = !0)),
      t);
}
function J$(e, t) {
  var r = Ne;
  (Ne = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = rd.transition;
  rd.transition = {};
  try {
    e(!1), t();
  } finally {
    (Ne = r), (rd.transition = n);
  }
}
function kx() {
  return xr().memoizedState;
}
function Z$(e, t, r) {
  var n = to(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Dx(e))
  )
    Fx(t, r);
  else if (((r = fx(e, t, r, n)), r !== null)) {
    var o = Dt();
    jr(r, e, n, o), Lx(r, t, n);
  }
}
function eP(e, t, r) {
  var n = to(e),
    o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Dx(e)) Fx(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = i(a, r);
        if (((o.hasEagerState = !0), (o.eagerState = s), Ur(s, a))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), am(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (r = fx(e, t, o, n)),
      r !== null && ((o = Dt()), jr(r, e, n, o), Lx(r, t, n));
  }
}
function Dx(e) {
  var t = e.alternate;
  return e === qe || (t !== null && t === qe);
}
function Fx(e, t) {
  as = Vu = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function Lx(e, t, r) {
  if ((r & 4194240) !== 0) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Kh(e, r);
  }
}
var Wu = {
    readContext: wr,
    useCallback: Ot,
    useContext: Ot,
    useEffect: Ot,
    useImperativeHandle: Ot,
    useInsertionEffect: Ot,
    useLayoutEffect: Ot,
    useMemo: Ot,
    useReducer: Ot,
    useRef: Ot,
    useState: Ot,
    useDebugValue: Ot,
    useDeferredValue: Ot,
    useTransition: Ot,
    useMutableSource: Ot,
    useSyncExternalStore: Ot,
    useId: Ot,
    unstable_isNewReconciler: !1,
  },
  tP = {
    readContext: wr,
    useCallback: function (e, t) {
      return (Kr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: wr,
    useEffect: sy,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        tu(4194308, 4, Px.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return tu(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return tu(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = Kr();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = Kr();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = Z$.bind(null, qe, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Kr();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ay,
    useDebugValue: mm,
    useDeferredValue: function (e) {
      return (Kr().memoizedState = e);
    },
    useTransition: function () {
      var e = ay(!1),
        t = e[0];
      return (e = J$.bind(null, e[1])), (Kr().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = qe,
        o = Kr();
      if (Ve) {
        if (r === void 0) throw Error(j(407));
        r = r();
      } else {
        if (((r = t()), pt === null)) throw Error(j(349));
        (Bo & 30) !== 0 || xx(n, t, r);
      }
      o.memoizedState = r;
      var i = { value: r, getSnapshot: t };
      return (
        (o.queue = i),
        sy(Sx.bind(null, n, i, e), [e]),
        (n.flags |= 2048),
        As(9, bx.bind(null, n, i, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = Kr(),
        t = pt.identifierPrefix;
      if (Ve) {
        var r = gn,
          n = vn;
        (r = (n & ~(1 << (32 - Ir(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = Ts++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = X$++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  rP = {
    readContext: wr,
    useCallback: Tx,
    useContext: wr,
    useEffect: hm,
    useImperativeHandle: Nx,
    useInsertionEffect: _x,
    useLayoutEffect: $x,
    useMemo: Rx,
    useReducer: nd,
    useRef: Ox,
    useState: function () {
      return nd(Rs);
    },
    useDebugValue: mm,
    useDeferredValue: function (e) {
      var t = xr();
      return Ax(t, at.memoizedState, e);
    },
    useTransition: function () {
      var e = nd(Rs)[0],
        t = xr().memoizedState;
      return [e, t];
    },
    useMutableSource: yx,
    useSyncExternalStore: wx,
    useId: kx,
    unstable_isNewReconciler: !1,
  },
  nP = {
    readContext: wr,
    useCallback: Tx,
    useContext: wr,
    useEffect: hm,
    useImperativeHandle: Nx,
    useInsertionEffect: _x,
    useLayoutEffect: $x,
    useMemo: Rx,
    useReducer: od,
    useRef: Ox,
    useState: function () {
      return od(Rs);
    },
    useDebugValue: mm,
    useDeferredValue: function (e) {
      var t = xr();
      return at === null ? (t.memoizedState = e) : Ax(t, at.memoizedState, e);
    },
    useTransition: function () {
      var e = od(Rs)[0],
        t = xr().memoizedState;
      return [e, t];
    },
    useMutableSource: yx,
    useSyncExternalStore: wx,
    useId: kx,
    unstable_isNewReconciler: !1,
  };
function Zi(e, t) {
  try {
    var r = "",
      n = t;
    do (r += R_(n)), (n = n.return);
    while (n);
    var o = r;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function id(e, t, r) {
  return {
    value: e,
    source: null,
    stack: r != null ? r : null,
    digest: t != null ? t : null,
  };
}
function Op(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var oP = typeof WeakMap == "function" ? WeakMap : Map;
function Mx(e, t, r) {
  (r = yn(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      qu || ((qu = !0), (Fp = n)), Op(e, t);
    }),
    r
  );
}
function Ix(e, t, r) {
  (r = yn(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var o = t.value;
    (r.payload = function () {
      return n(o);
    }),
      (r.callback = function () {
        Op(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (r.callback = function () {
        Op(e, t),
          typeof n != "function" &&
            (eo === null ? (eo = new Set([this])) : eo.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    r
  );
}
function ly(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new oP();
    var o = new Set();
    n.set(t, o);
  } else (o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o));
  o.has(r) || (o.add(r), (e = yP.bind(null, e, t, r)), t.then(e, e));
}
function uy(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function cy(e, t, r, n, o) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = yn(-1, 1)), (t.tag = 2), Zn(r, t, 1))),
          (r.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = o), e);
}
var iP = Nn.ReactCurrentOwner,
  Wt = !1;
function At(e, t, r, n) {
  t.child = e === null ? vx(t, null, r, n) : Xi(t, e.child, r, n);
}
function fy(e, t, r, n, o) {
  r = r.render;
  var i = t.ref;
  return (
    Ui(t, o),
    (n = dm(e, t, r, n, i, o)),
    (r = pm()),
    e !== null && !Wt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Cn(e, t, o))
      : (Ve && r && em(t), (t.flags |= 1), At(e, t, n, o), t.child)
  );
}
function dy(e, t, r, n, o) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" &&
      !Em(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), jx(e, t, i, n, o))
      : ((e = iu(r.type, null, n, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), (e.lanes & o) === 0)) {
    var a = i.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : Cs), r(a, n) && e.ref === t.ref)
    )
      return Cn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = ro(i, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function jx(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Cs(i, n) && e.ref === t.ref)
      if (((Wt = !1), (t.pendingProps = n = i), (e.lanes & o) !== 0))
        (e.flags & 131072) !== 0 && (Wt = !0);
      else return (t.lanes = e.lanes), Cn(e, t, o);
  }
  return _p(e, t, r, n, o);
}
function Ux(e, t, r) {
  var n = t.pendingProps,
    o = n.children,
    i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Fe(Ni, nr),
        (nr |= r);
    else {
      if ((r & 1073741824) === 0)
        return (
          (e = i !== null ? i.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Fe(Ni, nr),
          (nr |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = i !== null ? i.baseLanes : r),
        Fe(Ni, nr),
        (nr |= n);
    }
  else
    i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r),
      Fe(Ni, nr),
      (nr |= n);
  return At(e, t, o, r), t.child;
}
function Bx(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function _p(e, t, r, n, o) {
  var i = Gt(r) ? jo : Tt.current;
  return (
    (i = Yi(t, i)),
    Ui(t, o),
    (r = dm(e, t, r, n, i, o)),
    (n = pm()),
    e !== null && !Wt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Cn(e, t, o))
      : (Ve && n && em(t), (t.flags |= 1), At(e, t, r, o), t.child)
  );
}
function py(e, t, r, n, o) {
  if (Gt(r)) {
    var i = !0;
    Mu(t);
  } else i = !1;
  if ((Ui(t, o), t.stateNode === null))
    ru(e, t), hx(t, r, n), Cp(t, r, n, o), (n = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var l = a.context,
      u = r.contextType;
    typeof u == "object" && u !== null
      ? (u = wr(u))
      : ((u = Gt(r) ? jo : Tt.current), (u = Yi(t, u)));
    var c = r.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== n || l !== u) && oy(t, a, n, u)),
      (jn = !1);
    var p = t.memoizedState;
    (a.state = p),
      zu(t, n, a, o),
      (l = t.memoizedState),
      s !== n || p !== l || qt.current || jn
        ? (typeof c == "function" && (Ep(t, r, c, n), (l = t.memoizedState)),
          (s = jn || ny(t, r, s, n, p, l, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = l)),
          (a.props = n),
          (a.state = l),
          (a.context = u),
          (n = s))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1));
  } else {
    (a = t.stateNode),
      dx(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Rr(t.type, s)),
      (a.props = u),
      (d = t.pendingProps),
      (p = a.context),
      (l = r.contextType),
      typeof l == "object" && l !== null
        ? (l = wr(l))
        : ((l = Gt(r) ? jo : Tt.current), (l = Yi(t, l)));
    var h = r.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== d || p !== l) && oy(t, a, n, l)),
      (jn = !1),
      (p = t.memoizedState),
      (a.state = p),
      zu(t, n, a, o);
    var w = t.memoizedState;
    s !== d || p !== w || qt.current || jn
      ? (typeof h == "function" && (Ep(t, r, h, n), (w = t.memoizedState)),
        (u = jn || ny(t, r, u, n, p, w, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(n, w, l),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(n, w, l)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = w)),
        (a.props = n),
        (a.state = w),
        (a.context = l),
        (n = u))
      : (typeof a.componentDidUpdate != "function" ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return $p(e, t, r, n, i, o);
}
function $p(e, t, r, n, o, i) {
  Bx(e, t);
  var a = (t.flags & 128) !== 0;
  if (!n && !a) return o && Jg(t, r, !1), Cn(e, t, i);
  (n = t.stateNode), (iP.current = t);
  var s =
    a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Xi(t, e.child, null, i)), (t.child = Xi(t, null, s, i)))
      : At(e, t, s, i),
    (t.memoizedState = n.state),
    o && Jg(t, r, !0),
    t.child
  );
}
function zx(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Xg(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Xg(e, t.context, !1),
    lm(e, t.containerInfo);
}
function hy(e, t, r, n, o) {
  return Qi(), rm(o), (t.flags |= 256), At(e, t, r, n), t.child;
}
var Pp = { dehydrated: null, treeContext: null, retryLane: 0 };
function Np(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Hx(e, t, r) {
  var n = t.pendingProps,
    o = Ke.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Fe(Ke, o & 1),
    e === null)
  )
    return (
      bp(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === "$!"
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((a = n.children),
          (e = n.fallback),
          i
            ? ((n = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              (n & 1) === 0 && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = kc(a, n, 0, null)),
              (e = Fo(e, n, r, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Np(r)),
              (t.memoizedState = Pp),
              e)
            : vm(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return aP(e, t, a, n, s, o, r);
  if (i) {
    (i = n.fallback), (a = t.mode), (o = e.child), (s = o.sibling);
    var l = { mode: "hidden", children: n.children };
    return (
      (a & 1) === 0 && t.child !== o
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = l),
          (t.deletions = null))
        : ((n = ro(o, l)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = ro(s, i)) : ((i = Fo(i, a, r, null)), (i.flags |= 2)),
      (i.return = t),
      (n.return = t),
      (n.sibling = i),
      (t.child = n),
      (n = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Np(r)
          : {
              baseLanes: a.baseLanes | r,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~r),
      (t.memoizedState = Pp),
      n
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (n = ro(i, { mode: "visible", children: n.children })),
    (t.mode & 1) === 0 && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function vm(e, t) {
  return (
    (t = kc({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Al(e, t, r, n) {
  return (
    n !== null && rm(n),
    Xi(t, e.child, null, r),
    (e = vm(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function aP(e, t, r, n, o, i, a) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = id(Error(j(422)))), Al(e, t, a, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = n.fallback),
        (o = t.mode),
        (n = kc({ mode: "visible", children: n.children }, o, 0, null)),
        (i = Fo(i, o, a, null)),
        (i.flags |= 2),
        (n.return = t),
        (i.return = t),
        (n.sibling = i),
        (t.child = n),
        (t.mode & 1) !== 0 && Xi(t, e.child, null, a),
        (t.child.memoizedState = Np(a)),
        (t.memoizedState = Pp),
        i);
  if ((t.mode & 1) === 0) return Al(e, t, a, null);
  if (o.data === "$!") {
    if (((n = o.nextSibling && o.nextSibling.dataset), n)) var s = n.dgst;
    return (n = s), (i = Error(j(419))), (n = id(i, n, void 0)), Al(e, t, a, n);
  }
  if (((s = (a & e.childLanes) !== 0), Wt || s)) {
    if (((n = pt), n !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = (o & (n.suspendedLanes | a)) !== 0 ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), En(e, o), jr(n, e, o, -1));
    }
    return Sm(), (n = id(Error(j(421)))), Al(e, t, a, n);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = wP.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (or = Jn(o.nextSibling)),
      (sr = t),
      (Ve = !0),
      (kr = null),
      e !== null &&
        ((mr[vr++] = vn),
        (mr[vr++] = gn),
        (mr[vr++] = Uo),
        (vn = e.id),
        (gn = e.overflow),
        (Uo = t)),
      (t = vm(t, n.children)),
      (t.flags |= 4096),
      t);
}
function my(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Sp(e.return, t, r);
}
function ad(e, t, r, n, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = n),
      (i.tail = r),
      (i.tailMode = o));
}
function Vx(e, t, r) {
  var n = t.pendingProps,
    o = n.revealOrder,
    i = n.tail;
  if ((At(e, t, n.children, r), (n = Ke.current), (n & 2) !== 0))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && my(e, r, t);
        else if (e.tag === 19) my(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((Fe(Ke, n), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (r = t.child, o = null; r !== null; )
          (e = r.alternate),
            e !== null && Hu(e) === null && (o = r),
            (r = r.sibling);
        (r = o),
          r === null
            ? ((o = t.child), (t.child = null))
            : ((o = r.sibling), (r.sibling = null)),
          ad(t, !1, o, r, i);
        break;
      case "backwards":
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Hu(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = r), (r = o), (o = e);
        }
        ad(t, !0, r, null, i);
        break;
      case "together":
        ad(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ru(e, t) {
  (t.mode & 1) === 0 &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Cn(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (zo |= t.lanes),
    (r & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, r = ro(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = ro(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function sP(e, t, r) {
  switch (t.tag) {
    case 3:
      zx(t), Qi();
      break;
    case 5:
      gx(t);
      break;
    case 1:
      Gt(t.type) && Mu(t);
      break;
    case 4:
      lm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        o = t.memoizedProps.value;
      Fe(Uu, n._currentValue), (n._currentValue = o);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (Fe(Ke, Ke.current & 1), (t.flags |= 128), null)
          : (r & t.child.childLanes) !== 0
          ? Hx(e, t, r)
          : (Fe(Ke, Ke.current & 1),
            (e = Cn(e, t, r)),
            e !== null ? e.sibling : null);
      Fe(Ke, Ke.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (n) return Vx(e, t, r);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Fe(Ke, Ke.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ux(e, t, r);
  }
  return Cn(e, t, r);
}
var Wx, Tp, Kx, qx;
Wx = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
Tp = function () {};
Kx = function (e, t, r, n) {
  var o = e.memoizedProps;
  if (o !== n) {
    (e = t.stateNode), To(Xr.current);
    var i = null;
    switch (r) {
      case "input":
        (o = Jd(e, o)), (n = Jd(e, n)), (i = []);
        break;
      case "select":
        (o = Ye({}, o, { value: void 0 })),
          (n = Ye({}, n, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = tp(e, o)), (n = tp(e, n)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = Fu);
    }
    np(r, n);
    var a;
    r = null;
    for (u in o)
      if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s) s.hasOwnProperty(a) && (r || (r = {}), (r[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (gs.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in n) {
      var l = n[u];
      if (
        ((s = o != null ? o[u] : void 0),
        n.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (r || (r = {}), (r[a] = ""));
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (r || (r = {}), (r[a] = l[a]));
          } else r || (i || (i = []), i.push(u, r)), (r = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (gs.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && Me("scroll", e),
                  i || s === l || (i = []))
                : (i = i || []).push(u, l));
    }
    r && (i = i || []).push("style", r);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
qx = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function Fa(e, t) {
  if (!Ve)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function _t(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags & 14680064),
        (n |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags),
        (n |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function lP(e, t, r) {
  var n = t.pendingProps;
  switch ((tm(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return _t(t), null;
    case 1:
      return Gt(t.type) && Lu(), _t(t), null;
    case 3:
      return (
        (n = t.stateNode),
        Ji(),
        Be(qt),
        Be(Tt),
        cm(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Tl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), kr !== null && (Ip(kr), (kr = null)))),
        Tp(e, t),
        _t(t),
        null
      );
    case 5:
      um(t);
      var o = To(Ns.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        Kx(e, t, r, n, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(j(166));
          return _t(t), null;
        }
        if (((e = To(Xr.current)), Tl(t))) {
          (n = t.stateNode), (r = t.type);
          var i = t.memoizedProps;
          switch (((n[Gr] = t), (n[$s] = i), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              Me("cancel", n), Me("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              Me("load", n);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Ja.length; o++) Me(Ja[o], n);
              break;
            case "source":
              Me("error", n);
              break;
            case "img":
            case "image":
            case "link":
              Me("error", n), Me("load", n);
              break;
            case "details":
              Me("toggle", n);
              break;
            case "input":
              Cg(n, i), Me("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!i.multiple }),
                Me("invalid", n);
              break;
            case "textarea":
              _g(n, i), Me("invalid", n);
          }
          np(r, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children"
                ? typeof s == "string"
                  ? n.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Nl(n.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    n.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Nl(n.textContent, s, e),
                    (o = ["children", "" + s]))
                : gs.hasOwnProperty(a) &&
                  s != null &&
                  a === "onScroll" &&
                  Me("scroll", n);
            }
          switch (r) {
            case "input":
              bl(n), Og(n, i, !0);
              break;
            case "textarea":
              bl(n), $g(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = Fu);
          }
          (n = o), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = xw(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                ? (e = a.createElement(r, { is: n.is }))
                : ((e = a.createElement(r)),
                  r === "select" &&
                    ((a = e),
                    n.multiple
                      ? (a.multiple = !0)
                      : n.size && (a.size = n.size)))
              : (e = a.createElementNS(e, r)),
            (e[Gr] = t),
            (e[$s] = n),
            Wx(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = op(r, n)), r)) {
              case "dialog":
                Me("cancel", e), Me("close", e), (o = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                Me("load", e), (o = n);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ja.length; o++) Me(Ja[o], e);
                o = n;
                break;
              case "source":
                Me("error", e), (o = n);
                break;
              case "img":
              case "image":
              case "link":
                Me("error", e), Me("load", e), (o = n);
                break;
              case "details":
                Me("toggle", e), (o = n);
                break;
              case "input":
                Cg(e, n), (o = Jd(e, n)), Me("invalid", e);
                break;
              case "option":
                o = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (o = Ye({}, n, { value: void 0 })),
                  Me("invalid", e);
                break;
              case "textarea":
                _g(e, n), (o = tp(e, n)), Me("invalid", e);
                break;
              default:
                o = n;
            }
            np(r, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style"
                  ? Ew(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && bw(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (r !== "textarea" || l !== "") && ys(e, l)
                    : typeof l == "number" && ys(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (gs.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && Me("scroll", e)
                      : l != null && Uh(e, i, l, a));
              }
            switch (r) {
              case "input":
                bl(e), Og(e, n, !1);
                break;
              case "textarea":
                bl(e), $g(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + io(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (i = n.value),
                  i != null
                    ? Li(e, !!n.multiple, i, !1)
                    : n.defaultValue != null &&
                      Li(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Fu);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return _t(t), null;
    case 6:
      if (e && t.stateNode != null) qx(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(j(166));
        if (((r = To(Ns.current)), To(Xr.current), Tl(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[Gr] = t),
            (i = n.nodeValue !== r) && ((e = sr), e !== null))
          )
            switch (e.tag) {
              case 3:
                Nl(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Nl(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[Gr] = t),
            (t.stateNode = n);
      }
      return _t(t), null;
    case 13:
      if (
        (Be(Ke),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ve && or !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          cx(), Qi(), (t.flags |= 98560), (i = !1);
        else if (((i = Tl(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(j(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(j(317));
            i[Gr] = t;
          } else
            Qi(),
              (t.flags & 128) === 0 && (t.memoizedState = null),
              (t.flags |= 4);
          _t(t), (i = !1);
        } else kr !== null && (Ip(kr), (kr = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            (t.mode & 1) !== 0 &&
              (e === null || (Ke.current & 1) !== 0
                ? lt === 0 && (lt = 3)
                : Sm())),
          t.updateQueue !== null && (t.flags |= 4),
          _t(t),
          null);
    case 4:
      return (
        Ji(), Tp(e, t), e === null && Os(t.stateNode.containerInfo), _t(t), null
      );
    case 10:
      return im(t.type._context), _t(t), null;
    case 17:
      return Gt(t.type) && Lu(), _t(t), null;
    case 19:
      if ((Be(Ke), (i = t.memoizedState), i === null)) return _t(t), null;
      if (((n = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (n) Fa(i, !1);
        else {
          if (lt !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((a = Hu(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Fa(i, !1),
                    n = a.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (i = r),
                    (e = n),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return Fe(Ke, (Ke.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            et() > ea &&
            ((t.flags |= 128), (n = !0), Fa(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = Hu(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Fa(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !Ve)
            )
              return _t(t), null;
          } else
            2 * et() - i.renderingStartTime > ea &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), Fa(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((r = i.last),
            r !== null ? (r.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = et()),
          (t.sibling = null),
          (r = Ke.current),
          Fe(Ke, n ? (r & 1) | 2 : r & 1),
          t)
        : (_t(t), null);
    case 22:
    case 23:
      return (
        bm(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && (t.mode & 1) !== 0
          ? (nr & 1073741824) !== 0 &&
            (_t(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : _t(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function uP(e, t) {
  switch ((tm(t), t.tag)) {
    case 1:
      return (
        Gt(t.type) && Lu(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ji(),
        Be(qt),
        Be(Tt),
        cm(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return um(t), null;
    case 13:
      if (
        (Be(Ke), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        Qi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Be(Ke), null;
    case 4:
      return Ji(), null;
    case 10:
      return im(t.type._context), null;
    case 22:
    case 23:
      return bm(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var kl = !1,
  Pt = !1,
  cP = typeof WeakSet == "function" ? WeakSet : Set,
  Y = null;
function Pi(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        Qe(e, t, n);
      }
    else r.current = null;
}
function Rp(e, t, r) {
  try {
    r();
  } catch (n) {
    Qe(e, t, n);
  }
}
var vy = !1;
function fP(e, t) {
  if (((hp = Au), (e = Xw()), Zh(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var o = n.anchorOffset,
            i = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, i.nodeType;
          } catch {
            r = null;
            break e;
          }
          var a = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            p = null;
          t: for (;;) {
            for (
              var h;
              d !== r || (o !== 0 && d.nodeType !== 3) || (s = a + o),
                d !== i || (n !== 0 && d.nodeType !== 3) || (l = a + n),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (p = d), (d = h);
            for (;;) {
              if (d === e) break t;
              if (
                (p === r && ++u === o && (s = a),
                p === i && ++c === n && (l = a),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = p), (p = d.parentNode);
            }
            d = h;
          }
          r = s === -1 || l === -1 ? null : { start: s, end: l };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (mp = { focusedElem: e, selectionRange: r }, Au = !1, Y = t; Y !== null; )
    if (((t = Y), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (Y = e);
    else
      for (; Y !== null; ) {
        t = Y;
        try {
          var w = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var m = w.memoizedProps,
                    b = w.memoizedState,
                    y = t.stateNode,
                    g = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? m : Rr(t.type, m),
                      b
                    );
                  y.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (S) {
          Qe(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (Y = e);
          break;
        }
        Y = t.return;
      }
  return (w = vy), (vy = !1), w;
}
function ss(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var o = (n = n.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Rp(t, r, i);
      }
      o = o.next;
    } while (o !== n);
  }
}
function Rc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function Ap(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Gx(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Gx(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Gr], delete t[$s], delete t[yp], delete t[q$], delete t[G$])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Yx(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function gy(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Yx(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function kp(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = Fu));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (kp(e, t, r), e = e.sibling; e !== null; ) kp(e, t, r), (e = e.sibling);
}
function Dp(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Dp(e, t, r), e = e.sibling; e !== null; ) Dp(e, t, r), (e = e.sibling);
}
var wt = null,
  Ar = !1;
function Fn(e, t, r) {
  for (r = r.child; r !== null; ) Qx(e, t, r), (r = r.sibling);
}
function Qx(e, t, r) {
  if (Qr && typeof Qr.onCommitFiberUnmount == "function")
    try {
      Qr.onCommitFiberUnmount(Ec, r);
    } catch {}
  switch (r.tag) {
    case 5:
      Pt || Pi(r, t);
    case 6:
      var n = wt,
        o = Ar;
      (wt = null),
        Fn(e, t, r),
        (wt = n),
        (Ar = o),
        wt !== null &&
          (Ar
            ? ((e = wt),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : wt.removeChild(r.stateNode));
      break;
    case 18:
      wt !== null &&
        (Ar
          ? ((e = wt),
            (r = r.stateNode),
            e.nodeType === 8
              ? Zf(e.parentNode, r)
              : e.nodeType === 1 && Zf(e, r),
            Ss(e))
          : Zf(wt, r.stateNode));
      break;
    case 4:
      (n = wt),
        (o = Ar),
        (wt = r.stateNode.containerInfo),
        (Ar = !0),
        Fn(e, t, r),
        (wt = n),
        (Ar = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Pt &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        o = n = n.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && Rp(r, t, a),
            (o = o.next);
        } while (o !== n);
      }
      Fn(e, t, r);
      break;
    case 1:
      if (
        !Pt &&
        (Pi(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (s) {
          Qe(r, t, s);
        }
      Fn(e, t, r);
      break;
    case 21:
      Fn(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((Pt = (n = Pt) || r.memoizedState !== null), Fn(e, t, r), (Pt = n))
        : Fn(e, t, r);
      break;
    default:
      Fn(e, t, r);
  }
}
function yy(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new cP()),
      t.forEach(function (n) {
        var o = xP.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(o, o));
      });
  }
}
function Pr(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var o = r[n];
      try {
        var i = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (wt = s.stateNode), (Ar = !1);
              break e;
            case 3:
              (wt = s.stateNode.containerInfo), (Ar = !0);
              break e;
            case 4:
              (wt = s.stateNode.containerInfo), (Ar = !0);
              break e;
          }
          s = s.return;
        }
        if (wt === null) throw Error(j(160));
        Qx(i, a, o), (wt = null), (Ar = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        Qe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Xx(t, e), (t = t.sibling);
}
function Xx(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pr(t, e), Wr(e), n & 4)) {
        try {
          ss(3, e, e.return), Rc(3, e);
        } catch (m) {
          Qe(e, e.return, m);
        }
        try {
          ss(5, e, e.return);
        } catch (m) {
          Qe(e, e.return, m);
        }
      }
      break;
    case 1:
      Pr(t, e), Wr(e), n & 512 && r !== null && Pi(r, r.return);
      break;
    case 5:
      if (
        (Pr(t, e),
        Wr(e),
        n & 512 && r !== null && Pi(r, r.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ys(o, "");
        } catch (m) {
          Qe(e, e.return, m);
        }
      }
      if (n & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = r !== null ? r.memoizedProps : i,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && yw(o, i),
              op(s, a);
            var u = op(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1];
              c === "style"
                ? Ew(o, d)
                : c === "dangerouslySetInnerHTML"
                ? bw(o, d)
                : c === "children"
                ? ys(o, d)
                : Uh(o, c, d, u);
            }
            switch (s) {
              case "input":
                Zd(o, i);
                break;
              case "textarea":
                ww(o, i);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? Li(o, !!i.multiple, h, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Li(o, !!i.multiple, i.defaultValue, !0)
                      : Li(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[$s] = i;
          } catch (m) {
            Qe(e, e.return, m);
          }
      }
      break;
    case 6:
      if ((Pr(t, e), Wr(e), n & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (m) {
          Qe(e, e.return, m);
        }
      }
      break;
    case 3:
      if (
        (Pr(t, e), Wr(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          Ss(t.containerInfo);
        } catch (m) {
          Qe(e, e.return, m);
        }
      break;
    case 4:
      Pr(t, e), Wr(e);
      break;
    case 13:
      Pr(t, e),
        Wr(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (wm = et())),
        n & 4 && yy(e);
      break;
    case 22:
      if (
        ((c = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((Pt = (u = Pt) || c), Pr(t, e), (Pt = u)) : Pr(t, e),
        Wr(e),
        n & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && (e.mode & 1) !== 0)
        )
          for (Y = e, c = e.child; c !== null; ) {
            for (d = Y = c; Y !== null; ) {
              switch (((p = Y), (h = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ss(4, p, p.return);
                  break;
                case 1:
                  Pi(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (n = p), (r = p.return);
                    try {
                      (t = n),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (m) {
                      Qe(n, r, m);
                    }
                  }
                  break;
                case 5:
                  Pi(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    xy(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = p), (Y = h)) : xy(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (s.style.display = Sw("display", a)));
              } catch (m) {
                Qe(e, e.return, m);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (m) {
                Qe(e, e.return, m);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Pr(t, e), Wr(e), n & 4 && yy(e);
      break;
    case 21:
      break;
    default:
      Pr(t, e), Wr(e);
  }
}
function Wr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (Yx(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(j(160));
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode;
          n.flags & 32 && (ys(o, ""), (n.flags &= -33));
          var i = gy(e);
          Dp(e, i, o);
          break;
        case 3:
        case 4:
          var a = n.stateNode.containerInfo,
            s = gy(e);
          kp(e, s, a);
          break;
        default:
          throw Error(j(161));
      }
    } catch (l) {
      Qe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function dP(e, t, r) {
  (Y = e), Jx(e);
}
function Jx(e, t, r) {
  for (var n = (e.mode & 1) !== 0; Y !== null; ) {
    var o = Y,
      i = o.child;
    if (o.tag === 22 && n) {
      var a = o.memoizedState !== null || kl;
      if (!a) {
        var s = o.alternate,
          l = (s !== null && s.memoizedState !== null) || Pt;
        s = kl;
        var u = Pt;
        if (((kl = a), (Pt = l) && !u))
          for (Y = o; Y !== null; )
            (a = Y),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? by(o)
                : l !== null
                ? ((l.return = a), (Y = l))
                : by(o);
        for (; i !== null; ) (Y = i), Jx(i), (i = i.sibling);
        (Y = o), (kl = s), (Pt = u);
      }
      wy(e);
    } else
      (o.subtreeFlags & 8772) !== 0 && i !== null
        ? ((i.return = o), (Y = i))
        : wy(e);
  }
}
function wy(e) {
  for (; Y !== null; ) {
    var t = Y;
    if ((t.flags & 8772) !== 0) {
      var r = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Pt || Rc(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !Pt)
                if (r === null) n.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : Rr(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    o,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && ry(t, i, n);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                ry(t, a, r);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (r === null && t.flags & 4) {
                r = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && r.focus();
                    break;
                  case "img":
                    l.src && (r.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Ss(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(j(163));
          }
        Pt || (t.flags & 512 && Ap(t));
      } catch (p) {
        Qe(t, t.return, p);
      }
    }
    if (t === e) {
      Y = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (Y = r);
      break;
    }
    Y = t.return;
  }
}
function xy(e) {
  for (; Y !== null; ) {
    var t = Y;
    if (t === e) {
      Y = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (Y = r);
      break;
    }
    Y = t.return;
  }
}
function by(e) {
  for (; Y !== null; ) {
    var t = Y;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Rc(4, t);
          } catch (l) {
            Qe(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var o = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              Qe(t, o, l);
            }
          }
          var i = t.return;
          try {
            Ap(t);
          } catch (l) {
            Qe(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Ap(t);
          } catch (l) {
            Qe(t, a, l);
          }
      }
    } catch (l) {
      Qe(t, t.return, l);
    }
    if (t === e) {
      Y = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (Y = s);
      break;
    }
    Y = t.return;
  }
}
var pP = Math.ceil,
  Ku = Nn.ReactCurrentDispatcher,
  gm = Nn.ReactCurrentOwner,
  yr = Nn.ReactCurrentBatchConfig,
  we = 0,
  pt = null,
  nt = null,
  bt = 0,
  nr = 0,
  Ni = co(0),
  lt = 0,
  ks = null,
  zo = 0,
  Ac = 0,
  ym = 0,
  ls = null,
  Vt = null,
  wm = 0,
  ea = 1 / 0,
  dn = null,
  qu = !1,
  Fp = null,
  eo = null,
  Dl = !1,
  qn = null,
  Gu = 0,
  us = 0,
  Lp = null,
  nu = -1,
  ou = 0;
function Dt() {
  return (we & 6) !== 0 ? et() : nu !== -1 ? nu : (nu = et());
}
function to(e) {
  return (e.mode & 1) === 0
    ? 1
    : (we & 2) !== 0 && bt !== 0
    ? bt & -bt
    : Q$.transition !== null
    ? (ou === 0 && (ou = Fw()), ou)
    : ((e = Ne),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : zw(e.type))),
      e);
}
function jr(e, t, r, n) {
  if (50 < us) throw ((us = 0), (Lp = null), Error(j(185)));
  qs(e, r, n),
    ((we & 2) === 0 || e !== pt) &&
      (e === pt && ((we & 2) === 0 && (Ac |= r), lt === 4 && Hn(e, bt)),
      Yt(e, n),
      r === 1 &&
        we === 0 &&
        (t.mode & 1) === 0 &&
        ((ea = et() + 500), Pc && fo()));
}
function Yt(e, t) {
  var r = e.callbackNode;
  Q_(e, t);
  var n = Ru(e, e === pt ? bt : 0);
  if (n === 0)
    r !== null && Tg(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Tg(r), t === 1))
      e.tag === 0 ? Y$(Sy.bind(null, e)) : sx(Sy.bind(null, e)),
        W$(function () {
          (we & 6) === 0 && fo();
        }),
        (r = null);
    else {
      switch (Lw(n)) {
        case 1:
          r = Wh;
          break;
        case 4:
          r = kw;
          break;
        case 16:
          r = Tu;
          break;
        case 536870912:
          r = Dw;
          break;
        default:
          r = Tu;
      }
      r = ab(r, Zx.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function Zx(e, t) {
  if (((nu = -1), (ou = 0), (we & 6) !== 0)) throw Error(j(327));
  var r = e.callbackNode;
  if (Bi() && e.callbackNode !== r) return null;
  var n = Ru(e, e === pt ? bt : 0);
  if (n === 0) return null;
  if ((n & 30) !== 0 || (n & e.expiredLanes) !== 0 || t) t = Yu(e, n);
  else {
    t = n;
    var o = we;
    we |= 2;
    var i = tb();
    (pt !== e || bt !== t) && ((dn = null), (ea = et() + 500), Do(e, t));
    do
      try {
        vP();
        break;
      } catch (s) {
        eb(e, s);
      }
    while (1);
    om(),
      (Ku.current = i),
      (we = o),
      nt !== null ? (t = 0) : ((pt = null), (bt = 0), (t = lt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = up(e)), o !== 0 && ((n = o), (t = Mp(e, o)))), t === 1)
    )
      throw ((r = ks), Do(e, 0), Hn(e, n), Yt(e, et()), r);
    if (t === 6) Hn(e, n);
    else {
      if (
        ((o = e.current.alternate),
        (n & 30) === 0 &&
          !hP(o) &&
          ((t = Yu(e, n)),
          t === 2 && ((i = up(e)), i !== 0 && ((n = i), (t = Mp(e, i)))),
          t === 1))
      )
        throw ((r = ks), Do(e, 0), Hn(e, n), Yt(e, et()), r);
      switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          xo(e, Vt, dn);
          break;
        case 3:
          if (
            (Hn(e, n), (n & 130023424) === n && ((t = wm + 500 - et()), 10 < t))
          ) {
            if (Ru(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & n) !== n)) {
              Dt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = gp(xo.bind(null, e, Vt, dn), t);
            break;
          }
          xo(e, Vt, dn);
          break;
        case 4:
          if ((Hn(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var a = 31 - Ir(n);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (n &= ~i);
          }
          if (
            ((n = o),
            (n = et() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * pP(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = gp(xo.bind(null, e, Vt, dn), n);
            break;
          }
          xo(e, Vt, dn);
          break;
        case 5:
          xo(e, Vt, dn);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return Yt(e, et()), e.callbackNode === r ? Zx.bind(null, e) : null;
}
function Mp(e, t) {
  var r = ls;
  return (
    e.current.memoizedState.isDehydrated && (Do(e, t).flags |= 256),
    (e = Yu(e, t)),
    e !== 2 && ((t = Vt), (Vt = r), t !== null && Ip(t)),
    e
  );
}
function Ip(e) {
  Vt === null ? (Vt = e) : Vt.push.apply(Vt, e);
}
function hP(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Ur(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Hn(e, t) {
  for (
    t &= ~ym,
      t &= ~Ac,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - Ir(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function Sy(e) {
  if ((we & 6) !== 0) throw Error(j(327));
  Bi();
  var t = Ru(e, 0);
  if ((t & 1) === 0) return Yt(e, et()), null;
  var r = Yu(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = up(e);
    n !== 0 && ((t = n), (r = Mp(e, n)));
  }
  if (r === 1) throw ((r = ks), Do(e, 0), Hn(e, t), Yt(e, et()), r);
  if (r === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xo(e, Vt, dn),
    Yt(e, et()),
    null
  );
}
function xm(e, t) {
  var r = we;
  we |= 1;
  try {
    return e(t);
  } finally {
    (we = r), we === 0 && ((ea = et() + 500), Pc && fo());
  }
}
function Ho(e) {
  qn !== null && qn.tag === 0 && (we & 6) === 0 && Bi();
  var t = we;
  we |= 1;
  var r = yr.transition,
    n = Ne;
  try {
    if (((yr.transition = null), (Ne = 1), e)) return e();
  } finally {
    (Ne = n), (yr.transition = r), (we = t), (we & 6) === 0 && fo();
  }
}
function bm() {
  (nr = Ni.current), Be(Ni);
}
function Do(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), V$(r)), nt !== null))
    for (r = nt.return; r !== null; ) {
      var n = r;
      switch ((tm(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && Lu();
          break;
        case 3:
          Ji(), Be(qt), Be(Tt), cm();
          break;
        case 5:
          um(n);
          break;
        case 4:
          Ji();
          break;
        case 13:
          Be(Ke);
          break;
        case 19:
          Be(Ke);
          break;
        case 10:
          im(n.type._context);
          break;
        case 22:
        case 23:
          bm();
      }
      r = r.return;
    }
  if (
    ((pt = e),
    (nt = e = ro(e.current, null)),
    (bt = nr = t),
    (lt = 0),
    (ks = null),
    (ym = Ac = zo = 0),
    (Vt = ls = null),
    No !== null)
  ) {
    for (t = 0; t < No.length; t++)
      if (((r = No[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var o = n.next,
          i = r.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (n.next = a);
        }
        r.pending = n;
      }
    No = null;
  }
  return e;
}
function eb(e, t) {
  do {
    var r = nt;
    try {
      if ((om(), (eu.current = Wu), Vu)) {
        for (var n = qe.memoizedState; n !== null; ) {
          var o = n.queue;
          o !== null && (o.pending = null), (n = n.next);
        }
        Vu = !1;
      }
      if (
        ((Bo = 0),
        (ft = at = qe = null),
        (as = !1),
        (Ts = 0),
        (gm.current = null),
        r === null || r.return === null)
      ) {
        (lt = 1), (ks = t), (nt = null);
        break;
      }
      e: {
        var i = e,
          a = r.return,
          s = r,
          l = t;
        if (
          ((t = bt),
          (s.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = s,
            d = c.tag;
          if ((c.mode & 1) === 0 && (d === 0 || d === 11 || d === 15)) {
            var p = c.alternate;
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = uy(a);
          if (h !== null) {
            (h.flags &= -257),
              cy(h, a, s, i, t),
              h.mode & 1 && ly(i, u, t),
              (t = h),
              (l = u);
            var w = t.updateQueue;
            if (w === null) {
              var m = new Set();
              m.add(l), (t.updateQueue = m);
            } else w.add(l);
            break e;
          } else {
            if ((t & 1) === 0) {
              ly(i, u, t), Sm();
              break e;
            }
            l = Error(j(426));
          }
        } else if (Ve && s.mode & 1) {
          var b = uy(a);
          if (b !== null) {
            (b.flags & 65536) === 0 && (b.flags |= 256),
              cy(b, a, s, i, t),
              rm(Zi(l, s));
            break e;
          }
        }
        (i = l = Zi(l, s)),
          lt !== 4 && (lt = 2),
          ls === null ? (ls = [i]) : ls.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var y = Mx(i, l, t);
              ty(i, y);
              break e;
            case 1:
              s = l;
              var g = i.type,
                x = i.stateNode;
              if (
                (i.flags & 128) === 0 &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (eo === null || !eo.has(x))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = Ix(i, s, t);
                ty(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      nb(r);
    } catch (C) {
      (t = C), nt === r && r !== null && (nt = r = r.return);
      continue;
    }
    break;
  } while (1);
}
function tb() {
  var e = Ku.current;
  return (Ku.current = Wu), e === null ? Wu : e;
}
function Sm() {
  (lt === 0 || lt === 3 || lt === 2) && (lt = 4),
    pt === null ||
      ((zo & 268435455) === 0 && (Ac & 268435455) === 0) ||
      Hn(pt, bt);
}
function Yu(e, t) {
  var r = we;
  we |= 2;
  var n = tb();
  (pt !== e || bt !== t) && ((dn = null), Do(e, t));
  do
    try {
      mP();
      break;
    } catch (o) {
      eb(e, o);
    }
  while (1);
  if ((om(), (we = r), (Ku.current = n), nt !== null)) throw Error(j(261));
  return (pt = null), (bt = 0), lt;
}
function mP() {
  for (; nt !== null; ) rb(nt);
}
function vP() {
  for (; nt !== null && !B_(); ) rb(nt);
}
function rb(e) {
  var t = ib(e.alternate, e, nr);
  (e.memoizedProps = e.pendingProps),
    t === null ? nb(e) : (nt = t),
    (gm.current = null);
}
function nb(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((r = lP(r, t, nr)), r !== null)) {
        nt = r;
        return;
      }
    } else {
      if (((r = uP(r, t)), r !== null)) {
        (r.flags &= 32767), (nt = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (lt = 6), (nt = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      nt = t;
      return;
    }
    nt = t = e;
  } while (t !== null);
  lt === 0 && (lt = 5);
}
function xo(e, t, r) {
  var n = Ne,
    o = yr.transition;
  try {
    (yr.transition = null), (Ne = 1), gP(e, t, r, n);
  } finally {
    (yr.transition = o), (Ne = n);
  }
  return null;
}
function gP(e, t, r, n) {
  do Bi();
  while (qn !== null);
  if ((we & 6) !== 0) throw Error(j(327));
  r = e.finishedWork;
  var o = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = r.lanes | r.childLanes;
  if (
    (X_(e, i),
    e === pt && ((nt = pt = null), (bt = 0)),
    ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
      Dl ||
      ((Dl = !0),
      ab(Tu, function () {
        return Bi(), null;
      })),
    (i = (r.flags & 15990) !== 0),
    (r.subtreeFlags & 15990) !== 0 || i)
  ) {
    (i = yr.transition), (yr.transition = null);
    var a = Ne;
    Ne = 1;
    var s = we;
    (we |= 4),
      (gm.current = null),
      fP(e, r),
      Xx(r, e),
      M$(mp),
      (Au = !!hp),
      (mp = hp = null),
      (e.current = r),
      dP(r),
      z_(),
      (we = s),
      (Ne = a),
      (yr.transition = i);
  } else e.current = r;
  if (
    (Dl && ((Dl = !1), (qn = e), (Gu = o)),
    (i = e.pendingLanes),
    i === 0 && (eo = null),
    W_(r.stateNode),
    Yt(e, et()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest });
  if (qu) throw ((qu = !1), (e = Fp), (Fp = null), e);
  return (
    (Gu & 1) !== 0 && e.tag !== 0 && Bi(),
    (i = e.pendingLanes),
    (i & 1) !== 0 ? (e === Lp ? us++ : ((us = 0), (Lp = e))) : (us = 0),
    fo(),
    null
  );
}
function Bi() {
  if (qn !== null) {
    var e = Lw(Gu),
      t = yr.transition,
      r = Ne;
    try {
      if (((yr.transition = null), (Ne = 16 > e ? 16 : e), qn === null))
        var n = !1;
      else {
        if (((e = qn), (qn = null), (Gu = 0), (we & 6) !== 0))
          throw Error(j(331));
        var o = we;
        for (we |= 4, Y = e.current; Y !== null; ) {
          var i = Y,
            a = i.child;
          if ((Y.flags & 16) !== 0) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (Y = u; Y !== null; ) {
                  var c = Y;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ss(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (Y = d);
                  else
                    for (; Y !== null; ) {
                      c = Y;
                      var p = c.sibling,
                        h = c.return;
                      if ((Gx(c), c === u)) {
                        Y = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = h), (Y = p);
                        break;
                      }
                      Y = h;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var m = w.child;
                if (m !== null) {
                  w.child = null;
                  do {
                    var b = m.sibling;
                    (m.sibling = null), (m = b);
                  } while (m !== null);
                }
              }
              Y = i;
            }
          }
          if ((i.subtreeFlags & 2064) !== 0 && a !== null)
            (a.return = i), (Y = a);
          else
            e: for (; Y !== null; ) {
              if (((i = Y), (i.flags & 2048) !== 0))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ss(9, i, i.return);
                }
              var y = i.sibling;
              if (y !== null) {
                (y.return = i.return), (Y = y);
                break e;
              }
              Y = i.return;
            }
        }
        var g = e.current;
        for (Y = g; Y !== null; ) {
          a = Y;
          var x = a.child;
          if ((a.subtreeFlags & 2064) !== 0 && x !== null)
            (x.return = a), (Y = x);
          else
            e: for (a = g; Y !== null; ) {
              if (((s = Y), (s.flags & 2048) !== 0))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rc(9, s);
                  }
                } catch (C) {
                  Qe(s, s.return, C);
                }
              if (s === a) {
                Y = null;
                break e;
              }
              var S = s.sibling;
              if (S !== null) {
                (S.return = s.return), (Y = S);
                break e;
              }
              Y = s.return;
            }
        }
        if (
          ((we = o), fo(), Qr && typeof Qr.onPostCommitFiberRoot == "function")
        )
          try {
            Qr.onPostCommitFiberRoot(Ec, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (Ne = r), (yr.transition = t);
    }
  }
  return !1;
}
function Ey(e, t, r) {
  (t = Zi(r, t)),
    (t = Mx(e, t, 1)),
    (e = Zn(e, t, 1)),
    (t = Dt()),
    e !== null && (qs(e, 1, t), Yt(e, t));
}
function Qe(e, t, r) {
  if (e.tag === 3) Ey(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ey(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (eo === null || !eo.has(n)))
        ) {
          (e = Zi(r, e)),
            (e = Ix(t, e, 1)),
            (t = Zn(t, e, 1)),
            (e = Dt()),
            t !== null && (qs(t, 1, e), Yt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function yP(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = Dt()),
    (e.pingedLanes |= e.suspendedLanes & r),
    pt === e &&
      (bt & r) === r &&
      (lt === 4 || (lt === 3 && (bt & 130023424) === bt && 500 > et() - wm)
        ? Do(e, 0)
        : (ym |= r)),
    Yt(e, t);
}
function ob(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = Cl), (Cl <<= 1), (Cl & 130023424) === 0 && (Cl = 4194304)));
  var r = Dt();
  (e = En(e, t)), e !== null && (qs(e, t, r), Yt(e, r));
}
function wP(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), ob(e, r);
}
function xP(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        o = e.memoizedState;
      o !== null && (r = o.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  n !== null && n.delete(t), ob(e, r);
}
var ib;
ib = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || qt.current) Wt = !0;
    else {
      if ((e.lanes & r) === 0 && (t.flags & 128) === 0)
        return (Wt = !1), sP(e, t, r);
      Wt = (e.flags & 131072) !== 0;
    }
  else (Wt = !1), Ve && (t.flags & 1048576) !== 0 && lx(t, ju, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      ru(e, t), (e = t.pendingProps);
      var o = Yi(t, Tt.current);
      Ui(t, r), (o = dm(null, t, n, e, o, r));
      var i = pm();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Gt(n) ? ((i = !0), Mu(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            sm(t),
            (o.updater = Nc),
            (t.stateNode = o),
            (o._reactInternals = t),
            Cp(t, n, e, r),
            (t = $p(null, t, n, !0, i, r)))
          : ((t.tag = 0), Ve && i && em(t), At(null, t, o, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (ru(e, t),
          (e = t.pendingProps),
          (o = n._init),
          (n = o(n._payload)),
          (t.type = n),
          (o = t.tag = SP(n)),
          (e = Rr(n, e)),
          o)
        ) {
          case 0:
            t = _p(null, t, n, e, r);
            break e;
          case 1:
            t = py(null, t, n, e, r);
            break e;
          case 11:
            t = fy(null, t, n, e, r);
            break e;
          case 14:
            t = dy(null, t, n, Rr(n.type, e), r);
            break e;
        }
        throw Error(j(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Rr(n, o)),
        _p(e, t, n, o, r)
      );
    case 1:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Rr(n, o)),
        py(e, t, n, o, r)
      );
    case 3:
      e: {
        if ((zx(t), e === null)) throw Error(j(387));
        (n = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          dx(e, t),
          zu(t, n, null, r);
        var a = t.memoizedState;
        if (((n = a.element), i.isDehydrated))
          if (
            ((i = {
              element: n,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Zi(Error(j(423)), t)), (t = hy(e, t, n, r, o));
            break e;
          } else if (n !== o) {
            (o = Zi(Error(j(424)), t)), (t = hy(e, t, n, r, o));
            break e;
          } else
            for (
              or = Jn(t.stateNode.containerInfo.firstChild),
                sr = t,
                Ve = !0,
                kr = null,
                r = vx(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((Qi(), n === o)) {
            t = Cn(e, t, r);
            break e;
          }
          At(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        gx(t),
        e === null && bp(t),
        (n = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        vp(n, o) ? (a = null) : i !== null && vp(n, i) && (t.flags |= 32),
        Bx(e, t),
        At(e, t, a, r),
        t.child
      );
    case 6:
      return e === null && bp(t), null;
    case 13:
      return Hx(e, t, r);
    case 4:
      return (
        lm(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = Xi(t, null, n, r)) : At(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Rr(n, o)),
        fy(e, t, n, o, r)
      );
    case 7:
      return At(e, t, t.pendingProps, r), t.child;
    case 8:
      return At(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return At(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          Fe(Uu, n._currentValue),
          (n._currentValue = a),
          i !== null)
        )
          if (Ur(i.value, a)) {
            if (i.children === o.children && !qt.current) {
              t = Cn(e, t, r);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === n) {
                    if (i.tag === 1) {
                      (l = yn(-1, r & -r)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= r),
                      (l = i.alternate),
                      l !== null && (l.lanes |= r),
                      Sp(i.return, r, t),
                      (s.lanes |= r);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(j(341));
                (a.lanes |= r),
                  (s = a.alternate),
                  s !== null && (s.lanes |= r),
                  Sp(a, r, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        At(e, t, o.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (n = t.pendingProps.children),
        Ui(t, r),
        (o = wr(o)),
        (n = n(o)),
        (t.flags |= 1),
        At(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (o = Rr(n, t.pendingProps)),
        (o = Rr(n.type, o)),
        dy(e, t, n, o, r)
      );
    case 15:
      return jx(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Rr(n, o)),
        ru(e, t),
        (t.tag = 1),
        Gt(n) ? ((e = !0), Mu(t)) : (e = !1),
        Ui(t, r),
        hx(t, n, o),
        Cp(t, n, o, r),
        $p(null, t, n, !0, e, r)
      );
    case 19:
      return Vx(e, t, r);
    case 22:
      return Ux(e, t, r);
  }
  throw Error(j(156, t.tag));
};
function ab(e, t) {
  return Aw(e, t);
}
function bP(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function gr(e, t, r, n) {
  return new bP(e, t, r, n);
}
function Em(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function SP(e) {
  if (typeof e == "function") return Em(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === zh)) return 11;
    if (e === Hh) return 14;
  }
  return 2;
}
function ro(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = gr(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function iu(e, t, r, n, o, i) {
  var a = 2;
  if (((n = e), typeof e == "function")) Em(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case wi:
        return Fo(r.children, o, i, t);
      case Bh:
        (a = 8), (o |= 8);
        break;
      case Gd:
        return (
          (e = gr(12, r, t, o | 2)), (e.elementType = Gd), (e.lanes = i), e
        );
      case Yd:
        return (e = gr(13, r, t, o)), (e.elementType = Yd), (e.lanes = i), e;
      case Qd:
        return (e = gr(19, r, t, o)), (e.elementType = Qd), (e.lanes = i), e;
      case mw:
        return kc(r, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case pw:
              a = 10;
              break e;
            case hw:
              a = 9;
              break e;
            case zh:
              a = 11;
              break e;
            case Hh:
              a = 14;
              break e;
            case In:
              (a = 16), (n = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = gr(a, r, t, o)), (t.elementType = e), (t.type = n), (t.lanes = i), t
  );
}
function Fo(e, t, r, n) {
  return (e = gr(7, e, n, t)), (e.lanes = r), e;
}
function kc(e, t, r, n) {
  return (
    (e = gr(22, e, n, t)),
    (e.elementType = mw),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function sd(e, t, r) {
  return (e = gr(6, e, null, t)), (e.lanes = r), e;
}
function ld(e, t, r) {
  return (
    (t = gr(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function EP(e, t, r, n, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = zf(0)),
    (this.expirationTimes = zf(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = zf(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Cm(e, t, r, n, o, i, a, s, l) {
  return (
    (e = new EP(e, t, r, s, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = gr(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    sm(i),
    e
  );
}
function CP(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: yi,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function sb(e) {
  if (!e) return ao;
  e = e._reactInternals;
  e: {
    if (Qo(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Gt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (Gt(r)) return ax(e, r, t);
  }
  return t;
}
function lb(e, t, r, n, o, i, a, s, l) {
  return (
    (e = Cm(r, n, !0, e, o, i, a, s, l)),
    (e.context = sb(null)),
    (r = e.current),
    (n = Dt()),
    (o = to(r)),
    (i = yn(n, o)),
    (i.callback = t != null ? t : null),
    Zn(r, i, o),
    (e.current.lanes = o),
    qs(e, o, n),
    Yt(e, n),
    e
  );
}
function Dc(e, t, r, n) {
  var o = t.current,
    i = Dt(),
    a = to(o);
  return (
    (r = sb(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = yn(i, a)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = Zn(o, t, a)),
    e !== null && (jr(e, o, a, i), Zl(e, o, a)),
    a
  );
}
function Qu(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Cy(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function Om(e, t) {
  Cy(e, t), (e = e.alternate) && Cy(e, t);
}
function OP() {
  return null;
}
var ub =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function _m(e) {
  this._internalRoot = e;
}
Fc.prototype.render = _m.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  Dc(e, t, null, null);
};
Fc.prototype.unmount = _m.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ho(function () {
      Dc(null, e, null, null);
    }),
      (t[Sn] = null);
  }
};
function Fc(e) {
  this._internalRoot = e;
}
Fc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = jw();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < zn.length && t !== 0 && t < zn[r].priority; r++);
    zn.splice(r, 0, e), r === 0 && Bw(e);
  }
};
function $m(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Lc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Oy() {}
function _P(e, t, r, n, o) {
  if (o) {
    if (typeof n == "function") {
      var i = n;
      n = function () {
        var u = Qu(a);
        i.call(u);
      };
    }
    var a = lb(t, n, e, 0, null, !1, !1, "", Oy);
    return (
      (e._reactRootContainer = a),
      (e[Sn] = a.current),
      Os(e.nodeType === 8 ? e.parentNode : e),
      Ho(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof n == "function") {
    var s = n;
    n = function () {
      var u = Qu(l);
      s.call(u);
    };
  }
  var l = Cm(e, 0, !1, null, null, !1, !1, "", Oy);
  return (
    (e._reactRootContainer = l),
    (e[Sn] = l.current),
    Os(e.nodeType === 8 ? e.parentNode : e),
    Ho(function () {
      Dc(t, l, r, n);
    }),
    l
  );
}
function Mc(e, t, r, n, o) {
  var i = r._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var l = Qu(a);
        s.call(l);
      };
    }
    Dc(t, a, e, o);
  } else a = _P(r, t, e, o, n);
  return Qu(a);
}
Mw = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = Xa(t.pendingLanes);
        r !== 0 &&
          (Kh(t, r | 1),
          Yt(t, et()),
          (we & 6) === 0 && ((ea = et() + 500), fo()));
      }
      break;
    case 13:
      Ho(function () {
        var n = En(e, 1);
        if (n !== null) {
          var o = Dt();
          jr(n, e, 1, o);
        }
      }),
        Om(e, 1);
  }
};
qh = function (e) {
  if (e.tag === 13) {
    var t = En(e, 134217728);
    if (t !== null) {
      var r = Dt();
      jr(t, e, 134217728, r);
    }
    Om(e, 134217728);
  }
};
Iw = function (e) {
  if (e.tag === 13) {
    var t = to(e),
      r = En(e, t);
    if (r !== null) {
      var n = Dt();
      jr(r, e, t, n);
    }
    Om(e, t);
  }
};
jw = function () {
  return Ne;
};
Uw = function (e, t) {
  var r = Ne;
  try {
    return (Ne = e), t();
  } finally {
    Ne = r;
  }
};
ap = function (e, t, r) {
  switch (t) {
    case "input":
      if ((Zd(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var o = $c(n);
            if (!o) throw Error(j(90));
            gw(n), Zd(n, o);
          }
        }
      }
      break;
    case "textarea":
      ww(e, r);
      break;
    case "select":
      (t = r.value), t != null && Li(e, !!r.multiple, t, !1);
  }
};
_w = xm;
$w = Ho;
var $P = { usingClientEntryPoint: !1, Events: [Ys, Ei, $c, Cw, Ow, xm] },
  La = {
    findFiberByHostInstance: Po,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  PP = {
    bundleType: La.bundleType,
    version: La.version,
    rendererPackageName: La.rendererPackageName,
    rendererConfig: La.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Nn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Tw(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: La.findFiberByHostInstance || OP,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
  var Fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fl.isDisabled && Fl.supportsFiber)
    try {
      (Ec = Fl.inject(PP)), (Qr = Fl);
    } catch {}
}
cr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $P;
cr.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$m(t)) throw Error(j(200));
  return CP(e, t, null, r);
};
cr.createRoot = function (e, t) {
  if (!$m(e)) throw Error(j(299));
  var r = !1,
    n = "",
    o = ub;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Cm(e, 1, !1, null, null, r, !1, n, o)),
    (e[Sn] = t.current),
    Os(e.nodeType === 8 ? e.parentNode : e),
    new _m(t)
  );
};
cr.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (e = Tw(t)), (e = e === null ? null : e.stateNode), e;
};
cr.flushSync = function (e) {
  return Ho(e);
};
cr.hydrate = function (e, t, r) {
  if (!Lc(t)) throw Error(j(200));
  return Mc(null, e, t, !0, r);
};
cr.hydrateRoot = function (e, t, r) {
  if (!$m(e)) throw Error(j(405));
  var n = (r != null && r.hydratedSources) || null,
    o = !1,
    i = "",
    a = ub;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (o = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
    (t = lb(t, null, e, 1, r != null ? r : null, o, !1, i, a)),
    (e[Sn] = t.current),
    Os(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (o = r._getVersion),
        (o = o(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, o])
          : t.mutableSourceEagerHydrationData.push(r, o);
  return new Fc(t);
};
cr.render = function (e, t, r) {
  if (!Lc(t)) throw Error(j(200));
  return Mc(null, e, t, !1, r);
};
cr.unmountComponentAtNode = function (e) {
  if (!Lc(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (Ho(function () {
        Mc(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Sn] = null);
        });
      }),
      !0)
    : !1;
};
cr.unstable_batchedUpdates = xm;
cr.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!Lc(r)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return Mc(e, t, r, !1, n);
};
cr.version = "18.2.0-next-9e3b772b8-20220608";
function cb() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cb);
    } catch (e) {
      console.error(e);
    }
}
cb(), (Sc.exports = cr);
var Ti = Sc.exports,
  _y = Sc.exports;
(Wd.createRoot = _y.createRoot), (Wd.hydrateRoot = _y.hydrateRoot);
/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $e() {
  return (
    ($e = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    $e.apply(this, arguments)
  );
}
var Ue;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Ue || (Ue = {}));
const $y = "popstate";
function fb(e) {
  e === void 0 && (e = {});
  let { initialEntries: t = ["/"], initialIndex: r, v5Compat: n = !1 } = e,
    o;
  o = t.map((p, h) =>
    c(p, typeof p == "string" ? null : p.state, h === 0 ? "default" : void 0)
  );
  let i = l(r == null ? o.length - 1 : r),
    a = Ue.Pop,
    s = null;
  function l(p) {
    return Math.min(Math.max(p, 0), o.length - 1);
  }
  function u() {
    return o[i];
  }
  function c(p, h, w) {
    h === void 0 && (h = null);
    let m = Vo(o ? u().pathname : "/", p, h, w);
    return (
      hb(
        m.pathname.charAt(0) === "/",
        "relative pathnames are not supported in memory history: " +
          JSON.stringify(p)
      ),
      m
    );
  }
  return {
    get index() {
      return i;
    },
    get action() {
      return a;
    },
    get location() {
      return u();
    },
    createHref(p) {
      return typeof p == "string" ? p : Jt(p);
    },
    encodeLocation(p) {
      let h = typeof p == "string" ? Cr(p) : p;
      return {
        pathname: h.pathname || "",
        search: h.search || "",
        hash: h.hash || "",
      };
    },
    push(p, h) {
      a = Ue.Push;
      let w = c(p, h);
      (i += 1),
        o.splice(i, o.length, w),
        n && s && s({ action: a, location: w });
    },
    replace(p, h) {
      a = Ue.Replace;
      let w = c(p, h);
      (o[i] = w), n && s && s({ action: a, location: w });
    },
    go(p) {
      (a = Ue.Pop), (i = l(i + p)), s && s({ action: a, location: u() });
    },
    listen(p) {
      return (
        (s = p),
        () => {
          s = null;
        }
      );
    },
  };
}
function db(e) {
  e === void 0 && (e = {});
  function t(n, o) {
    let { pathname: i, search: a, hash: s } = n.location;
    return Vo(
      "",
      { pathname: i, search: a, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function r(n, o) {
    return typeof o == "string" ? o : Jt(o);
  }
  return mb(t, r, null, e);
}
function pb(e) {
  e === void 0 && (e = {});
  function t(o, i) {
    let {
      pathname: a = "/",
      search: s = "",
      hash: l = "",
    } = Cr(o.location.hash.substr(1));
    return Vo(
      "",
      { pathname: a, search: s, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function r(o, i) {
    let a = o.document.querySelector("base"),
      s = "";
    if (a && a.getAttribute("href")) {
      let l = o.location.href,
        u = l.indexOf("#");
      s = u === -1 ? l : l.slice(0, u);
    }
    return s + "#" + (typeof i == "string" ? i : Jt(i));
  }
  function n(o, i) {
    hb(
      o.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(i) +
        ")"
    );
  }
  return mb(t, r, n, e);
}
function te(e, t) {
  if (e === !1 || e === null || typeof e == "undefined") throw new Error(t);
}
function hb(e, t) {
  if (!e) {
    typeof console != "undefined" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function NP() {
  return Math.random().toString(36).substr(2, 8);
}
function Py(e) {
  return { usr: e.state, key: e.key };
}
function Vo(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    $e(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Cr(t) : t,
      { state: r, key: (t && t.key) || n || NP() }
    )
  );
}
function Jt(e) {
  let { pathname: t = "/", search: r = "", hash: n = "" } = e;
  return (
    r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
  );
}
function Cr(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf("?");
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
function Ds(e) {
  let t =
      typeof window != "undefined" &&
      typeof window.location != "undefined" &&
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href,
    r = typeof e == "string" ? e : Jt(e);
  return (
    te(
      t,
      "No window.location.(origin|href) available to create URL for href: " + r
    ),
    new URL(r, t)
  );
}
function mb(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = n,
    a = o.history,
    s = Ue.Pop,
    l = null;
  function u() {
    (s = Ue.Pop), l && l({ action: s, location: p.location });
  }
  function c(h, w) {
    s = Ue.Push;
    let m = Vo(p.location, h, w);
    r && r(m, h);
    let b = Py(m),
      y = p.createHref(m);
    try {
      a.pushState(b, "", y);
    } catch {
      o.location.assign(y);
    }
    i && l && l({ action: s, location: p.location });
  }
  function d(h, w) {
    s = Ue.Replace;
    let m = Vo(p.location, h, w);
    r && r(m, h);
    let b = Py(m),
      y = p.createHref(m);
    a.replaceState(b, "", y), i && l && l({ action: s, location: p.location });
  }
  let p = {
    get action() {
      return s;
    },
    get location() {
      return e(o, a);
    },
    listen(h) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener($y, u),
        (l = h),
        () => {
          o.removeEventListener($y, u), (l = null);
        }
      );
    },
    createHref(h) {
      return t(o, h);
    },
    encodeLocation(h) {
      let w = Ds(typeof h == "string" ? h : Jt(h));
      return { pathname: w.pathname, search: w.search, hash: w.hash };
    },
    push: c,
    replace: d,
    go(h) {
      return a.go(h);
    },
  };
  return p;
}
var xt;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(xt || (xt = {}));
function TP(e) {
  return e.index === !0;
}
function vb(e, t, r) {
  return (
    t === void 0 && (t = []),
    r === void 0 && (r = new Set()),
    e.map((n, o) => {
      let i = [...t, o],
        a = typeof n.id == "string" ? n.id : i.join("-");
      return (
        te(
          n.index !== !0 || !n.children,
          "Cannot specify children on an index route"
        ),
        te(
          !r.has(a),
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        r.add(a),
        TP(n)
          ? $e({}, n, { id: a })
          : $e({}, n, {
              id: a,
              children: n.children ? vb(n.children, i, r) : void 0,
            })
      );
    })
  );
}
function Ri(e, t, r) {
  r === void 0 && (r = "/");
  let n = typeof t == "string" ? Cr(t) : t,
    o = wb(n.pathname || "/", r);
  if (o == null) return null;
  let i = gb(e);
  RP(i);
  let a = null;
  for (let s = 0; a == null && s < i.length; ++s) a = UP(i[s], HP(o));
  return a;
}
function gb(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let o = (i, a, s) => {
    let l = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (te(
        l.relativePath.startsWith(n),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(n.length)));
    let u = Jr([n, l.relativePath]),
      c = r.concat(l);
    i.children &&
      i.children.length > 0 &&
      (te(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      gb(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: IP(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, a) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) o(i, a);
      else for (let l of yb(i.path)) o(i, a, l);
    }),
    t
  );
}
function yb(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t,
    o = r.endsWith("?"),
    i = r.replace(/\?$/, "");
  if (n.length === 0) return o ? [i, ""] : [i];
  let a = yb(n.join("/")),
    s = [];
  return (
    s.push(...a.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && s.push(...a),
    s.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function RP(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : jP(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
const AP = /^:\w+$/,
  kP = 3,
  DP = 2,
  FP = 1,
  LP = 10,
  MP = -2,
  Ny = (e) => e === "*";
function IP(e, t) {
  let r = e.split("/"),
    n = r.length;
  return (
    r.some(Ny) && (n += MP),
    t && (n += DP),
    r
      .filter((o) => !Ny(o))
      .reduce((o, i) => o + (AP.test(i) ? kP : i === "" ? FP : LP), n)
  );
}
function jP(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, o) => n === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function UP(e, t) {
  let { routesMeta: r } = e,
    n = {},
    o = "/",
    i = [];
  for (let a = 0; a < r.length; ++a) {
    let s = r[a],
      l = a === r.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      c = Pm(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(n, c.params);
    let d = s.route;
    i.push({
      params: n,
      pathname: Jr([o, c.pathname]),
      pathnameBase: KP(Jr([o, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (o = Jr([o, c.pathnameBase]));
  }
  return i;
}
function BP(e, t) {
  t === void 0 && (t = {});
  let r = e;
  return (
    r.endsWith("*") &&
      r !== "*" &&
      !r.endsWith("/*") &&
      (Ic(
        !1,
        'Route path "' +
          r +
          '" will be treated as if it were ' +
          ('"' + r.replace(/\*$/, "/*") + '" because the `*` character must ') +
          "always follow a `/` in the pattern. To get rid of this warning, " +
          ('please change the route path to "' + r.replace(/\*$/, "/*") + '".')
      ),
      (r = r.replace(/\*$/, "/*"))),
    r
      .replace(
        /^:(\w+)/g,
        (n, o) => (te(t[o] != null, 'Missing ":' + o + '" param'), t[o])
      )
      .replace(
        /\/:(\w+)/g,
        (n, o) => (te(t[o] != null, 'Missing ":' + o + '" param'), "/" + t[o])
      )
      .replace(/(\/?)\*/, (n, o, i, a) => {
        const s = "*";
        return t[s] == null ? (a === "/*" ? "/" : "") : "" + o + t[s];
      })
  );
}
function Pm(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = zP(e.path, e.caseSensitive, e.end),
    o = t.match(r);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: n.reduce((u, c, d) => {
      if (c === "*") {
        let p = s[d] || "";
        a = i.slice(0, i.length - p.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = VP(s[d] || "", c)), u;
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function zP(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    Ic(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let n = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (a, s) => (n.push(s), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (n.push("*"),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), n]
  );
}
function HP(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Ic(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function VP(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (r) {
    return (
      Ic(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + r + ").")
      ),
      e
    );
  }
}
function wb(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function Ic(e, t) {
  if (!e) {
    typeof console != "undefined" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function xb(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: o = "",
  } = typeof e == "string" ? Cr(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : WP(r, t)) : t,
    search: qP(n),
    hash: GP(o),
  };
}
function WP(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function ud(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(n) +
      "].  Please separate it out to the ") +
    ("`to." + r + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function jc(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Nm(e, t, r, n) {
  n === void 0 && (n = !1);
  let o;
  typeof e == "string"
    ? (o = Cr(e))
    : ((o = $e({}, e)),
      te(
        !o.pathname || !o.pathname.includes("?"),
        ud("?", "pathname", "search", o)
      ),
      te(
        !o.pathname || !o.pathname.includes("#"),
        ud("#", "pathname", "hash", o)
      ),
      te(!o.search || !o.search.includes("#"), ud("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    a = i ? "/" : o.pathname,
    s;
  if (n || a == null) s = r;
  else {
    let d = t.length - 1;
    if (a.startsWith("..")) {
      let p = a.split("/");
      for (; p[0] === ".."; ) p.shift(), (d -= 1);
      o.pathname = p.join("/");
    }
    s = d >= 0 ? t[d] : "/";
  }
  let l = xb(o, s),
    u = a && a !== "/" && a.endsWith("/"),
    c = (i || a === ".") && r.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const Jr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  KP = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  qP = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  GP = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e),
  YP = function (t, r) {
    r === void 0 && (r = {});
    let n = typeof r == "number" ? { status: r } : r,
      o = new Headers(n.headers);
    return (
      o.has("Content-Type") ||
        o.set("Content-Type", "application/json; charset=utf-8"),
      new Response(JSON.stringify(t), $e({}, n, { headers: o }))
    );
  };
class Xu extends Error {}
class bb {
  constructor(t) {
    (this.pendingKeys = new Set()),
      (this.subscriber = void 0),
      te(
        t && typeof t == "object" && !Array.isArray(t),
        "defer() only accepts plain objects"
      );
    let r;
    (this.abortPromise = new Promise((o, i) => (r = i))),
      (this.controller = new AbortController());
    let n = () => r(new Xu("Deferred data aborted"));
    (this.unlistenAbortSignal = () =>
      this.controller.signal.removeEventListener("abort", n)),
      this.controller.signal.addEventListener("abort", n),
      (this.data = Object.entries(t).reduce((o, i) => {
        let [a, s] = i;
        return Object.assign(o, { [a]: this.trackPromise(a, s) });
      }, {}));
  }
  trackPromise(t, r) {
    if (!(r instanceof Promise)) return r;
    this.pendingKeys.add(t);
    let n = Promise.race([r, this.abortPromise]).then(
      (o) => this.onSettle(n, t, null, o),
      (o) => this.onSettle(n, t, o)
    );
    return (
      n.catch(() => {}),
      Object.defineProperty(n, "_tracked", { get: () => !0 }),
      n
    );
  }
  onSettle(t, r, n, o) {
    if (this.controller.signal.aborted && n instanceof Xu)
      return (
        this.unlistenAbortSignal(),
        Object.defineProperty(t, "_error", { get: () => n }),
        Promise.reject(n)
      );
    this.pendingKeys.delete(r), this.done && this.unlistenAbortSignal();
    const i = this.subscriber;
    return n
      ? (Object.defineProperty(t, "_error", { get: () => n }),
        i && i(!1),
        Promise.reject(n))
      : (Object.defineProperty(t, "_data", { get: () => o }), i && i(!1), o);
  }
  subscribe(t) {
    this.subscriber = t;
  }
  cancel() {
    this.controller.abort(),
      this.pendingKeys.forEach((r, n) => this.pendingKeys.delete(n));
    let t = this.subscriber;
    t && t(!0);
  }
  async resolveData(t) {
    let r = !1;
    if (!this.done) {
      let n = () => this.cancel();
      t.addEventListener("abort", n),
        (r = await new Promise((o) => {
          this.subscribe((i) => {
            t.removeEventListener("abort", n), (i || this.done) && o(i);
          });
        }));
    }
    return r;
  }
  get done() {
    return this.pendingKeys.size === 0;
  }
  get unwrappedData() {
    return (
      te(
        this.data !== null && this.done,
        "Can only unwrap data on initialized and settled deferreds"
      ),
      Object.entries(this.data).reduce((t, r) => {
        let [n, o] = r;
        return Object.assign(t, { [n]: XP(o) });
      }, {})
    );
  }
}
function QP(e) {
  return e instanceof Promise && e._tracked === !0;
}
function XP(e) {
  if (!QP(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
function JP(e) {
  return new bb(e);
}
const ZP = function (t, r) {
  r === void 0 && (r = 302);
  let n = r;
  typeof n == "number"
    ? (n = { status: n })
    : typeof n.status == "undefined" && (n.status = 302);
  let o = new Headers(n.headers);
  return o.set("Location", t), new Response(null, $e({}, n, { headers: o }));
};
class Uc {
  constructor(t, r, n, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = r || ""),
      (this.internal = o),
      n instanceof Error
        ? ((this.data = n.toString()), (this.error = n))
        : (this.data = n);
  }
}
function Tm(e) {
  return e instanceof Uc;
}
const Sb = ["post", "put", "patch", "delete"],
  e2 = new Set(Sb),
  t2 = ["get", ...Sb],
  r2 = new Set(t2),
  n2 = new Set([301, 302, 303, 307, 308]),
  o2 = new Set([307, 308]),
  cd = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  i2 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  a2 =
    typeof window != "undefined" &&
    typeof window.document != "undefined" &&
    typeof window.document.createElement != "undefined",
  s2 = !a2;
function Rm(e) {
  te(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let t = vb(e.routes),
    r = null,
    n = new Set(),
    o = null,
    i = null,
    a = null,
    s = e.hydrationData != null,
    l = Ri(t, e.history.location, e.basename),
    u = null;
  if (l == null) {
    let N = Oo(404, { pathname: e.history.location.pathname }),
      { matches: _, route: T } = Fy(t);
    (l = _), (u = { [T.id]: N });
  }
  let c = !l.some((N) => N.route.loader) || e.hydrationData != null,
    d,
    p = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: l,
      initialized: c,
      navigation: cd,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || u,
      fetchers: new Map(),
    },
    h = Ue.Pop,
    w = !1,
    m,
    b = !1,
    y = !1,
    g = [],
    x = [],
    S = new Map(),
    C = 0,
    $ = -1,
    P = new Map(),
    R = new Set(),
    M = new Map(),
    L = new Map();
  function F() {
    return (
      (r = e.history.listen((N) => {
        let { action: _, location: T } = N;
        return D(_, T);
      })),
      p.initialized || D(Ue.Pop, p.location),
      d
    );
  }
  function B() {
    r && r(), n.clear(), m && m.abort(), p.fetchers.forEach((N, _) => it(_));
  }
  function z(N) {
    return n.add(N), () => n.delete(N);
  }
  function G(N) {
    (p = $e({}, p, N)), n.forEach((_) => _(p));
  }
  function X(N, _) {
    var T;
    let H =
        p.actionData != null &&
        p.navigation.formMethod != null &&
        _o(p.navigation.formMethod) &&
        p.navigation.state === "loading" &&
        ((T = N.state) == null ? void 0 : T._isRedirect) !== !0,
      U;
    _.actionData
      ? Object.keys(_.actionData).length > 0
        ? (U = _.actionData)
        : (U = null)
      : H
      ? (U = p.actionData)
      : (U = null);
    let ae = _.loaderData
      ? Dy(p.loaderData, _.loaderData, _.matches || [], _.errors)
      : p.loaderData;
    G(
      $e({}, _, {
        actionData: U,
        loaderData: ae,
        historyAction: h,
        location: N,
        initialized: !0,
        navigation: cd,
        revalidation: "idle",
        restoreScrollPosition: p.navigation.formData
          ? !1
          : V(N, _.matches || p.matches),
        preventScrollReset: w,
      })
    ),
      b ||
        h === Ue.Pop ||
        (h === Ue.Push
          ? e.history.push(N, N.state)
          : h === Ue.Replace && e.history.replace(N, N.state)),
      (h = Ue.Pop),
      (w = !1),
      (b = !1),
      (y = !1),
      (g = []),
      (x = []);
  }
  async function ne(N, _) {
    if (typeof N == "number") {
      e.history.go(N);
      return;
    }
    let { path: T, submission: H, error: U } = Ty(N, _),
      ae = Vo(p.location, T, _ && _.state);
    ae = $e({}, ae, e.history.encodeLocation(ae));
    let se = _ && _.replace != null ? _.replace : void 0,
      q = Ue.Push;
    se === !0
      ? (q = Ue.Replace)
      : se === !1 ||
        (H != null &&
          _o(H.formMethod) &&
          H.formAction === p.location.pathname + p.location.search &&
          (q = Ue.Replace));
    let J =
      _ && "preventScrollReset" in _ ? _.preventScrollReset === !0 : void 0;
    return await D(q, ae, {
      submission: H,
      pendingError: U,
      preventScrollReset: J,
      replace: _ && _.replace,
    });
  }
  function fe() {
    if (
      (Se(),
      G({ revalidation: "loading" }),
      p.navigation.state !== "submitting")
    ) {
      if (p.navigation.state === "idle") {
        D(p.historyAction, p.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      D(h || p.historyAction, p.navigation.location, {
        overrideNavigation: p.navigation,
      });
    }
  }
  async function D(N, _, T) {
    m && m.abort(),
      (m = null),
      (h = N),
      (b = (T && T.startUninterruptedRevalidation) === !0),
      k(p.location, p.matches),
      (w = (T && T.preventScrollReset) === !0);
    let H = T && T.overrideNavigation,
      U = Ri(t, _, e.basename);
    if (!U) {
      let Ee = Oo(404, { pathname: _.pathname }),
        { matches: Bt, route: Z } = Fy(t);
      O(), X(_, { matches: Bt, loaderData: {}, errors: { [Z.id]: Ee } });
      return;
    }
    if (d2(p.location, _)) {
      X(_, { matches: U });
      return;
    }
    m = new AbortController();
    let ae = Ia(_, m.signal, T && T.submission),
      se,
      q;
    if (T && T.pendingError) q = { [Ai(U).route.id]: T.pendingError };
    else if (T && T.submission && _o(T.submission.formMethod)) {
      let Ee = await K(ae, _, T.submission, U, { replace: T.replace });
      if (Ee.shortCircuited) return;
      (se = Ee.pendingActionData),
        (q = Ee.pendingActionError),
        (H = $e({ state: "loading", location: _ }, T.submission)),
        (ae = new Request(ae.url, { signal: ae.signal }));
    }
    let {
      shortCircuited: J,
      loaderData: ke,
      errors: de,
    } = await W(ae, _, U, H, T && T.submission, T && T.replace, se, q);
    J ||
      ((m = null),
      X(
        _,
        $e({ matches: U }, se ? { actionData: se } : {}, {
          loaderData: ke,
          errors: de,
        })
      ));
  }
  async function K(N, _, T, H, U) {
    Se();
    let ae = $e({ state: "submitting", location: _ }, T);
    G({ navigation: ae });
    let se,
      q = jy(H, _);
    if (!q.route.action)
      se = {
        type: xt.error,
        error: Oo(405, {
          method: N.method,
          pathname: _.pathname,
          routeId: q.route.id,
        }),
      };
    else if (((se = await Ma("action", N, q, H, d.basename)), N.signal.aborted))
      return { shortCircuited: !0 };
    if (zi(se)) {
      let J;
      return (
        U && U.replace != null
          ? (J = U.replace)
          : (J = se.location === p.location.pathname + p.location.search),
        await ie(p, se, { submission: T, replace: J }),
        { shortCircuited: !0 }
      );
    }
    if (cs(se)) {
      let J = Ai(H, q.route.id);
      return (
        (U && U.replace) !== !0 && (h = Ue.Push),
        {
          pendingActionData: {},
          pendingActionError: { [J.route.id]: se.error },
        }
      );
    }
    if (Ro(se)) throw new Error("defer() is not supported in actions");
    return { pendingActionData: { [q.route.id]: se.data } };
  }
  async function W(N, _, T, H, U, ae, se, q) {
    let J = H;
    J ||
      (J = $e(
        {
          state: "loading",
          location: _,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        U
      ));
    let ke =
        U ||
        (J.formMethod && J.formAction && J.formData && J.formEncType
          ? {
              formMethod: J.formMethod,
              formAction: J.formAction,
              formData: J.formData,
              formEncType: J.formEncType,
            }
          : void 0),
      [de, Ee] = Ry(p, T, ke, _, y, g, x, se, q, M);
    if (
      (O(
        (Ct) =>
          !(T && T.some((er) => er.route.id === Ct)) ||
          (de && de.some((er) => er.route.id === Ct))
      ),
      de.length === 0 && Ee.length === 0)
    )
      return (
        X(
          _,
          $e(
            { matches: T, loaderData: {}, errors: q || null },
            se ? { actionData: se } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    if (!b) {
      Ee.forEach((er) => {
        let [go] = er,
          $a = p.fetchers.get(go),
          Pa = {
            state: "loading",
            data: $a && $a.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0,
          };
        p.fetchers.set(go, Pa);
      });
      let Ct = se || p.actionData;
      G(
        $e(
          { navigation: J },
          Ct
            ? Object.keys(Ct).length === 0
              ? { actionData: null }
              : { actionData: Ct }
            : {},
          Ee.length > 0 ? { fetchers: new Map(p.fetchers) } : {}
        )
      );
    }
    ($ = ++C),
      Ee.forEach((Ct) => {
        let [er] = Ct;
        return S.set(er, m);
      });
    let {
      results: Bt,
      loaderResults: Z,
      fetcherResults: xe,
    } = await ye(p.matches, T, de, Ee, N);
    if (N.signal.aborted) return { shortCircuited: !0 };
    Ee.forEach((Ct) => {
      let [er] = Ct;
      return S.delete(er);
    });
    let zt = Ly(Bt);
    if (zt) return await ie(p, zt, { replace: ae }), { shortCircuited: !0 };
    let { loaderData: Vr, errors: Dn } = ky(p, T, de, Z, q, Ee, xe, L);
    L.forEach((Ct, er) => {
      Ct.subscribe((go) => {
        (go || Ct.done) && L.delete(er);
      });
    }),
      yt();
    let Lf = he($);
    return $e(
      { loaderData: Vr, errors: Dn },
      Lf || Ee.length > 0 ? { fetchers: new Map(p.fetchers) } : {}
    );
  }
  function oe(N) {
    return p.fetchers.get(N) || i2;
  }
  function le(N, _, T, H) {
    if (s2)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    S.has(N) && Le(N);
    let U = Ri(t, T, e.basename);
    if (!U) {
      Xe(N, _, Oo(404, { pathname: T }));
      return;
    }
    let { path: ae, submission: se } = Ty(T, H, !0),
      q = jy(U, ae);
    if (se && _o(se.formMethod)) {
      _e(N, _, ae, q, U, se);
      return;
    }
    M.set(N, [ae, q, U]), Re(N, _, ae, q, U, se);
  }
  async function _e(N, _, T, H, U, ae) {
    if ((Se(), M.delete(N), !H.route.action)) {
      let an = Oo(405, { method: ae.formMethod, pathname: T, routeId: _ });
      Xe(N, _, an);
      return;
    }
    let se = p.fetchers.get(N),
      q = $e({ state: "submitting" }, ae, {
        data: se && se.data,
        " _hasFetcherDoneAnything ": !0,
      });
    p.fetchers.set(N, q), G({ fetchers: new Map(p.fetchers) });
    let J = new AbortController(),
      ke = Ia(T, J.signal, ae);
    S.set(N, J);
    let de = await Ma("action", ke, H, U, d.basename);
    if (ke.signal.aborted) {
      S.get(N) === J && S.delete(N);
      return;
    }
    if (zi(de)) {
      S.delete(N), R.add(N);
      let an = $e({ state: "loading" }, ae, {
        data: void 0,
        " _hasFetcherDoneAnything ": !0,
      });
      return (
        p.fetchers.set(N, an),
        G({ fetchers: new Map(p.fetchers) }),
        ie(p, de, { isFetchActionRedirect: !0 })
      );
    }
    if (cs(de)) {
      Xe(N, _, de.error);
      return;
    }
    Ro(de) && te(!1, "defer() is not supported in actions");
    let Ee = p.navigation.location || p.location,
      Bt = Ia(Ee, J.signal),
      Z =
        p.navigation.state !== "idle"
          ? Ri(t, p.navigation.location, e.basename)
          : p.matches;
    te(Z, "Didn't find any matches after fetcher action");
    let xe = ++C;
    P.set(N, xe);
    let zt = $e({ state: "loading", data: de.data }, ae, {
      " _hasFetcherDoneAnything ": !0,
    });
    p.fetchers.set(N, zt);
    let [Vr, Dn] = Ry(
      p,
      Z,
      ae,
      Ee,
      y,
      g,
      x,
      { [H.route.id]: de.data },
      void 0,
      M
    );
    Dn.filter((an) => {
      let [yo] = an;
      return yo !== N;
    }).forEach((an) => {
      let [yo] = an,
        gg = p.fetchers.get(yo),
        l_ = {
          state: "loading",
          data: gg && gg.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          " _hasFetcherDoneAnything ": !0,
        };
      p.fetchers.set(yo, l_), S.set(yo, J);
    }),
      G({ fetchers: new Map(p.fetchers) });
    let {
      results: Lf,
      loaderResults: Ct,
      fetcherResults: er,
    } = await ye(p.matches, Z, Vr, Dn, Bt);
    if (J.signal.aborted) return;
    P.delete(N),
      S.delete(N),
      Dn.forEach((an) => {
        let [yo] = an;
        return S.delete(yo);
      });
    let go = Ly(Lf);
    if (go) return ie(p, go);
    let { loaderData: $a, errors: Pa } = ky(
        p,
        p.matches,
        Vr,
        Ct,
        void 0,
        Dn,
        er,
        L
      ),
      a_ = {
        state: "idle",
        data: de.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
    p.fetchers.set(N, a_);
    let s_ = he(xe);
    p.navigation.state === "loading" && xe > $
      ? (te(h, "Expected pending action"),
        m && m.abort(),
        X(p.navigation.location, {
          matches: Z,
          loaderData: $a,
          errors: Pa,
          fetchers: new Map(p.fetchers),
        }))
      : (G(
          $e(
            { errors: Pa, loaderData: Dy(p.loaderData, $a, Z, Pa) },
            s_ ? { fetchers: new Map(p.fetchers) } : {}
          )
        ),
        (y = !1));
  }
  async function Re(N, _, T, H, U, ae) {
    let se = p.fetchers.get(N),
      q = $e(
        {
          state: "loading",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        ae,
        { data: se && se.data, " _hasFetcherDoneAnything ": !0 }
      );
    p.fetchers.set(N, q), G({ fetchers: new Map(p.fetchers) });
    let J = new AbortController(),
      ke = Ia(T, J.signal);
    S.set(N, J);
    let de = await Ma("loader", ke, H, U, d.basename);
    if (
      (Ro(de) && (de = (await _b(de, ke.signal, !0)) || de),
      S.get(N) === J && S.delete(N),
      ke.signal.aborted)
    )
      return;
    if (zi(de)) {
      await ie(p, de);
      return;
    }
    if (cs(de)) {
      let Bt = Ai(p.matches, _);
      p.fetchers.delete(N),
        G({
          fetchers: new Map(p.fetchers),
          errors: { [Bt.route.id]: de.error },
        });
      return;
    }
    te(!Ro(de), "Unhandled fetcher deferred data");
    let Ee = {
      state: "idle",
      data: de.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      " _hasFetcherDoneAnything ": !0,
    };
    p.fetchers.set(N, Ee), G({ fetchers: new Map(p.fetchers) });
  }
  async function ie(N, _, T) {
    var H;
    let {
      submission: U,
      replace: ae,
      isFetchActionRedirect: se,
    } = T === void 0 ? {} : T;
    _.revalidate && (y = !0);
    let q = Vo(
      N.location,
      _.location,
      $e({ _isRedirect: !0 }, se ? { _isFetchActionRedirect: !0 } : {})
    );
    if (
      (te(q, "Expected a location on the redirect navigation"),
      typeof ((H = window) == null ? void 0 : H.location) != "undefined")
    ) {
      let Z = Ds(_.location).origin;
      if (window.location.origin !== Z) {
        ae
          ? window.location.replace(_.location)
          : window.location.assign(_.location);
        return;
      }
    }
    m = null;
    let J = ae === !0 ? Ue.Replace : Ue.Push,
      {
        formMethod: ke,
        formAction: de,
        formEncType: Ee,
        formData: Bt,
      } = N.navigation;
    !U &&
      ke &&
      de &&
      Bt &&
      Ee &&
      (U = { formMethod: ke, formAction: de, formEncType: Ee, formData: Bt }),
      o2.has(_.status) && U && _o(U.formMethod)
        ? await D(J, q, { submission: $e({}, U, { formAction: _.location }) })
        : await D(J, q, {
            overrideNavigation: {
              state: "loading",
              location: q,
              formMethod: U ? U.formMethod : void 0,
              formAction: U ? U.formAction : void 0,
              formEncType: U ? U.formEncType : void 0,
              formData: U ? U.formData : void 0,
            },
          });
  }
  async function ye(N, _, T, H, U) {
    let ae = await Promise.all([
        ...T.map((J) => Ma("loader", U, J, _, d.basename)),
        ...H.map((J) => {
          let [, ke, de, Ee] = J;
          return Ma("loader", Ia(ke, U.signal), de, Ee, d.basename);
        }),
      ]),
      se = ae.slice(0, T.length),
      q = ae.slice(T.length);
    return (
      await Promise.all([
        My(N, T, se, U.signal, !1, p.loaderData),
        My(
          N,
          H.map((J) => {
            let [, , ke] = J;
            return ke;
          }),
          q,
          U.signal,
          !0
        ),
      ]),
      { results: ae, loaderResults: se, fetcherResults: q }
    );
  }
  function Se() {
    (y = !0),
      g.push(...O()),
      M.forEach((N, _) => {
        S.has(_) && (x.push(_), Le(_));
      });
  }
  function Xe(N, _, T) {
    let H = Ai(p.matches, _);
    it(N), G({ errors: { [H.route.id]: T }, fetchers: new Map(p.fetchers) });
  }
  function it(N) {
    S.has(N) && Le(N),
      M.delete(N),
      P.delete(N),
      R.delete(N),
      p.fetchers.delete(N);
  }
  function Le(N) {
    let _ = S.get(N);
    te(_, "Expected fetch controller: " + N), _.abort(), S.delete(N);
  }
  function Ae(N) {
    for (let _ of N) {
      let T = oe(_),
        H = {
          state: "idle",
          data: T.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          " _hasFetcherDoneAnything ": !0,
        };
      p.fetchers.set(_, H);
    }
  }
  function yt() {
    let N = [];
    for (let _ of R) {
      let T = p.fetchers.get(_);
      te(T, "Expected fetcher: " + _),
        T.state === "loading" && (R.delete(_), N.push(_));
    }
    Ae(N);
  }
  function he(N) {
    let _ = [];
    for (let [T, H] of P)
      if (H < N) {
        let U = p.fetchers.get(T);
        te(U, "Expected fetcher: " + T),
          U.state === "loading" && (Le(T), P.delete(T), _.push(T));
      }
    return Ae(_), _.length > 0;
  }
  function O(N) {
    let _ = [];
    return (
      L.forEach((T, H) => {
        (!N || N(H)) && (T.cancel(), _.push(H), L.delete(H));
      }),
      _
    );
  }
  function A(N, _, T) {
    if (
      ((o = N), (a = _), (i = T || ((H) => H.key)), !s && p.navigation === cd)
    ) {
      s = !0;
      let H = V(p.location, p.matches);
      H != null && G({ restoreScrollPosition: H });
    }
    return () => {
      (o = null), (a = null), (i = null);
    };
  }
  function k(N, _) {
    if (o && i && a) {
      let T = _.map((U) => Iy(U, p.loaderData)),
        H = i(N, T) || N.key;
      o[H] = a();
    }
  }
  function V(N, _) {
    if (o && i && a) {
      let T = _.map((ae) => Iy(ae, p.loaderData)),
        H = i(N, T) || N.key,
        U = o[H];
      if (typeof U == "number") return U;
    }
    return null;
  }
  return (
    (d = {
      get basename() {
        return e.basename;
      },
      get state() {
        return p;
      },
      get routes() {
        return t;
      },
      initialize: F,
      subscribe: z,
      enableScrollRestoration: A,
      navigate: ne,
      fetch: le,
      revalidate: fe,
      createHref: (N) => e.history.createHref(N),
      encodeLocation: (N) => e.history.encodeLocation(N),
      getFetcher: oe,
      deleteFetcher: it,
      dispose: B,
      _internalFetchControllers: S,
      _internalActiveDeferreds: L,
    }),
    d
  );
}
function l2(e) {
  return e != null && "formData" in e;
}
function Ty(e, t, r) {
  r === void 0 && (r = !1);
  let n = typeof e == "string" ? e : Jt(e);
  if (!t || !l2(t)) return { path: n };
  if (t.formMethod && !h2(t.formMethod))
    return { path: n, error: Oo(405, { method: t.formMethod }) };
  let o;
  if (
    t.formData &&
    ((o = {
      formMethod: t.formMethod || "get",
      formAction: Ob(n),
      formEncType: (t && t.formEncType) || "application/x-www-form-urlencoded",
      formData: t.formData,
    }),
    _o(o.formMethod))
  )
    return { path: n, submission: o };
  let i = Cr(n);
  try {
    let a = Cb(t.formData);
    r && i.search && $b(i.search) && a.append("index", ""),
      (i.search = "?" + a);
  } catch {
    return { path: n, error: Oo(400) };
  }
  return { path: Jt(i), submission: o };
}
function u2(e, t) {
  let r = e;
  if (t) {
    let n = e.findIndex((o) => o.route.id === t);
    n >= 0 && (r = e.slice(0, n));
  }
  return r;
}
function Ry(e, t, r, n, o, i, a, s, l, u) {
  let c = l ? Object.values(l)[0] : s ? Object.values(s)[0] : void 0,
    d = l ? Object.keys(l)[0] : void 0,
    h = u2(t, d).filter(
      (m, b) =>
        m.route.loader != null &&
        (c2(e.loaderData, e.matches[b], m) ||
          i.some((y) => y === m.route.id) ||
          Ay(e.location, e.matches[b], r, n, m, o, c))
    ),
    w = [];
  return (
    u &&
      u.forEach((m, b) => {
        let [y, g, x] = m;
        a.includes(b)
          ? w.push([b, y, g, x])
          : o && Ay(y, g, r, y, g, o, c) && w.push([b, y, g, x]);
      }),
    [h, w]
  );
}
function c2(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    o = e[r.route.id] === void 0;
  return n || o;
}
function Eb(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (r && r.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Ay(e, t, r, n, o, i, a) {
  let s = Ds(e),
    l = t.params,
    u = Ds(n),
    c = o.params,
    d = Eb(t, o) || s.toString() === u.toString() || s.search !== u.search || i;
  if (o.route.shouldRevalidate) {
    let p = o.route.shouldRevalidate(
      $e({ currentUrl: s, currentParams: l, nextUrl: u, nextParams: c }, r, {
        actionResult: a,
        defaultShouldRevalidate: d,
      })
    );
    if (typeof p == "boolean") return p;
  }
  return d;
}
async function Ma(e, t, r, n, o, i, a, s) {
  o === void 0 && (o = "/"), i === void 0 && (i = !1), a === void 0 && (a = !1);
  let l,
    u,
    c,
    d = new Promise((h, w) => (c = w)),
    p = () => c();
  t.signal.addEventListener("abort", p);
  try {
    let h = r.route[e];
    te(
      h,
      "Could not find the " + e + ' to run on the "' + r.route.id + '" route'
    ),
      (u = await Promise.race([
        h({ request: t, params: r.params, context: s }),
        d,
      ])),
      te(
        u !== void 0,
        "You defined " +
          (e === "action" ? "an action" : "a loader") +
          " for route " +
          ('"' +
            r.route.id +
            "\" but didn't return anything from your `" +
            e +
            "` ") +
          "function. Please return a value or `null`."
      );
  } catch (h) {
    (l = xt.error), (u = h);
  } finally {
    t.signal.removeEventListener("abort", p);
  }
  if (p2(u)) {
    let h = u.status;
    if (n2.has(h)) {
      let b = u.headers.get("Location");
      if (
        (te(
          b,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !(/^[a-z+]+:\/\//i.test(b) || b.startsWith("//")))
      ) {
        let g = n.slice(0, n.indexOf(r) + 1),
          x = jc(g).map((C) => C.pathnameBase),
          S = Nm(b, x, new URL(t.url).pathname);
        if ((te(Jt(S), "Unable to resolve redirect location: " + b), o)) {
          let C = S.pathname;
          S.pathname = C === "/" ? o : Jr([o, C]);
        }
        b = Jt(S);
      }
      if (i) throw (u.headers.set("Location", b), u);
      return {
        type: xt.redirect,
        status: h,
        location: b,
        revalidate: u.headers.get("X-Remix-Revalidate") !== null,
      };
    }
    if (a) throw { type: l || xt.data, response: u };
    let w,
      m = u.headers.get("Content-Type");
    return (
      m && /\bapplication\/json\b/.test(m)
        ? (w = await u.json())
        : (w = await u.text()),
      l === xt.error
        ? { type: l, error: new Uc(h, u.statusText, w), headers: u.headers }
        : { type: xt.data, data: w, statusCode: u.status, headers: u.headers }
    );
  }
  return l === xt.error
    ? { type: l, error: u }
    : u instanceof bb
    ? { type: xt.deferred, deferredData: u }
    : { type: xt.data, data: u };
}
function Ia(e, t, r) {
  let n = Ds(Ob(e)).toString(),
    o = { signal: t };
  if (r && _o(r.formMethod)) {
    let { formMethod: i, formEncType: a, formData: s } = r;
    (o.method = i.toUpperCase()),
      (o.body = a === "application/x-www-form-urlencoded" ? Cb(s) : s);
  }
  return new Request(n, o);
}
function Cb(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries())
    te(
      typeof n == "string",
      'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'
    ),
      t.append(r, n);
  return t;
}
function f2(e, t, r, n, o) {
  let i = {},
    a = null,
    s,
    l = !1,
    u = {};
  return (
    r.forEach((c, d) => {
      let p = t[d].route.id;
      if (
        (te(!zi(c), "Cannot handle redirect results in processLoaderData"),
        cs(c))
      ) {
        let h = Ai(e, p),
          w = c.error;
        n && ((w = Object.values(n)[0]), (n = void 0)),
          (a = a || {}),
          a[h.route.id] == null && (a[h.route.id] = w),
          (i[p] = void 0),
          l || ((l = !0), (s = Tm(c.error) ? c.error.status : 500)),
          c.headers && (u[p] = c.headers);
      } else
        Ro(c)
          ? (o && o.set(p, c.deferredData), (i[p] = c.deferredData.data))
          : ((i[p] = c.data),
            c.statusCode != null &&
              c.statusCode !== 200 &&
              !l &&
              (s = c.statusCode),
            c.headers && (u[p] = c.headers));
    }),
    n && ((a = n), (i[Object.keys(n)[0]] = void 0)),
    { loaderData: i, errors: a, statusCode: s || 200, loaderHeaders: u }
  );
}
function ky(e, t, r, n, o, i, a, s) {
  let { loaderData: l, errors: u } = f2(t, r, n, o, s);
  for (let c = 0; c < i.length; c++) {
    let [d, , p] = i[c];
    te(
      a !== void 0 && a[c] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let h = a[c];
    if (cs(h)) {
      let w = Ai(e.matches, p.route.id);
      (u && u[w.route.id]) || (u = $e({}, u, { [w.route.id]: h.error })),
        e.fetchers.delete(d);
    } else {
      if (zi(h)) throw new Error("Unhandled fetcher revalidation redirect");
      if (Ro(h)) throw new Error("Unhandled fetcher deferred data");
      {
        let w = {
          state: "idle",
          data: h.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          " _hasFetcherDoneAnything ": !0,
        };
        e.fetchers.set(d, w);
      }
    }
  }
  return { loaderData: l, errors: u };
}
function Dy(e, t, r, n) {
  let o = $e({}, t);
  for (let i of r) {
    let a = i.route.id;
    if (
      (t.hasOwnProperty(a)
        ? t[a] !== void 0 && (o[a] = t[a])
        : e[a] !== void 0 && (o[a] = e[a]),
      n && n.hasOwnProperty(a))
    )
      break;
  }
  return o;
}
function Ai(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  );
}
function Fy(e) {
  let t = e.find((r) => r.index || !r.path || r.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Oo(e, t) {
  let { pathname: r, routeId: n, method: o } = t === void 0 ? {} : t,
    i = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((i = "Bad Request"),
        o && r && n
          ? (a =
              "You made a " +
              o +
              ' request to "' +
              r +
              '" but ' +
              ('did not provide a `loader` for route "' + n + '", ') +
              "so there is no way to handle the request.")
          : (a = "Cannot submit binary form data using GET"))
      : e === 403
      ? ((i = "Forbidden"),
        (a = 'Route "' + n + '" does not match URL "' + r + '"'))
      : e === 404
      ? ((i = "Not Found"), (a = 'No route matches URL "' + r + '"'))
      : e === 405 &&
        ((i = "Method Not Allowed"),
        o && r && n
          ? (a =
              "You made a " +
              o.toUpperCase() +
              ' request to "' +
              r +
              '" but ' +
              ('did not provide an `action` for route "' + n + '", ') +
              "so there is no way to handle the request.")
          : o && (a = 'Invalid request method "' + o.toUpperCase() + '"')),
    new Uc(e || 500, i, new Error(a), !0)
  );
}
function Ly(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    if (zi(r)) return r;
  }
}
function Ob(e) {
  let t = typeof e == "string" ? Cr(e) : e;
  return Jt($e({}, t, { hash: "" }));
}
function d2(e, t) {
  return (
    e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash
  );
}
function Ro(e) {
  return e.type === xt.deferred;
}
function cs(e) {
  return e.type === xt.error;
}
function zi(e) {
  return (e && e.type) === xt.redirect;
}
function p2(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body != "undefined"
  );
}
function h2(e) {
  return r2.has(e);
}
function _o(e) {
  return e2.has(e);
}
async function My(e, t, r, n, o, i) {
  for (let a = 0; a < r.length; a++) {
    let s = r[a],
      l = t[a],
      u = e.find((d) => d.route.id === l.route.id),
      c = u != null && !Eb(u, l) && (i && i[l.route.id]) !== void 0;
    Ro(s) &&
      (o || c) &&
      (await _b(s, n, o).then((d) => {
        d && (r[a] = d || r[a]);
      }));
  }
}
async function _b(e, t, r) {
  if ((r === void 0 && (r = !1), !(await e.deferredData.resolveData(t)))) {
    if (r)
      try {
        return { type: xt.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: xt.error, error: o };
      }
    return { type: xt.data, data: e.deferredData.data };
  }
}
function $b(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Iy(e, t) {
  let { route: r, pathname: n, params: o } = e;
  return { id: r.id, pathname: n, params: o, data: t[r.id], handle: r.handle };
}
function jy(e, t) {
  let r = typeof t == "string" ? Cr(t).search : t.search;
  if (e[e.length - 1].route.index && $b(r || "")) return e[e.length - 1];
  let n = jc(e);
  return n[n.length - 1];
}
/**
 * React Router v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ju() {
  return (
    (Ju = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ju.apply(this, arguments)
  );
}
function m2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const v2 = typeof Object.is == "function" ? Object.is : m2,
  { useState: g2, useEffect: y2, useLayoutEffect: w2, useDebugValue: x2 } = Kd;
function b2(e, t, r) {
  const n = t(),
    [{ inst: o }, i] = g2({ inst: { value: n, getSnapshot: t } });
  return (
    w2(() => {
      (o.value = n), (o.getSnapshot = t), fd(o) && i({ inst: o });
    }, [e, n, t]),
    y2(
      () => (
        fd(o) && i({ inst: o }),
        e(() => {
          fd(o) && i({ inst: o });
        })
      ),
      [e]
    ),
    x2(n),
    n
  );
}
function fd(e) {
  const t = e.getSnapshot,
    r = e.value;
  try {
    const n = t();
    return !v2(r, n);
  } catch {
    return !0;
  }
}
function S2(e, t, r) {
  return t();
}
const E2 =
    typeof window != "undefined" &&
    typeof window.document != "undefined" &&
    typeof window.document.createElement != "undefined",
  C2 = !E2,
  O2 = C2 ? S2 : b2,
  _2 = "useSyncExternalStore" in Kd ? ((e) => e.useSyncExternalStore)(Kd) : O2,
  Pb = v.exports.createContext(null),
  Xs = v.exports.createContext(null),
  Xo = v.exports.createContext(null),
  Zu = v.exports.createContext(null),
  Jo = v.exports.createContext(null),
  pa = v.exports.createContext(null),
  Or = v.exports.createContext({ outlet: null, matches: [] }),
  Nb = v.exports.createContext(null);
function Tb(e, t) {
  let { relative: r } = t === void 0 ? {} : t;
  po() || te(!1);
  let { basename: n, navigator: o } = v.exports.useContext(Jo),
    { hash: i, pathname: a, search: s } = Js(e, { relative: r }),
    l = a;
  return (
    n !== "/" && (l = a === "/" ? n : Jr([n, a])),
    o.createHref({ pathname: l, search: s, hash: i })
  );
}
function po() {
  return v.exports.useContext(pa) != null;
}
function zr() {
  return po() || te(!1), v.exports.useContext(pa).location;
}
function $2() {
  return v.exports.useContext(pa).navigationType;
}
function P2(e) {
  po() || te(!1);
  let { pathname: t } = zr();
  return v.exports.useMemo(() => Pm(e, t), [t, e]);
}
function It() {
  po() || te(!1);
  let { basename: e, navigator: t } = v.exports.useContext(Jo),
    { matches: r } = v.exports.useContext(Or),
    { pathname: n } = zr(),
    o = JSON.stringify(jc(r).map((s) => s.pathnameBase)),
    i = v.exports.useRef(!1);
  return (
    v.exports.useEffect(() => {
      i.current = !0;
    }),
    v.exports.useCallback(
      function (s, l) {
        if ((l === void 0 && (l = {}), !i.current)) return;
        if (typeof s == "number") {
          t.go(s);
          return;
        }
        let u = Nm(s, JSON.parse(o), n, l.relative === "path");
        e !== "/" &&
          (u.pathname = u.pathname === "/" ? e : Jr([e, u.pathname])),
          (l.replace ? t.replace : t.push)(u, l.state, l);
      },
      [e, t, o, n]
    )
  );
}
const Rb = v.exports.createContext(null);
function N2() {
  return v.exports.useContext(Rb);
}
function Ab(e) {
  let t = v.exports.useContext(Or).outlet;
  return t && v.exports.createElement(Rb.Provider, { value: e }, t);
}
function Zo() {
  let { matches: e } = v.exports.useContext(Or),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Js(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { matches: n } = v.exports.useContext(Or),
    { pathname: o } = zr(),
    i = JSON.stringify(jc(n).map((a) => a.pathnameBase));
  return v.exports.useMemo(
    () => Nm(e, JSON.parse(i), o, r === "path"),
    [e, i, o, r]
  );
}
function kb(e, t) {
  po() || te(!1);
  let { navigator: r } = v.exports.useContext(Jo),
    n = v.exports.useContext(Xo),
    { matches: o } = v.exports.useContext(Or),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : "/";
  i && i.route;
  let l = zr(),
    u;
  if (t) {
    var c;
    let m = typeof t == "string" ? Cr(t) : t;
    s === "/" ||
      ((c = m.pathname) == null ? void 0 : c.startsWith(s)) ||
      te(!1),
      (u = m);
  } else u = l;
  let d = u.pathname || "/",
    p = s === "/" ? d : d.slice(s.length) || "/",
    h = Ri(e, { pathname: p }),
    w = Db(
      h &&
        h.map((m) =>
          Object.assign({}, m, {
            params: Object.assign({}, a, m.params),
            pathname: Jr([
              s,
              r.encodeLocation
                ? r.encodeLocation(m.pathname).pathname
                : m.pathname,
            ]),
            pathnameBase:
              m.pathnameBase === "/"
                ? s
                : Jr([
                    s,
                    r.encodeLocation
                      ? r.encodeLocation(m.pathnameBase).pathname
                      : m.pathnameBase,
                  ]),
          })
        ),
      o,
      n || void 0
    );
  return t && w
    ? v.exports.createElement(
        pa.Provider,
        {
          value: {
            location: Ju(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: Ue.Pop,
          },
        },
        w
      )
    : w;
}
function T2() {
  let e = Ib(),
    t = Tm(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    n = "rgba(200,200,200, 0.5)",
    o = { padding: "0.5rem", backgroundColor: n },
    i = { padding: "2px 4px", backgroundColor: n };
  return v.exports.createElement(
    v.exports.Fragment,
    null,
    v.exports.createElement("h2", null, "Unhandled Thrown Error!"),
    v.exports.createElement("h3", { style: { fontStyle: "italic" } }, t),
    r ? v.exports.createElement("pre", { style: o }, r) : null,
    v.exports.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"),
    v.exports.createElement(
      "p",
      null,
      "You can provide a way better UX than this when your app throws errors by providing your own\xA0",
      v.exports.createElement("code", { style: i }, "errorElement"),
      " props on\xA0",
      v.exports.createElement("code", { style: i }, "<Route>")
    )
  );
}
class R2 extends v.exports.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || r.error, location: r.location };
  }
  componentDidCatch(t, r) {
    console.error(
      "React Router caught the following error during render",
      t,
      r
    );
  }
  render() {
    return this.state.error
      ? v.exports.createElement(
          Or.Provider,
          { value: this.props.routeContext },
          v.exports.createElement(Nb.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function A2(e) {
  let { routeContext: t, match: r, children: n } = e,
    o = v.exports.useContext(Pb);
  return (
    o && r.route.errorElement && (o._deepestRenderedBoundaryId = r.route.id),
    v.exports.createElement(Or.Provider, { value: t }, n)
  );
}
function Db(e, t, r) {
  if ((t === void 0 && (t = []), e == null))
    if (r != null && r.errors) e = r.matches;
    else return null;
  let n = e,
    o = r == null ? void 0 : r.errors;
  if (o != null) {
    let i = n.findIndex(
      (a) => a.route.id && (o == null ? void 0 : o[a.route.id])
    );
    i >= 0 || te(!1), (n = n.slice(0, Math.min(n.length, i + 1)));
  }
  return n.reduceRight((i, a, s) => {
    let l = a.route.id ? (o == null ? void 0 : o[a.route.id]) : null,
      u = r ? a.route.errorElement || v.exports.createElement(T2, null) : null,
      c = t.concat(n.slice(0, s + 1)),
      d = () =>
        v.exports.createElement(
          A2,
          { match: a, routeContext: { outlet: i, matches: c } },
          l ? u : a.route.element !== void 0 ? a.route.element : i
        );
    return r && (a.route.errorElement || s === 0)
      ? v.exports.createElement(R2, {
          location: r.location,
          component: u,
          error: l,
          children: d(),
          routeContext: { outlet: null, matches: c },
        })
      : d();
  }, null);
}
var jp;
(function (e) {
  e.UseRevalidator = "useRevalidator";
})(jp || (jp = {}));
var Br;
(function (e) {
  (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(Br || (Br = {}));
function k2(e) {
  let t = v.exports.useContext(Xs);
  return t || te(!1), t;
}
function ei(e) {
  let t = v.exports.useContext(Xo);
  return t || te(!1), t;
}
function D2(e) {
  let t = v.exports.useContext(Or);
  return t || te(!1), t;
}
function Fb(e) {
  let t = D2(),
    r = t.matches[t.matches.length - 1];
  return r.route.id || te(!1), r.route.id;
}
function Lb() {
  return ei(Br.UseNavigation).navigation;
}
function F2() {
  let e = k2(jp.UseRevalidator),
    t = ei(Br.UseRevalidator);
  return { revalidate: e.router.revalidate, state: t.revalidation };
}
function Mb() {
  let { matches: e, loaderData: t } = ei(Br.UseMatches);
  return v.exports.useMemo(
    () =>
      e.map((r) => {
        let { pathname: n, params: o } = r;
        return {
          id: r.route.id,
          pathname: n,
          params: o,
          data: t[r.route.id],
          handle: r.route.handle,
        };
      }),
    [e, t]
  );
}
function L2() {
  let e = ei(Br.UseLoaderData),
    t = Fb(Br.UseLoaderData);
  if (e.errors && e.errors[t] != null) {
    console.error(
      "You cannot `useLoaderData` in an errorElement (routeId: " + t + ")"
    );
    return;
  }
  return e.loaderData[t];
}
function M2(e) {
  return ei(Br.UseRouteLoaderData).loaderData[e];
}
function I2() {
  let e = ei(Br.UseActionData);
  return (
    v.exports.useContext(Or) || te(!1),
    Object.values((e == null ? void 0 : e.actionData) || {})[0]
  );
}
function Ib() {
  var e;
  let t = v.exports.useContext(Nb),
    r = ei(Br.UseRouteError),
    n = Fb(Br.UseRouteError);
  return t || ((e = r.errors) == null ? void 0 : e[n]);
}
function jb() {
  let e = v.exports.useContext(Zu);
  return e == null ? void 0 : e._data;
}
function j2() {
  let e = v.exports.useContext(Zu);
  return e == null ? void 0 : e._error;
}
function U2(e) {
  let { fallbackElement: t, router: r } = e,
    n = _2(
      r.subscribe,
      () => r.state,
      () => r.state
    ),
    o = v.exports.useMemo(
      () => ({
        createHref: r.createHref,
        encodeLocation: r.encodeLocation,
        go: (a) => r.navigate(a),
        push: (a, s, l) =>
          r.navigate(a, {
            state: s,
            preventScrollReset: l == null ? void 0 : l.preventScrollReset,
          }),
        replace: (a, s, l) =>
          r.navigate(a, {
            replace: !0,
            state: s,
            preventScrollReset: l == null ? void 0 : l.preventScrollReset,
          }),
      }),
      [r]
    ),
    i = r.basename || "/";
  return v.exports.createElement(
    Xs.Provider,
    { value: { router: r, navigator: o, static: !1, basename: i } },
    v.exports.createElement(
      Xo.Provider,
      { value: n },
      v.exports.createElement(
        ha,
        {
          basename: r.basename,
          location: r.state.location,
          navigationType: r.state.historyAction,
          navigator: o,
        },
        r.state.initialized ? v.exports.createElement(km, null) : t
      )
    )
  );
}
function B2(e) {
  let { basename: t, children: r, initialEntries: n, initialIndex: o } = e,
    i = v.exports.useRef();
  i.current == null &&
    (i.current = fb({ initialEntries: n, initialIndex: o, v5Compat: !0 }));
  let a = i.current,
    [s, l] = v.exports.useState({ action: a.action, location: a.location });
  return (
    v.exports.useLayoutEffect(() => a.listen(l), [a]),
    v.exports.createElement(ha, {
      basename: t,
      children: r,
      location: s.location,
      navigationType: s.action,
      navigator: a,
    })
  );
}
function Am(e) {
  let { to: t, replace: r, state: n, relative: o } = e;
  po() || te(!1);
  let i = v.exports.useContext(Xo),
    a = It();
  return (
    v.exports.useEffect(() => {
      (i && i.navigation.state !== "idle") ||
        a(t, { replace: r, state: n, relative: o });
    }),
    null
  );
}
function z2(e) {
  return Ab(e.context);
}
function Je(e) {
  te(!1);
}
function ha(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: n,
    navigationType: o = Ue.Pop,
    navigator: i,
    static: a = !1,
  } = e;
  po() && te(!1);
  let s = t.replace(/^\/*/, "/"),
    l = v.exports.useMemo(
      () => ({ basename: s, navigator: i, static: a }),
      [s, i, a]
    );
  typeof n == "string" && (n = Cr(n));
  let {
      pathname: u = "/",
      search: c = "",
      hash: d = "",
      state: p = null,
      key: h = "default",
    } = n,
    w = v.exports.useMemo(() => {
      let m = wb(u, s);
      return m == null
        ? null
        : { pathname: m, search: c, hash: d, state: p, key: h };
    }, [s, u, c, d, p, h]);
  return w == null
    ? null
    : v.exports.createElement(
        Jo.Provider,
        { value: l },
        v.exports.createElement(pa.Provider, {
          children: r,
          value: { location: w, navigationType: o },
        })
      );
}
function km(e) {
  let { children: t, location: r } = e,
    n = v.exports.useContext(Xs),
    o = n && !t ? n.router.routes : Fs(t);
  return kb(o, r);
}
function H2(e) {
  let { children: t, errorElement: r, resolve: n } = e;
  return v.exports.createElement(
    W2,
    { resolve: n, errorElement: r },
    v.exports.createElement(K2, null, t)
  );
}
var rr;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(rr || (rr = {}));
const V2 = new Promise(() => {});
class W2 extends v.exports.Component {
  constructor(t) {
    super(t), (this.state = { error: null });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  componentDidCatch(t, r) {
    console.error("<Await> caught the following error during render", t, r);
  }
  render() {
    let { children: t, errorElement: r, resolve: n } = this.props,
      o = null,
      i = rr.pending;
    if (!(n instanceof Promise))
      (i = rr.success),
        (o = Promise.resolve()),
        Object.defineProperty(o, "_tracked", { get: () => !0 }),
        Object.defineProperty(o, "_data", { get: () => n });
    else if (this.state.error) {
      i = rr.error;
      let a = this.state.error;
      (o = Promise.reject().catch(() => {})),
        Object.defineProperty(o, "_tracked", { get: () => !0 }),
        Object.defineProperty(o, "_error", { get: () => a });
    } else
      n._tracked
        ? ((o = n),
          (i =
            o._error !== void 0
              ? rr.error
              : o._data !== void 0
              ? rr.success
              : rr.pending))
        : ((i = rr.pending),
          Object.defineProperty(n, "_tracked", { get: () => !0 }),
          (o = n.then(
            (a) => Object.defineProperty(n, "_data", { get: () => a }),
            (a) => Object.defineProperty(n, "_error", { get: () => a })
          )));
    if (i === rr.error && o._error instanceof Xu) throw V2;
    if (i === rr.error && !r) throw o._error;
    if (i === rr.error)
      return v.exports.createElement(Zu.Provider, { value: o, children: r });
    if (i === rr.success)
      return v.exports.createElement(Zu.Provider, { value: o, children: t });
    throw o;
  }
}
function K2(e) {
  let { children: t } = e,
    r = jb();
  return typeof t == "function"
    ? t(r)
    : v.exports.createElement(v.exports.Fragment, null, t);
}
function Fs(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return (
    v.exports.Children.forEach(e, (n, o) => {
      if (!v.exports.isValidElement(n)) return;
      if (n.type === v.exports.Fragment) {
        r.push.apply(r, Fs(n.props.children, t));
        return;
      }
      n.type !== Je && te(!1), !n.props.index || !n.props.children || te(!1);
      let i = [...t, o],
        a = {
          id: n.props.id || i.join("-"),
          caseSensitive: n.props.caseSensitive,
          element: n.props.element,
          index: n.props.index,
          path: n.props.path,
          loader: n.props.loader,
          action: n.props.action,
          errorElement: n.props.errorElement,
          hasErrorBoundary: n.props.errorElement != null,
          shouldRevalidate: n.props.shouldRevalidate,
          handle: n.props.handle,
        };
      n.props.children && (a.children = Fs(n.props.children, i)), r.push(a);
    }),
    r
  );
}
function q2(e) {
  return Db(e);
}
function Zs(e) {
  return e.map((t) => {
    let r = Ju({}, t);
    return (
      r.hasErrorBoundary == null &&
        (r.hasErrorBoundary = r.errorElement != null),
      r.children && (r.children = Zs(r.children)),
      r
    );
  });
}
function G2(e, t) {
  return Rm({
    basename: t == null ? void 0 : t.basename,
    history: fb({
      initialEntries: t == null ? void 0 : t.initialEntries,
      initialIndex: t == null ? void 0 : t.initialIndex,
    }),
    hydrationData: t == null ? void 0 : t.hydrationData,
    routes: Zs(e),
  }).initialize();
}
/**
 * React Router DOM v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function rn() {
  return (
    (rn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    rn.apply(this, arguments)
  );
}
function Dm(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
const au = "get",
  dd = "application/x-www-form-urlencoded";
function Bc(e) {
  return e != null && typeof e.tagName == "string";
}
function Y2(e) {
  return Bc(e) && e.tagName.toLowerCase() === "button";
}
function Q2(e) {
  return Bc(e) && e.tagName.toLowerCase() === "form";
}
function X2(e) {
  return Bc(e) && e.tagName.toLowerCase() === "input";
}
function J2(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Z2(e, t) {
  return e.button === 0 && (!t || t === "_self") && !J2(e);
}
function ec(e) {
  return (
    e === void 0 && (e = ""),
    new URLSearchParams(
      typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, r) => {
            let n = e[r];
            return t.concat(Array.isArray(n) ? n.map((o) => [r, o]) : [[r, n]]);
          }, [])
    )
  );
}
function eN(e, t) {
  let r = ec(e);
  for (let n of t.keys())
    r.has(n) ||
      t.getAll(n).forEach((o) => {
        r.append(n, o);
      });
  return r;
}
function tN(e, t, r) {
  let n, o, i, a;
  if (Q2(e)) {
    let c = r.submissionTrigger;
    (n = r.method || e.getAttribute("method") || au),
      (o = r.action || e.getAttribute("action") || t),
      (i = r.encType || e.getAttribute("enctype") || dd),
      (a = new FormData(e)),
      c && c.name && a.append(c.name, c.value);
  } else if (Y2(e) || (X2(e) && (e.type === "submit" || e.type === "image"))) {
    let c = e.form;
    if (c == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    (n =
      r.method ||
      e.getAttribute("formmethod") ||
      c.getAttribute("method") ||
      au),
      (o =
        r.action ||
        e.getAttribute("formaction") ||
        c.getAttribute("action") ||
        t),
      (i =
        r.encType ||
        e.getAttribute("formenctype") ||
        c.getAttribute("enctype") ||
        dd),
      (a = new FormData(c)),
      e.name && a.append(e.name, e.value);
  } else {
    if (Bc(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    if (
      ((n = r.method || au),
      (o = r.action || t),
      (i = r.encType || dd),
      e instanceof FormData)
    )
      a = e;
    else if (((a = new FormData()), e instanceof URLSearchParams))
      for (let [c, d] of e) a.append(c, d);
    else if (e != null) for (let c of Object.keys(e)) a.append(c, e[c]);
  }
  let { protocol: s, host: l } = window.location;
  return {
    url: new URL(o, s + "//" + l),
    method: n.toLowerCase(),
    encType: i,
    formData: a,
  };
}
const rN = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  nN = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ],
  oN = [
    "reloadDocument",
    "replace",
    "method",
    "action",
    "onSubmit",
    "fetcherKey",
    "routeId",
    "relative",
  ];
function iN(e, t) {
  return Rm({
    basename: t == null ? void 0 : t.basename,
    history: db({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || Ub(),
    routes: Zs(e),
  }).initialize();
}
function aN(e, t) {
  return Rm({
    basename: t == null ? void 0 : t.basename,
    history: pb({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || Ub(),
    routes: Zs(e),
  }).initialize();
}
function Ub() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = rn({}, t, { errors: sN(t.errors) })), t;
}
function sN(e) {
  if (!e) return null;
  let t = Object.entries(e),
    r = {};
  for (let [n, o] of t)
    if (o && o.__type === "RouteErrorResponse")
      r[n] = new Uc(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      let i = new Error(o.message);
      (i.stack = ""), (r[n] = i);
    } else r[n] = o;
  return r;
}
function Bb(e) {
  let { basename: t, children: r, window: n } = e,
    o = v.exports.useRef();
  o.current == null && (o.current = db({ window: n, v5Compat: !0 }));
  let i = o.current,
    [a, s] = v.exports.useState({ action: i.action, location: i.location });
  return (
    v.exports.useLayoutEffect(() => i.listen(s), [i]),
    v.exports.createElement(ha, {
      basename: t,
      children: r,
      location: a.location,
      navigationType: a.action,
      navigator: i,
    })
  );
}
function lN(e) {
  let { basename: t, children: r, window: n } = e,
    o = v.exports.useRef();
  o.current == null && (o.current = pb({ window: n, v5Compat: !0 }));
  let i = o.current,
    [a, s] = v.exports.useState({ action: i.action, location: i.location });
  return (
    v.exports.useLayoutEffect(() => i.listen(s), [i]),
    v.exports.createElement(ha, {
      basename: t,
      children: r,
      location: a.location,
      navigationType: a.action,
      navigator: i,
    })
  );
}
function uN(e) {
  let { basename: t, children: r, history: n } = e;
  const [o, i] = v.exports.useState({ action: n.action, location: n.location });
  return (
    v.exports.useLayoutEffect(() => n.listen(i), [n]),
    v.exports.createElement(ha, {
      basename: t,
      children: r,
      location: o.location,
      navigationType: o.action,
      navigator: n,
    })
  );
}
const Nt = v.exports.forwardRef(function (t, r) {
    let {
        onClick: n,
        relative: o,
        reloadDocument: i,
        replace: a,
        state: s,
        target: l,
        to: u,
        preventScrollReset: c,
      } = t,
      d = Dm(t, rN),
      p = Tb(u, { relative: o }),
      h = Vb(u, {
        replace: a,
        state: s,
        target: l,
        preventScrollReset: c,
        relative: o,
      });
    function w(m) {
      n && n(m), m.defaultPrevented || h(m);
    }
    return v.exports.createElement(
      "a",
      rn({}, d, { href: p, onClick: i ? n : w, ref: r, target: l })
    );
  }),
  qr = v.exports.forwardRef(function (t, r) {
    let {
        "aria-current": n = "page",
        caseSensitive: o = !1,
        className: i = "",
        end: a = !1,
        style: s,
        to: l,
        children: u,
      } = t,
      c = Dm(t, nN),
      d = Js(l, { relative: c.relative }),
      p = zr(),
      h = v.exports.useContext(Xo),
      { navigator: w } = v.exports.useContext(Jo),
      m = w.encodeLocation ? w.encodeLocation(d).pathname : d.pathname,
      b = p.pathname,
      y =
        h && h.navigation && h.navigation.location
          ? h.navigation.location.pathname
          : null;
    o ||
      ((b = b.toLowerCase()),
      (y = y ? y.toLowerCase() : null),
      (m = m.toLowerCase()));
    let g = b === m || (!a && b.startsWith(m) && b.charAt(m.length) === "/"),
      x =
        y != null &&
        (y === m || (!a && y.startsWith(m) && y.charAt(m.length) === "/")),
      S = g ? n : void 0,
      C;
    typeof i == "function"
      ? (C = i({ isActive: g, isPending: x }))
      : (C = [i, g ? "active" : null, x ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let $ = typeof s == "function" ? s({ isActive: g, isPending: x }) : s;
    return v.exports.createElement(
      Nt,
      rn({}, c, { "aria-current": S, className: C, ref: r, style: $, to: l }),
      typeof u == "function" ? u({ isActive: g, isPending: x }) : u
    );
  }),
  cN = v.exports.forwardRef((e, t) =>
    v.exports.createElement(zb, rn({}, e, { ref: t }))
  ),
  zb = v.exports.forwardRef((e, t) => {
    let {
        reloadDocument: r,
        replace: n,
        method: o = au,
        action: i,
        onSubmit: a,
        fetcherKey: s,
        routeId: l,
        relative: u,
      } = e,
      c = Dm(e, oN),
      d = Lm(s, l),
      p = o.toLowerCase() === "get" ? "get" : "post",
      h = Mm(i, { relative: u }),
      w = (m) => {
        if ((a && a(m), m.defaultPrevented)) return;
        m.preventDefault();
        let b = m.nativeEvent.submitter,
          y = (b == null ? void 0 : b.getAttribute("formmethod")) || o;
        d(b || m.currentTarget, { method: y, replace: n, relative: u });
      };
    return v.exports.createElement(
      "form",
      rn({ ref: t, method: p, action: h, onSubmit: r ? a : w }, c)
    );
  });
function fN(e) {
  let { getKey: t, storageKey: r } = e;
  return Wb({ getKey: t, storageKey: r }), null;
}
var Ls;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Ls || (Ls = {}));
var tc;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(tc || (tc = {}));
function Fm(e) {
  let t = v.exports.useContext(Xs);
  return t || te(!1), t;
}
function Hb(e) {
  let t = v.exports.useContext(Xo);
  return t || te(!1), t;
}
function Vb(e, t) {
  let {
      target: r,
      replace: n,
      state: o,
      preventScrollReset: i,
      relative: a,
    } = t === void 0 ? {} : t,
    s = It(),
    l = zr(),
    u = Js(e, { relative: a });
  return v.exports.useCallback(
    (c) => {
      if (Z2(c, r)) {
        c.preventDefault();
        let d = n !== void 0 ? n : Jt(l) === Jt(u);
        s(e, { replace: d, state: o, preventScrollReset: i, relative: a });
      }
    },
    [l, s, u, n, o, r, e, i, a]
  );
}
function dN(e) {
  let t = v.exports.useRef(ec(e)),
    r = zr(),
    n = v.exports.useMemo(() => eN(r.search, t.current), [r.search]),
    o = It(),
    i = v.exports.useCallback(
      (a, s) => {
        const l = ec(typeof a == "function" ? a(n) : a);
        o("?" + l, s);
      },
      [o, n]
    );
  return [n, i];
}
function pN() {
  return Lm();
}
function Lm(e, t) {
  let { router: r } = Fm(Ls.UseSubmitImpl),
    n = Mm();
  return v.exports.useCallback(
    function (o, i) {
      if ((i === void 0 && (i = {}), typeof document == "undefined"))
        throw new Error(
          "You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead."
        );
      let { method: a, encType: s, formData: l, url: u } = tN(o, n, i),
        c = u.pathname + u.search,
        d = { replace: i.replace, formData: l, formMethod: a, formEncType: s };
      e ? (t == null && te(!1), r.fetch(e, t, c, d)) : r.navigate(c, d);
    },
    [n, r, e, t]
  );
}
function Mm(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { basename: n } = v.exports.useContext(Jo),
    o = v.exports.useContext(Or);
  o || te(!1);
  let [i] = o.matches.slice(-1),
    a = rn({}, Js(e || ".", { relative: r })),
    s = zr();
  if (e == null && ((a.search = s.search), (a.hash = s.hash), i.route.index)) {
    let l = new URLSearchParams(a.search);
    l.delete("index"), (a.search = l.toString() ? "?" + l.toString() : "");
  }
  return (
    (!e || e === ".") &&
      i.route.index &&
      (a.search = a.search ? a.search.replace(/^\?/, "?index&") : "?index"),
    n !== "/" && (a.pathname = a.pathname === "/" ? n : Jr([n, a.pathname])),
    Jt(a)
  );
}
function hN(e, t) {
  return v.exports.forwardRef((n, o) =>
    v.exports.createElement(
      zb,
      rn({}, n, { ref: o, fetcherKey: e, routeId: t })
    )
  );
}
let mN = 0;
function vN() {
  var e;
  let { router: t } = Fm(Ls.UseFetcher),
    r = v.exports.useContext(Or);
  r || te(!1);
  let n = (e = r.matches[r.matches.length - 1]) == null ? void 0 : e.route.id;
  n == null && te(!1);
  let [o] = v.exports.useState(() => String(++mN)),
    [i] = v.exports.useState(() => (n || te(!1), hN(o, n))),
    [a] = v.exports.useState(() => (c) => {
      t || te(!1), n || te(!1), t.fetch(o, n, c);
    }),
    s = Lm(o, n),
    l = t.getFetcher(o),
    u = v.exports.useMemo(
      () => rn({ Form: i, submit: s, load: a }, l),
      [l, i, s, a]
    );
  return (
    v.exports.useEffect(
      () => () => {
        if (!t) {
          console.warn("No fetcher available to clean up from useFetcher()");
          return;
        }
        t.deleteFetcher(o);
      },
      [t, o]
    ),
    u
  );
}
function gN() {
  return [...Hb(tc.UseFetchers).fetchers.values()];
}
const Uy = "react-router-scroll-positions";
let Ll = {};
function Wb(e) {
  let { getKey: t, storageKey: r } = e === void 0 ? {} : e,
    { router: n } = Fm(Ls.UseScrollRestoration),
    { restoreScrollPosition: o, preventScrollReset: i } = Hb(
      tc.UseScrollRestoration
    ),
    a = zr(),
    s = Mb(),
    l = Lb();
  v.exports.useEffect(
    () => (
      (window.history.scrollRestoration = "manual"),
      () => {
        window.history.scrollRestoration = "auto";
      }
    ),
    []
  ),
    Kb(
      v.exports.useCallback(() => {
        if (l.state === "idle") {
          let u = (t ? t(a, s) : null) || a.key;
          Ll[u] = window.scrollY;
        }
        sessionStorage.setItem(r || Uy, JSON.stringify(Ll)),
          (window.history.scrollRestoration = "auto");
      }, [r, t, l.state, a, s])
    ),
    typeof document != "undefined" &&
      (v.exports.useLayoutEffect(() => {
        try {
          let u = sessionStorage.getItem(r || Uy);
          u && (Ll = JSON.parse(u));
        } catch {}
      }, [r]),
      v.exports.useLayoutEffect(() => {
        let u =
          n == null
            ? void 0
            : n.enableScrollRestoration(Ll, () => window.scrollY, t);
        return () => u && u();
      }, [n, t]),
      v.exports.useLayoutEffect(() => {
        if (o !== !1) {
          if (typeof o == "number") {
            window.scrollTo(0, o);
            return;
          }
          if (a.hash) {
            let u = document.getElementById(a.hash.slice(1));
            if (u) {
              u.scrollIntoView();
              return;
            }
          }
          i !== !0 && window.scrollTo(0, 0);
        }
      }, [a, o, i]));
}
function Kb(e) {
  v.exports.useEffect(
    () => (
      window.addEventListener("beforeunload", e),
      () => {
        window.removeEventListener("beforeunload", e);
      }
    ),
    [e]
  );
}
var yN = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        BrowserRouter: Bb,
        Form: cN,
        HashRouter: lN,
        Link: Nt,
        NavLink: qr,
        ScrollRestoration: fN,
        UNSAFE_useScrollRestoration: Wb,
        createBrowserRouter: iN,
        createHashRouter: aN,
        createSearchParams: ec,
        unstable_HistoryRouter: uN,
        useBeforeUnload: Kb,
        useFetcher: vN,
        useFetchers: gN,
        useFormAction: Mm,
        useLinkClickHandler: Vb,
        useSearchParams: dN,
        useSubmit: pN,
        AbortedDeferredError: Xu,
        Await: H2,
        MemoryRouter: B2,
        Navigate: Am,
        get NavigationType() {
          return Ue;
        },
        Outlet: z2,
        Route: Je,
        Router: ha,
        RouterProvider: U2,
        Routes: km,
        UNSAFE_DataRouterContext: Xs,
        UNSAFE_DataRouterStateContext: Xo,
        UNSAFE_DataStaticRouterContext: Pb,
        UNSAFE_LocationContext: pa,
        UNSAFE_NavigationContext: Jo,
        UNSAFE_RouteContext: Or,
        UNSAFE_enhanceManualRouteObjects: Zs,
        createMemoryRouter: G2,
        createPath: Jt,
        createRoutesFromChildren: Fs,
        createRoutesFromElements: Fs,
        defer: JP,
        generatePath: BP,
        isRouteErrorResponse: Tm,
        json: YP,
        matchPath: Pm,
        matchRoutes: Ri,
        parsePath: Cr,
        redirect: ZP,
        renderMatches: q2,
        resolvePath: xb,
        useActionData: I2,
        useAsyncError: j2,
        useAsyncValue: jb,
        useHref: Tb,
        useInRouterContext: po,
        useLoaderData: L2,
        useLocation: zr,
        useMatch: P2,
        useMatches: Mb,
        useNavigate: It,
        useNavigation: Lb,
        useNavigationType: $2,
        useOutlet: Ab,
        useOutletContext: N2,
        useParams: Zo,
        useResolvedPath: Js,
        useRevalidator: F2,
        useRouteError: Ib,
        useRouteLoaderData: M2,
        useRoutes: kb,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  qb = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function r() {
      for (var n = [], o = 0; o < arguments.length; o++) {
        var i = arguments[o];
        if (!!i) {
          var a = typeof i;
          if (a === "string" || a === "number") n.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var s = r.apply(null, i);
              s && n.push(s);
            }
          } else if (a === "object") {
            if (
              i.toString !== Object.prototype.toString &&
              !i.toString.toString().includes("[native code]")
            ) {
              n.push(i.toString());
              continue;
            }
            for (var l in i) t.call(i, l) && i[l] && n.push(l);
          }
        }
      }
      return n.join(" ");
    }
    e.exports ? ((r.default = r), (e.exports = r)) : (window.classNames = r);
  })();
})(qb);
var ee = qb.exports;
function Up() {
  return (
    (Up = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Up.apply(this, arguments)
  );
}
function Gb(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function By(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function wN(e) {
  var t = xN(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function xN(e, t) {
  if (typeof e != "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Yb(e, t, r) {
  var n = v.exports.useRef(e !== void 0),
    o = v.exports.useState(t),
    i = o[0],
    a = o[1],
    s = e !== void 0,
    l = n.current;
  return (
    (n.current = s),
    !s && l && i !== t && a(t),
    [
      s ? e : i,
      v.exports.useCallback(
        function (u) {
          for (
            var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), p = 1;
            p < c;
            p++
          )
            d[p - 1] = arguments[p];
          r && r.apply(void 0, [u].concat(d)), a(u);
        },
        [r]
      ),
    ]
  );
}
function ma(e, t) {
  return Object.keys(t).reduce(function (r, n) {
    var o,
      i = r,
      a = i[By(n)],
      s = i[n],
      l = Gb(i, [By(n), n].map(wN)),
      u = t[n],
      c = Yb(s, a, e[u]),
      d = c[0],
      p = c[1];
    return Up({}, l, ((o = {}), (o[n] = d), (o[u] = p), o));
  }, e);
}
function Bp(e, t) {
  return (
    (Bp = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    Bp(e, t)
  );
}
function bN(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Bp(e, t);
}
var zc = { exports: {} },
  Hc = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var SN = v.exports,
  EN = Symbol.for("react.element"),
  CN = Symbol.for("react.fragment"),
  ON = Object.prototype.hasOwnProperty,
  _N = SN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  $N = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qb(e, t, r) {
  var n,
    o = {},
    i = null,
    a = null;
  r !== void 0 && (i = "" + r),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (n in t) ON.call(t, n) && !$N.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
  return {
    $$typeof: EN,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: _N.current,
  };
}
Hc.Fragment = CN;
Hc.jsx = Qb;
Hc.jsxs = Qb;
zc.exports = Hc;
const f = zc.exports.jsx,
  E = zc.exports.jsxs,
  br = zc.exports.Fragment,
  PN = ["xxl", "xl", "lg", "md", "sm", "xs"],
  NN = "xs",
  Vc = v.exports.createContext({
    prefixes: {},
    breakpoints: PN,
    minBreakpoint: NN,
  });
function ue(e, t) {
  const { prefixes: r } = v.exports.useContext(Vc);
  return e || r[t] || t;
}
function Xb() {
  const { breakpoints: e } = v.exports.useContext(Vc);
  return e;
}
function Jb() {
  const { minBreakpoint: e } = v.exports.useContext(Vc);
  return e;
}
function Im() {
  const { dir: e } = v.exports.useContext(Vc);
  return e === "rtl";
}
function el(e) {
  return (e && e.ownerDocument) || document;
}
function TN(e) {
  var t = el(e);
  return (t && t.defaultView) || window;
}
function RN(e, t) {
  return TN(e).getComputedStyle(e, t);
}
var AN = /([A-Z])/g;
function kN(e) {
  return e.replace(AN, "-$1").toLowerCase();
}
var DN = /^ms-/;
function Ml(e) {
  return kN(e).replace(DN, "-ms-");
}
var FN =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function LN(e) {
  return !!(e && FN.test(e));
}
function wn(e, t) {
  var r = "",
    n = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(Ml(t)) || RN(e).getPropertyValue(Ml(t));
  Object.keys(t).forEach(function (o) {
    var i = t[o];
    !i && i !== 0
      ? e.style.removeProperty(Ml(o))
      : LN(o)
      ? (n += o + "(" + i + ") ")
      : (r += Ml(o) + ": " + i + ";");
  }),
    n && (r += "transform: " + n + ";"),
    (e.style.cssText += ";" + r);
}
var Wc = { exports: {} },
  MN = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  IN = MN,
  jN = IN;
function Zb() {}
function eS() {}
eS.resetWarningCache = Zb;
var UN = function () {
  function e(n, o, i, a, s, l) {
    if (l !== jN) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: eS,
    resetWarningCache: Zb,
  };
  return (r.PropTypes = r), r;
};
Wc.exports = UN();
var me = Wc.exports,
  zy = { disabled: !1 },
  tS = be.createContext(null),
  BN = function (t) {
    return t.scrollTop;
  },
  Za = "unmounted",
  Un = "exited",
  Dr = "entering",
  mn = "entered",
  Ms = "exiting",
  Tn = (function (e) {
    bN(t, e);
    function t(n, o) {
      var i;
      i = e.call(this, n, o) || this;
      var a = o,
        s = a && !a.isMounting ? n.enter : n.appear,
        l;
      return (
        (i.appearStatus = null),
        n.in
          ? s
            ? ((l = Un), (i.appearStatus = Dr))
            : (l = mn)
          : n.unmountOnExit || n.mountOnEnter
          ? (l = Za)
          : (l = Un),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var a = o.in;
      return a && i.status === Za ? { status: Un } : null;
    };
    var r = t.prototype;
    return (
      (r.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (r.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var a = this.state.status;
          this.props.in
            ? a !== Dr && a !== mn && (i = Dr)
            : (a === Dr || a === mn) && (i = Ms);
        }
        this.updateStatus(!1, i);
      }),
      (r.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (r.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          a,
          s;
        return (
          (i = a = s = o),
          o != null &&
            typeof o != "number" &&
            ((i = o.exit),
            (a = o.enter),
            (s = o.appear !== void 0 ? o.appear : a)),
          { exit: i, enter: a, appear: s }
        );
      }),
      (r.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === Dr)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var a = this.props.nodeRef
                ? this.props.nodeRef.current
                : Ti.findDOMNode(this);
              a && BN(a);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Un &&
            this.setState({ status: Za });
      }),
      (r.performEnter = function (o) {
        var i = this,
          a = this.props.enter,
          s = this.context ? this.context.isMounting : o,
          l = this.props.nodeRef ? [s] : [Ti.findDOMNode(this), s],
          u = l[0],
          c = l[1],
          d = this.getTimeouts(),
          p = s ? d.appear : d.enter;
        if ((!o && !a) || zy.disabled) {
          this.safeSetState({ status: mn }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, c),
          this.safeSetState({ status: Dr }, function () {
            i.props.onEntering(u, c),
              i.onTransitionEnd(p, function () {
                i.safeSetState({ status: mn }, function () {
                  i.props.onEntered(u, c);
                });
              });
          });
      }),
      (r.performExit = function () {
        var o = this,
          i = this.props.exit,
          a = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : Ti.findDOMNode(this);
        if (!i || zy.disabled) {
          this.safeSetState({ status: Un }, function () {
            o.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: Ms }, function () {
            o.props.onExiting(s),
              o.onTransitionEnd(a.exit, function () {
                o.safeSetState({ status: Un }, function () {
                  o.props.onExited(s);
                });
              });
          });
      }),
      (r.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (r.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (r.setNextCallback = function (o) {
        var i = this,
          a = !0;
        return (
          (this.nextCallback = function (s) {
            a && ((a = !1), (i.nextCallback = null), o(s));
          }),
          (this.nextCallback.cancel = function () {
            a = !1;
          }),
          this.nextCallback
        );
      }),
      (r.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var a = this.props.nodeRef
            ? this.props.nodeRef.current
            : Ti.findDOMNode(this),
          s = o == null && !this.props.addEndListener;
        if (!a || s) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [a, this.nextCallback],
            u = l[0],
            c = l[1];
          this.props.addEndListener(u, c);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (r.render = function () {
        var o = this.state.status;
        if (o === Za) return null;
        var i = this.props,
          a = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var s = Gb(i, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return be.createElement(
          tS.Provider,
          { value: null },
          typeof a == "function"
            ? a(o, s)
            : be.cloneElement(be.Children.only(a), s)
        );
      }),
      t
    );
  })(be.Component);
Tn.contextType = tS;
Tn.propTypes = {};
function ui() {}
Tn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: ui,
  onEntering: ui,
  onEntered: ui,
  onExit: ui,
  onExiting: ui,
  onExited: ui,
};
Tn.UNMOUNTED = Za;
Tn.EXITED = Un;
Tn.ENTERING = Dr;
Tn.ENTERED = mn;
Tn.EXITING = Ms;
var va = !!(
    typeof window != "undefined" &&
    window.document &&
    window.document.createElement
  ),
  zp = !1,
  Hp = !1;
try {
  var pd = {
    get passive() {
      return (zp = !0);
    },
    get once() {
      return (Hp = zp = !0);
    },
  };
  va &&
    (window.addEventListener("test", pd, pd),
    window.removeEventListener("test", pd, !0));
} catch {}
function jm(e, t, r, n) {
  if (n && typeof n != "boolean" && !Hp) {
    var o = n.once,
      i = n.capture,
      a = r;
    !Hp &&
      o &&
      ((a =
        r.__once ||
        function s(l) {
          this.removeEventListener(t, s, i), r.call(this, l);
        }),
      (r.__once = a)),
      e.addEventListener(t, a, zp ? n : i);
  }
  e.addEventListener(t, r, n);
}
function Vp(e, t, r, n) {
  var o = n && typeof n != "boolean" ? n.capture : n;
  e.removeEventListener(t, r, o),
    r.__once && e.removeEventListener(t, r.__once, o);
}
function Gn(e, t, r, n) {
  return (
    jm(e, t, r, n),
    function () {
      Vp(e, t, r, n);
    }
  );
}
function zN(e, t, r, n) {
  if ((r === void 0 && (r = !1), n === void 0 && (n = !0), e)) {
    var o = document.createEvent("HTMLEvents");
    o.initEvent(t, r, n), e.dispatchEvent(o);
  }
}
function HN(e) {
  var t = wn(e, "transitionDuration") || "",
    r = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * r;
}
function VN(e, t, r) {
  r === void 0 && (r = 5);
  var n = !1,
    o = setTimeout(function () {
      n || zN(e, "transitionend", !0);
    }, t + r),
    i = Gn(
      e,
      "transitionend",
      function () {
        n = !0;
      },
      { once: !0 }
    );
  return function () {
    clearTimeout(o), i();
  };
}
function rS(e, t, r, n) {
  r == null && (r = HN(e) || 0);
  var o = VN(e, r, n),
    i = Gn(e, "transitionend", t);
  return function () {
    o(), i();
  };
}
function Hy(e, t) {
  const r = wn(e, t) || "",
    n = r.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(r) * n;
}
function Kc(e, t) {
  const r = Hy(e, "transitionDuration"),
    n = Hy(e, "transitionDelay"),
    o = rS(
      e,
      (i) => {
        i.target === e && (o(), t(i));
      },
      r + n
    );
}
function ja(...e) {
  return e
    .filter((t) => t != null)
    .reduce((t, r) => {
      if (typeof r != "function")
        throw new Error(
          "Invalid Argument Type, must only provide functions, undefined, or null."
        );
      return t === null
        ? r
        : function (...o) {
            t.apply(this, o), r.apply(this, o);
          };
    }, null);
}
function Um(e) {
  e.offsetHeight;
}
var Vy = function (t) {
  return !t || typeof t == "function"
    ? t
    : function (r) {
        t.current = r;
      };
};
function WN(e, t) {
  var r = Vy(e),
    n = Vy(t);
  return function (o) {
    r && r(o), n && n(o);
  };
}
function tl(e, t) {
  return v.exports.useMemo(
    function () {
      return WN(e, t);
    },
    [e, t]
  );
}
function KN(e) {
  return e && "setState" in e ? Ti.findDOMNode(e) : e != null ? e : null;
}
const qN = be.forwardRef(
  (
    {
      onEnter: e,
      onEntering: t,
      onEntered: r,
      onExit: n,
      onExiting: o,
      onExited: i,
      addEndListener: a,
      children: s,
      childRef: l,
      ...u
    },
    c
  ) => {
    const d = v.exports.useRef(null),
      p = tl(d, l),
      h = ($) => {
        p(KN($));
      },
      w = ($) => (P) => {
        $ && d.current && $(d.current, P);
      },
      m = v.exports.useCallback(w(e), [e]),
      b = v.exports.useCallback(w(t), [t]),
      y = v.exports.useCallback(w(r), [r]),
      g = v.exports.useCallback(w(n), [n]),
      x = v.exports.useCallback(w(o), [o]),
      S = v.exports.useCallback(w(i), [i]),
      C = v.exports.useCallback(w(a), [a]);
    return f(Tn, {
      ref: c,
      ...u,
      onEnter: m,
      onEntered: y,
      onEntering: b,
      onExit: g,
      onExited: S,
      onExiting: x,
      addEndListener: C,
      nodeRef: d,
      children:
        typeof s == "function"
          ? ($, P) => s($, { ...P, ref: h })
          : be.cloneElement(s, { ref: h }),
    });
  }
);
var qc = qN;
const GN = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"],
};
function nS(e, t) {
  const r = `offset${e[0].toUpperCase()}${e.slice(1)}`,
    n = t[r],
    o = GN[e];
  return n + parseInt(wn(t, o[0]), 10) + parseInt(wn(t, o[1]), 10);
}
const YN = {
    [Un]: "collapse",
    [Ms]: "collapsing",
    [Dr]: "collapsing",
    [mn]: "collapse show",
  },
  QN = {
    in: !1,
    timeout: 300,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    getDimensionValue: nS,
  },
  oS = be.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: r,
        onExit: n,
        onExiting: o,
        className: i,
        children: a,
        dimension: s = "height",
        getDimensionValue: l = nS,
        ...u
      },
      c
    ) => {
      const d = typeof s == "function" ? s() : s,
        p = v.exports.useMemo(
          () =>
            ja((y) => {
              y.style[d] = "0";
            }, e),
          [d, e]
        ),
        h = v.exports.useMemo(
          () =>
            ja((y) => {
              const g = `scroll${d[0].toUpperCase()}${d.slice(1)}`;
              y.style[d] = `${y[g]}px`;
            }, t),
          [d, t]
        ),
        w = v.exports.useMemo(
          () =>
            ja((y) => {
              y.style[d] = null;
            }, r),
          [d, r]
        ),
        m = v.exports.useMemo(
          () =>
            ja((y) => {
              (y.style[d] = `${l(d, y)}px`), Um(y);
            }, n),
          [n, l, d]
        ),
        b = v.exports.useMemo(
          () =>
            ja((y) => {
              y.style[d] = null;
            }, o),
          [d, o]
        );
      return f(qc, {
        ref: c,
        addEndListener: Kc,
        ...u,
        "aria-expanded": u.role ? u.in : null,
        onEnter: p,
        onEntering: h,
        onEntered: w,
        onExit: m,
        onExiting: b,
        childRef: a.ref,
        children: (y, g) =>
          be.cloneElement(a, {
            ...g,
            className: ee(
              i,
              a.props.className,
              YN[y],
              d === "width" && "collapse-horizontal"
            ),
          }),
      });
    }
  );
oS.defaultProps = QN;
var XN = oS;
function iS(e) {
  var t = v.exports.useRef(e);
  return (
    v.exports.useEffect(
      function () {
        t.current = e;
      },
      [e]
    ),
    t
  );
}
function We(e) {
  var t = iS(e);
  return v.exports.useCallback(
    function () {
      return t.current && t.current.apply(t, arguments);
    },
    [t]
  );
}
function aS() {
  return v.exports.useState(null);
}
function JN(e, t, r, n) {
  n === void 0 && (n = !1);
  var o = We(r);
  v.exports.useEffect(
    function () {
      var i = typeof e == "function" ? e() : e;
      return (
        i.addEventListener(t, o, n),
        function () {
          return i.removeEventListener(t, o, n);
        }
      );
    },
    [e]
  );
}
function Bm() {
  var e = v.exports.useRef(!0),
    t = v.exports.useRef(function () {
      return e.current;
    });
  return (
    v.exports.useEffect(function () {
      return (
        (e.current = !0),
        function () {
          e.current = !1;
        }
      );
    }, []),
    t.current
  );
}
function sS(e) {
  var t = v.exports.useRef(null);
  return (
    v.exports.useEffect(function () {
      t.current = e;
    }),
    t.current
  );
}
var ZN =
    typeof global != "undefined" &&
    global.navigator &&
    global.navigator.product === "ReactNative",
  eT = typeof document != "undefined",
  lS = eT || ZN ? v.exports.useLayoutEffect : v.exports.useEffect;
const tT = ["as", "disabled"];
function rT(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function nT(e) {
  return !e || e.trim() === "#";
}
function zm({
  tagName: e,
  disabled: t,
  href: r,
  target: n,
  rel: o,
  role: i,
  onClick: a,
  tabIndex: s = 0,
  type: l,
}) {
  e || (r != null || n != null || o != null ? (e = "a") : (e = "button"));
  const u = { tagName: e };
  if (e === "button") return [{ type: l || "button", disabled: t }, u];
  const c = (p) => {
      if (((t || (e === "a" && nT(r))) && p.preventDefault(), t)) {
        p.stopPropagation();
        return;
      }
      a == null || a(p);
    },
    d = (p) => {
      p.key === " " && (p.preventDefault(), c(p));
    };
  return (
    e === "a" && (r || (r = "#"), t && (r = void 0)),
    [
      {
        role: i != null ? i : "button",
        disabled: void 0,
        tabIndex: t ? void 0 : s,
        href: r,
        target: e === "a" ? n : void 0,
        "aria-disabled": t || void 0,
        rel: e === "a" ? o : void 0,
        onClick: c,
        onKeyDown: d,
      },
      u,
    ]
  );
}
const Hm = v.exports.forwardRef((e, t) => {
  let { as: r, disabled: n } = e,
    o = rT(e, tT);
  const [i, { tagName: a }] = zm(Object.assign({ tagName: r, disabled: n }, o));
  return f(a, Object.assign({}, o, i, { ref: t }));
});
Hm.displayName = "Button";
const oT = ["onKeyDown"];
function iT(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function aT(e) {
  return !e || e.trim() === "#";
}
const Wo = v.exports.forwardRef((e, t) => {
  let { onKeyDown: r } = e,
    n = iT(e, oT);
  const [o] = zm(Object.assign({ tagName: "a" }, n)),
    i = We((a) => {
      o.onKeyDown(a), r == null || r(a);
    });
  return aT(n.href) || n.role === "button"
    ? f("a", Object.assign({ ref: t }, n, o, { onKeyDown: i }))
    : f("a", Object.assign({ ref: t }, n, { onKeyDown: r }));
});
Wo.displayName = "Anchor";
const sT = {
    in: !1,
    timeout: 300,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
  },
  lT = { [Dr]: "show", [mn]: "show" },
  Vm = v.exports.forwardRef(
    ({ className: e, children: t, transitionClasses: r = {}, ...n }, o) => {
      const i = v.exports.useCallback(
        (a, s) => {
          Um(a), n.onEnter == null || n.onEnter(a, s);
        },
        [n]
      );
      return f(qc, {
        ref: o,
        addEndListener: Kc,
        ...n,
        onEnter: i,
        childRef: t.ref,
        children: (a, s) =>
          v.exports.cloneElement(t, {
            ...s,
            className: ee("fade", e, t.props.className, lT[a], r[a]),
          }),
      });
    }
  );
Vm.defaultProps = sT;
Vm.displayName = "Fade";
var rl = Vm;
const uT = {
    "aria-label": me.string,
    onClick: me.func,
    variant: me.oneOf(["white"]),
  },
  cT = { "aria-label": "Close" },
  Gc = v.exports.forwardRef(({ className: e, variant: t, ...r }, n) =>
    f("button", {
      ref: n,
      type: "button",
      className: ee("btn-close", t && `btn-close-${t}`, e),
      ...r,
    })
  );
Gc.displayName = "CloseButton";
Gc.propTypes = uT;
Gc.defaultProps = cT;
var uS = Gc,
  nl = (e) =>
    v.exports.forwardRef((t, r) =>
      f("div", { ...t, ref: r, className: ee(t.className, e) })
    ),
  fT = /-(.)/g;
function dT(e) {
  return e.replace(fT, function (t, r) {
    return r.toUpperCase();
  });
}
const pT = (e) => e[0].toUpperCase() + dT(e).slice(1);
function tt(e, { displayName: t = pT(e), Component: r, defaultProps: n } = {}) {
  const o = v.exports.forwardRef(
    ({ className: i, bsPrefix: a, as: s = r || "div", ...l }, u) => {
      const c = ue(a, e);
      return f(s, { ref: u, className: ee(i, c), ...l });
    }
  );
  return (o.defaultProps = n), (o.displayName = t), o;
}
const cS = nl("h4");
cS.displayName = "DivStyledAsH4";
const hT = tt("alert-heading", { Component: cS }),
  mT = tt("alert-link", { Component: Wo }),
  vT = {
    variant: "primary",
    show: !0,
    transition: rl,
    closeLabel: "Close alert",
  },
  Wm = v.exports.forwardRef((e, t) => {
    const {
        bsPrefix: r,
        show: n,
        closeLabel: o,
        closeVariant: i,
        className: a,
        children: s,
        variant: l,
        onClose: u,
        dismissible: c,
        transition: d,
        ...p
      } = ma(e, { show: "onClose" }),
      h = ue(r, "alert"),
      w = We((y) => {
        u && u(!1, y);
      }),
      m = d === !0 ? rl : d,
      b = E("div", {
        role: "alert",
        ...(m ? void 0 : p),
        ref: t,
        className: ee(a, h, l && `${h}-${l}`, c && `${h}-dismissible`),
        children: [c && f(uS, { onClick: w, "aria-label": o, variant: i }), s],
      });
    return m
      ? f(m, { unmountOnExit: !0, ...p, ref: void 0, in: n, children: b })
      : n
      ? b
      : null;
  });
Wm.displayName = "Alert";
Wm.defaultProps = vT;
var Wy = Object.assign(Wm, { Link: mT, Heading: hT });
const gT = { variant: "primary", active: !1, disabled: !1 },
  Km = v.exports.forwardRef(
    (
      {
        as: e,
        bsPrefix: t,
        variant: r,
        size: n,
        active: o,
        className: i,
        ...a
      },
      s
    ) => {
      const l = ue(t, "btn"),
        [u, { tagName: c }] = zm({ tagName: e, ...a });
      return f(c, {
        ...u,
        ...a,
        ref: s,
        className: ee(
          i,
          l,
          o && "active",
          r && `${l}-${r}`,
          n && `${l}-${n}`,
          a.href && a.disabled && "disabled"
        ),
      });
    }
  );
Km.displayName = "Button";
Km.defaultProps = gT;
var ht = Km;
const fS = v.exports.forwardRef(
  ({ bsPrefix: e, className: t, variant: r, as: n = "img", ...o }, i) => {
    const a = ue(e, "card-img");
    return f(n, { ref: i, className: ee(r ? `${a}-${r}` : a, t), ...o });
  }
);
fS.displayName = "CardImg";
var yT = fS;
const dS = v.exports.createContext(null);
dS.displayName = "CardHeaderContext";
var pS = dS;
const hS = v.exports.forwardRef(
  ({ bsPrefix: e, className: t, as: r = "div", ...n }, o) => {
    const i = ue(e, "card-header"),
      a = v.exports.useMemo(() => ({ cardHeaderBsPrefix: i }), [i]);
    return f(pS.Provider, {
      value: a,
      children: f(r, { ref: o, ...n, className: ee(t, i) }),
    });
  }
);
hS.displayName = "CardHeader";
var wT = hS;
const xT = nl("h5"),
  bT = nl("h6"),
  mS = tt("card-body"),
  ST = tt("card-title", { Component: xT }),
  ET = tt("card-subtitle", { Component: bT }),
  CT = tt("card-link", { Component: "a" }),
  OT = tt("card-text", { Component: "p" }),
  _T = tt("card-footer"),
  $T = tt("card-img-overlay"),
  PT = { body: !1 },
  qm = v.exports.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        bg: r,
        text: n,
        border: o,
        body: i,
        children: a,
        as: s = "div",
        ...l
      },
      u
    ) => {
      const c = ue(e, "card");
      return f(s, {
        ref: u,
        ...l,
        className: ee(
          t,
          c,
          r && `bg-${r}`,
          n && `text-${n}`,
          o && `border-${o}`
        ),
        children: i ? f(mS, { children: a }) : a,
      });
    }
  );
qm.displayName = "Card";
qm.defaultProps = PT;
var Oe = Object.assign(qm, {
  Img: yT,
  Title: ST,
  Subtitle: ET,
  Body: mS,
  Link: CT,
  Text: OT,
  Header: wT,
  Footer: _T,
  ImgOverlay: $T,
});
function NT(e, t) {
  var r = v.exports.useRef(!0);
  v.exports.useEffect(function () {
    if (r.current) {
      r.current = !1;
      return;
    }
    return e();
  }, t);
}
function TT(e) {
  var t = v.exports.useRef(e);
  return (t.current = e), t;
}
function Gm(e) {
  var t = TT(e);
  v.exports.useEffect(function () {
    return function () {
      return t.current();
    };
  }, []);
}
var Wp = Math.pow(2, 31) - 1;
function vS(e, t, r) {
  var n = r - Date.now();
  e.current =
    n <= Wp
      ? setTimeout(t, n)
      : setTimeout(function () {
          return vS(e, t, r);
        }, Wp);
}
function RT() {
  var e = Bm(),
    t = v.exports.useRef();
  return (
    Gm(function () {
      return clearTimeout(t.current);
    }),
    v.exports.useMemo(function () {
      var r = function () {
        return clearTimeout(t.current);
      };
      function n(o, i) {
        i === void 0 && (i = 0),
          e() &&
            (r(),
            i <= Wp
              ? (t.current = setTimeout(o, i))
              : vS(t, o, Date.now() + i));
      }
      return { set: n, clear: r };
    }, [])
  );
}
var AT = tt("carousel-caption");
const gS = v.exports.forwardRef(
  ({ as: e = "div", bsPrefix: t, className: r, ...n }, o) => {
    const i = ee(r, ue(t, "carousel-item"));
    return f(e, { ref: o, ...n, className: i });
  }
);
gS.displayName = "CarouselItem";
var kT = gS;
function Ky(e, t) {
  let r = 0;
  return v.exports.Children.map(e, (n) =>
    v.exports.isValidElement(n) ? t(n, r++) : n
  );
}
function DT(e, t) {
  let r = 0;
  v.exports.Children.forEach(e, (n) => {
    v.exports.isValidElement(n) && t(n, r++);
  });
}
function FT(e, t) {
  return v.exports.Children.toArray(e).some(
    (r) => v.exports.isValidElement(r) && r.type === t
  );
}
const LT = 40,
  MT = {
    slide: !0,
    fade: !1,
    controls: !0,
    indicators: !0,
    indicatorLabels: [],
    defaultActiveIndex: 0,
    interval: 5e3,
    keyboard: !0,
    pause: "hover",
    wrap: !0,
    touch: !0,
    prevIcon: f("span", {
      "aria-hidden": "true",
      className: "carousel-control-prev-icon",
    }),
    prevLabel: "Previous",
    nextIcon: f("span", {
      "aria-hidden": "true",
      className: "carousel-control-next-icon",
    }),
    nextLabel: "Next",
  };
function IT(e) {
  if (!e || !e.style || !e.parentNode || !e.parentNode.style) return !1;
  const t = getComputedStyle(e);
  return (
    t.display !== "none" &&
    t.visibility !== "hidden" &&
    getComputedStyle(e.parentNode).display !== "none"
  );
}
const Ym = v.exports.forwardRef((e, t) => {
  const {
      as: r = "div",
      bsPrefix: n,
      slide: o,
      fade: i,
      controls: a,
      indicators: s,
      indicatorLabels: l,
      activeIndex: u,
      onSelect: c,
      onSlide: d,
      onSlid: p,
      interval: h,
      keyboard: w,
      onKeyDown: m,
      pause: b,
      onMouseOver: y,
      onMouseOut: g,
      wrap: x,
      touch: S,
      onTouchStart: C,
      onTouchMove: $,
      onTouchEnd: P,
      prevIcon: R,
      prevLabel: M,
      nextIcon: L,
      nextLabel: F,
      variant: B,
      className: z,
      children: G,
      ...X
    } = ma(e, { activeIndex: "onSelect" }),
    ne = ue(n, "carousel"),
    fe = Im(),
    D = v.exports.useRef(null),
    [K, W] = v.exports.useState("next"),
    [oe, le] = v.exports.useState(!1),
    [_e, Re] = v.exports.useState(!1),
    [ie, ye] = v.exports.useState(u || 0);
  v.exports.useEffect(() => {
    !_e &&
      u !== ie &&
      (D.current ? W(D.current) : W((u || 0) > ie ? "next" : "prev"),
      o && Re(!0),
      ye(u || 0));
  }, [u, _e, ie, o]),
    v.exports.useEffect(() => {
      D.current && (D.current = null);
    });
  let Se = 0,
    Xe;
  DT(G, (Z, xe) => {
    ++Se, xe === u && (Xe = Z.props.interval);
  });
  const it = iS(Xe),
    Le = v.exports.useCallback(
      (Z) => {
        if (_e) return;
        let xe = ie - 1;
        if (xe < 0) {
          if (!x) return;
          xe = Se - 1;
        }
        (D.current = "prev"), c == null || c(xe, Z);
      },
      [_e, ie, c, x, Se]
    ),
    Ae = We((Z) => {
      if (_e) return;
      let xe = ie + 1;
      if (xe >= Se) {
        if (!x) return;
        xe = 0;
      }
      (D.current = "next"), c == null || c(xe, Z);
    }),
    yt = v.exports.useRef();
  v.exports.useImperativeHandle(t, () => ({
    element: yt.current,
    prev: Le,
    next: Ae,
  }));
  const he = We(() => {
      !document.hidden && IT(yt.current) && (fe ? Le() : Ae());
    }),
    O = K === "next" ? "start" : "end";
  NT(() => {
    o || (d == null || d(ie, O), p == null || p(ie, O));
  }, [ie]);
  const A = `${ne}-item-${K}`,
    k = `${ne}-item-${O}`,
    V = v.exports.useCallback(
      (Z) => {
        Um(Z), d == null || d(ie, O);
      },
      [d, ie, O]
    ),
    N = v.exports.useCallback(() => {
      Re(!1), p == null || p(ie, O);
    }, [p, ie, O]),
    _ = v.exports.useCallback(
      (Z) => {
        if (w && !/input|textarea/i.test(Z.target.tagName))
          switch (Z.key) {
            case "ArrowLeft":
              Z.preventDefault(), fe ? Ae(Z) : Le(Z);
              return;
            case "ArrowRight":
              Z.preventDefault(), fe ? Le(Z) : Ae(Z);
              return;
          }
        m == null || m(Z);
      },
      [w, m, Le, Ae, fe]
    ),
    T = v.exports.useCallback(
      (Z) => {
        b === "hover" && le(!0), y == null || y(Z);
      },
      [b, y]
    ),
    H = v.exports.useCallback(
      (Z) => {
        le(!1), g == null || g(Z);
      },
      [g]
    ),
    U = v.exports.useRef(0),
    ae = v.exports.useRef(0),
    se = RT(),
    q = v.exports.useCallback(
      (Z) => {
        (U.current = Z.touches[0].clientX),
          (ae.current = 0),
          b === "hover" && le(!0),
          C == null || C(Z);
      },
      [b, C]
    ),
    J = v.exports.useCallback(
      (Z) => {
        Z.touches && Z.touches.length > 1
          ? (ae.current = 0)
          : (ae.current = Z.touches[0].clientX - U.current),
          $ == null || $(Z);
      },
      [$]
    ),
    ke = v.exports.useCallback(
      (Z) => {
        if (S) {
          const xe = ae.current;
          Math.abs(xe) > LT && (xe > 0 ? Le(Z) : Ae(Z));
        }
        b === "hover" &&
          se.set(() => {
            le(!1);
          }, h || void 0),
          P == null || P(Z);
      },
      [S, b, Le, Ae, se, h, P]
    ),
    de = h != null && !oe && !_e,
    Ee = v.exports.useRef();
  v.exports.useEffect(() => {
    var Z, xe;
    if (!de) return;
    const zt = fe ? Le : Ae;
    return (
      (Ee.current = window.setInterval(
        document.visibilityState ? he : zt,
        (Z = (xe = it.current) != null ? xe : h) != null ? Z : void 0
      )),
      () => {
        Ee.current !== null && clearInterval(Ee.current);
      }
    );
  }, [de, Le, Ae, it, h, he, fe]);
  const Bt = v.exports.useMemo(
    () =>
      s &&
      Array.from({ length: Se }, (Z, xe) => (zt) => {
        c == null || c(xe, zt);
      }),
    [s, Se, c]
  );
  return E(r, {
    ref: yt,
    ...X,
    onKeyDown: _,
    onMouseOver: T,
    onMouseOut: H,
    onTouchStart: q,
    onTouchMove: J,
    onTouchEnd: ke,
    className: ee(z, ne, o && "slide", i && `${ne}-fade`, B && `${ne}-${B}`),
    children: [
      s &&
        f("div", {
          className: `${ne}-indicators`,
          children: Ky(G, (Z, xe) =>
            f(
              "button",
              {
                type: "button",
                "data-bs-target": "",
                "aria-label": l != null && l.length ? l[xe] : `Slide ${xe + 1}`,
                className: xe === ie ? "active" : void 0,
                onClick: Bt ? Bt[xe] : void 0,
                "aria-current": xe === ie,
              },
              xe
            )
          ),
        }),
      f("div", {
        className: `${ne}-inner`,
        children: Ky(G, (Z, xe) => {
          const zt = xe === ie;
          return o
            ? f(qc, {
                in: zt,
                onEnter: zt ? V : void 0,
                onEntered: zt ? N : void 0,
                addEndListener: Kc,
                children: (Vr, Dn) =>
                  v.exports.cloneElement(Z, {
                    ...Dn,
                    className: ee(
                      Z.props.className,
                      zt && Vr !== "entered" && A,
                      (Vr === "entered" || Vr === "exiting") && "active",
                      (Vr === "entering" || Vr === "exiting") && k
                    ),
                  }),
              })
            : v.exports.cloneElement(Z, {
                className: ee(Z.props.className, zt && "active"),
              });
        }),
      }),
      a &&
        E(br, {
          children: [
            (x || u !== 0) &&
              E(Wo, {
                className: `${ne}-control-prev`,
                onClick: Le,
                children: [
                  R,
                  M && f("span", { className: "visually-hidden", children: M }),
                ],
              }),
            (x || u !== Se - 1) &&
              E(Wo, {
                className: `${ne}-control-next`,
                onClick: Ae,
                children: [
                  L,
                  F && f("span", { className: "visually-hidden", children: F }),
                ],
              }),
          ],
        }),
    ],
  });
});
Ym.displayName = "Carousel";
Ym.defaultProps = MT;
var Il = Object.assign(Ym, { Caption: AT, Item: kT });
function jT({ as: e, bsPrefix: t, className: r, ...n }) {
  t = ue(t, "col");
  const o = Xb(),
    i = Jb(),
    a = [],
    s = [];
  return (
    o.forEach((l) => {
      const u = n[l];
      delete n[l];
      let c, d, p;
      typeof u == "object" && u != null
        ? ({ span: c, offset: d, order: p } = u)
        : (c = u);
      const h = l !== i ? `-${l}` : "";
      c && a.push(c === !0 ? `${t}${h}` : `${t}${h}-${c}`),
        p != null && s.push(`order${h}-${p}`),
        d != null && s.push(`offset${h}-${d}`);
    }),
    [
      { ...n, className: ee(r, ...a, ...s) },
      { as: e, bsPrefix: t, spans: a },
    ]
  );
}
const yS = v.exports.forwardRef((e, t) => {
  const [{ className: r, ...n }, { as: o = "div", bsPrefix: i, spans: a }] =
    jT(e);
  return f(o, { ...n, ref: t, className: ee(r, !a.length && i) });
});
yS.displayName = "Col";
var re = yS,
  UT = Function.prototype.bind.call(Function.prototype.call, [].slice);
function hn(e, t) {
  return UT(e.querySelectorAll(t));
}
function wS() {
  var e = v.exports.useReducer(function (r) {
      return !r;
    }, !1),
    t = e[1];
  return t;
}
const Yc = v.exports.createContext(null);
var qy = Object.prototype.hasOwnProperty;
function Gy(e, t, r) {
  for (r of e.keys()) if (fs(r, t)) return r;
}
function fs(e, t) {
  var r, n, o;
  if (e === t) return !0;
  if (e && t && (r = e.constructor) === t.constructor) {
    if (r === Date) return e.getTime() === t.getTime();
    if (r === RegExp) return e.toString() === t.toString();
    if (r === Array) {
      if ((n = e.length) === t.length) for (; n-- && fs(e[n], t[n]); );
      return n === -1;
    }
    if (r === Set) {
      if (e.size !== t.size) return !1;
      for (n of e)
        if (
          ((o = n),
          (o && typeof o == "object" && ((o = Gy(t, o)), !o)) || !t.has(o))
        )
          return !1;
      return !0;
    }
    if (r === Map) {
      if (e.size !== t.size) return !1;
      for (n of e)
        if (
          ((o = n[0]),
          (o && typeof o == "object" && ((o = Gy(t, o)), !o)) ||
            !fs(n[1], t.get(o)))
        )
          return !1;
      return !0;
    }
    if (r === ArrayBuffer) (e = new Uint8Array(e)), (t = new Uint8Array(t));
    else if (r === DataView) {
      if ((n = e.byteLength) === t.byteLength)
        for (; n-- && e.getInt8(n) === t.getInt8(n); );
      return n === -1;
    }
    if (ArrayBuffer.isView(e)) {
      if ((n = e.byteLength) === t.byteLength) for (; n-- && e[n] === t[n]; );
      return n === -1;
    }
    if (!r || typeof e == "object") {
      n = 0;
      for (r in e)
        if (
          (qy.call(e, r) && ++n && !qy.call(t, r)) ||
          !(r in t) ||
          !fs(e[r], t[r])
        )
          return !1;
      return Object.keys(t).length === n;
    }
  }
  return e !== e && t !== t;
}
function BT(e) {
  var t = Bm();
  return [
    e[0],
    v.exports.useCallback(
      function (r) {
        if (!!t()) return e[1](r);
      },
      [t, e[1]]
    ),
  ];
}
var Qt = "top",
  Sr = "bottom",
  Er = "right",
  Xt = "left",
  Qm = "auto",
  ol = [Qt, Sr, Er, Xt],
  ta = "start",
  Is = "end",
  zT = "clippingParents",
  xS = "viewport",
  Ua = "popper",
  HT = "reference",
  Yy = ol.reduce(function (e, t) {
    return e.concat([t + "-" + ta, t + "-" + Is]);
  }, []),
  bS = [].concat(ol, [Qm]).reduce(function (e, t) {
    return e.concat([t, t + "-" + ta, t + "-" + Is]);
  }, []),
  VT = "beforeRead",
  WT = "read",
  KT = "afterRead",
  qT = "beforeMain",
  GT = "main",
  YT = "afterMain",
  QT = "beforeWrite",
  XT = "write",
  JT = "afterWrite",
  ZT = [VT, WT, KT, qT, GT, YT, QT, XT, JT];
function Zr(e) {
  return e.split("-")[0];
}
function _r(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Ko(e) {
  var t = _r(e).Element;
  return e instanceof t || e instanceof Element;
}
function en(e) {
  var t = _r(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Xm(e) {
  if (typeof ShadowRoot == "undefined") return !1;
  var t = _r(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Lo = Math.max,
  rc = Math.min,
  ra = Math.round;
function Kp() {
  var e = navigator.userAgentData;
  return e != null && e.brands
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function SS() {
  return !/^((?!chrome|android).)*safari/i.test(Kp());
}
function na(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(),
    o = 1,
    i = 1;
  t &&
    en(e) &&
    ((o = (e.offsetWidth > 0 && ra(n.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && ra(n.height) / e.offsetHeight) || 1));
  var a = Ko(e) ? _r(e) : window,
    s = a.visualViewport,
    l = !SS() && r,
    u = (n.left + (l && s ? s.offsetLeft : 0)) / o,
    c = (n.top + (l && s ? s.offsetTop : 0)) / i,
    d = n.width / o,
    p = n.height / i;
  return {
    width: d,
    height: p,
    top: c,
    right: u + d,
    bottom: c + p,
    left: u,
    x: u,
    y: c,
  };
}
function Jm(e) {
  var t = na(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function ES(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Xm(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function so(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function On(e) {
  return _r(e).getComputedStyle(e);
}
function eR(e) {
  return ["table", "td", "th"].indexOf(so(e)) >= 0;
}
function ho(e) {
  return ((Ko(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function Qc(e) {
  return so(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (Xm(e) ? e.host : null) || ho(e);
}
function Qy(e) {
  return !en(e) || On(e).position === "fixed" ? null : e.offsetParent;
}
function tR(e) {
  var t = /firefox/i.test(Kp()),
    r = /Trident/i.test(Kp());
  if (r && en(e)) {
    var n = On(e);
    if (n.position === "fixed") return null;
  }
  var o = Qc(e);
  for (Xm(o) && (o = o.host); en(o) && ["html", "body"].indexOf(so(o)) < 0; ) {
    var i = On(o);
    if (
      i.transform !== "none" ||
      i.perspective !== "none" ||
      i.contain === "paint" ||
      ["transform", "perspective"].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === "filter") ||
      (t && i.filter && i.filter !== "none")
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function il(e) {
  for (var t = _r(e), r = Qy(e); r && eR(r) && On(r).position === "static"; )
    r = Qy(r);
  return r &&
    (so(r) === "html" || (so(r) === "body" && On(r).position === "static"))
    ? t
    : r || tR(e) || t;
}
function Zm(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ds(e, t, r) {
  return Lo(e, rc(t, r));
}
function rR(e, t, r) {
  var n = ds(e, t, r);
  return n > r ? r : n;
}
function CS() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function OS(e) {
  return Object.assign({}, CS(), e);
}
function _S(e, t) {
  return t.reduce(function (r, n) {
    return (r[n] = e), r;
  }, {});
}
var nR = function (t, r) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, r.rects, { placement: r.placement }))
        : t),
    OS(typeof t != "number" ? t : _S(t, ol))
  );
};
function oR(e) {
  var t,
    r = e.state,
    n = e.name,
    o = e.options,
    i = r.elements.arrow,
    a = r.modifiersData.popperOffsets,
    s = Zr(r.placement),
    l = Zm(s),
    u = [Xt, Er].indexOf(s) >= 0,
    c = u ? "height" : "width";
  if (!(!i || !a)) {
    var d = nR(o.padding, r),
      p = Jm(i),
      h = l === "y" ? Qt : Xt,
      w = l === "y" ? Sr : Er,
      m =
        r.rects.reference[c] + r.rects.reference[l] - a[l] - r.rects.popper[c],
      b = a[l] - r.rects.reference[l],
      y = il(i),
      g = y ? (l === "y" ? y.clientHeight || 0 : y.clientWidth || 0) : 0,
      x = m / 2 - b / 2,
      S = d[h],
      C = g - p[c] - d[w],
      $ = g / 2 - p[c] / 2 + x,
      P = ds(S, $, C),
      R = l;
    r.modifiersData[n] = ((t = {}), (t[R] = P), (t.centerOffset = P - $), t);
  }
}
function iR(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null &&
    ((typeof o == "string" && ((o = t.elements.popper.querySelector(o)), !o)) ||
      !ES(t.elements.popper, o) ||
      (t.elements.arrow = o));
}
var aR = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: oR,
  effect: iR,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function oa(e) {
  return e.split("-")[1];
}
var sR = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function lR(e) {
  var t = e.x,
    r = e.y,
    n = window,
    o = n.devicePixelRatio || 1;
  return { x: ra(t * o) / o || 0, y: ra(r * o) / o || 0 };
}
function Xy(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    o = e.placement,
    i = e.variation,
    a = e.offsets,
    s = e.position,
    l = e.gpuAcceleration,
    u = e.adaptive,
    c = e.roundOffsets,
    d = e.isFixed,
    p = a.x,
    h = p === void 0 ? 0 : p,
    w = a.y,
    m = w === void 0 ? 0 : w,
    b = typeof c == "function" ? c({ x: h, y: m }) : { x: h, y: m };
  (h = b.x), (m = b.y);
  var y = a.hasOwnProperty("x"),
    g = a.hasOwnProperty("y"),
    x = Xt,
    S = Qt,
    C = window;
  if (u) {
    var $ = il(r),
      P = "clientHeight",
      R = "clientWidth";
    if (
      ($ === _r(r) &&
        (($ = ho(r)),
        On($).position !== "static" &&
          s === "absolute" &&
          ((P = "scrollHeight"), (R = "scrollWidth"))),
      ($ = $),
      o === Qt || ((o === Xt || o === Er) && i === Is))
    ) {
      S = Sr;
      var M = d && $ === C && C.visualViewport ? C.visualViewport.height : $[P];
      (m -= M - n.height), (m *= l ? 1 : -1);
    }
    if (o === Xt || ((o === Qt || o === Sr) && i === Is)) {
      x = Er;
      var L = d && $ === C && C.visualViewport ? C.visualViewport.width : $[R];
      (h -= L - n.width), (h *= l ? 1 : -1);
    }
  }
  var F = Object.assign({ position: s }, u && sR),
    B = c === !0 ? lR({ x: h, y: m }) : { x: h, y: m };
  if (((h = B.x), (m = B.y), l)) {
    var z;
    return Object.assign(
      {},
      F,
      ((z = {}),
      (z[S] = g ? "0" : ""),
      (z[x] = y ? "0" : ""),
      (z.transform =
        (C.devicePixelRatio || 1) <= 1
          ? "translate(" + h + "px, " + m + "px)"
          : "translate3d(" + h + "px, " + m + "px, 0)"),
      z)
    );
  }
  return Object.assign(
    {},
    F,
    ((t = {}),
    (t[S] = g ? m + "px" : ""),
    (t[x] = y ? h + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function uR(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    o = n === void 0 ? !0 : n,
    i = r.adaptive,
    a = i === void 0 ? !0 : i,
    s = r.roundOffsets,
    l = s === void 0 ? !0 : s,
    u = {
      placement: Zr(t.placement),
      variation: oa(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Xy(
        Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: a,
          roundOffsets: l,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Xy(
          Object.assign({}, u, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: l,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
var cR = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: uR,
    data: {},
  },
  jl = { passive: !0 };
function fR(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    o = n.scroll,
    i = o === void 0 ? !0 : o,
    a = n.resize,
    s = a === void 0 ? !0 : a,
    l = _r(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      u.forEach(function (c) {
        c.addEventListener("scroll", r.update, jl);
      }),
    s && l.addEventListener("resize", r.update, jl),
    function () {
      i &&
        u.forEach(function (c) {
          c.removeEventListener("scroll", r.update, jl);
        }),
        s && l.removeEventListener("resize", r.update, jl);
    }
  );
}
var dR = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: fR,
    data: {},
  },
  pR = { left: "right", right: "left", bottom: "top", top: "bottom" };
function su(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return pR[t];
  });
}
var hR = { start: "end", end: "start" };
function Jy(e) {
  return e.replace(/start|end/g, function (t) {
    return hR[t];
  });
}
function ev(e) {
  var t = _r(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function tv(e) {
  return na(ho(e)).left + ev(e).scrollLeft;
}
function mR(e, t) {
  var r = _r(e),
    n = ho(e),
    o = r.visualViewport,
    i = n.clientWidth,
    a = n.clientHeight,
    s = 0,
    l = 0;
  if (o) {
    (i = o.width), (a = o.height);
    var u = SS();
    (u || (!u && t === "fixed")) && ((s = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: i, height: a, x: s + tv(e), y: l };
}
function vR(e) {
  var t,
    r = ho(e),
    n = ev(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = Lo(
      r.scrollWidth,
      r.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    a = Lo(
      r.scrollHeight,
      r.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    ),
    s = -n.scrollLeft + tv(e),
    l = -n.scrollTop;
  return (
    On(o || r).direction === "rtl" &&
      (s += Lo(r.clientWidth, o ? o.clientWidth : 0) - i),
    { width: i, height: a, x: s, y: l }
  );
}
function rv(e) {
  var t = On(e),
    r = t.overflow,
    n = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function $S(e) {
  return ["html", "body", "#document"].indexOf(so(e)) >= 0
    ? e.ownerDocument.body
    : en(e) && rv(e)
    ? e
    : $S(Qc(e));
}
function ps(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = $S(e),
    o = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = _r(n),
    a = o ? [i].concat(i.visualViewport || [], rv(n) ? n : []) : n,
    s = t.concat(a);
  return o ? s : s.concat(ps(Qc(a)));
}
function qp(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function gR(e, t) {
  var r = na(e, !1, t === "fixed");
  return (
    (r.top = r.top + e.clientTop),
    (r.left = r.left + e.clientLeft),
    (r.bottom = r.top + e.clientHeight),
    (r.right = r.left + e.clientWidth),
    (r.width = e.clientWidth),
    (r.height = e.clientHeight),
    (r.x = r.left),
    (r.y = r.top),
    r
  );
}
function Zy(e, t, r) {
  return t === xS ? qp(mR(e, r)) : Ko(t) ? gR(t, r) : qp(vR(ho(e)));
}
function yR(e) {
  var t = ps(Qc(e)),
    r = ["absolute", "fixed"].indexOf(On(e).position) >= 0,
    n = r && en(e) ? il(e) : e;
  return Ko(n)
    ? t.filter(function (o) {
        return Ko(o) && ES(o, n) && so(o) !== "body";
      })
    : [];
}
function wR(e, t, r, n) {
  var o = t === "clippingParents" ? yR(e) : [].concat(t),
    i = [].concat(o, [r]),
    a = i[0],
    s = i.reduce(function (l, u) {
      var c = Zy(e, u, n);
      return (
        (l.top = Lo(c.top, l.top)),
        (l.right = rc(c.right, l.right)),
        (l.bottom = rc(c.bottom, l.bottom)),
        (l.left = Lo(c.left, l.left)),
        l
      );
    }, Zy(e, a, n));
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function PS(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    o = n ? Zr(n) : null,
    i = n ? oa(n) : null,
    a = t.x + t.width / 2 - r.width / 2,
    s = t.y + t.height / 2 - r.height / 2,
    l;
  switch (o) {
    case Qt:
      l = { x: a, y: t.y - r.height };
      break;
    case Sr:
      l = { x: a, y: t.y + t.height };
      break;
    case Er:
      l = { x: t.x + t.width, y: s };
      break;
    case Xt:
      l = { x: t.x - r.width, y: s };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? Zm(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case ta:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case Is:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function js(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    o = n === void 0 ? e.placement : n,
    i = r.strategy,
    a = i === void 0 ? e.strategy : i,
    s = r.boundary,
    l = s === void 0 ? zT : s,
    u = r.rootBoundary,
    c = u === void 0 ? xS : u,
    d = r.elementContext,
    p = d === void 0 ? Ua : d,
    h = r.altBoundary,
    w = h === void 0 ? !1 : h,
    m = r.padding,
    b = m === void 0 ? 0 : m,
    y = OS(typeof b != "number" ? b : _S(b, ol)),
    g = p === Ua ? HT : Ua,
    x = e.rects.popper,
    S = e.elements[w ? g : p],
    C = wR(Ko(S) ? S : S.contextElement || ho(e.elements.popper), l, c, a),
    $ = na(e.elements.reference),
    P = PS({ reference: $, element: x, strategy: "absolute", placement: o }),
    R = qp(Object.assign({}, x, P)),
    M = p === Ua ? R : $,
    L = {
      top: C.top - M.top + y.top,
      bottom: M.bottom - C.bottom + y.bottom,
      left: C.left - M.left + y.left,
      right: M.right - C.right + y.right,
    },
    F = e.modifiersData.offset;
  if (p === Ua && F) {
    var B = F[o];
    Object.keys(L).forEach(function (z) {
      var G = [Er, Sr].indexOf(z) >= 0 ? 1 : -1,
        X = [Qt, Sr].indexOf(z) >= 0 ? "y" : "x";
      L[z] += B[X] * G;
    });
  }
  return L;
}
function xR(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    o = r.boundary,
    i = r.rootBoundary,
    a = r.padding,
    s = r.flipVariations,
    l = r.allowedAutoPlacements,
    u = l === void 0 ? bS : l,
    c = oa(n),
    d = c
      ? s
        ? Yy
        : Yy.filter(function (w) {
            return oa(w) === c;
          })
      : ol,
    p = d.filter(function (w) {
      return u.indexOf(w) >= 0;
    });
  p.length === 0 && (p = d);
  var h = p.reduce(function (w, m) {
    return (
      (w[m] = js(e, { placement: m, boundary: o, rootBoundary: i, padding: a })[
        Zr(m)
      ]),
      w
    );
  }, {});
  return Object.keys(h).sort(function (w, m) {
    return h[w] - h[m];
  });
}
function bR(e) {
  if (Zr(e) === Qm) return [];
  var t = su(e);
  return [Jy(e), t, Jy(t)];
}
function SR(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var o = r.mainAxis,
        i = o === void 0 ? !0 : o,
        a = r.altAxis,
        s = a === void 0 ? !0 : a,
        l = r.fallbackPlacements,
        u = r.padding,
        c = r.boundary,
        d = r.rootBoundary,
        p = r.altBoundary,
        h = r.flipVariations,
        w = h === void 0 ? !0 : h,
        m = r.allowedAutoPlacements,
        b = t.options.placement,
        y = Zr(b),
        g = y === b,
        x = l || (g || !w ? [su(b)] : bR(b)),
        S = [b].concat(x).reduce(function (Re, ie) {
          return Re.concat(
            Zr(ie) === Qm
              ? xR(t, {
                  placement: ie,
                  boundary: c,
                  rootBoundary: d,
                  padding: u,
                  flipVariations: w,
                  allowedAutoPlacements: m,
                })
              : ie
          );
        }, []),
        C = t.rects.reference,
        $ = t.rects.popper,
        P = new Map(),
        R = !0,
        M = S[0],
        L = 0;
      L < S.length;
      L++
    ) {
      var F = S[L],
        B = Zr(F),
        z = oa(F) === ta,
        G = [Qt, Sr].indexOf(B) >= 0,
        X = G ? "width" : "height",
        ne = js(t, {
          placement: F,
          boundary: c,
          rootBoundary: d,
          altBoundary: p,
          padding: u,
        }),
        fe = G ? (z ? Er : Xt) : z ? Sr : Qt;
      C[X] > $[X] && (fe = su(fe));
      var D = su(fe),
        K = [];
      if (
        (i && K.push(ne[B] <= 0),
        s && K.push(ne[fe] <= 0, ne[D] <= 0),
        K.every(function (Re) {
          return Re;
        }))
      ) {
        (M = F), (R = !1);
        break;
      }
      P.set(F, K);
    }
    if (R)
      for (
        var W = w ? 3 : 1,
          oe = function (ie) {
            var ye = S.find(function (Se) {
              var Xe = P.get(Se);
              if (Xe)
                return Xe.slice(0, ie).every(function (it) {
                  return it;
                });
            });
            if (ye) return (M = ye), "break";
          },
          le = W;
        le > 0;
        le--
      ) {
        var _e = oe(le);
        if (_e === "break") break;
      }
    t.placement !== M &&
      ((t.modifiersData[n]._skip = !0), (t.placement = M), (t.reset = !0));
  }
}
var ER = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: SR,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function e0(e, t, r) {
  return (
    r === void 0 && (r = { x: 0, y: 0 }),
    {
      top: e.top - t.height - r.y,
      right: e.right - t.width + r.x,
      bottom: e.bottom - t.height + r.y,
      left: e.left - t.width - r.x,
    }
  );
}
function t0(e) {
  return [Qt, Er, Sr, Xt].some(function (t) {
    return e[t] >= 0;
  });
}
function CR(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    o = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    a = js(t, { elementContext: "reference" }),
    s = js(t, { altBoundary: !0 }),
    l = e0(a, n),
    u = e0(s, o, i),
    c = t0(l),
    d = t0(u);
  (t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": c,
      "data-popper-escaped": d,
    }));
}
var OR = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: CR,
};
function _R(e, t, r) {
  var n = Zr(e),
    o = [Xt, Qt].indexOf(n) >= 0 ? -1 : 1,
    i = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    a = i[0],
    s = i[1];
  return (
    (a = a || 0),
    (s = (s || 0) * o),
    [Xt, Er].indexOf(n) >= 0 ? { x: s, y: a } : { x: a, y: s }
  );
}
function $R(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    o = r.offset,
    i = o === void 0 ? [0, 0] : o,
    a = bS.reduce(function (c, d) {
      return (c[d] = _R(d, t.rects, i)), c;
    }, {}),
    s = a[t.placement],
    l = s.x,
    u = s.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[n] = a);
}
var PR = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: $R,
};
function NR(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = PS({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
var TR = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: NR,
  data: {},
};
function RR(e) {
  return e === "x" ? "y" : "x";
}
function AR(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    o = r.mainAxis,
    i = o === void 0 ? !0 : o,
    a = r.altAxis,
    s = a === void 0 ? !1 : a,
    l = r.boundary,
    u = r.rootBoundary,
    c = r.altBoundary,
    d = r.padding,
    p = r.tether,
    h = p === void 0 ? !0 : p,
    w = r.tetherOffset,
    m = w === void 0 ? 0 : w,
    b = js(t, { boundary: l, rootBoundary: u, padding: d, altBoundary: c }),
    y = Zr(t.placement),
    g = oa(t.placement),
    x = !g,
    S = Zm(y),
    C = RR(S),
    $ = t.modifiersData.popperOffsets,
    P = t.rects.reference,
    R = t.rects.popper,
    M =
      typeof m == "function"
        ? m(Object.assign({}, t.rects, { placement: t.placement }))
        : m,
    L =
      typeof M == "number"
        ? { mainAxis: M, altAxis: M }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, M),
    F = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    B = { x: 0, y: 0 };
  if (!!$) {
    if (i) {
      var z,
        G = S === "y" ? Qt : Xt,
        X = S === "y" ? Sr : Er,
        ne = S === "y" ? "height" : "width",
        fe = $[S],
        D = fe + b[G],
        K = fe - b[X],
        W = h ? -R[ne] / 2 : 0,
        oe = g === ta ? P[ne] : R[ne],
        le = g === ta ? -R[ne] : -P[ne],
        _e = t.elements.arrow,
        Re = h && _e ? Jm(_e) : { width: 0, height: 0 },
        ie = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : CS(),
        ye = ie[G],
        Se = ie[X],
        Xe = ds(0, P[ne], Re[ne]),
        it = x
          ? P[ne] / 2 - W - Xe - ye - L.mainAxis
          : oe - Xe - ye - L.mainAxis,
        Le = x
          ? -P[ne] / 2 + W + Xe + Se + L.mainAxis
          : le + Xe + Se + L.mainAxis,
        Ae = t.elements.arrow && il(t.elements.arrow),
        yt = Ae ? (S === "y" ? Ae.clientTop || 0 : Ae.clientLeft || 0) : 0,
        he = (z = F == null ? void 0 : F[S]) != null ? z : 0,
        O = fe + it - he - yt,
        A = fe + Le - he,
        k = ds(h ? rc(D, O) : D, fe, h ? Lo(K, A) : K);
      ($[S] = k), (B[S] = k - fe);
    }
    if (s) {
      var V,
        N = S === "x" ? Qt : Xt,
        _ = S === "x" ? Sr : Er,
        T = $[C],
        H = C === "y" ? "height" : "width",
        U = T + b[N],
        ae = T - b[_],
        se = [Qt, Xt].indexOf(y) !== -1,
        q = (V = F == null ? void 0 : F[C]) != null ? V : 0,
        J = se ? U : T - P[H] - R[H] - q + L.altAxis,
        ke = se ? T + P[H] + R[H] - q - L.altAxis : ae,
        de = h && se ? rR(J, T, ke) : ds(h ? J : U, T, h ? ke : ae);
      ($[C] = de), (B[C] = de - T);
    }
    t.modifiersData[n] = B;
  }
}
var kR = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: AR,
  requiresIfExists: ["offset"],
};
function DR(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function FR(e) {
  return e === _r(e) || !en(e) ? ev(e) : DR(e);
}
function LR(e) {
  var t = e.getBoundingClientRect(),
    r = ra(t.width) / e.offsetWidth || 1,
    n = ra(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function MR(e, t, r) {
  r === void 0 && (r = !1);
  var n = en(t),
    o = en(t) && LR(t),
    i = ho(t),
    a = na(e, o, r),
    s = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((so(t) !== "body" || rv(i)) && (s = FR(t)),
      en(t)
        ? ((l = na(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : i && (l.x = tv(i))),
    {
      x: a.left + s.scrollLeft - l.x,
      y: a.top + s.scrollTop - l.y,
      width: a.width,
      height: a.height,
    }
  );
}
function IR(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function o(i) {
    r.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function (s) {
      if (!r.has(s)) {
        var l = t.get(s);
        l && o(l);
      }
    }),
      n.push(i);
  }
  return (
    e.forEach(function (i) {
      r.has(i.name) || o(i);
    }),
    n
  );
}
function jR(e) {
  var t = IR(e);
  return ZT.reduce(function (r, n) {
    return r.concat(
      t.filter(function (o) {
        return o.phase === n;
      })
    );
  }, []);
}
function UR(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (r) {
          Promise.resolve().then(function () {
            (t = void 0), r(e());
          });
        })),
      t
    );
  };
}
function BR(e) {
  var t = e.reduce(function (r, n) {
    var o = r[n.name];
    return (
      (r[n.name] = o
        ? Object.assign({}, o, n, {
            options: Object.assign({}, o.options, n.options),
            data: Object.assign({}, o.data, n.data),
          })
        : n),
      r
    );
  }, {});
  return Object.keys(t).map(function (r) {
    return t[r];
  });
}
var r0 = { placement: "bottom", modifiers: [], strategy: "absolute" };
function n0() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function zR(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    o = t.defaultOptions,
    i = o === void 0 ? r0 : o;
  return function (s, l, u) {
    u === void 0 && (u = i);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, r0, i),
        modifiersData: {},
        elements: { reference: s, popper: l },
        attributes: {},
        styles: {},
      },
      d = [],
      p = !1,
      h = {
        state: c,
        setOptions: function (y) {
          var g = typeof y == "function" ? y(c.options) : y;
          m(),
            (c.options = Object.assign({}, i, c.options, g)),
            (c.scrollParents = {
              reference: Ko(s)
                ? ps(s)
                : s.contextElement
                ? ps(s.contextElement)
                : [],
              popper: ps(l),
            });
          var x = jR(BR([].concat(n, c.options.modifiers)));
          return (
            (c.orderedModifiers = x.filter(function (S) {
              return S.enabled;
            })),
            w(),
            h.update()
          );
        },
        forceUpdate: function () {
          if (!p) {
            var y = c.elements,
              g = y.reference,
              x = y.popper;
            if (!!n0(g, x)) {
              (c.rects = {
                reference: MR(g, il(x), c.options.strategy === "fixed"),
                popper: Jm(x),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (L) {
                  return (c.modifiersData[L.name] = Object.assign({}, L.data));
                });
              for (var S = 0; S < c.orderedModifiers.length; S++) {
                if (c.reset === !0) {
                  (c.reset = !1), (S = -1);
                  continue;
                }
                var C = c.orderedModifiers[S],
                  $ = C.fn,
                  P = C.options,
                  R = P === void 0 ? {} : P,
                  M = C.name;
                typeof $ == "function" &&
                  (c = $({ state: c, options: R, name: M, instance: h }) || c);
              }
            }
          }
        },
        update: UR(function () {
          return new Promise(function (b) {
            h.forceUpdate(), b(c);
          });
        }),
        destroy: function () {
          m(), (p = !0);
        },
      };
    if (!n0(s, l)) return h;
    h.setOptions(u).then(function (b) {
      !p && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function w() {
      c.orderedModifiers.forEach(function (b) {
        var y = b.name,
          g = b.options,
          x = g === void 0 ? {} : g,
          S = b.effect;
        if (typeof S == "function") {
          var C = S({ state: c, name: y, instance: h, options: x }),
            $ = function () {};
          d.push(C || $);
        }
      });
    }
    function m() {
      d.forEach(function (b) {
        return b();
      }),
        (d = []);
    }
    return h;
  };
}
const HR = zR({ defaultModifiers: [OR, TR, cR, dR, PR, ER, kR, aR] }),
  VR = ["enabled", "placement", "strategy", "modifiers"];
function WR(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
const KR = {
    name: "applyStyles",
    enabled: !1,
    phase: "afterWrite",
    fn: () => {},
  },
  qR = {
    name: "ariaDescribedBy",
    enabled: !0,
    phase: "afterWrite",
    effect:
      ({ state: e }) =>
      () => {
        const { reference: t, popper: r } = e.elements;
        if ("removeAttribute" in t) {
          const n = (t.getAttribute("aria-describedby") || "")
            .split(",")
            .filter((o) => o.trim() !== r.id);
          n.length
            ? t.setAttribute("aria-describedby", n.join(","))
            : t.removeAttribute("aria-describedby");
        }
      },
    fn: ({ state: e }) => {
      var t;
      const { popper: r, reference: n } = e.elements,
        o = (t = r.getAttribute("role")) == null ? void 0 : t.toLowerCase();
      if (r.id && o === "tooltip" && "setAttribute" in n) {
        const i = n.getAttribute("aria-describedby");
        if (i && i.split(",").indexOf(r.id) !== -1) return;
        n.setAttribute("aria-describedby", i ? `${i},${r.id}` : r.id);
      }
    },
  },
  GR = [];
function YR(e, t, r = {}) {
  let {
      enabled: n = !0,
      placement: o = "bottom",
      strategy: i = "absolute",
      modifiers: a = GR,
    } = r,
    s = WR(r, VR);
  const l = v.exports.useRef(a),
    u = v.exports.useRef(),
    c = v.exports.useCallback(() => {
      var b;
      (b = u.current) == null || b.update();
    }, []),
    d = v.exports.useCallback(() => {
      var b;
      (b = u.current) == null || b.forceUpdate();
    }, []),
    [p, h] = BT(
      v.exports.useState({
        placement: o,
        update: c,
        forceUpdate: d,
        attributes: {},
        styles: { popper: {}, arrow: {} },
      })
    ),
    w = v.exports.useMemo(
      () => ({
        name: "updateStateModifier",
        enabled: !0,
        phase: "write",
        requires: ["computeStyles"],
        fn: ({ state: b }) => {
          const y = {},
            g = {};
          Object.keys(b.elements).forEach((x) => {
            (y[x] = b.styles[x]), (g[x] = b.attributes[x]);
          }),
            h({
              state: b,
              styles: y,
              attributes: g,
              update: c,
              forceUpdate: d,
              placement: b.placement,
            });
        },
      }),
      [c, d, h]
    ),
    m = v.exports.useMemo(
      () => (fs(l.current, a) || (l.current = a), l.current),
      [a]
    );
  return (
    v.exports.useEffect(() => {
      !u.current ||
        !n ||
        u.current.setOptions({
          placement: o,
          strategy: i,
          modifiers: [...m, w, KR],
        });
    }, [i, o, w, n, m]),
    v.exports.useEffect(() => {
      if (!(!n || e == null || t == null))
        return (
          (u.current = HR(
            e,
            t,
            Object.assign({}, s, {
              placement: o,
              strategy: i,
              modifiers: [...m, qR, w],
            })
          )),
          () => {
            u.current != null &&
              (u.current.destroy(),
              (u.current = void 0),
              h((b) =>
                Object.assign({}, b, { attributes: {}, styles: { popper: {} } })
              ));
          }
        );
    }, [n, e, t]),
    p
  );
}
function nc(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition)
    return e === t || !!(e.compareDocumentPosition(t) & 16);
}
const o0 = () => {};
function QR(e) {
  return e.button === 0;
}
function XR(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
const hd = (e) => e && ("current" in e ? e.current : e),
  i0 = { click: "mousedown", mouseup: "mousedown", pointerup: "pointerdown" };
function JR(e, t = o0, { disabled: r, clickTrigger: n = "click" } = {}) {
  const o = v.exports.useRef(!1),
    i = v.exports.useRef(!1),
    a = v.exports.useCallback(
      (u) => {
        const c = hd(e);
        (o.current = !c || XR(u) || !QR(u) || !!nc(c, u.target) || i.current),
          (i.current = !1);
      },
      [e]
    ),
    s = We((u) => {
      const c = hd(e);
      c && nc(c, u.target) && (i.current = !0);
    }),
    l = We((u) => {
      o.current || t(u);
    });
  v.exports.useEffect(() => {
    if (r || e == null) return;
    const u = el(hd(e));
    let c = (u.defaultView || window).event,
      d = null;
    i0[n] && (d = Gn(u, i0[n], s, !0));
    const p = Gn(u, n, a, !0),
      h = Gn(u, n, (m) => {
        if (m === c) {
          c = void 0;
          return;
        }
        l(m);
      });
    let w = [];
    return (
      "ontouchstart" in u.documentElement &&
        (w = [].slice.call(u.body.children).map((m) => Gn(m, "mousemove", o0))),
      () => {
        d == null || d(), p(), h(), w.forEach((m) => m());
      }
    );
  }, [e, r, n, a, s, l]);
}
function ZR(e) {
  const t = {};
  return Array.isArray(e)
    ? (e == null ||
        e.forEach((r) => {
          t[r.name] = r;
        }),
      t)
    : e || t;
}
function eA(e = {}) {
  return Array.isArray(e)
    ? e
    : Object.keys(e).map((t) => ((e[t].name = t), e[t]));
}
function tA({
  enabled: e,
  enableEvents: t,
  placement: r,
  flip: n,
  offset: o,
  fixed: i,
  containerPadding: a,
  arrowElement: s,
  popperConfig: l = {},
}) {
  var u, c, d, p, h;
  const w = ZR(l.modifiers);
  return Object.assign({}, l, {
    placement: r,
    enabled: e,
    strategy: i ? "fixed" : l.strategy,
    modifiers: eA(
      Object.assign({}, w, {
        eventListeners: {
          enabled: t,
          options: (u = w.eventListeners) == null ? void 0 : u.options,
        },
        preventOverflow: Object.assign({}, w.preventOverflow, {
          options: a
            ? Object.assign(
                { padding: a },
                (c = w.preventOverflow) == null ? void 0 : c.options
              )
            : (d = w.preventOverflow) == null
            ? void 0
            : d.options,
        }),
        offset: {
          options: Object.assign(
            { offset: o },
            (p = w.offset) == null ? void 0 : p.options
          ),
        },
        arrow: Object.assign({}, w.arrow, {
          enabled: !!s,
          options: Object.assign(
            {},
            (h = w.arrow) == null ? void 0 : h.options,
            { element: s }
          ),
        }),
        flip: Object.assign({ enabled: !!n }, w.flip),
      })
    ),
  });
}
const rA = ["children"];
function nA(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
const oA = () => {};
function NS(e = {}) {
  const t = v.exports.useContext(Yc),
    [r, n] = aS(),
    o = v.exports.useRef(!1),
    {
      flip: i,
      offset: a,
      rootCloseEvent: s,
      fixed: l = !1,
      placement: u,
      popperConfig: c = {},
      enableEventListeners: d = !0,
      usePopper: p = !!t,
    } = e,
    h = (t == null ? void 0 : t.show) == null ? !!e.show : t.show;
  h && !o.current && (o.current = !0);
  const w = ($) => {
      t == null || t.toggle(!1, $);
    },
    { placement: m, setMenu: b, menuElement: y, toggleElement: g } = t || {},
    x = YR(
      g,
      y,
      tA({
        placement: u || m || "bottom-start",
        enabled: p,
        enableEvents: d == null ? h : d,
        offset: a,
        flip: i,
        fixed: l,
        arrowElement: r,
        popperConfig: c,
      })
    ),
    S = Object.assign(
      { ref: b || oA, "aria-labelledby": g == null ? void 0 : g.id },
      x.attributes.popper,
      { style: x.styles.popper }
    ),
    C = {
      show: h,
      placement: m,
      hasShown: o.current,
      toggle: t == null ? void 0 : t.toggle,
      popper: p ? x : null,
      arrowProps: p
        ? Object.assign({ ref: n }, x.attributes.arrow, {
            style: x.styles.arrow,
          })
        : {},
    };
  return JR(y, w, { clickTrigger: s, disabled: !h }), [S, C];
}
const iA = { usePopper: !0 };
function nv(e) {
  let { children: t } = e,
    r = nA(e, rA);
  const [n, o] = NS(r);
  return f(br, { children: t(n, o) });
}
nv.displayName = "DropdownMenu";
nv.defaultProps = iA;
const TS = { prefix: String(Math.round(Math.random() * 1e10)), current: 0 },
  aA = be.createContext(TS);
let sA = Boolean(
  typeof window != "undefined" &&
    window.document &&
    window.document.createElement
);
function lA(e) {
  let t = v.exports.useContext(aA);
  return (
    t === TS &&
      !sA &&
      console.warn(
        "When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."
      ),
    v.exports.useMemo(() => e || `react-aria${t.prefix}-${++t.current}`, [e])
  );
}
const RS = (e) => {
    var t;
    return (
      ((t = e.getAttribute("role")) == null ? void 0 : t.toLowerCase()) ===
      "menu"
    );
  },
  a0 = () => {};
function AS() {
  const e = lA(),
    {
      show: t = !1,
      toggle: r = a0,
      setToggle: n,
      menuElement: o,
    } = v.exports.useContext(Yc) || {},
    i = v.exports.useCallback(
      (s) => {
        r(!t, s);
      },
      [t, r]
    ),
    a = { id: e, ref: n || a0, onClick: i, "aria-expanded": !!t };
  return o && RS(o) && (a["aria-haspopup"] = !0), [a, { show: t, toggle: r }];
}
function kS({ children: e }) {
  const [t, r] = AS();
  return f(br, { children: e(t, r) });
}
kS.displayName = "DropdownToggle";
const qo = v.exports.createContext(null),
  ia = (e, t = null) => (e != null ? String(e) : t || null),
  Xc = v.exports.createContext(null);
Xc.displayName = "NavContext";
const uA = "data-rr-ui-",
  cA = "rrUi";
function ga(e) {
  return `${uA}${e}`;
}
function fA(e) {
  return `${cA}${e}`;
}
const dA = ["eventKey", "disabled", "onClick", "active", "as"];
function pA(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function DS({ key: e, href: t, active: r, disabled: n, onClick: o }) {
  const i = v.exports.useContext(qo),
    a = v.exports.useContext(Xc),
    { activeKey: s } = a || {},
    l = ia(e, t),
    u = r == null && e != null ? ia(s) === l : r;
  return [
    {
      onClick: We((d) => {
        n || (o == null || o(d), i && !d.isPropagationStopped() && i(l, d));
      }),
      "aria-disabled": n || void 0,
      "aria-selected": u,
      [ga("dropdown-item")]: "",
    },
    { isActive: u },
  ];
}
const FS = v.exports.forwardRef((e, t) => {
  let { eventKey: r, disabled: n, onClick: o, active: i, as: a = Hm } = e,
    s = pA(e, dA);
  const [l] = DS({ key: r, href: s.href, disabled: n, onClick: o, active: i });
  return f(a, Object.assign({}, s, { ref: t }, l));
});
FS.displayName = "DropdownItem";
const LS = v.exports.createContext(va ? window : void 0);
LS.Provider;
function ov() {
  return v.exports.useContext(LS);
}
function s0() {
  const e = wS(),
    t = v.exports.useRef(null),
    r = v.exports.useCallback(
      (n) => {
        (t.current = n), e();
      },
      [e]
    );
  return [t, r];
}
function al({
  defaultShow: e,
  show: t,
  onSelect: r,
  onToggle: n,
  itemSelector: o = `* [${ga("dropdown-item")}]`,
  focusFirstItemOnShow: i,
  placement: a = "bottom-start",
  children: s,
}) {
  const l = ov(),
    [u, c] = Yb(t, e, n),
    [d, p] = s0(),
    h = d.current,
    [w, m] = s0(),
    b = w.current,
    y = sS(u),
    g = v.exports.useRef(null),
    x = v.exports.useRef(!1),
    S = v.exports.useContext(qo),
    C = v.exports.useCallback(
      (F, B, z = B == null ? void 0 : B.type) => {
        c(F, { originalEvent: B, source: z });
      },
      [c]
    ),
    $ = We((F, B) => {
      r == null || r(F, B),
        C(!1, B, "select"),
        B.isPropagationStopped() || S == null || S(F, B);
    }),
    P = v.exports.useMemo(
      () => ({
        toggle: C,
        placement: a,
        show: u,
        menuElement: h,
        toggleElement: b,
        setMenu: p,
        setToggle: m,
      }),
      [C, a, u, h, b, p, m]
    );
  h && y && !u && (x.current = h.contains(h.ownerDocument.activeElement));
  const R = We(() => {
      b && b.focus && b.focus();
    }),
    M = We(() => {
      const F = g.current;
      let B = i;
      if (
        (B == null && (B = d.current && RS(d.current) ? "keyboard" : !1),
        B === !1 || (B === "keyboard" && !/^key.+$/.test(F)))
      )
        return;
      const z = hn(d.current, o)[0];
      z && z.focus && z.focus();
    });
  v.exports.useEffect(() => {
    u ? M() : x.current && ((x.current = !1), R());
  }, [u, x, R, M]),
    v.exports.useEffect(() => {
      g.current = null;
    });
  const L = (F, B) => {
    if (!d.current) return null;
    const z = hn(d.current, o);
    let G = z.indexOf(F) + B;
    return (G = Math.max(0, Math.min(G, z.length))), z[G];
  };
  return (
    JN(
      v.exports.useCallback(() => l.document, [l]),
      "keydown",
      (F) => {
        var B, z;
        const { key: G } = F,
          X = F.target,
          ne = (B = d.current) == null ? void 0 : B.contains(X),
          fe = (z = w.current) == null ? void 0 : z.contains(X);
        if (
          (/input|textarea/i.test(X.tagName) &&
            (G === " " ||
              (G !== "Escape" && ne) ||
              (G === "Escape" && X.type === "search"))) ||
          (!ne && !fe) ||
          (G === "Tab" && (!d.current || !u))
        )
          return;
        g.current = F.type;
        const K = { originalEvent: F, source: F.type };
        switch (G) {
          case "ArrowUp": {
            const W = L(X, -1);
            W && W.focus && W.focus(), F.preventDefault();
            return;
          }
          case "ArrowDown":
            if ((F.preventDefault(), !u)) c(!0, K);
            else {
              const W = L(X, 1);
              W && W.focus && W.focus();
            }
            return;
          case "Tab":
            jm(
              X.ownerDocument,
              "keyup",
              (W) => {
                var oe;
                ((W.key === "Tab" && !W.target) ||
                  !((oe = d.current) != null && oe.contains(W.target))) &&
                  c(!1, K);
              },
              { once: !0 }
            );
            break;
          case "Escape":
            G === "Escape" && (F.preventDefault(), F.stopPropagation()),
              c(!1, K);
            break;
        }
      }
    ),
    f(qo.Provider, {
      value: $,
      children: f(Yc.Provider, { value: P, children: s }),
    })
  );
}
al.displayName = "Dropdown";
al.Menu = nv;
al.Toggle = kS;
al.Item = FS;
const MS = v.exports.createContext({});
MS.displayName = "DropdownContext";
var IS = MS;
const jS = v.exports.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      eventKey: r,
      disabled: n = !1,
      onClick: o,
      active: i,
      as: a = Wo,
      ...s
    },
    l
  ) => {
    const u = ue(e, "dropdown-item"),
      [c, d] = DS({ key: r, href: s.href, disabled: n, onClick: o, active: i });
    return f(a, {
      ...s,
      ...c,
      ref: l,
      className: ee(t, u, d.isActive && "active", n && "disabled"),
    });
  }
);
jS.displayName = "DropdownItem";
var hA = jS;
const US = v.exports.createContext(null);
US.displayName = "InputGroupContext";
var BS = US;
const zS = v.exports.createContext(null);
zS.displayName = "NavbarContext";
var ti = zS;
function HS(e, t) {
  return e;
}
const mA = { flip: !0 };
function VS(e, t, r) {
  const n = r ? "top-end" : "top-start",
    o = r ? "top-start" : "top-end",
    i = r ? "bottom-end" : "bottom-start",
    a = r ? "bottom-start" : "bottom-end",
    s = r ? "right-start" : "left-start",
    l = r ? "right-end" : "left-end",
    u = r ? "left-start" : "right-start",
    c = r ? "left-end" : "right-end";
  let d = e ? a : i;
  return (
    t === "up"
      ? (d = e ? o : n)
      : t === "end"
      ? (d = e ? c : u)
      : t === "start"
      ? (d = e ? l : s)
      : t === "down-centered"
      ? (d = "bottom")
      : t === "up-centered" && (d = "top"),
    d
  );
}
const iv = v.exports.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      align: r,
      rootCloseEvent: n,
      flip: o,
      show: i,
      renderOnMount: a,
      as: s = "div",
      popperConfig: l,
      variant: u,
      ...c
    },
    d
  ) => {
    let p = !1;
    const h = v.exports.useContext(ti),
      w = ue(e, "dropdown-menu"),
      { align: m, drop: b, isRTL: y } = v.exports.useContext(IS);
    r = r || m;
    const g = v.exports.useContext(BS),
      x = [];
    if (r)
      if (typeof r == "object") {
        const F = Object.keys(r);
        if (F.length) {
          const B = F[0],
            z = r[B];
          (p = z === "start"), x.push(`${w}-${B}-${z}`);
        }
      } else r === "end" && (p = !0);
    const S = VS(p, b, y),
      [C, { hasShown: $, popper: P, show: R, toggle: M }] = NS({
        flip: o,
        rootCloseEvent: n,
        show: i,
        usePopper: !h && x.length === 0,
        offset: [0, 2],
        popperConfig: l,
        placement: S,
      });
    if (
      ((C.ref = tl(HS(d), C.ref)),
      lS(() => {
        R && (P == null || P.update());
      }, [R]),
      !$ && !a && !g)
    )
      return null;
    typeof s != "string" &&
      ((C.show = R),
      (C.close = () => (M == null ? void 0 : M(!1))),
      (C.align = r));
    let L = c.style;
    return (
      P != null &&
        P.placement &&
        ((L = { ...c.style, ...C.style }), (c["x-placement"] = P.placement)),
      f(s, {
        ...c,
        ...C,
        style: L,
        ...((x.length || h) && { "data-bs-popper": "static" }),
        className: ee(
          t,
          w,
          R && "show",
          p && `${w}-end`,
          u && `${w}-${u}`,
          ...x
        ),
      })
    );
  }
);
iv.displayName = "DropdownMenu";
iv.defaultProps = mA;
var vA = iv;
const WS = v.exports.forwardRef(
  (
    { bsPrefix: e, split: t, className: r, childBsPrefix: n, as: o = ht, ...i },
    a
  ) => {
    const s = ue(e, "dropdown-toggle"),
      l = v.exports.useContext(Yc);
    n !== void 0 && (i.bsPrefix = n);
    const [u] = AS();
    return (
      (u.ref = tl(u.ref, HS(a))),
      f(o, {
        className: ee(
          r,
          s,
          t && `${s}-split`,
          (l == null ? void 0 : l.show) && "show"
        ),
        ...u,
        ...i,
      })
    );
  }
);
WS.displayName = "DropdownToggle";
var gA = WS;
const yA = tt("dropdown-header", { defaultProps: { role: "heading" } }),
  wA = tt("dropdown-divider", {
    Component: "hr",
    defaultProps: { role: "separator" },
  }),
  xA = tt("dropdown-item-text", { Component: "span" }),
  bA = { navbar: !1, align: "start", autoClose: !0, drop: "down" },
  av = v.exports.forwardRef((e, t) => {
    const {
        bsPrefix: r,
        drop: n,
        show: o,
        className: i,
        align: a,
        onSelect: s,
        onToggle: l,
        focusFirstItemOnShow: u,
        as: c = "div",
        navbar: d,
        autoClose: p,
        ...h
      } = ma(e, { show: "onToggle" }),
      w = v.exports.useContext(BS),
      m = ue(r, "dropdown"),
      b = Im(),
      y = (P) =>
        p === !1
          ? P === "click"
          : p === "inside"
          ? P !== "rootClose"
          : p === "outside"
          ? P !== "select"
          : !0,
      g = We((P, R) => {
        R.originalEvent.currentTarget === document &&
          (R.source !== "keydown" || R.originalEvent.key === "Escape") &&
          (R.source = "rootClose"),
          y(R.source) && (l == null || l(P, R));
      }),
      S = VS(a === "end", n, b),
      C = v.exports.useMemo(() => ({ align: a, drop: n, isRTL: b }), [a, n, b]),
      $ = {
        down: m,
        "down-centered": `${m}-center`,
        up: "dropup",
        "up-centered": "dropup-center dropup",
        end: "dropend",
        start: "dropstart",
      };
    return f(IS.Provider, {
      value: C,
      children: f(al, {
        placement: S,
        show: o,
        onSelect: s,
        onToggle: g,
        focusFirstItemOnShow: u,
        itemSelector: `.${m}-item:not(.disabled):not(:disabled)`,
        children: w
          ? h.children
          : f(c, { ...h, ref: t, className: ee(i, o && "show", $[n]) }),
      }),
    });
  });
av.displayName = "Dropdown";
av.defaultProps = bA;
var Ao = Object.assign(av, {
  Toggle: gA,
  Menu: vA,
  Item: hA,
  ItemText: xA,
  Divider: wA,
  Header: yA,
});
const SA = { type: me.string, tooltip: me.bool, as: me.elementType },
  sv = v.exports.forwardRef(
    (
      { as: e = "div", className: t, type: r = "valid", tooltip: n = !1, ...o },
      i
    ) =>
      f(e, {
        ...o,
        ref: i,
        className: ee(t, `${r}-${n ? "tooltip" : "feedback"}`),
      })
  );
sv.displayName = "Feedback";
sv.propTypes = SA;
var KS = sv;
const EA = v.exports.createContext({});
var _n = EA;
const qS = v.exports.forwardRef(
  (
    {
      id: e,
      bsPrefix: t,
      className: r,
      type: n = "checkbox",
      isValid: o = !1,
      isInvalid: i = !1,
      as: a = "input",
      ...s
    },
    l
  ) => {
    const { controlId: u } = v.exports.useContext(_n);
    return (
      (t = ue(t, "form-check-input")),
      f(a, {
        ...s,
        ref: l,
        type: n,
        id: e || u,
        className: ee(r, t, o && "is-valid", i && "is-invalid"),
      })
    );
  }
);
qS.displayName = "FormCheckInput";
var GS = qS;
const YS = v.exports.forwardRef(
  ({ bsPrefix: e, className: t, htmlFor: r, ...n }, o) => {
    const { controlId: i } = v.exports.useContext(_n);
    return (
      (e = ue(e, "form-check-label")),
      f("label", { ...n, ref: o, htmlFor: r || i, className: ee(t, e) })
    );
  }
);
YS.displayName = "FormCheckLabel";
var Gp = YS;
const QS = v.exports.forwardRef(
  (
    {
      id: e,
      bsPrefix: t,
      bsSwitchPrefix: r,
      inline: n = !1,
      reverse: o = !1,
      disabled: i = !1,
      isValid: a = !1,
      isInvalid: s = !1,
      feedbackTooltip: l = !1,
      feedback: u,
      feedbackType: c,
      className: d,
      style: p,
      title: h = "",
      type: w = "checkbox",
      label: m,
      children: b,
      as: y = "input",
      ...g
    },
    x
  ) => {
    (t = ue(t, "form-check")), (r = ue(r, "form-switch"));
    const { controlId: S } = v.exports.useContext(_n),
      C = v.exports.useMemo(() => ({ controlId: e || S }), [S, e]),
      $ = (!b && m != null && m !== !1) || FT(b, Gp),
      P = f(GS, {
        ...g,
        type: w === "switch" ? "checkbox" : w,
        ref: x,
        isValid: a,
        isInvalid: s,
        disabled: i,
        as: y,
      });
    return f(_n.Provider, {
      value: C,
      children: f("div", {
        style: p,
        className: ee(
          d,
          $ && t,
          n && `${t}-inline`,
          o && `${t}-reverse`,
          w === "switch" && r
        ),
        children:
          b ||
          E(br, {
            children: [
              P,
              $ && f(Gp, { title: h, children: m }),
              u && f(KS, { type: c, tooltip: l, children: u }),
            ],
          }),
      }),
    });
  }
);
QS.displayName = "FormCheck";
var oc = Object.assign(QS, { Input: GS, Label: Gp });
const XS = v.exports.forwardRef(
  (
    {
      bsPrefix: e,
      type: t,
      size: r,
      htmlSize: n,
      id: o,
      className: i,
      isValid: a = !1,
      isInvalid: s = !1,
      plaintext: l,
      readOnly: u,
      as: c = "input",
      ...d
    },
    p
  ) => {
    const { controlId: h } = v.exports.useContext(_n);
    e = ue(e, "form-control");
    let w;
    return (
      l
        ? (w = { [`${e}-plaintext`]: !0 })
        : (w = { [e]: !0, [`${e}-${r}`]: r }),
      f(c, {
        ...d,
        type: t,
        size: n,
        ref: p,
        readOnly: u,
        id: o || h,
        className: ee(
          i,
          w,
          a && "is-valid",
          s && "is-invalid",
          t === "color" && `${e}-color`
        ),
      })
    );
  }
);
XS.displayName = "FormControl";
var CA = Object.assign(XS, { Feedback: KS }),
  OA = tt("form-floating");
const JS = v.exports.forwardRef(({ controlId: e, as: t = "div", ...r }, n) => {
  const o = v.exports.useMemo(() => ({ controlId: e }), [e]);
  return f(_n.Provider, { value: o, children: f(t, { ...r, ref: n }) });
});
JS.displayName = "FormGroup";
var ZS = JS;
const _A = { column: !1, visuallyHidden: !1 },
  lv = v.exports.forwardRef(
    (
      {
        as: e = "label",
        bsPrefix: t,
        column: r,
        visuallyHidden: n,
        className: o,
        htmlFor: i,
        ...a
      },
      s
    ) => {
      const { controlId: l } = v.exports.useContext(_n);
      t = ue(t, "form-label");
      let u = "col-form-label";
      typeof r == "string" && (u = `${u} ${u}-${r}`);
      const c = ee(o, t, n && "visually-hidden", r && u);
      return (
        (i = i || l),
        r
          ? f(re, { ref: s, as: "label", className: c, htmlFor: i, ...a })
          : f(e, { ref: s, className: c, htmlFor: i, ...a })
      );
    }
  );
lv.displayName = "FormLabel";
lv.defaultProps = _A;
var $A = lv;
const eE = v.exports.forwardRef(
  ({ bsPrefix: e, className: t, id: r, ...n }, o) => {
    const { controlId: i } = v.exports.useContext(_n);
    return (
      (e = ue(e, "form-range")),
      f("input", {
        ...n,
        type: "range",
        ref: o,
        className: ee(t, e),
        id: r || i,
      })
    );
  }
);
eE.displayName = "FormRange";
var PA = eE;
const tE = v.exports.forwardRef(
  (
    {
      bsPrefix: e,
      size: t,
      htmlSize: r,
      className: n,
      isValid: o = !1,
      isInvalid: i = !1,
      id: a,
      ...s
    },
    l
  ) => {
    const { controlId: u } = v.exports.useContext(_n);
    return (
      (e = ue(e, "form-select")),
      f("select", {
        ...s,
        size: r,
        ref: l,
        className: ee(
          n,
          e,
          t && `${e}-${t}`,
          o && "is-valid",
          i && "is-invalid"
        ),
        id: a || u,
      })
    );
  }
);
tE.displayName = "FormSelect";
var Yp = tE;
const rE = v.exports.forwardRef(
  ({ bsPrefix: e, className: t, as: r = "small", muted: n, ...o }, i) => (
    (e = ue(e, "form-text")),
    f(r, { ...o, ref: i, className: ee(t, e, n && "text-muted") })
  )
);
rE.displayName = "FormText";
var NA = rE;
const nE = v.exports.forwardRef((e, t) =>
  f(oc, { ...e, ref: t, type: "switch" })
);
nE.displayName = "Switch";
var TA = Object.assign(nE, { Input: oc.Input, Label: oc.Label });
const oE = v.exports.forwardRef(
  (
    { bsPrefix: e, className: t, children: r, controlId: n, label: o, ...i },
    a
  ) => (
    (e = ue(e, "form-floating")),
    E(ZS, {
      ref: a,
      className: ee(t, e),
      controlId: n,
      ...i,
      children: [r, f("label", { htmlFor: n, children: o })],
    })
  )
);
oE.displayName = "FloatingLabel";
var RA = oE;
const AA = { _ref: me.any, validated: me.bool, as: me.elementType },
  uv = v.exports.forwardRef(
    ({ className: e, validated: t, as: r = "form", ...n }, o) =>
      f(r, { ...n, ref: o, className: ee(e, t && "was-validated") })
  );
uv.displayName = "Form";
uv.propTypes = AA;
var I = Object.assign(uv, {
  Group: ZS,
  Control: CA,
  Floating: OA,
  Check: oc,
  Switch: TA,
  Label: $A,
  Text: NA,
  Range: PA,
  Select: Yp,
  FloatingLabel: RA,
});
const kA = { fluid: !1 },
  cv = v.exports.forwardRef(
    ({ bsPrefix: e, fluid: t, as: r = "div", className: n, ...o }, i) => {
      const a = ue(e, "container"),
        s = typeof t == "string" ? `-${t}` : "-fluid";
      return f(r, { ref: i, ...o, className: ee(n, t ? `${a}${s}` : a) });
    }
  );
cv.displayName = "Container";
cv.defaultProps = kA;
var jt = cv;
me.string, me.bool, me.bool, me.bool, me.bool;
const DA = { fluid: !1, rounded: !1, roundedCircle: !1, thumbnail: !1 },
  fv = v.exports.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        fluid: r,
        rounded: n,
        roundedCircle: o,
        thumbnail: i,
        ...a
      },
      s
    ) => (
      (e = ue(e, "img")),
      f("img", {
        ref: s,
        ...a,
        className: ee(
          t,
          r && `${e}-fluid`,
          n && "rounded",
          o && "rounded-circle",
          i && `${e}-thumbnail`
        ),
      })
    )
  );
fv.displayName = "Image";
fv.defaultProps = DA;
var ri = fv;
const iE = v.exports.createContext(null),
  FA = ["as", "active", "eventKey"];
function LA(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function dv({ key: e, onClick: t, active: r, id: n, role: o, disabled: i }) {
  const a = v.exports.useContext(qo),
    s = v.exports.useContext(Xc),
    l = v.exports.useContext(iE);
  let u = r;
  const c = { role: o };
  if (s) {
    !o && s.role === "tablist" && (c.role = "tab");
    const d = s.getControllerId(e != null ? e : null),
      p = s.getControlledId(e != null ? e : null);
    (c[ga("event-key")] = e),
      (c.id = d || n),
      (u = r == null && e != null ? s.activeKey === e : r),
      (u ||
        (!(l != null && l.unmountOnExit) && !(l != null && l.mountOnEnter))) &&
        (c["aria-controls"] = p);
  }
  return (
    c.role === "tab" &&
      ((c["aria-selected"] = u),
      u || (c.tabIndex = -1),
      i && ((c.tabIndex = -1), (c["aria-disabled"] = !0))),
    (c.onClick = We((d) => {
      i ||
        (t == null || t(d),
        e != null && a && !d.isPropagationStopped() && a(e, d));
    })),
    [c, { isActive: u }]
  );
}
const aE = v.exports.forwardRef((e, t) => {
  let { as: r = Hm, active: n, eventKey: o } = e,
    i = LA(e, FA);
  const [a, s] = dv(Object.assign({ key: ia(o, i.href), active: n }, i));
  return (
    (a[ga("active")] = s.isActive), f(r, Object.assign({}, i, a, { ref: t }))
  );
});
aE.displayName = "NavItem";
const MA = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function IA(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
const l0 = () => {},
  u0 = ga("event-key"),
  sE = v.exports.forwardRef((e, t) => {
    let { as: r = "div", onSelect: n, activeKey: o, role: i, onKeyDown: a } = e,
      s = IA(e, MA);
    const l = wS(),
      u = v.exports.useRef(!1),
      c = v.exports.useContext(qo),
      d = v.exports.useContext(iE);
    let p, h;
    d &&
      ((i = i || "tablist"),
      (o = d.activeKey),
      (p = d.getControlledId),
      (h = d.getControllerId));
    const w = v.exports.useRef(null),
      m = (x) => {
        const S = w.current;
        if (!S) return null;
        const C = hn(S, `[${u0}]:not([aria-disabled=true])`),
          $ = S.querySelector("[aria-selected=true]");
        if (!$ || $ !== document.activeElement) return null;
        const P = C.indexOf($);
        if (P === -1) return null;
        let R = P + x;
        return R >= C.length && (R = 0), R < 0 && (R = C.length - 1), C[R];
      },
      b = (x, S) => {
        x != null && (n == null || n(x, S), c == null || c(x, S));
      },
      y = (x) => {
        if ((a == null || a(x), !d)) return;
        let S;
        switch (x.key) {
          case "ArrowLeft":
          case "ArrowUp":
            S = m(-1);
            break;
          case "ArrowRight":
          case "ArrowDown":
            S = m(1);
            break;
          default:
            return;
        }
        !S ||
          (x.preventDefault(),
          b(S.dataset[fA("EventKey")] || null, x),
          (u.current = !0),
          l());
      };
    v.exports.useEffect(() => {
      if (w.current && u.current) {
        const x = w.current.querySelector(`[${u0}][aria-selected=true]`);
        x == null || x.focus();
      }
      u.current = !1;
    });
    const g = tl(t, w);
    return f(qo.Provider, {
      value: b,
      children: f(Xc.Provider, {
        value: {
          role: i,
          activeKey: ia(o),
          getControlledId: p || l0,
          getControllerId: h || l0,
        },
        children: f(r, Object.assign({}, s, { onKeyDown: y, ref: g, role: i })),
      }),
    });
  });
sE.displayName = "Nav";
var lE = Object.assign(sE, { Item: aE });
const uE = v.exports.forwardRef(
  (
    {
      bsPrefix: e,
      active: t,
      disabled: r,
      eventKey: n,
      className: o,
      variant: i,
      action: a,
      as: s,
      ...l
    },
    u
  ) => {
    e = ue(e, "list-group-item");
    const [c, d] = dv({ key: ia(n, l.href), active: t, ...l }),
      p = We((w) => {
        if (r) {
          w.preventDefault(), w.stopPropagation();
          return;
        }
        c.onClick(w);
      });
    r &&
      l.tabIndex === void 0 &&
      ((l.tabIndex = -1), (l["aria-disabled"] = !0));
    const h = s || (a ? (l.href ? "a" : "button") : "div");
    return f(h, {
      ref: u,
      ...l,
      ...c,
      onClick: p,
      className: ee(
        o,
        e,
        d.isActive && "active",
        r && "disabled",
        i && `${e}-${i}`,
        a && `${e}-action`
      ),
    });
  }
);
uE.displayName = "ListGroupItem";
var jA = uE;
const cE = v.exports.forwardRef((e, t) => {
  const {
      className: r,
      bsPrefix: n,
      variant: o,
      horizontal: i,
      numbered: a,
      as: s = "div",
      ...l
    } = ma(e, { activeKey: "onSelect" }),
    u = ue(n, "list-group");
  let c;
  return (
    i && (c = i === !0 ? "horizontal" : `horizontal-${i}`),
    f(lE, {
      ref: t,
      ...l,
      as: s,
      className: ee(
        r,
        u,
        o && `${u}-${o}`,
        c && `${u}-${c}`,
        a && `${u}-numbered`
      ),
    })
  );
});
cE.displayName = "ListGroup";
var pe = Object.assign(cE, { Item: jA }),
  Ul;
function c0(e) {
  if (((!Ul && Ul !== 0) || e) && va) {
    var t = document.createElement("div");
    (t.style.position = "absolute"),
      (t.style.top = "-9999px"),
      (t.style.width = "50px"),
      (t.style.height = "50px"),
      (t.style.overflow = "scroll"),
      document.body.appendChild(t),
      (Ul = t.offsetWidth - t.clientWidth),
      document.body.removeChild(t);
  }
  return Ul;
}
function md(e) {
  e === void 0 && (e = el());
  try {
    var t = e.activeElement;
    return !t || !t.nodeName ? null : t;
  } catch {
    return e.body;
  }
}
function UA(e = document) {
  const t = e.defaultView;
  return Math.abs(t.innerWidth - e.documentElement.clientWidth);
}
const f0 = ga("modal-open");
class pv {
  constructor({
    ownerDocument: t,
    handleContainerOverflow: r = !0,
    isRTL: n = !1,
  } = {}) {
    (this.handleContainerOverflow = r),
      (this.isRTL = n),
      (this.modals = []),
      (this.ownerDocument = t);
  }
  getScrollbarWidth() {
    return UA(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(t) {}
  removeModalAttributes(t) {}
  setContainerStyle(t) {
    const r = { overflow: "hidden" },
      n = this.isRTL ? "paddingLeft" : "paddingRight",
      o = this.getElement();
    (t.style = { overflow: o.style.overflow, [n]: o.style[n] }),
      t.scrollBarWidth &&
        (r[n] = `${parseInt(wn(o, n) || "0", 10) + t.scrollBarWidth}px`),
      o.setAttribute(f0, ""),
      wn(o, r);
  }
  reset() {
    [...this.modals].forEach((t) => this.remove(t));
  }
  removeContainerStyle(t) {
    const r = this.getElement();
    r.removeAttribute(f0), Object.assign(r.style, t.style);
  }
  add(t) {
    let r = this.modals.indexOf(t);
    return (
      r !== -1 ||
        ((r = this.modals.length),
        this.modals.push(t),
        this.setModalAttributes(t),
        r !== 0) ||
        ((this.state = { scrollBarWidth: this.getScrollbarWidth(), style: {} }),
        this.handleContainerOverflow && this.setContainerStyle(this.state)),
      r
    );
  }
  remove(t) {
    const r = this.modals.indexOf(t);
    r !== -1 &&
      (this.modals.splice(r, 1),
      !this.modals.length &&
        this.handleContainerOverflow &&
        this.removeContainerStyle(this.state),
      this.removeModalAttributes(t));
  }
  isTopModal(t) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === t;
  }
}
const vd = (e, t) =>
  va
    ? e == null
      ? (t || el()).body
      : (typeof e == "function" && (e = e()),
        e && "current" in e && (e = e.current),
        e && ("nodeType" in e || e.getBoundingClientRect) ? e : null)
    : null;
function BA(e, t) {
  const r = ov(),
    [n, o] = v.exports.useState(() => vd(e, r == null ? void 0 : r.document));
  if (!n) {
    const i = vd(e);
    i && o(i);
  }
  return (
    v.exports.useEffect(() => {
      t && n && t(n);
    }, [t, n]),
    v.exports.useEffect(() => {
      const i = vd(e);
      i !== n && o(i);
    }, [e, n]),
    n
  );
}
const zA = [
  "show",
  "role",
  "className",
  "style",
  "children",
  "backdrop",
  "keyboard",
  "onBackdropClick",
  "onEscapeKeyDown",
  "transition",
  "backdropTransition",
  "autoFocus",
  "enforceFocus",
  "restoreFocus",
  "restoreFocusOptions",
  "renderDialog",
  "renderBackdrop",
  "manager",
  "container",
  "onShow",
  "onHide",
  "onExit",
  "onExited",
  "onExiting",
  "onEnter",
  "onEntering",
  "onEntered",
];
function HA(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
let gd;
function VA(e) {
  return (
    gd || (gd = new pv({ ownerDocument: e == null ? void 0 : e.document })), gd
  );
}
function WA(e) {
  const t = ov(),
    r = e || VA(t),
    n = v.exports.useRef({ dialog: null, backdrop: null });
  return Object.assign(n.current, {
    add: () => r.add(n.current),
    remove: () => r.remove(n.current),
    isTopModal: () => r.isTopModal(n.current),
    setDialogRef: v.exports.useCallback((o) => {
      n.current.dialog = o;
    }, []),
    setBackdropRef: v.exports.useCallback((o) => {
      n.current.backdrop = o;
    }, []),
  });
}
const fE = v.exports.forwardRef((e, t) => {
  let {
      show: r = !1,
      role: n = "dialog",
      className: o,
      style: i,
      children: a,
      backdrop: s = !0,
      keyboard: l = !0,
      onBackdropClick: u,
      onEscapeKeyDown: c,
      transition: d,
      backdropTransition: p,
      autoFocus: h = !0,
      enforceFocus: w = !0,
      restoreFocus: m = !0,
      restoreFocusOptions: b,
      renderDialog: y,
      renderBackdrop: g = (he) => f("div", Object.assign({}, he)),
      manager: x,
      container: S,
      onShow: C,
      onHide: $ = () => {},
      onExit: P,
      onExited: R,
      onExiting: M,
      onEnter: L,
      onEntering: F,
      onEntered: B,
    } = e,
    z = HA(e, zA);
  const G = BA(S),
    X = WA(x),
    ne = Bm(),
    fe = sS(r),
    [D, K] = v.exports.useState(!r),
    W = v.exports.useRef(null);
  v.exports.useImperativeHandle(t, () => X, [X]),
    va && !fe && r && (W.current = md()),
    !d && !r && !D ? K(!0) : r && D && K(!1);
  const oe = We(() => {
      if (
        (X.add(),
        (Se.current = Gn(document, "keydown", ie)),
        (ye.current = Gn(document, "focus", () => setTimeout(_e), !0)),
        C && C(),
        h)
      ) {
        const he = md(document);
        X.dialog &&
          he &&
          !nc(X.dialog, he) &&
          ((W.current = he), X.dialog.focus());
      }
    }),
    le = We(() => {
      if (
        (X.remove(),
        Se.current == null || Se.current(),
        ye.current == null || ye.current(),
        m)
      ) {
        var he;
        (he = W.current) == null || he.focus == null || he.focus(b),
          (W.current = null);
      }
    });
  v.exports.useEffect(() => {
    !r || !G || oe();
  }, [r, G, oe]),
    v.exports.useEffect(() => {
      !D || le();
    }, [D, le]),
    Gm(() => {
      le();
    });
  const _e = We(() => {
      if (!w || !ne() || !X.isTopModal()) return;
      const he = md();
      X.dialog && he && !nc(X.dialog, he) && X.dialog.focus();
    }),
    Re = We((he) => {
      he.target === he.currentTarget && (u == null || u(he), s === !0 && $());
    }),
    ie = We((he) => {
      l &&
        he.keyCode === 27 &&
        X.isTopModal() &&
        (c == null || c(he), he.defaultPrevented || $());
    }),
    ye = v.exports.useRef(),
    Se = v.exports.useRef(),
    Xe = (...he) => {
      K(!0), R == null || R(...he);
    },
    it = d;
  if (!G || !(r || (it && !D))) return null;
  const Le = Object.assign(
    {
      role: n,
      ref: X.setDialogRef,
      "aria-modal": n === "dialog" ? !0 : void 0,
    },
    z,
    { style: i, className: o, tabIndex: -1 }
  );
  let Ae = y
    ? y(Le)
    : f(
        "div",
        Object.assign({}, Le, {
          children: v.exports.cloneElement(a, { role: "document" }),
        })
      );
  it &&
    (Ae = f(it, {
      appear: !0,
      unmountOnExit: !0,
      in: !!r,
      onExit: P,
      onExiting: M,
      onExited: Xe,
      onEnter: L,
      onEntering: F,
      onEntered: B,
      children: Ae,
    }));
  let yt = null;
  if (s) {
    const he = p;
    (yt = g({ ref: X.setBackdropRef, onClick: Re })),
      he && (yt = f(he, { appear: !0, in: !!r, children: yt }));
  }
  return f(br, { children: Ti.createPortal(E(br, { children: [yt, Ae] }), G) });
});
fE.displayName = "Modal";
var dE = Object.assign(fE, { Manager: pv });
function KA(e, t) {
  return e.classList
    ? !!t && e.classList.contains(t)
    : (" " + (e.className.baseVal || e.className) + " ").indexOf(
        " " + t + " "
      ) !== -1;
}
function qA(e, t) {
  e.classList
    ? e.classList.add(t)
    : KA(e, t) ||
      (typeof e.className == "string"
        ? (e.className = e.className + " " + t)
        : e.setAttribute(
            "class",
            ((e.className && e.className.baseVal) || "") + " " + t
          ));
}
function d0(e, t) {
  return e
    .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function GA(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == "string"
    ? (e.className = d0(e.className, t))
    : e.setAttribute(
        "class",
        d0((e.className && e.className.baseVal) || "", t)
      );
}
const ci = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler",
};
class pE extends pv {
  adjustAndStore(t, r, n) {
    const o = r.style[t];
    (r.dataset[t] = o), wn(r, { [t]: `${parseFloat(wn(r, t)) + n}px` });
  }
  restore(t, r) {
    const n = r.dataset[t];
    n !== void 0 && (delete r.dataset[t], wn(r, { [t]: n }));
  }
  setContainerStyle(t) {
    super.setContainerStyle(t);
    const r = this.getElement();
    if ((qA(r, "modal-open"), !t.scrollBarWidth)) return;
    const n = this.isRTL ? "paddingLeft" : "paddingRight",
      o = this.isRTL ? "marginLeft" : "marginRight";
    hn(r, ci.FIXED_CONTENT).forEach((i) =>
      this.adjustAndStore(n, i, t.scrollBarWidth)
    ),
      hn(r, ci.STICKY_CONTENT).forEach((i) =>
        this.adjustAndStore(o, i, -t.scrollBarWidth)
      ),
      hn(r, ci.NAVBAR_TOGGLER).forEach((i) =>
        this.adjustAndStore(o, i, t.scrollBarWidth)
      );
  }
  removeContainerStyle(t) {
    super.removeContainerStyle(t);
    const r = this.getElement();
    GA(r, "modal-open");
    const n = this.isRTL ? "paddingLeft" : "paddingRight",
      o = this.isRTL ? "marginLeft" : "marginRight";
    hn(r, ci.FIXED_CONTENT).forEach((i) => this.restore(n, i)),
      hn(r, ci.STICKY_CONTENT).forEach((i) => this.restore(o, i)),
      hn(r, ci.NAVBAR_TOGGLER).forEach((i) => this.restore(o, i));
  }
}
let yd;
function hE(e) {
  return yd || (yd = new pE(e)), yd;
}
var YA = tt("modal-body");
const QA = v.exports.createContext({ onHide() {} });
var hv = QA;
const mE = v.exports.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      contentClassName: r,
      centered: n,
      size: o,
      fullscreen: i,
      children: a,
      scrollable: s,
      ...l
    },
    u
  ) => {
    e = ue(e, "modal");
    const c = `${e}-dialog`,
      d = typeof i == "string" ? `${e}-fullscreen-${i}` : `${e}-fullscreen`;
    return f("div", {
      ...l,
      ref: u,
      className: ee(
        c,
        t,
        o && `${e}-${o}`,
        n && `${c}-centered`,
        s && `${c}-scrollable`,
        i && d
      ),
      children: f("div", { className: ee(`${e}-content`, r), children: a }),
    });
  }
);
mE.displayName = "ModalDialog";
var vE = mE,
  XA = tt("modal-footer");
const JA = { closeLabel: "Close", closeButton: !1 },
  gE = v.exports.forwardRef(
    (
      {
        closeLabel: e,
        closeVariant: t,
        closeButton: r,
        onHide: n,
        children: o,
        ...i
      },
      a
    ) => {
      const s = v.exports.useContext(hv),
        l = We(() => {
          s == null || s.onHide(), n == null || n();
        });
      return E("div", {
        ref: a,
        ...i,
        children: [o, r && f(uS, { "aria-label": e, variant: t, onClick: l })],
      });
    }
  );
gE.defaultProps = JA;
var yE = gE;
const ZA = { closeLabel: "Close", closeButton: !1 },
  mv = v.exports.forwardRef(
    ({ bsPrefix: e, className: t, ...r }, n) => (
      (e = ue(e, "modal-header")), f(yE, { ref: n, ...r, className: ee(t, e) })
    )
  );
mv.displayName = "ModalHeader";
mv.defaultProps = ZA;
var ek = mv;
const tk = nl("h4");
var rk = tt("modal-title", { Component: tk });
const nk = {
  show: !1,
  backdrop: !0,
  keyboard: !0,
  autoFocus: !0,
  enforceFocus: !0,
  restoreFocus: !0,
  animation: !0,
  dialogAs: vE,
};
function ok(e) {
  return f(rl, { ...e, timeout: null });
}
function ik(e) {
  return f(rl, { ...e, timeout: null });
}
const vv = v.exports.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      style: r,
      dialogClassName: n,
      contentClassName: o,
      children: i,
      dialogAs: a,
      "aria-labelledby": s,
      "aria-describedby": l,
      "aria-label": u,
      show: c,
      animation: d,
      backdrop: p,
      keyboard: h,
      onEscapeKeyDown: w,
      onShow: m,
      onHide: b,
      container: y,
      autoFocus: g,
      enforceFocus: x,
      restoreFocus: S,
      restoreFocusOptions: C,
      onEntered: $,
      onExit: P,
      onExiting: R,
      onEnter: M,
      onEntering: L,
      onExited: F,
      backdropClassName: B,
      manager: z,
      ...G
    },
    X
  ) => {
    const [ne, fe] = v.exports.useState({}),
      [D, K] = v.exports.useState(!1),
      W = v.exports.useRef(!1),
      oe = v.exports.useRef(!1),
      le = v.exports.useRef(null),
      [_e, Re] = aS(),
      ie = tl(X, Re),
      ye = We(b),
      Se = Im();
    e = ue(e, "modal");
    const Xe = v.exports.useMemo(() => ({ onHide: ye }), [ye]);
    function it() {
      return z || hE({ isRTL: Se });
    }
    function Le(q) {
      if (!va) return;
      const J = it().getScrollbarWidth() > 0,
        ke = q.scrollHeight > el(q).documentElement.clientHeight;
      fe({
        paddingRight: J && !ke ? c0() : void 0,
        paddingLeft: !J && ke ? c0() : void 0,
      });
    }
    const Ae = We(() => {
      _e && Le(_e.dialog);
    });
    Gm(() => {
      Vp(window, "resize", Ae), le.current == null || le.current();
    });
    const yt = () => {
        W.current = !0;
      },
      he = (q) => {
        W.current && _e && q.target === _e.dialog && (oe.current = !0),
          (W.current = !1);
      },
      O = () => {
        K(!0),
          (le.current = rS(_e.dialog, () => {
            K(!1);
          }));
      },
      A = (q) => {
        q.target === q.currentTarget && O();
      },
      k = (q) => {
        if (p === "static") {
          A(q);
          return;
        }
        if (oe.current || q.target !== q.currentTarget) {
          oe.current = !1;
          return;
        }
        b == null || b();
      },
      V = (q) => {
        h ? w == null || w(q) : (q.preventDefault(), p === "static" && O());
      },
      N = (q, J) => {
        q && Le(q), M == null || M(q, J);
      },
      _ = (q) => {
        le.current == null || le.current(), P == null || P(q);
      },
      T = (q, J) => {
        L == null || L(q, J), jm(window, "resize", Ae);
      },
      H = (q) => {
        q && (q.style.display = ""),
          F == null || F(q),
          Vp(window, "resize", Ae);
      },
      U = v.exports.useCallback(
        (q) =>
          f("div", { ...q, className: ee(`${e}-backdrop`, B, !d && "show") }),
        [d, B, e]
      ),
      ae = { ...r, ...ne };
    ae.display = "block";
    const se = (q) =>
      f("div", {
        role: "dialog",
        ...q,
        style: ae,
        className: ee(t, e, D && `${e}-static`, !d && "show"),
        onClick: p ? k : void 0,
        onMouseUp: he,
        "aria-label": u,
        "aria-labelledby": s,
        "aria-describedby": l,
        children: f(a, {
          ...G,
          onMouseDown: yt,
          className: n,
          contentClassName: o,
          children: i,
        }),
      });
    return f(hv.Provider, {
      value: Xe,
      children: f(dE, {
        show: c,
        ref: ie,
        backdrop: p,
        container: y,
        keyboard: !0,
        autoFocus: g,
        enforceFocus: x,
        restoreFocus: S,
        restoreFocusOptions: C,
        onEscapeKeyDown: V,
        onShow: m,
        onHide: b,
        onEnter: N,
        onEntering: T,
        onEntered: $,
        onExit: _,
        onExiting: R,
        onExited: H,
        manager: it(),
        transition: d ? ok : void 0,
        backdropTransition: d ? ik : void 0,
        renderBackdrop: U,
        renderDialog: se,
      }),
    });
  }
);
vv.displayName = "Modal";
vv.defaultProps = nk;
var Bl = Object.assign(vv, {
    Body: YA,
    Header: ek,
    Title: rk,
    Footer: XA,
    Dialog: vE,
    TRANSITION_DURATION: 300,
    BACKDROP_TRANSITION_DURATION: 150,
  }),
  p0 = { exports: {} },
  Qp = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r);
  function r(n) {
    function o(a, s, l, u, c, d) {
      var p = u || "<<anonymous>>",
        h = d || l;
      if (s[l] == null)
        return a
          ? new Error(
              "Required " +
                c +
                " `" +
                h +
                "` was not specified " +
                ("in `" + p + "`.")
            )
          : null;
      for (
        var w = arguments.length, m = Array(w > 6 ? w - 6 : 0), b = 6;
        b < w;
        b++
      )
        m[b - 6] = arguments[b];
      return n.apply(void 0, [s, l, p, c, h].concat(m));
    }
    var i = o.bind(null, !1);
    return (i.isRequired = o.bind(null, !0)), i;
  }
  e.exports = t.default;
})(Qp, Qp.exports);
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i);
  var r = Qp.exports,
    n = o(r);
  function o(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i() {
    for (var a = arguments.length, s = Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    function u() {
      for (var c = arguments.length, d = Array(c), p = 0; p < c; p++)
        d[p] = arguments[p];
      var h = null;
      return (
        s.forEach(function (w) {
          if (h == null) {
            var m = w.apply(void 0, d);
            m != null && (h = m);
          }
        }),
        h
      );
    }
    return (0, n.default)(u);
  }
  e.exports = t.default;
})(p0, p0.exports);
var ak = tt("nav-item");
const sk = { disabled: !1 },
  gv = v.exports.forwardRef(
    (
      { bsPrefix: e, className: t, as: r = Wo, active: n, eventKey: o, ...i },
      a
    ) => {
      e = ue(e, "nav-link");
      const [s, l] = dv({ key: ia(o, i.href), active: n, ...i });
      return f(r, {
        ...i,
        ...s,
        ref: a,
        className: ee(t, e, i.disabled && "disabled", l.isActive && "active"),
      });
    }
  );
gv.displayName = "NavLink";
gv.defaultProps = sk;
var wE = gv;
const lk = { justify: !1, fill: !1 },
  yv = v.exports.forwardRef((e, t) => {
    const {
        as: r = "div",
        bsPrefix: n,
        variant: o,
        fill: i,
        justify: a,
        navbar: s,
        navbarScroll: l,
        className: u,
        activeKey: c,
        ...d
      } = ma(e, { activeKey: "onSelect" }),
      p = ue(n, "nav");
    let h,
      w,
      m = !1;
    const b = v.exports.useContext(ti),
      y = v.exports.useContext(pS);
    return (
      b
        ? ((h = b.bsPrefix), (m = s == null ? !0 : s))
        : y && ({ cardHeaderBsPrefix: w } = y),
      f(lE, {
        as: r,
        ref: t,
        activeKey: c,
        className: ee(u, {
          [p]: !m,
          [`${h}-nav`]: m,
          [`${h}-nav-scroll`]: m && l,
          [`${w}-${o}`]: !!w,
          [`${p}-${o}`]: !!o,
          [`${p}-fill`]: i,
          [`${p}-justified`]: a,
        }),
        ...d,
      })
    );
  });
yv.displayName = "Nav";
yv.defaultProps = lk;
var $o = Object.assign(yv, { Item: ak, Link: wE });
const xE = v.exports.forwardRef(
  ({ bsPrefix: e, className: t, as: r, ...n }, o) => {
    e = ue(e, "navbar-brand");
    const i = r || (n.href ? "a" : "span");
    return f(i, { ...n, ref: o, className: ee(t, e) });
  }
);
xE.displayName = "NavbarBrand";
var uk = xE;
const bE = v.exports.forwardRef(({ children: e, bsPrefix: t, ...r }, n) => {
  t = ue(t, "navbar-collapse");
  const o = v.exports.useContext(ti);
  return f(XN, {
    in: !!(o && o.expanded),
    ...r,
    children: f("div", { ref: n, className: t, children: e }),
  });
});
bE.displayName = "NavbarCollapse";
var ck = bE;
const fk = { label: "Toggle navigation" },
  wv = v.exports.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        children: r,
        label: n,
        as: o = "button",
        onClick: i,
        ...a
      },
      s
    ) => {
      e = ue(e, "navbar-toggler");
      const { onToggle: l, expanded: u } = v.exports.useContext(ti) || {},
        c = We((d) => {
          i && i(d), l && l();
        });
      return (
        o === "button" && (a.type = "button"),
        f(o, {
          ...a,
          ref: s,
          onClick: c,
          "aria-label": n,
          className: ee(t, e, !u && "collapsed"),
          children: r || f("span", { className: `${e}-icon` }),
        })
      );
    }
  );
wv.displayName = "NavbarToggle";
wv.defaultProps = fk;
var dk = wv,
  Xp = new WeakMap(),
  h0 = function (t, r) {
    if (!(!t || !r)) {
      var n = Xp.get(r) || new Map();
      Xp.set(r, n);
      var o = n.get(t);
      return (
        o || ((o = r.matchMedia(t)), (o.refCount = 0), n.set(o.media, o)), o
      );
    }
  };
function pk(e, t) {
  t === void 0 && (t = typeof window == "undefined" ? void 0 : window);
  var r = h0(e, t),
    n = v.exports.useState(function () {
      return r ? r.matches : !1;
    }),
    o = n[0],
    i = n[1];
  return (
    lS(
      function () {
        var a = h0(e, t);
        if (!a) return i(!1);
        var s = Xp.get(t),
          l = function () {
            i(a.matches);
          };
        return (
          a.refCount++,
          a.addListener(l),
          l(),
          function () {
            a.removeListener(l),
              a.refCount--,
              a.refCount <= 0 && (s == null || s.delete(a.media)),
              (a = void 0);
          }
        );
      },
      [e]
    ),
    o
  );
}
function hk(e) {
  var t = Object.keys(e);
  function r(s, l) {
    return s === l ? l : s ? s + " and " + l : l;
  }
  function n(s) {
    return t[Math.min(t.indexOf(s) + 1, t.length - 1)];
  }
  function o(s) {
    var l = n(s),
      u = e[l];
    return (
      typeof u == "number"
        ? (u = u - 0.2 + "px")
        : (u = "calc(" + u + " - 0.2px)"),
      "(max-width: " + u + ")"
    );
  }
  function i(s) {
    var l = e[s];
    return typeof l == "number" && (l = l + "px"), "(min-width: " + l + ")";
  }
  function a(s, l, u) {
    var c;
    if (typeof s == "object") (c = s), (u = l), (l = !0);
    else {
      var d;
      (l = l || !0), (c = ((d = {}), (d[s] = l), d));
    }
    var p = v.exports.useMemo(
      function () {
        return Object.entries(c).reduce(function (h, w) {
          var m = w[0],
            b = w[1];
          return (
            (b === "up" || b === !0) && (h = r(h, i(m))),
            (b === "down" || b === !0) && (h = r(h, o(m))),
            h
          );
        }, "");
      },
      [JSON.stringify(c)]
    );
    return pk(p, u);
  }
  return a;
}
var mk = hk({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 }),
  vk = tt("offcanvas-body");
const gk = { in: !1, mountOnEnter: !1, unmountOnExit: !1, appear: !1 },
  yk = { [Dr]: "show", [mn]: "show" },
  xv = v.exports.forwardRef(
    ({ bsPrefix: e, className: t, children: r, ...n }, o) => (
      (e = ue(e, "offcanvas")),
      f(qc, {
        ref: o,
        addEndListener: Kc,
        ...n,
        childRef: r.ref,
        children: (i, a) =>
          v.exports.cloneElement(r, {
            ...a,
            className: ee(
              t,
              r.props.className,
              (i === Dr || i === Ms) && `${e}-toggling`,
              yk[i]
            ),
          }),
      })
    )
  );
xv.defaultProps = gk;
xv.displayName = "OffcanvasToggling";
var wk = xv;
const xk = { closeLabel: "Close", closeButton: !1 },
  bv = v.exports.forwardRef(
    ({ bsPrefix: e, className: t, ...r }, n) => (
      (e = ue(e, "offcanvas-header")),
      f(yE, { ref: n, ...r, className: ee(t, e) })
    )
  );
bv.displayName = "OffcanvasHeader";
bv.defaultProps = xk;
var bk = bv;
const Sk = nl("h5");
var Ek = tt("offcanvas-title", { Component: Sk });
const Ck = {
  show: !1,
  backdrop: !0,
  keyboard: !0,
  scroll: !1,
  autoFocus: !0,
  enforceFocus: !0,
  restoreFocus: !0,
  placement: "start",
  renderStaticNode: !1,
};
function Ok(e) {
  return f(wk, { ...e });
}
function _k(e) {
  return f(rl, { ...e });
}
const Sv = v.exports.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      children: r,
      "aria-labelledby": n,
      placement: o,
      responsive: i,
      show: a,
      backdrop: s,
      keyboard: l,
      scroll: u,
      onEscapeKeyDown: c,
      onShow: d,
      onHide: p,
      container: h,
      autoFocus: w,
      enforceFocus: m,
      restoreFocus: b,
      restoreFocusOptions: y,
      onEntered: g,
      onExit: x,
      onExiting: S,
      onEnter: C,
      onEntering: $,
      onExited: P,
      backdropClassName: R,
      manager: M,
      renderStaticNode: L,
      ...F
    },
    B
  ) => {
    const z = v.exports.useRef();
    e = ue(e, "offcanvas");
    const { onToggle: G } = v.exports.useContext(ti) || {},
      [X, ne] = v.exports.useState(!1),
      fe = mk(i || "xs", "up");
    v.exports.useEffect(() => {
      ne(i ? a && !fe : a);
    }, [a, i, fe]);
    const D = We(() => {
        G == null || G(), p == null || p();
      }),
      K = v.exports.useMemo(() => ({ onHide: D }), [D]);
    function W() {
      return (
        M ||
        (u
          ? (z.current || (z.current = new pE({ handleContainerOverflow: !1 })),
            z.current)
          : hE())
      );
    }
    const oe = (ie, ...ye) => {
        ie && (ie.style.visibility = "visible"), C == null || C(ie, ...ye);
      },
      le = (ie, ...ye) => {
        ie && (ie.style.visibility = ""), P == null || P(...ye);
      },
      _e = v.exports.useCallback(
        (ie) => f("div", { ...ie, className: ee(`${e}-backdrop`, R) }),
        [R, e]
      ),
      Re = (ie) =>
        f("div", {
          ...ie,
          ...F,
          className: ee(t, i ? `${e}-${i}` : e, `${e}-${o}`),
          "aria-labelledby": n,
          children: r,
        });
    return E(br, {
      children: [
        !X && (i || L) && Re({}),
        f(hv.Provider, {
          value: K,
          children: f(dE, {
            show: X,
            ref: B,
            backdrop: s,
            container: h,
            keyboard: l,
            autoFocus: w,
            enforceFocus: m && !u,
            restoreFocus: b,
            restoreFocusOptions: y,
            onEscapeKeyDown: c,
            onShow: d,
            onHide: D,
            onEnter: oe,
            onEntering: $,
            onEntered: g,
            onExit: x,
            onExiting: S,
            onExited: le,
            manager: W(),
            transition: Ok,
            backdropTransition: _k,
            renderBackdrop: _e,
            renderDialog: Re,
          }),
        }),
      ],
    });
  }
);
Sv.displayName = "Offcanvas";
Sv.defaultProps = Ck;
var $k = Object.assign(Sv, { Body: vk, Header: bk, Title: Ek });
const SE = v.exports.forwardRef((e, t) => {
  const r = v.exports.useContext(ti);
  return f($k, {
    ref: t,
    show: !!(r != null && r.expanded),
    ...e,
    renderStaticNode: !0,
  });
});
SE.displayName = "NavbarOffcanvas";
var Pk = SE;
const Nk = tt("navbar-text", { Component: "span" }),
  Tk = { expand: !0, variant: "light", collapseOnSelect: !1 },
  Ev = v.exports.forwardRef((e, t) => {
    const {
        bsPrefix: r,
        expand: n,
        variant: o,
        bg: i,
        fixed: a,
        sticky: s,
        className: l,
        as: u = "nav",
        expanded: c,
        onToggle: d,
        onSelect: p,
        collapseOnSelect: h,
        ...w
      } = ma(e, { expanded: "onToggle" }),
      m = ue(r, "navbar"),
      b = v.exports.useCallback(
        (...x) => {
          p == null || p(...x), h && c && (d == null || d(!1));
        },
        [p, h, c, d]
      );
    w.role === void 0 && u !== "nav" && (w.role = "navigation");
    let y = `${m}-expand`;
    typeof n == "string" && (y = `${y}-${n}`);
    const g = v.exports.useMemo(
      () => ({
        onToggle: () => (d == null ? void 0 : d(!c)),
        bsPrefix: m,
        expanded: !!c,
        expand: n,
      }),
      [m, c, n, d]
    );
    return f(ti.Provider, {
      value: g,
      children: f(qo.Provider, {
        value: b,
        children: f(u, {
          ref: t,
          ...w,
          className: ee(
            l,
            m,
            n && y,
            o && `${m}-${o}`,
            i && `bg-${i}`,
            s && `sticky-${s}`,
            a && `fixed-${a}`
          ),
        }),
      }),
    });
  });
Ev.defaultProps = Tk;
Ev.displayName = "Navbar";
var ki = Object.assign(Ev, {
  Brand: uk,
  Collapse: ck,
  Offcanvas: Pk,
  Text: Nk,
  Toggle: dk,
});
const EE = v.exports.forwardRef(
  (
    {
      id: e,
      title: t,
      children: r,
      bsPrefix: n,
      className: o,
      rootCloseEvent: i,
      menuRole: a,
      disabled: s,
      active: l,
      renderMenuOnMount: u,
      menuVariant: c,
      ...d
    },
    p
  ) => {
    const h = ue(void 0, "nav-item");
    return E(Ao, {
      ref: p,
      ...d,
      className: ee(o, h),
      children: [
        f(Ao.Toggle, {
          id: e,
          eventKey: null,
          active: l,
          disabled: s,
          childBsPrefix: n,
          as: wE,
          children: t,
        }),
        f(Ao.Menu, {
          role: a,
          renderOnMount: u,
          rootCloseEvent: i,
          variant: c,
          children: r,
        }),
      ],
    });
  }
);
EE.displayName = "NavDropdown";
var Ba = Object.assign(EE, {
  Item: Ao.Item,
  ItemText: Ao.ItemText,
  Divider: Ao.Divider,
  Header: Ao.Header,
});
const Rk = { active: !1, disabled: !1, activeLabel: "(current)" },
  Jc = v.exports.forwardRef(
    (
      {
        active: e,
        disabled: t,
        className: r,
        style: n,
        activeLabel: o,
        children: i,
        ...a
      },
      s
    ) => {
      const l = e || t ? "span" : Wo;
      return f("li", {
        ref: s,
        style: n,
        className: ee(r, "page-item", { active: e, disabled: t }),
        children: E(l, {
          className: "page-link",
          ...a,
          children: [
            i,
            e && o && f("span", { className: "visually-hidden", children: o }),
          ],
        }),
      });
    }
  );
Jc.defaultProps = Rk;
Jc.displayName = "PageItem";
var Ak = Jc;
function sl(e, t, r = e) {
  const n = v.exports.forwardRef(({ children: o, ...i }, a) =>
    E(Jc, {
      ...i,
      ref: a,
      children: [
        f("span", { "aria-hidden": "true", children: o || t }),
        f("span", { className: "visually-hidden", children: r }),
      ],
    })
  );
  return (n.displayName = e), n;
}
const kk = sl("First", "\xAB"),
  Dk = sl("Prev", "\u2039", "Previous"),
  Fk = sl("Ellipsis", "\u2026", "More"),
  Lk = sl("Next", "\u203A"),
  Mk = sl("Last", "\xBB"),
  CE = v.exports.forwardRef(
    ({ bsPrefix: e, className: t, size: r, ...n }, o) => {
      const i = ue(e, "pagination");
      return f("ul", { ref: o, ...n, className: ee(t, i, r && `${i}-${r}`) });
    }
  );
CE.displayName = "Pagination";
var m0 = Object.assign(CE, {
  First: kk,
  Prev: Dk,
  Ellipsis: Fk,
  Item: Ak,
  Next: Lk,
  Last: Mk,
});
const OE = v.exports.forwardRef(
  ({ bsPrefix: e, className: t, as: r = "div", ...n }, o) => {
    const i = ue(e, "row"),
      a = Xb(),
      s = Jb(),
      l = `${i}-cols`,
      u = [];
    return (
      a.forEach((c) => {
        const d = n[c];
        delete n[c];
        let p;
        d != null && typeof d == "object" ? ({ cols: p } = d) : (p = d);
        const h = c !== s ? `-${c}` : "";
        p != null && u.push(`${l}${h}-${p}`);
      }),
      f(r, { ref: o, ...n, className: ee(t, i, ...u) })
    );
  }
);
OE.displayName = "Row";
var Pe = OE;
const _E = v.exports.forwardRef(
  (
    {
      bsPrefix: e,
      variant: t,
      animation: r = "border",
      size: n,
      as: o = "div",
      className: i,
      ...a
    },
    s
  ) => {
    e = ue(e, "spinner");
    const l = `${e}-${r}`;
    return f(o, {
      ref: s,
      ...a,
      className: ee(i, l, n && `${l}-${n}`, t && `text-${t}`),
    });
  }
);
_E.displayName = "Spinner";
var Ik = _E;
const jk = v.exports.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      striped: r,
      bordered: n,
      borderless: o,
      hover: i,
      size: a,
      variant: s,
      responsive: l,
      ...u
    },
    c
  ) => {
    const d = ue(e, "table"),
      p = ee(
        t,
        d,
        s && `${d}-${s}`,
        a && `${d}-${a}`,
        r && `${d}-${typeof r == "string" ? `striped-${r}` : "striped"}`,
        n && `${d}-bordered`,
        o && `${d}-borderless`,
        i && `${d}-hover`
      ),
      h = f("table", { ...u, className: p, ref: c });
    if (l) {
      let w = `${d}-responsive`;
      return (
        typeof l == "string" && (w = `${w}-${l}`),
        f("div", { className: w, children: h })
      );
    }
    return h;
  }
);
var Uk = jk,
  $E = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  v0 = be.createContext && be.createContext($E),
  no =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (no =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++) {
              t = arguments[r];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        no.apply(this, arguments)
      );
    },
  Bk =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var r = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          t.indexOf(n) < 0 &&
          (r[n] = e[n]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
          t.indexOf(n[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
            (r[n[o]] = e[n[o]]);
      return r;
    };
function PE(e) {
  return (
    e &&
    e.map(function (t, r) {
      return be.createElement(t.tag, no({ key: r }, t.attr), PE(t.child));
    })
  );
}
function Hr(e) {
  return function (t) {
    return be.createElement(zk, no({ attr: no({}, e.attr) }, t), PE(e.child));
  };
}
function zk(e) {
  var t = function (r) {
    var n = e.attr,
      o = e.size,
      i = e.title,
      a = Bk(e, ["attr", "size", "title"]),
      s = o || r.size || "1em",
      l;
    return (
      r.className && (l = r.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      be.createElement(
        "svg",
        no(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          r.attr,
          n,
          a,
          {
            className: l,
            style: no(no({ color: e.color || r.color }, r.style), e.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && be.createElement("title", null, i),
        e.children
      )
    );
  };
  return v0 !== void 0
    ? be.createElement(v0.Consumer, null, function (r) {
        return t(r);
      })
    : t($E);
}
function Hk(e) {
  return Hr({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z",
        },
      },
    ],
  })(e);
}
function Vk(e) {
  return Hr({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
        },
      },
    ],
  })(e);
}
function Cv(e) {
  return Hr({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",
        },
      },
    ],
  })(e);
}
function Wk(e) {
  return Hr({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z",
        },
      },
    ],
  })(e);
}
function Kk(e) {
  return Hr({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
        },
      },
    ],
  })(e);
}
function qk(e) {
  return Hr({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
        },
      },
    ],
  })(e);
}
function Ov(e) {
  return Hr({
    tag: "svg",
    attr: { viewBox: "0 0 352 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
        },
      },
    ],
  })(e);
}
function Zc(e) {
  return Hr({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z",
        },
      },
    ],
  })(e);
}
const Gk = () =>
    f("section", {
      className: "bg-light py-5",
      children: f(jt, {
        className: " my-4",
        children: E(Pe, {
          className: " text-center py-3",
          children: [
            E(re, {
              lg: 6,
              className: "m-auto",
              children: [
                f("h1", { className: "h1", children: "Our Brands" }),
                f("p", { children: "The best brands in the markets" }),
              ],
            }),
            f(re, {
              lg: 9,
              className: "m-auto tempaltemo-carousel",
              children: E(Pe, {
                className: "d-flex flex-row",
                children: [
                  f(re, {
                    className: "col-1 align-self-center",
                    children: f("a", {
                      className: "h1",
                      href: "#templatemo-slide-brand",
                      role: "button",
                      "data-bs-slide": "prev",
                      children: f(Hk, { size: "1.2rem" }),
                    }),
                  }),
                  f("div", {
                    className: "col",
                    children: f("div", {
                      className:
                        "carousel slide carousel-multi-item pt-2 pt-md-0",
                      id: "templatemo-slide-brand",
                      "data-bs-ride": "carousel",
                      children: E("div", {
                        className: "carousel-inner product-links-wap",
                        role: "listbox",
                        children: [
                          f("div", {
                            className: "carousel-item active",
                            children: E("div", {
                              className: "row",
                              children: [
                                f("div", {
                                  className: "col-3 p-md-5",
                                  children: f("a", {
                                    href: "#",
                                    children: f("img", {
                                      className: "img-fluid brand-img",
                                      src: "/images/MSI-Logo.png",
                                      alt: "Brand Logo",
                                    }),
                                  }),
                                }),
                                f("div", {
                                  className: "col-3 p-md-5",
                                  children: f("a", {
                                    href: "#",
                                    children: f("img", {
                                      className: "img-fluid brand-img",
                                      src: "/images/sumsung_logo.png",
                                      alt: "Brand Logo",
                                    }),
                                  }),
                                }),
                                f("div", {
                                  className: "col-3 p-md-5",
                                  children: f("a", {
                                    href: "#",
                                    children: f("img", {
                                      className: "img-fluid brand-img",
                                      src: "/images/i_phone.png",
                                      alt: "Brand Logo",
                                    }),
                                  }),
                                }),
                                f("div", {
                                  className: "col-3 p-md-5",
                                  children: f("a", {
                                    href: "#",
                                    children: f("img", {
                                      className: "img-fluid brand-img",
                                      src: "/images/hp_i.png",
                                      alt: "Brand Logo",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          f("div", {
                            className: "carousel-item",
                            children: E("div", {
                              className: "row",
                              children: [
                                f("div", {
                                  className: "col-3 p-md-5",
                                  children: f("a", {
                                    href: "#",
                                    children: f("img", {
                                      className: "img-fluid brand-img",
                                      src: "/images/asus_rog.png",
                                      alt: "Brand Logo",
                                    }),
                                  }),
                                }),
                                f("div", {
                                  className: "col-3 p-md-5",
                                  children: f("a", {
                                    href: "#",
                                    children: f("img", {
                                      className: "img-fluid brand-img",
                                      src: "/images/amd_r.png",
                                      alt: "Brand Logo",
                                    }),
                                  }),
                                }),
                                f("div", {
                                  className: "col-3 p-md-5",
                                  children: f("a", {
                                    href: "#",
                                    children: f("img", {
                                      className: "img-fluid brand-img",
                                      src: "/images/dell.png",
                                      alt: "Brand Logo",
                                    }),
                                  }),
                                }),
                                f("div", {
                                  className: "col-3 p-md-5",
                                  children: f("a", {
                                    href: "#",
                                    children: f("img", {
                                      className: "img-fluid brand-img",
                                      src: "/images/Razer-Logo-Horizontal-1-1.png",
                                      alt: "Brand Logo",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                  f("div", {
                    className: "col-1 align-self-center",
                    children: f("a", {
                      className: "h1",
                      href: "#templatemo-slide-brand",
                      role: "button",
                      "data-bs-slide": "next",
                      children: f(Vk, { size: "1.2rem" }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    }),
  Yk = () => {
    const [e, t] = v.exports.useState(0);
    return E(Il, {
      activeIndex: e,
      onSelect: (n) => {
        t(n);
      },
      children: [
        f(Il.Item, {
          className: "carsouel__item",
          children: f("img", {
            className: "d-block w-full ",
            src: "https://cdn.shopify.com/s/files/1/2301/4381/files/MSI_BANNER_1080x.jpg?v=1641895460",
            alt: "First slide",
          }),
        }),
        f(Il.Item, {
          className: "carsouel__item",
          children: f("img", {
            className: "d-block w-full ",
            src: "/images/p2.jpg",
            alt: "Second slide",
          }),
        }),
        f(Il.Item, {
          className: "carsouel__item",
          children: f("img", {
            className: "d-block w-full ",
            src: "https://www.sammobile.com/wp-content/uploads/2020/01/galaxy-s20-wallpaper-note-10.jpg",
            alt: "Third slide",
          }),
        }),
      ],
    });
  };
let Qk = { data: "" },
  Xk = (e) =>
    typeof window == "object"
      ? (
          (e ? e.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" }
          )
        ).firstChild
      : e || Qk,
  Jk = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  Zk = /\/\*[^]*?\*\/|  +/g,
  g0 = /\n+/g,
  Vn = (e, t) => {
    let r = "",
      n = "",
      o = "";
    for (let i in e) {
      let a = e[i];
      i[0] == "@"
        ? i[1] == "i"
          ? (r = i + " " + a + ";")
          : (n +=
              i[1] == "f"
                ? Vn(a, i)
                : i + "{" + Vn(a, i[1] == "k" ? "" : t) + "}")
        : typeof a == "object"
        ? (n += Vn(
            a,
            t
              ? t.replace(/([^,])+/g, (s) =>
                  i.replace(/(^:.*)|([^,])+/g, (l) =>
                    /&/.test(l) ? l.replace(/&/g, s) : s ? s + " " + l : l
                  )
                )
              : i
          ))
        : a != null &&
          ((i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase()),
          (o += Vn.p ? Vn.p(i, a) : i + ":" + a + ";"));
    }
    return r + (t && o ? t + "{" + o + "}" : o) + n;
  },
  sn = {},
  NE = (e) => {
    if (typeof e == "object") {
      let t = "";
      for (let r in e) t += r + NE(e[r]);
      return t;
    }
    return e;
  },
  eD = (e, t, r, n, o) => {
    let i = NE(e),
      a =
        sn[i] ||
        (sn[i] = ((l) => {
          let u = 0,
            c = 11;
          for (; u < l.length; ) c = (101 * c + l.charCodeAt(u++)) >>> 0;
          return "go" + c;
        })(i));
    if (!sn[a]) {
      let l =
        i !== e
          ? e
          : ((u) => {
              let c,
                d,
                p = [{}];
              for (; (c = Jk.exec(u.replace(Zk, ""))); )
                c[4]
                  ? p.shift()
                  : c[3]
                  ? ((d = c[3].replace(g0, " ").trim()),
                    p.unshift((p[0][d] = p[0][d] || {})))
                  : (p[0][c[1]] = c[2].replace(g0, " ").trim());
              return p[0];
            })(e);
      sn[a] = Vn(o ? { ["@keyframes " + a]: l } : l, r ? "" : "." + a);
    }
    let s = r && sn.g ? sn.g : null;
    return (
      r && (sn.g = sn[a]),
      ((l, u, c, d) => {
        d
          ? (u.data = u.data.replace(d, l))
          : u.data.indexOf(l) === -1 && (u.data = c ? l + u.data : u.data + l);
      })(sn[a], t, n, s),
      a
    );
  },
  tD = (e, t, r) =>
    e.reduce((n, o, i) => {
      let a = t[i];
      if (a && a.call) {
        let s = a(r),
          l = (s && s.props && s.props.className) || (/^go/.test(s) && s);
        a = l
          ? "." + l
          : s && typeof s == "object"
          ? s.props
            ? ""
            : Vn(s, "")
          : s === !1
          ? ""
          : s;
      }
      return n + o + (a == null ? "" : a);
    }, "");
function ef(e) {
  let t = this || {},
    r = e.call ? e(t.p) : e;
  return eD(
    r.unshift
      ? r.raw
        ? tD(r, [].slice.call(arguments, 1), t.p)
        : r.reduce((n, o) => Object.assign(n, o && o.call ? o(t.p) : o), {})
      : r,
    Xk(t.target),
    t.g,
    t.o,
    t.k
  );
}
let TE, Jp, Zp;
ef.bind({ g: 1 });
let $n = ef.bind({ k: 1 });
function rD(e, t, r, n) {
  (Vn.p = t), (TE = e), (Jp = r), (Zp = n);
}
function mo(e, t) {
  let r = this || {};
  return function () {
    let n = arguments;
    function o(i, a) {
      let s = Object.assign({}, i),
        l = s.className || o.className;
      (r.p = Object.assign({ theme: Jp && Jp() }, s)),
        (r.o = / *go\d+/.test(l)),
        (s.className = ef.apply(r, n) + (l ? " " + l : "")),
        t && (s.ref = a);
      let u = e;
      return (
        e[0] && ((u = s.as || e), delete s.as), Zp && u[0] && Zp(s), TE(u, s)
      );
    }
    return t ? t(o) : o;
  };
}
var nD = (e) => typeof e == "function",
  ic = (e, t) => (nD(e) ? e(t) : e),
  oD = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  RE = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  iD = 20,
  lu = new Map(),
  aD = 1e3,
  y0 = (e) => {
    if (lu.has(e)) return;
    let t = setTimeout(() => {
      lu.delete(e), ni({ type: 4, toastId: e });
    }, aD);
    lu.set(e, t);
  },
  sD = (e) => {
    let t = lu.get(e);
    t && clearTimeout(t);
  },
  eh = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, iD) };
      case 1:
        return (
          t.toast.id && sD(t.toast.id),
          {
            ...e,
            toasts: e.toasts.map((i) =>
              i.id === t.toast.id ? { ...i, ...t.toast } : i
            ),
          }
        );
      case 2:
        let { toast: r } = t;
        return e.toasts.find((i) => i.id === r.id)
          ? eh(e, { type: 1, toast: r })
          : eh(e, { type: 0, toast: r });
      case 3:
        let { toastId: n } = t;
        return (
          n
            ? y0(n)
            : e.toasts.forEach((i) => {
                y0(i.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((i) =>
              i.id === n || n === void 0 ? { ...i, visible: !1 } : i
            ),
          }
        );
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((i) => i.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let o = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((i) => ({
            ...i,
            pauseDuration: i.pauseDuration + o,
          })),
        };
    }
  },
  uu = [],
  cu = { toasts: [], pausedAt: void 0 },
  ni = (e) => {
    (cu = eh(cu, e)),
      uu.forEach((t) => {
        t(cu);
      });
  },
  lD = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  uD = (e = {}) => {
    let [t, r] = v.exports.useState(cu);
    v.exports.useEffect(
      () => (
        uu.push(r),
        () => {
          let o = uu.indexOf(r);
          o > -1 && uu.splice(o, 1);
        }
      ),
      [t]
    );
    let n = t.toasts.map((o) => {
      var i, a;
      return {
        ...e,
        ...e[o.type],
        ...o,
        duration:
          o.duration ||
          ((i = e[o.type]) == null ? void 0 : i.duration) ||
          (e == null ? void 0 : e.duration) ||
          lD[o.type],
        style: {
          ...e.style,
          ...((a = e[o.type]) == null ? void 0 : a.style),
          ...o.style,
        },
      };
    });
    return { ...t, toasts: n };
  },
  cD = (e, t = "blank", r) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: e,
    pauseDuration: 0,
    ...r,
    id: (r == null ? void 0 : r.id) || oD(),
  }),
  ll = (e) => (t, r) => {
    let n = cD(t, e, r);
    return ni({ type: 2, toast: n }), n.id;
  },
  ir = (e, t) => ll("blank")(e, t);
ir.error = ll("error");
ir.success = ll("success");
ir.loading = ll("loading");
ir.custom = ll("custom");
ir.dismiss = (e) => {
  ni({ type: 3, toastId: e });
};
ir.remove = (e) => ni({ type: 4, toastId: e });
ir.promise = (e, t, r) => {
  let n = ir.loading(t.loading, { ...r, ...(r == null ? void 0 : r.loading) });
  return (
    e
      .then(
        (o) => (
          ir.success(ic(t.success, o), {
            id: n,
            ...r,
            ...(r == null ? void 0 : r.success),
          }),
          o
        )
      )
      .catch((o) => {
        ir.error(ic(t.error, o), {
          id: n,
          ...r,
          ...(r == null ? void 0 : r.error),
        });
      }),
    e
  );
};
var fD = (e, t) => {
    ni({ type: 1, toast: { id: e, height: t } });
  },
  dD = () => {
    ni({ type: 5, time: Date.now() });
  },
  pD = (e) => {
    let { toasts: t, pausedAt: r } = uD(e);
    v.exports.useEffect(() => {
      if (r) return;
      let i = Date.now(),
        a = t.map((s) => {
          if (s.duration === 1 / 0) return;
          let l = (s.duration || 0) + s.pauseDuration - (i - s.createdAt);
          if (l < 0) {
            s.visible && ir.dismiss(s.id);
            return;
          }
          return setTimeout(() => ir.dismiss(s.id), l);
        });
      return () => {
        a.forEach((s) => s && clearTimeout(s));
      };
    }, [t, r]);
    let n = v.exports.useCallback(() => {
        r && ni({ type: 6, time: Date.now() });
      }, [r]),
      o = v.exports.useCallback(
        (i, a) => {
          let {
              reverseOrder: s = !1,
              gutter: l = 8,
              defaultPosition: u,
            } = a || {},
            c = t.filter(
              (h) => (h.position || u) === (i.position || u) && h.height
            ),
            d = c.findIndex((h) => h.id === i.id),
            p = c.filter((h, w) => w < d && h.visible).length;
          return c
            .filter((h) => h.visible)
            .slice(...(s ? [p + 1] : [0, p]))
            .reduce((h, w) => h + (w.height || 0) + l, 0);
        },
        [t]
      );
    return {
      toasts: t,
      handlers: {
        updateHeight: fD,
        startPause: dD,
        endPause: n,
        calculateOffset: o,
      },
    };
  },
  hD = $n`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  mD = $n`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  vD = $n`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  gD = mo("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${hD} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${mD} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${vD} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  yD = $n`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  wD = mo("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${yD} 1s linear infinite;
`,
  xD = $n`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  bD = $n`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  SD = mo("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${xD} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${bD} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  ED = mo("div")`
  position: absolute;
`,
  CD = mo("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  OD = $n`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  _D = mo("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${OD} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  $D = ({ toast: e }) => {
    let { icon: t, type: r, iconTheme: n } = e;
    return t !== void 0
      ? typeof t == "string"
        ? v.exports.createElement(_D, null, t)
        : t
      : r === "blank"
      ? null
      : v.exports.createElement(
          CD,
          null,
          v.exports.createElement(wD, { ...n }),
          r !== "loading" &&
            v.exports.createElement(
              ED,
              null,
              r === "error"
                ? v.exports.createElement(gD, { ...n })
                : v.exports.createElement(SD, { ...n })
            )
        );
  },
  PD = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  ND = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  TD = "0%{opacity:0;} 100%{opacity:1;}",
  RD = "0%{opacity:1;} 100%{opacity:0;}",
  AD = mo("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  kD = mo("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  DD = (e, t) => {
    let r = e.includes("top") ? 1 : -1,
      [n, o] = RE() ? [TD, RD] : [PD(r), ND(r)];
    return {
      animation: t
        ? `${$n(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${$n(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  FD = v.exports.memo(({ toast: e, position: t, style: r, children: n }) => {
    let o = e.height
        ? DD(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      i = v.exports.createElement($D, { toast: e }),
      a = v.exports.createElement(kD, { ...e.ariaProps }, ic(e.message, e));
    return v.exports.createElement(
      AD,
      { className: e.className, style: { ...o, ...r, ...e.style } },
      typeof n == "function"
        ? n({ icon: i, message: a })
        : v.exports.createElement(v.exports.Fragment, null, i, a)
    );
  });
rD(v.exports.createElement);
var LD = ({
    id: e,
    className: t,
    style: r,
    onHeightUpdate: n,
    children: o,
  }) => {
    let i = v.exports.useCallback(
      (a) => {
        if (a) {
          let s = () => {
            let l = a.getBoundingClientRect().height;
            n(e, l);
          };
          s(),
            new MutationObserver(s).observe(a, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [e, n]
    );
    return v.exports.createElement(
      "div",
      { ref: i, className: t, style: r },
      o
    );
  },
  MD = (e, t) => {
    let r = e.includes("top"),
      n = r ? { top: 0 } : { bottom: 0 },
      o = e.includes("center")
        ? { justifyContent: "center" }
        : e.includes("right")
        ? { justifyContent: "flex-end" }
        : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: RE() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (r ? 1 : -1)}px)`,
      ...n,
      ...o,
    };
  },
  ID = ef`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  zl = 16,
  jD = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: r,
    gutter: n,
    children: o,
    containerStyle: i,
    containerClassName: a,
  }) => {
    let { toasts: s, handlers: l } = pD(r);
    return v.exports.createElement(
      "div",
      {
        style: {
          position: "fixed",
          zIndex: 9999,
          top: zl,
          left: zl,
          right: zl,
          bottom: zl,
          pointerEvents: "none",
          ...i,
        },
        className: a,
        onMouseEnter: l.startPause,
        onMouseLeave: l.endPause,
      },
      s.map((u) => {
        let c = u.position || t,
          d = l.calculateOffset(u, {
            reverseOrder: e,
            gutter: n,
            defaultPosition: t,
          }),
          p = MD(c, d);
        return v.exports.createElement(
          LD,
          {
            id: u.id,
            key: u.id,
            onHeightUpdate: l.updateHeight,
            className: u.visible ? ID : "",
            style: p,
          },
          u.type === "custom"
            ? ic(u.message, u)
            : o
            ? o(u)
            : v.exports.createElement(FD, { toast: u, position: c })
        );
      })
    );
  },
  ge = ir;
const UD = () =>
    f("footer", {
      id: "footer",
      className: "mt-auto",
      children: f("div", {
        className: "footer-top",
        children: f(jt, {
          children: E(Pe, {
            children: [
              E(re, {
                lg: 3,
                md: 6,
                xs: 12,
                className: " footer-contact",
                children: [
                  f("h3", {
                    children: f(ri, {
                      width: 100,
                      src: "/LogoMakr-4g0P6C.png",
                      alt: "",
                    }),
                  }),
                  E("p", {
                    children: [
                      "2 All\xE9e Andersen",
                      f("br", {}),
                      "69780 Mions Lyon",
                      f("br", {}),
                      "France",
                      f("br", {}),
                      f("br", {}),
                      f("strong", { children: "Phone:" }),
                      " 06 76 56 48 93",
                      f("br", {}),
                      f("strong", { children: "Email:" }),
                      " Frame Shop@me.com",
                      f("br", {}),
                    ],
                  }),
                ],
              }),
              E(re, {
                lg: 2,
                md: 6,
                xs: 6,
                className: " footer-links",
                children: [
                  f("h4", { children: "Useful Links" }),
                  E("ul", {
                    children: [
                      E("li", {
                        children: [
                          f("i", { className: "bx bx-chevron-right" }),
                          " ",
                          f("a", { href: "#", children: "Home" }),
                        ],
                      }),
                      E("li", {
                        children: [
                          f("i", { className: "bx bx-chevron-right" }),
                          " ",
                          f("a", { href: "#", children: "About us" }),
                        ],
                      }),
                      E("li", {
                        children: [
                          f("i", { className: "bx bx-chevron-right" }),
                          " ",
                          f("a", { href: "#", children: "Services" }),
                        ],
                      }),
                      E("li", {
                        children: [
                          f("i", { className: "bx bx-chevron-right" }),
                          " ",
                          f("a", { href: "#", children: "Terms of service" }),
                        ],
                      }),
                      E("li", {
                        children: [
                          f("i", { className: "bx bx-chevron-right" }),
                          " ",
                          f("a", { href: "#", children: "Privacy policy" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              E(re, {
                lg: 3,
                md: 6,
                xs: 6,
                className: "footer-links",
                children: [
                  f("h4", { children: "Our Services" }),
                  E("ul", {
                    children: [
                      E("li", {
                        children: [
                          f("i", { className: "bx bx-chevron-right" }),
                          " ",
                          f("a", { href: "#", children: "Web Design" }),
                        ],
                      }),
                      E("li", {
                        children: [
                          f("i", { className: "bx bx-chevron-right" }),
                          " ",
                          f("a", { href: "#", children: "Web Development" }),
                        ],
                      }),
                      E("li", {
                        children: [
                          f("i", { className: "bx bx-chevron-right" }),
                          " ",
                          f("a", { href: "#", children: "Product Management" }),
                        ],
                      }),
                      E("li", {
                        children: [
                          f("i", { className: "bx bx-chevron-right" }),
                          " ",
                          f("a", { href: "#", children: "Marketing" }),
                        ],
                      }),
                      E("li", {
                        children: [
                          f("i", { className: "bx bx-chevron-right" }),
                          " ",
                          f("a", { href: "#", children: "Graphic Design" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              E(re, {
                lg: 4,
                md: 6,
                className: "footer-newsletter",
                children: [
                  f("h4", { children: "Join Our Newsletter" }),
                  f("p", {
                    children:
                      "Tamen quem nulla quae legam multos aute sint culpa legam noster magna",
                  }),
                  E("form", {
                    onSubmit: () => ge.success("thanks for yr Subscrition"),
                    children: [
                      f("input", {
                        type: "email",
                        required: !0,
                        placeholder: "email@domain.com",
                        name: "email",
                      }),
                      f("input", { type: "submit", defaultValue: "Subscribe" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    }),
  BD = () =>
    E("div", {
      className: "container d-md-flex py-4",
      children: [
        E("div", {
          className: "me-md-auto text-center text-md-start",
          children: [
            E("div", {
              className: "copyright",
              children: [
                "\xA9 Copyright",
                " ",
                f("strong", { children: f("span", { children: "Type Shop" }) }),
                ". All Rights Reserved",
              ],
            }),
            E("div", {
              className: "credits",
              children: [
                "Designed by ",
                f("a", { href: "#", children: "Type Shop" }),
              ],
            }),
          ],
        }),
        E("div", {
          className: "social-links text-center text-md-end pt-3 pt-md-0",
          children: [
            f("a", {
              href: "#",
              className: "twitter",
              children: f("i", { className: "bx bxl-twitter" }),
            }),
            f("a", {
              href: "#",
              className: "facebook",
              children: f("i", { className: "bx bxl-facebook" }),
            }),
            f("a", {
              href: "#",
              className: "instagram",
              children: f("i", { className: "bx bxl-instagram" }),
            }),
            f("a", {
              href: "#",
              className: "google-plus",
              children: f("i", { className: "bx bxl-skype" }),
            }),
            f("a", {
              href: "#",
              className: "linkedin",
              children: f("i", { className: "bx bxl-linkedin" }),
            }),
          ],
        }),
      ],
    });
function Fr(e) {
  for (
    var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  throw Error(
    "[Immer] minified error nr: " +
      e +
      (r.length
        ? " " +
          r
            .map(function (o) {
              return "'" + o + "'";
            })
            .join(",")
        : "") +
      ". Find the full error at: https://bit.ly/3cXEKWf"
  );
}
function nn(e) {
  return !!e && !!e[He];
}
function Pn(e) {
  var t;
  return (
    !!e &&
    ((function (r) {
      if (!r || typeof r != "object") return !1;
      var n = Object.getPrototypeOf(r);
      if (n === null) return !0;
      var o = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
      return (
        o === Object ||
        (typeof o == "function" && Function.toString.call(o) === YD)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[O0] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[O0]) ||
      _v(e) ||
      $v(e))
  );
}
function Go(e, t, r) {
  r === void 0 && (r = !1),
    ya(e) === 0
      ? (r ? Object.keys : Vi)(e).forEach(function (n) {
          (r && typeof n == "symbol") || t(n, e[n], e);
        })
      : e.forEach(function (n, o) {
          return t(o, n, e);
        });
}
function ya(e) {
  var t = e[He];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : _v(e)
    ? 2
    : $v(e)
    ? 3
    : 0;
}
function Hi(e, t) {
  return ya(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function zD(e, t) {
  return ya(e) === 2 ? e.get(t) : e[t];
}
function AE(e, t, r) {
  var n = ya(e);
  n === 2 ? e.set(t, r) : n === 3 ? (e.delete(t), e.add(r)) : (e[t] = r);
}
function kE(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function _v(e) {
  return qD && e instanceof Map;
}
function $v(e) {
  return GD && e instanceof Set;
}
function bo(e) {
  return e.o || e.t;
}
function Pv(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = LE(e);
  delete t[He];
  for (var r = Vi(t), n = 0; n < r.length; n++) {
    var o = r[n],
      i = t[o];
    i.writable === !1 && ((i.writable = !0), (i.configurable = !0)),
      (i.get || i.set) &&
        (t[o] = {
          configurable: !0,
          writable: !0,
          enumerable: i.enumerable,
          value: e[o],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function Nv(e, t) {
  return (
    t === void 0 && (t = !1),
    Tv(e) ||
      nn(e) ||
      !Pn(e) ||
      (ya(e) > 1 && (e.set = e.add = e.clear = e.delete = HD),
      Object.freeze(e),
      t &&
        Go(
          e,
          function (r, n) {
            return Nv(n, !0);
          },
          !0
        )),
    e
  );
}
function HD() {
  Fr(2);
}
function Tv(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function tn(e) {
  var t = oh[e];
  return t || Fr(18, e), t;
}
function VD(e, t) {
  oh[e] || (oh[e] = t);
}
function th() {
  return Us;
}
function wd(e, t) {
  t && (tn("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function ac(e) {
  rh(e), e.p.forEach(WD), (e.p = null);
}
function rh(e) {
  e === Us && (Us = e.l);
}
function w0(e) {
  return (Us = { p: [], l: Us, h: e, m: !0, _: 0 });
}
function WD(e) {
  var t = e[He];
  t.i === 0 || t.i === 1 ? t.j() : (t.O = !0);
}
function xd(e, t) {
  t._ = t.p.length;
  var r = t.p[0],
    n = e !== void 0 && e !== r;
  return (
    t.h.g || tn("ES5").S(t, e, n),
    n
      ? (r[He].P && (ac(t), Fr(4)),
        Pn(e) && ((e = sc(t, e)), t.l || lc(t, e)),
        t.u && tn("Patches").M(r[He].t, e, t.u, t.s))
      : (e = sc(t, r, [])),
    ac(t),
    t.u && t.v(t.u, t.s),
    e !== FE ? e : void 0
  );
}
function sc(e, t, r) {
  if (Tv(t)) return t;
  var n = t[He];
  if (!n)
    return (
      Go(
        t,
        function (i, a) {
          return x0(e, n, t, i, a, r);
        },
        !0
      ),
      t
    );
  if (n.A !== e) return t;
  if (!n.P) return lc(e, n.t, !0), n.t;
  if (!n.I) {
    (n.I = !0), n.A._--;
    var o = n.i === 4 || n.i === 5 ? (n.o = Pv(n.k)) : n.o;
    Go(n.i === 3 ? new Set(o) : o, function (i, a) {
      return x0(e, n, o, i, a, r);
    }),
      lc(e, o, !1),
      r && e.u && tn("Patches").R(n, r, e.u, e.s);
  }
  return n.o;
}
function x0(e, t, r, n, o, i) {
  if (nn(o)) {
    var a = sc(e, o, i && t && t.i !== 3 && !Hi(t.D, n) ? i.concat(n) : void 0);
    if ((AE(r, n, a), !nn(a))) return;
    e.m = !1;
  }
  if (Pn(o) && !Tv(o)) {
    if (!e.h.F && e._ < 1) return;
    sc(e, o), (t && t.A.l) || lc(e, o);
  }
}
function lc(e, t, r) {
  r === void 0 && (r = !1), e.h.F && e.m && Nv(t, r);
}
function bd(e, t) {
  var r = e[He];
  return (r ? bo(r) : e)[t];
}
function b0(e, t) {
  if (t in e)
    for (var r = Object.getPrototypeOf(e); r; ) {
      var n = Object.getOwnPropertyDescriptor(r, t);
      if (n) return n;
      r = Object.getPrototypeOf(r);
    }
}
function Wn(e) {
  e.P || ((e.P = !0), e.l && Wn(e.l));
}
function Sd(e) {
  e.o || (e.o = Pv(e.t));
}
function nh(e, t, r) {
  var n = _v(t)
    ? tn("MapSet").N(t, r)
    : $v(t)
    ? tn("MapSet").T(t, r)
    : e.g
    ? (function (o, i) {
        var a = Array.isArray(o),
          s = {
            i: a ? 1 : 0,
            A: i ? i.A : th(),
            P: !1,
            I: !1,
            D: {},
            l: i,
            t: o,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          l = s,
          u = Bs;
        a && ((l = [s]), (u = es));
        var c = Proxy.revocable(l, u),
          d = c.revoke,
          p = c.proxy;
        return (s.k = p), (s.j = d), p;
      })(t, r)
    : tn("ES5").J(t, r);
  return (r ? r.A : th()).p.push(n), n;
}
function DE(e) {
  return (
    nn(e) || Fr(22, e),
    (function t(r) {
      if (!Pn(r)) return r;
      var n,
        o = r[He],
        i = ya(r);
      if (o) {
        if (!o.P && (o.i < 4 || !tn("ES5").K(o))) return o.t;
        (o.I = !0), (n = S0(r, i)), (o.I = !1);
      } else n = S0(r, i);
      return (
        Go(n, function (a, s) {
          (o && zD(o.t, a) === s) || AE(n, a, t(s));
        }),
        i === 3 ? new Set(n) : n
      );
    })(e)
  );
}
function S0(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Pv(e);
}
function KD() {
  function e(i, a) {
    var s = o[i];
    return (
      s
        ? (s.enumerable = a)
        : (o[i] = s =
            {
              configurable: !0,
              enumerable: a,
              get: function () {
                var l = this[He];
                return Bs.get(l, i);
              },
              set: function (l) {
                var u = this[He];
                Bs.set(u, i, l);
              },
            }),
      s
    );
  }
  function t(i) {
    for (var a = i.length - 1; a >= 0; a--) {
      var s = i[a][He];
      if (!s.P)
        switch (s.i) {
          case 5:
            n(s) && Wn(s);
            break;
          case 4:
            r(s) && Wn(s);
        }
    }
  }
  function r(i) {
    for (var a = i.t, s = i.k, l = Vi(s), u = l.length - 1; u >= 0; u--) {
      var c = l[u];
      if (c !== He) {
        var d = a[c];
        if (d === void 0 && !Hi(a, c)) return !0;
        var p = s[c],
          h = p && p[He];
        if (h ? h.t !== d : !kE(p, d)) return !0;
      }
    }
    var w = !!a[He];
    return l.length !== Vi(a).length + (w ? 0 : 1);
  }
  function n(i) {
    var a = i.k;
    if (a.length !== i.t.length) return !0;
    var s = Object.getOwnPropertyDescriptor(a, a.length - 1);
    if (s && !s.get) return !0;
    for (var l = 0; l < a.length; l++) if (!a.hasOwnProperty(l)) return !0;
    return !1;
  }
  var o = {};
  VD("ES5", {
    J: function (i, a) {
      var s = Array.isArray(i),
        l = (function (c, d) {
          if (c) {
            for (var p = Array(d.length), h = 0; h < d.length; h++)
              Object.defineProperty(p, "" + h, e(h, !0));
            return p;
          }
          var w = LE(d);
          delete w[He];
          for (var m = Vi(w), b = 0; b < m.length; b++) {
            var y = m[b];
            w[y] = e(y, c || !!w[y].enumerable);
          }
          return Object.create(Object.getPrototypeOf(d), w);
        })(s, i),
        u = {
          i: s ? 5 : 4,
          A: a ? a.A : th(),
          P: !1,
          I: !1,
          D: {},
          l: a,
          t: i,
          k: l,
          o: null,
          O: !1,
          C: !1,
        };
      return Object.defineProperty(l, He, { value: u, writable: !0 }), l;
    },
    S: function (i, a, s) {
      s
        ? nn(a) && a[He].A === i && t(i.p)
        : (i.u &&
            (function l(u) {
              if (u && typeof u == "object") {
                var c = u[He];
                if (c) {
                  var d = c.t,
                    p = c.k,
                    h = c.D,
                    w = c.i;
                  if (w === 4)
                    Go(p, function (x) {
                      x !== He &&
                        (d[x] !== void 0 || Hi(d, x)
                          ? h[x] || l(p[x])
                          : ((h[x] = !0), Wn(c)));
                    }),
                      Go(d, function (x) {
                        p[x] !== void 0 || Hi(p, x) || ((h[x] = !1), Wn(c));
                      });
                  else if (w === 5) {
                    if ((n(c) && (Wn(c), (h.length = !0)), p.length < d.length))
                      for (var m = p.length; m < d.length; m++) h[m] = !1;
                    else for (var b = d.length; b < p.length; b++) h[b] = !0;
                    for (
                      var y = Math.min(p.length, d.length), g = 0;
                      g < y;
                      g++
                    )
                      p.hasOwnProperty(g) || (h[g] = !0),
                        h[g] === void 0 && l(p[g]);
                  }
                }
              }
            })(i.p[0]),
          t(i.p));
    },
    K: function (i) {
      return i.i === 4 ? r(i) : n(i);
    },
  });
}
var E0,
  Us,
  Rv = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol",
  qD = typeof Map != "undefined",
  GD = typeof Set != "undefined",
  C0 =
    typeof Proxy != "undefined" &&
    Proxy.revocable !== void 0 &&
    typeof Reflect != "undefined",
  FE = Rv
    ? Symbol.for("immer-nothing")
    : (((E0 = {})["immer-nothing"] = !0), E0),
  O0 = Rv ? Symbol.for("immer-draftable") : "__$immer_draftable",
  He = Rv ? Symbol.for("immer-state") : "__$immer_state",
  YD = "" + Object.prototype.constructor,
  Vi =
    typeof Reflect != "undefined" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  LE =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        Vi(e).forEach(function (r) {
          t[r] = Object.getOwnPropertyDescriptor(e, r);
        }),
        t
      );
    },
  oh = {},
  Bs = {
    get: function (e, t) {
      if (t === He) return e;
      var r = bo(e);
      if (!Hi(r, t))
        return (function (o, i, a) {
          var s,
            l = b0(i, a);
          return l
            ? "value" in l
              ? l.value
              : (s = l.get) === null || s === void 0
              ? void 0
              : s.call(o.k)
            : void 0;
        })(e, r, t);
      var n = r[t];
      return e.I || !Pn(n)
        ? n
        : n === bd(e.t, t)
        ? (Sd(e), (e.o[t] = nh(e.A.h, n, e)))
        : n;
    },
    has: function (e, t) {
      return t in bo(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(bo(e));
    },
    set: function (e, t, r) {
      var n = b0(bo(e), t);
      if (n != null && n.set) return n.set.call(e.k, r), !0;
      if (!e.P) {
        var o = bd(bo(e), t),
          i = o == null ? void 0 : o[He];
        if (i && i.t === r) return (e.o[t] = r), (e.D[t] = !1), !0;
        if (kE(r, o) && (r !== void 0 || Hi(e.t, t))) return !0;
        Sd(e), Wn(e);
      }
      return (
        (e.o[t] === r && typeof r != "number" && (r !== void 0 || t in e.o)) ||
        ((e.o[t] = r), (e.D[t] = !0), !0)
      );
    },
    deleteProperty: function (e, t) {
      return (
        bd(e.t, t) !== void 0 || t in e.t
          ? ((e.D[t] = !1), Sd(e), Wn(e))
          : delete e.D[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var r = bo(e),
        n = Reflect.getOwnPropertyDescriptor(r, t);
      return (
        n && {
          writable: !0,
          configurable: e.i !== 1 || t !== "length",
          enumerable: n.enumerable,
          value: r[t],
        }
      );
    },
    defineProperty: function () {
      Fr(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      Fr(12);
    },
  },
  es = {};
Go(Bs, function (e, t) {
  es[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (es.deleteProperty = function (e, t) {
    return es.set.call(this, e, t, void 0);
  }),
  (es.set = function (e, t, r) {
    return Bs.set.call(this, e[0], t, r, e[0]);
  });
var QD = (function () {
    function e(r) {
      var n = this;
      (this.g = C0),
        (this.F = !0),
        (this.produce = function (o, i, a) {
          if (typeof o == "function" && typeof i != "function") {
            var s = i;
            i = o;
            var l = n;
            return function (m) {
              var b = this;
              m === void 0 && (m = s);
              for (
                var y = arguments.length, g = Array(y > 1 ? y - 1 : 0), x = 1;
                x < y;
                x++
              )
                g[x - 1] = arguments[x];
              return l.produce(m, function (S) {
                var C;
                return (C = i).call.apply(C, [b, S].concat(g));
              });
            };
          }
          var u;
          if (
            (typeof i != "function" && Fr(6),
            a !== void 0 && typeof a != "function" && Fr(7),
            Pn(o))
          ) {
            var c = w0(n),
              d = nh(n, o, void 0),
              p = !0;
            try {
              (u = i(d)), (p = !1);
            } finally {
              p ? ac(c) : rh(c);
            }
            return typeof Promise != "undefined" && u instanceof Promise
              ? u.then(
                  function (m) {
                    return wd(c, a), xd(m, c);
                  },
                  function (m) {
                    throw (ac(c), m);
                  }
                )
              : (wd(c, a), xd(u, c));
          }
          if (!o || typeof o != "object") {
            if (
              ((u = i(o)) === void 0 && (u = o),
              u === FE && (u = void 0),
              n.F && Nv(u, !0),
              a)
            ) {
              var h = [],
                w = [];
              tn("Patches").M(o, u, h, w), a(h, w);
            }
            return u;
          }
          Fr(21, o);
        }),
        (this.produceWithPatches = function (o, i) {
          if (typeof o == "function")
            return function (u) {
              for (
                var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), p = 1;
                p < c;
                p++
              )
                d[p - 1] = arguments[p];
              return n.produceWithPatches(u, function (h) {
                return o.apply(void 0, [h].concat(d));
              });
            };
          var a,
            s,
            l = n.produce(o, i, function (u, c) {
              (a = u), (s = c);
            });
          return typeof Promise != "undefined" && l instanceof Promise
            ? l.then(function (u) {
                return [u, a, s];
              })
            : [l, a, s];
        }),
        typeof (r == null ? void 0 : r.useProxies) == "boolean" &&
          this.setUseProxies(r.useProxies),
        typeof (r == null ? void 0 : r.autoFreeze) == "boolean" &&
          this.setAutoFreeze(r.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (r) {
        Pn(r) || Fr(8), nn(r) && (r = DE(r));
        var n = w0(this),
          o = nh(this, r, void 0);
        return (o[He].C = !0), rh(n), o;
      }),
      (t.finishDraft = function (r, n) {
        var o = r && r[He],
          i = o.A;
        return wd(i, n), xd(void 0, i);
      }),
      (t.setAutoFreeze = function (r) {
        this.F = r;
      }),
      (t.setUseProxies = function (r) {
        r && !C0 && Fr(20), (this.g = r);
      }),
      (t.applyPatches = function (r, n) {
        var o;
        for (o = n.length - 1; o >= 0; o--) {
          var i = n[o];
          if (i.path.length === 0 && i.op === "replace") {
            r = i.value;
            break;
          }
        }
        o > -1 && (n = n.slice(o + 1));
        var a = tn("Patches").$;
        return nn(r)
          ? a(r, n)
          : this.produce(r, function (s) {
              return a(s, n);
            });
      }),
      e
    );
  })(),
  ur = new QD(),
  XD = ur.produce;
ur.produceWithPatches.bind(ur);
ur.setAutoFreeze.bind(ur);
ur.setUseProxies.bind(ur);
ur.applyPatches.bind(ur);
ur.createDraft.bind(ur);
ur.finishDraft.bind(ur);
var Av = XD;
function zs(e) {
  return (
    (zs =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    zs(e)
  );
}
function JD(e, t) {
  if (zs(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (zs(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ZD(e) {
  var t = JD(e, "string");
  return zs(t) === "symbol" ? t : String(t);
}
function e3(e, t, r) {
  return (
    (t = ZD(t)),
    t in e
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
function _0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function $0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _0(Object(r), !0).forEach(function (n) {
          e3(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : _0(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function $t(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var P0 = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  Ed = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  uc = {
    INIT: "@@redux/INIT" + Ed(),
    REPLACE: "@@redux/REPLACE" + Ed(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + Ed();
    },
  };
function t3(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function kv(e, t, r) {
  var n;
  if (
    (typeof t == "function" && typeof r == "function") ||
    (typeof r == "function" && typeof arguments[3] == "function")
  )
    throw new Error($t(0));
  if (
    (typeof t == "function" &&
      typeof r == "undefined" &&
      ((r = t), (t = void 0)),
    typeof r != "undefined")
  ) {
    if (typeof r != "function") throw new Error($t(1));
    return r(kv)(e, t);
  }
  if (typeof e != "function") throw new Error($t(2));
  var o = e,
    i = t,
    a = [],
    s = a,
    l = !1;
  function u() {
    s === a && (s = a.slice());
  }
  function c() {
    if (l) throw new Error($t(3));
    return i;
  }
  function d(m) {
    if (typeof m != "function") throw new Error($t(4));
    if (l) throw new Error($t(5));
    var b = !0;
    return (
      u(),
      s.push(m),
      function () {
        if (!!b) {
          if (l) throw new Error($t(6));
          (b = !1), u();
          var g = s.indexOf(m);
          s.splice(g, 1), (a = null);
        }
      }
    );
  }
  function p(m) {
    if (!t3(m)) throw new Error($t(7));
    if (typeof m.type == "undefined") throw new Error($t(8));
    if (l) throw new Error($t(9));
    try {
      (l = !0), (i = o(i, m));
    } finally {
      l = !1;
    }
    for (var b = (a = s), y = 0; y < b.length; y++) {
      var g = b[y];
      g();
    }
    return m;
  }
  function h(m) {
    if (typeof m != "function") throw new Error($t(10));
    (o = m), p({ type: uc.REPLACE });
  }
  function w() {
    var m,
      b = d;
    return (
      (m = {
        subscribe: function (g) {
          if (typeof g != "object" || g === null) throw new Error($t(11));
          function x() {
            g.next && g.next(c());
          }
          x();
          var S = b(x);
          return { unsubscribe: S };
        },
      }),
      (m[P0] = function () {
        return this;
      }),
      m
    );
  }
  return (
    p({ type: uc.INIT }),
    (n = { dispatch: p, subscribe: d, getState: c, replaceReducer: h }),
    (n[P0] = w),
    n
  );
}
function r3(e) {
  Object.keys(e).forEach(function (t) {
    var r = e[t],
      n = r(void 0, { type: uc.INIT });
    if (typeof n == "undefined") throw new Error($t(12));
    if (typeof r(void 0, { type: uc.PROBE_UNKNOWN_ACTION() }) == "undefined")
      throw new Error($t(13));
  });
}
function ME(e) {
  for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
    var o = t[n];
    typeof e[o] == "function" && (r[o] = e[o]);
  }
  var i = Object.keys(r),
    a;
  try {
    r3(r);
  } catch (s) {
    a = s;
  }
  return function (l, u) {
    if ((l === void 0 && (l = {}), a)) throw a;
    for (var c = !1, d = {}, p = 0; p < i.length; p++) {
      var h = i[p],
        w = r[h],
        m = l[h],
        b = w(m, u);
      if (typeof b == "undefined") throw (u && u.type, new Error($t(14)));
      (d[h] = b), (c = c || b !== m);
    }
    return (c = c || i.length !== Object.keys(l).length), c ? d : l;
  };
}
function cc() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.length === 0
    ? function (n) {
        return n;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (n, o) {
        return function () {
          return n(o.apply(void 0, arguments));
        };
      });
}
function n3() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function (n) {
    return function () {
      var o = n.apply(void 0, arguments),
        i = function () {
          throw new Error($t(15));
        },
        a = {
          getState: o.getState,
          dispatch: function () {
            return i.apply(void 0, arguments);
          },
        },
        s = t.map(function (l) {
          return l(a);
        });
      return (
        (i = cc.apply(void 0, s)(o.dispatch)),
        $0($0({}, o), {}, { dispatch: i })
      );
    };
  };
}
var fc = "NOT_FOUND";
function o3(e) {
  var t;
  return {
    get: function (n) {
      return t && e(t.key, n) ? t.value : fc;
    },
    put: function (n, o) {
      t = { key: n, value: o };
    },
    getEntries: function () {
      return t ? [t] : [];
    },
    clear: function () {
      t = void 0;
    },
  };
}
function i3(e, t) {
  var r = [];
  function n(s) {
    var l = r.findIndex(function (c) {
      return t(s, c.key);
    });
    if (l > -1) {
      var u = r[l];
      return l > 0 && (r.splice(l, 1), r.unshift(u)), u.value;
    }
    return fc;
  }
  function o(s, l) {
    n(s) === fc && (r.unshift({ key: s, value: l }), r.length > e && r.pop());
  }
  function i() {
    return r;
  }
  function a() {
    r = [];
  }
  return { get: n, put: o, getEntries: i, clear: a };
}
var a3 = function (t, r) {
  return t === r;
};
function s3(e) {
  return function (r, n) {
    if (r === null || n === null || r.length !== n.length) return !1;
    for (var o = r.length, i = 0; i < o; i++) if (!e(r[i], n[i])) return !1;
    return !0;
  };
}
function l3(e, t) {
  var r = typeof t == "object" ? t : { equalityCheck: t },
    n = r.equalityCheck,
    o = n === void 0 ? a3 : n,
    i = r.maxSize,
    a = i === void 0 ? 1 : i,
    s = r.resultEqualityCheck,
    l = s3(o),
    u = a === 1 ? o3(l) : i3(a, l);
  function c() {
    var d = u.get(arguments);
    if (d === fc) {
      if (((d = e.apply(null, arguments)), s)) {
        var p = u.getEntries(),
          h = p.find(function (w) {
            return s(w.value, d);
          });
        h && (d = h.value);
      }
      u.put(arguments, d);
    }
    return d;
  }
  return (
    (c.clearCache = function () {
      return u.clear();
    }),
    c
  );
}
function u3(e) {
  var t = Array.isArray(e[0]) ? e[0] : e;
  if (
    !t.every(function (n) {
      return typeof n == "function";
    })
  ) {
    var r = t
      .map(function (n) {
        return typeof n == "function"
          ? "function " + (n.name || "unnamed") + "()"
          : typeof n;
      })
      .join(", ");
    throw new Error(
      "createSelector expects all input-selectors to be functions, but received the following types: [" +
        r +
        "]"
    );
  }
  return t;
}
function c3(e) {
  for (
    var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  var o = function () {
    for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    var u = 0,
      c,
      d = { memoizeOptions: void 0 },
      p = s.pop();
    if (
      (typeof p == "object" && ((d = p), (p = s.pop())), typeof p != "function")
    )
      throw new Error(
        "createSelector expects an output function after the inputs, but received: [" +
          typeof p +
          "]"
      );
    var h = d,
      w = h.memoizeOptions,
      m = w === void 0 ? r : w,
      b = Array.isArray(m) ? m : [m],
      y = u3(s),
      g = e.apply(
        void 0,
        [
          function () {
            return u++, p.apply(null, arguments);
          },
        ].concat(b)
      ),
      x = e(function () {
        for (var C = [], $ = y.length, P = 0; P < $; P++)
          C.push(y[P].apply(null, arguments));
        return (c = g.apply(null, C)), c;
      });
    return (
      Object.assign(x, {
        resultFunc: p,
        memoizedResultFunc: g,
        dependencies: y,
        lastResult: function () {
          return c;
        },
        recomputations: function () {
          return u;
        },
        resetRecomputations: function () {
          return (u = 0);
        },
      }),
      x
    );
  };
  return o;
}
var f3 = c3(l3);
function IE(e) {
  var t = function (n) {
    var o = n.dispatch,
      i = n.getState;
    return function (a) {
      return function (s) {
        return typeof s == "function" ? s(o, i, e) : a(s);
      };
    };
  };
  return t;
}
var jE = IE();
jE.withExtraArgument = IE;
var N0 = jE,
  d3 =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, r) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, o) {
                n.__proto__ = o;
              }) ||
            function (n, o) {
              for (var i in o)
                Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
            }),
          e(t, r)
        );
      };
      return function (t, r) {
        if (typeof r != "function" && r !== null)
          throw new TypeError(
            "Class extends value " + String(r) + " is not a constructor or null"
          );
        e(t, r);
        function n() {
          this.constructor = t;
        }
        t.prototype =
          r === null
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n());
      };
    })(),
  p3 =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var r = {
          label: 0,
          sent: function () {
            if (i[0] & 1) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        },
        n,
        o,
        i,
        a;
      return (
        (a = { next: s(0), throw: s(1), return: s(2) }),
        typeof Symbol == "function" &&
          (a[Symbol.iterator] = function () {
            return this;
          }),
        a
      );
      function s(u) {
        return function (c) {
          return l([u, c]);
        };
      }
      function l(u) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; r; )
          try {
            if (
              ((n = 1),
              o &&
                (i =
                  u[0] & 2
                    ? o.return
                    : u[0]
                    ? o.throw || ((i = o.return) && i.call(o), 0)
                    : o.next) &&
                !(i = i.call(o, u[1])).done)
            )
              return i;
            switch (((o = 0), i && (u = [u[0] & 2, i.value]), u[0])) {
              case 0:
              case 1:
                i = u;
                break;
              case 4:
                return r.label++, { value: u[1], done: !1 };
              case 5:
                r.label++, (o = u[1]), (u = [0]);
                continue;
              case 7:
                (u = r.ops.pop()), r.trys.pop();
                continue;
              default:
                if (
                  ((i = r.trys),
                  !(i = i.length > 0 && i[i.length - 1]) &&
                    (u[0] === 6 || u[0] === 2))
                ) {
                  r = 0;
                  continue;
                }
                if (u[0] === 3 && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                  r.label = u[1];
                  break;
                }
                if (u[0] === 6 && r.label < i[1]) {
                  (r.label = i[1]), (i = u);
                  break;
                }
                if (i && r.label < i[2]) {
                  (r.label = i[2]), r.ops.push(u);
                  break;
                }
                i[2] && r.ops.pop(), r.trys.pop();
                continue;
            }
            u = t.call(e, r);
          } catch (c) {
            (u = [6, c]), (o = 0);
          } finally {
            n = i = 0;
          }
        if (u[0] & 5) throw u[1];
        return { value: u[0] ? u[1] : void 0, done: !0 };
      }
    },
  Hs =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var r = 0, n = t.length, o = e.length; r < n; r++, o++) e[o] = t[r];
      return e;
    },
  h3 = Object.defineProperty,
  m3 = Object.defineProperties,
  v3 = Object.getOwnPropertyDescriptors,
  T0 = Object.getOwnPropertySymbols,
  g3 = Object.prototype.hasOwnProperty,
  y3 = Object.prototype.propertyIsEnumerable,
  R0 = function (e, t, r) {
    return t in e
      ? h3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  Kt = function (e, t) {
    for (var r in t || (t = {})) g3.call(t, r) && R0(e, r, t[r]);
    if (T0)
      for (var n = 0, o = T0(t); n < o.length; n++) {
        var r = o[n];
        y3.call(t, r) && R0(e, r, t[r]);
      }
    return e;
  },
  Cd = function (e, t) {
    return m3(e, v3(t));
  },
  w3 = function (e, t, r) {
    return new Promise(function (n, o) {
      var i = function (l) {
          try {
            s(r.next(l));
          } catch (u) {
            o(u);
          }
        },
        a = function (l) {
          try {
            s(r.throw(l));
          } catch (u) {
            o(u);
          }
        },
        s = function (l) {
          return l.done ? n(l.value) : Promise.resolve(l.value).then(i, a);
        };
      s((r = r.apply(e, t)).next());
    });
  },
  Ln = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var r = f3.apply(void 0, e),
      n = function (o) {
        for (var i = [], a = 1; a < arguments.length; a++)
          i[a - 1] = arguments[a];
        return r.apply(void 0, Hs([nn(o) ? DE(o) : o], i));
      };
    return n;
  },
  x3 =
    typeof window != "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? cc
              : cc.apply(null, arguments);
        };
function UE(e) {
  if (typeof e != "object" || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var r = t; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
var b3 = (function (e) {
  d3(t, e);
  function t() {
    for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
    var o = e.apply(this, r) || this;
    return Object.setPrototypeOf(o, t.prototype), o;
  }
  return (
    Object.defineProperty(t, Symbol.species, {
      get: function () {
        return t;
      },
      enumerable: !1,
      configurable: !0,
    }),
    (t.prototype.concat = function () {
      for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
      return e.prototype.concat.apply(this, r);
    }),
    (t.prototype.prepend = function () {
      for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
      return r.length === 1 && Array.isArray(r[0])
        ? new (t.bind.apply(t, Hs([void 0], r[0].concat(this))))()
        : new (t.bind.apply(t, Hs([void 0], r.concat(this))))();
    }),
    t
  );
})(Array);
function ih(e) {
  return Pn(e) ? Av(e, function () {}) : e;
}
function S3(e) {
  return typeof e == "boolean";
}
function E3() {
  return function (t) {
    return C3(t);
  };
}
function C3(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    r = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var n = new b3();
  return (
    r && (S3(r) ? n.push(N0) : n.push(N0.withExtraArgument(r.extraArgument))), n
  );
}
var O3 = !0;
function _3(e) {
  var t = E3(),
    r = e || {},
    n = r.reducer,
    o = n === void 0 ? void 0 : n,
    i = r.middleware,
    a = i === void 0 ? t() : i,
    s = r.devTools,
    l = s === void 0 ? !0 : s,
    u = r.preloadedState,
    c = u === void 0 ? void 0 : u,
    d = r.enhancers,
    p = d === void 0 ? void 0 : d,
    h;
  if (typeof o == "function") h = o;
  else if (UE(o)) h = ME(o);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var w = a;
  typeof w == "function" && (w = w(t));
  var m = n3.apply(void 0, w),
    b = cc;
  l && (b = x3(Kt({ trace: !O3 }, typeof l == "object" && l)));
  var y = [m];
  Array.isArray(p) ? (y = Hs([m], p)) : typeof p == "function" && (y = p(y));
  var g = b.apply(void 0, y);
  return kv(h, c, g);
}
function oo(e, t) {
  function r() {
    for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
    if (t) {
      var i = t.apply(void 0, n);
      if (!i) throw new Error("prepareAction did not return an object");
      return Kt(
        Kt({ type: e, payload: i.payload }, "meta" in i && { meta: i.meta }),
        "error" in i && { error: i.error }
      );
    }
    return { type: e, payload: n[0] };
  }
  return (
    (r.toString = function () {
      return "" + e;
    }),
    (r.type = e),
    (r.match = function (n) {
      return n.type === e;
    }),
    r
  );
}
function $3(e) {
  return UE(e) && typeof e.type == "string" && Object.keys(e).every(P3);
}
function P3(e) {
  return ["type", "payload", "error", "meta"].indexOf(e) > -1;
}
function BE(e) {
  var t = {},
    r = [],
    n,
    o = {
      addCase: function (i, a) {
        var s = typeof i == "string" ? i : i.type;
        if (s in t)
          throw new Error(
            "addCase cannot be called with two reducers for the same action type"
          );
        return (t[s] = a), o;
      },
      addMatcher: function (i, a) {
        return r.push({ matcher: i, reducer: a }), o;
      },
      addDefaultCase: function (i) {
        return (n = i), o;
      },
    };
  return e(o), [t, r, n];
}
function N3(e) {
  return typeof e == "function";
}
function T3(e, t, r, n) {
  r === void 0 && (r = []);
  var o = typeof t == "function" ? BE(t) : [t, r, n],
    i = o[0],
    a = o[1],
    s = o[2],
    l;
  if (N3(e))
    l = function () {
      return ih(e());
    };
  else {
    var u = ih(e);
    l = function () {
      return u;
    };
  }
  function c(d, p) {
    d === void 0 && (d = l());
    var h = Hs(
      [i[p.type]],
      a
        .filter(function (w) {
          var m = w.matcher;
          return m(p);
        })
        .map(function (w) {
          var m = w.reducer;
          return m;
        })
    );
    return (
      h.filter(function (w) {
        return !!w;
      }).length === 0 && (h = [s]),
      h.reduce(function (w, m) {
        if (m)
          if (nn(w)) {
            var b = w,
              y = m(b, p);
            return y === void 0 ? w : y;
          } else {
            if (Pn(w))
              return Av(w, function (g) {
                return m(g, p);
              });
            var y = m(w, p);
            if (y === void 0) {
              if (w === null) return w;
              throw Error(
                "A case reducer on a non-draftable value must not return undefined"
              );
            }
            return y;
          }
        return w;
      }, d)
    );
  }
  return (c.getInitialState = l), c;
}
function R3(e, t) {
  return e + "/" + t;
}
function on(e) {
  var t = e.name;
  if (!t) throw new Error("`name` is a required option for createSlice");
  var r =
      typeof e.initialState == "function" ? e.initialState : ih(e.initialState),
    n = e.reducers || {},
    o = Object.keys(n),
    i = {},
    a = {},
    s = {};
  o.forEach(function (c) {
    var d = n[c],
      p = R3(t, c),
      h,
      w;
    "reducer" in d ? ((h = d.reducer), (w = d.prepare)) : (h = d),
      (i[c] = h),
      (a[p] = h),
      (s[c] = w ? oo(p, w) : oo(p));
  });
  function l() {
    var c =
        typeof e.extraReducers == "function"
          ? BE(e.extraReducers)
          : [e.extraReducers],
      d = c[0],
      p = d === void 0 ? {} : d,
      h = c[1],
      w = h === void 0 ? [] : h,
      m = c[2],
      b = m === void 0 ? void 0 : m,
      y = Kt(Kt({}, p), a);
    return T3(r, function (g) {
      for (var x in y) g.addCase(x, y[x]);
      for (var S = 0, C = w; S < C.length; S++) {
        var $ = C[S];
        g.addMatcher($.matcher, $.reducer);
      }
      b && g.addDefaultCase(b);
    });
  }
  var u;
  return {
    name: t,
    reducer: function (c, d) {
      return u || (u = l()), u(c, d);
    },
    actions: s,
    caseReducers: i,
    getInitialState: function () {
      return u || (u = l()), u.getInitialState();
    },
  };
}
function A3() {
  return { ids: [], entities: {} };
}
function k3() {
  function e(t) {
    return t === void 0 && (t = {}), Object.assign(A3(), t);
  }
  return { getInitialState: e };
}
function D3() {
  function e(t) {
    var r = function (u) {
        return u.ids;
      },
      n = function (u) {
        return u.entities;
      },
      o = Ln(r, n, function (u, c) {
        return u.map(function (d) {
          return c[d];
        });
      }),
      i = function (u, c) {
        return c;
      },
      a = function (u, c) {
        return u[c];
      },
      s = Ln(r, function (u) {
        return u.length;
      });
    if (!t)
      return {
        selectIds: r,
        selectEntities: n,
        selectAll: o,
        selectTotal: s,
        selectById: Ln(n, i, a),
      };
    var l = Ln(t, n);
    return {
      selectIds: Ln(t, r),
      selectEntities: l,
      selectAll: Ln(t, o),
      selectTotal: Ln(t, s),
      selectById: Ln(l, i, a),
    };
  }
  return { getSelectors: e };
}
function F3(e) {
  var t = Ze(function (r, n) {
    return e(n);
  });
  return function (n) {
    return t(n, void 0);
  };
}
function Ze(e) {
  return function (r, n) {
    function o(a) {
      return $3(a);
    }
    var i = function (a) {
      o(n) ? e(n.payload, a) : e(n, a);
    };
    return nn(r) ? (i(r), r) : Av(r, i);
  };
}
function hs(e, t) {
  var r = t(e);
  return r;
}
function Mo(e) {
  return Array.isArray(e) || (e = Object.values(e)), e;
}
function zE(e, t, r) {
  e = Mo(e);
  for (var n = [], o = [], i = 0, a = e; i < a.length; i++) {
    var s = a[i],
      l = hs(s, t);
    l in r.entities ? o.push({ id: l, changes: s }) : n.push(s);
  }
  return [n, o];
}
function HE(e) {
  function t(w, m) {
    var b = hs(w, e);
    b in m.entities || (m.ids.push(b), (m.entities[b] = w));
  }
  function r(w, m) {
    w = Mo(w);
    for (var b = 0, y = w; b < y.length; b++) {
      var g = y[b];
      t(g, m);
    }
  }
  function n(w, m) {
    var b = hs(w, e);
    b in m.entities || m.ids.push(b), (m.entities[b] = w);
  }
  function o(w, m) {
    w = Mo(w);
    for (var b = 0, y = w; b < y.length; b++) {
      var g = y[b];
      n(g, m);
    }
  }
  function i(w, m) {
    (w = Mo(w)), (m.ids = []), (m.entities = {}), r(w, m);
  }
  function a(w, m) {
    return s([w], m);
  }
  function s(w, m) {
    var b = !1;
    w.forEach(function (y) {
      y in m.entities && (delete m.entities[y], (b = !0));
    }),
      b &&
        (m.ids = m.ids.filter(function (y) {
          return y in m.entities;
        }));
  }
  function l(w) {
    Object.assign(w, { ids: [], entities: {} });
  }
  function u(w, m, b) {
    var y = b.entities[m.id],
      g = Object.assign({}, y, m.changes),
      x = hs(g, e),
      S = x !== m.id;
    return (
      S && ((w[m.id] = x), delete b.entities[m.id]), (b.entities[x] = g), S
    );
  }
  function c(w, m) {
    return d([w], m);
  }
  function d(w, m) {
    var b = {},
      y = {};
    w.forEach(function (S) {
      S.id in m.entities &&
        (y[S.id] = {
          id: S.id,
          changes: Kt(Kt({}, y[S.id] ? y[S.id].changes : null), S.changes),
        });
    }),
      (w = Object.values(y));
    var g = w.length > 0;
    if (g) {
      var x =
        w.filter(function (S) {
          return u(b, S, m);
        }).length > 0;
      x && (m.ids = Object.keys(m.entities));
    }
  }
  function p(w, m) {
    return h([w], m);
  }
  function h(w, m) {
    var b = zE(w, e, m),
      y = b[0],
      g = b[1];
    d(g, m), r(y, m);
  }
  return {
    removeAll: F3(l),
    addOne: Ze(t),
    addMany: Ze(r),
    setOne: Ze(n),
    setMany: Ze(o),
    setAll: Ze(i),
    updateOne: Ze(c),
    updateMany: Ze(d),
    upsertOne: Ze(p),
    upsertMany: Ze(h),
    removeOne: Ze(a),
    removeMany: Ze(s),
  };
}
function L3(e, t) {
  var r = HE(e),
    n = r.removeOne,
    o = r.removeMany,
    i = r.removeAll;
  function a(g, x) {
    return s([g], x);
  }
  function s(g, x) {
    g = Mo(g);
    var S = g.filter(function (C) {
      return !(hs(C, e) in x.entities);
    });
    S.length !== 0 && b(S, x);
  }
  function l(g, x) {
    return u([g], x);
  }
  function u(g, x) {
    (g = Mo(g)), g.length !== 0 && b(g, x);
  }
  function c(g, x) {
    (g = Mo(g)), (x.entities = {}), (x.ids = []), s(g, x);
  }
  function d(g, x) {
    return p([g], x);
  }
  function p(g, x) {
    for (var S = !1, C = 0, $ = g; C < $.length; C++) {
      var P = $[C],
        R = x.entities[P.id];
      if (!!R) {
        (S = !0), Object.assign(R, P.changes);
        var M = e(R);
        P.id !== M && (delete x.entities[P.id], (x.entities[M] = R));
      }
    }
    S && y(x);
  }
  function h(g, x) {
    return w([g], x);
  }
  function w(g, x) {
    var S = zE(g, e, x),
      C = S[0],
      $ = S[1];
    p($, x), s(C, x);
  }
  function m(g, x) {
    if (g.length !== x.length) return !1;
    for (var S = 0; S < g.length && S < x.length; S++)
      if (g[S] !== x[S]) return !1;
    return !0;
  }
  function b(g, x) {
    g.forEach(function (S) {
      x.entities[e(S)] = S;
    }),
      y(x);
  }
  function y(g) {
    var x = Object.values(g.entities);
    x.sort(t);
    var S = x.map(e),
      C = g.ids;
    m(C, S) || (g.ids = S);
  }
  return {
    removeOne: n,
    removeMany: o,
    removeAll: i,
    addOne: Ze(a),
    updateOne: Ze(d),
    upsertOne: Ze(h),
    setOne: Ze(l),
    setMany: Ze(u),
    setAll: Ze(c),
    addMany: Ze(s),
    updateMany: Ze(p),
    upsertMany: Ze(w),
  };
}
function M3(e) {
  e === void 0 && (e = {});
  var t = Kt(
      {
        sortComparer: !1,
        selectId: function (s) {
          return s.id;
        },
      },
      e
    ),
    r = t.selectId,
    n = t.sortComparer,
    o = k3(),
    i = D3(),
    a = n ? L3(r, n) : HE(r);
  return Kt(Kt(Kt({ selectId: r, sortComparer: n }, o), i), a);
}
var I3 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  j3 = function (e) {
    e === void 0 && (e = 21);
    for (var t = "", r = e; r--; ) t += I3[(Math.random() * 64) | 0];
    return t;
  },
  U3 = ["name", "message", "stack", "code"],
  Od = (function () {
    function e(t, r) {
      (this.payload = t), (this.meta = r);
    }
    return e;
  })(),
  A0 = (function () {
    function e(t, r) {
      (this.payload = t), (this.meta = r);
    }
    return e;
  })(),
  B3 = function (e) {
    if (typeof e == "object" && e !== null) {
      for (var t = {}, r = 0, n = U3; r < n.length; r++) {
        var o = n[r];
        typeof e[o] == "string" && (t[o] = e[o]);
      }
      return t;
    }
    return { message: String(e) };
  },
  Rn = (function () {
    function e(t, r, n) {
      var o = oo(t + "/fulfilled", function (u, c, d, p) {
          return {
            payload: u,
            meta: Cd(Kt({}, p || {}), {
              arg: d,
              requestId: c,
              requestStatus: "fulfilled",
            }),
          };
        }),
        i = oo(t + "/pending", function (u, c, d) {
          return {
            payload: void 0,
            meta: Cd(Kt({}, d || {}), {
              arg: c,
              requestId: u,
              requestStatus: "pending",
            }),
          };
        }),
        a = oo(t + "/rejected", function (u, c, d, p, h) {
          return {
            payload: p,
            error: ((n && n.serializeError) || B3)(u || "Rejected"),
            meta: Cd(Kt({}, h || {}), {
              arg: d,
              requestId: c,
              rejectedWithValue: !!p,
              requestStatus: "rejected",
              aborted: (u == null ? void 0 : u.name) === "AbortError",
              condition: (u == null ? void 0 : u.name) === "ConditionError",
            }),
          };
        }),
        s =
          typeof AbortController != "undefined"
            ? AbortController
            : (function () {
                function u() {
                  this.signal = {
                    aborted: !1,
                    addEventListener: function () {},
                    dispatchEvent: function () {
                      return !1;
                    },
                    onabort: function () {},
                    removeEventListener: function () {},
                    reason: void 0,
                    throwIfAborted: function () {},
                  };
                }
                return (u.prototype.abort = function () {}), u;
              })();
      function l(u) {
        return function (c, d, p) {
          var h = n != null && n.idGenerator ? n.idGenerator(u) : j3(),
            w = new s(),
            m;
          function b(g) {
            (m = g), w.abort();
          }
          var y = (function () {
            return w3(this, null, function () {
              var g, x, S, C, $, P, R;
              return p3(this, function (M) {
                switch (M.label) {
                  case 0:
                    return (
                      M.trys.push([0, 4, , 5]),
                      (C =
                        (g = n == null ? void 0 : n.condition) == null
                          ? void 0
                          : g.call(n, u, { getState: d, extra: p })),
                      H3(C) ? [4, C] : [3, 2]
                    );
                  case 1:
                    (C = M.sent()), (M.label = 2);
                  case 2:
                    if (C === !1 || w.signal.aborted)
                      throw {
                        name: "ConditionError",
                        message:
                          "Aborted due to condition callback returning false.",
                      };
                    return (
                      ($ = new Promise(function (L, F) {
                        return w.signal.addEventListener("abort", function () {
                          return F({
                            name: "AbortError",
                            message: m || "Aborted",
                          });
                        });
                      })),
                      c(
                        i(
                          h,
                          u,
                          (x = n == null ? void 0 : n.getPendingMeta) == null
                            ? void 0
                            : x.call(
                                n,
                                { requestId: h, arg: u },
                                { getState: d, extra: p }
                              )
                        )
                      ),
                      [
                        4,
                        Promise.race([
                          $,
                          Promise.resolve(
                            r(u, {
                              dispatch: c,
                              getState: d,
                              extra: p,
                              requestId: h,
                              signal: w.signal,
                              abort: b,
                              rejectWithValue: function (L, F) {
                                return new Od(L, F);
                              },
                              fulfillWithValue: function (L, F) {
                                return new A0(L, F);
                              },
                            })
                          ).then(function (L) {
                            if (L instanceof Od) throw L;
                            return L instanceof A0
                              ? o(L.payload, h, u, L.meta)
                              : o(L, h, u);
                          }),
                        ]),
                      ]
                    );
                  case 3:
                    return (S = M.sent()), [3, 5];
                  case 4:
                    return (
                      (P = M.sent()),
                      (S =
                        P instanceof Od
                          ? a(null, h, u, P.payload, P.meta)
                          : a(P, h, u)),
                      [3, 5]
                    );
                  case 5:
                    return (
                      (R =
                        n &&
                        !n.dispatchConditionRejection &&
                        a.match(S) &&
                        S.meta.condition),
                      R || c(S),
                      [2, S]
                    );
                }
              });
            });
          })();
          return Object.assign(y, {
            abort: b,
            requestId: h,
            arg: u,
            unwrap: function () {
              return y.then(z3);
            },
          });
        };
      }
      return Object.assign(l, {
        pending: i,
        rejected: a,
        fulfilled: o,
        typePrefix: t,
      });
    }
    return (
      (e.withTypes = function () {
        return e;
      }),
      e
    );
  })();
function z3(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function H3(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Dv = "listenerMiddleware";
oo(Dv + "/add");
oo(Dv + "/removeAll");
oo(Dv + "/remove");
var k0;
typeof queueMicrotask == "function" &&
  queueMicrotask.bind(
    typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : globalThis
  );
KD();
var VE = { exports: {} },
  WE = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var aa = v.exports;
function V3(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var W3 = typeof Object.is == "function" ? Object.is : V3,
  K3 = aa.useState,
  q3 = aa.useEffect,
  G3 = aa.useLayoutEffect,
  Y3 = aa.useDebugValue;
function Q3(e, t) {
  var r = t(),
    n = K3({ inst: { value: r, getSnapshot: t } }),
    o = n[0].inst,
    i = n[1];
  return (
    G3(
      function () {
        (o.value = r), (o.getSnapshot = t), _d(o) && i({ inst: o });
      },
      [e, r, t]
    ),
    q3(
      function () {
        return (
          _d(o) && i({ inst: o }),
          e(function () {
            _d(o) && i({ inst: o });
          })
        );
      },
      [e]
    ),
    Y3(r),
    r
  );
}
function _d(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !W3(e, r);
  } catch {
    return !0;
  }
}
function X3(e, t) {
  return t();
}
var J3 =
  typeof window == "undefined" ||
  typeof window.document == "undefined" ||
  typeof window.document.createElement == "undefined"
    ? X3
    : Q3;
WE.useSyncExternalStore =
  aa.useSyncExternalStore !== void 0 ? aa.useSyncExternalStore : J3;
VE.exports = WE;
var KE = { exports: {} },
  qE = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tf = v.exports,
  Z3 = VE.exports;
function eF(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var tF = typeof Object.is == "function" ? Object.is : eF,
  rF = Z3.useSyncExternalStore,
  nF = tf.useRef,
  oF = tf.useEffect,
  iF = tf.useMemo,
  aF = tf.useDebugValue;
qE.useSyncExternalStoreWithSelector = function (e, t, r, n, o) {
  var i = nF(null);
  if (i.current === null) {
    var a = { hasValue: !1, value: null };
    i.current = a;
  } else a = i.current;
  i = iF(
    function () {
      function l(h) {
        if (!u) {
          if (((u = !0), (c = h), (h = n(h)), o !== void 0 && a.hasValue)) {
            var w = a.value;
            if (o(w, h)) return (d = w);
          }
          return (d = h);
        }
        if (((w = d), tF(c, h))) return w;
        var m = n(h);
        return o !== void 0 && o(w, m) ? w : ((c = h), (d = m));
      }
      var u = !1,
        c,
        d,
        p = r === void 0 ? null : r;
      return [
        function () {
          return l(t());
        },
        p === null
          ? void 0
          : function () {
              return l(p());
            },
      ];
    },
    [t, r, n, o]
  );
  var s = rF(e, i[0], i[1]);
  return (
    oF(
      function () {
        (a.hasValue = !0), (a.value = s);
      },
      [s]
    ),
    aF(s),
    s
  );
};
KE.exports = qE;
function sF(e) {
  e();
}
let GE = sF;
const lF = (e) => (GE = e),
  uF = () => GE,
  lo = v.exports.createContext(null);
function YE() {
  return v.exports.useContext(lo);
}
const cF = () => {
  throw new Error("uSES not initialized!");
};
let QE = cF;
const fF = (e) => {
    QE = e;
  },
  dF = (e, t) => e === t;
function pF(e = lo) {
  const t = e === lo ? YE : () => v.exports.useContext(e);
  return function (n, o = dF) {
    const { store: i, subscription: a, getServerState: s } = t(),
      l = QE(a.addNestedSub, i.getState, s || i.getState, n, o);
    return v.exports.useDebugValue(l), l;
  };
}
const hF = pF();
var XE = { exports: {} },
  Te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gt = typeof Symbol == "function" && Symbol.for,
  Fv = gt ? Symbol.for("react.element") : 60103,
  Lv = gt ? Symbol.for("react.portal") : 60106,
  rf = gt ? Symbol.for("react.fragment") : 60107,
  nf = gt ? Symbol.for("react.strict_mode") : 60108,
  of = gt ? Symbol.for("react.profiler") : 60114,
  af = gt ? Symbol.for("react.provider") : 60109,
  sf = gt ? Symbol.for("react.context") : 60110,
  Mv = gt ? Symbol.for("react.async_mode") : 60111,
  lf = gt ? Symbol.for("react.concurrent_mode") : 60111,
  uf = gt ? Symbol.for("react.forward_ref") : 60112,
  cf = gt ? Symbol.for("react.suspense") : 60113,
  mF = gt ? Symbol.for("react.suspense_list") : 60120,
  ff = gt ? Symbol.for("react.memo") : 60115,
  df = gt ? Symbol.for("react.lazy") : 60116,
  vF = gt ? Symbol.for("react.block") : 60121,
  gF = gt ? Symbol.for("react.fundamental") : 60117,
  yF = gt ? Symbol.for("react.responder") : 60118,
  wF = gt ? Symbol.for("react.scope") : 60119;
function dr(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Fv:
        switch (((e = e.type), e)) {
          case Mv:
          case lf:
          case rf:
          case of:
          case nf:
          case cf:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case sf:
              case uf:
              case df:
              case ff:
              case af:
                return e;
              default:
                return t;
            }
        }
      case Lv:
        return t;
    }
  }
}
function JE(e) {
  return dr(e) === lf;
}
Te.AsyncMode = Mv;
Te.ConcurrentMode = lf;
Te.ContextConsumer = sf;
Te.ContextProvider = af;
Te.Element = Fv;
Te.ForwardRef = uf;
Te.Fragment = rf;
Te.Lazy = df;
Te.Memo = ff;
Te.Portal = Lv;
Te.Profiler = of;
Te.StrictMode = nf;
Te.Suspense = cf;
Te.isAsyncMode = function (e) {
  return JE(e) || dr(e) === Mv;
};
Te.isConcurrentMode = JE;
Te.isContextConsumer = function (e) {
  return dr(e) === sf;
};
Te.isContextProvider = function (e) {
  return dr(e) === af;
};
Te.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Fv;
};
Te.isForwardRef = function (e) {
  return dr(e) === uf;
};
Te.isFragment = function (e) {
  return dr(e) === rf;
};
Te.isLazy = function (e) {
  return dr(e) === df;
};
Te.isMemo = function (e) {
  return dr(e) === ff;
};
Te.isPortal = function (e) {
  return dr(e) === Lv;
};
Te.isProfiler = function (e) {
  return dr(e) === of;
};
Te.isStrictMode = function (e) {
  return dr(e) === nf;
};
Te.isSuspense = function (e) {
  return dr(e) === cf;
};
Te.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === rf ||
    e === lf ||
    e === of ||
    e === nf ||
    e === cf ||
    e === mF ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === df ||
        e.$$typeof === ff ||
        e.$$typeof === af ||
        e.$$typeof === sf ||
        e.$$typeof === uf ||
        e.$$typeof === gF ||
        e.$$typeof === yF ||
        e.$$typeof === wF ||
        e.$$typeof === vF))
  );
};
Te.typeOf = dr;
XE.exports = Te;
var ZE = XE.exports,
  xF = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  bF = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  eC = {};
eC[ZE.ForwardRef] = xF;
eC[ZE.Memo] = bF;
var De = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Iv = Symbol.for("react.element"),
  jv = Symbol.for("react.portal"),
  pf = Symbol.for("react.fragment"),
  hf = Symbol.for("react.strict_mode"),
  mf = Symbol.for("react.profiler"),
  vf = Symbol.for("react.provider"),
  gf = Symbol.for("react.context"),
  SF = Symbol.for("react.server_context"),
  yf = Symbol.for("react.forward_ref"),
  wf = Symbol.for("react.suspense"),
  xf = Symbol.for("react.suspense_list"),
  bf = Symbol.for("react.memo"),
  Sf = Symbol.for("react.lazy"),
  EF = Symbol.for("react.offscreen"),
  tC;
tC = Symbol.for("react.module.reference");
function $r(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Iv:
        switch (((e = e.type), e)) {
          case pf:
          case mf:
          case hf:
          case wf:
          case xf:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case SF:
              case gf:
              case yf:
              case Sf:
              case bf:
              case vf:
                return e;
              default:
                return t;
            }
        }
      case jv:
        return t;
    }
  }
}
De.ContextConsumer = gf;
De.ContextProvider = vf;
De.Element = Iv;
De.ForwardRef = yf;
De.Fragment = pf;
De.Lazy = Sf;
De.Memo = bf;
De.Portal = jv;
De.Profiler = mf;
De.StrictMode = hf;
De.Suspense = wf;
De.SuspenseList = xf;
De.isAsyncMode = function () {
  return !1;
};
De.isConcurrentMode = function () {
  return !1;
};
De.isContextConsumer = function (e) {
  return $r(e) === gf;
};
De.isContextProvider = function (e) {
  return $r(e) === vf;
};
De.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Iv;
};
De.isForwardRef = function (e) {
  return $r(e) === yf;
};
De.isFragment = function (e) {
  return $r(e) === pf;
};
De.isLazy = function (e) {
  return $r(e) === Sf;
};
De.isMemo = function (e) {
  return $r(e) === bf;
};
De.isPortal = function (e) {
  return $r(e) === jv;
};
De.isProfiler = function (e) {
  return $r(e) === mf;
};
De.isStrictMode = function (e) {
  return $r(e) === hf;
};
De.isSuspense = function (e) {
  return $r(e) === wf;
};
De.isSuspenseList = function (e) {
  return $r(e) === xf;
};
De.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === pf ||
    e === mf ||
    e === hf ||
    e === wf ||
    e === xf ||
    e === EF ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Sf ||
        e.$$typeof === bf ||
        e.$$typeof === vf ||
        e.$$typeof === gf ||
        e.$$typeof === yf ||
        e.$$typeof === tC ||
        e.getModuleId !== void 0))
  );
};
De.typeOf = $r;
function CF() {
  const e = uF();
  let t = null,
    r = null;
  return {
    clear() {
      (t = null), (r = null);
    },
    notify() {
      e(() => {
        let n = t;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      let n = [],
        o = t;
      for (; o; ) n.push(o), (o = o.next);
      return n;
    },
    subscribe(n) {
      let o = !0,
        i = (r = { callback: n, next: null, prev: r });
      return (
        i.prev ? (i.prev.next = i) : (t = i),
        function () {
          !o ||
            t === null ||
            ((o = !1),
            i.next ? (i.next.prev = i.prev) : (r = i.prev),
            i.prev ? (i.prev.next = i.next) : (t = i.next));
        }
      );
    },
  };
}
const D0 = { notify() {}, get: () => [] };
function OF(e, t) {
  let r,
    n = D0;
  function o(d) {
    return l(), n.subscribe(d);
  }
  function i() {
    n.notify();
  }
  function a() {
    c.onStateChange && c.onStateChange();
  }
  function s() {
    return Boolean(r);
  }
  function l() {
    r || ((r = t ? t.addNestedSub(a) : e.subscribe(a)), (n = CF()));
  }
  function u() {
    r && (r(), (r = void 0), n.clear(), (n = D0));
  }
  const c = {
    addNestedSub: o,
    notifyNestedSubs: i,
    handleChangeWrapper: a,
    isSubscribed: s,
    trySubscribe: l,
    tryUnsubscribe: u,
    getListeners: () => n,
  };
  return c;
}
const _F =
    typeof window != "undefined" &&
    typeof window.document != "undefined" &&
    typeof window.document.createElement != "undefined",
  $F = _F ? v.exports.useLayoutEffect : v.exports.useEffect;
function PF({ store: e, context: t, children: r, serverState: n }) {
  const o = v.exports.useMemo(() => {
      const s = OF(e);
      return {
        store: e,
        subscription: s,
        getServerState: n ? () => n : void 0,
      };
    }, [e, n]),
    i = v.exports.useMemo(() => e.getState(), [e]);
  return (
    $F(() => {
      const { subscription: s } = o;
      return (
        (s.onStateChange = s.notifyNestedSubs),
        s.trySubscribe(),
        i !== e.getState() && s.notifyNestedSubs(),
        () => {
          s.tryUnsubscribe(), (s.onStateChange = void 0);
        }
      );
    }, [o, i]),
    f((t || lo).Provider, { value: o, children: r })
  );
}
function rC(e = lo) {
  const t = e === lo ? YE : () => v.exports.useContext(e);
  return function () {
    const { store: n } = t();
    return n;
  };
}
const NF = rC();
function TF(e = lo) {
  const t = e === lo ? NF : rC(e);
  return function () {
    return t().dispatch;
  };
}
const RF = TF();
fF(KE.exports.useSyncExternalStoreWithSelector);
lF(Sc.exports.unstable_batchedUpdates);
const AF = { cartItems: [], shippingAddress: null },
  nC = on({
    name: "cart-items",
    initialState: AF,
    reducers: {
      addToCart: (e, t) => {
        const r = t.payload;
        e.cartItems.find((o) => o._id == r._id)
          ? (e.cartItems = e.cartItems.map((o) =>
              o._id == r._id ? { ...r, qty: o.qty + 1 } : o
            ))
          : (e.cartItems = [...e.cartItems, { ...r, qty: 1 }]);
      },
      removeFromCart: (e, t) => {
        const r = t.payload,
          n = e.cartItems.find((o) => o._id == r._id);
        n && n.qty === 1
          ? (e.cartItems = e.cartItems.filter((o) => o._id !== r._id))
          : (e.cartItems = e.cartItems.map((o) =>
              o._id == r._id ? { ...r, qty: o.qty - 1 } : o
            ));
      },
      saveAddress: (e, t) => {
        e.shippingAddress = t.payload;
      },
      reset: (e) => {
        (e.cartItems = []), (e.shippingAddress = null);
      },
    },
  }),
  {
    addToCart: oC,
    removeFromCart: kF,
    saveAddress: DF,
    reset: Uv,
  } = nC.actions,
  ut = (e) =>
    (e.response && e.response.data && e.response.data.message) ||
    e.message ||
    e.toString();
var Bv = { exports: {} },
  iC = function (t, r) {
    return function () {
      for (var o = new Array(arguments.length), i = 0; i < o.length; i++)
        o[i] = arguments[i];
      return t.apply(r, o);
    };
  },
  FF = iC,
  zv = Object.prototype.toString,
  Hv = (function (e) {
    return function (t) {
      var r = zv.call(t);
      return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
    };
  })(Object.create(null));
function oi(e) {
  return (
    (e = e.toLowerCase()),
    function (r) {
      return Hv(r) === e;
    }
  );
}
function Vv(e) {
  return Array.isArray(e);
}
function dc(e) {
  return typeof e == "undefined";
}
function LF(e) {
  return (
    e !== null &&
    !dc(e) &&
    e.constructor !== null &&
    !dc(e.constructor) &&
    typeof e.constructor.isBuffer == "function" &&
    e.constructor.isBuffer(e)
  );
}
var aC = oi("ArrayBuffer");
function MF(e) {
  var t;
  return (
    typeof ArrayBuffer != "undefined" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && aC(e.buffer)),
    t
  );
}
function IF(e) {
  return typeof e == "string";
}
function jF(e) {
  return typeof e == "number";
}
function sC(e) {
  return e !== null && typeof e == "object";
}
function fu(e) {
  if (Hv(e) !== "object") return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
var UF = oi("Date"),
  BF = oi("File"),
  zF = oi("Blob"),
  HF = oi("FileList");
function Wv(e) {
  return zv.call(e) === "[object Function]";
}
function VF(e) {
  return sC(e) && Wv(e.pipe);
}
function WF(e) {
  var t = "[object FormData]";
  return (
    e &&
    ((typeof FormData == "function" && e instanceof FormData) ||
      zv.call(e) === t ||
      (Wv(e.toString) && e.toString() === t))
  );
}
var KF = oi("URLSearchParams");
function qF(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function GF() {
  return typeof navigator != "undefined" &&
    (navigator.product === "ReactNative" ||
      navigator.product === "NativeScript" ||
      navigator.product === "NS")
    ? !1
    : typeof window != "undefined" && typeof document != "undefined";
}
function Kv(e, t) {
  if (!(e === null || typeof e == "undefined"))
    if ((typeof e != "object" && (e = [e]), Vv(e)))
      for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
    else
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e);
}
function ah() {
  var e = {};
  function t(o, i) {
    fu(e[i]) && fu(o)
      ? (e[i] = ah(e[i], o))
      : fu(o)
      ? (e[i] = ah({}, o))
      : Vv(o)
      ? (e[i] = o.slice())
      : (e[i] = o);
  }
  for (var r = 0, n = arguments.length; r < n; r++) Kv(arguments[r], t);
  return e;
}
function YF(e, t, r) {
  return (
    Kv(t, function (o, i) {
      r && typeof o == "function" ? (e[i] = FF(o, r)) : (e[i] = o);
    }),
    e
  );
}
function QF(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function XF(e, t, r, n) {
  (e.prototype = Object.create(t.prototype, n)),
    (e.prototype.constructor = e),
    r && Object.assign(e.prototype, r);
}
function JF(e, t, r) {
  var n,
    o,
    i,
    a = {};
  t = t || {};
  do {
    for (n = Object.getOwnPropertyNames(e), o = n.length; o-- > 0; )
      (i = n[o]), a[i] || ((t[i] = e[i]), (a[i] = !0));
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}
function ZF(e, t, r) {
  (e = String(e)),
    (r === void 0 || r > e.length) && (r = e.length),
    (r -= t.length);
  var n = e.indexOf(t, r);
  return n !== -1 && n === r;
}
function eL(e) {
  if (!e) return null;
  var t = e.length;
  if (dc(t)) return null;
  for (var r = new Array(t); t-- > 0; ) r[t] = e[t];
  return r;
}
var tL = (function (e) {
    return function (t) {
      return e && t instanceof e;
    };
  })(typeof Uint8Array != "undefined" && Object.getPrototypeOf(Uint8Array)),
  Et = {
    isArray: Vv,
    isArrayBuffer: aC,
    isBuffer: LF,
    isFormData: WF,
    isArrayBufferView: MF,
    isString: IF,
    isNumber: jF,
    isObject: sC,
    isPlainObject: fu,
    isUndefined: dc,
    isDate: UF,
    isFile: BF,
    isBlob: zF,
    isFunction: Wv,
    isStream: VF,
    isURLSearchParams: KF,
    isStandardBrowserEnv: GF,
    forEach: Kv,
    merge: ah,
    extend: YF,
    trim: qF,
    stripBOM: QF,
    inherits: XF,
    toFlatObject: JF,
    kindOf: Hv,
    kindOfTest: oi,
    endsWith: ZF,
    toArray: eL,
    isTypedArray: tL,
    isFileList: HF,
  },
  fi = Et;
function F0(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
var lC = function (t, r, n) {
    if (!r) return t;
    var o;
    if (n) o = n(r);
    else if (fi.isURLSearchParams(r)) o = r.toString();
    else {
      var i = [];
      fi.forEach(r, function (l, u) {
        l === null ||
          typeof l == "undefined" ||
          (fi.isArray(l) ? (u = u + "[]") : (l = [l]),
          fi.forEach(l, function (d) {
            fi.isDate(d)
              ? (d = d.toISOString())
              : fi.isObject(d) && (d = JSON.stringify(d)),
              i.push(F0(u) + "=" + F0(d));
          }));
      }),
        (o = i.join("&"));
    }
    if (o) {
      var a = t.indexOf("#");
      a !== -1 && (t = t.slice(0, a)),
        (t += (t.indexOf("?") === -1 ? "?" : "&") + o);
    }
    return t;
  },
  rL = Et;
function Ef() {
  this.handlers = [];
}
Ef.prototype.use = function (t, r, n) {
  return (
    this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null,
    }),
    this.handlers.length - 1
  );
};
Ef.prototype.eject = function (t) {
  this.handlers[t] && (this.handlers[t] = null);
};
Ef.prototype.forEach = function (t) {
  rL.forEach(this.handlers, function (n) {
    n !== null && t(n);
  });
};
var nL = Ef,
  oL = Et,
  iL = function (t, r) {
    oL.forEach(t, function (o, i) {
      i !== r &&
        i.toUpperCase() === r.toUpperCase() &&
        ((t[r] = o), delete t[i]);
    });
  },
  uC = Et;
function sa(e, t, r, n, o) {
  Error.call(this),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    r && (this.config = r),
    n && (this.request = n),
    o && (this.response = o);
}
uC.inherits(sa, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
var cC = sa.prototype,
  fC = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
].forEach(function (e) {
  fC[e] = { value: e };
});
Object.defineProperties(sa, fC);
Object.defineProperty(cC, "isAxiosError", { value: !0 });
sa.from = function (e, t, r, n, o, i) {
  var a = Object.create(cC);
  return (
    uC.toFlatObject(e, a, function (l) {
      return l !== Error.prototype;
    }),
    sa.call(a, e.message, t, r, n, o),
    (a.name = e.name),
    i && Object.assign(a, i),
    a
  );
};
var wa = sa,
  dC = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Nr = Et;
function aL(e, t) {
  t = t || new FormData();
  var r = [];
  function n(i) {
    return i === null
      ? ""
      : Nr.isDate(i)
      ? i.toISOString()
      : Nr.isArrayBuffer(i) || Nr.isTypedArray(i)
      ? typeof Blob == "function"
        ? new Blob([i])
        : Buffer.from(i)
      : i;
  }
  function o(i, a) {
    if (Nr.isPlainObject(i) || Nr.isArray(i)) {
      if (r.indexOf(i) !== -1)
        throw Error("Circular reference detected in " + a);
      r.push(i),
        Nr.forEach(i, function (l, u) {
          if (!Nr.isUndefined(l)) {
            var c = a ? a + "." + u : u,
              d;
            if (l && !a && typeof l == "object") {
              if (Nr.endsWith(u, "{}")) l = JSON.stringify(l);
              else if (Nr.endsWith(u, "[]") && (d = Nr.toArray(l))) {
                d.forEach(function (p) {
                  !Nr.isUndefined(p) && t.append(c, n(p));
                });
                return;
              }
            }
            o(l, c);
          }
        }),
        r.pop();
    } else t.append(a, n(i));
  }
  return o(e), t;
}
var pC = aL,
  $d = wa,
  sL = function (t, r, n) {
    var o = n.config.validateStatus;
    !n.status || !o || o(n.status)
      ? t(n)
      : r(
          new $d(
            "Request failed with status code " + n.status,
            [$d.ERR_BAD_REQUEST, $d.ERR_BAD_RESPONSE][
              Math.floor(n.status / 100) - 4
            ],
            n.config,
            n.request,
            n
          )
        );
  },
  Hl = Et,
  lL = Hl.isStandardBrowserEnv()
    ? (function () {
        return {
          write: function (r, n, o, i, a, s) {
            var l = [];
            l.push(r + "=" + encodeURIComponent(n)),
              Hl.isNumber(o) && l.push("expires=" + new Date(o).toGMTString()),
              Hl.isString(i) && l.push("path=" + i),
              Hl.isString(a) && l.push("domain=" + a),
              s === !0 && l.push("secure"),
              (document.cookie = l.join("; "));
          },
          read: function (r) {
            var n = document.cookie.match(
              new RegExp("(^|;\\s*)(" + r + ")=([^;]*)")
            );
            return n ? decodeURIComponent(n[3]) : null;
          },
          remove: function (r) {
            this.write(r, "", Date.now() - 864e5);
          },
        };
      })()
    : (function () {
        return {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
      })(),
  uL = function (t) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
  },
  cL = function (t, r) {
    return r ? t.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : t;
  },
  fL = uL,
  dL = cL,
  hC = function (t, r) {
    return t && !fL(r) ? dL(t, r) : r;
  },
  Pd = Et,
  pL = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ],
  hL = function (t) {
    var r = {},
      n,
      o,
      i;
    return (
      t &&
        Pd.forEach(
          t.split(`
`),
          function (s) {
            if (
              ((i = s.indexOf(":")),
              (n = Pd.trim(s.substr(0, i)).toLowerCase()),
              (o = Pd.trim(s.substr(i + 1))),
              n)
            ) {
              if (r[n] && pL.indexOf(n) >= 0) return;
              n === "set-cookie"
                ? (r[n] = (r[n] ? r[n] : []).concat([o]))
                : (r[n] = r[n] ? r[n] + ", " + o : o);
            }
          }
        ),
      r
    );
  },
  L0 = Et,
  mL = L0.isStandardBrowserEnv()
    ? (function () {
        var t = /(msie|trident)/i.test(navigator.userAgent),
          r = document.createElement("a"),
          n;
        function o(i) {
          var a = i;
          return (
            t && (r.setAttribute("href", a), (a = r.href)),
            r.setAttribute("href", a),
            {
              href: r.href,
              protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
              host: r.host,
              search: r.search ? r.search.replace(/^\?/, "") : "",
              hash: r.hash ? r.hash.replace(/^#/, "") : "",
              hostname: r.hostname,
              port: r.port,
              pathname:
                r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname,
            }
          );
        }
        return (
          (n = o(window.location.href)),
          function (a) {
            var s = L0.isString(a) ? o(a) : a;
            return s.protocol === n.protocol && s.host === n.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  sh = wa,
  vL = Et;
function mC(e) {
  sh.call(this, e == null ? "canceled" : e, sh.ERR_CANCELED),
    (this.name = "CanceledError");
}
vL.inherits(mC, sh, { __CANCEL__: !0 });
var Cf = mC,
  gL = function (t) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return (r && r[1]) || "";
  },
  za = Et,
  yL = sL,
  wL = lL,
  xL = lC,
  bL = hC,
  SL = hL,
  EL = mL,
  CL = dC,
  ln = wa,
  OL = Cf,
  _L = gL,
  M0 = function (t) {
    return new Promise(function (n, o) {
      var i = t.data,
        a = t.headers,
        s = t.responseType,
        l;
      function u() {
        t.cancelToken && t.cancelToken.unsubscribe(l),
          t.signal && t.signal.removeEventListener("abort", l);
      }
      za.isFormData(i) && za.isStandardBrowserEnv() && delete a["Content-Type"];
      var c = new XMLHttpRequest();
      if (t.auth) {
        var d = t.auth.username || "",
          p = t.auth.password
            ? unescape(encodeURIComponent(t.auth.password))
            : "";
        a.Authorization = "Basic " + btoa(d + ":" + p);
      }
      var h = bL(t.baseURL, t.url);
      c.open(t.method.toUpperCase(), xL(h, t.params, t.paramsSerializer), !0),
        (c.timeout = t.timeout);
      function w() {
        if (!!c) {
          var y =
              "getAllResponseHeaders" in c
                ? SL(c.getAllResponseHeaders())
                : null,
            g =
              !s || s === "text" || s === "json" ? c.responseText : c.response,
            x = {
              data: g,
              status: c.status,
              statusText: c.statusText,
              headers: y,
              config: t,
              request: c,
            };
          yL(
            function (C) {
              n(C), u();
            },
            function (C) {
              o(C), u();
            },
            x
          ),
            (c = null);
        }
      }
      if (
        ("onloadend" in c
          ? (c.onloadend = w)
          : (c.onreadystatechange = function () {
              !c ||
                c.readyState !== 4 ||
                (c.status === 0 &&
                  !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                setTimeout(w);
            }),
        (c.onabort = function () {
          !c ||
            (o(new ln("Request aborted", ln.ECONNABORTED, t, c)), (c = null));
        }),
        (c.onerror = function () {
          o(new ln("Network Error", ln.ERR_NETWORK, t, c, c)), (c = null);
        }),
        (c.ontimeout = function () {
          var g = t.timeout
              ? "timeout of " + t.timeout + "ms exceeded"
              : "timeout exceeded",
            x = t.transitional || CL;
          t.timeoutErrorMessage && (g = t.timeoutErrorMessage),
            o(
              new ln(
                g,
                x.clarifyTimeoutError ? ln.ETIMEDOUT : ln.ECONNABORTED,
                t,
                c
              )
            ),
            (c = null);
        }),
        za.isStandardBrowserEnv())
      ) {
        var m =
          (t.withCredentials || EL(h)) && t.xsrfCookieName
            ? wL.read(t.xsrfCookieName)
            : void 0;
        m && (a[t.xsrfHeaderName] = m);
      }
      "setRequestHeader" in c &&
        za.forEach(a, function (g, x) {
          typeof i == "undefined" && x.toLowerCase() === "content-type"
            ? delete a[x]
            : c.setRequestHeader(x, g);
        }),
        za.isUndefined(t.withCredentials) ||
          (c.withCredentials = !!t.withCredentials),
        s && s !== "json" && (c.responseType = t.responseType),
        typeof t.onDownloadProgress == "function" &&
          c.addEventListener("progress", t.onDownloadProgress),
        typeof t.onUploadProgress == "function" &&
          c.upload &&
          c.upload.addEventListener("progress", t.onUploadProgress),
        (t.cancelToken || t.signal) &&
          ((l = function (y) {
            !c ||
              (o(!y || (y && y.type) ? new OL() : y), c.abort(), (c = null));
          }),
          t.cancelToken && t.cancelToken.subscribe(l),
          t.signal &&
            (t.signal.aborted ? l() : t.signal.addEventListener("abort", l))),
        i || (i = null);
      var b = _L(h);
      if (b && ["http", "https", "file"].indexOf(b) === -1) {
        o(new ln("Unsupported protocol " + b + ":", ln.ERR_BAD_REQUEST, t));
        return;
      }
      c.send(i);
    });
  },
  $L = null,
  ct = Et,
  I0 = iL,
  j0 = wa,
  PL = dC,
  NL = pC,
  TL = { "Content-Type": "application/x-www-form-urlencoded" };
function U0(e, t) {
  !ct.isUndefined(e) &&
    ct.isUndefined(e["Content-Type"]) &&
    (e["Content-Type"] = t);
}
function RL() {
  var e;
  return (
    (typeof XMLHttpRequest != "undefined" ||
      (typeof process != "undefined" &&
        Object.prototype.toString.call(process) === "[object process]")) &&
      (e = M0),
    e
  );
}
function AL(e, t, r) {
  if (ct.isString(e))
    try {
      return (t || JSON.parse)(e), ct.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError") throw n;
    }
  return (r || JSON.stringify)(e);
}
var Of = {
  transitional: PL,
  adapter: RL(),
  transformRequest: [
    function (t, r) {
      if (
        (I0(r, "Accept"),
        I0(r, "Content-Type"),
        ct.isFormData(t) ||
          ct.isArrayBuffer(t) ||
          ct.isBuffer(t) ||
          ct.isStream(t) ||
          ct.isFile(t) ||
          ct.isBlob(t))
      )
        return t;
      if (ct.isArrayBufferView(t)) return t.buffer;
      if (ct.isURLSearchParams(t))
        return (
          U0(r, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()
        );
      var n = ct.isObject(t),
        o = r && r["Content-Type"],
        i;
      if ((i = ct.isFileList(t)) || (n && o === "multipart/form-data")) {
        var a = this.env && this.env.FormData;
        return NL(i ? { "files[]": t } : t, a && new a());
      } else if (n || o === "application/json")
        return U0(r, "application/json"), AL(t);
      return t;
    },
  ],
  transformResponse: [
    function (t) {
      var r = this.transitional || Of.transitional,
        n = r && r.silentJSONParsing,
        o = r && r.forcedJSONParsing,
        i = !n && this.responseType === "json";
      if (i || (o && ct.isString(t) && t.length))
        try {
          return JSON.parse(t);
        } catch (a) {
          if (i)
            throw a.name === "SyntaxError"
              ? j0.from(a, j0.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: $L },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
ct.forEach(["delete", "get", "head"], function (t) {
  Of.headers[t] = {};
});
ct.forEach(["post", "put", "patch"], function (t) {
  Of.headers[t] = ct.merge(TL);
});
var qv = Of,
  kL = Et,
  DL = qv,
  FL = function (t, r, n) {
    var o = this || DL;
    return (
      kL.forEach(n, function (a) {
        t = a.call(o, t, r);
      }),
      t
    );
  },
  vC = function (t) {
    return !!(t && t.__CANCEL__);
  },
  B0 = Et,
  Nd = FL,
  LL = vC,
  ML = qv,
  IL = Cf;
function Td(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new IL();
}
var jL = function (t) {
    Td(t),
      (t.headers = t.headers || {}),
      (t.data = Nd.call(t, t.data, t.headers, t.transformRequest)),
      (t.headers = B0.merge(
        t.headers.common || {},
        t.headers[t.method] || {},
        t.headers
      )),
      B0.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function (o) {
          delete t.headers[o];
        }
      );
    var r = t.adapter || ML.adapter;
    return r(t).then(
      function (o) {
        return (
          Td(t),
          (o.data = Nd.call(t, o.data, o.headers, t.transformResponse)),
          o
        );
      },
      function (o) {
        return (
          LL(o) ||
            (Td(t),
            o &&
              o.response &&
              (o.response.data = Nd.call(
                t,
                o.response.data,
                o.response.headers,
                t.transformResponse
              ))),
          Promise.reject(o)
        );
      }
    );
  },
  tr = Et,
  gC = function (t, r) {
    r = r || {};
    var n = {};
    function o(c, d) {
      return tr.isPlainObject(c) && tr.isPlainObject(d)
        ? tr.merge(c, d)
        : tr.isPlainObject(d)
        ? tr.merge({}, d)
        : tr.isArray(d)
        ? d.slice()
        : d;
    }
    function i(c) {
      if (tr.isUndefined(r[c])) {
        if (!tr.isUndefined(t[c])) return o(void 0, t[c]);
      } else return o(t[c], r[c]);
    }
    function a(c) {
      if (!tr.isUndefined(r[c])) return o(void 0, r[c]);
    }
    function s(c) {
      if (tr.isUndefined(r[c])) {
        if (!tr.isUndefined(t[c])) return o(void 0, t[c]);
      } else return o(void 0, r[c]);
    }
    function l(c) {
      if (c in r) return o(t[c], r[c]);
      if (c in t) return o(void 0, t[c]);
    }
    var u = {
      url: a,
      method: a,
      data: a,
      baseURL: s,
      transformRequest: s,
      transformResponse: s,
      paramsSerializer: s,
      timeout: s,
      timeoutMessage: s,
      withCredentials: s,
      adapter: s,
      responseType: s,
      xsrfCookieName: s,
      xsrfHeaderName: s,
      onUploadProgress: s,
      onDownloadProgress: s,
      decompress: s,
      maxContentLength: s,
      maxBodyLength: s,
      beforeRedirect: s,
      transport: s,
      httpAgent: s,
      httpsAgent: s,
      cancelToken: s,
      socketPath: s,
      responseEncoding: s,
      validateStatus: l,
    };
    return (
      tr.forEach(Object.keys(t).concat(Object.keys(r)), function (d) {
        var p = u[d] || i,
          h = p(d);
        (tr.isUndefined(h) && p !== l) || (n[d] = h);
      }),
      n
    );
  },
  yC = { version: "0.27.2" },
  UL = yC.version,
  Bn = wa,
  Gv = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  function (e, t) {
    Gv[e] = function (n) {
      return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
var z0 = {};
Gv.transitional = function (t, r, n) {
  function o(i, a) {
    return (
      "[Axios v" +
      UL +
      "] Transitional option '" +
      i +
      "'" +
      a +
      (n ? ". " + n : "")
    );
  }
  return function (i, a, s) {
    if (t === !1)
      throw new Bn(
        o(a, " has been removed" + (r ? " in " + r : "")),
        Bn.ERR_DEPRECATED
      );
    return (
      r &&
        !z0[a] &&
        ((z0[a] = !0),
        console.warn(
          o(
            a,
            " has been deprecated since v" +
              r +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, a, s) : !0
    );
  };
};
function BL(e, t, r) {
  if (typeof e != "object")
    throw new Bn("options must be an object", Bn.ERR_BAD_OPTION_VALUE);
  for (var n = Object.keys(e), o = n.length; o-- > 0; ) {
    var i = n[o],
      a = t[i];
    if (a) {
      var s = e[i],
        l = s === void 0 || a(s, i, e);
      if (l !== !0)
        throw new Bn("option " + i + " must be " + l, Bn.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new Bn("Unknown option " + i, Bn.ERR_BAD_OPTION);
  }
}
var zL = { assertOptions: BL, validators: Gv },
  wC = Et,
  HL = lC,
  H0 = nL,
  V0 = jL,
  _f = gC,
  VL = hC,
  xC = zL,
  di = xC.validators;
function la(e) {
  (this.defaults = e),
    (this.interceptors = { request: new H0(), response: new H0() });
}
la.prototype.request = function (t, r) {
  typeof t == "string" ? ((r = r || {}), (r.url = t)) : (r = t || {}),
    (r = _f(this.defaults, r)),
    r.method
      ? (r.method = r.method.toLowerCase())
      : this.defaults.method
      ? (r.method = this.defaults.method.toLowerCase())
      : (r.method = "get");
  var n = r.transitional;
  n !== void 0 &&
    xC.assertOptions(
      n,
      {
        silentJSONParsing: di.transitional(di.boolean),
        forcedJSONParsing: di.transitional(di.boolean),
        clarifyTimeoutError: di.transitional(di.boolean),
      },
      !1
    );
  var o = [],
    i = !0;
  this.interceptors.request.forEach(function (h) {
    (typeof h.runWhen == "function" && h.runWhen(r) === !1) ||
      ((i = i && h.synchronous), o.unshift(h.fulfilled, h.rejected));
  });
  var a = [];
  this.interceptors.response.forEach(function (h) {
    a.push(h.fulfilled, h.rejected);
  });
  var s;
  if (!i) {
    var l = [V0, void 0];
    for (
      Array.prototype.unshift.apply(l, o),
        l = l.concat(a),
        s = Promise.resolve(r);
      l.length;

    )
      s = s.then(l.shift(), l.shift());
    return s;
  }
  for (var u = r; o.length; ) {
    var c = o.shift(),
      d = o.shift();
    try {
      u = c(u);
    } catch (p) {
      d(p);
      break;
    }
  }
  try {
    s = V0(u);
  } catch (p) {
    return Promise.reject(p);
  }
  for (; a.length; ) s = s.then(a.shift(), a.shift());
  return s;
};
la.prototype.getUri = function (t) {
  t = _f(this.defaults, t);
  var r = VL(t.baseURL, t.url);
  return HL(r, t.params, t.paramsSerializer);
};
wC.forEach(["delete", "get", "head", "options"], function (t) {
  la.prototype[t] = function (r, n) {
    return this.request(
      _f(n || {}, { method: t, url: r, data: (n || {}).data })
    );
  };
});
wC.forEach(["post", "put", "patch"], function (t) {
  function r(n) {
    return function (i, a, s) {
      return this.request(
        _f(s || {}, {
          method: t,
          headers: n ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: a,
        })
      );
    };
  }
  (la.prototype[t] = r()), (la.prototype[t + "Form"] = r(!0));
});
var WL = la,
  KL = Cf;
function ua(e) {
  if (typeof e != "function")
    throw new TypeError("executor must be a function.");
  var t;
  this.promise = new Promise(function (o) {
    t = o;
  });
  var r = this;
  this.promise.then(function (n) {
    if (!!r._listeners) {
      var o,
        i = r._listeners.length;
      for (o = 0; o < i; o++) r._listeners[o](n);
      r._listeners = null;
    }
  }),
    (this.promise.then = function (n) {
      var o,
        i = new Promise(function (a) {
          r.subscribe(a), (o = a);
        }).then(n);
      return (
        (i.cancel = function () {
          r.unsubscribe(o);
        }),
        i
      );
    }),
    e(function (o) {
      r.reason || ((r.reason = new KL(o)), t(r.reason));
    });
}
ua.prototype.throwIfRequested = function () {
  if (this.reason) throw this.reason;
};
ua.prototype.subscribe = function (t) {
  if (this.reason) {
    t(this.reason);
    return;
  }
  this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
};
ua.prototype.unsubscribe = function (t) {
  if (!!this._listeners) {
    var r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
};
ua.source = function () {
  var t,
    r = new ua(function (o) {
      t = o;
    });
  return { token: r, cancel: t };
};
var qL = ua,
  GL = function (t) {
    return function (n) {
      return t.apply(null, n);
    };
  },
  YL = Et,
  QL = function (t) {
    return YL.isObject(t) && t.isAxiosError === !0;
  },
  W0 = Et,
  XL = iC,
  du = WL,
  JL = gC,
  ZL = qv;
function bC(e) {
  var t = new du(e),
    r = XL(du.prototype.request, t);
  return (
    W0.extend(r, du.prototype, t),
    W0.extend(r, t),
    (r.create = function (o) {
      return bC(JL(e, o));
    }),
    r
  );
}
var Zt = bC(ZL);
Zt.Axios = du;
Zt.CanceledError = Cf;
Zt.CancelToken = qL;
Zt.isCancel = vC;
Zt.VERSION = yC.version;
Zt.toFormData = pC;
Zt.AxiosError = wa;
Zt.Cancel = Zt.CanceledError;
Zt.all = function (t) {
  return Promise.all(t);
};
Zt.spread = GL;
Zt.isAxiosError = QL;
Bv.exports = Zt;
Bv.exports.default = Zt;
var SC = Bv.exports;
const eM = new Intl.NumberFormat(void 0, {
    currency: "USD",
    style: "currency",
  }),
  st = (e) => eM.format(e),
  ul = (e) => new Date(e).toLocaleDateString("en"),
  Yv =
    {}.VITE_MODE === "development"
      ? "http://localhost:5000"
      : "https://Frame Shop-server.onrender.com",
  xa = SC.create({ baseURL: `${Yv}/api` }),
  tM = [],
  rM = { products: tM, loading: !1, error: null },
  pu = Rn("products/list", async () => {
    try {
      const { data: e } = await xa.get("/products");
      return e;
    } catch (e) {
      const t = ut(e);
      ge.error(t);
    }
  }),
  nM = on({
    name: "products-list",
    initialState: rM,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(pu.pending, (t) => {
        t.loading = !0;
      }),
        e.addCase(pu.fulfilled, (t, r) => {
          (t.loading = !1), (t.products = r.payload);
        }),
        e.addCase(pu.rejected, (t) => {
          t.loading = !1;
        });
    },
  });
var Qv = {},
  Xv = {};
Xv.__esModule = !0;
Xv.default = aM;
function hu(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (hu = function (r) {
          return typeof r;
        })
      : (hu = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    hu(e)
  );
}
function Rd() {}
var oM = { getItem: Rd, setItem: Rd, removeItem: Rd };
function iM(e) {
  if (
    (typeof self == "undefined" ? "undefined" : hu(self)) !== "object" ||
    !(e in self)
  )
    return !1;
  try {
    var t = self[e],
      r = "redux-persist ".concat(e, " test");
    t.setItem(r, "test"), t.getItem(r), t.removeItem(r);
  } catch {
    return !1;
  }
  return !0;
}
function aM(e) {
  var t = "".concat(e, "Storage");
  return iM(t) ? self[t] : oM;
}
Qv.__esModule = !0;
Qv.default = uM;
var sM = lM(Xv);
function lM(e) {
  return e && e.__esModule ? e : { default: e };
}
function uM(e) {
  var t = (0, sM.default)(e);
  return {
    getItem: function (n) {
      return new Promise(function (o, i) {
        o(t.getItem(n));
      });
    },
    setItem: function (n, o) {
      return new Promise(function (i, a) {
        i(t.setItem(n, o));
      });
    },
    removeItem: function (n) {
      return new Promise(function (o, i) {
        o(t.removeItem(n));
      });
    },
  };
}
var EC = void 0,
  cM = fM(Qv);
function fM(e) {
  return e && e.__esModule ? e : { default: e };
}
var dM = (0, cM.default)("local");
EC = dM;
var Jv = "persist:",
  CC = "persist/FLUSH",
  Zv = "persist/REHYDRATE",
  OC = "persist/PAUSE",
  _C = "persist/PERSIST",
  $C = "persist/PURGE",
  PC = "persist/REGISTER",
  pM = -1;
function mu(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (mu = function (r) {
          return typeof r;
        })
      : (mu = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    mu(e)
  );
}
function K0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function hM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? K0(r, !0).forEach(function (n) {
          mM(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : K0(r).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function mM(e, t, r) {
  return (
    t in e
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
function vM(e, t, r, n) {
  n.debug;
  var o = hM({}, r);
  return (
    e &&
      mu(e) === "object" &&
      Object.keys(e).forEach(function (i) {
        i !== "_persist" && t[i] === r[i] && (o[i] = e[i]);
      }),
    o
  );
}
function gM(e) {
  var t = e.blacklist || null,
    r = e.whitelist || null,
    n = e.transforms || [],
    o = e.throttle || 0,
    i = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : Jv).concat(e.key),
    a = e.storage,
    s;
  e.serialize === !1
    ? (s = function (C) {
        return C;
      })
    : typeof e.serialize == "function"
    ? (s = e.serialize)
    : (s = yM);
  var l = e.writeFailHandler || null,
    u = {},
    c = {},
    d = [],
    p = null,
    h = null,
    w = function (C) {
      Object.keys(C).forEach(function ($) {
        !y($) || (u[$] !== C[$] && d.indexOf($) === -1 && d.push($));
      }),
        Object.keys(u).forEach(function ($) {
          C[$] === void 0 &&
            y($) &&
            d.indexOf($) === -1 &&
            u[$] !== void 0 &&
            d.push($);
        }),
        p === null && (p = setInterval(m, o)),
        (u = C);
    };
  function m() {
    if (d.length === 0) {
      p && clearInterval(p), (p = null);
      return;
    }
    var S = d.shift(),
      C = n.reduce(function ($, P) {
        return P.in($, S, u);
      }, u[S]);
    if (C !== void 0)
      try {
        c[S] = s(C);
      } catch ($) {
        console.error(
          "redux-persist/createPersistoid: error serializing state",
          $
        );
      }
    else delete c[S];
    d.length === 0 && b();
  }
  function b() {
    Object.keys(c).forEach(function (S) {
      u[S] === void 0 && delete c[S];
    }),
      (h = a.setItem(i, s(c)).catch(g));
  }
  function y(S) {
    return !(
      (r && r.indexOf(S) === -1 && S !== "_persist") ||
      (t && t.indexOf(S) !== -1)
    );
  }
  function g(S) {
    l && l(S);
  }
  var x = function () {
    for (; d.length !== 0; ) m();
    return h || Promise.resolve();
  };
  return { update: w, flush: x };
}
function yM(e) {
  return JSON.stringify(e);
}
function wM(e) {
  var t = e.transforms || [],
    r = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : Jv).concat(e.key),
    n = e.storage;
  e.debug;
  var o;
  return (
    e.deserialize === !1
      ? (o = function (a) {
          return a;
        })
      : typeof e.deserialize == "function"
      ? (o = e.deserialize)
      : (o = xM),
    n.getItem(r).then(function (i) {
      if (i)
        try {
          var a = {},
            s = o(i);
          return (
            Object.keys(s).forEach(function (l) {
              a[l] = t.reduceRight(function (u, c) {
                return c.out(u, l, s);
              }, o(s[l]));
            }),
            a
          );
        } catch (l) {
          throw l;
        }
      else return;
    })
  );
}
function xM(e) {
  return JSON.parse(e);
}
function bM(e) {
  var t = e.storage,
    r = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : Jv).concat(e.key);
  return t.removeItem(r, SM);
}
function SM(e) {}
function q0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function un(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? q0(r, !0).forEach(function (n) {
          EM(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : q0(r).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function EM(e, t, r) {
  return (
    t in e
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
function CM(e, t) {
  if (e == null) return {};
  var r = OM(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function OM(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var _M = 5e3;
function $M(e, t) {
  var r = e.version !== void 0 ? e.version : pM;
  e.debug;
  var n = e.stateReconciler === void 0 ? vM : e.stateReconciler,
    o = e.getStoredState || wM,
    i = e.timeout !== void 0 ? e.timeout : _M,
    a = null,
    s = !1,
    l = !0,
    u = function (d) {
      return d._persist.rehydrated && a && !l && a.update(d), d;
    };
  return function (c, d) {
    var p = c || {},
      h = p._persist,
      w = CM(p, ["_persist"]),
      m = w;
    if (d.type === _C) {
      var b = !1,
        y = function (R, M) {
          b || (d.rehydrate(e.key, R, M), (b = !0));
        };
      if (
        (i &&
          setTimeout(function () {
            !b &&
              y(
                void 0,
                new Error(
                  'redux-persist: persist timed out for persist key "'.concat(
                    e.key,
                    '"'
                  )
                )
              );
          }, i),
        (l = !1),
        a || (a = gM(e)),
        h)
      )
        return un({}, t(m, d), { _persist: h });
      if (typeof d.rehydrate != "function" || typeof d.register != "function")
        throw new Error(
          "redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution."
        );
      return (
        d.register(e.key),
        o(e).then(
          function (P) {
            var R =
              e.migrate ||
              function (M, L) {
                return Promise.resolve(M);
              };
            R(P, r).then(
              function (M) {
                y(M);
              },
              function (M) {
                y(void 0, M);
              }
            );
          },
          function (P) {
            y(void 0, P);
          }
        ),
        un({}, t(m, d), { _persist: { version: r, rehydrated: !1 } })
      );
    } else {
      if (d.type === $C)
        return (s = !0), d.result(bM(e)), un({}, t(m, d), { _persist: h });
      if (d.type === CC)
        return d.result(a && a.flush()), un({}, t(m, d), { _persist: h });
      if (d.type === OC) l = !0;
      else if (d.type === Zv) {
        if (s) return un({}, m, { _persist: un({}, h, { rehydrated: !0 }) });
        if (d.key === e.key) {
          var g = t(m, d),
            x = d.payload,
            S = n !== !1 && x !== void 0 ? n(x, c, g, e) : g,
            C = un({}, S, { _persist: un({}, h, { rehydrated: !0 }) });
          return u(C);
        }
      }
    }
    if (!h) return t(c, d);
    var $ = t(m, d);
    return $ === m ? c : u(un({}, $, { _persist: h }));
  };
}
function G0(e) {
  return TM(e) || NM(e) || PM();
}
function PM() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function NM(e) {
  if (
    Symbol.iterator in Object(e) ||
    Object.prototype.toString.call(e) === "[object Arguments]"
  )
    return Array.from(e);
}
function TM(e) {
  if (Array.isArray(e)) {
    for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
    return r;
  }
}
function Y0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function lh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Y0(r, !0).forEach(function (n) {
          RM(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Y0(r).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function RM(e, t, r) {
  return (
    t in e
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
var NC = { registry: [], bootstrapped: !1 },
  AM = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : NC,
      r = arguments.length > 1 ? arguments[1] : void 0;
    switch (r.type) {
      case PC:
        return lh({}, t, { registry: [].concat(G0(t.registry), [r.key]) });
      case Zv:
        var n = t.registry.indexOf(r.key),
          o = G0(t.registry);
        return (
          o.splice(n, 1),
          lh({}, t, { registry: o, bootstrapped: o.length === 0 })
        );
      default:
        return t;
    }
  };
function kM(e, t, r) {
  var n = r || !1,
    o = kv(AM, NC, t && t.enhancer ? t.enhancer : void 0),
    i = function (u) {
      o.dispatch({ type: PC, key: u });
    },
    a = function (u, c, d) {
      var p = { type: Zv, payload: c, err: d, key: u };
      e.dispatch(p),
        o.dispatch(p),
        n && s.getState().bootstrapped && (n(), (n = !1));
    },
    s = lh({}, o, {
      purge: function () {
        var u = [];
        return (
          e.dispatch({
            type: $C,
            result: function (d) {
              u.push(d);
            },
          }),
          Promise.all(u)
        );
      },
      flush: function () {
        var u = [];
        return (
          e.dispatch({
            type: CC,
            result: function (d) {
              u.push(d);
            },
          }),
          Promise.all(u)
        );
      },
      pause: function () {
        e.dispatch({ type: OC });
      },
      persist: function () {
        e.dispatch({ type: _C, register: i, rehydrate: a });
      },
    });
  return (t && t.manualPersist) || s.persist(), s;
}
const mt = SC.create({ baseURL: `${Yv}/api` }),
  DM = (e) => {
    mt.interceptors.request.use((t) => {
      const r = e.getState().login.userInfo.token;
      return (t.headers.Authorization = `Bearer ${r}`), t;
    });
  },
  FM = { orders: [], loading: !1, error: null, totalPrice: 0 },
  ms = Rn("orders/list", async () => {
    try {
      const { data: e } = await mt.get("/orders");
      return e;
    } catch (e) {
      const t = ut(e);
      ge.error(t);
    }
  });
M3({ selectId: (e) => e.orders.reduce((t, r) => t + r.totalPrice, 0) });
const LM = on({
    name: "orders-list",
    initialState: FM,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(ms.pending, (t) => {
        t.loading = !0;
      }),
        e.addCase(ms.fulfilled, (t, r) => {
          (t.loading = !1), (t.orders = r.payload);
        }),
        e.addCase(ms.rejected, (t) => {
          t.loading = !1;
        });
    },
  }),
  MM = { product: null, loading: !1, error: null },
  vu = Rn("products/details", async (e) => {
    try {
      const t = await xa.get(`/products/${e}`);
      if (t.data) return t.data;
    } catch {}
  }),
  IM = on({
    name: "product-detail",
    initialState: MM,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(vu.pending, (t) => {
        t.loading = !0;
      }),
        e.addCase(vu.fulfilled, (t, r) => {
          (t.loading = !1), (t.product = r.payload);
        }),
        e.addCase(vu.rejected, (t, r) => {
          (t.loading = !1), (t.error = r.payload);
        });
    },
  }),
  jM = { userInfo: null, loading: !1, error: null },
  gu = Rn("users/login", async (e, t) => {
    try {
      const r = await xa.post("/users/login", e);
      if (r.data)
        return ge.success(`Bienvenue \u{1F44F} ${r.data.name}`), r.data;
    } catch (r) {
      const n = ut(r);
      ge.error(n), t.rejectWithValue(n);
    }
  }),
  TC = on({
    name: "auth-login",
    initialState: jM,
    reducers: {
      userLogout: (e) => {
        e.userInfo = null;
      },
    },
    extraReducers: (e) => {
      e.addCase(gu.pending, (t) => {
        t.loading = !0;
      }),
        e.addCase(gu.fulfilled, (t, r) => {
          (t.loading = !1), (t.userInfo = r.payload);
        }),
        e.addCase(gu.rejected, (t) => {
          t.loading = !1;
        });
    },
  }),
  { userLogout: RC } = TC.actions,
  UM = { user: null, loading: !1, error: null },
  yu = Rn("users/:id", async (e) => {
    try {
      const t = await xa.get(`/users/${e}`);
      if (t.data) return t.data;
    } catch {}
  }),
  BM = on({
    name: "user-detail",
    initialState: UM,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(yu.pending, (t) => {
        t.loading = !0;
      }),
        e.addCase(yu.fulfilled, (t, r) => {
          (t.loading = !1), (t.user = r.payload);
        }),
        e.addCase(yu.rejected, (t) => {
          t.loading = !1;
        });
    },
  }),
  zM = { users: [], loading: !1, error: null },
  wu = Rn("users/list", async () => {
    try {
      const e = await mt.get("/users");
      if (e.data) return e.data;
    } catch (e) {
      const t = ut(e);
      ge.error(t);
    }
  }),
  HM = on({
    name: "user-list",
    initialState: zM,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(wu.pending, (t) => {
        t.loading = !0;
      }),
        e.addCase(wu.fulfilled, (t, r) => {
          (t.loading = !1), (t.users = r.payload);
        }),
        e.addCase(wu.rejected, (t) => {
          t.loading = !1;
        });
    },
  }),
  VM = { orders: [], loading: !1, error: null },
  xu = Rn("users/orders", async () => {
    try {
      const { data: e } = await mt.get("/orders/orders-user");
      return e;
    } catch (e) {
      const t = ut(e);
      ge.error(t);
    }
  }),
  WM = on({
    name: "user-orders",
    initialState: VM,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(xu.pending, (t) => {
        t.loading = !0;
      }),
        e.addCase(xu.fulfilled, (t, r) => {
          (t.loading = !1), (t.orders = r.payload);
        }),
        e.addCase(xu.rejected, (t) => {
          t.loading = !1;
        });
    },
  }),
  KM = { order: null, loading: !1, error: null },
  bu = Rn("orders/:id", async (e) => {
    try {
      const { data: t } = await mt.get(`/orders/${e}`);
      return t;
    } catch (t) {
      const r = ut(t);
      ge.error(r);
    }
  }),
  qM = on({
    name: "orders-detail",
    initialState: KM,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(bu.pending, (t) => {
        t.loading = !0;
      }),
        e.addCase(bu.fulfilled, (t, r) => {
          (t.loading = !1), (t.order = r.payload);
        }),
        e.addCase(bu.rejected, (t) => {
          t.loading = !1;
        });
    },
  }),
  GM = [],
  YM = {
    products: GM,
    loading: !1,
    error: null,
    categories: [],
    brands: [],
    page: 1,
    pages: 1,
    total: 1,
  },
  vs = Rn("products/filter", async (e) => {
    try {
      const { data: t } = await xa.get(
        `/products/search?page=${e.n}&brand=${e.b}&category=${e.c}&query=${e.q}`
      );
      return t;
    } catch (t) {
      const r = ut(t);
      ge.error(r);
    }
  }),
  QM = on({
    name: "products-filter",
    initialState: YM,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(vs.pending, (t) => {
        t.loading = !0;
      }),
        e.addCase(vs.fulfilled, (t, r) => {
          (t.loading = !1),
            (t.products = r.payload.productDocs),
            (t.page = r.payload.page),
            (t.pages = r.payload.pages),
            (t.brands = r.payload.brands),
            (t.categories = r.payload.categories),
            (t.total = r.payload.countProducts);
        }),
        e.addCase(vs.rejected, (t) => {
          t.loading = !1;
        });
    },
  }),
  XM = ME({
    productList: nM.reducer,
    cart: nC.reducer,
    productDetail: IM.reducer,
    productFilter: QM.reducer,
    login: TC.reducer,
    userDetails: BM.reducer,
    userList: HM.reducer,
    orders: LM.reducer,
    userOrder: WM.reducer,
    orderDetail: qM.reducer,
  }),
  JM = { key: "root", storage: EC },
  ZM = $M(JM, XM),
  eg = _3({ reducer: ZM, middleware: (e) => e({ serializableCheck: !1 }) }),
  e4 = kM(eg),
  Ut = RF,
  Ge = hF;
DM(eg);
const t4 = () => {
  const { userInfo: e } = Ge((i) => i.login),
    { cartItems: t } = Ge((i) => i.cart),
    r = Ut(),
    n = It(),
    o = () => {
      r(RC()), r(Uv()), n("/login");
    };
  return E(br, {
    children: [
      f("nav", {
        className:
          "navbar navbar-expand-lg bg-dark navbar-light h-12 d-none d-lg-block",
        id: "templatemo_nav_top",
        children: f("div", {
          className: "container text-light",
          children: E("div", {
            className:
              "w-full d-flex justify-content-between align-items-center",
            children: [
              E("div", {
                children: [
                  f("i", { className: "fa text-sm  fa-envelope mx-2" }),
                  f("a", {
                    className:
                      "navbar-sm-brand text-light text-sm text-decoration-none",
                    href: "mailto:info@company.com",
                    children: "Frame Shop@me.com",
                  }),
                  f("i", { className: "fa text-sm  fa-phone mx-2" }),
                  f("a", {
                    className:
                      "navbar-sm-brand text-sm  text-light text-decoration-none",
                    href: "tel:010-020-0340",
                    children: "06 76 56 48 93",
                  }),
                ],
              }),
              E("div", {
                children: [
                  f("a", {
                    className: "text-light",
                    href: "https://fb.com",
                    target: "_blank",
                    rel: "sponsored",
                    children: f("i", {
                      className: "fab text-sm  fa-facebook-f fa-sm fa-fw me-2",
                    }),
                  }),
                  f("a", {
                    className: "text-light",
                    href: "https://www.instagram.com/",
                    target: "_blank",
                    children: f("i", {
                      className: "fab text-sm  fa-instagram fa-sm fa-fw me-2",
                    }),
                  }),
                  f("a", {
                    className: "text-light",
                    href: "https://twitter.com/",
                    target: "_blank",
                    children: f("i", {
                      className: "fab text-sm fa-twitter fa-sm fa-fw me-2",
                    }),
                  }),
                  f("a", {
                    className: "text-light",
                    href: "https://www.linkedin.com/",
                    target: "_blank",
                    children: f("i", {
                      className: "fab text-sm fa-linkedin fa-sm fa-fw",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      f(ki, {
        collapseOnSelect: !0,
        expand: "lg",
        sticky: "top",
        bg: "white",
        className: "shadow px-0 py-3",
        children: E("div", {
          className: "container-xl",
          children: [
            f(ki.Brand, {
              as: qr,
              to: "/",
              children: f("img", {
                src: "/LogoMakr-6Tit9e.png",
                className: "avatar rounded me-lg-10",
                alt: "...",
              }),
            }),
            f(ki.Toggle, { "aria-controls": "responsive-navbar-nav" }),
            E(ki.Collapse, {
              id: "responsive-navbar-nav",
              children: [
                E("div", {
                  className: "navbar-nav me-lg-auto",
                  children: [
                    f($o.Item, {
                      as: qr,
                      className: " nav-link active",
                      to: "/",
                      "aria-current": "page",
                      children: f("span", { children: "Home" }),
                    }),
                    f($o.Item, {
                      as: qr,
                      className: " nav-link",
                      to: "/home",
                      children: f("span", { children: "Product" }),
                    }),
                    f($o.Item, {
                      as: qr,
                      className: " nav-link",
                      to: "/contact",
                      children: f("span", { children: "Contact" }),
                    }),
                  ],
                }),
                E("div", {
                  className: "d-flex align-items-center",
                  children: [
                    E("div", {
                      className: "d-flex align-items-center",
                      children: [
                        f(Nt, {
                          className: "nav-link",
                          to: "/home",
                          children: f("i", {
                            className: "fa fa-fw fa-search text-dark me-2",
                          }),
                        }),
                        E(Nt, {
                          className:
                            "nav-icon position-relative text-decoration-none",
                          to: "/cart",
                          children: [
                            f("i", {
                              className:
                                "fa fa-fw fa-cart-arrow-down text-dark me-2 ",
                            }),
                            f("span", {
                              style: { backgroundColor: "#e03a3c" },
                              className:
                                "position-absolute top-0 left-100 translate-middle badge rounded-pill  text-white",
                              children: t.length,
                            }),
                          ],
                        }),
                      ],
                    }),
                    e
                      ? E(Ba, {
                          title: f("i", {
                            className: "fa fa-fw fa-user text-dark mr-3",
                          }),
                          id: "basic-nav-dropdown",
                          children: [
                            e.isAdmin &&
                              f(Ba.Item, {
                                as: qr,
                                to: "/dashboard",
                                children: "Dashboard",
                              }),
                            f(Ba.Item, {
                              as: qr,
                              to: `/profile/${e._id}`,
                              children: "Profile",
                            }),
                            f(Ba.Divider, {}),
                            f(Ba.Item, { onClick: o, children: "Logout" }),
                          ],
                        })
                      : E(br, {
                          children: [
                            f("div", {
                              className:
                                "d-flex align-items-lg-center mt-3 mt-lg-0",
                              children: f($o.Link, {
                                as: qr,
                                to: "/login",
                                className:
                                  "btn btn-secondary btn-sm text-white me-3 ms-5 ",
                                children: "Login",
                              }),
                            }),
                            f("div", {
                              className:
                                "d-flex align-items-lg-center mt-3 mt-lg-0",
                              children: f($o.Link, {
                                as: qr,
                                to: "/register",
                                style: { backgroundColor: "#e03a3c" },
                                className: "btn btn-sm text-white  ms-xs-3 ",
                                children: "Register",
                              }),
                            }),
                          ],
                        }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
};
function r4(e) {
  return e && typeof e == "object" && "default" in e ? e.default : e;
}
var AC = v.exports,
  n4 = r4(AC);
function Q0(e, t, r) {
  return (
    t in e
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
function o4(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var i4 = !!(
  typeof window != "undefined" &&
  window.document &&
  window.document.createElement
);
function a4(e, t, r) {
  if (typeof e != "function")
    throw new Error("Expected reducePropsToState to be a function.");
  if (typeof t != "function")
    throw new Error("Expected handleStateChangeOnClient to be a function.");
  if (typeof r != "undefined" && typeof r != "function")
    throw new Error(
      "Expected mapStateOnServer to either be undefined or a function."
    );
  function n(o) {
    return o.displayName || o.name || "Component";
  }
  return function (i) {
    if (typeof i != "function")
      throw new Error("Expected WrappedComponent to be a React component.");
    var a = [],
      s;
    function l() {
      (s = e(
        a.map(function (c) {
          return c.props;
        })
      )),
        u.canUseDOM ? t(s) : r && (s = r(s));
    }
    var u = (function (c) {
      o4(d, c);
      function d() {
        return c.apply(this, arguments) || this;
      }
      (d.peek = function () {
        return s;
      }),
        (d.rewind = function () {
          if (d.canUseDOM)
            throw new Error(
              "You may only call rewind() on the server. Call peek() to read the current state."
            );
          var w = s;
          return (s = void 0), (a = []), w;
        });
      var p = d.prototype;
      return (
        (p.UNSAFE_componentWillMount = function () {
          a.push(this), l();
        }),
        (p.componentDidUpdate = function () {
          l();
        }),
        (p.componentWillUnmount = function () {
          var w = a.indexOf(this);
          a.splice(w, 1), l();
        }),
        (p.render = function () {
          return n4.createElement(i, this.props);
        }),
        d
      );
    })(AC.PureComponent);
    return (
      Q0(u, "displayName", "SideEffect(" + n(i) + ")"),
      Q0(u, "canUseDOM", i4),
      u
    );
  };
}
var s4 = a4,
  l4 = typeof Element != "undefined",
  u4 = typeof Map == "function",
  c4 = typeof Set == "function",
  f4 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Su(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var r, n, o;
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (!Su(e[n], t[n])) return !1;
      return !0;
    }
    var i;
    if (u4 && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0])) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!Su(n.value[1], t.get(n.value[0]))) return !1;
      return !0;
    }
    if (c4 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0])) return !1;
      return !0;
    }
    if (f4 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (e[n] !== t[n]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (r = o.length), r !== Object.keys(t).length))
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1;
    if (l4 && e instanceof Element) return !1;
    for (n = r; n-- !== 0; )
      if (
        !(
          (o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") &&
          e.$$typeof
        ) &&
        !Su(e[o[n]], t[o[n]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var d4 = function (t, r) {
  try {
    return Su(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var X0 = Object.getOwnPropertySymbols,
  p4 = Object.prototype.hasOwnProperty,
  h4 = Object.prototype.propertyIsEnumerable;
function m4(e) {
  if (e == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(e);
}
function v4() {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5")) return !1;
    for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
    var n = Object.getOwnPropertyNames(t).map(function (i) {
      return t[i];
    });
    if (n.join("") !== "0123456789") return !1;
    var o = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (i) {
        o[i] = i;
      }),
      Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var g4 = v4()
    ? Object.assign
    : function (e, t) {
        for (var r, n = m4(e), o, i = 1; i < arguments.length; i++) {
          r = Object(arguments[i]);
          for (var a in r) p4.call(r, a) && (n[a] = r[a]);
          if (X0) {
            o = X0(r);
            for (var s = 0; s < o.length; s++)
              h4.call(r, o[s]) && (n[o[s]] = r[o[s]]);
          }
        }
        return n;
      },
  Io = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes",
  },
  ce = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title",
  };
Object.keys(ce).map(function (e) {
  return ce[e];
});
var ze = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target",
  },
  pc = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  Vs = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
  },
  y4 = Object.keys(pc).reduce(function (e, t) {
    return (e[pc[t]] = t), e;
  }, {}),
  w4 = [ce.NOSCRIPT, ce.SCRIPT, ce.STYLE],
  Mr = "data-react-helmet",
  x4 =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        },
  b4 = function (e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  },
  S4 = (function () {
    function e(t, r) {
      for (var n = 0; n < r.length; n++) {
        var o = r[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, r, n) {
      return r && e(t.prototype, r), n && e(t, n), t;
    };
  })(),
  Ht =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    },
  E4 = function (e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  },
  J0 = function (e, t) {
    var r = {};
    for (var n in e)
      t.indexOf(n) >= 0 ||
        !Object.prototype.hasOwnProperty.call(e, n) ||
        (r[n] = e[n]);
    return r;
  },
  C4 = function (e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  },
  uh = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return r === !1
      ? String(t)
      : String(t)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;");
  },
  O4 = function (t) {
    var r = Wi(t, ce.TITLE),
      n = Wi(t, Vs.TITLE_TEMPLATE);
    if (n && r)
      return n.replace(/%s/g, function () {
        return Array.isArray(r) ? r.join("") : r;
      });
    var o = Wi(t, Vs.DEFAULT_TITLE);
    return r || o || void 0;
  },
  _4 = function (t) {
    return Wi(t, Vs.ON_CHANGE_CLIENT_STATE) || function () {};
  },
  Ad = function (t, r) {
    return r
      .filter(function (n) {
        return typeof n[t] != "undefined";
      })
      .map(function (n) {
        return n[t];
      })
      .reduce(function (n, o) {
        return Ht({}, n, o);
      }, {});
  },
  $4 = function (t, r) {
    return r
      .filter(function (n) {
        return typeof n[ce.BASE] != "undefined";
      })
      .map(function (n) {
        return n[ce.BASE];
      })
      .reverse()
      .reduce(function (n, o) {
        if (!n.length)
          for (var i = Object.keys(o), a = 0; a < i.length; a++) {
            var s = i[a],
              l = s.toLowerCase();
            if (t.indexOf(l) !== -1 && o[l]) return n.concat(o);
          }
        return n;
      }, []);
  },
  Ha = function (t, r, n) {
    var o = {};
    return n
      .filter(function (i) {
        return Array.isArray(i[t])
          ? !0
          : (typeof i[t] != "undefined" &&
              R4(
                "Helmet: " +
                  t +
                  ' should be of type "Array". Instead found type "' +
                  x4(i[t]) +
                  '"'
              ),
            !1);
      })
      .map(function (i) {
        return i[t];
      })
      .reverse()
      .reduce(function (i, a) {
        var s = {};
        a.filter(function (p) {
          for (var h = void 0, w = Object.keys(p), m = 0; m < w.length; m++) {
            var b = w[m],
              y = b.toLowerCase();
            r.indexOf(y) !== -1 &&
              !(h === ze.REL && p[h].toLowerCase() === "canonical") &&
              !(y === ze.REL && p[y].toLowerCase() === "stylesheet") &&
              (h = y),
              r.indexOf(b) !== -1 &&
                (b === ze.INNER_HTML ||
                  b === ze.CSS_TEXT ||
                  b === ze.ITEM_PROP) &&
                (h = b);
          }
          if (!h || !p[h]) return !1;
          var g = p[h].toLowerCase();
          return (
            o[h] || (o[h] = {}),
            s[h] || (s[h] = {}),
            o[h][g] ? !1 : ((s[h][g] = !0), !0)
          );
        })
          .reverse()
          .forEach(function (p) {
            return i.push(p);
          });
        for (var l = Object.keys(s), u = 0; u < l.length; u++) {
          var c = l[u],
            d = g4({}, o[c], s[c]);
          o[c] = d;
        }
        return i;
      }, [])
      .reverse();
  },
  Wi = function (t, r) {
    for (var n = t.length - 1; n >= 0; n--) {
      var o = t[n];
      if (o.hasOwnProperty(r)) return o[r];
    }
    return null;
  },
  P4 = function (t) {
    return {
      baseTag: $4([ze.HREF, ze.TARGET], t),
      bodyAttributes: Ad(Io.BODY, t),
      defer: Wi(t, Vs.DEFER),
      encode: Wi(t, Vs.ENCODE_SPECIAL_CHARACTERS),
      htmlAttributes: Ad(Io.HTML, t),
      linkTags: Ha(ce.LINK, [ze.REL, ze.HREF], t),
      metaTags: Ha(
        ce.META,
        [ze.NAME, ze.CHARSET, ze.HTTPEQUIV, ze.PROPERTY, ze.ITEM_PROP],
        t
      ),
      noscriptTags: Ha(ce.NOSCRIPT, [ze.INNER_HTML], t),
      onChangeClientState: _4(t),
      scriptTags: Ha(ce.SCRIPT, [ze.SRC, ze.INNER_HTML], t),
      styleTags: Ha(ce.STYLE, [ze.CSS_TEXT], t),
      title: O4(t),
      titleAttributes: Ad(Io.TITLE, t),
    };
  },
  ch = (function () {
    var e = Date.now();
    return function (t) {
      var r = Date.now();
      r - e > 16
        ? ((e = r), t(r))
        : setTimeout(function () {
            ch(t);
          }, 0);
    };
  })(),
  Z0 = function (t) {
    return clearTimeout(t);
  },
  N4 =
    typeof window != "undefined"
      ? (window.requestAnimationFrame &&
          window.requestAnimationFrame.bind(window)) ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        ch
      : global.requestAnimationFrame || ch,
  T4 =
    typeof window != "undefined"
      ? window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        Z0
      : global.cancelAnimationFrame || Z0,
  R4 = function (t) {
    return console && typeof console.warn == "function" && console.warn(t);
  },
  Va = null,
  A4 = function (t) {
    Va && T4(Va),
      t.defer
        ? (Va = N4(function () {
            e1(t, function () {
              Va = null;
            });
          }))
        : (e1(t), (Va = null));
  },
  e1 = function (t, r) {
    var n = t.baseTag,
      o = t.bodyAttributes,
      i = t.htmlAttributes,
      a = t.linkTags,
      s = t.metaTags,
      l = t.noscriptTags,
      u = t.onChangeClientState,
      c = t.scriptTags,
      d = t.styleTags,
      p = t.title,
      h = t.titleAttributes;
    fh(ce.BODY, o), fh(ce.HTML, i), k4(p, h);
    var w = {
        baseTag: pi(ce.BASE, n),
        linkTags: pi(ce.LINK, a),
        metaTags: pi(ce.META, s),
        noscriptTags: pi(ce.NOSCRIPT, l),
        scriptTags: pi(ce.SCRIPT, c),
        styleTags: pi(ce.STYLE, d),
      },
      m = {},
      b = {};
    Object.keys(w).forEach(function (y) {
      var g = w[y],
        x = g.newTags,
        S = g.oldTags;
      x.length && (m[y] = x), S.length && (b[y] = w[y].oldTags);
    }),
      r && r(),
      u(t, m, b);
  },
  kC = function (t) {
    return Array.isArray(t) ? t.join("") : t;
  },
  k4 = function (t, r) {
    typeof t != "undefined" && document.title !== t && (document.title = kC(t)),
      fh(ce.TITLE, r);
  },
  fh = function (t, r) {
    var n = document.getElementsByTagName(t)[0];
    if (!!n) {
      for (
        var o = n.getAttribute(Mr),
          i = o ? o.split(",") : [],
          a = [].concat(i),
          s = Object.keys(r),
          l = 0;
        l < s.length;
        l++
      ) {
        var u = s[l],
          c = r[u] || "";
        n.getAttribute(u) !== c && n.setAttribute(u, c),
          i.indexOf(u) === -1 && i.push(u);
        var d = a.indexOf(u);
        d !== -1 && a.splice(d, 1);
      }
      for (var p = a.length - 1; p >= 0; p--) n.removeAttribute(a[p]);
      i.length === a.length
        ? n.removeAttribute(Mr)
        : n.getAttribute(Mr) !== s.join(",") && n.setAttribute(Mr, s.join(","));
    }
  },
  pi = function (t, r) {
    var n = document.head || document.querySelector(ce.HEAD),
      o = n.querySelectorAll(t + "[" + Mr + "]"),
      i = Array.prototype.slice.call(o),
      a = [],
      s = void 0;
    return (
      r &&
        r.length &&
        r.forEach(function (l) {
          var u = document.createElement(t);
          for (var c in l)
            if (l.hasOwnProperty(c))
              if (c === ze.INNER_HTML) u.innerHTML = l.innerHTML;
              else if (c === ze.CSS_TEXT)
                u.styleSheet
                  ? (u.styleSheet.cssText = l.cssText)
                  : u.appendChild(document.createTextNode(l.cssText));
              else {
                var d = typeof l[c] == "undefined" ? "" : l[c];
                u.setAttribute(c, d);
              }
          u.setAttribute(Mr, "true"),
            i.some(function (p, h) {
              return (s = h), u.isEqualNode(p);
            })
              ? i.splice(s, 1)
              : a.push(u);
        }),
      i.forEach(function (l) {
        return l.parentNode.removeChild(l);
      }),
      a.forEach(function (l) {
        return n.appendChild(l);
      }),
      { oldTags: i, newTags: a }
    );
  },
  DC = function (t) {
    return Object.keys(t).reduce(function (r, n) {
      var o = typeof t[n] != "undefined" ? n + '="' + t[n] + '"' : "" + n;
      return r ? r + " " + o : o;
    }, "");
  },
  D4 = function (t, r, n, o) {
    var i = DC(n),
      a = kC(r);
    return i
      ? "<" + t + " " + Mr + '="true" ' + i + ">" + uh(a, o) + "</" + t + ">"
      : "<" + t + " " + Mr + '="true">' + uh(a, o) + "</" + t + ">";
  },
  F4 = function (t, r, n) {
    return r.reduce(function (o, i) {
      var a = Object.keys(i)
          .filter(function (u) {
            return !(u === ze.INNER_HTML || u === ze.CSS_TEXT);
          })
          .reduce(function (u, c) {
            var d =
              typeof i[c] == "undefined" ? c : c + '="' + uh(i[c], n) + '"';
            return u ? u + " " + d : d;
          }, ""),
        s = i.innerHTML || i.cssText || "",
        l = w4.indexOf(t) === -1;
      return (
        o +
        "<" +
        t +
        " " +
        Mr +
        '="true" ' +
        a +
        (l ? "/>" : ">" + s + "</" + t + ">")
      );
    }, "");
  },
  FC = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function (n, o) {
      return (n[pc[o] || o] = t[o]), n;
    }, r);
  },
  L4 = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function (n, o) {
      return (n[y4[o] || o] = t[o]), n;
    }, r);
  },
  M4 = function (t, r, n) {
    var o,
      i = ((o = { key: r }), (o[Mr] = !0), o),
      a = FC(n, i);
    return [be.createElement(ce.TITLE, a, r)];
  },
  I4 = function (t, r) {
    return r.map(function (n, o) {
      var i,
        a = ((i = { key: o }), (i[Mr] = !0), i);
      return (
        Object.keys(n).forEach(function (s) {
          var l = pc[s] || s;
          if (l === ze.INNER_HTML || l === ze.CSS_TEXT) {
            var u = n.innerHTML || n.cssText;
            a.dangerouslySetInnerHTML = { __html: u };
          } else a[l] = n[s];
        }),
        be.createElement(t, a)
      );
    });
  },
  cn = function (t, r, n) {
    switch (t) {
      case ce.TITLE:
        return {
          toComponent: function () {
            return M4(t, r.title, r.titleAttributes);
          },
          toString: function () {
            return D4(t, r.title, r.titleAttributes, n);
          },
        };
      case Io.BODY:
      case Io.HTML:
        return {
          toComponent: function () {
            return FC(r);
          },
          toString: function () {
            return DC(r);
          },
        };
      default:
        return {
          toComponent: function () {
            return I4(t, r);
          },
          toString: function () {
            return F4(t, r, n);
          },
        };
    }
  },
  LC = function (t) {
    var r = t.baseTag,
      n = t.bodyAttributes,
      o = t.encode,
      i = t.htmlAttributes,
      a = t.linkTags,
      s = t.metaTags,
      l = t.noscriptTags,
      u = t.scriptTags,
      c = t.styleTags,
      d = t.title,
      p = d === void 0 ? "" : d,
      h = t.titleAttributes;
    return {
      base: cn(ce.BASE, r, o),
      bodyAttributes: cn(Io.BODY, n, o),
      htmlAttributes: cn(Io.HTML, i, o),
      link: cn(ce.LINK, a, o),
      meta: cn(ce.META, s, o),
      noscript: cn(ce.NOSCRIPT, l, o),
      script: cn(ce.SCRIPT, u, o),
      style: cn(ce.STYLE, c, o),
      title: cn(ce.TITLE, { title: p, titleAttributes: h }, o),
    };
  },
  j4 = function (t) {
    var r, n;
    return (
      (n = r =
        (function (o) {
          E4(i, o);
          function i() {
            return b4(this, i), C4(this, o.apply(this, arguments));
          }
          return (
            (i.prototype.shouldComponentUpdate = function (s) {
              return !d4(this.props, s);
            }),
            (i.prototype.mapNestedChildrenToProps = function (s, l) {
              if (!l) return null;
              switch (s.type) {
                case ce.SCRIPT:
                case ce.NOSCRIPT:
                  return { innerHTML: l };
                case ce.STYLE:
                  return { cssText: l };
              }
              throw new Error(
                "<" +
                  s.type +
                  " /> elements are self-closing and can not contain children. Refer to our API for more information."
              );
            }),
            (i.prototype.flattenArrayTypeChildren = function (s) {
              var l,
                u = s.child,
                c = s.arrayTypeChildren,
                d = s.newChildProps,
                p = s.nestedChildren;
              return Ht(
                {},
                c,
                ((l = {}),
                (l[u.type] = [].concat(c[u.type] || [], [
                  Ht({}, d, this.mapNestedChildrenToProps(u, p)),
                ])),
                l)
              );
            }),
            (i.prototype.mapObjectTypeChildren = function (s) {
              var l,
                u,
                c = s.child,
                d = s.newProps,
                p = s.newChildProps,
                h = s.nestedChildren;
              switch (c.type) {
                case ce.TITLE:
                  return Ht(
                    {},
                    d,
                    ((l = {}),
                    (l[c.type] = h),
                    (l.titleAttributes = Ht({}, p)),
                    l)
                  );
                case ce.BODY:
                  return Ht({}, d, { bodyAttributes: Ht({}, p) });
                case ce.HTML:
                  return Ht({}, d, { htmlAttributes: Ht({}, p) });
              }
              return Ht({}, d, ((u = {}), (u[c.type] = Ht({}, p)), u));
            }),
            (i.prototype.mapArrayTypeChildrenToProps = function (s, l) {
              var u = Ht({}, l);
              return (
                Object.keys(s).forEach(function (c) {
                  var d;
                  u = Ht({}, u, ((d = {}), (d[c] = s[c]), d));
                }),
                u
              );
            }),
            (i.prototype.warnOnInvalidChildren = function (s, l) {
              return !0;
            }),
            (i.prototype.mapChildrenToProps = function (s, l) {
              var u = this,
                c = {};
              return (
                be.Children.forEach(s, function (d) {
                  if (!(!d || !d.props)) {
                    var p = d.props,
                      h = p.children,
                      w = J0(p, ["children"]),
                      m = L4(w);
                    switch ((u.warnOnInvalidChildren(d, h), d.type)) {
                      case ce.LINK:
                      case ce.META:
                      case ce.NOSCRIPT:
                      case ce.SCRIPT:
                      case ce.STYLE:
                        c = u.flattenArrayTypeChildren({
                          child: d,
                          arrayTypeChildren: c,
                          newChildProps: m,
                          nestedChildren: h,
                        });
                        break;
                      default:
                        l = u.mapObjectTypeChildren({
                          child: d,
                          newProps: l,
                          newChildProps: m,
                          nestedChildren: h,
                        });
                        break;
                    }
                  }
                }),
                (l = this.mapArrayTypeChildrenToProps(c, l)),
                l
              );
            }),
            (i.prototype.render = function () {
              var s = this.props,
                l = s.children,
                u = J0(s, ["children"]),
                c = Ht({}, u);
              return (
                l && (c = this.mapChildrenToProps(l, c)), be.createElement(t, c)
              );
            }),
            S4(i, null, [
              {
                key: "canUseDOM",
                set: function (s) {
                  t.canUseDOM = s;
                },
              },
            ]),
            i
          );
        })(be.Component)),
      (r.propTypes = {
        base: me.object,
        bodyAttributes: me.object,
        children: me.oneOfType([me.arrayOf(me.node), me.node]),
        defaultTitle: me.string,
        defer: me.bool,
        encodeSpecialCharacters: me.bool,
        htmlAttributes: me.object,
        link: me.arrayOf(me.object),
        meta: me.arrayOf(me.object),
        noscript: me.arrayOf(me.object),
        onChangeClientState: me.func,
        script: me.arrayOf(me.object),
        style: me.arrayOf(me.object),
        title: me.string,
        titleAttributes: me.object,
        titleTemplate: me.string,
      }),
      (r.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
      (r.peek = t.peek),
      (r.rewind = function () {
        var o = t.rewind();
        return (
          o ||
            (o = LC({
              baseTag: [],
              bodyAttributes: {},
              encodeSpecialCharacters: !0,
              htmlAttributes: {},
              linkTags: [],
              metaTags: [],
              noscriptTags: [],
              scriptTags: [],
              styleTags: [],
              title: "",
              titleAttributes: {},
            })),
          o
        );
      }),
      n
    );
  },
  U4 = function () {
    return null;
  },
  B4 = s4(P4, A4, LC)(U4),
  dh = j4(B4);
dh.renderStatic = dh.rewind;
const z4 = ({
    title: e = "Welcome To Type-shop",
    description: t = "the best online store :)",
    keywords: r,
  }) =>
    E(dh, {
      children: [
        f("title", { children: e }),
        f("meta", { name: "description", content: t }),
        f("meta", { name: "keyword", content: r }),
      ],
    }),
  An = ({ title: e = "", description: t = "", children: r }) => {
    const o = zr().pathname === "/";
    return E(v.exports.Fragment, {
      children: [
        f(z4, { title: e, description: t }),
        f(t4, {}),
        o && f(Yk, {}),
        f("main", { id: "main", className: "py-3", children: r }),
        o && f(Gk, {}),
        E("div", { id: "footer", children: [o && f(UD, {}), f(BD, {})] }),
      ],
    });
  },
  MC = ({ children: e, variant: t = "danger" }) =>
    f(Wy, { variant: t, children: f(Wy.Heading, { children: e }) }),
  H4 = () => {
    const { cartItems: e } = Ge((n) => n.cart),
      t = Ut(),
      r = It();
    return f(An, {
      title: "cart shop",
      children: f(jt, {
        children:
          e.length === 0
            ? E(MC, {
                children: [
                  "Your cart is empty",
                  f(Nt, {
                    to: "/home",
                    className: "mx-3",
                    children: "Go Back",
                  }),
                ],
              })
            : E(Pe, {
                children: [
                  f(re, {
                    md: 8,
                    children: f(pe, {
                      variant: "flush",
                      children: e.map((n) =>
                        f(
                          pe.Item,
                          {
                            className: "shadow rounded p-5 bg-white mb-2",
                            children: E(Pe, {
                              className: "d-flex align-items-center",
                              children: [
                                f(re, {
                                  md: 2,
                                  children: f(ri, {
                                    src: n.image,
                                    roundedCircle: !0,
                                    className: "h-16 w-16",
                                  }),
                                }),
                                f(re, {
                                  className: "d-none d-lg-block",
                                  children: n.name,
                                }),
                                f(re, { children: n == null ? void 0 : n.qty }),
                                f(re, { children: st(n.price * n.qty) }),
                                E(re, {
                                  children: [
                                    f(qk, {
                                      onClick: () => t(oC(n)),
                                      size: "1.5rem",
                                      style: { backgroundColor: "#e03a3c" },
                                      className:
                                        "icons__cart  m-2 rounded-circle text-white p-1 cursor-pointer",
                                    }),
                                    f(Kk, {
                                      size: "1.5rem",
                                      style: { backgroundColor: "#e03a3c" },
                                      className:
                                        "icons__cart m-2 rounded-circle text-white p-1 cursor-pointer ",
                                      onClick: () => t(kF(n)),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          n._id
                        )
                      ),
                    }),
                  }),
                  f(re, {
                    md: 4,
                    children: f(Oe, {
                      className: "shadow ",
                      children: f(Oe.Body, {
                        children: E(pe, {
                          variant: "flush",
                          children: [
                            E(pe.Item, {
                              as: "h2",
                              children: [
                                "SubTotal (",
                                e.reduce((n, o) => n + o.qty, 0),
                                ") item",
                              ],
                            }),
                            E(pe.Item, {
                              className:
                                " d-flex justify-content-between align-items-center",
                              children: [
                                f("span", { children: "Total Price :" }),
                                f("span", {
                                  children: st(
                                    e.reduce((n, o) => n + o.price * o.qty, 0)
                                  ),
                                }),
                              ],
                            }),
                            E(pe.Item, {
                              className:
                                " d-flex justify-content-between align-items-center",
                              children: [
                                f(ht, {
                                  style: { backgroundColor: "#e03a3c" },
                                  disabled: e.length === 0,
                                  onClick: () => r("/shipping-address"),
                                  className: "w-1/2 text-white me-2",
                                  variant: "outline-none",
                                  children: "Checkout",
                                }),
                                f(ht, {
                                  style: { backgroundColor: "#e03a3c" },
                                  onClick: () => r("/"),
                                  className: "w-1/2 text-white me-2",
                                  variant: "outline-none",
                                  children: "Countine",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
      }),
    });
  },
  IC = ({ children: e, onClick: t, className: r, disabled: n }) =>
    f(ht, {
      onClick: t,
      style: { backgroundColor: "#e03a3c", color: "#fff" },
      variant: "outline-none",
      className: r,
      disabled: n,
      children: e,
    }),
  V4 = () => {
    const { shippingAddress: e, cartItems: t } = Ge((u) => u.cart),
      r = Ut(),
      n = It(),
      o = t.reduce((u, c) => u + c.qty * c.price, 0),
      i = o * 0.1,
      a = o >= 200 ? 0 : 30,
      s = o + i + a,
      l = () => {
        const u = { totalPrice: s, cartItems: t, shippingAddress: e };
        mt.post("/orders", u)
          .then((c) => {
            ge.success("your order has been created"),
              r(Uv()),
              n(`/orders/${c.data._id}`);
          })
          .catch((c) => ge.error(ut(c)));
      };
    return f(An, {
      title: "checkout",
      children: f(jt, {
        children: E(Pe, {
          children: [
            f(re, {
              md: 8,
              className: "mb-2",
              children: f(Oe, {
                children: f(Oe.Body, {
                  children: E(pe, {
                    variant: "flush",
                    children: [
                      f(pe.Item, {
                        children: E("h4", {
                          className:
                            " justify-content-between d-flex align-items-center",
                          children: [
                            f("span", { children: " Address: " }),
                            E("span", {
                              children: [
                                e == null ? void 0 : e.address,
                                " ",
                                e == null ? void 0 : e.city,
                                " ",
                                e == null ? void 0 : e.postalCode,
                              ],
                            }),
                          ],
                        }),
                      }),
                      f("h3", { className: "my-3", children: "Items" }),
                      t.map((u) =>
                        f(
                          pe.Item,
                          {
                            className: " mb-2",
                            children: E(Pe, {
                              className: "d-flex align-items-center",
                              children: [
                                f(re, {
                                  md: 2,
                                  children: f(ri, {
                                    src: u.image,
                                    roundedCircle: !0,
                                    className: "avatar",
                                  }),
                                }),
                                f(re, { md: 6, children: u.name }),
                                f(re, { children: u == null ? void 0 : u.qty }),
                                f(re, { children: st(u.price * u.qty) }),
                                f(re, {}),
                              ],
                            }),
                          },
                          u._id
                        )
                      ),
                    ],
                  }),
                }),
              }),
            }),
            f(re, {
              md: 4,
              children: f(Oe, {
                className: "shadow ",
                children: f(Oe.Body, {
                  children: E(pe, {
                    variant: "flush",
                    children: [
                      E(pe.Item, {
                        as: "h2",
                        children: [
                          "SubTotal (",
                          t.reduce((u, c) => u + c.qty, 0),
                          ") item",
                        ],
                      }),
                      E(pe.Item, {
                        className:
                          " d-flex justify-content-between align-items-center",
                        children: [
                          f("span", { children: "Total Price :" }),
                          f("span", {
                            children: st(
                              t.reduce((u, c) => u + c.price * c.qty, 0)
                            ),
                          }),
                        ],
                      }),
                      E(pe.Item, {
                        className:
                          " d-flex justify-content-between align-items-center",
                        children: [
                          f("span", { children: "Tax Price" }),
                          f("span", { children: st(i) }),
                        ],
                      }),
                      E(pe.Item, {
                        className:
                          " d-flex justify-content-between align-items-center",
                        children: [
                          f("span", { children: "Shipping Price" }),
                          f("span", { children: st(a) }),
                        ],
                      }),
                      E(pe.Item, {
                        className:
                          " d-flex justify-content-between align-items-center",
                        children: [
                          f("span", { children: "Total Price" }),
                          f("span", { children: st(s) }),
                        ],
                      }),
                      f(pe.Item, {
                        className:
                          " d-flex justify-content-between align-items-center",
                        children: f(IC, {
                          onClick: l,
                          disabled: t.length === 0,
                          className: "w-full",
                          children: "Place order",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        }),
      }),
    });
  },
  tg = (e) =>
    f(An, {
      title: e.meta,
      children: f(jt, {
        children: f(Pe, {
          className: " justify-content-center py-6",
          children: f(re, {
            md: 6,
            children: E(Oe, {
              children: [
                f("h1", {
                  style: { color: "#e03a3c" },
                  className: "text-center my-3",
                  children: e.title,
                }),
                e.image && f(ri, { src: e.image, style: { height: "250px" } }),
                f(Oe.Body, { children: e.children }),
              ],
            }),
          }),
        }),
      }),
    }),
  W4 = () => {
    const { shippingAddress: e } = Ge((s) => s.cart),
      t = Ut(),
      r = It(),
      [n, o] = v.exports.useState({
        address: "",
        city: "",
        postalCode: "",
        country: "",
      }),
      i = (s) => {
        o((l) => ({ ...l, [s.target.name]: s.target.value }));
      },
      a = (s) => {
        s.preventDefault(),
          t(
            DF({
              address: n.address,
              city: n.city,
              postalCode: n.postalCode,
              country: n.country,
            })
          ),
          r("/checkout");
      };
    return (
      v.exports.useEffect(() => {
        if (e) return r("/checkout");
      }, [e]),
      f(tg, {
        meta: "shipping address",
        title: "Shipping Address",
        children: E(I, {
          onSubmit: a,
          children: [
            E(I.Group, {
              controlId: "address",
              children: [
                f(I.Label, { children: "Address" }),
                f(I.Control, {
                  onChange: i,
                  name: "address",
                  placeholder: "enter your address",
                  required: !0,
                }),
              ],
            }),
            E(I.Group, {
              controlId: "city",
              children: [
                f(I.Label, { children: "City" }),
                f(I.Control, {
                  onChange: i,
                  name: "city",
                  placeholder: "enter your city",
                  required: !0,
                }),
              ],
            }),
            E(I.Group, {
              controlId: "postalCode",
              children: [
                f(I.Label, { children: "Postal Code" }),
                f(I.Control, {
                  onChange: i,
                  name: "postalCode",
                  placeholder: "enter your postal code",
                  required: !0,
                }),
              ],
            }),
            E(I.Group, {
              controlId: "country",
              children: [
                f(I.Label, { children: "Country" }),
                f(I.Control, {
                  onChange: i,
                  name: "country",
                  placeholder: "enter your country",
                  required: !0,
                }),
              ],
            }),
            f(ht, {
              style: { backgroundColor: "#e03a3c", color: "#fff" },
              variant: "outline-none",
              type: "submit",
              className: "mt-4 w-full",
              children: "Submit",
            }),
          ],
        }),
      })
    );
  },
  jC = ({ product: e }) =>
    f(Oe, {
      className: "my-3 p-3 rounded",
      style: { height: "400px" },
      children: E(Nt, {
        to: `/products/${e._id}`,
        children: [
          f(Oe.Img, {
            src: e.image,
            variant: "top",
            style: { height: "300px", width: "100%", objectFit: "contain" },
          }),
          f(Oe.Body, {
            children: E(Oe.Title, {
              className:
                "d-flex justify-content-between align-items-baseline mb-4",
              children: [
                f("span", { className: "fs-2", children: e.name }),
                f("span", {
                  className: "ms-2 text-muted",
                  children: st(e.price),
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  ii = () =>
    f(Ik, {
      animation: "border",
      role: "status",
      style: {
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
      },
      children: f("span", { className: "sr-only" }),
    }),
  K4 = () => {
    const e = Ut(),
      { products: t, loading: r } = Ge((n) => n.productList);
    return (
      v.exports.useEffect(() => {
        e(pu());
      }, [e]),
      f(An, {
        children: E(jt, {
          children: [
            f("h2", {
              style: { color: "#e03a3c" },
              className: "mt-3",
              children: "Least Products",
            }),
            r || !t
              ? f(ii, {})
              : f(Pe, {
                  md: 3,
                  xs: 1,
                  lg: 3,
                  children: t.map((n) =>
                    f(re, { children: f(jC, { product: n }) }, n._id)
                  ),
                }),
          ],
        }),
      })
    );
  },
  q4 = ({ value: e, text: t, color: r = "#f8e825" }) =>
    E("div", {
      className: "rating mx-3 mb-2",
      children: [
        f("span", {
          children: f("i", {
            style: { color: r },
            className:
              e >= 1
                ? "fas fa-star"
                : e >= 0.5
                ? "fas fa-star-half-alt"
                : "far fa-star",
          }),
        }),
        f("span", {
          children: f("i", {
            style: { color: r },
            className:
              e >= 2
                ? "fas fa-star"
                : e >= 1.5
                ? "fas fa-star-half-alt"
                : "far fa-star",
          }),
        }),
        f("span", {
          children: f("i", {
            style: { color: r },
            className:
              e >= 3
                ? "fas fa-star"
                : e >= 2.5
                ? "fas fa-star-half-alt"
                : "far fa-star",
          }),
        }),
        f("span", {
          children: f("i", {
            style: { color: r },
            className:
              e >= 4
                ? "fas fa-star"
                : e >= 3.5
                ? "fas fa-star-half-alt"
                : "far fa-star",
          }),
        }),
        f("span", {
          children: f("i", {
            style: { color: r },
            className:
              e >= 5
                ? "fas fa-star"
                : e >= 4.5
                ? "fas fa-star-half-alt"
                : "far fa-star",
          }),
        }),
        f("span", { children: t && t }),
      ],
    }),
  G4 = () => {
    const e = Ut(),
      { product: t, loading: r } = Ge((m) => m.productDetail),
      { userInfo: n } = Ge((m) => m.login),
      o = Zo(),
      { id: i } = o,
      a = It(),
      [s, l] = v.exports.useState(0),
      [u, c] = v.exports.useState(""),
      [d, p] = v.exports.useState(!1),
      h = () => {
        e(oC(t)), a("/cart");
      },
      w = (m) => {
        m.preventDefault();
        const b = { comment: u, rating: s };
        mt.post(`/products/${t == null ? void 0 : t._id}/reviews`, b)
          .then((y) => {
            ge.success("thank you for the comment \u{1F642}"),
              p((g) => (g = !g));
          })
          .catch((y) => ge.error(ut(y)));
      };
    return (
      v.exports.useEffect(() => {
        e(vu(i)), window.scrollTo(0, 0);
      }, [i, e, d]),
      f(An, {
        title: t == null ? void 0 : t.name,
        children:
          r || !t
            ? f(ii, {})
            : E(jt, {
                children: [
                  E(Pe, {
                    children: [
                      f(re, {
                        md: 7,
                        children: f(Oe, {
                          className: "shadow",
                          children: f(ri, {
                            className: " p-2",
                            rounded: !0,
                            src: t == null ? void 0 : t.image,
                            style: { width: "600px", height: "100%" },
                          }),
                        }),
                      }),
                      f(re, {
                        md: 5,
                        children: E(pe, {
                          variant: "flush",
                          className: "shadow p-5 bg-white rounded",
                          children: [
                            f(pe.Item, {
                              children: f("h2", {
                                children: t == null ? void 0 : t.name,
                              }),
                            }),
                            E(pe.Item, {
                              children: [
                                " ",
                                E("h5", {
                                  className:
                                    " d-flex justify-content-between align-items-center",
                                  children: [
                                    f("span", { children: "Price:" }),
                                    f("span", { children: st(t.price) }),
                                  ],
                                }),
                              ],
                            }),
                            f(pe.Item, {
                              children: E("h5", {
                                className:
                                  " d-flex justify-content-between align-items-center",
                                children: [
                                  f("span", { children: "Category:" }),
                                  f("span", { children: t.category }),
                                ],
                              }),
                            }),
                            f(pe.Item, {
                              children: E("h5", {
                                className:
                                  " d-flex justify-content-between align-items-center",
                                children: [
                                  f("span", { children: "Brand:" }),
                                  f("span", { children: t.brand }),
                                ],
                              }),
                            }),
                            f(pe.Item, { children: t.description }),
                            f(pe.Item, {
                              children: f(IC, {
                                onClick: h,
                                className: "w-full",
                                children: "Add To Cart",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  E(Pe, {
                    className: "mt-2",
                    children: [
                      f(re, {
                        md: 7,
                        children: f(Oe, {
                          children: E(Oe.Body, {
                            children: [
                              f("h3", {
                                style: { color: "#e03a3c" },
                                children: "Reviews",
                              }),
                              f(pe, {
                                variant: "flush",
                                children: t.reviews.map((m) =>
                                  E(
                                    pe.Item,
                                    {
                                      children: [
                                        E("div", {
                                          className: "d-flex",
                                          children: [
                                            f("strong", { children: m.name }),
                                            f(q4, { value: m.rating }),
                                            f("p", {
                                              children: ul(m.createdAt),
                                            }),
                                          ],
                                        }),
                                        f("p", { children: m.comment }),
                                      ],
                                    },
                                    m._id
                                  )
                                ),
                              }),
                            ],
                          }),
                        }),
                      }),
                      f(re, {
                        md: 5,
                        children: f(pe, {
                          className: "bg-white p-3",
                          children: E(pe.Item, {
                            children: [
                              f("h3", {
                                style: { color: "#e03a3c" },
                                children: "Comment",
                              }),
                              n
                                ? E(I, {
                                    onSubmit: w,
                                    children: [
                                      E(I.Group, {
                                        controlId: "rating",
                                        children: [
                                          f(I.Label, { children: "Rating" }),
                                          E(I.Control, {
                                            required: !0,
                                            onChange: (m) => l(m.target.value),
                                            as: "select",
                                            children: [
                                              f("option", {
                                                value: 1,
                                                children: "\u2B50",
                                              }),
                                              f("option", {
                                                value: 2,
                                                children: "\u2B50\u2B50",
                                              }),
                                              f("option", {
                                                value: 3,
                                                children: "\u2B50\u2B50\u2B50",
                                              }),
                                              f("option", {
                                                value: 4,
                                                children:
                                                  "\u2B50\u2B50\u2B50\u2B50",
                                              }),
                                              f("option", {
                                                value: 5,
                                                children:
                                                  "\u2B50\u2B50\u2B50\u2B50\u2B50",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      E(I.Group, {
                                        controlId: "comment",
                                        children: [
                                          f(I.Label, { children: "Comment" }),
                                          f(I.Control, {
                                            required: !0,
                                            onChange: (m) => c(m.target.value),
                                            as: "textarea",
                                            rows: 3,
                                          }),
                                        ],
                                      }),
                                      f(ht, {
                                        style: {
                                          backgroundColor: "#e03a3c",
                                          color: "#fff",
                                        },
                                        className: "mt-2 w-full",
                                        variant: "outline-none",
                                        type: "submit",
                                        children: "Submit",
                                      }),
                                    ],
                                  })
                                : E(MC, {
                                    children: [
                                      "You must login first to feedback",
                                      " ",
                                      f(Nt, {
                                        to: "/login",
                                        className: "ms-2",
                                        children: "Login Now",
                                      }),
                                    ],
                                  }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
      })
    );
  };
var cl = (e) => e.type === "checkbox",
  Di = (e) => e instanceof Date,
  kt = (e) => e == null;
const UC = (e) => typeof e == "object";
var vt = (e) => !kt(e) && !Array.isArray(e) && UC(e) && !Di(e),
  Y4 = (e) =>
    vt(e) && e.target ? (cl(e.target) ? e.target.checked : e.target.value) : e,
  Q4 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  X4 = (e, t) => e.has(Q4(t)),
  fl = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  rt = (e) => e === void 0,
  Q = (e, t, r) => {
    if (!t || !vt(e)) return r;
    const n = fl(t.split(/[,[\].]+?/)).reduce((o, i) => (kt(o) ? o : o[i]), e);
    return rt(n) || n === e ? (rt(e[t]) ? r : e[t]) : n;
  };
const t1 = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  Lr = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  fn = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  };
be.createContext(null);
var J4 = (e, t, r, n = !0) => {
    const o = { defaultValues: t._defaultValues };
    for (const i in e)
      Object.defineProperty(o, i, {
        get: () => {
          const a = i;
          return (
            t._proxyFormState[a] !== Lr.all &&
              (t._proxyFormState[a] = !n || Lr.all),
            r && (r[a] = !0),
            e[a]
          );
        },
      });
    return o;
  },
  hr = (e) => vt(e) && !Object.keys(e).length,
  Z4 = (e, t, r) => {
    const { name: n, ...o } = e;
    return (
      hr(o) ||
      Object.keys(o).length >= Object.keys(t).length ||
      Object.keys(o).find((i) => t[i] === (!r || Lr.all))
    );
  },
  kd = (e) => (Array.isArray(e) ? e : [e]);
function eI(e) {
  const t = be.useRef(e);
  (t.current = e),
    be.useEffect(() => {
      const r =
        !e.disabled && t.current.subject.subscribe({ next: t.current.next });
      return () => {
        r && r.unsubscribe();
      };
    }, [e.disabled]);
}
var Yr = (e) => typeof e == "string",
  tI = (e, t, r, n, o) =>
    Yr(e)
      ? (n && t.watch.add(e), Q(r, e, o))
      : Array.isArray(e)
      ? e.map((i) => (n && t.watch.add(i), Q(r, i)))
      : (n && (t.watchAll = !0), r),
  rI = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return vt(t) && t.hasOwnProperty("isPrototypeOf");
  },
  ph =
    typeof window != "undefined" &&
    typeof window.HTMLElement != "undefined" &&
    typeof document != "undefined";
function So(e) {
  let t;
  const r = Array.isArray(e);
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (
    !(ph && (e instanceof Blob || e instanceof FileList)) &&
    (r || vt(e))
  )
    if (((t = r ? [] : {}), !Array.isArray(e) && !rI(e))) t = e;
    else for (const n in e) t[n] = So(e[n]);
  else return e;
  return t;
}
var BC = (e, t, r, n, o) =>
    t
      ? {
          ...r[e],
          types: { ...(r[e] && r[e].types ? r[e].types : {}), [n]: o || !0 },
        }
      : {},
  rg = (e) => /^\w*$/.test(e),
  zC = (e) => fl(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function Ie(e, t, r) {
  let n = -1;
  const o = rg(t) ? [t] : zC(t),
    i = o.length,
    a = i - 1;
  for (; ++n < i; ) {
    const s = o[n];
    let l = r;
    if (n !== a) {
      const u = e[s];
      l = vt(u) || Array.isArray(u) ? u : isNaN(+o[n + 1]) ? {} : [];
    }
    (e[s] = l), (e = e[s]);
  }
  return e;
}
const hh = (e, t, r) => {
  for (const n of r || Object.keys(e)) {
    const o = Q(e, n);
    if (o) {
      const { _f: i, ...a } = o;
      if (i && t(i.name)) {
        if (i.ref.focus) {
          i.ref.focus();
          break;
        } else if (i.refs && i.refs[0].focus) {
          i.refs[0].focus();
          break;
        }
      } else vt(a) && hh(a, t);
    }
  }
};
var r1 = (e) => ({
    isOnSubmit: !e || e === Lr.onSubmit,
    isOnBlur: e === Lr.onBlur,
    isOnChange: e === Lr.onChange,
    isOnAll: e === Lr.all,
    isOnTouch: e === Lr.onTouched,
  }),
  n1 = (e, t, r) =>
    !r &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))
      )),
  nI = (e, t, r) => {
    const n = fl(Q(e, r));
    return Ie(n, "root", t[r]), Ie(e, r, n), e;
  },
  Ki = (e) => typeof e == "boolean",
  ng = (e) => e.type === "file",
  qi = (e) => typeof e == "function",
  Eu = (e) => Yr(e) || be.isValidElement(e),
  og = (e) => e.type === "radio",
  hc = (e) => e instanceof RegExp;
const o1 = { value: !1, isValid: !1 },
  i1 = { value: !0, isValid: !0 };
var HC = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((r) => r && r.checked && !r.disabled)
        .map((r) => r.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !rt(e[0].attributes.value)
        ? rt(e[0].value) || e[0].value === ""
          ? i1
          : { value: e[0].value, isValid: !0 }
        : i1
      : o1;
  }
  return o1;
};
const a1 = { isValid: !1, value: null };
var VC = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, r) =>
          r && r.checked && !r.disabled ? { isValid: !0, value: r.value } : t,
        a1
      )
    : a1;
function s1(e, t, r = "validate") {
  if (Eu(e) || (Array.isArray(e) && e.every(Eu)) || (Ki(e) && !e))
    return { type: r, message: Eu(e) ? e : "", ref: t };
}
var hi = (e) => (vt(e) && !hc(e) ? e : { value: e, message: "" }),
  l1 = async (e, t, r, n, o) => {
    const {
      ref: i,
      refs: a,
      required: s,
      maxLength: l,
      minLength: u,
      min: c,
      max: d,
      pattern: p,
      validate: h,
      name: w,
      valueAsNumber: m,
      mount: b,
      disabled: y,
    } = e._f;
    if (!b || y) return {};
    const g = a ? a[0] : i,
      x = (F) => {
        n &&
          g.reportValidity &&
          (g.setCustomValidity(Ki(F) ? "" : F || ""), g.reportValidity());
      },
      S = {},
      C = og(i),
      $ = cl(i),
      P = C || $,
      R =
        ((m || ng(i)) && rt(i.value) && rt(t)) ||
        t === "" ||
        i.value === "" ||
        (Array.isArray(t) && !t.length),
      M = BC.bind(null, w, r, S),
      L = (F, B, z, G = fn.maxLength, X = fn.minLength) => {
        const ne = F ? B : z;
        S[w] = { type: F ? G : X, message: ne, ref: i, ...M(F ? G : X, ne) };
      };
    if (
      o
        ? !Array.isArray(t) || !t.length
        : s &&
          ((!P && (R || kt(t))) ||
            (Ki(t) && !t) ||
            ($ && !HC(a).isValid) ||
            (C && !VC(a).isValid))
    ) {
      const { value: F, message: B } = Eu(s)
        ? { value: !!s, message: s }
        : hi(s);
      if (
        F &&
        ((S[w] = {
          type: fn.required,
          message: B,
          ref: g,
          ...M(fn.required, B),
        }),
        !r)
      )
        return x(B), S;
    }
    if (!R && (!kt(c) || !kt(d))) {
      let F, B;
      const z = hi(d),
        G = hi(c);
      if (!kt(t) && !isNaN(t)) {
        const X = i.valueAsNumber || (t && +t);
        kt(z.value) || (F = X > z.value), kt(G.value) || (B = X < G.value);
      } else {
        const X = i.valueAsDate || new Date(t),
          ne = (K) => new Date(new Date().toDateString() + " " + K),
          fe = i.type == "time",
          D = i.type == "week";
        Yr(z.value) &&
          t &&
          (F = fe
            ? ne(t) > ne(z.value)
            : D
            ? t > z.value
            : X > new Date(z.value)),
          Yr(G.value) &&
            t &&
            (B = fe
              ? ne(t) < ne(G.value)
              : D
              ? t < G.value
              : X < new Date(G.value));
      }
      if ((F || B) && (L(!!F, z.message, G.message, fn.max, fn.min), !r))
        return x(S[w].message), S;
    }
    if ((l || u) && !R && (Yr(t) || (o && Array.isArray(t)))) {
      const F = hi(l),
        B = hi(u),
        z = !kt(F.value) && t.length > F.value,
        G = !kt(B.value) && t.length < B.value;
      if ((z || G) && (L(z, F.message, B.message), !r))
        return x(S[w].message), S;
    }
    if (p && !R && Yr(t)) {
      const { value: F, message: B } = hi(p);
      if (
        hc(F) &&
        !t.match(F) &&
        ((S[w] = { type: fn.pattern, message: B, ref: i, ...M(fn.pattern, B) }),
        !r)
      )
        return x(B), S;
    }
    if (h) {
      if (qi(h)) {
        const F = await h(t),
          B = s1(F, g);
        if (B && ((S[w] = { ...B, ...M(fn.validate, B.message) }), !r))
          return x(B.message), S;
      } else if (vt(h)) {
        let F = {};
        for (const B in h) {
          if (!hr(F) && !r) break;
          const z = s1(await h[B](t), g, B);
          z &&
            ((F = { ...z, ...M(B, z.message) }), x(z.message), r && (S[w] = F));
        }
        if (!hr(F) && ((S[w] = { ref: g, ...F }), !r)) return S;
      }
    }
    return x(!0), S;
  };
function oI(e, t) {
  const r = t.slice(0, -1).length;
  let n = 0;
  for (; n < r; ) e = rt(e) ? n++ : e[t[n++]];
  return e;
}
function iI(e) {
  for (const t in e) if (!rt(e[t])) return !1;
  return !0;
}
function Rt(e, t) {
  const r = rg(t) ? [t] : zC(t),
    n = r.length == 1 ? e : oI(e, r),
    o = r[r.length - 1];
  let i;
  n && delete n[o];
  for (let a = 0; a < r.slice(0, -1).length; a++) {
    let s = -1,
      l;
    const u = r.slice(0, -(a + 1)),
      c = u.length - 1;
    for (a > 0 && (i = e); ++s < u.length; ) {
      const d = u[s];
      (l = l ? l[d] : e[d]),
        c === s &&
          ((vt(l) && hr(l)) || (Array.isArray(l) && iI(l))) &&
          (i ? delete i[d] : delete e[d]),
        (i = l);
    }
  }
  return e;
}
function Dd() {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (o) => {
      for (const i of e) i.next(o);
    },
    subscribe: (o) => (
      e.push(o),
      {
        unsubscribe: () => {
          e = e.filter((i) => i !== o);
        },
      }
    ),
    unsubscribe: () => {
      e = [];
    },
  };
}
var mc = (e) => kt(e) || !UC(e);
function ko(e, t) {
  if (mc(e) || mc(t)) return e === t;
  if (Di(e) && Di(t)) return e.getTime() === t.getTime();
  const r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (const o of r) {
    const i = e[o];
    if (!n.includes(o)) return !1;
    if (o !== "ref") {
      const a = t[o];
      if (
        (Di(i) && Di(a)) ||
        (vt(i) && vt(a)) ||
        (Array.isArray(i) && Array.isArray(a))
          ? !ko(i, a)
          : i !== a
      )
        return !1;
    }
  }
  return !0;
}
var mh = (e) => {
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  WC = (e) => e.type === "select-multiple",
  aI = (e) => og(e) || cl(e),
  Fd = (e) => mh(e) && e.isConnected,
  KC = (e) => {
    for (const t in e) if (qi(e[t])) return !0;
    return !1;
  };
function vc(e, t = {}) {
  const r = Array.isArray(e);
  if (vt(e) || r)
    for (const n in e)
      Array.isArray(e[n]) || (vt(e[n]) && !KC(e[n]))
        ? ((t[n] = Array.isArray(e[n]) ? [] : {}), vc(e[n], t[n]))
        : kt(e[n]) || (t[n] = !0);
  return t;
}
function qC(e, t, r) {
  const n = Array.isArray(e);
  if (vt(e) || n)
    for (const o in e)
      Array.isArray(e[o]) || (vt(e[o]) && !KC(e[o]))
        ? rt(t) || mc(r[o])
          ? (r[o] = Array.isArray(e[o]) ? vc(e[o], []) : { ...vc(e[o]) })
          : qC(e[o], kt(t) ? {} : t[o], r[o])
        : ko(e[o], t[o])
        ? delete r[o]
        : (r[o] = !0);
  return r;
}
var Ld = (e, t) => qC(e, t, vc(t)),
  GC = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: n }) =>
    rt(e)
      ? e
      : t
      ? e === ""
        ? NaN
        : e && +e
      : r && Yr(e)
      ? new Date(e)
      : n
      ? n(e)
      : e;
function Md(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : t.disabled))
    return ng(t)
      ? t.files
      : og(t)
      ? VC(e.refs).value
      : WC(t)
      ? [...t.selectedOptions].map(({ value: r }) => r)
      : cl(t)
      ? HC(e.refs).value
      : GC(rt(t.value) ? e.ref.value : t.value, e);
}
var sI = (e, t, r, n) => {
    const o = {};
    for (const i of e) {
      const a = Q(t, i);
      a && Ie(o, i, a._f);
    }
    return {
      criteriaMode: r,
      names: [...e],
      fields: o,
      shouldUseNativeValidation: n,
    };
  },
  Wa = (e) =>
    rt(e)
      ? e
      : hc(e)
      ? e.source
      : vt(e)
      ? hc(e.value)
        ? e.value.source
        : e.value
      : e,
  lI = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function u1(e, t, r) {
  const n = Q(e, r);
  if (n || rg(r)) return { error: n, name: r };
  const o = r.split(".");
  for (; o.length; ) {
    const i = o.join("."),
      a = Q(t, i),
      s = Q(e, i);
    if (a && !Array.isArray(a) && r !== i) return { name: r };
    if (s && s.type) return { name: i, error: s };
    o.pop();
  }
  return { name: r };
}
var uI = (e, t, r, n, o) =>
    o.isOnAll
      ? !1
      : !r && o.isOnTouch
      ? !(t || e)
      : (r ? n.isOnBlur : o.isOnBlur)
      ? !e
      : (r ? n.isOnChange : o.isOnChange)
      ? e
      : !0,
  cI = (e, t) => !fl(Q(e, t)).length && Rt(e, t);
const fI = {
  mode: Lr.onSubmit,
  reValidateMode: Lr.onChange,
  shouldFocusError: !0,
};
function dI(e = {}, t) {
  let r = { ...fI, ...e };
  const n = e.resetOptions && e.resetOptions.keepDirtyValues;
  let o = {
      submitCount: 0,
      isDirty: !1,
      isLoading: !0,
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      errors: {},
    },
    i = {},
    a = vt(r.defaultValues) ? So(r.defaultValues) || {} : {},
    s = r.shouldUnregister ? {} : So(a),
    l = { action: !1, mount: !1, watch: !1 },
    u = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    c,
    d = 0;
  const p = {
      isDirty: !1,
      dirtyFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    h = { watch: Dd(), array: Dd(), state: Dd() },
    w = r1(r.mode),
    m = r1(r.reValidateMode),
    b = r.criteriaMode === Lr.all,
    y = (O) => (A) => {
      clearTimeout(d), (d = window.setTimeout(O, A));
    },
    g = async () => {
      if (p.isValid) {
        const O = r.resolver ? hr((await M()).errors) : await F(i, !0);
        O !== o.isValid && ((o.isValid = O), h.state.next({ isValid: O }));
      }
    },
    x = (O) => p.isValidating && h.state.next({ isValidating: O }),
    S = (O, A = [], k, V, N = !0, _ = !0) => {
      if (V && k) {
        if (((l.action = !0), _ && Array.isArray(Q(i, O)))) {
          const T = k(Q(i, O), V.argA, V.argB);
          N && Ie(i, O, T);
        }
        if (_ && Array.isArray(Q(o.errors, O))) {
          const T = k(Q(o.errors, O), V.argA, V.argB);
          N && Ie(o.errors, O, T), cI(o.errors, O);
        }
        if (p.touchedFields && _ && Array.isArray(Q(o.touchedFields, O))) {
          const T = k(Q(o.touchedFields, O), V.argA, V.argB);
          N && Ie(o.touchedFields, O, T);
        }
        p.dirtyFields && (o.dirtyFields = Ld(a, s)),
          h.state.next({
            name: O,
            isDirty: z(O, A),
            dirtyFields: o.dirtyFields,
            errors: o.errors,
            isValid: o.isValid,
          });
      } else Ie(s, O, A);
    },
    C = (O, A) => {
      Ie(o.errors, O, A), h.state.next({ errors: o.errors });
    },
    $ = (O, A, k, V) => {
      const N = Q(i, O);
      if (N) {
        const _ = Q(s, O, rt(k) ? Q(a, O) : k);
        rt(_) || (V && V.defaultChecked) || A
          ? Ie(s, O, A ? _ : Md(N._f))
          : ne(O, _),
          l.mount && g();
      }
    },
    P = (O, A, k, V, N) => {
      let _ = !1,
        T = !1;
      const H = { name: O };
      if (!k || V) {
        p.isDirty &&
          ((T = o.isDirty),
          (o.isDirty = H.isDirty = z()),
          (_ = T !== H.isDirty));
        const U = ko(Q(a, O), A);
        (T = Q(o.dirtyFields, O)),
          U ? Rt(o.dirtyFields, O) : Ie(o.dirtyFields, O, !0),
          (H.dirtyFields = o.dirtyFields),
          (_ = _ || (p.dirtyFields && T !== !U));
      }
      if (k) {
        const U = Q(o.touchedFields, O);
        U ||
          (Ie(o.touchedFields, O, k),
          (H.touchedFields = o.touchedFields),
          (_ = _ || (p.touchedFields && U !== k)));
      }
      return _ && N && h.state.next(H), _ ? H : {};
    },
    R = (O, A, k, V) => {
      const N = Q(o.errors, O),
        _ = p.isValid && Ki(A) && o.isValid !== A;
      if (
        (e.delayError && k
          ? ((c = y(() => C(O, k))), c(e.delayError))
          : (clearTimeout(d),
            (c = null),
            k ? Ie(o.errors, O, k) : Rt(o.errors, O)),
        (k ? !ko(N, k) : N) || !hr(V) || _)
      ) {
        const T = {
          ...V,
          ...(_ && Ki(A) ? { isValid: A } : {}),
          errors: o.errors,
          name: O,
        };
        (o = { ...o, ...T }), h.state.next(T);
      }
      x(!1);
    },
    M = async (O) =>
      await r.resolver(
        s,
        r.context,
        sI(O || u.mount, i, r.criteriaMode, r.shouldUseNativeValidation)
      ),
    L = async (O) => {
      const { errors: A } = await M();
      if (O)
        for (const k of O) {
          const V = Q(A, k);
          V ? Ie(o.errors, k, V) : Rt(o.errors, k);
        }
      else o.errors = A;
      return A;
    },
    F = async (O, A, k = { valid: !0 }) => {
      for (const V in O) {
        const N = O[V];
        if (N) {
          const { _f: _, ...T } = N;
          if (_) {
            const H = u.array.has(_.name),
              U = await l1(N, Q(s, _.name), b, r.shouldUseNativeValidation, H);
            if (U[_.name] && ((k.valid = !1), A)) break;
            !A &&
              (Q(U, _.name)
                ? H
                  ? nI(o.errors, U, _.name)
                  : Ie(o.errors, _.name, U[_.name])
                : Rt(o.errors, _.name));
          }
          T && (await F(T, A, k));
        }
      }
      return k.valid;
    },
    B = () => {
      for (const O of u.unMount) {
        const A = Q(i, O);
        A &&
          (A._f.refs ? A._f.refs.every((k) => !Fd(k)) : !Fd(A._f.ref)) &&
          ye(O);
      }
      u.unMount = new Set();
    },
    z = (O, A) => (O && A && Ie(s, O, A), !ko(oe(), a)),
    G = (O, A, k) =>
      tI(O, u, { ...(l.mount ? s : rt(A) ? a : Yr(O) ? { [O]: A } : A) }, k, A),
    X = (O) => fl(Q(l.mount ? s : a, O, e.shouldUnregister ? Q(a, O, []) : [])),
    ne = (O, A, k = {}) => {
      const V = Q(i, O);
      let N = A;
      if (V) {
        const _ = V._f;
        _ &&
          (!_.disabled && Ie(s, O, GC(A, _)),
          (N = ph && mh(_.ref) && kt(A) ? "" : A),
          WC(_.ref)
            ? [..._.ref.options].forEach(
                (T) => (T.selected = N.includes(T.value))
              )
            : _.refs
            ? cl(_.ref)
              ? _.refs.length > 1
                ? _.refs.forEach(
                    (T) =>
                      (!T.defaultChecked || !T.disabled) &&
                      (T.checked = Array.isArray(N)
                        ? !!N.find((H) => H === T.value)
                        : N === T.value)
                  )
                : _.refs[0] && (_.refs[0].checked = !!N)
              : _.refs.forEach((T) => (T.checked = T.value === N))
            : ng(_.ref)
            ? (_.ref.value = "")
            : ((_.ref.value = N), _.ref.type || h.watch.next({ name: O })));
      }
      (k.shouldDirty || k.shouldTouch) &&
        P(O, N, k.shouldTouch, k.shouldDirty, !0),
        k.shouldValidate && W(O);
    },
    fe = (O, A, k) => {
      for (const V in A) {
        const N = A[V],
          _ = `${O}.${V}`,
          T = Q(i, _);
        (u.array.has(O) || !mc(N) || (T && !T._f)) && !Di(N)
          ? fe(_, N, k)
          : ne(_, N, k);
      }
    },
    D = (O, A, k = {}) => {
      const V = Q(i, O),
        N = u.array.has(O),
        _ = So(A);
      Ie(s, O, _),
        N
          ? (h.array.next({ name: O, values: s }),
            (p.isDirty || p.dirtyFields) &&
              k.shouldDirty &&
              ((o.dirtyFields = Ld(a, s)),
              h.state.next({
                name: O,
                dirtyFields: o.dirtyFields,
                isDirty: z(O, _),
              })))
          : V && !V._f && !kt(_)
          ? fe(O, _, k)
          : ne(O, _, k),
        n1(O, u) && h.state.next({}),
        h.watch.next({ name: O }),
        !l.mount && t();
    },
    K = async (O) => {
      const A = O.target;
      let k = A.name;
      const V = Q(i, k),
        N = () => (A.type ? Md(V._f) : Y4(O));
      if (V) {
        let _, T;
        const H = N(),
          U = O.type === t1.BLUR || O.type === t1.FOCUS_OUT,
          ae =
            (!lI(V._f) && !r.resolver && !Q(o.errors, k) && !V._f.deps) ||
            uI(U, Q(o.touchedFields, k), o.isSubmitted, m, w),
          se = n1(k, u, U);
        Ie(s, k, H),
          U
            ? (V._f.onBlur && V._f.onBlur(O), c && c(0))
            : V._f.onChange && V._f.onChange(O);
        const q = P(k, H, U, !1),
          J = !hr(q) || se;
        if ((!U && h.watch.next({ name: k, type: O.type }), ae))
          return (
            p.isValid && g(), J && h.state.next({ name: k, ...(se ? {} : q) })
          );
        if ((!U && se && h.state.next({}), x(!0), r.resolver)) {
          const { errors: ke } = await M([k]),
            de = u1(o.errors, i, k),
            Ee = u1(ke, i, de.name || k);
          (_ = Ee.error), (k = Ee.name), (T = hr(ke));
        } else
          (_ = (await l1(V, Q(s, k), b, r.shouldUseNativeValidation))[k]),
            _ ? (T = !1) : p.isValid && (T = await F(i, !0));
        V._f.deps && W(V._f.deps), R(k, T, _, q);
      }
    },
    W = async (O, A = {}) => {
      let k, V;
      const N = kd(O);
      if ((x(!0), r.resolver)) {
        const _ = await L(rt(O) ? O : N);
        (k = hr(_)), (V = O ? !N.some((T) => Q(_, T)) : k);
      } else
        O
          ? ((V = (
              await Promise.all(
                N.map(async (_) => {
                  const T = Q(i, _);
                  return await F(T && T._f ? { [_]: T } : T);
                })
              )
            ).every(Boolean)),
            !(!V && !o.isValid) && g())
          : (V = k = await F(i));
      return (
        h.state.next({
          ...(!Yr(O) || (p.isValid && k !== o.isValid) ? {} : { name: O }),
          ...(r.resolver || !O ? { isValid: k } : {}),
          errors: o.errors,
          isValidating: !1,
        }),
        A.shouldFocus &&
          !V &&
          hh(i, (_) => _ && Q(o.errors, _), O ? N : u.mount),
        V
      );
    },
    oe = (O) => {
      const A = { ...a, ...(l.mount ? s : {}) };
      return rt(O) ? A : Yr(O) ? Q(A, O) : O.map((k) => Q(A, k));
    },
    le = (O, A) => ({
      invalid: !!Q((A || o).errors, O),
      isDirty: !!Q((A || o).dirtyFields, O),
      isTouched: !!Q((A || o).touchedFields, O),
      error: Q((A || o).errors, O),
    }),
    _e = (O) => {
      O ? kd(O).forEach((A) => Rt(o.errors, A)) : (o.errors = {}),
        h.state.next({ errors: o.errors });
    },
    Re = (O, A, k) => {
      const V = (Q(i, O, { _f: {} })._f || {}).ref;
      Ie(o.errors, O, { ...A, ref: V }),
        h.state.next({ name: O, errors: o.errors, isValid: !1 }),
        k && k.shouldFocus && V && V.focus && V.focus();
    },
    ie = (O, A) =>
      qi(O)
        ? h.watch.subscribe({ next: (k) => O(G(void 0, A), k) })
        : G(O, A, !0),
    ye = (O, A = {}) => {
      for (const k of O ? kd(O) : u.mount)
        u.mount.delete(k),
          u.array.delete(k),
          Q(i, k) &&
            (A.keepValue || (Rt(i, k), Rt(s, k)),
            !A.keepError && Rt(o.errors, k),
            !A.keepDirty && Rt(o.dirtyFields, k),
            !A.keepTouched && Rt(o.touchedFields, k),
            !r.shouldUnregister && !A.keepDefaultValue && Rt(a, k));
      h.watch.next({}),
        h.state.next({ ...o, ...(A.keepDirty ? { isDirty: z() } : {}) }),
        !A.keepIsValid && g();
    },
    Se = (O, A = {}) => {
      let k = Q(i, O);
      const V = Ki(A.disabled);
      return (
        Ie(i, O, {
          ...(k || {}),
          _f: {
            ...(k && k._f ? k._f : { ref: { name: O } }),
            name: O,
            mount: !0,
            ...A,
          },
        }),
        u.mount.add(O),
        k
          ? V && Ie(s, O, A.disabled ? void 0 : Q(s, O, Md(k._f)))
          : $(O, !0, A.value),
        {
          ...(V ? { disabled: A.disabled } : {}),
          ...(r.shouldUseNativeValidation
            ? {
                required: !!A.required,
                min: Wa(A.min),
                max: Wa(A.max),
                minLength: Wa(A.minLength),
                maxLength: Wa(A.maxLength),
                pattern: Wa(A.pattern),
              }
            : {}),
          name: O,
          onChange: K,
          onBlur: K,
          ref: (N) => {
            if (N) {
              Se(O, A), (k = Q(i, O));
              const _ =
                  (rt(N.value) &&
                    N.querySelectorAll &&
                    N.querySelectorAll("input,select,textarea")[0]) ||
                  N,
                T = aI(_),
                H = k._f.refs || [];
              if (T ? H.find((U) => U === _) : _ === k._f.ref) return;
              Ie(i, O, {
                _f: {
                  ...k._f,
                  ...(T
                    ? {
                        refs: [
                          ...H.filter(Fd),
                          _,
                          ...(Array.isArray(Q(a, O)) ? [{}] : []),
                        ],
                        ref: { type: _.type, name: O },
                      }
                    : { ref: _ }),
                },
              }),
                $(O, !1, void 0, _);
            } else
              (k = Q(i, O, {})),
                k._f && (k._f.mount = !1),
                (r.shouldUnregister || A.shouldUnregister) &&
                  !(X4(u.array, O) && l.action) &&
                  u.unMount.add(O);
          },
        }
      );
    },
    Xe = () => r.shouldFocusError && hh(i, (O) => O && Q(o.errors, O), u.mount),
    it = (O, A) => async (k) => {
      k && (k.preventDefault && k.preventDefault(), k.persist && k.persist());
      let V = !0,
        N = So(s);
      h.state.next({ isSubmitting: !0 });
      try {
        if (r.resolver) {
          const { errors: _, values: T } = await M();
          (o.errors = _), (N = T);
        } else await F(i);
        hr(o.errors)
          ? (h.state.next({ errors: {}, isSubmitting: !0 }), await O(N, k))
          : (A && (await A({ ...o.errors }, k)), Xe());
      } catch (_) {
        throw ((V = !1), _);
      } finally {
        (o.isSubmitted = !0),
          h.state.next({
            isSubmitted: !0,
            isSubmitting: !1,
            isSubmitSuccessful: hr(o.errors) && V,
            submitCount: o.submitCount + 1,
            errors: o.errors,
          });
      }
    },
    Le = (O, A = {}) => {
      Q(i, O) &&
        (rt(A.defaultValue)
          ? D(O, Q(a, O))
          : (D(O, A.defaultValue), Ie(a, O, A.defaultValue)),
        A.keepTouched || Rt(o.touchedFields, O),
        A.keepDirty ||
          (Rt(o.dirtyFields, O),
          (o.isDirty = A.defaultValue ? z(O, Q(a, O)) : z())),
        A.keepError || (Rt(o.errors, O), p.isValid && g()),
        h.state.next({ ...o }));
    },
    Ae = (O, A = {}) => {
      const k = O || a,
        V = So(k),
        N = O && !hr(O) ? V : a;
      if ((A.keepDefaultValues || (a = k), !A.keepValues)) {
        if (A.keepDirtyValues || n)
          for (const _ of u.mount)
            Q(o.dirtyFields, _) ? Ie(N, _, Q(s, _)) : D(_, Q(N, _));
        else {
          if (ph && rt(O))
            for (const _ of u.mount) {
              const T = Q(i, _);
              if (T && T._f) {
                const H = Array.isArray(T._f.refs) ? T._f.refs[0] : T._f.ref;
                if (mh(H)) {
                  const U = H.closest("form");
                  if (U) {
                    U.reset();
                    break;
                  }
                }
              }
            }
          i = {};
        }
        (s = e.shouldUnregister ? (A.keepDefaultValues ? So(a) : {}) : V),
          h.array.next({ values: N }),
          h.watch.next({ values: N });
      }
      (u = {
        mount: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        !l.mount && t(),
        (l.mount = !p.isValid || !!A.keepIsValid),
        (l.watch = !!e.shouldUnregister),
        h.state.next({
          submitCount: A.keepSubmitCount ? o.submitCount : 0,
          isDirty:
            A.keepDirty || A.keepDirtyValues
              ? o.isDirty
              : !!(A.keepDefaultValues && !ko(O, a)),
          isSubmitted: A.keepIsSubmitted ? o.isSubmitted : !1,
          dirtyFields:
            A.keepDirty || A.keepDirtyValues
              ? o.dirtyFields
              : A.keepDefaultValues && O
              ? Ld(a, O)
              : {},
          touchedFields: A.keepTouched ? o.touchedFields : {},
          errors: A.keepErrors ? o.errors : {},
          isSubmitting: !1,
          isSubmitSuccessful: !1,
        });
    },
    yt = (O, A) => Ae(qi(O) ? O(s) : O, A),
    he = (O, A = {}) => {
      const k = Q(i, O),
        V = k && k._f;
      if (V) {
        const N = V.refs ? V.refs[0] : V.ref;
        N.focus && (N.focus(), A.shouldSelect && N.select());
      }
    };
  return (
    qi(r.defaultValues) &&
      r.defaultValues().then((O) => {
        yt(O, r.resetOptions), h.state.next({ isLoading: !1 });
      }),
    {
      control: {
        register: Se,
        unregister: ye,
        getFieldState: le,
        _executeSchema: M,
        _focusError: Xe,
        _getWatch: G,
        _getDirty: z,
        _updateValid: g,
        _removeUnmounted: B,
        _updateFieldArray: S,
        _getFieldArray: X,
        _reset: Ae,
        _subjects: h,
        _proxyFormState: p,
        get _fields() {
          return i;
        },
        get _formValues() {
          return s;
        },
        get _stateFlags() {
          return l;
        },
        set _stateFlags(O) {
          l = O;
        },
        get _defaultValues() {
          return a;
        },
        get _names() {
          return u;
        },
        set _names(O) {
          u = O;
        },
        get _formState() {
          return o;
        },
        set _formState(O) {
          o = O;
        },
        get _options() {
          return r;
        },
        set _options(O) {
          r = { ...r, ...O };
        },
      },
      trigger: W,
      register: Se,
      handleSubmit: it,
      watch: ie,
      setValue: D,
      getValues: oe,
      reset: yt,
      resetField: Le,
      clearErrors: _e,
      unregister: ye,
      setError: Re,
      setFocus: he,
      getFieldState: le,
    }
  );
}
function dl(e = {}) {
  const t = be.useRef(),
    [r, n] = be.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: !0,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      errors: {},
      defaultValues: qi(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current ||
    (t.current = { ...dI(e, () => n((i) => ({ ...i }))), formState: r });
  const o = t.current.control;
  return (
    (o._options = e),
    eI({
      subject: o._subjects.state,
      next: (i) => {
        Z4(i, o._proxyFormState, !0) &&
          ((o._formState = { ...o._formState, ...i }), n({ ...o._formState }));
      },
    }),
    be.useEffect(() => {
      o._stateFlags.mount ||
        (o._proxyFormState.isValid && o._updateValid(),
        (o._stateFlags.mount = !0)),
        o._stateFlags.watch &&
          ((o._stateFlags.watch = !1), o._subjects.state.next({})),
        o._removeUnmounted();
    }),
    be.useEffect(() => {
      e.values &&
        !ko(e.values, o._defaultValues) &&
        o._reset(e.values, o._options.resetOptions);
    }, [e.values, o]),
    be.useEffect(() => {
      r.submitCount && o._focusError();
    }, [o, r.submitCount]),
    (t.current.formState = J4(r, o)),
    t.current
  );
}
var c1 = function (e, t, r) {
    if (e && "reportValidity" in e) {
      var n = Q(r, t);
      e.setCustomValidity((n && n.message) || ""), e.reportValidity();
    }
  },
  YC = function (e, t) {
    var r = function (o) {
      var i = t.fields[o];
      i && i.ref && "reportValidity" in i.ref
        ? c1(i.ref, o, e)
        : i.refs &&
          i.refs.forEach(function (a) {
            return c1(a, o, e);
          });
    };
    for (var n in t.fields) r(n);
  },
  pI = function (e, t) {
    t.shouldUseNativeValidation && YC(e, t);
    var r = {};
    for (var n in e) {
      var o = Q(t.fields, n);
      Ie(r, n, Object.assign(e[n], { ref: o && o.ref }));
    }
    return r;
  },
  pl = function (e, t, r) {
    return (
      t === void 0 && (t = {}),
      r === void 0 && (r = {}),
      function (n, o, i) {
        try {
          return Promise.resolve(
            (function (a, s) {
              try {
                var l =
                  (t.context,
                  Promise.resolve(
                    e[r.mode === "sync" ? "validateSync" : "validate"](
                      n,
                      Object.assign({ abortEarly: !1 }, t, { context: o })
                    )
                  ).then(function (u) {
                    return (
                      i.shouldUseNativeValidation && YC({}, i),
                      { values: r.rawValues ? n : u, errors: {} }
                    );
                  }));
              } catch (u) {
                return s(u);
              }
              return l && l.then ? l.then(void 0, s) : l;
            })(0, function (a) {
              if (!a.inner) throw a;
              return {
                values: {},
                errors: pI(
                  ((s = a),
                  (l =
                    !i.shouldUseNativeValidation && i.criteriaMode === "all"),
                  (s.inner || []).reduce(function (u, c) {
                    if (
                      (u[c.path] ||
                        (u[c.path] = { message: c.message, type: c.type }),
                      l)
                    ) {
                      var d = u[c.path].types,
                        p = d && d[c.type];
                      u[c.path] = BC(
                        c.path,
                        l,
                        u,
                        c.type,
                        p ? [].concat(p, c.message) : c.message
                      );
                    }
                    return u;
                  }, {})),
                  i
                ),
              };
              var s, l;
            })
          );
        } catch (a) {
          return Promise.reject(a);
        }
      }
    );
  },
  vh;
try {
  vh = Map;
} catch {}
var gh;
try {
  gh = Set;
} catch {}
function QC(e, t, r) {
  if (!e || typeof e != "object" || typeof e == "function") return e;
  if (e.nodeType && "cloneNode" in e) return e.cloneNode(!0);
  if (e instanceof Date) return new Date(e.getTime());
  if (e instanceof RegExp) return new RegExp(e);
  if (Array.isArray(e)) return e.map(yh);
  if (vh && e instanceof vh) return new Map(Array.from(e.entries()));
  if (gh && e instanceof gh) return new Set(Array.from(e.values()));
  if (e instanceof Object) {
    t.push(e);
    var n = Object.create(e);
    r.push(n);
    for (var o in e) {
      var i = t.findIndex(function (a) {
        return a === e[o];
      });
      n[o] = i > -1 ? r[i] : QC(e[o], t, r);
    }
    return n;
  }
  return e;
}
function yh(e) {
  return QC(e, [], []);
}
const hI = Object.prototype.toString,
  mI = Error.prototype.toString,
  vI = RegExp.prototype.toString,
  gI = typeof Symbol != "undefined" ? Symbol.prototype.toString : () => "",
  yI = /^Symbol\((.*)\)(.*)$/;
function wI(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function f1(e, t = !1) {
  if (e == null || e === !0 || e === !1) return "" + e;
  const r = typeof e;
  if (r === "number") return wI(e);
  if (r === "string") return t ? `"${e}"` : e;
  if (r === "function") return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol") return gI.call(e).replace(yI, "Symbol($1)");
  const n = hI.call(e).slice(8, -1);
  return n === "Date"
    ? isNaN(e.getTime())
      ? "" + e
      : e.toISOString(e)
    : n === "Error" || e instanceof Error
    ? "[" + mI.call(e) + "]"
    : n === "RegExp"
    ? vI.call(e)
    : null;
}
function Ws(e, t) {
  let r = f1(e, t);
  return r !== null
    ? r
    : JSON.stringify(
        e,
        function (n, o) {
          let i = f1(this[n], t);
          return i !== null ? i : o;
        },
        2
      );
}
let Eo = {
    default: "${path} is invalid",
    required: "${path} is a required field",
    oneOf: "${path} must be one of the following values: ${values}",
    notOneOf: "${path} must not be one of the following values: ${values}",
    notType: ({ path: e, type: t, value: r, originalValue: n }) => {
      let o = n != null && n !== r,
        i =
          `${e} must be a \`${t}\` type, but the final value was: \`${Ws(
            r,
            !0
          )}\`` + (o ? ` (cast from the value \`${Ws(n, !0)}\`).` : ".");
      return (
        r === null &&
          (i +=
            '\n If "null" is intended as an empty value be sure to mark the schema as `.nullable()`'),
        i
      );
    },
    defined: "${path} must be defined",
  },
  Tr = {
    length: "${path} must be exactly ${length} characters",
    min: "${path} must be at least ${min} characters",
    max: "${path} must be at most ${max} characters",
    matches: '${path} must match the following: "${regex}"',
    email: "${path} must be a valid email",
    url: "${path} must be a valid URL",
    uuid: "${path} must be a valid UUID",
    trim: "${path} must be a trimmed string",
    lowercase: "${path} must be a lowercase string",
    uppercase: "${path} must be a upper case string",
  },
  Mn = {
    min: "${path} must be greater than or equal to ${min}",
    max: "${path} must be less than or equal to ${max}",
    lessThan: "${path} must be less than ${less}",
    moreThan: "${path} must be greater than ${more}",
    positive: "${path} must be a positive number",
    negative: "${path} must be a negative number",
    integer: "${path} must be an integer",
  },
  wh = {
    min: "${path} field must be later than ${min}",
    max: "${path} field must be at earlier than ${max}",
  },
  xI = { isValue: "${path} field must be ${value}" },
  xh = { noUnknown: "${path} field has unspecified keys: ${unknown}" },
  bI = {
    min: "${path} field must have at least ${min} items",
    max: "${path} field must have less than or equal to ${max} items",
    length: "${path} must have ${length} items",
  };
Object.assign(Object.create(null), {
  mixed: Eo,
  string: Tr,
  number: Mn,
  date: wh,
  object: xh,
  array: bI,
  boolean: xI,
});
var SI = Object.prototype,
  EI = SI.hasOwnProperty;
function CI(e, t) {
  return e != null && EI.call(e, t);
}
var OI = CI,
  _I = Array.isArray,
  vo = _I,
  $I = typeof yl == "object" && yl && yl.Object === Object && yl,
  XC = $I,
  PI = XC,
  NI = typeof self == "object" && self && self.Object === Object && self,
  TI = PI || NI || Function("return this")(),
  kn = TI,
  RI = kn,
  AI = RI.Symbol,
  $f = AI,
  d1 = $f,
  JC = Object.prototype,
  kI = JC.hasOwnProperty,
  DI = JC.toString,
  Ka = d1 ? d1.toStringTag : void 0;
function FI(e) {
  var t = kI.call(e, Ka),
    r = e[Ka];
  try {
    e[Ka] = void 0;
    var n = !0;
  } catch {}
  var o = DI.call(e);
  return n && (t ? (e[Ka] = r) : delete e[Ka]), o;
}
var LI = FI,
  MI = Object.prototype,
  II = MI.toString;
function jI(e) {
  return II.call(e);
}
var UI = jI,
  p1 = $f,
  BI = LI,
  zI = UI,
  HI = "[object Null]",
  VI = "[object Undefined]",
  h1 = p1 ? p1.toStringTag : void 0;
function WI(e) {
  return e == null
    ? e === void 0
      ? VI
      : HI
    : h1 && h1 in Object(e)
    ? BI(e)
    : zI(e);
}
var hl = WI;
function KI(e) {
  return e != null && typeof e == "object";
}
var ml = KI,
  qI = hl,
  GI = ml,
  YI = "[object Symbol]";
function QI(e) {
  return typeof e == "symbol" || (GI(e) && qI(e) == YI);
}
var ig = QI,
  XI = vo,
  JI = ig,
  ZI = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  ej = /^\w*$/;
function tj(e, t) {
  if (XI(e)) return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || JI(e)
    ? !0
    : ej.test(e) || !ZI.test(e) || (t != null && e in Object(t));
}
var ag = tj;
function rj(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var sg = rj,
  nj = hl,
  oj = sg,
  ij = "[object AsyncFunction]",
  aj = "[object Function]",
  sj = "[object GeneratorFunction]",
  lj = "[object Proxy]";
function uj(e) {
  if (!oj(e)) return !1;
  var t = nj(e);
  return t == aj || t == sj || t == ij || t == lj;
}
var ZC = uj,
  cj = kn,
  fj = cj["__core-js_shared__"],
  dj = fj,
  Id = dj,
  m1 = (function () {
    var e = /[^.]+$/.exec((Id && Id.keys && Id.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
function pj(e) {
  return !!m1 && m1 in e;
}
var hj = pj,
  mj = Function.prototype,
  vj = mj.toString;
function gj(e) {
  if (e != null) {
    try {
      return vj.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var eO = gj,
  yj = ZC,
  wj = hj,
  xj = sg,
  bj = eO,
  Sj = /[\\^$.*+?()[\]{}|]/g,
  Ej = /^\[object .+?Constructor\]$/,
  Cj = Function.prototype,
  Oj = Object.prototype,
  _j = Cj.toString,
  $j = Oj.hasOwnProperty,
  Pj = RegExp(
    "^" +
      _j
        .call($j)
        .replace(Sj, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
function Nj(e) {
  if (!xj(e) || wj(e)) return !1;
  var t = yj(e) ? Pj : Ej;
  return t.test(bj(e));
}
var Tj = Nj;
function Rj(e, t) {
  return e == null ? void 0 : e[t];
}
var Aj = Rj,
  kj = Tj,
  Dj = Aj;
function Fj(e, t) {
  var r = Dj(e, t);
  return kj(r) ? r : void 0;
}
var ai = Fj,
  Lj = ai,
  Mj = Lj(Object, "create"),
  Pf = Mj,
  v1 = Pf;
function Ij() {
  (this.__data__ = v1 ? v1(null) : {}), (this.size = 0);
}
var jj = Ij;
function Uj(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var Bj = Uj,
  zj = Pf,
  Hj = "__lodash_hash_undefined__",
  Vj = Object.prototype,
  Wj = Vj.hasOwnProperty;
function Kj(e) {
  var t = this.__data__;
  if (zj) {
    var r = t[e];
    return r === Hj ? void 0 : r;
  }
  return Wj.call(t, e) ? t[e] : void 0;
}
var qj = Kj,
  Gj = Pf,
  Yj = Object.prototype,
  Qj = Yj.hasOwnProperty;
function Xj(e) {
  var t = this.__data__;
  return Gj ? t[e] !== void 0 : Qj.call(t, e);
}
var Jj = Xj,
  Zj = Pf,
  e5 = "__lodash_hash_undefined__";
function t5(e, t) {
  var r = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (r[e] = Zj && t === void 0 ? e5 : t),
    this
  );
}
var r5 = t5,
  n5 = jj,
  o5 = Bj,
  i5 = qj,
  a5 = Jj,
  s5 = r5;
function ba(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ba.prototype.clear = n5;
ba.prototype.delete = o5;
ba.prototype.get = i5;
ba.prototype.has = a5;
ba.prototype.set = s5;
var l5 = ba;
function u5() {
  (this.__data__ = []), (this.size = 0);
}
var c5 = u5;
function f5(e, t) {
  return e === t || (e !== e && t !== t);
}
var tO = f5,
  d5 = tO;
function p5(e, t) {
  for (var r = e.length; r--; ) if (d5(e[r][0], t)) return r;
  return -1;
}
var Nf = p5,
  h5 = Nf,
  m5 = Array.prototype,
  v5 = m5.splice;
function g5(e) {
  var t = this.__data__,
    r = h5(t, e);
  if (r < 0) return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : v5.call(t, r, 1), --this.size, !0;
}
var y5 = g5,
  w5 = Nf;
function x5(e) {
  var t = this.__data__,
    r = w5(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var b5 = x5,
  S5 = Nf;
function E5(e) {
  return S5(this.__data__, e) > -1;
}
var C5 = E5,
  O5 = Nf;
function _5(e, t) {
  var r = this.__data__,
    n = O5(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
}
var $5 = _5,
  P5 = c5,
  N5 = y5,
  T5 = b5,
  R5 = C5,
  A5 = $5;
function Sa(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Sa.prototype.clear = P5;
Sa.prototype.delete = N5;
Sa.prototype.get = T5;
Sa.prototype.has = R5;
Sa.prototype.set = A5;
var Tf = Sa,
  k5 = ai,
  D5 = kn,
  F5 = k5(D5, "Map"),
  lg = F5,
  g1 = l5,
  L5 = Tf,
  M5 = lg;
function I5() {
  (this.size = 0),
    (this.__data__ = {
      hash: new g1(),
      map: new (M5 || L5)(),
      string: new g1(),
    });
}
var j5 = I5;
function U5(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? e !== "__proto__"
    : e === null;
}
var B5 = U5,
  z5 = B5;
function H5(e, t) {
  var r = e.__data__;
  return z5(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Rf = H5,
  V5 = Rf;
function W5(e) {
  var t = V5(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
var K5 = W5,
  q5 = Rf;
function G5(e) {
  return q5(this, e).get(e);
}
var Y5 = G5,
  Q5 = Rf;
function X5(e) {
  return Q5(this, e).has(e);
}
var J5 = X5,
  Z5 = Rf;
function e6(e, t) {
  var r = Z5(this, e),
    n = r.size;
  return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
}
var t6 = e6,
  r6 = j5,
  n6 = K5,
  o6 = Y5,
  i6 = J5,
  a6 = t6;
function Ea(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ea.prototype.clear = r6;
Ea.prototype.delete = n6;
Ea.prototype.get = o6;
Ea.prototype.has = i6;
Ea.prototype.set = a6;
var ug = Ea,
  rO = ug,
  s6 = "Expected a function";
function cg(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function"))
    throw new TypeError(s6);
  var r = function () {
    var n = arguments,
      o = t ? t.apply(this, n) : n[0],
      i = r.cache;
    if (i.has(o)) return i.get(o);
    var a = e.apply(this, n);
    return (r.cache = i.set(o, a) || i), a;
  };
  return (r.cache = new (cg.Cache || rO)()), r;
}
cg.Cache = rO;
var l6 = cg,
  u6 = l6,
  c6 = 500;
function f6(e) {
  var t = u6(e, function (n) {
      return r.size === c6 && r.clear(), n;
    }),
    r = t.cache;
  return t;
}
var d6 = f6,
  p6 = d6,
  h6 =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  m6 = /\\(\\)?/g,
  v6 = p6(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(""),
      e.replace(h6, function (r, n, o, i) {
        t.push(o ? i.replace(m6, "$1") : n || r);
      }),
      t
    );
  }),
  g6 = v6;
function y6(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
    o[r] = t(e[r], r, e);
  return o;
}
var w6 = y6,
  y1 = $f,
  x6 = w6,
  b6 = vo,
  S6 = ig,
  E6 = 1 / 0,
  w1 = y1 ? y1.prototype : void 0,
  x1 = w1 ? w1.toString : void 0;
function nO(e) {
  if (typeof e == "string") return e;
  if (b6(e)) return x6(e, nO) + "";
  if (S6(e)) return x1 ? x1.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -E6 ? "-0" : t;
}
var C6 = nO,
  O6 = C6;
function _6(e) {
  return e == null ? "" : O6(e);
}
var vl = _6,
  $6 = vo,
  P6 = ag,
  N6 = g6,
  T6 = vl;
function R6(e, t) {
  return $6(e) ? e : P6(e, t) ? [e] : N6(T6(e));
}
var oO = R6,
  A6 = hl,
  k6 = ml,
  D6 = "[object Arguments]";
function F6(e) {
  return k6(e) && A6(e) == D6;
}
var L6 = F6,
  b1 = L6,
  M6 = ml,
  iO = Object.prototype,
  I6 = iO.hasOwnProperty,
  j6 = iO.propertyIsEnumerable,
  U6 = b1(
    (function () {
      return arguments;
    })()
  )
    ? b1
    : function (e) {
        return M6(e) && I6.call(e, "callee") && !j6.call(e, "callee");
      },
  aO = U6,
  B6 = 9007199254740991,
  z6 = /^(?:0|[1-9]\d*)$/;
function H6(e, t) {
  var r = typeof e;
  return (
    (t = t == null ? B6 : t),
    !!t &&
      (r == "number" || (r != "symbol" && z6.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
var sO = H6,
  V6 = 9007199254740991;
function W6(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= V6;
}
var fg = W6,
  K6 = ig,
  q6 = 1 / 0;
function G6(e) {
  if (typeof e == "string" || K6(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -q6 ? "-0" : t;
}
var Af = G6,
  Y6 = oO,
  Q6 = aO,
  X6 = vo,
  J6 = sO,
  Z6 = fg,
  e8 = Af;
function t8(e, t, r) {
  t = Y6(t, e);
  for (var n = -1, o = t.length, i = !1; ++n < o; ) {
    var a = e8(t[n]);
    if (!(i = e != null && r(e, a))) break;
    e = e[a];
  }
  return i || ++n != o
    ? i
    : ((o = e == null ? 0 : e.length),
      !!o && Z6(o) && J6(a, o) && (X6(e) || Q6(e)));
}
var lO = t8,
  r8 = OI,
  n8 = lO;
function o8(e, t) {
  return e != null && n8(e, t, r8);
}
var gc = o8;
const uO = (e) => e && e.__isYupSchema__;
class i8 {
  constructor(t, r) {
    if (
      ((this.fn = void 0),
      (this.refs = t),
      (this.refs = t),
      typeof r == "function")
    ) {
      this.fn = r;
      return;
    }
    if (!gc(r, "is"))
      throw new TypeError("`is:` is required for `when()` conditions");
    if (!r.then && !r.otherwise)
      throw new TypeError(
        "either `then:` or `otherwise:` is required for `when()` conditions"
      );
    let { is: n, then: o, otherwise: i } = r,
      a = typeof n == "function" ? n : (...s) => s.every((l) => l === n);
    this.fn = function (...s) {
      let l = s.pop(),
        u = s.pop(),
        c = a(...s) ? o : i;
      if (!!c) return typeof c == "function" ? c(u) : u.concat(c.resolve(l));
    };
  }
  resolve(t, r) {
    let n = this.refs.map((i) =>
        i.getValue(
          r == null ? void 0 : r.value,
          r == null ? void 0 : r.parent,
          r == null ? void 0 : r.context
        )
      ),
      o = this.fn.apply(t, n.concat(t, r));
    if (o === void 0 || o === t) return t;
    if (!uO(o)) throw new TypeError("conditions must return a schema object");
    return o.resolve(r);
  }
}
function cO(e) {
  return e == null ? [] : [].concat(e);
}
function bh() {
  return (
    (bh =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    bh.apply(this, arguments)
  );
}
let a8 = /\$\{\s*(\w+)\s*\}/g;
class ar extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return (
      n !== r.path && (r = bh({}, r, { path: n })),
      typeof t == "string"
        ? t.replace(a8, (o, i) => Ws(r[i]))
        : typeof t == "function"
        ? t(r)
        : t
    );
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, o) {
    super(),
      (this.value = void 0),
      (this.path = void 0),
      (this.type = void 0),
      (this.errors = void 0),
      (this.params = void 0),
      (this.inner = void 0),
      (this.name = "ValidationError"),
      (this.value = r),
      (this.path = n),
      (this.type = o),
      (this.errors = []),
      (this.inner = []),
      cO(t).forEach((i) => {
        ar.isError(i)
          ? (this.errors.push(...i.errors),
            (this.inner = this.inner.concat(i.inner.length ? i.inner : i)))
          : this.errors.push(i);
      }),
      (this.message =
        this.errors.length > 1
          ? `${this.errors.length} errors occurred`
          : this.errors[0]),
      Error.captureStackTrace && Error.captureStackTrace(this, ar);
  }
}
const s8 = (e) => {
  let t = !1;
  return (...r) => {
    t || ((t = !0), e(...r));
  };
};
function Sh(e, t) {
  let {
      endEarly: r,
      tests: n,
      args: o,
      value: i,
      errors: a,
      sort: s,
      path: l,
    } = e,
    u = s8(t),
    c = n.length;
  const d = [];
  if (((a = a || []), !c)) return a.length ? u(new ar(a, i, l)) : u(null, i);
  for (let p = 0; p < n.length; p++) {
    const h = n[p];
    h(o, function (m) {
      if (m) {
        if (!ar.isError(m)) return u(m, i);
        if (r) return (m.value = i), u(m, i);
        d.push(m);
      }
      if (--c <= 0) {
        if (
          (d.length && (s && d.sort(s), a.length && d.push(...a), (a = d)),
          a.length)
        ) {
          u(new ar(a, i, l), i);
          return;
        }
        u(null, i);
      }
    });
  }
}
var l8 = ai,
  u8 = (function () {
    try {
      var e = l8(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {}
  })(),
  c8 = u8,
  S1 = c8;
function f8(e, t, r) {
  t == "__proto__" && S1
    ? S1(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
    : (e[t] = r);
}
var fO = f8;
function d8(e) {
  return function (t, r, n) {
    for (var o = -1, i = Object(t), a = n(t), s = a.length; s--; ) {
      var l = a[e ? s : ++o];
      if (r(i[l], l, i) === !1) break;
    }
    return t;
  };
}
var p8 = d8,
  h8 = p8,
  m8 = h8(),
  v8 = m8;
function g8(e, t) {
  for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
  return n;
}
var y8 = g8,
  yc = { exports: {} };
function w8() {
  return !1;
}
var x8 = w8;
(function (e, t) {
  var r = kn,
    n = x8,
    o = t && !t.nodeType && t,
    i = o && !0 && e && !e.nodeType && e,
    a = i && i.exports === o,
    s = a ? r.Buffer : void 0,
    l = s ? s.isBuffer : void 0,
    u = l || n;
  e.exports = u;
})(yc, yc.exports);
var b8 = hl,
  S8 = fg,
  E8 = ml,
  C8 = "[object Arguments]",
  O8 = "[object Array]",
  _8 = "[object Boolean]",
  $8 = "[object Date]",
  P8 = "[object Error]",
  N8 = "[object Function]",
  T8 = "[object Map]",
  R8 = "[object Number]",
  A8 = "[object Object]",
  k8 = "[object RegExp]",
  D8 = "[object Set]",
  F8 = "[object String]",
  L8 = "[object WeakMap]",
  M8 = "[object ArrayBuffer]",
  I8 = "[object DataView]",
  j8 = "[object Float32Array]",
  U8 = "[object Float64Array]",
  B8 = "[object Int8Array]",
  z8 = "[object Int16Array]",
  H8 = "[object Int32Array]",
  V8 = "[object Uint8Array]",
  W8 = "[object Uint8ClampedArray]",
  K8 = "[object Uint16Array]",
  q8 = "[object Uint32Array]",
  je = {};
je[j8] =
  je[U8] =
  je[B8] =
  je[z8] =
  je[H8] =
  je[V8] =
  je[W8] =
  je[K8] =
  je[q8] =
    !0;
je[C8] =
  je[O8] =
  je[M8] =
  je[_8] =
  je[I8] =
  je[$8] =
  je[P8] =
  je[N8] =
  je[T8] =
  je[R8] =
  je[A8] =
  je[k8] =
  je[D8] =
  je[F8] =
  je[L8] =
    !1;
function G8(e) {
  return E8(e) && S8(e.length) && !!je[b8(e)];
}
var Y8 = G8;
function Q8(e) {
  return function (t) {
    return e(t);
  };
}
var X8 = Q8,
  Eh = { exports: {} };
(function (e, t) {
  var r = XC,
    n = t && !t.nodeType && t,
    o = n && !0 && e && !e.nodeType && e,
    i = o && o.exports === n,
    a = i && r.process,
    s = (function () {
      try {
        var l = o && o.require && o.require("util").types;
        return l || (a && a.binding && a.binding("util"));
      } catch {}
    })();
  e.exports = s;
})(Eh, Eh.exports);
var J8 = Y8,
  Z8 = X8,
  E1 = Eh.exports,
  C1 = E1 && E1.isTypedArray,
  eU = C1 ? Z8(C1) : J8,
  dO = eU,
  tU = y8,
  rU = aO,
  nU = vo,
  oU = yc.exports,
  iU = sO,
  aU = dO,
  sU = Object.prototype,
  lU = sU.hasOwnProperty;
function uU(e, t) {
  var r = nU(e),
    n = !r && rU(e),
    o = !r && !n && oU(e),
    i = !r && !n && !o && aU(e),
    a = r || n || o || i,
    s = a ? tU(e.length, String) : [],
    l = s.length;
  for (var u in e)
    (t || lU.call(e, u)) &&
      !(
        a &&
        (u == "length" ||
          (o && (u == "offset" || u == "parent")) ||
          (i && (u == "buffer" || u == "byteLength" || u == "byteOffset")) ||
          iU(u, l))
      ) &&
      s.push(u);
  return s;
}
var cU = uU,
  fU = Object.prototype;
function dU(e) {
  var t = e && e.constructor,
    r = (typeof t == "function" && t.prototype) || fU;
  return e === r;
}
var pU = dU;
function hU(e, t) {
  return function (r) {
    return e(t(r));
  };
}
var mU = hU,
  vU = mU,
  gU = vU(Object.keys, Object),
  yU = gU,
  wU = pU,
  xU = yU,
  bU = Object.prototype,
  SU = bU.hasOwnProperty;
function EU(e) {
  if (!wU(e)) return xU(e);
  var t = [];
  for (var r in Object(e)) SU.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var CU = EU,
  OU = ZC,
  _U = fg;
function $U(e) {
  return e != null && _U(e.length) && !OU(e);
}
var PU = $U,
  NU = cU,
  TU = CU,
  RU = PU;
function AU(e) {
  return RU(e) ? NU(e) : TU(e);
}
var dg = AU,
  kU = v8,
  DU = dg;
function FU(e, t) {
  return e && kU(e, t, DU);
}
var pO = FU,
  LU = Tf;
function MU() {
  (this.__data__ = new LU()), (this.size = 0);
}
var IU = MU;
function jU(e) {
  var t = this.__data__,
    r = t.delete(e);
  return (this.size = t.size), r;
}
var UU = jU;
function BU(e) {
  return this.__data__.get(e);
}
var zU = BU;
function HU(e) {
  return this.__data__.has(e);
}
var VU = HU,
  WU = Tf,
  KU = lg,
  qU = ug,
  GU = 200;
function YU(e, t) {
  var r = this.__data__;
  if (r instanceof WU) {
    var n = r.__data__;
    if (!KU || n.length < GU - 1)
      return n.push([e, t]), (this.size = ++r.size), this;
    r = this.__data__ = new qU(n);
  }
  return r.set(e, t), (this.size = r.size), this;
}
var QU = YU,
  XU = Tf,
  JU = IU,
  ZU = UU,
  eB = zU,
  tB = VU,
  rB = QU;
function Ca(e) {
  var t = (this.__data__ = new XU(e));
  this.size = t.size;
}
Ca.prototype.clear = JU;
Ca.prototype.delete = ZU;
Ca.prototype.get = eB;
Ca.prototype.has = tB;
Ca.prototype.set = rB;
var hO = Ca,
  nB = "__lodash_hash_undefined__";
function oB(e) {
  return this.__data__.set(e, nB), this;
}
var iB = oB;
function aB(e) {
  return this.__data__.has(e);
}
var sB = aB,
  lB = ug,
  uB = iB,
  cB = sB;
function wc(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.__data__ = new lB(); ++t < r; ) this.add(e[t]);
}
wc.prototype.add = wc.prototype.push = uB;
wc.prototype.has = cB;
var fB = wc;
function dB(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e)) return !0;
  return !1;
}
var pB = dB;
function hB(e, t) {
  return e.has(t);
}
var mB = hB,
  vB = fB,
  gB = pB,
  yB = mB,
  wB = 1,
  xB = 2;
function bB(e, t, r, n, o, i) {
  var a = r & wB,
    s = e.length,
    l = t.length;
  if (s != l && !(a && l > s)) return !1;
  var u = i.get(e),
    c = i.get(t);
  if (u && c) return u == t && c == e;
  var d = -1,
    p = !0,
    h = r & xB ? new vB() : void 0;
  for (i.set(e, t), i.set(t, e); ++d < s; ) {
    var w = e[d],
      m = t[d];
    if (n) var b = a ? n(m, w, d, t, e, i) : n(w, m, d, e, t, i);
    if (b !== void 0) {
      if (b) continue;
      p = !1;
      break;
    }
    if (h) {
      if (
        !gB(t, function (y, g) {
          if (!yB(h, g) && (w === y || o(w, y, r, n, i))) return h.push(g);
        })
      ) {
        p = !1;
        break;
      }
    } else if (!(w === m || o(w, m, r, n, i))) {
      p = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), p;
}
var mO = bB,
  SB = kn,
  EB = SB.Uint8Array,
  CB = EB;
function OB(e) {
  var t = -1,
    r = Array(e.size);
  return (
    e.forEach(function (n, o) {
      r[++t] = [o, n];
    }),
    r
  );
}
var _B = OB;
function $B(e) {
  var t = -1,
    r = Array(e.size);
  return (
    e.forEach(function (n) {
      r[++t] = n;
    }),
    r
  );
}
var PB = $B,
  O1 = $f,
  _1 = CB,
  NB = tO,
  TB = mO,
  RB = _B,
  AB = PB,
  kB = 1,
  DB = 2,
  FB = "[object Boolean]",
  LB = "[object Date]",
  MB = "[object Error]",
  IB = "[object Map]",
  jB = "[object Number]",
  UB = "[object RegExp]",
  BB = "[object Set]",
  zB = "[object String]",
  HB = "[object Symbol]",
  VB = "[object ArrayBuffer]",
  WB = "[object DataView]",
  $1 = O1 ? O1.prototype : void 0,
  jd = $1 ? $1.valueOf : void 0;
function KB(e, t, r, n, o, i, a) {
  switch (r) {
    case WB:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      (e = e.buffer), (t = t.buffer);
    case VB:
      return !(e.byteLength != t.byteLength || !i(new _1(e), new _1(t)));
    case FB:
    case LB:
    case jB:
      return NB(+e, +t);
    case MB:
      return e.name == t.name && e.message == t.message;
    case UB:
    case zB:
      return e == t + "";
    case IB:
      var s = RB;
    case BB:
      var l = n & kB;
      if ((s || (s = AB), e.size != t.size && !l)) return !1;
      var u = a.get(e);
      if (u) return u == t;
      (n |= DB), a.set(e, t);
      var c = TB(s(e), s(t), n, o, i, a);
      return a.delete(e), c;
    case HB:
      if (jd) return jd.call(e) == jd.call(t);
  }
  return !1;
}
var qB = KB;
function GB(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
  return e;
}
var YB = GB,
  QB = YB,
  XB = vo;
function JB(e, t, r) {
  var n = t(e);
  return XB(e) ? n : QB(n, r(e));
}
var ZB = JB;
function ez(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (i[o++] = a);
  }
  return i;
}
var tz = ez;
function rz() {
  return [];
}
var nz = rz,
  oz = tz,
  iz = nz,
  az = Object.prototype,
  sz = az.propertyIsEnumerable,
  P1 = Object.getOwnPropertySymbols,
  lz = P1
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            oz(P1(e), function (t) {
              return sz.call(e, t);
            }));
      }
    : iz,
  uz = lz,
  cz = ZB,
  fz = uz,
  dz = dg;
function pz(e) {
  return cz(e, dz, fz);
}
var hz = pz,
  N1 = hz,
  mz = 1,
  vz = Object.prototype,
  gz = vz.hasOwnProperty;
function yz(e, t, r, n, o, i) {
  var a = r & mz,
    s = N1(e),
    l = s.length,
    u = N1(t),
    c = u.length;
  if (l != c && !a) return !1;
  for (var d = l; d--; ) {
    var p = s[d];
    if (!(a ? p in t : gz.call(t, p))) return !1;
  }
  var h = i.get(e),
    w = i.get(t);
  if (h && w) return h == t && w == e;
  var m = !0;
  i.set(e, t), i.set(t, e);
  for (var b = a; ++d < l; ) {
    p = s[d];
    var y = e[p],
      g = t[p];
    if (n) var x = a ? n(g, y, p, t, e, i) : n(y, g, p, e, t, i);
    if (!(x === void 0 ? y === g || o(y, g, r, n, i) : x)) {
      m = !1;
      break;
    }
    b || (b = p == "constructor");
  }
  if (m && !b) {
    var S = e.constructor,
      C = t.constructor;
    S != C &&
      "constructor" in e &&
      "constructor" in t &&
      !(
        typeof S == "function" &&
        S instanceof S &&
        typeof C == "function" &&
        C instanceof C
      ) &&
      (m = !1);
  }
  return i.delete(e), i.delete(t), m;
}
var wz = yz,
  xz = ai,
  bz = kn,
  Sz = xz(bz, "DataView"),
  Ez = Sz,
  Cz = ai,
  Oz = kn,
  _z = Cz(Oz, "Promise"),
  $z = _z,
  Pz = ai,
  Nz = kn,
  Tz = Pz(Nz, "Set"),
  Rz = Tz,
  Az = ai,
  kz = kn,
  Dz = Az(kz, "WeakMap"),
  Fz = Dz,
  Ch = Ez,
  Oh = lg,
  _h = $z,
  $h = Rz,
  Ph = Fz,
  vO = hl,
  Oa = eO,
  T1 = "[object Map]",
  Lz = "[object Object]",
  R1 = "[object Promise]",
  A1 = "[object Set]",
  k1 = "[object WeakMap]",
  D1 = "[object DataView]",
  Mz = Oa(Ch),
  Iz = Oa(Oh),
  jz = Oa(_h),
  Uz = Oa($h),
  Bz = Oa(Ph),
  Co = vO;
((Ch && Co(new Ch(new ArrayBuffer(1))) != D1) ||
  (Oh && Co(new Oh()) != T1) ||
  (_h && Co(_h.resolve()) != R1) ||
  ($h && Co(new $h()) != A1) ||
  (Ph && Co(new Ph()) != k1)) &&
  (Co = function (e) {
    var t = vO(e),
      r = t == Lz ? e.constructor : void 0,
      n = r ? Oa(r) : "";
    if (n)
      switch (n) {
        case Mz:
          return D1;
        case Iz:
          return T1;
        case jz:
          return R1;
        case Uz:
          return A1;
        case Bz:
          return k1;
      }
    return t;
  });
var zz = Co,
  Ud = hO,
  Hz = mO,
  Vz = qB,
  Wz = wz,
  F1 = zz,
  L1 = vo,
  M1 = yc.exports,
  Kz = dO,
  qz = 1,
  I1 = "[object Arguments]",
  j1 = "[object Array]",
  Vl = "[object Object]",
  Gz = Object.prototype,
  U1 = Gz.hasOwnProperty;
function Yz(e, t, r, n, o, i) {
  var a = L1(e),
    s = L1(t),
    l = a ? j1 : F1(e),
    u = s ? j1 : F1(t);
  (l = l == I1 ? Vl : l), (u = u == I1 ? Vl : u);
  var c = l == Vl,
    d = u == Vl,
    p = l == u;
  if (p && M1(e)) {
    if (!M1(t)) return !1;
    (a = !0), (c = !1);
  }
  if (p && !c)
    return (
      i || (i = new Ud()),
      a || Kz(e) ? Hz(e, t, r, n, o, i) : Vz(e, t, l, r, n, o, i)
    );
  if (!(r & qz)) {
    var h = c && U1.call(e, "__wrapped__"),
      w = d && U1.call(t, "__wrapped__");
    if (h || w) {
      var m = h ? e.value() : e,
        b = w ? t.value() : t;
      return i || (i = new Ud()), o(m, b, r, n, i);
    }
  }
  return p ? (i || (i = new Ud()), Wz(e, t, r, n, o, i)) : !1;
}
var Qz = Yz,
  Xz = Qz,
  B1 = ml;
function gO(e, t, r, n, o) {
  return e === t
    ? !0
    : e == null || t == null || (!B1(e) && !B1(t))
    ? e !== e && t !== t
    : Xz(e, t, r, n, gO, o);
}
var yO = gO,
  Jz = hO,
  Zz = yO,
  e9 = 1,
  t9 = 2;
function r9(e, t, r, n) {
  var o = r.length,
    i = o,
    a = !n;
  if (e == null) return !i;
  for (e = Object(e); o--; ) {
    var s = r[o];
    if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
  }
  for (; ++o < i; ) {
    s = r[o];
    var l = s[0],
      u = e[l],
      c = s[1];
    if (a && s[2]) {
      if (u === void 0 && !(l in e)) return !1;
    } else {
      var d = new Jz();
      if (n) var p = n(u, c, l, e, t, d);
      if (!(p === void 0 ? Zz(c, u, e9 | t9, n, d) : p)) return !1;
    }
  }
  return !0;
}
var n9 = r9,
  o9 = sg;
function i9(e) {
  return e === e && !o9(e);
}
var wO = i9,
  a9 = wO,
  s9 = dg;
function l9(e) {
  for (var t = s9(e), r = t.length; r--; ) {
    var n = t[r],
      o = e[n];
    t[r] = [n, o, a9(o)];
  }
  return t;
}
var u9 = l9;
function c9(e, t) {
  return function (r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var xO = c9,
  f9 = n9,
  d9 = u9,
  p9 = xO;
function h9(e) {
  var t = d9(e);
  return t.length == 1 && t[0][2]
    ? p9(t[0][0], t[0][1])
    : function (r) {
        return r === e || f9(r, e, t);
      };
}
var m9 = h9,
  v9 = oO,
  g9 = Af;
function y9(e, t) {
  t = v9(t, e);
  for (var r = 0, n = t.length; e != null && r < n; ) e = e[g9(t[r++])];
  return r && r == n ? e : void 0;
}
var bO = y9,
  w9 = bO;
function x9(e, t, r) {
  var n = e == null ? void 0 : w9(e, t);
  return n === void 0 ? r : n;
}
var b9 = x9;
function S9(e, t) {
  return e != null && t in Object(e);
}
var E9 = S9,
  C9 = E9,
  O9 = lO;
function _9(e, t) {
  return e != null && O9(e, t, C9);
}
var $9 = _9,
  P9 = yO,
  N9 = b9,
  T9 = $9,
  R9 = ag,
  A9 = wO,
  k9 = xO,
  D9 = Af,
  F9 = 1,
  L9 = 2;
function M9(e, t) {
  return R9(e) && A9(t)
    ? k9(D9(e), t)
    : function (r) {
        var n = N9(r, e);
        return n === void 0 && n === t ? T9(r, e) : P9(t, n, F9 | L9);
      };
}
var I9 = M9;
function j9(e) {
  return e;
}
var U9 = j9;
function B9(e) {
  return function (t) {
    return t == null ? void 0 : t[e];
  };
}
var z9 = B9,
  H9 = bO;
function V9(e) {
  return function (t) {
    return H9(t, e);
  };
}
var W9 = V9,
  K9 = z9,
  q9 = W9,
  G9 = ag,
  Y9 = Af;
function Q9(e) {
  return G9(e) ? K9(Y9(e)) : q9(e);
}
var X9 = Q9,
  J9 = m9,
  Z9 = I9,
  e7 = U9,
  t7 = vo,
  r7 = X9;
function n7(e) {
  return typeof e == "function"
    ? e
    : e == null
    ? e7
    : typeof e == "object"
    ? t7(e)
      ? Z9(e[0], e[1])
      : J9(e)
    : r7(e);
}
var SO = n7,
  o7 = fO,
  i7 = pO,
  a7 = SO;
function s7(e, t) {
  var r = {};
  return (
    (t = a7(t)),
    i7(e, function (n, o, i) {
      o7(r, o, t(n, o, i));
    }),
    r
  );
}
var EO = s7;
function si(e) {
  (this._maxSize = e), this.clear();
}
si.prototype.clear = function () {
  (this._size = 0), (this._values = Object.create(null));
};
si.prototype.get = function (e) {
  return this._values[e];
};
si.prototype.set = function (e, t) {
  return (
    this._size >= this._maxSize && this.clear(),
    e in this._values || this._size++,
    (this._values[e] = t)
  );
};
var l7 = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
  CO = /^\d+$/,
  u7 = /^\d/,
  c7 = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
  f7 = /^\s*(['"]?)(.*?)(\1)\s*$/,
  pg = 512,
  z1 = new si(pg),
  H1 = new si(pg),
  V1 = new si(pg),
  kf = {
    Cache: si,
    split: Nh,
    normalizePath: Bd,
    setter: function (e) {
      var t = Bd(e);
      return (
        H1.get(e) ||
        H1.set(e, function (n, o) {
          for (var i = 0, a = t.length, s = n; i < a - 1; ) {
            var l = t[i];
            if (l === "__proto__" || l === "constructor" || l === "prototype")
              return n;
            s = s[t[i++]];
          }
          s[t[i]] = o;
        })
      );
    },
    getter: function (e, t) {
      var r = Bd(e);
      return (
        V1.get(e) ||
        V1.set(e, function (o) {
          for (var i = 0, a = r.length; i < a; )
            if (o != null || !t) o = o[r[i++]];
            else return;
          return o;
        })
      );
    },
    join: function (e) {
      return e.reduce(function (t, r) {
        return t + (hg(r) || CO.test(r) ? "[" + r + "]" : (t ? "." : "") + r);
      }, "");
    },
    forEach: function (e, t, r) {
      d7(Array.isArray(e) ? e : Nh(e), t, r);
    },
  };
function Bd(e) {
  return (
    z1.get(e) ||
    z1.set(
      e,
      Nh(e).map(function (t) {
        return t.replace(f7, "$2");
      })
    )
  );
}
function Nh(e) {
  return e.match(l7) || [""];
}
function d7(e, t, r) {
  var n = e.length,
    o,
    i,
    a,
    s;
  for (i = 0; i < n; i++)
    (o = e[i]),
      o &&
        (m7(o) && (o = '"' + o + '"'),
        (s = hg(o)),
        (a = !s && /^\d+$/.test(o)),
        t.call(r, o, s, a, i, e));
}
function hg(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function p7(e) {
  return e.match(u7) && !e.match(CO);
}
function h7(e) {
  return c7.test(e);
}
function m7(e) {
  return !hg(e) && (p7(e) || h7(e));
}
const Wl = { context: "$", value: "." };
function OO(e, t) {
  return new xn(e, t);
}
class xn {
  constructor(t, r = {}) {
    if (
      ((this.key = void 0),
      (this.isContext = void 0),
      (this.isValue = void 0),
      (this.isSibling = void 0),
      (this.path = void 0),
      (this.getter = void 0),
      (this.map = void 0),
      typeof t != "string")
    )
      throw new TypeError("ref must be a string, got: " + t);
    if (((this.key = t.trim()), t === ""))
      throw new TypeError("ref must be a non-empty string");
    (this.isContext = this.key[0] === Wl.context),
      (this.isValue = this.key[0] === Wl.value),
      (this.isSibling = !this.isContext && !this.isValue);
    let n = this.isContext ? Wl.context : this.isValue ? Wl.value : "";
    (this.path = this.key.slice(n.length)),
      (this.getter = this.path && kf.getter(this.path, !0)),
      (this.map = r.map);
  }
  getValue(t, r, n) {
    let o = this.isContext ? n : this.isValue ? t : r;
    return (
      this.getter && (o = this.getter(o || {})),
      this.map && (o = this.map(o)),
      o
    );
  }
  cast(t, r) {
    return this.getValue(
      t,
      r == null ? void 0 : r.parent,
      r == null ? void 0 : r.context
    );
  }
  resolve() {
    return this;
  }
  describe() {
    return { type: "ref", key: this.key };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(t) {
    return t && t.__isYupRef;
  }
}
xn.prototype.__isYupRef = !0;
function xc() {
  return (
    (xc =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    xc.apply(this, arguments)
  );
}
function v7(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Kl(e) {
  function t(r, n) {
    let {
        value: o,
        path: i = "",
        label: a,
        options: s,
        originalValue: l,
        sync: u,
      } = r,
      c = v7(r, ["value", "path", "label", "options", "originalValue", "sync"]);
    const { name: d, test: p, params: h, message: w } = e;
    let { parent: m, context: b } = s;
    function y($) {
      return xn.isRef($) ? $.getValue(o, m, b) : $;
    }
    function g($ = {}) {
      const P = EO(
          xc(
            { value: o, originalValue: l, label: a, path: $.path || i },
            h,
            $.params
          ),
          y
        ),
        R = new ar(ar.formatError($.message || w, P), o, P.path, $.type || d);
      return (R.params = P), R;
    }
    let x = xc(
      {
        path: i,
        parent: m,
        type: d,
        createError: g,
        resolve: y,
        options: s,
        originalValue: l,
      },
      c
    );
    if (!u) {
      try {
        Promise.resolve(p.call(x, o, x))
          .then(($) => {
            ar.isError($) ? n($) : $ ? n(null, $) : n(g());
          })
          .catch(n);
      } catch ($) {
        n($);
      }
      return;
    }
    let S;
    try {
      var C;
      if (
        ((S = p.call(x, o, x)),
        typeof ((C = S) == null ? void 0 : C.then) == "function")
      )
        throw new Error(
          `Validation test of type: "${x.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`
        );
    } catch ($) {
      n($);
      return;
    }
    ar.isError(S) ? n(S) : S ? n(null, S) : n(g());
  }
  return (t.OPTIONS = e), t;
}
let g7 = (e) => e.substr(0, e.length - 1).substr(1);
function y7(e, t, r, n = r) {
  let o, i, a;
  return t
    ? (kf.forEach(t, (s, l, u) => {
        let c = l ? g7(s) : s;
        if (
          ((e = e.resolve({ context: n, parent: o, value: r })), e.innerType)
        ) {
          let d = u ? parseInt(c, 10) : 0;
          if (r && d >= r.length)
            throw new Error(
              `Yup.reach cannot resolve an array item at index: ${s}, in the path: ${t}. because there is no value at that index. `
            );
          (o = r), (r = r && r[d]), (e = e.innerType);
        }
        if (!u) {
          if (!e.fields || !e.fields[c])
            throw new Error(
              `The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e._type}")`
            );
          (o = r), (r = r && r[c]), (e = e.fields[c]);
        }
        (i = c), (a = l ? "[" + s + "]" : "." + s);
      }),
      { schema: e, parent: o, parentPath: i })
    : { parent: o, parentPath: t, schema: e };
}
class bc {
  constructor() {
    (this.list = void 0),
      (this.refs = void 0),
      (this.list = new Set()),
      (this.refs = new Map());
  }
  get size() {
    return this.list.size + this.refs.size;
  }
  describe() {
    const t = [];
    for (const r of this.list) t.push(r);
    for (const [, r] of this.refs) t.push(r.describe());
    return t;
  }
  toArray() {
    return Array.from(this.list).concat(Array.from(this.refs.values()));
  }
  resolveAll(t) {
    return this.toArray().reduce(
      (r, n) => r.concat(xn.isRef(n) ? t(n) : n),
      []
    );
  }
  add(t) {
    xn.isRef(t) ? this.refs.set(t.key, t) : this.list.add(t);
  }
  delete(t) {
    xn.isRef(t) ? this.refs.delete(t.key) : this.list.delete(t);
  }
  clone() {
    const t = new bc();
    return (t.list = new Set(this.list)), (t.refs = new Map(this.refs)), t;
  }
  merge(t, r) {
    const n = this.clone();
    return (
      t.list.forEach((o) => n.add(o)),
      t.refs.forEach((o) => n.add(o)),
      r.list.forEach((o) => n.delete(o)),
      r.refs.forEach((o) => n.delete(o)),
      n
    );
  }
}
function pr() {
  return (
    (pr =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    pr.apply(this, arguments)
  );
}
class Ft {
  constructor(t) {
    (this.deps = []),
      (this.tests = void 0),
      (this.transforms = void 0),
      (this.conditions = []),
      (this._mutate = void 0),
      (this._typeError = void 0),
      (this._whitelist = new bc()),
      (this._blacklist = new bc()),
      (this.exclusiveTests = Object.create(null)),
      (this.spec = void 0),
      (this.tests = []),
      (this.transforms = []),
      this.withMutation(() => {
        this.typeError(Eo.notType);
      }),
      (this.type = (t == null ? void 0 : t.type) || "mixed"),
      (this.spec = pr(
        {
          strip: !1,
          strict: !1,
          abortEarly: !0,
          recursive: !0,
          nullable: !1,
          presence: "optional",
        },
        t == null ? void 0 : t.spec
      ));
  }
  get _type() {
    return this.type;
  }
  _typeCheck(t) {
    return !0;
  }
  clone(t) {
    if (this._mutate) return t && Object.assign(this.spec, t), this;
    const r = Object.create(Object.getPrototypeOf(this));
    return (
      (r.type = this.type),
      (r._typeError = this._typeError),
      (r._whitelistError = this._whitelistError),
      (r._blacklistError = this._blacklistError),
      (r._whitelist = this._whitelist.clone()),
      (r._blacklist = this._blacklist.clone()),
      (r.exclusiveTests = pr({}, this.exclusiveTests)),
      (r.deps = [...this.deps]),
      (r.conditions = [...this.conditions]),
      (r.tests = [...this.tests]),
      (r.transforms = [...this.transforms]),
      (r.spec = yh(pr({}, this.spec, t))),
      r
    );
  }
  label(t) {
    let r = this.clone();
    return (r.spec.label = t), r;
  }
  meta(...t) {
    if (t.length === 0) return this.spec.meta;
    let r = this.clone();
    return (r.spec.meta = Object.assign(r.spec.meta || {}, t[0])), r;
  }
  withMutation(t) {
    let r = this._mutate;
    this._mutate = !0;
    let n = t(this);
    return (this._mutate = r), n;
  }
  concat(t) {
    if (!t || t === this) return this;
    if (t.type !== this.type && this.type !== "mixed")
      throw new TypeError(
        `You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`
      );
    let r = this,
      n = t.clone();
    const o = pr({}, r.spec, n.spec);
    return (
      (n.spec = o),
      n._typeError || (n._typeError = r._typeError),
      n._whitelistError || (n._whitelistError = r._whitelistError),
      n._blacklistError || (n._blacklistError = r._blacklistError),
      (n._whitelist = r._whitelist.merge(t._whitelist, t._blacklist)),
      (n._blacklist = r._blacklist.merge(t._blacklist, t._whitelist)),
      (n.tests = r.tests),
      (n.exclusiveTests = r.exclusiveTests),
      n.withMutation((i) => {
        t.tests.forEach((a) => {
          i.test(a.OPTIONS);
        });
      }),
      (n.transforms = [...r.transforms, ...n.transforms]),
      n
    );
  }
  isType(t) {
    return this.spec.nullable && t === null ? !0 : this._typeCheck(t);
  }
  resolve(t) {
    let r = this;
    if (r.conditions.length) {
      let n = r.conditions;
      (r = r.clone()),
        (r.conditions = []),
        (r = n.reduce((o, i) => i.resolve(o, t), r)),
        (r = r.resolve(t));
    }
    return r;
  }
  cast(t, r = {}) {
    let n = this.resolve(pr({ value: t }, r)),
      o = n._cast(t, r);
    if (t !== void 0 && r.assert !== !1 && n.isType(o) !== !0) {
      let i = Ws(t),
        a = Ws(o);
      throw new TypeError(
        `The value of ${
          r.path || "field"
        } could not be cast to a value that satisfies the schema type: "${
          n._type
        }". 

attempted value: ${i} 
` + (a !== i ? `result of cast: ${a}` : "")
      );
    }
    return o;
  }
  _cast(t, r) {
    let n =
      t === void 0
        ? t
        : this.transforms.reduce((o, i) => i.call(this, o, t, this), t);
    return n === void 0 && (n = this.getDefault()), n;
  }
  _validate(t, r = {}, n) {
    let {
        sync: o,
        path: i,
        from: a = [],
        originalValue: s = t,
        strict: l = this.spec.strict,
        abortEarly: u = this.spec.abortEarly,
      } = r,
      c = t;
    l || (c = this._cast(c, pr({ assert: !1 }, r)));
    let d = {
        value: c,
        path: i,
        options: r,
        originalValue: s,
        schema: this,
        label: this.spec.label,
        sync: o,
        from: a,
      },
      p = [];
    this._typeError && p.push(this._typeError);
    let h = [];
    this._whitelistError && h.push(this._whitelistError),
      this._blacklistError && h.push(this._blacklistError),
      Sh(
        { args: d, value: c, path: i, sync: o, tests: p, endEarly: u },
        (w) => {
          if (w) return void n(w, c);
          Sh(
            {
              tests: this.tests.concat(h),
              args: d,
              path: i,
              sync: o,
              value: c,
              endEarly: u,
            },
            n
          );
        }
      );
  }
  validate(t, r, n) {
    let o = this.resolve(pr({}, r, { value: t }));
    return typeof n == "function"
      ? o._validate(t, r, n)
      : new Promise((i, a) =>
          o._validate(t, r, (s, l) => {
            s ? a(s) : i(l);
          })
        );
  }
  validateSync(t, r) {
    let n = this.resolve(pr({}, r, { value: t })),
      o;
    return (
      n._validate(t, pr({}, r, { sync: !0 }), (i, a) => {
        if (i) throw i;
        o = a;
      }),
      o
    );
  }
  isValid(t, r) {
    return this.validate(t, r).then(
      () => !0,
      (n) => {
        if (ar.isError(n)) return !1;
        throw n;
      }
    );
  }
  isValidSync(t, r) {
    try {
      return this.validateSync(t, r), !0;
    } catch (n) {
      if (ar.isError(n)) return !1;
      throw n;
    }
  }
  _getDefault() {
    let t = this.spec.default;
    return t == null ? t : typeof t == "function" ? t.call(this) : yh(t);
  }
  getDefault(t) {
    return this.resolve(t || {})._getDefault();
  }
  default(t) {
    return arguments.length === 0
      ? this._getDefault()
      : this.clone({ default: t });
  }
  strict(t = !0) {
    let r = this.clone();
    return (r.spec.strict = t), r;
  }
  _isPresent(t) {
    return t != null;
  }
  defined(t = Eo.defined) {
    return this.test({
      message: t,
      name: "defined",
      exclusive: !0,
      test(r) {
        return r !== void 0;
      },
    });
  }
  required(t = Eo.required) {
    return this.clone({ presence: "required" }).withMutation((r) =>
      r.test({
        message: t,
        name: "required",
        exclusive: !0,
        test(n) {
          return this.schema._isPresent(n);
        },
      })
    );
  }
  notRequired() {
    let t = this.clone({ presence: "optional" });
    return (t.tests = t.tests.filter((r) => r.OPTIONS.name !== "required")), t;
  }
  nullable(t = !0) {
    return this.clone({ nullable: t !== !1 });
  }
  transform(t) {
    let r = this.clone();
    return r.transforms.push(t), r;
  }
  test(...t) {
    let r;
    if (
      (t.length === 1
        ? typeof t[0] == "function"
          ? (r = { test: t[0] })
          : (r = t[0])
        : t.length === 2
        ? (r = { name: t[0], test: t[1] })
        : (r = { name: t[0], message: t[1], test: t[2] }),
      r.message === void 0 && (r.message = Eo.default),
      typeof r.test != "function")
    )
      throw new TypeError("`test` is a required parameters");
    let n = this.clone(),
      o = Kl(r),
      i = r.exclusive || (r.name && n.exclusiveTests[r.name] === !0);
    if (r.exclusive && !r.name)
      throw new TypeError(
        "Exclusive tests must provide a unique `name` identifying the test"
      );
    return (
      r.name && (n.exclusiveTests[r.name] = !!r.exclusive),
      (n.tests = n.tests.filter(
        (a) =>
          !(
            a.OPTIONS.name === r.name &&
            (i || a.OPTIONS.test === o.OPTIONS.test)
          )
      )),
      n.tests.push(o),
      n
    );
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && ((r = t), (t = "."));
    let n = this.clone(),
      o = cO(t).map((i) => new xn(i));
    return (
      o.forEach((i) => {
        i.isSibling && n.deps.push(i.key);
      }),
      n.conditions.push(new i8(o, r)),
      n
    );
  }
  typeError(t) {
    let r = this.clone();
    return (
      (r._typeError = Kl({
        message: t,
        name: "typeError",
        test(n) {
          return n !== void 0 && !this.schema.isType(n)
            ? this.createError({ params: { type: this.schema._type } })
            : !0;
        },
      })),
      r
    );
  }
  oneOf(t, r = Eo.oneOf) {
    let n = this.clone();
    return (
      t.forEach((o) => {
        n._whitelist.add(o), n._blacklist.delete(o);
      }),
      (n._whitelistError = Kl({
        message: r,
        name: "oneOf",
        test(o) {
          if (o === void 0) return !0;
          let i = this.schema._whitelist,
            a = i.resolveAll(this.resolve);
          return a.includes(o)
            ? !0
            : this.createError({
                params: { values: i.toArray().join(", "), resolved: a },
              });
        },
      })),
      n
    );
  }
  notOneOf(t, r = Eo.notOneOf) {
    let n = this.clone();
    return (
      t.forEach((o) => {
        n._blacklist.add(o), n._whitelist.delete(o);
      }),
      (n._blacklistError = Kl({
        message: r,
        name: "notOneOf",
        test(o) {
          let i = this.schema._blacklist,
            a = i.resolveAll(this.resolve);
          return a.includes(o)
            ? this.createError({
                params: { values: i.toArray().join(", "), resolved: a },
              })
            : !0;
        },
      })),
      n
    );
  }
  strip(t = !0) {
    let r = this.clone();
    return (r.spec.strip = t), r;
  }
  describe() {
    const t = this.clone(),
      { label: r, meta: n } = t.spec;
    return {
      meta: n,
      label: r,
      type: t.type,
      oneOf: t._whitelist.describe(),
      notOneOf: t._blacklist.describe(),
      tests: t.tests
        .map((i) => ({ name: i.OPTIONS.name, params: i.OPTIONS.params }))
        .filter((i, a, s) => s.findIndex((l) => l.name === i.name) === a),
    };
  }
}
Ft.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"])
  Ft.prototype[`${e}At`] = function (t, r, n = {}) {
    const { parent: o, parentPath: i, schema: a } = y7(this, t, r, n.context);
    return a[e](o && o[i], pr({}, n, { parent: o, path: t }));
  };
for (const e of ["equals", "is"]) Ft.prototype[e] = Ft.prototype.oneOf;
for (const e of ["not", "nope"]) Ft.prototype[e] = Ft.prototype.notOneOf;
Ft.prototype.optional = Ft.prototype.notRequired;
const w7 = Ft;
w7.prototype;
const dt = (e) => e == null;
let x7 =
    /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
  b7 =
    /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
  S7 =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
  E7 = (e) => dt(e) || e === e.trim(),
  C7 = {}.toString();
function ot() {
  return new _O();
}
class _O extends Ft {
  constructor() {
    super({ type: "string" }),
      this.withMutation(() => {
        this.transform(function (t) {
          if (this.isType(t) || Array.isArray(t)) return t;
          const r = t != null && t.toString ? t.toString() : t;
          return r === C7 ? t : r;
        });
      });
  }
  _typeCheck(t) {
    return t instanceof String && (t = t.valueOf()), typeof t == "string";
  }
  _isPresent(t) {
    return super._isPresent(t) && !!t.length;
  }
  length(t, r = Tr.length) {
    return this.test({
      message: r,
      name: "length",
      exclusive: !0,
      params: { length: t },
      test(n) {
        return dt(n) || n.length === this.resolve(t);
      },
    });
  }
  min(t, r = Tr.min) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: { min: t },
      test(n) {
        return dt(n) || n.length >= this.resolve(t);
      },
    });
  }
  max(t, r = Tr.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: r,
      params: { max: t },
      test(n) {
        return dt(n) || n.length <= this.resolve(t);
      },
    });
  }
  matches(t, r) {
    let n = !1,
      o,
      i;
    return (
      r &&
        (typeof r == "object"
          ? ({ excludeEmptyString: n = !1, message: o, name: i } = r)
          : (o = r)),
      this.test({
        name: i || "matches",
        message: o || Tr.matches,
        params: { regex: t },
        test: (a) => dt(a) || (a === "" && n) || a.search(t) !== -1,
      })
    );
  }
  email(t = Tr.email) {
    return this.matches(x7, {
      name: "email",
      message: t,
      excludeEmptyString: !0,
    });
  }
  url(t = Tr.url) {
    return this.matches(b7, {
      name: "url",
      message: t,
      excludeEmptyString: !0,
    });
  }
  uuid(t = Tr.uuid) {
    return this.matches(S7, {
      name: "uuid",
      message: t,
      excludeEmptyString: !1,
    });
  }
  ensure() {
    return this.default("").transform((t) => (t === null ? "" : t));
  }
  trim(t = Tr.trim) {
    return this.transform((r) => (r != null ? r.trim() : r)).test({
      message: t,
      name: "trim",
      test: E7,
    });
  }
  lowercase(t = Tr.lowercase) {
    return this.transform((r) => (dt(r) ? r : r.toLowerCase())).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      test: (r) => dt(r) || r === r.toLowerCase(),
    });
  }
  uppercase(t = Tr.uppercase) {
    return this.transform((r) => (dt(r) ? r : r.toUpperCase())).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      test: (r) => dt(r) || r === r.toUpperCase(),
    });
  }
}
ot.prototype = _O.prototype;
let O7 = (e) => e != +e;
function mg() {
  return new $O();
}
class $O extends Ft {
  constructor() {
    super({ type: "number" }),
      this.withMutation(() => {
        this.transform(function (t) {
          let r = t;
          if (typeof r == "string") {
            if (((r = r.replace(/\s/g, "")), r === "")) return NaN;
            r = +r;
          }
          return this.isType(r) ? r : parseFloat(r);
        });
      });
  }
  _typeCheck(t) {
    return (
      t instanceof Number && (t = t.valueOf()), typeof t == "number" && !O7(t)
    );
  }
  min(t, r = Mn.min) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: { min: t },
      test(n) {
        return dt(n) || n >= this.resolve(t);
      },
    });
  }
  max(t, r = Mn.max) {
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: { max: t },
      test(n) {
        return dt(n) || n <= this.resolve(t);
      },
    });
  }
  lessThan(t, r = Mn.lessThan) {
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: { less: t },
      test(n) {
        return dt(n) || n < this.resolve(t);
      },
    });
  }
  moreThan(t, r = Mn.moreThan) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: { more: t },
      test(n) {
        return dt(n) || n > this.resolve(t);
      },
    });
  }
  positive(t = Mn.positive) {
    return this.moreThan(0, t);
  }
  negative(t = Mn.negative) {
    return this.lessThan(0, t);
  }
  integer(t = Mn.integer) {
    return this.test({
      name: "integer",
      message: t,
      test: (r) => dt(r) || Number.isInteger(r),
    });
  }
  truncate() {
    return this.transform((t) => (dt(t) ? t : t | 0));
  }
  round(t) {
    var r;
    let n = ["ceil", "floor", "round", "trunc"];
    if (
      ((t = ((r = t) == null ? void 0 : r.toLowerCase()) || "round"),
      t === "trunc")
    )
      return this.truncate();
    if (n.indexOf(t.toLowerCase()) === -1)
      throw new TypeError(
        "Only valid options for round() are: " + n.join(", ")
      );
    return this.transform((o) => (dt(o) ? o : Math[t](o)));
  }
}
mg.prototype = $O.prototype;
var _7 =
  /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function $7(e) {
  var t = [1, 4, 5, 6, 7, 10, 11],
    r = 0,
    n,
    o;
  if ((o = _7.exec(e))) {
    for (var i = 0, a; (a = t[i]); ++i) o[a] = +o[a] || 0;
    (o[2] = (+o[2] || 1) - 1),
      (o[3] = +o[3] || 1),
      (o[7] = o[7] ? String(o[7]).substr(0, 3) : 0),
      (o[8] === void 0 || o[8] === "") && (o[9] === void 0 || o[9] === "")
        ? (n = +new Date(o[1], o[2], o[3], o[4], o[5], o[6], o[7]))
        : (o[8] !== "Z" &&
            o[9] !== void 0 &&
            ((r = o[10] * 60 + o[11]), o[9] === "+" && (r = 0 - r)),
          (n = Date.UTC(o[1], o[2], o[3], o[4], o[5] + r, o[6], o[7])));
  } else n = Date.parse ? Date.parse(e) : NaN;
  return n;
}
let PO = new Date(""),
  P7 = (e) => Object.prototype.toString.call(e) === "[object Date]";
class NO extends Ft {
  constructor() {
    super({ type: "date" }),
      this.withMutation(() => {
        this.transform(function (t) {
          return this.isType(t)
            ? t
            : ((t = $7(t)), isNaN(t) ? PO : new Date(t));
        });
      });
  }
  _typeCheck(t) {
    return P7(t) && !isNaN(t.getTime());
  }
  prepareParam(t, r) {
    let n;
    if (xn.isRef(t)) n = t;
    else {
      let o = this.cast(t);
      if (!this._typeCheck(o))
        throw new TypeError(
          `\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`
        );
      n = o;
    }
    return n;
  }
  min(t, r = wh.min) {
    let n = this.prepareParam(t, "min");
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: { min: t },
      test(o) {
        return dt(o) || o >= this.resolve(n);
      },
    });
  }
  max(t, r = wh.max) {
    let n = this.prepareParam(t, "max");
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: { max: t },
      test(o) {
        return dt(o) || o <= this.resolve(n);
      },
    });
  }
}
NO.INVALID_DATE = PO;
NO.prototype;
function N7(e, t, r, n) {
  var o = -1,
    i = e == null ? 0 : e.length;
  for (n && i && (r = e[++o]); ++o < i; ) r = t(r, e[o], o, e);
  return r;
}
var T7 = N7;
function R7(e) {
  return function (t) {
    return e == null ? void 0 : e[t];
  };
}
var A7 = R7,
  k7 = A7,
  D7 = {
    À: "A",
    Á: "A",
    Â: "A",
    Ã: "A",
    Ä: "A",
    Å: "A",
    à: "a",
    á: "a",
    â: "a",
    ã: "a",
    ä: "a",
    å: "a",
    Ç: "C",
    ç: "c",
    Ð: "D",
    ð: "d",
    È: "E",
    É: "E",
    Ê: "E",
    Ë: "E",
    è: "e",
    é: "e",
    ê: "e",
    ë: "e",
    Ì: "I",
    Í: "I",
    Î: "I",
    Ï: "I",
    ì: "i",
    í: "i",
    î: "i",
    ï: "i",
    Ñ: "N",
    ñ: "n",
    Ò: "O",
    Ó: "O",
    Ô: "O",
    Õ: "O",
    Ö: "O",
    Ø: "O",
    ò: "o",
    ó: "o",
    ô: "o",
    õ: "o",
    ö: "o",
    ø: "o",
    Ù: "U",
    Ú: "U",
    Û: "U",
    Ü: "U",
    ù: "u",
    ú: "u",
    û: "u",
    ü: "u",
    Ý: "Y",
    ý: "y",
    ÿ: "y",
    Æ: "Ae",
    æ: "ae",
    Þ: "Th",
    þ: "th",
    ß: "ss",
    Ā: "A",
    Ă: "A",
    Ą: "A",
    ā: "a",
    ă: "a",
    ą: "a",
    Ć: "C",
    Ĉ: "C",
    Ċ: "C",
    Č: "C",
    ć: "c",
    ĉ: "c",
    ċ: "c",
    č: "c",
    Ď: "D",
    Đ: "D",
    ď: "d",
    đ: "d",
    Ē: "E",
    Ĕ: "E",
    Ė: "E",
    Ę: "E",
    Ě: "E",
    ē: "e",
    ĕ: "e",
    ė: "e",
    ę: "e",
    ě: "e",
    Ĝ: "G",
    Ğ: "G",
    Ġ: "G",
    Ģ: "G",
    ĝ: "g",
    ğ: "g",
    ġ: "g",
    ģ: "g",
    Ĥ: "H",
    Ħ: "H",
    ĥ: "h",
    ħ: "h",
    Ĩ: "I",
    Ī: "I",
    Ĭ: "I",
    Į: "I",
    İ: "I",
    ĩ: "i",
    ī: "i",
    ĭ: "i",
    į: "i",
    ı: "i",
    Ĵ: "J",
    ĵ: "j",
    Ķ: "K",
    ķ: "k",
    ĸ: "k",
    Ĺ: "L",
    Ļ: "L",
    Ľ: "L",
    Ŀ: "L",
    Ł: "L",
    ĺ: "l",
    ļ: "l",
    ľ: "l",
    ŀ: "l",
    ł: "l",
    Ń: "N",
    Ņ: "N",
    Ň: "N",
    Ŋ: "N",
    ń: "n",
    ņ: "n",
    ň: "n",
    ŋ: "n",
    Ō: "O",
    Ŏ: "O",
    Ő: "O",
    ō: "o",
    ŏ: "o",
    ő: "o",
    Ŕ: "R",
    Ŗ: "R",
    Ř: "R",
    ŕ: "r",
    ŗ: "r",
    ř: "r",
    Ś: "S",
    Ŝ: "S",
    Ş: "S",
    Š: "S",
    ś: "s",
    ŝ: "s",
    ş: "s",
    š: "s",
    Ţ: "T",
    Ť: "T",
    Ŧ: "T",
    ţ: "t",
    ť: "t",
    ŧ: "t",
    Ũ: "U",
    Ū: "U",
    Ŭ: "U",
    Ů: "U",
    Ű: "U",
    Ų: "U",
    ũ: "u",
    ū: "u",
    ŭ: "u",
    ů: "u",
    ű: "u",
    ų: "u",
    Ŵ: "W",
    ŵ: "w",
    Ŷ: "Y",
    ŷ: "y",
    Ÿ: "Y",
    Ź: "Z",
    Ż: "Z",
    Ž: "Z",
    ź: "z",
    ż: "z",
    ž: "z",
    Ĳ: "IJ",
    ĳ: "ij",
    Œ: "Oe",
    œ: "oe",
    ŉ: "'n",
    ſ: "s",
  },
  F7 = k7(D7),
  L7 = F7,
  M7 = L7,
  I7 = vl,
  j7 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
  U7 = "\\u0300-\\u036f",
  B7 = "\\ufe20-\\ufe2f",
  z7 = "\\u20d0-\\u20ff",
  H7 = U7 + B7 + z7,
  V7 = "[" + H7 + "]",
  W7 = RegExp(V7, "g");
function K7(e) {
  return (e = I7(e)), e && e.replace(j7, M7).replace(W7, "");
}
var q7 = K7,
  G7 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function Y7(e) {
  return e.match(G7) || [];
}
var Q7 = Y7,
  X7 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function J7(e) {
  return X7.test(e);
}
var Z7 = J7,
  TO = "\\ud800-\\udfff",
  eH = "\\u0300-\\u036f",
  tH = "\\ufe20-\\ufe2f",
  rH = "\\u20d0-\\u20ff",
  nH = eH + tH + rH,
  RO = "\\u2700-\\u27bf",
  AO = "a-z\\xdf-\\xf6\\xf8-\\xff",
  oH = "\\xac\\xb1\\xd7\\xf7",
  iH = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
  aH = "\\u2000-\\u206f",
  sH =
    " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
  kO = "A-Z\\xc0-\\xd6\\xd8-\\xde",
  lH = "\\ufe0e\\ufe0f",
  DO = oH + iH + aH + sH,
  FO = "['\u2019]",
  W1 = "[" + DO + "]",
  uH = "[" + nH + "]",
  LO = "\\d+",
  cH = "[" + RO + "]",
  MO = "[" + AO + "]",
  IO = "[^" + TO + DO + LO + RO + AO + kO + "]",
  fH = "\\ud83c[\\udffb-\\udfff]",
  dH = "(?:" + uH + "|" + fH + ")",
  pH = "[^" + TO + "]",
  jO = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  UO = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  gi = "[" + kO + "]",
  hH = "\\u200d",
  K1 = "(?:" + MO + "|" + IO + ")",
  mH = "(?:" + gi + "|" + IO + ")",
  q1 = "(?:" + FO + "(?:d|ll|m|re|s|t|ve))?",
  G1 = "(?:" + FO + "(?:D|LL|M|RE|S|T|VE))?",
  BO = dH + "?",
  zO = "[" + lH + "]?",
  vH = "(?:" + hH + "(?:" + [pH, jO, UO].join("|") + ")" + zO + BO + ")*",
  gH = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
  yH = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
  wH = zO + BO + vH,
  xH = "(?:" + [cH, jO, UO].join("|") + ")" + wH,
  bH = RegExp(
    [
      gi + "?" + MO + "+" + q1 + "(?=" + [W1, gi, "$"].join("|") + ")",
      mH + "+" + G1 + "(?=" + [W1, gi + K1, "$"].join("|") + ")",
      gi + "?" + K1 + "+" + q1,
      gi + "+" + G1,
      yH,
      gH,
      LO,
      xH,
    ].join("|"),
    "g"
  );
function SH(e) {
  return e.match(bH) || [];
}
var EH = SH,
  CH = Q7,
  OH = Z7,
  _H = vl,
  $H = EH;
function PH(e, t, r) {
  return (
    (e = _H(e)),
    (t = r ? void 0 : t),
    t === void 0 ? (OH(e) ? $H(e) : CH(e)) : e.match(t) || []
  );
}
var NH = PH,
  TH = T7,
  RH = q7,
  AH = NH,
  kH = "['\u2019]",
  DH = RegExp(kH, "g");
function FH(e) {
  return function (t) {
    return TH(AH(RH(t).replace(DH, "")), e, "");
  };
}
var HO = FH,
  LH = HO,
  MH = LH(function (e, t, r) {
    return e + (r ? "_" : "") + t.toLowerCase();
  }),
  Y1 = MH;
function IH(e, t, r) {
  var n = -1,
    o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t),
    (r = r > o ? o : r),
    r < 0 && (r += o),
    (o = t > r ? 0 : (r - t) >>> 0),
    (t >>>= 0);
  for (var i = Array(o); ++n < o; ) i[n] = e[n + t];
  return i;
}
var jH = IH,
  UH = jH;
function BH(e, t, r) {
  var n = e.length;
  return (r = r === void 0 ? n : r), !t && r >= n ? e : UH(e, t, r);
}
var zH = BH,
  HH = "\\ud800-\\udfff",
  VH = "\\u0300-\\u036f",
  WH = "\\ufe20-\\ufe2f",
  KH = "\\u20d0-\\u20ff",
  qH = VH + WH + KH,
  GH = "\\ufe0e\\ufe0f",
  YH = "\\u200d",
  QH = RegExp("[" + YH + HH + qH + GH + "]");
function XH(e) {
  return QH.test(e);
}
var VO = XH;
function JH(e) {
  return e.split("");
}
var ZH = JH,
  WO = "\\ud800-\\udfff",
  eV = "\\u0300-\\u036f",
  tV = "\\ufe20-\\ufe2f",
  rV = "\\u20d0-\\u20ff",
  nV = eV + tV + rV,
  oV = "\\ufe0e\\ufe0f",
  iV = "[" + WO + "]",
  Th = "[" + nV + "]",
  Rh = "\\ud83c[\\udffb-\\udfff]",
  aV = "(?:" + Th + "|" + Rh + ")",
  KO = "[^" + WO + "]",
  qO = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  GO = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  sV = "\\u200d",
  YO = aV + "?",
  QO = "[" + oV + "]?",
  lV = "(?:" + sV + "(?:" + [KO, qO, GO].join("|") + ")" + QO + YO + ")*",
  uV = QO + YO + lV,
  cV = "(?:" + [KO + Th + "?", Th, qO, GO, iV].join("|") + ")",
  fV = RegExp(Rh + "(?=" + Rh + ")|" + cV + uV, "g");
function dV(e) {
  return e.match(fV) || [];
}
var pV = dV,
  hV = ZH,
  mV = VO,
  vV = pV;
function gV(e) {
  return mV(e) ? vV(e) : hV(e);
}
var yV = gV,
  wV = zH,
  xV = VO,
  bV = yV,
  SV = vl;
function EV(e) {
  return function (t) {
    t = SV(t);
    var r = xV(t) ? bV(t) : void 0,
      n = r ? r[0] : t.charAt(0),
      o = r ? wV(r, 1).join("") : t.slice(1);
    return n[e]() + o;
  };
}
var CV = EV,
  OV = CV,
  _V = OV("toUpperCase"),
  $V = _V,
  PV = vl,
  NV = $V;
function TV(e) {
  return NV(PV(e).toLowerCase());
}
var RV = TV,
  AV = RV,
  kV = HO,
  DV = kV(function (e, t, r) {
    return (t = t.toLowerCase()), e + (r ? AV(t) : t);
  }),
  FV = DV,
  LV = fO,
  MV = pO,
  IV = SO;
function jV(e, t) {
  var r = {};
  return (
    (t = IV(t)),
    MV(e, function (n, o, i) {
      LV(r, t(n, o, i), n);
    }),
    r
  );
}
var UV = jV,
  vg = { exports: {} };
vg.exports = function (e) {
  return XO(BV(e), e);
};
vg.exports.array = XO;
function XO(e, t) {
  var r = e.length,
    n = new Array(r),
    o = {},
    i = r,
    a = zV(t),
    s = HV(e);
  for (
    t.forEach(function (u) {
      if (!s.has(u[0]) || !s.has(u[1]))
        throw new Error(
          "Unknown node. There is an unknown node in the supplied edges."
        );
    });
    i--;

  )
    o[i] || l(e[i], i, new Set());
  return n;
  function l(u, c, d) {
    if (d.has(u)) {
      var p;
      try {
        p = ", node was:" + JSON.stringify(u);
      } catch {
        p = "";
      }
      throw new Error("Cyclic dependency" + p);
    }
    if (!s.has(u))
      throw new Error(
        "Found unknown node. Make sure to provided all involved nodes. Unknown node: " +
          JSON.stringify(u)
      );
    if (!o[c]) {
      o[c] = !0;
      var h = a.get(u) || new Set();
      if (((h = Array.from(h)), (c = h.length))) {
        d.add(u);
        do {
          var w = h[--c];
          l(w, s.get(w), d);
        } while (c);
        d.delete(u);
      }
      n[--r] = u;
    }
  }
}
function BV(e) {
  for (var t = new Set(), r = 0, n = e.length; r < n; r++) {
    var o = e[r];
    t.add(o[0]), t.add(o[1]);
  }
  return Array.from(t);
}
function zV(e) {
  for (var t = new Map(), r = 0, n = e.length; r < n; r++) {
    var o = e[r];
    t.has(o[0]) || t.set(o[0], new Set()),
      t.has(o[1]) || t.set(o[1], new Set()),
      t.get(o[0]).add(o[1]);
  }
  return t;
}
function HV(e) {
  for (var t = new Map(), r = 0, n = e.length; r < n; r++) t.set(e[r], r);
  return t;
}
var VV = vg.exports;
function WV(e, t = []) {
  let r = [],
    n = new Set(),
    o = new Set(t.map(([a, s]) => `${a}-${s}`));
  function i(a, s) {
    let l = kf.split(a)[0];
    n.add(l), o.has(`${s}-${l}`) || r.push([s, l]);
  }
  for (const a in e)
    if (gc(e, a)) {
      let s = e[a];
      n.add(a),
        xn.isRef(s) && s.isSibling
          ? i(s.path, a)
          : uO(s) && "deps" in s && s.deps.forEach((l) => i(l, a));
    }
  return VV.array(Array.from(n), r).reverse();
}
function Q1(e, t) {
  let r = 1 / 0;
  return (
    e.some((n, o) => {
      var i;
      if (((i = t.path) == null ? void 0 : i.indexOf(n)) !== -1)
        return (r = o), !0;
    }),
    r
  );
}
function JO(e) {
  return (t, r) => Q1(e, t) - Q1(e, r);
}
function Fi() {
  return (
    (Fi =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Fi.apply(this, arguments)
  );
}
let X1 = (e) => Object.prototype.toString.call(e) === "[object Object]";
function KV(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const qV = JO([]);
class ZO extends Ft {
  constructor(t) {
    super({ type: "object" }),
      (this.fields = Object.create(null)),
      (this._sortErrors = qV),
      (this._nodes = []),
      (this._excludedEdges = []),
      this.withMutation(() => {
        this.transform(function (n) {
          if (typeof n == "string")
            try {
              n = JSON.parse(n);
            } catch {
              n = null;
            }
          return this.isType(n) ? n : null;
        }),
          t && this.shape(t);
      });
  }
  _typeCheck(t) {
    return X1(t) || typeof t == "function";
  }
  _cast(t, r = {}) {
    var n;
    let o = super._cast(t, r);
    if (o === void 0) return this.getDefault();
    if (!this._typeCheck(o)) return o;
    let i = this.fields,
      a = (n = r.stripUnknown) != null ? n : this.spec.noUnknown,
      s = this._nodes.concat(
        Object.keys(o).filter((d) => this._nodes.indexOf(d) === -1)
      ),
      l = {},
      u = Fi({}, r, { parent: l, __validating: r.__validating || !1 }),
      c = !1;
    for (const d of s) {
      let p = i[d],
        h = gc(o, d);
      if (p) {
        let w,
          m = o[d];
        (u.path = (r.path ? `${r.path}.` : "") + d),
          (p = p.resolve({ value: m, context: r.context, parent: l }));
        let b = "spec" in p ? p.spec : void 0,
          y = b == null ? void 0 : b.strict;
        if (b != null && b.strip) {
          c = c || d in o;
          continue;
        }
        (w = !r.__validating || !y ? p.cast(o[d], u) : o[d]),
          w !== void 0 && (l[d] = w);
      } else h && !a && (l[d] = o[d]);
      l[d] !== o[d] && (c = !0);
    }
    return c ? l : o;
  }
  _validate(t, r = {}, n) {
    let o = [],
      {
        sync: i,
        from: a = [],
        originalValue: s = t,
        abortEarly: l = this.spec.abortEarly,
        recursive: u = this.spec.recursive,
      } = r;
    (a = [{ schema: this, value: s }, ...a]),
      (r.__validating = !0),
      (r.originalValue = s),
      (r.from = a),
      super._validate(t, r, (c, d) => {
        if (c) {
          if (!ar.isError(c) || l) return void n(c, d);
          o.push(c);
        }
        if (!u || !X1(d)) {
          n(o[0] || null, d);
          return;
        }
        s = s || d;
        let p = this._nodes.map((h) => (w, m) => {
          let b =
              h.indexOf(".") === -1
                ? (r.path ? `${r.path}.` : "") + h
                : `${r.path || ""}["${h}"]`,
            y = this.fields[h];
          if (y && "validate" in y) {
            y.validate(
              d[h],
              Fi({}, r, {
                path: b,
                from: a,
                strict: !0,
                parent: d,
                originalValue: s[h],
              }),
              m
            );
            return;
          }
          m(null);
        });
        Sh(
          {
            sync: i,
            tests: p,
            value: d,
            errors: o,
            endEarly: l,
            sort: this._sortErrors,
            path: r.path,
          },
          n
        );
      });
  }
  clone(t) {
    const r = super.clone(t);
    return (
      (r.fields = Fi({}, this.fields)),
      (r._nodes = this._nodes),
      (r._excludedEdges = this._excludedEdges),
      (r._sortErrors = this._sortErrors),
      r
    );
  }
  concat(t) {
    let r = super.concat(t),
      n = r.fields;
    for (let [o, i] of Object.entries(this.fields)) {
      const a = n[o];
      a === void 0
        ? (n[o] = i)
        : a instanceof Ft && i instanceof Ft && (n[o] = i.concat(a));
    }
    return r.withMutation(() => r.shape(n, this._excludedEdges));
  }
  getDefaultFromShape() {
    let t = {};
    return (
      this._nodes.forEach((r) => {
        const n = this.fields[r];
        t[r] = "default" in n ? n.getDefault() : void 0;
      }),
      t
    );
  }
  _getDefault() {
    if ("default" in this.spec) return super._getDefault();
    if (!!this._nodes.length) return this.getDefaultFromShape();
  }
  shape(t, r = []) {
    let n = this.clone(),
      o = Object.assign(n.fields, t);
    return (
      (n.fields = o),
      (n._sortErrors = JO(Object.keys(o))),
      r.length &&
        (Array.isArray(r[0]) || (r = [r]),
        (n._excludedEdges = [...n._excludedEdges, ...r])),
      (n._nodes = WV(o, n._excludedEdges)),
      n
    );
  }
  pick(t) {
    const r = {};
    for (const n of t) this.fields[n] && (r[n] = this.fields[n]);
    return this.clone().withMutation((n) => ((n.fields = {}), n.shape(r)));
  }
  omit(t) {
    const r = this.clone(),
      n = r.fields;
    r.fields = {};
    for (const o of t) delete n[o];
    return r.withMutation(() => r.shape(n));
  }
  from(t, r, n) {
    let o = kf.getter(t, !0);
    return this.transform((i) => {
      if (i == null) return i;
      let a = i;
      return gc(i, t) && ((a = Fi({}, i)), n || delete a[t], (a[r] = o(i))), a;
    });
  }
  noUnknown(t = !0, r = xh.noUnknown) {
    typeof t == "string" && ((r = t), (t = !0));
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(o) {
        if (o == null) return !0;
        const i = KV(this.schema, o);
        return (
          !t ||
          i.length === 0 ||
          this.createError({ params: { unknown: i.join(", ") } })
        );
      },
    });
    return (n.spec.noUnknown = t), n;
  }
  unknown(t = !0, r = xh.noUnknown) {
    return this.noUnknown(!t, r);
  }
  transformKeys(t) {
    return this.transform((r) => r && UV(r, (n, o) => t(o)));
  }
  camelCase() {
    return this.transformKeys(FV);
  }
  snakeCase() {
    return this.transformKeys(Y1);
  }
  constantCase() {
    return this.transformKeys((t) => Y1(t).toUpperCase());
  }
  describe() {
    let t = super.describe();
    return (t.fields = EO(this.fields, (r) => r.describe())), t;
  }
}
function _a(e) {
  return new ZO(e);
}
_a.prototype = ZO.prototype;
const GV = () => {
  var l, u, c, d;
  const e = Ut(),
    t = It(),
    { userInfo: r } = Ge((p) => p.login),
    n = _a().shape({
      email: ot().required("Email is required").email("Email is invalid"),
      password: ot()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(40, "Password must not exceed 40 characters"),
    }),
    {
      register: o,
      handleSubmit: i,
      formState: { errors: a },
    } = dl({ resolver: pl(n) }),
    s = (p) => {
      e(gu(p));
    };
  return (
    v.exports.useEffect(() => {
      if (r) return t("/");
    }, [r]),
    f(tg, {
      meta: "Login your account",
      image: "https://blog.hubspot.com/hubfs/ecommerce-1.png",
      title: "Login Your Account",
      children: E(I, {
        onSubmit: i(s),
        children: [
          E(I.Group, {
            controlId: "email",
            children: [
              f(I.Label, { children: "Email" }),
              f(I.Control, {
                type: "email",
                placeholder: "Enter email",
                ...o("email"),
                className:
                  ((l = a.email) == null ? void 0 : l.message) && "is-invalid",
              }),
              f("p", {
                className: "invalid-feedback",
                children: (u = a.email) == null ? void 0 : u.message,
              }),
            ],
          }),
          E(I.Group, {
            controlId: "password",
            children: [
              f(I.Label, { children: "Mot de Passe " }),
              f(I.Control, {
                type: "password",
                placeholder: "*******",
                ...o("password"),
                className:
                  ((c = a.password) == null ? void 0 : c.message) &&
                  "is-invalid",
              }),
              f("p", {
                className: "invalid-feedback",
                children: (d = a.password) == null ? void 0 : d.message,
              }),
              f(Nt, {
                to: "/register",
                className: "float-end me-2 mt-1",
                children: "Dont have an Account ? Register",
              }),
            ],
          }),
          f(ht, {
            type: "submit",
            className: "mt-4 w-full",
            style: { backgroundColor: "#e03a3c", color: "#fff" },
            variant: "outline-none",
            children: "Submit",
          }),
        ],
      }),
    })
  );
};
function zd(e) {
  return Hr({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z",
        },
      },
    ],
  })(e);
}
function YV(e) {
  return Hr({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M924.8 385.6a446.7 446.7 0 0 0-96-142.4 446.7 446.7 0 0 0-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 0 0-142.4 96 446.7 446.7 0 0 0-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM482 232c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8h-44c-4.4 0-8-3.6-8-8v-80zM270 582c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v44zm90.7-204.5l-31.1 31.1a8.03 8.03 0 0 1-11.3 0L261.7 352a8.03 8.03 0 0 1 0-11.3l31.1-31.1c3.1-3.1 8.2-3.1 11.3 0l56.6 56.6c3.1 3.1 3.1 8.2 0 11.3zm291.1 83.6l-84.5 84.5c5 18.7.2 39.4-14.5 54.1a55.95 55.95 0 0 1-79.2 0 55.95 55.95 0 0 1 0-79.2 55.87 55.87 0 0 1 54.1-14.5l84.5-84.5c3.1-3.1 8.2-3.1 11.3 0l28.3 28.3c3.1 3.1 3.1 8.1 0 11.3zm43-52.4l-31.1-31.1a8.03 8.03 0 0 1 0-11.3l56.6-56.6c3.1-3.1 8.2-3.1 11.3 0l31.1 31.1c3.1 3.1 3.1 8.2 0 11.3l-56.6 56.6a8.03 8.03 0 0 1-11.3 0zM846 582c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v44z",
        },
      },
    ],
  })(e);
}
const QV = () => {
    const e = Ut(),
      t = It(),
      { userInfo: r } = Ge((o) => o.login),
      n = () => {
        e(RC()), e(Uv()), t("/login");
      };
    return f(ki, {
      expand: "lg",
      variant: "dark",
      className:
        " show navbar-vertical  px-0 py-3  border-bottom border-bottom-lg-0 ",
      id: "navbarVertical",
      style: { backgroundColor: "#1b1b1b" },
      children: E(jt, {
        fluid: !0,
        children: [
          f(ht, {
            className: "navbar-toggler ms-n2",
            "data-bs-toggle": "collapse",
            "data-bs-target": "#sidebarCollapse",
            "aria-controls": "sidebarCollapse",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation",
            children: f("span", { className: "navbar-toggler-icon" }),
          }),
          f(Nt, {
            className:
              "navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0 d-flex align-items-center",
            to: "/",
            children: E("h2", {
              className: "logo text-white",
              children: [
                f("span", { className: "text-danger", children: "Type" }),
                " Shop",
              ],
            }),
          }),
          E("div", {
            className: "collapse navbar-collapse",
            id: "sidebarCollapse",
            children: [
              E("ul", {
                className: "navbar-nav",
                children: [
                  f("li", {
                    className: "nav-item  ",
                    children: E(Nt, {
                      className: "nav-link p-5",
                      to: "/dashboard",
                      children: [
                        f(YV, { className: "me-2", size: "1.5rem" }),
                        " Accueil",
                      ],
                    }),
                  }),
                  f("li", {
                    className: "nav-item ",
                    children: E(Nt, {
                      className: "nav-link p-5",
                      to: "/dashboard/product-list",
                      children: [
                        f(zd, { className: "me-2", size: "1.5rem" }),
                        " Products",
                      ],
                    }),
                  }),
                  f("li", {
                    className: "nav-item ",
                    children: E(Nt, {
                      className: "nav-link p-5",
                      to: "/dashboard/user-list",
                      children: [
                        f(zd, { className: "me-2", size: "1.5rem" }),
                        " Users",
                      ],
                    }),
                  }),
                  f("li", {
                    className: "nav-item ",
                    children: E(Nt, {
                      className: "nav-link p-5",
                      to: "/dashboard/orders-list",
                      children: [
                        f(zd, { className: "me-2", size: "1.5rem" }),
                        " Orders",
                      ],
                    }),
                  }),
                ],
              }),
              f("hr", { className: "navbar-divider my-5 opacity-20" }),
              f("div", { className: "" }),
              E("ul", {
                className: "navbar-nav",
                children: [
                  f("li", {
                    className: "nav-item",
                    children: E($o.Link, {
                      as: qr,
                      to: `/profile/${r == null ? void 0 : r._id}`,
                      children: [
                        f("i", { className: "bi bi-person-square" }),
                        " Profile",
                      ],
                    }),
                  }),
                  f("li", {
                    className: "nav-item",
                    children: E($o.Link, {
                      onClick: n,
                      children: [
                        f("i", { className: "bi bi-box-arrow-left" }),
                        " Logout",
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  XV = () =>
    f("header", {
      className: "border-bottom pt-6 shadow text-white ",
      style: { backgroundColor: "#1b1b1b" },
      children: f(jt, {
        fluid: !0,
        children: f("div", {
          className: "mb-npx h-16",
          children: E("div", {
            className: "row align-items-center ",
            children: [
              f("div", {
                className: "col-sm-6 col-12 mb-4 mb-sm-0 ",
                children: f("h1", {
                  className: "mb-2 ",
                  children: f(ki.Brand, { href: "#home" }),
                }),
              }),
              f("div", {
                className: "col-sm-6 col-12 text-sm-end text-xl",
                children: "Admin Dashboard",
              }),
            ],
          }),
        }),
      }),
    }),
  gl = ({ children: e }) =>
    f(v.exports.Fragment, {
      children: E("div", {
        className: "d-flex flex-column flex-lg-row ",
        children: [
          f(QV, {}),
          E("div", {
            style: { minHeight: "100vh" },
            className: " flex-grow-1 ",
            children: [
              f(XV, {}),
              f("main", { children: f(jt, { fluid: !0, children: e }) }),
            ],
          }),
        ],
      }),
    }),
  JV = () => {
    const { total: e } = Ge((a) => a.productFilter),
      { orders: t } = Ge((a) => a.orders),
      { users: r } = Ge((a) => a.userList),
      n = Ut(),
      i = (() => {
        let a = 0;
        return t
          ? (t.map((s) => {
              !s || (a += s.totalPrice);
            }),
            a)
          : 500.3;
      })();
    return (
      v.exports.useEffect(() => {
        n(ms());
      }, [n]),
      f(gl, {
        children: E(Pe, {
          className: "g-6 my-6",
          children: [
            f(re, {
              md: 4,
              children: f(Oe, {
                className: " shadow border-0",
                children: E(Oe.Body, {
                  children: [
                    E(Pe, {
                      children: [
                        E(re, {
                          children: [
                            f("span", {
                              className:
                                "h6 font-semibold text-muted text-sm d-block mb-2",
                              children: "Price",
                            }),
                            f("span", {
                              className: "h3 font-bold mb-0",
                              children: st(i),
                            }),
                          ],
                        }),
                        f("div", {
                          className: "col-auto",
                          children: f("div", {
                            className:
                              "icon icon-shape bg-tertiary text-white text-lg rounded-circle",
                            children: f("i", {
                              className: "bi bi-credit-card",
                            }),
                          }),
                        }),
                      ],
                    }),
                    E("div", {
                      className: "mt-2 mb-0 text-sm",
                      children: [
                        E("span", {
                          className:
                            "badge badge-pill bg-soft-success text-success me-2",
                          children: [
                            f("i", { className: "bi bi-arrow-up me-1" }),
                            "13%",
                          ],
                        }),
                        f("span", {
                          className: "text-nowrap text-xs text-muted",
                          children: "Depuis le mois dernier",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            f(re, {
              md: 4,
              children: f(Oe, {
                className: " shadow border-0",
                children: E(Oe.Body, {
                  children: [
                    E(Pe, {
                      children: [
                        E(re, {
                          children: [
                            f("span", {
                              className:
                                "h6 font-semibold text-muted text-sm d-block mb-2",
                              children: "Clients",
                            }),
                            f("span", {
                              className: "h3 font-bold mb-0",
                              children: r.length,
                            }),
                          ],
                        }),
                        f("div", {
                          className: "col-auto",
                          children: f("div", {
                            className:
                              "icon icon-shape bg-primary text-white text-lg rounded-circle",
                            children: f("i", { className: "bi bi-people" }),
                          }),
                        }),
                      ],
                    }),
                    E("div", {
                      className: "mt-2 mb-0 text-sm",
                      children: [
                        E("span", {
                          className:
                            "badge badge-pill bg-soft-success text-success me-2",
                          children: [
                            f("i", { className: "bi bi-arrow-up me-1" }),
                            "30%",
                          ],
                        }),
                        f("span", {
                          className: "text-nowrap text-xs text-muted",
                          children: "Depuis le mois dernier",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            f(re, {
              md: 4,
              children: f(Oe, {
                className: " shadow border-0",
                children: E(Oe.Body, {
                  children: [
                    E(Pe, {
                      children: [
                        E(re, {
                          children: [
                            f("span", {
                              className:
                                "h6 font-semibold text-muted text-sm d-block mb-2",
                              children: "Products",
                            }),
                            f("span", {
                              className: "h3 font-bold mb-0",
                              children: e,
                            }),
                          ],
                        }),
                        f("div", {
                          className: "col-auto",
                          children: f("div", {
                            className:
                              "icon icon-shape bg-info text-white text-lg rounded-circle",
                            children: f("i", {
                              className: "bi bi-clock-history",
                            }),
                          }),
                        }),
                      ],
                    }),
                    E("div", {
                      className: "mt-2 mb-0 text-sm",
                      children: [
                        E("span", {
                          className:
                            "badge badge-pill bg-soft-danger text-danger me-2",
                          children: [
                            f("i", { className: "bi bi-arrow-down me-1" }),
                            "-5%",
                          ],
                        }),
                        f("span", {
                          className: "text-nowrap text-xs text-muted",
                          children: "Depuis le mois dernier",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      })
    );
  },
  ZV = ({ show: e, handleClose: t, children: r, title: n }) =>
    E(Bl, {
      show: e,
      onHide: t,
      children: [
        f(Bl.Header, {
          closeButton: !0,
          children: f(Bl.Title, {
            style: { color: "#e03a3c" },
            className: "text-xl",
            children: n,
          }),
        }),
        f(Bl.Body, {
          children: f(jt, {
            children: f(Pe, { children: f(re, { md: 12, children: r }) }),
          }),
        }),
      ],
    }),
  eW = ({ show: e, handleClose: t, setRefresh: r }) => {
    var d, p, h, w, m, b, y, g, x, S;
    const n = _a().shape({
        name: ot().required(),
        category: ot().required(),
        brand: ot().required(),
        price: mg().required(),
        description: ot().required(),
      }),
      [o, i] = v.exports.useState(""),
      {
        register: a,
        handleSubmit: s,
        formState: { errors: l },
      } = dl({ resolver: pl(n) }),
      u = (C) => {
        if (C.target.files) {
          const $ = C.target.files[0];
          let P = new FormData();
          P.append("image", $),
            mt.post("/uploads/image", P).then((R) => {
              R.data && i(`${Yv}${R.data}`);
            });
        }
      };
    return f(ZV, {
      title: "Add Product",
      handleClose: t,
      show: e,
      children: E(I, {
        onSubmit: s((C) => {
          mt.post("/products", { ...C, image: o })
            .then(($) => {
              ge.success("Product has beend created"), r((P) => (P = !P)), t();
            })
            .catch(($) => ge.error(ut($)));
        }),
        children: [
          E(I.Group, {
            children: [
              f(I.Label, { children: "Name" }),
              f(I.Control, {
                type: "text",
                placeholder: "doe",
                ...a("name"),
                className:
                  ((d = l.name) == null ? void 0 : d.message) && "is-invalid",
              }),
              f("p", {
                className: "invalid-feedback",
                children: (p = l.name) == null ? void 0 : p.message,
              }),
            ],
          }),
          E(I.Group, {
            children: [
              f(I.Label, { children: "Image" }),
              f(I.Control, {
                type: "file",
                placeholder: "Gtx 1660 super",
                name: "image",
                onChange: u,
              }),
            ],
          }),
          E(I.Group, {
            children: [
              f(I.Label, { children: "Brand" }),
              f(I.Control, {
                type: "text",
                placeholder: "Msi",
                ...a("brand"),
                className:
                  ((h = l.brand) == null ? void 0 : h.message) && "is-invalid",
              }),
              f("p", {
                className: "invalid-feedback",
                children: (w = l.brand) == null ? void 0 : w.message,
              }),
            ],
          }),
          E(I.Group, {
            children: [
              f(I.Label, { children: "Category" }),
              f(I.Control, {
                type: "text",
                placeholder: "Graphics",
                ...a("category"),
                className:
                  ((m = l.category) == null ? void 0 : m.message) &&
                  "is-invalid",
              }),
              f("p", {
                className: "invalid-feedback",
                children: (b = l.category) == null ? void 0 : b.message,
              }),
            ],
          }),
          E(I.Group, {
            children: [
              f(I.Label, { children: "Price" }),
              f(I.Control, {
                type: "number",
                placeholder: "200.00",
                ...a("price"),
                className:
                  ((y = l.price) == null ? void 0 : y.message) && "is-invalid",
              }),
              f("p", {
                className: "invalid-feedback",
                children: (g = l.price) == null ? void 0 : g.message,
              }),
            ],
          }),
          E(I.Group, {
            children: [
              f(I.Label, { children: "Description" }),
              f(I.Control, {
                as: "textarea",
                rows: 3,
                placeholder: "description",
                ...a("description"),
                className:
                  ((x = l.description) == null ? void 0 : x.message) &&
                  "is-invalid",
              }),
              f("p", {
                className: "invalid-feedback",
                children: (S = l.description) == null ? void 0 : S.message,
              }),
            ],
          }),
          f(ht, {
            style: { backgroundColor: "#e03a3c", color: "#fff" },
            variant: "outline-none",
            type: "submit",
            className: "mt-3 w-full text-white",
            children: "Ajouter",
          }),
        ],
      }),
    });
  };
var e_ = {},
  t_ = {},
  tW = f_(yN);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = i(v.exports),
    r = i(Wc.exports),
    n = tW,
    o = [
      "children",
      "onClick",
      "replace",
      "to",
      "state",
      "activeClassName",
      "className",
      "activeStyle",
      "style",
      "isActive",
    ];
  function i(m) {
    return m && m.__esModule ? m : { default: m };
  }
  function a(m, b) {
    var y = Object.keys(m);
    if (Object.getOwnPropertySymbols) {
      var g = Object.getOwnPropertySymbols(m);
      b &&
        (g = g.filter(function (x) {
          return Object.getOwnPropertyDescriptor(m, x).enumerable;
        })),
        y.push.apply(y, g);
    }
    return y;
  }
  function s(m) {
    for (var b = 1; b < arguments.length; b++) {
      var y = arguments[b] != null ? arguments[b] : {};
      b % 2
        ? a(Object(y), !0).forEach(function (g) {
            l(m, g, y[g]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(y))
        : a(Object(y)).forEach(function (g) {
            Object.defineProperty(m, g, Object.getOwnPropertyDescriptor(y, g));
          });
    }
    return m;
  }
  function l(m, b, y) {
    return (
      b in m
        ? Object.defineProperty(m, b, {
            value: y,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (m[b] = y),
      m
    );
  }
  function u(m) {
    return (
      (u =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (b) {
              return typeof b;
            }
          : function (b) {
              return b &&
                typeof Symbol == "function" &&
                b.constructor === Symbol &&
                b !== Symbol.prototype
                ? "symbol"
                : typeof b;
            }),
      u(m)
    );
  }
  function c(m, b) {
    if (m == null) return {};
    var y = d(m, b),
      g,
      x;
    if (Object.getOwnPropertySymbols) {
      var S = Object.getOwnPropertySymbols(m);
      for (x = 0; x < S.length; x++)
        (g = S[x]),
          !(b.indexOf(g) >= 0) &&
            (!Object.prototype.propertyIsEnumerable.call(m, g) ||
              (y[g] = m[g]));
    }
    return y;
  }
  function d(m, b) {
    if (m == null) return {};
    var y = {},
      g = Object.keys(m),
      x,
      S;
    for (S = 0; S < g.length; S++)
      (x = g[S]), !(b.indexOf(x) >= 0) && (y[x] = m[x]);
    return y;
  }
  var p = function (b) {
      return !!(b.metaKey || b.altKey || b.ctrlKey || b.shiftKey);
    },
    h = function (b) {
      var y = b.children,
        g = b.onClick,
        x = b.replace,
        S = b.to,
        C = b.state,
        $ = b.activeClassName,
        P = b.className,
        R = b.activeStyle,
        M = b.style,
        L = b.isActive,
        F = c(b, o),
        B = u(S) === "object" ? S.pathname || "" : S,
        z = (0, n.useNavigate)(),
        G = (0, n.useHref)(typeof S == "string" ? { pathname: S } : S),
        X = (0, n.useMatch)(B),
        ne = (0, n.useLocation)(),
        fe = t.default.Children.only(y),
        D = !!(L ? (typeof L == "function" ? L(X, ne) : L) : X),
        K = function (oe) {
          y.props.onClick && y.props.onClick(oe),
            g && g(oe),
            !oe.defaultPrevented &&
              oe.button === 0 &&
              !p(oe) &&
              (oe.preventDefault(), z(S, { replace: x, state: C }));
        };
      return t.default.cloneElement(
        fe,
        s(
          s({}, F),
          {},
          {
            className: [P, fe.props.className, D ? $ : null].join(" ").trim(),
            style: D ? s(s({}, M), R) : M,
            href: G,
            onClick: K,
          }
        )
      );
    };
  (h.propTypes = {
    children: r.default.element.isRequired,
    onClick: r.default.func,
    replace: r.default.bool,
    to: r.default.oneOfType([r.default.string, r.default.object]).isRequired,
    state: r.default.object,
    className: r.default.string,
    activeClassName: r.default.string,
    style: r.default.objectOf(
      r.default.oneOfType([r.default.string, r.default.number])
    ),
    activeStyle: r.default.objectOf(
      r.default.oneOfType([r.default.string, r.default.number])
    ),
    isActive: r.default.oneOfType([r.default.func, r.default.bool]),
  }),
    (h.defaultProps = {
      replace: !1,
      activeClassName: "active",
      onClick: null,
      className: null,
      style: null,
      activeStyle: null,
      isActive: null,
    });
  var w = h;
  e.default = w;
})(t_);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    Object.defineProperty(e, "LinkContainer", {
      enumerable: !0,
      get: function () {
        return t.default;
      },
    });
  var t = r(t_);
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
})(e_);
const r_ = ({ pages: e, page: t, isAdmin: r = !1, keyword: n = "" }) =>
    f(br, {
      children:
        e > 1 &&
        f(m0, {
          children: [...Array(e).keys()].map((o) =>
            f(
              e_.LinkContainer,
              {
                to: r
                  ? `/dashboard/product-list/${o + 1}`
                  : n
                  ? `/search/${n}/page/${o + 1}`
                  : `/page/${o + 1}`,
                children: f(m0.Item, { active: o + 1 === t, children: o + 1 }),
              },
              o + 1
            )
          ),
        }),
    }),
  Df = ({ children: e, cols: t }) =>
    f(Oe, {
      className: " shadow border-0 mt-5 ",
      children: E(Uk, {
        responsive: !0,
        hover: !0,
        className: "table-nowrap",
        children: [
          f("thead", {
            style: { backgroundColor: "#e03a3c" },
            className: "thead-light text-white",
            children: f("tr", {
              children: t.map((r) => f("th", { scope: "col", children: r }, r)),
            }),
          }),
          f("tbody", { children: e }),
        ],
      }),
    });
function J1() {
  const e = Ut(),
    { products: t, page: r, pages: n, loading: o } = Ge((m) => m.productFilter),
    [i, a] = v.exports.useState(!1),
    [s, l] = v.exports.useState(!1),
    c = Zo().pageNumber || 1,
    d = () => l(!0),
    p = () => l(!1),
    h = [
      "image",
      "name",
      "brand",
      "category",
      "price",
      "created At",
      "options",
    ],
    w = (m) => {
      window.confirm("are you sure?") &&
        mt
          .delete(`/products/${m}`)
          .then((b) => {
            ge.success("Product has beend deleted"), a((y) => (y = !y));
          })
          .catch((b) => ge.error(ut(b)));
    };
  return (
    v.exports.useEffect(() => {
      e(vs({ n: c, b: "", c: "", q: "" }));
    }, [e, c, i]),
    E(gl, {
      children: [
        o
          ? f(ii, {})
          : E(Pe, {
              className: "py-3",
              children: [
                E("h3", {
                  className:
                    "d-flex justify-content-between align-items-center",
                  children: [
                    f("span", { children: "Product List" }),
                    f(ht, {
                      style: { backgroundColor: "#e03a3c", color: "#fff" },
                      variant: "outline-none",
                      onClick: d,
                      size: "sm",
                      children: "Add Product",
                    }),
                  ],
                }),
                f(Df, {
                  cols: h,
                  children: t.map((m) =>
                    E(
                      "tr",
                      {
                        children: [
                          f("td", {
                            children: f(ri, {
                              className: "avatar",
                              roundedCircle: !0,
                              src: m.image,
                            }),
                          }),
                          f("td", { children: m.name }),
                          f("td", { children: m.brand }),
                          f("td", { children: m.category }),
                          f("td", { children: st(m.price) }),
                          f("td", {
                            children: ul(m == null ? void 0 : m.createdAt),
                          }),
                          E("td", {
                            children: [
                              f(Nt, {
                                className: "btn btn-sm btn-primary me-2",
                                to: `/dashboard/product-edit/${m._id}`,
                                children: f(Wk, {}),
                              }),
                              f(ht, {
                                onClick: () => w(m._id),
                                variant: "danger",
                                size: "sm",
                                children: f(Zc, {}),
                              }),
                            ],
                          }),
                        ],
                      },
                      m._id
                    )
                  ),
                }),
              ],
            }),
        f(r_, { pages: n, page: r, isAdmin: !0, keyword: "" }),
        f(eW, { setRefresh: a, show: s, handleClose: p }),
      ],
    })
  );
}
const rW = () => {
    const e = Ut(),
      { users: t, loading: r } = Ge((l) => l.userList),
      n = ["name", "email", "created At", "admin", "promote", "delete"],
      [o, i] = v.exports.useState(!1),
      a = (l) => {
        window.confirm("are you sure?") &&
          mt
            .delete(`/users/${l}`)
            .then((u) => {
              ge.success("user has beend deleted"), i((c) => (c = !c));
            })
            .catch((u) => ge.error(ut(u)));
      },
      s = (l) => {
        window.confirm("are you sure?") &&
          mt
            .post(`/users/promote/${l}`)
            .then((u) => {
              ge.success("user has beend promoted"), i((c) => (c = !c));
            })
            .catch((u) => ge.error(ut(u)));
      };
    return (
      v.exports.useEffect(() => {
        e(wu());
      }, [e, o]),
      f(gl, {
        children: r
          ? f(ii, {})
          : E(Pe, {
              className: "py-3",
              children: [
                f("h3", {
                  className:
                    "d-flex justify-content-between align-items-center",
                  children: f("span", { children: "User List" }),
                }),
                f(Df, {
                  cols: n,
                  children: t.map((l) =>
                    E(
                      "tr",
                      {
                        children: [
                          f("td", { children: l.name }),
                          f("td", { children: l.email }),
                          f("td", { children: ul(l.createdAt) }),
                          f("td", {
                            children: l.isAdmin
                              ? f(Cv, { color: "green" })
                              : f(Ov, { color: "red" }),
                          }),
                          E("td", {
                            children: [
                              " ",
                              !(l != null && l.isAdmin) &&
                                f(ht, {
                                  onClick: () => s(l._id),
                                  variant: "success",
                                  size: "sm",
                                  className: "me-3",
                                  children: "Promote",
                                }),
                            ],
                          }),
                          f("td", {
                            children: f(ht, {
                              onClick: () => a(l._id),
                              variant: "danger",
                              size: "sm",
                              children: f(Zc, {}),
                            }),
                          }),
                        ],
                      },
                      l._id
                    )
                  ),
                }),
              ],
            }),
      })
    );
  },
  nW = () => {
    var u, c, d, p, h, w, m, b, y, g, x, S;
    const { products: e } = Ge((C) => C.productFilter),
      { id: t } = Zo(),
      r = It(),
      n = e.find((C) => C._id === t),
      o = _a().shape({
        name: ot().required(),
        image: ot().required(),
        category: ot().required(),
        brand: ot().required(),
        price: mg().required(),
        description: ot().required(),
      });
    console.log(n);
    const {
        register: i,
        handleSubmit: a,
        formState: { errors: s },
      } = dl({ resolver: pl(o) }),
      l = (C) => {
        mt.put(`/products/${n == null ? void 0 : n._id}`, C)
          .then(($) => {
            ge.success("Product has beend updated"),
              r("/dashboard/product-list");
          })
          .catch(($) => ge.error(ut($)));
      };
    return f(gl, {
      children: f(Pe, {
        className: " justify-content-center py-6",
        children: f(re, {
          lg: 5,
          md: 6,
          children: E(Oe, {
            children: [
              f("h1", {
                className: "text-center text-primary my-3",
                children: "Update Product",
              }),
              f(Oe.Body, {
                children: E(I, {
                  onSubmit: a(l),
                  children: [
                    E(I.Group, {
                      children: [
                        f(I.Label, { children: "Name" }),
                        f(I.Control, {
                          type: "text",
                          placeholder: "product name",
                          ...i("name", { value: n == null ? void 0 : n.name }),
                          className:
                            ((u = s.name) == null ? void 0 : u.message) &&
                            "is-invalid",
                        }),
                        f("p", {
                          className: "invalid-feedback",
                          children: (c = s.name) == null ? void 0 : c.message,
                        }),
                      ],
                    }),
                    E(I.Group, {
                      children: [
                        f(I.Label, { children: "Image" }),
                        f(I.Control, {
                          type: "text",
                          placeholder: "image url",
                          ...i("image", {
                            value: n == null ? void 0 : n.image,
                          }),
                          className:
                            ((d = s.image) == null ? void 0 : d.message) &&
                            "is-invalid",
                        }),
                        f("p", {
                          className: "invalid-feedback",
                          children: (p = s.image) == null ? void 0 : p.message,
                        }),
                      ],
                    }),
                    E(I.Group, {
                      children: [
                        f(I.Label, { children: "Brand" }),
                        f(I.Control, {
                          type: "text",
                          placeholder: "doe",
                          ...i("brand", {
                            value: n == null ? void 0 : n.brand,
                          }),
                          className:
                            ((h = s.brand) == null ? void 0 : h.message) &&
                            "is-invalid",
                        }),
                        f("p", {
                          className: "invalid-feedback",
                          children: (w = s.brand) == null ? void 0 : w.message,
                        }),
                      ],
                    }),
                    E(I.Group, {
                      children: [
                        f(I.Label, { children: "Category" }),
                        f(I.Control, {
                          type: "text",
                          placeholder: "doe",
                          ...i("category", {
                            value: n == null ? void 0 : n.category,
                          }),
                          className:
                            ((m = s.category) == null ? void 0 : m.message) &&
                            "is-invalid",
                        }),
                        f("p", {
                          className: "invalid-feedback",
                          children:
                            (b = s.category) == null ? void 0 : b.message,
                        }),
                      ],
                    }),
                    E(I.Group, {
                      children: [
                        f(I.Label, { children: "Price" }),
                        f(I.Control, {
                          placeholder: "200",
                          ...i("price", {
                            value: n == null ? void 0 : n.price,
                          }),
                          className:
                            ((y = s.price) == null ? void 0 : y.message) &&
                            "is-invalid",
                        }),
                        f("p", {
                          className: "invalid-feedback",
                          children: (g = s.price) == null ? void 0 : g.message,
                        }),
                      ],
                    }),
                    E(I.Group, {
                      children: [
                        f(I.Label, { children: "Description" }),
                        f(I.Control, {
                          as: "textarea",
                          rows: 3,
                          placeholder: "description",
                          ...i("description", {
                            value: n == null ? void 0 : n.description,
                          }),
                          className:
                            ((x = s.description) == null
                              ? void 0
                              : x.message) && "is-invalid",
                        }),
                        f("p", {
                          className: "invalid-feedback",
                          children:
                            (S = s.description) == null ? void 0 : S.message,
                        }),
                      ],
                    }),
                    f(ht, {
                      type: "submit",
                      className: "mt-3 w-full text-white",
                      children: "Ajouter",
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
    });
  },
  oW = () => {
    var a, s, l, u, c, d, p, h;
    const e = It(),
      t = _a().shape({
        name: ot()
          .required("Username is required")
          .min(6, "Username must be at least 6 characters")
          .max(20, "Username must not exceed 20 characters"),
        email: ot().required("Email is required").email("Email is invalid"),
        password: ot()
          .required("Password is required")
          .min(6, "Password must be at least 6 characters")
          .max(40, "Password must not exceed 40 characters"),
        confirmPassword: ot()
          .required("Confirm Password is required")
          .oneOf([OO("password"), null], "Confirm Password does not match"),
      }),
      {
        register: r,
        handleSubmit: n,
        formState: { errors: o },
      } = dl({ resolver: pl(t) });
    return f(tg, {
      meta: "register for free",
      image: "https://blog.hubspot.com/hubfs/ecommerce-1.png",
      title: "Register For Free",
      children: E(I, {
        onSubmit: n((w) => {
          xa.post("/users/register", w)
            .then((m) => {
              ge.success("you have been registred , please login"), e("/login");
            })
            .catch((m) => ge.error(ut(m)));
        }),
        children: [
          E(I.Group, {
            controlId: "name",
            children: [
              f(I.Label, { children: "Username" }),
              f(I.Control, {
                placeholder: "Enter name",
                ...r("name"),
                className:
                  ((a = o.name) == null ? void 0 : a.message) && "is-invalid",
              }),
              f("p", {
                className: "invalid-feedback",
                children: (s = o.name) == null ? void 0 : s.message,
              }),
            ],
          }),
          E(I.Group, {
            controlId: "email",
            children: [
              f(I.Label, { children: "Email" }),
              f(I.Control, {
                type: "email",
                placeholder: "Enter email",
                ...r("email"),
                className:
                  ((l = o.email) == null ? void 0 : l.message) && "is-invalid",
              }),
              f("p", {
                className: "invalid-feedback",
                children: (u = o.email) == null ? void 0 : u.message,
              }),
            ],
          }),
          E(I.Group, {
            controlId: "password",
            children: [
              f(I.Label, { children: "Mot de Passe " }),
              f(I.Control, {
                type: "password",
                placeholder: "*******",
                ...r("password"),
                className:
                  ((c = o.password) == null ? void 0 : c.message) &&
                  "is-invalid",
              }),
              f("p", {
                className: "invalid-feedback",
                children: (d = o.password) == null ? void 0 : d.message,
              }),
            ],
          }),
          E(I.Group, {
            controlId: "confirmPassword",
            children: [
              f(I.Label, { children: "Confirm Password " }),
              f(I.Control, {
                type: "password",
                placeholder: "*******",
                ...r("confirmPassword"),
                className:
                  ((p = o.confirmPassword) == null ? void 0 : p.message) &&
                  "is-invalid",
              }),
              f("p", {
                className: "invalid-feedback",
                children: (h = o.confirmPassword) == null ? void 0 : h.message,
              }),
              f(Nt, {
                to: "/login",
                className: "float-end me-2 mt-1",
                children: "Already have an Account ? Login",
              }),
            ],
          }),
          f(ht, {
            style: { backgroundColor: "#e03a3c", color: "#fff" },
            variant: "outline-none",
            type: "submit",
            className: "mt-4 w-full",
            children: "Register",
          }),
        ],
      }),
    });
  };
function iW(e) {
  return Hr({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          fill: "none",
          stroke: "#000",
          strokeWidth: "2",
          d: "M12,21 C7,21 1,16 1,12 C1,8 7,3 12,3 C17,3 23,8 23,12 C23,16 17,21 12,21 Z M12,7 C9.23875,7 7,9.23875 7,12 C7,14.76125 9.23875,17 12,17 C14.76125,17 17,14.76125 17,12 C17,9.23875 14.76125,7 12,7 L12,7 Z",
        },
      },
    ],
  })(e);
}
const aW = () => {
  var m, b, y, g, x, S, C, $;
  const e = Ut(),
    { user: t, loading: r } = Ge((P) => P.userDetails),
    { orders: n, loading: o } = Ge((P) => P.userOrder),
    { id: i } = Zo(),
    [a, s] = v.exports.useState(!1),
    l = _a().shape({
      name: ot().required(),
      email: ot().required("Email is required").email("Email is invalid"),
      password: ot(),
      confirmPassword: ot().oneOf(
        [OO("password"), null],
        "Confirm Password does not match"
      ),
    }),
    {
      register: u,
      handleSubmit: c,
      formState: { errors: d },
    } = dl({ resolver: pl(l) }),
    p = (P) => {
      const R = {
        name: P.name,
        email: P.email,
        password: P.password === "" ? null : P.password,
      };
      mt.put(`/users/${t == null ? void 0 : t._id}`, R)
        .then((M) => {
          ge.success("user has been updated"), s((L) => (L = !L));
        })
        .catch((M) => ge.error(ut(M)));
    },
    h = (P) => {
      window.confirm("are you sure?") &&
        mt
          .delete(`/orders/${P}`)
          .then((R) => {
            ge.success(R.data), s((M) => (M = !M));
          })
          .catch((R) => ge.error(ut(R)));
    };
  v.exports.useEffect(() => {
    e(yu(i)), e(xu());
  }, [e, i, a]);
  const w = ["Order id", "Price", "Address", "Paid", "Date", "Options"];
  return f(An, {
    title: `${t == null ? void 0 : t.name} profile`,
    children: f(jt, {
      children:
        r || !t || o || !n
          ? f(ii, {})
          : E(Pe, {
              children: [
                E(re, {
                  lg: 4,
                  md: 5,
                  xs: 12,
                  children: [
                    f("h2", { children: "User Profile" }),
                    f(Oe, {
                      children: f(Oe.Body, {
                        children: E(I, {
                          onSubmit: c(p),
                          children: [
                            E(I.Group, {
                              controlId: "name",
                              children: [
                                f(I.Label, { children: "Username" }),
                                f(I.Control, {
                                  ...u("name", {
                                    value: t == null ? void 0 : t.name,
                                  }),
                                  placeholder: "Enter name",
                                  className:
                                    ((m = d.name) == null
                                      ? void 0
                                      : m.message) && "is-invalid",
                                }),
                                f("p", {
                                  className: "invalid-feedback",
                                  children:
                                    (b = d.name) == null ? void 0 : b.message,
                                }),
                              ],
                            }),
                            E(I.Group, {
                              controlId: "email",
                              children: [
                                f(I.Label, { children: "Email Address" }),
                                f(I.Control, {
                                  ...u("email", {
                                    value: t == null ? void 0 : t.email,
                                  }),
                                  placeholder: "Enter email",
                                  className:
                                    ((y = d.email) == null
                                      ? void 0
                                      : y.message) && "is-invalid",
                                }),
                                f("p", {
                                  className: "invalid-feedback",
                                  children:
                                    (g = d.email) == null ? void 0 : g.message,
                                }),
                              ],
                            }),
                            E(I.Group, {
                              controlId: "password",
                              children: [
                                f(I.Label, { children: "Password" }),
                                f(I.Control, {
                                  ...u("password"),
                                  type: "password",
                                  placeholder: "********",
                                  className:
                                    ((x = d.password) == null
                                      ? void 0
                                      : x.message) && "is-invalid",
                                }),
                                f("p", {
                                  className: "invalid-feedback",
                                  children:
                                    (S = d.password) == null
                                      ? void 0
                                      : S.message,
                                }),
                              ],
                            }),
                            E(I.Group, {
                              controlId: "confirmPassword",
                              children: [
                                f(I.Label, { children: "Confirm Password" }),
                                f(I.Control, {
                                  ...u("confirmPassword"),
                                  type: "password",
                                  placeholder: "********",
                                  className:
                                    ((C = d.confirmPassword) == null
                                      ? void 0
                                      : C.message) && "is-invalid",
                                }),
                                f("p", {
                                  className: "invalid-feedback",
                                  children:
                                    ($ = d.confirmPassword) == null
                                      ? void 0
                                      : $.message,
                                }),
                              ],
                            }),
                            f(ht, {
                              style: {
                                backgroundColor: "#e03a3c",
                                color: "#fff",
                              },
                              variant: "outline-none",
                              type: "submit",
                              className: "mt-3 w-full",
                              children: "Update",
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                f(re, {
                  md: 7,
                  lg: 8,
                  children: f(Df, {
                    cols: w,
                    children: n.map((P) => {
                      var R;
                      return E(
                        "tr",
                        {
                          children: [
                            f("td", { children: P._id }),
                            f("td", {
                              children: st(P == null ? void 0 : P.totalPrice),
                            }),
                            f("td", {
                              children:
                                (R = P == null ? void 0 : P.shippingAddress) ==
                                null
                                  ? void 0
                                  : R.address,
                            }),
                            f("td", {
                              children: P.isPaid
                                ? f(Cv, { color: "green" })
                                : f(Ov, { color: "red" }),
                            }),
                            f("td", {
                              children: ul(P == null ? void 0 : P.createdAt),
                            }),
                            E("td", {
                              children: [
                                f(Nt, {
                                  to: `/orders/${P._id}`,
                                  className: "btn btn-sm btn-secondary  me-2",
                                  children: f(iW, {}),
                                }),
                                f(ht, {
                                  onClick: () => h(P._id),
                                  variant: "danger",
                                  size: "sm",
                                  children: f(Zc, {}),
                                }),
                              ],
                            }),
                          ],
                        },
                        P._id
                      );
                    }),
                  }),
                }),
              ],
            }),
    }),
  });
};
const sW = () => {
  const e = It();
  return f(An, {
    children: f("section", {
      id: "contact",
      className: "contact",
      children: E(jt, {
        "data-aos": "fade-up",
        children: [
          E("div", {
            className: "section-title",
            children: [
              f("h2", { className: "text-center", children: "Contact" }),
              f("p", {
                children:
                  "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.",
              }),
            ],
          }),
          E(Pe, {
            "data-aos": "fade-up",
            "data-aos-delay": 100,
            children: [
              f(re, {
                lg: 6,
                children: E(Pe, {
                  children: [
                    f(re, {
                      md: 12,
                      children: E("div", {
                        className: "info-box bg-white",
                        children: [
                          f("i", { className: "bx bx-map" }),
                          f("h3", { children: "Our Address" }),
                          f("p", {
                            children: "A108 Adam Street, New York, NY 535022",
                          }),
                        ],
                      }),
                    }),
                    f(re, {
                      md: 6,
                      children: E("div", {
                        className: "info-box mt-4 bg-white",
                        children: [
                          f("i", { className: "bx bx-envelope" }),
                          f("h3", { children: "Email Us" }),
                          E("p", {
                            children: [
                              "info@example.com",
                              f("br", {}),
                              "contact@example.com",
                            ],
                          }),
                        ],
                      }),
                    }),
                    f(re, {
                      md: 6,
                      children: E("div", {
                        className: "info-box mt-4 bg-white",
                        children: [
                          f("i", { className: "bx bx-phone-call" }),
                          f("h3", { children: "Call Us" }),
                          E("p", {
                            children: [
                              "+1 5589 55488 55",
                              f("br", {}),
                              "+1 6678 254445 41",
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              f(re, {
                lg: 6,
                children: E(I, {
                  onSubmit: (t) => {
                    t.preventDefault(),
                      ge.success("Thanks for your feedback \u{1F642}"),
                      e("/");
                  },
                  className: "php-email-form bg-white",
                  children: [
                    E(Pe, {
                      children: [
                        f(re, {
                          className: " form-group",
                          children: f(I.Control, {
                            type: "text",
                            name: "name",
                            className: "bg-surface-secondary",
                            id: "name",
                            placeholder: "Your Name",
                            required: !0,
                          }),
                        }),
                        f("div", {
                          className: "col form-group",
                          children: f(I.Control, {
                            type: "email",
                            className: "bg-surface-secondary",
                            name: "email",
                            id: "email",
                            placeholder: "Your Email",
                            required: !0,
                          }),
                        }),
                      ],
                    }),
                    f("div", {
                      className: "form-group",
                      children: f(I.Control, {
                        type: "text",
                        className: "bg-surface-secondary",
                        name: "subject",
                        id: "subject",
                        placeholder: "Subject",
                        required: !0,
                      }),
                    }),
                    f("div", {
                      className: "form-group",
                      children: f(I.Control, {
                        as: "textarea",
                        className: "bg-surface-secondary",
                        name: "message",
                        rows: 5,
                        placeholder: "Message",
                        required: !0,
                        defaultValue: "",
                      }),
                    }),
                    E("div", {
                      className: "my-3",
                      children: [
                        f("div", { className: "loading", children: "Loading" }),
                        f("div", { className: "error-message" }),
                        f("div", {
                          className: "sent-message",
                          children: "Your message has been sent. Thank you!",
                        }),
                      ],
                    }),
                    f("div", {
                      className: "text-center",
                      children: f("button", {
                        type: "submit",
                        children: "Send Message",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
};
function lW() {
  const e = Ut(),
    { orders: t, loading: r } = Ge((s) => s.orders),
    [n, o] = v.exports.useState(!1),
    i = ["Order_id", "TotalPrice", "Address", "Status", "Created At", "Delete"],
    a = (s) => {
      window.confirm("are you sure?") &&
        mt
          .delete(`/orders/${s}`)
          .then((l) => {
            ge.success(l.data), o((u) => (u = !u));
          })
          .catch((l) => ge.error(ut(l)));
    };
  return (
    v.exports.useEffect(() => {
      e(ms());
    }, [e, n]),
    f(gl, {
      children: r
        ? f(ii, {})
        : E(Pe, {
            className: "py-3",
            children: [
              f("h3", {
                className: "d-flex justify-content-between align-items-center",
                children: f("span", { children: "Orders List" }),
              }),
              f(Df, {
                cols: i,
                children: t.map((s) => {
                  var l;
                  return E(
                    "tr",
                    {
                      children: [
                        f("td", { children: s._id }),
                        f("td", {
                          children: st(s == null ? void 0 : s.totalPrice),
                        }),
                        f("td", {
                          children:
                            (l = s == null ? void 0 : s.shippingAddress) == null
                              ? void 0
                              : l.address,
                        }),
                        f("td", {
                          children: s.isPaid
                            ? f(Cv, { color: "green" })
                            : f(Ov, { color: "red" }),
                        }),
                        f("td", {
                          children: ul(s == null ? void 0 : s.createdAt),
                        }),
                        f("td", {
                          children: f(ht, {
                            onClick: () => a(s._id),
                            variant: "danger",
                            size: "sm",
                            children: f(Zc, {}),
                          }),
                        }),
                      ],
                    },
                    s._id
                  );
                }),
              }),
            ],
          }),
    })
  );
}
var n_ = {};
Object.defineProperty(n_, "__esModule", { value: !0 });
var qa =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    },
  uW = (function () {
    function e(t, r) {
      for (var n = 0; n < r.length; n++) {
        var o = r[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, r, n) {
      return r && e(t.prototype, r), n && e(t, n), t;
    };
  })(),
  cW = v.exports,
  mi = o_(cW),
  fW = Wc.exports,
  Ce = o_(fW);
function o_(e) {
  return e && e.__esModule ? e : { default: e };
}
function Hd(e, t, r) {
  return (
    t in e
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
function dW(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pW(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function hW(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Ga = !1,
  Z1 = !1,
  ew = !1,
  Ff = (function (e) {
    hW(t, e);
    function t(r) {
      dW(this, t);
      var n = pW(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r));
      return (
        (n.onScriptLoaded = function () {
          t.stripeHandler ||
            ((t.stripeHandler = StripeCheckout.configure({
              key: n.props.stripeKey,
            })),
            n.hasPendingClick && n.showStripeDialog());
        }),
        (n.onScriptError = function () {
          for (var o = arguments.length, i = Array(o), a = 0; a < o; a++)
            i[a] = arguments[a];
          n.hideLoadingDialog(),
            n.props.onScriptError && n.props.onScriptError.apply(n, i);
        }),
        (n.onClosed = function () {
          for (var o = arguments.length, i = Array(o), a = 0; a < o; a++)
            i[a] = arguments[a];
          n._isMounted && n.setState({ open: !1 }),
            n.props.closed && n.props.closed.apply(n, i);
        }),
        (n.onOpened = function () {
          for (var o = arguments.length, i = Array(o), a = 0; a < o; a++)
            i[a] = arguments[a];
          n.setState({ open: !0 }),
            n.props.opened && n.props.opened.apply(n, i);
        }),
        (n.getConfig = function () {
          return [
            "token",
            "image",
            "name",
            "description",
            "amount",
            "locale",
            "currency",
            "panelLabel",
            "zipCode",
            "shippingAddress",
            "billingAddress",
            "email",
            "allowRememberMe",
            "bitcoin",
            "alipay",
            "alipayReusable",
          ].reduce(
            function (o, i) {
              return qa(
                {},
                o,
                n.props.hasOwnProperty(i) && Hd({}, i, n.props[i])
              );
            },
            { opened: n.onOpened, closed: n.onClosed }
          );
        }),
        (n.onClick = function () {
          if (!n.props.disabled)
            if (ew)
              try {
                throw new Error(
                  "Tried to call onClick, but StripeCheckout failed to load"
                );
              } catch {}
            else
              t.stripeHandler
                ? n.showStripeDialog()
                : (n.showLoadingDialog(), (n.hasPendingClick = !0));
        }),
        (n.handleOnMouseDown = function () {
          n.setState({ buttonActive: !0 });
        }),
        (n.handleOnMouseUp = function () {
          n.setState({ buttonActive: !1 });
        }),
        (n.state = { open: !1, buttonActive: !1 }),
        n
      );
    }
    return (
      uW(t, [
        {
          key: "componentDidMount",
          value: function () {
            var n = this;
            if (((this._isMounted = !0), !Z1 && !Ga)) {
              Ga = !0;
              var o = document.createElement("script");
              typeof this.props.onScriptTagCreated == "function" &&
                this.props.onScriptTagCreated(o),
                (o.src = "https://checkout.stripe.com/checkout.js"),
                (o.async = 1),
                (this.loadPromise = (function () {
                  var i = !1,
                    a = new Promise(function (l, u) {
                      (o.onload = function () {
                        (Z1 = !0), (Ga = !1), l(), n.onScriptLoaded();
                      }),
                        (o.onerror = function (c) {
                          (ew = !0), (Ga = !1), u(c), n.onScriptError(c);
                        });
                    }),
                    s = new Promise(function (l, u) {
                      a.then(function () {
                        return i ? u({ isCanceled: !0 }) : l();
                      }),
                        a.catch(function (c) {
                          return u(i ? { isCanceled: !0 } : c);
                        });
                    });
                  return {
                    promise: s,
                    cancel: function () {
                      i = !0;
                    },
                  };
                })()),
                this.loadPromise.promise
                  .then(this.onScriptLoaded)
                  .catch(this.onScriptError),
                document.body.appendChild(o);
            }
          },
        },
        {
          key: "componentDidUpdate",
          value: function () {
            Ga || this.updateStripeHandler();
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            (this._isMounted = !1),
              this.loadPromise && this.loadPromise.cancel(),
              t.stripeHandler && this.state.open && t.stripeHandler.close();
          },
        },
        {
          key: "updateStripeHandler",
          value: function () {
            (!t.stripeHandler || this.props.reconfigureOnUpdate) &&
              (t.stripeHandler = StripeCheckout.configure({
                key: this.props.stripeKey,
              }));
          },
        },
        {
          key: "showLoadingDialog",
          value: function () {
            if (this.props.showLoadingDialog) {
              for (var n = arguments.length, o = Array(n), i = 0; i < n; i++)
                o[i] = arguments[i];
              this.props.showLoadingDialog.apply(this, o);
            }
          },
        },
        {
          key: "hideLoadingDialog",
          value: function () {
            if (this.props.hideLoadingDialog) {
              for (var n = arguments.length, o = Array(n), i = 0; i < n; i++)
                o[i] = arguments[i];
              this.props.hideLoadingDialog.apply(this, o);
            }
          },
        },
        {
          key: "showStripeDialog",
          value: function () {
            this.hideLoadingDialog(), t.stripeHandler.open(this.getConfig());
          },
        },
        {
          key: "renderDefaultStripeButton",
          value: function () {
            return mi.default.createElement(
              "button",
              qa({}, Hd({}, this.props.triggerEvent, this.onClick), {
                className: this.props.className,
                onMouseDown: this.handleOnMouseDown,
                onFocus: this.handleOnMouseDown,
                onMouseUp: this.handleOnMouseUp,
                onMouseOut: this.handleOnMouseUp,
                onBlur: this.handleOnMouseUp,
                style: qa(
                  {},
                  {
                    overflow: "hidden",
                    display: "inline-block",
                    background: "linear-gradient(#28a0e5,#015e94)",
                    border: 0,
                    padding: 1,
                    textDecoration: "none",
                    borderRadius: 5,
                    boxShadow: "0 1px 0 rgba(0,0,0,0.2)",
                    cursor: "pointer",
                    visibility: "visible",
                    userSelect: "none",
                  },
                  this.state.buttonActive && { background: "#005d93" },
                  this.props.style
                ),
              }),
              mi.default.createElement(
                "span",
                {
                  style: qa(
                    {},
                    {
                      backgroundImage:
                        "linear-gradient(#7dc5ee,#008cdd 85%,#30a2e4)",
                      fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
                      fontSize: 14,
                      position: "relative",
                      padding: "0 12px",
                      display: "block",
                      height: 30,
                      lineHeight: "30px",
                      color: "#fff",
                      fontWeight: "bold",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)",
                      textShadow: "0 -1px 0 rgba(0,0,0,0.25)",
                      borderRadius: 4,
                    },
                    this.state.buttonActive && {
                      color: "#eee",
                      boxShadow: "inset 0 1px 0 rgba(0,0,0,0.1)",
                      backgroundImage:
                        "linear-gradient(#008cdd,#008cdd 85%,#239adf)",
                    },
                    this.props.textStyle
                  ),
                },
                this.props.label
              )
            );
          },
        },
        {
          key: "renderDisabledButton",
          value: function () {
            return mi.default.createElement(
              "button",
              {
                disabled: !0,
                style: {
                  background: "rgba(0,0,0,0.2)",
                  overflow: "hidden",
                  display: "inline-block",
                  border: 0,
                  padding: 1,
                  textDecoration: "none",
                  borderRadius: 5,
                  userSelect: "none",
                },
              },
              mi.default.createElement(
                "span",
                {
                  style: {
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)",
                    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
                    fontSize: 14,
                    position: "relative",
                    padding: "0 12px",
                    display: "block",
                    height: 30,
                    lineHeight: "30px",
                    borderRadius: 4,
                    color: "#999",
                    background: "#f8f9fa",
                    textShadow: "0 1px 0 rgba(255,255,255,0.5)",
                  },
                },
                this.props.label
              )
            );
          },
        },
        {
          key: "render",
          value: function () {
            this.props.desktopShowModal === !0 && !this.state.open
              ? this.onClick()
              : this.props.desktopShowModal === !1 &&
                this.state.open &&
                t.stripeHandler.close();
            var n = this.props.ComponentClass;
            return this.props.children
              ? mi.default.createElement(
                  n,
                  qa({}, Hd({}, this.props.triggerEvent, this.onClick), {
                    children: this.props.children,
                  })
                )
              : this.props.disabled
              ? this.renderDisabledButton()
              : this.renderDefaultStripeButton();
          },
        },
      ]),
      t
    );
  })(mi.default.Component);
Ff.defaultProps = {
  className: "StripeCheckout",
  label: "Pay With Card",
  locale: "auto",
  ComponentClass: "span",
  reconfigureOnUpdate: !1,
  triggerEvent: "onClick",
};
Ff.propTypes = {
  desktopShowModal: Ce.default.bool,
  triggerEvent: Ce.default.oneOf(["onClick", "onTouchTap", "onTouchStart"]),
  label: Ce.default.string,
  style: Ce.default.object,
  textStyle: Ce.default.object,
  disabled: Ce.default.bool,
  ComponentClass: Ce.default.string,
  showLoadingDialog: Ce.default.func,
  hideLoadingDialog: Ce.default.func,
  onScriptError: Ce.default.func,
  onScriptTagCreated: Ce.default.func,
  reconfigureOnUpdate: Ce.default.bool,
  stripeKey: Ce.default.string.isRequired,
  token: Ce.default.func.isRequired,
  name: Ce.default.string,
  description: Ce.default.string,
  image: Ce.default.string,
  amount: Ce.default.number,
  locale: Ce.default.oneOf([
    "auto",
    "zh",
    "da",
    "nl",
    "en",
    "fr",
    "de",
    "it",
    "ja",
    "no",
    "es",
    "sv",
  ]),
  currency: Ce.default.oneOf([
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BRL",
    "BSD",
    "BWP",
    "BZD",
    "CAD",
    "CDF",
    "CHF",
    "CLP",
    "CNY",
    "COP",
    "CRC",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EEK",
    "EGP",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "GBP",
    "GEL",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "INR",
    "ISK",
    "JMD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KMF",
    "KRW",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LTL",
    "LVL",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MNT",
    "MOP",
    "MRO",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SEK",
    "SGD",
    "SHP",
    "SLL",
    "SOS",
    "SRD",
    "STD",
    "SVC",
    "SZL",
    "THB",
    "TJS",
    "TOP",
    "TRY",
    "TTD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "USD",
    "UYU",
    "UZS",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XCD",
    "XOF",
    "XPF",
    "YER",
    "ZAR",
    "ZMW",
  ]),
  panelLabel: Ce.default.string,
  zipCode: Ce.default.bool,
  billingAddress: Ce.default.bool,
  shippingAddress: Ce.default.bool,
  email: Ce.default.string,
  allowRememberMe: Ce.default.bool,
  bitcoin: Ce.default.bool,
  alipay: Ce.default.oneOf(["auto", !0, !1]),
  alipayReusable: Ce.default.bool,
  opened: Ce.default.func,
  closed: Ce.default.func,
};
Ff._isMounted = !1;
var mW = (n_.default = Ff);
const vW = () => {
    const { order: e, loading: t } = Ge((d) => d.orderDetail),
      r = Ut(),
      { id: n } = Zo(),
      o =
        e == null
          ? void 0
          : e.cartItems.reduce((d, p) => d + p.qty * p.price, 0),
      i = It(),
      a = o ? o * 0.1 : 0,
      s = o ? (o >= 200 ? 0 : 30) : 0,
      l = o && o + a + s,
      u = (d) => {
        mt.post("/orders/stripe", {
          token: d.id,
          amount: e == null ? void 0 : e.totalPrice,
        })
          .then((p) => {
            mt.put(`/orders/${e == null ? void 0 : e._id}`).then((h) => {
              ge.success("you have been paid successfully\u{1F642}"), i("/");
            });
          })
          .catch((p) => ge.error(ut(p)));
      },
      c = (d) => {
        u(d);
      };
    return (
      v.exports.useEffect(() => {
        r(bu(n));
      }, [r, n]),
      f(An, {
        title: "order payment",
        children: E(jt, {
          children: [
            f("h2", { className: "mb-5", children: "Payment" }),
            t
              ? f(ii, {})
              : E(Pe, {
                  children: [
                    f(re, {
                      md: 8,
                      className: "mb-sm-3 mb-2",
                      children: f(Oe, {
                        children: E(Oe.Body, {
                          children: [
                            f("h4", { children: "Order Summery" }),
                            f(pe, {
                              variant: "flush",
                              children:
                                e == null
                                  ? void 0
                                  : e.cartItems.map((d) =>
                                      f(
                                        pe.Item,
                                        {
                                          children: E(Pe, {
                                            children: [
                                              f(re, {
                                                md: 2,
                                                children: f(ri, {
                                                  src: d.image,
                                                  roundedCircle: !0,
                                                  className: "h-16 w-16",
                                                }),
                                              }),
                                              f(re, {
                                                md: 6,
                                                className: "d-none d-lg-block",
                                                children: d.name,
                                              }),
                                              f(re, {
                                                children:
                                                  d == null ? void 0 : d.qty,
                                              }),
                                              f(re, {
                                                children: st(d.price * d.qty),
                                              }),
                                            ],
                                          }),
                                        },
                                        d._id
                                      )
                                    ),
                            }),
                          ],
                        }),
                      }),
                    }),
                    f(re, {
                      md: 4,
                      children: f(Oe, {
                        children: E(Oe.Body, {
                          children: [
                            f("h2", {
                              className: "text-center",
                              children: "Payment",
                            }),
                            E(pe, {
                              variant: "flush",
                              children: [
                                E(pe.Item, {
                                  as: "h2",
                                  children: [
                                    "SubTotal (",
                                    e == null
                                      ? void 0
                                      : e.cartItems.reduce(
                                          (d, p) => d + p.qty,
                                          0
                                        ),
                                    ") item",
                                  ],
                                }),
                                E(pe.Item, {
                                  className:
                                    " d-flex justify-content-between align-items-center",
                                  children: [
                                    f("span", { children: "Total Price :" }),
                                    f("span", {
                                      children: st(
                                        e == null
                                          ? void 0
                                          : e.cartItems.reduce(
                                              (d, p) => d + p.price * p.qty,
                                              0
                                            )
                                      ),
                                    }),
                                  ],
                                }),
                                E(pe.Item, {
                                  className:
                                    " d-flex justify-content-between align-items-center",
                                  children: [
                                    f("span", { children: "Tax Price" }),
                                    f("span", { children: st(a) }),
                                  ],
                                }),
                                E(pe.Item, {
                                  className:
                                    " d-flex justify-content-between align-items-center",
                                  children: [
                                    f("span", { children: "Shipping Price" }),
                                    f("span", { children: st(s) }),
                                  ],
                                }),
                                f(pe.Item, {
                                  children: E("h5", {
                                    className:
                                      " d-flex justify-content-between align-items-center",
                                    children: [
                                      f("span", { children: "Total Price" }),
                                      f("span", { children: st(l) }),
                                    ],
                                  }),
                                }),
                                !(e != null && e.isPaid) &&
                                  f(pe.Item, {
                                    className: "stripe__container",
                                    children: f(mW, {
                                      currency: "USD",
                                      description: `Total Price ${st(
                                        e == null ? void 0 : e.totalPrice
                                      )}`,
                                      name: "Type Shop",
                                      image: "/LogoMakr-6Tit9e.png",
                                      stripeKey: {}.VITE_API_STRIPE,
                                      token: c,
                                    }),
                                  }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
          ],
        }),
      })
    );
  },
  Vd = () => {
    const e = Zo(),
      {
        products: t,
        categories: r,
        brands: n,
        page: o,
        pages: i,
      } = Ge((b) => b.productFilter),
      a = Ut(),
      [s, l] = v.exports.useState(""),
      [u, c] = v.exports.useState(""),
      [d, p] = v.exports.useState(""),
      h = e.keyword,
      w = e.pageNumber || 1,
      m = () => {
        l(""), c(""), p("");
      };
    return (
      v.exports.useEffect(() => {
        a(vs({ n: w, b: s, c: u, q: d }));
      }, [a, w, s, d, u]),
      f(An, {
        children: E(jt, {
          children: [
            E(Pe, {
              children: [
                E(re, {
                  lg: 3,
                  children: [
                    f("h2", { className: "py-4", children: "Filter" }),
                    f(Oe, {
                      className: "shadow p-3",
                      children: E(pe, {
                        variant: "flush",
                        children: [
                          E(pe.Item, {
                            children: [
                              f("h4", {
                                className: "mb-2",
                                children: "Category",
                              }),
                              E(Yp, {
                                defaultValue: "All",
                                onChange: (b) => {
                                  b.target.value === "All"
                                    ? m()
                                    : c(b.target.value);
                                },
                                children: [
                                  f("option", {
                                    value: "All",
                                    children: "All",
                                  }),
                                  "All",
                                  r.map((b) =>
                                    f("option", { value: b, children: b }, b)
                                  ),
                                ],
                              }),
                            ],
                          }),
                          E(pe.Item, {
                            children: [
                              f("h4", { className: "mb-2", children: "Brand" }),
                              E(Yp, {
                                defaultValue: "All",
                                onChange: (b) => {
                                  b.target.value === "All"
                                    ? m()
                                    : l(b.target.value);
                                },
                                children: [
                                  f("option", {
                                    value: "All",
                                    children: "All",
                                  }),
                                  "All",
                                  n.map((b) =>
                                    f("option", { value: b, children: b }, b)
                                  ),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                E(re, {
                  lg: 9,
                  children: [
                    f(Pe, {
                      children: f("div", {
                        className: "col-md-6 pb-4",
                        children: f("div", {
                          className: "d-flex",
                          children: f(I.Control, {
                            onChange: (b) => p(b.target.value),
                            className: "me-2",
                            placeholder: "Search...",
                            value: d,
                          }),
                        }),
                      }),
                    }),
                    f(Pe, {
                      style: { minHeight: "80vh" },
                      children: t.map((b) =>
                        f(
                          re,
                          {
                            lg: 4,
                            md: 6,
                            xs: 12,
                            children: f(jC, { product: b }),
                          },
                          b._id
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
            f(r_, { pages: i, page: o, keyword: h || "", isAdmin: !1 }),
          ],
        }),
      })
    );
  },
  ql = ({ children: e }) => {
    const { userInfo: t } = Ge((r) => r.login);
    return t
      ? E(br, { children: [" ", e, " "] })
      : f(v.exports.Fragment, {
          children: f(Am, { to: "/login", replace: !0 }),
        });
  },
  vi = ({ children: e }) => {
    const { userInfo: t } = Ge((r) => r.login);
    return t && t.isAdmin
      ? f(br, { children: e })
      : f(v.exports.Fragment, { children: f(Am, { to: "/", replace: !0 }) });
  },
  gW = () =>
    E(Bb, {
      children: [
        E(km, {
          children: [
            f(Je, { path: "/", element: f(K4, {}) }),
            f(Je, { path: "/home", element: f(Vd, {}) }),
            f(Je, { path: "/search/:keyword", element: f(Vd, {}) }),
            f(Je, { path: "/page/:pageNumber", element: f(Vd, {}) }),
            f(Je, { path: "/products/:id", element: f(G4, {}) }),
            f(Je, { path: "/cart", element: f(H4, {}) }),
            f(Je, {
              path: "/shipping-address",
              element: f(ql, { children: f(W4, {}) }),
            }),
            f(Je, {
              path: "/checkout",
              element: f(ql, { children: f(V4, {}) }),
            }),
            f(Je, {
              path: "/profile/:id",
              element: f(ql, { children: f(aW, {}) }),
            }),
            f(Je, { path: "/login", element: f(GV, {}) }),
            f(Je, { path: "/register", element: f(oW, {}) }),
            f(Je, {
              path: "/orders/:id",
              element: f(ql, { children: f(vW, {}) }),
            }),
            f(Je, {
              path: "/dashboard",
              element: f(vi, { children: f(JV, {}) }),
            }),
            f(Je, {
              path: "/dashboard/product-list",
              element: f(vi, { children: f(J1, {}) }),
            }),
            f(Je, {
              path: "/dashboard/product-list/:pageNumber",
              element: f(vi, { children: f(J1, {}) }),
            }),
            f(Je, {
              path: "/dashboard/user-list",
              element: f(vi, { children: f(rW, {}) }),
            }),
            f(Je, {
              path: "/dashboard/orders-list",
              element: f(vi, { children: f(lW, {}) }),
            }),
            f(Je, {
              path: "/dashboard/product-edit/:id",
              element: f(vi, { children: f(nW, {}) }),
            }),
            f(Je, { path: "/contact", element: f(sW, {}) }),
          ],
        }),
        f(jD, { position: "top-center", reverseOrder: !1 }),
      ],
    });
function Cu(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Cu = function (r) {
          return typeof r;
        })
      : (Cu = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Cu(e)
  );
}
function yW(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function tw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function wW(e, t, r) {
  return t && tw(e.prototype, t), r && tw(e, r), e;
}
function xW(e, t) {
  return t && (Cu(t) === "object" || typeof t == "function") ? t : Ou(e);
}
function Ah(e) {
  return (
    (Ah = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ah(e)
  );
}
function Ou(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function bW(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && kh(e, t);
}
function kh(e, t) {
  return (
    (kh =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    kh(e, t)
  );
}
function _u(e, t, r) {
  return (
    t in e
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
var i_ = (function (e) {
  bW(t, e);
  function t() {
    var r, n;
    yW(this, t);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (n = xW(this, (r = Ah(t)).call.apply(r, [this].concat(i)))),
      _u(Ou(n), "state", { bootstrapped: !1 }),
      _u(Ou(n), "_unsubscribe", void 0),
      _u(Ou(n), "handlePersistorState", function () {
        var s = n.props.persistor,
          l = s.getState(),
          u = l.bootstrapped;
        u &&
          (n.props.onBeforeLift
            ? Promise.resolve(n.props.onBeforeLift()).finally(function () {
                return n.setState({ bootstrapped: !0 });
              })
            : n.setState({ bootstrapped: !0 }),
          n._unsubscribe && n._unsubscribe());
      }),
      n
    );
  }
  return (
    wW(t, [
      {
        key: "componentDidMount",
        value: function () {
          (this._unsubscribe = this.props.persistor.subscribe(
            this.handlePersistorState
          )),
            this.handlePersistorState();
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this._unsubscribe && this._unsubscribe();
        },
      },
      {
        key: "render",
        value: function () {
          return typeof this.props.children == "function"
            ? this.props.children(this.state.bootstrapped)
            : this.state.bootstrapped
            ? this.props.children
            : this.props.loading;
        },
      },
    ]),
    t
  );
})(v.exports.PureComponent);
_u(i_, "defaultProps", { children: null, loading: null });
Wd.createRoot(document.getElementById("root")).render(
  f(PF, {
    store: eg,
    children: f(i_, { loading: null, persistor: e4, children: f(gW, {}) }),
  })
);
