"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var import_react55 = __toESM(require("react"));

// ../../packages/raikou-hooks/dist/index.mjs
var import_react = require("react");
var import_react2 = require("react");
var import_react3 = require("react");
var import_react4 = require("react");
var import_react5 = require("react");
var import_react6 = require("react");
var import_react7 = require("react");
var import_react8 = require("react");
var import_react9 = require("react");
var import_react10 = require("react");
var import_react11 = require("react");
var import_react12 = require("react");
var import_react13 = require("react");
var import_react14 = require("react");
var import_react15 = require("react");
var import_react16 = __toESM(require("react"), 1);
var import_react17 = require("react");
var import_react18 = require("react");
var import_react19 = require("react");
var import_react20 = require("react");
var import_react21 = require("react");
var import_react22 = require("react");
var import_react23 = require("react");
var import_react24 = require("react");
var import_react25 = require("react");
var import_react26 = require("react");
var import_react27 = require("react");
var import_react28 = require("react");
var import_react29 = require("react");
var import_react30 = require("react");
var import_react31 = require("react");
var import_react32 = require("react");
var import_react33 = require("react");
var import_react34 = require("react");
var import_react35 = require("react");
var import_react36 = require("react");
var import_react37 = require("react");
var import_react38 = require("react");
var import_react39 = require("react");
var import_react40 = require("react");
var import_react41 = require("react");
var import_react42 = require("react");
var import_react43 = require("react");
var import_react44 = require("react");
var import_react45 = require("react");
var import_react46 = require("react");
var import_react47 = require("react");
var import_react48 = require("react");
var import_react49 = require("react");
var import_react50 = require("react");
var import_react51 = require("react");
var import_react52 = require("react");
var import_react53 = require("react");
var import_react54 = require("react");
function randomId() {
  return `raikou-${Math.random().toString(36).slice(2, 11)}`;
}
var useIsomorphicEffect = typeof document !== "undefined" ? import_react9.useLayoutEffect : import_react9.useEffect;
var __useId = import_react16.default["useId".toString()] || (() => void 0);
function useReactId() {
  const id = __useId();
  return id ? `raikou-${id.replace(/:/g, "")}` : "";
}
function useId(staticId) {
  const reactId = useReactId();
  const [uuid, setUuid] = (0, import_react15.useState)(reactId);
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
  return (0, import_react22.useCallback)(mergeRefs(...refs), refs);
}
function useUncontrolled({
  value,
  defaultValue,
  finalValue,
  onChange = () => {
  }
}) {
  const [uncontrolledValue, setUncontrolledValue] = (0, import_react26.useState)(
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
  const frameID = (0, import_react30.useRef)(0);
  const ref = (0, import_react30.useRef)(null);
  const [rect, setRect] = (0, import_react30.useState)(defaultState);
  const observer = (0, import_react30.useMemo)(
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
  (0, import_react30.useEffect)(() => {
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
    const props = (0, import_core.useProps)("SegmentedControl", defaultProps, _props);
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
    const theme = import_core.DEFAULT_THEME;
    const _data = data.map(
      (item) => typeof item === "string" ? { label: item, value: item } : item
    );
    const [_value, handleValueChange] = useUncontrolled({
      value,
      defaultValue,
      finalValue: Array.isArray(data) ? _data.find((item) => !item.disabled)?.value ?? data[0]?.value ?? null : null,
      onChange
    });
    const [activePosition, setActivePosition] = (0, import_react55.useState)({
      width: 0,
      height: 0,
      translate: [0, 0]
    });
    const uuid = useId(name);
    const refs = (0, import_react55.useRef)({});
    const [observerRef, containerRect] = useResizeObserver();
    (0, import_react55.useEffect)(() => {
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
    const controls = _data.map((item) => /* @__PURE__ */ import_react55.default.createElement(
      import_core.Box,
      {
        ...getStyles("control"),
        mod: { active: _value === item.value, orientation },
        key: item.value
      },
      /* @__PURE__ */ import_react55.default.createElement(
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
      /* @__PURE__ */ import_react55.default.createElement(
        import_core.Box,
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
    return /* @__PURE__ */ import_react55.default.createElement(
      import_core.Box,
      {
        ...getStyles("root"),
        variant,
        size,
        ref: mergedRef,
        mod: { "full-width": fullWidth, orientation },
        ...others,
        role: "radiogroup"
      },
      typeof _value === "string" && /* @__PURE__ */ import_react55.default.createElement(
        import_core.Box,
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SegmentedControl
});
