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

// src/AppShell.tsx
import React10 from "react";
import {
  Box as Box7,
  factory as factory6,
  useProps as useProps7,
  useStyles,
  createVarsResolver,
  getDefaultZIndex
} from "@raikou/core";

// src/AppShellNavbar/AppShellNavbar.tsx
import React3 from "react";
import {
  Box,
  factory,
  useProps
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

// src/AppShell.context.ts
var [AppShellProvider, useAppShellContext] = createSafeContext("AppShell was not found in tree");

// src/AppShellNavbar/AppShellNavbar.tsx
var defaultProps = {};
var AppShellNavbar = factory((_props, ref) => {
  const props = useProps("AppShellNavbar", defaultProps, _props);
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
  return /* @__PURE__ */ React3.createElement(
    Box,
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
import React4 from "react";
import {
  Box as Box2,
  factory as factory2,
  useProps as useProps2
} from "@raikou/core";
var defaultProps2 = {};
var AppShellHeader = factory2((_props, ref) => {
  var _b;
  const props = useProps2("AppShellHeader", defaultProps2, _props);
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
  return /* @__PURE__ */ React4.createElement(
    Box2,
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
import React5 from "react";
import {
  Box as Box3,
  factory as factory3,
  useProps as useProps3
} from "@raikou/core";
var defaultProps3 = {};
var AppShellFooter = factory3((_props, ref) => {
  var _b;
  const props = useProps3("AppShellFooter", defaultProps3, _props);
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
  return /* @__PURE__ */ React5.createElement(
    Box3,
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
import React6 from "react";
import {
  Box as Box4,
  factory as factory4,
  useProps as useProps4
} from "@raikou/core";
var defaultProps4 = {};
var AppShellAside = factory4((_props, ref) => {
  const props = useProps4("AppShellAside", defaultProps4, _props);
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
  return /* @__PURE__ */ React6.createElement(
    Box4,
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
import React7 from "react";
import {
  Box as Box5,
  factory as factory5,
  useProps as useProps5
} from "@raikou/core";
var defaultProps5 = {};
var AppShellMain = factory5((_props, ref) => {
  const props = useProps5("AppShellMain", defaultProps5, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars"]);
  const ctx = useAppShellContext();
  return /* @__PURE__ */ React7.createElement(
    Box5,
    __spreadValues(__spreadValues({
      component: "main",
      ref
    }, ctx.getStyles("main", { className, style, classNames, styles })), others)
  );
});
AppShellMain.displayName = "@raikou/core/AppShellMain";

// src/AppShellSection/AppShellSection.tsx
import React8 from "react";
import {
  Box as Box6,
  polymorphicFactory,
  useProps as useProps6
} from "@raikou/core";
var defaultProps6 = {};
var AppShellSection = polymorphicFactory(
  (_props, ref) => {
    const props = useProps6("AppShellSection", defaultProps6, _props);
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
    return /* @__PURE__ */ React8.createElement(
      Box6,
      __spreadValues(__spreadValues({
        ref,
        mod: { grow }
      }, ctx.getStyles("section", { className, style, classNames, styles })), others)
    );
  }
);
AppShellSection.displayName = "@raikou/core/AppShellSection";

// src/AppShellMediaStyles/AppShellMediaStyles.tsx
import React9 from "react";
import { InlineStyles, useRaikouTheme } from "@raikou/core";

// src/AppShellMediaStyles/get-variables/get-variables.ts
import { em, keys as keys6, getSortedBreakpoints } from "@raikou/core";

// src/AppShellMediaStyles/assign-aside-variables/assign-aside-variables.ts
import { keys, rem, getBreakpointValue } from "@raikou/core";

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
    const baseSize = rem(getBaseSize(asideWidth));
    baseStyles["--app-shell-aside-width"] = baseSize;
    baseStyles["--app-shell-aside-offset"] = baseSize;
  }
  if (isResponsiveSize(asideWidth)) {
    if (typeof asideWidth.base !== "undefined") {
      baseStyles["--app-shell-aside-width"] = rem(asideWidth.base);
      baseStyles["--app-shell-aside-offset"] = rem(asideWidth.base);
    }
    keys(asideWidth).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-aside-width"] = rem(asideWidth[key]);
        minMediaStyles[key]["--app-shell-aside-offset"] = rem(asideWidth[key]);
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
    const breakpointValue = getBreakpointValue(aside.breakpoint, theme) - 0.1;
    maxMediaStyles[breakpointValue] = maxMediaStyles[breakpointValue] || {};
    maxMediaStyles[breakpointValue]["--app-shell-aside-width"] = "100%";
    maxMediaStyles[breakpointValue]["--app-shell-aside-offset"] = "0px";
    maxMediaStyles[breakpointValue]["--app-shell-aside-transform"] = collapsedAsideTransform;
    maxMediaStyles[breakpointValue]["--app-shell-aside-transform-rtl"] = collapsedAsideTransformRtl;
  }
}

// src/AppShellMediaStyles/assign-footer-variables/assign-footer-variables.ts
import { keys as keys2, rem as rem2 } from "@raikou/core";
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
    const baseSize = rem2(getBaseSize(footerHeight));
    baseStyles["--app-shell-footer-height"] = baseSize;
    if (shouldOffset) {
      baseStyles["--app-shell-footer-offset"] = baseSize;
    }
  }
  if (isResponsiveSize(footerHeight)) {
    if (typeof footerHeight.base !== "undefined") {
      baseStyles["--app-shell-footer-height"] = rem2(footerHeight.base);
      if (shouldOffset) {
        baseStyles["--app-shell-footer-offset"] = rem2(footerHeight.base);
      }
    }
    keys2(footerHeight).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-footer-height"] = rem2(
          footerHeight[key]
        );
        if (shouldOffset) {
          minMediaStyles[key]["--app-shell-footer-offset"] = rem2(
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
import { keys as keys3, rem as rem3 } from "@raikou/core";
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
    const baseSize = rem3(getBaseSize(headerHeight));
    baseStyles["--app-shell-header-height"] = baseSize;
    if (shouldOffset) {
      baseStyles["--app-shell-header-offset"] = baseSize;
    }
  }
  if (isResponsiveSize(headerHeight)) {
    if (typeof headerHeight.base !== "undefined") {
      baseStyles["--app-shell-header-height"] = rem3(headerHeight.base);
      if (shouldOffset) {
        baseStyles["--app-shell-header-offset"] = rem3(headerHeight.base);
      }
    }
    keys3(headerHeight).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-header-height"] = rem3(
          headerHeight[key]
        );
        if (shouldOffset) {
          minMediaStyles[key]["--app-shell-header-offset"] = rem3(
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
import { keys as keys4, rem as rem4, getBreakpointValue as getBreakpointValue2 } from "@raikou/core";
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
    const baseSize = rem4(getBaseSize(navbarWidth));
    baseStyles["--app-shell-navbar-width"] = baseSize;
    baseStyles["--app-shell-navbar-offset"] = baseSize;
  }
  if (isResponsiveSize(navbarWidth)) {
    if (typeof navbarWidth.base !== "undefined") {
      baseStyles["--app-shell-navbar-width"] = rem4(navbarWidth.base);
      baseStyles["--app-shell-navbar-offset"] = rem4(navbarWidth.base);
    }
    keys4(navbarWidth).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-navbar-width"] = rem4(
          navbarWidth[key]
        );
        minMediaStyles[key]["--app-shell-navbar-offset"] = rem4(
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
    const breakpointValue = getBreakpointValue2(navbar.breakpoint, theme) - 0.1;
    maxMediaStyles[breakpointValue] = maxMediaStyles[breakpointValue] || {};
    maxMediaStyles[breakpointValue]["--app-shell-navbar-width"] = "100%";
    maxMediaStyles[breakpointValue]["--app-shell-navbar-offset"] = "0px";
    maxMediaStyles[breakpointValue]["--app-shell-navbar-transform"] = collapsedNavbarTransform;
    maxMediaStyles[breakpointValue]["--app-shell-navbar-transform-rtl"] = collapsedNavbarTransformRtl;
  }
}

// src/AppShellMediaStyles/assign-padding-variables/assign-padding-variables.ts
import { keys as keys5 } from "@raikou/core";

// src/AppShellMediaStyles/get-padding-value/get-padding-value.ts
import { getSpacing } from "@raikou/core";
function getPaddingValue(padding) {
  return Number(padding) === 0 ? "0px" : getSpacing(padding);
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
    keys5(padding).forEach((key) => {
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
  const minMedia = getSortedBreakpoints(keys6(minMediaStyles), theme).map(
    (breakpoint) => ({
      query: `(min-width: ${em(breakpoint.px)})`,
      styles: minMediaStyles[breakpoint.value]
    })
  );
  const maxMedia = getSortedBreakpoints(keys6(maxMediaStyles), theme).map(
    (breakpoint) => ({
      query: `(max-width: ${em(breakpoint.px)})`,
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
  const theme = useRaikouTheme();
  const { media, baseStyles } = getVariables({
    navbar,
    header,
    footer,
    aside,
    padding,
    theme
  });
  return /* @__PURE__ */ React9.createElement(InlineStyles, { media, styles: baseStyles, selector: ":root" });
}

// src/use-resizing/use-resizing.tsx
import { useState, useRef } from "react";
import { useWindowEvent, useIsomorphicEffect } from "@raikou/hooks";
function useResizing({
  transitionDuration,
  disabled
}) {
  const [resizing, setResizing] = useState(false);
  const resizingTimeout = useRef();
  const disabledTimeout = useRef();
  useWindowEvent("resize", () => {
    setResizing(true);
    clearTimeout(resizingTimeout.current);
    resizingTimeout.current = window.setTimeout(() => setResizing(false), 200);
  });
  useIsomorphicEffect(() => {
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
  zIndex: getDefaultZIndex("app")
};
var varsResolver = createVarsResolver(
  (_, { transitionDuration, transitionTimingFunction }) => ({
    root: {
      "--app-shell-transition-duration": `${transitionDuration}ms`,
      "--app-shell-transition-timing-function": transitionTimingFunction
    }
  })
);
var AppShell = factory6((_props, ref) => {
  const props = useProps7("AppShell", defaultProps7, _props);
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
  const getStyles = useStyles({
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
  return /* @__PURE__ */ React10.createElement(AppShellProvider, { value: { getStyles, withBorder, zIndex, disabled } }, /* @__PURE__ */ React10.createElement(
    AppShellMediaStyles,
    {
      navbar,
      header,
      aside,
      footer,
      padding
    }
  ), /* @__PURE__ */ React10.createElement(
    Box7,
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
export {
  AppShell,
  AppShellAside,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  AppShellSection
};
