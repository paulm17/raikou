import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";

const getCode = (name: string) => `
import { useState } from 'react';
import { ${name} } from '@raikou/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <${name}
      type="range"
      label="Pick dates range"
      placeholder="Pick dates range"
      value={value}
      onChange={setValue}
    />
  );
}
`;

function getDemo(Component: React.FC<any>) {
  return () => {
    const [value, setValue] = useState<[Date | null, Date | null]>([
      null,
      null,
    ]);
    return (
      <Component
        type="range"
        label="Pick dates range"
        placeholder="Pick dates range"
        value={value}
        onChange={setValue}
      />
    );
  };
}

export function getPickerInputRangeDemo(Component: React.FC<any>): RaikouDemo {
  return {
    type: "code",
    centered: true,
    maxWidth: 400,
    code: getCode(Component.displayName!.replace("@raikou/dates/", "")),
    component: getDemo(Component),
  };
}
