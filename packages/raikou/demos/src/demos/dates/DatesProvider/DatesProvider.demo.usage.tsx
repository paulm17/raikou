import "dayjs/locale/ru";
import React from "react";
import { RaikouDemo } from "@raikou/ds";
import {
  DatesProvider,
  MonthPickerInput,
  DatePickerInput,
} from "@raikou/dates";

const code = `
import 'dayjs/locale/ru';
import { DatesProvider, MonthPickerInput, DatePickerInput } from '@raikou/dates';

function Demo() {
  return (
    <DatesProvider settings={{ locale: 'ru', firstDayOfWeek: 0, weekendDays: [0], timezone: 'UTC' }}>
      <MonthPickerInput label="Pick month" placeholder="Pick month" />
      <DatePickerInput mt="md" label="Pick date" placeholder="Pick date" />
    </DatesProvider>
  );
}
`;

function Demo() {
  return (
    <DatesProvider
      settings={{
        locale: "ru",
        firstDayOfWeek: 0,
        weekendDays: [0],
        timezone: "UTC",
      }}
    >
      <MonthPickerInput label="Pick month" placeholder="Pick month" />
      <DatePickerInput mt="md" label="Pick date" placeholder="Pick date" />
    </DatesProvider>
  );
}

export const usage: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
