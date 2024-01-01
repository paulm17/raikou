import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { NumberInput } from "@raikou/client";
import { rem } from "@raikou/theme";
import { IconCurrencyDram } from "@tabler/icons-react";

const code = `
import { NumberInput, rem } from '@raikou/core';
import { IconCurrencyDram } from '@tabler/icons-react';

function Demo() {
  const icon = <IconCurrencyDram style={{ width: rem(20), height: rem(20) }} stroke={1.5} />;
  return (
    <>
      <NumberInput leftSection={icon} label="With left section" placeholder="With left section" />
      <NumberInput
        rightSection={icon}
        label="With right section"
        placeholder="With right section"
        mt="md"
      />
    </>
  );
}
`;

function Demo() {
  const icon = (
    <IconCurrencyDram
      style={{ width: rem(20), height: rem(20) }}
      stroke={1.5}
    />
  );
  return (
    <>
      <NumberInput
        leftSection={icon}
        label="With left section"
        placeholder="With left section"
      />
      <NumberInput
        rightSection={icon}
        label="With right section"
        placeholder="With right section"
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
