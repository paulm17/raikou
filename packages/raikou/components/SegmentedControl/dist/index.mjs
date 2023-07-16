// src/SegmentedControl.tsx
import React2, { useEffect as useEffect34, useRef as useRef26, useState as useState32 } from "react";

// ../../packages/raikou-hooks/dist/index.mjs
import { useRef, useEffect, useMemo } from "react";
import { useRef as useRef2, useEffect as useEffect2, useCallback } from "react";
import { useEffect as useEffect3, useRef as useRef3 } from "react";
import { useState } from "react";
import { useState as useState2, useEffect as useEffect4, useRef as useRef4 } from "react";
import { useState as useState3 } from "react";
import { useEffect as useEffect5, useRef as useRef5, useState as useState4 } from "react";
import { useEffect as useEffect6, useState as useState5, useRef as useRef6 } from "react";
import { useEffect as useEffect7, useLayoutEffect } from "react";
import { useEffect as useEffect8, useState as useState6 } from "react";
import { useRef as useRef8 } from "react";
import { useEffect as useEffect9, useRef as useRef7 } from "react";
import { useCallback as useCallback2, useEffect as useEffect10, useRef as useRef9 } from "react";
import { useReducer } from "react";
import { useState as useState7 } from "react";
import React from "react";
import { useState as useState8, useEffect as useEffect11, useRef as useRef10 } from "react";
import { useEffect as useEffect12, useRef as useRef11, useState as useState9 } from "react";
import { useState as useState10 } from "react";
import { useState as useState11, useCallback as useCallback3, useEffect as useEffect14 } from "react";
import { useEffect as useEffect13 } from "react";
import { useCallback as useCallback4 } from "react";
import { useEffect as useEffect15, useRef as useRef12, useState as useState12 } from "react";
import { useEffect as useEffect16, useState as useState13, useRef as useRef13 } from "react";
import { useMemo as useMemo2 } from "react";
import { useState as useState14 } from "react";
import { useState as useState15 } from "react";
import { useEffect as useEffect17 } from "react";
import { useCallback as useCallback5, useRef as useRef14, useEffect as useEffect18 } from "react";
import { useEffect as useEffect19, useMemo as useMemo3, useRef as useRef15, useState as useState16 } from "react";
import { useEffect as useEffect20, useRef as useRef16 } from "react";
import { useReducer as useReducer2 } from "react";
import { useCallback as useCallback6, useState as useState17, useEffect as useEffect21 } from "react";
import { useState as useState18, useEffect as useEffect22 } from "react";
import { useCallback as useCallback7, useRef as useRef17, useState as useState19 } from "react";
import { useState as useState20, useEffect as useEffect23 } from "react";
import { useEffect as useEffect24 } from "react";
import { useCallback as useCallback8, useRef as useRef18, useState as useState21, useEffect as useEffect25 } from "react";
import { useEffect as useEffect26 } from "react";
import { useState as useState22, useEffect as useEffect27, useRef as useRef19, useCallback as useCallback9 } from "react";
import { useState as useState23 } from "react";
import { useState as useState24 } from "react";
import { useState as useState25, useCallback as useCallback10 } from "react";
import { useState as useState26 } from "react";
import { useRef as useRef20, useEffect as useEffect28 } from "react";
import { useState as useState27, useCallback as useCallback11 } from "react";
import { useRef as useRef21, useState as useState28, useEffect as useEffect29 } from "react";
import { useState as useState29, useEffect as useEffect30, useCallback as useCallback12 } from "react";
import { useRef as useRef22, useEffect as useEffect31 } from "react";
import { useState as useState30, useEffect as useEffect32 } from "react";
import { useEffect as useEffect33, useRef as useRef23 } from "react";
import { useRef as useRef24 } from "react";
import { useRef as useRef25 } from "react";
import { useCallback as useCallback13, useState as useState31 } from "react";
function randomId() {
  return `raikou-${Math.random().toString(36).slice(2, 11)}`;
}
var useIsomorphicEffect = typeof document !== "undefined" ? useLayoutEffect : useEffect7;
var __useId = React["useId".toString()] || (() => void 0);
function useReactId() {
  const id = __useId();
  return id ? `raikou-${id.replace(/:/g, "")}` : "";
}
function useId(staticId) {
  const reactId = useReactId();
  const [uuid, setUuid] = useState7(reactId);
  useIsomorphicEffect(() => {
    setUuid(randomId());
  }, []);
  if (typeof staticId === "string") {
    return staticId;
  }
  if (typeof window === "undefined") {
    return reactId;
  }
  return uuid;
}
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (typeof ref === "object" && ref !== null && "current" in ref) {
    ref.current = value;
  }
}
function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => assignRef(ref, node));
  };
}
function useMergedRef(...refs) {
  return useCallback4(mergeRefs(...refs), refs);
}
function useUncontrolled({
  value,
  defaultValue,
  finalValue,
  onChange = () => {
  }
}) {
  const [uncontrolledValue, setUncontrolledValue] = useState14(
    defaultValue !== void 0 ? defaultValue : finalValue
  );
  const handleUncontrolledChange = (val) => {
    setUncontrolledValue(val);
    onChange == null ? void 0 : onChange(val);
  };
  if (value !== void 0) {
    return [value, onChange, true];
  }
  return [uncontrolledValue, handleUncontrolledChange, false];
}
var defaultState = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
};
function useResizeObserver() {
  const frameID = useRef15(0);
  const ref = useRef15(null);
  const [rect, setRect] = useState16(defaultState);
  const observer = useMemo3(
    () => typeof window !== "undefined" ? new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        cancelAnimationFrame(frameID.current);
        frameID.current = requestAnimationFrame(() => {
          if (ref.current) {
            setRect(entry.contentRect);
          }
        });
      }
    }) : null,
    []
  );
  useEffect19(() => {
    if (ref.current) {
      observer == null ? void 0 : observer.observe(ref.current);
    }
    return () => {
      observer == null ? void 0 : observer.disconnect();
      if (frameID.current) {
        cancelAnimationFrame(frameID.current);
      }
    };
  }, [ref.current]);
  return [ref, rect];
}

