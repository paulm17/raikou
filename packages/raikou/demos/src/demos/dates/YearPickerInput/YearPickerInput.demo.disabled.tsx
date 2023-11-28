import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { YearPickerInput } from "@raikou/dates";

const code = `
import { YearPickerInput } from '@raikou/dates';

function Demo() {
  return (
    <YearPickerInput
      valueFormat="YY"
      type="multiple"
      label="Disabled"
      placeholder="Pick year"
      disabled
    />
  );
}
`;

function Demo() {
  return (
    <YearPickerInput
      valueFormat="YY"
      type="multiple"
      label="Disabled"
      placeholder="Pick year"
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
