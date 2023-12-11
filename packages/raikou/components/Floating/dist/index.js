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
  FloatingArrow: () => FloatingArrow,
  getFloatingPosition: () => getFloatingPosition,
  useDelayedHover: () => useDelayedHover,
  useFloatingAutoUpdate: () => useFloatingAutoUpdate
});
module.exports = __toCommonJS(src_exports);

// src/use-delayed-hover.ts
var import_react = require("react");
function useDelayedHover({
  open,
  close,
  openDelay,
  closeDelay
}) {
  const openTimeout = (0, import_react.useRef)(-1);
  const closeTimeout = (0, import_react.useRef)(-1);
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
  (0, import_react.useEffect)(() => clearTimeouts, []);
  return { openDropdown, closeDropdown };
}

// src/use-floating-auto-update.ts
var import_react2 = require("react");
var import_react3 = require("@floating-ui/react");
var import_hooks = require("@raikou/hooks");
function useFloatingAutoUpdate({
  opened,
  floating,
  position,
  positionDependencies
}) {
  const [delayedUpdate, setDelayedUpdate] = (0, import_react2.useState)(0);
  (0, import_react2.useEffect)(() => {
    if (floating.refs.reference.current && floating.refs.floating.current) {
      return (0, import_react3.autoUpdate)(
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
  (0, import_hooks.useDidUpdate)(() => {
    floating.update();
  }, positionDependencies);
  (0, import_hooks.useDidUpdate)(() => {
    setDelayedUpdate((c) => c + 1);
  }, [opened]);
}

// src/get-floating-position/get-floating-position.ts
function getFloatingPosition(dir, position) {
  if (dir === "rtl" && (position.includes("right") || position.includes("left"))) {
    const [side, placement] = position.split("-");
    const flippedPosition = side === "right" ? "left" : "right";
    return placement === void 0 ? flippedPosition : `${flippedPosition}-${placement}`;
  }
  return position;
}

// src/FloatingArrow/FloatingArrow.tsx
var import_react4 = __toESM(require("react"));
var import_core2 = require("@raikou/core");

// src/FloatingArrow/get-arrow-position-styles.ts
var import_core = require("@raikou/core");
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
    width: (0, import_core.rem)(arrowSize),
    height: (0, import_core.rem)(arrowSize),
    transform: "rotate(45deg)",
    position: "absolute",
    [radiusByFloatingSide[side]]: (0, import_core.rem)(arrowRadius)
  };
  const arrowPlacement = (0, import_core.rem)(-arrowSize / 2);
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

// src/FloatingArrow/FloatingArrow.tsx
var FloatingArrow = (0, import_react4.forwardRef)(
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
    const { dir } = (0, import_core2.useDirection)();
    if (!visible) {
      return null;
    }
    return /* @__PURE__ */ import_react4.default.createElement(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FloatingArrow,
  getFloatingPosition,
  useDelayedHover,
  useFloatingAutoUpdate
});
//# sourceMappingURL=index.js.map