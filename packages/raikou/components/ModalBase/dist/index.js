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
  ModalBase: () => ModalBase,
  ModalBaseBody: () => ModalBaseBody,
  ModalBaseCloseButton: () => ModalBaseCloseButton,
  ModalBaseContent: () => ModalBaseContent,
  ModalBaseHeader: () => ModalBaseHeader,
  ModalBaseOverlay: () => ModalBaseOverlay,
  ModalBaseTitle: () => ModalBaseTitle,
  NativeScrollArea: () => NativeScrollArea
});
module.exports = __toCommonJS(src_exports);

// src/ModalBase.tsx
var import_react7 = __toESM(require("react"));
var import_react_remove_scroll = require("react-remove-scroll");
var import_core2 = require("@raikou/core");

// ../Portal/src/Portal.tsx
var import_react = __toESM(require("react"));
var import_react_dom = require("react-dom");
var import_hooks = require("@raikou/hooks");
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
  (0, import_hooks.useIsomorphicEffect)(() => {
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

// ../Portal/src/OptionalPortal.tsx
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

// ../_utils/create-safe-context/create-safe-context.tsx
var import_react3 = __toESM(require("react"));
function createSafeContext(errorMessage) {
  const Context = (0, import_react3.createContext)(null);
  const useSafeContext = () => {
    const ctx = (0, import_react3.useContext)(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react3.default.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../_utils/create-optional-context/create-optional-context.tsx
var import_react4 = __toESM(require("react"));

// src/ModalBase.context.ts
var [ModalBaseProvider, useModalBaseContext] = createSafeContext(
  "ModalBase component was not found in tree"
);

// src/use-modal.ts
var import_react6 = require("react");
var import_hooks3 = require("@raikou/hooks");

// src/use-lock-scroll.ts
var import_react5 = require("react");
var import_hooks2 = require("@raikou/hooks");
function useLockScroll({ opened, transitionDuration }) {
  const [shouldLockScroll, setShouldLockScroll] = (0, import_react5.useState)(opened);
  const timeout = (0, import_react5.useRef)();
  const reduceMotion = (0, import_hooks2.useReducedMotion)();
  const _transitionDuration = reduceMotion ? 0 : transitionDuration;
  (0, import_react5.useEffect)(() => {
    if (opened) {
      setShouldLockScroll(true);
      window.clearTimeout(timeout.current);
    } else if (_transitionDuration === 0) {
      setShouldLockScroll(false);
    } else {
      timeout.current = window.setTimeout(
        () => setShouldLockScroll(false),
        _transitionDuration
      );
    }
    return () => window.clearTimeout(timeout.current);
  }, [opened, _transitionDuration]);
  return shouldLockScroll;
}

// src/use-modal.ts
function useModal({
  id,
  transitionProps,
  opened,
  trapFocus,
  closeOnEscape,
  onClose,
  returnFocus
}) {
  const _id = (0, import_hooks3.useId)(id);
  const [titleMounted, setTitleMounted] = (0, import_react6.useState)(false);
  const [bodyMounted, setBodyMounted] = (0, import_react6.useState)(false);
  const transitionDuration = typeof (transitionProps == null ? void 0 : transitionProps.duration) === "number" ? transitionProps == null ? void 0 : transitionProps.duration : 200;
  const shouldLockScroll = useLockScroll({ opened, transitionDuration });
  (0, import_hooks3.useWindowEvent)("keydown", (event) => {
    if (!trapFocus && event.key === "Escape" && closeOnEscape) {
      onClose();
    }
  });
  (0, import_hooks3.useFocusReturn)({ opened, shouldReturnFocus: trapFocus && returnFocus });
  return {
    _id,
    titleMounted,
    bodyMounted,
    shouldLockScroll,
    setTitleMounted,
    setBodyMounted
  };
}

// src/ModalBase.tsx
var ModalBase = (0, import_react7.forwardRef)(
  (_a, ref) => {
    var _b = _a, {
      keepMounted,
      opened,
      onClose,
      id,
      transitionProps,
      trapFocus,
      closeOnEscape,
      returnFocus,
      closeOnClickOutside,
      withinPortal,
      portalProps,
      lockScroll,
      children,
      zIndex,
      shadow,
      padding,
      __vars
    } = _b, others = __objRest(_b, [
      "keepMounted",
      "opened",
      "onClose",
      "id",
      "transitionProps",
      "trapFocus",
      "closeOnEscape",
      "returnFocus",
      "closeOnClickOutside",
      "withinPortal",
      "portalProps",
      "lockScroll",
      "children",
      "zIndex",
      "shadow",
      "padding",
      "__vars"
    ]);
    const {
      _id,
      titleMounted,
      bodyMounted,
      shouldLockScroll,
      setTitleMounted,
      setBodyMounted
    } = useModal({
      id,
      transitionProps,
      opened,
      trapFocus,
      closeOnEscape,
      onClose,
      returnFocus
    });
    return /* @__PURE__ */ import_react7.default.createElement(OptionalPortal, __spreadProps(__spreadValues({}, portalProps), { withinPortal }), /* @__PURE__ */ import_react7.default.createElement(
      ModalBaseProvider,
      {
        value: {
          opened,
          onClose,
          closeOnClickOutside,
          transitionProps: __spreadProps(__spreadValues({}, transitionProps), { keepMounted }),
          getTitleId: () => `${_id}-title`,
          getBodyId: () => `${_id}-body`,
          titleMounted,
          bodyMounted,
          setTitleMounted,
          setBodyMounted,
          trapFocus,
          closeOnEscape,
          zIndex
        }
      },
      /* @__PURE__ */ import_react7.default.createElement(import_react_remove_scroll.RemoveScroll, { enabled: shouldLockScroll && lockScroll }, /* @__PURE__ */ import_react7.default.createElement(
        import_core2.Box,
        __spreadProps(__spreadValues({
          ref
        }, others), {
          __vars: __spreadProps(__spreadValues({}, __vars), {
            "--mb-z-index": (zIndex || (0, import_core2.getDefaultZIndex)("modal")).toString(),
            "--mb-shadow": (0, import_core2.getShadow)(shadow),
            "--mb-padding": (0, import_core2.getSpacing)(padding)
          })
        }),
        children
      ))
    ));
  }
);

// src/ModalBaseBody.tsx
var import_react9 = __toESM(require("react"));
var import_clsx = __toESM(require("clsx"));
var import_core3 = require("@raikou/core");

// src/use-modal-body-id.ts
var import_react8 = require("react");
function useModalBodyId() {
  const ctx = useModalBaseContext();
  (0, import_react8.useEffect)(() => {
    ctx.setBodyMounted(true);
    return () => ctx.setBodyMounted(false);
  }, []);
  return ctx.getBodyId();
}

// src/ModalBaseBody.tsx
var ModalBaseBody = (0, import_react9.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    const bodyId = useModalBodyId();
    return /* @__PURE__ */ import_react9.default.createElement(
      import_core3.Box,
      __spreadProps(__spreadValues({
        ref
      }, others), {
        id: bodyId,
        className: (0, import_clsx.default)("modalBase-body", className)
      })
    );
  }
);
ModalBaseBody.displayName = "@raikou/core/ModalBaseBody";

// src/ModalBaseCloseButton.tsx
var import_react19 = __toESM(require("react"));
var import_clsx5 = __toESM(require("clsx"));

// ../CloseButton/src/CloseIcon.tsx
var import_react10 = __toESM(require("react"));
var CloseIcon = (0, import_react10.forwardRef)(
  (_a, ref) => {
    var _b = _a, { size = "var(--cb-icon-size)", style } = _b, others = __objRest(_b, ["size", "style"]);
    return /* @__PURE__ */ import_react10.default.createElement(
      "svg",
      __spreadValues({
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: __spreadProps(__spreadValues({}, style), { width: size, height: size }),
        ref
      }, others),
      /* @__PURE__ */ import_react10.default.createElement(
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
var import_react18 = __toESM(require("react"));
var import_core11 = require("@raikou/core");

// ../ActionIcon/src/ActionIcon.tsx
var import_react17 = __toESM(require("react"));
var import_core10 = require("@raikou/core");

// ../UnstyledButton/src/UnstyledButton.tsx
var import_react11 = __toESM(require("react"));
var import_core4 = require("@raikou/core");
var defaultProps2 = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = (0, import_core4.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core4.useProps)("UnstyledButton", defaultProps2, _props);
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
    const getStyles = (0, import_core4.useStyles)({
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
    return /* @__PURE__ */ import_react11.default.createElement(
      import_core4.Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { focusable: true })), {
        component,
        ref,
        type: component === "button" ? "button" : void 0
      }), others)
    );
  }
);
UnstyledButton.displayName = "@raikou/core/UnstyledButton";

// ../Loader/src/Loader.tsx
var import_react15 = __toESM(require("react"));
var import_core8 = require("@raikou/core");

// ../Loader/src/loaders/Bars.tsx
var import_react12 = __toESM(require("react"));
var import_clsx2 = __toESM(require("clsx"));
var import_core5 = require("@raikou/core");
var Bars = (0, import_react12.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react12.default.createElement(
      import_core5.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: (0, import_clsx2.default)("bars-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react12.default.createElement("span", { className: "bar" }),
      /* @__PURE__ */ import_react12.default.createElement("span", { className: "bar" }),
      /* @__PURE__ */ import_react12.default.createElement("span", { className: "bar" })
    );
  }
);

// ../Loader/src/loaders/Oval.tsx
var import_react13 = __toESM(require("react"));
var import_clsx3 = __toESM(require("clsx"));
var import_core6 = require("@raikou/core");
var Oval = (0, import_react13.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react13.default.createElement(
      import_core6.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: (0, import_clsx3.default)("oval-loader", className)
      }, others), {
        ref
      })
    );
  }
);

