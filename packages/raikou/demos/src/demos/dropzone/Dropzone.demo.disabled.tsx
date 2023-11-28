import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { BaseDemo } from "./_base";
import classes from "./Dropzone.disabled.module.css";

const cssCode = `
.disabled {
  background-color: light-dark(var(--raikou-color-gray-0), var(--raikou-color-dark-6));
  border-color: light-dark(var(--raikou-color-gray-2), var(--raikou-color-dark-5));
  cursor: not-allowed;

  & * {
    color: light-dark(var(--raikou-color-gray-5), var(--raikou-color-dark-3));
  }
}
`;

const code = `
import { Dropzone } from '@raikou/dropzone';
import classes from './Demo.module.css';

function Demo() {
  return <BaseDemo disabled className={classes.disabled} />;
}
`;

function Demo() {
  return <BaseDemo disabled className={classes.disabled} />;
}

export const disabled: RaikouDemo = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.tsx", code, language: "tsx" },
    { fileName: "Demo.module.css", code: cssCode, language: "scss" },
  ],
};
