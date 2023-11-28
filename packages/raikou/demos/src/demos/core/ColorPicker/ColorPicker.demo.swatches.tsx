import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { DEFAULT_THEME } from "@raikou/system";
import { Stack } from "@raikou/server";
import { ColorPicker } from "@raikou/client";

const code = `
import { ColorPicker } from '@raikou/core';

function Demo() {
  return (
    <ColorPicker
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
    <Stack align="center">
      <ColorPicker
        format="hex"
        defaultValue="rgba(50, 151, 194, 1)"
        swatches={Object.keys(DEFAULT_THEME.colors).map(
          (color) => DEFAULT_THEME.colors[color][6],
        )}
      />
    </Stack>
  );
}

export const swatches: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
