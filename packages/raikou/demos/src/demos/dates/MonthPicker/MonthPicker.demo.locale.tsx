import "dayjs/locale/ru";
import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { MonthPicker } from "@raikou/dates";

const code = `
import 'dayjs/locale/ru';
import { MonthPicker } from '@raikou/dates';

function Demo() {
  return <MonthPicker locale="ru" />;
}
`;

function Demo() {
  return <MonthPicker locale="ru" />;
}

export const locale: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
