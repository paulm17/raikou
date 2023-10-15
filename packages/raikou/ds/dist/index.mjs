import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-PPXV74HS.mjs";

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
import React18 from "react";

// src/CodeDemo/CodeDemo.tsx
import React6 from "react";

// src/DemoArea/DemoArea.tsx
import React from "react";
import { Box } from "@raikou/server";
import { rem } from "@raikou/system";
function DemoArea({
  withPadding = true,
  centered,
  maxWidth,
  minHeight,
  children,
  dimmed,
  striped
}) {
  return /* @__PURE__ */ React.createElement(
    Box,
    {
      className: "demoArea-demo",
      mod: { "with-padding": withPadding, centered, dimmed, striped },
      __vars: {
        "--demo-flex": maxWidth ? "1" : void 0,
        "--demo-max-width": maxWidth ? rem(maxWidth) : void 0,
        "--demo-min-height": minHeight ? rem(minHeight) : void 0,
        "--demo-margin-y": maxWidth && centered ? "auto" : void 0
      }
    },
    /* @__PURE__ */ React.createElement("div", { className: "demoArea-demoInner" }, children)
  );
}

// src/DemoCode/DemoCode.tsx
import React4 from "react";
import {
  CodeHighlightTabs
} from "@raikou/code-highlight";

// src/Icons/TypeScriptIcon.tsx
import { rem as rem2 } from "@raikou/system";
import React2 from "react";
function TypeScriptIcon(_a) {
  var _b = _a, {
    size,
    style
  } = _b, others = __objRest(_b, [
    "size",
    "style"
  ]);
  return /* @__PURE__ */ React2.createElement(
    "svg",
    __spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 48 48",
      style: __spreadValues({ width: rem2(size), height: rem2(size) }, style)
    }, others),
    /* @__PURE__ */ React2.createElement("path", { fill: "#1976d2", d: "M6 6h36v36H6z" }),
    /* @__PURE__ */ React2.createElement(
      "path",
      {
        fill: "#fff",
        d: "M27.49 22H14.227v3.264h4.757V40h3.769V25.264h4.737zM39.194 26.084s-1.787-1.192-3.807-1.192-2.747.96-2.747 1.986c0 2.648 7.381 2.383 7.381 7.712 0 8.209-11.254 4.568-11.254 4.568V35.22s2.152 1.622 4.733 1.622 2.483-1.688 2.483-1.92c0-2.449-7.315-2.449-7.315-7.878 0-7.381 10.658-4.469 10.658-4.469l-.132 3.509z"
      }
    )
  );
}

