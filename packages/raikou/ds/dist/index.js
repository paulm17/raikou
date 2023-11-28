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
  CssIcon: () => CssIcon,
  Demo: () => Demo,
  DiscordIcon: () => DiscordIcon,
  GithubIcon: () => GithubIcon,
  NpmIcon: () => NpmIcon,
  TwitterIcon: () => TwitterIcon,
  TypeScriptCircleIcon: () => TypeScriptCircleIcon,
  TypeScriptIcon: () => TypeScriptIcon,
  YarnIcon: () => YarnIcon,
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

// src/Icons/DiscordIcon.tsx
var import_react = __toESM(require("react"));
var import_system = require("@raikou/system");
function DiscordIcon(_a) {
  var _b = _a, { size, style } = _b, others = __objRest(_b, ["size", "style"]);
  return /* @__PURE__ */ import_react.default.createElement(
    "svg",
    __spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 256 199",
      style: __spreadValues({ width: (0, import_system.rem)(size), height: (0, import_system.rem)(size) }, style)
    }, others),
    /* @__PURE__ */ import_react.default.createElement(
      "path",
      {
        fill: "currentColor",
        d: "M216.856 16.597A208.5 208.5 0 00164.042 0c-2.275 4.113-4.933 9.646-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.807 207.807 0 00-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.13 161.13 0 0079.735 175.3a136.374 136.374 0 01-21.846-10.632 108.542 108.542 0 005.356-4.237c42.122 19.702 87.89 19.702 129.51 0 1.751 1.46 3.543 2.88 5.355 4.237a136.011 136.011 0 01-21.886 10.653c4.006 8.02 8.638 15.671 13.873 22.848 21.142-6.581 42.646-16.637 64.815-33.213 5.316-56.288-9.081-105.09-38.056-148.36zM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18z"
      }
    )
  );
}

// src/Icons/TwitterIcon.tsx
var import_react2 = __toESM(require("react"));
var import_system2 = require("@raikou/system");
function TwitterIcon(_a) {
  var _b = _a, { size, style } = _b, others = __objRest(_b, ["size", "style"]);
  return /* @__PURE__ */ import_react2.default.createElement(
    "svg",
    __spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 209",
      fill: "currentColor",
      style: __spreadValues({ width: (0, import_system2.rem)(size), height: (0, import_system2.rem)(size) }, style)
    }, others),
    /* @__PURE__ */ import_react2.default.createElement(
      "path",
      {
        fillRule: "nonzero",
        d: "M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 01-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 01-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 01-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 00256 25.45"
      }
    )
  );
}

// src/Icons/GithubIcon.tsx
var import_react3 = __toESM(require("react"));
var import_system3 = require("@raikou/system");
function GithubIcon(_a) {
  var _b = _a, { size, style } = _b, others = __objRest(_b, ["size", "style"]);
  return /* @__PURE__ */ import_react3.default.createElement(
    "svg",
    __spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16",
      style: __spreadValues({ width: (0, import_system3.rem)(size), height: (0, import_system3.rem)(size) }, style),
      fill: "currentColor"
    }, others),
    /* @__PURE__ */ import_react3.default.createElement(
      "path",
      {
        fillRule: "evenodd",
        d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
      }
    )
  );
}

// src/Icons/NpmIcon.tsx
var import_react4 = __toESM(require("react"));
var import_system4 = require("@raikou/system");
function NpmIcon(_a) {
  var _b = _a, { size, style } = _b, others = __objRest(_b, ["size", "style"]);
  return /* @__PURE__ */ import_react4.default.createElement(
    "svg",
    __spreadProps(__spreadValues({}, others), {
      preserveAspectRatio: "xMidYMid",
      viewBox: "0 0 256 256",
      xmlns: "http://www.w3.org/2000/svg",
      style: __spreadValues({ width: (0, import_system4.rem)(size), height: (0, import_system4.rem)(size) }, style)
    }),
    /* @__PURE__ */ import_react4.default.createElement("path", { d: "M0 256V0h256v256z", fill: "#C12127" }),
    /* @__PURE__ */ import_react4.default.createElement("path", { d: "M48 48h160v160h-32V80h-48v128H48z", fill: "#FFF" })
  );
}

