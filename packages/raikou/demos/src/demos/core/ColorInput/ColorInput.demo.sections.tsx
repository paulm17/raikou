import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ColorInput } from "@raikou/client";
import { rem } from "@raikou/theme";
import { IconColorPicker } from "@tabler/icons-react";

const code = `
import { ColorInput, rem } from '@raikou/core';
import { IconColorPicker } from '@tabler/icons-react';

function Demo() {
  const icon = <IconColorPicker style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

  return (
    <>
      <ColorInput
        label="With custom left section"
        placeholder="Replaces color swatch"
        leftSection={icon}
        withEyeDropper={false}
      />
      <ColorInput
        label="With custom right section"
        placeholder="Replaces eye dropper"
        rightSection={icon}
        mt="md"
      />
    </>
  );
}

`;

function Demo() {
  const icon = (
    <IconColorPicker style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
  );

  return (
    <>
      <ColorInput
        label="With custom left section"
        placeholder="Replaces color swatch"
        leftSection={icon}
        withEyeDropper={false}
      />
      <ColorInput
        label="With custom right section"
        placeholder="Replaces eye dropper"
        rightSection={icon}
        mt="md"
      />
    </>
  );
}

export const sections: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
