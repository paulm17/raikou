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

// src/Spoiler.tsx
import React3, { useState } from "react";
import { useElementSize } from "@raikou/hooks";
import {
  Box as Box2,
  factory,
  useProps as useProps3,
  useStyles as useStyles2,
  createVarsResolver as createVarsResolver2,
  rem
} from "@raikou/core";

// ../Anchor/src/Anchor.tsx
import React2 from "react";

// ../../../../node_modules/.pnpm/clsx@2.0.0/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// ../Anchor/src/Anchor.tsx
import { polymorphicFactory as polymorphicFactory2, useProps as useProps2 } from "@raikou/core";

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
  variant: "text",
  inherit: false,
  size: "md"
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
Text.displayName = "@raikou/core/Text";

// ../Anchor/src/Anchor.tsx
var defaultProps2 = {
  underline: "hover"
};
var Anchor = polymorphicFactory2((props, ref) => {
  const _a = useProps2(
    "Anchor",
    defaultProps2,
    props
  ), { underline, className } = _a, others = __objRest(_a, ["underline", "className"]);
  return /* @__PURE__ */ React2.createElement(
    Text,
    __spreadProps(__spreadValues({
      component: "a",
      ref,
      className: clsx_default("anchor-root", className)
    }, others), {
      mod: { underline },
      __staticSelector: "Anchor"
    })
  );
});
Anchor.displayName = "@raikou/core/Anchor";

// src/Spoiler.tsx
var defaultProps3 = {
  maxHeight: 100,
  initialState: false
};
var varsResolver2 = createVarsResolver2(
  (_, { transitionDuration }) => ({
    root: {
      "--spoiler-transition-duration": transitionDuration !== void 0 ? `${transitionDuration}ms` : void 0
    }
  })
);
var Spoiler = factory((_props, ref) => {
  const props = useProps3("Spoiler", defaultProps3, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    initialState,
    maxHeight,
    hideLabel,
    showLabel,
    children,
    controlRef
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "initialState",
    "maxHeight",
    "hideLabel",
    "showLabel",
    "children",
    "controlRef"
  ]);
  const getStyles = useStyles2({
    name: "Spoiler",
    classes: {
      root: "spoiler-root",
      content: "spoiler-content"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver2
  });
  const [show, setShowState] = useState(initialState);
  const { ref: contentRef, height } = useElementSize();
  const spoiler = maxHeight < height;
  const spoilerMoreContent = show ? hideLabel : showLabel;
  const s = {
    maxHeight: !show ? rem(maxHeight) : height ? rem(height) : void 0
  };
  return /* @__PURE__ */ React3.createElement(Box2, __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), { ref }), others), /* @__PURE__ */ React3.createElement("div", __spreadProps(__spreadValues({}, getStyles("content", { style: s })), { "data-reduce-motion": true }), /* @__PURE__ */ React3.createElement("div", { ref: contentRef }, children)), spoiler && /* @__PURE__ */ React3.createElement(
    Anchor,
    __spreadValues({
      component: "button",
      ref: controlRef,
      onClick: () => setShowState((opened) => !opened)
    }, getStyles("control")),
    spoilerMoreContent
  ));
});
Spoiler.displayName = "@raikou/core/Spoiler";
export {
  Spoiler
};
