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
var __pow = Math.pow;
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
  ColorPicker: () => ColorPicker
});
module.exports = __toCommonJS(src_exports);

// src/ColorPicker.tsx
var import_react69 = __toESM(require("react"));

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
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function useDidUpdate(fn, dependencies) {
  const mounted = (0, import_react12.useRef)(false);
  (0, import_react12.useEffect)(
    () => () => {
      mounted.current = false;
    },
    []
  );
  (0, import_react12.useEffect)(() => {
    if (mounted.current) {
      return fn();
    }
    mounted.current = true;
    return void 0;
  }, dependencies);
}
var __useId = import_react16.default["useId".toString()] || (() => void 0);
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
var clampUseMovePosition = (position) => ({
  x: clamp(position.x, 0, 1),
  y: clamp(position.y, 0, 1)
});
function useMove(onChange, handlers, dir = "ltr") {
  const ref = (0, import_react24.useRef)();
  const mounted = (0, import_react24.useRef)(false);
  const isSliding = (0, import_react24.useRef)(false);
  const frame = (0, import_react24.useRef)(0);
  const [active, setActive] = (0, import_react24.useState)(false);
  (0, import_react24.useEffect)(() => {
    mounted.current = true;
  }, []);
  (0, import_react24.useEffect)(() => {
    var _a, _b;
    const onScrub = ({ x, y }) => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        if (mounted.current && ref.current) {
          ref.current.style.userSelect = "none";
          const rect = ref.current.getBoundingClientRect();
          if (rect.width && rect.height) {
            const _x = clamp((x - rect.left) / rect.width, 0, 1);
            onChange({
              x: dir === "ltr" ? _x : 1 - _x,
              y: clamp((y - rect.top) / rect.height, 0, 1)
            });
          }
        }
      });
    };
    const bindEvents = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", stopScrubbing);
      document.addEventListener("touchmove", onTouchMove);
      document.addEventListener("touchend", stopScrubbing);
    };
    const unbindEvents = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", stopScrubbing);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", stopScrubbing);
    };
    const startScrubbing = () => {
      if (!isSliding.current && mounted.current) {
        isSliding.current = true;
        typeof (handlers == null ? void 0 : handlers.onScrubStart) === "function" && handlers.onScrubStart();
        setActive(true);
        bindEvents();
      }
    };
    const stopScrubbing = () => {
      if (isSliding.current && mounted.current) {
        isSliding.current = false;
        setActive(false);
        unbindEvents();
        setTimeout(() => {
          typeof (handlers == null ? void 0 : handlers.onScrubEnd) === "function" && handlers.onScrubEnd();
        }, 0);
      }
    };
    const onMouseDown = (event) => {
      startScrubbing();
      event.preventDefault();
      onMouseMove(event);
    };
    const onMouseMove = (event) => onScrub({ x: event.clientX, y: event.clientY });
    const onTouchStart = (event) => {
      if (event.cancelable) {
        event.preventDefault();
      }
      startScrubbing();
      onTouchMove(event);
    };
    const onTouchMove = (event) => {
      if (event.cancelable) {
        event.preventDefault();
      }
      onScrub({ x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY });
    };
    (_a = ref.current) == null ? void 0 : _a.addEventListener("mousedown", onMouseDown);
    (_b = ref.current) == null ? void 0 : _b.addEventListener("touchstart", onTouchStart, { passive: false });
    return () => {
      if (ref.current) {
        ref.current.removeEventListener("mousedown", onMouseDown);
        ref.current.removeEventListener("touchstart", onTouchStart);
      }
    };
  }, [dir, onChange]);
  return { ref, active };
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

// ../../packages/raikou-core/dist/index.mjs
var import_react55 = __toESM(require("react"), 1);

// ../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_m_default = clsx;

