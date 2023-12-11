import {
  __async,
  __commonJS,
  __objRest,
  __privateAdd,
  __privateGet,
  __privateSet,
  __privateWrapper,
  __publicField,
  __require,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-TOPM6CMB.mjs";

// ../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js
var require_ms = __commonJS({
  "../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js"(exports, module) {
    "use strict";
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module.exports = function(val, options2) {
      options2 = options2 || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options2.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// ../../../node_modules/.pnpm/debug@4.3.4_supports-color@8.1.1/node_modules/debug/src/common.js
var require_common = __commonJS({
  "../../../node_modules/.pnpm/debug@4.3.4_supports-color@8.1.1/node_modules/debug/src/common.js"(exports, module) {
    "use strict";
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled2;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug3(...args) {
          if (!debug3.enabled) {
            return;
          }
          const self2 = debug3;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self2.diff = ms;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self2, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args);
        }
        debug3.namespace = namespace;
        debug3.useColors = createDebug.useColors();
        debug3.color = createDebug.selectColor(namespace);
        debug3.extend = extend;
        debug3.destroy = createDebug.destroy;
        Object.defineProperty(debug3, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug3);
        }
        return debug3;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled2(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module.exports = setup;
  }
});

// ../../../node_modules/.pnpm/debug@4.3.4_supports-color@8.1.1/node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "../../../node_modules/.pnpm/debug@4.3.4_supports-color@8.1.1/node_modules/debug/src/browser.js"(exports, module) {
    "use strict";
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = (() => {
      let warned2 = false;
      return () => {
        if (!warned2) {
          warned2 = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module.exports = require_common()(exports);
    var { formatters } = module.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// ../../../node_modules/.pnpm/has-flag@4.0.0/node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "../../../node_modules/.pnpm/has-flag@4.0.0/node_modules/has-flag/index.js"(exports, module) {
    "use strict";
    module.exports = (flag, argv = process.argv) => {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv.indexOf(prefix + flag);
      const terminatorPosition = argv.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    };
  }
});

// ../../../node_modules/.pnpm/supports-color@8.1.1/node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "../../../node_modules/.pnpm/supports-color@8.1.1/node_modules/supports-color/index.js"(exports, module) {
    "use strict";
    var os = __require("os");
    var tty = __require("tty");
    var hasFlag = require_has_flag();
    var { env } = process;
    var flagForceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      flagForceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      flagForceColor = 1;
    }
    function envForceColor() {
      if ("FORCE_COLOR" in env) {
        if (env.FORCE_COLOR === "true") {
          return 1;
        }
        if (env.FORCE_COLOR === "false") {
          return 0;
        }
        return env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(haveStream, { streamIsTTY, sniffFlags = true } = {}) {
      const noFlagForceColor = envForceColor();
      if (noFlagForceColor !== void 0) {
        flagForceColor = noFlagForceColor;
      }
      const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;
      if (forceColor === 0) {
        return 0;
      }
      if (sniffFlags) {
        if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
          return 3;
        }
        if (hasFlag("color=256")) {
          return 2;
        }
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env.TERM === "dumb") {
        return min;
      }
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE", "DRONE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version = Number.parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      return min;
    }
    function getSupportLevel(stream, options2 = {}) {
      const level = supportsColor(stream, __spreadValues({
        streamIsTTY: stream && stream.isTTY
      }, options2));
      return translateLevel(level);
    }
    module.exports = {
      supportsColor: getSupportLevel,
      stdout: getSupportLevel({ isTTY: tty.isatty(1) }),
      stderr: getSupportLevel({ isTTY: tty.isatty(2) })
    };
  }
});

// ../../../node_modules/.pnpm/debug@4.3.4_supports-color@8.1.1/node_modules/debug/src/node.js
var require_node = __commonJS({
  "../../../node_modules/.pnpm/debug@4.3.4_supports-color@8.1.1/node_modules/debug/src/node.js"(exports, module) {
    "use strict";
    var tty = __require("tty");
    var util = __require("util");
    exports.init = init;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.destroy = util.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
    exports.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = require_supports_color();
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error) {
    }
    exports.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} \x1B[0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module.exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    function getDate() {
      if (exports.inspectOpts.hideDate) {
        return "";
      }
      return (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function log(...args) {
      return process.stderr.write(util.format(...args) + "\n");
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function init(debug3) {
      debug3.inspectOpts = {};
      const keys = Object.keys(exports.inspectOpts);
      for (let i = 0; i < keys.length; i++) {
        debug3.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    module.exports = require_common()(exports);
    var { formatters } = module.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
  }
});

// ../../../node_modules/.pnpm/debug@4.3.4_supports-color@8.1.1/node_modules/debug/src/index.js
var require_src = __commonJS({
  "../../../node_modules/.pnpm/debug@4.3.4_supports-color@8.1.1/node_modules/debug/src/index.js"(exports, module) {
    "use strict";
    if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
      module.exports = require_browser();
    } else {
      module.exports = require_node();
    }
  }
});

// ../../../node_modules/.pnpm/yocto-queue@0.1.0/node_modules/yocto-queue/index.js
var require_yocto_queue = __commonJS({
  "../../../node_modules/.pnpm/yocto-queue@0.1.0/node_modules/yocto-queue/index.js"(exports, module) {
    "use strict";
    var Node2 = class {
      /// value;
      /// next;
      constructor(value) {
        this.value = value;
        this.next = void 0;
      }
    };
    var Queue2 = class {
      // TODO: Use private class fields when targeting Node.js 12.
      // #_head;
      // #_tail;
      // #_size;
      constructor() {
        this.clear();
      }
      enqueue(value) {
        const node = new Node2(value);
        if (this._head) {
          this._tail.next = node;
          this._tail = node;
        } else {
          this._head = node;
          this._tail = node;
        }
        this._size++;
      }
      dequeue() {
        const current = this._head;
        if (!current) {
          return;
        }
        this._head = this._head.next;
        this._size--;
        return current.value;
      }
      clear() {
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
      }
      get size() {
        return this._size;
      }
      *[Symbol.iterator]() {
        let current = this._head;
        while (current) {
          yield current.value;
          current = current.next;
        }
      }
    };
    module.exports = Queue2;
  }
});

// ../../../node_modules/.pnpm/p-limit@3.1.0/node_modules/p-limit/index.js
var require_p_limit = __commonJS({
  "../../../node_modules/.pnpm/p-limit@3.1.0/node_modules/p-limit/index.js"(exports, module) {
    "use strict";
    var Queue2 = require_yocto_queue();
    var pLimit = (concurrency) => {
      if (!((Number.isInteger(concurrency) || concurrency === Infinity) && concurrency > 0)) {
        throw new TypeError("Expected `concurrency` to be a number from 1 and up");
      }
      const queue = new Queue2();
      let activeCount = 0;
      const next = () => {
        activeCount--;
        if (queue.size > 0) {
          queue.dequeue()();
        }
      };
      const run = (fn, resolve, ...args) => __async(exports, null, function* () {
        activeCount++;
        const result = (() => __async(exports, null, function* () {
          return fn(...args);
        }))();
        resolve(result);
        try {
          yield result;
        } catch (e) {
        }
        next();
      });
      const enqueue = (fn, resolve, ...args) => {
        queue.enqueue(run.bind(null, fn, resolve, ...args));
        (() => __async(exports, null, function* () {
          yield Promise.resolve();
          if (activeCount < concurrency && queue.size > 0) {
            queue.dequeue()();
          }
        }))();
      };
      const generator = (fn, ...args) => new Promise((resolve) => {
        enqueue(fn, resolve, ...args);
      });
      Object.defineProperties(generator, {
        activeCount: {
          get: () => activeCount
        },
        pendingCount: {
          get: () => queue.size
        },
        clearQueue: {
          value: () => {
            queue.clear();
          }
        }
      });
      return generator;
    };
    module.exports = pLimit;
  }
});

// ../../../node_modules/.pnpm/p-locate@5.0.0/node_modules/p-locate/index.js
var require_p_locate = __commonJS({
  "../../../node_modules/.pnpm/p-locate@5.0.0/node_modules/p-locate/index.js"(exports, module) {
    "use strict";
    var pLimit = require_p_limit();
    var EndError = class extends Error {
      constructor(value) {
        super();
        this.value = value;
      }
    };
    var testElement = (element, tester) => __async(exports, null, function* () {
      return tester(yield element);
    });
    var finder = (element) => __async(exports, null, function* () {
      const values = yield Promise.all(element);
      if (values[1] === true) {
        throw new EndError(values[0]);
      }
      return false;
    });
    var pLocate = (iterable, tester, options2) => __async(exports, null, function* () {
      options2 = __spreadValues({
        concurrency: Infinity,
        preserveOrder: true
      }, options2);
      const limit = pLimit(options2.concurrency);
      const items = [...iterable].map((element) => [element, limit(testElement, element, tester)]);
      const checkLimit = pLimit(options2.preserveOrder ? 1 : Infinity);
      try {
        yield Promise.all(items.map((element) => checkLimit(finder, element)));
      } catch (error) {
        if (error instanceof EndError) {
          return error.value;
        }
        throw error;
      }
    });
    module.exports = pLocate;
  }
});

// ../../../node_modules/.pnpm/locate-path@6.0.0/node_modules/locate-path/index.js
var require_locate_path = __commonJS({
  "../../../node_modules/.pnpm/locate-path@6.0.0/node_modules/locate-path/index.js"(exports, module) {
    "use strict";
    var path2 = __require("path");
    var fs2 = __require("fs");
    var { promisify } = __require("util");
    var pLocate = require_p_locate();
    var fsStat = promisify(fs2.stat);
    var fsLStat = promisify(fs2.lstat);
    var typeMappings = {
      directory: "isDirectory",
      file: "isFile"
    };
    function checkType({ type }) {
      if (type in typeMappings) {
        return;
      }
      throw new Error(`Invalid type specified: ${type}`);
    }
    var matchType = (type, stat) => type === void 0 || stat[typeMappings[type]]();
    module.exports = (paths, options2) => __async(exports, null, function* () {
      options2 = __spreadValues({
        cwd: process.cwd(),
        type: "file",
        allowSymlinks: true
      }, options2);
      checkType(options2);
      const statFn = options2.allowSymlinks ? fsStat : fsLStat;
      return pLocate(paths, (path_) => __async(exports, null, function* () {
        try {
          const stat = yield statFn(path2.resolve(options2.cwd, path_));
          return matchType(options2.type, stat);
        } catch (e) {
          return false;
        }
      }), options2);
    });
    module.exports.sync = (paths, options2) => {
      options2 = __spreadValues({
        cwd: process.cwd(),
        allowSymlinks: true,
        type: "file"
      }, options2);
      checkType(options2);
      const statFn = options2.allowSymlinks ? fs2.statSync : fs2.lstatSync;
      for (const path_ of paths) {
        try {
          const stat = statFn(path2.resolve(options2.cwd, path_));
          if (matchType(options2.type, stat)) {
            return path_;
          }
        } catch (e) {
        }
      }
    };
  }
});

// ../../../node_modules/.pnpm/path-exists@4.0.0/node_modules/path-exists/index.js
var require_path_exists = __commonJS({
  "../../../node_modules/.pnpm/path-exists@4.0.0/node_modules/path-exists/index.js"(exports, module) {
    "use strict";
    var fs2 = __require("fs");
    var { promisify } = __require("util");
    var pAccess = promisify(fs2.access);
    module.exports = (path2) => __async(exports, null, function* () {
      try {
        yield pAccess(path2);
        return true;
      } catch (_) {
        return false;
      }
    });
    module.exports.sync = (path2) => {
      try {
        fs2.accessSync(path2);
        return true;
      } catch (_) {
        return false;
      }
    };
  }
});

// ../../../node_modules/.pnpm/find-up@5.0.0/node_modules/find-up/index.js
var require_find_up = __commonJS({
  "../../../node_modules/.pnpm/find-up@5.0.0/node_modules/find-up/index.js"(exports, module) {
    "use strict";
    var path2 = __require("path");
    var locatePath = require_locate_path();
    var pathExists = require_path_exists();
    var stop = Symbol("findUp.stop");
    module.exports = (_0, ..._1) => __async(exports, [_0, ..._1], function* (name, options2 = {}) {
      let directory = path2.resolve(options2.cwd || "");
      const { root } = path2.parse(directory);
      const paths = [].concat(name);
      const runMatcher = (locateOptions) => __async(exports, null, function* () {
        if (typeof name !== "function") {
          return locatePath(paths, locateOptions);
        }
        const foundPath = yield name(locateOptions.cwd);
        if (typeof foundPath === "string") {
          return locatePath([foundPath], locateOptions);
        }
        return foundPath;
      });
      while (true) {
        const foundPath = yield runMatcher(__spreadProps(__spreadValues({}, options2), { cwd: directory }));
        if (foundPath === stop) {
          return;
        }
        if (foundPath) {
          return path2.resolve(directory, foundPath);
        }
        if (directory === root) {
          return;
        }
        directory = path2.dirname(directory);
      }
    });
    module.exports.sync = (name, options2 = {}) => {
      let directory = path2.resolve(options2.cwd || "");
      const { root } = path2.parse(directory);
      const paths = [].concat(name);
      const runMatcher = (locateOptions) => {
        if (typeof name !== "function") {
          return locatePath.sync(paths, locateOptions);
        }
        const foundPath = name(locateOptions.cwd);
        if (typeof foundPath === "string") {
          return locatePath.sync([foundPath], locateOptions);
        }
        return foundPath;
      };
      while (true) {
        const foundPath = runMatcher(__spreadProps(__spreadValues({}, options2), { cwd: directory }));
        if (foundPath === stop) {
          return;
        }
        if (foundPath) {
          return path2.resolve(directory, foundPath);
        }
        if (directory === root) {
          return;
        }
        directory = path2.dirname(directory);
      }
    };
    module.exports.exists = pathExists;
    module.exports.sync.exists = pathExists.sync;
    module.exports.stop = stop;
  }
});

// ../../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/windows.js
var require_windows = __commonJS({
  "../../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/windows.js"(exports, module) {
    "use strict";
    module.exports = isexe;
    isexe.sync = sync;
    var fs2 = __require("fs");
    function checkPathExt(path2, options2) {
      var pathext = options2.pathExt !== void 0 ? options2.pathExt : process.env.PATHEXT;
      if (!pathext) {
        return true;
      }
      pathext = pathext.split(";");
      if (pathext.indexOf("") !== -1) {
        return true;
      }
      for (var i = 0; i < pathext.length; i++) {
        var p = pathext[i].toLowerCase();
        if (p && path2.substr(-p.length).toLowerCase() === p) {
          return true;
        }
      }
      return false;
    }
    function checkStat(stat, path2, options2) {
      if (!stat.isSymbolicLink() && !stat.isFile()) {
        return false;
      }
      return checkPathExt(path2, options2);
    }
    function isexe(path2, options2, cb) {
      fs2.stat(path2, function(er, stat) {
        cb(er, er ? false : checkStat(stat, path2, options2));
      });
    }
    function sync(path2, options2) {
      return checkStat(fs2.statSync(path2), path2, options2);
    }
  }
});

// ../../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/mode.js
var require_mode = __commonJS({
  "../../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/mode.js"(exports, module) {
    "use strict";
    module.exports = isexe;
    isexe.sync = sync;
    var fs2 = __require("fs");
    function isexe(path2, options2, cb) {
      fs2.stat(path2, function(er, stat) {
        cb(er, er ? false : checkStat(stat, options2));
      });
    }
    function sync(path2, options2) {
      return checkStat(fs2.statSync(path2), options2);
    }
    function checkStat(stat, options2) {
      return stat.isFile() && checkMode(stat, options2);
    }
    function checkMode(stat, options2) {
      var mod = stat.mode;
      var uid = stat.uid;
      var gid = stat.gid;
      var myUid = options2.uid !== void 0 ? options2.uid : process.getuid && process.getuid();
      var myGid = options2.gid !== void 0 ? options2.gid : process.getgid && process.getgid();
      var u = parseInt("100", 8);
      var g = parseInt("010", 8);
      var o = parseInt("001", 8);
      var ug = u | g;
      var ret = mod & o || mod & g && gid === myGid || mod & u && uid === myUid || mod & ug && myUid === 0;
      return ret;
    }
  }
});

// ../../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/index.js
var require_isexe = __commonJS({
  "../../../node_modules/.pnpm/isexe@2.0.0/node_modules/isexe/index.js"(exports, module) {
    "use strict";
    var fs2 = __require("fs");
    var core;
    if (process.platform === "win32" || global.TESTING_WINDOWS) {
      core = require_windows();
    } else {
      core = require_mode();
    }
    module.exports = isexe;
    isexe.sync = sync;
    function isexe(path2, options2, cb) {
      if (typeof options2 === "function") {
        cb = options2;
        options2 = {};
      }
      if (!cb) {
        if (typeof Promise !== "function") {
          throw new TypeError("callback not provided");
        }
        return new Promise(function(resolve, reject) {
          isexe(path2, options2 || {}, function(er, is) {
            if (er) {
              reject(er);
            } else {
              resolve(is);
            }
          });
        });
      }
      core(path2, options2 || {}, function(er, is) {
        if (er) {
          if (er.code === "EACCES" || options2 && options2.ignoreErrors) {
            er = null;
            is = false;
          }
        }
        cb(er, is);
      });
    }
    function sync(path2, options2) {
      try {
        return core.sync(path2, options2 || {});
      } catch (er) {
        if (options2 && options2.ignoreErrors || er.code === "EACCES") {
          return false;
        } else {
          throw er;
        }
      }
    }
  }
});

// ../../../node_modules/.pnpm/which@2.0.2/node_modules/which/which.js
var require_which = __commonJS({
  "../../../node_modules/.pnpm/which@2.0.2/node_modules/which/which.js"(exports, module) {
    "use strict";
    var isWindows = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";
    var path2 = __require("path");
    var COLON = isWindows ? ";" : ":";
    var isexe = require_isexe();
    var getNotFoundError = (cmd) => Object.assign(new Error(`not found: ${cmd}`), { code: "ENOENT" });
    var getPathInfo = (cmd, opt) => {
      const colon = opt.colon || COLON;
      const pathEnv = cmd.match(/\//) || isWindows && cmd.match(/\\/) ? [""] : [
        // windows always checks the cwd first
        ...isWindows ? [process.cwd()] : [],
        ...(opt.path || process.env.PATH || /* istanbul ignore next: very unusual */
        "").split(colon)
      ];
      const pathExtExe = isWindows ? opt.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "";
      const pathExt = isWindows ? pathExtExe.split(colon) : [""];
      if (isWindows) {
        if (cmd.indexOf(".") !== -1 && pathExt[0] !== "")
          pathExt.unshift("");
      }
      return {
        pathEnv,
        pathExt,
        pathExtExe
      };
    };
    var which = (cmd, opt, cb) => {
      if (typeof opt === "function") {
        cb = opt;
        opt = {};
      }
      if (!opt)
        opt = {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      const step = (i) => new Promise((resolve, reject) => {
        if (i === pathEnv.length)
          return opt.all && found.length ? resolve(found) : reject(getNotFoundError(cmd));
        const ppRaw = pathEnv[i];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path2.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        resolve(subStep(p, i, 0));
      });
      const subStep = (p, i, ii) => new Promise((resolve, reject) => {
        if (ii === pathExt.length)
          return resolve(step(i + 1));
        const ext = pathExt[ii];
        isexe(p + ext, { pathExt: pathExtExe }, (er, is) => {
          if (!er && is) {
            if (opt.all)
              found.push(p + ext);
            else
              return resolve(p + ext);
          }
          return resolve(subStep(p, i, ii + 1));
        });
      });
      return cb ? step(0).then((res) => cb(null, res), cb) : step(0);
    };
    var whichSync = (cmd, opt) => {
      opt = opt || {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      for (let i = 0; i < pathEnv.length; i++) {
        const ppRaw = pathEnv[i];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path2.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        for (let j = 0; j < pathExt.length; j++) {
          const cur = p + pathExt[j];
          try {
            const is = isexe.sync(cur, { pathExt: pathExtExe });
            if (is) {
              if (opt.all)
                found.push(cur);
              else
                return cur;
            }
          } catch (ex) {
          }
        }
      }
      if (opt.all && found.length)
        return found;
      if (opt.nothrow)
        return null;
      throw getNotFoundError(cmd);
    };
    module.exports = which;
    which.sync = whichSync;
  }
});

// ../../../node_modules/.pnpm/path-key@3.1.1/node_modules/path-key/index.js
var require_path_key = __commonJS({
  "../../../node_modules/.pnpm/path-key@3.1.1/node_modules/path-key/index.js"(exports, module) {
    "use strict";
    var pathKey = (options2 = {}) => {
      const environment = options2.env || process.env;
      const platform = options2.platform || process.platform;
      if (platform !== "win32") {
        return "PATH";
      }
      return Object.keys(environment).reverse().find((key) => key.toUpperCase() === "PATH") || "Path";
    };
    module.exports = pathKey;
    module.exports.default = pathKey;
  }
});

// ../../../node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/util/resolveCommand.js
var require_resolveCommand = __commonJS({
  "../../../node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/util/resolveCommand.js"(exports, module) {
    "use strict";
    var path2 = __require("path");
    var which = require_which();
    var getPathKey = require_path_key();
    function resolveCommandAttempt(parsed, withoutPathExt) {
      const env = parsed.options.env || process.env;
      const cwd = process.cwd();
      const hasCustomCwd = parsed.options.cwd != null;
      const shouldSwitchCwd = hasCustomCwd && process.chdir !== void 0 && !process.chdir.disabled;
      if (shouldSwitchCwd) {
        try {
          process.chdir(parsed.options.cwd);
        } catch (err) {
        }
      }
      let resolved;
      try {
        resolved = which.sync(parsed.command, {
          path: env[getPathKey({ env })],
          pathExt: withoutPathExt ? path2.delimiter : void 0
        });
      } catch (e) {
      } finally {
        if (shouldSwitchCwd) {
          process.chdir(cwd);
        }
      }
      if (resolved) {
        resolved = path2.resolve(hasCustomCwd ? parsed.options.cwd : "", resolved);
      }
      return resolved;
    }
    function resolveCommand(parsed) {
      return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);
    }
    module.exports = resolveCommand;
  }
});

// ../../../node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/util/escape.js
var require_escape = __commonJS({
  "../../../node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/util/escape.js"(exports, module) {
    "use strict";
    var metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;
    function escapeCommand(arg) {
      arg = arg.replace(metaCharsRegExp, "^$1");
      return arg;
    }
    function escapeArgument(arg, doubleEscapeMetaChars) {
      arg = `${arg}`;
      arg = arg.replace(/(\\*)"/g, '$1$1\\"');
      arg = arg.replace(/(\\*)$/, "$1$1");
      arg = `"${arg}"`;
      arg = arg.replace(metaCharsRegExp, "^$1");
      if (doubleEscapeMetaChars) {
        arg = arg.replace(metaCharsRegExp, "^$1");
      }
      return arg;
    }
    module.exports.command = escapeCommand;
    module.exports.argument = escapeArgument;
  }
});

// ../../../node_modules/.pnpm/shebang-regex@3.0.0/node_modules/shebang-regex/index.js
var require_shebang_regex = __commonJS({
  "../../../node_modules/.pnpm/shebang-regex@3.0.0/node_modules/shebang-regex/index.js"(exports, module) {
    "use strict";
    module.exports = /^#!(.*)/;
  }
});

// ../../../node_modules/.pnpm/shebang-command@2.0.0/node_modules/shebang-command/index.js
var require_shebang_command = __commonJS({
  "../../../node_modules/.pnpm/shebang-command@2.0.0/node_modules/shebang-command/index.js"(exports, module) {
    "use strict";
    var shebangRegex = require_shebang_regex();
    module.exports = (string = "") => {
      const match = string.match(shebangRegex);
      if (!match) {
        return null;
      }
      const [path2, argument] = match[0].replace(/#! ?/, "").split(" ");
      const binary = path2.split("/").pop();
      if (binary === "env") {
        return argument;
      }
      return argument ? `${binary} ${argument}` : binary;
    };
  }
});

// ../../../node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/util/readShebang.js
var require_readShebang = __commonJS({
  "../../../node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/util/readShebang.js"(exports, module) {
    "use strict";
    var fs2 = __require("fs");
    var shebangCommand = require_shebang_command();
    function readShebang(command) {
      const size = 150;
      const buffer = Buffer.alloc(size);
      let fd;
      try {
        fd = fs2.openSync(command, "r");
        fs2.readSync(fd, buffer, 0, size, 0);
        fs2.closeSync(fd);
      } catch (e) {
      }
      return shebangCommand(buffer.toString());
    }
    module.exports = readShebang;
  }
});

// ../../../node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/parse.js
var require_parse = __commonJS({
  "../../../node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/parse.js"(exports, module) {
    "use strict";
    var path2 = __require("path");
    var resolveCommand = require_resolveCommand();
    var escape = require_escape();
    var readShebang = require_readShebang();
    var isWin = process.platform === "win32";
    var isExecutableRegExp = /\.(?:com|exe)$/i;
    var isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
    function detectShebang(parsed) {
      parsed.file = resolveCommand(parsed);
      const shebang = parsed.file && readShebang(parsed.file);
      if (shebang) {
        parsed.args.unshift(parsed.file);
        parsed.command = shebang;
        return resolveCommand(parsed);
      }
      return parsed.file;
    }
    function parseNonShell(parsed) {
      if (!isWin) {
        return parsed;
      }
      const commandFile = detectShebang(parsed);
      const needsShell = !isExecutableRegExp.test(commandFile);
      if (parsed.options.forceShell || needsShell) {
        const needsDoubleEscapeMetaChars = isCmdShimRegExp.test(commandFile);
        parsed.command = path2.normalize(parsed.command);
        parsed.command = escape.command(parsed.command);
        parsed.args = parsed.args.map((arg) => escape.argument(arg, needsDoubleEscapeMetaChars));
        const shellCommand = [parsed.command].concat(parsed.args).join(" ");
        parsed.args = ["/d", "/s", "/c", `"${shellCommand}"`];
        parsed.command = process.env.comspec || "cmd.exe";
        parsed.options.windowsVerbatimArguments = true;
      }
      return parsed;
    }
    function parse(command, args, options2) {
      if (args && !Array.isArray(args)) {
        options2 = args;
        args = null;
      }
      args = args ? args.slice(0) : [];
      options2 = Object.assign({}, options2);
      const parsed = {
        command,
        args,
        options: options2,
        file: void 0,
        original: {
          command,
          args
        }
      };
      return options2.shell ? parsed : parseNonShell(parsed);
    }
    module.exports = parse;
  }
});

// ../../../node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/enoent.js
var require_enoent = __commonJS({
  "../../../node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/lib/enoent.js"(exports, module) {
    "use strict";
    var isWin = process.platform === "win32";
    function notFoundError(original, syscall) {
      return Object.assign(new Error(`${syscall} ${original.command} ENOENT`), {
        code: "ENOENT",
        errno: "ENOENT",
        syscall: `${syscall} ${original.command}`,
        path: original.command,
        spawnargs: original.args
      });
    }
    function hookChildProcess(cp, parsed) {
      if (!isWin) {
        return;
      }
      const originalEmit = cp.emit;
      cp.emit = function(name, arg1) {
        if (name === "exit") {
          const err = verifyENOENT(arg1, parsed, "spawn");
          if (err) {
            return originalEmit.call(cp, "error", err);
          }
        }
        return originalEmit.apply(cp, arguments);
      };
    }
    function verifyENOENT(status, parsed) {
      if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, "spawn");
      }
      return null;
    }
    function verifyENOENTSync(status, parsed) {
      if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, "spawnSync");
      }
      return null;
    }
    module.exports = {
      hookChildProcess,
      verifyENOENT,
      verifyENOENTSync,
      notFoundError
    };
  }
});

// ../../../node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/index.js
var require_cross_spawn = __commonJS({
  "../../../node_modules/.pnpm/cross-spawn@7.0.3/node_modules/cross-spawn/index.js"(exports, module) {
    "use strict";
    var cp = __require("child_process");
    var parse = require_parse();
    var enoent = require_enoent();
    function spawn(command, args, options2) {
      const parsed = parse(command, args, options2);
      const spawned = cp.spawn(parsed.command, parsed.args, parsed.options);
      enoent.hookChildProcess(spawned, parsed);
      return spawned;
    }
    function spawnSync(command, args, options2) {
      const parsed = parse(command, args, options2);
      const result = cp.spawnSync(parsed.command, parsed.args, parsed.options);
      result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);
      return result;
    }
    module.exports = spawn;
    module.exports.spawn = spawn;
    module.exports.sync = spawnSync;
    module.exports._parse = parse;
    module.exports._enoent = enoent;
  }
});

// ../../../node_modules/.pnpm/strip-final-newline@2.0.0/node_modules/strip-final-newline/index.js
var require_strip_final_newline = __commonJS({
  "../../../node_modules/.pnpm/strip-final-newline@2.0.0/node_modules/strip-final-newline/index.js"(exports, module) {
    "use strict";
    module.exports = (input) => {
      const LF = typeof input === "string" ? "\n" : "\n".charCodeAt();
      const CR = typeof input === "string" ? "\r" : "\r".charCodeAt();
      if (input[input.length - 1] === LF) {
        input = input.slice(0, input.length - 1);
      }
      if (input[input.length - 1] === CR) {
        input = input.slice(0, input.length - 1);
      }
      return input;
    };
  }
});

// ../../../node_modules/.pnpm/npm-run-path@4.0.1/node_modules/npm-run-path/index.js
var require_npm_run_path = __commonJS({
  "../../../node_modules/.pnpm/npm-run-path@4.0.1/node_modules/npm-run-path/index.js"(exports, module) {
    "use strict";
    var path2 = __require("path");
    var pathKey = require_path_key();
    var npmRunPath = (options2) => {
      options2 = __spreadValues({
        cwd: process.cwd(),
        path: process.env[pathKey()],
        execPath: process.execPath
      }, options2);
      let previous;
      let cwdPath = path2.resolve(options2.cwd);
      const result = [];
      while (previous !== cwdPath) {
        result.push(path2.join(cwdPath, "node_modules/.bin"));
        previous = cwdPath;
        cwdPath = path2.resolve(cwdPath, "..");
      }
      const execPathDir = path2.resolve(options2.cwd, options2.execPath, "..");
      result.push(execPathDir);
      return result.concat(options2.path).join(path2.delimiter);
    };
    module.exports = npmRunPath;
    module.exports.default = npmRunPath;
    module.exports.env = (options2) => {
      options2 = __spreadValues({
        env: process.env
      }, options2);
      const env = __spreadValues({}, options2.env);
      const path3 = pathKey({ env });
      options2.path = env[path3];
      env[path3] = module.exports(options2);
      return env;
    };
  }
});

// ../../../node_modules/.pnpm/mimic-fn@2.1.0/node_modules/mimic-fn/index.js
var require_mimic_fn = __commonJS({
  "../../../node_modules/.pnpm/mimic-fn@2.1.0/node_modules/mimic-fn/index.js"(exports, module) {
    "use strict";
    var mimicFn = (to, from) => {
      for (const prop of Reflect.ownKeys(from)) {
        Object.defineProperty(to, prop, Object.getOwnPropertyDescriptor(from, prop));
      }
      return to;
    };
    module.exports = mimicFn;
    module.exports.default = mimicFn;
  }
});

// ../../../node_modules/.pnpm/onetime@5.1.2/node_modules/onetime/index.js
var require_onetime = __commonJS({
  "../../../node_modules/.pnpm/onetime@5.1.2/node_modules/onetime/index.js"(exports, module) {
    "use strict";
    var mimicFn = require_mimic_fn();
    var calledFunctions = /* @__PURE__ */ new WeakMap();
    var onetime = (function_, options2 = {}) => {
      if (typeof function_ !== "function") {
        throw new TypeError("Expected a function");
      }
      let returnValue;
      let callCount = 0;
      const functionName = function_.displayName || function_.name || "<anonymous>";
      const onetime2 = function(...arguments_) {
        calledFunctions.set(onetime2, ++callCount);
        if (callCount === 1) {
          returnValue = function_.apply(this, arguments_);
          function_ = null;
        } else if (options2.throw === true) {
          throw new Error(`Function \`${functionName}\` can only be called once`);
        }
        return returnValue;
      };
      mimicFn(onetime2, function_);
      calledFunctions.set(onetime2, callCount);
      return onetime2;
    };
    module.exports = onetime;
    module.exports.default = onetime;
    module.exports.callCount = (function_) => {
      if (!calledFunctions.has(function_)) {
        throw new Error(`The given function \`${function_.name}\` is not wrapped by the \`onetime\` package`);
      }
      return calledFunctions.get(function_);
    };
  }
});

// ../../../node_modules/.pnpm/human-signals@2.1.0/node_modules/human-signals/build/src/core.js
var require_core = __commonJS({
  "../../../node_modules/.pnpm/human-signals@2.1.0/node_modules/human-signals/build/src/core.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SIGNALS = void 0;
    var SIGNALS = [
      {
        name: "SIGHUP",
        number: 1,
        action: "terminate",
        description: "Terminal closed",
        standard: "posix"
      },
      {
        name: "SIGINT",
        number: 2,
        action: "terminate",
        description: "User interruption with CTRL-C",
        standard: "ansi"
      },
      {
        name: "SIGQUIT",
        number: 3,
        action: "core",
        description: "User interruption with CTRL-\\",
        standard: "posix"
      },
      {
        name: "SIGILL",
        number: 4,
        action: "core",
        description: "Invalid machine instruction",
        standard: "ansi"
      },
      {
        name: "SIGTRAP",
        number: 5,
        action: "core",
        description: "Debugger breakpoint",
        standard: "posix"
      },
      {
        name: "SIGABRT",
        number: 6,
        action: "core",
        description: "Aborted",
        standard: "ansi"
      },
      {
        name: "SIGIOT",
        number: 6,
        action: "core",
        description: "Aborted",
        standard: "bsd"
      },
      {
        name: "SIGBUS",
        number: 7,
        action: "core",
        description: "Bus error due to misaligned, non-existing address or paging error",
        standard: "bsd"
      },
      {
        name: "SIGEMT",
        number: 7,
        action: "terminate",
        description: "Command should be emulated but is not implemented",
        standard: "other"
      },
      {
        name: "SIGFPE",
        number: 8,
        action: "core",
        description: "Floating point arithmetic error",
        standard: "ansi"
      },
      {
        name: "SIGKILL",
        number: 9,
        action: "terminate",
        description: "Forced termination",
        standard: "posix",
        forced: true
      },
      {
        name: "SIGUSR1",
        number: 10,
        action: "terminate",
        description: "Application-specific signal",
        standard: "posix"
      },
      {
        name: "SIGSEGV",
        number: 11,
        action: "core",
        description: "Segmentation fault",
        standard: "ansi"
      },
      {
        name: "SIGUSR2",
        number: 12,
        action: "terminate",
        description: "Application-specific signal",
        standard: "posix"
      },
      {
        name: "SIGPIPE",
        number: 13,
        action: "terminate",
        description: "Broken pipe or socket",
        standard: "posix"
      },
      {
        name: "SIGALRM",
        number: 14,
        action: "terminate",
        description: "Timeout or timer",
        standard: "posix"
      },
      {
        name: "SIGTERM",
        number: 15,
        action: "terminate",
        description: "Termination",
        standard: "ansi"
      },
      {
        name: "SIGSTKFLT",
        number: 16,
        action: "terminate",
        description: "Stack is empty or overflowed",
        standard: "other"
      },
      {
        name: "SIGCHLD",
        number: 17,
        action: "ignore",
        description: "Child process terminated, paused or unpaused",
        standard: "posix"
      },
      {
        name: "SIGCLD",
        number: 17,
        action: "ignore",
        description: "Child process terminated, paused or unpaused",
        standard: "other"
      },
      {
        name: "SIGCONT",
        number: 18,
        action: "unpause",
        description: "Unpaused",
        standard: "posix",
        forced: true
      },
      {
        name: "SIGSTOP",
        number: 19,
        action: "pause",
        description: "Paused",
        standard: "posix",
        forced: true
      },
      {
        name: "SIGTSTP",
        number: 20,
        action: "pause",
        description: 'Paused using CTRL-Z or "suspend"',
        standard: "posix"
      },
      {
        name: "SIGTTIN",
        number: 21,
        action: "pause",
        description: "Background process cannot read terminal input",
        standard: "posix"
      },
      {
        name: "SIGBREAK",
        number: 21,
        action: "terminate",
        description: "User interruption with CTRL-BREAK",
        standard: "other"
      },
      {
        name: "SIGTTOU",
        number: 22,
        action: "pause",
        description: "Background process cannot write to terminal output",
        standard: "posix"
      },
      {
        name: "SIGURG",
        number: 23,
        action: "ignore",
        description: "Socket received out-of-band data",
        standard: "bsd"
      },
      {
        name: "SIGXCPU",
        number: 24,
        action: "core",
        description: "Process timed out",
        standard: "bsd"
      },
      {
        name: "SIGXFSZ",
        number: 25,
        action: "core",
        description: "File too big",
        standard: "bsd"
      },
      {
        name: "SIGVTALRM",
        number: 26,
        action: "terminate",
        description: "Timeout or timer",
        standard: "bsd"
      },
      {
        name: "SIGPROF",
        number: 27,
        action: "terminate",
        description: "Timeout or timer",
        standard: "bsd"
      },
      {
        name: "SIGWINCH",
        number: 28,
        action: "ignore",
        description: "Terminal window size changed",
        standard: "bsd"
      },
      {
        name: "SIGIO",
        number: 29,
        action: "terminate",
        description: "I/O is available",
        standard: "other"
      },
      {
        name: "SIGPOLL",
        number: 29,
        action: "terminate",
        description: "Watched event",
        standard: "other"
      },
      {
        name: "SIGINFO",
        number: 29,
        action: "ignore",
        description: "Request for process information",
        standard: "other"
      },
      {
        name: "SIGPWR",
        number: 30,
        action: "terminate",
        description: "Device running out of power",
        standard: "systemv"
      },
      {
        name: "SIGSYS",
        number: 31,
        action: "core",
        description: "Invalid system call",
        standard: "other"
      },
      {
        name: "SIGUNUSED",
        number: 31,
        action: "terminate",
        description: "Invalid system call",
        standard: "other"
      }
    ];
    exports.SIGNALS = SIGNALS;
  }
});

// ../../../node_modules/.pnpm/human-signals@2.1.0/node_modules/human-signals/build/src/realtime.js
var require_realtime = __commonJS({
  "../../../node_modules/.pnpm/human-signals@2.1.0/node_modules/human-signals/build/src/realtime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SIGRTMAX = exports.getRealtimeSignals = void 0;
    var getRealtimeSignals = function() {
      const length = SIGRTMAX - SIGRTMIN + 1;
      return Array.from({ length }, getRealtimeSignal);
    };
    exports.getRealtimeSignals = getRealtimeSignals;
    var getRealtimeSignal = function(value, index) {
      return {
        name: `SIGRT${index + 1}`,
        number: SIGRTMIN + index,
        action: "terminate",
        description: "Application-specific signal (realtime)",
        standard: "posix"
      };
    };
    var SIGRTMIN = 34;
    var SIGRTMAX = 64;
    exports.SIGRTMAX = SIGRTMAX;
  }
});

// ../../../node_modules/.pnpm/human-signals@2.1.0/node_modules/human-signals/build/src/signals.js
var require_signals = __commonJS({
  "../../../node_modules/.pnpm/human-signals@2.1.0/node_modules/human-signals/build/src/signals.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSignals = void 0;
    var _os = __require("os");
    var _core = require_core();
    var _realtime = require_realtime();
    var getSignals = function() {
      const realtimeSignals = (0, _realtime.getRealtimeSignals)();
      const signals = [..._core.SIGNALS, ...realtimeSignals].map(normalizeSignal);
      return signals;
    };
    exports.getSignals = getSignals;
    var normalizeSignal = function({
      name,
      number: defaultNumber,
      description,
      action,
      forced = false,
      standard
    }) {
      const {
        signals: { [name]: constantSignal }
      } = _os.constants;
      const supported = constantSignal !== void 0;
      const number = supported ? constantSignal : defaultNumber;
      return { name, number, description, supported, action, forced, standard };
    };
  }
});

