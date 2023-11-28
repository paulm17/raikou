import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button } from "@raikou/server";
import { Tooltip } from "@raikou/client";

const code = `
import { Button, Tooltip } from '@raikou/core';

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <Button data-disabled onClick={(event) => event.preventDefault()}>
        Disabled button with tooltip
      </Button>
    </Tooltip>
  );
}
`;

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <Button data-disabled onClick={(event) => event.preventDefault()}>
        Disabled button with tooltip
      </Button>
    </Tooltip>
  );
}

export const disabledTooltip: RaikouDemo = {
  type: "code",
  component: Demo,
  centered: true,
  code,
};
