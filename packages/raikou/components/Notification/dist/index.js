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
  Notification: () => Notification
});
module.exports = __toCommonJS(src_exports);

// src/Notification.tsx
var import_react9 = __toESM(require("react"));
var import_core8 = require("@raikou/core");

// ../Loader/src/Loader.tsx
var import_react5 = __toESM(require("react"));
var import_core5 = require("@raikou/core");

// ../Loader/src/loaders/Bars.tsx
var import_react = __toESM(require("react"));

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
var import_core = require("@raikou/core");

// css-module:../Loader.module.css#css-module
var Loader_module_default = { "root": "m-5ae2e3c", "barsLoader": "m-7a2bd4cd", "bar": "m-870bb79", "bars-loader-animation": "m-5d2b3b9d", "dotsLoader": "m-4e3f22d7", "dot": "m-870c4af", "loader-dots-animation": "m-aac34a1", "ovalLoader": "m-b34414df", "oval-loader-animation": "m-f8e89c4b", "progressLoader": "m-f7590d7a" };

// ../Loader/src/loaders/Bars.tsx
var Bars = (0, import_react.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react.default.createElement(
      import_core.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default(Loader_module_default.barsLoader, className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react.default.createElement("span", { className: Loader_module_default.bar }),
      /* @__PURE__ */ import_react.default.createElement("span", { className: Loader_module_default.bar }),
      /* @__PURE__ */ import_react.default.createElement("span", { className: Loader_module_default.bar })
    );
  }
);

