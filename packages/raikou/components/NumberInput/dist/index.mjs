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

// src/NumberInput.tsx
import React12 from "react";
import {
  NumericFormat
} from "react-number-format";
import { assignRef, clamp, useUncontrolled } from "@raikou/hooks";
import {
  factory as factory6,
  useProps as useProps9,
  useStyles as useStyles8,
  createVarsResolver as createVarsResolver6,
  getSize as getSize2,
  useResolvedStylesApi
} from "@raikou/core";

// ../UnstyledButton/src/UnstyledButton.tsx
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

// ../InputBase/src/InputBase.tsx
import React10 from "react";
import {
  polymorphicFactory as polymorphicFactory3
} from "@raikou/core";

// ../Input/src/Input.tsx
import React9 from "react";
import {
  Box as Box7,
  polymorphicFactory as polymorphicFactory2,
  useProps as useProps7,
  useStyles as useStyles7,
  extractStyleProps,
  getSize,
  getFontSize as getFontSize5,
  getRadius,
  rem as rem4,
  createVarsResolver as createVarsResolver5
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
  factory,
  useProps as useProps2,
  useStyles as useStyles2,
  getFontSize,
  createVarsResolver
} from "@raikou/core";
var defaultProps2 = {
  labelElement: "label"
};
var varsResolver = createVarsResolver((_, { size }) => ({
  label: {
    "--input-label-size": getFontSize(size),
    "--input-asterisk-color": void 0
  }
}));
var InputLabel = factory((_props, ref) => {
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
    classes: {
      label: "inputWrapper-label",
      required: "inputWrapper-required"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "label",
    vars,
    varsResolver
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
  factory as factory2,
  useProps as useProps3,
  useStyles as useStyles3,
  getFontSize as getFontSize2,
  rem,
  createVarsResolver as createVarsResolver2
} from "@raikou/core";
var defaultProps3 = {};
var varsResolver2 = createVarsResolver2((_, { size }) => ({
  error: {
    "--input-error-size": size === void 0 ? void 0 : `calc(${getFontSize2(size)} - ${rem(2)})`
  }
}));
var InputError = factory2((_props, ref) => {
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
    "variant"
  ]);
  const _getStyles = useStyles3({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: {
      error: "inputWrapper-error"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "error",
    vars,
    varsResolver: varsResolver2
  });
  const ctx = useInputWrapperContext();
  const getStyles = (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
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
  factory as factory3,
  useProps as useProps4,
  useStyles as useStyles4,
  getFontSize as getFontSize3,
  rem as rem2,
  createVarsResolver as createVarsResolver3
} from "@raikou/core";
var defaultProps4 = {};
var varsResolver3 = createVarsResolver3(
  (_, { size }) => ({
    description: {
      "--input-description-size": size === void 0 ? void 0 : `calc(${getFontSize3(size)} - ${rem2(2)})`
    }
  })
);
var InputDescription = factory3(
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
      "variant"
    ]);
    const ctx = useInputWrapperContext();
    const _getStyles = useStyles4({
      name: ["InputWrapper", __staticSelector],
      props,
      classes: {
        description: "inputWrapper-description"
      },
      className,
      style,
      classNames,
      styles,
      unstyled,
      rootSelector: "description",
      vars,
      varsResolver: varsResolver3
    });
    const getStyles = (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
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
  factory as factory4,
  useProps as useProps5,
  useStyles as useStyles5
} from "@raikou/core";
var defaultProps5 = {};
var InputPlaceholder = factory4(
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
      classes: {
        placeholder: "input-placeholder"
      },
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
  factory as factory5,
  useProps as useProps6,
  useStyles as useStyles6,
  createVarsResolver as createVarsResolver4,
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
var varsResolver4 = createVarsResolver4((_, { size }) => ({
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
var InputWrapper = factory5((_props, ref) => {
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
    classes: {
      root: "inputWrapper-root",
      label: "inputWrapper-label",
      required: "inputWrapper-required",
      error: "inputWrapper-error",
      description: "inputWrapper-description"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver4
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

// ../Input/src/Input.tsx
var defaultProps7 = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: true,
  withErrorStyles: true
};
var varsResolver5 = createVarsResolver5((_, props, ctx) => ({
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
var Input = polymorphicFactory2((_props, ref) => {
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
    classes: {
      wrapper: "input-wrapper",
      input: "input-input",
      section: "input-section"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    stylesCtx,
    rootSelector: "wrapper",
    vars,
    varsResolver: varsResolver5
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

// ../InputBase/src/InputBase.tsx
var defaultProps8 = {
  __staticSelector: "InputBase",
  withAria: true
};
var InputBase = polymorphicFactory3((props, ref) => {
  const _a = useInputProps(
    "InputBase",
    defaultProps8,
    props
  ), { inputProps, wrapperProps } = _a, others = __objRest(_a, ["inputProps", "wrapperProps"]);
  return /* @__PURE__ */ React10.createElement(Input.Wrapper, __spreadValues({}, wrapperProps), /* @__PURE__ */ React10.createElement(Input, __spreadProps(__spreadValues(__spreadValues({}, inputProps), others), { ref })));
});
InputBase.displayName = "@raikou/core/InputBase";

// src/NumberInputChevron.tsx
import React11 from "react";
function NumberInputChevron(_a) {
  var _b = _a, { direction, style } = _b, others = __objRest(_b, ["direction", "style"]);
  return /* @__PURE__ */ React11.createElement(
    "svg",
    __spreadValues({
      style: __spreadValues({
        width: "var(--ni-chevron-size)",
        height: "var(--ni-chevron-size)",
        transform: direction === "up" ? "rotate(180deg)" : void 0
      }, style),
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, others),
    /* @__PURE__ */ React11.createElement(
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

// src/NumberInput.tsx
function isValidNumber(value) {
  return typeof value === "number" && !Number.isNaN(value);
}
function getDecrementedValue({
  value,
  min,
  step = 1,
  allowNegative
}) {
  const nextValue = value - step;
  if (min !== void 0 && nextValue < min) {
    return min;
  }
  if (!allowNegative && nextValue < 0 && min === void 0) {
    return value;
  }
  if (min !== void 0 && min >= 0 && nextValue <= min) {
    return nextValue;
  }
  return nextValue;
}
function isInRange(value, min, max) {
  if (value === void 0) {
    return true;
  }
  const minValid = min === void 0 || value >= min;
  const maxValid = max === void 0 || value <= max;
  return minValid && maxValid;
}
var defaultProps9 = {
  step: 1,
  clampBehavior: "blur",
  allowDecimal: true,
  allowNegative: true,
  startValue: 0
};
var varsResolver6 = createVarsResolver6((_, { size }) => ({
  controls: {
    "--ni-chevron-size": getSize2(size, "ni-chevron-size")
  }
}));
var NumberInput = factory6((_props, ref) => {
  const props = useProps9("NumberInput", defaultProps9, _props);
  const _a = props, {
    classNames,
    styles,
    unstyled,
    vars,
    onChange,
    onValueChange,
    value,
    defaultValue,
    max,
    min,
    step,
    hideControls,
    rightSection,
    isAllowed,
    clampBehavior,
    onBlur,
    allowDecimal,
    decimalScale,
    onKeyDown,
    handlersRef,
    startValue,
    disabled,
    rightSectionPointerEvents,
    allowNegative,
    readOnly
  } = _a, others = __objRest(_a, [
    "classNames",
    "styles",
    "unstyled",
    "vars",
    "onChange",
    "onValueChange",
    "value",
    "defaultValue",
    "max",
    "min",
    "step",
    "hideControls",
    "rightSection",
    "isAllowed",
    "clampBehavior",
    "onBlur",
    "allowDecimal",
    "decimalScale",
    "onKeyDown",
    "handlersRef",
    "startValue",
    "disabled",
    "rightSectionPointerEvents",
    "allowNegative",
    "readOnly"
  ]);
  const getStyles = useStyles8({
    name: "NumberInput",
    classes: {
      controls: "numberInput-controls",
      control: "numberInput-control"
    },
    props,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver6
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    onChange
  });
  const handleValueChange = (payload, event) => {
    setValue(
      isValidNumber(payload.floatValue) ? payload.floatValue : payload.value
    );
    onValueChange == null ? void 0 : onValueChange(payload, event);
  };
  const increment = () => {
    if (typeof _value !== "number" || Number.isNaN(_value)) {
      setValue(min != null ? min : clamp(startValue, min, max));
    } else if (max !== void 0) {
      setValue(_value + step <= max ? _value + step : max);
    } else {
      setValue(_value + step);
    }
  };
  const decrement = () => {
    if (typeof _value !== "number" || Number.isNaN(_value)) {
      setValue(max != null ? max : clamp(startValue, min, max));
    } else {
      setValue(
        getDecrementedValue({ value: _value, min, step, allowNegative })
      );
    }
  };
  const handleKeyDown = (event) => {
    onKeyDown == null ? void 0 : onKeyDown(event);
    if (readOnly) {
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      increment();
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      decrement();
    }
  };
  assignRef(handlersRef, { increment, decrement });
  const controls = /* @__PURE__ */ React12.createElement("div", __spreadValues({}, getStyles("controls")), /* @__PURE__ */ React12.createElement(
    UnstyledButton,
    __spreadProps(__spreadValues({}, getStyles("control")), {
      tabIndex: -1,
      "aria-hidden": true,
      disabled: disabled || typeof _value === "number" && max !== void 0 && _value >= max,
      mod: { direction: "up" },
      onPointerDown: increment
    }),
    /* @__PURE__ */ React12.createElement(NumberInputChevron, { direction: "up" })
  ), /* @__PURE__ */ React12.createElement(
    UnstyledButton,
    __spreadProps(__spreadValues({}, getStyles("control")), {
      tabIndex: -1,
      "aria-hidden": true,
      disabled: disabled || typeof _value === "number" && min !== void 0 && _value <= min,
      mod: { direction: "down" },
      onPointerDown: decrement
    }),
    /* @__PURE__ */ React12.createElement(NumberInputChevron, { direction: "down" })
  ));
  return /* @__PURE__ */ React12.createElement(
    InputBase,
    __spreadProps(__spreadValues({
      component: NumericFormat,
      allowNegative
    }, others), {
      readOnly,
      disabled,
      value: _value,
      getInputRef: ref,
      onValueChange: handleValueChange,
      rightSection: hideControls || readOnly ? rightSection : rightSection || controls,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      unstyled,
      __staticSelector: "NumberInput",
      decimalScale: allowDecimal ? decimalScale : 0,
      onKeyDown: handleKeyDown,
      rightSectionPointerEvents: (rightSectionPointerEvents != null ? rightSectionPointerEvents : disabled) ? "none" : void 0,
      onBlur: (event) => {
        onBlur == null ? void 0 : onBlur(event);
        if (clampBehavior === "blur" && typeof _value === "number") {
          setValue(clamp(_value, min, max));
        }
      },
      isAllowed: (val) => {
        if (clampBehavior === "strict") {
          if (isAllowed) {
            return isAllowed(val) && isInRange(val.floatValue, min, max);
          }
          return isInRange(val.floatValue, min, max);
        }
        return isAllowed ? isAllowed(val) : true;
      }
    })
  );
});
NumberInput.displayName = "@raikou/core/NumberInput";
export {
  NumberInput
};
