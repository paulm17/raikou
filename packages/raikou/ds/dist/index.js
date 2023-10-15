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
  Demo: () => Demo,
  getCodeFileIcon: () => getFileIcon,
  meta: () => meta
});
module.exports = __toCommonJS(src_exports);

// src/meta.ts
var meta = {
  docsLink: "https://raikou.dev",
  uiLink: "https://ui.raikou.dev/",
  discordLink: "https://discord.gg/wbH82zuWMN",
  twitterLink: "https://twitter.com/raikoudev",
  npmLink: "https://www.npmjs.com/org/raikou",
  discordColor: "#5865f2",
  twitterColor: "#1C8CD8",
  gitHubLinks: {
    raikou: "https://github.com/raikoudev/raikou",
    raikouUi: "https://github.com/raikoudev/ui.raikou.dev",
    discussions: "https://github.com/raikoudev/raikou/discussions",
    organization: "https://github.com/raikoudev",
    releases: "https://github.com/raikoudev/raikou/releases"
  }
};

// src/Demo/Demo.tsx
var import_react18 = __toESM(require("react"));

// src/CodeDemo/CodeDemo.tsx
var import_react6 = __toESM(require("react"));

// src/DemoArea/DemoArea.tsx
var import_react = __toESM(require("react"));
var import_server = require("@raikou/server");
var import_system = require("@raikou/system");
function DemoArea({
  withPadding = true,
  centered,
  maxWidth,
  minHeight,
  children,
  dimmed,
  striped
}) {
  return /* @__PURE__ */ import_react.default.createElement(
    import_server.Box,
    {
      className: "demoArea-demo",
      mod: { "with-padding": withPadding, centered, dimmed, striped },
      __vars: {
        "--demo-flex": maxWidth ? "1" : void 0,
        "--demo-max-width": maxWidth ? (0, import_system.rem)(maxWidth) : void 0,
        "--demo-min-height": minHeight ? (0, import_system.rem)(minHeight) : void 0,
        "--demo-margin-y": maxWidth && centered ? "auto" : void 0
      }
    },
    /* @__PURE__ */ import_react.default.createElement("div", { className: "demoArea-demoInner" }, children)
  );
}

// src/DemoCode/DemoCode.tsx
var import_react4 = __toESM(require("react"));
var import_code_highlight = require("@raikou/code-highlight");

// src/Icons/TypeScriptIcon.tsx
var import_system2 = require("@raikou/system");
var import_react2 = __toESM(require("react"));
function TypeScriptIcon(_a) {
  var _b = _a, {
    size,
    style
  } = _b, others = __objRest(_b, [
    "size",
    "style"
  ]);
  return /* @__PURE__ */ import_react2.default.createElement(
    "svg",
    __spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 48 48",
      style: __spreadValues({ width: (0, import_system2.rem)(size), height: (0, import_system2.rem)(size) }, style)
    }, others),
    /* @__PURE__ */ import_react2.default.createElement("path", { fill: "#1976d2", d: "M6 6h36v36H6z" }),
    /* @__PURE__ */ import_react2.default.createElement(
      "path",
      {
        fill: "#fff",
        d: "M27.49 22H14.227v3.264h4.757V40h3.769V25.264h4.737zM39.194 26.084s-1.787-1.192-3.807-1.192-2.747.96-2.747 1.986c0 2.648 7.381 2.383 7.381 7.712 0 8.209-11.254 4.568-11.254 4.568V35.22s2.152 1.622 4.733 1.622 2.483-1.688 2.483-1.92c0-2.449-7.315-2.449-7.315-7.878 0-7.381 10.658-4.469 10.658-4.469l-.132 3.509z"
      }
    )
  );
}

