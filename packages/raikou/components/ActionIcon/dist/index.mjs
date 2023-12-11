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

// src/ActionIcon.tsx
import React8 from "react";
import {
  useProps as useProps4,
  useStyles as useStyles4,
  getRadius,
  polymorphicFactory as polymorphicFactory2,
  getSize as getSize2,
  createVarsResolver as createVarsResolver3
} from "@raikou/core";

// ../UnstyledButton/src/UnstyledButton.tsx
import React from "react";
import {
  Box,
  useProps,
  useStyles,
  polymorphicFactory
} from "@raikou/core";

// css-module:./UnstyledButton.module.css#css-module
var UnstyledButton_module_default = { "root": "m-87cf2631" };

// ../UnstyledButton/src/UnstyledButton.tsx
var defaultProps = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = polymorphicFactory(
  (_props, ref) => {
    const props = useProps("UnstyledButton", defaultProps, _props);
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
    const getStyles = useStyles({
      name: __staticSelector,
      props,
      classes: UnstyledButton_module_default,
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ React.createElement(
      Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { focusable: true })), {
        component,
        ref,
        type: component === "button" ? "button" : void 0
      }), others)
    );
  }
);
UnstyledButton.displayName = "@raikou/core/UnstyledButton";
UnstyledButton.classes = UnstyledButton_module_default;

// ../Loader/src/Loader.tsx
import React6 from "react";
import {
  Box as Box6,
  useProps as useProps2,
  getThemeColor,
  useStyles as useStyles2,
  factory,
  getSize,
  createVarsResolver
} from "@raikou/core";

// ../Loader/src/loaders/Bars.tsx
import React2, { forwardRef } from "react";

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
import { Box as Box2 } from "@raikou/core";

// css-module:../Loader.module.css#css-module
var Loader_module_default = { "root": "m-5ae2e3c", "barsLoader": "m-7a2bd4cd", "bar": "m-870bb79", "bars-loader-animation": "m-5d2b3b9d", "dotsLoader": "m-4e3f22d7", "dot": "m-870c4af", "loader-dots-animation": "m-aac34a1", "ovalLoader": "m-b34414df", "oval-loader-animation": "m-f8e89c4b", "progressLoader": "m-f7590d7a" };

// ../Loader/src/loaders/Bars.tsx
var Bars = forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React2.createElement(
      Box2,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default(Loader_module_default.barsLoader, className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React2.createElement("span", { className: Loader_module_default.bar }),
      /* @__PURE__ */ React2.createElement("span", { className: Loader_module_default.bar }),
      /* @__PURE__ */ React2.createElement("span", { className: Loader_module_default.bar })
    );
  }
);

// ../Loader/src/loaders/Oval.tsx
import React3, { forwardRef as forwardRef2 } from "react";
import { Box as Box3 } from "@raikou/core";
var Oval = forwardRef2(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React3.createElement(
      Box3,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default(Loader_module_default.ovalLoader, className)
      }, others), {
        ref
      })
    );
  }
);

