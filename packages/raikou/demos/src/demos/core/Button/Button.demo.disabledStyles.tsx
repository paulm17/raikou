import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button } from "@raikou/server";
import classes from "./Button.demo.disabledStyles.module.css";

const code = `
import { Button } from '@raikou/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Button className={classes.button} disabled>
      Disabled with styles
    </Button>
  );
}
`;

const cssCode = `
.button {
  &:disabled,
  &[data-disabled] {
    border-color: light-dark(var(--raikou-color-gray-3), var(--raikou-color-dark-4));
    background-color: transparent;
  }
}
`;

function Demo() {
  return (
    <Button className={classes.button} disabled>
      Disabled with styles
    </Button>
  );
}

export const disabledStyles: RaikouDemo = {
  type: "code",
  component: Demo,
  centered: true,
  code: [
    { fileName: "Demo.module.css", code: cssCode, language: "css" },
    { fileName: "Demo.tsx", code, language: "tsx" },
  ],
};
