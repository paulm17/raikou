import React from "react";
import { IconStar } from "@tabler/icons-react";
import { RaikouDemo } from "@raikou/ds";
import { Avatar } from "@raikou/client";
import { Group } from "@raikou/server";

const code = `
import { Avatar } from '@raikou/core';
import { IconStar } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* Default placeholder */}
      <Avatar src={null} alt="no image here" />

      {/* Default placeholder with custom color */}
      <Avatar src={null} alt="no image here" color="indigo" />

      {/* Placeholder with initials */}
      <Avatar src={null} alt="Vitaly Rtishchev" color="red">VR</Avatar>

      {/* Placeholder with custom icon */}
      <Avatar color="blue" radius="xl">
        <IconStar size="1.5rem" />
      </Avatar>
    </>
  );
}

`;

function Demo() {
  return (
    <Group justify="center">
      <Avatar src={null} alt="no image here" />
      <Avatar src={null} alt="no image here" color="indigo" />
      <Avatar src={null} alt="no image here" color="red">
        VR
      </Avatar>
      <Avatar color="blue" radius="xl">
        <IconStar size="1.5rem" />
      </Avatar>
    </Group>
  );
}

export const placeholders: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
