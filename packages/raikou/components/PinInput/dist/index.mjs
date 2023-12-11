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

// src/PinInput.tsx
import React11, { useRef, useState as useState2, useEffect as useEffect2 } from "react";
import { useUncontrolled, useId as useId2 } from "@raikou/hooks";
import {
  createVarsResolver as createVarsResolver7,
  factory as factory7,
  getSize as getSize2,
  useProps as useProps9,
  useResolvedStylesApi,
  useStyles as useStyles8
} from "@raikou/core";

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

// css-module:./Group.module.css#css-module
var Group_module_default = { "root": "m-4081bf90" };

// ../Group/src/Group.tsx
var defaultProps = {
  preventGrowOverflow: true,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
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
  const resolvedGap = getSpacing(gap != null ? gap : "md");
  const childWidth = `calc(${100 / childrenCount}% - (${resolvedGap} - ${resolvedGap} / ${childrenCount}))`;
  const stylesCtx = { childWidth };
  const getStyles = useStyles({
    name: "Group",
    props,
    stylesCtx,
    className,
    style,
    classes: Group_module_default,
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
Group.classes = Group_module_default;

// ../Input/src/Input.tsx
import React9 from "react";
import {
  Box as Box7,
  polymorphicFactory,
  useProps as useProps7,
  useStyles as useStyles7,
  extractStyleProps,
  getSize,
  getFontSize as getFontSize5,
  getRadius,
  rem as rem4,
  createVarsResolver as createVarsResolver6
} from "@raikou/core";

// ../_utils/create-safe-context/create-safe-context.tsx
import React2, { createContext, useContext } from "react";

// ../_utils/create-optional-context/create-optional-context.tsx
import React3, { createContext as createContext2, useContext as useContext2 } from "react";
function createOptionalContext(initialValue = null) {
  const Context = createContext2(initialValue);
  const useOptionalContext = () => useContext2(Context);
  const Provider = ({ children, value }) => /* @__PURE__ */ React3.createElement(Context.Provider, { value }, children);
  return [Provider, useOptionalContext];
}

// ../_utils/use-hovered/use-hovered.ts
import { useState } from "react";

// ../_utils/create-use-external-events/create-use-external-events.ts
import { useEffect, useLayoutEffect } from "react";

// ../Input/src/InputWrapper.context.ts
var [InputWrapperProvider, useInputWrapperContext] = createOptionalContext({
  offsetBottom: false,
  offsetTop: false,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});

// ../Input/src/InputLabel/InputLabel.tsx
import React4 from "react";
import {
  Box as Box2,
  factory as factory2,
  useProps as useProps2,
  useStyles as useStyles2,
  getFontSize,
  createVarsResolver as createVarsResolver2
} from "@raikou/core";

// css-module:../Input.module.css#css-module
var Input_module_default = { "wrapper": "m-6c018570", "input": "m-8fb7ebe7", "section": "m-82577fc2", "placeholder": "m-88bacfd0", "root": "m-46b77525", "label": "m-8fdc1311", "required": "m-78a94662", "error": "m-8f816625", "description": "m-fe47ce59" };

// ../Input/src/InputLabel/InputLabel.tsx
var defaultProps2 = {
  labelElement: "label"
};
var varsResolver2 = createVarsResolver2((_, { size }) => ({
  label: {
    "--input-label-size": getFontSize(size),
    "--input-asterisk-color": void 0
  }
}));
var InputLabel = factory2((_props, ref) => {
  const props = useProps2("InputLabel", defaultProps2, _props);
  const _a = useProps2("InputLabel", defaultProps2, props), {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    labelElement,
    size,
    required,
    htmlFor,
    onMouseDown,
    children,
    __staticSelector,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "labelElement",
    "size",
    "required",
    "htmlFor",
    "onMouseDown",
    "children",
    "__staticSelector",
    "variant"
  ]);
  const _getStyles = useStyles2({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: Input_module_default,
    // classes: {
    //   label: "inputWrapper-label",
    //   required: "inputWrapper-required",
    // },
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "label",
    vars,
    varsResolver: varsResolver2
  });
  const ctx = useInputWrapperContext();
  const getStyles = (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
  return /* @__PURE__ */ React4.createElement(
    Box2,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("label")), {
      component: labelElement,
      variant,
      size,
      ref,
      htmlFor: labelElement === "label" ? htmlFor : void 0,
      mod: { required },
      onMouseDown: (event) => {
        onMouseDown == null ? void 0 : onMouseDown(event);
        if (!event.defaultPrevented && event.detail > 1) {
          event.preventDefault();
        }
      }
    }), others),
    children,
    required && /* @__PURE__ */ React4.createElement("span", __spreadProps(__spreadValues({}, getStyles("required")), { "aria-hidden": true }), " *")
  );
});
InputLabel.displayName = "@raikou/core/InputLabel";

