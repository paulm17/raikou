import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { DatePicker } from "@raikou/dates";

const code = `
import { DatePicker } from '@raikou/dates';

function Demo() {
  return <DatePicker hideOutsideDates />;
}
`;

function Demo() {
  return <DatePicker hideOutsideDates />;
}

export const hideOutsideDates: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
