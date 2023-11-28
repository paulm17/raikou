import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ColorInput } from "@raikou/client";
import { DEFAULT_THEME } from "@raikou/system";

const code = `
import { ColorInput } from '@raikou/core';

function Demo() {
  return (
    <ColorInput
      format="hex"
      swatches={[${Object.keys(DEFAULT_THEME.colors)
        .map((color) => `'${DEFAULT_THEME.colors[color][6]}'`)
        .join(", ")}]}
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
      swatches={Object.keys(DEFAULT_THEME.colors).map(
        (color) => DEFAULT_THEME.colors[color][6],
      )}
    />
  );
}

export const swatches: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
