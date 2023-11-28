import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Container } from "@raikou/server";

const code = `
import { Container } from '@raikou/core';

function Demo() {
  return (
    <Container fluid h={50} bg="var(--raikou-color-blue-light)">
      Fluid container has 100% max-width
    </Container>
  );
}
`;

function Demo() {
  return (
    <Container fluid h={50} bg="var(--raikou-color-blue-light)">
      Fluid container has 100% max-width
    </Container>
  );
}

export const fluid: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
