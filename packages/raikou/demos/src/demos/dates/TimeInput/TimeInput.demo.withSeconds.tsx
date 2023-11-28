import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { TimeInput } from "@raikou/dates";

const code = `
import { TimeInput } from '@raikou/dates';

function Demo() {
  return <TimeInput withSeconds />;
}
`;

function Demo() {
  return <TimeInput withSeconds />;
}

export const withSeconds: RaikouDemo = {
  type: "code",
  centered: true,
  maxWidth: 340,
  component: Demo,
  code,
};