// ../Input/src/InputError/InputError.tsx
import React5 from "react";
import {
  Box as Box3,
  factory as factory3,
  useProps as useProps3,
  useStyles as useStyles3,
  getFontSize as getFontSize2,
  rem,
  createVarsResolver as createVarsResolver3
} from "@raikou/core";
var defaultProps3 = {};
var varsResolver3 = createVarsResolver3((_, { size }) => ({
  error: {
    "--input-error-size": size === void 0 ? void 0 : `calc(${getFontSize2(size)} - ${rem(2)})`
  }
}));
var InputError = factory3((_props, ref) => {
  const props = useProps3("InputError", defaultProps3, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    __staticSelector,
    __inheritStyles = true,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "size",
    "__staticSelector",
    "__inheritStyles",
    "variant"
  ]);
  const _getStyles = useStyles3({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: Input_module_default,
    // classes: {
    //   error: "inputWrapper-error",
    // },
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "error",
    vars,
    varsResolver: varsResolver3
  });
  const ctx = useInputWrapperContext();
  const getStyles = __inheritStyles && (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
  return /* @__PURE__ */ React5.createElement(
    Box3,
    __spreadValues(__spreadValues({
      component: "p",
      ref,
      variant,
      size
    }, getStyles("error")), others)
  );
});
InputError.displayName = "@raikou/core/InputError";

// ../Input/src/InputDescription/InputDescription.tsx
import React6 from "react";
import {
  Box as Box4,
  factory as factory4,
  useProps as useProps4,
  useStyles as useStyles4,
  getFontSize as getFontSize3,
  rem as rem2,
  createVarsResolver as createVarsResolver4
} from "@raikou/core";
var defaultProps4 = {};
var varsResolver4 = createVarsResolver4(
  (_, { size }) => ({
    description: {
      "--input-description-size": size === void 0 ? void 0 : `calc(${getFontSize3(size)} - ${rem2(2)})`
    }
  })
);
var InputDescription = factory4(
  (_props, ref) => {
    const props = useProps4("InputDescription", defaultProps4, _props);
    const _a = useProps4("InputDescription", defaultProps4, props), {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      size,
      __staticSelector,
      __inheritStyles = true,
      variant
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "unstyled",
      "vars",
      "size",
      "__staticSelector",
      "__inheritStyles",
      "variant"
    ]);
    const ctx = useInputWrapperContext();
    const _getStyles = useStyles4({
      name: ["InputWrapper", __staticSelector],
      props,
      classes: Input_module_default,
      // classes: {
      //   description: "inputWrapper-description",
      // },
      className,
      style,
      classNames,
      styles,
      unstyled,
      rootSelector: "description",
      vars,
      varsResolver: varsResolver4
    });
    const getStyles = __inheritStyles && (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
    return /* @__PURE__ */ React6.createElement(
      Box4,
      __spreadValues(__spreadValues({
        component: "p",
        ref,
        variant,
        size
      }, getStyles("description")), others)
    );
  }
);
InputDescription.displayName = "@raikou/core/InputDescription";

