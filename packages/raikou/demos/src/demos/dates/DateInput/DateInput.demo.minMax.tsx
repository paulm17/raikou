import dayjs from "dayjs";
import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { DateInput } from "@raikou/dates";

const code = `
import dayjs from 'dayjs';
import { DateInput } from '@raikou/dates';

function Demo() {
  return (
    <DateInput
      minDate={new Date()}
      maxDate={dayjs(new Date()).add(1, 'month').toDate()}
      label="Date input"
      placeholder="Date input"
    />
  );
}
`;

function Demo() {
  return (
    <DateInput
      minDate={new Date()}
      maxDate={dayjs(new Date()).add(1, "month").toDate()}
      label="Date input"
      placeholder="Date input"
    />
  );
}

export const minMax: RaikouDemo = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
