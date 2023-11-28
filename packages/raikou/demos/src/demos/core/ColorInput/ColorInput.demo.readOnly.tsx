import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ColorInput } from "@raikou/client";

const code = `
import { ColorInput } from '@raikou/core';

function Demo() {
  return <ColorInput readOnly label="Cannot modify value" defaultValue="#F0FCFE" />;
}
`;

function Demo() {
  return (
    <ColorInput readOnly label="Cannot modify value" defaultValue="#F0FCFE" />
  );
}

export const readOnly: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
