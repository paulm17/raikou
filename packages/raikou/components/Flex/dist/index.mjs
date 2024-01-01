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

// src/flex-props.ts
var FLEX_STYLE_PROPS_DATA = {
  gap: { type: "spacing", property: "gap" },
  rowGap: { type: "spacing", property: "rowGap" },
  columnGap: { type: "spacing", property: "columnGap" },
  align: { type: "identity", property: "alignItems" },
  justify: { type: "identity", property: "justifyContent" },
  wrap: { type: "identity", property: "flexWrap" },
  direction: { type: "identity", property: "flexDirection" }
};

// src/Flex.tsx
import React from "react";
import {
  Box,
  useProps,
  useStyles,
  InlineStyles,
  useRandomClassName,
  parseStyleProps,
  useRaikouTheme,
  filterProps,
  polymorphicFactory
} from "@raikou/core";

// css-module:./Flex.module.css#css-module
var Flex_module_default = { "root": "m-8bffd616" };

// src/Flex.tsx
var defaultProps = {};
var Flex = polymorphicFactory((_props, ref) => {
  const props = useProps("Flex", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    gap,
    rowGap,
    columnGap,
    align,
    justify,
    wrap,
    direction
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "gap",
    "rowGap",
    "columnGap",
    "align",
    "justify",
    "wrap",
    "direction"
  ]);
  const getStyles = useStyles({
    name: "Flex",
    classes: Flex_module_default,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars
  });
  const theme = useRaikouTheme();
  const responsiveClassName = useRandomClassName();
  const parsedStyleProps = parseStyleProps({
    // @ts-ignore
    styleProps: { gap, rowGap, columnGap, align, justify, wrap, direction },
    theme,
    data: FLEX_STYLE_PROPS_DATA
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, parsedStyleProps.hasResponsiveStyles && /* @__PURE__ */ React.createElement(
    InlineStyles,
    {
      selector: `.${responsiveClassName}`,
      styles: parsedStyleProps.styles,
      media: parsedStyleProps.media
    }
  ), /* @__PURE__ */ React.createElement(
    Box,
    __spreadValues(__spreadValues({
      ref
    }, getStyles("root", {
      className: responsiveClassName,
      style: filterProps(parsedStyleProps.inlineStyles)
    })), others)
  ));
});
Flex.displayName = "@raikou/core/Flex";
Flex.classes = Flex_module_default;
export {
  FLEX_STYLE_PROPS_DATA,
  Flex
};
//# sourceMappingURL=index.mjs.map