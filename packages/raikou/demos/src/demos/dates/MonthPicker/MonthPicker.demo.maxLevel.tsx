import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { MonthPicker } from "@raikou/dates";

const code = `
import { MonthPicker } from '@raikou/dates';

function Demo() {
  return <MonthPicker maxLevel="year" />;
}
`;

function Demo() {
  return <MonthPicker maxLevel="year" />;
}

export const maxLevel: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
