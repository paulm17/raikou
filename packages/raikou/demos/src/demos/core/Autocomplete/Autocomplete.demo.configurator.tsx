import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Autocomplete } from "@raikou/client";
import { inputControls } from "../../../shared";

const code = `
import { Autocomplete } from '@raikou/core';


function Demo() {
  return (
    <Autocomplete
      {{props}}
      placeholder="Autocomplete placeholder"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`;

function Wrapper(props: any) {
  return (
    <Autocomplete
      {...props}
      placeholder="Autocomplete placeholder"
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
