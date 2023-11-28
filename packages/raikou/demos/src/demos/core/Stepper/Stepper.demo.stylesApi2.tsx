import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { Stepper, StepperProps } from "@raikou/client";
import { rem } from "@raikou/system";

const code = `
import { useState } from 'react';
import { Stepper, StepperProps, rem } from '@raikou/core';

function StyledStepper(props: StepperProps) {
  return (
    <Stepper
      styles={{
        stepBody: {
          display: 'none',
        },

        step: {
          padding: 0,
        },

        stepIcon: {
          borderWidth: rem(4),
        },

        separator: {
          marginLeft: rem(-2),
          marginRight: rem(-2),
          height: rem(10),
        },
      }}
      {...props}
    />
  );
}

function Demo() {
  const [active, setActive] = useState(1);
  return (
    <StyledStepper active={active} onStepClick={setActive}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </StyledStepper>
  );
}
`;

function StyledStepper(props: StepperProps) {
  return (
    <Stepper
      styles={{
        stepBody: {
          display: "none",
        },

        step: {
          padding: 0,
        },

        stepIcon: {
          borderWidth: rem(3),
        },

        separator: {
          marginLeft: rem(-2),
          marginRight: rem(-2),
          height: rem(6),
        },
      }}
      {...props}
    />
  );
}

function Demo() {
  const [active, setActive] = useState(1);
  return (
    <StyledStepper active={active} onStepClick={setActive}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </StyledStepper>
  );
}

export const stylesApi2: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
