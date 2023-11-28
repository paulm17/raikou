import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ColorInput } from "@raikou/client";
import { DEFAULT_THEME } from "@raikou/system";

const code = `
import { ColorInput, DEFAULT_THEME } from '@raikou/core';

function Demo() {
  return (
    <ColorInput
      placeholder="Pick color"
      label="Your favorite color"
      disallowInput
      withPicker={false}
      swatches={[
        ...DEFAULT_THEME.colors.red,
        ...DEFAULT_THEME.colors.green,
        ...DEFAULT_THEME.colors.blue,
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <ColorInput
      maw={320}
      mx="auto"
      placeholder="Pick color"
      label="Your favorite color"
      disallowInput
      withPicker={false}
      swatches={[
        ...DEFAULT_THEME.colors.red,
        ...DEFAULT_THEME.colors.green,
        ...DEFAULT_THEME.colors.blue,
      ]}
    />
  );
}

export const swatchesOnly: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
