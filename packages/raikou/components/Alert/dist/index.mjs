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

// src/Alert.tsx
import React10 from "react";
import {
  Box as Box7,
  factory as factory3,
  useProps as useProps6,
  useStyles as useStyles5,
  createVarsResolver as createVarsResolver4,
  getRadius as getRadius2,
  useId
} from "@raikou/core";

// ../CloseButton/src/CloseIcon.tsx
import React, { forwardRef } from "react";
var CloseIcon = forwardRef(
  (_a, ref) => {
    var _b = _a, { size = "var(--cb-icon-size)", style } = _b, others = __objRest(_b, ["size", "style"]);
    return /* @__PURE__ */ React.createElement(
      "svg",
      __spreadValues({
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: __spreadProps(__spreadValues({}, style), { width: size, height: size }),
        ref
      }, others),
      /* @__PURE__ */ React.createElement(
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
import React9 from "react";
import {
  polymorphicFactory as polymorphicFactory3,
  useProps as useProps5,
  rem as rem2
} from "@raikou/core";

// ../ActionIcon/src/ActionIcon.tsx
import React8 from "react";
import {
  useProps as useProps4,
  useStyles as useStyles4,
  getRadius,
  polymorphicFactory as polymorphicFactory2,
  getSize as getSize2,
  createVarsResolver as createVarsResolver3
} from "@raikou/core";

// ../UnstyledButton/src/UnstyledButton.tsx
import React2 from "react";
import {
  Box,
  useProps,
  useStyles,
  polymorphicFactory
} from "@raikou/core";
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
      classes: {
        root: "unstyled-button-root"
      },
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ React2.createElement(
      Box,
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
import React6 from "react";
import {
  Box as Box5,
  useProps as useProps2,
  getThemeColor,
  useStyles as useStyles2,
  factory,
  getSize,
  createVarsResolver
} from "@raikou/core";

// ../Loader/src/loaders/Bars.tsx
import React3, { forwardRef as forwardRef2 } from "react";

// ../../../../node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
function toVal(mix) {
  var k, y, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += " ");
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }
  return str;
}
function clsx_m_default() {
  var i = 0, tmp, x, str = "";
  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (x = toVal(tmp)) {
        str && (str += " ");
        str += x;
      }
    }
  }
  return str;
}

// ../Loader/src/loaders/Bars.tsx
import { Box as Box2 } from "@raikou/core";
var Bars = forwardRef2(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React3.createElement(
      Box2,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_m_default("bars-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React3.createElement("span", { className: "bar" }),
      /* @__PURE__ */ React3.createElement("span", { className: "bar" }),
      /* @__PURE__ */ React3.createElement("span", { className: "bar" })
    );
  }
);

// ../Loader/src/loaders/Oval.tsx
import React4, { forwardRef as forwardRef3 } from "react";
import { Box as Box3 } from "@raikou/core";
var Oval = forwardRef3(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React4.createElement(
      Box3,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_m_default("oval-loader", className)
      }, others), {
        ref
      })
    );
  }
);

