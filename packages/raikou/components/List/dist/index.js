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
  List: () => List,
  ListItem: () => ListItem
});
module.exports = __toCommonJS(src_exports);

// src/List.tsx
var import_react2 = __toESM(require("react"));
var import_core2 = require("@raikou/core");

// src/ListItem/ListItem.tsx
var import_react = __toESM(require("react"));
var import_core = require("@raikou/core");

// src/store.ts
var import_zustand = require("zustand");
var useStore = (0, import_zustand.create)(() => ({
  getStyles: void 0,
  center: void 0,
  icon: void 0
}));

// src/ListItem/ListItem.tsx
var defaultProps = {};
var ListItem = (0, import_core.factory)((_props, ref) => {
  const props = (0, import_core.useProps)("ListItem", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    vars,
    icon,
    children
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "vars",
    "icon",
    "children"
  ]);
  const _icon = icon || useStore.getState().icon;
  const stylesApiProps = { classNames, styles };
  return /* @__PURE__ */ import_react.default.createElement(
    import_core.Box,
    __spreadValues(__spreadProps(__spreadValues({}, useStore.getState().getStyles("item", __spreadProps(__spreadValues({}, stylesApiProps), { className, style }))), {
      component: "li",
      mod: { "with-icon": !!_icon, centered: useStore.getState().center },
      ref
    }), others),
    /* @__PURE__ */ import_react.default.createElement("div", __spreadValues({}, useStore.getState().getStyles("itemWrapper", stylesApiProps)), _icon && /* @__PURE__ */ import_react.default.createElement("span", __spreadValues({}, useStore.getState().getStyles("itemIcon", stylesApiProps)), _icon), /* @__PURE__ */ import_react.default.createElement("span", __spreadValues({}, useStore.getState().getStyles("itemLabel", stylesApiProps)), children))
  );
});
ListItem.displayName = "@raikou/core/ListItem";

// src/List.tsx
var defaultProps2 = {
  type: "unordered"
};
var varsResolver = (0, import_core2.createVarsResolver)(
  (_, { size, spacing }) => ({
    root: {
      "--list-fz": (0, import_core2.getFontSize)(size),
      "--list-lh": (0, import_core2.getLineHeight)(size),
      "--list-spacing": (0, import_core2.getSpacing)(spacing)
    }
  })
);
var List = (0, import_core2.factory)((_props, ref) => {
  const props = (0, import_core2.useProps)("List", defaultProps2, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    type,
    withPadding,
    icon,
    spacing,
    center,
    listStyleType
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "children",
    "type",
    "withPadding",
    "icon",
    "spacing",
    "center",
    "listStyleType"
  ]);
  const getStyles = (0, import_core2.useStyles)({
    name: "List",
    classes: {
      root: "list-root",
      item: "list-item",
      itemWrapper: "list-itemWrapper",
      itemIcon: "list-itemIcon"
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
  useStore.setState({ getStyles, center, icon });
  return /* @__PURE__ */ import_react2.default.createElement(
    import_core2.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { style: { listStyleType } })), {
      component: type === "unordered" ? "ul" : "ol",
      mod: { "with-padding": withPadding },
      ref
    }), others),
    children
  );
});
List.displayName = "@raikou/core/List";
List.Item = ListItem;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  List,
  ListItem
});
