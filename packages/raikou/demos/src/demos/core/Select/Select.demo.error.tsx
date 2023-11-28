import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Select } from "@raikou/client";

const code = `
import { Select } from '@raikou/core';

function Demo() {
  return (
    <>
      <Select
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <Select
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
      <Select
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={["React", "Angular", "Vue", "Svelte"]}
      />
      <Select
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
