import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { DatePicker } from "@raikou/dates";

const code = `
import { DatePicker } from '@raikou/dates';

function Demo() {
  return <DatePicker hideWeekdays />;
}
`;

function Demo() {
  return <DatePicker hideWeekdays />;
}

export const hideWeekdays: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
