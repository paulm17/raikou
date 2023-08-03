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

// src/notifications.store.ts
import { randomId } from "@raikou/hooks";

// ../store/src/store.ts
import { useSyncExternalStore } from "react";
function createStore(initialState) {
  let state = initialState;
  let initialized = false;
  const listeners = /* @__PURE__ */ new Set();
  return {
    getState() {
      return state;
    },
    updateState(value) {
      state = typeof value === "function" ? value(state) : value;
    },
    setState(value) {
      this.updateState(value);
      listeners.forEach((listener) => listener(state));
    },
    initialize(value) {
      if (!initialized) {
        state = value;
        initialized = true;
      }
    },
    subscribe(callback) {
      listeners.add(callback);
      return () => listeners.delete(callback);
    }
  };
}
function useStore(store) {
  return useSyncExternalStore(
    store.subscribe,
    () => store.getState(),
    () => store.getState()
  );
}

// src/notifications.store.ts
var createNotificationsStore = () => createStore({
  notifications: [],
  queue: [],
  limit: 5
});
var notificationsStore = createNotificationsStore();
var useNotifications = (store = notificationsStore) => useStore(store);
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
  const id = notification.id || randomId();
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
import React15, { useRef as useRef3 } from "react";
import {
  Transition as _Transition,
  TransitionGroup
} from "react-transition-group";
import { useForceUpdate, useDidUpdate, useReducedMotion } from "@raikou/hooks";
import {
  Box as Box9,
  factory as factory4,
  useProps as useProps9,
  useStyles as useStyles7,
  createVarsResolver as createVarsResolver6,
  getDefaultZIndex,
  useRaikouTheme,
  rem as rem3
} from "@raikou/core";

