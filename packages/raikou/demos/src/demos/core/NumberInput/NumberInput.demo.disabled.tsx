import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { NumberInput } from "@raikou/client";

const code = `
import { NumberInput } from '@raikou/core';

function Demo() {
  return <NumberInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`;

function Demo() {
  return (
    <NumberInput disabled label="Disabled input" placeholder="Disabled input" />
  );
}

export const disabled: RaikouDemo = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
