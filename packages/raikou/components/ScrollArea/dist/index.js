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
  ScrollArea: () => ScrollArea,
  ScrollAreaAutosize: () => ScrollAreaAutosize
});
module.exports = __toCommonJS(src_exports);

// src/ScrollArea.tsx
var import_react17 = __toESM(require("react"));
var import_core4 = require("@raikou/core");

// src/ScrollAreaScrollbar/ScrollAreaScrollbar.tsx
var import_react12 = __toESM(require("react"));

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

// src/ScrollArea.context.ts
var [ScrollAreaProvider, useScrollAreaContext] = createSafeContext(
  "ScrollArea.Root component was not found in tree"
);

// src/ScrollAreaScrollbar/ScrollAreaScrollbarVisible.tsx
var import_react8 = __toESM(require("react"));
var import_core = require("@raikou/core");

// src/ScrollAreaScrollbar/ScrollbarX.tsx
var import_react6 = __toESM(require("react"));
var import_hooks3 = require("@raikou/hooks");

// src/ScrollAreaScrollbar/Scrollbar.tsx
var import_react5 = __toESM(require("react"));
var import_hooks2 = require("@raikou/hooks");

// src/use-resize-observer.ts
var import_hooks = require("@raikou/hooks");
function useResizeObserver(element, onResize) {
  const handleResize = (0, import_hooks.useCallbackRef)(onResize);
  (0, import_hooks.useIsomorphicEffect)(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
    return void 0;
  }, [element, handleResize]);
}

// src/ScrollAreaScrollbar/Scrollbar.context.ts
var [ScrollbarProvider, useScrollbarContext] = createSafeContext(
  "ScrollAreaScrollbar was not found in tree"
);

// src/utils/is-scrolling-within-scrollbar-bounds.ts
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}

// src/utils/get-thumb-ratio.tsx
function getThumbRatio(viewportSize, contentSize) {
  const ratio = viewportSize / contentSize;
  return Number.isNaN(ratio) ? 0 : ratio;
}

// src/utils/get-thumb-size.tsx
function getThumbSize(sizes) {
  const ratio = getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}

// src/utils/compose-event-handlers.ts
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return (event) => {
    originalEventHandler == null ? void 0 : originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      ourEventHandler == null ? void 0 : ourEventHandler(event);
    }
  };
}

// src/utils/to-int.ts
function toInt(value) {
  return value ? parseInt(value, 10) : 0;
}

// src/utils/linear-scale.ts
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1])
      return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}

// src/utils/get-thumb-offset-from-scroll.ts
function clamp(value, [min, max]) {
  return Math.min(max, Math.max(min, value));
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const scrollbar = sizes.scrollbar.size - scrollbarPadding;
  const maxScrollPos = sizes.content - sizes.viewport;
  const maxThumbPos = scrollbar - thumbSizePx;
  const scrollClampRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const scrollWithoutMomentum = clamp(scrollPos, scrollClampRange);
  const interpolate = linearScale([0, maxScrollPos], [0, maxThumbPos]);
  return interpolate(scrollWithoutMomentum);
}

// src/utils/get-scroll-position-from-pointer.ts
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const thumbCenter = thumbSizePx / 2;
  const offset = pointerOffset || thumbCenter;
  const thumbOffsetFromEnd = thumbSizePx - offset;
  const minPointerPos = sizes.scrollbar.paddingStart + offset;
  const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
  const maxScrollPos = sizes.content - sizes.viewport;
  const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const interpolate = linearScale([minPointerPos, maxPointerPos], scrollRange);
  return interpolate(pointerPos);
}

// src/utils/add-unlinked-scroll-listener.tsx
function addUnlinkedScrollListener(node, handler = () => {
}) {
  let prevPosition = { left: node.scrollLeft, top: node.scrollTop };
  let rAF = 0;
  (function loop() {
    const position = { left: node.scrollLeft, top: node.scrollTop };
    const isHorizontalScroll = prevPosition.left !== position.left;
    const isVerticalScroll = prevPosition.top !== position.top;
    if (isHorizontalScroll || isVerticalScroll)
      handler();
    prevPosition = position;
    rAF = window.requestAnimationFrame(loop);
  })();
  return () => window.cancelAnimationFrame(rAF);
}

