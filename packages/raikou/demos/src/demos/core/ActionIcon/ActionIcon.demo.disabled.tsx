import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ActionIcon, Group } from "@raikou/server";
import { IconHeart } from "@tabler/icons-react";

const code = `
import { ActionIcon, Group } from '@raikou/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <Group justify="center">
      <ActionIcon size="xl" disabled aria-label="Disabled and not interactive">
        <IconHeart />
      </ActionIcon>

      <ActionIcon size="xl" data-disabled aria-label="Has disabled styles but still interactive">
        <IconHeart />
      </ActionIcon>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <ActionIcon size="xl" disabled aria-label="Disabled and not interactive">
        <IconHeart />
      </ActionIcon>

      <ActionIcon
        size="xl"
        data-disabled
        aria-label="Has disabled styles but still interactive"
      >
        <IconHeart />
      </ActionIcon>
    </Group>
  );
}

export const disabled: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
