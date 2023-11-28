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
    />
  );
}

export const usage: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
