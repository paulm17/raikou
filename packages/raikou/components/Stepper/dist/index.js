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
  Stepper: () => Stepper,
  StepperCompleted: () => StepperCompleted,
  StepperStep: () => StepperStep
});
module.exports = __toCommonJS(src_exports);

// src/Stepper.tsx
var import_react15 = __toESM(require("react"));
var import_core11 = require("@raikou/core");

// src/StepperStep/StepperStep.tsx
var import_react14 = __toESM(require("react"));
var import_core10 = require("@raikou/core");

// ../UnstyledButton/src/UnstyledButton.tsx
var import_react = __toESM(require("react"));
var import_core = require("@raikou/core");
var defaultProps = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = (0, import_core.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core.useProps)("UnstyledButton", defaultProps, _props);
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
    const getStyles = (0, import_core.useStyles)({
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
    return /* @__PURE__ */ import_react.default.createElement(
      import_core.Box,
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
var import_core2 = require("@raikou/core");
var popIn = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${(0, import_core2.rem)(10)})` },
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
      transform: `translateY(-${(0, import_core2.rem)(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: {
      opacity: 0,
      transform: `translateY(${(0, import_core2.rem)(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${(0, import_core2.rem)(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${(0, import_core2.rem)(20)}) rotate(5deg)` },
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
var import_react3 = __toESM(require("react"));

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
var import_react2 = require("react");
var import_hooks = require("@raikou/hooks");
var import_core3 = require("@raikou/core");
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
  const theme = (0, import_core3.useRaikouTheme)();
  const shouldReduceMotion = (0, import_hooks.useReducedMotion)();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionDuration, setTransitionDuration] = (0, import_react2.useState)(
    reduceMotion ? 0 : duration
  );
  const [transitionStatus, setStatus] = (0, import_react2.useState)(
    mounted ? "entered" : "exited"
  );
  const timeoutRef = (0, import_react2.useRef)(-1);
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
  (0, import_hooks.useDidUpdate)(() => {
    handleStateChange(mounted);
  }, [mounted]);
  (0, import_react2.useEffect)(() => () => window.clearTimeout(timeoutRef.current), []);
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
    return mounted ? /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, children({})) : keepMounted ? children({ display: "none" }) : null;
  }
  return transitionStatus === "exited" ? keepMounted ? children({ display: "none" }) : null : /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, children(
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
var import_react8 = __toESM(require("react"));
var import_core8 = require("@raikou/core");

// ../Loader/src/loaders/Bars.tsx
var import_react4 = __toESM(require("react"));

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
var import_core4 = require("@raikou/core");
var Bars = (0, import_react4.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react4.default.createElement(
      import_core4.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("bars-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "bar" }),
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "bar" }),
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "bar" })
    );
  }
);

