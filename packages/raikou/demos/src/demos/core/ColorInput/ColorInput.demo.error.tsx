import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ColorInput } from "@raikou/client";

const code = `
import { ColorInput } from '@raikou/core';

function Demo() {
  return (
    <>
      <ColorInput label="Boolean error" placeholder="Boolean error" error />
      <ColorInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <ColorInput label="Boolean error" placeholder="Boolean error" error />
      <ColorInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}

export const error: RaikouDemo = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
