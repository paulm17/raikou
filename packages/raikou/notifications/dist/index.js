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
  Notifications: () => Notifications,
  cleanNotifications: () => cleanNotifications,
  cleanNotificationsQueue: () => cleanNotificationsQueue,
  createNotificationsStore: () => createNotificationsStore,
  hideNotification: () => hideNotification,
  notifications: () => notifications,
  notificationsStore: () => notificationsStore,
  showNotification: () => showNotification,
  updateNotification: () => updateNotification,
  updateNotificationsState: () => updateNotificationsState,
  useNotifications: () => useNotifications
});
module.exports = __toCommonJS(src_exports);

// src/notifications.store.ts
var import_hooks = require("@raikou/hooks");
var import_store = require("@raikou/store");
var createNotificationsStore = () => (0, import_store.createStore)({
  notifications: [],
  queue: [],
  limit: 5
});
var notificationsStore = createNotificationsStore();
var useNotifications = (store = notificationsStore) => (0, import_store.useStore)(store);
function updateNotificationsState(store, update) {
  const state = store.getState();
  const notifications2 = update([...state.notifications, ...state.queue]);
  store.setState({
    notifications: notifications2.slice(0, state.limit),
    queue: notifications2.slice(state.limit),
    limit: state.limit
  });
}
function showNotification(notification, store = notificationsStore) {
  const id = notification.id || (0, import_hooks.randomId)();
  updateNotificationsState(store, (notifications2) => {
    if (notification.id && notifications2.some((n) => n.id === notification.id)) {
      return notifications2;
    }
    return [...notifications2, __spreadProps(__spreadValues({}, notification), { id })];
  });
  return id;
}
function hideNotification(id, store = notificationsStore) {
  updateNotificationsState(
    store,
    (notifications2) => notifications2.filter((notification) => {
      var _a;
      if (notification.id === id) {
        (_a = notification.onClose) == null ? void 0 : _a.call(notification, notification);
        return false;
      }
      return true;
    })
  );
  return id;
}
function updateNotification(notification, store = notificationsStore) {
  updateNotificationsState(
    store,
    (notifications2) => notifications2.map((item) => {
      if (item.id === notification.id) {
        return __spreadValues(__spreadValues({}, item), notification);
      }
      return item;
    })
  );
  return notification.id;
}
function cleanNotifications(store = notificationsStore) {
  updateNotificationsState(store, () => []);
}
function cleanNotificationsQueue(store = notificationsStore) {
  updateNotificationsState(
    store,
    (notifications2) => notifications2.slice(0, store.getState().limit)
  );
}
var notifications = {
  show: showNotification,
  hide: hideNotification,
  update: updateNotification,
  clean: cleanNotifications,
  cleanQueue: cleanNotificationsQueue,
  updateState: updateNotificationsState
};

// src/Notifications.tsx
var import_react15 = __toESM(require("react"));
var import_react_transition_group = require("react-transition-group");
var import_hooks3 = require("@raikou/hooks");
var import_core12 = require("@raikou/core");

