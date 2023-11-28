import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { MultiSelect } from "@raikou/client";
import { inputControls } from "../../../shared";

const code = `
import { MultiSelect } from '@raikou/core';


function Demo() {
  return (
    <MultiSelect
      {{props}}
      placeholder="MultiSelect placeholder"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`;

function Wrapper(props: any) {
  return (
    <MultiSelect
      {...props}
      placeholder="MultiSelect placeholder"
      data={["React", "Angular", "Vue", "Svelte"]}
    />
  );
}

export const configurator: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