// ../Loader/src/loaders/Oval.tsx
var import_react5 = __toESM(require("react"));
var import_core5 = require("@raikou/core");
var Oval = (0, import_react5.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react5.default.createElement(
      import_core5.Box,
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
var import_react6 = __toESM(require("react"));
var import_core6 = require("@raikou/core");
var Progress = (0, import_react6.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react6.default.createElement(
      import_core6.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("progress-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react6.default.createElement("svg", { viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ import_react6.default.createElement("g", { fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ import_react6.default.createElement("g", { transform: "translate(2.5 2.5)", strokeWidth: "5" }, /* @__PURE__ */ import_react6.default.createElement("circle", { strokeOpacity: ".5", cx: "16", cy: "16", r: "16" }), /* @__PURE__ */ import_react6.default.createElement("path", { d: "M32 16c0-9.94-8.06-16-16-16" }, /* @__PURE__ */ import_react6.default.createElement(
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
var import_react7 = __toESM(require("react"));
var import_core7 = require("@raikou/core");
var Dots = (0, import_react7.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react7.default.createElement(
      import_core7.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("dots-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react7.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react7.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react7.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react7.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react7.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react7.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react7.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react7.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react7.default.createElement("span", { className: "dot" })
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
var varsResolver = (0, import_core8.createVarsResolver)(
  (theme, { size, color }) => ({
    root: {
      "--loader-size": (0, import_core8.getSize)(size, "loader-size"),
      "--loader-color": (0, import_core8.getThemeColor)(color, theme)
    }
  })
);
var Loader = (0, import_core8.factory)((_props, ref) => {
  const props = (0, import_core8.useProps)("Loader", defaultProps2, _props);
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
  const getStyles = (0, import_core8.useStyles)({
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
  return /* @__PURE__ */ import_react8.default.createElement(
    import_core8.Box,
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
var import_react9 = __toESM(require("react"));
function createSafeContext(errorMessage) {
  const Context = (0, import_react9.createContext)(null);
  const useSafeContext = () => {
    const ctx = (0, import_react9.useContext)(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react9.default.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../_utils/create-optional-context/create-optional-context.tsx
var import_react10 = __toESM(require("react"));

// ../_utils/use-hovered/use-hovered.ts
var import_react11 = require("react");

// ../_utils/create-use-external-events/create-use-external-events.ts
var import_react12 = require("react");

// ../Checkbox/src/CheckIcon.tsx
var import_react13 = __toESM(require("react"));
var import_core9 = require("@raikou/core");
function CheckIcon(_a) {
  var _b = _a, { size, style } = _b, others = __objRest(_b, ["size", "style"]);
  const _style = size !== void 0 ? __spreadValues({ width: (0, import_core9.rem)(size), height: (0, import_core9.rem)(size) }, style) : style;
  return /* @__PURE__ */ import_react13.default.createElement(
    "svg",
    __spreadValues({
      className: "icon",
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: _style
    }, others),
    /* @__PURE__ */ import_react13.default.createElement(
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
    return /* @__PURE__ */ import_react14.default.createElement(Fragment, { step: step || 0 });
  }
  return Fragment;
};
var defaultProps3 = {
  withIcon: true,
  allowStepClick: true,
  iconPosition: "left"
};
var StepperStep = (0, import_core10.factory)((props, ref) => {
  const _a = (0, import_core10.useProps)("StepperStep", defaultProps3, props), {
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
  const theme = (0, import_core10.useRaikouTheme)();
  const stylesApi = { classNames, styles };
  const _icon = state === "stepCompleted" ? null : state === "stepProgress" ? progressIcon : icon;
  const dataAttributes = {
    "data-progress": state === "stepProgress" || void 0,
    "data-completed": state === "stepCompleted" || void 0
  };
  return /* @__PURE__ */ import_react14.default.createElement(
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
        "--step-color": color ? (0, import_core10.getThemeColor)(color, theme) : void 0
      },
      tabIndex: allowStepClick ? 0 : -1
    }),
    withIcon && /* @__PURE__ */ import_react14.default.createElement("span", __spreadValues({}, ctx.getStyles("stepWrapper", stylesApi)), /* @__PURE__ */ import_react14.default.createElement("span", __spreadValues(__spreadValues({}, ctx.getStyles("stepIcon", stylesApi)), dataAttributes), /* @__PURE__ */ import_react14.default.createElement(
      Transition,
      {
        mounted: state === "stepCompleted",
        transition: "pop",
        duration: 200
      },
      (transitionStyles) => /* @__PURE__ */ import_react14.default.createElement(
        "span",
        __spreadValues({}, ctx.getStyles("stepCompletedIcon", __spreadValues({
          style: transitionStyles
        }, stylesApi))),
        loading ? /* @__PURE__ */ import_react14.default.createElement(
          Loader,
          __spreadValues({
            color: "var(--raikou-color-white)",
            size: "calc(var(--stepper-icon-size) / 2)"
          }, ctx.getStyles("stepLoader", stylesApi))
        ) : getStepFragment(completedIcon, step) || /* @__PURE__ */ import_react14.default.createElement(CheckIcon, { size: "60%" })
      )
    ), state !== "stepCompleted" ? loading ? /* @__PURE__ */ import_react14.default.createElement(
      Loader,
      __spreadProps(__spreadValues({}, ctx.getStyles("stepLoader", stylesApi)), {
        size: "calc(var(--stepper-icon-size) / 2)",
        color
      })
    ) : getStepFragment(_icon || icon, step) : null), orientation === "vertical" && /* @__PURE__ */ import_react14.default.createElement(
      "span",
      __spreadProps(__spreadValues({}, ctx.getStyles("verticalSeparator", stylesApi)), {
        "data-active": state === "stepCompleted" || void 0
      })
    )),
    (label || description) && /* @__PURE__ */ import_react14.default.createElement(
      "span",
      __spreadProps(__spreadValues({}, ctx.getStyles("stepBody", stylesApi)), {
        "data-orientation": ctx.orientation,
        "data-icon-position": iconPosition || ctx.iconPosition
      }),
      label && /* @__PURE__ */ import_react14.default.createElement("span", __spreadValues({}, ctx.getStyles("stepLabel", stylesApi)), getStepFragment(label, step)),
      description && /* @__PURE__ */ import_react14.default.createElement("span", __spreadValues({}, ctx.getStyles("stepDescription", stylesApi)), getStepFragment(description, step))
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
var varsResolver2 = (0, import_core11.createVarsResolver)(
  (theme, { color, iconSize, size, contentPadding, radius }) => ({
    root: {
      "--stepper-color": (0, import_core11.getThemeColor)(color, theme),
      "--stepper-icon-size": iconSize === void 0 ? (0, import_core11.getSize)(size, "stepper-icon-size") : (0, import_core11.rem)(iconSize),
      "--stepper-content-padding": (0, import_core11.getSpacing)(contentPadding),
      "--stepper-radius": (0, import_core11.getRadius)(radius),
      "--stepper-fz": (0, import_core11.getFontSize)(size),
      "--stepper-spacing": (0, import_core11.getSpacing)(size)
    }
  })
);
var Stepper = (0, import_core11.factory)((_props, ref) => {
  var _b, _c, _d;
  const props = (0, import_core11.useProps)("Stepper", defaultProps4, _props);
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
  const getStyles = (0, import_core11.useStyles)({
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
  const convertedChildren = import_react15.Children.toArray(children);
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
      (0, import_react15.cloneElement)(item, {
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
        /* @__PURE__ */ import_react15.default.createElement(
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
  return /* @__PURE__ */ import_react15.default.createElement(StepperProvider, { value: { getStyles, orientation, iconPosition } }, /* @__PURE__ */ import_react15.default.createElement(import_core11.Box, __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), { ref, size }), others), /* @__PURE__ */ import_react15.default.createElement(
    import_core11.Box,
    __spreadProps(__spreadValues({}, getStyles("steps")), {
      mod: {
        orientation,
        "icon-position": iconPosition,
        wrap: wrap && orientation !== "vertical"
      }
    }),
    items
  ), content && /* @__PURE__ */ import_react15.default.createElement("div", __spreadValues({}, getStyles("content")), content)));
});
Stepper.displayName = "@raikou/core/Stepper";
Stepper.Completed = StepperCompleted;
Stepper.Step = StepperStep;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Stepper,
  StepperCompleted,
  StepperStep
});
