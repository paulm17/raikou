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
  Progress: () => Progress,
  ProgressLabel: () => ProgressLabel,
  ProgressRoot: () => ProgressRoot,
  ProgressSection: () => ProgressSection
});
module.exports = __toCommonJS(src_exports);

// src/Progress.tsx
var import_react8 = __toESM(require("react"));
var import_core4 = require("@raikou/core");

// src/ProgressRoot/ProgressRoot.tsx
var import_react5 = __toESM(require("react"));
var import_core = require("@raikou/core");

// ../_utils/create-safe-context/create-safe-context.tsx
var import_react = __toESM(require("react"));
function createSafeContext(errorMessage) {
  const Context = (0, import_react.createContext)(null);
  const useSafeContext = () => {
    const ctx = (0, import_react.useContext)(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react.default.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../_utils/create-optional-context/create-optional-context.tsx
var import_react2 = __toESM(require("react"));

// ../_utils/use-hovered/use-hovered.ts
var import_react3 = require("react");

// ../_utils/create-use-external-events/create-use-external-events.ts
var import_react4 = require("react");

// src/Progress.context.ts
var [ProgressProvider, useProgressContext] = createSafeContext(
  "Progress.Root component was not found in tree"
);

// src/ProgressRoot/ProgressRoot.tsx
var defaultProps = {};
var varsResolver = (0, import_core.createVarsResolver)(
  (_, { size, radius }) => ({
    root: {
      "--progress-size": (0, import_core.getSize)(size, "progress-size"),
      "--progress-radius": radius === void 0 ? void 0 : (0, import_core.getRadius)(radius)
    }
  })
);
var ProgressRoot = (0, import_core.factory)((_props, ref) => {
  const props = (0, import_core.useProps)("ProgressRoot", defaultProps, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars"]);
  const getStyles = (0, import_core.useStyles)({
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
  return /* @__PURE__ */ import_react5.default.createElement(ProgressProvider, { value: { getStyles } }, /* @__PURE__ */ import_react5.default.createElement(import_core.Box, __spreadValues(__spreadValues({ ref }, getStyles("root")), others)));
});
ProgressRoot.displayName = "@raikou/core/ProgressRoot";

// src/ProgressSection/ProgressSection.tsx
var import_react6 = __toESM(require("react"));
var import_core2 = require("@raikou/core");
var defaultProps2 = {
  withAria: true
};
var ProgressSection = (0, import_core2.factory)((props, ref) => {
  const _a = (0, import_core2.useProps)("ProgressSection", defaultProps2, props), {
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
  const theme = (0, import_core2.useRaikouTheme)();
  const ariaAttributes = withAria ? {
    role: "progressbar",
    "aria-valuemax": 100,
    "aria-valuemin": 0,
    "aria-valuenow": value,
    "aria-valuetext": `${value}%`
  } : {};
  return /* @__PURE__ */ import_react6.default.createElement(
    import_core2.Box,
    __spreadProps(__spreadValues(__spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("section", { className, classNames, styles, style })), others), ariaAttributes), {
      mod: { striped: striped || animated, animated },
      __vars: {
        "--progress-section-width": `${value}%`,
        "--progress-section-color": (0, import_core2.getThemeColor)(color, theme)
      }
    })
  );
});
ProgressSection.displayName = "@raikou/core/ProgressSection";

// src/ProgressLabel/ProgressLabel.tsx
var import_react7 = __toESM(require("react"));
var import_core3 = require("@raikou/core");
var defaultProps3 = {};
var ProgressLabel = (0, import_core3.factory)((props, ref) => {
  const _a = (0, import_core3.useProps)(
    "ProgressLabel",
    defaultProps3,
    props
  ), { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useProgressContext();
  return /* @__PURE__ */ import_react7.default.createElement(
    import_core3.Box,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("label", { className, style, classNames, styles })), others)
  );
});
ProgressLabel.displayName = "@raikou/core/ProgressLabel";

// src/Progress.tsx
var defaultProps4 = {};
var Progress = (0, import_core4.factory)((_props, ref) => {
  const props = (0, import_core4.useProps)("Progress", defaultProps4, _props);
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
  const { resolvedClassNames, resolvedStyles } = (0, import_core4.useResolvedStylesApi)({
    classNames,
    styles,
    props
  });
  return /* @__PURE__ */ import_react8.default.createElement(
    ProgressRoot,
    __spreadValues({
      ref,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      vars
    }, others),
    /* @__PURE__ */ import_react8.default.createElement(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Progress,
  ProgressLabel,
  ProgressRoot,
  ProgressSection
});
