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

// src/Pill.tsx
import React7 from "react";
import {
  Box as Box3,
  factory as factory2,
  useProps as useProps4,
  useStyles as useStyles4,
  createVarsResolver as createVarsResolver3,
  getSize as getSize3,
  getRadius as getRadius2
} from "@raikou/core";

// ../CloseButton/src/CloseIcon.tsx
import React, { forwardRef } from "react";
var CloseIcon = forwardRef(
  (_a, ref) => {
    var _b = _a, { size = "var(--cb-icon-size, 70%)", style } = _b, others = __objRest(_b, ["size", "style"]);
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
import React3 from "react";
import {
  polymorphicFactory as polymorphicFactory2,
  useProps as useProps2,
  rem,
  getSize,
  getRadius,
  createVarsResolver,
  useStyles as useStyles2
} from "@raikou/core";

// ../UnstyledButton/src/UnstyledButton.tsx
import React2 from "react";
import {
  Box,
  useProps,
  useStyles,
  polymorphicFactory
} from "@raikou/core";

// css-module:./UnstyledButton.module.css#css-module
var UnstyledButton_module_default = { "root": "m-87cf2631" };

// ../UnstyledButton/src/UnstyledButton.tsx
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
      classes: UnstyledButton_module_default,
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
UnstyledButton.classes = UnstyledButton_module_default;

// css-module:./CloseButton.module.css#css-module
var CloseButton_module_default = { "root": "m-86a44da5", "root--subtle": "m-220c80f2" };

// ../CloseButton/src/CloseButton.tsx
var defaultProps2 = {
  variant: "subtle",
  size: "md"
};
var varsResolver = createVarsResolver(
  (_, { size, radius, iconSize }) => ({
    root: {
      "--cb-size": getSize(size, "cb-size"),
      "--cb-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--cb-icon-size": rem(iconSize)
    }
  })
);
var CloseButton = polymorphicFactory2(
  (_props, ref) => {
    const props = useProps2("CloseButton", defaultProps2, _props);
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
    const getStyles = useStyles2({
      name: "CloseButton",
      props,
      className,
      style,
      classes: CloseButton_module_default,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver
    });
    return /* @__PURE__ */ React3.createElement(
      UnstyledButton,
      __spreadValues(__spreadProps(__spreadValues({
        ref
      }, others), {
        unstyled,
        variant,
        disabled,
        mod: { disabled: disabled || dataDisabled }
      }), getStyles("root", { variant, active: true })),
      /* @__PURE__ */ React3.createElement(CloseIcon, null),
      children
    );
  }
);
CloseButton.displayName = "@raikou/core/CloseButton";
CloseButton.classes = CloseButton_module_default;

// src/PillGroup/PillGroup.tsx
import React6 from "react";
import {
  Box as Box2,
  factory,
  useProps as useProps3,
  useStyles as useStyles3,
  createVarsResolver as createVarsResolver2,
  getSize as getSize2
} from "@raikou/core";

// ../_utils/create-safe-context/create-safe-context.tsx
import React4, { createContext, useContext } from "react";

// ../_utils/create-optional-context/create-optional-context.tsx
import React5, { createContext as createContext2, useContext as useContext2 } from "react";
function createOptionalContext(initialValue = null) {
  const Context = createContext2(initialValue);
  const useOptionalContext = () => useContext2(Context);
  const Provider = ({ children, value }) => /* @__PURE__ */ React5.createElement(Context.Provider, { value }, children);
  return [Provider, useOptionalContext];
}

// ../_utils/use-hovered/use-hovered.ts
import { useState } from "react";

// ../_utils/create-use-external-events/create-use-external-events.ts
import { useEffect, useLayoutEffect } from "react";

// src/PillGroup.context.ts
var [PillGroupProvider, usePillGroupContext] = createOptionalContext();

// ../PillsInput/src/PillsInput.context.ts
var [PillsInputProvider, usePillsInputContext] = createOptionalContext();

// css-module:../Pill.module.css#css-module
var Pill_module_default = { "root": "m-7cda1cd6", "root--default": "m-44da308b", "root--contrast": "m-e3a01f8", "label": "m-1e0e6180", "remove": "m-ae386778", "group": "m-1dcfd90b" };

// src/PillGroup/PillGroup.tsx
var defaultProps3 = {};
var varsResolver2 = createVarsResolver2(
  (_, { gap }, { size }) => ({
    group: {
      "--pg-gap": gap !== void 0 ? getSize2(gap) : getSize2(size, "pg-gap")
    }
  })
);
var PillGroup = factory((_props, ref) => {
  const props = useProps3("PillGroup", defaultProps3, _props);
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
  const _size = (pillsInputCtx == null ? void 0 : pillsInputCtx.size) || size || void 0;
  const getStyles = useStyles3({
    name: "PillGroup",
    classes: Pill_module_default,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver2,
    stylesCtx: { size: _size },
    rootSelector: "group"
  });
  return /* @__PURE__ */ React6.createElement(PillGroupProvider, { value: { size: _size, disabled } }, /* @__PURE__ */ React6.createElement(Box2, __spreadValues(__spreadValues({ ref, size: _size }, getStyles("group")), others)));
});
PillGroup.classes = Pill_module_default;
PillGroup.displayName = "@raikou/core/PillGroup";

// css-module:./Pill.module.css#css-module
var Pill_module_default2 = { "root": "m-7cda1cd6", "root--default": "m-44da308b", "root--contrast": "m-e3a01f8", "label": "m-1e0e6180", "remove": "m-ae386778", "group": "m-1dcfd90b" };

// src/Pill.tsx
var defaultProps4 = {
  variant: "default"
};
var varsResolver3 = createVarsResolver3(
  (_, { radius }, { size }) => ({
    root: {
      "--pill-fz": getSize3(size, "pill-fz"),
      "--pill-height": getSize3(size, "pill-height"),
      "--pill-radius": radius === void 0 ? void 0 : getRadius2(radius)
    }
  })
);
var Pill = factory2((_props, ref) => {
  const props = useProps4("Pill", defaultProps4, _props);
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
  const _size = size || (ctx == null ? void 0 : ctx.size) || void 0;
  const _variant = (pillsInputCtx == null ? void 0 : pillsInputCtx.variant) === "filled" ? "contrast" : variant || "default";
  const getStyles = useStyles4({
    name: "Pill",
    classes: Pill_module_default2,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver3,
    stylesCtx: { size: _size }
  });
  return /* @__PURE__ */ React7.createElement(
    Box3,
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
    /* @__PURE__ */ React7.createElement("span", __spreadValues({}, getStyles("label")), children),
    withRemoveButton && /* @__PURE__ */ React7.createElement(
      CloseButton,
      __spreadProps(__spreadValues(__spreadValues({
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
Pill.classes = Pill_module_default2;
Pill.displayName = "@raikou/core/Pill";
Pill.Group = PillGroup;
export {
  Pill,
  PillGroup
};
//# sourceMappingURL=index.mjs.map