// ../Input/src/InputPlaceholder/InputPlaceholder.tsx
import React7 from "react";
import {
  Box as Box5,
  factory as factory5,
  useProps as useProps5,
  useStyles as useStyles5
} from "@raikou/core";
var defaultProps5 = {};
var InputPlaceholder = factory5(
  (_props, ref) => {
    const props = useProps5("InputPlaceholder", defaultProps5, _props);
    const _a = useProps5("InputPlaceholder", defaultProps5, props), {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      __staticSelector,
      variant
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "unstyled",
      "vars",
      "__staticSelector",
      "variant"
    ]);
    const getStyles = useStyles5({
      name: ["InputPlaceholder", __staticSelector],
      props,
      classes: Input_module_default,
      // classes: {
      //   placeholder: "input-placeholder",
      // },
      className,
      style,
      classNames,
      styles,
      unstyled,
      rootSelector: "placeholder"
    });
    return /* @__PURE__ */ React7.createElement(
      Box5,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("placeholder")), {
        component: "span",
        variant,
        ref
      }), others)
    );
  }
);
InputPlaceholder.displayName = "@raikou/core/InputPlaceholder";

// ../Input/src/InputWrapper/InputWrapper.tsx
import React8 from "react";
import { useId } from "@raikou/hooks";
import {
  Box as Box6,
  factory as factory6,
  useProps as useProps6,
  useStyles as useStyles6,
  createVarsResolver as createVarsResolver5,
  getFontSize as getFontSize4,
  rem as rem3
} from "@raikou/core";

// ../Input/src/InputWrapper/get-input-offsets/get-input-offsets.ts
function getInputOffsets(inputWrapperOrder, { hasDescription, hasError }) {
  const inputIndex = inputWrapperOrder.findIndex((part) => part === "input");
  const aboveInput = inputWrapperOrder[inputIndex - 1];
  const belowInput = inputWrapperOrder[inputIndex + 1];
  const offsetTop = hasDescription && aboveInput === "description" || hasError && aboveInput === "error";
  const offsetBottom = hasDescription && belowInput === "description" || hasError && belowInput === "error";
  return { offsetBottom, offsetTop };
}

