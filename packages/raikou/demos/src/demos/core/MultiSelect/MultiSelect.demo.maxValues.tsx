import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { MultiSelect } from "@raikou/client";

const code = `
import { MultiSelect } from '@raikou/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Select up to 2 libraries"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      maxValues={2}
    />
  );
}
`;

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Select up to 2 libraries"
      data={["React", "Angular", "Vue", "Svelte"]}
      maxValues={2}
    />
  );
}

export const maxValues: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
