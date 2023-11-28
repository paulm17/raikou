import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { RingProgress } from "@raikou/client";

const code = `
import { RingProgress } from '@raikou/core';

function Demo() {
  return <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />;
}
`;

function Demo() {
  return (
    <RingProgress sections={[{ value: 40, color: "yellow" }]} rootColor="red" />
  );
}

export const rootColor: RaikouDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