// src/ScrollAreaScrollbar/Scrollbar.tsx
var Scrollbar = (0, import_react5.forwardRef)(
  (props, forwardedRef) => {
    const _a = props, {
      sizes,
      hasThumb,
      onThumbChange,
      onThumbPointerUp,
      onThumbPointerDown,
      onThumbPositionChange,
      onDragScroll,
      onWheelScroll,
      onResize
    } = _a, scrollbarProps = __objRest(_a, [
      "sizes",
      "hasThumb",
      "onThumbChange",
      "onThumbPointerUp",
      "onThumbPointerDown",
      "onThumbPositionChange",
      "onDragScroll",
      "onWheelScroll",
      "onResize"
    ]);
    const context = useScrollAreaContext();
    const [scrollbar, setScrollbar] = import_react5.default.useState(
      null
    );
    const composeRefs = (0, import_hooks2.useMergedRef)(
      forwardedRef,
      (node) => setScrollbar(node)
    );
    const rectRef = import_react5.default.useRef(null);
    const prevWebkitUserSelectRef = import_react5.default.useRef("");
    const { viewport } = context;
    const maxScrollPos = sizes.content - sizes.viewport;
    const handleWheelScroll = (0, import_hooks2.useCallbackRef)(onWheelScroll);
    const handleThumbPositionChange = (0, import_hooks2.useCallbackRef)(onThumbPositionChange);
    const handleResize = (0, import_hooks2.useDebounceCallback)(onResize, 10);
    const handleDragScroll = (event) => {
      if (rectRef.current) {
        const x = event.clientX - rectRef.current.left;
        const y = event.clientY - rectRef.current.top;
        onDragScroll({ x, y });
      }
    };
    (0, import_react5.useEffect)(() => {
      const handleWheel = (event) => {
        const element = event.target;
        const isScrollbarWheel = scrollbar == null ? void 0 : scrollbar.contains(element);
        if (isScrollbarWheel)
          handleWheelScroll(event, maxScrollPos);
      };
      document.addEventListener("wheel", handleWheel, { passive: false });
      return () => document.removeEventListener("wheel", handleWheel, {
        passive: false
      });
    }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]);
    (0, import_react5.useEffect)(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
    useResizeObserver(scrollbar, handleResize);
    useResizeObserver(context.content, handleResize);
    return /* @__PURE__ */ import_react5.default.createElement(
      ScrollbarProvider,
      {
        value: {
          scrollbar,
          hasThumb,
          onThumbChange: (0, import_hooks2.useCallbackRef)(onThumbChange),
          onThumbPointerUp: (0, import_hooks2.useCallbackRef)(onThumbPointerUp),
          onThumbPositionChange: handleThumbPositionChange,
          onThumbPointerDown: (0, import_hooks2.useCallbackRef)(onThumbPointerDown)
        }
      },
      /* @__PURE__ */ import_react5.default.createElement(
        "div",
        __spreadProps(__spreadValues({}, scrollbarProps), {
          ref: composeRefs,
          style: __spreadValues({ position: "absolute" }, scrollbarProps.style),
          onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
            const mainPointer = 0;
            if (event.button === mainPointer) {
              const element = event.target;
              element.setPointerCapture(event.pointerId);
              rectRef.current = scrollbar.getBoundingClientRect();
              prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
              document.body.style.webkitUserSelect = "none";
              handleDragScroll(event);
            }
          }),
          onPointerMove: composeEventHandlers(
            props.onPointerMove,
            handleDragScroll
          ),
          onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
            const element = event.target;
            if (element.hasPointerCapture(event.pointerId)) {
              element.releasePointerCapture(event.pointerId);
            }
            document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
            rectRef.current = null;
          })
        })
      )
    );
  }
);

