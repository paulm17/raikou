"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
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
  Arc: () => Arc,
  Area: () => Area,
  AreaClosed: () => AreaClosed,
  AreaStack: () => AreaStack,
  Bar: () => Bar,
  BarGroup: () => BarGroup,
  BarGroupHorizontal: () => BarGroupHorizontal,
  BarRounded: () => BarRounded,
  BarStack: () => BarStack,
  BarStackHorizontal: () => BarStackHorizontal,
  Circle: () => Circle,
  Group: () => Group,
  Line: () => Line,
  LinePath: () => LinePath,
  LineRadial: () => LineRadial,
  LinkHorizontal: () => LinkHorizontalDiagonal,
  LinkHorizontalCurve: () => LinkHorizontalCurve,
  LinkHorizontalLine: () => LinkHorizontalLine,
  LinkHorizontalStep: () => LinkHorizontalStep,
  LinkRadial: () => LinkRadialDiagonal,
  LinkRadialCurve: () => LinkRadialCurve,
  LinkRadialLine: () => LinkRadialLine,
  LinkRadialStep: () => LinkRadialStep,
  LinkVertical: () => LinkVerticalDiagonal,
  LinkVerticalCurve: () => LinkVerticalCurve,
  LinkVerticalLine: () => LinkVerticalLine,
  LinkVerticalStep: () => LinkVerticalStep,
  Pie: () => Pie,
  Polygon: () => Polygon,
  STACK_OFFSETS: () => STACK_OFFSETS,
  STACK_OFFSET_NAMES: () => STACK_OFFSET_NAMES,
  STACK_ORDERS: () => STACK_ORDERS,
  STACK_ORDER_NAMES: () => STACK_ORDER_NAMES,
  SplitLinePath: () => SplitLinePath,
  Stack: () => Stack,
  arc: () => arc,
  area: () => area,
  coerceNumber: () => coerceNumber,
  createScale: () => createScale_default,
  degreesToRadians: () => degreesToRadians,
  getPoint: () => getPoint,
  getPoints: () => getPoints,
  getTicks: () => getTicks,
  inferScaleType: () => inferScaleType,
  line: () => line,
  pathHorizontalCurve: () => pathHorizontalCurve,
  pathHorizontalDiagonal: () => pathHorizontalDiagonal,
  pathHorizontalLine: () => pathHorizontalLine,
  pathHorizontalStep: () => pathHorizontalStep,
  pathRadialCurve: () => pathRadialCurve,
  pathRadialDiagonal: () => pathRadialDiagonal,
  pathRadialLine: () => pathRadialLine,
  pathRadialStep: () => pathRadialStep,
  pathVerticalCurve: () => pathVerticalCurve,
  pathVerticalDiagonal: () => pathVerticalDiagonal,
  pathVerticalLine: () => pathVerticalLine,
  pathVerticalStep: () => pathVerticalStep,
  pie: () => pie,
  radialLine: () => radialLine,
  scaleBand: () => createBandScale,
  scaleCanBeZeroed: () => scaleCanBeZeroed,
  scaleLinear: () => createLinearScale,
  scaleLog: () => createLogScale,
  scaleOrdinal: () => createOrdinalScale,
  scalePoint: () => createPointScale,
  scalePower: () => createPowScale,
  scaleQuantile: () => createQuantileScale,
  scaleQuantize: () => createQuantizeScale,
  scaleRadial: () => createRadialScale,
  scaleSqrt: () => createSqrtScale,
  scaleSymlog: () => createSymlogScale,
  scaleThreshold: () => createThresholdScale,
  scaleTime: () => createTimeScale,
  scaleUtc: () => createUtcScale,
  stack: () => stack,
  stackOffset: () => stackOffset,
  stackOrder: () => stackOrder,
  toString: () => toString,
  updateScale: () => updateScale_default
});
module.exports = __toCommonJS(src_exports);

// src/group/Group.tsx
var import_react = __toESM(require("react"));
var import_clsx = __toESM(require("clsx"));
function Group(_a) {
  var _b = _a, {
    top = 0,
    left = 0,
    transform,
    className,
    children,
    innerRef
  } = _b, restProps = __objRest(_b, [
    "top",
    "left",
    "transform",
    "className",
    "children",
    "innerRef"
  ]);
  return /* @__PURE__ */ import_react.default.createElement(
    "g",
    __spreadValues({
      ref: innerRef,
      className: (0, import_clsx.default)("visx-group", className),
      transform: transform || `translate(${left}, ${top})`
    }, restProps),
    children
  );
}

// src/scale/scales/band.ts
var import_d3_scale = require("d3-scale");

// src/scale/operators/domain.ts
function applyDomain(scale, config) {
  if (config.domain) {
    if ("nice" in scale || "quantiles" in scale) {
      scale.domain(config.domain);
    } else if ("padding" in scale) {
      scale.domain(config.domain);
    } else {
      scale.domain(config.domain);
    }
  }
}

// src/scale/operators/range.ts
function applyRange(scale, config) {
  if (config.range) {
    if ("padding" in scale) {
      scale.range(config.range);
    } else {
      scale.range(config.range);
    }
  }
}

// src/scale/operators/align.ts
function applyAlign(scale, config) {
  if ("align" in scale && "align" in config && typeof config.align !== "undefined") {
    scale.align(config.align);
  }
}

// src/scale/operators/base.ts
function applyBase(scale, config) {
  if ("base" in scale && "base" in config && typeof config.base !== "undefined") {
    scale.base(config.base);
  }
}

// src/scale/operators/clamp.ts
function applyClamp(scale, config) {
  if ("clamp" in scale && "clamp" in config && typeof config.clamp !== "undefined") {
    scale.clamp(config.clamp);
  }
}

// src/scale/operators/constant.ts
function applyConstant(scale, config) {
  if ("constant" in scale && "constant" in config && typeof config.constant !== "undefined") {
    scale.constant(config.constant);
  }
}

// src/scale/operators/exponent.ts
function applyExponent(scale, config) {
  if ("exponent" in scale && "exponent" in config && typeof config.exponent !== "undefined") {
    scale.exponent(config.exponent);
  }
}

// src/scale/utils/createColorInterpolator.ts
var import_d3_interpolate = require("d3-interpolate");
var interpolatorMap = {
  lab: import_d3_interpolate.interpolateLab,
  hcl: import_d3_interpolate.interpolateHcl,
  "hcl-long": import_d3_interpolate.interpolateHclLong,
  hsl: import_d3_interpolate.interpolateHsl,
  "hsl-long": import_d3_interpolate.interpolateHslLong,
  cubehelix: import_d3_interpolate.interpolateCubehelix,
  "cubehelix-long": import_d3_interpolate.interpolateCubehelixLong,
  rgb: import_d3_interpolate.interpolateRgb
};
function createColorInterpolator(interpolate) {
  switch (interpolate) {
    case "lab":
    case "hcl":
    case "hcl-long":
    case "hsl":
    case "hsl-long":
    case "cubehelix":
    case "cubehelix-long":
    case "rgb":
      return interpolatorMap[interpolate];
    default:
  }
  const { type, gamma } = interpolate;
  const interpolator = interpolatorMap[type];
  return typeof gamma === "undefined" ? interpolator : interpolator.gamma(gamma);
}

// src/scale/operators/interpolate.ts
function applyInterpolate(scale, config) {
  if ("interpolate" in config && "interpolate" in scale && typeof config.interpolate !== "undefined") {
    const interpolator = createColorInterpolator(config.interpolate);
    scale.interpolate(
      interpolator
    );
  }
}

// src/scale/operators/nice.ts
var import_d3_time = require("d3-time");

// src/scale/utils/isUtcScale.ts
var TEST_TIME = new Date(Date.UTC(2020, 1, 2, 3, 4, 5));
var TEST_FORMAT = "%Y-%m-%d %H:%M";
function isUtcScale(scale) {
  const output = scale.tickFormat(1, TEST_FORMAT)(TEST_TIME);
  return output === "2020-02-02 03:04";
}

// src/scale/operators/nice.ts
var localTimeIntervals = {
  day: import_d3_time.timeDay,
  hour: import_d3_time.timeHour,
  minute: import_d3_time.timeMinute,
  month: import_d3_time.timeMonth,
  second: import_d3_time.timeSecond,
  week: import_d3_time.timeWeek,
  year: import_d3_time.timeYear
};
var utcIntervals = {
  day: import_d3_time.utcDay,
  hour: import_d3_time.utcHour,
  minute: import_d3_time.utcMinute,
  month: import_d3_time.utcMonth,
  second: import_d3_time.utcSecond,
  week: import_d3_time.utcWeek,
  year: import_d3_time.utcYear
};
function applyNice(scale, config) {
  if ("nice" in config && typeof config.nice !== "undefined" && "nice" in scale) {
    const { nice } = config;
    if (typeof nice === "boolean") {
      if (nice) {
        scale.nice();
      }
    } else if (typeof nice === "number") {
      scale.nice(nice);
    } else {
      const timeScale = scale;
      const isUtc = isUtcScale(timeScale);
      if (typeof nice === "string") {
        timeScale.nice(isUtc ? utcIntervals[nice] : localTimeIntervals[nice]);
      } else {
        const { interval, step } = nice;
        const parsedInterval = (isUtc ? utcIntervals[interval] : localTimeIntervals[interval]).every(step);
        if (parsedInterval != null) {
          timeScale.nice(parsedInterval);
        }
      }
    }
  }
}

