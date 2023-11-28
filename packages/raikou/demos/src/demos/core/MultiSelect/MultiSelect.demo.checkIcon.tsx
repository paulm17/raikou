import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { MultiSelect } from "@raikou/client";

const code = `
import { MultiSelect } from '@raikou/core';


function Demo() {
  return (
    <MultiSelect
      {{props}}
      data={['React', 'Angular', 'Svelte', 'Vue']}
      dropdownOpened
      pb={150}
      label="Control check icon"
      placeholder="Pick value"
      defaultValue={["React"]}
    />
  );
}
`;

function Wrapper(props: any) {
  return (
    <MultiSelect
      {...props}
      data={["React", "Angular", "Svelte", "Vue"]}
      dropdownOpened
      pb={150}
      label="Control check icon"
      placeholder="Pick value"
      defaultValue={["React"]}
    />
  );
}

export const checkIcon: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: [
    {
      type: "boolean",
      prop: "withCheckIcon",
      initialValue: true,
      libraryValue: true,
    },
    {
      type: "segmented",
      prop: "checkIconPosition",
      initialValue: "left",
      libraryValue: null,
      data: ["left", "right"],
    },
  ],
};
