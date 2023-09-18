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

// src/Divider.tsx
import React from "react";
import {
  Box,
  factory,
  useProps,
  useStyles,
  createVarsResolver,
  getThemeColor,
  getSize
} from "@raikou/core";
var defaultProps = {
  orientation: "horizontal"
};
var varsResolver = createVarsResolver(
  (theme, { color, variant, size }) => ({
    root: {
      "--divider-color": color ? getThemeColor(color, theme) : void 0,
      "--divider-border-style": variant,
      "--divider-size": getSize(size, "divider-size")
    }
  })
);
var Divider = factory((_props, ref) => {
  const props = useProps("Divider", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    orientation,
    label,
    labelPosition
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "color",
    "orientation",
    "label",
    "labelPosition"
  ]);
  const getStyles = useStyles({
    name: "Divider",
    classes: {
      root: "divider-root",
      label: "divider-label"
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
  return /* @__PURE__ */ React.createElement(
    Box,
    __spreadProps(__spreadValues(__spreadValues({
      ref,
      mod: { orientation, "with-label": !!label }
    }, getStyles("root")), others), {
      role: "separator"
    }),
    label && /* @__PURE__ */ React.createElement(
      Box,
      __spreadValues({
        component: "span",
        mod: { position: labelPosition }
      }, getStyles("label")),
      label
    )
  );
});
Divider.displayName = "@raikou/core/Divider";
export {
  Divider
};