// src/scale/operators/padding.ts
function applyPadding(scale, config) {
  if ("padding" in scale && "padding" in config && typeof config.padding !== "undefined") {
    scale.padding(config.padding);
  }
  if ("paddingInner" in scale && "paddingInner" in config && typeof config.paddingInner !== "undefined") {
    scale.paddingInner(config.paddingInner);
  }
  if ("paddingOuter" in scale && "paddingOuter" in config && typeof config.paddingOuter !== "undefined") {
    scale.paddingOuter(config.paddingOuter);
  }
}

// src/scale/operators/reverse.ts
function applyReverse(scale, config) {
  if (config.reverse) {
    const reversedRange = scale.range().slice().reverse();
    if ("padding" in scale) {
      scale.range(reversedRange);
    } else {
      scale.range(reversedRange);
    }
  }
}

// src/scale/operators/round.ts
var import_d3_interpolate2 = require("d3-interpolate");
function applyRound(scale, config) {
  if ("round" in config && typeof config.round !== "undefined") {
    if (config.round && "interpolate" in config && typeof config.interpolate !== "undefined") {
      console.warn(
        `[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:`,
        config
      );
    } else if ("round" in scale) {
      scale.round(config.round);
    } else if ("interpolate" in scale && config.round) {
      scale.interpolate(
        import_d3_interpolate2.interpolateRound
      );
    }
  }
}

// src/scale/operators/unknown.ts
function applyUnknown(scale, config) {
  if ("unknown" in scale && "unknown" in config && typeof config.unknown !== "undefined") {
    scale.unknown(config.unknown);
  }
}

// src/scale/operators/zero.ts
function applyZero(scale, config) {
  if ("zero" in config && config.zero === true) {
    const domain = scale.domain();
    const [a, b] = domain;
    const isDescending = b < a;
    const [min, max] = isDescending ? [b, a] : [a, b];
    const domainWithZero = [Math.min(0, min), Math.max(0, max)];
    scale.domain(isDescending ? domainWithZero.reverse() : domainWithZero);
  }
}

// src/scale/operators/scaleOperator.ts
var ALL_OPERATORS = [
  // domain => nice => zero
  "domain",
  "nice",
  "zero",
  // interpolate before round
  "interpolate",
  "round",
  // set range then reverse
  "range",
  "reverse",
  // Order does not matter for these operators
  "align",
  "base",
  "clamp",
  "constant",
  "exponent",
  "padding",
  "unknown"
];
var operators = {
  domain: applyDomain,
  nice: applyNice,
  zero: applyZero,
  interpolate: applyInterpolate,
  round: applyRound,
  align: applyAlign,
  base: applyBase,
  clamp: applyClamp,
  constant: applyConstant,
  exponent: applyExponent,
  padding: applyPadding,
  range: applyRange,
  reverse: applyReverse,
  unknown: applyUnknown
};
function scaleOperator(...ops) {
  const selection = new Set(ops);
  const selectedOps = ALL_OPERATORS.filter((o) => selection.has(o));
  return function applyOperators(scale, config) {
    if (typeof config !== "undefined") {
      selectedOps.forEach((op) => {
        operators[op](scale, config);
      });
    }
    return scale;
  };
}

// src/scale/scales/band.ts
var updateBandScale = scaleOperator(
  "domain",
  "range",
  "reverse",
  "align",
  "padding",
  "round"
);
function createBandScale(config) {
  return updateBandScale((0, import_d3_scale.scaleBand)(), config);
}

// src/scale/scales/point.ts
var import_d3_scale2 = require("d3-scale");
var updatePointScale = scaleOperator(
  "domain",
  "range",
  "reverse",
  "align",
  "padding",
  "round"
);
function createPointScale(config) {
  return updatePointScale((0, import_d3_scale2.scalePoint)(), config);
}

// src/scale/scales/linear.ts
var import_d3_scale3 = require("d3-scale");
var updateLinearScale = scaleOperator(
  "domain",
  "range",
  "reverse",
  "clamp",
  "interpolate",
  "nice",
  "round",
  "zero"
);
function createLinearScale(config) {
  return updateLinearScale((0, import_d3_scale3.scaleLinear)(), config);
}

// src/scale/scales/radial.ts
var import_d3_scale4 = require("d3-scale");
var updateRadialScale = scaleOperator(
  "domain",
  "range",
  "clamp",
  "nice",
  "round",
  "unknown"
);
function createRadialScale(config) {
  return updateRadialScale((0, import_d3_scale4.scaleRadial)(), config);
}

// src/scale/scales/time.ts
var import_d3_scale5 = require("d3-scale");
var updateTimeScale = scaleOperator(
  "domain",
  "range",
  "reverse",
  "clamp",
  "interpolate",
  "nice",
  "round"
);
function createTimeScale(config) {
  return updateTimeScale((0, import_d3_scale5.scaleTime)(), config);
}

// src/scale/scales/utc.ts
var import_d3_scale6 = require("d3-scale");
var updateUtcScale = scaleOperator(
  "domain",
  "range",
  "reverse",
  "clamp",
  "interpolate",
  "nice",
  "round"
);
function createUtcScale(config) {
  return updateUtcScale((0, import_d3_scale6.scaleUtc)(), config);
}

// src/scale/scales/log.ts
var import_d3_scale7 = require("d3-scale");
var updateLogScale = scaleOperator(
  "domain",
  "range",
  "reverse",
  "base",
  "clamp",
  "interpolate",
  "nice",
  "round"
);
function createLogScale(config) {
  return updateLogScale((0, import_d3_scale7.scaleLog)(), config);
}

// src/scale/scales/power.ts
var import_d3_scale8 = require("d3-scale");
var updatePowScale = scaleOperator(
  "domain",
  "range",
  "reverse",
  "clamp",
  "exponent",
  "interpolate",
  "nice",
  "round",
  "zero"
);
function createPowScale(config) {
  return updatePowScale((0, import_d3_scale8.scalePow)(), config);
}

// src/scale/scales/ordinal.ts
var import_d3_scale9 = require("d3-scale");
var updateOrdinalScale = scaleOperator(
  "domain",
  "range",
  "reverse",
  "unknown"
);
function createOrdinalScale(config) {
  return updateOrdinalScale((0, import_d3_scale9.scaleOrdinal)(), config);
}

// src/scale/scales/quantize.ts
var import_d3_scale10 = require("d3-scale");
var updateQuantizeScale = scaleOperator(
  "domain",
  "range",
  "reverse",
  "nice",
  "zero"
);
function createQuantizeScale(config) {
  return updateQuantizeScale((0, import_d3_scale10.scaleQuantize)(), config);
}

// src/scale/scales/quantile.ts
var import_d3_scale11 = require("d3-scale");
var updateQuantileScale = scaleOperator(
  "domain",
  "range",
  "reverse"
);
function createQuantileScale(config) {
  return updateQuantileScale((0, import_d3_scale11.scaleQuantile)(), config);
}

// src/scale/scales/symlog.ts
var import_d3_scale12 = require("d3-scale");
var updateSymlogScale = scaleOperator(
  "domain",
  "range",
  "reverse",
  "clamp",
  "constant",
  "nice",
  "zero",
  "round"
);
function createSymlogScale(config) {
  return updateSymlogScale((0, import_d3_scale12.scaleSymlog)(), config);
}

// src/scale/scales/threshold.ts
var import_d3_scale13 = require("d3-scale");
var updateThresholdScale = scaleOperator(
  "domain",
  "range",
  "reverse"
);
function createThresholdScale(config) {
  return updateThresholdScale((0, import_d3_scale13.scaleThreshold)(), config);
}

// src/scale/scales/squareRoot.ts
var import_d3_scale14 = require("d3-scale");
var updateSqrtScale = scaleOperator(
  "domain",
  "range",
  "reverse",
  "clamp",
  "interpolate",
  "nice",
  "round",
  "zero"
);
function createSqrtScale(config) {
  return updateSqrtScale((0, import_d3_scale14.scaleSqrt)(), config);
}

// src/scale/createScale.ts
function createScale(config) {
  if (typeof config !== "undefined" && "type" in config) {
    switch (config.type) {
      case "linear":
        return createLinearScale(config);
      case "log":
        return createLogScale(config);
      case "pow":
        return createPowScale(config);
      case "sqrt":
        return createSqrtScale(config);
      case "symlog":
        return createSymlogScale(config);
      case "time":
        return createTimeScale(config);
      case "utc":
        return createUtcScale(config);
      case "quantile":
        return createQuantileScale(config);
      case "quantize":
        return createQuantizeScale(config);
      case "threshold":
        return createThresholdScale(config);
      case "ordinal":
        return createOrdinalScale(config);
      case "point":
        return createPointScale(config);
      case "band":
        return createBandScale(config);
      default:
    }
  }
  return createLinearScale(config);
}
var createScale_default = createScale;

// src/scale/updateScale.ts
var applyAllOperators = scaleOperator(...ALL_OPERATORS);
function updateScale(scale, config) {
  return applyAllOperators(scale.copy(), config);
}
var updateScale_default = updateScale;

// src/scale/utils/inferScaleType.ts
function inferScaleType(scale) {
  if ("paddingInner" in scale) {
    return "band";
  }
  if ("padding" in scale) {
    return "point";
  }
  if ("quantiles" in scale) {
    return "quantile";
  }
  if ("base" in scale) {
    return "log";
  }
  if ("exponent" in scale) {
    return scale.exponent() === 0.5 ? "sqrt" : "pow";
  }
  if ("constant" in scale) {
    return "symlog";
  }
  if ("clamp" in scale) {
    if (scale.ticks()[0] instanceof Date) {
      return isUtcScale(scale) ? "utc" : "time";
    }
    return "linear";
  }
  if ("nice" in scale) {
    return "quantize";
  }
  if ("invertExtent" in scale) {
    return "threshold";
  }
  return "ordinal";
}