// src/Icons/YarnIcon.tsx
var import_react5 = __toESM(require("react"));
var import_system5 = require("@raikou/system");
function YarnIcon(_a) {
  var _b = _a, { size, style } = _b, others = __objRest(_b, ["size", "style"]);
  return /* @__PURE__ */ import_react5.default.createElement(
    "svg",
    __spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "xMidYMid",
      viewBox: "0 0 256 256",
      style: __spreadValues({ width: (0, import_system5.rem)(size), height: (0, import_system5.rem)(size) }, style)
    }, others),
    /* @__PURE__ */ import_react5.default.createElement(
      "path",
      {
        fill: "#368FB9",
        d: "M128 0C57.328 0 0 57.328 0 128s57.328 128 128 128 128-57.328 128-128S198.672 0 128 0"
      }
    ),
    /* @__PURE__ */ import_react5.default.createElement(
      "path",
      {
        fill: "#FFF",
        d: "M203.317 174.06c-7.907 1.878-11.91 3.608-21.695 9.983-15.271 9.884-31.976 14.48-31.976 14.48s-1.383 2.076-5.387 3.015c-6.918 1.68-32.963 3.114-35.335 3.163-6.376.05-10.28-1.63-11.367-4.25-3.311-7.907 4.744-11.367 4.744-11.367s-1.779-1.087-2.817-2.076c-.939-.939-1.927-2.816-2.224-2.125-1.235 3.015-1.878 10.379-5.189 13.69-4.547 4.596-13.146 3.064-18.236.395-5.585-2.965.395-9.933.395-9.933s-3.015 1.779-5.436-1.878c-2.175-3.36-4.2-9.094-3.657-16.16.593-8.056 9.587-15.865 9.587-15.865s-1.581-11.91 3.608-24.117c4.695-11.12 17.347-20.065 17.347-20.065s-10.626-11.762-6.672-22.338c2.57-6.92 3.608-6.87 4.448-7.166 2.965-1.137 5.831-2.373 7.957-4.695 10.625-11.466 24.166-9.292 24.166-9.292s6.425-19.52 12.356-15.715c1.828 1.186 8.401 15.814 8.401 15.814s7.018-4.102 7.809-2.57c4.25 8.254 4.744 24.019 2.866 33.607-3.163 15.814-11.07 24.315-14.233 29.652-.741 1.236 8.5 5.14 14.332 21.3 5.387 14.777.593 27.182 1.433 28.566.148.247.198.346.198.346s6.177.494 18.582-7.166c6.622-4.102 14.48-8.698 23.425-8.797 8.65-.149 9.094 9.983 2.57 11.564zm11.763-7.265c-.89-7.017-6.82-11.86-14.431-11.762-11.367.148-20.905 6.03-27.231 9.934-2.471 1.532-4.596 2.669-6.425 3.509.395-5.733.05-13.245-2.916-21.498-3.608-9.885-8.45-15.963-11.91-19.472 4.003-5.832 9.489-14.332 12.058-27.478 2.224-11.219 1.533-28.664-3.558-38.45-1.038-1.976-2.767-3.41-4.942-4.003-.89-.247-2.57-.741-5.881.198-4.991-10.329-6.721-11.416-8.056-12.306-2.767-1.779-6.029-2.174-9.093-1.038-4.102 1.483-7.61 5.437-10.922 12.454a51.47 51.47 0 00-1.334 3.015c-6.277.445-16.161 2.718-24.513 11.762-1.038 1.137-3.064 1.977-5.19 2.768h.05c-4.349 1.532-6.326 5.09-8.747 11.515-3.361 8.994.098 17.84 3.508 23.574-4.645 4.151-10.823 10.773-14.084 18.532-4.053 9.588-4.498 18.978-4.35 24.068-3.459 3.658-8.796 10.527-9.39 18.237-.79 10.773 3.114 18.088 4.844 20.756.494.791 1.038 1.434 1.63 2.076-.197 1.334-.246 2.768.05 4.25.643 3.46 2.817 6.277 6.128 8.056 6.524 3.46 15.617 4.942 22.635 1.433 2.52 2.669 7.117 5.239 15.469 5.239h.494c2.125 0 29.109-1.433 36.967-3.36 3.509-.841 5.93-2.324 7.512-3.658 5.04-1.582 18.977-6.326 32.123-14.826 9.291-6.03 12.504-7.315 19.423-8.995 6.72-1.63 10.922-7.759 10.082-14.53z"
      }
    )
  );
}

