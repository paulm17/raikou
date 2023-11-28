import React from "react";
import { IconStar } from "@tabler/icons-react";
import { Avatar } from "@raikou/client";
import { Group } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { avatars } from "./_mockdata";

const code = `
import { Avatar } from '@raikou/core';
import { IconStar } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* With image */}
      <Avatar src="avatar.png" alt="it's me" />

      {/* Default placeholder */}
      <Avatar radius="xl" />

      {/* Letters with xl radius */}
      <Avatar color="cyan" radius="xl">MK</Avatar>

      {/* Custom placeholder icon */}
      <Avatar color="blue" radius="sm">
        <IconStar size="1.5rem" />
      </Avatar>
    </>
  );
}

`;

function Demo() {
  return (
    <Group justify="center">
      <Avatar src={avatars[0]} alt="it's me" />
      <Avatar radius="xl" />
      <Avatar color="cyan" radius="xl">
        MK
      </Avatar>
      <Avatar color="blue" radius="sm">
        <IconStar size="1.5rem" />
      </Avatar>
    </Group>
  );
}

export const usage: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
