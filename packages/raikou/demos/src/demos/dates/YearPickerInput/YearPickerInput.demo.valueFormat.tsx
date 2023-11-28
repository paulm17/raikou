import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { YearPickerInput } from "@raikou/dates";

const code = `
import { YearPickerInput } from '@raikou/dates';

function Demo() {
  return (
    <YearPickerInput valueFormat="YY" type="multiple" label="Pick year" placeholder="Pick year" />
  );
}
`;

function Demo() {
  return (
    <YearPickerInput
      valueFormat="YY"
      type="multiple"
      label="Pick year"
      placeholder="Pick year"
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
