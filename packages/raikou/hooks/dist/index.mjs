// src/utils/clamp/clamp.ts
function clamp(value, min, max) {
  if (min === void 0 && max === void 0) {
    return value;
  }
  if (min !== void 0 && max === void 0) {
    return Math.max(value, min);
  }
  if (min === void 0 && max !== void 0) {
    return Math.min(value, max);
  }
  return Math.min(Math.max(value, min), max);
}

// src/utils/lower-first/lower-first.ts
function lowerFirst(value) {
  return typeof value !== "string" ? "" : value.charAt(0).toLowerCase() + value.slice(1);
}

// src/utils/random-id/random-id.ts
function randomId() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}

// src/utils/range/range.ts
function range(start, end) {
  const length = Math.abs(end - start) + 1;
  const reversed = start > end;
  if (!reversed) {
    return Array.from({ length }, (_, index) => index + start);
  }
  return Array.from({ length }, (_, index) => start - index);
}

// src/utils/shallow-equal/shallow-equal.ts
function shallowEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (!(a instanceof Object) || !(b instanceof Object)) {
    return false;
  }
  const keys = Object.keys(a);
  const { length } = keys;
  if (length !== Object.keys(b).length) {
    return false;
  }
  for (let i = 0; i < length; i += 1) {
    const key = keys[i];
    if (!(key in b)) {
      return false;
    }
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

// src/utils/upper-first/upper-first.ts
function upperFirst(value) {
  return typeof value !== "string" ? "" : value.charAt(0).toUpperCase() + value.slice(1);
}

// src/use-callback-ref/use-callback-ref.ts
import { useEffect, useMemo, useRef } from "react";
function useCallbackRef(callback) {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  });
  return useMemo(() => (...args) => {
    var _a;
    return (_a = callbackRef.current) == null ? void 0 : _a.call(callbackRef, ...args);
  }, []);
}

// src/use-debounced-callback/use-debounced-callback.ts
import { useCallback, useEffect as useEffect2, useRef as useRef2 } from "react";
function useDebouncedCallback(callback, delay) {
  const handleCallback = useCallbackRef(callback);
  const debounceTimerRef = useRef2(0);
  useEffect2(() => () => window.clearTimeout(debounceTimerRef.current), []);
  return useCallback(
    (...args) => {
      window.clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = window.setTimeout(() => handleCallback(...args), delay);
    },
    [handleCallback, delay]
  );
}

// src/use-click-outside/use-click-outside.ts
import { useEffect as useEffect3, useRef as useRef3 } from "react";
var DEFAULT_EVENTS = ["mousedown", "touchstart"];
function useClickOutside(handler, events, nodes) {
  const ref = useRef3();
  useEffect3(() => {
    const listener = (event) => {
      const { target } = event ?? {};
      if (Array.isArray(nodes)) {
        const shouldIgnore = (target == null ? void 0 : target.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(target) && target.tagName !== "HTML";
        const shouldTrigger = nodes.every((node) => !!node && !event.composedPath().includes(node));
        shouldTrigger && !shouldIgnore && handler();
      } else if (ref.current && !ref.current.contains(target)) {
        handler();
      }
    };
    (events || DEFAULT_EVENTS).forEach((fn) => document.addEventListener(fn, listener));
    return () => {
      (events || DEFAULT_EVENTS).forEach((fn) => document.removeEventListener(fn, listener));
    };
  }, [ref, handler, nodes]);
  return ref;
}

// src/use-clipboard/use-clipboard.ts
import { useState } from "react";
function useClipboard({ timeout = 2e3 } = {}) {
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [copyTimeout, setCopyTimeout] = useState(null);
  const handleCopyResult = (value) => {
    window.clearTimeout(copyTimeout);
    setCopyTimeout(window.setTimeout(() => setCopied(false), timeout));
    setCopied(value);
  };
  const copy = (valueToCopy) => {
    if ("clipboard" in navigator) {
      navigator.clipboard.writeText(valueToCopy).then(() => handleCopyResult(true)).catch((err) => setError(err));
    } else {
      setError(new Error("useClipboard: navigator.clipboard is not supported"));
    }
  };
  const reset = () => {
    setCopied(false);
    setError(null);
    window.clearTimeout(copyTimeout);
  };
  return { copy, reset, error, copied };
}

// src/use-media-query/use-media-query.ts
import { useEffect as useEffect4, useRef as useRef4, useState as useState2 } from "react";
function attachMediaListener(query, callback) {
  try {
    query.addEventListener("change", callback);
    return () => query.removeEventListener("change", callback);
  } catch (e) {
    query.addListener(callback);
    return () => query.removeListener(callback);
  }
}
function getInitialValue(query, initialValue) {
  if (typeof initialValue === "boolean") {
    return initialValue;
  }
  if (typeof window !== "undefined" && "matchMedia" in window) {
    return window.matchMedia(query).matches;
  }
  return false;
}
function useMediaQuery(query, initialValue, { getInitialValueInEffect } = {
  getInitialValueInEffect: true
}) {
  const [matches, setMatches] = useState2(
    getInitialValueInEffect ? initialValue : getInitialValue(query)
  );
  const queryRef = useRef4();
  useEffect4(() => {
    if ("matchMedia" in window) {
      queryRef.current = window.matchMedia(query);
      setMatches(queryRef.current.matches);
      return attachMediaListener(queryRef.current, (event) => setMatches(event.matches));
    }
    return void 0;
  }, [query]);
  return matches;
}

// src/use-color-scheme/use-color-scheme.ts
function useColorScheme(initialValue, options) {
  return useMediaQuery("(prefers-color-scheme: dark)", initialValue === "dark", options) ? "dark" : "light";
}

// src/use-counter/use-counter.ts
import { useState as useState3 } from "react";
var DEFAULT_OPTIONS = {
  min: -Infinity,
  max: Infinity
};
function useCounter(initialValue = 0, options) {
  const { min, max } = { ...DEFAULT_OPTIONS, ...options };
  const [count, setCount] = useState3(clamp(initialValue, min, max));
  const increment = () => setCount((current) => clamp(current + 1, min, max));
  const decrement = () => setCount((current) => clamp(current - 1, min, max));
  const set = (value) => setCount(clamp(value, min, max));
  const reset = () => setCount(clamp(initialValue, min, max));
  return [count, { increment, decrement, set, reset }];
}

// src/use-debounced-state/use-debounced-state.ts
import { useCallback as useCallback2, useEffect as useEffect5, useRef as useRef5, useState as useState4 } from "react";
function useDebouncedState(defaultValue, wait, options = { leading: false }) {
  const [value, setValue] = useState4(defaultValue);
  const timeoutRef = useRef5(null);
  const leadingRef = useRef5(true);
  const clearTimeout2 = () => window.clearTimeout(timeoutRef.current);
  useEffect5(() => clearTimeout2, []);
  const debouncedSetValue = useCallback2(
    (newValue) => {
      clearTimeout2();
      if (leadingRef.current && options.leading) {
        setValue(newValue);
      } else {
        timeoutRef.current = window.setTimeout(() => {
          leadingRef.current = true;
          setValue(newValue);
        }, wait);
      }
      leadingRef.current = false;
    },
    [options.leading]
  );
  return [value, debouncedSetValue];
}

// src/use-debounced-value/use-debounced-value.ts
import { useEffect as useEffect6, useRef as useRef6, useState as useState5 } from "react";
function useDebouncedValue(value, wait, options = { leading: false }) {
  const [_value, setValue] = useState5(value);
  const mountedRef = useRef6(false);
  const timeoutRef = useRef6(null);
  const cooldownRef = useRef6(false);
  const cancel = () => window.clearTimeout(timeoutRef.current);
  useEffect6(() => {
    if (mountedRef.current) {
      if (!cooldownRef.current && options.leading) {
        cooldownRef.current = true;
        setValue(value);
      } else {
        cancel();
        timeoutRef.current = window.setTimeout(() => {
          cooldownRef.current = false;
          setValue(value);
        }, wait);
      }
    }
  }, [value, options.leading, wait]);
  useEffect6(() => {
    mountedRef.current = true;
    return cancel;
  }, []);
  return [_value, cancel];
}

// src/use-isomorphic-effect/use-isomorphic-effect.ts
import { useEffect as useEffect7, useLayoutEffect } from "react";
var useIsomorphicEffect = typeof document !== "undefined" ? useLayoutEffect : useEffect7;

// src/use-document-title/use-document-title.ts
function useDocumentTitle(title) {
  useIsomorphicEffect(() => {
    if (typeof title === "string" && title.trim().length > 0) {
      document.title = title.trim();
    }
  }, [title]);
}

// src/use-document-visibility/use-document-visibility.ts
import { useEffect as useEffect8, useState as useState6 } from "react";
function useDocumentVisibility() {
  const [documentVisibility, setDocumentVisibility] = useState6("visible");
  useEffect8(() => {
    const listener = () => setDocumentVisibility(document.visibilityState);
    document.addEventListener("visibilitychange", listener);
    return () => document.removeEventListener("visibilitychange", listener);
  }, []);
  return documentVisibility;
}

// src/use-focus-return/use-focus-return.ts
import { useRef as useRef8 } from "react";

// src/use-did-update/use-did-update.ts
import { useEffect as useEffect9, useRef as useRef7 } from "react";
function useDidUpdate(fn, dependencies) {
  const mounted = useRef7(false);
  useEffect9(
    () => () => {
      mounted.current = false;
    },
    []
  );
  useEffect9(() => {
    if (mounted.current) {
      return fn();
    }
    mounted.current = true;
    return void 0;
  }, dependencies);
}

// src/use-focus-return/use-focus-return.ts
function useFocusReturn({ opened, shouldReturnFocus = true }) {
  const lastActiveElement = useRef8();
  const returnFocus = () => {
    var _a;
    if (lastActiveElement.current && "focus" in lastActiveElement.current && typeof lastActiveElement.current.focus === "function") {
      (_a = lastActiveElement.current) == null ? void 0 : _a.focus({ preventScroll: true });
    }
  };
  useDidUpdate(() => {
    let timeout = -1;
    const clearFocusTimeout = (event) => {
      if (event.key === "Tab") {
        window.clearTimeout(timeout);
      }
    };
    document.addEventListener("keydown", clearFocusTimeout);
    if (opened) {
      lastActiveElement.current = document.activeElement;
    } else if (shouldReturnFocus) {
      timeout = window.setTimeout(returnFocus, 10);
    }
    return () => {
      window.clearTimeout(timeout);
      document.removeEventListener("keydown", clearFocusTimeout);
    };
  }, [opened, shouldReturnFocus]);
  return returnFocus;
}

// src/use-focus-trap/use-focus-trap.ts
import { useCallback as useCallback3, useEffect as useEffect10, useRef as useRef9 } from "react";

// src/use-focus-trap/create-aria-hider.ts
function createAriaHider(containerNode, selector = "body > :not(script)") {
  const id = randomId();
  const rootNodes = Array.from(
    document.querySelectorAll(selector)
  ).map((node) => {
    var _a;
    if (((_a = node == null ? void 0 : node.shadowRoot) == null ? void 0 : _a.contains(containerNode)) || node.contains(containerNode)) {
      return void 0;
    }
    const ariaHidden = node.getAttribute("aria-hidden");
    const prevAriaHidden = node.getAttribute("data-hidden");
    const prevFocusId = node.getAttribute("data-focus-id");
    node.setAttribute("data-focus-id", id);
    if (ariaHidden === null || ariaHidden === "false") {
      node.setAttribute("aria-hidden", "true");
    } else if (!prevAriaHidden && !prevFocusId) {
      node.setAttribute("data-hidden", ariaHidden);
    }
    return {
      node,
      ariaHidden: prevAriaHidden || null
    };
  });
  return () => {
    rootNodes.forEach((item) => {
      if (!item || id !== item.node.getAttribute("data-focus-id")) {
        return;
      }
      if (item.ariaHidden === null) {
        item.node.removeAttribute("aria-hidden");
      } else {
        item.node.setAttribute("aria-hidden", item.ariaHidden);
      }
      item.node.removeAttribute("data-focus-id");
      item.node.removeAttribute("data-hidden");
    });
  };
}

// src/use-focus-trap/tabbable.ts
var TABBABLE_NODES = /input|select|textarea|button|object/;
var FOCUS_SELECTOR = "a, input, select, textarea, button, object, [tabindex]";
function hidden(element) {
  if (process.env.NODE_ENV === "test") {
    return false;
  }
  return element.style.display === "none";
}
function visible(element) {
  const isHidden = element.getAttribute("aria-hidden") || element.getAttribute("hidden") || element.getAttribute("type") === "hidden";
  if (isHidden) {
    return false;
  }
  let parentElement = element;
  while (parentElement) {
    if (parentElement === document.body || parentElement.nodeType === 11) {
      break;
    }
    if (hidden(parentElement)) {
      return false;
    }
    parentElement = parentElement.parentNode;
  }
  return true;
}
function getElementTabIndex(element) {
  let tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) {
    tabIndex = void 0;
  }
  return parseInt(tabIndex, 10);
}
function focusable(element) {
  const nodeName = element.nodeName.toLowerCase();
  const isTabIndexNotNaN = !Number.isNaN(getElementTabIndex(element));
  const res = (
    // @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition
    TABBABLE_NODES.test(nodeName) && !element.disabled || (element instanceof HTMLAnchorElement ? element.href || isTabIndexNotNaN : isTabIndexNotNaN)
  );
  return res && visible(element);
}
function tabbable(element) {
  const tabIndex = getElementTabIndex(element);
  const isTabIndexNaN = Number.isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element);
}
function findTabbableDescendants(element) {
  return Array.from(element.querySelectorAll(FOCUS_SELECTOR)).filter(tabbable);
}

