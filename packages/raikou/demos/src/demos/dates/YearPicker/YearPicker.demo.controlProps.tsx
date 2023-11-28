import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { YearPicker, YearPickerProps } from "@raikou/dates";

const code = `
import { useState } from 'react';
import { YearPicker, YearPickerProps } from '@raikou/dates';

const getYearControlProps: YearPickerProps['getYearControlProps'] = (date) => {
  if (date.getFullYear() === new Date().getFullYear()) {
    return {
      style: {
        color: 'var(--raikou-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (date.getFullYear() === new Date().getFullYear() + 1) {
    return { disabled: true };
  }

  return {};
};

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker value={value} onChange={setValue} getYearControlProps={getYearControlProps} />;
}
`;

const getYearControlProps: YearPickerProps["getYearControlProps"] = (date) => {
  if (date.getFullYear() === new Date().getFullYear()) {
    return {
      style: {
        color: "var(--raikou-color-blue-filled)",
        fontWeight: 700,
      },
    };
  }

  if (date.getFullYear() === new Date().getFullYear() + 1) {
    return { disabled: true };
  }

  return {};
};

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <YearPicker
      value={value}
      onChange={setValue}
      getYearControlProps={getYearControlProps}
    />
  );
}

export const controlProps: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
