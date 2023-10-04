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
var __pow = Math.pow;
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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AlignCenterControl: () => AlignCenterControl,
  AlignJustifyControl: () => AlignJustifyControl,
  AlignLeftControl: () => AlignLeftControl,
  AlignRightControl: () => AlignRightControl,
  BlockquoteControl: () => BlockquoteControl,
  BoldControl: () => BoldControl,
  BulletListControl: () => BulletListControl,
  ClearFormattingControl: () => ClearFormattingControl,
  CodeBlockControl: () => CodeBlockControl,
  CodeControl: () => CodeControl,
  DEFAULT_LABELS: () => DEFAULT_LABELS,
  H1Control: () => H1Control,
  H2Control: () => H2Control,
  H3Control: () => H3Control,
  H4Control: () => H4Control,
  H5Control: () => H5Control,
  H6Control: () => H6Control,
  HighlightControl: () => HighlightControl,
  HrControl: () => HrControl,
  ItalicControl: () => ItalicControl,
  Link: () => Link,
  OrderedListControl: () => OrderedListControl,
  RichTextEditor: () => RichTextEditor,
  RichTextEditorColorControl: () => RichTextEditorColorControl,
  RichTextEditorColorPickerControl: () => RichTextEditorColorPickerControl,
  RichTextEditorContent: () => RichTextEditorContent,
  RichTextEditorControl: () => RichTextEditorControl,
  RichTextEditorControlsGroup: () => RichTextEditorControlsGroup,
  RichTextEditorLinkControl: () => RichTextEditorLinkControl,
  StrikeThroughControl: () => StrikeThroughControl,
  SubscriptControl: () => SubscriptControl,
  SuperscriptControl: () => SuperscriptControl,
  UnderlineControl: () => UnderlineControl,
  UnlinkControl: () => UnlinkControl,
  UnsetColorControl: () => UnsetColorControl,
  useRichTextEditorContext: () => useRichTextEditorContext
});
module.exports = __toCommonJS(src_exports);

// src/extensions/Link.ts
var import_extension_link = __toESM(require("@tiptap/extension-link"));
var Link = import_extension_link.default.extend({
  addKeyboardShortcuts: () => ({
    "Mod-k": () => {
      window.dispatchEvent(new Event("edit-link"));
      return true;
    }
  })
}).configure({ openOnClick: false });

// src/RichTextEditor.tsx
var import_react68 = __toESM(require("react"));
var import_core53 = require("@raikou/core");

// src/labels.ts
var DEFAULT_LABELS = {
  // Controls labels
  linkControlLabel: "Link",
  colorPickerControlLabel: "Text color",
  highlightControlLabel: "Highlight text",
  colorControlLabel: (color) => `Set text color ${color}`,
  boldControlLabel: "Bold",
  italicControlLabel: "Italic",
  underlineControlLabel: "Underline",
  strikeControlLabel: "Strikethrough",
  clearFormattingControlLabel: "Clear formatting",
  unlinkControlLabel: "Remove link",
  bulletListControlLabel: "Bullet list",
  orderedListControlLabel: "Ordered list",
  h1ControlLabel: "Heading 1",
  h2ControlLabel: "Heading 2",
  h3ControlLabel: "Heading 3",
  h4ControlLabel: "Heading 4",
  h5ControlLabel: "Heading 5",
  h6ControlLabel: "Heading 6",
  blockquoteControlLabel: "Blockquote",
  alignLeftControlLabel: "Align text: left",
  alignCenterControlLabel: "Align text: center",
  alignRightControlLabel: "Align text: right",
  alignJustifyControlLabel: "Align text: justify",
  codeControlLabel: "Code",
  codeBlockControlLabel: "Code block",
  subscriptControlLabel: "Subscript",
  superscriptControlLabel: "Superscript",
  unsetColorControlLabel: "Unset color",
  hrControlLabel: "Horizontal line",
  // Link editor
  linkEditorInputLabel: "Enter URL",
  linkEditorInputPlaceholder: "https://example.com/",
  linkEditorExternalLink: "Open link in a new tab",
  linkEditorInternalLink: "Open link in the same tab",
  linkEditorSave: "Save",
  // Color picker control
  colorPickerCancel: "Cancel",
  colorPickerClear: "Clear color",
  colorPickerColorPicker: "Color picker",
  colorPickerPalette: "Color palette",
  colorPickerSave: "Save",
  colorPickerColorLabel: (color) => `Set text color ${color}`
};

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

// src/RichTextEditor.context.ts
var [RichTextEditorProvider, useRichTextEditorContext] = createSafeContext(
  "RichTextEditor component was not found in tree"
);

// src/RichTextEditorToolbar/RichTextEditorToolbar.tsx
var import_react5 = __toESM(require("react"));
var import_core = require("@raikou/core");
var defaultProps = {};
var RichTextEditorToolbar = (0, import_core.factory)(
  (_props, ref) => {
    const props = (0, import_core.useProps)("RichTextEditorToolbar", defaultProps, _props);
    const _a = props, {
      classNames,
      className,
      style,
      styles,
      vars,
      sticky,
      stickyOffset
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "vars",
      "sticky",
      "stickyOffset"
    ]);
    const ctx = useRichTextEditorContext();
    return /* @__PURE__ */ import_react5.default.createElement(
      import_core.Box,
      __spreadProps(__spreadValues(__spreadValues({
        ref,
        mod: { sticky }
      }, ctx.getStyles("toolbar", { className, style, styles, classNames })), others), {
        __vars: { "--rte-sticky-offset": (0, import_core.rem)(stickyOffset) }
      })
    );
  }
);
RichTextEditorToolbar.displayName = "@raikou/tiptap/RichTextEditorToolbar";

// src/RichTextEditorControlsGroup/RichTextEditorControlsGroup.tsx
var import_react6 = __toESM(require("react"));
var import_core2 = require("@raikou/core");
var defaultProps2 = {};
var RichTextEditorControlsGroup = (0, import_core2.factory)((_props, ref) => {
  const props = (0, import_core2.useProps)("RichTextEditorControlsGroup", defaultProps2, _props);
  const _a = props, { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useRichTextEditorContext();
  return /* @__PURE__ */ import_react6.default.createElement(
    import_core2.Box,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("controlsGroup", {
      className,
      style,
      styles,
      classNames
    })), others)
  );
});
RichTextEditorControlsGroup.displayName = "@raikou/tiptap/RichTextEditorControlsGroup";

// src/RichTextEditorContent/RichTextEditorContent.tsx
var import_react8 = __toESM(require("react"));
var import_core4 = require("@raikou/core");

// ../components/TypographyStylesProvider/src/TypographyStylesProvider.tsx
var import_react7 = __toESM(require("react"));
var import_core3 = require("@raikou/core");
var defaultProps3 = {};
var TypographyStylesProvider = (0, import_core3.factory)((_props, ref) => {
  const props = (0, import_core3.useProps)("TypographyStylesProvider", defaultProps3, _props);
  const _a = props, { classNames, className, style, styles, unstyled } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled"]);
  const getStyles = (0, import_core3.useStyles)({
    name: "TypographyStylesProvider",
    classes: {
      root: "tsp-root"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled
  });
  return /* @__PURE__ */ import_react7.default.createElement(import_core3.Box, __spreadValues(__spreadValues({ ref }, getStyles("root")), others));
});
TypographyStylesProvider.displayName = "@raikou/core/TypographyStylesProvider";

// src/RichTextEditorContent/RichTextEditorContent.tsx
var import_react9 = require("@tiptap/react");
var defaultProps4 = {};
var RichTextEditorContent = (0, import_core4.factory)(
  (_props, ref) => {
    const props = (0, import_core4.useProps)("RichTextEditorContent", defaultProps4, _props);
    const _a = props, { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
    const ctx = useRichTextEditorContext();
    if (ctx.withTypographyStyles) {
      return /* @__PURE__ */ import_react8.default.createElement(
        TypographyStylesProvider,
        __spreadProps(__spreadValues({}, ctx.getStyles("typographyStylesProvider", {
          className,
          style,
          styles,
          classNames
        })), {
          ref
        }),
        /* @__PURE__ */ import_react8.default.createElement(
          import_core4.Box,
          __spreadValues(__spreadValues({
            component: import_react9.EditorContent,
            editor: ctx.editor
          }, ctx.getStyles("content", { classNames, styles })), others)
        )
      );
    }
    return /* @__PURE__ */ import_react8.default.createElement(
      import_core4.Box,
      __spreadValues(__spreadValues({
        component: import_react9.EditorContent,
        editor: ctx.editor
      }, ctx.getStyles("content", { classNames, styles, className, style })), others)
    );
  }
);
RichTextEditorContent.displayName = "@raikou/tiptap/RichTextEditorContent";

// src/RichTextEditorControl/RichTextEditorControl.tsx
var import_react11 = __toESM(require("react"));
var import_core6 = require("@raikou/core");

// ../components/UnstyledButton/src/UnstyledButton.tsx
var import_react10 = __toESM(require("react"));
var import_core5 = require("@raikou/core");
var defaultProps5 = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = (0, import_core5.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core5.useProps)("UnstyledButton", defaultProps5, _props);
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
    const getStyles = (0, import_core5.useStyles)({
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
    return /* @__PURE__ */ import_react10.default.createElement(
      import_core5.Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { focusable: true })), {
        component,
        ref,
        type: component === "button" ? "button" : void 0
      }), others)
    );
  }
);
UnstyledButton.displayName = "@raikou/core/UnstyledButton";

// src/RichTextEditorControl/RichTextEditorControl.tsx
var defaultProps6 = {
  interactive: true
};
var RichTextEditorControl = (0, import_core6.factory)(
  (_props, ref) => {
    const props = (0, import_core6.useProps)("RichTextEditorControl", defaultProps6, _props);
    const _a = props, {
      classNames,
      className,
      style,
      styles,
      vars,
      interactive,
      active,
      onMouseDown
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "vars",
      "interactive",
      "active",
      "onMouseDown"
    ]);
    const ctx = useRichTextEditorContext();
    return /* @__PURE__ */ import_react11.default.createElement(
      UnstyledButton,
      __spreadProps(__spreadValues(__spreadValues({}, others), ctx.getStyles("control", { className, style, classNames, styles })), {
        "data-rich-text-editor-control": true,
        tabIndex: interactive ? 0 : -1,
        "data-interactive": interactive || void 0,
        "data-active": active || void 0,
        "aria-pressed": active && interactive || void 0,
        "aria-hidden": !interactive || void 0,
        ref,
        onMouseDown: (event) => {
          event.preventDefault();
          onMouseDown == null ? void 0 : onMouseDown(event);
        }
      })
    );
  }
);
RichTextEditorControl.displayName = "@raikou/tiptap/RichTextEditorControl";
var RichTextEditorControlBase = (0, import_react11.forwardRef)((_a, ref) => {
  var _b = _a, { className, icon: Icon } = _b, others = __objRest(_b, ["className", "icon"]);
  return /* @__PURE__ */ import_react11.default.createElement(RichTextEditorControl, __spreadValues({ ref }, others), /* @__PURE__ */ import_react11.default.createElement(Icon, { style: { width: (0, import_core6.rem)(16), height: (0, import_core6.rem)(16) } }));
});
RichTextEditorControlBase.displayName = "@raikou/tiptap/RichTextEditorControlBase";
function createControl({
  label,
  isActive,
  operation,
  icon
}) {
  return (0, import_react11.forwardRef)(
    (props, ref) => {
      const { editor, labels } = useRichTextEditorContext();
      const _label = labels[label];
      return /* @__PURE__ */ import_react11.default.createElement(
        RichTextEditorControlBase,
        __spreadProps(__spreadValues({}, props), {
          "aria-label": _label,
          title: _label,
          active: (isActive == null ? void 0 : isActive.name) ? editor == null ? void 0 : editor.isActive(isActive.name, isActive.attributes) : false,
          ref,
          onClick: () => editor == null ? void 0 : editor.chain().focus()[operation.name](operation.attributes).run(),
          icon: props.icon || icon
        })
      );
    }
  );
}

// src/RichTextEditorControl/controls.tsx
var import_react12 = __toESM(require("react"));
var import_icons_react = require("@tabler/icons-react");
var BoldControl = createControl({
  label: "boldControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconBold, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  isActive: { name: "bold" },
  operation: { name: "toggleBold" }
});
var ItalicControl = createControl({
  label: "italicControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconItalic, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  isActive: { name: "italic" },
  operation: { name: "toggleItalic" }
});
var UnderlineControl = createControl({
  label: "underlineControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconUnderline, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  isActive: { name: "underline" },
  operation: { name: "toggleUnderline" }
});
var StrikeThroughControl = createControl({
  label: "strikeControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconStrikethrough, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  isActive: { name: "strike" },
  operation: { name: "toggleStrike" }
});
var ClearFormattingControl = createControl({
  label: "clearFormattingControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconClearFormatting, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  operation: { name: "unsetAllMarks" }
});
var UnlinkControl = createControl({
  label: "unlinkControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconUnlink, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  operation: { name: "unsetLink" }
});
var BulletListControl = createControl({
  label: "bulletListControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconList, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  isActive: { name: "bulletList" },
  operation: { name: "toggleBulletList" }
});
var OrderedListControl = createControl({
  label: "orderedListControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconListNumbers, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  isActive: { name: "orderedList" },
  operation: { name: "toggleOrderedList" }
});
var H1Control = createControl({
  label: "h1ControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconH1, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  isActive: { name: "heading", attributes: { level: 1 } },
  operation: { name: "toggleHeading", attributes: { level: 1 } }
});
var H2Control = createControl({
  label: "h2ControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconH2, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  isActive: { name: "heading", attributes: { level: 2 } },
  operation: { name: "toggleHeading", attributes: { level: 2 } }
});
var H3Control = createControl({
  label: "h3ControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconH3, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  isActive: { name: "heading", attributes: { level: 3 } },
  operation: { name: "toggleHeading", attributes: { level: 3 } }
});
var H4Control = createControl({
  label: "h4ControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconH4, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  isActive: { name: "heading", attributes: { level: 4 } },
  operation: { name: "toggleHeading", attributes: { level: 4 } }
});
var H5Control = createControl({
  label: "h5ControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconH5, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  isActive: { name: "heading", attributes: { level: 5 } },
  operation: { name: "toggleHeading", attributes: { level: 5 } }
});
var H6Control = createControl({
  label: "h6ControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconH6, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  isActive: { name: "heading", attributes: { level: 6 } },
  operation: { name: "toggleHeading", attributes: { level: 6 } }
});
var BlockquoteControl = createControl({
  label: "blockquoteControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconBlockquote, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  isActive: { name: "blockquote" },
  operation: { name: "toggleBlockquote" }
});
var AlignLeftControl = createControl({
  label: "alignLeftControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconAlignLeft, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  operation: { name: "setTextAlign", attributes: "left" }
});
var AlignRightControl = createControl({
  label: "alignRightControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconAlignRight, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  operation: { name: "setTextAlign", attributes: "right" }
});
var AlignCenterControl = createControl({
  label: "alignCenterControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconAlignCenter, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  operation: { name: "setTextAlign", attributes: "center" }
});
var AlignJustifyControl = createControl({
  label: "alignJustifyControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconAlignJustified, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  operation: { name: "setTextAlign", attributes: "justify" }
});
var SubscriptControl = createControl({
  label: "subscriptControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconSubscript, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  isActive: { name: "subscript" },
  operation: { name: "toggleSubscript" }
});
var SuperscriptControl = createControl({
  label: "superscriptControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconSuperscript, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  isActive: { name: "superscript" },
  operation: { name: "toggleSuperscript" }
});
var CodeControl = createControl({
  label: "codeControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconCode, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  isActive: { name: "code" },
  operation: { name: "toggleCode" }
});
var CodeBlockControl = createControl({
  label: "codeBlockControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconCode, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  isActive: { name: "codeBlock" },
  operation: { name: "toggleCodeBlock" }
});
var HighlightControl = createControl({
  label: "highlightControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconHighlight, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  isActive: { name: "highlight" },
  operation: { name: "toggleHighlight" }
});
var HrControl = createControl({
  label: "hrControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconLineDashed, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  operation: { name: "setHorizontalRule" }
});
var UnsetColorControl = createControl({
  label: "unsetColorControlLabel",
  icon: (props) => /* @__PURE__ */ import_react12.default.createElement(import_icons_react.IconCircleOff, __spreadProps(__spreadValues({}, props), { stroke: 1.5 })),
  operation: { name: "unsetColor" }
});

// src/RichTextEditorControl/RichTextEditorLinkControl.tsx
var import_react51 = __toESM(require("react"));
var import_core37 = require("@raikou/core");

// ../components/Popover/src/Popover.tsx
var import_react26 = __toESM(require("react"));
var import_hooks8 = require("@raikou/hooks");
var import_core17 = require("@raikou/core");

// ../components/Floating/src/use-floating-auto-update.ts
var import_react15 = require("react");

