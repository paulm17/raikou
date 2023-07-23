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
  AppShell: () => AppShell,
  AppShellAside: () => AppShellAside,
  AppShellFooter: () => AppShellFooter,
  AppShellHeader: () => AppShellHeader,
  AppShellMain: () => AppShellMain,
  AppShellNavbar: () => AppShellNavbar,
  AppShellSection: () => AppShellSection
});
module.exports = __toCommonJS(src_exports);

// src/AppShell.tsx
var import_react11 = __toESM(require("react"));
var import_core15 = require("@raikou/core");

// src/AppShellNavbar/AppShellNavbar.tsx
var import_react3 = __toESM(require("react"));
var import_core = require("@raikou/core");

// ../_utils/create-safe-context/create-safe-context.tsx
var import_react = __toESM(require("react"));
function createSafeContext(errorMessage) {
  const Context = (0, import_react.createContext)(null);
  const useSafeContext = () => {
    const ctx = (0, import_react.useContext)(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react.default.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../_utils/create-optional-context/create-optional-context.tsx
var import_react2 = __toESM(require("react"));

// src/AppShell.context.ts
var [AppShellProvider, useAppShellContext] = createSafeContext("AppShell was not found in tree");

// src/AppShellNavbar/AppShellNavbar.tsx
var defaultProps = {};
var AppShellNavbar = (0, import_core.factory)((_props, ref) => {
  const props = (0, import_core.useProps)("AppShellNavbar", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    withBorder,
    zIndex
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "withBorder",
    "zIndex"
  ]);
  const ctx = useAppShellContext();
  if (ctx.disabled) {
    return null;
  }
  return /* @__PURE__ */ import_react3.default.createElement(
    import_core.Box,
    __spreadProps(__spreadValues(__spreadValues({
      component: "nav",
      ref,
      mod: { "with-border": withBorder != null ? withBorder : ctx.withBorder }
    }, ctx.getStyles("navbar", { className, classNames, styles, style })), others), {
      __vars: {
        "--app-shell-navbar-z-index": `calc(${zIndex != null ? zIndex : ctx.zIndex} + 1)`
      }
    })
  );
});
AppShellNavbar.displayName = "@raikou/core/AppShellNavbar";

// src/AppShellHeader/AppShellHeader.tsx
var import_react4 = __toESM(require("react"));
var import_core2 = require("@raikou/core");
var defaultProps2 = {};
var AppShellHeader = (0, import_core2.factory)((_props, ref) => {
  var _b;
  const props = (0, import_core2.useProps)("AppShellHeader", defaultProps2, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    withBorder,
    zIndex
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "withBorder",
    "zIndex"
  ]);
  const ctx = useAppShellContext();
  if (ctx.disabled) {
    return null;
  }
  return /* @__PURE__ */ import_react4.default.createElement(
    import_core2.Box,
    __spreadProps(__spreadValues(__spreadValues({
      component: "header",
      ref,
      mod: { "with-border": withBorder != null ? withBorder : ctx.withBorder }
    }, ctx.getStyles("header", { className, classNames, styles, style })), others), {
      __vars: {
        "--app-shell-header-z-index": (_b = zIndex != null ? zIndex : ctx.zIndex) == null ? void 0 : _b.toString()
      }
    })
  );
});
AppShellHeader.displayName = "@raikou/core/AppShellHeader";

// src/AppShellFooter/AppShellFooter.tsx
var import_react5 = __toESM(require("react"));
var import_core3 = require("@raikou/core");
var defaultProps3 = {};
var AppShellFooter = (0, import_core3.factory)((_props, ref) => {
  var _b;
  const props = (0, import_core3.useProps)("AppShellFooter", defaultProps3, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    withBorder,
    zIndex
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "withBorder",
    "zIndex"
  ]);
  const ctx = useAppShellContext();
  if (ctx.disabled) {
    return null;
  }
  return /* @__PURE__ */ import_react5.default.createElement(
    import_core3.Box,
    __spreadProps(__spreadValues(__spreadValues({
      component: "footer",
      ref,
      mod: { "with-border": withBorder != null ? withBorder : ctx.withBorder }
    }, ctx.getStyles("footer", { className, classNames, styles, style })), others), {
      __vars: {
        "--app-shell-footer-z-index": (_b = zIndex != null ? zIndex : ctx.zIndex) == null ? void 0 : _b.toString()
      }
    })
  );
});
AppShellFooter.displayName = "@raikou/core/AppShellFooter";

