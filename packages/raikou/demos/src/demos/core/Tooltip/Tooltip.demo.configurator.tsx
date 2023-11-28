import React from "react";
import { Button } from "@raikou/server";
import { Tooltip } from "@raikou/client";
import { RaikouDemo } from "@raikou/ds";

function Wrapper(props: any) {
  return (
    <Tooltip label="Tooltip" {...props}>
      <Button variant="outline">With tooltip</Button>
    </Tooltip>
  );
}

const code = `
import { Tooltip, Button } from '@raikou/core';

function Demo() {
  return (
    <Tooltip label="Tooltip"{{props}}>
      <Button variant="outline">
        With tooltip
      </Button>
    </Tooltip>
  );
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
      libraryValue: "__none__",
    },
  ],
};
