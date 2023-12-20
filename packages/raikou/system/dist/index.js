"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
  DirectionContext: () => DirectionContext,
  DirectionProvider: () => DirectionProvider,
  MantineColors: () => MantineColors,
  RaikouProvider: () => RaikouProvider,
  createCSSVariables: () => createCSSVariables,
  useColorScheme: () => useColorScheme,
  useDirection: () => useDirection
});
module.exports = __toCommonJS(src_exports);

// src/core/RaikouProvider/color-scheme-management/color-scheme-management.ts
var import_next_themes = require("next-themes");
function useColorScheme() {
  const {
    theme: colorScheme,
    themes: allThemes,
    setTheme: setColorScheme
  } = (0, import_next_themes.useTheme)();
  return {
    colorScheme: colorScheme || "system",
    allThemes,
    setColorScheme
  };
}

// src/core/RaikouProvider/convert-css-variables/css-variables-object-to-string.ts
function cssNestedVariablesObjectToString(variables) {
  let cssString = "";
  for (const nestedSelector in variables) {
    cssString += `${nestedSelector}: ${variables[nestedSelector]}`;
  }
  return cssString.trim();
}

// src/core/RaikouProvider/convert-css-variables/wrap-with-selector.ts
function wrapWithSelector(selectors, code) {
  const _selectors = Array.isArray(selectors) ? selectors : [selectors];
  return _selectors.reduce((acc, selector) => `${selector}{${acc}}`, code);
}

// src/core/RaikouProvider/convert-css-variables/convert-css-variables.ts
function convertCssNestedVariables(input, selector) {
  let darkForced = "";
  for (const nestedSelector in input.dark) {
    const dark = cssNestedVariablesObjectToString(input.dark[nestedSelector]);
    if (dark) {
      darkForced += wrapWithSelector(
        `${selector}[data-raikou-color-scheme="dark"] ${nestedSelector}`,
        dark
      );
    }
  }
  let lightForced = "";
  for (const nestedSelector in input.light) {
    const light = cssNestedVariablesObjectToString(input.light[nestedSelector]);
    if (light) {
      lightForced += wrapWithSelector(
        `${selector}[data-raikou-color-scheme="light"] ${nestedSelector}`,
        light
      );
    }
  }
  return `${darkForced}${lightForced}`;
}

// src/core/RaikouProvider/create-css-variables/create-css-variables.ts
function getColorSchemeCssVariables(selector) {
  return `
  ${selector}[data-raikou-color-scheme="dark"] { --raikou-color-scheme: dark; }
  ${selector}[data-raikou-color-scheme="light"] { --raikou-color-scheme: light; }
`;
}
function createCSSVariables({
  theme,
  cssVariablesResolver: generator,
  cssVariablesSelector = ":root"
}) {
  const shouldCleanVariables = cssVariablesSelector === ":root";
  let css2 = "";
  if (generator) {
    const providerGeneratorFunc = new Function("theme", generator);
    const providerGenerator = providerGeneratorFunc == null ? void 0 : providerGeneratorFunc(theme);
    css2 = convertCssNestedVariables(providerGenerator, cssVariablesSelector);
  }
  var elem = document.querySelector('style[data-raikou-styles="system"]');
  elem == null ? void 0 : elem.remove();
  var newElem = document.createElement("style");
  newElem.setAttribute("data-raikou-styles", "system");
  newElem.innerHTML = `${css2}${shouldCleanVariables ? "" : getColorSchemeCssVariables(cssVariablesSelector)}`;
  document.body.prepend(newElem);
  return null;
}

// src/core/RaikouProvider/RaikouProvider.tsx
var import_react = __toESM(require("react"));
var import_next_themes2 = require("next-themes");

// src/core/RaikouProvider/suppress-nextjs-warning.ts
function suppressNextjsWarning() {
  const originalError = console.error;
  console.error = (...args) => {
    if (args.length > 1 && typeof args[0] === "string" && args[0].toLowerCase().includes("extra attributes from the server") && typeof args[1] === "string" && args[1].toLowerCase().includes("data-raikou-color-scheme")) {
    } else {
      originalError(...args);
    }
  };
}

// src/core/RaikouProvider/RaikouProvider.tsx
suppressNextjsWarning();
function RaikouProvider({
  theme,
  defaultColorScheme,
  themeStorageKey = "raikou-color-scheme",
  children
}) {
  if (typeof window !== "undefined") {
    window["raikou_theme"] = theme;
  }
  return /* @__PURE__ */ import_react.default.createElement(
    import_next_themes2.ThemeProvider,
    {
      storageKey: themeStorageKey,
      themes: ["light", "dark"],
      attribute: `data-${themeStorageKey}`,
      enableColorScheme: false,
      forcedTheme: defaultColorScheme ? defaultColorScheme : void 0
    },
    children
  );
}