// src/AppShellAside/AppShellAside.tsx
var import_react6 = __toESM(require("react"));
var import_core4 = require("@raikou/core");
var defaultProps4 = {};
var AppShellAside = (0, import_core4.factory)((_props, ref) => {
  const props = (0, import_core4.useProps)("AppShellAside", defaultProps4, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    withBorder,
    zIndex
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "withBorder",
    "zIndex"
  ]);
  const ctx = useAppShellContext();
  if (ctx.disabled) {
    return null;
  }
  return /* @__PURE__ */ import_react6.default.createElement(
    import_core4.Box,
    __spreadProps(__spreadValues(__spreadValues({
      component: "aside",
      ref,
      mod: { "with-border": withBorder != null ? withBorder : ctx.withBorder }
    }, ctx.getStyles("aside", { className, classNames, styles, style })), others), {
      __vars: {
        "--app-shell-aside-z-index": `calc(${zIndex != null ? zIndex : ctx.zIndex} + 1)`
      }
    })
  );
});
AppShellAside.displayName = "@raikou/core/AppShellAside";

// src/AppShellMain/AppShellMain.tsx
var import_react7 = __toESM(require("react"));
var import_core5 = require("@raikou/core");
var defaultProps5 = {};
var AppShellMain = (0, import_core5.factory)((_props, ref) => {
  const props = (0, import_core5.useProps)("AppShellMain", defaultProps5, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars"]);
  const ctx = useAppShellContext();
  return /* @__PURE__ */ import_react7.default.createElement(
    import_core5.Box,
    __spreadValues(__spreadValues({
      component: "main",
      ref
    }, ctx.getStyles("main", { className, style, classNames, styles })), others)
  );
});
AppShellMain.displayName = "@raikou/core/AppShellMain";

// src/AppShellSection/AppShellSection.tsx
var import_react8 = __toESM(require("react"));
var import_core6 = require("@raikou/core");
var defaultProps6 = {};
var AppShellSection = (0, import_core6.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core6.useProps)("AppShellSection", defaultProps6, _props);
    const _a = props, {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      grow
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "unstyled",
      "vars",
      "grow"
    ]);
    const ctx = useAppShellContext();
    return /* @__PURE__ */ import_react8.default.createElement(
      import_core6.Box,
      __spreadValues(__spreadValues({
        ref,
        mod: { grow }
      }, ctx.getStyles("section", { className, style, classNames, styles })), others)
    );
  }
);
AppShellSection.displayName = "@raikou/core/AppShellSection";

// src/AppShellMediaStyles/AppShellMediaStyles.tsx
var import_react9 = __toESM(require("react"));
var import_core14 = require("@raikou/core");

// src/AppShellMediaStyles/get-variables/get-variables.ts
var import_core13 = require("@raikou/core");

// src/AppShellMediaStyles/assign-aside-variables/assign-aside-variables.ts
var import_core7 = require("@raikou/core");

// src/AppShellMediaStyles/is-responsive-size/is-responsive-size.ts
function isResponsiveSize(size) {
  if (typeof size !== "object" || size === null) {
    return false;
  }
  if (Object.keys(size).length === 1 && "base" in size) {
    return false;
  }
  return true;
}

// src/AppShellMediaStyles/is-primitive-size/is-primitive-size.ts
function isPrimitiveSize(size) {
  const isBaseSize = typeof size === "object" && size !== null && typeof size.base !== "undefined" && Object.keys(size).length === 1;
  return typeof size === "number" || typeof size === "string" || isBaseSize;
}

// src/AppShellMediaStyles/get-base-size/get-base-size.ts
function getBaseSize(size) {
  if (typeof size === "object") {
    return size.base;
  }
  return size;
}

