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
  Dropzone: () => Dropzone2,
  DropzoneAccept: () => DropzoneAccept,
  DropzoneFullScreen: () => DropzoneFullScreen,
  DropzoneIdle: () => DropzoneIdle,
  DropzoneReject: () => DropzoneReject,
  EXE_MIME_TYPE: () => EXE_MIME_TYPE,
  IMAGE_MIME_TYPE: () => IMAGE_MIME_TYPE,
  MIME_TYPES: () => MIME_TYPES,
  MS_EXCEL_MIME_TYPE: () => MS_EXCEL_MIME_TYPE,
  MS_POWERPOINT_MIME_TYPE: () => MS_POWERPOINT_MIME_TYPE,
  MS_WORD_MIME_TYPE: () => MS_WORD_MIME_TYPE,
  PDF_MIME_TYPE: () => PDF_MIME_TYPE
});
module.exports = __toCommonJS(src_exports);

// src/DropzoneFullScreen.tsx
var import_react16 = __toESM(require("react"));
var import_core12 = require("@raikou/core");

// ../components/Portal/src/Portal.tsx
var import_react = __toESM(require("react"));
var import_react_dom = require("react-dom");
var import_hooks = require("@raikou/hooks");
var import_core = require("@raikou/core");
var defaultProps = {};
var Portal = (0, import_react.forwardRef)((props, ref) => {
  const _a = (0, import_core.useProps)(
    "Portal",
    defaultProps,
    props
  ), { children, target, className } = _a, others = __objRest(_a, ["children", "target", "className"]);
  const [mounted, setMounted] = (0, import_react.useState)(false);
  const nodeRef = (0, import_react.useRef)(null);
  (0, import_hooks.useIsomorphicEffect)(() => {
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
    /* @__PURE__ */ import_react.default.createElement("div", __spreadValues({ className, ref }, others), children),
    nodeRef.current
  );
});
Portal.displayName = "@raikou/core/Portal";

// ../components/Portal/src/OptionalPortal.tsx
var import_react2 = __toESM(require("react"));
function OptionalPortal(_a) {
  var _b = _a, {
    withinPortal = true,
    children
  } = _b, others = __objRest(_b, [
    "withinPortal",
    "children"
  ]);
  if (withinPortal) {
    return /* @__PURE__ */ import_react2.default.createElement(Portal, __spreadValues({}, others), children);
  }
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, children);
}
OptionalPortal.displayName = "@raikou/core/OptionalPortal";

// src/DropzoneFullScreen.tsx
var import_hooks5 = require("@raikou/hooks");

// src/Dropzone.tsx
var import_react15 = __toESM(require("react"));
var import_react_dropzone = require("react-dropzone");
var import_core11 = require("@raikou/core");

// ../components/LoadingOverlay/src/LoadingOverlay.tsx
var import_react10 = __toESM(require("react"));
var import_core9 = require("@raikou/core");

// ../components/Transition/src/transitions.ts
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

// ../components/Transition/src/Transition.tsx
var import_react4 = __toESM(require("react"));

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
var import_react3 = require("react");
var import_hooks2 = require("@raikou/hooks");
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
  const shouldReduceMotion = (0, import_hooks2.useReducedMotion)();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionDuration, setTransitionDuration] = (0, import_react3.useState)(
    reduceMotion ? 0 : duration
  );
  const [transitionStatus, setStatus] = (0, import_react3.useState)(
    mounted ? "entered" : "exited"
  );
  const timeoutRef = (0, import_react3.useRef)(-1);
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
  (0, import_react3.useEffect)(() => () => window.clearTimeout(timeoutRef.current), []);
  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || "ease"
  };
}

// ../components/Transition/src/Transition.tsx
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
    return mounted ? /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, children({})) : keepMounted ? children({ display: "none" }) : null;
  }
  return transitionStatus === "exited" ? keepMounted ? children({ display: "none" }) : null : /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, children(
    getTransitionStyles({
      transition,
      duration: transitionDuration,
      state: transitionStatus,
      timingFunction: transitionTimingFunction
    })
  ));
}
Transition.displayName = "@raikou/core/Transition";

// ../components/Loader/src/Loader.tsx
var import_react8 = __toESM(require("react"));
var import_core7 = require("@raikou/core");

// ../components/Loader/src/loaders/Bars.tsx
var import_react5 = __toESM(require("react"));

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

