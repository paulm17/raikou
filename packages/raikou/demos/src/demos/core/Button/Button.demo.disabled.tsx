import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button } from "@raikou/server";

const code = `
import { Button } from '@raikou/core';

function Demo() {
  return <Button disabled>Disabled button</Button>;
}
`;

function Demo() {
  return <Button disabled>Disabled button</Button>;
}

export const disabled: RaikouDemo = {
  type: "code",
  component: Demo,
  centered: true,
  code,
};
