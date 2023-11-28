import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Kbd } from "@raikou/server";

const code = `
import { Kbd } from '@raikou/core';

function Demo() {
  return (
    <>
      <Kbd>⌘</Kbd> + <Kbd>Shift</Kbd> + <Kbd>M</Kbd>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Kbd>⌘</Kbd> + <Kbd>Shift</Kbd> + <Kbd>M</Kbd>
    </>
  );
}

export const usage: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