// ../../../node_modules/.pnpm/@floating-ui+core@1.3.1/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getLengthFromAxis(axis) {
  return axis === "y" ? "height" : "width";
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "x" : "y";
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === "x";
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = (reference, floating, config) => __async(void 0, null, function* () {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = yield platform2.isRTL == null ? void 0 : platform2.isRTL(floating);
  let rects = yield platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = yield fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = __spreadProps(__spreadValues({}, middlewareData), {
      [name]: __spreadValues(__spreadValues({}, middlewareData[name]), data)
    });
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? yield platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
});
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function expandPaddingObject(padding) {
  return __spreadValues({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, padding);
}
function getSideObjectFromPadding(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return __spreadProps(__spreadValues({}, rect), {
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function detectOverflow(state, options) {
  return __async(this, null, function* () {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x,
      y,
      platform: platform2,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = "clippingAncestors",
      rootBoundary = "viewport",
      elementContext = "floating",
      altBoundary = false,
      padding = 0
    } = evaluate(options, state);
    const paddingObject = getSideObjectFromPadding(padding);
    const altContext = elementContext === "floating" ? "reference" : "floating";
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(yield platform2.getClippingRect({
      element: ((_await$platform$isEle = yield platform2.isElement == null ? void 0 : platform2.isElement(element)) != null ? _await$platform$isEle : true) ? element : element.contextElement || (yield platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === "floating" ? __spreadProps(__spreadValues({}, rects.floating), {
      x,
      y
    }) : rects.reference;
    const offsetParent = yield platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating);
    const offsetScale = (yield platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? (yield platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? yield platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  });
}
var min = Math.min;
var max = Math.max;
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
var arrow = (options) => ({
  name: "arrow",
  options,
  fn(state) {
    return __async(this, null, function* () {
      const {
        x,
        y,
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        element,
        padding = 0
      } = evaluate(options, state) || {};
      if (element == null) {
        return {};
      }
      const paddingObject = getSideObjectFromPadding(padding);
      const coords = {
        x,
        y
      };
      const axis = getMainAxisFromPlacement(placement);
      const length = getLengthFromAxis(axis);
      const arrowDimensions = yield platform2.getDimensions(element);
      const isYAxis = axis === "y";
      const minProp = isYAxis ? "top" : "left";
      const maxProp = isYAxis ? "bottom" : "right";
      const clientProp = isYAxis ? "clientHeight" : "clientWidth";
      const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
      const startDiff = coords[axis] - rects.reference[axis];
      const arrowOffsetParent = yield platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element);
      let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
      if (!clientSize || !(yield platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
        clientSize = elements.floating[clientProp] || rects.floating[length];
      }
      const centerToReference = endDiff / 2 - startDiff / 2;
      const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
      const minPadding = min(paddingObject[minProp], largestPossiblePadding);
      const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
      const min$1 = minPadding;
      const max3 = clientSize - arrowDimensions[length] - maxPadding;
      const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
      const offset2 = within(min$1, center, max3);
      const shouldAddOffset = getAlignment(placement) != null && center != offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
      const alignmentOffset = shouldAddOffset ? center < min$1 ? min$1 - center : max3 - center : 0;
      return {
        [axis]: coords[axis] - alignmentOffset,
        data: {
          [axis]: offset2,
          centerOffset: center - offset2 + alignmentOffset
        }
      };
    });
  }
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    fn(state) {
      return __async(this, null, function* () {
        var _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform: platform2,
          elements
        } = state;
        const _a2 = evaluate(options, state), {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = "bestFit",
          fallbackAxisSideDirection = "none",
          flipAlignment = true
        } = _a2, detectOverflowOptions = __objRest(_a2, [
          "mainAxis",
          "crossAxis",
          "fallbackPlacements",
          "fallbackStrategy",
          "fallbackAxisSideDirection",
          "flipAlignment"
        ]);
        const side = getSide(placement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = yield platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating);
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements = [initialPlacement, ...fallbackPlacements];
        const overflow = yield detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const {
            main,
            cross
          } = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[main], overflow[cross]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];
        if (!overflows.every((side2) => side2 <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements[nextIndex];
          if (nextPlacement) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
          let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case "bestFit": {
                var _overflowsData$map$so;
                const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement2) {
                  resetPlacement = placement2;
                }
                break;
              }
              case "initialPlacement":
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      });
    }
  };
};
function getBoundingRect(rects) {
  const minX = min(...rects.map((rect) => rect.left));
  const minY = min(...rects.map((rect) => rect.top));
  const maxX = max(...rects.map((rect) => rect.right));
  const maxY = max(...rects.map((rect) => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map((rect) => rectToClientRect(getBoundingRect(rect)));
}
var inline = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "inline",
    options,
    fn(state) {
      return __async(this, null, function* () {
        const {
          placement,
          elements,
          rects,
          platform: platform2,
          strategy
        } = state;
        const {
          padding = 2,
          x,
          y
        } = evaluate(options, state);
        const nativeClientRects = Array.from((yield platform2.getClientRects == null ? void 0 : platform2.getClientRects(elements.reference)) || []);
        const clientRects = getRectsByLine(nativeClientRects);
        const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
        const paddingObject = getSideObjectFromPadding(padding);
        function getBoundingClientRect2() {
          if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
            return clientRects.find((rect) => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
          }
          if (clientRects.length >= 2) {
            if (getMainAxisFromPlacement(placement) === "x") {
              const firstRect = clientRects[0];
              const lastRect = clientRects[clientRects.length - 1];
              const isTop = getSide(placement) === "top";
              const top2 = firstRect.top;
              const bottom2 = lastRect.bottom;
              const left2 = isTop ? firstRect.left : lastRect.left;
              const right2 = isTop ? firstRect.right : lastRect.right;
              const width2 = right2 - left2;
              const height2 = bottom2 - top2;
              return {
                top: top2,
                bottom: bottom2,
                left: left2,
                right: right2,
                width: width2,
                height: height2,
                x: left2,
                y: top2
              };
            }
            const isLeftSide = getSide(placement) === "left";
            const maxRight = max(...clientRects.map((rect) => rect.right));
            const minLeft = min(...clientRects.map((rect) => rect.left));
            const measureRects = clientRects.filter((rect) => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
            const top = measureRects[0].top;
            const bottom = measureRects[measureRects.length - 1].bottom;
            const left = minLeft;
            const right = maxRight;
            const width = right - left;
            const height = bottom - top;
            return {
              top,
              bottom,
              left,
              right,
              width,
              height,
              x: left,
              y: top
            };
          }
          return fallback;
        }
        const resetRects = yield platform2.getElementRects({
          reference: {
            getBoundingClientRect: getBoundingClientRect2
          },
          floating: elements.floating,
          strategy
        });
        if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
          return {
            reset: {
              rects: resetRects
            }
          };
        }
        return {};
      });
    }
  };
};
function convertValueToCoords(state, options) {
  return __async(this, null, function* () {
    const {
      placement,
      platform: platform2,
      elements
    } = state;
    const rtl = yield platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating);
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getMainAxisFromPlacement(placement) === "x";
    const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === "number" ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : __spreadValues({
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: null
    }, rawValue);
    if (alignment && typeof alignmentAxis === "number") {
      crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  });
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    fn(state) {
      return __async(this, null, function* () {
        const {
          x,
          y
        } = state;
        const diffCoords = yield convertValueToCoords(state, options);
        return {
          x: x + diffCoords.x,
          y: y + diffCoords.y,
          data: diffCoords
        };
      });
    }
  };
};
function getCrossAxis(axis) {
  return axis === "x" ? "y" : "x";
}
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    fn(state) {
      return __async(this, null, function* () {
        const {
          x,
          y,
          placement
        } = state;
        const _a2 = evaluate(options, state), {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: (_ref) => {
              let {
                x: x2,
                y: y2
              } = _ref;
              return {
                x: x2,
                y: y2
              };
            }
          }
        } = _a2, detectOverflowOptions = __objRest(_a2, [
          "mainAxis",
          "crossAxis",
          "limiter"
        ]);
        const coords = {
          x,
          y
        };
        const overflow = yield detectOverflow(state, detectOverflowOptions);
        const mainAxis = getMainAxisFromPlacement(getSide(placement));
        const crossAxis = getCrossAxis(mainAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === "y" ? "top" : "left";
          const maxSide = mainAxis === "y" ? "bottom" : "right";
          const min3 = mainAxisCoord + overflow[minSide];
          const max3 = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = within(min3, mainAxisCoord, max3);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === "y" ? "top" : "left";
          const maxSide = crossAxis === "y" ? "bottom" : "right";
          const min3 = crossAxisCoord + overflow[minSide];
          const max3 = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = within(min3, crossAxisCoord, max3);
        }
        const limitedCoords = limiter.fn(__spreadProps(__spreadValues({}, state), {
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        }));
        return __spreadProps(__spreadValues({}, limitedCoords), {
          data: {
            x: limitedCoords.x - x,
            y: limitedCoords.y - y
          }
        });
      });
    }
  };
};
var limitShift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const mainAxis = getMainAxisFromPlacement(placement);
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset2, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : __spreadValues({
        mainAxis: 0,
        crossAxis: 0
      }, rawOffset);
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = ["top", "left"].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    fn(state) {
      return __async(this, null, function* () {
        const {
          placement,
          rects,
          platform: platform2,
          elements
        } = state;
        const _a2 = evaluate(options, state), {
          apply = () => {
          }
        } = _a2, detectOverflowOptions = __objRest(_a2, [
          "apply"
        ]);
        const overflow = yield detectOverflow(state, detectOverflowOptions);
        const side = getSide(placement);
        const alignment = getAlignment(placement);
        const axis = getMainAxisFromPlacement(placement);
        const isXAxis = axis === "x";
        const {
          width,
          height
        } = rects.floating;
        let heightSide;
        let widthSide;
        if (side === "top" || side === "bottom") {
          heightSide = side;
          widthSide = alignment === ((yield platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
        } else {
          widthSide = side;
          heightSide = alignment === "end" ? "top" : "bottom";
        }
        const overflowAvailableHeight = height - overflow[heightSide];
        const overflowAvailableWidth = width - overflow[widthSide];
        const noShift = !state.middlewareData.shift;
        let availableHeight = overflowAvailableHeight;
        let availableWidth = overflowAvailableWidth;
        if (isXAxis) {
          const maximumClippingWidth = width - overflow.left - overflow.right;
          availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
        } else {
          const maximumClippingHeight = height - overflow.top - overflow.bottom;
          availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
        }
        if (noShift && !alignment) {
          const xMin = max(overflow.left, 0);
          const xMax = max(overflow.right, 0);
          const yMin = max(overflow.top, 0);
          const yMax = max(overflow.bottom, 0);
          if (isXAxis) {
            availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
          } else {
            availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
          }
        }
        yield apply(__spreadProps(__spreadValues({}, state), {
          availableWidth,
          availableHeight
        }));
        const nextDimensions = yield platform2.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true
            }
          };
        }
        return {};
      });
    }
  };
};

