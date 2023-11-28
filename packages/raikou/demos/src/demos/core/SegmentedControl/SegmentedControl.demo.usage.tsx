import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { SegmentedControl } from "@raikou/client";

const code = `
import { SegmentedControl } from '@raikou/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
`;

function Wrapper(props: any) {
  return <SegmentedControl data={["React", "Angular", "Vue"]} {...props} />;
}

export const usage: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    {
      prop: "orientation",
      type: "segmented",
      initialValue: "horizontal",
      libraryValue: "horizontal",
      data: [
        { label: "horizontal", value: "horizontal" },
        { label: "vertical", value: "vertical" },
      ],
    },
    {
      prop: "fullWidth",
      type: "boolean",
      initialValue: false,
      libraryValue: false,
    },
    { type: "size", prop: "size", initialValue: "sm", libraryValue: "sm" },
    { type: "size", prop: "radius", initialValue: "sm", libraryValue: "sm" },
  ],
};
