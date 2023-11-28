import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Select } from "@raikou/client";
import { inputControls } from "../../../shared";

const code = `
import { Select } from '@raikou/core';


function Demo() {
  return (
    <Select
      {{props}}
      placeholder="Select placeholder"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`;

function Wrapper(props: any) {
  return (
    <Select
      {...props}
      placeholder="Select placeholder"
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
