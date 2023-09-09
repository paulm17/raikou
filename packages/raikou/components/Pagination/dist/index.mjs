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

// src/Pagination.tsx
import React11 from "react";
import { factory as factory5, useProps as useProps7 } from "@raikou/core";

// ../Group/src/Group.tsx
import React from "react";
import {
  Box,
  factory,
  useProps,
  useStyles,
  getSpacing,
  createVarsResolver
} from "@raikou/core";

// ../Group/src/filter-falsy-children/filter-falsy-children.ts
import { Children } from "react";
function filterFalsyChildren(children) {
  return Children.toArray(children).filter(Boolean);
}

// ../Group/src/Group.tsx
var defaultProps = {
  justify: "flex-start",
  align: "center",
  gap: "md",
  preventGrowOverflow: true
};
var varsResolver = createVarsResolver(
  (_, { grow, preventGrowOverflow, gap, align, justify, wrap }, { childWidth }) => ({
    root: {
      "--group-child-width": grow && preventGrowOverflow ? childWidth : void 0,
      "--group-gap": getSpacing(gap),
      "--group-align": align,
      "--group-justify": justify,
      "--group-wrap": wrap
    }
  })
);
var Group = factory((_props, ref) => {
  const props = useProps("Group", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    children,
    gap,
    align,
    justify,
    wrap,
    grow,
    preventGrowOverflow,
    vars,
    variant,
    __size
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "children",
    "gap",
    "align",
    "justify",
    "wrap",
    "grow",
    "preventGrowOverflow",
    "vars",
    "variant",
    "__size"
  ]);
  const filteredChildren = filterFalsyChildren(children);
  const childrenCount = filteredChildren.length;
  const childWidth = `calc(${100 / childrenCount}% - (${getSpacing(
    gap
  )} - ${getSpacing(gap)} / ${childrenCount}))`;
  const stylesCtx = { childWidth };
  const getStyles = useStyles({
    name: "Group",
    props,
    stylesCtx,
    className,
    style,
    classes: { root: "group-root" },
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React.createElement(
    Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      ref,
      variant,
      mod: { grow },
      size: __size
    }), others),
    filteredChildren
  );
});
Group.displayName = "@raikou/core/Group";

// src/PaginationRoot/PaginationRoot.tsx
import React4 from "react";
import { usePagination } from "@raikou/hooks";
import {
  Box as Box2,
  factory as factory2,
  useProps as useProps2,
  useStyles as useStyles2,
  createVarsResolver as createVarsResolver2,
  createEventHandler,
  getRadius,
  getSize,
  getFontSize,
  getThemeColor
} from "@raikou/core";

