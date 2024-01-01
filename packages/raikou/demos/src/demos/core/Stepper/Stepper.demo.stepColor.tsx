import React from "react";
import { IconCircleX } from "@tabler/icons-react";
import { RaikouDemo } from "@raikou/ds";
import { Stepper } from "@raikou/client";
import { rem } from "@raikou/theme";

const code = `
import { Stepper, rem } from '@raikou/core';
import { IconCircleX } from '@tabler/icons-react';

function Demo() {
  return (
    <Stepper active={2}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step
        label="Step 2"
        description="Verify email"
        color="red"
        completedIcon={<IconCircleX style={{ width: rem(20), height: rem(20) }} />}
      />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`;

function Demo() {
  return (
    <Stepper active={2}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step
        label="Step 2"
        description="Verify email"
        color="red"
        completedIcon={
          <IconCircleX style={{ width: rem(20), height: rem(20) }} />
        }
      />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}

export const stepColor: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