// ../components/Loader/src/loaders/Bars.tsx
var import_core4 = require("@raikou/core");
var Bars = (0, import_react5.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react5.default.createElement(
      import_core4.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("bars-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react5.default.createElement("span", { className: "bar" }),
      /* @__PURE__ */ import_react5.default.createElement("span", { className: "bar" }),
      /* @__PURE__ */ import_react5.default.createElement("span", { className: "bar" })
    );
  }
);

// ../components/Loader/src/loaders/Oval.tsx
var import_react6 = __toESM(require("react"));
var import_core5 = require("@raikou/core");
var Oval = (0, import_react6.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react6.default.createElement(
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

// ../components/Loader/src/loaders/Dots.tsx
var import_react7 = __toESM(require("react"));
var import_core6 = require("@raikou/core");
var Dots = (0, import_react7.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react7.default.createElement(
      import_core6.Box,
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

// ../components/Loader/src/Loader.tsx
var defaultLoaders = {
  bars: Bars,
  oval: Oval,
  dots: Dots
};
var defaultProps2 = {
  size: "md",
  loaders: defaultLoaders,
  type: "oval"
};
var varsResolver = (0, import_core7.createVarsResolver)(
  (theme, { size, color }) => ({
    root: {
      "--loader-size": (0, import_core7.getSize)(size, "loader-size"),
      "--loader-color": (0, import_core7.getThemeColor)(color, theme)
    }
  })
);
var Loader = (0, import_core7.factory)((_props, ref) => {
  const props = (0, import_core7.useProps)("Loader", defaultProps2, _props);
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
  const getStyles = (0, import_core7.useStyles)({
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
    import_core7.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      ref,
      component: loaders[type],
      variant,
      size
    }), others)
  );
});
Loader.displayName = "@raikou/core/Loader";

// ../components/Overlay/src/Overlay.tsx
var import_react9 = __toESM(require("react"));
var import_core8 = require("@raikou/core");
var defaultProps3 = {
  color: "#000",
  backgroundOpacity: 0.6,
  zIndex: (0, import_core8.getDefaultZIndex)("modal"),
  radius: 0
};
var varsResolver2 = (0, import_core8.createVarsResolver)(
  (_, { gradient, color, backgroundOpacity, blur, radius, zIndex }) => ({
    root: {
      "--overlay-bg": gradient || (0, import_core8.rgba)(color || "#000", backgroundOpacity != null ? backgroundOpacity : 0.6),
      "--overlay-filter": blur ? `blur(${(0, import_core8.rem)(blur)})` : void 0,
      "--overlay-radius": (0, import_core8.getRadius)(radius),
      "--overlay-z-index": zIndex == null ? void 0 : zIndex.toString()
    }
  })
);
var Overlay = (0, import_core8.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core8.useProps)("Overlay", defaultProps3, _props);
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
  const getStyles = (0, import_core8.useStyles)({
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
    varsResolver: varsResolver2
  });
  return /* @__PURE__ */ import_react9.default.createElement(import_core8.Box, __spreadValues(__spreadProps(__spreadValues({ ref }, getStyles("root")), { mod: { center, fixed } }), others), children);
});
Overlay.displayName = "@raikou/core/Overlay";

