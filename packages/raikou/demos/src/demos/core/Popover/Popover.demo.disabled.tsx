import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Text, Button } from "@raikou/server";
import { Popover } from "@raikou/client";

const code = `
import { Popover, Text, Button } from '@raikou/core';

function Demo() {
  return (
    <Popover width={200}{{props}}>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Disabled popover dropdown is always hidden</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Popover width={200} {...props}>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Disabled popover dropdown is always hidden</Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export const disabled: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      type: "boolean",
      prop: "disabled",
      initialValue: false,
      libraryValue: false,
    },
  ],
};