// ../components/Portal/src/Portal.tsx
import React, { useRef, useState, forwardRef } from "react";
import { createPortal } from "react-dom";
import { useIsomorphicEffect } from "@raikou/hooks";
import { useProps } from "@raikou/core";
var defaultProps = {};
var Portal = forwardRef((props, ref) => {
  const _a = useProps(
    "Portal",
    defaultProps,
    props
  ), { children, target, className } = _a, others = __objRest(_a, ["children", "target", "className"]);
  const [mounted, setMounted] = useState(false);
  const nodeRef = useRef(null);
  useIsomorphicEffect(() => {
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
  return createPortal(
    /* @__PURE__ */ React.createElement("div", __spreadValues({ className, ref }, others), children),
    nodeRef.current
  );
});
Portal.displayName = "@raikou/core/Portal";

// ../components/Portal/src/OptionalPortal.tsx
import React2 from "react";
function OptionalPortal(_a) {
  var _b = _a, {
    withinPortal = true,
    children
  } = _b, others = __objRest(_b, [
    "withinPortal",
    "children"
  ]);
  if (withinPortal) {
    return /* @__PURE__ */ React2.createElement(Portal, __spreadValues({}, others), children);
  }
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, children);
}
OptionalPortal.displayName = "@raikou/core/OptionalPortal";

// src/NotificationContainer.tsx
import React14, { forwardRef as forwardRef6, useRef as useRef2, useEffect } from "react";

// ../components/Notification/src/Notification.tsx
import React13 from "react";
import {
  Box as Box8,
  factory as factory3,
  useProps as useProps8,
  useStyles as useStyles6,
  createVarsResolver as createVarsResolver5,
  getRadius as getRadius2,
  getThemeColor as getThemeColor2
} from "@raikou/core";

// ../components/Loader/src/Loader.tsx
import React6 from "react";
import {
  Box as Box4,
  useProps as useProps2,
  getThemeColor,
  useStyles,
  factory,
  getSize,
  createVarsResolver
} from "@raikou/core";

// ../components/Loader/src/loaders/Bars.tsx
import React3, { forwardRef as forwardRef2 } from "react";

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
import { Box } from "@raikou/core";
var Bars = forwardRef2(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React3.createElement(
      Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("bars-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React3.createElement("span", { className: "bar" }),
      /* @__PURE__ */ React3.createElement("span", { className: "bar" }),
      /* @__PURE__ */ React3.createElement("span", { className: "bar" })
    );
  }
);

// ../components/Loader/src/loaders/Oval.tsx
import React4, { forwardRef as forwardRef3 } from "react";
import { Box as Box2 } from "@raikou/core";
var Oval = forwardRef3(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React4.createElement(
      Box2,
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
import React5, { forwardRef as forwardRef4 } from "react";
import { Box as Box3 } from "@raikou/core";
var Dots = forwardRef4(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React5.createElement(
      Box3,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("dots-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React5.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React5.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React5.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React5.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React5.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React5.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React5.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React5.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React5.createElement("span", { className: "dot" })
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
var varsResolver = createVarsResolver(
  (theme, { size, color }) => ({
    root: {
      "--loader-size": getSize(size, "loader-size"),
      "--loader-color": getThemeColor(color, theme)
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
  const getStyles = useStyles({
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
  return /* @__PURE__ */ React6.createElement(
    Box4,
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
import React7 from "react";
import {
  Box as Box5,
  polymorphicFactory,
  useStyles as useStyles2,
  useProps as useProps3,
  getGradient,
  createVarsResolver as createVarsResolver2,
  getFontSize,
  getLineHeight
} from "@raikou/core";
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
var varsResolver2 = createVarsResolver2(
  (theme, { variant, lineClamp, gradient, size }) => ({
    root: {
      "--text-fz": getFontSize(size),
      "--text-lh": getLineHeight(size),
      "--text-gradient": variant === "gradient" ? getGradient(gradient, theme) : void 0,
      "--text-line-clamp": typeof lineClamp === "number" ? lineClamp.toString() : void 0
    }
  })
);
var Text = polymorphicFactory((_props, ref) => {
  const props = useProps3("Text", defaultProps3, _props);
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
  const getStyles = useStyles2({
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
  return /* @__PURE__ */ React7.createElement(
    Box5,
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
import React8, { forwardRef as forwardRef5 } from "react";
var CloseIcon = forwardRef5(
  (_a, ref) => {
    var _b = _a, { size = "var(--cb-icon-size)", style } = _b, others = __objRest(_b, ["size", "style"]);
    return /* @__PURE__ */ React8.createElement(
      "svg",
      __spreadValues({
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: __spreadProps(__spreadValues({}, style), { width: size, height: size }),
        ref
      }, others),
      /* @__PURE__ */ React8.createElement(
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
import React12 from "react";
import {
  polymorphicFactory as polymorphicFactory4,
  useProps as useProps7,
  rem as rem2
} from "@raikou/core";

// ../components/ActionIcon/src/ActionIcon.tsx
import React11 from "react";
import {
  useProps as useProps6,
  useStyles as useStyles5,
  getRadius,
  polymorphicFactory as polymorphicFactory3,
  getSize as getSize2,
  createVarsResolver as createVarsResolver4
} from "@raikou/core";

// ../components/UnstyledButton/src/UnstyledButton.tsx
import React9 from "react";
import {
  Box as Box6,
  useProps as useProps4,
  useStyles as useStyles3,
  polymorphicFactory as polymorphicFactory2
} from "@raikou/core";
var defaultProps4 = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = polymorphicFactory2(
  (_props, ref) => {
    const props = useProps4("UnstyledButton", defaultProps4, _props);
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
    const getStyles = useStyles3({
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
    return /* @__PURE__ */ React9.createElement(
      Box6,
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
import React10 from "react";
import {
  factory as factory2,
  Box as Box7,
  useProps as useProps5,
  useStyles as useStyles4,
  rem,
  createVarsResolver as createVarsResolver3
} from "@raikou/core";
var defaultProps5 = {
  orientation: "horizontal",
  borderWidth: 1
};
var varsResolver3 = createVarsResolver3(
  (_, { borderWidth }) => ({
    group: { "--ai-border-width": rem(borderWidth) }
  })
);
var ActionIconGroup = factory2(
  (_props, ref) => {
    const props = useProps5("ActionIconGroup", defaultProps5, _props);
    const _a = useProps5("ActionIconGroup", defaultProps5, _props), {
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
    const getStyles = useStyles4({
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
    return /* @__PURE__ */ React10.createElement(
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
ActionIconGroup.displayName = "@raikou/core/ActionIconGroup";

// ../components/ActionIcon/src/ActionIcon.tsx
var defaultProps6 = {
  variant: "filled",
  size: "md"
};
var varsResolver4 = createVarsResolver4(
  (theme, { size, radius, variant, gradient, color }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant
    });
    return {
      root: {
        "--ai-size": getSize2(size, "ai-size"),
        "--ai-radius": getRadius(radius),
        "--ai-bg": colors.background,
        "--ai-hover": colors.hover,
        "--ai-color": colors.color,
        "--ai-bd": colors.border
      }
    };
  }
);
var ActionIcon = polymorphicFactory3(
  (_props, ref) => {
    const props = useProps6("ActionIcon", defaultProps6, _props);
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
    const getStyles = useStyles5({
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
    return /* @__PURE__ */ React11.createElement(
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
      loading ? /* @__PURE__ */ React11.createElement(
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
var CloseButton = polymorphicFactory4(
  (_props, ref) => {
    const props = useProps7("CloseButton", defaultProps7, _props);
    const _a = props, { iconSize, children, vars } = _a, others = __objRest(_a, ["iconSize", "children", "vars"]);
    return /* @__PURE__ */ React12.createElement(
      ActionIcon,
      __spreadProps(__spreadValues({
        ref
      }, others), {
        __vars: { "--cb-icon-size": rem2(iconSize) },
        __staticSelector: "CloseButton"
      }),
      /* @__PURE__ */ React12.createElement(CloseIcon, null),
      children
    );
  }
);
CloseButton.displayName = "@raikou/core/CloseButton";

// ../components/Notification/src/Notification.tsx
var defaultProps8 = {
  withCloseButton: true
};
var varsResolver5 = createVarsResolver5(
  (theme, { radius, color }) => ({
    root: {
      "--notification-radius": getRadius2(radius),
      "--notification-color": getThemeColor2(color, theme)
    }
  })
);
var Notification = factory3((_props, ref) => {
  const props = useProps8("Notification", defaultProps8, _props);
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
  const getStyles = useStyles6({
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
  return /* @__PURE__ */ React13.createElement(
    Box8,
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
    icon && !loading && /* @__PURE__ */ React13.createElement("div", __spreadValues({}, getStyles("icon")), icon),
    loading && /* @__PURE__ */ React13.createElement(Loader, __spreadValues({ size: 28, color }, getStyles("loader"))),
    /* @__PURE__ */ React13.createElement("div", __spreadValues({}, getStyles("body")), title && /* @__PURE__ */ React13.createElement(Text, __spreadProps(__spreadValues({}, getStyles("title")), { size: "sm", fw: 500 }), title), /* @__PURE__ */ React13.createElement(
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
    withCloseButton && /* @__PURE__ */ React13.createElement(
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
var NotificationContainer = forwardRef6((_a, ref) => {
  var _b = _a, { data, onHide, autoClose } = _b, others = __objRest(_b, ["data", "onHide", "autoClose"]);
  const _a2 = data, { autoClose: _autoClose, message } = _a2, notificationProps = __objRest(_a2, ["autoClose", "message"]);
  const autoCloseDuration = getAutoClose(autoClose, data.autoClose);
  const autoCloseTimeout = useRef2();
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
  useEffect(() => {
    var _a3;
    (_a3 = data.onOpen) == null ? void 0 : _a3.call(data, data);
  }, []);
  useEffect(() => {
    handleAutoClose();
    return cancelAutoClose;
  }, [autoCloseDuration]);
  return /* @__PURE__ */ React14.createElement(
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
var Transition = _Transition;
var defaultProps9 = {
  position: "bottom-right",
  autoClose: 4e3,
  transitionDuration: 250,
  containerWidth: 440,
  notificationMaxHeight: 200,
  limit: 5,
  zIndex: getDefaultZIndex("overlay"),
  store: notificationsStore,
  withinPortal: true
};
var varsResolver6 = createVarsResolver6(
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
        "--notifications-container-width": rem3(containerWidth)
      }
    };
  }
);
var Notifications = factory4((_props, ref) => {
  const props = useProps9("Notifications", defaultProps9, _props);
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
  const theme = useRaikouTheme();
  const data = useNotifications(store);
  const forceUpdate = useForceUpdate();
  const shouldReduceMotion = useReducedMotion();
  const refs = useRef3({});
  const previousLength = useRef3(0);
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const duration = reduceMotion ? 1 : transitionDuration;
  const getStyles = useStyles7({
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
  useDidUpdate(() => {
    if (data.notifications.length > previousLength.current) {
      setTimeout(() => forceUpdate(), 0);
    }
    previousLength.current = data.notifications.length;
  }, [notifications]);
  const items = data.notifications.map((notification) => /* @__PURE__ */ React15.createElement(
    Transition,
    {
      key: notification.id,
      timeout: duration,
      onEnter: () => refs.current[notification.id].offsetHeight,
      nodeRef: { current: refs.current[notification.id] }
    },
    (state) => /* @__PURE__ */ React15.createElement(
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
  return /* @__PURE__ */ React15.createElement(OptionalPortal, __spreadValues({ withinPortal }, portalProps), /* @__PURE__ */ React15.createElement(Box9, __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), { ref }), others), /* @__PURE__ */ React15.createElement(TransitionGroup, null, items)));
});
Notifications.displayName = "@raikou/notifications/Notifications";
Notifications.show = notifications.show;
Notifications.hide = notifications.hide;
Notifications.update = notifications.update;
Notifications.clean = notifications.clean;
Notifications.cleanQueue = notifications.cleanQueue;
Notifications.updateState = notifications.updateState;
export {
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
};
