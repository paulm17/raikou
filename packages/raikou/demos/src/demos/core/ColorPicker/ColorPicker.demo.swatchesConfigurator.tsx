import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { DEFAULT_THEME } from "@raikou/system";
import { ColorPicker, ColorPickerProps } from "@raikou/client";

function Wrapper(props: ColorPickerProps) {
  return (
    <ColorPicker
      mx="auto"
      format="hex"
      defaultValue="rgba(50, 151, 194, 1)"
      swatches={Object.keys(DEFAULT_THEME.colors).map(
        (color) => DEFAULT_THEME.colors[color][6],
      )}
      {...props}
    />
  );
}

const code = `
import { ColorPicker } from '@raikou/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={[${Object.keys(
      DEFAULT_THEME.colors,
    )
      .map((color) => `'${DEFAULT_THEME.colors[color][6]}'`)
      .join(", ")}]} />
  );
}
`;

export const swatchesConfigurator: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    {
      prop: "swatchesPerRow",
      type: "number",
      initialValue: 7,
      libraryValue: 7,
      min: 5,
      max: 12,
    },
  ],
};