// src/Icons/CssIcon.tsx
var import_system3 = require("@raikou/system");
var import_react3 = __toESM(require("react"));
function CssIcon(_a) {
  var _b = _a, { size, style } = _b, others = __objRest(_b, ["size", "style"]);
  return /* @__PURE__ */ import_react3.default.createElement(
    "svg",
    __spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 48 48",
      style: __spreadValues({ width: (0, import_system3.rem)(size), height: (0, import_system3.rem)(size) }, style)
    }, others),
    /* @__PURE__ */ import_react3.default.createElement("path", { fill: "#0277BD", d: "M41 5H7l3 34 14 4 14-4 3-34z" }),
    /* @__PURE__ */ import_react3.default.createElement("path", { fill: "#039BE5", d: "M24 8v31.9l11.2-3.2L37.7 8z" }),
    /* @__PURE__ */ import_react3.default.createElement(
      "path",
      {
        fill: "#FFF",
        d: "M33.1 13H24v4h4.9l-.3 4H24v4h4.4l-.3 4.5-4.1 1.4v4.2l7.9-2.6.7-11.5z"
      }
    ),
    /* @__PURE__ */ import_react3.default.createElement(
      "path",
      {
        fill: "#EEE",
        d: "M24 13v4h-8.9l-.3-4H24zm-4.6 8l.2 4H24v-4h-4.6zm.4 6h-4l.3 5.5 7.9 2.6v-4.2l-4.1-1.4-.1-2.5z"
      }
    )
  );
}

// src/DemoCode/DemoCode.tsx
function getFileIcon(fileName) {
  if (fileName.endsWith(".ts") || fileName.endsWith(".tsx")) {
    return /* @__PURE__ */ import_react4.default.createElement(TypeScriptIcon, { size: 18 });
  }
  if (fileName.endsWith(".css")) {
    return /* @__PURE__ */ import_react4.default.createElement(CssIcon, { size: 18 });
  }
  return null;
}
function DemoCode({ code, defaultExpanded = true }) {
  const _code = typeof code === "string" ? { code, fileName: "Demo.tsx", language: "tsx" } : code;
  return /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, _code && /* @__PURE__ */ import_react4.default.createElement(
    import_code_highlight.CodeHighlightTabs,
    {
      code: _code,
      className: "demoCode-code",
      getFileIcon,
      withExpandButton: true,
      defaultExpanded
    }
  ));
}

// src/DemoRoot/DemoRoot.tsx
var import_react5 = __toESM(require("react"));
var import_clsx = __toESM(require("clsx"));
function DemoRoot(_a) {
  var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
  return /* @__PURE__ */ import_react5.default.createElement("div", __spreadValues({ className: (0, import_clsx.default)("demoRoot-root", className) }, others));
}

// src/CodeDemo/CodeDemo.tsx
function CodeDemo({
  code,
  children,
  withPadding,
  centered,
  defaultExpanded = true,
  maxWidth,
  minHeight,
  dimmed,
  striped
}) {
  return /* @__PURE__ */ import_react6.default.createElement(DemoRoot, null, /* @__PURE__ */ import_react6.default.createElement(
    DemoArea,
    {
      withPadding,
      centered,
      maxWidth,
      minHeight,
      dimmed,
      striped
    },
    children
  ), /* @__PURE__ */ import_react6.default.createElement(DemoCode, { code, defaultExpanded }));
}

// src/ConfiguratorDemo/ConfiguratorDemo.tsx
var import_react16 = __toESM(require("react"));
var import_server4 = require("@raikou/server");

// src/DemoColumns/DemoColumns.tsx
var import_react7 = __toESM(require("react"));
var import_server2 = require("@raikou/server");
function DemoColumns({
  children,
  withPadding,
  centered,
  maxWidth,
  minHeight,
  title,
  description,
  controls,
  dimmed,
  striped
}) {
  return /* @__PURE__ */ import_react7.default.createElement("div", { className: "demoColumns-columns" }, /* @__PURE__ */ import_react7.default.createElement(
    DemoArea,
    {
      withPadding,
      maxWidth,
      minHeight,
      centered,
      dimmed,
      striped
    },
    children
  ), /* @__PURE__ */ import_react7.default.createElement("div", { className: "demoColumns-controls" }, title && /* @__PURE__ */ import_react7.default.createElement("div", { className: "demoColumns-header" }, /* @__PURE__ */ import_react7.default.createElement(import_server2.Text, { fw: 500, fz: "sm", mb: 5 }, title), description && /* @__PURE__ */ import_react7.default.createElement(import_server2.Text, { c: "dimmed", fz: 11, lh: 1.45 }, description)), controls));
}

