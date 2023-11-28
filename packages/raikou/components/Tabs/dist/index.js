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
  Tabs: () => Tabs,
  TabsList: () => TabsList,
  TabsPanel: () => TabsPanel,
  TabsTab: () => TabsTab
});
module.exports = __toCommonJS(src_exports);

// src/Tabs.tsx
var import_react9 = __toESM(require("react"));
var import_hooks = require("@raikou/hooks");
var import_core5 = require("@raikou/core");

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

// ../_utils/use-hovered/use-hovered.ts
var import_react3 = require("react");

// ../_utils/create-use-external-events/create-use-external-events.ts
var import_react4 = require("react");

// src/Tabs.context.ts
var [TabsProvider, useTabsContext] = createSafeContext(
  "Tabs component was not found in the tree"
);

// src/TabsList/TabsList.tsx
var import_react5 = __toESM(require("react"));
var import_core = require("@raikou/core");
var defaultProps = {};
var TabsList = (0, import_core.factory)((_props, ref) => {
  const props = (0, import_core.useProps)("TabsList", defaultProps, _props);
  const _a = props, {
    children,
    className,
    grow,
    justify,
    classNames,
    styles,
    style
  } = _a, others = __objRest(_a, [
    "children",
    "className",
    "grow",
    "justify",
    "classNames",
    "styles",
    "style"
  ]);
  const ctx = useTabsContext();
  return /* @__PURE__ */ import_react5.default.createElement(
    import_core.Box,
    __spreadProps(__spreadValues(__spreadValues({}, others), ctx.getStyles("list", {
      className,
      style,
      classNames,
      styles,
      props,
      variant: ctx.variant
    })), {
      ref,
      role: "tablist",
      variant: ctx.variant,
      mod: {
        grow,
        orientation: ctx.orientation,
        placement: ctx.orientation === "vertical" && ctx.placement,
        inverted: ctx.inverted
      },
      "aria-orientation": ctx.orientation,
      __vars: { "--tabs-justify": justify }
    }),
    children
  );
});
TabsList.displayName = "@raikou/core/TabsList";

// src/TabsPanel/TabsPanel.tsx
var import_react6 = __toESM(require("react"));
var import_core2 = require("@raikou/core");
var defaultProps2 = {};
var TabsPanel = (0, import_core2.factory)((_props, ref) => {
  const props = (0, import_core2.useProps)("TabsPanel", defaultProps2, _props);
  const _a = props, { children, className, value, classNames, styles, style } = _a, others = __objRest(_a, ["children", "className", "value", "classNames", "styles", "style"]);
  const ctx = useTabsContext();
  const active = ctx.value === value;
  const content = ctx.keepMounted ? children : active ? children : null;
  return /* @__PURE__ */ import_react6.default.createElement(
    import_core2.Box,
    __spreadProps(__spreadValues(__spreadValues({}, others), ctx.getStyles("panel", {
      className,
      classNames,
      styles,
      style: [style, !active ? { display: "none" } : void 0],
      props
    })), {
      ref,
      mod: { orientation: ctx.orientation },
      role: "tabpanel",
      id: ctx.getPanelId(value),
      "aria-labelledby": ctx.getTabId(value)
    }),
    content
  );
});
TabsPanel.displayName = "@raikou/core/TabsPanel";

// src/TabsTab/TabsTab.tsx
var import_react8 = __toESM(require("react"));
var import_core4 = require("@raikou/core");

// ../UnstyledButton/src/UnstyledButton.tsx
var import_react7 = __toESM(require("react"));
var import_core3 = require("@raikou/core");
var defaultProps3 = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = (0, import_core3.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core3.useProps)("UnstyledButton", defaultProps3, _props);
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
    const getStyles = (0, import_core3.useStyles)({
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
    return /* @__PURE__ */ import_react7.default.createElement(
      import_core3.Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { focusable: true })), {
        component,
        ref,
        type: component === "button" ? "button" : void 0
      }), others)
    );
  }
);
UnstyledButton.displayName = "@raikou/core/UnstyledButton";

