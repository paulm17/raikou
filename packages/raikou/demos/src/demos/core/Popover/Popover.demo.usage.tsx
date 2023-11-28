import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Text, Button } from "@raikou/server";
import { Popover } from "@raikou/client";

const code = `
import { Popover, Text, Button } from '@raikou/core';

function Demo() {
  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">This is uncontrolled popover, it is opened when button is clicked</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`;

function Demo() {
  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">
          This is uncontrolled popover, it is opened when button is clicked
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export const usage: RaikouDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
