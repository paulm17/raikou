"use client";
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

// src/ContextMenuDivider.tsx
import React from "react";
import { Box } from "@raikou/core";
import clsx from "clsx";

// css-module:./ContextMenuDivider.module.css#css-module
var ContextMenuDivider_module_default = { "root": "m-8e23fdc4" };

// src/ContextMenuDivider.tsx
function ContextMenuDivider({
  className,
  style
}) {
  return /* @__PURE__ */ React.createElement(Box, { className: clsx(ContextMenuDivider_module_default["root"], className), style });
}

// src/ContextMenuItem.tsx
import { Box as Box4, parseThemeColor, rgba } from "@raikou/core";

// ../components/UnstyledButton/src/UnstyledButton.tsx
import React2 from "react";
import {
  Box as Box2,
  useProps,
  useStyles,
  polymorphicFactory
} from "@raikou/core";

// css-module:./UnstyledButton.module.css#css-module
var UnstyledButton_module_default = { "root": "m-87cf2631" };

// ../components/UnstyledButton/src/UnstyledButton.tsx
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
    return /* @__PURE__ */ React2.createElement(
      Box2,
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

// src/ContextMenuItem.tsx
import { useTimeout } from "@raikou/hooks";
import clsx3 from "clsx";
import React9, {
  useContext as useContext3,
  useRef as useRef2,
  useState as useState3
} from "react";

// src/ContextMenu.tsx
import React8, { useContext as useContext2 } from "react";
import { px, useDirection } from "@raikou/core";

// ../components/Paper/src/Paper.tsx
import React3 from "react";
import {
  Box as Box3,
  polymorphicFactory as polymorphicFactory2,
  useProps as useProps2,
  useStyles as useStyles2,
  getRadius,
  getShadow,
  createVarsResolver
} from "@raikou/core";

// css-module:./Paper.module.css#css-module
var Paper_module_default = { "root": "m-1b7284a3" };

// ../components/Paper/src/Paper.tsx
var defaultProps2 = {};
var varsResolver = createVarsResolver(
  (_, { radius, shadow }) => ({
    root: {
      "--paper-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--paper-shadow": getShadow(shadow)
    }
  })
);
var Paper = polymorphicFactory2((_props, ref) => {
  const props = useProps2("Paper", defaultProps2, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    withBorder,
    vars,
    radius,
    shadow,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "withBorder",
    "vars",
    "radius",
    "shadow",
    "variant"
  ]);
  const getStyles = useStyles2({
    name: "Paper",
    props,
    classes: Paper_module_default,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React3.createElement(
    Box3,
    __spreadValues(__spreadProps(__spreadValues({
      ref,
      mod: { "data-with-border": withBorder }
    }, getStyles("root")), {
      variant
    }), others)
  );
});
Paper.displayName = "@raikou/core/Paper";
Paper.classes = Paper_module_default;

// src/ContextMenu.tsx
import { useResizeObserver } from "@raikou/hooks";
import clsx2 from "clsx";

// src/ContextMenuProvider.tsx
import React7, { createContext, useContext, useState as useState2 } from "react";

// src/ContextMenuPortal.tsx
import React6 from "react";

// ../components/Portal/src/Portal.tsx
import React4, { useRef, useState, forwardRef } from "react";
import { createPortal } from "react-dom";
import { useIsomorphicEffect, assignRef } from "@raikou/hooks";
import { useProps as useProps3 } from "@raikou/core";
function createPortalNode(props) {
  const node = document.createElement("div");
  node.setAttribute("data-portal", "true");
  typeof props.className === "string" && node.classList.add(...props.className.split(" "));
  typeof props.style === "object" && Object.assign(node.style, props.style);
  typeof props.id === "string" && node.setAttribute("id", props.id);
  return node;
}
var defaultProps3 = {};
var Portal = forwardRef((props, ref) => {
  const _a = useProps3(
    "Portal",
    defaultProps3,
    props
  ), { children, target } = _a, others = __objRest(_a, ["children", "target"]);
  const [mounted, setMounted] = useState(false);
  const nodeRef = useRef(null);
  useIsomorphicEffect(() => {
    setMounted(true);
    nodeRef.current = !target ? createPortalNode(others) : typeof target === "string" ? document.querySelector(target) : target;
    assignRef(ref, nodeRef.current);
    if (!target && nodeRef.current) {
      document.body.appendChild(nodeRef.current);
    }
    return () => {
      if (!target && nodeRef.current) {
        document.body.removeChild(nodeRef.current);
      }
    };
  }, [target]);
  if (!mounted || !nodeRef.current) {
    return null;
  }
  return createPortal(/* @__PURE__ */ React4.createElement(React4.Fragment, null, children), nodeRef.current);
});
Portal.displayName = "@raikou/core/Portal";

// src/ContextMenuPortal.tsx
import { useHotkeys, useWindowEvent } from "@raikou/hooks";

// src/ContextMenuOverlay.tsx
import React5 from "react";

// css-module:./ContextMenuOverlay.module.css#css-module
var ContextMenuOverlay_module_default = { "root": "m-e74cf6ed" };

// src/ContextMenuOverlay.tsx
function ContextMenuOverlay({
  zIndex,
  children,
  onHide
}) {
  const handleHide = (e) => {
    e.preventDefault();
    onHide();
  };
  return /* @__PURE__ */ React5.createElement(
    "div",
    {
      className: ContextMenuOverlay_module_default["root"],
      style: { zIndex },
      onClick: handleHide,
      onContextMenu: handleHide
    },
    children
  );
}

// src/ContextMenuPortal.tsx
function ContextMenuPortal(_a) {
  var _b = _a, {
    onHide,
    zIndex
  } = _b, otherProps = __objRest(_b, [
    "onHide",
    "zIndex"
  ]);
  useWindowEvent("resize", onHide);
  useWindowEvent("scroll", onHide);
  useHotkeys([["Escape", onHide]]);
  return /* @__PURE__ */ React6.createElement(Portal, null, /* @__PURE__ */ React6.createElement(ContextMenuOverlay, { zIndex, onHide }, /* @__PURE__ */ React6.createElement(ContextMenu, __spreadProps(__spreadValues({}, otherProps), { onHide }))));
}

// src/ContextMenuProvider.tsx
var DEFAULT_SETTINGS = {
  shadow: "sm",
  borderRadius: "xs",
  submenuDelay: 500
};
var ContextMenuSettingsCtx = createContext(DEFAULT_SETTINGS);
var ContextMenuCtx = createContext({
  showContextMenu: () => () => void 0,
  hideContextMenu: () => void 0,
  isContextMenuVisible: false
});
function ContextMenuProvider({
  zIndex = 9999,
  shadow = DEFAULT_SETTINGS.shadow,
  borderRadius = DEFAULT_SETTINGS.borderRadius,
  submenuDelay = DEFAULT_SETTINGS.submenuDelay,
  children
}) {
  const [data, setData] = useState2(null);
  const hideContextMenu = () => {
    setData(null);
  };
  const showContextMenu = (content, options) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setData({
      x: e.clientX,
      y: e.clientY,
      content,
      zIndex: (options == null ? void 0 : options.zIndex) || zIndex,
      className: options == null ? void 0 : options.className,
      style: options == null ? void 0 : options.style,
      classNames: options == null ? void 0 : options.classNames,
      styles: options == null ? void 0 : options.styles
    });
  };
  return /* @__PURE__ */ React7.createElement(
    ContextMenuSettingsCtx.Provider,
    {
      value: { shadow, borderRadius, submenuDelay }
    },
    /* @__PURE__ */ React7.createElement(
      ContextMenuCtx.Provider,
      {
        value: {
          showContextMenu,
          hideContextMenu,
          isContextMenuVisible: !!data
        }
      },
      children,
      data && /* @__PURE__ */ React7.createElement(ContextMenuPortal, __spreadValues({ onHide: hideContextMenu }, data))
    )
  );
}
function useContextMenu() {
  return useContext(ContextMenuCtx);
}

// src/utils.ts
function humanize(value) {
  const str = value.replace(/([a-z\d])([A-Z]+)/g, "$1 $2").replace(/\W|_/g, " ").trim().toLowerCase();
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

// css-module:./ContextMenu.module.css#css-module
var ContextMenu_module_default = { "root": "m-3f3d33c1" };

// src/ContextMenu.tsx
function ContextMenu({
  x,
  y,
  content,
  zIndex,
  onHide,
  className,
  style,
  classNames,
  styles
}) {
  var _a;
  const { shadow, borderRadius } = useContext2(ContextMenuSettingsCtx);
  const [paperRef] = useResizeObserver();
  const { width, height } = ((_a = paperRef.current) == null ? void 0 : _a.getBoundingClientRect()) || {
    width: 0,
    height: 0
  };
  let windowWidth = 0;
  let windowHeight = 0;
  if (typeof window !== "undefined")
    ({ innerWidth: windowWidth, innerHeight: windowHeight } = window);
  const { dir } = useDirection();
  return /* @__PURE__ */ React8.createElement(
    Paper,
    {
      ref: paperRef,
      shadow,
      radius: borderRadius,
      className: clsx2(ContextMenu_module_default["root"], className, classNames == null ? void 0 : classNames.root),
      style: [
        ({ spacing: { md } }) => {
          const mdSpacing = px(md);
          return {
            zIndex,
            top: y + height + mdSpacing > windowHeight ? windowHeight - height - mdSpacing : y,
            left: dir === "ltr" ? x + width + mdSpacing > windowWidth ? windowWidth - width - mdSpacing : x : windowWidth - mdSpacing - (x - width - mdSpacing < 0 ? width + mdSpacing : x)
          };
        },
        style,
        styles == null ? void 0 : styles.root
      ]
    },
    Array.isArray(content) ? content.map(
      (_b) => {
        var _c = _b, {
          key,
          hidden,
          className: className2,
          style: style2,
          onClick,
          items,
          title
        } = _c, otherOptions = __objRest(_c, [
          "key",
          "hidden",
          "className",
          "style",
          "onClick",
          "items",
          "title"
        ]);
        return hidden ? null : onClick || items ? /* @__PURE__ */ React8.createElement(
          ContextMenuItem,
          __spreadValues({
            key,
            className: clsx2(classNames == null ? void 0 : classNames.item, className2),
            style: [styles == null ? void 0 : styles.item, style2],
            title: title != null ? title : humanize(key),
            onClick,
            onHide,
            items
          }, otherOptions)
        ) : /* @__PURE__ */ React8.createElement(
          ContextMenuDivider,
          {
            key,
            className: clsx2(classNames == null ? void 0 : classNames.divider, className2),
            style: [styles == null ? void 0 : styles.divider, style2]
          }
        );
      }
    ) : content(onHide)
  );
}

// css-module:./ContextMenuItem.module.css#css-module
var ContextMenuItem_module_default = { "item-button": "m-fe87f320", "button-title": "m-57a2c689" };

// src/ContextMenuItem.tsx
function ContextMenuItem({
  className,
  style,
  icon,
  title,
  color,
  disabled,
  onClick,
  onHide,
  items
}) {
  const ref = useRef2(null);
  const { submenuDelay } = useContext3(ContextMenuSettingsCtx);
  const [submenuPosition, setSubmenuPosition] = useState3(null);
  const handleClick = onClick ? (e) => {
    onHide();
    onClick(e);
  } : void 0;
  const { start: startShowingSubmenu, clear: stopShowingSubmenu } = useTimeout(
    () => {
      const { top: y, right: x } = ref.current.getBoundingClientRect();
      setSubmenuPosition({ x, y });
    },
    submenuDelay
  );
  const { start: startHidingSubmenu, clear: stopHidingSubmenu } = useTimeout(
    () => {
      setSubmenuPosition(null);
    },
    submenuDelay
  );
  const showSubmenu = () => {
    stopHidingSubmenu();
    startShowingSubmenu();
  };
  const hideSubmenu = () => {
    stopShowingSubmenu();
    startHidingSubmenu();
  };
  const hasItemsAndIsNotDisabled = items && !disabled;
  return /* @__PURE__ */ React9.createElement(
    "div",
    {
      onMouseEnter: hasItemsAndIsNotDisabled ? showSubmenu : void 0,
      onMouseLeave: hasItemsAndIsNotDisabled ? hideSubmenu : void 0
    },
    /* @__PURE__ */ React9.createElement(
      UnstyledButton,
      {
        ref,
        style: [
          (theme) => {
            const parsedColor = color ? parseThemeColor({ color, theme }).value : void 0;
            return {
              "--raikou-contextmenu-item-button-color": parsedColor ? parsedColor : "var(--raikou-color-text)",
              "--raikou-contextmenu-item-button-hover-bg-color-light": parsedColor ? rgba(parsedColor, 0.08) : rgba("#ced4da", 0.25),
              "--raikou-contextmenu-item-button-hover-bg-color-dark": parsedColor ? rgba(parsedColor, 0.15) : rgba("#5c5f66", 0.25),
              "--raikou-contextmenu-item-button-pressed-bg-color-light": parsedColor ? rgba(parsedColor, 0.2) : rgba("#ced4da", 0.5),
              "--raikou-contextmenu-item-button-pressed-bg-color-dark": parsedColor ? rgba(parsedColor, 0.3) : rgba("#5c5f66", 0.5)
            };
          },
          style
        ],
        className: clsx3(ContextMenuItem_module_default["item-button"], className),
        disabled,
        onClick: handleClick
      },
      icon && /* @__PURE__ */ React9.createElement(Box4, { fz: 0, mr: "xs", mt: -2 }, icon),
      /* @__PURE__ */ React9.createElement("div", { className: ContextMenuItem_module_default["button-title"] }, title),
      items && /* @__PURE__ */ React9.createElement(Box4, { fz: 10, mt: -2, ml: "xs" }, "\u25B6")
    ),
    submenuPosition && /* @__PURE__ */ React9.createElement(
      ContextMenu,
      __spreadValues({
        content: items,
        onHide
      }, submenuPosition)
    )
  );
}
export {
  ContextMenuCtx,
  ContextMenuDivider,
  ContextMenuItem,
  ContextMenuPortal,
  ContextMenuProvider,
  ContextMenuSettingsCtx,
  humanize,
  useContextMenu
};
//# sourceMappingURL=index.mjs.map