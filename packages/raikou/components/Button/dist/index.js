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
  Button: () => Button,
  ButtonGroup: () => ButtonGroup
});
module.exports = __toCommonJS(src_exports);

// src/Button.tsx
var import_react8 = __toESM(require("react"));
var import_core8 = require("@raikou/core");

// ../UnstyledButton/src/UnstyledButton.tsx
var import_react = __toESM(require("react"));
var import_core = require("@raikou/core");
var defaultProps = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = (0, import_core.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core.useProps)("UnstyledButton", defaultProps, _props);
    const _a = props, {
      className,
      component = "button",
      __staticSelector,
      unstyled,
      classNames,
      styles,
      style
    } = _a, others = __objRest(_a, [
      "className",
      "component",
      "__staticSelector",
      "unstyled",
      "classNames",
      "styles",
      "style"
    ]);
    const getStyles = (0, import_core.useStyles)({
      name: __staticSelector,
      props,
      classes: {
        root: "unstyled-button-root"
      },
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ import_react.default.createElement(
      import_core.Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { focusable: true })), {
        component,
        ref,
        type: component === "button" ? "button" : void 0
      }), others)
    );
  }
);
UnstyledButton.displayName = "@raikou/core/UnstyledButton";

// ../Loader/src/Loader.tsx
var import_react6 = __toESM(require("react"));
var import_core6 = require("@raikou/core");

// ../Loader/src/loaders/Bars.tsx
var import_react2 = __toESM(require("react"));

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

// ../Loader/src/loaders/Bars.tsx
var import_core2 = require("@raikou/core");
var Bars = (0, import_react2.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react2.default.createElement(
      import_core2.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("bars-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react2.default.createElement("span", { className: "bar" }),
      /* @__PURE__ */ import_react2.default.createElement("span", { className: "bar" }),
      /* @__PURE__ */ import_react2.default.createElement("span", { className: "bar" })
    );
  }
);

// ../Loader/src/loaders/Oval.tsx
var import_react3 = __toESM(require("react"));
var import_core3 = require("@raikou/core");
var Oval = (0, import_react3.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react3.default.createElement(
      import_core3.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("oval-loader", className)
      }, others), {
        ref
      })
    );
  }
);

// ../Loader/src/loaders/Progress.tsx
var import_react4 = __toESM(require("react"));
var import_core4 = require("@raikou/core");
var Progress = (0, import_react4.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react4.default.createElement(
      import_core4.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("progress-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react4.default.createElement("svg", { viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ import_react4.default.createElement("g", { fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ import_react4.default.createElement("g", { transform: "translate(2.5 2.5)", strokeWidth: "5" }, /* @__PURE__ */ import_react4.default.createElement("circle", { strokeOpacity: ".5", cx: "16", cy: "16", r: "16" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M32 16c0-9.94-8.06-16-16-16" }, /* @__PURE__ */ import_react4.default.createElement(
        "animateTransform",
        {
          attributeName: "transform",
          type: "rotate",
          from: "0 16 16",
          to: "360 16 16",
          dur: "1s",
          repeatCount: "indefinite"
        }
      )))))
    );
  }
);

// ../Loader/src/loaders/Dots.tsx
var import_react5 = __toESM(require("react"));
var import_core5 = require("@raikou/core");
var Dots = (0, import_react5.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react5.default.createElement(
      import_core5.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("dots-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react5.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react5.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react5.default.createElement("span", { className: "dot" })
    );
  }
);

// ../Loader/src/Loader.tsx
var defaultLoaders = {
  bars: Bars,
  oval: Oval,
  dots: Dots,
  progress: Progress
};
var defaultProps2 = {
  loaders: defaultLoaders,
  type: "oval"
};
var varsResolver = (0, import_core6.createVarsResolver)(
  (theme, { size, color }) => ({
    root: {
      "--loader-size": (0, import_core6.getSize)(size, "loader-size"),
      "--loader-color": color ? (0, import_core6.getThemeColor)(color, theme) : void 0
    }
  })
);
var Loader = (0, import_core6.factory)((_props, ref) => {
  const props = (0, import_core6.useProps)("Loader", defaultProps2, _props);
  const _a = props, {
    size,
    color,
    type,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    loaders,
    variant
  } = _a, others = __objRest(_a, [
    "size",
    "color",
    "type",
    "vars",
    "className",
    "style",
    "classNames",
    "styles",
    "unstyled",
    "loaders",
    "variant"
  ]);
  const getStyles = (0, import_core6.useStyles)({
    name: "Loader",
    props,
    classes: {
      root: "loader-root"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ import_react6.default.createElement(
    import_core6.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      ref,
      component: loaders[type],
      variant,
      size
    }), others)
  );
});
Loader.displayName = "@raikou/core/Loader";

