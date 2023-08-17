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

// src/ModalBase.tsx
import React5, { forwardRef as forwardRef2 } from "react";
import { RemoveScroll } from "react-remove-scroll";
import {
  Box,
  getDefaultZIndex,
  getShadow,
  getSpacing
} from "@raikou/core";

// ../Portal/src/Portal.tsx
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

// ../Portal/src/OptionalPortal.tsx
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

// ../_utils/create-safe-context/create-safe-context.tsx
import React3, { createContext, useContext } from "react";
function createSafeContext(errorMessage) {
  const Context = createContext(null);
  const useSafeContext = () => {
    const ctx = useContext(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ React3.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../_utils/create-optional-context/create-optional-context.tsx
import React4, { createContext as createContext2, useContext as useContext2 } from "react";

// ../_utils/use-hovered/use-hovered.ts
import { useState as useState2 } from "react";

// ../_utils/create-use-external-events/create-use-external-events.ts
import { useEffect, useLayoutEffect } from "react";

// src/ModalBase.context.ts
var [ModalBaseProvider, useModalBaseContext] = createSafeContext(
  "ModalBase component was not found in tree"
);

// src/use-modal.ts
import { useState as useState4 } from "react";
import { useId, useWindowEvent, useFocusReturn } from "@raikou/hooks";

// src/use-lock-scroll.ts
import { useState as useState3, useEffect as useEffect2, useRef as useRef2 } from "react";
import { useReducedMotion } from "@raikou/hooks";
function useLockScroll({ opened, transitionDuration }) {
  const [shouldLockScroll, setShouldLockScroll] = useState3(opened);
  const timeout = useRef2();
  const reduceMotion = useReducedMotion();
  const _transitionDuration = reduceMotion ? 0 : transitionDuration;
  useEffect2(() => {
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
  const _id = useId(id);
  const [titleMounted, setTitleMounted] = useState4(false);
  const [bodyMounted, setBodyMounted] = useState4(false);
  const transitionDuration = typeof (transitionProps == null ? void 0 : transitionProps.duration) === "number" ? transitionProps == null ? void 0 : transitionProps.duration : 200;
  const shouldLockScroll = useLockScroll({ opened, transitionDuration });
  useWindowEvent("keydown", (event) => {
    if (!trapFocus && event.key === "Escape" && closeOnEscape) {
      onClose();
    }
  });
  useFocusReturn({ opened, shouldReturnFocus: trapFocus && returnFocus });
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
var ModalBase = forwardRef2(
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
    return /* @__PURE__ */ React5.createElement(OptionalPortal, __spreadProps(__spreadValues({}, portalProps), { withinPortal }), /* @__PURE__ */ React5.createElement(
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
      /* @__PURE__ */ React5.createElement(RemoveScroll, { enabled: shouldLockScroll && lockScroll }, /* @__PURE__ */ React5.createElement(
        Box,
        __spreadProps(__spreadValues({
          ref
        }, others), {
          __vars: __spreadProps(__spreadValues({}, __vars), {
            "--mb-z-index": (zIndex || getDefaultZIndex("modal")).toString(),
            "--mb-shadow": getShadow(shadow),
            "--mb-padding": getSpacing(padding)
          })
        }),
        children
      ))
    ));
  }
);

// src/ModalBaseBody.tsx
import React6, { forwardRef as forwardRef3 } from "react";
import cx from "clsx";
import { Box as Box2 } from "@raikou/core";

// src/use-modal-body-id.ts
import { useEffect as useEffect3 } from "react";
function useModalBodyId() {
  const ctx = useModalBaseContext();
  useEffect3(() => {
    ctx.setBodyMounted(true);
    return () => ctx.setBodyMounted(false);
  }, []);
  return ctx.getBodyId();
}

// src/ModalBaseBody.tsx
var ModalBaseBody = forwardRef3(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    const bodyId = useModalBodyId();
    return /* @__PURE__ */ React6.createElement(
      Box2,
      __spreadProps(__spreadValues({
        ref
      }, others), {
        id: bodyId,
        className: cx("modalBase-body", className)
      })
    );
  }
);
ModalBaseBody.displayName = "@raikou/core/ModalBaseBody";

// src/ModalBaseCloseButton.tsx
import React16, { forwardRef as forwardRef8 } from "react";
import cx5 from "clsx";

// ../CloseButton/src/CloseIcon.tsx
import React7, { forwardRef as forwardRef4 } from "react";
var CloseIcon = forwardRef4(
  (_a, ref) => {
    var _b = _a, { size = "var(--cb-icon-size)", style } = _b, others = __objRest(_b, ["size", "style"]);
    return /* @__PURE__ */ React7.createElement(
      "svg",
      __spreadValues({
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: __spreadProps(__spreadValues({}, style), { width: size, height: size }),
        ref
      }, others),
      /* @__PURE__ */ React7.createElement(
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
import React15 from "react";
import {
  polymorphicFactory as polymorphicFactory3,
  useProps as useProps6,
  rem as rem2
} from "@raikou/core";

// ../ActionIcon/src/ActionIcon.tsx
import React14 from "react";
import {
  useProps as useProps5,
  useStyles as useStyles4,
  getRadius,
  polymorphicFactory as polymorphicFactory2,
  getSize as getSize2,
  createVarsResolver as createVarsResolver3
} from "@raikou/core";

// ../UnstyledButton/src/UnstyledButton.tsx
import React8 from "react";
import {
  Box as Box3,
  useProps as useProps2,
  useStyles,
  polymorphicFactory
} from "@raikou/core";
var defaultProps2 = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = polymorphicFactory(
  (_props, ref) => {
    const props = useProps2("UnstyledButton", defaultProps2, _props);
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
    return /* @__PURE__ */ React8.createElement(
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

// ../Loader/src/Loader.tsx
import React12 from "react";
import {
  Box as Box7,
  useProps as useProps3,
  getThemeColor,
  useStyles as useStyles2,
  factory,
  getSize,
  createVarsResolver
} from "@raikou/core";

// ../Loader/src/loaders/Bars.tsx
import React9, { forwardRef as forwardRef5 } from "react";
import cx2 from "clsx";
import { Box as Box4 } from "@raikou/core";
var Bars = forwardRef5(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React9.createElement(
      Box4,
      __spreadProps(__spreadValues({
        component: "span",
        className: cx2("bars-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React9.createElement("span", { className: "bar" }),
      /* @__PURE__ */ React9.createElement("span", { className: "bar" }),
      /* @__PURE__ */ React9.createElement("span", { className: "bar" })
    );
  }
);

// ../Loader/src/loaders/Oval.tsx
import React10, { forwardRef as forwardRef6 } from "react";
import cx3 from "clsx";
import { Box as Box5 } from "@raikou/core";
var Oval = forwardRef6(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React10.createElement(
      Box5,
      __spreadProps(__spreadValues({
        component: "span",
        className: cx3("oval-loader", className)
      }, others), {
        ref
      })
    );
  }
);

// ../Loader/src/loaders/Dots.tsx
import React11, { forwardRef as forwardRef7 } from "react";
import cx4 from "clsx";
import { Box as Box6 } from "@raikou/core";
var Dots = forwardRef7(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React11.createElement(
      Box6,
      __spreadProps(__spreadValues({
        component: "span",
        className: cx4("dots-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React11.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React11.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React11.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React11.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React11.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React11.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React11.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React11.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React11.createElement("span", { className: "dot" })
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
var varsResolver = createVarsResolver(
  (theme, { size, color }) => ({
    root: {
      "--loader-size": getSize(size, "loader-size"),
      "--loader-color": getThemeColor(color, theme)
    }
  })
);
var Loader = factory((_props, ref) => {
  const props = useProps3("Loader", defaultProps3, _props);
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
  const getStyles = useStyles2({
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
  return /* @__PURE__ */ React12.createElement(
    Box7,
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
import React13 from "react";
import {
  factory as factory2,
  Box as Box8,
  useProps as useProps4,
  useStyles as useStyles3,
  rem,
  createVarsResolver as createVarsResolver2
} from "@raikou/core";
var defaultProps4 = {
  orientation: "horizontal",
  borderWidth: 1
};
var varsResolver2 = createVarsResolver2(
  (_, { borderWidth }) => ({
    group: { "--ai-border-width": rem(borderWidth) }
  })
);
var ActionIconGroup = factory2(
  (_props, ref) => {
    const props = useProps4("ActionIconGroup", defaultProps4, _props);
    const _a = useProps4("ActionIconGroup", defaultProps4, _props), {
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
    const getStyles = useStyles3({
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
    return /* @__PURE__ */ React13.createElement(
      Box8,
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
var varsResolver3 = createVarsResolver3(
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
var ActionIcon = polymorphicFactory2(
  (_props, ref) => {
    const props = useProps5("ActionIcon", defaultProps5, _props);
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
    const getStyles = useStyles4({
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
    return /* @__PURE__ */ React14.createElement(
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
      loading ? /* @__PURE__ */ React14.createElement(
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
var CloseButton = polymorphicFactory3(
  (_props, ref) => {
    const props = useProps6("CloseButton", defaultProps6, _props);
    const _a = props, { iconSize, children, vars } = _a, others = __objRest(_a, ["iconSize", "children", "vars"]);
    return /* @__PURE__ */ React15.createElement(
      ActionIcon,
      __spreadProps(__spreadValues({
        ref
      }, others), {
        __vars: { "--cb-icon-size": rem2(iconSize) },
        __staticSelector: "CloseButton"
      }),
      /* @__PURE__ */ React15.createElement(CloseIcon, null),
      children
    );
  }
);
CloseButton.displayName = "@raikou/core/CloseButton";

// src/ModalBaseCloseButton.tsx
var ModalBaseCloseButton = forwardRef8((_a, ref) => {
  var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
  const ctx = useModalBaseContext();
  return (
    // @ts-ignore
    /* @__PURE__ */ React16.createElement(
      CloseButton,
      __spreadProps(__spreadValues({
        ref
      }, others), {
        onClick: ctx.onClose,
        className: cx5("modalBase-close", className)
      })
    )
  );
});
ModalBaseCloseButton.displayName = "@raikou/core/ModalBaseCloseButton";

// src/ModalBaseContent.tsx
import React20, { forwardRef as forwardRef9 } from "react";
import cx6 from "clsx";

// ../Transition/src/transitions.ts
import { rem as rem3 } from "@raikou/core";
var popIn = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${rem3(10)})` },
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
      transform: `translateY(-${rem3(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: {
      opacity: 0,
      transform: `translateY(${rem3(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${rem3(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${rem3(20)}) rotate(5deg)` },
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
import React17 from "react";

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
import { useState as useState5, useEffect as useEffect4, useRef as useRef3 } from "react";
import { useReducedMotion as useReducedMotion2, useDidUpdate } from "@raikou/hooks";
import { useRaikouTheme } from "@raikou/core";
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
  const theme = useRaikouTheme();
  const shouldReduceMotion = useReducedMotion2();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionDuration, setTransitionDuration] = useState5(
    reduceMotion ? 0 : duration
  );
  const [transitionStatus, setStatus] = useState5(
    mounted ? "entered" : "exited"
  );
  const timeoutRef = useRef3(-1);
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
  useDidUpdate(() => {
    handleStateChange(mounted);
  }, [mounted]);
  useEffect4(() => () => window.clearTimeout(timeoutRef.current), []);
  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || "ease"
  };
}

// ../Transition/src/Transition.tsx
function Transition({
  keepMounted,
  transition = "fade",
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
    return mounted ? /* @__PURE__ */ React17.createElement(React17.Fragment, null, children({})) : keepMounted ? children({ display: "none" }) : null;
  }
  return transitionStatus === "exited" ? keepMounted ? children({ display: "none" }) : null : /* @__PURE__ */ React17.createElement(React17.Fragment, null, children(
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
import { cloneElement } from "react";
import { useFocusTrap, useMergedRef } from "@raikou/hooks";
import { isElement } from "@raikou/core";
function FocusTrap({
  children,
  active = true,
  refProp = "ref"
}) {
  const focusTrapRef = useFocusTrap(active);
  const ref = useMergedRef(focusTrapRef, children == null ? void 0 : children.ref);
  if (!isElement(children)) {
    return children;
  }
  return cloneElement(children, { [refProp]: ref });
}
FocusTrap.displayName = "@raikou/core/FocusTrap";

// ../Paper/src/Paper.tsx
import React19 from "react";
import {
  Box as Box9,
  polymorphicFactory as polymorphicFactory4,
  useProps as useProps7,
  useStyles as useStyles5,
  getRadius as getRadius2,
  getShadow as getShadow2,
  createVarsResolver as createVarsResolver4
} from "@raikou/core";
var defaultProps7 = {};
var varsResolver4 = createVarsResolver4(
  (_, { radius, shadow }) => ({
    root: {
      "--paper-radius": getRadius2(radius),
      "--paper-shadow": getShadow2(shadow)
    }
  })
);
var Paper = polymorphicFactory4((_props, ref) => {
  const props = useProps7("Paper", defaultProps7, _props);
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
  const getStyles = useStyles5({
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
  return /* @__PURE__ */ React19.createElement(
    Box9,
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
var ModalBaseContent = forwardRef9(
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
    return /* @__PURE__ */ React20.createElement(
      Transition,
      __spreadValues(__spreadValues({
        mounted: ctx.opened,
        transition: "pop"
      }, ctx.transitionProps), transitionProps),
      (transitionStyles) => /* @__PURE__ */ React20.createElement(
        "div",
        __spreadProps(__spreadValues({}, innerProps), {
          className: cx6("modalBase-inner", innerProps.className)
        }),
        /* @__PURE__ */ React20.createElement(FocusTrap, { active: ctx.opened && ctx.trapFocus }, /* @__PURE__ */ React20.createElement(
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
            className: cx6("modalBase-content", className)
          }),
          others.children
        ))
      )
    );
  }
);
ModalBaseContent.displayName = "@raikou/core/ModalBaseContent";

// src/ModalBaseHeader.tsx
import React21, { forwardRef as forwardRef10 } from "react";
import cx7 from "clsx";
import { Box as Box10 } from "@raikou/core";
var ModalBaseHeader = forwardRef10(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React21.createElement(Box10, __spreadValues({ ref, className: cx7("modalBase-header", className) }, others));
  }
);
ModalBaseHeader.displayName = "@raikou/core/ModalBaseHeader";

// src/ModalBaseOverlay.tsx
import React23, { forwardRef as forwardRef11 } from "react";

// ../Overlay/src/Overlay.tsx
import React22 from "react";
import {
  Box as Box11,
  polymorphicFactory as polymorphicFactory5,
  useProps as useProps8,
  useStyles as useStyles6,
  createVarsResolver as createVarsResolver5,
  rgba,
  getDefaultZIndex as getDefaultZIndex2,
  getRadius as getRadius3,
  rem as rem4
} from "@raikou/core";
var defaultProps8 = {
  color: "#000",
  backgroundOpacity: 0.6,
  zIndex: getDefaultZIndex2("modal"),
  radius: 0
};
var varsResolver5 = createVarsResolver5(
  (_, { gradient, color, backgroundOpacity, blur, radius, zIndex }) => ({
    root: {
      "--overlay-bg": gradient || rgba(color || "#000", backgroundOpacity != null ? backgroundOpacity : 0.6),
      "--overlay-filter": blur ? `blur(${rem4(blur)})` : void 0,
      "--overlay-radius": getRadius3(radius),
      "--overlay-z-index": zIndex == null ? void 0 : zIndex.toString()
    }
  })
);
var Overlay = polymorphicFactory5((_props, ref) => {
  const props = useProps8("Overlay", defaultProps8, _props);
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
  const getStyles = useStyles6({
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
  return /* @__PURE__ */ React22.createElement(Box11, __spreadValues(__spreadProps(__spreadValues({ ref }, getStyles("root")), { mod: { center, fixed } }), others), children);
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
var ModalBaseOverlay = forwardRef11((_a, ref) => {
  var _b = _a, { onClick, transitionProps, style } = _b, others = __objRest(_b, ["onClick", "transitionProps", "style"]);
  const ctx = useModalBaseContext();
  const transition = useModalTransition(transitionProps);
  return /* @__PURE__ */ React23.createElement(Transition, __spreadProps(__spreadValues({ mounted: ctx.opened }, transition), { transition: "fade" }), (transitionStyles) => /* @__PURE__ */ React23.createElement(
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
import React24, { forwardRef as forwardRef12 } from "react";
import cx8 from "clsx";
import { Box as Box12 } from "@raikou/core";

// src/use-modal-title-id.ts
import { useEffect as useEffect5 } from "react";
function useModalTitle() {
  const ctx = useModalBaseContext();
  useEffect5(() => {
    ctx.setTitleMounted(true);
    return () => ctx.setTitleMounted(false);
  }, []);
  return ctx.getTitleId();
}

// src/ModalBaseTitle.tsx
var ModalBaseTitle = forwardRef12((_a, ref) => {
  var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
  const id = useModalTitle();
  return /* @__PURE__ */ React24.createElement(
    Box12,
    __spreadProps(__spreadValues({
      component: "h2",
      ref,
      className: cx8("modalBase-title", className)
    }, others), {
      id
    })
  );
});
ModalBaseTitle.displayName = "@raikou/core/ModalBaseTitle";

// src/NativeScrollArea.tsx
import React25 from "react";
function NativeScrollArea({ children }) {
  return /* @__PURE__ */ React25.createElement(React25.Fragment, null, children);
}
export {
  ModalBase,
  ModalBaseBody,
  ModalBaseCloseButton,
  ModalBaseContent,
  ModalBaseHeader,
  ModalBaseOverlay,
  ModalBaseTitle,
  NativeScrollArea
};
