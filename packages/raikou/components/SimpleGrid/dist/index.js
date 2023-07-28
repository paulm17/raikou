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
  SimpleGrid: () => SimpleGrid
});
module.exports = __toCommonJS(src_exports);

// src/SimpleGrid.tsx
var import_react2 = __toESM(require("react"));
var import_core2 = require("@raikou/core");

// src/SimpleGridVariables.tsx
var import_react = __toESM(require("react"));
var import_core = require("@raikou/core");
function SimpleGridVariables({
  spacing,
  verticalSpacing,
  cols,
  selector
}) {
  var _a;
  const theme = (0, import_core.useRaikouTheme)();
  const baseStyles = (0, import_core.filterProps)({
    "--sg-spacing-x": (0, import_core.getSpacing)((0, import_core.getBaseValue)(spacing)),
    "--sg-spacing-y": (0, import_core.getSpacing)((0, import_core.getBaseValue)(verticalSpacing)),
    "--sg-cols": (_a = (0, import_core.getBaseValue)(cols)) == null ? void 0 : _a.toString()
  });
  const queries = (0, import_core.keys)(theme.breakpoints).reduce((acc, breakpoint) => {
    if (!acc[breakpoint]) {
      acc[breakpoint] = {};
    }
    if (typeof spacing === "object" && spacing[breakpoint] !== void 0) {
      acc[breakpoint]["--sg-spacing-x"] = (0, import_core.getSpacing)(spacing[breakpoint]);
    }
    if (typeof verticalSpacing === "object" && verticalSpacing[breakpoint] !== void 0) {
      acc[breakpoint]["--sg-spacing-y"] = (0, import_core.getSpacing)(
        verticalSpacing[breakpoint]
      );
    }
    if (typeof cols === "object" && cols[breakpoint] !== void 0) {
      acc[breakpoint]["--sg-cols"] = cols[breakpoint];
    }
    return acc;
  }, {});
  const sortedBreakpoints = (0, import_core.getSortedBreakpoints)((0, import_core.keys)(queries), theme).filter(
    (breakpoint) => (0, import_core.keys)(queries[breakpoint.value]).length > 0
  );
  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value]})`,
    styles: queries[breakpoint.value]
  }));
  return /* @__PURE__ */ import_react.default.createElement(import_core.InlineStyles, { styles: baseStyles, media, selector });
}

// src/SimpleGrid.tsx
var defaultProps = {
  cols: 1,
  spacing: "md",
  verticalSpacing: "md"
};
var SimpleGrid = (0, import_core2.factory)((_props, ref) => {
  const props = (0, import_core2.useProps)("SimpleGrid", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    cols,
    verticalSpacing,
    spacing
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "cols",
    "verticalSpacing",
    "spacing"
  ]);
  const getStyles = (0, import_core2.useStyles)({
    name: "SimpleGrid",
    classes: {
      root: "simpleGrid-root"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars
  });
  const responsiveClassName = (0, import_core2.useRandomClassName)();
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement(SimpleGridVariables, __spreadProps(__spreadValues({}, props), { selector: `.${responsiveClassName}` }))), /* @__PURE__ */ import_react2.default.createElement(
    import_core2.Box,
    __spreadValues(__spreadValues({
      ref
    }, getStyles("root", { className: responsiveClassName })), others)
  ));
});
SimpleGrid.displayName = "@raikou/core/SimpleGrid";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SimpleGrid
});
