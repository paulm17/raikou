import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Code, Group } from "@raikou/server";

const code = `
import { Code, Group } from '@raikou/core';

function Demo() {
  return (
    <Group justify="center">
      <Code color="blue.9" c="white">
        React.createElement()
      </Code>
      <Code color="var(--raikou-color-blue-light)">React.createElement()</Code>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <Code color="blue.9" c="white">
        React.createElement()
      </Code>
      <Code color="var(--raikou-color-blue-light)">React.createElement()</Code>
    </Group>
  );
}

export const colors: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
