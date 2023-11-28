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
  Pagination: () => Pagination,
  PaginationControl: () => PaginationControl,
  PaginationDots: () => PaginationDots,
  PaginationFirst: () => PaginationFirst,
  PaginationItems: () => PaginationItems,
  PaginationLast: () => PaginationLast,
  PaginationNext: () => PaginationNext,
  PaginationPrevious: () => PaginationPrevious,
  PaginationRoot: () => PaginationRoot
});
module.exports = __toCommonJS(src_exports);

// src/Pagination.tsx
var import_react14 = __toESM(require("react"));
var import_core7 = require("@raikou/core");

// ../Group/src/Group.tsx
var import_react2 = __toESM(require("react"));
var import_core = require("@raikou/core");

// ../Group/src/filter-falsy-children/filter-falsy-children.ts
var import_react = require("react");
function filterFalsyChildren(children) {
  return import_react.Children.toArray(children).filter(Boolean);
}

// ../Group/src/Group.tsx
var defaultProps = {
  preventGrowOverflow: true,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
};
var varsResolver = (0, import_core.createVarsResolver)(
  (_, { grow, preventGrowOverflow, gap, align, justify, wrap }, { childWidth }) => ({
    root: {
      "--group-child-width": grow && preventGrowOverflow ? childWidth : void 0,
      "--group-gap": (0, import_core.getSpacing)(gap),
      "--group-align": align,
      "--group-justify": justify,
      "--group-wrap": wrap
    }
  })
);
var Group = (0, import_core.factory)((_props, ref) => {
  const props = (0, import_core.useProps)("Group", defaultProps, _props);
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
  const resolvedGap = (0, import_core.getSpacing)(gap != null ? gap : "md");
  const childWidth = `calc(${100 / childrenCount}% - (${resolvedGap} - ${resolvedGap} / ${childrenCount}))`;
  const stylesCtx = { childWidth };
  const getStyles = (0, import_core.useStyles)({
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
  return /* @__PURE__ */ import_react2.default.createElement(
    import_core.Box,
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
var import_react7 = __toESM(require("react"));
var import_hooks = require("@raikou/hooks");
var import_core2 = require("@raikou/core");

// ../_utils/create-safe-context/create-safe-context.tsx
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

// ../_utils/create-optional-context/create-optional-context.tsx
var import_react4 = __toESM(require("react"));

// ../_utils/use-hovered/use-hovered.ts
var import_react5 = require("react");

// ../_utils/create-use-external-events/create-use-external-events.ts
var import_react6 = require("react");

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
var varsResolver2 = (0, import_core2.createVarsResolver)(
  (theme, { size, radius, color }) => ({
    root: {
      "--pagination-control-radius": radius === void 0 ? void 0 : (0, import_core2.getRadius)(radius),
      "--pagination-control-size": (0, import_core2.getSize)(size, "pagination-control-size"),
      "--pagination-control-fz": (0, import_core2.getFontSize)(size),
      "--pagination-active-bg": color ? (0, import_core2.getThemeColor)(color, theme) : void 0
    }
  })
);
var PaginationRoot = (0, import_core2.factory)((_props, ref) => {
  const props = (0, import_core2.useProps)("PaginationRoot", defaultProps2, _props);
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
  const getStyles = (0, import_core2.useStyles)({
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
  const { range, setPage, next, previous, active, first, last } = (0, import_hooks.usePagination)(
    {
      page: value,
      initialPage: defaultValue,
      onChange,
      total,
      siblings,
      boundaries
    }
  );
  const handleNextPage = (0, import_core2.createEventHandler)(onNextPage, next);
  const handlePreviousPage = (0, import_core2.createEventHandler)(onPreviousPage, previous);
  const handleFirstPage = (0, import_core2.createEventHandler)(onFirstPage, first);
  const handleLastPage = (0, import_core2.createEventHandler)(onLastPage, last);
  return /* @__PURE__ */ import_react7.default.createElement(
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
    /* @__PURE__ */ import_react7.default.createElement(import_core2.Box, __spreadValues(__spreadValues({ ref }, getStyles("root")), others))
  );
});
PaginationRoot.displayName = "@raikou/core/PaginationRoot";

// src/PaginationControl/PaginationControl.tsx
var import_react9 = __toESM(require("react"));
var import_core4 = require("@raikou/core");

// ../UnstyledButton/src/UnstyledButton.tsx
var import_react8 = __toESM(require("react"));
var import_core3 = require("@raikou/core");
var defaultProps3 = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = (0, import_core3.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core3.useProps)("UnstyledButton", defaultProps3, _props);
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
    const getStyles = (0, import_core3.useStyles)({
      name: __staticSelector,
      props,
      classes: {
        root: "unstyledButton-root"
      },
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ import_react8.default.createElement(
      import_core3.Box,
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
var PaginationControl = (0, import_core4.factory)(
  (_props, ref) => {
    const props = (0, import_core4.useProps)("PaginationControl", defaultProps4, _props);
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
    return /* @__PURE__ */ import_react9.default.createElement(
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
var import_react11 = __toESM(require("react"));
var import_core5 = require("@raikou/core");

// src/Pagination.icons.tsx
var import_react10 = __toESM(require("react"));
function PaginationIcon(_a) {
  var _b = _a, { style, children, path } = _b, others = __objRest(_b, ["style", "children", "path"]);
  return /* @__PURE__ */ import_react10.default.createElement(
    "svg",
    __spreadValues({
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      style: __spreadValues({
        width: "calc(var(--pagination-control-size) / 1.8)",
        height: "calc(var(--pagination-control-size) / 1.8)"
      }, style)
    }, others),
    /* @__PURE__ */ import_react10.default.createElement("path", { d: path, fill: "currentColor" })
  );
}
var PaginationNextIcon = (props) => /* @__PURE__ */ import_react10.default.createElement(
  PaginationIcon,
  __spreadProps(__spreadValues({}, props), {
    path: "M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z"
  })
);
var PaginationPreviousIcon = (props) => /* @__PURE__ */ import_react10.default.createElement(
  PaginationIcon,
  __spreadProps(__spreadValues({}, props), {
    path: "M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z"
  })
);
var PaginationFirstIcon = (props) => /* @__PURE__ */ import_react10.default.createElement(
  PaginationIcon,
  __spreadProps(__spreadValues({}, props), {
    path: "M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"
  })
);
var PaginationLastIcon = (props) => /* @__PURE__ */ import_react10.default.createElement(
  PaginationIcon,
  __spreadProps(__spreadValues({}, props), {
    path: "M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
  })
);
var PaginationDotsIcon = (props) => /* @__PURE__ */ import_react10.default.createElement(
  PaginationIcon,
  __spreadProps(__spreadValues({}, props), {
    path: "M2 8c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333C2.6 9.333 2 8.733 2 8zm9.333 0c0-.733.6-1.333 1.334-1.333C13.4 6.667 14 7.267 14 8s-.6 1.333-1.333 1.333c-.734 0-1.334-.6-1.334-1.333zM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8z"
  })
);

// src/PaginationDots/PaginationDots.tsx
var defaultProps5 = {
  icon: PaginationDotsIcon
};
var PaginationDots = (0, import_core5.factory)((_props, ref) => {
  const props = (0, import_core5.useProps)("PaginationDots", defaultProps5, _props);
  const _a = props, { classNames, className, style, styles, vars, icon } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars", "icon"]);
  const ctx = usePaginationContext();
  const Icon = icon;
  return /* @__PURE__ */ import_react11.default.createElement(
    import_core5.Box,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("dots", { className, style, styles, classNames })), others),
    /* @__PURE__ */ import_react11.default.createElement(
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
var import_react12 = __toESM(require("react"));
var import_core6 = require("@raikou/core");
function createEdgeComponent({
  icon,
  name,
  action,
  type
}) {
  const defaultProps7 = { icon };
  const Component = (0, import_react12.forwardRef)(
    (props, ref) => {
      const _a = (0, import_core6.useProps)(name, defaultProps7, props), { icon: _icon } = _a, others = __objRest(_a, ["icon"]);
      const Icon = _icon;
      const ctx = usePaginationContext();
      const disabled = type === "next" ? ctx.active === ctx.total : ctx.active === 1;
      return /* @__PURE__ */ import_react12.default.createElement(
        PaginationControl,
        __spreadValues({
          disabled: ctx.disabled || disabled,
          ref,
          onClick: ctx[action],
          withPadding: false
        }, others),
        /* @__PURE__ */ import_react12.default.createElement(
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
  return (0, import_core6.createPolymorphicComponent)(Component);
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
var import_react13 = __toESM(require("react"));
function PaginationItems({ dotsIcon }) {
  const ctx = usePaginationContext();
  const items = ctx.range.map((page, index) => {
    var _a;
    if (page === "dots") {
      return /* @__PURE__ */ import_react13.default.createElement(PaginationDots, { icon: dotsIcon, key: index });
    }
    return /* @__PURE__ */ import_react13.default.createElement(
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
  return /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, items);
}
PaginationItems.displayName = "@raikou/core/PaginationItems";

// src/Pagination.tsx
var defaultProps6 = {
  withControls: true,
  siblings: 1,
  boundaries: 1,
  gap: 8
};
var Pagination = (0, import_core7.factory)((_props, ref) => {
  const props = (0, import_core7.useProps)("Pagination", defaultProps6, _props);
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
  return /* @__PURE__ */ import_react14.default.createElement(PaginationRoot, __spreadValues({ ref, total }, others), /* @__PURE__ */ import_react14.default.createElement(Group, { gap }, withEdges && /* @__PURE__ */ import_react14.default.createElement(PaginationFirst, __spreadValues({ icon: firstIcon }, getControlProps == null ? void 0 : getControlProps("first"))), withControls && /* @__PURE__ */ import_react14.default.createElement(
    PaginationPrevious,
    __spreadValues({
      icon: previousIcon
    }, getControlProps == null ? void 0 : getControlProps("previous"))
  ), /* @__PURE__ */ import_react14.default.createElement(PaginationItems, { dotsIcon }), withControls && /* @__PURE__ */ import_react14.default.createElement(PaginationNext, __spreadValues({ icon: nextIcon }, getControlProps == null ? void 0 : getControlProps("next"))), withEdges && /* @__PURE__ */ import_react14.default.createElement(PaginationLast, __spreadValues({ icon: lastIcon }, getControlProps == null ? void 0 : getControlProps("last")))));
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Pagination,
  PaginationControl,
  PaginationDots,
  PaginationFirst,
  PaginationItems,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
  PaginationRoot
});
