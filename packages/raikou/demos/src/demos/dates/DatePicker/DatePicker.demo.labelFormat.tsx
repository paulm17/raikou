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
      defaultLevel="decade"
      decadeLabelFormat="YY"
      yearLabelFormat="YYYY [year]"
      monthLabelFormat="MM/YY"
      value={value}
      onChange={setValue}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DatePicker
      defaultLevel="decade"
      decadeLabelFormat="YY"
      yearLabelFormat="YYYY [year]"
      monthLabelFormat="MM/YY"
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
