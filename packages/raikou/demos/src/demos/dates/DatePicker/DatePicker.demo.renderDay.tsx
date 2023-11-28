import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Indicator } from "@raikou/server";
import { DatePicker, DatePickerProps } from "@raikou/dates";

const code = `
import { Indicator } from '@raikou/core';
import { DatePicker, DatePickerProps } from '@raikou/dates';

const dayRenderer: DatePickerProps['renderDay'] = (date) => {
  const day = date.getDate();
  return (
    <Indicator size={6} color="red" offset={-5} disabled={day !== 16}>
      <div>{day}</div>
    </Indicator>
  );
};

function Demo() {
  return <DatePicker renderDay={dayRenderer} />;
}

`;

const dayRenderer: DatePickerProps["renderDay"] = (date) => {
  const day = date.getDate();
  return (
    <Indicator size={6} color="red" offset={-5} disabled={day !== 16}>
      <div>{day}</div>
    </Indicator>
  );
};

function Demo() {
  return <DatePicker renderDay={dayRenderer} />;
}

export const renderDay: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