// ../../../node_modules/.pnpm/human-signals@2.1.0/node_modules/human-signals/build/src/main.js
var require_main = __commonJS({
  "../../../node_modules/.pnpm/human-signals@2.1.0/node_modules/human-signals/build/src/main.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.signalsByNumber = exports.signalsByName = void 0;
    var _os = __require("os");
    var _signals = require_signals();
    var _realtime = require_realtime();
    var getSignalsByName = function() {
      const signals = (0, _signals.getSignals)();
      return signals.reduce(getSignalByName, {});
    };
    var getSignalByName = function(signalByNameMemo, { name, number, description, supported, action, forced, standard }) {
      return __spreadProps(__spreadValues({}, signalByNameMemo), {
        [name]: { name, number, description, supported, action, forced, standard }
      });
    };
    var signalsByName = getSignalsByName();
    exports.signalsByName = signalsByName;
    var getSignalsByNumber = function() {
      const signals = (0, _signals.getSignals)();
      const length = _realtime.SIGRTMAX + 1;
      const signalsA = Array.from({ length }, (value, number) => getSignalByNumber(number, signals));
      return Object.assign({}, ...signalsA);
    };
    var getSignalByNumber = function(number, signals) {
      const signal = findSignalByNumber(number, signals);
      if (signal === void 0) {
        return {};
      }
      const { name, description, supported, action, forced, standard } = signal;
      return {
        [number]: {
          name,
          number,
          description,
          supported,
          action,
          forced,
          standard
        }
      };
    };
    var findSignalByNumber = function(number, signals) {
      const signal = signals.find(({ name }) => _os.constants.signals[name] === number);
      if (signal !== void 0) {
        return signal;
      }
      return signals.find((signalA) => signalA.number === number);
    };
    var signalsByNumber = getSignalsByNumber();
    exports.signalsByNumber = signalsByNumber;
  }
});