// ../Input/src/InputWrapper/InputWrapper.tsx
var defaultProps6 = {
  labelElement: "label",
  inputContainer: (children) => children,
  inputWrapperOrder: ["label", "description", "input", "error"]
};
var varsResolver5 = createVarsResolver5((_, { size }) => ({
  label: {
    "--input-label-size": getFontSize4(size),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": size === void 0 ? void 0 : `calc(${getFontSize4(size)} - ${rem3(2)})`
  },
  description: {
    "--input-description-size": size === void 0 ? void 0 : `calc(${getFontSize4(size)} - ${rem3(2)})`
  }
}));
var InputWrapper = factory6((_props, ref) => {
  const props = useProps6("InputWrapper", defaultProps6, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    variant,
    __staticSelector,
    inputContainer,
    inputWrapperOrder,
    label,
    error,
    description,
    labelProps,
    descriptionProps,
    errorProps,
    labelElement,
    children,
    withAsterisk,
    id,
    required,
    __stylesApiProps
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "size",
    "variant",
    "__staticSelector",
    "inputContainer",
    "inputWrapperOrder",
    "label",
    "error",
    "description",
    "labelProps",
    "descriptionProps",
    "errorProps",
    "labelElement",
    "children",
    "withAsterisk",
    "id",
    "required",
    "__stylesApiProps"
  ]);
  const getStyles = useStyles6({
    name: ["InputWrapper", __staticSelector],
    props: __stylesApiProps || props,
    classes: Input_module_default,
    // classes: {
    //   root: "inputWrapper-root",
    //   label: "inputWrapper-label",
    //   required: "inputWrapper-required",
    //   error: "inputWrapper-error",
    //   description: "inputWrapper-description",
    // },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver5
  });
  const sharedProps = {
    size,
    variant,
    __staticSelector
  };
  const idBase = useId(id);
  const isRequired = typeof withAsterisk === "boolean" ? withAsterisk : required;
  const errorId = (errorProps == null ? void 0 : errorProps.id) || `${idBase}-error`;
  const descriptionId = (descriptionProps == null ? void 0 : descriptionProps.id) || `${idBase}-description`;
  const inputId = idBase;
  const hasError = !!error && typeof error !== "boolean";
  const hasDescription = !!description;
  const _describedBy = `${hasError ? errorId : ""} ${hasDescription ? descriptionId : ""}`;
  const describedBy = _describedBy.trim().length > 0 ? _describedBy.trim() : void 0;
  const labelId = (labelProps == null ? void 0 : labelProps.id) || `${idBase}-label`;
  const _label = label && /* @__PURE__ */ React8.createElement(
    InputLabel,
    __spreadValues(__spreadValues({
      key: "label",
      labelElement,
      id: labelId,
      htmlFor: inputId,
      required: isRequired
    }, sharedProps), labelProps),
    label
  );
  const _description = hasDescription && /* @__PURE__ */ React8.createElement(
    InputDescription,
    __spreadProps(__spreadValues(__spreadValues({
      key: "description"
    }, descriptionProps), sharedProps), {
      size: (descriptionProps == null ? void 0 : descriptionProps.size) || sharedProps.size,
      id: (descriptionProps == null ? void 0 : descriptionProps.id) || descriptionId
    }),
    description
  );
  const _input = /* @__PURE__ */ React8.createElement(React8.Fragment, { key: "input" }, inputContainer(children));
  const _error = hasError && /* @__PURE__ */ React8.createElement(
    InputError,
    __spreadProps(__spreadValues(__spreadValues({}, errorProps), sharedProps), {
      size: (errorProps == null ? void 0 : errorProps.size) || sharedProps.size,
      key: "error",
      id: (errorProps == null ? void 0 : errorProps.id) || errorId
    }),
    error
  );
  const content = inputWrapperOrder.map((part) => {
    switch (part) {
      case "label":
        return _label;
      case "input":
        return _input;
      case "description":
        return _description;
      case "error":
        return _error;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ React8.createElement(
    InputWrapperProvider,
    {
      value: __spreadValues({
        getStyles,
        describedBy,
        inputId,
        labelId
      }, getInputOffsets(inputWrapperOrder, { hasDescription, hasError }))
    },
    /* @__PURE__ */ React8.createElement(
      Box6,
      __spreadValues(__spreadValues({
        ref,
        variant,
        size
      }, getStyles("root")), others),
      content
    )
  );
});
InputWrapper.displayName = "@raikou/core/InputWrapper";

// css-module:./Input.module.css#css-module
var Input_module_default2 = { "wrapper": "m-6c018570", "input": "m-8fb7ebe7", "section": "m-82577fc2", "placeholder": "m-88bacfd0", "root": "m-46b77525", "label": "m-8fdc1311", "required": "m-78a94662", "error": "m-8f816625", "description": "m-fe47ce59" };

// ../Input/src/Input.tsx
var defaultProps7 = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: true,
  withErrorStyles: true
};
var varsResolver6 = createVarsResolver6((_, props, ctx) => ({
  wrapper: {
    "--input-margin-top": ctx.offsetTop ? "calc(var(--raikou-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": ctx.offsetBottom ? "calc(var(--raikou-spacing-xs) / 2)" : void 0,
    "--input-height": getSize(props.size, "input-height"),
    "--input-fz": getFontSize5(props.size),
    "--input-radius": props.radius === void 0 ? void 0 : getRadius(props.radius),
    "--input-left-section-width": props.leftSectionWidth !== void 0 ? rem4(props.leftSectionWidth) : void 0,
    "--input-right-section-width": props.rightSectionWidth !== void 0 ? rem4(props.rightSectionWidth) : void 0,
    "--input-padding-y": props.multiline ? getSize(props.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": props.leftSectionPointerEvents,
    "--input-right-section-pointer-events": props.rightSectionPointerEvents
  }
}));
var Input = polymorphicFactory((_props, ref) => {
  const props = useProps7("Input", defaultProps7, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    required,
    __staticSelector,
    __stylesApiProps,
    size,
    wrapperProps,
    error,
    disabled,
    leftSection,
    leftSectionProps,
    leftSectionWidth,
    rightSection,
    rightSectionProps,
    rightSectionWidth,
    rightSectionPointerEvents,
    leftSectionPointerEvents,
    variant,
    vars,
    pointer,
    multiline,
    radius,
    id,
    withAria,
    withErrorStyles
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "required",
    "__staticSelector",
    "__stylesApiProps",
    "size",
    "wrapperProps",
    "error",
    "disabled",
    "leftSection",
    "leftSectionProps",
    "leftSectionWidth",
    "rightSection",
    "rightSectionProps",
    "rightSectionWidth",
    "rightSectionPointerEvents",
    "leftSectionPointerEvents",
    "variant",
    "vars",
    "pointer",
    "multiline",
    "radius",
    "id",
    "withAria",
    "withErrorStyles"
  ]);
  const { styleProps, rest } = extractStyleProps(others);
  const ctx = useInputWrapperContext();
  const stylesCtx = {
    offsetBottom: ctx == null ? void 0 : ctx.offsetBottom,
    offsetTop: ctx == null ? void 0 : ctx.offsetTop
  };
  const getStyles = useStyles7({
    name: ["Input", __staticSelector],
    props: __stylesApiProps || props,
    classes: Input_module_default2,
    // classes: {
    //   wrapper: "input-wrapper",
    //   input: "input-input",
    //   section: "input-section",
    // },
    className,
    style,
    classNames,
    styles,
    unstyled,
    stylesCtx,
    rootSelector: "wrapper",
    vars,
    varsResolver: varsResolver6
  });
  const ariaAttributes = withAria ? {
    required,
    disabled,
    "aria-invalid": !!error,
    "aria-describedby": ctx == null ? void 0 : ctx.describedBy,
    id: (ctx == null ? void 0 : ctx.inputId) || id
  } : {};
  return /* @__PURE__ */ React9.createElement(
    Box7,
    __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, getStyles("wrapper")), styleProps), wrapperProps), {
      mod: {
        error: !!error && withErrorStyles,
        pointer,
        disabled,
        multiline,
        "data-with-right-section": !!rightSection,
        "data-with-left-section": !!leftSection
      },
      variant,
      size
    }),
    leftSection && /* @__PURE__ */ React9.createElement(
      "div",
      __spreadValues(__spreadProps(__spreadValues({}, leftSectionProps), {
        "data-position": "left"
      }), getStyles("section", {
        className: leftSectionProps == null ? void 0 : leftSectionProps.className,
        style: leftSectionProps == null ? void 0 : leftSectionProps.style
      })),
      leftSection
    ),
    /* @__PURE__ */ React9.createElement(
      Box7,
      __spreadValues(__spreadProps(__spreadValues(__spreadValues({
        component: "input"
      }, rest), ariaAttributes), {
        ref,
        required,
        mod: { disabled, error: !!error && withErrorStyles },
        variant
      }), getStyles("input"))
    ),
    rightSection && /* @__PURE__ */ React9.createElement(
      "div",
      __spreadValues(__spreadProps(__spreadValues({}, rightSectionProps), {
        "data-position": "right"
      }), getStyles("section", {
        className: rightSectionProps == null ? void 0 : rightSectionProps.className,
        style: rightSectionProps == null ? void 0 : rightSectionProps.style
      })),
      rightSection
    )
  );
});
Input.Wrapper = InputWrapper;
Input.Label = InputLabel;
Input.Error = InputError;
Input.Description = InputDescription;
Input.Placeholder = InputPlaceholder;
Input.displayName = "@raikou/core/Input";

