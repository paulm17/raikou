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

// src/Stepper.tsx
import React12, { Children, cloneElement } from "react";
import {
  Box as Box7,
  factory as factory3,
  useProps as useProps4,
  useStyles as useStyles3,
  createVarsResolver as createVarsResolver2,
  getThemeColor as getThemeColor3,
  rem as rem3,
  getSize as getSize2,
  getSpacing,
  getRadius,
  getFontSize
} from "@raikou/core";

// src/StepperStep/StepperStep.tsx
import React11 from "react";
import {
  factory as factory2,
  useProps as useProps3,
  getThemeColor as getThemeColor2,
  useRaikouTheme as useRaikouTheme2
} from "@raikou/core";

// ../UnstyledButton/src/UnstyledButton.tsx
import React from "react";
import {
  Box,
  useProps,
  useStyles,
  polymorphicFactory
} from "@raikou/core";
var defaultProps = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = polymorphicFactory(
  (_props, ref) => {
    const props = useProps("UnstyledButton", defaultProps, _props);
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
    const getStyles = useStyles({
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
    return /* @__PURE__ */ React.createElement(
      Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { focusable: true })), {
        component,
        ref,
        type: component === "button" ? "button" : void 0
      }), others)
    );
  }
);
UnstyledButton.displayName = "@raikou/core/UnstyledButton";

// ../Transition/src/transitions.ts
import { rem } from "@raikou/core";
var popIn = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${rem(10)})` },
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
      transform: `translateY(-${rem(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: {
      opacity: 0,
      transform: `translateY(${rem(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${rem(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${rem(20)}) rotate(5deg)` },
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
import { useState, useEffect, useRef } from "react";
import { useReducedMotion, useDidUpdate } from "@raikou/hooks";
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
  const [transitionDuration, setTransitionDuration] = useState(
    reduceMotion ? 0 : duration
  );
  const [transitionStatus, setStatus] = useState(
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
  useDidUpdate(() => {
    handleStateChange(mounted);
  }, [mounted]);
  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);
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

// ../Loader/src/Loader.tsx
import React7 from "react";
import {
  Box as Box6,
  useProps as useProps2,
  getThemeColor,
  useStyles as useStyles2,
  factory,
  getSize,
  createVarsResolver
} from "@raikou/core";

// ../Loader/src/loaders/Bars.tsx
import React3, { forwardRef } from "react";

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

// ../Loader/src/loaders/Bars.tsx
import { Box as Box2 } from "@raikou/core";
var Bars = forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React3.createElement(
      Box2,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("bars-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React3.createElement("span", { className: "bar" }),
      /* @__PURE__ */ React3.createElement("span", { className: "bar" }),
      /* @__PURE__ */ React3.createElement("span", { className: "bar" })
    );
  }
);

// ../Loader/src/loaders/Oval.tsx
import React4, { forwardRef as forwardRef2 } from "react";
import { Box as Box3 } from "@raikou/core";
var Oval = forwardRef2(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React4.createElement(
      Box3,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("oval-loader", className)
      }, others), {
        ref
      })
    );
  }
);