// ../../packages/raikou-core/dist/index.mjs
var import_react56 = __toESM(require("react"), 1);
var import_react57 = __toESM(require("react"), 1);
var import_react58 = require("react");
var import_react59 = require("react");
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
function keys(object) {
  return Object.keys(object);
}
function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
function deepMerge(target, source) {
  const result = __spreadValues({}, target);
  const _source = source;
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(_source[key])) {
        if (!(key in target)) {
          result[key] = _source[key];
        } else {
          result[key] = deepMerge(result[key], _source[key]);
        }
      } else {
        result[key] = _source[key];
      }
    });
  }
  return result;
}
function camelToKebabCase(value) {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}
function scaleRem(remValue) {
  return `calc(${remValue} * var(--raikou-scale))`;
}
function createConverter(units, { shouldScale = false } = {}) {
  return (value) => {
    if (value === 0 || value === "0") {
      return "0";
    }
    if (typeof value === "number") {
      const val = `${value / 16}${units}`;
      return shouldScale ? scaleRem(val) : val;
    }
    if (typeof value === "string") {
      if (value.includes("calc(") || value.includes("var(")) {
        return value;
      }
      if (value.includes(units)) {
        return shouldScale ? scaleRem(value) : value;
      }
      const replaced = value.replace("px", "");
      if (!Number.isNaN(Number(replaced))) {
        const val = `${Number(replaced) / 16}${units}`;
        return shouldScale ? scaleRem(val) : val;
      }
    }
    return value;
  };
}
var rem = createConverter("rem", { shouldScale: true });
var em = createConverter("em");
function filterProps(props) {
  return Object.keys(props).reduce((acc, key) => {
    if (props[key] !== void 0) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
}
function isNumberLike(value) {
  if (typeof value === "number") {
    return true;
  }
  if (typeof value === "string") {
    if (value.startsWith("calc(") || value.startsWith("var(")) {
      return true;
    }
    return /[0-9]/.test(value.trim().replace("-", "")[0]);
  }
  return false;
}
function getSize(size, prefix = "size", convertToRem = true) {
  return isNumberLike(size) ? convertToRem ? rem(size) : size : `var(--${prefix}-${size})`;
}
function getSpacing(size) {
  return getSize(size, "raikou-spacing");
}
function getRadius(size) {
  if (size === void 0) {
    return "var(--raikou-radius-default)";
  }
  return getSize(size, "raikou-radius");
}
function createVarsResolver(resolver) {
  return resolver;
}
var EMPTY_CLASS_NAMES = {};
function mergeClassNames(objects) {
  const merged = {};
  objects.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (merged[key]) {
        merged[key] = clsx_m_default(merged[key], value);
      } else {
        merged[key] = value;
      }
    });
  });
  return merged;
}
function resolveClassNames({ theme, classNames, props, stylesCtx }) {
  const arrayClassNames = Array.isArray(classNames) ? classNames : [classNames];
  const resolvedClassNames = arrayClassNames.map(
    (item) => typeof item === "function" ? item(theme, props, stylesCtx) : item || EMPTY_CLASS_NAMES
  );
  return mergeClassNames(resolvedClassNames);
}
function resolveStyles({ theme, styles, props, stylesCtx }) {
  const arrayStyles = Array.isArray(styles) ? styles : [styles];
  return arrayStyles.reduce((acc, style) => {
    if (typeof style === "function") {
      return __spreadValues(__spreadValues({}, acc), style(theme, props, stylesCtx));
    }
    return __spreadValues(__spreadValues({}, acc), style);
  }, {});
}
var FOCUS_CLASS_NAMES = {
  always: "raikou-focus-always",
  auto: "raikou-focus-auto",
  never: "raikou-focus-never"
};
function getGlobalClassNames({
  theme,
  options,
  unstyled
}) {
  return clsx_m_default(
    (options == null ? void 0 : options.focusable) && !unstyled && (theme.focusClassName || FOCUS_CLASS_NAMES[theme.focusRing]),
    (options == null ? void 0 : options.active) && !unstyled && theme.activeClassName
  );
}
function getPrimaryShade(theme, colorScheme) {
  if (typeof theme.primaryShade === "number") {
    return theme.primaryShade;
  }
  if (colorScheme === "dark") {
    return theme.primaryShade.dark;
  }
  return theme.primaryShade.light;
}
function parseThemeColor({
  color,
  theme,
  colorScheme
}) {
  if (typeof color !== "string") {
    throw new Error(
      `[@raikou/core] Failed to parse color. Instead got ${typeof color}`
    );
  }
  if (color === "white" || color === "black") {
    return {
      color,
      value: color === "white" ? theme.white : theme.black,
      shade: void 0,
      isThemeColor: false,
      variable: `--raikou-color-${color}`
    };
  }
  const [_color, shade] = color.split(".");
  const colorShade = shade ? Number(shade) : void 0;
  const isThemeColor = _color in theme.colors;
  if (isThemeColor) {
    return {
      color: _color,
      value: colorShade !== void 0 ? theme.colors[_color][colorShade] : theme.colors[_color][getPrimaryShade(theme, colorScheme || "light")],
      shade: colorShade,
      isThemeColor,
      variable: shade ? `--raikou-color-${_color}-${colorShade}` : `--raikou-color-${_color}-filled`
    };
  }
  return {
    color,
    value: color,
    isThemeColor,
    shade: colorShade,
    variable: void 0
  };
}
function getThemeColor(color, theme) {
  const parsed = parseThemeColor({ color: color || theme.primaryColor, theme });
  return parsed.variable ? `var(${parsed.variable})` : color;
}
function getGradient(gradient, theme) {
  const merged = {
    from: (gradient == null ? void 0 : gradient.from) || theme.defaultGradient.from,
    to: (gradient == null ? void 0 : gradient.to) || theme.defaultGradient.to,
    deg: (gradient == null ? void 0 : gradient.deg) || theme.defaultGradient.deg || 0
  };
  const fromColor = getThemeColor(merged.from, theme);
  const toColor = getThemeColor(merged.to, theme);
  return `linear-gradient(${merged.deg}deg, ${fromColor} 0%, ${toColor} 100%)`;
}
function isHexColor(hex) {
  const HEX_REGEXP = /^#?([0-9A-F]{3}){1,2}$/i;
  return HEX_REGEXP.test(hex);
}
function hexToRgba(color) {
  let hexString = color.replace("#", "");
  if (hexString.length === 3) {
    const shorthandHex = hexString.split("");
    hexString = [
      shorthandHex[0],
      shorthandHex[0],
      shorthandHex[1],
      shorthandHex[1],
      shorthandHex[2],
      shorthandHex[2]
    ].join("");
  }
  const parsed = parseInt(hexString, 16);
  const r2 = parsed >> 16 & 255;
  const g = parsed >> 8 & 255;
  const b = parsed & 255;
  return {
    r: r2,
    g,
    b,
    a: 1
  };
}
function rgbStringToRgba(color) {
  const [r2, g, b, a] = color.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: r2, g, b, a: a || 1 };
}
function hslStringToRgba(hslaString) {
  const hslaRegex = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i;
  const matches = hslaString.match(hslaRegex);
  if (!matches) {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  }
  const h = parseInt(matches[1], 10);
  const s = parseInt(matches[2], 10) / 100;
  const l = parseInt(matches[3], 10) / 100;
  const a = matches[5] ? parseFloat(matches[5]) : void 0;
  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const huePrime = h / 60;
  const x = chroma * (1 - Math.abs(huePrime % 2 - 1));
  const m = l - chroma / 2;
  let r2;
  let g;
  let b;
  if (huePrime >= 0 && huePrime < 1) {
    r2 = chroma;
    g = x;
    b = 0;
  } else if (huePrime >= 1 && huePrime < 2) {
    r2 = x;
    g = chroma;
    b = 0;
  } else if (huePrime >= 2 && huePrime < 3) {
    r2 = 0;
    g = chroma;
    b = x;
  } else if (huePrime >= 3 && huePrime < 4) {
    r2 = 0;
    g = x;
    b = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    r2 = x;
    g = 0;
    b = chroma;
  } else {
    r2 = chroma;
    g = 0;
    b = x;
  }
  return {
    r: Math.round((r2 + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
    a: a || 1
  };
}
function toRgba(color) {
  if (isHexColor(color)) {
    return hexToRgba(color);
  }
  if (color.startsWith("rgb")) {
    return rgbStringToRgba(color);
  }
  if (color.startsWith("hsl")) {
    return hslStringToRgba(color);
  }
  return {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function darken(color, alpha) {
  if (color.startsWith("var(")) {
    return color;
  }
  const { r: r2, g, b, a } = toRgba(color);
  const f = 1 - alpha;
  const dark = (input) => Math.round(input * f);
  return `rgba(${dark(r2)}, ${dark(g)}, ${dark(b)}, ${a})`;
}
function rgba(color, alpha) {
  if (typeof color !== "string" || alpha > 1 || alpha < 0) {
    return "rgba(0, 0, 0, 1)";
  }
  const { r: r2, g, b } = toRgba(color);
  return `rgba(${r2}, ${g}, ${b}, ${alpha})`;
}
var defaultVariantColorsResolver = ({
  color,
  theme,
  variant,
  gradient
}) => {
  const parsed = parseThemeColor({ color, theme });
  if (variant === "filled") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: `var(--raikou-color-${color}-filled)`,
          hover: `var(--raikou-color-${color}-filled-hover)`,
          color: "var(--raikou-color-white)",
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: `var(--raikou-color-${parsed.color}-${parsed.shade})`,
        hover: `var(--raikou-color-${parsed.color}-${parsed.shade === 9 ? 8 : parsed.shade + 1})`,
        color: "var(--raikou-color-white)",
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: color,
      hover: darken(color, 0.1),
      color: "var(--raikou-color-white)",
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "light") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: `var(--raikou-color-${color}-light)`,
          hover: `var(--raikou-color-${color}-light-hover)`,
          color: `var(--raikou-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`
        };
      }
      const parsedColor = theme.colors[parsed.color][parsed.shade];
      return {
        background: rgba(parsedColor, 0.1),
        hover: rgba(parsedColor, 0.12),
        color: `var(--raikou-color-${parsed.color}-${Math.min(
          parsed.shade,
          6
        )})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: rgba(color, 0.1),
      hover: rgba(color, 0.12),
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "outline") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: `var(--raikou-color-${color}-outline-hover)`,
          color: `var(--raikou-color-${color}-outline)`,
          border: `${rem(1)} solid var(--raikou-color-${color}-outline)`
        };
      }
      return {
        background: "transparent",
        hover: rgba(theme.colors[parsed.color][parsed.shade], 0.05),
        color: `var(--raikou-color-${parsed.color}-${parsed.shade})`,
        border: `${rem(1)} solid var(--raikou-color-${parsed.color}-${parsed.shade})`
      };
    }
    return {
      background: "transparent",
      hover: rgba(color, 0.05),
      color,
      border: `${rem(1)} solid ${color}`
    };
  }
  if (variant === "subtle") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: `var(--raikou-color-${color}-light-hover)`,
          color: `var(--raikou-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`
        };
      }
      const parsedColor = theme.colors[parsed.color][parsed.shade];
      return {
        background: "transparent",
        hover: rgba(parsedColor, 0.12),
        color: `var(--raikou-color-${parsed.color}-${Math.min(
          parsed.shade,
          6
        )})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: rgba(color, 0.12),
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "transparent") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: "transparent",
          color: `var(--raikou-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: "transparent",
        hover: "transparent",
        color: `var(--raikou-color-${parsed.color}-${Math.min(
          parsed.shade,
          6
        )})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: "transparent",
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "white") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "var(--raikou-color-white)",
          hover: darken(theme.white, 0.01),
          color: `var(--raikou-color-${color}-filled)`,
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: "var(--raikou-color-white)",
        hover: darken(theme.white, 0.01),
        color: `var(--raikou-color-${parsed.color}-${parsed.shade})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: "var(--raikou-color-white)",
      hover: darken(theme.white, 0.01),
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "gradient") {
    return {
      background: getGradient(gradient, theme),
      hover: getGradient(gradient, theme),
      color: "var(--raikou-color-white)",
      border: "none"
    };
  }
  if (variant === "default") {
    return {
      background: "var(--raikou-color-default)",
      hover: "var(--raikou-color-default-hover)",
      color: "var(--raikou-color-default-color)",
      border: `${rem(1)} solid var(--raikou-color-default-border)`
    };
  }
  return {};
};
var DEFAULT_COLORS = {
  dark: [
    "#C1C2C5",
    "#A6A7AB",
    "#909296",
    "#5c5f66",
    "#373A40",
    "#2C2E33",
    "#25262b",
    "#1A1B1E",
    "#141517",
    "#101113"
  ],
  gray: [
    "#f8f9fa",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529"
  ],
  red: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a"
  ],
  pink: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d"
  ],
  grape: [
    "#f8f0fc",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c"
  ],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4"
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7"
  ],
  blue: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0",
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab"
  ],
  cyan: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf",
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285"
  ],
  teal: [
    "#e6fcf5",
    "#c3fae8",
    "#96f2d7",
    "#63e6be",
    "#38d9a9",
    "#20c997",
    "#12b886",
    "#0ca678",
    "#099268",
    "#087f5b"
  ],
  green: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e"
  ],
  lime: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d",
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d"
  ],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700"
  ],
  orange: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#ff922b",
    "#fd7e14",
    "#f76707",
    "#e8590c",
    "#d9480f"
  ]
};
var DEFAULT_FONT_FAMILY = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji";
var DEFAULT_THEME = {
  scale: 1,
  fontSmoothing: true,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: DEFAULT_COLORS,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: defaultVariantColorsResolver,
  fontFamily: DEFAULT_FONT_FAMILY,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: false,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "raikou-active",
  focusClassName: "",
  headings: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontWeight: "700",
    sizes: {
      h1: { fontSize: rem(34), lineHeight: "1.3" },
      h2: { fontSize: rem(26), lineHeight: "1.35" },
      h3: { fontSize: rem(22), lineHeight: "1.4" },
      h4: { fontSize: rem(18), lineHeight: "1.45" },
      h5: { fontSize: rem(16), lineHeight: "1.5" },
      h6: { fontSize: rem(14), lineHeight: "1.5" }
    }
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20)
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65"
  },
  radius: {
    xs: rem(2),
    sm: rem(4),
    md: rem(8),
    lg: rem(16),
    xl: rem(32)
  },
  spacing: {
    xs: rem(10),
    sm: rem(12),
    md: rem(16),
    lg: rem(20),
    xl: rem(32)
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em"
  },
  shadows: {
    xs: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), 0 ${rem(1)} ${rem(
      2
    )} rgba(0, 0, 0, 0.1)`,
    sm: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(
      10
    )} ${rem(15)} ${rem(-5)}, rgba(0, 0, 0, 0.04) 0 ${rem(7)} ${rem(7)} ${rem(
      -5
    )}`,
    md: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(
      20
    )} ${rem(25)} ${rem(-5)}, rgba(0, 0, 0, 0.04) 0 ${rem(10)} ${rem(10)} ${rem(
      -5
    )}`,
    lg: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(
      28
    )} ${rem(23)} ${rem(-7)}, rgba(0, 0, 0, 0.04) 0 ${rem(12)} ${rem(12)} ${rem(
      -7
    )}`,
    xl: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(
      36
    )} ${rem(28)} ${rem(-7)}, rgba(0, 0, 0, 0.04) 0 ${rem(17)} ${rem(17)} ${rem(
      -7
    )}`
  },
  other: {},
  components: {}
};
var INVALID_PRIMARY_COLOR_ERROR = "[@raikou/core] RaikouProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more \u2013 https://raikou.dev/theming/colors/#primary-color";
var INVALID_PRIMARY_SHADE_ERROR = "[@raikou/core] RaikouProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function isValidPrimaryShade(shade) {
  if (shade < 0 || shade > 9) {
    return false;
  }
  return parseInt(shade.toString(), 10) === shade;
}
function validateRaikouTheme(theme) {
  if (!(theme.primaryColor in theme.colors)) {
    throw new Error(INVALID_PRIMARY_COLOR_ERROR);
  }
  if (typeof theme.primaryShade === "object") {
    if (!isValidPrimaryShade(theme.primaryShade.dark) || !isValidPrimaryShade(theme.primaryShade.light)) {
      throw new Error(INVALID_PRIMARY_SHADE_ERROR);
    }
  }
  if (typeof theme.primaryShade === "number" && !isValidPrimaryShade(theme.primaryShade)) {
    throw new Error(INVALID_PRIMARY_SHADE_ERROR);
  }
}
function mergeRaikouTheme(currentTheme, themeOverride) {
  var _a;
  if (!themeOverride) {
    validateRaikouTheme(currentTheme);
    return currentTheme;
  }
  const result = deepMerge(currentTheme, themeOverride);
  if (themeOverride.fontFamily && !((_a = themeOverride.headings) == null ? void 0 : _a.fontFamily)) {
    result.headings.fontFamily = themeOverride.fontFamily;
  }
  validateRaikouTheme(result);
  return result;
}
function getTheme() {
  if (typeof window === "undefined") {
    const appPath = __require("path").resolve("./");
    const resolveConfig = __require("tailwindcss/resolveConfig");
    const tailwindConfig = __require(appPath + "/tailwind.config.js");
    const fullConfig = resolveConfig(tailwindConfig);
    const theme = mergeRaikouTheme(DEFAULT_THEME, fullConfig.theme.custom);
    theme.variantColorResolver = defaultVariantColorsResolver;
    return theme;
  } else if (typeof window !== "undefined") {
    const res = localStorage.getItem("raikou-theme");
    if (res !== null) {
      const theme = JSON.parse(res);
      theme.variantColorResolver = defaultVariantColorsResolver;
      return theme;
    }
  }
  return DEFAULT_THEME;
}
function useProps(component, defaultProps5, props) {
  var _a;
  const theme = DEFAULT_THEME;
  const contextPropsPayload = (_a = theme.components[component]) == null ? void 0 : _a.defaultProps;
  const contextProps = typeof contextPropsPayload === "function" ? contextPropsPayload(theme) : contextPropsPayload;
  return __spreadValues(__spreadValues(__spreadValues({}, defaultProps5), contextProps), filterProps(props));
}
function getStaticClassNames({
  themeName,
  classNamesPrefix,
  selector
}) {
  return themeName.map((n) => `${classNamesPrefix}-${n}-${selector}`);
}
function getThemeClassNames({
  themeName,
  theme,
  selector,
  props,
  stylesCtx
}) {
  return themeName.map(
    (n) => {
      var _a, _b;
      return (_b = resolveClassNames({
        theme,
        classNames: (_a = theme.components[n]) == null ? void 0 : _a.classNames,
        props,
        stylesCtx
      })) == null ? void 0 : _b[selector];
    }
  );
}
function getVariantClassName({
  options,
  classes,
  selector,
  unstyled
}) {
  return (options == null ? void 0 : options.variant) && !unstyled ? classes[`${selector}--${options.variant}`] : void 0;
}
function getRootClassName({ rootSelector, selector, className }) {
  return rootSelector === selector ? className : void 0;
}
function getSelectorClassName({ selector, classes, unstyled }) {
  return unstyled ? void 0 : classes[selector];
}
function getResolvedClassNames({
  selector,
  stylesCtx,
  theme,
  classNames,
  props
}) {
  return resolveClassNames({ theme, classNames, props, stylesCtx })[selector];
}
function getOptionsClassNames({
  selector,
  stylesCtx,
  options,
  props,
  theme
}) {
  return resolveClassNames({
    theme,
    classNames: options == null ? void 0 : options.classNames,
    props: (options == null ? void 0 : options.props) || props,
    stylesCtx
  })[selector];
}
function getClassName({
  theme,
  options,
  themeName,
  selector,
  classNamesPrefix,
  classNames,
  classes,
  unstyled,
  className,
  rootSelector,
  props,
  stylesCtx
}) {
  return clsx_m_default(
    getGlobalClassNames({ theme, options, unstyled }),
    getThemeClassNames({ theme, themeName, selector, props, stylesCtx }),
    getVariantClassName({ options, classes, selector, unstyled }),
    getResolvedClassNames({ selector, stylesCtx, theme, classNames, props }),
    getOptionsClassNames({ selector, stylesCtx, options, props, theme }),
    getRootClassName({ rootSelector, selector, className }),
    getSelectorClassName({ selector, classes, unstyled }),
    getStaticClassNames({ themeName, classNamesPrefix, selector }),
    options == null ? void 0 : options.className
  );
}
function getThemeStyles({
  theme,
  themeName,
  props,
  stylesCtx,
  selector
}) {
  return themeName.map(
    (n) => {
      var _a;
      return resolveStyles({
        theme,
        styles: (_a = theme.components[n]) == null ? void 0 : _a.styles,
        props,
        stylesCtx
      })[selector];
    }
  ).reduce((acc, val) => __spreadValues(__spreadValues({}, acc), val), {});
}
function resolveStyle({ style, theme }) {
  if (Array.isArray(style)) {
    return [...style].reduce(
      (acc, item) => __spreadValues(__spreadValues({}, acc), resolveStyle({ style: item, theme })),
      {}
    );
  }
  if (typeof style === "function") {
    return style(theme);
  }
  if (style == null) {
    return {};
  }
  return style;
}
function mergeVars(vars) {
  return vars.reduce((acc, current) => {
    if (current) {
      Object.keys(current).forEach((key) => {
        acc[key] = __spreadValues(__spreadValues({}, acc[key]), filterProps(current[key]));
      });
    }
    return acc;
  }, {});
}
function resolveVars({
  vars,
  varsResolver: varsResolver3,
  theme,
  props,
  stylesCtx,
  selector,
  themeName
}) {
  var _a;
  return (_a = mergeVars([
    varsResolver3 == null ? void 0 : varsResolver3(theme, props, stylesCtx),
    ...themeName.map((name) => {
      var _a2, _b, _c;
      return (_c = (_b = (_a2 = theme.components) == null ? void 0 : _a2[name]) == null ? void 0 : _b.vars) == null ? void 0 : _c.call(_b, theme, props, stylesCtx);
    }),
    vars == null ? void 0 : vars(theme, props, stylesCtx)
  ])) == null ? void 0 : _a[selector];
}
function getStyle({
  theme,
  themeName,
  selector,
  options,
  props,
  stylesCtx,
  rootSelector,
  styles,
  style,
  vars,
  varsResolver: varsResolver3
}) {
  return __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, getThemeStyles({ theme, themeName, props, stylesCtx, selector })), resolveStyles({ theme, styles, props, stylesCtx })[selector]), resolveStyles({ theme, styles: options == null ? void 0 : options.styles, props: (options == null ? void 0 : options.props) || props, stylesCtx })[selector]), resolveVars({ theme, props, stylesCtx, vars, varsResolver: varsResolver3, selector, themeName })), rootSelector === selector ? resolveStyle({ style, theme }) : null), resolveStyle({ style: options == null ? void 0 : options.style, theme }));
}
function useStyles({
  name,
  classes,
  props,
  stylesCtx,
  className,
  style,
  rootSelector = "root",
  unstyled,
  classNames,
  styles,
  vars,
  varsResolver: varsResolver3
}) {
  const theme = getTheme();
  const classNamesPrefix = "raikou";
  const themeName = (Array.isArray(name) ? name : [name]).filter(
    (n) => n
  );
  return (selector, options) => ({
    className: getClassName({
      theme,
      options,
      themeName,
      selector,
      classNamesPrefix,
      classNames,
      classes,
      unstyled,
      className,
      rootSelector,
      props,
      stylesCtx
    }),
    style: getStyle({
      theme,
      themeName,
      selector,
      options,
      props,
      stylesCtx,
      rootSelector,
      styles,
      style,
      vars,
      varsResolver: varsResolver3
    })
  });
}
function cssObjectToString(css) {
  return keys(css).reduce(
    (acc, rule) => css[rule] !== void 0 ? `${acc}
${camelToKebabCase(rule)}: ${css[rule]};` : acc,
    ""
  ).trim();
}
function padLines(string, count) {
  const whitespace = " ".repeat(count);
  return `${whitespace}${string.replace(/(?:\r\n|\r|\n)/g, `
${whitespace}`)}`;
}
function stylesToString({ selector, styles, media }) {
  const baseStyles = styles ? padLines(cssObjectToString(styles), 2) : "";
  const mediaQueryStyles = !Array.isArray(media) ? [] : media.map(
    (item) => `@media ${item.query} {
  ${selector} {
${padLines(
      cssObjectToString(item.styles),
      4
    )}
  }
}`
  );
  return `${baseStyles ? `${selector} {
${baseStyles}
}

` : ""}${mediaQueryStyles.join(
    "\n\n"
  )}`.trim();
}
function InlineStyles({ selector, styles, media }) {
  return /* @__PURE__ */ import_react56.default.createElement(
    "style",
    {
      "data-raikou-styles": "inline",
      dangerouslySetInnerHTML: {
        __html: stylesToString({ selector, styles, media })
      }
    }
  );
}
function extractStyleProps(others) {
  const _a = others, {
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    p,
    px: px2,
    py,
    pt,
    pb,
    pl,
    pr,
    bg,
    c,
    opacity,
    ff,
    fz,
    fw,
    lts,
    ta,
    lh,
    fs,
    tt,
    td,
    w,
    miw,
    maw,
    h,
    mih,
    mah,
    bgsz,
    bgp,
    bgr,
    bga,
    pos,
    top,
    left,
    bottom,
    right,
    inset,
    display
  } = _a, rest = __objRest(_a, [
    "m",
    "mx",
    "my",
    "mt",
    "mb",
    "ml",
    "mr",
    "p",
    "px",
    "py",
    "pt",
    "pb",
    "pl",
    "pr",
    "bg",
    "c",
    "opacity",
    "ff",
    "fz",
    "fw",
    "lts",
    "ta",
    "lh",
    "fs",
    "tt",
    "td",
    "w",
    "miw",
    "maw",
    "h",
    "mih",
    "mah",
    "bgsz",
    "bgp",
    "bgr",
    "bga",
    "pos",
    "top",
    "left",
    "bottom",
    "right",
    "inset",
    "display"
  ]);
  const styleProps = filterProps({
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    p,
    px: px2,
    py,
    pt,
    pb,
    pl,
    pr,
    bg,
    c,
    opacity,
    ff,
    fz,
    fw,
    lts,
    ta,
    lh,
    fs,
    tt,
    td,
    w,
    miw,
    maw,
    h,
    mih,
    mah,
    bgsz,
    bgp,
    bgr,
    bga,
    pos,
    top,
    left,
    bottom,
    right,
    inset,
    display
  });
  return { styleProps, rest };
}
var STYlE_PROPS_DATA = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  mx: { type: "spacing", property: ["marginRight", "marginLeft"] },
  my: { type: "spacing", property: ["marginTop", "marginBottom"] },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  px: { type: "spacing", property: ["paddingRight", "paddingLeft"] },
  py: { type: "spacing", property: ["paddingTop", "paddingBottom"] },
  bg: { type: "color", property: "background" },
  c: { type: "color", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "identity", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "lineHeight", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "identity", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" }
};
function colorResolver(color, theme) {
  const parsedColor = parseThemeColor({ color, theme });
  if (parsedColor.color === "dimmed") {
    return "var(--raikou-color-dimmed)";
  }
  return parsedColor.variable ? `var(${parsedColor.variable})` : parsedColor.color;
}
function fontSizeResolver(value, theme) {
  if (typeof value === "string" && value in theme.fontSizes) {
    return `var(--raikou-font-size-${value})`;
  }
  if (typeof value === "number") {
    return rem(value);
  }
  if (typeof value === "string") {
    return rem(value);
  }
  return value;
}
function spacingResolver(value, theme) {
  if (typeof value === "number") {
    return rem(value);
  }
  if (typeof value === "string") {
    const mod = value.replace("-", "");
    if (!(mod in theme.spacing)) {
      return rem(value);
    }
    const variable = `--raikou-spacing-${mod}`;
    return value.startsWith("-") ? `calc(var(${variable}) * -1)` : `var(${variable})`;
  }
  return value;
}
function identityResolver(value) {
  return value;
}
function sizeResolver(value) {
  if (typeof value === "number") {
    return rem(value);
  }
  return value;
}
function lineHeightResolver(value, theme) {
  if (typeof value === "string" && value in theme.fontSizes) {
    return `var(--raikou-line-height-${value})`;
  }
  return value;
}
var resolvers = {
  color: colorResolver,
  fontSize: fontSizeResolver,
  spacing: spacingResolver,
  identity: identityResolver,
  size: sizeResolver,
  lineHeight: lineHeightResolver
};
function replaceMediaQuery(query) {
  return query.replace("(min-width: ", "").replace("em)", "");
}
function sortMediaQueries(_a) {
  var _b = _a, {
    media
  } = _b, props = __objRest(_b, [
    "media"
  ]);
  const breakpoints = Object.keys(media);
  const sortedMedia = breakpoints.sort((a, b) => Number(replaceMediaQuery(a)) - Number(replaceMediaQuery(b))).map((query) => ({ query, styles: media[query] }));
  return __spreadProps(__spreadValues({}, props), { media: sortedMedia });
}
function hasResponsiveStyles(styleProp) {
  if (typeof styleProp !== "object" || styleProp === null) {
    return false;
  }
  const breakpoints = Object.keys(styleProp);
  if (breakpoints.length === 1 && breakpoints[0] === "base") {
    return false;
  }
  return true;
}
function getBaseValue(value) {
  if (typeof value === "object" && value !== null) {
    if ("base" in value) {
      return value.base;
    }
    return void 0;
  }
  return value;
}
function getBreakpointKeys(value) {
  if (typeof value === "object" && value !== null) {
    return keys(value).filter((key) => key !== "base");
  }
  return [];
}
function getBreakpointValue(value, breakpoint) {
  if (typeof value === "object" && value !== null && breakpoint in value) {
    return value[breakpoint];
  }
  return value;
}
function parseStyleProps({
  styleProps,
  data,
  theme
}) {
  return sortMediaQueries(
    keys(styleProps).reduce(
      (acc, styleProp) => {
        const propertyData = data[styleProp];
        const properties = Array.isArray(propertyData.property) ? propertyData.property : [propertyData.property];
        const baseValue = getBaseValue(styleProps[styleProp]);
        if (!hasResponsiveStyles(styleProps[styleProp])) {
          properties.forEach((property) => {
            acc.inlineStyles[property] = resolvers[propertyData.type](baseValue, theme);
          });
          return acc;
        }
        acc.hasResponsiveStyles = true;
        const breakpoints = getBreakpointKeys(styleProps[styleProp]);
        properties.forEach((property) => {
          if (baseValue) {
            acc.styles[property] = resolvers[propertyData.type](baseValue, theme);
          }
          breakpoints.forEach((breakpoint) => {
            const bp = `(min-width: ${theme.breakpoints[breakpoint]})`;
            acc.media[bp] = __spreadProps(__spreadValues({}, acc.media[bp]), {
              [property]: resolvers[propertyData.type](
                getBreakpointValue(styleProps[styleProp], breakpoint),
                theme
              )
            });
          });
        });
        return acc;
      },
      {
        hasResponsiveStyles: false,
        styles: {},
        inlineStyles: {},
        media: {}
      }
    )
  );
}
function useRandomClassName(length = 8) {
  const c = "abcdefghijklmnopqrstuvwxyz";
  const s = [...Array(1)].map((_) => c[~~(Math.random() * c.length)]).join("");
  const id = Array.from(
    { length },
    () => Math.random().toString(36)[2]
  ).join("");
  return `raikou-${s}${id}`;
}
function identity(value) {
  return value;
}
function factory(ui) {
  const Component = (0, import_react58.forwardRef)(ui);
  Component.extend = identity;
  return Component;
}
function polymorphicFactory(ui) {
  const Component = (0, import_react59.forwardRef)(ui);
  Component.extend = identity;
  return Component;
}
function createPolymorphicComponent(component) {
  return component;
}
function mergeStyles(styles, theme) {
  if (Array.isArray(styles)) {
    return [...styles].reduce(
      (acc, item) => __spreadValues(__spreadValues({}, acc), mergeStyles(item, theme)),
      {}
    );
  }
  if (typeof styles === "function") {
    return styles(theme);
  }
  if (styles == null) {
    return {};
  }
  return styles;
}
function getBoxStyle({
  theme,
  style,
  vars,
  styleProps
}) {
  const _style = mergeStyles(style, theme);
  const _vars = mergeStyles(vars, theme);
  return __spreadValues(__spreadValues(__spreadValues({}, _style), _vars), styleProps);
}
function transformModKey(key) {
  return key.startsWith("data-") ? key : `data-${key}`;
}
function getMod(props) {
  return Object.keys(props).reduce((acc, key) => {
    const value = props[key];
    if (value === void 0 || value === "" || value === false || value === null) {
      return acc;
    }
    acc[transformModKey(key)] = props[key];
    return acc;
  }, {});
}
function getBoxMod(mod) {
  if (!mod) {
    return null;
  }
  if (typeof mod === "string") {
    return { [transformModKey(mod)]: true };
  }
  if (Array.isArray(mod)) {
    return [...mod].reduce(
      (acc, value) => __spreadValues(__spreadValues({}, acc), getBoxMod(value)),
      {}
    );
  }
  return getMod(mod);
}
var _Box = (0, import_react57.forwardRef)(
  (_a, ref) => {
    var _b = _a, { component, style, __vars, className, variant, mod, size } = _b, others = __objRest(_b, ["component", "style", "__vars", "className", "variant", "mod", "size"]);
    const theme = getTheme();
    const Element = component || "div";
    const { styleProps, rest } = extractStyleProps(others);
    const responsiveClassName = useRandomClassName();
    const parsedStyleProps = parseStyleProps({
      styleProps,
      theme,
      data: STYlE_PROPS_DATA
    });
    return /* @__PURE__ */ import_react57.default.createElement(import_react57.default.Fragment, null, parsedStyleProps.hasResponsiveStyles && /* @__PURE__ */ import_react57.default.createElement(
      InlineStyles,
      {
        selector: `.${responsiveClassName}`,
        styles: parsedStyleProps.styles,
        media: parsedStyleProps.media
      }
    ), /* @__PURE__ */ import_react57.default.createElement(
      Element,
      __spreadValues(__spreadValues({
        ref,
        style: getBoxStyle({
          theme,
          style,
          vars: __vars,
          styleProps: parsedStyleProps.inlineStyles
        }),
        className: clsx_m_default(className, {
          [responsiveClassName]: parsedStyleProps.hasResponsiveStyles
        }),
        "data-variant": variant,
        "data-size": isNumberLike(size) ? void 0 : size || void 0
      }, getBoxMod(mod)), rest)
    ));
  }
);
_Box.displayName = "@raikou/core/Box";
var Box = createPolymorphicComponent(_Box);

