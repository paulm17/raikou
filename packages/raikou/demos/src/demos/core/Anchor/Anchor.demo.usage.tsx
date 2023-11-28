import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Anchor } from "@raikou/server";

const code = `
import { Anchor } from '@raikou/core';

function Demo() {
  return (
    <Anchor href="https://raikou.dev/" target="_blank">
      Anchor component
    </Anchor>
  );
}
`;

function Demo() {
  return (
    <Anchor href="https://raikou.dev/" target="_blank">
      Anchor component
    </Anchor>
  );
}

export const usage: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
