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

// src/Carousel.tsx
import React7, { Children, useCallback, useEffect as useEffect2, useState as useState2 } from "react";
import {
  Box as Box3,
  factory as factory2,
  useProps as useProps3,
  useStyles as useStyles2,
  createVarsResolver,
  useDirection,
  useRandomClassName,
  rem as rem2,
  getSpacing as getSpacing2
} from "@raikou/core";

// ../components/UnstyledButton/src/UnstyledButton.tsx
import React from "react";
import {
  Box,
  useProps,
  useStyles,
  polymorphicFactory
} from "@raikou/core";
var defaultProps = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = polymorphicFactory(
  (_props, ref) => {
    const props = useProps("UnstyledButton", defaultProps, _props);
    const _a = props, {
      className,
      component = "button",
      __staticSelector,
      unstyled,
      classNames,
      styles,
      style
    } = _a, others = __objRest(_a, [
      "className",
      "component",
      "__staticSelector",
      "unstyled",
      "classNames",
      "styles",
      "style"
    ]);
    const getStyles = useStyles({
      name: __staticSelector,
      props,
      classes: {
        root: "unstyled-button-root"
      },
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ React.createElement(
      Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { focusable: true })), {
        component,
        ref,
        type: component === "button" ? "button" : void 0
      }), others)
    );
  }
);
UnstyledButton.displayName = "@raikou/core/UnstyledButton";

