var __defProp = Object.defineProperty;
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

// src/group/Group.tsx
import React from "react";
import cx from "clsx";
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
  return /* @__PURE__ */ React.createElement(
    "g",
    __spreadValues({
      ref: innerRef,
      className: cx("visx-group", className),
      transform: transform || `translate(${left}, ${top})`
    }, restProps),
    children
  );
}

// src/scale/scales/band.ts
import { scaleBand } from "d3-scale";

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
import {
  interpolateRgb,
  interpolateLab,
  interpolateHcl,
  interpolateHclLong,
  interpolateHsl,
  interpolateHslLong,
  interpolateCubehelix,
  interpolateCubehelixLong
} from "d3-interpolate";
var interpolatorMap = {
  lab: interpolateLab,
  hcl: interpolateHcl,
  "hcl-long": interpolateHclLong,
  hsl: interpolateHsl,
  "hsl-long": interpolateHslLong,
  cubehelix: interpolateCubehelix,
  "cubehelix-long": interpolateCubehelixLong,
  rgb: interpolateRgb
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
import {
  timeSecond,
  timeMinute,
  timeHour,
  timeDay,
  timeYear,
  timeMonth,
  timeWeek,
  utcSecond,
  utcMinute,
  utcHour,
  utcDay,
  utcWeek,
  utcMonth,
  utcYear
} from "d3-time";

// src/scale/utils/isUtcScale.ts
var TEST_TIME = new Date(Date.UTC(2020, 1, 2, 3, 4, 5));
var TEST_FORMAT = "%Y-%m-%d %H:%M";
function isUtcScale(scale) {
  const output = scale.tickFormat(1, TEST_FORMAT)(TEST_TIME);
  return output === "2020-02-02 03:04";
}

// src/scale/operators/nice.ts
var localTimeIntervals = {
  day: timeDay,
  hour: timeHour,
  minute: timeMinute,
  month: timeMonth,
  second: timeSecond,
  week: timeWeek,
  year: timeYear
};
var utcIntervals = {
  day: utcDay,
  hour: utcHour,
  minute: utcMinute,
  month: utcMonth,
  second: utcSecond,
  week: utcWeek,
  year: utcYear
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
import { interpolateRound } from "d3-interpolate";
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
        interpolateRound
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
  return updateBandScale(scaleBand(), config);
}

// src/scale/scales/point.ts
import { scalePoint } from "d3-scale";
var updatePointScale = scaleOperator(
  "domain",
  "range",
  "reverse",
  "align",
  "padding",
  "round"
);
function createPointScale(config) {
  return updatePointScale(scalePoint(), config);
}

// src/scale/scales/linear.ts
import { scaleLinear } from "d3-scale";
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
  return updateLinearScale(scaleLinear(), config);
}

// src/scale/scales/radial.ts
import { scaleRadial } from "d3-scale";
var updateRadialScale = scaleOperator(
  "domain",
  "range",
  "clamp",
  "nice",
  "round",
  "unknown"
);
function createRadialScale(config) {
  return updateRadialScale(scaleRadial(), config);
}

// src/scale/scales/time.ts
import { scaleTime } from "d3-scale";
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
  return updateTimeScale(scaleTime(), config);
}

// src/scale/scales/utc.ts
import { scaleUtc } from "d3-scale";
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
  return updateUtcScale(scaleUtc(), config);
}

// src/scale/scales/log.ts
import { scaleLog } from "d3-scale";
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
  return updateLogScale(scaleLog(), config);
}

// src/scale/scales/power.ts
import { scalePow } from "d3-scale";
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
  return updatePowScale(scalePow(), config);
}

// src/scale/scales/ordinal.ts
import { scaleOrdinal } from "d3-scale";
var updateOrdinalScale = scaleOperator(
  "domain",
  "range",
  "reverse",
  "unknown"
);
function createOrdinalScale(config) {
  return updateOrdinalScale(scaleOrdinal(), config);
}

// src/scale/scales/quantize.ts
import { scaleQuantize } from "d3-scale";
var updateQuantizeScale = scaleOperator(
  "domain",
  "range",
  "reverse",
  "nice",
  "zero"
);
function createQuantizeScale(config) {
  return updateQuantizeScale(scaleQuantize(), config);
}

// src/scale/scales/quantile.ts
import { scaleQuantile } from "d3-scale";
var updateQuantileScale = scaleOperator(
  "domain",
  "range",
  "reverse"
);
function createQuantileScale(config) {
  return updateQuantileScale(scaleQuantile(), config);
}

