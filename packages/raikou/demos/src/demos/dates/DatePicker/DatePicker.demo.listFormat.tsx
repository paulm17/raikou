import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { DatePicker } from "@raikou/dates";

const code = `
import { DatePicker } from '@raikou/dates';

function Demo() {
  return <DatePicker monthsListFormat="MM" yearsListFormat="YY" />;
}
`;

function Demo() {
  return <DatePicker monthsListFormat="MM" yearsListFormat="YY" />;
}

export const listFormat: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