// src/use-focus-trap/scope-tab.ts
function scopeTab(node, event) {
  const tabbable2 = findTabbableDescendants(node);
  if (!tabbable2.length) {
    event.preventDefault();
    return;
  }
  const finalTabbable = tabbable2[event.shiftKey ? 0 : tabbable2.length - 1];
  const root = node.getRootNode();
  let leavingFinalTabbable = finalTabbable === root.activeElement || node === root.activeElement;
  const activeElement = root.activeElement;
  const activeElementIsRadio = activeElement.tagName === "INPUT" && activeElement.getAttribute("type") === "radio";
  if (activeElementIsRadio) {
    const activeRadioGroup = tabbable2.filter(
      (element) => element.getAttribute("type") === "radio" && element.getAttribute("name") === activeElement.getAttribute("name")
    );
    leavingFinalTabbable = activeRadioGroup.includes(finalTabbable);
  }
  if (!leavingFinalTabbable) {
    return;
  }
  event.preventDefault();
  const target = tabbable2[event.shiftKey ? tabbable2.length - 1 : 0];
  if (target) {
    target.focus();
  }
}

// src/use-focus-trap/use-focus-trap.ts
function useFocusTrap(active = true) {
  const ref = useRef9();
  const restoreAria = useRef9(null);
  const focusNode = (node) => {
    let focusElement = node.querySelector("[data-autofocus]");
    if (!focusElement) {
      const children = Array.from(
        node.querySelectorAll(FOCUS_SELECTOR)
      );
      focusElement = children.find(tabbable) || children.find(focusable) || null;
      if (!focusElement && focusable(node))
        focusElement = node;
    }
    if (focusElement) {
      focusElement.focus({ preventScroll: true });
    } else if (process.env.NODE_ENV === "development") {
      console.warn(
        "[@raikou/hooks/use-focus-trap] Failed to find focusable element within provided node",
        node
      );
    }
  };
  const setRef = useCallback3(
    (node) => {
      if (!active) {
        return;
      }
      if (node === null) {
        if (restoreAria.current) {
          restoreAria.current();
          restoreAria.current = null;
        }
        return;
      }
      restoreAria.current = createAriaHider(node);
      if (ref.current === node) {
        return;
      }
      if (node) {
        setTimeout(() => {
          if (node.getRootNode()) {
            focusNode(node);
          } else if (process.env.NODE_ENV === "development") {
            console.warn(
              "[@raikou/hooks/use-focus-trap] Ref node is not part of the dom",
              node
            );
          }
        });
        ref.current = node;
      } else {
        ref.current = null;
      }
    },
    [active]
  );
  useEffect10(() => {
    if (!active) {
      return void 0;
    }
    ref.current && setTimeout(() => focusNode(ref.current));
    const handleKeyDown = (event) => {
      if (event.key === "Tab" && ref.current) {
        scopeTab(ref.current, event);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (restoreAria.current) {
        restoreAria.current();
      }
    };
  }, [active]);
  return setRef;
}

// src/use-force-update/use-force-update.ts
import { useReducer } from "react";
var reducer = (value) => (value + 1) % 1e6;
function useForceUpdate() {
  const [, update] = useReducer(reducer, 0);
  return update;
}

// src/use-id/use-id.ts
import { useState as useState7 } from "react";

// src/use-id/use-react-id.ts
import React from "react";
var __useId = React["useId".toString()] || (() => void 0);
function useReactId() {
  const id = __useId();
  return id ? `mantine-${id.replace(/:/g, "")}` : "";
}

// src/use-id/use-id.ts
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

// src/use-idle/use-idle.ts
import { useEffect as useEffect11, useRef as useRef10, useState as useState8 } from "react";
var DEFAULT_EVENTS2 = [
  "keypress",
  "mousemove",
  "touchmove",
  "click",
  "scroll"
];
var DEFAULT_OPTIONS2 = {
  events: DEFAULT_EVENTS2,
  initialState: true
};
function useIdle(timeout, options) {
  const { events, initialState } = { ...DEFAULT_OPTIONS2, ...options };
  const [idle, setIdle] = useState8(initialState);
  const timer = useRef10();
  useEffect11(() => {
    const handleEvents = () => {
      setIdle(false);
      if (timer.current) {
        window.clearTimeout(timer.current);
      }
      timer.current = window.setTimeout(() => {
        setIdle(true);
      }, timeout);
    };
    events.forEach((event) => document.addEventListener(event, handleEvents));
    return () => {
      events.forEach((event) => document.removeEventListener(event, handleEvents));
    };
  }, [timeout]);
  return idle;
}

// src/use-interval/use-interval.ts
import { useEffect as useEffect12, useRef as useRef11, useState as useState9 } from "react";
function useInterval(fn, interval) {
  const [active, setActive] = useState9(false);
  const intervalRef = useRef11();
  const fnRef = useRef11();
  useEffect12(() => {
    fnRef.current = fn;
  }, [fn]);
  const start = () => {
    setActive((old) => {
      if (!old && !intervalRef.current) {
        intervalRef.current = window.setInterval(fnRef.current, interval);
      }
      return true;
    });
  };
  const stop = () => {
    setActive(false);
    window.clearInterval(intervalRef.current);
    intervalRef.current = void 0;
  };
  const toggle = () => {
    if (active) {
      stop();
    } else {
      start();
    }
  };
  return { start, stop, toggle, active };
}

// src/use-list-state/use-list-state.ts
import { useState as useState10 } from "react";
function useListState(initialValue = []) {
  const [state, setState] = useState10(initialValue);
  const append = (...items) => setState((current) => [...current, ...items]);
  const prepend = (...items) => setState((current) => [...items, ...current]);
  const insert = (index, ...items) => setState((current) => [...current.slice(0, index), ...items, ...current.slice(index)]);
  const apply = (fn) => setState((current) => current.map((item, index) => fn(item, index)));
  const remove = (...indices) => setState((current) => current.filter((_, index) => !indices.includes(index)));
  const pop = () => setState((current) => {
    const cloned = [...current];
    cloned.pop();
    return cloned;
  });
  const shift = () => setState((current) => {
    const cloned = [...current];
    cloned.shift();
    return cloned;
  });
  const reorder = ({ from, to }) => setState((current) => {
    const cloned = [...current];
    const item = current[from];
    cloned.splice(from, 1);
    cloned.splice(to, 0, item);
    return cloned;
  });
  const swap = ({ from, to }) => setState((current) => {
    const cloned = [...current];
    const fromItem = cloned[from];
    const toItem = cloned[to];
    cloned.splice(to, 1, fromItem);
    cloned.splice(from, 1, toItem);
    return cloned;
  });
  const setItem = (index, item) => setState((current) => {
    const cloned = [...current];
    cloned[index] = item;
    return cloned;
  });
  const setItemProp = (index, prop, value) => setState((current) => {
    const cloned = [...current];
    cloned[index] = { ...cloned[index], [prop]: value };
    return cloned;
  });
  const applyWhere = (condition, fn) => setState(
    (current) => current.map((item, index) => condition(item, index) ? fn(item, index) : item)
  );
  const filter = (fn) => {
    setState((current) => current.filter(fn));
  };
  return [
    state,
    {
      setState,
      append,
      prepend,
      insert,
      pop,
      shift,
      apply,
      applyWhere,
      remove,
      reorder,
      swap,
      setItem,
      setItemProp,
      filter
    }
  ];
}

// src/use-local-storage/create-storage.ts
import { useCallback as useCallback4, useEffect as useEffect14, useState as useState11 } from "react";

// src/use-window-event/use-window-event.ts
import { useEffect as useEffect13 } from "react";
function useWindowEvent(type, listener, options) {
  useEffect13(() => {
    window.addEventListener(type, listener, options);
    return () => window.removeEventListener(type, listener, options);
  }, [type, listener]);
}

// src/use-local-storage/create-storage.ts
function serializeJSON(value, hookName = "use-local-storage") {
  try {
    return JSON.stringify(value);
  } catch (error) {
    throw new Error(`@raikou/hooks ${hookName}: Failed to serialize the value`);
  }
}
function deserializeJSON(value) {
  try {
    return value && JSON.parse(value);
  } catch {
    return value;
  }
}
function createStorageHandler(type) {
  const getItem = (key) => {
    try {
      return window[type].getItem(key);
    } catch (error) {
      console.warn(
        "use-local-storage: Failed to get value from storage, localStorage is blocked"
      );
      return null;
    }
  };
  const setItem = (key, value) => {
    try {
      window[type].setItem(key, value);
    } catch (error) {
      console.warn(
        "use-local-storage: Failed to set value to storage, localStorage is blocked"
      );
    }
  };
  const removeItem = (key) => {
    try {
      window[type].removeItem(key);
    } catch (error) {
      console.warn(
        "use-local-storage: Failed to remove value from storage, localStorage is blocked"
      );
    }
  };
  return { getItem, setItem, removeItem };
}
function createStorage(type, hookName) {
  const eventName = type === "localStorage" ? "mantine-local-storage" : "mantine-session-storage";
  const { getItem, setItem, removeItem } = createStorageHandler(type);
  return function useStorage({
    key,
    defaultValue,
    getInitialValueInEffect = true,
    deserialize = deserializeJSON,
    serialize = (value) => serializeJSON(value, hookName)
  }) {
    const readStorageValue = useCallback4(
      (skipStorage) => {
        let storageBlockedOrSkipped;
        try {
          storageBlockedOrSkipped = typeof window === "undefined" || !(type in window) || window[type] === null || !!skipStorage;
        } catch (_e) {
          storageBlockedOrSkipped = true;
        }
        if (storageBlockedOrSkipped) {
          return defaultValue;
        }
        const storageValue = getItem(key);
        return storageValue !== null ? deserialize(storageValue) : defaultValue;
      },
      [key, defaultValue]
    );
    const [value, setValue] = useState11(
      readStorageValue(getInitialValueInEffect)
    );
    const setStorageValue = useCallback4(
      (val) => {
        if (val instanceof Function) {
          setValue((current) => {
            const result = val(current);
            setItem(key, serialize(result));
            window.dispatchEvent(
              new CustomEvent(eventName, {
                detail: { key, value: val(current) }
              })
            );
            return result;
          });
        } else {
          setItem(key, serialize(val));
          window.dispatchEvent(
            new CustomEvent(eventName, { detail: { key, value: val } })
          );
          setValue(val);
        }
      },
      [key]
    );
    const removeStorageValue = useCallback4(() => {
      removeItem(key);
      window.dispatchEvent(
        new CustomEvent(eventName, { detail: { key, value: defaultValue } })
      );
    }, []);
    useWindowEvent("storage", (event) => {
      if (event.storageArea === window[type] && event.key === key) {
        setValue(deserialize(event.newValue ?? void 0));
      }
    });
    useWindowEvent(eventName, (event) => {
      if (event.detail.key === key) {
        setValue(event.detail.value);
      }
    });
    useEffect14(() => {
      if (defaultValue !== void 0 && value === void 0) {
        setStorageValue(defaultValue);
      }
    }, [defaultValue, value, setStorageValue]);
    useEffect14(() => {
      const val = readStorageValue();
      val !== void 0 && setStorageValue(val);
    }, []);
    return [
      value === void 0 ? defaultValue : value,
      setStorageValue,
      removeStorageValue
    ];
  };
}
function readValue(type) {
  const { getItem } = createStorageHandler(type);
  return function read({
    key,
    defaultValue,
    deserialize = deserializeJSON
  }) {
    let storageBlockedOrSkipped;
    try {
      storageBlockedOrSkipped = typeof window === "undefined" || !(type in window) || window[type] === null;
    } catch (_e) {
      storageBlockedOrSkipped = true;
    }
    if (storageBlockedOrSkipped) {
      return defaultValue;
    }
    const storageValue = getItem(key);
    return storageValue !== null ? deserialize(storageValue) : defaultValue;
  };
}

// src/use-local-storage/use-local-storage.ts
function useLocalStorage(props) {
  return createStorage("localStorage", "use-local-storage")(props);
}
var readLocalStorageValue = readValue("localStorage");

// src/use-session-storage/use-session-storage.ts
function useSessionStorage(props) {
  return createStorage("sessionStorage", "use-session-storage")(props);
}
var readSessionStorageValue = readValue("sessionStorage");

// src/use-merged-ref/use-merged-ref.ts
import { useCallback as useCallback5 } from "react";
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (typeof ref === "object" && ref !== null && "current" in ref) {
    ref.current = value;
  }
}
function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => assignRef(ref, node));
  };
}
function useMergedRef(...refs) {
  return useCallback5(mergeRefs(...refs), refs);
}