// src/scale/utils/coerceNumber.ts
function coerceNumber(val) {
  if ((typeof val === "function" || typeof val === "object" && !!val) && "valueOf" in val) {
    const num = val.valueOf();
    if (typeof num === "number")
      return num;
  }
  return val;
}

// src/scale/utils/getTicks.ts
function getTicks(scale, numTicks) {
  const s = scale;
  if ("ticks" in s) {
    return s.ticks(numTicks);
  }
  return s.domain().filter(
    (_, index, arr) => numTicks == null || arr.length <= numTicks || index % Math.round((arr.length - 1) / numTicks) === 0
  );
}

// src/scale/utils/toString.ts
function toString(x) {
  return x == null ? void 0 : x.toString();
}

// src/scale/utils/scaleCanBeZeroed.ts
var zeroableScaleTypes = /* @__PURE__ */ new Set(["linear", "pow", "quantize", "sqrt", "symlog"]);
function scaleCanBeZeroed(scaleConfig) {
  return zeroableScaleTypes.has(scaleConfig.type);
}

// src/shape/shapes/Arc.tsx
var import_react2 = __toESM(require("react"));
var import_clsx2 = __toESM(require("clsx"));

// src/shape/util/D3ShapeFactories.ts
var import_d3_shape3 = require("d3-shape");

// src/shape/util/setNumberOrNumberAccessor.ts
function setNumberOrNumberAccessor(func, value) {
  if (typeof value === "number")
    func(value);
  else
    func(value);
}

// src/shape/util/stackOrder.ts
var import_d3_shape = require("d3-shape");
var STACK_ORDERS = {
  ascending: import_d3_shape.stackOrderAscending,
  descending: import_d3_shape.stackOrderDescending,
  insideout: import_d3_shape.stackOrderInsideOut,
  none: import_d3_shape.stackOrderNone,
  reverse: import_d3_shape.stackOrderReverse
};
var STACK_ORDER_NAMES = Object.keys(STACK_ORDERS);
function stackOrder(order) {
  return order && STACK_ORDERS[order] || STACK_ORDERS.none;
}

// src/shape/util/stackOffset.ts
var import_d3_shape2 = require("d3-shape");
var STACK_OFFSETS = {
  expand: import_d3_shape2.stackOffsetExpand,
  diverging: import_d3_shape2.stackOffsetDiverging,
  none: import_d3_shape2.stackOffsetNone,
  silhouette: import_d3_shape2.stackOffsetSilhouette,
  wiggle: import_d3_shape2.stackOffsetWiggle
};
var STACK_OFFSET_NAMES = Object.keys(STACK_OFFSETS);
function stackOffset(offset) {
  return offset && STACK_OFFSETS[offset] || STACK_OFFSETS.none;
}

// src/shape/util/D3ShapeFactories.ts
function arc({
  innerRadius,
  outerRadius,
  cornerRadius,
  startAngle,
  endAngle,
  padAngle,
  padRadius
} = {}) {
  const path = (0, import_d3_shape3.arc)();
  if (innerRadius != null)
    setNumberOrNumberAccessor(path.innerRadius, innerRadius);
  if (outerRadius != null)
    setNumberOrNumberAccessor(path.outerRadius, outerRadius);
  if (cornerRadius != null)
    setNumberOrNumberAccessor(path.cornerRadius, cornerRadius);
  if (startAngle != null)
    setNumberOrNumberAccessor(path.startAngle, startAngle);
  if (endAngle != null)
    setNumberOrNumberAccessor(path.endAngle, endAngle);
  if (padAngle != null)
    setNumberOrNumberAccessor(path.padAngle, padAngle);
  if (padRadius != null)
    setNumberOrNumberAccessor(path.padRadius, padRadius);
  return path;
}
function area({ x, x0, x1, y, y0, y1, defined, curve } = {}) {
  const path = (0, import_d3_shape3.area)();
  if (x)
    setNumberOrNumberAccessor(path.x, x);
  if (x0)
    setNumberOrNumberAccessor(path.x0, x0);
  if (x1)
    setNumberOrNumberAccessor(path.x1, x1);
  if (y)
    setNumberOrNumberAccessor(path.y, y);
  if (y0)
    setNumberOrNumberAccessor(path.y0, y0);
  if (y1)
    setNumberOrNumberAccessor(path.y1, y1);
  if (defined)
    path.defined(defined);
  if (curve)
    path.curve(curve);
  return path;
}
function line({ x, y, defined, curve } = {}) {
  const path = (0, import_d3_shape3.line)();
  if (x)
    setNumberOrNumberAccessor(path.x, x);
  if (y)
    setNumberOrNumberAccessor(path.y, y);
  if (defined)
    path.defined(defined);
  if (curve)
    path.curve(curve);
  return path;
}
function pie({
  startAngle,
  endAngle,
  padAngle,
  value,
  sort,
  sortValues
} = {}) {
  const path = (0, import_d3_shape3.pie)();
  if (sort === null)
    path.sort(sort);
  else if (sort != null)
    path.sort(sort);
  if (sortValues === null)
    path.sortValues(sortValues);
  else if (sortValues != null)
    path.sortValues(sortValues);
  if (value != null)
    path.value(value);
  if (padAngle != null)
    setNumberOrNumberAccessor(path.padAngle, padAngle);
  if (startAngle != null)
    setNumberOrNumberAccessor(path.startAngle, startAngle);
  if (endAngle != null)
    setNumberOrNumberAccessor(path.endAngle, endAngle);
  return path;
}
function radialLine({
  angle,
  radius,
  defined,
  curve
} = {}) {
  const path = (0, import_d3_shape3.radialLine)();
  if (angle)
    setNumberOrNumberAccessor(path.angle, angle);
  if (radius)
    setNumberOrNumberAccessor(path.radius, radius);
  if (defined)
    path.defined(defined);
  if (curve)
    path.curve(curve);
  return path;
}
function stack({ keys, value, order, offset }) {
  const path = (0, import_d3_shape3.stack)();
  if (keys)
    path.keys(keys);
  if (value)
    setNumberOrNumberAccessor(path.value, value);
  if (order)
    path.order(stackOrder(order));
  if (offset)
    path.offset(stackOffset(offset));
  return path;
}

// src/shape/shapes/Arc.tsx
function Arc(_a) {
  var _b = _a, {
    className,
    data,
    innerRadius,
    outerRadius,
    cornerRadius,
    startAngle,
    endAngle,
    padAngle,
    padRadius,
    children,
    innerRef
  } = _b, restProps = __objRest(_b, [
    "className",
    "data",
    "innerRadius",
    "outerRadius",
    "cornerRadius",
    "startAngle",
    "endAngle",
    "padAngle",
    "padRadius",
    "children",
    "innerRef"
  ]);
  const path = arc({
    innerRadius,
    outerRadius,
    cornerRadius,
    startAngle,
    endAngle,
    padAngle,
    padRadius
  });
  if (children)
    return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, children({ path }));
  if (!data && (startAngle == null || endAngle == null || innerRadius == null || outerRadius == null)) {
    console.warn(
      "[@visx/shape/Arc]: expected data because one of startAngle, endAngle, innerRadius, outerRadius is undefined. Bailing."
    );
    return null;
  }
  return /* @__PURE__ */ import_react2.default.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: (0, import_clsx2.default)("visx-arc", className),
      d: path(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/Pie.tsx
var import_react3 = __toESM(require("react"));
var import_clsx3 = __toESM(require("clsx"));
function Pie(_a) {
  var _b = _a, {
    className,
    top,
    left,
    data = [],
    centroid,
    innerRadius = 0,
    outerRadius,
    cornerRadius,
    startAngle,
    endAngle,
    padAngle,
    padRadius,
    pieSort,
    pieSortValues,
    pieValue,
    children,
    fill = ""
  } = _b, restProps = __objRest(_b, [
    "className",
    "top",
    "left",
    "data",
    "centroid",
    "innerRadius",
    "outerRadius",
    "cornerRadius",
    "startAngle",
    "endAngle",
    "padAngle",
    "padRadius",
    "pieSort",
    "pieSortValues",
    "pieValue",
    "children",
    "fill"
  ]);
  const path = arc({
    innerRadius,
    outerRadius,
    cornerRadius,
    padRadius
  });
  const pie2 = pie({
    startAngle,
    endAngle,
    padAngle,
    value: pieValue,
    sort: pieSort,
    sortValues: pieSortValues
  });
  const arcs = pie2(data);
  if (children)
    return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, children({ arcs, path, pie: pie2 }));
  return /* @__PURE__ */ import_react3.default.createElement(Group, { className: "visx-pie-arcs-group", top, left }, arcs.map((arc2, i) => /* @__PURE__ */ import_react3.default.createElement("g", { key: `pie-arc-${i}` }, /* @__PURE__ */ import_react3.default.createElement(
    "path",
    __spreadValues({
      className: (0, import_clsx3.default)("visx-pie-arc", className),
      d: path(arc2) || "",
      fill: fill == null || typeof fill === "string" ? fill : fill(arc2)
    }, restProps)
  ), centroid == null ? void 0 : centroid(path.centroid(arc2), arc2))));
}

