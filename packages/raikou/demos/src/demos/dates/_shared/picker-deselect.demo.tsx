import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";

const getCode = (name: string) => `
import { useState } from 'react';
import { ${name} } from '@raikou/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <${name} allowDeselect value={value} onChange={setValue} />;
}
`;

function getDemo(Component: React.FC<any>) {
  return () => {
    const [value, setValue] = useState<Date | null>(null);
    return <Component allowDeselect value={value} onChange={setValue} />;
  };
}

export function getPickerDeselectDemo(Component: React.FC<any>): RaikouDemo {
  return {
    type: "code",
    centered: true,
    code: getCode(Component.displayName!.replace("@raikou/dates/", "")),
    component: getDemo(Component),
  };
}
