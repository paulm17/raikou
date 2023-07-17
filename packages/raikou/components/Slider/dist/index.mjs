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

// src/Slider/Slider.tsx
import React8, { useCallback, useRef as useRef2, useState as useState3 } from "react";
import { clamp, useMergedRef, useMove, useUncontrolled } from "@raikou/hooks";
import {
  factory,
  useProps,
  useDirection,
  useStyles,
  createVarsResolver,
  getSize,
  getThemeColor,
  getRadius,
  rem as rem2
} from "@raikou/core";

// src/SliderRoot/SliderRoot.tsx
import React3, { forwardRef } from "react";
import {
  Box
} from "@raikou/core";

// ../utils/create-safe-context/create-safe-context.tsx
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

// ../utils/create-optional-context/create-optional-context.tsx
import React2, { createContext as createContext2, useContext as useContext2 } from "react";

// src/Slider.context.ts
var [SliderProvider, useSliderContext] = createSafeContext("SliderProvider was not found in tree");

// src/SliderRoot/SliderRoot.tsx
var SliderRoot = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      size,
      disabled,
      variant,
      color,
      thumbSize,
      radius
    } = _b, others = __objRest(_b, [
      "size",
      "disabled",
      "variant",
      "color",
      "thumbSize",
      "radius"
    ]);
    const { getStyles } = useSliderContext();
    return /* @__PURE__ */ React3.createElement(
      Box,
      __spreadValues(__spreadValues({
        tabIndex: -1,
        variant,
        size,
        ref
      }, getStyles("root")), others)
    );
  }
);
SliderRoot.displayName = "@raikou/core/SliderRoot";

// src/Track/Track.tsx
import React5 from "react";
import { Box as Box3 } from "@raikou/core";

// src/Marks/Marks.tsx
import React4 from "react";
import { Box as Box2 } from "@raikou/core";

// src/utils/get-position/get-position.ts
function getPosition({ value, min, max }) {
  const position = (value - min) / (max - min) * 100;
  return Math.min(Math.max(position, 0), 100);
}

// src/Marks/is-mark-filled.ts
function isMarkFilled({ mark, offset, value, inverted = false }) {
  return inverted ? typeof offset === "number" ? mark.value <= offset || mark.value >= value : mark.value >= value : typeof offset === "number" ? mark.value >= offset && mark.value <= value : mark.value <= value;
}

// src/Marks/Marks.tsx
function Marks({
  marks,
  min,
  max,
  disabled,
  value,
  offset,
  inverted
}) {
  const { getStyles } = useSliderContext();
  if (!marks) {
    return null;
  }
  const items = marks.map((mark, index) => /* @__PURE__ */ React4.createElement(
    Box2,
    __spreadProps(__spreadValues({}, getStyles("markWrapper")), {
      __vars: {
        "--mark-offset": `${getPosition({ value: mark.value, min, max })}%`
      },
      key: index
    }),
    /* @__PURE__ */ React4.createElement(
      Box2,
      __spreadProps(__spreadValues({}, getStyles("mark")), {
        mod: {
          filled: isMarkFilled({ mark, value, offset, inverted }),
          disabled
        }
      })
    ),
    mark.label && /* @__PURE__ */ React4.createElement("div", __spreadValues({}, getStyles("markLabel")), mark.label)
  ));
  return /* @__PURE__ */ React4.createElement("div", null, items);
}
Marks.displayName = "@raikou/core/SliderMarks";

// src/Track/Track.tsx
function Track(_a) {
  var _b = _a, {
    filled,
    children,
    offset,
    disabled,
    marksOffset,
    inverted,
    containerProps
  } = _b, others = __objRest(_b, [
    "filled",
    "children",
    "offset",
    "disabled",
    "marksOffset",
    "inverted",
    "containerProps"
  ]);
  const { getStyles } = useSliderContext();
  return /* @__PURE__ */ React5.createElement(React5.Fragment, null, /* @__PURE__ */ React5.createElement(
    Box3,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("trackContainer")), {
      mod: { disabled }
    }), containerProps),
    /* @__PURE__ */ React5.createElement(Box3, __spreadProps(__spreadValues({}, getStyles("track")), { mod: { inverted, disabled } }), /* @__PURE__ */ React5.createElement(
      Box3,
      __spreadValues({
        mod: { inverted, disabled },
        __vars: {
          "--slider-bar-width": `calc(${filled}% + var(--slider-size))`,
          "--slider-bar-offset": `calc(${offset}% - var(--slider-size))`
        }
      }, getStyles("bar"))
    ), children, /* @__PURE__ */ React5.createElement(
      Marks,
      __spreadProps(__spreadValues({}, others), {
        offset: marksOffset,
        disabled,
        inverted
      })
    ))
  ));
}
Track.displayName = "@raikou/core/SliderTrack";