// src/AlphaSlider/AlphaSlider.tsx
var import_react64 = __toESM(require("react"));

// src/ColorSlider/ColorSlider.tsx
var import_react63 = __toESM(require("react"));

// src/Thumb/Thumb.tsx
var import_react62 = __toESM(require("react"));

// ../utils/create-safe-context/create-safe-context.tsx
var import_react60 = __toESM(require("react"));
function createSafeContext(errorMessage) {
  const Context = (0, import_react60.createContext)(null);
  const useSafeContext = () => {
    const ctx = (0, import_react60.useContext)(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react60.default.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../utils/create-optional-context/create-optional-context.tsx
var import_react61 = __toESM(require("react"));

// src/ColorPicker.context.ts
var [ColorPickerProvider, useColorPickerContext] = createSafeContext(
  "ColorPicker component was not found in tree"
);

// src/Thumb/Thumb.tsx
var Thumb = (0, import_react62.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className, style, size, position } = _b, others = __objRest(_b, ["className", "style", "size", "position"]);
    const { getStyles } = useColorPickerContext();
    return /* @__PURE__ */ import_react62.default.createElement(
      Box,
      __spreadValues(__spreadProps(__spreadValues({
        ref
      }, getStyles("thumb", { style })), {
        __vars: {
          "--_thumb-y-offset": `${position.y * 100}%`,
          "--_thumb-x-offset": `${position.x * 100}%`
        }
      }), others)
    );
  }
);
Thumb.displayName = "@raikou/core/ColorPickerThumb";

// src/ColorSlider/ColorSlider.tsx
var ColorSlider = (0, import_react63.forwardRef)(
  (props, ref) => {
    const _a = props, {
      className,
      onChange,
      onChangeEnd,
      maxValue,
      round: round2,
      size = "md",
      focusable = true,
      value,
      overlays,
      thumbColor = "transparent",
      onScrubStart,
      onScrubEnd
    } = _a, others = __objRest(_a, [
      "className",
      "onChange",
      "onChangeEnd",
      "maxValue",
      "round",
      "size",
      "focusable",
      "value",
      "overlays",
      "thumbColor",
      "onScrubStart",
      "onScrubEnd"
    ]);
    const { getStyles } = useColorPickerContext();
    const theme = DEFAULT_THEME;
    const [position, setPosition] = (0, import_react63.useState)({ y: 0, x: value / maxValue });
    const positionRef = (0, import_react63.useRef)(position);
    const getChangeValue = (val) => round2 ? Math.round(val * maxValue) : val * maxValue;
    const { ref: sliderRef } = useMove(
      ({ x, y }) => {
        positionRef.current = { x, y };
        onChange == null ? void 0 : onChange(getChangeValue(x));
      },
      {
        onScrubEnd: () => {
          const { x } = positionRef.current;
          onChangeEnd == null ? void 0 : onChangeEnd(getChangeValue(x));
          onScrubEnd == null ? void 0 : onScrubEnd();
        },
        onScrubStart
      }
    );
    useDidUpdate(() => {
      setPosition({ y: 0, x: value / maxValue });
    }, [value]);
    const handleArrow = (event, pos) => {
      event.preventDefault();
      const _position = clampUseMovePosition(pos);
      onChange == null ? void 0 : onChange(getChangeValue(_position.x));
      onChangeEnd == null ? void 0 : onChangeEnd(getChangeValue(_position.x));
    };
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowRight": {
          handleArrow(event, { x: position.x + 0.05, y: position.y });
          break;
        }
        case "ArrowLeft": {
          handleArrow(event, { x: position.x - 0.05, y: position.y });
          break;
        }
      }
    };
    const layers = overlays.map((overlay, index) => /* @__PURE__ */ import_react63.default.createElement("div", __spreadProps(__spreadValues({}, getStyles("sliderOverlay")), { style: overlay, key: index })));
    return /* @__PURE__ */ import_react63.default.createElement(
      Box,
      __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, others), {
        ref: useMergedRef(sliderRef, ref)
      }), getStyles("slider")), {
        role: "slider",
        "aria-valuenow": value,
        "aria-valuemax": maxValue,
        "aria-valuemin": 0,
        tabIndex: focusable ? 0 : -1,
        onKeyDown: handleKeyDown,
        "data-focus-ring": theme.focusRing
      }),
      layers,
      /* @__PURE__ */ import_react63.default.createElement(
        Thumb,
        __spreadValues({
          position,
          size
        }, getStyles("thumb", {
          style: { top: rem(1), background: thumbColor }
        }))
      )
    );
  }
);
ColorSlider.displayName = "@raikou/core/ColorSlider";

