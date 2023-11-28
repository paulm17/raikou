import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Container } from "@raikou/server";

const code = `
import { Container } from '@raikou/core';

function Demo() {
  const demoProps = {
    bg: 'var(--raikou-color-blue-light)',
    h: 50,
    mt: 'md',
  };

  return (
    <>
      <Container {...demoProps}>Default Container</Container>

      <Container size="xs" {...demoProps}>
        xs Container
      </Container>

      <Container px={0} size="30rem" {...demoProps}>
        30rem Container without padding
      </Container>
    </>
  );
}
`;

function Demo() {
  const demoProps = {
    bg: "var(--raikou-color-blue-light)",
    h: 50,
    mt: "md",
  };

  return (
    <>
      <Container {...demoProps} mt={0}>
        Default Container
      </Container>
      <Container size="xs" {...demoProps}>
        xs Container
      </Container>
      <Container px={0} size="30rem" {...demoProps}>
        30rem Container without padding
      </Container>
    </>
  );
}

export const usage: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
