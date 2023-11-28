import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { DateInput } from "@raikou/dates";

const code = `
import { DateInput } from '@raikou/dates';

function Demo() {
  return <DateInput valueFormat="YYYY MMM DD" label="Date input" placeholder="Date input" />;
}
`;

function Demo() {
  return (
    <DateInput
      valueFormat="YYYY MMM DD"
      label="Date input"
      placeholder="Date input"
    />
  );
}

export const format: RaikouDemo = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
