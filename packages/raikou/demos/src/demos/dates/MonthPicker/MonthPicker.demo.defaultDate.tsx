import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { MonthPicker } from "@raikou/dates";

const code = `
import { useState } from 'react';
import { MonthPicker } from '@raikou/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <MonthPicker defaultDate={new Date(2015, 1)} value={value} onChange={setValue} />;
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <MonthPicker
      defaultDate={new Date(2015, 1)}
      value={value}
      onChange={setValue}
    />
  );
}

export const defaultDate: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
