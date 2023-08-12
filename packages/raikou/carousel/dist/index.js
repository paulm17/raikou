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
  Carousel: () => Carousel,
  CarouselSlide: () => CarouselSlide,
  useAnimationOffsetEffect: () => useAnimationOffsetEffect
});
module.exports = __toCommonJS(src_exports);

// src/Carousel.tsx
var import_react8 = __toESM(require("react"));
var import_core5 = require("@raikou/core");

// ../components/UnstyledButton/src/UnstyledButton.tsx
var import_react = __toESM(require("react"));
var import_core = require("@raikou/core");
var defaultProps = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = (0, import_core.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core.useProps)("UnstyledButton", defaultProps, _props);
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
    const getStyles = (0, import_core.useStyles)({
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
    return /* @__PURE__ */ import_react.default.createElement(
      import_core.Box,
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
var import_react2 = __toESM(require("react"));
var import_core2 = require("@raikou/core");
function AccordionChevron(_a) {
  var _b = _a, {
    style,
    size = 16
  } = _b, others = __objRest(_b, [
    "style",
    "size"
  ]);
  return /* @__PURE__ */ import_react2.default.createElement(
    "svg",
    __spreadValues({
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: __spreadProps(__spreadValues({}, style), {
        width: (0, import_core2.rem)(size),
        height: (0, import_core2.rem)(size),
        display: "block"
      })
    }, others),
    /* @__PURE__ */ import_react2.default.createElement(
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
var import_react3 = __toESM(require("react"));
function createSafeContext(errorMessage) {
  const Context = (0, import_react3.createContext)(null);
  const useSafeContext = () => {
    const ctx = (0, import_react3.useContext)(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react3.default.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../components/_utils/create-optional-context/create-optional-context.tsx
var import_react4 = __toESM(require("react"));

// ../components/_utils/use-hovered/use-hovered.ts
var import_react5 = require("react");

// src/Carousel.tsx
var import_hooks = require("@raikou/hooks");
var import_embla_carousel_react = __toESM(require("embla-carousel-react"));

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
var import_react6 = __toESM(require("react"));
var import_core3 = require("@raikou/core");
var defaultProps2 = {};
var CarouselSlide = (0, import_core3.factory)((props, ref) => {
  const _a = (0, import_core3.useProps)("CarouselSlide", defaultProps2, props), { classNames, className, style, styles, unstyled, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars"]);
  const ctx = useCarouselContext();
  return /* @__PURE__ */ import_react6.default.createElement(
    import_core3.Box,
    __spreadValues(__spreadValues({
      ref,
      mod: { orientation: ctx.orientation }
    }, ctx.getStyles("slide", { className, style, classNames, styles })), others)
  );
});
CarouselSlide.displayName = "@raikou/core/CarouselSlide";

// src/CarouselVariables/CarouselVariables.tsx
var import_react7 = __toESM(require("react"));
var import_core4 = require("@raikou/core");
function CarouselVariables({
  slideGap,
  slideSize,
  selector
}) {
  var _a;
  const theme = (0, import_core4.useRaikouTheme)();
  const baseStyles = (0, import_core4.filterProps)({
    "--carousel-slide-gap": (0, import_core4.getSpacing)((0, import_core4.getBaseValue)(slideGap)),
    "--carousel-slide-size": (_a = (0, import_core4.getBaseValue)(slideSize)) == null ? void 0 : _a.toString()
  });
  const queries = (0, import_core4.keys)(theme.breakpoints).reduce((acc, breakpoint) => {
    if (!acc[breakpoint]) {
      acc[breakpoint] = {};
    }
    if (typeof slideGap === "object" && slideGap[breakpoint] !== void 0) {
      acc[breakpoint]["--carousel-slide-gap"] = (0, import_core4.getSpacing)(
        slideGap[breakpoint]
      );
    }
    if (typeof slideSize === "object" && slideSize[breakpoint] !== void 0) {
      acc[breakpoint]["--carousel-slide-size"] = (0, import_core4.getSpacing)(
        slideSize[breakpoint]
      );
    }
    return acc;
  }, {});
  const sortedBreakpoints = (0, import_core4.getSortedBreakpoints)((0, import_core4.keys)(queries), theme).filter(
    (breakpoint) => (0, import_core4.keys)(queries[breakpoint.value]).length > 0
  );
  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value]})`,
    styles: queries[breakpoint.value]
  }));
  return /* @__PURE__ */ import_react7.default.createElement(import_core4.InlineStyles, { styles: baseStyles, media, selector });
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
var varsResolver = (0, import_core5.createVarsResolver)(
  (_, { height, controlSize, controlsOffset }) => ({
    root: {
      "--carousel-height": (0, import_core5.rem)(height),
      "--carousel-control-size": (0, import_core5.rem)(controlSize),
      "--carousel-controls-offset": (0, import_core5.getSpacing)(controlsOffset)
    }
  })
);
var Carousel = (0, import_core5.factory)((_props, ref) => {
  const props = (0, import_core5.useProps)("Carousel", defaultProps3, _props);
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
  const getStyles = (0, import_core5.useStyles)({
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
  const responsiveClassName = (0, import_core5.useRandomClassName)();
  const { dir } = (0, import_core5.useDirection)();
  const [emblaRefElement, embla] = (0, import_embla_carousel_react.default)(
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
  const [selected, setSelected] = (0, import_react8.useState)(0);
  const [slidesCount, setSlidesCount] = (0, import_react8.useState)(0);
  const handleScroll = (0, import_react8.useCallback)(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );
  const handleSelect = (0, import_react8.useCallback)(() => {
    if (!embla)
      return;
    const slide = embla.selectedScrollSnap();
    setSelected(slide);
    onSlideChange == null ? void 0 : onSlideChange(slide);
  }, [embla, setSelected]);
  const handlePrevious = (0, import_react8.useCallback)(() => {
    embla == null ? void 0 : embla.scrollPrev();
    onPreviousSlide == null ? void 0 : onPreviousSlide();
  }, [embla]);
  const handleNext = (0, import_react8.useCallback)(() => {
    embla == null ? void 0 : embla.scrollNext();
    onNextSlide == null ? void 0 : onNextSlide();
  }, [embla]);
  const handleKeydown = (0, import_react8.useCallback)(
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
  (0, import_react8.useEffect)(() => {
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
  (0, import_react8.useEffect)(() => {
    if (embla) {
      embla.reInit();
      setSlidesCount(embla.scrollSnapList().length);
      setSelected(
        (currentSelected) => (0, import_hooks.clamp)(currentSelected, 0, import_react8.Children.toArray(children).length - 1)
      );
    }
  }, [import_react8.Children.toArray(children).length, slidesToScroll]);
  const canScrollPrev = (embla == null ? void 0 : embla.canScrollPrev()) || false;
  const canScrollNext = (embla == null ? void 0 : embla.canScrollNext()) || false;
  const indicators = Array(slidesCount).fill(0).map((_, index) => /* @__PURE__ */ import_react8.default.createElement(
    UnstyledButton,
    __spreadProps(__spreadValues({}, getStyles("indicator")), {
      key: index,
      "data-active": index === selected || void 0,
      "aria-hidden": true,
      tabIndex: -1,
      onClick: () => handleScroll(index)
    })
  ));
  return /* @__PURE__ */ import_react8.default.createElement(CarouselProvider, { value: { getStyles, orientation } }, /* @__PURE__ */ import_react8.default.createElement(CarouselVariables, __spreadProps(__spreadValues({}, props), { selector: `.${responsiveClassName}` })), /* @__PURE__ */ import_react8.default.createElement(
    import_core5.Box,
    __spreadProps(__spreadValues(__spreadValues({
      ref
    }, getStyles("root", { className: responsiveClassName })), others), {
      mod: { orientation, "include-gap-in-size": includeGapInSize },
      onKeyDownCapture: handleKeydown
    }),
    /* @__PURE__ */ import_react8.default.createElement("div", __spreadProps(__spreadValues({}, getStyles("viewport")), { ref: emblaRefElement }), /* @__PURE__ */ import_react8.default.createElement("div", __spreadProps(__spreadValues({}, getStyles("container")), { "data-orientation": orientation }), children)),
    withIndicators && /* @__PURE__ */ import_react8.default.createElement("div", __spreadValues({}, getStyles("indicators")), indicators),
    withControls && /* @__PURE__ */ import_react8.default.createElement("div", __spreadValues({}, getStyles("controls")), /* @__PURE__ */ import_react8.default.createElement(
      UnstyledButton,
      __spreadProps(__spreadValues(__spreadValues({}, previousControlProps), getStyles("control")), {
        onClick: handlePrevious,
        "data-inactive": !canScrollPrev || void 0,
        tabIndex: canScrollPrev ? 0 : -1
      }),
      typeof previousControlIcon !== "undefined" ? previousControlIcon : /* @__PURE__ */ import_react8.default.createElement(
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
    ), /* @__PURE__ */ import_react8.default.createElement(
      UnstyledButton,
      __spreadProps(__spreadValues(__spreadValues({
        onClick: handleNext
      }, getStyles("control")), nextControlProps), {
        "data-inactive": !canScrollNext || void 0,
        tabIndex: canScrollNext ? 0 : -1
      }),
      typeof nextControlIcon !== "undefined" ? nextControlIcon : /* @__PURE__ */ import_react8.default.createElement(
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
var import_react9 = require("react");
function useAnimationOffsetEffect(embla, transitionDuration) {
  (0, import_react9.useEffect)(() => {
    if (embla) {
      window.setTimeout(() => {
        embla.reInit();
      }, transitionDuration);
    }
  }, [embla, transitionDuration]);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Carousel,
  CarouselSlide,
  useAnimationOffsetEffect
});