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
  Title: () => Title
});
module.exports = __toCommonJS(src_exports);

// src/Title.tsx
var import_react = __toESM(require("react"));
var import_core2 = require("@raikou/core");

// src/get-title-size.ts
var import_core = require("@raikou/core");
var headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
function getTitleSize(order, size) {
  const titleSize = size !== void 0 ? size : `h${order}`;
  if (headings.includes(titleSize)) {
    return {
      fontSize: `var(--raikou-${titleSize}-font-size)`,
      fontWeight: `var(--raikou-${titleSize}-font-weight)`,
      lineHeight: `var(--raikou-${titleSize}-line-height)`
    };
  }
  return {
    fontSize: (0, import_core.rem)(titleSize),
    fontWeight: `var(--raikou-h${order}-font-weight)`,
    lineHeight: `var(--raikou-h${order}-line-height)`
  };
}

// css-module:./Title.module.css#css-module
var Title_module_default = { "root": "m-8a5d1357" };

// src/Title.tsx
var defaultProps = {
  order: 1
};
var varsResolver = (0, import_core2.createVarsResolver)((_, { order, size }) => {
  const sizeVariables = getTitleSize(order, size);
  return {
    root: {
      "--title-fw": sizeVariables.fontWeight,
      "--title-lh": sizeVariables.lineHeight,
      "--title-fz": sizeVariables.fontSize
    }
  };
});
var Title = (0, import_core2.factory)((_props, ref) => {
  const props = (0, import_core2.useProps)("Title", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    order,
    vars,
    size,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "order",
    "vars",
    "size",
    "variant"
  ]);
  const getStyles = (0, import_core2.useStyles)({
    name: "Title",
    props,
    classes: Title_module_default,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  if (![1, 2, 3, 4, 5, 6].includes(order)) {
    return null;
  }
  return /* @__PURE__ */ import_react.default.createElement(
    import_core2.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      component: `h${order}`,
      variant,
      ref,
      mod: { order },
      size
    }), others)
  );
});
Title.classes = Title_module_default;
Title.displayName = "@raikou/core/Title";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Title
});
//# sourceMappingURL=index.js.map