// ../../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/lib/error.js
var require_error = __commonJS({
  "../../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/lib/error.js"(exports, module) {
    "use strict";
    var { signalsByName } = require_main();
    var getErrorPrefix = ({ timedOut, timeout, errorCode, signal, signalDescription, exitCode, isCanceled }) => {
      if (timedOut) {
        return `timed out after ${timeout} milliseconds`;
      }
      if (isCanceled) {
        return "was canceled";
      }
      if (errorCode !== void 0) {
        return `failed with ${errorCode}`;
      }
      if (signal !== void 0) {
        return `was killed with ${signal} (${signalDescription})`;
      }
      if (exitCode !== void 0) {
        return `failed with exit code ${exitCode}`;
      }
      return "failed";
    };
    var makeError = ({
      stdout,
      stderr,
      all,
      error,
      signal,
      exitCode,
      command,
      escapedCommand,
      timedOut,
      isCanceled,
      killed,
      parsed: { options: { timeout } }
    }) => {
      exitCode = exitCode === null ? void 0 : exitCode;
      signal = signal === null ? void 0 : signal;
      const signalDescription = signal === void 0 ? void 0 : signalsByName[signal].description;
      const errorCode = error && error.code;
      const prefix = getErrorPrefix({ timedOut, timeout, errorCode, signal, signalDescription, exitCode, isCanceled });
      const execaMessage = `Command ${prefix}: ${command}`;
      const isError = Object.prototype.toString.call(error) === "[object Error]";
      const shortMessage = isError ? `${execaMessage}
${error.message}` : execaMessage;
      const message = [shortMessage, stderr, stdout].filter(Boolean).join("\n");
      if (isError) {
        error.originalMessage = error.message;
        error.message = message;
      } else {
        error = new Error(message);
      }
      error.shortMessage = shortMessage;
      error.command = command;
      error.escapedCommand = escapedCommand;
      error.exitCode = exitCode;
      error.signal = signal;
      error.signalDescription = signalDescription;
      error.stdout = stdout;
      error.stderr = stderr;
      if (all !== void 0) {
        error.all = all;
      }
      if ("bufferedData" in error) {
        delete error.bufferedData;
      }
      error.failed = true;
      error.timedOut = Boolean(timedOut);
      error.isCanceled = isCanceled;
      error.killed = killed && !timedOut;
      return error;
    };
    module.exports = makeError;
  }
});

