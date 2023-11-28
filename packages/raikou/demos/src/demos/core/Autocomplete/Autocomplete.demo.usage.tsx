import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Autocomplete } from "@raikou/client";

const code = `
import { Autocomplete } from '@raikou/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`;

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
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
