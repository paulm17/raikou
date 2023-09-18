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

// src/SegmentedControl.tsx
import React, { useEffect, useRef, useState } from "react";
import {
  useId,
  useMergedRef,
  useResizeObserver,
  useUncontrolled
} from "@raikou/hooks";
import {
  Box,
  factory,
  useProps,
  useStyles,
  getRadius,
  getThemeColor,
  getSize,
  getFontSize,
  useDirection,
  createVarsResolver,
  useRaikouTheme
} from "@raikou/core";
var WRAPPER_PADDING = 4;
var defaultProps = {};
var varsResolver = createVarsResolver(
  (theme, { radius, color, transitionDuration, size, transitionTimingFunction }) => ({
    root: {
      "--sc-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--sc-color": color ? getThemeColor(color, theme) : void 0,
      "--sc-shadow": color ? void 0 : "var(--raikou-shadow-xs)",
      "--sc-transition-duration": transitionDuration === void 0 ? void 0 : `${transitionDuration}ms`,
      "--sc-transition-timing-function": transitionTimingFunction,
      "--sc-padding": getSize(size, "sc-padding"),
      "--sc-font-size": getFontSize(size)
    }
  })
);
var SegmentedControl = factory(
  (_props, ref) => {
    var _b, _c, _d, _e;
    const props = useProps("SegmentedControl", defaultProps, _props);
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
    const getStyles = useStyles({
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
    const { dir } = useDirection();
    const theme = useRaikouTheme();
    const _data = data.map(
      (item) => typeof item === "string" ? { label: item, value: item } : item
    );
    const [_value, handleValueChange] = useUncontrolled({
      value,
      defaultValue,
      finalValue: Array.isArray(data) ? (_e = (_d = (_b = _data.find((item) => !item.disabled)) == null ? void 0 : _b.value) != null ? _d : (_c = data[0]) == null ? void 0 : _c.value) != null ? _e : null : null,
      onChange
    });
    const [activePosition, setActivePosition] = useState({
      width: 0,
      height: 0,
      translate: [0, 0]
    });
    const uuid = useId(name);
    const refs = useRef({});
    const [observerRef, containerRect] = useResizeObserver();
    useEffect(() => {
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
    const controls = _data.map((item) => /* @__PURE__ */ React.createElement(
      Box,
      __spreadProps(__spreadValues({}, getStyles("control")), {
        mod: { active: _value === item.value, orientation },
        key: item.value
      }),
      /* @__PURE__ */ React.createElement(
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
      /* @__PURE__ */ React.createElement(
        Box,
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
    const mergedRef = useMergedRef(observerRef, ref);
    if (data.length === 0) {
      return null;
    }
    return /* @__PURE__ */ React.createElement(
      Box,
      __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
        variant,
        size,
        ref: mergedRef,
        mod: { "full-width": fullWidth, orientation }
      }), others), {
        role: "radiogroup"
      }),
      typeof _value === "string" && /* @__PURE__ */ React.createElement(
        Box,
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
export {
  SegmentedControl
};
