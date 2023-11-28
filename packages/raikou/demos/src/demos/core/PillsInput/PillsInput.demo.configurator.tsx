import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { PillsInput, Pill } from "@raikou/client";
import { inputControls } from "../../../shared";

const code = `
import { PillsInput, Pill } from '@raikou/core';


function Demo() {
  return (
    <PillsInput
      label="PillsInput"
      {{props}}
    >
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

function Wrapper(props: any) {
  return (
    <PillsInput label="PillsInput" {...props}>
      <Pill.Group>
        <Pill>React</Pill>
        <Pill>Vue</Pill>
        <Pill>Svelte</Pill>
        <PillsInput.Field placeholder="Enter tags" />
      </Pill.Group>
    </PillsInput>
  );
}

export const configurator: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 440,
  controls: inputControls,
};