// ../_utils/create-safe-context/create-safe-context.tsx
import React2, { createContext, useContext } from "react";
function createSafeContext(errorMessage) {
  const Context = createContext(null);
  const useSafeContext = () => {
    const ctx = useContext(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ React2.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../_utils/create-optional-context/create-optional-context.tsx
import React3, { createContext as createContext2, useContext as useContext2 } from "react";

// ../_utils/use-hovered/use-hovered.ts
import { useState } from "react";

// ../_utils/create-use-external-events/create-use-external-events.ts
import { useEffect, useLayoutEffect } from "react";

// src/Pagination.context.ts
var [PaginationProvider, usePaginationContext] = createSafeContext(
  "Pagination.Root component was not found in tree"
);

// src/PaginationRoot/PaginationRoot.tsx
var defaultProps2 = {
  siblings: 1,
  boundaries: 1,
  size: "md"
};
var varsResolver2 = createVarsResolver2(
  (theme, { size, radius, color }) => ({
    root: {
      "--pagination-control-radius": getRadius(radius),
      "--pagination-control-size": getSize(size, "pagination-control-size"),
      "--pagination-control-fz": getFontSize(size),
      "--pagination-active-bg": getThemeColor(color, theme)
    }
  })
);
var PaginationRoot = factory2((_props, ref) => {
  const props = useProps2("PaginationRoot", defaultProps2, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    total,
    value,
    defaultValue,
    onChange,
    disabled,
    siblings,
    boundaries,
    color,
    radius,
    onNextPage,
    onPreviousPage,
    onFirstPage,
    onLastPage,
    getItemProps
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "total",
    "value",
    "defaultValue",
    "onChange",
    "disabled",
    "siblings",
    "boundaries",
    "color",
    "radius",
    "onNextPage",
    "onPreviousPage",
    "onFirstPage",
    "onLastPage",
    "getItemProps"
  ]);
  const getStyles = useStyles2({
    name: "Pagination",
    classes: {
      root: "pagination-root",
      control: "pagination-control",
      dots: "pagination-dots"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver2
  });
  const { range, setPage, next, previous, active, first, last } = usePagination(
    {
      page: value,
      initialPage: defaultValue,
      onChange,
      total,
      siblings,
      boundaries
    }
  );
  const handleNextPage = createEventHandler(onNextPage, next);
  const handlePreviousPage = createEventHandler(onPreviousPage, previous);
  const handleFirstPage = createEventHandler(onFirstPage, first);
  const handleLastPage = createEventHandler(onLastPage, last);
  return /* @__PURE__ */ React4.createElement(
    PaginationProvider,
    {
      value: {
        total,
        range,
        active,
        disabled,
        getItemProps,
        onChange: setPage,
        onNext: handleNextPage,
        onPrevious: handlePreviousPage,
        onFirst: handleFirstPage,
        onLast: handleLastPage,
        getStyles
      }
    },
    /* @__PURE__ */ React4.createElement(Box2, __spreadValues(__spreadValues({ ref }, getStyles("root")), others))
  );
});
PaginationRoot.displayName = "@raikou/core/PaginationRoot";

// src/PaginationControl/PaginationControl.tsx
import React6 from "react";
import {
  factory as factory3,
  useProps as useProps4
} from "@raikou/core";

// ../UnstyledButton/src/UnstyledButton.tsx
import React5 from "react";
import {
  Box as Box3,
  useProps as useProps3,
  useStyles as useStyles3,
  polymorphicFactory
} from "@raikou/core";
var defaultProps3 = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = polymorphicFactory(
  (_props, ref) => {
    const props = useProps3("UnstyledButton", defaultProps3, _props);
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
    const getStyles = useStyles3({
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
    return /* @__PURE__ */ React5.createElement(
      Box3,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { focusable: true })), {
        component,
        ref,
        type: component === "button" ? "button" : void 0
      }), others)
    );
  }
);
UnstyledButton.displayName = "@raikou/core/UnstyledButton";

// src/PaginationControl/PaginationControl.tsx
var defaultProps4 = {
  withPadding: true
};
var PaginationControl = factory3(
  (_props, ref) => {
    const props = useProps4("PaginationControl", defaultProps4, _props);
    const _a = props, {
      classNames,
      className,
      style,
      styles,
      vars,
      active,
      disabled,
      withPadding
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "vars",
      "active",
      "disabled",
      "withPadding"
    ]);
    const ctx = usePaginationContext();
    const _disabled = disabled || ctx.disabled;
    return /* @__PURE__ */ React6.createElement(
      UnstyledButton,
      __spreadValues(__spreadValues({
        ref,
        disabled: _disabled,
        mod: { active, disabled: _disabled, "with-padding": withPadding }
      }, ctx.getStyles("control", {
        className,
        style,
        classNames,
        styles,
        active: !_disabled
      })), others)
    );
  }
);
PaginationControl.displayName = "@raikou/core/PaginationControl";

// src/PaginationDots/PaginationDots.tsx
import React8 from "react";
import {
  Box as Box4,
  factory as factory4,
  useProps as useProps5
} from "@raikou/core";

