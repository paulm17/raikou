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
  Spoiler: () => Spoiler
});
module.exports = __toCommonJS(src_exports);

// src/Spoiler.tsx
var import_react3 = __toESM(require("react"));
var import_hooks = require("@raikou/hooks");
var import_core3 = require("@raikou/core");

// ../Anchor/src/Anchor.tsx
var import_react2 = __toESM(require("react"));

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

// ../Anchor/src/Anchor.tsx
var import_core2 = require("@raikou/core");

// ../Text/src/Text.tsx
var import_react = __toESM(require("react"));
var import_core = require("@raikou/core");
function getTextTruncate(truncate) {
  if (truncate === "start") {
    return "start";
  }
  if (truncate === "end" || truncate) {
    return "end";
  }
  return void 0;
}
var defaultProps = {
  variant: "text",
  inherit: false,
  size: "md"
};
var varsResolver = (0, import_core.createVarsResolver)(
  (theme, { variant, lineClamp, gradient, size }) => ({
    root: {
      "--text-fz": (0, import_core.getFontSize)(size),
      "--text-lh": (0, import_core.getLineHeight)(size),
      "--text-gradient": variant === "gradient" ? (0, import_core.getGradient)(gradient, theme) : void 0,
      "--text-line-clamp": typeof lineClamp === "number" ? lineClamp.toString() : void 0
    }
  })
);
var Text = (0, import_core.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core.useProps)("Text", defaultProps, _props);
  const _a = props, {
    lineClamp,
    truncate,
    inline,
    inherit,
    gradient,
    span,
    __staticSelector,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    variant,
    mod,
    size
  } = _a, others = __objRest(_a, [
    "lineClamp",
    "truncate",
    "inline",
    "inherit",
    "gradient",
    "span",
    "__staticSelector",
    "vars",
    "className",
    "style",
    "classNames",
    "styles",
    "unstyled",
    "variant",
    "mod",
    "size"
  ]);
  const getStyles = (0, import_core.useStyles)({
    name: ["Text", __staticSelector],
    props,
    classes: {
      root: "text-root"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ import_react.default.createElement(
    import_core.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { focusable: true })), {
      ref,
      component: span ? "span" : "p",
      variant,
      mod: [
        {
          "data-truncate": getTextTruncate(truncate),
          "data-line-clamp": typeof lineClamp === "number",
          "data-inline": inline,
          "data-inherit": inherit
        },
        mod
      ],
      size
    }), others)
  );
});
Text.displayName = "@raikou/core/Text";

// ../Anchor/src/Anchor.tsx
var defaultProps2 = {
  underline: "hover"
};
var Anchor = (0, import_core2.polymorphicFactory)((props, ref) => {
  const _a = (0, import_core2.useProps)(
    "Anchor",
    defaultProps2,
    props
  ), { underline, className } = _a, others = __objRest(_a, ["underline", "className"]);
  return /* @__PURE__ */ import_react2.default.createElement(
    Text,
    __spreadProps(__spreadValues({
      component: "a",
      ref,
      className: clsx_default("anchor-root", className)
    }, others), {
      mod: { underline },
      __staticSelector: "Anchor"
    })
  );
});
Anchor.displayName = "@raikou/core/Anchor";

// src/Spoiler.tsx
var defaultProps3 = {
  maxHeight: 100,
  initialState: false
};
var varsResolver2 = (0, import_core3.createVarsResolver)(
  (_, { transitionDuration }) => ({
    root: {
      "--spoiler-transition-duration": transitionDuration !== void 0 ? `${transitionDuration}ms` : void 0
    }
  })
);
var Spoiler = (0, import_core3.factory)((_props, ref) => {
  const props = (0, import_core3.useProps)("Spoiler", defaultProps3, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    initialState,
    maxHeight,
    hideLabel,
    showLabel,
    children,
    controlRef
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "initialState",
    "maxHeight",
    "hideLabel",
    "showLabel",
    "children",
    "controlRef"
  ]);
  const getStyles = (0, import_core3.useStyles)({
    name: "Spoiler",
    classes: {
      root: "spoiler-root",
      content: "spoiler-content"
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
  const [show, setShowState] = (0, import_react3.useState)(initialState);
  const { ref: contentRef, height } = (0, import_hooks.useElementSize)();
  const spoiler = maxHeight < height;
  const spoilerMoreContent = show ? hideLabel : showLabel;
  const s = {
    maxHeight: !show ? (0, import_core3.rem)(maxHeight) : height ? (0, import_core3.rem)(height) : void 0
  };
  return /* @__PURE__ */ import_react3.default.createElement(import_core3.Box, __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), { ref }), others), /* @__PURE__ */ import_react3.default.createElement("div", __spreadProps(__spreadValues({}, getStyles("content", { style: s })), { "data-reduce-motion": true }), /* @__PURE__ */ import_react3.default.createElement("div", { ref: contentRef }, children)), spoiler && /* @__PURE__ */ import_react3.default.createElement(
    Anchor,
    __spreadValues({
      component: "button",
      ref: controlRef,
      onClick: () => setShowState((opened) => !opened)
    }, getStyles("control")),
    spoilerMoreContent
  ));
});
Spoiler.displayName = "@raikou/core/Spoiler";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Spoiler
});