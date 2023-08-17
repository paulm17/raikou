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
  Rating: () => Rating
});
module.exports = __toCommonJS(src_exports);

// src/Rating.tsx
var import_react8 = __toESM(require("react"));
var import_hooks = require("@raikou/hooks");
var import_core2 = require("@raikou/core");

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

// src/Rating.context.ts
var [RatingProvider, useRatingContext] = createSafeContext("Rating was not found in tree");

// src/RatingItem/RatingItem.tsx
var import_react7 = __toESM(require("react"));
var import_core = require("@raikou/core");

// src/StarSymbol/StarSymbol.tsx
var import_react6 = __toESM(require("react"));

// src/StarSymbol/StarIcon.tsx
var import_react5 = __toESM(require("react"));
function StarIcon(props) {
  const _a = props, { width, height, style } = _a, others = __objRest(_a, ["width", "height", "style"]);
  return /* @__PURE__ */ import_react5.default.createElement(
    "svg",
    __spreadValues({
      viewBox: "0 0 24 24",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: __spreadValues({ width, height }, style)
    }, others),
    /* @__PURE__ */ import_react5.default.createElement("path", { d: "M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" })
  );
}
StarIcon.displayName = "@raikou/core/StarIcon";

// src/StarSymbol/StarSymbol.tsx
function StarSymbol({ type }) {
  const ctx = useRatingContext();
  return /* @__PURE__ */ import_react6.default.createElement(
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
    onChange,
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
    "onChange",
    "style"
  ]);
  var _a2;
  const ctx = useRatingContext();
  const _fullIcon = typeof fullIcon === "function" ? fullIcon(value) : fullIcon;
  const _emptyIcon = typeof emptyIcon === "function" ? emptyIcon(value) : emptyIcon;
  return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, !readOnly && /* @__PURE__ */ import_react7.default.createElement(
    "input",
    __spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("input")), {
      onKeyDown: (event) => event.key === " " && onChange(value),
      id,
      type: "radio",
      "data-active": active || void 0,
      "aria-label": getSymbolLabel == null ? void 0 : getSymbolLabel(value),
      value,
      onChange
    }), others)
  ), /* @__PURE__ */ import_react7.default.createElement(
    import_core.Box,
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
    /* @__PURE__ */ import_react7.default.createElement(
      import_core.Box,
      __spreadProps(__spreadValues({}, ctx.getStyles("symbolBody")), {
        __vars: {
          "--rating-symbol-clip-path": fractionValue === 1 ? void 0 : `inset(0 ${active ? 100 - fractionValue * 100 : 100}% 0 0)`
        }
      }),
      full ? _fullIcon || /* @__PURE__ */ import_react7.default.createElement(StarSymbol, { type: "full" }) : _emptyIcon || /* @__PURE__ */ import_react7.default.createElement(StarSymbol, { type: "empty" })
    )
  ));
}
RatingItem.displayName = "@raikou/core/RatingItem";

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
var varsResolver = (0, import_core2.createVarsResolver)(
  (theme, { size, color }) => ({
    root: {
      "--rating-size": (0, import_core2.getSize)(size, "rating-size"),
      "--rating-color": (0, import_core2.getThemeColor)(color, theme)
    }
  })
);
var Rating = (0, import_core2.factory)((_props, ref) => {
  const props = (0, import_core2.useProps)("Rating", defaultProps, _props);
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
    "size",
    "variant",
    "getSymbolLabel",
    "color",
    "emptySymbol",
    "fullSymbol",
    "highlightSelectedOnly"
  ]);
  const getStyles = (0, import_core2.useStyles)({
    name: "Rating",
    classes: {
      root: "rating-root",
      starSymbol: "rating-starSymbol",
      input: "rating-input",
      label: "rating-label",
      symbolBody: "rating-symbolBody",
      symbolGroup: "rating-symbolGroup"
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
  const { dir } = (0, import_core2.useDirection)();
  const _name = (0, import_hooks.useId)(name);
  const _id = (0, import_hooks.useId)(id);
  const rootRef = (0, import_react8.useRef)(null);
  const [_value, setValue] = (0, import_hooks.useUncontrolled)({
    value,
    defaultValue,
    finalValue: 0,
    onChange
  });
  const [hovered, setHovered] = (0, import_react8.useState)(-1);
  const [isOutside, setOutside] = (0, import_react8.useState)(true);
  const _fractions = Math.floor(fractions);
  const _count = Math.floor(count);
  const decimalUnit = 1 / _fractions;
  const stableValueRounded = roundValueTo(_value, decimalUnit);
  const finalValue = hovered !== -1 ? hovered : stableValueRounded;
  const handleMouseEnter = (event) => {
    onMouseEnter == null ? void 0 : onMouseEnter(event);
    !readOnly && setOutside(false);
  };
  const handleMouseMove = (event) => {
    onMouseMove == null ? void 0 : onMouseMove(event);
    if (readOnly) {
      return;
    }
    const { left, right, width } = rootRef.current.getBoundingClientRect();
    const symbolWidth = width / _count;
    const hoverPosition = dir === "rtl" ? right - event.clientX : event.clientX - left;
    const hoverValue = hoverPosition / symbolWidth;
    const rounded = (0, import_hooks.clamp)(
      roundValueTo(hoverValue + decimalUnit / 2, decimalUnit),
      decimalUnit,
      _count
    );
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
  const handleItemBlur = () => isOutside && setHovered(-1);
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
    return /* @__PURE__ */ import_react8.default.createElement(
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
        return /* @__PURE__ */ import_react8.default.createElement(
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
            id: `${_id}-${index}-${fractionIndex}`
          }
        );
      })
    );
  });
  return /* @__PURE__ */ import_react8.default.createElement(RatingProvider, { value: { getStyles } }, /* @__PURE__ */ import_react8.default.createElement(
    import_core2.Box,
    __spreadValues(__spreadProps(__spreadValues({
      ref: (0, import_hooks.useMergedRef)(rootRef, ref)
    }, getStyles("root")), {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      variant,
      size
    }), others),
    items
  ));
});
Rating.displayName = "@raikou/core/Rating";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Rating
});