// ../Loader/src/loaders/Dots.tsx
import React5, { forwardRef as forwardRef4 } from "react";
import { Box as Box4 } from "@raikou/core";
var Dots = forwardRef4(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React5.createElement(
      Box4,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_m_default("dots-loader", className)
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

// ../Loader/src/Loader.tsx
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
  return /* @__PURE__ */ React6.createElement(
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

// ../ActionIcon/src/ActionIconGroup/ActionIconGroup.tsx
import React7 from "react";
import {
  factory as factory2,
  Box as Box6,
  useProps as useProps3,
  useStyles as useStyles3,
  rem,
  createVarsResolver as createVarsResolver2
} from "@raikou/core";
var defaultProps3 = {
  orientation: "horizontal",
  borderWidth: 1
};
var varsResolver2 = createVarsResolver2(
  (_, { borderWidth }) => ({
    root: { "--ai-border-width": rem(borderWidth) }
  })
);
var ActionIconGroup = factory2(
  (_props, ref) => {
    const props = useProps3("ActionIconGroup", defaultProps3, _props);
    const _a = useProps3("ActionIconGroup", defaultProps3, _props), {
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
        root: "actionIconGroup-root"
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
      Box6,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
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
var defaultProps4 = {
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
    const props = useProps4("ActionIcon", defaultProps4, _props);
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
    return /* @__PURE__ */ React8.createElement(
      UnstyledButton,
      __spreadProps(__spreadValues(__spreadValues({}, getStyles("root", {
        active: !disabled && !loading && !dataDisabled
      })), others), {
        unstyled,
        variant,
        size,
        disabled: disabled || loading,
        ref,
        mod: ["action-icon", { loading, disabled: disabled || dataDisabled }]
      }),
      loading ? /* @__PURE__ */ React8.createElement(
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
var defaultProps5 = {
  iconSize: "70%",
  variant: "subtle",
  color: "gray"
};
var CloseButton = polymorphicFactory3(
  (_props, ref) => {
    const props = useProps5("CloseButton", defaultProps5, _props);
    const _a = props, { iconSize, children, vars } = _a, others = __objRest(_a, ["iconSize", "children", "vars"]);
    return /* @__PURE__ */ React9.createElement(
      ActionIcon,
      __spreadProps(__spreadValues({
        ref
      }, others), {
        __vars: { "--cb-icon-size": rem2(iconSize) },
        __staticSelector: "CloseButton"
      }),
      /* @__PURE__ */ React9.createElement(CloseIcon, null),
      children
    );
  }
);
CloseButton.classes = ActionIcon.classes;
CloseButton.displayName = "@raikou/core/CloseButton";

// src/Alert.tsx
var defaultProps6 = {
  variant: "light"
};
var varsResolver4 = createVarsResolver4(
  (theme, { radius, color, variant }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      variant
    });
    return {
      root: {
        "--alert-radius": getRadius2(radius),
        "--alert-bg": colors.background,
        "--alert-color": colors.color,
        "--alert-bd": colors.border
      }
    };
  }
);
var Alert = factory3((_props, ref) => {
  const props = useProps6("Alert", defaultProps6, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    radius,
    color,
    title,
    children,
    id,
    icon,
    withCloseButton,
    onClose,
    closeButtonLabel,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "radius",
    "color",
    "title",
    "children",
    "id",
    "icon",
    "withCloseButton",
    "onClose",
    "closeButtonLabel",
    "variant"
  ]);
  const getStyles = useStyles5({
    name: "Alert",
    classes: {
      root: "alert-root",
      body: "alert-body",
      label: "alert-label",
      title: "alert-title",
      icon: "alert-icon",
      wrapper: "alert-wrapper",
      message: "alert-message",
      closeButton: "alert-closeButton"
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
  const rootId = `${useId()}-${id}`;
  const titleId = title && `${rootId}-title` || void 0;
  const bodyId = `${rootId}-body`;
  return /* @__PURE__ */ React10.createElement(
    Box7,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({
      id: rootId
    }, getStyles("root", { variant })), {
      variant,
      ref
    }), others), {
      role: "alert",
      "aria-describedby": bodyId,
      "aria-labelledby": titleId
    }),
    /* @__PURE__ */ React10.createElement("div", __spreadValues({}, getStyles("wrapper")), icon && /* @__PURE__ */ React10.createElement("div", __spreadValues({}, getStyles("icon")), icon), /* @__PURE__ */ React10.createElement("div", __spreadValues({}, getStyles("body")), title && /* @__PURE__ */ React10.createElement(
      "div",
      __spreadProps(__spreadValues({}, getStyles("title")), {
        "data-with-close-button": withCloseButton || void 0
      }),
      /* @__PURE__ */ React10.createElement("span", __spreadValues({ id: titleId }, getStyles("label")), title)
    ), /* @__PURE__ */ React10.createElement("div", __spreadValues({ id: bodyId }, getStyles("message")), children)), withCloseButton && /* @__PURE__ */ React10.createElement(
      CloseButton,
      __spreadProps(__spreadValues({}, getStyles("closeButton")), {
        onClick: onClose,
        variant: "transparent",
        size: 16,
        iconSize: 16,
        "aria-label": closeButtonLabel
      })
    ))
  );
});
Alert.displayName = "@raikou/core/Alert";
export {
  Alert
};
