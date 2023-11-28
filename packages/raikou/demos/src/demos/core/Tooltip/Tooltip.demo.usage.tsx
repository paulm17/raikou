import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button } from "@raikou/server";
import { Tooltip } from "@raikou/client";

const code = `
import { Tooltip, Button } from '@raikou/core';

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  );
}
`;

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  );
}

export const usage: RaikouDemo = {
  type: "code",
  component: Demo,
  centered: true,
  code,
};