// src/converters/parsers.ts
function round(number, digits = 0, base = __pow(10, digits)) {
  return Math.round(base * number) / base;
}
function hslaToHsva({ h, s, l, a }) {
  const ss = s * ((l < 50 ? l : 100 - l) / 100);
  return {
    h,
    s: ss > 0 ? 2 * ss / (l + ss) * 100 : 0,
    v: l + ss,
    a
  };
}
var angleUnits = {
  grad: 360 / 400,
  turn: 360,
  rad: 360 / (Math.PI * 2)
};
function parseHue(value, unit = "deg") {
  return Number(value) * (angleUnits[unit] || 1);
}
var HSL_REGEXP = /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i;
function parseHsla(color) {
  const match = HSL_REGEXP.exec(color);
  if (!match) {
    return { h: 0, s: 0, v: 0, a: 1 };
  }
  return hslaToHsva({
    h: parseHue(match[1], match[2]),
    s: Number(match[3]),
    l: Number(match[4]),
    a: match[5] === void 0 ? 1 : Number(match[5]) / (match[6] ? 100 : 1)
  });
}
function rgbaToHsva({ r: r2, g, b, a }) {
  const max = Math.max(r2, g, b);
  const delta = max - Math.min(r2, g, b);
  const hh = delta ? max === r2 ? (g - b) / delta : max === g ? 2 + (b - r2) / delta : 4 + (r2 - g) / delta : 0;
  return {
    h: round(60 * (hh < 0 ? hh + 6 : hh), 3),
    s: round(max ? delta / max * 100 : 0, 3),
    v: round(max / 255 * 100, 3),
    a
  };
}
function parseHex(color) {
  const hex = color[0] === "#" ? color.slice(1) : color;
  if (hex.length === 3) {
    return rgbaToHsva({
      r: parseInt(hex[0] + hex[0], 16),
      g: parseInt(hex[1] + hex[1], 16),
      b: parseInt(hex[2] + hex[2], 16),
      a: 1
    });
  }
  return rgbaToHsva({
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16),
    a: 1
  });
}
function parseHexa(color) {
  const hex = color[0] === "#" ? color.slice(1) : color;
  const roundA = (a2) => round(parseInt(a2, 16) / 255, 3);
  if (hex.length === 4) {
    const withoutOpacity2 = hex.slice(0, 3);
    const a2 = roundA(hex[3] + hex[3]);
    const hsvaColor2 = __spreadProps(__spreadValues({}, parseHex(withoutOpacity2)), { a: a2 });
    return hsvaColor2;
  }
  const withoutOpacity = hex.slice(0, 6);
  const a = roundA(hex.slice(6, 8));
  const hsvaColor = __spreadProps(__spreadValues({}, parseHex(withoutOpacity)), { a });
  return hsvaColor;
}
var RGB_REGEXP = /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i;
function parseRgba(color) {
  const match = RGB_REGEXP.exec(color);
  if (!match) {
    return { h: 0, s: 0, v: 0, a: 1 };
  }
  return rgbaToHsva({
    r: Number(match[1]) / (match[2] ? 100 / 255 : 1),
    g: Number(match[3]) / (match[4] ? 100 / 255 : 1),
    b: Number(match[5]) / (match[6] ? 100 / 255 : 1),
    a: match[7] === void 0 ? 1 : Number(match[7]) / (match[8] ? 100 : 1)
  });
}
var VALIDATION_REGEXP = {
  hex: /^#?([0-9A-F]{3}){1,2}$/i,
  hexa: /^#?([0-9A-F]{4}){1,2}$/i,
  rgb: /^rgb\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/i,
  rgba: /^rgba\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/i,
  hsl: /hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/i,
  hsla: /^hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*(\d*(?:\.\d+)?)\)$/i
};
var CONVERTERS = {
  hex: parseHex,
  hexa: parseHexa,
  rgb: parseRgba,
  rgba: parseRgba,
  hsl: parseHsla,
  hsla: parseHsla
};
function isColorValid(color) {
  for (const [, regexp] of Object.entries(VALIDATION_REGEXP)) {
    if (regexp.test(color)) {
      return true;
    }
  }
  return false;
}
function parseColor(color) {
  if (typeof color !== "string") {
    return { h: 0, s: 0, v: 0, a: 1 };
  }
  if (color === "transparent") {
    return { h: 0, s: 0, v: 0, a: 0 };
  }
  const trimmed = color.trim();
  for (const [rule, regexp] of Object.entries(VALIDATION_REGEXP)) {
    if (regexp.test(trimmed)) {
      return CONVERTERS[rule](trimmed);
    }
  }
  return { h: 0, s: 0, v: 0, a: 1 };
}

