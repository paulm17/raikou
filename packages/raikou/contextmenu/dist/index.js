"use strict";
"use client";
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
  ContextMenuCtx: () => ContextMenuCtx,
  ContextMenuDivider: () => ContextMenuDivider,
  ContextMenuItem: () => ContextMenuItem,
  ContextMenuPortal: () => ContextMenuPortal,
  ContextMenuProvider: () => ContextMenuProvider,
  ContextMenuSettingsCtx: () => ContextMenuSettingsCtx,
  humanize: () => humanize,
  useContextMenu: () => useContextMenu
});
module.exports = __toCommonJS(src_exports);

// src/ContextMenuDivider.tsx
var import_react = __toESM(require("react"));
var import_core = require("@raikou/core");
var import_clsx = __toESM(require("clsx"));

// css-module:./ContextMenuDivider.module.css#css-module
var ContextMenuDivider_module_default = { "root": "m-8e23fdc4" };

// src/ContextMenuDivider.tsx
function ContextMenuDivider({
  className,
  style
}) {
  return /* @__PURE__ */ import_react.default.createElement(import_core.Box, { className: (0, import_clsx.default)(ContextMenuDivider_module_default["root"], className), style });
}

// src/ContextMenuItem.tsx
var import_core6 = require("@raikou/core");

// ../components/UnstyledButton/src/UnstyledButton.tsx
var import_react2 = __toESM(require("react"));
var import_core2 = require("@raikou/core");

// css-module:./UnstyledButton.module.css#css-module
var UnstyledButton_module_default = { "root": "m-87cf2631" };

