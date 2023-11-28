import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ColorInput, ColorInputProps } from "@raikou/client";

function Wrapper(props: ColorInputProps) {
  return (
    <ColorInput
      maw={320}
      mx="auto"
      label="Choose color format"
      placeholder={props.format}
      defaultValue="#C5D899"
      {...props}
    />
  );
}

const code = `
import { ColorInput } from '@raikou/core';

function Demo() {
  return <ColorInput defaultValue="#C5D899"{{props}} />;
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