// ../../../node_modules/.pnpm/@floating-ui+dom@1.4.5/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return node instanceof getWindow(node).ShadowRoot || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const safari = isSafari();
  const css = getComputedStyle$1(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !safari && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !safari && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function isSafari() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
var min2 = Math.min;
var max2 = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isSafari() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max2(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max2(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x += max2(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isSafari();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = __spreadProps(__spreadValues({}, clippingAncestor), {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    });
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max2(rect.top, accRect.top);
    accRect.right = min2(rect.right, accRect.right);
    accRect.bottom = min2(rect.bottom, accRect.bottom);
    accRect.left = max2(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  return getCssDimensions(element);
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  if (!isHTMLElement(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
var getElementRects = function(_ref) {
  return __async(this, null, function* () {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, yield getOffsetParentFn(floating), strategy),
      floating: __spreadValues({
        x: 0,
        y: 0
      }, yield getDimensionsFn(floating))
    };
  });
};
function isRTL(element) {
  return getComputedStyle(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    clearTimeout(timeoutId);
    io && io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max2(0, min2(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, __spreadProps(__spreadValues({}, options), {
        // Handle <iframe>s
        root: root.ownerDocument
      }));
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          resizeObserver && resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo && cleanupIo();
    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = __spreadValues({
    platform
  }, options);
  const platformWithCache = __spreadProps(__spreadValues({}, mergedOptions.platform), {
    _c: cache
  });
  return computePosition(reference, floating, __spreadProps(__spreadValues({}, mergedOptions), {
    platform: platformWithCache
  }));
};

// ../../../node_modules/.pnpm/@floating-ui+react-dom@1.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js
var React10 = __toESM(require("react"));
var import_react13 = require("react");
var ReactDOM = __toESM(require("react-dom"));
var arrow2 = (options) => {
  const {
    element,
    padding
  } = options;
  function isRef(value) {
    return Object.prototype.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(args) {
      if (isRef(element)) {
        if (element.current != null) {
          return arrow({
            element: element.current,
            padding
          }).fn(args);
        }
        return {};
      } else if (element) {
        return arrow({
          element,
          padding
        }).fn(args);
      }
      return {};
    }
  };
};
var index = typeof document !== "undefined" ? import_react13.useLayoutEffect : import_react13.useEffect;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length, i, keys2;
  if (a && b && typeof a == "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys2 = Object.keys(a);
    length = keys2.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!Object.prototype.hasOwnProperty.call(b, keys2[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys2[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function useLatestRef(value) {
  const ref = React10.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React10.useState({
    x: null,
    y: null,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React10.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const referenceRef = React10.useRef(null);
  const floatingRef = React10.useRef(null);
  const dataRef = React10.useRef(data);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const [reference, _setReference] = React10.useState(null);
  const [floating, _setFloating] = React10.useState(null);
  const setReference = React10.useCallback((node) => {
    if (referenceRef.current !== node) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React10.useCallback((node) => {
    if (floatingRef.current !== node) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const update = React10.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = __spreadProps(__spreadValues({}, data2), {
        isPositioned: true
      });
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => __spreadProps(__spreadValues({}, data2), {
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React10.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (reference && floating) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(reference, floating, update);
      } else {
        update();
      }
    }
  }, [reference, floating, update, whileElementsMountedRef]);
  const refs = React10.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React10.useMemo(() => ({
    reference,
    floating
  }), [reference, floating]);
  return React10.useMemo(() => __spreadProps(__spreadValues({}, data), {
    update,
    refs,
    elements,
    reference: setReference,
    floating: setFloating
  }), [data, update, refs, elements, setReference, setFloating]);
}

// ../../../node_modules/.pnpm/@floating-ui+react@0.23.1_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react/dist/floating-ui.react.esm.js
var React11 = __toESM(require("react"));
var import_react14 = require("react");
var import_react_dom3 = require("react-dom");
var index2 = typeof document !== "undefined" ? import_react14.useLayoutEffect : import_react14.useEffect;
var serverHandoffComplete = false;
var count = 0;
var genId = () => "floating-ui-" + count++;
function useFloatingId() {
  const [id, setId] = React11.useState(() => serverHandoffComplete ? genId() : void 0);
  index2(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  React11.useEffect(() => {
    if (!serverHandoffComplete) {
      serverHandoffComplete = true;
    }
  }, []);
  return id;
}
var useReactId = React11[/* @__PURE__ */ "useId".toString()];
var useId = useReactId || useFloatingId;
function createPubSub() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null ? void 0 : _map$get.forEach((handler) => handler(data));
    },
    on(event, listener) {
      map.set(event, [...map.get(event) || [], listener]);
    },
    off(event, listener) {
      var _map$get2;
      map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l) => l !== listener)) || []);
    }
  };
}
var FloatingNodeContext = /* @__PURE__ */ React11.createContext(null);
var FloatingTreeContext = /* @__PURE__ */ React11.createContext(null);
var useFloatingParentNodeId = () => {
  var _React$useContext;
  return ((_React$useContext = React11.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
};
var useFloatingTree = () => React11.useContext(FloatingTreeContext);
function getDocument(node) {
  return (node == null ? void 0 : node.ownerDocument) || document;
}
function getPlatform() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.platform) {
    return uaData.platform;
  }
  return navigator.platform;
}
function getUserAgent() {
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map((_ref) => {
      let {
        brand,
        version
      } = _ref;
      return brand + "/" + version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function getWindow2(value) {
  return getDocument(value).defaultView || window;
}
function isElement2(value) {
  return value ? value instanceof getWindow2(value).Element : false;
}
function isHTMLElement2(value) {
  return value ? value instanceof getWindow2(value).HTMLElement : false;
}
function isShadowRoot2(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  const OwnElement = getWindow2(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isVirtualClick(event) {
  if (event.mozInputSource === 0 && event.isTrusted) {
    return true;
  }
  const androidRe = /Android/i;
  if ((androidRe.test(getPlatform()) || androidRe.test(getUserAgent())) && event.pointerType) {
    return event.type === "click" && event.buttons === 1;
  }
  return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
  return event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType !== "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0;
}
function isMouseLikePointerType(pointerType, strict) {
  const values = ["mouse", "pen"];
  if (!strict) {
    values.push("", void 0);
  }
  return values.includes(pointerType);
}
function contains(parent, child) {
  if (!parent || !child) {
    return false;
  }
  const rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  }
  if (rootNode && isShadowRoot2(rootNode)) {
    let next = child;
    while (next) {
      if (parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    }
  }
  return false;
}
function useLatestRef2(value) {
  const ref = (0, import_react14.useRef)(value);
  index2(() => {
    ref.current = value;
  });
  return ref;
}
var safePolygonIdentifier = "data-floating-ui-safe-polygon";
function getDelay(value, prop, pointerType) {
  if (pointerType && !isMouseLikePointerType(pointerType)) {
    return 0;
  }
  if (typeof value === "number") {
    return value;
  }
  return value == null ? void 0 : value[prop];
}
var useHover = function(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    dataRef,
    events,
    elements: {
      domReference,
      floating
    },
    refs
  } = context;
  const {
    enabled = true,
    delay = 0,
    handleClose = null,
    mouseOnly = false,
    restMs = 0,
    move = true
  } = props;
  const tree = useFloatingTree();
  const parentId = useFloatingParentNodeId();
  const handleCloseRef = useLatestRef2(handleClose);
  const delayRef = useLatestRef2(delay);
  const pointerTypeRef = React11.useRef();
  const timeoutRef = React11.useRef();
  const handlerRef = React11.useRef();
  const restTimeoutRef = React11.useRef();
  const blockMouseMoveRef = React11.useRef(true);
  const performedPointerEventsMutationRef = React11.useRef(false);
  const unbindMouseMoveRef = React11.useRef(() => {
  });
  const isHoverOpen = React11.useCallback(() => {
    var _dataRef$current$open;
    const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
    return (type == null ? void 0 : type.includes("mouse")) && type !== "mousedown";
  }, [dataRef]);
  React11.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onDismiss() {
      clearTimeout(timeoutRef.current);
      clearTimeout(restTimeoutRef.current);
      blockMouseMoveRef.current = true;
    }
    events.on("dismiss", onDismiss);
    return () => {
      events.off("dismiss", onDismiss);
    };
  }, [enabled, events]);
  React11.useEffect(() => {
    if (!enabled || !handleCloseRef.current || !open) {
      return;
    }
    function onLeave() {
      if (isHoverOpen()) {
        onOpenChange(false);
      }
    }
    const html = getDocument(floating).documentElement;
    html.addEventListener("mouseleave", onLeave);
    return () => {
      html.removeEventListener("mouseleave", onLeave);
    };
  }, [floating, open, onOpenChange, enabled, handleCloseRef, dataRef, isHoverOpen]);
  const closeWithDelay = React11.useCallback(function(runElseBranch) {
    if (runElseBranch === void 0) {
      runElseBranch = true;
    }
    const closeDelay = getDelay(delayRef.current, "close", pointerTypeRef.current);
    if (closeDelay && !handlerRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => onOpenChange(false), closeDelay);
    } else if (runElseBranch) {
      clearTimeout(timeoutRef.current);
      onOpenChange(false);
    }
  }, [delayRef, onOpenChange]);
  const cleanupMouseMoveHandler = React11.useCallback(() => {
    unbindMouseMoveRef.current();
    handlerRef.current = void 0;
  }, []);
  const clearPointerEvents = React11.useCallback(() => {
    if (performedPointerEventsMutationRef.current) {
      const body = getDocument(refs.floating.current).body;
      body.style.pointerEvents = "";
      body.removeAttribute(safePolygonIdentifier);
      performedPointerEventsMutationRef.current = false;
    }
  }, [refs]);
  React11.useEffect(() => {
    if (!enabled) {
      return;
    }
    function isClickLikeOpenEvent() {
      return dataRef.current.openEvent ? ["click", "mousedown"].includes(dataRef.current.openEvent.type) : false;
    }
    function onMouseEnter(event) {
      clearTimeout(timeoutRef.current);
      blockMouseMoveRef.current = false;
      if (mouseOnly && !isMouseLikePointerType(pointerTypeRef.current) || restMs > 0 && getDelay(delayRef.current, "open") === 0) {
        return;
      }
      dataRef.current.openEvent = event;
      const openDelay = getDelay(delayRef.current, "open", pointerTypeRef.current);
      if (openDelay) {
        timeoutRef.current = setTimeout(() => {
          onOpenChange(true);
        }, openDelay);
      } else {
        onOpenChange(true);
      }
    }
    function onMouseLeave(event) {
      if (isClickLikeOpenEvent()) {
        return;
      }
      unbindMouseMoveRef.current();
      const doc = getDocument(floating);
      clearTimeout(restTimeoutRef.current);
      if (handleCloseRef.current) {
        if (!open) {
          clearTimeout(timeoutRef.current);
        }
        handlerRef.current = handleCloseRef.current(__spreadProps(__spreadValues({}, context), {
          tree,
          x: event.clientX,
          y: event.clientY,
          onClose() {
            clearPointerEvents();
            cleanupMouseMoveHandler();
            closeWithDelay();
          }
        }));
        const handler = handlerRef.current;
        doc.addEventListener("mousemove", handler);
        unbindMouseMoveRef.current = () => {
          doc.removeEventListener("mousemove", handler);
        };
        return;
      }
      const shouldClose = pointerTypeRef.current === "touch" ? !contains(floating, event.relatedTarget) : true;
      if (shouldClose) {
        closeWithDelay();
      }
    }
    function onScrollMouseLeave(event) {
      if (isClickLikeOpenEvent()) {
        return;
      }
      handleCloseRef.current == null ? void 0 : handleCloseRef.current(__spreadProps(__spreadValues({}, context), {
        tree,
        x: event.clientX,
        y: event.clientY,
        onClose() {
          clearPointerEvents();
          cleanupMouseMoveHandler();
          closeWithDelay();
        }
      }))(event);
    }
    if (isElement2(domReference)) {
      const ref = domReference;
      open && ref.addEventListener("mouseleave", onScrollMouseLeave);
      floating == null ? void 0 : floating.addEventListener("mouseleave", onScrollMouseLeave);
      move && ref.addEventListener("mousemove", onMouseEnter, {
        once: true
      });
      ref.addEventListener("mouseenter", onMouseEnter);
      ref.addEventListener("mouseleave", onMouseLeave);
      return () => {
        open && ref.removeEventListener("mouseleave", onScrollMouseLeave);
        floating == null ? void 0 : floating.removeEventListener("mouseleave", onScrollMouseLeave);
        move && ref.removeEventListener("mousemove", onMouseEnter);
        ref.removeEventListener("mouseenter", onMouseEnter);
        ref.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, [domReference, floating, enabled, context, mouseOnly, restMs, move, closeWithDelay, cleanupMouseMoveHandler, clearPointerEvents, onOpenChange, open, tree, delayRef, handleCloseRef, dataRef]);
  index2(() => {
    var _handleCloseRef$curre;
    if (!enabled) {
      return;
    }
    if (open && (_handleCloseRef$curre = handleCloseRef.current) != null && _handleCloseRef$curre.__options.blockPointerEvents && isHoverOpen()) {
      const body = getDocument(floating).body;
      body.setAttribute(safePolygonIdentifier, "");
      body.style.pointerEvents = "none";
      performedPointerEventsMutationRef.current = true;
      if (isElement2(domReference) && floating) {
        var _tree$nodesRef$curren, _tree$nodesRef$curren2;
        const ref = domReference;
        const parentFloating = tree == null ? void 0 : (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null ? void 0 : (_tree$nodesRef$curren2 = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren2.elements.floating;
        if (parentFloating) {
          parentFloating.style.pointerEvents = "";
        }
        ref.style.pointerEvents = "auto";
        floating.style.pointerEvents = "auto";
        return () => {
          ref.style.pointerEvents = "";
          floating.style.pointerEvents = "";
        };
      }
    }
  }, [enabled, open, parentId, floating, domReference, tree, handleCloseRef, dataRef, isHoverOpen]);
  index2(() => {
    if (!open) {
      pointerTypeRef.current = void 0;
      cleanupMouseMoveHandler();
      clearPointerEvents();
    }
  }, [open, cleanupMouseMoveHandler, clearPointerEvents]);
  React11.useEffect(() => {
    return () => {
      cleanupMouseMoveHandler();
      clearTimeout(timeoutRef.current);
      clearTimeout(restTimeoutRef.current);
      clearPointerEvents();
    };
  }, [enabled, cleanupMouseMoveHandler, clearPointerEvents]);
  return React11.useMemo(() => {
    if (!enabled) {
      return {};
    }
    function setPointerRef(event) {
      pointerTypeRef.current = event.pointerType;
    }
    return {
      reference: {
        onPointerDown: setPointerRef,
        onPointerEnter: setPointerRef,
        onMouseMove() {
          if (open || restMs === 0) {
            return;
          }
          clearTimeout(restTimeoutRef.current);
          restTimeoutRef.current = setTimeout(() => {
            if (!blockMouseMoveRef.current) {
              onOpenChange(true);
            }
          }, restMs);
        }
      },
      floating: {
        onMouseEnter() {
          clearTimeout(timeoutRef.current);
        },
        onMouseLeave() {
          events.emit("dismiss", {
            type: "mouseLeave",
            data: {
              returnFocus: false
            }
          });
          closeWithDelay(false);
        }
      }
    };
  }, [events, enabled, restMs, open, onOpenChange, closeWithDelay]);
};
var FloatingDelayGroupContext = /* @__PURE__ */ React11.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: () => {
  },
  setState: () => {
  },
  isInstantPhase: false
});
var useDelayGroupContext = () => React11.useContext(FloatingDelayGroupContext);
var FloatingDelayGroup = (_ref) => {
  let {
    children,
    delay,
    timeoutMs = 0
  } = _ref;
  const [state, setState] = React11.useReducer((prev, next) => __spreadValues(__spreadValues({}, prev), next), {
    delay,
    timeoutMs,
    initialDelay: delay,
    currentId: null,
    isInstantPhase: false
  });
  const initialCurrentIdRef = React11.useRef(null);
  const setCurrentId = React11.useCallback((currentId) => {
    setState({
      currentId
    });
  }, []);
  index2(() => {
    if (state.currentId) {
      if (initialCurrentIdRef.current === null) {
        initialCurrentIdRef.current = state.currentId;
      } else {
        setState({
          isInstantPhase: true
        });
      }
    } else {
      setState({
        isInstantPhase: false
      });
      initialCurrentIdRef.current = null;
    }
  }, [state.currentId]);
  return /* @__PURE__ */ React11.createElement(FloatingDelayGroupContext.Provider, {
    value: React11.useMemo(() => __spreadProps(__spreadValues({}, state), {
      setState,
      setCurrentId
    }), [state, setState, setCurrentId])
  }, children);
};
var useDelayGroup = (_ref2, _ref3) => {
  let {
    open,
    onOpenChange
  } = _ref2;
  let {
    id
  } = _ref3;
  const {
    currentId,
    setCurrentId,
    initialDelay,
    setState,
    timeoutMs
  } = useDelayGroupContext();
  index2(() => {
    if (currentId) {
      setState({
        delay: {
          open: 1,
          close: getDelay(initialDelay, "close")
        }
      });
      if (currentId !== id) {
        onOpenChange(false);
      }
    }
  }, [id, onOpenChange, setState, currentId, initialDelay]);
  index2(() => {
    function unset() {
      onOpenChange(false);
      setState({
        delay: initialDelay,
        currentId: null
      });
    }
    if (!open && currentId === id) {
      if (timeoutMs) {
        const timeout = window.setTimeout(unset, timeoutMs);
        return () => {
          clearTimeout(timeout);
        };
      } else {
        unset();
      }
    }
  }, [open, setState, currentId, id, onOpenChange, initialDelay, timeoutMs]);
  index2(() => {
    if (open) {
      setCurrentId(id);
    }
  }, [open, setCurrentId, id]);
};
function activeElement(doc) {
  let activeElement2 = doc.activeElement;
  while (((_activeElement = activeElement2) == null ? void 0 : (_activeElement$shadow = _activeElement.shadowRoot) == null ? void 0 : _activeElement$shadow.activeElement) != null) {
    var _activeElement, _activeElement$shadow;
    activeElement2 = activeElement2.shadowRoot.activeElement;
  }
  return activeElement2;
}
function getChildren(nodes, id) {
  let allChildren = nodes.filter((node) => {
    var _node$context;
    return node.parentId === id && ((_node$context = node.context) == null ? void 0 : _node$context.open);
  });
  let currentChildren = allChildren;
  while (currentChildren.length) {
    currentChildren = nodes.filter((node) => {
      var _currentChildren;
      return (_currentChildren = currentChildren) == null ? void 0 : _currentChildren.some((n) => {
        var _node$context2;
        return node.parentId === n.id && ((_node$context2 = node.context) == null ? void 0 : _node$context2.open);
      });
    });
    allChildren = allChildren.concat(currentChildren);
  }
  return allChildren;
}
function getTarget(event) {
  if ("composedPath" in event) {
    return event.composedPath()[0];
  }
  return event.target;
}
var useInsertionEffect = React11[/* @__PURE__ */ "useInsertionEffect".toString()];
var useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
function useEvent(callback) {
  const ref = React11.useRef(() => {
    if (process.env.NODE_ENV !== "production") {
      throw new Error("Cannot call an event handler while rendering.");
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return React11.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
function isEventTargetWithin(event, node) {
  if (node == null) {
    return false;
  }
  if ("composedPath" in event) {
    return event.composedPath().includes(node);
  }
  const e = event;
  return e.target != null && node.contains(e.target);
}
var bubbleHandlerKeys = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
};
var captureHandlerKeys = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
};
var normalizeBubblesProp = (bubbles) => {
  var _bubbles$escapeKey, _bubbles$outsidePress;
  return {
    escapeKeyBubbles: typeof bubbles === "boolean" ? bubbles : (_bubbles$escapeKey = bubbles == null ? void 0 : bubbles.escapeKey) != null ? _bubbles$escapeKey : false,
    outsidePressBubbles: typeof bubbles === "boolean" ? bubbles : (_bubbles$outsidePress = bubbles == null ? void 0 : bubbles.outsidePress) != null ? _bubbles$outsidePress : true
  };
};
var useDismiss = function(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    events,
    nodeId,
    elements: {
      reference,
      domReference,
      floating
    },
    dataRef
  } = context;
  const {
    enabled = true,
    escapeKey = true,
    outsidePress: unstable_outsidePress = true,
    outsidePressEvent = "pointerdown",
    referencePress = false,
    referencePressEvent = "pointerdown",
    ancestorScroll = false,
    bubbles
  } = props;
  const tree = useFloatingTree();
  const nested = useFloatingParentNodeId() != null;
  const outsidePressFn = useEvent(typeof unstable_outsidePress === "function" ? unstable_outsidePress : () => false);
  const outsidePress = typeof unstable_outsidePress === "function" ? outsidePressFn : unstable_outsidePress;
  const insideReactTreeRef = React11.useRef(false);
  const {
    escapeKeyBubbles,
    outsidePressBubbles
  } = normalizeBubblesProp(bubbles);
  const closeOnEscapeKeyDown = useEvent((event) => {
    if (!open || !enabled || !escapeKey || event.key !== "Escape") {
      return;
    }
    const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
    if (!escapeKeyBubbles) {
      event.stopPropagation();
      if (children.length > 0) {
        let shouldDismiss = true;
        children.forEach((child) => {
          var _child$context;
          if ((_child$context = child.context) != null && _child$context.open && !child.context.dataRef.current.__escapeKeyBubbles) {
            shouldDismiss = false;
            return;
          }
        });
        if (!shouldDismiss) {
          return;
        }
      }
    }
    events.emit("dismiss", {
      type: "escapeKey",
      data: {
        returnFocus: {
          preventScroll: false
        }
      }
    });
    onOpenChange(false);
  });
  const closeOnPressOutside = useEvent((event) => {
    const insideReactTree = insideReactTreeRef.current;
    insideReactTreeRef.current = false;
    if (insideReactTree) {
      return;
    }
    if (typeof outsidePress === "function" && !outsidePress(event)) {
      return;
    }
    const target = getTarget(event);
    if (isHTMLElement2(target) && floating) {
      const canScrollX = target.clientWidth > 0 && target.scrollWidth > target.clientWidth;
      const canScrollY = target.clientHeight > 0 && target.scrollHeight > target.clientHeight;
      let xCond = canScrollY && event.offsetX > target.clientWidth;
      if (canScrollY) {
        const isRTL2 = getWindow2(floating).getComputedStyle(target).direction === "rtl";
        if (isRTL2) {
          xCond = event.offsetX <= target.offsetWidth - target.clientWidth;
        }
      }
      if (xCond || canScrollX && event.offsetY > target.clientHeight) {
        return;
      }
    }
    const targetIsInsideChildren = tree && getChildren(tree.nodesRef.current, nodeId).some((node) => {
      var _node$context;
      return isEventTargetWithin(event, (_node$context = node.context) == null ? void 0 : _node$context.elements.floating);
    });
    if (isEventTargetWithin(event, floating) || isEventTargetWithin(event, domReference) || targetIsInsideChildren) {
      return;
    }
    const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
    if (children.length > 0) {
      let shouldDismiss = true;
      children.forEach((child) => {
        var _child$context2;
        if ((_child$context2 = child.context) != null && _child$context2.open && !child.context.dataRef.current.__outsidePressBubbles) {
          shouldDismiss = false;
          return;
        }
      });
      if (!shouldDismiss) {
        return;
      }
    }
    events.emit("dismiss", {
      type: "outsidePress",
      data: {
        returnFocus: nested ? {
          preventScroll: true
        } : isVirtualClick(event) || isVirtualPointerEvent(event)
      }
    });
    onOpenChange(false);
  });
  React11.useEffect(() => {
    if (!open || !enabled) {
      return;
    }
    dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
    dataRef.current.__outsidePressBubbles = outsidePressBubbles;
    function onScroll() {
      onOpenChange(false);
    }
    const doc = getDocument(floating);
    escapeKey && doc.addEventListener("keydown", closeOnEscapeKeyDown);
    outsidePress && doc.addEventListener(outsidePressEvent, closeOnPressOutside);
    let ancestors = [];
    if (ancestorScroll) {
      if (isElement2(domReference)) {
        ancestors = getOverflowAncestors(domReference);
      }
      if (isElement2(floating)) {
        ancestors = ancestors.concat(getOverflowAncestors(floating));
      }
      if (!isElement2(reference) && reference && reference.contextElement) {
        ancestors = ancestors.concat(getOverflowAncestors(reference.contextElement));
      }
    }
    ancestors = ancestors.filter((ancestor) => {
      var _doc$defaultView;
      return ancestor !== ((_doc$defaultView = doc.defaultView) == null ? void 0 : _doc$defaultView.visualViewport);
    });
    ancestors.forEach((ancestor) => {
      ancestor.addEventListener("scroll", onScroll, {
        passive: true
      });
    });
    return () => {
      escapeKey && doc.removeEventListener("keydown", closeOnEscapeKeyDown);
      outsidePress && doc.removeEventListener(outsidePressEvent, closeOnPressOutside);
      ancestors.forEach((ancestor) => {
        ancestor.removeEventListener("scroll", onScroll);
      });
    };
  }, [dataRef, floating, domReference, reference, escapeKey, outsidePress, outsidePressEvent, open, onOpenChange, ancestorScroll, enabled, escapeKeyBubbles, outsidePressBubbles, closeOnEscapeKeyDown, closeOnPressOutside]);
  React11.useEffect(() => {
    insideReactTreeRef.current = false;
  }, [outsidePress, outsidePressEvent]);
  return React11.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      reference: {
        onKeyDown: closeOnEscapeKeyDown,
        [bubbleHandlerKeys[referencePressEvent]]: () => {
          if (referencePress) {
            events.emit("dismiss", {
              type: "referencePress",
              data: {
                returnFocus: false
              }
            });
            onOpenChange(false);
          }
        }
      },
      floating: {
        onKeyDown: closeOnEscapeKeyDown,
        [captureHandlerKeys[outsidePressEvent]]: () => {
          insideReactTreeRef.current = true;
        }
      }
    };
  }, [enabled, events, referencePress, outsidePressEvent, referencePressEvent, onOpenChange, closeOnEscapeKeyDown]);
};
var useFocus = function(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    dataRef,
    events,
    refs,
    elements: {
      floating,
      domReference
    }
  } = context;
  const {
    enabled = true,
    keyboardOnly = true
  } = props;
  const pointerTypeRef = React11.useRef("");
  const blockFocusRef = React11.useRef(false);
  const timeoutRef = React11.useRef();
  React11.useEffect(() => {
    if (!enabled) {
      return;
    }
    const doc = getDocument(floating);
    const win = doc.defaultView || window;
    function onBlur() {
      if (!open && isHTMLElement2(domReference) && domReference === activeElement(getDocument(domReference))) {
        blockFocusRef.current = true;
      }
    }
    win.addEventListener("blur", onBlur);
    return () => {
      win.removeEventListener("blur", onBlur);
    };
  }, [floating, domReference, open, enabled]);
  React11.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onDismiss(payload) {
      if (payload.type === "referencePress" || payload.type === "escapeKey") {
        blockFocusRef.current = true;
      }
    }
    events.on("dismiss", onDismiss);
    return () => {
      events.off("dismiss", onDismiss);
    };
  }, [events, enabled]);
  React11.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  return React11.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      reference: {
        onPointerDown(_ref) {
          let {
            pointerType
          } = _ref;
          pointerTypeRef.current = pointerType;
          blockFocusRef.current = !!(pointerType && keyboardOnly);
        },
        onMouseLeave() {
          blockFocusRef.current = false;
        },
        onFocus(event) {
          var _dataRef$current$open;
          if (blockFocusRef.current) {
            return;
          }
          if (event.type === "focus" && ((_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type) === "mousedown" && dataRef.current.openEvent && isEventTargetWithin(dataRef.current.openEvent, domReference)) {
            return;
          }
          dataRef.current.openEvent = event.nativeEvent;
          onOpenChange(true);
        },
        onBlur(event) {
          blockFocusRef.current = false;
          const relatedTarget = event.relatedTarget;
          const movedToFocusGuard = isElement2(relatedTarget) && relatedTarget.hasAttribute("data-floating-ui-focus-guard") && relatedTarget.getAttribute("data-type") === "outside";
          timeoutRef.current = setTimeout(() => {
            if (contains(refs.floating.current, relatedTarget) || contains(domReference, relatedTarget) || movedToFocusGuard) {
              return;
            }
            onOpenChange(false);
          });
        }
      }
    };
  }, [enabled, keyboardOnly, domReference, refs, dataRef, onOpenChange]);
};
var useRole = function(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    floatingId
  } = context;
  const {
    enabled = true,
    role = "dialog"
  } = props;
  const referenceId = useId();
  return React11.useMemo(() => {
    const floatingProps = {
      id: floatingId,
      role
    };
    if (!enabled) {
      return {};
    }
    if (role === "tooltip") {
      return {
        reference: {
          "aria-describedby": open ? floatingId : void 0
        },
        floating: floatingProps
      };
    }
    return {
      reference: __spreadValues(__spreadValues({
        "aria-expanded": open ? "true" : "false",
        "aria-haspopup": role === "alertdialog" ? "dialog" : role,
        "aria-controls": open ? floatingId : void 0
      }, role === "listbox" && {
        role: "combobox"
      }), role === "menu" && {
        id: referenceId
      }),
      floating: __spreadValues(__spreadValues({}, floatingProps), role === "menu" && {
        "aria-labelledby": referenceId
      })
    };
  }, [enabled, role, open, floatingId, referenceId]);
};
function useFloating2(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    open = false,
    onOpenChange: unstable_onOpenChange,
    nodeId
  } = options;
  const position = useFloating(options);
  const tree = useFloatingTree();
  const domReferenceRef = React11.useRef(null);
  const dataRef = React11.useRef({});
  const events = React11.useState(() => createPubSub())[0];
  const floatingId = useId();
  const [domReference, setDomReference] = React11.useState(null);
  const setPositionReference = React11.useCallback((node) => {
    const positionReference = isElement2(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    position.refs.setReference(positionReference);
  }, [position.refs]);
  const setReference = React11.useCallback((node) => {
    if (isElement2(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }
    if (isElement2(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement2(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = React11.useMemo(() => __spreadProps(__spreadValues({}, position.refs), {
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = React11.useMemo(() => __spreadProps(__spreadValues({}, position.elements), {
    domReference
  }), [position.elements, domReference]);
  const onOpenChange = useEvent(unstable_onOpenChange);
  const context = React11.useMemo(() => __spreadProps(__spreadValues({}, position), {
    refs,
    elements,
    dataRef,
    nodeId,
    floatingId,
    events,
    open,
    onOpenChange
  }), [position, nodeId, floatingId, events, open, onOpenChange, refs, elements]);
  index2(() => {
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React11.useMemo(() => __spreadProps(__spreadValues({}, position), {
    context,
    refs,
    elements,
    reference: setReference,
    positionReference: setPositionReference
  }), [position, refs, elements, context, setReference, setPositionReference]);
}
function mergeProps(userProps, propsList, elementKey) {
  const map = /* @__PURE__ */ new Map();
  return __spreadValues(__spreadValues(__spreadValues({}, elementKey === "floating" && {
    tabIndex: -1
  }), userProps), propsList.map((value) => value ? value[elementKey] : null).concat(userProps).reduce((acc, props) => {
    if (!props) {
      return acc;
    }
    Object.entries(props).forEach((_ref) => {
      let [key, value] = _ref;
      if (key.indexOf("on") === 0) {
        if (!map.has(key)) {
          map.set(key, []);
        }
        if (typeof value === "function") {
          var _map$get;
          (_map$get = map.get(key)) == null ? void 0 : _map$get.push(value);
          acc[key] = function() {
            var _map$get2;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map((fn) => fn(...args)).find((val) => val !== void 0);
          };
        }
      } else {
        acc[key] = value;
      }
    });
    return acc;
  }, {}));
}
var useInteractions = function(propsList) {
  if (propsList === void 0) {
    propsList = [];
  }
  const deps = propsList;
  const getReferenceProps = React11.useCallback(
    (userProps) => mergeProps(userProps, propsList, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  );
  const getFloatingProps = React11.useCallback(
    (userProps) => mergeProps(userProps, propsList, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  );
  const getItemProps = React11.useCallback(
    (userProps) => mergeProps(userProps, propsList, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    propsList.map((key) => key == null ? void 0 : key.item)
  );
  return React11.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
};

// ../components/Floating/src/use-floating-auto-update.ts
var import_hooks = require("@raikou/hooks");
function useFloatingAutoUpdate({
  opened,
  floating,
  position,
  positionDependencies
}) {
  const [delayedUpdate, setDelayedUpdate] = (0, import_react15.useState)(0);
  (0, import_react15.useEffect)(() => {
    if (floating.refs.reference.current && floating.refs.floating.current) {
      return autoUpdate(
        floating.refs.reference.current,
        floating.refs.floating.current,
        floating.update
      );
    }
    return void 0;
  }, [
    floating.refs.reference.current,
    floating.refs.floating.current,
    opened,
    delayedUpdate,
    position
  ]);
  (0, import_hooks.useDidUpdate)(() => {
    floating.update();
  }, positionDependencies);
  (0, import_hooks.useDidUpdate)(() => {
    setDelayedUpdate((c) => c + 1);
  }, [opened]);
}

// ../components/Floating/src/get-floating-position/get-floating-position.ts
function getFloatingPosition(dir, position) {
  if (dir === "rtl" && (position.includes("right") || position.includes("left"))) {
    const [side, placement] = position.split("-");
    const flippedPosition = side === "right" ? "left" : "right";
    return placement === void 0 ? flippedPosition : `${flippedPosition}-${placement}`;
  }
  return position;
}

// ../components/Floating/src/FloatingArrow/FloatingArrow.tsx
var import_react17 = __toESM(require("react"));
var import_core10 = require("@raikou/core");

// ../components/Floating/src/FloatingArrow/get-arrow-position-styles.ts
var import_core9 = require("@raikou/core");
function horizontalSide(placement, arrowY, arrowOffset, arrowPosition) {
  if (placement === "center" || arrowPosition === "center") {
    return { top: arrowY };
  }
  if (placement === "end") {
    return { bottom: arrowOffset };
  }
  if (placement === "start") {
    return { top: arrowOffset };
  }
  return {};
}
function verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir) {
  if (placement === "center" || arrowPosition === "center") {
    return { left: arrowX };
  }
  if (placement === "end") {
    return { [dir === "ltr" ? "right" : "left"]: arrowOffset };
  }
  if (placement === "start") {
    return { [dir === "ltr" ? "left" : "right"]: arrowOffset };
  }
  return {};
}
var radiusByFloatingSide = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function getArrowPositionStyles({
  position,
  arrowSize,
  arrowOffset,
  arrowRadius,
  arrowPosition,
  arrowX,
  arrowY,
  dir
}) {
  const [side, placement = "center"] = position.split("-");
  const baseStyles = {
    width: (0, import_core9.rem)(arrowSize),
    height: (0, import_core9.rem)(arrowSize),
    transform: "rotate(45deg)",
    position: "absolute",
    [radiusByFloatingSide[side]]: (0, import_core9.rem)(arrowRadius)
  };
  const arrowPlacement = (0, import_core9.rem)(-arrowSize / 2);
  if (side === "left") {
    return __spreadProps(__spreadValues(__spreadValues({}, baseStyles), horizontalSide(placement, arrowY, arrowOffset, arrowPosition)), {
      right: arrowPlacement,
      borderLeftColor: "transparent",
      borderBottomColor: "transparent"
    });
  }
  if (side === "right") {
    return __spreadProps(__spreadValues(__spreadValues({}, baseStyles), horizontalSide(placement, arrowY, arrowOffset, arrowPosition)), {
      left: arrowPlacement,
      borderRightColor: "transparent",
      borderTopColor: "transparent"
    });
  }
  if (side === "top") {
    return __spreadProps(__spreadValues(__spreadValues({}, baseStyles), verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir)), {
      bottom: arrowPlacement,
      borderTopColor: "transparent",
      borderLeftColor: "transparent"
    });
  }
  if (side === "bottom") {
    return __spreadProps(__spreadValues(__spreadValues({}, baseStyles), verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir)), {
      top: arrowPlacement,
      borderBottomColor: "transparent",
      borderRightColor: "transparent"
    });
  }
  return {};
}

// ../components/Floating/src/FloatingArrow/FloatingArrow.tsx
var FloatingArrow = (0, import_react17.forwardRef)(
  (_a, ref) => {
    var _b = _a, {
      position,
      arrowSize,
      arrowOffset,
      arrowRadius,
      arrowPosition,
      visible,
      arrowX,
      arrowY,
      style
    } = _b, others = __objRest(_b, [
      "position",
      "arrowSize",
      "arrowOffset",
      "arrowRadius",
      "arrowPosition",
      "visible",
      "arrowX",
      "arrowY",
      "style"
    ]);
    const { dir } = (0, import_core10.useDirection)();
    if (!visible) {
      return null;
    }
    return /* @__PURE__ */ import_react17.default.createElement(
      "div",
      __spreadProps(__spreadValues({}, others), {
        ref,
        style: __spreadValues(__spreadValues({}, style), getArrowPositionStyles({
          position,
          arrowSize,
          arrowOffset,
          arrowRadius,
          arrowPosition,
          dir,
          arrowX,
          arrowY
        }))
      })
    );
  }
);
FloatingArrow.displayName = "@raikou/core/FloatingArrow";

// ../components/Popover/src/use-popover.ts
var import_hooks2 = require("@raikou/hooks");
function getPopoverMiddlewares(options) {
  var _a, _b, _c;
  const middlewares = [offset(options.offset)];
  if ((_a = options.middlewares) == null ? void 0 : _a.shift) {
    middlewares.push(shift({ limiter: limitShift() }));
  }
  if ((_b = options.middlewares) == null ? void 0 : _b.flip) {
    middlewares.push(flip());
  }
  if ((_c = options.middlewares) == null ? void 0 : _c.inline) {
    middlewares.push(inline());
  }
  middlewares.push(
    arrow2({ element: options.arrowRef, padding: options.arrowOffset })
  );
  return middlewares;
}
function usePopover(options) {
  const [_opened, setOpened] = (0, import_hooks2.useUncontrolled)({
    value: options.opened,
    defaultValue: options.defaultOpened,
    finalValue: false,
    onChange: options.onChange
  });
  const onClose = () => {
    var _a;
    if (_opened) {
      (_a = options.onClose) == null ? void 0 : _a.call(options);
      setOpened(false);
    }
  };
  const onToggle = () => {
    var _a, _b;
    if (_opened) {
      (_a = options.onClose) == null ? void 0 : _a.call(options);
      setOpened(false);
    } else {
      (_b = options.onOpen) == null ? void 0 : _b.call(options);
      setOpened(true);
    }
  };
  const floating = useFloating2({
    placement: options.position,
    middleware: [
      ...getPopoverMiddlewares(options),
      ...options.width === "target" ? [
        size({
          apply({ rects }) {
            var _a, _b;
            Object.assign((_b = (_a = floating.refs.floating.current) == null ? void 0 : _a.style) != null ? _b : {}, {
              width: `${rects.reference.width}px`
            });
          }
        })
      ] : []
    ]
  });
  useFloatingAutoUpdate({
    opened: options.opened,
    position: options.position,
    positionDependencies: options.positionDependencies || [],
    floating
  });
  (0, import_hooks2.useDidUpdate)(() => {
    var _a;
    (_a = options.onPositionChange) == null ? void 0 : _a.call(options, floating.placement);
  }, [floating.placement]);
  (0, import_hooks2.useDidUpdate)(() => {
    var _a, _b;
    if (!options.opened) {
      (_a = options.onClose) == null ? void 0 : _a.call(options);
    } else {
      (_b = options.onOpen) == null ? void 0 : _b.call(options);
    }
  }, [options.opened]);
  return {
    floating,
    controlled: typeof options.opened === "boolean",
    opened: _opened,
    onClose,
    onToggle
  };
}

// ../components/Popover/src/Popover.context.ts
var [PopoverContextProvider, usePopoverContext] = createSafeContext(
  "Popover component was not found in the tree"
);

// ../components/Popover/src/PopoverTarget/PopoverTarget.tsx
var import_react19 = require("react");

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

// ../components/Popover/src/PopoverTarget/PopoverTarget.tsx
var import_hooks3 = require("@raikou/hooks");
var import_core11 = require("@raikou/core");
var defaultProps7 = {
  refProp: "ref",
  popupType: "dialog"
};
var PopoverTarget = (0, import_core11.factory)((props, ref) => {
  const _a = (0, import_core11.useProps)(
    "PopoverTarget",
    defaultProps7,
    props
  ), { children, refProp, popupType } = _a, others = __objRest(_a, ["children", "refProp", "popupType"]);
  if (!(0, import_core11.isElement)(children)) {
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const forwardedProps = others;
  const ctx = usePopoverContext();
  const targetRef = (0, import_hooks3.useMergedRef)(ctx.reference, children.ref, ref);
  const accessibleProps = ctx.withRoles ? {
    "aria-haspopup": popupType,
    "aria-expanded": ctx.opened,
    "aria-controls": ctx.getDropdownId(),
    id: ctx.getTargetId()
  } : {};
  return (0, import_react19.cloneElement)(children, __spreadValues(__spreadProps(__spreadValues(__spreadValues(__spreadValues({}, forwardedProps), accessibleProps), ctx.targetProps), {
    className: clsx_default(
      ctx.targetProps.className,
      forwardedProps.className,
      children.props.className
    ),
    [refProp]: targetRef
  }), !ctx.controlled ? { onClick: ctx.onToggle } : null));
});
PopoverTarget.displayName = "@raikou/core/PopoverTarget";

// ../components/Popover/src/PopoverDropdown/PopoverDropdown.tsx
var import_react25 = __toESM(require("react"));
var import_hooks7 = require("@raikou/hooks");
var import_core16 = require("@raikou/core");

// ../components/Portal/src/Portal.tsx
var import_react20 = __toESM(require("react"));
var import_react_dom4 = require("react-dom");
var import_hooks4 = require("@raikou/hooks");
var import_core12 = require("@raikou/core");
function createPortalNode(props) {
  const node = document.createElement("div");
  node.setAttribute("data-portal", "true");
  typeof props.className === "string" && node.classList.add(...props.className.split(" "));
  typeof props.style === "object" && Object.assign(node.style, props.style);
  typeof props.id === "string" && node.setAttribute("id", props.id);
  return node;
}
var defaultProps8 = {};
var Portal = (0, import_react20.forwardRef)((props, ref) => {
  const _a = (0, import_core12.useProps)(
    "Portal",
    defaultProps8,
    props
  ), { children, target } = _a, others = __objRest(_a, ["children", "target"]);
  const [mounted, setMounted] = (0, import_react20.useState)(false);
  const nodeRef = (0, import_react20.useRef)(null);
  (0, import_hooks4.useIsomorphicEffect)(() => {
    setMounted(true);
    nodeRef.current = !target ? createPortalNode(others) : typeof target === "string" ? document.querySelector(target) : target;
    (0, import_hooks4.assignRef)(ref, nodeRef.current);
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
  return (0, import_react_dom4.createPortal)(/* @__PURE__ */ import_react20.default.createElement(import_react20.default.Fragment, null, children), nodeRef.current);
});
Portal.displayName = "@raikou/core/Portal";

// ../components/Portal/src/OptionalPortal.tsx
var import_react21 = __toESM(require("react"));
function OptionalPortal(_a) {
  var _b = _a, {
    withinPortal = true,
    children
  } = _b, others = __objRest(_b, [
    "withinPortal",
    "children"
  ]);
  if (withinPortal) {
    return /* @__PURE__ */ import_react21.default.createElement(Portal, __spreadValues({}, others), children);
  }
  return /* @__PURE__ */ import_react21.default.createElement(import_react21.default.Fragment, null, children);
}
OptionalPortal.displayName = "@raikou/core/OptionalPortal";

// ../components/Transition/src/transitions.ts
var import_core13 = require("@raikou/core");
var popIn = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${(0, import_core13.rem)(10)})` },
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
      transform: `translateY(-${(0, import_core13.rem)(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: {
      opacity: 0,
      transform: `translateY(${(0, import_core13.rem)(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${(0, import_core13.rem)(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${(0, import_core13.rem)(20)}) rotate(5deg)` },
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
var import_react23 = __toESM(require("react"));

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
var import_react22 = require("react");
var import_hooks5 = require("@raikou/hooks");
var import_core14 = require("@raikou/core");
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
  const theme = (0, import_core14.useRaikouTheme)();
  const shouldReduceMotion = (0, import_hooks5.useReducedMotion)();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionDuration, setTransitionDuration] = (0, import_react22.useState)(
    reduceMotion ? 0 : duration
  );
  const [transitionStatus, setStatus] = (0, import_react22.useState)(
    mounted ? "entered" : "exited"
  );
  const timeoutRef = (0, import_react22.useRef)(-1);
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
  (0, import_hooks5.useDidUpdate)(() => {
    handleStateChange(mounted);
  }, [mounted]);
  (0, import_react22.useEffect)(() => () => window.clearTimeout(timeoutRef.current), []);
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
    return mounted ? /* @__PURE__ */ import_react23.default.createElement(import_react23.default.Fragment, null, children({})) : keepMounted ? children({ display: "none" }) : null;
  }
  return transitionStatus === "exited" ? keepMounted ? children({ display: "none" }) : null : /* @__PURE__ */ import_react23.default.createElement(import_react23.default.Fragment, null, children(
    getTransitionStyles({
      transition,
      duration: transitionDuration,
      state: transitionStatus,
      timingFunction: transitionTimingFunction
    })
  ));
}
Transition.displayName = "@raikou/core/Transition";

// ../components/Transition/src/get-transition-props/get-transition-props.ts
var defaultTransition = {
  duration: 100,
  transition: "fade"
};
function getTransitionProps(transitionProps, componentTransition) {
  return __spreadValues(__spreadValues(__spreadValues({}, defaultTransition), componentTransition), transitionProps);
}

// ../components/FocusTrap/src/FocusTrap.tsx
var import_react24 = require("react");
var import_hooks6 = require("@raikou/hooks");
var import_core15 = require("@raikou/core");
function FocusTrap({
  children,
  active = true,
  refProp = "ref"
}) {
  const focusTrapRef = (0, import_hooks6.useFocusTrap)(active);
  const ref = (0, import_hooks6.useMergedRef)(focusTrapRef, children == null ? void 0 : children.ref);
  if (!(0, import_core15.isElement)(children)) {
    return children;
  }
  return (0, import_react24.cloneElement)(children, { [refProp]: ref });
}
FocusTrap.displayName = "@raikou/core/FocusTrap";

// ../components/Popover/src/PopoverDropdown/PopoverDropdown.tsx
var defaultProps9 = {};
var PopoverDropdown = (0, import_core16.factory)(
  (_props, ref) => {
    var _b, _c, _d, _e, _f;
    const props = (0, import_core16.useProps)("PopoverDropdown", defaultProps9, _props);
    const _a = props, {
      className,
      style,
      vars,
      children,
      onKeyDownCapture,
      variant,
      classNames,
      styles
    } = _a, others = __objRest(_a, [
      "className",
      "style",
      "vars",
      "children",
      "onKeyDownCapture",
      "variant",
      "classNames",
      "styles"
    ]);
    const ctx = usePopoverContext();
    const returnFocus = (0, import_hooks7.useFocusReturn)({
      opened: ctx.opened,
      shouldReturnFocus: ctx.returnFocus
    });
    const accessibleProps = ctx.withRoles ? {
      "aria-labelledby": ctx.getTargetId(),
      id: ctx.getDropdownId(),
      role: "dialog",
      tabIndex: -1
    } : {};
    const mergedRef = (0, import_hooks7.useMergedRef)(ref, ctx.floating);
    if (ctx.disabled) {
      return null;
    }
    return /* @__PURE__ */ import_react25.default.createElement(OptionalPortal, __spreadProps(__spreadValues({}, ctx.portalProps), { withinPortal: ctx.withinPortal }), /* @__PURE__ */ import_react25.default.createElement(
      Transition,
      __spreadProps(__spreadValues({
        mounted: ctx.opened
      }, ctx.transitionProps), {
        transition: ((_b = ctx.transitionProps) == null ? void 0 : _b.transition) || "fade",
        duration: (_d = (_c = ctx.transitionProps) == null ? void 0 : _c.duration) != null ? _d : 150,
        keepMounted: ctx.keepMounted,
        exitDuration: typeof ((_e = ctx.transitionProps) == null ? void 0 : _e.exitDuration) === "number" ? ctx.transitionProps.exitDuration : (_f = ctx.transitionProps) == null ? void 0 : _f.duration
      }),
      (transitionStyles) => {
        var _a2, _b2;
        return /* @__PURE__ */ import_react25.default.createElement(FocusTrap, { active: ctx.trapFocus }, /* @__PURE__ */ import_react25.default.createElement(
          import_core16.Box,
          __spreadValues(__spreadProps(__spreadValues(__spreadValues({}, accessibleProps), others), {
            variant,
            ref: mergedRef,
            onKeyDownCapture: (0, import_core16.closeOnEscape)(ctx.onClose, {
              active: ctx.closeOnEscape,
              onTrigger: returnFocus,
              onKeyDown: onKeyDownCapture
            }),
            "data-position": ctx.placement
          }), ctx.getStyles("dropdown", {
            className,
            props,
            classNames,
            styles,
            style: [
              __spreadProps(__spreadValues({}, transitionStyles), {
                zIndex: ctx.zIndex,
                top: (_a2 = ctx.y) != null ? _a2 : 0,
                left: (_b2 = ctx.x) != null ? _b2 : 0,
                width: ctx.width === "target" ? void 0 : (0, import_core16.rem)(ctx.width)
              }),
              style
            ]
          })),
          children,
          /* @__PURE__ */ import_react25.default.createElement(
            FloatingArrow,
            __spreadValues({
              ref: ctx.arrowRef,
              arrowX: ctx.arrowX,
              arrowY: ctx.arrowY,
              visible: ctx.withArrow,
              position: ctx.placement,
              arrowSize: ctx.arrowSize,
              arrowRadius: ctx.arrowRadius,
              arrowOffset: ctx.arrowOffset,
              arrowPosition: ctx.arrowPosition
            }, ctx.getStyles("arrow", {
              props,
              classNames,
              styles
            }))
          )
        ));
      }
    ));
  }
);
PopoverDropdown.displayName = "@raikou/core/PopoverDropdown";

// ../components/Popover/src/Popover.tsx
var defaultProps10 = {
  position: "bottom",
  offset: 8,
  positionDependencies: [],
  transitionProps: { transition: "fade", duration: 150 },
  middlewares: { flip: true, shift: true, inline: false },
  arrowSize: 7,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: "side",
  closeOnClickOutside: true,
  withinPortal: true,
  closeOnEscape: true,
  trapFocus: false,
  withRoles: true,
  returnFocus: false,
  clickOutsideEvents: ["mousedown", "touchstart"],
  zIndex: (0, import_core17.getDefaultZIndex)("popover"),
  __staticSelector: "Popover",
  width: "max-content"
};
var varsResolver = (0, import_core17.createVarsResolver)(
  (_, { radius, shadow }) => ({
    dropdown: {
      "--popover-radius": radius === void 0 ? void 0 : (0, import_core17.getRadius)(radius),
      "--popover-shadow": (0, import_core17.getShadow)(shadow)
    }
  })
);
function Popover(_props) {
  var _b, _c, _d, _e, _f, _g;
  const props = (0, import_core17.useProps)("Popover", defaultProps10, _props);
  const _a = props, {
    children,
    position,
    offset: offset2,
    onPositionChange,
    positionDependencies,
    opened,
    transitionProps,
    width,
    middlewares,
    withArrow,
    arrowSize,
    arrowOffset,
    arrowRadius,
    arrowPosition,
    unstyled,
    classNames,
    styles,
    closeOnClickOutside,
    withinPortal,
    portalProps,
    closeOnEscape: closeOnEscape2,
    clickOutsideEvents,
    trapFocus,
    onClose,
    onOpen,
    onChange,
    zIndex,
    radius,
    shadow,
    id,
    defaultOpened,
    __staticSelector,
    withRoles,
    disabled,
    returnFocus,
    variant,
    keepMounted,
    vars
  } = _a, others = __objRest(_a, [
    "children",
    "position",
    "offset",
    "onPositionChange",
    "positionDependencies",
    "opened",
    "transitionProps",
    "width",
    "middlewares",
    "withArrow",
    "arrowSize",
    "arrowOffset",
    "arrowRadius",
    "arrowPosition",
    "unstyled",
    "classNames",
    "styles",
    "closeOnClickOutside",
    "withinPortal",
    "portalProps",
    "closeOnEscape",
    "clickOutsideEvents",
    "trapFocus",
    "onClose",
    "onOpen",
    "onChange",
    "zIndex",
    "radius",
    "shadow",
    "id",
    "defaultOpened",
    "__staticSelector",
    "withRoles",
    "disabled",
    "returnFocus",
    "variant",
    "keepMounted",
    "vars"
  ]);
  const getStyles = (0, import_core17.useStyles)({
    name: __staticSelector,
    props,
    classes: {
      dropdown: "popover-dropdown",
      arrow: "popover-arrow"
    },
    classNames,
    styles,
    unstyled,
    rootSelector: "dropdown",
    vars,
    varsResolver
  });
  const arrowRef = (0, import_react26.useRef)(null);
  const [targetNode, setTargetNode] = (0, import_react26.useState)(null);
  const [dropdownNode, setDropdownNode] = (0, import_react26.useState)(null);
  const { dir } = (0, import_core17.useDirection)();
  const uid = (0, import_hooks8.useId)(id);
  const popover = usePopover({
    middlewares,
    width,
    position: getFloatingPosition(dir, position),
    offset: typeof offset2 === "number" ? offset2 + (withArrow ? arrowSize / 2 : 0) : offset2,
    arrowRef,
    arrowOffset,
    onPositionChange,
    positionDependencies,
    opened,
    defaultOpened,
    onChange,
    onOpen,
    onClose
  });
  (0, import_hooks8.useClickOutside)(
    () => closeOnClickOutside && popover.onClose(),
    clickOutsideEvents,
    [targetNode, dropdownNode]
  );
  const reference = (0, import_react26.useCallback)(
    (node) => {
      setTargetNode(node);
      popover.floating.reference(node);
    },
    [popover.floating.reference]
  );
  const floating = (0, import_react26.useCallback)(
    (node) => {
      setDropdownNode(node);
      popover.floating.floating(node);
    },
    [popover.floating.floating]
  );
  return /* @__PURE__ */ import_react26.default.createElement(
    PopoverContextProvider,
    {
      value: {
        returnFocus,
        disabled,
        controlled: popover.controlled,
        reference,
        floating,
        x: popover.floating.x,
        y: popover.floating.y,
        arrowX: (_d = (_c = (_b = popover.floating) == null ? void 0 : _b.middlewareData) == null ? void 0 : _c.arrow) == null ? void 0 : _d.x,
        arrowY: (_g = (_f = (_e = popover.floating) == null ? void 0 : _e.middlewareData) == null ? void 0 : _f.arrow) == null ? void 0 : _g.y,
        opened: popover.opened,
        arrowRef,
        transitionProps,
        width,
        withArrow,
        arrowSize,
        arrowOffset,
        arrowRadius,
        arrowPosition,
        placement: popover.floating.placement,
        trapFocus,
        withinPortal,
        portalProps,
        zIndex,
        radius,
        shadow,
        closeOnEscape: closeOnEscape2,
        onClose: popover.onClose,
        onToggle: popover.onToggle,
        getTargetId: () => `${uid}-target`,
        getDropdownId: () => `${uid}-dropdown`,
        withRoles,
        targetProps: others,
        __staticSelector,
        classNames,
        styles,
        unstyled,
        variant,
        keepMounted,
        getStyles
      }
    },
    children
  );
}
Popover.Target = PopoverTarget;
Popover.Dropdown = PopoverDropdown;
Popover.displayName = "@raikou/core/Popover";
Popover.extend = (input) => input;

// ../components/TextInput/src/TextInput.tsx
var import_react34 = __toESM(require("react"));
var import_core26 = require("@raikou/core");

// ../components/InputBase/src/InputBase.tsx
var import_react33 = __toESM(require("react"));
var import_core25 = require("@raikou/core");

// ../components/Input/src/Input.tsx
var import_react32 = __toESM(require("react"));
var import_core23 = require("@raikou/core");

// ../components/Input/src/InputWrapper.context.ts
var [InputWrapperProvider, useInputWrapperContext] = createOptionalContext({
  offsetBottom: false,
  offsetTop: false,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});

// ../components/Input/src/InputLabel/InputLabel.tsx
var import_react27 = __toESM(require("react"));
var import_core18 = require("@raikou/core");
var defaultProps11 = {
  labelElement: "label"
};
var varsResolver2 = (0, import_core18.createVarsResolver)((_, { size: size2 }) => ({
  label: {
    "--input-label-size": (0, import_core18.getFontSize)(size2),
    "--input-asterisk-color": void 0
  }
}));
var InputLabel = (0, import_core18.factory)((_props, ref) => {
  const props = (0, import_core18.useProps)("InputLabel", defaultProps11, _props);
  const _a = (0, import_core18.useProps)("InputLabel", defaultProps11, props), {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    labelElement,
    size: size2,
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
  const _getStyles = (0, import_core18.useStyles)({
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
    varsResolver: varsResolver2
  });
  const ctx = useInputWrapperContext();
  const getStyles = (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
  return /* @__PURE__ */ import_react27.default.createElement(
    import_core18.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("label")), {
      component: labelElement,
      variant,
      size: size2,
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
    required && /* @__PURE__ */ import_react27.default.createElement("span", __spreadProps(__spreadValues({}, getStyles("required")), { "aria-hidden": true }), " *")
  );
});
InputLabel.displayName = "@raikou/core/InputLabel";

// ../components/Input/src/InputError/InputError.tsx
var import_react28 = __toESM(require("react"));
var import_core19 = require("@raikou/core");
var defaultProps12 = {};
var varsResolver3 = (0, import_core19.createVarsResolver)((_, { size: size2 }) => ({
  error: {
    "--input-error-size": size2 === void 0 ? void 0 : `calc(${(0, import_core19.getFontSize)(size2)} - ${(0, import_core19.rem)(2)})`
  }
}));
var InputError = (0, import_core19.factory)((_props, ref) => {
  const props = (0, import_core19.useProps)("InputError", defaultProps12, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size: size2,
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
  const _getStyles = (0, import_core19.useStyles)({
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
    varsResolver: varsResolver3
  });
  const ctx = useInputWrapperContext();
  const getStyles = __inheritStyles && (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
  return /* @__PURE__ */ import_react28.default.createElement(
    import_core19.Box,
    __spreadValues(__spreadValues({
      component: "p",
      ref,
      variant,
      size: size2
    }, getStyles("error")), others)
  );
});
InputError.displayName = "@raikou/core/InputError";

// ../components/Input/src/InputDescription/InputDescription.tsx
var import_react29 = __toESM(require("react"));
var import_core20 = require("@raikou/core");
var defaultProps13 = {};
var varsResolver4 = (0, import_core20.createVarsResolver)(
  (_, { size: size2 }) => ({
    description: {
      "--input-description-size": size2 === void 0 ? void 0 : `calc(${(0, import_core20.getFontSize)(size2)} - ${(0, import_core20.rem)(2)})`
    }
  })
);
var InputDescription = (0, import_core20.factory)(
  (_props, ref) => {
    const props = (0, import_core20.useProps)("InputDescription", defaultProps13, _props);
    const _a = (0, import_core20.useProps)("InputDescription", defaultProps13, props), {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      size: size2,
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
    const _getStyles = (0, import_core20.useStyles)({
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
      varsResolver: varsResolver4
    });
    const getStyles = __inheritStyles && (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
    return /* @__PURE__ */ import_react29.default.createElement(
      import_core20.Box,
      __spreadValues(__spreadValues({
        component: "p",
        ref,
        variant,
        size: size2
      }, getStyles("description")), others)
    );
  }
);
InputDescription.displayName = "@raikou/core/InputDescription";

// ../components/Input/src/InputPlaceholder/InputPlaceholder.tsx
var import_react30 = __toESM(require("react"));
var import_core21 = require("@raikou/core");
var defaultProps14 = {};
var InputPlaceholder = (0, import_core21.factory)(
  (_props, ref) => {
    const props = (0, import_core21.useProps)("InputPlaceholder", defaultProps14, _props);
    const _a = (0, import_core21.useProps)("InputPlaceholder", defaultProps14, props), {
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
    const getStyles = (0, import_core21.useStyles)({
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
    return /* @__PURE__ */ import_react30.default.createElement(
      import_core21.Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("placeholder")), {
        component: "span",
        variant,
        ref
      }), others)
    );
  }
);
InputPlaceholder.displayName = "@raikou/core/InputPlaceholder";

// ../components/Input/src/InputWrapper/InputWrapper.tsx
var import_react31 = __toESM(require("react"));
var import_hooks9 = require("@raikou/hooks");
var import_core22 = require("@raikou/core");

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
var defaultProps15 = {
  labelElement: "label",
  inputContainer: (children) => children,
  inputWrapperOrder: ["label", "description", "input", "error"]
};
var varsResolver5 = (0, import_core22.createVarsResolver)((_, { size: size2 }) => ({
  label: {
    "--input-label-size": (0, import_core22.getFontSize)(size2),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": size2 === void 0 ? void 0 : `calc(${(0, import_core22.getFontSize)(size2)} - ${(0, import_core22.rem)(2)})`
  },
  description: {
    "--input-description-size": size2 === void 0 ? void 0 : `calc(${(0, import_core22.getFontSize)(size2)} - ${(0, import_core22.rem)(2)})`
  }
}));
var InputWrapper = (0, import_core22.factory)((_props, ref) => {
  const props = (0, import_core22.useProps)("InputWrapper", defaultProps15, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size: size2,
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
  const getStyles = (0, import_core22.useStyles)({
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
    varsResolver: varsResolver5
  });
  const sharedProps = {
    size: size2,
    variant,
    __staticSelector
  };
  const idBase = (0, import_hooks9.useId)(id);
  const isRequired = typeof withAsterisk === "boolean" ? withAsterisk : required;
  const errorId = (errorProps == null ? void 0 : errorProps.id) || `${idBase}-error`;
  const descriptionId = (descriptionProps == null ? void 0 : descriptionProps.id) || `${idBase}-description`;
  const inputId = idBase;
  const hasError = !!error && typeof error !== "boolean";
  const hasDescription = !!description;
  const _describedBy = `${hasError ? errorId : ""} ${hasDescription ? descriptionId : ""}`;
  const describedBy = _describedBy.trim().length > 0 ? _describedBy.trim() : void 0;
  const labelId = (labelProps == null ? void 0 : labelProps.id) || `${idBase}-label`;
  const _label = label && /* @__PURE__ */ import_react31.default.createElement(
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
  const _description = hasDescription && /* @__PURE__ */ import_react31.default.createElement(
    InputDescription,
    __spreadProps(__spreadValues(__spreadValues({
      key: "description"
    }, descriptionProps), sharedProps), {
      size: (descriptionProps == null ? void 0 : descriptionProps.size) || sharedProps.size,
      id: (descriptionProps == null ? void 0 : descriptionProps.id) || descriptionId
    }),
    description
  );
  const _input = /* @__PURE__ */ import_react31.default.createElement(import_react31.default.Fragment, { key: "input" }, inputContainer(children));
  const _error = hasError && /* @__PURE__ */ import_react31.default.createElement(
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
  return /* @__PURE__ */ import_react31.default.createElement(
    InputWrapperProvider,
    {
      value: __spreadValues({
        getStyles,
        describedBy,
        inputId,
        labelId
      }, getInputOffsets(inputWrapperOrder, { hasDescription, hasError }))
    },
    /* @__PURE__ */ import_react31.default.createElement(
      import_core22.Box,
      __spreadValues(__spreadValues({
        ref,
        variant,
        size: size2
      }, getStyles("root")), others),
      content
    )
  );
});
InputWrapper.displayName = "@raikou/core/InputWrapper";

// ../components/Input/src/Input.tsx
var defaultProps16 = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: true,
  withErrorStyles: true
};
var varsResolver6 = (0, import_core23.createVarsResolver)((_, props, ctx) => ({
  wrapper: {
    "--input-margin-top": ctx.offsetTop ? "calc(var(--raikou-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": ctx.offsetBottom ? "calc(var(--raikou-spacing-xs) / 2)" : void 0,
    "--input-height": (0, import_core23.getSize)(props.size, "input-height"),
    "--input-fz": (0, import_core23.getFontSize)(props.size),
    "--input-radius": props.radius === void 0 ? void 0 : (0, import_core23.getRadius)(props.radius),
    "--input-left-section-width": props.leftSectionWidth !== void 0 ? (0, import_core23.rem)(props.leftSectionWidth) : void 0,
    "--input-right-section-width": props.rightSectionWidth !== void 0 ? (0, import_core23.rem)(props.rightSectionWidth) : void 0,
    "--input-padding-y": props.multiline ? (0, import_core23.getSize)(props.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": props.leftSectionPointerEvents,
    "--input-right-section-pointer-events": props.rightSectionPointerEvents
  }
}));
var Input = (0, import_core23.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core23.useProps)("Input", defaultProps16, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    required,
    __staticSelector,
    __stylesApiProps,
    size: size2,
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
  const { styleProps, rest } = (0, import_core23.extractStyleProps)(others);
  const ctx = useInputWrapperContext();
  const stylesCtx = {
    offsetBottom: ctx == null ? void 0 : ctx.offsetBottom,
    offsetTop: ctx == null ? void 0 : ctx.offsetTop
  };
  const getStyles = (0, import_core23.useStyles)({
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
    varsResolver: varsResolver6
  });
  const ariaAttributes = withAria ? {
    required,
    disabled,
    "aria-invalid": !!error,
    "aria-describedby": ctx == null ? void 0 : ctx.describedBy,
    id: (ctx == null ? void 0 : ctx.inputId) || id
  } : {};
  return /* @__PURE__ */ import_react32.default.createElement(
    import_core23.Box,
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
      size: size2
    }),
    leftSection && /* @__PURE__ */ import_react32.default.createElement(
      "div",
      __spreadValues(__spreadProps(__spreadValues({}, leftSectionProps), {
        "data-position": "left"
      }), getStyles("section", {
        className: leftSectionProps == null ? void 0 : leftSectionProps.className,
        style: leftSectionProps == null ? void 0 : leftSectionProps.style
      })),
      leftSection
    ),
    /* @__PURE__ */ import_react32.default.createElement(
      import_core23.Box,
      __spreadValues(__spreadProps(__spreadValues(__spreadValues({
        component: "input"
      }, rest), ariaAttributes), {
        ref,
        required,
        mod: { disabled, error: !!error && withErrorStyles },
        variant
      }), getStyles("input"))
    ),
    rightSection && /* @__PURE__ */ import_react32.default.createElement(
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

// ../components/Input/src/use-input-props.ts
var import_core24 = require("@raikou/core");
function useInputProps(component, defaultProps37, _props) {
  const props = (0, import_core24.useProps)(component, defaultProps37, _props);
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
    size: size2,
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
  const { styleProps, rest } = (0, import_core24.extractStyleProps)(others);
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
    size: size2,
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
      size: size2,
      __staticSelector,
      __stylesApiProps: __stylesApiProps || props,
      error,
      variant
    }
  });
}

// ../components/InputBase/src/InputBase.tsx
var defaultProps17 = {
  __staticSelector: "InputBase",
  withAria: true
};
var InputBase = (0, import_core25.polymorphicFactory)((props, ref) => {
  const _a = useInputProps(
    "InputBase",
    defaultProps17,
    props
  ), { inputProps, wrapperProps } = _a, others = __objRest(_a, ["inputProps", "wrapperProps"]);
  return /* @__PURE__ */ import_react33.default.createElement(Input.Wrapper, __spreadValues({}, wrapperProps), /* @__PURE__ */ import_react33.default.createElement(Input, __spreadProps(__spreadValues(__spreadValues({}, inputProps), others), { ref })));
});
InputBase.displayName = "@raikou/core/InputBase";

// ../components/TextInput/src/TextInput.tsx
var defaultProps18 = {};
var TextInput = (0, import_core26.factory)((props, ref) => {
  const _props = (0, import_core26.useProps)("TextInput", defaultProps18, props);
  return /* @__PURE__ */ import_react34.default.createElement(
    InputBase,
    __spreadProps(__spreadValues({
      component: "input",
      ref
    }, _props), {
      __staticSelector: "TextInput"
    })
  );
});
TextInput.displayName = "@raikou/core/TextInput";

// ../components/Button/src/Button.tsx
var import_react41 = __toESM(require("react"));
var import_core33 = require("@raikou/core");

// ../components/Loader/src/Loader.tsx
var import_react39 = __toESM(require("react"));
var import_core31 = require("@raikou/core");

// ../components/Loader/src/loaders/Bars.tsx
var import_react35 = __toESM(require("react"));
var import_core27 = require("@raikou/core");
var Bars = (0, import_react35.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react35.default.createElement(
      import_core27.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("bars-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react35.default.createElement("span", { className: "bar" }),
      /* @__PURE__ */ import_react35.default.createElement("span", { className: "bar" }),
      /* @__PURE__ */ import_react35.default.createElement("span", { className: "bar" })
    );
  }
);

// ../components/Loader/src/loaders/Oval.tsx
var import_react36 = __toESM(require("react"));
var import_core28 = require("@raikou/core");
var Oval = (0, import_react36.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react36.default.createElement(
      import_core28.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("oval-loader", className)
      }, others), {
        ref
      })
    );
  }
);

// ../components/Loader/src/loaders/Progress.tsx
var import_react37 = __toESM(require("react"));
var import_core29 = require("@raikou/core");
var Progress = (0, import_react37.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react37.default.createElement(
      import_core29.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("progress-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react37.default.createElement("svg", { viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ import_react37.default.createElement("g", { fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ import_react37.default.createElement("g", { transform: "translate(2.5 2.5)", strokeWidth: "5" }, /* @__PURE__ */ import_react37.default.createElement("circle", { strokeOpacity: ".5", cx: "16", cy: "16", r: "16" }), /* @__PURE__ */ import_react37.default.createElement("path", { d: "M32 16c0-9.94-8.06-16-16-16" }, /* @__PURE__ */ import_react37.default.createElement(
        "animateTransform",
        {
          attributeName: "transform",
          type: "rotate",
          from: "0 16 16",
          to: "360 16 16",
          dur: "1s",
          repeatCount: "indefinite"
        }
      )))))
    );
  }
);

// ../components/Loader/src/loaders/Dots.tsx
var import_react38 = __toESM(require("react"));
var import_core30 = require("@raikou/core");
var Dots = (0, import_react38.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ import_react38.default.createElement(
      import_core30.Box,
      __spreadProps(__spreadValues({
        component: "span",
        className: clsx_default("dots-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ import_react38.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react38.default.createElement("span", { className: "dot" }),
      /* @__PURE__ */ import_react38.default.createElement("span", { className: "dot" })
    );
  }
);

// ../components/Loader/src/Loader.tsx
var defaultLoaders = {
  bars: Bars,
  oval: Oval,
  dots: Dots,
  progress: Progress
};
var defaultProps19 = {
  loaders: defaultLoaders,
  type: "oval"
};
var varsResolver7 = (0, import_core31.createVarsResolver)(
  (theme, { size: size2, color }) => ({
    root: {
      "--loader-size": (0, import_core31.getSize)(size2, "loader-size"),
      "--loader-color": color ? (0, import_core31.getThemeColor)(color, theme) : void 0
    }
  })
);
var Loader = (0, import_core31.factory)((_props, ref) => {
  const props = (0, import_core31.useProps)("Loader", defaultProps19, _props);
  const _a = props, {
    size: size2,
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
  const getStyles = (0, import_core31.useStyles)({
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
    varsResolver: varsResolver7
  });
  return /* @__PURE__ */ import_react39.default.createElement(
    import_core31.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      ref,
      component: loaders[type],
      variant,
      size: size2
    }), others)
  );
});
Loader.displayName = "@raikou/core/Loader";

// ../components/Button/src/ButtonGroup/ButtonGroup.tsx
var import_react40 = __toESM(require("react"));
var import_core32 = require("@raikou/core");
var defaultProps20 = {
  orientation: "horizontal"
};
var varsResolver8 = (0, import_core32.createVarsResolver)(
  (_, { borderWidth }) => ({
    root: { "--button-border-width": (0, import_core32.rem)(borderWidth) }
  })
);
var ButtonGroup = (0, import_core32.factory)((_props, ref) => {
  const props = (0, import_core32.useProps)("ButtonGroup", defaultProps20, _props);
  const _a = (0, import_core32.useProps)("ButtonGroup", defaultProps20, _props), {
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
  const getStyles = (0, import_core32.useStyles)({
    name: "ButtonGroup",
    props,
    classes: {
      root: "buttonGroup-root"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver8
  });
  return /* @__PURE__ */ import_react40.default.createElement(
    import_core32.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      ref,
      variant,
      mod: { "data-orientation": orientation },
      role: "group"
    }), others)
  );
});
ButtonGroup.displayName = "@raikou/core/ButtonGroup";

// ../components/Button/src/Button.tsx
var defaultProps21 = {
  loaderPosition: "left"
};
var varsResolver9 = (0, import_core33.createVarsResolver)(
  (theme, { radius, color, gradient, variant, size: size2, justify }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled"
    });
    return {
      root: {
        "--button-justify": justify,
        "--button-height": (0, import_core33.getSize)(size2, "button-height"),
        "--button-padding-x": (0, import_core33.getSize)(size2, "button-padding-x"),
        "--button-fz": (size2 == null ? void 0 : size2.includes("compact")) ? (0, import_core33.getFontSize)(size2.replace("compact-", "")) : (0, import_core33.getFontSize)(size2),
        "--button-radius": radius ? (0, import_core33.getRadius)(radius) : void 0,
        "--button-bg": color || variant ? colors.background : void 0,
        "--button-hover": color || variant ? colors.hover : void 0,
        "--button-color": color || variant ? colors.color : void 0,
        "--button-bd": color || variant ? colors.border : void 0
      }
    };
  }
);
var Button = (0, import_core33.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core33.useProps)("Button", defaultProps21, _props);
  const _a = props, {
    style,
    vars,
    className,
    color,
    disabled,
    children,
    leftSection,
    rightSection,
    fullWidth,
    variant,
    radius,
    loading,
    loaderPosition,
    loaderProps,
    gradient,
    classNames,
    styles,
    unstyled,
    "data-disabled": dataDisabled
  } = _a, others = __objRest(_a, [
    "style",
    "vars",
    "className",
    "color",
    "disabled",
    "children",
    "leftSection",
    "rightSection",
    "fullWidth",
    "variant",
    "radius",
    "loading",
    "loaderPosition",
    "loaderProps",
    "gradient",
    "classNames",
    "styles",
    "unstyled",
    "data-disabled"
  ]);
  const getStyles = (0, import_core33.useStyles)({
    name: "Button",
    props,
    classes: {
      root: "button-root",
      inner: "button-inner",
      loader: "button-loader",
      section: "button-section",
      label: "button-label"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver9
  });
  const hasLeftSection = !!leftSection;
  const hasRightSection = !!rightSection;
  return /* @__PURE__ */ import_react41.default.createElement(
    UnstyledButton,
    __spreadValues(__spreadProps(__spreadValues({
      ref
    }, getStyles("root", { active: !disabled && !loading && !dataDisabled })), {
      unstyled,
      variant,
      disabled: disabled || loading,
      mod: [
        "button",
        {
          disabled: disabled || dataDisabled,
          loading,
          block: fullWidth,
          "with-left-section": hasLeftSection,
          "with-right-section": hasRightSection
        }
      ]
    }), others),
    /* @__PURE__ */ import_react41.default.createElement("span", __spreadValues({}, getStyles("inner")), !loading && leftSection && /* @__PURE__ */ import_react41.default.createElement(
      import_core33.Box,
      __spreadProps(__spreadValues({
        component: "span"
      }, getStyles("section")), {
        mod: { position: "left" }
      }),
      leftSection
    ), loading && loaderPosition === "left" && /* @__PURE__ */ import_react41.default.createElement(
      import_core33.Box,
      __spreadProps(__spreadValues({
        component: "span"
      }, getStyles("section")), {
        mod: { position: "left" }
      }),
      !loading && leftSection,
      loading && /* @__PURE__ */ import_react41.default.createElement(
        Loader,
        __spreadValues({
          type: "progress",
          color: "var(--button-color)",
          size: "calc(var(--button-height) / 2.4)"
        }, loaderProps)
      )
    ), loading && loaderPosition === "center" && /* @__PURE__ */ import_react41.default.createElement(import_core33.Box, __spreadValues({ component: "span" }, getStyles("loader")), /* @__PURE__ */ import_react41.default.createElement(
      Loader,
      __spreadValues({
        color: "var(--button-color)",
        size: "calc(var(--button-height) / 1.8)"
      }, loaderProps)
    )), /* @__PURE__ */ import_react41.default.createElement(import_core33.Box, __spreadValues({ component: "span", mod: { loading } }, getStyles("label")), children), rightSection && /* @__PURE__ */ import_react41.default.createElement(
      import_core33.Box,
      __spreadProps(__spreadValues({
        component: "span"
      }, getStyles("section")), {
        mod: { position: "right" }
      }),
      rightSection
    ))
  );
});
Button.displayName = "@raikou/core/Button";
Button.Group = ButtonGroup;

// ../components/Tooltip/src/Tooltip.tsx
var import_react50 = __toESM(require("react"));
var import_hooks12 = require("@raikou/hooks");
var import_core36 = require("@raikou/core");

// ../components/Tooltip/src/TooltipFloating/TooltipFloating.tsx
var import_react44 = __toESM(require("react"));
var import_hooks10 = require("@raikou/hooks");
var import_core34 = require("@raikou/core");

// ../components/Tooltip/src/TooltipFloating/use-floating-tooltip.ts
var import_react42 = require("react");
function useFloatingTooltip({
  offset: offset2,
  position
}) {
  const [opened, setOpened] = (0, import_react42.useState)(false);
  const boundaryRef = (0, import_react42.useRef)();
  const { x, y, reference, floating, refs, update, placement } = useFloating2({
    placement: position,
    middleware: [
      shift({
        crossAxis: true,
        padding: 5,
        rootBoundary: "document"
      })
    ]
  });
  const horizontalOffset = placement.includes("right") ? offset2 : position.includes("left") ? offset2 * -1 : 0;
  const verticalOffset = placement.includes("bottom") ? offset2 : position.includes("top") ? offset2 * -1 : 0;
  const handleMouseMove = (0, import_react42.useCallback)(
    ({ clientX, clientY }) => {
      reference({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: clientX,
            y: clientY,
            left: clientX + horizontalOffset,
            top: clientY + verticalOffset,
            right: clientX,
            bottom: clientY
          };
        }
      });
    },
    [reference]
  );
  (0, import_react42.useEffect)(() => {
    if (refs.floating.current) {
      const boundary = boundaryRef.current;
      boundary.addEventListener("mousemove", handleMouseMove);
      const parents = getOverflowAncestors(refs.floating.current);
      parents.forEach((parent) => {
        parent.addEventListener("scroll", update);
      });
      return () => {
        boundary.removeEventListener("mousemove", handleMouseMove);
        parents.forEach((parent) => {
          parent.removeEventListener("scroll", update);
        });
      };
    }
    return void 0;
  }, [reference, refs.floating.current, update, handleMouseMove, opened]);
  return { handleMouseMove, x, y, opened, setOpened, boundaryRef, floating };
}

// ../components/Tooltip/src/TooltipFloating/TooltipFloating.tsx
var defaultProps22 = {
  refProp: "ref",
  withinPortal: true,
  offset: 10,
  position: "right",
  zIndex: (0, import_core34.getDefaultZIndex)("popover")
};
var varsResolver10 = (0, import_core34.createVarsResolver)(
  (theme, { radius, color }) => ({
    tooltip: {
      "--tooltip-radius": radius === void 0 ? void 0 : (0, import_core34.getRadius)(radius),
      "--tooltip-bg": color ? (0, import_core34.getThemeColor)(color, theme) : void 0
    }
  })
);
var TooltipFloating = (0, import_core34.factory)(
  (_props, ref) => {
    var _b, _c;
    const props = (0, import_core34.useProps)("TooltipFloating", defaultProps22, _props);
    const _a = props, {
      children,
      refProp,
      withinPortal,
      style,
      className,
      classNames,
      styles,
      unstyled,
      radius,
      color,
      label,
      offset: offset2,
      position,
      multiline,
      zIndex,
      disabled,
      variant,
      vars,
      portalProps
    } = _a, others = __objRest(_a, [
      "children",
      "refProp",
      "withinPortal",
      "style",
      "className",
      "classNames",
      "styles",
      "unstyled",
      "radius",
      "color",
      "label",
      "offset",
      "position",
      "multiline",
      "zIndex",
      "disabled",
      "variant",
      "vars",
      "portalProps"
    ]);
    const theme = (0, import_core34.useRaikouTheme)();
    const getStyles = (0, import_core34.useStyles)({
      name: "TooltipFloating",
      props,
      classes: {
        tooltip: "tooltip-root",
        arrow: "tooltip-arrow"
      },
      className,
      style,
      classNames,
      styles,
      unstyled,
      rootSelector: "tooltip",
      vars,
      varsResolver: varsResolver10
    });
    const { handleMouseMove, x, y, opened, boundaryRef, floating, setOpened } = useFloatingTooltip({
      offset: offset2,
      position
    });
    if (!(0, import_core34.isElement)(children)) {
      throw new Error(
        "[@raikou/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
      );
    }
    const targetRef = (0, import_hooks10.useMergedRef)(boundaryRef, children.ref, ref);
    const onMouseEnter = (event) => {
      var _a2, _b2;
      (_b2 = (_a2 = children.props).onMouseEnter) == null ? void 0 : _b2.call(_a2, event);
      handleMouseMove(event);
      setOpened(true);
    };
    const onMouseLeave = (event) => {
      var _a2, _b2;
      (_b2 = (_a2 = children.props).onMouseLeave) == null ? void 0 : _b2.call(_a2, event);
      setOpened(false);
    };
    return /* @__PURE__ */ import_react44.default.createElement(import_react44.default.Fragment, null, /* @__PURE__ */ import_react44.default.createElement(OptionalPortal, __spreadProps(__spreadValues({}, portalProps), { withinPortal }), /* @__PURE__ */ import_react44.default.createElement(
      import_core34.Box,
      __spreadProps(__spreadValues(__spreadValues({}, others), getStyles("tooltip", {
        style: __spreadProps(__spreadValues({}, (0, import_core34.getStyleObject)(style, theme)), {
          zIndex,
          display: !disabled && opened ? "block" : "none",
          top: (_b = y && Math.round(y)) != null ? _b : "",
          left: (_c = x && Math.round(x)) != null ? _c : ""
        })
      })), {
        variant,
        ref: floating
      }),
      label
    )), (0, import_react44.cloneElement)(children, __spreadProps(__spreadValues({}, children.props), {
      [refProp]: targetRef,
      onMouseEnter,
      onMouseLeave
    })));
  }
);
TooltipFloating.displayName = "@raikou/core/TooltipFloating";

// ../components/Tooltip/src/TooltipGroup/TooltipGroup.tsx
var import_react46 = __toESM(require("react"));
var import_core35 = require("@raikou/core");

// ../components/Tooltip/src/TooltipGroup/TooltipGroup.context.ts
var import_react45 = require("react");
var TooltipGroupContext = (0, import_react45.createContext)(false);
var TooltipGroupProvider = TooltipGroupContext.Provider;
var useTooltipGroupContext = () => (0, import_react45.useContext)(TooltipGroupContext);

// ../components/Tooltip/src/TooltipGroup/TooltipGroup.tsx
var defaultProps23 = {
  openDelay: 0,
  closeDelay: 0
};
function TooltipGroup(props) {
  const { openDelay, closeDelay, children } = (0, import_core35.useProps)(
    "TooltipGroup",
    defaultProps23,
    props
  );
  return /* @__PURE__ */ import_react46.default.createElement(TooltipGroupProvider, { value: true }, /* @__PURE__ */ import_react46.default.createElement(FloatingDelayGroup, { delay: { open: openDelay, close: closeDelay } }, children));
}
TooltipGroup.displayName = "@raikou/core/TooltipGroup";

// ../components/Tooltip/src/use-tooltip.ts
var import_react48 = require("react");
var import_hooks11 = require("@raikou/hooks");
function useTooltip(settings) {
  var _a, _b, _c;
  const [uncontrolledOpened, setUncontrolledOpened] = (0, import_react48.useState)(false);
  const controlled = typeof settings.opened === "boolean";
  const opened = controlled ? settings.opened : uncontrolledOpened;
  const withinGroup = useTooltipGroupContext();
  const uid = (0, import_hooks11.useId)();
  const { delay: groupDelay, currentId, setCurrentId } = useDelayGroupContext();
  const onChange = (0, import_react48.useCallback)(
    (_opened) => {
      setUncontrolledOpened(_opened);
      if (_opened) {
        setCurrentId(uid);
      }
    },
    [setCurrentId, uid]
  );
  const {
    x,
    y,
    reference,
    floating,
    context,
    refs,
    update,
    placement,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} }
  } = useFloating2({
    placement: settings.position,
    open: opened,
    onOpenChange: onChange,
    middleware: [
      offset(settings.offset),
      shift({ padding: 8 }),
      flip(),
      arrow2({ element: settings.arrowRef, padding: settings.arrowOffset }),
      ...settings.inline ? [inline()] : []
    ]
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, {
      enabled: (_a = settings.events) == null ? void 0 : _a.hover,
      delay: withinGroup ? groupDelay : { open: settings.openDelay, close: settings.closeDelay },
      mouseOnly: !((_b = settings.events) == null ? void 0 : _b.touch)
    }),
    useFocus(context, { enabled: (_c = settings.events) == null ? void 0 : _c.focus, keyboardOnly: true }),
    useRole(context, { role: "tooltip" }),
    // cannot be used with controlled tooltip, page jumps
    useDismiss(context, { enabled: typeof settings.opened === void 0 }),
    useDelayGroup(context, { id: uid })
  ]);
  useFloatingAutoUpdate({
    opened,
    position: settings.position,
    positionDependencies: settings.positionDependencies,
    floating: { refs, update }
  });
  (0, import_hooks11.useDidUpdate)(() => {
    var _a2;
    (_a2 = settings.onPositionChange) == null ? void 0 : _a2.call(settings, placement);
  }, [placement]);
  const isGroupPhase = opened && currentId && currentId !== uid;
  return {
    x,
    y,
    arrowX,
    arrowY,
    reference,
    floating,
    getFloatingProps,
    getReferenceProps,
    isGroupPhase,
    opened,
    placement
  };
}

// ../components/Tooltip/src/Tooltip.tsx
var defaultProps24 = {
  position: "top",
  refProp: "ref",
  withinPortal: true,
  inline: false,
  arrowSize: 4,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: "side",
  offset: 5,
  transitionProps: { duration: 100, transition: "fade" },
  events: { hover: true, focus: false, touch: false },
  zIndex: (0, import_core36.getDefaultZIndex)("popover"),
  positionDependencies: []
};
var varsResolver11 = (0, import_core36.createVarsResolver)(
  (theme, { radius, color }) => ({
    tooltip: {
      "--tooltip-radius": radius === void 0 ? void 0 : (0, import_core36.getRadius)(radius),
      "--tooltip-bg": color ? (0, import_core36.getThemeColor)(color, theme) : void 0
    }
  })
);
var Tooltip = (0, import_core36.factory)((_props, ref) => {
  const props = (0, import_core36.useProps)("Tooltip", defaultProps24, _props);
  const _a = (0, import_core36.useProps)("Tooltip", defaultProps24, props), {
    children,
    position,
    refProp,
    label,
    openDelay,
    closeDelay,
    onPositionChange,
    opened,
    withinPortal,
    radius,
    color,
    classNames,
    styles,
    unstyled,
    style,
    className,
    withArrow,
    arrowSize,
    arrowOffset,
    arrowRadius,
    arrowPosition,
    offset: offset2,
    transitionProps,
    multiline,
    events,
    zIndex,
    disabled,
    positionDependencies,
    onClick,
    onMouseEnter,
    onMouseLeave,
    inline: inline2,
    variant,
    keepMounted,
    vars,
    portalProps
  } = _a, others = __objRest(_a, [
    "children",
    "position",
    "refProp",
    "label",
    "openDelay",
    "closeDelay",
    "onPositionChange",
    "opened",
    "withinPortal",
    "radius",
    "color",
    "classNames",
    "styles",
    "unstyled",
    "style",
    "className",
    "withArrow",
    "arrowSize",
    "arrowOffset",
    "arrowRadius",
    "arrowPosition",
    "offset",
    "transitionProps",
    "multiline",
    "events",
    "zIndex",
    "disabled",
    "positionDependencies",
    "onClick",
    "onMouseEnter",
    "onMouseLeave",
    "inline",
    "variant",
    "keepMounted",
    "vars",
    "portalProps"
  ]);
  const { dir } = (0, import_core36.useDirection)();
  const arrowRef = (0, import_react50.useRef)(null);
  const tooltip = useTooltip({
    position: getFloatingPosition(dir, position),
    closeDelay,
    openDelay,
    onPositionChange,
    opened,
    events,
    arrowRef,
    arrowOffset,
    offset: typeof offset2 === "number" ? offset2 + (withArrow ? arrowSize / 2 : 0) : offset2,
    positionDependencies: [...positionDependencies, children],
    inline: inline2
  });
  const getStyles = (0, import_core36.useStyles)({
    name: "Tooltip",
    props,
    classes: {
      tooltip: "tooltip-root",
      arrow: "tooltip-arrow"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "tooltip",
    vars,
    varsResolver: varsResolver11
  });
  if (!(0, import_core36.isElement)(children)) {
    throw new Error(
      "[@raikou/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const targetRef = (0, import_hooks12.useMergedRef)(tooltip.reference, children.ref, ref);
  const transition = getTransitionProps(transitionProps, {
    duration: 100,
    transition: "fade"
  });
  return /* @__PURE__ */ import_react50.default.createElement(import_react50.default.Fragment, null, /* @__PURE__ */ import_react50.default.createElement(OptionalPortal, __spreadProps(__spreadValues({}, portalProps), { withinPortal }), /* @__PURE__ */ import_react50.default.createElement(
    Transition,
    __spreadProps(__spreadValues({}, transition), {
      keepMounted,
      mounted: !disabled && !!tooltip.opened,
      duration: tooltip.isGroupPhase ? 10 : transition.duration
    }),
    (transitionStyles) => {
      var _a2, _b;
      return /* @__PURE__ */ import_react50.default.createElement(
        import_core36.Box,
        __spreadValues(__spreadProps(__spreadValues({}, others), {
          variant,
          mod: { multiline }
        }), tooltip.getFloatingProps({
          ref: tooltip.floating,
          className: getStyles("tooltip").className,
          style: __spreadProps(__spreadValues(__spreadValues({}, getStyles("tooltip").style), transitionStyles), {
            zIndex,
            top: (_a2 = tooltip.y) != null ? _a2 : 0,
            left: (_b = tooltip.x) != null ? _b : 0
          })
        })),
        label,
        /* @__PURE__ */ import_react50.default.createElement(
          FloatingArrow,
          __spreadValues({
            ref: arrowRef,
            arrowX: tooltip.arrowX,
            arrowY: tooltip.arrowY,
            visible: withArrow,
            position: tooltip.placement,
            arrowSize,
            arrowOffset,
            arrowRadius,
            arrowPosition
          }, getStyles("arrow"))
        )
      );
    }
  )), (0, import_react50.cloneElement)(
    children,
    tooltip.getReferenceProps(__spreadValues({
      onClick,
      onMouseEnter,
      onMouseLeave,
      onMouseMove: props.onMouseMove,
      onPointerDown: props.onPointerDown,
      onPointerEnter: props.onPointerEnter,
      [refProp]: targetRef,
      className: clsx_default(className, children.props.className)
    }, children.props))
  ));
});
Tooltip.displayName = "@raikou/core/Tooltip";
Tooltip.Floating = TooltipFloating;
Tooltip.Group = TooltipGroup;

// src/RichTextEditorControl/RichTextEditorLinkControl.tsx
var import_hooks13 = require("@raikou/hooks");
var import_icons_react2 = require("@tabler/icons-react");
var LinkIcon = (props) => /* @__PURE__ */ import_react51.default.createElement(import_icons_react2.IconLink, __spreadValues({ stroke: 1.5 }, props));
var defaultProps25 = {};
var RichTextEditorLinkControl = (0, import_core37.factory)((_props, ref) => {
  var _b;
  const props = (0, import_core37.useProps)("RichTextEditorLinkControl", defaultProps25, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    vars,
    icon,
    popoverProps,
    disableTooltips,
    initialExternal
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "vars",
    "icon",
    "popoverProps",
    "disableTooltips",
    "initialExternal"
  ]);
  const ctx = useRichTextEditorContext();
  const stylesApiProps = { classNames, styles };
  const [url, setUrl] = (0, import_hooks13.useInputState)("");
  const [external, setExternal] = (0, import_react51.useState)(initialExternal);
  const [opened, { open, close }] = (0, import_hooks13.useDisclosure)(false);
  const handleOpen = () => {
    var _a2;
    open();
    const linkData = (_a2 = ctx.editor) == null ? void 0 : _a2.getAttributes("link");
    setUrl((linkData == null ? void 0 : linkData.href) || "");
    setExternal((linkData == null ? void 0 : linkData.target) === "_blank");
  };
  const handleClose = () => {
    close();
    setUrl("");
    setExternal(initialExternal);
  };
  const setLink = () => {
    var _a2, _b2;
    handleClose();
    url === "" ? (_a2 = ctx.editor) == null ? void 0 : _a2.chain().focus().extendMarkRange("link").unsetLink().run() : (_b2 = ctx.editor) == null ? void 0 : _b2.chain().focus().extendMarkRange("link").setLink({ href: url, target: external ? "_blank" : null }).run();
  };
  const handleInputKeydown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setLink();
    }
  };
  (0, import_hooks13.useWindowEvent)("edit-link", handleOpen, false);
  const { resolvedClassNames, resolvedStyles } = (0, import_core37.useResolvedStylesApi)({
    classNames,
    styles,
    props
  });
  return /* @__PURE__ */ import_react51.default.createElement(
    Popover,
    __spreadValues({
      trapFocus: true,
      shadow: "md",
      withinPortal: true,
      opened,
      onClose: handleClose,
      offset: -44,
      zIndex: 1e4
    }, popoverProps),
    /* @__PURE__ */ import_react51.default.createElement(Popover.Target, null, /* @__PURE__ */ import_react51.default.createElement(
      RichTextEditorControlBase,
      __spreadProps(__spreadValues({
        icon: icon || LinkIcon
      }, others), {
        "aria-label": ctx.labels.linkControlLabel,
        title: ctx.labels.linkControlLabel,
        onClick: handleOpen,
        active: (_b = ctx.editor) == null ? void 0 : _b.isActive("link"),
        ref,
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        className,
        style
      })
    )),
    /* @__PURE__ */ import_react51.default.createElement(
      Popover.Dropdown,
      __spreadValues({}, ctx.getStyles("linkEditorDropdown", stylesApiProps)),
      /* @__PURE__ */ import_react51.default.createElement("div", __spreadValues({}, ctx.getStyles("linkEditor", stylesApiProps)), /* @__PURE__ */ import_react51.default.createElement(
        TextInput,
        {
          placeholder: ctx.labels.linkEditorInputPlaceholder,
          "aria-label": ctx.labels.linkEditorInputLabel,
          type: "url",
          value: url,
          onChange: setUrl,
          classNames: {
            input: ctx.getStyles("linkEditorInput", stylesApiProps).className
          },
          onKeyDown: handleInputKeydown,
          rightSection: /* @__PURE__ */ import_react51.default.createElement(
            Tooltip,
            {
              label: external ? ctx.labels.linkEditorExternalLink : ctx.labels.linkEditorInternalLink,
              events: { hover: true, focus: true, touch: true },
              withinPortal: true,
              withArrow: true,
              disabled: disableTooltips,
              zIndex: 1e4
            },
            /* @__PURE__ */ import_react51.default.createElement(
              UnstyledButton,
              __spreadValues({
                onClick: () => setExternal((e) => !e),
                "data-active": external || void 0
              }, ctx.getStyles(
                "linkEditorExternalControl",
                stylesApiProps
              )),
              /* @__PURE__ */ import_react51.default.createElement(
                import_icons_react2.IconExternalLink,
                {
                  style: { width: (0, import_core37.rem)(14), height: (0, import_core37.rem)(14) },
                  stroke: 1.5
                }
              )
            )
          )
        }
      ), /* @__PURE__ */ import_react51.default.createElement(
        Button,
        __spreadValues({
          variant: "default",
          onClick: setLink
        }, ctx.getStyles("linkEditorSave", stylesApiProps)),
        ctx.labels.linkEditorSave
      ))
    )
  );
});
RichTextEditorLinkControl.displayName = "@raikou/tiptap/RichTextEditorLinkControl";

// src/RichTextEditorControl/RichTextEditorColorPickerControl.tsx
var import_react66 = __toESM(require("react"));
var import_core51 = require("@raikou/core");

// ../components/ColorSwatch/src/ColorSwatch.tsx
var import_react52 = __toESM(require("react"));
var import_core38 = require("@raikou/core");
var defaultProps26 = {
  withShadow: true
};
var varsResolver12 = (0, import_core38.createVarsResolver)(
  (_, { radius, size: size2 }) => ({
    root: {
      "--cs-radius": radius === void 0 ? void 0 : (0, import_core38.getRadius)(radius),
      "--cs-size": (0, import_core38.rem)(size2)
    }
  })
);
var ColorSwatch = (0, import_core38.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core38.useProps)("ColorSwatch", defaultProps26, _props);
    const _a = (0, import_core38.useProps)("ColorSwatch", defaultProps26, props), {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      color,
      size: size2,
      radius,
      withShadow,
      children,
      variant
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "unstyled",
      "vars",
      "color",
      "size",
      "radius",
      "withShadow",
      "children",
      "variant"
    ]);
    const getStyles = (0, import_core38.useStyles)({
      name: "ColorSwatch",
      props,
      classes: {
        root: "colorswatch-root",
        alphaOverlay: "colorswatch-alphaOverlay",
        shadowOverlay: "colorswatch-shadowOverlay",
        colorOverlay: "colorswatch-colorOverlay",
        childrenOverlay: "colorswatch-childrenOverlay"
      },
      className,
      style,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver12
    });
    return /* @__PURE__ */ import_react52.default.createElement(
      import_core38.Box,
      __spreadValues(__spreadValues({
        ref,
        variant,
        size: size2
      }, getStyles("root", { focusable: true })), others),
      /* @__PURE__ */ import_react52.default.createElement("span", __spreadValues({}, getStyles("alphaOverlay"))),
      withShadow && /* @__PURE__ */ import_react52.default.createElement("span", __spreadValues({}, getStyles("shadowOverlay"))),
      /* @__PURE__ */ import_react52.default.createElement(
        "span",
        __spreadValues({}, getStyles("colorOverlay", { style: { backgroundColor: color } }))
      ),
      /* @__PURE__ */ import_react52.default.createElement("span", __spreadValues({}, getStyles("childrenOverlay")), children)
    );
  }
);
ColorSwatch.displayName = "@raikou/core/ColorSwatch";

// ../components/SimpleGrid/src/SimpleGrid.tsx
var import_react54 = __toESM(require("react"));
var import_core40 = require("@raikou/core");

// ../components/SimpleGrid/src/SimpleGridVariables.tsx
var import_react53 = __toESM(require("react"));
var import_core39 = require("@raikou/core");
function SimpleGridVariables({
  spacing,
  verticalSpacing,
  cols,
  selector
}) {
  var _a;
  const theme = (0, import_core39.useRaikouTheme)();
  const _verticalSpacing = verticalSpacing === void 0 ? spacing : verticalSpacing;
  const baseStyles = (0, import_core39.filterProps)({
    "--sg-spacing-x": (0, import_core39.getSpacing)((0, import_core39.getBaseValue)(spacing)),
    "--sg-spacing-y": (0, import_core39.getSpacing)((0, import_core39.getBaseValue)(_verticalSpacing)),
    "--sg-cols": (_a = (0, import_core39.getBaseValue)(cols)) == null ? void 0 : _a.toString()
  });
  const queries = (0, import_core39.keys)(theme.breakpoints).reduce((acc, breakpoint) => {
    if (!acc[breakpoint]) {
      acc[breakpoint] = {};
    }
    if (typeof spacing === "object" && spacing[breakpoint] !== void 0) {
      acc[breakpoint]["--sg-spacing-x"] = (0, import_core39.getSpacing)(spacing[breakpoint]);
    }
    if (typeof _verticalSpacing === "object" && _verticalSpacing[breakpoint] !== void 0) {
      acc[breakpoint]["--sg-spacing-y"] = (0, import_core39.getSpacing)(
        _verticalSpacing[breakpoint]
      );
    }
    if (typeof cols === "object" && cols[breakpoint] !== void 0) {
      acc[breakpoint]["--sg-cols"] = cols[breakpoint];
    }
    return acc;
  }, {});
  const sortedBreakpoints = (0, import_core39.getSortedBreakpoints)((0, import_core39.keys)(queries), theme).filter(
    (breakpoint) => (0, import_core39.keys)(queries[breakpoint.value]).length > 0
  );
  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value]})`,
    styles: queries[breakpoint.value]
  }));
  return /* @__PURE__ */ import_react53.default.createElement(import_core39.InlineStyles, { styles: baseStyles, media, selector });
}

// ../components/SimpleGrid/src/SimpleGrid.tsx
var defaultProps27 = {
  cols: 1,
  spacing: "md"
};
var SimpleGrid = (0, import_core40.factory)((_props, ref) => {
  const props = (0, import_core40.useProps)("SimpleGrid", defaultProps27, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    cols,
    verticalSpacing,
    spacing
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "cols",
    "verticalSpacing",
    "spacing"
  ]);
  const getStyles = (0, import_core40.useStyles)({
    name: "SimpleGrid",
    classes: {
      root: "simpleGrid-root"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars
  });
  const responsiveClassName = (0, import_core40.useRandomClassName)();
  return /* @__PURE__ */ import_react54.default.createElement(import_react54.default.Fragment, null, /* @__PURE__ */ import_react54.default.createElement("div", null, /* @__PURE__ */ import_react54.default.createElement(SimpleGridVariables, __spreadProps(__spreadValues({}, props), { selector: `.${responsiveClassName}` }))), /* @__PURE__ */ import_react54.default.createElement(
    import_core40.Box,
    __spreadValues(__spreadValues({
      ref
    }, getStyles("root", { className: responsiveClassName })), others)
  ));
});
SimpleGrid.displayName = "@raikou/core/SimpleGrid";

// ../components/ColorPicker/src/ColorPicker.tsx
var import_react61 = __toESM(require("react"));
var import_hooks16 = require("@raikou/hooks");
var import_core47 = require("@raikou/core");

// ../components/ColorPicker/src/AlphaSlider/AlphaSlider.tsx
var import_react57 = __toESM(require("react"));
var import_core43 = require("@raikou/core");

// ../components/ColorPicker/src/ColorSlider/ColorSlider.tsx
var import_react56 = __toESM(require("react"));
var import_hooks14 = require("@raikou/hooks");
var import_core42 = require("@raikou/core");

// ../components/ColorPicker/src/Thumb/Thumb.tsx
var import_react55 = __toESM(require("react"));
var import_core41 = require("@raikou/core");

// ../components/ColorPicker/src/ColorPicker.context.ts
var [ColorPickerProvider, useColorPickerContext] = createSafeContext(
  "ColorPicker component was not found in tree"
);

// ../components/ColorPicker/src/Thumb/Thumb.tsx
var Thumb = (0, import_react55.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className, style, size: size2, position } = _b, others = __objRest(_b, ["className", "style", "size", "position"]);
    const { getStyles } = useColorPickerContext();
    return /* @__PURE__ */ import_react55.default.createElement(
      import_core41.Box,
      __spreadValues(__spreadProps(__spreadValues({
        ref
      }, getStyles("thumb", { style })), {
        __vars: {
          "--_thumb-y-offset": `${position.y * 100}%`,
          "--_thumb-x-offset": `${position.x * 100}%`
        }
      }), others)
    );
  }
);
Thumb.displayName = "@raikou/core/ColorPickerThumb";

// ../components/ColorPicker/src/ColorSlider/ColorSlider.tsx
var ColorSlider = (0, import_react56.forwardRef)(
  (props, ref) => {
    const _a = props, {
      className,
      onChange,
      onChangeEnd,
      maxValue,
      round: round3,
      size: size2 = "md",
      focusable = true,
      value,
      overlays,
      thumbColor = "transparent",
      onScrubStart,
      onScrubEnd
    } = _a, others = __objRest(_a, [
      "className",
      "onChange",
      "onChangeEnd",
      "maxValue",
      "round",
      "size",
      "focusable",
      "value",
      "overlays",
      "thumbColor",
      "onScrubStart",
      "onScrubEnd"
    ]);
    const { getStyles } = useColorPickerContext();
    const theme = (0, import_core42.useRaikouTheme)();
    const [position, setPosition] = (0, import_react56.useState)({ y: 0, x: value / maxValue });
    const positionRef = (0, import_react56.useRef)(position);
    const getChangeValue = (val) => round3 ? Math.round(val * maxValue) : val * maxValue;
    const { ref: sliderRef } = (0, import_hooks14.useMove)(
      ({ x, y }) => {
        positionRef.current = { x, y };
        onChange == null ? void 0 : onChange(getChangeValue(x));
      },
      {
        onScrubEnd: () => {
          const { x } = positionRef.current;
          onChangeEnd == null ? void 0 : onChangeEnd(getChangeValue(x));
          onScrubEnd == null ? void 0 : onScrubEnd();
        },
        onScrubStart
      }
    );
    (0, import_hooks14.useDidUpdate)(() => {
      setPosition({ y: 0, x: value / maxValue });
    }, [value]);
    const handleArrow = (event, pos) => {
      event.preventDefault();
      const _position = (0, import_hooks14.clampUseMovePosition)(pos);
      onChange == null ? void 0 : onChange(getChangeValue(_position.x));
      onChangeEnd == null ? void 0 : onChangeEnd(getChangeValue(_position.x));
    };
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowRight": {
          handleArrow(event, { x: position.x + 0.05, y: position.y });
          break;
        }
        case "ArrowLeft": {
          handleArrow(event, { x: position.x - 0.05, y: position.y });
          break;
        }
      }
    };
    const layers = overlays.map((overlay, index3) => /* @__PURE__ */ import_react56.default.createElement("div", __spreadProps(__spreadValues({}, getStyles("sliderOverlay")), { style: overlay, key: index3 })));
    return /* @__PURE__ */ import_react56.default.createElement(
      import_core42.Box,
      __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, others), {
        ref: (0, import_hooks14.useMergedRef)(sliderRef, ref)
      }), getStyles("slider")), {
        role: "slider",
        "aria-valuenow": value,
        "aria-valuemax": maxValue,
        "aria-valuemin": 0,
        tabIndex: focusable ? 0 : -1,
        onKeyDown: handleKeyDown,
        "data-focus-ring": theme.focusRing
      }),
      layers,
      /* @__PURE__ */ import_react56.default.createElement(
        Thumb,
        __spreadValues({
          position,
          size: size2
        }, getStyles("thumb", {
          style: { top: (0, import_core42.rem)(1), background: thumbColor }
        }))
      )
    );
  }
);
ColorSlider.displayName = "@raikou/core/ColorSlider";

// ../components/ColorPicker/src/converters/parsers.ts
function round2(number, digits = 0, base = __pow(10, digits)) {
  return Math.round(base * number) / base;
}
function hslaToHsva({ h, s, l, a }) {
  const ss = s * ((l < 50 ? l : 100 - l) / 100);
  return {
    h,
    s: ss > 0 ? 2 * ss / (l + ss) * 100 : 0,
    v: l + ss,
    a
  };
}
var angleUnits = {
  grad: 360 / 400,
  turn: 360,
  rad: 360 / (Math.PI * 2)
};
function parseHue(value, unit = "deg") {
  return Number(value) * (angleUnits[unit] || 1);
}
var HSL_REGEXP = /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i;
function parseHsla(color) {
  const match = HSL_REGEXP.exec(color);
  if (!match) {
    return { h: 0, s: 0, v: 0, a: 1 };
  }
  return hslaToHsva({
    h: parseHue(match[1], match[2]),
    s: Number(match[3]),
    l: Number(match[4]),
    a: match[5] === void 0 ? 1 : Number(match[5]) / (match[6] ? 100 : 1)
  });
}
function rgbaToHsva({ r: r2, g, b, a }) {
  const max3 = Math.max(r2, g, b);
  const delta = max3 - Math.min(r2, g, b);
  const hh = delta ? max3 === r2 ? (g - b) / delta : max3 === g ? 2 + (b - r2) / delta : 4 + (r2 - g) / delta : 0;
  return {
    h: round2(60 * (hh < 0 ? hh + 6 : hh), 3),
    s: round2(max3 ? delta / max3 * 100 : 0, 3),
    v: round2(max3 / 255 * 100, 3),
    a
  };
}
function parseHex(color) {
  const hex = color[0] === "#" ? color.slice(1) : color;
  if (hex.length === 3) {
    return rgbaToHsva({
      r: parseInt(hex[0] + hex[0], 16),
      g: parseInt(hex[1] + hex[1], 16),
      b: parseInt(hex[2] + hex[2], 16),
      a: 1
    });
  }
  return rgbaToHsva({
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16),
    a: 1
  });
}
function parseHexa(color) {
  const hex = color[0] === "#" ? color.slice(1) : color;
  const roundA = (a2) => round2(parseInt(a2, 16) / 255, 3);
  if (hex.length === 4) {
    const withoutOpacity2 = hex.slice(0, 3);
    const a2 = roundA(hex[3] + hex[3]);
    const hsvaColor2 = __spreadProps(__spreadValues({}, parseHex(withoutOpacity2)), { a: a2 });
    return hsvaColor2;
  }
  const withoutOpacity = hex.slice(0, 6);
  const a = roundA(hex.slice(6, 8));
  const hsvaColor = __spreadProps(__spreadValues({}, parseHex(withoutOpacity)), { a });
  return hsvaColor;
}
var RGB_REGEXP = /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i;
function parseRgba(color) {
  const match = RGB_REGEXP.exec(color);
  if (!match) {
    return { h: 0, s: 0, v: 0, a: 1 };
  }
  return rgbaToHsva({
    r: Number(match[1]) / (match[2] ? 100 / 255 : 1),
    g: Number(match[3]) / (match[4] ? 100 / 255 : 1),
    b: Number(match[5]) / (match[6] ? 100 / 255 : 1),
    a: match[7] === void 0 ? 1 : Number(match[7]) / (match[8] ? 100 : 1)
  });
}
var VALIDATION_REGEXP = {
  hex: /^#?([0-9A-F]{3}){1,2}$/i,
  hexa: /^#?([0-9A-F]{4}){1,2}$/i,
  rgb: /^rgb\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/i,
  rgba: /^rgba\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/i,
  hsl: /hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/i,
  hsla: /^hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*(\d*(?:\.\d+)?)\)$/i
};
var CONVERTERS = {
  hex: parseHex,
  hexa: parseHexa,
  rgb: parseRgba,
  rgba: parseRgba,
  hsl: parseHsla,
  hsla: parseHsla
};
function isColorValid(color) {
  for (const [, regexp] of Object.entries(VALIDATION_REGEXP)) {
    if (regexp.test(color)) {
      return true;
    }
  }
  return false;
}
function parseColor(color) {
  if (typeof color !== "string") {
    return { h: 0, s: 0, v: 0, a: 1 };
  }
  if (color === "transparent") {
    return { h: 0, s: 0, v: 0, a: 0 };
  }
  const trimmed = color.trim();
  for (const [rule, regexp] of Object.entries(VALIDATION_REGEXP)) {
    if (regexp.test(trimmed)) {
      return CONVERTERS[rule](trimmed);
    }
  }
  return { h: 0, s: 0, v: 0, a: 1 };
}

// ../components/ColorPicker/src/AlphaSlider/AlphaSlider.tsx
var defaultProps28 = {};
var AlphaSlider = (0, import_react57.forwardRef)(
  (props, ref) => {
    const _a = (0, import_core43.useProps)(
      "AlphaSlider",
      defaultProps28,
      props
    ), { value, onChange, onChangeEnd, color } = _a, others = __objRest(_a, ["value", "onChange", "onChangeEnd", "color"]);
    return /* @__PURE__ */ import_react57.default.createElement(
      ColorSlider,
      __spreadProps(__spreadValues({}, others), {
        ref,
        value,
        onChange: (val) => onChange == null ? void 0 : onChange(round2(val, 2)),
        onChangeEnd: (val) => onChangeEnd == null ? void 0 : onChangeEnd(round2(val, 2)),
        maxValue: 1,
        round: false,
        "data-alpha": true,
        overlays: [
          {
            backgroundImage: "linear-gradient(45deg, var(--_slider-checkers) 25%, transparent 25%), linear-gradient(-45deg, var(--_slider-checkers) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--_slider-checkers) 75%), linear-gradient(-45deg, var(--raikou-color-body) 75%, var(--_slider-checkers) 75%)",
            backgroundSize: `${(0, import_core43.rem)(8)} ${(0, import_core43.rem)(8)}`,
            backgroundPosition: `0 0, 0 ${(0, import_core43.rem)(4)}, ${(0, import_core43.rem)(4)} -${(0, import_core43.rem)(4)}, -${(0, import_core43.rem)(
              4
            )} 0`
          },
          {
            backgroundImage: `linear-gradient(90deg, transparent, ${color})`
          },
          {
            boxShadow: `rgba(0, 0, 0, .1) 0 0 0 ${(0, import_core43.rem)(
              1
            )} inset, rgb(0, 0, 0, .15) 0 0 ${(0, import_core43.rem)(4)} inset`
          }
        ]
      })
    );
  }
);
AlphaSlider.displayName = "@raikou/core/AlphaSlider";

// ../components/ColorPicker/src/HueSlider/HueSlider.tsx
var import_react58 = __toESM(require("react"));
var import_core44 = require("@raikou/core");
var defaultProps29 = {};
var HueSlider = (0, import_react58.forwardRef)(
  (props, ref) => {
    const _a = (0, import_core44.useProps)(
      "HueSlider",
      defaultProps29,
      props
    ), { value, onChange, onChangeEnd, color } = _a, others = __objRest(_a, ["value", "onChange", "onChangeEnd", "color"]);
    return /* @__PURE__ */ import_react58.default.createElement(
      ColorSlider,
      __spreadProps(__spreadValues({}, others), {
        ref,
        value,
        onChange,
        onChangeEnd,
        maxValue: 360,
        thumbColor: `hsl(${value}, 100%, 50%)`,
        round: true,
        "data-hue": true,
        overlays: [
          {
            backgroundImage: "linear-gradient(to right,hsl(0,100%,50%),hsl(60,100%,50%),hsl(120,100%,50%),hsl(170,100%,50%),hsl(240,100%,50%),hsl(300,100%,50%),hsl(360,100%,50%))"
          },
          {
            boxShadow: `rgba(0, 0, 0, .1) 0 0 0 ${(0, import_core44.rem)(
              1
            )} inset, rgb(0, 0, 0, .15) 0 0 ${(0, import_core44.rem)(4)} inset`
          }
        ]
      })
    );
  }
);
HueSlider.displayName = "@raikou/core/HueSlider";

// ../components/ColorPicker/src/Saturation/Saturation.tsx
var import_react59 = __toESM(require("react"));
var import_hooks15 = require("@raikou/hooks");
var import_core45 = require("@raikou/core");

// ../components/ColorPicker/src/converters/converters.ts
function hsvaToRgbaObject({ h, s, v, a }) {
  const _h = h / 360 * 6;
  const _s = s / 100;
  const _v = v / 100;
  const hh = Math.floor(_h);
  const l = _v * (1 - _s);
  const c = _v * (1 - (_h - hh) * _s);
  const d = _v * (1 - (1 - _h + hh) * _s);
  const module2 = hh % 6;
  return {
    r: round2([_v, c, l, l, d, _v][module2] * 255),
    g: round2([d, _v, _v, c, l, l][module2] * 255),
    b: round2([l, l, d, _v, _v, c][module2] * 255),
    a: round2(a, 2)
  };
}
function hsvaToRgba(color, includeAlpha) {
  const { r: r2, g, b, a } = hsvaToRgbaObject(color);
  if (!includeAlpha) {
    return `rgb(${r2}, ${g}, ${b})`;
  }
  return `rgba(${r2}, ${g}, ${b}, ${round2(a, 2)})`;
}
function hsvaToHsl({ h, s, v, a }, includeAlpha) {
  const hh = (200 - s) * v / 100;
  const result = {
    h: Math.round(h),
    s: Math.round(hh > 0 && hh < 200 ? s * v / 100 / (hh <= 100 ? hh : 200 - hh) * 100 : 0),
    l: Math.round(hh / 2)
  };
  if (!includeAlpha) {
    return `hsl(${result.h}, ${result.s}%, ${result.l}%)`;
  }
  return `hsla(${result.h}, ${result.s}%, ${result.l}%, ${round2(a, 2)})`;
}
function formatHexPart(number) {
  const hex = number.toString(16);
  return hex.length < 2 ? `0${hex}` : hex;
}
function hsvaToHex(color) {
  const { r: r2, g, b } = hsvaToRgbaObject(color);
  return `#${formatHexPart(r2)}${formatHexPart(g)}${formatHexPart(b)}`;
}
function hsvaToHexa(color) {
  const a = Math.round(color.a * 255);
  return `${hsvaToHex(color)}${formatHexPart(a)}`;
}
var CONVERTERS2 = {
  hex: hsvaToHex,
  hexa: (color) => hsvaToHexa(color),
  rgb: (color) => hsvaToRgba(color, false),
  rgba: (color) => hsvaToRgba(color, true),
  hsl: (color) => hsvaToHsl(color, false),
  hsla: (color) => hsvaToHsl(color, true)
};
function convertHsvaTo(format, color) {
  if (!color) {
    return "#000000";
  }
  if (!(format in CONVERTERS2)) {
    return CONVERTERS2.hex(color);
  }
  return CONVERTERS2[format](color);
}

// ../components/ColorPicker/src/Saturation/Saturation.tsx
function Saturation(_a) {
  var _b = _a, {
    className,
    onChange,
    onChangeEnd,
    value,
    saturationLabel,
    focusable = true,
    size: size2,
    color,
    onScrubStart,
    onScrubEnd
  } = _b, others = __objRest(_b, [
    "className",
    "onChange",
    "onChangeEnd",
    "value",
    "saturationLabel",
    "focusable",
    "size",
    "color",
    "onScrubStart",
    "onScrubEnd"
  ]);
  const { getStyles } = useColorPickerContext();
  const [position, setPosition] = (0, import_react59.useState)({
    x: value.s / 100,
    y: 1 - value.v / 100
  });
  const positionRef = (0, import_react59.useRef)(position);
  const { ref } = (0, import_hooks15.useMove)(
    ({ x, y }) => {
      positionRef.current = { x, y };
      onChange({ s: Math.round(x * 100), v: Math.round((1 - y) * 100) });
    },
    {
      onScrubEnd: () => {
        const { x, y } = positionRef.current;
        onChangeEnd({ s: Math.round(x * 100), v: Math.round((1 - y) * 100) });
        onScrubEnd == null ? void 0 : onScrubEnd();
      },
      onScrubStart
    }
  );
  (0, import_react59.useEffect)(() => {
    setPosition({ x: value.s / 100, y: 1 - value.v / 100 });
  }, [value.s, value.v]);
  const handleArrow = (event, pos) => {
    event.preventDefault();
    const _position = (0, import_hooks15.clampUseMovePosition)(pos);
    onChange({
      s: Math.round(_position.x * 100),
      v: Math.round((1 - _position.y) * 100)
    });
    onChangeEnd({
      s: Math.round(_position.x * 100),
      v: Math.round((1 - _position.y) * 100)
    });
  };
  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowUp": {
        handleArrow(event, { y: position.y - 0.05, x: position.x });
        break;
      }
      case "ArrowDown": {
        handleArrow(event, { y: position.y + 0.05, x: position.x });
        break;
      }
      case "ArrowRight": {
        handleArrow(event, { x: position.x + 0.05, y: position.y });
        break;
      }
      case "ArrowLeft": {
        handleArrow(event, { x: position.x - 0.05, y: position.y });
        break;
      }
    }
  };
  return /* @__PURE__ */ import_react59.default.createElement(
    import_core45.Box,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, getStyles("saturation")), {
      ref
    }), others), {
      role: "slider",
      "aria-label": saturationLabel,
      "aria-valuenow": position.x,
      "aria-valuetext": convertHsvaTo("rgba", value),
      tabIndex: focusable ? 0 : -1,
      onKeyDown: handleKeyDown
    }),
    /* @__PURE__ */ import_react59.default.createElement(
      "div",
      __spreadValues({}, getStyles("saturationOverlay", {
        style: { backgroundColor: `hsl(${value.h}, 100%, 50%)` }
      }))
    ),
    /* @__PURE__ */ import_react59.default.createElement(
      "div",
      __spreadValues({}, getStyles("saturationOverlay", {
        style: {
          backgroundImage: "linear-gradient(90deg, #fff, transparent)"
        }
      }))
    ),
    /* @__PURE__ */ import_react59.default.createElement(
      "div",
      __spreadValues({}, getStyles("saturationOverlay", {
        style: {
          backgroundImage: "linear-gradient(0deg, #000, transparent)"
        }
      }))
    ),
    /* @__PURE__ */ import_react59.default.createElement(
      Thumb,
      __spreadValues({
        position,
        size: size2
      }, getStyles("thumb", { style: { backgroundColor: color } }))
    )
  );
}
Saturation.displayName = "@raikou/core/Saturation";

