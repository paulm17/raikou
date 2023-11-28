import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ColorInput } from "@raikou/client";
import { DEFAULT_THEME } from "@raikou/system";

const code = `
import { ColorInput, DEFAULT_THEME } from '@raikou/core';

function Demo() {
  return (
    <ColorInput
      closeOnColorSwatchClick
      label="Dropdown is closed when color swatch is clicked"
      placeholder="Click color swatch"
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
      closeOnColorSwatchClick
      label="Dropdown is closed when color swatch is clicked"
      placeholder="Click color swatch"
      swatches={[
        ...DEFAULT_THEME.colors.red,
        ...DEFAULT_THEME.colors.green,
        ...DEFAULT_THEME.colors.blue,
      ]}
    />
  );
}

export const closeOnColorSwatchClick: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
