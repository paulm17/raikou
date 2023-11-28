import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Group } from "@raikou/server";
import { DatePicker } from "@raikou/dates";

const code = `
import { Group } from '@raikou/core';
import { DatePicker } from '@raikou/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker firstDayOfWeek={0} />
      <DatePicker firstDayOfWeek={6} />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <DatePicker firstDayOfWeek={0} />
      <DatePicker firstDayOfWeek={6} />
    </Group>
  );
}

export const firstDayOfWeek: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