// ../components/LoadingOverlay/src/LoadingOverlay.tsx
var defaultProps4 = {
  transitionProps: { transition: "fade", duration: 0 },
  overlayProps: { backgroundOpacity: 0.75 },
  zIndex: (0, import_core9.getDefaultZIndex)("overlay")
};
var varsResolver3 = (0, import_core9.createVarsResolver)(
  (_, { zIndex }) => ({
    root: {
      "--lo-z-index": zIndex == null ? void 0 : zIndex.toString()
    }
  })
);
var LoadingOverlay = (0, import_core9.factory)((_props, ref) => {
  const props = (0, import_core9.useProps)("LoadingOverlay", defaultProps4, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    transitionProps,
    loaderProps,
    overlayProps,
    visible,
    zIndex
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "transitionProps",
    "loaderProps",
    "overlayProps",
    "visible",
    "zIndex"
  ]);
  const theme = (0, import_core9.useRaikouTheme)();
  const getStyles = (0, import_core9.useStyles)({
    name: "LoadingOverlay",
    classes: {
      root: "loadingOverlay-root",
      loader: "loadingOverlay-loader",
      overlay: "loadingOverlay-overlay"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver3
  });
  const _overlayProps = __spreadValues(__spreadValues({}, defaultProps4.overlayProps), overlayProps);
  return /* @__PURE__ */ import_react10.default.createElement(Transition, __spreadProps(__spreadValues({ transition: "fade" }, transitionProps), { mounted: !!visible }), (transitionStyles) => /* @__PURE__ */ import_react10.default.createElement(
    import_core9.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { style: transitionStyles })), {
      ref
    }), others),
    /* @__PURE__ */ import_react10.default.createElement(Loader, __spreadValues(__spreadValues({}, getStyles("loader")), loaderProps)),
    /* @__PURE__ */ import_react10.default.createElement(
      Overlay,
      __spreadProps(__spreadValues(__spreadValues({}, _overlayProps), getStyles("overlay")), {
        "data-light": true,
        unstyled,
        color: (overlayProps == null ? void 0 : overlayProps.color) || theme.white
      })
    ),
    /* @__PURE__ */ import_react10.default.createElement(
      Overlay,
      __spreadProps(__spreadValues(__spreadValues({}, _overlayProps), getStyles("overlay")), {
        "data-dark": true,
        unstyled,
        color: (overlayProps == null ? void 0 : overlayProps.color) || theme.colors.dark[5]
      })
    )
  ));
});
LoadingOverlay.displayName = "@raikou/core/LoadingOverlay";

// src/Dropzone.tsx
var import_hooks4 = require("@raikou/hooks");

