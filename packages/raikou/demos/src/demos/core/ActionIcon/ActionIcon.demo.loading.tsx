import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ActionIcon, Group } from "@raikou/server";

const code = `
import { ActionIcon, Group } from '@raikou/core';

function Demo() {
  return (
    <Group justify="center">
      <ActionIcon loading aria-label="Filled loading" />
      <ActionIcon variant="light" loading aria-label="Light loading" />
      <ActionIcon variant="outline" loading aria-label="Outline loading" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <ActionIcon loading aria-label="Filled loading" />
      <ActionIcon variant="light" loading aria-label="Light loading" />
      <ActionIcon variant="outline" loading aria-label="Outline loading" />
    </Group>
  );
}

export const loading: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
