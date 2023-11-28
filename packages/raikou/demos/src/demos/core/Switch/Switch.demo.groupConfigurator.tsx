import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { SwitchGroupProps, Switch } from "@raikou/client";
import { Group } from "@raikou/server";

const code = `
import { Switch, Group } from '@raikou/core';

function Demo() {
  return (
    <Switch.Group
      defaultValue={['react']}
      {{props}}
    >
      <Group mt="xs">
        <Switch value="react" label="React" />
        <Switch value="svelte" label="Svelte" />
        <Switch value="ng" label="Angular" />
        <Switch value="vue" label="Vue" />
      </Group>
    </Switch.Group>
  );
}
`;

function Wrapper(props: SwitchGroupProps) {
  return (
    <Switch.Group defaultValue={["react"]} {...props}>
      <Group mt="xs">
        <Switch value="react" label="React" />
        <Switch value="svelte" label="Svelte" />
        <Switch value="ng" label="Angular" />
        <Switch value="vue" label="Vue" />
      </Group>
    </Switch.Group>
  );
}

export const groupConfigurator: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      prop: "label",
      type: "string",
      initialValue: "Select your favorite framework/library",
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
