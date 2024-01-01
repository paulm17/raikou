import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Chip } from "@raikou/client";
import { rem } from "@raikou/theme";
import { IconX } from "@tabler/icons-react";

const code = `
import { Chip, rem } from '@raikou/core';
import { IconX } from '@tabler/icons-react';

function Demo() {
  return (
    <Chip
      icon={<IconX style={{ width: rem(16), height: rem(16) }} />}
      color="red"
      variant="filled"
      defaultChecked
    >
      Forbidden
    </Chip>
  );
}
`;

function Demo() {
  return (
    <Chip
      icon={<IconX style={{ width: rem(16), height: rem(16) }} />}
      color="red"
      variant="filled"
      defaultChecked
    >
      Forbidden
    </Chip>
  );
}

export const icon: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
};
