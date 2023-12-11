"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  DataTable: () => DataTable,
  differenceBy: () => differenceBy,
  getRecordId: () => getRecordId,
  getValueAtPath: () => getValueAtPath,
  humanize: () => humanize,
  uniqBy: () => uniqBy
});
module.exports = __toCommonJS(src_exports);

// src/DataTable.tsx
var import_react107 = __toESM(require("react"));
var import_core61 = require("@raikou/core");

// ../components/Table/src/Table.tsx
var import_react3 = __toESM(require("react"));
var import_core2 = require("@raikou/core");

// ../components/Table/src/Table.components.tsx
var import_react = __toESM(require("react"));
var import_core = require("@raikou/core");

// ../../../node_modules/.pnpm/immer@7.0.15/node_modules/immer/dist/immer.esm.js
function n(n2) {
  for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), e = 1; e < t2; e++)
    r2[e - 1] = arguments[e];
  if ("production" !== process.env.NODE_ENV) {
    var i2 = Y[n2], o2 = i2 ? "function" == typeof i2 ? i2.apply(null, r2) : i2 : "unknown error nr: " + n2;
    throw Error("[Immer] " + o2);
  }
  throw Error("[Immer] minified error nr: " + n2 + (r2.length ? " " + r2.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function t(n2) {
  return !!n2 && !!n2[Q];
}
function r(n2) {
  return !!n2 && (function(n3) {
    if (!n3 || "object" != typeof n3)
      return false;
    var t2 = Object.getPrototypeOf(n3);
    return !t2 || t2 === Object.prototype;
  }(n2) || Array.isArray(n2) || !!n2[L] || !!n2.constructor[L] || s(n2) || v(n2));
}
function i(n2, t2, r2) {
  void 0 === r2 && (r2 = false), 0 === o(n2) ? (r2 ? Object.keys : Z)(n2).forEach(function(e) {
    r2 && "symbol" == typeof e || t2(e, n2[e], n2);
  }) : n2.forEach(function(r3, e) {
    return t2(e, r3, n2);
  });
}
function o(n2) {
  var t2 = n2[Q];
  return t2 ? t2.i > 3 ? t2.i - 4 : t2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
}
function u(n2, t2) {
  return 2 === o(n2) ? n2.has(t2) : Object.prototype.hasOwnProperty.call(n2, t2);
}
function a(n2, t2) {
  return 2 === o(n2) ? n2.get(t2) : n2[t2];
}
function f(n2, t2, r2) {
  var e = o(n2);
  2 === e ? n2.set(t2, r2) : 3 === e ? (n2.delete(t2), n2.add(r2)) : n2[t2] = r2;
}
function c(n2, t2) {
  return n2 === t2 ? 0 !== n2 || 1 / n2 == 1 / t2 : n2 != n2 && t2 != t2;
}
function s(n2) {
  return X && n2 instanceof Map;
}
function v(n2) {
  return q && n2 instanceof Set;
}
function p(n2) {
  return n2.o || n2.t;
}
function l(n2) {
  if (Array.isArray(n2))
    return Array.prototype.slice.call(n2);
  var t2 = nn(n2);
  delete t2[Q];
  for (var r2 = Z(t2), e = 0; e < r2.length; e++) {
    var i2 = r2[e], o2 = t2[i2];
    false === o2.writable && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (t2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), t2);
}
function d(n2, e) {
  y(n2) || t(n2) || !r(n2) || (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e && i(n2, function(n3, t2) {
    return d(t2, true);
  }, true));
}
function h() {
  n(2);
}
function y(n2) {
  return null == n2 || "object" != typeof n2 || Object.isFrozen(n2);
}
function b(t2) {
  var r2 = tn[t2];
  return r2 || n(18, t2), r2;
}
function _() {
  return "production" === process.env.NODE_ENV || U || n(0), U;
}
function j(n2, t2) {
  t2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = t2);
}
function g(n2) {
  O(n2), n2.p.forEach(S), n2.p = null;
}
function O(n2) {
  n2 === U && (U = n2.l);
}
function w(n2) {
  return U = { p: [], l: U, h: n2, m: true, _: 0 };
}
function S(n2) {
  var t2 = n2[Q];
  0 === t2.i || 1 === t2.i ? t2.j() : t2.g = true;
}
function P(t2, e) {
  e._ = e.p.length;
  var i2 = e.p[0], o2 = void 0 !== t2 && t2 !== i2;
  return e.h.O || b("ES5").S(e, t2, o2), o2 ? (i2[Q].P && (g(e), n(4)), r(t2) && (t2 = M(e, t2), e.l || x(e, t2)), e.u && b("Patches").M(i2[Q], t2, e.u, e.s)) : t2 = M(e, i2, []), g(e), e.u && e.v(e.u, e.s), t2 !== H ? t2 : void 0;
}
function M(n2, t2, r2) {
  if (y(t2))
    return t2;
  var e = t2[Q];
  if (!e)
    return i(t2, function(i2, o3) {
      return A(n2, e, t2, i2, o3, r2);
    }, true), t2;
  if (e.A !== n2)
    return t2;
  if (!e.P)
    return x(n2, e.t, true), e.t;
  if (!e.I) {
    e.I = true, e.A._--;
    var o2 = 4 === e.i || 5 === e.i ? e.o = l(e.k) : e.o;
    i(3 === e.i ? new Set(o2) : o2, function(t3, i2) {
      return A(n2, e, o2, t3, i2, r2);
    }), x(n2, o2, false), r2 && n2.u && b("Patches").R(e, r2, n2.u, n2.s);
  }
  return e.o;
}
function A(e, i2, o2, a2, c2, s2) {
  if ("production" !== process.env.NODE_ENV && c2 === o2 && n(5), t(c2)) {
    var v2 = M(e, c2, s2 && i2 && 3 !== i2.i && !u(i2.D, a2) ? s2.concat(a2) : void 0);
    if (f(o2, a2, v2), !t(v2))
      return;
    e.m = false;
  }
  if (r(c2) && !y(c2)) {
    if (!e.h.N && e._ < 1)
      return;
    M(e, c2), i2 && i2.A.l || x(e, c2);
  }
}
function x(n2, t2, r2) {
  void 0 === r2 && (r2 = false), n2.h.N && n2.m && d(t2, r2);
}
function z(n2, t2) {
  var r2 = n2[Q];
  return (r2 ? p(r2) : n2)[t2];
}
function I(n2, t2) {
  if (t2 in n2)
    for (var r2 = Object.getPrototypeOf(n2); r2; ) {
      var e = Object.getOwnPropertyDescriptor(r2, t2);
      if (e)
        return e;
      r2 = Object.getPrototypeOf(r2);
    }
}
function E(n2) {
  n2.P || (n2.P = true, n2.l && E(n2.l));
}
function k(n2) {
  n2.o || (n2.o = l(n2.t));
}
function R(n2, t2, r2) {
  var e = s(t2) ? b("MapSet").T(t2, r2) : v(t2) ? b("MapSet").F(t2, r2) : n2.O ? function(n3, t3) {
    var r3 = Array.isArray(n3), e2 = { i: r3 ? 1 : 0, A: t3 ? t3.A : _(), P: false, I: false, D: {}, l: t3, t: n3, k: null, o: null, j: null, C: false }, i2 = e2, o2 = rn;
    r3 && (i2 = [e2], o2 = en);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e2.k = f2, e2.j = a2, f2;
  }(t2, r2) : b("ES5").J(t2, r2);
  return (r2 ? r2.A : _()).p.push(e), e;
}
function D(e) {
  return t(e) || n(22, e), function n2(t2) {
    if (!r(t2))
      return t2;
    var e2, u2 = t2[Q], c2 = o(t2);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b("ES5").K(u2)))
        return u2.t;
      u2.I = true, e2 = N(t2, c2), u2.I = false;
    } else
      e2 = N(t2, c2);
    return i(e2, function(t3, r2) {
      u2 && a(u2.t, t3) === r2 || f(e2, t3, n2(r2));
    }), 3 === c2 ? new Set(e2) : e2;
  }(e);
}
function N(n2, t2) {
  switch (t2) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l(n2);
}
var G;
var U;
var W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x");
var X = "undefined" != typeof Map;
var q = "undefined" != typeof Set;
var B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect;
var H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G);
var L = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
var Q = W ? Symbol.for("immer-state") : "__$immer_state";
var Y = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(n2) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n2;
}, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(n2) {
  return "Cannot apply patch, path doesn't resolve: " + n2;
}, 16: 'Sets cannot have "replace" patches.', 17: function(n2) {
  return "Unsupported patch operation: " + n2;
}, 18: function(n2) {
  return "The plugin for '" + n2 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n2 + "()` when initializing your application.";
}, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(n2) {
  return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n2 + "'";
}, 22: function(n2) {
  return "'current' expects a draft, got: " + n2;
}, 23: function(n2) {
  return "'original' expects a draft, got: " + n2;
} };
var Z = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames;
var nn = Object.getOwnPropertyDescriptors || function(n2) {
  var t2 = {};
  return Z(n2).forEach(function(r2) {
    t2[r2] = Object.getOwnPropertyDescriptor(n2, r2);
  }), t2;
};
var tn = {};
var rn = { get: function(n2, t2) {
  if (t2 === Q)
    return n2;
  var e = p(n2);
  if (!u(e, t2))
    return function(n3, t3, r2) {
      var e2, i3 = I(t3, r2);
      return i3 ? "value" in i3 ? i3.value : null === (e2 = i3.get) || void 0 === e2 ? void 0 : e2.call(n3.k) : void 0;
    }(n2, e, t2);
  var i2 = e[t2];
  return n2.I || !r(i2) ? i2 : i2 === z(n2.t, t2) ? (k(n2), n2.o[t2] = R(n2.A.h, i2, n2)) : i2;
}, has: function(n2, t2) {
  return t2 in p(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p(n2));
}, set: function(n2, t2, r2) {
  var e = I(p(n2), t2);
  if (null == e ? void 0 : e.set)
    return e.set.call(n2.k, r2), true;
  if (!n2.P) {
    var i2 = z(p(n2), t2), o2 = null == i2 ? void 0 : i2[Q];
    if (o2 && o2.t === r2)
      return n2.o[t2] = r2, n2.D[t2] = false, true;
    if (c(r2, i2) && (void 0 !== r2 || u(n2.t, t2)))
      return true;
    k(n2), E(n2);
  }
  return n2.o[t2] = r2, n2.D[t2] = true, true;
}, deleteProperty: function(n2, t2) {
  return void 0 !== z(n2.t, t2) || t2 in n2.t ? (n2.D[t2] = false, k(n2), E(n2)) : delete n2.D[t2], n2.o && delete n2.o[t2], true;
}, getOwnPropertyDescriptor: function(n2, t2) {
  var r2 = p(n2), e = Reflect.getOwnPropertyDescriptor(r2, t2);
  return e ? { writable: true, configurable: 1 !== n2.i || "length" !== t2, enumerable: e.enumerable, value: r2[t2] } : e;
}, defineProperty: function() {
  n(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n(12);
} };
var en = {};
i(rn, function(n2, t2) {
  en[n2] = function() {
    return arguments[0] = arguments[0][0], t2.apply(this, arguments);
  };
}), en.deleteProperty = function(t2, r2) {
  return "production" !== process.env.NODE_ENV && isNaN(parseInt(r2)) && n(13), rn.deleteProperty.call(this, t2[0], r2);
}, en.set = function(t2, r2, e) {
  return "production" !== process.env.NODE_ENV && "length" !== r2 && isNaN(parseInt(r2)) && n(14), rn.set.call(this, t2[0], r2, e, t2[0]);
};
var on = function() {
  function e(n2) {
    this.O = B, this.N = "production" !== process.env.NODE_ENV, "boolean" == typeof (null == n2 ? void 0 : n2.useProxies) && this.setUseProxies(n2.useProxies), "boolean" == typeof (null == n2 ? void 0 : n2.autoFreeze) && this.setAutoFreeze(n2.autoFreeze), this.produce = this.produce.bind(this), this.produceWithPatches = this.produceWithPatches.bind(this);
  }
  var i2 = e.prototype;
  return i2.produce = function(t2, e2, i3) {
    if ("function" == typeof t2 && "function" != typeof e2) {
      var o2 = e2;
      e2 = t2;
      var u2 = this;
      return function(n2) {
        var t3 = this;
        void 0 === n2 && (n2 = o2);
        for (var r2 = arguments.length, i4 = Array(r2 > 1 ? r2 - 1 : 0), a3 = 1; a3 < r2; a3++)
          i4[a3 - 1] = arguments[a3];
        return u2.produce(n2, function(n3) {
          var r3;
          return (r3 = e2).call.apply(r3, [t3, n3].concat(i4));
        });
      };
    }
    var a2;
    if ("function" != typeof e2 && n(6), void 0 !== i3 && "function" != typeof i3 && n(7), r(t2)) {
      var f2 = w(this), c2 = R(this, t2, void 0), s2 = true;
      try {
        a2 = e2(c2), s2 = false;
      } finally {
        s2 ? g(f2) : O(f2);
      }
      return "undefined" != typeof Promise && a2 instanceof Promise ? a2.then(function(n2) {
        return j(f2, i3), P(n2, f2);
      }, function(n2) {
        throw g(f2), n2;
      }) : (j(f2, i3), P(a2, f2));
    }
    if (!t2 || "object" != typeof t2) {
      if ((a2 = e2(t2)) === H)
        return;
      return void 0 === a2 && (a2 = t2), this.N && d(a2, true), a2;
    }
    n(21, t2);
  }, i2.produceWithPatches = function(n2, t2) {
    var r2, e2, i3 = this;
    return "function" == typeof n2 ? function(t3) {
      for (var r3 = arguments.length, e3 = Array(r3 > 1 ? r3 - 1 : 0), o2 = 1; o2 < r3; o2++)
        e3[o2 - 1] = arguments[o2];
      return i3.produceWithPatches(t3, function(t4) {
        return n2.apply(void 0, [t4].concat(e3));
      });
    } : [this.produce(n2, t2, function(n3, t3) {
      r2 = n3, e2 = t3;
    }), r2, e2];
  }, i2.createDraft = function(e2) {
    r(e2) || n(8), t(e2) && (e2 = D(e2));
    var i3 = w(this), o2 = R(this, e2, void 0);
    return o2[Q].C = true, O(i3), o2;
  }, i2.finishDraft = function(t2, r2) {
    var e2 = t2 && t2[Q];
    "production" !== process.env.NODE_ENV && (e2 && e2.C || n(9), e2.I && n(10));
    var i3 = e2.A;
    return j(i3, r2), P(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.N = n2;
  }, i2.setUseProxies = function(t2) {
    t2 && !B && n(20), this.O = t2;
  }, i2.applyPatches = function(n2, r2) {
    var e2;
    for (e2 = r2.length - 1; e2 >= 0; e2--) {
      var i3 = r2[e2];
      if (0 === i3.path.length && "replace" === i3.op) {
        n2 = i3.value;
        break;
      }
    }
    var o2 = b("Patches").$;
    return t(n2) ? o2(n2, r2) : this.produce(n2, function(n3) {
      return o2(n3, r2.slice(e2 + 1));
    });
  }, e;
}();
var un = new on();
var an = un.produce;
var fn = un.produceWithPatches.bind(un);
var cn = un.setAutoFreeze.bind(un);
var sn = un.setUseProxies.bind(un);
var vn = un.applyPatches.bind(un);
var pn = un.createDraft.bind(un);
var ln = un.finishDraft.bind(un);
var immer_esm_default = an;

// ../../../node_modules/.pnpm/pure-store@1.2.0/node_modules/pure-store/index.js
var PureStore = (
  /** @class */
  function() {
    function PureStore2(parent, getter, rootState) {
      var _this = this;
      this.callbacks = [];
      this.getState = function() {
        return _this.getter(_this.root.rootState);
      };
      this.update = function(updater) {
        var updaterFn = updater instanceof Function ? updater : function(e) {
          return Object.assign(e, updater);
        };
        var oldState = _this.root.rootState;
        _this.root.rootState = immer_esm_default(_this.root.rootState, function(s2) {
          updaterFn(_this.getter(s2));
        });
        if (_this.root.rootState !== oldState) {
          _this.root.callbacks.forEach(function(callback) {
            return callback();
          });
        }
      };
      this.storeFor = function(getter2) {
        return new PureStore2(_this, getter2);
      };
      this.updaterFor = function(getter2) {
        return _this.storeFor(getter2).update;
      };
      this.subscribe = function(callback) {
        _this.root.callbacks.push(callback);
        return function() {
          return _this.root.callbacks.splice(_this.root.callbacks.indexOf(callback), 1);
        };
      };
      this.parent = parent;
      this.root = parent && parent.root || this;
      if (!parent)
        this.rootState = rootState;
      this.getter = function(s2) {
        return getter(parent ? parent.getter(s2) : s2);
      };
    }
    Object.defineProperty(PureStore2.prototype, "state", {
      get: function() {
        return this.getState();
      },
      enumerable: true,
      configurable: true
    });
    return PureStore2;
  }()
);
var pure_store_default = function(state) {
  return new PureStore(null, function(s2) {
    return s2;
  }, state);
};

// ../components/Table/src/store.ts
var useStore = pure_store_default({
  getStyles: void 0,
  striped: void 0,
  highlightOnHover: void 0,
  withColumnBorders: void 0,
  withRowBorders: void 0,
  captionSide: "top"
});

// ../components/Table/src/Table.components.tsx
function getDataAttributes(ctx, options) {
  if (!options) {
    return void 0;
  }
  const data = {};
  if (options.columnBorder && ctx.withColumnBorders) {
    data["data-with-column-border"] = true;
  }
  if (options.rowBorder && ctx.withRowBorders) {
    data["data-with-row-border"] = true;
  }
  if (options.striped && ctx.striped) {
    data["data-striped"] = ctx.striped;
  }
  if (options.highlightOnHover && ctx.highlightOnHover) {
    data["data-hover"] = true;
  }
  if (options.captionSide && ctx.captionSide) {
    data["data-side"] = ctx.captionSide;
  }
  return data;
}
function tableElement(element, options) {
  const name = `Table${element.charAt(0).toUpperCase()}${element.slice(1)}`;
  const Component = (0, import_core.factory)((_props, ref) => {
    const props = (0, import_core.useProps)(name, {}, _props);
    const _a = props, { classNames, className, style, styles } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles"]);
    const ctx = useStore.getState();
    return /* @__PURE__ */ import_react.default.createElement(
      import_core.Box,
      __spreadValues(__spreadValues(__spreadValues({
        component: element,
        ref
      }, getDataAttributes(ctx, options)), ctx.getStyles(element, {
        className,
        classNames,
        style,
        styles,
        props
      })), others)
    );
  });
  Component.displayName = `@raikou/core/${name}`;
  return Component;
}
var TableTh = tableElement("th", {
  columnBorder: true
});
var TableTd = tableElement("td", {
  columnBorder: true
});
var TableTr = tableElement("tr", {
  rowBorder: true,
  striped: true,
  highlightOnHover: true
});
var TableThead = tableElement("thead");
var TableTbody = tableElement("tbody");
var TableTfoot = tableElement("tfoot");
var TableCaption = tableElement("caption", {
  captionSide: true
});

// ../components/Table/src/TableDataRenderer.tsx
var import_react2 = __toESM(require("react"));
function TableDataRenderer({ data }) {
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, data.caption && /* @__PURE__ */ import_react2.default.createElement(TableCaption, null, data.caption), data.head && /* @__PURE__ */ import_react2.default.createElement(TableThead, null, /* @__PURE__ */ import_react2.default.createElement(TableTr, null, data.head.map((item, index3) => /* @__PURE__ */ import_react2.default.createElement(TableTh, { key: index3 }, item)))), data.body && /* @__PURE__ */ import_react2.default.createElement(TableTbody, null, data.body.map((row, rowIndex) => /* @__PURE__ */ import_react2.default.createElement(TableTr, { key: rowIndex }, row.map((item, index3) => /* @__PURE__ */ import_react2.default.createElement(TableTd, { key: index3 }, item))))), data.foot && /* @__PURE__ */ import_react2.default.createElement(TableTfoot, null, /* @__PURE__ */ import_react2.default.createElement(TableTr, null, data.foot.map((item, index3) => /* @__PURE__ */ import_react2.default.createElement(TableTh, { key: index3 }, item)))));
}
TableDataRenderer.displayName = "@mantine/core/TableDataRenderer";

// css-module:./Table.module.css#css-module
var Table_module_default = { "table": "m-b23fa0ef", "th": "m-4e7aa4f3", "tr": "m-4e7aa4fd", "td": "m-4e7aa4ef", "tbody": "m-b2404537", "thead": "m-b242d975", "caption": "m-9e5a3ac7", "scrollContainer": "m-a100c15", "scrollContainerInner": "m-62259741" };

// ../components/Table/src/Table.tsx
var defaultProps = {
  withRowBorders: true,
  verticalSpacing: 7
};
var varsResolver = (0, import_core2.createVarsResolver)(
  (theme, {
    layout,
    captionSide,
    horizontalSpacing,
    verticalSpacing,
    borderColor,
    stripedColor,
    highlightOnHoverColor,
    striped,
    highlightOnHover
  }) => ({
    table: {
      "--table-layout": layout,
      "--table-caption-side": captionSide,
      "--table-horizontal-spacing": (0, import_core2.getSpacing)(horizontalSpacing),
      "--table-vertical-spacing": (0, import_core2.getSpacing)(verticalSpacing),
      "--table-border-color": borderColor ? (0, import_core2.getThemeColor)(borderColor, theme) : void 0,
      "--table-striped-color": striped && stripedColor ? (0, import_core2.getThemeColor)(stripedColor, theme) : void 0,
      "--table-highlight-on-hover-color": highlightOnHover && highlightOnHoverColor ? (0, import_core2.getThemeColor)(highlightOnHoverColor, theme) : void 0
    }
  })
);
var Table = (0, import_core2.factory)((_props, ref) => {
  const props = (0, import_core2.useProps)("Table", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    horizontalSpacing,
    verticalSpacing,
    captionSide,
    stripedColor,
    highlightOnHoverColor,
    striped,
    highlightOnHover,
    withColumnBorders,
    withRowBorders,
    withTableBorder,
    borderColor,
    layout,
    variant,
    data,
    children
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "horizontalSpacing",
    "verticalSpacing",
    "captionSide",
    "stripedColor",
    "highlightOnHoverColor",
    "striped",
    "highlightOnHover",
    "withColumnBorders",
    "withRowBorders",
    "withTableBorder",
    "borderColor",
    "layout",
    "variant",
    "data",
    "children"
  ]);
  const getStyles = (0, import_core2.useStyles)({
    name: "Table",
    props,
    className,
    style,
    classes: Table_module_default,
    classNames,
    styles,
    unstyled,
    rootSelector: "table",
    vars,
    varsResolver
  });
  useStore.update((state) => {
    state.getStyles = getStyles;
    state.striped = striped === true ? "odd" : striped || void 0;
    state.highlightOnHover = highlightOnHover;
    state.withColumnBorders = withColumnBorders;
    state.withRowBorders = withRowBorders;
    state.captionSide = captionSide || "bottom";
  });
  return /* @__PURE__ */ import_react3.default.createElement(
    import_core2.Box,
    __spreadValues(__spreadValues({
      component: "table",
      variant,
      ref,
      mod: { "data-with-table-border": withTableBorder }
    }, getStyles("table")), others),
    children || !!data && /* @__PURE__ */ import_react3.default.createElement(TableDataRenderer, { data })
  );
});
Table.classes = Table_module_default;
Table.displayName = "@raikou/core/Table";
Table.Td = TableTd;
Table.Th = TableTh;
Table.Tr = TableTr;
Table.Thead = TableThead;
Table.Tbody = TableTbody;
Table.Tfoot = TableTfoot;
Table.Caption = TableCaption;
Table.DataRenderer = TableDataRenderer;

// src/DataTable.tsx
var import_hooks36 = require("@raikou/hooks");
var import_clsx19 = __toESM(require("clsx"));

// src/DataTableEmptyRow.tsx
var import_react4 = __toESM(require("react"));

// css-module:./DataTableEmptyRow.module.css#css-module
var DataTableEmptyRow_module_default = { "mantine-datatable-empty-row": "m-ddb297ee" };

// src/DataTableEmptyRow.tsx
function DataTableEmptyRow() {
  return /* @__PURE__ */ import_react4.default.createElement("tr", { className: DataTableEmptyRow_module_default["mantine-datatable-empty-row"] }, /* @__PURE__ */ import_react4.default.createElement("td", null));
}

// src/DataTableEmptyState.tsx
var import_react8 = __toESM(require("react"));

// ../components/Center/src/Center.tsx
var import_react5 = __toESM(require("react"));
var import_core3 = require("@raikou/core");

// css-module:./Center.module.css#css-module
var Center_module_default = { "root": "m-4451eb3a" };

// ../components/Center/src/Center.tsx
var defaultProps2 = {};
var Center = (0, import_core3.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core3.useProps)("Center", defaultProps2, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    inline: inline2
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "inline"
  ]);
  const getStyles = (0, import_core3.useStyles)({
    name: "Center",
    props,
    classes: Center_module_default,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars
  });
  return /* @__PURE__ */ import_react5.default.createElement(import_core3.Box, __spreadValues(__spreadValues({ ref, mod: { inline: inline2 } }, getStyles("root")), others));
});
Center.displayName = "@raikou/core/Center";
Center.classes = Center_module_default;

// ../components/Text/src/Text.tsx
var import_react6 = __toESM(require("react"));
var import_core4 = require("@raikou/core");

// css-module:./Text.module.css#css-module
var Text_module_default = { "root": "m-b6d8b162" };

// ../components/Text/src/Text.tsx
function getTextTruncate(truncate) {
  if (truncate === "start") {
    return "start";
  }
  if (truncate === "end" || truncate) {
    return "end";
  }
  return void 0;
}
var defaultProps3 = {
  inherit: false
};
var varsResolver2 = (0, import_core4.createVarsResolver)(
  (theme, { variant, lineClamp, gradient, size: size2 }) => ({
    root: {
      "--text-fz": (0, import_core4.getFontSize)(size2),
      "--text-lh": (0, import_core4.getLineHeight)(size2),
      "--text-gradient": variant === "gradient" ? (0, import_core4.getGradient)(gradient, theme) : void 0,
      "--text-line-clamp": typeof lineClamp === "number" ? lineClamp.toString() : void 0
    }
  })
);
var Text = (0, import_core4.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core4.useProps)("Text", defaultProps3, _props);
  const _a = props, {
    lineClamp,
    truncate,
    inline: inline2,
    inherit,
    gradient,
    span,
    __staticSelector,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    variant,
    mod,
    size: size2
  } = _a, others = __objRest(_a, [
    "lineClamp",
    "truncate",
    "inline",
    "inherit",
    "gradient",
    "span",
    "__staticSelector",
    "vars",
    "className",
    "style",
    "classNames",
    "styles",
    "unstyled",
    "variant",
    "mod",
    "size"
  ]);
  const getStyles = (0, import_core4.useStyles)({
    name: ["Text", __staticSelector],
    props,
    classes: Text_module_default,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver2
  });
  return /* @__PURE__ */ import_react6.default.createElement(
    import_core4.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { focusable: true })), {
      ref,
      component: span ? "span" : "p",
      variant,
      mod: [
        {
          "data-truncate": getTextTruncate(truncate),
          "data-line-clamp": typeof lineClamp === "number",
          "data-inline": inline2,
          "data-inherit": inherit
        },
        mod
      ],
      size: size2
    }), others)
  );
});
Text.classes = Text_module_default;
Text.displayName = "@raikou/core/Text";

// src/icons/IconDatabaseOff.tsx
var import_react7 = __toESM(require("react"));
function IconDatabaseOff() {
  return /* @__PURE__ */ import_react7.default.createElement(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    /* @__PURE__ */ import_react7.default.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ import_react7.default.createElement("path", { d: "M12.983 8.978c3.955 -.182 7.017 -1.446 7.017 -2.978c0 -1.657 -3.582 -3 -8 -3c-1.661 0 -3.204 .19 -4.483 .515m-2.783 1.228c-.471 .382 -.734 .808 -.734 1.257c0 1.22 1.944 2.271 4.734 2.74" }),
    /* @__PURE__ */ import_react7.default.createElement("path", { d: "M4 6v6c0 1.657 3.582 3 8 3c.986 0 1.93 -.067 2.802 -.19m3.187 -.82c1.251 -.53 2.011 -1.228 2.011 -1.99v-6" }),
    /* @__PURE__ */ import_react7.default.createElement("path", { d: "M4 12v6c0 1.657 3.582 3 8 3c3.217 0 5.991 -.712 7.261 -1.74m.739 -3.26v-4" }),
    /* @__PURE__ */ import_react7.default.createElement("path", { d: "M3 3l18 18" })
  );
}

// css-module:./DataTableEmptyState.module.css#css-module
var DataTableEmptyState_module_default = { "mantine-datatable-empty-state": "m-4d3d1c5c", "mantine-datatable-empty-state-icon": "m-d83d9b4a" };

// src/DataTableEmptyState.tsx
function DataTableEmptyState({
  icon,
  text,
  pt,
  pb,
  active,
  children
}) {
  return /* @__PURE__ */ import_react8.default.createElement(
    Center,
    {
      pt,
      pb,
      className: DataTableEmptyState_module_default["mantine-datatable-empty-state"],
      "data-active": active || void 0
    },
    children || /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, icon || /* @__PURE__ */ import_react8.default.createElement("div", { className: DataTableEmptyState_module_default["mantine-datatable-empty-state-icon"] }, /* @__PURE__ */ import_react8.default.createElement(IconDatabaseOff, null)), /* @__PURE__ */ import_react8.default.createElement(Text, { size: "sm", c: "dimmed" }, text))
  );
}

// src/DataTableFooter.tsx
var import_react16 = __toESM(require("react"));
var import_core7 = require("@raikou/core");
var import_clsx2 = __toESM(require("clsx"));

// src/DataTableFooterCell.tsx
var import_clsx = __toESM(require("clsx"));

// src/hooks/useElementOuterSize.ts
var import_hooks = require("@raikou/hooks");
function useElementOuterSize() {
  var _a;
  const [ref] = (0, import_hooks.useResizeObserver)();
  const { width, height } = ((_a = ref.current) == null ? void 0 : _a.getBoundingClientRect()) || {
    width: 0,
    height: 0
  };
  return { ref, width, height };
}

// src/hooks/useIsomorphicLayoutEffect.ts
var import_react9 = require("react");
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react9.useLayoutEffect : import_react9.useEffect;

// src/hooks/useLastSelectionChangeIndex.ts
var import_react10 = require("react");
function useLastSelectionChangeIndex(recordIds) {
  const [lastSelectionChangeIndex, setLastSelectionChangeIndex] = (0, import_react10.useState)(null);
  const recordIdsString = (recordIds == null ? void 0 : recordIds.join(":")) || "";
  (0, import_react10.useEffect)(() => {
    setLastSelectionChangeIndex(null);
  }, [recordIdsString]);
  return { lastSelectionChangeIndex, setLastSelectionChangeIndex };
}

// src/hooks/useMediaQueries.ts
var import_react11 = require("react");
function attachMediaListeners(queries, callback) {
  const callbackWrapper = () => {
    callback(queries.map((query) => query.matches));
  };
  const subscriptions = queries.map((query) => {
    try {
      query.addEventListener("change", callbackWrapper);
      return () => query.removeEventListener("change", callbackWrapper);
    } catch (e) {
      query.addListener(callbackWrapper);
      return () => query.removeListener(callbackWrapper);
    }
  });
  return () => {
    subscriptions.forEach((unsubscribe) => unsubscribe());
  };
}
function getInitialValue(queries, initialValues) {
  if (initialValues) {
    return initialValues;
  }
  if (typeof window !== "undefined" && "matchMedia" in window) {
    return queries.map((query) => window.matchMedia(query).matches);
  }
  return queries.map(() => false);
}
function useMediaQueries(queries, initialValues, { getInitialValueInEffect } = {
  getInitialValueInEffect: true
}) {
  const [matches, setMatches] = (0, import_react11.useState)(
    getInitialValueInEffect ? initialValues : getInitialValue(queries, initialValues)
  );
  const queryRef = (0, import_react11.useRef)();
  (0, import_react11.useEffect)(() => {
    if ("matchMedia" in window) {
      queryRef.current = queries.map((query) => window.matchMedia(query));
      setMatches(queryRef.current.map((queryResult) => queryResult.matches));
      return attachMediaListeners(queryRef.current, (event) => {
        setMatches(event);
      });
    }
    return void 0;
  }, [queries]);
  return matches;
}