// src/ConfiguratorDemo/controls/ConfiguratorBoolean.control.tsx
var import_react8 = __toESM(require("react"));
var import_client = require("@raikou/client");

// src/ConfiguratorDemo/controls/get-control-label.ts
var import_hooks = require("@raikou/hooks");
function getControlLabel(label) {
  return (0, import_hooks.upperFirst)(label.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase());
}

// src/ConfiguratorDemo/controls/ConfiguratorBoolean.control.tsx
function ConfiguratorBooleanControl(_a) {
  var _b = _a, {
    value,
    onChange,
    prop
  } = _b, others = __objRest(_b, [
    "value",
    "onChange",
    "prop"
  ]);
  return /* @__PURE__ */ import_react8.default.createElement(
    import_client.Switch,
    __spreadValues({
      checked: value,
      onChange: (event) => onChange(event.currentTarget.checked),
      label: getControlLabel(prop)
    }, others)
  );
}

// src/ConfiguratorDemo/controls/ConfiguratorSegmented.control.tsx
var import_react9 = __toESM(require("react"));
var import_client2 = require("@raikou/client");

// src/ConfiguratorDemo/controls/transform-select-data.ts
var import_hooks2 = require("@raikou/hooks");
function transformSelectData(data) {
  return data.map((item) => {
    if (typeof item === "string") {
      return { label: (0, import_hooks2.upperFirst)(item), value: item };
    }
    return { value: item.value, label: (0, import_hooks2.upperFirst)(item.label) };
  });
}

// src/ConfiguratorDemo/controls/ConfiguratorSegmented.control.tsx
function ConfiguratorSegmentedControl(_a) {
  var _b = _a, {
    data,
    value,
    onChange,
    prop
  } = _b, others = __objRest(_b, [
    "data",
    "value",
    "onChange",
    "prop"
  ]);
  return /* @__PURE__ */ import_react9.default.createElement(import_client2.Input.Wrapper, __spreadValues({ labelElement: "div", label: getControlLabel(prop) }, others), /* @__PURE__ */ import_react9.default.createElement(
    import_client2.SegmentedControl,
    {
      data: transformSelectData(data),
      value,
      onChange,
      fullWidth: true,
      transitionDuration: 150
    }
  ));
}

// src/ConfiguratorDemo/controls/ConfiguratorColor.control.tsx
var import_react11 = __toESM(require("react"));
var import_client3 = require("@raikou/client");
var import_server3 = require("@raikou/server");
var import_system5 = require("@raikou/system");