// src/ScrollAreaScrollbar/ScrollbarX.tsx
var ScrollAreaScrollbarX = (0, import_react6.forwardRef)((props, forwardedRef) => {
  const _a = props, { sizes, onSizesChange, style } = _a, others = __objRest(_a, ["sizes", "onSizesChange", "style"]);
  const ctx = useScrollAreaContext();
  const [computedStyle, setComputedStyle] = (0, import_react6.useState)();
  const ref = (0, import_react6.useRef)(null);
  const composeRefs = (0, import_hooks3.useMergedRef)(forwardedRef, ref, ctx.onScrollbarXChange);
  (0, import_react6.useEffect)(() => {
    if (ref.current)
      setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ import_react6.default.createElement(
    Scrollbar,
    __spreadProps(__spreadValues({
      "data-orientation": "horizontal"
    }, others), {
      ref: composeRefs,
      sizes,
      style: __spreadProps(__spreadValues({}, style), {
        ["--sa-thumb-width"]: `${getThumbSize(sizes)}px`
      }),
      onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
      onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
      onWheelScroll: (event, maxScrollPos) => {
        if (ctx.viewport) {
          const scrollPos = ctx.viewport.scrollLeft + event.deltaX;
          props.onWheelScroll(scrollPos);
          if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
            event.preventDefault();
          }
        }
      },
      onResize: () => {
        if (ref.current && ctx.viewport && computedStyle) {
          onSizesChange({
            content: ctx.viewport.scrollWidth,
            viewport: ctx.viewport.offsetWidth,
            scrollbar: {
              size: ref.current.clientWidth,
              paddingStart: toInt(computedStyle.paddingLeft),
              paddingEnd: toInt(computedStyle.paddingRight)
            }
          });
        }
      }
    })
  );
});

// src/ScrollAreaScrollbar/ScrollbarY.tsx
var import_react7 = __toESM(require("react"));
var import_hooks4 = require("@raikou/hooks");
var ScrollAreaScrollbarY = (0, import_react7.forwardRef)((props, forwardedRef) => {
  const _a = props, { sizes, onSizesChange, style } = _a, others = __objRest(_a, ["sizes", "onSizesChange", "style"]);
  const context = useScrollAreaContext();
  const [computedStyle, setComputedStyle] = import_react7.default.useState();
  const ref = (0, import_react7.useRef)(null);
  const composeRefs = (0, import_hooks4.useMergedRef)(
    forwardedRef,
    ref,
    context.onScrollbarYChange
  );
  (0, import_react7.useEffect)(() => {
    if (ref.current)
      setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ import_react7.default.createElement(
    Scrollbar,
    __spreadProps(__spreadValues({}, others), {
      "data-orientation": "vertical",
      ref: composeRefs,
      sizes,
      style: __spreadValues({
        ["--sa-thumb-height"]: `${getThumbSize(sizes)}px`
      }, style),
      onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
      onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
      onWheelScroll: (event, maxScrollPos) => {
        if (context.viewport) {
          const scrollPos = context.viewport.scrollTop + event.deltaY;
          props.onWheelScroll(scrollPos);
          if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
            event.preventDefault();
          }
        }
      },
      onResize: () => {
        if (ref.current && context.viewport && computedStyle) {
          onSizesChange({
            content: context.viewport.scrollHeight,
            viewport: context.viewport.offsetHeight,
            scrollbar: {
              size: ref.current.clientHeight,
              paddingStart: toInt(computedStyle.paddingTop),
              paddingEnd: toInt(computedStyle.paddingBottom)
            }
          });
        }
      }
    })
  );
});

// src/ScrollAreaScrollbar/ScrollAreaScrollbarVisible.tsx
var ScrollAreaScrollbarVisible = (0, import_react8.forwardRef)((props, forwardedRef) => {
  const _a = props, { orientation = "vertical" } = _a, scrollbarProps = __objRest(_a, ["orientation"]);
  const { dir } = (0, import_core.useDirection)();
  const context = useScrollAreaContext();
  const thumbRef = (0, import_react8.useRef)(null);
  const pointerOffsetRef = (0, import_react8.useRef)(0);
  const [sizes, setSizes] = (0, import_react8.useState)({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  });
  const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
  const commonProps = __spreadProps(__spreadValues({}, scrollbarProps), {
    sizes,
    onSizesChange: setSizes,
    hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
    onThumbChange: (thumb) => {
      thumbRef.current = thumb;
    },
    onThumbPointerUp: () => {
      pointerOffsetRef.current = 0;
    },
    onThumbPointerDown: (pointerPos) => {
      pointerOffsetRef.current = pointerPos;
    }
  });
  const getScrollPosition = (pointerPos, direction) => getScrollPositionFromPointer(
    pointerPos,
    pointerOffsetRef.current,
    sizes,
    direction
  );
  if (orientation === "horizontal") {
    return /* @__PURE__ */ import_react8.default.createElement(
      ScrollAreaScrollbarX,
      __spreadProps(__spreadValues({}, commonProps), {
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollLeft;
            const offset = getThumbOffsetFromScroll(scrollPos, sizes, dir);
            thumbRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport)
            context.viewport.scrollLeft = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) {
            context.viewport.scrollLeft = getScrollPosition(pointerPos, dir);
          }
        }
      })
    );
  }
  if (orientation === "vertical") {
    return /* @__PURE__ */ import_react8.default.createElement(
      ScrollAreaScrollbarY,
      __spreadProps(__spreadValues({}, commonProps), {
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollTop;
            const offset = getThumbOffsetFromScroll(scrollPos, sizes);
            thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport)
            context.viewport.scrollTop = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport)
            context.viewport.scrollTop = getScrollPosition(pointerPos);
        }
      })
    );
  }
  return null;
});