// ../../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/lib/stdio.js
var require_stdio = __commonJS({
  "../../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/lib/stdio.js"(exports, module) {
    "use strict";
    var aliases = ["stdin", "stdout", "stderr"];
    var hasAlias = (options2) => aliases.some((alias) => options2[alias] !== void 0);
    var normalizeStdio = (options2) => {
      if (!options2) {
        return;
      }
      const { stdio } = options2;
      if (stdio === void 0) {
        return aliases.map((alias) => options2[alias]);
      }
      if (hasAlias(options2)) {
        throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${aliases.map((alias) => `\`${alias}\``).join(", ")}`);
      }
      if (typeof stdio === "string") {
        return stdio;
      }
      if (!Array.isArray(stdio)) {
        throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof stdio}\``);
      }
      const length = Math.max(stdio.length, aliases.length);
      return Array.from({ length }, (value, index) => stdio[index]);
    };
    module.exports = normalizeStdio;
    module.exports.node = (options2) => {
      const stdio = normalizeStdio(options2);
      if (stdio === "ipc") {
        return "ipc";
      }
      if (stdio === void 0 || typeof stdio === "string") {
        return [stdio, stdio, stdio, "ipc"];
      }
      if (stdio.includes("ipc")) {
        return stdio;
      }
      return [...stdio, "ipc"];
    };
  }
});

// ../../../node_modules/.pnpm/signal-exit@3.0.7/node_modules/signal-exit/signals.js
var require_signals2 = __commonJS({
  "../../../node_modules/.pnpm/signal-exit@3.0.7/node_modules/signal-exit/signals.js"(exports, module) {
    "use strict";
    module.exports = [
      "SIGABRT",
      "SIGALRM",
      "SIGHUP",
      "SIGINT",
      "SIGTERM"
    ];
    if (process.platform !== "win32") {
      module.exports.push(
        "SIGVTALRM",
        "SIGXCPU",
        "SIGXFSZ",
        "SIGUSR2",
        "SIGTRAP",
        "SIGSYS",
        "SIGQUIT",
        "SIGIOT"
        // should detect profiler and enable/disable accordingly.
        // see #21
        // 'SIGPROF'
      );
    }
    if (process.platform === "linux") {
      module.exports.push(
        "SIGIO",
        "SIGPOLL",
        "SIGPWR",
        "SIGSTKFLT",
        "SIGUNUSED"
      );
    }
  }
});

