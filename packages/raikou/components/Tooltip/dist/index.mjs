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

// src/Tooltip.tsx
import React7, { cloneElement as cloneElement2, useRef as useRef4 } from "react";
import { useMergedRef as useMergedRef2 } from "@raikou/hooks";
import cx from "clsx";
import {
  Box as Box2,
  factory as factory2,
  getDefaultZIndex as getDefaultZIndex2,
  isElement as isElement2,
  useProps as useProps4,
  useDirection as useDirection2,
  useStyles as useStyles2,
  getThemeColor as getThemeColor2,
  getRadius as getRadius2,
  createVarsResolver as createVarsResolver2
} from "@raikou/core";

// ../Floating/src/use-floating-auto-update.ts
import { useState, useEffect } from "react";
import { autoUpdate } from "@floating-ui/react";
import { useDidUpdate } from "@raikou/hooks";
function useFloatingAutoUpdate({
  opened,
  floating,
  position,
  positionDependencies
}) {
  const [delayedUpdate, setDelayedUpdate] = useState(0);
  useEffect(() => {
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
import React, { forwardRef } from "react";
import { useDirection } from "@raikou/core";

// ../Floating/src/FloatingArrow/get-arrow-position-styles.ts
import { rem } from "@raikou/core";
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
    width: rem(arrowSize),
    height: rem(arrowSize),
    transform: "rotate(45deg)",
    position: "absolute",
    [radiusByFloatingSide[side]]: rem(arrowRadius)
  };
  const arrowPlacement = rem(-arrowSize / 2);
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
var FloatingArrow = forwardRef(
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
    const { dir } = useDirection();
    if (!visible) {
      return null;
    }
    return /* @__PURE__ */ React.createElement(
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
import { rem as rem2 } from "@raikou/core";
var popIn = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${rem2(10)})` },
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
      transform: `translateY(-${rem2(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: {
      opacity: 0,
      transform: `translateY(${rem2(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${rem2(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${rem2(20)}) rotate(5deg)` },
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
import React2 from "react";

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
import { useState as useState2, useEffect as useEffect2, useRef } from "react";
import { useReducedMotion, useDidUpdate as useDidUpdate2 } from "@raikou/hooks";
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
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionDuration, setTransitionDuration] = useState2(
    reduceMotion ? 0 : duration
  );
  const [transitionStatus, setStatus] = useState2(
    mounted ? "entered" : "exited"
  );
  const timeoutRef = useRef(-1);
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
  useDidUpdate2(() => {
    handleStateChange(mounted);
  }, [mounted]);
  useEffect2(() => () => window.clearTimeout(timeoutRef.current), []);
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
    return mounted ? /* @__PURE__ */ React2.createElement(React2.Fragment, null, children({})) : keepMounted ? children({ display: "none" }) : null;
  }
  return transitionStatus === "exited" ? keepMounted ? children({ display: "none" }) : null : /* @__PURE__ */ React2.createElement(React2.Fragment, null, children(
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
import React3, { useRef as useRef2, useState as useState3, forwardRef as forwardRef2 } from "react";
import { createPortal } from "react-dom";
import { useIsomorphicEffect, assignRef } from "@raikou/hooks";
import { useProps } from "@raikou/core";
function createPortalNode(props) {
  const node = document.createElement("div");
  node.setAttribute("data-portal", "true");
  typeof props.className === "string" && node.classList.add(props.className);
  typeof props.style === "object" && Object.assign(node.style, props.style);
  typeof props.id === "string" && node.setAttribute("id", props.id);
  return node;
}
var defaultProps = {};
var Portal = forwardRef2((props, ref) => {
  const _a = useProps(
    "Portal",
    defaultProps,
    props
  ), { children, target } = _a, others = __objRest(_a, ["children", "target"]);
  const [mounted, setMounted] = useState3(false);
  const nodeRef = useRef2(null);
  useIsomorphicEffect(() => {
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
  return createPortal(/* @__PURE__ */ React3.createElement(React3.Fragment, null, children), nodeRef.current);
});
Portal.displayName = "@raikou/core/Portal";

// ../Portal/src/OptionalPortal.tsx
import React4 from "react";
function OptionalPortal(_a) {
  var _b = _a, {
    withinPortal = true,
    children
  } = _b, others = __objRest(_b, [
    "withinPortal",
    "children"
  ]);
  if (withinPortal) {
    return /* @__PURE__ */ React4.createElement(Portal, __spreadValues({}, others), children);
  }
  return /* @__PURE__ */ React4.createElement(React4.Fragment, null, children);
}
OptionalPortal.displayName = "@raikou/core/OptionalPortal";

// src/TooltipFloating/TooltipFloating.tsx
import React5, { cloneElement } from "react";
import { useMergedRef } from "@raikou/hooks";
import {
  Box,
  factory,
  getDefaultZIndex,
  isElement,
  useProps as useProps2,
  useStyles,
  getStyleObject,
  createVarsResolver,
  getRadius,
  getThemeColor,
  useRaikouTheme as useRaikouTheme2
} from "@raikou/core";

// src/TooltipFloating/use-floating-tooltip.ts
import { useState as useState4, useEffect as useEffect3, useCallback, useRef as useRef3 } from "react";
import { useFloating, shift, getOverflowAncestors } from "@floating-ui/react";
function useFloatingTooltip({
  offset: offset2,
  position
}) {
  const [opened, setOpened] = useState4(false);
  const boundaryRef = useRef3();
  const { x, y, reference, floating, refs, update, placement } = useFloating({
    placement: position,
    middleware: [
      shift({
        crossAxis: true,
        padding: 5,
        rootBoundary: "document"
      })
    ]
  });
  const horizontalOffset = placement.includes("right") ? offset2 : position.includes("left") ? offset2 * -1 : 0;
  const verticalOffset = placement.includes("bottom") ? offset2 : position.includes("top") ? offset2 * -1 : 0;
  const handleMouseMove = useCallback(
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
  useEffect3(() => {
    if (refs.floating.current) {
      const boundary = boundaryRef.current;
      boundary.addEventListener("mousemove", handleMouseMove);
      const parents = getOverflowAncestors(refs.floating.current);
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
  zIndex: getDefaultZIndex("popover")
};
var varsResolver = createVarsResolver(
  (theme, { radius, color }) => ({
    tooltip: {
      "--tooltip-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--tooltip-bg": color ? getThemeColor(color, theme) : void 0
    }
  })
);
var TooltipFloating = factory(
  (_props, ref) => {
    var _b, _c;
    const props = useProps2("TooltipFloating", defaultProps2, _props);
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
    const theme = useRaikouTheme2();
    const getStyles = useStyles({
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
    if (!isElement(children)) {
      throw new Error(
        "[@raikou/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
      );
    }
    const targetRef = useMergedRef(boundaryRef, children.ref, ref);
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
    return /* @__PURE__ */ React5.createElement(React5.Fragment, null, /* @__PURE__ */ React5.createElement(OptionalPortal, __spreadProps(__spreadValues({}, portalProps), { withinPortal }), /* @__PURE__ */ React5.createElement(
      Box,
      __spreadProps(__spreadValues(__spreadValues({}, others), getStyles("tooltip", {
        style: __spreadProps(__spreadValues({}, getStyleObject(style, theme)), {
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
    )), cloneElement(children, __spreadProps(__spreadValues({}, children.props), {
      [refProp]: targetRef,
      onMouseEnter,
      onMouseLeave
    })));
  }
);
TooltipFloating.displayName = "@raikou/core/TooltipFloating";

// src/TooltipGroup/TooltipGroup.tsx
import React6 from "react";
import { FloatingDelayGroup } from "@floating-ui/react";
import { useProps as useProps3 } from "@raikou/core";

// src/TooltipGroup/TooltipGroup.context.ts
import { createContext, useContext } from "react";
var TooltipGroupContext = createContext(false);
var TooltipGroupProvider = TooltipGroupContext.Provider;
var useTooltipGroupContext = () => useContext(TooltipGroupContext);

// src/TooltipGroup/TooltipGroup.tsx
var defaultProps3 = {
  openDelay: 0,
  closeDelay: 0
};
function TooltipGroup(props) {
  const { openDelay, closeDelay, children } = useProps3(
    "TooltipGroup",
    defaultProps3,
    props
  );
  return /* @__PURE__ */ React6.createElement(TooltipGroupProvider, { value: true }, /* @__PURE__ */ React6.createElement(FloatingDelayGroup, { delay: { open: openDelay, close: closeDelay } }, children));
}
TooltipGroup.displayName = "@raikou/core/TooltipGroup";

// src/use-tooltip.ts
import { useState as useState5, useCallback as useCallback2 } from "react";
import {
  useFloating as useFloating2,
  flip,
  arrow,
  offset,
  shift as shift2,
  useInteractions,
  useHover,
  useFocus,
  useRole,
  useDismiss,
  useDelayGroupContext,
  useDelayGroup,
  inline
} from "@floating-ui/react";
import { useId, useDidUpdate as useDidUpdate3 } from "@raikou/hooks";
function useTooltip(settings) {
  var _a, _b, _c;
  const [uncontrolledOpened, setUncontrolledOpened] = useState5(false);
  const controlled = typeof settings.opened === "boolean";
  const opened = controlled ? settings.opened : uncontrolledOpened;
  const withinGroup = useTooltipGroupContext();
  const uid = useId();
  const { delay: groupDelay, currentId, setCurrentId } = useDelayGroupContext();
  const onChange = useCallback2(
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
  } = useFloating2({
    placement: settings.position,
    open: opened,
    onOpenChange: onChange,
    middleware: [
      offset(settings.offset),
      shift2({ padding: 8 }),
      flip(),
      arrow({ element: settings.arrowRef, padding: settings.arrowOffset }),
      ...settings.inline ? [inline()] : []
    ]
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, {
      enabled: (_a = settings.events) == null ? void 0 : _a.hover,
      delay: withinGroup ? groupDelay : { open: settings.openDelay, close: settings.closeDelay },
      mouseOnly: !((_b = settings.events) == null ? void 0 : _b.touch)
    }),
    useFocus(context, { enabled: (_c = settings.events) == null ? void 0 : _c.focus, keyboardOnly: true }),
    useRole(context, { role: "tooltip" }),
    // cannot be used with controlled tooltip, page jumps
    useDismiss(context, { enabled: typeof settings.opened === void 0 }),
    useDelayGroup(context, { id: uid })
  ]);
  useFloatingAutoUpdate({
    opened,
    position: settings.position,
    positionDependencies: settings.positionDependencies,
    floating: { refs, update }
  });
  useDidUpdate3(() => {
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
  zIndex: getDefaultZIndex2("popover"),
  positionDependencies: []
};
var varsResolver2 = createVarsResolver2(
  (theme, { radius, color }) => ({
    tooltip: {
      "--tooltip-radius": radius === void 0 ? void 0 : getRadius2(radius),
      "--tooltip-bg": color ? getThemeColor2(color, theme) : void 0
    }
  })
);
var Tooltip = factory2((_props, ref) => {
  const props = useProps4("Tooltip", defaultProps4, _props);
  const _a = useProps4("Tooltip", defaultProps4, props), {
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
  const { dir } = useDirection2();
  const arrowRef = useRef4(null);
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
  const getStyles = useStyles2({
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
  if (!isElement2(children)) {
    throw new Error(
      "[@raikou/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const targetRef = useMergedRef2(tooltip.reference, children.ref, ref);
  const transition = getTransitionProps(transitionProps, {
    duration: 100,
    transition: "fade"
  });
  return /* @__PURE__ */ React7.createElement(React7.Fragment, null, /* @__PURE__ */ React7.createElement(OptionalPortal, __spreadProps(__spreadValues({}, portalProps), { withinPortal }), /* @__PURE__ */ React7.createElement(
    Transition,
    __spreadProps(__spreadValues({}, transition), {
      keepMounted,
      mounted: !disabled && !!tooltip.opened,
      duration: tooltip.isGroupPhase ? 10 : transition.duration
    }),
    (transitionStyles) => {
      var _a2, _b;
      return /* @__PURE__ */ React7.createElement(
        Box2,
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
        /* @__PURE__ */ React7.createElement(
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
  )), cloneElement2(
    children,
    tooltip.getReferenceProps(__spreadValues({
      onClick,
      onMouseEnter,
      onMouseLeave,
      onMouseMove: props.onMouseMove,
      onPointerDown: props.onPointerDown,
      onPointerEnter: props.onPointerEnter,
      [refProp]: targetRef,
      className: cx(className, children.props.className)
    }, children.props))
  ));
});
Tooltip.displayName = "@raikou/core/Tooltip";
Tooltip.Floating = TooltipFloating;
Tooltip.Group = TooltipGroup;
export {
  Tooltip,
  TooltipFloating,
  TooltipGroup
};
