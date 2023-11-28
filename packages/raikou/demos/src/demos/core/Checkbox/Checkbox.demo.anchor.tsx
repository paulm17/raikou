import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Checkbox } from "@raikou/client";
import { Anchor } from "@raikou/server";

const code = `
import { Checkbox, Anchor } from '@raikou/core';

function Demo() {
  return (
    <Checkbox
      label={
        <>
          I accept{' '}
          <Anchor href="https://raikou.dev" target="_blank" inherit>
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}
`;

function Demo() {
  return (
    <Checkbox
      label={
        <>
          I accept{" "}
          <Anchor href="https://raikou.dev" target="_blank" inherit>
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}

export const anchor: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
