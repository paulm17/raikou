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
  ColorPicker: () => ColorPicker,
  convertHsvaTo: () => convertHsvaTo,
  isColorValid: () => isColorValid,
  parseColor: () => parseColor
});
module.exports = __toCommonJS(src_exports);

// src/ColorPicker.tsx
var import_react12 = __toESM(require("react"));
var import_hooks3 = require("@raikou/hooks");
var import_core8 = require("@raikou/core");

// src/AlphaSlider/AlphaSlider.tsx
var import_react7 = __toESM(require("react"));
var import_core3 = require("@raikou/core");

// src/ColorSlider/ColorSlider.tsx
var import_react6 = __toESM(require("react"));
var import_hooks = require("@raikou/hooks");
var import_core2 = require("@raikou/core");

// src/Thumb/Thumb.tsx
var import_react5 = __toESM(require("react"));
var import_core = require("@raikou/core");

// ../_utils/create-safe-context/create-safe-context.tsx
var import_react = __toESM(require("react"));
function createSafeContext(errorMessage) {
  const Context = (0, import_react.createContext)(null);
  const useSafeContext = () => {
    const ctx = (0, import_react.useContext)(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react.default.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../_utils/create-optional-context/create-optional-context.tsx
var import_react2 = __toESM(require("react"));

// ../_utils/use-hovered/use-hovered.ts
var import_react3 = require("react");

// ../_utils/create-use-external-events/create-use-external-events.ts
var import_react4 = require("react");

// src/ColorPicker.context.ts
var [ColorPickerProvider, useColorPickerContext] = createSafeContext(
  "ColorPicker component was not found in tree"
);

// src/Thumb/Thumb.tsx
var Thumb = (0, import_react5.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className, style, size, position } = _b, others = __objRest(_b, ["className", "style", "size", "position"]);
    const { getStyles } = useColorPickerContext();
    return /* @__PURE__ */ import_react5.default.createElement(
      import_core.Box,
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
var ColorSlider = (0, import_react6.forwardRef)(
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
    const theme = (0, import_core2.useRaikouTheme)();
    const [position, setPosition] = (0, import_react6.useState)({ y: 0, x: value / maxValue });
    const positionRef = (0, import_react6.useRef)(position);
    const getChangeValue = (val) => round2 ? Math.round(val * maxValue) : val * maxValue;
    const { ref: sliderRef } = (0, import_hooks.useMove)(
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
    (0, import_hooks.useDidUpdate)(() => {
      setPosition({ y: 0, x: value / maxValue });
    }, [value]);
    const handleArrow = (event, pos) => {
      event.preventDefault();
      const _position = (0, import_hooks.clampUseMovePosition)(pos);
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
    const layers = overlays.map((overlay, index) => /* @__PURE__ */ import_react6.default.createElement("div", __spreadProps(__spreadValues({}, getStyles("sliderOverlay")), { style: overlay, key: index })));
    return /* @__PURE__ */ import_react6.default.createElement(
      import_core2.Box,
      __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, others), {
        ref: (0, import_hooks.useMergedRef)(sliderRef, ref)
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
      /* @__PURE__ */ import_react6.default.createElement(
        Thumb,
        __spreadValues({
          position,
          size
        }, getStyles("thumb", {
          style: { top: (0, import_core2.rem)(1), background: thumbColor }
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
function rgbaToHsva({ r, g, b, a }) {
  const max = Math.max(r, g, b);
  const delta = max - Math.min(r, g, b);
  const hh = delta ? max === r ? (g - b) / delta : max === g ? 2 + (b - r) / delta : 4 + (r - g) / delta : 0;
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
var AlphaSlider = (0, import_react7.forwardRef)(
  (props, ref) => {
    const _a = (0, import_core3.useProps)(
      "AlphaSlider",
      defaultProps,
      props
    ), { value, onChange, onChangeEnd, color } = _a, others = __objRest(_a, ["value", "onChange", "onChangeEnd", "color"]);
    return /* @__PURE__ */ import_react7.default.createElement(
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
            backgroundSize: `${(0, import_core3.rem)(8)} ${(0, import_core3.rem)(8)}`,
            backgroundPosition: `0 0, 0 ${(0, import_core3.rem)(4)}, ${(0, import_core3.rem)(4)} -${(0, import_core3.rem)(4)}, -${(0, import_core3.rem)(
              4
            )} 0`
          },
          {
            backgroundImage: `linear-gradient(90deg, transparent, ${color})`
          },
          {
            boxShadow: `rgba(0, 0, 0, .1) 0 0 0 ${(0, import_core3.rem)(
              1
            )} inset, rgb(0, 0, 0, .15) 0 0 ${(0, import_core3.rem)(4)} inset`
          }
        ]
      })
    );
  }
);
AlphaSlider.displayName = "@raikou/core/AlphaSlider";

// src/HueSlider/HueSlider.tsx
var import_react8 = __toESM(require("react"));
var import_core4 = require("@raikou/core");
var defaultProps2 = {};
var HueSlider = (0, import_react8.forwardRef)(
  (props, ref) => {
    const _a = (0, import_core4.useProps)(
      "HueSlider",
      defaultProps2,
      props
    ), { value, onChange, onChangeEnd, color } = _a, others = __objRest(_a, ["value", "onChange", "onChangeEnd", "color"]);
    return /* @__PURE__ */ import_react8.default.createElement(
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
            boxShadow: `rgba(0, 0, 0, .1) 0 0 0 ${(0, import_core4.rem)(
              1
            )} inset, rgb(0, 0, 0, .15) 0 0 ${(0, import_core4.rem)(4)} inset`
          }
        ]
      })
    );
  }
);
HueSlider.displayName = "@raikou/core/HueSlider";

// src/Saturation/Saturation.tsx
var import_react9 = __toESM(require("react"));
var import_hooks2 = require("@raikou/hooks");
var import_core5 = require("@raikou/core");

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
  const { r, g, b, a } = hsvaToRgbaObject(color);
  if (!includeAlpha) {
    return `rgb(${r}, ${g}, ${b})`;
  }
  return `rgba(${r}, ${g}, ${b}, ${round(a, 2)})`;
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
  const { r, g, b } = hsvaToRgbaObject(color);
  return `#${formatHexPart(r)}${formatHexPart(g)}${formatHexPart(b)}`;
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
  const [position, setPosition] = (0, import_react9.useState)({
    x: value.s / 100,
    y: 1 - value.v / 100
  });
  const positionRef = (0, import_react9.useRef)(position);
  const { ref } = (0, import_hooks2.useMove)(
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
  (0, import_react9.useEffect)(() => {
    setPosition({ x: value.s / 100, y: 1 - value.v / 100 });
  }, [value.s, value.v]);
  const handleArrow = (event, pos) => {
    event.preventDefault();
    const _position = (0, import_hooks2.clampUseMovePosition)(pos);
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
  return /* @__PURE__ */ import_react9.default.createElement(
    import_core5.Box,
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
    /* @__PURE__ */ import_react9.default.createElement(
      "div",
      __spreadValues({}, getStyles("saturationOverlay", {
        style: { backgroundColor: `hsl(${value.h}, 100%, 50%)` }
      }))
    ),
    /* @__PURE__ */ import_react9.default.createElement(
      "div",
      __spreadValues({}, getStyles("saturationOverlay", {
        style: {
          backgroundImage: "linear-gradient(90deg, #fff, transparent)"
        }
      }))
    ),
    /* @__PURE__ */ import_react9.default.createElement(
      "div",
      __spreadValues({}, getStyles("saturationOverlay", {
        style: {
          backgroundImage: "linear-gradient(0deg, #000, transparent)"
        }
      }))
    ),
    /* @__PURE__ */ import_react9.default.createElement(
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
var import_react11 = __toESM(require("react"));
var import_core7 = require("@raikou/core");

// ../ColorSwatch/src/ColorSwatch.tsx
var import_react10 = __toESM(require("react"));
var import_core6 = require("@raikou/core");

// css-module:./ColorSwatch.module.css#css-module
var ColorSwatch_module_default = { "root": "m-de3d2490", "colorOverlay": "m-862f3d1b", "shadowOverlay": "m-98ae7f22", "alphaOverlay": "m-95709ac0", "childrenOverlay": "m-93e74e3" };

// ../ColorSwatch/src/ColorSwatch.tsx
var defaultProps3 = {
  withShadow: true
};
var varsResolver = (0, import_core6.createVarsResolver)(
  (_, { radius, size }) => ({
    root: {
      "--cs-radius": radius === void 0 ? void 0 : (0, import_core6.getRadius)(radius),
      "--cs-size": (0, import_core6.rem)(size)
    }
  })
);
var ColorSwatch = (0, import_core6.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core6.useProps)("ColorSwatch", defaultProps3, _props);
    const _a = (0, import_core6.useProps)("ColorSwatch", defaultProps3, props), {
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
    const getStyles = (0, import_core6.useStyles)({
      name: "ColorSwatch",
      props,
      classes: ColorSwatch_module_default,
      className,
      style,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver
    });
    return /* @__PURE__ */ import_react10.default.createElement(
      import_core6.Box,
      __spreadValues(__spreadValues({
        ref,
        variant,
        size
      }, getStyles("root", { focusable: true })), others),
      /* @__PURE__ */ import_react10.default.createElement("span", __spreadValues({}, getStyles("alphaOverlay"))),
      withShadow && /* @__PURE__ */ import_react10.default.createElement("span", __spreadValues({}, getStyles("shadowOverlay"))),
      /* @__PURE__ */ import_react10.default.createElement(
        "span",
        __spreadValues({}, getStyles("colorOverlay", { style: { backgroundColor: color } }))
      ),
      /* @__PURE__ */ import_react10.default.createElement("span", __spreadValues({}, getStyles("childrenOverlay")), children)
    );
  }
);
ColorSwatch.displayName = "@raikou/core/ColorSwatch";
ColorSwatch.classes = ColorSwatch_module_default;

// src/Swatches/Swatches.tsx
var Swatches = (0, import_react11.forwardRef)(
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
    const colors = data.map((color, index) => /* @__PURE__ */ import_react11.default.createElement(
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
    return /* @__PURE__ */ import_react11.default.createElement(import_core7.Box, __spreadValues(__spreadProps(__spreadValues({}, getStyles("swatches")), { ref }), others), colors);
  }
);
Swatches.displayName = "@raikou/core/Swatches";

// css-module:./ColorPicker.module.css#css-module
var ColorPicker_module_default = { "wrapper": "m-fee9c77", "preview": "m-9dddfbac", "body": "m-bffecc3e", "sliders": "m-3283bb96", "thumb": "m-40d572ba", "swatch": "m-d8ee6fd8", "swatches": "m-5711e686", "saturation": "m-202a296e", "saturationOverlay": "m-11b3db02", "slider": "m-d856d47d", "sliderOverlay": "m-8f327113" };

// src/ColorPicker.tsx
var defaultProps4 = {
  swatchesPerRow: 7,
  withPicker: true,
  focusable: true,
  __staticSelector: "ColorPicker"
};
var varsResolver2 = (0, import_core8.createVarsResolver)(
  (_, { size, swatchesPerRow }) => ({
    wrapper: {
      "--cp-preview-size": (0, import_core8.getSize)(size, "cp-preview-size"),
      "--cp-width": (0, import_core8.getSize)(size, "cp-width"),
      "--cp-body-spacing": (0, import_core8.getSpacing)(size),
      "--cp-swatch-size": `${100 / swatchesPerRow}%`,
      "--cp-thumb-size": (0, import_core8.getSize)(size, "cp-thumb-size"),
      "--cp-saturation-height": (0, import_core8.getSize)(size, "cp-saturation-height")
    }
  })
);
var ColorPicker = (0, import_core8.factory)((_props, ref) => {
  const props = (0, import_core8.useProps)("ColorPicker", defaultProps4, _props);
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
  const getStyles = (0, import_core8.useStyles)({
    name: __staticSelector,
    props,
    classes: ColorPicker_module_default,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "wrapper",
    vars,
    varsResolver: varsResolver2
  });
  const formatRef = (0, import_react12.useRef)(format);
  const valueRef = (0, import_react12.useRef)();
  const scrubTimeoutRef = (0, import_react12.useRef)(-1);
  const isScrubbingRef = (0, import_react12.useRef)(false);
  const withAlpha = format === "hexa" || format === "rgba" || format === "hsla";
  const [_value, setValue, controlled] = (0, import_hooks3.useUncontrolled)({
    value,
    defaultValue,
    finalValue: "#FFFFFF",
    onChange
  });
  const [parsed, setParsed] = (0, import_react12.useState)(parseColor(_value));
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
  (0, import_hooks3.useDidUpdate)(() => {
    if (isColorValid(value) && !isScrubbingRef.current) {
      setParsed(parseColor(value));
    }
  }, [value]);
  (0, import_hooks3.useDidUpdate)(() => {
    formatRef.current = format;
    setValue(convertHsvaTo(format, parsed));
  }, [format]);
  return /* @__PURE__ */ import_react12.default.createElement(ColorPickerProvider, { value: { getStyles } }, /* @__PURE__ */ import_react12.default.createElement(
    import_core8.Box,
    __spreadValues(__spreadProps(__spreadValues({
      ref
    }, getStyles("wrapper")), {
      size,
      mod: { "full-width": fullWidth }
    }), others),
    withPicker && /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, /* @__PURE__ */ import_react12.default.createElement(
      Saturation,
      {
        value: parsed,
        onChange: handleChange,
        onChangeEnd: ({ s, v }) => onChangeEnd == null ? void 0 : onChangeEnd(
          convertHsvaTo(formatRef.current, __spreadProps(__spreadValues({}, parsed), {
            s,
            v
          }))
        ),
        color: _value,
        size,
        focusable,
        saturationLabel,
        onScrubStart: startScrubbing,
        onScrubEnd: stopScrubbing
      }
    ), /* @__PURE__ */ import_react12.default.createElement("div", __spreadValues({}, getStyles("body")), /* @__PURE__ */ import_react12.default.createElement("div", __spreadValues({}, getStyles("sliders")), /* @__PURE__ */ import_react12.default.createElement(
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
    ), withAlpha && /* @__PURE__ */ import_react12.default.createElement(
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
    )), withAlpha && /* @__PURE__ */ import_react12.default.createElement(
      ColorSwatch,
      __spreadValues({
        color: _value,
        radius: "sm"
      }, getStyles("preview"))
    ))),
    Array.isArray(swatches) && /* @__PURE__ */ import_react12.default.createElement(
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
    )
  ));
});
ColorPicker.displayName = "@raikou/core/ColorPicker";
ColorPicker.classes = ColorPicker_module_default;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ColorPicker,
  convertHsvaTo,
  isColorValid,
  parseColor
});
//# sourceMappingURL=index.js.map