// ../components/ColorPicker/src/Swatches/Swatches.tsx
var import_react60 = __toESM(require("react"));
var import_core46 = require("@raikou/core");
var Swatches = (0, import_react60.forwardRef)(
  (_a, ref) => {
    var _b = _a, {
      className,
      datatype,
      setValue,
      onChangeEnd,
      size: size2,
      focusable,
      data,
      swatchesPerRow
    } = _b, others = __objRest(_b, [
      "className",
      "datatype",
      "setValue",
      "onChangeEnd",
      "size",
      "focusable",
      "data",
      "swatchesPerRow"
    ]);
    const { getStyles } = useColorPickerContext();
    const colors = data.map((color, index3) => /* @__PURE__ */ import_react60.default.createElement(
      ColorSwatch,
      __spreadProps(__spreadValues({}, getStyles("swatch")), {
        component: "button",
        type: "button",
        color,
        key: index3,
        radius: "sm",
        onClick: () => {
          setValue(color);
          onChangeEnd == null ? void 0 : onChangeEnd(color);
        },
        "aria-label": color,
        tabIndex: focusable ? 0 : -1,
        "data-swatch": true
      })
    ));
    return /* @__PURE__ */ import_react60.default.createElement(import_core46.Box, __spreadValues(__spreadProps(__spreadValues({}, getStyles("swatches")), { ref }), others), colors);
  }
);
Swatches.displayName = "@raikou/core/Swatches";

