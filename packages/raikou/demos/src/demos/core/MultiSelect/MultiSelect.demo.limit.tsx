import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { MultiSelect } from "@raikou/client";

const code = `
import { MultiSelect } from '@raikou/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <MultiSelect
      label="100 000 options autocomplete"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
      searchable
    />
  );
}
`;

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => `Option ${index}`);

function Demo() {
  return (
    <MultiSelect
      label="100 000 options autocomplete"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
      searchable
    />
  );
}

export const limit: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