// src/Icons/TypeScriptIcon.tsx
var import_system6 = require("@raikou/system");
var import_react6 = __toESM(require("react"));
function TypeScriptIcon(_a) {
  var _b = _a, {
    size,
    style
  } = _b, others = __objRest(_b, [
    "size",
    "style"
  ]);
  return /* @__PURE__ */ import_react6.default.createElement(
    "svg",
    __spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 48 48",
      style: __spreadValues({ width: (0, import_system6.rem)(size), height: (0, import_system6.rem)(size) }, style)
    }, others),
    /* @__PURE__ */ import_react6.default.createElement("path", { fill: "#1976d2", d: "M6 6h36v36H6z" }),
    /* @__PURE__ */ import_react6.default.createElement(
      "path",
      {
        fill: "#fff",
        d: "M27.49 22H14.227v3.264h4.757V40h3.769V25.264h4.737zM39.194 26.084s-1.787-1.192-3.807-1.192-2.747.96-2.747 1.986c0 2.648 7.381 2.383 7.381 7.712 0 8.209-11.254 4.568-11.254 4.568V35.22s2.152 1.622 4.733 1.622 2.483-1.688 2.483-1.92c0-2.449-7.315-2.449-7.315-7.878 0-7.381 10.658-4.469 10.658-4.469l-.132 3.509z"
      }
    )
  );
}

// src/Icons/TypeScriptCircleIcon.tsx
var import_system7 = require("@raikou/system");
var import_react7 = __toESM(require("react"));
function TypeScriptCircleIcon(_a) {
  var _b = _a, {
    size,
    style
  } = _b, others = __objRest(_b, [
    "size",
    "style"
  ]);
  return /* @__PURE__ */ import_react7.default.createElement(
    "svg",
    __spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      preserveAspectRatio: "xMidYMid",
      style: __spreadValues({ width: (0, import_system7.rem)(size), height: (0, import_system7.rem)(size) }, style)
    }, others),
    /* @__PURE__ */ import_react7.default.createElement(
      "path",
      {
        fill: "#3178C6",
        d: "M128 0c70.692 0 128 57.308 128 128 0 70.692-57.308 128-128 128C57.308 256 0 198.692 0 128 0 57.308 57.308 0 128 0z"
      }
    ),
    /* @__PURE__ */ import_react7.default.createElement(
      "path",
      {
        fill: "#FFF",
        d: "M140.463 160.712v25.03c4.017 2.086 8.767 3.651 14.25 4.694 5.484 1.043 11.264 1.564 17.34 1.564 5.921 0 11.547-.574 16.876-1.721 5.329-1.147 10.002-3.037 14.018-5.671 4.016-2.633 7.196-6.075 9.539-10.325 2.343-4.25 3.514-9.503 3.514-15.761 0-4.537-.669-8.513-2.008-11.929a27.928 27.928 0 00-5.793-9.112c-2.523-2.66-5.548-5.045-9.075-7.157-3.527-2.112-7.505-4.107-11.933-5.984-3.244-1.356-6.153-2.673-8.728-3.95-2.574-1.278-4.762-2.581-6.565-3.911-1.802-1.33-3.192-2.738-4.17-4.224-.979-1.486-1.468-3.168-1.468-5.045 0-1.721.438-3.272 1.313-4.654.876-1.382 2.111-2.569 3.707-3.56 1.597-.99 3.553-1.76 5.87-2.307 2.317-.547 4.892-.821 7.724-.821 2.06 0 4.235.156 6.526.47 2.292.312 4.596.794 6.913 1.446a47.66 47.66 0 016.758 2.464 37.143 37.143 0 016.063 3.442V80.302c-3.759-1.46-7.865-2.542-12.319-3.246-4.454-.704-9.564-1.056-15.331-1.056-5.87 0-11.431.639-16.683 1.916-5.252 1.278-9.873 3.273-13.864 5.984-3.991 2.712-7.144 6.166-9.461 10.364S140 103.481 140 109.322c0 7.457 2.124 13.818 6.372 19.085 4.248 5.267 10.697 9.726 19.348 13.376a260.147 260.147 0 019.5 4.146c2.934 1.355 5.47 2.763 7.607 4.223 2.137 1.461 3.823 3.051 5.059 4.772 1.236 1.721 1.854 3.676 1.854 5.866a9.06 9.06 0 01-1.159 4.498c-.772 1.382-1.943 2.581-3.514 3.598-1.57 1.017-3.527 1.812-5.87 2.386-2.343.573-5.085.86-8.225.86-5.355 0-10.659-.952-15.911-2.855-5.252-1.903-10.118-4.758-14.598-8.565zm-42.752-62.17H130V78H40v20.541h32.132V190H97.71V98.541z"
      }
    )
  );
}