// src/ScrollAreaScrollbar/ScrollAreaScrollbarHover.tsx
var import_react10 = __toESM(require("react"));

// src/ScrollAreaScrollbar/ScrollAreaScrollbarAuto.tsx
var import_react9 = __toESM(require("react"));
var import_hooks5 = require("@raikou/hooks");
var ScrollAreaScrollbarAuto = (0, import_react9.forwardRef)((props, ref) => {
  const context = useScrollAreaContext();
  const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
  const [visible, setVisible] = (0, import_react9.useState)(false);
  const isHorizontal = props.orientation === "horizontal";
  const handleResize = (0, import_hooks5.useDebounceCallback)(() => {
    if (context.viewport) {
      const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
      const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
      setVisible(isHorizontal ? isOverflowX : isOverflowY);
    }
  }, 10);
  useResizeObserver(context.viewport, handleResize);
  useResizeObserver(context.content, handleResize);
  if (forceMount || visible) {
    return /* @__PURE__ */ import_react9.default.createElement(
      ScrollAreaScrollbarVisible,
      __spreadProps(__spreadValues({
        "data-state": visible ? "visible" : "hidden"
      }, scrollbarProps), {
        ref
      })
    );
  }
  return null;
});

// src/ScrollAreaScrollbar/ScrollAreaScrollbarHover.tsx
var ScrollAreaScrollbarHover = (0, import_react10.forwardRef)(
  (props, ref) => {
    const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
    const context = useScrollAreaContext();
    const [visible, setVisible] = (0, import_react10.useState)(false);
    (0, import_react10.useEffect)(() => {
      const { scrollArea } = context;
      let hideTimer = 0;
      if (scrollArea) {
        const handlePointerEnter = () => {
          window.clearTimeout(hideTimer);
          setVisible(true);
        };
        const handlePointerLeave = () => {
          hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
        };
        scrollArea.addEventListener("pointerenter", handlePointerEnter);
        scrollArea.addEventListener("pointerleave", handlePointerLeave);
        return () => {
          window.clearTimeout(hideTimer);
          scrollArea.removeEventListener("pointerenter", handlePointerEnter);
          scrollArea.removeEventListener("pointerleave", handlePointerLeave);
        };
      }
      return void 0;
    }, [context.scrollArea, context.scrollHideDelay]);
    if (forceMount || visible) {
      return /* @__PURE__ */ import_react10.default.createElement(
        ScrollAreaScrollbarAuto,
        __spreadProps(__spreadValues({
          "data-state": visible ? "visible" : "hidden"
        }, scrollbarProps), {
          ref
        })
      );
    }
    return null;
  }
);

