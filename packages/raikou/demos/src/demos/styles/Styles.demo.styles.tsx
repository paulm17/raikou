import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button } from "@raikou/server";
import { rem } from "@raikou/theme";

const code = `
import { Button, rem } from '@raikou/core';

function Demo() {
  const gradient =
    'linear-gradient(45deg, var(--raikou-color-pink-filled) 0%, var(--raikou-color-orange-filled) 50%, var(--raikou-color-yellow-filled) 100%)';

  return (
    <Button
      radius="md"
      styles={{
        root: {
          padding: rem(2),
          border: 0,
          backgroundImage: gradient,
        },

        inner: {
          background: 'var(--raikou-color-body)',
          color: 'var(--raikou-color-text)',
          borderRadius: 'calc(var(--button-radius) - 2px)',
          paddingLeft: 'var(--raikou-spacing-md)',
          paddingRight: 'var(--raikou-spacing-md)',
        },

        label: {
          backgroundImage: gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
      }}
    >
      Gradient button
    </Button>
  );
}
`;

function Demo() {
  const gradient =
    "linear-gradient(45deg, var(--raikou-color-pink-filled) 0%, var(--raikou-color-orange-filled) 50%, var(--raikou-color-yellow-filled) 100%)";

  return (
    <Button
      radius="md"
      styles={{
        root: {
          padding: rem(2),
          border: 0,
          backgroundImage: gradient,
        },

        inner: {
          background: "var(--raikou-color-body)",
          color: "var(--raikou-color-text)",
          borderRadius: "calc(var(--button-radius) - 2px)",
          paddingLeft: "var(--raikou-spacing-md)",
          paddingRight: "var(--raikou-spacing-md)",
        },

        label: {
          backgroundImage: gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
      }}
    >
      Gradient button
    </Button>
  );
}

export const styles: RaikouDemo = {
  type: "code",
  component: Demo,
  centered: true,
  code,
};
