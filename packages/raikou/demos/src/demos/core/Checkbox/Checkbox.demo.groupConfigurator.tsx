import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { CheckboxGroupProps, Checkbox } from "@raikou/client";
import { Group } from "@raikou/server";

const code = `
import { Checkbox, Group } from '@raikou/core';


function Demo() {
  return (
    <Checkbox.Group
      defaultValue={['react']}
      {{props}}
    >
      <Group mt="xs">
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="ng" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Group>
    </Checkbox.Group>
  );
}
`;

function Wrapper(props: Partial<CheckboxGroupProps>) {
  return (
    <Checkbox.Group defaultValue={["react"]} {...props}>
      <Group mt="xs">
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="ng" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Group>
    </Checkbox.Group>
  );
}

export const groupConfigurator: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: "100%",
  controls: [
    {
      prop: "label",
      type: "string",
      initialValue: "Select your favorite frameworks/libraries",
      libraryValue: "",
    },
    {
      prop: "description",
      type: "string",
      initialValue: "This is anonymous",
      libraryValue: "",
    },
    { prop: "error", type: "string", initialValue: "", libraryValue: "" },
    {
      prop: "withAsterisk",
      type: "boolean",
      initialValue: true,
      libraryValue: false,
    },
  ],
};
