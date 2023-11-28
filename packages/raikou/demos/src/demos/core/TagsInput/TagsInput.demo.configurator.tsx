import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { TagsInput } from "@raikou/client";
import { inputControls } from "../../../shared";

const code = `
import { TagsInput } from '@raikou/core';


function Demo() {
  return (
    <TagsInput
      {{props}}
      placeholder="TagsInput placeholder"
      value={['First', 'Second']}
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`;

function Wrapper(props: any) {
  return (
    <TagsInput
      {...props}
      placeholder="TagsInput placeholder"
      value={["First", "Second"]}
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
