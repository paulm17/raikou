import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Indicator } from "@raikou/server";
import { Calendar } from "@raikou/dates";

const code = `
import { Indicator } from '@raikou/core';
import { Calendar } from '@raikou/dates';

function Demo() {
  return (
    <Calendar
      static
      renderDay={(date) => {
        const day = date.getDate();
        return (
          <Indicator size={6} color="red" offset={-2} disabled={day !== 16}>
            <div>{day}</div>
          </Indicator>
        );
      }}
    />
  );
}
`;

function Demo() {
  return (
    <Calendar
      static
      renderDay={(date) => {
        const day = date.getDate();
        return (
          <Indicator size={6} color="red" offset={-2} disabled={day !== 16}>
            <div>{day}</div>
          </Indicator>
        );
      }}
    />
  );
}

export const isStatic: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