// src/ScrollAreaScrollbar/ScrollAreaScrollbarScroll.tsx
var import_react11 = __toESM(require("react"));
var import_hooks6 = require("@raikou/hooks");
var ScrollAreaScrollbarScroll = (0, import_react11.forwardRef)((props, red) => {
  const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
  const context = useScrollAreaContext();
  const isHorizontal = props.orientation === "horizontal";
  const [state, setState] = (0, import_react11.useState)("hidden");
  const debounceScrollEnd = (0, import_hooks6.useDebounceCallback)(() => setState("idle"), 100);
  (0, import_react11.useEffect)(() => {
    if (state === "idle") {
      const hideTimer = window.setTimeout(
        () => setState("hidden"),
        context.scrollHideDelay
      );
      return () => window.clearTimeout(hideTimer);
    }
    return void 0;
  }, [state, context.scrollHideDelay]);
  (0, import_react11.useEffect)(() => {
    const { viewport } = context;
    const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
    if (viewport) {
      let prevScrollPos = viewport[scrollDirection];
      const handleScroll = () => {
        const scrollPos = viewport[scrollDirection];
        const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
        if (hasScrollInDirectionChanged) {
          setState("scrolling");
          debounceScrollEnd();
        }
        prevScrollPos = scrollPos;
      };
      viewport.addEventListener("scroll", handleScroll);
      return () => viewport.removeEventListener("scroll", handleScroll);
    }
    return void 0;
  }, [context.viewport, isHorizontal, debounceScrollEnd]);
  if (forceMount || state !== "hidden") {
    return /* @__PURE__ */ import_react11.default.createElement(
      ScrollAreaScrollbarVisible,
      __spreadProps(__spreadValues({
        "data-state": state === "hidden" ? "hidden" : "visible"
      }, scrollbarProps), {
        ref: red,
        onPointerEnter: composeEventHandlers(
          props.onPointerEnter,
          () => setState("interacting")
        ),
        onPointerLeave: composeEventHandlers(
          props.onPointerLeave,
          () => setState("idle")
        )
      })
    );
  }
  return null;
});

// src/ScrollAreaScrollbar/ScrollAreaScrollbar.tsx
var ScrollAreaScrollbar = import_react12.default.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
    const context = useScrollAreaContext();
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === "horizontal";
    import_react12.default.useEffect(() => {
      isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
      return () => {
        isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
      };
    }, [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]);
    return context.type === "hover" ? /* @__PURE__ */ import_react12.default.createElement(ScrollAreaScrollbarHover, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef, forceMount })) : context.type === "scroll" ? /* @__PURE__ */ import_react12.default.createElement(ScrollAreaScrollbarScroll, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef, forceMount })) : context.type === "auto" ? /* @__PURE__ */ import_react12.default.createElement(ScrollAreaScrollbarAuto, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef, forceMount })) : context.type === "always" ? /* @__PURE__ */ import_react12.default.createElement(ScrollAreaScrollbarVisible, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef })) : null;
  }
);

// src/ScrollAreaCorner/ScrollAreaCorner.tsx
var import_react13 = __toESM(require("react"));
var Corner = import_react13.default.forwardRef(
  (props, ref) => {
    const _a = props, { style } = _a, others = __objRest(_a, ["style"]);
    const ctx = useScrollAreaContext();
    const [width, setWidth] = import_react13.default.useState(0);
    const [height, setHeight] = import_react13.default.useState(0);
    const hasSize = Boolean(width && height);
    useResizeObserver(ctx.scrollbarX, () => {
      var _a2;
      const h = ((_a2 = ctx.scrollbarX) == null ? void 0 : _a2.offsetHeight) || 0;
      ctx.onCornerHeightChange(h);
      setHeight(h);
    });
    useResizeObserver(ctx.scrollbarY, () => {
      var _a2;
      const w = ((_a2 = ctx.scrollbarY) == null ? void 0 : _a2.offsetWidth) || 0;
      ctx.onCornerWidthChange(w);
      setWidth(w);
    });
    return hasSize ? /* @__PURE__ */ import_react13.default.createElement("div", __spreadProps(__spreadValues({}, others), { ref, style: __spreadProps(__spreadValues({}, style), { width, height }) })) : null;
  }
);
var ScrollAreaCorner = import_react13.default.forwardRef((props, ref) => {
  const ctx = useScrollAreaContext();
  const hasBothScrollbarsVisible = Boolean(ctx.scrollbarX && ctx.scrollbarY);
  const hasCorner = ctx.type !== "scroll" && hasBothScrollbarsVisible;
  return hasCorner ? /* @__PURE__ */ import_react13.default.createElement(Corner, __spreadProps(__spreadValues({}, props), { ref })) : null;
});

