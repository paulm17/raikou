// src/FocusTrap.tsx
import { cloneElement } from "react";
import { useFocusTrap, useMergedRef } from "@raikou/hooks";
import { isElement } from "@raikou/core";
function FocusTrap({
  children,
  active = true,
  refProp = "ref"
}) {
  const focusTrapRef = useFocusTrap(active);
  const ref = useMergedRef(focusTrapRef, children == null ? void 0 : children.ref);
  if (!isElement(children)) {
    return children;
  }
  return cloneElement(children, { [refProp]: ref });
}
FocusTrap.displayName = "@raikou/core/FocusTrap";
export {
  FocusTrap
};