// src/ButtonGroup/ButtonGroup.tsx
var import_react7 = __toESM(require("react"));
var import_core7 = require("@raikou/core");
var defaultProps3 = {
  orientation: "horizontal"
};
var varsResolver2 = (0, import_core7.createVarsResolver)(
  (_, { borderWidth }) => ({
    group: { "--button-border-width": (0, import_core7.rem)(borderWidth) }
  })
);
var ButtonGroup = (0, import_core7.factory)((_props, ref) => {
  const props = (0, import_core7.useProps)("ButtonGroup", defaultProps3, _props);
  const _a = (0, import_core7.useProps)("ButtonGroup", defaultProps3, _props), {
    className,
    style,
    classNames,
    styles,
    unstyled,
    orientation,
    vars,
    borderWidth,
    variant
  } = _a, others = __objRest(_a, [
    "className",
    "style",
    "classNames",
    "styles",
    "unstyled",
    "orientation",
    "vars",
    "borderWidth",
    "variant"
  ]);
  const getStyles = (0, import_core7.useStyles)({
    name: "ButtonGroup",
    props,
    classes: {
      group: "buttonGroup-group"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver2,
    rootSelector: "group"
  });
  return /* @__PURE__ */ import_react7.default.createElement(
    import_core7.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("group")), {
      ref,
      variant,
      mod: { "data-orientation": orientation },
      role: "group"
    }), others)
  );
});
ButtonGroup.displayName = "@raikou/core/ButtonGroup";

// src/Button.tsx
var defaultProps4 = {
  loaderPosition: "left"
};
var varsResolver3 = (0, import_core8.createVarsResolver)(
  (theme, { radius, color, gradient, variant, size, justify }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled"
    });
    return {
      root: {
        "--button-justify": justify,
        "--button-height": (0, import_core8.getSize)(size, "button-height"),
        "--button-padding-x": (0, import_core8.getSize)(size, "button-padding-x"),
        "--button-fz": (size == null ? void 0 : size.includes("compact")) ? (0, import_core8.getFontSize)(size.replace("compact-", "")) : (0, import_core8.getFontSize)(size),
        "--button-radius": radius ? (0, import_core8.getRadius)(radius) : void 0,
        "--button-bg": color || variant ? colors.background : void 0,
        "--button-hover": color || variant ? colors.hover : void 0,
        "--button-color": color || variant ? colors.color : void 0,
        "--button-bd": color || variant ? colors.border : void 0
      }
    };
  }
);
var Button = (0, import_core8.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core8.useProps)("Button", defaultProps4, _props);
  const _a = props, {
    style,
    vars,
    className,
    color,
    disabled,
    children,
    leftSection,
    rightSection,
    fullWidth,
    variant,
    radius,
    loading,
    loaderPosition,
    loaderProps,
    gradient,
    classNames,
    styles,
    unstyled,
    "data-disabled": dataDisabled
  } = _a, others = __objRest(_a, [
    "style",
    "vars",
    "className",
    "color",
    "disabled",
    "children",
    "leftSection",
    "rightSection",
    "fullWidth",
    "variant",
    "radius",
    "loading",
    "loaderPosition",
    "loaderProps",
    "gradient",
    "classNames",
    "styles",
    "unstyled",
    "data-disabled"
  ]);
  const getStyles = (0, import_core8.useStyles)({
    name: "Button",
    props,
    classes: {
      root: "button-root",
      inner: "button-inner",
      loader: "button-loader",
      section: "button-section",
      label: "button-label"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver3
  });
  const hasLeftSection = !!leftSection;
  const hasRightSection = !!rightSection;
  return /* @__PURE__ */ import_react8.default.createElement(
    UnstyledButton,
    __spreadValues(__spreadProps(__spreadValues({
      ref
    }, getStyles("root", { active: !disabled && !loading && !dataDisabled })), {
      unstyled,
      variant,
      disabled: disabled || loading,
      mod: [
        "button",
        {
          disabled: disabled || dataDisabled,
          loading,
          block: fullWidth,
          "with-left-section": hasLeftSection,
          "with-right-section": hasRightSection
        }
      ]
    }), others),
    /* @__PURE__ */ import_react8.default.createElement("span", __spreadValues({}, getStyles("inner")), !loading && leftSection && /* @__PURE__ */ import_react8.default.createElement(
      import_core8.Box,
      __spreadProps(__spreadValues({
        component: "span"
      }, getStyles("section")), {
        mod: { position: "left" }
      }),
      leftSection
    ), loading && loaderPosition === "left" && /* @__PURE__ */ import_react8.default.createElement(
      import_core8.Box,
      __spreadProps(__spreadValues({
        component: "span"
      }, getStyles("section")), {
        mod: { position: "left" }
      }),
      !loading && leftSection,
      loading && /* @__PURE__ */ import_react8.default.createElement(
        Loader,
        __spreadValues({
          type: "progress",
          color: "var(--button-color)",
          size: "calc(var(--button-height) / 2.4)"
        }, loaderProps)
      )
    ), loading && loaderPosition === "center" && /* @__PURE__ */ import_react8.default.createElement(import_core8.Box, __spreadValues({ component: "span" }, getStyles("loader")), /* @__PURE__ */ import_react8.default.createElement(
      Loader,
      __spreadValues({
        color: "var(--button-color)",
        size: "calc(var(--button-height) / 1.8)"
      }, loaderProps)
    )), /* @__PURE__ */ import_react8.default.createElement(import_core8.Box, __spreadValues({ component: "span", mod: { loading } }, getStyles("label")), children), rightSection && /* @__PURE__ */ import_react8.default.createElement(
      import_core8.Box,
      __spreadProps(__spreadValues({
        component: "span"
      }, getStyles("section")), {
        mod: { position: "right" }
      }),
      rightSection
    ))
  );
});
Button.displayName = "@raikou/core/Button";
Button.Group = ButtonGroup;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  ButtonGroup
});