// ../Loader/src/loaders/Dots.tsx
var import_react14 = __toESM(require("react"));
var import_clsx4 = __toESM(require("clsx"));
var import_core7 = require("@raikou/core");
var Dots = (0, import_react14.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react14.default.createElement(
      import_core7.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: (0, import_clsx4.default)("dots-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react14.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react14.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react14.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react14.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react14.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react14.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react14.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react14.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react14.default.createElement("span", { className: "dot" })
    );
  }
);

// ../Loader/src/Loader.tsx
var defaultLoaders = {
  bars: Bars,
  oval: Oval,
  dots: Dots
};
var defaultProps3 = {
  size: "md",
  loaders: defaultLoaders,
  type: "oval"
};
var varsResolver = (0, import_core8.createVarsResolver)(
  (theme, { size, color }) => ({
    root: {
      "--loader-size": (0, import_core8.getSize)(size, "loader-size"),
      "--loader-color": (0, import_core8.getThemeColor)(color, theme)
    }
  })
);
var Loader = (0, import_core8.factory)((_props, ref) => {
  const props = (0, import_core8.useProps)("Loader", defaultProps3, _props);
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
  const getStyles = (0, import_core8.useStyles)({
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
  return /* @__PURE__ */ import_react15.default.createElement(
    import_core8.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      ref,
      component: loaders[type],
      variant,
      size
    }), others)
  );
});
Loader.displayName = "@raikou/core/Loader";

