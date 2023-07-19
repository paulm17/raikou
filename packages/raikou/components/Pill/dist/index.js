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
  Pill: () => Pill,
  PillGroup: () => PillGroup
});
module.exports = __toCommonJS(src_exports);

// src/Pill.tsx
var import_react13 = __toESM(require("react"));
var import_core10 = require("@raikou/core");

// ../CloseButton/src/CloseIcon.tsx
var import_react = __toESM(require("react"));
var CloseIcon = (0, import_react.forwardRef)(
  (_a, ref) => {
    var _b = _a, { size = "var(--cb-icon-size)", style } = _b, others = __objRest(_b, ["size", "style"]);
    return /* @__PURE__ */ import_react.default.createElement(
      "svg",
      __spreadValues({
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: __spreadProps(__spreadValues({}, style), { width: size, height: size }),
        ref
      }, others),
      /* @__PURE__ */ import_react.default.createElement(
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
var import_react9 = __toESM(require("react"));
var import_core8 = require("@raikou/core");

// ../ActionIcon/src/ActionIcon.tsx
var import_react8 = __toESM(require("react"));
var import_core7 = require("@raikou/core");

// ../UnstyledButton/src/UnstyledButton.tsx
var import_react2 = __toESM(require("react"));
var import_core = require("@raikou/core");
var defaultProps = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = (0, import_core.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core.useProps)("UnstyledButton", defaultProps, _props);
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
    const getStyles = (0, import_core.useStyles)({
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
    return /* @__PURE__ */ import_react2.default.createElement(
      import_core.Box,
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
var import_react6 = __toESM(require("react"));
var import_core5 = require("@raikou/core");

// ../Loader/src/loaders/Bars.tsx
var import_react3 = __toESM(require("react"));

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
var import_core2 = require("@raikou/core");
var Bars = (0, import_react3.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react3.default.createElement(
      import_core2.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_m_default("bars-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react3.default.createElement("span", { className: "bar" }),
      /* @__PURE__ */ import_react3.default.createElement("span", { className: "bar" }),
      /* @__PURE__ */ import_react3.default.createElement("span", { className: "bar" })
    );
  }
);

// ../Loader/src/loaders/Oval.tsx
var import_react4 = __toESM(require("react"));
var import_core3 = require("@raikou/core");
var Oval = (0, import_react4.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react4.default.createElement(
      import_core3.Box,
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
var import_react5 = __toESM(require("react"));
var import_core4 = require("@raikou/core");
var Dots = (0, import_react5.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react5.default.createElement(
      import_core4.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_m_default("dots-loader", className)
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

// ../ActionIcon/src/ActionIconGroup/ActionIconGroup.tsx
var import_react7 = __toESM(require("react"));
var import_core6 = require("@raikou/core");
var defaultProps3 = {
  orientation: "horizontal",
  borderWidth: 1
};
var varsResolver2 = (0, import_core6.createVarsResolver)(
  (_, { borderWidth }) => ({
    root: { "--ai-border-width": (0, import_core6.rem)(borderWidth) }
  })
);
var ActionIconGroup = (0, import_core6.factory)(
  (_props, ref) => {
    const props = (0, import_core6.useProps)("ActionIconGroup", defaultProps3, _props);
    const _a = (0, import_core6.useProps)("ActionIconGroup", defaultProps3, _props), {
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
    const getStyles = (0, import_core6.useStyles)({
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
    return /* @__PURE__ */ import_react7.default.createElement(
      import_core6.Box,
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
var varsResolver3 = (0, import_core7.createVarsResolver)(
  (theme, { size, radius, variant, gradient, color }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant
    });
    return {
      root: {
        "--ai-size": (0, import_core7.getSize)(size, "ai-size"),
        "--ai-radius": (0, import_core7.getRadius)(radius),
        "--ai-bg": colors.background,
        "--ai-hover": colors.hover,
        "--ai-color": colors.color,
        "--ai-bd": colors.border
      }
    };
  }
);
var ActionIcon = (0, import_core7.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core7.useProps)("ActionIcon", defaultProps4, _props);
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
    const getStyles = (0, import_core7.useStyles)({
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
    return /* @__PURE__ */ import_react8.default.createElement(
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
      loading ? /* @__PURE__ */ import_react8.default.createElement(
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
var CloseButton = (0, import_core8.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core8.useProps)("CloseButton", defaultProps5, _props);
    const _a = props, { iconSize, children, vars } = _a, others = __objRest(_a, ["iconSize", "children", "vars"]);
    return /* @__PURE__ */ import_react9.default.createElement(
      ActionIcon,
      __spreadProps(__spreadValues({
        ref
      }, others), {
        __vars: { "--cb-icon-size": (0, import_core8.rem)(iconSize) },
        __staticSelector: "CloseButton"
      }),
      /* @__PURE__ */ import_react9.default.createElement(CloseIcon, null),
      children
    );
  }
);
CloseButton.classes = ActionIcon.classes;
CloseButton.displayName = "@raikou/core/CloseButton";

// src/PillGroup/PillGroup.tsx
var import_react12 = __toESM(require("react"));
var import_core9 = require("@raikou/core");

// ../_utils/create-safe-context/create-safe-context.tsx
var import_react10 = __toESM(require("react"));

// ../_utils/create-optional-context/create-optional-context.tsx
var import_react11 = __toESM(require("react"));
function createOptionalContext(initialValue = null) {
  const Context = (0, import_react11.createContext)(initialValue);
  const useOptionalContext = () => (0, import_react11.useContext)(Context);
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react11.default.createElement(Context.Provider, { value }, children);
  return [Provider, useOptionalContext];
}

// src/PillGroup.context.ts
var [PillGroupProvider, usePillGroupContext] = createOptionalContext();

// ../PillsInput/src/PillsInput.context.ts
var [PillsInputProvider, usePillsInputContext] = createOptionalContext();

// src/PillGroup/PillGroup.tsx
var defaultProps6 = {};
var varsResolver4 = (0, import_core9.createVarsResolver)(
  (_, { gap }, { size }) => ({
    group: {
      "--pg-gap": typeof gap !== "undefined" ? (0, import_core9.getSize)(gap) : (0, import_core9.getSize)(size, "pg-gap")
    }
  })
);
var PillGroup = (0, import_core9.factory)((_props, ref) => {
  const props = (0, import_core9.useProps)("PillGroup", defaultProps6, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    disabled
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "size",
    "disabled"
  ]);
  const pillsInputCtx = usePillsInputContext();
  const _size = (pillsInputCtx == null ? void 0 : pillsInputCtx.size) || size || "sm";
  const getStyles = (0, import_core9.useStyles)({
    name: "PillGroup",
    classes: {
      group: "pill-group"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver4,
    stylesCtx: { size: _size },
    rootSelector: "group"
  });
  return /* @__PURE__ */ import_react12.default.createElement(PillGroupProvider, { value: { size: _size, disabled } }, /* @__PURE__ */ import_react12.default.createElement(import_core9.Box, __spreadValues(__spreadValues({ ref, size: _size }, getStyles("group")), others)));
});
PillGroup.displayName = "@raikou/core/PillGroup";

// src/Pill.tsx
var defaultProps7 = {
  radius: "xl",
  variant: "default"
};
var varsResolver5 = (0, import_core10.createVarsResolver)(
  (_, { radius }, { size }) => ({
    root: {
      "--pill-fz": (0, import_core10.getSize)(size, "pill-fz"),
      "--pill-height": (0, import_core10.getSize)(size, "pill-height"),
      "--pill-radius": (0, import_core10.getRadius)(radius)
    }
  })
);
var Pill = (0, import_core10.factory)((_props, ref) => {
  const props = (0, import_core10.useProps)("Pill", defaultProps7, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    variant,
    children,
    withRemoveButton,
    onRemove,
    removeButtonProps,
    radius,
    size,
    disabled
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "variant",
    "children",
    "withRemoveButton",
    "onRemove",
    "removeButtonProps",
    "radius",
    "size",
    "disabled"
  ]);
  const ctx = usePillGroupContext();
  const pillsInputCtx = usePillsInputContext();
  const _size = size || (ctx == null ? void 0 : ctx.size) || "sm";
  const _variant = (pillsInputCtx == null ? void 0 : pillsInputCtx.variant) === "filled" ? "contrast" : variant || "default";
  const getStyles = (0, import_core10.useStyles)({
    name: "Pill",
    classes: {
      root: "pill-root",
      label: "pill-label",
      remove: "pill-remove"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver5,
    stylesCtx: { size: _size }
  });
  return /* @__PURE__ */ import_react13.default.createElement(
    import_core10.Box,
    __spreadValues(__spreadProps(__spreadValues({
      component: "span",
      ref,
      variant: _variant,
      size: _size
    }, getStyles("root", { variant: _variant })), {
      mod: {
        "with-remove": withRemoveButton,
        disabled: disabled || (ctx == null ? void 0 : ctx.disabled)
      }
    }), others),
    /* @__PURE__ */ import_react13.default.createElement("span", __spreadValues({}, getStyles("label")), children),
    withRemoveButton && /* @__PURE__ */ import_react13.default.createElement(
      CloseButton,
      __spreadProps(__spreadValues(__spreadValues({
        iconSize: "70%",
        variant: "transparent",
        radius,
        tabIndex: -1,
        "aria-hidden": true
      }, removeButtonProps), getStyles("remove", {
        className: removeButtonProps == null ? void 0 : removeButtonProps.className,
        style: removeButtonProps == null ? void 0 : removeButtonProps.style
      })), {
        onMouseDown: (event) => {
          var _a2;
          event.preventDefault();
          event.stopPropagation();
          (_a2 = removeButtonProps == null ? void 0 : removeButtonProps.onMouseDown) == null ? void 0 : _a2.call(removeButtonProps, event);
        },
        onClick: (event) => {
          var _a2;
          event.stopPropagation();
          onRemove == null ? void 0 : onRemove();
          (_a2 = removeButtonProps == null ? void 0 : removeButtonProps.onClick) == null ? void 0 : _a2.call(removeButtonProps, event);
        }
      })
    )
  );
});
Pill.displayName = "@raikou/core/Pill";
Pill.Group = PillGroup;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Pill,
  PillGroup
});