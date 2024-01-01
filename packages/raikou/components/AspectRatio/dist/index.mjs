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

// src/AspectRatio.tsx
import React from "react";
import {
  Box,
  factory,
  useProps,
  useStyles,
  createVarsResolver
} from "@raikou/core";

// css-module:./AspectRatio.module.css#css-module
var AspectRatio_module_default = { "root": "m-71ac47fc" };

// src/AspectRatio.tsx
var defaultProps = {};
var varsResolver = createVarsResolver((_, { ratio }) => ({
  root: {
    "--ar-ratio": ratio == null ? void 0 : ratio.toString()
  }
}));
var AspectRatio = factory((_props, ref) => {
  const props = useProps("AspectRatio", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    ratio
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "ratio"
  ]);
  const getStyles = useStyles({
    name: "AspectRatio",
    classes: AspectRatio_module_default,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadValues({ ref }, getStyles("root")), others));
});
AspectRatio.displayName = "@raikou/core/AspectRatio";
AspectRatio.classes = AspectRatio_module_default;
export {
  AspectRatio
};
//# sourceMappingURL=index.mjs.map