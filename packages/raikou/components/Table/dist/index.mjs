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

// src/Table.tsx
import React3 from "react";
import {
  Box as Box2,
  factory as factory2,
  useProps as useProps2,
  useStyles,
  getSpacing,
  getThemeColor,
  createVarsResolver
} from "@raikou/core";

// src/Table.components.tsx
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
  const Component = factory((_props, ref) => {
    const props = useProps(name, {}, _props);
    const _a = props, { classNames, className, style, styles } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles"]);
    const ctx = useStore.getState();
    return /* @__PURE__ */ React.createElement(
      Box,
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

// src/TableDataRenderer.tsx
import React2 from "react";
function TableDataRenderer({ data }) {
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, data.caption && /* @__PURE__ */ React2.createElement(TableCaption, null, data.caption), data.head && /* @__PURE__ */ React2.createElement(TableThead, null, /* @__PURE__ */ React2.createElement(TableTr, null, data.head.map((item, index) => /* @__PURE__ */ React2.createElement(TableTh, { key: index }, item)))), data.body && /* @__PURE__ */ React2.createElement(TableTbody, null, data.body.map((row, rowIndex) => /* @__PURE__ */ React2.createElement(TableTr, { key: rowIndex }, row.map((item, index) => /* @__PURE__ */ React2.createElement(TableTd, { key: index }, item))))), data.foot && /* @__PURE__ */ React2.createElement(TableTfoot, null, /* @__PURE__ */ React2.createElement(TableTr, null, data.foot.map((item, index) => /* @__PURE__ */ React2.createElement(TableTh, { key: index }, item)))));
}
TableDataRenderer.displayName = "@mantine/core/TableDataRenderer";

// src/Table.tsx
var defaultProps = {
  withRowBorders: true,
  verticalSpacing: 7
};
var varsResolver = createVarsResolver(
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
      "--table-horizontal-spacing": getSpacing(horizontalSpacing),
      "--table-vertical-spacing": getSpacing(verticalSpacing),
      "--table-border-color": borderColor ? getThemeColor(borderColor, theme) : void 0,
      "--table-striped-color": striped && stripedColor ? getThemeColor(stripedColor, theme) : void 0,
      "--table-highlight-on-hover-color": highlightOnHover && highlightOnHoverColor ? getThemeColor(highlightOnHoverColor, theme) : void 0
    }
  })
);
var Table = factory2((_props, ref) => {
  const props = useProps2("Table", defaultProps, _props);
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
    variant,
    data,
    children
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
    "variant",
    "data",
    "children"
  ]);
  const getStyles = useStyles({
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
  return /* @__PURE__ */ React3.createElement(
    Box2,
    __spreadValues(__spreadValues({
      component: "table",
      variant,
      ref,
      mod: { "data-with-table-border": withTableBorder }
    }, getStyles("table")), others),
    children || !!data && /* @__PURE__ */ React3.createElement(TableDataRenderer, { data })
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
Table.DataRenderer = TableDataRenderer;
export {
  Table,
  TableCaption,
  TableTbody,
  TableTd,
  TableTfoot,
  TableTh,
  TableThead,
  TableTr
};