// ../Loader/src/loaders/Oval.tsx
var import_react2 = __toESM(require("react"));
var import_core2 = require("@raikou/core");
var Oval = (0, import_react2.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react2.default.createElement(
      import_core2.Box,
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
var import_react3 = __toESM(require("react"));
var import_core3 = require("@raikou/core");
var Progress = (0, import_react3.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react3.default.createElement(
      import_core3.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default(Loader_module_default.progressLoader, className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react3.default.createElement("svg", { viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ import_react3.default.createElement("g", { fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ import_react3.default.createElement("g", { transform: "translate(2.5 2.5)", strokeWidth: "5" }, /* @__PURE__ */ import_react3.default.createElement("circle", { strokeOpacity: ".5", cx: "16", cy: "16", r: "16" }), /* @__PURE__ */ import_react3.default.createElement("path", { d: "M32 16c0-9.94-8.06-16-16-16" }, /* @__PURE__ */ import_react3.default.createElement(
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
var import_react4 = __toESM(require("react"));
var import_core4 = require("@raikou/core");
var Dots = (0, import_react4.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react4.default.createElement(
      import_core4.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default(Loader_module_default.dotsLoader, className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react4.default.createElement("span", { className: Loader_module_default.dot }),
      /* @__PURE__ */ import_react4.default.createElement("span", { className: Loader_module_default.dot }),
      /* @__PURE__ */ import_react4.default.createElement("span", { className: Loader_module_default.dot })
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
var defaultProps = {
  loaders: defaultLoaders,
  type: "oval"
};
var varsResolver = (0, import_core5.createVarsResolver)(
  (theme, { size, color }) => ({
    root: {
      "--loader-size": (0, import_core5.getSize)(size, "loader-size"),
      "--loader-color": color ? (0, import_core5.getThemeColor)(color, theme) : void 0
    }
  })
);
var Loader = (0, import_core5.factory)((_props, ref) => {
  const props = (0, import_core5.useProps)("Loader", defaultProps, _props);
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
  const getStyles = (0, import_core5.useStyles)({
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
  return /* @__PURE__ */ import_react5.default.createElement(
    import_core5.Box,
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

// ../CloseButton/src/CloseIcon.tsx
var import_react6 = __toESM(require("react"));
var CloseIcon = (0, import_react6.forwardRef)(
  (_a, ref) => {
    var _b = _a, { size = "var(--cb-icon-size, 70%)", style } = _b, others = __objRest(_b, ["size", "style"]);
    return /* @__PURE__ */ import_react6.default.createElement(
      "svg",
      __spreadValues({
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: __spreadProps(__spreadValues({}, style), { width: size, height: size }),
        ref
      }, others),
      /* @__PURE__ */ import_react6.default.createElement(
        "path",
        {
          d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    );
  }
);
CloseIcon.displayName = "@raikou/core/CloseIcon";

// ../CloseButton/src/CloseButton.tsx
var import_react8 = __toESM(require("react"));
var import_core7 = require("@raikou/core");

// ../UnstyledButton/src/UnstyledButton.tsx
var import_react7 = __toESM(require("react"));
var import_core6 = require("@raikou/core");

// css-module:./UnstyledButton.module.css#css-module
var UnstyledButton_module_default = { "root": "m-87cf2631" };

// ../UnstyledButton/src/UnstyledButton.tsx
var defaultProps2 = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = (0, import_core6.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core6.useProps)("UnstyledButton", defaultProps2, _props);
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
    const getStyles = (0, import_core6.useStyles)({
      name: __staticSelector,
      props,
      classes: UnstyledButton_module_default,
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ import_react7.default.createElement(
      import_core6.Box,
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

// css-module:./CloseButton.module.css#css-module
var CloseButton_module_default = { "root": "m-86a44da5", "root--subtle": "m-220c80f2" };

// ../CloseButton/src/CloseButton.tsx
var defaultProps3 = {
  variant: "subtle",
  size: "md"
};
var varsResolver2 = (0, import_core7.createVarsResolver)(
  (_, { size, radius, iconSize }) => ({
    root: {
      "--cb-size": (0, import_core7.getSize)(size, "cb-size"),
      "--cb-radius": radius === void 0 ? void 0 : (0, import_core7.getRadius)(radius),
      "--cb-icon-size": (0, import_core7.rem)(iconSize)
    }
  })
);
var CloseButton = (0, import_core7.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core7.useProps)("CloseButton", defaultProps3, _props);
    const _a = props, {
      iconSize,
      children,
      vars,
      radius,
      className,
      classNames,
      style,
      styles,
      unstyled,
      "data-disabled": dataDisabled,
      disabled,
      variant
    } = _a, others = __objRest(_a, [
      "iconSize",
      "children",
      "vars",
      "radius",
      "className",
      "classNames",
      "style",
      "styles",
      "unstyled",
      "data-disabled",
      "disabled",
      "variant"
    ]);
    const getStyles = (0, import_core7.useStyles)({
      name: "CloseButton",
      props,
      className,
      style,
      classes: CloseButton_module_default,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver2
    });
    return /* @__PURE__ */ import_react8.default.createElement(
      UnstyledButton,
      __spreadValues(__spreadProps(__spreadValues({
        ref
      }, others), {
        unstyled,
        variant,
        disabled,
        mod: { disabled: disabled || dataDisabled }
      }), getStyles("root", { variant, active: true })),
      /* @__PURE__ */ import_react8.default.createElement(CloseIcon, null),
      children
    );
  }
);
CloseButton.displayName = "@raikou/core/CloseButton";
CloseButton.classes = CloseButton_module_default;

// css-module:./Notification.module.css#css-module
var Notification_module_default = { "root": "m-a513464", "icon": "m-a4ceffb", "loader": "m-b0920b15", "body": "m-a49ed24", "title": "m-3feedf16", "description": "m-3d733a3a", "closeButton": "m-919a4d88" };

// src/Notification.tsx
var defaultProps4 = {
  withCloseButton: true
};
var varsResolver3 = (0, import_core8.createVarsResolver)(
  (theme, { radius, color }) => ({
    root: {
      "--notification-radius": radius === void 0 ? void 0 : (0, import_core8.getRadius)(radius),
      "--notification-color": color ? (0, import_core8.getThemeColor)(color, theme) : void 0
    }
  })
);
var Notification = (0, import_core8.factory)((_props, ref) => {
  const props = (0, import_core8.useProps)("Notification", defaultProps4, _props);
  const _a = props, {
    className,
    color,
    radius,
    loading,
    withCloseButton,
    withBorder,
    title,
    icon,
    children,
    onClose,
    closeButtonProps,
    classNames,
    style,
    styles,
    unstyled,
    variant,
    vars
  } = _a, others = __objRest(_a, [
    "className",
    "color",
    "radius",
    "loading",
    "withCloseButton",
    "withBorder",
    "title",
    "icon",
    "children",
    "onClose",
    "closeButtonProps",
    "classNames",
    "style",
    "styles",
    "unstyled",
    "variant",
    "vars"
  ]);
  const getStyles = (0, import_core8.useStyles)({
    name: "Notification",
    classes: Notification_module_default,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver3
  });
  return /* @__PURE__ */ import_react9.default.createElement(
    import_core8.Box,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      mod: {
        "data-with-icon": !!icon || loading,
        "data-with-border": withBorder
      },
      ref,
      variant
    }), others), {
      role: "alert"
    }),
    icon && !loading && /* @__PURE__ */ import_react9.default.createElement("div", __spreadValues({}, getStyles("icon")), icon),
    loading && /* @__PURE__ */ import_react9.default.createElement(Loader, __spreadValues({ size: 28, color }, getStyles("loader"))),
    /* @__PURE__ */ import_react9.default.createElement("div", __spreadValues({}, getStyles("body")), /* @__PURE__ */ import_react9.default.createElement(import_core8.Box, __spreadProps(__spreadValues({}, getStyles("description")), { mod: { "data-with-title": !!title } }), children)),
    withCloseButton && /* @__PURE__ */ import_react9.default.createElement(
      CloseButton,
      __spreadValues(__spreadProps(__spreadValues({
        iconSize: 16,
        color: "gray"
      }, closeButtonProps), {
        onClick: onClose
      }), getStyles("closeButton"))
    )
  );
});
Notification.classes = Notification_module_default;
Notification.displayName = "@raikou/core/Notification";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Notification
});
//# sourceMappingURL=index.js.map