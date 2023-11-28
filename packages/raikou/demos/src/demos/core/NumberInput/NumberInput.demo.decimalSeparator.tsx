import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { NumberInput } from "@raikou/client";

const code = `
import { NumberInput } from '@raikou/core';

function Demo() {
  return (
    <NumberInput
      label="Custom decimal separator"
      placeholder="You can change it"
      decimalSeparator=","
      defaultValue={20.573}
    />
  );
}
`;

function Demo() {
  return (
    <NumberInput
      label="Custom decimal separator"
      placeholder="You can change it"
      decimalSeparator=","
      defaultValue={20.573}
    />
  );
}

export const decimalSeparator: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
