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
  Alert: () => Alert
});
module.exports = __toCommonJS(src_exports);

// src/Alert.tsx
var import_react4 = __toESM(require("react"));
var import_core3 = require("@raikou/core");

// ../CloseButton/src/CloseIcon.tsx
var import_react = __toESM(require("react"));
var CloseIcon = (0, import_react.forwardRef)(
  (_a, ref) => {
    var _b = _a, { size = "var(--cb-icon-size, 70%)", style } = _b, others = __objRest(_b, ["size", "style"]);
    return /* @__PURE__ */ import_react.default.createElement(
      "svg",
      __spreadValues({
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: __spreadProps(__spreadValues({}, style), { width: size, height: size }),
        ref
      }, others),
      /* @__PURE__ */ import_react.default.createElement(
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
var import_react3 = __toESM(require("react"));
var import_core2 = require("@raikou/core");

// ../UnstyledButton/src/UnstyledButton.tsx
var import_react2 = __toESM(require("react"));
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
        root: "unstyledButton-root"
      },
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ import_react2.default.createElement(
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

// ../CloseButton/src/CloseButton.tsx
var defaultProps2 = {
  variant: "subtle",
  size: "md"
};
var varsResolver = (0, import_core2.createVarsResolver)(
  (_, { size, radius, iconSize }) => ({
    root: {
      "--cb-size": (0, import_core2.getSize)(size, "cb-size"),
      "--cb-radius": radius === void 0 ? void 0 : (0, import_core2.getRadius)(radius),
      "--cb-icon-size": (0, import_core2.rem)(iconSize)
    }
  })
);
var CloseButton = (0, import_core2.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core2.useProps)("CloseButton", defaultProps2, _props);
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
    const getStyles = (0, import_core2.useStyles)({
      name: "CloseButton",
      props,
      className,
      style,
      classes: {
        root: "closeButton-root"
      },
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver
    });
    return /* @__PURE__ */ import_react3.default.createElement(
      UnstyledButton,
      __spreadValues(__spreadProps(__spreadValues({
        ref
      }, others), {
        unstyled,
        variant,
        disabled,
        mod: { disabled: disabled || dataDisabled }
      }), getStyles("root", { variant, active: true })),
      /* @__PURE__ */ import_react3.default.createElement(CloseIcon, null),
      children
    );
  }
);
CloseButton.displayName = "@raikou/core/CloseButton";

// src/Alert.tsx
var defaultProps3 = {};
var varsResolver2 = (0, import_core3.createVarsResolver)(
  (theme, { radius, color, variant }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      variant: variant || "light"
    });
    return {
      root: {
        "--alert-radius": radius === void 0 ? void 0 : (0, import_core3.getRadius)(radius),
        "--alert-bg": color || variant ? colors.background : void 0,
        "--alert-color": color || variant ? colors.color : void 0,
        "--alert-bd": color || variant ? colors.border : void 0
      }
    };
  }
);
var Alert = (0, import_core3.factory)((_props, ref) => {
  const props = (0, import_core3.useProps)("Alert", defaultProps3, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    radius,
    color,
    title,
    children,
    id,
    icon,
    withCloseButton,
    onClose,
    closeButtonLabel,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "radius",
    "color",
    "title",
    "children",
    "id",
    "icon",
    "withCloseButton",
    "onClose",
    "closeButtonLabel",
    "variant"
  ]);
  const getStyles = (0, import_core3.useStyles)({
    name: "Alert",
    classes: {
      root: "alert-root",
      body: "alert-body",
      label: "alert-label",
      title: "alert-title",
      icon: "alert-icon",
      wrapper: "alert-wrapper",
      message: "alert-message",
      closeButton: "alert-closeButton"
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
  const rootId = `${id}-${(0, import_core3.useRandomClassName)()}`;
  const titleId = title && `${rootId}-title` || void 0;
  const bodyId = `${rootId}-body`;
  return /* @__PURE__ */ import_react4.default.createElement(
    import_core3.Box,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({
      id: rootId
    }, getStyles("root", { variant })), {
      variant,
      ref
    }), others), {
      role: "alert",
      "aria-describedby": bodyId,
      "aria-labelledby": titleId
    }),
    /* @__PURE__ */ import_react4.default.createElement("div", __spreadValues({}, getStyles("wrapper")), icon && /* @__PURE__ */ import_react4.default.createElement("div", __spreadValues({}, getStyles("icon")), icon), /* @__PURE__ */ import_react4.default.createElement("div", __spreadValues({}, getStyles("body")), title && /* @__PURE__ */ import_react4.default.createElement(
      "div",
      __spreadProps(__spreadValues({}, getStyles("title")), {
        "data-with-close-button": withCloseButton || void 0
      }),
      /* @__PURE__ */ import_react4.default.createElement("span", __spreadValues({ id: titleId }, getStyles("label")), title)
    ), children && /* @__PURE__ */ import_react4.default.createElement("div", __spreadValues({ id: bodyId }, getStyles("message")), children)), withCloseButton && /* @__PURE__ */ import_react4.default.createElement(
      CloseButton,
      __spreadProps(__spreadValues({}, getStyles("closeButton")), {
        onClick: onClose,
        variant: "transparent",
        size: 16,
        iconSize: 16,
        "aria-label": closeButtonLabel
      })
    ))
  );
});
Alert.displayName = "@raikou/core/Alert";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alert
});
