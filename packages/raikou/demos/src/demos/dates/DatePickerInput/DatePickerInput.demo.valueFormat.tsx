import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { DatePickerInput } from "@raikou/dates";

const code = `
import { DatePickerInput } from '@raikou/dates';

function Demo() {
  return (
    <DatePickerInput
      valueFormat="YYYY MMM DD"
      type="multiple"
      label="Pick date"
      placeholder="Pick date"
    />
  );
}
`;

function Demo() {
  return (
    <DatePickerInput
      valueFormat="YYYY MMM DD"
      type="multiple"
      label="Pick date"
      placeholder="Pick date"
    />
  );
}

export const valueFormat: RaikouDemo = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
