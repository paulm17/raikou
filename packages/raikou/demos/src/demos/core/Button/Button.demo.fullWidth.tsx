import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button } from "@raikou/server";

const code = `
import { Button } from '@raikou/core';

function Demo() {
  return <Button fullWidth>Full width button</Button>;
}
`;

function Demo() {
  return <Button fullWidth>Full width button</Button>;
}

export const fullWidth: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
