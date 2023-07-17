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

// src/Tabs.tsx
import React7 from "react";
import { useId, useUncontrolled } from "@raikou/hooks";
import {
  Box as Box4,
  factory as factory4,
  useProps as useProps5,
  getSafeId,
  useStyles as useStyles2,
  getRadius,
  getThemeColor as getThemeColor2,
  createVarsResolver
} from "@raikou/core";

// ../utils/create-safe-context/create-safe-context.tsx
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

// ../utils/create-optional-context/create-optional-context.tsx
import React2, { createContext as createContext2, useContext as useContext2 } from "react";

// src/Tabs.context.ts
var [TabsProvider, useTabsContext] = createSafeContext(
  "Tabs component was not found in the tree"
);

// src/TabsList/TabsList.tsx
import React3 from "react";
import {
  Box,
  useProps,
  factory
} from "@raikou/core";
var defaultProps = {};
var TabsList = factory((_props, ref) => {
  const props = useProps("TabsList", defaultProps, _props);
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
  return /* @__PURE__ */ React3.createElement(
    Box,
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
import React4 from "react";
import {
  Box as Box2,
  useProps as useProps2,
  factory as factory2
} from "@raikou/core";
var defaultProps2 = {};
var TabsPanel = factory2((_props, ref) => {
  const props = useProps2("TabsPanel", defaultProps2, _props);
  const _a = props, { children, className, value, classNames, styles, style } = _a, others = __objRest(_a, ["children", "className", "value", "classNames", "styles", "style"]);
  const ctx = useTabsContext();
  const active = ctx.value === value;
  const content = ctx.keepMounted ? children : active ? children : null;
  return /* @__PURE__ */ React4.createElement(
    Box2,
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
import React6 from "react";
import {
  useProps as useProps4,
  factory as factory3,
  createScopedKeydownHandler,
  useDirection,
  getThemeColor,
  getTheme
} from "@raikou/core";

// ../UnstyledButton/src/UnstyledButton.tsx
import React5 from "react";
import {
  Box as Box3,
  useProps as useProps3,
  useStyles,
  polymorphicFactory
} from "@raikou/core";
var defaultProps3 = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = polymorphicFactory(
  (_props, ref) => {
    const props = useProps3("UnstyledButton", defaultProps3, _props);
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
      classes: {
        root: "unstyled-button-root"
      },
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ React5.createElement(
      Box3,
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
var TabsTab = factory3((_props, ref) => {
  const props = useProps4("TabsTab", defaultProps4, _props);
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
  const theme = getTheme();
  const { dir } = useDirection();
  const ctx = useTabsContext();
  const active = value === ctx.value;
  const activateTab = (event) => {
    ctx.onChange(
      ctx.allowTabDeactivation ? value === ctx.value ? null : value : value
    );
    onClick == null ? void 0 : onClick(event);
  };
  const stylesApiProps = { classNames, styles, props };
  return /* @__PURE__ */ React6.createElement(
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
        "--tabs-color": color ? getThemeColor(color, theme) : void 0
      },
      onKeyDown: createScopedKeydownHandler({
        siblingSelector: '[role="tab"]',
        parentSelector: '[role="tablist"]',
        activateOnFocus: ctx.activateTabWithKeyboard,
        loop: ctx.loop,
        orientation: ctx.orientation || "horizontal",
        dir,
        onKeyDown
      })
    }),
    leftSection && /* @__PURE__ */ React6.createElement(
      "span",
      __spreadProps(__spreadValues({}, ctx.getStyles("tabSection", stylesApiProps)), {
        "data-position": "left"
      }),
      leftSection
    ),
    children && /* @__PURE__ */ React6.createElement("span", __spreadValues({}, ctx.getStyles("tabLabel", stylesApiProps)), children),
    rightSection && /* @__PURE__ */ React6.createElement(
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
var varsResolver = createVarsResolver(
  (theme, { radius, color }) => ({
    root: {
      "--tabs-radius": getRadius(radius),
      "--tabs-color": getThemeColor2(color, theme)
    }
  })
);
var Tabs = factory4((_props, ref) => {
  const props = useProps5("Tabs", defaultProps5, _props);
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
  const uid = useId(id);
  const [currentTab, setCurrentTab] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange
  });
  const getStyles = useStyles2({
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
  return /* @__PURE__ */ React7.createElement(
    TabsProvider,
    {
      value: {
        placement,
        value: currentTab,
        orientation,
        id: uid,
        loop,
        activateTabWithKeyboard,
        getTabId: getSafeId(`${uid}-tab`, VALUE_ERROR),
        getPanelId: getSafeId(`${uid}-panel`, VALUE_ERROR),
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
    /* @__PURE__ */ React7.createElement(
      Box4,
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
export {
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab
};
