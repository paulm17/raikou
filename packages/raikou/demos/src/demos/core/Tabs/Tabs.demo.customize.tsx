import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Tabs } from "@raikou/client";
import { rem } from "@raikou/system";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import classes from "./Tabs.demo.customize.module.css";

const code = `
import { Tabs, rem } from '@raikou/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Tabs variant="unstyled" defaultValue="settings" classNames={classes}>
      <Tabs.List grow>
        <Tabs.Tab
          value="settings"
          leftSection={<IconSettings style={{ width: rem(16), height: rem(16) }} />}
        >
          Settings
        </Tabs.Tab>
        <Tabs.Tab
          value="messages"
          leftSection={<IconMessageCircle style={{ width: rem(16), height: rem(16) }} />}
        >
          Messages
        </Tabs.Tab>
        <Tabs.Tab
          value="gallery"
          leftSection={<IconPhoto style={{ width: rem(16), height: rem(16) }} />}
        >
          Gallery
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
`;
const cssCode = `
.tab {
  position: relative;
  border: rem(1px) solid light-dark(var(--raikou-color-gray-2), var(--raikou-color-dark-4));
  background-color: light-dark(var(--raikou-color-white), var(--raikou-color-dark-6));

  &:first-of-type {
    border-radius: rem(4px) 0 0 rem(4px);

    @mixin rtl {
      border-radius: 0 rem(4px) rem(4px) 0;
    }
  }

  &:last-of-type {
    border-radius: 0 rem(4px) rem(4px) 0;

    @mixin rtl {
      border-radius: rem(4px) 0 0 rem(4px);
    }
  }

  & + & {
    border-left-width: 0;

    @mixin rtl {
      border-right-width: 0;
      border-left-width: rem(1px);
    }
  }

  @mixin hover {
    background-color: light-dark(var(--raikou-color-gray-0), var(--raikou-color-dark-5));
  }

  &[data-active] {
    z-index: 1;
    background-color: var(--raikou-color-blue-filled);
    border-color: var(--raikou-color-blue-filled);
    color: var(--raikou-color-white);

    @mixin hover {
      background-color: var(--raikou-color-blue-filled-hover);
    }
  }
}
`;

function Demo() {
  return (
    <Tabs variant="unstyled" defaultValue="settings" classNames={classes}>
      <Tabs.List grow>
        <Tabs.Tab
          value="settings"
          leftSection={
            <IconSettings style={{ width: rem(16), height: rem(16) }} />
          }
        >
          Settings
        </Tabs.Tab>
        <Tabs.Tab
          value="messages"
          leftSection={
            <IconMessageCircle style={{ width: rem(16), height: rem(16) }} />
          }
        >
          Messages
        </Tabs.Tab>
        <Tabs.Tab
          value="gallery"
          leftSection={
            <IconPhoto style={{ width: rem(16), height: rem(16) }} />
          }
        >
          Gallery
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}

export const customize: RaikouDemo = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.module.css", code: cssCode, language: "css" },
    { fileName: "Demo.tsx", code, language: "tsx" },
  ],
};
