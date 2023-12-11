// src/InputsGroupFieldset.tsx
import React3 from "react";

// ../_utils/create-safe-context/create-safe-context.tsx
import React, { createContext, useContext } from "react";

// ../_utils/create-optional-context/create-optional-context.tsx
import React2, { createContext as createContext2, useContext as useContext2 } from "react";
function createOptionalContext(initialValue = null) {
  const Context = createContext2(initialValue);
  const useOptionalContext = () => useContext2(Context);
  const Provider = ({ children, value }) => /* @__PURE__ */ React2.createElement(Context.Provider, { value }, children);
  return [Provider, useOptionalContext];
}

// ../_utils/use-hovered/use-hovered.ts
import { useState } from "react";

// ../_utils/create-use-external-events/create-use-external-events.ts
import { useEffect, useLayoutEffect } from "react";

// ../Input/src/InputWrapper.context.ts
var [InputWrapperProvider, useInputWrapperContext] = createOptionalContext({
  offsetBottom: false,
  offsetTop: false,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});

// src/InputsGroupFieldset.tsx
function InputsGroupFieldset({
  children,
  role
}) {
  const ctx = useInputWrapperContext();
  if (!ctx) {
    return /* @__PURE__ */ React3.createElement(React3.Fragment, null, children);
  }
  return /* @__PURE__ */ React3.createElement(
    "div",
    {
      role,
      "aria-labelledby": ctx.labelId,
      "aria-describedby": ctx.describedBy
    },
    children
  );
}
export {
  InputsGroupFieldset
};
//# sourceMappingURL=index.mjs.map