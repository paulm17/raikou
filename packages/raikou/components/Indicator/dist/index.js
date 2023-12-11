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
  Indicator: () => Indicator
});
module.exports = __toCommonJS(src_exports);

// src/Indicator.tsx
var import_react = __toESM(require("react"));
var import_core2 = require("@raikou/core");

// src/get-position-variables/get-position-variables.ts
var import_core = require("@raikou/core");
function getPositionVariables(_position = "top-end", offset = 0) {
  const variables = {
    "--indicator-top": void 0,
    "--indicator-bottom": void 0,
    "--indicator-left": void 0,
    "--indicator-right": void 0,
    "--indicator-translate-x": void 0,
    "--indicator-translate-y": void 0
  };
  const _offset = (0, import_core.rem)(offset);
  const [position, placement] = _position.split("-");
  if (position === "top") {
    variables["--indicator-top"] = _offset;
    variables["--indicator-translate-y"] = "-50%";
  }
  if (position === "middle") {
    variables["--indicator-top"] = "50%";
    variables["--indicator-translate-y"] = "-50%";
  }
  if (position === "bottom") {
    variables["--indicator-bottom"] = _offset;
    variables["--indicator-translate-y"] = "50%";
  }
  if (placement === "start") {
    variables["--indicator-left"] = _offset;
    variables["--indicator-translate-x"] = "-50%";
  }
  if (placement === "center") {
    variables["--indicator-left"] = "50%";
    variables["--indicator-translate-x"] = "-50%";
  }
  if (placement === "end") {
    variables["--indicator-right"] = _offset;
    variables["--indicator-translate-x"] = "50%";
  }
  return variables;
}

// css-module:./Indicator.module.css#css-module
var Indicator_module_default = { "root": "m-e5262200", "indicator": "m-760d1fb1", "processing": "m-885901b1" };

// src/Indicator.tsx
var defaultProps = {
  position: "top-end",
  offset: 0,
  inline: false,
  withBorder: false,
  disabled: false,
  processing: false,
  size: 10
};
var varsResolver = (0, import_core2.createVarsResolver)(
  (theme, { color, position, offset, size, radius, zIndex }) => ({
    root: __spreadValues({
      "--indicator-color": color ? (0, import_core2.getThemeColor)(color, theme) : void 0,
      "--indicator-size": (0, import_core2.rem)(size),
      "--indicator-radius": radius === void 0 ? void 0 : (0, import_core2.getRadius)(radius),
      "--indicator-z-index": zIndex == null ? void 0 : zIndex.toString()
    }, getPositionVariables(position, offset))
  })
);
var Indicator = (0, import_core2.factory)((_props, ref) => {
  const props = (0, import_core2.useProps)("Indicator", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    position,
    offset,
    inline,
    label,
    radius,
    color,
    withBorder,
    disabled,
    processing,
    zIndex
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "children",
    "position",
    "offset",
    "inline",
    "label",
    "radius",
    "color",
    "withBorder",
    "disabled",
    "processing",
    "zIndex"
  ]);
  const getStyles = (0, import_core2.useStyles)({
    name: "Indicator",
    classes: Indicator_module_default,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ import_react.default.createElement(import_core2.Box, __spreadValues(__spreadProps(__spreadValues({ ref }, getStyles("root")), { mod: { inline } }), others), !disabled && /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(
    import_core2.Box,
    __spreadValues({
      mod: {
        "with-label": !!label,
        "with-border": withBorder,
        processing
      }
    }, getStyles("indicator")),
    label
  )), children);
});
Indicator.classes = Indicator_module_default;
Indicator.displayName = "@raikou/core/Indicator";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Indicator
});
//# sourceMappingURL=index.js.map