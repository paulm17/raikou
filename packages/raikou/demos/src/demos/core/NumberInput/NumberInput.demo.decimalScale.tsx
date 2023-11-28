import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { NumberInput } from "@raikou/client";

const code = `
import { NumberInput } from '@raikou/core';

function Demo() {
  return (
    <NumberInput
      label="You can enter only 2 digits after decimal point"
      placeholder="Do not enter more that 2"
      decimalScale={2}
    />
  );
}
`;

function Demo() {
  return (
    <NumberInput
      label="You can enter only 2 digits after decimal point"
      placeholder="Do not enter more that 2"
      decimalScale={2}
    />
  );
}

export const decimalScale: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
