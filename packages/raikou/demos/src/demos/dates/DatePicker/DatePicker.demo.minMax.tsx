import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { DatePicker } from "@raikou/dates";

const code = `
import { useState } from 'react';
import { DatePicker } from '@raikou/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DatePicker
      value={value}
      onChange={setValue}
      defaultDate={new Date(2022, 1)}
      minDate={new Date(2022, 1, 10)}
      maxDate={new Date(2022, 1, 25)}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DatePicker
      value={value}
      onChange={setValue}
      defaultDate={new Date(2022, 1)}
      minDate={new Date(2022, 1, 10)}
      maxDate={new Date(2022, 1, 25)}
    />
  );
}

export const minMax: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
