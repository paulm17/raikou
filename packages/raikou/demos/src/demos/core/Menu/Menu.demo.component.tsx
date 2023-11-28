import React from "react";
import { IconExternalLink } from "@tabler/icons-react";
import { RaikouDemo } from "@raikou/ds";
import { Button } from "@raikou/server";
import { Menu } from "@raikou/client";
import { rem } from "@raikou/system";

const code = `
import { Menu, Button, rem } from '@raikou/core';
import { IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <Menu width={200} shadow="md">
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item component="a" href="https://raikou.dev">
          Raikou website
        </Menu.Item>
        <Menu.Item
          leftSection={<IconExternalLink style={{ width: rem(14), height: rem(14) }} />}
          component="a"
          href="https://raikou.dev"
          target="_blank"
        >
          External link
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Menu width={200} shadow="md">
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item component="a" href="https://raikou.dev">
          Raikou website
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconExternalLink style={{ width: rem(14), height: rem(14) }} />
          }
          component="a"
          href="https://raikou.dev"
          target="_blank"
        >
          External link
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export const component: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true,
};
