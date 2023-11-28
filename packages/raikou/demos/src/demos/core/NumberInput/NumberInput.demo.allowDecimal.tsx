import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { NumberInput } from "@raikou/client";

const code = `
import { NumberInput } from '@raikou/core';

function Demo() {
  return (
    <NumberInput
      label="Decimals are not allowed"
      placeholder="Do not enter decimal numbers"
      allowDecimal={false}
    />
  );
}
`;

function Demo() {
  return (
    <NumberInput
      label="Decimals are not allowed"
      placeholder="Do not enter decimal numbers"
      allowDecimal={false}
    />
  );
}

export const allowDecimal: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