// src/shape/shapes/Line.tsx
var import_react4 = __toESM(require("react"));
var import_clsx4 = __toESM(require("clsx"));
function Line(_a) {
  var _b = _a, {
    from = { x: 0, y: 0 },
    to = { x: 1, y: 1 },
    fill = "transparent",
    className,
    innerRef
  } = _b, restProps = __objRest(_b, [
    "from",
    "to",
    "fill",
    "className",
    "innerRef"
  ]);
  const isRectilinear = from.x === to.x || from.y === to.y;
  return /* @__PURE__ */ import_react4.default.createElement(
    "line",
    __spreadValues({
      ref: innerRef,
      className: (0, import_clsx4.default)("visx-line", className),
      x1: from.x,
      y1: from.y,
      x2: to.x,
      y2: to.y,
      fill,
      shapeRendering: isRectilinear ? "crispEdges" : "auto"
    }, restProps)
  );
}

// src/shape/shapes/LinePath.tsx
var import_react5 = __toESM(require("react"));
var import_clsx5 = __toESM(require("clsx"));
function LinePath(_a) {
  var _b = _a, {
    children,
    data = [],
    x,
    y,
    fill = "transparent",
    className,
    curve,
    innerRef,
    defined = () => true
  } = _b, restProps = __objRest(_b, [
    "children",
    "data",
    "x",
    "y",
    "fill",
    "className",
    "curve",
    "innerRef",
    "defined"
  ]);
  const path = line({ x, y, defined, curve });
  if (children)
    return /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, children({ path }));
  return /* @__PURE__ */ import_react5.default.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: (0, import_clsx5.default)("visx-linepath", className),
      d: path(data) || "",
      fill,
      strokeLinecap: "round"
    }, restProps)
  );
}

// src/shape/shapes/LineRadial.tsx
var import_react6 = __toESM(require("react"));
var import_clsx6 = __toESM(require("clsx"));
function LineRadial(_a) {
  var _b = _a, {
    className,
    angle,
    radius,
    defined,
    curve,
    data = [],
    innerRef,
    children,
    fill = "transparent"
  } = _b, restProps = __objRest(_b, [
    "className",
    "angle",
    "radius",
    "defined",
    "curve",
    "data",
    "innerRef",
    "children",
    "fill"
  ]);
  const path = radialLine({
    angle,
    radius,
    defined,
    curve
  });
  if (children)
    return /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, children({ path }));
  return /* @__PURE__ */ import_react6.default.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: (0, import_clsx6.default)("visx-line-radial", className),
      d: path(data) || "",
      fill
    }, restProps)
  );
}

// src/shape/shapes/Area.tsx
var import_react7 = __toESM(require("react"));
var import_clsx7 = __toESM(require("clsx"));
function Area(_a) {
  var _b = _a, {
    children,
    x,
    x0,
    x1,
    y,
    y0,
    y1,
    data = [],
    defined = () => true,
    className,
    curve,
    innerRef
  } = _b, restProps = __objRest(_b, [
    "children",
    "x",
    "x0",
    "x1",
    "y",
    "y0",
    "y1",
    "data",
    "defined",
    "className",
    "curve",
    "innerRef"
  ]);
  const path = area({ x, x0, x1, y, y0, y1, defined, curve });
  if (children)
    return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, children({ path }));
  return /* @__PURE__ */ import_react7.default.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: (0, import_clsx7.default)("visx-area", className),
      d: path(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/AreaClosed.tsx
var import_react8 = __toESM(require("react"));
var import_clsx8 = __toESM(require("clsx"));
function AreaClosed(_a) {
  var _b = _a, {
    x,
    x0,
    x1,
    y,
    y1,
    y0,
    yScale,
    data = [],
    defined = () => true,
    className,
    curve,
    innerRef,
    children
  } = _b, restProps = __objRest(_b, [
    "x",
    "x0",
    "x1",
    "y",
    "y1",
    "y0",
    "yScale",
    "data",
    "defined",
    "className",
    "curve",
    "innerRef",
    "children"
  ]);
  const path = area({ x, x0, x1, defined, curve });
  if (y0 == null) {
    path.y0(yScale.range()[0]);
  } else {
    setNumberOrNumberAccessor(path.y0, y0);
  }
  if (y && !y1)
    setNumberOrNumberAccessor(path.y1, y);
  if (y1 && !y)
    setNumberOrNumberAccessor(path.y1, y1);
  if (children)
    return /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, children({ path }));
  return /* @__PURE__ */ import_react8.default.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: (0, import_clsx8.default)("visx-area-closed", className),
      d: path(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/AreaStack.tsx
var import_react10 = __toESM(require("react"));
var import_clsx10 = __toESM(require("clsx"));

// src/shape/shapes/Stack.tsx
var import_react9 = __toESM(require("react"));
var import_clsx9 = __toESM(require("clsx"));
function Stack(_a) {
  var _b = _a, {
    className,
    top,
    left,
    keys,
    data,
    curve,
    defined,
    x,
    x0,
    x1,
    y0,
    y1,
    value,
    order,
    offset,
    color,
    children
  } = _b, restProps = __objRest(_b, [
    "className",
    "top",
    "left",
    "keys",
    "data",
    "curve",
    "defined",
    "x",
    "x0",
    "x1",
    "y0",
    "y1",
    "value",
    "order",
    "offset",
    "color",
    "children"
  ]);
  const stack2 = stack({ keys, value, order, offset });
  const path = area({
    x,
    x0,
    x1,
    y0,
    y1,
    curve,
    defined
  });
  const stacks = stack2(data);
  if (children)
    return /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, children({ stacks, path, stack: stack2 }));
  return /* @__PURE__ */ import_react9.default.createElement(Group, { top, left }, stacks.map((series, i) => /* @__PURE__ */ import_react9.default.createElement(
    "path",
    __spreadValues({
      className: (0, import_clsx9.default)("visx-stack", className),
      key: `stack-${i}-${series.key || ""}`,
      d: path(series) || "",
      fill: color == null ? void 0 : color(series.key, i)
    }, restProps)
  )));
}

// src/shape/shapes/AreaStack.tsx
function AreaStack(_a) {
  var _b = _a, {
    className,
    top,
    left,
    keys,
    data,
    curve,
    defined,
    x,
    x0,
    x1,
    y0,
    y1,
    value,
    order,
    offset,
    color,
    children
  } = _b, restProps = __objRest(_b, [
    "className",
    "top",
    "left",
    "keys",
    "data",
    "curve",
    "defined",
    "x",
    "x0",
    "x1",
    "y0",
    "y1",
    "value",
    "order",
    "offset",
    "color",
    "children"
  ]);
  return /* @__PURE__ */ import_react10.default.createElement(
    Stack,
    __spreadValues({
      className,
      top,
      left,
      keys,
      data,
      curve,
      defined,
      x,
      x0,
      x1,
      y0,
      y1,
      value,
      order,
      offset,
      color
    }, restProps),
    children || (({ stacks, path }) => stacks.map((series, i) => /* @__PURE__ */ import_react10.default.createElement(
      "path",
      __spreadValues({
        className: (0, import_clsx10.default)("visx-area-stack", className),
        key: `area-stack-${i}-${series.key || ""}`,
        d: path(series) || "",
        fill: color == null ? void 0 : color(series.key, i)
      }, restProps)
    )))
  );
}

// src/shape/shapes/Bar.tsx
var import_react11 = __toESM(require("react"));
var import_clsx11 = __toESM(require("clsx"));
function Bar(_a) {
  var _b = _a, {
    className,
    innerRef
  } = _b, restProps = __objRest(_b, [
    "className",
    "innerRef"
  ]);
  return /* @__PURE__ */ import_react11.default.createElement("rect", __spreadValues({ ref: innerRef, className: (0, import_clsx11.default)("visx-bar", className) }, restProps));
}

// src/shape/shapes/BarRounded.tsx
var import_react12 = __toESM(require("react"));
var import_clsx12 = __toESM(require("clsx"));
function useBarRoundedPath({
  all,
  bottom,
  bottomLeft,
  bottomRight,
  height,
  left,
  radius,
  right,
  top,
  topLeft,
  topRight,
  width,
  x,
  y
}) {
  topRight = all || top || right || topRight;
  bottomRight = all || bottom || right || bottomRight;
  bottomLeft = all || bottom || left || bottomLeft;
  topLeft = all || top || left || topLeft;
  radius = Math.max(1, Math.min(radius, Math.min(width, height) / 2));
  const diameter = 2 * radius;
  const path = `M${x + radius},${y} h${width - diameter}
 ${topRight ? `a${radius},${radius} 0 0 1 ${radius},${radius}` : `h${radius}v${radius}`}
 v${height - diameter}
 ${bottomRight ? `a${radius},${radius} 0 0 1 ${-radius},${radius}` : `v${radius}h${-radius}`}
 h${diameter - width}
 ${bottomLeft ? `a${radius},${radius} 0 0 1 ${-radius},${-radius}` : `h${-radius}v${-radius}`}
 v${diameter - height}
 ${topLeft ? `a${radius},${radius} 0 0 1 ${radius},${-radius}` : `v${-radius}h${radius}`}
z`.split("\n").join("");
  return path;
}
function BarRounded(_a) {
  var _b = _a, {
    children,
    className,
    innerRef,
    x,
    y,
    width,
    height,
    radius,
    all = false,
    top = false,
    bottom = false,
    left = false,
    right = false,
    topLeft = false,
    topRight = false,
    bottomLeft = false,
    bottomRight = false
  } = _b, restProps = __objRest(_b, [
    "children",
    "className",
    "innerRef",
    "x",
    "y",
    "width",
    "height",
    "radius",
    "all",
    "top",
    "bottom",
    "left",
    "right",
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
  const path = useBarRoundedPath({
    x,
    y,
    width,
    height,
    radius,
    all,
    top,
    bottom,
    left,
    right,
    topLeft,
    topRight,
    bottomLeft,
    bottomRight
  });
  if (children)
    return /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, children({ path }));
  return /* @__PURE__ */ import_react12.default.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: (0, import_clsx12.default)("visx-bar-rounded", className),
      d: path
    }, restProps)
  );
}

