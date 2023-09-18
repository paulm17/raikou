"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
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
  ColorSwatch: () => ColorSwatch
});
module.exports = __toCommonJS(src_exports);

// src/ColorSwatch.tsx
var import_react = __toESM(require("react"));
var import_core = require("@raikou/core");
var defaultProps = {
  withShadow: true
};
var varsResolver = (0, import_core.createVarsResolver)(
  (_, { radius, size }) => ({
    root: {
      "--cs-radius": radius === void 0 ? void 0 : (0, import_core.getRadius)(radius),
      "--cs-size": (0, import_core.rem)(size)
    }
  })
);
var ColorSwatch = (0, import_core.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core.useProps)("ColorSwatch", defaultProps, _props);
    const _a = (0, import_core.useProps)("ColorSwatch", defaultProps, props), {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      color,
      size,
      radius,
      withShadow,
      children,
      variant
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "unstyled",
      "vars",
      "color",
      "size",
      "radius",
      "withShadow",
      "children",
      "variant"
    ]);
    const getStyles = (0, import_core.useStyles)({
      name: "ColorSwatch",
      props,
      classes: {
        root: "colorswatch-root",
        alphaOverlay: "colorswatch-alphaOverlay",
        shadowOverlay: "colorswatch-shadowOverlay",
        colorOverlay: "colorswatch-colorOverlay",
        childrenOverlay: "colorswatch-childrenOverlay"
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
      __spreadValues(__spreadValues({
        ref,
        variant,
        size
      }, getStyles("root", { focusable: true })), others),
      /* @__PURE__ */ import_react.default.createElement("span", __spreadValues({}, getStyles("alphaOverlay"))),
      withShadow && /* @__PURE__ */ import_react.default.createElement("span", __spreadValues({}, getStyles("shadowOverlay"))),
      /* @__PURE__ */ import_react.default.createElement(
        "span",
        __spreadValues({}, getStyles("colorOverlay", { style: { backgroundColor: color } }))
      ),
      /* @__PURE__ */ import_react.default.createElement("span", __spreadValues({}, getStyles("childrenOverlay")), children)
    );
  }
);
ColorSwatch.displayName = "@raikou/core/ColorSwatch";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ColorSwatch
});