// ../Input/src/use-input-props.ts
import {
  extractStyleProps as extractStyleProps2,
  useProps as useProps8
} from "@raikou/core";
function useInputProps(component, defaultProps10, _props) {
  const props = useProps8(component, defaultProps10, _props);
  const _a = props, {
    label,
    description,
    error,
    required,
    classNames,
    styles,
    className,
    unstyled,
    __staticSelector,
    __stylesApiProps,
    errorProps,
    labelProps,
    descriptionProps,
    wrapperProps: _wrapperProps,
    id,
    size,
    style,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    variant,
    vars
  } = _a, others = __objRest(_a, [
    "label",
    "description",
    "error",
    "required",
    "classNames",
    "styles",
    "className",
    "unstyled",
    "__staticSelector",
    "__stylesApiProps",
    "errorProps",
    "labelProps",
    "descriptionProps",
    "wrapperProps",
    "id",
    "size",
    "style",
    "inputContainer",
    "inputWrapperOrder",
    "withAsterisk",
    "variant",
    "vars"
  ]);
  const { styleProps, rest } = extractStyleProps2(others);
  const wrapperProps = __spreadValues({
    label,
    description,
    error,
    required,
    classNames,
    className,
    __staticSelector,
    __stylesApiProps: __stylesApiProps || props,
    errorProps,
    labelProps,
    descriptionProps,
    unstyled,
    styles,
    size,
    style,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    variant,
    id
  }, _wrapperProps);
  return __spreadProps(__spreadValues({}, rest), {
    classNames,
    styles,
    unstyled,
    wrapperProps: __spreadValues(__spreadValues({}, wrapperProps), styleProps),
    inputProps: {
      required,
      classNames,
      styles,
      unstyled,
      size,
      __staticSelector,
      __stylesApiProps: __stylesApiProps || props,
      error,
      variant
    }
  });
}

