import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button } from "@raikou/server";

const code = `
import { Button } from '@raikou/core';

function Demo() {
  return (
    <Button loading loaderProps={{ type: 'dots' }}>
      Loading button
    </Button>
  );
}
`;

function Demo() {
  return (
    <Button loading loaderProps={{ type: "dots" }}>
      Loading button
    </Button>
  );
}

export const loaderProps: RaikouDemo = {
  type: "code",
  component: Demo,
  centered: true,
  code,
};
