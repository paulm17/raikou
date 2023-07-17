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
  Tooltip: () => Tooltip,
  TooltipFloating: () => TooltipFloating,
  TooltipGroup: () => TooltipGroup
});
module.exports = __toCommonJS(src_exports);

// src/Tooltip.tsx
var import_react16 = __toESM(require("react"));
var import_hooks6 = require("@raikou/hooks");
var import_clsx = __toESM(require("clsx"));
var import_core8 = require("@raikou/core");

// ../Floating/src/use-floating-auto-update.ts
var import_react = require("react");
var import_react2 = require("@floating-ui/react");
var import_hooks = require("@raikou/hooks");
function useFloatingAutoUpdate({
  opened,
  floating,
  position,
  positionDependencies
}) {
  const [delayedUpdate, setDelayedUpdate] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
    if (floating.refs.reference.current && floating.refs.floating.current) {
      return (0, import_react2.autoUpdate)(
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

// ../Floating/src/get-floating-position/get-floating-position.ts
function getFloatingPosition(dir, position) {
  if (dir === "rtl" && (position.includes("right") || position.includes("left"))) {
    const [side, placement] = position.split("-");
    const flippedPosition = side === "right" ? "left" : "right";
    return placement === void 0 ? flippedPosition : `${flippedPosition}-${placement}`;
  }
  return position;
}

// ../Floating/src/FloatingArrow/FloatingArrow.tsx
var import_react3 = __toESM(require("react"));
var import_core2 = require("@raikou/core");

// ../Floating/src/FloatingArrow/get-arrow-position-styles.ts
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

// ../Floating/src/FloatingArrow/FloatingArrow.tsx
var FloatingArrow = (0, import_react3.forwardRef)(
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
    return /* @__PURE__ */ import_react3.default.createElement(
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

// ../Transition/src/transitions.ts
var import_core3 = require("@raikou/core");
var popIn = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${(0, import_core3.rem)(10)})` },
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
      transform: `translateY(-${(0, import_core3.rem)(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: {
      opacity: 0,
      transform: `translateY(${(0, import_core3.rem)(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${(0, import_core3.rem)(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${(0, import_core3.rem)(20)}) rotate(5deg)` },
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
var import_react5 = __toESM(require("react"));

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
var import_react4 = require("react");
var import_hooks2 = require("@raikou/hooks");
var import_core4 = require("@raikou/core");
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
  const theme = (0, import_core4.getTheme)();
  const shouldReduceMotion = (0, import_hooks2.useReducedMotion)();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionDuration, setTransitionDuration] = (0, import_react4.useState)(
    reduceMotion ? 0 : duration
  );
  const [transitionStatus, setStatus] = (0, import_react4.useState)(
    mounted ? "entered" : "exited"
  );
  const timeoutRef = (0, import_react4.useRef)(-1);
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
  (0, import_hooks2.useDidUpdate)(() => {
    handleStateChange(mounted);
  }, [mounted]);
  (0, import_react4.useEffect)(() => () => window.clearTimeout(timeoutRef.current), []);
  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || "ease"
  };
}

// ../Transition/src/Transition.tsx
function Transition({
  keepMounted,
  transition,
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
    return mounted ? /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, children({})) : keepMounted ? children({ display: "none" }) : null;
  }
  return transitionStatus === "exited" ? keepMounted ? children({ display: "none" }) : null : /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, children(
    getTransitionStyles({
      transition,
      duration: transitionDuration,
      state: transitionStatus,
      timingFunction: transitionTimingFunction
    })
  ));
}
Transition.displayName = "@raikou/core/Transition";

// ../Transition/src/get-transition-props/get-transition-props.ts
var defaultTransition = {
  duration: 100,
  transition: "fade"
};
function getTransitionProps(transitionProps, componentTransition) {
  return __spreadValues(__spreadValues(__spreadValues({}, defaultTransition), componentTransition), transitionProps);
}

// ../Portal/src/Portal.tsx
var import_react6 = __toESM(require("react"));
var import_react_dom = require("react-dom");
var import_hooks3 = require("@raikou/hooks");
var import_core5 = require("@raikou/core");
var defaultProps = {};
var Portal = (0, import_react6.forwardRef)((props, ref) => {
  const _a = (0, import_core5.useProps)(
    "Portal",
    defaultProps,
    props
  ), { children, target, className } = _a, others = __objRest(_a, ["children", "target", "className"]);
  const [mounted, setMounted] = (0, import_react6.useState)(false);
  const nodeRef = (0, import_react6.useRef)(null);
  (0, import_hooks3.useIsomorphicEffect)(() => {
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
  return (0, import_react_dom.createPortal)(
    /* @__PURE__ */ import_react6.default.createElement("div", __spreadValues({ className, ref }, others), children),
    nodeRef.current
  );
});
Portal.displayName = "@raikou/core/Portal";

// ../Portal/src/OptionalPortal.tsx
var import_react7 = __toESM(require("react"));
function OptionalPortal(_a) {
  var _b = _a, {
    withinPortal = true,
    children
  } = _b, others = __objRest(_b, [
    "withinPortal",
    "children"
  ]);
  if (withinPortal) {
    return /* @__PURE__ */ import_react7.default.createElement(Portal, __spreadValues({}, others), children);
  }
  return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, children);
}
OptionalPortal.displayName = "@raikou/core/OptionalPortal";

// src/TooltipFloating/TooltipFloating.tsx
var import_react10 = __toESM(require("react"));
var import_hooks4 = require("@raikou/hooks");
var import_core6 = require("@raikou/core");

// src/TooltipFloating/use-floating-tooltip.ts
var import_react8 = require("react");
var import_react9 = require("@floating-ui/react");
function useFloatingTooltip({
  offset: offset2,
  position
}) {
  const [opened, setOpened] = (0, import_react8.useState)(false);
  const boundaryRef = (0, import_react8.useRef)();
  const { x, y, reference, floating, refs, update, placement } = (0, import_react9.useFloating)({
    placement: position,
    middleware: [
      (0, import_react9.shift)({
        crossAxis: true,
        padding: 5,
        rootBoundary: "document"
      })
    ]
  });
  const horizontalOffset = placement.includes("right") ? offset2 : position.includes("left") ? offset2 * -1 : 0;
  const verticalOffset = placement.includes("bottom") ? offset2 : position.includes("top") ? offset2 * -1 : 0;
  const handleMouseMove = (0, import_react8.useCallback)(
    ({ clientX, clientY }) => {
      reference({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: clientX,
            y: clientY,
            left: clientX + horizontalOffset,
            top: clientY + verticalOffset,
            right: clientX,
            bottom: clientY
          };
        }
      });
    },
    [reference]
  );
  (0, import_react8.useEffect)(() => {
    if (refs.floating.current) {
      const boundary = boundaryRef.current;
      boundary.addEventListener("mousemove", handleMouseMove);
      const parents = (0, import_react9.getOverflowAncestors)(refs.floating.current);
      parents.forEach((parent) => {
        parent.addEventListener("scroll", update);
      });
      return () => {
        boundary.removeEventListener("mousemove", handleMouseMove);
        parents.forEach((parent) => {
          parent.removeEventListener("scroll", update);
        });
      };
    }
    return void 0;
  }, [reference, refs.floating.current, update, handleMouseMove, opened]);
  return { handleMouseMove, x, y, opened, setOpened, boundaryRef, floating };
}

// src/TooltipFloating/TooltipFloating.tsx
var defaultProps2 = {
  refProp: "ref",
  withinPortal: true,
  offset: 10,
  position: "right",
  zIndex: (0, import_core6.getDefaultZIndex)("popover")
};
var varsResolver = (0, import_core6.createVarsResolver)(
  (theme, { radius, color }) => ({
    tooltip: {
      "--tooltip-radius": (0, import_core6.getRadius)(radius),
      "--tooltip-bg": color ? (0, import_core6.getThemeColor)(color, theme) : void 0
    }
  })
);
var TooltipFloating = (0, import_core6.factory)(
  (_props, ref) => {
    var _b, _c;
    const props = (0, import_core6.useProps)("TooltipFloating", defaultProps2, _props);
    const _a = props, {
      children,
      refProp,
      withinPortal,
      style,
      className,
      classNames,
      styles,
      unstyled,
      radius,
      color,
      label,
      offset: offset2,
      position,
      multiline,
      zIndex,
      disabled,
      variant,
      vars,
      portalProps
    } = _a, others = __objRest(_a, [
      "children",
      "refProp",
      "withinPortal",
      "style",
      "className",
      "classNames",
      "styles",
      "unstyled",
      "radius",
      "color",
      "label",
      "offset",
      "position",
      "multiline",
      "zIndex",
      "disabled",
      "variant",
      "vars",
      "portalProps"
    ]);
    const theme = (0, import_core6.getTheme)();
    const getStyles = (0, import_core6.useStyles)({
      name: "TooltipFloating",
      props,
      classes: {
        tooltip: "tooltip-root",
        arrow: "tooltip-arrow"
      },
      className,
      style,
      classNames,
      styles,
      unstyled,
      rootSelector: "tooltip",
      vars,
      varsResolver
    });
    const { handleMouseMove, x, y, opened, boundaryRef, floating, setOpened } = useFloatingTooltip({
      offset: offset2,
      position
    });
    if (!(0, import_core6.isElement)(children)) {
      throw new Error(
        "[@raikou/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
      );
    }
    const targetRef = (0, import_hooks4.useMergedRef)(boundaryRef, children.ref, ref);
    const onMouseEnter = (event) => {
      var _a2, _b2;
      (_b2 = (_a2 = children.props).onMouseEnter) == null ? void 0 : _b2.call(_a2, event);
      handleMouseMove(event);
      setOpened(true);
    };
    const onMouseLeave = (event) => {
      var _a2, _b2;
      (_b2 = (_a2 = children.props).onMouseLeave) == null ? void 0 : _b2.call(_a2, event);
      setOpened(false);
    };
    return /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement(OptionalPortal, __spreadProps(__spreadValues({}, portalProps), { withinPortal }), /* @__PURE__ */ import_react10.default.createElement(
      import_core6.Box,
      __spreadProps(__spreadValues(__spreadValues({}, others), getStyles("tooltip", {
        style: __spreadProps(__spreadValues({}, (0, import_core6.getStyleObject)(style, theme)), {
          zIndex,
          display: !disabled && opened ? "block" : "none",
          top: (_b = y && Math.round(y)) != null ? _b : "",
          left: (_c = x && Math.round(x)) != null ? _c : ""
        })
      })), {
        variant,
        ref: floating
      }),
      label
    )), (0, import_react10.cloneElement)(children, __spreadProps(__spreadValues({}, children.props), {
      [refProp]: targetRef,
      onMouseEnter,
      onMouseLeave
    })));
  }
);
TooltipFloating.displayName = "@raikou/core/TooltipFloating";