// src/AppShellMediaStyles/assign-aside-variables/assign-aside-variables.ts
function assignAsideVariables({
  baseStyles,
  minMediaStyles,
  maxMediaStyles,
  aside,
  theme
}) {
  var _a, _b, _c;
  const asideWidth = aside == null ? void 0 : aside.width;
  const collapsedAsideTransform = "translateX(var(--app-shell-aside-width))";
  const collapsedAsideTransformRtl = "translateX(calc(var(--app-shell-aside-width) * -1))";
  if ((aside == null ? void 0 : aside.breakpoint) && !((_a = aside == null ? void 0 : aside.collapsed) == null ? void 0 : _a.mobile)) {
    maxMediaStyles[aside == null ? void 0 : aside.breakpoint] = maxMediaStyles[aside == null ? void 0 : aside.breakpoint] || {};
    maxMediaStyles[aside == null ? void 0 : aside.breakpoint]["--app-shell-aside-width"] = "100%";
    maxMediaStyles[aside == null ? void 0 : aside.breakpoint]["--app-shell-aside-offset"] = "0px";
  }
  if (isPrimitiveSize(asideWidth)) {
    const baseSize = (0, import_core7.rem)(getBaseSize(asideWidth));
    baseStyles["--app-shell-aside-width"] = baseSize;
    baseStyles["--app-shell-aside-offset"] = baseSize;
  }
  if (isResponsiveSize(asideWidth)) {
    if (typeof asideWidth.base !== "undefined") {
      baseStyles["--app-shell-aside-width"] = (0, import_core7.rem)(asideWidth.base);
      baseStyles["--app-shell-aside-offset"] = (0, import_core7.rem)(asideWidth.base);
    }
    (0, import_core7.keys)(asideWidth).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-aside-width"] = (0, import_core7.rem)(asideWidth[key]);
        minMediaStyles[key]["--app-shell-aside-offset"] = (0, import_core7.rem)(asideWidth[key]);
      }
    });
  }
  if ((_b = aside == null ? void 0 : aside.collapsed) == null ? void 0 : _b.desktop) {
    const breakpointValue = aside.breakpoint;
    minMediaStyles[breakpointValue] = minMediaStyles[breakpointValue] || {};
    minMediaStyles[breakpointValue]["--app-shell-aside-transform"] = collapsedAsideTransform;
    minMediaStyles[breakpointValue]["--app-shell-aside-transform-rtl"] = collapsedAsideTransformRtl;
    minMediaStyles[breakpointValue]["--app-shell-aside-offset"] = "0px !important";
  }
  if ((_c = aside == null ? void 0 : aside.collapsed) == null ? void 0 : _c.mobile) {
    const breakpointValue = (0, import_core7.getBreakpointValue)(aside.breakpoint, theme) - 0.1;
    maxMediaStyles[breakpointValue] = maxMediaStyles[breakpointValue] || {};
    maxMediaStyles[breakpointValue]["--app-shell-aside-width"] = "100%";
    maxMediaStyles[breakpointValue]["--app-shell-aside-offset"] = "0px";
    maxMediaStyles[breakpointValue]["--app-shell-aside-transform"] = collapsedAsideTransform;
    maxMediaStyles[breakpointValue]["--app-shell-aside-transform-rtl"] = collapsedAsideTransformRtl;
  }
}

