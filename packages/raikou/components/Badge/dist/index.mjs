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

// src/Badge.tsx
import React from "react";
import {
  Box,
  polymorphicFactory,
  useProps,
  useStyles,
  createVarsResolver,
  getSize,
  getRadius,
  getThemeColor
} from "@raikou/core";
var defaultProps = {
  size: "md",
  radius: "xl",
  variant: "filled"
};
var varsResolver = createVarsResolver(
  (theme, { radius, color, gradient, variant, size }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant
    });
    return {
      root: {
        "--badge-height": getSize(size, "badge-height"),
        "--badge-padding-x": getSize(size, "badge-padding-x"),
        "--badge-fz": getSize(size, "badge-fz"),
        "--badge-radius": getRadius(radius),
        "--badge-bg": colors.background,
        "--badge-color": colors.color,
        "--badge-bd": colors.border,
        "--badge-dot-color": variant === "dot" ? getThemeColor(color, theme) : void 0
      }
    };
  }
);
var Badge = polymorphicFactory((_props, ref) => {
  const props = useProps("Badge", defaultProps, _props);
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
  const getStyles = useStyles({
    name: "Badge",
    props,
    classes: {
      root: "badge-root",
      "root--dot": "badge-root--dot",
      section: "badge-section",
      label: "badge-label"
    },
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
    __spreadValues(__spreadProps(__spreadValues({
      variant,
      mod: { block: fullWidth }
    }, getStyles("root", { variant })), {
      ref
    }), others),
    leftSection && /* @__PURE__ */ React.createElement("span", __spreadProps(__spreadValues({}, getStyles("section")), { "data-position": "left" }), leftSection),
    /* @__PURE__ */ React.createElement("span", __spreadValues({}, getStyles("label")), children),
    rightSection && /* @__PURE__ */ React.createElement("span", __spreadProps(__spreadValues({}, getStyles("section")), { "data-position": "right" }), rightSection)
  );
});
Badge.displayName = "@raikou/Badge";
export {
  Badge
};