// ../components/UnstyledButton/src/UnstyledButton.tsx
var defaultProps = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = (0, import_core2.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core2.useProps)("UnstyledButton", defaultProps, _props);
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
    const getStyles = (0, import_core2.useStyles)({
      name: __staticSelector,
      props,
      classes: UnstyledButton_module_default,
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ import_react2.default.createElement(
      import_core2.Box,
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
var import_hooks4 = require("@raikou/hooks");
var import_clsx3 = __toESM(require("clsx"));
var import_react9 = __toESM(require("react"));

// src/ContextMenu.tsx
var import_react8 = __toESM(require("react"));
var import_core5 = require("@raikou/core");

// ../components/Paper/src/Paper.tsx
var import_react3 = __toESM(require("react"));
var import_core3 = require("@raikou/core");

// css-module:./Paper.module.css#css-module
var Paper_module_default = { "root": "m-1b7284a3" };

// ../components/Paper/src/Paper.tsx
var defaultProps2 = {};
var varsResolver = (0, import_core3.createVarsResolver)(
  (_, { radius, shadow }) => ({
    root: {
      "--paper-radius": radius === void 0 ? void 0 : (0, import_core3.getRadius)(radius),
      "--paper-shadow": (0, import_core3.getShadow)(shadow)
    }
  })
);
var Paper = (0, import_core3.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core3.useProps)("Paper", defaultProps2, _props);
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
  const getStyles = (0, import_core3.useStyles)({
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
  return /* @__PURE__ */ import_react3.default.createElement(
    import_core3.Box,
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
var import_hooks3 = require("@raikou/hooks");
var import_clsx2 = __toESM(require("clsx"));

// src/ContextMenuProvider.tsx
var import_react7 = __toESM(require("react"));

// src/ContextMenuPortal.tsx
var import_react6 = __toESM(require("react"));

// ../components/Portal/src/Portal.tsx
var import_react4 = __toESM(require("react"));
var import_react_dom = require("react-dom");
var import_hooks = require("@raikou/hooks");
var import_core4 = require("@raikou/core");
function createPortalNode(props) {
  const node = document.createElement("div");
  node.setAttribute("data-portal", "true");
  typeof props.className === "string" && node.classList.add(...props.className.split(" "));
  typeof props.style === "object" && Object.assign(node.style, props.style);
  typeof props.id === "string" && node.setAttribute("id", props.id);
  return node;
}
var defaultProps3 = {};
var Portal = (0, import_react4.forwardRef)((props, ref) => {
  const _a = (0, import_core4.useProps)(
    "Portal",
    defaultProps3,
    props
  ), { children, target } = _a, others = __objRest(_a, ["children", "target"]);
  const [mounted, setMounted] = (0, import_react4.useState)(false);
  const nodeRef = (0, import_react4.useRef)(null);
  (0, import_hooks.useIsomorphicEffect)(() => {
    setMounted(true);
    nodeRef.current = !target ? createPortalNode(others) : typeof target === "string" ? document.querySelector(target) : target;
    (0, import_hooks.assignRef)(ref, nodeRef.current);
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
  return (0, import_react_dom.createPortal)(/* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, children), nodeRef.current);
});
Portal.displayName = "@raikou/core/Portal";

// src/ContextMenuPortal.tsx
var import_hooks2 = require("@raikou/hooks");

// src/ContextMenuOverlay.tsx
var import_react5 = __toESM(require("react"));

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
  return /* @__PURE__ */ import_react5.default.createElement(
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
  (0, import_hooks2.useWindowEvent)("resize", onHide);
  (0, import_hooks2.useWindowEvent)("scroll", onHide);
  (0, import_hooks2.useHotkeys)([["Escape", onHide]]);
  return /* @__PURE__ */ import_react6.default.createElement(Portal, null, /* @__PURE__ */ import_react6.default.createElement(ContextMenuOverlay, { zIndex, onHide }, /* @__PURE__ */ import_react6.default.createElement(ContextMenu, __spreadProps(__spreadValues({}, otherProps), { onHide }))));
}

// src/ContextMenuProvider.tsx
var DEFAULT_SETTINGS = {
  shadow: "sm",
  borderRadius: "xs",
  submenuDelay: 500
};
var ContextMenuSettingsCtx = (0, import_react7.createContext)(DEFAULT_SETTINGS);
var ContextMenuCtx = (0, import_react7.createContext)({
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
  const [data, setData] = (0, import_react7.useState)(null);
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
  return /* @__PURE__ */ import_react7.default.createElement(
    ContextMenuSettingsCtx.Provider,
    {
      value: { shadow, borderRadius, submenuDelay }
    },
    /* @__PURE__ */ import_react7.default.createElement(
      ContextMenuCtx.Provider,
      {
        value: {
          showContextMenu,
          hideContextMenu,
          isContextMenuVisible: !!data
        }
      },
      children,
      data && /* @__PURE__ */ import_react7.default.createElement(ContextMenuPortal, __spreadValues({ onHide: hideContextMenu }, data))
    )
  );
}
function useContextMenu() {
  return (0, import_react7.useContext)(ContextMenuCtx);
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
  const { shadow, borderRadius } = (0, import_react8.useContext)(ContextMenuSettingsCtx);
  const [paperRef] = (0, import_hooks3.useResizeObserver)();
  const { width, height } = ((_a = paperRef.current) == null ? void 0 : _a.getBoundingClientRect()) || {
    width: 0,
    height: 0
  };
  let windowWidth = 0;
  let windowHeight = 0;
  if (typeof window !== "undefined")
    ({ innerWidth: windowWidth, innerHeight: windowHeight } = window);
  const { dir } = (0, import_core5.useDirection)();
  return /* @__PURE__ */ import_react8.default.createElement(
    Paper,
    {
      ref: paperRef,
      shadow,
      radius: borderRadius,
      className: (0, import_clsx2.default)(ContextMenu_module_default["root"], className, classNames == null ? void 0 : classNames.root),
      style: [
        ({ spacing: { md } }) => {
          const mdSpacing = (0, import_core5.px)(md);
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
        return hidden ? null : onClick || items ? /* @__PURE__ */ import_react8.default.createElement(
          ContextMenuItem,
          __spreadValues({
            key,
            className: (0, import_clsx2.default)(classNames == null ? void 0 : classNames.item, className2),
            style: [styles == null ? void 0 : styles.item, style2],
            title: title != null ? title : humanize(key),
            onClick,
            onHide,
            items
          }, otherOptions)
        ) : /* @__PURE__ */ import_react8.default.createElement(
          ContextMenuDivider,
          {
            key,
            className: (0, import_clsx2.default)(classNames == null ? void 0 : classNames.divider, className2),
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
  const ref = (0, import_react9.useRef)(null);
  const { submenuDelay } = (0, import_react9.useContext)(ContextMenuSettingsCtx);
  const [submenuPosition, setSubmenuPosition] = (0, import_react9.useState)(null);
  const handleClick = onClick ? (e) => {
    onHide();
    onClick(e);
  } : void 0;
  const { start: startShowingSubmenu, clear: stopShowingSubmenu } = (0, import_hooks4.useTimeout)(
    () => {
      const { top: y, right: x } = ref.current.getBoundingClientRect();
      setSubmenuPosition({ x, y });
    },
    submenuDelay
  );
  const { start: startHidingSubmenu, clear: stopHidingSubmenu } = (0, import_hooks4.useTimeout)(
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
  return /* @__PURE__ */ import_react9.default.createElement(
    "div",
    {
      onMouseEnter: hasItemsAndIsNotDisabled ? showSubmenu : void 0,
      onMouseLeave: hasItemsAndIsNotDisabled ? hideSubmenu : void 0
    },
    /* @__PURE__ */ import_react9.default.createElement(
      UnstyledButton,
      {
        ref,
        style: [
          (theme) => {
            const parsedColor = color ? (0, import_core6.parseThemeColor)({ color, theme }).value : void 0;
            return {
              "--raikou-contextmenu-item-button-color": parsedColor ? parsedColor : "var(--raikou-color-text)",
              "--raikou-contextmenu-item-button-hover-bg-color-light": parsedColor ? (0, import_core6.rgba)(parsedColor, 0.08) : (0, import_core6.rgba)("#ced4da", 0.25),
              "--raikou-contextmenu-item-button-hover-bg-color-dark": parsedColor ? (0, import_core6.rgba)(parsedColor, 0.15) : (0, import_core6.rgba)("#5c5f66", 0.25),
              "--raikou-contextmenu-item-button-pressed-bg-color-light": parsedColor ? (0, import_core6.rgba)(parsedColor, 0.2) : (0, import_core6.rgba)("#ced4da", 0.5),
              "--raikou-contextmenu-item-button-pressed-bg-color-dark": parsedColor ? (0, import_core6.rgba)(parsedColor, 0.3) : (0, import_core6.rgba)("#5c5f66", 0.5)
            };
          },
          style
        ],
        className: (0, import_clsx3.default)(ContextMenuItem_module_default["item-button"], className),
        disabled,
        onClick: handleClick
      },
      icon && /* @__PURE__ */ import_react9.default.createElement(import_core6.Box, { fz: 0, mr: "xs", mt: -2 }, icon),
      /* @__PURE__ */ import_react9.default.createElement("div", { className: ContextMenuItem_module_default["button-title"] }, title),
      items && /* @__PURE__ */ import_react9.default.createElement(import_core6.Box, { fz: 10, mt: -2, ml: "xs" }, "\u25B6")
    ),
    submenuPosition && /* @__PURE__ */ import_react9.default.createElement(
      ContextMenu,
      __spreadValues({
        content: items,
        onHide
      }, submenuPosition)
    )
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ContextMenuCtx,
  ContextMenuDivider,
  ContextMenuItem,
  ContextMenuPortal,
  ContextMenuProvider,
  ContextMenuSettingsCtx,
  humanize,
  useContextMenu
});
//# sourceMappingURL=index.js.map