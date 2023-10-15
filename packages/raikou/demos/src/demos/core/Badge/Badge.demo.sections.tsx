import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Badge, Group } from "@raikou/server";
import { rem } from "@raikou/system";
import { IconAt } from "@tabler/icons-react";

const code = `
import { Badge, Group } from '@raikou/server';
import { rem } from '@raikou/system';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt style={{ width: rem(12), height: rem(12) }} />;
  return (
    <Group>
      <Badge leftSection={icon}>With left section</Badge>
      <Badge rightSection={icon}>With right section</Badge>
    </Group>
  );
}
`;

function Demo() {
  const icon = <IconAt style={{ width: rem(12), height: rem(12) }} />;
  return (
    <Group>
      <Badge leftSection={icon}>With left section</Badge>
      <Badge rightSection={icon}>With right section</Badge>
    </Group>
  );
}

export const sections: RaikouDemo = {
  type: "code",
  component: Demo,
  centered: true,
  code,
};
