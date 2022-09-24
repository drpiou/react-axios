import It, { useRef as ee, useEffect as Rt, useCallback as za, useMemo as Ua } from "react";
var yr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ba = typeof yr == "object" && yr && yr.Object === Object && yr, Dt = Ba, Ka = Dt, qa = typeof self == "object" && self && self.Object === Object && self, Ha = Ka || qa || Function("return this")(), M = Ha, Wa = M, Ya = Wa.Symbol, $r = Ya, Fe = $r, Ft = Object.prototype, Xa = Ft.hasOwnProperty, Ja = Ft.toString, ir = Fe ? Fe.toStringTag : void 0;
function Va(r) {
  var e = Xa.call(r, ir), t = r[ir];
  try {
    r[ir] = void 0;
    var n = !0;
  } catch {
  }
  var i = Ja.call(r);
  return n && (e ? r[ir] = t : delete r[ir]), i;
}
var Za = Va, Qa = Object.prototype, rn = Qa.toString;
function en(r) {
  return rn.call(r);
}
var tn = en, Me = $r, an = Za, nn = tn, on = "[object Null]", sn = "[object Undefined]", Le = Me ? Me.toStringTag : void 0;
function cn(r) {
  return r == null ? r === void 0 ? sn : on : Le && Le in Object(r) ? an(r) : nn(r);
}
var te = cn;
function un(r) {
  return r != null && typeof r == "object";
}
var Mt = un, fn = te, ln = Mt, pn = "[object Arguments]";
function vn(r) {
  return ln(r) && fn(r) == pn;
}
var yn = vn, Ne = yn, hn = Mt, Lt = Object.prototype, _n = Lt.hasOwnProperty, dn = Lt.propertyIsEnumerable;
Ne(function() {
  return arguments;
}());
var dr = { exports: {} };
function gn() {
  return !1;
}
var bn = gn;
(function(r, e) {
  var t = M, n = bn, i = e && !e.nodeType && e, o = i && !0 && r && !r.nodeType && r, c = o && o.exports === i, f = c ? t.Buffer : void 0, l = f ? f.isBuffer : void 0, p = l || n;
  r.exports = p;
})(dr, dr.exports);
var Br = { exports: {} };
(function(r, e) {
  var t = Dt, n = e && !e.nodeType && e, i = n && !0 && r && !r.nodeType && r, o = i && i.exports === n, c = o && t.process, f = function() {
    try {
      var l = i && i.require && i.require("util").types;
      return l || c && c.binding && c.binding("util");
    } catch {
    }
  }();
  r.exports = f;
})(Br, Br.exports);
var ke = Br.exports;
ke && ke.isTypedArray;
dr.exports;
function $n(r) {
  var e = typeof r;
  return r != null && (e == "object" || e == "function");
}
var Nt = $n, mn = te, On = Nt, wn = "[object AsyncFunction]", Tn = "[object Function]", An = "[object GeneratorFunction]", Sn = "[object Proxy]";
function Pn(r) {
  if (!On(r))
    return !1;
  var e = mn(r);
  return e == Tn || e == An || e == wn || e == Sn;
}
var jn = Pn;
function Cn() {
  this.__data__ = [], this.size = 0;
}
var En = Cn;
function xn(r, e) {
  return r === e || r !== r && e !== e;
}
var In = xn, Rn = In;
function Dn(r, e) {
  for (var t = r.length; t--; )
    if (Rn(r[t][0], e))
      return t;
  return -1;
}
var mr = Dn, Fn = mr, Mn = Array.prototype, Ln = Mn.splice;
function Nn(r) {
  var e = this.__data__, t = Fn(e, r);
  if (t < 0)
    return !1;
  var n = e.length - 1;
  return t == n ? e.pop() : Ln.call(e, t, 1), --this.size, !0;
}
var kn = Nn, Gn = mr;
function zn(r) {
  var e = this.__data__, t = Gn(e, r);
  return t < 0 ? void 0 : e[t][1];
}
var Un = zn, Bn = mr;
function Kn(r) {
  return Bn(this.__data__, r) > -1;
}
var qn = Kn, Hn = mr;
function Wn(r, e) {
  var t = this.__data__, n = Hn(t, r);
  return n < 0 ? (++this.size, t.push([r, e])) : t[n][1] = e, this;
}
var Yn = Wn, Xn = En, Jn = kn, Vn = Un, Zn = qn, Qn = Yn;
function Y(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
Y.prototype.clear = Xn;
Y.prototype.delete = Jn;
Y.prototype.get = Vn;
Y.prototype.has = Zn;
Y.prototype.set = Qn;
var ro = Y, eo = M, to = eo["__core-js_shared__"], ao = to, Nr = ao, Ge = function() {
  var r = /[^.]+$/.exec(Nr && Nr.keys && Nr.keys.IE_PROTO || "");
  return r ? "Symbol(src)_1." + r : "";
}();
function no(r) {
  return !!Ge && Ge in r;
}
var oo = no, io = Function.prototype, so = io.toString;
function co(r) {
  if (r != null) {
    try {
      return so.call(r);
    } catch {
    }
    try {
      return r + "";
    } catch {
    }
  }
  return "";
}
var kt = co, uo = jn, fo = oo, lo = Nt, po = kt, vo = /[\\^$.*+?()[\]{}|]/g, yo = /^\[object .+?Constructor\]$/, ho = Function.prototype, _o = Object.prototype, go = ho.toString, bo = _o.hasOwnProperty, $o = RegExp(
  "^" + go.call(bo).replace(vo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function mo(r) {
  if (!lo(r) || fo(r))
    return !1;
  var e = uo(r) ? $o : yo;
  return e.test(po(r));
}
var Oo = mo;
function wo(r, e) {
  return r == null ? void 0 : r[e];
}
var To = wo, Ao = Oo, So = To;
function Po(r, e) {
  var t = So(r, e);
  return Ao(t) ? t : void 0;
}
var X = Po, jo = X, Co = M, Eo = jo(Co, "Map"), Gt = Eo, xo = X, Io = xo(Object, "create"), Or = Io, ze = Or;
function Ro() {
  this.__data__ = ze ? ze(null) : {}, this.size = 0;
}
var Do = Ro;
function Fo(r) {
  var e = this.has(r) && delete this.__data__[r];
  return this.size -= e ? 1 : 0, e;
}
var Mo = Fo, Lo = Or, No = "__lodash_hash_undefined__", ko = Object.prototype, Go = ko.hasOwnProperty;
function zo(r) {
  var e = this.__data__;
  if (Lo) {
    var t = e[r];
    return t === No ? void 0 : t;
  }
  return Go.call(e, r) ? e[r] : void 0;
}
var Uo = zo, Bo = Or, Ko = Object.prototype, qo = Ko.hasOwnProperty;
function Ho(r) {
  var e = this.__data__;
  return Bo ? e[r] !== void 0 : qo.call(e, r);
}
var Wo = Ho, Yo = Or, Xo = "__lodash_hash_undefined__";
function Jo(r, e) {
  var t = this.__data__;
  return this.size += this.has(r) ? 0 : 1, t[r] = Yo && e === void 0 ? Xo : e, this;
}
var Vo = Jo, Zo = Do, Qo = Mo, ri = Uo, ei = Wo, ti = Vo;
function J(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
J.prototype.clear = Zo;
J.prototype.delete = Qo;
J.prototype.get = ri;
J.prototype.has = ei;
J.prototype.set = ti;
var ai = J, Ue = ai, ni = ro, oi = Gt;
function ii() {
  this.size = 0, this.__data__ = {
    hash: new Ue(),
    map: new (oi || ni)(),
    string: new Ue()
  };
}
var si = ii;
function ci(r) {
  var e = typeof r;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? r !== "__proto__" : r === null;
}
var ui = ci, fi = ui;
function li(r, e) {
  var t = r.__data__;
  return fi(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
}
var wr = li, pi = wr;
function vi(r) {
  var e = pi(this, r).delete(r);
  return this.size -= e ? 1 : 0, e;
}
var yi = vi, hi = wr;
function _i(r) {
  return hi(this, r).get(r);
}
var di = _i, gi = wr;
function bi(r) {
  return gi(this, r).has(r);
}
var $i = bi, mi = wr;
function Oi(r, e) {
  var t = mi(this, r), n = t.size;
  return t.set(r, e), this.size += t.size == n ? 0 : 1, this;
}
var wi = Oi, Ti = si, Ai = yi, Si = di, Pi = $i, ji = wi;
function V(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
V.prototype.clear = Ti;
V.prototype.delete = Ai;
V.prototype.get = Si;
V.prototype.has = Pi;
V.prototype.set = ji;
var Ci = V, Ei = M;
Ei.Uint8Array;
var Be = $r, Ke = Be ? Be.prototype : void 0;
Ke && Ke.valueOf;
var xi = X, Ii = M, Ri = xi(Ii, "DataView"), Di = Ri, Fi = X, Mi = M, Li = Fi(Mi, "Promise"), Ni = Li, ki = X, Gi = M, zi = ki(Gi, "Set"), Ui = zi, Bi = X, Ki = M, qi = Bi(Ki, "WeakMap"), Hi = qi, Kr = Di, qr = Gt, Hr = Ni, Wr = Ui, Yr = Hi, zt = te, Z = kt, qe = "[object Map]", Wi = "[object Object]", He = "[object Promise]", We = "[object Set]", Ye = "[object WeakMap]", Xe = "[object DataView]", Yi = Z(Kr), Xi = Z(qr), Ji = Z(Hr), Vi = Z(Wr), Zi = Z(Yr), H = zt;
(Kr && H(new Kr(new ArrayBuffer(1))) != Xe || qr && H(new qr()) != qe || Hr && H(Hr.resolve()) != He || Wr && H(new Wr()) != We || Yr && H(new Yr()) != Ye) && (H = function(r) {
  var e = zt(r), t = e == Wi ? r.constructor : void 0, n = t ? Z(t) : "";
  if (n)
    switch (n) {
      case Yi:
        return Xe;
      case Xi:
        return qe;
      case Ji:
        return He;
      case Vi:
        return We;
      case Zi:
        return Ye;
    }
  return e;
});
dr.exports;
var Ut = Ci, Qi = "Expected a function";
function ae(r, e) {
  if (typeof r != "function" || e != null && typeof e != "function")
    throw new TypeError(Qi);
  var t = function() {
    var n = arguments, i = e ? e.apply(this, n) : n[0], o = t.cache;
    if (o.has(i))
      return o.get(i);
    var c = r.apply(this, n);
    return t.cache = o.set(i, c) || o, c;
  };
  return t.cache = new (ae.Cache || Ut)(), t;
}
ae.Cache = Ut;
var rs = ae, es = rs, ts = 500;
function as(r) {
  var e = es(r, function(n) {
    return t.size === ts && t.clear(), n;
  }), t = e.cache;
  return e;
}
var ns = as, os = ns, is = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ss = /\\(\\)?/g;
os(function(r) {
  var e = [];
  return r.charCodeAt(0) === 46 && e.push(""), r.replace(is, function(t, n, i, o) {
    e.push(i ? o.replace(ss, "$1") : n || t);
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
function Kt() {
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
      for (var c = {}, f = 0; f < 10; f++)
        c["_" + String.fromCharCode(f)] = f;
      var l = Object.getOwnPropertyNames(c).map(function(y) {
        return c[y];
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
  return kr = i() ? Object.assign : function(o, c) {
    for (var f, l = n(o), p, y = 1; y < arguments.length; y++) {
      f = Object(arguments[y]);
      for (var d in f)
        e.call(f, d) && (l[d] = f[d]);
      if (r) {
        p = r(f);
        for (var h = 0; h < p.length; h++)
          t.call(f, p[h]) && (l[p[h]] = f[p[h]]);
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
function cs() {
  if (Qe)
    return W;
  Qe = 1, Kt();
  var r = It, e = 60103;
  if (W.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var t = Symbol.for;
    e = t("react.element"), W.Fragment = t("react.fragment");
  }
  var n = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = Object.prototype.hasOwnProperty, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, l, p) {
    var y, d = {}, h = null, S = null;
    p !== void 0 && (h = "" + p), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (S = l.ref);
    for (y in l)
      i.call(l, y) && !o.hasOwnProperty(y) && (d[y] = l[y]);
    if (f && f.defaultProps)
      for (y in l = f.defaultProps, l)
        d[y] === void 0 && (d[y] = l[y]);
    return { $$typeof: e, type: f, key: h, ref: S, props: d, _owner: n.current };
  }
  return W.jsx = c, W.jsxs = c, W;
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
function us() {
  return et || (et = 1, function(r) {
    process.env.NODE_ENV !== "production" && function() {
      var e = It, t = Kt(), n = 60103, i = 60106;
      r.Fragment = 60107;
      var o = 60108, c = 60114, f = 60109, l = 60110, p = 60112, y = 60113, d = 60120, h = 60115, S = 60116, w = 60121, j = 60122, E = 60117, x = 60129, I = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var O = Symbol.for;
        n = O("react.element"), i = O("react.portal"), r.Fragment = O("react.fragment"), o = O("react.strict_mode"), c = O("react.profiler"), f = O("react.provider"), l = O("react.context"), p = O("react.forward_ref"), y = O("react.suspense"), d = O("react.suspense_list"), h = O("react.memo"), S = O("react.lazy"), w = O("react.block"), j = O("react.server.block"), E = O("react.fundamental"), O("react.scope"), O("react.opaque.id"), x = O("react.debug_trace_mode"), O("react.offscreen"), I = O("react.legacy_hidden");
      }
      var k = typeof Symbol == "function" && Symbol.iterator, U = "@@iterator";
      function ha(a) {
        if (a === null || typeof a != "object")
          return null;
        var s = k && a[k] || a[U];
        return typeof s == "function" ? s : null;
      }
      var B = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function C(a) {
        {
          for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), v = 1; v < s; v++)
            u[v - 1] = arguments[v];
          _a("error", a, u);
        }
      }
      function _a(a, s, u) {
        {
          var v = B.ReactDebugCurrentFrame, b = v.getStackAddendum();
          b !== "" && (s += "%s", u = u.concat([b]));
          var $ = u.map(function(g) {
            return "" + g;
          });
          $.unshift("Warning: " + s), Function.prototype.apply.call(console[a], console, $);
        }
      }
      var da = !1;
      function ga(a) {
        return !!(typeof a == "string" || typeof a == "function" || a === r.Fragment || a === c || a === x || a === o || a === y || a === d || a === I || da || typeof a == "object" && a !== null && (a.$$typeof === S || a.$$typeof === h || a.$$typeof === f || a.$$typeof === l || a.$$typeof === p || a.$$typeof === E || a.$$typeof === w || a[0] === j));
      }
      function ba(a, s, u) {
        var v = s.displayName || s.name || "";
        return a.displayName || (v !== "" ? u + "(" + v + ")" : u);
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
          case c:
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
              var u = a;
              return ve(u._context) + ".Provider";
            case p:
              return ba(a, a.render, "ForwardRef");
            case h:
              return R(a.type);
            case w:
              return R(a._render);
            case S: {
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
      var nr = 0, ye, he, _e, de, ge, be, $e;
      function me() {
      }
      me.__reactDisabledLog = !0;
      function $a() {
        {
          if (nr === 0) {
            ye = console.log, he = console.info, _e = console.warn, de = console.error, ge = console.group, be = console.groupCollapsed, $e = console.groupEnd;
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
                value: he
              }),
              warn: t({}, a, {
                value: _e
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
      function fr(a, s, u) {
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
          var u = lr.get(a);
          if (u !== void 0)
            return u;
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
            for (var _ = F.stack.split(`
`), P = v.stack.split(`
`), T = _.length - 1, A = P.length - 1; T >= 1 && A >= 0 && _[T] !== P[A]; )
              A--;
            for (; T >= 1 && A >= 0; T--, A--)
              if (_[T] !== P[A]) {
                if (T !== 1 || A !== 1)
                  do
                    if (T--, A--, A < 0 || _[T] !== P[A]) {
                      var D = `
` + _[T].replace(" at new ", " at ");
                      return typeof a == "function" && lr.set(a, D), D;
                    }
                  while (T >= 1 && A >= 0);
                break;
              }
          }
        } finally {
          Ir = !1, Er.current = $, ma(), Error.prepareStackTrace = b;
        }
        var q = a ? a.displayName || a.name : "", De = q ? fr(q) : "";
        return typeof a == "function" && lr.set(a, De), De;
      }
      function we(a, s, u) {
        return Oe(a, !1);
      }
      function wa(a) {
        var s = a.prototype;
        return !!(s && s.isReactComponent);
      }
      function pr(a, s, u) {
        if (a == null)
          return "";
        if (typeof a == "function")
          return Oe(a, wa(a));
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
              return we(a.render);
            case h:
              return pr(a.type, s, u);
            case w:
              return we(a._render);
            case S: {
              var v = a, b = v._payload, $ = v._init;
              try {
                return pr($(b), s, u);
              } catch {
              }
            }
          }
        return "";
      }
      var Te = {}, Ae = B.ReactDebugCurrentFrame;
      function vr(a) {
        if (a) {
          var s = a._owner, u = pr(a.type, a._source, s ? s.type : null);
          Ae.setExtraStackFrame(u);
        } else
          Ae.setExtraStackFrame(null);
      }
      function Ta(a, s, u, v, b) {
        {
          var $ = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var g in a)
            if ($(a, g)) {
              var _ = void 0;
              try {
                if (typeof a[g] != "function") {
                  var P = Error((v || "React class") + ": " + u + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw P.name = "Invariant Violation", P;
                }
                _ = a[g](s, g, v, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (T) {
                _ = T;
              }
              _ && !(_ instanceof Error) && (vr(b), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", u, g, typeof _), vr(null)), _ instanceof Error && !(_.message in Te) && (Te[_.message] = !0, vr(b), C("Failed %s type: %s", u, _.message), vr(null));
            }
        }
      }
      var or = B.ReactCurrentOwner, Rr = Object.prototype.hasOwnProperty, Aa = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Se, Pe, Dr;
      Dr = {};
      function Sa(a) {
        if (Rr.call(a, "ref")) {
          var s = Object.getOwnPropertyDescriptor(a, "ref").get;
          if (s && s.isReactWarning)
            return !1;
        }
        return a.ref !== void 0;
      }
      function Pa(a) {
        if (Rr.call(a, "key")) {
          var s = Object.getOwnPropertyDescriptor(a, "key").get;
          if (s && s.isReactWarning)
            return !1;
        }
        return a.key !== void 0;
      }
      function ja(a, s) {
        if (typeof a.ref == "string" && or.current && s && or.current.stateNode !== s) {
          var u = R(or.current.type);
          Dr[u] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(or.current.type), a.ref), Dr[u] = !0);
        }
      }
      function Ca(a, s) {
        {
          var u = function() {
            Se || (Se = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
          };
          u.isReactWarning = !0, Object.defineProperty(a, "key", {
            get: u,
            configurable: !0
          });
        }
      }
      function Ea(a, s) {
        {
          var u = function() {
            Pe || (Pe = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
          };
          u.isReactWarning = !0, Object.defineProperty(a, "ref", {
            get: u,
            configurable: !0
          });
        }
      }
      var xa = function(a, s, u, v, b, $, g) {
        var _ = {
          $$typeof: n,
          type: a,
          key: s,
          ref: u,
          props: g,
          _owner: $
        };
        return _._store = {}, Object.defineProperty(_._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(_, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: v
        }), Object.defineProperty(_, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: b
        }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
      };
      function Ia(a, s, u, v, b) {
        {
          var $, g = {}, _ = null, P = null;
          u !== void 0 && (_ = "" + u), Pa(s) && (_ = "" + s.key), Sa(s) && (P = s.ref, ja(s, b));
          for ($ in s)
            Rr.call(s, $) && !Aa.hasOwnProperty($) && (g[$] = s[$]);
          if (a && a.defaultProps) {
            var T = a.defaultProps;
            for ($ in T)
              g[$] === void 0 && (g[$] = T[$]);
          }
          if (_ || P) {
            var A = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
            _ && Ca(g, A), P && Ea(g, A);
          }
          return xa(a, _, P, b, v, or.current, g);
        }
      }
      var Fr = B.ReactCurrentOwner, je = B.ReactDebugCurrentFrame;
      function K(a) {
        if (a) {
          var s = a._owner, u = pr(a.type, a._source, s ? s.type : null);
          je.setExtraStackFrame(u);
        } else
          je.setExtraStackFrame(null);
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
            var s = a.fileName.replace(/^.*[\\\/]/, ""), u = a.lineNumber;
            return `

Check your code at ` + s + ":" + u + ".";
          }
          return "";
        }
      }
      var Ee = {};
      function Da(a) {
        {
          var s = Ce();
          if (!s) {
            var u = typeof a == "string" ? a : a.displayName || a.name;
            u && (s = `

Check the top-level render call using <` + u + ">.");
          }
          return s;
        }
      }
      function xe(a, s) {
        {
          if (!a._store || a._store.validated || a.key != null)
            return;
          a._store.validated = !0;
          var u = Da(s);
          if (Ee[u])
            return;
          Ee[u] = !0;
          var v = "";
          a && a._owner && a._owner !== Fr.current && (v = " It was passed a child from " + R(a._owner.type) + "."), K(a), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, v), K(null);
        }
      }
      function Ie(a, s) {
        {
          if (typeof a != "object")
            return;
          if (Array.isArray(a))
            for (var u = 0; u < a.length; u++) {
              var v = a[u];
              Lr(v) && xe(v, s);
            }
          else if (Lr(a))
            a._store && (a._store.validated = !0);
          else if (a) {
            var b = ha(a);
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
          var u;
          if (typeof s == "function")
            u = s.propTypes;
          else if (typeof s == "object" && (s.$$typeof === p || s.$$typeof === h))
            u = s.propTypes;
          else
            return;
          if (u) {
            var v = R(s);
            Ta(u, a.props, "prop", v, a);
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
          for (var s = Object.keys(a.props), u = 0; u < s.length; u++) {
            var v = s[u];
            if (v !== "children" && v !== "key") {
              K(a), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), K(null);
              break;
            }
          }
          a.ref !== null && (K(a), C("Invalid attribute `ref` supplied to `React.Fragment`."), K(null));
        }
      }
      function Re(a, s, u, v, b, $) {
        {
          var g = ga(a);
          if (!g) {
            var _ = "";
            (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var P = Ra(b);
            P ? _ += P : _ += Ce();
            var T;
            a === null ? T = "null" : Array.isArray(a) ? T = "array" : a !== void 0 && a.$$typeof === n ? (T = "<" + (R(a.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : T = typeof a, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, _);
          }
          var A = Ia(a, s, u, b, $);
          if (A == null)
            return A;
          if (g) {
            var D = s.children;
            if (D !== void 0)
              if (v)
                if (Array.isArray(D)) {
                  for (var q = 0; q < D.length; q++)
                    Ie(D[q], a);
                  Object.freeze && Object.freeze(D);
                } else
                  C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Ie(D, a);
          }
          return a === r.Fragment ? Ma(A) : Fa(A), A;
        }
      }
      function La(a, s, u) {
        return Re(a, s, u, !0);
      }
      function Na(a, s, u) {
        return Re(a, s, u, !1);
      }
      var ka = Na, Ga = La;
      r.jsx = ka, r.jsxs = Ga;
    }();
  }(rt)), rt;
}
(function(r) {
  process.env.NODE_ENV === "production" ? r.exports = cs() : r.exports = us();
})(Bt);
Bt.exports.jsx;
const fs = () => {
  const r = ee(!1);
  return Rt(() => (r.current = !0, () => {
    r.current = !1;
  }), []), r;
}, ls = (r) => {
  const e = ee(r);
  e.current = r, Rt(() => () => {
    e.current();
  }, []);
};
var hr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ps(r, e) {
  for (var t = -1, n = r == null ? 0 : r.length, i = Array(n); ++t < n; )
    i[t] = e(r[t], t, r);
  return i;
}
var qt = ps;
function vs() {
  this.__data__ = [], this.size = 0;
}
var ys = vs;
function hs(r, e) {
  return r === e || r !== r && e !== e;
}
var Ht = hs, _s = Ht;
function ds(r, e) {
  for (var t = r.length; t--; )
    if (_s(r[t][0], e))
      return t;
  return -1;
}
var Tr = ds, gs = Tr, bs = Array.prototype, $s = bs.splice;
function ms(r) {
  var e = this.__data__, t = gs(e, r);
  if (t < 0)
    return !1;
  var n = e.length - 1;
  return t == n ? e.pop() : $s.call(e, t, 1), --this.size, !0;
}
var Os = ms, ws = Tr;
function Ts(r) {
  var e = this.__data__, t = ws(e, r);
  return t < 0 ? void 0 : e[t][1];
}
var As = Ts, Ss = Tr;
function Ps(r) {
  return Ss(this.__data__, r) > -1;
}
var js = Ps, Cs = Tr;
function Es(r, e) {
  var t = this.__data__, n = Cs(t, r);
  return n < 0 ? (++this.size, t.push([r, e])) : t[n][1] = e, this;
}
var xs = Es, Is = ys, Rs = Os, Ds = As, Fs = js, Ms = xs;
function Q(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
Q.prototype.clear = Is;
Q.prototype.delete = Rs;
Q.prototype.get = Ds;
Q.prototype.has = Fs;
Q.prototype.set = Ms;
var Ar = Q, Ls = Ar;
function Ns() {
  this.__data__ = new Ls(), this.size = 0;
}
var ks = Ns;
function Gs(r) {
  var e = this.__data__, t = e.delete(r);
  return this.size = e.size, t;
}
var zs = Gs;
function Us(r) {
  return this.__data__.get(r);
}
var Bs = Us;
function Ks(r) {
  return this.__data__.has(r);
}
var qs = Ks, Hs = typeof hr == "object" && hr && hr.Object === Object && hr, Wt = Hs, Ws = Wt, Ys = typeof self == "object" && self && self.Object === Object && self, Xs = Ws || Ys || Function("return this")(), L = Xs, Js = L, Vs = Js.Symbol, Sr = Vs, tt = Sr, Yt = Object.prototype, Zs = Yt.hasOwnProperty, Qs = Yt.toString, sr = tt ? tt.toStringTag : void 0;
function rc(r) {
  var e = Zs.call(r, sr), t = r[sr];
  try {
    r[sr] = void 0;
    var n = !0;
  } catch {
  }
  var i = Qs.call(r);
  return n && (e ? r[sr] = t : delete r[sr]), i;
}
var ec = rc, tc = Object.prototype, ac = tc.toString;
function nc(r) {
  return ac.call(r);
}
var oc = nc, at = Sr, ic = ec, sc = oc, cc = "[object Null]", uc = "[object Undefined]", nt = at ? at.toStringTag : void 0;
function fc(r) {
  return r == null ? r === void 0 ? uc : cc : nt && nt in Object(r) ? ic(r) : sc(r);
}
var cr = fc;
function lc(r) {
  var e = typeof r;
  return r != null && (e == "object" || e == "function");
}
var ne = lc, pc = cr, vc = ne, yc = "[object AsyncFunction]", hc = "[object Function]", _c = "[object GeneratorFunction]", dc = "[object Proxy]";
function gc(r) {
  if (!vc(r))
    return !1;
  var e = pc(r);
  return e == hc || e == _c || e == yc || e == dc;
}
var Xt = gc, bc = L, $c = bc["__core-js_shared__"], mc = $c, Gr = mc, ot = function() {
  var r = /[^.]+$/.exec(Gr && Gr.keys && Gr.keys.IE_PROTO || "");
  return r ? "Symbol(src)_1." + r : "";
}();
function Oc(r) {
  return !!ot && ot in r;
}
var wc = Oc, Tc = Function.prototype, Ac = Tc.toString;
function Sc(r) {
  if (r != null) {
    try {
      return Ac.call(r);
    } catch {
    }
    try {
      return r + "";
    } catch {
    }
  }
  return "";
}
var Jt = Sc, Pc = Xt, jc = wc, Cc = ne, Ec = Jt, xc = /[\\^$.*+?()[\]{}|]/g, Ic = /^\[object .+?Constructor\]$/, Rc = Function.prototype, Dc = Object.prototype, Fc = Rc.toString, Mc = Dc.hasOwnProperty, Lc = RegExp(
  "^" + Fc.call(Mc).replace(xc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Nc(r) {
  if (!Cc(r) || jc(r))
    return !1;
  var e = Pc(r) ? Lc : Ic;
  return e.test(Ec(r));
}
var kc = Nc;
function Gc(r, e) {
  return r == null ? void 0 : r[e];
}
var zc = Gc, Uc = kc, Bc = zc;
function Kc(r, e) {
  var t = Bc(r, e);
  return Uc(t) ? t : void 0;
}
var z = Kc, qc = z, Hc = L, Wc = qc(Hc, "Map"), oe = Wc, Yc = z, Xc = Yc(Object, "create"), Pr = Xc, it = Pr;
function Jc() {
  this.__data__ = it ? it(null) : {}, this.size = 0;
}
var Vc = Jc;
function Zc(r) {
  var e = this.has(r) && delete this.__data__[r];
  return this.size -= e ? 1 : 0, e;
}
var Qc = Zc, ru = Pr, eu = "__lodash_hash_undefined__", tu = Object.prototype, au = tu.hasOwnProperty;
function nu(r) {
  var e = this.__data__;
  if (ru) {
    var t = e[r];
    return t === eu ? void 0 : t;
  }
  return au.call(e, r) ? e[r] : void 0;
}
var ou = nu, iu = Pr, su = Object.prototype, cu = su.hasOwnProperty;
function uu(r) {
  var e = this.__data__;
  return iu ? e[r] !== void 0 : cu.call(e, r);
}
var fu = uu, lu = Pr, pu = "__lodash_hash_undefined__";
function vu(r, e) {
  var t = this.__data__;
  return this.size += this.has(r) ? 0 : 1, t[r] = lu && e === void 0 ? pu : e, this;
}
var yu = vu, hu = Vc, _u = Qc, du = ou, gu = fu, bu = yu;
function rr(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
rr.prototype.clear = hu;
rr.prototype.delete = _u;
rr.prototype.get = du;
rr.prototype.has = gu;
rr.prototype.set = bu;
var $u = rr, st = $u, mu = Ar, Ou = oe;
function wu() {
  this.size = 0, this.__data__ = {
    hash: new st(),
    map: new (Ou || mu)(),
    string: new st()
  };
}
var Tu = wu;
function Au(r) {
  var e = typeof r;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? r !== "__proto__" : r === null;
}
var Su = Au, Pu = Su;
function ju(r, e) {
  var t = r.__data__;
  return Pu(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
}
var jr = ju, Cu = jr;
function Eu(r) {
  var e = Cu(this, r).delete(r);
  return this.size -= e ? 1 : 0, e;
}
var xu = Eu, Iu = jr;
function Ru(r) {
  return Iu(this, r).get(r);
}
var Du = Ru, Fu = jr;
function Mu(r) {
  return Fu(this, r).has(r);
}
var Lu = Mu, Nu = jr;
function ku(r, e) {
  var t = Nu(this, r), n = t.size;
  return t.set(r, e), this.size += t.size == n ? 0 : 1, this;
}
var Gu = ku, zu = Tu, Uu = xu, Bu = Du, Ku = Lu, qu = Gu;
function er(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
er.prototype.clear = zu;
er.prototype.delete = Uu;
er.prototype.get = Bu;
er.prototype.has = Ku;
er.prototype.set = qu;
var ie = er, Hu = Ar, Wu = oe, Yu = ie, Xu = 200;
function Ju(r, e) {
  var t = this.__data__;
  if (t instanceof Hu) {
    var n = t.__data__;
    if (!Wu || n.length < Xu - 1)
      return n.push([r, e]), this.size = ++t.size, this;
    t = this.__data__ = new Yu(n);
  }
  return t.set(r, e), this.size = t.size, this;
}
var Vu = Ju, Zu = Ar, Qu = ks, rf = zs, ef = Bs, tf = qs, af = Vu;
function tr(r) {
  var e = this.__data__ = new Zu(r);
  this.size = e.size;
}
tr.prototype.clear = Qu;
tr.prototype.delete = rf;
tr.prototype.get = ef;
tr.prototype.has = tf;
tr.prototype.set = af;
var Vt = tr, nf = "__lodash_hash_undefined__";
function of(r) {
  return this.__data__.set(r, nf), this;
}
var sf = of;
function cf(r) {
  return this.__data__.has(r);
}
var uf = cf, ff = ie, lf = sf, pf = uf;
function gr(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.__data__ = new ff(); ++e < t; )
    this.add(r[e]);
}
gr.prototype.add = gr.prototype.push = lf;
gr.prototype.has = pf;
var vf = gr;
function yf(r, e) {
  for (var t = -1, n = r == null ? 0 : r.length; ++t < n; )
    if (e(r[t], t, r))
      return !0;
  return !1;
}
var hf = yf;
function _f(r, e) {
  return r.has(e);
}
var df = _f, gf = vf, bf = hf, $f = df, mf = 1, Of = 2;
function wf(r, e, t, n, i, o) {
  var c = t & mf, f = r.length, l = e.length;
  if (f != l && !(c && l > f))
    return !1;
  var p = o.get(r), y = o.get(e);
  if (p && y)
    return p == e && y == r;
  var d = -1, h = !0, S = t & Of ? new gf() : void 0;
  for (o.set(r, e), o.set(e, r); ++d < f; ) {
    var w = r[d], j = e[d];
    if (n)
      var E = c ? n(j, w, d, e, r, o) : n(w, j, d, r, e, o);
    if (E !== void 0) {
      if (E)
        continue;
      h = !1;
      break;
    }
    if (S) {
      if (!bf(e, function(x, I) {
        if (!$f(S, I) && (w === x || i(w, x, t, n, o)))
          return S.push(I);
      })) {
        h = !1;
        break;
      }
    } else if (!(w === j || i(w, j, t, n, o))) {
      h = !1;
      break;
    }
  }
  return o.delete(r), o.delete(e), h;
}
var Zt = wf, Tf = L, Af = Tf.Uint8Array, Sf = Af;
function Pf(r) {
  var e = -1, t = Array(r.size);
  return r.forEach(function(n, i) {
    t[++e] = [i, n];
  }), t;
}
var jf = Pf;
function Cf(r) {
  var e = -1, t = Array(r.size);
  return r.forEach(function(n) {
    t[++e] = n;
  }), t;
}
var Ef = Cf, ct = Sr, ut = Sf, xf = Ht, If = Zt, Rf = jf, Df = Ef, Ff = 1, Mf = 2, Lf = "[object Boolean]", Nf = "[object Date]", kf = "[object Error]", Gf = "[object Map]", zf = "[object Number]", Uf = "[object RegExp]", Bf = "[object Set]", Kf = "[object String]", qf = "[object Symbol]", Hf = "[object ArrayBuffer]", Wf = "[object DataView]", ft = ct ? ct.prototype : void 0, zr = ft ? ft.valueOf : void 0;
function Yf(r, e, t, n, i, o, c) {
  switch (t) {
    case Wf:
      if (r.byteLength != e.byteLength || r.byteOffset != e.byteOffset)
        return !1;
      r = r.buffer, e = e.buffer;
    case Hf:
      return !(r.byteLength != e.byteLength || !o(new ut(r), new ut(e)));
    case Lf:
    case Nf:
    case zf:
      return xf(+r, +e);
    case kf:
      return r.name == e.name && r.message == e.message;
    case Uf:
    case Kf:
      return r == e + "";
    case Gf:
      var f = Rf;
    case Bf:
      var l = n & Ff;
      if (f || (f = Df), r.size != e.size && !l)
        return !1;
      var p = c.get(r);
      if (p)
        return p == e;
      n |= Mf, c.set(r, e);
      var y = If(f(r), f(e), n, i, o, c);
      return c.delete(r), y;
    case qf:
      if (zr)
        return zr.call(r) == zr.call(e);
  }
  return !1;
}
var Xf = Yf;
function Jf(r, e) {
  for (var t = -1, n = e.length, i = r.length; ++t < n; )
    r[i + t] = e[t];
  return r;
}
var Vf = Jf, Zf = Array.isArray, N = Zf, Qf = Vf, rl = N;
function el(r, e, t) {
  var n = e(r);
  return rl(r) ? n : Qf(n, t(r));
}
var tl = el;
function al(r, e) {
  for (var t = -1, n = r == null ? 0 : r.length, i = 0, o = []; ++t < n; ) {
    var c = r[t];
    e(c, t, r) && (o[i++] = c);
  }
  return o;
}
var nl = al;
function ol() {
  return [];
}
var il = ol, sl = nl, cl = il, ul = Object.prototype, fl = ul.propertyIsEnumerable, lt = Object.getOwnPropertySymbols, ll = lt ? function(r) {
  return r == null ? [] : (r = Object(r), sl(lt(r), function(e) {
    return fl.call(r, e);
  }));
} : cl, pl = ll;
function vl(r, e) {
  for (var t = -1, n = Array(r); ++t < r; )
    n[t] = e(t);
  return n;
}
var yl = vl;
function hl(r) {
  return r != null && typeof r == "object";
}
var ur = hl, _l = cr, dl = ur, gl = "[object Arguments]";
function bl(r) {
  return dl(r) && _l(r) == gl;
}
var $l = bl, pt = $l, ml = ur, Qt = Object.prototype, Ol = Qt.hasOwnProperty, wl = Qt.propertyIsEnumerable, Tl = pt(function() {
  return arguments;
}()) ? pt : function(r) {
  return ml(r) && Ol.call(r, "callee") && !wl.call(r, "callee");
}, ra = Tl, br = { exports: {} };
function Al() {
  return !1;
}
var Sl = Al;
(function(r, e) {
  var t = L, n = Sl, i = e && !e.nodeType && e, o = i && !0 && r && !r.nodeType && r, c = o && o.exports === i, f = c ? t.Buffer : void 0, l = f ? f.isBuffer : void 0, p = l || n;
  r.exports = p;
})(br, br.exports);
var Pl = 9007199254740991, jl = /^(?:0|[1-9]\d*)$/;
function Cl(r, e) {
  var t = typeof r;
  return e = e == null ? Pl : e, !!e && (t == "number" || t != "symbol" && jl.test(r)) && r > -1 && r % 1 == 0 && r < e;
}
var ea = Cl, El = 9007199254740991;
function xl(r) {
  return typeof r == "number" && r > -1 && r % 1 == 0 && r <= El;
}
var se = xl, Il = cr, Rl = se, Dl = ur, Fl = "[object Arguments]", Ml = "[object Array]", Ll = "[object Boolean]", Nl = "[object Date]", kl = "[object Error]", Gl = "[object Function]", zl = "[object Map]", Ul = "[object Number]", Bl = "[object Object]", Kl = "[object RegExp]", ql = "[object Set]", Hl = "[object String]", Wl = "[object WeakMap]", Yl = "[object ArrayBuffer]", Xl = "[object DataView]", Jl = "[object Float32Array]", Vl = "[object Float64Array]", Zl = "[object Int8Array]", Ql = "[object Int16Array]", rp = "[object Int32Array]", ep = "[object Uint8Array]", tp = "[object Uint8ClampedArray]", ap = "[object Uint16Array]", np = "[object Uint32Array]", m = {};
m[Jl] = m[Vl] = m[Zl] = m[Ql] = m[rp] = m[ep] = m[tp] = m[ap] = m[np] = !0;
m[Fl] = m[Ml] = m[Yl] = m[Ll] = m[Xl] = m[Nl] = m[kl] = m[Gl] = m[zl] = m[Ul] = m[Bl] = m[Kl] = m[ql] = m[Hl] = m[Wl] = !1;
function op(r) {
  return Dl(r) && Rl(r.length) && !!m[Il(r)];
}
var ip = op;
function sp(r) {
  return function(e) {
    return r(e);
  };
}
var cp = sp, Xr = { exports: {} };
(function(r, e) {
  var t = Wt, n = e && !e.nodeType && e, i = n && !0 && r && !r.nodeType && r, o = i && i.exports === n, c = o && t.process, f = function() {
    try {
      var l = i && i.require && i.require("util").types;
      return l || c && c.binding && c.binding("util");
    } catch {
    }
  }();
  r.exports = f;
})(Xr, Xr.exports);
var up = ip, fp = cp, vt = Xr.exports, yt = vt && vt.isTypedArray, lp = yt ? fp(yt) : up, ta = lp, pp = yl, vp = ra, yp = N, hp = br.exports, _p = ea, dp = ta, gp = Object.prototype, bp = gp.hasOwnProperty;
function $p(r, e) {
  var t = yp(r), n = !t && vp(r), i = !t && !n && hp(r), o = !t && !n && !i && dp(r), c = t || n || i || o, f = c ? pp(r.length, String) : [], l = f.length;
  for (var p in r)
    (e || bp.call(r, p)) && !(c && (p == "length" || i && (p == "offset" || p == "parent") || o && (p == "buffer" || p == "byteLength" || p == "byteOffset") || _p(p, l))) && f.push(p);
  return f;
}
var mp = $p, Op = Object.prototype;
function wp(r) {
  var e = r && r.constructor, t = typeof e == "function" && e.prototype || Op;
  return r === t;
}
var Tp = wp;
function Ap(r, e) {
  return function(t) {
    return r(e(t));
  };
}
var Sp = Ap, Pp = Sp, jp = Pp(Object.keys, Object), Cp = jp, Ep = Tp, xp = Cp, Ip = Object.prototype, Rp = Ip.hasOwnProperty;
function Dp(r) {
  if (!Ep(r))
    return xp(r);
  var e = [];
  for (var t in Object(r))
    Rp.call(r, t) && t != "constructor" && e.push(t);
  return e;
}
var Fp = Dp, Mp = Xt, Lp = se;
function Np(r) {
  return r != null && Lp(r.length) && !Mp(r);
}
var ce = Np, kp = mp, Gp = Fp, zp = ce;
function Up(r) {
  return zp(r) ? kp(r) : Gp(r);
}
var ue = Up, Bp = tl, Kp = pl, qp = ue;
function Hp(r) {
  return Bp(r, qp, Kp);
}
var Wp = Hp, ht = Wp, Yp = 1, Xp = Object.prototype, Jp = Xp.hasOwnProperty;
function Vp(r, e, t, n, i, o) {
  var c = t & Yp, f = ht(r), l = f.length, p = ht(e), y = p.length;
  if (l != y && !c)
    return !1;
  for (var d = l; d--; ) {
    var h = f[d];
    if (!(c ? h in e : Jp.call(e, h)))
      return !1;
  }
  var S = o.get(r), w = o.get(e);
  if (S && w)
    return S == e && w == r;
  var j = !0;
  o.set(r, e), o.set(e, r);
  for (var E = c; ++d < l; ) {
    h = f[d];
    var x = r[h], I = e[h];
    if (n)
      var O = c ? n(I, x, h, e, r, o) : n(x, I, h, r, e, o);
    if (!(O === void 0 ? x === I || i(x, I, t, n, o) : O)) {
      j = !1;
      break;
    }
    E || (E = h == "constructor");
  }
  if (j && !E) {
    var k = r.constructor, U = e.constructor;
    k != U && "constructor" in r && "constructor" in e && !(typeof k == "function" && k instanceof k && typeof U == "function" && U instanceof U) && (j = !1);
  }
  return o.delete(r), o.delete(e), j;
}
var Zp = Vp, Qp = z, rv = L, ev = Qp(rv, "DataView"), tv = ev, av = z, nv = L, ov = av(nv, "Promise"), iv = ov, sv = z, cv = L, uv = sv(cv, "Set"), fv = uv, lv = z, pv = L, vv = lv(pv, "WeakMap"), yv = vv, Jr = tv, Vr = oe, Zr = iv, Qr = fv, re = yv, aa = cr, ar = Jt, _t = "[object Map]", hv = "[object Object]", dt = "[object Promise]", gt = "[object Set]", bt = "[object WeakMap]", $t = "[object DataView]", _v = ar(Jr), dv = ar(Vr), gv = ar(Zr), bv = ar(Qr), $v = ar(re), G = aa;
(Jr && G(new Jr(new ArrayBuffer(1))) != $t || Vr && G(new Vr()) != _t || Zr && G(Zr.resolve()) != dt || Qr && G(new Qr()) != gt || re && G(new re()) != bt) && (G = function(r) {
  var e = aa(r), t = e == hv ? r.constructor : void 0, n = t ? ar(t) : "";
  if (n)
    switch (n) {
      case _v:
        return $t;
      case dv:
        return _t;
      case gv:
        return dt;
      case bv:
        return gt;
      case $v:
        return bt;
    }
  return e;
});
var mv = G, Ur = Vt, Ov = Zt, wv = Xf, Tv = Zp, mt = mv, Ot = N, wt = br.exports, Av = ta, Sv = 1, Tt = "[object Arguments]", At = "[object Array]", _r = "[object Object]", Pv = Object.prototype, St = Pv.hasOwnProperty;
function jv(r, e, t, n, i, o) {
  var c = Ot(r), f = Ot(e), l = c ? At : mt(r), p = f ? At : mt(e);
  l = l == Tt ? _r : l, p = p == Tt ? _r : p;
  var y = l == _r, d = p == _r, h = l == p;
  if (h && wt(r)) {
    if (!wt(e))
      return !1;
    c = !0, y = !1;
  }
  if (h && !y)
    return o || (o = new Ur()), c || Av(r) ? Ov(r, e, t, n, i, o) : wv(r, e, l, t, n, i, o);
  if (!(t & Sv)) {
    var S = y && St.call(r, "__wrapped__"), w = d && St.call(e, "__wrapped__");
    if (S || w) {
      var j = S ? r.value() : r, E = w ? e.value() : e;
      return o || (o = new Ur()), i(j, E, t, n, o);
    }
  }
  return h ? (o || (o = new Ur()), Tv(r, e, t, n, i, o)) : !1;
}
var Cv = jv, Ev = Cv, Pt = ur;
function na(r, e, t, n, i) {
  return r === e ? !0 : r == null || e == null || !Pt(r) && !Pt(e) ? r !== r && e !== e : Ev(r, e, t, n, na, i);
}
var oa = na, xv = Vt, Iv = oa, Rv = 1, Dv = 2;
function Fv(r, e, t, n) {
  var i = t.length, o = i, c = !n;
  if (r == null)
    return !o;
  for (r = Object(r); i--; ) {
    var f = t[i];
    if (c && f[2] ? f[1] !== r[f[0]] : !(f[0] in r))
      return !1;
  }
  for (; ++i < o; ) {
    f = t[i];
    var l = f[0], p = r[l], y = f[1];
    if (c && f[2]) {
      if (p === void 0 && !(l in r))
        return !1;
    } else {
      var d = new xv();
      if (n)
        var h = n(p, y, l, r, e, d);
      if (!(h === void 0 ? Iv(y, p, Rv | Dv, n, d) : h))
        return !1;
    }
  }
  return !0;
}
var Mv = Fv, Lv = ne;
function Nv(r) {
  return r === r && !Lv(r);
}
var ia = Nv, kv = ia, Gv = ue;
function zv(r) {
  for (var e = Gv(r), t = e.length; t--; ) {
    var n = e[t], i = r[n];
    e[t] = [n, i, kv(i)];
  }
  return e;
}
var Uv = zv;
function Bv(r, e) {
  return function(t) {
    return t == null ? !1 : t[r] === e && (e !== void 0 || r in Object(t));
  };
}
var sa = Bv, Kv = Mv, qv = Uv, Hv = sa;
function Wv(r) {
  var e = qv(r);
  return e.length == 1 && e[0][2] ? Hv(e[0][0], e[0][1]) : function(t) {
    return t === r || Kv(t, r, e);
  };
}
var Yv = Wv, Xv = cr, Jv = ur, Vv = "[object Symbol]";
function Zv(r) {
  return typeof r == "symbol" || Jv(r) && Xv(r) == Vv;
}
var fe = Zv, Qv = N, ry = fe, ey = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ty = /^\w*$/;
function ay(r, e) {
  if (Qv(r))
    return !1;
  var t = typeof r;
  return t == "number" || t == "symbol" || t == "boolean" || r == null || ry(r) ? !0 : ty.test(r) || !ey.test(r) || e != null && r in Object(e);
}
var le = ay, ca = ie, ny = "Expected a function";
function pe(r, e) {
  if (typeof r != "function" || e != null && typeof e != "function")
    throw new TypeError(ny);
  var t = function() {
    var n = arguments, i = e ? e.apply(this, n) : n[0], o = t.cache;
    if (o.has(i))
      return o.get(i);
    var c = r.apply(this, n);
    return t.cache = o.set(i, c) || o, c;
  };
  return t.cache = new (pe.Cache || ca)(), t;
}
pe.Cache = ca;
var oy = pe, iy = oy, sy = 500;
function cy(r) {
  var e = iy(r, function(n) {
    return t.size === sy && t.clear(), n;
  }), t = e.cache;
  return e;
}
var uy = cy, fy = uy, ly = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, py = /\\(\\)?/g, vy = fy(function(r) {
  var e = [];
  return r.charCodeAt(0) === 46 && e.push(""), r.replace(ly, function(t, n, i, o) {
    e.push(i ? o.replace(py, "$1") : n || t);
  }), e;
}), yy = vy, jt = Sr, hy = qt, _y = N, dy = fe, gy = 1 / 0, Ct = jt ? jt.prototype : void 0, Et = Ct ? Ct.toString : void 0;
function ua(r) {
  if (typeof r == "string")
    return r;
  if (_y(r))
    return hy(r, ua) + "";
  if (dy(r))
    return Et ? Et.call(r) : "";
  var e = r + "";
  return e == "0" && 1 / r == -gy ? "-0" : e;
}
var by = ua, $y = by;
function my(r) {
  return r == null ? "" : $y(r);
}
var fa = my, Oy = N, wy = le, Ty = yy, Ay = fa;
function Sy(r, e) {
  return Oy(r) ? r : wy(r, e) ? [r] : Ty(Ay(r));
}
var la = Sy, Py = fe, jy = 1 / 0;
function Cy(r) {
  if (typeof r == "string" || Py(r))
    return r;
  var e = r + "";
  return e == "0" && 1 / r == -jy ? "-0" : e;
}
var Cr = Cy, Ey = la, xy = Cr;
function Iy(r, e) {
  e = Ey(e, r);
  for (var t = 0, n = e.length; r != null && t < n; )
    r = r[xy(e[t++])];
  return t && t == n ? r : void 0;
}
var pa = Iy, Ry = pa;
function Dy(r, e, t) {
  var n = r == null ? void 0 : Ry(r, e);
  return n === void 0 ? t : n;
}
var Fy = Dy;
function My(r, e) {
  return r != null && e in Object(r);
}
var Ly = My, Ny = la, ky = ra, Gy = N, zy = ea, Uy = se, By = Cr;
function Ky(r, e, t) {
  e = Ny(e, r);
  for (var n = -1, i = e.length, o = !1; ++n < i; ) {
    var c = By(e[n]);
    if (!(o = r != null && t(r, c)))
      break;
    r = r[c];
  }
  return o || ++n != i ? o : (i = r == null ? 0 : r.length, !!i && Uy(i) && zy(c, i) && (Gy(r) || ky(r)));
}
var qy = Ky, Hy = Ly, Wy = qy;
function Yy(r, e) {
  return r != null && Wy(r, e, Hy);
}
var Xy = Yy, Jy = oa, Vy = Fy, Zy = Xy, Qy = le, rh = ia, eh = sa, th = Cr, ah = 1, nh = 2;
function oh(r, e) {
  return Qy(r) && rh(e) ? eh(th(r), e) : function(t) {
    var n = Vy(t, r);
    return n === void 0 && n === e ? Zy(t, r) : Jy(e, n, ah | nh);
  };
}
var ih = oh;
function sh(r) {
  return r;
}
var ch = sh;
function uh(r) {
  return function(e) {
    return e == null ? void 0 : e[r];
  };
}
var fh = uh, lh = pa;
function ph(r) {
  return function(e) {
    return lh(e, r);
  };
}
var vh = ph, yh = fh, hh = vh, _h = le, dh = Cr;
function gh(r) {
  return _h(r) ? yh(dh(r)) : hh(r);
}
var bh = gh, $h = Yv, mh = ih, Oh = ch, wh = N, Th = bh;
function Ah(r) {
  return typeof r == "function" ? r : r == null ? Oh : typeof r == "object" ? wh(r) ? mh(r[0], r[1]) : $h(r) : Th(r);
}
var va = Ah;
function Sh(r) {
  return function(e, t, n) {
    for (var i = -1, o = Object(e), c = n(e), f = c.length; f--; ) {
      var l = c[r ? f : ++i];
      if (t(o[l], l, o) === !1)
        break;
    }
    return e;
  };
}
var Ph = Sh, jh = Ph, Ch = jh(), Eh = Ch, xh = Eh, Ih = ue;
function Rh(r, e) {
  return r && xh(r, e, Ih);
}
var ya = Rh, Dh = ce;
function Fh(r, e) {
  return function(t, n) {
    if (t == null)
      return t;
    if (!Dh(t))
      return r(t, n);
    for (var i = t.length, o = e ? i : -1, c = Object(t); (e ? o-- : ++o < i) && n(c[o], o, c) !== !1; )
      ;
    return t;
  };
}
var Mh = Fh, Lh = ya, Nh = Mh, kh = Nh(Lh), Gh = kh, zh = Gh, Uh = ce;
function Bh(r, e) {
  var t = -1, n = Uh(r) ? Array(r.length) : [];
  return zh(r, function(i, o, c) {
    n[++t] = e(i, o, c);
  }), n;
}
var Kh = Bh, qh = qt, Hh = va, Wh = Kh, Yh = N;
function Xh(r, e) {
  var t = Yh(r) ? qh : Wh;
  return t(r, Hh(e));
}
var Jh = Xh, Vh = z, Zh = function() {
  try {
    var r = Vh(Object, "defineProperty");
    return r({}, "", {}), r;
  } catch {
  }
}(), Qh = Zh, xt = Qh;
function r_(r, e, t) {
  e == "__proto__" && xt ? xt(r, e, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : r[e] = t;
}
var e_ = r_, t_ = e_, a_ = ya, n_ = va;
function o_(r, e) {
  var t = {};
  return e = n_(e), a_(r, function(n, i, o) {
    t_(t, i, e(n, i, o));
  }), t;
}
var i_ = o_, s_ = fa, c_ = 0;
function u_(r) {
  var e = ++c_;
  return s_(r) + e;
}
var f_ = u_;
const l_ = {
  autoAbort: !1
}, v_ = (r, e) => {
  const t = ee({}), n = fs(), i = za(
    (c) => {
      const f = f_("api:");
      return {
        start: async (p) => {
          const y = { ...l_, ...p };
          let d;
          return typeof (e == null ? void 0 : e.onBefore) == "function" && (d = await (e == null ? void 0 : e.onBefore(y))), new Promise((h, S) => {
            y.autoAbort && (t.current[f] = c.abort), c.start().then(async (w) => {
              delete t.current[f], typeof (e == null ? void 0 : e.onAfter) == "function" && await (e == null ? void 0 : e.onAfter(w, d, y)), h(w);
            }).catch((w) => {
              delete t.current[f], S(w);
            }), y.autoAbort && !n.current && c.abort();
          });
        },
        abort: c.abort
      };
    },
    [n, e]
  ), o = Ua(() => i_(r, (c) => (...f) => {
    const l = c(...f);
    return l instanceof Promise ? new Promise((p, y) => {
      l.then((d) => p(i(d))).catch(y);
    }) : i(l);
  }), [r, i]);
  return ls(() => {
    Jh(t.current, (c) => {
      c();
    });
  }), o;
};
export {
  v_ as useAxios
};
