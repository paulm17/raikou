import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { PasswordInput } from "@raikou/client";
import { rem } from "@raikou/system";
import { IconLock } from "@tabler/icons-react";

const code = `
import { PasswordInput, rem } from '@raikou/core';
import { IconLock } from '@tabler/icons-react';

function Demo() {
  const icon = <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

  return (
    <>
      <PasswordInput leftSection={icon} label="With left section" placeholder="With left section" />
      <PasswordInput
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
    <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
  );

  return (
    <>
      <PasswordInput
        leftSection={icon}
        leftSectionPointerEvents="none"
        label="With left section"
        placeholder="With left section"
      />
      <PasswordInput
        rightSection={icon}
        label="With right section"
        placeholder="With right section"
        rightSectionPointerEvents="none"
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
