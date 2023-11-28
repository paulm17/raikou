import React from "react";
import { RaikouDemo } from "@raikou/ds";
import classes from "./Styles.demo.responsive.module.css";

const code = `
import classes from './Demo.module.css';

function Demo() {
  return <div className={classes.demo}>Demo</div>;
}
`;

const cssCode = `
.demo {
  background-color: var(--raikou-color-blue-filled);
  color: var(--raikou-color-white);
  padding: var(--raikou-spacing-md);
  text-align: center;

  @media (min-width: em(750px)) {
    background-color: var(--raikou-color-red-filled);
  }
}
`;

function Demo() {
  return <div className={classes.demo}>Demo</div>;
}

export const responsive: RaikouDemo = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.module.css", code: cssCode, language: "css" },
    { fileName: "Demo.tsx", code, language: "tsx" },
  ],
};
