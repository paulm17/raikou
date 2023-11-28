import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { DateInput } from "@raikou/dates";

const code = `
import { DateInput } from '@raikou/dates';

function Demo() {
  return <DateInput label="Disabled" placeholder="Date input" disabled />;
}
`;

function Demo() {
  return <DateInput label="Disabled" placeholder="Date input" disabled />;
}

export const disabled: RaikouDemo = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
