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
  NavigationProgress: () => NavigationProgress,
  cleanupNavigationProgress: () => cleanupNavigationProgress,
  cleanupNavigationProgressAction: () => cleanupNavigationProgressAction,
  completeNavigationProgress: () => completeNavigationProgress,
  completeNavigationProgressAction: () => completeNavigationProgressAction,
  createNprogress: () => createNprogress,
  createNprogressStore: () => createNprogressStore,
  decrementNavigationProgress: () => decrementNavigationProgress,
  decrementNavigationProgressAction: () => decrementNavigationProgressAction,
  incrementNavigationProgress: () => incrementNavigationProgress,
  incrementNavigationProgressAction: () => incrementNavigationProgressAction,
  nprogress: () => nprogress,
  nprogressStore: () => nprogressStore,
  resetNavigationProgress: () => resetNavigationProgress,
  resetNavigationProgressAction: () => resetNavigationProgressAction,
  setNavigationProgress: () => setNavigationProgress,
  setNavigationProgressAction: () => setNavigationProgressAction,
  startNavigationProgress: () => startNavigationProgress,
  startNavigationProgressAction: () => startNavigationProgressAction,
  stopNavigationProgress: () => stopNavigationProgress,
  stopNavigationProgressAction: () => stopNavigationProgressAction,
  updateNavigationProgressStateAction: () => updateNavigationProgressStateAction,
  useNprogress: () => useNprogress
});
module.exports = __toCommonJS(src_exports);

// src/NavigationProgress.tsx
var import_react11 = __toESM(require("react"));
var import_core6 = require("@raikou/core");

// ../components/Portal/src/Portal.tsx
var import_react = __toESM(require("react"));
var import_react_dom = require("react-dom");
var import_hooks = require("@raikou/hooks");
var import_core = require("@raikou/core");
function createPortalNode(props) {
  const node = document.createElement("div");
  node.setAttribute("data-portal", "true");
  typeof props.className === "string" && node.classList.add(...props.className.split(" "));
  typeof props.style === "object" && Object.assign(node.style, props.style);
  typeof props.id === "string" && node.setAttribute("id", props.id);
  return node;
}
var defaultProps = {};
var Portal = (0, import_react.forwardRef)((props, ref) => {
  const _a = (0, import_core.useProps)(
    "Portal",
    defaultProps,
    props
  ), { children, target } = _a, others = __objRest(_a, ["children", "target"]);
  const [mounted, setMounted] = (0, import_react.useState)(false);
  const nodeRef = (0, import_react.useRef)(null);
  (0, import_hooks.useIsomorphicEffect)(() => {
    setMounted(true);
    nodeRef.current = !target ? createPortalNode(others) : typeof target === "string" ? document.querySelector(target) : target;
    (0, import_hooks.assignRef)(ref, nodeRef.current);
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
  return (0, import_react_dom.createPortal)(/* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, children), nodeRef.current);
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

// ../components/Progress/src/Progress.tsx
var import_react10 = __toESM(require("react"));
var import_core5 = require("@raikou/core");

// ../components/Progress/src/ProgressRoot/ProgressRoot.tsx
var import_react7 = __toESM(require("react"));
var import_core2 = require("@raikou/core");

// ../components/_utils/create-safe-context/create-safe-context.tsx
var import_react3 = __toESM(require("react"));
function createSafeContext(errorMessage) {
  const Context = (0, import_react3.createContext)(null);
  const useSafeContext = () => {
    const ctx = (0, import_react3.useContext)(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react3.default.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../components/_utils/create-optional-context/create-optional-context.tsx
var import_react4 = __toESM(require("react"));

// ../components/_utils/use-hovered/use-hovered.ts
var import_react5 = require("react");

// ../components/_utils/create-use-external-events/create-use-external-events.ts
var import_react6 = require("react");

// ../components/Progress/src/Progress.context.ts
var [ProgressProvider, useProgressContext] = createSafeContext(
  "Progress.Root component was not found in tree"
);

// css-module:../Progress.module.css#css-module
var Progress_module_default = { "root": "m-db6d6462", "section": "m-2242eb65", "stripes-animation": "m-81a374bd", "label": "m-91e40b74" };

// ../components/Progress/src/ProgressRoot/ProgressRoot.tsx
var defaultProps2 = {};
var varsResolver = (0, import_core2.createVarsResolver)(
  (_, { size, radius }) => ({
    root: {
      "--progress-size": (0, import_core2.getSize)(size, "progress-size"),
      "--progress-radius": radius === void 0 ? void 0 : (0, import_core2.getRadius)(radius)
    }
  })
);
var ProgressRoot = (0, import_core2.factory)((_props, ref) => {
  const props = (0, import_core2.useProps)("ProgressRoot", defaultProps2, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars"]);
  const getStyles = (0, import_core2.useStyles)({
    name: "Progress",
    classes: Progress_module_default,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ import_react7.default.createElement(ProgressProvider, { value: { getStyles } }, /* @__PURE__ */ import_react7.default.createElement(import_core2.Box, __spreadValues(__spreadValues({ ref }, getStyles("root")), others)));
});
ProgressRoot.classes = Progress_module_default;
ProgressRoot.displayName = "@raikou/core/ProgressRoot";

// ../components/Progress/src/ProgressSection/ProgressSection.tsx
var import_react8 = __toESM(require("react"));
var import_core3 = require("@raikou/core");
var defaultProps3 = {
  withAria: true
};
var ProgressSection = (0, import_core3.factory)((props, ref) => {
  const _a = (0, import_core3.useProps)("ProgressSection", defaultProps3, props), {
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
  const theme = (0, import_core3.useRaikouTheme)();
  const ariaAttributes = withAria ? {
    role: "progressbar",
    "aria-valuemax": 100,
    "aria-valuemin": 0,
    "aria-valuenow": value,
    "aria-valuetext": `${value}%`
  } : {};
  return /* @__PURE__ */ import_react8.default.createElement(
    import_core3.Box,
    __spreadProps(__spreadValues(__spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("section", { className, classNames, styles, style })), others), ariaAttributes), {
      mod: { striped: striped || animated, animated },
      __vars: {
        "--progress-section-width": `${value}%`,
        "--progress-section-color": (0, import_core3.getThemeColor)(color, theme)
      }
    })
  );
});
ProgressSection.displayName = "@raikou/core/ProgressSection";

// ../components/Progress/src/ProgressLabel/ProgressLabel.tsx
var import_react9 = __toESM(require("react"));
var import_core4 = require("@raikou/core");
var defaultProps4 = {};
var ProgressLabel = (0, import_core4.factory)((props, ref) => {
  const _a = (0, import_core4.useProps)(
    "ProgressLabel",
    defaultProps4,
    props
  ), { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useProgressContext();
  return /* @__PURE__ */ import_react9.default.createElement(
    import_core4.Box,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("label", { className, style, classNames, styles })), others)
  );
});
ProgressLabel.displayName = "@raikou/core/ProgressLabel";

