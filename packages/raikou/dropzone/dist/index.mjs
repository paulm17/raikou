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

// src/DropzoneFullScreen.tsx
import React15, { useEffect as useEffect3, useState as useState4 } from "react";
import {
  Box as Box9,
  factory as factory4,
  useProps as useProps7,
  useStyles as useStyles5,
  useResolvedStylesApi,
  getDefaultZIndex as getDefaultZIndex3
} from "@raikou/core";

// ../components/Portal/src/Portal.tsx
import React, { useRef, useState, forwardRef } from "react";
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
var Portal = forwardRef((props, ref) => {
  const _a = useProps(
    "Portal",
    defaultProps,
    props
  ), { children, target } = _a, others = __objRest(_a, ["children", "target"]);
  const [mounted, setMounted] = useState(false);
  const nodeRef = useRef(null);
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
  return createPortal(/* @__PURE__ */ React.createElement(React.Fragment, null, children), nodeRef.current);
});
Portal.displayName = "@raikou/core/Portal";

// ../components/Portal/src/OptionalPortal.tsx
import React2 from "react";
function OptionalPortal(_a) {
  var _b = _a, {
    withinPortal = true,
    children
  } = _b, others = __objRest(_b, [
    "withinPortal",
    "children"
  ]);
  if (withinPortal) {
    return /* @__PURE__ */ React2.createElement(Portal, __spreadValues({}, others), children);
  }
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, children);
}
OptionalPortal.displayName = "@raikou/core/OptionalPortal";

// src/DropzoneFullScreen.tsx
import { useDisclosure } from "@raikou/hooks";

// src/Dropzone.tsx
import React14 from "react";
import {
  useDropzone
} from "react-dropzone";
import {
  Box as Box8,
  factory as factory3,
  useProps as useProps6,
  useStyles as useStyles4,
  createVarsResolver as createVarsResolver4,
  getRadius as getRadius2
} from "@raikou/core";

// ../components/LoadingOverlay/src/LoadingOverlay.tsx
import React10 from "react";
import {
  Box as Box7,
  factory as factory2,
  useProps as useProps4,
  useStyles as useStyles3,
  createVarsResolver as createVarsResolver3,
  useRaikouTheme as useRaikouTheme2,
  getDefaultZIndex as getDefaultZIndex2
} from "@raikou/core";

// ../components/Transition/src/transitions.ts
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

