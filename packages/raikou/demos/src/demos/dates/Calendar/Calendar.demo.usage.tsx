import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Calendar } from "@raikou/dates";

const code = `
import { Calendar } from '@raikou/dates';

function Demo() {
  return <Calendar />;
}
`;

function Demo() {
  return <Calendar />;
}

export const usage: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
