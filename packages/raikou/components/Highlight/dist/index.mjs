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

// src/Highlight.tsx
import React3 from "react";
import {
  polymorphicFactory as polymorphicFactory2,
  useProps as useProps3
} from "@raikou/core";

// ../Text/src/Text.tsx
import React from "react";
import {
  Box,
  polymorphicFactory,
  useStyles,
  useProps,
  getGradient,
  createVarsResolver,
  getFontSize,
  getLineHeight
} from "@raikou/core";

// css-module:./Text.module.css#css-module
var Text_module_default = { "root": "m-b6d8b162" };

// ../Text/src/Text.tsx
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
var varsResolver = createVarsResolver(
  (theme, { variant, lineClamp, gradient, size }) => ({
    root: {
      "--text-fz": getFontSize(size),
      "--text-lh": getLineHeight(size),
      "--text-gradient": variant === "gradient" ? getGradient(gradient, theme) : void 0,
      "--text-line-clamp": typeof lineClamp === "number" ? lineClamp.toString() : void 0
    }
  })
);
var Text = polymorphicFactory((_props, ref) => {
  const props = useProps("Text", defaultProps, _props);
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
  const getStyles = useStyles({
    name: ["Text", __staticSelector],
    props,
    classes: Text_module_default,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React.createElement(
    Box,
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
Text.classes = Text_module_default;
Text.displayName = "@raikou/core/Text";

// ../Mark/src/Mark.tsx
import React2 from "react";
import {
  Box as Box2,
  factory,
  useProps as useProps2,
  useStyles as useStyles2,
  createVarsResolver as createVarsResolver2
} from "@raikou/core";

// ../Mark/src/get-mark-color.ts
import { parseThemeColor } from "@raikou/core";
function getMarkColor({
  color,
  theme,
  defaultShade
}) {
  const parsed = parseThemeColor({ color, theme });
  if (!parsed.isThemeColor) {
    return color;
  }
  if (parsed.shade === void 0) {
    return `var(--raikou-color-${parsed.color}-${defaultShade})`;
  }
  return `var(${parsed.variable})`;
}

// css-module:./Mark.module.css#css-module
var Mark_module_default = { "root": "m-bcb3f3c2" };

// ../Mark/src/Mark.tsx
var defaultProps2 = {
  color: "yellow"
};
var varsResolver2 = createVarsResolver2((theme, { color }) => ({
  root: {
    "--mark-bg-dark": getMarkColor({ color, theme, defaultShade: 5 }),
    "--mark-bg-light": getMarkColor({ color, theme, defaultShade: 2 })
  }
}));
var Mark = factory((_props, ref) => {
  const props = useProps2("Mark", defaultProps2, _props);
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
  const getStyles = useStyles2({
    name: "Mark",
    props,
    className,
    style,
    classes: Mark_module_default,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver2
  });
  return /* @__PURE__ */ React2.createElement(
    Box2,
    __spreadValues(__spreadValues({
      component: "mark",
      ref,
      variant
    }, getStyles("root")), others)
  );
});
Mark.classes = Mark_module_default;
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
var Highlight = polymorphicFactory2((props, ref) => {
  const _a = useProps3("Highlight", defaultProps3, props), { unstyled, children, highlight, highlightStyles, color } = _a, others = __objRest(_a, ["unstyled", "children", "highlight", "highlightStyles", "color"]);
  const highlightChunks = highlighter(children, highlight);
  return /* @__PURE__ */ React3.createElement(
    Text,
    __spreadProps(__spreadValues({
      unstyled,
      ref
    }, others), {
      __staticSelector: "Highlight"
    }),
    highlightChunks.map(
      ({ chunk, highlighted }, i) => highlighted ? /* @__PURE__ */ React3.createElement(
        Mark,
        {
          unstyled,
          key: i,
          color,
          style: highlightStyles,
          "data-highlight": chunk
        },
        chunk
      ) : /* @__PURE__ */ React3.createElement("span", { key: i }, chunk)
    )
  );
});
Highlight.displayName = "@raikou/core/Highlight";
export {
  Highlight
};
//# sourceMappingURL=index.mjs.map