import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Tooltip } from "@raikou/client";
import { Button } from "@raikou/server";

const code = `
import { Tooltip, Button } from '@raikou/core';

function Demo() {
  return (
    <Tooltip{{props}} label="Tooltip" withArrow opened position="top-start">
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Tooltip label="Tooltip" withArrow opened position="top-start" {...props}>
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  );
}

export const arrow: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      type: "segmented",
      prop: "arrowPosition",
      initialValue: "center",
      libraryValue: "center",
      data: ["center", "side"],
    },
    {
      type: "number",
      prop: "arrowOffset",
      initialValue: 10,
      libraryValue: null,
      min: 5,
      max: 50,
    },

    {
      type: "number",
      prop: "arrowSize",
      initialValue: 4,
      libraryValue: null,
      min: 2,
      max: 8,
    },

    {
      type: "number",
      prop: "arrowRadius",
      initialValue: 0,
      libraryValue: 0,
      min: 0,
      max: 10,
    },
  ],
};