// src/Pagination.icons.tsx
import React7 from "react";
function PaginationIcon(_a) {
  var _b = _a, { style, children, path } = _b, others = __objRest(_b, ["style", "children", "path"]);
  return /* @__PURE__ */ React7.createElement(
    "svg",
    __spreadValues({
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      style: __spreadValues({
        width: "calc(var(--pagination-control-size) / 1.8)",
        height: "calc(var(--pagination-control-size) / 1.8)"
      }, style)
    }, others),
    /* @__PURE__ */ React7.createElement("path", { d: path, fill: "currentColor" })
  );
}
var PaginationNextIcon = (props) => /* @__PURE__ */ React7.createElement(
  PaginationIcon,
  __spreadProps(__spreadValues({}, props), {
    path: "M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z"
  })
);
var PaginationPreviousIcon = (props) => /* @__PURE__ */ React7.createElement(
  PaginationIcon,
  __spreadProps(__spreadValues({}, props), {
    path: "M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z"
  })
);
var PaginationFirstIcon = (props) => /* @__PURE__ */ React7.createElement(
  PaginationIcon,
  __spreadProps(__spreadValues({}, props), {
    path: "M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"
  })
);
var PaginationLastIcon = (props) => /* @__PURE__ */ React7.createElement(
  PaginationIcon,
  __spreadProps(__spreadValues({}, props), {
    path: "M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
  })
);
var PaginationDotsIcon = (props) => /* @__PURE__ */ React7.createElement(
  PaginationIcon,
  __spreadProps(__spreadValues({}, props), {
    path: "M2 8c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333C2.6 9.333 2 8.733 2 8zm9.333 0c0-.733.6-1.333 1.334-1.333C13.4 6.667 14 7.267 14 8s-.6 1.333-1.333 1.333c-.734 0-1.334-.6-1.334-1.333zM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8z"
  })
);

// src/PaginationDots/PaginationDots.tsx
var defaultProps5 = {
  icon: PaginationDotsIcon
};
var PaginationDots = factory4((_props, ref) => {
  const props = useProps5("PaginationDots", defaultProps5, _props);
  const _a = props, { classNames, className, style, styles, vars, icon } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars", "icon"]);
  const ctx = usePaginationContext();
  const Icon = icon;
  return /* @__PURE__ */ React8.createElement(
    Box4,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("dots", { className, style, styles, classNames })), others),
    /* @__PURE__ */ React8.createElement(
      Icon,
      {
        style: {
          width: "calc(var(--pagination-control-size) / 1.8)",
          height: "calc(var(--pagination-control-size) / 1.8)"
        }
      }
    )
  );
});
PaginationDots.displayName = "@raikou/core/PaginationDots";

// src/PaginationEdges/PaginationEdges.tsx
import React9, { forwardRef } from "react";
import { createPolymorphicComponent, useProps as useProps6 } from "@raikou/core";
function createEdgeComponent({
  icon,
  name,
  action,
  type
}) {
  const defaultProps7 = { icon };
  const Component = forwardRef(
    (props, ref) => {
      const _a = useProps6(name, defaultProps7, props), { icon: _icon } = _a, others = __objRest(_a, ["icon"]);
      const Icon = _icon;
      const ctx = usePaginationContext();
      const disabled = type === "next" ? ctx.active === ctx.total : ctx.active === 1;
      return /* @__PURE__ */ React9.createElement(
        PaginationControl,
        __spreadValues({
          disabled: ctx.disabled || disabled,
          ref,
          onClick: ctx[action],
          withPadding: false
        }, others),
        /* @__PURE__ */ React9.createElement(
          Icon,
          {
            style: {
              width: "calc(var(--pagination-control-size) / 1.8)",
              height: "calc(var(--pagination-control-size) / 1.8)"
            }
          }
        )
      );
    }
  );
  Component.displayName = `@raikou/core/${name}`;
  return createPolymorphicComponent(Component);
}
var PaginationNext = createEdgeComponent({
  icon: PaginationNextIcon,
  name: "PaginationNext",
  action: "onNext",
  type: "next"
});
var PaginationPrevious = createEdgeComponent({
  icon: PaginationPreviousIcon,
  name: "PaginationPrevious",
  action: "onPrevious",
  type: "previous"
});
var PaginationFirst = createEdgeComponent({
  icon: PaginationFirstIcon,
  name: "PaginationFirst",
  action: "onFirst",
  type: "previous"
});
var PaginationLast = createEdgeComponent({
  icon: PaginationLastIcon,
  name: "PaginationLast",
  action: "onLast",
  type: "next"
});

