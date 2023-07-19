var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// src/ColorPicker.tsx
import React10, { useRef as useRef3, useState as useState3 } from "react";
import { useDidUpdate as useDidUpdate2, useUncontrolled } from "@raikou/hooks";
import {
  Box as Box6,
  factory,
  useProps as useProps4,
  useStyles as useStyles2,
  getSize,
  getSpacing,
  createVarsResolver as createVarsResolver2
} from "@raikou/core";

// src/AlphaSlider/AlphaSlider.tsx
import React5, { forwardRef as forwardRef3 } from "react";
import { useProps, rem as rem2 } from "@raikou/core";

// src/ColorSlider/ColorSlider.tsx
import React4, { useRef, useState, forwardRef as forwardRef2 } from "react";
import {
  clampUseMovePosition,
  useDidUpdate,
  useMergedRef,
  useMove
} from "@raikou/hooks";
import { Box as Box2, getTheme, rem } from "@raikou/core";

// src/Thumb/Thumb.tsx
import React3, { forwardRef } from "react";
import { Box } from "@raikou/core";

// ../_utils/create-safe-context/create-safe-context.tsx
import React, { createContext, useContext } from "react";
function createSafeContext(errorMessage) {
  const Context = createContext(null);
  const useSafeContext = () => {
    const ctx = useContext(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ React.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../_utils/create-optional-context/create-optional-context.tsx
import React2, { createContext as createContext2, useContext as useContext2 } from "react";

// src/ColorPicker.context.ts
var [ColorPickerProvider, useColorPickerContext] = createSafeContext(
  "ColorPicker component was not found in tree"
);

// src/Thumb/Thumb.tsx
var Thumb = forwardRef(
  (_a, ref) => {
    var _b = _a, { className, style, size, position } = _b, others = __objRest(_b, ["className", "style", "size", "position"]);
    const { getStyles } = useColorPickerContext();
    return /* @__PURE__ */ React3.createElement(
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
var ColorSlider = forwardRef2(
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
    const theme = getTheme();
    const [position, setPosition] = useState({ y: 0, x: value / maxValue });
    const positionRef = useRef(position);
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
    const layers = overlays.map((overlay, index) => /* @__PURE__ */ React4.createElement("div", __spreadProps(__spreadValues({}, getStyles("sliderOverlay")), { style: overlay, key: index })));
    return /* @__PURE__ */ React4.createElement(
      Box2,
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
      /* @__PURE__ */ React4.createElement(
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
var AlphaSlider = forwardRef3(
  (props, ref) => {
    const _a = useProps(
      "AlphaSlider",
      defaultProps,
      props
    ), { value, onChange, onChangeEnd, color } = _a, others = __objRest(_a, ["value", "onChange", "onChangeEnd", "color"]);
    return /* @__PURE__ */ React5.createElement(
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
            backgroundSize: `${rem2(8)} ${rem2(8)}`,
            backgroundPosition: `0 0, 0 ${rem2(4)}, ${rem2(4)} -${rem2(4)}, -${rem2(
              4
            )} 0`
          },
          {
            backgroundImage: `linear-gradient(90deg, transparent, ${color})`
          },
          {
            boxShadow: `rgba(0, 0, 0, .1) 0 0 0 ${rem2(
              1
            )} inset, rgb(0, 0, 0, .15) 0 0 ${rem2(4)} inset`
          }
        ]
      })
    );
  }
);
AlphaSlider.displayName = "@raikou/core/AlphaSlider";

// src/HueSlider/HueSlider.tsx
import React6, { forwardRef as forwardRef4 } from "react";
import { useProps as useProps2, rem as rem3 } from "@raikou/core";
var defaultProps2 = {};
var HueSlider = forwardRef4(
  (props, ref) => {
    const _a = useProps2(
      "HueSlider",
      defaultProps2,
      props
    ), { value, onChange, onChangeEnd, color } = _a, others = __objRest(_a, ["value", "onChange", "onChangeEnd", "color"]);
    return /* @__PURE__ */ React6.createElement(
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
            boxShadow: `rgba(0, 0, 0, .1) 0 0 0 ${rem3(
              1
            )} inset, rgb(0, 0, 0, .15) 0 0 ${rem3(4)} inset`
          }
        ]
      })
    );
  }
);
HueSlider.displayName = "@raikou/core/HueSlider";

// src/Saturation/Saturation.tsx
import React7, { useEffect, useRef as useRef2, useState as useState2 } from "react";
import { clampUseMovePosition as clampUseMovePosition2, useMove as useMove2 } from "@raikou/hooks";
import { Box as Box3 } from "@raikou/core";

// src/converters/converters.ts
function hsvaToRgbaObject({ h, s, v, a }) {
  const _h = h / 360 * 6;
  const _s = s / 100;
  const _v = v / 100;
  const hh = Math.floor(_h);
  const l = _v * (1 - _s);
  const c = _v * (1 - (_h - hh) * _s);
  const d = _v * (1 - (1 - _h + hh) * _s);
  const module = hh % 6;
  return {
    r: round([_v, c, l, l, d, _v][module] * 255),
    g: round([d, _v, _v, c, l, l][module] * 255),
    b: round([l, l, d, _v, _v, c][module] * 255),
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
  const [position, setPosition] = useState2({
    x: value.s / 100,
    y: 1 - value.v / 100
  });
  const positionRef = useRef2(position);
  const { ref } = useMove2(
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
  useEffect(() => {
    setPosition({ x: value.s / 100, y: 1 - value.v / 100 });
  }, [value.s, value.v]);
  const handleArrow = (event, pos) => {
    event.preventDefault();
    const _position = clampUseMovePosition2(pos);
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
  return /* @__PURE__ */ React7.createElement(
    Box3,
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
    /* @__PURE__ */ React7.createElement(
      "div",
      __spreadValues({}, getStyles("saturationOverlay", {
        style: { backgroundColor: `hsl(${value.h}, 100%, 50%)` }
      }))
    ),
    /* @__PURE__ */ React7.createElement(
      "div",
      __spreadValues({}, getStyles("saturationOverlay", {
        style: {
          backgroundImage: "linear-gradient(90deg, #fff, transparent)"
        }
      }))
    ),
    /* @__PURE__ */ React7.createElement(
      "div",
      __spreadValues({}, getStyles("saturationOverlay", {
        style: {
          backgroundImage: "linear-gradient(0deg, #000, transparent)"
        }
      }))
    ),
    /* @__PURE__ */ React7.createElement(
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
import React9, { forwardRef as forwardRef5 } from "react";
import { Box as Box5 } from "@raikou/core";

// ../ColorSwatch/src/ColorSwatch.tsx
import React8 from "react";
import {
  Box as Box4,
  getRadius,
  polymorphicFactory,
  rem as rem4,
  useProps as useProps3,
  useStyles,
  createVarsResolver
} from "@raikou/core";
var defaultProps3 = {
  size: rem4(28),
  radius: rem4(28),
  withShadow: true
};
var varsResolver = createVarsResolver(
  (_, { radius, size }) => ({
    root: {
      "--cs-radius": getRadius(radius),
      "--cs-size": rem4(size)
    }
  })
);
var ColorSwatch = polymorphicFactory(
  (_props, ref) => {
    const props = useProps3("ColorSwatch", defaultProps3, _props);
    const _a = useProps3("ColorSwatch", defaultProps3, props), {
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
    return /* @__PURE__ */ React8.createElement(
      Box4,
      __spreadValues(__spreadValues({
        ref,
        variant,
        size
      }, getStyles("root", { focusable: true })), others),
      /* @__PURE__ */ React8.createElement("span", __spreadValues({}, getStyles("alphaOverlay"))),
      withShadow && /* @__PURE__ */ React8.createElement("span", __spreadValues({}, getStyles("shadowOverlay"))),
      /* @__PURE__ */ React8.createElement(
        "span",
        __spreadValues({}, getStyles("colorOverlay", { style: { backgroundColor: color } }))
      ),
      /* @__PURE__ */ React8.createElement("span", __spreadValues({}, getStyles("childrenOverlay")), children)
    );
  }
);
ColorSwatch.displayName = "@raikou/core/ColorSwatch";

// src/Swatches/Swatches.tsx
var Swatches = forwardRef5(
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
    const colors = data.map((color, index) => /* @__PURE__ */ React9.createElement(
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
    return /* @__PURE__ */ React9.createElement(Box5, __spreadValues(__spreadProps(__spreadValues({}, getStyles("swatches")), { ref }), others), colors);
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
var varsResolver2 = createVarsResolver2(
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
  const props = useProps4("ColorPicker", defaultProps4, _props);
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
  const getStyles = useStyles2({
    name: __staticSelector,
    props,
    classes: {
      wrapper: "colorPicker-wrapper",
      preview: "colorPicker-preview",
      body: "colorPicker-body",
      sliders: "colorPicker-sliders",
      slider: "colorPicker-slider",
      sliderOverlay: "colorPicker-sliderOverlay",
      thumb: "colorPicker-thumb",
      saturation: "colorPicker-saturation",
      saturationOverlay: "colorPicker-saturationOverlay",
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
  const formatRef = useRef3(format);
  const valueRef = useRef3();
  const scrubTimeoutRef = useRef3(-1);
  const isScrubbingRef = useRef3(false);
  const withAlpha = format === "hexa" || format === "rgba" || format === "hsla";
  const [_value, setValue, controlled] = useUncontrolled({
    value,
    defaultValue,
    finalValue: "#FFFFFF",
    onChange
  });
  const [parsed, setParsed] = useState3(parseColor(_value));
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
  useDidUpdate2(() => {
    if (isColorValid(value) && !isScrubbingRef.current) {
      setParsed(parseColor(value));
    }
  }, [value]);
  useDidUpdate2(() => {
    formatRef.current = format;
    setValue(convertHsvaTo(format, parsed));
  }, [format]);
  return /* @__PURE__ */ React10.createElement(ColorPickerProvider, { value: { getStyles } }, /* @__PURE__ */ React10.createElement(Box6, __spreadValues(__spreadProps(__spreadValues({ ref }, getStyles("wrapper")), { size }), others), withPicker && /* @__PURE__ */ React10.createElement(React10.Fragment, null, /* @__PURE__ */ React10.createElement(
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
  ), /* @__PURE__ */ React10.createElement("div", __spreadValues({}, getStyles("body")), /* @__PURE__ */ React10.createElement("div", __spreadValues({}, getStyles("sliders")), /* @__PURE__ */ React10.createElement(
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
  ), withAlpha && /* @__PURE__ */ React10.createElement(
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
  )), withAlpha && /* @__PURE__ */ React10.createElement(
    ColorSwatch,
    __spreadValues({
      color: _value,
      radius: "sm"
    }, getStyles("preview"))
  ))), Array.isArray(swatches) && /* @__PURE__ */ React10.createElement(
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
export {
  ColorPicker
};
