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
  FLEX_STYLE_PROPS_DATA: () => FLEX_STYLE_PROPS_DATA,
  Flex: () => Flex
});
module.exports = __toCommonJS(src_exports);

// src/flex-props.ts
var FLEX_STYLE_PROPS_DATA = {
  gap: { type: "spacing", property: "gap" },
  rowGap: { type: "spacing", property: "rowGap" },
  columnGap: { type: "spacing", property: "columnGap" },
  align: { type: "identity", property: "alignItems" },
  justify: { type: "identity", property: "justifyContent" },
  wrap: { type: "identity", property: "flexWrap" },
  direction: { type: "identity", property: "flexDirection" }
};

// src/Flex.tsx
var import_react = __toESM(require("react"));
var import_core = require("@raikou/core");

// css-module:./Flex.module.css#css-module
var Flex_module_default = { "flex-root": "m-3bac8182" };

// src/Flex.tsx
var defaultProps = {};
var Flex = (0, import_core.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core.useProps)("Flex", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    gap,
    rowGap,
    columnGap,
    align,
    justify,
    wrap,
    direction
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "gap",
    "rowGap",
    "columnGap",
    "align",
    "justify",
    "wrap",
    "direction"
  ]);
  const getStyles = (0, import_core.useStyles)({
    name: "Flex",
    classes: Flex_module_default,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars
  });
  const theme = (0, import_core.useRaikouTheme)();
  const responsiveClassName = (0, import_core.useRandomClassName)();
  const parsedStyleProps = (0, import_core.parseStyleProps)({
    // @ts-ignore
    styleProps: { gap, rowGap, columnGap, align, justify, wrap, direction },
    theme,
    data: FLEX_STYLE_PROPS_DATA
  });
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, parsedStyleProps.hasResponsiveStyles && /* @__PURE__ */ import_react.default.createElement(
    import_core.InlineStyles,
    {
      selector: `.${responsiveClassName}`,
      styles: parsedStyleProps.styles,
      media: parsedStyleProps.media
    }
  ), /* @__PURE__ */ import_react.default.createElement(
    import_core.Box,
    __spreadValues(__spreadValues({
      ref
    }, getStyles("root", {
      className: responsiveClassName,
      style: (0, import_core.filterProps)(parsedStyleProps.inlineStyles)
    })), others)
  ));
});
Flex.displayName = "@raikou/core/Flex";
Flex.classes = Flex_module_default;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FLEX_STYLE_PROPS_DATA,
  Flex
});
//# sourceMappingURL=index.js.map