// src/shape/shapes/BarGroup.tsx
var import_react13 = __toESM(require("react"));
var import_clsx13 = __toESM(require("clsx"));

// src/shape/util/getBandwidth.ts
function getBandwidth(scale) {
  if ("bandwidth" in scale) {
    return scale.bandwidth();
  }
  const range = scale.range();
  const domain = scale.domain();
  return Math.abs(range[range.length - 1] - range[0]) / domain.length;
}

// src/shape/shapes/BarGroup.tsx
function BarGroup(_a) {
  var _b = _a, {
    data,
    className,
    top,
    left,
    x0,
    x0Scale,
    x1Scale,
    yScale,
    color,
    keys,
    height,
    children
  } = _b, restProps = __objRest(_b, [
    "data",
    "className",
    "top",
    "left",
    "x0",
    "x0Scale",
    "x1Scale",
    "yScale",
    "color",
    "keys",
    "height",
    "children"
  ]);
  const barWidth = getBandwidth(x1Scale);
  const barGroups = data.map((group, i) => ({
    index: i,
    x0: x0Scale(x0(group)),
    bars: keys.map((key, j) => {
      const value = group[key];
      return {
        index: j,
        key,
        value,
        width: barWidth,
        x: x1Scale(key) || 0,
        y: yScale(value) || 0,
        color: color(key, j),
        height: height - (yScale(value) || 0)
      };
    })
  }));
  if (children)
    return /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, children(barGroups));
  return /* @__PURE__ */ import_react13.default.createElement(Group, { className: (0, import_clsx13.default)("visx-bar-group", className), top, left }, barGroups.map((barGroup) => /* @__PURE__ */ import_react13.default.createElement(
    Group,
    {
      key: `bar-group-${barGroup.index}-${barGroup.x0}`,
      left: barGroup.x0
    },
    barGroup.bars.map((bar) => /* @__PURE__ */ import_react13.default.createElement(
      Bar,
      __spreadValues({
        key: `bar-group-bar-${barGroup.index}-${bar.index}-${bar.value}-${bar.key}`,
        x: bar.x,
        y: bar.y,
        width: bar.width,
        height: bar.height,
        fill: bar.color
      }, restProps)
    ))
  )));
}

// src/shape/shapes/BarGroupHorizontal.tsx
var import_react14 = __toESM(require("react"));
var import_clsx14 = __toESM(require("clsx"));
function BarGroupHorizontal(_a) {
  var _b = _a, {
    data,
    className,
    top,
    left,
    x = () => 0,
    y0,
    y0Scale,
    y1Scale,
    xScale,
    color,
    keys,
    width,
    children
  } = _b, restProps = __objRest(_b, [
    "data",
    "className",
    "top",
    "left",
    "x",
    "y0",
    "y0Scale",
    "y1Scale",
    "xScale",
    "color",
    "keys",
    "width",
    "children"
  ]);
  const barHeight = getBandwidth(y1Scale);
  const barGroups = data.map((group, i) => ({
    index: i,
    y0: y0Scale(y0(group)) || 0,
    bars: keys.map((key, j) => {
      const value = group[key];
      return {
        index: j,
        key,
        value,
        height: barHeight,
        x: x(value) || 0,
        y: y1Scale(key) || 0,
        color: color(key, j),
        width: xScale(value) || 0
      };
    })
  }));
  if (children)
    return /* @__PURE__ */ import_react14.default.createElement(import_react14.default.Fragment, null, children(barGroups));
  return /* @__PURE__ */ import_react14.default.createElement(
    Group,
    {
      className: (0, import_clsx14.default)("visx-bar-group-horizontal", className),
      top,
      left
    },
    barGroups.map((barGroup) => /* @__PURE__ */ import_react14.default.createElement(
      Group,
      {
        key: `bar-group-${barGroup.index}-${barGroup.y0}`,
        top: barGroup.y0
      },
      barGroup.bars.map((bar) => /* @__PURE__ */ import_react14.default.createElement(
        Bar,
        __spreadValues({
          key: `bar-group-bar-${barGroup.index}-${bar.index}-${bar.value}-${bar.key}`,
          x: bar.x,
          y: bar.y,
          width: bar.width,
          height: bar.height,
          fill: bar.color
        }, restProps)
      ))
    ))
  );
}

// src/shape/shapes/BarStack.tsx
var import_react15 = __toESM(require("react"));
var import_clsx15 = __toESM(require("clsx"));
var import_d3_shape4 = require("d3-shape");

// src/shape/util/accessors.ts
function getX(l) {
  return typeof (l == null ? void 0 : l.x) === "number" ? l == null ? void 0 : l.x : 0;
}
function getY(l) {
  return typeof (l == null ? void 0 : l.y) === "number" ? l == null ? void 0 : l.y : 0;
}
function getSource(l) {
  return l == null ? void 0 : l.source;
}
function getTarget(l) {
  return l == null ? void 0 : l.target;
}
function getFirstItem(d) {
  return d == null ? void 0 : d[0];
}
function getSecondItem(d) {
  return d == null ? void 0 : d[1];
}

// src/shape/shapes/BarStack.tsx
function BarStack(_a) {
  var _b = _a, {
    data,
    className,
    top,
    left,
    x,
    y0 = getFirstItem,
    y1 = getSecondItem,
    xScale,
    yScale,
    color,
    keys,
    value,
    order,
    offset,
    children
  } = _b, restProps = __objRest(_b, [
    "data",
    "className",
    "top",
    "left",
    "x",
    "y0",
    "y1",
    "xScale",
    "yScale",
    "color",
    "keys",
    "value",
    "order",
    "offset",
    "children"
  ]);
  const stack2 = (0, import_d3_shape4.stack)();
  if (keys)
    stack2.keys(keys);
  if (value)
    setNumberOrNumberAccessor(stack2.value, value);
  if (order)
    stack2.order(stackOrder(order));
  if (offset)
    stack2.offset(stackOffset(offset));
  const stacks = stack2(data);
  const barWidth = getBandwidth(xScale);
  const barStacks = stacks.map((barStack, i) => {
    const { key } = barStack;
    return {
      index: i,
      key,
      bars: barStack.map((bar, j) => {
        const barHeight = (yScale(y0(bar)) || 0) - (yScale(y1(bar)) || 0);
        const barY = yScale(y1(bar));
        const barX = "bandwidth" in xScale ? xScale(x(bar.data)) : Math.max((xScale(x(bar.data)) || 0) - barWidth / 2);
        return {
          bar,
          key,
          index: j,
          height: barHeight,
          width: barWidth,
          x: barX || 0,
          y: barY || 0,
          color: color(barStack.key, j)
        };
      })
    };
  });
  if (children)
    return /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, children(barStacks));
  return /* @__PURE__ */ import_react15.default.createElement(Group, { className: (0, import_clsx15.default)("visx-bar-stack", className), top, left }, barStacks.map(
    (barStack) => barStack.bars.map((bar) => /* @__PURE__ */ import_react15.default.createElement(
      Bar,
      __spreadValues({
        key: `bar-stack-${barStack.index}-${bar.index}`,
        x: bar.x,
        y: bar.y,
        height: bar.height,
        width: bar.width,
        fill: bar.color
      }, restProps)
    ))
  ));
}

// src/shape/shapes/BarStackHorizontal.tsx
var import_react16 = __toESM(require("react"));
var import_clsx16 = __toESM(require("clsx"));
var import_d3_shape5 = require("d3-shape");
function BarStackHorizontal(_a) {
  var _b = _a, {
    data,
    className,
    top,
    left,
    y,
    x0 = getFirstItem,
    x1 = getSecondItem,
    xScale,
    yScale,
    color,
    keys,
    value,
    order,
    offset,
    children
  } = _b, restProps = __objRest(_b, [
    "data",
    "className",
    "top",
    "left",
    "y",
    "x0",
    "x1",
    "xScale",
    "yScale",
    "color",
    "keys",
    "value",
    "order",
    "offset",
    "children"
  ]);
  const stack2 = (0, import_d3_shape5.stack)();
  if (keys)
    stack2.keys(keys);
  if (value)
    setNumberOrNumberAccessor(stack2.value, value);
  if (order)
    stack2.order(stackOrder(order));
  if (offset)
    stack2.offset(stackOffset(offset));
  const stacks = stack2(data);
  const barHeight = getBandwidth(yScale);
  const barStacks = stacks.map((barStack, i) => {
    const { key } = barStack;
    return {
      index: i,
      key,
      bars: barStack.map((bar, j) => {
        const barWidth = (xScale(x1(bar)) || 0) - (xScale(x0(bar)) || 0);
        const barX = xScale(x0(bar));
        const barY = "bandwidth" in yScale ? yScale(y(bar.data)) : Math.max((yScale(y(bar.data)) || 0) - barWidth / 2);
        return {
          bar,
          key,
          index: j,
          height: barHeight,
          width: barWidth,
          x: barX || 0,
          y: barY || 0,
          color: color(barStack.key, j)
        };
      })
    };
  });
  if (children)
    return /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null, children(barStacks));
  return /* @__PURE__ */ import_react16.default.createElement(
    Group,
    {
      className: (0, import_clsx16.default)("visx-bar-stack-horizontal", className),
      top,
      left
    },
    barStacks.map(
      (barStack) => barStack.bars.map((bar) => /* @__PURE__ */ import_react16.default.createElement(
        Bar,
        __spreadValues({
          key: `bar-stack-${barStack.index}-${bar.index}`,
          x: bar.x,
          y: bar.y,
          height: bar.height,
          width: bar.width,
          fill: bar.color
        }, restProps)
      ))
    )
  );
}