// src/TooltipGroup/TooltipGroup.tsx
var import_react12 = __toESM(require("react"));
var import_react13 = require("@floating-ui/react");
var import_core7 = require("@raikou/core");

// src/TooltipGroup/TooltipGroup.context.ts
var import_react11 = require("react");
var TooltipGroupContext = (0, import_react11.createContext)(false);
var TooltipGroupProvider = TooltipGroupContext.Provider;
var useTooltipGroupContext = () => (0, import_react11.useContext)(TooltipGroupContext);

// src/TooltipGroup/TooltipGroup.tsx
var defaultProps3 = {
  openDelay: 0,
  closeDelay: 0
};
function TooltipGroup(props) {
  const { openDelay, closeDelay, children } = (0, import_core7.useProps)(
    "TooltipGroup",
    defaultProps3,
    props
  );
  return /* @__PURE__ */ import_react12.default.createElement(TooltipGroupProvider, { value: true }, /* @__PURE__ */ import_react12.default.createElement(import_react13.FloatingDelayGroup, { delay: { open: openDelay, close: closeDelay } }, children));
}
TooltipGroup.displayName = "@raikou/core/TooltipGroup";

// src/use-tooltip.ts
var import_react14 = require("react");
var import_react15 = require("@floating-ui/react");
var import_hooks5 = require("@raikou/hooks");
function useTooltip(settings) {
  var _a, _b, _c;
  const [uncontrolledOpened, setUncontrolledOpened] = (0, import_react14.useState)(false);
  const controlled = typeof settings.opened === "boolean";
  const opened = controlled ? settings.opened : uncontrolledOpened;
  const withinGroup = useTooltipGroupContext();
  const uid = (0, import_hooks5.useId)();
  const { delay: groupDelay, currentId, setCurrentId } = (0, import_react15.useDelayGroupContext)();
  const onChange = (0, import_react14.useCallback)(
    (_opened) => {
      setUncontrolledOpened(_opened);
      if (_opened) {
        setCurrentId(uid);
      }
    },
    [setCurrentId, uid]
  );
  const {
    x,
    y,
    reference,
    floating,
    context,
    refs,
    update,
    placement,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} }
  } = (0, import_react15.useFloating)({
    placement: settings.position,
    open: opened,
    onOpenChange: onChange,
    middleware: [
      (0, import_react15.offset)(settings.offset),
      (0, import_react15.shift)({ padding: 8 }),
      (0, import_react15.flip)(),
      (0, import_react15.arrow)({ element: settings.arrowRef, padding: settings.arrowOffset }),
      ...settings.inline ? [(0, import_react15.inline)()] : []
    ]
  });
  const { getReferenceProps, getFloatingProps } = (0, import_react15.useInteractions)([
    (0, import_react15.useHover)(context, {
      enabled: (_a = settings.events) == null ? void 0 : _a.hover,
      delay: withinGroup ? groupDelay : { open: settings.openDelay, close: settings.closeDelay },
      mouseOnly: !((_b = settings.events) == null ? void 0 : _b.touch)
    }),
    (0, import_react15.useFocus)(context, { enabled: (_c = settings.events) == null ? void 0 : _c.focus, keyboardOnly: true }),
    (0, import_react15.useRole)(context, { role: "tooltip" }),
    // cannot be used with controlled tooltip, page jumps
    (0, import_react15.useDismiss)(context, { enabled: typeof settings.opened === void 0 }),
    (0, import_react15.useDelayGroup)(context, { id: uid })
  ]);
  useFloatingAutoUpdate({
    opened,
    position: settings.position,
    positionDependencies: settings.positionDependencies,
    floating: { refs, update }
  });
  (0, import_hooks5.useDidUpdate)(() => {
    var _a2;
    (_a2 = settings.onPositionChange) == null ? void 0 : _a2.call(settings, placement);
  }, [placement]);
  const isGroupPhase = opened && currentId && currentId !== uid;
  return {
    x,
    y,
    arrowX,
    arrowY,
    reference,
    floating,
    getFloatingProps,
    getReferenceProps,
    isGroupPhase,
    opened,
    placement
  };
}

