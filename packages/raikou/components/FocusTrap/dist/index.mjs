// src/FocusTrap.tsx
import { cloneElement } from "react";

// ../../packages/raikou-hooks/dist/index.mjs
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
    // @ts-ignore
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
function scopeTab(node, event) {
  const tabbable2 = findTabbableDescendants(node);
  if (!tabbable2.length) {
    event.preventDefault();
    return;
  }
  const finalTabbable = tabbable2[event.shiftKey ? 0 : tabbable2.length - 1];
  const root = node.getRootNode();
  const leavingFinalTabbable = finalTabbable === root.activeElement || node === root.activeElement;
  if (!leavingFinalTabbable) {
    return;
  }
  event.preventDefault();
  const target = tabbable2[event.shiftKey ? tabbable2.length - 1 : 0];
  if (target) {
    target.focus();
  }
}
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
  const setRef = useCallback2(
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
var __useId = React["useId".toString()] || (() => void 0);
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
  return useCallback4(mergeRefs(...refs), refs);
}

// src/FocusTrap.tsx
import { isElement } from "@raikou/core";
function FocusTrap({
  children,
  active = true,
  refProp = "ref"
}) {
  const focusTrapRef = useFocusTrap(active);
  const ref = useMergedRef(focusTrapRef, children?.ref);
  if (!isElement(children)) {
    return children;
  }
  return cloneElement(children, { [refProp]: ref });
}
FocusTrap.displayName = "@raikou/core/FocusTrap";
export {
  FocusTrap
};