// ../components/ColorPicker/src/ColorPicker.tsx
var defaultProps30 = {
  swatchesPerRow: 7,
  withPicker: true,
  focusable: true,
  __staticSelector: "ColorPicker"
};
var varsResolver13 = (0, import_core47.createVarsResolver)(
  (_, { size: size2, swatchesPerRow }) => ({
    wrapper: {
      "--cp-preview-size": (0, import_core47.getSize)(size2, "cp-preview-size"),
      "--cp-width": (0, import_core47.getSize)(size2, "cp-width"),
      "--cp-body-spacing": (0, import_core47.getSpacing)(size2),
      "--cp-swatch-size": `${100 / swatchesPerRow}%`,
      "--cp-thumb-size": (0, import_core47.getSize)(size2, "cp-thumb-size"),
      "--cp-saturation-height": (0, import_core47.getSize)(size2, "cp-saturation-height")
    }
  })
);
var ColorPicker = (0, import_core47.factory)((_props, ref) => {
  const props = (0, import_core47.useProps)("ColorPicker", defaultProps30, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    format,
    value,
    defaultValue,
    onChange,
    onChangeEnd,
    withPicker,
    size: size2,
    saturationLabel,
    hueLabel,
    alphaLabel,
    focusable,
    swatches,
    swatchesPerRow,
    fullWidth,
    onColorSwatchClick,
    __staticSelector
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "format",
    "value",
    "defaultValue",
    "onChange",
    "onChangeEnd",
    "withPicker",
    "size",
    "saturationLabel",
    "hueLabel",
    "alphaLabel",
    "focusable",
    "swatches",
    "swatchesPerRow",
    "fullWidth",
    "onColorSwatchClick",
    "__staticSelector"
  ]);
  const getStyles = (0, import_core47.useStyles)({
    name: __staticSelector,
    props,
    classes: {
      wrapper: "colorPicker-wrapper",
      preview: "colorPicker-preview",
      body: "colorPicker-body",
      sliders: "colorPicker-sliders",
      slider: "colorPicker-slider",
      sliderOverlay: "colorPicker-sliderOverlay",
      thumb: "colorPicker-thumb",
      saturation: "colorPicker-saturation",
      saturationOverlay: "colorPicker-saturationOverlay",
      swatches: "colorPicker-swatches",
      swatch: "colorPicker-swatch"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "wrapper",
    vars,
    varsResolver: varsResolver13
  });
  const formatRef = (0, import_react61.useRef)(format);
  const valueRef = (0, import_react61.useRef)();
  const scrubTimeoutRef = (0, import_react61.useRef)(-1);
  const isScrubbingRef = (0, import_react61.useRef)(false);
  const withAlpha = format === "hexa" || format === "rgba" || format === "hsla";
  const [_value, setValue, controlled] = (0, import_hooks16.useUncontrolled)({
    value,
    defaultValue,
    finalValue: "#FFFFFF",
    onChange
  });
  const [parsed, setParsed] = (0, import_react61.useState)(parseColor(_value));
  const startScrubbing = () => {
    window.clearTimeout(scrubTimeoutRef.current);
    isScrubbingRef.current = true;
  };
  const stopScrubbing = () => {
    window.clearTimeout(scrubTimeoutRef.current);
    scrubTimeoutRef.current = window.setTimeout(() => {
      isScrubbingRef.current = false;
    }, 200);
  };
  const handleChange = (color) => {
    setParsed((current) => {
      const next = __spreadValues(__spreadValues({}, current), color);
      valueRef.current = convertHsvaTo(formatRef.current, next);
      return next;
    });
    setValue(valueRef.current);
  };
  (0, import_hooks16.useDidUpdate)(() => {
    if (isColorValid(value) && !isScrubbingRef.current) {
      setParsed(parseColor(value));
    }
  }, [value]);
  (0, import_hooks16.useDidUpdate)(() => {
    formatRef.current = format;
    setValue(convertHsvaTo(format, parsed));
  }, [format]);
  return /* @__PURE__ */ import_react61.default.createElement(ColorPickerProvider, { value: { getStyles } }, /* @__PURE__ */ import_react61.default.createElement(
    import_core47.Box,
    __spreadValues(__spreadProps(__spreadValues({
      ref
    }, getStyles("wrapper")), {
      size: size2,
      mod: { "full-width": fullWidth }
    }), others),
    withPicker && /* @__PURE__ */ import_react61.default.createElement(import_react61.default.Fragment, null, /* @__PURE__ */ import_react61.default.createElement(
      Saturation,
      {
        value: parsed,
        onChange: handleChange,
        onChangeEnd: ({ s, v }) => onChangeEnd == null ? void 0 : onChangeEnd(
          convertHsvaTo(formatRef.current, __spreadProps(__spreadValues({}, parsed), {
            s,
            v
          }))
        ),
        color: _value,
        size: size2,
        focusable,
        saturationLabel,
        onScrubStart: startScrubbing,
        onScrubEnd: stopScrubbing
      }
    ), /* @__PURE__ */ import_react61.default.createElement("div", __spreadValues({}, getStyles("body")), /* @__PURE__ */ import_react61.default.createElement("div", __spreadValues({}, getStyles("sliders")), /* @__PURE__ */ import_react61.default.createElement(
      HueSlider,
      {
        value: parsed.h,
        onChange: (h) => handleChange({ h }),
        onChangeEnd: (h) => onChangeEnd == null ? void 0 : onChangeEnd(
          convertHsvaTo(formatRef.current, __spreadProps(__spreadValues({}, parsed), { h }))
        ),
        size: size2,
        focusable,
        "aria-label": hueLabel,
        onScrubStart: startScrubbing,
        onScrubEnd: stopScrubbing
      }
    ), withAlpha && /* @__PURE__ */ import_react61.default.createElement(
      AlphaSlider,
      {
        value: parsed.a,
        onChange: (a) => handleChange({ a }),
        onChangeEnd: (a) => {
          onChangeEnd == null ? void 0 : onChangeEnd(
            convertHsvaTo(formatRef.current, __spreadProps(__spreadValues({}, parsed), { a }))
          );
        },
        size: size2,
        color: convertHsvaTo("hex", parsed),
        focusable,
        "aria-label": alphaLabel,
        onScrubStart: startScrubbing,
        onScrubEnd: stopScrubbing
      }
    )), withAlpha && /* @__PURE__ */ import_react61.default.createElement(
      ColorSwatch,
      __spreadValues({
        color: _value,
        radius: "sm"
      }, getStyles("preview"))
    ))),
    Array.isArray(swatches) && /* @__PURE__ */ import_react61.default.createElement(
      Swatches,
      {
        data: swatches,
        swatchesPerRow,
        focusable,
        setValue,
        onChangeEnd: (color) => {
          const convertedColor = convertHsvaTo(format, parseColor(color));
          onColorSwatchClick == null ? void 0 : onColorSwatchClick(convertedColor);
          onChangeEnd == null ? void 0 : onChangeEnd(convertedColor);
          if (!controlled) {
            setParsed(parseColor(color));
          }
        }
      }
    )
  ));
});
ColorPicker.displayName = "@raikou/core/ColorPicker";