// src/Tooltip.tsx
var defaultProps4 = {
  position: "top",
  refProp: "ref",
  withinPortal: true,
  inline: false,
  arrowSize: 4,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: "side",
  offset: 5,
  transitionProps: { duration: 100, transition: "fade" },
  events: { hover: true, focus: false, touch: false },
  zIndex: (0, import_core8.getDefaultZIndex)("popover"),
  positionDependencies: []
};
var varsResolver2 = (0, import_core8.createVarsResolver)(
  (theme, { radius, color }) => ({
    tooltip: {
      "--tooltip-radius": (0, import_core8.getRadius)(radius),
      "--tooltip-bg": color ? (0, import_core8.getThemeColor)(color, theme) : void 0
    }
  })
);
var Tooltip = (0, import_core8.factory)((_props, ref) => {
  const props = (0, import_core8.useProps)("Tooltip", defaultProps4, _props);
  const _a = (0, import_core8.useProps)("Tooltip", defaultProps4, props), {
    children,
    position,
    refProp,
    label,
    openDelay,
    closeDelay,
    onPositionChange,
    opened,
    withinPortal,
    radius,
    color,
    classNames,
    styles,
    unstyled,
    style,
    className,
    withArrow,
    arrowSize,
    arrowOffset,
    arrowRadius,
    arrowPosition,
    offset: offset2,
    transitionProps,
    multiline,
    events,
    zIndex,
    disabled,
    positionDependencies,
    onClick,
    onMouseEnter,
    onMouseLeave,
    inline: inline2,
    variant,
    keepMounted,
    vars,
    portalProps
  } = _a, others = __objRest(_a, [
    "children",
    "position",
    "refProp",
    "label",
    "openDelay",
    "closeDelay",
    "onPositionChange",
    "opened",
    "withinPortal",
    "radius",
    "color",
    "classNames",
    "styles",
    "unstyled",
    "style",
    "className",
    "withArrow",
    "arrowSize",
    "arrowOffset",
    "arrowRadius",
    "arrowPosition",
    "offset",
    "transitionProps",
    "multiline",
    "events",
    "zIndex",
    "disabled",
    "positionDependencies",
    "onClick",
    "onMouseEnter",
    "onMouseLeave",
    "inline",
    "variant",
    "keepMounted",
    "vars",
    "portalProps"
  ]);
  const { dir } = (0, import_core8.useDirection)();
  const arrowRef = (0, import_react16.useRef)(null);
  const tooltip = useTooltip({
    position: getFloatingPosition(dir, position),
    closeDelay,
    openDelay,
    onPositionChange,
    opened,
    events,
    arrowRef,
    arrowOffset,
    offset: typeof offset2 === "number" ? offset2 + (withArrow ? arrowSize / 2 : 0) : offset2,
    positionDependencies: [...positionDependencies, children],
    inline: inline2
  });
  const getStyles = (0, import_core8.useStyles)({
    name: "Tooltip",
    props,
    classes: {
      tooltip: "tooltip-root",
      arrow: "tooltip-arrow"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "tooltip",
    vars,
    varsResolver: varsResolver2
  });
  if (!(0, import_core8.isElement)(children)) {
    throw new Error(
      "[@raikou/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const targetRef = (0, import_hooks6.useMergedRef)(tooltip.reference, children.ref, ref);
  const transition = getTransitionProps(transitionProps, {
    duration: 100,
    transition: "fade"
  });
  return /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null, /* @__PURE__ */ import_react16.default.createElement(OptionalPortal, __spreadProps(__spreadValues({}, portalProps), { withinPortal }), /* @__PURE__ */ import_react16.default.createElement(
    Transition,
    __spreadProps(__spreadValues({}, transition), {
      keepMounted,
      mounted: !disabled && !!tooltip.opened,
      duration: tooltip.isGroupPhase ? 10 : transition.duration
    }),
    (transitionStyles) => {
      var _a2, _b;
      return /* @__PURE__ */ import_react16.default.createElement(
        import_core8.Box,
        __spreadValues(__spreadProps(__spreadValues({}, others), {
          variant,
          mod: { multiline }
        }), tooltip.getFloatingProps({
          ref: tooltip.floating,
          className: getStyles("tooltip").className,
          style: __spreadProps(__spreadValues(__spreadValues({}, getStyles("tooltip").style), transitionStyles), {
            zIndex,
            top: (_a2 = tooltip.y) != null ? _a2 : 0,
            left: (_b = tooltip.x) != null ? _b : 0
          })
        })),
        label,
        /* @__PURE__ */ import_react16.default.createElement(
          FloatingArrow,
          __spreadValues({
            ref: arrowRef,
            arrowX: tooltip.arrowX,
            arrowY: tooltip.arrowY,
            visible: withArrow,
            position: tooltip.placement,
            arrowSize,
            arrowOffset,
            arrowRadius,
            arrowPosition
          }, getStyles("arrow"))
        )
      );
    }
  )), (0, import_react16.cloneElement)(
    children,
    tooltip.getReferenceProps(__spreadValues({
      onClick,
      onMouseEnter,
      onMouseLeave,
      onMouseMove: props.onMouseMove,
      onPointerDown: props.onPointerDown,
      onPointerEnter: props.onPointerEnter,
      [refProp]: targetRef,
      className: (0, import_clsx.default)(className, children.props.className)
    }, children.props))
  ));
});
Tooltip.displayName = "@raikou/core/Tooltip";
Tooltip.Floating = TooltipFloating;
Tooltip.Group = TooltipGroup;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Tooltip,
  TooltipFloating,
  TooltipGroup
});