// ../Loader/src/loaders/Progress.tsx
import React4, { forwardRef as forwardRef3 } from "react";
import { Box as Box4 } from "@raikou/core";
var Progress = forwardRef3(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React4.createElement(
      Box4,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default(Loader_module_default.progressLoader, className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React4.createElement("svg", { viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ React4.createElement("g", { fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ React4.createElement("g", { transform: "translate(2.5 2.5)", strokeWidth: "5" }, /* @__PURE__ */ React4.createElement("circle", { strokeOpacity: ".5", cx: "16", cy: "16", r: "16" }), /* @__PURE__ */ React4.createElement("path", { d: "M32 16c0-9.94-8.06-16-16-16" }, /* @__PURE__ */ React4.createElement(
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
import React5, { forwardRef as forwardRef4 } from "react";
import { Box as Box5 } from "@raikou/core";
var Dots = forwardRef4(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React5.createElement(
      Box5,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default(Loader_module_default.dotsLoader, className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React5.createElement("span", { className: Loader_module_default.dot }),
      /* @__PURE__ */ React5.createElement("span", { className: Loader_module_default.dot }),
      /* @__PURE__ */ React5.createElement("span", { className: Loader_module_default.dot })
    );
  }
);

// css-module:./Loader.module.css#css-module
var Loader_module_default2 = { "root": "m-5ae2e3c", "barsLoader": "m-7a2bd4cd", "bar": "m-870bb79", "bars-loader-animation": "m-5d2b3b9d", "dotsLoader": "m-4e3f22d7", "dot": "m-870c4af", "loader-dots-animation": "m-aac34a1", "ovalLoader": "m-b34414df", "oval-loader-animation": "m-f8e89c4b", "progressLoader": "m-f7590d7a" };

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
var varsResolver = createVarsResolver(
  (theme, { size, color }) => ({
    root: {
      "--loader-size": getSize(size, "loader-size"),
      "--loader-color": color ? getThemeColor(color, theme) : void 0
    }
  })
);
var Loader = factory((_props, ref) => {
  const props = useProps2("Loader", defaultProps2, _props);
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
  const getStyles = useStyles2({
    name: "Loader",
    props,
    classes: Loader_module_default2,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React6.createElement(
    Box6,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      ref,
      component: loaders[type],
      variant,
      size
    }), others)
  );
});
Loader.displayName = "@raikou/core/Loader";
Loader.classes = Loader_module_default2;

// src/ActionIconGroup/ActionIconGroup.tsx
import React7 from "react";
import {
  factory as factory2,
  Box as Box7,
  useProps as useProps3,
  useStyles as useStyles3,
  rem,
  createVarsResolver as createVarsResolver2
} from "@raikou/core";

// css-module:../ActionIcon.module.css#css-module
var ActionIcon_module_default = { "root": "m-8d3f4000", "loader": "m-302b9fb1", "group": "m-1a0f1b21" };

// src/ActionIconGroup/ActionIconGroup.tsx
var defaultProps3 = {
  orientation: "horizontal"
};
var varsResolver2 = createVarsResolver2(
  (_, { borderWidth }) => ({
    group: { "--ai-border-width": rem(borderWidth) }
  })
);
var ActionIconGroup = factory2(
  (_props, ref) => {
    const props = useProps3("ActionIconGroup", defaultProps3, _props);
    const _a = useProps3("ActionIconGroup", defaultProps3, _props), {
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
    const getStyles = useStyles3({
      name: "ActionIconGroup",
      props,
      classes: ActionIcon_module_default,
      className,
      style,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver2,
      rootSelector: "group"
    });
    return /* @__PURE__ */ React7.createElement(
      Box7,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("group")), {
        ref,
        variant,
        mod: { "data-orientation": orientation },
        role: "group"
      }), others)
    );
  }
);
ActionIconGroup.classes = ActionIcon_module_default;
ActionIconGroup.displayName = "@raikou/core/ActionIconGroup";

// css-module:./ActionIcon.module.css#css-module
var ActionIcon_module_default2 = { "root": "m-8d3f4000", "loader": "m-302b9fb1", "group": "m-1a0f1b21" };

// src/ActionIcon.tsx
var defaultProps4 = {};
var varsResolver3 = createVarsResolver3(
  (theme, { size, radius, variant, gradient, color }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled"
    });
    return {
      root: {
        "--ai-size": getSize2(size, "ai-size"),
        "--ai-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--ai-bg": color || variant ? colors.background : void 0,
        "--ai-hover": color || variant ? colors.hover : void 0,
        "--ai-color": color || variant ? colors.color : void 0,
        "--ai-bd": color || variant ? colors.border : void 0
      }
    };
  }
);
var ActionIcon = polymorphicFactory2(
  (_props, ref) => {
    const props = useProps4("ActionIcon", defaultProps4, _props);
    const _a = props, {
      className,
      unstyled,
      variant,
      classNames,
      styles,
      style,
      loading,
      loaderProps,
      size,
      color,
      radius,
      __staticSelector,
      gradient,
      vars,
      children,
      disabled,
      "data-disabled": dataDisabled
    } = _a, others = __objRest(_a, [
      "className",
      "unstyled",
      "variant",
      "classNames",
      "styles",
      "style",
      "loading",
      "loaderProps",
      "size",
      "color",
      "radius",
      "__staticSelector",
      "gradient",
      "vars",
      "children",
      "disabled",
      "data-disabled"
    ]);
    const getStyles = useStyles4({
      name: ["ActionIcon", __staticSelector],
      props,
      className,
      style,
      classes: ActionIcon_module_default2,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver3
    });
    return /* @__PURE__ */ React8.createElement(
      UnstyledButton,
      __spreadProps(__spreadValues(__spreadValues({}, getStyles("root", {
        active: !disabled && !loading && !dataDisabled
      })), others), {
        unstyled,
        variant,
        size,
        disabled: disabled || loading,
        ref,
        mod: { loading, disabled: disabled || dataDisabled }
      }),
      loading ? /* @__PURE__ */ React8.createElement(
        Loader,
        __spreadValues(__spreadProps(__spreadValues({}, getStyles("loader")), {
          color: "var(--ai-color)",
          size: "calc(var(--ai-size) * 0.55)"
        }), loaderProps)
      ) : children
    );
  }
);
ActionIcon.displayName = "@raikou/core/ActionIcon";
ActionIcon.Group = ActionIconGroup;
ActionIcon.classes = ActionIcon_module_default2;
export {
  ActionIcon,
  ActionIconGroup
};
//# sourceMappingURL=index.mjs.map