// ../components/Portal/src/Portal.tsx
var import_react = __toESM(require("react"));
var import_react_dom = require("react-dom");
var import_hooks2 = require("@raikou/hooks");
var import_core = require("@raikou/core");
var defaultProps = {};
var Portal = (0, import_react.forwardRef)((props, ref) => {
  const _a = (0, import_core.useProps)(
    "Portal",
    defaultProps,
    props
  ), { children, target, className } = _a, others = __objRest(_a, ["children", "target", "className"]);
  const [mounted, setMounted] = (0, import_react.useState)(false);
  const nodeRef = (0, import_react.useRef)(null);
  (0, import_hooks2.useIsomorphicEffect)(() => {
    setMounted(true);
    nodeRef.current = !target ? document.createElement("div") : typeof target === "string" ? document.querySelector(target) : target;
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
  return (0, import_react_dom.createPortal)(
    /* @__PURE__ */ import_react.default.createElement("div", __spreadValues({ className, ref }, others), children),
    nodeRef.current
  );
});
Portal.displayName = "@raikou/core/Portal";

// ../components/Portal/src/OptionalPortal.tsx
var import_react2 = __toESM(require("react"));
function OptionalPortal(_a) {
  var _b = _a, {
    withinPortal = true,
    children
  } = _b, others = __objRest(_b, [
    "withinPortal",
    "children"
  ]);
  if (withinPortal) {
    return /* @__PURE__ */ import_react2.default.createElement(Portal, __spreadValues({}, others), children);
  }
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, children);
}
OptionalPortal.displayName = "@raikou/core/OptionalPortal";

// src/NotificationContainer.tsx
var import_react14 = __toESM(require("react"));

// ../components/Notification/src/Notification.tsx
var import_react13 = __toESM(require("react"));
var import_core11 = require("@raikou/core");

// ../components/Loader/src/Loader.tsx
var import_react6 = __toESM(require("react"));
var import_core5 = require("@raikou/core");

// ../components/Loader/src/loaders/Bars.tsx
var import_react3 = __toESM(require("react"));

// ../../../node_modules/.pnpm/clsx@2.0.0/node_modules/clsx/dist/clsx.mjs
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

// ../components/Loader/src/loaders/Bars.tsx
var import_core2 = require("@raikou/core");
var Bars = (0, import_react3.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react3.default.createElement(
      import_core2.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("bars-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react3.default.createElement("span", { className: "bar" }),
      /* @__PURE__ */ import_react3.default.createElement("span", { className: "bar" }),
      /* @__PURE__ */ import_react3.default.createElement("span", { className: "bar" })
    );
  }
);

// ../components/Loader/src/loaders/Oval.tsx
var import_react4 = __toESM(require("react"));
var import_core3 = require("@raikou/core");
var Oval = (0, import_react4.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react4.default.createElement(
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

// ../components/Loader/src/loaders/Dots.tsx
var import_react5 = __toESM(require("react"));
var import_core4 = require("@raikou/core");
var Dots = (0, import_react5.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react5.default.createElement(
      import_core4.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("dots-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react5.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react5.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react5.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react5.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react5.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react5.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react5.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react5.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react5.default.createElement("span", { className: "dot" })
    );
  }
);

// ../components/Loader/src/Loader.tsx
var defaultLoaders = {
  bars: Bars,
  oval: Oval,
  dots: Dots
};
var defaultProps2 = {
  size: "md",
  loaders: defaultLoaders,
  type: "oval"
};
var varsResolver = (0, import_core5.createVarsResolver)(
  (theme, { size, color }) => ({
    root: {
      "--loader-size": (0, import_core5.getSize)(size, "loader-size"),
      "--loader-color": (0, import_core5.getThemeColor)(color, theme)
    }
  })
);
var Loader = (0, import_core5.factory)((_props, ref) => {
  const props = (0, import_core5.useProps)("Loader", defaultProps2, _props);
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

// ../components/Text/src/Text.tsx
var import_react7 = __toESM(require("react"));
var import_core6 = require("@raikou/core");
function getTextTruncate(truncate) {
  if (truncate === "start") {
    return "start";
  }
  if (truncate === "end" || truncate) {
    return "end";
  }
  return void 0;
}
var defaultProps3 = {
  variant: "text",
  inherit: false,
  size: "md"
};
var varsResolver2 = (0, import_core6.createVarsResolver)(
  (theme, { variant, lineClamp, gradient, size }) => ({
    root: {
      "--text-fz": (0, import_core6.getFontSize)(size),
      "--text-lh": (0, import_core6.getLineHeight)(size),
      "--text-gradient": variant === "gradient" ? (0, import_core6.getGradient)(gradient, theme) : void 0,
      "--text-line-clamp": typeof lineClamp === "number" ? lineClamp.toString() : void 0
    }
  })
);
var Text = (0, import_core6.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core6.useProps)("Text", defaultProps3, _props);
  const _a = props, {
    lineClamp,
    truncate,
    inline,
    inherit,
    gradient,
    span,
    __staticSelector,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    variant,
    mod,
    size
  } = _a, others = __objRest(_a, [
    "lineClamp",
    "truncate",
    "inline",
    "inherit",
    "gradient",
    "span",
    "__staticSelector",
    "vars",
    "className",
    "style",
    "classNames",
    "styles",
    "unstyled",
    "variant",
    "mod",
    "size"
  ]);
  const getStyles = (0, import_core6.useStyles)({
    name: ["Text", __staticSelector],
    props,
    classes: {
      root: "text-root"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver2
  });
  return /* @__PURE__ */ import_react7.default.createElement(
    import_core6.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { focusable: true })), {
      ref,
      component: span ? "span" : "p",
      variant,
      mod: [
        {
          "data-truncate": getTextTruncate(truncate),
          "data-line-clamp": typeof lineClamp === "number",
          "data-inline": inline,
          "data-inherit": inherit
        },
        mod
      ],
      size
    }), others)
  );
});
Text.displayName = "@raikou/core/Text";

