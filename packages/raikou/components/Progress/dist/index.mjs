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

// src/Progress.tsx
import React6 from "react";
import {
  factory as factory4,
  useProps as useProps4,
  useResolvedStylesApi
} from "@raikou/core";

// src/ProgressRoot/ProgressRoot.tsx
import React3 from "react";
import {
  Box,
  factory,
  useProps,
  useStyles,
  createVarsResolver,
  getSize,
  getRadius
} from "@raikou/core";

// ../_utils/create-safe-context/create-safe-context.tsx
import React, { createContext, useContext } from "react";
function createSafeContext(errorMessage) {
  const Context = createContext(null);
  const useSafeContext = () => {
    const ctx = useContext(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ React.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../_utils/create-optional-context/create-optional-context.tsx
import React2, { createContext as createContext2, useContext as useContext2 } from "react";

// ../_utils/use-hovered/use-hovered.ts
import { useState } from "react";

// ../_utils/create-use-external-events/create-use-external-events.ts
import { useEffect, useLayoutEffect } from "react";

// src/Progress.context.ts
var [ProgressProvider, useProgressContext] = createSafeContext(
  "Progress.Root component was not found in tree"
);

// css-module:../Progress.module.css#css-module
var Progress_module_default = { "root": "m-db6d6462", "section": "m-2242eb65", "stripes-animation": "m-81a374bd", "label": "m-91e40b74" };

// src/ProgressRoot/ProgressRoot.tsx
var defaultProps = {};
var varsResolver = createVarsResolver(
  (_, { size, radius }) => ({
    root: {
      "--progress-size": getSize(size, "progress-size"),
      "--progress-radius": radius === void 0 ? void 0 : getRadius(radius)
    }
  })
);
var ProgressRoot = factory((_props, ref) => {
  const props = useProps("ProgressRoot", defaultProps, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars"]);
  const getStyles = useStyles({
    name: "Progress",
    classes: Progress_module_default,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React3.createElement(ProgressProvider, { value: { getStyles } }, /* @__PURE__ */ React3.createElement(Box, __spreadValues(__spreadValues({ ref }, getStyles("root")), others)));
});
ProgressRoot.classes = Progress_module_default;
ProgressRoot.displayName = "@raikou/core/ProgressRoot";

// src/ProgressSection/ProgressSection.tsx
import React4 from "react";
import {
  Box as Box2,
  factory as factory2,
  useProps as useProps2,
  useRaikouTheme,
  getThemeColor
} from "@raikou/core";
var defaultProps2 = {
  withAria: true
};
var ProgressSection = factory2((props, ref) => {
  const _a = useProps2("ProgressSection", defaultProps2, props), {
    classNames,
    className,
    style,
    styles,
    vars,
    value,
    withAria,
    color,
    striped,
    animated
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "vars",
    "value",
    "withAria",
    "color",
    "striped",
    "animated"
  ]);
  const ctx = useProgressContext();
  const theme = useRaikouTheme();
  const ariaAttributes = withAria ? {
    role: "progressbar",
    "aria-valuemax": 100,
    "aria-valuemin": 0,
    "aria-valuenow": value,
    "aria-valuetext": `${value}%`
  } : {};
  return /* @__PURE__ */ React4.createElement(
    Box2,
    __spreadProps(__spreadValues(__spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("section", { className, classNames, styles, style })), others), ariaAttributes), {
      mod: { striped: striped || animated, animated },
      __vars: {
        "--progress-section-width": `${value}%`,
        "--progress-section-color": getThemeColor(color, theme)
      }
    })
  );
});
ProgressSection.displayName = "@raikou/core/ProgressSection";

// src/ProgressLabel/ProgressLabel.tsx
import React5 from "react";
import {
  Box as Box3,
  factory as factory3,
  useProps as useProps3
} from "@raikou/core";
var defaultProps3 = {};
var ProgressLabel = factory3((props, ref) => {
  const _a = useProps3(
    "ProgressLabel",
    defaultProps3,
    props
  ), { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useProgressContext();
  return /* @__PURE__ */ React5.createElement(
    Box3,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("label", { className, style, classNames, styles })), others)
  );
});
ProgressLabel.displayName = "@raikou/core/ProgressLabel";

// src/Progress.tsx
var defaultProps4 = {};
var Progress = factory4((_props, ref) => {
  const props = useProps4("Progress", defaultProps4, _props);
  const _a = props, {
    value,
    classNames,
    styles,
    vars,
    color,
    striped,
    animated,
    "aria-label": label
  } = _a, others = __objRest(_a, [
    "value",
    "classNames",
    "styles",
    "vars",
    "color",
    "striped",
    "animated",
    "aria-label"
  ]);
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  return /* @__PURE__ */ React6.createElement(
    ProgressRoot,
    __spreadValues({
      ref,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      vars
    }, others),
    /* @__PURE__ */ React6.createElement(
      ProgressSection,
      {
        value,
        color,
        striped,
        animated,
        "aria-label": label
      }
    )
  );
});
Progress.displayName = "@raikou/core/Progress";
Progress.Section = ProgressSection;
Progress.Root = ProgressRoot;
Progress.Label = ProgressLabel;
export {
  Progress,
  ProgressLabel,
  ProgressRoot,
  ProgressSection
};
//# sourceMappingURL=index.mjs.map