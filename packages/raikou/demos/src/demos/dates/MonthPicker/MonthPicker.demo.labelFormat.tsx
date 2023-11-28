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
      decadeLabelFormat="YY"
      yearLabelFormat="YYYY [year]"
      value={value}
      onChange={setValue}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <MonthPicker
      decadeLabelFormat="YY"
      yearLabelFormat="YYYY [year]"
      value={value}
      onChange={setValue}
    />
  );
}

export const labelFormat: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
