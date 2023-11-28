import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { MonthPicker } from "@raikou/dates";

const code = `
import { useState } from 'react';
import { MonthPicker } from '@raikou/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [date, setDate] = useState(new Date());

  const handleChange = (val: [Date | null, Date | null]) => {
    if (val[0] !== null && val[1] === null) {
      setDate((current) => new Date(current.getFullYear() + 1, 1));
    }

    setValue(val);
  };

  return (
    <MonthPicker
      date={date}
      onDateChange={setDate}
      type="range"
      value={value}
      onChange={handleChange}
    />
  );
}

`;

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [date, setDate] = useState(new Date());

  const handleChange = (val: [Date | null, Date | null]) => {
    if (val[0] !== null && val[1] === null) {
      setDate((current) => new Date(current.getFullYear() + 1, 1));
    }

    setValue(val);
  };

  return (
    <MonthPicker
      date={date}
      onDateChange={setDate}
      type="range"
      value={value}
      onChange={handleChange}
    />
  );
}

export const controlledDate: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
