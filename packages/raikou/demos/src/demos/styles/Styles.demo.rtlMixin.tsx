import React from "react";
import { RaikouDemo } from "@raikou/ds";
import classes from "./Styles.demo.rtlMixin.module.css";

const code = `
import classes from './Demo.module.css';

function Demo() {
  return <div className={classes.demo}>Demo</div>;
}
`;

const cssCode = `
.demo {
  text-align: center;
  color: var(--raikou-color-white);
  padding: var(--raikou-spacing-md);

  /* LTR styles */
  background-color: var(--raikou-color-blue-filled);

  @mixin rtl {
    /* RTL styles override LTR styles */
    background-color: var(--raikou-color-red-filled);
  }
}
`;

function Demo() {
  return <div className={classes.demo}>Demo</div>;
}

export const rtlMixin: RaikouDemo = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.module.css", code: cssCode, language: "css" },
    { fileName: "Demo.tsx", code, language: "tsx" },
  ],
};