// src/AlphaSlider/AlphaSlider.tsx
var defaultProps = {};
var AlphaSlider = (0, import_react64.forwardRef)(
  (props, ref) => {
    const _a = useProps(
      "AlphaSlider",
      defaultProps,
      props
    ), { value, onChange, onChangeEnd, color } = _a, others = __objRest(_a, ["value", "onChange", "onChangeEnd", "color"]);
    return /* @__PURE__ */ import_react64.default.createElement(
      ColorSlider,
      __spreadProps(__spreadValues({}, others), {
        ref,
        value,
        onChange: (val) => onChange == null ? void 0 : onChange(round(val, 2)),
        onChangeEnd: (val) => onChangeEnd == null ? void 0 : onChangeEnd(round(val, 2)),
        maxValue: 1,
        round: false,
        "data-alpha": true,
        overlays: [
          {
            backgroundImage: "linear-gradient(45deg, var(--_slider-checkers) 25%, transparent 25%), linear-gradient(-45deg, var(--_slider-checkers) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--_slider-checkers) 75%), linear-gradient(-45deg, var(--raikou-color-body) 75%, var(--_slider-checkers) 75%)",
            backgroundSize: `${rem(8)} ${rem(8)}`,
            backgroundPosition: `0 0, 0 ${rem(4)}, ${rem(4)} -${rem(4)}, -${rem(
              4
            )} 0`
          },
          {
            backgroundImage: `linear-gradient(90deg, transparent, ${color})`
          },
          {
            boxShadow: `rgba(0, 0, 0, .1) 0 0 0 ${rem(
              1
            )} inset, rgb(0, 0, 0, .15) 0 0 ${rem(4)} inset`
          }
        ]
      })
    );
  }
);
AlphaSlider.displayName = "@raikou/core/AlphaSlider";

