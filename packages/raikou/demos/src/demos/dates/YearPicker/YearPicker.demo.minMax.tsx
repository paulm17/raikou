import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { YearPicker } from "@raikou/dates";

const code = `
import { useState } from 'react';
import { YearPicker } from '@raikou/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <YearPicker
      value={value}
      onChange={setValue}
      minDate={new Date(2021, 1)}
      maxDate={new Date(2028, 1)}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <YearPicker
      value={value}
      onChange={setValue}
      minDate={new Date(2021, 1)}
      maxDate={new Date(2028, 1)}
    />
  );
}

export const minMax: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
