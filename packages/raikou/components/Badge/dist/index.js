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
  Badge: () => Badge
});
module.exports = __toCommonJS(src_exports);

// src/Badge.tsx
var import_react = __toESM(require("react"));
var import_core = require("@raikou/core");

// css-module:./Badge.module.css#css-module
var Badge_module_default = { "root": "m-347db0ec", "root--dot": "m-fbd81e3d", "label": "m-5add502a", "section": "m-91fdda9b" };

// src/Badge.tsx
var defaultProps = {};
var varsResolver = (0, import_core.createVarsResolver)(
  (theme, { radius, color, gradient, variant, size }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled"
    });
    return {
      root: {
        "--badge-height": (0, import_core.getSize)(size, "badge-height"),
        "--badge-padding-x": (0, import_core.getSize)(size, "badge-padding-x"),
        "--badge-fz": (0, import_core.getSize)(size, "badge-fz"),
        "--badge-radius": radius === void 0 ? void 0 : (0, import_core.getRadius)(radius),
        "--badge-bg": color || variant ? colors.background : void 0,
        "--badge-color": color || variant ? colors.color : void 0,
        "--badge-bd": color || variant ? colors.border : void 0,
        "--badge-dot-color": variant === "dot" ? (0, import_core.getThemeColor)(color, theme) : void 0
      }
    };
  }
);
var Badge = (0, import_core.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core.useProps)("Badge", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    radius,
    color,
    gradient,
    leftSection,
    rightSection,
    children,
    variant,
    fullWidth
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "radius",
    "color",
    "gradient",
    "leftSection",
    "rightSection",
    "children",
    "variant",
    "fullWidth"
  ]);
  const getStyles = (0, import_core.useStyles)({
    name: "Badge",
    props,
    classes: Badge_module_default,
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
    __spreadValues(__spreadProps(__spreadValues({
      variant,
      mod: { block: fullWidth }
    }, getStyles("root", { variant })), {
      ref
    }), others),
    leftSection && /* @__PURE__ */ import_react.default.createElement("span", __spreadProps(__spreadValues({}, getStyles("section")), { "data-position": "left" }), leftSection),
    /* @__PURE__ */ import_react.default.createElement("span", __spreadValues({}, getStyles("label")), children),
    rightSection && /* @__PURE__ */ import_react.default.createElement("span", __spreadProps(__spreadValues({}, getStyles("section")), { "data-position": "right" }), rightSection)
  );
});
Badge.displayName = "@raikou/core/Badge";
Badge.classes = Badge_module_default;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Badge
});
//# sourceMappingURL=index.js.map