// src/ScrollAreaRoot/ScrollAreaRoot.tsx
var import_react14 = __toESM(require("react"));
var import_hooks7 = require("@raikou/hooks");
var import_core2 = require("@raikou/core");
var defaultProps = {
  scrollHideDelay: 1e3,
  type: "hover"
};
var ScrollAreaRoot = (0, import_react14.forwardRef)(
  (_props, ref) => {
    const props = (0, import_core2.useProps)("ScrollAreaRoot", defaultProps, _props);
    const _a = props, { type, scrollHideDelay } = _a, others = __objRest(_a, ["type", "scrollHideDelay"]);
    const [scrollArea, setScrollArea] = (0, import_react14.useState)(null);
    const [viewport, setViewport] = (0, import_react14.useState)(null);
    const [content, setContent] = (0, import_react14.useState)(null);
    const [scrollbarX, setScrollbarX] = (0, import_react14.useState)(null);
    const [scrollbarY, setScrollbarY] = (0, import_react14.useState)(null);
    const [cornerWidth, setCornerWidth] = (0, import_react14.useState)(0);
    const [cornerHeight, setCornerHeight] = (0, import_react14.useState)(0);
    const [scrollbarXEnabled, setScrollbarXEnabled] = (0, import_react14.useState)(false);
    const [scrollbarYEnabled, setScrollbarYEnabled] = (0, import_react14.useState)(false);
    const rootRef = (0, import_hooks7.useMergedRef)(ref, (node) => setScrollArea(node));
    return /* @__PURE__ */ import_react14.default.createElement(
      ScrollAreaProvider,
      {
        value: {
          type,
          scrollHideDelay,
          scrollArea,
          viewport,
          onViewportChange: setViewport,
          content,
          onContentChange: setContent,
          scrollbarX,
          onScrollbarXChange: setScrollbarX,
          scrollbarXEnabled,
          onScrollbarXEnabledChange: setScrollbarXEnabled,
          scrollbarY,
          onScrollbarYChange: setScrollbarY,
          scrollbarYEnabled,
          onScrollbarYEnabledChange: setScrollbarYEnabled,
          onCornerWidthChange: setCornerWidth,
          onCornerHeightChange: setCornerHeight
        }
      },
      /* @__PURE__ */ import_react14.default.createElement(
        import_core2.Box,
        __spreadProps(__spreadValues({}, others), {
          ref: rootRef,
          __vars: {
            "--sa-corner-width": `${cornerWidth}px`,
            "--sa-corner-height": `${cornerHeight}px`
          }
        })
      )
    );
  }
);
ScrollAreaRoot.displayName = "@raikou/core/ScrollAreaRoot";

// src/ScrollAreaViewport/ScrollAreaViewport.tsx
var import_react15 = __toESM(require("react"));
var import_hooks8 = require("@raikou/hooks");
var import_core3 = require("@raikou/core");
var ScrollAreaViewport = (0, import_react15.forwardRef)((_a, ref) => {
  var _b = _a, { children, style } = _b, others = __objRest(_b, ["children", "style"]);
  const ctx = useScrollAreaContext();
  const rootRef = (0, import_hooks8.useMergedRef)(ref, ctx.onViewportChange);
  return /* @__PURE__ */ import_react15.default.createElement(
    import_core3.Box,
    __spreadProps(__spreadValues({}, others), {
      ref: rootRef,
      style: __spreadValues({
        overflowX: ctx.scrollbarXEnabled ? "scroll" : "hidden",
        overflowY: ctx.scrollbarYEnabled ? "scroll" : "hidden"
      }, style)
    }),
    /* @__PURE__ */ import_react15.default.createElement(
      "div",
      {
        style: { minWidth: "100%", display: "table" },
        ref: ctx.onContentChange
      },
      children
    )
  );
});
ScrollAreaViewport.displayName = "@raikou/core/ScrollAreaViewport";

