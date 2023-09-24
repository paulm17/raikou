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

// src/Grid.tsx
import React4 from "react";
import {
  Box as Box2,
  factory as factory2,
  useProps as useProps2,
  useStyles,
  createVarsResolver,
  useRandomClassName as useRandomClassName2
} from "@raikou/core";

// src/GridCol/GridCol.tsx
import React2 from "react";
import cx from "clsx";
import {
  Box,
  factory,
  useProps,
  useRandomClassName
} from "@raikou/core";

// src/GridCol/GridColVariables.tsx
import React from "react";
import {
  getSortedBreakpoints,
  useRaikouTheme,
  keys,
  filterProps,
  InlineStyles,
  getBaseValue
} from "@raikou/core";

// src/store.ts
import { create } from "zustand";
var useStore = create(() => ({
  getStyles: void 0,
  grow: false,
  columns: 12
}));

// src/GridCol/GridColVariables.tsx
var getColumnFlexBasis = (colSpan, columns) => {
  if (colSpan === "content") {
    return "auto";
  }
  if (colSpan === "auto") {
    return "0rem";
  }
  return colSpan ? `${100 / (columns / colSpan)}%` : void 0;
};
var getColumnMaxWidth = (colSpan, columns, grow) => {
  if (grow || colSpan === "auto" || colSpan === "content") {
    return "unset";
  }
  return getColumnFlexBasis(colSpan, columns);
};
var getColumnFlexGrow = (colSpan, grow) => {
  if (!colSpan) {
    return void 0;
  }
  return colSpan === "auto" || grow ? "1" : void 0;
};
var getColumnOffset = (offset, columns) => offset === 0 ? "0" : offset ? `${100 / (columns / offset)}%` : void 0;
function GridColVariables({
  span,
  order,
  offset,
  selector
}) {
  var _a;
  const theme = useRaikouTheme();
  const ctx = useStore.getState();
  const baseValue = getBaseValue(span);
  const baseSpan = baseValue === void 0 ? 12 : getBaseValue(span);
  const baseStyles = filterProps({
    "--col-order": (_a = getBaseValue(order)) == null ? void 0 : _a.toString(),
    "--col-flex-grow": getColumnFlexGrow(baseSpan, ctx.grow),
    "--col-flex-basis": getColumnFlexBasis(baseSpan, ctx.columns),
    "--col-width": baseSpan === "content" ? "auto" : void 0,
    "--col-max-width": getColumnMaxWidth(baseSpan, ctx.columns, ctx.grow),
    "--col-offset": getColumnOffset(getBaseValue(offset), ctx.columns)
  });
  const queries = keys(theme.breakpoints).reduce((acc, breakpoint) => {
    var _a2;
    if (!acc[breakpoint]) {
      acc[breakpoint] = {};
    }
    if (typeof order === "object" && order[breakpoint] !== void 0) {
      acc[breakpoint]["--col-order"] = (_a2 = order[breakpoint]) == null ? void 0 : _a2.toString();
    }
    if (typeof span === "object" && span[breakpoint] !== void 0) {
      acc[breakpoint]["--col-flex-grow"] = getColumnFlexGrow(
        span[breakpoint],
        ctx.grow
      );
      acc[breakpoint]["--col-flex-basis"] = getColumnFlexBasis(
        span[breakpoint],
        ctx.columns
      );
      acc[breakpoint]["--col-width"] = span[breakpoint] === "content" ? "auto" : void 0;
      acc[breakpoint]["--col-max-width"] = getColumnMaxWidth(
        span[breakpoint],
        ctx.columns,
        ctx.grow
      );
    }
    if (typeof offset === "object" && offset[breakpoint] !== void 0) {
      acc[breakpoint]["--col-offset"] = getColumnOffset(
        offset[breakpoint],
        ctx.columns
      );
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

// src/GridCol/GridCol.tsx
var defaultProps = {
  span: 12
};
var GridCol = factory((_props, ref) => {
  const props = useProps("GridCol", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    vars,
    span,
    order,
    offset
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "vars",
    "span",
    "order",
    "offset"
  ]);
  const responsiveClassName = useRandomClassName();
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(
    GridColVariables,
    {
      selector: `.${responsiveClassName}`,
      span,
      order,
      offset
    }
  ), /* @__PURE__ */ React2.createElement(
    Box,
    __spreadValues(__spreadValues({
      ref
    }, useStore.getState().getStyles("col", {
      className: cx(className, responsiveClassName),
      style,
      classNames,
      styles
    })), others)
  ));
});
GridCol.displayName = "@raikou/core/GridCol";

// src/GridVariables.tsx
import React3 from "react";
import {
  getSortedBreakpoints as getSortedBreakpoints2,
  useRaikouTheme as useRaikouTheme2,
  keys as keys2,
  getSpacing,
  filterProps as filterProps2,
  InlineStyles as InlineStyles2,
  getBaseValue as getBaseValue2
} from "@raikou/core";
function GridVariables({ gutter, selector }) {
  const theme = useRaikouTheme2();
  const baseStyles = filterProps2({
    "--grid-gutter": getSpacing(getBaseValue2(gutter))
  });
  const queries = keys2(theme.breakpoints).reduce((acc, breakpoint) => {
    if (!acc[breakpoint]) {
      acc[breakpoint] = {};
    }
    if (typeof gutter === "object" && gutter[breakpoint] !== void 0) {
      acc[breakpoint]["--grid-gutter"] = getSpacing(gutter[breakpoint]);
    }
    return acc;
  }, {});
  const sortedBreakpoints = getSortedBreakpoints2(keys2(queries), theme).filter(
    (breakpoint) => keys2(queries[breakpoint.value]).length > 0
  );
  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value]})`,
    styles: queries[breakpoint.value]
  }));
  return /* @__PURE__ */ React3.createElement(InlineStyles2, { styles: baseStyles, media, selector });
}

// src/Grid.tsx
var defaultProps2 = {
  gutter: "md",
  grow: false,
  columns: 12
};
var varsResolver = createVarsResolver(
  (_, { justify, align }) => ({
    root: {
      "--grid-justify": justify,
      "--grid-align": align
    }
  })
);
var Grid = factory2((_props, ref) => {
  const props = useProps2("Grid", defaultProps2, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    grow,
    gutter,
    columns,
    align,
    justify,
    children
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "grow",
    "gutter",
    "columns",
    "align",
    "justify",
    "children"
  ]);
  const getStyles = useStyles({
    name: "Grid",
    classes: {
      root: "grid-root",
      col: "grid-col",
      inner: "grid-inner"
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
  const responsiveClassName = useRandomClassName2();
  useStore.setState({ getStyles, grow, columns });
  return /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement("div", null, /* @__PURE__ */ React4.createElement(GridVariables, __spreadValues({ selector: `.${responsiveClassName}` }, props))), /* @__PURE__ */ React4.createElement(
    Box2,
    __spreadValues(__spreadValues({
      ref
    }, getStyles("root", { className: responsiveClassName })), others),
    /* @__PURE__ */ React4.createElement("div", __spreadValues({}, getStyles("inner")), children)
  ));
});
Grid.displayName = "@raikou/core/Grid";
Grid.Col = GridCol;
export {
  Grid,
  GridCol
};