// src/ConfiguratorDemo/controls/ColorWheelIcon.tsx
var import_react10 = __toESM(require("react"));
var import_system4 = require("@raikou/system");
function ColorWheelIcon() {
  return /* @__PURE__ */ import_react10.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 200 200",
      style: { width: (0, import_system4.rem)(18), height: (0, import_system4.rem)(18) }
    },
    /* @__PURE__ */ import_react10.default.createElement(
      "path",
      {
        fill: "#FF5178",
        d: "M100 0a100 100 0 00-50 13.398l30 51.961A40 40 0 01100 60V0z"
      }
    ),
    /* @__PURE__ */ import_react10.default.createElement(
      "path",
      {
        fill: "#FF9259",
        d: "M49.982 13.408a99.999 99.999 0 00-36.595 36.61l51.968 29.99a40 40 0 0114.638-14.645l-30.01-51.955z"
      }
    ),
    /* @__PURE__ */ import_react10.default.createElement(
      "path",
      {
        fill: "#FFD23B",
        d: "M13.386 50.02A100 100 0 000 100.025l60-.014a40 40 0 015.354-20.002L13.386 50.021z"
      }
    ),
    /* @__PURE__ */ import_react10.default.createElement(
      "path",
      {
        fill: "#89C247",
        d: "M0 100a99.999 99.999 0 0013.398 50l51.961-30A40.001 40.001 0 0160 100H0z"
      }
    ),
    /* @__PURE__ */ import_react10.default.createElement(
      "path",
      {
        fill: "#49B296",
        d: "M13.39 149.989a100.001 100.001 0 0036.599 36.607l30.006-51.958a39.99 39.99 0 01-14.639-14.643l-51.965 29.994z"
      }
    ),
    /* @__PURE__ */ import_react10.default.createElement(
      "path",
      {
        fill: "#2897B1",
        d: "M49.989 186.596A99.995 99.995 0 0099.987 200l.008-60a39.996 39.996 0 01-20-5.362l-30.007 51.958z"
      }
    ),
    /* @__PURE__ */ import_react10.default.createElement(
      "path",
      {
        fill: "#3EC3FF",
        d: "M100 200c17.554 0 34.798-4.621 50-13.397l-30-51.962A40 40 0 01100 140v60z"
      }
    ),
    /* @__PURE__ */ import_react10.default.createElement(
      "path",
      {
        fill: "#09A1E5",
        d: "M150.003 186.601a100.001 100.001 0 0036.601-36.604l-51.962-29.998a40 40 0 01-14.641 14.641l30.002 51.961z"
      }
    ),
    /* @__PURE__ */ import_react10.default.createElement(
      "path",
      {
        fill: "#077CCC",
        d: "M186.607 149.992A99.993 99.993 0 00200 99.99l-60 .006a39.998 39.998 0 01-5.357 20.001l51.964 29.995z"
      }
    ),
    /* @__PURE__ */ import_react10.default.createElement(
      "path",
      {
        fill: "#622876",
        d: "M200 100c0-17.554-4.621-34.798-13.397-50l-51.962 30A39.997 39.997 0 01140 100h60z"
      }
    ),
    /* @__PURE__ */ import_react10.default.createElement(
      "path",
      {
        fill: "#962B7C",
        d: "M186.597 49.99a99.994 99.994 0 00-36.606-36.598l-29.995 51.965a40 40 0 0114.643 14.64l51.958-30.006z"
      }
    ),
    /* @__PURE__ */ import_react10.default.createElement(
      "path",
      {
        fill: "#CB2E81",
        d: "M149.976 13.384A99.999 99.999 0 0099.973 0l.016 60a40.001 40.001 0 0120.002 5.353l29.985-51.97z"
      }
    )
  );
}

// src/ConfiguratorDemo/controls/ConfiguratorColor.control.tsx
function ConfiguratorColorControl(_a) {
  var _b = _a, {
    value,
    onChange,
    prop
  } = _b, others = __objRest(_b, [
    "value",
    "onChange",
    "prop"
  ]);
  const [colorPickerColor, setColorPickerColor] = (0, import_react11.useState)("#fff");
  const handleColorPickerChange = (color) => {
    setColorPickerColor(color);
    onChange(color);
  };
  const colors = Object.keys(import_system5.DEFAULT_THEME.colors).filter((color) => color !== "dark").map((color) => /* @__PURE__ */ import_react11.default.createElement(
    import_server3.ColorSwatch,
    {
      color: `var(--raikou-color-${color}-filled)`,
      component: "button",
      key: color,
      onClick: () => onChange(color),
      radius: "sm",
      className: "configColor-swatch",
      "aria-label": color
    },
    value === color && /* @__PURE__ */ import_react11.default.createElement(import_client3.CheckIcon, { className: "configColor-check" })
  ));
  return /* @__PURE__ */ import_react11.default.createElement(import_client3.Input.Wrapper, __spreadValues({ labelElement: "div", label: getControlLabel(prop) }, others), /* @__PURE__ */ import_react11.default.createElement(import_server3.Group, { gap: 2, mt: 2, wrap: "wrap" }, colors, /* @__PURE__ */ import_react11.default.createElement(import_client3.Popover, { radius: "md", position: "bottom-end", shadow: "md" }, /* @__PURE__ */ import_react11.default.createElement(import_client3.Popover.Target, null, /* @__PURE__ */ import_react11.default.createElement(
    import_server3.UnstyledButton,
    {
      className: "configColor-colorControl",
      "aria-label": "Pick color"
    },
    /* @__PURE__ */ import_react11.default.createElement(ColorWheelIcon, null)
  )), /* @__PURE__ */ import_react11.default.createElement(import_client3.Popover.Dropdown, { p: 8 }, /* @__PURE__ */ import_react11.default.createElement(
    import_client3.ColorPicker,
    {
      value: colorPickerColor,
      onChange: handleColorPickerChange,
      format: "rgba"
    }
  )))));
}

