import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { Stack, Text } from "@raikou/server";
import { ColorPicker, ColorPickerProps } from "@raikou/client";

function Wrapper(props: ColorPickerProps) {
  const [value, onChange] = useState("#C5D899");

  return (
    <Stack align="center">
      <ColorPicker value={value} onChange={onChange} {...props} />
      <Text>{value}</Text>
    </Stack>
  );
}

const code = `
import { ColorPicker } from '@raikou/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`;

export const formatsConfigurator: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    {
      prop: "format",
      type: "select",
      initialValue: "hex",
      libraryValue: "hex",
      data: [
        { value: "hex", label: "HEX" },
        { value: "hexa", label: "HEXA" },
        { value: "rgb", label: "RGB" },
        { value: "rgba", label: "RGBA" },
        { value: "hsl", label: "HSL" },
        { value: "hsla", label: "HSLA" },
      ],
    },
  ],
};
