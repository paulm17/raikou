import "dayjs/locale/ru";
import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { DatePicker } from "@raikou/dates";

const code = `
import 'dayjs/locale/ru';
import { DatePicker } from '@raikou/dates';

function Demo() {
  return <DatePicker locale="ru" />;
}
`;

function Demo() {
  return <DatePicker locale="ru" />;
}

export const locale: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
