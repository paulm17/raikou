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
  Timeline: () => Timeline,
  TimelineItem: () => TimelineItem
});
module.exports = __toCommonJS(src_exports);

// src/Timeline.tsx
var import_react2 = __toESM(require("react"));
var import_core2 = require("@raikou/core");

// src/TimelineItem/TimelineItem.tsx
var import_react = __toESM(require("react"));
var import_core = require("@raikou/core");

// src/store.ts
var import_zustand = require("zustand");
var useStore = (0, import_zustand.create)(() => ({
  getStyles: void 0
}));

// src/TimelineItem/TimelineItem.tsx
var defaultProps = {};
var TimelineItem = (0, import_core.factory)((_props, ref) => {
  const props = (0, import_core.useProps)("TimelineItem", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __active,
    __align,
    __lineActive,
    __vars,
    bullet,
    radius,
    color,
    lineVariant,
    children,
    title
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "__active",
    "__align",
    "__lineActive",
    "__vars",
    "bullet",
    "radius",
    "color",
    "lineVariant",
    "children",
    "title"
  ]);
  const ctx = useStore();
  const theme = (0, import_core.useRaikouTheme)();
  const stylesApiProps = { classNames, styles };
  return /* @__PURE__ */ import_react.default.createElement(
    import_core.Box,
    __spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("item", __spreadProps(__spreadValues({}, stylesApiProps), { className, style }))), {
      mod: { "line-active": __lineActive, active: __active },
      ref,
      __vars: {
        "--tli-radius": radius ? (0, import_core.getRadius)(radius) : void 0,
        "--tli-color": color ? (0, import_core.getThemeColor)(color, theme) : void 0,
        "--tli-border-style": lineVariant || void 0
      }
    }), others),
    /* @__PURE__ */ import_react.default.createElement(
      import_core.Box,
      __spreadProps(__spreadValues({}, ctx.getStyles("itemBullet", stylesApiProps)), {
        mod: { "with-child": !!bullet, align: __align, active: __active }
      }),
      bullet
    ),
    /* @__PURE__ */ import_react.default.createElement("div", __spreadValues({}, ctx.getStyles("itemBody", stylesApiProps)), title && /* @__PURE__ */ import_react.default.createElement("div", __spreadValues({}, ctx.getStyles("itemTitle", stylesApiProps)), title), /* @__PURE__ */ import_react.default.createElement("div", __spreadValues({}, ctx.getStyles("itemContent", stylesApiProps)), children))
  );
});
TimelineItem.displayName = "@raikou/core/TimelineItem";

// src/Timeline.tsx
var defaultProps2 = {
  active: -1,
  radius: "xl",
  bulletSize: 20,
  align: "left",
  lineWidth: 4,
  reverseActive: false
};
var varsResolver = (0, import_core2.createVarsResolver)(
  (theme, { bulletSize, lineWidth, radius, color }) => ({
    root: {
      "--tl-bullet-size": (0, import_core2.rem)(bulletSize),
      "--tl-line-width": (0, import_core2.rem)(lineWidth),
      "--tl-radius": (0, import_core2.getRadius)(radius),
      "--tl-color": (0, import_core2.getThemeColor)(color, theme)
    }
  })
);
var Timeline = (0, import_core2.factory)((_props, ref) => {
  const props = (0, import_core2.useProps)("Timeline", defaultProps2, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    active,
    color,
    radius,
    bulletSize,
    align,
    lineWidth,
    reverseActive
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "children",
    "active",
    "color",
    "radius",
    "bulletSize",
    "align",
    "lineWidth",
    "reverseActive"
  ]);
  const getStyles = (0, import_core2.useStyles)({
    name: "Timeline",
    classes: {
      root: "timeline-root",
      itemTitle: "timeline-itemTitle",
      item: "timeline-item",
      itemBullet: "timeline-itemBullet",
      itemBody: "timeline-itemBody"
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
  const _children = import_react2.Children.toArray(children);
  const items = _children.map(
    (item, index) => {
      var _a2, _b;
      return (0, import_react2.cloneElement)(item, {
        unstyled,
        __align: align,
        __active: ((_a2 = item.props) == null ? void 0 : _a2.active) || (reverseActive ? active >= _children.length - index - 1 : active >= index),
        __lineActive: ((_b = item.props) == null ? void 0 : _b.lineActive) || (reverseActive ? active >= _children.length - index - 1 : active - 1 >= index)
      });
    }
  );
  useStore.setState({ getStyles });
  return /* @__PURE__ */ import_react2.default.createElement(import_core2.Box, __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), { mod: { align }, ref }), others), items);
});
Timeline.displayName = "@raikou/core/Timeline";
Timeline.Item = TimelineItem;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Timeline,
  TimelineItem
});
