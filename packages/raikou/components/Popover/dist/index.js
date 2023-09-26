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
  Popover: () => Popover,
  PopoverDropdown: () => PopoverDropdown,
  PopoverTarget: () => PopoverTarget
});
module.exports = __toCommonJS(src_exports);

// src/Popover.tsx
var import_react16 = __toESM(require("react"));
var import_hooks8 = require("@raikou/hooks");
var import_core9 = require("@raikou/core");

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

// src/use-popover.ts
var import_hooks2 = require("@raikou/hooks");
var import_react4 = require("@floating-ui/react");
function getPopoverMiddlewares(options) {
  var _a, _b, _c;
  const middlewares = [(0, import_react4.offset)(options.offset)];
  if ((_a = options.middlewares) == null ? void 0 : _a.shift) {
    middlewares.push((0, import_react4.shift)({ limiter: (0, import_react4.limitShift)() }));
  }
  if ((_b = options.middlewares) == null ? void 0 : _b.flip) {
    middlewares.push((0, import_react4.flip)());
  }
  if ((_c = options.middlewares) == null ? void 0 : _c.inline) {
    middlewares.push((0, import_react4.inline)());
  }
  middlewares.push(
    (0, import_react4.arrow)({ element: options.arrowRef, padding: options.arrowOffset })
  );
  return middlewares;
}
function usePopover(options) {
  const [_opened, setOpened] = (0, import_hooks2.useUncontrolled)({
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
  const floating = (0, import_react4.useFloating)({
    placement: options.position,
    middleware: [
      ...getPopoverMiddlewares(options),
      ...options.width === "target" ? [
        (0, import_react4.size)({
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
  (0, import_hooks2.useDidUpdate)(() => {
    var _a;
    (_a = options.onPositionChange) == null ? void 0 : _a.call(options, floating.placement);
  }, [floating.placement]);
  (0, import_hooks2.useDidUpdate)(() => {
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

// ../_utils/create-safe-context/create-safe-context.tsx
var import_react5 = __toESM(require("react"));
function createSafeContext(errorMessage) {
  const Context = (0, import_react5.createContext)(null);
  const useSafeContext = () => {
    const ctx = (0, import_react5.useContext)(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react5.default.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../_utils/create-optional-context/create-optional-context.tsx
var import_react6 = __toESM(require("react"));

// ../_utils/use-hovered/use-hovered.ts
var import_react7 = require("react");

// ../_utils/create-use-external-events/create-use-external-events.ts
var import_react8 = require("react");

// src/Popover.context.ts
var [PopoverContextProvider, usePopoverContext] = createSafeContext(
  "Popover component was not found in the tree"
);

// src/PopoverTarget/PopoverTarget.tsx
var import_react9 = require("react");
var import_clsx = __toESM(require("clsx"));
var import_hooks3 = require("@raikou/hooks");
var import_core3 = require("@raikou/core");
var defaultProps = {
  refProp: "ref",
  popupType: "dialog"
};
var PopoverTarget = (0, import_core3.factory)((props, ref) => {
  const _a = (0, import_core3.useProps)(
    "PopoverTarget",
    defaultProps,
    props
  ), { children, refProp, popupType } = _a, others = __objRest(_a, ["children", "refProp", "popupType"]);
  if (!(0, import_core3.isElement)(children)) {
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const forwardedProps = others;
  const ctx = usePopoverContext();
  const targetRef = (0, import_hooks3.useMergedRef)(ctx.reference, children.ref, ref);
  const accessibleProps = ctx.withRoles ? {
    "aria-haspopup": popupType,
    "aria-expanded": ctx.opened,
    "aria-controls": ctx.getDropdownId(),
    id: ctx.getTargetId()
  } : {};
  return (0, import_react9.cloneElement)(children, __spreadValues(__spreadProps(__spreadValues(__spreadValues(__spreadValues({}, forwardedProps), accessibleProps), ctx.targetProps), {
    className: (0, import_clsx.default)(
      ctx.targetProps.className,
      forwardedProps.className,
      children.props.className
    ),
    [refProp]: targetRef
  }), !ctx.controlled ? { onClick: ctx.onToggle } : null));
});
PopoverTarget.displayName = "@raikou/core/PopoverTarget";

// src/PopoverDropdown/PopoverDropdown.tsx
var import_react15 = __toESM(require("react"));
var import_hooks7 = require("@raikou/hooks");
var import_core8 = require("@raikou/core");

// ../Portal/src/Portal.tsx
var import_react10 = __toESM(require("react"));
var import_react_dom = require("react-dom");
var import_hooks4 = require("@raikou/hooks");
var import_core4 = require("@raikou/core");
function createPortalNode(props) {
  const node = document.createElement("div");
  node.setAttribute("data-portal", "true");
  typeof props.className === "string" && node.classList.add(props.className);
  typeof props.style === "object" && Object.assign(node.style, props.style);
  typeof props.id === "string" && node.setAttribute("id", props.id);
  return node;
}
var defaultProps2 = {};
var Portal = (0, import_react10.forwardRef)((props, ref) => {
  const _a = (0, import_core4.useProps)(
    "Portal",
    defaultProps2,
    props
  ), { children, target } = _a, others = __objRest(_a, ["children", "target"]);
  const [mounted, setMounted] = (0, import_react10.useState)(false);
  const nodeRef = (0, import_react10.useRef)(null);
  (0, import_hooks4.useIsomorphicEffect)(() => {
    setMounted(true);
    nodeRef.current = !target ? createPortalNode(others) : typeof target === "string" ? document.querySelector(target) : target;
    (0, import_hooks4.assignRef)(ref, nodeRef.current);
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
  return (0, import_react_dom.createPortal)(/* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, children), nodeRef.current);
});
Portal.displayName = "@raikou/core/Portal";

// ../Portal/src/OptionalPortal.tsx
var import_react11 = __toESM(require("react"));
function OptionalPortal(_a) {
  var _b = _a, {
    withinPortal = true,
    children
  } = _b, others = __objRest(_b, [
    "withinPortal",
    "children"
  ]);
  if (withinPortal) {
    return /* @__PURE__ */ import_react11.default.createElement(Portal, __spreadValues({}, others), children);
  }
  return /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, children);
}
OptionalPortal.displayName = "@raikou/core/OptionalPortal";

// ../Transition/src/transitions.ts
var import_core5 = require("@raikou/core");
var popIn = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${(0, import_core5.rem)(10)})` },
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
      transform: `translateY(-${(0, import_core5.rem)(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: {
      opacity: 0,
      transform: `translateY(${(0, import_core5.rem)(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${(0, import_core5.rem)(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${(0, import_core5.rem)(20)}) rotate(5deg)` },
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
var import_react13 = __toESM(require("react"));

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
var import_react12 = require("react");
var import_hooks5 = require("@raikou/hooks");
var import_core6 = require("@raikou/core");
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
  const theme = (0, import_core6.useRaikouTheme)();
  const shouldReduceMotion = (0, import_hooks5.useReducedMotion)();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionDuration, setTransitionDuration] = (0, import_react12.useState)(
    reduceMotion ? 0 : duration
  );
  const [transitionStatus, setStatus] = (0, import_react12.useState)(
    mounted ? "entered" : "exited"
  );
  const timeoutRef = (0, import_react12.useRef)(-1);
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
  (0, import_hooks5.useDidUpdate)(() => {
    handleStateChange(mounted);
  }, [mounted]);
  (0, import_react12.useEffect)(() => () => window.clearTimeout(timeoutRef.current), []);
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
    return mounted ? /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, children({})) : keepMounted ? children({ display: "none" }) : null;
  }
  return transitionStatus === "exited" ? keepMounted ? children({ display: "none" }) : null : /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, children(
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
var import_react14 = require("react");
var import_hooks6 = require("@raikou/hooks");
var import_core7 = require("@raikou/core");
function FocusTrap({
  children,
  active = true,
  refProp = "ref"
}) {
  const focusTrapRef = (0, import_hooks6.useFocusTrap)(active);
  const ref = (0, import_hooks6.useMergedRef)(focusTrapRef, children == null ? void 0 : children.ref);
  if (!(0, import_core7.isElement)(children)) {
    return children;
  }
  return (0, import_react14.cloneElement)(children, { [refProp]: ref });
}
FocusTrap.displayName = "@raikou/core/FocusTrap";

// src/PopoverDropdown/PopoverDropdown.tsx
var defaultProps3 = {};
var PopoverDropdown = (0, import_core8.factory)(
  (_props, ref) => {
    var _b, _c, _d, _e, _f;
    const props = (0, import_core8.useProps)("PopoverDropdown", defaultProps3, _props);
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
    const returnFocus = (0, import_hooks7.useFocusReturn)({
      opened: ctx.opened,
      shouldReturnFocus: ctx.returnFocus
    });
    const accessibleProps = ctx.withRoles ? {
      "aria-labelledby": ctx.getTargetId(),
      id: ctx.getDropdownId(),
      role: "dialog",
      tabIndex: -1
    } : {};
    const mergedRef = (0, import_hooks7.useMergedRef)(ref, ctx.floating);
    if (ctx.disabled) {
      return null;
    }
    return /* @__PURE__ */ import_react15.default.createElement(OptionalPortal, __spreadProps(__spreadValues({}, ctx.portalProps), { withinPortal: ctx.withinPortal }), /* @__PURE__ */ import_react15.default.createElement(
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
        return /* @__PURE__ */ import_react15.default.createElement(FocusTrap, { active: ctx.trapFocus }, /* @__PURE__ */ import_react15.default.createElement(
          import_core8.Box,
          __spreadValues(__spreadProps(__spreadValues(__spreadValues({}, accessibleProps), others), {
            variant,
            ref: mergedRef,
            onKeyDownCapture: (0, import_core8.closeOnEscape)(ctx.onClose, {
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
                width: ctx.width === "target" ? void 0 : (0, import_core8.rem)(ctx.width)
              }),
              style
            ]
          })),
          children,
          /* @__PURE__ */ import_react15.default.createElement(
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

// src/Popover.tsx
var defaultProps4 = {
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
  zIndex: (0, import_core9.getDefaultZIndex)("popover"),
  __staticSelector: "Popover",
  width: "max-content"
};
var varsResolver = (0, import_core9.createVarsResolver)(
  (_, { radius, shadow }) => ({
    dropdown: {
      "--popover-radius": radius === void 0 ? void 0 : (0, import_core9.getRadius)(radius),
      "--popover-shadow": (0, import_core9.getShadow)(shadow)
    }
  })
);
function Popover(_props) {
  var _b, _c, _d, _e, _f, _g;
  const props = (0, import_core9.useProps)("Popover", defaultProps4, _props);
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
  const getStyles = (0, import_core9.useStyles)({
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
    varsResolver
  });
  const arrowRef = (0, import_react16.useRef)(null);
  const [targetNode, setTargetNode] = (0, import_react16.useState)(null);
  const [dropdownNode, setDropdownNode] = (0, import_react16.useState)(null);
  const { dir } = (0, import_core9.useDirection)();
  const uid = (0, import_hooks8.useId)(id);
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
  (0, import_hooks8.useClickOutside)(
    () => closeOnClickOutside && popover.onClose(),
    clickOutsideEvents,
    [targetNode, dropdownNode]
  );
  const reference = (0, import_react16.useCallback)(
    (node) => {
      setTargetNode(node);
      popover.floating.reference(node);
    },
    [popover.floating.reference]
  );
  const floating = (0, import_react16.useCallback)(
    (node) => {
      setDropdownNode(node);
      popover.floating.floating(node);
    },
    [popover.floating.floating]
  );
  return /* @__PURE__ */ import_react16.default.createElement(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Popover,
  PopoverDropdown,
  PopoverTarget
});