// ../Loader/src/loaders/Progress.tsx
import React5, { forwardRef as forwardRef3 } from "react";
import { Box as Box4 } from "@raikou/core";
var Progress = forwardRef3(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React5.createElement(
      Box4,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("progress-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React5.createElement("svg", { viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ React5.createElement("g", { fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ React5.createElement("g", { transform: "translate(2.5 2.5)", strokeWidth: "5" }, /* @__PURE__ */ React5.createElement("circle", { strokeOpacity: ".5", cx: "16", cy: "16", r: "16" }), /* @__PURE__ */ React5.createElement("path", { d: "M32 16c0-9.94-8.06-16-16-16" }, /* @__PURE__ */ React5.createElement(
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

// ../Loader/src/loaders/Dots.tsx
import React6, { forwardRef as forwardRef4 } from "react";
import { Box as Box5 } from "@raikou/core";
var Dots = forwardRef4(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React6.createElement(
      Box5,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("dots-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React6.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React6.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React6.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React6.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React6.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React6.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React6.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React6.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React6.createElement("span", { className: "dot" })
    );
  }
);

// ../Loader/src/Loader.tsx
var defaultLoaders = {
  bars: Bars,
  oval: Oval,
  dots: Dots,
  progress: Progress
};
var defaultProps2 = {
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
  const props = useProps2("Loader", defaultProps2, _props);
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
  const getStyles = useStyles2({
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
  return /* @__PURE__ */ React7.createElement(
    Box6,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      ref,
      component: loaders[type],
      variant,
      size
    }), others)
  );
});
Loader.displayName = "@raikou/core/Loader";

// ../_utils/create-safe-context/create-safe-context.tsx
import React8, { createContext, useContext } from "react";
function createSafeContext(errorMessage) {
  const Context = createContext(null);
  const useSafeContext = () => {
    const ctx = useContext(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ React8.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../_utils/create-optional-context/create-optional-context.tsx
import React9, { createContext as createContext2, useContext as useContext2 } from "react";

// ../_utils/use-hovered/use-hovered.ts
import { useState as useState2 } from "react";

// ../_utils/create-use-external-events/create-use-external-events.ts
import { useEffect as useEffect2, useLayoutEffect } from "react";

// ../Checkbox/src/CheckIcon.tsx
import React10 from "react";
import { rem as rem2 } from "@raikou/core";
function CheckIcon(_a) {
  var _b = _a, { size, style } = _b, others = __objRest(_b, ["size", "style"]);
  const _style = size !== void 0 ? __spreadValues({ width: rem2(size), height: rem2(size) }, style) : style;
  return /* @__PURE__ */ React10.createElement(
    "svg",
    __spreadValues({
      className: "icon",
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: _style
    }, others),
    /* @__PURE__ */ React10.createElement(
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

// src/Stepper.context.ts
var [StepperProvider, useStepperContext] = createSafeContext(
  "Stepper component was not found in tree"
);

// src/StepperStep/StepperStep.tsx
var getStepFragment = (Fragment, step) => {
  if (typeof Fragment === "function") {
    return /* @__PURE__ */ React11.createElement(Fragment, { step: step || 0 });
  }
  return Fragment;
};
var defaultProps3 = {
  withIcon: true,
  allowStepClick: true,
  iconPosition: "left"
};
var StepperStep = factory2((props, ref) => {
  const _a = useProps3("StepperStep", defaultProps3, props), {
    classNames,
    className,
    style,
    styles,
    vars,
    step,
    state,
    color,
    icon,
    completedIcon,
    progressIcon,
    label,
    description,
    withIcon,
    iconSize,
    loading,
    allowStepClick,
    allowStepSelect,
    iconPosition,
    orientation
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "vars",
    "step",
    "state",
    "color",
    "icon",
    "completedIcon",
    "progressIcon",
    "label",
    "description",
    "withIcon",
    "iconSize",
    "loading",
    "allowStepClick",
    "allowStepSelect",
    "iconPosition",
    "orientation"
  ]);
  const ctx = useStepperContext();
  const theme = useRaikouTheme2();
  const stylesApi = { classNames, styles };
  const _icon = state === "stepCompleted" ? null : state === "stepProgress" ? progressIcon : icon;
  const dataAttributes = {
    "data-progress": state === "stepProgress" || void 0,
    "data-completed": state === "stepCompleted" || void 0
  };
  return /* @__PURE__ */ React11.createElement(
    UnstyledButton,
    __spreadProps(__spreadValues(__spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("step", __spreadValues({
      className,
      style,
      variant: ctx.orientation
    }, stylesApi))), {
      mod: {
        "icon-position": iconPosition || ctx.iconPosition,
        "allow-click": allowStepClick
      },
      ref
    }), dataAttributes), others), {
      __vars: {
        "--step-color": color ? getThemeColor2(color, theme) : void 0
      },
      tabIndex: allowStepClick ? 0 : -1
    }),
    withIcon && /* @__PURE__ */ React11.createElement("span", __spreadValues({}, ctx.getStyles("stepWrapper", stylesApi)), /* @__PURE__ */ React11.createElement("span", __spreadValues(__spreadValues({}, ctx.getStyles("stepIcon", stylesApi)), dataAttributes), /* @__PURE__ */ React11.createElement(
      Transition,
      {
        mounted: state === "stepCompleted",
        transition: "pop",
        duration: 200
      },
      (transitionStyles) => /* @__PURE__ */ React11.createElement(
        "span",
        __spreadValues({}, ctx.getStyles("stepCompletedIcon", __spreadValues({
          style: transitionStyles
        }, stylesApi))),
        loading ? /* @__PURE__ */ React11.createElement(
          Loader,
          __spreadValues({
            color: "var(--raikou-color-white)",
            size: "calc(var(--stepper-icon-size) / 2)"
          }, ctx.getStyles("stepLoader", stylesApi))
        ) : getStepFragment(completedIcon, step) || /* @__PURE__ */ React11.createElement(CheckIcon, { size: "60%" })
      )
    ), state !== "stepCompleted" ? loading ? /* @__PURE__ */ React11.createElement(
      Loader,
      __spreadProps(__spreadValues({}, ctx.getStyles("stepLoader", stylesApi)), {
        size: "calc(var(--stepper-icon-size) / 2)",
        color
      })
    ) : getStepFragment(_icon || icon, step) : null), orientation === "vertical" && /* @__PURE__ */ React11.createElement(
      "span",
      __spreadProps(__spreadValues({}, ctx.getStyles("verticalSeparator", stylesApi)), {
        "data-active": state === "stepCompleted" || void 0
      })
    )),
    (label || description) && /* @__PURE__ */ React11.createElement(
      "span",
      __spreadProps(__spreadValues({}, ctx.getStyles("stepBody", stylesApi)), {
        "data-orientation": ctx.orientation,
        "data-icon-position": iconPosition || ctx.iconPosition
      }),
      label && /* @__PURE__ */ React11.createElement("span", __spreadValues({}, ctx.getStyles("stepLabel", stylesApi)), getStepFragment(label, step)),
      description && /* @__PURE__ */ React11.createElement("span", __spreadValues({}, ctx.getStyles("stepDescription", stylesApi)), getStepFragment(description, step))
    )
  );
});
StepperStep.displayName = "@raikou/core/StepperStep";

// src/StepperCompleted/StepperCompleted.tsx
var StepperCompleted = () => null;
StepperCompleted.displayName = "@raikou/core/StepperCompleted";

// src/Stepper.tsx
var defaultProps4 = {
  contentPadding: "md",
  size: "md",
  radius: "xl",
  orientation: "horizontal",
  iconPosition: "left",
  allowNextStepsSelect: true,
  wrap: true
};
var varsResolver2 = createVarsResolver2(
  (theme, { color, iconSize, size, contentPadding, radius }) => ({
    root: {
      "--stepper-color": getThemeColor3(color, theme),
      "--stepper-icon-size": iconSize === void 0 ? getSize2(size, "stepper-icon-size") : rem3(iconSize),
      "--stepper-content-padding": getSpacing(contentPadding),
      "--stepper-radius": getRadius(radius),
      "--stepper-fz": getFontSize(size),
      "--stepper-spacing": getSpacing(size)
    }
  })
);
var Stepper = factory3((_props, ref) => {
  var _b, _c, _d;
  const props = useProps4("Stepper", defaultProps4, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    onStepClick,
    active,
    icon,
    completedIcon,
    progressIcon,
    color,
    iconSize,
    contentPadding,
    orientation,
    iconPosition,
    size,
    radius,
    allowNextStepsSelect,
    wrap
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "children",
    "onStepClick",
    "active",
    "icon",
    "completedIcon",
    "progressIcon",
    "color",
    "iconSize",
    "contentPadding",
    "orientation",
    "iconPosition",
    "size",
    "radius",
    "allowNextStepsSelect",
    "wrap"
  ]);
  const getStyles = useStyles3({
    name: "Stepper",
    classes: {
      root: "stepper-root",
      steps: "stepper-steps",
      separator: "stepper-separator",
      content: "stepper-content",
      step: "stepper-step",
      stepWrapper: "stepper-stepWrapper",
      verticalSeparator: "stepper-verticalSeparator",
      stepIcon: "stepper-stepIcon",
      stepCompletedIcon: "stepper-stepCompletedIcon",
      stepBody: "stepper-stepBody",
      stepLabel: "stepper-stepLabel",
      stepDescription: "stepper-stepDescription",
      stepLoader: "stepper-stepLoader"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver2
  });
  const convertedChildren = Children.toArray(children);
  const _children = convertedChildren.filter(
    (child) => child.type !== StepperCompleted
  );
  const completedStep = convertedChildren.find(
    (item) => item.type === StepperCompleted
  );
  const items = _children.reduce((acc, item, index) => {
    const state = active === index ? "stepProgress" : active > index ? "stepCompleted" : "stepInactive";
    const shouldAllowSelect = () => {
      if (typeof onStepClick !== "function") {
        return false;
      }
      if (typeof item.props.allowStepSelect === "boolean") {
        return item.props.allowStepSelect;
      }
      return state === "stepCompleted" || allowNextStepsSelect;
    };
    const isStepSelectionEnabled = shouldAllowSelect();
    acc.push(
      cloneElement(item, {
        icon: item.props.icon || icon || index + 1,
        key: index,
        step: index,
        state,
        onClick: () => isStepSelectionEnabled && (onStepClick == null ? void 0 : onStepClick(index)),
        allowStepClick: isStepSelectionEnabled,
        completedIcon: item.props.completedIcon || completedIcon,
        progressIcon: item.props.progressIcon || progressIcon,
        color: item.props.color || color,
        iconSize,
        radius,
        iconPosition: item.props.iconPosition || iconPosition,
        orientation,
        unstyled
      })
    );
    if (orientation === "horizontal" && index !== _children.length - 1) {
      acc.push(
        /* @__PURE__ */ React12.createElement(
          "div",
          __spreadProps(__spreadValues({}, getStyles("separator")), {
            "data-active": index < active || void 0,
            "data-orientation": orientation,
            key: `separator-${index}`
          })
        )
      );
    }
    return acc;
  }, []);
  const stepContent = (_c = (_b = _children[active]) == null ? void 0 : _b.props) == null ? void 0 : _c.children;
  const completedContent = (_d = completedStep == null ? void 0 : completedStep.props) == null ? void 0 : _d.children;
  const content = active > _children.length - 1 ? completedContent : stepContent;
  return /* @__PURE__ */ React12.createElement(StepperProvider, { value: { getStyles, orientation, iconPosition } }, /* @__PURE__ */ React12.createElement(Box7, __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), { ref, size }), others), /* @__PURE__ */ React12.createElement(
    Box7,
    __spreadProps(__spreadValues({}, getStyles("steps")), {
      mod: {
        orientation,
        "icon-position": iconPosition,
        wrap: wrap && orientation !== "vertical"
      }
    }),
    items
  ), content && /* @__PURE__ */ React12.createElement("div", __spreadValues({}, getStyles("content")), content)));
});
Stepper.displayName = "@raikou/core/Stepper";
Stepper.Completed = StepperCompleted;
Stepper.Step = StepperStep;
export {
  Stepper,
  StepperCompleted,
  StepperStep
};
