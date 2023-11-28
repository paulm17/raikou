import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { UnstyledButton } from "@raikou/server";

const code = `
import { UnstyledButton } from '@raikou/core';

function Demo() {
  return <UnstyledButton>Button without styles</UnstyledButton>;
}
`;

function Demo() {
  return <UnstyledButton>Button without styles</UnstyledButton>;
}

export const usage: RaikouDemo = {
  type: "code",
  component: Demo,
  centered: true,
  code,
};