// src/AppShellMediaStyles/assign-footer-variables/assign-footer-variables.ts
var import_core8 = require("@raikou/core");
function assignFooterVariables({
  baseStyles,
  minMediaStyles,
  footer
}) {
  var _a;
  const footerHeight = footer == null ? void 0 : footer.height;
  const collapsedFooterTransform = "translateY(var(--app-shell-footer-height))";
  const shouldOffset = (_a = footer == null ? void 0 : footer.offset) != null ? _a : true;
  if (isPrimitiveSize(footerHeight)) {
    const baseSize = (0, import_core8.rem)(getBaseSize(footerHeight));
    baseStyles["--app-shell-footer-height"] = baseSize;
    if (shouldOffset) {
      baseStyles["--app-shell-footer-offset"] = baseSize;
    }
  }
  if (isResponsiveSize(footerHeight)) {
    if (typeof footerHeight.base !== "undefined") {
      baseStyles["--app-shell-footer-height"] = (0, import_core8.rem)(footerHeight.base);
      if (shouldOffset) {
        baseStyles["--app-shell-footer-offset"] = (0, import_core8.rem)(footerHeight.base);
      }
    }
    (0, import_core8.keys)(footerHeight).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-footer-height"] = (0, import_core8.rem)(
          footerHeight[key]
        );
        if (shouldOffset) {
          minMediaStyles[key]["--app-shell-footer-offset"] = (0, import_core8.rem)(
            footerHeight[key]
          );
        }
      }
    });
  }
  if (footer == null ? void 0 : footer.collapsed) {
    baseStyles["--app-shell-footer-transform"] = collapsedFooterTransform;
    baseStyles["--app-shell-footer-offset"] = "0px !important";
  }
}

// src/AppShellMediaStyles/assign-header-variables/assign-header-variables.ts
var import_core9 = require("@raikou/core");
function assignHeaderVariables({
  baseStyles,
  minMediaStyles,
  header
}) {
  var _a;
  const headerHeight = header == null ? void 0 : header.height;
  const collapsedHeaderTransform = "translateY(calc(var(--app-shell-header-height) * -1))";
  const shouldOffset = (_a = header == null ? void 0 : header.offset) != null ? _a : true;
  if (isPrimitiveSize(headerHeight)) {
    const baseSize = (0, import_core9.rem)(getBaseSize(headerHeight));
    baseStyles["--app-shell-header-height"] = baseSize;
    if (shouldOffset) {
      baseStyles["--app-shell-header-offset"] = baseSize;
    }
  }
  if (isResponsiveSize(headerHeight)) {
    if (typeof headerHeight.base !== "undefined") {
      baseStyles["--app-shell-header-height"] = (0, import_core9.rem)(headerHeight.base);
      if (shouldOffset) {
        baseStyles["--app-shell-header-offset"] = (0, import_core9.rem)(headerHeight.base);
      }
    }
    (0, import_core9.keys)(headerHeight).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-header-height"] = (0, import_core9.rem)(
          headerHeight[key]
        );
        if (shouldOffset) {
          minMediaStyles[key]["--app-shell-header-offset"] = (0, import_core9.rem)(
            headerHeight[key]
          );
        }
      }
    });
  }
  if (header == null ? void 0 : header.collapsed) {
    baseStyles["--app-shell-header-transform"] = collapsedHeaderTransform;
    baseStyles["--app-shell-header-offset"] = "0px !important";
  }
}