// src/Icons/CssIcon.tsx
var import_system8 = require("@raikou/system");
var import_react8 = __toESM(require("react"));
function CssIcon(_a) {
  var _b = _a, { size, style } = _b, others = __objRest(_b, ["size", "style"]);
  return /* @__PURE__ */ import_react8.default.createElement(
    "svg",
    __spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 48 48",
      style: __spreadValues({ width: (0, import_system8.rem)(size), height: (0, import_system8.rem)(size) }, style)
    }, others),
    /* @__PURE__ */ import_react8.default.createElement("path", { fill: "#0277BD", d: "M41 5H7l3 34 14 4 14-4 3-34z" }),
    /* @__PURE__ */ import_react8.default.createElement("path", { fill: "#039BE5", d: "M24 8v31.9l11.2-3.2L37.7 8z" }),
    /* @__PURE__ */ import_react8.default.createElement(
      "path",
      {
        fill: "#FFF",
        d: "M33.1 13H24v4h4.9l-.3 4H24v4h4.4l-.3 4.5-4.1 1.4v4.2l7.9-2.6.7-11.5z"
      }
    ),
    /* @__PURE__ */ import_react8.default.createElement(
      "path",
      {
        fill: "#EEE",
        d: "M24 13v4h-8.9l-.3-4H24zm-4.6 8l.2 4H24v-4h-4.6zm.4 6h-4l.3 5.5 7.9 2.6v-4.2l-4.1-1.4-.1-2.5z"
      }
    )
  );
}

// src/Demo/Demo.tsx
var import_react24 = __toESM(require("react"));

// src/CodeDemo/CodeDemo.tsx
var import_react12 = __toESM(require("react"));

// src/DemoArea/DemoArea.tsx
var import_react9 = __toESM(require("react"));
var import_server = require("@raikou/server");
var import_system9 = require("@raikou/system");
function DemoArea({
  withPadding = true,
  centered,
  maxWidth,
  minHeight,
  children,
  dimmed,
  striped
}) {
  return /* @__PURE__ */ import_react9.default.createElement(
    import_server.Box,
    {
      className: "demoArea-demo",
      mod: { "with-padding": withPadding, centered, dimmed, striped },
      __vars: {
        "--demo-flex": maxWidth ? "1" : void 0,
        "--demo-max-width": maxWidth ? (0, import_system9.rem)(maxWidth) : void 0,
        "--demo-min-height": minHeight ? (0, import_system9.rem)(minHeight) : void 0,
        "--demo-margin-y": maxWidth && centered ? "auto" : void 0
      }
    },
    /* @__PURE__ */ import_react9.default.createElement("div", { className: "demoArea-demoInner" }, children)
  );
}

