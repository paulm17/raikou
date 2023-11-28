import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { Checkbox } from "@raikou/client";
import classes from "./Checkbox.demo.customize.module.css";

const cssCode = `
.root {
  border: rem(1px) solid light-dark(var(--raikou-color-gray-3), var(--raikou-color-dark-4));
  padding: var(--raikou-spacing-xs) var(--raikou-spacing-sm);
  border-radius: var(--raikou-radius-md);
  font-weight: 500;
  transition:
    color 100ms ease,
    background-color 100ms ease,
    border-color 100ms ease;
  cursor: pointer;

  &[data-checked] {
    background-color: var(--raikou-color-blue-filled);
    border-color: var(--raikou-color-blue-filled);
    color: var(--raikou-color-white);
  }

  & * {
    pointer-events: none;
    user-select: none;
  }
}
`;

const code = `
import { Checkbox } from '@raikou/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      classNames={classes}
      label="Checkbox button"
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      wrapperProps={{
        onClick: () => setChecked((c) => !c),
      }}
    />
  );
}
`;

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      classNames={classes}
      label="Checkbox button"
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      wrapperProps={{
        onClick: () => setChecked((c) => !c),
      }}
    />
  );
}

export const customize: RaikouDemo = {
  type: "code",
  component: Demo,
  centered: true,
  defaultExpanded: false,
  code: [
    { fileName: "Demo.tsx", code, language: "tsx" },
    { fileName: "Demo.module.css", code: cssCode, language: "css" },
  ],
};
