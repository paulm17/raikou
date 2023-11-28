import { JsonInput } from "@raikou/client";
import { RaikouDemo } from "@raikou/ds";
import React from "react";

const code = `
import { JsonInput } from '@raikou/core';

function Demo() {
  return (
    <JsonInput disabled defaultValue='{ "a": 1, "B": 2 }' label="Disabled" placeholder="Disabled" />
  );
}
`;

function Demo() {
  return (
    <JsonInput
      disabled
      defaultValue='{ "a": 1, "B": 2 }'
      label="Disabled"
      placeholder="Disabled"
    />
  );
}

export const disabled: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true,
  maxWidth: 340,
};
