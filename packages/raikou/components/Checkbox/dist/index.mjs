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

// src/Checkbox.tsx
import React13 from "react";

// ../../hooks/dist/index.mjs
import { useRef, useEffect, useMemo } from "react";
import { useRef as useRef2, useEffect as useEffect2, useCallback } from "react";
import { useEffect as useEffect3, useRef as useRef3 } from "react";
import { useState } from "react";
import { useState as useState2, useEffect as useEffect4, useRef as useRef4 } from "react";
import { useState as useState3 } from "react";
import { useEffect as useEffect5, useRef as useRef5, useState as useState4 } from "react";
import { useEffect as useEffect6, useState as useState5, useRef as useRef6 } from "react";
import { useEffect as useEffect7, useLayoutEffect } from "react";
import { useEffect as useEffect8, useState as useState6 } from "react";
import { useRef as useRef8 } from "react";
import { useEffect as useEffect9, useRef as useRef7 } from "react";
import { useCallback as useCallback2, useEffect as useEffect10, useRef as useRef9 } from "react";
import { useReducer } from "react";
import { useState as useState7 } from "react";
import React from "react";
import { useState as useState8, useEffect as useEffect11, useRef as useRef10 } from "react";
import { useEffect as useEffect12, useRef as useRef11, useState as useState9 } from "react";
import { useState as useState10 } from "react";
import { useState as useState11, useCallback as useCallback3, useEffect as useEffect14 } from "react";
import { useEffect as useEffect13 } from "react";
import { useCallback as useCallback4 } from "react";
import { useEffect as useEffect15, useRef as useRef12, useState as useState12 } from "react";
import { useEffect as useEffect16, useState as useState13, useRef as useRef13 } from "react";
import { useMemo as useMemo2 } from "react";
import { useState as useState14 } from "react";
import { useState as useState15 } from "react";
import { useEffect as useEffect17 } from "react";
import { useCallback as useCallback5, useRef as useRef14, useEffect as useEffect18 } from "react";
import { useEffect as useEffect19, useMemo as useMemo3, useRef as useRef15, useState as useState16 } from "react";
import { useEffect as useEffect20, useRef as useRef16 } from "react";
import { useReducer as useReducer2 } from "react";
import { useCallback as useCallback6, useState as useState17, useEffect as useEffect21 } from "react";
import { useState as useState18, useEffect as useEffect22 } from "react";
import { useCallback as useCallback7, useRef as useRef17, useState as useState19 } from "react";
import { useState as useState20, useEffect as useEffect23 } from "react";
import { useEffect as useEffect24 } from "react";
import { useCallback as useCallback8, useRef as useRef18, useState as useState21, useEffect as useEffect25 } from "react";
import { useEffect as useEffect26 } from "react";
import { useState as useState22, useEffect as useEffect27, useRef as useRef19, useCallback as useCallback9 } from "react";
import { useState as useState23 } from "react";
import { useState as useState24 } from "react";
import { useState as useState25, useCallback as useCallback10 } from "react";
import { useState as useState26 } from "react";
import { useRef as useRef20, useEffect as useEffect28 } from "react";
import { useState as useState27, useCallback as useCallback11 } from "react";
import { useRef as useRef21, useState as useState28, useEffect as useEffect29 } from "react";
import { useState as useState29, useEffect as useEffect30, useCallback as useCallback12 } from "react";
import { useRef as useRef22, useEffect as useEffect31 } from "react";
import { useState as useState30, useEffect as useEffect32 } from "react";
import { useEffect as useEffect33, useRef as useRef23 } from "react";
import { useRef as useRef24 } from "react";
import { useRef as useRef25 } from "react";
import { useCallback as useCallback13, useState as useState31 } from "react";
function randomId() {
  return `raikou-${Math.random().toString(36).slice(2, 11)}`;
}
var useIsomorphicEffect = typeof document !== "undefined" ? useLayoutEffect : useEffect7;
var __useId = React["useId".toString()] || (() => void 0);
function useReactId() {
  const id = __useId();
  return id ? `raikou-${id.replace(/:/g, "")}` : "";
}
function useId(staticId) {
  const reactId = useReactId();
  const [uuid, setUuid] = useState7(reactId);
  useIsomorphicEffect(() => {
    setUuid(randomId());
  }, []);
  if (typeof staticId === "string") {
    return staticId;
  }
  if (typeof window === "undefined") {
    return reactId;
  }
  return uuid;
}
function useUncontrolled({
  value,
  defaultValue,
  finalValue,
  onChange = () => {
  }
}) {
  const [uncontrolledValue, setUncontrolledValue] = useState14(
    defaultValue !== void 0 ? defaultValue : finalValue
  );
  const handleUncontrolledChange = (val) => {
    setUncontrolledValue(val);
    onChange == null ? void 0 : onChange(val);
  };
  if (value !== void 0) {
    return [value, onChange, true];
  }
  return [uncontrolledValue, handleUncontrolledChange, false];
}

