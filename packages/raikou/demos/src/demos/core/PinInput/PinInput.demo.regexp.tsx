import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { PinInput } from "@raikou/client";

const code = `
import { PinInput } from '@raikou/core';

function Demo() {
  return <PinInput type={/^[0-3]*$/} inputType="tel" inputMode="numeric" />;
}
`;

function Demo() {
  return <PinInput type={/^[0-3]*$/} inputType="tel" inputMode="numeric" />;
}

export const regexp: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
};
