import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Select } from "@raikou/client";

const code = `
import { Select } from '@raikou/core';

function Demo() {
  return (
    <>
      <Select
        label="Option can NOT be deselected"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        allowDeselect={false}
      />

      <Select
        label="Option can be deselected"
        description="This is default behavior, click 'React' in the dropdown"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        allowDeselect
        mt="md"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Select
        label="Option can NOT be deselected"
        placeholder="Pick value"
        data={["React", "Angular", "Vue", "Svelte"]}
        defaultValue="React"
        allowDeselect={false}
      />

      <Select
        label="Option can be deselected"
        description="This is default behavior, click 'React' in the dropdown"
        placeholder="Pick value"
        data={["React", "Angular", "Vue", "Svelte"]}
        defaultValue="React"
        allowDeselect
        mt="md"
      />
    </>
  );
}

export const allowDeselect: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