// src/ScrollAreaThumb/ScrollAreaThumb.tsx
var import_react16 = __toESM(require("react"));
var import_hooks9 = require("@raikou/hooks");
var Thumb = (0, import_react16.forwardRef)(
  (props, forwardedRef) => {
    const _a = props, { style } = _a, others = __objRest(_a, ["style"]);
    const scrollAreaContext = useScrollAreaContext();
    const scrollbarContext = useScrollbarContext();
    const { onThumbPositionChange } = scrollbarContext;
    const composedRef = (0, import_hooks9.useMergedRef)(
      forwardedRef,
      (node) => scrollbarContext.onThumbChange(node)
    );
    const removeUnlinkedScrollListenerRef = (0, import_react16.useRef)();
    const debounceScrollEnd = (0, import_hooks9.useDebounceCallback)(() => {
      if (removeUnlinkedScrollListenerRef.current) {
        removeUnlinkedScrollListenerRef.current();
        removeUnlinkedScrollListenerRef.current = void 0;
      }
    }, 100);
    (0, import_react16.useEffect)(() => {
      const { viewport } = scrollAreaContext;
      if (viewport) {
        const handleScroll = () => {
          debounceScrollEnd();
          if (!removeUnlinkedScrollListenerRef.current) {
            const listener = addUnlinkedScrollListener(
              viewport,
              onThumbPositionChange
            );
            removeUnlinkedScrollListenerRef.current = listener;
            onThumbPositionChange();
          }
        };
        onThumbPositionChange();
        viewport.addEventListener("scroll", handleScroll);
        return () => viewport.removeEventListener("scroll", handleScroll);
      }
      return void 0;
    }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);
    return /* @__PURE__ */ import_react16.default.createElement(
      "div",
      __spreadProps(__spreadValues({
        "data-state": scrollbarContext.hasThumb ? "visible" : "hidden"
      }, others), {
        ref: composedRef,
        style: __spreadValues({
          width: "var(--sa-thumb-width)",
          height: "var(--sa-thumb-height)"
        }, style),
        onPointerDownCapture: composeEventHandlers(
          props.onPointerDownCapture,
          (event) => {
            const thumb = event.target;
            const thumbRect = thumb.getBoundingClientRect();
            const x = event.clientX - thumbRect.left;
            const y = event.clientY - thumbRect.top;
            scrollbarContext.onThumbPointerDown({ x, y });
          }
        ),
        onPointerUp: composeEventHandlers(
          props.onPointerUp,
          scrollbarContext.onThumbPointerUp
        )
      })
    );
  }
);
var ScrollAreaThumb = import_react16.default.forwardRef((props, forwardedRef) => {
  const _a = props, { forceMount } = _a, thumbProps = __objRest(_a, ["forceMount"]);
  const scrollbarContext = useScrollbarContext();
  if (forceMount || scrollbarContext.hasThumb) {
    return /* @__PURE__ */ import_react16.default.createElement(Thumb, __spreadValues({ ref: forwardedRef }, thumbProps));
  }
  return null;
});