// src/AppShellMediaStyles/assign-navbar-variables/assign-navbar-variables.ts
var import_core10 = require("@raikou/core");
function assignNavbarVariables({
  baseStyles,
  minMediaStyles,
  maxMediaStyles,
  navbar,
  theme
}) {
  var _a, _b, _c;
  const navbarWidth = navbar == null ? void 0 : navbar.width;
  const collapsedNavbarTransform = "translateX(calc(var(--app-shell-navbar-width) * -1))";
  const collapsedNavbarTransformRtl = "translateX(var(--app-shell-navbar-width))";
  if ((navbar == null ? void 0 : navbar.breakpoint) && !((_a = navbar == null ? void 0 : navbar.collapsed) == null ? void 0 : _a.mobile)) {
    maxMediaStyles[navbar == null ? void 0 : navbar.breakpoint] = maxMediaStyles[navbar == null ? void 0 : navbar.breakpoint] || {};
    maxMediaStyles[navbar == null ? void 0 : navbar.breakpoint]["--app-shell-navbar-width"] = "100%";
    maxMediaStyles[navbar == null ? void 0 : navbar.breakpoint]["--app-shell-navbar-offset"] = "0px";
  }
  if (isPrimitiveSize(navbarWidth)) {
    const baseSize = (0, import_core10.rem)(getBaseSize(navbarWidth));
    baseStyles["--app-shell-navbar-width"] = baseSize;
    baseStyles["--app-shell-navbar-offset"] = baseSize;
  }
  if (isResponsiveSize(navbarWidth)) {
    if (typeof navbarWidth.base !== "undefined") {
      baseStyles["--app-shell-navbar-width"] = (0, import_core10.rem)(navbarWidth.base);
      baseStyles["--app-shell-navbar-offset"] = (0, import_core10.rem)(navbarWidth.base);
    }
    (0, import_core10.keys)(navbarWidth).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-navbar-width"] = (0, import_core10.rem)(
          navbarWidth[key]
        );
        minMediaStyles[key]["--app-shell-navbar-offset"] = (0, import_core10.rem)(
          navbarWidth[key]
        );
      }
    });
  }
  if ((_b = navbar == null ? void 0 : navbar.collapsed) == null ? void 0 : _b.desktop) {
    const breakpointValue = navbar.breakpoint;
    minMediaStyles[breakpointValue] = minMediaStyles[breakpointValue] || {};
    minMediaStyles[breakpointValue]["--app-shell-navbar-transform"] = collapsedNavbarTransform;
    minMediaStyles[breakpointValue]["--app-shell-navbar-transform-rtl"] = collapsedNavbarTransformRtl;
    minMediaStyles[breakpointValue]["--app-shell-navbar-offset"] = "0px !important";
  }
  if ((_c = navbar == null ? void 0 : navbar.collapsed) == null ? void 0 : _c.mobile) {
    const breakpointValue = (0, import_core10.getBreakpointValue)(navbar.breakpoint, theme) - 0.1;
    maxMediaStyles[breakpointValue] = maxMediaStyles[breakpointValue] || {};
    maxMediaStyles[breakpointValue]["--app-shell-navbar-width"] = "100%";
    maxMediaStyles[breakpointValue]["--app-shell-navbar-offset"] = "0px";
    maxMediaStyles[breakpointValue]["--app-shell-navbar-transform"] = collapsedNavbarTransform;
    maxMediaStyles[breakpointValue]["--app-shell-navbar-transform-rtl"] = collapsedNavbarTransformRtl;
  }
}

// src/AppShellMediaStyles/assign-padding-variables/assign-padding-variables.ts
var import_core12 = require("@raikou/core");

// src/AppShellMediaStyles/get-padding-value/get-padding-value.ts
var import_core11 = require("@raikou/core");
function getPaddingValue(padding) {
  return Number(padding) === 0 ? "0px" : (0, import_core11.getSpacing)(padding);
}

// src/AppShellMediaStyles/assign-padding-variables/assign-padding-variables.ts
function assignPaddingVariables({
  padding,
  baseStyles,
  minMediaStyles
}) {
  if (isPrimitiveSize(padding)) {
    baseStyles["--app-shell-padding"] = getPaddingValue(getBaseSize(padding));
  }
  if (isResponsiveSize(padding)) {
    if (padding.base) {
      baseStyles["--app-shell-padding"] = getPaddingValue(padding.base);
    }
    (0, import_core12.keys)(padding).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-padding"] = getPaddingValue(
          padding[key]
        );
      }
    });
  }
}

// src/AppShellMediaStyles/get-variables/get-variables.ts
function getVariables({
  navbar,
  header,
  footer,
  aside,
  padding,
  theme
}) {
  const minMediaStyles = {};
  const maxMediaStyles = {};
  const baseStyles = {};
  assignNavbarVariables({
    baseStyles,
    minMediaStyles,
    maxMediaStyles,
    navbar,
    theme
  });
  assignAsideVariables({
    baseStyles,
    minMediaStyles,
    maxMediaStyles,
    aside,
    theme
  });
  assignHeaderVariables({ baseStyles, minMediaStyles, header });
  assignFooterVariables({ baseStyles, minMediaStyles, footer });
  assignPaddingVariables({ baseStyles, minMediaStyles, padding });
  const minMedia = (0, import_core13.getSortedBreakpoints)((0, import_core13.keys)(minMediaStyles), theme).map(
    (breakpoint) => ({
      query: `(min-width: ${(0, import_core13.em)(breakpoint.px)})`,
      styles: minMediaStyles[breakpoint.value]
    })
  );
  const maxMedia = (0, import_core13.getSortedBreakpoints)((0, import_core13.keys)(maxMediaStyles), theme).map(
    (breakpoint) => ({
      query: `(max-width: ${(0, import_core13.em)(breakpoint.px)})`,
      styles: maxMediaStyles[breakpoint.value]
    })
  );
  const media = [...minMedia, ...maxMedia];
  return { baseStyles, media };
}

