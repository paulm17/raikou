import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { TimeInput } from "@raikou/dates";

const code = `
import { TimeInput } from '@raikou/dates';

function Demo() {
  return <TimeInput disabled />;
}
`;

function Demo() {
  return <TimeInput disabled />;
}

export const disabled: RaikouDemo = {
  type: "code",
  centered: true,
  maxWidth: 340,
  component: Demo,
  code,
};