// src/use-mouse/use-mouse.ts
import { useEffect as useEffect15, useRef as useRef12, useState as useState12 } from "react";
function useMouse(options = { resetOnExit: false }) {
  const [position, setPosition] = useState12({ x: 0, y: 0 });
  const ref = useRef12();
  const setMousePosition = (event) => {
    if (ref.current) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = Math.max(
        0,
        Math.round(event.pageX - rect.left - (window.pageXOffset || window.scrollX))
      );
      const y = Math.max(
        0,
        Math.round(event.pageY - rect.top - (window.pageYOffset || window.scrollY))
      );
      setPosition({ x, y });
    } else {
      setPosition({ x: event.clientX, y: event.clientY });
    }
  };
  const resetMousePosition = () => setPosition({ x: 0, y: 0 });
  useEffect15(() => {
    const element = (ref == null ? void 0 : ref.current) ? ref.current : document;
    element.addEventListener("mousemove", setMousePosition);
    if (options.resetOnExit)
      element.addEventListener("mouseleave", resetMousePosition);
    return () => {
      element.removeEventListener("mousemove", setMousePosition);
      if (options.resetOnExit)
        element.removeEventListener("mouseleave", resetMousePosition);
    };
  }, [ref.current]);
  return { ref, ...position };
}

// src/use-move/use-move.ts
import { useEffect as useEffect16, useRef as useRef13, useState as useState13 } from "react";
function clampUseMovePosition(position) {
  return {
    x: clamp(position.x, 0, 1),
    y: clamp(position.y, 0, 1)
  };
}
function useMove(onChange, handlers, dir = "ltr") {
  const ref = useRef13(null);
  const mounted = useRef13(false);
  const isSliding = useRef13(false);
  const frame = useRef13(0);
  const [active, setActive] = useState13(false);
  useEffect16(() => {
    mounted.current = true;
  }, []);
  useEffect16(() => {
    var _a, _b;
    const onScrub = ({ x, y }) => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        if (mounted.current && ref.current) {
          ref.current.style.userSelect = "none";
          const rect = ref.current.getBoundingClientRect();
          if (rect.width && rect.height) {
            const _x = clamp((x - rect.left) / rect.width, 0, 1);
            onChange({
              x: dir === "ltr" ? _x : 1 - _x,
              y: clamp((y - rect.top) / rect.height, 0, 1)
            });
          }
        }
      });
    };
    const bindEvents = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", stopScrubbing);
      document.addEventListener("touchmove", onTouchMove);
      document.addEventListener("touchend", stopScrubbing);
    };
    const unbindEvents = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", stopScrubbing);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", stopScrubbing);
    };
    const startScrubbing = () => {
      if (!isSliding.current && mounted.current) {
        isSliding.current = true;
        typeof (handlers == null ? void 0 : handlers.onScrubStart) === "function" && handlers.onScrubStart();
        setActive(true);
        bindEvents();
      }
    };
    const stopScrubbing = () => {
      if (isSliding.current && mounted.current) {
        isSliding.current = false;
        setActive(false);
        unbindEvents();
        setTimeout(() => {
          typeof (handlers == null ? void 0 : handlers.onScrubEnd) === "function" && handlers.onScrubEnd();
        }, 0);
      }
    };
    const onMouseDown = (event) => {
      startScrubbing();
      event.preventDefault();
      onMouseMove(event);
    };
    const onMouseMove = (event) => onScrub({ x: event.clientX, y: event.clientY });
    const onTouchStart = (event) => {
      if (event.cancelable) {
        event.preventDefault();
      }
      startScrubbing();
      onTouchMove(event);
    };
    const onTouchMove = (event) => {
      if (event.cancelable) {
        event.preventDefault();
      }
      onScrub({ x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY });
    };
    (_a = ref.current) == null ? void 0 : _a.addEventListener("mousedown", onMouseDown);
    (_b = ref.current) == null ? void 0 : _b.addEventListener("touchstart", onTouchStart, { passive: false });
    return () => {
      if (ref.current) {
        ref.current.removeEventListener("mousedown", onMouseDown);
        ref.current.removeEventListener("touchstart", onTouchStart);
      }
    };
  }, [dir, onChange]);
  return { ref, active };
}