// src/AppShellMediaStyles/AppShellMediaStyles.tsx
function AppShellMediaStyles({
  navbar,
  header,
  aside,
  footer,
  padding
}) {
  const theme = (0, import_core14.getTheme)();
  const { media, baseStyles } = getVariables({
    navbar,
    header,
    footer,
    aside,
    padding,
    theme
  });
  return /* @__PURE__ */ import_react9.default.createElement(import_core14.InlineStyles, { media, styles: baseStyles, selector: ":root" });
}

// src/use-resizing/use-resizing.tsx
var import_react10 = require("react");
var import_hooks = require("@raikou/hooks");
function useResizing({
  transitionDuration,
  disabled
}) {
  const [resizing, setResizing] = (0, import_react10.useState)(false);
  const resizingTimeout = (0, import_react10.useRef)();
  const disabledTimeout = (0, import_react10.useRef)();
  (0, import_hooks.useWindowEvent)("resize", () => {
    setResizing(true);
    clearTimeout(resizingTimeout.current);
    resizingTimeout.current = window.setTimeout(() => setResizing(false), 200);
  });
  (0, import_hooks.useIsomorphicEffect)(() => {
    setResizing(true);
    clearTimeout(disabledTimeout.current);
    disabledTimeout.current = window.setTimeout(
      () => setResizing(false),
      transitionDuration || 0
    );
  }, [disabled, transitionDuration]);
  return resizing;
}

// src/AppShell.tsx
var defaultProps7 = {
  withBorder: true,
  padding: 0,
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  zIndex: (0, import_core15.getDefaultZIndex)("app")
};
var varsResolver = (0, import_core15.createVarsResolver)(
  (_, { transitionDuration, transitionTimingFunction }) => ({
    root: {
      "--app-shell-transition-duration": `${transitionDuration}ms`,
      "--app-shell-transition-timing-function": transitionTimingFunction
    }
  })
);
var AppShell = (0, import_core15.factory)((_props, ref) => {
  const props = (0, import_core15.useProps)("AppShell", defaultProps7, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    navbar,
    withBorder,
    padding,
    transitionDuration,
    transitionTimingFunction,
    header,
    zIndex,
    layout,
    disabled,
    aside,
    footer
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "navbar",
    "withBorder",
    "padding",
    "transitionDuration",
    "transitionTimingFunction",
    "header",
    "zIndex",
    "layout",
    "disabled",
    "aside",
    "footer"
  ]);
  const getStyles = (0, import_core15.useStyles)({
    name: "AppShell",
    classes: {
      root: "appshell-root",
      navbar: "appshell-navbar",
      aside: "appshell-aside",
      main: "appshell-main",
      header: "appshell-header",
      footer: "appshell-footer",
      section: "appshell-section"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const resizing = useResizing({ disabled, transitionDuration });
  return /* @__PURE__ */ import_react11.default.createElement(AppShellProvider, { value: { getStyles, withBorder, zIndex, disabled } }, /* @__PURE__ */ import_react11.default.createElement(
    AppShellMediaStyles,
    {
      navbar,
      header,
      aside,
      footer,
      padding
    }
  ), /* @__PURE__ */ import_react11.default.createElement(
    import_core15.Box,
    __spreadValues(__spreadProps(__spreadValues({
      ref
    }, getStyles("root")), {
      mod: { resizing, layout, disabled }
    }), others)
  ));
});
AppShell.displayName = "@raikou/core/AppShell";
AppShell.Navbar = AppShellNavbar;
AppShell.Header = AppShellHeader;
AppShell.Main = AppShellMain;
AppShell.Aside = AppShellAside;
AppShell.Footer = AppShellFooter;
AppShell.Section = AppShellSection;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppShell,
  AppShellAside,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  AppShellSection
});
