import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ColorInput } from "@raikou/client";

const code = `
import { ColorInput } from '@raikou/core';

function Demo() {
  return <ColorInput withEyeDropper={false} label="Without eye dropper" placeholder="Not fun" />;
}
`;

function Demo() {
  return (
    <ColorInput
      fixOnBlur={false}
      label="Value is not fixed on blur"
      placeholder="May contain invalid value"
    />
  );
}

export const fixOnBlur: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