// ../../../node_modules/.pnpm/signal-exit@3.0.7/node_modules/signal-exit/index.js
var require_signal_exit = __commonJS({
  "../../../node_modules/.pnpm/signal-exit@3.0.7/node_modules/signal-exit/index.js"(exports, module) {
    "use strict";
    var process2 = global.process;
    var processOk = function(process3) {
      return process3 && typeof process3 === "object" && typeof process3.removeListener === "function" && typeof process3.emit === "function" && typeof process3.reallyExit === "function" && typeof process3.listeners === "function" && typeof process3.kill === "function" && typeof process3.pid === "number" && typeof process3.on === "function";
    };
    if (!processOk(process2)) {
      module.exports = function() {
        return function() {
        };
      };
    } else {
      assert = __require("assert");
      signals = require_signals2();
      isWin = /^win/i.test(process2.platform);
      EE = __require("events");
      if (typeof EE !== "function") {
        EE = EE.EventEmitter;
      }
      if (process2.__signal_exit_emitter__) {
        emitter = process2.__signal_exit_emitter__;
      } else {
        emitter = process2.__signal_exit_emitter__ = new EE();
        emitter.count = 0;
        emitter.emitted = {};
      }
      if (!emitter.infinite) {
        emitter.setMaxListeners(Infinity);
        emitter.infinite = true;
      }
      module.exports = function(cb, opts) {
        if (!processOk(global.process)) {
          return function() {
          };
        }
        assert.equal(typeof cb, "function", "a callback must be provided for exit handler");
        if (loaded === false) {
          load();
        }
        var ev = "exit";
        if (opts && opts.alwaysLast) {
          ev = "afterexit";
        }
        var remove = function() {
          emitter.removeListener(ev, cb);
          if (emitter.listeners("exit").length === 0 && emitter.listeners("afterexit").length === 0) {
            unload();
          }
        };
        emitter.on(ev, cb);
        return remove;
      };
      unload = function unload2() {
        if (!loaded || !processOk(global.process)) {
          return;
        }
        loaded = false;
        signals.forEach(function(sig) {
          try {
            process2.removeListener(sig, sigListeners[sig]);
          } catch (er) {
          }
        });
        process2.emit = originalProcessEmit;
        process2.reallyExit = originalProcessReallyExit;
        emitter.count -= 1;
      };
      module.exports.unload = unload;
      emit = function emit2(event, code, signal) {
        if (emitter.emitted[event]) {
          return;
        }
        emitter.emitted[event] = true;
        emitter.emit(event, code, signal);
      };
      sigListeners = {};
      signals.forEach(function(sig) {
        sigListeners[sig] = function listener() {
          if (!processOk(global.process)) {
            return;
          }
          var listeners = process2.listeners(sig);
          if (listeners.length === emitter.count) {
            unload();
            emit("exit", null, sig);
            emit("afterexit", null, sig);
            if (isWin && sig === "SIGHUP") {
              sig = "SIGINT";
            }
            process2.kill(process2.pid, sig);
          }
        };
      });
      module.exports.signals = function() {
        return signals;
      };
      loaded = false;
      load = function load2() {
        if (loaded || !processOk(global.process)) {
          return;
        }
        loaded = true;
        emitter.count += 1;
        signals = signals.filter(function(sig) {
          try {
            process2.on(sig, sigListeners[sig]);
            return true;
          } catch (er) {
            return false;
          }
        });
        process2.emit = processEmit;
        process2.reallyExit = processReallyExit;
      };
      module.exports.load = load;
      originalProcessReallyExit = process2.reallyExit;
      processReallyExit = function processReallyExit2(code) {
        if (!processOk(global.process)) {
          return;
        }
        process2.exitCode = code || /* istanbul ignore next */
        0;
        emit("exit", process2.exitCode, null);
        emit("afterexit", process2.exitCode, null);
        originalProcessReallyExit.call(process2, process2.exitCode);
      };
      originalProcessEmit = process2.emit;
      processEmit = function processEmit2(ev, arg) {
        if (ev === "exit" && processOk(global.process)) {
          if (arg !== void 0) {
            process2.exitCode = arg;
          }
          var ret = originalProcessEmit.apply(this, arguments);
          emit("exit", process2.exitCode, null);
          emit("afterexit", process2.exitCode, null);
          return ret;
        } else {
          return originalProcessEmit.apply(this, arguments);
        }
      };
    }
    var assert;
    var signals;
    var isWin;
    var EE;
    var emitter;
    var unload;
    var emit;
    var sigListeners;
    var loaded;
    var load;
    var originalProcessReallyExit;
    var processReallyExit;
    var originalProcessEmit;
    var processEmit;
  }
});

// ../../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/lib/kill.js
var require_kill = __commonJS({
  "../../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/lib/kill.js"(exports, module) {
    "use strict";
    var os = __require("os");
    var onExit = require_signal_exit();
    var DEFAULT_FORCE_KILL_TIMEOUT = 1e3 * 5;
    var spawnedKill = (kill, signal = "SIGTERM", options2 = {}) => {
      const killResult = kill(signal);
      setKillTimeout(kill, signal, options2, killResult);
      return killResult;
    };
    var setKillTimeout = (kill, signal, options2, killResult) => {
      if (!shouldForceKill(signal, options2, killResult)) {
        return;
      }
      const timeout = getForceKillAfterTimeout(options2);
      const t = setTimeout(() => {
        kill("SIGKILL");
      }, timeout);
      if (t.unref) {
        t.unref();
      }
    };
    var shouldForceKill = (signal, { forceKillAfterTimeout }, killResult) => {
      return isSigterm(signal) && forceKillAfterTimeout !== false && killResult;
    };
    var isSigterm = (signal) => {
      return signal === os.constants.signals.SIGTERM || typeof signal === "string" && signal.toUpperCase() === "SIGTERM";
    };
    var getForceKillAfterTimeout = ({ forceKillAfterTimeout = true }) => {
      if (forceKillAfterTimeout === true) {
        return DEFAULT_FORCE_KILL_TIMEOUT;
      }
      if (!Number.isFinite(forceKillAfterTimeout) || forceKillAfterTimeout < 0) {
        throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${forceKillAfterTimeout}\` (${typeof forceKillAfterTimeout})`);
      }
      return forceKillAfterTimeout;
    };
    var spawnedCancel = (spawned, context) => {
      const killResult = spawned.kill();
      if (killResult) {
        context.isCanceled = true;
      }
    };
    var timeoutKill = (spawned, signal, reject) => {
      spawned.kill(signal);
      reject(Object.assign(new Error("Timed out"), { timedOut: true, signal }));
    };
    var setupTimeout = (spawned, { timeout, killSignal = "SIGTERM" }, spawnedPromise) => {
      if (timeout === 0 || timeout === void 0) {
        return spawnedPromise;
      }
      let timeoutId;
      const timeoutPromise = new Promise((resolve, reject) => {
        timeoutId = setTimeout(() => {
          timeoutKill(spawned, killSignal, reject);
        }, timeout);
      });
      const safeSpawnedPromise = spawnedPromise.finally(() => {
        clearTimeout(timeoutId);
      });
      return Promise.race([timeoutPromise, safeSpawnedPromise]);
    };
    var validateTimeout = ({ timeout }) => {
      if (timeout !== void 0 && (!Number.isFinite(timeout) || timeout < 0)) {
        throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${timeout}\` (${typeof timeout})`);
      }
    };
    var setExitHandler = (_0, _1, _2) => __async(exports, [_0, _1, _2], function* (spawned, { cleanup, detached }, timedPromise) {
      if (!cleanup || detached) {
        return timedPromise;
      }
      const removeExitHandler = onExit(() => {
        spawned.kill();
      });
      return timedPromise.finally(() => {
        removeExitHandler();
      });
    });
    module.exports = {
      spawnedKill,
      spawnedCancel,
      setupTimeout,
      validateTimeout,
      setExitHandler
    };
  }
});

// ../../../node_modules/.pnpm/is-stream@2.0.1/node_modules/is-stream/index.js
var require_is_stream = __commonJS({
  "../../../node_modules/.pnpm/is-stream@2.0.1/node_modules/is-stream/index.js"(exports, module) {
    "use strict";
    var isStream = (stream) => stream !== null && typeof stream === "object" && typeof stream.pipe === "function";
    isStream.writable = (stream) => isStream(stream) && stream.writable !== false && typeof stream._write === "function" && typeof stream._writableState === "object";
    isStream.readable = (stream) => isStream(stream) && stream.readable !== false && typeof stream._read === "function" && typeof stream._readableState === "object";
    isStream.duplex = (stream) => isStream.writable(stream) && isStream.readable(stream);
    isStream.transform = (stream) => isStream.duplex(stream) && typeof stream._transform === "function";
    module.exports = isStream;
  }
});

// ../../../node_modules/.pnpm/get-stream@6.0.1/node_modules/get-stream/buffer-stream.js
var require_buffer_stream = __commonJS({
  "../../../node_modules/.pnpm/get-stream@6.0.1/node_modules/get-stream/buffer-stream.js"(exports, module) {
    "use strict";
    var { PassThrough: PassThroughStream } = __require("stream");
    module.exports = (options2) => {
      options2 = __spreadValues({}, options2);
      const { array } = options2;
      let { encoding } = options2;
      const isBuffer = encoding === "buffer";
      let objectMode = false;
      if (array) {
        objectMode = !(encoding || isBuffer);
      } else {
        encoding = encoding || "utf8";
      }
      if (isBuffer) {
        encoding = null;
      }
      const stream = new PassThroughStream({ objectMode });
      if (encoding) {
        stream.setEncoding(encoding);
      }
      let length = 0;
      const chunks = [];
      stream.on("data", (chunk) => {
        chunks.push(chunk);
        if (objectMode) {
          length = chunks.length;
        } else {
          length += chunk.length;
        }
      });
      stream.getBufferedValue = () => {
        if (array) {
          return chunks;
        }
        return isBuffer ? Buffer.concat(chunks, length) : chunks.join("");
      };
      stream.getBufferedLength = () => length;
      return stream;
    };
  }
});

// ../../../node_modules/.pnpm/get-stream@6.0.1/node_modules/get-stream/index.js
var require_get_stream = __commonJS({
  "../../../node_modules/.pnpm/get-stream@6.0.1/node_modules/get-stream/index.js"(exports, module) {
    "use strict";
    var { constants: BufferConstants } = __require("buffer");
    var stream = __require("stream");
    var { promisify } = __require("util");
    var bufferStream = require_buffer_stream();
    var streamPipelinePromisified = promisify(stream.pipeline);
    var MaxBufferError = class extends Error {
      constructor() {
        super("maxBuffer exceeded");
        this.name = "MaxBufferError";
      }
    };
    function getStream(inputStream, options2) {
      return __async(this, null, function* () {
        if (!inputStream) {
          throw new Error("Expected a stream");
        }
        options2 = __spreadValues({
          maxBuffer: Infinity
        }, options2);
        const { maxBuffer } = options2;
        const stream2 = bufferStream(options2);
        yield new Promise((resolve, reject) => {
          const rejectPromise = (error) => {
            if (error && stream2.getBufferedLength() <= BufferConstants.MAX_LENGTH) {
              error.bufferedData = stream2.getBufferedValue();
            }
            reject(error);
          };
          (() => __async(this, null, function* () {
            try {
              yield streamPipelinePromisified(inputStream, stream2);
              resolve();
            } catch (error) {
              rejectPromise(error);
            }
          }))();
          stream2.on("data", () => {
            if (stream2.getBufferedLength() > maxBuffer) {
              rejectPromise(new MaxBufferError());
            }
          });
        });
        return stream2.getBufferedValue();
      });
    }
    module.exports = getStream;
    module.exports.buffer = (stream2, options2) => getStream(stream2, __spreadProps(__spreadValues({}, options2), { encoding: "buffer" }));
    module.exports.array = (stream2, options2) => getStream(stream2, __spreadProps(__spreadValues({}, options2), { array: true }));
    module.exports.MaxBufferError = MaxBufferError;
  }
});

