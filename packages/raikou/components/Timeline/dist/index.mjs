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

// src/Timeline.tsx
import React2, { cloneElement, Children } from "react";
import {
  Box as Box2,
  factory as factory2,
  useProps as useProps2,
  useStyles,
  createVarsResolver,
  rem,
  getRadius as getRadius2,
  getThemeColor as getThemeColor2
} from "@raikou/core";

// src/TimelineItem/TimelineItem.tsx
import React from "react";
import {
  Box,
  factory,
  useProps,
  getRadius,
  useRaikouTheme,
  getThemeColor
} from "@raikou/core";

// src/store.ts
import { create } from "zustand";
var useStore = create(() => ({
  getStyles: void 0
}));

// src/TimelineItem/TimelineItem.tsx
var defaultProps = {};
var TimelineItem = factory((_props, ref) => {
  const props = useProps("TimelineItem", defaultProps, _props);
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
  const theme = useRaikouTheme();
  const stylesApiProps = { classNames, styles };
  return /* @__PURE__ */ React.createElement(
    Box,
    __spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("item", __spreadProps(__spreadValues({}, stylesApiProps), { className, style }))), {
      mod: { "line-active": __lineActive, active: __active },
      ref,
      __vars: {
        "--tli-radius": radius ? getRadius(radius) : void 0,
        "--tli-color": color ? getThemeColor(color, theme) : void 0,
        "--tli-border-style": lineVariant || void 0
      }
    }), others),
    /* @__PURE__ */ React.createElement(
      Box,
      __spreadProps(__spreadValues({}, ctx.getStyles("itemBullet", stylesApiProps)), {
        mod: { "with-child": !!bullet, align: __align, active: __active }
      }),
      bullet
    ),
    /* @__PURE__ */ React.createElement("div", __spreadValues({}, ctx.getStyles("itemBody", stylesApiProps)), title && /* @__PURE__ */ React.createElement("div", __spreadValues({}, ctx.getStyles("itemTitle", stylesApiProps)), title), /* @__PURE__ */ React.createElement("div", __spreadValues({}, ctx.getStyles("itemContent", stylesApiProps)), children))
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
var varsResolver = createVarsResolver(
  (theme, { bulletSize, lineWidth, radius, color }) => ({
    root: {
      "--tl-bullet-size": rem(bulletSize),
      "--tl-line-width": rem(lineWidth),
      "--tl-radius": getRadius2(radius),
      "--tl-color": getThemeColor2(color, theme)
    }
  })
);
var Timeline = factory2((_props, ref) => {
  const props = useProps2("Timeline", defaultProps2, _props);
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
  const getStyles = useStyles({
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
  const _children = Children.toArray(children);
  const items = _children.map(
    (item, index) => {
      var _a2, _b;
      return cloneElement(item, {
        unstyled,
        __align: align,
        __active: ((_a2 = item.props) == null ? void 0 : _a2.active) || (reverseActive ? active >= _children.length - index - 1 : active >= index),
        __lineActive: ((_b = item.props) == null ? void 0 : _b.lineActive) || (reverseActive ? active >= _children.length - index - 1 : active - 1 >= index)
      });
    }
  );
  useStore.setState({ getStyles });
  return /* @__PURE__ */ React2.createElement(Box2, __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), { mod: { align }, ref }), others), items);
});
Timeline.displayName = "@raikou/core/Timeline";
Timeline.Item = TimelineItem;
export {
  Timeline,
  TimelineItem
};
