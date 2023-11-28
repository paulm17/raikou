import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { NumberFormatter } from "@raikou/client";

const code = `
import { NumberFormatter } from '@raikou/core';

function Demo() {
  return <NumberFormatter prefix="$ " value={1000000} thousandSeparator />;
}
`;

function Demo() {
  return <NumberFormatter prefix="$ " value={1000000} thousandSeparator />;
}

export const usage: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
};
