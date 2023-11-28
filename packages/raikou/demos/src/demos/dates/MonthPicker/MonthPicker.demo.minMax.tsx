import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { MonthPicker } from "@raikou/dates";

const code = `
import { useState } from 'react';
import { MonthPicker } from '@raikou/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <MonthPicker
      value={value}
      onChange={setValue}
      defaultDate={new Date(2022, 1)}
      minDate={new Date(2022, 1, 1)}
      maxDate={new Date(2022, 8, 1)}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <MonthPicker
      value={value}
      onChange={setValue}
      defaultDate={new Date(2022, 1)}
      minDate={new Date(2022, 1, 1)}
      maxDate={new Date(2022, 8, 1)}
    />
  );
}

export const minMax: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
