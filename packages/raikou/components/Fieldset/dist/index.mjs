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

// src/Fieldset.tsx
import React from "react";
import {
  Box,
  factory,
  useProps,
  useStyles,
  createVarsResolver,
  getRadius
} from "@raikou/core";

// css-module:./Fieldset.module.css#css-module
var Fieldset_module_default = { "root": "m-e9408a47", "root--default": "m-84c9523a", "root--filled": "m-ef274e49", "root--unstyled": "m-eda993d3", "legend": "m-90794832" };

// src/Fieldset.tsx
var defaultProps = {
  variant: "default"
};
var varsResolver = createVarsResolver((_, { radius }) => ({
  root: {
    "--fieldset-radius": radius === void 0 ? void 0 : getRadius(radius)
  }
}));
var Fieldset = factory((_props, ref) => {
  const props = useProps("Fieldset", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    legend,
    variant,
    children
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "legend",
    "variant",
    "children"
  ]);
  const getStyles = useStyles({
    name: "Fieldset",
    classes: Fieldset_module_default,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React.createElement(
    Box,
    __spreadValues(__spreadValues({
      component: "fieldset",
      ref,
      variant
    }, getStyles("root", { variant })), others),
    legend && /* @__PURE__ */ React.createElement("legend", __spreadValues({}, getStyles("legend", { variant })), legend),
    children
  );
});
Fieldset.displayName = "@raikou/core/Fieldset";
Fieldset.classes = Fieldset_module_default;
export {
  Fieldset
};
//# sourceMappingURL=index.mjs.map