// src/ConfiguratorDemo/controls/ConfiguratorString.control.tsx
var import_react12 = __toESM(require("react"));
var import_client4 = require("@raikou/client");
function ConfiguratorStringControl(_a) {
  var _b = _a, {
    value,
    onChange,
    prop
  } = _b, others = __objRest(_b, [
    "value",
    "onChange",
    "prop"
  ]);
  return /* @__PURE__ */ import_react12.default.createElement(
    import_client4.TextInput,
    __spreadValues({
      value,
      onChange: (event) => onChange(event.currentTarget.value),
      label: getControlLabel(prop),
      placeholder: "Enter prop value"
    }, others)
  );
}

// src/ConfiguratorDemo/controls/ConfiguratorSelect.control.tsx
var import_react13 = __toESM(require("react"));
var import_client5 = require("@raikou/client");
function ConfiguratorSelectControl(_a) {
  var _b = _a, {
    value,
    onChange,
    prop,
    data
  } = _b, others = __objRest(_b, [
    "value",
    "onChange",
    "prop",
    "data"
  ]);
  return /* @__PURE__ */ import_react13.default.createElement(
    import_client5.NativeSelect,
    __spreadValues({
      value,
      onChange: (event) => onChange(event.currentTarget.value),
      label: getControlLabel(prop),
      placeholder: "Enter prop value",
      data: transformSelectData(data)
    }, others)
  );
}

// src/ConfiguratorDemo/controls/ConfiguratorSize.control.tsx
var import_react14 = __toESM(require("react"));
var import_client6 = require("@raikou/client");
var MARKS = [
  { value: 0, label: "xs" },
  { value: 25, label: "sm" },
  { value: 50, label: "md" },
  { value: 75, label: "lg" },
  { value: 100, label: "xl" }
];
function ConfiguratorSizeControl(_a) {
  var _b = _a, {
    value,
    onChange,
    prop
  } = _b, others = __objRest(_b, [
    "value",
    "onChange",
    "prop"
  ]);
  const _value = MARKS.find((mark) => mark.label === value).value;
  const handleChange = (val) => onChange(MARKS.find((mark) => mark.value === val).label);
  return /* @__PURE__ */ import_react14.default.createElement(import_client6.Input.Wrapper, __spreadValues({ labelElement: "div", label: getControlLabel(prop) }, others), /* @__PURE__ */ import_react14.default.createElement(
    import_client6.Slider,
    {
      value: _value,
      onChange: handleChange,
      label: (val) => MARKS.find((mark) => mark.value === val).label,
      step: 25,
      marks: MARKS,
      styles: { markLabel: { display: "none" } },
      thumbLabel: "Size"
    }
  ));
}

