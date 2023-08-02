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
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
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

// src/Image.tsx
import React from "react";
import {
  Box,
  polymorphicFactory,
  useProps,
  useStyles,
  createVarsResolver,
  getRadius
} from "@raikou/core";

// src/store.ts
import { create } from "zustand";
var useStore = create(() => ({
  error: false
}));

// src/Image.tsx
var defaultProps = {
  radius: 0
};
var varsResolver = createVarsResolver((_, { radius, fit }) => ({
  root: {
    "--image-radius": getRadius(radius),
    "--image-object-fit": fit
  }
}));
var Image = polymorphicFactory((_props, ref) => {
  const props = useProps("Image", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    onError,
    src,
    radius,
    fit,
    fallbackSrc
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "onError",
    "src",
    "radius",
    "fit",
    "fallbackSrc"
  ]);
  const getStyles = useStyles({
    name: "Image",
    classes: {
      root: "image-root"
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
  if (typeof window === "undefined") {
    var request = __require("request").defaults({ encoding: null });
    request.get(src, function(error, response) {
      if (response === void 0) {
        useStore.getState().error = true;
      } else if (response.statusCode !== 200) {
        useStore.getState().error = true;
      }
    });
  }
  return /* @__PURE__ */ React.createElement(
    Box,
    __spreadValues(__spreadProps(__spreadValues({
      component: "img",
      ref
    }, getStyles("root")), {
      src: useStore.getState().error ? fallbackSrc : src
    }), others)
  );
});
Image.displayName = "@raikou/core/Image";
export {
  Image
};