// ../components/Transition/src/Transition.tsx
import React3 from "react";

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
import { useState as useState2, useEffect, useRef as useRef2 } from "react";
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
  const [transitionDuration, setTransitionDuration] = useState2(
    reduceMotion ? 0 : duration
  );
  const [transitionStatus, setStatus] = useState2(
    mounted ? "entered" : "exited"
  );
  const timeoutRef = useRef2(-1);
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
    return mounted ? /* @__PURE__ */ React3.createElement(React3.Fragment, null, children({})) : keepMounted ? children({ display: "none" }) : null;
  }
  return transitionStatus === "exited" ? keepMounted ? children({ display: "none" }) : null : /* @__PURE__ */ React3.createElement(React3.Fragment, null, children(
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
import React8 from "react";
import {
  Box as Box5,
  useProps as useProps2,
  getThemeColor,
  useStyles,
  factory,
  getSize,
  createVarsResolver
} from "@raikou/core";

// ../components/Loader/src/loaders/Bars.tsx
import React4, { forwardRef as forwardRef2 } from "react";

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
import { Box } from "@raikou/core";
var Bars = forwardRef2(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React4.createElement(
      Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("bars-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React4.createElement("span", { className: "bar" }),
      /* @__PURE__ */ React4.createElement("span", { className: "bar" }),
      /* @__PURE__ */ React4.createElement("span", { className: "bar" })
    );
  }
);

// ../components/Loader/src/loaders/Oval.tsx
import React5, { forwardRef as forwardRef3 } from "react";
import { Box as Box2 } from "@raikou/core";
var Oval = forwardRef3(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React5.createElement(
      Box2,
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
import React6, { forwardRef as forwardRef4 } from "react";
import { Box as Box3 } from "@raikou/core";
var Progress = forwardRef4(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React6.createElement(
      Box3,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("progress-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React6.createElement("svg", { viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ React6.createElement("g", { fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ React6.createElement("g", { transform: "translate(2.5 2.5)", strokeWidth: "5" }, /* @__PURE__ */ React6.createElement("circle", { strokeOpacity: ".5", cx: "16", cy: "16", r: "16" }), /* @__PURE__ */ React6.createElement("path", { d: "M32 16c0-9.94-8.06-16-16-16" }, /* @__PURE__ */ React6.createElement(
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
import React7, { forwardRef as forwardRef5 } from "react";
import { Box as Box4 } from "@raikou/core";
var Dots = forwardRef5(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React7.createElement(
      Box4,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("dots-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React7.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React7.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React7.createElement("span", { className: "dot" })
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
var defaultProps2 = {
  loaders: defaultLoaders,
  type: "oval"
};
var varsResolver = createVarsResolver(
  (theme, { size, color }) => ({
    root: {
      "--loader-size": getSize(size, "loader-size"),
      "--loader-color": color ? getThemeColor(color, theme) : void 0
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
  const getStyles = useStyles({
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
  return /* @__PURE__ */ React8.createElement(
    Box5,
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
import React9 from "react";
import {
  Box as Box6,
  polymorphicFactory,
  useProps as useProps3,
  useStyles as useStyles2,
  createVarsResolver as createVarsResolver2,
  rgba,
  getDefaultZIndex,
  getRadius,
  rem as rem2
} from "@raikou/core";
var defaultProps3 = {
  zIndex: getDefaultZIndex("modal")
};
var varsResolver2 = createVarsResolver2(
  (_, { gradient, color, backgroundOpacity, blur, radius, zIndex }) => ({
    root: {
      "--overlay-bg": gradient || (color !== void 0 || backgroundOpacity !== void 0) && rgba(color || "#000", backgroundOpacity != null ? backgroundOpacity : 0.6) || void 0,
      "--overlay-filter": blur ? `blur(${rem2(blur)})` : void 0,
      "--overlay-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--overlay-z-index": zIndex == null ? void 0 : zIndex.toString()
    }
  })
);
var Overlay = polymorphicFactory((_props, ref) => {
  const props = useProps3("Overlay", defaultProps3, _props);
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
  const getStyles = useStyles2({
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
  return /* @__PURE__ */ React9.createElement(Box6, __spreadValues(__spreadProps(__spreadValues({ ref }, getStyles("root")), { mod: { center, fixed } }), others), children);
});
Overlay.displayName = "@raikou/core/Overlay";

// ../components/LoadingOverlay/src/LoadingOverlay.tsx
var defaultProps4 = {
  transitionProps: { transition: "fade", duration: 0 },
  overlayProps: { backgroundOpacity: 0.75 },
  zIndex: getDefaultZIndex2("overlay")
};
var varsResolver3 = createVarsResolver3(
  (_, { zIndex }) => ({
    root: {
      "--lo-z-index": zIndex == null ? void 0 : zIndex.toString()
    }
  })
);
var LoadingOverlay = factory2((_props, ref) => {
  const props = useProps4("LoadingOverlay", defaultProps4, _props);
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
  const theme = useRaikouTheme2();
  const getStyles = useStyles3({
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
  return /* @__PURE__ */ React10.createElement(Transition, __spreadProps(__spreadValues({ transition: "fade" }, transitionProps), { mounted: !!visible }), (transitionStyles) => /* @__PURE__ */ React10.createElement(
    Box7,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { style: transitionStyles })), {
      ref
    }), others),
    /* @__PURE__ */ React10.createElement(Loader, __spreadValues(__spreadValues({}, getStyles("loader")), loaderProps)),
    /* @__PURE__ */ React10.createElement(
      Overlay,
      __spreadProps(__spreadValues(__spreadValues({}, _overlayProps), getStyles("overlay")), {
        "data-light": true,
        unstyled,
        color: (overlayProps == null ? void 0 : overlayProps.color) || theme.white
      })
    ),
    /* @__PURE__ */ React10.createElement(
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
import { assignRef as assignRef2 } from "@raikou/hooks";

// ../components/_utils/create-safe-context/create-safe-context.tsx
import React11, { createContext, useContext } from "react";
function createSafeContext(errorMessage) {
  const Context = createContext(null);
  const useSafeContext = () => {
    const ctx = useContext(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ React11.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../components/_utils/create-optional-context/create-optional-context.tsx
import React12, { createContext as createContext2, useContext as useContext2 } from "react";

// ../components/_utils/use-hovered/use-hovered.ts
import { useState as useState3 } from "react";

// ../components/_utils/create-use-external-events/create-use-external-events.ts
import { useEffect as useEffect2, useLayoutEffect } from "react";

// src/Dropzone.context.ts
var [DropzoneProvider, useDropzoneContext] = createSafeContext(
  "Dropzone component was not found in tree"
);

// src/DropzoneStatus.tsx
import React13, { cloneElement } from "react";
import { upperFirst } from "@raikou/hooks";
import { isElement, useProps as useProps5 } from "@raikou/core";
function createDropzoneStatus(status) {
  const Component = (props) => {
    const _a = useProps5(
      `Dropzone${upperFirst(status)}`,
      {},
      props
    ), { children } = _a, others = __objRest(_a, ["children"]);
    const ctx = useDropzoneContext();
    const _children = isElement(children) ? children : /* @__PURE__ */ React13.createElement("span", null, children);
    if (ctx[status]) {
      return cloneElement(_children, others);
    }
    return null;
  };
  Component.displayName = `@raikou/dropzone/${upperFirst(status)}`;
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
var varsResolver4 = createVarsResolver4(
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
        "--dropzone-radius": getRadius2(radius),
        "--dropzone-accept-color": acceptColors.color,
        "--dropzone-accept-bg": acceptColors.background,
        "--dropzone-reject-color": rejectColors.color,
        "--dropzone-reject-bg": rejectColors.background
      }
    };
  }
);
var Dropzone = factory3((_props, ref) => {
  const props = useProps6("Dropzone", defaultProps5, _props);
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
  const getStyles = useStyles4({
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
  const { getRootProps, getInputProps, isDragAccept, isDragReject, open } = useDropzone(__spreadValues({
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
  assignRef2(openRef, open);
  const isIdle = !isDragAccept && !isDragReject;
  return /* @__PURE__ */ React14.createElement(
    DropzoneProvider,
    {
      value: { accept: isDragAccept, reject: isDragReject, idle: isIdle }
    },
    /* @__PURE__ */ React14.createElement(
      Box8,
      __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, others), getRootProps({ ref })), getStyles("root", { focusable: true })), {
        mod: {
          accept: isDragAccept,
          reject: isDragReject,
          idle: isIdle,
          loading,
          "activate-on-click": activateOnClick
        }
      }),
      /* @__PURE__ */ React14.createElement(
        LoadingOverlay,
        {
          visible: loading,
          overlayProps: { radius },
          unstyled
        }
      ),
      /* @__PURE__ */ React14.createElement("input", __spreadProps(__spreadValues({}, getInputProps()), { name })),
      /* @__PURE__ */ React14.createElement(
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
  zIndex: getDefaultZIndex3("max"),
  withinPortal: true
};
var DropzoneFullScreen = factory4(
  (_props, ref) => {
    const props = useProps7("DropzoneFullScreen", defaultProps6, _props);
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
    const getStyles = useStyles5({
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
    const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
      classNames,
      styles,
      props
    });
    const [counter, setCounter] = useState4(0);
    const [visible, { open, close }] = useDisclosure(false);
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
    useEffect3(() => {
      counter === 0 && close();
    }, [counter]);
    useEffect3(() => {
      if (!active)
        return void 0;
      document.addEventListener("dragenter", handleDragEnter, false);
      document.addEventListener("dragleave", handleDragLeave, false);
      return () => {
        document.removeEventListener("dragenter", handleDragEnter, false);
        document.removeEventListener("dragleave", handleDragLeave, false);
      };
    }, [active]);
    return /* @__PURE__ */ React15.createElement(OptionalPortal, __spreadProps(__spreadValues({}, portalProps), { withinPortal }), /* @__PURE__ */ React15.createElement(
      Box9,
      __spreadProps(__spreadValues({}, getStyles("fullScreen", {
        style: {
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "all" : "none",
          zIndex
        }
      })), {
        ref
      }),
      /* @__PURE__ */ React15.createElement(
        Dropzone,
        __spreadProps(__spreadValues({}, others), {
          classNames: resolvedClassNames,
          styles: resolvedStyles,
          unstyled,
          className: "dropZone-root dropZone-fullScreen",
          onDrop: (files) => {
            onDrop == null ? void 0 : onDrop(files);
            close();
            setCounter(0);
          },
          onReject: (files) => {
            onReject == null ? void 0 : onReject(files);
            close();
            setCounter(0);
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
export {
  Dropzone2 as Dropzone,
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
};
