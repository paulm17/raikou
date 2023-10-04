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
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
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
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// ../../../node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.2.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js
var require_use_sync_external_store_shim_production_min = __commonJS({
  "../../../node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.2.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js"(exports) {
    "use strict";
    var e = __require("react");
    function h(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var k = "function" === typeof Object.is ? Object.is : h;
    var l = e.useState;
    var m = e.useEffect;
    var n = e.useLayoutEffect;
    var p = e.useDebugValue;
    function q(a, b) {
      var d = b(), f = l({ inst: { value: d, getSnapshot: b } }), c = f[0].inst, g = f[1];
      n(function() {
        c.value = d;
        c.getSnapshot = b;
        r(c) && g({ inst: c });
      }, [a, d, b]);
      m(function() {
        r(c) && g({ inst: c });
        return a(function() {
          r(c) && g({ inst: c });
        });
      }, [a]);
      p(d);
      return d;
    }
    function r(a) {
      var b = a.getSnapshot;
      a = a.value;
      try {
        var d = b();
        return !k(a, d);
      } catch (f) {
        return true;
      }
    }
    function t(a, b) {
      return b();
    }
    var u = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t : q;
    exports.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : u;
  }
});

// ../../../node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.2.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "../../../node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.2.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React85 = __require("react");
        var ReactSharedInternals = React85.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useState19 = React85.useState, useEffect17 = React85.useEffect, useLayoutEffect5 = React85.useLayoutEffect, useDebugValue2 = React85.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false;
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          {
            if (!didWarnOld18Alpha) {
              if (React85.startTransition !== void 0) {
                didWarnOld18Alpha = true;
                error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
              }
            }
          }
          var value = getSnapshot();
          {
            if (!didWarnUncachedGetSnapshot) {
              var cachedValue = getSnapshot();
              if (!objectIs(value, cachedValue)) {
                error("The result of getSnapshot should be cached to avoid an infinite loop");
                didWarnUncachedGetSnapshot = true;
              }
            }
          }
          var _useState = useState19({
            inst: {
              value,
              getSnapshot
            }
          }), inst = _useState[0].inst, forceUpdate = _useState[1];
          useLayoutEffect5(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
          }, [subscribe, value, getSnapshot]);
          useEffect17(function() {
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
            var handleStoreChange = function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            };
            return subscribe(handleStoreChange);
          }, [subscribe]);
          useDebugValue2(value);
          return value;
        }
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          var prevValue = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(prevValue, nextValue);
          } catch (error2) {
            return true;
          }
        }
        function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
          return getSnapshot();
        }
        var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var isServerEnvironment = !canUseDOM;
        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
        var useSyncExternalStore$2 = React85.useSyncExternalStore !== void 0 ? React85.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// ../../../node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.2.0/node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "../../../node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.2.0/node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module.exports = require_use_sync_external_store_shim_production_min();
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// ../../../node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.2.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js
var require_with_selector_production_min = __commonJS({
  "../../../node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.2.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js"(exports) {
    "use strict";
    var h = __require("react");
    var n = require_shim();
    function p(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var q = "function" === typeof Object.is ? Object.is : p;
    var r = n.useSyncExternalStore;
    var t = h.useRef;
    var u = h.useEffect;
    var v = h.useMemo;
    var w = h.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(a, b, e, l, g) {
      var c = t(null);
      if (null === c.current) {
        var f = { hasValue: false, value: null };
        c.current = f;
      } else
        f = c.current;
      c = v(function() {
        function a2(a3) {
          if (!c2) {
            c2 = true;
            d2 = a3;
            a3 = l(a3);
            if (void 0 !== g && f.hasValue) {
              var b2 = f.value;
              if (g(b2, a3))
                return k = b2;
            }
            return k = a3;
          }
          b2 = k;
          if (q(d2, a3))
            return b2;
          var e2 = l(a3);
          if (void 0 !== g && g(b2, e2))
            return b2;
          d2 = a3;
          return k = e2;
        }
        var c2 = false, d2, k, m = void 0 === e ? null : e;
        return [function() {
          return a2(b());
        }, null === m ? void 0 : function() {
          return a2(m());
        }];
      }, [b, e, l, g]);
      var d = r(a, c[0], c[1]);
      u(function() {
        f.hasValue = true;
        f.value = d;
      }, [d]);
      w(d);
      return d;
    };
  }
});

// ../../../node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.2.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "../../../node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.2.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React85 = __require("react");
        var shim = require_shim();
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useSyncExternalStore = shim.useSyncExternalStore;
        var useRef17 = React85.useRef, useEffect17 = React85.useEffect, useMemo6 = React85.useMemo, useDebugValue2 = React85.useDebugValue;
        function useSyncExternalStoreWithSelector2(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
          var instRef = useRef17(null);
          var inst;
          if (instRef.current === null) {
            inst = {
              hasValue: false,
              value: null
            };
            instRef.current = inst;
          } else {
            inst = instRef.current;
          }
          var _useMemo = useMemo6(function() {
            var hasMemo = false;
            var memoizedSnapshot;
            var memoizedSelection;
            var memoizedSelector = function(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                var _nextSelection = selector(nextSnapshot);
                if (isEqual !== void 0) {
                  if (inst.hasValue) {
                    var currentSelection = inst.value;
                    if (isEqual(currentSelection, _nextSelection)) {
                      memoizedSelection = currentSelection;
                      return currentSelection;
                    }
                  }
                }
                memoizedSelection = _nextSelection;
                return _nextSelection;
              }
              var prevSnapshot = memoizedSnapshot;
              var prevSelection = memoizedSelection;
              if (objectIs(prevSnapshot, nextSnapshot)) {
                return prevSelection;
              }
              var nextSelection = selector(nextSnapshot);
              if (isEqual !== void 0 && isEqual(prevSelection, nextSelection)) {
                return prevSelection;
              }
              memoizedSnapshot = nextSnapshot;
              memoizedSelection = nextSelection;
              return nextSelection;
            };
            var maybeGetServerSnapshot = getServerSnapshot === void 0 ? null : getServerSnapshot;
            var getSnapshotWithSelector = function() {
              return memoizedSelector(getSnapshot());
            };
            var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? void 0 : function() {
              return memoizedSelector(maybeGetServerSnapshot());
            };
            return [getSnapshotWithSelector, getServerSnapshotWithSelector];
          }, [getSnapshot, getServerSnapshot, selector, isEqual]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];
          var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
          useEffect17(function() {
            inst.hasValue = true;
            inst.value = value;
          }, [value]);
          useDebugValue2(value);
          return value;
        }
        exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// ../../../node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.2.0/node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "../../../node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.2.0/node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module.exports = require_with_selector_production_min();
    } else {
      module.exports = require_with_selector_development();
    }
  }
});

// ../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js
var require_react_is_production_min = __commonJS({
  "../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js"(exports) {
    "use strict";
    var b = "function" === typeof Symbol && Symbol.for;
    var c = b ? Symbol.for("react.element") : 60103;
    var d = b ? Symbol.for("react.portal") : 60106;
    var e = b ? Symbol.for("react.fragment") : 60107;
    var f = b ? Symbol.for("react.strict_mode") : 60108;
    var g = b ? Symbol.for("react.profiler") : 60114;
    var h = b ? Symbol.for("react.provider") : 60109;
    var k = b ? Symbol.for("react.context") : 60110;
    var l = b ? Symbol.for("react.async_mode") : 60111;
    var m = b ? Symbol.for("react.concurrent_mode") : 60111;
    var n = b ? Symbol.for("react.forward_ref") : 60112;
    var p = b ? Symbol.for("react.suspense") : 60113;
    var q = b ? Symbol.for("react.suspense_list") : 60120;
    var r = b ? Symbol.for("react.memo") : 60115;
    var t = b ? Symbol.for("react.lazy") : 60116;
    var v = b ? Symbol.for("react.block") : 60121;
    var w = b ? Symbol.for("react.fundamental") : 60117;
    var x = b ? Symbol.for("react.responder") : 60118;
    var y = b ? Symbol.for("react.scope") : 60119;
    function z(a) {
      if ("object" === typeof a && null !== a) {
        var u = a.$$typeof;
        switch (u) {
          case c:
            switch (a = a.type, a) {
              case l:
              case m:
              case e:
              case g:
              case f:
              case p:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case k:
                  case n:
                  case t:
                  case r:
                  case h:
                    return a;
                  default:
                    return u;
                }
            }
          case d:
            return u;
        }
      }
    }
    function A(a) {
      return z(a) === m;
    }
    exports.AsyncMode = l;
    exports.ConcurrentMode = m;
    exports.ContextConsumer = k;
    exports.ContextProvider = h;
    exports.Element = c;
    exports.ForwardRef = n;
    exports.Fragment = e;
    exports.Lazy = t;
    exports.Memo = r;
    exports.Portal = d;
    exports.Profiler = g;
    exports.StrictMode = f;
    exports.Suspense = p;
    exports.isAsyncMode = function(a) {
      return A(a) || z(a) === l;
    };
    exports.isConcurrentMode = A;
    exports.isContextConsumer = function(a) {
      return z(a) === k;
    };
    exports.isContextProvider = function(a) {
      return z(a) === h;
    };
    exports.isElement = function(a) {
      return "object" === typeof a && null !== a && a.$$typeof === c;
    };
    exports.isForwardRef = function(a) {
      return z(a) === n;
    };
    exports.isFragment = function(a) {
      return z(a) === e;
    };
    exports.isLazy = function(a) {
      return z(a) === t;
    };
    exports.isMemo = function(a) {
      return z(a) === r;
    };
    exports.isPortal = function(a) {
      return z(a) === d;
    };
    exports.isProfiler = function(a) {
      return z(a) === g;
    };
    exports.isStrictMode = function(a) {
      return z(a) === f;
    };
    exports.isSuspense = function(a) {
      return z(a) === p;
    };
    exports.isValidElementType = function(a) {
      return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
    };
    exports.typeOf = z;
  }
});

// ../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment2 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal2 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement6(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment2;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal2;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement6;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// ../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module.exports = require_react_is_production_min();
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// ../../../node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "../../../node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// ../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// ../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js"(exports, module) {
    "use strict";
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// ../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (process.env.NODE_ENV !== "production") {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (process.env.NODE_ENV !== "production") {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (process.env.NODE_ENV !== "production") {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// ../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (process.env.NODE_ENV !== "production") {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (process.env.NODE_ENV !== "production") {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (process.env.NODE_ENV !== "production" && typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (process.env.NODE_ENV !== "production") {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          process.env.NODE_ENV !== "production" ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode2(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode2(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode2);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode2(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode2(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// ../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js
var require_factoryWithThrowingShims = __commonJS({
  "../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    function emptyFunction() {
    }
    function emptyFunctionWithReset() {
    }
    emptyFunctionWithReset.resetWarningCache = emptyFunction;
    module.exports = function() {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret) {
          return;
        }
        var err = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        err.name = "Invariant Violation";
        throw err;
      }
      ;
      shim.isRequired = shim;
      function getShim() {
        return shim;
      }
      ;
      var ReactPropTypes = {
        array: shim,
        bigint: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// ../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = require_factoryWithThrowingShims()();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// src/DataTable.tsx
import React84, {
  useCallback as useCallback5,
  useMemo as useMemo5,
  useState as useState18
} from "react";
import { Box as Box34, factory as factory41, useProps as useProps55 } from "@raikou/core";

// src/hooks.ts
import { useResizeObserver, useTimeout } from "@raikou/hooks";
import { useEffect as useEffect3, useState as useState2 } from "react";

// src/utils.ts
import { useRaikouTheme } from "@raikou/core";
import { useMediaQuery } from "@raikou/hooks";
import {
  useCallback,
  useEffect as useEffect2,
  useLayoutEffect,
  useMemo,
  useRef as useRef2
} from "react";

// src/useMediaQueries.ts
import { useEffect, useRef, useState } from "react";

// src/utils.ts
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect2;
function useMediaQueryStringOrFunction(mediaQuery) {
  const theme = useRaikouTheme();
  const mediaQueryValue = typeof mediaQuery === "function" ? mediaQuery(theme) : mediaQuery;
  return useMediaQuery(mediaQueryValue || "", true);
}
function humanize(value) {
  const str = value.replace(/([a-z\d])([A-Z]+)/g, "$1 $2").replace(/\W|_/g, " ").trim().toLowerCase();
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}
function differenceBy(arr1, arr2, iteratee) {
  return arr1.filter((c) => !arr2.map(iteratee).includes(iteratee(c)));
}
function uniqBy(arr, iteratee) {
  return arr.filter(
    (x, i, self) => i === self.findIndex((y) => iteratee(x) === iteratee(y))
  );
}
function getValueAtPath(obj, path) {
  if (!path)
    return void 0;
  const pathArray = path.match(/([^[.\]])+/g);
  return pathArray.reduce(
    (prevObj, key) => prevObj && prevObj[key],
    obj
  );
}
function getRecordId(record, idAccessor) {
  return typeof idAccessor === "string" ? getValueAtPath(record, idAccessor) : idAccessor(record);
}

// src/hooks.ts
function useLastSelectionChangeIndex(recordIds) {
  const [lastSelectionChangeIndex, setLastSelectionChangeIndex] = useState2(null);
  const recordIdsString = (recordIds == null ? void 0 : recordIds.join(":")) || "";
  useEffect3(() => {
    setLastSelectionChangeIndex(null);
  }, [recordIdsString]);
  return { lastSelectionChangeIndex, setLastSelectionChangeIndex };
}
function useRowContextMenu(fetching) {
  const [rowContextMenuInfo, setRowContextMenuInfo] = useState2(null);
  useEffect3(() => {
    if (fetching)
      setRowContextMenuInfo(null);
  }, [fetching]);
  return { rowContextMenuInfo, setRowContextMenuInfo };
}
function useRowExpansion({
  rowExpansion,
  records,
  idAccessor
}) {
  let initiallyExpandedRecordIds = [];
  if (rowExpansion && records) {
    const { trigger, allowMultiple, initiallyExpanded } = rowExpansion;
    if (records && trigger === "always") {
      initiallyExpandedRecordIds = records.map(
        (r) => getRecordId(r, idAccessor)
      );
    } else if (initiallyExpanded) {
      initiallyExpandedRecordIds = records.filter(initiallyExpanded).map((r) => getRecordId(r, idAccessor));
      if (!allowMultiple) {
        initiallyExpandedRecordIds = [initiallyExpandedRecordIds[0]];
      }
    }
  }
  let expandedRecordIds;
  let setExpandedRecordIds;
  const expandedRecordIdsState = useState2(
    initiallyExpandedRecordIds
  );
  if (rowExpansion) {
    const { trigger, allowMultiple, collapseProps, content } = rowExpansion;
    if (rowExpansion.expanded) {
      ({
        recordIds: expandedRecordIds,
        onRecordIdsChange: setExpandedRecordIds
      } = rowExpansion.expanded);
    } else {
      [expandedRecordIds, setExpandedRecordIds] = expandedRecordIdsState;
    }
    const collapseRow = (record) => setExpandedRecordIds == null ? void 0 : setExpandedRecordIds(
      expandedRecordIds.filter(
        (id) => id !== getRecordId(record, idAccessor)
      )
    );
    return {
      expandOnClick: trigger !== "always" && trigger !== "never",
      isRowExpanded: (record) => trigger === "always" ? true : expandedRecordIds.includes(getRecordId(record, idAccessor)),
      expandRow: (record) => {
        const recordId = getRecordId(record, idAccessor);
        setExpandedRecordIds == null ? void 0 : setExpandedRecordIds(
          allowMultiple ? [...expandedRecordIds, recordId] : [recordId]
        );
      },
      collapseRow,
      collapseProps,
      content: (record, recordIndex) => () => content({ record, recordIndex, collapse: () => collapseRow(record) })
    };
  }
}
function useRowExpansionStatus(open, transitionDuration) {
  const [expanded, setExpanded] = useState2(open);
  const [visible, setVisible] = useState2(open);
  const expand = useTimeout(() => setExpanded(true), 0);
  const hide2 = useTimeout(() => setVisible(false), transitionDuration || 200);
  useEffect3(() => {
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
function useElementOuterSize() {
  var _a;
  const [ref] = useResizeObserver();
  const { width, height } = ((_a = ref.current) == null ? void 0 : _a.getBoundingClientRect()) || {
    width: 0,
    height: 0
  };
  return { ref, width, height };
}

// ../components/Table/src/Table.tsx
import React2 from "react";
import {
  Box as Box2,
  factory as factory2,
  useProps as useProps2,
  useStyles,
  getSpacing,
  getThemeColor,
  createVarsResolver
} from "@raikou/core";

// ../components/Table/src/Table.components.tsx
import React from "react";
import {
  Box,
  factory,
  useProps
} from "@raikou/core";

// ../../../node_modules/.pnpm/zustand@4.4.0_@types+react@18.2.23_react@18.2.0/node_modules/zustand/esm/vanilla.mjs
var import_meta = {};
var createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object") ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => {
    if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
      );
    }
    listeners.clear();
  };
  const api = { setState, getState, subscribe, destroy };
  state = createState(setState, getState, api);
  return api;
};
var createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

// ../../../node_modules/.pnpm/zustand@4.4.0_@types+react@18.2.23_react@18.2.0/node_modules/zustand/esm/index.mjs
var import_with_selector = __toESM(require_with_selector(), 1);
import { useDebugValue } from "react";
var import_meta2 = {};
var { useSyncExternalStoreWithSelector } = import_with_selector.default;
function useStore(api, selector = api.getState, equalityFn) {
  if ((import_meta2.env ? import_meta2.env.MODE : void 0) !== "production" && equalityFn) {
    console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    );
  }
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
    selector,
    equalityFn
  );
  useDebugValue(slice);
  return slice;
}
var createImpl = (createState) => {
  if ((import_meta2.env ? import_meta2.env.MODE : void 0) !== "production" && typeof createState !== "function") {
    console.warn(
      "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
    );
  }
  const api = typeof createState === "function" ? createStore(createState) : createState;
  const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
var create = (createState) => createState ? createImpl(createState) : createImpl;

// ../components/Table/src/store.ts
var useStore2 = create(() => ({
  getStyles: void 0,
  striped: void 0,
  highlightOnHover: void 0,
  withColumnBorders: void 0,
  withRowBorders: void 0,
  captionSide: "top"
}));

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
  const Component = factory((_props, ref) => {
    const props = useProps(name, {}, _props);
    const _a = props, { classNames, className, style, styles } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles"]);
    const ctx = useStore2.getState();
    return /* @__PURE__ */ React.createElement(
      Box,
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

// ../components/Table/src/Table.tsx
var defaultProps = {
  withRowBorders: true,
  verticalSpacing: 7
};
var varsResolver = createVarsResolver(
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
      "--table-horizontal-spacing": getSpacing(horizontalSpacing),
      "--table-vertical-spacing": getSpacing(verticalSpacing),
      "--table-border-color": borderColor ? getThemeColor(borderColor, theme) : void 0,
      "--table-striped-color": striped && stripedColor ? getThemeColor(stripedColor, theme) : void 0,
      "--table-highlight-on-hover-color": highlightOnHover && highlightOnHoverColor ? getThemeColor(highlightOnHoverColor, theme) : void 0
    }
  })
);
var Table = factory2((_props, ref) => {
  const props = useProps2("Table", defaultProps, _props);
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
    variant
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
    "variant"
  ]);
  const getStyles = useStyles({
    name: "Table",
    props,
    className,
    style,
    classes: {
      table: "table-root",
      th: "table-th",
      tr: "table-tr",
      td: "table-td",
      tbody: "table-tbody",
      caption: "table-caption",
      tfoot: "table-tfoot",
      thead: "table-thead"
    },
    classNames,
    styles,
    unstyled,
    rootSelector: "table",
    vars,
    varsResolver
  });
  useStore2.setState({
    getStyles,
    striped: striped === true ? "odd" : striped || void 0,
    highlightOnHover,
    withColumnBorders,
    withRowBorders,
    captionSide: captionSide || "bottom"
  });
  return /* @__PURE__ */ React2.createElement(
    Box2,
    __spreadValues(__spreadValues({
      component: "table",
      variant,
      ref,
      mod: { "data-with-table-border": withTableBorder }
    }, getStyles("table")), others)
  );
});
Table.displayName = "@raikou/core/Table";
Table.Td = TableTd;
Table.Th = TableTh;
Table.Tr = TableTr;
Table.Thead = TableThead;
Table.Tbody = TableTbody;
Table.Tfoot = TableTfoot;
Table.Caption = TableCaption;