// ../components/CloseButton/src/CloseIcon.tsx
var import_react8 = __toESM(require("react"));
var CloseIcon = (0, import_react8.forwardRef)(
  (_a, ref) => {
    var _b = _a, { size = "var(--cb-icon-size)", style } = _b, others = __objRest(_b, ["size", "style"]);
    return /* @__PURE__ */ import_react8.default.createElement(
      "svg",
      __spreadValues({
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: __spreadProps(__spreadValues({}, style), { width: size, height: size }),
        ref
      }, others),
      /* @__PURE__ */ import_react8.default.createElement(
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

// ../components/CloseButton/src/CloseButton.tsx
var import_react12 = __toESM(require("react"));
var import_core10 = require("@raikou/core");

// ../components/ActionIcon/src/ActionIcon.tsx
var import_react11 = __toESM(require("react"));
var import_core9 = require("@raikou/core");

// ../components/UnstyledButton/src/UnstyledButton.tsx
var import_react9 = __toESM(require("react"));
var import_core7 = require("@raikou/core");
var defaultProps4 = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = (0, import_core7.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core7.useProps)("UnstyledButton", defaultProps4, _props);
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
    const getStyles = (0, import_core7.useStyles)({
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
    return /* @__PURE__ */ import_react9.default.createElement(
      import_core7.Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { focusable: true })), {
        component,
        ref,
        type: component === "button" ? "button" : void 0
      }), others)
    );
  }
);
UnstyledButton.displayName = "@raikou/core/UnstyledButton";

// ../components/ActionIcon/src/ActionIconGroup/ActionIconGroup.tsx
var import_react10 = __toESM(require("react"));
var import_core8 = require("@raikou/core");
var defaultProps5 = {
  orientation: "horizontal",
  borderWidth: 1
};
var varsResolver3 = (0, import_core8.createVarsResolver)(
  (_, { borderWidth }) => ({
    group: { "--ai-border-width": (0, import_core8.rem)(borderWidth) }
  })
);
var ActionIconGroup = (0, import_core8.factory)(
  (_props, ref) => {
    const props = (0, import_core8.useProps)("ActionIconGroup", defaultProps5, _props);
    const _a = (0, import_core8.useProps)("ActionIconGroup", defaultProps5, _props), {
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
    const getStyles = (0, import_core8.useStyles)({
      name: "ActionIconGroup",
      props,
      classes: {
        group: "actionIconGroup-root"
      },
      className,
      style,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver3,
      rootSelector: "group"
    });
    return /* @__PURE__ */ import_react10.default.createElement(
      import_core8.Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("group")), {
        ref,
        variant,
        mod: { "data-orientation": orientation },
        role: "group"
      }), others)
    );
  }
);
ActionIconGroup.displayName = "@raikou/core/ActionIconGroup";

