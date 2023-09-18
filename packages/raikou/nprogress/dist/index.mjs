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

// src/NavigationProgress.tsx
import React9, { useEffect as useEffect2 } from "react";
import { getDefaultZIndex } from "@raikou/core";

// ../components/Portal/src/Portal.tsx
import React, { useRef, useState, forwardRef } from "react";
import { createPortal } from "react-dom";
import { useIsomorphicEffect } from "@raikou/hooks";
import { useProps } from "@raikou/core";
var defaultProps = {};
var Portal = forwardRef((props, ref) => {
  const _a = useProps(
    "Portal",
    defaultProps,
    props
  ), { children, target, className } = _a, others = __objRest(_a, ["children", "target", "className"]);
  const [mounted, setMounted] = useState(false);
  const nodeRef = useRef(null);
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
    /* @__PURE__ */ React.createElement("div", __spreadValues({ className, ref }, others), children),
    nodeRef.current
  );
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

// ../components/Progress/src/Progress.tsx
import React8 from "react";
import {
  factory as factory4,
  useProps as useProps5,
  useResolvedStylesApi
} from "@raikou/core";

// ../components/Progress/src/ProgressRoot/ProgressRoot.tsx
import React5 from "react";
import {
  Box,
  factory,
  useProps as useProps2,
  useStyles,
  createVarsResolver,
  getSize,
  getRadius
} from "@raikou/core";

// ../components/_utils/create-safe-context/create-safe-context.tsx
import React3, { createContext, useContext } from "react";
function createSafeContext(errorMessage) {
  const Context = createContext(null);
  const useSafeContext = () => {
    const ctx = useContext(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ React3.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../components/_utils/create-optional-context/create-optional-context.tsx
import React4, { createContext as createContext2, useContext as useContext2 } from "react";

// ../components/_utils/use-hovered/use-hovered.ts
import { useState as useState2 } from "react";

// ../components/_utils/create-use-external-events/create-use-external-events.ts
import { useEffect, useLayoutEffect } from "react";

// ../components/Progress/src/Progress.context.ts
var [ProgressProvider, useProgressContext] = createSafeContext(
  "Progress.Root component was not found in tree"
);

// ../components/Progress/src/ProgressRoot/ProgressRoot.tsx
var defaultProps2 = {};
var varsResolver = createVarsResolver(
  (_, { size, radius }) => ({
    root: {
      "--progress-size": getSize(size, "progress-size"),
      "--progress-radius": radius === void 0 ? void 0 : getRadius(radius)
    }
  })
);
var ProgressRoot = factory((_props, ref) => {
  const props = useProps2("ProgressRoot", defaultProps2, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars"]);
  const getStyles = useStyles({
    name: "Progress",
    classes: {
      root: "progress-root",
      section: "progress-section",
      label: "progress-label"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React5.createElement(ProgressProvider, { value: { getStyles } }, /* @__PURE__ */ React5.createElement(Box, __spreadValues(__spreadValues({ ref }, getStyles("root")), others)));
});
ProgressRoot.displayName = "@raikou/core/ProgressRoot";

// ../components/Progress/src/ProgressSection/ProgressSection.tsx
import React6 from "react";
import {
  Box as Box2,
  factory as factory2,
  useProps as useProps3,
  useRaikouTheme,
  getThemeColor
} from "@raikou/core";
var defaultProps3 = {
  withAria: true
};
var ProgressSection = factory2((props, ref) => {
  const _a = useProps3("ProgressSection", defaultProps3, props), {
    classNames,
    className,
    style,
    styles,
    vars,
    value,
    withAria,
    color,
    striped,
    animated
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "vars",
    "value",
    "withAria",
    "color",
    "striped",
    "animated"
  ]);
  const ctx = useProgressContext();
  const theme = useRaikouTheme();
  const ariaAttributes = withAria ? {
    role: "progressbar",
    "aria-valuemax": 100,
    "aria-valuemin": 0,
    "aria-valuenow": value,
    "aria-valuetext": `${value}%`
  } : {};
  return /* @__PURE__ */ React6.createElement(
    Box2,
    __spreadProps(__spreadValues(__spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("section", { className, classNames, styles, style })), others), ariaAttributes), {
      mod: { striped: striped || animated, animated },
      __vars: {
        "--progress-section-width": `${value}%`,
        "--progress-section-color": getThemeColor(color, theme)
      }
    })
  );
});
ProgressSection.displayName = "@raikou/core/ProgressSection";

// ../components/Progress/src/ProgressLabel/ProgressLabel.tsx
import React7 from "react";
import {
  Box as Box3,
  factory as factory3,
  useProps as useProps4
} from "@raikou/core";
var defaultProps4 = {};
var ProgressLabel = factory3((props, ref) => {
  const _a = useProps4(
    "ProgressLabel",
    defaultProps4,
    props
  ), { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useProgressContext();
  return /* @__PURE__ */ React7.createElement(
    Box3,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("label", { className, style, classNames, styles })), others)
  );
});
ProgressLabel.displayName = "@raikou/core/ProgressLabel";

// ../components/Progress/src/Progress.tsx
var defaultProps5 = {};
var Progress = factory4((_props, ref) => {
  const props = useProps5("Progress", defaultProps5, _props);
  const _a = props, {
    value,
    classNames,
    styles,
    vars,
    color,
    striped,
    animated,
    "aria-label": label
  } = _a, others = __objRest(_a, [
    "value",
    "classNames",
    "styles",
    "vars",
    "color",
    "striped",
    "animated",
    "aria-label"
  ]);
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  return /* @__PURE__ */ React8.createElement(
    ProgressRoot,
    __spreadValues({
      ref,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      vars
    }, others),
    /* @__PURE__ */ React8.createElement(
      ProgressSection,
      {
        value,
        color,
        striped,
        animated,
        "aria-label": label
      }
    )
  );
});
Progress.displayName = "@raikou/core/Progress";
Progress.Section = ProgressSection;
Progress.Root = ProgressRoot;
Progress.Label = ProgressLabel;

// src/nprogress.store.ts
import { clamp } from "@raikou/hooks";
import { createStore, useStore } from "@raikou/store";
function getIntervalProgressValue(currentProgress) {
  let next = 0.5;
  if (currentProgress >= 0 && currentProgress <= 20) {
    next = 10;
  } else if (currentProgress >= 20 && currentProgress <= 50) {
    next = 4;
  } else if (currentProgress >= 50 && currentProgress <= 80) {
    next = 2;
  } else if (currentProgress >= 80 && currentProgress <= 99) {
    next = 1;
  } else if (currentProgress >= 99 && currentProgress <= 100) {
    next = 0;
  }
  return currentProgress + next;
}
var createNprogressStore = () => createStore({
  mounted: false,
  progress: 0,
  interval: 0,
  step: 1,
  stepInterval: 100,
  timeouts: []
});
var useNprogress = (store) => useStore(store);
function updateNavigationProgressStateAction(update, store) {
  const state = store.getState();
  store.setState(__spreadValues(__spreadValues({}, state), update(store.getState())));
}
function decrementNavigationProgressAction(store) {
  updateNavigationProgressStateAction(
    (state) => ({ progress: Math.max(state.progress - state.step, 0) }),
    store
  );
}
function setNavigationProgressAction(value, store) {
  updateNavigationProgressStateAction(
    () => ({ progress: clamp(value, 0, 100), mounted: true }),
    store
  );
}
function cleanupNavigationProgressAction(store) {
  updateNavigationProgressStateAction((state) => {
    window.clearInterval(state.interval);
    state.timeouts.forEach((timeout) => window.clearTimeout(timeout));
    return { timeouts: [] };
  }, store);
}
function completeNavigationProgressAction(store) {
  cleanupNavigationProgressAction(store);
  updateNavigationProgressStateAction((state) => {
    const mountedTimeout = window.setTimeout(() => {
      updateNavigationProgressStateAction(() => ({ mounted: false }), store);
    }, 50);
    const resetTimeout = window.setTimeout(() => {
      updateNavigationProgressStateAction(() => ({ progress: 0 }), store);
    }, state.stepInterval + 50);
    return { progress: 100, timeouts: [mountedTimeout, resetTimeout] };
  }, store);
}
function startNavigationProgressAction(store) {
  updateNavigationProgressStateAction(
    (s) => ({ progress: getIntervalProgressValue(s.progress), mounted: true }),
    store
  );
  updateNavigationProgressStateAction((state) => {
    window.clearInterval(state.interval);
    const interval = window.setInterval(() => {
      updateNavigationProgressStateAction(
        (s) => ({
          progress: getIntervalProgressValue(s.progress),
          mounted: true
        }),
        store
      );
    }, state.stepInterval);
    return { interval, mounted: true };
  }, store);
}
function stopNavigationProgressAction(store) {
  updateNavigationProgressStateAction((state) => {
    window.clearInterval(state.interval);
    return { interval: -1 };
  }, store);
}
function resetNavigationProgressAction(store) {
  cleanupNavigationProgressAction(store);
  stopNavigationProgressAction(store);
  updateNavigationProgressStateAction(
    () => ({ progress: 0, mounted: false }),
    store
  );
}
function incrementNavigationProgressAction(store) {
  updateNavigationProgressStateAction((state) => {
    const nextValue = Math.min(state.progress + state.step, 100);
    const nextMounted = nextValue !== 100 && nextValue !== 0;
    if (!nextMounted) {
      const timeout = window.setTimeout(
        () => resetNavigationProgressAction(store),
        state.stepInterval + 50
      );
      return {
        progress: nextValue,
        mounted: nextMounted,
        timeouts: [...state.timeouts, timeout]
      };
    }
    return {
      progress: nextValue,
      mounted: nextMounted
    };
  }, store);
}
function createNprogress() {
  const store = createNprogressStore();
  const actions = {
    start: () => startNavigationProgressAction(store),
    stop: () => stopNavigationProgressAction(store),
    reset: () => resetNavigationProgressAction(store),
    set: (value) => setNavigationProgressAction(value, store),
    increment: () => incrementNavigationProgressAction(store),
    decrement: () => decrementNavigationProgressAction(store),
    complete: () => completeNavigationProgressAction(store),
    cleanup: () => cleanupNavigationProgressAction(store)
  };
  return [store, actions];
}
var [nprogressStore, nprogress] = createNprogress();
var {
  start: startNavigationProgress,
  stop: stopNavigationProgress,
  reset: resetNavigationProgress,
  set: setNavigationProgress,
  increment: incrementNavigationProgress,
  decrement: decrementNavigationProgress,
  complete: completeNavigationProgress,
  cleanup: cleanupNavigationProgress
} = nprogress;

// src/NavigationProgress.tsx
function NavigationProgress(_a) {
  var _b = _a, {
    initialProgress = 0,
    color,
    size = 3,
    stepInterval = 500,
    withinPortal = true,
    portalProps,
    zIndex = getDefaultZIndex("max"),
    store = nprogressStore
  } = _b, others = __objRest(_b, [
    "initialProgress",
    "color",
    "size",
    "stepInterval",
    "withinPortal",
    "portalProps",
    "zIndex",
    "store"
  ]);
  store.initialize({
    mounted: false,
    progress: initialProgress,
    interval: -1,
    step: 1,
    stepInterval,
    timeouts: []
  });
  const state = useNprogress(store);
  useEffect2(() => () => resetNavigationProgressAction(store), [store]);
  return /* @__PURE__ */ React9.createElement(OptionalPortal, __spreadProps(__spreadValues({}, portalProps), { withinPortal }), /* @__PURE__ */ React9.createElement(
    Progress,
    __spreadValues({
      radius: 0,
      value: state.progress,
      size,
      color,
      classNames: {
        root: "nProgress-root",
        section: "nProgress-section"
      },
      "data-mounted": state.mounted || void 0,
      __vars: { "--nprogress-z-index": zIndex == null ? void 0 : zIndex.toString() }
    }, others)
  ));
}
NavigationProgress.displayName = "@raikou/nprogress/NavigationProgress";
export {
  NavigationProgress,
  cleanupNavigationProgress,
  cleanupNavigationProgressAction,
  completeNavigationProgress,
  completeNavigationProgressAction,
  createNprogress,
  createNprogressStore,
  decrementNavigationProgress,
  decrementNavigationProgressAction,
  incrementNavigationProgress,
  incrementNavigationProgressAction,
  nprogress,
  nprogressStore,
  resetNavigationProgress,
  resetNavigationProgressAction,
  setNavigationProgress,
  setNavigationProgressAction,
  startNavigationProgress,
  startNavigationProgressAction,
  stopNavigationProgress,
  stopNavigationProgressAction,
  updateNavigationProgressStateAction,
  useNprogress
};
