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
  Table: () => Table,
  TableCaption: () => TableCaption,
  TableTbody: () => TableTbody,
  TableTd: () => TableTd,
  TableTfoot: () => TableTfoot,
  TableTh: () => TableTh,
  TableThead: () => TableThead,
  TableTr: () => TableTr
});
module.exports = __toCommonJS(src_exports);

// src/Table.tsx
var import_react2 = __toESM(require("react"));
var import_core2 = require("@raikou/core");

// src/Table.components.tsx
var import_react = __toESM(require("react"));
var import_core = require("@raikou/core");

// src/store.ts
var import_zustand = require("zustand");
var useStore = (0, import_zustand.create)(() => ({
  getStyles: void 0,
  striped: void 0,
  highlightOnHover: void 0,
  withColumnBorders: void 0,
  withRowBorders: void 0,
  captionSide: "top"
}));

// src/Table.components.tsx
function getDataAttributes(ctx, options) {
  if (!options) {
    return void 0;
  }
  const data = {};
  if (options.columnBorder && ctx.withColumnBorders) {
    data["data-with-column-border"] = true;
  }
  if (options.rowBorder && ctx.withRowBorders) {
    data["data-with-row-border"] = true;
  }
  if (options.striped && ctx.striped) {
    data["data-striped"] = ctx.striped;
  }
  if (options.highlightOnHover && ctx.highlightOnHover) {
    data["data-hover"] = true;
  }
  if (options.captionSide && ctx.captionSide) {
    data["data-side"] = ctx.captionSide;
  }
  return data;
}
function tableElement(element, options) {
  const name = `Table${element.charAt(0).toUpperCase()}${element.slice(1)}`;
  const Component = (0, import_core.factory)((_props, ref) => {
    const props = (0, import_core.useProps)(name, {}, _props);
    const _a = props, { classNames, className, style, styles } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles"]);
    const ctx = useStore.getState();
    return /* @__PURE__ */ import_react.default.createElement(
      import_core.Box,
      __spreadValues(__spreadValues(__spreadValues({
        component: element,
        ref
      }, getDataAttributes(ctx, options)), ctx.getStyles(element, {
        className,
        classNames,
        style,
        styles,
        props
      })), others)
    );
  });
  Component.displayName = `@raikou/core/${name}`;
  return Component;
}
var TableTh = tableElement("th", {
  columnBorder: true
});
var TableTd = tableElement("td", {
  columnBorder: true
});
var TableTr = tableElement("tr", {
  rowBorder: true,
  striped: true,
  highlightOnHover: true
});
var TableThead = tableElement("thead");
var TableTbody = tableElement("tbody");
var TableTfoot = tableElement("tfoot");
var TableCaption = tableElement("caption", {
  captionSide: true
});

// src/Table.tsx
var defaultProps = {
  withRowBorders: true,
  verticalSpacing: 7
};
var varsResolver = (0, import_core2.createVarsResolver)(
  (theme, {
    layout,
    captionSide,
    horizontalSpacing,
    verticalSpacing,
    borderColor,
    stripedColor,
    highlightOnHoverColor,
    striped,
    highlightOnHover
  }) => ({
    table: {
      "--table-layout": layout,
      "--table-caption-side": captionSide,
      "--table-horizontal-spacing": (0, import_core2.getSpacing)(horizontalSpacing),
      "--table-vertical-spacing": (0, import_core2.getSpacing)(verticalSpacing),
      "--table-border-color": borderColor ? (0, import_core2.getThemeColor)(borderColor, theme) : void 0,
      "--table-striped-color": striped && stripedColor ? (0, import_core2.getThemeColor)(stripedColor, theme) : void 0,
      "--table-highlight-on-hover-color": highlightOnHover && highlightOnHoverColor ? (0, import_core2.getThemeColor)(highlightOnHoverColor, theme) : void 0
    }
  })
);
var Table = (0, import_core2.factory)((_props, ref) => {
  const props = (0, import_core2.useProps)("Table", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    horizontalSpacing,
    verticalSpacing,
    captionSide,
    stripedColor,
    highlightOnHoverColor,
    striped,
    highlightOnHover,
    withColumnBorders,
    withRowBorders,
    withTableBorder,
    borderColor,
    layout,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "horizontalSpacing",
    "verticalSpacing",
    "captionSide",
    "stripedColor",
    "highlightOnHoverColor",
    "striped",
    "highlightOnHover",
    "withColumnBorders",
    "withRowBorders",
    "withTableBorder",
    "borderColor",
    "layout",
    "variant"
  ]);
  const getStyles = (0, import_core2.useStyles)({
    name: "Table",
    props,
    className,
    style,
    classes: {
      table: "table-root",
      th: "table-th",
      tr: "table-tr",
      td: "table-td",
      tbody: "table-tbody",
      caption: "table-caption",
      tfoot: "table-tfoot",
      thead: "table-thead"
    },
    classNames,
    styles,
    unstyled,
    rootSelector: "table",
    vars,
    varsResolver
  });
  useStore.setState({
    getStyles,
    striped: striped === true ? "odd" : striped || void 0,
    highlightOnHover,
    withColumnBorders,
    withRowBorders,
    captionSide: captionSide || "bottom"
  });
  return /* @__PURE__ */ import_react2.default.createElement(
    import_core2.Box,
    __spreadValues(__spreadValues({
      component: "table",
      variant,
      ref,
      mod: { "data-with-table-border": withTableBorder }
    }, getStyles("table")), others)
  );
});
Table.displayName = "@raikou/core/Table";
Table.Td = TableTd;
Table.Th = TableTh;
Table.Tr = TableTr;
Table.Thead = TableThead;
Table.Tbody = TableTbody;
Table.Tfoot = TableTfoot;
Table.Caption = TableCaption;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Table,
  TableCaption,
  TableTbody,
  TableTd,
  TableTfoot,
  TableTh,
  TableThead,
  TableTr
});
