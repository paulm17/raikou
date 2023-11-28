import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ColorInput } from "@raikou/client";

const code = `
import { ColorInput } from '@raikou/core';

function Demo() {
  return <ColorInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`;

function Demo() {
  return (
    <ColorInput disabled label="Disabled input" placeholder="Disabled input" />
  );
}

export const disabled: RaikouDemo = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
