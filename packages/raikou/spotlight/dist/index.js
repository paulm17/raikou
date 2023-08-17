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
  Spotlight: () => Spotlight,
  SpotlightAction: () => SpotlightAction,
  SpotlightActionsGroup: () => SpotlightActionsGroup,
  SpotlightActionsList: () => SpotlightActionsList,
  SpotlightEmpty: () => SpotlightEmpty,
  SpotlightFooter: () => SpotlightFooter,
  SpotlightSearch: () => SpotlightSearch,
  closeSpotlight: () => closeSpotlight,
  createSpotlight: () => createSpotlight,
  createSpotlightStore: () => createSpotlightStore,
  isActionsGroup: () => isActionsGroup,
  openSpotlight: () => openSpotlight,
  spotlight: () => spotlight,
  toggleSpotlight: () => toggleSpotlight,
  useSpotlight: () => useSpotlight
});
module.exports = __toCommonJS(src_exports);

// src/spotlight.store.ts
var import_hooks = require("@raikou/hooks");
var import_store = require("@raikou/store");
var createSpotlightStore = () => (0, import_store.createStore)({
  opened: false,
  empty: false,
  selected: -1,
  listId: "",
  query: "",
  registeredActions: /* @__PURE__ */ new Set()
});
var useSpotlight = (store) => (0, import_store.useStore)(store);
function updateSpotlightStateAction(update, store) {
  const state = store.getState();
  store.setState(__spreadValues(__spreadValues({}, state), update(store.getState())));
}
function openSpotlightAction(store) {
  updateSpotlightStateAction(() => ({ opened: true }), store);
}
function closeSpotlightAction(store) {
  updateSpotlightStateAction(() => ({ opened: false }), store);
}
function toggleSpotlightAction(store) {
  updateSpotlightStateAction((state) => ({ opened: !state.opened }), store);
}
function setSelectedAction(index, store) {
  store.updateState((state) => __spreadProps(__spreadValues({}, state), { selected: index }));
}
function setListId(id, store) {
  store.updateState((state) => __spreadProps(__spreadValues({}, state), { listId: id }));
}
function selectAction(index, store) {
  var _a, _b;
  const state = store.getState();
  const actionsList = document.getElementById(state.listId);
  const selected = actionsList.querySelector("[data-selected]");
  const actions = actionsList.querySelectorAll("[data-action]");
  const nextIndex = index === -1 ? actions.length - 1 : index === actions.length ? 0 : index;
  const selectedIndex = (0, import_hooks.clamp)(nextIndex, 0, actions.length - 1);
  selected == null ? void 0 : selected.removeAttribute("data-selected");
  (_a = actions[selectedIndex]) == null ? void 0 : _a.scrollIntoView({ block: "nearest" });
  (_b = actions[selectedIndex]) == null ? void 0 : _b.setAttribute("data-selected", "true");
  setSelectedAction(selectedIndex, store);
  return selectedIndex;
}
function selectNextAction(store) {
  return selectAction(store.getState().selected + 1, store);
}
function selectPreviousAction(store) {
  return selectAction(store.getState().selected - 1, store);
}
function triggerSelectedAction(store) {
  const state = store.getState();
  const selected = document.querySelector(
    `#${state.listId} [data-selected]`
  );
  selected == null ? void 0 : selected.click();
}
function registerAction(id, store) {
  const state = store.getState();
  state.registeredActions.add(id);
  return () => {
    state.registeredActions.delete(id);
  };
}
function setQuery(query, store) {
  updateSpotlightStateAction(() => ({ query }), store);
  Promise.resolve().then(() => {
    selectAction(0, store);
    updateSpotlightStateAction(
      (state) => ({
        empty: state.query.trim().length > 0 && state.registeredActions.size === 0 || false
      }),
      store
    );
  });
}
function clearSpotlightState({ clearQuery }, store) {
  store.updateState((state) => __spreadProps(__spreadValues({}, state), {
    selected: -1,
    query: clearQuery ? "" : state.query,
    empty: clearQuery ? false : state.empty
  }));
}
var spotlightActions = {
  open: openSpotlightAction,
  close: closeSpotlightAction,
  toggle: toggleSpotlightAction,
  updateState: updateSpotlightStateAction,
  setSelectedAction,
  setListId,
  selectAction,
  selectNextAction,
  selectPreviousAction,
  triggerSelectedAction,
  registerAction,
  setQuery,
  clearSpotlightState
};
function createSpotlight() {
  const store = createSpotlightStore();
  const actions = {
    open: () => openSpotlightAction(store),
    close: () => closeSpotlightAction(store),
    toggle: () => toggleSpotlightAction(store)
  };
  return [store, actions];
}
var [spotlightStore, spotlight] = createSpotlight();
var {
  open: openSpotlight,
  close: closeSpotlight,
  toggle: toggleSpotlight
} = spotlight;

// src/is-actions-group.ts
function isActionsGroup(item) {
  const _item = item;
  return _item.group !== void 0 && Array.isArray(_item.actions);
}

// src/Spotlight.tsx
var import_react71 = __toESM(require("react"));
var import_hooks18 = require("@raikou/hooks");
var import_core48 = require("@raikou/core");

// src/SpotlightSearch.tsx
var import_react11 = __toESM(require("react"));
var import_core7 = require("@raikou/core");

// ../components/Input/src/Input.tsx
var import_react10 = __toESM(require("react"));
var import_core6 = require("@raikou/core");

// ../components/_utils/create-safe-context/create-safe-context.tsx
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

// ../components/_utils/create-optional-context/create-optional-context.tsx
var import_react2 = __toESM(require("react"));
function createOptionalContext(initialValue = null) {
  const Context = (0, import_react2.createContext)(initialValue);
  const useOptionalContext = () => (0, import_react2.useContext)(Context);
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react2.default.createElement(Context.Provider, { value }, children);
  return [Provider, useOptionalContext];
}

// ../components/_utils/use-hovered/use-hovered.ts
var import_react3 = require("react");

// ../components/_utils/create-use-external-events/create-use-external-events.ts
var import_react4 = require("react");

// ../components/Input/src/InputWrapper.context.ts
var [InputWrapperProvider, useInputWrapperContext] = createOptionalContext({
  offsetBottom: false,
  offsetTop: false,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0
});