// src/use-pagination/use-pagination.ts
import { useMemo as useMemo2 } from "react";

// src/use-uncontrolled/use-uncontrolled.ts
import { useState as useState14 } from "react";
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
  const handleUncontrolledChange = (val, ...payload) => {
    setUncontrolledValue(val);
    onChange == null ? void 0 : onChange(val, ...payload);
  };
  if (value !== void 0) {
    return [value, onChange, true];
  }
  return [uncontrolledValue, handleUncontrolledChange, false];
}

// src/use-pagination/use-pagination.ts
function range2(start, end) {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
}
var DOTS = "dots";
function usePagination({
  total,
  siblings = 1,
  boundaries = 1,
  page,
  initialPage = 1,
  onChange
}) {
  const _total = Math.max(Math.trunc(total), 0);
  const [activePage, setActivePage] = useUncontrolled({
    value: page,
    onChange,
    defaultValue: initialPage,
    finalValue: initialPage
  });
  const setPage = (pageNumber) => {
    if (pageNumber <= 0) {
      setActivePage(1);
    } else if (pageNumber > _total) {
      setActivePage(_total);
    } else {
      setActivePage(pageNumber);
    }
  };
  const next = () => setPage(activePage + 1);
  const previous = () => setPage(activePage - 1);
  const first = () => setPage(1);
  const last = () => setPage(_total);
  const paginationRange = useMemo2(() => {
    const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;
    if (totalPageNumbers >= _total) {
      return range2(1, _total);
    }
    const leftSiblingIndex = Math.max(activePage - siblings, boundaries);
    const rightSiblingIndex = Math.min(activePage + siblings, _total - boundaries);
    const shouldShowLeftDots = leftSiblingIndex > boundaries + 2;
    const shouldShowRightDots = rightSiblingIndex < _total - (boundaries + 1);
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = siblings * 2 + boundaries + 2;
      return [...range2(1, leftItemCount), DOTS, ...range2(_total - (boundaries - 1), _total)];
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = boundaries + 1 + 2 * siblings;
      return [...range2(1, boundaries), DOTS, ...range2(_total - rightItemCount, _total)];
    }
    return [
      ...range2(1, boundaries),
      DOTS,
      ...range2(leftSiblingIndex, rightSiblingIndex),
      DOTS,
      ...range2(_total - boundaries + 1, _total)
    ];
  }, [_total, siblings, activePage]);
  return {
    range: paginationRange,
    active: activePage,
    setPage,
    next,
    previous,
    first,
    last
  };
}

// src/use-queue/use-queue.ts
import { useState as useState15 } from "react";
function useQueue({ initialValues = [], limit }) {
  const [{ state, queue }, setState] = useState15({
    state: initialValues.slice(0, limit),
    queue: initialValues.slice(limit)
  });
  const add = (...items) => setState((current) => {
    const results = [...current.state, ...current.queue, ...items];
    return {
      state: results.slice(0, limit),
      queue: results.slice(limit)
    };
  });
  const update = (fn) => setState((current) => {
    const results = fn([...current.state, ...current.queue]);
    return {
      state: results.slice(0, limit),
      queue: results.slice(limit)
    };
  });
  const cleanQueue = () => setState((current) => ({ state: current.state, queue: [] }));
  return {
    state,
    queue,
    add,
    update,
    cleanQueue
  };
}

// src/use-page-leave/use-page-leave.ts
import { useEffect as useEffect17 } from "react";
function usePageLeave(onPageLeave) {
  useEffect17(() => {
    document.documentElement.addEventListener("mouseleave", onPageLeave);
    return () => document.documentElement.removeEventListener("mouseleave", onPageLeave);
  }, []);
}

// src/use-reduced-motion/use-reduced-motion.ts
function useReducedMotion(initialValue, options) {
  return useMediaQuery("(prefers-reduced-motion: reduce)", initialValue, options);
}

// src/use-scroll-into-view/use-scroll-into-view.ts
import { useCallback as useCallback6, useEffect as useEffect18, useRef as useRef14 } from "react";

// src/use-scroll-into-view/utils/ease-in-out-quad.ts
var easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

// src/use-scroll-into-view/utils/get-relative-position.ts
var getRelativePosition = ({
  axis,
  target,
  parent,
  alignment,
  offset,
  isList
}) => {
  if (!target || !parent && typeof document === "undefined") {
    return 0;
  }
  const isCustomParent = !!parent;
  const parentElement = parent || document.body;
  const parentPosition = parentElement.getBoundingClientRect();
  const targetPosition = target.getBoundingClientRect();
  const getDiff = (property) => targetPosition[property] - parentPosition[property];
  if (axis === "y") {
    const diff = getDiff("top");
    if (diff === 0)
      return 0;
    if (alignment === "start") {
      const distance = diff - offset;
      const shouldScroll = distance <= targetPosition.height * (isList ? 0 : 1) || !isList;
      return shouldScroll ? distance : 0;
    }
    const parentHeight = isCustomParent ? parentPosition.height : window.innerHeight;
    if (alignment === "end") {
      const distance = diff + offset - parentHeight + targetPosition.height;
      const shouldScroll = distance >= -targetPosition.height * (isList ? 0 : 1) || !isList;
      return shouldScroll ? distance : 0;
    }
    if (alignment === "center") {
      return diff - parentHeight / 2 + targetPosition.height / 2;
    }
    return 0;
  }
  if (axis === "x") {
    const diff = getDiff("left");
    if (diff === 0)
      return 0;
    if (alignment === "start") {
      const distance = diff - offset;
      const shouldScroll = distance <= targetPosition.width || !isList;
      return shouldScroll ? distance : 0;
    }
    const parentWidth = isCustomParent ? parentPosition.width : window.innerWidth;
    if (alignment === "end") {
      const distance = diff + offset - parentWidth + targetPosition.width;
      const shouldScroll = distance >= -targetPosition.width || !isList;
      return shouldScroll ? distance : 0;
    }
    if (alignment === "center") {
      return diff - parentWidth / 2 + targetPosition.width / 2;
    }
    return 0;
  }
  return 0;
};

// src/use-scroll-into-view/utils/get-scroll-start.ts
var getScrollStart = ({ axis, parent }) => {
  if (!parent && typeof document === "undefined") {
    return 0;
  }
  const method = axis === "y" ? "scrollTop" : "scrollLeft";
  if (parent) {
    return parent[method];
  }
  const { body, documentElement } = document;
  return body[method] + documentElement[method];
};

// src/use-scroll-into-view/utils/set-scroll-param.ts
var setScrollParam = ({ axis, parent, distance }) => {
  if (!parent && typeof document === "undefined") {
    return;
  }
  const method = axis === "y" ? "scrollTop" : "scrollLeft";
  if (parent) {
    parent[method] = distance;
  } else {
    const { body, documentElement } = document;
    body[method] = distance;
    documentElement[method] = distance;
  }
};

