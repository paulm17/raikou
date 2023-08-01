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

// src/Chip.tsx
import React5 from "react";
import { useId, useUncontrolled as useUncontrolled2 } from "@raikou/hooks";
import {
  Box,
  factory,
  useProps as useProps2,
  useStyles,
  createVarsResolver,
  extractStyleProps,
  getSize,
  getRadius,
  getFontSize
} from "@raikou/core";

// ../_utils/create-safe-context/create-safe-context.tsx
import React, { createContext, useContext } from "react";

// ../_utils/create-optional-context/create-optional-context.tsx
import React2, { createContext as createContext2, useContext as useContext2 } from "react";
function createOptionalContext(initialValue = null) {
  const Context = createContext2(initialValue);
  const useOptionalContext = () => useContext2(Context);
  const Provider = ({ children, value }) => /* @__PURE__ */ React2.createElement(Context.Provider, { value }, children);
  return [Provider, useOptionalContext];
}

// ../_utils/use-hovered/use-hovered.ts
import { useState } from "react";

// ../Checkbox/src/CheckIcon.tsx
import React3 from "react";
import { rem } from "@raikou/core";
function CheckIcon(_a) {
  var _b = _a, { size, style } = _b, others = __objRest(_b, ["size", "style"]);
  const _style = size !== void 0 ? __spreadValues({ width: rem(size), height: rem(size) }, style) : style;
  return /* @__PURE__ */ React3.createElement(
    "svg",
    __spreadValues({
      className: "icon",
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: _style
    }, others),
    /* @__PURE__ */ React3.createElement(
      "path",
      {
        d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    )
  );
}

// src/ChipGroup.context.ts
var [ChipGroupProvider, useChipGroupContext] = createOptionalContext();

// src/ChipGroup/ChipGroup.tsx
import React4 from "react";
import { useUncontrolled } from "@raikou/hooks";
import { useProps } from "@raikou/core";
var defaultProps = {};
function ChipGroup(props) {
  const { value, defaultValue, onChange, multiple, children } = useProps(
    "ChipGroup",
    defaultProps,
    props
  );
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: multiple ? [] : null,
    onChange
  });
  const isChipSelected = (val) => Array.isArray(_value) ? _value.includes(val) : val === _value;
  const handleChange = (event) => {
    const val = event.currentTarget.value;
    if (Array.isArray(_value)) {
      setValue(
        _value.includes(val) ? _value.filter((v) => v !== val) : [..._value, val]
      );
    } else {
      setValue(val);
    }
  };
  return /* @__PURE__ */ React4.createElement(
    ChipGroupProvider,
    {
      value: { isChipSelected, onChange: handleChange, multiple }
    },
    children
  );
}
ChipGroup.displayName = "@raikou/core/ChipGroup";

// src/Chip.tsx
var defaultProps2 = {
  type: "checkbox",
  size: "sm",
  radius: "xl",
  variant: "outline"
};
var varsResolver = createVarsResolver(
  (theme, { size, radius, variant, color }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      variant
    });
    return {
      root: {
        "--chip-fz": getFontSize(size),
        "--chip-size": getSize(size, "chip-size"),
        "--chip-radius": getRadius(radius),
        "--chip-checked-padding": getSize(size, "chip-checked-padding"),
        "--chip-padding": getSize(size, "chip-padding"),
        "--chip-icon-size": getSize(size, "chip-icon-size"),
        "--chip-bg": colors.background,
        "--chip-hover": colors.hover,
        "--chip-color": colors.color,
        "--chip-bd": colors.border,
        "--chip-spacing": getSize(size, "chip-spacing")
      }
    };
  }
);
var Chip = factory((_props, ref) => {
  const props = useProps2("Chip", defaultProps2, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    id,
    checked,
    defaultChecked,
    onChange,
    value,
    wrapperProps,
    type,
    disabled,
    children,
    size,
    variant,
    icon
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "id",
    "checked",
    "defaultChecked",
    "onChange",
    "value",
    "wrapperProps",
    "type",
    "disabled",
    "children",
    "size",
    "variant",
    "icon"
  ]);
  const getStyles = useStyles({
    name: "Chip",
    classes: {
      root: "chip-root",
      input: "chip-input",
      iconWrapper: "chip-iconWrapper",
      checkIcon: "chip-checkIcon",
      label: "chip-label"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const ctx = useChipGroupContext();
  const uuid = useId(id);
  const { styleProps, rest } = extractStyleProps(others);
  const [_value, setValue] = useUncontrolled2({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange
  });
  const contextProps = ctx ? {
    checked: ctx.isChipSelected(value),
    onChange: ctx.onChange,
    type: ctx.multiple ? "checkbox" : "radio"
  } : {};
  const _checked = contextProps.checked || _value;
  return /* @__PURE__ */ React5.createElement(
    Box,
    __spreadValues(__spreadValues(__spreadValues({
      size,
      variant
    }, getStyles("root")), styleProps), wrapperProps),
    /* @__PURE__ */ React5.createElement(
      "input",
      __spreadValues(__spreadValues(__spreadProps(__spreadValues({
        type
      }, getStyles("input")), {
        checked: _checked,
        onChange: (event) => setValue(event.currentTarget.checked),
        id: uuid,
        disabled,
        ref,
        value
      }), contextProps), rest)
    ),
    /* @__PURE__ */ React5.createElement(
      "label",
      __spreadValues({
        htmlFor: uuid,
        "data-checked": _checked || void 0,
        "data-disabled": disabled || void 0
      }, getStyles("label", { variant })),
      _checked && /* @__PURE__ */ React5.createElement("span", __spreadValues({}, getStyles("iconWrapper")), icon || /* @__PURE__ */ React5.createElement(CheckIcon, __spreadValues({}, getStyles("checkIcon")))),
      children
    )
  );
});
Chip.displayName = "@raikou/core/Chip";
Chip.Group = ChipGroup;
export {
  Chip,
  ChipGroup
};