// ../../../node_modules/.pnpm/merge-stream@2.0.0/node_modules/merge-stream/index.js
var require_merge_stream = __commonJS({
  "../../../node_modules/.pnpm/merge-stream@2.0.0/node_modules/merge-stream/index.js"(exports, module) {
    "use strict";
    var { PassThrough } = __require("stream");
    module.exports = function() {
      var sources = [];
      var output = new PassThrough({ objectMode: true });
      output.setMaxListeners(0);
      output.add = add;
      output.isEmpty = isEmpty;
      output.on("unpipe", remove);
      Array.prototype.slice.call(arguments).forEach(add);
      return output;
      function add(source) {
        if (Array.isArray(source)) {
          source.forEach(add);
          return this;
        }
        sources.push(source);
        source.once("end", remove.bind(null, source));
        source.once("error", output.emit.bind(output, "error"));
        source.pipe(output, { end: false });
        return this;
      }
      function isEmpty() {
        return sources.length == 0;
      }
      function remove(source) {
        sources = sources.filter(function(it) {
          return it !== source;
        });
        if (!sources.length && output.readable) {
          output.end();
        }
      }
    };
  }
});

// ../../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/lib/stream.js
var require_stream = __commonJS({
  "../../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/lib/stream.js"(exports, module) {
    "use strict";
    var isStream = require_is_stream();
    var getStream = require_get_stream();
    var mergeStream = require_merge_stream();
    var handleInput = (spawned, input) => {
      if (input === void 0 || spawned.stdin === void 0) {
        return;
      }
      if (isStream(input)) {
        input.pipe(spawned.stdin);
      } else {
        spawned.stdin.end(input);
      }
    };
    var makeAllStream = (spawned, { all }) => {
      if (!all || !spawned.stdout && !spawned.stderr) {
        return;
      }
      const mixed = mergeStream();
      if (spawned.stdout) {
        mixed.add(spawned.stdout);
      }
      if (spawned.stderr) {
        mixed.add(spawned.stderr);
      }
      return mixed;
    };
    var getBufferedData = (stream, streamPromise) => __async(exports, null, function* () {
      if (!stream) {
        return;
      }
      stream.destroy();
      try {
        return yield streamPromise;
      } catch (error) {
        return error.bufferedData;
      }
    });
    var getStreamPromise = (stream, { encoding, buffer, maxBuffer }) => {
      if (!stream || !buffer) {
        return;
      }
      if (encoding) {
        return getStream(stream, { encoding, maxBuffer });
      }
      return getStream.buffer(stream, { maxBuffer });
    };
    var getSpawnedResult = (_0, _1, _2) => __async(exports, [_0, _1, _2], function* ({ stdout, stderr, all }, { encoding, buffer, maxBuffer }, processDone) {
      const stdoutPromise = getStreamPromise(stdout, { encoding, buffer, maxBuffer });
      const stderrPromise = getStreamPromise(stderr, { encoding, buffer, maxBuffer });
      const allPromise = getStreamPromise(all, { encoding, buffer, maxBuffer: maxBuffer * 2 });
      try {
        return yield Promise.all([processDone, stdoutPromise, stderrPromise, allPromise]);
      } catch (error) {
        return Promise.all([
          { error, signal: error.signal, timedOut: error.timedOut },
          getBufferedData(stdout, stdoutPromise),
          getBufferedData(stderr, stderrPromise),
          getBufferedData(all, allPromise)
        ]);
      }
    });
    var validateInputSync = ({ input }) => {
      if (isStream(input)) {
        throw new TypeError("The `input` option cannot be a stream in sync mode");
      }
    };
    module.exports = {
      handleInput,
      makeAllStream,
      getSpawnedResult,
      validateInputSync
    };
  }
});

// ../../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/lib/promise.js
var require_promise = __commonJS({
  "../../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/lib/promise.js"(exports, module) {
    "use strict";
    var nativePromisePrototype = (() => __async(exports, null, function* () {
    }))().constructor.prototype;
    var descriptors = ["then", "catch", "finally"].map((property) => [
      property,
      Reflect.getOwnPropertyDescriptor(nativePromisePrototype, property)
    ]);
    var mergePromise = (spawned, promise) => {
      for (const [property, descriptor] of descriptors) {
        const value = typeof promise === "function" ? (...args) => Reflect.apply(descriptor.value, promise(), args) : descriptor.value.bind(promise);
        Reflect.defineProperty(spawned, property, __spreadProps(__spreadValues({}, descriptor), { value }));
      }
      return spawned;
    };
    var getSpawnedPromise = (spawned) => {
      return new Promise((resolve, reject) => {
        spawned.on("exit", (exitCode, signal) => {
          resolve({ exitCode, signal });
        });
        spawned.on("error", (error) => {
          reject(error);
        });
        if (spawned.stdin) {
          spawned.stdin.on("error", (error) => {
            reject(error);
          });
        }
      });
    };
    module.exports = {
      mergePromise,
      getSpawnedPromise
    };
  }
});

// ../../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/lib/command.js
var require_command = __commonJS({
  "../../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/lib/command.js"(exports, module) {
    "use strict";
    var normalizeArgs = (file, args = []) => {
      if (!Array.isArray(args)) {
        return [file];
      }
      return [file, ...args];
    };
    var NO_ESCAPE_REGEXP = /^[\w.-]+$/;
    var DOUBLE_QUOTES_REGEXP = /"/g;
    var escapeArg = (arg) => {
      if (typeof arg !== "string" || NO_ESCAPE_REGEXP.test(arg)) {
        return arg;
      }
      return `"${arg.replace(DOUBLE_QUOTES_REGEXP, '\\"')}"`;
    };
    var joinCommand = (file, args) => {
      return normalizeArgs(file, args).join(" ");
    };
    var getEscapedCommand = (file, args) => {
      return normalizeArgs(file, args).map((arg) => escapeArg(arg)).join(" ");
    };
    var SPACES_REGEXP = / +/g;
    var parseCommand = (command) => {
      const tokens = [];
      for (const token of command.trim().split(SPACES_REGEXP)) {
        const previousToken = tokens[tokens.length - 1];
        if (previousToken && previousToken.endsWith("\\")) {
          tokens[tokens.length - 1] = `${previousToken.slice(0, -1)} ${token}`;
        } else {
          tokens.push(token);
        }
      }
      return tokens;
    };
    module.exports = {
      joinCommand,
      getEscapedCommand,
      parseCommand
    };
  }
});

// ../../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/index.js
var require_execa = __commonJS({
  "../../../node_modules/.pnpm/execa@5.1.1/node_modules/execa/index.js"(exports, module) {
    "use strict";
    var path2 = __require("path");
    var childProcess = __require("child_process");
    var crossSpawn = require_cross_spawn();
    var stripFinalNewline = require_strip_final_newline();
    var npmRunPath = require_npm_run_path();
    var onetime = require_onetime();
    var makeError = require_error();
    var normalizeStdio = require_stdio();
    var { spawnedKill, spawnedCancel, setupTimeout, validateTimeout, setExitHandler } = require_kill();
    var { handleInput, getSpawnedResult, makeAllStream, validateInputSync } = require_stream();
    var { mergePromise, getSpawnedPromise } = require_promise();
    var { joinCommand, parseCommand, getEscapedCommand } = require_command();
    var DEFAULT_MAX_BUFFER = 1e3 * 1e3 * 100;
    var getEnv = ({ env: envOption, extendEnv, preferLocal, localDir, execPath }) => {
      const env = extendEnv ? __spreadValues(__spreadValues({}, process.env), envOption) : envOption;
      if (preferLocal) {
        return npmRunPath.env({ env, cwd: localDir, execPath });
      }
      return env;
    };
    var handleArguments = (file, args, options2 = {}) => {
      const parsed = crossSpawn._parse(file, args, options2);
      file = parsed.command;
      args = parsed.args;
      options2 = parsed.options;
      options2 = __spreadValues({
        maxBuffer: DEFAULT_MAX_BUFFER,
        buffer: true,
        stripFinalNewline: true,
        extendEnv: true,
        preferLocal: false,
        localDir: options2.cwd || process.cwd(),
        execPath: process.execPath,
        encoding: "utf8",
        reject: true,
        cleanup: true,
        all: false,
        windowsHide: true
      }, options2);
      options2.env = getEnv(options2);
      options2.stdio = normalizeStdio(options2);
      if (process.platform === "win32" && path2.basename(file, ".exe") === "cmd") {
        args.unshift("/q");
      }
      return { file, args, options: options2, parsed };
    };
    var handleOutput = (options2, value, error) => {
      if (typeof value !== "string" && !Buffer.isBuffer(value)) {
        return error === void 0 ? void 0 : "";
      }
      if (options2.stripFinalNewline) {
        return stripFinalNewline(value);
      }
      return value;
    };
    var execa2 = (file, args, options2) => {
      const parsed = handleArguments(file, args, options2);
      const command = joinCommand(file, args);
      const escapedCommand = getEscapedCommand(file, args);
      validateTimeout(parsed.options);
      let spawned;
      try {
        spawned = childProcess.spawn(parsed.file, parsed.args, parsed.options);
      } catch (error) {
        const dummySpawned = new childProcess.ChildProcess();
        const errorPromise = Promise.reject(makeError({
          error,
          stdout: "",
          stderr: "",
          all: "",
          command,
          escapedCommand,
          parsed,
          timedOut: false,
          isCanceled: false,
          killed: false
        }));
        return mergePromise(dummySpawned, errorPromise);
      }
      const spawnedPromise = getSpawnedPromise(spawned);
      const timedPromise = setupTimeout(spawned, parsed.options, spawnedPromise);
      const processDone = setExitHandler(spawned, parsed.options, timedPromise);
      const context = { isCanceled: false };
      spawned.kill = spawnedKill.bind(null, spawned.kill.bind(spawned));
      spawned.cancel = spawnedCancel.bind(null, spawned, context);
      const handlePromise = () => __async(exports, null, function* () {
        const [{ error, exitCode, signal, timedOut }, stdoutResult, stderrResult, allResult] = yield getSpawnedResult(spawned, parsed.options, processDone);
        const stdout = handleOutput(parsed.options, stdoutResult);
        const stderr = handleOutput(parsed.options, stderrResult);
        const all = handleOutput(parsed.options, allResult);
        if (error || exitCode !== 0 || signal !== null) {
          const returnedError = makeError({
            error,
            exitCode,
            signal,
            stdout,
            stderr,
            all,
            command,
            escapedCommand,
            parsed,
            timedOut,
            isCanceled: context.isCanceled,
            killed: spawned.killed
          });
          if (!parsed.options.reject) {
            return returnedError;
          }
          throw returnedError;
        }
        return {
          command,
          escapedCommand,
          exitCode: 0,
          stdout,
          stderr,
          all,
          failed: false,
          timedOut: false,
          isCanceled: false,
          killed: false
        };
      });
      const handlePromiseOnce = onetime(handlePromise);
      handleInput(spawned, parsed.options.input);
      spawned.all = makeAllStream(spawned, parsed.options);
      return mergePromise(spawned, handlePromiseOnce);
    };
    module.exports = execa2;
    module.exports.sync = (file, args, options2) => {
      const parsed = handleArguments(file, args, options2);
      const command = joinCommand(file, args);
      const escapedCommand = getEscapedCommand(file, args);
      validateInputSync(parsed.options);
      let result;
      try {
        result = childProcess.spawnSync(parsed.file, parsed.args, parsed.options);
      } catch (error) {
        throw makeError({
          error,
          stdout: "",
          stderr: "",
          all: "",
          command,
          escapedCommand,
          parsed,
          timedOut: false,
          isCanceled: false,
          killed: false
        });
      }
      const stdout = handleOutput(parsed.options, result.stdout, result.error);
      const stderr = handleOutput(parsed.options, result.stderr, result.error);
      if (result.error || result.status !== 0 || result.signal !== null) {
        const error = makeError({
          stdout,
          stderr,
          error: result.error,
          signal: result.signal,
          exitCode: result.status,
          command,
          escapedCommand,
          parsed,
          timedOut: result.error && result.error.code === "ETIMEDOUT",
          isCanceled: false,
          killed: result.signal !== null
        });
        if (!parsed.options.reject) {
          return error;
        }
        throw error;
      }
      return {
        command,
        escapedCommand,
        exitCode: 0,
        stdout,
        stderr,
        failed: false,
        timedOut: false,
        isCanceled: false,
        killed: false
      };
    };
    module.exports.command = (command, options2) => {
      const [file, ...args] = parseCommand(command);
      return execa2(file, args, options2);
    };
    module.exports.commandSync = (command, options2) => {
      const [file, ...args] = parseCommand(command);
      return execa2.sync(file, args, options2);
    };
    module.exports.node = (scriptPath, args, options2 = {}) => {
      if (args && !Array.isArray(args) && typeof args === "object") {
        options2 = args;
        args = [];
      }
      const stdio = normalizeStdio.node(options2);
      const defaultExecArgv = process.execArgv.filter((arg) => !arg.startsWith("--inspect"));
      const {
        nodePath = process.execPath,
        nodeOptions = defaultExecArgv
      } = options2;
      return execa2(
        nodePath,
        [
          ...nodeOptions,
          scriptPath,
          ...Array.isArray(args) ? args : []
        ],
        __spreadProps(__spreadValues({}, options2), {
          stdin: void 0,
          stdout: void 0,
          stderr: void 0,
          stdio,
          shell: false
        })
      );
    };
  }
});

