import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { IconClock } from "@tabler/icons-react";
import { TimeInput } from "@raikou/dates";
import { rem } from "@raikou/core";

const code = `
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@raikou/dates';
import { rem } from '@raikou/core';

function Demo() {
  return (
    <TimeInput
      leftSection={<IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
    />
  );
}
`;

function Demo() {
  return (
    <TimeInput
      leftSection={
        <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
      }
    />
  );
}

export const icon: RaikouDemo = {
  type: "code",
  centered: true,
  maxWidth: 340,
  component: Demo,
  code,
};
