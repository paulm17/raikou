import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Slider } from "@raikou/client";
import { Box } from "@raikou/core";
import classes from "./Slider.demo.customize.module.css";

const code = `
import { Slider } from '@raikou/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Slider
      defaultValue={40}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
      size={2}
      classNames={classes}
    />
  );
}
`;

const cssCode = `
.track {
  &::before {
    background-color: light-dark(var(--raikou-color-blue-1), var(--raikou-color-dark-3));
  }
}

.mark {
  width: rem(6px);
  height: rem(6px);
  border-radius: rem(6px);
  transform: translateX(rem(-3px)) translateY(rem(-2px));
  border-color: light-dark(var(--raikou-color-blue-1), var(--raikou-color-dark-3));

  &[data-filled] {
    border-color: var(--raikou-color-blue-6);
  }
}

.markLabel {
  font-size: var(--raikou-font-size-xs);
  margin-bottom: rem(5px);
  margin-top: 0;
}

.thumb {
  height: rem(16px);
  width: rem(16px);
  background-color: var(--raikou-color-white);
  border-width: rem(1px);
  box-shadow: var(--raikou-shadow-sm);
}
`;

function Demo() {
  return (
    <Box maw={400} pt={15} pb={20} mx="auto">
      <Slider
        defaultValue={40}
        marks={[
          { value: 20, label: "20%" },
          { value: 50, label: "50%" },
          { value: 80, label: "80%" },
        ]}
        size={2}
        classNames={classes}
      />
    </Box>
  );
}

export const customize: RaikouDemo = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.tsx", code, language: "tsx" },
    { fileName: "Demo.module.css", code: cssCode, language: "css" },
  ],
};
