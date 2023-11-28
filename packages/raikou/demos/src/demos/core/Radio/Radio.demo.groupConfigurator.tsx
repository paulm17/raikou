import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Group } from "@raikou/server";
import { RadioGroupProps, Radio } from "@raikou/client";

const code = `
import { Radio } from '@raikou/core';


function Demo() {
  return (
    <Radio.Group
      name="favoriteFramework"
      {{props}}
    >
      <Group mt="xs">
        <Radio value="react" label="React" />
        <Radio value="svelte" label="Svelte" />
        <Radio value="ng" label="Angular" />
        <Radio value="vue" label="Vue" />
      </Group>
    </Radio.Group>
  );
}
`;

function Wrapper(props: Partial<RadioGroupProps>) {
  return (
    <Radio.Group defaultValue="react" name="favoriteFramework" {...props}>
      <Group mt="xs">
        <Radio value="react" label="React" />
        <Radio value="svelte" label="Svelte" />
        <Radio value="ng" label="Angular" />
        <Radio value="vue" label="Vue" />
      </Group>
    </Radio.Group>
  );
}

export const groupConfigurator: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  centered: true,
  code,
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