// src/scale/scales/symlog.ts
import { scaleSymlog } from "d3-scale";
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
  return updateSymlogScale(scaleSymlog(), config);
}

// src/scale/scales/threshold.ts
import { scaleThreshold } from "d3-scale";
var updateThresholdScale = scaleOperator(
  "domain",
  "range",
  "reverse"
);
function createThresholdScale(config) {
  return updateThresholdScale(scaleThreshold(), config);
}

// src/scale/scales/squareRoot.ts
import { scaleSqrt } from "d3-scale";
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
  return updateSqrtScale(scaleSqrt(), config);
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
import React2 from "react";
import cx2 from "clsx";

// src/shape/util/D3ShapeFactories.ts
import {
  arc as d3Arc,
  area as d3Area,
  line as d3Line,
  pie as d3Pie,
  radialLine as d3RadialLine,
  stack as d3Stack
} from "d3-shape";

// src/shape/util/setNumberOrNumberAccessor.ts
function setNumberOrNumberAccessor(func, value) {
  if (typeof value === "number")
    func(value);
  else
    func(value);
}

// src/shape/util/stackOrder.ts
import {
  stackOrderAscending,
  stackOrderDescending,
  stackOrderInsideOut,
  stackOrderNone,
  stackOrderReverse
} from "d3-shape";
var STACK_ORDERS = {
  ascending: stackOrderAscending,
  descending: stackOrderDescending,
  insideout: stackOrderInsideOut,
  none: stackOrderNone,
  reverse: stackOrderReverse
};
var STACK_ORDER_NAMES = Object.keys(STACK_ORDERS);
function stackOrder(order) {
  return order && STACK_ORDERS[order] || STACK_ORDERS.none;
}

// src/shape/util/stackOffset.ts
import {
  stackOffsetExpand,
  stackOffsetDiverging,
  stackOffsetNone,
  stackOffsetSilhouette,
  stackOffsetWiggle
} from "d3-shape";
var STACK_OFFSETS = {
  expand: stackOffsetExpand,
  diverging: stackOffsetDiverging,
  none: stackOffsetNone,
  silhouette: stackOffsetSilhouette,
  wiggle: stackOffsetWiggle
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
  const path = d3Arc();
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
  const path = d3Area();
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
  const path = d3Line();
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
  const path = d3Pie();
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
  const path = d3RadialLine();
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
  const path = d3Stack();
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
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, children({ path }));
  if (!data && (startAngle == null || endAngle == null || innerRadius == null || outerRadius == null)) {
    console.warn(
      "[@visx/shape/Arc]: expected data because one of startAngle, endAngle, innerRadius, outerRadius is undefined. Bailing."
    );
    return null;
  }
  return /* @__PURE__ */ React2.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: cx2("visx-arc", className),
      d: path(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/Pie.tsx
import React3 from "react";
import cx3 from "clsx";
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
    return /* @__PURE__ */ React3.createElement(React3.Fragment, null, children({ arcs, path, pie: pie2 }));
  return /* @__PURE__ */ React3.createElement(Group, { className: "visx-pie-arcs-group", top, left }, arcs.map((arc2, i) => /* @__PURE__ */ React3.createElement("g", { key: `pie-arc-${i}` }, /* @__PURE__ */ React3.createElement(
    "path",
    __spreadValues({
      className: cx3("visx-pie-arc", className),
      d: path(arc2) || "",
      fill: fill == null || typeof fill === "string" ? fill : fill(arc2)
    }, restProps)
  ), centroid == null ? void 0 : centroid(path.centroid(arc2), arc2))));
}

// src/shape/shapes/Line.tsx
import React4 from "react";
import cx4 from "clsx";
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
  return /* @__PURE__ */ React4.createElement(
    "line",
    __spreadValues({
      ref: innerRef,
      className: cx4("visx-line", className),
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
import React5 from "react";
import cx5 from "clsx";
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
    return /* @__PURE__ */ React5.createElement(React5.Fragment, null, children({ path }));
  return /* @__PURE__ */ React5.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: cx5("visx-linepath", className),
      d: path(data) || "",
      fill,
      strokeLinecap: "round"
    }, restProps)
  );
}

