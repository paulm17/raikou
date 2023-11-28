import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button } from "@raikou/server";
import { Popover, Select } from "@raikou/client";
import { DatePickerInput } from "@raikou/dates";

const code = `
import { Button, Popover, Select } from '@raikou/core';
import { DatePickerInput } from '@raikou/dates';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown bg="var(--raikou-color-body)">
        <Select
          label="Select within Popover"
          placeholder="Select within Popover"
          comboboxProps={{ withinPortal: false }}
          data={['React', 'Angular', 'Svelte', 'Vue']}
        />
        <DatePickerInput
          label="DatePickerInput within Popover"
          placeholder="DatePickerInput within Popover"
          popoverProps={{ withinPortal: false }}
          mt="md"
        />
      </Popover.Dropdown>
    </Popover>
  );
}
`;

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown bg="var(--raikou-color-body)">
        <Select
          label="Select within Popover"
          placeholder="Select within Popover"
          comboboxProps={{ withinPortal: false }}
          data={["React", "Angular", "Svelte", "Vue"]}
        />
        <DatePickerInput
          label="DatePickerInput within Popover"
          placeholder="DatePickerInput within Popover"
          popoverProps={{ withinPortal: false }}
          mt="md"
        />
      </Popover.Dropdown>
    </Popover>
  );
}

export const portalChildren: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
};
