import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { DateInput } from "@raikou/dates";

const code = `
import { useState } from 'react';
import { DateInput } from '@raikou/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DateInput
      value={value}
      onChange={setValue}
      label="Date input"
      placeholder="Date input"
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DateInput
      value={value}
      onChange={setValue}
      label="Date input"
      placeholder="Date input"
    />
  );
}

export const usage: RaikouDemo = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
