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
import React13, { useRef as useRef3 } from "react";
import {
  Transition as _Transition,
  TransitionGroup
} from "react-transition-group";
import { useForceUpdate, useDidUpdate, useReducedMotion } from "@raikou/hooks";
import {
  Box as Box8,
  factory as factory3,
  useProps as useProps6,
  useStyles as useStyles5,
  createVarsResolver as createVarsResolver4,
  getDefaultZIndex,
  useRaikouTheme,
  rem as rem2
} from "@raikou/core";

// ../components/Portal/src/Portal.tsx
import React, { useRef, useState, forwardRef } from "react";
import { createPortal } from "react-dom";
import { useIsomorphicEffect, assignRef } from "@raikou/hooks";
import { useProps } from "@raikou/core";
function createPortalNode(props) {
  const node = document.createElement("div");
  node.setAttribute("data-portal", "true");
  typeof props.className === "string" && node.classList.add(props.className);
  typeof props.style === "object" && Object.assign(node.style, props.style);
  typeof props.id === "string" && node.setAttribute("id", props.id);
  return node;
}
var defaultProps = {};
var Portal = forwardRef((props, ref) => {
  const _a = useProps(
    "Portal",
    defaultProps,
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
  return createPortal(/* @__PURE__ */ React.createElement(React.Fragment, null, children), nodeRef.current);
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
import React12, { forwardRef as forwardRef7, useRef as useRef2, useEffect } from "react";

// ../components/Notification/src/Notification.tsx
import React11 from "react";
import {
  Box as Box7,
  factory as factory2,
  useProps as useProps5,
  useStyles as useStyles4,
  createVarsResolver as createVarsResolver3,
  getRadius as getRadius2,
  getThemeColor as getThemeColor2
} from "@raikou/core";

// ../components/Loader/src/Loader.tsx
import React7 from "react";
import {
  Box as Box5,
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

// ../components/Loader/src/loaders/Progress.tsx
import React5, { forwardRef as forwardRef4 } from "react";
import { Box as Box3 } from "@raikou/core";
var Progress = forwardRef4(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React5.createElement(
      Box3,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("progress-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React5.createElement("svg", { viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ React5.createElement("g", { fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ React5.createElement("g", { transform: "translate(2.5 2.5)", strokeWidth: "5" }, /* @__PURE__ */ React5.createElement("circle", { strokeOpacity: ".5", cx: "16", cy: "16", r: "16" }), /* @__PURE__ */ React5.createElement("path", { d: "M32 16c0-9.94-8.06-16-16-16" }, /* @__PURE__ */ React5.createElement(
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

// ../components/Loader/src/loaders/Dots.tsx
import React6, { forwardRef as forwardRef5 } from "react";
import { Box as Box4 } from "@raikou/core";
var Dots = forwardRef5(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React6.createElement(
      Box4,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("dots-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React6.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React6.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React6.createElement("span", { className: "dot" })
    );
  }
);

// ../components/Loader/src/Loader.tsx
var defaultLoaders = {
  bars: Bars,
  oval: Oval,
  dots: Dots,
  progress: Progress
};
var defaultProps2 = {
  loaders: defaultLoaders,
  type: "oval"
};
var varsResolver = createVarsResolver(
  (theme, { size, color }) => ({
    root: {
      "--loader-size": getSize(size, "loader-size"),
      "--loader-color": color ? getThemeColor(color, theme) : void 0
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
  return /* @__PURE__ */ React7.createElement(
    Box5,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      ref,
      component: loaders[type],
      variant,
      size
    }), others)
  );
});
Loader.displayName = "@raikou/core/Loader";

// ../components/CloseButton/src/CloseIcon.tsx
import React8, { forwardRef as forwardRef6 } from "react";
var CloseIcon = forwardRef6(
  (_a, ref) => {
    var _b = _a, { size = "var(--cb-icon-size, 70%)", style } = _b, others = __objRest(_b, ["size", "style"]);
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
import React10 from "react";
import {
  polymorphicFactory as polymorphicFactory2,
  useProps as useProps4,
  rem,
  getSize as getSize2,
  getRadius,
  createVarsResolver as createVarsResolver2,
  useStyles as useStyles3
} from "@raikou/core";

// ../components/UnstyledButton/src/UnstyledButton.tsx
import React9 from "react";
import {
  Box as Box6,
  useProps as useProps3,
  useStyles as useStyles2,
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
    const getStyles = useStyles2({
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

// ../components/CloseButton/src/CloseButton.tsx
var defaultProps4 = {
  variant: "subtle",
  size: "md"
};
var varsResolver2 = createVarsResolver2(
  (_, { size, radius, iconSize }) => ({
    root: {
      "--cb-size": getSize2(size, "cb-size"),
      "--cb-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--cb-icon-size": rem(iconSize)
    }
  })
);
var CloseButton = polymorphicFactory2(
  (_props, ref) => {
    const props = useProps4("CloseButton", defaultProps4, _props);
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
    const getStyles = useStyles3({
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
      varsResolver: varsResolver2
    });
    return /* @__PURE__ */ React10.createElement(
      UnstyledButton,
      __spreadValues(__spreadProps(__spreadValues({
        ref
      }, others), {
        unstyled,
        variant,
        disabled,
        mod: { disabled: disabled || dataDisabled }
      }), getStyles("root", { variant, active: true })),
      /* @__PURE__ */ React10.createElement(CloseIcon, null),
      children
    );
  }
);
CloseButton.displayName = "@raikou/core/CloseButton";

// ../components/Notification/src/Notification.tsx
var defaultProps5 = {
  withCloseButton: true
};
var varsResolver3 = createVarsResolver3(
  (theme, { radius, color }) => ({
    root: {
      "--notification-radius": radius === void 0 ? void 0 : getRadius2(radius),
      "--notification-color": color ? getThemeColor2(color, theme) : void 0
    }
  })
);
var Notification = factory2((_props, ref) => {
  const props = useProps5("Notification", defaultProps5, _props);
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
  const getStyles = useStyles4({
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
    varsResolver: varsResolver3
  });
  return /* @__PURE__ */ React11.createElement(
    Box7,
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
    icon && !loading && /* @__PURE__ */ React11.createElement("div", __spreadValues({}, getStyles("icon")), icon),
    loading && /* @__PURE__ */ React11.createElement(Loader, __spreadValues({ size: 28, color }, getStyles("loader"))),
    /* @__PURE__ */ React11.createElement("div", __spreadValues({}, getStyles("body")), /* @__PURE__ */ React11.createElement(Box7, __spreadProps(__spreadValues({}, getStyles("description")), { mod: { "data-with-title": !!title } }), children)),
    withCloseButton && /* @__PURE__ */ React11.createElement(
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
var NotificationContainer = forwardRef7((_a, ref) => {
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
  return /* @__PURE__ */ React12.createElement(
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
var defaultProps6 = {
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
var varsResolver4 = createVarsResolver4(
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
        "--notifications-container-width": rem2(containerWidth)
      }
    };
  }
);
var Notifications = factory3((_props, ref) => {
  const props = useProps6("Notifications", defaultProps6, _props);
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
  const getStyles = useStyles5({
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
    varsResolver: varsResolver4
  });
  useDidUpdate(() => {
    if (data.notifications.length > previousLength.current) {
      setTimeout(() => forceUpdate(), 0);
    }
    previousLength.current = data.notifications.length;
  }, [data.notifications]);
  const items = data.notifications.map((notification) => /* @__PURE__ */ React13.createElement(
    Transition,
    {
      key: notification.id,
      timeout: duration,
      onEnter: () => refs.current[notification.id].offsetHeight,
      nodeRef: { current: refs.current[notification.id] }
    },
    (state) => /* @__PURE__ */ React13.createElement(
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
  return /* @__PURE__ */ React13.createElement(OptionalPortal, __spreadValues({ withinPortal }, portalProps), /* @__PURE__ */ React13.createElement(Box8, __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), { ref }), others), /* @__PURE__ */ React13.createElement(TransitionGroup, null, items)));
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
