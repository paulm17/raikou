import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Autocomplete } from "@raikou/client";

const code = `
import { Autocomplete } from '@raikou/core';

function Demo() {
  return (
    <>
      <Autocomplete
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <Autocomplete
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Autocomplete
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={["React", "Angular", "Vue", "Svelte"]}
      />
      <Autocomplete
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
        data={["React", "Angular", "Vue", "Svelte"]}
      />
    </>
  );
}

export const error: RaikouDemo = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
