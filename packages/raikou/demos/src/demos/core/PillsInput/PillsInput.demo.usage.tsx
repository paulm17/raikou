import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { PillsInput, Pill } from "@raikou/client";

const code = `
import { PillsInput, Pill } from '@raikou/core';

function Demo() {
  return (
    <PillsInput label="PillsInput">
      <Pill.Group>
        <Pill>React</Pill>
        <Pill>Vue</Pill>
        <Pill>Svelte</Pill>
        <PillsInput.Field placeholder="Enter tags" />
      </Pill.Group>
    </PillsInput>
  );
}
`;

function Demo() {
  return (
    <PillsInput label="PillsInput">
      <Pill.Group>
        <Pill>React</Pill>
        <Pill>Vue</Pill>
        <Pill>Svelte</Pill>
        <PillsInput.Field placeholder="Enter tags" />
      </Pill.Group>
    </PillsInput>
  );
}

export const usage: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 440,
  centered: true,
};
