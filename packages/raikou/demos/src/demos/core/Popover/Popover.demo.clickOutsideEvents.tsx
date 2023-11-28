import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Text, Button } from "@raikou/server";
import { Popover } from "@raikou/client";

const code = `
import { Popover, Text, Button } from '@raikou/core';

function Demo() {
  return (
    <Popover width={200} position="bottom" clickOutsideEvents={['mouseup', 'touchend']}>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Popover will be closed with mouseup and touchend events</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`;

function Demo() {
  return (
    <Popover
      width={200}
      position="bottom"
      clickOutsideEvents={["mouseup", "touchend"]}
    >
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">
          Popover will be closed with mouseup and touchend events
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export const clickOutsideEvents: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
};