// src/create-pin-array/create-pin-array.ts
function createPinArray(length, value) {
  if (length < 1) {
    return [];
  }
  const values = new Array(length).fill("");
  if (value) {
    const splitted = value.trim().split("");
    for (let i = 0; i < Math.min(length, splitted.length); i += 1) {
      values[i] = splitted[i];
    }
  }
  return values;
}

// css-module:./PinInput.module.css#css-module
var PinInput_module_default = { "root": "m-f1cb205a", "pinInput": "m-cb288ead" };

// ../InputBase/src/InputBase.tsx
import React10 from "react";
import {
  polymorphicFactory as polymorphicFactory2
} from "@raikou/core";
var defaultProps8 = {
  __staticSelector: "InputBase",
  withAria: true
};
var InputBase = polymorphicFactory2((props, ref) => {
  const _a = useInputProps(
    "InputBase",
    defaultProps8,
    props
  ), { inputProps, wrapperProps } = _a, others = __objRest(_a, ["inputProps", "wrapperProps"]);
  return /* @__PURE__ */ React10.createElement(Input.Wrapper, __spreadValues({}, wrapperProps), /* @__PURE__ */ React10.createElement(Input, __spreadProps(__spreadValues(__spreadValues({}, inputProps), others), { ref })));
});
InputBase.displayName = "@raikou/core/InputBase";