// src/Checkbox.tsx
import {
  factory as factory7,
  useProps as useProps8,
  useStyles as useStyles8,
  extractStyleProps as extractStyleProps2,
  getRadius as getRadius2,
  getSize as getSize3,
  getThemeColor,
  createVarsResolver as createVarsResolver6,
  Box as Box8
} from "@raikou/core";

// ../InlineInput/src/InlineInput.tsx
import React10, { forwardRef } from "react";
import {
  Box as Box7,
  useStyles as useStyles7,
  getFontSize as getFontSize6,
  getSize as getSize2
} from "@raikou/core";

// ../Input/src/Input.tsx
import React9 from "react";
import {
  Box as Box6,
  polymorphicFactory,
  useProps as useProps6,
  useStyles as useStyles6,
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

// ../Input/src/InputWrapper.context.ts
var [InputWrapperProvider, useInputWrapperContext] = createOptionalContext({
  offsetBottom: false,
  offsetTop: false,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0
});

// ../Input/src/InputLabel/InputLabel.tsx
import React4 from "react";
import {
  Box,
  factory,
  useProps,
  useStyles,
  getFontSize,
  createVarsResolver
} from "@raikou/core";
var defaultProps = {
  size: "sm",
  labelElement: "label"
};
var varsResolver = createVarsResolver((_, { size }) => ({
  label: {
    "--input-label-size": getFontSize(size),
    "--input-asterisk-color": "var(--raikou-color-red-filled)"
  }
}));
var InputLabel = factory((_props, ref) => {
  const props = useProps("InputLabel", defaultProps, _props);
  const _a = useProps("InputLabel", defaultProps, props), {
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
  const _getStyles = useStyles({
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
    Box,
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
  Box as Box2,
  factory as factory2,
  useProps as useProps2,
  useStyles as useStyles2,
  getFontSize as getFontSize2,
  rem,
  createVarsResolver as createVarsResolver2
} from "@raikou/core";
var defaultProps2 = {
  size: "sm"
};
var varsResolver2 = createVarsResolver2((_, { size }) => ({
  error: {
    "--input-error-size": `calc(${getFontSize2(size)} - ${rem(2)})`
  }
}));
var InputError = factory2((_props, ref) => {
  const props = useProps2("InputError", defaultProps2, _props);
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
  const _getStyles = useStyles2({
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
    Box2,
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
  Box as Box3,
  factory as factory3,
  useProps as useProps3,
  useStyles as useStyles3,
  getFontSize as getFontSize3,
  rem as rem2,
  createVarsResolver as createVarsResolver3
} from "@raikou/core";
var defaultProps3 = {
  size: "sm"
};
var varsResolver3 = createVarsResolver3(
  (_, { size }) => ({
    description: {
      "--input-description-size": `calc(${getFontSize3(size)} - ${rem2(2)})`
    }
  })
);
var InputDescription = factory3(
  (_props, ref) => {
    const props = useProps3("InputDescription", defaultProps3, _props);
    const _a = useProps3("InputDescription", defaultProps3, props), {
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
    const _getStyles = useStyles3({
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
      Box3,
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
  Box as Box4,
  factory as factory4,
  useProps as useProps4,
  useStyles as useStyles4
} from "@raikou/core";
var defaultProps4 = {};
var InputPlaceholder = factory4(
  (_props, ref) => {
    const props = useProps4("InputPlaceholder", defaultProps4, _props);
    const _a = useProps4("InputPlaceholder", defaultProps4, props), {
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
    const getStyles = useStyles4({
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
      Box4,
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
import {
  Box as Box5,
  factory as factory5,
  useProps as useProps5,
  useStyles as useStyles5,
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
var defaultProps5 = {
  labelElement: "label",
  size: "sm",
  inputContainer: (children) => children,
  inputWrapperOrder: ["label", "description", "input", "error"]
};
var varsResolver4 = createVarsResolver4((_, { size }) => ({
  label: {
    "--input-label-size": getFontSize4(size),
    "--input-asterisk-color": "var(--raikou-color-red-filled)"
  },
  error: {
    "--input-error-size": `calc(${getFontSize4(size)} - ${rem3(2)})`
  },
  description: {
    "--input-description-size": `calc(${getFontSize4(size)} - ${rem3(2)})`
  }
}));
var InputWrapper = factory5((_props, ref) => {
  const props = useProps5("InputWrapper", defaultProps5, _props);
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
  const getStyles = useStyles5({
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
  const inputId = `${idBase}-input`;
  const hasError = !!error && typeof error !== "boolean";
  const hasDescription = !!description;
  const _describedBy = `${hasError ? errorId : ""} ${hasDescription ? descriptionId : ""}`;
  const describedBy = _describedBy.trim().length > 0 ? _describedBy.trim() : void 0;
  const _label = label && /* @__PURE__ */ React8.createElement(
    InputLabel,
    __spreadValues(__spreadValues({
      key: "label",
      labelElement,
      id: `${idBase}-label`,
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
        inputId
      }, getInputOffsets(inputWrapperOrder, { hasDescription, hasError }))
    },
    /* @__PURE__ */ React8.createElement(
      Box5,
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
var defaultProps6 = {
  size: "sm",
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
    "--input-radius": getRadius(props.radius),
    "--input-left-section-width": props.leftSectionWidth !== void 0 ? rem4(props.leftSectionWidth) : void 0,
    "--input-right-section-width": props.rightSectionWidth !== void 0 ? rem4(props.rightSectionWidth) : void 0,
    "--input-padding-y": props.multiline ? getSize(props.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": props.leftSectionPointerEvents,
    "--input-right-section-pointer-events": props.rightSectionPointerEvents
  }
}));
var Input = polymorphicFactory((_props, ref) => {
  const props = useProps6("Input", defaultProps6, _props);
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
  const getStyles = useStyles6({
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
    Box6,
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
      Box6,
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

// ../InlineInput/src/InlineInput.tsx
var InlineInput = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      __staticSelector,
      __stylesApiProps,
      className,
      classNames,
      styles,
      unstyled,
      children,
      label,
      description,
      id,
      disabled,
      error,
      size = "sm",
      labelPosition = "left",
      variant,
      style,
      vars
    } = _b, others = __objRest(_b, [
      "__staticSelector",
      "__stylesApiProps",
      "className",
      "classNames",
      "styles",
      "unstyled",
      "children",
      "label",
      "description",
      "id",
      "disabled",
      "error",
      "size",
      "labelPosition",
      "variant",
      "style",
      "vars"
    ]);
    const getStyles = useStyles7({
      name: __staticSelector,
      props: __stylesApiProps,
      className,
      style,
      classes: {
        root: "inlineInput-root",
        body: "inlineInput-body",
        labelWrapper: "inlineInput-labelWrapper",
        label: "inlineInput-label",
        description: "inlineInput-description",
        error: "inlineInput-error"
      },
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ React10.createElement(
      Box7,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
        ref,
        __vars: {
          "--label-fz": getFontSize6(size),
          "--label-lh": getSize2(size, "label-lh")
        },
        mod: { "label-position": labelPosition },
        variant,
        size
      }), others),
      /* @__PURE__ */ React10.createElement("div", __spreadValues({}, getStyles("body")), children, /* @__PURE__ */ React10.createElement("div", __spreadValues({}, getStyles("labelWrapper")), label && /* @__PURE__ */ React10.createElement(
        "label",
        __spreadProps(__spreadValues({}, getStyles("label")), {
          "data-disabled": disabled || void 0,
          htmlFor: id
        }),
        label
      ), description && /* @__PURE__ */ React10.createElement(Input.Description, __spreadValues({ size }, getStyles("description")), description), error && error !== "boolean" && /* @__PURE__ */ React10.createElement(Input.Error, __spreadValues({ size }, getStyles("error")), error)))
    );
  }
);
InlineInput.displayName = "@raikou/core/InlineInput";

// src/CheckboxGroup.context.ts
import { createContext as createContext3, useContext as useContext3 } from "react";
var CheckboxGroupContext = createContext3(
  null
);
var CheckboxGroupProvider = CheckboxGroupContext.Provider;
var useCheckboxGroupContext = () => useContext3(CheckboxGroupContext);

// src/CheckboxGroup/CheckboxGroup.tsx
import React11 from "react";
import { factory as factory6, useProps as useProps7 } from "@raikou/core";
var defaultProps7 = {};
var CheckboxGroup = factory6((props, ref) => {
  const _a = useProps7("CheckboxGroup", defaultProps7, props), {
    value,
    defaultValue,
    onChange,
    size,
    wrapperProps,
    children
  } = _a, others = __objRest(_a, [
    "value",
    "defaultValue",
    "onChange",
    "size",
    "wrapperProps",
    "children"
  ]);
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [],
    onChange
  });
  const handleChange = (event) => {
    const itemValue = event.currentTarget.value;
    setValue(
      _value.includes(itemValue) ? _value.filter((item) => item !== itemValue) : [..._value, itemValue]
    );
  };
  return /* @__PURE__ */ React11.createElement(
    CheckboxGroupProvider,
    {
      value: { value: _value, onChange: handleChange, size }
    },
    /* @__PURE__ */ React11.createElement(
      Input.Wrapper,
      __spreadProps(__spreadValues(__spreadValues({
        size,
        ref
      }, wrapperProps), others), {
        labelElement: "div",
        __staticSelector: "CheckboxGroup"
      }),
      children
    )
  );
});

// src/CheckIcon.tsx
import React12 from "react";
import { rem as rem5 } from "@raikou/core";
function CheckIcon(_a) {
  var _b = _a, { size, style } = _b, others = __objRest(_b, ["size", "style"]);
  const _style = size !== void 0 ? __spreadValues({ width: rem5(size), height: rem5(size) }, style) : style;
  return /* @__PURE__ */ React12.createElement(
    "svg",
    __spreadValues({
      className: "icon",
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: _style
    }, others),
    /* @__PURE__ */ React12.createElement(
      "path",
      {
        d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    )
  );
}
function CheckboxIcon(_a) {
  var _b = _a, { indeterminate } = _b, others = __objRest(_b, ["indeterminate"]);
  if (indeterminate) {
    return /* @__PURE__ */ React12.createElement(
      "svg",
      __spreadValues({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 32 6"
      }, others),
      /* @__PURE__ */ React12.createElement("rect", { width: "32", height: "6", fill: "currentColor", rx: "3" })
    );
  }
  return /* @__PURE__ */ React12.createElement(CheckIcon, __spreadValues({}, others));
}

// src/Checkbox.tsx
var defaultProps8 = {
  size: "sm",
  labelPosition: "right",
  icon: CheckboxIcon
};
var varsResolver6 = createVarsResolver6(
  (theme, { radius, color, size }) => ({
    root: {
      "--checkbox-size": getSize3(size, "checkbox-size"),
      "--checkbox-radius": getRadius2(radius),
      "--checkbox-color": getThemeColor(color, theme)
    }
  })
);
var Checkbox = factory7((_props, ref) => {
  const props = useProps8("Checkbox", defaultProps8, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    label,
    id,
    size,
    radius,
    wrapperProps,
    children,
    checked,
    labelPosition,
    description,
    error,
    disabled,
    variant,
    indeterminate,
    icon
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "color",
    "label",
    "id",
    "size",
    "radius",
    "wrapperProps",
    "children",
    "checked",
    "labelPosition",
    "description",
    "error",
    "disabled",
    "variant",
    "indeterminate",
    "icon"
  ]);
  const ctx = useCheckboxGroupContext();
  const _size = size || (ctx == null ? void 0 : ctx.size);
  const Icon = icon;
  const getStyles = useStyles8({
    name: "Checkbox",
    props,
    classes: {
      root: "checkbox-root",
      inner: "checkbox-inner",
      input: "checkbox-input",
      icon: "checkbox-icon",
      body: "inlineInput-body",
      label: "inlineInput-label",
      labelWrapper: "inlineInput-labelWrapper",
      description: "inlineInput-description",
      error: "inlineInput-error"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver6
  });
  const { styleProps, rest } = extractStyleProps2(others);
  const uuid = useId(id);
  const contextProps = ctx ? {
    checked: ctx.value.includes(rest.value),
    onChange: ctx.onChange
  } : {};
  return /* @__PURE__ */ React13.createElement(
    InlineInput,
    __spreadValues(__spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      __staticSelector: "Checkbox",
      __stylesApiProps: props,
      id: uuid,
      size: _size,
      labelPosition,
      label,
      description,
      error,
      disabled,
      classNames,
      styles,
      unstyled,
      "data-checked": contextProps.checked || void 0,
      variant
    }), styleProps), wrapperProps),
    /* @__PURE__ */ React13.createElement(
      Box8,
      __spreadProps(__spreadValues({}, getStyles("inner")), {
        mod: { "data-label-position": labelPosition }
      }),
      /* @__PURE__ */ React13.createElement(
        Box8,
        __spreadProps(__spreadValues(__spreadValues(__spreadValues({
          component: "input",
          id: uuid,
          ref,
          checked,
          disabled,
          mod: { error: !!error, indeterminate }
        }, getStyles("input", { focusable: true })), rest), contextProps), {
          type: "checkbox"
        })
      ),
      /* @__PURE__ */ React13.createElement(Icon, __spreadValues({ indeterminate }, getStyles("icon")))
    )
  );
});
Checkbox.displayName = "@raikou/core/Checkbox";
Checkbox.Group = CheckboxGroup;
export {
  CheckIcon,
  Checkbox,
  CheckboxGroup
};