// src/ConfiguratorDemo/controls/ConfiguratorNumber.control.tsx
var import_react15 = __toESM(require("react"));
var import_client7 = require("@raikou/client");
function ConfiguratorNumberControl(_a) {
  var _b = _a, {
    value,
    onChange,
    prop,
    step,
    min,
    max
  } = _b, others = __objRest(_b, [
    "value",
    "onChange",
    "prop",
    "step",
    "min",
    "max"
  ]);
  return /* @__PURE__ */ import_react15.default.createElement(import_client7.Input.Wrapper, __spreadValues({ labelElement: "div", label: getControlLabel(prop) }, others), /* @__PURE__ */ import_react15.default.createElement(
    import_client7.Slider,
    {
      value,
      onChange,
      step,
      min,
      max,
      thumbLabel: "Size"
    }
  ));
}

// src/ConfiguratorDemo/inject-props.tsx
function isMultiLine(code) {
  const placeholderLine = code.split("\n").find((line) => line.includes("{{props}}"));
  return placeholderLine && placeholderLine.trim().startsWith("{{props}}");
}
function injectProps(props, code) {
  const propStrings = [];
  const multiline = isMultiLine(code);
  const replacedChildrenCode = code.replace("{{children}}", props.children || "");
  for (const [key, value] of Object.entries(props)) {
    if (key !== "children") {
      if (typeof value === "string") {
        propStrings.push(`${key}="${value}"`);
      } else if (typeof value === "number") {
        propStrings.push(`${key}={${value}}`);
      } else if (typeof value === "boolean") {
        if (value) {
          propStrings.push(key);
        } else {
          propStrings.push(`${key}={false}`);
        }
      }
    }
  }
  if (!multiline) {
    const joined = propStrings.join(" ");
    return joined.length > 0 ? replacedChildrenCode.replace("{{props}}", ` ${joined}`) : replacedChildrenCode.replace("{{props}}", "");
  }
  const placeholderRegex = /^(\s*){{props}}(\s*)$/gm;
  const result = replacedChildrenCode.replace(placeholderRegex, (_, before, after) => {
    const propsWithWhitespace = propStrings.map(
      (propString, index) => `${before}${propString}${index !== propStrings.length - 1 ? "\n" : ""}`
    ).join("");
    return `${propsWithWhitespace}${after}`;
  });
  return result.trim().replace("\n\n", "\n");
}

// src/ConfiguratorDemo/clear-props.ts
function clearProps(controls, state) {
  const normalizedControls = controls.reduce((acc, control) => {
    acc[control.prop] = control.libraryValue;
    return acc;
  }, {});
  return Object.keys(state).reduce((acc, key) => {
    if (state[key] !== normalizedControls[key]) {
      acc[key] = state[key];
    }
    return acc;
  }, {});
}

// src/ConfiguratorDemo/ConfiguratorDemo.tsx
var ControlComponents = {
  boolean: ConfiguratorBooleanControl,
  segmented: ConfiguratorSegmentedControl,
  color: ConfiguratorColorControl,
  string: ConfiguratorStringControl,
  select: ConfiguratorSelectControl,
  size: ConfiguratorSizeControl,
  number: ConfiguratorNumberControl
};
function ConfiguratorDemo({
  code,
  controls,
  children,
  centered,
  maxWidth,
  minHeight,
  withPadding,
  dimmed,
  striped
}) {
  const initialState = controls.reduce((acc, control) => {
    acc[control.prop] = control.initialValue;
    return acc;
  }, {});
  const [state, setState] = (0, import_react16.useState)(initialState);
  const setStateField = (field, value) => setState((current) => __spreadProps(__spreadValues({}, current), { [field]: value }));
  const items = controls.map((control) => {
    const ControlComponent = ControlComponents[control.type];
    const _a = control, { initialValue, libraryValue } = _a, rest = __objRest(_a, ["initialValue", "libraryValue"]);
    return /* @__PURE__ */ import_react16.default.createElement(
      ControlComponent,
      __spreadValues({
        key: control.prop,
        value: state[control.prop],
        onChange: (value) => setStateField(control.prop, value)
      }, rest)
    );
  });
  return /* @__PURE__ */ import_react16.default.createElement(DemoRoot, null, /* @__PURE__ */ import_react16.default.createElement(
    DemoColumns,
    {
      controls: /* @__PURE__ */ import_react16.default.createElement(import_server4.Stack, { className: "configDemo-controls", gap: "sm" }, items),
      centered,
      withPadding,
      maxWidth,
      minHeight,
      dimmed,
      striped
    },
    import_react16.default.cloneElement(children, state)
  ), /* @__PURE__ */ import_react16.default.createElement(
    DemoCode,
    {
      code: [
        {
          fileName: "Demo.tsx",
          language: "tsx",
          code: typeof code === "function" ? code(clearProps(controls, state)) : injectProps(clearProps(controls, state), code)
        }
      ]
    }
  ));
}