// src/ScrollArea.tsx
var defaultProps2 = {
  scrollHideDelay: 1e3,
  type: "hover"
};
var varsResolver = (0, import_core4.createVarsResolver)(
  (_, { scrollbarSize }) => ({
    root: {
      "--scrollarea-scrollbar-size": (0, import_core4.rem)(scrollbarSize)
    }
  })
);
var ScrollArea = (0, import_core4.factory)((_props, ref) => {
  const props = (0, import_core4.useProps)("ScrollArea", defaultProps2, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    scrollbarSize,
    vars,
    type,
    scrollHideDelay,
    viewportProps,
    viewportRef,
    onScrollPositionChange,
    children,
    offsetScrollbars
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "scrollbarSize",
    "vars",
    "type",
    "scrollHideDelay",
    "viewportProps",
    "viewportRef",
    "onScrollPositionChange",
    "children",
    "offsetScrollbars"
  ]);
  const [scrollbarHovered, setScrollbarHovered] = (0, import_react17.useState)(false);
  const getStyles = (0, import_core4.useStyles)({
    name: "ScrollArea",
    props,
    classes: {
      root: "scrollArea-root",
      viewport: "scrollArea-viewport",
      viewportInner: "scrollArea-viewportInner",
      scrollbar: "scrollArea-scrollbar",
      thumb: "scrollArea-thumb",
      corner: "scrollArea-corner"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ import_react17.default.createElement(
    ScrollAreaRoot,
    __spreadValues(__spreadValues({
      type: type === "never" ? "always" : type,
      scrollHideDelay,
      ref
    }, getStyles("root")), others),
    /* @__PURE__ */ import_react17.default.createElement(
      ScrollAreaViewport,
      __spreadProps(__spreadValues(__spreadValues({}, viewportProps), getStyles("viewport")), {
        ref: viewportRef,
        "data-offset-scrollbars": offsetScrollbars || void 0,
        onScroll: typeof onScrollPositionChange === "function" ? ({ currentTarget }) => onScrollPositionChange({
          x: currentTarget.scrollLeft,
          y: currentTarget.scrollTop
        }) : void 0
      }),
      children
    ),
    /* @__PURE__ */ import_react17.default.createElement(
      ScrollAreaScrollbar,
      __spreadProps(__spreadValues({}, getStyles("scrollbar")), {
        orientation: "horizontal",
        "data-hidden": type === "never" || void 0,
        forceMount: true,
        onMouseEnter: () => setScrollbarHovered(true),
        onMouseLeave: () => setScrollbarHovered(false)
      }),
      /* @__PURE__ */ import_react17.default.createElement(ScrollAreaThumb, __spreadValues({}, getStyles("thumb")))
    ),
    /* @__PURE__ */ import_react17.default.createElement(
      ScrollAreaScrollbar,
      __spreadProps(__spreadValues({}, getStyles("scrollbar")), {
        orientation: "vertical",
        "data-hidden": type === "never" || void 0,
        forceMount: true,
        onMouseEnter: () => setScrollbarHovered(true),
        onMouseLeave: () => setScrollbarHovered(false)
      }),
      /* @__PURE__ */ import_react17.default.createElement(ScrollAreaThumb, __spreadValues({}, getStyles("thumb")))
    ),
    /* @__PURE__ */ import_react17.default.createElement(
      ScrollAreaCorner,
      __spreadProps(__spreadValues({}, getStyles("corner")), {
        "data-hovered": scrollbarHovered || void 0,
        "data-hidden": type === "never" || void 0
      })
    )
  );
});
ScrollArea.displayName = "@raikou/core/ScrollArea";
var ScrollAreaAutosize = (0, import_core4.factory)((props, ref) => {
  const _a = (0, import_core4.useProps)("ScrollAreaAutosize", defaultProps2, props), {
    children,
    classNames,
    styles,
    scrollbarSize,
    scrollHideDelay,
    type,
    dir,
    offsetScrollbars,
    viewportRef,
    onScrollPositionChange,
    unstyled,
    variant,
    viewportProps,
    style,
    vars
  } = _a, others = __objRest(_a, [
    "children",
    "classNames",
    "styles",
    "scrollbarSize",
    "scrollHideDelay",
    "type",
    "dir",
    "offsetScrollbars",
    "viewportRef",
    "onScrollPositionChange",
    "unstyled",
    "variant",
    "viewportProps",
    "style",
    "vars"
  ]);
  return /* @__PURE__ */ import_react17.default.createElement(import_core4.Box, __spreadProps(__spreadValues({}, others), { ref, style: [{ display: "flex" }, style] }), /* @__PURE__ */ import_react17.default.createElement(import_core4.Box, { style: { display: "flex", flexDirection: "column", flex: 1 } }, /* @__PURE__ */ import_react17.default.createElement(
    ScrollArea,
    {
      classNames,
      styles,
      scrollHideDelay,
      scrollbarSize,
      type,
      dir,
      offsetScrollbars,
      viewportRef,
      onScrollPositionChange,
      unstyled,
      variant,
      viewportProps,
      vars
    },
    children
  )));
});
ScrollAreaAutosize.displayName = "@raikou/core/ScrollAreaAutosize";
ScrollArea.Autosize = ScrollAreaAutosize;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ScrollArea,
  ScrollAreaAutosize
});
