import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { Stepper } from "@raikou/client";
import classes from "./Stepper.demo.stylesApi3.module.css";

const cssCode = `.separator {
  height: rem(2px);
  border-top: rem(2px) solid light-dark(var(--raikou-color-gray-4), var(--raikou-color-dark-3));
  border-radius: var(--raikou-radius-xl);
  background-color: transparent;

  &[data-active] {
    border-width: 0;
    background-image: linear-gradient(
      45deg,
      var(--raikou-color-blue-6),
      var(--raikou-color-cyan-6)
    );
  }
}

.stepIcon {
  border-color: transparent;
  background-color: light-dark(var(--raikou-color-gray-0), var(--raikou-color-dark-4));
  border-width: 0;

  &[data-completed] {
    border-width: 0;
    background-color: transparent;
    background-image: linear-gradient(
      45deg,
      var(--raikou-color-blue-6),
      var(--raikou-color-cyan-6)
    );
  }
}

.step {
  transition: transform 150ms ease;

  &[data-progress] {
    transform: scale(1.05);
  }
}
`;

const code = `
import { useState } from 'react';
import { Stepper } from '@raikou/core';
import classes from './Demo.module.css';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper classNames={classes} active={active} onStepClick={setActive} breakpoint="sm">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`;

function Demo() {
  const [active, setActive] = useState(1);
  return (
    <Stepper classNames={classes} active={active} onStepClick={setActive}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}

export const stylesApi3: RaikouDemo = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.tsx", code, language: "tsx" },
    { fileName: "Demo.module.css", code: cssCode, language: "css" },
  ],
};
