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
  Highlight: () => Highlight
});
module.exports = __toCommonJS(src_exports);

// src/Highlight.tsx
var import_react3 = __toESM(require("react"));
var import_core4 = require("@raikou/core");

// ../Text/src/Text.tsx
var import_react = __toESM(require("react"));
var import_core = require("@raikou/core");
function getTextTruncate(truncate) {
  if (truncate === "start") {
    return "start";
  }
  if (truncate === "end" || truncate) {
    return "end";
  }
  return void 0;
}
var defaultProps = {
  inherit: false
};
var varsResolver = (0, import_core.createVarsResolver)(
  (theme, { variant, lineClamp, gradient, size }) => ({
    root: {
      "--text-fz": (0, import_core.getFontSize)(size),
      "--text-lh": (0, import_core.getLineHeight)(size),
      "--text-gradient": variant === "gradient" ? (0, import_core.getGradient)(gradient, theme) : void 0,
      "--text-line-clamp": typeof lineClamp === "number" ? lineClamp.toString() : void 0
    }
  })
);
var Text = (0, import_core.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core.useProps)("Text", defaultProps, _props);
  const _a = props, {
    lineClamp,
    truncate,
    inline,
    inherit,
    gradient,
    span,
    __staticSelector,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    variant,
    mod,
    size
  } = _a, others = __objRest(_a, [
    "lineClamp",
    "truncate",
    "inline",
    "inherit",
    "gradient",
    "span",
    "__staticSelector",
    "vars",
    "className",
    "style",
    "classNames",
    "styles",
    "unstyled",
    "variant",
    "mod",
    "size"
  ]);
  const getStyles = (0, import_core.useStyles)({
    name: ["Text", __staticSelector],
    props,
    classes: {
      root: "text-root"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ import_react.default.createElement(
    import_core.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { focusable: true })), {
      ref,
      component: span ? "span" : "p",
      variant,
      mod: [
        {
          "data-truncate": getTextTruncate(truncate),
          "data-line-clamp": typeof lineClamp === "number",
          "data-inline": inline,
          "data-inherit": inherit
        },
        mod
      ],
      size
    }), others)
  );
});
Text.displayName = "@raikou/core/Text";

// ../Mark/src/Mark.tsx
var import_react2 = __toESM(require("react"));
var import_core3 = require("@raikou/core");

// ../Mark/src/get-mark-color.ts
var import_core2 = require("@raikou/core");
function getMarkColor({
  color,
  theme,
  defaultShade
}) {
  const parsed = (0, import_core2.parseThemeColor)({ color, theme });
  if (!parsed.isThemeColor) {
    return color;
  }
  if (parsed.shade === void 0) {
    return `var(--raikou-color-${parsed.color}-${defaultShade})`;
  }
  return `var(${parsed.variable})`;
}

// ../Mark/src/Mark.tsx
var defaultProps2 = {
  color: "yellow"
};
var varsResolver2 = (0, import_core3.createVarsResolver)((theme, { color }) => ({
  root: {
    "--mark-bg-dark": getMarkColor({ color, theme, defaultShade: 5 }),
    "--mark-bg-light": getMarkColor({ color, theme, defaultShade: 2 })
  }
}));
var Mark = (0, import_core3.factory)((_props, ref) => {
  const props = (0, import_core3.useProps)("Mark", defaultProps2, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "color",
    "variant"
  ]);
  const getStyles = (0, import_core3.useStyles)({
    name: "Mark",
    props,
    className,
    style,
    classes: {
      root: "mark-root"
    },
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver2
  });
  return /* @__PURE__ */ import_react2.default.createElement(
    import_core3.Box,
    __spreadValues(__spreadValues({
      component: "mark",
      ref,
      variant
    }, getStyles("root")), others)
  );
});
Mark.displayName = "@raikou/core/Mark";

// src/highlighter/highlighter.ts
function escapeRegex(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
}
function highlighter(value, _highlight) {
  if (_highlight == null) {
    return [{ chunk: value, highlighted: false }];
  }
  const highlight = Array.isArray(_highlight) ? _highlight.map(escapeRegex) : escapeRegex(_highlight);
  const shouldHighlight = Array.isArray(highlight) ? highlight.filter((part) => part.trim().length > 0).length > 0 : highlight.trim() !== "";
  if (!shouldHighlight) {
    return [{ chunk: value, highlighted: false }];
  }
  const matcher = typeof highlight === "string" ? highlight.trim() : highlight.filter((part) => part.trim().length !== 0).map((part) => part.trim()).sort((a, b) => b.length - a.length).join("|");
  const re = new RegExp(`(${matcher})`, "gi");
  const chunks = value.split(re).map((part) => ({ chunk: part, highlighted: re.test(part) })).filter(({ chunk }) => chunk);
  return chunks;
}

// src/Highlight.tsx
var defaultProps3 = {};
var Highlight = (0, import_core4.polymorphicFactory)((props, ref) => {
  const _a = (0, import_core4.useProps)("Highlight", defaultProps3, props), { unstyled, children, highlight, highlightStyles, color } = _a, others = __objRest(_a, ["unstyled", "children", "highlight", "highlightStyles", "color"]);
  const highlightChunks = highlighter(children, highlight);
  return /* @__PURE__ */ import_react3.default.createElement(
    Text,
    __spreadProps(__spreadValues({
      unstyled,
      ref
    }, others), {
      __staticSelector: "Highlight"
    }),
    highlightChunks.map(
      ({ chunk, highlighted }, i) => highlighted ? /* @__PURE__ */ import_react3.default.createElement(
        Mark,
        {
          unstyled,
          key: i,
          color,
          style: highlightStyles,
          "data-highlight": chunk
        },
        chunk
      ) : /* @__PURE__ */ import_react3.default.createElement("span", { key: i }, chunk)
    )
  );
});
Highlight.displayName = "@raikou/core/Highlight";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Highlight
});
