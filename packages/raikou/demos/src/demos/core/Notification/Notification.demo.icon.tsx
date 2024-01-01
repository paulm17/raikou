import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { IconX, IconCheck } from "@tabler/icons-react";
import { Notification } from "@raikou/server";
import { rem } from "@raikou/theme";

const code = `
import { IconX, IconCheck } from '@tabler/icons-react';
import { Notification, rem } from '@raikou/core';

function Demo() {
  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

  return (
    <>
      <Notification icon={xIcon} color="red" title="Bummer!">
        Something went wrong
      </Notification>
      <Notification icon={checkIcon} color="teal" title="All good!" mt="md">
        Everything is fine
      </Notification>
    </>
  );
}
`;

function Demo() {
  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

  return (
    <>
      <Notification icon={xIcon} color="red" title="Bummer!">
        Something went wrong
      </Notification>
      <Notification icon={checkIcon} color="teal" title="All good!" mt="md">
        Everything is fine
      </Notification>
    </>
  );
}

export const icon: RaikouDemo = {
  type: "code",
  component: Demo,
  dimmed: true,
  maxWidth: 400,
  centered: true,
  code,
};
