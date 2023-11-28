import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Chip, ChipProps } from "@raikou/client";

function Wrapper(props: ChipProps) {
  return (
    <Chip defaultChecked {...props}>
      Awesome chip
    </Chip>
  );
}

const code = `
import { Chip } from '@raikou/core';

function Demo() {
  return <Chip defaultChecked{{props}}>Awesome chip</Chip>
}
`;

export const configurator: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      prop: "color",
      type: "color",
      initialValue: "blue",
      libraryValue: "blue",
    },
    {
      prop: "variant",
      type: "segmented",
      data: [
        { value: "filled", label: "Filled" },
        { value: "outline", label: "Outline" },
        { value: "light", label: "Light" },
      ],
      initialValue: "filled",
      libraryValue: "filled",
    },
    { prop: "size", type: "size", initialValue: "sm", libraryValue: "sm" },
    { prop: "radius", type: "size", initialValue: "xl", libraryValue: "xl" },
  ],
};
