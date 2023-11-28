import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Select } from "@raikou/client";

const code = `
import { Select } from '@raikou/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      defaultValue="React"
      clearable
    />
  );
}
`;

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={["React", "Angular", "Vue", "Svelte"]}
      defaultValue="React"
      clearable
    />
  );
}

export const clearable: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