// ../components/_utils/create-safe-context/create-safe-context.tsx
var import_react11 = __toESM(require("react"));
function createSafeContext(errorMessage) {
  const Context = (0, import_react11.createContext)(null);
  const useSafeContext = () => {
    const ctx = (0, import_react11.useContext)(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react11.default.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../components/_utils/create-optional-context/create-optional-context.tsx
var import_react12 = __toESM(require("react"));

// ../components/_utils/use-hovered/use-hovered.ts
var import_react13 = require("react");

// src/Dropzone.context.ts
var [DropzoneProvider, useDropzoneContext] = createSafeContext(
  "Dropzone component was not found in tree"
);

// src/DropzoneStatus.tsx
var import_react14 = __toESM(require("react"));
var import_hooks3 = require("@raikou/hooks");
var import_core10 = require("@raikou/core");
function createDropzoneStatus(status) {
  const Component = (props) => {
    const _a = (0, import_core10.useProps)(
      `Dropzone${(0, import_hooks3.upperFirst)(status)}`,
      {},
      props
    ), { children } = _a, others = __objRest(_a, ["children"]);
    const ctx = useDropzoneContext();
    const _children = (0, import_core10.isElement)(children) ? children : /* @__PURE__ */ import_react14.default.createElement("span", null, children);
    if (ctx[status]) {
      return (0, import_react14.cloneElement)(_children, others);
    }
    return null;
  };
  Component.displayName = `@raikou/dropzone/${(0, import_hooks3.upperFirst)(status)}`;
  return Component;
}
var DropzoneAccept = createDropzoneStatus("accept");
var DropzoneReject = createDropzoneStatus("reject");
var DropzoneIdle = createDropzoneStatus("idle");

// src/Dropzone.tsx
var defaultProps5 = {
  loading: false,
  multiple: true,
  maxSize: Infinity,
  autoFocus: false,
  activateOnClick: true,
  activateOnDrag: true,
  dragEventsBubbling: true,
  activateOnKeyboard: true,
  useFsAccessApi: true,
  variant: "light",
  rejectColor: "red"
};
var varsResolver4 = (0, import_core11.createVarsResolver)(
  (theme, { radius, variant, acceptColor, rejectColor }) => {
    const acceptColors = theme.variantColorResolver({
      color: acceptColor || theme.primaryColor,
      theme,
      variant
    });
    const rejectColors = theme.variantColorResolver({
      color: rejectColor || "red",
      theme,
      variant
    });
    return {
      root: {
        "--dropzone-radius": (0, import_core11.getRadius)(radius),
        "--dropzone-accept-color": acceptColors.color,
        "--dropzone-accept-bg": acceptColors.background,
        "--dropzone-reject-color": rejectColors.color,
        "--dropzone-reject-bg": rejectColors.background
      }
    };
  }
);
var Dropzone = (0, import_core11.factory)((_props, ref) => {
  const props = (0, import_core11.useProps)("Dropzone", defaultProps5, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    radius,
    disabled,
    loading,
    multiple,
    maxSize,
    accept,
    children,
    onDropAny,
    onDrop,
    onReject,
    openRef,
    name,
    maxFiles,
    autoFocus,
    activateOnClick,
    activateOnDrag,
    dragEventsBubbling,
    activateOnKeyboard,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onFileDialogCancel,
    onFileDialogOpen,
    preventDropOnDocument,
    useFsAccessApi,
    getFilesFromEvent,
    validator,
    rejectColor,
    acceptColor
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "radius",
    "disabled",
    "loading",
    "multiple",
    "maxSize",
    "accept",
    "children",
    "onDropAny",
    "onDrop",
    "onReject",
    "openRef",
    "name",
    "maxFiles",
    "autoFocus",
    "activateOnClick",
    "activateOnDrag",
    "dragEventsBubbling",
    "activateOnKeyboard",
    "onDragEnter",
    "onDragLeave",
    "onDragOver",
    "onFileDialogCancel",
    "onFileDialogOpen",
    "preventDropOnDocument",
    "useFsAccessApi",
    "getFilesFromEvent",
    "validator",
    "rejectColor",
    "acceptColor"
  ]);
  const getStyles = (0, import_core11.useStyles)({
    name: "Dropzone",
    classes: {
      root: "dropZone-root",
      inner: "dropZone-inner",
      fullScreen: "dropZone-fullScreen"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver4
  });
  const { getRootProps, getInputProps, isDragAccept, isDragReject, open } = (0, import_react_dropzone.useDropzone)(__spreadValues({
    onDrop: onDropAny,
    onDropAccepted: onDrop,
    onDropRejected: onReject,
    disabled: disabled || loading,
    accept: Array.isArray(accept) ? accept.reduce((r2, key) => __spreadProps(__spreadValues({}, r2), { [key]: [] }), {}) : accept,
    multiple,
    maxSize,
    maxFiles,
    autoFocus,
    noClick: !activateOnClick,
    noDrag: !activateOnDrag,
    noDragEventsBubbling: !dragEventsBubbling,
    noKeyboard: !activateOnKeyboard,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onFileDialogCancel,
    onFileDialogOpen,
    preventDropOnDocument,
    useFsAccessApi,
    validator
  }, getFilesFromEvent ? { getFilesFromEvent } : null));
  (0, import_hooks4.assignRef)(openRef, open);
  const isIdle = !isDragAccept && !isDragReject;
  return /* @__PURE__ */ import_react15.default.createElement(
    DropzoneProvider,
    {
      value: { accept: isDragAccept, reject: isDragReject, idle: isIdle }
    },
    /* @__PURE__ */ import_react15.default.createElement(
      import_core11.Box,
      __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, others), getRootProps({ ref })), getStyles("root", { focusable: true })), {
        mod: {
          accept: isDragAccept,
          reject: isDragReject,
          idle: isIdle,
          loading,
          "activate-on-click": activateOnClick
        }
      }),
      /* @__PURE__ */ import_react15.default.createElement(
        LoadingOverlay,
        {
          visible: loading,
          overlayProps: { radius },
          unstyled
        }
      ),
      /* @__PURE__ */ import_react15.default.createElement("input", __spreadProps(__spreadValues({}, getInputProps()), { name })),
      /* @__PURE__ */ import_react15.default.createElement(
        "div",
        __spreadProps(__spreadValues({}, getStyles("inner")), {
          "data-disable-pointer-events": !activateOnClick || void 0
        }),
        children
      )
    )
  );
});
Dropzone.displayName = "@raikou/dropzone/Dropzone";
Dropzone.Accept = DropzoneAccept;
Dropzone.Idle = DropzoneIdle;
Dropzone.Reject = DropzoneReject;

