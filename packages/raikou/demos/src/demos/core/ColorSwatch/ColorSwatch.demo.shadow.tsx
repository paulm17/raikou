import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ColorSwatch } from "@raikou/server";

const code = `
import { ColorSwatch } from '@raikou/core';

function Demo() {
  return <ColorSwatch color="rgba(255, 255, 255, 0.7)"{{props}} />;
}
`;

function Wrapper(props: any) {
  return <ColorSwatch color="rgba(255, 255, 255, 0.7)" {...props} />;
}

export const shadow: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      type: "boolean",
      prop: "withShadow",
      initialValue: true,
      libraryValue: true,
    },
  ],
};