// src/DemoCode/DemoCode.tsx
var import_react10 = __toESM(require("react"));
var import_code_highlight = require("@raikou/code-highlight");
function getFileIcon(fileName) {
  if (fileName.endsWith(".ts") || fileName.endsWith(".tsx")) {
    return /* @__PURE__ */ import_react10.default.createElement(TypeScriptIcon, { size: 18 });
  }
  if (fileName.endsWith(".css")) {
    return /* @__PURE__ */ import_react10.default.createElement(CssIcon, { size: 18 });
  }
  return null;
}
function DemoCode({ code, defaultExpanded = true }) {
  const _code = typeof code === "string" ? { code, fileName: "Demo.tsx", language: "tsx" } : code;
  return /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, _code && /* @__PURE__ */ import_react10.default.createElement(
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
var import_react11 = __toESM(require("react"));
var import_clsx = __toESM(require("clsx"));
function DemoRoot(_a) {
  var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
  return /* @__PURE__ */ import_react11.default.createElement("div", __spreadValues({ className: (0, import_clsx.default)("demoRoot-root", className) }, others));
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
  return /* @__PURE__ */ import_react12.default.createElement(DemoRoot, null, /* @__PURE__ */ import_react12.default.createElement(
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
  ), /* @__PURE__ */ import_react12.default.createElement(DemoCode, { code, defaultExpanded }));
}

// src/ConfiguratorDemo/ConfiguratorDemo.tsx
var import_react22 = __toESM(require("react"));
var import_server4 = require("@raikou/server");

// src/DemoColumns/DemoColumns.tsx
var import_react13 = __toESM(require("react"));
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
  return /* @__PURE__ */ import_react13.default.createElement("div", { className: "demoColumns-columns" }, /* @__PURE__ */ import_react13.default.createElement(
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
  ), /* @__PURE__ */ import_react13.default.createElement("div", { className: "demoColumns-controls" }, title && /* @__PURE__ */ import_react13.default.createElement("div", { className: "demoColumns-header" }, /* @__PURE__ */ import_react13.default.createElement(import_server2.Text, { fw: 500, fz: "sm", mb: 5 }, title), description && /* @__PURE__ */ import_react13.default.createElement(import_server2.Text, { c: "dimmed", fz: 11, lh: 1.45 }, description)), controls));
}

// src/ConfiguratorDemo/controls/ConfiguratorBoolean.control.tsx
var import_react14 = __toESM(require("react"));
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
  return /* @__PURE__ */ import_react14.default.createElement(
    import_client.Switch,
    __spreadValues({
      checked: value,
      onChange: (event) => onChange(event.currentTarget.checked),
      label: getControlLabel(prop)
    }, others)
  );
}