// ../ActionIcon/src/ActionIconGroup/ActionIconGroup.tsx
var import_react16 = __toESM(require("react"));
var import_core9 = require("@raikou/core");
var defaultProps4 = {
  orientation: "horizontal",
  borderWidth: 1
};
var varsResolver2 = (0, import_core9.createVarsResolver)(
  (_, { borderWidth }) => ({
    group: { "--ai-border-width": (0, import_core9.rem)(borderWidth) }
  })
);
var ActionIconGroup = (0, import_core9.factory)(
  (_props, ref) => {
    const props = (0, import_core9.useProps)("ActionIconGroup", defaultProps4, _props);
    const _a = (0, import_core9.useProps)("ActionIconGroup", defaultProps4, _props), {
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
    const getStyles = (0, import_core9.useStyles)({
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
      varsResolver: varsResolver2,
      rootSelector: "group"
    });
    return /* @__PURE__ */ import_react16.default.createElement(
      import_core9.Box,
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

// ../ActionIcon/src/ActionIcon.tsx
var defaultProps5 = {
  variant: "filled",
  size: "md"
};
var varsResolver3 = (0, import_core10.createVarsResolver)(
  (theme, { size, radius, variant, gradient, color }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant
    });
    return {
      root: {
        "--ai-size": (0, import_core10.getSize)(size, "ai-size"),
        "--ai-radius": (0, import_core10.getRadius)(radius),
        "--ai-bg": colors.background,
        "--ai-hover": colors.hover,
        "--ai-color": colors.color,
        "--ai-bd": colors.border
      }
    };
  }
);
var ActionIcon = (0, import_core10.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core10.useProps)("ActionIcon", defaultProps5, _props);
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
    const getStyles = (0, import_core10.useStyles)({
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
      varsResolver: varsResolver3
    });
    return /* @__PURE__ */ import_react17.default.createElement(
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
      loading ? /* @__PURE__ */ import_react17.default.createElement(
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

// ../CloseButton/src/CloseButton.tsx
var defaultProps6 = {
  iconSize: "70%",
  variant: "subtle",
  color: "gray"
};
var CloseButton = (0, import_core11.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core11.useProps)("CloseButton", defaultProps6, _props);
    const _a = props, { iconSize, children, vars } = _a, others = __objRest(_a, ["iconSize", "children", "vars"]);
    return /* @__PURE__ */ import_react18.default.createElement(
      ActionIcon,
      __spreadProps(__spreadValues({
        ref
      }, others), {
        __vars: { "--cb-icon-size": (0, import_core11.rem)(iconSize) },
        __staticSelector: "CloseButton"
      }),
      /* @__PURE__ */ import_react18.default.createElement(CloseIcon, null),
      children
    );
  }
);
CloseButton.displayName = "@raikou/core/CloseButton";

// src/ModalBaseCloseButton.tsx
var ModalBaseCloseButton = (0, import_react19.forwardRef)((_a, ref) => {
  var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
  const ctx = useModalBaseContext();
  return /* @__PURE__ */ import_react19.default.createElement(
    CloseButton,
    __spreadProps(__spreadValues({
      ref
    }, others), {
      onClick: ctx.onClose,
      className: (0, import_clsx5.default)("modalBase-close", className)
    })
  );
});
ModalBaseCloseButton.displayName = "@raikou/core/ModalBaseCloseButton";

// src/ModalBaseContent.tsx
var import_react24 = __toESM(require("react"));
var import_clsx6 = __toESM(require("clsx"));

// ../Transition/src/transitions.ts
var import_core12 = require("@raikou/core");
var popIn = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${(0, import_core12.rem)(10)})` },
  transitionProperty: "transform, opacity"
};
var transitions = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  scale: {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: "scale(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-y": {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-x": {
    in: { opacity: 1, transform: "scaleX(1)" },
    out: { opacity: 0, transform: "scaleX(0)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "skew-up": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: {
      opacity: 0,
      transform: `translateY(-${(0, import_core12.rem)(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: {
      opacity: 0,
      transform: `translateY(${(0, import_core12.rem)(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${(0, import_core12.rem)(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${(0, import_core12.rem)(20)}) rotate(5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-100%)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(100%)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "slide-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(100%)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "slide-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-100%)" },
    common: { transformOrigin: "right" },
    transitionProperty: "transform, opacity"
  },
  pop: __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "center center" }
  }),
  "pop-bottom-left": __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "bottom left" }
  }),
  "pop-bottom-right": __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "bottom right" }
  }),
  "pop-top-left": __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "top left" }
  }),
  "pop-top-right": __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "top right" }
  })
};

// ../Transition/src/Transition.tsx
var import_react21 = __toESM(require("react"));

// ../Transition/src/get-transition-styles/get-transition-styles.ts
var transitionStatuses = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function getTransitionStyles({
  transition,
  state,
  duration,
  timingFunction
}) {
  const shared = {
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: timingFunction
  };
  if (typeof transition === "string") {
    if (!(transition in transitions)) {
      return {};
    }
    return __spreadValues(__spreadValues(__spreadValues({
      transitionProperty: transitions[transition].transitionProperty
    }, shared), transitions[transition].common), transitions[transition][transitionStatuses[state]]);
  }
  return __spreadValues(__spreadValues(__spreadValues({
    transitionProperty: transition.transitionProperty
  }, shared), transition.common), transition[transitionStatuses[state]]);
}

// ../Transition/src/use-transition.ts
var import_react20 = require("react");
var import_hooks4 = require("@raikou/hooks");
var import_core13 = require("@raikou/core");
function useTransition({
  duration,
  exitDuration,
  timingFunction,
  mounted,
  onEnter,
  onExit,
  onEntered,
  onExited
}) {
  const theme = (0, import_core13.useRaikouTheme)();
  const shouldReduceMotion = (0, import_hooks4.useReducedMotion)();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionDuration, setTransitionDuration] = (0, import_react20.useState)(
    reduceMotion ? 0 : duration
  );
  const [transitionStatus, setStatus] = (0, import_react20.useState)(
    mounted ? "entered" : "exited"
  );
  const timeoutRef = (0, import_react20.useRef)(-1);
  const handleStateChange = (shouldMount) => {
    const preHandler = shouldMount ? onEnter : onExit;
    const handler = shouldMount ? onEntered : onExited;
    setStatus(shouldMount ? "pre-entering" : "pre-exiting");
    window.clearTimeout(timeoutRef.current);
    const newTransitionDuration = reduceMotion ? 0 : shouldMount ? duration : exitDuration;
    setTransitionDuration(newTransitionDuration);
    if (newTransitionDuration === 0) {
      typeof preHandler === "function" && preHandler();
      typeof handler === "function" && handler();
      setStatus(shouldMount ? "entered" : "exited");
    } else {
      const preStateTimeout = window.setTimeout(() => {
        typeof preHandler === "function" && preHandler();
        setStatus(shouldMount ? "entering" : "exiting");
      }, 10);
      timeoutRef.current = window.setTimeout(() => {
        window.clearTimeout(preStateTimeout);
        typeof handler === "function" && handler();
        setStatus(shouldMount ? "entered" : "exited");
      }, newTransitionDuration);
    }
  };
  (0, import_hooks4.useDidUpdate)(() => {
    handleStateChange(mounted);
  }, [mounted]);
  (0, import_react20.useEffect)(() => () => window.clearTimeout(timeoutRef.current), []);
  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || "ease"
  };
}

// ../Transition/src/Transition.tsx
function Transition({
  keepMounted,
  transition,
  duration = 250,
  exitDuration = duration,
  mounted,
  children,
  timingFunction = "ease",
  onExit,
  onEntered,
  onEnter,
  onExited
}) {
  const { transitionDuration, transitionStatus, transitionTimingFunction } = useTransition({
    mounted,
    exitDuration,
    duration,
    timingFunction,
    onExit,
    onEntered,
    onEnter,
    onExited
  });
  if (transitionDuration === 0) {
    return mounted ? /* @__PURE__ */ import_react21.default.createElement(import_react21.default.Fragment, null, children({})) : keepMounted ? children({ display: "none" }) : null;
  }
  return transitionStatus === "exited" ? keepMounted ? children({ display: "none" }) : null : /* @__PURE__ */ import_react21.default.createElement(import_react21.default.Fragment, null, children(
    getTransitionStyles({
      transition,
      duration: transitionDuration,
      state: transitionStatus,
      timingFunction: transitionTimingFunction
    })
  ));
}
Transition.displayName = "@raikou/core/Transition";

// ../FocusTrap/src/FocusTrap.tsx
var import_react22 = require("react");
var import_hooks5 = require("@raikou/hooks");
var import_core14 = require("@raikou/core");
function FocusTrap({
  children,
  active = true,
  refProp = "ref"
}) {
  const focusTrapRef = (0, import_hooks5.useFocusTrap)(active);
  const ref = (0, import_hooks5.useMergedRef)(focusTrapRef, children == null ? void 0 : children.ref);
  if (!(0, import_core14.isElement)(children)) {
    return children;
  }
  return (0, import_react22.cloneElement)(children, { [refProp]: ref });
}
FocusTrap.displayName = "@raikou/core/FocusTrap";

// ../Paper/src/Paper.tsx
var import_react23 = __toESM(require("react"));
var import_core15 = require("@raikou/core");
var defaultProps7 = {};
var varsResolver4 = (0, import_core15.createVarsResolver)(
  (_, { radius, shadow }) => ({
    root: {
      "--paper-radius": (0, import_core15.getRadius)(radius),
      "--paper-shadow": (0, import_core15.getShadow)(shadow)
    }
  })
);
var Paper = (0, import_core15.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core15.useProps)("Paper", defaultProps7, _props);
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
  const getStyles = (0, import_core15.useStyles)({
    name: "Paper",
    props,
    classes: {
      root: "paper-root"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver4
  });
  return /* @__PURE__ */ import_react23.default.createElement(
    import_core15.Box,
    __spreadValues(__spreadProps(__spreadValues({
      ref,
      mod: { "data-with-border": withBorder }
    }, getStyles("root")), {
      variant
    }), others)
  );
});
Paper.displayName = "@raikou/core/Paper";

// src/ModalBaseContent.tsx
var ModalBaseContent = (0, import_react24.forwardRef)(
  (_a, ref) => {
    var _b = _a, { transitionProps, className, innerProps, onKeyDown, style } = _b, others = __objRest(_b, ["transitionProps", "className", "innerProps", "onKeyDown", "style"]);
    const ctx = useModalBaseContext();
    const handleKeyDown = (event) => {
      var _a2;
      const shouldTrigger = ((_a2 = event.target) == null ? void 0 : _a2.getAttribute(
        "data-raikou-stop-propagation"
      )) !== "true";
      shouldTrigger && event.key === "Escape" && ctx.closeOnEscape && ctx.onClose();
      onKeyDown == null ? void 0 : onKeyDown(event);
    };
    return /* @__PURE__ */ import_react24.default.createElement(
      Transition,
      __spreadValues(__spreadValues({
        mounted: ctx.opened,
        transition: "pop"
      }, ctx.transitionProps), transitionProps),
      (transitionStyles) => /* @__PURE__ */ import_react24.default.createElement(
        "div",
        __spreadProps(__spreadValues({}, innerProps), {
          className: (0, import_clsx6.default)("modalBase-inner", innerProps.className)
        }),
        /* @__PURE__ */ import_react24.default.createElement(FocusTrap, { active: ctx.opened && ctx.trapFocus }, /* @__PURE__ */ import_react24.default.createElement(
          Paper,
          __spreadProps(__spreadValues({}, others), {
            component: "section",
            role: "dialog",
            tabIndex: -1,
            "aria-modal": true,
            "aria-describedby": ctx.bodyMounted ? ctx.getBodyId() : void 0,
            "aria-labelledby": ctx.titleMounted ? ctx.getTitleId() : void 0,
            onKeyDown: handleKeyDown,
            ref,
            style: [style, transitionStyles],
            className: (0, import_clsx6.default)("modalBase-content", className)
          }),
          others.children
        ))
      )
    );
  }
);

// src/ModalBaseHeader.tsx
var import_react25 = __toESM(require("react"));
var import_clsx7 = __toESM(require("clsx"));
var import_core16 = require("@raikou/core");
var ModalBaseHeader = (0, import_react25.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react25.default.createElement(import_core16.Box, __spreadValues({ ref, className: (0, import_clsx7.default)("modalBase-header", className) }, others));
  }
);
ModalBaseHeader.displayName = "@raikou/core/ModalBaseHeader";

// src/ModalBaseOverlay.tsx
var import_react27 = __toESM(require("react"));

// ../Overlay/src/Overlay.tsx
var import_react26 = __toESM(require("react"));
var import_core17 = require("@raikou/core");
var defaultProps8 = {
  color: "#000",
  backgroundOpacity: 0.6,
  zIndex: (0, import_core17.getDefaultZIndex)("modal"),
  radius: 0
};
var varsResolver5 = (0, import_core17.createVarsResolver)(
  (_, { gradient, color, backgroundOpacity, blur, radius, zIndex }) => ({
    root: {
      "--overlay-bg": gradient || (0, import_core17.rgba)(color || "#000", backgroundOpacity != null ? backgroundOpacity : 0.6),
      "--overlay-filter": blur ? `blur(${(0, import_core17.rem)(blur)})` : void 0,
      "--overlay-radius": (0, import_core17.getRadius)(radius),
      "--overlay-z-index": zIndex == null ? void 0 : zIndex.toString()
    }
  })
);
var Overlay = (0, import_core17.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core17.useProps)("Overlay", defaultProps8, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    fixed,
    center,
    children,
    radius,
    zIndex,
    gradient,
    blur,
    color,
    backgroundOpacity
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "fixed",
    "center",
    "children",
    "radius",
    "zIndex",
    "gradient",
    "blur",
    "color",
    "backgroundOpacity"
  ]);
  const getStyles = (0, import_core17.useStyles)({
    name: "Overlay",
    props,
    classes: {
      root: "overlay-root"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver5
  });
  return /* @__PURE__ */ import_react26.default.createElement(import_core17.Box, __spreadValues(__spreadProps(__spreadValues({ ref }, getStyles("root")), { mod: { center, fixed } }), others), children);
});
Overlay.displayName = "@raikou/core/Overlay";

// src/use-modal-transition.ts
var DEFAULT_TRANSITION = {
  duration: 200,
  timingFunction: "ease",
  transition: "fade"
};
function useModalTransition(transitionOverride) {
  const ctx = useModalBaseContext();
  return __spreadValues(__spreadValues(__spreadValues({}, DEFAULT_TRANSITION), ctx.transitionProps), transitionOverride);
}

// src/ModalBaseOverlay.tsx
var ModalBaseOverlay = (0, import_react27.forwardRef)((_a, ref) => {
  var _b = _a, { onClick, transitionProps, style } = _b, others = __objRest(_b, ["onClick", "transitionProps", "style"]);
  const ctx = useModalBaseContext();
  const transition = useModalTransition(transitionProps);
  return /* @__PURE__ */ import_react27.default.createElement(Transition, __spreadProps(__spreadValues({ mounted: ctx.opened }, transition), { transition: "fade" }), (transitionStyles) => /* @__PURE__ */ import_react27.default.createElement(
    Overlay,
    __spreadValues({
      ref,
      fixed: true,
      style: [style, transitionStyles],
      zIndex: ctx.zIndex,
      radius: 0,
      onClick: (event) => {
        onClick == null ? void 0 : onClick(event);
        ctx.closeOnClickOutside && ctx.onClose();
      }
    }, others)
  ));
});
ModalBaseOverlay.displayName = "@raikou/core/ModalBaseOverlay";

// src/ModalBaseTitle.tsx
var import_react29 = __toESM(require("react"));
var import_clsx8 = __toESM(require("clsx"));
var import_core18 = require("@raikou/core");

// src/use-modal-title-id.ts
var import_react28 = require("react");
function useModalTitle() {
  const ctx = useModalBaseContext();
  (0, import_react28.useEffect)(() => {
    ctx.setTitleMounted(true);
    return () => ctx.setTitleMounted(false);
  }, []);
  return ctx.getTitleId();
}

// src/ModalBaseTitle.tsx
var ModalBaseTitle = (0, import_react29.forwardRef)((_a, ref) => {
  var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
  const id = useModalTitle();
  return /* @__PURE__ */ import_react29.default.createElement(
    import_core18.Box,
    __spreadProps(__spreadValues({
      component: "h2",
      ref,
      className: (0, import_clsx8.default)("modalBase-title", className)
    }, others), {
      id
    })
  );
});
ModalBaseTitle.displayName = "@raikou/core/ModalBaseTitle";

// src/NativeScrollArea.tsx
var import_react30 = __toESM(require("react"));
function NativeScrollArea({ children }) {
  return /* @__PURE__ */ import_react30.default.createElement(import_react30.default.Fragment, null, children);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ModalBase,
  ModalBaseBody,
  ModalBaseCloseButton,
  ModalBaseContent,
  ModalBaseHeader,
  ModalBaseOverlay,
  ModalBaseTitle,
  NativeScrollArea
});