// src/HueSlider/HueSlider.tsx
var import_react65 = __toESM(require("react"));
var defaultProps2 = {};
var HueSlider = (0, import_react65.forwardRef)(
  (props, ref) => {
    const _a = useProps(
      "HueSlider",
      defaultProps2,
      props
    ), { value, onChange, onChangeEnd, color } = _a, others = __objRest(_a, ["value", "onChange", "onChangeEnd", "color"]);
    return /* @__PURE__ */ import_react65.default.createElement(
      ColorSlider,
      __spreadProps(__spreadValues({}, others), {
        ref,
        value,
        onChange,
        onChangeEnd,
        maxValue: 360,
        thumbColor: `hsl(${value}, 100%, 50%)`,
        round: true,
        "data-hue": true,
        overlays: [
          {
            backgroundImage: "linear-gradient(to right,hsl(0,100%,50%),hsl(60,100%,50%),hsl(120,100%,50%),hsl(170,100%,50%),hsl(240,100%,50%),hsl(300,100%,50%),hsl(360,100%,50%))"
          },
          {
            boxShadow: `rgba(0, 0, 0, .1) 0 0 0 ${rem(
              1
            )} inset, rgb(0, 0, 0, .15) 0 0 ${rem(4)} inset`
          }
        ]
      })
    );
  }
);
HueSlider.displayName = "@raikou/core/HueSlider";