// src/TabsTab/TabsTab.tsx
var defaultProps4 = {};
var TabsTab = (0, import_core4.factory)((_props, ref) => {
  const props = (0, import_core4.useProps)("TabsTab", defaultProps4, _props);
  const _a = props, {
    className,
    children,
    rightSection,
    leftSection,
    value,
    onClick,
    onKeyDown,
    disabled,
    color,
    style,
    classNames,
    styles,
    vars
  } = _a, others = __objRest(_a, [
    "className",
    "children",
    "rightSection",
    "leftSection",
    "value",
    "onClick",
    "onKeyDown",
    "disabled",
    "color",
    "style",
    "classNames",
    "styles",
    "vars"
  ]);
  const theme = (0, import_core4.useRaikouTheme)();
  const { dir } = (0, import_core4.useDirection)();
  const ctx = useTabsContext();
  const active = value === ctx.value;
  const activateTab = (event) => {
    ctx.onChange(
      ctx.allowTabDeactivation ? value === ctx.value ? null : value : value
    );
    onClick == null ? void 0 : onClick(event);
  };
  const stylesApiProps = { classNames, styles, props };
  return /* @__PURE__ */ import_react8.default.createElement(
    UnstyledButton,
    __spreadProps(__spreadValues(__spreadValues({}, others), ctx.getStyles("tab", __spreadValues({
      className,
      style,
      variant: ctx.variant
    }, stylesApiProps))), {
      disabled,
      unstyled: ctx.unstyled,
      variant: ctx.variant,
      mod: {
        active,
        disabled,
        orientation: ctx.orientation,
        inverted: ctx.inverted,
        placement: ctx.orientation === "vertical" && ctx.placement
      },
      ref,
      role: "tab",
      id: ctx.getTabId(value),
      "aria-selected": active,
      tabIndex: active || ctx.value === null ? 0 : -1,
      "aria-controls": ctx.getPanelId(value),
      onClick: activateTab,
      __vars: {
        "--tabs-color": color ? (0, import_core4.getThemeColor)(color, theme) : void 0
      },
      onKeyDown: (0, import_core4.createScopedKeydownHandler)({
        siblingSelector: '[role="tab"]',
        parentSelector: '[role="tablist"]',
        activateOnFocus: ctx.activateTabWithKeyboard,
        loop: ctx.loop,
        orientation: ctx.orientation || "horizontal",
        dir,
        onKeyDown
      })
    }),
    leftSection && /* @__PURE__ */ import_react8.default.createElement(
      "span",
      __spreadProps(__spreadValues({}, ctx.getStyles("tabSection", stylesApiProps)), {
        "data-position": "left"
      }),
      leftSection
    ),
    children && /* @__PURE__ */ import_react8.default.createElement("span", __spreadValues({}, ctx.getStyles("tabLabel", stylesApiProps)), children),
    rightSection && /* @__PURE__ */ import_react8.default.createElement(
      "span",
      __spreadProps(__spreadValues({}, ctx.getStyles("tabSection", stylesApiProps)), {
        "data-position": "right"
      }),
      rightSection
    )
  );
});
TabsTab.displayName = "@raikou/core/TabsTab";

// src/Tabs.tsx
var VALUE_ERROR = "Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value";
var defaultProps5 = {
  keepMounted: true,
  orientation: "horizontal",
  loop: true,
  activateTabWithKeyboard: true,
  allowTabDeactivation: false,
  unstyled: false,
  inverted: false,
  variant: "default",
  placement: "left"
};
var varsResolver = (0, import_core5.createVarsResolver)(
  (theme, { radius, color }) => ({
    root: {
      "--tabs-radius": (0, import_core5.getRadius)(radius),
      "--tabs-color": (0, import_core5.getThemeColor)(color, theme)
    }
  })
);
var Tabs = (0, import_core5.factory)((_props, ref) => {
  const props = (0, import_core5.useProps)("Tabs", defaultProps5, _props);
  const _a = props, {
    defaultValue,
    value,
    onChange,
    orientation,
    children,
    loop,
    id,
    activateTabWithKeyboard,
    allowTabDeactivation,
    variant,
    color,
    radius,
    inverted,
    placement,
    keepMounted,
    classNames,
    styles,
    unstyled,
    className,
    style,
    vars
  } = _a, others = __objRest(_a, [
    "defaultValue",
    "value",
    "onChange",
    "orientation",
    "children",
    "loop",
    "id",
    "activateTabWithKeyboard",
    "allowTabDeactivation",
    "variant",
    "color",
    "radius",
    "inverted",
    "placement",
    "keepMounted",
    "classNames",
    "styles",
    "unstyled",
    "className",
    "style",
    "vars"
  ]);
  const uid = (0, import_hooks.useId)(id);
  const [currentTab, setCurrentTab] = (0, import_hooks.useUncontrolled)({
    value,
    defaultValue,
    finalValue: null,
    onChange
  });
  const getStyles = (0, import_core5.useStyles)({
    name: "Tabs",
    props,
    classes: {
      root: "tabs-root",
      list: "tabs-list",
      panel: "tabs-panel",
      tab: "tabs-tab",
      tabSection: "tabs-tabSection",
      tabLabel: "tabs-tabLabel"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ import_react9.default.createElement(
    TabsProvider,
    {
      value: {
        placement,
        value: currentTab,
        orientation,
        id: uid,
        loop,
        activateTabWithKeyboard,
        getTabId: (0, import_core5.getSafeId)(`${uid}-tab`, VALUE_ERROR),
        getPanelId: (0, import_core5.getSafeId)(`${uid}-panel`, VALUE_ERROR),
        onChange: setCurrentTab,
        allowTabDeactivation,
        variant,
        color,
        radius,
        inverted,
        keepMounted,
        unstyled,
        getStyles
      }
    },
    /* @__PURE__ */ import_react9.default.createElement(
      import_core5.Box,
      __spreadValues(__spreadValues({
        ref,
        id: uid,
        variant,
        mod: {
          orientation,
          inverted: orientation === "horizontal" && inverted,
          placement: orientation === "vertical" && placement
        }
      }, getStyles("root")), others),
      children
    )
  );
});
Tabs.displayName = "@raikou/core/Tabs";
Tabs.Tab = TabsTab;
Tabs.Panel = TabsPanel;
Tabs.List = TabsList;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab
});
