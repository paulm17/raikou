import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { DatePicker } from "@raikou/dates";

const code = `
import { DatePicker } from '@raikou/dates';

function Demo() {
  return <DatePicker weekendDays={[1, 2]} />;
}
`;

function Demo() {
  return <DatePicker weekendDays={[1, 2]} />;
}

export const weekendDays: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
