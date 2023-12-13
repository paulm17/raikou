"use strict";
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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Drawer: () => Drawer,
  DrawerBody: () => DrawerBody,
  DrawerCloseButton: () => DrawerCloseButton,
  DrawerContent: () => DrawerContent,
  DrawerHeader: () => DrawerHeader,
  DrawerOverlay: () => DrawerOverlay,
  DrawerRoot: () => DrawerRoot,
  DrawerTitle: () => DrawerTitle
});
module.exports = __toCommonJS(src_exports);

// src/Drawer.tsx
var import_react35 = __toESM(require("react"));
var import_core20 = require("@raikou/core");

// src/DrawerRoot.tsx
var import_react28 = __toESM(require("react"));
var import_core13 = require("@raikou/core");

// ../ModalBase/src/ModalBase.tsx
var import_react10 = __toESM(require("react"));

// ../../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js
var import_tslib5 = require("tslib");
var React6 = __toESM(require("react"));

// ../../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/UI.js
var import_tslib3 = require("tslib");
var React2 = __toESM(require("react"));

// ../../../../node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// ../../../../node_modules/.pnpm/use-callback-ref@1.3.0_@types+react@18.2.23_react@18.2.0/node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// ../../../../node_modules/.pnpm/use-callback-ref@1.3.0_@types+react@18.2.23_react@18.2.0/node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react = require("react");
function useCallbackRef(initialValue, callback) {
  var ref = (0, import_react.useState)(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// ../../../../node_modules/.pnpm/use-callback-ref@1.3.0_@types+react@18.2.23_react@18.2.0/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
function useMergeRefs(refs, defaultValue) {
  return useCallbackRef(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
}

// ../../../../node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.2.23_react@18.2.0/node_modules/use-sidecar/dist/es2015/medium.js
var import_tslib = require("tslib");
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = (0, import_tslib.__assign)({ async: true, ssr: false }, options);
  return medium;
}

// ../../../../node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.2.23_react@18.2.0/node_modules/use-sidecar/dist/es2015/exports.js
var import_tslib2 = require("tslib");
var React = __toESM(require("react"));
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = (0, import_tslib2.__rest)(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React.createElement(Target, (0, import_tslib2.__assign)({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// ../../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// ../../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React2.forwardRef(function(props, parentRef) {
  var ref = React2.useRef(null);
  var _a = React2.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = (0, import_tslib3.__rest)(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = (0, import_tslib3.__assign)((0, import_tslib3.__assign)({}, rest), callbacks);
  return React2.createElement(
    React2.Fragment,
    null,
    enabled && React2.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? React2.cloneElement(React2.Children.only(children), (0, import_tslib3.__assign)((0, import_tslib3.__assign)({}, containerProps), { ref: containerRef })) : React2.createElement(Container, (0, import_tslib3.__assign)({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// ../../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var import_tslib4 = require("tslib");
var React5 = __toESM(require("react"));

// ../../../../node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React4 = __toESM(require("react"));

// ../../../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.23_react@18.2.0/node_modules/react-style-singleton/dist/es2015/hook.js
var React3 = __toESM(require("react"));

// ../../../../node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// ../../../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.23_react@18.2.0/node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// ../../../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.23_react@18.2.0/node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React3.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// ../../../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.23_react@18.2.0/node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// ../../../../node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// ../../../../node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var RemoveScrollBar = function(props) {
  var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? "margin" : _a;
  var gap = React4.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React4.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// ../../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// ../../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var ownerDocument = node.ownerDocument;
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
      if (s > d) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    target = target.parentNode;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// ../../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React5.useRef([]);
  var touchStartRef = React5.useRef([0, 0]);
  var activeAxis = React5.useRef();
  var id = React5.useState(idCounter++)[0];
  var Style2 = React5.useState(styleSingleton)[0];
  var lastProps = React5.useRef(props);
  React5.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React5.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = (0, import_tslib4.__spreadArray)([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React5.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React5.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React5.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React5.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React5.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React5.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React5.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React5.createElement(
    React5.Fragment,
    null,
    inert ? React5.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React5.createElement(RemoveScrollBar, { gapMode: props.gapMode }) : null
  );
}

// ../../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// ../../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React6.forwardRef(function(props, ref) {
  return React6.createElement(RemoveScroll, (0, import_tslib5.__assign)({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// ../ModalBase/src/ModalBase.tsx
var import_core2 = require("@raikou/core");

// ../Portal/src/Portal.tsx
var import_react2 = __toESM(require("react"));
var import_react_dom = require("react-dom");
var import_hooks = require("@raikou/hooks");
var import_core = require("@raikou/core");
function createPortalNode(props) {
  const node = document.createElement("div");
  node.setAttribute("data-portal", "true");
  typeof props.className === "string" && node.classList.add(...props.className.split(" "));
  typeof props.style === "object" && Object.assign(node.style, props.style);
  typeof props.id === "string" && node.setAttribute("id", props.id);
  return node;
}
var defaultProps = {};
var Portal = (0, import_react2.forwardRef)((props, ref) => {
  const _a = (0, import_core.useProps)(
    "Portal",
    defaultProps,
    props
  ), { children, target } = _a, others = __objRest(_a, ["children", "target"]);
  const [mounted, setMounted] = (0, import_react2.useState)(false);
  const nodeRef = (0, import_react2.useRef)(null);
  (0, import_hooks.useIsomorphicEffect)(() => {
    setMounted(true);
    nodeRef.current = !target ? createPortalNode(others) : typeof target === "string" ? document.querySelector(target) : target;
    (0, import_hooks.assignRef)(ref, nodeRef.current);
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
  return (0, import_react_dom.createPortal)(/* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, children), nodeRef.current);
});
Portal.displayName = "@raikou/core/Portal";

// ../Portal/src/OptionalPortal.tsx
var import_react3 = __toESM(require("react"));
function OptionalPortal(_a) {
  var _b = _a, {
    withinPortal = true,
    children
  } = _b, others = __objRest(_b, [
    "withinPortal",
    "children"
  ]);
  if (withinPortal) {
    return /* @__PURE__ */ import_react3.default.createElement(Portal, __spreadValues({}, others), children);
  }
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, children);
}
OptionalPortal.displayName = "@raikou/core/OptionalPortal";

// ../_utils/create-safe-context/create-safe-context.tsx
var import_react4 = __toESM(require("react"));
function createSafeContext(errorMessage) {
  const Context = (0, import_react4.createContext)(null);
  const useSafeContext = () => {
    const ctx = (0, import_react4.useContext)(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react4.default.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../_utils/create-optional-context/create-optional-context.tsx
var import_react5 = __toESM(require("react"));

// ../_utils/use-hovered/use-hovered.ts
var import_react6 = require("react");

// ../_utils/create-use-external-events/create-use-external-events.ts
var import_react7 = require("react");

// ../ModalBase/src/ModalBase.context.ts
var [ModalBaseProvider, useModalBaseContext] = createSafeContext(
  "ModalBase component was not found in tree"
);

// ../ModalBase/src/use-modal.ts
var import_react9 = require("react");
var import_hooks3 = require("@raikou/hooks");

// ../ModalBase/src/use-lock-scroll.ts
var import_react8 = require("react");
var import_hooks2 = require("@raikou/hooks");
function useLockScroll({ opened, transitionDuration }) {
  const [shouldLockScroll, setShouldLockScroll] = (0, import_react8.useState)(opened);
  const timeout = (0, import_react8.useRef)();
  const reduceMotion = (0, import_hooks2.useReducedMotion)();
  const _transitionDuration = reduceMotion ? 0 : transitionDuration;
  (0, import_react8.useEffect)(() => {
    if (opened) {
      setShouldLockScroll(true);
      window.clearTimeout(timeout.current);
    } else if (_transitionDuration === 0) {
      setShouldLockScroll(false);
    } else {
      timeout.current = window.setTimeout(
        () => setShouldLockScroll(false),
        _transitionDuration
      );
    }
    return () => window.clearTimeout(timeout.current);
  }, [opened, _transitionDuration]);
  return shouldLockScroll;
}

// ../ModalBase/src/use-modal.ts
function useModal({
  id,
  transitionProps,
  opened,
  trapFocus,
  closeOnEscape,
  onClose,
  returnFocus
}) {
  const _id = (0, import_hooks3.useId)(id);
  const [titleMounted, setTitleMounted] = (0, import_react9.useState)(false);
  const [bodyMounted, setBodyMounted] = (0, import_react9.useState)(false);
  const transitionDuration = typeof (transitionProps == null ? void 0 : transitionProps.duration) === "number" ? transitionProps == null ? void 0 : transitionProps.duration : 200;
  const shouldLockScroll = useLockScroll({ opened, transitionDuration });
  (0, import_hooks3.useWindowEvent)("keydown", (event) => {
    if (!trapFocus && event.key === "Escape" && closeOnEscape) {
      onClose();
    }
  });
  (0, import_hooks3.useFocusReturn)({ opened, shouldReturnFocus: trapFocus && returnFocus });
  return {
    _id,
    titleMounted,
    bodyMounted,
    shouldLockScroll,
    setTitleMounted,
    setBodyMounted
  };
}

// ../ModalBase/src/ModalBase.tsx
var ModalBase = (0, import_react10.forwardRef)(
  (_a, ref) => {
    var _b = _a, {
      keepMounted,
      opened,
      onClose,
      id,
      transitionProps,
      trapFocus,
      closeOnEscape,
      returnFocus,
      closeOnClickOutside,
      withinPortal,
      portalProps,
      lockScroll,
      children,
      zIndex,
      shadow,
      padding,
      __vars,
      removeScrollProps
    } = _b, others = __objRest(_b, [
      "keepMounted",
      "opened",
      "onClose",
      "id",
      "transitionProps",
      "trapFocus",
      "closeOnEscape",
      "returnFocus",
      "closeOnClickOutside",
      "withinPortal",
      "portalProps",
      "lockScroll",
      "children",
      "zIndex",
      "shadow",
      "padding",
      "__vars",
      "removeScrollProps"
    ]);
    const {
      _id,
      titleMounted,
      bodyMounted,
      shouldLockScroll,
      setTitleMounted,
      setBodyMounted
    } = useModal({
      id,
      transitionProps,
      opened,
      trapFocus,
      closeOnEscape,
      onClose,
      returnFocus
    });
    return /* @__PURE__ */ import_react10.default.createElement(OptionalPortal, __spreadProps(__spreadValues({}, portalProps), { withinPortal }), /* @__PURE__ */ import_react10.default.createElement(
      ModalBaseProvider,
      {
        value: {
          opened,
          onClose,
          closeOnClickOutside,
          transitionProps: __spreadProps(__spreadValues({}, transitionProps), { keepMounted }),
          getTitleId: () => `${_id}-title`,
          getBodyId: () => `${_id}-body`,
          titleMounted,
          bodyMounted,
          setTitleMounted,
          setBodyMounted,
          trapFocus,
          closeOnEscape,
          zIndex
        }
      },
      /* @__PURE__ */ import_react10.default.createElement(
        Combination_default,
        __spreadValues({
          enabled: shouldLockScroll && lockScroll
        }, removeScrollProps),
        /* @__PURE__ */ import_react10.default.createElement(
          import_core2.Box,
          __spreadProps(__spreadValues({
            ref
          }, others), {
            __vars: __spreadProps(__spreadValues({}, __vars), {
              "--mb-z-index": (zIndex || (0, import_core2.getDefaultZIndex)("modal")).toString(),
              "--mb-shadow": (0, import_core2.getShadow)(shadow),
              "--mb-padding": (0, import_core2.getSpacing)(padding)
            })
          }),
          children
        )
      )
    ));
  }
);
ModalBase.displayName = "@raikou/core/ModalBase";

// ../ModalBase/src/ModalBaseBody.tsx
var import_react12 = __toESM(require("react"));

// ../../../../node_modules/.pnpm/clsx@2.0.0/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// ../ModalBase/src/ModalBaseBody.tsx
var import_core3 = require("@raikou/core");

// ../ModalBase/src/use-modal-body-id.ts
var import_react11 = require("react");
function useModalBodyId() {
  const ctx = useModalBaseContext();
  (0, import_react11.useEffect)(() => {
    ctx.setBodyMounted(true);
    return () => ctx.setBodyMounted(false);
  }, []);
  return ctx.getBodyId();
}

// css-module:./ModalBase.module.css#css-module
var ModalBase_module_default = { "title": "m-615af6c9", "header": "m-b5489c3c", "inner": "m-60c222c7", "content": "m-fd1ab0aa", "close": "m-606cb269", "body": "m-5df29311" };

// ../ModalBase/src/ModalBaseBody.tsx
var ModalBaseBody = (0, import_react12.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    const bodyId = useModalBodyId();
    return /* @__PURE__ */ import_react12.default.createElement(
      import_core3.Box,
      __spreadProps(__spreadValues({
        ref
      }, others), {
        id: bodyId,
        className: clsx_default(ModalBase_module_default.body, className)
      })
    );
  }
);
ModalBaseBody.displayName = "@raikou/core/ModalBaseBody";

// ../ModalBase/src/ModalBaseCloseButton.tsx
var import_react16 = __toESM(require("react"));

// ../CloseButton/src/CloseIcon.tsx
var import_react13 = __toESM(require("react"));
var CloseIcon = (0, import_react13.forwardRef)(
  (_a, ref) => {
    var _b = _a, { size = "var(--cb-icon-size, 70%)", style } = _b, others = __objRest(_b, ["size", "style"]);
    return /* @__PURE__ */ import_react13.default.createElement(
      "svg",
      __spreadValues({
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: __spreadProps(__spreadValues({}, style), { width: size, height: size }),
        ref
      }, others),
      /* @__PURE__ */ import_react13.default.createElement(
        "path",
        {
          d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    );
  }
);
CloseIcon.displayName = "@raikou/core/CloseIcon";

// ../CloseButton/src/CloseButton.tsx
var import_react15 = __toESM(require("react"));
var import_core5 = require("@raikou/core");

// ../UnstyledButton/src/UnstyledButton.tsx
var import_react14 = __toESM(require("react"));
var import_core4 = require("@raikou/core");

// css-module:./UnstyledButton.module.css#css-module
var UnstyledButton_module_default = { "root": "m-87cf2631" };

// ../UnstyledButton/src/UnstyledButton.tsx
var defaultProps2 = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = (0, import_core4.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core4.useProps)("UnstyledButton", defaultProps2, _props);
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
    const getStyles2 = (0, import_core4.useStyles)({
      name: __staticSelector,
      props,
      classes: UnstyledButton_module_default,
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ import_react14.default.createElement(
      import_core4.Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles2("root", { focusable: true })), {
        component,
        ref,
        type: component === "button" ? "button" : void 0
      }), others)
    );
  }
);
UnstyledButton.displayName = "@raikou/core/UnstyledButton";
UnstyledButton.classes = UnstyledButton_module_default;

// css-module:./CloseButton.module.css#css-module
var CloseButton_module_default = { "root": "m-86a44da5", "root--subtle": "m-220c80f2" };

// ../CloseButton/src/CloseButton.tsx
var defaultProps3 = {
  variant: "subtle",
  size: "md"
};
var varsResolver = (0, import_core5.createVarsResolver)(
  (_, { size, radius, iconSize }) => ({
    root: {
      "--cb-size": (0, import_core5.getSize)(size, "cb-size"),
      "--cb-radius": radius === void 0 ? void 0 : (0, import_core5.getRadius)(radius),
      "--cb-icon-size": (0, import_core5.rem)(iconSize)
    }
  })
);
var CloseButton = (0, import_core5.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core5.useProps)("CloseButton", defaultProps3, _props);
    const _a = props, {
      iconSize,
      children,
      vars,
      radius,
      className,
      classNames,
      style,
      styles,
      unstyled,
      "data-disabled": dataDisabled,
      disabled,
      variant
    } = _a, others = __objRest(_a, [
      "iconSize",
      "children",
      "vars",
      "radius",
      "className",
      "classNames",
      "style",
      "styles",
      "unstyled",
      "data-disabled",
      "disabled",
      "variant"
    ]);
    const getStyles2 = (0, import_core5.useStyles)({
      name: "CloseButton",
      props,
      className,
      style,
      classes: CloseButton_module_default,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver
    });
    return /* @__PURE__ */ import_react15.default.createElement(
      UnstyledButton,
      __spreadValues(__spreadProps(__spreadValues({
        ref
      }, others), {
        unstyled,
        variant,
        disabled,
        mod: { disabled: disabled || dataDisabled }
      }), getStyles2("root", { variant, active: true })),
      /* @__PURE__ */ import_react15.default.createElement(CloseIcon, null),
      children
    );
  }
);
CloseButton.displayName = "@raikou/core/CloseButton";
CloseButton.classes = CloseButton_module_default;

// ../ModalBase/src/ModalBaseCloseButton.tsx
var ModalBaseCloseButton = (0, import_react16.forwardRef)((_a, ref) => {
  var _b = _a, { className, onClick } = _b, others = __objRest(_b, ["className", "onClick"]);
  const ctx = useModalBaseContext();
  return /* @__PURE__ */ import_react16.default.createElement(
    CloseButton,
    __spreadProps(__spreadValues({
      ref
    }, others), {
      onClick: (event) => {
        ctx.onClose();
        onClick == null ? void 0 : onClick(event);
      },
      className: clsx_default(ModalBase_module_default.close, className)
    })
  );
});
ModalBaseCloseButton.displayName = "@raikou/core/ModalBaseCloseButton";

// ../ModalBase/src/ModalBaseContent.tsx
var import_react21 = __toESM(require("react"));

// ../Transition/src/transitions.ts
var import_core6 = require("@raikou/core");
var popIn = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${(0, import_core6.rem)(10)})` },
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
      transform: `translateY(-${(0, import_core6.rem)(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: {
      opacity: 0,
      transform: `translateY(${(0, import_core6.rem)(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${(0, import_core6.rem)(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${(0, import_core6.rem)(20)}) rotate(5deg)` },
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

// ../Transition/src/Transition.tsx
var import_react18 = __toESM(require("react"));

// ../Transition/src/get-transition-styles/get-transition-styles.ts
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

// ../Transition/src/use-transition.ts
var import_react17 = require("react");
var import_hooks4 = require("@raikou/hooks");
var import_core7 = require("@raikou/core");
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
  const theme = (0, import_core7.useRaikouTheme)();
  const shouldReduceMotion = (0, import_hooks4.useReducedMotion)();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionDuration, setTransitionDuration] = (0, import_react17.useState)(
    reduceMotion ? 0 : duration
  );
  const [transitionStatus, setStatus] = (0, import_react17.useState)(
    mounted ? "entered" : "exited"
  );
  const timeoutRef = (0, import_react17.useRef)(-1);
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
  (0, import_hooks4.useDidUpdate)(() => {
    handleStateChange(mounted);
  }, [mounted]);
  (0, import_react17.useEffect)(() => () => window.clearTimeout(timeoutRef.current), []);
  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || "ease"
  };
}

// ../Transition/src/Transition.tsx
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
    return mounted ? /* @__PURE__ */ import_react18.default.createElement(import_react18.default.Fragment, null, children({})) : keepMounted ? children({ display: "none" }) : null;
  }
  return transitionStatus === "exited" ? keepMounted ? children({ display: "none" }) : null : /* @__PURE__ */ import_react18.default.createElement(import_react18.default.Fragment, null, children(
    getTransitionStyles({
      transition,
      duration: transitionDuration,
      state: transitionStatus,
      timingFunction: transitionTimingFunction
    })
  ));
}
Transition.displayName = "@raikou/core/Transition";

// ../FocusTrap/src/FocusTrap.tsx
var import_react19 = require("react");
var import_hooks5 = require("@raikou/hooks");
var import_core8 = require("@raikou/core");
function FocusTrap({
  children,
  active = true,
  refProp = "ref"
}) {
  const focusTrapRef = (0, import_hooks5.useFocusTrap)(active);
  const ref = (0, import_hooks5.useMergedRef)(focusTrapRef, children == null ? void 0 : children.ref);
  if (!(0, import_core8.isElement)(children)) {
    return children;
  }
  return (0, import_react19.cloneElement)(children, { [refProp]: ref });
}
FocusTrap.displayName = "@raikou/core/FocusTrap";

// ../Paper/src/Paper.tsx
var import_react20 = __toESM(require("react"));
var import_core9 = require("@raikou/core");

// css-module:./Paper.module.css#css-module
var Paper_module_default = { "root": "m-1b7284a3" };

// ../Paper/src/Paper.tsx
var defaultProps4 = {};
var varsResolver2 = (0, import_core9.createVarsResolver)(
  (_, { radius, shadow }) => ({
    root: {
      "--paper-radius": radius === void 0 ? void 0 : (0, import_core9.getRadius)(radius),
      "--paper-shadow": (0, import_core9.getShadow)(shadow)
    }
  })
);
var Paper = (0, import_core9.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core9.useProps)("Paper", defaultProps4, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    withBorder,
    vars,
    radius,
    shadow,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "withBorder",
    "vars",
    "radius",
    "shadow",
    "variant"
  ]);
  const getStyles2 = (0, import_core9.useStyles)({
    name: "Paper",
    props,
    classes: Paper_module_default,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver2
  });
  return /* @__PURE__ */ import_react20.default.createElement(
    import_core9.Box,
    __spreadValues(__spreadProps(__spreadValues({
      ref,
      mod: { "data-with-border": withBorder }
    }, getStyles2("root")), {
      variant
    }), others)
  );
});
Paper.displayName = "@raikou/core/Paper";
Paper.classes = Paper_module_default;

// ../ModalBase/src/ModalBaseContent.tsx
var ModalBaseContent = (0, import_react21.forwardRef)(
  (_a, ref) => {
    var _b = _a, { transitionProps, className, innerProps, onKeyDown, style } = _b, others = __objRest(_b, ["transitionProps", "className", "innerProps", "onKeyDown", "style"]);
    const ctx = useModalBaseContext();
    const handleKeyDown = (event) => {
      var _a2;
      const shouldTrigger = ((_a2 = event.target) == null ? void 0 : _a2.getAttribute(
        "data-raikou-stop-propagation"
      )) !== "true";
      shouldTrigger && event.key === "Escape" && ctx.closeOnEscape && ctx.onClose();
      onKeyDown == null ? void 0 : onKeyDown(event);
    };
    return /* @__PURE__ */ import_react21.default.createElement(
      Transition,
      __spreadValues(__spreadValues({
        mounted: ctx.opened,
        transition: "pop"
      }, ctx.transitionProps), transitionProps),
      (transitionStyles) => /* @__PURE__ */ import_react21.default.createElement(
        "div",
        __spreadProps(__spreadValues({}, innerProps), {
          className: clsx_default(ModalBase_module_default.inner, innerProps.className)
        }),
        /* @__PURE__ */ import_react21.default.createElement(FocusTrap, { active: ctx.opened && ctx.trapFocus }, /* @__PURE__ */ import_react21.default.createElement(
          Paper,
          __spreadProps(__spreadValues({}, others), {
            component: "section",
            role: "dialog",
            tabIndex: -1,
            "aria-modal": true,
            "aria-describedby": ctx.bodyMounted ? ctx.getBodyId() : void 0,
            "aria-labelledby": ctx.titleMounted ? ctx.getTitleId() : void 0,
            onKeyDown: handleKeyDown,
            ref,
            style: [style, transitionStyles],
            className: clsx_default(ModalBase_module_default.content, className)
          }),
          others.children
        ))
      )
    );
  }
);
ModalBaseContent.displayName = "@raikou/core/ModalBaseContent";

// ../ModalBase/src/ModalBaseHeader.tsx
var import_react22 = __toESM(require("react"));
var import_core10 = require("@raikou/core");
var ModalBaseHeader = (0, import_react22.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react22.default.createElement(import_core10.Box, __spreadValues({ ref, className: clsx_default(ModalBase_module_default.header, className) }, others));
  }
);
ModalBaseHeader.displayName = "@raikou/core/ModalBaseHeader";

// ../ModalBase/src/ModalBaseOverlay.tsx
var import_react24 = __toESM(require("react"));

// ../Overlay/src/Overlay.tsx
var import_react23 = __toESM(require("react"));
var import_core11 = require("@raikou/core");

// css-module:./Overlay.module.css#css-module
var Overlay_module_default = { "root": "m-9814e45f" };

// ../Overlay/src/Overlay.tsx
var defaultProps5 = {
  zIndex: (0, import_core11.getDefaultZIndex)("modal")
};
var varsResolver3 = (0, import_core11.createVarsResolver)(
  (_, { gradient, color, backgroundOpacity, blur, radius, zIndex }) => ({
    root: {
      "--overlay-bg": gradient || (color !== void 0 || backgroundOpacity !== void 0) && (0, import_core11.rgba)(color || "#000", backgroundOpacity != null ? backgroundOpacity : 0.6) || void 0,
      "--overlay-filter": blur ? `blur(${(0, import_core11.rem)(blur)})` : void 0,
      "--overlay-radius": radius === void 0 ? void 0 : (0, import_core11.getRadius)(radius),
      "--overlay-z-index": zIndex == null ? void 0 : zIndex.toString()
    }
  })
);
var Overlay = (0, import_core11.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core11.useProps)("Overlay", defaultProps5, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    fixed,
    center,
    children,
    radius,
    zIndex,
    gradient,
    blur,
    color,
    backgroundOpacity
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "fixed",
    "center",
    "children",
    "radius",
    "zIndex",
    "gradient",
    "blur",
    "color",
    "backgroundOpacity"
  ]);
  const getStyles2 = (0, import_core11.useStyles)({
    name: "Overlay",
    props,
    classes: Overlay_module_default,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver3
  });
  return /* @__PURE__ */ import_react23.default.createElement(import_core11.Box, __spreadValues(__spreadProps(__spreadValues({ ref }, getStyles2("root")), { mod: { center, fixed } }), others), children);
});
Overlay.displayName = "@raikou/core/Overlay";
Overlay.classes = Overlay_module_default;

// ../ModalBase/src/use-modal-transition.ts
var DEFAULT_TRANSITION = {
  duration: 200,
  timingFunction: "ease",
  transition: "fade"
};
function useModalTransition(transitionOverride) {
  const ctx = useModalBaseContext();
  return __spreadValues(__spreadValues(__spreadValues({}, DEFAULT_TRANSITION), ctx.transitionProps), transitionOverride);
}

// ../ModalBase/src/ModalBaseOverlay.tsx
var ModalBaseOverlay = (0, import_react24.forwardRef)((_a, ref) => {
  var _b = _a, { onClick, transitionProps, style } = _b, others = __objRest(_b, ["onClick", "transitionProps", "style"]);
  const ctx = useModalBaseContext();
  const transition = useModalTransition(transitionProps);
  return /* @__PURE__ */ import_react24.default.createElement(Transition, __spreadProps(__spreadValues({ mounted: ctx.opened }, transition), { transition: "fade" }), (transitionStyles) => /* @__PURE__ */ import_react24.default.createElement(
    Overlay,
    __spreadValues({
      ref,
      fixed: true,
      style: [style, transitionStyles],
      zIndex: ctx.zIndex,
      onClick: (event) => {
        onClick == null ? void 0 : onClick(event);
        ctx.closeOnClickOutside && ctx.onClose();
      }
    }, others)
  ));
});
ModalBaseOverlay.displayName = "@raikou/core/ModalBaseOverlay";

// ../ModalBase/src/ModalBaseTitle.tsx
var import_react26 = __toESM(require("react"));
var import_core12 = require("@raikou/core");

// ../ModalBase/src/use-modal-title-id.ts
var import_react25 = require("react");
function useModalTitle() {
  const ctx = useModalBaseContext();
  (0, import_react25.useEffect)(() => {
    ctx.setTitleMounted(true);
    return () => ctx.setTitleMounted(false);
  }, []);
  return ctx.getTitleId();
}

// ../ModalBase/src/ModalBaseTitle.tsx
var ModalBaseTitle = (0, import_react26.forwardRef)((_a, ref) => {
  var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
  const id = useModalTitle();
  return /* @__PURE__ */ import_react26.default.createElement(
    import_core12.Box,
    __spreadProps(__spreadValues({
      component: "h2",
      ref,
      className: clsx_default(ModalBase_module_default.title, className)
    }, others), {
      id
    })
  );
});
ModalBaseTitle.displayName = "@raikou/core/ModalBaseTitle";

// ../ModalBase/src/NativeScrollArea.tsx
var import_react27 = __toESM(require("react"));
function NativeScrollArea({ children }) {
  return /* @__PURE__ */ import_react27.default.createElement(import_react27.default.Fragment, null, children);
}

// src/Drawer.context.ts
var [DrawerProvider, useDrawerContext] = createSafeContext("Drawer component was not found in tree");

// css-module:./Drawer.module.css#css-module
var Drawer_module_default = { "root": "m-f11b401e", "header": "m-5a7c2c9", "content": "m-b8a05bbd", "inner": "m-31cd769a" };

// src/DrawerRoot.tsx
function getDrawerAlign(position) {
  switch (position) {
    case "top":
      return "flex-start";
    case "bottom":
      return "flex-end";
    default:
      return void 0;
  }
}
function getDrawerFlex(position) {
  if (position === "top" || position === "bottom") {
    return "0 0 calc(100% - var(--drawer-offset, 0rem) * 2)";
  }
  return void 0;
}
var transitions2 = {
  top: "slide-down",
  bottom: "slide-up",
  left: "slide-right",
  right: "slide-left"
};
var rtlTransitions = {
  top: "slide-down",
  bottom: "slide-up",
  right: "slide-right",
  left: "slide-left"
};
var defaultProps6 = {
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: (0, import_core13.getDefaultZIndex)("modal"),
  position: "left"
};
var varsResolver4 = (0, import_core13.createVarsResolver)(
  (_, { position, size, offset }) => ({
    root: {
      "--drawer-size": (0, import_core13.getSize)(size, "drawer-size"),
      "--drawer-flex": getDrawerFlex(position),
      "--drawer-height": position === "left" || position === "right" ? void 0 : "var(--drawer-size)",
      "--drawer-align": getDrawerAlign(position),
      "--drawer-justify": position === "right" ? "flex-end" : void 0,
      "--drawer-offset": (0, import_core13.rem)(offset)
    }
  })
);
var DrawerRoot = (0, import_core13.factory)((_props, ref) => {
  const props = (0, import_core13.useProps)("DrawerRoot", defaultProps6, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    scrollAreaComponent,
    position,
    transitionProps,
    radius
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "scrollAreaComponent",
    "position",
    "transitionProps",
    "radius"
  ]);
  const { dir } = (0, import_core13.useDirection)();
  const getStyles2 = (0, import_core13.useStyles)({
    name: "Drawer",
    classes: Drawer_module_default,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver4
  });
  const drawerTransition = (dir === "rtl" ? rtlTransitions : transitions2)[position];
  return /* @__PURE__ */ import_react28.default.createElement(DrawerProvider, { value: { scrollAreaComponent, getStyles: getStyles2, radius } }, /* @__PURE__ */ import_react28.default.createElement(
    ModalBase,
    __spreadValues(__spreadProps(__spreadValues({
      ref
    }, getStyles2("root")), {
      transitionProps: __spreadValues({ transition: drawerTransition }, transitionProps)
    }), others)
  ));
});
DrawerRoot.displayName = "@raikou/core/DrawerRoot";
DrawerRoot.classes = Drawer_module_default;

// src/DrawerBody.tsx
var import_react29 = __toESM(require("react"));
var import_core14 = require("@raikou/core");
var defaultProps7 = {};
var DrawerBody = (0, import_core14.factory)((_props, ref) => {
  const props = (0, import_core14.useProps)("DrawerBody", defaultProps7, _props);
  const _a = props, { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useDrawerContext();
  return /* @__PURE__ */ import_react29.default.createElement(
    ModalBaseBody,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("body", { classNames, style, styles, className })), others)
  );
});
DrawerBody.classes = Drawer_module_default;
DrawerBody.displayName = "@raikou/core/DrawerBody";

// src/DrawerCloseButton.tsx
var import_react30 = __toESM(require("react"));
var import_core15 = require("@raikou/core");
var defaultProps8 = {};
var DrawerCloseButton = (0, import_core15.factory)(
  (_props, ref) => {
    const props = (0, import_core15.useProps)("DrawerCloseButton", defaultProps8, _props);
    const _a = props, { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
    const ctx = useDrawerContext();
    return /* @__PURE__ */ import_react30.default.createElement(
      ModalBaseCloseButton,
      __spreadValues(__spreadValues({
        ref
      }, ctx.getStyles("close", { classNames, style, styles, className })), others)
    );
  }
);
DrawerCloseButton.classes = Drawer_module_default;
DrawerCloseButton.displayName = "@raikou/core/DrawerCloseButton";

// src/DrawerOverlay.tsx
var import_react31 = __toESM(require("react"));
var import_core16 = require("@raikou/core");
var defaultProps9 = {};
var DrawerOverlay = (0, import_core16.factory)((_props, ref) => {
  const props = (0, import_core16.useProps)("DrawerOverlay", defaultProps9, _props);
  const _a = props, { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useDrawerContext();
  return /* @__PURE__ */ import_react31.default.createElement(
    ModalBaseOverlay,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("overlay", { classNames, style, styles, className })), others)
  );
});
DrawerOverlay.classes = Drawer_module_default;
DrawerOverlay.displayName = "@raikou/core/DrawerOverlay";

// src/DrawerContent.tsx
var import_react32 = __toESM(require("react"));
var import_core17 = require("@raikou/core");
var defaultProps10 = {};
var DrawerContent = (0, import_core17.factory)((_props, ref) => {
  const props = (0, import_core17.useProps)("DrawerContent", defaultProps10, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    vars,
    children,
    radius
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "vars",
    "children",
    "radius"
  ]);
  const ctx = useDrawerContext();
  const Scroll = ctx.scrollAreaComponent || NativeScrollArea;
  return /* @__PURE__ */ import_react32.default.createElement(
    ModalBaseContent,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("content", { className, style, styles, classNames })), {
      innerProps: ctx.getStyles("inner", {
        className,
        style,
        styles,
        classNames
      }),
      ref
    }), others), {
      radius: radius || ctx.radius || 0
    }),
    /* @__PURE__ */ import_react32.default.createElement(Scroll, { style: { height: "100vh" } }, children)
  );
});
DrawerContent.classes = Drawer_module_default;
DrawerContent.displayName = "@raikou/core/DrawerContent";