// src/Saturation/Saturation.tsx
var import_react66 = __toESM(require("react"));

// src/converters/converters.ts
function hsvaToRgbaObject({ h, s, v, a }) {
  const _h = h / 360 * 6;
  const _s = s / 100;
  const _v = v / 100;
  const hh = Math.floor(_h);
  const l = _v * (1 - _s);
  const c = _v * (1 - (_h - hh) * _s);
  const d = _v * (1 - (1 - _h + hh) * _s);
  const module2 = hh % 6;
  return {
    r: round([_v, c, l, l, d, _v][module2] * 255),
    g: round([d, _v, _v, c, l, l][module2] * 255),
    b: round([l, l, d, _v, _v, c][module2] * 255),
    a: round(a, 2)
  };
}
function hsvaToRgba(color, includeAlpha) {
  const { r: r2, g, b, a } = hsvaToRgbaObject(color);
  if (!includeAlpha) {
    return `rgb(${r2}, ${g}, ${b})`;
  }
  return `rgba(${r2}, ${g}, ${b}, ${round(a, 2)})`;
}
function hsvaToHsl({ h, s, v, a }, includeAlpha) {
  const hh = (200 - s) * v / 100;
  const result = {
    h: Math.round(h),
    s: Math.round(hh > 0 && hh < 200 ? s * v / 100 / (hh <= 100 ? hh : 200 - hh) * 100 : 0),
    l: Math.round(hh / 2)
  };
  if (!includeAlpha) {
    return `hsl(${result.h}, ${result.s}%, ${result.l}%)`;
  }
  return `hsla(${result.h}, ${result.s}%, ${result.l}%, ${round(a, 2)})`;
}
function formatHexPart(number) {
  const hex = number.toString(16);
  return hex.length < 2 ? `0${hex}` : hex;
}
function hsvaToHex(color) {
  const { r: r2, g, b } = hsvaToRgbaObject(color);
  return `#${formatHexPart(r2)}${formatHexPart(g)}${formatHexPart(b)}`;
}
function hsvaToHexa(color) {
  const a = Math.round(color.a * 255);
  return `${hsvaToHex(color)}${formatHexPart(a)}`;
}
var CONVERTERS2 = {
  hex: hsvaToHex,
  hexa: (color) => hsvaToHexa(color),
  rgb: (color) => hsvaToRgba(color, false),
  rgba: (color) => hsvaToRgba(color, true),
  hsl: (color) => hsvaToHsl(color, false),
  hsla: (color) => hsvaToHsl(color, true)
};
function convertHsvaTo(format, color) {
  if (!color) {
    return "#000000";
  }
  if (!(format in CONVERTERS2)) {
    return CONVERTERS2.hex(color);
  }
  return CONVERTERS2[format](color);
}

// src/Saturation/Saturation.tsx
function Saturation(_a) {
  var _b = _a, {
    className,
    onChange,
    onChangeEnd,
    value,
    saturationLabel,
    focusable = true,
    size,
    color,
    onScrubStart,
    onScrubEnd
  } = _b, others = __objRest(_b, [
    "className",
    "onChange",
    "onChangeEnd",
    "value",
    "saturationLabel",
    "focusable",
    "size",
    "color",
    "onScrubStart",
    "onScrubEnd"
  ]);
  const { getStyles } = useColorPickerContext();
  const [position, setPosition] = (0, import_react66.useState)({
    x: value.s / 100,
    y: 1 - value.v / 100
  });
  const positionRef = (0, import_react66.useRef)(position);
  const { ref } = useMove(
    ({ x, y }) => {
      positionRef.current = { x, y };
      onChange({ s: Math.round(x * 100), v: Math.round((1 - y) * 100) });
    },
    {
      onScrubEnd: () => {
        const { x, y } = positionRef.current;
        onChangeEnd({ s: Math.round(x * 100), v: Math.round((1 - y) * 100) });
        onScrubEnd == null ? void 0 : onScrubEnd();
      },
      onScrubStart
    }
  );
  (0, import_react66.useEffect)(() => {
    setPosition({ x: value.s / 100, y: 1 - value.v / 100 });
  }, [value.s, value.v]);
  const handleArrow = (event, pos) => {
    event.preventDefault();
    const _position = clampUseMovePosition(pos);
    onChange({
      s: Math.round(_position.x * 100),
      v: Math.round((1 - _position.y) * 100)
    });
    onChangeEnd({
      s: Math.round(_position.x * 100),
      v: Math.round((1 - _position.y) * 100)
    });
  };
  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowUp": {
        handleArrow(event, { y: position.y - 0.05, x: position.x });
        break;
      }
      case "ArrowDown": {
        handleArrow(event, { y: position.y + 0.05, x: position.x });
        break;
      }
      case "ArrowRight": {
        handleArrow(event, { x: position.x + 0.05, y: position.y });
        break;
      }
      case "ArrowLeft": {
        handleArrow(event, { x: position.x - 0.05, y: position.y });
        break;
      }
    }
  };
  return /* @__PURE__ */ import_react66.default.createElement(
    Box,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, getStyles("saturation")), {
      ref
    }), others), {
      role: "slider",
      "aria-label": saturationLabel,
      "aria-valuenow": position.x,
      "aria-valuetext": convertHsvaTo("rgba", value),
      tabIndex: focusable ? 0 : -1,
      onKeyDown: handleKeyDown
    }),
    /* @__PURE__ */ import_react66.default.createElement(
      "div",
      __spreadValues({}, getStyles("saturationOverlay", {
        style: { backgroundColor: `hsl(${value.h}, 100%, 50%)` }
      }))
    ),
    /* @__PURE__ */ import_react66.default.createElement(
      "div",
      __spreadValues({}, getStyles("saturationOverlay", {
        style: {
          backgroundImage: "linear-gradient(90deg, #fff, transparent)"
        }
      }))
    ),
    /* @__PURE__ */ import_react66.default.createElement(
      "div",
      __spreadValues({}, getStyles("saturationOverlay", {
        style: {
          backgroundImage: "linear-gradient(0deg, #000, transparent)"
        }
      }))
    ),
    /* @__PURE__ */ import_react66.default.createElement(
      Thumb,
      __spreadValues({
        position,
        size
      }, getStyles("thumb", { style: { backgroundColor: color } }))
    )
  );
}
Saturation.displayName = "@raikou/core/Saturation";

// src/Swatches/Swatches.tsx
var import_react68 = __toESM(require("react"));

// ../ColorSwatch/src/ColorSwatch.tsx
var import_react67 = __toESM(require("react"));
var defaultProps3 = {
  size: rem(28),
  radius: rem(28),
  withShadow: true
};
var varsResolver = createVarsResolver(
  (_, { radius, size }) => ({
    root: {
      "--cs-radius": getRadius(radius),
      "--cs-size": rem(size)
    }
  })
);
var ColorSwatch = polymorphicFactory(
  (_props, ref) => {
    const props = useProps("ColorSwatch", defaultProps3, _props);
    const _a = useProps("ColorSwatch", defaultProps3, props), {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      color,
      size,
      radius,
      withShadow,
      children,
      variant
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "unstyled",
      "vars",
      "color",
      "size",
      "radius",
      "withShadow",
      "children",
      "variant"
    ]);
    const getStyles = useStyles({
      name: "ColorSwatch",
      props,
      classes: {
        root: "colorswatch-root",
        alphaOverlay: "colorswatch-alphaOverlay",
        shadowOverlay: "colorswatch-shadowOverlay",
        colorOverlay: "colorswatch-colorOverlay",
        childrenOverlay: "colorswatch-childrenOverlay"
      },
      className,
      style,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver
    });
    return /* @__PURE__ */ import_react67.default.createElement(
      Box,
      __spreadValues(__spreadValues({
        ref,
        variant,
        size
      }, getStyles("root", { focusable: true })), others),
      /* @__PURE__ */ import_react67.default.createElement("span", __spreadValues({}, getStyles("alphaOverlay"))),
      withShadow && /* @__PURE__ */ import_react67.default.createElement("span", __spreadValues({}, getStyles("shadowOverlay"))),
      /* @__PURE__ */ import_react67.default.createElement(
        "span",
        __spreadValues({}, getStyles("colorOverlay", { style: { backgroundColor: color } }))
      ),
      /* @__PURE__ */ import_react67.default.createElement("span", __spreadValues({}, getStyles("childrenOverlay")), children)
    );
  }
);
ColorSwatch.displayName = "@raikou/core/ColorSwatch";

