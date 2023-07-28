"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
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
  Grid: () => Grid,
  GridCol: () => GridCol
});
module.exports = __toCommonJS(src_exports);

// src/Grid.tsx
var import_react6 = __toESM(require("react"));
var import_core4 = require("@raikou/core");

// src/GridCol/GridCol.tsx
var import_react4 = __toESM(require("react"));
var import_clsx = __toESM(require("clsx"));
var import_core2 = require("@raikou/core");

// ../_utils/create-safe-context/create-safe-context.tsx
var import_react = __toESM(require("react"));
function createSafeContext(errorMessage) {
  const Context = (0, import_react.createContext)(null);
  const useSafeContext = () => {
    const ctx = (0, import_react.useContext)(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react.default.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../_utils/create-optional-context/create-optional-context.tsx
var import_react2 = __toESM(require("react"));

// src/Grid.context.ts
var [GridProvider, useGridContext] = createSafeContext("Grid component was not found in tree");

// src/GridCol/GridColVariables.tsx
var import_react3 = __toESM(require("react"));
var import_core = require("@raikou/core");
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
  const theme = (0, import_core.useRaikouTheme)();
  const ctx = useGridContext();
  const baseSpan = (0, import_core.getBaseValue)(span);
  const baseStyles = (0, import_core.filterProps)({
    "--col-order": (_a = (0, import_core.getBaseValue)(order)) == null ? void 0 : _a.toString(),
    "--col-flex-grow": getColumnFlexGrow(baseSpan, ctx.grow),
    "--col-flex-basis": getColumnFlexBasis(baseSpan, ctx.columns),
    "--col-width": baseSpan === "content" ? "auto" : void 0,
    "--col-max-width": getColumnMaxWidth(baseSpan, ctx.columns, ctx.grow),
    "--col-offset": getColumnOffset((0, import_core.getBaseValue)(offset), ctx.columns)
  });
  const queries = (0, import_core.keys)(theme.breakpoints).reduce((acc, breakpoint) => {
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
  const sortedBreakpoints = (0, import_core.getSortedBreakpoints)((0, import_core.keys)(queries), theme).filter(
    (breakpoint) => (0, import_core.keys)(queries[breakpoint.value]).length > 0
  );
  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value]})`,
    styles: queries[breakpoint.value]
  }));
  return /* @__PURE__ */ import_react3.default.createElement(import_core.InlineStyles, { styles: baseStyles, media, selector });
}

// src/GridCol/GridCol.tsx
var defaultProps = {
  span: 12
};
var GridCol = (0, import_core2.factory)((_props, ref) => {
  const props = (0, import_core2.useProps)("GridCol", defaultProps, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars"]);
  const ctx = useGridContext();
  const responsiveClassName = (0, import_core2.useRandomClassName)();
  return /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement(GridColVariables, __spreadValues({ selector: `.${responsiveClassName}` }, props)), /* @__PURE__ */ import_react4.default.createElement(
    import_core2.Box,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("col", {
      className: (0, import_clsx.default)(className, responsiveClassName),
      style,
      classNames,
      styles
    })), others)
  ));
});
GridCol.displayName = "@raikou/core/GridCol";

// src/GridVariables.tsx
var import_react5 = __toESM(require("react"));
var import_core3 = require("@raikou/core");
function GridVariables({ gutter, selector }) {
  const theme = (0, import_core3.useRaikouTheme)();
  const baseStyles = (0, import_core3.filterProps)({
    "--grid-gutter": (0, import_core3.getSpacing)((0, import_core3.getBaseValue)(gutter))
  });
  const queries = (0, import_core3.keys)(theme.breakpoints).reduce((acc, breakpoint) => {
    if (!acc[breakpoint]) {
      acc[breakpoint] = {};
    }
    if (typeof gutter === "object" && gutter[breakpoint] !== void 0) {
      acc[breakpoint]["--grid-gutter"] = (0, import_core3.getSpacing)(gutter[breakpoint]);
    }
    return acc;
  }, {});
  const sortedBreakpoints = (0, import_core3.getSortedBreakpoints)((0, import_core3.keys)(queries), theme).filter(
    (breakpoint) => (0, import_core3.keys)(queries[breakpoint.value]).length > 0
  );
  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value]})`,
    styles: queries[breakpoint.value]
  }));
  return /* @__PURE__ */ import_react5.default.createElement(import_core3.InlineStyles, { styles: baseStyles, media, selector });
}

// src/Grid.tsx
var defaultProps2 = {
  gutter: "md",
  grow: false,
  columns: 12
};
var varsResolver = (0, import_core4.createVarsResolver)(
  (_, { justify, align }) => ({
    root: {
      "--grid-justify": justify,
      "--grid-align": align
    }
  })
);
var Grid = (0, import_core4.factory)((_props, ref) => {
  const props = (0, import_core4.useProps)("Grid", defaultProps2, _props);
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
  const getStyles = (0, import_core4.useStyles)({
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
  const responsiveClassName = (0, import_core4.useRandomClassName)();
  return /* @__PURE__ */ import_react6.default.createElement(GridProvider, { value: { getStyles, grow, columns } }, /* @__PURE__ */ import_react6.default.createElement("div", null, /* @__PURE__ */ import_react6.default.createElement(GridVariables, __spreadValues({ selector: `.${responsiveClassName}` }, props))), /* @__PURE__ */ import_react6.default.createElement(
    import_core4.Box,
    __spreadValues(__spreadValues({
      ref
    }, getStyles("root", { className: responsiveClassName })), others),
    /* @__PURE__ */ import_react6.default.createElement("div", __spreadValues({}, getStyles("inner")), children)
  ));
});
Grid.displayName = "@raikou/core/Grid";
Grid.Col = GridCol;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Grid,
  GridCol
});