// ../../../node_modules/.pnpm/@iconify+utils@2.1.11/node_modules/@iconify/utils/lib/icon/defaults.mjs
var defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
var defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
var defaultIconProps = Object.freeze(__spreadValues(__spreadValues({}, defaultIconDimensions), defaultIconTransformations));
var defaultExtendedIconProps = Object.freeze(__spreadProps(__spreadValues({}, defaultIconProps), {
  body: "",
  hidden: false
}));

// ../../../node_modules/.pnpm/@iconify+utils@2.1.11/node_modules/@iconify/utils/lib/customisations/defaults.mjs
var defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
var defaultIconCustomisations = Object.freeze(__spreadValues(__spreadValues({}, defaultIconSizeCustomisations), defaultIconTransformations));

// ../../../node_modules/.pnpm/@iconify+utils@2.1.11/node_modules/@iconify/utils/lib/svg/size.mjs
var unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
var unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}

// ../../../node_modules/.pnpm/@iconify+utils@2.1.11/node_modules/@iconify/utils/lib/svg/defs.mjs
function splitSVGDefs(content) {
  let defs = "";
  const index = content.indexOf("<defs");
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</defs");
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}

// ../../../node_modules/.pnpm/@iconify+utils@2.1.11/node_modules/@iconify/utils/lib/svg/build.mjs
var isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = __spreadValues(__spreadValues({}, defaultIconProps), icon);
  const fullCustomisations = __spreadValues(__spreadValues({}, defaultIconCustomisations), customisations);
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}

// ../../../node_modules/.pnpm/@iconify+utils@2.1.11/node_modules/@iconify/utils/lib/icon/transformations.mjs
function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}

// ../../../node_modules/.pnpm/@iconify+utils@2.1.11/node_modules/@iconify/utils/lib/icon/merge.mjs
function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}

// ../../../node_modules/.pnpm/@iconify+utils@2.1.11/node_modules/@iconify/utils/lib/icon-set/tree.mjs
function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  (names || Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve);
  return resolved;
}

// ../../../node_modules/.pnpm/@iconify+utils@2.1.11/node_modules/@iconify/utils/lib/icon-set/get-icon.mjs
function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function getIconData(data, name) {
  if (data.icons[name]) {
    return internalGetIconData(data, name, []);
  }
  const tree = getIconsTree(data, [name])[name];
  return tree ? internalGetIconData(data, name, tree) : null;
}