// src/shape/shapes/LineRadial.tsx
import React6 from "react";
import cx6 from "clsx";
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
    return /* @__PURE__ */ React6.createElement(React6.Fragment, null, children({ path }));
  return /* @__PURE__ */ React6.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: cx6("visx-line-radial", className),
      d: path(data) || "",
      fill
    }, restProps)
  );
}

// src/shape/shapes/Area.tsx
import React7 from "react";
import cx7 from "clsx";
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
    return /* @__PURE__ */ React7.createElement(React7.Fragment, null, children({ path }));
  return /* @__PURE__ */ React7.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: cx7("visx-area", className),
      d: path(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/AreaClosed.tsx
import React8 from "react";
import cx8 from "clsx";
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
    return /* @__PURE__ */ React8.createElement(React8.Fragment, null, children({ path }));
  return /* @__PURE__ */ React8.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: cx8("visx-area-closed", className),
      d: path(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/AreaStack.tsx
import React10 from "react";
import cx10 from "clsx";

// src/shape/shapes/Stack.tsx
import React9 from "react";
import cx9 from "clsx";
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
    return /* @__PURE__ */ React9.createElement(React9.Fragment, null, children({ stacks, path, stack: stack2 }));
  return /* @__PURE__ */ React9.createElement(Group, { top, left }, stacks.map((series, i) => /* @__PURE__ */ React9.createElement(
    "path",
    __spreadValues({
      className: cx9("visx-stack", className),
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
  return /* @__PURE__ */ React10.createElement(
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
    children || (({ stacks, path }) => stacks.map((series, i) => /* @__PURE__ */ React10.createElement(
      "path",
      __spreadValues({
        className: cx10("visx-area-stack", className),
        key: `area-stack-${i}-${series.key || ""}`,
        d: path(series) || "",
        fill: color == null ? void 0 : color(series.key, i)
      }, restProps)
    )))
  );
}

// src/shape/shapes/Bar.tsx
import React11 from "react";
import cx11 from "clsx";
function Bar(_a) {
  var _b = _a, {
    className,
    innerRef
  } = _b, restProps = __objRest(_b, [
    "className",
    "innerRef"
  ]);
  return /* @__PURE__ */ React11.createElement("rect", __spreadValues({ ref: innerRef, className: cx11("visx-bar", className) }, restProps));
}

// src/shape/shapes/BarRounded.tsx
import React12 from "react";
import cx12 from "clsx";
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
    return /* @__PURE__ */ React12.createElement(React12.Fragment, null, children({ path }));
  return /* @__PURE__ */ React12.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: cx12("visx-bar-rounded", className),
      d: path
    }, restProps)
  );
}

// src/shape/shapes/BarGroup.tsx
import React13 from "react";
import cx13 from "clsx";

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
    return /* @__PURE__ */ React13.createElement(React13.Fragment, null, children(barGroups));
  return /* @__PURE__ */ React13.createElement(Group, { className: cx13("visx-bar-group", className), top, left }, barGroups.map((barGroup) => /* @__PURE__ */ React13.createElement(
    Group,
    {
      key: `bar-group-${barGroup.index}-${barGroup.x0}`,
      left: barGroup.x0
    },
    barGroup.bars.map((bar) => /* @__PURE__ */ React13.createElement(
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
import React14 from "react";
import cx14 from "clsx";
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
    return /* @__PURE__ */ React14.createElement(React14.Fragment, null, children(barGroups));
  return /* @__PURE__ */ React14.createElement(
    Group,
    {
      className: cx14("visx-bar-group-horizontal", className),
      top,
      left
    },
    barGroups.map((barGroup) => /* @__PURE__ */ React14.createElement(
      Group,
      {
        key: `bar-group-${barGroup.index}-${barGroup.y0}`,
        top: barGroup.y0
      },
      barGroup.bars.map((bar) => /* @__PURE__ */ React14.createElement(
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
import React15 from "react";
import cx15 from "clsx";
import { stack as d3stack } from "d3-shape";

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
  const stack2 = d3stack();
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
    return /* @__PURE__ */ React15.createElement(React15.Fragment, null, children(barStacks));
  return /* @__PURE__ */ React15.createElement(Group, { className: cx15("visx-bar-stack", className), top, left }, barStacks.map(
    (barStack) => barStack.bars.map((bar) => /* @__PURE__ */ React15.createElement(
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
import React16 from "react";
import cx16 from "clsx";
import { stack as d3stack2 } from "d3-shape";
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
  const stack2 = d3stack2();
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
    return /* @__PURE__ */ React16.createElement(React16.Fragment, null, children(barStacks));
  return /* @__PURE__ */ React16.createElement(
    Group,
    {
      className: cx16("visx-bar-stack-horizontal", className),
      top,
      left
    },
    barStacks.map(
      (barStack) => barStack.bars.map((bar) => /* @__PURE__ */ React16.createElement(
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
import React17 from "react";
import cx17 from "clsx";
import { linkHorizontal } from "d3-shape";
function pathHorizontalDiagonal({
  source,
  target,
  x,
  y
}) {
  return (data) => {
    const link = linkHorizontal();
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
    return /* @__PURE__ */ React17.createElement(React17.Fragment, null, children({ path: pathGen }));
  return /* @__PURE__ */ React17.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: cx17("visx-link visx-link-horizontal-diagonal", className),
      d: pathGen(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/link/diagonal/LinkVertical.tsx
import React18 from "react";
import cx18 from "clsx";
import { linkVertical } from "d3-shape";
function pathVerticalDiagonal({
  source,
  target,
  x,
  y
}) {
  return (data) => {
    const link = linkVertical();
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
    return /* @__PURE__ */ React18.createElement(React18.Fragment, null, children({ path: pathGen }));
  return /* @__PURE__ */ React18.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: cx18("visx-link visx-link-vertical-diagonal", className),
      d: pathGen(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/link/diagonal/LinkRadial.tsx
import React19 from "react";
import cx19 from "clsx";
import { linkRadial } from "d3-shape";
function pathRadialDiagonal({
  source,
  target,
  angle,
  radius
}) {
  return (data) => {
    const link = linkRadial();
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
    return /* @__PURE__ */ React19.createElement(React19.Fragment, null, children({ path: pathGen }));
  return /* @__PURE__ */ React19.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: cx19("visx-link visx-link-radial-diagonal", className),
      d: pathGen(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/link/curve/LinkHorizontalCurve.tsx
import React20 from "react";
import cx20 from "clsx";
import { path as d3Path } from "d3-path";
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
    const path = d3Path();
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
    return /* @__PURE__ */ React20.createElement(React20.Fragment, null, children({ path: pathGen }));
  return /* @__PURE__ */ React20.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: cx20("visx-link visx-link-horizontal-curve", className),
      d: pathGen(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/link/curve/LinkVerticalCurve.tsx
import React21 from "react";
import cx21 from "clsx";
import { path as d3Path2 } from "d3-path";
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
    const path = d3Path2();
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
    return /* @__PURE__ */ React21.createElement(React21.Fragment, null, children({ path: pathGen }));
  return /* @__PURE__ */ React21.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: cx21("visx-link visx-link-vertical-curve", className),
      d: pathGen(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/link/curve/LinkRadialCurve.tsx
import React22 from "react";
import cx22 from "clsx";
import { path as d3Path3 } from "d3-path";
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
    const path = d3Path3();
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
    return /* @__PURE__ */ React22.createElement(React22.Fragment, null, children({ path: pathGen }));
  return /* @__PURE__ */ React22.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: cx22("visx-link visx-link-radial-curve", className),
      d: pathGen(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/link/line/LinkHorizontalLine.tsx
import React23 from "react";
import cx23 from "clsx";
import { path as d3Path4 } from "d3-path";
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
    const path = d3Path4();
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
    return /* @__PURE__ */ React23.createElement(React23.Fragment, null, children({ path: pathGen }));
  return /* @__PURE__ */ React23.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: cx23("visx-link visx-link-horizontal-line", className),
      d: pathGen(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/link/line/LinkVerticalLine.tsx
import React24 from "react";
import cx24 from "clsx";
import { path as d3Path5 } from "d3-path";
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
    const path = d3Path5();
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
    return /* @__PURE__ */ React24.createElement(React24.Fragment, null, children({ path: pathGen }));
  return /* @__PURE__ */ React24.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: cx24("visx-link visx-link-vertical-line", className),
      d: pathGen(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/link/line/LinkRadialLine.tsx
import React25 from "react";
import cx25 from "clsx";
import { path as d3Path6 } from "d3-path";
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
    const path = d3Path6();
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
    return /* @__PURE__ */ React25.createElement(React25.Fragment, null, children({ path: pathGen }));
  return /* @__PURE__ */ React25.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: cx25("visx-link visx-link-radial-line", className),
      d: pathGen(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/link/step/LinkHorizontalStep.tsx
import React26 from "react";
import cx26 from "clsx";
import { path as d3Path7 } from "d3-path";
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
    const path = d3Path7();
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
    return /* @__PURE__ */ React26.createElement(React26.Fragment, null, children({ path: pathGen }));
  return /* @__PURE__ */ React26.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: cx26("visx-link visx-link-horizontal-step", className),
      d: pathGen(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/link/step/LinkVerticalStep.tsx
import React27 from "react";
import cx27 from "clsx";
import { path as d3Path8 } from "d3-path";
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
    const path = d3Path8();
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
    return /* @__PURE__ */ React27.createElement(React27.Fragment, null, children({ path: pathGen }));
  return /* @__PURE__ */ React27.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: cx27("visx-link visx-link-vertical-step", className),
      d: pathGen(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/link/step/LinkRadialStep.tsx
import React28 from "react";
import cx28 from "clsx";
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
    return /* @__PURE__ */ React28.createElement(React28.Fragment, null, children({ path: pathGen }));
  return /* @__PURE__ */ React28.createElement(
    "path",
    __spreadValues({
      ref: innerRef,
      className: cx28("visx-link visx-link-radial-step", className),
      d: pathGen(data) || ""
    }, restProps)
  );
}

// src/shape/shapes/Polygon.tsx
import React29 from "react";
import cx29 from "clsx";
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
    return /* @__PURE__ */ React29.createElement(React29.Fragment, null, children({ points: pointsToRender }));
  return /* @__PURE__ */ React29.createElement(
    "polygon",
    __spreadValues({
      ref: innerRef,
      className: cx29("visx-polygon", className),
      points: pointsToRender.join(" ")
    }, restProps)
  );
}

// src/shape/shapes/Circle.tsx
import React30 from "react";
import cx30 from "clsx";
function Circle(_a) {
  var _b = _a, {
    className,
    innerRef
  } = _b, restProps = __objRest(_b, [
    "className",
    "innerRef"
  ]);
  return /* @__PURE__ */ React30.createElement(
    "circle",
    __spreadValues({
      ref: innerRef,
      className: cx30("visx-circle", className)
    }, restProps)
  );
}

// src/shape/shapes/SplitLinePath.tsx
import React31, { useMemo } from "react";

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
  const pointsInSegments = useMemo(() => {
    const xFn = typeof x === "number" || typeof x === "undefined" ? () => x : x;
    const yFn = typeof y === "number" || typeof y === "undefined" ? () => y : y;
    return segments.map((s) => s.map((value, i) => ({ x: xFn(value, i, s), y: yFn(value, i, s) })));
  }, [x, y, segments]);
  const pathString = useMemo(() => {
    const path = line({ x, y, defined, curve });
    return path(segments.flat()) || "";
  }, [x, y, defined, curve, segments]);
  const splitLineSegments = useMemo(
    () => getSplitLineSegments({
      path: pathString,
      segmentation,
      pointsInSegments,
      sampleRate
    }),
    [pathString, segmentation, pointsInSegments, sampleRate]
  );
  return /* @__PURE__ */ React31.createElement("g", null, splitLineSegments.map(
    (segment, index) => children ? /* @__PURE__ */ React31.createElement(React31.Fragment, { key: index }, children({ index, segment, styles: styles[index] || styles[index % styles.length] })) : /* @__PURE__ */ React31.createElement(
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
export {
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
  LinkHorizontalDiagonal as LinkHorizontal,
  LinkHorizontalCurve,
  LinkHorizontalLine,
  LinkHorizontalStep,
  LinkRadialDiagonal as LinkRadial,
  LinkRadialCurve,
  LinkRadialLine,
  LinkRadialStep,
  LinkVerticalDiagonal as LinkVertical,
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
  createScale_default as createScale,
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
  createBandScale as scaleBand,
  scaleCanBeZeroed,
  createLinearScale as scaleLinear,
  createLogScale as scaleLog,
  createOrdinalScale as scaleOrdinal,
  createPointScale as scalePoint,
  createPowScale as scalePower,
  createQuantileScale as scaleQuantile,
  createQuantizeScale as scaleQuantize,
  createRadialScale as scaleRadial,
  createSqrtScale as scaleSqrt,
  createSymlogScale as scaleSymlog,
  createThresholdScale as scaleThreshold,
  createTimeScale as scaleTime,
  createUtcScale as scaleUtc,
  stack,
  stackOffset,
  stackOrder,
  toString,
  updateScale_default as updateScale
};
