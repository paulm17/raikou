import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ColorInput } from "@raikou/client";

const code = `
import { ColorInput } from '@raikou/core';

function Demo() {
  return (
    <ColorInput withPicker={false} pointer label="Without dropdown" placeholder="Enter value" />
  );
}
`;

function Demo() {
  return (
    <ColorInput
      withPicker={false}
      pointer
      label="Without dropdown"
      placeholder="Enter value"
    />
  );
}

export const withPicker: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
