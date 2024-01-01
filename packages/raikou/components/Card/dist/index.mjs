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

// src/Card.tsx
import React3, { Children, cloneElement } from "react";
import {
  polymorphicFactory as polymorphicFactory3,
  useProps as useProps3,
  useStyles as useStyles2,
  createVarsResolver as createVarsResolver2,
  getSpacing
} from "@raikou/core";

// ../Paper/src/Paper.tsx
import React from "react";
import {
  Box,
  polymorphicFactory,
  useProps,
  useStyles,
  getRadius,
  getShadow,
  createVarsResolver
} from "@raikou/core";

// css-module:./Paper.module.css#css-module
var Paper_module_default = { "root": "m-1b7284a3" };

// ../Paper/src/Paper.tsx
var defaultProps = {};
var varsResolver = createVarsResolver(
  (_, { radius, shadow }) => ({
    root: {
      "--paper-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--paper-shadow": getShadow(shadow)
    }
  })
);
var Paper = polymorphicFactory((_props, ref) => {
  const props = useProps("Paper", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    withBorder,
    vars,
    radius,
    shadow,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "withBorder",
    "vars",
    "radius",
    "shadow",
    "variant"
  ]);
  const getStyles = useStyles({
    name: "Paper",
    props,
    classes: Paper_module_default,
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
      ref,
      mod: { "data-with-border": withBorder }
    }, getStyles("root")), {
      variant
    }), others)
  );
});
Paper.displayName = "@raikou/core/Paper";
Paper.classes = Paper_module_default;

// src/CardSection/CardSection.tsx
import React2 from "react";
import {
  Box as Box2,
  polymorphicFactory as polymorphicFactory2,
  useProps as useProps2
} from "@raikou/core";

// src/store.ts
import createStore from "pure-store";
var useStore = createStore({
  getStyles: void 0
});

// src/CardSection/CardSection.tsx
var defaultProps2 = {};
var CardSection = polymorphicFactory2(
  (_props, ref) => {
    const props = useProps2("CardSection", defaultProps2, _props);
    const _a = props, {
      classNames,
      className,
      style,
      styles,
      vars,
      withBorder,
      inheritPadding
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "vars",
      "withBorder",
      "inheritPadding"
    ]);
    const ctx = useStore.getState();
    return /* @__PURE__ */ React2.createElement(
      Box2,
      __spreadValues(__spreadValues({
        ref,
        mod: { "with-border": withBorder, "inherit-padding": inheritPadding }
      }, ctx.getStyles("section", { className, style, styles, classNames })), others)
    );
  }
);
CardSection.displayName = "@raikou/core/CardSection";

// css-module:./Card.module.css#css-module
var Card_module_default = { "root": "m-e615b15f", "section": "m-599a2148" };

// src/Card.tsx
var defaultProps3 = {};
var varsResolver2 = createVarsResolver2((_, { padding }) => ({
  root: {
    "--card-padding": getSpacing(padding)
  }
}));
var Card = polymorphicFactory3((_props, ref) => {
  const props = useProps3("Card", defaultProps3, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    padding
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "children",
    "padding"
  ]);
  const getStyles = useStyles2({
    name: "Card",
    props,
    classes: Card_module_default,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver2
  });
  useStore.update((state) => {
    state.getStyles = getStyles;
  });
  const _children = Children.toArray(children);
  const content = _children.map((child, index) => {
    if (typeof child === "object" && child && "type" in child && child.type === CardSection) {
      return cloneElement(child, {
        "data-first-section": index === 0 || void 0,
        "data-last-section": index === _children.length - 1 || void 0
      });
    }
    return child;
  });
  return /* @__PURE__ */ React3.createElement(Paper, __spreadValues(__spreadValues({ ref }, getStyles("root")), others), content);
});
Card.displayName = "@raikou/core/Card";
Card.Section = CardSection;
Card.classes = Card_module_default;
export {
  Card,
  CardSection
};
//# sourceMappingURL=index.mjs.map