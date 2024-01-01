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

// src/Rating.tsx
import React6, { useRef, useState as useState2 } from "react";
import { clamp, useId, useMergedRef, useUncontrolled } from "@raikou/hooks";
import {
  Box as Box2,
  factory,
  useProps,
  useStyles,
  createVarsResolver,
  useDirection as useDirection2,
  getSize,
  getThemeColor
} from "@raikou/core";

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

// ../_utils/use-hovered/use-hovered.ts
import { useState } from "react";

// ../_utils/create-use-external-events/create-use-external-events.ts
import { useEffect, useLayoutEffect } from "react";

// src/Rating.context.ts
var [RatingProvider, useRatingContext] = createSafeContext("Rating was not found in tree");

// src/RatingItem/RatingItem.tsx
import React5 from "react";
import {
  Box,
  useDirection
} from "@raikou/core";

// src/StarSymbol/StarSymbol.tsx
import React4 from "react";

// src/StarSymbol/StarIcon.tsx
import React3 from "react";
function StarIcon(props) {
  const _a = props, { width, height, style } = _a, others = __objRest(_a, ["width", "height", "style"]);
  return /* @__PURE__ */ React3.createElement(
    "svg",
    __spreadValues({
      viewBox: "0 0 24 24",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: __spreadValues({ width, height }, style)
    }, others),
    /* @__PURE__ */ React3.createElement("path", { d: "M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" })
  );
}
StarIcon.displayName = "@raikou/core/StarIcon";

// src/StarSymbol/StarSymbol.tsx
function StarSymbol({ type }) {
  const ctx = useRatingContext();
  return /* @__PURE__ */ React4.createElement(
    StarIcon,
    __spreadProps(__spreadValues({}, ctx.getStyles("starSymbol")), {
      "data-filled": type === "full" || void 0
    })
  );
}
StarSymbol.displayName = "@raikou/core/StarSymbol";

// src/RatingItem/RatingItem.tsx
function RatingItem(_a) {
  var _b = _a, {
    size,
    getSymbolLabel,
    emptyIcon,
    fullIcon,
    full,
    active,
    value,
    readOnly,
    fractionValue,
    color,
    id,
    onBlur,
    onChange,
    onInputChange,
    style
  } = _b, others = __objRest(_b, [
    "size",
    "getSymbolLabel",
    "emptyIcon",
    "fullIcon",
    "full",
    "active",
    "value",
    "readOnly",
    "fractionValue",
    "color",
    "id",
    "onBlur",
    "onChange",
    "onInputChange",
    "style"
  ]);
  var _a2;
  const ctx = useRatingContext();
  const _fullIcon = typeof fullIcon === "function" ? fullIcon(value) : fullIcon;
  const _emptyIcon = typeof emptyIcon === "function" ? emptyIcon(value) : emptyIcon;
  const { dir } = useDirection();
  return /* @__PURE__ */ React5.createElement(React5.Fragment, null, !readOnly && /* @__PURE__ */ React5.createElement(
    "input",
    __spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("input")), {
      onKeyDown: (event) => event.key === " " && onChange(value),
      id,
      type: "radio",
      "data-active": active || void 0,
      "aria-label": getSymbolLabel == null ? void 0 : getSymbolLabel(value),
      value,
      onBlur,
      onChange: onInputChange
    }), others)
  ), /* @__PURE__ */ React5.createElement(
    Box,
    __spreadProps(__spreadValues({
      component: readOnly ? "div" : "label"
    }, ctx.getStyles("label")), {
      "data-read-only": readOnly || void 0,
      htmlFor: id,
      onClick: () => onChange(value),
      __vars: {
        "--rating-item-z-index": (_a2 = fractionValue === 1 ? void 0 : active ? 2 : 0) == null ? void 0 : _a2.toString()
      }
    }),
    /* @__PURE__ */ React5.createElement(
      Box,
      __spreadProps(__spreadValues({}, ctx.getStyles("symbolBody")), {
        __vars: {
          "--rating-symbol-clip-path": fractionValue === 1 ? void 0 : dir === "ltr" ? `inset(0 ${active ? 100 - fractionValue * 100 : 100}% 0 0)` : `inset(0 0 0 ${active ? 100 - fractionValue * 100 : 100}% )`
        }
      }),
      full ? _fullIcon || /* @__PURE__ */ React5.createElement(StarSymbol, { type: "full" }) : _emptyIcon || /* @__PURE__ */ React5.createElement(StarSymbol, { type: "empty" })
    )
  ));
}
RatingItem.displayName = "@raikou/core/RatingItem";

// css-module:./Rating.module.css#css-module
var Rating_module_default = { "root": "m-f8d312f2", "symbolGroup": "m-61734bb7", "starSymbol": "m-5662a89a", "input": "m-211007ba", "label": "m-21342ee4", "symbolBody": "m-fae05d6a" };

