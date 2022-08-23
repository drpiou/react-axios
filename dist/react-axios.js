import It, { useRef as ee, useEffect as Rt, useMemo as za } from "react";
var yr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ua = typeof yr == "object" && yr && yr.Object === Object && yr, Dt = Ua, Ba = Dt, qa = typeof self == "object" && self && self.Object === Object && self, Ka = Ba || qa || Function("return this")(), M = Ka, Ha = M, Wa = Ha.Symbol, $r = Wa, Fe = $r, Ft = Object.prototype, Ya = Ft.hasOwnProperty, Xa = Ft.toString, ir = Fe ? Fe.toStringTag : void 0;
function Ja(r) {
  var e = Ya.call(r, ir), t = r[ir];
  try {
    r[ir] = void 0;
    var n = !0;
  } catch {
  }
  var i = Xa.call(r);
  return n && (e ? r[ir] = t : delete r[ir]), i;
}
var Va = Ja, Za = Object.prototype, Qa = Za.toString;
function rn(r) {
  return Qa.call(r);
}
var en = rn, Me = $r, tn = Va, an = en, nn = "[object Null]", on = "[object Undefined]", Le = Me ? Me.toStringTag : void 0;
function sn(r) {
  return r == null ? r === void 0 ? on : nn : Le && Le in Object(r) ? tn(r) : an(r);
}
var te = sn;
function cn(r) {
  return r != null && typeof r == "object";
}
var Mt = cn, un = te, fn = Mt, ln = "[object Arguments]";
function pn(r) {
  return fn(r) && un(r) == ln;
}
var vn = pn, Ne = vn, yn = Mt, Lt = Object.prototype, _n = Lt.hasOwnProperty, hn = Lt.propertyIsEnumerable;
Ne(function() {
  return arguments;
}());
var dr = { exports: {} };
function dn() {
  return !1;
}
var gn = dn;
(function(r, e) {
  var t = M, n = gn, i = e && !e.nodeType && e, o = i && !0 && r && !r.nodeType && r, u = o && o.exports === i, f = u ? t.Buffer : void 0, l = f ? f.isBuffer : void 0, p = l || n;
  r.exports = p;
})(dr, dr.exports);
var Br = { exports: {} };
(function(r, e) {
  var t = Dt, n = e && !e.nodeType && e, i = n && !0 && r && !r.nodeType && r, o = i && i.exports === n, u = o && t.process, f = function() {
    try {
      var l = i && i.require && i.require("util").types;
      return l || u && u.binding && u.binding("util");
    } catch {
    }
  }();
  r.exports = f;
})(Br, Br.exports);
var ke = Br.exports;
ke && ke.isTypedArray;
dr.exports;
function bn(r) {
  var e = typeof r;
  return r != null && (e == "object" || e == "function");
}
var Nt = bn, $n = te, mn = Nt, On = "[object AsyncFunction]", Tn = "[object Function]", wn = "[object GeneratorFunction]", An = "[object Proxy]";
function Sn(r) {
  if (!mn(r))
    return !1;
  var e = $n(r);
  return e == Tn || e == wn || e == On || e == An;
}
var jn = Sn;
function Pn() {
  this.__data__ = [], this.size = 0;
}
var Cn = Pn;
function En(r, e) {
  return r === e || r !== r && e !== e;
}
var xn = En, In = xn;
function Rn(r, e) {
  for (var t = r.length; t--; )
    if (In(r[t][0], e))
      return t;
  return -1;
}
var mr = Rn, Dn = mr, Fn = Array.prototype, Mn = Fn.splice;
function Ln(r) {
  var e = this.__data__, t = Dn(e, r);
  if (t < 0)
    return !1;
  var n = e.length - 1;
  return t == n ? e.pop() : Mn.call(e, t, 1), --this.size, !0;
}
var Nn = Ln, kn = mr;
function Gn(r) {
  var e = this.__data__, t = kn(e, r);
  return t < 0 ? void 0 : e[t][1];
}
var zn = Gn, Un = mr;
function Bn(r) {
  return Un(this.__data__, r) > -1;
}
var qn = Bn, Kn = mr;
function Hn(r, e) {
  var t = this.__data__, n = Kn(t, r);
  return n < 0 ? (++this.size, t.push([r, e])) : t[n][1] = e, this;
}
var Wn = Hn, Yn = Cn, Xn = Nn, Jn = zn, Vn = qn, Zn = Wn;
function Y(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
Y.prototype.clear = Yn;
Y.prototype.delete = Xn;
Y.prototype.get = Jn;
Y.prototype.has = Vn;
Y.prototype.set = Zn;
var Qn = Y, ro = M, eo = ro["__core-js_shared__"], to = eo, Nr = to, Ge = function() {
  var r = /[^.]+$/.exec(Nr && Nr.keys && Nr.keys.IE_PROTO || "");
  return r ? "Symbol(src)_1." + r : "";
}();
function ao(r) {
  return !!Ge && Ge in r;
}
var no = ao, oo = Function.prototype, io = oo.toString;
function so(r) {
  if (r != null) {
    try {
      return io.call(r);
    } catch {
    }
    try {
      return r + "";
    } catch {
    }
  }
  return "";
}
var kt = so, co = jn, uo = no, fo = Nt, lo = kt, po = /[\\^$.*+?()[\]{}|]/g, vo = /^\[object .+?Constructor\]$/, yo = Function.prototype, _o = Object.prototype, ho = yo.toString, go = _o.hasOwnProperty, bo = RegExp(
  "^" + ho.call(go).replace(po, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function $o(r) {
  if (!fo(r) || uo(r))
    return !1;
  var e = co(r) ? bo : vo;
  return e.test(lo(r));
}
var mo = $o;
function Oo(r, e) {
  return r == null ? void 0 : r[e];
}
var To = Oo, wo = mo, Ao = To;
function So(r, e) {
  var t = Ao(r, e);
  return wo(t) ? t : void 0;
}
var X = So, jo = X, Po = M, Co = jo(Po, "Map"), Gt = Co, Eo = X, xo = Eo(Object, "create"), Or = xo, ze = Or;
function Io() {
  this.__data__ = ze ? ze(null) : {}, this.size = 0;
}
var Ro = Io;
function Do(r) {
  var e = this.has(r) && delete this.__data__[r];
  return this.size -= e ? 1 : 0, e;
}
var Fo = Do, Mo = Or, Lo = "__lodash_hash_undefined__", No = Object.prototype, ko = No.hasOwnProperty;
function Go(r) {
  var e = this.__data__;
  if (Mo) {
    var t = e[r];
    return t === Lo ? void 0 : t;
  }
  return ko.call(e, r) ? e[r] : void 0;
}
var zo = Go, Uo = Or, Bo = Object.prototype, qo = Bo.hasOwnProperty;
function Ko(r) {
  var e = this.__data__;
  return Uo ? e[r] !== void 0 : qo.call(e, r);
}
var Ho = Ko, Wo = Or, Yo = "__lodash_hash_undefined__";
function Xo(r, e) {
  var t = this.__data__;
  return this.size += this.has(r) ? 0 : 1, t[r] = Wo && e === void 0 ? Yo : e, this;
}
var Jo = Xo, Vo = Ro, Zo = Fo, Qo = zo, ri = Ho, ei = Jo;
function J(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
J.prototype.clear = Vo;
J.prototype.delete = Zo;
J.prototype.get = Qo;
J.prototype.has = ri;
J.prototype.set = ei;
var ti = J, Ue = ti, ai = Qn, ni = Gt;
function oi() {
  this.size = 0, this.__data__ = {
    hash: new Ue(),
    map: new (ni || ai)(),
    string: new Ue()
  };
}
var ii = oi;
function si(r) {
  var e = typeof r;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? r !== "__proto__" : r === null;
}
var ci = si, ui = ci;
function fi(r, e) {
  var t = r.__data__;
  return ui(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
}
var Tr = fi, li = Tr;
function pi(r) {
  var e = li(this, r).delete(r);
  return this.size -= e ? 1 : 0, e;
}
var vi = pi, yi = Tr;
function _i(r) {
  return yi(this, r).get(r);
}
var hi = _i, di = Tr;
function gi(r) {
  return di(this, r).has(r);
}
var bi = gi, $i = Tr;
function mi(r, e) {
  var t = $i(this, r), n = t.size;
  return t.set(r, e), this.size += t.size == n ? 0 : 1, this;
}
var Oi = mi, Ti = ii, wi = vi, Ai = hi, Si = bi, ji = Oi;
function V(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
V.prototype.clear = Ti;
V.prototype.delete = wi;
V.prototype.get = Ai;
V.prototype.has = Si;
V.prototype.set = ji;
var Pi = V, Ci = M;
Ci.Uint8Array;
var Be = $r, qe = Be ? Be.prototype : void 0;
qe && qe.valueOf;
var Ei = X, xi = M, Ii = Ei(xi, "DataView"), Ri = Ii, Di = X, Fi = M, Mi = Di(Fi, "Promise"), Li = Mi, Ni = X, ki = M, Gi = Ni(ki, "Set"), zi = Gi, Ui = X, Bi = M, qi = Ui(Bi, "WeakMap"), Ki = qi, qr = Ri, Kr = Gt, Hr = Li, Wr = zi, Yr = Ki, zt = te, Z = kt, Ke = "[object Map]", Hi = "[object Object]", He = "[object Promise]", We = "[object Set]", Ye = "[object WeakMap]", Xe = "[object DataView]", Wi = Z(qr), Yi = Z(Kr), Xi = Z(Hr), Ji = Z(Wr), Vi = Z(Yr), H = zt;
(qr && H(new qr(new ArrayBuffer(1))) != Xe || Kr && H(new Kr()) != Ke || Hr && H(Hr.resolve()) != He || Wr && H(new Wr()) != We || Yr && H(new Yr()) != Ye) && (H = function(r) {
  var e = zt(r), t = e == Hi ? r.constructor : void 0, n = t ? Z(t) : "";
  if (n)
    switch (n) {
      case Wi:
        return Xe;
      case Yi:
        return Ke;
      case Xi:
        return He;
      case Ji:
        return We;
      case Vi:
        return Ye;
    }
  return e;
});
dr.exports;
var Ut = Pi, Zi = "Expected a function";
function ae(r, e) {
  if (typeof r != "function" || e != null && typeof e != "function")
    throw new TypeError(Zi);
  var t = function() {
    var n = arguments, i = e ? e.apply(this, n) : n[0], o = t.cache;
    if (o.has(i))
      return o.get(i);
    var u = r.apply(this, n);
    return t.cache = o.set(i, u) || o, u;
  };
  return t.cache = new (ae.Cache || Ut)(), t;
}
ae.Cache = Ut;
var Qi = ae, rs = Qi, es = 500;
function ts(r) {
  var e = rs(r, function(n) {
    return t.size === es && t.clear(), n;
  }), t = e.cache;
  return e;
}
var as = ts, ns = as, os = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, is = /\\(\\)?/g;
ns(function(r) {
  var e = [];
  return r.charCodeAt(0) === 46 && e.push(""), r.replace(os, function(t, n, i, o) {
    e.push(i ? o.replace(is, "$1") : n || t);
  }), e;
});
var Je = $r, Ve = Je ? Je.prototype : void 0;
Ve && Ve.toString;
var Bt = { exports: {} }, W = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var kr, Ze;
function qt() {
  if (Ze)
    return kr;
  Ze = 1;
  var r = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var u = {}, f = 0; f < 10; f++)
        u["_" + String.fromCharCode(f)] = f;
      var l = Object.getOwnPropertyNames(u).map(function(y) {
        return u[y];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(y) {
        p[y] = y;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return kr = i() ? Object.assign : function(o, u) {
    for (var f, l = n(o), p, y = 1; y < arguments.length; y++) {
      f = Object(arguments[y]);
      for (var d in f)
        e.call(f, d) && (l[d] = f[d]);
      if (r) {
        p = r(f);
        for (var _ = 0; _ < p.length; _++)
          t.call(f, p[_]) && (l[p[_]] = f[p[_]]);
      }
    }
    return l;
  }, kr;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function ss() {
  if (Qe)
    return W;
  Qe = 1, qt();
  var r = It, e = 60103;
  if (W.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var t = Symbol.for;
    e = t("react.element"), W.Fragment = t("react.fragment");
  }
  var n = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = Object.prototype.hasOwnProperty, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(f, l, p) {
    var y, d = {}, _ = null, w = null;
    p !== void 0 && (_ = "" + p), l.key !== void 0 && (_ = "" + l.key), l.ref !== void 0 && (w = l.ref);
    for (y in l)
      i.call(l, y) && !o.hasOwnProperty(y) && (d[y] = l[y]);
    if (f && f.defaultProps)
      for (y in l = f.defaultProps, l)
        d[y] === void 0 && (d[y] = l[y]);
    return { $$typeof: e, type: f, key: _, ref: w, props: d, _owner: n.current };
  }
  return W.jsx = u, W.jsxs = u, W;
}
var rt = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var et;
function cs() {
  return et || (et = 1, function(r) {
    process.env.NODE_ENV !== "production" && function() {
      var e = It, t = qt(), n = 60103, i = 60106;
      r.Fragment = 60107;
      var o = 60108, u = 60114, f = 60109, l = 60110, p = 60112, y = 60113, d = 60120, _ = 60115, w = 60116, S = 60121, P = 60122, E = 60117, x = 60129, I = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var O = Symbol.for;
        n = O("react.element"), i = O("react.portal"), r.Fragment = O("react.fragment"), o = O("react.strict_mode"), u = O("react.profiler"), f = O("react.provider"), l = O("react.context"), p = O("react.forward_ref"), y = O("react.suspense"), d = O("react.suspense_list"), _ = O("react.memo"), w = O("react.lazy"), S = O("react.block"), P = O("react.server.block"), E = O("react.fundamental"), O("react.scope"), O("react.opaque.id"), x = O("react.debug_trace_mode"), O("react.offscreen"), I = O("react.legacy_hidden");
      }
      var k = typeof Symbol == "function" && Symbol.iterator, U = "@@iterator";
      function _a(a) {
        if (a === null || typeof a != "object")
          return null;
        var s = k && a[k] || a[U];
        return typeof s == "function" ? s : null;
      }
      var B = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function C(a) {
        {
          for (var s = arguments.length, c = new Array(s > 1 ? s - 1 : 0), v = 1; v < s; v++)
            c[v - 1] = arguments[v];
          ha("error", a, c);
        }
      }
      function ha(a, s, c) {
        {
          var v = B.ReactDebugCurrentFrame, b = v.getStackAddendum();
          b !== "" && (s += "%s", c = c.concat([b]));
          var $ = c.map(function(g) {
            return "" + g;
          });
          $.unshift("Warning: " + s), Function.prototype.apply.call(console[a], console, $);
        }
      }
      var da = !1;
      function ga(a) {
        return !!(typeof a == "string" || typeof a == "function" || a === r.Fragment || a === u || a === x || a === o || a === y || a === d || a === I || da || typeof a == "object" && a !== null && (a.$$typeof === w || a.$$typeof === _ || a.$$typeof === f || a.$$typeof === l || a.$$typeof === p || a.$$typeof === E || a.$$typeof === S || a[0] === P));
      }
      function ba(a, s, c) {
        var v = s.displayName || s.name || "";
        return a.displayName || (v !== "" ? c + "(" + v + ")" : c);
      }
      function ve(a) {
        return a.displayName || "Context";
      }
      function R(a) {
        if (a == null)
          return null;
        if (typeof a.tag == "number" && C("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof a == "function")
          return a.displayName || a.name || null;
        if (typeof a == "string")
          return a;
        switch (a) {
          case r.Fragment:
            return "Fragment";
          case i:
            return "Portal";
          case u:
            return "Profiler";
          case o:
            return "StrictMode";
          case y:
            return "Suspense";
          case d:
            return "SuspenseList";
        }
        if (typeof a == "object")
          switch (a.$$typeof) {
            case l:
              var s = a;
              return ve(s) + ".Consumer";
            case f:
              var c = a;
              return ve(c._context) + ".Provider";
            case p:
              return ba(a, a.render, "ForwardRef");
            case _:
              return R(a.type);
            case S:
              return R(a._render);
            case w: {
              var v = a, b = v._payload, $ = v._init;
              try {
                return R($(b));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var nr = 0, ye, _e, he, de, ge, be, $e;
      function me() {
      }
      me.__reactDisabledLog = !0;
      function $a() {
        {
          if (nr === 0) {
            ye = console.log, _e = console.info, he = console.warn, de = console.error, ge = console.group, be = console.groupCollapsed, $e = console.groupEnd;
            var a = {
              configurable: !0,
              enumerable: !0,
              value: me,
              writable: !0
            };
            Object.defineProperties(console, {
              info: a,
              log: a,
              warn: a,
              error: a,
              group: a,
              groupCollapsed: a,
              groupEnd: a
            });
          }
          nr++;
        }
      }
      function ma() {
        {
          if (nr--, nr === 0) {
            var a = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: t({}, a, {
                value: ye
              }),
              info: t({}, a, {
                value: _e
              }),
              warn: t({}, a, {
                value: he
              }),
              error: t({}, a, {
                value: de
              }),
              group: t({}, a, {
                value: ge
              }),
              groupCollapsed: t({}, a, {
                value: be
              }),
              groupEnd: t({}, a, {
                value: $e
              })
            });
          }
          nr < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Er = B.ReactCurrentDispatcher, xr;
      function fr(a, s, c) {
        {
          if (xr === void 0)
            try {
              throw Error();
            } catch (b) {
              var v = b.stack.trim().match(/\n( *(at )?)/);
              xr = v && v[1] || "";
            }
          return `
` + xr + a;
        }
      }
      var Ir = !1, lr;
      {
        var Oa = typeof WeakMap == "function" ? WeakMap : Map;
        lr = new Oa();
      }
      function Oe(a, s) {
        if (!a || Ir)
          return "";
        {
          var c = lr.get(a);
          if (c !== void 0)
            return c;
        }
        var v;
        Ir = !0;
        var b = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var $;
        $ = Er.current, Er.current = null, $a();
        try {
          if (s) {
            var g = function() {
              throw Error();
            };
            if (Object.defineProperty(g.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(g, []);
              } catch (F) {
                v = F;
              }
              Reflect.construct(a, [], g);
            } else {
              try {
                g.call();
              } catch (F) {
                v = F;
              }
              a.call(g.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (F) {
              v = F;
            }
            a();
          }
        } catch (F) {
          if (F && v && typeof F.stack == "string") {
            for (var h = F.stack.split(`
`), j = v.stack.split(`
`), T = h.length - 1, A = j.length - 1; T >= 1 && A >= 0 && h[T] !== j[A]; )
              A--;
            for (; T >= 1 && A >= 0; T--, A--)
              if (h[T] !== j[A]) {
                if (T !== 1 || A !== 1)
                  do
                    if (T--, A--, A < 0 || h[T] !== j[A]) {
                      var D = `
` + h[T].replace(" at new ", " at ");
                      return typeof a == "function" && lr.set(a, D), D;
                    }
                  while (T >= 1 && A >= 0);
                break;
              }
          }
        } finally {
          Ir = !1, Er.current = $, ma(), Error.prepareStackTrace = b;
        }
        var K = a ? a.displayName || a.name : "", De = K ? fr(K) : "";
        return typeof a == "function" && lr.set(a, De), De;
      }
      function Te(a, s, c) {
        return Oe(a, !1);
      }
      function Ta(a) {
        var s = a.prototype;
        return !!(s && s.isReactComponent);
      }
      function pr(a, s, c) {
        if (a == null)
          return "";
        if (typeof a == "function")
          return Oe(a, Ta(a));
        if (typeof a == "string")
          return fr(a);
        switch (a) {
          case y:
            return fr("Suspense");
          case d:
            return fr("SuspenseList");
        }
        if (typeof a == "object")
          switch (a.$$typeof) {
            case p:
              return Te(a.render);
            case _:
              return pr(a.type, s, c);
            case S:
              return Te(a._render);
            case w: {
              var v = a, b = v._payload, $ = v._init;
              try {
                return pr($(b), s, c);
              } catch {
              }
            }
          }
        return "";
      }
      var we = {}, Ae = B.ReactDebugCurrentFrame;
      function vr(a) {
        if (a) {
          var s = a._owner, c = pr(a.type, a._source, s ? s.type : null);
          Ae.setExtraStackFrame(c);
        } else
          Ae.setExtraStackFrame(null);
      }
      function wa(a, s, c, v, b) {
        {
          var $ = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var g in a)
            if ($(a, g)) {
              var h = void 0;
              try {
                if (typeof a[g] != "function") {
                  var j = Error((v || "React class") + ": " + c + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw j.name = "Invariant Violation", j;
                }
                h = a[g](s, g, v, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (T) {
                h = T;
              }
              h && !(h instanceof Error) && (vr(b), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", c, g, typeof h), vr(null)), h instanceof Error && !(h.message in we) && (we[h.message] = !0, vr(b), C("Failed %s type: %s", c, h.message), vr(null));
            }
        }
      }
      var or = B.ReactCurrentOwner, Rr = Object.prototype.hasOwnProperty, Aa = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Se, je, Dr;
      Dr = {};
      function Sa(a) {
        if (Rr.call(a, "ref")) {
          var s = Object.getOwnPropertyDescriptor(a, "ref").get;
          if (s && s.isReactWarning)
            return !1;
        }
        return a.ref !== void 0;
      }
      function ja(a) {
        if (Rr.call(a, "key")) {
          var s = Object.getOwnPropertyDescriptor(a, "key").get;
          if (s && s.isReactWarning)
            return !1;
        }
        return a.key !== void 0;
      }
      function Pa(a, s) {
        if (typeof a.ref == "string" && or.current && s && or.current.stateNode !== s) {
          var c = R(or.current.type);
          Dr[c] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(or.current.type), a.ref), Dr[c] = !0);
        }
      }
      function Ca(a, s) {
        {
          var c = function() {
            Se || (Se = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
          };
          c.isReactWarning = !0, Object.defineProperty(a, "key", {
            get: c,
            configurable: !0
          });
        }
      }
      function Ea(a, s) {
        {
          var c = function() {
            je || (je = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
          };
          c.isReactWarning = !0, Object.defineProperty(a, "ref", {
            get: c,
            configurable: !0
          });
        }
      }
      var xa = function(a, s, c, v, b, $, g) {
        var h = {
          $$typeof: n,
          type: a,
          key: s,
          ref: c,
          props: g,
          _owner: $
        };
        return h._store = {}, Object.defineProperty(h._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(h, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: v
        }), Object.defineProperty(h, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: b
        }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
      };
      function Ia(a, s, c, v, b) {
        {
          var $, g = {}, h = null, j = null;
          c !== void 0 && (h = "" + c), ja(s) && (h = "" + s.key), Sa(s) && (j = s.ref, Pa(s, b));
          for ($ in s)
            Rr.call(s, $) && !Aa.hasOwnProperty($) && (g[$] = s[$]);
          if (a && a.defaultProps) {
            var T = a.defaultProps;
            for ($ in T)
              g[$] === void 0 && (g[$] = T[$]);
          }
          if (h || j) {
            var A = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
            h && Ca(g, A), j && Ea(g, A);
          }
          return xa(a, h, j, b, v, or.current, g);
        }
      }
      var Fr = B.ReactCurrentOwner, Pe = B.ReactDebugCurrentFrame;
      function q(a) {
        if (a) {
          var s = a._owner, c = pr(a.type, a._source, s ? s.type : null);
          Pe.setExtraStackFrame(c);
        } else
          Pe.setExtraStackFrame(null);
      }
      var Mr;
      Mr = !1;
      function Lr(a) {
        return typeof a == "object" && a !== null && a.$$typeof === n;
      }
      function Ce() {
        {
          if (Fr.current) {
            var a = R(Fr.current.type);
            if (a)
              return `

Check the render method of \`` + a + "`.";
          }
          return "";
        }
      }
      function Ra(a) {
        {
          if (a !== void 0) {
            var s = a.fileName.replace(/^.*[\\\/]/, ""), c = a.lineNumber;
            return `

Check your code at ` + s + ":" + c + ".";
          }
          return "";
        }
      }
      var Ee = {};
      function Da(a) {
        {
          var s = Ce();
          if (!s) {
            var c = typeof a == "string" ? a : a.displayName || a.name;
            c && (s = `

Check the top-level render call using <` + c + ">.");
          }
          return s;
        }
      }
      function xe(a, s) {
        {
          if (!a._store || a._store.validated || a.key != null)
            return;
          a._store.validated = !0;
          var c = Da(s);
          if (Ee[c])
            return;
          Ee[c] = !0;
          var v = "";
          a && a._owner && a._owner !== Fr.current && (v = " It was passed a child from " + R(a._owner.type) + "."), q(a), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, v), q(null);
        }
      }
      function Ie(a, s) {
        {
          if (typeof a != "object")
            return;
          if (Array.isArray(a))
            for (var c = 0; c < a.length; c++) {
              var v = a[c];
              Lr(v) && xe(v, s);
            }
          else if (Lr(a))
            a._store && (a._store.validated = !0);
          else if (a) {
            var b = _a(a);
            if (typeof b == "function" && b !== a.entries)
              for (var $ = b.call(a), g; !(g = $.next()).done; )
                Lr(g.value) && xe(g.value, s);
          }
        }
      }
      function Fa(a) {
        {
          var s = a.type;
          if (s == null || typeof s == "string")
            return;
          var c;
          if (typeof s == "function")
            c = s.propTypes;
          else if (typeof s == "object" && (s.$$typeof === p || s.$$typeof === _))
            c = s.propTypes;
          else
            return;
          if (c) {
            var v = R(s);
            wa(c, a.props, "prop", v, a);
          } else if (s.PropTypes !== void 0 && !Mr) {
            Mr = !0;
            var b = R(s);
            C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
          }
          typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ma(a) {
        {
          for (var s = Object.keys(a.props), c = 0; c < s.length; c++) {
            var v = s[c];
            if (v !== "children" && v !== "key") {
              q(a), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), q(null);
              break;
            }
          }
          a.ref !== null && (q(a), C("Invalid attribute `ref` supplied to `React.Fragment`."), q(null));
        }
      }
      function Re(a, s, c, v, b, $) {
        {
          var g = ga(a);
          if (!g) {
            var h = "";
            (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var j = Ra(b);
            j ? h += j : h += Ce();
            var T;
            a === null ? T = "null" : Array.isArray(a) ? T = "array" : a !== void 0 && a.$$typeof === n ? (T = "<" + (R(a.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : T = typeof a, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, h);
          }
          var A = Ia(a, s, c, b, $);
          if (A == null)
            return A;
          if (g) {
            var D = s.children;
            if (D !== void 0)
              if (v)
                if (Array.isArray(D)) {
                  for (var K = 0; K < D.length; K++)
                    Ie(D[K], a);
                  Object.freeze && Object.freeze(D);
                } else
                  C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Ie(D, a);
          }
          return a === r.Fragment ? Ma(A) : Fa(A), A;
        }
      }
      function La(a, s, c) {
        return Re(a, s, c, !0);
      }
      function Na(a, s, c) {
        return Re(a, s, c, !1);
      }
      var ka = Na, Ga = La;
      r.jsx = ka, r.jsxs = Ga;
    }();
  }(rt)), rt;
}
(function(r) {
  process.env.NODE_ENV === "production" ? r.exports = ss() : r.exports = cs();
})(Bt);
Bt.exports.jsx;
const us = () => {
  const r = ee(!1);
  return Rt(() => (r.current = !0, () => {
    r.current = !1;
  }), []), r;
}, fs = (r) => {
  const e = ee(r);
  e.current = r, Rt(() => () => {
    e.current();
  }, []);
};
var _r = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ls(r, e) {
  for (var t = -1, n = r == null ? 0 : r.length, i = Array(n); ++t < n; )
    i[t] = e(r[t], t, r);
  return i;
}
var Kt = ls;
function ps() {
  this.__data__ = [], this.size = 0;
}
var vs = ps;
function ys(r, e) {
  return r === e || r !== r && e !== e;
}
var Ht = ys, _s = Ht;
function hs(r, e) {
  for (var t = r.length; t--; )
    if (_s(r[t][0], e))
      return t;
  return -1;
}
var wr = hs, ds = wr, gs = Array.prototype, bs = gs.splice;
function $s(r) {
  var e = this.__data__, t = ds(e, r);
  if (t < 0)
    return !1;
  var n = e.length - 1;
  return t == n ? e.pop() : bs.call(e, t, 1), --this.size, !0;
}
var ms = $s, Os = wr;
function Ts(r) {
  var e = this.__data__, t = Os(e, r);
  return t < 0 ? void 0 : e[t][1];
}
var ws = Ts, As = wr;
function Ss(r) {
  return As(this.__data__, r) > -1;
}
var js = Ss, Ps = wr;
function Cs(r, e) {
  var t = this.__data__, n = Ps(t, r);
  return n < 0 ? (++this.size, t.push([r, e])) : t[n][1] = e, this;
}
var Es = Cs, xs = vs, Is = ms, Rs = ws, Ds = js, Fs = Es;
function Q(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
Q.prototype.clear = xs;
Q.prototype.delete = Is;
Q.prototype.get = Rs;
Q.prototype.has = Ds;
Q.prototype.set = Fs;
var Ar = Q, Ms = Ar;
function Ls() {
  this.__data__ = new Ms(), this.size = 0;
}
var Ns = Ls;
function ks(r) {
  var e = this.__data__, t = e.delete(r);
  return this.size = e.size, t;
}
var Gs = ks;
function zs(r) {
  return this.__data__.get(r);
}
var Us = zs;
function Bs(r) {
  return this.__data__.has(r);
}
var qs = Bs, Ks = typeof _r == "object" && _r && _r.Object === Object && _r, Wt = Ks, Hs = Wt, Ws = typeof self == "object" && self && self.Object === Object && self, Ys = Hs || Ws || Function("return this")(), L = Ys, Xs = L, Js = Xs.Symbol, Sr = Js, tt = Sr, Yt = Object.prototype, Vs = Yt.hasOwnProperty, Zs = Yt.toString, sr = tt ? tt.toStringTag : void 0;
function Qs(r) {
  var e = Vs.call(r, sr), t = r[sr];
  try {
    r[sr] = void 0;
    var n = !0;
  } catch {
  }
  var i = Zs.call(r);
  return n && (e ? r[sr] = t : delete r[sr]), i;
}
var rc = Qs, ec = Object.prototype, tc = ec.toString;
function ac(r) {
  return tc.call(r);
}
var nc = ac, at = Sr, oc = rc, ic = nc, sc = "[object Null]", cc = "[object Undefined]", nt = at ? at.toStringTag : void 0;
function uc(r) {
  return r == null ? r === void 0 ? cc : sc : nt && nt in Object(r) ? oc(r) : ic(r);
}
var cr = uc;
function fc(r) {
  var e = typeof r;
  return r != null && (e == "object" || e == "function");
}
var ne = fc, lc = cr, pc = ne, vc = "[object AsyncFunction]", yc = "[object Function]", _c = "[object GeneratorFunction]", hc = "[object Proxy]";
function dc(r) {
  if (!pc(r))
    return !1;
  var e = lc(r);
  return e == yc || e == _c || e == vc || e == hc;
}
var Xt = dc, gc = L, bc = gc["__core-js_shared__"], $c = bc, Gr = $c, ot = function() {
  var r = /[^.]+$/.exec(Gr && Gr.keys && Gr.keys.IE_PROTO || "");
  return r ? "Symbol(src)_1." + r : "";
}();
function mc(r) {
  return !!ot && ot in r;
}
var Oc = mc, Tc = Function.prototype, wc = Tc.toString;
function Ac(r) {
  if (r != null) {
    try {
      return wc.call(r);
    } catch {
    }
    try {
      return r + "";
    } catch {
    }
  }
  return "";
}
var Jt = Ac, Sc = Xt, jc = Oc, Pc = ne, Cc = Jt, Ec = /[\\^$.*+?()[\]{}|]/g, xc = /^\[object .+?Constructor\]$/, Ic = Function.prototype, Rc = Object.prototype, Dc = Ic.toString, Fc = Rc.hasOwnProperty, Mc = RegExp(
  "^" + Dc.call(Fc).replace(Ec, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Lc(r) {
  if (!Pc(r) || jc(r))
    return !1;
  var e = Sc(r) ? Mc : xc;
  return e.test(Cc(r));
}
var Nc = Lc;
function kc(r, e) {
  return r == null ? void 0 : r[e];
}
var Gc = kc, zc = Nc, Uc = Gc;
function Bc(r, e) {
  var t = Uc(r, e);
  return zc(t) ? t : void 0;
}
var z = Bc, qc = z, Kc = L, Hc = qc(Kc, "Map"), oe = Hc, Wc = z, Yc = Wc(Object, "create"), jr = Yc, it = jr;
function Xc() {
  this.__data__ = it ? it(null) : {}, this.size = 0;
}
var Jc = Xc;
function Vc(r) {
  var e = this.has(r) && delete this.__data__[r];
  return this.size -= e ? 1 : 0, e;
}
var Zc = Vc, Qc = jr, ru = "__lodash_hash_undefined__", eu = Object.prototype, tu = eu.hasOwnProperty;
function au(r) {
  var e = this.__data__;
  if (Qc) {
    var t = e[r];
    return t === ru ? void 0 : t;
  }
  return tu.call(e, r) ? e[r] : void 0;
}
var nu = au, ou = jr, iu = Object.prototype, su = iu.hasOwnProperty;
function cu(r) {
  var e = this.__data__;
  return ou ? e[r] !== void 0 : su.call(e, r);
}
var uu = cu, fu = jr, lu = "__lodash_hash_undefined__";
function pu(r, e) {
  var t = this.__data__;
  return this.size += this.has(r) ? 0 : 1, t[r] = fu && e === void 0 ? lu : e, this;
}
var vu = pu, yu = Jc, _u = Zc, hu = nu, du = uu, gu = vu;
function rr(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
rr.prototype.clear = yu;
rr.prototype.delete = _u;
rr.prototype.get = hu;
rr.prototype.has = du;
rr.prototype.set = gu;
var bu = rr, st = bu, $u = Ar, mu = oe;
function Ou() {
  this.size = 0, this.__data__ = {
    hash: new st(),
    map: new (mu || $u)(),
    string: new st()
  };
}
var Tu = Ou;
function wu(r) {
  var e = typeof r;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? r !== "__proto__" : r === null;
}
var Au = wu, Su = Au;
function ju(r, e) {
  var t = r.__data__;
  return Su(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
}
var Pr = ju, Pu = Pr;
function Cu(r) {
  var e = Pu(this, r).delete(r);
  return this.size -= e ? 1 : 0, e;
}
var Eu = Cu, xu = Pr;
function Iu(r) {
  return xu(this, r).get(r);
}
var Ru = Iu, Du = Pr;
function Fu(r) {
  return Du(this, r).has(r);
}
var Mu = Fu, Lu = Pr;
function Nu(r, e) {
  var t = Lu(this, r), n = t.size;
  return t.set(r, e), this.size += t.size == n ? 0 : 1, this;
}
var ku = Nu, Gu = Tu, zu = Eu, Uu = Ru, Bu = Mu, qu = ku;
function er(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
er.prototype.clear = Gu;
er.prototype.delete = zu;
er.prototype.get = Uu;
er.prototype.has = Bu;
er.prototype.set = qu;
var ie = er, Ku = Ar, Hu = oe, Wu = ie, Yu = 200;
function Xu(r, e) {
  var t = this.__data__;
  if (t instanceof Ku) {
    var n = t.__data__;
    if (!Hu || n.length < Yu - 1)
      return n.push([r, e]), this.size = ++t.size, this;
    t = this.__data__ = new Wu(n);
  }
  return t.set(r, e), this.size = t.size, this;
}
var Ju = Xu, Vu = Ar, Zu = Ns, Qu = Gs, rf = Us, ef = qs, tf = Ju;
function tr(r) {
  var e = this.__data__ = new Vu(r);
  this.size = e.size;
}
tr.prototype.clear = Zu;
tr.prototype.delete = Qu;
tr.prototype.get = rf;
tr.prototype.has = ef;
tr.prototype.set = tf;
var Vt = tr, af = "__lodash_hash_undefined__";
function nf(r) {
  return this.__data__.set(r, af), this;
}
var of = nf;
function sf(r) {
  return this.__data__.has(r);
}
var cf = sf, uf = ie, ff = of, lf = cf;
function gr(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.__data__ = new uf(); ++e < t; )
    this.add(r[e]);
}
gr.prototype.add = gr.prototype.push = ff;
gr.prototype.has = lf;
var pf = gr;
function vf(r, e) {
  for (var t = -1, n = r == null ? 0 : r.length; ++t < n; )
    if (e(r[t], t, r))
      return !0;
  return !1;
}
var yf = vf;
function _f(r, e) {
  return r.has(e);
}
var hf = _f, df = pf, gf = yf, bf = hf, $f = 1, mf = 2;
function Of(r, e, t, n, i, o) {
  var u = t & $f, f = r.length, l = e.length;
  if (f != l && !(u && l > f))
    return !1;
  var p = o.get(r), y = o.get(e);
  if (p && y)
    return p == e && y == r;
  var d = -1, _ = !0, w = t & mf ? new df() : void 0;
  for (o.set(r, e), o.set(e, r); ++d < f; ) {
    var S = r[d], P = e[d];
    if (n)
      var E = u ? n(P, S, d, e, r, o) : n(S, P, d, r, e, o);
    if (E !== void 0) {
      if (E)
        continue;
      _ = !1;
      break;
    }
    if (w) {
      if (!gf(e, function(x, I) {
        if (!bf(w, I) && (S === x || i(S, x, t, n, o)))
          return w.push(I);
      })) {
        _ = !1;
        break;
      }
    } else if (!(S === P || i(S, P, t, n, o))) {
      _ = !1;
      break;
    }
  }
  return o.delete(r), o.delete(e), _;
}
var Zt = Of, Tf = L, wf = Tf.Uint8Array, Af = wf;
function Sf(r) {
  var e = -1, t = Array(r.size);
  return r.forEach(function(n, i) {
    t[++e] = [i, n];
  }), t;
}
var jf = Sf;
function Pf(r) {
  var e = -1, t = Array(r.size);
  return r.forEach(function(n) {
    t[++e] = n;
  }), t;
}
var Cf = Pf, ct = Sr, ut = Af, Ef = Ht, xf = Zt, If = jf, Rf = Cf, Df = 1, Ff = 2, Mf = "[object Boolean]", Lf = "[object Date]", Nf = "[object Error]", kf = "[object Map]", Gf = "[object Number]", zf = "[object RegExp]", Uf = "[object Set]", Bf = "[object String]", qf = "[object Symbol]", Kf = "[object ArrayBuffer]", Hf = "[object DataView]", ft = ct ? ct.prototype : void 0, zr = ft ? ft.valueOf : void 0;
function Wf(r, e, t, n, i, o, u) {
  switch (t) {
    case Hf:
      if (r.byteLength != e.byteLength || r.byteOffset != e.byteOffset)
        return !1;
      r = r.buffer, e = e.buffer;
    case Kf:
      return !(r.byteLength != e.byteLength || !o(new ut(r), new ut(e)));
    case Mf:
    case Lf:
    case Gf:
      return Ef(+r, +e);
    case Nf:
      return r.name == e.name && r.message == e.message;
    case zf:
    case Bf:
      return r == e + "";
    case kf:
      var f = If;
    case Uf:
      var l = n & Df;
      if (f || (f = Rf), r.size != e.size && !l)
        return !1;
      var p = u.get(r);
      if (p)
        return p == e;
      n |= Ff, u.set(r, e);
      var y = xf(f(r), f(e), n, i, o, u);
      return u.delete(r), y;
    case qf:
      if (zr)
        return zr.call(r) == zr.call(e);
  }
  return !1;
}
var Yf = Wf;
function Xf(r, e) {
  for (var t = -1, n = e.length, i = r.length; ++t < n; )
    r[i + t] = e[t];
  return r;
}
var Jf = Xf, Vf = Array.isArray, N = Vf, Zf = Jf, Qf = N;
function rl(r, e, t) {
  var n = e(r);
  return Qf(r) ? n : Zf(n, t(r));
}
var el = rl;
function tl(r, e) {
  for (var t = -1, n = r == null ? 0 : r.length, i = 0, o = []; ++t < n; ) {
    var u = r[t];
    e(u, t, r) && (o[i++] = u);
  }
  return o;
}
var al = tl;
function nl() {
  return [];
}
var ol = nl, il = al, sl = ol, cl = Object.prototype, ul = cl.propertyIsEnumerable, lt = Object.getOwnPropertySymbols, fl = lt ? function(r) {
  return r == null ? [] : (r = Object(r), il(lt(r), function(e) {
    return ul.call(r, e);
  }));
} : sl, ll = fl;
function pl(r, e) {
  for (var t = -1, n = Array(r); ++t < r; )
    n[t] = e(t);
  return n;
}
var vl = pl;
function yl(r) {
  return r != null && typeof r == "object";
}
var ur = yl, _l = cr, hl = ur, dl = "[object Arguments]";
function gl(r) {
  return hl(r) && _l(r) == dl;
}
var bl = gl, pt = bl, $l = ur, Qt = Object.prototype, ml = Qt.hasOwnProperty, Ol = Qt.propertyIsEnumerable, Tl = pt(function() {
  return arguments;
}()) ? pt : function(r) {
  return $l(r) && ml.call(r, "callee") && !Ol.call(r, "callee");
}, ra = Tl, br = { exports: {} };
function wl() {
  return !1;
}
var Al = wl;
(function(r, e) {
  var t = L, n = Al, i = e && !e.nodeType && e, o = i && !0 && r && !r.nodeType && r, u = o && o.exports === i, f = u ? t.Buffer : void 0, l = f ? f.isBuffer : void 0, p = l || n;
  r.exports = p;
})(br, br.exports);
var Sl = 9007199254740991, jl = /^(?:0|[1-9]\d*)$/;
function Pl(r, e) {
  var t = typeof r;
  return e = e == null ? Sl : e, !!e && (t == "number" || t != "symbol" && jl.test(r)) && r > -1 && r % 1 == 0 && r < e;
}
var ea = Pl, Cl = 9007199254740991;
function El(r) {
  return typeof r == "number" && r > -1 && r % 1 == 0 && r <= Cl;
}
var se = El, xl = cr, Il = se, Rl = ur, Dl = "[object Arguments]", Fl = "[object Array]", Ml = "[object Boolean]", Ll = "[object Date]", Nl = "[object Error]", kl = "[object Function]", Gl = "[object Map]", zl = "[object Number]", Ul = "[object Object]", Bl = "[object RegExp]", ql = "[object Set]", Kl = "[object String]", Hl = "[object WeakMap]", Wl = "[object ArrayBuffer]", Yl = "[object DataView]", Xl = "[object Float32Array]", Jl = "[object Float64Array]", Vl = "[object Int8Array]", Zl = "[object Int16Array]", Ql = "[object Int32Array]", rp = "[object Uint8Array]", ep = "[object Uint8ClampedArray]", tp = "[object Uint16Array]", ap = "[object Uint32Array]", m = {};
m[Xl] = m[Jl] = m[Vl] = m[Zl] = m[Ql] = m[rp] = m[ep] = m[tp] = m[ap] = !0;
m[Dl] = m[Fl] = m[Wl] = m[Ml] = m[Yl] = m[Ll] = m[Nl] = m[kl] = m[Gl] = m[zl] = m[Ul] = m[Bl] = m[ql] = m[Kl] = m[Hl] = !1;
function np(r) {
  return Rl(r) && Il(r.length) && !!m[xl(r)];
}
var op = np;
function ip(r) {
  return function(e) {
    return r(e);
  };
}
var sp = ip, Xr = { exports: {} };
(function(r, e) {
  var t = Wt, n = e && !e.nodeType && e, i = n && !0 && r && !r.nodeType && r, o = i && i.exports === n, u = o && t.process, f = function() {
    try {
      var l = i && i.require && i.require("util").types;
      return l || u && u.binding && u.binding("util");
    } catch {
    }
  }();
  r.exports = f;
})(Xr, Xr.exports);
var cp = op, up = sp, vt = Xr.exports, yt = vt && vt.isTypedArray, fp = yt ? up(yt) : cp, ta = fp, lp = vl, pp = ra, vp = N, yp = br.exports, _p = ea, hp = ta, dp = Object.prototype, gp = dp.hasOwnProperty;
function bp(r, e) {
  var t = vp(r), n = !t && pp(r), i = !t && !n && yp(r), o = !t && !n && !i && hp(r), u = t || n || i || o, f = u ? lp(r.length, String) : [], l = f.length;
  for (var p in r)
    (e || gp.call(r, p)) && !(u && (p == "length" || i && (p == "offset" || p == "parent") || o && (p == "buffer" || p == "byteLength" || p == "byteOffset") || _p(p, l))) && f.push(p);
  return f;
}
var $p = bp, mp = Object.prototype;
function Op(r) {
  var e = r && r.constructor, t = typeof e == "function" && e.prototype || mp;
  return r === t;
}
var Tp = Op;
function wp(r, e) {
  return function(t) {
    return r(e(t));
  };
}
var Ap = wp, Sp = Ap, jp = Sp(Object.keys, Object), Pp = jp, Cp = Tp, Ep = Pp, xp = Object.prototype, Ip = xp.hasOwnProperty;
function Rp(r) {
  if (!Cp(r))
    return Ep(r);
  var e = [];
  for (var t in Object(r))
    Ip.call(r, t) && t != "constructor" && e.push(t);
  return e;
}
var Dp = Rp, Fp = Xt, Mp = se;
function Lp(r) {
  return r != null && Mp(r.length) && !Fp(r);
}
var ce = Lp, Np = $p, kp = Dp, Gp = ce;
function zp(r) {
  return Gp(r) ? Np(r) : kp(r);
}
var ue = zp, Up = el, Bp = ll, qp = ue;
function Kp(r) {
  return Up(r, qp, Bp);
}
var Hp = Kp, _t = Hp, Wp = 1, Yp = Object.prototype, Xp = Yp.hasOwnProperty;
function Jp(r, e, t, n, i, o) {
  var u = t & Wp, f = _t(r), l = f.length, p = _t(e), y = p.length;
  if (l != y && !u)
    return !1;
  for (var d = l; d--; ) {
    var _ = f[d];
    if (!(u ? _ in e : Xp.call(e, _)))
      return !1;
  }
  var w = o.get(r), S = o.get(e);
  if (w && S)
    return w == e && S == r;
  var P = !0;
  o.set(r, e), o.set(e, r);
  for (var E = u; ++d < l; ) {
    _ = f[d];
    var x = r[_], I = e[_];
    if (n)
      var O = u ? n(I, x, _, e, r, o) : n(x, I, _, r, e, o);
    if (!(O === void 0 ? x === I || i(x, I, t, n, o) : O)) {
      P = !1;
      break;
    }
    E || (E = _ == "constructor");
  }
  if (P && !E) {
    var k = r.constructor, U = e.constructor;
    k != U && "constructor" in r && "constructor" in e && !(typeof k == "function" && k instanceof k && typeof U == "function" && U instanceof U) && (P = !1);
  }
  return o.delete(r), o.delete(e), P;
}
var Vp = Jp, Zp = z, Qp = L, rv = Zp(Qp, "DataView"), ev = rv, tv = z, av = L, nv = tv(av, "Promise"), ov = nv, iv = z, sv = L, cv = iv(sv, "Set"), uv = cv, fv = z, lv = L, pv = fv(lv, "WeakMap"), vv = pv, Jr = ev, Vr = oe, Zr = ov, Qr = uv, re = vv, aa = cr, ar = Jt, ht = "[object Map]", yv = "[object Object]", dt = "[object Promise]", gt = "[object Set]", bt = "[object WeakMap]", $t = "[object DataView]", _v = ar(Jr), hv = ar(Vr), dv = ar(Zr), gv = ar(Qr), bv = ar(re), G = aa;
(Jr && G(new Jr(new ArrayBuffer(1))) != $t || Vr && G(new Vr()) != ht || Zr && G(Zr.resolve()) != dt || Qr && G(new Qr()) != gt || re && G(new re()) != bt) && (G = function(r) {
  var e = aa(r), t = e == yv ? r.constructor : void 0, n = t ? ar(t) : "";
  if (n)
    switch (n) {
      case _v:
        return $t;
      case hv:
        return ht;
      case dv:
        return dt;
      case gv:
        return gt;
      case bv:
        return bt;
    }
  return e;
});
var $v = G, Ur = Vt, mv = Zt, Ov = Yf, Tv = Vp, mt = $v, Ot = N, Tt = br.exports, wv = ta, Av = 1, wt = "[object Arguments]", At = "[object Array]", hr = "[object Object]", Sv = Object.prototype, St = Sv.hasOwnProperty;
function jv(r, e, t, n, i, o) {
  var u = Ot(r), f = Ot(e), l = u ? At : mt(r), p = f ? At : mt(e);
  l = l == wt ? hr : l, p = p == wt ? hr : p;
  var y = l == hr, d = p == hr, _ = l == p;
  if (_ && Tt(r)) {
    if (!Tt(e))
      return !1;
    u = !0, y = !1;
  }
  if (_ && !y)
    return o || (o = new Ur()), u || wv(r) ? mv(r, e, t, n, i, o) : Ov(r, e, l, t, n, i, o);
  if (!(t & Av)) {
    var w = y && St.call(r, "__wrapped__"), S = d && St.call(e, "__wrapped__");
    if (w || S) {
      var P = w ? r.value() : r, E = S ? e.value() : e;
      return o || (o = new Ur()), i(P, E, t, n, o);
    }
  }
  return _ ? (o || (o = new Ur()), Tv(r, e, t, n, i, o)) : !1;
}
var Pv = jv, Cv = Pv, jt = ur;
function na(r, e, t, n, i) {
  return r === e ? !0 : r == null || e == null || !jt(r) && !jt(e) ? r !== r && e !== e : Cv(r, e, t, n, na, i);
}
var oa = na, Ev = Vt, xv = oa, Iv = 1, Rv = 2;
function Dv(r, e, t, n) {
  var i = t.length, o = i, u = !n;
  if (r == null)
    return !o;
  for (r = Object(r); i--; ) {
    var f = t[i];
    if (u && f[2] ? f[1] !== r[f[0]] : !(f[0] in r))
      return !1;
  }
  for (; ++i < o; ) {
    f = t[i];
    var l = f[0], p = r[l], y = f[1];
    if (u && f[2]) {
      if (p === void 0 && !(l in r))
        return !1;
    } else {
      var d = new Ev();
      if (n)
        var _ = n(p, y, l, r, e, d);
      if (!(_ === void 0 ? xv(y, p, Iv | Rv, n, d) : _))
        return !1;
    }
  }
  return !0;
}
var Fv = Dv, Mv = ne;
function Lv(r) {
  return r === r && !Mv(r);
}
var ia = Lv, Nv = ia, kv = ue;
function Gv(r) {
  for (var e = kv(r), t = e.length; t--; ) {
    var n = e[t], i = r[n];
    e[t] = [n, i, Nv(i)];
  }
  return e;
}
var zv = Gv;
function Uv(r, e) {
  return function(t) {
    return t == null ? !1 : t[r] === e && (e !== void 0 || r in Object(t));
  };
}
var sa = Uv, Bv = Fv, qv = zv, Kv = sa;
function Hv(r) {
  var e = qv(r);
  return e.length == 1 && e[0][2] ? Kv(e[0][0], e[0][1]) : function(t) {
    return t === r || Bv(t, r, e);
  };
}
var Wv = Hv, Yv = cr, Xv = ur, Jv = "[object Symbol]";
function Vv(r) {
  return typeof r == "symbol" || Xv(r) && Yv(r) == Jv;
}
var fe = Vv, Zv = N, Qv = fe, ry = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ey = /^\w*$/;
function ty(r, e) {
  if (Zv(r))
    return !1;
  var t = typeof r;
  return t == "number" || t == "symbol" || t == "boolean" || r == null || Qv(r) ? !0 : ey.test(r) || !ry.test(r) || e != null && r in Object(e);
}
var le = ty, ca = ie, ay = "Expected a function";
function pe(r, e) {
  if (typeof r != "function" || e != null && typeof e != "function")
    throw new TypeError(ay);
  var t = function() {
    var n = arguments, i = e ? e.apply(this, n) : n[0], o = t.cache;
    if (o.has(i))
      return o.get(i);
    var u = r.apply(this, n);
    return t.cache = o.set(i, u) || o, u;
  };
  return t.cache = new (pe.Cache || ca)(), t;
}
pe.Cache = ca;
var ny = pe, oy = ny, iy = 500;
function sy(r) {
  var e = oy(r, function(n) {
    return t.size === iy && t.clear(), n;
  }), t = e.cache;
  return e;
}
var cy = sy, uy = cy, fy = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ly = /\\(\\)?/g, py = uy(function(r) {
  var e = [];
  return r.charCodeAt(0) === 46 && e.push(""), r.replace(fy, function(t, n, i, o) {
    e.push(i ? o.replace(ly, "$1") : n || t);
  }), e;
}), vy = py, Pt = Sr, yy = Kt, _y = N, hy = fe, dy = 1 / 0, Ct = Pt ? Pt.prototype : void 0, Et = Ct ? Ct.toString : void 0;
function ua(r) {
  if (typeof r == "string")
    return r;
  if (_y(r))
    return yy(r, ua) + "";
  if (hy(r))
    return Et ? Et.call(r) : "";
  var e = r + "";
  return e == "0" && 1 / r == -dy ? "-0" : e;
}
var gy = ua, by = gy;
function $y(r) {
  return r == null ? "" : by(r);
}
var fa = $y, my = N, Oy = le, Ty = vy, wy = fa;
function Ay(r, e) {
  return my(r) ? r : Oy(r, e) ? [r] : Ty(wy(r));
}
var la = Ay, Sy = fe, jy = 1 / 0;
function Py(r) {
  if (typeof r == "string" || Sy(r))
    return r;
  var e = r + "";
  return e == "0" && 1 / r == -jy ? "-0" : e;
}
var Cr = Py, Cy = la, Ey = Cr;
function xy(r, e) {
  e = Cy(e, r);
  for (var t = 0, n = e.length; r != null && t < n; )
    r = r[Ey(e[t++])];
  return t && t == n ? r : void 0;
}
var pa = xy, Iy = pa;
function Ry(r, e, t) {
  var n = r == null ? void 0 : Iy(r, e);
  return n === void 0 ? t : n;
}
var Dy = Ry;
function Fy(r, e) {
  return r != null && e in Object(r);
}
var My = Fy, Ly = la, Ny = ra, ky = N, Gy = ea, zy = se, Uy = Cr;
function By(r, e, t) {
  e = Ly(e, r);
  for (var n = -1, i = e.length, o = !1; ++n < i; ) {
    var u = Uy(e[n]);
    if (!(o = r != null && t(r, u)))
      break;
    r = r[u];
  }
  return o || ++n != i ? o : (i = r == null ? 0 : r.length, !!i && zy(i) && Gy(u, i) && (ky(r) || Ny(r)));
}
var qy = By, Ky = My, Hy = qy;
function Wy(r, e) {
  return r != null && Hy(r, e, Ky);
}
var Yy = Wy, Xy = oa, Jy = Dy, Vy = Yy, Zy = le, Qy = ia, r_ = sa, e_ = Cr, t_ = 1, a_ = 2;
function n_(r, e) {
  return Zy(r) && Qy(e) ? r_(e_(r), e) : function(t) {
    var n = Jy(t, r);
    return n === void 0 && n === e ? Vy(t, r) : Xy(e, n, t_ | a_);
  };
}
var o_ = n_;
function i_(r) {
  return r;
}
var s_ = i_;
function c_(r) {
  return function(e) {
    return e == null ? void 0 : e[r];
  };
}
var u_ = c_, f_ = pa;
function l_(r) {
  return function(e) {
    return f_(e, r);
  };
}
var p_ = l_, v_ = u_, y_ = p_, __ = le, h_ = Cr;
function d_(r) {
  return __(r) ? v_(h_(r)) : y_(r);
}
var g_ = d_, b_ = Wv, $_ = o_, m_ = s_, O_ = N, T_ = g_;
function w_(r) {
  return typeof r == "function" ? r : r == null ? m_ : typeof r == "object" ? O_(r) ? $_(r[0], r[1]) : b_(r) : T_(r);
}
var va = w_;
function A_(r) {
  return function(e, t, n) {
    for (var i = -1, o = Object(e), u = n(e), f = u.length; f--; ) {
      var l = u[r ? f : ++i];
      if (t(o[l], l, o) === !1)
        break;
    }
    return e;
  };
}
var S_ = A_, j_ = S_, P_ = j_(), C_ = P_, E_ = C_, x_ = ue;
function I_(r, e) {
  return r && E_(r, e, x_);
}
var ya = I_, R_ = ce;
function D_(r, e) {
  return function(t, n) {
    if (t == null)
      return t;
    if (!R_(t))
      return r(t, n);
    for (var i = t.length, o = e ? i : -1, u = Object(t); (e ? o-- : ++o < i) && n(u[o], o, u) !== !1; )
      ;
    return t;
  };
}
var F_ = D_, M_ = ya, L_ = F_, N_ = L_(M_), k_ = N_, G_ = k_, z_ = ce;
function U_(r, e) {
  var t = -1, n = z_(r) ? Array(r.length) : [];
  return G_(r, function(i, o, u) {
    n[++t] = e(i, o, u);
  }), n;
}
var B_ = U_, q_ = Kt, K_ = va, H_ = B_, W_ = N;
function Y_(r, e) {
  var t = W_(r) ? q_ : H_;
  return t(r, K_(e));
}
var X_ = Y_, J_ = z, V_ = function() {
  try {
    var r = J_(Object, "defineProperty");
    return r({}, "", {}), r;
  } catch {
  }
}(), Z_ = V_, xt = Z_;
function Q_(r, e, t) {
  e == "__proto__" && xt ? xt(r, e, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : r[e] = t;
}
var rh = Q_, eh = rh, th = ya, ah = va;
function nh(r, e) {
  var t = {};
  return e = ah(e), th(r, function(n, i, o) {
    eh(t, i, e(n, i, o));
  }), t;
}
var oh = nh, ih = fa, sh = 0;
function ch(r) {
  var e = ++sh;
  return ih(r) + e;
}
var uh = ch;
const fh = {
  autoAbort: !1
}, ph = (r, e) => {
  const t = ee({}), n = us(), i = za(() => oh(r, (o) => (...u) => {
    const f = o(...u);
    return {
      start: async (p) => {
        const y = uh("api:"), d = { ...fh, ...p };
        let _;
        typeof (e == null ? void 0 : e.onBefore) == "function" && (_ = await (e == null ? void 0 : e.onBefore(d))), d.autoAbort && n.current && (t.current[y] = f.abort);
        const w = await f.start();
        return delete t.current[y], typeof (e == null ? void 0 : e.onAfter) == "function" && await (e == null ? void 0 : e.onAfter(w, _, d)), w;
      },
      abort: f.abort
    };
  }), [r, n, e]);
  return fs(() => {
    X_(t.current, (o) => {
      o();
    });
  }), i;
};
export {
  ph as useAxios
};