// ../components/Input/src/InputLabel/InputLabel.tsx
var import_react5 = __toESM(require("react"));
var import_core = require("@raikou/core");
var defaultProps = {
  size: "sm",
  labelElement: "label"
};
var varsResolver = (0, import_core.createVarsResolver)((_, { size }) => ({
  label: {
    "--input-label-size": (0, import_core.getFontSize)(size),
    "--input-asterisk-color": "var(--raikou-color-red-filled)"
  }
}));
var InputLabel = (0, import_core.factory)((_props, ref) => {
  const props = (0, import_core.useProps)("InputLabel", defaultProps, _props);
  const _a = (0, import_core.useProps)("InputLabel", defaultProps, props), {
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
  const _getStyles = (0, import_core.useStyles)({
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
  const getStyles2 = (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
  return /* @__PURE__ */ import_react5.default.createElement(
    import_core.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles2("label")), {
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
    required && /* @__PURE__ */ import_react5.default.createElement("span", __spreadProps(__spreadValues({}, getStyles2("required")), { "aria-hidden": true }), " *")
  );
});
InputLabel.displayName = "@raikou/core/InputLabel";

// ../components/Input/src/InputError/InputError.tsx
var import_react6 = __toESM(require("react"));
var import_core2 = require("@raikou/core");
var defaultProps2 = {
  size: "sm"
};
var varsResolver2 = (0, import_core2.createVarsResolver)((_, { size }) => ({
  error: {
    "--input-error-size": `calc(${(0, import_core2.getFontSize)(size)} - ${(0, import_core2.rem)(2)})`
  }
}));
var InputError = (0, import_core2.factory)((_props, ref) => {
  const props = (0, import_core2.useProps)("InputError", defaultProps2, _props);
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
  const _getStyles = (0, import_core2.useStyles)({
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
  const getStyles2 = (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
  return /* @__PURE__ */ import_react6.default.createElement(
    import_core2.Box,
    __spreadValues(__spreadValues({
      component: "p",
      ref,
      variant,
      size
    }, getStyles2("error")), others)
  );
});
InputError.displayName = "@raikou/core/InputError";

// ../components/Input/src/InputDescription/InputDescription.tsx
var import_react7 = __toESM(require("react"));
var import_core3 = require("@raikou/core");
var defaultProps3 = {
  size: "sm"
};
var varsResolver3 = (0, import_core3.createVarsResolver)(
  (_, { size }) => ({
    description: {
      "--input-description-size": `calc(${(0, import_core3.getFontSize)(size)} - ${(0, import_core3.rem)(2)})`
    }
  })
);
var InputDescription = (0, import_core3.factory)(
  (_props, ref) => {
    const props = (0, import_core3.useProps)("InputDescription", defaultProps3, _props);
    const _a = (0, import_core3.useProps)("InputDescription", defaultProps3, props), {
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
    const _getStyles = (0, import_core3.useStyles)({
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
    const getStyles2 = (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
    return /* @__PURE__ */ import_react7.default.createElement(
      import_core3.Box,
      __spreadValues(__spreadValues({
        component: "p",
        ref,
        variant,
        size
      }, getStyles2("description")), others)
    );
  }
);
InputDescription.displayName = "@raikou/core/InputDescription";

// ../components/Input/src/InputPlaceholder/InputPlaceholder.tsx
var import_react8 = __toESM(require("react"));
var import_core4 = require("@raikou/core");
var defaultProps4 = {};
var InputPlaceholder = (0, import_core4.factory)(
  (_props, ref) => {
    const props = (0, import_core4.useProps)("InputPlaceholder", defaultProps4, _props);
    const _a = (0, import_core4.useProps)("InputPlaceholder", defaultProps4, props), {
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
    const getStyles2 = (0, import_core4.useStyles)({
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
    return /* @__PURE__ */ import_react8.default.createElement(
      import_core4.Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles2("placeholder")), {
        component: "span",
        variant,
        ref
      }), others)
    );
  }
);
InputPlaceholder.displayName = "@raikou/core/InputPlaceholder";

// ../components/Input/src/InputWrapper/InputWrapper.tsx
var import_react9 = __toESM(require("react"));
var import_hooks2 = require("@raikou/hooks");
var import_core5 = require("@raikou/core");

// ../components/Input/src/InputWrapper/get-input-offsets/get-input-offsets.ts
function getInputOffsets(inputWrapperOrder, { hasDescription, hasError }) {
  const inputIndex = inputWrapperOrder.findIndex((part) => part === "input");
  const aboveInput = inputWrapperOrder[inputIndex - 1];
  const belowInput = inputWrapperOrder[inputIndex + 1];
  const offsetTop = hasDescription && aboveInput === "description" || hasError && aboveInput === "error";
  const offsetBottom = hasDescription && belowInput === "description" || hasError && belowInput === "error";
  return { offsetBottom, offsetTop };
}

// ../components/Input/src/InputWrapper/InputWrapper.tsx
var defaultProps5 = {
  labelElement: "label",
  size: "sm",
  inputContainer: (children) => children,
  inputWrapperOrder: ["label", "description", "input", "error"]
};
var varsResolver4 = (0, import_core5.createVarsResolver)((_, { size }) => ({
  label: {
    "--input-label-size": (0, import_core5.getFontSize)(size),
    "--input-asterisk-color": "var(--raikou-color-red-filled)"
  },
  error: {
    "--input-error-size": `calc(${(0, import_core5.getFontSize)(size)} - ${(0, import_core5.rem)(2)})`
  },
  description: {
    "--input-description-size": `calc(${(0, import_core5.getFontSize)(size)} - ${(0, import_core5.rem)(2)})`
  }
}));
var InputWrapper = (0, import_core5.factory)((_props, ref) => {
  const props = (0, import_core5.useProps)("InputWrapper", defaultProps5, _props);
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
  const getStyles2 = (0, import_core5.useStyles)({
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
  const idBase = (0, import_hooks2.useId)(id);
  const isRequired = typeof withAsterisk === "boolean" ? withAsterisk : required;
  const errorId = (errorProps == null ? void 0 : errorProps.id) || `${idBase}-error`;
  const descriptionId = (descriptionProps == null ? void 0 : descriptionProps.id) || `${idBase}-description`;
  const inputId = `${idBase}-input`;
  const hasError = !!error && typeof error !== "boolean";
  const hasDescription = !!description;
  const _describedBy = `${hasError ? errorId : ""} ${hasDescription ? descriptionId : ""}`;
  const describedBy = _describedBy.trim().length > 0 ? _describedBy.trim() : void 0;
  const _label = label && /* @__PURE__ */ import_react9.default.createElement(
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
  const _description = hasDescription && /* @__PURE__ */ import_react9.default.createElement(
    InputDescription,
    __spreadProps(__spreadValues(__spreadValues({
      key: "description"
    }, descriptionProps), sharedProps), {
      size: (descriptionProps == null ? void 0 : descriptionProps.size) || sharedProps.size,
      id: (descriptionProps == null ? void 0 : descriptionProps.id) || descriptionId
    }),
    description
  );
  const _input = /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, { key: "input" }, inputContainer(children));
  const _error = hasError && /* @__PURE__ */ import_react9.default.createElement(
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
  return /* @__PURE__ */ import_react9.default.createElement(
    InputWrapperProvider,
    {
      value: __spreadValues({
        getStyles: getStyles2,
        describedBy,
        inputId
      }, getInputOffsets(inputWrapperOrder, { hasDescription, hasError }))
    },
    /* @__PURE__ */ import_react9.default.createElement(
      import_core5.Box,
      __spreadValues(__spreadValues({
        ref,
        variant,
        size
      }, getStyles2("root")), others),
      content
    )
  );
});
InputWrapper.displayName = "@raikou/core/InputWrapper";

// ../components/Input/src/Input.tsx
var defaultProps6 = {
  size: "sm",
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: true,
  withErrorStyles: true
};
var varsResolver5 = (0, import_core6.createVarsResolver)((_, props, ctx) => ({
  wrapper: {
    "--input-margin-top": ctx.offsetTop ? "calc(var(--raikou-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": ctx.offsetBottom ? "calc(var(--raikou-spacing-xs) / 2)" : void 0,
    "--input-height": (0, import_core6.getSize)(props.size, "input-height"),
    "--input-fz": (0, import_core6.getFontSize)(props.size),
    "--input-radius": (0, import_core6.getRadius)(props.radius),
    "--input-left-section-width": props.leftSectionWidth !== void 0 ? (0, import_core6.rem)(props.leftSectionWidth) : void 0,
    "--input-right-section-width": props.rightSectionWidth !== void 0 ? (0, import_core6.rem)(props.rightSectionWidth) : void 0,
    "--input-padding-y": props.multiline ? (0, import_core6.getSize)(props.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": props.leftSectionPointerEvents,
    "--input-right-section-pointer-events": props.rightSectionPointerEvents
  }
}));
var Input = (0, import_core6.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core6.useProps)("Input", defaultProps6, _props);
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
  const { styleProps, rest } = (0, import_core6.extractStyleProps)(others);
  const ctx = useInputWrapperContext();
  const stylesCtx = {
    offsetBottom: ctx == null ? void 0 : ctx.offsetBottom,
    offsetTop: ctx == null ? void 0 : ctx.offsetTop
  };
  const getStyles2 = (0, import_core6.useStyles)({
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
  return /* @__PURE__ */ import_react10.default.createElement(
    import_core6.Box,
    __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, getStyles2("wrapper")), styleProps), wrapperProps), {
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
    leftSection && /* @__PURE__ */ import_react10.default.createElement(
      "div",
      __spreadValues(__spreadProps(__spreadValues({}, leftSectionProps), {
        "data-position": "left"
      }), getStyles2("section", {
        className: leftSectionProps == null ? void 0 : leftSectionProps.className,
        style: leftSectionProps == null ? void 0 : leftSectionProps.style
      })),
      leftSection
    ),
    /* @__PURE__ */ import_react10.default.createElement(
      import_core6.Box,
      __spreadValues(__spreadProps(__spreadValues(__spreadValues({
        component: "input"
      }, rest), ariaAttributes), {
        ref,
        required,
        mod: { disabled, error: !!error && withErrorStyles },
        variant
      }), getStyles2("input"))
    ),
    rightSection && /* @__PURE__ */ import_react10.default.createElement(
      "div",
      __spreadValues(__spreadProps(__spreadValues({}, rightSectionProps), {
        "data-position": "right"
      }), getStyles2("section", {
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

// src/Spotlight.context.ts
var [SpotlightProvider, useSpotlightContext] = createSafeContext(
  "Spotlight component was not found in tree"
);

// src/SpotlightSearch.tsx
var defaultProps7 = {
  size: "lg"
};
var SpotlightSearch = (0, import_core7.factory)((props, ref) => {
  const _a = (0, import_core7.useProps)("SpotlightSearch", defaultProps7, props), { classNames, styles, onKeyDown, onChange, vars, value } = _a, others = __objRest(_a, ["classNames", "styles", "onKeyDown", "onChange", "vars", "value"]);
  const ctx = useSpotlightContext();
  const inputStyles = ctx.getStyles("search");
  const handleKeyDown = (event) => {
    onKeyDown == null ? void 0 : onKeyDown(event);
    if (event.nativeEvent.code === "ArrowDown") {
      event.preventDefault();
      spotlightActions.selectNextAction(ctx.store);
    }
    if (event.nativeEvent.code === "ArrowUp") {
      event.preventDefault();
      spotlightActions.selectPreviousAction(ctx.store);
    }
    if (event.nativeEvent.code === "Enter") {
      event.preventDefault();
      spotlightActions.triggerSelectedAction(ctx.store);
    }
  };
  return /* @__PURE__ */ import_react11.default.createElement(
    Input,
    __spreadProps(__spreadValues({
      ref,
      classNames: [{ input: inputStyles.className }, classNames],
      styles: [{ input: inputStyles.style }, styles]
    }, others), {
      value: value != null ? value : ctx.query,
      onChange: (event) => {
        ctx.setQuery(event.currentTarget.value);
        onChange == null ? void 0 : onChange(event);
      },
      onKeyDown: handleKeyDown
    })
  );
});
SpotlightSearch.displayName = "@raikou/spotlight/SpotlightSearch";

// src/SpotlightActionsList.tsx
var import_react25 = __toESM(require("react"));
var import_core12 = require("@raikou/core");

// ../components/ScrollArea/src/ScrollArea.tsx
var import_react24 = __toESM(require("react"));
var import_core11 = require("@raikou/core");

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbar.tsx
var import_react19 = __toESM(require("react"));

// ../components/ScrollArea/src/ScrollArea.context.ts
var [ScrollAreaProvider, useScrollAreaContext] = createSafeContext(
  "ScrollArea.Root component was not found in tree"
);

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbarVisible.tsx
var import_react15 = __toESM(require("react"));
var import_core8 = require("@raikou/core");

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollbarX.tsx
var import_react13 = __toESM(require("react"));
var import_hooks5 = require("@raikou/hooks");

// ../components/ScrollArea/src/ScrollAreaScrollbar/Scrollbar.tsx
var import_react12 = __toESM(require("react"));
var import_hooks4 = require("@raikou/hooks");

// ../components/ScrollArea/src/use-resize-observer.ts
var import_hooks3 = require("@raikou/hooks");
function useResizeObserver(element, onResize) {
  const handleResize = (0, import_hooks3.useCallbackRef)(onResize);
  (0, import_hooks3.useIsomorphicEffect)(() => {
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

// ../components/ScrollArea/src/ScrollAreaScrollbar/Scrollbar.context.ts
var [ScrollbarProvider, useScrollbarContext] = createSafeContext(
  "ScrollAreaScrollbar was not found in tree"
);

// ../components/ScrollArea/src/utils/is-scrolling-within-scrollbar-bounds.ts
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}

// ../components/ScrollArea/src/utils/get-thumb-ratio.tsx
function getThumbRatio(viewportSize, contentSize) {
  const ratio = viewportSize / contentSize;
  return Number.isNaN(ratio) ? 0 : ratio;
}

// ../components/ScrollArea/src/utils/get-thumb-size.tsx
function getThumbSize(sizes) {
  const ratio = getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}

// ../components/ScrollArea/src/utils/compose-event-handlers.ts
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return (event) => {
    originalEventHandler == null ? void 0 : originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      ourEventHandler == null ? void 0 : ourEventHandler(event);
    }
  };
}

// ../components/ScrollArea/src/utils/to-int.ts
function toInt(value) {
  return value ? parseInt(value, 10) : 0;
}

// ../components/ScrollArea/src/utils/linear-scale.ts
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1])
      return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}

// ../components/ScrollArea/src/utils/get-thumb-offset-from-scroll.ts
function clamp2(value, [min, max]) {
  return Math.min(max, Math.max(min, value));
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const scrollbar = sizes.scrollbar.size - scrollbarPadding;
  const maxScrollPos = sizes.content - sizes.viewport;
  const maxThumbPos = scrollbar - thumbSizePx;
  const scrollClampRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const scrollWithoutMomentum = clamp2(scrollPos, scrollClampRange);
  const interpolate = linearScale([0, maxScrollPos], [0, maxThumbPos]);
  return interpolate(scrollWithoutMomentum);
}

// ../components/ScrollArea/src/utils/get-scroll-position-from-pointer.ts
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

// ../components/ScrollArea/src/utils/add-unlinked-scroll-listener.tsx
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

// ../components/ScrollArea/src/ScrollAreaScrollbar/Scrollbar.tsx
var Scrollbar = (0, import_react12.forwardRef)(
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
    const [scrollbar, setScrollbar] = import_react12.default.useState(
      null
    );
    const composeRefs = (0, import_hooks4.useMergedRef)(
      forwardedRef,
      (node) => setScrollbar(node)
    );
    const rectRef = import_react12.default.useRef(null);
    const prevWebkitUserSelectRef = import_react12.default.useRef("");
    const { viewport } = context;
    const maxScrollPos = sizes.content - sizes.viewport;
    const handleWheelScroll = (0, import_hooks4.useCallbackRef)(onWheelScroll);
    const handleThumbPositionChange = (0, import_hooks4.useCallbackRef)(onThumbPositionChange);
    const handleResize = (0, import_hooks4.useDebounceCallback)(onResize, 10);
    const handleDragScroll = (event) => {
      if (rectRef.current) {
        const x = event.clientX - rectRef.current.left;
        const y = event.clientY - rectRef.current.top;
        onDragScroll({ x, y });
      }
    };
    (0, import_react12.useEffect)(() => {
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
    (0, import_react12.useEffect)(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
    useResizeObserver(scrollbar, handleResize);
    useResizeObserver(context.content, handleResize);
    return /* @__PURE__ */ import_react12.default.createElement(
      ScrollbarProvider,
      {
        value: {
          scrollbar,
          hasThumb,
          onThumbChange: (0, import_hooks4.useCallbackRef)(onThumbChange),
          onThumbPointerUp: (0, import_hooks4.useCallbackRef)(onThumbPointerUp),
          onThumbPositionChange: handleThumbPositionChange,
          onThumbPointerDown: (0, import_hooks4.useCallbackRef)(onThumbPointerDown)
        }
      },
      /* @__PURE__ */ import_react12.default.createElement(
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

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollbarX.tsx
var ScrollAreaScrollbarX = (0, import_react13.forwardRef)((props, forwardedRef) => {
  const _a = props, { sizes, onSizesChange, style } = _a, others = __objRest(_a, ["sizes", "onSizesChange", "style"]);
  const ctx = useScrollAreaContext();
  const [computedStyle, setComputedStyle] = (0, import_react13.useState)();
  const ref = (0, import_react13.useRef)(null);
  const composeRefs = (0, import_hooks5.useMergedRef)(forwardedRef, ref, ctx.onScrollbarXChange);
  (0, import_react13.useEffect)(() => {
    if (ref.current)
      setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ import_react13.default.createElement(
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

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollbarY.tsx
var import_react14 = __toESM(require("react"));
var import_hooks6 = require("@raikou/hooks");
var ScrollAreaScrollbarY = (0, import_react14.forwardRef)((props, forwardedRef) => {
  const _a = props, { sizes, onSizesChange, style } = _a, others = __objRest(_a, ["sizes", "onSizesChange", "style"]);
  const context = useScrollAreaContext();
  const [computedStyle, setComputedStyle] = import_react14.default.useState();
  const ref = (0, import_react14.useRef)(null);
  const composeRefs = (0, import_hooks6.useMergedRef)(
    forwardedRef,
    ref,
    context.onScrollbarYChange
  );
  (0, import_react14.useEffect)(() => {
    if (ref.current)
      setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ import_react14.default.createElement(
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

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbarVisible.tsx
var ScrollAreaScrollbarVisible = (0, import_react15.forwardRef)((props, forwardedRef) => {
  const _a = props, { orientation = "vertical" } = _a, scrollbarProps = __objRest(_a, ["orientation"]);
  const { dir } = (0, import_core8.useDirection)();
  const context = useScrollAreaContext();
  const thumbRef = (0, import_react15.useRef)(null);
  const pointerOffsetRef = (0, import_react15.useRef)(0);
  const [sizes, setSizes] = (0, import_react15.useState)({
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
    return /* @__PURE__ */ import_react15.default.createElement(
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
    return /* @__PURE__ */ import_react15.default.createElement(
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

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbarHover.tsx
var import_react17 = __toESM(require("react"));

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbarAuto.tsx
var import_react16 = __toESM(require("react"));
var import_hooks7 = require("@raikou/hooks");
var ScrollAreaScrollbarAuto = (0, import_react16.forwardRef)((props, ref) => {
  const context = useScrollAreaContext();
  const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
  const [visible, setVisible] = (0, import_react16.useState)(false);
  const isHorizontal = props.orientation === "horizontal";
  const handleResize = (0, import_hooks7.useDebounceCallback)(() => {
    if (context.viewport) {
      const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
      const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
      setVisible(isHorizontal ? isOverflowX : isOverflowY);
    }
  }, 10);
  useResizeObserver(context.viewport, handleResize);
  useResizeObserver(context.content, handleResize);
  if (forceMount || visible) {
    return /* @__PURE__ */ import_react16.default.createElement(
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

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbarHover.tsx
var ScrollAreaScrollbarHover = (0, import_react17.forwardRef)(
  (props, ref) => {
    const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
    const context = useScrollAreaContext();
    const [visible, setVisible] = (0, import_react17.useState)(false);
    (0, import_react17.useEffect)(() => {
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
      return /* @__PURE__ */ import_react17.default.createElement(
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

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbarScroll.tsx
var import_react18 = __toESM(require("react"));
var import_hooks8 = require("@raikou/hooks");
var ScrollAreaScrollbarScroll = (0, import_react18.forwardRef)((props, red) => {
  const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
  const context = useScrollAreaContext();
  const isHorizontal = props.orientation === "horizontal";
  const [state, setState] = (0, import_react18.useState)("hidden");
  const debounceScrollEnd = (0, import_hooks8.useDebounceCallback)(() => setState("idle"), 100);
  (0, import_react18.useEffect)(() => {
    if (state === "idle") {
      const hideTimer = window.setTimeout(
        () => setState("hidden"),
        context.scrollHideDelay
      );
      return () => window.clearTimeout(hideTimer);
    }
    return void 0;
  }, [state, context.scrollHideDelay]);
  (0, import_react18.useEffect)(() => {
    const { viewport } = context;
    const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
    if (viewport) {
      let prevScrollPos = viewport[scrollDirection];
      const handleScroll2 = () => {
        const scrollPos = viewport[scrollDirection];
        const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
        if (hasScrollInDirectionChanged) {
          setState("scrolling");
          debounceScrollEnd();
        }
        prevScrollPos = scrollPos;
      };
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
    return void 0;
  }, [context.viewport, isHorizontal, debounceScrollEnd]);
  if (forceMount || state !== "hidden") {
    return /* @__PURE__ */ import_react18.default.createElement(
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

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbar.tsx
var ScrollAreaScrollbar = import_react19.default.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
    const context = useScrollAreaContext();
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === "horizontal";
    import_react19.default.useEffect(() => {
      isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
      return () => {
        isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
      };
    }, [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]);
    return context.type === "hover" ? /* @__PURE__ */ import_react19.default.createElement(ScrollAreaScrollbarHover, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef, forceMount })) : context.type === "scroll" ? /* @__PURE__ */ import_react19.default.createElement(ScrollAreaScrollbarScroll, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef, forceMount })) : context.type === "auto" ? /* @__PURE__ */ import_react19.default.createElement(ScrollAreaScrollbarAuto, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef, forceMount })) : context.type === "always" ? /* @__PURE__ */ import_react19.default.createElement(ScrollAreaScrollbarVisible, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef })) : null;
  }
);

// ../components/ScrollArea/src/ScrollAreaCorner/ScrollAreaCorner.tsx
var import_react20 = __toESM(require("react"));
var Corner = import_react20.default.forwardRef(
  (props, ref) => {
    const _a = props, { style } = _a, others = __objRest(_a, ["style"]);
    const ctx = useScrollAreaContext();
    const [width, setWidth] = import_react20.default.useState(0);
    const [height, setHeight] = import_react20.default.useState(0);
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
    return hasSize ? /* @__PURE__ */ import_react20.default.createElement("div", __spreadProps(__spreadValues({}, others), { ref, style: __spreadProps(__spreadValues({}, style), { width, height }) })) : null;
  }
);
var ScrollAreaCorner = import_react20.default.forwardRef((props, ref) => {
  const ctx = useScrollAreaContext();
  const hasBothScrollbarsVisible = Boolean(ctx.scrollbarX && ctx.scrollbarY);
  const hasCorner = ctx.type !== "scroll" && hasBothScrollbarsVisible;
  return hasCorner ? /* @__PURE__ */ import_react20.default.createElement(Corner, __spreadProps(__spreadValues({}, props), { ref })) : null;
});

// ../components/ScrollArea/src/ScrollAreaRoot/ScrollAreaRoot.tsx
var import_react21 = __toESM(require("react"));
var import_hooks9 = require("@raikou/hooks");
var import_core9 = require("@raikou/core");
var defaultProps8 = {
  scrollHideDelay: 1e3,
  type: "hover"
};
var ScrollAreaRoot = (0, import_react21.forwardRef)(
  (_props, ref) => {
    const props = (0, import_core9.useProps)("ScrollAreaRoot", defaultProps8, _props);
    const _a = props, { type, scrollHideDelay } = _a, others = __objRest(_a, ["type", "scrollHideDelay"]);
    const [scrollArea, setScrollArea] = (0, import_react21.useState)(null);
    const [viewport, setViewport] = (0, import_react21.useState)(null);
    const [content, setContent] = (0, import_react21.useState)(null);
    const [scrollbarX, setScrollbarX] = (0, import_react21.useState)(null);
    const [scrollbarY, setScrollbarY] = (0, import_react21.useState)(null);
    const [cornerWidth, setCornerWidth] = (0, import_react21.useState)(0);
    const [cornerHeight, setCornerHeight] = (0, import_react21.useState)(0);
    const [scrollbarXEnabled, setScrollbarXEnabled] = (0, import_react21.useState)(false);
    const [scrollbarYEnabled, setScrollbarYEnabled] = (0, import_react21.useState)(false);
    const rootRef = (0, import_hooks9.useMergedRef)(ref, (node) => setScrollArea(node));
    return /* @__PURE__ */ import_react21.default.createElement(
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
      /* @__PURE__ */ import_react21.default.createElement(
        import_core9.Box,
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

// ../components/ScrollArea/src/ScrollAreaViewport/ScrollAreaViewport.tsx
var import_react22 = __toESM(require("react"));
var import_hooks10 = require("@raikou/hooks");
var import_core10 = require("@raikou/core");
var ScrollAreaViewport = (0, import_react22.forwardRef)((_a, ref) => {
  var _b = _a, { children, style } = _b, others = __objRest(_b, ["children", "style"]);
  const ctx = useScrollAreaContext();
  const rootRef = (0, import_hooks10.useMergedRef)(ref, ctx.onViewportChange);
  return /* @__PURE__ */ import_react22.default.createElement(
    import_core10.Box,
    __spreadProps(__spreadValues({}, others), {
      ref: rootRef,
      style: __spreadValues({
        overflowX: ctx.scrollbarXEnabled ? "scroll" : "hidden",
        overflowY: ctx.scrollbarYEnabled ? "scroll" : "hidden"
      }, style)
    }),
    /* @__PURE__ */ import_react22.default.createElement(
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

// ../components/ScrollArea/src/ScrollAreaThumb/ScrollAreaThumb.tsx
var import_react23 = __toESM(require("react"));
var import_hooks11 = require("@raikou/hooks");
var Thumb = (0, import_react23.forwardRef)(
  (props, forwardedRef) => {
    const _a = props, { style } = _a, others = __objRest(_a, ["style"]);
    const scrollAreaContext = useScrollAreaContext();
    const scrollbarContext = useScrollbarContext();
    const { onThumbPositionChange } = scrollbarContext;
    const composedRef = (0, import_hooks11.useMergedRef)(
      forwardedRef,
      (node) => scrollbarContext.onThumbChange(node)
    );
    const removeUnlinkedScrollListenerRef = (0, import_react23.useRef)();
    const debounceScrollEnd = (0, import_hooks11.useDebounceCallback)(() => {
      if (removeUnlinkedScrollListenerRef.current) {
        removeUnlinkedScrollListenerRef.current();
        removeUnlinkedScrollListenerRef.current = void 0;
      }
    }, 100);
    (0, import_react23.useEffect)(() => {
      const { viewport } = scrollAreaContext;
      if (viewport) {
        const handleScroll2 = () => {
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
        viewport.addEventListener("scroll", handleScroll2);
        return () => viewport.removeEventListener("scroll", handleScroll2);
      }
      return void 0;
    }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);
    return /* @__PURE__ */ import_react23.default.createElement(
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
var ScrollAreaThumb = import_react23.default.forwardRef((props, forwardedRef) => {
  const _a = props, { forceMount } = _a, thumbProps = __objRest(_a, ["forceMount"]);
  const scrollbarContext = useScrollbarContext();
  if (forceMount || scrollbarContext.hasThumb) {
    return /* @__PURE__ */ import_react23.default.createElement(Thumb, __spreadValues({ ref: forwardedRef }, thumbProps));
  }
  return null;
});

// ../components/ScrollArea/src/ScrollArea.tsx
var defaultProps9 = {
  scrollbarSize: 12,
  scrollHideDelay: 1e3,
  type: "hover"
};
var varsResolver6 = (0, import_core11.createVarsResolver)(
  (_, { scrollbarSize }) => ({
    root: {
      "--scrollarea-scrollbar-size": (0, import_core11.rem)(scrollbarSize)
    }
  })
);
var ScrollArea = (0, import_core11.factory)((_props, ref) => {
  const props = (0, import_core11.useProps)("ScrollArea", defaultProps9, _props);
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
  const [scrollbarHovered, setScrollbarHovered] = (0, import_react24.useState)(false);
  const getStyles2 = (0, import_core11.useStyles)({
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
    varsResolver: varsResolver6
  });
  return /* @__PURE__ */ import_react24.default.createElement(
    ScrollAreaRoot,
    __spreadValues(__spreadValues({
      type: type === "never" ? "always" : type,
      scrollHideDelay,
      ref
    }, getStyles2("root")), others),
    /* @__PURE__ */ import_react24.default.createElement(
      ScrollAreaViewport,
      __spreadProps(__spreadValues(__spreadValues({}, viewportProps), getStyles2("viewport")), {
        ref: viewportRef,
        "data-offset-scrollbars": offsetScrollbars || void 0,
        onScroll: typeof onScrollPositionChange === "function" ? ({ currentTarget }) => onScrollPositionChange({
          x: currentTarget.scrollLeft,
          y: currentTarget.scrollTop
        }) : void 0
      }),
      children
    ),
    /* @__PURE__ */ import_react24.default.createElement(
      ScrollAreaScrollbar,
      __spreadProps(__spreadValues({}, getStyles2("scrollbar")), {
        orientation: "horizontal",
        "data-hidden": type === "never" || void 0,
        forceMount: true,
        onMouseEnter: () => setScrollbarHovered(true),
        onMouseLeave: () => setScrollbarHovered(false)
      }),
      /* @__PURE__ */ import_react24.default.createElement(ScrollAreaThumb, __spreadValues({}, getStyles2("thumb")))
    ),
    /* @__PURE__ */ import_react24.default.createElement(
      ScrollAreaScrollbar,
      __spreadProps(__spreadValues({}, getStyles2("scrollbar")), {
        orientation: "vertical",
        "data-hidden": type === "never" || void 0,
        forceMount: true,
        onMouseEnter: () => setScrollbarHovered(true),
        onMouseLeave: () => setScrollbarHovered(false)
      }),
      /* @__PURE__ */ import_react24.default.createElement(ScrollAreaThumb, __spreadValues({}, getStyles2("thumb")))
    ),
    /* @__PURE__ */ import_react24.default.createElement(
      ScrollAreaCorner,
      __spreadProps(__spreadValues({}, getStyles2("corner")), {
        "data-hovered": scrollbarHovered || void 0,
        "data-hidden": type === "never" || void 0
      })
    )
  );
});
ScrollArea.displayName = "@raikou/core/ScrollArea";
var ScrollAreaAutosize = (0, import_core11.factory)((props, ref) => {
  const _a = (0, import_core11.useProps)("ScrollAreaAutosize", defaultProps9, props), {
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
  return /* @__PURE__ */ import_react24.default.createElement(import_core11.Box, __spreadProps(__spreadValues({}, others), { ref, style: [{ display: "flex" }, style] }), /* @__PURE__ */ import_react24.default.createElement(import_core11.Box, { style: { display: "flex", flexDirection: "column", flex: 1 } }, /* @__PURE__ */ import_react24.default.createElement(
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

// src/SpotlightActionsList.tsx
var defaultProps10 = {};
var SpotlightActionsList = (0, import_core12.factory)(
  (props, ref) => {
    const _a = (0, import_core12.useProps)("SpotlightActionsList", defaultProps10, props), {
      className,
      style,
      id,
      children,
      vars,
      classNames,
      styles
    } = _a, others = __objRest(_a, [
      "className",
      "style",
      "id",
      "children",
      "vars",
      "classNames",
      "styles"
    ]);
    const ctx = useSpotlightContext();
    const generatedId = `raikou-${(0, import_react25.useId)().replaceAll(":", "")}`;
    const listId = id || generatedId;
    (0, import_react25.useEffect)(() => {
      spotlightActions.setListId(listId, ctx.store);
      return () => spotlightActions.setListId("", ctx.store);
    }, []);
    return /* @__PURE__ */ import_react25.default.createElement(
      ScrollArea.Autosize,
      __spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("actionsList", {
        className,
        style,
        classNames,
        styles
      })), {
        ref,
        type: "scroll",
        scrollbarSize: "var(--spotlight-actions-list-padding)",
        offsetScrollbars: "y",
        id: listId
      }), others),
      children
    );
  }
);
SpotlightActionsList.displayName = "@raikou/spotlight/SpotlightActionsList";

// src/SpotlightAction.tsx
var import_react30 = __toESM(require("react"));
var import_core18 = require("@raikou/core");

// ../components/UnstyledButton/src/UnstyledButton.tsx
var import_react26 = __toESM(require("react"));
var import_core13 = require("@raikou/core");
var defaultProps11 = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = (0, import_core13.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core13.useProps)("UnstyledButton", defaultProps11, _props);
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
    const getStyles2 = (0, import_core13.useStyles)({
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
    return /* @__PURE__ */ import_react26.default.createElement(
      import_core13.Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles2("root", { focusable: true })), {
        component,
        ref,
        type: component === "button" ? "button" : void 0
      }), others)
    );
  }
);
UnstyledButton.displayName = "@raikou/core/UnstyledButton";

// ../components/Highlight/src/Highlight.tsx
var import_react29 = __toESM(require("react"));
var import_core17 = require("@raikou/core");

// ../components/Text/src/Text.tsx
var import_react27 = __toESM(require("react"));
var import_core14 = require("@raikou/core");
function getTextTruncate(truncate) {
  if (truncate === "start") {
    return "start";
  }
  if (truncate === "end" || truncate) {
    return "end";
  }
  return void 0;
}
var defaultProps12 = {
  variant: "text",
  inherit: false,
  size: "md"
};
var varsResolver7 = (0, import_core14.createVarsResolver)(
  (theme, { variant, lineClamp, gradient, size }) => ({
    root: {
      "--text-fz": (0, import_core14.getFontSize)(size),
      "--text-lh": (0, import_core14.getLineHeight)(size),
      "--text-gradient": variant === "gradient" ? (0, import_core14.getGradient)(gradient, theme) : void 0,
      "--text-line-clamp": typeof lineClamp === "number" ? lineClamp.toString() : void 0
    }
  })
);
var Text = (0, import_core14.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core14.useProps)("Text", defaultProps12, _props);
  const _a = props, {
    lineClamp,
    truncate,
    inline,
    inherit,
    gradient,
    span,
    __staticSelector,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    variant,
    mod,
    size
  } = _a, others = __objRest(_a, [
    "lineClamp",
    "truncate",
    "inline",
    "inherit",
    "gradient",
    "span",
    "__staticSelector",
    "vars",
    "className",
    "style",
    "classNames",
    "styles",
    "unstyled",
    "variant",
    "mod",
    "size"
  ]);
  const getStyles2 = (0, import_core14.useStyles)({
    name: ["Text", __staticSelector],
    props,
    classes: {
      root: "text-root"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver7
  });
  return /* @__PURE__ */ import_react27.default.createElement(
    import_core14.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles2("root", { focusable: true })), {
      ref,
      component: span ? "span" : "p",
      variant,
      mod: [
        {
          "data-truncate": getTextTruncate(truncate),
          "data-line-clamp": typeof lineClamp === "number",
          "data-inline": inline,
          "data-inherit": inherit
        },
        mod
      ],
      size
    }), others)
  );
});
Text.displayName = "@raikou/core/Text";

// ../components/Mark/src/Mark.tsx
var import_react28 = __toESM(require("react"));
var import_core16 = require("@raikou/core");

// ../components/Mark/src/get-mark-color.ts
var import_core15 = require("@raikou/core");
function getMarkColor({
  color,
  theme,
  defaultShade
}) {
  const parsed = (0, import_core15.parseThemeColor)({ color, theme });
  if (!parsed.isThemeColor) {
    return color;
  }
  if (parsed.shade === void 0) {
    return `var(--raikou-color-${parsed.color}-${defaultShade})`;
  }
  return `var(${parsed.variable})`;
}

// ../components/Mark/src/Mark.tsx
var defaultProps13 = {
  color: "yellow"
};
var varsResolver8 = (0, import_core16.createVarsResolver)((theme, { color }) => ({
  root: {
    "--mark-bg-dark": getMarkColor({ color, theme, defaultShade: 5 }),
    "--mark-bg-light": getMarkColor({ color, theme, defaultShade: 2 })
  }
}));
var Mark = (0, import_core16.factory)((_props, ref) => {
  const props = (0, import_core16.useProps)("Mark", defaultProps13, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "color",
    "variant"
  ]);
  const getStyles2 = (0, import_core16.useStyles)({
    name: "Mark",
    props,
    className,
    style,
    classes: {
      root: "mark-root"
    },
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver8
  });
  return /* @__PURE__ */ import_react28.default.createElement(
    import_core16.Box,
    __spreadValues(__spreadValues({
      component: "mark",
      ref,
      variant
    }, getStyles2("root")), others)
  );
});
Mark.displayName = "@raikou/core/Mark";

// ../components/Highlight/src/highlighter/highlighter.ts
function escapeRegex(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
}
function highlighter(value, _highlight) {
  if (_highlight == null) {
    return [{ chunk: value, highlighted: false }];
  }
  const highlight = Array.isArray(_highlight) ? _highlight.map(escapeRegex) : escapeRegex(_highlight);
  const shouldHighlight = Array.isArray(highlight) ? highlight.filter((part) => part.trim().length > 0).length > 0 : highlight.trim() !== "";
  if (!shouldHighlight) {
    return [{ chunk: value, highlighted: false }];
  }
  const matcher = typeof highlight === "string" ? highlight.trim() : highlight.filter((part) => part.trim().length !== 0).map((part) => part.trim()).join("|");
  const re = new RegExp(`(${matcher})`, "gi");
  const chunks = value.split(re).map((part) => ({ chunk: part, highlighted: re.test(part) })).filter(({ chunk }) => chunk);
  return chunks;
}

// ../components/Highlight/src/Highlight.tsx
var defaultProps14 = {};
var Highlight = (0, import_core17.polymorphicFactory)((props, ref) => {
  const _a = (0, import_core17.useProps)("Highlight", defaultProps14, props), { unstyled, children, highlight, highlightStyles, color } = _a, others = __objRest(_a, ["unstyled", "children", "highlight", "highlightStyles", "color"]);
  const highlightChunks = highlighter(children, highlight);
  return /* @__PURE__ */ import_react29.default.createElement(
    Text,
    __spreadProps(__spreadValues({
      unstyled,
      ref
    }, others), {
      __staticSelector: "Highlight"
    }),
    highlightChunks.map(
      ({ chunk, highlighted }, i) => highlighted ? /* @__PURE__ */ import_react29.default.createElement(
        Mark,
        {
          unstyled,
          key: i,
          color,
          style: highlightStyles,
          "data-highlight": chunk
        },
        chunk
      ) : /* @__PURE__ */ import_react29.default.createElement("span", { key: i }, chunk)
    )
  );
});
Highlight.displayName = "@raikou/core/Highlight";

// src/SpotlightAction.tsx
var defaultProps15 = {
  dimmedSections: true,
  highlightQuery: false
};
var SpotlightAction = (0, import_core18.factory)(
  (_props, ref) => {
    const props = (0, import_core18.useProps)("SpotlightAction", defaultProps15, _props);
    const _a = props, {
      className,
      style,
      classNames,
      styles,
      id,
      description,
      label,
      leftSection,
      rightSection,
      children,
      dimmedSections,
      highlightQuery,
      highlightColor,
      closeSpotlightOnTrigger,
      onClick,
      onMouseDown,
      keywords,
      vars
    } = _a, others = __objRest(_a, [
      "className",
      "style",
      "classNames",
      "styles",
      "id",
      "description",
      "label",
      "leftSection",
      "rightSection",
      "children",
      "dimmedSections",
      "highlightQuery",
      "highlightColor",
      "closeSpotlightOnTrigger",
      "onClick",
      "onMouseDown",
      "keywords",
      "vars"
    ]);
    const ctx = useSpotlightContext();
    const stylesApi = { classNames, styles };
    const labelNode = highlightQuery && typeof label === "string" ? /* @__PURE__ */ import_react30.default.createElement(
      Highlight,
      __spreadValues({
        component: "span",
        highlight: ctx.query,
        color: highlightColor
      }, ctx.getStyles("actionLabel", stylesApi)),
      label
    ) : /* @__PURE__ */ import_react30.default.createElement("span", __spreadValues({}, ctx.getStyles("actionLabel", stylesApi)), label);
    return /* @__PURE__ */ import_react30.default.createElement(
      UnstyledButton,
      __spreadProps(__spreadValues(__spreadValues({
        ref,
        "data-action": true
      }, ctx.getStyles("action", __spreadValues({ className, style }, stylesApi))), others), {
        onMouseDown: (event) => {
          event.preventDefault();
          onMouseDown == null ? void 0 : onMouseDown(event);
        },
        onClick: (event) => {
          onClick == null ? void 0 : onClick(event);
          if (closeSpotlightOnTrigger != null ? closeSpotlightOnTrigger : ctx.closeOnActionTrigger) {
            spotlightActions.close(ctx.store);
          }
        },
        tabIndex: -1
      }),
      children || /* @__PURE__ */ import_react30.default.createElement(import_react30.default.Fragment, null, leftSection && /* @__PURE__ */ import_react30.default.createElement(
        import_core18.Box,
        __spreadValues({
          component: "span",
          mod: { position: "left", dimmed: dimmedSections }
        }, ctx.getStyles("actionSection", stylesApi)),
        leftSection
      ), /* @__PURE__ */ import_react30.default.createElement("span", __spreadValues({}, ctx.getStyles("actionBody", stylesApi)), labelNode, /* @__PURE__ */ import_react30.default.createElement("span", __spreadValues({}, ctx.getStyles("actionDescription", stylesApi)), description)), rightSection && /* @__PURE__ */ import_react30.default.createElement(
        import_core18.Box,
        __spreadValues({
          component: "span",
          mod: { position: "right", dimmed: dimmedSections }
        }, ctx.getStyles("actionSection", stylesApi)),
        rightSection
      ))
    );
  }
);
SpotlightAction.displayName = "@raikou/spotlight/SpotlightAction";

// src/SpotlightEmpty.tsx
var import_react31 = __toESM(require("react"));
var import_core19 = require("@raikou/core");
var defaultProps16 = {};
var SpotlightEmpty = (0, import_core19.factory)((props, ref) => {
  const _a = (0, import_core19.useProps)(
    "SpotlightEmpty",
    defaultProps16,
    props
  ), { className, style, classNames, styles } = _a, others = __objRest(_a, ["className", "style", "classNames", "styles"]);
  const ctx = useSpotlightContext();
  return /* @__PURE__ */ import_react31.default.createElement(
    import_core19.Box,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("empty", { classNames, styles, className, style })), others)
  );
});
SpotlightEmpty.displayName = "@raikou/spotlight/SpotlightEmpty";

// src/SpotlightFooter.tsx
var import_react32 = __toESM(require("react"));
var import_core20 = require("@raikou/core");
var defaultProps17 = {};
var SpotlightFooter = (0, import_core20.factory)((props, ref) => {
  const _a = (0, import_core20.useProps)(
    "SpotlightFooter",
    defaultProps17,
    props
  ), { className, style, classNames, styles } = _a, others = __objRest(_a, ["className", "style", "classNames", "styles"]);
  const ctx = useSpotlightContext();
  return /* @__PURE__ */ import_react32.default.createElement(
    import_core20.Box,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("footer", { className, classNames, style, styles })), others)
  );
});
SpotlightFooter.displayName = "@raikou/spotlight/SpotlightFooter";

// src/SpotlightActionsGroup.tsx
var import_react33 = __toESM(require("react"));
var import_core21 = require("@raikou/core");
var defaultProps18 = {};
var SpotlightActionsGroup = (0, import_core21.factory)(
  (props, ref) => {
    const _a = (0, import_core21.useProps)("SpotlightActionsGroup", defaultProps18, props), { className, style, styles, classNames, label, children } = _a, others = __objRest(_a, ["className", "style", "styles", "classNames", "label", "children"]);
    const ctx = useSpotlightContext();
    return /* @__PURE__ */ import_react33.default.createElement(
      import_core21.Box,
      __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("actionsGroup", {
        className,
        style,
        classNames,
        styles
      })), {
        ref
      }), others), {
        __vars: { "--spotlight-label": `'${label}'` }
      }),
      children
    );
  }
);
SpotlightActionsGroup.displayName = "@raikou/core/SpotlightActionsGroup";

// src/SpotlightRoot.tsx
var import_react70 = __toESM(require("react"));
var import_core47 = require("@raikou/core");

// ../components/Modal/src/Modal.tsx
var import_react69 = __toESM(require("react"));
var import_core46 = require("@raikou/core");

// ../components/Modal/src/ModalRoot.tsx
var import_react62 = __toESM(require("react"));
var import_core39 = require("@raikou/core");

// ../components/ModalBase/src/ModalBase.tsx
var import_react39 = __toESM(require("react"));

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js
var import_tslib5 = require("tslib");
var React37 = __toESM(require("react"));

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/UI.js
var import_tslib3 = require("tslib");
var React33 = __toESM(require("react"));

// ../../../node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// ../../../node_modules/.pnpm/use-callback-ref@1.3.0_@types+react@18.2.5_react@18.2.0/node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// ../../../node_modules/.pnpm/use-callback-ref@1.3.0_@types+react@18.2.5_react@18.2.0/node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react34 = require("react");
function useCallbackRef3(initialValue, callback) {
  var ref = (0, import_react34.useState)(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// ../../../node_modules/.pnpm/use-callback-ref@1.3.0_@types+react@18.2.5_react@18.2.0/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
function useMergeRefs(refs, defaultValue) {
  return useCallbackRef3(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
}

// ../../../node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.2.5_react@18.2.0/node_modules/use-sidecar/dist/es2015/medium.js
var import_tslib = require("tslib");
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = (0, import_tslib.__assign)({ async: true, ssr: false }, options);
  return medium;
}

// ../../../node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.2.5_react@18.2.0/node_modules/use-sidecar/dist/es2015/exports.js
var import_tslib2 = require("tslib");
var React32 = __toESM(require("react"));
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = (0, import_tslib2.__rest)(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React32.createElement(Target, (0, import_tslib2.__assign)({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React33.forwardRef(function(props, parentRef) {
  var ref = React33.useRef(null);
  var _a = React33.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = (0, import_tslib3.__rest)(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = (0, import_tslib3.__assign)((0, import_tslib3.__assign)({}, rest), callbacks);
  return React33.createElement(
    React33.Fragment,
    null,
    enabled && React33.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? React33.cloneElement(React33.Children.only(children), (0, import_tslib3.__assign)((0, import_tslib3.__assign)({}, containerProps), { ref: containerRef })) : React33.createElement(Container, (0, import_tslib3.__assign)({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var import_tslib4 = require("tslib");
var React36 = __toESM(require("react"));

// ../../../node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React35 = __toESM(require("react"));

// ../../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.5_react@18.2.0/node_modules/react-style-singleton/dist/es2015/hook.js
var React34 = __toESM(require("react"));

// ../../../node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// ../../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.5_react@18.2.0/node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// ../../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.5_react@18.2.0/node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React34.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// ../../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.5_react@18.2.0/node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// ../../../node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// ../../../node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var RemoveScrollBar = function(props) {
  var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? "margin" : _a;
  var gap = React35.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React35.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var ownerDocument = node.ownerDocument;
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
      if (s > d) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    target = target.parentNode;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React36.useRef([]);
  var touchStartRef = React36.useRef([0, 0]);
  var activeAxis = React36.useRef();
  var id = React36.useState(idCounter++)[0];
  var Style2 = React36.useState(styleSingleton)[0];
  var lastProps = React36.useRef(props);
  React36.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React36.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = (0, import_tslib4.__spreadArray)([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React36.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React36.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React36.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React36.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React36.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React36.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React36.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React36.createElement(
    React36.Fragment,
    null,
    inert ? React36.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React36.createElement(RemoveScrollBar, { gapMode: props.gapMode }) : null
  );
}

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React37.forwardRef(function(props, ref) {
  return React37.createElement(RemoveScroll, (0, import_tslib5.__assign)({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// ../components/ModalBase/src/ModalBase.tsx
var import_core23 = require("@raikou/core");

// ../components/Portal/src/Portal.tsx
var import_react35 = __toESM(require("react"));
var import_react_dom = require("react-dom");
var import_hooks12 = require("@raikou/hooks");
var import_core22 = require("@raikou/core");
var defaultProps19 = {};
var Portal = (0, import_react35.forwardRef)((props, ref) => {
  const _a = (0, import_core22.useProps)(
    "Portal",
    defaultProps19,
    props
  ), { children, target, className } = _a, others = __objRest(_a, ["children", "target", "className"]);
  const [mounted, setMounted] = (0, import_react35.useState)(false);
  const nodeRef = (0, import_react35.useRef)(null);
  (0, import_hooks12.useIsomorphicEffect)(() => {
    setMounted(true);
    nodeRef.current = !target ? document.createElement("div") : typeof target === "string" ? document.querySelector(target) : target;
    if (!target && nodeRef.current) {
      document.body.appendChild(nodeRef.current);
    }
    return () => {
      if (!target && nodeRef.current) {
        document.body.removeChild(nodeRef.current);
      }
    };
  }, [target]);
  if (!mounted || !nodeRef.current) {
    return null;
  }
  return (0, import_react_dom.createPortal)(
    /* @__PURE__ */ import_react35.default.createElement("div", __spreadValues({ className, ref }, others), children),
    nodeRef.current
  );
});
Portal.displayName = "@raikou/core/Portal";

// ../components/Portal/src/OptionalPortal.tsx
var import_react36 = __toESM(require("react"));
function OptionalPortal(_a) {
  var _b = _a, {
    withinPortal = true,
    children
  } = _b, others = __objRest(_b, [
    "withinPortal",
    "children"
  ]);
  if (withinPortal) {
    return /* @__PURE__ */ import_react36.default.createElement(Portal, __spreadValues({}, others), children);
  }
  return /* @__PURE__ */ import_react36.default.createElement(import_react36.default.Fragment, null, children);
}
OptionalPortal.displayName = "@raikou/core/OptionalPortal";

// ../components/ModalBase/src/ModalBase.context.ts
var [ModalBaseProvider, useModalBaseContext] = createSafeContext(
  "ModalBase component was not found in tree"
);

// ../components/ModalBase/src/use-modal.ts
var import_react38 = require("react");
var import_hooks14 = require("@raikou/hooks");

// ../components/ModalBase/src/use-lock-scroll.ts
var import_react37 = require("react");
var import_hooks13 = require("@raikou/hooks");
function useLockScroll({ opened, transitionDuration }) {
  const [shouldLockScroll, setShouldLockScroll] = (0, import_react37.useState)(opened);
  const timeout = (0, import_react37.useRef)();
  const reduceMotion = (0, import_hooks13.useReducedMotion)();
  const _transitionDuration = reduceMotion ? 0 : transitionDuration;
  (0, import_react37.useEffect)(() => {
    if (opened) {
      setShouldLockScroll(true);
      window.clearTimeout(timeout.current);
    } else if (_transitionDuration === 0) {
      setShouldLockScroll(false);
    } else {
      timeout.current = window.setTimeout(
        () => setShouldLockScroll(false),
        _transitionDuration
      );
    }
    return () => window.clearTimeout(timeout.current);
  }, [opened, _transitionDuration]);
  return shouldLockScroll;
}

// ../components/ModalBase/src/use-modal.ts
function useModal({
  id,
  transitionProps,
  opened,
  trapFocus,
  closeOnEscape,
  onClose,
  returnFocus
}) {
  const _id = (0, import_hooks14.useId)(id);
  const [titleMounted, setTitleMounted] = (0, import_react38.useState)(false);
  const [bodyMounted, setBodyMounted] = (0, import_react38.useState)(false);
  const transitionDuration = typeof (transitionProps == null ? void 0 : transitionProps.duration) === "number" ? transitionProps == null ? void 0 : transitionProps.duration : 200;
  const shouldLockScroll = useLockScroll({ opened, transitionDuration });
  (0, import_hooks14.useWindowEvent)("keydown", (event) => {
    if (!trapFocus && event.key === "Escape" && closeOnEscape) {
      onClose();
    }
  });
  (0, import_hooks14.useFocusReturn)({ opened, shouldReturnFocus: trapFocus && returnFocus });
  return {
    _id,
    titleMounted,
    bodyMounted,
    shouldLockScroll,
    setTitleMounted,
    setBodyMounted
  };
}

// ../components/ModalBase/src/ModalBase.tsx
var ModalBase = (0, import_react39.forwardRef)(
  (_a, ref) => {
    var _b = _a, {
      keepMounted,
      opened,
      onClose,
      id,
      transitionProps,
      trapFocus,
      closeOnEscape,
      returnFocus,
      closeOnClickOutside,
      withinPortal,
      portalProps,
      lockScroll,
      children,
      zIndex,
      shadow,
      padding,
      __vars
    } = _b, others = __objRest(_b, [
      "keepMounted",
      "opened",
      "onClose",
      "id",
      "transitionProps",
      "trapFocus",
      "closeOnEscape",
      "returnFocus",
      "closeOnClickOutside",
      "withinPortal",
      "portalProps",
      "lockScroll",
      "children",
      "zIndex",
      "shadow",
      "padding",
      "__vars"
    ]);
    const {
      _id,
      titleMounted,
      bodyMounted,
      shouldLockScroll,
      setTitleMounted,
      setBodyMounted
    } = useModal({
      id,
      transitionProps,
      opened,
      trapFocus,
      closeOnEscape,
      onClose,
      returnFocus
    });
    return /* @__PURE__ */ import_react39.default.createElement(OptionalPortal, __spreadProps(__spreadValues({}, portalProps), { withinPortal }), /* @__PURE__ */ import_react39.default.createElement(
      ModalBaseProvider,
      {
        value: {
          opened,
          onClose,
          closeOnClickOutside,
          transitionProps: __spreadProps(__spreadValues({}, transitionProps), { keepMounted }),
          getTitleId: () => `${_id}-title`,
          getBodyId: () => `${_id}-body`,
          titleMounted,
          bodyMounted,
          setTitleMounted,
          setBodyMounted,
          trapFocus,
          closeOnEscape,
          zIndex
        }
      },
      /* @__PURE__ */ import_react39.default.createElement(Combination_default, { enabled: shouldLockScroll && lockScroll }, /* @__PURE__ */ import_react39.default.createElement(
        import_core23.Box,
        __spreadProps(__spreadValues({
          ref
        }, others), {
          __vars: __spreadProps(__spreadValues({}, __vars), {
            "--mb-z-index": (zIndex || (0, import_core23.getDefaultZIndex)("modal")).toString(),
            "--mb-shadow": (0, import_core23.getShadow)(shadow),
            "--mb-padding": (0, import_core23.getSpacing)(padding)
          })
        }),
        children
      ))
    ));
  }
);

// ../components/ModalBase/src/ModalBaseBody.tsx
var import_react41 = __toESM(require("react"));

// ../../../node_modules/.pnpm/clsx@2.0.0/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// ../components/ModalBase/src/ModalBaseBody.tsx
var import_core24 = require("@raikou/core");

// ../components/ModalBase/src/use-modal-body-id.ts
var import_react40 = require("react");
function useModalBodyId() {
  const ctx = useModalBaseContext();
  (0, import_react40.useEffect)(() => {
    ctx.setBodyMounted(true);
    return () => ctx.setBodyMounted(false);
  }, []);
  return ctx.getBodyId();
}

// ../components/ModalBase/src/ModalBaseBody.tsx
var ModalBaseBody = (0, import_react41.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    const bodyId = useModalBodyId();
    return /* @__PURE__ */ import_react41.default.createElement(
      import_core24.Box,
      __spreadProps(__spreadValues({
        ref
      }, others), {
        id: bodyId,
        className: clsx_default("modalBase-body", className)
      })
    );
  }
);
ModalBaseBody.displayName = "@raikou/core/ModalBaseBody";

// ../components/ModalBase/src/ModalBaseCloseButton.tsx
var import_react50 = __toESM(require("react"));

// ../components/CloseButton/src/CloseIcon.tsx
var import_react42 = __toESM(require("react"));
var CloseIcon = (0, import_react42.forwardRef)(
  (_a, ref) => {
    var _b = _a, { size = "var(--cb-icon-size)", style } = _b, others = __objRest(_b, ["size", "style"]);
    return /* @__PURE__ */ import_react42.default.createElement(
      "svg",
      __spreadValues({
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: __spreadProps(__spreadValues({}, style), { width: size, height: size }),
        ref
      }, others),
      /* @__PURE__ */ import_react42.default.createElement(
        "path",
        {
          d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    );
  }
);
CloseIcon.displayName = "@raikou/core/CloseIcon";

// ../components/CloseButton/src/CloseButton.tsx
var import_react49 = __toESM(require("react"));
var import_core31 = require("@raikou/core");

// ../components/ActionIcon/src/ActionIcon.tsx
var import_react48 = __toESM(require("react"));
var import_core30 = require("@raikou/core");

// ../components/Loader/src/Loader.tsx
var import_react46 = __toESM(require("react"));
var import_core28 = require("@raikou/core");

// ../components/Loader/src/loaders/Bars.tsx
var import_react43 = __toESM(require("react"));
var import_core25 = require("@raikou/core");
var Bars = (0, import_react43.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react43.default.createElement(
      import_core25.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("bars-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react43.default.createElement("span", { className: "bar" }),
      /* @__PURE__ */ import_react43.default.createElement("span", { className: "bar" }),
      /* @__PURE__ */ import_react43.default.createElement("span", { className: "bar" })
    );
  }
);

// ../components/Loader/src/loaders/Oval.tsx
var import_react44 = __toESM(require("react"));
var import_core26 = require("@raikou/core");
var Oval = (0, import_react44.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react44.default.createElement(
      import_core26.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("oval-loader", className)
      }, others), {
        ref
      })
    );
  }
);

// ../components/Loader/src/loaders/Dots.tsx
var import_react45 = __toESM(require("react"));
var import_core27 = require("@raikou/core");
var Dots = (0, import_react45.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react45.default.createElement(
      import_core27.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("dots-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react45.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react45.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react45.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react45.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react45.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react45.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react45.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react45.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react45.default.createElement("span", { className: "dot" })
    );
  }
);

// ../components/Loader/src/Loader.tsx
var defaultLoaders = {
  bars: Bars,
  oval: Oval,
  dots: Dots
};
var defaultProps20 = {
  size: "md",
  loaders: defaultLoaders,
  type: "oval"
};
var varsResolver9 = (0, import_core28.createVarsResolver)(
  (theme, { size, color }) => ({
    root: {
      "--loader-size": (0, import_core28.getSize)(size, "loader-size"),
      "--loader-color": (0, import_core28.getThemeColor)(color, theme)
    }
  })
);
var Loader = (0, import_core28.factory)((_props, ref) => {
  const props = (0, import_core28.useProps)("Loader", defaultProps20, _props);
  const _a = props, {
    size,
    color,
    type,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    loaders,
    variant
  } = _a, others = __objRest(_a, [
    "size",
    "color",
    "type",
    "vars",
    "className",
    "style",
    "classNames",
    "styles",
    "unstyled",
    "loaders",
    "variant"
  ]);
  const getStyles2 = (0, import_core28.useStyles)({
    name: "Loader",
    props,
    classes: {
      root: "loader-root"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver9
  });
  return /* @__PURE__ */ import_react46.default.createElement(
    import_core28.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles2("root")), {
      ref,
      component: loaders[type],
      variant,
      size
    }), others)
  );
});
Loader.displayName = "@raikou/core/Loader";

// ../components/ActionIcon/src/ActionIconGroup/ActionIconGroup.tsx
var import_react47 = __toESM(require("react"));
var import_core29 = require("@raikou/core");
var defaultProps21 = {
  orientation: "horizontal",
  borderWidth: 1
};
var varsResolver10 = (0, import_core29.createVarsResolver)(
  (_, { borderWidth }) => ({
    group: { "--ai-border-width": (0, import_core29.rem)(borderWidth) }
  })
);
var ActionIconGroup = (0, import_core29.factory)(
  (_props, ref) => {
    const props = (0, import_core29.useProps)("ActionIconGroup", defaultProps21, _props);
    const _a = (0, import_core29.useProps)("ActionIconGroup", defaultProps21, _props), {
      className,
      style,
      classNames,
      styles,
      unstyled,
      orientation,
      vars,
      borderWidth,
      variant
    } = _a, others = __objRest(_a, [
      "className",
      "style",
      "classNames",
      "styles",
      "unstyled",
      "orientation",
      "vars",
      "borderWidth",
      "variant"
    ]);
    const getStyles2 = (0, import_core29.useStyles)({
      name: "ActionIconGroup",
      props,
      classes: {
        group: "actionIconGroup-root"
      },
      className,
      style,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver10,
      rootSelector: "group"
    });
    return /* @__PURE__ */ import_react47.default.createElement(
      import_core29.Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles2("group")), {
        ref,
        variant,
        mod: { "data-orientation": orientation },
        role: "group"
      }), others)
    );
  }
);
ActionIconGroup.displayName = "@raikou/core/ActionIconGroup";

// ../components/ActionIcon/src/ActionIcon.tsx
var defaultProps22 = {
  variant: "filled",
  size: "md"
};
var varsResolver11 = (0, import_core30.createVarsResolver)(
  (theme, { size, radius, variant, gradient, color }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant
    });
    return {
      root: {
        "--ai-size": (0, import_core30.getSize)(size, "ai-size"),
        "--ai-radius": (0, import_core30.getRadius)(radius),
        "--ai-bg": colors.background,
        "--ai-hover": colors.hover,
        "--ai-color": colors.color,
        "--ai-bd": colors.border
      }
    };
  }
);
var ActionIcon = (0, import_core30.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core30.useProps)("ActionIcon", defaultProps22, _props);
    const _a = props, {
      className,
      unstyled,
      variant,
      classNames,
      styles,
      style,
      loading,
      loaderProps,
      size,
      color,
      radius,
      __staticSelector,
      gradient,
      vars,
      children,
      disabled,
      "data-disabled": dataDisabled
    } = _a, others = __objRest(_a, [
      "className",
      "unstyled",
      "variant",
      "classNames",
      "styles",
      "style",
      "loading",
      "loaderProps",
      "size",
      "color",
      "radius",
      "__staticSelector",
      "gradient",
      "vars",
      "children",
      "disabled",
      "data-disabled"
    ]);
    const getStyles2 = (0, import_core30.useStyles)({
      name: ["ActionIcon", __staticSelector],
      props,
      className,
      style,
      classes: {
        root: "actionIcon-root",
        loader: "actionIcon-loader"
      },
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver11
    });
    return /* @__PURE__ */ import_react48.default.createElement(
      UnstyledButton,
      __spreadProps(__spreadValues(__spreadValues({}, getStyles2("root", {
        active: !disabled && !loading && !dataDisabled
      })), others), {
        unstyled,
        variant,
        size,
        disabled: disabled || loading,
        ref,
        mod: { loading, disabled: disabled || dataDisabled }
      }),
      loading ? /* @__PURE__ */ import_react48.default.createElement(
        Loader,
        __spreadValues(__spreadProps(__spreadValues({}, getStyles2("loader")), {
          color: "var(--ai-color)",
          size: "calc(var(--ai-size) * 0.55)"
        }), loaderProps)
      ) : children
    );
  }
);
ActionIcon.displayName = "@raikou/core/ActionIcon";
ActionIcon.Group = ActionIconGroup;

// ../components/CloseButton/src/CloseButton.tsx
var defaultProps23 = {
  iconSize: "70%",
  variant: "subtle",
  color: "gray"
};
var CloseButton = (0, import_core31.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core31.useProps)("CloseButton", defaultProps23, _props);
    const _a = props, { iconSize, children, vars } = _a, others = __objRest(_a, ["iconSize", "children", "vars"]);
    return /* @__PURE__ */ import_react49.default.createElement(
      ActionIcon,
      __spreadProps(__spreadValues({
        ref
      }, others), {
        __vars: { "--cb-icon-size": (0, import_core31.rem)(iconSize) },
        __staticSelector: "CloseButton"
      }),
      /* @__PURE__ */ import_react49.default.createElement(CloseIcon, null),
      children
    );
  }
);
CloseButton.displayName = "@raikou/core/CloseButton";

// ../components/ModalBase/src/ModalBaseCloseButton.tsx
var ModalBaseCloseButton = (0, import_react50.forwardRef)((_a, ref) => {
  var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
  const ctx = useModalBaseContext();
  return (
    // @ts-ignore
    /* @__PURE__ */ import_react50.default.createElement(
      CloseButton,
      __spreadProps(__spreadValues({
        ref
      }, others), {
        onClick: ctx.onClose,
        className: clsx_default("modalBase-close", className)
      })
    )
  );
});
ModalBaseCloseButton.displayName = "@raikou/core/ModalBaseCloseButton";

// ../components/ModalBase/src/ModalBaseContent.tsx
var import_react55 = __toESM(require("react"));

// ../components/Transition/src/transitions.ts
var import_core32 = require("@raikou/core");
var popIn = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${(0, import_core32.rem)(10)})` },
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
      transform: `translateY(-${(0, import_core32.rem)(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: {
      opacity: 0,
      transform: `translateY(${(0, import_core32.rem)(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${(0, import_core32.rem)(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${(0, import_core32.rem)(20)}) rotate(5deg)` },
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

// ../components/Transition/src/Transition.tsx
var import_react52 = __toESM(require("react"));

// ../components/Transition/src/get-transition-styles/get-transition-styles.ts
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

// ../components/Transition/src/use-transition.ts
var import_react51 = require("react");
var import_hooks15 = require("@raikou/hooks");
var import_core33 = require("@raikou/core");
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
  const theme = (0, import_core33.useRaikouTheme)();
  const shouldReduceMotion = (0, import_hooks15.useReducedMotion)();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionDuration, setTransitionDuration] = (0, import_react51.useState)(
    reduceMotion ? 0 : duration
  );
  const [transitionStatus, setStatus] = (0, import_react51.useState)(
    mounted ? "entered" : "exited"
  );
  const timeoutRef = (0, import_react51.useRef)(-1);
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
  (0, import_hooks15.useDidUpdate)(() => {
    handleStateChange(mounted);
  }, [mounted]);
  (0, import_react51.useEffect)(() => () => window.clearTimeout(timeoutRef.current), []);
  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || "ease"
  };
}

// ../components/Transition/src/Transition.tsx
function Transition({
  keepMounted,
  transition = "fade",
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
    return mounted ? /* @__PURE__ */ import_react52.default.createElement(import_react52.default.Fragment, null, children({})) : keepMounted ? children({ display: "none" }) : null;
  }
  return transitionStatus === "exited" ? keepMounted ? children({ display: "none" }) : null : /* @__PURE__ */ import_react52.default.createElement(import_react52.default.Fragment, null, children(
    getTransitionStyles({
      transition,
      duration: transitionDuration,
      state: transitionStatus,
      timingFunction: transitionTimingFunction
    })
  ));
}
Transition.displayName = "@raikou/core/Transition";

// ../components/FocusTrap/src/FocusTrap.tsx
var import_react53 = require("react");
var import_hooks16 = require("@raikou/hooks");
var import_core34 = require("@raikou/core");
function FocusTrap({
  children,
  active = true,
  refProp = "ref"
}) {
  const focusTrapRef = (0, import_hooks16.useFocusTrap)(active);
  const ref = (0, import_hooks16.useMergedRef)(focusTrapRef, children == null ? void 0 : children.ref);
  if (!(0, import_core34.isElement)(children)) {
    return children;
  }
  return (0, import_react53.cloneElement)(children, { [refProp]: ref });
}
FocusTrap.displayName = "@raikou/core/FocusTrap";

// ../components/Paper/src/Paper.tsx
var import_react54 = __toESM(require("react"));
var import_core35 = require("@raikou/core");
var defaultProps24 = {};
var varsResolver12 = (0, import_core35.createVarsResolver)(
  (_, { radius, shadow }) => ({
    root: {
      "--paper-radius": (0, import_core35.getRadius)(radius),
      "--paper-shadow": (0, import_core35.getShadow)(shadow)
    }
  })
);
var Paper = (0, import_core35.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core35.useProps)("Paper", defaultProps24, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    withBorder,
    vars,
    radius,
    shadow,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "withBorder",
    "vars",
    "radius",
    "shadow",
    "variant"
  ]);
  const getStyles2 = (0, import_core35.useStyles)({
    name: "Paper",
    props,
    classes: {
      root: "paper-root"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver12
  });
  return /* @__PURE__ */ import_react54.default.createElement(
    import_core35.Box,
    __spreadValues(__spreadProps(__spreadValues({
      ref,
      mod: { "data-with-border": withBorder }
    }, getStyles2("root")), {
      variant
    }), others)
  );
});
Paper.displayName = "@raikou/core/Paper";

// ../components/ModalBase/src/ModalBaseContent.tsx
var ModalBaseContent = (0, import_react55.forwardRef)(
  (_a, ref) => {
    var _b = _a, { transitionProps, className, innerProps, onKeyDown, style } = _b, others = __objRest(_b, ["transitionProps", "className", "innerProps", "onKeyDown", "style"]);
    const ctx = useModalBaseContext();
    const handleKeyDown = (event) => {
      var _a2;
      const shouldTrigger = ((_a2 = event.target) == null ? void 0 : _a2.getAttribute(
        "data-raikou-stop-propagation"
      )) !== "true";
      shouldTrigger && event.key === "Escape" && ctx.closeOnEscape && ctx.onClose();
      onKeyDown == null ? void 0 : onKeyDown(event);
    };
    return /* @__PURE__ */ import_react55.default.createElement(
      Transition,
      __spreadValues(__spreadValues({
        mounted: ctx.opened,
        transition: "pop"
      }, ctx.transitionProps), transitionProps),
      (transitionStyles) => /* @__PURE__ */ import_react55.default.createElement(
        "div",
        __spreadProps(__spreadValues({}, innerProps), {
          className: clsx_default("modalBase-inner", innerProps.className)
        }),
        /* @__PURE__ */ import_react55.default.createElement(FocusTrap, { active: ctx.opened && ctx.trapFocus }, /* @__PURE__ */ import_react55.default.createElement(
          Paper,
          __spreadProps(__spreadValues({}, others), {
            component: "section",
            role: "dialog",
            tabIndex: -1,
            "aria-modal": true,
            "aria-describedby": ctx.bodyMounted ? ctx.getBodyId() : void 0,
            "aria-labelledby": ctx.titleMounted ? ctx.getTitleId() : void 0,
            onKeyDown: handleKeyDown,
            ref,
            style: [style, transitionStyles],
            className: clsx_default("modalBase-content", className)
          }),
          others.children
        ))
      )
    );
  }
);
ModalBaseContent.displayName = "@raikou/core/ModalBaseContent";

// ../components/ModalBase/src/ModalBaseHeader.tsx
var import_react56 = __toESM(require("react"));
var import_core36 = require("@raikou/core");
var ModalBaseHeader = (0, import_react56.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react56.default.createElement(import_core36.Box, __spreadValues({ ref, className: clsx_default("modalBase-header", className) }, others));
  }
);
ModalBaseHeader.displayName = "@raikou/core/ModalBaseHeader";

// ../components/ModalBase/src/ModalBaseOverlay.tsx
var import_react58 = __toESM(require("react"));

// ../components/Overlay/src/Overlay.tsx
var import_react57 = __toESM(require("react"));
var import_core37 = require("@raikou/core");
var defaultProps25 = {
  color: "#000",
  backgroundOpacity: 0.6,
  zIndex: (0, import_core37.getDefaultZIndex)("modal"),
  radius: 0
};
var varsResolver13 = (0, import_core37.createVarsResolver)(
  (_, { gradient, color, backgroundOpacity, blur, radius, zIndex }) => ({
    root: {
      "--overlay-bg": gradient || (0, import_core37.rgba)(color || "#000", backgroundOpacity != null ? backgroundOpacity : 0.6),
      "--overlay-filter": blur ? `blur(${(0, import_core37.rem)(blur)})` : void 0,
      "--overlay-radius": (0, import_core37.getRadius)(radius),
      "--overlay-z-index": zIndex == null ? void 0 : zIndex.toString()
    }
  })
);
var Overlay = (0, import_core37.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core37.useProps)("Overlay", defaultProps25, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    fixed,
    center,
    children,
    radius,
    zIndex,
    gradient,
    blur,
    color,
    backgroundOpacity
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "fixed",
    "center",
    "children",
    "radius",
    "zIndex",
    "gradient",
    "blur",
    "color",
    "backgroundOpacity"
  ]);
  const getStyles2 = (0, import_core37.useStyles)({
    name: "Overlay",
    props,
    classes: {
      root: "overlay-root"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver13
  });
  return /* @__PURE__ */ import_react57.default.createElement(import_core37.Box, __spreadValues(__spreadProps(__spreadValues({ ref }, getStyles2("root")), { mod: { center, fixed } }), others), children);
});
Overlay.displayName = "@raikou/core/Overlay";

// ../components/ModalBase/src/use-modal-transition.ts
var DEFAULT_TRANSITION = {
  duration: 200,
  timingFunction: "ease",
  transition: "fade"
};
function useModalTransition(transitionOverride) {
  const ctx = useModalBaseContext();
  return __spreadValues(__spreadValues(__spreadValues({}, DEFAULT_TRANSITION), ctx.transitionProps), transitionOverride);
}

// ../components/ModalBase/src/ModalBaseOverlay.tsx
var ModalBaseOverlay = (0, import_react58.forwardRef)((_a, ref) => {
  var _b = _a, { onClick, transitionProps, style } = _b, others = __objRest(_b, ["onClick", "transitionProps", "style"]);
  const ctx = useModalBaseContext();
  const transition = useModalTransition(transitionProps);
  return /* @__PURE__ */ import_react58.default.createElement(Transition, __spreadProps(__spreadValues({ mounted: ctx.opened }, transition), { transition: "fade" }), (transitionStyles) => /* @__PURE__ */ import_react58.default.createElement(
    Overlay,
    __spreadValues({
      ref,
      fixed: true,
      style: [style, transitionStyles],
      zIndex: ctx.zIndex,
      radius: 0,
      onClick: (event) => {
        onClick == null ? void 0 : onClick(event);
        ctx.closeOnClickOutside && ctx.onClose();
      }
    }, others)
  ));
});
ModalBaseOverlay.displayName = "@raikou/core/ModalBaseOverlay";

// ../components/ModalBase/src/ModalBaseTitle.tsx
var import_react60 = __toESM(require("react"));
var import_core38 = require("@raikou/core");

// ../components/ModalBase/src/use-modal-title-id.ts
var import_react59 = require("react");
function useModalTitle() {
  const ctx = useModalBaseContext();
  (0, import_react59.useEffect)(() => {
    ctx.setTitleMounted(true);
    return () => ctx.setTitleMounted(false);
  }, []);
  return ctx.getTitleId();
}

// ../components/ModalBase/src/ModalBaseTitle.tsx
var ModalBaseTitle = (0, import_react60.forwardRef)((_a, ref) => {
  var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
  const id = useModalTitle();
  return /* @__PURE__ */ import_react60.default.createElement(
    import_core38.Box,
    __spreadProps(__spreadValues({
      component: "h2",
      ref,
      className: clsx_default("modalBase-title", className)
    }, others), {
      id
    })
  );
});
ModalBaseTitle.displayName = "@raikou/core/ModalBaseTitle";

// ../components/ModalBase/src/NativeScrollArea.tsx
var import_react61 = __toESM(require("react"));
function NativeScrollArea({ children }) {
  return /* @__PURE__ */ import_react61.default.createElement(import_react61.default.Fragment, null, children);
}

// ../components/Modal/src/Modal.context.ts
var [ModalProvider, useModalContext] = createSafeContext(
  "Modal component was not found in tree"
);

// ../components/Modal/src/ModalRoot.tsx
var defaultProps26 = {
  __staticSelector: "Modal",
  yOffset: "5dvh",
  xOffset: "5vw",
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: (0, import_core39.getDefaultZIndex)("modal"),
  padding: "md",
  size: "md",
  shadow: "xl",
  transitionProps: { duration: 200, transition: "pop" }
};
var varsResolver14 = (0, import_core39.createVarsResolver)(
  (_, { radius, size, yOffset, xOffset }) => ({
    root: {
      "--modal-radius": (0, import_core39.getRadius)(radius),
      "--modal-size": (0, import_core39.getSize)(size, "modal-size"),
      "--modal-y-offset": (0, import_core39.rem)(yOffset),
      "--modal-x-offset": (0, import_core39.rem)(xOffset)
    }
  })
);
var ModalRoot = (0, import_core39.factory)((_props, ref) => {
  const props = (0, import_core39.useProps)("ModalRoot", defaultProps26, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    yOffset,
    scrollAreaComponent,
    radius,
    fullScreen,
    centered,
    xOffset,
    __staticSelector
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "yOffset",
    "scrollAreaComponent",
    "radius",
    "fullScreen",
    "centered",
    "xOffset",
    "__staticSelector"
  ]);
  const getStyles2 = (0, import_core39.useStyles)({
    name: __staticSelector,
    classes: {
      root: "modal-root",
      header: "modal-header",
      content: "modal-content",
      inner: "modal-inner",
      title: "modal-title",
      body: "modal-body",
      overlay: "modal-overlay",
      close: "modal-close"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver14
  });
  return /* @__PURE__ */ import_react62.default.createElement(ModalProvider, { value: { yOffset, scrollAreaComponent, getStyles: getStyles2 } }, /* @__PURE__ */ import_react62.default.createElement(
    ModalBase,
    __spreadValues(__spreadProps(__spreadValues({
      ref
    }, getStyles2("root")), {
      "data-full-screen": fullScreen || void 0,
      "data-centered": centered || void 0
    }), others)
  ));
});
ModalRoot.displayName = "@raikou/core/ModalRoot";

// ../components/Modal/src/ModalBody.tsx
var import_react63 = __toESM(require("react"));
var import_core40 = require("@raikou/core");
var defaultProps27 = {};
var ModalBody = (0, import_core40.factory)((_props, ref) => {
  const props = (0, import_core40.useProps)("ModalBody", defaultProps27, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars"]);
  const ctx = useModalContext();
  return /* @__PURE__ */ import_react63.default.createElement(
    ModalBaseBody,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("body", { classNames, style, styles, className })), others)
  );
});
ModalBody.displayName = "@raikou/core/ModalBody";

// ../components/Modal/src/ModalCloseButton.tsx
var import_react64 = __toESM(require("react"));
var import_core41 = require("@raikou/core");
var defaultProps28 = {};
var ModalCloseButton = (0, import_core41.factory)(
  (_props, ref) => {
    const props = (0, import_core41.useProps)("ModalCloseButton", defaultProps28, _props);
    const _a = props, { classNames, className, style, styles, unstyled, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars"]);
    const ctx = useModalContext();
    return /* @__PURE__ */ import_react64.default.createElement(
      ModalBaseCloseButton,
      __spreadValues(__spreadValues({
        ref
      }, ctx.getStyles("close", { classNames, style, styles, className })), others)
    );
  }
);
ModalCloseButton.displayName = "@raikou/core/ModalCloseButton";

// ../components/Modal/src/ModalOverlay.tsx
var import_react65 = __toESM(require("react"));
var import_core42 = require("@raikou/core");
var defaultProps29 = {};
var ModalOverlay = (0, import_core42.factory)((_props, ref) => {
  const props = (0, import_core42.useProps)("ModalOverlay", defaultProps29, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars"]);
  const ctx = useModalContext();
  return /* @__PURE__ */ import_react65.default.createElement(
    ModalBaseOverlay,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("overlay", { classNames, style, styles, className })), others)
  );
});
ModalOverlay.displayName = "@raikou/core/ModalOverlay";

// ../components/Modal/src/ModalContent.tsx
var import_react66 = __toESM(require("react"));
var import_core43 = require("@raikou/core");
var defaultProps30 = {};
var ModalContent = (0, import_core43.factory)((_props, ref) => {
  const props = (0, import_core43.useProps)("ModalContent", defaultProps30, _props);
  const _a = props, { classNames, className, style, styles, vars, children } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars", "children"]);
  const ctx = useModalContext();
  const Scroll = ctx.scrollAreaComponent || NativeScrollArea;
  return /* @__PURE__ */ import_react66.default.createElement(
    ModalBaseContent,
    __spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("content", { className, style, styles, classNames })), {
      innerProps: ctx.getStyles("inner", {
        className,
        style,
        styles,
        classNames
      }),
      ref
    }), others),
    /* @__PURE__ */ import_react66.default.createElement(Scroll, { style: { maxHeight: `calc(100vh - (${(0, import_core43.rem)(ctx.yOffset)} * 2))` } }, children)
  );
});
ModalContent.displayName = "@raikou/core/ModalContent";

// ../components/Modal/src/ModalTitle.tsx
var import_react67 = __toESM(require("react"));
var import_core44 = require("@raikou/core");
var defaultProps31 = {};
var ModalTitle = (0, import_core44.factory)((_props, ref) => {
  const props = (0, import_core44.useProps)("ModalTitle", defaultProps31, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars"]);
  const ctx = useModalContext();
  return /* @__PURE__ */ import_react67.default.createElement(
    ModalBaseTitle,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("title", { classNames, style, styles, className })), others)
  );
});
ModalTitle.displayName = "@raikou/core/ModalTitle";

// ../components/Modal/src/ModalHeader.tsx
var import_react68 = __toESM(require("react"));
var import_core45 = require("@raikou/core");
var defaultProps32 = {};
var ModalHeader = (0, import_core45.factory)((_props, ref) => {
  const props = (0, import_core45.useProps)("ModalHeader", defaultProps32, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars"]);
  const ctx = useModalContext();
  return /* @__PURE__ */ import_react68.default.createElement(
    ModalBaseHeader,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("header", { classNames, style, styles, className })), others)
  );
});
ModalHeader.displayName = "@raikou/core/ModalHeader";

// ../components/Modal/src/Modal.tsx
var defaultProps33 = {
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: (0, import_core46.getDefaultZIndex)("modal"),
  padding: "md",
  size: "md",
  shadow: "xl",
  transitionProps: { duration: 200, transition: "pop" },
  withOverlay: true,
  withCloseButton: true
};
var Modal = (0, import_core46.factory)((_props, ref) => {
  const _a = (0, import_core46.useProps)("Modal", defaultProps33, _props), {
    title,
    withOverlay,
    overlayProps,
    withCloseButton,
    closeButtonProps,
    children,
    radius
  } = _a, others = __objRest(_a, [
    "title",
    "withOverlay",
    "overlayProps",
    "withCloseButton",
    "closeButtonProps",
    "children",
    "radius"
  ]);
  const hasHeader = !!title || withCloseButton;
  return /* @__PURE__ */ import_react69.default.createElement(ModalRoot, __spreadValues({ ref }, others), withOverlay && /* @__PURE__ */ import_react69.default.createElement(ModalOverlay, __spreadValues({}, overlayProps)), /* @__PURE__ */ import_react69.default.createElement(ModalContent, { radius }, hasHeader && /* @__PURE__ */ import_react69.default.createElement(ModalHeader, null, title && /* @__PURE__ */ import_react69.default.createElement(ModalTitle, null, title), withCloseButton && /* @__PURE__ */ import_react69.default.createElement(ModalCloseButton, __spreadValues({}, closeButtonProps))), /* @__PURE__ */ import_react69.default.createElement(ModalBody, null, children)));
});
Modal.displayName = "@raikou/core/Modal";
Modal.Root = ModalRoot;
Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;
Modal.Body = ModalBody;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.CloseButton = ModalCloseButton;

// src/SpotlightRoot.tsx
var import_hooks17 = require("@raikou/hooks");

// src/get-hotkeys.ts
function getHotkeys(hotkeys, store) {
  if (!hotkeys) {
    return [];
  }
  const open = () => spotlightActions.open(store);
  if (Array.isArray(hotkeys)) {
    return hotkeys.map((hotkey) => [hotkey, open]);
  }
  return [[hotkeys, open]];
}

// src/SpotlightRoot.tsx
var defaultProps34 = {
  size: 600,
  yOffset: 80,
  zIndex: (0, import_core47.getDefaultZIndex)("max"),
  overlayProps: { backgroundOpacity: 0.35, blur: 7 },
  transitionProps: { duration: 200, transition: "pop" },
  store: spotlightStore,
  clearQueryOnClose: true,
  closeOnActionTrigger: true,
  shortcut: "mod + K",
  maxHeight: 400,
  scrollable: false
};
var SpotlightRoot = (0, import_core47.factory)((_props, ref) => {
  const props = (0, import_core47.useProps)("SpotlightRoot", defaultProps34, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    store,
    children,
    query,
    onQueryChange,
    transitionProps,
    clearQueryOnClose,
    shortcut,
    tagsToIgnore,
    triggerOnContentEditable,
    disabled,
    onSpotlightOpen,
    onSpotlightClose,
    forceOpened,
    closeOnActionTrigger,
    maxHeight,
    scrollable
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "store",
    "children",
    "query",
    "onQueryChange",
    "transitionProps",
    "clearQueryOnClose",
    "shortcut",
    "tagsToIgnore",
    "triggerOnContentEditable",
    "disabled",
    "onSpotlightOpen",
    "onSpotlightClose",
    "forceOpened",
    "closeOnActionTrigger",
    "maxHeight",
    "scrollable"
  ]);
  const theme = (0, import_core47.useRaikouTheme)();
  const { opened, query: storeQuery } = useSpotlight(store);
  const _query = query || storeQuery;
  const setQuery2 = (q) => {
    onQueryChange == null ? void 0 : onQueryChange(q);
    spotlightActions.setQuery(q, store);
  };
  const getStyles2 = (0, import_core47.useStyles)({
    name: "Spotlight",
    classes: {
      root: "spotlight-root",
      content: "spotlight-content",
      body: "spotlight-body",
      search: "spotlight-search",
      actionsList: "spotlight-actionsList",
      action: "spotlight-action",
      actionBody: "spotlight-actionBody",
      actionSection: "spotlight-actionSection",
      actionLabel: "spotlight-actionLabel",
      actionDescription: "spotlight-actionDescription",
      empty: "spotlight-empty",
      footer: "spotlight-footer",
      actionsGroup: "spotlight-actionsGroup"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled
  });
  (0, import_hooks17.useHotkeys)(
    getHotkeys(shortcut, store),
    tagsToIgnore,
    triggerOnContentEditable
  );
  (0, import_hooks17.useDidUpdate)(() => {
    opened ? onSpotlightOpen == null ? void 0 : onSpotlightOpen() : onSpotlightClose == null ? void 0 : onSpotlightClose();
  }, [opened]);
  if (disabled) {
    return null;
  }
  return /* @__PURE__ */ import_react70.default.createElement(
    SpotlightProvider,
    {
      value: {
        getStyles: getStyles2,
        query: _query,
        setQuery: setQuery2,
        store,
        closeOnActionTrigger
      }
    },
    /* @__PURE__ */ import_react70.default.createElement(
      Modal,
      __spreadProps(__spreadValues({
        ref
      }, others), {
        withCloseButton: false,
        opened: opened || !!forceOpened,
        padding: 0,
        onClose: () => spotlightActions.close(store),
        className,
        style,
        classNames: (0, import_core47.resolveClassNames)({
          theme,
          classNames: [
            {
              root: "spotlight-root",
              content: "spotlight-content",
              body: "spotlight-body",
              search: "spotlight-search",
              actionsList: "spotlight-actionsList",
              action: "spotlight-action",
              actionBody: "spotlight-actionBody",
              actionSection: "spotlight-actionSection",
              actionLabel: "spotlight-actionLabel",
              actionDescription: "spotlight-actionDescription",
              empty: "spotlight-empty",
              footer: "spotlight-footer",
              actionsGroup: "spotlight-actionsGroup"
            },
            classNames
          ],
          props,
          stylesCtx: void 0
        }),
        styles: (0, import_core47.resolveStyles)({ theme, styles, props, stylesCtx: void 0 }),
        transitionProps: __spreadProps(__spreadValues({}, transitionProps), {
          onExited: () => {
            var _a2;
            clearQueryOnClose && setQuery2("");
            spotlightActions.clearSpotlightState(
              { clearQuery: clearQueryOnClose },
              store
            );
            (_a2 = transitionProps == null ? void 0 : transitionProps.onExited) == null ? void 0 : _a2.call(transitionProps);
          }
        }),
        __vars: {
          "--spotlight-max-height": scrollable ? (0, import_core47.rem)(maxHeight) : void 0
        },
        __staticSelector: "Spotlight",
        "data-scrollable": scrollable || void 0
      }),
      children
    )
  );
});
SpotlightRoot.displayName = "@raikou/spotlight/SpotlightRoot";

// src/default-spotlight-filter.ts
function getKeywords(keywords) {
  if (Array.isArray(keywords)) {
    return keywords.map((keyword) => keyword.trim()).join(",").toLowerCase().trim();
  }
  if (typeof keywords === "string") {
    return keywords.toLowerCase().trim();
  }
  return "";
}
function getFlatActions(data) {
  return data.reduce((acc, item) => {
    if ("actions" in item) {
      return [...acc, ...item.actions.map((action) => __spreadProps(__spreadValues({}, action), { group: item.group }))];
    }
    return [...acc, item];
  }, []);
}
function flatActionsToGroups(data) {
  const groups = {};
  const result = [];
  data.forEach((action) => {
    if (action.group) {
      if (!groups[action.group]) {
        groups[action.group] = { pushed: false, data: { group: action.group, actions: [] } };
      }
      groups[action.group].data.actions.push(action);
      if (!groups[action.group].pushed) {
        groups[action.group].pushed = true;
        result.push(groups[action.group].data);
      }
    } else {
      result.push(action);
    }
  });
  return result;
}
var defaultSpotlightFilter = (_query, data) => {
  const query = _query.trim().toLowerCase();
  const priorityMatrix = [[], []];
  const flatActions = getFlatActions(data);
  flatActions.forEach((item) => {
    var _a, _b;
    if ((_a = item.label) == null ? void 0 : _a.toLowerCase().includes(query)) {
      priorityMatrix[0].push(item);
    } else if (((_b = item.description) == null ? void 0 : _b.toLowerCase().includes(query)) || getKeywords(item.keywords).includes(query)) {
      priorityMatrix[1].push(item);
    }
  });
  return flatActionsToGroups(priorityMatrix.flat());
};

// src/limit-actions.ts
function limitActions(actions, limit) {
  const result = [];
  if (!Array.isArray(actions)) {
    return [];
  }
  for (let i = 0; i < actions.length; i += 1) {
    const item = actions[i];
    if (result.length >= limit) {
      return result;
    }
    if (isActionsGroup(item)) {
      result.push({
        group: item.group,
        actions: limitActions(item.actions, limit - result.length)
      });
    }
    if (!isActionsGroup(item)) {
      result.push(item);
    }
  }
  return result;
}

// src/Spotlight.tsx
var defaultProps35 = {
  size: 600,
  yOffset: 80,
  limit: Infinity,
  zIndex: (0, import_core48.getDefaultZIndex)("max"),
  overlayProps: { backgroundOpacity: 0.35, blur: 7 },
  transitionProps: { duration: 200, transition: "pop" },
  store: spotlightStore,
  filter: defaultSpotlightFilter,
  clearQueryOnClose: true,
  closeOnActionTrigger: true,
  shortcut: "mod + K",
  highlightQuery: false
};
var Spotlight = (0, import_core48.factory)((_props, ref) => {
  const props = (0, import_core48.useProps)("Spotlight", defaultProps35, _props);
  const _a = props, {
    searchProps,
    filter,
    query,
    onQueryChange,
    actions,
    nothingFound,
    highlightQuery,
    limit
  } = _a, others = __objRest(_a, [
    "searchProps",
    "filter",
    "query",
    "onQueryChange",
    "actions",
    "nothingFound",
    "highlightQuery",
    "limit"
  ]);
  const [_query, setQuery2] = (0, import_hooks18.useUncontrolled)({
    value: query,
    defaultValue: "",
    finalValue: "",
    onChange: onQueryChange
  });
  const filteredActions = limitActions(filter(_query, actions), limit).map(
    (item) => {
      if (isActionsGroup(item)) {
        const items = item.actions.map((_a2) => {
          var _b = _a2, { id } = _b, actionData = __objRest(_b, ["id"]);
          return /* @__PURE__ */ import_react71.default.createElement(
            SpotlightAction,
            __spreadValues({
              key: id,
              highlightQuery
            }, actionData)
          );
        });
        return /* @__PURE__ */ import_react71.default.createElement(SpotlightActionsGroup, { key: item.group, label: item.group }, items);
      }
      return /* @__PURE__ */ import_react71.default.createElement(
        SpotlightAction,
        __spreadValues({
          key: item.id,
          highlightQuery
        }, item)
      );
    }
  );
  return /* @__PURE__ */ import_react71.default.createElement(
    SpotlightRoot,
    __spreadProps(__spreadValues({}, others), {
      query: _query,
      onQueryChange: setQuery2,
      ref
    }),
    /* @__PURE__ */ import_react71.default.createElement(SpotlightSearch, __spreadValues({}, searchProps)),
    /* @__PURE__ */ import_react71.default.createElement(SpotlightActionsList, null, filteredActions, filteredActions.length === 0 && nothingFound && /* @__PURE__ */ import_react71.default.createElement(SpotlightEmpty, null, nothingFound))
  );
});
Spotlight.displayName = "@raikou/spotlight/Spotlight";
Spotlight.Search = SpotlightSearch;
Spotlight.ActionsList = SpotlightActionsList;
Spotlight.Action = SpotlightAction;
Spotlight.Empty = SpotlightEmpty;
Spotlight.ActionsGroup = SpotlightActionsGroup;
Spotlight.Footer = SpotlightFooter;
Spotlight.Root = SpotlightRoot;
Spotlight.open = spotlight.open;
Spotlight.close = spotlight.close;
Spotlight.toggle = spotlight.toggle;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Spotlight,
  SpotlightAction,
  SpotlightActionsGroup,
  SpotlightActionsList,
  SpotlightEmpty,
  SpotlightFooter,
  SpotlightSearch,
  closeSpotlight,
  createSpotlight,
  createSpotlightStore,
  isActionsGroup,
  openSpotlight,
  spotlight,
  toggleSpotlight,
  useSpotlight
});
