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

// src/ColorSwatch.tsx
import React from "react";
import {
  Box,
  getRadius,
  polymorphicFactory,
  rem,
  useProps,
  useStyles,
  createVarsResolver
} from "@raikou/core";
var defaultProps = {
  withShadow: true
};
var varsResolver = createVarsResolver(
  (_, { radius, size }) => ({
    root: {
      "--cs-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--cs-size": rem(size)
    }
  })
);
var ColorSwatch = polymorphicFactory(
  (_props, ref) => {
    const props = useProps("ColorSwatch", defaultProps, _props);
    const _a = useProps("ColorSwatch", defaultProps, props), {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      color,
      size,
      radius,
      withShadow,
      children,
      variant
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "unstyled",
      "vars",
      "color",
      "size",
      "radius",
      "withShadow",
      "children",
      "variant"
    ]);
    const getStyles = useStyles({
      name: "ColorSwatch",
      props,
      classes: {
        root: "colorswatch-root",
        alphaOverlay: "colorswatch-alphaOverlay",
        shadowOverlay: "colorswatch-shadowOverlay",
        colorOverlay: "colorswatch-colorOverlay",
        childrenOverlay: "colorswatch-childrenOverlay"
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
      __spreadValues(__spreadValues({
        ref,
        variant,
        size
      }, getStyles("root", { focusable: true })), others),
      /* @__PURE__ */ React.createElement("span", __spreadValues({}, getStyles("alphaOverlay"))),
      withShadow && /* @__PURE__ */ React.createElement("span", __spreadValues({}, getStyles("shadowOverlay"))),
      /* @__PURE__ */ React.createElement(
        "span",
        __spreadValues({}, getStyles("colorOverlay", { style: { backgroundColor: color } }))
      ),
      /* @__PURE__ */ React.createElement("span", __spreadValues({}, getStyles("childrenOverlay")), children)
    );
  }
);
ColorSwatch.displayName = "@raikou/core/ColorSwatch";
export {
  ColorSwatch
};