// ../components/Accordion/src/AccordionChevron.tsx
import React2 from "react";
import { rem } from "@raikou/core";
function AccordionChevron(_a) {
  var _b = _a, {
    style,
    size = 16
  } = _b, others = __objRest(_b, [
    "style",
    "size"
  ]);
  return /* @__PURE__ */ React2.createElement(
    "svg",
    __spreadValues({
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: __spreadProps(__spreadValues({}, style), {
        width: rem(size),
        height: rem(size),
        display: "block"
      })
    }, others),
    /* @__PURE__ */ React2.createElement(
      "path",
      {
        d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    )
  );
}
AccordionChevron.displayName = "@raikou/core/AccordionChevron";

// ../components/_utils/create-safe-context/create-safe-context.tsx
import React3, { createContext, useContext } from "react";
function createSafeContext(errorMessage) {
  const Context = createContext(null);
  const useSafeContext = () => {
    const ctx = useContext(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ React3.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../components/_utils/create-optional-context/create-optional-context.tsx
import React4, { createContext as createContext2, useContext as useContext2 } from "react";

// ../components/_utils/use-hovered/use-hovered.ts
import { useState } from "react";

// ../components/_utils/create-use-external-events/create-use-external-events.ts
import { useEffect, useLayoutEffect } from "react";

// src/Carousel.tsx
import { clamp } from "@raikou/hooks";
import useEmblaCarousel from "embla-carousel-react";

// src/get-chevron-rotation.ts
function getChevronRotation({ dir, orientation, direction }) {
  if (direction === "previous") {
    return orientation === "horizontal" ? 90 * (dir === "ltr" ? 1 : -1) : -180;
  }
  return orientation === "horizontal" ? 90 * (dir === "ltr" ? -1 : 1) : 0;
}

// src/Carousel.context.ts
var [CarouselProvider, useCarouselContext] = createSafeContext(
  "Carousel component was not found in tree"
);

// src/CarouselSlide/CarouselSlide.tsx
import React5 from "react";
import {
  Box as Box2,
  factory,
  useProps as useProps2
} from "@raikou/core";
var defaultProps2 = {};
var CarouselSlide = factory((props, ref) => {
  const _a = useProps2("CarouselSlide", defaultProps2, props), { classNames, className, style, styles, unstyled, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars"]);
  const ctx = useCarouselContext();
  return /* @__PURE__ */ React5.createElement(
    Box2,
    __spreadValues(__spreadValues({
      ref,
      mod: { orientation: ctx.orientation }
    }, ctx.getStyles("slide", { className, style, classNames, styles })), others)
  );
});
CarouselSlide.displayName = "@raikou/core/CarouselSlide";

// src/CarouselVariables/CarouselVariables.tsx
import React6 from "react";
import {
  getSortedBreakpoints,
  useRaikouTheme,
  keys,
  getSpacing,
  filterProps,
  InlineStyles,
  getBaseValue
} from "@raikou/core";
function CarouselVariables({
  slideGap,
  slideSize,
  selector
}) {
  var _a;
  const theme = useRaikouTheme();
  const baseStyles = filterProps({
    "--carousel-slide-gap": getSpacing(getBaseValue(slideGap)),
    "--carousel-slide-size": (_a = getBaseValue(slideSize)) == null ? void 0 : _a.toString()
  });
  const queries = keys(theme.breakpoints).reduce((acc, breakpoint) => {
    if (!acc[breakpoint]) {
      acc[breakpoint] = {};
    }
    if (typeof slideGap === "object" && slideGap[breakpoint] !== void 0) {
      acc[breakpoint]["--carousel-slide-gap"] = getSpacing(
        slideGap[breakpoint]
      );
    }
    if (typeof slideSize === "object" && slideSize[breakpoint] !== void 0) {
      acc[breakpoint]["--carousel-slide-size"] = getSpacing(
        slideSize[breakpoint]
      );
    }
    return acc;
  }, {});
  const sortedBreakpoints = getSortedBreakpoints(keys(queries), theme).filter(
    (breakpoint) => keys(queries[breakpoint.value]).length > 0
  );
  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value]})`,
    styles: queries[breakpoint.value]
  }));
  return /* @__PURE__ */ React6.createElement(InlineStyles, { styles: baseStyles, media, selector });
}

// src/Carousel.tsx
var defaultProps3 = {
  controlSize: 26,
  controlsOffset: "sm",
  slideSize: "100%",
  slideGap: 0,
  orientation: "horizontal",
  align: "center",
  slidesToScroll: 1,
  includeGapInSize: true,
  draggable: true,
  dragFree: false,
  loop: false,
  speed: 10,
  initialSlide: 0,
  inViewThreshold: 0,
  withControls: true,
  withIndicators: false,
  skipSnaps: false,
  containScroll: "",
  withKeyboardEvents: true
};
var varsResolver = createVarsResolver(
  (_, { height, controlSize, controlsOffset }) => ({
    root: {
      "--carousel-height": rem2(height),
      "--carousel-control-size": rem2(controlSize),
      "--carousel-controls-offset": getSpacing2(controlsOffset)
    }
  })
);
var Carousel = factory2((_props, ref) => {
  const props = useProps3("Carousel", defaultProps3, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    getEmblaApi,
    onNextSlide,
    onPreviousSlide,
    onSlideChange,
    nextControlProps,
    previousControlProps,
    controlSize,
    controlsOffset,
    slideSize,
    slideGap,
    orientation,
    height,
    align,
    slidesToScroll,
    includeGapInSize,
    draggable,
    dragFree,
    loop,
    speed,
    initialSlide,
    inViewThreshold,
    withControls,
    withIndicators,
    plugins,
    nextControlIcon,
    previousControlIcon,
    skipSnaps,
    containScroll,
    withKeyboardEvents
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "children",
    "getEmblaApi",
    "onNextSlide",
    "onPreviousSlide",
    "onSlideChange",
    "nextControlProps",
    "previousControlProps",
    "controlSize",
    "controlsOffset",
    "slideSize",
    "slideGap",
    "orientation",
    "height",
    "align",
    "slidesToScroll",
    "includeGapInSize",
    "draggable",
    "dragFree",
    "loop",
    "speed",
    "initialSlide",
    "inViewThreshold",
    "withControls",
    "withIndicators",
    "plugins",
    "nextControlIcon",
    "previousControlIcon",
    "skipSnaps",
    "containScroll",
    "withKeyboardEvents"
  ]);
  const getStyles = useStyles2({
    name: "Carousel",
    classes: {
      root: "carousel-root",
      viewport: "carousel-viewport",
      container: "carousel-container",
      controls: "carousel-controls",
      control: "carousel-control",
      indicators: "carousel-indicators",
      indicator: "carousel-indicator",
      slide: "carousel-slide"
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
  const responsiveClassName = useRandomClassName();
  const { dir } = useDirection();
  const [emblaRefElement, embla] = useEmblaCarousel(
    {
      axis: orientation === "horizontal" ? "x" : "y",
      direction: orientation === "horizontal" ? dir : void 0,
      startIndex: initialSlide,
      loop,
      align,
      slidesToScroll,
      draggable,
      dragFree,
      speed,
      inViewThreshold,
      skipSnaps,
      containScroll
    },
    plugins
  );
  const [selected, setSelected] = useState2(0);
  const [slidesCount, setSlidesCount] = useState2(0);
  const handleScroll = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );
  const handleSelect = useCallback(() => {
    if (!embla)
      return;
    const slide = embla.selectedScrollSnap();
    setSelected(slide);
    onSlideChange == null ? void 0 : onSlideChange(slide);
  }, [embla, setSelected]);
  const handlePrevious = useCallback(() => {
    embla == null ? void 0 : embla.scrollPrev();
    onPreviousSlide == null ? void 0 : onPreviousSlide();
  }, [embla]);
  const handleNext = useCallback(() => {
    embla == null ? void 0 : embla.scrollNext();
    onNextSlide == null ? void 0 : onNextSlide();
  }, [embla]);
  const handleKeydown = useCallback(
    (event) => {
      if (withKeyboardEvents) {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          handleNext();
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          handlePrevious();
        }
      }
    },
    [embla]
  );
  useEffect2(() => {
    if (embla) {
      getEmblaApi == null ? void 0 : getEmblaApi(embla);
      handleSelect();
      setSlidesCount(embla.scrollSnapList().length);
      embla.on("select", handleSelect);
      return () => {
        embla.off("select", handleSelect);
      };
    }
    return void 0;
  }, [embla, slidesToScroll]);
  useEffect2(() => {
    if (embla) {
      embla.reInit();
      setSlidesCount(embla.scrollSnapList().length);
      setSelected(
        (currentSelected) => clamp(currentSelected, 0, Children.toArray(children).length - 1)
      );
    }
  }, [Children.toArray(children).length, slidesToScroll]);
  const canScrollPrev = (embla == null ? void 0 : embla.canScrollPrev()) || false;
  const canScrollNext = (embla == null ? void 0 : embla.canScrollNext()) || false;
  const indicators = Array(slidesCount).fill(0).map((_, index) => /* @__PURE__ */ React7.createElement(
    UnstyledButton,
    __spreadProps(__spreadValues({}, getStyles("indicator")), {
      key: index,
      "data-active": index === selected || void 0,
      "aria-hidden": true,
      tabIndex: -1,
      onClick: () => handleScroll(index)
    })
  ));
  return /* @__PURE__ */ React7.createElement(CarouselProvider, { value: { getStyles, orientation } }, /* @__PURE__ */ React7.createElement(CarouselVariables, __spreadProps(__spreadValues({}, props), { selector: `.${responsiveClassName}` })), /* @__PURE__ */ React7.createElement(
    Box3,
    __spreadProps(__spreadValues(__spreadValues({
      ref
    }, getStyles("root", { className: responsiveClassName })), others), {
      mod: { orientation, "include-gap-in-size": includeGapInSize },
      onKeyDownCapture: handleKeydown
    }),
    /* @__PURE__ */ React7.createElement("div", __spreadProps(__spreadValues({}, getStyles("viewport")), { ref: emblaRefElement }), /* @__PURE__ */ React7.createElement("div", __spreadProps(__spreadValues({}, getStyles("container")), { "data-orientation": orientation }), children)),
    withIndicators && /* @__PURE__ */ React7.createElement("div", __spreadValues({}, getStyles("indicators")), indicators),
    withControls && /* @__PURE__ */ React7.createElement("div", __spreadValues({}, getStyles("controls")), /* @__PURE__ */ React7.createElement(
      UnstyledButton,
      __spreadProps(__spreadValues(__spreadValues({}, previousControlProps), getStyles("control")), {
        onClick: handlePrevious,
        "data-inactive": !canScrollPrev || void 0,
        tabIndex: canScrollPrev ? 0 : -1
      }),
      typeof previousControlIcon !== "undefined" ? previousControlIcon : /* @__PURE__ */ React7.createElement(
        AccordionChevron,
        {
          style: {
            transform: `rotate(${getChevronRotation({
              dir,
              orientation,
              direction: "previous"
            })}deg)`
          }
        }
      )
    ), /* @__PURE__ */ React7.createElement(
      UnstyledButton,
      __spreadProps(__spreadValues(__spreadValues({
        onClick: handleNext
      }, getStyles("control")), nextControlProps), {
        "data-inactive": !canScrollNext || void 0,
        tabIndex: canScrollNext ? 0 : -1
      }),
      typeof nextControlIcon !== "undefined" ? nextControlIcon : /* @__PURE__ */ React7.createElement(
        AccordionChevron,
        {
          style: {
            transform: `rotate(${getChevronRotation({
              dir,
              orientation,
              direction: "next"
            })}deg)`
          }
        }
      )
    ))
  ));
});
Carousel.displayName = "@raikou/core/Carousel";
Carousel.Slide = CarouselSlide;

// src/use-animation-offset-effect.ts
import { useEffect as useEffect3 } from "react";
function useAnimationOffsetEffect(embla, transitionDuration) {
  useEffect3(() => {
    if (embla) {
      window.setTimeout(() => {
        embla.reInit();
      }, transitionDuration);
    }
  }, [embla, transitionDuration]);
}
export {
  Carousel,
  CarouselSlide,
  useAnimationOffsetEffect
};
