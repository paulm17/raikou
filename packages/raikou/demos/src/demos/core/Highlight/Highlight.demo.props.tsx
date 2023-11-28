import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Highlight } from "@raikou/server";

const code = `
import { Highlight } from '@raikou/core';

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://raikou.dev"
      target="_blank"
      highlight="raikou"
      fw={500}
      c="var(--raikou-color-anchor)"
    >
      Raikou website
    </Highlight>
  );
}

`;

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://raikou.dev"
      target="_blank"
      highlight="raikou"
      fw={500}
      c="var(--raikou-color-anchor)"
    >
      Raikou website
    </Highlight>
  );
}

export const props: RaikouDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
