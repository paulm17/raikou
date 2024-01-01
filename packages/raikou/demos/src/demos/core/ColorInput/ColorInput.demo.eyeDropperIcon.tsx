import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ColorInput } from "@raikou/client";
import { rem } from "@raikou/theme";
import { IconFocus2 } from "@tabler/icons-react";

const code = `
import { ColorInput, rem } from '@raikou/core';
import { IconFocus2 } from '@tabler/icons-react';

function Demo() {
  return (
    <ColorInput
      eyeDropperIcon={<IconFocus2 style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="With custom eye dropper icon"
      placeholder="Pick color"
    />
  );
}
`;

function Demo() {
  return (
    <ColorInput
      eyeDropperIcon={
        <IconFocus2 style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      }
      label="With custom eye dropper icon"
      placeholder="Pick color"
    />
  );
}

export const eyeDropperIcon: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
