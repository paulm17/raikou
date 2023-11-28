import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button, Text, Group } from "@raikou/server";
import { HoverCard } from "@raikou/client";

const code = `
import { HoverCard, Button, Text, Group } from '@raikou/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <Button>Hover to reveal the card</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">
            Hover card is revealed when user hovers over target element, it will be hidden once
            mouse is not over both target and dropdown elements
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}

`;

function Demo() {
  return (
    <Group justify="center">
      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <Button>Hover to reveal the card</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">
            Hover card is revealed when user hovers over target element, it will
            be hidden once mouse is not over both target and dropdown elements
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}

export const usage: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