// src/core/RaikouProvider/mantine-colors.ts
var MantineColors = {
  gray: {
    50: "#f8f9fa",
    100: "#f1f3f5",
    200: "#e9ecef",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#868e96",
    700: "#495057",
    800: "#343a40",
    900: "#212529",
    950: "#0f1e23"
  },
  red: {
    50: "#fff5f5",
    100: "#ffe3e3",
    200: "#ffc9c9",
    300: "#ffa8a8",
    400: "#ff8787",
    500: "#ff6b6b",
    600: "#fa5252",
    700: "#f03e3e",
    800: "#e03131",
    900: "#c92a2a",
    950: "#b32121"
  },
  pink: {
    50: "#fff0f6",
    100: "#ffdeeb",
    200: "#fcc2d7",
    300: "#faa2c1",
    400: "#f783ac",
    500: "#f06595",
    600: "#e64980",
    700: "#d6336c",
    800: "#c2255c",
    900: "#a61e4d",
    950: "#82143f"
  },
  grape: {
    50: "#f8f0fc",
    100: "#f3d9fa",
    200: "#eebefa",
    300: "#e599f7",
    400: "#da77f2",
    500: "#cc5de8",
    600: "#be4bdb",
    700: "#ae3ec9",
    800: "#9c36b5",
    900: "#862e9c",
    950: "#7c2791"
  },
  violet: {
    50: "#f3f0ff",
    100: "#e5dbff",
    200: "#d0bfff",
    300: "#b197fc",
    400: "#9775fa",
    500: "#845ef7",
    600: "#7950f2",
    700: "#7048e8",
    800: "#6741d9",
    900: "#5f3dc4",
    950: "#5936b8"
  },
  indigo: {
    50: "#edf2ff",
    100: "#dbe4ff",
    200: "#bac8ff",
    300: "#91a7ff",
    400: "#748ffc",
    500: "#5c7cfa",
    600: "#4c6ef5",
    700: "#4263eb",
    800: "#3b5bdb",
    900: "#364fc7",
    950: "#2f2d6d"
  },
  blue: {
    50: "#e7f5ff",
    100: "#d0ebff",
    200: "#a5d8ff",
    300: "#74c0fc",
    400: "#4dabf7",
    500: "#339af0",
    600: "#228be6",
    700: "#1c7ed6",
    800: "#1971c2",
    900: "#1864ab",
    950: "#0c2cfd"
  },
  cyan: {
    50: "#e3fafc",
    100: "#c5f6fa",
    200: "#99e9f2",
    300: "#66d9e8",
    400: "#3bc9db",
    500: "#22b8cf",
    600: "#15aabf",
    700: "#1098ad",
    800: "#0c8599",
    900: "#0b7285",
    950: "#086f7f"
  },
  teal: {
    50: "#e6fcf5",
    100: "#c3fae8",
    200: "#96f2d7",
    300: "#63e6be",
    400: "#38d9a9",
    500: "#20c997",
    600: "#12b886",
    700: "#0ca678",
    800: "#099268",
    900: "#087f5b",
    950: "#066c4c"
  },
  green: {
    50: "#ebfbee",
    100: "#d3f9d8",
    200: "#b2f2bb",
    300: "#8ce99a",
    400: "#69db7c",
    500: "#51cf66",
    600: "#40c057",
    700: "#37b24d",
    800: "#2f9e44",
    900: "#2b8a3e",
    950: "#175500"
  },
  lime: {
    50: "#f4fce3",
    100: "#e9fac8",
    200: "#d8f5a2",
    300: "#c0eb75",
    400: "#a9e34b",
    500: "#94d82d",
    600: "#82c91e",
    700: "#74b816",
    800: "#66a80f",
    900: "#5c940d",
    950: "#4a7c0e"
  },
  yellow: {
    50: "#fff9db",
    100: "#fff3bf",
    200: "#ffec99",
    300: "#ffe066",
    400: "#ffd43b",
    500: "#fcc419",
    600: "#fab005",
    700: "#f59f00",
    800: "#f08c00",
    900: "#e67700",
    950: "#a85300"
  },
  orange: {
    50: "#fff4e6",
    100: "#ffe8cc",
    200: "#ffd8a8",
    300: "#ffc078",
    400: "#ffa94d",
    500: "#ff922b",
    600: "#fd7e14",
    700: "#f76707",
    800: "#e8590c",
    900: "#d9480f",
    950: "#c83712"
  }
};

// src/core/DirectionProvider/DirectionProvider.tsx
var import_react3 = __toESM(require("react"));

// src/core/DirectionProvider/use-isomorphic-effect.ts
var import_react2 = require("react");
var useIsomorphicEffect = typeof document !== "undefined" ? import_react2.useLayoutEffect : import_react2.useEffect;

// src/core/DirectionProvider/DirectionProvider.tsx
var DirectionContext = (0, import_react3.createContext)({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function useDirection() {
  return (0, import_react3.useContext)(DirectionContext);
}
function DirectionProvider({
  children,
  initialDirection = "ltr",
  detectDirection = true
}) {
  const [dir, setDir] = (0, import_react3.useState)(initialDirection);
  const setDirection = (direction) => {
    setDir(direction);
    document.documentElement.setAttribute("dir", direction);
  };
  const toggleDirection = () => setDirection(dir === "ltr" ? "rtl" : "ltr");
  useIsomorphicEffect(() => {
    if (detectDirection) {
      const direction = document.documentElement.getAttribute("dir");
      if (direction === "rtl" || direction === "ltr") {
        setDirection(direction);
      }
    }
  }, []);
  return /* @__PURE__ */ import_react3.default.createElement(DirectionContext.Provider, { value: { dir, toggleDirection, setDirection } }, children);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DirectionContext,
  DirectionProvider,
  MantineColors,
  RaikouProvider,
  createCSSVariables,
  useColorScheme,
  useDirection
});
