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

// src/SimpleGrid.tsx
import React2 from "react";
import {
  Box,
  factory,
  useProps,
  useStyles,
  useRandomClassName
} from "@raikou/core";

// src/SimpleGridVariables.tsx
import React from "react";
import {
  getSortedBreakpoints,
  useRaikouTheme,
  keys,
  getSpacing,
  filterProps,
  InlineStyles,
  getBaseValue
} from "@raikou/core";
function SimpleGridVariables({
  spacing,
  verticalSpacing,
  cols,
  selector
}) {
  var _a;
  const theme = useRaikouTheme();
  const _verticalSpacing = verticalSpacing === void 0 ? spacing : verticalSpacing;
  const baseStyles = filterProps({
    "--sg-spacing-x": getSpacing(getBaseValue(spacing)),
    "--sg-spacing-y": getSpacing(getBaseValue(_verticalSpacing)),
    "--sg-cols": (_a = getBaseValue(cols)) == null ? void 0 : _a.toString()
  });
  const queries = keys(theme.breakpoints).reduce((acc, breakpoint) => {
    if (!acc[breakpoint]) {
      acc[breakpoint] = {};
    }
    if (typeof spacing === "object" && spacing[breakpoint] !== void 0) {
      acc[breakpoint]["--sg-spacing-x"] = getSpacing(spacing[breakpoint]);
    }
    if (typeof _verticalSpacing === "object" && _verticalSpacing[breakpoint] !== void 0) {
      acc[breakpoint]["--sg-spacing-y"] = getSpacing(
        _verticalSpacing[breakpoint]
      );
    }
    if (typeof cols === "object" && cols[breakpoint] !== void 0) {
      acc[breakpoint]["--sg-cols"] = cols[breakpoint];
    }
    return acc;
  }, {});
  const sortedBreakpoints = getSortedBreakpoints(keys(queries), theme).filter(
    (breakpoint) => keys(queries[breakpoint.value]).length > 0
  );
  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value]})`,
    styles: queries[breakpoint.value]
  }));
  return /* @__PURE__ */ React.createElement(InlineStyles, { styles: baseStyles, media, selector });
}

// src/SimpleGrid.tsx
var defaultProps = {
  cols: 1,
  spacing: "md"
};
var SimpleGrid = factory((_props, ref) => {
  const props = useProps("SimpleGrid", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    cols,
    verticalSpacing,
    spacing
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "cols",
    "verticalSpacing",
    "spacing"
  ]);
  const getStyles = useStyles({
    name: "SimpleGrid",
    classes: {
      root: "simpleGrid-root"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars
  });
  const responsiveClassName = useRandomClassName();
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement(SimpleGridVariables, __spreadProps(__spreadValues({}, props), { selector: `.${responsiveClassName}` }))), /* @__PURE__ */ React2.createElement(
    Box,
    __spreadValues(__spreadValues({
      ref
    }, getStyles("root", { className: responsiveClassName })), others)
  ));
});
SimpleGrid.displayName = "@raikou/core/SimpleGrid";
export {
  SimpleGrid
};
