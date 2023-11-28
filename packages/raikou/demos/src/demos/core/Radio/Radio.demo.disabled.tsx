import { Radio } from "@raikou/client";
import { Group } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import React from "react";

const code = `
import { Radio, Group } from '@raikou/core';

function Demo() {
  return (
    <Group>
      <Radio checked disabled label="React" value="react" />
      <Radio disabled label="Angular" value="nu" />
      <Radio disabled label="Svelte" value="sv" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Radio checked disabled label="React" value="react" />
      <Radio disabled label="Angular" value="nu" />
      <Radio disabled label="Svelte" value="sv" />
    </Group>
  );
}

export const disabled: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