// src/Swatches/Swatches.tsx
var Swatches = (0, import_react68.forwardRef)(
  (_a, ref) => {
    var _b = _a, {
      className,
      datatype,
      setValue,
      onChangeEnd,
      size,
      focusable,
      data,
      swatchesPerRow
    } = _b, others = __objRest(_b, [
      "className",
      "datatype",
      "setValue",
      "onChangeEnd",
      "size",
      "focusable",
      "data",
      "swatchesPerRow"
    ]);
    const { getStyles } = useColorPickerContext();
    const colors = data.map((color, index) => /* @__PURE__ */ import_react68.default.createElement(
      ColorSwatch,
      __spreadProps(__spreadValues({}, getStyles("swatch")), {
        component: "button",
        type: "button",
        color,
        key: index,
        radius: "sm",
        onClick: () => {
          setValue(color);
          onChangeEnd == null ? void 0 : onChangeEnd(color);
        },
        "aria-label": color,
        tabIndex: focusable ? 0 : -1,
        "data-swatch": true
      })
    ));
    return /* @__PURE__ */ import_react68.default.createElement(Box, __spreadValues(__spreadProps(__spreadValues({}, getStyles("swatches")), { ref }), others), colors);
  }
);
Swatches.displayName = "@raikou/core/Swatches";

// src/ColorPicker.tsx
var defaultProps4 = {
  swatchesPerRow: 7,
  size: "sm",
  withPicker: true,
  focusable: true,
  __staticSelector: "ColorPicker"
};
var varsResolver2 = createVarsResolver(
  (_, { size, fullWidth, swatchesPerRow }) => ({
    wrapper: {
      "--cp-preview-size": getSize(size, "cp-preview-size"),
      "--cp-width": fullWidth ? "100%" : getSize(size, "cp-width"),
      "--cp-body-spacing": getSpacing(size),
      "--cp-swatch-size": `${100 / swatchesPerRow}%`,
      "--cp-thumb-size": getSize(size, "cp-thumb-size"),
      "--cp-saturation-height": getSize(size, "cp-saturation-height")
    }
  })
);
var ColorPicker = factory((_props, ref) => {
  const props = useProps("ColorPicker", defaultProps4, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    format,
    value,
    defaultValue,
    onChange,
    onChangeEnd,
    withPicker,
    size,
    saturationLabel,
    hueLabel,
    alphaLabel,
    focusable,
    swatches,
    swatchesPerRow,
    fullWidth,
    onColorSwatchClick,
    __staticSelector
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "format",
    "value",
    "defaultValue",
    "onChange",
    "onChangeEnd",
    "withPicker",
    "size",
    "saturationLabel",
    "hueLabel",
    "alphaLabel",
    "focusable",
    "swatches",
    "swatchesPerRow",
    "fullWidth",
    "onColorSwatchClick",
    "__staticSelector"
  ]);
  const getStyles = useStyles({
    name: __staticSelector,
    props,
    classes: {
      wrapper: "colorPicker-wrapper",
      preview: "colorPicker-preview",
      body: "colorPicker-body",
      sliders: "colorPicker-sliders",
      slider: "colorPicker-slider",
      sliderOverlay: "colorPicker-slider-overlay",
      thumb: "colorPicker-thumb",
      saturation: "colorPicker-saturation",
      saturationOverlay: "colorPicker-saturation-overlay",
      swatches: "colorPicker-swatches",
      swatch: "colorPicker-swatch"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "wrapper",
    vars,
    varsResolver: varsResolver2
  });
  const formatRef = (0, import_react69.useRef)(format);
  const valueRef = (0, import_react69.useRef)();
  const scrubTimeoutRef = (0, import_react69.useRef)(-1);
  const isScrubbingRef = (0, import_react69.useRef)(false);
  const withAlpha = format === "hexa" || format === "rgba" || format === "hsla";
  const [_value, setValue, controlled] = useUncontrolled({
    value,
    defaultValue,
    finalValue: "#FFFFFF",
    onChange
  });
  const [parsed, setParsed] = (0, import_react69.useState)(parseColor(_value));
  const startScrubbing = () => {
    window.clearTimeout(scrubTimeoutRef.current);
    isScrubbingRef.current = true;
  };
  const stopScrubbing = () => {
    window.clearTimeout(scrubTimeoutRef.current);
    scrubTimeoutRef.current = window.setTimeout(() => {
      isScrubbingRef.current = false;
    }, 200);
  };
  const handleChange = (color) => {
    setParsed((current) => {
      const next = __spreadValues(__spreadValues({}, current), color);
      valueRef.current = convertHsvaTo(formatRef.current, next);
      return next;
    });
    setValue(valueRef.current);
  };
  useDidUpdate(() => {
    if (isColorValid(value) && !isScrubbingRef.current) {
      setParsed(parseColor(value));
    }
  }, [value]);
  useDidUpdate(() => {
    formatRef.current = format;
    setValue(convertHsvaTo(format, parsed));
  }, [format]);
  return /* @__PURE__ */ import_react69.default.createElement(ColorPickerProvider, { value: { getStyles } }, /* @__PURE__ */ import_react69.default.createElement(Box, __spreadValues(__spreadProps(__spreadValues({ ref }, getStyles("wrapper")), { size }), others), withPicker && /* @__PURE__ */ import_react69.default.createElement(import_react69.default.Fragment, null, /* @__PURE__ */ import_react69.default.createElement(
    Saturation,
    {
      value: parsed,
      onChange: handleChange,
      onChangeEnd: ({ s, v }) => onChangeEnd == null ? void 0 : onChangeEnd(
        convertHsvaTo(formatRef.current, __spreadProps(__spreadValues({}, parsed), { s, v }))
      ),
      color: _value,
      size,
      focusable,
      saturationLabel,
      onScrubStart: startScrubbing,
      onScrubEnd: stopScrubbing
    }
  ), /* @__PURE__ */ import_react69.default.createElement("div", __spreadValues({}, getStyles("body")), /* @__PURE__ */ import_react69.default.createElement("div", __spreadValues({}, getStyles("sliders")), /* @__PURE__ */ import_react69.default.createElement(
    HueSlider,
    {
      value: parsed.h,
      onChange: (h) => handleChange({ h }),
      onChangeEnd: (h) => onChangeEnd == null ? void 0 : onChangeEnd(
        convertHsvaTo(formatRef.current, __spreadProps(__spreadValues({}, parsed), { h }))
      ),
      size,
      focusable,
      "aria-label": hueLabel,
      onScrubStart: startScrubbing,
      onScrubEnd: stopScrubbing
    }
  ), withAlpha && /* @__PURE__ */ import_react69.default.createElement(
    AlphaSlider,
    {
      value: parsed.a,
      onChange: (a) => handleChange({ a }),
      onChangeEnd: (a) => {
        onChangeEnd == null ? void 0 : onChangeEnd(
          convertHsvaTo(formatRef.current, __spreadProps(__spreadValues({}, parsed), { a }))
        );
      },
      size,
      color: convertHsvaTo("hex", parsed),
      focusable,
      "aria-label": alphaLabel,
      onScrubStart: startScrubbing,
      onScrubEnd: stopScrubbing
    }
  )), withAlpha && /* @__PURE__ */ import_react69.default.createElement(
    ColorSwatch,
    __spreadValues({
      color: _value,
      radius: "sm"
    }, getStyles("preview"))
  ))), Array.isArray(swatches) && /* @__PURE__ */ import_react69.default.createElement(
    Swatches,
    {
      data: swatches,
      swatchesPerRow,
      focusable,
      setValue,
      onChangeEnd: (color) => {
        const convertedColor = convertHsvaTo(format, parseColor(color));
        onColorSwatchClick == null ? void 0 : onColorSwatchClick(convertedColor);
        onChangeEnd == null ? void 0 : onChangeEnd(convertedColor);
        if (!controlled) {
          setParsed(parseColor(color));
        }
      }
    }
  )));
});
ColorPicker.displayName = "@raikou/core/ColorPicker";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ColorPicker
});
