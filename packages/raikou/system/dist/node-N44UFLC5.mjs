import {
  Ti,
  Wn,
  dr,
  it,
  le,
  lt,
  te,
  wn
} from "./chunk-DDGG3GY6.mjs";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TOPM6CMB.mjs";

// ../../../node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs
import http from "http";
import https from "https";

// ../../../node_modules/.pnpm/node-fetch-native@1.4.0/node_modules/node-fetch-native/dist/index.mjs
var a = Object.defineProperty;
var t = (e, r2) => a(e, "name", { value: r2, configurable: true });
var f = Object.defineProperty;
var g = t((e, r2) => f(e, "name", { value: r2, configurable: true }), "e");
var _a, _b;
var o = !!((_b = (_a = globalThis.process) == null ? void 0 : _a.env) == null ? void 0 : _b.FORCE_NODE_FETCH);
function l() {
  return !o && globalThis.fetch ? globalThis.fetch : Ti;
}
t(l, "p"), g(l, "_getFetch");
var s = l();
var T = !o && globalThis.Blob || it;
var R = !o && globalThis.File || wn;
var u = !o && globalThis.FormData || dr;
var d = !o && globalThis.Headers || le;
var $ = !o && globalThis.Request || lt;
var C = !o && globalThis.Response || te;
var A = !o && globalThis.AbortController || Wn;

