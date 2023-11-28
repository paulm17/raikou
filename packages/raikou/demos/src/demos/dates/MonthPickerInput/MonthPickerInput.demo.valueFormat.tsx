import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { MonthPickerInput } from "@raikou/dates";

const code = `
import { MonthPickerInput } from '@raikou/dates';

function Demo() {
  return (
    <MonthPickerInput
      valueFormat="YYYY MMM"
      type="multiple"
      label="Pick month"
      placeholder="Pick month"
    />
  );
}
`;

function Demo() {
  return (
    <MonthPickerInput
      valueFormat="YYYY MMM"
      type="multiple"
      label="Pick month"
      placeholder="Pick month"
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