// src/ConfiguratorDemo/controls/ConfiguratorSegmented.control.tsx
var import_react15 = __toESM(require("react"));
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
  return /* @__PURE__ */ import_react15.default.createElement(import_client2.Input.Wrapper, __spreadValues({ labelElement: "div", label: getControlLabel(prop) }, others), /* @__PURE__ */ import_react15.default.createElement(
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
var import_react17 = __toESM(require("react"));
var import_client3 = require("@raikou/client");
var import_server3 = require("@raikou/server");
var import_system11 = require("@raikou/system");

// src/ConfiguratorDemo/controls/ColorWheelIcon.tsx
var import_react16 = __toESM(require("react"));
var import_system10 = require("@raikou/system");
function ColorWheelIcon() {
  return /* @__PURE__ */ import_react16.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 200 200",
      style: { width: (0, import_system10.rem)(18), height: (0, import_system10.rem)(18) }
    },
    /* @__PURE__ */ import_react16.default.createElement(
      "path",
      {
        fill: "#FF5178",
        d: "M100 0a100 100 0 00-50 13.398l30 51.961A40 40 0 01100 60V0z"
      }
    ),
    /* @__PURE__ */ import_react16.default.createElement(
      "path",
      {
        fill: "#FF9259",
        d: "M49.982 13.408a99.999 99.999 0 00-36.595 36.61l51.968 29.99a40 40 0 0114.638-14.645l-30.01-51.955z"
      }
    ),
    /* @__PURE__ */ import_react16.default.createElement(
      "path",
      {
        fill: "#FFD23B",
        d: "M13.386 50.02A100 100 0 000 100.025l60-.014a40 40 0 015.354-20.002L13.386 50.021z"
      }
    ),
    /* @__PURE__ */ import_react16.default.createElement(
      "path",
      {
        fill: "#89C247",
        d: "M0 100a99.999 99.999 0 0013.398 50l51.961-30A40.001 40.001 0 0160 100H0z"
      }
    ),
    /* @__PURE__ */ import_react16.default.createElement(
      "path",
      {
        fill: "#49B296",
        d: "M13.39 149.989a100.001 100.001 0 0036.599 36.607l30.006-51.958a39.99 39.99 0 01-14.639-14.643l-51.965 29.994z"
      }
    ),
    /* @__PURE__ */ import_react16.default.createElement(
      "path",
      {
        fill: "#2897B1",
        d: "M49.989 186.596A99.995 99.995 0 0099.987 200l.008-60a39.996 39.996 0 01-20-5.362l-30.007 51.958z"
      }
    ),
    /* @__PURE__ */ import_react16.default.createElement(
      "path",
      {
        fill: "#3EC3FF",
        d: "M100 200c17.554 0 34.798-4.621 50-13.397l-30-51.962A40 40 0 01100 140v60z"
      }
    ),
    /* @__PURE__ */ import_react16.default.createElement(
      "path",
      {
        fill: "#09A1E5",
        d: "M150.003 186.601a100.001 100.001 0 0036.601-36.604l-51.962-29.998a40 40 0 01-14.641 14.641l30.002 51.961z"
      }
    ),
    /* @__PURE__ */ import_react16.default.createElement(
      "path",
      {
        fill: "#077CCC",
        d: "M186.607 149.992A99.993 99.993 0 00200 99.99l-60 .006a39.998 39.998 0 01-5.357 20.001l51.964 29.995z"
      }
    ),
    /* @__PURE__ */ import_react16.default.createElement(
      "path",
      {
        fill: "#622876",
        d: "M200 100c0-17.554-4.621-34.798-13.397-50l-51.962 30A39.997 39.997 0 01140 100h60z"
      }
    ),
    /* @__PURE__ */ import_react16.default.createElement(
      "path",
      {
        fill: "#962B7C",
        d: "M186.597 49.99a99.994 99.994 0 00-36.606-36.598l-29.995 51.965a40 40 0 0114.643 14.64l51.958-30.006z"
      }
    ),
    /* @__PURE__ */ import_react16.default.createElement(
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
  const [colorPickerColor, setColorPickerColor] = (0, import_react17.useState)("#fff");
  const handleColorPickerChange = (color) => {
    setColorPickerColor(color);
    onChange(color);
  };
  const colors = Object.keys(import_system11.DEFAULT_THEME.colors).filter((color) => color !== "dark").map((color) => /* @__PURE__ */ import_react17.default.createElement(
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
    value === color && /* @__PURE__ */ import_react17.default.createElement(import_client3.CheckIcon, { className: "configColor-check" })
  ));
  return /* @__PURE__ */ import_react17.default.createElement(import_client3.Input.Wrapper, __spreadValues({ labelElement: "div", label: getControlLabel(prop) }, others), /* @__PURE__ */ import_react17.default.createElement(import_server3.Group, { gap: 2, mt: 2, wrap: "wrap" }, colors, /* @__PURE__ */ import_react17.default.createElement(import_client3.Popover, { radius: "md", position: "bottom-end", shadow: "md" }, /* @__PURE__ */ import_react17.default.createElement(import_client3.Popover.Target, null, /* @__PURE__ */ import_react17.default.createElement(
    import_server3.UnstyledButton,
    {
      className: "configColor-colorControl",
      "aria-label": "Pick color"
    },
    /* @__PURE__ */ import_react17.default.createElement(ColorWheelIcon, null)
  )), /* @__PURE__ */ import_react17.default.createElement(import_client3.Popover.Dropdown, { p: 8 }, /* @__PURE__ */ import_react17.default.createElement(
    import_client3.ColorPicker,
    {
      value: colorPickerColor,
      onChange: handleColorPickerChange,
      format: "rgba"
    }
  )))));
}

// src/ConfiguratorDemo/controls/ConfiguratorString.control.tsx
var import_react18 = __toESM(require("react"));
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
  return /* @__PURE__ */ import_react18.default.createElement(
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
var import_react19 = __toESM(require("react"));
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
  return /* @__PURE__ */ import_react19.default.createElement(
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
var import_react20 = __toESM(require("react"));
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
  return /* @__PURE__ */ import_react20.default.createElement(import_client6.Input.Wrapper, __spreadValues({ labelElement: "div", label: getControlLabel(prop) }, others), /* @__PURE__ */ import_react20.default.createElement(
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
var import_react21 = __toESM(require("react"));
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
  return /* @__PURE__ */ import_react21.default.createElement(import_client7.Input.Wrapper, __spreadValues({ labelElement: "div", label: getControlLabel(prop) }, others), /* @__PURE__ */ import_react21.default.createElement(
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
  const [state, setState] = (0, import_react22.useState)(initialState);
  const setStateField = (field, value) => setState((current) => __spreadProps(__spreadValues({}, current), { [field]: value }));
  const items = controls.map((control) => {
    const ControlComponent = ControlComponents[control.type];
    const _a = control, { initialValue, libraryValue } = _a, rest = __objRest(_a, ["initialValue", "libraryValue"]);
    return /* @__PURE__ */ import_react22.default.createElement(
      ControlComponent,
      __spreadValues({
        key: control.prop,
        value: state[control.prop],
        onChange: (value) => setStateField(control.prop, value)
      }, rest)
    );
  });
  return /* @__PURE__ */ import_react22.default.createElement(DemoRoot, null, /* @__PURE__ */ import_react22.default.createElement(
    DemoColumns,
    {
      controls: /* @__PURE__ */ import_react22.default.createElement(import_server4.Stack, { className: "configDemo-controls", gap: "sm" }, items),
      centered,
      withPadding,
      maxWidth,
      minHeight,
      dimmed,
      striped
    },
    import_react22.default.cloneElement(children, state)
  ), /* @__PURE__ */ import_react22.default.createElement(
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
var import_react23 = __toESM(require("react"));
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
  const [hovered, setHovered] = import_react23.default.useState(null);
  const selectors = Object.keys(data.selectors);
  const controls = selectors.map((selector) => /* @__PURE__ */ import_react23.default.createElement(
    import_server5.UnstyledButton,
    {
      className: "stylesApiDemo-selector",
      key: selector,
      onMouseEnter: () => setHovered(selector),
      onMouseLeave: () => setHovered(null)
    },
    /* @__PURE__ */ import_react23.default.createElement(import_server5.Text, { mb: 2 }, selector),
    /* @__PURE__ */ import_react23.default.createElement(import_server5.Text, { fz: 11, c: "dimmed" }, data.selectors[selector])
  ));
  const classNamesProp = hovered ? ` classNames={{ ${hovered}: classes.${hovered} }}` : "";
  return /* @__PURE__ */ import_react23.default.createElement(import_react23.default.Fragment, null, /* @__PURE__ */ import_react23.default.createElement("style", { dangerouslySetInnerHTML: { __html: getCss(hovered) } }), /* @__PURE__ */ import_react23.default.createElement(DemoRoot, null, /* @__PURE__ */ import_react23.default.createElement(
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
    import_react23.default.cloneElement(children, {
      classNames: selectors.reduce(
        (acc, item) => {
          acc[item] = item;
          return acc;
        },
        {}
      )
    })
  ), /* @__PURE__ */ import_react23.default.createElement(
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
      return /* @__PURE__ */ import_react24.default.createElement(CodeDemo, __spreadValues({}, data), /* @__PURE__ */ import_react24.default.createElement(Component, null));
    case "configurator":
      return /* @__PURE__ */ import_react24.default.createElement(ConfiguratorDemo, __spreadValues({}, data), /* @__PURE__ */ import_react24.default.createElement(Component, null));
    case "styles-api":
      return /* @__PURE__ */ import_react24.default.createElement(StylesApiDemo, __spreadValues({}, data), /* @__PURE__ */ import_react24.default.createElement(Component, null));
    default:
      return null;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CssIcon,
  Demo,
  DiscordIcon,
  GithubIcon,
  NpmIcon,
  TwitterIcon,
  TypeScriptCircleIcon,
  TypeScriptIcon,
  YarnIcon,
  getCodeFileIcon,
  meta
});
