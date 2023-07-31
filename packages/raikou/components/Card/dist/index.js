"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Card: () => Card,
  CardSection: () => CardSection
});
module.exports = __toCommonJS(src_exports);

// src/Card.tsx
var import_react5 = __toESM(require("react"));
var import_core3 = require("@raikou/core");

// ../Paper/src/Paper.tsx
var import_react = __toESM(require("react"));
var import_core = require("@raikou/core");
var defaultProps = {};
var varsResolver = (0, import_core.createVarsResolver)(
  (_, { radius, shadow }) => ({
    root: {
      "--paper-radius": (0, import_core.getRadius)(radius),
      "--paper-shadow": (0, import_core.getShadow)(shadow)
    }
  })
);
var Paper = (0, import_core.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core.useProps)("Paper", defaultProps, _props);
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
  const getStyles = (0, import_core.useStyles)({
    name: "Paper",
    props,
    classes: {
      root: "paper-root"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ import_react.default.createElement(
    import_core.Box,
    __spreadValues(__spreadProps(__spreadValues({
      ref,
      mod: { "data-with-border": withBorder }
    }, getStyles("root")), {
      variant
    }), others)
  );
});
Paper.displayName = "@raikou/core/Paper";

// src/CardSection/CardSection.tsx
var import_react4 = __toESM(require("react"));
var import_core2 = require("@raikou/core");

// ../_utils/create-safe-context/create-safe-context.tsx
var import_react2 = __toESM(require("react"));
function createSafeContext(errorMessage) {
  const Context = (0, import_react2.createContext)(null);
  const useSafeContext = () => {
    const ctx = (0, import_react2.useContext)(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react2.default.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../_utils/create-optional-context/create-optional-context.tsx
var import_react3 = __toESM(require("react"));

// src/Card.context.ts
var [CardProvider, useCardContext] = createSafeContext("Card component was not found in tree");

// src/CardSection/CardSection.tsx
var defaultProps2 = {};
var CardSection = (0, import_core2.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core2.useProps)("CardSection", defaultProps2, _props);
    const _a = props, {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      withBorder,
      inheritPadding
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "unstyled",
      "vars",
      "withBorder",
      "inheritPadding"
    ]);
    const ctx = useCardContext();
    return /* @__PURE__ */ import_react4.default.createElement(
      import_core2.Box,
      __spreadValues(__spreadValues({
        ref,
        mod: { "with-border": withBorder, "inherit-padding": inheritPadding }
      }, ctx.getStyles("section", { className, style, styles, classNames })), others)
    );
  }
);
CardSection.displayName = "@raikou/core/CardSection";

// src/Card.tsx
var defaultProps3 = {
  padding: "md"
};
var varsResolver2 = (0, import_core3.createVarsResolver)((_, { padding }) => ({
  root: {
    "--card-padding": (0, import_core3.getSpacing)(padding)
  }
}));
var Card = (0, import_core3.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core3.useProps)("Card", defaultProps3, _props);
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
  const getStyles = (0, import_core3.useStyles)({
    name: "Card",
    props,
    classes: {
      root: "card-root",
      section: "card-section"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver2
  });
  const _children = import_react5.Children.toArray(children);
  const content = _children.map((child, index) => {
    if (typeof child === "object" && child && "type" in child && child.type === CardSection) {
      return (0, import_react5.cloneElement)(child, {
        "data-first-section": index === 0 || void 0,
        "data-last-section": index === _children.length - 1 || void 0
      });
    }
    return child;
  });
  return /* @__PURE__ */ import_react5.default.createElement(CardProvider, { value: { getStyles } }, /* @__PURE__ */ import_react5.default.createElement(Paper, __spreadValues(__spreadValues({ ref }, getStyles("root")), others), content));
});
Card.displayName = "@raikou/core/Card";
Card.Section = CardSection;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Card,
  CardSection
});
