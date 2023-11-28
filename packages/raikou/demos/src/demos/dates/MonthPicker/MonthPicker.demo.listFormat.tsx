import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { MonthPicker } from "@raikou/dates";

const code = `
import { MonthPicker } from '@raikou/dates';

function Demo() {
  return <MonthPicker monthsListFormat="MM" yearsListFormat="YY" />;
}
`;

function Demo() {
  return <MonthPicker monthsListFormat="MM" yearsListFormat="YY" />;
}

export const listFormat: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
