import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ColorPicker } from "@raikou/client";

const code = `
import { ColorPicker } from '@raikou/core';

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}
`;

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}

export const fullWidth: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
