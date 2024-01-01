var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// src/TypographyStylesProvider.tsx
import React from "react";
import {
  Box,
  factory,
  useProps,
  useStyles
} from "@raikou/core";

// css-module:./TypographyStylesProvider.module.css#css-module
var TypographyStylesProvider_module_default = { "root": "m-d6493fad" };

// src/TypographyStylesProvider.tsx
var defaultProps = {};
var TypographyStylesProvider = factory((_props, ref) => {
  const props = useProps("TypographyStylesProvider", defaultProps, _props);
  const _a = props, { classNames, className, style, styles, unstyled } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled"]);
  const getStyles = useStyles({
    name: "TypographyStylesProvider",
    classes: TypographyStylesProvider_module_default,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled
  });
  return /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadValues({ ref }, getStyles("root")), others));
});
TypographyStylesProvider.displayName = "@raikou/core/TypographyStylesProvider";
export {
  TypographyStylesProvider
};
//# sourceMappingURL=index.mjs.map