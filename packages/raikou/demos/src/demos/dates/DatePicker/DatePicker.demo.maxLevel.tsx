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
      <DatePicker maxLevel="year" />
      <DatePicker maxLevel="month" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <DatePicker maxLevel="year" />
      <DatePicker maxLevel="month" />
    </Group>
  );
}

export const maxLevel: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
