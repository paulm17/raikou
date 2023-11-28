import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { NumberFormatter } from "@raikou/client";

const code = `
import { NumberFormatter } from '@raikou/core';

function Demo() {
  return <NumberFormatter value={5 / 3} decimalScale={2} />;
}
`;

function Demo() {
  return <NumberFormatter value={5 / 3} decimalScale={2} />;
}

export const decimalScale: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
};