// src/PinInput.tsx
var regex = {
  number: /^[0-9]+$/,
  alphanumeric: /^[a-zA-Z0-9]+$/i
};
var defaultProps9 = {
  gap: "sm",
  length: 4,
  manageFocus: true,
  oneTimeCode: true,
  placeholder: "\u25CB",
  type: "alphanumeric",
  ariaLabel: "PinInput"
};
var varsResolver7 = createVarsResolver7((_, { size }) => ({
  root: {
    "--pin-input-size": getSize2(size != null ? size : defaultProps9.size, "pin-input-size")
  }
}));
var PinInput = factory7((props, ref) => {
  const _a = useProps9("PinInput", defaultProps9, props), {
    name,
    form,
    className,
    value,
    defaultValue,
    variant,
    gap,
    style,
    size,
    classNames,
    styles,
    unstyled,
    length,
    onChange,
    onComplete,
    manageFocus,
    autoFocus,
    error,
    radius,
    disabled,
    oneTimeCode,
    placeholder,
    type,
    mask,
    readOnly,
    inputType,
    inputMode,
    ariaLabel,
    vars,
    hiddenInputProps
  } = _a, others = __objRest(_a, [
    "name",
    "form",
    "className",
    "value",
    "defaultValue",
    "variant",
    "gap",
    "style",
    "size",
    "classNames",
    "styles",
    "unstyled",
    "length",
    "onChange",
    "onComplete",
    "manageFocus",
    "autoFocus",
    "error",
    "radius",
    "disabled",
    "oneTimeCode",
    "placeholder",
    "type",
    "mask",
    "readOnly",
    "inputType",
    "inputMode",
    "ariaLabel",
    "vars",
    "hiddenInputProps"
  ]);
  const uuid = useId2(name);
  const getStyles = useStyles8({
    name: "PinInput",
    classes: PinInput_module_default,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver7
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const [focusedIndex, setFocusedIndex] = useState2(-1);
  const [_value, setValues] = useUncontrolled({
    value,
    defaultValue,
    finalValue: "",
    onChange
  });
  const inputsRef = useRef([]);
  const validate = (code) => {
    const re = type instanceof RegExp ? type : type && type in regex ? regex[type] : null;
    return re == null ? void 0 : re.test(code);
  };
  const focusInputField = (dir, index) => {
    if (!manageFocus)
      return;
    if (dir === "next") {
      const nextIndex = index + 1;
      inputsRef.current[nextIndex < (length != null ? length : 0) ? nextIndex : index].focus();
    }
    if (dir === "prev") {
      const nextIndex = index - 1;
      inputsRef.current[nextIndex > -1 ? nextIndex : index].focus();
    }
  };
  const setFieldValue = (val, index) => {
    const values = [...createPinArray(length != null ? length : 0, _value)];
    values[index] = val;
    setValues(values.join(""));
  };
  const handleChange = (event, index) => {
    const inputValue = event.target.value;
    const nextCharOrValue = inputValue.length === 2 ? inputValue.split("")[inputValue.length - 1] : inputValue;
    const isValid = validate(nextCharOrValue);
    if (nextCharOrValue.length < 2) {
      if (isValid) {
        setFieldValue(nextCharOrValue, index);
        focusInputField("next", index);
      } else {
        setFieldValue("", index);
      }
    } else if (isValid) {
      setValues(inputValue);
    }
  };
  const handleKeyDown = (event, index) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusInputField("prev", index);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      focusInputField("next", index);
    } else if (event.key === "Delete") {
      event.preventDefault();
      setFieldValue("", index);
    } else if (event.key === "Backspace") {
      event.preventDefault();
      setFieldValue("", index);
      if (length === index + 1) {
        if (event.target.value === "") {
          focusInputField("prev", index);
        }
      } else {
        focusInputField("prev", index);
      }
    }
  };
  const handleFocus = (event, index) => {
    event.target.select();
    setFocusedIndex(index);
  };
  const handleBlur = () => {
    setFocusedIndex(-1);
  };
  const handlePaste = (event) => {
    event.preventDefault();
    const copyValue = event.clipboardData.getData("Text");
    const isValid = validate(copyValue);
    if (isValid) {
      setValues(copyValue);
    }
  };
  useEffect2(() => {
    if (_value.length !== length)
      return;
    onComplete == null ? void 0 : onComplete(_value);
  }, [_value]);
  return /* @__PURE__ */ React11.createElement(React11.Fragment, null, /* @__PURE__ */ React11.createElement(
    Group,
    __spreadProps(__spreadValues(__spreadValues({}, others), getStyles("root")), {
      role: "group",
      id: uuid,
      gap,
      ref,
      unstyled,
      wrap: "nowrap",
      variant,
      __size: size
    }),
    createPinArray(length != null ? length : 0, _value).map((char, index) => /* @__PURE__ */ React11.createElement(
      Input,
      __spreadProps(__spreadValues({
        component: "input"
      }, getStyles("pinInput", {
        style: {
          "--_input-padding": "0",
          "--_input-text-align": "center"
        }
      })), {
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        size,
        __staticSelector: "PinInput",
        id: `${uuid}-${index + 1}`,
        key: `${uuid}-${index}`,
        inputMode: inputMode || (type === "number" ? "numeric" : "text"),
        onChange: (event) => handleChange(event, index),
        onKeyDown: (event) => handleKeyDown(event, index),
        onFocus: (event) => handleFocus(event, index),
        onBlur: handleBlur,
        onPaste: handlePaste,
        type: inputType || (mask ? "password" : type === "number" ? "tel" : "text"),
        radius,
        error,
        variant,
        disabled,
        ref: (node) => {
          inputsRef.current[index] = node;
        },
        autoComplete: oneTimeCode ? "one-time-code" : "off",
        placeholder: focusedIndex === index ? "" : placeholder,
        value: char,
        autoFocus: autoFocus && index === 0,
        unstyled,
        "aria-label": ariaLabel,
        readOnly
      })
    ))
  ), /* @__PURE__ */ React11.createElement(
    "input",
    __spreadValues({
      type: "hidden",
      name,
      form,
      value: _value
    }, hiddenInputProps)
  ));
});
PinInput.classes = __spreadValues(__spreadValues({}, PinInput_module_default), InputBase.classes);
PinInput.displayName = "@raikou/core/PinInput";
export {
  PinInput
};
//# sourceMappingURL=index.mjs.map