import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button } from "@raikou/server";
import { Tooltip } from "@raikou/client";

const code = `
import { Tooltip, Button } from '@raikou/core';

function Demo() {
  return (
    <Tooltip label="top" position="top" closeDelay={1500}>
      <Tooltip label="bottom" position="bottom" openDelay={500} closeDelay={1000}>
        <Tooltip label="left" position="left" openDelay={1000} closeDelay={500}>
          <Tooltip label="right" position="right" openDelay={1500}>
            <Button variant="outline">Nested Tooltips</Button>
          </Tooltip>
        </Tooltip>
      </Tooltip>
    </Tooltip>
  );
}
`;

function Demo() {
  return (
    <Tooltip label="top" position="top" closeDelay={1500}>
      <Tooltip
        label="bottom"
        position="bottom"
        openDelay={500}
        closeDelay={1000}
      >
        <Tooltip label="left" position="left" openDelay={1000} closeDelay={500}>
          <Tooltip label="right" position="right" openDelay={1500}>
            <Button variant="outline">Nested Tooltips</Button>
          </Tooltip>
        </Tooltip>
      </Tooltip>
    </Tooltip>
  );
}

export const nested: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
