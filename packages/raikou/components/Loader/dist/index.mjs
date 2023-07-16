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

// src/Loader.tsx
import React4 from "react";
import {
  Box as Box4,
  useProps,
  getThemeColor,
  useStyles,
  factory,
  getSize,
  createVarsResolver
} from "@raikou/core";

// src/loaders/Bars.tsx
import React, { forwardRef } from "react";
import cx from "clsx";
import { Box } from "@raikou/core";
var Bars = forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React.createElement(
      Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: cx("bars-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React.createElement("span", { className: "bar" }),
      /* @__PURE__ */ React.createElement("span", { className: "bar" }),
      /* @__PURE__ */ React.createElement("span", { className: "bar" })
    );
  }
);

// src/loaders/Oval.tsx
import React2, { forwardRef as forwardRef2 } from "react";
import cx2 from "clsx";
import { Box as Box2 } from "@raikou/core";
var Oval = forwardRef2(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React2.createElement(
      Box2,
      __spreadProps(__spreadValues({
        component: "span",
        className: cx2("oval-loader", className)
      }, others), {
        ref
      })
    );
  }
);

// src/loaders/Dots.tsx
import React3, { forwardRef as forwardRef3 } from "react";
import cx3 from "clsx";
import { Box as Box3 } from "@raikou/core";
var Dots = forwardRef3(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React3.createElement(
      Box3,
      __spreadProps(__spreadValues({
        component: "span",
        className: cx3("dots-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React3.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React3.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React3.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React3.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React3.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React3.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React3.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React3.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React3.createElement("span", { className: "dot" })
    );
  }
);

// src/Loader.tsx
var defaultLoaders = {
  bars: Bars,
  oval: Oval,
  dots: Dots
};
var defaultProps = {
  size: "md",
  loaders: defaultLoaders,
  type: "oval"
};
var varsResolver = createVarsResolver(
  (theme, { size, color }) => ({
    root: {
      "--loader-size": getSize(size, "loader-size"),
      "--loader-color": getThemeColor(color, theme)
    }
  })
);
var Loader = factory((_props, ref) => {
  const props = useProps("Loader", defaultProps, _props);
  const _a = props, {
    size,
    color,
    type,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    loaders,
    variant
  } = _a, others = __objRest(_a, [
    "size",
    "color",
    "type",
    "vars",
    "className",
    "style",
    "classNames",
    "styles",
    "unstyled",
    "loaders",
    "variant"
  ]);
  const getStyles = useStyles({
    name: "Loader",
    props,
    classes: {
      root: "loader-root"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React4.createElement(
    Box4,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      ref,
      component: loaders[type],
      variant,
      size
    }), others)
  );
});
Loader.displayName = "@raikou/core/Loader";
export {
  Loader,
  defaultLoaders
};
