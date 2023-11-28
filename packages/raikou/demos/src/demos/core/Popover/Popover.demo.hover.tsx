import React from "react";
import { useDisclosure } from "@raikou/hooks";
import { RaikouDemo } from "@raikou/ds";
import { Text, Button } from "@raikou/server";
import { Popover } from "@raikou/client";

const code = `
import { useDisclosure } from '@raikou/hooks';
import { Popover, Text, Button } from '@raikou/core';

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
      <Popover.Target>
        <Button onMouseEnter={open} onMouseLeave={close}>
          Hover to see popover
        </Button>
      </Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: 'none' }}>
        <Text size="sm">This popover is shown when user hovers the target element</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`;

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover
      width={200}
      position="bottom"
      withArrow
      shadow="md"
      opened={opened}
    >
      <Popover.Target>
        <Button onMouseEnter={open} onMouseLeave={close}>
          Hover to see popover
        </Button>
      </Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: "none" }}>
        <Text size="sm">
          This popover is shown when user hovers the target element
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export const hover: RaikouDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
