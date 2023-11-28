import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { MultiSelect, ComboboxItem, OptionsFilter } from "@raikou/client";

const code = `
import { MultiSelect, ComboboxItem, OptionsFilter } from '@raikou/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['4 – React', '1 – Angular', '3 – Vue', '2 – Svelte']}
      filter={optionsFilter}
      searchable
    />
  );
}
`;

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim()),
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={["4 – React", "1 – Angular", "3 – Vue", "2 – Svelte"]}
      filter={optionsFilter}
      searchable
    />
  );
}

export const sort: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
