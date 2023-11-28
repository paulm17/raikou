import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Box } from "@raikou/core";
import classes from "./Styles.demo.className.module.css";

const code = `
import { Box } from '@raikou/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Box className={classes.box}>
      Box component with <span className={classes.highlight}>some styles</span>
    </Box>
  );
}
`;

const cssCode = `
.box {
  font-size: var(--raikou-font-size-xl);
  text-align: center;
  font-weight: 600;
}

.highlight {
  padding: 0.1rem 0.7rem;
  display: inline-block;
  border-radius: var(--raikou-radius-md);
  background: var(--raikou-color-blue-light);
  color: var(--raikou-color-blue-light-color);
}
`;

function Demo() {
  return (
    <Box className={classes.box}>
      Box component with <span className={classes.highlight}>some styles</span>
    </Box>
  );
}

export const className: RaikouDemo = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.tsx", language: "tsx", code },
    { fileName: "Demo.module.css", language: "css", code: cssCode },
  ],
};
