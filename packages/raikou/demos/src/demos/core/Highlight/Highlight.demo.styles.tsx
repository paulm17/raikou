import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Highlight } from "@raikou/server";

const code = `
import { Highlight } from '@raikou/core';

function Demo() {
  return (
    <Highlight
      ta="center"
      highlight={['highlighted', 'default']}
      highlightStyles={{
        backgroundImage:
          'linear-gradient(45deg, var(--raikou-color-cyan-5), var(--raikou-color-indigo-5))',
        fontWeight: 700,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      You can change styles of highlighted part if you do not like default styles
    </Highlight>
  );
}
`;

function Demo() {
  return (
    <Highlight
      ta="center"
      highlight={["highlighted", "default"]}
      highlightStyles={{
        backgroundImage:
          "linear-gradient(45deg, var(--raikou-color-cyan-5), var(--raikou-color-indigo-5))",
        fontWeight: 700,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      You can change styles of highlighted part if you do not like default
      styles
    </Highlight>
  );
}

export const styles: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
