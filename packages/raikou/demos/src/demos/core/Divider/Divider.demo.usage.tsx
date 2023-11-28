import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Divider } from "@raikou/server";

const code = `
import { Divider } from '@raikou/core';

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}

export const usage: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