// ../components/ActionIcon/src/ActionIcon.tsx
var defaultProps6 = {
  variant: "filled",
  size: "md"
};
var varsResolver4 = (0, import_core9.createVarsResolver)(
  (theme, { size, radius, variant, gradient, color }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant
    });
    return {
      root: {
        "--ai-size": (0, import_core9.getSize)(size, "ai-size"),
        "--ai-radius": (0, import_core9.getRadius)(radius),
        "--ai-bg": colors.background,
        "--ai-hover": colors.hover,
        "--ai-color": colors.color,
        "--ai-bd": colors.border
      }
    };
  }
);
var ActionIcon = (0, import_core9.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core9.useProps)("ActionIcon", defaultProps6, _props);
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
    const getStyles = (0, import_core9.useStyles)({
      name: ["ActionIcon", __staticSelector],
      props,
      className,
      style,
      classes: {
        root: "actionIcon-root",
        loader: "actionIcon-loader"
      },
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver4
    });
    return /* @__PURE__ */ import_react11.default.createElement(
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
      loading ? /* @__PURE__ */ import_react11.default.createElement(
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

// ../components/CloseButton/src/CloseButton.tsx
var defaultProps7 = {
  iconSize: "70%",
  variant: "subtle",
  color: "gray"
};
var CloseButton = (0, import_core10.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core10.useProps)("CloseButton", defaultProps7, _props);
    const _a = props, { iconSize, children, vars } = _a, others = __objRest(_a, ["iconSize", "children", "vars"]);
    return /* @__PURE__ */ import_react12.default.createElement(
      ActionIcon,
      __spreadProps(__spreadValues({
        ref
      }, others), {
        __vars: { "--cb-icon-size": (0, import_core10.rem)(iconSize) },
        __staticSelector: "CloseButton"
      }),
      /* @__PURE__ */ import_react12.default.createElement(CloseIcon, null),
      children
    );
  }
);
CloseButton.displayName = "@raikou/core/CloseButton";

