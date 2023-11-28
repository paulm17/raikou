import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ColorPicker, ColorPickerProps } from "@raikou/client";
import { DEFAULT_THEME } from "@raikou/system";

function Wrapper(props: ColorPickerProps) {
  return (
    <ColorPicker
      mx="auto"
      format="rgba"
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
  return <ColorPicker{{props}} />;
}
`;

export const sizeConfigurator: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    { prop: "size", type: "size", initialValue: "sm", libraryValue: "sm" },
  ],
};