// src/Icons/CssIcon.tsx
import { rem as rem3 } from "@raikou/system";
import React3 from "react";
function CssIcon(_a) {
  var _b = _a, { size, style } = _b, others = __objRest(_b, ["size", "style"]);
  return /* @__PURE__ */ React3.createElement(
    "svg",
    __spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 48 48",
      style: __spreadValues({ width: rem3(size), height: rem3(size) }, style)
    }, others),
    /* @__PURE__ */ React3.createElement("path", { fill: "#0277BD", d: "M41 5H7l3 34 14 4 14-4 3-34z" }),
    /* @__PURE__ */ React3.createElement("path", { fill: "#039BE5", d: "M24 8v31.9l11.2-3.2L37.7 8z" }),
    /* @__PURE__ */ React3.createElement(
      "path",
      {
        fill: "#FFF",
        d: "M33.1 13H24v4h4.9l-.3 4H24v4h4.4l-.3 4.5-4.1 1.4v4.2l7.9-2.6.7-11.5z"
      }
    ),
    /* @__PURE__ */ React3.createElement(
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
    return /* @__PURE__ */ React4.createElement(TypeScriptIcon, { size: 18 });
  }
  if (fileName.endsWith(".css")) {
    return /* @__PURE__ */ React4.createElement(CssIcon, { size: 18 });
  }
  return null;
}
function DemoCode({ code, defaultExpanded = true }) {
  const _code = typeof code === "string" ? { code, fileName: "Demo.tsx", language: "tsx" } : code;
  return /* @__PURE__ */ React4.createElement(React4.Fragment, null, _code && /* @__PURE__ */ React4.createElement(
    CodeHighlightTabs,
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
import React5 from "react";
import cx from "clsx";
function DemoRoot(_a) {
  var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React5.createElement("div", __spreadValues({ className: cx("demoRoot-root", className) }, others));
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
  return /* @__PURE__ */ React6.createElement(DemoRoot, null, /* @__PURE__ */ React6.createElement(
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
  ), /* @__PURE__ */ React6.createElement(DemoCode, { code, defaultExpanded }));
}

// src/ConfiguratorDemo/ConfiguratorDemo.tsx
import React16, { useState as useState2 } from "react";
import { Stack } from "@raikou/server";

// src/DemoColumns/DemoColumns.tsx
import React7 from "react";
import { Text } from "@raikou/server";
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
  return /* @__PURE__ */ React7.createElement("div", { className: "demoColumns-columns" }, /* @__PURE__ */ React7.createElement(
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
  ), /* @__PURE__ */ React7.createElement("div", { className: "demoColumns-controls" }, title && /* @__PURE__ */ React7.createElement("div", { className: "demoColumns-header" }, /* @__PURE__ */ React7.createElement(Text, { fw: 500, fz: "sm", mb: 5 }, title), description && /* @__PURE__ */ React7.createElement(Text, { c: "dimmed", fz: 11, lh: 1.45 }, description)), controls));
}

// src/ConfiguratorDemo/controls/ConfiguratorBoolean.control.tsx
import React8 from "react";
import { Switch } from "@raikou/client";

// src/ConfiguratorDemo/controls/get-control-label.ts
import { upperFirst } from "@raikou/hooks";
function getControlLabel(label) {
  return upperFirst(label.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase());
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
  return /* @__PURE__ */ React8.createElement(
    Switch,
    __spreadValues({
      checked: value,
      onChange: (event) => onChange(event.currentTarget.checked),
      label: getControlLabel(prop)
    }, others)
  );
}

// src/ConfiguratorDemo/controls/ConfiguratorSegmented.control.tsx
import React9 from "react";
import { SegmentedControl, Input } from "@raikou/client";

// src/ConfiguratorDemo/controls/transform-select-data.ts
import { upperFirst as upperFirst2 } from "@raikou/hooks";
function transformSelectData(data) {
  return data.map((item) => {
    if (typeof item === "string") {
      return { label: upperFirst2(item), value: item };
    }
    return { value: item.value, label: upperFirst2(item.label) };
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
  return /* @__PURE__ */ React9.createElement(Input.Wrapper, __spreadValues({ labelElement: "div", label: getControlLabel(prop) }, others), /* @__PURE__ */ React9.createElement(
    SegmentedControl,
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
import React11, { useState } from "react";
import { Input as Input2, CheckIcon, Popover, ColorPicker } from "@raikou/client";
import {
  ColorSwatch,
  Group,
  UnstyledButton
} from "@raikou/server";
import { DEFAULT_THEME } from "@raikou/system";

// src/ConfiguratorDemo/controls/ColorWheelIcon.tsx
import React10 from "react";
import { rem as rem4 } from "@raikou/system";
function ColorWheelIcon() {
  return /* @__PURE__ */ React10.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 200 200",
      style: { width: rem4(18), height: rem4(18) }
    },
    /* @__PURE__ */ React10.createElement(
      "path",
      {
        fill: "#FF5178",
        d: "M100 0a100 100 0 00-50 13.398l30 51.961A40 40 0 01100 60V0z"
      }
    ),
    /* @__PURE__ */ React10.createElement(
      "path",
      {
        fill: "#FF9259",
        d: "M49.982 13.408a99.999 99.999 0 00-36.595 36.61l51.968 29.99a40 40 0 0114.638-14.645l-30.01-51.955z"
      }
    ),
    /* @__PURE__ */ React10.createElement(
      "path",
      {
        fill: "#FFD23B",
        d: "M13.386 50.02A100 100 0 000 100.025l60-.014a40 40 0 015.354-20.002L13.386 50.021z"
      }
    ),
    /* @__PURE__ */ React10.createElement(
      "path",
      {
        fill: "#89C247",
        d: "M0 100a99.999 99.999 0 0013.398 50l51.961-30A40.001 40.001 0 0160 100H0z"
      }
    ),
    /* @__PURE__ */ React10.createElement(
      "path",
      {
        fill: "#49B296",
        d: "M13.39 149.989a100.001 100.001 0 0036.599 36.607l30.006-51.958a39.99 39.99 0 01-14.639-14.643l-51.965 29.994z"
      }
    ),
    /* @__PURE__ */ React10.createElement(
      "path",
      {
        fill: "#2897B1",
        d: "M49.989 186.596A99.995 99.995 0 0099.987 200l.008-60a39.996 39.996 0 01-20-5.362l-30.007 51.958z"
      }
    ),
    /* @__PURE__ */ React10.createElement(
      "path",
      {
        fill: "#3EC3FF",
        d: "M100 200c17.554 0 34.798-4.621 50-13.397l-30-51.962A40 40 0 01100 140v60z"
      }
    ),
    /* @__PURE__ */ React10.createElement(
      "path",
      {
        fill: "#09A1E5",
        d: "M150.003 186.601a100.001 100.001 0 0036.601-36.604l-51.962-29.998a40 40 0 01-14.641 14.641l30.002 51.961z"
      }
    ),
    /* @__PURE__ */ React10.createElement(
      "path",
      {
        fill: "#077CCC",
        d: "M186.607 149.992A99.993 99.993 0 00200 99.99l-60 .006a39.998 39.998 0 01-5.357 20.001l51.964 29.995z"
      }
    ),
    /* @__PURE__ */ React10.createElement(
      "path",
      {
        fill: "#622876",
        d: "M200 100c0-17.554-4.621-34.798-13.397-50l-51.962 30A39.997 39.997 0 01140 100h60z"
      }
    ),
    /* @__PURE__ */ React10.createElement(
      "path",
      {
        fill: "#962B7C",
        d: "M186.597 49.99a99.994 99.994 0 00-36.606-36.598l-29.995 51.965a40 40 0 0114.643 14.64l51.958-30.006z"
      }
    ),
    /* @__PURE__ */ React10.createElement(
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
  const [colorPickerColor, setColorPickerColor] = useState("#fff");
  const handleColorPickerChange = (color) => {
    setColorPickerColor(color);
    onChange(color);
  };
  const colors = Object.keys(DEFAULT_THEME.colors).filter((color) => color !== "dark").map((color) => /* @__PURE__ */ React11.createElement(
    ColorSwatch,
    {
      color: `var(--raikou-color-${color}-filled)`,
      component: "button",
      key: color,
      onClick: () => onChange(color),
      radius: "sm",
      className: "configColor-swatch",
      "aria-label": color
    },
    value === color && /* @__PURE__ */ React11.createElement(CheckIcon, { className: "configColor-check" })
  ));
  return /* @__PURE__ */ React11.createElement(Input2.Wrapper, __spreadValues({ labelElement: "div", label: getControlLabel(prop) }, others), /* @__PURE__ */ React11.createElement(Group, { gap: 2, mt: 2, wrap: "wrap" }, colors, /* @__PURE__ */ React11.createElement(Popover, { radius: "md", position: "bottom-end", shadow: "md" }, /* @__PURE__ */ React11.createElement(Popover.Target, null, /* @__PURE__ */ React11.createElement(
    UnstyledButton,
    {
      className: "configColor-colorControl",
      "aria-label": "Pick color"
    },
    /* @__PURE__ */ React11.createElement(ColorWheelIcon, null)
  )), /* @__PURE__ */ React11.createElement(Popover.Dropdown, { p: 8 }, /* @__PURE__ */ React11.createElement(
    ColorPicker,
    {
      value: colorPickerColor,
      onChange: handleColorPickerChange,
      format: "rgba"
    }
  )))));
}

// src/ConfiguratorDemo/controls/ConfiguratorString.control.tsx
import React12 from "react";
import { TextInput } from "@raikou/client";
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
  return /* @__PURE__ */ React12.createElement(
    TextInput,
    __spreadValues({
      value,
      onChange: (event) => onChange(event.currentTarget.value),
      label: getControlLabel(prop),
      placeholder: "Enter prop value"
    }, others)
  );
}

// src/ConfiguratorDemo/controls/ConfiguratorSelect.control.tsx
import React13 from "react";
import { NativeSelect } from "@raikou/client";
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
  return /* @__PURE__ */ React13.createElement(
    NativeSelect,
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
import React14 from "react";
import { Slider, Input as Input3 } from "@raikou/client";
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
  return /* @__PURE__ */ React14.createElement(Input3.Wrapper, __spreadValues({ labelElement: "div", label: getControlLabel(prop) }, others), /* @__PURE__ */ React14.createElement(
    Slider,
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
import React15 from "react";
import { Slider as Slider2, Input as Input4 } from "@raikou/client";
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
  return /* @__PURE__ */ React15.createElement(Input4.Wrapper, __spreadValues({ labelElement: "div", label: getControlLabel(prop) }, others), /* @__PURE__ */ React15.createElement(
    Slider2,
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
  const [state, setState] = useState2(initialState);
  const setStateField = (field, value) => setState((current) => __spreadProps(__spreadValues({}, current), { [field]: value }));
  const items = controls.map((control) => {
    const ControlComponent = ControlComponents[control.type];
    const _a = control, { initialValue, libraryValue } = _a, rest = __objRest(_a, ["initialValue", "libraryValue"]);
    return /* @__PURE__ */ React16.createElement(
      ControlComponent,
      __spreadValues({
        key: control.prop,
        value: state[control.prop],
        onChange: (value) => setStateField(control.prop, value)
      }, rest)
    );
  });
  return /* @__PURE__ */ React16.createElement(DemoRoot, null, /* @__PURE__ */ React16.createElement(
    DemoColumns,
    {
      controls: /* @__PURE__ */ React16.createElement(Stack, { className: "configDemo-controls", gap: "sm" }, items),
      centered,
      withPadding,
      maxWidth,
      minHeight,
      dimmed,
      striped
    },
    React16.cloneElement(children, state)
  ), /* @__PURE__ */ React16.createElement(
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
import React17 from "react";
import { UnstyledButton as UnstyledButton2, Text as Text2 } from "@raikou/server";
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
  const [hovered, setHovered] = React17.useState(null);
  const selectors = Object.keys(data.selectors);
  const controls = selectors.map((selector) => /* @__PURE__ */ React17.createElement(
    UnstyledButton2,
    {
      className: "stylesApiDemo-selector",
      key: selector,
      onMouseEnter: () => setHovered(selector),
      onMouseLeave: () => setHovered(null)
    },
    /* @__PURE__ */ React17.createElement(Text2, { mb: 2 }, selector),
    /* @__PURE__ */ React17.createElement(Text2, { fz: 11, c: "dimmed" }, data.selectors[selector])
  ));
  const classNamesProp = hovered ? ` classNames={{ ${hovered}: classes.${hovered} }}` : "";
  return /* @__PURE__ */ React17.createElement(React17.Fragment, null, /* @__PURE__ */ React17.createElement("style", { dangerouslySetInnerHTML: { __html: getCss(hovered) } }), /* @__PURE__ */ React17.createElement(DemoRoot, null, /* @__PURE__ */ React17.createElement(
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
    React17.cloneElement(children, {
      classNames: selectors.reduce(
        (acc, item) => {
          acc[item] = item;
          return acc;
        },
        {}
      )
    })
  ), /* @__PURE__ */ React17.createElement(
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
      return /* @__PURE__ */ React18.createElement(CodeDemo, __spreadValues({}, data), /* @__PURE__ */ React18.createElement(Component, null));
    case "configurator":
      return /* @__PURE__ */ React18.createElement(ConfiguratorDemo, __spreadValues({}, data), /* @__PURE__ */ React18.createElement(Component, null));
    case "styles-api":
      return /* @__PURE__ */ React18.createElement(StylesApiDemo, __spreadValues({}, data), /* @__PURE__ */ React18.createElement(Component, null));
    default:
      return null;
  }
}
export {
  Demo,
  getFileIcon as getCodeFileIcon,
  meta
};
