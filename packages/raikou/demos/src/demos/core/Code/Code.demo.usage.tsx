import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Code } from "@raikou/server";

const code = `
import { Code } from '@raikou/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
`;

function Demo() {
  return <Code>React.createElement()</Code>;
}

export const usage: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