// src/DrawerTitle.tsx
var import_react33 = __toESM(require("react"));
var import_core18 = require("@raikou/core");
var defaultProps11 = {};
var DrawerTitle = (0, import_core18.factory)((_props, ref) => {
  const props = (0, import_core18.useProps)("DrawerTitle", defaultProps11, _props);
  const _a = props, { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useDrawerContext();
  return /* @__PURE__ */ import_react33.default.createElement(
    ModalBaseTitle,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("title", { classNames, style, styles, className })), others)
  );
});
DrawerTitle.displayName = "@raikou/core/DrawerTitle";

// src/DrawerHeader.tsx
var import_react34 = __toESM(require("react"));
var import_core19 = require("@raikou/core");
var defaultProps12 = {};
var DrawerHeader = (0, import_core19.factory)((_props, ref) => {
  const props = (0, import_core19.useProps)("DrawerHeader", defaultProps12, _props);
  const _a = props, { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useDrawerContext();
  return /* @__PURE__ */ import_react34.default.createElement(
    ModalBaseHeader,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("header", { classNames, style, styles, className })), others)
  );
});
DrawerHeader.classes = Drawer_module_default;
DrawerHeader.displayName = "@raikou/core/DrawerHeader";

// src/Drawer.tsx
var defaultProps13 = {
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: (0, import_core20.getDefaultZIndex)("modal"),
  withOverlay: true,
  withCloseButton: true
};
var Drawer = (0, import_core20.factory)((_props, ref) => {
  const _a = (0, import_core20.useProps)("Drawer", defaultProps13, _props), {
    title,
    withOverlay,
    overlayProps,
    withCloseButton,
    closeButtonProps,
    children
  } = _a, others = __objRest(_a, [
    "title",
    "withOverlay",
    "overlayProps",
    "withCloseButton",
    "closeButtonProps",
    "children"
  ]);
  const hasHeader = !!title || withCloseButton;
  return /* @__PURE__ */ import_react35.default.createElement(DrawerRoot, __spreadValues({ ref }, others), withOverlay && /* @__PURE__ */ import_react35.default.createElement(DrawerOverlay, __spreadValues({}, overlayProps)), /* @__PURE__ */ import_react35.default.createElement(DrawerContent, null, hasHeader && /* @__PURE__ */ import_react35.default.createElement(DrawerHeader, null, title && /* @__PURE__ */ import_react35.default.createElement(DrawerTitle, null, title), withCloseButton && /* @__PURE__ */ import_react35.default.createElement(DrawerCloseButton, __spreadValues({}, closeButtonProps))), /* @__PURE__ */ import_react35.default.createElement(DrawerBody, null, children)));
});
Drawer.classes = Drawer_module_default;
Drawer.displayName = "@raikou/core/Drawer";
Drawer.Root = DrawerRoot;
Drawer.Overlay = DrawerOverlay;
Drawer.Content = DrawerContent;
Drawer.Body = DrawerBody;
Drawer.Header = DrawerHeader;
Drawer.Title = DrawerTitle;
Drawer.CloseButton = DrawerCloseButton;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerRoot,
  DrawerTitle
});
//# sourceMappingURL=index.js.map