import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { DatesProvider, DateTimePicker } from "@raikou/dates";

const code = `
import { DatesProvider, DateTimePicker } from '@raikou/dates';

function Demo() {
  return (
    <DatesProvider settings={{ timezone: 'America/New_York' }}>
      <DateTimePicker label="Pick a Date" placeholder="Pick a Date" defaultValue={new Date('2000-10-03 02:10:00Z')} />
    </DatesProvider>
  );
}
`;

function Demo() {
  return (
    <DatesProvider settings={{ timezone: "America/New_York" }}>
      <DateTimePicker
        label="Pick a Date"
        placeholder="Pick a Date"
        defaultValue={new Date("2000-10-03 02:10:00Z")}
      />
    </DatesProvider>
  );
}

export const timezone: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