// src/PaginationItems/PaginationItems.tsx
import React10 from "react";
function PaginationItems({ dotsIcon }) {
  const ctx = usePaginationContext();
  const items = ctx.range.map((page, index) => {
    var _a;
    if (page === "dots") {
      return /* @__PURE__ */ React10.createElement(PaginationDots, { icon: dotsIcon, key: index });
    }
    return /* @__PURE__ */ React10.createElement(
      PaginationControl,
      __spreadValues({
        key: index,
        active: page === ctx.active,
        "aria-current": page === ctx.active ? "page" : void 0,
        onClick: () => ctx.onChange(page),
        disabled: ctx.disabled
      }, (_a = ctx.getItemProps) == null ? void 0 : _a.call(ctx, page)),
      page
    );
  });
  return /* @__PURE__ */ React10.createElement(React10.Fragment, null, items);
}
PaginationItems.displayName = "@raikou/core/PaginationItems";

// src/Pagination.tsx
var defaultProps6 = {
  withControls: true,
  siblings: 1,
  boundaries: 1,
  gap: 8
};
var Pagination = factory5((_props, ref) => {
  const props = useProps7("Pagination", defaultProps6, _props);
  const _a = props, {
    withEdges,
    withControls,
    getControlProps,
    nextIcon,
    previousIcon,
    lastIcon,
    firstIcon,
    dotsIcon,
    total,
    gap
  } = _a, others = __objRest(_a, [
    "withEdges",
    "withControls",
    "getControlProps",
    "nextIcon",
    "previousIcon",
    "lastIcon",
    "firstIcon",
    "dotsIcon",
    "total",
    "gap"
  ]);
  if (total <= 0) {
    return null;
  }
  return /* @__PURE__ */ React11.createElement(PaginationRoot, __spreadValues({ ref, total }, others), /* @__PURE__ */ React11.createElement(Group, { gap }, withEdges && /* @__PURE__ */ React11.createElement(PaginationFirst, __spreadValues({ icon: firstIcon }, getControlProps == null ? void 0 : getControlProps("first"))), withControls && /* @__PURE__ */ React11.createElement(
    PaginationPrevious,
    __spreadValues({
      icon: previousIcon
    }, getControlProps == null ? void 0 : getControlProps("previous"))
  ), /* @__PURE__ */ React11.createElement(PaginationItems, { dotsIcon }), withControls && /* @__PURE__ */ React11.createElement(PaginationNext, __spreadValues({ icon: nextIcon }, getControlProps == null ? void 0 : getControlProps("next"))), withEdges && /* @__PURE__ */ React11.createElement(PaginationLast, __spreadValues({ icon: lastIcon }, getControlProps == null ? void 0 : getControlProps("last")))));
});
Pagination.displayName = "@raikou/core/Pagination";
Pagination.Root = PaginationRoot;
Pagination.Control = PaginationControl;
Pagination.Dots = PaginationDots;
Pagination.First = PaginationFirst;
Pagination.Last = PaginationLast;
Pagination.Next = PaginationNext;
Pagination.Previous = PaginationPrevious;
Pagination.Items = PaginationItems;
export {
  Pagination,
  PaginationControl,
  PaginationDots,
  PaginationFirst,
  PaginationItems,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
  PaginationRoot
};