// src/DropzoneFullScreen.tsx
var defaultProps6 = {
  loading: false,
  maxSize: Infinity,
  activateOnClick: false,
  activateOnDrag: true,
  dragEventsBubbling: true,
  activateOnKeyboard: true,
  active: true,
  zIndex: (0, import_core12.getDefaultZIndex)("max"),
  withinPortal: true
};
var DropzoneFullScreen = (0, import_core12.factory)(
  (_props, ref) => {
    const props = (0, import_core12.useProps)("DropzoneFullScreen", defaultProps6, _props);
    const _a = props, {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      active,
      onDrop,
      onReject,
      zIndex,
      withinPortal,
      portalProps
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "unstyled",
      "vars",
      "active",
      "onDrop",
      "onReject",
      "zIndex",
      "withinPortal",
      "portalProps"
    ]);
    const getStyles = (0, import_core12.useStyles)({
      name: "DropzoneFullScreen",
      classes: {
        root: "dropZone-root",
        fullScreen: "dropZone-fullScreen"
      },
      props,
      className,
      style,
      classNames,
      styles,
      unstyled,
      rootSelector: "fullScreen"
    });
    const { resolvedClassNames, resolvedStyles } = (0, import_core12.useResolvedStylesApi)({
      classNames,
      styles,
      props
    });
    const [counter, setCounter] = import_react16.default.useState(0);
    const [visible, { open, close }] = (0, import_hooks5.useDisclosure)(false);
    const handleDragEnter = (event) => {
      var _a2;
      if ((_a2 = event.dataTransfer) == null ? void 0 : _a2.types.includes("Files")) {
        setCounter((prev) => prev + 1);
        open();
      }
    };
    const handleDragLeave = () => {
      setCounter((prev) => prev - 1);
    };
    (0, import_react16.useEffect)(() => {
      counter === 0 && close();
    }, [counter]);
    (0, import_react16.useEffect)(() => {
      if (!active)
        return void 0;
      document.addEventListener("dragenter", handleDragEnter, false);
      document.addEventListener("dragleave", handleDragLeave, false);
      return () => {
        document.removeEventListener("dragenter", handleDragEnter, false);
        document.removeEventListener("dragleave", handleDragLeave, false);
      };
    }, [active]);
    return /* @__PURE__ */ import_react16.default.createElement(OptionalPortal, __spreadProps(__spreadValues({}, portalProps), { withinPortal }), /* @__PURE__ */ import_react16.default.createElement(
      import_core12.Box,
      __spreadProps(__spreadValues({}, getStyles("fullScreen", {
        style: {
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "all" : "none",
          zIndex
        }
      })), {
        ref
      }),
      /* @__PURE__ */ import_react16.default.createElement(
        Dropzone,
        __spreadProps(__spreadValues({}, others), {
          classNames: resolvedClassNames,
          styles: resolvedStyles,
          unstyled,
          className: "dropZone-root dropZone-fullScreen",
          onDrop: (files) => {
            onDrop == null ? void 0 : onDrop(files);
            close();
          },
          onReject: (files) => {
            onReject == null ? void 0 : onReject(files);
            close();
          }
        })
      )
    ));
  }
);
DropzoneFullScreen.displayName = "@raikou/dropzone/DropzoneFullScreen";

// src/mime-types.ts
var MIME_TYPES = {
  // Images
  png: "image/png",
  gif: "image/gif",
  jpeg: "image/jpeg",
  svg: "image/svg+xml",
  webp: "image/webp",
  avif: "image/avif",
  // Documents
  mp4: "video/mp4",
  zip: "application/zip",
  csv: "text/csv",
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  exe: "application/vnd.microsoft.portable-executable"
};
var IMAGE_MIME_TYPE = [
  MIME_TYPES.png,
  MIME_TYPES.gif,
  MIME_TYPES.jpeg,
  MIME_TYPES.svg,
  MIME_TYPES.webp,
  MIME_TYPES.avif
];
var PDF_MIME_TYPE = [MIME_TYPES.pdf];
var MS_WORD_MIME_TYPE = [MIME_TYPES.doc, MIME_TYPES.docx];
var MS_EXCEL_MIME_TYPE = [MIME_TYPES.xls, MIME_TYPES.xlsx];
var MS_POWERPOINT_MIME_TYPE = [MIME_TYPES.ppt, MIME_TYPES.pptx];
var EXE_MIME_TYPE = [MIME_TYPES.exe];

// src/index.ts
Dropzone.FullScreen = DropzoneFullScreen;
var Dropzone2 = Dropzone;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Dropzone,
  DropzoneAccept,
  DropzoneFullScreen,
  DropzoneIdle,
  DropzoneReject,
  EXE_MIME_TYPE,
  IMAGE_MIME_TYPE,
  MIME_TYPES,
  MS_EXCEL_MIME_TYPE,
  MS_POWERPOINT_MIME_TYPE,
  MS_WORD_MIME_TYPE,
  PDF_MIME_TYPE
});