// ../components/Group/src/Group.tsx
var import_react63 = __toESM(require("react"));
var import_core48 = require("@raikou/core");

// ../components/Group/src/filter-falsy-children/filter-falsy-children.ts
var import_react62 = require("react");
function filterFalsyChildren(children) {
  return import_react62.Children.toArray(children).filter(Boolean);
}

// ../components/Group/src/Group.tsx
var defaultProps31 = {
  preventGrowOverflow: true,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
};
var varsResolver14 = (0, import_core48.createVarsResolver)(
  (_, { grow, preventGrowOverflow, gap, align, justify, wrap }, { childWidth }) => ({
    root: {
      "--group-child-width": grow && preventGrowOverflow ? childWidth : void 0,
      "--group-gap": (0, import_core48.getSpacing)(gap),
      "--group-align": align,
      "--group-justify": justify,
      "--group-wrap": wrap
    }
  })
);
var Group = (0, import_core48.factory)((_props, ref) => {
  const props = (0, import_core48.useProps)("Group", defaultProps31, _props);
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
  const resolvedGap = (0, import_core48.getSpacing)(gap != null ? gap : "md");
  const childWidth = `calc(${100 / childrenCount}% - (${resolvedGap} - ${resolvedGap} / ${childrenCount}))`;
  const stylesCtx = { childWidth };
  const getStyles = (0, import_core48.useStyles)({
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
    varsResolver: varsResolver14
  });
  return /* @__PURE__ */ import_react63.default.createElement(
    import_core48.Box,
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

// ../components/ActionIcon/src/ActionIcon.tsx
var import_react65 = __toESM(require("react"));
var import_core50 = require("@raikou/core");

// ../components/ActionIcon/src/ActionIconGroup/ActionIconGroup.tsx
var import_react64 = __toESM(require("react"));
var import_core49 = require("@raikou/core");
var defaultProps32 = {
  orientation: "horizontal"
};
var varsResolver15 = (0, import_core49.createVarsResolver)(
  (_, { borderWidth }) => ({
    group: { "--ai-border-width": (0, import_core49.rem)(borderWidth) }
  })
);
var ActionIconGroup = (0, import_core49.factory)(
  (_props, ref) => {
    const props = (0, import_core49.useProps)("ActionIconGroup", defaultProps32, _props);
    const _a = (0, import_core49.useProps)("ActionIconGroup", defaultProps32, _props), {
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
    const getStyles = (0, import_core49.useStyles)({
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
      varsResolver: varsResolver15,
      rootSelector: "group"
    });
    return /* @__PURE__ */ import_react64.default.createElement(
      import_core49.Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("group")), {
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
var defaultProps33 = {};
var varsResolver16 = (0, import_core50.createVarsResolver)(
  (theme, { size: size2, radius, variant, gradient, color }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled"
    });
    return {
      root: {
        "--ai-size": (0, import_core50.getSize)(size2, "ai-size"),
        "--ai-radius": radius === void 0 ? void 0 : (0, import_core50.getRadius)(radius),
        "--ai-bg": color || variant ? colors.background : void 0,
        "--ai-hover": color || variant ? colors.hover : void 0,
        "--ai-color": color || variant ? colors.color : void 0,
        "--ai-bd": color || variant ? colors.border : void 0
      }
    };
  }
);
var ActionIcon = (0, import_core50.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core50.useProps)("ActionIcon", defaultProps33, _props);
    const _a = props, {
      className,
      unstyled,
      variant,
      classNames,
      styles,
      style,
      loading,
      loaderProps,
      size: size2,
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
    const getStyles = (0, import_core50.useStyles)({
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
      varsResolver: varsResolver16
    });
    return /* @__PURE__ */ import_react65.default.createElement(
      UnstyledButton,
      __spreadProps(__spreadValues(__spreadValues({}, getStyles("root", {
        active: !disabled && !loading && !dataDisabled
      })), others), {
        unstyled,
        variant,
        size: size2,
        disabled: disabled || loading,
        ref,
        mod: { loading, disabled: disabled || dataDisabled }
      }),
      loading ? /* @__PURE__ */ import_react65.default.createElement(
        Loader,
        __spreadValues(__spreadProps(__spreadValues({}, getStyles("loader")), {
          color: "var(--ai-color)",
          size: "calc(var(--ai-size) * 0.55)"
        }), loaderProps)
      ) : children
    );
  }
);
ActionIcon.displayName = "@raikou/core/ActionIcon";
ActionIcon.Group = ActionIconGroup;

// src/RichTextEditorControl/RichTextEditorColorPickerControl.tsx
var import_hooks17 = require("@raikou/hooks");
var import_icons_react3 = require("@tabler/icons-react");
var defaultProps34 = {};
var RichTextEditorColorPickerControl = (0, import_react66.forwardRef)((props, ref) => {
  const _a = (0, import_core51.useProps)(
    "RichTextEditorColorPickerControl",
    defaultProps34,
    props
  ), { popoverProps, colors, colorPickerProps } = _a, others = __objRest(_a, ["popoverProps", "colors", "colorPickerProps"]);
  const { editor, labels, getStyles } = useRichTextEditorContext();
  const [opened, { toggle, close }] = (0, import_hooks17.useDisclosure)(false);
  const [state, setState] = (0, import_react66.useState)("palette");
  const currentColor = (editor == null ? void 0 : editor.getAttributes("textStyle").color) || "var(--raikou-color-text)";
  const handleChange = (value, shouldClose = true) => {
    (editor == null ? void 0 : editor.chain()).focus().setColor(value).run();
    shouldClose && close();
  };
  const handleClear = () => {
    (editor == null ? void 0 : editor.chain()).focus().unsetColor().run();
    close();
  };
  const controls = colors.map((color, index3) => /* @__PURE__ */ import_react66.default.createElement(
    ColorSwatch,
    {
      key: index3,
      component: "button",
      color,
      onClick: () => handleChange(color),
      size: 26,
      radius: "xs",
      style: { cursor: "pointer" },
      title: labels.colorPickerColorLabel(color),
      "aria-label": labels.colorPickerColorLabel(color)
    }
  ));
  return /* @__PURE__ */ import_react66.default.createElement(
    Popover,
    __spreadValues({
      opened,
      withinPortal: true,
      trapFocus: true,
      onClose: close
    }, popoverProps),
    /* @__PURE__ */ import_react66.default.createElement(Popover.Target, null, /* @__PURE__ */ import_react66.default.createElement(
      RichTextEditorControl,
      __spreadProps(__spreadValues({}, others), {
        "aria-label": labels.colorPickerControlLabel,
        title: labels.colorPickerControlLabel,
        ref,
        onClick: toggle
      }),
      /* @__PURE__ */ import_react66.default.createElement(ColorSwatch, { color: currentColor, size: 14 })
    )),
    /* @__PURE__ */ import_react66.default.createElement(Popover.Dropdown, __spreadValues({}, getStyles("linkEditorDropdown")), state === "palette" && /* @__PURE__ */ import_react66.default.createElement(SimpleGrid, { cols: 7, spacing: 2 }, controls), state === "colorPicker" && /* @__PURE__ */ import_react66.default.createElement(
      ColorPicker,
      __spreadValues({
        defaultValue: currentColor,
        onChange: (value) => handleChange(value, false)
      }, colorPickerProps)
    ), /* @__PURE__ */ import_react66.default.createElement(Tooltip.Group, { closeDelay: 200 }, /* @__PURE__ */ import_react66.default.createElement(Group, { justify: "flex-end", gap: "xs", mt: "sm" }, state === "palette" && /* @__PURE__ */ import_react66.default.createElement(
      ActionIcon,
      {
        variant: "default",
        onClick: close,
        title: labels.colorPickerCancel,
        "aria-label": labels.colorPickerCancel
      },
      /* @__PURE__ */ import_react66.default.createElement(import_icons_react3.IconX, { stroke: 1.5, size: "1rem" })
    ), /* @__PURE__ */ import_react66.default.createElement(
      ActionIcon,
      {
        variant: "default",
        onClick: handleClear,
        title: labels.colorPickerClear,
        "aria-label": labels.colorPickerClear
      },
      /* @__PURE__ */ import_react66.default.createElement(import_icons_react3.IconCircleOff, { stroke: 1.5, size: "1rem" })
    ), state === "palette" ? /* @__PURE__ */ import_react66.default.createElement(
      ActionIcon,
      {
        variant: "default",
        onClick: () => setState("colorPicker"),
        title: labels.colorPickerColorPicker,
        "aria-label": labels.colorPickerColorPicker
      },
      /* @__PURE__ */ import_react66.default.createElement(import_icons_react3.IconColorPicker, { stroke: 1.5, size: "1rem" })
    ) : /* @__PURE__ */ import_react66.default.createElement(
      ActionIcon,
      {
        variant: "default",
        onClick: () => setState("palette"),
        "aria-label": labels.colorPickerPalette,
        title: labels.colorPickerPalette
      },
      /* @__PURE__ */ import_react66.default.createElement(import_icons_react3.IconPalette, { stroke: 1.5, size: "1rem" })
    ), state === "colorPicker" && /* @__PURE__ */ import_react66.default.createElement(
      ActionIcon,
      {
        variant: "default",
        onClick: close,
        title: labels.colorPickerSave,
        "aria-label": labels.colorPickerSave
      },
      /* @__PURE__ */ import_react66.default.createElement(import_icons_react3.IconCheck, { stroke: 1.5, size: "1rem" })
    ))))
  );
});
RichTextEditorColorPickerControl.displayName = "@raikou/tiptap/ColorPickerControl";

// src/RichTextEditorControl/RichTextEditorColorControl.tsx
var import_react67 = __toESM(require("react"));
var import_core52 = require("@raikou/core");
var defaultProps35 = {};
var RichTextEditorColorControl = (0, import_react67.forwardRef)((props, ref) => {
  const _a = (0, import_core52.useProps)(
    "RichTextEditorColorControl",
    defaultProps35,
    props
  ), { color } = _a, others = __objRest(_a, ["color"]);
  const { editor, labels } = useRichTextEditorContext();
  const currentColor = (editor == null ? void 0 : editor.getAttributes("textStyle").color) || null;
  const label = labels.colorControlLabel(color);
  return /* @__PURE__ */ import_react67.default.createElement(
    RichTextEditorControl,
    __spreadProps(__spreadValues({}, others), {
      active: currentColor === color,
      "aria-label": label,
      title: label,
      onClick: () => (editor == null ? void 0 : editor.chain()).focus().setColor(color).run(),
      ref
    }),
    /* @__PURE__ */ import_react67.default.createElement(ColorSwatch, { color, size: 14 })
  );
});

// src/RichTextEditor.tsx
var defaultProps36 = {
  withCodeHighlightStyles: true,
  withTypographyStyles: true
};
var RichTextEditor = (0, import_core53.factory)((_props, ref) => {
  const props = (0, import_core53.useProps)("RichTextEditor", defaultProps36, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    vars,
    editor,
    withCodeHighlightStyles,
    withTypographyStyles,
    labels,
    children
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "vars",
    "editor",
    "withCodeHighlightStyles",
    "withTypographyStyles",
    "labels",
    "children"
  ]);
  const getStyles = (0, import_core53.useStyles)({
    name: "RichTextEditor",
    classes: {
      root: "rte-root",
      typographyStylesProvider: "rte-typographyStylesProvider",
      content: "rte-content",
      linkEditorDropdown: "rte-linkEditorDropdown",
      control: "rte-control",
      controlsGroup: "rte-controlsGroup",
      linkEditor: "rte-linkEditor",
      linkEditorInput: "rte-linkEditorInput",
      linkEditorExternalControl: "rte-linkEditorExternalControl",
      linkEditorSave: "rte-linkEditorSave",
      toolbar: "rte-toolbar"
    },
    props,
    className,
    style,
    classNames,
    styles,
    vars
  });
  const mergedLabels = (0, import_react68.useMemo)(
    () => __spreadValues(__spreadValues({}, DEFAULT_LABELS), labels),
    [labels]
  );
  return /* @__PURE__ */ import_react68.default.createElement(
    RichTextEditorProvider,
    {
      value: {
        editor,
        getStyles,
        labels: mergedLabels,
        withCodeHighlightStyles,
        withTypographyStyles
      }
    },
    /* @__PURE__ */ import_react68.default.createElement(import_core53.Box, __spreadProps(__spreadValues(__spreadValues({}, getStyles("root")), others), { ref }), children)
  );
});
RichTextEditor.displayName = "@raikou/tiptap/RichTextEditor";
RichTextEditor.Content = RichTextEditorContent;
RichTextEditor.Control = RichTextEditorControl;
RichTextEditor.Toolbar = RichTextEditorToolbar;
RichTextEditor.ControlsGroup = RichTextEditorControlsGroup;
RichTextEditor.Bold = BoldControl;
RichTextEditor.Italic = ItalicControl;
RichTextEditor.Strikethrough = StrikeThroughControl;
RichTextEditor.Underline = UnderlineControl;
RichTextEditor.ClearFormatting = ClearFormattingControl;
RichTextEditor.H1 = H1Control;
RichTextEditor.H2 = H2Control;
RichTextEditor.H3 = H3Control;
RichTextEditor.H4 = H4Control;
RichTextEditor.H5 = H5Control;
RichTextEditor.H6 = H6Control;
RichTextEditor.BulletList = BulletListControl;
RichTextEditor.OrderedList = OrderedListControl;
RichTextEditor.Link = RichTextEditorLinkControl;
RichTextEditor.Unlink = UnlinkControl;
RichTextEditor.Blockquote = BlockquoteControl;
RichTextEditor.AlignLeft = AlignLeftControl;
RichTextEditor.AlignRight = AlignRightControl;
RichTextEditor.AlignCenter = AlignCenterControl;
RichTextEditor.AlignJustify = AlignJustifyControl;
RichTextEditor.Superscript = SuperscriptControl;
RichTextEditor.Subscript = SubscriptControl;
RichTextEditor.Code = CodeControl;
RichTextEditor.CodeBlock = CodeBlockControl;
RichTextEditor.ColorPicker = RichTextEditorColorPickerControl;
RichTextEditor.Color = RichTextEditorColorControl;
RichTextEditor.Highlight = HighlightControl;
RichTextEditor.Hr = HrControl;
RichTextEditor.UnsetColor = UnsetColorControl;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AlignCenterControl,
  AlignJustifyControl,
  AlignLeftControl,
  AlignRightControl,
  BlockquoteControl,
  BoldControl,
  BulletListControl,
  ClearFormattingControl,
  CodeBlockControl,
  CodeControl,
  DEFAULT_LABELS,
  H1Control,
  H2Control,
  H3Control,
  H4Control,
  H5Control,
  H6Control,
  HighlightControl,
  HrControl,
  ItalicControl,
  Link,
  OrderedListControl,
  RichTextEditor,
  RichTextEditorColorControl,
  RichTextEditorColorPickerControl,
  RichTextEditorContent,
  RichTextEditorControl,
  RichTextEditorControlsGroup,
  RichTextEditorLinkControl,
  StrikeThroughControl,
  SubscriptControl,
  SuperscriptControl,
  UnderlineControl,
  UnlinkControl,
  UnsetColorControl,
  useRichTextEditorContext
});
