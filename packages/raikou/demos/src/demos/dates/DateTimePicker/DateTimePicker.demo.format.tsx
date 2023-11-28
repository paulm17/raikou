import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { DateTimePicker } from "@raikou/dates";

const code = `
import { DateTimePicker } from '@raikou/dates';

function Demo() {
  return (
    <DateTimePicker
      valueFormat="DD MMM YYYY hh:mm A"
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
`;

function Demo() {
  return (
    <DateTimePicker
      valueFormat="DD MMM YYYY hh:mm A"
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}

export const format: RaikouDemo = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
