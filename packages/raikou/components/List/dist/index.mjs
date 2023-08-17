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

// src/List.tsx
import React2 from "react";
import {
  Box as Box2,
  factory as factory2,
  useProps as useProps2,
  useStyles,
  createVarsResolver,
  getFontSize,
  getLineHeight,
  getSpacing
} from "@raikou/core";

// src/ListItem/ListItem.tsx
import React from "react";
import {
  Box,
  factory,
  useProps
} from "@raikou/core";

// src/store.ts
import { create } from "zustand";
var useStore = create(() => ({
  getStyles: void 0,
  center: void 0,
  icon: void 0
}));

// src/ListItem/ListItem.tsx
var defaultProps = {};
var ListItem = factory((_props, ref) => {
  const props = useProps("ListItem", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    icon,
    children
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "icon",
    "children"
  ]);
  const ctx = useStore();
  const _icon = icon || ctx.icon;
  const stylesApiProps = { classNames, styles };
  return /* @__PURE__ */ React.createElement(
    Box,
    __spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("item", __spreadProps(__spreadValues({}, stylesApiProps), { className, style }))), {
      component: "li",
      mod: { "with-icon": !!_icon, centered: ctx.center },
      ref
    }), others),
    /* @__PURE__ */ React.createElement("div", __spreadValues({}, ctx.getStyles("itemWrapper", stylesApiProps)), _icon && /* @__PURE__ */ React.createElement("span", __spreadValues({}, ctx.getStyles("itemIcon", stylesApiProps)), _icon), /* @__PURE__ */ React.createElement("span", __spreadValues({}, ctx.getStyles("itemLabel", stylesApiProps)), children))
  );
});
ListItem.displayName = "@raikou/core/ListItem";

// src/List.tsx
var defaultProps2 = {
  type: "unordered",
  size: "md",
  spacing: 0
};
var varsResolver = createVarsResolver(
  (_, { size, spacing }) => ({
    root: {
      "--list-fz": getFontSize(size),
      "--list-lh": getLineHeight(size),
      "--list-spacing": getSpacing(spacing)
    }
  })
);
var List = factory2((_props, ref) => {
  const props = useProps2("List", defaultProps2, _props);
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
  const getStyles = useStyles({
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
  return /* @__PURE__ */ React2.createElement(
    Box2,
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
export {
  List,
  ListItem
};