// ../../../node_modules/.pnpm/destr@2.0.1/node_modules/destr/dist/index.mjs
var suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
var JsonSigRx = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (value[0] === '"' && value[value.length - 1] === '"') {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

// ../../../node_modules/.pnpm/ufo@1.3.1/node_modules/ufo/dist/index.mjs
var r = String.fromCharCode;
var HASH_RE = /#/g;
var AMPERSAND_RE = /&/g;
var EQUAL_RE = /=/g;
var PLUS_RE = /\+/g;
var ENC_CARET_RE = /%5e/gi;
var ENC_BACKTICK_RE = /%60/gi;
var ENC_PIPE_RE = /%7c/gi;
var ENC_SPACE_RE = /%20/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch (e) {
    return "" + text;
  }
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s2 = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s2.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s2[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s2[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}
var PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
var PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
var PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
var TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s2] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s2.length > 0 ? `?${s2.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s2] = input.split("?");
  return s0 + "/" + (s2.length > 0 ? `?${s2.join("?")}` : "");
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = __spreadValues(__spreadValues({}, parseQuery(parsed.search)), query);
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
var JOIN_LEADING_SLASH_RE = /^\.?\//;
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto,
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  const [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  const { pathname, search, hash } = parsePath(
    path.replace(/\/(?=[A-Za-z]:)/, "")
  );
  return {
    protocol,
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol ? parsed.protocol + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

// ../../../node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/shared/ofetch.00501375.mjs
var FetchError = class extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if ((opts == null ? void 0 : opts.cause) && !this.cause) {
      this.cause = opts.cause;
    }
  }
};
function createFetchError(ctx) {
  var _a2, _b2, _c, _d, _e;
  const errorMessage = ((_a2 = ctx.error) == null ? void 0 : _a2.message) || ((_b2 = ctx.error) == null ? void 0 : _b2.toString()) || "";
  const method = ((_c = ctx.request) == null ? void 0 : _c.method) || ((_d = ctx.options) == null ? void 0 : _d.method) || "GET";
  const url = ((_e = ctx.request) == null ? void 0 : _e.url) || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}
var payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t2 = typeof value;
  if (t2 === "string" || t2 === "number" || t2 === "boolean" || t2 === null) {
    return true;
  }
  if (t2 !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
var textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
var JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function mergeFetchOptions(input, defaults, Headers2 = globalThis.Headers) {
  const merged = __spreadValues(__spreadValues({}, defaults), input);
  if ((defaults == null ? void 0 : defaults.params) && (input == null ? void 0 : input.params)) {
    merged.params = __spreadValues(__spreadValues({}, defaults == null ? void 0 : defaults.params), input == null ? void 0 : input.params);
  }
  if ((defaults == null ? void 0 : defaults.query) && (input == null ? void 0 : input.query)) {
    merged.query = __spreadValues(__spreadValues({}, defaults == null ? void 0 : defaults.query), input == null ? void 0 : input.query);
  }
  if ((defaults == null ? void 0 : defaults.headers) && (input == null ? void 0 : input.headers)) {
    merged.headers = new Headers2((defaults == null ? void 0 : defaults.headers) || {});
    for (const [key, value] of new Headers2((input == null ? void 0 : input.headers) || {})) {
      merged.headers.set(key, value);
    }
  }
  return merged;
}
var retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  //  Gateway Timeout
]);
var nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch(globalOptions = {}) {
  const {
    fetch: fetch2 = globalThis.fetch,
    Headers: Headers2 = globalThis.Headers,
    AbortController: AbortController2 = globalThis.AbortController
  } = globalOptions;
  function onError(context) {
    return __async(this, null, function* () {
      const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
      if (context.options.retry !== false && !isAbort) {
        let retries;
        if (typeof context.options.retry === "number") {
          retries = context.options.retry;
        } else {
          retries = isPayloadMethod(context.options.method) ? 0 : 1;
        }
        const responseCode = context.response && context.response.status || 500;
        if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
          const retryDelay = context.options.retryDelay || 0;
          if (retryDelay > 0) {
            yield new Promise((resolve) => setTimeout(resolve, retryDelay));
          }
          return $fetchRaw(context.request, __spreadProps(__spreadValues({}, context.options), {
            retry: retries - 1,
            timeout: context.options.timeout
          }));
        }
      }
      const error = createFetchError(context);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(error, $fetchRaw);
      }
      throw error;
    });
  }
  const $fetchRaw = function $fetchRaw2(_0) {
    return __async(this, arguments, function* (_request, _options = {}) {
      var _a2;
      const context = {
        request: _request,
        options: mergeFetchOptions(_options, globalOptions.defaults, Headers2),
        response: void 0,
        error: void 0
      };
      context.options.method = (_a2 = context.options.method) == null ? void 0 : _a2.toUpperCase();
      if (context.options.onRequest) {
        yield context.options.onRequest(context);
      }
      if (typeof context.request === "string") {
        if (context.options.baseURL) {
          context.request = withBase(context.request, context.options.baseURL);
        }
        if (context.options.query || context.options.params) {
          context.request = withQuery(context.request, __spreadValues(__spreadValues({}, context.options.params), context.options.query));
        }
      }
      if (context.options.body && isPayloadMethod(context.options.method)) {
        if (isJSONSerializable(context.options.body)) {
          context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
          context.options.headers = new Headers2(context.options.headers || {});
          if (!context.options.headers.has("content-type")) {
            context.options.headers.set("content-type", "application/json");
          }
          if (!context.options.headers.has("accept")) {
            context.options.headers.set("accept", "application/json");
          }
        } else if (
          // ReadableStream Body
          "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
          typeof context.options.body.pipe === "function"
        ) {
          if (!("duplex" in context.options)) {
            context.options.duplex = "half";
          }
        }
      }
      if (!context.options.signal && context.options.timeout) {
        const controller = new AbortController2();
        setTimeout(() => controller.abort(), context.options.timeout);
        context.options.signal = controller.signal;
      }
      try {
        context.response = yield fetch2(
          context.request,
          context.options
        );
      } catch (error) {
        context.error = error;
        if (context.options.onRequestError) {
          yield context.options.onRequestError(context);
        }
        return yield onError(context);
      }
      const hasBody = context.response.body && !nullBodyResponses.has(context.response.status) && context.options.method !== "HEAD";
      if (hasBody) {
        const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
        switch (responseType) {
          case "json": {
            const data = yield context.response.text();
            const parseFunction = context.options.parseResponse || destr;
            context.response._data = parseFunction(data);
            break;
          }
          case "stream": {
            context.response._data = context.response.body;
            break;
          }
          default: {
            context.response._data = yield context.response[responseType]();
          }
        }
      }
      if (context.options.onResponse) {
        yield context.options.onResponse(context);
      }
      if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
        if (context.options.onResponseError) {
          yield context.options.onResponseError(context);
        }
        return yield onError(context);
      }
      return context.response;
    });
  };
  const $fetch2 = function $fetch22(request, options) {
    return __async(this, null, function* () {
      const r2 = yield $fetchRaw(request, options);
      return r2._data;
    });
  };
  $fetch2.raw = $fetchRaw;
  $fetch2.native = (...args) => fetch2(...args);
  $fetch2.create = (defaultOptions = {}) => createFetch(__spreadProps(__spreadValues({}, globalOptions), {
    defaults: __spreadValues(__spreadValues({}, globalOptions.defaults), defaultOptions)
  }));
  return $fetch2;
}

// ../../../node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs
function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return s;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http.Agent(agentOptions);
  const httpsAgent = new https.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return s(input, __spreadValues(__spreadValues({}, nodeFetchOptions), init));
  };
}
var fetch = globalThis.fetch || createNodeFetch();
var Headers = globalThis.Headers || d;
var AbortController = globalThis.AbortController || A;
var ofetch = createFetch({ fetch, Headers, AbortController });
var $fetch = ofetch;
export {
  $fetch,
  AbortController,
  FetchError,
  Headers,
  createFetch,
  createFetchError,
  createNodeFetch,
  fetch,
  ofetch
};
