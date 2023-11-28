import React from "react";
import { RaikouDemo } from "@raikou/ds";

const getCode = (name: string) => `
import { ${name} } from '@raikou/dates';

function Demo() {
  return (
    <${name}
      clearable
      defaultValue={new Date()}
      label="Pick date"
      placeholder="Pick date"
    />
  );
}
`;

function getDemo(Component: React.FC<any>) {
  return () => (
    <Component
      clearable
      defaultValue={new Date()}
      label="Pick date"
      placeholder="Pick date"
    />
  );
}

export function getPickerInputClearableDemo(
  Component: React.FC<any>,
): RaikouDemo {
  return {
    type: "code",
    centered: true,
    maxWidth: 400,
    code: getCode(Component.displayName!.replace("@raikou/dates/", "")),
    component: getDemo(Component),
  };
}
