var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// src/ModalsProvider.tsx
import React45, { useCallback as useCallback2, useReducer, useRef as useRef6 } from "react";
import { getDefaultZIndex as getDefaultZIndex5 } from "@raikou/core";

// ../components/Modal/src/Modal.tsx
import React40 from "react";
import { factory as factory10, useProps as useProps16, getDefaultZIndex as getDefaultZIndex4 } from "@raikou/core";

// ../components/Modal/src/ModalRoot.tsx
import React33 from "react";
import {
  factory as factory3,
  useProps as useProps9,
  useStyles as useStyles7,
  createVarsResolver as createVarsResolver6,
  getRadius as getRadius4,
  getDefaultZIndex as getDefaultZIndex3,
  getSize as getSize3,
  rem as rem5
} from "@raikou/core";

// ../components/ModalBase/src/ModalBase.tsx
import React11, { forwardRef as forwardRef4 } from "react";

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js
import { __assign as __assign4 } from "tslib";
import * as React6 from "react";

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/UI.js
import { __assign as __assign3, __rest as __rest2 } from "tslib";
import * as React2 from "react";

// ../../../node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// ../../../node_modules/.pnpm/use-callback-ref@1.3.0_@types+react@18.2.5_react@18.2.0/node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// ../../../node_modules/.pnpm/use-callback-ref@1.3.0_@types+react@18.2.5_react@18.2.0/node_modules/use-callback-ref/dist/es2015/useRef.js
import { useState } from "react";
function useCallbackRef(initialValue, callback) {
  var ref = useState(function() {
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

// ../../../node_modules/.pnpm/use-callback-ref@1.3.0_@types+react@18.2.5_react@18.2.0/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
function useMergeRefs(refs, defaultValue) {
  return useCallbackRef(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
}

// ../../../node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.2.5_react@18.2.0/node_modules/use-sidecar/dist/es2015/medium.js
import { __assign } from "tslib";
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
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}

// ../../../node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.2.5_react@18.2.0/node_modules/use-sidecar/dist/es2015/exports.js
import { __assign as __assign2, __rest } from "tslib";
import * as React from "react";
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React.createElement(Target, __assign2({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/UI.js
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
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest2(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign3(__assign3({}, rest), callbacks);
  return React2.createElement(
    React2.Fragment,
    null,
    enabled && React2.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? React2.cloneElement(React2.Children.only(children), __assign3(__assign3({}, containerProps), { ref: containerRef })) : React2.createElement(Container, __assign3({}, containerProps, { className, ref: containerRef }), children)
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

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
import { __spreadArray } from "tslib";
import * as React5 from "react";

// ../../../node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js
import * as React4 from "react";

// ../../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.5_react@18.2.0/node_modules/react-style-singleton/dist/es2015/hook.js
import * as React3 from "react";

// ../../../node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
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

// ../../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.5_react@18.2.0/node_modules/react-style-singleton/dist/es2015/singleton.js
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

// ../../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.5_react@18.2.0/node_modules/react-style-singleton/dist/es2015/hook.js
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

// ../../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.5_react@18.2.0/node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// ../../../node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/utils.js
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

// ../../../node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js
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

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
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

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/handleScroll.js
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

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
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
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
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

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React6.forwardRef(function(props, ref) {
  return React6.createElement(RemoveScroll, __assign4({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// ../components/ModalBase/src/ModalBase.tsx
import {
  Box,
  getDefaultZIndex,
  getShadow,
  getSpacing
} from "@raikou/core";

// ../components/Portal/src/Portal.tsx
import React7, { useRef as useRef3, useState as useState4, forwardRef as forwardRef3 } from "react";
import { createPortal } from "react-dom";
import { useIsomorphicEffect } from "@raikou/hooks";
import { useProps } from "@raikou/core";
var defaultProps = {};
var Portal = forwardRef3((props, ref) => {
  const _a = useProps(
    "Portal",
    defaultProps,
    props
  ), { children, target, className } = _a, others = __objRest(_a, ["children", "target", "className"]);
  const [mounted, setMounted] = useState4(false);
  const nodeRef = useRef3(null);
  useIsomorphicEffect(() => {
    setMounted(true);
    nodeRef.current = !target ? document.createElement("div") : typeof target === "string" ? document.querySelector(target) : target;
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
  return createPortal(
    /* @__PURE__ */ React7.createElement("div", __spreadValues({ className, ref }, others), children),
    nodeRef.current
  );
});
Portal.displayName = "@raikou/core/Portal";

// ../components/Portal/src/OptionalPortal.tsx
import React8 from "react";
function OptionalPortal(_a) {
  var _b = _a, {
    withinPortal = true,
    children
  } = _b, others = __objRest(_b, [
    "withinPortal",
    "children"
  ]);
  if (withinPortal) {
    return /* @__PURE__ */ React8.createElement(Portal, __spreadValues({}, others), children);
  }
  return /* @__PURE__ */ React8.createElement(React8.Fragment, null, children);
}
OptionalPortal.displayName = "@raikou/core/OptionalPortal";

// ../components/_utils/create-safe-context/create-safe-context.tsx
import React9, { createContext, useContext } from "react";
function createSafeContext(errorMessage) {
  const Context = createContext(null);
  const useSafeContext = () => {
    const ctx = useContext(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ React9.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../components/_utils/create-optional-context/create-optional-context.tsx
import React10, { createContext as createContext2, useContext as useContext2 } from "react";

// ../components/_utils/use-hovered/use-hovered.ts
import { useState as useState5 } from "react";

// ../components/_utils/create-use-external-events/create-use-external-events.ts
import { useEffect as useEffect3, useLayoutEffect } from "react";
function dispatchEvent(type, detail) {
  window.dispatchEvent(new CustomEvent(type, { detail }));
}
var useIsomorphicEffect2 = typeof window !== "undefined" ? useLayoutEffect : useEffect3;
function createUseExternalEvents(prefix) {
  function _useExternalEvents(events) {
    const handlers = Object.keys(events).reduce((acc, eventKey) => {
      acc[`${prefix}:${eventKey}`] = (event) => events[eventKey](event.detail);
      return acc;
    }, {});
    useIsomorphicEffect2(() => {
      Object.keys(handlers).forEach((eventKey) => {
        window.removeEventListener(eventKey, handlers[eventKey]);
        window.addEventListener(eventKey, handlers[eventKey]);
      });
      return () => Object.keys(handlers).forEach((eventKey) => {
        window.removeEventListener(eventKey, handlers[eventKey]);
      });
    }, [handlers]);
  }
  function createEvent2(event) {
    return (...payload) => dispatchEvent(`${prefix}:${String(event)}`, payload[0]);
  }
  return [_useExternalEvents, createEvent2];
}

// ../components/ModalBase/src/ModalBase.context.ts
var [ModalBaseProvider, useModalBaseContext] = createSafeContext(
  "ModalBase component was not found in tree"
);

// ../components/ModalBase/src/use-modal.ts
import { useState as useState7 } from "react";
import { useId, useWindowEvent, useFocusReturn } from "@raikou/hooks";

// ../components/ModalBase/src/use-lock-scroll.ts
import { useState as useState6, useEffect as useEffect4, useRef as useRef4 } from "react";
import { useReducedMotion } from "@raikou/hooks";
function useLockScroll({ opened, transitionDuration }) {
  const [shouldLockScroll, setShouldLockScroll] = useState6(opened);
  const timeout = useRef4();
  const reduceMotion = useReducedMotion();
  const _transitionDuration = reduceMotion ? 0 : transitionDuration;
  useEffect4(() => {
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

// ../components/ModalBase/src/use-modal.ts
function useModal({
  id,
  transitionProps,
  opened,
  trapFocus,
  closeOnEscape,
  onClose,
  returnFocus
}) {
  const _id = useId(id);
  const [titleMounted, setTitleMounted] = useState7(false);
  const [bodyMounted, setBodyMounted] = useState7(false);
  const transitionDuration = typeof (transitionProps == null ? void 0 : transitionProps.duration) === "number" ? transitionProps == null ? void 0 : transitionProps.duration : 200;
  const shouldLockScroll = useLockScroll({ opened, transitionDuration });
  useWindowEvent("keydown", (event) => {
    if (!trapFocus && event.key === "Escape" && closeOnEscape) {
      onClose();
    }
  });
  useFocusReturn({ opened, shouldReturnFocus: trapFocus && returnFocus });
  return {
    _id,
    titleMounted,
    bodyMounted,
    shouldLockScroll,
    setTitleMounted,
    setBodyMounted
  };
}

// ../components/ModalBase/src/ModalBase.tsx
var ModalBase = forwardRef4(
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
      __vars
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
      "__vars"
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
    return /* @__PURE__ */ React11.createElement(OptionalPortal, __spreadProps(__spreadValues({}, portalProps), { withinPortal }), /* @__PURE__ */ React11.createElement(
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
      /* @__PURE__ */ React11.createElement(Combination_default, { enabled: shouldLockScroll && lockScroll }, /* @__PURE__ */ React11.createElement(
        Box,
        __spreadProps(__spreadValues({
          ref
        }, others), {
          __vars: __spreadProps(__spreadValues({}, __vars), {
            "--mb-z-index": (zIndex || getDefaultZIndex("modal")).toString(),
            "--mb-shadow": getShadow(shadow),
            "--mb-padding": getSpacing(padding)
          })
        }),
        children
      ))
    ));
  }
);
ModalBase.displayName = "@raikou/core/ModalBase";

// ../components/ModalBase/src/ModalBaseBody.tsx
import React12, { forwardRef as forwardRef5 } from "react";

// ../../../node_modules/.pnpm/clsx@2.0.0/node_modules/clsx/dist/clsx.mjs
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

// ../components/ModalBase/src/ModalBaseBody.tsx
import { Box as Box2 } from "@raikou/core";

// ../components/ModalBase/src/use-modal-body-id.ts
import { useEffect as useEffect5 } from "react";
function useModalBodyId() {
  const ctx = useModalBaseContext();
  useEffect5(() => {
    ctx.setBodyMounted(true);
    return () => ctx.setBodyMounted(false);
  }, []);
  return ctx.getBodyId();
}

// ../components/ModalBase/src/ModalBaseBody.tsx
var ModalBaseBody = forwardRef5(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    const bodyId = useModalBodyId();
    return /* @__PURE__ */ React12.createElement(
      Box2,
      __spreadProps(__spreadValues({
        ref
      }, others), {
        id: bodyId,
        className: clsx_default("modalBase-body", className)
      })
    );
  }
);
ModalBaseBody.displayName = "@raikou/core/ModalBaseBody";

// ../components/ModalBase/src/ModalBaseCloseButton.tsx
import React23, { forwardRef as forwardRef11 } from "react";

// ../components/CloseButton/src/CloseIcon.tsx
import React13, { forwardRef as forwardRef6 } from "react";
var CloseIcon = forwardRef6(
  (_a, ref) => {
    var _b = _a, { size = "var(--cb-icon-size)", style } = _b, others = __objRest(_b, ["size", "style"]);
    return /* @__PURE__ */ React13.createElement(
      "svg",
      __spreadValues({
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: __spreadProps(__spreadValues({}, style), { width: size, height: size }),
        ref
      }, others),
      /* @__PURE__ */ React13.createElement(
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

// ../components/CloseButton/src/CloseButton.tsx
import React22 from "react";
import {
  polymorphicFactory as polymorphicFactory3,
  useProps as useProps6,
  rem as rem2
} from "@raikou/core";

// ../components/ActionIcon/src/ActionIcon.tsx
import React21 from "react";
import {
  useProps as useProps5,
  useStyles as useStyles4,
  getRadius,
  polymorphicFactory as polymorphicFactory2,
  getSize as getSize2,
  createVarsResolver as createVarsResolver3
} from "@raikou/core";

// ../components/UnstyledButton/src/UnstyledButton.tsx
import React14 from "react";
import {
  Box as Box3,
  useProps as useProps2,
  useStyles,
  polymorphicFactory
} from "@raikou/core";
var defaultProps2 = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = polymorphicFactory(
  (_props, ref) => {
    const props = useProps2("UnstyledButton", defaultProps2, _props);
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
    const getStyles2 = useStyles({
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
    return /* @__PURE__ */ React14.createElement(
      Box3,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles2("root", { focusable: true })), {
        component,
        ref,
        type: component === "button" ? "button" : void 0
      }), others)
    );
  }
);
UnstyledButton.displayName = "@raikou/core/UnstyledButton";

// ../components/Loader/src/Loader.tsx
import React19 from "react";
import {
  Box as Box8,
  useProps as useProps3,
  getThemeColor,
  useStyles as useStyles2,
  factory,
  getSize,
  createVarsResolver
} from "@raikou/core";

// ../components/Loader/src/loaders/Bars.tsx
import React15, { forwardRef as forwardRef7 } from "react";
import { Box as Box4 } from "@raikou/core";
var Bars = forwardRef7(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React15.createElement(
      Box4,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("bars-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React15.createElement("span", { className: "bar" }),
      /* @__PURE__ */ React15.createElement("span", { className: "bar" }),
      /* @__PURE__ */ React15.createElement("span", { className: "bar" })
    );
  }
);

// ../components/Loader/src/loaders/Oval.tsx
import React16, { forwardRef as forwardRef8 } from "react";
import { Box as Box5 } from "@raikou/core";
var Oval = forwardRef8(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React16.createElement(
      Box5,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("oval-loader", className)
      }, others), {
        ref
      })
    );
  }
);

// ../components/Loader/src/loaders/Progress.tsx
import React17, { forwardRef as forwardRef9 } from "react";
import { Box as Box6 } from "@raikou/core";
var Progress = forwardRef9(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React17.createElement(
      Box6,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("progress-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React17.createElement("svg", { viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ React17.createElement("g", { fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ React17.createElement("g", { transform: "translate(2.5 2.5)", strokeWidth: "5" }, /* @__PURE__ */ React17.createElement("circle", { strokeOpacity: ".5", cx: "16", cy: "16", r: "16" }), /* @__PURE__ */ React17.createElement("path", { d: "M32 16c0-9.94-8.06-16-16-16" }, /* @__PURE__ */ React17.createElement(
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
import React18, { forwardRef as forwardRef10 } from "react";
import { Box as Box7 } from "@raikou/core";
var Dots = forwardRef10(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React18.createElement(
      Box7,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("dots-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React18.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React18.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React18.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React18.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React18.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React18.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React18.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React18.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React18.createElement("span", { className: "dot" })
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
var defaultProps3 = {
  size: "md",
  loaders: defaultLoaders,
  type: "oval"
};
var varsResolver = createVarsResolver(
  (theme, { size, color }) => ({
    root: {
      "--loader-size": getSize(size, "loader-size"),
      "--loader-color": getThemeColor(color, theme)
    }
  })
);
var Loader = factory((_props, ref) => {
  const props = useProps3("Loader", defaultProps3, _props);
  const _a = props, {
    size,
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
  const getStyles2 = useStyles2({
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
    varsResolver
  });
  return /* @__PURE__ */ React19.createElement(
    Box8,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles2("root")), {
      ref,
      component: loaders[type],
      variant,
      size
    }), others)
  );
});
Loader.displayName = "@raikou/core/Loader";

// ../components/ActionIcon/src/ActionIconGroup/ActionIconGroup.tsx
import React20 from "react";
import {
  factory as factory2,
  Box as Box9,
  useProps as useProps4,
  useStyles as useStyles3,
  rem,
  createVarsResolver as createVarsResolver2
} from "@raikou/core";
var defaultProps4 = {
  orientation: "horizontal",
  borderWidth: 1
};
var varsResolver2 = createVarsResolver2(
  (_, { borderWidth }) => ({
    group: { "--ai-border-width": rem(borderWidth) }
  })
);
var ActionIconGroup = factory2(
  (_props, ref) => {
    const props = useProps4("ActionIconGroup", defaultProps4, _props);
    const _a = useProps4("ActionIconGroup", defaultProps4, _props), {
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
    const getStyles2 = useStyles3({
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
      varsResolver: varsResolver2,
      rootSelector: "group"
    });
    return /* @__PURE__ */ React20.createElement(
      Box9,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles2("group")), {
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
var defaultProps5 = {
  variant: "filled",
  size: "md"
};
var varsResolver3 = createVarsResolver3(
  (theme, { size, radius, variant, gradient, color }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant
    });
    return {
      root: {
        "--ai-size": getSize2(size, "ai-size"),
        "--ai-radius": getRadius(radius),
        "--ai-bg": colors.background,
        "--ai-hover": colors.hover,
        "--ai-color": colors.color,
        "--ai-bd": colors.border
      }
    };
  }
);
var ActionIcon = polymorphicFactory2(
  (_props, ref) => {
    const props = useProps5("ActionIcon", defaultProps5, _props);
    const _a = props, {
      className,
      unstyled,
      variant,
      classNames,
      styles,
      style,
      loading,
      loaderProps,
      size,
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
    const getStyles2 = useStyles4({
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
      varsResolver: varsResolver3
    });
    return /* @__PURE__ */ React21.createElement(
      UnstyledButton,
      __spreadProps(__spreadValues(__spreadValues({}, getStyles2("root", {
        active: !disabled && !loading && !dataDisabled
      })), others), {
        unstyled,
        variant,
        size,
        disabled: disabled || loading,
        ref,
        mod: { loading, disabled: disabled || dataDisabled }
      }),
      loading ? /* @__PURE__ */ React21.createElement(
        Loader,
        __spreadValues(__spreadProps(__spreadValues({}, getStyles2("loader")), {
          color: "var(--ai-color)",
          size: "calc(var(--ai-size) * 0.55)"
        }), loaderProps)
      ) : children
    );
  }
);
ActionIcon.displayName = "@raikou/core/ActionIcon";
ActionIcon.Group = ActionIconGroup;

// ../components/CloseButton/src/CloseButton.tsx
var defaultProps6 = {
  iconSize: "70%",
  variant: "subtle",
  color: "gray"
};
var CloseButton = polymorphicFactory3(
  (_props, ref) => {
    const props = useProps6("CloseButton", defaultProps6, _props);
    const _a = props, { iconSize, children, vars } = _a, others = __objRest(_a, ["iconSize", "children", "vars"]);
    return /* @__PURE__ */ React22.createElement(
      ActionIcon,
      __spreadProps(__spreadValues({
        ref
      }, others), {
        __vars: { "--cb-icon-size": rem2(iconSize) },
        __staticSelector: "CloseButton"
      }),
      /* @__PURE__ */ React22.createElement(CloseIcon, null),
      children
    );
  }
);
CloseButton.displayName = "@raikou/core/CloseButton";

// ../components/ModalBase/src/ModalBaseCloseButton.tsx
var ModalBaseCloseButton = forwardRef11((_a, ref) => {
  var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
  const ctx = useModalBaseContext();
  return (
    // @ts-ignore
    /* @__PURE__ */ React23.createElement(
      CloseButton,
      __spreadProps(__spreadValues({
        ref
      }, others), {
        onClick: ctx.onClose,
        className: clsx_default("modalBase-close", className)
      })
    )
  );
});
ModalBaseCloseButton.displayName = "@raikou/core/ModalBaseCloseButton";

// ../components/ModalBase/src/ModalBaseContent.tsx
import React27, { forwardRef as forwardRef12 } from "react";

// ../components/Transition/src/transitions.ts
import { rem as rem3 } from "@raikou/core";
var popIn = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${rem3(10)})` },
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
      transform: `translateY(-${rem3(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: {
      opacity: 0,
      transform: `translateY(${rem3(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${rem3(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${rem3(20)}) rotate(5deg)` },
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
import React24 from "react";

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
import { useState as useState8, useEffect as useEffect6, useRef as useRef5 } from "react";
import { useReducedMotion as useReducedMotion2, useDidUpdate } from "@raikou/hooks";
import { useRaikouTheme } from "@raikou/core";
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
  const theme = useRaikouTheme();
  const shouldReduceMotion = useReducedMotion2();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionDuration, setTransitionDuration] = useState8(
    reduceMotion ? 0 : duration
  );
  const [transitionStatus, setStatus] = useState8(
    mounted ? "entered" : "exited"
  );
  const timeoutRef = useRef5(-1);
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
  useDidUpdate(() => {
    handleStateChange(mounted);
  }, [mounted]);
  useEffect6(() => () => window.clearTimeout(timeoutRef.current), []);
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
    return mounted ? /* @__PURE__ */ React24.createElement(React24.Fragment, null, children({})) : keepMounted ? children({ display: "none" }) : null;
  }
  return transitionStatus === "exited" ? keepMounted ? children({ display: "none" }) : null : /* @__PURE__ */ React24.createElement(React24.Fragment, null, children(
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
import { cloneElement as cloneElement2 } from "react";
import { useFocusTrap, useMergedRef } from "@raikou/hooks";
import { isElement } from "@raikou/core";
function FocusTrap({
  children,
  active = true,
  refProp = "ref"
}) {
  const focusTrapRef = useFocusTrap(active);
  const ref = useMergedRef(focusTrapRef, children == null ? void 0 : children.ref);
  if (!isElement(children)) {
    return children;
  }
  return cloneElement2(children, { [refProp]: ref });
}
FocusTrap.displayName = "@raikou/core/FocusTrap";

// ../components/Paper/src/Paper.tsx
import React26 from "react";
import {
  Box as Box10,
  polymorphicFactory as polymorphicFactory4,
  useProps as useProps7,
  useStyles as useStyles5,
  getRadius as getRadius2,
  getShadow as getShadow2,
  createVarsResolver as createVarsResolver4
} from "@raikou/core";
var defaultProps7 = {};
var varsResolver4 = createVarsResolver4(
  (_, { radius, shadow }) => ({
    root: {
      "--paper-radius": getRadius2(radius),
      "--paper-shadow": getShadow2(shadow)
    }
  })
);
var Paper = polymorphicFactory4((_props, ref) => {
  const props = useProps7("Paper", defaultProps7, _props);
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
  const getStyles2 = useStyles5({
    name: "Paper",
    props,
    classes: {
      root: "paper-root"
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
    Box10,
    __spreadValues(__spreadProps(__spreadValues({
      ref,
      mod: { "data-with-border": withBorder }
    }, getStyles2("root")), {
      variant
    }), others)
  );
});
Paper.displayName = "@raikou/core/Paper";

// ../components/ModalBase/src/ModalBaseContent.tsx
var ModalBaseContent = forwardRef12(
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
    return /* @__PURE__ */ React27.createElement(
      Transition,
      __spreadValues(__spreadValues({
        mounted: ctx.opened,
        transition: "pop"
      }, ctx.transitionProps), transitionProps),
      (transitionStyles) => /* @__PURE__ */ React27.createElement(
        "div",
        __spreadProps(__spreadValues({}, innerProps), {
          className: clsx_default("modalBase-inner", innerProps.className)
        }),
        /* @__PURE__ */ React27.createElement(FocusTrap, { active: ctx.opened && ctx.trapFocus }, /* @__PURE__ */ React27.createElement(
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
            className: clsx_default("modalBase-content", className)
          }),
          others.children
        ))
      )
    );
  }
);
ModalBaseContent.displayName = "@raikou/core/ModalBaseContent";

// ../components/ModalBase/src/ModalBaseHeader.tsx
import React28, { forwardRef as forwardRef13 } from "react";
import { Box as Box11 } from "@raikou/core";
var ModalBaseHeader = forwardRef13(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React28.createElement(Box11, __spreadValues({ ref, className: clsx_default("modalBase-header", className) }, others));
  }
);
ModalBaseHeader.displayName = "@raikou/core/ModalBaseHeader";

// ../components/ModalBase/src/ModalBaseOverlay.tsx
import React30, { forwardRef as forwardRef14 } from "react";

// ../components/Overlay/src/Overlay.tsx
import React29 from "react";
import {
  Box as Box12,
  polymorphicFactory as polymorphicFactory5,
  useProps as useProps8,
  useStyles as useStyles6,
  createVarsResolver as createVarsResolver5,
  rgba,
  getDefaultZIndex as getDefaultZIndex2,
  getRadius as getRadius3,
  rem as rem4
} from "@raikou/core";
var defaultProps8 = {
  color: "#000",
  backgroundOpacity: 0.6,
  zIndex: getDefaultZIndex2("modal"),
  radius: 0
};
var varsResolver5 = createVarsResolver5(
  (_, { gradient, color, backgroundOpacity, blur, radius, zIndex }) => ({
    root: {
      "--overlay-bg": gradient || rgba(color || "#000", backgroundOpacity != null ? backgroundOpacity : 0.6),
      "--overlay-filter": blur ? `blur(${rem4(blur)})` : void 0,
      "--overlay-radius": getRadius3(radius),
      "--overlay-z-index": zIndex == null ? void 0 : zIndex.toString()
    }
  })
);
var Overlay = polymorphicFactory5((_props, ref) => {
  const props = useProps8("Overlay", defaultProps8, _props);
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
  const getStyles2 = useStyles6({
    name: "Overlay",
    props,
    classes: {
      root: "overlay-root"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver5
  });
  return /* @__PURE__ */ React29.createElement(Box12, __spreadValues(__spreadProps(__spreadValues({ ref }, getStyles2("root")), { mod: { center, fixed } }), others), children);
});
Overlay.displayName = "@raikou/core/Overlay";

// ../components/ModalBase/src/use-modal-transition.ts
var DEFAULT_TRANSITION = {
  duration: 200,
  timingFunction: "ease",
  transition: "fade"
};
function useModalTransition(transitionOverride) {
  const ctx = useModalBaseContext();
  return __spreadValues(__spreadValues(__spreadValues({}, DEFAULT_TRANSITION), ctx.transitionProps), transitionOverride);
}

// ../components/ModalBase/src/ModalBaseOverlay.tsx
var ModalBaseOverlay = forwardRef14((_a, ref) => {
  var _b = _a, { onClick, transitionProps, style } = _b, others = __objRest(_b, ["onClick", "transitionProps", "style"]);
  const ctx = useModalBaseContext();
  const transition = useModalTransition(transitionProps);
  return /* @__PURE__ */ React30.createElement(Transition, __spreadProps(__spreadValues({ mounted: ctx.opened }, transition), { transition: "fade" }), (transitionStyles) => /* @__PURE__ */ React30.createElement(
    Overlay,
    __spreadValues({
      ref,
      fixed: true,
      style: [style, transitionStyles],
      zIndex: ctx.zIndex,
      radius: 0,
      onClick: (event) => {
        onClick == null ? void 0 : onClick(event);
        ctx.closeOnClickOutside && ctx.onClose();
      }
    }, others)
  ));
});
ModalBaseOverlay.displayName = "@raikou/core/ModalBaseOverlay";

// ../components/ModalBase/src/ModalBaseTitle.tsx
import React31, { forwardRef as forwardRef15 } from "react";
import { Box as Box13 } from "@raikou/core";

// ../components/ModalBase/src/use-modal-title-id.ts
import { useEffect as useEffect7 } from "react";
function useModalTitle() {
  const ctx = useModalBaseContext();
  useEffect7(() => {
    ctx.setTitleMounted(true);
    return () => ctx.setTitleMounted(false);
  }, []);
  return ctx.getTitleId();
}

// ../components/ModalBase/src/ModalBaseTitle.tsx
var ModalBaseTitle = forwardRef15((_a, ref) => {
  var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
  const id = useModalTitle();
  return /* @__PURE__ */ React31.createElement(
    Box13,
    __spreadProps(__spreadValues({
      component: "h2",
      ref,
      className: clsx_default("modalBase-title", className)
    }, others), {
      id
    })
  );
});
ModalBaseTitle.displayName = "@raikou/core/ModalBaseTitle";

// ../components/ModalBase/src/NativeScrollArea.tsx
import React32 from "react";
function NativeScrollArea({ children }) {
  return /* @__PURE__ */ React32.createElement(React32.Fragment, null, children);
}

// ../components/Modal/src/Modal.context.ts
var [ModalProvider, useModalContext] = createSafeContext(
  "Modal component was not found in tree"
);

// ../components/Modal/src/ModalRoot.tsx
var defaultProps9 = {
  __staticSelector: "Modal",
  yOffset: "5dvh",
  xOffset: "5vw",
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: getDefaultZIndex3("modal"),
  padding: "md",
  size: "md",
  shadow: "xl",
  transitionProps: { duration: 200, transition: "pop" }
};
var varsResolver6 = createVarsResolver6(
  (_, { radius, size, yOffset, xOffset }) => ({
    root: {
      "--modal-radius": getRadius4(radius),
      "--modal-size": getSize3(size, "modal-size"),
      "--modal-y-offset": rem5(yOffset),
      "--modal-x-offset": rem5(xOffset)
    }
  })
);
var ModalRoot = factory3((_props, ref) => {
  const props = useProps9("ModalRoot", defaultProps9, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    yOffset,
    scrollAreaComponent,
    radius,
    fullScreen,
    centered,
    xOffset,
    __staticSelector
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "yOffset",
    "scrollAreaComponent",
    "radius",
    "fullScreen",
    "centered",
    "xOffset",
    "__staticSelector"
  ]);
  const getStyles2 = useStyles7({
    name: __staticSelector,
    classes: {
      root: "modal-root",
      header: "modal-header",
      content: "modal-content",
      inner: "modal-inner",
      title: "modal-title",
      body: "modal-body",
      overlay: "modal-overlay",
      close: "modal-close"
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
  return /* @__PURE__ */ React33.createElement(ModalProvider, { value: { yOffset, scrollAreaComponent, getStyles: getStyles2 } }, /* @__PURE__ */ React33.createElement(
    ModalBase,
    __spreadValues(__spreadProps(__spreadValues({
      ref
    }, getStyles2("root")), {
      "data-full-screen": fullScreen || void 0,
      "data-centered": centered || void 0
    }), others)
  ));
});
ModalRoot.displayName = "@raikou/core/ModalRoot";

// ../components/Modal/src/ModalBody.tsx
import React34 from "react";
import {
  factory as factory4,
  useProps as useProps10
} from "@raikou/core";
var defaultProps10 = {};
var ModalBody = factory4((_props, ref) => {
  const props = useProps10("ModalBody", defaultProps10, _props);
  const _a = props, { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useModalContext();
  return /* @__PURE__ */ React34.createElement(
    ModalBaseBody,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("body", { classNames, style, styles, className })), others)
  );
});
ModalBody.displayName = "@raikou/core/ModalBody";

// ../components/Modal/src/ModalCloseButton.tsx
import React35 from "react";
import {
  factory as factory5,
  useProps as useProps11
} from "@raikou/core";
var defaultProps11 = {};
var ModalCloseButton = factory5(
  (_props, ref) => {
    const props = useProps11("ModalCloseButton", defaultProps11, _props);
    const _a = props, { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
    const ctx = useModalContext();
    return /* @__PURE__ */ React35.createElement(
      ModalBaseCloseButton,
      __spreadValues(__spreadValues({
        ref
      }, ctx.getStyles("close", { classNames, style, styles, className })), others)
    );
  }
);
ModalCloseButton.displayName = "@raikou/core/ModalCloseButton";

// ../components/Modal/src/ModalOverlay.tsx
import React36 from "react";
import {
  factory as factory6,
  useProps as useProps12
} from "@raikou/core";
var defaultProps12 = {};
var ModalOverlay = factory6((_props, ref) => {
  const props = useProps12("ModalOverlay", defaultProps12, _props);
  const _a = props, { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useModalContext();
  return /* @__PURE__ */ React36.createElement(
    ModalBaseOverlay,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("overlay", { classNames, style, styles, className })), others)
  );
});
ModalOverlay.displayName = "@raikou/core/ModalOverlay";

// ../components/Modal/src/ModalContent.tsx
import React37 from "react";
import {
  factory as factory7,
  useProps as useProps13,
  rem as rem6
} from "@raikou/core";
var defaultProps13 = {};
var ModalContent = factory7((_props, ref) => {
  const props = useProps13("ModalContent", defaultProps13, _props);
  const _a = props, { classNames, className, style, styles, vars, children } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars", "children"]);
  const ctx = useModalContext();
  const Scroll = ctx.scrollAreaComponent || NativeScrollArea;
  return /* @__PURE__ */ React37.createElement(
    ModalBaseContent,
    __spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("content", { className, style, styles, classNames })), {
      innerProps: ctx.getStyles("inner", {
        className,
        style,
        styles,
        classNames
      }),
      ref
    }), others),
    /* @__PURE__ */ React37.createElement(Scroll, { style: { maxHeight: `calc(100vh - (${rem6(ctx.yOffset)} * 2))` } }, children)
  );
});
ModalContent.displayName = "@raikou/core/ModalContent";

// ../components/Modal/src/ModalTitle.tsx
import React38 from "react";
import {
  factory as factory8,
  useProps as useProps14
} from "@raikou/core";
var defaultProps14 = {};
var ModalTitle = factory8((_props, ref) => {
  const props = useProps14("ModalTitle", defaultProps14, _props);
  const _a = props, { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useModalContext();
  return /* @__PURE__ */ React38.createElement(
    ModalBaseTitle,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("title", { classNames, style, styles, className })), others)
  );
});
ModalTitle.displayName = "@raikou/core/ModalTitle";

// ../components/Modal/src/ModalHeader.tsx
import React39 from "react";
import {
  factory as factory9,
  useProps as useProps15
} from "@raikou/core";
var defaultProps15 = {};
var ModalHeader = factory9((_props, ref) => {
  const props = useProps15("ModalHeader", defaultProps15, _props);
  const _a = props, { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useModalContext();
  return /* @__PURE__ */ React39.createElement(
    ModalBaseHeader,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("header", { classNames, style, styles, className })), others)
  );
});
ModalHeader.displayName = "@raikou/core/ModalHeader";

// ../components/Modal/src/Modal.tsx
var defaultProps16 = {
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: getDefaultZIndex4("modal"),
  padding: "md",
  size: "md",
  shadow: "xl",
  transitionProps: { duration: 200, transition: "pop" },
  withOverlay: true,
  withCloseButton: true
};
var Modal = factory10((_props, ref) => {
  const _a = useProps16("Modal", defaultProps16, _props), {
    title,
    withOverlay,
    overlayProps,
    withCloseButton,
    closeButtonProps,
    children,
    radius
  } = _a, others = __objRest(_a, [
    "title",
    "withOverlay",
    "overlayProps",
    "withCloseButton",
    "closeButtonProps",
    "children",
    "radius"
  ]);
  const hasHeader = !!title || withCloseButton;
  return /* @__PURE__ */ React40.createElement(ModalRoot, __spreadValues({ ref }, others), withOverlay && /* @__PURE__ */ React40.createElement(ModalOverlay, __spreadValues({}, overlayProps)), /* @__PURE__ */ React40.createElement(ModalContent, { radius }, hasHeader && /* @__PURE__ */ React40.createElement(ModalHeader, null, title && /* @__PURE__ */ React40.createElement(ModalTitle, null, title), withCloseButton && /* @__PURE__ */ React40.createElement(ModalCloseButton, __spreadValues({}, closeButtonProps))), /* @__PURE__ */ React40.createElement(ModalBody, null, children)));
});
Modal.displayName = "@raikou/core/Modal";
Modal.Root = ModalRoot;
Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;
Modal.Body = ModalBody;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.CloseButton = ModalCloseButton;

// src/ModalsProvider.tsx
import { randomId } from "@raikou/hooks";

// src/context.ts
import { createContext as createContext3 } from "react";
var ModalsContext = createContext3(null);
ModalsContext.displayName = "@raikou/modals/ModalsContext";

// src/ConfirmModal.tsx
import React44 from "react";

// ../components/Button/src/Button.tsx
import React42 from "react";
import {
  polymorphicFactory as polymorphicFactory6,
  useProps as useProps18,
  useStyles as useStyles9,
  createVarsResolver as createVarsResolver8,
  Box as Box15,
  getRadius as getRadius5,
  getSize as getSize4,
  getFontSize
} from "@raikou/core";

// ../components/Button/src/ButtonGroup/ButtonGroup.tsx
import React41 from "react";
import {
  factory as factory11,
  Box as Box14,
  useProps as useProps17,
  useStyles as useStyles8,
  rem as rem7,
  createVarsResolver as createVarsResolver7
} from "@raikou/core";
var defaultProps17 = {
  orientation: "horizontal",
  borderWidth: 1
};
var varsResolver7 = createVarsResolver7(
  (_, { borderWidth }) => ({
    root: { "--button-border-width": rem7(borderWidth) }
  })
);
var ButtonGroup = factory11((_props, ref) => {
  const props = useProps17("ButtonGroup", defaultProps17, _props);
  const _a = useProps17("ButtonGroup", defaultProps17, _props), {
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
  const getStyles2 = useStyles8({
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
  return /* @__PURE__ */ React41.createElement(
    Box14,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles2("root")), {
      ref,
      variant,
      mod: { "data-orientation": orientation },
      role: "group"
    }), others)
  );
});
ButtonGroup.displayName = "@raikou/core/ButtonGroup";

// ../components/Button/src/Button.tsx
var defaultProps18 = {
  size: "sm",
  variant: "filled",
  loaderPosition: "left"
};
var varsResolver8 = createVarsResolver8(
  (theme, { radius, color, gradient, variant, size, justify }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant
    });
    return {
      root: {
        "--button-justify": justify,
        "--button-height": getSize4(size, "button-height"),
        "--button-padding-x": getSize4(size, "button-padding-x"),
        "--button-fz": (size == null ? void 0 : size.includes("compact")) ? getFontSize(size.replace("compact-", "")) : getFontSize(size),
        "--button-radius": getRadius5(radius),
        "--button-bg": colors.background,
        "--button-hover": colors.hover,
        "--button-color": colors.color,
        "--button-bd": colors.border
      }
    };
  }
);
var Button = polymorphicFactory6((_props, ref) => {
  const props = useProps18("Button", defaultProps18, _props);
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
  const getStyles2 = useStyles9({
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
  return /* @__PURE__ */ React42.createElement(
    UnstyledButton,
    __spreadValues(__spreadProps(__spreadValues({
      ref
    }, getStyles2("root", { active: !disabled && !loading && !dataDisabled })), {
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
    /* @__PURE__ */ React42.createElement("span", __spreadValues({}, getStyles2("inner")), leftSection && /* @__PURE__ */ React42.createElement(
      Box15,
      __spreadProps(__spreadValues({
        component: "span"
      }, getStyles2("section")), {
        mod: { position: "left" }
      }),
      leftSection
    ), loading && loaderPosition === "left" && /* @__PURE__ */ React42.createElement(
      Box15,
      __spreadProps(__spreadValues({
        component: "span"
      }, getStyles2("section")), {
        mod: { position: "left" }
      }),
      !loading && leftSection,
      loading && /* @__PURE__ */ React42.createElement(
        Loader,
        __spreadValues({
          type: "progress",
          color: "var(--button-color)",
          size: "calc(var(--button-height) / 2.4)"
        }, loaderProps)
      )
    ), loading && loaderPosition === "center" && /* @__PURE__ */ React42.createElement(Box15, __spreadValues({ component: "span" }, getStyles2("loader")), /* @__PURE__ */ React42.createElement(
      Loader,
      __spreadValues({
        color: "var(--button-color)",
        size: "calc(var(--button-height) / 1.8)"
      }, loaderProps)
    )), /* @__PURE__ */ React42.createElement(Box15, __spreadValues({ component: "span", mod: { loading } }, getStyles2("label")), children), rightSection && /* @__PURE__ */ React42.createElement(
      Box15,
      __spreadProps(__spreadValues({
        component: "span"
      }, getStyles2("section")), {
        mod: { position: "right" }
      }),
      rightSection
    ))
  );
});
Button.displayName = "@raikou/core/Button";
Button.Group = ButtonGroup;

// ../components/Group/src/Group.tsx
import React43 from "react";
import {
  Box as Box16,
  factory as factory12,
  useProps as useProps19,
  useStyles as useStyles10,
  getSpacing as getSpacing2,
  createVarsResolver as createVarsResolver9
} from "@raikou/core";

// ../components/Group/src/filter-falsy-children/filter-falsy-children.ts
import { Children as Children2 } from "react";
function filterFalsyChildren(children) {
  return Children2.toArray(children).filter(Boolean);
}

// ../components/Group/src/Group.tsx
var defaultProps19 = {
  justify: "flex-start",
  align: "center",
  gap: "md",
  preventGrowOverflow: true
};
var varsResolver9 = createVarsResolver9(
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
var Group = factory12((_props, ref) => {
  const props = useProps19("Group", defaultProps19, _props);
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
  const childWidth = `calc(${100 / childrenCount}% - (${getSpacing2(
    gap
  )} - ${getSpacing2(gap)} / ${childrenCount}))`;
  const stylesCtx = { childWidth };
  const getStyles2 = useStyles10({
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
    varsResolver: varsResolver9
  });
  return /* @__PURE__ */ React43.createElement(
    Box16,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles2("root")), {
      ref,
      variant,
      mod: { grow },
      size: __size
    }), others),
    filteredChildren
  );
});
Group.displayName = "@raikou/core/Group";

// src/ConfirmModal.tsx
import { Box as Box17 } from "@raikou/core";

// src/use-modals/use-modals.ts
import { useContext as useContext3 } from "react";
function useModals() {
  const ctx = useContext3(ModalsContext);
  if (!ctx) {
    throw new Error(
      "[@raikou/modals] useModals hook was called outside of context, wrap your app with ModalsProvider component"
    );
  }
  return ctx;
}

// src/ConfirmModal.tsx
function ConfirmModal({
  id,
  cancelProps,
  confirmProps,
  labels = { cancel: "", confirm: "" },
  closeOnConfirm = true,
  closeOnCancel = true,
  groupProps,
  onCancel,
  onConfirm,
  children
}) {
  const { cancel: cancelLabel, confirm: confirmLabel } = labels;
  const ctx = useModals();
  const handleCancel = (event) => {
    typeof (cancelProps == null ? void 0 : cancelProps.onClick) === "function" && (cancelProps == null ? void 0 : cancelProps.onClick(event));
    typeof onCancel === "function" && onCancel();
    closeOnCancel && ctx.closeModal(id);
  };
  const handleConfirm = (event) => {
    typeof (confirmProps == null ? void 0 : confirmProps.onClick) === "function" && (confirmProps == null ? void 0 : confirmProps.onClick(event));
    typeof onConfirm === "function" && onConfirm();
    closeOnConfirm && ctx.closeModal(id);
  };
  return /* @__PURE__ */ React44.createElement(React44.Fragment, null, children && /* @__PURE__ */ React44.createElement(Box17, { mb: "md" }, children), /* @__PURE__ */ React44.createElement(Group, __spreadValues({ justify: "flex-end" }, groupProps), /* @__PURE__ */ React44.createElement(Button, __spreadProps(__spreadValues({ variant: "default" }, cancelProps), { onClick: handleCancel }), (cancelProps == null ? void 0 : cancelProps.children) || cancelLabel), /* @__PURE__ */ React44.createElement(Button, __spreadProps(__spreadValues({}, confirmProps), { onClick: handleConfirm }), (confirmProps == null ? void 0 : confirmProps.children) || confirmLabel)));
}

// src/reducer.ts
function handleCloseModal(modal, canceled) {
  var _a, _b, _c, _d;
  if (canceled && modal.type === "confirm") {
    (_b = (_a = modal.props).onCancel) == null ? void 0 : _b.call(_a);
  }
  (_d = (_c = modal.props).onClose) == null ? void 0 : _d.call(_c);
}
function modalsReducer(state, action) {
  switch (action.type) {
    case "OPEN": {
      return {
        current: action.modal,
        modals: [...state.modals, action.modal]
      };
    }
    case "CLOSE": {
      const modal = state.modals.find((m) => m.id === action.modalId);
      if (!modal) {
        return state;
      }
      handleCloseModal(modal, action.canceled);
      const remainingModals = state.modals.filter((m) => m.id !== action.modalId);
      return {
        current: remainingModals[remainingModals.length - 1] || state.current,
        modals: remainingModals
      };
    }
    case "CLOSE_ALL": {
      if (!state.modals.length) {
        return state;
      }
      state.modals.concat().reverse().forEach((modal) => {
        handleCloseModal(modal, action.canceled);
      });
      return {
        current: state.current,
        modals: []
      };
    }
    default: {
      return state;
    }
  }
}

// src/events.ts
var [useModalsEvents, createEvent] = createUseExternalEvents("raikou-modals");
var openModal = createEvent("openModal");
var closeModal = createEvent("closeModal");
var closeAllModals = createEvent("closeAllModals");
var openConfirmModal = createEvent("openConfirmModal");
var openContextModal = (payload) => createEvent("openContextModal")(payload);
var modals = {
  open: openModal,
  close: closeModal,
  closeAll: closeAllModals,
  openConfirmModal,
  openContextModal
};

// src/ModalsProvider.tsx
function separateConfirmModalProps(props) {
  if (!props) {
    return { confirmProps: {}, modalProps: {} };
  }
  const _a = props, {
    id,
    children,
    onCancel,
    onConfirm,
    closeOnConfirm,
    closeOnCancel,
    cancelProps,
    confirmProps,
    groupProps,
    labels
  } = _a, others = __objRest(_a, [
    "id",
    "children",
    "onCancel",
    "onConfirm",
    "closeOnConfirm",
    "closeOnCancel",
    "cancelProps",
    "confirmProps",
    "groupProps",
    "labels"
  ]);
  return {
    confirmProps: {
      id,
      children,
      onCancel,
      onConfirm,
      closeOnConfirm,
      closeOnCancel,
      cancelProps,
      confirmProps,
      groupProps,
      labels
    },
    modalProps: __spreadValues({
      id
    }, others)
  };
}
function ModalsProvider({
  children,
  modalProps,
  labels,
  modals: modals2
}) {
  const [state, dispatch] = useReducer(modalsReducer, {
    modals: [],
    current: null
  });
  const stateRef = useRef6(state);
  stateRef.current = state;
  const closeAll = useCallback2(
    (canceled) => {
      dispatch({ type: "CLOSE_ALL", canceled });
    },
    [stateRef, dispatch]
  );
  const openModal2 = useCallback2(
    (_a) => {
      var _b = _a, { modalId } = _b, props = __objRest(_b, ["modalId"]);
      const id = modalId || randomId();
      dispatch({
        type: "OPEN",
        modal: {
          id,
          type: "content",
          props
        }
      });
      return id;
    },
    [dispatch]
  );
  const openConfirmModal2 = useCallback2(
    (_c) => {
      var _d = _c, { modalId } = _d, props = __objRest(_d, ["modalId"]);
      const id = modalId || randomId();
      dispatch({
        type: "OPEN",
        modal: {
          id,
          type: "confirm",
          props
        }
      });
      return id;
    },
    [dispatch]
  );
  const openContextModal2 = useCallback2(
    (modal, _e) => {
      var _f = _e, { modalId } = _f, props = __objRest(_f, ["modalId"]);
      const id = modalId || randomId();
      dispatch({
        type: "OPEN",
        modal: {
          id,
          type: "context",
          props,
          ctx: modal
        }
      });
      return id;
    },
    [dispatch]
  );
  const closeModal2 = useCallback2(
    (id, canceled) => {
      dispatch({ type: "CLOSE", modalId: id, canceled });
    },
    [stateRef, dispatch]
  );
  useModalsEvents({
    openModal: openModal2,
    openConfirmModal: openConfirmModal2,
    openContextModal: (_g) => {
      var _h = _g, { modal } = _h, payload = __objRest(_h, ["modal"]);
      return openContextModal2(modal, payload);
    },
    closeModal: closeModal2,
    closeContextModal: closeModal2,
    closeAllModals: closeAll
  });
  const ctx = {
    modals: state.modals,
    openModal: openModal2,
    openConfirmModal: openConfirmModal2,
    openContextModal: openContextModal2,
    closeModal: closeModal2,
    closeContextModal: closeModal2,
    closeAll
  };
  const getCurrentModal = () => {
    const currentModal = stateRef.current.current;
    switch (currentModal == null ? void 0 : currentModal.type) {
      case "context": {
        const _a = currentModal.props, { innerProps } = _a, rest = __objRest(_a, ["innerProps"]);
        const ContextModal = modals2[currentModal.ctx];
        return {
          modalProps: rest,
          content: /* @__PURE__ */ React45.createElement(
            ContextModal,
            {
              innerProps,
              context: ctx,
              id: currentModal.id
            }
          )
        };
      }
      case "confirm": {
        const {
          modalProps: separatedModalProps,
          confirmProps: separatedConfirmProps
        } = separateConfirmModalProps(currentModal.props);
        return {
          modalProps: separatedModalProps,
          content: /* @__PURE__ */ React45.createElement(
            ConfirmModal,
            __spreadProps(__spreadValues({}, separatedConfirmProps), {
              id: currentModal.id,
              labels: currentModal.props.labels || labels
            })
          )
        };
      }
      case "content": {
        const _b = currentModal.props, { children: currentModalChildren } = _b, rest = __objRest(_b, ["children"]);
        return {
          modalProps: rest,
          content: /* @__PURE__ */ React45.createElement(React45.Fragment, null, currentModalChildren)
        };
      }
      default: {
        return {
          modalProps: {},
          content: null
        };
      }
    }
  };
  const { modalProps: currentModalProps, content } = getCurrentModal();
  return /* @__PURE__ */ React45.createElement(ModalsContext.Provider, { value: ctx }, /* @__PURE__ */ React45.createElement(
    Modal,
    __spreadProps(__spreadValues(__spreadValues({
      zIndex: getDefaultZIndex5("modal") + 1
    }, modalProps), currentModalProps), {
      opened: state.modals.length > 0,
      onClose: () => closeModal2(state.current.id)
    }),
    content
  ), children);
}
export {
  ModalsProvider,
  closeAllModals,
  closeModal,
  modals,
  openConfirmModal,
  openContextModal,
  openModal,
  useModals
};