// src/SegmentedControl.tsx
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
  DEFAULT_THEME
} from "@raikou/core";
var WRAPPER_PADDING = 4;
var defaultProps = {
  size: "sm",
  transitionDuration: 200,
  transitionTimingFunction: "ease"
};
var varsResolver = createVarsResolver(
  (theme, { radius, color, transitionDuration, size, transitionTimingFunction }) => ({
    root: {
      "--sc-radius": getRadius(radius),
      "--sc-color": color ? getThemeColor(color, theme) : void 0,
      "--sc-shadow": color ? void 0 : "var(--raikou-shadow-xs)",
      "--sc-transition-duration": `${transitionDuration}ms`,
      "--sc-transition-timing-function": transitionTimingFunction,
      "--sc-padding": getSize(size, "sc-padding"),
      "--sc-font-size": getFontSize(size)
    }
  })
);
var SegmentedControl = factory(
  (_props, ref) => {
    const props = useProps("SegmentedControl", defaultProps, _props);
    const {
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
      variant,
      ...others
    } = props;
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
    const theme = DEFAULT_THEME;
    const _data = data.map(
      (item) => typeof item === "string" ? { label: item, value: item } : item
    );
    const [_value, handleValueChange] = useUncontrolled({
      value,
      defaultValue,
      finalValue: Array.isArray(data) ? _data.find((item) => !item.disabled)?.value ?? data[0]?.value ?? null : null,
      onChange
    });
    const [activePosition, setActivePosition] = useState32({
      width: 0,
      height: 0,
      translate: [0, 0]
    });
    const uuid = useId(name);
    const refs = useRef26({});
    const [observerRef, containerRect] = useResizeObserver();
    useEffect34(() => {
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
    }, [_value, containerRect, dir]);
    const controls = _data.map((item) => /* @__PURE__ */ React2.createElement(
      Box,
      {
        ...getStyles("control"),
        mod: { active: _value === item.value, orientation },
        key: item.value
      },
      /* @__PURE__ */ React2.createElement(
        "input",
        {
          ...getStyles("input"),
          disabled: disabled || item.disabled,
          type: "radio",
          name: uuid,
          value: item.value,
          id: `${uuid}-${item.value}`,
          checked: _value === item.value,
          onChange: () => !readOnly && handleValueChange(item.value),
          "data-focus-ring": theme.focusRing
        }
      ),
      /* @__PURE__ */ React2.createElement(
        Box,
        {
          component: "label",
          ...getStyles("label"),
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
        },
        item.label
      )
    ));
    const mergedRef = useMergedRef(observerRef, ref);
    if (data.length === 0) {
      return null;
    }
    return /* @__PURE__ */ React2.createElement(
      Box,
      {
        ...getStyles("root"),
        variant,
        size,
        ref: mergedRef,
        mod: { "full-width": fullWidth, orientation },
        ...others,
        role: "radiogroup"
      },
      typeof _value === "string" && /* @__PURE__ */ React2.createElement(
        Box,
        {
          component: "span",
          ...getStyles("indicator"),
          __vars: {
            "--sc-indicator-width": `${activePosition.width}px`,
            "--sc-indicator-height": `${activePosition.height}px`,
            "--sc-indicator-transform": `translate(${activePosition.translate[0]}px, ${activePosition.translate[1]}px)`
          }
        }
      ),
      controls
    );
  }
);
SegmentedControl.displayName = "@raikou/core/SegmentedControl";
export {
  SegmentedControl
};