// ../components/Progress/src/Progress.tsx
var defaultProps5 = {};
var Progress = (0, import_core5.factory)((_props, ref) => {
  const props = (0, import_core5.useProps)("Progress", defaultProps5, _props);
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
  const { resolvedClassNames, resolvedStyles } = (0, import_core5.useResolvedStylesApi)({
    classNames,
    styles,
    props
  });
  return /* @__PURE__ */ import_react10.default.createElement(
    ProgressRoot,
    __spreadValues({
      ref,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      vars
    }, others),
    /* @__PURE__ */ import_react10.default.createElement(
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
var import_hooks2 = require("@raikou/hooks");
var import_store = require("@raikou/store");
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
var createNprogressStore = () => (0, import_store.createStore)({
  mounted: false,
  progress: 0,
  interval: 0,
  step: 1,
  stepInterval: 100,
  timeouts: []
});
var useNprogress = (store) => (0, import_store.useStore)(store);
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
    () => ({ progress: (0, import_hooks2.clamp)(value, 0, 100), mounted: true }),
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

// css-module:./NavigationProgress.module.css#css-module
var NavigationProgress_module_default = { "root": "m-8f2832ae", "section": "m-7a0fe999" };

// src/NavigationProgress.tsx
function NavigationProgress(_a) {
  var _b = _a, {
    initialProgress = 0,
    color,
    size = 3,
    stepInterval = 500,
    withinPortal = true,
    portalProps,
    zIndex = (0, import_core6.getDefaultZIndex)("max"),
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
  (0, import_react11.useEffect)(() => () => resetNavigationProgressAction(store), [store]);
  return /* @__PURE__ */ import_react11.default.createElement(OptionalPortal, __spreadProps(__spreadValues({}, portalProps), { withinPortal }), /* @__PURE__ */ import_react11.default.createElement(
    Progress,
    __spreadValues({
      radius: 0,
      value: state.progress,
      size,
      color,
      classNames: NavigationProgress_module_default,
      "data-mounted": state.mounted || void 0,
      __vars: { "--nprogress-z-index": zIndex == null ? void 0 : zIndex.toString() }
    }, others)
  ));
}
NavigationProgress.displayName = "@raikou/nprogress/NavigationProgress";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
//# sourceMappingURL=index.js.map