// src/shape/util/trigonometry.ts
var degreesToRadians = (degrees) => Math.PI / 180 * degrees;

// src/shape/shapes/link/diagonal/LinkHorizontal.tsx
var import_react17 = __toESM(require("react"));
var import_clsx17 = __toESM(require("clsx"));
var import_d3_shape6 = require("d3-shape");
function pathHorizontalDiagonal({
  source,
  target,
  x,
  y
}) {
  return (data) => {
    const link = (0, import_d3_shape6.linkHorizontal)();
    link.x(x);
    link.y(y);
    link.source(source);
    link.target(target);
    return link(data);
  };
}
function LinkHorizontalDiagonal(_a) {
  var _b = _a, {
    className,
    children,
    data,
    innerRef,
    path,
    x = getY,
    y: y = getX,
    source: source = getSource,
    target = getTarget
  } = _b, restProps = __objRest(_b, [
    "className",
    "children",
    "data",
    "innerRef",
    "path",
    "x",
    // note this returns a y value
    "y",
    // note this returns an x value
    "source",
    "target"
  ]);
  const pathGen = path || pathHorizontalDiagonal({ source, target, x, y });
  if (children)
    return /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, children({ path: pathGen }));
  return /* @__PURE__ */ import_react17.default.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: (0, import_clsx17.default)("visx-link visx-link-horizontal-diagonal", className),
      d: pathGen(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/link/diagonal/LinkVertical.tsx
var import_react18 = __toESM(require("react"));
var import_clsx18 = __toESM(require("clsx"));
var import_d3_shape7 = require("d3-shape");
function pathVerticalDiagonal({
  source,
  target,
  x,
  y
}) {
  return (data) => {
    const link = (0, import_d3_shape7.linkVertical)();
    link.x(x);
    link.y(y);
    link.source(source);
    link.target(target);
    return link(data);
  };
}
function LinkVerticalDiagonal(_a) {
  var _b = _a, {
    className,
    children,
    data,
    innerRef,
    path,
    x = getX,
    y = getY,
    source = getSource,
    target = getTarget
  } = _b, restProps = __objRest(_b, [
    "className",
    "children",
    "data",
    "innerRef",
    "path",
    "x",
    "y",
    "source",
    "target"
  ]);
  const pathGen = path || pathVerticalDiagonal({ source, target, x, y });
  if (children)
    return /* @__PURE__ */ import_react18.default.createElement(import_react18.default.Fragment, null, children({ path: pathGen }));
  return /* @__PURE__ */ import_react18.default.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: (0, import_clsx18.default)("visx-link visx-link-vertical-diagonal", className),
      d: pathGen(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/link/diagonal/LinkRadial.tsx
var import_react19 = __toESM(require("react"));
var import_clsx19 = __toESM(require("clsx"));
var import_d3_shape8 = require("d3-shape");
function pathRadialDiagonal({
  source,
  target,
  angle,
  radius
}) {
  return (data) => {
    const link = (0, import_d3_shape8.linkRadial)();
    link.angle(angle);
    link.radius(radius);
    link.source(source);
    link.target(target);
    return link(data);
  };
}
function LinkRadialDiagonal(_a) {
  var _b = _a, {
    className,
    children,
    data,
    innerRef,
    path,
    angle = getX,
    radius = getY,
    source = getSource,
    target = getTarget
  } = _b, restProps = __objRest(_b, [
    "className",
    "children",
    "data",
    "innerRef",
    "path",
    "angle",
    "radius",
    "source",
    "target"
  ]);
  const pathGen = path || pathRadialDiagonal({ source, target, angle, radius });
  if (children)
    return /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, children({ path: pathGen }));
  return /* @__PURE__ */ import_react19.default.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: (0, import_clsx19.default)("visx-link visx-link-radial-diagonal", className),
      d: pathGen(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/link/curve/LinkHorizontalCurve.tsx
var import_react20 = __toESM(require("react"));
var import_clsx20 = __toESM(require("clsx"));
var import_d3_path = require("d3-path");
function pathHorizontalCurve({
  source,
  target,
  x,
  y,
  percent
}) {
  return (link) => {
    const sourceData = source(link);
    const targetData = target(link);
    const sx = x(sourceData);
    const sy = y(sourceData);
    const tx = x(targetData);
    const ty = y(targetData);
    const dx = tx - sx;
    const dy = ty - sy;
    const ix = percent * (dx + dy);
    const iy = percent * (dy - dx);
    const path = (0, import_d3_path.path)();
    path.moveTo(sx, sy);
    path.bezierCurveTo(sx + ix, sy + iy, tx + iy, ty - ix, tx, ty);
    return path.toString();
  };
}
function LinkHorizontalCurve(_a) {
  var _b = _a, {
    className,
    children,
    data,
    innerRef,
    path,
    percent = 0.2,
    x = getY,
    y: y = getX,
    source: source = getSource,
    target = getTarget
  } = _b, restProps = __objRest(_b, [
    "className",
    "children",
    "data",
    "innerRef",
    "path",
    "percent",
    "x",
    // note this returns a y value
    "y",
    // note this returns an x value
    "source",
    "target"
  ]);
  const pathGen = path || pathHorizontalCurve({ source, target, x, y, percent });
  if (children)
    return /* @__PURE__ */ import_react20.default.createElement(import_react20.default.Fragment, null, children({ path: pathGen }));
  return /* @__PURE__ */ import_react20.default.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: (0, import_clsx20.default)("visx-link visx-link-horizontal-curve", className),
      d: pathGen(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/link/curve/LinkVerticalCurve.tsx
var import_react21 = __toESM(require("react"));
var import_clsx21 = __toESM(require("clsx"));
var import_d3_path2 = require("d3-path");
function pathVerticalCurve({
  source,
  target,
  x,
  y,
  percent
}) {
  return (link) => {
    const sourceData = source(link);
    const targetData = target(link);
    const sx = x(sourceData);
    const sy = y(sourceData);
    const tx = x(targetData);
    const ty = y(targetData);
    const dx = tx - sx;
    const dy = ty - sy;
    const ix = percent * (dx + dy);
    const iy = percent * (dy - dx);
    const path = (0, import_d3_path2.path)();
    path.moveTo(sx, sy);
    path.bezierCurveTo(sx + ix, sy + iy, tx + iy, ty - ix, tx, ty);
    return path.toString();
  };
}
function LinkVerticalCurve(_a) {
  var _b = _a, {
    className,
    children,
    data,
    innerRef,
    path,
    percent = 0.2,
    x = getX,
    y = getY,
    source = getSource,
    target = getTarget
  } = _b, restProps = __objRest(_b, [
    "className",
    "children",
    "data",
    "innerRef",
    "path",
    "percent",
    "x",
    "y",
    "source",
    "target"
  ]);
  const pathGen = path || pathVerticalCurve({ source, target, x, y, percent });
  if (children)
    return /* @__PURE__ */ import_react21.default.createElement(import_react21.default.Fragment, null, children({ path: pathGen }));
  return /* @__PURE__ */ import_react21.default.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: (0, import_clsx21.default)("visx-link visx-link-vertical-curve", className),
      d: pathGen(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/link/curve/LinkRadialCurve.tsx
var import_react22 = __toESM(require("react"));
var import_clsx22 = __toESM(require("clsx"));
var import_d3_path3 = require("d3-path");
function pathRadialCurve({
  source,
  target,
  x,
  y,
  percent
}) {
  return (link) => {
    const sourceData = source(link);
    const targetData = target(link);
    const sa = x(sourceData) - Math.PI / 2;
    const sr = y(sourceData);
    const ta = x(targetData) - Math.PI / 2;
    const tr = y(targetData);
    const sc = Math.cos(sa);
    const ss = Math.sin(sa);
    const tc = Math.cos(ta);
    const ts = Math.sin(ta);
    const sx = sr * sc;
    const sy = sr * ss;
    const tx = tr * tc;
    const ty = tr * ts;
    const dx = tx - sx;
    const dy = ty - sy;
    const ix = percent * (dx + dy);
    const iy = percent * (dy - dx);
    const path = (0, import_d3_path3.path)();
    path.moveTo(sx, sy);
    path.bezierCurveTo(sx + ix, sy + iy, tx + iy, ty - ix, tx, ty);
    return path.toString();
  };
}
function LinkRadialCurve(_a) {
  var _b = _a, {
    className,
    children,
    data,
    innerRef,
    path,
    percent = 0.2,
    x = getX,
    y = getY,
    source = getSource,
    target = getTarget
  } = _b, restProps = __objRest(_b, [
    "className",
    "children",
    "data",
    "innerRef",
    "path",
    "percent",
    "x",
    "y",
    "source",
    "target"
  ]);
  const pathGen = path || pathRadialCurve({ source, target, x, y, percent });
  if (children)
    return /* @__PURE__ */ import_react22.default.createElement(import_react22.default.Fragment, null, children({ path: pathGen }));
  return /* @__PURE__ */ import_react22.default.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: (0, import_clsx22.default)("visx-link visx-link-radial-curve", className),
      d: pathGen(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/link/line/LinkHorizontalLine.tsx
var import_react23 = __toESM(require("react"));
var import_clsx23 = __toESM(require("clsx"));
var import_d3_path4 = require("d3-path");
function pathHorizontalLine({
  source,
  target,
  x,
  y
}) {
  return (data) => {
    const sourceData = source(data);
    const targetData = target(data);
    const sx = x(sourceData);
    const sy = y(sourceData);
    const tx = x(targetData);
    const ty = y(targetData);
    const path = (0, import_d3_path4.path)();
    path.moveTo(sx, sy);
    path.lineTo(tx, ty);
    return path.toString();
  };
}
function LinkHorizontalLine(_a) {
  var _b = _a, {
    className,
    children,
    innerRef,
    data,
    path,
    x = getY,
    y: y = getX,
    source: source = getSource,
    target = getTarget
  } = _b, restProps = __objRest(_b, [
    "className",
    "children",
    "innerRef",
    "data",
    "path",
    "x",
    // note this returns a y value
    "y",
    // note this returns a x value
    "source",
    "target"
  ]);
  const pathGen = path || pathHorizontalLine({ source, target, x, y });
  if (children)
    return /* @__PURE__ */ import_react23.default.createElement(import_react23.default.Fragment, null, children({ path: pathGen }));
  return /* @__PURE__ */ import_react23.default.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: (0, import_clsx23.default)("visx-link visx-link-horizontal-line", className),
      d: pathGen(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/link/line/LinkVerticalLine.tsx
var import_react24 = __toESM(require("react"));
var import_clsx24 = __toESM(require("clsx"));
var import_d3_path5 = require("d3-path");
function pathVerticalLine({
  source,
  target,
  x,
  y
}) {
  return (data) => {
    const sourceData = source(data);
    const targetData = target(data);
    const sx = x(sourceData);
    const sy = y(sourceData);
    const tx = x(targetData);
    const ty = y(targetData);
    const path = (0, import_d3_path5.path)();
    path.moveTo(sx, sy);
    path.lineTo(tx, ty);
    return path.toString();
  };
}
function LinkVerticalLine(_a) {
  var _b = _a, {
    className,
    innerRef,
    data,
    path,
    x = getX,
    y = getY,
    source = getSource,
    target = getTarget,
    children
  } = _b, restProps = __objRest(_b, [
    "className",
    "innerRef",
    "data",
    "path",
    "x",
    "y",
    "source",
    "target",
    "children"
  ]);
  const pathGen = path || pathVerticalLine({ source, target, x, y });
  if (children)
    return /* @__PURE__ */ import_react24.default.createElement(import_react24.default.Fragment, null, children({ path: pathGen }));
  return /* @__PURE__ */ import_react24.default.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: (0, import_clsx24.default)("visx-link visx-link-vertical-line", className),
      d: pathGen(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/link/line/LinkRadialLine.tsx
var import_react25 = __toESM(require("react"));
var import_clsx25 = __toESM(require("clsx"));
var import_d3_path6 = require("d3-path");
function pathRadialLine({
  source,
  target,
  x,
  y
}) {
  return (data) => {
    const sourceData = source(data);
    const targetData = target(data);
    const sa = x(sourceData) - Math.PI / 2;
    const sr = y(sourceData);
    const ta = x(targetData) - Math.PI / 2;
    const tr = y(targetData);
    const sc = Math.cos(sa);
    const ss = Math.sin(sa);
    const tc = Math.cos(ta);
    const ts = Math.sin(ta);
    const path = (0, import_d3_path6.path)();
    path.moveTo(sr * sc, sr * ss);
    path.lineTo(tr * tc, tr * ts);
    return path.toString();
  };
}
function LinkRadialLine(_a) {
  var _b = _a, {
    className,
    innerRef,
    data,
    path,
    x = getX,
    y = getY,
    source = getSource,
    target = getTarget,
    children
  } = _b, restProps = __objRest(_b, [
    "className",
    "innerRef",
    "data",
    "path",
    "x",
    "y",
    "source",
    "target",
    "children"
  ]);
  const pathGen = path || pathRadialLine({ source, target, x, y });
  if (children)
    return /* @__PURE__ */ import_react25.default.createElement(import_react25.default.Fragment, null, children({ path: pathGen }));
  return /* @__PURE__ */ import_react25.default.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: (0, import_clsx25.default)("visx-link visx-link-radial-line", className),
      d: pathGen(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/link/step/LinkHorizontalStep.tsx
var import_react26 = __toESM(require("react"));
var import_clsx26 = __toESM(require("clsx"));
var import_d3_path7 = require("d3-path");
function pathHorizontalStep({
  source,
  target,
  x,
  y,
  percent
}) {
  return (link) => {
    const sourceData = source(link);
    const targetData = target(link);
    const sx = x(sourceData);
    const sy = y(sourceData);
    const tx = x(targetData);
    const ty = y(targetData);
    const path = (0, import_d3_path7.path)();
    path.moveTo(sx, sy);
    path.lineTo(sx + (tx - sx) * percent, sy);
    path.lineTo(sx + (tx - sx) * percent, ty);
    path.lineTo(tx, ty);
    return path.toString();
  };
}
function LinkHorizontalStep(_a) {
  var _b = _a, {
    className,
    innerRef,
    data,
    path,
    percent = 0.5,
    x = getY,
    y: y = getX,
    source: source = getSource,
    target = getTarget,
    children
  } = _b, restProps = __objRest(_b, [
    "className",
    "innerRef",
    "data",
    "path",
    "percent",
    "x",
    // note this returns a y value
    "y",
    // note this returns a x value
    "source",
    "target",
    "children"
  ]);
  const pathGen = path || pathHorizontalStep({ source, target, x, y, percent });
  if (children)
    return /* @__PURE__ */ import_react26.default.createElement(import_react26.default.Fragment, null, children({ path: pathGen }));
  return /* @__PURE__ */ import_react26.default.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: (0, import_clsx26.default)("visx-link visx-link-horizontal-step", className),
      d: pathGen(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/link/step/LinkVerticalStep.tsx
var import_react27 = __toESM(require("react"));
var import_clsx27 = __toESM(require("clsx"));
var import_d3_path8 = require("d3-path");
function pathVerticalStep({
  source,
  target,
  x,
  y,
  percent
}) {
  return (link) => {
    const sourceData = source(link);
    const targetData = target(link);
    const sx = x(sourceData);
    const sy = y(sourceData);
    const tx = x(targetData);
    const ty = y(targetData);
    const path = (0, import_d3_path8.path)();
    path.moveTo(sx, sy);
    path.lineTo(sx, sy + (ty - sy) * percent);
    path.lineTo(tx, sy + (ty - sy) * percent);
    path.lineTo(tx, ty);
    return path.toString();
  };
}
function LinkVerticalStep(_a) {
  var _b = _a, {
    className,
    innerRef,
    data,
    path,
    percent = 0.5,
    x = getX,
    y = getY,
    source = getSource,
    target = getTarget,
    children
  } = _b, restProps = __objRest(_b, [
    "className",
    "innerRef",
    "data",
    "path",
    "percent",
    "x",
    "y",
    "source",
    "target",
    "children"
  ]);
  const pathGen = path || pathVerticalStep({ source, target, x, y, percent });
  if (children)
    return /* @__PURE__ */ import_react27.default.createElement(import_react27.default.Fragment, null, children({ path: pathGen }));
  return /* @__PURE__ */ import_react27.default.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: (0, import_clsx27.default)("visx-link visx-link-vertical-step", className),
      d: pathGen(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/link/step/LinkRadialStep.tsx
var import_react28 = __toESM(require("react"));
var import_clsx28 = __toESM(require("clsx"));
function pathRadialStep({
  source,
  target,
  x,
  y
}) {
  return (link) => {
    const sourceData = source(link);
    const targetData = target(link);
    const sx = x(sourceData);
    const sy = y(sourceData);
    const tx = x(targetData);
    const ty = y(targetData);
    const sa = sx - Math.PI / 2;
    const sr = sy;
    const ta = tx - Math.PI / 2;
    const tr = ty;
    const sc = Math.cos(sa);
    const ss = Math.sin(sa);
    const tc = Math.cos(ta);
    const ts = Math.sin(ta);
    const sf = Math.abs(ta - sa) > Math.PI ? ta <= sa : ta > sa;
    return `
      M${sr * sc},${sr * ss}
      A${sr},${sr},0,0,${sf ? 1 : 0},${sr * tc},${sr * ts}
      L${tr * tc},${tr * ts}
    `;
  };
}
function LinkRadialStep(_a) {
  var _b = _a, {
    className,
    innerRef,
    data,
    path,
    x = getX,
    y = getY,
    source = getSource,
    target = getTarget,
    children
  } = _b, restProps = __objRest(_b, [
    "className",
    "innerRef",
    "data",
    "path",
    "x",
    "y",
    "source",
    "target",
    "children"
  ]);
  const pathGen = path || pathRadialStep({ source, target, x, y });
  if (children)
    return /* @__PURE__ */ import_react28.default.createElement(import_react28.default.Fragment, null, children({ path: pathGen }));
  return /* @__PURE__ */ import_react28.default.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: (0, import_clsx28.default)("visx-link visx-link-radial-step", className),
      d: pathGen(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/Polygon.tsx
var import_react29 = __toESM(require("react"));
var import_clsx29 = __toESM(require("clsx"));
var DEFAULT_CENTER = { x: 0, y: 0 };
var getPoint = ({
  sides = 4,
  size = 25,
  center = DEFAULT_CENTER,
  rotate = 0,
  side
}) => {
  const degrees = 360 / sides * side - rotate;
  const radians = degreesToRadians(degrees);
  return {
    x: center.x + size * Math.cos(radians),
    y: center.y + size * Math.sin(radians)
  };
};
var getPoints = ({
  sides,
  size,
  center,
  rotate
}) => new Array(sides).fill(0).map(
  (_, side) => getPoint({
    sides,
    size,
    center,
    rotate,
    side
  })
);
function Polygon(_a) {
  var _b = _a, {
    sides = 4,
    size = 25,
    center = DEFAULT_CENTER,
    rotate = 0,
    className,
    children,
    innerRef,
    points
  } = _b, restProps = __objRest(_b, [
    "sides",
    "size",
    "center",
    "rotate",
    "className",
    "children",
    "innerRef",
    "points"
  ]);
  const pointsToRender = points || getPoints({
    sides,
    size,
    center,
    rotate
  }).map(({ x, y }) => [x, y]);
  if (children)
    return /* @__PURE__ */ import_react29.default.createElement(import_react29.default.Fragment, null, children({ points: pointsToRender }));
  return /* @__PURE__ */ import_react29.default.createElement(
    "polygon",
    __spreadValues({
      ref: innerRef,
      className: (0, import_clsx29.default)("visx-polygon", className),
      points: pointsToRender.join(" ")
    }, restProps)
  );
}

// src/shape/shapes/Circle.tsx
var import_react30 = __toESM(require("react"));
var import_clsx30 = __toESM(require("clsx"));
function Circle(_a) {
  var _b = _a, {
    className,
    innerRef
  } = _b, restProps = __objRest(_b, [
    "className",
    "innerRef"
  ]);
  return /* @__PURE__ */ import_react30.default.createElement(
    "circle",
    __spreadValues({
      ref: innerRef,
      className: (0, import_clsx30.default)("visx-circle", className)
    }, restProps)
  );
}

// src/shape/shapes/SplitLinePath.tsx
var import_react31 = __toESM(require("react"));

// src/shape/util/getOrCreateMeasurementElement.ts
var SVG_NAMESPACE_URL = "http://www.w3.org/2000/svg";
function getOrCreateMeasurementElement(elementId) {
  let pathElement = document.getElementById(elementId);
  if (!pathElement) {
    const svg = document.createElementNS(SVG_NAMESPACE_URL, "svg");
    svg.setAttribute("aria-hidden", "true");
    svg.style.opacity = "0";
    svg.style.width = "0";
    svg.style.height = "0";
    svg.style.position = "absolute";
    svg.style.top = "-100%";
    svg.style.left = "-100%";
    svg.style.pointerEvents = "none";
    pathElement = document.createElementNS(SVG_NAMESPACE_URL, "path");
    pathElement.setAttribute("id", elementId);
    svg.appendChild(pathElement);
    document.body.appendChild(svg);
  }
  return pathElement;
}

// src/shape/util/getSplitLineSegments.ts
var MEASUREMENT_ELEMENT_ID = "__visx_splitpath_svg_path_measurement_id";
var TRUE = () => true;
function getSplitLineSegments({
  path,
  pointsInSegments,
  segmentation = "x",
  sampleRate = 1
}) {
  try {
    const pathElement = getOrCreateMeasurementElement(MEASUREMENT_ELEMENT_ID);
    pathElement.setAttribute("d", path);
    const totalLength = pathElement.getTotalLength();
    const numSegments = pointsInSegments.length;
    const lineSegments = pointsInSegments.map(() => []);
    if (segmentation === "x" || segmentation === "y") {
      const segmentStarts = pointsInSegments.map(
        (points) => {
          var _a;
          return (_a = points.find((p) => typeof p[segmentation] === "number")) == null ? void 0 : _a[segmentation];
        }
      );
      const first = pathElement.getPointAtLength(0);
      const last = pathElement.getPointAtLength(totalLength);
      const isIncreasing = last[segmentation] > first[segmentation];
      const isBeyondSegmentStart = isIncreasing ? segmentStarts.map(
        (start) => typeof start === "undefined" ? TRUE : (xOrY) => xOrY >= start
      ) : segmentStarts.map(
        (start) => typeof start === "undefined" ? TRUE : (xOrY) => xOrY <= start
      );
      let currentSegment = 0;
      for (let distance = 0; distance <= totalLength; distance += sampleRate) {
        const sample = pathElement.getPointAtLength(distance);
        const position = sample[segmentation];
        while (currentSegment < numSegments - 1 && isBeyondSegmentStart[currentSegment + 1](position)) {
          currentSegment += 1;
        }
        lineSegments[currentSegment].push(sample);
      }
    } else {
      const numPointsInSegment = pointsInSegments.map((points) => points.length);
      const numPoints = numPointsInSegment.reduce((sum, curr) => sum + curr, 0);
      const lengthBetweenPoints = totalLength / Math.max(1, numPoints - 1);
      const segmentStarts = numPointsInSegment.slice(0, numSegments - 1);
      segmentStarts.unshift(0);
      for (let i = 2; i < numSegments; i += 1) {
        segmentStarts[i] += segmentStarts[i - 1];
      }
      for (let i = 0; i < numSegments; i += 1) {
        segmentStarts[i] *= lengthBetweenPoints;
      }
      let currentSegment = 0;
      for (let distance = 0; distance <= totalLength; distance += sampleRate) {
        const sample = pathElement.getPointAtLength(distance);
        while (currentSegment < numSegments - 1 && distance >= segmentStarts[currentSegment + 1]) {
          currentSegment += 1;
        }
        lineSegments[currentSegment].push(sample);
      }
    }
    return lineSegments;
  } catch (e) {
    return [];
  }
}

// src/shape/shapes/SplitLinePath.tsx
var getX2 = (d) => d.x || 0;
var getY2 = (d) => d.y || 0;
function SplitLinePath({
  children,
  className,
  curve,
  defined,
  segmentation,
  sampleRate,
  segments,
  x,
  y,
  styles
}) {
  const pointsInSegments = (0, import_react31.useMemo)(() => {
    const xFn = typeof x === "number" || typeof x === "undefined" ? () => x : x;
    const yFn = typeof y === "number" || typeof y === "undefined" ? () => y : y;
    return segments.map((s) => s.map((value, i) => ({ x: xFn(value, i, s), y: yFn(value, i, s) })));
  }, [x, y, segments]);
  const pathString = (0, import_react31.useMemo)(() => {
    const path = line({ x, y, defined, curve });
    return path(segments.flat()) || "";
  }, [x, y, defined, curve, segments]);
  const splitLineSegments = (0, import_react31.useMemo)(
    () => getSplitLineSegments({
      path: pathString,
      segmentation,
      pointsInSegments,
      sampleRate
    }),
    [pathString, segmentation, pointsInSegments, sampleRate]
  );
  return /* @__PURE__ */ import_react31.default.createElement("g", null, splitLineSegments.map(
    (segment, index) => children ? /* @__PURE__ */ import_react31.default.createElement(import_react31.default.Fragment, { key: index }, children({ index, segment, styles: styles[index] || styles[index % styles.length] })) : /* @__PURE__ */ import_react31.default.createElement(
      LinePath,
      __spreadValues({
        key: index,
        className,
        data: segment,
        x: getX2,
        y: getY2
      }, styles[index] || styles[index % styles.length])
    )
  ));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Arc,
  Area,
  AreaClosed,
  AreaStack,
  Bar,
  BarGroup,
  BarGroupHorizontal,
  BarRounded,
  BarStack,
  BarStackHorizontal,
  Circle,
  Group,
  Line,
  LinePath,
  LineRadial,
  LinkHorizontal,
  LinkHorizontalCurve,
  LinkHorizontalLine,
  LinkHorizontalStep,
  LinkRadial,
  LinkRadialCurve,
  LinkRadialLine,
  LinkRadialStep,
  LinkVertical,
  LinkVerticalCurve,
  LinkVerticalLine,
  LinkVerticalStep,
  Pie,
  Polygon,
  STACK_OFFSETS,
  STACK_OFFSET_NAMES,
  STACK_ORDERS,
  STACK_ORDER_NAMES,
  SplitLinePath,
  Stack,
  arc,
  area,
  coerceNumber,
  createScale,
  degreesToRadians,
  getPoint,
  getPoints,
  getTicks,
  inferScaleType,
  line,
  pathHorizontalCurve,
  pathHorizontalDiagonal,
  pathHorizontalLine,
  pathHorizontalStep,
  pathRadialCurve,
  pathRadialDiagonal,
  pathRadialLine,
  pathRadialStep,
  pathVerticalCurve,
  pathVerticalDiagonal,
  pathVerticalLine,
  pathVerticalStep,
  pie,
  radialLine,
  scaleBand,
  scaleCanBeZeroed,
  scaleLinear,
  scaleLog,
  scaleOrdinal,
  scalePoint,
  scalePower,
  scaleQuantile,
  scaleQuantize,
  scaleRadial,
  scaleSqrt,
  scaleSymlog,
  scaleThreshold,
  scaleTime,
  scaleUtc,
  stack,
  stackOffset,
  stackOrder,
  toString,
  updateScale
});
