import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { PasswordInput } from "@raikou/client";

const code = `
import { PasswordInput } from '@raikou/core';

function Demo() {
  return (
    <PasswordInput disabled label="Disabled password input" placeholder="Disabled password input" />
  );
}
`;

function Demo() {
  return (
    <PasswordInput
      disabled
      label="Disabled password input"
      placeholder="Disabled password input"
    />
  );
}

export const disabled: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
