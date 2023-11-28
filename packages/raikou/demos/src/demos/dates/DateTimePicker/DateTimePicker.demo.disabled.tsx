import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { DateTimePicker } from "@raikou/dates";

const code = `
import { DateTimePicker } from '@raikou/dates';

function Demo() {
  return <DateTimePicker label="Disabled" placeholder="Pick date and time" disabled />;
}
`;

function Demo() {
  return (
    <DateTimePicker
      label="Disabled"
      placeholder="Pick date and time"
      disabled
    />
  );
}

export const disabled: RaikouDemo = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
