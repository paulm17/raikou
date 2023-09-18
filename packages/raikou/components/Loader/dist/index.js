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
  Loader: () => Loader,
  defaultLoaders: () => defaultLoaders
});
module.exports = __toCommonJS(src_exports);

// src/Loader.tsx
var import_react5 = __toESM(require("react"));
var import_core5 = require("@raikou/core");

// src/loaders/Bars.tsx
var import_react = __toESM(require("react"));
var import_clsx = __toESM(require("clsx"));
var import_core = require("@raikou/core");
var Bars = (0, import_react.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react.default.createElement(
      import_core.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: (0, import_clsx.default)("bars-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react.default.createElement("span", { className: "bar" }),
      /* @__PURE__ */ import_react.default.createElement("span", { className: "bar" }),
      /* @__PURE__ */ import_react.default.createElement("span", { className: "bar" })
    );
  }
);

// src/loaders/Oval.tsx
var import_react2 = __toESM(require("react"));
var import_clsx2 = __toESM(require("clsx"));
var import_core2 = require("@raikou/core");
var Oval = (0, import_react2.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react2.default.createElement(
      import_core2.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: (0, import_clsx2.default)("oval-loader", className)
      }, others), {
        ref
      })
    );
  }
);

// src/loaders/Progress.tsx
var import_react3 = __toESM(require("react"));
var import_clsx3 = __toESM(require("clsx"));
var import_core3 = require("@raikou/core");
var Progress = (0, import_react3.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react3.default.createElement(
      import_core3.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: (0, import_clsx3.default)("progress-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react3.default.createElement("svg", { viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ import_react3.default.createElement("g", { fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ import_react3.default.createElement("g", { transform: "translate(2.5 2.5)", strokeWidth: "5" }, /* @__PURE__ */ import_react3.default.createElement("circle", { strokeOpacity: ".5", cx: "16", cy: "16", r: "16" }), /* @__PURE__ */ import_react3.default.createElement("path", { d: "M32 16c0-9.94-8.06-16-16-16" }, /* @__PURE__ */ import_react3.default.createElement(
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

// src/loaders/Dots.tsx
var import_react4 = __toESM(require("react"));
var import_clsx4 = __toESM(require("clsx"));
var import_core4 = require("@raikou/core");
var Dots = (0, import_react4.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react4.default.createElement(
      import_core4.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: (0, import_clsx4.default)("dots-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "dot" })
    );
  }
);

// src/Loader.tsx
var defaultLoaders = {
  bars: Bars,
  oval: Oval,
  dots: Dots,
  progress: Progress
};
var defaultProps = {
  loaders: defaultLoaders,
  type: "oval"
};
var varsResolver = (0, import_core5.createVarsResolver)(
  (theme, { size, color }) => ({
    root: {
      "--loader-size": (0, import_core5.getSize)(size, "loader-size"),
      "--loader-color": color ? (0, import_core5.getThemeColor)(color, theme) : void 0
    }
  })
);
var Loader = (0, import_core5.factory)((_props, ref) => {
  const props = (0, import_core5.useProps)("Loader", defaultProps, _props);
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
  const getStyles = (0, import_core5.useStyles)({
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
  return /* @__PURE__ */ import_react5.default.createElement(
    import_core5.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      ref,
      component: loaders[type],
      variant,
      size
    }), others)
  );
});
Loader.displayName = "@raikou/core/Loader";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Loader,
  defaultLoaders
});