// src/hooks/useMediaQueriesStringOrFunction.ts
var import_core5 = require("@raikou/core");
var import_react12 = require("react");
function useMediaQueriesStringOrFunction(queries) {
  const theme = import_core5.DEFAULT_THEME;
  const values = (0, import_react12.useMemo)(
    () => queries.map(
      (query) => {
        var _a;
        return (_a = typeof query === "function" ? query(theme) : query) != null ? _a : "";
      }
    ),
    [queries, theme]
  );
  const defaults = (0, import_react12.useMemo)(() => queries.map(() => true), [queries]);
  return useMediaQueries(values, defaults);
}

// src/hooks/useMediaQueryStringOrFunction.ts
var import_core6 = require("@raikou/core");
var import_hooks2 = require("@raikou/hooks");
function useMediaQueryStringOrFunction(mediaQuery) {
  const theme = import_core6.DEFAULT_THEME;
  const mediaQueryValue = typeof mediaQuery === "function" ? mediaQuery(theme) : mediaQuery;
  return (0, import_hooks2.useMediaQuery)(mediaQueryValue || "", true);
}

// src/hooks/useRowExpansion.ts
var import_react13 = require("react");

// src/utils.ts
function humanize(value) {
  const str = value.replace(/([a-z\d])([A-Z]+)/g, "$1 $2").replace(/\W|_/g, " ").trim().toLowerCase();
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}
function differenceBy(arr1, arr2, iteratee) {
  return arr1.filter((c2) => !arr2.map(iteratee).includes(iteratee(c2)));
}
function uniqBy(arr, iteratee) {
  return arr.filter((x2, i2, self) => i2 === self.findIndex((y2) => iteratee(x2) === iteratee(y2)));
}
function getValueAtPath(obj, path) {
  if (!path)
    return void 0;
  const pathArray = path.match(/([^[.\]])+/g);
  return pathArray.reduce((prevObj, key) => prevObj && prevObj[key], obj);
}
function getRecordId(record, idAccessor) {
  return typeof idAccessor === "string" ? getValueAtPath(record, idAccessor) : idAccessor(record);
}

// src/hooks/useRowExpansion.ts
function useRowExpansion({
  rowExpansion,
  records,
  idAccessor
}) {
  let initiallyExpandedRecordIds = [];
  if (rowExpansion && records) {
    const { trigger, allowMultiple, initiallyExpanded } = rowExpansion;
    if (records && trigger === "always") {
      initiallyExpandedRecordIds = records.map((r2) => getRecordId(r2, idAccessor));
    } else if (initiallyExpanded) {
      initiallyExpandedRecordIds = records.filter((record, index3) => initiallyExpanded({ record, index: index3 })).map((r2) => getRecordId(r2, idAccessor));
      if (!allowMultiple) {
        initiallyExpandedRecordIds = [initiallyExpandedRecordIds[0]];
      }
    }
  }
  let expandedRecordIds;
  let setExpandedRecordIds;
  const expandedRecordIdsState = (0, import_react13.useState)(initiallyExpandedRecordIds);
  if (rowExpansion) {
    const { trigger, allowMultiple, collapseProps, content } = rowExpansion;
    if (rowExpansion.expanded) {
      ({ recordIds: expandedRecordIds, onRecordIdsChange: setExpandedRecordIds } = rowExpansion.expanded);
    } else {
      [expandedRecordIds, setExpandedRecordIds] = expandedRecordIdsState;
    }
    const collapseRow = (record) => setExpandedRecordIds == null ? void 0 : setExpandedRecordIds(expandedRecordIds.filter((id) => id !== getRecordId(record, idAccessor)));
    return {
      expandOnClick: trigger !== "always" && trigger !== "never",
      isRowExpanded: (record) => trigger === "always" ? true : expandedRecordIds.includes(getRecordId(record, idAccessor)),
      expandRow: (record) => {
        const recordId = getRecordId(record, idAccessor);
        setExpandedRecordIds == null ? void 0 : setExpandedRecordIds(allowMultiple ? [...expandedRecordIds, recordId] : [recordId]);
      },
      collapseRow,
      collapseProps,
      content: ({ record, index: index3 }) => () => content({ record, index: index3, collapse: () => collapseRow(record) })
    };
  }
}

// src/hooks/useRowExpansionStatus.ts
var import_hooks3 = require("@raikou/hooks");
var import_react14 = require("react");
function useRowExpansionStatus(open, transitionDuration) {
  const [expanded, setExpanded] = (0, import_react14.useState)(open);
  const [visible, setVisible] = (0, import_react14.useState)(open);
  const expand = (0, import_hooks3.useTimeout)(() => setExpanded(true), 0);
  const hide2 = (0, import_hooks3.useTimeout)(() => setVisible(false), transitionDuration || 200);
  (0, import_react14.useEffect)(() => {
    if (open) {
      hide2.clear();
      setVisible(true);
      expand.start();
    } else {
      expand.clear();
      setExpanded(false);
      hide2.start();
    }
  }, [expand, hide2, open]);
  return { expanded, visible };
}

// src/utilityClasses.ts
var NOWRAP = "utilityClasses_mantine-datatable-nowrap";
var ELLIPSIS = "utilityClasses_mantine-datatable-ellipsis";
var POINTER_CURSOR = "utilityClasses_mantine-datatable-pointer-cursor";
var TEXT_SELECTION_DISABLED = "utilityClasses_mantine-datatable-text-selection-disabled";
var TEXT_ALIGN_LEFT = "utilityClasses_mantine-datatable-text-align-left";
var TEXT_ALIGN_CENTER = "utilityClasses_mantine-datatable-text-align-center";
var TEXT_ALIGN_RIGHT = "utilityClasses_mantine-datatable-text-align-right";

// src/DataTableFooterCell.tsx
function DataTableFooterCell({
  className,
  style,
  visibleMediaQuery,
  title,
  noWrap,
  ellipsis,
  textAlign,
  width
}) {
  if (!useMediaQueryStringOrFunction(visibleMediaQuery))
    return null;
  return /* @__PURE__ */ React.createElement(
    TableTh,
    {
      className: (0, import_clsx.default)(
        {
          [NOWRAP]: noWrap || ellipsis,
          [ELLIPSIS]: ellipsis,
          [TEXT_ALIGN_LEFT]: textAlign === "left",
          [TEXT_ALIGN_CENTER]: textAlign === "center",
          [TEXT_ALIGN_RIGHT]: textAlign === "right"
        },
        className
      ),
      style: [
        {
          width,
          minWidth: width,
          maxWidth: width
        },
        style
      ]
    },
    title
  );
}

// src/DataTableFooterSelectorPlaceholderCell.tsx
var import_react15 = __toESM(require("react"));

// css-module:./DataTableFooterSelectorPlaceholderCell.module.css#css-module
var DataTableFooterSelectorPlaceholderCell_module_default = { "mantine-datatable-footer-selector-placeholder-cell": "m-f06ba0fe" };

// src/DataTableFooterSelectorPlaceholderCell.tsx
function DataTableFooterSelectorPlaceholderCell({
  shadowVisible
}) {
  return /* @__PURE__ */ import_react15.default.createElement(
    TableTh,
    {
      className: DataTableFooterSelectorPlaceholderCell_module_default["mantine-datatable-footer-selector-placeholder-cell"],
      "data-shadow-visible": shadowVisible || void 0
    }
  );
}

// css-module:./DataTableFooter.module.css#css-module
var DataTableFooter_module_default = { "mantine-datatable-footer": "m-43dc25f9" };

// src/DataTableFooter.tsx
var DataTableFooter = (0, import_react16.forwardRef)(function DataTableFooter2({
  className,
  style,
  columns,
  defaultColumnProps,
  selectionVisible,
  selectorCellShadowVisible,
  scrollDiff
}, ref) {
  const relative = scrollDiff < 0;
  return /* @__PURE__ */ import_react16.default.createElement(
    TableTfoot,
    {
      ref,
      className: (0, import_clsx2.default)(DataTableFooter_module_default["mantine-datatable-footer"], className),
      style: [
        {
          position: relative ? "relative" : "sticky",
          bottom: (0, import_core7.rem)(relative ? scrollDiff : 0)
        },
        style
      ]
    },
    /* @__PURE__ */ import_react16.default.createElement(TableTr, null, selectionVisible && /* @__PURE__ */ import_react16.default.createElement(
      DataTableFooterSelectorPlaceholderCell,
      {
        shadowVisible: selectorCellShadowVisible
      }
    ), columns.map((_a) => {
      var _b = _a, { hidden } = _b, columnProps = __objRest(_b, ["hidden"]);
      if (hidden)
        return null;
      const {
        accessor,
        visibleMediaQuery,
        textAlign,
        width,
        footer,
        footerClassName,
        footerStyle,
        noWrap,
        ellipsis
      } = __spreadValues(__spreadValues({}, defaultColumnProps), columnProps);
      return /* @__PURE__ */ import_react16.default.createElement(
        DataTableFooterCell,
        {
          key: accessor,
          className: footerClassName,
          style: footerStyle,
          visibleMediaQuery,
          textAlign,
          width,
          title: footer,
          noWrap,
          ellipsis
        }
      );
    }))
  );
});

// src/DataTableHeader.tsx
var import_react66 = __toESM(require("react"));
var import_clsx11 = __toESM(require("clsx"));

// src/DataTableColumnGroupHeaderCell.tsx
var import_react17 = __toESM(require("react"));
var import_clsx3 = __toESM(require("clsx"));

// css-module:./DataTable.module.css#css-module
var DataTable_module_default = { "mantine-datatable": "m-df0af934", "mantine-datatable-with-border": "m-a324bffa", "mantine-datatable-table": "m-f14a91f5", "mantine-datatable-vertical-align-top": "m-4c48d22f", "mantine-datatable-vertical-align-bottom": "m-2f8fa311", "mantine-datatable-last-row-border-bottom-visible": "m-a69aca20", "mantine-datatable-empty-row": "m-67103001", "mantine-datatable-pin-last-column": "m-a067d39c", "mantine-datatable-column-group-header-cell": "m-fd09d616", "mantine-datatable-row-expansion-cell": "m-752de33c", "mantine-datatable-pin-last-column-scrolled": "m-4085733d" };

// src/DataTableColumnGroupHeaderCell.tsx
function DataTableColumnGroupHeaderCell({
  group: { id, columns, title, textAlign, className, style }
}) {
  const queries = (0, import_react17.useMemo)(
    () => columns.map(({ visibleMediaQuery }) => visibleMediaQuery),
    [columns]
  );
  const visibles = useMediaQueriesStringOrFunction(queries);
  const colSpan = (0, import_react17.useMemo)(
    () => columns.filter(({ hidden }, i2) => !hidden && (visibles == null ? void 0 : visibles[i2])).length,
    [columns, visibles]
  );
  return colSpan > 0 ? /* @__PURE__ */ import_react17.default.createElement(
    TableTh,
    {
      colSpan,
      className: (0, import_clsx3.default)(
        DataTable_module_default["mantine-datatable-column-group-header-cell"],
        {
          [TEXT_ALIGN_LEFT]: textAlign === "left",
          [TEXT_ALIGN_CENTER]: textAlign === "center",
          [TEXT_ALIGN_RIGHT]: textAlign === "right"
        },
        className
      ),
      style
    },
    title != null ? title : humanize(id)
  ) : null;
}

// src/DataTableHeaderCell.tsx
var import_react52 = __toESM(require("react"));
var import_core28 = require("@raikou/core");

// ../components/Group/src/Group.tsx
var import_react19 = __toESM(require("react"));
var import_core8 = require("@raikou/core");

// ../components/Group/src/filter-falsy-children/filter-falsy-children.ts
var import_react18 = require("react");
function filterFalsyChildren(children) {
  return import_react18.Children.toArray(children).filter(Boolean);
}

// css-module:./Group.module.css#css-module
var Group_module_default = { "root": "m-4081bf90" };

// ../components/Group/src/Group.tsx
var defaultProps4 = {
  preventGrowOverflow: true,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
};
var varsResolver3 = (0, import_core8.createVarsResolver)(
  (_2, { grow, preventGrowOverflow, gap, align, justify, wrap }, { childWidth }) => ({
    root: {
      "--group-child-width": grow && preventGrowOverflow ? childWidth : void 0,
      "--group-gap": (0, import_core8.getSpacing)(gap),
      "--group-align": align,
      "--group-justify": justify,
      "--group-wrap": wrap
    }
  })
);
var Group = (0, import_core8.factory)((_props, ref) => {
  const props = (0, import_core8.useProps)("Group", defaultProps4, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    children,
    gap,
    align,
    justify,
    wrap,
    grow,
    preventGrowOverflow,
    vars,
    variant,
    __size
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "children",
    "gap",
    "align",
    "justify",
    "wrap",
    "grow",
    "preventGrowOverflow",
    "vars",
    "variant",
    "__size"
  ]);
  const filteredChildren = filterFalsyChildren(children);
  const childrenCount = filteredChildren.length;
  const resolvedGap = (0, import_core8.getSpacing)(gap != null ? gap : "md");
  const childWidth = `calc(${100 / childrenCount}% - (${resolvedGap} - ${resolvedGap} / ${childrenCount}))`;
  const stylesCtx = { childWidth };
  const getStyles = (0, import_core8.useStyles)({
    name: "Group",
    props,
    stylesCtx,
    className,
    style,
    classes: Group_module_default,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver3
  });
  return /* @__PURE__ */ import_react19.default.createElement(
    import_core8.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      ref,
      variant,
      mod: { grow },
      size: __size
    }), others),
    filteredChildren
  );
});
Group.displayName = "@raikou/core/Group";
Group.classes = Group_module_default;

// src/DataTableHeaderCell.tsx
var import_clsx9 = __toESM(require("clsx"));

// src/DataTableHeaderCellFilter.tsx
var import_react49 = __toESM(require("react"));

// ../components/ActionIcon/src/ActionIcon.tsx
var import_react27 = __toESM(require("react"));
var import_core16 = require("@raikou/core");

// ../components/UnstyledButton/src/UnstyledButton.tsx
var import_react20 = __toESM(require("react"));
var import_core9 = require("@raikou/core");

// css-module:./UnstyledButton.module.css#css-module
var UnstyledButton_module_default = { "root": "m-87cf2631" };

// ../components/UnstyledButton/src/UnstyledButton.tsx
var defaultProps5 = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = (0, import_core9.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core9.useProps)("UnstyledButton", defaultProps5, _props);
    const _a = props, {
      className,
      component = "button",
      __staticSelector,
      unstyled,
      classNames,
      styles,
      style
    } = _a, others = __objRest(_a, [
      "className",
      "component",
      "__staticSelector",
      "unstyled",
      "classNames",
      "styles",
      "style"
    ]);
    const getStyles = (0, import_core9.useStyles)({
      name: __staticSelector,
      props,
      classes: UnstyledButton_module_default,
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ import_react20.default.createElement(
      import_core9.Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { focusable: true })), {
        component,
        ref,
        type: component === "button" ? "button" : void 0
      }), others)
    );
  }
);
UnstyledButton.displayName = "@raikou/core/UnstyledButton";
UnstyledButton.classes = UnstyledButton_module_default;

// ../components/Loader/src/Loader.tsx
var import_react25 = __toESM(require("react"));
var import_core14 = require("@raikou/core");

// ../components/Loader/src/loaders/Bars.tsx
var import_react21 = __toESM(require("react"));
var import_clsx4 = __toESM(require("clsx"));
var import_core10 = require("@raikou/core");

// css-module:../Loader.module.css#css-module
var Loader_module_default = { "root": "m-5ae2e3c", "barsLoader": "m-7a2bd4cd", "bar": "m-870bb79", "bars-loader-animation": "m-5d2b3b9d", "dotsLoader": "m-4e3f22d7", "dot": "m-870c4af", "loader-dots-animation": "m-aac34a1", "ovalLoader": "m-b34414df", "oval-loader-animation": "m-f8e89c4b", "progressLoader": "m-f7590d7a" };

// ../components/Loader/src/loaders/Bars.tsx
var Bars = (0, import_react21.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react21.default.createElement(
      import_core10.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: (0, import_clsx4.default)(Loader_module_default.barsLoader, className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react21.default.createElement("span", { className: Loader_module_default.bar }),
      /* @__PURE__ */ import_react21.default.createElement("span", { className: Loader_module_default.bar }),
      /* @__PURE__ */ import_react21.default.createElement("span", { className: Loader_module_default.bar })
    );
  }
);

// ../components/Loader/src/loaders/Oval.tsx
var import_react22 = __toESM(require("react"));
var import_clsx5 = __toESM(require("clsx"));
var import_core11 = require("@raikou/core");
var Oval = (0, import_react22.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react22.default.createElement(
      import_core11.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: (0, import_clsx5.default)(Loader_module_default.ovalLoader, className)
      }, others), {
        ref
      })
    );
  }
);

// ../components/Loader/src/loaders/Progress.tsx
var import_react23 = __toESM(require("react"));
var import_clsx6 = __toESM(require("clsx"));
var import_core12 = require("@raikou/core");
var Progress = (0, import_react23.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react23.default.createElement(
      import_core12.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: (0, import_clsx6.default)(Loader_module_default.progressLoader, className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react23.default.createElement("svg", { viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ import_react23.default.createElement("g", { fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ import_react23.default.createElement("g", { transform: "translate(2.5 2.5)", strokeWidth: "5" }, /* @__PURE__ */ import_react23.default.createElement("circle", { strokeOpacity: ".5", cx: "16", cy: "16", r: "16" }), /* @__PURE__ */ import_react23.default.createElement("path", { d: "M32 16c0-9.94-8.06-16-16-16" }, /* @__PURE__ */ import_react23.default.createElement(
        "animateTransform",
        {
          attributeName: "transform",
          type: "rotate",
          from: "0 16 16",
          to: "360 16 16",
          dur: "1s",
          repeatCount: "indefinite"
        }
      )))))
    );
  }
);

// ../components/Loader/src/loaders/Dots.tsx
var import_react24 = __toESM(require("react"));
var import_clsx7 = __toESM(require("clsx"));
var import_core13 = require("@raikou/core");
var Dots = (0, import_react24.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react24.default.createElement(
      import_core13.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: (0, import_clsx7.default)(Loader_module_default.dotsLoader, className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react24.default.createElement("span", { className: Loader_module_default.dot }),
      /* @__PURE__ */ import_react24.default.createElement("span", { className: Loader_module_default.dot }),
      /* @__PURE__ */ import_react24.default.createElement("span", { className: Loader_module_default.dot })
    );
  }
);

// css-module:./Loader.module.css#css-module
var Loader_module_default2 = { "root": "m-5ae2e3c", "barsLoader": "m-7a2bd4cd", "bar": "m-870bb79", "bars-loader-animation": "m-5d2b3b9d", "dotsLoader": "m-4e3f22d7", "dot": "m-870c4af", "loader-dots-animation": "m-aac34a1", "ovalLoader": "m-b34414df", "oval-loader-animation": "m-f8e89c4b", "progressLoader": "m-f7590d7a" };

// ../components/Loader/src/Loader.tsx
var defaultLoaders = {
  bars: Bars,
  oval: Oval,
  dots: Dots,
  progress: Progress
};
var defaultProps6 = {
  loaders: defaultLoaders,
  type: "oval"
};
var varsResolver4 = (0, import_core14.createVarsResolver)(
  (theme, { size: size2, color }) => ({
    root: {
      "--loader-size": (0, import_core14.getSize)(size2, "loader-size"),
      "--loader-color": color ? (0, import_core14.getThemeColor)(color, theme) : void 0
    }
  })
);
var Loader = (0, import_core14.factory)((_props, ref) => {
  const props = (0, import_core14.useProps)("Loader", defaultProps6, _props);
  const _a = props, {
    size: size2,
    color,
    type,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    loaders,
    variant
  } = _a, others = __objRest(_a, [
    "size",
    "color",
    "type",
    "vars",
    "className",
    "style",
    "classNames",
    "styles",
    "unstyled",
    "loaders",
    "variant"
  ]);
  const getStyles = (0, import_core14.useStyles)({
    name: "Loader",
    props,
    classes: Loader_module_default2,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver4
  });
  return /* @__PURE__ */ import_react25.default.createElement(
    import_core14.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      ref,
      component: loaders[type],
      variant,
      size: size2
    }), others)
  );
});
Loader.displayName = "@raikou/core/Loader";
Loader.classes = Loader_module_default2;

// ../components/ActionIcon/src/ActionIconGroup/ActionIconGroup.tsx
var import_react26 = __toESM(require("react"));
var import_core15 = require("@raikou/core");

// css-module:../ActionIcon.module.css#css-module
var ActionIcon_module_default = { "root": "m-8d3f4000", "loader": "m-302b9fb1", "group": "m-1a0f1b21" };

// ../components/ActionIcon/src/ActionIconGroup/ActionIconGroup.tsx
var defaultProps7 = {
  orientation: "horizontal"
};
var varsResolver5 = (0, import_core15.createVarsResolver)(
  (_2, { borderWidth }) => ({
    group: { "--ai-border-width": (0, import_core15.rem)(borderWidth) }
  })
);
var ActionIconGroup = (0, import_core15.factory)(
  (_props, ref) => {
    const props = (0, import_core15.useProps)("ActionIconGroup", defaultProps7, _props);
    const _a = (0, import_core15.useProps)("ActionIconGroup", defaultProps7, _props), {
      className,
      style,
      classNames,
      styles,
      unstyled,
      orientation,
      vars,
      borderWidth,
      variant
    } = _a, others = __objRest(_a, [
      "className",
      "style",
      "classNames",
      "styles",
      "unstyled",
      "orientation",
      "vars",
      "borderWidth",
      "variant"
    ]);
    const getStyles = (0, import_core15.useStyles)({
      name: "ActionIconGroup",
      props,
      classes: ActionIcon_module_default,
      className,
      style,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver5,
      rootSelector: "group"
    });
    return /* @__PURE__ */ import_react26.default.createElement(
      import_core15.Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("group")), {
        ref,
        variant,
        mod: { "data-orientation": orientation },
        role: "group"
      }), others)
    );
  }
);
ActionIconGroup.classes = ActionIcon_module_default;
ActionIconGroup.displayName = "@raikou/core/ActionIconGroup";

// css-module:./ActionIcon.module.css#css-module
var ActionIcon_module_default2 = { "root": "m-8d3f4000", "loader": "m-302b9fb1", "group": "m-1a0f1b21" };

// ../components/ActionIcon/src/ActionIcon.tsx
var defaultProps8 = {};
var varsResolver6 = (0, import_core16.createVarsResolver)(
  (theme, { size: size2, radius, variant, gradient, color }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled"
    });
    return {
      root: {
        "--ai-size": (0, import_core16.getSize)(size2, "ai-size"),
        "--ai-radius": radius === void 0 ? void 0 : (0, import_core16.getRadius)(radius),
        "--ai-bg": color || variant ? colors.background : void 0,
        "--ai-hover": color || variant ? colors.hover : void 0,
        "--ai-color": color || variant ? colors.color : void 0,
        "--ai-bd": color || variant ? colors.border : void 0
      }
    };
  }
);
var ActionIcon = (0, import_core16.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core16.useProps)("ActionIcon", defaultProps8, _props);
    const _a = props, {
      className,
      unstyled,
      variant,
      classNames,
      styles,
      style,
      loading,
      loaderProps,
      size: size2,
      color,
      radius,
      __staticSelector,
      gradient,
      vars,
      children,
      disabled,
      "data-disabled": dataDisabled
    } = _a, others = __objRest(_a, [
      "className",
      "unstyled",
      "variant",
      "classNames",
      "styles",
      "style",
      "loading",
      "loaderProps",
      "size",
      "color",
      "radius",
      "__staticSelector",
      "gradient",
      "vars",
      "children",
      "disabled",
      "data-disabled"
    ]);
    const getStyles = (0, import_core16.useStyles)({
      name: ["ActionIcon", __staticSelector],
      props,
      className,
      style,
      classes: ActionIcon_module_default2,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver6
    });
    return /* @__PURE__ */ import_react27.default.createElement(
      UnstyledButton,
      __spreadProps(__spreadValues(__spreadValues({}, getStyles("root", {
        active: !disabled && !loading && !dataDisabled
      })), others), {
        unstyled,
        variant,
        size: size2,
        disabled: disabled || loading,
        ref,
        mod: { loading, disabled: disabled || dataDisabled }
      }),
      loading ? /* @__PURE__ */ import_react27.default.createElement(
        Loader,
        __spreadValues(__spreadProps(__spreadValues({}, getStyles("loader")), {
          color: "var(--ai-color)",
          size: "calc(var(--ai-size) * 0.55)"
        }), loaderProps)
      ) : children
    );
  }
);
ActionIcon.displayName = "@raikou/core/ActionIcon";
ActionIcon.Group = ActionIconGroup;
ActionIcon.classes = ActionIcon_module_default2;

// ../components/Popover/src/Popover.tsx
var import_react46 = __toESM(require("react"));
var import_hooks13 = require("@raikou/hooks");
var import_core27 = require("@raikou/core");

// ../components/Floating/src/use-delayed-hover.ts
var import_react28 = require("react");
function useDelayedHover({
  open,
  close,
  openDelay,
  closeDelay
}) {
  const openTimeout = (0, import_react28.useRef)(-1);
  const closeTimeout = (0, import_react28.useRef)(-1);
  const clearTimeouts = () => {
    window.clearTimeout(openTimeout.current);
    window.clearTimeout(closeTimeout.current);
  };
  const openDropdown = () => {
    clearTimeouts();
    if (openDelay === 0) {
      open();
    } else {
      openTimeout.current = window.setTimeout(open, openDelay);
    }
  };
  const closeDropdown = () => {
    clearTimeouts();
    if (closeDelay === 0) {
      close();
    } else {
      closeTimeout.current = window.setTimeout(close, closeDelay);
    }
  };
  (0, import_react28.useEffect)(() => clearTimeouts, []);
  return { openDropdown, closeDropdown };
}

// ../components/Floating/src/use-floating-auto-update.ts
var import_react31 = require("react");