// src/StylesApiDemo/StylesApiDemo.tsx
var import_react17 = __toESM(require("react"));
var import_server5 = require("@raikou/server");
function getCss(hovered) {
  return hovered ? `.${hovered} {
  outline: 2px solid #fe0d45;
  outline-offset: -2px; 
}
` : "/*\n * Hover over selectors to apply outline styles\n *\n */";
}
function StylesApiDemo({
  data,
  code,
  withPadding,
  maxWidth,
  centered,
  children,
  dimmed,
  striped
}) {
  const [hovered, setHovered] = import_react17.default.useState(null);
  const selectors = Object.keys(data.selectors);
  const controls = selectors.map((selector) => /* @__PURE__ */ import_react17.default.createElement(
    import_server5.UnstyledButton,
    {
      className: "stylesApiDemo-selector",
      key: selector,
      onMouseEnter: () => setHovered(selector),
      onMouseLeave: () => setHovered(null)
    },
    /* @__PURE__ */ import_react17.default.createElement(import_server5.Text, { mb: 2 }, selector),
    /* @__PURE__ */ import_react17.default.createElement(import_server5.Text, { fz: 11, c: "dimmed" }, data.selectors[selector])
  ));
  const classNamesProp = hovered ? ` classNames={{ ${hovered}: classes.${hovered} }}` : "";
  return /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, /* @__PURE__ */ import_react17.default.createElement("style", { dangerouslySetInnerHTML: { __html: getCss(hovered) } }), /* @__PURE__ */ import_react17.default.createElement(DemoRoot, null, /* @__PURE__ */ import_react17.default.createElement(
    DemoColumns,
    {
      withPadding,
      maxWidth,
      centered,
      controls,
      dimmed,
      striped,
      title: "Component Styles API",
      description: "Hover over selectors to highlight corresponding elements"
    },
    import_react17.default.cloneElement(children, {
      classNames: selectors.reduce(
        (acc, item) => {
          acc[item] = item;
          return acc;
        },
        {}
      )
    })
  ), /* @__PURE__ */ import_react17.default.createElement(
    DemoCode,
    {
      code: [
        {
          fileName: "Demo.module.css",
          language: "css",
          code: getCss(hovered)
        },
        {
          fileName: "Demo.tsx",
          language: "tsx",
          code: code.replace("{{props}}", classNamesProp)
        }
      ]
    }
  )));
}

// src/Demo/Demo.tsx
function Demo({ data }) {
  const { component: Component } = data;
  switch (data.type) {
    case "code":
      return /* @__PURE__ */ import_react18.default.createElement(CodeDemo, __spreadValues({}, data), /* @__PURE__ */ import_react18.default.createElement(Component, null));
    case "configurator":
      return /* @__PURE__ */ import_react18.default.createElement(ConfiguratorDemo, __spreadValues({}, data), /* @__PURE__ */ import_react18.default.createElement(Component, null));
    case "styles-api":
      return /* @__PURE__ */ import_react18.default.createElement(StylesApiDemo, __spreadValues({}, data), /* @__PURE__ */ import_react18.default.createElement(Component, null));
    default:
      return null;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Demo,
  getCodeFileIcon,
  meta
});
