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
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={[
        { value: "react", label: "React" },
        { value: "ng", label: "Angular" },
        { value: "vue", label: "Vue", disabled: true },
        { value: "svelte", label: "Svelte", disabled: true },
      ]}
    />
  );
}

export const disabledOptions: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
