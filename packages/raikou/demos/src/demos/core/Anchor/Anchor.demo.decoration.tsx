import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Anchor, Group } from "@raikou/server";

const code = `
import { Anchor, Group } from '@raikou/core';

function Demo() {
  return (
    <Group justify="center">
      <Anchor href="https://raikou.dev/" target="_blank" underline="always">
        Underline always
      </Anchor>
      <Anchor href="https://raikou.dev/" target="_blank" underline="hover">
        Underline hover
      </Anchor>
      <Anchor href="https://raikou.dev/" target="_blank" underline="never">
        Underline never
      </Anchor>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <Anchor href="https://raikou.dev/" target="_blank" underline="always">
        Underline always
      </Anchor>
      <Anchor href="https://raikou.dev/" target="_blank" underline="hover">
        Underline hover
      </Anchor>
      <Anchor href="https://raikou.dev/" target="_blank" underline="never">
        Underline never
      </Anchor>
    </Group>
  );
}

export const decoration: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
