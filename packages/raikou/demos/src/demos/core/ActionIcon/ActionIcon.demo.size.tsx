import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ActionIcon } from "@raikou/server";
import { rem } from "@raikou/system";
import { IconHeart } from "@tabler/icons-react";

const code = `
import { ActionIcon, rem } from '@raikou/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon size={42} variant="default" aria-label="ActionIcon with size as a number">
      <IconHeart style={{ width: rem(24), height: rem(24) }} />
    </ActionIcon>
  );
}
`;

function Demo() {
  return (
    <ActionIcon
      size={42}
      variant="default"
      aria-label="ActionIcon with size as a number"
    >
      <IconHeart style={{ width: rem(24), height: rem(24) }} />
    </ActionIcon>
  );
}

export const size: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
