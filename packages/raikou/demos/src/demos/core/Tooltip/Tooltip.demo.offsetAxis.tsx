import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button } from "@raikou/server";
import { Tooltip } from "@raikou/client";
import { FLOATING_POSITION_DATA } from "../../../shared";

const code = (props: any) => `
import { Tooltip, Button } from '@raikou/core';

function Demo() {
  return (
    <Tooltip
      position="${props.position}"
      opened
      label="Tooltip"
      offset={{ mainAxis: ${props.mainAxis}, crossAxis: ${props.crossAxis} }}
    >
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Tooltip
      position={props.position}
      opened
      label="Tooltip"
      offset={{ mainAxis: props.mainAxis, crossAxis: props.crossAxis }}
    >
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}

export const offsetAxis: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      type: "select",
      prop: "position",
      initialValue: "top",
      data: FLOATING_POSITION_DATA,
      libraryValue: null,
    },
    {
      type: "number",
      prop: "mainAxis",
      initialValue: 5,
      libraryValue: null,
      min: -50,
      max: 50,
    },
    {
      type: "number",
      prop: "crossAxis",
      initialValue: 0,
      libraryValue: null,
      min: -50,
      max: 50,
    },
  ],
};
