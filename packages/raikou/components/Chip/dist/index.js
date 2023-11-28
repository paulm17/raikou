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
  Chip: () => Chip,
  ChipGroup: () => ChipGroup
});
module.exports = __toCommonJS(src_exports);

// src/Chip.tsx
var import_react7 = __toESM(require("react"));
var import_hooks2 = require("@raikou/hooks");
var import_core3 = require("@raikou/core");

// ../_utils/create-safe-context/create-safe-context.tsx
var import_react = __toESM(require("react"));

// ../_utils/create-optional-context/create-optional-context.tsx
var import_react2 = __toESM(require("react"));
function createOptionalContext(initialValue = null) {
  const Context = (0, import_react2.createContext)(initialValue);
  const useOptionalContext = () => (0, import_react2.useContext)(Context);
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react2.default.createElement(Context.Provider, { value }, children);
  return [Provider, useOptionalContext];
}

// ../_utils/use-hovered/use-hovered.ts
var import_react3 = require("react");

// ../_utils/create-use-external-events/create-use-external-events.ts
var import_react4 = require("react");

// ../Checkbox/src/CheckIcon.tsx
var import_react5 = __toESM(require("react"));
var import_core = require("@raikou/core");
function CheckIcon(_a) {
  var _b = _a, { size, style } = _b, others = __objRest(_b, ["size", "style"]);
  const _style = size !== void 0 ? __spreadValues({ width: (0, import_core.rem)(size), height: (0, import_core.rem)(size) }, style) : style;
  return /* @__PURE__ */ import_react5.default.createElement(
    "svg",
    __spreadValues({
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: _style,
      "aria-hidden": true
    }, others),
    /* @__PURE__ */ import_react5.default.createElement(
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
var import_react6 = __toESM(require("react"));
var import_hooks = require("@raikou/hooks");
var import_core2 = require("@raikou/core");
var defaultProps = {};
function ChipGroup(props) {
  const { value, defaultValue, onChange, multiple, children } = (0, import_core2.useProps)(
    "ChipGroup",
    defaultProps,
    props
  );
  const [_value, setValue] = (0, import_hooks.useUncontrolled)({
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
  return /* @__PURE__ */ import_react6.default.createElement(
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
  type: "checkbox"
};
var varsResolver = (0, import_core3.createVarsResolver)(
  (theme, { size, radius, variant, color }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      variant
    });
    return {
      root: {
        "--chip-fz": (0, import_core3.getFontSize)(size),
        "--chip-size": (0, import_core3.getSize)(size, "chip-size"),
        "--chip-radius": radius === void 0 ? void 0 : (0, import_core3.getRadius)(radius),
        "--chip-checked-padding": (0, import_core3.getSize)(size, "chip-checked-padding"),
        "--chip-padding": (0, import_core3.getSize)(size, "chip-padding"),
        "--chip-icon-size": (0, import_core3.getSize)(size, "chip-icon-size"),
        "--chip-bg": color || variant ? colors.background : void 0,
        "--chip-hover": color || variant ? colors.hover : void 0,
        "--chip-color": color || variant ? colors.color : void 0,
        "--chip-bd": color || variant ? colors.border : void 0,
        "--chip-spacing": (0, import_core3.getSize)(size, "chip-spacing")
      }
    };
  }
);
var Chip = (0, import_core3.factory)((_props, ref) => {
  const props = (0, import_core3.useProps)("Chip", defaultProps2, _props);
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
    icon,
    rootRef
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
    "icon",
    "rootRef"
  ]);
  const getStyles = (0, import_core3.useStyles)({
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
  const uuid = (0, import_hooks2.useId)(id);
  const { styleProps, rest } = (0, import_core3.extractStyleProps)(others);
  const [_value, setValue] = (0, import_hooks2.useUncontrolled)({
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
  return /* @__PURE__ */ import_react7.default.createElement(
    import_core3.Box,
    __spreadValues(__spreadValues(__spreadValues({
      size,
      variant,
      ref: rootRef
    }, getStyles("root")), styleProps), wrapperProps),
    /* @__PURE__ */ import_react7.default.createElement(
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
    /* @__PURE__ */ import_react7.default.createElement(
      "label",
      __spreadValues({
        htmlFor: uuid,
        "data-checked": _checked || void 0,
        "data-disabled": disabled || void 0
      }, getStyles("label", { variant: variant || "filled" })),
      _checked && /* @__PURE__ */ import_react7.default.createElement("span", __spreadValues({}, getStyles("iconWrapper")), icon || /* @__PURE__ */ import_react7.default.createElement(CheckIcon, __spreadValues({}, getStyles("checkIcon")))),
      children
    )
  );
});
Chip.displayName = "@raikou/core/Chip";
Chip.Group = ChipGroup;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Chip,
  ChipGroup
});
