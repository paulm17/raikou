import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { NumberInput } from "@raikou/client";

const code = `
import { NumberInput } from '@raikou/core';

function Demo() {
  return (
    <NumberInput
      label="You cannot enter number less than 0 or greater than 100"
      placeholder="You cannot enter number less than 0 or greater than 100"
      clampBehavior="strict"
      min={0}
      max={100}
    />
  );
}
`;

function Demo() {
  return (
    <NumberInput
      label="You cannot enter number less than 0 or greater than 100"
      placeholder="You cannot enter number less than 0 or greater than 100"
      clampBehavior="strict"
      min={0}
      max={100}
    />
  );
}

export const strictClamp: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
