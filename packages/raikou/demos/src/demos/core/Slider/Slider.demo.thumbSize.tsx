import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Slider } from "@raikou/client";

function Wrapper(props: any) {
  return <Slider {...props} defaultValue={20} />;
}

const code = `
import { Slider } from '@raikou/core';

function Demo() {
  return <Slider{{props}} defaultValue={20} />;
}
`;

export const thumbSize: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  maxWidth: 400,
  centered: true,
  controls: [
    {
      prop: "thumbSize",
      type: "number",
      min: 14,
      max: 32,
      initialValue: 14,
      libraryValue: null,
    },
  ],
};