// ../../../node_modules/.pnpm/@floating-ui+core@1.3.1/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getLengthFromAxis(axis) {
  return axis === "y" ? "height" : "width";
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "x" : "y";
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === "x";
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = (reference, floating, config) => __async(void 0, null, function* () {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = yield platform2.isRTL == null ? void 0 : platform2.isRTL(floating);
  let rects = yield platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x: x2,
    y: y2
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i2 = 0; i2 < validMiddleware.length; i2++) {
    const {
      name,
      fn: fn2
    } = validMiddleware[i2];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = yield fn2({
      x: x2,
      y: y2,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x2 = nextX != null ? nextX : x2;
    y2 = nextY != null ? nextY : y2;
    middlewareData = __spreadProps(__spreadValues({}, middlewareData), {
      [name]: __spreadValues(__spreadValues({}, middlewareData[name]), data)
    });
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? yield platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x: x2,
          y: y2
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i2 = -1;
      continue;
    }
  }
  return {
    x: x2,
    y: y2,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
});
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function expandPaddingObject(padding) {
  return __spreadValues({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, padding);
}
function getSideObjectFromPadding(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return __spreadProps(__spreadValues({}, rect), {
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function detectOverflow(state, options) {
  return __async(this, null, function* () {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x: x2,
      y: y2,
      platform: platform2,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = "clippingAncestors",
      rootBoundary = "viewport",
      elementContext = "floating",
      altBoundary = false,
      padding = 0
    } = evaluate(options, state);
    const paddingObject = getSideObjectFromPadding(padding);
    const altContext = elementContext === "floating" ? "reference" : "floating";
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(yield platform2.getClippingRect({
      element: ((_await$platform$isEle = yield platform2.isElement == null ? void 0 : platform2.isElement(element)) != null ? _await$platform$isEle : true) ? element : element.contextElement || (yield platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === "floating" ? __spreadProps(__spreadValues({}, rects.floating), {
      x: x2,
      y: y2
    }) : rects.reference;
    const offsetParent = yield platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating);
    const offsetScale = (yield platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? (yield platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? yield platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  });
}
var min = Math.min;
var max = Math.max;
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
var arrow = (options) => ({
  name: "arrow",
  options,
  fn(state) {
    return __async(this, null, function* () {
      const {
        x: x2,
        y: y2,
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        element,
        padding = 0
      } = evaluate(options, state) || {};
      if (element == null) {
        return {};
      }
      const paddingObject = getSideObjectFromPadding(padding);
      const coords = {
        x: x2,
        y: y2
      };
      const axis = getMainAxisFromPlacement(placement);
      const length = getLengthFromAxis(axis);
      const arrowDimensions = yield platform2.getDimensions(element);
      const isYAxis = axis === "y";
      const minProp = isYAxis ? "top" : "left";
      const maxProp = isYAxis ? "bottom" : "right";
      const clientProp = isYAxis ? "clientHeight" : "clientWidth";
      const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
      const startDiff = coords[axis] - rects.reference[axis];
      const arrowOffsetParent = yield platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element);
      let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
      if (!clientSize || !(yield platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
        clientSize = elements.floating[clientProp] || rects.floating[length];
      }
      const centerToReference = endDiff / 2 - startDiff / 2;
      const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
      const minPadding = min(paddingObject[minProp], largestPossiblePadding);
      const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
      const min$1 = minPadding;
      const max3 = clientSize - arrowDimensions[length] - maxPadding;
      const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
      const offset2 = within(min$1, center, max3);
      const shouldAddOffset = getAlignment(placement) != null && center != offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
      const alignmentOffset = shouldAddOffset ? center < min$1 ? min$1 - center : max3 - center : 0;
      return {
        [axis]: coords[axis] - alignmentOffset,
        data: {
          [axis]: offset2,
          centerOffset: center - offset2 + alignmentOffset
        }
      };
    });
  }
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    fn(state) {
      return __async(this, null, function* () {
        var _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform: platform2,
          elements
        } = state;
        const _a2 = evaluate(options, state), {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = "bestFit",
          fallbackAxisSideDirection = "none",
          flipAlignment = true
        } = _a2, detectOverflowOptions = __objRest(_a2, [
          "mainAxis",
          "crossAxis",
          "fallbackPlacements",
          "fallbackStrategy",
          "fallbackAxisSideDirection",
          "flipAlignment"
        ]);
        const side = getSide(placement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = yield platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating);
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements = [initialPlacement, ...fallbackPlacements];
        const overflow = yield detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const {
            main,
            cross
          } = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[main], overflow[cross]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];
        if (!overflows.every((side2) => side2 <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements[nextIndex];
          if (nextPlacement) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
          let resetPlacement = (_overflowsData$filter = overflowsData.filter((d2) => d2.overflows[0] <= 0).sort((a2, b2) => a2.overflows[1] - b2.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case "bestFit": {
                var _overflowsData$map$so;
                const placement2 = (_overflowsData$map$so = overflowsData.map((d2) => [d2.placement, d2.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a2, b2) => a2[1] - b2[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement2) {
                  resetPlacement = placement2;
                }
                break;
              }
              case "initialPlacement":
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      });
    }
  };
};
function getBoundingRect(rects) {
  const minX = min(...rects.map((rect) => rect.left));
  const minY = min(...rects.map((rect) => rect.top));
  const maxX = max(...rects.map((rect) => rect.right));
  const maxY = max(...rects.map((rect) => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a2, b2) => a2.y - b2.y);
  const groups = [];
  let prevRect = null;
  for (let i2 = 0; i2 < sortedRects.length; i2++) {
    const rect = sortedRects[i2];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map((rect) => rectToClientRect(getBoundingRect(rect)));
}
var inline = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "inline",
    options,
    fn(state) {
      return __async(this, null, function* () {
        const {
          placement,
          elements,
          rects,
          platform: platform2,
          strategy
        } = state;
        const {
          padding = 2,
          x: x2,
          y: y2
        } = evaluate(options, state);
        const nativeClientRects = Array.from((yield platform2.getClientRects == null ? void 0 : platform2.getClientRects(elements.reference)) || []);
        const clientRects = getRectsByLine(nativeClientRects);
        const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
        const paddingObject = getSideObjectFromPadding(padding);
        function getBoundingClientRect2() {
          if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x2 != null && y2 != null) {
            return clientRects.find((rect) => x2 > rect.left - paddingObject.left && x2 < rect.right + paddingObject.right && y2 > rect.top - paddingObject.top && y2 < rect.bottom + paddingObject.bottom) || fallback;
          }
          if (clientRects.length >= 2) {
            if (getMainAxisFromPlacement(placement) === "x") {
              const firstRect = clientRects[0];
              const lastRect = clientRects[clientRects.length - 1];
              const isTop = getSide(placement) === "top";
              const top2 = firstRect.top;
              const bottom2 = lastRect.bottom;
              const left2 = isTop ? firstRect.left : lastRect.left;
              const right2 = isTop ? firstRect.right : lastRect.right;
              const width2 = right2 - left2;
              const height2 = bottom2 - top2;
              return {
                top: top2,
                bottom: bottom2,
                left: left2,
                right: right2,
                width: width2,
                height: height2,
                x: left2,
                y: top2
              };
            }
            const isLeftSide = getSide(placement) === "left";
            const maxRight = max(...clientRects.map((rect) => rect.right));
            const minLeft = min(...clientRects.map((rect) => rect.left));
            const measureRects = clientRects.filter((rect) => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
            const top = measureRects[0].top;
            const bottom = measureRects[measureRects.length - 1].bottom;
            const left = minLeft;
            const right = maxRight;
            const width = right - left;
            const height = bottom - top;
            return {
              top,
              bottom,
              left,
              right,
              width,
              height,
              x: left,
              y: top
            };
          }
          return fallback;
        }
        const resetRects = yield platform2.getElementRects({
          reference: {
            getBoundingClientRect: getBoundingClientRect2
          },
          floating: elements.floating,
          strategy
        });
        if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
          return {
            reset: {
              rects: resetRects
            }
          };
        }
        return {};
      });
    }
  };
};
function convertValueToCoords(state, options) {
  return __async(this, null, function* () {
    const {
      placement,
      platform: platform2,
      elements
    } = state;
    const rtl = yield platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating);
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getMainAxisFromPlacement(placement) === "x";
    const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === "number" ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : __spreadValues({
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: null
    }, rawValue);
    if (alignment && typeof alignmentAxis === "number") {
      crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  });
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    fn(state) {
      return __async(this, null, function* () {
        const {
          x: x2,
          y: y2
        } = state;
        const diffCoords = yield convertValueToCoords(state, options);
        return {
          x: x2 + diffCoords.x,
          y: y2 + diffCoords.y,
          data: diffCoords
        };
      });
    }
  };
};
function getCrossAxis(axis) {
  return axis === "x" ? "y" : "x";
}
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    fn(state) {
      return __async(this, null, function* () {
        const {
          x: x2,
          y: y2,
          placement
        } = state;
        const _a2 = evaluate(options, state), {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: (_ref) => {
              let {
                x: x3,
                y: y3
              } = _ref;
              return {
                x: x3,
                y: y3
              };
            }
          }
        } = _a2, detectOverflowOptions = __objRest(_a2, [
          "mainAxis",
          "crossAxis",
          "limiter"
        ]);
        const coords = {
          x: x2,
          y: y2
        };
        const overflow = yield detectOverflow(state, detectOverflowOptions);
        const mainAxis = getMainAxisFromPlacement(getSide(placement));
        const crossAxis = getCrossAxis(mainAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === "y" ? "top" : "left";
          const maxSide = mainAxis === "y" ? "bottom" : "right";
          const min3 = mainAxisCoord + overflow[minSide];
          const max3 = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = within(min3, mainAxisCoord, max3);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === "y" ? "top" : "left";
          const maxSide = crossAxis === "y" ? "bottom" : "right";
          const min3 = crossAxisCoord + overflow[minSide];
          const max3 = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = within(min3, crossAxisCoord, max3);
        }
        const limitedCoords = limiter.fn(__spreadProps(__spreadValues({}, state), {
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        }));
        return __spreadProps(__spreadValues({}, limitedCoords), {
          data: {
            x: limitedCoords.x - x2,
            y: limitedCoords.y - y2
          }
        });
      });
    }
  };
};
var limitShift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x: x2,
        y: y2,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x: x2,
        y: y2
      };
      const mainAxis = getMainAxisFromPlacement(placement);
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset2, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : __spreadValues({
        mainAxis: 0,
        crossAxis: 0
      }, rawOffset);
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = ["top", "left"].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    fn(state) {
      return __async(this, null, function* () {
        const {
          placement,
          rects,
          platform: platform2,
          elements
        } = state;
        const _a2 = evaluate(options, state), {
          apply = () => {
          }
        } = _a2, detectOverflowOptions = __objRest(_a2, [
          "apply"
        ]);
        const overflow = yield detectOverflow(state, detectOverflowOptions);
        const side = getSide(placement);
        const alignment = getAlignment(placement);
        const axis = getMainAxisFromPlacement(placement);
        const isXAxis = axis === "x";
        const {
          width,
          height
        } = rects.floating;
        let heightSide;
        let widthSide;
        if (side === "top" || side === "bottom") {
          heightSide = side;
          widthSide = alignment === ((yield platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
        } else {
          widthSide = side;
          heightSide = alignment === "end" ? "top" : "bottom";
        }
        const overflowAvailableHeight = height - overflow[heightSide];
        const overflowAvailableWidth = width - overflow[widthSide];
        const noShift = !state.middlewareData.shift;
        let availableHeight = overflowAvailableHeight;
        let availableWidth = overflowAvailableWidth;
        if (isXAxis) {
          const maximumClippingWidth = width - overflow.left - overflow.right;
          availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
        } else {
          const maximumClippingHeight = height - overflow.top - overflow.bottom;
          availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
        }
        if (noShift && !alignment) {
          const xMin = max(overflow.left, 0);
          const xMax = max(overflow.right, 0);
          const yMin = max(overflow.top, 0);
          const yMax = max(overflow.bottom, 0);
          if (isXAxis) {
            availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
          } else {
            availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
          }
        }
        yield apply(__spreadProps(__spreadValues({}, state), {
          availableWidth,
          availableHeight
        }));
        const nextDimensions = yield platform2.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true
            }
          };
        }
        return {};
      });
    }
  };
};

// ../../../node_modules/.pnpm/@floating-ui+dom@1.4.5/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return node instanceof getWindow(node).ShadowRoot || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const safari = isSafari();
  const css = getComputedStyle$1(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !safari && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !safari && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function isSafari() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
var min2 = Math.min;
var max2 = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v2) => ({
  x: v2,
  y: v2
});
function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x2 = ($ ? round(rect.width) : rect.width) / width;
  let y2 = ($ ? round(rect.height) : rect.height) / height;
  if (!x2 || !Number.isFinite(x2)) {
    x2 = 1;
  }
  if (!y2 || !Number.isFinite(y2)) {
    y2 = 1;
  }
  return {
    x: x2,
    y: y2
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isSafari() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x2 = (clientRect.left + visualOffsets.x) / scale.x;
  let y2 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x2 *= iframeScale.x;
      y2 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x2 += left;
      y2 += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x2,
    y: y2
  });
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max2(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max2(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x2 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y2 = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x2 += max2(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x2 = 0;
  let y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isSafari();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x2 = left * scale.x;
  const y2 = top * scale.y;
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = __spreadProps(__spreadValues({}, clippingAncestor), {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    });
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max2(rect.top, accRect.top);
    accRect.right = min2(rect.right, accRect.right);
    accRect.bottom = min2(rect.bottom, accRect.bottom);
    accRect.left = max2(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  return getCssDimensions(element);
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  if (!isHTMLElement(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
var getElementRects = function(_ref) {
  return __async(this, null, function* () {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, yield getOffsetParentFn(floating), strategy),
      floating: __spreadValues({
        x: 0,
        y: 0
      }, yield getDimensionsFn(floating))
    };
  });
};
function isRTL(element) {
  return getComputedStyle(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    clearTimeout(timeoutId);
    io && io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max2(0, min2(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, __spreadProps(__spreadValues({}, options), {
        // Handle <iframe>s
        root: root.ownerDocument
      }));
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          resizeObserver && resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo && cleanupIo();
    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = __spreadValues({
    platform
  }, options);
  const platformWithCache = __spreadProps(__spreadValues({}, mergedOptions.platform), {
    _c: cache
  });
  return computePosition(reference, floating, __spreadProps(__spreadValues({}, mergedOptions), {
    platform: platformWithCache
  }));
};

// ../../../node_modules/.pnpm/@floating-ui+react-dom@1.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js
var React22 = __toESM(require("react"));
var import_react29 = require("react");
var ReactDOM = __toESM(require("react-dom"));
var arrow2 = (options) => {
  const {
    element,
    padding
  } = options;
  function isRef(value) {
    return Object.prototype.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(args) {
      if (isRef(element)) {
        if (element.current != null) {
          return arrow({
            element: element.current,
            padding
          }).fn(args);
        }
        return {};
      } else if (element) {
        return arrow({
          element,
          padding
        }).fn(args);
      }
      return {};
    }
  };
};
var index = typeof document !== "undefined" ? import_react29.useLayoutEffect : import_react29.useEffect;
function deepEqual(a2, b2) {
  if (a2 === b2) {
    return true;
  }
  if (typeof a2 !== typeof b2) {
    return false;
  }
  if (typeof a2 === "function" && a2.toString() === b2.toString()) {
    return true;
  }
  let length, i2, keys;
  if (a2 && b2 && typeof a2 == "object") {
    if (Array.isArray(a2)) {
      length = a2.length;
      if (length != b2.length)
        return false;
      for (i2 = length; i2-- !== 0; ) {
        if (!deepEqual(a2[i2], b2[i2])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a2);
    length = keys.length;
    if (length !== Object.keys(b2).length) {
      return false;
    }
    for (i2 = length; i2-- !== 0; ) {
      if (!Object.prototype.hasOwnProperty.call(b2, keys[i2])) {
        return false;
      }
    }
    for (i2 = length; i2-- !== 0; ) {
      const key = keys[i2];
      if (key === "_owner" && a2.$$typeof) {
        continue;
      }
      if (!deepEqual(a2[key], b2[key])) {
        return false;
      }
    }
    return true;
  }
  return a2 !== a2 && b2 !== b2;
}
function useLatestRef(value) {
  const ref = React22.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React22.useState({
    x: null,
    y: null,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React22.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const referenceRef = React22.useRef(null);
  const floatingRef = React22.useRef(null);
  const dataRef = React22.useRef(data);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const [reference, _setReference] = React22.useState(null);
  const [floating, _setFloating] = React22.useState(null);
  const setReference = React22.useCallback((node) => {
    if (referenceRef.current !== node) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React22.useCallback((node) => {
    if (floatingRef.current !== node) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const update = React22.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = __spreadProps(__spreadValues({}, data2), {
        isPositioned: true
      });
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => __spreadProps(__spreadValues({}, data2), {
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React22.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (reference && floating) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(reference, floating, update);
      } else {
        update();
      }
    }
  }, [reference, floating, update, whileElementsMountedRef]);
  const refs = React22.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React22.useMemo(() => ({
    reference,
    floating
  }), [reference, floating]);
  return React22.useMemo(() => __spreadProps(__spreadValues({}, data), {
    update,
    refs,
    elements,
    reference: setReference,
    floating: setFloating
  }), [data, update, refs, elements, setReference, setFloating]);
}

// ../../../node_modules/.pnpm/@floating-ui+react@0.23.1_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react/dist/floating-ui.react.esm.js
var React23 = __toESM(require("react"));
var import_react30 = require("react");
var import_react_dom3 = require("react-dom");
var index2 = typeof document !== "undefined" ? import_react30.useLayoutEffect : import_react30.useEffect;
var serverHandoffComplete = false;
var count = 0;
var genId = () => "floating-ui-" + count++;
function useFloatingId() {
  const [id, setId] = React23.useState(() => serverHandoffComplete ? genId() : void 0);
  index2(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  React23.useEffect(() => {
    if (!serverHandoffComplete) {
      serverHandoffComplete = true;
    }
  }, []);
  return id;
}
var useReactId = React23[/* @__PURE__ */ "useId".toString()];
var useId = useReactId || useFloatingId;
function createPubSub() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null ? void 0 : _map$get.forEach((handler) => handler(data));
    },
    on(event, listener) {
      map.set(event, [...map.get(event) || [], listener]);
    },
    off(event, listener) {
      var _map$get2;
      map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l2) => l2 !== listener)) || []);
    }
  };
}
var FloatingTreeContext = /* @__PURE__ */ React23.createContext(null);
var useFloatingTree = () => React23.useContext(FloatingTreeContext);
function getDocument(node) {
  return (node == null ? void 0 : node.ownerDocument) || document;
}
function getWindow2(value) {
  return getDocument(value).defaultView || window;
}
function isElement2(value) {
  return value ? value instanceof getWindow2(value).Element : false;
}
var useInsertionEffect = React23[/* @__PURE__ */ "useInsertionEffect".toString()];
var useSafeInsertionEffect = useInsertionEffect || ((fn2) => fn2());
function useEvent(callback) {
  const ref = React23.useRef(() => {
    if (process.env.NODE_ENV !== "production") {
      throw new Error("Cannot call an event handler while rendering.");
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return React23.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
function useFloating2(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    open = false,
    onOpenChange: unstable_onOpenChange,
    nodeId
  } = options;
  const position = useFloating(options);
  const tree = useFloatingTree();
  const domReferenceRef = React23.useRef(null);
  const dataRef = React23.useRef({});
  const events = React23.useState(() => createPubSub())[0];
  const floatingId = useId();
  const [domReference, setDomReference] = React23.useState(null);
  const setPositionReference = React23.useCallback((node) => {
    const positionReference = isElement2(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    position.refs.setReference(positionReference);
  }, [position.refs]);
  const setReference = React23.useCallback((node) => {
    if (isElement2(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }
    if (isElement2(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement2(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = React23.useMemo(() => __spreadProps(__spreadValues({}, position.refs), {
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = React23.useMemo(() => __spreadProps(__spreadValues({}, position.elements), {
    domReference
  }), [position.elements, domReference]);
  const onOpenChange = useEvent(unstable_onOpenChange);
  const context = React23.useMemo(() => __spreadProps(__spreadValues({}, position), {
    refs,
    elements,
    dataRef,
    nodeId,
    floatingId,
    events,
    open,
    onOpenChange
  }), [position, nodeId, floatingId, events, open, onOpenChange, refs, elements]);
  index2(() => {
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React23.useMemo(() => __spreadProps(__spreadValues({}, position), {
    context,
    refs,
    elements,
    reference: setReference,
    positionReference: setPositionReference
  }), [position, refs, elements, context, setReference, setPositionReference]);
}

// ../components/Floating/src/use-floating-auto-update.ts
var import_hooks6 = require("@raikou/hooks");
function useFloatingAutoUpdate({
  opened,
  floating,
  position,
  positionDependencies
}) {
  const [delayedUpdate, setDelayedUpdate] = (0, import_react31.useState)(0);
  (0, import_react31.useEffect)(() => {
    if (floating.refs.reference.current && floating.refs.floating.current) {
      return autoUpdate(
        floating.refs.reference.current,
        floating.refs.floating.current,
        floating.update
      );
    }
    return void 0;
  }, [
    floating.refs.reference.current,
    floating.refs.floating.current,
    opened,
    delayedUpdate,
    position
  ]);
  (0, import_hooks6.useDidUpdate)(() => {
    floating.update();
  }, positionDependencies);
  (0, import_hooks6.useDidUpdate)(() => {
    setDelayedUpdate((c2) => c2 + 1);
  }, [opened]);
}

// ../components/Floating/src/get-floating-position/get-floating-position.ts
function getFloatingPosition(dir, position) {
  if (dir === "rtl" && (position.includes("right") || position.includes("left"))) {
    const [side, placement] = position.split("-");
    const flippedPosition = side === "right" ? "left" : "right";
    return placement === void 0 ? flippedPosition : `${flippedPosition}-${placement}`;
  }
  return position;
}

// ../components/Floating/src/FloatingArrow/FloatingArrow.tsx
var import_react33 = __toESM(require("react"));
var import_core20 = require("@raikou/core");

// ../components/Floating/src/FloatingArrow/get-arrow-position-styles.ts
var import_core19 = require("@raikou/core");
function horizontalSide(placement, arrowY, arrowOffset, arrowPosition) {
  if (placement === "center" || arrowPosition === "center") {
    return { top: arrowY };
  }
  if (placement === "end") {
    return { bottom: arrowOffset };
  }
  if (placement === "start") {
    return { top: arrowOffset };
  }
  return {};
}
function verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir) {
  if (placement === "center" || arrowPosition === "center") {
    return { left: arrowX };
  }
  if (placement === "end") {
    return { [dir === "ltr" ? "right" : "left"]: arrowOffset };
  }
  if (placement === "start") {
    return { [dir === "ltr" ? "left" : "right"]: arrowOffset };
  }
  return {};
}
var radiusByFloatingSide = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function getArrowPositionStyles({
  position,
  arrowSize,
  arrowOffset,
  arrowRadius,
  arrowPosition,
  arrowX,
  arrowY,
  dir
}) {
  const [side, placement = "center"] = position.split("-");
  const baseStyles = {
    width: (0, import_core19.rem)(arrowSize),
    height: (0, import_core19.rem)(arrowSize),
    transform: "rotate(45deg)",
    position: "absolute",
    [radiusByFloatingSide[side]]: (0, import_core19.rem)(arrowRadius)
  };
  const arrowPlacement = (0, import_core19.rem)(-arrowSize / 2);
  if (side === "left") {
    return __spreadProps(__spreadValues(__spreadValues({}, baseStyles), horizontalSide(placement, arrowY, arrowOffset, arrowPosition)), {
      right: arrowPlacement,
      borderLeftColor: "transparent",
      borderBottomColor: "transparent"
    });
  }
  if (side === "right") {
    return __spreadProps(__spreadValues(__spreadValues({}, baseStyles), horizontalSide(placement, arrowY, arrowOffset, arrowPosition)), {
      left: arrowPlacement,
      borderRightColor: "transparent",
      borderTopColor: "transparent"
    });
  }
  if (side === "top") {
    return __spreadProps(__spreadValues(__spreadValues({}, baseStyles), verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir)), {
      bottom: arrowPlacement,
      borderTopColor: "transparent",
      borderLeftColor: "transparent"
    });
  }
  if (side === "bottom") {
    return __spreadProps(__spreadValues(__spreadValues({}, baseStyles), verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir)), {
      top: arrowPlacement,
      borderBottomColor: "transparent",
      borderRightColor: "transparent"
    });
  }
  return {};
}

// ../components/Floating/src/FloatingArrow/FloatingArrow.tsx
var FloatingArrow = (0, import_react33.forwardRef)(
  (_a, ref) => {
    var _b = _a, {
      position,
      arrowSize,
      arrowOffset,
      arrowRadius,
      arrowPosition,
      visible,
      arrowX,
      arrowY,
      style
    } = _b, others = __objRest(_b, [
      "position",
      "arrowSize",
      "arrowOffset",
      "arrowRadius",
      "arrowPosition",
      "visible",
      "arrowX",
      "arrowY",
      "style"
    ]);
    const { dir } = (0, import_core20.useDirection)();
    if (!visible) {
      return null;
    }
    return /* @__PURE__ */ import_react33.default.createElement(
      "div",
      __spreadProps(__spreadValues({}, others), {
        ref,
        style: __spreadValues(__spreadValues({}, style), getArrowPositionStyles({
          position,
          arrowSize,
          arrowOffset,
          arrowRadius,
          arrowPosition,
          dir,
          arrowX,
          arrowY
        }))
      })
    );
  }
);
FloatingArrow.displayName = "@raikou/core/FloatingArrow";

// ../components/Popover/src/use-popover.ts
var import_hooks7 = require("@raikou/hooks");
function getPopoverMiddlewares(options, getFloating) {
  var _a, _b, _c, _d;
  const middlewares = [offset(options.offset)];
  if ((_a = options.middlewares) == null ? void 0 : _a.shift) {
    middlewares.push(shift({ limiter: limitShift() }));
  }
  if ((_b = options.middlewares) == null ? void 0 : _b.flip) {
    middlewares.push(flip());
  }
  if ((_c = options.middlewares) == null ? void 0 : _c.inline) {
    middlewares.push(inline());
  }
  middlewares.push(
    arrow2({ element: options.arrowRef, padding: options.arrowOffset })
  );
  if (((_d = options.middlewares) == null ? void 0 : _d.size) || options.width === "target") {
    middlewares.push(
      size({
        apply({ rects, availableWidth, availableHeight }) {
          var _a2, _b2, _c2;
          const floating = getFloating();
          const styles = (_b2 = (_a2 = floating.refs.floating.current) == null ? void 0 : _a2.style) != null ? _b2 : {};
          if ((_c2 = options.middlewares) == null ? void 0 : _c2.size) {
            Object.assign(styles, {
              maxWidth: `${availableWidth}px`,
              maxHeight: `${availableHeight}px`
            });
          }
          if (options.width === "target") {
            Object.assign(styles, {
              width: `${rects.reference.width}px`
            });
          }
        }
      })
    );
  }
  return middlewares;
}
function usePopover(options) {
  const [_opened, setOpened] = (0, import_hooks7.useUncontrolled)({
    value: options.opened,
    defaultValue: options.defaultOpened,
    finalValue: false,
    onChange: options.onChange
  });
  const onClose = () => {
    var _a;
    if (_opened) {
      (_a = options.onClose) == null ? void 0 : _a.call(options);
      setOpened(false);
    }
  };
  const onToggle = () => {
    var _a, _b;
    if (_opened) {
      (_a = options.onClose) == null ? void 0 : _a.call(options);
      setOpened(false);
    } else {
      (_b = options.onOpen) == null ? void 0 : _b.call(options);
      setOpened(true);
    }
  };
  const floating = useFloating2({
    placement: options.position,
    middleware: getPopoverMiddlewares(options, () => floating)
  });
  useFloatingAutoUpdate({
    opened: options.opened,
    position: options.position,
    positionDependencies: options.positionDependencies || [],
    floating
  });
  (0, import_hooks7.useDidUpdate)(() => {
    var _a;
    (_a = options.onPositionChange) == null ? void 0 : _a.call(options, floating.placement);
  }, [floating.placement]);
  (0, import_hooks7.useDidUpdate)(() => {
    var _a, _b;
    if (!options.opened) {
      (_a = options.onClose) == null ? void 0 : _a.call(options);
    } else {
      (_b = options.onOpen) == null ? void 0 : _b.call(options);
    }
  }, [options.opened]);
  return {
    floating,
    controlled: typeof options.opened === "boolean",
    opened: _opened,
    onClose,
    onToggle
  };
}

// ../components/_utils/create-safe-context/create-safe-context.tsx
var import_react35 = __toESM(require("react"));
function createSafeContext(errorMessage) {
  const Context = (0, import_react35.createContext)(null);
  const useSafeContext = () => {
    const ctx = (0, import_react35.useContext)(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react35.default.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../components/_utils/create-optional-context/create-optional-context.tsx
var import_react36 = __toESM(require("react"));
function createOptionalContext(initialValue = null) {
  const Context = (0, import_react36.createContext)(initialValue);
  const useOptionalContext = () => (0, import_react36.useContext)(Context);
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react36.default.createElement(Context.Provider, { value }, children);
  return [Provider, useOptionalContext];
}

// ../core/src/core/utils/find-element-ancestor/find-element-ancestor.ts
function findElementAncestor(element, selector) {
  let _element = element;
  while ((_element = _element.parentElement) && !_element.matches(selector))
    ;
  return _element;
}

// ../components/_utils/get-context-item-index/get-context-item-index.ts
function getContextItemIndex(elementSelector, parentSelector, node) {
  var _a;
  if (!node) {
    return null;
  }
  return Array.from(
    ((_a = findElementAncestor(node, parentSelector)) == null ? void 0 : _a.querySelectorAll(
      elementSelector
    )) || []
  ).findIndex((element) => element === node);
}

// ../components/_utils/use-hovered/use-hovered.ts
var import_react37 = require("react");
function useHovered() {
  const [hovered, setHovered] = (0, import_react37.useState)(-1);
  const resetHovered = () => setHovered(-1);
  return [hovered, { setHovered, resetHovered }];
}

// ../components/_utils/create-use-external-events/create-use-external-events.ts
var import_react38 = require("react");

// ../components/Popover/src/Popover.context.ts
var [PopoverContextProvider, usePopoverContext] = createSafeContext(
  "Popover component was not found in the tree"
);

// ../components/Popover/src/PopoverTarget/PopoverTarget.tsx
var import_react39 = require("react");
var import_clsx8 = __toESM(require("clsx"));
var import_hooks8 = require("@raikou/hooks");
var import_core21 = require("@raikou/core");
var defaultProps9 = {
  refProp: "ref",
  popupType: "dialog"
};
var PopoverTarget = (0, import_core21.factory)((props, ref) => {
  const _a = (0, import_core21.useProps)(
    "PopoverTarget",
    defaultProps9,
    props
  ), { children, refProp, popupType } = _a, others = __objRest(_a, ["children", "refProp", "popupType"]);
  if (!(0, import_core21.isElement)(children)) {
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const forwardedProps = others;
  const ctx = usePopoverContext();
  const targetRef = (0, import_hooks8.useMergedRef)(ctx.reference, children.ref, ref);
  const accessibleProps = ctx.withRoles ? {
    "aria-haspopup": popupType,
    "aria-expanded": ctx.opened,
    "aria-controls": ctx.getDropdownId(),
    id: ctx.getTargetId()
  } : {};
  return (0, import_react39.cloneElement)(children, __spreadValues(__spreadProps(__spreadValues(__spreadValues(__spreadValues({}, forwardedProps), accessibleProps), ctx.targetProps), {
    className: (0, import_clsx8.default)(
      ctx.targetProps.className,
      forwardedProps.className,
      children.props.className
    ),
    [refProp]: targetRef
  }), !ctx.controlled ? { onClick: ctx.onToggle } : null));
});
PopoverTarget.displayName = "@raikou/core/PopoverTarget";

// ../components/Popover/src/PopoverDropdown/PopoverDropdown.tsx
var import_react45 = __toESM(require("react"));
var import_hooks12 = require("@raikou/hooks");
var import_core26 = require("@raikou/core");

// ../components/Portal/src/Portal.tsx
var import_react40 = __toESM(require("react"));
var import_react_dom4 = require("react-dom");
var import_hooks9 = require("@raikou/hooks");
var import_core22 = require("@raikou/core");
function createPortalNode(props) {
  const node = document.createElement("div");
  node.setAttribute("data-portal", "true");
  typeof props.className === "string" && node.classList.add(...props.className.split(" "));
  typeof props.style === "object" && Object.assign(node.style, props.style);
  typeof props.id === "string" && node.setAttribute("id", props.id);
  return node;
}
var defaultProps10 = {};
var Portal = (0, import_react40.forwardRef)((props, ref) => {
  const _a = (0, import_core22.useProps)(
    "Portal",
    defaultProps10,
    props
  ), { children, target } = _a, others = __objRest(_a, ["children", "target"]);
  const [mounted, setMounted] = (0, import_react40.useState)(false);
  const nodeRef = (0, import_react40.useRef)(null);
  (0, import_hooks9.useIsomorphicEffect)(() => {
    setMounted(true);
    nodeRef.current = !target ? createPortalNode(others) : typeof target === "string" ? document.querySelector(target) : target;
    (0, import_hooks9.assignRef)(ref, nodeRef.current);
    if (!target && nodeRef.current) {
      document.body.appendChild(nodeRef.current);
    }
    return () => {
      if (!target && nodeRef.current) {
        document.body.removeChild(nodeRef.current);
      }
    };
  }, [target]);
  if (!mounted || !nodeRef.current) {
    return null;
  }
  return (0, import_react_dom4.createPortal)(/* @__PURE__ */ import_react40.default.createElement(import_react40.default.Fragment, null, children), nodeRef.current);
});
Portal.displayName = "@raikou/core/Portal";

// ../components/Portal/src/OptionalPortal.tsx
var import_react41 = __toESM(require("react"));
function OptionalPortal(_a) {
  var _b = _a, {
    withinPortal = true,
    children
  } = _b, others = __objRest(_b, [
    "withinPortal",
    "children"
  ]);
  if (withinPortal) {
    return /* @__PURE__ */ import_react41.default.createElement(Portal, __spreadValues({}, others), children);
  }
  return /* @__PURE__ */ import_react41.default.createElement(import_react41.default.Fragment, null, children);
}
OptionalPortal.displayName = "@raikou/core/OptionalPortal";

// ../components/Transition/src/transitions.ts
var import_core23 = require("@raikou/core");
var popIn = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${(0, import_core23.rem)(10)})` },
  transitionProperty: "transform, opacity"
};
var transitions = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  scale: {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: "scale(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-y": {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-x": {
    in: { opacity: 1, transform: "scaleX(1)" },
    out: { opacity: 0, transform: "scaleX(0)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "skew-up": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: {
      opacity: 0,
      transform: `translateY(-${(0, import_core23.rem)(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: {
      opacity: 0,
      transform: `translateY(${(0, import_core23.rem)(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${(0, import_core23.rem)(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${(0, import_core23.rem)(20)}) rotate(5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-100%)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(100%)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "slide-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(100%)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "slide-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-100%)" },
    common: { transformOrigin: "right" },
    transitionProperty: "transform, opacity"
  },
  pop: __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "center center" }
  }),
  "pop-bottom-left": __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "bottom left" }
  }),
  "pop-bottom-right": __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "bottom right" }
  }),
  "pop-top-left": __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "top left" }
  }),
  "pop-top-right": __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "top right" }
  })
};

// ../components/Transition/src/Transition.tsx
var import_react43 = __toESM(require("react"));

// ../components/Transition/src/get-transition-styles/get-transition-styles.ts
var transitionStatuses = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function getTransitionStyles({
  transition,
  state,
  duration,
  timingFunction
}) {
  const shared = {
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: timingFunction
  };
  if (typeof transition === "string") {
    if (!(transition in transitions)) {
      return {};
    }
    return __spreadValues(__spreadValues(__spreadValues({
      transitionProperty: transitions[transition].transitionProperty
    }, shared), transitions[transition].common), transitions[transition][transitionStatuses[state]]);
  }
  return __spreadValues(__spreadValues(__spreadValues({
    transitionProperty: transition.transitionProperty
  }, shared), transition.common), transition[transitionStatuses[state]]);
}

// ../components/Transition/src/use-transition.ts
var import_react42 = require("react");
var import_hooks10 = require("@raikou/hooks");
var import_core24 = require("@raikou/core");
function useTransition({
  duration,
  exitDuration,
  timingFunction,
  mounted,
  onEnter,
  onExit,
  onEntered,
  onExited
}) {
  const theme = (0, import_core24.useRaikouTheme)();
  const shouldReduceMotion = (0, import_hooks10.useReducedMotion)();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionDuration, setTransitionDuration] = (0, import_react42.useState)(
    reduceMotion ? 0 : duration
  );
  const [transitionStatus, setStatus] = (0, import_react42.useState)(
    mounted ? "entered" : "exited"
  );
  const timeoutRef = (0, import_react42.useRef)(-1);
  const handleStateChange = (shouldMount) => {
    const preHandler = shouldMount ? onEnter : onExit;
    const handler = shouldMount ? onEntered : onExited;
    setStatus(shouldMount ? "pre-entering" : "pre-exiting");
    window.clearTimeout(timeoutRef.current);
    const newTransitionDuration = reduceMotion ? 0 : shouldMount ? duration : exitDuration;
    setTransitionDuration(newTransitionDuration);
    if (newTransitionDuration === 0) {
      typeof preHandler === "function" && preHandler();
      typeof handler === "function" && handler();
      setStatus(shouldMount ? "entered" : "exited");
    } else {
      const preStateTimeout = window.setTimeout(() => {
        typeof preHandler === "function" && preHandler();
        setStatus(shouldMount ? "entering" : "exiting");
      }, 10);
      timeoutRef.current = window.setTimeout(() => {
        window.clearTimeout(preStateTimeout);
        typeof handler === "function" && handler();
        setStatus(shouldMount ? "entered" : "exited");
      }, newTransitionDuration);
    }
  };
  (0, import_hooks10.useDidUpdate)(() => {
    handleStateChange(mounted);
  }, [mounted]);
  (0, import_react42.useEffect)(() => () => window.clearTimeout(timeoutRef.current), []);
  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || "ease"
  };
}

// ../components/Transition/src/Transition.tsx
function Transition({
  keepMounted,
  transition = "fade",
  duration = 250,
  exitDuration = duration,
  mounted,
  children,
  timingFunction = "ease",
  onExit,
  onEntered,
  onEnter,
  onExited
}) {
  const { transitionDuration, transitionStatus, transitionTimingFunction } = useTransition({
    mounted,
    exitDuration,
    duration,
    timingFunction,
    onExit,
    onEntered,
    onEnter,
    onExited
  });
  if (transitionDuration === 0) {
    return mounted ? /* @__PURE__ */ import_react43.default.createElement(import_react43.default.Fragment, null, children({})) : keepMounted ? children({ display: "none" }) : null;
  }
  return transitionStatus === "exited" ? keepMounted ? children({ display: "none" }) : null : /* @__PURE__ */ import_react43.default.createElement(import_react43.default.Fragment, null, children(
    getTransitionStyles({
      transition,
      duration: transitionDuration,
      state: transitionStatus,
      timingFunction: transitionTimingFunction
    })
  ));
}
Transition.displayName = "@raikou/core/Transition";

// ../components/FocusTrap/src/FocusTrap.tsx
var import_react44 = require("react");
var import_hooks11 = require("@raikou/hooks");
var import_core25 = require("@raikou/core");
function FocusTrap({
  children,
  active = true,
  refProp = "ref"
}) {
  const focusTrapRef = (0, import_hooks11.useFocusTrap)(active);
  const ref = (0, import_hooks11.useMergedRef)(focusTrapRef, children == null ? void 0 : children.ref);
  if (!(0, import_core25.isElement)(children)) {
    return children;
  }
  return (0, import_react44.cloneElement)(children, { [refProp]: ref });
}
FocusTrap.displayName = "@raikou/core/FocusTrap";

// ../components/Popover/src/PopoverDropdown/PopoverDropdown.tsx
var defaultProps11 = {};
var PopoverDropdown = (0, import_core26.factory)(
  (_props, ref) => {
    var _b, _c, _d, _e, _f;
    const props = (0, import_core26.useProps)("PopoverDropdown", defaultProps11, _props);
    const _a = props, {
      className,
      style,
      vars,
      children,
      onKeyDownCapture,
      variant,
      classNames,
      styles
    } = _a, others = __objRest(_a, [
      "className",
      "style",
      "vars",
      "children",
      "onKeyDownCapture",
      "variant",
      "classNames",
      "styles"
    ]);
    const ctx = usePopoverContext();
    const returnFocus = (0, import_hooks12.useFocusReturn)({
      opened: ctx.opened,
      shouldReturnFocus: ctx.returnFocus
    });
    const accessibleProps = ctx.withRoles ? {
      "aria-labelledby": ctx.getTargetId(),
      id: ctx.getDropdownId(),
      role: "dialog",
      tabIndex: -1
    } : {};
    const mergedRef = (0, import_hooks12.useMergedRef)(ref, ctx.floating);
    if (ctx.disabled) {
      return null;
    }
    return /* @__PURE__ */ import_react45.default.createElement(OptionalPortal, __spreadProps(__spreadValues({}, ctx.portalProps), { withinPortal: ctx.withinPortal }), /* @__PURE__ */ import_react45.default.createElement(
      Transition,
      __spreadProps(__spreadValues({
        mounted: ctx.opened
      }, ctx.transitionProps), {
        transition: ((_b = ctx.transitionProps) == null ? void 0 : _b.transition) || "fade",
        duration: (_d = (_c = ctx.transitionProps) == null ? void 0 : _c.duration) != null ? _d : 150,
        keepMounted: ctx.keepMounted,
        exitDuration: typeof ((_e = ctx.transitionProps) == null ? void 0 : _e.exitDuration) === "number" ? ctx.transitionProps.exitDuration : (_f = ctx.transitionProps) == null ? void 0 : _f.duration
      }),
      (transitionStyles) => {
        var _a2, _b2;
        return /* @__PURE__ */ import_react45.default.createElement(FocusTrap, { active: ctx.trapFocus }, /* @__PURE__ */ import_react45.default.createElement(
          import_core26.Box,
          __spreadValues(__spreadProps(__spreadValues(__spreadValues({}, accessibleProps), others), {
            variant,
            ref: mergedRef,
            onKeyDownCapture: (0, import_core26.closeOnEscape)(ctx.onClose, {
              active: ctx.closeOnEscape,
              onTrigger: returnFocus,
              onKeyDown: onKeyDownCapture
            }),
            "data-position": ctx.placement
          }), ctx.getStyles("dropdown", {
            className,
            props,
            classNames,
            styles,
            style: [
              __spreadProps(__spreadValues({}, transitionStyles), {
                zIndex: ctx.zIndex,
                top: (_a2 = ctx.y) != null ? _a2 : 0,
                left: (_b2 = ctx.x) != null ? _b2 : 0,
                width: ctx.width === "target" ? void 0 : (0, import_core26.rem)(ctx.width)
              }),
              style
            ]
          })),
          children,
          /* @__PURE__ */ import_react45.default.createElement(
            FloatingArrow,
            __spreadValues({
              ref: ctx.arrowRef,
              arrowX: ctx.arrowX,
              arrowY: ctx.arrowY,
              visible: ctx.withArrow,
              position: ctx.placement,
              arrowSize: ctx.arrowSize,
              arrowRadius: ctx.arrowRadius,
              arrowOffset: ctx.arrowOffset,
              arrowPosition: ctx.arrowPosition
            }, ctx.getStyles("arrow", {
              props,
              classNames,
              styles
            }))
          )
        ));
      }
    ));
  }
);
PopoverDropdown.displayName = "@raikou/core/PopoverDropdown";

// css-module:./Popover.module.css#css-module
var Popover_module_default = { "dropdown": "m-38a85659", "arrow": "m-a31dc6c1" };

// ../components/Popover/src/Popover.tsx
var defaultProps12 = {
  position: "bottom",
  offset: 8,
  positionDependencies: [],
  transitionProps: { transition: "fade", duration: 150 },
  middlewares: { flip: true, shift: true, inline: false },
  arrowSize: 7,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: "side",
  closeOnClickOutside: true,
  withinPortal: true,
  closeOnEscape: true,
  trapFocus: false,
  withRoles: true,
  returnFocus: false,
  clickOutsideEvents: ["mousedown", "touchstart"],
  zIndex: (0, import_core27.getDefaultZIndex)("popover"),
  __staticSelector: "Popover",
  width: "max-content"
};
var varsResolver7 = (0, import_core27.createVarsResolver)(
  (_2, { radius, shadow }) => ({
    dropdown: {
      "--popover-radius": radius === void 0 ? void 0 : (0, import_core27.getRadius)(radius),
      "--popover-shadow": (0, import_core27.getShadow)(shadow)
    }
  })
);
function Popover(_props) {
  var _b, _c, _d, _e, _f, _g;
  const props = (0, import_core27.useProps)("Popover", defaultProps12, _props);
  const _a = props, {
    children,
    position,
    offset: offset2,
    onPositionChange,
    positionDependencies,
    opened,
    transitionProps,
    width,
    middlewares,
    withArrow,
    arrowSize,
    arrowOffset,
    arrowRadius,
    arrowPosition,
    unstyled,
    classNames,
    styles,
    closeOnClickOutside,
    withinPortal,
    portalProps,
    closeOnEscape: closeOnEscape2,
    clickOutsideEvents,
    trapFocus,
    onClose,
    onOpen,
    onChange,
    zIndex,
    radius,
    shadow,
    id,
    defaultOpened,
    __staticSelector,
    withRoles,
    disabled,
    returnFocus,
    variant,
    keepMounted,
    vars
  } = _a, others = __objRest(_a, [
    "children",
    "position",
    "offset",
    "onPositionChange",
    "positionDependencies",
    "opened",
    "transitionProps",
    "width",
    "middlewares",
    "withArrow",
    "arrowSize",
    "arrowOffset",
    "arrowRadius",
    "arrowPosition",
    "unstyled",
    "classNames",
    "styles",
    "closeOnClickOutside",
    "withinPortal",
    "portalProps",
    "closeOnEscape",
    "clickOutsideEvents",
    "trapFocus",
    "onClose",
    "onOpen",
    "onChange",
    "zIndex",
    "radius",
    "shadow",
    "id",
    "defaultOpened",
    "__staticSelector",
    "withRoles",
    "disabled",
    "returnFocus",
    "variant",
    "keepMounted",
    "vars"
  ]);
  const getStyles = (0, import_core27.useStyles)({
    name: __staticSelector,
    props,
    classes: Popover_module_default,
    classNames,
    styles,
    unstyled,
    rootSelector: "dropdown",
    vars,
    varsResolver: varsResolver7
  });
  const arrowRef = (0, import_react46.useRef)(null);
  const [targetNode, setTargetNode] = (0, import_react46.useState)(null);
  const [dropdownNode, setDropdownNode] = (0, import_react46.useState)(null);
  const { dir } = (0, import_core27.useDirection)();
  const uid = (0, import_hooks13.useId)(id);
  const popover = usePopover({
    middlewares,
    width,
    position: getFloatingPosition(dir, position),
    offset: typeof offset2 === "number" ? offset2 + (withArrow ? arrowSize / 2 : 0) : offset2,
    arrowRef,
    arrowOffset,
    onPositionChange,
    positionDependencies,
    opened,
    defaultOpened,
    onChange,
    onOpen,
    onClose
  });
  (0, import_hooks13.useClickOutside)(
    () => closeOnClickOutside && popover.onClose(),
    clickOutsideEvents,
    [targetNode, dropdownNode]
  );
  const reference = (0, import_react46.useCallback)(
    (node) => {
      setTargetNode(node);
      popover.floating.reference(node);
    },
    [popover.floating.reference]
  );
  const floating = (0, import_react46.useCallback)(
    (node) => {
      setDropdownNode(node);
      popover.floating.floating(node);
    },
    [popover.floating.floating]
  );
  return /* @__PURE__ */ import_react46.default.createElement(
    PopoverContextProvider,
    {
      value: {
        returnFocus,
        disabled,
        controlled: popover.controlled,
        reference,
        floating,
        x: popover.floating.x,
        y: popover.floating.y,
        arrowX: (_d = (_c = (_b = popover.floating) == null ? void 0 : _b.middlewareData) == null ? void 0 : _c.arrow) == null ? void 0 : _d.x,
        arrowY: (_g = (_f = (_e = popover.floating) == null ? void 0 : _e.middlewareData) == null ? void 0 : _f.arrow) == null ? void 0 : _g.y,
        opened: popover.opened,
        arrowRef,
        transitionProps,
        width,
        withArrow,
        arrowSize,
        arrowOffset,
        arrowRadius,
        arrowPosition,
        placement: popover.floating.placement,
        trapFocus,
        withinPortal,
        portalProps,
        zIndex,
        radius,
        shadow,
        closeOnEscape: closeOnEscape2,
        onClose: popover.onClose,
        onToggle: popover.onToggle,
        getTargetId: () => `${uid}-target`,
        getDropdownId: () => `${uid}-dropdown`,
        withRoles,
        targetProps: others,
        __staticSelector,
        classNames,
        styles,
        unstyled,
        variant,
        keepMounted,
        getStyles
      }
    },
    children
  );
}
Popover.Target = PopoverTarget;
Popover.Dropdown = PopoverDropdown;
Popover.displayName = "@raikou/core/Popover";
Popover.extend = (input) => input;

// src/DataTableHeaderCellFilter.tsx
var import_hooks14 = require("@raikou/hooks");

// src/icons/IconFilter.tsx
var import_react47 = __toESM(require("react"));
function IconFilter() {
  return /* @__PURE__ */ import_react47.default.createElement(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    /* @__PURE__ */ import_react47.default.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ import_react47.default.createElement("path", { d: "M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z" })
  );
}

// src/icons/IconFilterFilled.tsx
var import_react48 = __toESM(require("react"));
function IconFilterFilled() {
  return /* @__PURE__ */ import_react48.default.createElement(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    /* @__PURE__ */ import_react48.default.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ import_react48.default.createElement(
      "path",
      {
        d: "M20 3h-16a1 1 0 0 0 -1 1v2.227l.008 .223a3 3 0 0 0 .772 1.795l4.22 4.641v8.114a1 1 0 0 0 1.316 .949l6 -2l.108 -.043a1 1 0 0 0 .576 -.906v-6.586l4.121 -4.12a3 3 0 0 0 .879 -2.123v-2.171a1 1 0 0 0 -1 -1z",
        strokeWidth: "0",
        fill: "currentColor"
      }
    )
  );
}

// css-module:./DataTableHeaderCellFilter.module.css#css-module
var DataTableHeaderCellFilter_module_default = { "mantine-datatable-header-cell-filter-action-icon": "m-506e3a78" };

// src/DataTableHeaderCellFilter.tsx
function DataTableHeaderCellFilter({
  children,
  isActive
}) {
  const [isOpen, { close, toggle }] = (0, import_hooks14.useDisclosure)(false);
  const Icon = isActive ? IconFilterFilled : IconFilter;
  return /* @__PURE__ */ import_react49.default.createElement(
    Popover,
    {
      withArrow: true,
      withinPortal: true,
      shadow: "md",
      opened: isOpen,
      onClose: close,
      trapFocus: true
    },
    /* @__PURE__ */ import_react49.default.createElement(PopoverTarget, null, /* @__PURE__ */ import_react49.default.createElement(
      ActionIcon,
      {
        className: DataTableHeaderCellFilter_module_default["mantine-datatable-header-cell-filter-action-icon"],
        "data-active": isActive || void 0,
        size: "sm",
        variant: "default",
        onClick: (e) => {
          e.preventDefault();
          toggle();
        }
      },
      /* @__PURE__ */ import_react49.default.createElement(Icon, null)
    )),
    /* @__PURE__ */ import_react49.default.createElement(Popover.Dropdown, { onClick: (e) => e.preventDefault() }, typeof children === "function" ? children({ close }) : children)
  );
}

// src/icons/IconArrowUp.tsx
var import_react50 = __toESM(require("react"));
function IconArrowUp() {
  return /* @__PURE__ */ import_react50.default.createElement(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    /* @__PURE__ */ import_react50.default.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ import_react50.default.createElement("path", { d: "M12 5l0 14" }),
    /* @__PURE__ */ import_react50.default.createElement("path", { d: "M16 9l-4 -4" }),
    /* @__PURE__ */ import_react50.default.createElement("path", { d: "M8 9l4 -4" })
  );
}

// src/icons/IconArrowsVertical.tsx
var import_react51 = __toESM(require("react"));
function IconArrowsVertical() {
  return /* @__PURE__ */ import_react51.default.createElement(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    /* @__PURE__ */ import_react51.default.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ import_react51.default.createElement("path", { d: "M8 7l4 -4l4 4" }),
    /* @__PURE__ */ import_react51.default.createElement("path", { d: "M8 17l4 4l4 -4" }),
    /* @__PURE__ */ import_react51.default.createElement("path", { d: "M12 3l0 18" })
  );
}

// css-module:./DataTableHeaderCell.module.css#css-module
var DataTableHeaderCell_module_default = { "mantine-datatable-header-cell-sortable": "m-e24a5c2d", "mantine-datatable-header-cell-sortable-group": "m-df38d0df", "mantine-datatable-header-cell-sortable-text": "m-49499ecd", "mantine-datatable-header-cell-sortable-icon": "m-49449619", "mantine-datatable-header-cell-sortable-icon-reversed": "m-c6f3c2f6", "mantine-datatable-header-cell-sortable-unsorted-icon": "m-35f9fbb0" };

// src/DataTableHeaderCell.tsx
function DataTableHeaderCell({
  className,
  style,
  accessor,
  visibleMediaQuery,
  title,
  sortable,
  sortIcons,
  textAlign,
  width,
  sortStatus,
  onSortStatusChange,
  filter,
  filtering
}) {
  if (!useMediaQueryStringOrFunction(visibleMediaQuery))
    return null;
  const text = title != null ? title : humanize(accessor);
  const tooltip = typeof text === "string" ? text : void 0;
  const sortAction = sortable && onSortStatusChange ? (e) => {
    var _a;
    if (e == null ? void 0 : e.defaultPrevented)
      return;
    onSortStatusChange({
      columnAccessor: accessor,
      direction: (sortStatus == null ? void 0 : sortStatus.columnAccessor) === accessor ? sortStatus.direction === "asc" ? "desc" : "asc" : (_a = sortStatus == null ? void 0 : sortStatus.direction) != null ? _a : "asc"
    });
  } : void 0;
  return /* @__PURE__ */ import_react52.default.createElement(
    TableTh,
    {
      className: (0, import_clsx9.default)(
        {
          "mantine-datatable-header-cell-sortable": sortable
        },
        className
      ),
      style: [{ width, minWidth: width, maxWidth: width }, style],
      role: sortable ? "button" : void 0,
      tabIndex: sortable ? 0 : void 0,
      onClick: sortAction,
      onKeyDown: (e) => e.key === "Enter" && (sortAction == null ? void 0 : sortAction())
    },
    /* @__PURE__ */ import_react52.default.createElement(
      Group,
      {
        className: DataTableHeaderCell_module_default["mantine-datatable-header-cell-sortable-group"],
        justify: "space-between",
        wrap: "nowrap"
      },
      /* @__PURE__ */ import_react52.default.createElement(
        import_core28.Box,
        {
          className: (0, import_clsx9.default)(
            "mantine-datatable-header-cell-sortable-text",
            {
              [TEXT_ALIGN_LEFT]: textAlign === "left",
              [TEXT_ALIGN_CENTER]: textAlign === "center",
              [TEXT_ALIGN_RIGHT]: textAlign === "right"
            },
            NOWRAP,
            ELLIPSIS
          ),
          title: tooltip
        },
        text
      ),
      sortable || (sortStatus == null ? void 0 : sortStatus.columnAccessor) === accessor ? /* @__PURE__ */ import_react52.default.createElement(import_react52.default.Fragment, null, (sortStatus == null ? void 0 : sortStatus.columnAccessor) === accessor ? /* @__PURE__ */ import_react52.default.createElement(
        Center,
        {
          className: (0, import_clsx9.default)(
            DataTableHeaderCell_module_default["mantine-datatable-header-cell-sortable-icon"],
            {
              "mantine-datatable-header-cell-sortable-icon-reversed": sortStatus.direction === "desc"
            }
          ),
          role: "img",
          "aria-label": `Sorted ${sortStatus.direction === "desc" ? "descending" : "ascending"}`
        },
        (sortIcons == null ? void 0 : sortIcons.sorted) || /* @__PURE__ */ import_react52.default.createElement(IconArrowUp, null)
      ) : /* @__PURE__ */ import_react52.default.createElement(
        Center,
        {
          className: DataTableHeaderCell_module_default["mantine-datatable-header-cell-sortable-unsorted-icon"],
          role: "img",
          "aria-label": "Not sorted"
        },
        (sortIcons == null ? void 0 : sortIcons.unsorted) || /* @__PURE__ */ import_react52.default.createElement(IconArrowsVertical, null)
      )) : null,
      filter ? /* @__PURE__ */ import_react52.default.createElement(DataTableHeaderCellFilter, { isActive: !!filtering }, filter) : null
    )
  );
}

// src/DataTableHeaderSelectorCell.tsx
var import_react65 = __toESM(require("react"));

// ../components/Checkbox/src/Checkbox.tsx
var import_react64 = __toESM(require("react"));
var import_hooks18 = require("@raikou/hooks");
var import_core38 = require("@raikou/core");

// ../components/InlineInput/src/InlineInput.tsx
var import_react59 = __toESM(require("react"));
var import_core35 = require("@raikou/core");

// ../components/Input/src/Input.tsx
var import_react58 = __toESM(require("react"));
var import_core34 = require("@raikou/core");

// ../components/Input/src/InputWrapper.context.ts
var [InputWrapperProvider, useInputWrapperContext] = createOptionalContext({
  offsetBottom: false,
  offsetTop: false,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});

// ../components/Input/src/InputLabel/InputLabel.tsx
var import_react53 = __toESM(require("react"));
var import_core29 = require("@raikou/core");

// css-module:../Input.module.css#css-module
var Input_module_default = { "wrapper": "m-6c018570", "input": "m-8fb7ebe7", "section": "m-82577fc2", "placeholder": "m-88bacfd0", "root": "m-46b77525", "label": "m-8fdc1311", "required": "m-78a94662", "error": "m-8f816625", "description": "m-fe47ce59" };

// ../components/Input/src/InputLabel/InputLabel.tsx
var defaultProps13 = {
  labelElement: "label"
};
var varsResolver8 = (0, import_core29.createVarsResolver)((_2, { size: size2 }) => ({
  label: {
    "--input-label-size": (0, import_core29.getFontSize)(size2),
    "--input-asterisk-color": void 0
  }
}));
var InputLabel = (0, import_core29.factory)((_props, ref) => {
  const props = (0, import_core29.useProps)("InputLabel", defaultProps13, _props);
  const _a = (0, import_core29.useProps)("InputLabel", defaultProps13, props), {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    labelElement,
    size: size2,
    required,
    htmlFor,
    onMouseDown,
    children,
    __staticSelector,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "labelElement",
    "size",
    "required",
    "htmlFor",
    "onMouseDown",
    "children",
    "__staticSelector",
    "variant"
  ]);
  const _getStyles = (0, import_core29.useStyles)({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: Input_module_default,
    // classes: {
    //   label: "inputWrapper-label",
    //   required: "inputWrapper-required",
    // },
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "label",
    vars,
    varsResolver: varsResolver8
  });
  const ctx = useInputWrapperContext();
  const getStyles = (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
  return /* @__PURE__ */ import_react53.default.createElement(
    import_core29.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("label")), {
      component: labelElement,
      variant,
      size: size2,
      ref,
      htmlFor: labelElement === "label" ? htmlFor : void 0,
      mod: { required },
      onMouseDown: (event) => {
        onMouseDown == null ? void 0 : onMouseDown(event);
        if (!event.defaultPrevented && event.detail > 1) {
          event.preventDefault();
        }
      }
    }), others),
    children,
    required && /* @__PURE__ */ import_react53.default.createElement("span", __spreadProps(__spreadValues({}, getStyles("required")), { "aria-hidden": true }), " *")
  );
});
InputLabel.displayName = "@raikou/core/InputLabel";

// ../components/Input/src/InputError/InputError.tsx
var import_react54 = __toESM(require("react"));
var import_core30 = require("@raikou/core");
var defaultProps14 = {};
var varsResolver9 = (0, import_core30.createVarsResolver)((_2, { size: size2 }) => ({
  error: {
    "--input-error-size": size2 === void 0 ? void 0 : `calc(${(0, import_core30.getFontSize)(size2)} - ${(0, import_core30.rem)(2)})`
  }
}));
var InputError = (0, import_core30.factory)((_props, ref) => {
  const props = (0, import_core30.useProps)("InputError", defaultProps14, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size: size2,
    __staticSelector,
    __inheritStyles = true,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "size",
    "__staticSelector",
    "__inheritStyles",
    "variant"
  ]);
  const _getStyles = (0, import_core30.useStyles)({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: Input_module_default,
    // classes: {
    //   error: "inputWrapper-error",
    // },
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "error",
    vars,
    varsResolver: varsResolver9
  });
  const ctx = useInputWrapperContext();
  const getStyles = __inheritStyles && (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
  return /* @__PURE__ */ import_react54.default.createElement(
    import_core30.Box,
    __spreadValues(__spreadValues({
      component: "p",
      ref,
      variant,
      size: size2
    }, getStyles("error")), others)
  );
});
InputError.displayName = "@raikou/core/InputError";

// ../components/Input/src/InputDescription/InputDescription.tsx
var import_react55 = __toESM(require("react"));
var import_core31 = require("@raikou/core");
var defaultProps15 = {};
var varsResolver10 = (0, import_core31.createVarsResolver)(
  (_2, { size: size2 }) => ({
    description: {
      "--input-description-size": size2 === void 0 ? void 0 : `calc(${(0, import_core31.getFontSize)(size2)} - ${(0, import_core31.rem)(2)})`
    }
  })
);
var InputDescription = (0, import_core31.factory)(
  (_props, ref) => {
    const props = (0, import_core31.useProps)("InputDescription", defaultProps15, _props);
    const _a = (0, import_core31.useProps)("InputDescription", defaultProps15, props), {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      size: size2,
      __staticSelector,
      __inheritStyles = true,
      variant
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "unstyled",
      "vars",
      "size",
      "__staticSelector",
      "__inheritStyles",
      "variant"
    ]);
    const ctx = useInputWrapperContext();
    const _getStyles = (0, import_core31.useStyles)({
      name: ["InputWrapper", __staticSelector],
      props,
      classes: Input_module_default,
      // classes: {
      //   description: "inputWrapper-description",
      // },
      className,
      style,
      classNames,
      styles,
      unstyled,
      rootSelector: "description",
      vars,
      varsResolver: varsResolver10
    });
    const getStyles = __inheritStyles && (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
    return /* @__PURE__ */ import_react55.default.createElement(
      import_core31.Box,
      __spreadValues(__spreadValues({
        component: "p",
        ref,
        variant,
        size: size2
      }, getStyles("description")), others)
    );
  }
);
InputDescription.displayName = "@raikou/core/InputDescription";

// ../components/Input/src/InputPlaceholder/InputPlaceholder.tsx
var import_react56 = __toESM(require("react"));
var import_core32 = require("@raikou/core");
var defaultProps16 = {};
var InputPlaceholder = (0, import_core32.factory)(
  (_props, ref) => {
    const props = (0, import_core32.useProps)("InputPlaceholder", defaultProps16, _props);
    const _a = (0, import_core32.useProps)("InputPlaceholder", defaultProps16, props), {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      __staticSelector,
      variant
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "unstyled",
      "vars",
      "__staticSelector",
      "variant"
    ]);
    const getStyles = (0, import_core32.useStyles)({
      name: ["InputPlaceholder", __staticSelector],
      props,
      classes: Input_module_default,
      // classes: {
      //   placeholder: "input-placeholder",
      // },
      className,
      style,
      classNames,
      styles,
      unstyled,
      rootSelector: "placeholder"
    });
    return /* @__PURE__ */ import_react56.default.createElement(
      import_core32.Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("placeholder")), {
        component: "span",
        variant,
        ref
      }), others)
    );
  }
);
InputPlaceholder.displayName = "@raikou/core/InputPlaceholder";

// ../components/Input/src/InputWrapper/InputWrapper.tsx
var import_react57 = __toESM(require("react"));
var import_hooks16 = require("@raikou/hooks");
var import_core33 = require("@raikou/core");

// ../components/Input/src/InputWrapper/get-input-offsets/get-input-offsets.ts
function getInputOffsets(inputWrapperOrder, { hasDescription, hasError }) {
  const inputIndex = inputWrapperOrder.findIndex((part) => part === "input");
  const aboveInput = inputWrapperOrder[inputIndex - 1];
  const belowInput = inputWrapperOrder[inputIndex + 1];
  const offsetTop = hasDescription && aboveInput === "description" || hasError && aboveInput === "error";
  const offsetBottom = hasDescription && belowInput === "description" || hasError && belowInput === "error";
  return { offsetBottom, offsetTop };
}

// ../components/Input/src/InputWrapper/InputWrapper.tsx
var defaultProps17 = {
  labelElement: "label",
  inputContainer: (children) => children,
  inputWrapperOrder: ["label", "description", "input", "error"]
};
var varsResolver11 = (0, import_core33.createVarsResolver)((_2, { size: size2 }) => ({
  label: {
    "--input-label-size": (0, import_core33.getFontSize)(size2),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": size2 === void 0 ? void 0 : `calc(${(0, import_core33.getFontSize)(size2)} - ${(0, import_core33.rem)(2)})`
  },
  description: {
    "--input-description-size": size2 === void 0 ? void 0 : `calc(${(0, import_core33.getFontSize)(size2)} - ${(0, import_core33.rem)(2)})`
  }
}));
var InputWrapper = (0, import_core33.factory)((_props, ref) => {
  const props = (0, import_core33.useProps)("InputWrapper", defaultProps17, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size: size2,
    variant,
    __staticSelector,
    inputContainer,
    inputWrapperOrder,
    label,
    error,
    description,
    labelProps,
    descriptionProps,
    errorProps,
    labelElement,
    children,
    withAsterisk,
    id,
    required,
    __stylesApiProps
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "size",
    "variant",
    "__staticSelector",
    "inputContainer",
    "inputWrapperOrder",
    "label",
    "error",
    "description",
    "labelProps",
    "descriptionProps",
    "errorProps",
    "labelElement",
    "children",
    "withAsterisk",
    "id",
    "required",
    "__stylesApiProps"
  ]);
  const getStyles = (0, import_core33.useStyles)({
    name: ["InputWrapper", __staticSelector],
    props: __stylesApiProps || props,
    classes: Input_module_default,
    // classes: {
    //   root: "inputWrapper-root",
    //   label: "inputWrapper-label",
    //   required: "inputWrapper-required",
    //   error: "inputWrapper-error",
    //   description: "inputWrapper-description",
    // },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver11
  });
  const sharedProps = {
    size: size2,
    variant,
    __staticSelector
  };
  const idBase = (0, import_hooks16.useId)(id);
  const isRequired = typeof withAsterisk === "boolean" ? withAsterisk : required;
  const errorId = (errorProps == null ? void 0 : errorProps.id) || `${idBase}-error`;
  const descriptionId = (descriptionProps == null ? void 0 : descriptionProps.id) || `${idBase}-description`;
  const inputId = idBase;
  const hasError = !!error && typeof error !== "boolean";
  const hasDescription = !!description;
  const _describedBy = `${hasError ? errorId : ""} ${hasDescription ? descriptionId : ""}`;
  const describedBy = _describedBy.trim().length > 0 ? _describedBy.trim() : void 0;
  const labelId = (labelProps == null ? void 0 : labelProps.id) || `${idBase}-label`;
  const _label = label && /* @__PURE__ */ import_react57.default.createElement(
    InputLabel,
    __spreadValues(__spreadValues({
      key: "label",
      labelElement,
      id: labelId,
      htmlFor: inputId,
      required: isRequired
    }, sharedProps), labelProps),
    label
  );
  const _description = hasDescription && /* @__PURE__ */ import_react57.default.createElement(
    InputDescription,
    __spreadProps(__spreadValues(__spreadValues({
      key: "description"
    }, descriptionProps), sharedProps), {
      size: (descriptionProps == null ? void 0 : descriptionProps.size) || sharedProps.size,
      id: (descriptionProps == null ? void 0 : descriptionProps.id) || descriptionId
    }),
    description
  );
  const _input = /* @__PURE__ */ import_react57.default.createElement(import_react57.default.Fragment, { key: "input" }, inputContainer(children));
  const _error = hasError && /* @__PURE__ */ import_react57.default.createElement(
    InputError,
    __spreadProps(__spreadValues(__spreadValues({}, errorProps), sharedProps), {
      size: (errorProps == null ? void 0 : errorProps.size) || sharedProps.size,
      key: "error",
      id: (errorProps == null ? void 0 : errorProps.id) || errorId
    }),
    error
  );
  const content = inputWrapperOrder.map((part) => {
    switch (part) {
      case "label":
        return _label;
      case "input":
        return _input;
      case "description":
        return _description;
      case "error":
        return _error;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ import_react57.default.createElement(
    InputWrapperProvider,
    {
      value: __spreadValues({
        getStyles,
        describedBy,
        inputId,
        labelId
      }, getInputOffsets(inputWrapperOrder, { hasDescription, hasError }))
    },
    /* @__PURE__ */ import_react57.default.createElement(
      import_core33.Box,
      __spreadValues(__spreadValues({
        ref,
        variant,
        size: size2
      }, getStyles("root")), others),
      content
    )
  );
});
InputWrapper.displayName = "@raikou/core/InputWrapper";

// css-module:./Input.module.css#css-module
var Input_module_default2 = { "wrapper": "m-6c018570", "input": "m-8fb7ebe7", "section": "m-82577fc2", "placeholder": "m-88bacfd0", "root": "m-46b77525", "label": "m-8fdc1311", "required": "m-78a94662", "error": "m-8f816625", "description": "m-fe47ce59" };

// ../components/Input/src/Input.tsx
var defaultProps18 = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: true,
  withErrorStyles: true
};
var varsResolver12 = (0, import_core34.createVarsResolver)((_2, props, ctx) => ({
  wrapper: {
    "--input-margin-top": ctx.offsetTop ? "calc(var(--raikou-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": ctx.offsetBottom ? "calc(var(--raikou-spacing-xs) / 2)" : void 0,
    "--input-height": (0, import_core34.getSize)(props.size, "input-height"),
    "--input-fz": (0, import_core34.getFontSize)(props.size),
    "--input-radius": props.radius === void 0 ? void 0 : (0, import_core34.getRadius)(props.radius),
    "--input-left-section-width": props.leftSectionWidth !== void 0 ? (0, import_core34.rem)(props.leftSectionWidth) : void 0,
    "--input-right-section-width": props.rightSectionWidth !== void 0 ? (0, import_core34.rem)(props.rightSectionWidth) : void 0,
    "--input-padding-y": props.multiline ? (0, import_core34.getSize)(props.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": props.leftSectionPointerEvents,
    "--input-right-section-pointer-events": props.rightSectionPointerEvents
  }
}));
var Input = (0, import_core34.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core34.useProps)("Input", defaultProps18, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    required,
    __staticSelector,
    __stylesApiProps,
    size: size2,
    wrapperProps,
    error,
    disabled,
    leftSection,
    leftSectionProps,
    leftSectionWidth,
    rightSection,
    rightSectionProps,
    rightSectionWidth,
    rightSectionPointerEvents,
    leftSectionPointerEvents,
    variant,
    vars,
    pointer,
    multiline,
    radius,
    id,
    withAria,
    withErrorStyles
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "required",
    "__staticSelector",
    "__stylesApiProps",
    "size",
    "wrapperProps",
    "error",
    "disabled",
    "leftSection",
    "leftSectionProps",
    "leftSectionWidth",
    "rightSection",
    "rightSectionProps",
    "rightSectionWidth",
    "rightSectionPointerEvents",
    "leftSectionPointerEvents",
    "variant",
    "vars",
    "pointer",
    "multiline",
    "radius",
    "id",
    "withAria",
    "withErrorStyles"
  ]);
  const { styleProps, rest } = (0, import_core34.extractStyleProps)(others);
  const ctx = useInputWrapperContext();
  const stylesCtx = {
    offsetBottom: ctx == null ? void 0 : ctx.offsetBottom,
    offsetTop: ctx == null ? void 0 : ctx.offsetTop
  };
  const getStyles = (0, import_core34.useStyles)({
    name: ["Input", __staticSelector],
    props: __stylesApiProps || props,
    classes: Input_module_default2,
    // classes: {
    //   wrapper: "input-wrapper",
    //   input: "input-input",
    //   section: "input-section",
    // },
    className,
    style,
    classNames,
    styles,
    unstyled,
    stylesCtx,
    rootSelector: "wrapper",
    vars,
    varsResolver: varsResolver12
  });
  const ariaAttributes = withAria ? {
    required,
    disabled,
    "aria-invalid": !!error,
    "aria-describedby": ctx == null ? void 0 : ctx.describedBy,
    id: (ctx == null ? void 0 : ctx.inputId) || id
  } : {};
  return /* @__PURE__ */ import_react58.default.createElement(
    import_core34.Box,
    __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, getStyles("wrapper")), styleProps), wrapperProps), {
      mod: {
        error: !!error && withErrorStyles,
        pointer,
        disabled,
        multiline,
        "data-with-right-section": !!rightSection,
        "data-with-left-section": !!leftSection
      },
      variant,
      size: size2
    }),
    leftSection && /* @__PURE__ */ import_react58.default.createElement(
      "div",
      __spreadValues(__spreadProps(__spreadValues({}, leftSectionProps), {
        "data-position": "left"
      }), getStyles("section", {
        className: leftSectionProps == null ? void 0 : leftSectionProps.className,
        style: leftSectionProps == null ? void 0 : leftSectionProps.style
      })),
      leftSection
    ),
    /* @__PURE__ */ import_react58.default.createElement(
      import_core34.Box,
      __spreadValues(__spreadProps(__spreadValues(__spreadValues({
        component: "input"
      }, rest), ariaAttributes), {
        ref,
        required,
        mod: { disabled, error: !!error && withErrorStyles },
        variant
      }), getStyles("input"))
    ),
    rightSection && /* @__PURE__ */ import_react58.default.createElement(
      "div",
      __spreadValues(__spreadProps(__spreadValues({}, rightSectionProps), {
        "data-position": "right"
      }), getStyles("section", {
        className: rightSectionProps == null ? void 0 : rightSectionProps.className,
        style: rightSectionProps == null ? void 0 : rightSectionProps.style
      })),
      rightSection
    )
  );
});
Input.Wrapper = InputWrapper;
Input.Label = InputLabel;
Input.Error = InputError;
Input.Description = InputDescription;
Input.Placeholder = InputPlaceholder;
Input.displayName = "@raikou/core/Input";

// css-module:./InlineInput.module.css#css-module
var InlineInput_module_default = { "root": "m-5f75b09e", "body": "m-5f6e695e", "labelWrapper": "m-d3ea56bb", "label": "m-8ee546b8", "description": "m-328f68c0", "error": "m-8e8a99cc" };

// ../components/InlineInput/src/InlineInput.tsx
var InlineInput = (0, import_react59.forwardRef)(
  (_a, ref) => {
    var _b = _a, {
      __staticSelector,
      __stylesApiProps,
      className,
      classNames,
      styles,
      unstyled,
      children,
      label,
      description,
      id,
      disabled,
      error,
      size: size2,
      labelPosition = "left",
      variant,
      style,
      vars
    } = _b, others = __objRest(_b, [
      "__staticSelector",
      "__stylesApiProps",
      "className",
      "classNames",
      "styles",
      "unstyled",
      "children",
      "label",
      "description",
      "id",
      "disabled",
      "error",
      "size",
      "labelPosition",
      "variant",
      "style",
      "vars"
    ]);
    const getStyles = (0, import_core35.useStyles)({
      name: __staticSelector,
      props: __stylesApiProps,
      className,
      style,
      classes: InlineInput_module_default,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ import_react59.default.createElement(
      import_core35.Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
        ref,
        __vars: {
          "--label-fz": (0, import_core35.getFontSize)(size2),
          "--label-lh": (0, import_core35.getSize)(size2, "label-lh")
        },
        mod: { "label-position": labelPosition },
        variant,
        size: size2
      }), others),
      /* @__PURE__ */ import_react59.default.createElement("div", __spreadValues({}, getStyles("body")), children, /* @__PURE__ */ import_react59.default.createElement("div", __spreadValues({}, getStyles("labelWrapper")), label && /* @__PURE__ */ import_react59.default.createElement(
        "label",
        __spreadProps(__spreadValues({}, getStyles("label")), {
          "data-disabled": disabled || void 0,
          htmlFor: id
        }),
        label
      ), description && /* @__PURE__ */ import_react59.default.createElement(
        Input.Description,
        __spreadValues({
          size: size2,
          __inheritStyles: false
        }, getStyles("description")),
        description
      ), error && error !== "boolean" && /* @__PURE__ */ import_react59.default.createElement(
        Input.Error,
        __spreadValues({
          size: size2,
          __inheritStyles: false
        }, getStyles("error")),
        error
      )))
    );
  }
);
InlineInput.displayName = "@raikou/core/InlineInput";

// ../components/Checkbox/src/CheckboxGroup.context.ts
var import_react60 = require("react");
var CheckboxGroupContext = (0, import_react60.createContext)(
  null
);
var CheckboxGroupProvider = CheckboxGroupContext.Provider;
var useCheckboxGroupContext = () => (0, import_react60.useContext)(CheckboxGroupContext);

// ../components/Checkbox/src/CheckboxGroup/CheckboxGroup.tsx
var import_react62 = __toESM(require("react"));
var import_hooks17 = require("@raikou/hooks");
var import_core36 = require("@raikou/core");

// ../components/InputsGroupFieldset/src/InputsGroupFieldset.tsx
var import_react61 = __toESM(require("react"));
function InputsGroupFieldset({
  children,
  role
}) {
  const ctx = useInputWrapperContext();
  if (!ctx) {
    return /* @__PURE__ */ import_react61.default.createElement(import_react61.default.Fragment, null, children);
  }
  return /* @__PURE__ */ import_react61.default.createElement(
    "div",
    {
      role,
      "aria-labelledby": ctx.labelId,
      "aria-describedby": ctx.describedBy
    },
    children
  );
}

// ../components/Checkbox/src/CheckboxGroup/CheckboxGroup.tsx
var defaultProps19 = {};
var CheckboxGroup = (0, import_core36.factory)((props, ref) => {
  const _a = (0, import_core36.useProps)("CheckboxGroup", defaultProps19, props), {
    value,
    defaultValue,
    onChange,
    size: size2,
    wrapperProps,
    children
  } = _a, others = __objRest(_a, [
    "value",
    "defaultValue",
    "onChange",
    "size",
    "wrapperProps",
    "children"
  ]);
  const [_value, setValue] = (0, import_hooks17.useUncontrolled)({
    value,
    defaultValue,
    finalValue: [],
    onChange
  });
  const handleChange = (event) => {
    const itemValue = event.currentTarget.value;
    setValue(
      _value.includes(itemValue) ? _value.filter((item) => item !== itemValue) : [..._value, itemValue]
    );
  };
  return /* @__PURE__ */ import_react62.default.createElement(
    CheckboxGroupProvider,
    {
      value: { value: _value, onChange: handleChange, size: size2 }
    },
    /* @__PURE__ */ import_react62.default.createElement(
      Input.Wrapper,
      __spreadProps(__spreadValues(__spreadValues({
        size: size2,
        ref
      }, wrapperProps), others), {
        labelElement: "div",
        __staticSelector: "CheckboxGroup"
      }),
      /* @__PURE__ */ import_react62.default.createElement(InputsGroupFieldset, { role: "group" }, children)
    )
  );
});

// ../components/Checkbox/src/CheckIcon.tsx
var import_react63 = __toESM(require("react"));
var import_core37 = require("@raikou/core");
function CheckIcon(_a) {
  var _b = _a, { size: size2, style } = _b, others = __objRest(_b, ["size", "style"]);
  const _style = size2 !== void 0 ? __spreadValues({ width: (0, import_core37.rem)(size2), height: (0, import_core37.rem)(size2) }, style) : style;
  return /* @__PURE__ */ import_react63.default.createElement(
    "svg",
    __spreadValues({
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: _style,
      "aria-hidden": true
    }, others),
    /* @__PURE__ */ import_react63.default.createElement(
      "path",
      {
        d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    )
  );
}
function CheckboxIcon(_a) {
  var _b = _a, { indeterminate } = _b, others = __objRest(_b, ["indeterminate"]);
  if (indeterminate) {
    return /* @__PURE__ */ import_react63.default.createElement(
      "svg",
      __spreadValues({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 32 6",
        "aria-hidden": true
      }, others),
      /* @__PURE__ */ import_react63.default.createElement("rect", { width: "32", height: "6", fill: "currentColor", rx: "3" })
    );
  }
  return /* @__PURE__ */ import_react63.default.createElement(CheckIcon, __spreadValues({}, others));
}

// css-module:./Checkbox.module.css#css-module
var Checkbox_module_default = { "root": "m-bf2d988c", "inner": "m-26062bec", "input": "m-26063560", "icon": "m-bf295423" };

// ../components/Checkbox/src/Checkbox.tsx
var defaultProps20 = {
  labelPosition: "right",
  icon: CheckboxIcon
};
var varsResolver13 = (0, import_core38.createVarsResolver)(
  (theme, { radius, color, size: size2, iconColor }) => ({
    root: {
      "--checkbox-size": (0, import_core38.getSize)(size2, "checkbox-size"),
      "--checkbox-radius": radius === void 0 ? void 0 : (0, import_core38.getRadius)(radius),
      "--checkbox-color": color ? (0, import_core38.getThemeColor)(color, theme) : void 0,
      "--checkbox-icon-color": iconColor ? (0, import_core38.getThemeColor)(iconColor, theme) : void 0
    }
  })
);
var Checkbox = (0, import_core38.factory)((_props, ref) => {
  const props = (0, import_core38.useProps)("Checkbox", defaultProps20, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    label,
    id,
    size: size2,
    radius,
    wrapperProps,
    children,
    checked,
    labelPosition,
    description,
    error,
    disabled,
    variant,
    indeterminate,
    icon,
    rootRef,
    iconColor
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "color",
    "label",
    "id",
    "size",
    "radius",
    "wrapperProps",
    "children",
    "checked",
    "labelPosition",
    "description",
    "error",
    "disabled",
    "variant",
    "indeterminate",
    "icon",
    "rootRef",
    "iconColor"
  ]);
  const ctx = useCheckboxGroupContext();
  const _size = size2 || (ctx == null ? void 0 : ctx.size);
  const Icon = icon;
  const getStyles = (0, import_core38.useStyles)({
    name: "Checkbox",
    props,
    classes: Checkbox_module_default,
    // classes: {
    //   root: "checkbox-root",
    //   inner: "checkbox-inner",
    //   input: "checkbox-input",
    //   icon: "checkbox-icon",
    //   body: "inlineInput-body",
    //   label: "inlineInput-label",
    //   labelWrapper: "inlineInput-labelWrapper",
    //   description: "inlineInput-description",
    //   error: "inlineInput-error",
    // },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver13
  });
  const { styleProps, rest } = (0, import_core38.extractStyleProps)(others);
  const uuid = (0, import_hooks18.useId)(id);
  const contextProps = ctx ? {
    checked: ctx.value.includes(rest.value),
    onChange: ctx.onChange
  } : {};
  return /* @__PURE__ */ import_react64.default.createElement(
    InlineInput,
    __spreadValues(__spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      __staticSelector: "Checkbox",
      __stylesApiProps: props,
      id: uuid,
      size: _size,
      labelPosition,
      label,
      description,
      error,
      disabled,
      classNames,
      styles,
      unstyled,
      "data-checked": contextProps.checked || void 0,
      variant,
      ref: rootRef
    }), styleProps), wrapperProps),
    /* @__PURE__ */ import_react64.default.createElement(
      import_core38.Box,
      __spreadProps(__spreadValues({}, getStyles("inner")), {
        mod: { "data-label-position": labelPosition }
      }),
      /* @__PURE__ */ import_react64.default.createElement(
        import_core38.Box,
        __spreadProps(__spreadValues(__spreadValues(__spreadValues({
          component: "input",
          id: uuid,
          ref,
          checked,
          disabled,
          mod: { error: !!error, indeterminate }
        }, getStyles("input", { focusable: true })), rest), contextProps), {
          type: "checkbox"
        })
      ),
      /* @__PURE__ */ import_react64.default.createElement(Icon, __spreadValues({ indeterminate }, getStyles("icon")))
    )
  );
});
Checkbox.displayName = "@raikou/core/Checkbox";
Checkbox.Group = CheckboxGroup;

// src/DataTableHeaderSelectorCell.tsx
var import_clsx10 = __toESM(require("clsx"));

// css-module:./DataTableHeaderSelectorCell.module.css#css-module
var DataTableHeaderSelectorCell_module_default = { "mantine-datatable-header-selector-cell": "m-a82af25b" };

// src/DataTableHeaderSelectorCell.tsx
function DataTableHeaderSelectorCell({
  trigger,
  shadowVisible,
  checked,
  indeterminate,
  checkboxProps,
  onChange,
  rowSpan
}) {
  const enabled = !checkboxProps.disabled;
  return /* @__PURE__ */ import_react65.default.createElement(
    TableTh,
    {
      className: (0, import_clsx10.default)(DataTableHeaderSelectorCell_module_default["mantine-datatable-header-selector-cell"], {
        [POINTER_CURSOR]: trigger === "cell" && enabled
      }),
      rowSpan,
      "data-shadow-visible": shadowVisible || void 0,
      onClick: trigger === "cell" && enabled ? onChange : void 0
    },
    /* @__PURE__ */ import_react65.default.createElement(
      Checkbox,
      __spreadProps(__spreadValues({
        classNames: enabled ? { input: POINTER_CURSOR } : void 0,
        checked,
        indeterminate,
        onChange
      }, checkboxProps), {
        disabled: !(onChange || checkboxProps.onChange) || checkboxProps.disabled
      })
    )
  );
}

// css-module:./DataTableHeader.module.css#css-module
var DataTableHeader_module_default = { "mantine-datatable-header": "m-1a563a39" };

// src/DataTableHeader.tsx
var DataTableHeader = (0, import_react66.forwardRef)(function DataTableHeader2({
  className,
  style,
  sortStatus,
  sortIcons,
  onSortStatusChange,
  columns,
  defaultColumnProps,
  groups,
  selectionTrigger,
  selectionVisible,
  selectionChecked,
  selectionIndeterminate,
  onSelectionChange,
  selectionCheckboxProps,
  selectorCellShadowVisible
}, ref) {
  const allRecordsSelectorCell = selectionVisible ? /* @__PURE__ */ import_react66.default.createElement(
    DataTableHeaderSelectorCell,
    {
      trigger: selectionTrigger,
      shadowVisible: selectorCellShadowVisible,
      checked: selectionChecked,
      indeterminate: selectionIndeterminate,
      checkboxProps: selectionCheckboxProps,
      onChange: onSelectionChange,
      rowSpan: groups ? 2 : void 0
    }
  ) : null;
  return /* @__PURE__ */ import_react66.default.createElement(
    TableThead,
    {
      className: (0, import_clsx11.default)(DataTableHeader_module_default["mantine-datatable-header"], className),
      style,
      ref
    },
    groups && /* @__PURE__ */ import_react66.default.createElement(TableTr, null, allRecordsSelectorCell, groups.map((group) => /* @__PURE__ */ import_react66.default.createElement(DataTableColumnGroupHeaderCell, { key: group.id, group }))),
    /* @__PURE__ */ import_react66.default.createElement(TableTr, null, !groups && allRecordsSelectorCell, columns.map((_a) => {
      var _b = _a, { hidden } = _b, columnProps = __objRest(_b, ["hidden"]);
      if (hidden)
        return null;
      const {
        accessor,
        visibleMediaQuery,
        textAlign,
        width,
        title,
        sortable,
        titleClassName,
        titleStyle,
        filter,
        filtering
      } = __spreadValues(__spreadValues({}, defaultColumnProps), columnProps);
      return /* @__PURE__ */ import_react66.default.createElement(
        DataTableHeaderCell,
        {
          key: accessor,
          accessor,
          className: titleClassName,
          style: titleStyle,
          visibleMediaQuery,
          textAlign,
          width,
          title,
          sortable,
          sortStatus,
          sortIcons,
          onSortStatusChange,
          filter,
          filtering
        }
      );
    }))
  );
});

// src/DataTableLoader.tsx
var import_react67 = __toESM(require("react"));
var import_clsx12 = __toESM(require("clsx"));

// css-module:./DataTableLoader.module.css#css-module
var DataTableLoader_module_default = { "mantine-datatable-loader": "m-7c185cf9", "mantine-datatable-loader-fetching": "m-bd290d3c" };

// src/DataTableLoader.tsx
function DataTableLoader({
  pt,
  pb,
  fetching,
  customContent,
  backgroundBlur,
  size: size2,
  type,
  color
}) {
  return /* @__PURE__ */ import_react67.default.createElement(
    Center,
    {
      pt,
      pb,
      className: (0, import_clsx12.default)(DataTableLoader_module_default["mantine-datatable-loader"], {
        "mantine-datatable-loader-fetching": fetching
      }),
      style: [
        {
          backdropFilter: backgroundBlur ? `blur(${backgroundBlur}px)` : void 0
        }
      ]
    },
    fetching && (customContent || /* @__PURE__ */ import_react67.default.createElement(Loader, { size: size2, type, color }))
  );
}

// src/DataTablePagination.tsx
var import_react85 = __toESM(require("react"));
var import_core54 = require("@raikou/core");

// ../components/Pagination/src/Pagination.tsx
var import_react74 = __toESM(require("react"));
var import_core43 = require("@raikou/core");

// ../components/Pagination/src/PaginationRoot/PaginationRoot.tsx
var import_react68 = __toESM(require("react"));
var import_hooks19 = require("@raikou/hooks");
var import_core39 = require("@raikou/core");

// ../components/Pagination/src/Pagination.context.ts
var [PaginationProvider, usePaginationContext] = createSafeContext(
  "Pagination.Root component was not found in tree"
);

// css-module:../Pagination.module.css#css-module
var Pagination_module_default = { "root": "m-4addd315", "control": "m-326d024a", "dots": "m-4ad7767d" };

// ../components/Pagination/src/PaginationRoot/PaginationRoot.tsx
var defaultProps21 = {
  siblings: 1,
  boundaries: 1,
  size: "md"
};
var varsResolver14 = (0, import_core39.createVarsResolver)(
  (theme, { size: size2, radius, color }) => ({
    root: {
      "--pagination-control-radius": radius === void 0 ? void 0 : (0, import_core39.getRadius)(radius),
      "--pagination-control-size": (0, import_core39.getSize)(size2, "pagination-control-size"),
      "--pagination-control-fz": (0, import_core39.getFontSize)(size2),
      "--pagination-active-bg": color ? (0, import_core39.getThemeColor)(color, theme) : void 0
    }
  })
);
var PaginationRoot = (0, import_core39.factory)((_props, ref) => {
  const props = (0, import_core39.useProps)("PaginationRoot", defaultProps21, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    total,
    value,
    defaultValue,
    onChange,
    disabled,
    siblings,
    boundaries,
    color,
    radius,
    onNextPage,
    onPreviousPage,
    onFirstPage,
    onLastPage,
    getItemProps
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "total",
    "value",
    "defaultValue",
    "onChange",
    "disabled",
    "siblings",
    "boundaries",
    "color",
    "radius",
    "onNextPage",
    "onPreviousPage",
    "onFirstPage",
    "onLastPage",
    "getItemProps"
  ]);
  const getStyles = (0, import_core39.useStyles)({
    name: "Pagination",
    classes: Pagination_module_default,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver14
  });
  const { range, setPage, next, previous, active, first, last } = (0, import_hooks19.usePagination)(
    {
      page: value,
      initialPage: defaultValue,
      onChange,
      total,
      siblings,
      boundaries
    }
  );
  const handleNextPage = (0, import_core39.createEventHandler)(onNextPage, next);
  const handlePreviousPage = (0, import_core39.createEventHandler)(onPreviousPage, previous);
  const handleFirstPage = (0, import_core39.createEventHandler)(onFirstPage, first);
  const handleLastPage = (0, import_core39.createEventHandler)(onLastPage, last);
  return /* @__PURE__ */ import_react68.default.createElement(
    PaginationProvider,
    {
      value: {
        total,
        range,
        active,
        disabled,
        getItemProps,
        onChange: setPage,
        onNext: handleNextPage,
        onPrevious: handlePreviousPage,
        onFirst: handleFirstPage,
        onLast: handleLastPage,
        getStyles
      }
    },
    /* @__PURE__ */ import_react68.default.createElement(import_core39.Box, __spreadValues(__spreadValues({ ref }, getStyles("root")), others))
  );
});
PaginationRoot.classes = Pagination_module_default;
PaginationRoot.displayName = "@raikou/core/PaginationRoot";

// ../components/Pagination/src/PaginationControl/PaginationControl.tsx
var import_react69 = __toESM(require("react"));
var import_core40 = require("@raikou/core");
var defaultProps22 = {
  withPadding: true
};
var PaginationControl = (0, import_core40.factory)(
  (_props, ref) => {
    const props = (0, import_core40.useProps)("PaginationControl", defaultProps22, _props);
    const _a = props, {
      classNames,
      className,
      style,
      styles,
      vars,
      active,
      disabled,
      withPadding
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "vars",
      "active",
      "disabled",
      "withPadding"
    ]);
    const ctx = usePaginationContext();
    const _disabled = disabled || ctx.disabled;
    return /* @__PURE__ */ import_react69.default.createElement(
      UnstyledButton,
      __spreadValues(__spreadValues({
        ref,
        disabled: _disabled,
        mod: { active, disabled: _disabled, "with-padding": withPadding }
      }, ctx.getStyles("control", {
        className,
        style,
        classNames,
        styles,
        active: !_disabled
      })), others)
    );
  }
);
PaginationControl.displayName = "@raikou/core/PaginationControl";

// ../components/Pagination/src/PaginationDots/PaginationDots.tsx
var import_react71 = __toESM(require("react"));
var import_core41 = require("@raikou/core");

// ../components/Pagination/src/Pagination.icons.tsx
var import_react70 = __toESM(require("react"));
function PaginationIcon(_a) {
  var _b = _a, { style, children, path } = _b, others = __objRest(_b, ["style", "children", "path"]);
  return /* @__PURE__ */ import_react70.default.createElement(
    "svg",
    __spreadValues({
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      style: __spreadValues({
        width: "calc(var(--pagination-control-size) / 1.8)",
        height: "calc(var(--pagination-control-size) / 1.8)"
      }, style)
    }, others),
    /* @__PURE__ */ import_react70.default.createElement("path", { d: path, fill: "currentColor" })
  );
}
var PaginationNextIcon = (props) => /* @__PURE__ */ import_react70.default.createElement(
  PaginationIcon,
  __spreadProps(__spreadValues({}, props), {
    path: "M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z"
  })
);
var PaginationPreviousIcon = (props) => /* @__PURE__ */ import_react70.default.createElement(
  PaginationIcon,
  __spreadProps(__spreadValues({}, props), {
    path: "M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z"
  })
);
var PaginationFirstIcon = (props) => /* @__PURE__ */ import_react70.default.createElement(
  PaginationIcon,
  __spreadProps(__spreadValues({}, props), {
    path: "M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"
  })
);
var PaginationLastIcon = (props) => /* @__PURE__ */ import_react70.default.createElement(
  PaginationIcon,
  __spreadProps(__spreadValues({}, props), {
    path: "M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
  })
);
var PaginationDotsIcon = (props) => /* @__PURE__ */ import_react70.default.createElement(
  PaginationIcon,
  __spreadProps(__spreadValues({}, props), {
    path: "M2 8c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333C2.6 9.333 2 8.733 2 8zm9.333 0c0-.733.6-1.333 1.334-1.333C13.4 6.667 14 7.267 14 8s-.6 1.333-1.333 1.333c-.734 0-1.334-.6-1.334-1.333zM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8z"
  })
);

// ../components/Pagination/src/PaginationDots/PaginationDots.tsx
var defaultProps23 = {
  icon: PaginationDotsIcon
};
var PaginationDots = (0, import_core41.factory)((_props, ref) => {
  const props = (0, import_core41.useProps)("PaginationDots", defaultProps23, _props);
  const _a = props, { classNames, className, style, styles, vars, icon } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars", "icon"]);
  const ctx = usePaginationContext();
  const Icon = icon;
  return /* @__PURE__ */ import_react71.default.createElement(
    import_core41.Box,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("dots", { className, style, styles, classNames })), others),
    /* @__PURE__ */ import_react71.default.createElement(
      Icon,
      {
        style: {
          width: "calc(var(--pagination-control-size) / 1.8)",
          height: "calc(var(--pagination-control-size) / 1.8)"
        }
      }
    )
  );
});
PaginationDots.displayName = "@raikou/core/PaginationDots";

// ../components/Pagination/src/PaginationEdges/PaginationEdges.tsx
var import_react72 = __toESM(require("react"));
var import_core42 = require("@raikou/core");
function createEdgeComponent({
  icon,
  name,
  action,
  type
}) {
  const defaultProps36 = { icon };
  const Component = (0, import_react72.forwardRef)(
    (props, ref) => {
      const _a = (0, import_core42.useProps)(name, defaultProps36, props), { icon: _icon } = _a, others = __objRest(_a, ["icon"]);
      const Icon = _icon;
      const ctx = usePaginationContext();
      const disabled = type === "next" ? ctx.active === ctx.total : ctx.active === 1;
      return /* @__PURE__ */ import_react72.default.createElement(
        PaginationControl,
        __spreadValues({
          disabled: ctx.disabled || disabled,
          ref,
          onClick: ctx[action],
          withPadding: false
        }, others),
        /* @__PURE__ */ import_react72.default.createElement(
          Icon,
          {
            style: {
              width: "calc(var(--pagination-control-size) / 1.8)",
              height: "calc(var(--pagination-control-size) / 1.8)"
            }
          }
        )
      );
    }
  );
  Component.displayName = `@raikou/core/${name}`;
  return (0, import_core42.createPolymorphicComponent)(Component);
}
var PaginationNext = createEdgeComponent({
  icon: PaginationNextIcon,
  name: "PaginationNext",
  action: "onNext",
  type: "next"
});
var PaginationPrevious = createEdgeComponent({
  icon: PaginationPreviousIcon,
  name: "PaginationPrevious",
  action: "onPrevious",
  type: "previous"
});
var PaginationFirst = createEdgeComponent({
  icon: PaginationFirstIcon,
  name: "PaginationFirst",
  action: "onFirst",
  type: "previous"
});
var PaginationLast = createEdgeComponent({
  icon: PaginationLastIcon,
  name: "PaginationLast",
  action: "onLast",
  type: "next"
});

// ../components/Pagination/src/PaginationItems/PaginationItems.tsx
var import_react73 = __toESM(require("react"));
function PaginationItems({ dotsIcon }) {
  const ctx = usePaginationContext();
  const items = ctx.range.map((page, index3) => {
    var _a;
    if (page === "dots") {
      return /* @__PURE__ */ import_react73.default.createElement(PaginationDots, { icon: dotsIcon, key: index3 });
    }
    return /* @__PURE__ */ import_react73.default.createElement(
      PaginationControl,
      __spreadValues({
        key: index3,
        active: page === ctx.active,
        "aria-current": page === ctx.active ? "page" : void 0,
        onClick: () => ctx.onChange(page),
        disabled: ctx.disabled
      }, (_a = ctx.getItemProps) == null ? void 0 : _a.call(ctx, page)),
      page
    );
  });
  return /* @__PURE__ */ import_react73.default.createElement(import_react73.default.Fragment, null, items);
}
PaginationItems.displayName = "@raikou/core/PaginationItems";

// ../components/Pagination/src/Pagination.tsx
var defaultProps24 = {
  withControls: true,
  siblings: 1,
  boundaries: 1,
  gap: 8
};
var Pagination = (0, import_core43.factory)((_props, ref) => {
  const props = (0, import_core43.useProps)("Pagination", defaultProps24, _props);
  const _a = props, {
    withEdges,
    withControls,
    getControlProps,
    nextIcon,
    previousIcon,
    lastIcon,
    firstIcon,
    dotsIcon,
    total,
    gap
  } = _a, others = __objRest(_a, [
    "withEdges",
    "withControls",
    "getControlProps",
    "nextIcon",
    "previousIcon",
    "lastIcon",
    "firstIcon",
    "dotsIcon",
    "total",
    "gap"
  ]);
  if (total <= 0) {
    return null;
  }
  return /* @__PURE__ */ import_react74.default.createElement(PaginationRoot, __spreadValues({ ref, total }, others), /* @__PURE__ */ import_react74.default.createElement(Group, { gap }, withEdges && /* @__PURE__ */ import_react74.default.createElement(PaginationFirst, __spreadValues({ icon: firstIcon }, getControlProps == null ? void 0 : getControlProps("first"))), withControls && /* @__PURE__ */ import_react74.default.createElement(
    PaginationPrevious,
    __spreadValues({
      icon: previousIcon
    }, getControlProps == null ? void 0 : getControlProps("previous"))
  ), /* @__PURE__ */ import_react74.default.createElement(PaginationItems, { dotsIcon }), withControls && /* @__PURE__ */ import_react74.default.createElement(PaginationNext, __spreadValues({ icon: nextIcon }, getControlProps == null ? void 0 : getControlProps("next"))), withEdges && /* @__PURE__ */ import_react74.default.createElement(PaginationLast, __spreadValues({ icon: lastIcon }, getControlProps == null ? void 0 : getControlProps("last")))));
});
Pagination.displayName = "@raikou/core/Pagination";
Pagination.Root = PaginationRoot;
Pagination.Control = PaginationControl;
Pagination.Dots = PaginationDots;
Pagination.First = PaginationFirst;
Pagination.Last = PaginationLast;
Pagination.Next = PaginationNext;
Pagination.Previous = PaginationPrevious;
Pagination.Items = PaginationItems;

// src/DataTablePagination.tsx
var import_clsx14 = __toESM(require("clsx"));
var import_react86 = require("react");

// src/DataTablePageSizeSelector.tsx
var import_react84 = __toESM(require("react"));
var import_core53 = require("@raikou/core");

// ../components/Button/src/Button.tsx
var import_react76 = __toESM(require("react"));
var import_core45 = require("@raikou/core");

// ../components/Button/src/ButtonGroup/ButtonGroup.tsx
var import_react75 = __toESM(require("react"));
var import_core44 = require("@raikou/core");
var defaultProps25 = {
  orientation: "horizontal"
};
var varsResolver15 = (0, import_core44.createVarsResolver)(
  (_2, { borderWidth }) => ({
    group: { "--button-border-width": (0, import_core44.rem)(borderWidth) }
  })
);
var ButtonGroup = (0, import_core44.factory)((_props, ref) => {
  const props = (0, import_core44.useProps)("ButtonGroup", defaultProps25, _props);
  const _a = (0, import_core44.useProps)("ButtonGroup", defaultProps25, _props), {
    className,
    style,
    classNames,
    styles,
    unstyled,
    orientation,
    vars,
    borderWidth,
    variant
  } = _a, others = __objRest(_a, [
    "className",
    "style",
    "classNames",
    "styles",
    "unstyled",
    "orientation",
    "vars",
    "borderWidth",
    "variant"
  ]);
  const getStyles = (0, import_core44.useStyles)({
    name: "ButtonGroup",
    props,
    classes: {
      group: "buttonGroup-group"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver15,
    rootSelector: "group"
  });
  return /* @__PURE__ */ import_react75.default.createElement(
    import_core44.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("group")), {
      ref,
      variant,
      mod: { "data-orientation": orientation },
      role: "group"
    }), others)
  );
});
ButtonGroup.displayName = "@raikou/core/ButtonGroup";

// css-module:./Button.module.css#css-module
var Button_module_default = { "root": "m-77c9d27d", "inner": "m-80f1301b", "label": "m-811560b9", "section": "m-a74036a", "loader": "m-a25b86ee", "group": "m-80d6d844" };

// ../components/Button/src/Button.tsx
var defaultProps26 = {
  loaderPosition: "left"
};
var varsResolver16 = (0, import_core45.createVarsResolver)(
  (theme, { radius, color, gradient, variant, size: size2, justify }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled"
    });
    return {
      root: {
        "--button-justify": justify,
        "--button-height": (0, import_core45.getSize)(size2, "button-height"),
        "--button-padding-x": (0, import_core45.getSize)(size2, "button-padding-x"),
        "--button-fz": (size2 == null ? void 0 : size2.includes("compact")) ? (0, import_core45.getFontSize)(size2.replace("compact-", "")) : (0, import_core45.getFontSize)(size2),
        "--button-radius": radius ? (0, import_core45.getRadius)(radius) : void 0,
        "--button-bg": color || variant ? colors.background : void 0,
        "--button-hover": color || variant ? colors.hover : void 0,
        "--button-color": color || variant ? colors.color : void 0,
        "--button-bd": color || variant ? colors.border : void 0
      }
    };
  }
);
var Button = (0, import_core45.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core45.useProps)("Button", defaultProps26, _props);
  const _a = props, {
    style,
    vars,
    className,
    color,
    disabled,
    children,
    leftSection,
    rightSection,
    fullWidth,
    variant,
    radius,
    loading,
    loaderPosition,
    loaderProps,
    gradient,
    classNames,
    styles,
    unstyled,
    "data-disabled": dataDisabled
  } = _a, others = __objRest(_a, [
    "style",
    "vars",
    "className",
    "color",
    "disabled",
    "children",
    "leftSection",
    "rightSection",
    "fullWidth",
    "variant",
    "radius",
    "loading",
    "loaderPosition",
    "loaderProps",
    "gradient",
    "classNames",
    "styles",
    "unstyled",
    "data-disabled"
  ]);
  const getStyles = (0, import_core45.useStyles)({
    name: "Button",
    props,
    classes: Button_module_default,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver16
  });
  const hasLeftSection = !!leftSection;
  const hasRightSection = !!rightSection;
  return /* @__PURE__ */ import_react76.default.createElement(
    UnstyledButton,
    __spreadValues(__spreadProps(__spreadValues({
      ref
    }, getStyles("root", { active: !disabled && !loading && !dataDisabled })), {
      unstyled,
      variant,
      disabled: disabled || loading,
      mod: [
        "button",
        {
          disabled: disabled || dataDisabled,
          loading,
          block: fullWidth,
          "with-left-section": hasLeftSection,
          "with-right-section": hasRightSection
        }
      ]
    }), others),
    /* @__PURE__ */ import_react76.default.createElement("span", __spreadValues({}, getStyles("inner")), !loading && leftSection && /* @__PURE__ */ import_react76.default.createElement(
      import_core45.Box,
      __spreadProps(__spreadValues({
        component: "span"
      }, getStyles("section")), {
        mod: { position: "left" }
      }),
      leftSection
    ), loading && loaderPosition === "left" && /* @__PURE__ */ import_react76.default.createElement(
      import_core45.Box,
      __spreadProps(__spreadValues({
        component: "span"
      }, getStyles("section")), {
        mod: { position: "left" }
      }),
      !loading && leftSection,
      loading && /* @__PURE__ */ import_react76.default.createElement(
        Loader,
        __spreadValues({
          type: "progress",
          color: "var(--button-color)",
          size: "calc(var(--button-height) / 2.4)"
        }, loaderProps)
      )
    ), loading && loaderPosition === "center" && /* @__PURE__ */ import_react76.default.createElement(import_core45.Box, __spreadValues({ component: "span" }, getStyles("loader")), /* @__PURE__ */ import_react76.default.createElement(
      Loader,
      __spreadValues({
        color: "var(--button-color)",
        size: "calc(var(--button-height) / 1.8)"
      }, loaderProps)
    )), /* @__PURE__ */ import_react76.default.createElement(import_core45.Box, __spreadValues({ component: "span", mod: { loading } }, getStyles("label")), children), rightSection && /* @__PURE__ */ import_react76.default.createElement(
      import_core45.Box,
      __spreadProps(__spreadValues({
        component: "span"
      }, getStyles("section")), {
        mod: { position: "right" }
      }),
      rightSection
    ))
  );
});
Button.displayName = "@raikou/core/Button";
Button.Group = ButtonGroup;
Button.classes = Button_module_default;

// ../components/Menu/src/Menu.tsx
var import_react82 = __toESM(require("react"));
var import_hooks21 = require("@raikou/hooks");
var import_core51 = require("@raikou/core");

// ../components/Menu/src/MenuDivider/MenuDivider.tsx
var import_react77 = __toESM(require("react"));
var import_core46 = require("@raikou/core");

// ../components/Menu/src/Menu.context.ts
var [MenuContextProvider, useMenuContext] = createSafeContext("Menu component was not found in the tree");

// css-module:../Menu.module.css#css-module
var Menu_module_default = { "dropdown": "m-dc9b7c9f", "label": "m-9bfac126", "divider": "m-efdf90cb", "item": "m-99ac2aa1", "itemLabel": "m-5476e0d3", "itemSection": "m-8b75e504" };

// ../components/Menu/src/MenuDivider/MenuDivider.tsx
var defaultProps27 = {};
var MenuDivider = (0, import_core46.factory)((props, ref) => {
  const _a = (0, import_core46.useProps)(
    "MenuDivider",
    defaultProps27,
    props
  ), { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useMenuContext();
  return /* @__PURE__ */ import_react77.default.createElement(
    import_core46.Box,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("divider", { className, style, styles, classNames })), others)
  );
});
MenuDivider.classes = Menu_module_default;
MenuDivider.displayName = "@raikou/core/MenuDivider";

// ../components/Menu/src/MenuDropdown/MenuDropdown.tsx
var import_react78 = __toESM(require("react"));
var import_core47 = require("@raikou/core");
var defaultProps28 = {};
var MenuDropdown = (0, import_core47.factory)((props, ref) => {
  const _a = (0, import_core47.useProps)("MenuDropdown", defaultProps28, props), {
    classNames,
    className,
    style,
    styles,
    vars,
    onMouseEnter,
    onMouseLeave,
    children
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "vars",
    "onMouseEnter",
    "onMouseLeave",
    "children"
  ]);
  const wrapperRef = (0, import_react78.useRef)(null);
  const ctx = useMenuContext();
  const handleKeyDown = (event) => {
    var _a2, _b;
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
      (_b = (_a2 = wrapperRef.current) == null ? void 0 : _a2.querySelectorAll(
        "[data-menu-item]:not(:disabled)"
      )[0]) == null ? void 0 : _b.focus();
    }
  };
  const handleMouseEnter = (0, import_core47.createEventHandler)(
    onMouseEnter,
    () => ctx.trigger === "hover" && ctx.openDropdown()
  );
  const handleMouseLeave = (0, import_core47.createEventHandler)(
    onMouseLeave,
    () => ctx.trigger === "hover" && ctx.closeDropdown()
  );
  return /* @__PURE__ */ import_react78.default.createElement(
    Popover.Dropdown,
    __spreadValues(__spreadProps(__spreadValues({}, others), {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      role: "menu",
      "aria-orientation": "vertical",
      ref
    }), ctx.getStyles("dropdown", { className, style, styles, classNames })),
    /* @__PURE__ */ import_react78.default.createElement(
      "div",
      {
        tabIndex: -1,
        "data-menu-dropdown": true,
        "data-autofocus": true,
        onKeyDown: handleKeyDown,
        ref: wrapperRef,
        style: { outline: 0 }
      },
      children
    )
  );
});
MenuDropdown.classes = Menu_module_default;
MenuDropdown.displayName = "@raikou/core/MenuDropdown";

// ../components/Menu/src/MenuItem/MenuItem.tsx
var import_react79 = __toESM(require("react"));
var import_hooks20 = require("@raikou/hooks");
var import_core48 = require("@raikou/core");
var defaultProps29 = {};
var MenuItem = (0, import_core48.polymorphicFactory)((props, ref) => {
  const _a = (0, import_core48.useProps)("MenuItem", defaultProps29, props), {
    classNames,
    className,
    style,
    styles,
    vars,
    color,
    closeMenuOnClick,
    leftSection,
    rightSection,
    children,
    disabled
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "vars",
    "color",
    "closeMenuOnClick",
    "leftSection",
    "rightSection",
    "children",
    "disabled"
  ]);
  const ctx = useMenuContext();
  const theme = (0, import_core48.useRaikouTheme)();
  const { dir } = (0, import_core48.useDirection)();
  const itemRef = (0, import_react79.useRef)();
  const itemIndex = ctx.getItemIndex(itemRef.current);
  const _others = others;
  const handleMouseLeave = (0, import_core48.createEventHandler)(
    _others.onMouseLeave,
    () => ctx.setHovered(-1)
  );
  const handleMouseEnter = (0, import_core48.createEventHandler)(
    _others.onMouseEnter,
    () => ctx.setHovered(ctx.getItemIndex(itemRef.current))
  );
  const handleClick = (0, import_core48.createEventHandler)(_others.onClick, () => {
    if (typeof closeMenuOnClick === "boolean") {
      closeMenuOnClick && ctx.closeDropdownImmediately();
    } else {
      ctx.closeOnItemClick && ctx.closeDropdownImmediately();
    }
  });
  const handleFocus = (0, import_core48.createEventHandler)(
    _others.onFocus,
    () => ctx.setHovered(ctx.getItemIndex(itemRef.current))
  );
  const colors = color ? theme.variantColorResolver({ color, theme, variant: "light" }) : void 0;
  return /* @__PURE__ */ import_react79.default.createElement(
    UnstyledButton,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, others), {
      tabIndex: -1,
      onFocus: handleFocus
    }), ctx.getStyles("item", { className, style, styles, classNames })), {
      ref: (0, import_hooks20.useMergedRef)(itemRef, ref),
      role: "menuitem",
      disabled,
      "data-menu-item": true,
      "data-disabled": disabled || void 0,
      "data-hovered": ctx.hovered === itemIndex ? true : void 0,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onClick: handleClick,
      onKeyDown: (0, import_core48.createScopedKeydownHandler)({
        siblingSelector: "[data-menu-item]",
        parentSelector: "[data-menu-dropdown]",
        activateOnFocus: false,
        loop: ctx.loop,
        dir,
        orientation: "vertical",
        onKeyDown: _others.onKeydown
      }),
      __vars: {
        "--menu-item-color": colors == null ? void 0 : colors.color,
        "--menu-item-hover": colors == null ? void 0 : colors.hover
      }
    }),
    leftSection && /* @__PURE__ */ import_react79.default.createElement(
      "div",
      __spreadProps(__spreadValues({}, ctx.getStyles("itemSection", { styles, classNames })), {
        "data-position": "left"
      }),
      leftSection
    ),
    children && /* @__PURE__ */ import_react79.default.createElement("div", __spreadValues({}, ctx.getStyles("itemLabel", { styles, classNames })), children),
    rightSection && /* @__PURE__ */ import_react79.default.createElement(
      "div",
      __spreadProps(__spreadValues({}, ctx.getStyles("itemSection", { styles, classNames })), {
        "data-position": "right"
      }),
      rightSection
    )
  );
});
MenuItem.classes = Menu_module_default;
MenuItem.displayName = "@raikou/core/MenuItem";

// ../components/Menu/src/MenuLabel/MenuLabel.tsx
var import_react80 = __toESM(require("react"));
var import_core49 = require("@raikou/core");
var defaultProps30 = {};
var MenuLabel = (0, import_core49.factory)((props, ref) => {
  const _a = (0, import_core49.useProps)(
    "MenuLabel",
    defaultProps30,
    props
  ), { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useMenuContext();
  return /* @__PURE__ */ import_react80.default.createElement(
    import_core49.Box,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("label", { className, style, styles, classNames })), others)
  );
});
MenuLabel.classes = Menu_module_default;
MenuLabel.displayName = "@raikou/core/MenuLabel";

// ../components/Menu/src/MenuTarget/MenuTarget.tsx
var import_react81 = __toESM(require("react"));
var import_core50 = require("@raikou/core");
var defaultProps31 = {
  refProp: "ref"
};
var MenuTarget = (0, import_react81.forwardRef)(
  (props, ref) => {
    const _a = (0, import_core50.useProps)(
      "MenuTarget",
      defaultProps31,
      props
    ), { children, refProp } = _a, others = __objRest(_a, ["children", "refProp"]);
    if (!(0, import_core50.isElement)(children)) {
      throw new Error(
        "Menu.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
      );
    }
    const ctx = useMenuContext();
    const onClick = (0, import_core50.createEventHandler)(
      children.props.onClick,
      () => ctx.trigger === "click" && ctx.toggleDropdown()
    );
    const onMouseEnter = (0, import_core50.createEventHandler)(
      children.props.onMouseEnter,
      () => ctx.trigger === "hover" && ctx.openDropdown()
    );
    const onMouseLeave = (0, import_core50.createEventHandler)(
      children.props.onMouseLeave,
      () => ctx.trigger === "hover" && ctx.closeDropdown()
    );
    return /* @__PURE__ */ import_react81.default.createElement(Popover.Target, __spreadValues({ refProp, popupType: "menu", ref }, others), (0, import_react81.cloneElement)(children, {
      onClick,
      onMouseEnter,
      onMouseLeave,
      "data-expanded": ctx.opened ? true : void 0
    }));
  }
);
MenuTarget.displayName = "@raikou/core/MenuTarget";

// css-module:./Menu.module.css#css-module
var Menu_module_default2 = { "dropdown": "m-dc9b7c9f", "label": "m-9bfac126", "divider": "m-efdf90cb", "item": "m-99ac2aa1", "itemLabel": "m-5476e0d3", "itemSection": "m-8b75e504" };

// ../components/Menu/src/Menu.tsx
var defaultProps32 = {
  closeOnItemClick: true,
  loop: true,
  trigger: "click",
  openDelay: 0,
  closeDelay: 100
};
function Menu(_props) {
  const props = (0, import_core51.useProps)("Menu", defaultProps32, _props);
  const _a = props, {
    children,
    onOpen,
    onClose,
    opened,
    defaultOpened,
    onChange,
    closeOnItemClick,
    loop,
    closeOnEscape: closeOnEscape2,
    trigger,
    openDelay,
    closeDelay,
    classNames,
    styles,
    unstyled,
    variant,
    vars
  } = _a, others = __objRest(_a, [
    "children",
    "onOpen",
    "onClose",
    "opened",
    "defaultOpened",
    "onChange",
    "closeOnItemClick",
    "loop",
    "closeOnEscape",
    "trigger",
    "openDelay",
    "closeDelay",
    "classNames",
    "styles",
    "unstyled",
    "variant",
    "vars"
  ]);
  const getStyles = (0, import_core51.useStyles)({
    name: "Menu",
    classes: Menu_module_default2,
    props,
    classNames,
    styles,
    unstyled
  });
  const [hovered, { setHovered, resetHovered }] = useHovered();
  const [_opened, setOpened] = (0, import_hooks21.useUncontrolled)({
    value: opened,
    defaultValue: defaultOpened,
    finalValue: false,
    onChange
  });
  const close = () => {
    setOpened(false);
    _opened && (onClose == null ? void 0 : onClose());
  };
  const open = () => {
    setOpened(true);
    !_opened && (onOpen == null ? void 0 : onOpen());
  };
  const toggleDropdown = () => _opened ? close() : open();
  const { openDropdown, closeDropdown } = useDelayedHover({
    open,
    close,
    closeDelay,
    openDelay
  });
  const getItemIndex = (node) => getContextItemIndex("[data-menu-item]", "[data-menu-dropdown]", node);
  const { resolvedClassNames, resolvedStyles } = (0, import_core51.useResolvedStylesApi)({
    classNames,
    styles,
    props
  });
  (0, import_hooks21.useDidUpdate)(() => {
    resetHovered();
  }, [_opened]);
  return /* @__PURE__ */ import_react82.default.createElement(
    MenuContextProvider,
    {
      value: {
        getStyles,
        opened: _opened,
        toggleDropdown,
        getItemIndex,
        hovered,
        setHovered,
        closeOnItemClick,
        closeDropdown: trigger === "click" ? close : closeDropdown,
        openDropdown: trigger === "click" ? open : openDropdown,
        closeDropdownImmediately: close,
        loop,
        trigger
      }
    },
    /* @__PURE__ */ import_react82.default.createElement(
      Popover,
      __spreadProps(__spreadValues({}, others), {
        opened: _opened,
        onChange: toggleDropdown,
        defaultOpened,
        trapFocus: trigger === "click",
        closeOnEscape: closeOnEscape2 && trigger === "click",
        __staticSelector: "Menu",
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled,
        variant
      }),
      children
    )
  );
}
Menu.extend = (input) => input;
Menu.displayName = "@raikou/core/Menu";
Menu.Item = MenuItem;
Menu.Label = MenuLabel;
Menu.Dropdown = MenuDropdown;
Menu.Target = MenuTarget;
Menu.Divider = MenuDivider;

// src/DataTablePageSizeSelector.tsx
var import_clsx13 = __toESM(require("clsx"));

// src/cssVariables.ts
var import_core52 = require("@raikou/core");
function getColor(color, theme, colorScheme) {
  return color ? (0, import_core52.parseThemeColor)({
    color: typeof color === "object" ? color[colorScheme] : color,
    theme
  }).value : void 0;
}
function getTableCssVariables({
  theme,
  c: c2,
  backgroundColor,
  borderColor,
  rowBorderColor,
  stripedColor,
  highlightOnHoverColor
}) {
  return {
    "--raikou-datatable-color-light": getColor(c2, theme, "light"),
    "--raikou-datatable-color-dark": getColor(c2, theme, "dark"),
    "--raikou-datatable-background-color-light": getColor(
      backgroundColor,
      theme,
      "light"
    ),
    "--raikou-datatable-background-color-dark": getColor(
      backgroundColor,
      theme,
      "dark"
    ),
    "--raikou-datatable-border-color-light": "#dee2e6",
    "--raikou-datatable-border-color-dark": "#373a40",
    "--raikou-datatable-row-border-color-light": getColor(
      rowBorderColor,
      theme,
      "light"
    ),
    "--raikou-datatable-row-border-color-dark": getColor(
      rowBorderColor,
      theme,
      "dark"
    ),
    "--raikou-datatable-striped-color-light": "#f8f9fa",
    "--raikou-datatable-striped-color-dark": "#25262b",
    "--raikou-datatable-highlight-on-hover-color-light": "#f1f3f5",
    "--raikou-datatable-highlight-on-hover-color-dark": "#2c2e33"
  };
}
function getPaginationCssVariables({
  theme,
  paginationActiveTextColor,
  paginationActiveBackgroundColor
}) {
  return {
    "--raikou-datatable-pagination-active-text-color-light": getColor(
      paginationActiveTextColor,
      theme,
      "light"
    ),
    "--raikou-datatable-pagination-active-text-color-dark": getColor(
      paginationActiveTextColor,
      theme,
      "dark"
    ),
    "--raikou-datatable-pagination-active-background-color-light": getColor(
      paginationActiveBackgroundColor,
      theme,
      "light"
    ),
    "--raikou-datatable-pagination-active-background-color-dark": getColor(
      paginationActiveBackgroundColor,
      theme,
      "dark"
    )
  };
}
function getRowCssVariables({
  theme,
  color,
  backgroundColor
}) {
  return {
    "--raikou-datatable-row-color-light": getColor(color, theme, "light"),
    "--raikou-datatable-row-color-dark": getColor(color, theme, "dark"),
    "--raikou-datatable-row-background-color-light": getColor(
      backgroundColor,
      theme,
      "light"
    ),
    "--raikou-datatable-row-background-color-dark": getColor(
      backgroundColor,
      theme,
      "dark"
    )
  };
}

// src/icons/IconSelector.tsx
var import_react83 = __toESM(require("react"));
function IconSelector() {
  return /* @__PURE__ */ import_react83.default.createElement(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    /* @__PURE__ */ import_react83.default.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ import_react83.default.createElement("path", { d: "M8 9l4 -4l4 4" }),
    /* @__PURE__ */ import_react83.default.createElement("path", { d: "M16 15l-4 4l-4 -4" })
  );
}

// css-module:./DataTablePageSizeSelector.module.css#css-module
var DataTablePageSizeSelector_module_default = { "mantine-datatable-page-size-selector-button-icon": "m-ca992e1e", "mantine-datatable-page-size-selector-active": "m-cf8b6cdc" };

// src/DataTablePageSizeSelector.tsx
var HEIGHT = {
  xs: (0, import_core53.rem)(22),
  sm: (0, import_core53.rem)(26),
  md: (0, import_core53.rem)(32),
  lg: (0, import_core53.rem)(38),
  xl: (0, import_core53.rem)(44)
};
function DataTablePageSizeSelector({
  size: size2,
  label,
  values,
  value,
  activeTextColor,
  activeBackgroundColor,
  onChange
}) {
  return /* @__PURE__ */ import_react84.default.createElement(Group, { gap: "xs" }, /* @__PURE__ */ import_react84.default.createElement(Text, { size: size2 }, label), /* @__PURE__ */ import_react84.default.createElement(Menu, { withinPortal: true, withArrow: true }, /* @__PURE__ */ import_react84.default.createElement(MenuTarget, null, /* @__PURE__ */ import_react84.default.createElement(
    Button,
    {
      size: size2,
      variant: "default",
      classNames: {
        section: DataTablePageSizeSelector_module_default["mantine-datatable-page-size-selector-button-icon"]
      },
      rightSection: /* @__PURE__ */ import_react84.default.createElement(IconSelector, null),
      style: [
        { fontWeight: "normal" },
        (theme) => ({
          height: HEIGHT[size2],
          paddingLeft: theme.spacing[size2],
          paddingRight: theme.spacing[size2]
        })
      ]
    },
    value
  )), /* @__PURE__ */ import_react84.default.createElement(MenuDropdown, null, values.map((v2) => {
    const isCurrent = v2 === value;
    return /* @__PURE__ */ import_react84.default.createElement(
      MenuItem,
      {
        key: v2,
        className: (0, import_clsx13.default)({
          "mantine-datatable-page-size-selector-active": isCurrent
        }),
        style: [
          { height: HEIGHT[size2] },
          isCurrent && (activeTextColor || activeBackgroundColor) ? (theme) => getPaginationCssVariables({
            theme,
            paginationActiveTextColor: activeTextColor,
            paginationActiveBackgroundColor: activeBackgroundColor
          }) : void 0
        ],
        disabled: isCurrent,
        onClick: () => onChange(v2)
      },
      /* @__PURE__ */ import_react84.default.createElement(Text, { size: size2 }, v2)
    );
  }))));
}

// css-module:./DataTablePagination.module.css#css-module
var DataTablePagination_module_default = { "mantine-datatable-pagination": "m-d9815d59", "mantine-datatable-pagination-text": "m-3c607921", "mantine-datatable-pagination-pages": "m-4f743a50", "mantine-datatable-pagination-pages-fetching": "m-ebcb41c5", "mantine-datatable-pagination-pages-control": "m-ed4932e0" };

// src/DataTablePagination.tsx
var DataTablePagination = (0, import_react86.forwardRef)(function DataTablePagination2({
  className,
  style,
  fetching,
  page,
  onPageChange,
  paginationWithEdges,
  paginationActiveTextColor,
  paginationActiveBackgroundColor,
  paginationSize,
  loadingText,
  noRecordsText,
  paginationText,
  totalRecords,
  recordsPerPage,
  onRecordsPerPageChange,
  recordsPerPageLabel,
  recordsPerPageOptions,
  recordsLength,
  horizontalSpacing,
  paginationWrapBreakpoint,
  getPaginationControlProps
}, ref) {
  let paginationTextValue;
  if (fetching) {
    paginationTextValue = loadingText;
  } else if (!totalRecords) {
    paginationTextValue = noRecordsText;
  } else {
    const from = (page - 1) * recordsPerPage + 1;
    const to = from + recordsLength - 1;
    paginationTextValue = paginationText({ from, to, totalRecords });
  }
  const isAbovePaginationWrapBreakpoint = useMediaQueryStringOrFunction(
    ({ breakpoints }) => `(min-width: ${typeof paginationWrapBreakpoint === "number" ? `${(0, import_core54.rem)(paginationWrapBreakpoint)}rem` : breakpoints[paginationWrapBreakpoint] || paginationWrapBreakpoint})`
  );
  return /* @__PURE__ */ import_react85.default.createElement(
    import_core54.Box,
    {
      ref,
      px: horizontalSpacing != null ? horizontalSpacing : "xs",
      py: "xs",
      className: (0, import_clsx14.default)(DataTablePagination_module_default["mantine-datatable-pagination"], className),
      style: [
        { flexDirection: isAbovePaginationWrapBreakpoint ? "row" : "column" },
        style
      ]
    },
    /* @__PURE__ */ import_react85.default.createElement(
      Text,
      {
        className: DataTablePagination_module_default["mantine-datatable-pagination-text"],
        size: paginationSize
      },
      paginationTextValue
    ),
    recordsPerPageOptions && /* @__PURE__ */ import_react85.default.createElement(
      DataTablePageSizeSelector,
      {
        activeTextColor: paginationActiveTextColor,
        activeBackgroundColor: paginationActiveBackgroundColor,
        size: paginationSize,
        label: recordsPerPageLabel,
        values: recordsPerPageOptions,
        value: recordsPerPage,
        onChange: onRecordsPerPageChange
      }
    ),
    /* @__PURE__ */ import_react85.default.createElement(
      Pagination,
      {
        classNames: {
          root: (0, import_clsx14.default)(DataTablePagination_module_default["mantine-datatable-pagination-pages"], {
            "mantine-datatable-pagination-pages-fetching": fetching || !recordsLength
          }),
          control: DataTablePagination_module_default["mantine-datatable-pagination-pages-control"]
        },
        style: paginationActiveTextColor || paginationActiveBackgroundColor ? (theme) => getPaginationCssVariables({
          theme,
          paginationActiveTextColor,
          paginationActiveBackgroundColor
        }) : void 0,
        withEdges: paginationWithEdges,
        value: page,
        onChange: onPageChange,
        size: paginationSize,
        total: Math.ceil(totalRecords / recordsPerPage),
        getControlProps: getPaginationControlProps
      }
    )
  );
});

// src/DataTableRow.tsx
var import_react92 = __toESM(require("react"));
var import_clsx17 = __toESM(require("clsx"));

// src/DataTableRowCell.tsx
var import_react87 = __toESM(require("react"));
var import_clsx15 = __toESM(require("clsx"));
function DataTableRowCell({
  className,
  style,
  visibleMediaQuery,
  record,
  index: index3,
  onClick,
  onContextMenu,
  noWrap,
  ellipsis,
  textAlign,
  width,
  accessor,
  render,
  defaultRender,
  customCellAttributes
}) {
  if (!useMediaQueryStringOrFunction(visibleMediaQuery))
    return null;
  return /* @__PURE__ */ import_react87.default.createElement(
    TableTd,
    __spreadValues({
      className: (0, import_clsx15.default)(
        {
          [NOWRAP]: noWrap || ellipsis,
          [ELLIPSIS]: ellipsis,
          [POINTER_CURSOR]: onClick,
          [TEXT_ALIGN_LEFT]: textAlign === "left",
          [TEXT_ALIGN_CENTER]: textAlign === "center",
          [TEXT_ALIGN_RIGHT]: textAlign === "right"
        },
        className
      ),
      style: [
        {
          width,
          minWidth: width,
          maxWidth: width
        },
        style
      ],
      onClick,
      onContextMenu
    }, customCellAttributes == null ? void 0 : customCellAttributes(record, index3)),
    render ? render(record, index3) : defaultRender ? defaultRender(record, index3, accessor) : getValueAtPath(record, accessor)
  );
}

// src/DataTableRowExpansion.tsx
var import_react90 = __toESM(require("react"));

// ../components/Collapse/src/Collapse.tsx
var import_react89 = __toESM(require("react"));
var import_hooks25 = require("@raikou/hooks");
var import_core55 = require("@raikou/core");

// ../components/Collapse/src/use-collapse.ts
var import_react88 = require("react");
var import_react_dom5 = require("react-dom");
var import_hooks24 = require("@raikou/hooks");
function getAutoHeightDuration(height) {
  if (!height || typeof height === "string") {
    return 0;
  }
  const constant = height / 36;
  return Math.round((4 + 15 * __pow(constant, 0.25) + constant / 5) * 10);
}
function getElementHeight(el) {
  return (el == null ? void 0 : el.current) ? el.current.scrollHeight : "auto";
}
var raf = typeof window !== "undefined" && window.requestAnimationFrame;
function useCollapse({
  transitionDuration,
  transitionTimingFunction = "ease",
  onTransitionEnd = () => {
  },
  opened
}) {
  const el = (0, import_react88.useRef)(null);
  const collapsedHeight = 0;
  const collapsedStyles = {
    display: "none",
    height: 0,
    overflow: "hidden"
  };
  const [styles, setStylesRaw] = (0, import_react88.useState)(
    opened ? {} : collapsedStyles
  );
  const setStyles = (newStyles) => {
    (0, import_react_dom5.flushSync)(() => setStylesRaw(newStyles));
  };
  const mergeStyles = (newStyles) => {
    setStyles((oldStyles) => __spreadValues(__spreadValues({}, oldStyles), newStyles));
  };
  function getTransitionStyles2(height) {
    const _duration = transitionDuration || getAutoHeightDuration(height);
    return {
      transition: `height ${_duration}ms ${transitionTimingFunction}`
    };
  }
  (0, import_hooks24.useDidUpdate)(() => {
    if (typeof raf === "function") {
      if (opened) {
        raf(() => {
          mergeStyles({
            willChange: "height",
            display: "block",
            overflow: "hidden"
          });
          raf(() => {
            const height = getElementHeight(el);
            mergeStyles(__spreadProps(__spreadValues({}, getTransitionStyles2(height)), { height }));
          });
        });
      } else {
        raf(() => {
          const height = getElementHeight(el);
          mergeStyles(__spreadProps(__spreadValues({}, getTransitionStyles2(height)), {
            willChange: "height",
            height
          }));
          raf(
            () => mergeStyles({ height: collapsedHeight, overflow: "hidden" })
          );
        });
      }
    }
  }, [opened]);
  const handleTransitionEnd = (e) => {
    if (e.target !== el.current || e.propertyName !== "height") {
      return;
    }
    if (opened) {
      const height = getElementHeight(el);
      if (height === styles.height) {
        setStyles({});
      } else {
        mergeStyles({ height });
      }
      onTransitionEnd();
    } else if (styles.height === collapsedHeight) {
      setStyles(collapsedStyles);
      onTransitionEnd();
    }
  };
  function getCollapseProps(_a = {}) {
    var _b = _a, {
      style = {},
      refKey = "ref"
    } = _b, rest = __objRest(_b, [
      "style",
      "refKey"
    ]);
    const theirRef = rest[refKey];
    return __spreadProps(__spreadValues({
      "aria-hidden": !opened
    }, rest), {
      [refKey]: (0, import_hooks24.mergeRefs)(el, theirRef),
      onTransitionEnd: handleTransitionEnd,
      style: __spreadValues(__spreadValues({ boxSizing: "border-box" }, style), styles)
    });
  }
  return getCollapseProps;
}

// ../components/Collapse/src/Collapse.tsx
var defaultProps33 = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: true
};
var Collapse = (0, import_react89.forwardRef)(
  (props, ref) => {
    const _a = (0, import_core55.useProps)("Collapse", defaultProps33, props), {
      children,
      in: opened,
      transitionDuration,
      transitionTimingFunction,
      style,
      onTransitionEnd,
      animateOpacity
    } = _a, others = __objRest(_a, [
      "children",
      "in",
      "transitionDuration",
      "transitionTimingFunction",
      "style",
      "onTransitionEnd",
      "animateOpacity"
    ]);
    const theme = (0, import_core55.useRaikouTheme)();
    const shouldReduceMotion = (0, import_hooks25.useReducedMotion)();
    const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
    const duration = reduceMotion ? 0 : transitionDuration;
    const getCollapseProps = useCollapse({
      opened,
      transitionDuration: duration,
      transitionTimingFunction,
      onTransitionEnd
    });
    if (duration === 0) {
      return opened ? /* @__PURE__ */ import_react89.default.createElement(import_core55.Box, __spreadValues({}, others), children) : null;
    }
    return /* @__PURE__ */ import_react89.default.createElement(
      import_core55.Box,
      __spreadValues({}, getCollapseProps(__spreadValues({
        style: (0, import_core55.getStyleObject)(style, theme),
        ref
      }, others))),
      /* @__PURE__ */ import_react89.default.createElement(
        "div",
        {
          style: {
            opacity: opened || !animateOpacity ? 1 : 0,
            transition: animateOpacity ? `opacity ${duration}ms ${transitionTimingFunction}` : "none"
          }
        },
        children
      )
    );
  }
);
Collapse.displayName = "@raikou/core/Collapse";

// css-module:./DataTableRowExpansion.module.css#css-module
var DataTableRowExpansion_module_default = { "mantine-datatable-row-expansion-cell": "m-b1d36037", "mantine-datatable-row-expansion-cell-content": "m-2e7350e3" };

// src/DataTableRowExpansion.tsx
function DataTableRowExpansion({
  open,
  colSpan,
  content,
  collapseProps
}) {
  const { expanded, visible } = useRowExpansionStatus(
    open,
    collapseProps == null ? void 0 : collapseProps.transitionDuration
  );
  return visible ? /* @__PURE__ */ import_react90.default.createElement(import_react90.default.Fragment, null, /* @__PURE__ */ import_react90.default.createElement(TableTr, null), /* @__PURE__ */ import_react90.default.createElement(TableTr, null, /* @__PURE__ */ import_react90.default.createElement(
    TableTd,
    {
      className: DataTableRowExpansion_module_default["mantine-datatable-row-expansion-cell"],
      colSpan
    },
    /* @__PURE__ */ import_react90.default.createElement(Collapse, __spreadValues({ in: expanded }, collapseProps), /* @__PURE__ */ import_react90.default.createElement(
      "div",
      {
        className: DataTableRowExpansion_module_default["mantine-datatable-row-expansion-cell-content"]
      },
      content()
    ))
  ))) : null;
}

// src/DataTableRowSelectorCell.tsx
var import_react91 = __toESM(require("react"));
var import_clsx16 = __toESM(require("clsx"));

// css-module:./DataTableRowSelectorCell.module.css#css-module
var DataTableRowSelectorCell_module_default = { "mantine-datatable-row-selector-cell": "m-faf985f7", "mantine-datatable-row-selector-cell-checkbox": "m-936aded9" };

// src/DataTableRowSelectorCell.tsx
function DataTableRowSelectorCell(_a) {
  var _b = _a, {
    record,
    index: index3,
    trigger,
    onChange,
    withRightShadow,
    getCheckboxProps
  } = _b, otherProps = __objRest(_b, [
    "record",
    "index",
    "trigger",
    "onChange",
    "withRightShadow",
    "getCheckboxProps"
  ]);
  const checkboxProps = getCheckboxProps(record, index3);
  const enabled = !otherProps.disabled && !checkboxProps.disabled;
  const handleClick = (e) => {
    e.stopPropagation();
    if (trigger === "cell" && enabled) {
      onChange == null ? void 0 : onChange(e);
    }
  };
  return /* @__PURE__ */ import_react91.default.createElement(
    TableTd,
    {
      className: (0, import_clsx16.default)(DataTableRowSelectorCell_module_default["mantine-datatable-row-selector-cell"], {
        [POINTER_CURSOR]: trigger === "cell" && enabled
      }),
      "data-shadow-visible": withRightShadow || void 0,
      onClick: handleClick
    },
    /* @__PURE__ */ import_react91.default.createElement(
      Checkbox,
      __spreadValues(__spreadValues({
        classNames: enabled ? { input: POINTER_CURSOR } : void 0,
        onChange
      }, otherProps), checkboxProps)
    )
  );
}

// css-module:./DataTableRow.module.css#css-module
var DataTableRow_module_default = { "mantine-datatable-row": "m-27dd3f33" };

// src/DataTableRow.tsx
function DataTableRow({
  record,
  index: index3,
  columns,
  defaultColumnProps,
  defaultColumnRender,
  selectionTrigger,
  selectionVisible,
  selectionChecked,
  onSelectionChange,
  isRecordSelectable,
  getSelectionCheckboxProps,
  onClick,
  onContextMenu,
  onCellClick,
  onCellContextMenu,
  expansion,
  customAttributes,
  color,
  backgroundColor,
  className,
  style,
  selectorCellShadowVisible
}) {
  return /* @__PURE__ */ import_react92.default.createElement(import_react92.default.Fragment, null, /* @__PURE__ */ import_react92.default.createElement(
    TableTr,
    __spreadValues({
      className: (0, import_clsx17.default)(
        DataTableRow_module_default["mantine-datatable-row"],
        { [POINTER_CURSOR]: onClick || (expansion == null ? void 0 : expansion.expandOnClick) },
        typeof className === "function" ? className(record, index3) : className
      ),
      "data-selected": selectionChecked || void 0,
      onClick: (e) => {
        if (expansion) {
          const { isRowExpanded, expandOnClick, expandRow, collapseRow } = expansion;
          if (expandOnClick) {
            if (isRowExpanded(record)) {
              collapseRow(record);
            } else {
              expandRow(record);
            }
          }
        }
        onClick == null ? void 0 : onClick({ event: e, record, index: index3 });
      },
      onContextMenu: onContextMenu ? (e) => onContextMenu({ event: e, record, index: index3 }) : void 0,
      style: [
        color || backgroundColor ? (theme) => {
          const colorValue = color == null ? void 0 : color(record, index3);
          const backgroundColorValue = backgroundColor == null ? void 0 : backgroundColor(record, index3);
          return getRowCssVariables({
            theme,
            color: colorValue,
            backgroundColor: backgroundColorValue
          });
        } : void 0,
        style == null ? void 0 : style(record, index3)
      ]
    }, customAttributes == null ? void 0 : customAttributes(record, index3)),
    selectionVisible && /* @__PURE__ */ import_react92.default.createElement(
      DataTableRowSelectorCell,
      {
        record,
        index: index3,
        trigger: selectionTrigger,
        withRightShadow: selectorCellShadowVisible,
        checked: selectionChecked,
        disabled: !onSelectionChange || (isRecordSelectable ? !isRecordSelectable(record, index3) : false),
        onChange: onSelectionChange,
        getCheckboxProps: getSelectionCheckboxProps
      }
    ),
    columns.map((_a, columnIndex) => {
      var _b = _a, { hidden } = _b, columnProps = __objRest(_b, ["hidden"]);
      if (hidden)
        return null;
      const {
        accessor,
        visibleMediaQuery,
        textAlign,
        noWrap,
        ellipsis,
        width,
        render,
        cellsClassName,
        cellsStyle,
        customCellAttributes
      } = __spreadValues(__spreadValues({}, defaultColumnProps), columnProps);
      return /* @__PURE__ */ import_react92.default.createElement(
        DataTableRowCell,
        {
          key: accessor,
          className: typeof cellsClassName === "function" ? cellsClassName(record, index3) : cellsClassName,
          style: cellsStyle == null ? void 0 : cellsStyle(record, index3),
          visibleMediaQuery,
          record,
          index: index3,
          onClick: onCellClick ? (event) => onCellClick({
            event,
            record,
            index: index3,
            column: columnProps,
            columnIndex
          }) : void 0,
          onContextMenu: onCellContextMenu ? (event) => onCellContextMenu({
            event,
            record,
            index: index3,
            column: columnProps,
            columnIndex
          }) : void 0,
          accessor,
          textAlign,
          noWrap,
          ellipsis,
          width,
          render,
          defaultRender: defaultColumnRender,
          customCellAttributes
        }
      );
    })
  ), expansion && /* @__PURE__ */ import_react92.default.createElement(
    DataTableRowExpansion,
    {
      colSpan: columns.filter(({ hidden }) => !hidden).length + (selectionVisible ? 1 : 0),
      open: expansion.isRowExpanded(record),
      content: expansion.content({ record, index: index3 }),
      collapseProps: expansion.collapseProps
    }
  ));
}

// src/DataTableScrollArea.tsx
var import_react106 = __toESM(require("react"));
var import_core60 = require("@raikou/core");

// ../components/ScrollArea/src/ScrollArea.tsx
var import_react105 = __toESM(require("react"));
var import_core59 = require("@raikou/core");

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbar.tsx
var import_react100 = __toESM(require("react"));

// ../components/ScrollArea/src/ScrollArea.context.ts
var [ScrollAreaProvider, useScrollAreaContext] = createSafeContext(
  "ScrollArea.Root component was not found in tree"
);

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbarVisible.tsx
var import_react96 = __toESM(require("react"));
var import_core56 = require("@raikou/core");

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollbarX.tsx
var import_react94 = __toESM(require("react"));
var import_hooks29 = require("@raikou/hooks");

// ../components/ScrollArea/src/ScrollAreaScrollbar/Scrollbar.tsx
var import_react93 = __toESM(require("react"));
var import_hooks28 = require("@raikou/hooks");

// ../components/ScrollArea/src/use-resize-observer.ts
var import_hooks27 = require("@raikou/hooks");
function useResizeObserver2(element, onResize) {
  const handleResize = (0, import_hooks27.useCallbackRef)(onResize);
  (0, import_hooks27.useIsomorphicEffect)(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
    return void 0;
  }, [element, handleResize]);
}

// ../components/ScrollArea/src/ScrollAreaScrollbar/Scrollbar.context.ts
var [ScrollbarProvider, useScrollbarContext] = createSafeContext(
  "ScrollAreaScrollbar was not found in tree"
);

// ../components/ScrollArea/src/utils/is-scrolling-within-scrollbar-bounds.ts
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}

// ../components/ScrollArea/src/utils/get-thumb-ratio.tsx
function getThumbRatio(viewportSize, contentSize) {
  const ratio = viewportSize / contentSize;
  return Number.isNaN(ratio) ? 0 : ratio;
}

// ../components/ScrollArea/src/utils/get-thumb-size.tsx
function getThumbSize(sizes) {
  const ratio = getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}

// ../components/ScrollArea/src/utils/compose-event-handlers.ts
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return (event) => {
    originalEventHandler == null ? void 0 : originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      ourEventHandler == null ? void 0 : ourEventHandler(event);
    }
  };
}

// ../components/ScrollArea/src/utils/to-int.ts
function toInt(value) {
  return value ? parseInt(value, 10) : 0;
}

// ../components/ScrollArea/src/utils/linear-scale.ts
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1])
      return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}

// ../components/ScrollArea/src/utils/get-thumb-offset-from-scroll.ts
function clamp(value, [min3, max3]) {
  return Math.min(max3, Math.max(min3, value));
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const scrollbar = sizes.scrollbar.size - scrollbarPadding;
  const maxScrollPos = sizes.content - sizes.viewport;
  const maxThumbPos = scrollbar - thumbSizePx;
  const scrollClampRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const scrollWithoutMomentum = clamp(scrollPos, scrollClampRange);
  const interpolate = linearScale([0, maxScrollPos], [0, maxThumbPos]);
  return interpolate(scrollWithoutMomentum);
}

// ../components/ScrollArea/src/utils/get-scroll-position-from-pointer.ts
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const thumbCenter = thumbSizePx / 2;
  const offset2 = pointerOffset || thumbCenter;
  const thumbOffsetFromEnd = thumbSizePx - offset2;
  const minPointerPos = sizes.scrollbar.paddingStart + offset2;
  const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
  const maxScrollPos = sizes.content - sizes.viewport;
  const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const interpolate = linearScale([minPointerPos, maxPointerPos], scrollRange);
  return interpolate(pointerPos);
}

// ../components/ScrollArea/src/utils/add-unlinked-scroll-listener.tsx
function addUnlinkedScrollListener(node, handler = () => {
}) {
  let prevPosition = { left: node.scrollLeft, top: node.scrollTop };
  let rAF = 0;
  (function loop() {
    const position = { left: node.scrollLeft, top: node.scrollTop };
    const isHorizontalScroll = prevPosition.left !== position.left;
    const isVerticalScroll = prevPosition.top !== position.top;
    if (isHorizontalScroll || isVerticalScroll)
      handler();
    prevPosition = position;
    rAF = window.requestAnimationFrame(loop);
  })();
  return () => window.cancelAnimationFrame(rAF);
}

// ../components/ScrollArea/src/ScrollAreaScrollbar/Scrollbar.tsx
var Scrollbar = (0, import_react93.forwardRef)(
  (props, forwardedRef) => {
    const _a = props, {
      sizes,
      hasThumb,
      onThumbChange,
      onThumbPointerUp,
      onThumbPointerDown,
      onThumbPositionChange,
      onDragScroll,
      onWheelScroll,
      onResize
    } = _a, scrollbarProps = __objRest(_a, [
      "sizes",
      "hasThumb",
      "onThumbChange",
      "onThumbPointerUp",
      "onThumbPointerDown",
      "onThumbPositionChange",
      "onDragScroll",
      "onWheelScroll",
      "onResize"
    ]);
    const context = useScrollAreaContext();
    const [scrollbar, setScrollbar] = import_react93.default.useState(
      null
    );
    const composeRefs = (0, import_hooks28.useMergedRef)(
      forwardedRef,
      (node) => setScrollbar(node)
    );
    const rectRef = import_react93.default.useRef(null);
    const prevWebkitUserSelectRef = import_react93.default.useRef("");
    const { viewport } = context;
    const maxScrollPos = sizes.content - sizes.viewport;
    const handleWheelScroll = (0, import_hooks28.useCallbackRef)(onWheelScroll);
    const handleThumbPositionChange = (0, import_hooks28.useCallbackRef)(onThumbPositionChange);
    const handleResize = (0, import_hooks28.useDebounceCallback)(onResize, 10);
    const handleDragScroll = (event) => {
      if (rectRef.current) {
        const x2 = event.clientX - rectRef.current.left;
        const y2 = event.clientY - rectRef.current.top;
        onDragScroll({ x: x2, y: y2 });
      }
    };
    (0, import_react93.useEffect)(() => {
      const handleWheel = (event) => {
        const element = event.target;
        const isScrollbarWheel = scrollbar == null ? void 0 : scrollbar.contains(element);
        if (isScrollbarWheel)
          handleWheelScroll(event, maxScrollPos);
      };
      document.addEventListener("wheel", handleWheel, { passive: false });
      return () => document.removeEventListener("wheel", handleWheel, {
        passive: false
      });
    }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]);
    (0, import_react93.useEffect)(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
    useResizeObserver2(scrollbar, handleResize);
    useResizeObserver2(context.content, handleResize);
    return /* @__PURE__ */ import_react93.default.createElement(
      ScrollbarProvider,
      {
        value: {
          scrollbar,
          hasThumb,
          onThumbChange: (0, import_hooks28.useCallbackRef)(onThumbChange),
          onThumbPointerUp: (0, import_hooks28.useCallbackRef)(onThumbPointerUp),
          onThumbPositionChange: handleThumbPositionChange,
          onThumbPointerDown: (0, import_hooks28.useCallbackRef)(onThumbPointerDown)
        }
      },
      /* @__PURE__ */ import_react93.default.createElement(
        "div",
        __spreadProps(__spreadValues({}, scrollbarProps), {
          ref: composeRefs,
          style: __spreadValues({ position: "absolute" }, scrollbarProps.style),
          onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
            const mainPointer = 0;
            if (event.button === mainPointer) {
              const element = event.target;
              element.setPointerCapture(event.pointerId);
              rectRef.current = scrollbar.getBoundingClientRect();
              prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
              document.body.style.webkitUserSelect = "none";
              handleDragScroll(event);
            }
          }),
          onPointerMove: composeEventHandlers(
            props.onPointerMove,
            handleDragScroll
          ),
          onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
            const element = event.target;
            if (element.hasPointerCapture(event.pointerId)) {
              element.releasePointerCapture(event.pointerId);
            }
            document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
            rectRef.current = null;
          })
        })
      )
    );
  }
);
Scrollbar.displayName = "@raikou/Scrollbar";

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollbarX.tsx
var ScrollAreaScrollbarX = (0, import_react94.forwardRef)((props, forwardedRef) => {
  const _a = props, { sizes, onSizesChange, style } = _a, others = __objRest(_a, ["sizes", "onSizesChange", "style"]);
  const ctx = useScrollAreaContext();
  const [computedStyle, setComputedStyle] = (0, import_react94.useState)();
  const ref = (0, import_react94.useRef)(null);
  const composeRefs = (0, import_hooks29.useMergedRef)(forwardedRef, ref, ctx.onScrollbarXChange);
  (0, import_react94.useEffect)(() => {
    if (ref.current)
      setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ import_react94.default.createElement(
    Scrollbar,
    __spreadProps(__spreadValues({
      "data-orientation": "horizontal"
    }, others), {
      ref: composeRefs,
      sizes,
      style: __spreadProps(__spreadValues({}, style), {
        ["--sa-thumb-width"]: `${getThumbSize(sizes)}px`
      }),
      onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
      onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
      onWheelScroll: (event, maxScrollPos) => {
        if (ctx.viewport) {
          const scrollPos = ctx.viewport.scrollLeft + event.deltaX;
          props.onWheelScroll(scrollPos);
          if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
            event.preventDefault();
          }
        }
      },
      onResize: () => {
        if (ref.current && ctx.viewport && computedStyle) {
          onSizesChange({
            content: ctx.viewport.scrollWidth,
            viewport: ctx.viewport.offsetWidth,
            scrollbar: {
              size: ref.current.clientWidth,
              paddingStart: toInt(computedStyle.paddingLeft),
              paddingEnd: toInt(computedStyle.paddingRight)
            }
          });
        }
      }
    })
  );
});

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollbarY.tsx
var import_react95 = __toESM(require("react"));
var import_hooks30 = require("@raikou/hooks");
var ScrollAreaScrollbarY = (0, import_react95.forwardRef)((props, forwardedRef) => {
  const _a = props, { sizes, onSizesChange, style } = _a, others = __objRest(_a, ["sizes", "onSizesChange", "style"]);
  const context = useScrollAreaContext();
  const [computedStyle, setComputedStyle] = import_react95.default.useState();
  const ref = (0, import_react95.useRef)(null);
  const composeRefs = (0, import_hooks30.useMergedRef)(
    forwardedRef,
    ref,
    context.onScrollbarYChange
  );
  (0, import_react95.useEffect)(() => {
    if (ref.current)
      setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ import_react95.default.createElement(
    Scrollbar,
    __spreadProps(__spreadValues({}, others), {
      "data-orientation": "vertical",
      ref: composeRefs,
      sizes,
      style: __spreadValues({
        ["--sa-thumb-height"]: `${getThumbSize(sizes)}px`
      }, style),
      onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
      onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
      onWheelScroll: (event, maxScrollPos) => {
        if (context.viewport) {
          const scrollPos = context.viewport.scrollTop + event.deltaY;
          props.onWheelScroll(scrollPos);
          if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
            event.preventDefault();
          }
        }
      },
      onResize: () => {
        if (ref.current && context.viewport && computedStyle) {
          onSizesChange({
            content: context.viewport.scrollHeight,
            viewport: context.viewport.offsetHeight,
            scrollbar: {
              size: ref.current.clientHeight,
              paddingStart: toInt(computedStyle.paddingTop),
              paddingEnd: toInt(computedStyle.paddingBottom)
            }
          });
        }
      }
    })
  );
});

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbarVisible.tsx
var ScrollAreaScrollbarVisible = (0, import_react96.forwardRef)((props, forwardedRef) => {
  const _a = props, { orientation = "vertical" } = _a, scrollbarProps = __objRest(_a, ["orientation"]);
  const { dir } = (0, import_core56.useDirection)();
  const context = useScrollAreaContext();
  const thumbRef = (0, import_react96.useRef)(null);
  const pointerOffsetRef = (0, import_react96.useRef)(0);
  const [sizes, setSizes] = (0, import_react96.useState)({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  });
  const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
  const commonProps = __spreadProps(__spreadValues({}, scrollbarProps), {
    sizes,
    onSizesChange: setSizes,
    hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
    onThumbChange: (thumb) => {
      thumbRef.current = thumb;
    },
    onThumbPointerUp: () => {
      pointerOffsetRef.current = 0;
    },
    onThumbPointerDown: (pointerPos) => {
      pointerOffsetRef.current = pointerPos;
    }
  });
  const getScrollPosition = (pointerPos, direction) => getScrollPositionFromPointer(
    pointerPos,
    pointerOffsetRef.current,
    sizes,
    direction
  );
  if (orientation === "horizontal") {
    return /* @__PURE__ */ import_react96.default.createElement(
      ScrollAreaScrollbarX,
      __spreadProps(__spreadValues({}, commonProps), {
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollLeft;
            const offset2 = getThumbOffsetFromScroll(scrollPos, sizes, dir);
            thumbRef.current.style.transform = `translate3d(${offset2}px, 0, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport)
            context.viewport.scrollLeft = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) {
            context.viewport.scrollLeft = getScrollPosition(pointerPos, dir);
          }
        }
      })
    );
  }
  if (orientation === "vertical") {
    return /* @__PURE__ */ import_react96.default.createElement(
      ScrollAreaScrollbarY,
      __spreadProps(__spreadValues({}, commonProps), {
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollTop;
            const offset2 = getThumbOffsetFromScroll(scrollPos, sizes);
            thumbRef.current.style.transform = `translate3d(0, ${offset2}px, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport)
            context.viewport.scrollTop = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport)
            context.viewport.scrollTop = getScrollPosition(pointerPos);
        }
      })
    );
  }
  return null;
});

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbarHover.tsx
var import_react98 = __toESM(require("react"));

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbarAuto.tsx
var import_react97 = __toESM(require("react"));
var import_hooks31 = require("@raikou/hooks");
var ScrollAreaScrollbarAuto = (0, import_react97.forwardRef)((props, ref) => {
  const context = useScrollAreaContext();
  const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
  const [visible, setVisible] = (0, import_react97.useState)(false);
  const isHorizontal = props.orientation === "horizontal";
  const handleResize = (0, import_hooks31.useDebounceCallback)(() => {
    if (context.viewport) {
      const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
      const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
      setVisible(isHorizontal ? isOverflowX : isOverflowY);
    }
  }, 10);
  useResizeObserver2(context.viewport, handleResize);
  useResizeObserver2(context.content, handleResize);
  if (forceMount || visible) {
    return /* @__PURE__ */ import_react97.default.createElement(
      ScrollAreaScrollbarVisible,
      __spreadProps(__spreadValues({
        "data-state": visible ? "visible" : "hidden"
      }, scrollbarProps), {
        ref
      })
    );
  }
  return null;
});

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbarHover.tsx
var ScrollAreaScrollbarHover = (0, import_react98.forwardRef)(
  (props, ref) => {
    const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
    const context = useScrollAreaContext();
    const [visible, setVisible] = (0, import_react98.useState)(false);
    (0, import_react98.useEffect)(() => {
      const { scrollArea } = context;
      let hideTimer = 0;
      if (scrollArea) {
        const handlePointerEnter = () => {
          window.clearTimeout(hideTimer);
          setVisible(true);
        };
        const handlePointerLeave = () => {
          hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
        };
        scrollArea.addEventListener("pointerenter", handlePointerEnter);
        scrollArea.addEventListener("pointerleave", handlePointerLeave);
        return () => {
          window.clearTimeout(hideTimer);
          scrollArea.removeEventListener("pointerenter", handlePointerEnter);
          scrollArea.removeEventListener("pointerleave", handlePointerLeave);
        };
      }
      return void 0;
    }, [context.scrollArea, context.scrollHideDelay]);
    if (forceMount || visible) {
      return /* @__PURE__ */ import_react98.default.createElement(
        ScrollAreaScrollbarAuto,
        __spreadProps(__spreadValues({
          "data-state": visible ? "visible" : "hidden"
        }, scrollbarProps), {
          ref
        })
      );
    }
    return null;
  }
);

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbarScroll.tsx
var import_react99 = __toESM(require("react"));
var import_hooks32 = require("@raikou/hooks");
var ScrollAreaScrollbarScroll = (0, import_react99.forwardRef)((props, red) => {
  const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
  const context = useScrollAreaContext();
  const isHorizontal = props.orientation === "horizontal";
  const [state, setState] = (0, import_react99.useState)("hidden");
  const debounceScrollEnd = (0, import_hooks32.useDebounceCallback)(() => setState("idle"), 100);
  (0, import_react99.useEffect)(() => {
    if (state === "idle") {
      const hideTimer = window.setTimeout(
        () => setState("hidden"),
        context.scrollHideDelay
      );
      return () => window.clearTimeout(hideTimer);
    }
    return void 0;
  }, [state, context.scrollHideDelay]);
  (0, import_react99.useEffect)(() => {
    const { viewport } = context;
    const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
    if (viewport) {
      let prevScrollPos = viewport[scrollDirection];
      const handleScroll = () => {
        const scrollPos = viewport[scrollDirection];
        const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
        if (hasScrollInDirectionChanged) {
          setState("scrolling");
          debounceScrollEnd();
        }
        prevScrollPos = scrollPos;
      };
      viewport.addEventListener("scroll", handleScroll);
      return () => viewport.removeEventListener("scroll", handleScroll);
    }
    return void 0;
  }, [context.viewport, isHorizontal, debounceScrollEnd]);
  if (forceMount || state !== "hidden") {
    return /* @__PURE__ */ import_react99.default.createElement(
      ScrollAreaScrollbarVisible,
      __spreadProps(__spreadValues({
        "data-state": state === "hidden" ? "hidden" : "visible"
      }, scrollbarProps), {
        ref: red,
        onPointerEnter: composeEventHandlers(
          props.onPointerEnter,
          () => setState("interacting")
        ),
        onPointerLeave: composeEventHandlers(
          props.onPointerLeave,
          () => setState("idle")
        )
      })
    );
  }
  return null;
});

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbar.tsx
var ScrollAreaScrollbar = import_react100.default.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
    const context = useScrollAreaContext();
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === "horizontal";
    import_react100.default.useEffect(() => {
      isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
      return () => {
        isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
      };
    }, [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]);
    return context.type === "hover" ? /* @__PURE__ */ import_react100.default.createElement(ScrollAreaScrollbarHover, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef, forceMount })) : context.type === "scroll" ? /* @__PURE__ */ import_react100.default.createElement(ScrollAreaScrollbarScroll, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef, forceMount })) : context.type === "auto" ? /* @__PURE__ */ import_react100.default.createElement(ScrollAreaScrollbarAuto, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef, forceMount })) : context.type === "always" ? /* @__PURE__ */ import_react100.default.createElement(ScrollAreaScrollbarVisible, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef })) : null;
  }
);

// ../components/ScrollArea/src/ScrollAreaCorner/ScrollAreaCorner.tsx
var import_react101 = __toESM(require("react"));
var Corner = import_react101.default.forwardRef(
  (props, ref) => {
    const _a = props, { style } = _a, others = __objRest(_a, ["style"]);
    const ctx = useScrollAreaContext();
    const [width, setWidth] = import_react101.default.useState(0);
    const [height, setHeight] = import_react101.default.useState(0);
    const hasSize = Boolean(width && height);
    useResizeObserver2(ctx.scrollbarX, () => {
      var _a2;
      const h2 = ((_a2 = ctx.scrollbarX) == null ? void 0 : _a2.offsetHeight) || 0;
      ctx.onCornerHeightChange(h2);
      setHeight(h2);
    });
    useResizeObserver2(ctx.scrollbarY, () => {
      var _a2;
      const w2 = ((_a2 = ctx.scrollbarY) == null ? void 0 : _a2.offsetWidth) || 0;
      ctx.onCornerWidthChange(w2);
      setWidth(w2);
    });
    return hasSize ? /* @__PURE__ */ import_react101.default.createElement("div", __spreadProps(__spreadValues({}, others), { ref, style: __spreadProps(__spreadValues({}, style), { width, height }) })) : null;
  }
);
var ScrollAreaCorner = import_react101.default.forwardRef((props, ref) => {
  const ctx = useScrollAreaContext();
  const hasBothScrollbarsVisible = Boolean(ctx.scrollbarX && ctx.scrollbarY);
  const hasCorner = ctx.type !== "scroll" && hasBothScrollbarsVisible;
  return hasCorner ? /* @__PURE__ */ import_react101.default.createElement(Corner, __spreadProps(__spreadValues({}, props), { ref })) : null;
});

// ../components/ScrollArea/src/ScrollAreaRoot/ScrollAreaRoot.tsx
var import_react102 = __toESM(require("react"));
var import_hooks33 = require("@raikou/hooks");
var import_core57 = require("@raikou/core");
var defaultProps34 = {
  scrollHideDelay: 1e3,
  type: "hover"
};
var ScrollAreaRoot = (0, import_react102.forwardRef)(
  (_props, ref) => {
    const props = (0, import_core57.useProps)("ScrollAreaRoot", defaultProps34, _props);
    const _a = props, { type, scrollHideDelay } = _a, others = __objRest(_a, ["type", "scrollHideDelay"]);
    const [scrollArea, setScrollArea] = (0, import_react102.useState)(null);
    const [viewport, setViewport] = (0, import_react102.useState)(null);
    const [content, setContent] = (0, import_react102.useState)(null);
    const [scrollbarX, setScrollbarX] = (0, import_react102.useState)(null);
    const [scrollbarY, setScrollbarY] = (0, import_react102.useState)(null);
    const [cornerWidth, setCornerWidth] = (0, import_react102.useState)(0);
    const [cornerHeight, setCornerHeight] = (0, import_react102.useState)(0);
    const [scrollbarXEnabled, setScrollbarXEnabled] = (0, import_react102.useState)(false);
    const [scrollbarYEnabled, setScrollbarYEnabled] = (0, import_react102.useState)(false);
    const rootRef = (0, import_hooks33.useMergedRef)(ref, (node) => setScrollArea(node));
    return /* @__PURE__ */ import_react102.default.createElement(
      ScrollAreaProvider,
      {
        value: {
          type,
          scrollHideDelay,
          scrollArea,
          viewport,
          onViewportChange: setViewport,
          content,
          onContentChange: setContent,
          scrollbarX,
          onScrollbarXChange: setScrollbarX,
          scrollbarXEnabled,
          onScrollbarXEnabledChange: setScrollbarXEnabled,
          scrollbarY,
          onScrollbarYChange: setScrollbarY,
          scrollbarYEnabled,
          onScrollbarYEnabledChange: setScrollbarYEnabled,
          onCornerWidthChange: setCornerWidth,
          onCornerHeightChange: setCornerHeight
        }
      },
      /* @__PURE__ */ import_react102.default.createElement(
        import_core57.Box,
        __spreadProps(__spreadValues({}, others), {
          ref: rootRef,
          __vars: {
            "--sa-corner-width": `${cornerWidth}px`,
            "--sa-corner-height": `${cornerHeight}px`
          }
        })
      )
    );
  }
);
ScrollAreaRoot.displayName = "@raikou/core/ScrollAreaRoot";

// ../components/ScrollArea/src/ScrollAreaViewport/ScrollAreaViewport.tsx
var import_react103 = __toESM(require("react"));
var import_hooks34 = require("@raikou/hooks");
var import_core58 = require("@raikou/core");
var ScrollAreaViewport = (0, import_react103.forwardRef)((_a, ref) => {
  var _b = _a, { children, style } = _b, others = __objRest(_b, ["children", "style"]);
  const ctx = useScrollAreaContext();
  const rootRef = (0, import_hooks34.useMergedRef)(ref, ctx.onViewportChange);
  return /* @__PURE__ */ import_react103.default.createElement(
    import_core58.Box,
    __spreadProps(__spreadValues({}, others), {
      ref: rootRef,
      style: __spreadValues({
        overflowX: ctx.scrollbarXEnabled ? "scroll" : "hidden",
        overflowY: ctx.scrollbarYEnabled ? "scroll" : "hidden"
      }, style)
    }),
    /* @__PURE__ */ import_react103.default.createElement(
      "div",
      {
        style: { minWidth: "100%", display: "table" },
        ref: ctx.onContentChange
      },
      children
    )
  );
});
ScrollAreaViewport.displayName = "@raikou/core/ScrollAreaViewport";

// ../components/ScrollArea/src/ScrollAreaThumb/ScrollAreaThumb.tsx
var import_react104 = __toESM(require("react"));
var import_hooks35 = require("@raikou/hooks");
var Thumb = (0, import_react104.forwardRef)(
  (props, forwardedRef) => {
    const _a = props, { style } = _a, others = __objRest(_a, ["style"]);
    const scrollAreaContext = useScrollAreaContext();
    const scrollbarContext = useScrollbarContext();
    const { onThumbPositionChange } = scrollbarContext;
    const composedRef = (0, import_hooks35.useMergedRef)(
      forwardedRef,
      (node) => scrollbarContext.onThumbChange(node)
    );
    const removeUnlinkedScrollListenerRef = (0, import_react104.useRef)();
    const debounceScrollEnd = (0, import_hooks35.useDebounceCallback)(() => {
      if (removeUnlinkedScrollListenerRef.current) {
        removeUnlinkedScrollListenerRef.current();
        removeUnlinkedScrollListenerRef.current = void 0;
      }
    }, 100);
    (0, import_react104.useEffect)(() => {
      const { viewport } = scrollAreaContext;
      if (viewport) {
        const handleScroll = () => {
          debounceScrollEnd();
          if (!removeUnlinkedScrollListenerRef.current) {
            const listener = addUnlinkedScrollListener(
              viewport,
              onThumbPositionChange
            );
            removeUnlinkedScrollListenerRef.current = listener;
            onThumbPositionChange();
          }
        };
        onThumbPositionChange();
        viewport.addEventListener("scroll", handleScroll);
        return () => viewport.removeEventListener("scroll", handleScroll);
      }
      return void 0;
    }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);
    return /* @__PURE__ */ import_react104.default.createElement(
      "div",
      __spreadProps(__spreadValues({
        "data-state": scrollbarContext.hasThumb ? "visible" : "hidden"
      }, others), {
        ref: composedRef,
        style: __spreadValues({
          width: "var(--sa-thumb-width)",
          height: "var(--sa-thumb-height)"
        }, style),
        onPointerDownCapture: composeEventHandlers(
          props.onPointerDownCapture,
          (event) => {
            const thumb = event.target;
            const thumbRect = thumb.getBoundingClientRect();
            const x2 = event.clientX - thumbRect.left;
            const y2 = event.clientY - thumbRect.top;
            scrollbarContext.onThumbPointerDown({ x: x2, y: y2 });
          }
        ),
        onPointerUp: composeEventHandlers(
          props.onPointerUp,
          scrollbarContext.onThumbPointerUp
        )
      })
    );
  }
);
var ScrollAreaThumb = import_react104.default.forwardRef((props, forwardedRef) => {
  const _a = props, { forceMount } = _a, thumbProps = __objRest(_a, ["forceMount"]);
  const scrollbarContext = useScrollbarContext();
  if (forceMount || scrollbarContext.hasThumb) {
    return /* @__PURE__ */ import_react104.default.createElement(Thumb, __spreadValues({ ref: forwardedRef }, thumbProps));
  }
  return null;
});

// css-module:./ScrollArea.module.css#css-module
var ScrollArea_module_default = { "root": "m-d57069b5", "viewport": "m-c0783ff9", "viewportInner": "m-f8f631dd", "scrollbar": "m-c44ba933", "thumb": "m-d8b5e363", "corner": "m-21657268" };

// ../components/ScrollArea/src/ScrollArea.tsx
var defaultProps35 = {
  scrollHideDelay: 1e3,
  type: "hover"
};
var varsResolver17 = (0, import_core59.createVarsResolver)(
  (_2, { scrollbarSize }) => ({
    root: {
      "--scrollarea-scrollbar-size": (0, import_core59.rem)(scrollbarSize)
    }
  })
);
var ScrollArea = (0, import_core59.factory)((_props, ref) => {
  const props = (0, import_core59.useProps)("ScrollArea", defaultProps35, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    scrollbarSize,
    vars,
    type,
    scrollHideDelay,
    viewportProps,
    viewportRef,
    onScrollPositionChange,
    children,
    offsetScrollbars
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "scrollbarSize",
    "vars",
    "type",
    "scrollHideDelay",
    "viewportProps",
    "viewportRef",
    "onScrollPositionChange",
    "children",
    "offsetScrollbars"
  ]);
  const [scrollbarHovered, setScrollbarHovered] = (0, import_react105.useState)(false);
  const getStyles = (0, import_core59.useStyles)({
    name: "ScrollArea",
    props,
    classes: ScrollArea_module_default,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver17
  });
  return /* @__PURE__ */ import_react105.default.createElement(
    ScrollAreaRoot,
    __spreadValues(__spreadValues({
      type: type === "never" ? "always" : type,
      scrollHideDelay,
      ref
    }, getStyles("root")), others),
    /* @__PURE__ */ import_react105.default.createElement(
      ScrollAreaViewport,
      __spreadProps(__spreadValues(__spreadValues({}, viewportProps), getStyles("viewport")), {
        ref: viewportRef,
        "data-offset-scrollbars": offsetScrollbars || void 0,
        onScroll: typeof onScrollPositionChange === "function" ? ({ currentTarget }) => onScrollPositionChange({
          x: currentTarget.scrollLeft,
          y: currentTarget.scrollTop
        }) : void 0
      }),
      children
    ),
    /* @__PURE__ */ import_react105.default.createElement(
      ScrollAreaScrollbar,
      __spreadProps(__spreadValues({}, getStyles("scrollbar")), {
        orientation: "horizontal",
        "data-hidden": type === "never" || void 0,
        forceMount: true,
        onMouseEnter: () => setScrollbarHovered(true),
        onMouseLeave: () => setScrollbarHovered(false)
      }),
      /* @__PURE__ */ import_react105.default.createElement(ScrollAreaThumb, __spreadValues({}, getStyles("thumb")))
    ),
    /* @__PURE__ */ import_react105.default.createElement(
      ScrollAreaScrollbar,
      __spreadProps(__spreadValues({}, getStyles("scrollbar")), {
        orientation: "vertical",
        "data-hidden": type === "never" || void 0,
        forceMount: true,
        onMouseEnter: () => setScrollbarHovered(true),
        onMouseLeave: () => setScrollbarHovered(false)
      }),
      /* @__PURE__ */ import_react105.default.createElement(ScrollAreaThumb, __spreadValues({}, getStyles("thumb")))
    ),
    /* @__PURE__ */ import_react105.default.createElement(
      ScrollAreaCorner,
      __spreadProps(__spreadValues({}, getStyles("corner")), {
        "data-hovered": scrollbarHovered || void 0,
        "data-hidden": type === "never" || void 0
      })
    )
  );
});
ScrollArea.displayName = "@raikou/core/ScrollArea";
var ScrollAreaAutosize = (0, import_core59.factory)((props, ref) => {
  const _a = (0, import_core59.useProps)("ScrollAreaAutosize", defaultProps35, props), {
    children,
    classNames,
    styles,
    scrollbarSize,
    scrollHideDelay,
    type,
    dir,
    offsetScrollbars,
    viewportRef,
    onScrollPositionChange,
    unstyled,
    variant,
    viewportProps,
    style,
    vars
  } = _a, others = __objRest(_a, [
    "children",
    "classNames",
    "styles",
    "scrollbarSize",
    "scrollHideDelay",
    "type",
    "dir",
    "offsetScrollbars",
    "viewportRef",
    "onScrollPositionChange",
    "unstyled",
    "variant",
    "viewportProps",
    "style",
    "vars"
  ]);
  return /* @__PURE__ */ import_react105.default.createElement(import_core59.Box, __spreadProps(__spreadValues({}, others), { ref, style: [{ display: "flex" }, style] }), /* @__PURE__ */ import_react105.default.createElement(import_core59.Box, { style: { display: "flex", flexDirection: "column", flex: 1 } }, /* @__PURE__ */ import_react105.default.createElement(
    ScrollArea,
    {
      classNames,
      styles,
      scrollHideDelay,
      scrollbarSize,
      type,
      dir,
      offsetScrollbars,
      viewportRef,
      onScrollPositionChange,
      unstyled,
      variant,
      viewportProps,
      vars
    },
    children
  )));
});
ScrollArea.classes = ScrollArea_module_default;
ScrollAreaAutosize.displayName = "@raikou/core/ScrollAreaAutosize";
ScrollArea.Autosize = ScrollAreaAutosize;

// src/DataTableScrollArea.tsx
var import_clsx18 = __toESM(require("clsx"));

// css-module:./DataTableScrollArea.module.css#css-module
var DataTableScrollArea_module_default = { "mantine-datatable-scroll-area": "m-d65f30e", "mantine-datatable-scroll-area-corner": "m-6e9cfdf4", "mantine-datatable-scroll-area-thumb": "m-6fd8b657", "mantine-datatable-scroll-area-scrollbar": "m-9723e227", "mantine-datatable-scroll-area-shadow": "m-898004bf", "mantine-datatable-scroll-area-top-shadow": "m-cd728cb7", "mantine-datatable-scroll-area-left-shadow": "m-4fd45d67", "mantine-datatable-scroll-area-right-shadow": "m-992de250", "mantine-datatable-scroll-area-shadow-behind": "m-c5a77208", "mantine-datatable-scroll-area-bottom-shadow": "m-84bd8683", "mantine-datatable-scroll-area-shadow-visible": "m-18b1a964" };

// src/DataTableScrollArea.tsx
function DataTableScrollArea({
  topShadowVisible,
  leftShadowVisible,
  leftShadowBehind,
  rightShadowVisible,
  rightShadowBehind,
  bottomShadowVisible,
  headerHeight,
  footerHeight,
  onScrollPositionChange,
  children,
  viewportRef,
  scrollAreaProps
}) {
  return /* @__PURE__ */ import_react106.default.createElement(
    ScrollArea,
    __spreadProps(__spreadValues({}, scrollAreaProps), {
      viewportRef,
      classNames: {
        root: DataTableScrollArea_module_default["mantine-datatable-scroll-area"],
        scrollbar: DataTableScrollArea_module_default["mantine-datatable-scroll-area-scrollbar"],
        thumb: DataTableScrollArea_module_default["mantine-datatable-scroll-area-thumb"],
        corner: DataTableScrollArea_module_default["mantine-datatable-scroll-area-corner"]
      },
      onScrollPositionChange
    }),
    children,
    /* @__PURE__ */ import_react106.default.createElement(
      import_core60.Box,
      {
        className: (0, import_clsx18.default)(
          DataTableScrollArea_module_default["mantine-datatable-scroll-area-shadow"],
          DataTableScrollArea_module_default["mantine-datatable-scroll-area-top-shadow"],
          {
            "mantine-datatable-scroll-area-shadow-visible": topShadowVisible
          }
        ),
        style: { top: headerHeight ? (0, import_core60.rem)(headerHeight) : 0 }
      }
    ),
    /* @__PURE__ */ import_react106.default.createElement(
      "div",
      {
        className: (0, import_clsx18.default)(
          DataTableScrollArea_module_default["mantine-datatable-scroll-area-shadow"],
          DataTableScrollArea_module_default["mantine-datatable-scroll-area-left-shadow"],
          {
            "mantine-datatable-scroll-area-shadow-visible": leftShadowVisible,
            "mantine-datatable-scroll-area-shadow-behind": leftShadowBehind
          }
        )
      }
    ),
    /* @__PURE__ */ import_react106.default.createElement(
      "div",
      {
        className: (0, import_clsx18.default)(
          DataTableScrollArea_module_default["mantine-datatable-scroll-area-shadow"],
          DataTableScrollArea_module_default["mantine-datatable-scroll-area-right-shadow"],
          {
            "mantine-datatable-scroll-area-shadow-visible": rightShadowVisible,
            "mantine-datatable-scroll-area-shadow-behind": rightShadowBehind
          }
        )
      }
    ),
    /* @__PURE__ */ import_react106.default.createElement(
      import_core60.Box,
      {
        className: (0, import_clsx18.default)(
          DataTableScrollArea_module_default["mantine-datatable-scroll-area-shadow"],
          DataTableScrollArea_module_default["mantine-datatable-scroll-area-bottom-shadow"],
          {
            "mantine-datatable-scroll-area-shadow-visible": bottomShadowVisible
          }
        ),
        style: { bottom: footerHeight ? (0, import_core60.rem)(footerHeight + 1) : 0 }
      }
    )
  );
}

// src/DataTable.tsx
function DataTable(_a) {
  var _b = _a, {
    withTableBorder,
    borderRadius,
    textSelectionDisabled,
    height = "100%",
    minHeight,
    shadow,
    verticalAlign = "center",
    fetching,
    columns,
    groups,
    pinLastColumn,
    defaultColumnProps,
    defaultColumnRender,
    idAccessor = "id",
    records,
    selectionTrigger = "checkbox",
    selectedRecords,
    onSelectedRecordsChange,
    isRecordSelectable,
    allRecordsSelectionCheckboxProps = { "aria-label": "Select all records" },
    getRecordSelectionCheckboxProps = (_2, index3) => ({
      "aria-label": `Select record ${index3 + 1}`
    }),
    sortStatus,
    sortIcons,
    onSortStatusChange,
    horizontalSpacing,
    page,
    onPageChange,
    totalRecords,
    recordsPerPage,
    onRecordsPerPageChange,
    recordsPerPageOptions,
    recordsPerPageLabel = "Records per page",
    paginationWithEdges,
    paginationActiveTextColor,
    paginationActiveBackgroundColor,
    paginationSize = "sm",
    paginationText = ({ from, to, totalRecords: totalRecords2 }) => `${from} - ${to} / ${totalRecords2}`,
    paginationWrapBreakpoint = "sm",
    getPaginationControlProps = (control) => {
      if (control === "previous") {
        return { "aria-label": "Previous page" };
      } else if (control === "next") {
        return { "aria-label": "Next page" };
      }
      return {};
    },
    loaderBackgroundBlur,
    customLoader,
    loaderSize,
    loaderType,
    loaderColor,
    loadingText = "...",
    emptyState,
    noRecordsText = "No records",
    noRecordsIcon,
    highlightOnHover,
    striped,
    noHeader,
    onRowClick,
    onRowContextMenu,
    onCellClick,
    onCellContextMenu,
    onScroll,
    onScrollToTop,
    onScrollToBottom,
    onScrollToLeft,
    onScrollToRight,
    c: c2,
    backgroundColor,
    borderColor,
    rowBorderColor,
    stripedColor,
    highlightOnHoverColor,
    rowColor,
    rowBackgroundColor,
    rowExpansion,
    rowClassName,
    rowStyle,
    customRowAttributes,
    scrollViewportRef: scrollViewportRefProp,
    scrollAreaProps,
    bodyRef,
    m,
    my,
    mx,
    mt,
    mb,
    ml,
    mr,
    className,
    classNames,
    style,
    styles
  } = _b, otherProps = __objRest(_b, [
    "withTableBorder",
    "borderRadius",
    "textSelectionDisabled",
    "height",
    "minHeight",
    "shadow",
    "verticalAlign",
    "fetching",
    "columns",
    "groups",
    "pinLastColumn",
    "defaultColumnProps",
    "defaultColumnRender",
    "idAccessor",
    "records",
    "selectionTrigger",
    "selectedRecords",
    "onSelectedRecordsChange",
    "isRecordSelectable",
    "allRecordsSelectionCheckboxProps",
    "getRecordSelectionCheckboxProps",
    "sortStatus",
    "sortIcons",
    "onSortStatusChange",
    "horizontalSpacing",
    "page",
    "onPageChange",
    "totalRecords",
    "recordsPerPage",
    "onRecordsPerPageChange",
    "recordsPerPageOptions",
    "recordsPerPageLabel",
    "paginationWithEdges",
    "paginationActiveTextColor",
    "paginationActiveBackgroundColor",
    "paginationSize",
    "paginationText",
    "paginationWrapBreakpoint",
    "getPaginationControlProps",
    "loaderBackgroundBlur",
    "customLoader",
    "loaderSize",
    "loaderType",
    "loaderColor",
    "loadingText",
    "emptyState",
    "noRecordsText",
    "noRecordsIcon",
    "highlightOnHover",
    "striped",
    "noHeader",
    "onRowClick",
    "onRowContextMenu",
    "onCellClick",
    "onCellContextMenu",
    "onScroll",
    "onScrollToTop",
    "onScrollToBottom",
    "onScrollToLeft",
    "onScrollToRight",
    "c",
    "backgroundColor",
    "borderColor",
    "rowBorderColor",
    "stripedColor",
    "highlightOnHoverColor",
    "rowColor",
    "rowBackgroundColor",
    "rowExpansion",
    "rowClassName",
    "rowStyle",
    "customRowAttributes",
    "scrollViewportRef",
    "scrollAreaProps",
    "bodyRef",
    "m",
    "my",
    "mx",
    "mt",
    "mb",
    "ml",
    "mr",
    "className",
    "classNames",
    "style",
    "styles"
  ]);
  const {
    ref: scrollViewportRef,
    width: scrollViewportWidth,
    height: scrollViewportHeight
  } = useElementOuterSize();
  const effectiveColumns = (0, import_react107.useMemo)(() => {
    var _a2;
    return (_a2 = groups == null ? void 0 : groups.flatMap((group) => group.columns)) != null ? _a2 : columns;
  }, [columns, groups]);
  const { ref: headerRef, height: headerHeight } = useElementOuterSize();
  const {
    ref: tableRef,
    width: tableWidth,
    height: tableHeight
  } = useElementOuterSize();
  const { ref: footerRef, height: footerHeight } = useElementOuterSize();
  const { ref: paginationRef, height: paginationHeight } = useElementOuterSize();
  const [scrolledToTop, setScrolledToTop] = (0, import_react107.useState)(true);
  const [scrolledToBottom, setScrolledToBottom] = (0, import_react107.useState)(true);
  const [scrolledToLeft, setScrolledToLeft] = (0, import_react107.useState)(true);
  const [scrolledToRight, setScrolledToRight] = (0, import_react107.useState)(true);
  const rowExpansionInfo = useRowExpansion({
    rowExpansion,
    records,
    idAccessor
  });
  const processScrolling = (0, import_react107.useCallback)(() => {
    var _a2, _b2;
    const scrollTop = ((_a2 = scrollViewportRef.current) == null ? void 0 : _a2.scrollTop) || 0;
    const scrollLeft = ((_b2 = scrollViewportRef.current) == null ? void 0 : _b2.scrollLeft) || 0;
    if (fetching || tableHeight <= scrollViewportHeight) {
      setScrolledToTop(true);
      setScrolledToBottom(true);
    } else {
      const newScrolledToTop = scrollTop === 0;
      const newScrolledToBottom = tableHeight - scrollTop - scrollViewportHeight < 1;
      setScrolledToTop(newScrolledToTop);
      setScrolledToBottom(newScrolledToBottom);
      if (newScrolledToTop && newScrolledToTop !== scrolledToTop)
        onScrollToTop == null ? void 0 : onScrollToTop();
      if (newScrolledToBottom && newScrolledToBottom !== scrolledToBottom)
        onScrollToBottom == null ? void 0 : onScrollToBottom();
    }
    if (fetching || tableWidth === scrollViewportWidth) {
      setScrolledToLeft(true);
      setScrolledToRight(true);
    } else {
      const newScrolledToLeft = scrollLeft === 0;
      const newScrolledToRight = tableWidth - scrollLeft - scrollViewportWidth < 1;
      setScrolledToLeft(newScrolledToLeft);
      setScrolledToRight(newScrolledToRight);
      if (newScrolledToLeft && newScrolledToLeft !== scrolledToLeft)
        onScrollToLeft == null ? void 0 : onScrollToLeft();
      if (newScrolledToRight && newScrolledToRight !== scrolledToRight)
        onScrollToRight == null ? void 0 : onScrollToRight();
    }
  }, [
    fetching,
    onScrollToBottom,
    onScrollToLeft,
    onScrollToRight,
    onScrollToTop,
    scrollViewportHeight,
    scrollViewportRef,
    scrollViewportWidth,
    scrolledToBottom,
    scrolledToLeft,
    scrolledToRight,
    scrolledToTop,
    tableHeight,
    tableWidth
  ]);
  useIsomorphicLayoutEffect(processScrolling, [processScrolling]);
  const handleScrollPositionChange = (0, import_react107.useCallback)(
    (e) => {
      onScroll == null ? void 0 : onScroll(e);
      processScrolling();
    },
    [processScrolling, onScroll]
  );
  const handlePageChange = (0, import_react107.useCallback)(
    (page2) => {
      var _a2;
      (_a2 = scrollViewportRef.current) == null ? void 0 : _a2.scrollTo({ top: 0, left: 0 });
      onPageChange(page2);
    },
    [onPageChange, scrollViewportRef]
  );
  const recordsLength = records == null ? void 0 : records.length;
  const recordIds = records == null ? void 0 : records.map((record) => getRecordId(record, idAccessor));
  const selectionColumnVisible = !!selectedRecords;
  const selectedRecordIds = selectedRecords == null ? void 0 : selectedRecords.map(
    (record) => getRecordId(record, idAccessor)
  );
  const hasRecordsAndSelectedRecords = recordIds !== void 0 && selectedRecordIds !== void 0 && selectedRecordIds.length > 0;
  const selectableRecords = isRecordSelectable ? records == null ? void 0 : records.filter(isRecordSelectable) : records;
  const selectableRecordIds = selectableRecords == null ? void 0 : selectableRecords.map(
    (record) => getRecordId(record, idAccessor)
  );
  const allSelectableRecordsSelected = hasRecordsAndSelectedRecords && selectableRecordIds.every((id) => selectedRecordIds.includes(id));
  const someRecordsSelected = hasRecordsAndSelectedRecords && selectableRecordIds.some((id) => selectedRecordIds.includes(id));
  const handleHeaderSelectionChange = (0, import_react107.useCallback)(() => {
    if (selectedRecords && onSelectedRecordsChange) {
      onSelectedRecordsChange(
        allSelectableRecordsSelected ? selectedRecords.filter(
          (record) => !selectableRecordIds.includes(getRecordId(record, idAccessor))
        ) : uniqBy(
          [...selectedRecords, ...selectableRecords],
          (record) => getRecordId(record, idAccessor)
        )
      );
    }
  }, [
    allSelectableRecordsSelected,
    idAccessor,
    onSelectedRecordsChange,
    selectableRecordIds,
    selectableRecords,
    selectedRecords
  ]);
  const { lastSelectionChangeIndex, setLastSelectionChangeIndex } = useLastSelectionChangeIndex(recordIds);
  const selectionVisibleAndNotScrolledToLeft = selectionColumnVisible && !scrolledToLeft;
  const marginProperties = { m, my, mx, mt, mb, ml, mr };
  return /* @__PURE__ */ import_react107.default.createElement(
    import_core61.Box,
    __spreadProps(__spreadValues({}, marginProperties), {
      className: (0, import_clsx19.default)(
        DataTable_module_default["mantine-datatable"],
        { "mantine-datatable-with-border": withTableBorder },
        className,
        classNames == null ? void 0 : classNames.root
      ),
      style: [
        (theme) => __spreadProps(__spreadValues({}, getTableCssVariables({
          theme,
          c: c2,
          backgroundColor,
          borderColor,
          rowBorderColor,
          stripedColor,
          highlightOnHoverColor
        })), {
          borderRadius: theme.radius[borderRadius] || borderRadius,
          boxShadow: theme.shadows[shadow] || shadow,
          height,
          minHeight
        }),
        style,
        styles == null ? void 0 : styles.root
      ]
    }),
    /* @__PURE__ */ import_react107.default.createElement(
      DataTableScrollArea,
      {
        viewportRef: (0, import_hooks36.useMergedRef)(scrollViewportRef, scrollViewportRefProp),
        topShadowVisible: !scrolledToTop,
        leftShadowVisible: !scrolledToLeft,
        leftShadowBehind: selectionColumnVisible,
        rightShadowVisible: !scrolledToRight,
        rightShadowBehind: pinLastColumn,
        bottomShadowVisible: !scrolledToBottom,
        headerHeight,
        footerHeight,
        onScrollPositionChange: handleScrollPositionChange,
        scrollAreaProps
      },
      /* @__PURE__ */ import_react107.default.createElement(
        Table,
        __spreadValues({
          ref: tableRef,
          horizontalSpacing,
          className: (0, import_clsx19.default)(
            DataTable_module_default["mantine-datatable-table"],
            {
              [TEXT_SELECTION_DISABLED]: textSelectionDisabled,
              "mantine-datatable-vertical-align-top": verticalAlign === "top",
              "mantine-datatable-vertical-align-bottom": verticalAlign === "bottom",
              "mantine-datatable-last-row-border-bottom-visible": tableHeight < scrollViewportHeight,
              "mantine-datatable-pin-last-column": pinLastColumn,
              "mantine-datatable-pin-last-column-scrolled": !scrolledToRight && pinLastColumn
            },
            classNames == null ? void 0 : classNames.table
          ),
          style: styles == null ? void 0 : styles.table,
          "data-striped": recordsLength && striped || void 0,
          "data-highlight-on-hover": highlightOnHover || void 0
        }, otherProps),
        noHeader ? null : /* @__PURE__ */ import_react107.default.createElement(
          DataTableHeader,
          {
            ref: headerRef,
            className: classNames == null ? void 0 : classNames.header,
            style: styles == null ? void 0 : styles.header,
            columns: effectiveColumns,
            defaultColumnProps,
            groups,
            sortStatus,
            sortIcons,
            onSortStatusChange,
            selectionTrigger,
            selectionVisible: selectionColumnVisible,
            selectionChecked: allSelectableRecordsSelected,
            selectionIndeterminate: someRecordsSelected && !allSelectableRecordsSelected,
            onSelectionChange: handleHeaderSelectionChange,
            selectionCheckboxProps: allRecordsSelectionCheckboxProps,
            selectorCellShadowVisible: selectionVisibleAndNotScrolledToLeft
          }
        ),
        /* @__PURE__ */ import_react107.default.createElement("tbody", { ref: bodyRef }, recordsLength ? records.map((record, index3) => {
          const recordId = getRecordId(record, idAccessor);
          const isSelected = (selectedRecordIds == null ? void 0 : selectedRecordIds.includes(recordId)) || false;
          let handleSelectionChange;
          if (onSelectedRecordsChange && selectedRecords) {
            handleSelectionChange = (e) => {
              if (e.nativeEvent.shiftKey && lastSelectionChangeIndex !== null) {
                const targetRecords = records.filter(
                  index3 > lastSelectionChangeIndex ? (rec, idx) => idx >= lastSelectionChangeIndex && idx <= index3 && (isRecordSelectable ? isRecordSelectable(rec, idx) : true) : (rec, idx) => idx >= index3 && idx <= lastSelectionChangeIndex && (isRecordSelectable ? isRecordSelectable(rec, idx) : true)
                );
                onSelectedRecordsChange(
                  isSelected ? differenceBy(
                    selectedRecords,
                    targetRecords,
                    (r2) => getRecordId(r2, idAccessor)
                  ) : uniqBy(
                    [...selectedRecords, ...targetRecords],
                    (r2) => getRecordId(r2, idAccessor)
                  )
                );
              } else {
                onSelectedRecordsChange(
                  isSelected ? selectedRecords.filter(
                    (rec) => getRecordId(rec, idAccessor) !== recordId
                  ) : uniqBy(
                    [...selectedRecords, record],
                    (rec) => getRecordId(rec, idAccessor)
                  )
                );
              }
              setLastSelectionChangeIndex(index3);
            };
          }
          return /* @__PURE__ */ import_react107.default.createElement(
            DataTableRow,
            {
              key: recordId,
              record,
              index: index3,
              columns: effectiveColumns,
              defaultColumnProps,
              defaultColumnRender,
              selectionTrigger,
              selectionVisible: selectionColumnVisible,
              selectionChecked: isSelected,
              onSelectionChange: handleSelectionChange,
              isRecordSelectable,
              getSelectionCheckboxProps: getRecordSelectionCheckboxProps,
              onClick: onRowClick,
              onCellClick,
              onContextMenu: onRowContextMenu,
              onCellContextMenu,
              expansion: rowExpansionInfo,
              color: rowColor,
              backgroundColor: rowBackgroundColor,
              className: rowClassName,
              style: rowStyle,
              customAttributes: customRowAttributes,
              selectorCellShadowVisible: selectionVisibleAndNotScrolledToLeft
            }
          );
        }) : /* @__PURE__ */ import_react107.default.createElement(DataTableEmptyRow, null)),
        effectiveColumns.some(({ footer }) => footer) && /* @__PURE__ */ import_react107.default.createElement(
          DataTableFooter,
          {
            ref: footerRef,
            className: classNames == null ? void 0 : classNames.footer,
            style: styles == null ? void 0 : styles.footer,
            columns: effectiveColumns,
            defaultColumnProps,
            selectionVisible: selectionColumnVisible,
            selectorCellShadowVisible: selectionVisibleAndNotScrolledToLeft,
            scrollDiff: tableHeight - scrollViewportHeight
          }
        )
      )
    ),
    page && /* @__PURE__ */ import_react107.default.createElement(
      DataTablePagination,
      {
        ref: paginationRef,
        className: classNames == null ? void 0 : classNames.pagination,
        style: styles == null ? void 0 : styles.pagination,
        horizontalSpacing,
        fetching,
        page,
        onPageChange: handlePageChange,
        totalRecords,
        recordsPerPage,
        onRecordsPerPageChange,
        recordsPerPageOptions,
        recordsPerPageLabel,
        paginationWithEdges,
        paginationActiveTextColor,
        paginationActiveBackgroundColor,
        paginationSize,
        paginationText,
        paginationWrapBreakpoint,
        getPaginationControlProps,
        noRecordsText,
        loadingText,
        recordsLength
      }
    ),
    /* @__PURE__ */ import_react107.default.createElement(
      DataTableLoader,
      {
        pt: headerHeight,
        pb: paginationHeight,
        fetching,
        backgroundBlur: loaderBackgroundBlur,
        customContent: customLoader,
        size: loaderSize,
        type: loaderType,
        color: loaderColor
      }
    ),
    /* @__PURE__ */ import_react107.default.createElement(
      DataTableEmptyState,
      {
        pt: headerHeight,
        pb: paginationHeight,
        icon: noRecordsIcon,
        text: noRecordsText,
        active: !fetching && !recordsLength
      },
      emptyState
    )
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DataTable,
  differenceBy,
  getRecordId,
  getValueAtPath,
  humanize,
  uniqBy
});
//# sourceMappingURL=index.js.map