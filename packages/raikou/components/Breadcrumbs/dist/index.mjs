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

// src/Breadcrumbs.tsx
import React from "react";
import {
  Box,
  factory,
  useProps,
  useStyles,
  createVarsResolver,
  isElement,
  getSpacing
} from "@raikou/core";
var defaultProps = {
  separator: "/",
  separatorMargin: "xs"
};
var varsResolver = createVarsResolver(
  (_, { separatorMargin }) => ({
    root: {
      "--bc-separator-margin": getSpacing(separatorMargin)
    }
  })
);
var Breadcrumbs = factory((_props, ref) => {
  const props = useProps("Breadcrumbs", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    separator,
    separatorMargin
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "children",
    "separator",
    "separatorMargin"
  ]);
  const getStyles = useStyles({
    name: "Breadcrumbs",
    classes: {
      root: "breadcrumbs-root",
      breadcrumb: "breadcrumbs-breadcrumb",
      separator: "breadcrumbs-separator"
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
  const items = React.Children.toArray(children).reduce(
    (acc, child, index, array) => {
      var _a2;
      const item = isElement(child) ? React.cloneElement(child, __spreadProps(__spreadValues({}, getStyles("breadcrumb", { className: (_a2 = child.props) == null ? void 0 : _a2.className })), {
        key: index
      })) : /* @__PURE__ */ React.createElement("div", __spreadProps(__spreadValues({}, getStyles("breadcrumb")), { key: index }), child);
      acc.push(item);
      if (index !== array.length - 1) {
        acc.push(
          /* @__PURE__ */ React.createElement(Box, __spreadProps(__spreadValues({}, getStyles("separator")), { key: `separator-${index}` }), separator)
        );
      }
      return acc;
    },
    []
  );
  return /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadValues({ ref }, getStyles("root")), others), items);
});
Breadcrumbs.displayName = "@raikou/core/Breadcrumbs";
export {
  Breadcrumbs
};