// src/use-scroll-into-view/use-scroll-into-view.ts
function useScrollIntoView({
  duration = 1250,
  axis = "y",
  onScrollFinish,
  easing = easeInOutQuad,
  offset = 0,
  cancelable = true,
  isList = false
} = {}) {
  const frameID = useRef14(0);
  const startTime = useRef14(0);
  const shouldStop = useRef14(false);
  const scrollableRef = useRef14(null);
  const targetRef = useRef14(null);
  const reducedMotion = useReducedMotion();
  const cancel = () => {
    if (frameID.current) {
      cancelAnimationFrame(frameID.current);
    }
  };
  const scrollIntoView = useCallback6(
    ({ alignment = "start" } = {}) => {
      shouldStop.current = false;
      if (frameID.current) {
        cancel();
      }
      const start = getScrollStart({ parent: scrollableRef.current, axis }) ?? 0;
      const change = getRelativePosition({
        parent: scrollableRef.current,
        target: targetRef.current,
        axis,
        alignment,
        offset,
        isList
      }) - (scrollableRef.current ? 0 : start);
      function animateScroll() {
        if (startTime.current === 0) {
          startTime.current = performance.now();
        }
        const now = performance.now();
        const elapsed = now - startTime.current;
        const t = reducedMotion || duration === 0 ? 1 : elapsed / duration;
        const distance = start + change * easing(t);
        setScrollParam({
          parent: scrollableRef.current,
          axis,
          distance
        });
        if (!shouldStop.current && t < 1) {
          frameID.current = requestAnimationFrame(animateScroll);
        } else {
          typeof onScrollFinish === "function" && onScrollFinish();
          startTime.current = 0;
          frameID.current = 0;
          cancel();
        }
      }
      animateScroll();
    },
    [axis, duration, easing, isList, offset, onScrollFinish, reducedMotion]
  );
  const handleStop = () => {
    if (cancelable) {
      shouldStop.current = true;
    }
  };
  useWindowEvent("wheel", handleStop, {
    passive: true
  });
  useWindowEvent("touchmove", handleStop, {
    passive: true
  });
  useEffect18(() => cancel, []);
  return {
    scrollableRef,
    targetRef,
    scrollIntoView,
    cancel
  };
}

// src/use-resize-observer/use-resize-observer.ts
import { useEffect as useEffect19, useMemo as useMemo3, useRef as useRef15, useState as useState16 } from "react";
var defaultState = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
};
function useResizeObserver(options) {
  const frameID = useRef15(0);
  const ref = useRef15(null);
  const [rect, setRect] = useState16(defaultState);
  const observer = useMemo3(
    () => typeof window !== "undefined" ? new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        cancelAnimationFrame(frameID.current);
        frameID.current = requestAnimationFrame(() => {
          if (ref.current) {
            setRect(entry.contentRect);
          }
        });
      }
    }) : null,
    []
  );
  useEffect19(() => {
    if (ref.current) {
      observer == null ? void 0 : observer.observe(ref.current, options);
    }
    return () => {
      observer == null ? void 0 : observer.disconnect();
      if (frameID.current) {
        cancelAnimationFrame(frameID.current);
      }
    };
  }, [ref.current]);
  return [ref, rect];
}
function useElementSize(options) {
  const [ref, { width, height }] = useResizeObserver(options);
  return { ref, width, height };
}

// src/use-shallow-effect/use-shallow-effect.ts
import { useEffect as useEffect20, useRef as useRef16 } from "react";
function shallowCompare(prevValue, currValue) {
  if (!prevValue || !currValue) {
    return false;
  }
  if (prevValue === currValue) {
    return true;
  }
  if (prevValue.length !== currValue.length) {
    return false;
  }
  for (let i = 0; i < prevValue.length; i += 1) {
    if (!shallowEqual(prevValue[i], currValue[i])) {
      return false;
    }
  }
  return true;
}
function useShallowCompare(dependencies) {
  const ref = useRef16([]);
  const updateRef = useRef16(0);
  if (!shallowCompare(ref.current, dependencies)) {
    ref.current = dependencies;
    updateRef.current += 1;
  }
  return [updateRef.current];
}
function useShallowEffect(cb, dependencies) {
  useEffect20(cb, useShallowCompare(dependencies));
}

// src/use-toggle/use-toggle.ts
import { useReducer as useReducer2 } from "react";
function useToggle(options = [false, true]) {
  const [[option], toggle] = useReducer2((state, action) => {
    const value = action instanceof Function ? action(state[0]) : action;
    const index = Math.abs(state.indexOf(value));
    return state.slice(index).concat(state.slice(0, index));
  }, options);
  return [option, toggle];
}

// src/use-viewport-size/use-viewport-size.ts
import { useCallback as useCallback7, useEffect as useEffect21, useState as useState17 } from "react";
var eventListerOptions = {
  passive: true
};
function useViewportSize() {
  const [windowSize, setWindowSize] = useState17({
    width: 0,
    height: 0
  });
  const setSize = useCallback7(() => {
    setWindowSize({ width: window.innerWidth || 0, height: window.innerHeight || 0 });
  }, []);
  useWindowEvent("resize", setSize, eventListerOptions);
  useWindowEvent("orientationchange", setSize, eventListerOptions);
  useEffect21(setSize, []);
  return windowSize;
}

// src/use-window-scroll/use-window-scroll.ts
import { useEffect as useEffect22, useState as useState18 } from "react";
function getScrollPosition() {
  return typeof window !== "undefined" ? { x: window.pageXOffset, y: window.pageYOffset } : { x: 0, y: 0 };
}
function scrollTo({ x, y }) {
  if (typeof window !== "undefined") {
    const scrollOptions = { behavior: "smooth" };
    if (typeof x === "number") {
      scrollOptions.left = x;
    }
    if (typeof y === "number") {
      scrollOptions.top = y;
    }
    window.scrollTo(scrollOptions);
  }
}
function useWindowScroll() {
  const [position, setPosition] = useState18({ x: 0, y: 0 });
  useWindowEvent("scroll", () => setPosition(getScrollPosition()));
  useWindowEvent("resize", () => setPosition(getScrollPosition()));
  useEffect22(() => {
    setPosition(getScrollPosition());
  }, []);
  return [position, scrollTo];
}

// src/use-intersection/use-intersection.ts
import { useCallback as useCallback8, useRef as useRef17, useState as useState19 } from "react";
function useIntersection(options) {
  const [entry, setEntry] = useState19(null);
  const observer = useRef17(null);
  const ref = useCallback8(
    (element) => {
      if (observer.current) {
        observer.current.disconnect();
        observer.current = null;
      }
      if (element === null) {
        setEntry(null);
        return;
      }
      observer.current = new IntersectionObserver(([_entry]) => {
        setEntry(_entry);
      }, options);
      observer.current.observe(element);
    },
    [options == null ? void 0 : options.rootMargin, options == null ? void 0 : options.root, options == null ? void 0 : options.threshold]
  );
  return { ref, entry };
}

// src/use-hash/use-hash.ts
import { useEffect as useEffect23, useState as useState20 } from "react";
function useHash({ getInitialValueInEffect = true } = {}) {
  const [hash, setHashValue] = useState20(
    getInitialValueInEffect ? "" : window.location.hash || ""
  );
  const setHash = (value) => {
    const valueWithHash = value.startsWith("#") ? value : `#${value}`;
    window.location.hash = valueWithHash;
    setHashValue(valueWithHash);
  };
  useWindowEvent("hashchange", () => {
    const newHash = window.location.hash;
    if (hash !== newHash) {
      setHashValue(newHash);
    }
  });
  useEffect23(() => {
    if (getInitialValueInEffect) {
      setHashValue(window.location.hash);
    }
  }, []);
  return [hash, setHash];
}

// src/use-hotkeys/use-hotkeys.ts
import { useEffect as useEffect24 } from "react";

// src/use-hotkeys/parse-hotkey.ts
function parseHotkey(hotkey) {
  const keys = hotkey.toLowerCase().split("+").map((part) => part.trim());
  const modifiers = {
    alt: keys.includes("alt"),
    ctrl: keys.includes("ctrl"),
    meta: keys.includes("meta"),
    mod: keys.includes("mod"),
    shift: keys.includes("shift")
  };
  const reservedKeys = ["alt", "ctrl", "meta", "shift", "mod"];
  const freeKey = keys.find((key) => !reservedKeys.includes(key));
  return {
    ...modifiers,
    key: freeKey
  };
}
function isExactHotkey(hotkey, event) {
  const { alt, ctrl, meta, mod, shift, key } = hotkey;
  const { altKey, ctrlKey, metaKey, shiftKey, key: pressedKey } = event;
  if (alt !== altKey) {
    return false;
  }
  if (mod) {
    if (!ctrlKey && !metaKey) {
      return false;
    }
  } else {
    if (ctrl !== ctrlKey) {
      return false;
    }
    if (meta !== metaKey) {
      return false;
    }
  }
  if (shift !== shiftKey) {
    return false;
  }
  if (key && (pressedKey.toLowerCase() === key.toLowerCase() || event.code.replace("Key", "").toLowerCase() === key.toLowerCase())) {
    return true;
  }
  return false;
}
function getHotkeyMatcher(hotkey) {
  return (event) => isExactHotkey(parseHotkey(hotkey), event);
}
function getHotkeyHandler(hotkeys) {
  return (event) => {
    const _event = "nativeEvent" in event ? event.nativeEvent : event;
    hotkeys.forEach(([hotkey, handler, options = { preventDefault: true }]) => {
      if (getHotkeyMatcher(hotkey)(_event)) {
        if (options.preventDefault) {
          event.preventDefault();
        }
        handler(_event);
      }
    });
  };
}

