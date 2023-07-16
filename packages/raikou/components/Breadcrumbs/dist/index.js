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
  Breadcrumbs: () => Breadcrumbs
});
module.exports = __toCommonJS(src_exports);

// src/Breadcrumbs.tsx
var import_react = __toESM(require("react"));
var import_core = require("@raikou/core");
var defaultProps = {
  separator: "/",
  separatorMargin: "xs"
};
var varsResolver = (0, import_core.createVarsResolver)(
  (_, { separatorMargin }) => ({
    root: {
      "--bc-separator-margin": (0, import_core.getSpacing)(separatorMargin)
    }
  })
);
var Breadcrumbs = (0, import_core.factory)((_props, ref) => {
  const props = (0, import_core.useProps)("Breadcrumbs", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    separator,
    separatorMargin
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "children",
    "separator",
    "separatorMargin"
  ]);
  const getStyles = (0, import_core.useStyles)({
    name: "Breadcrumbs",
    classes: {
      root: "breadcrumbs-root",
      breadcrumb: "breadcrumbs-breadcrumb",
      separator: "breadcrumbs-separator"
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
  const items = import_react.default.Children.toArray(children).reduce(
    (acc, child, index, array) => {
      var _a2;
      const item = (0, import_core.isElement)(child) ? import_react.default.cloneElement(child, __spreadProps(__spreadValues({}, getStyles("breadcrumb", { className: (_a2 = child.props) == null ? void 0 : _a2.className })), {
        key: index
      })) : /* @__PURE__ */ import_react.default.createElement("div", __spreadProps(__spreadValues({}, getStyles("breadcrumb")), { key: index }), child);
      acc.push(item);
      if (index !== array.length - 1) {
        acc.push(
          /* @__PURE__ */ import_react.default.createElement(import_core.Box, __spreadProps(__spreadValues({}, getStyles("separator")), { key: `separator-${index}` }), separator)
        );
      }
      return acc;
    },
    []
  );
  return /* @__PURE__ */ import_react.default.createElement(import_core.Box, __spreadValues(__spreadValues({ ref }, getStyles("root")), others), items);
});
Breadcrumbs.displayName = "@raikou/core/Breadcrumbs";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Breadcrumbs
});