// src/Thumb/Thumb.tsx
import React7, { useState as useState2, forwardRef as forwardRef2 } from "react";
import { Box as Box4 } from "@raikou/core";

// ../Transition/src/transitions.ts
import { rem } from "@raikou/core";
var popIn = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${rem(10)})` },
  transitionProperty: "transform, opacity"
};
var transitions = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  scale: {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: "scale(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-y": {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-x": {
    in: { opacity: 1, transform: "scaleX(1)" },
    out: { opacity: 0, transform: "scaleX(0)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "skew-up": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: {
      opacity: 0,
      transform: `translateY(-${rem(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: {
      opacity: 0,
      transform: `translateY(${rem(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${rem(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${rem(20)}) rotate(5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-100%)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(100%)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "slide-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(100%)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "slide-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-100%)" },
    common: { transformOrigin: "right" },
    transitionProperty: "transform, opacity"
  },
  pop: __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "center center" }
  }),
  "pop-bottom-left": __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "bottom left" }
  }),
  "pop-bottom-right": __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "bottom right" }
  }),
  "pop-top-left": __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "top left" }
  }),
  "pop-top-right": __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "top right" }
  })
};

// ../Transition/src/Transition.tsx
import React6 from "react";

// ../Transition/src/get-transition-styles/get-transition-styles.ts
var transitionStatuses = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function getTransitionStyles({
  transition,
  state,
  duration,
  timingFunction
}) {
  const shared = {
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: timingFunction
  };
  if (typeof transition === "string") {
    if (!(transition in transitions)) {
      return {};
    }
    return __spreadValues(__spreadValues(__spreadValues({
      transitionProperty: transitions[transition].transitionProperty
    }, shared), transitions[transition].common), transitions[transition][transitionStatuses[state]]);
  }
  return __spreadValues(__spreadValues(__spreadValues({
    transitionProperty: transition.transitionProperty
  }, shared), transition.common), transition[transitionStatuses[state]]);
}

// ../Transition/src/use-transition.ts
import { useState, useEffect, useRef } from "react";
import { useReducedMotion, useDidUpdate } from "@raikou/hooks";
import { getTheme } from "@raikou/core";
function useTransition({
  duration,
  exitDuration,
  timingFunction,
  mounted,
  onEnter,
  onExit,
  onEntered,
  onExited
}) {
  const theme = getTheme();
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionDuration, setTransitionDuration] = useState(
    reduceMotion ? 0 : duration
  );
  const [transitionStatus, setStatus] = useState(
    mounted ? "entered" : "exited"
  );
  const timeoutRef = useRef(-1);
  const handleStateChange = (shouldMount) => {
    const preHandler = shouldMount ? onEnter : onExit;
    const handler = shouldMount ? onEntered : onExited;
    setStatus(shouldMount ? "pre-entering" : "pre-exiting");
    window.clearTimeout(timeoutRef.current);
    const newTransitionDuration = reduceMotion ? 0 : shouldMount ? duration : exitDuration;
    setTransitionDuration(newTransitionDuration);
    if (newTransitionDuration === 0) {
      typeof preHandler === "function" && preHandler();
      typeof handler === "function" && handler();
      setStatus(shouldMount ? "entered" : "exited");
    } else {
      const preStateTimeout = window.setTimeout(() => {
        typeof preHandler === "function" && preHandler();
        setStatus(shouldMount ? "entering" : "exiting");
      }, 10);
      timeoutRef.current = window.setTimeout(() => {
        window.clearTimeout(preStateTimeout);
        typeof handler === "function" && handler();
        setStatus(shouldMount ? "entered" : "exited");
      }, newTransitionDuration);
    }
  };
  useDidUpdate(() => {
    handleStateChange(mounted);
  }, [mounted]);
  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);
  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || "ease"
  };
}

// ../Transition/src/Transition.tsx
function Transition({
  keepMounted,
  transition,
  duration = 250,
  exitDuration = duration,
  mounted,
  children,
  timingFunction = "ease",
  onExit,
  onEntered,
  onEnter,
  onExited
}) {
  const { transitionDuration, transitionStatus, transitionTimingFunction } = useTransition({
    mounted,
    exitDuration,
    duration,
    timingFunction,
    onExit,
    onEntered,
    onEnter,
    onExited
  });
  if (transitionDuration === 0) {
    return mounted ? /* @__PURE__ */ React6.createElement(React6.Fragment, null, children({})) : keepMounted ? children({ display: "none" }) : null;
  }
  return transitionStatus === "exited" ? keepMounted ? children({ display: "none" }) : null : /* @__PURE__ */ React6.createElement(React6.Fragment, null, children(
    getTransitionStyles({
      transition,
      duration: transitionDuration,
      state: transitionStatus,
      timingFunction: transitionTimingFunction
    })
  ));
}
Transition.displayName = "@raikou/core/Transition";

// src/Thumb/Thumb.tsx
var Thumb = forwardRef2(
  ({
    max,
    min,
    value,
    position,
    label,
    dragging,
    onMouseDown,
    onKeyDownCapture,
    labelTransitionProps,
    labelAlwaysOn,
    thumbLabel,
    onFocus,
    onBlur,
    showLabelOnHover,
    isHovered,
    children = null,
    disabled
  }, ref) => {
    const { getStyles } = useSliderContext();
    const [focused, setFocused] = useState2(false);
    const isVisible = labelAlwaysOn || dragging || focused || showLabelOnHover && isHovered;
    return /* @__PURE__ */ React7.createElement(
      Box4,
      __spreadProps(__spreadValues({
        tabIndex: 0,
        role: "slider",
        "aria-label": thumbLabel,
        "aria-valuemax": max,
        "aria-valuemin": min,
        "aria-valuenow": value,
        ref,
        __vars: { "--slider-thumb-offset": `${position}%` }
      }, getStyles("thumb", { focusable: true })), {
        mod: { dragging, disabled },
        onFocus: () => {
          setFocused(true);
          typeof onFocus === "function" && onFocus();
        },
        onBlur: () => {
          setFocused(false);
          typeof onBlur === "function" && onBlur();
        },
        onTouchStart: onMouseDown,
        onMouseDown,
        onKeyDownCapture,
        onClick: (event) => event.stopPropagation()
      }),
      children,
      /* @__PURE__ */ React7.createElement(
        Transition,
        __spreadValues({
          mounted: label != null && !!isVisible,
          transition: "fade",
          duration: 0
        }, labelTransitionProps),
        (transitionStyles) => /* @__PURE__ */ React7.createElement("div", __spreadValues({}, getStyles("label", { style: transitionStyles })), label)
      )
    );
  }
);
Thumb.displayName = "@raikou/core/SliderThumb";

// src/utils/get-change-value/get-change-value.ts
function getChangeValue({
  value,
  containerWidth,
  min,
  max,
  step,
  precision
}) {
  const left = !containerWidth ? value : Math.min(Math.max(value, 0), containerWidth) / containerWidth;
  const dx = left * (max - min);
  const nextValue = (dx !== 0 ? Math.round(dx / step) * step : 0) + min;
  const nextValueWithinStep = Math.max(nextValue, min);
  if (precision !== void 0) {
    return Number(nextValueWithinStep.toFixed(precision));
  }
  return nextValueWithinStep;
}

// src/Slider/Slider.tsx
var defaultProps = {
  size: "md",
  radius: "xl",
  min: 0,
  max: 100,
  step: 1,
  marks: [],
  label: (f) => f,
  labelTransitionProps: { transition: "fade", duration: 0 },
  labelAlwaysOn: false,
  thumbLabel: "",
  showLabelOnHover: true,
  disabled: false,
  scale: (v) => v
};
var varsResolver = createVarsResolver(
  (theme, { size, color, thumbSize, radius }) => ({
    root: {
      "--slider-size": getSize(size, "slider-size"),
      "--slider-color": getThemeColor(color, theme),
      "--slider-radius": getRadius(radius),
      "--slider-thumb-size": typeof thumbSize !== "undefined" ? rem2(thumbSize) : "calc(var(--slider-size) * 2)"
    }
  })
);
var Slider = factory((_props, ref) => {
  const props = useProps("Slider", defaultProps, _props);
  const _a = props, {
    classNames,
    styles,
    value,
    onChange,
    onChangeEnd,
    size,
    min,
    max,
    step,
    precision,
    defaultValue,
    name,
    marks,
    label,
    labelTransitionProps,
    labelAlwaysOn,
    thumbLabel,
    showLabelOnHover,
    thumbChildren,
    disabled,
    unstyled,
    scale,
    inverted,
    className,
    style,
    vars
  } = _a, others = __objRest(_a, [
    "classNames",
    "styles",
    "value",
    "onChange",
    "onChangeEnd",
    "size",
    "min",
    "max",
    "step",
    "precision",
    "defaultValue",
    "name",
    "marks",
    "label",
    "labelTransitionProps",
    "labelAlwaysOn",
    "thumbLabel",
    "showLabelOnHover",
    "thumbChildren",
    "disabled",
    "unstyled",
    "scale",
    "inverted",
    "className",
    "style",
    "vars"
  ]);
  const getStyles = useStyles({
    name: "Slider",
    props,
    classes: {
      root: "slider-root",
      label: "slider-label",
      thumb: "slider-thumb",
      trackContainer: "slider-trackContainer",
      track: "slider-track",
      bar: "slider-bar",
      markWrapper: "slider-markWrapper",
      mark: "slider-mark",
      markLabel: "slider-markLabel"
    },
    classNames,
    className,
    styles,
    style,
    vars,
    varsResolver
  });
  const { dir } = useDirection();
  const [hovered, setHovered] = useState3(false);
  const [_value, setValue] = useUncontrolled({
    value: typeof value === "number" ? clamp(value, min, max) : value,
    defaultValue: typeof defaultValue === "number" ? clamp(defaultValue, min, max) : defaultValue,
    finalValue: clamp(0, min, max),
    onChange
  });
  const valueRef = useRef2(_value);
  const root = useRef2();
  const thumb = useRef2();
  const position = getPosition({ value: _value, min, max });
  const scaledValue = scale(_value);
  const _label = typeof label === "function" ? label(scaledValue) : label;
  const handleChange = useCallback(
    ({ x }) => {
      if (!disabled) {
        const nextValue = getChangeValue({
          value: x,
          min,
          max,
          step,
          precision
        });
        setValue(nextValue);
        valueRef.current = nextValue;
      }
    },
    [disabled, min, max, step, precision]
  );
  const { ref: container, active } = useMove(
    handleChange,
    { onScrubEnd: () => onChangeEnd == null ? void 0 : onChangeEnd(valueRef.current) },
    dir
  );
  const handleTrackKeydownCapture = (event) => {
    var _a2, _b, _c, _d, _e, _f;
    if (!disabled) {
      switch (event.key) {
        case "ArrowUp": {
          event.preventDefault();
          (_a2 = thumb.current) == null ? void 0 : _a2.focus();
          const nextValue = Math.min(Math.max(_value + step, min), max);
          onChangeEnd == null ? void 0 : onChangeEnd(nextValue);
          setValue(nextValue);
          break;
        }
        case "ArrowRight": {
          event.preventDefault();
          (_b = thumb.current) == null ? void 0 : _b.focus();
          const nextValue = Math.min(
            Math.max(dir === "rtl" ? _value - step : _value + step, min),
            max
          );
          onChangeEnd == null ? void 0 : onChangeEnd(nextValue);
          setValue(nextValue);
          break;
        }
        case "ArrowDown": {
          event.preventDefault();
          (_c = thumb.current) == null ? void 0 : _c.focus();
          const nextValue = Math.min(Math.max(_value - step, min), max);
          onChangeEnd == null ? void 0 : onChangeEnd(nextValue);
          setValue(nextValue);
          break;
        }
        case "ArrowLeft": {
          event.preventDefault();
          (_d = thumb.current) == null ? void 0 : _d.focus();
          const nextValue = Math.min(
            Math.max(dir === "rtl" ? _value + step : _value - step, min),
            max
          );
          onChangeEnd == null ? void 0 : onChangeEnd(nextValue);
          setValue(nextValue);
          break;
        }
        case "Home": {
          event.preventDefault();
          (_e = thumb.current) == null ? void 0 : _e.focus();
          onChangeEnd == null ? void 0 : onChangeEnd(min);
          setValue(min);
          break;
        }
        case "End": {
          event.preventDefault();
          (_f = thumb.current) == null ? void 0 : _f.focus();
          onChangeEnd == null ? void 0 : onChangeEnd(max);
          setValue(max);
          break;
        }
        default: {
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ React8.createElement(SliderProvider, { value: { getStyles } }, /* @__PURE__ */ React8.createElement(
    SliderRoot,
    __spreadProps(__spreadValues({}, others), {
      ref: useMergedRef(ref, root),
      onKeyDownCapture: handleTrackKeydownCapture,
      onMouseDownCapture: () => {
        var _a2;
        return (_a2 = root.current) == null ? void 0 : _a2.focus();
      },
      size,
      disabled
    }),
    /* @__PURE__ */ React8.createElement(
      Track,
      {
        inverted,
        offset: 0,
        filled: position,
        marks,
        min,
        max,
        value: scaledValue,
        disabled,
        containerProps: {
          ref: container,
          onMouseEnter: showLabelOnHover ? () => setHovered(true) : void 0,
          onMouseLeave: showLabelOnHover ? () => setHovered(false) : void 0
        }
      },
      /* @__PURE__ */ React8.createElement(
        Thumb,
        {
          max,
          min,
          value: scaledValue,
          position,
          dragging: active,
          label: _label,
          ref: thumb,
          labelTransitionProps,
          labelAlwaysOn,
          thumbLabel,
          showLabelOnHover,
          isHovered: hovered,
          disabled
        },
        thumbChildren
      )
    ),
    /* @__PURE__ */ React8.createElement("input", { type: "hidden", name, value: scaledValue })
  ));
});
Slider.displayName = "@raikou/core/Slider";

// src/RangeSlider/RangeSlider.tsx
import React9, { useEffect as useEffect2, useRef as useRef3, useState as useState4 } from "react";
import { useMove as useMove2, useUncontrolled as useUncontrolled2 } from "@raikou/hooks";
import {
  factory as factory2,
  useProps as useProps2,
  useDirection as useDirection2,
  createVarsResolver as createVarsResolver2,
  getSize as getSize2,
  getThemeColor as getThemeColor2,
  getRadius as getRadius2,
  rem as rem3,
  useStyles as useStyles2
} from "@raikou/core";

// src/utils/get-client-position/get-client-position.ts
function getClientPosition(event) {
  if ("TouchEvent" in window && event instanceof window.TouchEvent) {
    const touch = event.touches[0];
    return touch.clientX;
  }
  return event.clientX;
}

// src/RangeSlider/RangeSlider.tsx
var varsResolver2 = createVarsResolver2(
  (theme, { size, color, thumbSize, radius }) => ({
    root: {
      "--slider-size": getSize2(size, "slider-size"),
      "--slider-color": getThemeColor2(color, theme),
      "--slider-radius": getRadius2(radius),
      "--slider-thumb-size": typeof thumbSize !== "undefined" ? rem3(thumbSize) : "calc(var(--slider-size) * 2)"
    }
  })
);
var defaultProps2 = {
  size: "md",
  radius: "xl",
  min: 0,
  max: 100,
  minRange: 10,
  step: 1,
  marks: [],
  label: (f) => f,
  labelTransitionProps: { transition: "fade", duration: 0 },
  labelAlwaysOn: false,
  showLabelOnHover: true,
  disabled: false,
  scale: (v) => v
};
var RangeSlider = factory2((_props, ref) => {
  const props = useProps2("RangeSlider", defaultProps2, _props);
  const _a = props, {
    classNames,
    styles,
    value,
    onChange,
    onChangeEnd,
    size,
    min,
    max,
    minRange,
    maxRange,
    step,
    precision,
    defaultValue,
    name,
    marks,
    label,
    labelTransitionProps,
    labelAlwaysOn,
    thumbFromLabel,
    thumbToLabel,
    showLabelOnHover,
    thumbChildren,
    disabled,
    unstyled,
    scale,
    inverted,
    className,
    style,
    vars
  } = _a, others = __objRest(_a, [
    "classNames",
    "styles",
    "value",
    "onChange",
    "onChangeEnd",
    "size",
    "min",
    "max",
    "minRange",
    "maxRange",
    "step",
    "precision",
    "defaultValue",
    "name",
    "marks",
    "label",
    "labelTransitionProps",
    "labelAlwaysOn",
    "thumbFromLabel",
    "thumbToLabel",
    "showLabelOnHover",
    "thumbChildren",
    "disabled",
    "unstyled",
    "scale",
    "inverted",
    "className",
    "style",
    "vars"
  ]);
  const getStyles = useStyles2({
    name: "Slider",
    props,
    classes: {
      root: "slider-root",
      label: "slider-label",
      thumb: "slider-thumb",
      trackContainer: "slider-trackContainer",
      track: "slider-track",
      bar: "slider-bar",
      markWrapper: "slider-markWrapper",
      mark: "slider-mark",
      markLabel: "slider-markLabel"
    },
    classNames,
    className,
    styles,
    style,
    vars,
    varsResolver: varsResolver2
  });
  const { dir } = useDirection2();
  const [focused, setFocused] = useState4(-1);
  const [hovered, setHovered] = useState4(false);
  const [_value, setValue] = useUncontrolled2({
    value,
    defaultValue,
    finalValue: [min, max],
    onChange
  });
  const valueRef = useRef3(_value);
  const thumbs = useRef3([]);
  const thumbIndex = useRef3(void 0);
  const positions = [
    getPosition({ value: _value[0], min, max }),
    getPosition({ value: _value[1], min, max })
  ];
  const _setValue = (val) => {
    setValue(val);
    valueRef.current = val;
  };
  useEffect2(
    () => {
      if (Array.isArray(value)) {
        valueRef.current = value;
      }
    },
    Array.isArray(value) ? [value[0], value[1]] : [null, null]
  );
  const setRangedValue = (val, index, triggerChangeEnd) => {
    const clone = [...valueRef.current];
    clone[index] = val;
    if (index === 0) {
      if (val > clone[1] - (minRange - 1e-9)) {
        clone[1] = Math.min(val + minRange, max);
      }
      if (val > (max - (minRange - 1e-9) || min)) {
        clone[index] = valueRef.current[index];
      }
      if (clone[1] - val > maxRange) {
        clone[1] = val + maxRange;
      }
    }
    if (index === 1) {
      if (val < clone[0] + minRange) {
        clone[0] = Math.max(val - minRange, min);
      }
      if (val < clone[0] + minRange) {
        clone[index] = valueRef.current[index];
      }
      if (val - clone[0] > maxRange) {
        clone[0] = val - maxRange;
      }
    }
    _setValue(clone);
    if (triggerChangeEnd) {
      onChangeEnd == null ? void 0 : onChangeEnd(valueRef.current);
    }
  };
  const handleChange = (val) => {
    if (!disabled) {
      const nextValue = getChangeValue({
        value: val,
        min,
        max,
        step,
        precision
      });
      setRangedValue(nextValue, thumbIndex.current, false);
    }
  };
  const { ref: container, active } = useMove2(
    ({ x }) => handleChange(x),
    { onScrubEnd: () => onChangeEnd == null ? void 0 : onChangeEnd(valueRef.current) },
    dir
  );
  function handleThumbMouseDown(index) {
    thumbIndex.current = index;
  }
  const handleTrackMouseDownCapture = (event) => {
    container.current.focus();
    const rect = container.current.getBoundingClientRect();
    const changePosition = getClientPosition(event.nativeEvent);
    const changeValue = getChangeValue({
      value: changePosition - rect.left,
      max,
      min,
      step,
      containerWidth: rect.width
    });
    const nearestHandle = Math.abs(_value[0] - changeValue) > Math.abs(_value[1] - changeValue) ? 1 : 0;
    const _nearestHandle = dir === "ltr" ? nearestHandle : nearestHandle === 1 ? 0 : 1;
    thumbIndex.current = _nearestHandle;
  };
  const getFocusedThumbIndex = () => {
    if (focused !== 1 && focused !== 0) {
      setFocused(0);
      return 0;
    }
    return focused;
  };
  const handleTrackKeydownCapture = (event) => {
    if (!disabled) {
      switch (event.key) {
        case "ArrowUp": {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          setRangedValue(
            Math.min(
              Math.max(valueRef.current[focusedIndex] + step, min),
              max
            ),
            focusedIndex,
            true
          );
          break;
        }
        case "ArrowRight": {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          setRangedValue(
            Math.min(
              Math.max(
                dir === "rtl" ? valueRef.current[focusedIndex] - step : valueRef.current[focusedIndex] + step,
                min
              ),
              max
            ),
            focusedIndex,
            true
          );
          break;
        }
        case "ArrowDown": {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          setRangedValue(
            Math.min(
              Math.max(valueRef.current[focusedIndex] - step, min),
              max
            ),
            focusedIndex,
            true
          );
          break;
        }
        case "ArrowLeft": {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          setRangedValue(
            Math.min(
              Math.max(
                dir === "rtl" ? valueRef.current[focusedIndex] + step : valueRef.current[focusedIndex] - step,
                min
              ),
              max
            ),
            focusedIndex,
            true
          );
          break;
        }
        default: {
          break;
        }
      }
    }
  };
  const sharedThumbProps = {
    max,
    min,
    size,
    labelTransitionProps,
    labelAlwaysOn,
    onBlur: () => setFocused(-1)
  };
  const hasArrayThumbChildren = Array.isArray(thumbChildren);
  return /* @__PURE__ */ React9.createElement(SliderProvider, { value: { getStyles } }, /* @__PURE__ */ React9.createElement(SliderRoot, __spreadProps(__spreadValues({}, others), { size, ref, disabled }), /* @__PURE__ */ React9.createElement(
    Track,
    {
      offset: positions[0],
      marksOffset: _value[0],
      filled: positions[1] - positions[0],
      marks,
      inverted,
      min,
      max,
      value: _value[1],
      disabled,
      containerProps: {
        ref: container,
        onMouseEnter: showLabelOnHover ? () => setHovered(true) : void 0,
        onMouseLeave: showLabelOnHover ? () => setHovered(false) : void 0,
        onTouchStartCapture: handleTrackMouseDownCapture,
        onTouchEndCapture: () => {
          thumbIndex.current = -1;
        },
        onMouseDownCapture: handleTrackMouseDownCapture,
        onMouseUpCapture: () => {
          thumbIndex.current = -1;
        },
        onKeyDownCapture: handleTrackKeydownCapture
      }
    },
    /* @__PURE__ */ React9.createElement(
      Thumb,
      __spreadProps(__spreadValues({}, sharedThumbProps), {
        value: scale(_value[0]),
        position: positions[0],
        dragging: active,
        label: typeof label === "function" ? label(scale(_value[0])) : label,
        ref: (node) => {
          thumbs.current[0] = node;
        },
        thumbLabel: thumbFromLabel,
        onMouseDown: () => handleThumbMouseDown(0),
        onFocus: () => setFocused(0),
        showLabelOnHover,
        isHovered: hovered,
        disabled
      }),
      hasArrayThumbChildren ? thumbChildren[0] : thumbChildren
    ),
    /* @__PURE__ */ React9.createElement(
      Thumb,
      __spreadProps(__spreadValues({}, sharedThumbProps), {
        thumbLabel: thumbToLabel,
        value: scale(_value[1]),
        position: positions[1],
        dragging: active,
        label: typeof label === "function" ? label(scale(_value[1])) : label,
        ref: (node) => {
          thumbs.current[1] = node;
        },
        onMouseDown: () => handleThumbMouseDown(1),
        onFocus: () => setFocused(1),
        showLabelOnHover,
        isHovered: hovered,
        disabled
      }),
      hasArrayThumbChildren ? thumbChildren[1] : thumbChildren
    )
  ), /* @__PURE__ */ React9.createElement("input", { type: "hidden", name: `${name}_from`, value: _value[0] }), /* @__PURE__ */ React9.createElement("input", { type: "hidden", name: `${name}_to`, value: _value[1] })));
});
RangeSlider.displayName = "@raikou/core/RangeSlider";
export {
  RangeSlider,
  Slider
};
