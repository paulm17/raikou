import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";

const getCode = (name: string) => `
import { useState } from 'react';
import { ${name} } from '@raikou/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <${name}
      dropdownType="modal"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`;

function getDemo(Component: React.FC<any>) {
  return () => {
    const [value, setValue] = useState<Date | null>(null);
    return (
      <Component
        dropdownType="modal"
        label="Pick date"
        placeholder="Pick date"
        value={value}
        onChange={setValue}
      />
    );
  };
}

export function getPickerInputModalDemo(Component: React.FC<any>): RaikouDemo {
  return {
    type: "code",
    centered: true,
    maxWidth: 400,
    code: getCode(Component.displayName!.replace("@raikou/dates/", "")),
    component: getDemo(Component),
  };
}
