var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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

// src/Stack.tsx
import React from "react";
import {
  Box,
  factory,
  useProps,
  useStyles,
  getSpacing,
  createVarsResolver
} from "@raikou/core";

// css-module:./Stack.module.css#css-module
var Stack_module_default = { "root": "m-6d731127" };

// src/Stack.tsx
var defaultProps = {
  gap: "md",
  align: "stretch",
  justify: "flex-start"
};
var varsResolver = createVarsResolver(
  (_, { gap, align, justify }) => ({
    root: {
      "--stack-gap": getSpacing(gap),
      "--stack-align": align,
      "--stack-justify": justify
    }
  })
);
var Stack = factory((_props, ref) => {
  const props = useProps("Stack", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    align,
    justify,
    gap,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "align",
    "justify",
    "gap",
    "variant"
  ]);
  const getStyles = useStyles({
    name: "Stack",
    props,
    classes: Stack_module_default,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadProps(__spreadValues({ ref }, getStyles("root")), { variant }), others));
});
Stack.displayName = "@raikou/core/Stack";
Stack.classes = Stack_module_default;
export {
  Stack
};
//# sourceMappingURL=index.mjs.map