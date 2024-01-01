import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Tabs, TabsProps } from "@raikou/client";
import { rem } from "@raikou/theme";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import { TabsStylesApi } from "@raikou/styles-api";

const code = `
import { Tabs, rem } from '@raikou/core';

function Demo() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs defaultValue="gallery"{{props}}>
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto style={iconStyle} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle style={iconStyle} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" rightSection={<IconSettings style={iconStyle} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" pt="xs">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages" pt="xs">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xs">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}
`;

function Demo(props: TabsProps) {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs defaultValue="gallery" {...props}>
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto style={iconStyle} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab
          value="messages"
          leftSection={<IconMessageCircle style={iconStyle} />}
        >
          Messages
        </Tabs.Tab>
        <Tabs.Tab
          value="settings"
          rightSection={<IconSettings style={iconStyle} />}
        >
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" pt="xs">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages" pt="xs">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xs">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}

export const stylesApi: RaikouDemo = {
  type: "styles-api",
  data: TabsStylesApi,
  component: Demo,
  centered: true,
  maxWidth: "100%",
  code,
};