// ../../../node_modules/.pnpm/@iconify+utils@2.1.11/node_modules/@iconify/utils/lib/loader/utils.mjs
var svgWidthRegex = /\swidth\s*=\s*["'](\w+)["']/;
var svgHeightRegex = /\sheight\s*=\s*["'](\w+)["']/;
var svgTagRegex = /<svg\s+/;
function configureSvgSize(svg, props, scale) {
  const svgNode = svg.slice(0, svg.indexOf(">"));
  const check = (prop, regex) => {
    const result = regex.exec(svgNode);
    const isSet = result != null;
    const propValue = props[prop];
    if (!propValue && !isUnsetKeyword(propValue)) {
      if (typeof scale === "number") {
        if (scale > 0) {
          props[prop] = `${scale}em`;
        }
      } else if (result) {
        props[prop] = result[1];
      }
    }
    return isSet;
  };
  return [check("width", svgWidthRegex), check("height", svgHeightRegex)];
}
function mergeIconProps(svg, collection, icon, options2, propsProvider, afterCustomizations) {
  return __async(this, null, function* () {
    var _a, _b;
    const { scale, addXmlNs = false } = options2 != null ? options2 : {};
    const { additionalProps = {}, iconCustomizer } = (_a = options2 == null ? void 0 : options2.customizations) != null ? _a : {};
    const props = (_b = yield propsProvider == null ? void 0 : propsProvider()) != null ? _b : {};
    yield iconCustomizer == null ? void 0 : iconCustomizer(collection, icon, props);
    Object.keys(additionalProps).forEach((p) => {
      const v = additionalProps[p];
      if (v !== void 0 && v !== null)
        props[p] = v;
    });
    afterCustomizations == null ? void 0 : afterCustomizations(props);
    const [widthOnSvg, heightOnSvg] = configureSvgSize(svg, props, scale);
    if (addXmlNs) {
      if (!svg.includes("xmlns=") && !props["xmlns"]) {
        props["xmlns"] = "http://www.w3.org/2000/svg";
      }
      if (!svg.includes("xmlns:xlink=") && svg.includes("xlink:") && !props["xmlns:xlink"]) {
        props["xmlns:xlink"] = "http://www.w3.org/1999/xlink";
      }
    }
    const propsToAdd = Object.keys(props).map(
      (p) => p === "width" && widthOnSvg || p === "height" && heightOnSvg ? null : `${p}="${props[p]}"`
    ).filter((p) => p != null);
    if (propsToAdd.length) {
      svg = svg.replace(svgTagRegex, `<svg ${propsToAdd.join(" ")} `);
    }
    if (options2) {
      const { defaultStyle, defaultClass } = options2;
      if (defaultClass && !svg.includes("class=")) {
        svg = svg.replace(svgTagRegex, `<svg class="${defaultClass}" `);
      }
      if (defaultStyle && !svg.includes("style=")) {
        svg = svg.replace(svgTagRegex, `<svg style="${defaultStyle}" `);
      }
    }
    const usedProps = options2 == null ? void 0 : options2.usedProps;
    if (usedProps) {
      Object.keys(additionalProps).forEach((p) => {
        const v = props[p];
        if (v !== void 0 && v !== null)
          usedProps[p] = v;
      });
      if (typeof props.width !== "undefined" && props.width !== null) {
        usedProps.width = props.width;
      }
      if (typeof props.height !== "undefined" && props.height !== null) {
        usedProps.height = props.height;
      }
    }
    return svg;
  });
}

// ../../../node_modules/.pnpm/@iconify+utils@2.1.11/node_modules/@iconify/utils/lib/loader/modern.mjs
var import_debug = __toESM(require_src(), 1);
var debug = (0, import_debug.default)("@iconify-loader:icon");
function searchForIcon(iconSet, collection, ids, options2) {
  return __async(this, null, function* () {
    var _a;
    let iconData;
    const { customize } = (_a = options2 == null ? void 0 : options2.customizations) != null ? _a : {};
    for (const id of ids) {
      iconData = getIconData(iconSet, id);
      if (iconData) {
        debug(`${collection}:${id}`);
        let defaultCustomizations = __spreadValues({}, defaultIconCustomisations);
        if (typeof customize === "function")
          defaultCustomizations = customize(defaultCustomizations);
        const _b = iconToSVG(iconData, defaultCustomizations), {
          attributes: _c
        } = _b, _d = _c, { width, height } = _d, restAttributes = __objRest(_d, ["width", "height"]), {
          body
        } = _b;
        const scale = options2 == null ? void 0 : options2.scale;
        return yield mergeIconProps(
          // DON'T remove space on <svg >
          `<svg >${body}</svg>`,
          collection,
          id,
          options2,
          () => {
            return __spreadValues({}, restAttributes);
          },
          (props) => {
            const check = (prop, defaultValue) => {
              const propValue = props[prop];
              let value;
              if (!isUnsetKeyword(propValue)) {
                if (propValue) {
                  return;
                }
                if (typeof scale === "number") {
                  if (scale) {
                    value = `${scale}em`;
                  }
                } else {
                  value = defaultValue;
                }
              }
              if (!value) {
                delete props[prop];
              } else {
                props[prop] = value;
              }
            };
            check("width", width);
            check("height", height);
          }
        );
      }
    }
  });
}

// ../../../node_modules/.pnpm/@iconify+utils@2.1.11/node_modules/@iconify/utils/lib/loader/fs.mjs
import { promises } from "fs";

// ../../../node_modules/.pnpm/local-pkg@0.4.3/node_modules/local-pkg/index.mjs
import { createRequire } from "module";
var import_meta = {};
var _require = createRequire(import_meta.url);
function resolveModule(name, options2) {
  try {
    return _require.resolve(name, options2);
  } catch (e) {
    return void 0;
  }
}
function isPackageExists(name, options2) {
  return !!resolvePackage(name, options2);
}
function resolvePackage(name, options2 = {}) {
  try {
    return _require.resolve(`${name}/package.json`, options2);
  } catch (e) {
  }
  try {
    return _require.resolve(name, options2);
  } catch (e) {
    if (e.code !== "MODULE_NOT_FOUND")
      console.error(e);
    return false;
  }
}

// ../../../node_modules/.pnpm/@antfu+install-pkg@0.1.1/node_modules/@antfu/install-pkg/dist/index.mjs
var import_find_up = __toESM(require_find_up(), 1);
var import_execa = __toESM(require_execa(), 1);
import fs from "fs";
import path from "path";
var AGENTS = ["pnpm", "yarn", "npm", "pnpm@6", "yarn@berry", "bun"];
var LOCKS = {
  "bun.lockb": "bun",
  "pnpm-lock.yaml": "pnpm",
  "yarn.lock": "yarn",
  "package-lock.json": "npm",
  "npm-shrinkwrap.json": "npm"
};
function detectPackageManager() {
  return __async(this, arguments, function* (cwd = process.cwd()) {
    let agent = null;
    const lockPath = yield (0, import_find_up.default)(Object.keys(LOCKS), { cwd });
    let packageJsonPath;
    if (lockPath)
      packageJsonPath = path.resolve(lockPath, "../package.json");
    else
      packageJsonPath = yield (0, import_find_up.default)("package.json", { cwd });
    if (packageJsonPath && fs.existsSync(packageJsonPath)) {
      try {
        const pkg = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
        if (typeof pkg.packageManager === "string") {
          const [name, version] = pkg.packageManager.split("@");
          if (name === "yarn" && parseInt(version) > 1)
            agent = "yarn@berry";
          else if (name === "pnpm" && parseInt(version) < 7)
            agent = "pnpm@6";
          else if (name in AGENTS)
            agent = name;
          else
            console.warn("[ni] Unknown packageManager:", pkg.packageManager);
        }
      } catch (e) {
      }
    }
    if (!agent && lockPath)
      agent = LOCKS[path.basename(lockPath)];
    return agent;
  });
}
function installPackage(_0) {
  return __async(this, arguments, function* (names, options2 = {}) {
    const detectedAgent = options2.packageManager || (yield detectPackageManager(options2.cwd)) || "npm";
    const [agent] = detectedAgent.split("@");
    if (!Array.isArray(names))
      names = [names];
    const args = options2.additionalArgs || [];
    if (options2.preferOffline) {
      if (detectedAgent === "yarn@berry")
        args.unshift("--cached");
      else
        args.unshift("--prefer-offline");
    }
    return (0, import_execa.default)(
      agent,
      [
        agent === "yarn" ? "add" : "install",
        options2.dev ? "-D" : "",
        ...args,
        ...names
      ].filter(Boolean),
      {
        stdio: options2.silent ? "ignore" : "inherit",
        cwd: options2.cwd
      }
    );
  });
}

// ../../../node_modules/.pnpm/@antfu+utils@0.7.6/node_modules/@antfu/utils/dist/index.mjs
function sleep(ms, callback) {
  return new Promise(
    (resolve) => setTimeout(() => __async(this, null, function* () {
      yield callback == null ? void 0 : callback();
      resolve();
    }), ms)
  );
}
var Node = class {
  constructor(value) {
    __publicField(this, "value");
    __publicField(this, "next");
    this.value = value;
  }
};
var _head, _tail, _size;
var Queue = class {
  constructor() {
    __privateAdd(this, _head, void 0);
    __privateAdd(this, _tail, void 0);
    __privateAdd(this, _size, void 0);
    this.clear();
  }
  enqueue(value) {
    const node = new Node(value);
    if (__privateGet(this, _head)) {
      __privateGet(this, _tail).next = node;
      __privateSet(this, _tail, node);
    } else {
      __privateSet(this, _head, node);
      __privateSet(this, _tail, node);
    }
    __privateWrapper(this, _size)._++;
  }
  dequeue() {
    const current = __privateGet(this, _head);
    if (!current) {
      return;
    }
    __privateSet(this, _head, __privateGet(this, _head).next);
    __privateWrapper(this, _size)._--;
    return current.value;
  }
  clear() {
    __privateSet(this, _head, void 0);
    __privateSet(this, _tail, void 0);
    __privateSet(this, _size, 0);
  }
  get size() {
    return __privateGet(this, _size);
  }
  *[Symbol.iterator]() {
    let current = __privateGet(this, _head);
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
};
_head = new WeakMap();
_tail = new WeakMap();
_size = new WeakMap();
var VOID = Symbol("p-void");

// ../../../node_modules/.pnpm/kolorist@1.8.0/node_modules/kolorist/dist/esm/index.mjs
var enabled = true;
var globalVar = typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
var supportLevel = 0;
if (globalVar.process && globalVar.process.env && globalVar.process.stdout) {
  const { FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM, COLORTERM } = globalVar.process.env;
  if (NODE_DISABLE_COLORS || NO_COLOR || FORCE_COLOR === "0") {
    enabled = false;
  } else if (FORCE_COLOR === "1" || FORCE_COLOR === "2" || FORCE_COLOR === "3") {
    enabled = true;
  } else if (TERM === "dumb") {
    enabled = false;
  } else if ("CI" in globalVar.process.env && [
    "TRAVIS",
    "CIRCLECI",
    "APPVEYOR",
    "GITLAB_CI",
    "GITHUB_ACTIONS",
    "BUILDKITE",
    "DRONE"
  ].some((vendor) => vendor in globalVar.process.env)) {
    enabled = true;
  } else {
    enabled = process.stdout.isTTY;
  }
  if (enabled) {
    if (process.platform === "win32") {
      supportLevel = 3;
    } else {
      if (COLORTERM && (COLORTERM === "truecolor" || COLORTERM === "24bit")) {
        supportLevel = 3;
      } else if (TERM && (TERM.endsWith("-256color") || TERM.endsWith("256"))) {
        supportLevel = 2;
      } else {
        supportLevel = 1;
      }
    }
  }
}
var options = {
  enabled,
  supportLevel
};
function kolorist(start, end, level = 1) {
  const open = `\x1B[${start}m`;
  const close = `\x1B[${end}m`;
  const regex = new RegExp(`\\x1b\\[${end}m`, "g");
  return (str) => {
    return options.enabled && options.supportLevel >= level ? open + ("" + str).replace(regex, open) + close : "" + str;
  };
}
var reset = kolorist(0, 0);
var bold = kolorist(1, 22);
var dim = kolorist(2, 22);
var italic = kolorist(3, 23);
var underline = kolorist(4, 24);
var inverse = kolorist(7, 27);
var hidden = kolorist(8, 28);
var strikethrough = kolorist(9, 29);
var black = kolorist(30, 39);
var red = kolorist(31, 39);
var green = kolorist(32, 39);
var yellow = kolorist(33, 39);
var blue = kolorist(34, 39);
var magenta = kolorist(35, 39);
var cyan = kolorist(36, 39);
var white = kolorist(97, 39);
var gray = kolorist(90, 39);
var lightGray = kolorist(37, 39);
var lightRed = kolorist(91, 39);
var lightGreen = kolorist(92, 39);
var lightYellow = kolorist(93, 39);
var lightBlue = kolorist(94, 39);
var lightMagenta = kolorist(95, 39);
var lightCyan = kolorist(96, 39);
var bgBlack = kolorist(40, 49);
var bgRed = kolorist(41, 49);
var bgGreen = kolorist(42, 49);
var bgYellow = kolorist(43, 49);
var bgBlue = kolorist(44, 49);
var bgMagenta = kolorist(45, 49);
var bgCyan = kolorist(46, 49);
var bgWhite = kolorist(107, 49);
var bgGray = kolorist(100, 49);
var bgLightRed = kolorist(101, 49);
var bgLightGreen = kolorist(102, 49);
var bgLightYellow = kolorist(103, 49);
var bgLightBlue = kolorist(104, 49);
var bgLightMagenta = kolorist(105, 49);
var bgLightCyan = kolorist(106, 49);
var bgLightGray = kolorist(47, 49);

// ../../../node_modules/.pnpm/@iconify+utils@2.1.11/node_modules/@iconify/utils/lib/loader/warn.mjs
var warned = /* @__PURE__ */ new Set();
function warnOnce(msg) {
  if (!warned.has(msg)) {
    warned.add(msg);
    console.warn(yellow(`[@iconify-loader] ${msg}`));
  }
}

// ../../../node_modules/.pnpm/@iconify+utils@2.1.11/node_modules/@iconify/utils/lib/loader/install-pkg.mjs
var pending;
var tasks = {};
function tryInstallPkg(name, autoInstall) {
  return __async(this, null, function* () {
    if (pending) {
      yield pending;
    }
    if (!tasks[name]) {
      console.log(cyan(`Installing ${name}...`));
      if (typeof autoInstall === "function") {
        tasks[name] = pending = autoInstall(name).then(() => sleep(300)).finally(() => {
          pending = void 0;
        });
      } else {
        tasks[name] = pending = installPackage(name, {
          dev: true,
          preferOffline: true
        }).then(() => sleep(300)).catch((e) => {
          warnOnce(`Failed to install ${name}`);
          console.error(e);
        }).finally(() => {
          pending = void 0;
        });
      }
    }
    return tasks[name];
  });
}

// ../../../node_modules/.pnpm/@iconify+utils@2.1.11/node_modules/@iconify/utils/lib/loader/fs.mjs
var _collections = {};
var isLegacyExists = isPackageExists("@iconify/json");
function loadCollectionFromFS(name, autoInstall = false) {
  return __async(this, null, function* () {
    if (!(yield _collections[name])) {
      _collections[name] = task();
    }
    return _collections[name];
    function task() {
      return __async(this, null, function* () {
        let jsonPath = resolveModule(`@iconify-json/${name}/icons.json`);
        if (!jsonPath && isLegacyExists) {
          jsonPath = resolveModule(`@iconify/json/json/${name}.json`);
        }
        if (!jsonPath && !isLegacyExists && autoInstall) {
          yield tryInstallPkg(`@iconify-json/${name}`, autoInstall);
          jsonPath = resolveModule(`@iconify-json/${name}/icons.json`);
        }
        let stat;
        try {
          stat = jsonPath ? yield promises.lstat(jsonPath) : void 0;
        } catch (err) {
          return void 0;
        }
        if (stat == null ? void 0 : stat.isFile()) {
          return JSON.parse(
            yield promises.readFile(jsonPath, "utf8")
          );
        } else {
          return void 0;
        }
      });
    }
  });
}

// ../../../node_modules/.pnpm/@iconify+utils@2.1.11/node_modules/@iconify/utils/lib/loader/custom.mjs
var import_debug2 = __toESM(require_src(), 1);

// ../../../node_modules/.pnpm/@iconify+utils@2.1.11/node_modules/@iconify/utils/lib/svg/trim.mjs
function trimSVG(str) {
  return str.replace(/(['"])\s*\n\s*([^>\\/\s])/g, "$1 $2").replace(/(["';{}><])\s*\n\s*/g, "$1").replace(/\s*\n\s*/g, " ").replace(/\s+"/g, '"').replace(/="\s+/g, '="').trim();
}

// ../../../node_modules/.pnpm/@iconify+utils@2.1.11/node_modules/@iconify/utils/lib/loader/custom.mjs
var debug2 = (0, import_debug2.default)("@iconify-loader:custom");
function getCustomIcon(custom, collection, icon, options2) {
  return __async(this, null, function* () {
    var _a, _b;
    let result;
    debug2(`${collection}:${icon}`);
    try {
      if (typeof custom === "function") {
        result = yield custom(icon);
      } else {
        const inline = custom[icon];
        result = typeof inline === "function" ? yield inline() : inline;
      }
    } catch (err) {
      console.warn(
        `Failed to load custom icon "${icon}" in "${collection}":`,
        err
      );
      return;
    }
    if (result) {
      const cleanupIdx = result.indexOf("<svg");
      if (cleanupIdx > 0)
        result = result.slice(cleanupIdx);
      const { transform } = (_a = options2 == null ? void 0 : options2.customizations) != null ? _a : {};
      result = typeof transform === "function" ? yield transform(result, collection, icon) : result;
      if (!result.startsWith("<svg")) {
        console.warn(
          `Custom icon "${icon}" in "${collection}" is not a valid SVG`
        );
        return result;
      }
      return yield mergeIconProps(
        ((_b = options2 == null ? void 0 : options2.customizations) == null ? void 0 : _b.trimCustomSvg) === true ? trimSVG(result) : result,
        collection,
        icon,
        options2,
        void 0
      );
    }
  });
}

// ../../../node_modules/.pnpm/@iconify+utils@2.1.11/node_modules/@iconify/utils/lib/loader/loader.mjs
var import_debug3 = __toESM(require_src(), 1);
var loadIcon = (collection, icon, options2) => __async(void 0, null, function* () {
  var _a;
  const custom = (_a = options2 == null ? void 0 : options2.customCollections) == null ? void 0 : _a[collection];
  if (custom) {
    if (typeof custom === "function") {
      let result;
      try {
        result = yield custom(icon);
      } catch (err) {
        console.warn(
          `Failed to load custom icon "${icon}" in "${collection}":`,
          err
        );
        return;
      }
      if (result) {
        if (typeof result === "string") {
          return yield getCustomIcon(
            () => result,
            collection,
            icon,
            options2
          );
        }
        if ("icons" in result) {
          const ids = [
            icon,
            icon.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
            icon.replace(/([a-z])(\d+)/g, "$1-$2")
          ];
          return yield searchForIcon(
            result,
            collection,
            ids,
            options2
          );
        }
      }
    } else {
      return yield getCustomIcon(custom, collection, icon, options2);
    }
  }
});

// ../../../node_modules/.pnpm/@iconify+utils@2.1.11/node_modules/@iconify/utils/lib/loader/node-loader.mjs
var import_debug4 = __toESM(require_src(), 1);
var loadNodeIcon = (collection, icon, options2) => __async(void 0, null, function* () {
  let result = yield loadIcon(collection, icon, options2);
  if (result) {
    return result;
  }
  const iconSet = yield loadCollectionFromFS(
    collection,
    options2 == null ? void 0 : options2.autoInstall
  );
  if (iconSet) {
    const ids = [
      icon,
      icon.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
      icon.replace(/([a-z])(\d+)/g, "$1-$2")
    ];
    result = yield searchForIcon(iconSet, collection, ids, options2);
  }
  if (!result && (options2 == null ? void 0 : options2.warn)) {
    warnOnce(`failed to load ${options2.warn} icon`);
  }
  return result;
});
export {
  loadNodeIcon
};