// src/use-hotkeys/use-hotkeys.ts
function shouldFireEvent(event, tagsToIgnore, triggerOnContentEditable = false) {
  if (event.target instanceof HTMLElement) {
    if (triggerOnContentEditable) {
      return !tagsToIgnore.includes(event.target.tagName);
    }
    return !event.target.isContentEditable && !tagsToIgnore.includes(event.target.tagName);
  }
  return true;
}
function useHotkeys(hotkeys, tagsToIgnore = ["INPUT", "TEXTAREA", "SELECT"], triggerOnContentEditable = false) {
  useEffect24(() => {
    const keydownListener = (event) => {
      hotkeys.forEach(([hotkey, handler, options = { preventDefault: true }]) => {
        if (getHotkeyMatcher(hotkey)(event) && shouldFireEvent(event, tagsToIgnore, triggerOnContentEditable)) {
          if (options.preventDefault) {
            event.preventDefault();
          }
          handler(event);
        }
      });
    };
    document.documentElement.addEventListener("keydown", keydownListener);
    return () => document.documentElement.removeEventListener("keydown", keydownListener);
  }, [hotkeys]);
}

// src/use-fullscreen/use-fullscreen.ts
import { useCallback as useCallback9, useEffect as useEffect25, useRef as useRef18, useState as useState21 } from "react";
function getFullscreenElement() {
  const _document = window.document;
  const fullscreenElement = _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement;
  return fullscreenElement;
}
async function exitFullscreen() {
  const _document = window.document;
  if (typeof _document.exitFullscreen === "function")
    return _document.exitFullscreen();
  if (typeof _document.msExitFullscreen === "function")
    return _document.msExitFullscreen();
  if (typeof _document.webkitExitFullscreen === "function")
    return _document.webkitExitFullscreen();
  if (typeof _document.mozCancelFullScreen === "function")
    return _document.mozCancelFullScreen();
  return null;
}
async function enterFullScreen(element) {
  var _a, _b, _c, _d, _e;
  const _element = element;
  return ((_a = _element.requestFullscreen) == null ? void 0 : _a.call(_element)) || ((_b = _element.msRequestFullscreen) == null ? void 0 : _b.call(_element)) || ((_c = _element.webkitEnterFullscreen) == null ? void 0 : _c.call(_element)) || ((_d = _element.webkitRequestFullscreen) == null ? void 0 : _d.call(_element)) || ((_e = _element.mozRequestFullscreen) == null ? void 0 : _e.call(_element));
}
var prefixes = ["", "webkit", "moz", "ms"];
function addEvents(element, {
  onFullScreen,
  onError
}) {
  prefixes.forEach((prefix) => {
    element.addEventListener(`${prefix}fullscreenchange`, onFullScreen);
    element.addEventListener(`${prefix}fullscreenerror`, onError);
  });
  return () => {
    prefixes.forEach((prefix) => {
      element.removeEventListener(`${prefix}fullscreenchange`, onFullScreen);
      element.removeEventListener(`${prefix}fullscreenerror`, onError);
    });
  };
}
function useFullscreen() {
  const [fullscreen, setFullscreen] = useState21(false);
  const _ref = useRef18();
  const handleFullscreenChange = useCallback9(
    (event) => {
      setFullscreen(event.target === getFullscreenElement());
    },
    [setFullscreen]
  );
  const handleFullscreenError = useCallback9(
    (event) => {
      setFullscreen(false);
      console.error(
        `[@raikou/hooks] use-fullscreen: Error attempting full-screen mode method: ${event} (${event.target})`
      );
    },
    [setFullscreen]
  );
  const toggle = useCallback9(async () => {
    if (!getFullscreenElement()) {
      await enterFullScreen(_ref.current);
    } else {
      await exitFullscreen();
    }
  }, []);
  const ref = useCallback9((element) => {
    if (element === null) {
      _ref.current = window.document.documentElement;
    } else {
      _ref.current = element;
    }
  }, []);
  useEffect25(() => {
    if (!_ref.current && window.document) {
      _ref.current = window.document.documentElement;
      return addEvents(_ref.current, {
        onFullScreen: handleFullscreenChange,
        onError: handleFullscreenError
      });
    }
    if (_ref.current) {
      return addEvents(_ref.current, {
        onFullScreen: handleFullscreenChange,
        onError: handleFullscreenError
      });
    }
    return void 0;
  }, []);
  return { ref, toggle, fullscreen };
}

// src/use-logger/use-logger.ts
import { useEffect as useEffect26 } from "react";
function useLogger(componentName, props) {
  useEffect26(() => {
    console.log(`${componentName} mounted`, ...props);
    return () => console.log(`${componentName} unmounted`);
  }, []);
  useDidUpdate(() => {
    console.log(`${componentName} updated`, ...props);
  }, props);
  return null;
}

// src/use-hover/use-hover.ts
import { useCallback as useCallback10, useEffect as useEffect27, useRef as useRef19, useState as useState22 } from "react";
function useHover() {
  const [hovered, setHovered] = useState22(false);
  const ref = useRef19(null);
  const onMouseEnter = useCallback10(() => setHovered(true), []);
  const onMouseLeave = useCallback10(() => setHovered(false), []);
  useEffect27(() => {
    if (ref.current) {
      ref.current.addEventListener("mouseenter", onMouseEnter);
      ref.current.addEventListener("mouseleave", onMouseLeave);
      return () => {
        var _a, _b;
        (_a = ref.current) == null ? void 0 : _a.removeEventListener("mouseenter", onMouseEnter);
        (_b = ref.current) == null ? void 0 : _b.removeEventListener("mouseleave", onMouseLeave);
      };
    }
    return void 0;
  }, []);
  return { ref, hovered };
}

// src/use-validated-state/use-validated-state.ts
import { useState as useState23 } from "react";
function useValidatedState(initialValue, validation, initialValidationState) {
  const [value, setValue] = useState23(initialValue);
  const [lastValidValue, setLastValidValue] = useState23(
    validation(initialValue) ? initialValue : void 0
  );
  const [valid, setValid] = useState23(
    typeof initialValidationState === "boolean" ? initialValidationState : validation(initialValue)
  );
  const onChange = (val) => {
    if (validation(val)) {
      setLastValidValue(val);
      setValid(true);
    } else {
      setValid(false);
    }
    setValue(val);
  };
  return [{ value, lastValidValue, valid }, onChange];
}

