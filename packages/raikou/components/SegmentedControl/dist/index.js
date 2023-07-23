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
  SegmentedControl: () => SegmentedControl
});
module.exports = __toCommonJS(src_exports);

// src/SegmentedControl.tsx
var import_react = __toESM(require("react"));
var import_hooks = require("@raikou/hooks");
var import_core = require("@raikou/core");
var WRAPPER_PADDING = 4;
var defaultProps = {
  size: "sm",
  transitionDuration: 200,
  transitionTimingFunction: "ease"
};
var varsResolver = (0, import_core.createVarsResolver)(
  (theme, { radius, color, transitionDuration, size, transitionTimingFunction }) => ({
    root: {
      "--sc-radius": (0, import_core.getRadius)(radius),
      "--sc-color": color ? (0, import_core.getThemeColor)(color, theme) : void 0,
      "--sc-shadow": color ? void 0 : "var(--raikou-shadow-xs)",
      "--sc-transition-duration": `${transitionDuration}ms`,
      "--sc-transition-timing-function": transitionTimingFunction,
      "--sc-padding": (0, import_core.getSize)(size, "sc-padding"),
      "--sc-font-size": (0, import_core.getFontSize)(size)
    }
  })
);
var SegmentedControl = (0, import_core.factory)(
  (_props, ref) => {
    var _b, _c, _d, _e;
    const props = (0, import_core.useProps)("SegmentedControl", defaultProps, _props);
    const _a = props, {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      data,
      value,
      defaultValue,
      onChange,
      size,
      name,
      disabled,
      readOnly,
      fullWidth,
      orientation,
      radius,
      color,
      transitionDuration,
      transitionTimingFunction,
      variant
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "unstyled",
      "vars",
      "data",
      "value",
      "defaultValue",
      "onChange",
      "size",
      "name",
      "disabled",
      "readOnly",
      "fullWidth",
      "orientation",
      "radius",
      "color",
      "transitionDuration",
      "transitionTimingFunction",
      "variant"
    ]);
    const getStyles = (0, import_core.useStyles)({
      name: "SegmentedControl",
      props,
      classes: {
        root: "segmentedControl-root",
        indicator: "segmentedControl-indicator",
        label: "segmentedControl-label",
        input: "segmentedControl-input",
        control: "segmentedControl-control"
      },
      className,
      style,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver
    });
    const { dir } = (0, import_core.useDirection)();
    const theme = (0, import_core.getTheme)();
    const _data = data.map(
      (item) => typeof item === "string" ? { label: item, value: item } : item
    );
    const [_value, handleValueChange] = (0, import_hooks.useUncontrolled)({
      value,
      defaultValue,
      finalValue: Array.isArray(data) ? (_e = (_d = (_b = _data.find((item) => !item.disabled)) == null ? void 0 : _b.value) != null ? _d : (_c = data[0]) == null ? void 0 : _c.value) != null ? _e : null : null,
      onChange
    });
    const [activePosition, setActivePosition] = (0, import_react.useState)({
      width: 0,
      height: 0,
      translate: [0, 0]
    });
    const uuid = (0, import_hooks.useId)(name);
    const refs = (0, import_react.useRef)({});
    const [observerRef, containerRect] = (0, import_hooks.useResizeObserver)();
    (0, import_react.useEffect)(() => {
      if (_value in refs.current && observerRef.current) {
        const element = refs.current[_value];
        const elementRect = element.getBoundingClientRect();
        const scaledValue = element.offsetWidth / elementRect.width;
        const width = element.clientWidth * scaledValue || 0;
        const height = element.clientHeight * scaledValue || 0;
        const offsetRight = containerRect.width - element.parentElement.offsetLeft + WRAPPER_PADDING - width;
        const offsetLeft = element.parentElement.offsetLeft - WRAPPER_PADDING;
        setActivePosition({
          width,
          height,
          translate: [
            dir === "rtl" ? offsetRight * -1 : offsetLeft,
            element.parentElement.offsetTop - WRAPPER_PADDING
          ]
        });
      }
    }, [_value, containerRect, dir, observerRef]);
    const controls = _data.map((item) => /* @__PURE__ */ import_react.default.createElement(
      import_core.Box,
      __spreadProps(__spreadValues({}, getStyles("control")), {
        mod: { active: _value === item.value, orientation },
        key: item.value
      }),
      /* @__PURE__ */ import_react.default.createElement(
        "input",
        __spreadProps(__spreadValues({}, getStyles("input")), {
          disabled: disabled || item.disabled,
          type: "radio",
          name: uuid,
          value: item.value,
          id: `${uuid}-${item.value}`,
          checked: _value === item.value,
          onChange: () => !readOnly && handleValueChange(item.value),
          "data-focus-ring": theme.focusRing
        })
      ),
      /* @__PURE__ */ import_react.default.createElement(
        import_core.Box,
        __spreadProps(__spreadValues({
          component: "label"
        }, getStyles("label")), {
          mod: {
            active: _value === item.value && !(disabled || item.disabled),
            disabled: disabled || item.disabled
          },
          htmlFor: `${uuid}-${item.value}`,
          ref: (node) => {
            refs.current[item.value] = node;
          },
          __vars: {
            "--sc-label-color": color !== void 0 ? "var(--raikou-color-white)" : void 0
          }
        }),
        item.label
      )
    ));
    const mergedRef = (0, import_hooks.useMergedRef)(observerRef, ref);
    if (data.length === 0) {
      return null;
    }
    return /* @__PURE__ */ import_react.default.createElement(
      import_core.Box,
      __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
        variant,
        size,
        ref: mergedRef,
        mod: { "full-width": fullWidth, orientation }
      }), others), {
        role: "radiogroup"
      }),
      typeof _value === "string" && /* @__PURE__ */ import_react.default.createElement(
        import_core.Box,
        __spreadProps(__spreadValues({
          component: "span"
        }, getStyles("indicator")), {
          __vars: {
            "--sc-indicator-width": `${activePosition.width}px`,
            "--sc-indicator-height": `${activePosition.height}px`,
            "--sc-indicator-transform": `translate(${activePosition.translate[0]}px, ${activePosition.translate[1]}px)`
          }
        })
      ),
      controls
    );
  }
);
SegmentedControl.displayName = "@raikou/core/SegmentedControl";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SegmentedControl
});