// ../components/Notification/src/Notification.tsx
var defaultProps8 = {
  withCloseButton: true
};
var varsResolver5 = (0, import_core11.createVarsResolver)(
  (theme, { radius, color }) => ({
    root: {
      "--notification-radius": (0, import_core11.getRadius)(radius),
      "--notification-color": (0, import_core11.getThemeColor)(color, theme)
    }
  })
);
var Notification = (0, import_core11.factory)((_props, ref) => {
  const props = (0, import_core11.useProps)("Notification", defaultProps8, _props);
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
  const getStyles = (0, import_core11.useStyles)({
    name: "Notification",
    classes: {
      root: "notification-root",
      icon: "notification-icon",
      loader: "notification-loader",
      body: "notification-body",
      title: "notification-title",
      description: "notification-description",
      closeButton: "notification-close-button"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver5
  });
  return /* @__PURE__ */ import_react13.default.createElement(
    import_core11.Box,
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
    icon && !loading && /* @__PURE__ */ import_react13.default.createElement("div", __spreadValues({}, getStyles("icon")), icon),
    loading && /* @__PURE__ */ import_react13.default.createElement(Loader, __spreadValues({ size: 28, color }, getStyles("loader"))),
    /* @__PURE__ */ import_react13.default.createElement("div", __spreadValues({}, getStyles("body")), title && /* @__PURE__ */ import_react13.default.createElement(Text, __spreadProps(__spreadValues({}, getStyles("title")), { size: "sm", fw: 500 }), title), /* @__PURE__ */ import_react13.default.createElement(
      Text,
      __spreadProps(__spreadValues({}, getStyles("description")), {
        color: "dimmed",
        mod: {
          "data-with-title": !!title
        },
        size: "sm"
      }),
      children
    )),
    withCloseButton && /* @__PURE__ */ import_react13.default.createElement(
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
Notification.displayName = "@raikou/core/Notification";

// src/get-auto-close/get-auto-close.ts
function getAutoClose(autoClose, notificationAutoClose) {
  if (typeof notificationAutoClose === "number") {
    return notificationAutoClose;
  }
  if (notificationAutoClose === false || autoClose === false) {
    return false;
  }
  return autoClose;
}

// src/NotificationContainer.tsx
var NotificationContainer = (0, import_react14.forwardRef)((_a, ref) => {
  var _b = _a, { data, onHide, autoClose } = _b, others = __objRest(_b, ["data", "onHide", "autoClose"]);
  const _a2 = data, { autoClose: _autoClose, message } = _a2, notificationProps = __objRest(_a2, ["autoClose", "message"]);
  const autoCloseDuration = getAutoClose(autoClose, data.autoClose);
  const autoCloseTimeout = (0, import_react14.useRef)();
  const cancelAutoClose = () => window.clearTimeout(autoCloseTimeout.current);
  const handleHide = () => {
    onHide(data.id);
    cancelAutoClose();
  };
  const handleAutoClose = () => {
    if (typeof autoCloseDuration === "number") {
      autoCloseTimeout.current = window.setTimeout(
        handleHide,
        autoCloseDuration
      );
    }
  };
  (0, import_react14.useEffect)(() => {
    var _a3;
    (_a3 = data.onOpen) == null ? void 0 : _a3.call(data, data);
  }, []);
  (0, import_react14.useEffect)(() => {
    handleAutoClose();
    return cancelAutoClose;
  }, [autoCloseDuration]);
  return /* @__PURE__ */ import_react14.default.createElement(
    Notification,
    __spreadProps(__spreadValues(__spreadValues({}, others), notificationProps), {
      onClose: handleHide,
      ref,
      onMouseEnter: cancelAutoClose,
      onMouseLeave: handleAutoClose
    }),
    message
  );
});
NotificationContainer.displayName = "@raikou/notifications/NotificationContainer";

// src/get-notification-state-styles.ts
var transforms = {
  left: "translateX(-100%)",
  right: "translateX(100%)",
  "top-center": "translateY(-100%)",
  "bottom-center": "translateY(100%)"
};
var noTransform = {
  left: "translateX(0)",
  right: "translateX(0)",
  "top-center": "translateY(0)",
  "bottom-center": "translateY(0)"
};
function getNotificationStateStyles({
  state,
  maxHeight,
  position,
  transitionDuration
}) {
  const [vertical, horizontal] = position.split("-");
  const property = horizontal === "center" ? `${vertical}-center` : horizontal;
  const commonStyles = {
    opacity: 0,
    maxHeight,
    transform: transforms[property],
    transitionDuration: `${transitionDuration}ms, ${transitionDuration}ms, ${transitionDuration}ms`,
    transitionTimingFunction: "cubic-bezier(.51,.3,0,1.21), cubic-bezier(.51,.3,0,1.21), linear",
    transitionProperty: "opacity, transform, max-height"
  };
  const inState = {
    opacity: 1,
    transform: noTransform[property]
  };
  const outState = {
    opacity: 0,
    maxHeight: 0,
    transform: transforms[property]
  };
  const transitionStyles = {
    entering: inState,
    entered: inState,
    exiting: outState,
    exited: outState
  };
  return __spreadValues(__spreadValues({}, commonStyles), transitionStyles[state]);
}

// src/Notifications.tsx
var Transition = import_react_transition_group.Transition;
var defaultProps9 = {
  position: "bottom-right",
  autoClose: 4e3,
  transitionDuration: 250,
  containerWidth: 440,
  notificationMaxHeight: 200,
  limit: 5,
  zIndex: (0, import_core12.getDefaultZIndex)("overlay"),
  store: notificationsStore,
  withinPortal: true
};
var varsResolver6 = (0, import_core12.createVarsResolver)(
  (_, { zIndex, position, containerWidth }) => {
    const [vertical, horizontal] = position.split("-");
    return {
      root: {
        "--notifications-z-index": zIndex == null ? void 0 : zIndex.toString(),
        "--notifications-top": vertical === "top" ? "var(--raikou-spacing-md)" : void 0,
        "--notifications-bottom": vertical === "bottom" ? "var(--raikou-spacing-md)" : void 0,
        "--notifications-left": horizontal === "left" ? "var(--raikou-spacing-md)" : horizontal === "center" ? "50%" : void 0,
        "--notifications-right": horizontal === "right" ? "var(--raikou-spacing-md)" : void 0,
        "--notifications-transform": horizontal === "center" ? "translateX(-50%)" : void 0,
        "--notifications-container-width": (0, import_core12.rem)(containerWidth)
      }
    };
  }
);
var Notifications = (0, import_core12.factory)((_props, ref) => {
  const props = (0, import_core12.useProps)("Notifications", defaultProps9, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    position,
    autoClose,
    transitionDuration,
    containerWidth,
    notificationMaxHeight,
    limit,
    zIndex,
    store,
    portalProps,
    withinPortal
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "position",
    "autoClose",
    "transitionDuration",
    "containerWidth",
    "notificationMaxHeight",
    "limit",
    "zIndex",
    "store",
    "portalProps",
    "withinPortal"
  ]);
  const theme = (0, import_core12.useRaikouTheme)();
  const data = useNotifications(store);
  const forceUpdate = (0, import_hooks3.useForceUpdate)();
  const shouldReduceMotion = (0, import_hooks3.useReducedMotion)();
  const refs = (0, import_react15.useRef)({});
  const previousLength = (0, import_react15.useRef)(0);
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const duration = reduceMotion ? 1 : transitionDuration;
  const getStyles = (0, import_core12.useStyles)({
    name: "Notifications",
    classes: {
      root: "notifications-root",
      notification: "notifications-notification"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver6
  });
  (0, import_hooks3.useDidUpdate)(() => {
    if (data.notifications.length > previousLength.current) {
      setTimeout(() => forceUpdate(), 0);
    }
    previousLength.current = data.notifications.length;
  }, [notifications]);
  const items = data.notifications.map((notification) => /* @__PURE__ */ import_react15.default.createElement(
    Transition,
    {
      key: notification.id,
      timeout: duration,
      onEnter: () => refs.current[notification.id].offsetHeight,
      nodeRef: { current: refs.current[notification.id] }
    },
    (state) => /* @__PURE__ */ import_react15.default.createElement(
      NotificationContainer,
      __spreadProps(__spreadValues({}, getStyles("notification", {
        style: getNotificationStateStyles({
          state,
          position,
          transitionDuration: duration,
          maxHeight: notificationMaxHeight
        })
      })), {
        ref: (node) => {
          refs.current[notification.id] = node;
        },
        data: notification,
        onHide: (id) => hideNotification(id, store),
        autoClose
      })
    )
  ));
  return /* @__PURE__ */ import_react15.default.createElement(OptionalPortal, __spreadValues({ withinPortal }, portalProps), /* @__PURE__ */ import_react15.default.createElement(import_core12.Box, __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), { ref }), others), /* @__PURE__ */ import_react15.default.createElement(import_react_transition_group.TransitionGroup, null, items)));
});
Notifications.displayName = "@raikou/notifications/Notifications";
Notifications.show = notifications.show;
Notifications.hide = notifications.hide;
Notifications.update = notifications.update;
Notifications.clean = notifications.clean;
Notifications.cleanQueue = notifications.cleanQueue;
Notifications.updateState = notifications.updateState;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Notifications,
  cleanNotifications,
  cleanNotificationsQueue,
  createNotificationsStore,
  hideNotification,
  notifications,
  notificationsStore,
  showNotification,
  updateNotification,
  updateNotificationsState,
  useNotifications
});