// src/use-os/use-os.ts
import { useState as useState24 } from "react";
function getOS() {
  if (typeof window === "undefined") {
    return "undetermined";
  }
  const { userAgent } = window.navigator;
  const macosPlatforms = /(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i;
  const windowsPlatforms = /(Win32)|(Win64)|(Windows)|(WinCE)/i;
  const iosPlatforms = /(iPhone)|(iPad)|(iPod)/i;
  if (macosPlatforms.test(userAgent)) {
    return "macos";
  }
  if (iosPlatforms.test(userAgent)) {
    return "ios";
  }
  if (windowsPlatforms.test(userAgent)) {
    return "windows";
  }
  if (/Android/i.test(userAgent)) {
    return "android";
  }
  if (/Linux/i.test(userAgent)) {
    return "linux";
  }
  return "undetermined";
}
function useOs(options = { getValueInEffect: true }) {
  const [value, setValue] = useState24(options.getValueInEffect ? "undetermined" : getOS());
  useIsomorphicEffect(() => {
    if (options.getValueInEffect) {
      setValue(getOS);
    }
  }, []);
  return value;
}

// src/use-set-state/use-set-state.ts
import { useCallback as useCallback11, useState as useState25 } from "react";
function useSetState(initialState) {
  const [state, _setState] = useState25(initialState);
  const setState = useCallback11(
    (statePartial) => _setState((current) => ({
      ...current,
      ...typeof statePartial === "function" ? statePartial(current) : statePartial
    })),
    []
  );
  return [state, setState];
}

// src/use-input-state/use-input-state.ts
import { useState as useState26 } from "react";
function getInputOnChange(setValue) {
  return (val) => {
    if (!val) {
      setValue(val);
    } else if (typeof val === "function") {
      setValue(val);
    } else if (typeof val === "object" && "nativeEvent" in val) {
      const { currentTarget } = val;
      if (currentTarget.type === "checkbox") {
        setValue(currentTarget.checked);
      } else {
        setValue(currentTarget.value);
      }
    } else {
      setValue(val);
    }
  };
}
function useInputState(initialState) {
  const [value, setValue] = useState26(initialState);
  return [value, getInputOnChange(setValue)];
}

// src/use-event-listener/use-event-listener.ts
import { useEffect as useEffect28, useRef as useRef20 } from "react";
function useEventListener(type, listener, options) {
  const ref = useRef20();
  useEffect28(() => {
    if (ref.current) {
      ref.current.addEventListener(type, listener, options);
      return () => {
        var _a;
        return (_a = ref.current) == null ? void 0 : _a.removeEventListener(type, listener, options);
      };
    }
    return void 0;
  }, [listener, options]);
  return ref;
}

// src/use-disclosure/use-disclosure.ts
import { useCallback as useCallback12, useState as useState27 } from "react";
function useDisclosure(initialState = false, callbacks) {
  const { onOpen, onClose } = callbacks || {};
  const [opened, setOpened] = useState27(initialState);
  const open = useCallback12(() => {
    setOpened((isOpened) => {
      if (!isOpened) {
        onOpen == null ? void 0 : onOpen();
        return true;
      }
      return isOpened;
    });
  }, [onOpen]);
  const close = useCallback12(() => {
    setOpened((isOpened) => {
      if (isOpened) {
        onClose == null ? void 0 : onClose();
        return false;
      }
      return isOpened;
    });
  }, [onClose]);
  const toggle = useCallback12(() => {
    opened ? close() : open();
  }, [close, open, opened]);
  return [opened, { open, close, toggle }];
}

// src/use-focus-within/use-focus-within.ts
import { useEffect as useEffect29, useRef as useRef21, useState as useState28 } from "react";
function containsRelatedTarget(event) {
  if (event.currentTarget instanceof HTMLElement && event.relatedTarget instanceof HTMLElement) {
    return event.currentTarget.contains(event.relatedTarget);
  }
  return false;
}
function useFocusWithin({
  onBlur,
  onFocus
} = {}) {
  const ref = useRef21();
  const [focused, _setFocused] = useState28(false);
  const focusedRef = useRef21(false);
  const setFocused = (value) => {
    _setFocused(value);
    focusedRef.current = value;
  };
  const handleFocusIn = (event) => {
    if (!focusedRef.current) {
      setFocused(true);
      onFocus == null ? void 0 : onFocus(event);
    }
  };
  const handleFocusOut = (event) => {
    if (focusedRef.current && !containsRelatedTarget(event)) {
      setFocused(false);
      onBlur == null ? void 0 : onBlur(event);
    }
  };
  useEffect29(() => {
    if (ref.current) {
      ref.current.addEventListener("focusin", handleFocusIn);
      ref.current.addEventListener("focusout", handleFocusOut);
      return () => {
        var _a, _b;
        (_a = ref.current) == null ? void 0 : _a.removeEventListener("focusin", handleFocusIn);
        (_b = ref.current) == null ? void 0 : _b.removeEventListener("focusout", handleFocusOut);
      };
    }
    return void 0;
  }, [handleFocusIn, handleFocusOut]);
  return { ref, focused };
}

// src/use-network/use-network.ts
import { useCallback as useCallback13, useEffect as useEffect30, useState as useState29 } from "react";
function getConnection() {
  if (typeof navigator === "undefined") {
    return {};
  }
  const _navigator = navigator;
  const connection = _navigator.connection || _navigator.mozConnection || _navigator.webkitConnection;
  if (!connection) {
    return {};
  }
  return {
    downlink: connection == null ? void 0 : connection.downlink,
    downlinkMax: connection == null ? void 0 : connection.downlinkMax,
    effectiveType: connection == null ? void 0 : connection.effectiveType,
    rtt: connection == null ? void 0 : connection.rtt,
    saveData: connection == null ? void 0 : connection.saveData,
    type: connection == null ? void 0 : connection.type
  };
}
function useNetwork() {
  const [status, setStatus] = useState29({
    online: true
  });
  const handleConnectionChange = useCallback13(
    () => setStatus((current) => ({ ...current, ...getConnection() })),
    []
  );
  useWindowEvent("online", () => setStatus({ online: true, ...getConnection() }));
  useWindowEvent("offline", () => setStatus({ online: false, ...getConnection() }));
  useEffect30(() => {
    const _navigator = navigator;
    if (_navigator.connection) {
      setStatus({ online: _navigator.onLine, ...getConnection() });
      _navigator.connection.addEventListener("change", handleConnectionChange);
      return () => _navigator.connection.removeEventListener("change", handleConnectionChange);
    }
    if (typeof _navigator.onLine === "boolean") {
      setStatus((current) => ({ ...current, online: _navigator.onLine }));
    }
    return void 0;
  }, []);
  return status;
}

// src/use-timeout/use-timeout.ts
import { useCallback as useCallback14, useEffect as useEffect31, useRef as useRef22 } from "react";
function useTimeout(callback, delay, options = { autoInvoke: false }) {
  const timeoutRef = useRef22(null);
  const start = useCallback14(
    (...callbackParams) => {
      if (!timeoutRef.current) {
        timeoutRef.current = window.setTimeout(() => {
          callback(callbackParams);
          timeoutRef.current = null;
        }, delay);
      }
    },
    [delay]
  );
  const clear = useCallback14(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);
  useEffect31(() => {
    if (options.autoInvoke) {
      start();
    }
    return clear;
  }, [clear, start]);
  return { start, clear };
}

// src/use-text-selection/use-text-selection.ts
import { useEffect as useEffect32, useState as useState30 } from "react";
function useTextSelection() {
  const forceUpdate = useForceUpdate();
  const [selection, setSelection] = useState30(null);
  const handleSelectionChange = () => {
    setSelection(document.getSelection());
    forceUpdate();
  };
  useEffect32(() => {
    setSelection(document.getSelection());
    document.addEventListener("selectionchange", handleSelectionChange);
    return () => document.removeEventListener("selectionchange", handleSelectionChange);
  }, []);
  return selection;
}

// src/use-previous/use-previous.ts
import { useEffect as useEffect33, useRef as useRef23 } from "react";
function usePrevious(value) {
  const ref = useRef23();
  useEffect33(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// src/use-favicon/use-favicon.ts
import { useRef as useRef24 } from "react";
var MIME_TYPES = {
  ico: "image/x-icon",
  png: "image/png",
  svg: "image/svg+xml",
  gif: "image/gif"
};
function useFavicon(url) {
  const link = useRef24();
  useIsomorphicEffect(() => {
    if (!url) {
      return;
    }
    if (!link.current) {
      const existingElements = document.querySelectorAll('link[rel*="icon"]');
      existingElements.forEach((element2) => document.head.removeChild(element2));
      const element = document.createElement("link");
      element.rel = "shortcut icon";
      link.current = element;
      document.querySelector("head").appendChild(element);
    }
    const splittedUrl = url.split(".");
    link.current.setAttribute(
      "type",
      MIME_TYPES[splittedUrl[splittedUrl.length - 1].toLowerCase()]
    );
    link.current.setAttribute("href", url);
  }, [url]);
}

// src/use-headroom/use-headroom.ts
import { useEffect as useEffect34, useRef as useRef25, useState as useState31 } from "react";
var isFixed = (current, fixedAt) => current <= fixedAt;
var isPinnedOrReleased = (current, fixedAt, isCurrentlyPinnedRef, isScrollingUp, onPin, onRelease) => {
  const isInFixedPosition = isFixed(current, fixedAt);
  if (isInFixedPosition && !isCurrentlyPinnedRef.current) {
    isCurrentlyPinnedRef.current = true;
    onPin == null ? void 0 : onPin();
  } else if (!isInFixedPosition && isScrollingUp && !isCurrentlyPinnedRef.current) {
    isCurrentlyPinnedRef.current = true;
    onPin == null ? void 0 : onPin();
  } else if (!isInFixedPosition && isCurrentlyPinnedRef.current) {
    isCurrentlyPinnedRef.current = false;
    onRelease == null ? void 0 : onRelease();
  }
};
var useScrollDirection = () => {
  const [lastScrollTop, setLastScrollTop] = useState31(0);
  const [isScrollingUp, setIsScrollingUp] = useState31(false);
  const [isResizing, setIsResizing] = useState31(false);
  useEffect34(() => {
    let resizeTimer;
    const onResize = () => {
      setIsResizing(true);
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setIsResizing(false);
      }, 300);
    };
    const onScroll = () => {
      if (isResizing) {
        return;
      }
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrollingUp(currentScrollTop < lastScrollTop);
      setLastScrollTop(currentScrollTop);
    };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [lastScrollTop, isResizing]);
  return isScrollingUp;
};
function useHeadroom({ fixedAt = 0, onPin, onFix, onRelease } = {}) {
  const isCurrentlyPinnedRef = useRef25(false);
  const isScrollingUp = useScrollDirection();
  const [{ y: scrollPosition }] = useWindowScroll();
  useIsomorphicEffect(() => {
    isPinnedOrReleased(
      scrollPosition,
      fixedAt,
      isCurrentlyPinnedRef,
      isScrollingUp,
      onPin,
      onRelease
    );
  }, [scrollPosition]);
  useIsomorphicEffect(() => {
    if (isFixed(scrollPosition, fixedAt)) {
      onFix == null ? void 0 : onFix();
    }
  }, [scrollPosition, fixedAt, onFix]);
  if (isFixed(scrollPosition, fixedAt) || isScrollingUp) {
    return true;
  }
  return false;
}

// src/use-eye-dropper/use-eye-dropper.ts
import { useCallback as useCallback15, useState as useState32 } from "react";
function useEyeDropper() {
  const [supported, setSupported] = useState32(false);
  useIsomorphicEffect(() => {
    setSupported(typeof window !== "undefined" && "EyeDropper" in window);
  }, []);
  const open = useCallback15(
    (options = {}) => {
      if (supported) {
        const eyeDropper = new window.EyeDropper();
        return eyeDropper.open(options);
      }
      return Promise.resolve(void 0);
    },
    [supported]
  );
  return { supported, open };
}

// src/use-in-viewport/use-in-viewport.ts
import { useEffect as useEffect35, useMemo as useMemo4, useRef as useRef26, useState as useState33 } from "react";
function useInViewport() {
  const ref = useRef26(null);
  const [inViewport, setInViewport] = useState33(false);
  const observer = useMemo4(() => {
    if (typeof IntersectionObserver === "undefined") {
      return null;
    }
    return new IntersectionObserver(([entry]) => setInViewport(entry.isIntersecting));
  }, [ref]);
  useEffect35(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
    return () => null;
  }, []);
  return { ref, inViewport };
}

// src/use-mutation-observer/use-mutation-observer.ts
import { useEffect as useEffect36, useRef as useRef27 } from "react";
function useMutationObserver(callback, options, target) {
  const observer = useRef27();
  const ref = useRef27(null);
  useEffect36(() => {
    const targetElement = typeof target === "function" ? target() : target;
    if (targetElement || ref.current) {
      observer.current = new MutationObserver(callback);
      observer.current.observe(targetElement || ref.current, options);
    }
    return () => {
      var _a;
      (_a = observer.current) == null ? void 0 : _a.disconnect();
    };
  }, [callback, options]);
  return ref;
}

// src/use-mounted/use-mounted.ts
import { useEffect as useEffect37, useState as useState34 } from "react";
function useMounted() {
  const [mounted, setMounted] = useState34(false);
  useEffect37(() => setMounted(true), []);
  return mounted;
}

// src/use-state-history/use-state-history.ts
import { useCallback as useCallback16, useMemo as useMemo5, useState as useState35 } from "react";
function useStateHistory(initialValue) {
  const [state, setState] = useState35({
    history: [initialValue],
    current: 0
  });
  const set = useCallback16(
    (val) => setState((currentState) => {
      const nextState = [...currentState.history.slice(0, currentState.current + 1), val];
      return {
        history: nextState,
        current: nextState.length - 1
      };
    }),
    []
  );
  const back = useCallback16(
    (steps = 1) => setState((currentState) => ({
      history: currentState.history,
      current: Math.max(0, currentState.current - steps)
    })),
    []
  );
  const forward = useCallback16(
    (steps = 1) => setState((currentState) => ({
      history: currentState.history,
      current: Math.min(currentState.history.length - 1, currentState.current + steps)
    })),
    []
  );
  const handlers = useMemo5(() => ({ set, forward, back }), []);
  return [state.history[state.current], handlers, state];
}

// src/use-map/use-map.ts
import { useRef as useRef28 } from "react";
function useMap(initialState) {
  const mapRef = useRef28(new Map(initialState));
  const forceUpdate = useForceUpdate();
  mapRef.current.set = (...args) => {
    Map.prototype.set.apply(mapRef.current, args);
    forceUpdate();
    return mapRef.current;
  };
  mapRef.current.clear = (...args) => {
    Map.prototype.clear.apply(mapRef.current, args);
    forceUpdate();
  };
  mapRef.current.delete = (...args) => {
    const res = Map.prototype.delete.apply(mapRef.current, args);
    forceUpdate();
    return res;
  };
  return mapRef.current;
}

// src/use-set/use-set.ts
import { useRef as useRef29 } from "react";
function useSet(values) {
  const setRef = useRef29(new Set(values));
  const forceUpdate = useForceUpdate();
  setRef.current.add = (...args) => {
    const res = Set.prototype.add.apply(setRef.current, args);
    forceUpdate();
    return res;
  };
  setRef.current.clear = (...args) => {
    Set.prototype.clear.apply(setRef.current, args);
    forceUpdate();
  };
  setRef.current.delete = (...args) => {
    const res = Set.prototype.delete.apply(setRef.current, args);
    forceUpdate();
    return res;
  };
  return setRef.current;
}

// src/use-throttled-callback/use-throttled-callback.ts
import { useCallback as useCallback17, useEffect as useEffect38, useRef as useRef30 } from "react";
function useThrottledCallbackWithClearTimeout(callback, wait) {
  const handleCallback = useCallbackRef(callback);
  const latestInArgsRef = useRef30();
  const latestOutArgsRef = useRef30();
  const active = useRef30(true);
  const waitRef = useRef30(wait);
  const timeoutRef = useRef30(-1);
  const clearTimeout2 = () => window.clearTimeout(timeoutRef.current);
  const callThrottledCallback = useCallback17(
    (...args) => {
      handleCallback(...args);
      latestInArgsRef.current = args;
      latestOutArgsRef.current = args;
      active.current = false;
    },
    [handleCallback]
  );
  const timerCallback = useCallback17(() => {
    if (latestInArgsRef.current && latestInArgsRef.current !== latestOutArgsRef.current) {
      callThrottledCallback(...latestInArgsRef.current);
      timeoutRef.current = window.setTimeout(timerCallback, waitRef.current);
    } else {
      active.current = true;
    }
  }, [callThrottledCallback]);
  const throttled = useCallback17(
    (...args) => {
      if (active.current) {
        callThrottledCallback(...args);
        timeoutRef.current = window.setTimeout(timerCallback, waitRef.current);
      } else {
        latestInArgsRef.current = args;
      }
    },
    [callThrottledCallback, timerCallback]
  );
  useEffect38(() => {
    waitRef.current = wait;
  }, [wait]);
  return [throttled, clearTimeout2];
}
function useThrottledCallback(callback, wait) {
  return useThrottledCallbackWithClearTimeout(callback, wait)[0];
}

// src/use-throttled-state/use-throttled-state.ts
import { useEffect as useEffect39, useState as useState36 } from "react";
function useThrottledState(defaultValue, wait) {
  const [value, setValue] = useState36(defaultValue);
  const [setThrottledValue, clearTimeout2] = useThrottledCallbackWithClearTimeout(setValue, wait);
  useEffect39(() => clearTimeout2, []);
  return [value, setThrottledValue];
}

// src/use-throttled-value/use-throttled-value.ts
import { useEffect as useEffect40, useRef as useRef31, useState as useState37 } from "react";
function useThrottledValue(value, wait) {
  const [throttledValue, setThrottledValue] = useState37(value);
  const valueRef = useRef31(value);
  const [throttledSetValue, clearTimeout2] = useThrottledCallbackWithClearTimeout(setThrottledValue, wait);
  useEffect40(() => {
    if (value !== valueRef.current) {
      valueRef.current = value;
      throttledSetValue(value);
    }
  }, [throttledSetValue, value]);
  useEffect40(() => clearTimeout2, []);
  return throttledValue;
}

// src/use-is-first-render/use-is-first-render.ts
import { useRef as useRef32 } from "react";
function useIsFirstRender() {
  const renderRef = useRef32(true);
  if (renderRef.current === true) {
    renderRef.current = false;
    return true;
  }
  return renderRef.current;
}

// src/use-orientation/use-orientation.ts
import { useState as useState38 } from "react";
function useOrientation() {
  const [orientation, setOrientation] = useState38({ angle: 0, type: "landscape-primary" });
  const handleOrientationChange = (event) => {
    const target = event.currentTarget;
    setOrientation({ angle: (target == null ? void 0 : target.angle) || 0, type: (target == null ? void 0 : target.type) || "landscape-primary" });
  };
  useIsomorphicEffect(() => {
    var _a;
    (_a = window.screen.orientation) == null ? void 0 : _a.addEventListener("change", handleOrientationChange);
    return () => {
      var _a2;
      return (_a2 = window.screen.orientation) == null ? void 0 : _a2.removeEventListener("change", handleOrientationChange);
    };
  }, []);
  return orientation;
}

// src/use-fetch/use-fetch.ts
import { useCallback as useCallback18, useEffect as useEffect41, useRef as useRef33, useState as useState39 } from "react";
function useFetch(url, { autoInvoke = true, ...options } = {}) {
  const [data, setData] = useState39(null);
  const [loading, setLoading] = useState39(false);
  const [error, setError] = useState39(null);
  const controller = useRef33(null);
  const refetch = useCallback18(() => {
    if (!url) {
      return;
    }
    if (controller.current) {
      controller.current.abort();
    }
    controller.current = new AbortController();
    setLoading(true);
    return fetch(url, { signal: controller.current.signal, ...options }).then((res) => res.json()).then((res) => {
      setData(res);
      setLoading(false);
      return res;
    }).catch((err) => {
      setLoading(false);
      if (err.name !== "AbortError") {
        setError(err);
      }
      return err;
    });
  }, [url]);
  const abort = useCallback18(() => {
    var _a;
    if (controller.current) {
      (_a = controller.current) == null ? void 0 : _a.abort("");
    }
  }, []);
  useEffect41(() => {
    if (autoInvoke) {
      refetch();
    }
    return () => {
      if (controller.current) {
        controller.current.abort("");
      }
    };
  }, [refetch, autoInvoke]);
  return { data, loading, error, refetch, abort };
}
export {
  assignRef,
  clamp,
  clampUseMovePosition,
  getHotkeyHandler,
  lowerFirst,
  mergeRefs,
  randomId,
  range,
  readLocalStorageValue,
  readSessionStorageValue,
  shallowEqual,
  upperFirst,
  useCallbackRef,
  useClickOutside,
  useClipboard,
  useColorScheme,
  useCounter,
  useDebouncedCallback,
  useDebouncedState,
  useDebouncedValue,
  useDidUpdate,
  useDisclosure,
  useDocumentTitle,
  useDocumentVisibility,
  useElementSize,
  useEventListener,
  useEyeDropper,
  useFavicon,
  useFetch,
  useFocusReturn,
  useFocusTrap,
  useFocusWithin,
  useForceUpdate,
  useFullscreen,
  useHash,
  useHeadroom,
  useHotkeys,
  useHover,
  useId,
  useIdle,
  useInViewport,
  useInputState,
  useIntersection,
  useInterval,
  useIsFirstRender,
  useIsomorphicEffect,
  useListState,
  useLocalStorage,
  useLogger,
  useMap,
  useMediaQuery,
  useMergedRef,
  useMounted,
  useMouse,
  useMove,
  useMutationObserver,
  useNetwork,
  useOrientation,
  useOs,
  usePageLeave,
  usePagination,
  usePrevious,
  useQueue,
  useReducedMotion,
  useResizeObserver,
  useScrollIntoView,
  useSessionStorage,
  useSet,
  useSetState,
  useShallowEffect,
  useStateHistory,
  useTextSelection,
  useThrottledCallback,
  useThrottledState,
  useThrottledValue,
  useTimeout,
  useToggle,
  useUncontrolled,
  useValidatedState,
  useViewportSize,
  useWindowEvent,
  useWindowScroll
};