// src/DataTable.tsx
import cx20 from "clsx";

// src/DataTableScrollArea.tsx
import React18 from "react";
import {
  Box as Box6,
  factory as factory4,
  useProps as useProps5
} from "@raikou/core";

// ../components/ScrollArea/src/ScrollArea.tsx
import React17, { useState as useState10 } from "react";
import {
  Box as Box5,
  factory as factory3,
  useProps as useProps4,
  useStyles as useStyles2,
  rem,
  createVarsResolver as createVarsResolver2
} from "@raikou/core";

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbar.tsx
import React12 from "react";

// ../components/_utils/create-safe-context/create-safe-context.tsx
import React3, { createContext, useContext } from "react";
function createSafeContext(errorMessage) {
  const Context = createContext(null);
  const useSafeContext = () => {
    const ctx = useContext(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ React3.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../components/_utils/create-optional-context/create-optional-context.tsx
import React4, { createContext as createContext2, useContext as useContext2 } from "react";
function createOptionalContext(initialValue = null) {
  const Context = createContext2(initialValue);
  const useOptionalContext = () => useContext2(Context);
  const Provider = ({ children, value }) => /* @__PURE__ */ React4.createElement(Context.Provider, { value }, children);
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
import { useState as useState3 } from "react";
function useHovered() {
  const [hovered, setHovered] = useState3(-1);
  const resetHovered = () => setHovered(-1);
  return [hovered, { setHovered, resetHovered }];
}

// ../components/_utils/create-use-external-events/create-use-external-events.ts
import { useEffect as useEffect4, useLayoutEffect as useLayoutEffect2 } from "react";

// ../components/ScrollArea/src/ScrollArea.context.ts
var [ScrollAreaProvider, useScrollAreaContext] = createSafeContext(
  "ScrollArea.Root component was not found in tree"
);

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbarVisible.tsx
import React8, { useRef as useRef5, useState as useState5, forwardRef as forwardRef4 } from "react";
import { useDirection } from "@raikou/core";

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollbarX.tsx
import React6, { forwardRef as forwardRef2, useRef as useRef3, useState as useState4, useEffect as useEffect6 } from "react";
import { useMergedRef as useMergedRef2 } from "@raikou/hooks";

// ../components/ScrollArea/src/ScrollAreaScrollbar/Scrollbar.tsx
import React5, { useEffect as useEffect5, forwardRef } from "react";
import {
  useMergedRef,
  useCallbackRef as useCallbackRef2,
  useDebounceCallback
} from "@raikou/hooks";

// ../components/ScrollArea/src/use-resize-observer.ts
import { useIsomorphicEffect, useCallbackRef } from "@raikou/hooks";
function useResizeObserver2(element, onResize) {
  const handleResize = useCallbackRef(onResize);
  useIsomorphicEffect(() => {
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
var Scrollbar = forwardRef(
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
    const [scrollbar, setScrollbar] = React5.useState(
      null
    );
    const composeRefs = useMergedRef(
      forwardedRef,
      (node) => setScrollbar(node)
    );
    const rectRef = React5.useRef(null);
    const prevWebkitUserSelectRef = React5.useRef("");
    const { viewport } = context;
    const maxScrollPos = sizes.content - sizes.viewport;
    const handleWheelScroll = useCallbackRef2(onWheelScroll);
    const handleThumbPositionChange = useCallbackRef2(onThumbPositionChange);
    const handleResize = useDebounceCallback(onResize, 10);
    const handleDragScroll = (event) => {
      if (rectRef.current) {
        const x = event.clientX - rectRef.current.left;
        const y = event.clientY - rectRef.current.top;
        onDragScroll({ x, y });
      }
    };
    useEffect5(() => {
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
    useEffect5(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
    useResizeObserver2(scrollbar, handleResize);
    useResizeObserver2(context.content, handleResize);
    return /* @__PURE__ */ React5.createElement(
      ScrollbarProvider,
      {
        value: {
          scrollbar,
          hasThumb,
          onThumbChange: useCallbackRef2(onThumbChange),
          onThumbPointerUp: useCallbackRef2(onThumbPointerUp),
          onThumbPositionChange: handleThumbPositionChange,
          onThumbPointerDown: useCallbackRef2(onThumbPointerDown)
        }
      },
      /* @__PURE__ */ React5.createElement(
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

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollbarX.tsx
var ScrollAreaScrollbarX = forwardRef2((props, forwardedRef) => {
  const _a = props, { sizes, onSizesChange, style } = _a, others = __objRest(_a, ["sizes", "onSizesChange", "style"]);
  const ctx = useScrollAreaContext();
  const [computedStyle, setComputedStyle] = useState4();
  const ref = useRef3(null);
  const composeRefs = useMergedRef2(forwardedRef, ref, ctx.onScrollbarXChange);
  useEffect6(() => {
    if (ref.current)
      setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ React6.createElement(
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
import React7, { forwardRef as forwardRef3, useEffect as useEffect7, useRef as useRef4 } from "react";
import { useMergedRef as useMergedRef3 } from "@raikou/hooks";
var ScrollAreaScrollbarY = forwardRef3((props, forwardedRef) => {
  const _a = props, { sizes, onSizesChange, style } = _a, others = __objRest(_a, ["sizes", "onSizesChange", "style"]);
  const context = useScrollAreaContext();
  const [computedStyle, setComputedStyle] = React7.useState();
  const ref = useRef4(null);
  const composeRefs = useMergedRef3(
    forwardedRef,
    ref,
    context.onScrollbarYChange
  );
  useEffect7(() => {
    if (ref.current)
      setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ React7.createElement(
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
var ScrollAreaScrollbarVisible = forwardRef4((props, forwardedRef) => {
  const _a = props, { orientation = "vertical" } = _a, scrollbarProps = __objRest(_a, ["orientation"]);
  const { dir } = useDirection();
  const context = useScrollAreaContext();
  const thumbRef = useRef5(null);
  const pointerOffsetRef = useRef5(0);
  const [sizes, setSizes] = useState5({
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
    return /* @__PURE__ */ React8.createElement(
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
    return /* @__PURE__ */ React8.createElement(
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
import React10, { forwardRef as forwardRef6, useEffect as useEffect8, useState as useState7 } from "react";

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbarAuto.tsx
import React9, { forwardRef as forwardRef5, useState as useState6 } from "react";
import { useDebounceCallback as useDebounceCallback2 } from "@raikou/hooks";
var ScrollAreaScrollbarAuto = forwardRef5((props, ref) => {
  const context = useScrollAreaContext();
  const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
  const [visible, setVisible] = useState6(false);
  const isHorizontal = props.orientation === "horizontal";
  const handleResize = useDebounceCallback2(() => {
    if (context.viewport) {
      const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
      const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
      setVisible(isHorizontal ? isOverflowX : isOverflowY);
    }
  }, 10);
  useResizeObserver2(context.viewport, handleResize);
  useResizeObserver2(context.content, handleResize);
  if (forceMount || visible) {
    return /* @__PURE__ */ React9.createElement(
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
var ScrollAreaScrollbarHover = forwardRef6(
  (props, ref) => {
    const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
    const context = useScrollAreaContext();
    const [visible, setVisible] = useState7(false);
    useEffect8(() => {
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
      return /* @__PURE__ */ React10.createElement(
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
import React11, { forwardRef as forwardRef7, useEffect as useEffect9, useState as useState8 } from "react";
import { useDebounceCallback as useDebounceCallback3 } from "@raikou/hooks";
var ScrollAreaScrollbarScroll = forwardRef7((props, red) => {
  const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
  const context = useScrollAreaContext();
  const isHorizontal = props.orientation === "horizontal";
  const [state, setState] = useState8("hidden");
  const debounceScrollEnd = useDebounceCallback3(() => setState("idle"), 100);
  useEffect9(() => {
    if (state === "idle") {
      const hideTimer = window.setTimeout(
        () => setState("hidden"),
        context.scrollHideDelay
      );
      return () => window.clearTimeout(hideTimer);
    }
    return void 0;
  }, [state, context.scrollHideDelay]);
  useEffect9(() => {
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
    return /* @__PURE__ */ React11.createElement(
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
var ScrollAreaScrollbar = React12.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
    const context = useScrollAreaContext();
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === "horizontal";
    React12.useEffect(() => {
      isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
      return () => {
        isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
      };
    }, [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]);
    return context.type === "hover" ? /* @__PURE__ */ React12.createElement(ScrollAreaScrollbarHover, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef, forceMount })) : context.type === "scroll" ? /* @__PURE__ */ React12.createElement(ScrollAreaScrollbarScroll, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef, forceMount })) : context.type === "auto" ? /* @__PURE__ */ React12.createElement(ScrollAreaScrollbarAuto, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef, forceMount })) : context.type === "always" ? /* @__PURE__ */ React12.createElement(ScrollAreaScrollbarVisible, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef })) : null;
  }
);

// ../components/ScrollArea/src/ScrollAreaCorner/ScrollAreaCorner.tsx
import React13 from "react";
var Corner = React13.forwardRef(
  (props, ref) => {
    const _a = props, { style } = _a, others = __objRest(_a, ["style"]);
    const ctx = useScrollAreaContext();
    const [width, setWidth] = React13.useState(0);
    const [height, setHeight] = React13.useState(0);
    const hasSize = Boolean(width && height);
    useResizeObserver2(ctx.scrollbarX, () => {
      var _a2;
      const h = ((_a2 = ctx.scrollbarX) == null ? void 0 : _a2.offsetHeight) || 0;
      ctx.onCornerHeightChange(h);
      setHeight(h);
    });
    useResizeObserver2(ctx.scrollbarY, () => {
      var _a2;
      const w = ((_a2 = ctx.scrollbarY) == null ? void 0 : _a2.offsetWidth) || 0;
      ctx.onCornerWidthChange(w);
      setWidth(w);
    });
    return hasSize ? /* @__PURE__ */ React13.createElement("div", __spreadProps(__spreadValues({}, others), { ref, style: __spreadProps(__spreadValues({}, style), { width, height }) })) : null;
  }
);
var ScrollAreaCorner = React13.forwardRef((props, ref) => {
  const ctx = useScrollAreaContext();
  const hasBothScrollbarsVisible = Boolean(ctx.scrollbarX && ctx.scrollbarY);
  const hasCorner = ctx.type !== "scroll" && hasBothScrollbarsVisible;
  return hasCorner ? /* @__PURE__ */ React13.createElement(Corner, __spreadProps(__spreadValues({}, props), { ref })) : null;
});

// ../components/ScrollArea/src/ScrollAreaRoot/ScrollAreaRoot.tsx
import React14, { useState as useState9, forwardRef as forwardRef8 } from "react";
import { useMergedRef as useMergedRef4 } from "@raikou/hooks";
import { Box as Box3, useProps as useProps3 } from "@raikou/core";
var defaultProps2 = {
  scrollHideDelay: 1e3,
  type: "hover"
};
var ScrollAreaRoot = forwardRef8(
  (_props, ref) => {
    const props = useProps3("ScrollAreaRoot", defaultProps2, _props);
    const _a = props, { type, scrollHideDelay } = _a, others = __objRest(_a, ["type", "scrollHideDelay"]);
    const [scrollArea, setScrollArea] = useState9(null);
    const [viewport, setViewport] = useState9(null);
    const [content, setContent] = useState9(null);
    const [scrollbarX, setScrollbarX] = useState9(null);
    const [scrollbarY, setScrollbarY] = useState9(null);
    const [cornerWidth, setCornerWidth] = useState9(0);
    const [cornerHeight, setCornerHeight] = useState9(0);
    const [scrollbarXEnabled, setScrollbarXEnabled] = useState9(false);
    const [scrollbarYEnabled, setScrollbarYEnabled] = useState9(false);
    const rootRef = useMergedRef4(ref, (node) => setScrollArea(node));
    return /* @__PURE__ */ React14.createElement(
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
      /* @__PURE__ */ React14.createElement(
        Box3,
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
import React15, { forwardRef as forwardRef9 } from "react";
import { useMergedRef as useMergedRef5 } from "@raikou/hooks";
import { Box as Box4 } from "@raikou/core";
var ScrollAreaViewport = forwardRef9((_a, ref) => {
  var _b = _a, { children, style } = _b, others = __objRest(_b, ["children", "style"]);
  const ctx = useScrollAreaContext();
  const rootRef = useMergedRef5(ref, ctx.onViewportChange);
  return /* @__PURE__ */ React15.createElement(
    Box4,
    __spreadProps(__spreadValues({}, others), {
      ref: rootRef,
      style: __spreadValues({
        overflowX: ctx.scrollbarXEnabled ? "scroll" : "hidden",
        overflowY: ctx.scrollbarYEnabled ? "scroll" : "hidden"
      }, style)
    }),
    /* @__PURE__ */ React15.createElement(
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
import React16, { forwardRef as forwardRef10, useRef as useRef6, useEffect as useEffect10 } from "react";
import { useDebounceCallback as useDebounceCallback4, useMergedRef as useMergedRef6 } from "@raikou/hooks";
var Thumb = forwardRef10(
  (props, forwardedRef) => {
    const _a = props, { style } = _a, others = __objRest(_a, ["style"]);
    const scrollAreaContext = useScrollAreaContext();
    const scrollbarContext = useScrollbarContext();
    const { onThumbPositionChange } = scrollbarContext;
    const composedRef = useMergedRef6(
      forwardedRef,
      (node) => scrollbarContext.onThumbChange(node)
    );
    const removeUnlinkedScrollListenerRef = useRef6();
    const debounceScrollEnd = useDebounceCallback4(() => {
      if (removeUnlinkedScrollListenerRef.current) {
        removeUnlinkedScrollListenerRef.current();
        removeUnlinkedScrollListenerRef.current = void 0;
      }
    }, 100);
    useEffect10(() => {
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
    return /* @__PURE__ */ React16.createElement(
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
            const x = event.clientX - thumbRect.left;
            const y = event.clientY - thumbRect.top;
            scrollbarContext.onThumbPointerDown({ x, y });
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
var ScrollAreaThumb = React16.forwardRef((props, forwardedRef) => {
  const _a = props, { forceMount } = _a, thumbProps = __objRest(_a, ["forceMount"]);
  const scrollbarContext = useScrollbarContext();
  if (forceMount || scrollbarContext.hasThumb) {
    return /* @__PURE__ */ React16.createElement(Thumb, __spreadValues({ ref: forwardedRef }, thumbProps));
  }
  return null;
});

// ../components/ScrollArea/src/ScrollArea.tsx
var defaultProps3 = {
  scrollHideDelay: 1e3,
  type: "hover"
};
var varsResolver2 = createVarsResolver2(
  (_, { scrollbarSize }) => ({
    root: {
      "--scrollarea-scrollbar-size": rem(scrollbarSize)
    }
  })
);
var ScrollArea = factory3((_props, ref) => {
  const props = useProps4("ScrollArea", defaultProps3, _props);
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
  const [scrollbarHovered, setScrollbarHovered] = useState10(false);
  const getStyles = useStyles2({
    name: "ScrollArea",
    props,
    classes: {
      root: "scrollArea-root",
      viewport: "scrollArea-viewport",
      viewportInner: "scrollArea-viewportInner",
      scrollbar: "scrollArea-scrollbar",
      thumb: "scrollArea-thumb",
      corner: "scrollArea-corner"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver2
  });
  return /* @__PURE__ */ React17.createElement(
    ScrollAreaRoot,
    __spreadValues(__spreadValues({
      type: type === "never" ? "always" : type,
      scrollHideDelay,
      ref
    }, getStyles("root")), others),
    /* @__PURE__ */ React17.createElement(
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
    /* @__PURE__ */ React17.createElement(
      ScrollAreaScrollbar,
      __spreadProps(__spreadValues({}, getStyles("scrollbar")), {
        orientation: "horizontal",
        "data-hidden": type === "never" || void 0,
        forceMount: true,
        onMouseEnter: () => setScrollbarHovered(true),
        onMouseLeave: () => setScrollbarHovered(false)
      }),
      /* @__PURE__ */ React17.createElement(ScrollAreaThumb, __spreadValues({}, getStyles("thumb")))
    ),
    /* @__PURE__ */ React17.createElement(
      ScrollAreaScrollbar,
      __spreadProps(__spreadValues({}, getStyles("scrollbar")), {
        orientation: "vertical",
        "data-hidden": type === "never" || void 0,
        forceMount: true,
        onMouseEnter: () => setScrollbarHovered(true),
        onMouseLeave: () => setScrollbarHovered(false)
      }),
      /* @__PURE__ */ React17.createElement(ScrollAreaThumb, __spreadValues({}, getStyles("thumb")))
    ),
    /* @__PURE__ */ React17.createElement(
      ScrollAreaCorner,
      __spreadProps(__spreadValues({}, getStyles("corner")), {
        "data-hovered": scrollbarHovered || void 0,
        "data-hidden": type === "never" || void 0
      })
    )
  );
});
ScrollArea.displayName = "@raikou/core/ScrollArea";
var ScrollAreaAutosize = factory3((props, ref) => {
  const _a = useProps4("ScrollAreaAutosize", defaultProps3, props), {
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
  return /* @__PURE__ */ React17.createElement(Box5, __spreadProps(__spreadValues({}, others), { ref, style: [{ display: "flex" }, style] }), /* @__PURE__ */ React17.createElement(Box5, { style: { display: "flex", flexDirection: "column", flex: 1 } }, /* @__PURE__ */ React17.createElement(
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
ScrollAreaAutosize.displayName = "@raikou/core/ScrollAreaAutosize";
ScrollArea.Autosize = ScrollAreaAutosize;

// src/DataTableScrollArea.tsx
import cx from "clsx";
var defaultProps4 = {};
var DataTableScrollArea = factory4(
  (_props, ref) => {
    const props = useProps5("DataTableScrollArea", defaultProps4, _props);
    const _a = props, {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      topShadowVisible,
      leftShadowVisible,
      rightShadowVisible,
      bottomShadowVisible,
      headerHeight,
      footerHeight,
      onScrollPositionChange,
      viewportRef,
      scrollAreaProps,
      children
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "unstyled",
      "vars",
      "topShadowVisible",
      "leftShadowVisible",
      "rightShadowVisible",
      "bottomShadowVisible",
      "headerHeight",
      "footerHeight",
      "onScrollPositionChange",
      "viewportRef",
      "scrollAreaProps",
      "children"
    ]);
    const bottom = footerHeight ? footerHeight - 1 : 0;
    return /* @__PURE__ */ React18.createElement(
      ScrollArea,
      __spreadValues(__spreadProps(__spreadValues({}, scrollAreaProps), {
        viewportRef,
        classNames: {
          root: "dataTableScrollArea-root",
          scrollbar: "dataTableScrollArea-scrollbar",
          thumb: "dataTableScrollArea-thumb",
          corner: "dataTableScrollArea-corner"
        },
        styles: {
          scrollbar: { marginTop: headerHeight, marginBottom: bottom }
        },
        onScrollPositionChange
      }), others),
      children,
      /* @__PURE__ */ React18.createElement(
        Box6,
        {
          className: cx(
            "dataTableScrollArea-shadow",
            "dataTableScrollArea-topShadow",
            {
              ["dataTableScrollArea-shadowVisible"]: topShadowVisible
            }
          ),
          style: { top: headerHeight }
        }
      ),
      /* @__PURE__ */ React18.createElement(
        "div",
        {
          className: cx(
            "dataTableScrollArea-shadow",
            "dataTableScrollArea-leftShadow",
            {
              ["dataTableScrollArea-shadowVisible"]: leftShadowVisible
            }
          )
        }
      ),
      /* @__PURE__ */ React18.createElement(
        "div",
        {
          className: cx(
            "dataTableScrollArea-shadow",
            "dataTableScrollArea-rightShadow",
            {
              ["dataTableScrollArea-shadowVisible"]: rightShadowVisible
            }
          )
        }
      ),
      /* @__PURE__ */ React18.createElement(
        Box6,
        {
          className: cx(
            "dataTableScrollArea-shadow",
            "dataTableScrollArea-bottomShadow",
            {
              ["dataTableScrollArea-shadowVisible"]: bottomShadowVisible
            }
          ),
          style: { bottom }
        }
      )
    );
  }
);
DataTableScrollArea.displayName = "@raikou/DataTableScrollArea";

// src/DataTable.tsx
import { useMergedRef as useMergedRef11 } from "@raikou/hooks";

// src/DataTableEmptyState.tsx
import React21 from "react";
import {
  factory as factory5,
  useProps as useProps8
} from "@raikou/core";

// ../components/Center/src/Center.tsx
import React19 from "react";
import {
  Box as Box7,
  polymorphicFactory,
  useProps as useProps6,
  useStyles as useStyles3
} from "@raikou/core";
var defaultProps5 = {};
var Center = polymorphicFactory((_props, ref) => {
  const props = useProps6("Center", defaultProps5, _props);
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
  const getStyles = useStyles3({
    name: "Center",
    props,
    classes: {
      root: "center-root"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars
  });
  return /* @__PURE__ */ React19.createElement(Box7, __spreadValues(__spreadValues({ ref, mod: { inline: inline2 } }, getStyles("root")), others));
});
Center.displayName = "@raikou/core/Center";

// ../components/Text/src/Text.tsx
import React20 from "react";
import {
  Box as Box8,
  polymorphicFactory as polymorphicFactory2,
  useStyles as useStyles4,
  useProps as useProps7,
  getGradient,
  createVarsResolver as createVarsResolver3,
  getFontSize,
  getLineHeight
} from "@raikou/core";
function getTextTruncate(truncate) {
  if (truncate === "start") {
    return "start";
  }
  if (truncate === "end" || truncate) {
    return "end";
  }
  return void 0;
}
var defaultProps6 = {
  inherit: false
};
var varsResolver3 = createVarsResolver3(
  (theme, { variant, lineClamp, gradient, size: size2 }) => ({
    root: {
      "--text-fz": getFontSize(size2),
      "--text-lh": getLineHeight(size2),
      "--text-gradient": variant === "gradient" ? getGradient(gradient, theme) : void 0,
      "--text-line-clamp": typeof lineClamp === "number" ? lineClamp.toString() : void 0
    }
  })
);
var Text = polymorphicFactory2((_props, ref) => {
  const props = useProps7("Text", defaultProps6, _props);
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
  const getStyles = useStyles4({
    name: ["Text", __staticSelector],
    props,
    classes: {
      root: "text-root"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver3
  });
  return /* @__PURE__ */ React20.createElement(
    Box8,
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
Text.displayName = "@raikou/core/Text";

// src/DataTableEmptyState.tsx
import cx2 from "clsx";

// ../../../node_modules/.pnpm/@tabler+icons-react@2.30.0_react@18.2.0/node_modules/@tabler/icons-react/dist/esm/createReactComponent.js
var import_prop_types = __toESM(require_prop_types());
import { forwardRef as forwardRef11, createElement } from "react";

// ../../../node_modules/.pnpm/@tabler+icons-react@2.30.0_react@18.2.0/node_modules/@tabler/icons-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// ../../../node_modules/.pnpm/@tabler+icons-react@2.30.0_react@18.2.0/node_modules/@tabler/icons-react/dist/esm/createReactComponent.js
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
var __objRest2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var createReactComponent = (iconName, iconNamePascal, iconNode) => {
  const Component = forwardRef11(
    (_a, ref) => {
      var _b = _a, { color = "currentColor", size: size2 = 24, stroke = 2, children } = _b, rest = __objRest2(_b, ["color", "size", "stroke", "children"]);
      return createElement(
        "svg",
        __spreadValues2(__spreadProps2(__spreadValues2({
          ref
        }, defaultAttributes), {
          width: size2,
          height: size2,
          stroke: color,
          strokeWidth: stroke,
          className: `tabler-icon tabler-icon-${iconName}`
        }), rest),
        [...iconNode.map(([tag, attrs]) => createElement(tag, attrs)), ...children || []]
      );
    }
  );
  Component.propTypes = {
    color: import_prop_types.default.string,
    size: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]),
    stroke: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number])
  };
  Component.displayName = `${iconNamePascal}`;
  return Component;
};

// ../../../node_modules/.pnpm/@tabler+icons-react@2.30.0_react@18.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconArrowUp.js
var IconArrowUp = createReactComponent("arrow-up", "IconArrowUp", [
  ["path", { d: "M12 5l0 14", key: "svg-0" }],
  ["path", { d: "M18 11l-6 -6", key: "svg-1" }],
  ["path", { d: "M6 11l6 -6", key: "svg-2" }]
]);

// ../../../node_modules/.pnpm/@tabler+icons-react@2.30.0_react@18.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconArrowsVertical.js
var IconArrowsVertical = createReactComponent("arrows-vertical", "IconArrowsVertical", [
  ["path", { d: "M8 7l4 -4l4 4", key: "svg-0" }],
  ["path", { d: "M8 17l4 4l4 -4", key: "svg-1" }],
  ["path", { d: "M12 3l0 18", key: "svg-2" }]
]);

// ../../../node_modules/.pnpm/@tabler+icons-react@2.30.0_react@18.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconDatabaseOff.js
var IconDatabaseOff = createReactComponent("database-off", "IconDatabaseOff", [
  [
    "path",
    {
      d: "M12.983 8.978c3.955 -.182 7.017 -1.446 7.017 -2.978c0 -1.657 -3.582 -3 -8 -3c-1.661 0 -3.204 .19 -4.483 .515m-2.783 1.228c-.471 .382 -.734 .808 -.734 1.257c0 1.22 1.944 2.271 4.734 2.74",
      key: "svg-0"
    }
  ],
  [
    "path",
    {
      d: "M4 6v6c0 1.657 3.582 3 8 3c.986 0 1.93 -.067 2.802 -.19m3.187 -.82c1.251 -.53 2.011 -1.228 2.011 -1.99v-6",
      key: "svg-1"
    }
  ],
  [
    "path",
    {
      d: "M4 12v6c0 1.657 3.582 3 8 3c3.217 0 5.991 -.712 7.261 -1.74m.739 -3.26v-4",
      key: "svg-2"
    }
  ],
  ["path", { d: "M3 3l18 18", key: "svg-3" }]
]);

// ../../../node_modules/.pnpm/@tabler+icons-react@2.30.0_react@18.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconFilter.js
var IconFilter = createReactComponent("filter", "IconFilter", [
  [
    "path",
    {
      d: "M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z",
      key: "svg-0"
    }
  ]
]);

// src/DataTableEmptyState.tsx
var defaultProps7 = {};
var DataTableEmptyState = factory5(
  (_props, ref) => {
    const props = useProps8("DataTableEmptyState", defaultProps7, _props);
    const _a = props, {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      icon,
      text,
      active,
      children
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "unstyled",
      "vars",
      "icon",
      "text",
      "active",
      "children"
    ]);
    return /* @__PURE__ */ React21.createElement(
      Center,
      __spreadValues({
        className: cx2("dataTableEmptyState-root", {
          ["dataTableEmptyState-active"]: active
        })
      }, others),
      children || /* @__PURE__ */ React21.createElement(React21.Fragment, null, icon || /* @__PURE__ */ React21.createElement("div", { className: "dataTableEmptyState-standardIcon" }, /* @__PURE__ */ React21.createElement(IconDatabaseOff, null)), /* @__PURE__ */ React21.createElement(Text, { size: "sm", color: "dimmed" }, text))
    );
  }
);
DataTableEmptyState.displayName = "@raikou/DataTableEmptyState";

// src/DataTableLoader.tsx
import React27 from "react";
import {
  factory as factory7,
  useProps as useProps10
} from "@raikou/core";

// ../components/Loader/src/Loader.tsx
import React26 from "react";
import {
  Box as Box13,
  useProps as useProps9,
  getThemeColor as getThemeColor2,
  useStyles as useStyles5,
  factory as factory6,
  getSize,
  createVarsResolver as createVarsResolver4
} from "@raikou/core";

// ../components/Loader/src/loaders/Bars.tsx
import React22, { forwardRef as forwardRef12 } from "react";
import cx3 from "clsx";
import { Box as Box9 } from "@raikou/core";
var Bars = forwardRef12(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React22.createElement(
      Box9,
      __spreadProps(__spreadValues({
        component: "span",
        className: cx3("bars-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React22.createElement("span", { className: "bar" }),
      /* @__PURE__ */ React22.createElement("span", { className: "bar" }),
      /* @__PURE__ */ React22.createElement("span", { className: "bar" })
    );
  }
);

// ../components/Loader/src/loaders/Oval.tsx
import React23, { forwardRef as forwardRef13 } from "react";
import cx4 from "clsx";
import { Box as Box10 } from "@raikou/core";
var Oval = forwardRef13(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React23.createElement(
      Box10,
      __spreadProps(__spreadValues({
        component: "span",
        className: cx4("oval-loader", className)
      }, others), {
        ref
      })
    );
  }
);

// ../components/Loader/src/loaders/Progress.tsx
import React24, { forwardRef as forwardRef14 } from "react";
import cx5 from "clsx";
import { Box as Box11 } from "@raikou/core";
var Progress = forwardRef14(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React24.createElement(
      Box11,
      __spreadProps(__spreadValues({
        component: "span",
        className: cx5("progress-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React24.createElement("svg", { viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ React24.createElement("g", { fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ React24.createElement("g", { transform: "translate(2.5 2.5)", strokeWidth: "5" }, /* @__PURE__ */ React24.createElement("circle", { strokeOpacity: ".5", cx: "16", cy: "16", r: "16" }), /* @__PURE__ */ React24.createElement("path", { d: "M32 16c0-9.94-8.06-16-16-16" }, /* @__PURE__ */ React24.createElement(
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
import React25, { forwardRef as forwardRef15 } from "react";
import cx6 from "clsx";
import { Box as Box12 } from "@raikou/core";
var Dots = forwardRef15(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React25.createElement(
      Box12,
      __spreadProps(__spreadValues({
        component: "span",
        className: cx6("dots-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React25.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React25.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React25.createElement("span", { className: "dot" })
    );
  }
);

// ../components/Loader/src/Loader.tsx
var defaultLoaders = {
  bars: Bars,
  oval: Oval,
  dots: Dots,
  progress: Progress
};
var defaultProps8 = {
  loaders: defaultLoaders,
  type: "oval"
};
var varsResolver4 = createVarsResolver4(
  (theme, { size: size2, color }) => ({
    root: {
      "--loader-size": getSize(size2, "loader-size"),
      "--loader-color": color ? getThemeColor2(color, theme) : void 0
    }
  })
);
var Loader = factory6((_props, ref) => {
  const props = useProps9("Loader", defaultProps8, _props);
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
  const getStyles = useStyles5({
    name: "Loader",
    props,
    classes: {
      root: "loader-root"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver4
  });
  return /* @__PURE__ */ React26.createElement(
    Box13,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      ref,
      component: loaders[type],
      variant,
      size: size2
    }), others)
  );
});
Loader.displayName = "@raikou/core/Loader";

// src/DataTableLoader.tsx
import cx7 from "clsx";
var defaultProps9 = {};
var DataTableLoader = factory7(
  (_props, ref) => {
    const props = useProps10("DataTableLoader", defaultProps9, _props);
    const _a = props, {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      fetching,
      customContent,
      backgroundBlur,
      size: size2,
      variant,
      color
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "unstyled",
      "vars",
      "fetching",
      "customContent",
      "backgroundBlur",
      "size",
      "variant",
      "color"
    ]);
    return /* @__PURE__ */ React27.createElement(
      Center,
      __spreadValues({
        className: cx7("dataTableLoader-root", {
          ["dataTableLoader-fetching"]: fetching
        }),
        style: backgroundBlur ? { backdropFilter: `blur(${backgroundBlur}px)` } : void 0
      }, others),
      fetching && (customContent || /* @__PURE__ */ React27.createElement(Loader, { size: size2, variant, color }))
    );
  }
);
DataTableLoader.displayName = "@raikou/DataTableLoader";

// src/DataTablePagination.tsx
import React56 from "react";
import {
  factory as factory20,
  useProps as useProps31
} from "@raikou/core";

// ../components/Box/src/index.ts
import { Box as Box14 } from "@raikou/core";

// ../components/Pagination/src/Pagination.tsx
import React36 from "react";
import { factory as factory12, useProps as useProps17 } from "@raikou/core";

// ../components/Group/src/Group.tsx
import React28 from "react";
import {
  Box as Box15,
  factory as factory8,
  useProps as useProps11,
  useStyles as useStyles6,
  getSpacing as getSpacing2,
  createVarsResolver as createVarsResolver5
} from "@raikou/core";

// ../components/Group/src/filter-falsy-children/filter-falsy-children.ts
import { Children } from "react";
function filterFalsyChildren(children) {
  return Children.toArray(children).filter(Boolean);
}

// ../components/Group/src/Group.tsx
var defaultProps10 = {
  preventGrowOverflow: true,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
};
var varsResolver5 = createVarsResolver5(
  (_, { grow, preventGrowOverflow, gap, align, justify, wrap }, { childWidth }) => ({
    root: {
      "--group-child-width": grow && preventGrowOverflow ? childWidth : void 0,
      "--group-gap": getSpacing2(gap),
      "--group-align": align,
      "--group-justify": justify,
      "--group-wrap": wrap
    }
  })
);
var Group = factory8((_props, ref) => {
  const props = useProps11("Group", defaultProps10, _props);
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
  const resolvedGap = getSpacing2(gap != null ? gap : "md");
  const childWidth = `calc(${100 / childrenCount}% - (${resolvedGap} - ${resolvedGap} / ${childrenCount}))`;
  const stylesCtx = { childWidth };
  const getStyles = useStyles6({
    name: "Group",
    props,
    stylesCtx,
    className,
    style,
    classes: { root: "group-root" },
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver5
  });
  return /* @__PURE__ */ React28.createElement(
    Box15,
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

// ../components/Pagination/src/PaginationRoot/PaginationRoot.tsx
import React29 from "react";
import { usePagination } from "@raikou/hooks";
import {
  Box as Box16,
  factory as factory9,
  useProps as useProps12,
  useStyles as useStyles7,
  createVarsResolver as createVarsResolver6,
  createEventHandler,
  getRadius,
  getSize as getSize2,
  getFontSize as getFontSize2,
  getThemeColor as getThemeColor3
} from "@raikou/core";

// ../components/Pagination/src/Pagination.context.ts
var [PaginationProvider, usePaginationContext] = createSafeContext(
  "Pagination.Root component was not found in tree"
);

// ../components/Pagination/src/PaginationRoot/PaginationRoot.tsx
var defaultProps11 = {
  siblings: 1,
  boundaries: 1,
  size: "md"
};
var varsResolver6 = createVarsResolver6(
  (theme, { size: size2, radius, color }) => ({
    root: {
      "--pagination-control-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--pagination-control-size": getSize2(size2, "pagination-control-size"),
      "--pagination-control-fz": getFontSize2(size2),
      "--pagination-active-bg": color ? getThemeColor3(color, theme) : void 0
    }
  })
);
var PaginationRoot = factory9((_props, ref) => {
  const props = useProps12("PaginationRoot", defaultProps11, _props);
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
  const getStyles = useStyles7({
    name: "Pagination",
    classes: {
      root: "pagination-root",
      control: "pagination-control",
      dots: "pagination-dots"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver6
  });
  const { range, setPage, next, previous, active, first, last } = usePagination(
    {
      page: value,
      initialPage: defaultValue,
      onChange,
      total,
      siblings,
      boundaries
    }
  );
  const handleNextPage = createEventHandler(onNextPage, next);
  const handlePreviousPage = createEventHandler(onPreviousPage, previous);
  const handleFirstPage = createEventHandler(onFirstPage, first);
  const handleLastPage = createEventHandler(onLastPage, last);
  return /* @__PURE__ */ React29.createElement(
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
    /* @__PURE__ */ React29.createElement(Box16, __spreadValues(__spreadValues({ ref }, getStyles("root")), others))
  );
});
PaginationRoot.displayName = "@raikou/core/PaginationRoot";

// ../components/Pagination/src/PaginationControl/PaginationControl.tsx
import React31 from "react";
import {
  factory as factory10,
  useProps as useProps14
} from "@raikou/core";

// ../components/UnstyledButton/src/UnstyledButton.tsx
import React30 from "react";
import {
  Box as Box17,
  useProps as useProps13,
  useStyles as useStyles8,
  polymorphicFactory as polymorphicFactory3
} from "@raikou/core";
var defaultProps12 = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = polymorphicFactory3(
  (_props, ref) => {
    const props = useProps13("UnstyledButton", defaultProps12, _props);
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
    const getStyles = useStyles8({
      name: __staticSelector,
      props,
      classes: {
        root: "unstyled-button-root"
      },
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ React30.createElement(
      Box17,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { focusable: true })), {
        component,
        ref,
        type: component === "button" ? "button" : void 0
      }), others)
    );
  }
);
UnstyledButton.displayName = "@raikou/core/UnstyledButton";

// ../components/Pagination/src/PaginationControl/PaginationControl.tsx
var defaultProps13 = {
  withPadding: true
};
var PaginationControl = factory10(
  (_props, ref) => {
    const props = useProps14("PaginationControl", defaultProps13, _props);
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
    return /* @__PURE__ */ React31.createElement(
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
import React33 from "react";
import {
  Box as Box18,
  factory as factory11,
  useProps as useProps15
} from "@raikou/core";

// ../components/Pagination/src/Pagination.icons.tsx
import React32 from "react";
function PaginationIcon(_a) {
  var _b = _a, { style, children, path } = _b, others = __objRest(_b, ["style", "children", "path"]);
  return /* @__PURE__ */ React32.createElement(
    "svg",
    __spreadValues({
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      style: __spreadValues({
        width: "calc(var(--pagination-control-size) / 1.8)",
        height: "calc(var(--pagination-control-size) / 1.8)"
      }, style)
    }, others),
    /* @__PURE__ */ React32.createElement("path", { d: path, fill: "currentColor" })
  );
}
var PaginationNextIcon = (props) => /* @__PURE__ */ React32.createElement(
  PaginationIcon,
  __spreadProps(__spreadValues({}, props), {
    path: "M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z"
  })
);
var PaginationPreviousIcon = (props) => /* @__PURE__ */ React32.createElement(
  PaginationIcon,
  __spreadProps(__spreadValues({}, props), {
    path: "M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z"
  })
);
var PaginationFirstIcon = (props) => /* @__PURE__ */ React32.createElement(
  PaginationIcon,
  __spreadProps(__spreadValues({}, props), {
    path: "M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"
  })
);
var PaginationLastIcon = (props) => /* @__PURE__ */ React32.createElement(
  PaginationIcon,
  __spreadProps(__spreadValues({}, props), {
    path: "M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
  })
);
var PaginationDotsIcon = (props) => /* @__PURE__ */ React32.createElement(
  PaginationIcon,
  __spreadProps(__spreadValues({}, props), {
    path: "M2 8c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333C2.6 9.333 2 8.733 2 8zm9.333 0c0-.733.6-1.333 1.334-1.333C13.4 6.667 14 7.267 14 8s-.6 1.333-1.333 1.333c-.734 0-1.334-.6-1.334-1.333zM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8z"
  })
);

// ../components/Pagination/src/PaginationDots/PaginationDots.tsx
var defaultProps14 = {
  icon: PaginationDotsIcon
};
var PaginationDots = factory11((_props, ref) => {
  const props = useProps15("PaginationDots", defaultProps14, _props);
  const _a = props, { classNames, className, style, styles, vars, icon } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars", "icon"]);
  const ctx = usePaginationContext();
  const Icon = icon;
  return /* @__PURE__ */ React33.createElement(
    Box18,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("dots", { className, style, styles, classNames })), others),
    /* @__PURE__ */ React33.createElement(
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
import React34, { forwardRef as forwardRef16 } from "react";
import { createPolymorphicComponent, useProps as useProps16 } from "@raikou/core";
function createEdgeComponent({
  icon,
  name,
  action,
  type
}) {
  const defaultProps54 = { icon };
  const Component = forwardRef16(
    (props, ref) => {
      const _a = useProps16(name, defaultProps54, props), { icon: _icon } = _a, others = __objRest(_a, ["icon"]);
      const Icon = _icon;
      const ctx = usePaginationContext();
      const disabled = type === "next" ? ctx.active === ctx.total : ctx.active === 1;
      return /* @__PURE__ */ React34.createElement(
        PaginationControl,
        __spreadValues({
          disabled: ctx.disabled || disabled,
          ref,
          onClick: ctx[action],
          withPadding: false
        }, others),
        /* @__PURE__ */ React34.createElement(
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
  return createPolymorphicComponent(Component);
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
import React35 from "react";
function PaginationItems({ dotsIcon }) {
  const ctx = usePaginationContext();
  const items = ctx.range.map((page, index3) => {
    var _a;
    if (page === "dots") {
      return /* @__PURE__ */ React35.createElement(PaginationDots, { icon: dotsIcon, key: index3 });
    }
    return /* @__PURE__ */ React35.createElement(
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
  return /* @__PURE__ */ React35.createElement(React35.Fragment, null, items);
}
PaginationItems.displayName = "@raikou/core/PaginationItems";

// ../components/Pagination/src/Pagination.tsx
var defaultProps15 = {
  withControls: true,
  siblings: 1,
  boundaries: 1,
  gap: 8
};
var Pagination = factory12((_props, ref) => {
  const props = useProps17("Pagination", defaultProps15, _props);
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
  return /* @__PURE__ */ React36.createElement(PaginationRoot, __spreadValues({ ref, total }, others), /* @__PURE__ */ React36.createElement(Group, { gap }, withEdges && /* @__PURE__ */ React36.createElement(PaginationFirst, __spreadValues({ icon: firstIcon }, getControlProps == null ? void 0 : getControlProps("first"))), withControls && /* @__PURE__ */ React36.createElement(
    PaginationPrevious,
    __spreadValues({
      icon: previousIcon
    }, getControlProps == null ? void 0 : getControlProps("previous"))
  ), /* @__PURE__ */ React36.createElement(PaginationItems, { dotsIcon }), withControls && /* @__PURE__ */ React36.createElement(PaginationNext, __spreadValues({ icon: nextIcon }, getControlProps == null ? void 0 : getControlProps("next"))), withEdges && /* @__PURE__ */ React36.createElement(PaginationLast, __spreadValues({ icon: lastIcon }, getControlProps == null ? void 0 : getControlProps("last")))));
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
import cx9 from "clsx";

// src/DataTablePageSizeSelector.tsx
import React55 from "react";
import {
  factory as factory19,
  useProps as useProps30
} from "@raikou/core";

// ../components/Button/src/Button.tsx
import React38 from "react";
import {
  polymorphicFactory as polymorphicFactory4,
  useProps as useProps19,
  useStyles as useStyles10,
  createVarsResolver as createVarsResolver8,
  Box as Box20,
  getRadius as getRadius2,
  getSize as getSize3,
  getFontSize as getFontSize3
} from "@raikou/core";

// ../components/Button/src/ButtonGroup/ButtonGroup.tsx
import React37 from "react";
import {
  factory as factory13,
  Box as Box19,
  useProps as useProps18,
  useStyles as useStyles9,
  rem as rem2,
  createVarsResolver as createVarsResolver7
} from "@raikou/core";
var defaultProps16 = {
  orientation: "horizontal"
};
var varsResolver7 = createVarsResolver7(
  (_, { borderWidth }) => ({
    root: { "--button-border-width": rem2(borderWidth) }
  })
);
var ButtonGroup = factory13((_props, ref) => {
  const props = useProps18("ButtonGroup", defaultProps16, _props);
  const _a = useProps18("ButtonGroup", defaultProps16, _props), {
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
  const getStyles = useStyles9({
    name: "ButtonGroup",
    props,
    classes: {
      root: "buttonGroup-root"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver7
  });
  return /* @__PURE__ */ React37.createElement(
    Box19,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      ref,
      variant,
      mod: { "data-orientation": orientation },
      role: "group"
    }), others)
  );
});
ButtonGroup.displayName = "@raikou/core/ButtonGroup";

// ../components/Button/src/Button.tsx
var defaultProps17 = {
  loaderPosition: "left"
};
var varsResolver8 = createVarsResolver8(
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
        "--button-height": getSize3(size2, "button-height"),
        "--button-padding-x": getSize3(size2, "button-padding-x"),
        "--button-fz": (size2 == null ? void 0 : size2.includes("compact")) ? getFontSize3(size2.replace("compact-", "")) : getFontSize3(size2),
        "--button-radius": radius ? getRadius2(radius) : void 0,
        "--button-bg": color || variant ? colors.background : void 0,
        "--button-hover": color || variant ? colors.hover : void 0,
        "--button-color": color || variant ? colors.color : void 0,
        "--button-bd": color || variant ? colors.border : void 0
      }
    };
  }
);
var Button = polymorphicFactory4((_props, ref) => {
  const props = useProps19("Button", defaultProps17, _props);
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
  const getStyles = useStyles10({
    name: "Button",
    props,
    classes: {
      root: "button-root",
      inner: "button-inner",
      loader: "button-loader",
      section: "button-section",
      label: "button-label"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver8
  });
  const hasLeftSection = !!leftSection;
  const hasRightSection = !!rightSection;
  return /* @__PURE__ */ React38.createElement(
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
    /* @__PURE__ */ React38.createElement("span", __spreadValues({}, getStyles("inner")), !loading && leftSection && /* @__PURE__ */ React38.createElement(
      Box20,
      __spreadProps(__spreadValues({
        component: "span"
      }, getStyles("section")), {
        mod: { position: "left" }
      }),
      leftSection
    ), loading && loaderPosition === "left" && /* @__PURE__ */ React38.createElement(
      Box20,
      __spreadProps(__spreadValues({
        component: "span"
      }, getStyles("section")), {
        mod: { position: "left" }
      }),
      !loading && leftSection,
      loading && /* @__PURE__ */ React38.createElement(
        Loader,
        __spreadValues({
          type: "progress",
          color: "var(--button-color)",
          size: "calc(var(--button-height) / 2.4)"
        }, loaderProps)
      )
    ), loading && loaderPosition === "center" && /* @__PURE__ */ React38.createElement(Box20, __spreadValues({ component: "span" }, getStyles("loader")), /* @__PURE__ */ React38.createElement(
      Loader,
      __spreadValues({
        color: "var(--button-color)",
        size: "calc(var(--button-height) / 1.8)"
      }, loaderProps)
    )), /* @__PURE__ */ React38.createElement(Box20, __spreadValues({ component: "span", mod: { loading } }, getStyles("label")), children), rightSection && /* @__PURE__ */ React38.createElement(
      Box20,
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

// ../components/Menu/src/Menu.tsx
import React54 from "react";
import { useDidUpdate as useDidUpdate4, useUncontrolled as useUncontrolled2 } from "@raikou/hooks";
import {
  useProps as useProps29,
  useStyles as useStyles12,
  useResolvedStylesApi
} from "@raikou/core";

// ../components/Floating/src/use-delayed-hover.ts
import { useRef as useRef7, useEffect as useEffect11 } from "react";
function useDelayedHover({
  open,
  close,
  openDelay,
  closeDelay
}) {
  const openTimeout = useRef7(-1);
  const closeTimeout = useRef7(-1);
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
  useEffect11(() => clearTimeouts, []);
  return { openDropdown, closeDropdown };
}

// ../components/Floating/src/use-floating-auto-update.ts
import { useState as useState13, useEffect as useEffect15 } from "react";

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
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = yield fn({
      x,
      y,
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
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
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
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
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
      x,
      y,
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
      x,
      y
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
        x,
        y,
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
        x,
        y
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
          let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case "bestFit": {
                var _overflowsData$map$so;
                const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
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
  const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
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
          x,
          y
        } = evaluate(options, state);
        const nativeClientRects = Array.from((yield platform2.getClientRects == null ? void 0 : platform2.getClientRects(elements.reference)) || []);
        const clientRects = getRectsByLine(nativeClientRects);
        const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
        const paddingObject = getSideObjectFromPadding(padding);
        function getBoundingClientRect2() {
          if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
            return clientRects.find((rect) => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
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
          x,
          y
        } = state;
        const diffCoords = yield convertValueToCoords(state, options);
        return {
          x: x + diffCoords.x,
          y: y + diffCoords.y,
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
          x,
          y,
          placement
        } = state;
        const _a2 = evaluate(options, state), {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: (_ref) => {
              let {
                x: x2,
                y: y2
              } = _ref;
              return {
                x: x2,
                y: y2
              };
            }
          }
        } = _a2, detectOverflowOptions = __objRest(_a2, [
          "mainAxis",
          "crossAxis",
          "limiter"
        ]);
        const coords = {
          x,
          y
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
            x: limitedCoords.x - x,
            y: limitedCoords.y - y
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
        x,
        y,
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
        x,
        y
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
var createCoords = (v) => ({
  x: v,
  y: v
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
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
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
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
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
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
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
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x += max2(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
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
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isSafari();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
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
import * as React39 from "react";
import { useLayoutEffect as useLayoutEffect3, useEffect as useEffect12 } from "react";
import * as ReactDOM from "react-dom";
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
var index = typeof document !== "undefined" ? useLayoutEffect3 : useEffect12;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length, i, keys;
  if (a && b && typeof a == "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function useLatestRef(value) {
  const ref = React39.useRef(value);
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
  const [data, setData] = React39.useState({
    x: null,
    y: null,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React39.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const referenceRef = React39.useRef(null);
  const floatingRef = React39.useRef(null);
  const dataRef = React39.useRef(data);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const [reference, _setReference] = React39.useState(null);
  const [floating, _setFloating] = React39.useState(null);
  const setReference = React39.useCallback((node) => {
    if (referenceRef.current !== node) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React39.useCallback((node) => {
    if (floatingRef.current !== node) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const update = React39.useCallback(() => {
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
  const isMountedRef = React39.useRef(false);
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
  const refs = React39.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React39.useMemo(() => ({
    reference,
    floating
  }), [reference, floating]);
  return React39.useMemo(() => __spreadProps(__spreadValues({}, data), {
    update,
    refs,
    elements,
    reference: setReference,
    floating: setFloating
  }), [data, update, refs, elements, setReference, setFloating]);
}

// ../../../node_modules/.pnpm/@floating-ui+react@0.23.1_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react/dist/floating-ui.react.esm.js
import * as React40 from "react";
import { useLayoutEffect as useLayoutEffect4, useEffect as useEffect14, useRef as useRef10 } from "react";
import { createPortal, flushSync as flushSync2 } from "react-dom";
var index2 = typeof document !== "undefined" ? useLayoutEffect4 : useEffect14;
var serverHandoffComplete = false;
var count = 0;
var genId = () => "floating-ui-" + count++;
function useFloatingId() {
  const [id, setId] = React40.useState(() => serverHandoffComplete ? genId() : void 0);
  index2(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  React40.useEffect(() => {
    if (!serverHandoffComplete) {
      serverHandoffComplete = true;
    }
  }, []);
  return id;
}
var useReactId = React40[/* @__PURE__ */ "useId".toString()];
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
      map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l) => l !== listener)) || []);
    }
  };
}
var FloatingTreeContext = /* @__PURE__ */ React40.createContext(null);
var useFloatingTree = () => React40.useContext(FloatingTreeContext);
function getDocument(node) {
  return (node == null ? void 0 : node.ownerDocument) || document;
}
function getWindow2(value) {
  return getDocument(value).defaultView || window;
}
function isElement2(value) {
  return value ? value instanceof getWindow2(value).Element : false;
}
var useInsertionEffect = React40[/* @__PURE__ */ "useInsertionEffect".toString()];
var useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
function useEvent(callback) {
  const ref = React40.useRef(() => {
    if (process.env.NODE_ENV !== "production") {
      throw new Error("Cannot call an event handler while rendering.");
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return React40.useCallback(function() {
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
  const domReferenceRef = React40.useRef(null);
  const dataRef = React40.useRef({});
  const events = React40.useState(() => createPubSub())[0];
  const floatingId = useId();
  const [domReference, setDomReference] = React40.useState(null);
  const setPositionReference = React40.useCallback((node) => {
    const positionReference = isElement2(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    position.refs.setReference(positionReference);
  }, [position.refs]);
  const setReference = React40.useCallback((node) => {
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
  const refs = React40.useMemo(() => __spreadProps(__spreadValues({}, position.refs), {
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = React40.useMemo(() => __spreadProps(__spreadValues({}, position.elements), {
    domReference
  }), [position.elements, domReference]);
  const onOpenChange = useEvent(unstable_onOpenChange);
  const context = React40.useMemo(() => __spreadProps(__spreadValues({}, position), {
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
  return React40.useMemo(() => __spreadProps(__spreadValues({}, position), {
    context,
    refs,
    elements,
    reference: setReference,
    positionReference: setPositionReference
  }), [position, refs, elements, context, setReference, setPositionReference]);
}

// ../components/Floating/src/use-floating-auto-update.ts
import { useDidUpdate } from "@raikou/hooks";
function useFloatingAutoUpdate({
  opened,
  floating,
  position,
  positionDependencies
}) {
  const [delayedUpdate, setDelayedUpdate] = useState13(0);
  useEffect15(() => {
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
  useDidUpdate(() => {
    floating.update();
  }, positionDependencies);
  useDidUpdate(() => {
    setDelayedUpdate((c) => c + 1);
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
import React41, { forwardRef as forwardRef18 } from "react";
import { useDirection as useDirection2 } from "@raikou/core";

// ../components/Floating/src/FloatingArrow/get-arrow-position-styles.ts
import { rem as rem3 } from "@raikou/core";
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
    width: rem3(arrowSize),
    height: rem3(arrowSize),
    transform: "rotate(45deg)",
    position: "absolute",
    [radiusByFloatingSide[side]]: rem3(arrowRadius)
  };
  const arrowPlacement = rem3(-arrowSize / 2);
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
var FloatingArrow = forwardRef18(
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
    const { dir } = useDirection2();
    if (!visible) {
      return null;
    }
    return /* @__PURE__ */ React41.createElement(
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

// ../components/Popover/src/Popover.tsx
import React48, { useRef as useRef13, useState as useState16, useCallback as useCallback4 } from "react";
import { useId as useId2, useClickOutside } from "@raikou/hooks";
import {
  getDefaultZIndex,
  useProps as useProps23,
  useDirection as useDirection3,
  useStyles as useStyles11,
  createVarsResolver as createVarsResolver9,
  getRadius as getRadius3,
  getShadow
} from "@raikou/core";

// ../components/Popover/src/use-popover.ts
import { useDidUpdate as useDidUpdate2, useUncontrolled } from "@raikou/hooks";
function getPopoverMiddlewares(options) {
  var _a, _b, _c;
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
  return middlewares;
}
function usePopover(options) {
  const [_opened, setOpened] = useUncontrolled({
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
    middleware: [
      ...getPopoverMiddlewares(options),
      ...options.width === "target" ? [
        size({
          apply({ rects }) {
            var _a, _b;
            Object.assign((_b = (_a = floating.refs.floating.current) == null ? void 0 : _a.style) != null ? _b : {}, {
              width: `${rects.reference.width}px`
            });
          }
        })
      ] : []
    ]
  });
  useFloatingAutoUpdate({
    opened: options.opened,
    position: options.position,
    positionDependencies: options.positionDependencies || [],
    floating
  });
  useDidUpdate2(() => {
    var _a;
    (_a = options.onPositionChange) == null ? void 0 : _a.call(options, floating.placement);
  }, [floating.placement]);
  useDidUpdate2(() => {
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

// ../components/Popover/src/Popover.context.ts
var [PopoverContextProvider, usePopoverContext] = createSafeContext(
  "Popover component was not found in the tree"
);

// ../components/Popover/src/PopoverTarget/PopoverTarget.tsx
import { cloneElement as cloneElement2 } from "react";
import cx8 from "clsx";
import { useMergedRef as useMergedRef7 } from "@raikou/hooks";
import { isElement as isElement3, useProps as useProps20, factory as factory14 } from "@raikou/core";
var defaultProps18 = {
  refProp: "ref",
  popupType: "dialog"
};
var PopoverTarget = factory14((props, ref) => {
  const _a = useProps20(
    "PopoverTarget",
    defaultProps18,
    props
  ), { children, refProp, popupType } = _a, others = __objRest(_a, ["children", "refProp", "popupType"]);
  if (!isElement3(children)) {
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const forwardedProps = others;
  const ctx = usePopoverContext();
  const targetRef = useMergedRef7(ctx.reference, children.ref, ref);
  const accessibleProps = ctx.withRoles ? {
    "aria-haspopup": popupType,
    "aria-expanded": ctx.opened,
    "aria-controls": ctx.getDropdownId(),
    id: ctx.getTargetId()
  } : {};
  return cloneElement2(children, __spreadValues(__spreadProps(__spreadValues(__spreadValues(__spreadValues({}, forwardedProps), accessibleProps), ctx.targetProps), {
    className: cx8(
      ctx.targetProps.className,
      forwardedProps.className,
      children.props.className
    ),
    [refProp]: targetRef
  }), !ctx.controlled ? { onClick: ctx.onToggle } : null));
});
PopoverTarget.displayName = "@raikou/core/PopoverTarget";

// ../components/Popover/src/PopoverDropdown/PopoverDropdown.tsx
import React47 from "react";
import { useFocusReturn, useMergedRef as useMergedRef9 } from "@raikou/hooks";
import {
  Box as Box21,
  factory as factory15,
  useProps as useProps22,
  rem as rem5,
  closeOnEscape
} from "@raikou/core";

// ../components/Portal/src/Portal.tsx
import React43, { useRef as useRef11, useState as useState14, forwardRef as forwardRef19 } from "react";
import { createPortal as createPortal2 } from "react-dom";
import { useIsomorphicEffect as useIsomorphicEffect2, assignRef } from "@raikou/hooks";
import { useProps as useProps21 } from "@raikou/core";
function createPortalNode(props) {
  const node = document.createElement("div");
  node.setAttribute("data-portal", "true");
  typeof props.className === "string" && node.classList.add(...props.className.split(" "));
  typeof props.style === "object" && Object.assign(node.style, props.style);
  typeof props.id === "string" && node.setAttribute("id", props.id);
  return node;
}
var defaultProps19 = {};
var Portal = forwardRef19((props, ref) => {
  const _a = useProps21(
    "Portal",
    defaultProps19,
    props
  ), { children, target } = _a, others = __objRest(_a, ["children", "target"]);
  const [mounted, setMounted] = useState14(false);
  const nodeRef = useRef11(null);
  useIsomorphicEffect2(() => {
    setMounted(true);
    nodeRef.current = !target ? createPortalNode(others) : typeof target === "string" ? document.querySelector(target) : target;
    assignRef(ref, nodeRef.current);
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
  return createPortal2(/* @__PURE__ */ React43.createElement(React43.Fragment, null, children), nodeRef.current);
});
Portal.displayName = "@raikou/core/Portal";

// ../components/Portal/src/OptionalPortal.tsx
import React44 from "react";
function OptionalPortal(_a) {
  var _b = _a, {
    withinPortal = true,
    children
  } = _b, others = __objRest(_b, [
    "withinPortal",
    "children"
  ]);
  if (withinPortal) {
    return /* @__PURE__ */ React44.createElement(Portal, __spreadValues({}, others), children);
  }
  return /* @__PURE__ */ React44.createElement(React44.Fragment, null, children);
}
OptionalPortal.displayName = "@raikou/core/OptionalPortal";

// ../components/Transition/src/transitions.ts
import { rem as rem4 } from "@raikou/core";
var popIn = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${rem4(10)})` },
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
      transform: `translateY(-${rem4(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: {
      opacity: 0,
      transform: `translateY(${rem4(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${rem4(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${rem4(20)}) rotate(5deg)` },
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
import React45 from "react";

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
import { useState as useState15, useEffect as useEffect16, useRef as useRef12 } from "react";
import { useReducedMotion, useDidUpdate as useDidUpdate3 } from "@raikou/hooks";
import { useRaikouTheme as useRaikouTheme2 } from "@raikou/core";
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
  const theme = useRaikouTheme2();
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionDuration, setTransitionDuration] = useState15(
    reduceMotion ? 0 : duration
  );
  const [transitionStatus, setStatus] = useState15(
    mounted ? "entered" : "exited"
  );
  const timeoutRef = useRef12(-1);
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
  useDidUpdate3(() => {
    handleStateChange(mounted);
  }, [mounted]);
  useEffect16(() => () => window.clearTimeout(timeoutRef.current), []);
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
    return mounted ? /* @__PURE__ */ React45.createElement(React45.Fragment, null, children({})) : keepMounted ? children({ display: "none" }) : null;
  }
  return transitionStatus === "exited" ? keepMounted ? children({ display: "none" }) : null : /* @__PURE__ */ React45.createElement(React45.Fragment, null, children(
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
import { cloneElement as cloneElement3 } from "react";
import { useFocusTrap, useMergedRef as useMergedRef8 } from "@raikou/hooks";
import { isElement as isElement4 } from "@raikou/core";
function FocusTrap({
  children,
  active = true,
  refProp = "ref"
}) {
  const focusTrapRef = useFocusTrap(active);
  const ref = useMergedRef8(focusTrapRef, children == null ? void 0 : children.ref);
  if (!isElement4(children)) {
    return children;
  }
  return cloneElement3(children, { [refProp]: ref });
}
FocusTrap.displayName = "@raikou/core/FocusTrap";

// ../components/Popover/src/PopoverDropdown/PopoverDropdown.tsx
var defaultProps20 = {};
var PopoverDropdown = factory15(
  (_props, ref) => {
    var _b, _c, _d, _e, _f;
    const props = useProps22("PopoverDropdown", defaultProps20, _props);
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
    const returnFocus = useFocusReturn({
      opened: ctx.opened,
      shouldReturnFocus: ctx.returnFocus
    });
    const accessibleProps = ctx.withRoles ? {
      "aria-labelledby": ctx.getTargetId(),
      id: ctx.getDropdownId(),
      role: "dialog",
      tabIndex: -1
    } : {};
    const mergedRef = useMergedRef9(ref, ctx.floating);
    if (ctx.disabled) {
      return null;
    }
    return /* @__PURE__ */ React47.createElement(OptionalPortal, __spreadProps(__spreadValues({}, ctx.portalProps), { withinPortal: ctx.withinPortal }), /* @__PURE__ */ React47.createElement(
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
        return /* @__PURE__ */ React47.createElement(FocusTrap, { active: ctx.trapFocus }, /* @__PURE__ */ React47.createElement(
          Box21,
          __spreadValues(__spreadProps(__spreadValues(__spreadValues({}, accessibleProps), others), {
            variant,
            ref: mergedRef,
            onKeyDownCapture: closeOnEscape(ctx.onClose, {
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
                width: ctx.width === "target" ? void 0 : rem5(ctx.width)
              }),
              style
            ]
          })),
          children,
          /* @__PURE__ */ React47.createElement(
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

// ../components/Popover/src/Popover.tsx
var defaultProps21 = {
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
  zIndex: getDefaultZIndex("popover"),
  __staticSelector: "Popover",
  width: "max-content"
};
var varsResolver9 = createVarsResolver9(
  (_, { radius, shadow }) => ({
    dropdown: {
      "--popover-radius": radius === void 0 ? void 0 : getRadius3(radius),
      "--popover-shadow": getShadow(shadow)
    }
  })
);
function Popover(_props) {
  var _b, _c, _d, _e, _f, _g;
  const props = useProps23("Popover", defaultProps21, _props);
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
  const getStyles = useStyles11({
    name: __staticSelector,
    props,
    classes: {
      dropdown: "popover-dropdown",
      arrow: "popover-arrow"
    },
    classNames,
    styles,
    unstyled,
    rootSelector: "dropdown",
    vars,
    varsResolver: varsResolver9
  });
  const arrowRef = useRef13(null);
  const [targetNode, setTargetNode] = useState16(null);
  const [dropdownNode, setDropdownNode] = useState16(null);
  const { dir } = useDirection3();
  const uid = useId2(id);
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
  useClickOutside(
    () => closeOnClickOutside && popover.onClose(),
    clickOutsideEvents,
    [targetNode, dropdownNode]
  );
  const reference = useCallback4(
    (node) => {
      setTargetNode(node);
      popover.floating.reference(node);
    },
    [popover.floating.reference]
  );
  const floating = useCallback4(
    (node) => {
      setDropdownNode(node);
      popover.floating.floating(node);
    },
    [popover.floating.floating]
  );
  return /* @__PURE__ */ React48.createElement(
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

// ../components/Menu/src/MenuDivider/MenuDivider.tsx
import React49 from "react";
import {
  Box as Box22,
  factory as factory16,
  useProps as useProps24
} from "@raikou/core";

// ../components/Menu/src/Menu.context.ts
var [MenuContextProvider, useMenuContext] = createSafeContext("Menu component was not found in the tree");

// ../components/Menu/src/MenuDivider/MenuDivider.tsx
var defaultProps22 = {};
var MenuDivider = factory16((props, ref) => {
  const _a = useProps24(
    "MenuDivider",
    defaultProps22,
    props
  ), { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useMenuContext();
  return /* @__PURE__ */ React49.createElement(
    Box22,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("divider", { className, style, styles, classNames })), others)
  );
});
MenuDivider.displayName = "@raikou/core/MenuDivider";

// ../components/Menu/src/MenuDropdown/MenuDropdown.tsx
import React50, { useRef as useRef14 } from "react";
import {
  factory as factory17,
  useProps as useProps25,
  createEventHandler as createEventHandler2
} from "@raikou/core";
var defaultProps23 = {};
var MenuDropdown = factory17((props, ref) => {
  const _a = useProps25("MenuDropdown", defaultProps23, props), {
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
  const wrapperRef = useRef14(null);
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
  const handleMouseEnter = createEventHandler2(
    onMouseEnter,
    () => ctx.trigger === "hover" && ctx.openDropdown()
  );
  const handleMouseLeave = createEventHandler2(
    onMouseLeave,
    () => ctx.trigger === "hover" && ctx.closeDropdown()
  );
  return /* @__PURE__ */ React50.createElement(
    Popover.Dropdown,
    __spreadValues(__spreadProps(__spreadValues({}, others), {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      role: "menu",
      "aria-orientation": "vertical",
      ref
    }), ctx.getStyles("dropdown", { className, style, styles, classNames })),
    /* @__PURE__ */ React50.createElement(
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
MenuDropdown.displayName = "@raikou/core/MenuDropdown";

// ../components/Menu/src/MenuItem/MenuItem.tsx
import React51, { useRef as useRef15 } from "react";
import { useMergedRef as useMergedRef10 } from "@raikou/hooks";
import {
  polymorphicFactory as polymorphicFactory5,
  useProps as useProps26,
  createEventHandler as createEventHandler3,
  createScopedKeydownHandler,
  useDirection as useDirection4,
  useRaikouTheme as useRaikouTheme3
} from "@raikou/core";
var defaultProps24 = {};
var MenuItem = polymorphicFactory5((props, ref) => {
  const _a = useProps26("MenuItem", defaultProps24, props), {
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
  const theme = useRaikouTheme3();
  const { dir } = useDirection4();
  const itemRef = useRef15();
  const itemIndex = ctx.getItemIndex(itemRef.current);
  const _others = others;
  const handleMouseLeave = createEventHandler3(
    _others.onMouseLeave,
    () => ctx.setHovered(-1)
  );
  const handleMouseEnter = createEventHandler3(
    _others.onMouseEnter,
    () => ctx.setHovered(ctx.getItemIndex(itemRef.current))
  );
  const handleClick = createEventHandler3(_others.onClick, () => {
    if (typeof closeMenuOnClick === "boolean") {
      closeMenuOnClick && ctx.closeDropdownImmediately();
    } else {
      ctx.closeOnItemClick && ctx.closeDropdownImmediately();
    }
  });
  const handleFocus = createEventHandler3(
    _others.onFocus,
    () => ctx.setHovered(ctx.getItemIndex(itemRef.current))
  );
  const colors = color ? theme.variantColorResolver({ color, theme, variant: "light" }) : void 0;
  return /* @__PURE__ */ React51.createElement(
    UnstyledButton,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, others), {
      tabIndex: -1,
      onFocus: handleFocus
    }), ctx.getStyles("item", { className, style, styles, classNames })), {
      ref: useMergedRef10(itemRef, ref),
      role: "menuitem",
      disabled,
      "data-menu-item": true,
      "data-disabled": disabled || void 0,
      "data-hovered": ctx.hovered === itemIndex ? true : void 0,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onClick: handleClick,
      onKeyDown: createScopedKeydownHandler({
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
    leftSection && /* @__PURE__ */ React51.createElement(
      "div",
      __spreadProps(__spreadValues({}, ctx.getStyles("itemSection", { styles, classNames })), {
        "data-position": "left"
      }),
      leftSection
    ),
    children && /* @__PURE__ */ React51.createElement("div", __spreadValues({}, ctx.getStyles("itemLabel", { styles, classNames })), children),
    rightSection && /* @__PURE__ */ React51.createElement(
      "div",
      __spreadProps(__spreadValues({}, ctx.getStyles("itemSection", { styles, classNames })), {
        "data-position": "right"
      }),
      rightSection
    )
  );
});
MenuItem.displayName = "@raikou/core/MenuItem";

// ../components/Menu/src/MenuLabel/MenuLabel.tsx
import React52 from "react";
import {
  Box as Box23,
  factory as factory18,
  useProps as useProps27
} from "@raikou/core";
var defaultProps25 = {};
var MenuLabel = factory18((props, ref) => {
  const _a = useProps27(
    "MenuLabel",
    defaultProps25,
    props
  ), { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useMenuContext();
  return /* @__PURE__ */ React52.createElement(
    Box23,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("label", { className, style, styles, classNames })), others)
  );
});
MenuLabel.displayName = "@raikou/core/MenuLabel";

// ../components/Menu/src/MenuTarget/MenuTarget.tsx
import React53, { cloneElement as cloneElement4, forwardRef as forwardRef20 } from "react";
import { isElement as isElement5, createEventHandler as createEventHandler4, useProps as useProps28 } from "@raikou/core";
var defaultProps26 = {
  refProp: "ref"
};
var MenuTarget = forwardRef20(
  (props, ref) => {
    const _a = useProps28(
      "MenuTarget",
      defaultProps26,
      props
    ), { children, refProp } = _a, others = __objRest(_a, ["children", "refProp"]);
    if (!isElement5(children)) {
      throw new Error(
        "Menu.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
      );
    }
    const ctx = useMenuContext();
    const onClick = createEventHandler4(
      children.props.onClick,
      () => ctx.trigger === "click" && ctx.toggleDropdown()
    );
    const onMouseEnter = createEventHandler4(
      children.props.onMouseEnter,
      () => ctx.trigger === "hover" && ctx.openDropdown()
    );
    const onMouseLeave = createEventHandler4(
      children.props.onMouseLeave,
      () => ctx.trigger === "hover" && ctx.closeDropdown()
    );
    return /* @__PURE__ */ React53.createElement(Popover.Target, __spreadValues({ refProp, popupType: "menu", ref }, others), cloneElement4(children, {
      onClick,
      onMouseEnter,
      onMouseLeave,
      "data-expanded": ctx.opened ? true : void 0
    }));
  }
);
MenuTarget.displayName = "@raikou/core/MenuTarget";

// ../components/Menu/src/Menu.tsx
var defaultProps27 = {
  closeOnItemClick: true,
  loop: true,
  trigger: "click",
  openDelay: 0,
  closeDelay: 100
};
function Menu(_props) {
  const props = useProps29("Menu", defaultProps27, _props);
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
  const getStyles = useStyles12({
    name: "Menu",
    classes: {
      dropdown: "menu-dropdown",
      item: "menu-item",
      itemLabel: "menu-itemLabel",
      itemSection: "menu-itemSection",
      label: "menu-label",
      divider: "menu-divider"
    },
    props,
    classNames,
    styles,
    unstyled
  });
  const [hovered, { setHovered, resetHovered }] = useHovered();
  const [_opened, setOpened] = useUncontrolled2({
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
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  useDidUpdate4(() => {
    resetHovered();
  }, [_opened]);
  return /* @__PURE__ */ React54.createElement(
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
    /* @__PURE__ */ React54.createElement(
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
var defaultProps28 = {};
var HEIGHT = {
  xs: 22,
  sm: 26,
  md: 32,
  lg: 38,
  xl: 44
};
var DataTablePageSizeSelector = factory19((_props, ref) => {
  const props = useProps30("DataTablePageSizeSelector", defaultProps28, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size: size2,
    label,
    values,
    value,
    onChange,
    color
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "size",
    "label",
    "values",
    "value",
    "onChange",
    "color"
  ]);
  return /* @__PURE__ */ React55.createElement(Group, __spreadValues({ gap: "xs" }, others), /* @__PURE__ */ React55.createElement(Text, { size: size2 }, label), /* @__PURE__ */ React55.createElement(Menu, { withinPortal: true, withArrow: true }, /* @__PURE__ */ React55.createElement(Menu.Target, null, /* @__PURE__ */ React55.createElement(
    Button,
    {
      size: size2,
      variant: "default",
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
  )), /* @__PURE__ */ React55.createElement(Menu.Dropdown, null, values.map((v) => {
    const isCurrent = v === value;
    return /* @__PURE__ */ React55.createElement(
      Menu.Item,
      {
        key: v,
        style: [
          { height: HEIGHT[size2] },
          (theme) => ({
            "&&": {
              color: isCurrent ? theme.white : void 0
            },
            background: isCurrent ? theme.colors[color || theme.primaryColor][6] : void 0
          })
        ],
        disabled: isCurrent,
        onClick: () => onChange(v)
      },
      /* @__PURE__ */ React55.createElement(Text, { size: size2 }, v)
    );
  }))));
});
DataTablePageSizeSelector.displayName = "@raikou/DataTablePageSizeSelector";

// src/DataTablePagination.tsx
var defaultProps29 = {};
var DataTablePagination = factory20(
  (_props, ref) => {
    const props = useProps31("DataTablePagination", defaultProps29, _props);
    const _a = props, {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      topBorderColor,
      fetching,
      page,
      onPageChange,
      paginationColor,
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
      paginationWrapBreakpoint,
      getPaginationControlProps
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "unstyled",
      "vars",
      "topBorderColor",
      "fetching",
      "page",
      "onPageChange",
      "paginationColor",
      "paginationSize",
      "loadingText",
      "noRecordsText",
      "paginationText",
      "totalRecords",
      "recordsPerPage",
      "onRecordsPerPageChange",
      "recordsPerPageLabel",
      "recordsPerPageOptions",
      "recordsLength",
      "paginationWrapBreakpoint",
      "getPaginationControlProps"
    ]);
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
    return /* @__PURE__ */ React56.createElement(
      Box14,
      __spreadValues({
        ref,
        className: cx9("dataTablePagination-root", className),
        style
      }, others),
      /* @__PURE__ */ React56.createElement(Text, { className: "dataTablePagination-text", size: paginationSize }, paginationTextValue),
      recordsPerPageOptions && /* @__PURE__ */ React56.createElement(
        DataTablePageSizeSelector,
        {
          size: paginationSize,
          label: recordsPerPageLabel,
          values: recordsPerPageOptions,
          color: paginationColor,
          value: recordsPerPage,
          onChange: onRecordsPerPageChange
        }
      ),
      /* @__PURE__ */ React56.createElement(
        Pagination,
        {
          color: paginationColor,
          className: cx9("dataTablePagination-pagination", {
            ["dataTablePagination-paginationFetching"]: fetching || !recordsLength
          }),
          value: page,
          onChange: onPageChange,
          size: paginationSize,
          total: Math.ceil(totalRecords / recordsPerPage),
          getControlProps: getPaginationControlProps
        }
      )
    );
  }
);
DataTablePagination.displayName = "@raikou/DataTablePagination";

// src/DataTableFooter.tsx
import React59 from "react";
import {
  factory as factory23,
  useProps as useProps34
} from "@raikou/core";
import cx12 from "clsx";

// src/DataTableFooterCell.tsx
import React57 from "react";
import {
  factory as factory21,
  useProps as useProps32
} from "@raikou/core";
import cx10 from "clsx";
var defaultProps30 = {};
var DataTableFooterCell = factory21(
  (_props, ref) => {
    const props = useProps32("DataTableFooterCell", defaultProps30, _props);
    const _a = props, {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      visibleMediaQuery,
      title,
      noWrap,
      ellipsis,
      textAlignment,
      width
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "unstyled",
      "vars",
      "visibleMediaQuery",
      "title",
      "noWrap",
      "ellipsis",
      "textAlignment",
      "width"
    ]);
    return /* @__PURE__ */ React57.createElement(
      Box14,
      __spreadValues({
        component: "th",
        className: cx10(
          {
            ["dataTableFooterCell-noWrap"]: noWrap || ellipsis,
            ["dataTableFooterCell-ellipsis"]: ellipsis
          },
          className
        ),
        style: [
          {
            "&&": { textAlign: textAlignment },
            width,
            minWidth: width,
            maxWidth: width
          },
          style
        ]
      }, others),
      title
    );
  }
);
DataTableFooterCell.displayName = "@raikou/DataTableFooterCell";

// src/DataTableFooterSelectorPlaceholderCell.tsx
import React58 from "react";
import {
  factory as factory22,
  useProps as useProps33
} from "@raikou/core";
import cx11 from "clsx";
var defaultProps31 = {};
var DataTableFooterSelectorPlaceholderCell = factory22((_props, ref) => {
  const props = useProps33(
    "DataTableFooterSelectorPlaceholderCell",
    defaultProps31,
    _props
  );
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    shadowVisible
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "shadowVisible"
  ]);
  return /* @__PURE__ */ React58.createElement(
    "th",
    __spreadValues({
      className: cx11("dataTableFooterSelectorPlaceholderCell-root", {
        ["dataTableFooterSelectorPlaceholderCell-shadowVisible"]: shadowVisible
      })
    }, others)
  );
});
DataTableFooterSelectorPlaceholderCell.displayName = "@raikou/DataTableFooterSelectorPlaceholderCell";

// src/DataTableFooter.tsx
var defaultProps32 = {};
var DataTableFooter = factory23(
  (_props, ref) => {
    const props = useProps34("DataTableFooter", defaultProps32, _props);
    const _a = props, {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      borderColor,
      columns,
      defaultColumnProps,
      selectionVisible,
      leftShadowVisible,
      scrollDiff
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "unstyled",
      "vars",
      "borderColor",
      "columns",
      "defaultColumnProps",
      "selectionVisible",
      "leftShadowVisible",
      "scrollDiff"
    ]);
    return /* @__PURE__ */ React59.createElement(
      Box14,
      __spreadValues({
        component: "tfoot",
        className: cx12("dataTableFooter-root", className),
        style
      }, others),
      /* @__PURE__ */ React59.createElement("tr", null, selectionVisible && /* @__PURE__ */ React59.createElement(
        DataTableFooterSelectorPlaceholderCell,
        {
          shadowVisible: leftShadowVisible
        }
      ), columns.map((_b) => {
        var _c = _b, { hidden } = _c, columnProps = __objRest(_c, ["hidden"]);
        if (hidden)
          return null;
        const {
          accessor,
          visibleMediaQuery,
          textAlignment,
          width,
          footer,
          footerClassName,
          footerStyle,
          noWrap,
          ellipsis
        } = __spreadValues(__spreadValues({}, defaultColumnProps), columnProps);
        return /* @__PURE__ */ React59.createElement(
          DataTableFooterCell,
          {
            key: accessor,
            className: footerClassName,
            style: footerStyle,
            visibleMediaQuery,
            textAlignment,
            width,
            title: footer,
            noWrap,
            ellipsis
          }
        );
      }))
    );
  }
);
DataTableFooter.displayName = "@raikou/DataTableFooter";

// src/DataTableHeader.tsx
import React77 from "react";
import {
  factory as factory36,
  useProps as useProps49
} from "@raikou/core";
import cx15 from "clsx";

// src/DataTableHeaderCell.tsx
import React63 from "react";
import {
  factory as factory26,
  useProps as useProps38
} from "@raikou/core";
import cx13 from "clsx";

// src/DataTableHeaderCellFilter.tsx
import React62 from "react";
import {
  factory as factory25,
  useProps as useProps37
} from "@raikou/core";
import { useDisclosure } from "@raikou/hooks";

// ../components/ActionIcon/src/ActionIcon.tsx
import React61 from "react";
import {
  useProps as useProps36,
  useStyles as useStyles14,
  getRadius as getRadius4,
  polymorphicFactory as polymorphicFactory6,
  getSize as getSize4,
  createVarsResolver as createVarsResolver11
} from "@raikou/core";

// ../components/ActionIcon/src/ActionIconGroup/ActionIconGroup.tsx
import React60 from "react";
import {
  factory as factory24,
  Box as Box24,
  useProps as useProps35,
  useStyles as useStyles13,
  rem as rem6,
  createVarsResolver as createVarsResolver10
} from "@raikou/core";
var defaultProps33 = {
  orientation: "horizontal"
};
var varsResolver10 = createVarsResolver10(
  (_, { borderWidth }) => ({
    group: { "--ai-border-width": rem6(borderWidth) }
  })
);
var ActionIconGroup = factory24(
  (_props, ref) => {
    const props = useProps35("ActionIconGroup", defaultProps33, _props);
    const _a = useProps35("ActionIconGroup", defaultProps33, _props), {
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
    const getStyles = useStyles13({
      name: "ActionIconGroup",
      props,
      classes: {
        group: "actionIconGroup-root"
      },
      className,
      style,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver10,
      rootSelector: "group"
    });
    return /* @__PURE__ */ React60.createElement(
      Box24,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("group")), {
        ref,
        variant,
        mod: { "data-orientation": orientation },
        role: "group"
      }), others)
    );
  }
);
ActionIconGroup.displayName = "@raikou/core/ActionIconGroup";

// ../components/ActionIcon/src/ActionIcon.tsx
var defaultProps34 = {};
var varsResolver11 = createVarsResolver11(
  (theme, { size: size2, radius, variant, gradient, color }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled"
    });
    return {
      root: {
        "--ai-size": getSize4(size2, "ai-size"),
        "--ai-radius": radius === void 0 ? void 0 : getRadius4(radius),
        "--ai-bg": color || variant ? colors.background : void 0,
        "--ai-hover": color || variant ? colors.hover : void 0,
        "--ai-color": color || variant ? colors.color : void 0,
        "--ai-bd": color || variant ? colors.border : void 0
      }
    };
  }
);
var ActionIcon = polymorphicFactory6(
  (_props, ref) => {
    const props = useProps36("ActionIcon", defaultProps34, _props);
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
    const getStyles = useStyles14({
      name: ["ActionIcon", __staticSelector],
      props,
      className,
      style,
      classes: {
        root: "actionIcon-root",
        loader: "actionIcon-loader"
      },
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver11
    });
    return /* @__PURE__ */ React61.createElement(
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
      loading ? /* @__PURE__ */ React61.createElement(
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

// src/DataTableHeaderCellFilter.tsx
var defaultProps35 = {};
var DataTableHeaderCellFilter = factory25((_props, ref) => {
  const [isOpen, { close, toggle }] = useDisclosure(false);
  const props = useProps37("DataTableHeaderCellFilter", defaultProps35, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    isActive,
    children
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "isActive",
    "children"
  ]);
  return /* @__PURE__ */ React62.createElement(
    Popover,
    __spreadValues({
      withArrow: true,
      withinPortal: true,
      shadow: "md",
      opened: isOpen,
      onClose: close,
      trapFocus: true
    }, others),
    /* @__PURE__ */ React62.createElement(Popover.Target, null, /* @__PURE__ */ React62.createElement(
      ActionIcon,
      {
        onClick: (e) => {
          e.preventDefault();
          toggle();
        },
        variant: isActive ? "default" : "subtle"
      },
      /* @__PURE__ */ React62.createElement(IconFilter, { size: 14 })
    )),
    /* @__PURE__ */ React62.createElement(Popover.Dropdown, { onClick: (e) => e.preventDefault() }, typeof children === "function" ? children({ close }) : children)
  );
});
DataTableHeaderCellFilter.displayName = "@raikou/DataTableHeaderCellFilter";

// src/DataTableHeaderCell.tsx
var defaultProps36 = {};
var DataTableHeaderCell = factory26(
  (_props, ref) => {
    const props = useProps38("DataTableHeaderCell", defaultProps36, _props);
    const _a = props, {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      accessor,
      visibleMediaQuery,
      title,
      sortable,
      sortIcons,
      textAlignment,
      width,
      sortStatus,
      onSortStatusChange,
      filter,
      filtering
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "unstyled",
      "vars",
      "accessor",
      "visibleMediaQuery",
      "title",
      "sortable",
      "sortIcons",
      "textAlignment",
      "width",
      "sortStatus",
      "onSortStatusChange",
      "filter",
      "filtering"
    ]);
    if (!useMediaQueryStringOrFunction(visibleMediaQuery))
      return null;
    const text = title != null ? title : humanize(accessor);
    const tooltip = typeof text === "string" ? text : void 0;
    const sortAction = sortable && onSortStatusChange ? (e) => {
      var _a2;
      if (e == null ? void 0 : e.defaultPrevented)
        return;
      onSortStatusChange({
        columnAccessor: accessor,
        direction: (sortStatus == null ? void 0 : sortStatus.columnAccessor) === accessor ? sortStatus.direction === "asc" ? "desc" : "asc" : (_a2 = sortStatus == null ? void 0 : sortStatus.direction) != null ? _a2 : "asc"
      });
    } : void 0;
    return /* @__PURE__ */ React63.createElement(
      Box14,
      __spreadValues({
        component: "th",
        className: cx13(
          { ["dataTable-sortableColumnHeader"]: sortable },
          className
        ),
        style: [
          {
            "&&": { textAlign: textAlignment },
            width,
            minWidth: width,
            maxWidth: width
          }
        ],
        role: sortable ? "button" : void 0,
        tabIndex: sortable ? 0 : void 0,
        onClick: sortAction,
        onKeyDown: (e) => e.key === "Enter" && (sortAction == null ? void 0 : sortAction())
      }, others),
      /* @__PURE__ */ React63.createElement(
        Group,
        {
          className: cx13("dataTable-sortableColumnHeaderGroup"),
          justify: "space-between",
          wrap: "nowrap"
        },
        /* @__PURE__ */ React63.createElement(
          Box14,
          {
            className: cx13(
              "dataTable-columnHeaderText",
              "dataTable-sortableColumnHeaderText"
            ),
            title: tooltip
          },
          text
        ),
        sortable || (sortStatus == null ? void 0 : sortStatus.columnAccessor) === accessor ? /* @__PURE__ */ React63.createElement(React63.Fragment, null, (sortStatus == null ? void 0 : sortStatus.columnAccessor) === accessor ? /* @__PURE__ */ React63.createElement(
          Center,
          {
            className: cx13("dataTable-sortableColumnHeaderIcon", {
              ["dataTable-sortableColumnHeaderIconRotated"]: sortStatus.direction === "desc"
            }),
            role: "img",
            "aria-label": `Sorted ${sortStatus.direction === "desc" ? "descending" : "ascending"}`
          },
          (sortIcons == null ? void 0 : sortIcons.sorted) || /* @__PURE__ */ React63.createElement(IconArrowUp, { size: 14 })
        ) : /* @__PURE__ */ React63.createElement(
          Center,
          {
            className: "dataTable-sortableColumnHeaderUnsortedIcon",
            role: "img",
            "aria-label": "Not sorted"
          },
          (sortIcons == null ? void 0 : sortIcons.unsorted) || /* @__PURE__ */ React63.createElement(IconArrowsVertical, { size: 14 })
        )) : null,
        filter ? /* @__PURE__ */ React63.createElement(DataTableHeaderCellFilter, { isActive: !!filtering }, filter) : null
      )
    );
  }
);
DataTableHeaderCell.displayName = "@raikou/DataTableHeaderCell";

// src/DataTableColumnGroupHeaderCell.tsx
import React64, { useMemo as useMemo4 } from "react";
import {
  factory as factory27,
  useProps as useProps39
} from "@raikou/core";
var defaultProps37 = {};
var DataTableColumnGroupHeaderCell = factory27((_props, ref) => {
  const props = useProps39(
    "DataTableColumnGroupHeaderCell",
    defaultProps37,
    _props
  );
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    group: { id, columns, title }
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "group"
  ]);
  const queries = useMemo4(
    () => columns.map(({ visibleMediaQuery }) => visibleMediaQuery),
    [columns]
  );
  const visibles = void 0;
  const colSpan = useMemo4(
    () => columns.filter(({ hidden }, i) => !hidden && (visibles == null ? void 0 : visibles[i])).length,
    [columns, visibles]
  );
  return colSpan > 0 ? /* @__PURE__ */ React64.createElement(Box14, __spreadValues({ component: "th", colSpan, className }, others), title != null ? title : humanize(id)) : null;
});
DataTableColumnGroupHeaderCell.displayName = "@raikou/DataTableColumnGroupHeaderCell";

// src/DataTableHeaderSelectorCell.tsx
import React76 from "react";
import {
  factory as factory35,
  useProps as useProps48
} from "@raikou/core";

// ../components/Checkbox/src/Checkbox.tsx
import React75 from "react";
import { useId as useId4 } from "@raikou/hooks";
import {
  factory as factory34,
  useProps as useProps47,
  useStyles as useStyles22,
  extractStyleProps as extractStyleProps2,
  getRadius as getRadius6,
  getSize as getSize7,
  getThemeColor as getThemeColor4,
  createVarsResolver as createVarsResolver17,
  Box as Box32
} from "@raikou/core";

// ../components/InlineInput/src/InlineInput.tsx
import React71, { forwardRef as forwardRef21 } from "react";
import {
  Box as Box31,
  useStyles as useStyles21,
  getFontSize as getFontSize9,
  getSize as getSize6
} from "@raikou/core";

// ../components/Input/src/Input.tsx
import React70 from "react";
import {
  Box as Box30,
  polymorphicFactory as polymorphicFactory7,
  useProps as useProps45,
  useStyles as useStyles20,
  extractStyleProps,
  getSize as getSize5,
  getFontSize as getFontSize8,
  getRadius as getRadius5,
  rem as rem10,
  createVarsResolver as createVarsResolver16
} from "@raikou/core";

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
import React65 from "react";
import {
  Box as Box25,
  factory as factory28,
  useProps as useProps40,
  useStyles as useStyles15,
  getFontSize as getFontSize4,
  createVarsResolver as createVarsResolver12
} from "@raikou/core";
var defaultProps38 = {
  labelElement: "label"
};
var varsResolver12 = createVarsResolver12((_, { size: size2 }) => ({
  label: {
    "--input-label-size": getFontSize4(size2),
    "--input-asterisk-color": void 0
  }
}));
var InputLabel = factory28((_props, ref) => {
  const props = useProps40("InputLabel", defaultProps38, _props);
  const _a = useProps40("InputLabel", defaultProps38, props), {
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
  const _getStyles = useStyles15({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: {
      label: "inputWrapper-label",
      required: "inputWrapper-required"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "label",
    vars,
    varsResolver: varsResolver12
  });
  const ctx = useInputWrapperContext();
  const getStyles = (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
  return /* @__PURE__ */ React65.createElement(
    Box25,
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
    required && /* @__PURE__ */ React65.createElement("span", __spreadProps(__spreadValues({}, getStyles("required")), { "aria-hidden": true }), " *")
  );
});
InputLabel.displayName = "@raikou/core/InputLabel";

// ../components/Input/src/InputError/InputError.tsx
import React66 from "react";
import {
  Box as Box26,
  factory as factory29,
  useProps as useProps41,
  useStyles as useStyles16,
  getFontSize as getFontSize5,
  rem as rem7,
  createVarsResolver as createVarsResolver13
} from "@raikou/core";
var defaultProps39 = {};
var varsResolver13 = createVarsResolver13((_, { size: size2 }) => ({
  error: {
    "--input-error-size": size2 === void 0 ? void 0 : `calc(${getFontSize5(size2)} - ${rem7(2)})`
  }
}));
var InputError = factory29((_props, ref) => {
  const props = useProps41("InputError", defaultProps39, _props);
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
  const _getStyles = useStyles16({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: {
      error: "inputWrapper-error"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "error",
    vars,
    varsResolver: varsResolver13
  });
  const ctx = useInputWrapperContext();
  const getStyles = __inheritStyles && (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
  return /* @__PURE__ */ React66.createElement(
    Box26,
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
import React67 from "react";
import {
  Box as Box27,
  factory as factory30,
  useProps as useProps42,
  useStyles as useStyles17,
  getFontSize as getFontSize6,
  rem as rem8,
  createVarsResolver as createVarsResolver14
} from "@raikou/core";
var defaultProps40 = {};
var varsResolver14 = createVarsResolver14(
  (_, { size: size2 }) => ({
    description: {
      "--input-description-size": size2 === void 0 ? void 0 : `calc(${getFontSize6(size2)} - ${rem8(2)})`
    }
  })
);
var InputDescription = factory30(
  (_props, ref) => {
    const props = useProps42("InputDescription", defaultProps40, _props);
    const _a = useProps42("InputDescription", defaultProps40, props), {
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
    const _getStyles = useStyles17({
      name: ["InputWrapper", __staticSelector],
      props,
      classes: {
        description: "inputWrapper-description"
      },
      className,
      style,
      classNames,
      styles,
      unstyled,
      rootSelector: "description",
      vars,
      varsResolver: varsResolver14
    });
    const getStyles = __inheritStyles && (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
    return /* @__PURE__ */ React67.createElement(
      Box27,
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
import React68 from "react";
import {
  Box as Box28,
  factory as factory31,
  useProps as useProps43,
  useStyles as useStyles18
} from "@raikou/core";
var defaultProps41 = {};
var InputPlaceholder = factory31(
  (_props, ref) => {
    const props = useProps43("InputPlaceholder", defaultProps41, _props);
    const _a = useProps43("InputPlaceholder", defaultProps41, props), {
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
    const getStyles = useStyles18({
      name: ["InputPlaceholder", __staticSelector],
      props,
      classes: {
        placeholder: "input-placeholder"
      },
      className,
      style,
      classNames,
      styles,
      unstyled,
      rootSelector: "placeholder"
    });
    return /* @__PURE__ */ React68.createElement(
      Box28,
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
import React69 from "react";
import { useId as useId3 } from "@raikou/hooks";
import {
  Box as Box29,
  factory as factory32,
  useProps as useProps44,
  useStyles as useStyles19,
  createVarsResolver as createVarsResolver15,
  getFontSize as getFontSize7,
  rem as rem9
} from "@raikou/core";

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
var defaultProps42 = {
  labelElement: "label",
  inputContainer: (children) => children,
  inputWrapperOrder: ["label", "description", "input", "error"]
};
var varsResolver15 = createVarsResolver15((_, { size: size2 }) => ({
  label: {
    "--input-label-size": getFontSize7(size2),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": size2 === void 0 ? void 0 : `calc(${getFontSize7(size2)} - ${rem9(2)})`
  },
  description: {
    "--input-description-size": size2 === void 0 ? void 0 : `calc(${getFontSize7(size2)} - ${rem9(2)})`
  }
}));
var InputWrapper = factory32((_props, ref) => {
  const props = useProps44("InputWrapper", defaultProps42, _props);
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
  const getStyles = useStyles19({
    name: ["InputWrapper", __staticSelector],
    props: __stylesApiProps || props,
    classes: {
      root: "inputWrapper-root",
      label: "inputWrapper-label",
      required: "inputWrapper-required",
      error: "inputWrapper-error",
      description: "inputWrapper-description"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver15
  });
  const sharedProps = {
    size: size2,
    variant,
    __staticSelector
  };
  const idBase = useId3(id);
  const isRequired = typeof withAsterisk === "boolean" ? withAsterisk : required;
  const errorId = (errorProps == null ? void 0 : errorProps.id) || `${idBase}-error`;
  const descriptionId = (descriptionProps == null ? void 0 : descriptionProps.id) || `${idBase}-description`;
  const inputId = idBase;
  const hasError = !!error && typeof error !== "boolean";
  const hasDescription = !!description;
  const _describedBy = `${hasError ? errorId : ""} ${hasDescription ? descriptionId : ""}`;
  const describedBy = _describedBy.trim().length > 0 ? _describedBy.trim() : void 0;
  const labelId = (labelProps == null ? void 0 : labelProps.id) || `${idBase}-label`;
  const _label = label && /* @__PURE__ */ React69.createElement(
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
  const _description = hasDescription && /* @__PURE__ */ React69.createElement(
    InputDescription,
    __spreadProps(__spreadValues(__spreadValues({
      key: "description"
    }, descriptionProps), sharedProps), {
      size: (descriptionProps == null ? void 0 : descriptionProps.size) || sharedProps.size,
      id: (descriptionProps == null ? void 0 : descriptionProps.id) || descriptionId
    }),
    description
  );
  const _input = /* @__PURE__ */ React69.createElement(React69.Fragment, { key: "input" }, inputContainer(children));
  const _error = hasError && /* @__PURE__ */ React69.createElement(
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
  return /* @__PURE__ */ React69.createElement(
    InputWrapperProvider,
    {
      value: __spreadValues({
        getStyles,
        describedBy,
        inputId,
        labelId
      }, getInputOffsets(inputWrapperOrder, { hasDescription, hasError }))
    },
    /* @__PURE__ */ React69.createElement(
      Box29,
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

// ../components/Input/src/Input.tsx
var defaultProps43 = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: true,
  withErrorStyles: true
};
var varsResolver16 = createVarsResolver16((_, props, ctx) => ({
  wrapper: {
    "--input-margin-top": ctx.offsetTop ? "calc(var(--raikou-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": ctx.offsetBottom ? "calc(var(--raikou-spacing-xs) / 2)" : void 0,
    "--input-height": getSize5(props.size, "input-height"),
    "--input-fz": getFontSize8(props.size),
    "--input-radius": props.radius === void 0 ? void 0 : getRadius5(props.radius),
    "--input-left-section-width": props.leftSectionWidth !== void 0 ? rem10(props.leftSectionWidth) : void 0,
    "--input-right-section-width": props.rightSectionWidth !== void 0 ? rem10(props.rightSectionWidth) : void 0,
    "--input-padding-y": props.multiline ? getSize5(props.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": props.leftSectionPointerEvents,
    "--input-right-section-pointer-events": props.rightSectionPointerEvents
  }
}));
var Input = polymorphicFactory7((_props, ref) => {
  const props = useProps45("Input", defaultProps43, _props);
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
  const { styleProps, rest } = extractStyleProps(others);
  const ctx = useInputWrapperContext();
  const stylesCtx = {
    offsetBottom: ctx == null ? void 0 : ctx.offsetBottom,
    offsetTop: ctx == null ? void 0 : ctx.offsetTop
  };
  const getStyles = useStyles20({
    name: ["Input", __staticSelector],
    props: __stylesApiProps || props,
    classes: {
      wrapper: "input-wrapper",
      input: "input-input",
      section: "input-section"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    stylesCtx,
    rootSelector: "wrapper",
    vars,
    varsResolver: varsResolver16
  });
  const ariaAttributes = withAria ? {
    required,
    disabled,
    "aria-invalid": !!error,
    "aria-describedby": ctx == null ? void 0 : ctx.describedBy,
    id: (ctx == null ? void 0 : ctx.inputId) || id
  } : {};
  return /* @__PURE__ */ React70.createElement(
    Box30,
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
    leftSection && /* @__PURE__ */ React70.createElement(
      "div",
      __spreadValues(__spreadProps(__spreadValues({}, leftSectionProps), {
        "data-position": "left"
      }), getStyles("section", {
        className: leftSectionProps == null ? void 0 : leftSectionProps.className,
        style: leftSectionProps == null ? void 0 : leftSectionProps.style
      })),
      leftSection
    ),
    /* @__PURE__ */ React70.createElement(
      Box30,
      __spreadValues(__spreadProps(__spreadValues(__spreadValues({
        component: "input"
      }, rest), ariaAttributes), {
        ref,
        required,
        mod: { disabled, error: !!error && withErrorStyles },
        variant
      }), getStyles("input"))
    ),
    rightSection && /* @__PURE__ */ React70.createElement(
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

// ../components/InlineInput/src/InlineInput.tsx
var InlineInput = forwardRef21(
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
    const getStyles = useStyles21({
      name: __staticSelector,
      props: __stylesApiProps,
      className,
      style,
      classes: {
        root: "inlineInput-root",
        body: "inlineInput-body",
        labelWrapper: "inlineInput-labelWrapper",
        label: "inlineInput-label",
        description: "inlineInput-description",
        error: "inlineInput-error"
      },
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ React71.createElement(
      Box31,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
        ref,
        __vars: {
          "--label-fz": getFontSize9(size2),
          "--label-lh": getSize6(size2, "label-lh")
        },
        mod: { "label-position": labelPosition },
        variant,
        size: size2
      }), others),
      /* @__PURE__ */ React71.createElement("div", __spreadValues({}, getStyles("body")), children, /* @__PURE__ */ React71.createElement("div", __spreadValues({}, getStyles("labelWrapper")), label && /* @__PURE__ */ React71.createElement(
        "label",
        __spreadProps(__spreadValues({}, getStyles("label")), {
          "data-disabled": disabled || void 0,
          htmlFor: id
        }),
        label
      ), description && /* @__PURE__ */ React71.createElement(
        Input.Description,
        __spreadValues({
          size: size2,
          __inheritStyles: false
        }, getStyles("description")),
        description
      ), error && error !== "boolean" && /* @__PURE__ */ React71.createElement(
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
import { createContext as createContext4, useContext as useContext4 } from "react";
var CheckboxGroupContext = createContext4(
  null
);
var CheckboxGroupProvider = CheckboxGroupContext.Provider;
var useCheckboxGroupContext = () => useContext4(CheckboxGroupContext);

// ../components/Checkbox/src/CheckboxGroup/CheckboxGroup.tsx
import React73 from "react";
import { useUncontrolled as useUncontrolled3 } from "@raikou/hooks";
import { factory as factory33, useProps as useProps46 } from "@raikou/core";

// ../components/InputsGroupFieldset/src/InputsGroupFieldset.tsx
import React72 from "react";
function InputsGroupFieldset({
  children,
  role
}) {
  const ctx = useInputWrapperContext();
  if (!ctx) {
    return /* @__PURE__ */ React72.createElement(React72.Fragment, null, children);
  }
  return /* @__PURE__ */ React72.createElement(
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
var defaultProps44 = {};
var CheckboxGroup = factory33((props, ref) => {
  const _a = useProps46("CheckboxGroup", defaultProps44, props), {
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
  const [_value, setValue] = useUncontrolled3({
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
  return /* @__PURE__ */ React73.createElement(
    CheckboxGroupProvider,
    {
      value: { value: _value, onChange: handleChange, size: size2 }
    },
    /* @__PURE__ */ React73.createElement(
      Input.Wrapper,
      __spreadProps(__spreadValues(__spreadValues({
        size: size2,
        ref
      }, wrapperProps), others), {
        labelElement: "div",
        __staticSelector: "CheckboxGroup"
      }),
      /* @__PURE__ */ React73.createElement(InputsGroupFieldset, { role: "group" }, children)
    )
  );
});

// ../components/Checkbox/src/CheckIcon.tsx
import React74 from "react";
import { rem as rem11 } from "@raikou/core";
function CheckIcon(_a) {
  var _b = _a, { size: size2, style } = _b, others = __objRest(_b, ["size", "style"]);
  const _style = size2 !== void 0 ? __spreadValues({ width: rem11(size2), height: rem11(size2) }, style) : style;
  return /* @__PURE__ */ React74.createElement(
    "svg",
    __spreadValues({
      className: "icon",
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: _style
    }, others),
    /* @__PURE__ */ React74.createElement(
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
    return /* @__PURE__ */ React74.createElement(
      "svg",
      __spreadValues({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 32 6"
      }, others),
      /* @__PURE__ */ React74.createElement("rect", { width: "32", height: "6", fill: "currentColor", rx: "3" })
    );
  }
  return /* @__PURE__ */ React74.createElement(CheckIcon, __spreadValues({}, others));
}

// ../components/Checkbox/src/Checkbox.tsx
var defaultProps45 = {
  labelPosition: "right",
  icon: CheckboxIcon
};
var varsResolver17 = createVarsResolver17(
  (theme, { radius, color, size: size2 }) => ({
    root: {
      "--checkbox-size": getSize7(size2, "checkbox-size"),
      "--checkbox-radius": radius === void 0 ? void 0 : getRadius6(radius),
      "--checkbox-color": color ? getThemeColor4(color, theme) : void 0
    }
  })
);
var Checkbox = factory34((_props, ref) => {
  const props = useProps47("Checkbox", defaultProps45, _props);
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
    rootRef
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
    "rootRef"
  ]);
  const ctx = useCheckboxGroupContext();
  const _size = size2 || (ctx == null ? void 0 : ctx.size);
  const Icon = icon;
  const getStyles = useStyles22({
    name: "Checkbox",
    props,
    classes: {
      root: "checkbox-root",
      inner: "checkbox-inner",
      input: "checkbox-input",
      icon: "checkbox-icon",
      body: "inlineInput-body",
      label: "inlineInput-label",
      labelWrapper: "inlineInput-labelWrapper",
      description: "inlineInput-description",
      error: "inlineInput-error"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver17
  });
  const { styleProps, rest } = extractStyleProps2(others);
  const uuid = useId4(id);
  const contextProps = ctx ? {
    checked: ctx.value.includes(rest.value),
    onChange: ctx.onChange
  } : {};
  return /* @__PURE__ */ React75.createElement(
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
    /* @__PURE__ */ React75.createElement(
      Box32,
      __spreadProps(__spreadValues({}, getStyles("inner")), {
        mod: { "data-label-position": labelPosition }
      }),
      /* @__PURE__ */ React75.createElement(
        Box32,
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
      /* @__PURE__ */ React75.createElement(Icon, __spreadValues({ indeterminate }, getStyles("icon")))
    )
  );
});
Checkbox.displayName = "@raikou/core/Checkbox";
Checkbox.Group = CheckboxGroup;

// src/DataTableHeaderSelectorCell.tsx
import cx14 from "clsx";
var defaultProps46 = {};
var DataTableHeaderSelectorCell = factory35((_props, ref) => {
  const props = useProps48("DataTableHeaderSelectorCell", defaultProps46, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    shadowVisible,
    checked,
    indeterminate,
    checkboxProps,
    onChange,
    rowSpan
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "shadowVisible",
    "checked",
    "indeterminate",
    "checkboxProps",
    "onChange",
    "rowSpan"
  ]);
  return /* @__PURE__ */ React76.createElement(
    "th",
    __spreadValues({
      className: cx14("dtHeaderSelectorCell-root", {
        ["dtHeaderSelectorCell-shadowVisible"]: shadowVisible
      }),
      rowSpan
    }, others),
    /* @__PURE__ */ React76.createElement(
      Checkbox,
      __spreadValues({
        classNames: { input: "dtHeaderSelectorCell-checkboxInput" },
        checked,
        indeterminate,
        disabled: !onChange,
        onChange
      }, checkboxProps)
    )
  );
});
DataTableHeaderSelectorCell.displayName = "@raikou/DataTableHeaderSelectorCell";

// src/DataTableHeader.tsx
var defaultProps47 = {};
var DataTableHeader = factory36(
  (_props, ref) => {
    const props = useProps49("DataTableHeader", defaultProps47, _props);
    const _a = props, {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      sortStatus,
      sortIcons,
      onSortStatusChange,
      columns,
      defaultColumnProps,
      groups,
      selectionVisible,
      selectionChecked,
      selectionIndeterminate,
      onSelectionChange,
      selectionCheckboxProps,
      leftShadowVisible
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "unstyled",
      "vars",
      "sortStatus",
      "sortIcons",
      "onSortStatusChange",
      "columns",
      "defaultColumnProps",
      "groups",
      "selectionVisible",
      "selectionChecked",
      "selectionIndeterminate",
      "onSelectionChange",
      "selectionCheckboxProps",
      "leftShadowVisible"
    ]);
    const allRecordsSelectorCell = selectionVisible ? /* @__PURE__ */ React77.createElement(
      DataTableHeaderSelectorCell,
      {
        shadowVisible: leftShadowVisible,
        checked: selectionChecked,
        indeterminate: selectionIndeterminate,
        checkboxProps: selectionCheckboxProps,
        onChange: onSelectionChange,
        rowSpan: groups ? 2 : void 0
      }
    ) : null;
    return /* @__PURE__ */ React77.createElement(
      "thead",
      __spreadValues({
        className: cx15("dataTableHeader-root", className),
        style
      }, others),
      groups && /* @__PURE__ */ React77.createElement("tr", null, allRecordsSelectorCell, groups.map((group) => /* @__PURE__ */ React77.createElement(DataTableColumnGroupHeaderCell, { key: group.id, group }))),
      /* @__PURE__ */ React77.createElement("tr", null, !groups && allRecordsSelectorCell, columns.map((_b) => {
        var _c = _b, { hidden } = _c, columnProps = __objRest(_c, ["hidden"]);
        if (hidden)
          return null;
        const {
          accessor,
          visibleMediaQuery,
          textAlignment,
          width,
          title,
          sortable,
          titleClassName,
          titleStyle,
          filter,
          filtering
        } = __spreadValues(__spreadValues({}, defaultColumnProps), columnProps);
        return /* @__PURE__ */ React77.createElement(
          DataTableHeaderCell,
          {
            key: accessor,
            accessor,
            className: titleClassName,
            style: titleStyle,
            visibleMediaQuery,
            textAlignment,
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
  }
);
DataTableHeader.displayName = "@raikou/DataTableHeader";

// src/DataTableRow.tsx
import React83 from "react";
import {
  factory as factory40,
  useProps as useProps54,
  useStyles as useStyles24
} from "@raikou/core";

// src/DataTableRowCell.tsx
import React78 from "react";
import {
  factory as factory37,
  useProps as useProps50,
  useStyles as useStyles23
} from "@raikou/core";
import cx16 from "clsx";
var defaultProps48 = {};
var DataTableRowCell = factory37((_props) => {
  const props = useProps50("DataTableRowCell", defaultProps48, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    visibleMediaQuery,
    record,
    recordIndex,
    onClick,
    noWrap,
    ellipsis,
    textAlignment,
    width,
    accessor,
    render,
    defaultRender,
    customCellAttributes
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "visibleMediaQuery",
    "record",
    "recordIndex",
    "onClick",
    "noWrap",
    "ellipsis",
    "textAlignment",
    "width",
    "accessor",
    "render",
    "defaultRender",
    "customCellAttributes"
  ]);
  const getStyles = useStyles23({
    name: "DataTableRowCell",
    props,
    classes: {
      root: ""
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: void 0
  });
  if (!useMediaQueryStringOrFunction(visibleMediaQuery))
    return null;
  return /* @__PURE__ */ React78.createElement(
    Box14,
    __spreadValues(__spreadValues(__spreadProps(__spreadValues({
      component: "td"
    }, getStyles("root", {
      className: cx16({
        ["dataTableRowCell-noWrap"]: noWrap || ellipsis,
        ["dataTableRowCell-ellipsis"]: ellipsis,
        ["dataTableRowCell-withPointerCursor"]: onClick
      })
    })), {
      style: [
        __spreadProps(__spreadValues({}, style), {
          width,
          minWidth: width,
          maxWidth: width,
          textAlign: textAlignment
        })
      ],
      onClick
    }), customCellAttributes == null ? void 0 : customCellAttributes(record, recordIndex)), others),
    render ? render(record, recordIndex) : defaultRender ? defaultRender(record, recordIndex, accessor) : getValueAtPath(record, accessor)
  );
});
DataTableRowCell.displayName = "@raikou/DataTableRowCell";

// src/DataTableRowExpansion.tsx
import React81 from "react";
import {
  factory as factory38,
  useProps as useProps52
} from "@raikou/core";

// ../components/Collapse/src/Collapse.tsx
import React80, { forwardRef as forwardRef22 } from "react";
import { useReducedMotion as useReducedMotion2 } from "@raikou/hooks";
import {
  useProps as useProps51,
  Box as Box33,
  getStyleObject,
  useRaikouTheme as useRaikouTheme4
} from "@raikou/core";

// ../components/Collapse/src/use-collapse.ts
import { useState as useState17, useRef as useRef16 } from "react";
import { flushSync as flushSync3 } from "react-dom";
import { useDidUpdate as useDidUpdate5, mergeRefs } from "@raikou/hooks";
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
  const el = useRef16(null);
  const collapsedHeight = 0;
  const collapsedStyles = {
    display: "none",
    height: 0,
    overflow: "hidden"
  };
  const [styles, setStylesRaw] = useState17(
    opened ? {} : collapsedStyles
  );
  const setStyles = (newStyles) => {
    flushSync3(() => setStylesRaw(newStyles));
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
  useDidUpdate5(() => {
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
      [refKey]: mergeRefs(el, theirRef),
      onTransitionEnd: handleTransitionEnd,
      style: __spreadValues(__spreadValues({ boxSizing: "border-box" }, style), styles)
    });
  }
  return getCollapseProps;
}

// ../components/Collapse/src/Collapse.tsx
var defaultProps49 = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: true
};
var Collapse = forwardRef22(
  (props, ref) => {
    const _a = useProps51("Collapse", defaultProps49, props), {
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
    const theme = useRaikouTheme4();
    const shouldReduceMotion = useReducedMotion2();
    const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
    const duration = reduceMotion ? 0 : transitionDuration;
    const getCollapseProps = useCollapse({
      opened,
      transitionDuration: duration,
      transitionTimingFunction,
      onTransitionEnd
    });
    if (duration === 0) {
      return opened ? /* @__PURE__ */ React80.createElement(Box33, __spreadValues({}, others), children) : null;
    }
    return /* @__PURE__ */ React80.createElement(
      Box33,
      __spreadValues({}, getCollapseProps(__spreadValues({
        style: getStyleObject(style, theme),
        ref
      }, others))),
      /* @__PURE__ */ React80.createElement(
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

// src/DataTableRowExpansion.tsx
import cx17 from "clsx";
var defaultProps50 = {};
var DataTableRowExpansion = factory38(
  (_props, ref) => {
    const props = useProps52("DataTableRowExpansion", defaultProps50, _props);
    const _a = props, {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      open,
      colSpan,
      content,
      collapseProps
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "unstyled",
      "vars",
      "open",
      "colSpan",
      "content",
      "collapseProps"
    ]);
    const { expanded, visible } = useRowExpansionStatus(
      open,
      collapseProps == null ? void 0 : collapseProps.transitionDuration
    );
    return visible ? /* @__PURE__ */ React81.createElement(React81.Fragment, null, /* @__PURE__ */ React81.createElement("tr", null), /* @__PURE__ */ React81.createElement("tr", null, /* @__PURE__ */ React81.createElement(
      "td",
      __spreadValues({
        className: cx17("dataTableRowExpansion-cell", {
          ["dataTableRowCell-expandedCell"]: expanded
        }),
        colSpan
      }, others),
      /* @__PURE__ */ React81.createElement(Collapse, __spreadValues({ in: expanded }, collapseProps), content())
    ))) : null;
  }
);
DataTableRowExpansion.displayName = "@raikou/DataTableRowExpansion";

// src/DataTableRowSelectorCell.tsx
import React82 from "react";
import {
  factory as factory39,
  useProps as useProps53
} from "@raikou/core";
import cx18 from "clsx";
var defaultProps51 = {};
var DataTableRowSelectorCell = factory39((_props, ref) => {
  const props = useProps53("DataTableRowSelectorCell", defaultProps51, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    record,
    recordIndex,
    withRightShadow,
    getCheckboxProps
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "record",
    "recordIndex",
    "withRightShadow",
    "getCheckboxProps"
  ]);
  return /* @__PURE__ */ React82.createElement(
    "td",
    {
      className: cx18("dataTableRowSelectorCell-root", {
        ["dataTableRowSelectorCell-withRightShadow"]: withRightShadow
      }),
      onClick: (e) => e.stopPropagation()
    },
    /* @__PURE__ */ React82.createElement(
      Checkbox,
      __spreadValues(__spreadValues({
        classNames: { input: "dataTableRowSelectorCell-checkbox" }
      }, others), getCheckboxProps(record, recordIndex))
    )
  );
});
DataTableRowSelectorCell.displayName = "@raikou/DataTableRowSelectorCell";

// src/DataTableRow.tsx
import cx19 from "clsx";
var defaultProps52 = {};
var DataTableRow = factory40((_props) => {
  const props = useProps54("DataTableRow", defaultProps52, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    record,
    recordIndex,
    columns,
    defaultColumnProps,
    defaultColumnRender,
    selectionVisible,
    selectionChecked,
    onSelectionChange,
    isRecordSelectable,
    getSelectionCheckboxProps,
    onClick,
    onCellClick,
    onContextMenu,
    expansion,
    customAttributes,
    contextMenuVisible,
    leftShadowVisible
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "record",
    "recordIndex",
    "columns",
    "defaultColumnProps",
    "defaultColumnRender",
    "selectionVisible",
    "selectionChecked",
    "onSelectionChange",
    "isRecordSelectable",
    "getSelectionCheckboxProps",
    "onClick",
    "onCellClick",
    "onContextMenu",
    "expansion",
    "customAttributes",
    "contextMenuVisible",
    "leftShadowVisible"
  ]);
  const getStyles = useStyles24({
    name: "DataTableRow",
    props,
    classes: {
      root: "",
      td: ""
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: void 0
  });
  return /* @__PURE__ */ React83.createElement(React83.Fragment, null, /* @__PURE__ */ React83.createElement(
    Box14,
    __spreadValues(__spreadProps(__spreadValues(__spreadProps(__spreadValues({
      component: "tr"
    }, getStyles("root", {
      className: cx19({
        ["dataTableRow-withPointerCursor"]: onClick || (expansion == null ? void 0 : expansion.expandOnClick),
        ["dataTableRow-selected"]: selectionChecked,
        ["dataTableRow-contextMenuVisible"]: contextMenuVisible
      })
    })), {
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
        onClick == null ? void 0 : onClick(e);
      }
    }), customAttributes == null ? void 0 : customAttributes(record, recordIndex)), {
      onContextMenu
    }), others),
    selectionVisible && /* @__PURE__ */ React83.createElement(
      DataTableRowSelectorCell,
      {
        record,
        recordIndex,
        withRightShadow: leftShadowVisible,
        checked: selectionChecked,
        disabled: !onSelectionChange || (isRecordSelectable ? !isRecordSelectable(record, recordIndex) : false),
        onChange: onSelectionChange,
        getCheckboxProps: getSelectionCheckboxProps
      }
    ),
    columns.map((_b, columnIndex) => {
      var _c = _b, { hidden } = _c, columnProps = __objRest(_c, ["hidden"]);
      if (hidden)
        return null;
      const {
        accessor,
        visibleMediaQuery,
        textAlignment,
        noWrap,
        ellipsis,
        width,
        render,
        customCellAttributes
      } = __spreadValues(__spreadValues({}, defaultColumnProps), columnProps);
      let handleCellClick;
      if (onCellClick) {
        handleCellClick = (event) => onCellClick({
          event,
          record,
          recordIndex,
          column: columnProps,
          columnIndex
        });
      }
      return /* @__PURE__ */ React83.createElement(
        DataTableRowCell,
        {
          key: accessor,
          classNames: {
            root: classNames["td"]
          },
          visibleMediaQuery,
          record,
          recordIndex,
          onClick: handleCellClick,
          accessor,
          textAlignment,
          noWrap,
          ellipsis,
          width,
          render,
          defaultRender: defaultColumnRender,
          customCellAttributes
        }
      );
    })
  ), expansion && /* @__PURE__ */ React83.createElement(
    DataTableRowExpansion,
    {
      colSpan: columns.filter(({ hidden }) => !hidden).length + (selectionVisible ? 1 : 0),
      open: expansion.isRowExpanded(record),
      content: expansion.content(record, recordIndex),
      collapseProps: expansion.collapseProps
    }
  ));
});
DataTableRow.displayName = "@raikou/DataTableRow";

// src/DataTable.tsx
var defaultProps53 = {};
var DataTable = factory41((_props, ref) => {
  const props = useProps55("DataTable", defaultProps53, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    withBorder,
    striped,
    noHeader: withoutHeader,
    onCellClick,
    onRowClick,
    withColumnBorders,
    textSelectionDisabled,
    verticalAlignment = "center",
    defaultColumnProps,
    fetching,
    onPageChange,
    rowExpansion,
    rowClassName,
    rowStyle,
    rowContextMenu,
    customRowAttributes,
    records,
    groups,
    columns,
    selectedRecords,
    emptyState,
    loaderBackgroundBlur,
    customLoader,
    loaderSize,
    loaderVariant,
    loaderColor,
    noRecordsText = "No records",
    noRecordsIcon,
    isRecordSelectable,
    onSelectedRecordsChange,
    defaultColumnRender,
    idAccessor = "id",
    onScrollToTop,
    onScrollToLeft,
    onScrollToBottom,
    onScrollToRight,
    scrollViewportRef: scrollViewportRefProp,
    scrollAreaProps,
    page,
    bodyRef,
    totalRecords,
    recordsPerPage,
    getRecordSelectionCheckboxProps = (_, index3) => ({
      "aria-label": `Select record ${index3 + 1}`
    }),
    allRecordsSelectionCheckboxProps = { "aria-label": "Select all records" },
    sortStatus,
    sortIcons,
    onSortStatusChange,
    onRecordsPerPageChange,
    recordsPerPageOptions,
    recordsPerPageLabel = "Records per page",
    horizontalSpacing,
    paginationColor,
    paginationSize = "sm",
    paginationText = ({ from, to, totalRecords: totalRecords2 }) => `${from} - ${to} / ${totalRecords2}`,
    paginationWrapBreakpoint = "sm",
    loadingText = "...",
    getPaginationControlProps = (control) => {
      if (control === "previous") {
        return { "aria-label": "Previous page" };
      } else if (control === "next") {
        return { "aria-label": "Next page" };
      }
      return {};
    }
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "withBorder",
    "striped",
    "noHeader",
    "onCellClick",
    "onRowClick",
    "withColumnBorders",
    "textSelectionDisabled",
    "verticalAlignment",
    "defaultColumnProps",
    "fetching",
    "onPageChange",
    "rowExpansion",
    "rowClassName",
    "rowStyle",
    "rowContextMenu",
    "customRowAttributes",
    "records",
    "groups",
    "columns",
    "selectedRecords",
    "emptyState",
    "loaderBackgroundBlur",
    "customLoader",
    "loaderSize",
    "loaderVariant",
    "loaderColor",
    "noRecordsText",
    "noRecordsIcon",
    "isRecordSelectable",
    "onSelectedRecordsChange",
    "defaultColumnRender",
    "idAccessor",
    "onScrollToTop",
    "onScrollToLeft",
    "onScrollToBottom",
    "onScrollToRight",
    "scrollViewportRef",
    "scrollAreaProps",
    "page",
    "bodyRef",
    "totalRecords",
    "recordsPerPage",
    "getRecordSelectionCheckboxProps",
    "allRecordsSelectionCheckboxProps",
    "sortStatus",
    "sortIcons",
    "onSortStatusChange",
    "onRecordsPerPageChange",
    "recordsPerPageOptions",
    "recordsPerPageLabel",
    "horizontalSpacing",
    "paginationColor",
    "paginationSize",
    "paginationText",
    "paginationWrapBreakpoint",
    "loadingText",
    "getPaginationControlProps"
  ]);
  const {
    ref: scrollViewportRef,
    width: scrollViewportWidth,
    height: scrollViewportHeight
  } = useElementOuterSize();
  const effectiveColumns = useMemo5(() => {
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
  const [scrolledToTop, setScrolledToTop] = useState18(true);
  const [scrolledToBottom, setScrolledToBottom] = useState18(true);
  const [scrolledToLeft, setScrolledToLeft] = useState18(true);
  const [scrolledToRight, setScrolledToRight] = useState18(true);
  const { rowContextMenuInfo, setRowContextMenuInfo } = useRowContextMenu(fetching);
  const rowExpansionInfo = useRowExpansion({
    rowExpansion,
    records,
    idAccessor
  });
  const handleScrollPositionChange = useCallback5(() => {
    var _a2, _b;
    if (!fetching && rowContextMenu) {
      setRowContextMenuInfo(null);
    }
    if (fetching || tableHeight <= scrollViewportHeight) {
      setScrolledToTop(true);
      setScrolledToBottom(true);
    } else {
      const scrollTop = ((_a2 = scrollViewportRef.current) == null ? void 0 : _a2.scrollTop) || 0;
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
      const scrollLeft = ((_b = scrollViewportRef.current) == null ? void 0 : _b.scrollLeft) || 0;
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
    rowContextMenu,
    scrollViewportHeight,
    scrollViewportRef,
    scrollViewportWidth,
    scrolledToBottom,
    scrolledToLeft,
    scrolledToRight,
    scrolledToTop,
    setRowContextMenuInfo,
    tableHeight,
    tableWidth
  ]);
  useIsomorphicLayoutEffect(handleScrollPositionChange, [
    handleScrollPositionChange
  ]);
  const handlePageChange = useCallback5(
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
  const handleHeaderSelectionChange = useCallback5(() => {
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
  return /* @__PURE__ */ React84.createElement(
    Box34,
    __spreadProps(__spreadValues({
      className: cx20("dataTable-root", {
        ["dataTable-root-tableWithBorder"]: withBorder
      })
    }, others), {
      ref
    }),
    /* @__PURE__ */ React84.createElement(
      DataTableScrollArea,
      {
        viewportRef: useMergedRef11(
          scrollViewportRef,
          scrollViewportRefProp || null
        ),
        topShadowVisible: !scrolledToTop,
        leftShadowVisible: !(selectedRecords || scrolledToLeft),
        rightShadowVisible: !scrolledToRight,
        bottomShadowVisible: !scrolledToBottom,
        headerHeight,
        footerHeight,
        onScrollPositionChange: handleScrollPositionChange,
        scrollAreaProps
      },
      /* @__PURE__ */ React84.createElement(
        Table,
        __spreadValues({
          ref: tableRef,
          horizontalSpacing,
          className: cx20("dataTable-table", {
            ["dataTable-tableWithBorder"]: withColumnBorders,
            ["lastRowBorderBottomVisible"]: tableHeight < scrollViewportHeight,
            ["dataTable-textSelectionDisabled"]: textSelectionDisabled,
            ["dataTable-verticalAlignmentTop"]: verticalAlignment === "top",
            ["dataTable-verticalAlignmentBottom"]: verticalAlignment === "bottom",
            ["dataTable-tableWithColumnBordersAndSelectableRecords"]: selectionColumnVisible && withColumnBorders
          }),
          striped: recordsLength ? striped : false
        }, others),
        withoutHeader ? null : /* @__PURE__ */ React84.createElement(
          DataTableHeader,
          {
            ref: headerRef,
            columns: effectiveColumns,
            defaultColumnProps,
            groups,
            sortStatus,
            sortIcons,
            onSortStatusChange,
            selectionVisible: selectionColumnVisible,
            selectionChecked: allSelectableRecordsSelected,
            selectionIndeterminate: someRecordsSelected && !allSelectableRecordsSelected,
            onSelectionChange: handleHeaderSelectionChange,
            selectionCheckboxProps: allRecordsSelectionCheckboxProps,
            leftShadowVisible: selectionVisibleAndNotScrolledToLeft
          }
        ),
        /* @__PURE__ */ React84.createElement("tbody", { ref: bodyRef }, recordsLength ? records.map((record, recordIndex) => {
          const recordId = getRecordId(record, idAccessor);
          const isSelected = (selectedRecordIds == null ? void 0 : selectedRecordIds.includes(recordId)) || false;
          let showContextMenuOnClick = false;
          let showContextMenuOnRightClick = false;
          if (rowContextMenu) {
            const { hidden } = rowContextMenu;
            if (!hidden || !(typeof hidden === "function" ? hidden(record, recordIndex) : hidden)) {
              if (rowContextMenu.trigger === "click") {
                showContextMenuOnClick = true;
              } else {
                showContextMenuOnRightClick = true;
              }
            }
          }
          let handleSelectionChange;
          if (onSelectedRecordsChange && selectedRecords) {
            handleSelectionChange = (e) => {
              if (e.nativeEvent.shiftKey && lastSelectionChangeIndex !== null) {
                const targetRecords = records.filter(
                  recordIndex > lastSelectionChangeIndex ? (r, index3) => index3 >= lastSelectionChangeIndex && index3 <= recordIndex && (isRecordSelectable ? isRecordSelectable(r, index3) : true) : (r, index3) => index3 >= recordIndex && index3 <= lastSelectionChangeIndex && (isRecordSelectable ? isRecordSelectable(r, index3) : true)
                );
                onSelectedRecordsChange(
                  isSelected ? differenceBy(
                    selectedRecords,
                    targetRecords,
                    (r) => getRecordId(r, idAccessor)
                  ) : uniqBy(
                    [...selectedRecords, ...targetRecords],
                    (r) => getRecordId(r, idAccessor)
                  )
                );
              } else {
                onSelectedRecordsChange(
                  isSelected ? selectedRecords.filter(
                    (record2) => getRecordId(record2, idAccessor) !== recordId
                  ) : uniqBy(
                    [...selectedRecords, record],
                    (record2) => getRecordId(record2, idAccessor)
                  )
                );
              }
              setLastSelectionChangeIndex(recordIndex);
            };
          }
          let handleClick;
          if (showContextMenuOnClick) {
            handleClick = (e) => {
              setRowContextMenuInfo({
                y: e.clientY,
                x: e.clientX,
                record,
                recordIndex
              });
              onRowClick == null ? void 0 : onRowClick(record, recordIndex, e);
            };
          } else if (onRowClick) {
            handleClick = (e) => {
              onRowClick(record, recordIndex, e);
            };
          }
          let handleContextMenu;
          if (showContextMenuOnRightClick) {
            handleContextMenu = (e) => {
              e.preventDefault();
              setRowContextMenuInfo({
                y: e.clientY,
                x: e.clientX,
                record,
                recordIndex
              });
            };
          }
          return /* @__PURE__ */ React84.createElement(
            DataTableRow,
            {
              classNames: {
                root: classNames && classNames["table-tr"],
                td: classNames && classNames["table-td"]
              },
              key: recordId,
              record,
              recordIndex,
              columns: effectiveColumns,
              defaultColumnProps,
              defaultColumnRender,
              selectionVisible: selectionColumnVisible,
              selectionChecked: isSelected,
              onSelectionChange: handleSelectionChange,
              isRecordSelectable,
              getSelectionCheckboxProps: getRecordSelectionCheckboxProps,
              onClick: handleClick,
              onCellClick,
              onContextMenu: handleContextMenu,
              contextMenuVisible: rowContextMenuInfo ? getRecordId(rowContextMenuInfo.record, idAccessor) === recordId : false,
              expansion: rowExpansionInfo,
              style: rowStyle,
              customAttributes: customRowAttributes,
              leftShadowVisible: selectionVisibleAndNotScrolledToLeft
            }
          );
        }) : /* @__PURE__ */ React84.createElement("tr", { className: "dataTableEmptyRow-root" }, /* @__PURE__ */ React84.createElement("td", null))),
        effectiveColumns.some(({ footer }) => footer) && /* @__PURE__ */ React84.createElement(
          DataTableFooter,
          {
            ref: footerRef,
            borderColor: "",
            columns: effectiveColumns,
            defaultColumnProps,
            selectionVisible: selectionColumnVisible,
            leftShadowVisible: selectionVisibleAndNotScrolledToLeft,
            scrollDiff: tableHeight - scrollViewportHeight
          }
        )
      )
    ),
    page && /* @__PURE__ */ React84.createElement(
      DataTablePagination,
      {
        ref: paginationRef,
        px: horizontalSpacing != null ? horizontalSpacing : "xs",
        topBorderColor: "",
        fetching,
        page,
        onPageChange: handlePageChange,
        totalRecords,
        recordsPerPage,
        onRecordsPerPageChange,
        recordsPerPageOptions,
        recordsPerPageLabel,
        paginationColor,
        paginationSize,
        paginationText,
        paginationWrapBreakpoint,
        getPaginationControlProps,
        noRecordsText,
        loadingText,
        recordsLength
      }
    ),
    /* @__PURE__ */ React84.createElement(
      DataTableLoader,
      {
        pt: headerHeight,
        pb: paginationHeight,
        fetching,
        backgroundBlur: loaderBackgroundBlur,
        customContent: customLoader,
        size: loaderSize,
        variant: loaderVariant,
        color: loaderColor
      }
    ),
    /* @__PURE__ */ React84.createElement(
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
});
DataTable.displayName = "@raikou/DataTable";
export {
  DataTable,
  differenceBy,
  getValueAtPath,
  humanize,
  uniqBy
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