// src/Rating.tsx
function roundValueTo(value, to) {
  var _a;
  const rounded = Math.round(value / to) * to;
  const precision = ((_a = `${to}`.split(".")[1]) == null ? void 0 : _a.length) || 0;
  return Number(rounded.toFixed(precision));
}
var defaultProps = {
  size: "sm",
  getSymbolLabel: (value) => `${value}`,
  count: 5,
  fractions: 1,
  color: "yellow"
};
var varsResolver = createVarsResolver(
  (theme, { size, color }) => ({
    root: {
      "--rating-size": getSize(size, "rating-size"),
      "--rating-color": getThemeColor(color, theme)
    }
  })
);
var Rating = factory((_props, ref) => {
  const props = useProps("Rating", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    name,
    id,
    value,
    defaultValue,
    onChange,
    fractions,
    count,
    onMouseEnter,
    readOnly,
    onMouseMove,
    onHover,
    onMouseLeave,
    onTouchStart,
    onTouchEnd,
    size,
    variant,
    getSymbolLabel,
    color,
    emptySymbol,
    fullSymbol,
    highlightSelectedOnly
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "name",
    "id",
    "value",
    "defaultValue",
    "onChange",
    "fractions",
    "count",
    "onMouseEnter",
    "readOnly",
    "onMouseMove",
    "onHover",
    "onMouseLeave",
    "onTouchStart",
    "onTouchEnd",
    "size",
    "variant",
    "getSymbolLabel",
    "color",
    "emptySymbol",
    "fullSymbol",
    "highlightSelectedOnly"
  ]);
  const getStyles = useStyles({
    name: "Rating",
    classes: Rating_module_default,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const { dir } = useDirection2();
  const _name = useId(name);
  const _id = useId(id);
  const rootRef = useRef(null);
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: 0,
    onChange
  });
  const [hovered, setHovered] = useState2(-1);
  const [isOutside, setOutside] = useState2(true);
  const _fractions = Math.floor(fractions);
  const _count = Math.floor(count);
  const decimalUnit = 1 / _fractions;
  const stableValueRounded = roundValueTo(_value, decimalUnit);
  const finalValue = hovered !== -1 ? hovered : stableValueRounded;
  const getRatingFromCoordinates = (x) => {
    const { left, right, width } = rootRef.current.getBoundingClientRect();
    const symbolWidth = width / _count;
    const hoverPosition = dir === "rtl" ? right - x : x - left;
    const hoverValue = hoverPosition / symbolWidth;
    return clamp(
      roundValueTo(hoverValue + decimalUnit / 2, decimalUnit),
      decimalUnit,
      _count
    );
  };
  const handleMouseEnter = (event) => {
    onMouseEnter == null ? void 0 : onMouseEnter(event);
    !readOnly && setOutside(false);
  };
  const handleMouseMove = (event) => {
    onMouseMove == null ? void 0 : onMouseMove(event);
    if (readOnly) {
      return;
    }
    const rounded = getRatingFromCoordinates(event.clientX);
    setHovered(rounded);
    rounded !== hovered && (onHover == null ? void 0 : onHover(rounded));
  };
  const handleMouseLeave = (event) => {
    onMouseLeave == null ? void 0 : onMouseLeave(event);
    if (readOnly) {
      return;
    }
    setHovered(-1);
    setOutside(true);
    hovered !== -1 && (onHover == null ? void 0 : onHover(-1));
  };
  const handleTouchStart = (event) => {
    event.preventDefault();
    const { touches } = event;
    if (touches.length !== 1) {
      return;
    }
    const touch = touches[0];
    setValue(getRatingFromCoordinates(touch.clientX));
    onTouchStart == null ? void 0 : onTouchStart(event);
  };
  const handleTouchEnd = (event) => {
    event.preventDefault();
    onTouchEnd == null ? void 0 : onTouchEnd(event);
  };
  const handleItemBlur = () => isOutside && setHovered(-1);
  const handleInputChange = (event) => {
    if (!readOnly) {
      if (typeof event === "number") {
        setHovered(event);
      } else {
        setHovered(parseFloat(event.target.value));
      }
    }
  };
  const handleChange = (event) => {
    if (!readOnly) {
      if (typeof event === "number") {
        setValue(event);
      } else {
        setValue(parseFloat(event.target.value));
      }
    }
  };
  const items = Array(_count).fill(0).map((_, index) => {
    const integerValue = index + 1;
    const fractionItems = Array.from(
      new Array(index === 0 ? _fractions + 1 : _fractions)
    );
    const isGroupActive = !readOnly && Math.ceil(hovered) === integerValue;
    return /* @__PURE__ */ React6.createElement(
      "div",
      __spreadValues({
        key: integerValue,
        "data-active": isGroupActive || void 0
      }, getStyles("symbolGroup")),
      fractionItems.map((__, fractionIndex) => {
        const fractionValue = decimalUnit * (index === 0 ? fractionIndex : fractionIndex + 1);
        const symbolValue = roundValueTo(
          integerValue - 1 + fractionValue,
          decimalUnit
        );
        return /* @__PURE__ */ React6.createElement(
          RatingItem,
          {
            key: `${integerValue}-${symbolValue}`,
            size,
            getSymbolLabel,
            emptyIcon: emptySymbol,
            fullIcon: fullSymbol,
            full: highlightSelectedOnly ? symbolValue === finalValue : symbolValue <= finalValue,
            active: symbolValue === finalValue,
            checked: symbolValue === stableValueRounded,
            readOnly,
            fractionValue,
            value: symbolValue,
            name: _name,
            onChange: handleChange,
            onBlur: handleItemBlur,
            onInputChange: handleInputChange,
            id: `${_id}-${index}-${fractionIndex}`
          }
        );
      })
    );
  });
  return /* @__PURE__ */ React6.createElement(RatingProvider, { value: { getStyles } }, /* @__PURE__ */ React6.createElement(
    Box2,
    __spreadValues(__spreadProps(__spreadValues({
      ref: useMergedRef(rootRef, ref)
    }, getStyles("root")), {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
      variant,
      size
    }), others),
    items
  ));
});
Rating.classes = Rating_module_default;
Rating.displayName = "@raikou/core/Rating";
export {
  Rating
};
//# sourceMappingURL=index.mjs.map