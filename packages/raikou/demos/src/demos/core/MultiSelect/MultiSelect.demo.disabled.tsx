import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { MultiSelect } from "@raikou/client";

const code = `
import { MultiSelect } from '@raikou/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      disabled
    />
  );
}
`;

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={["React", "Angular", "Vue", "Svelte"]}
      disabled
    />
  );
}

export const disabled: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
