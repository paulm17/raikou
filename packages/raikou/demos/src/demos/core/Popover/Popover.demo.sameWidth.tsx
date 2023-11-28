import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Text, Button } from "@raikou/server";
import { Popover } from "@raikou/client";

const code = `
import { Popover, Text, Button } from '@raikou/core';

function Demo() {
  return (
    <Popover width="target" position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button w={280}>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">
          This popover has same width as target, it is useful when you are building input dropdowns
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

`;

function Demo() {
  return (
    <Popover width="target" position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button w={280}>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">
          This popover has same width as target, it is useful when you are
          building input dropdowns
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export const sameWidth: RaikouDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
