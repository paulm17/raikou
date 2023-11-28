import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Indicator } from "@raikou/server";
import { Avatar } from "@raikou/client";

const code = `
import { Avatar, Indicator } from '@raikou/core';

function Demo() {
  return (
    <Indicator inline size={16} offset={7} position="bottom-end" color="red" withBorder>
      <Avatar
        size="lg"
        radius="xl"
        src="https://raw.githubusercontent.com/raikoudev/raikou/master/.demo/avatars/avatar-3.png"
      />
    </Indicator>
  );
}
`;

function Demo() {
  return (
    <Indicator
      inline
      size={16}
      offset={7}
      position="bottom-end"
      color="red"
      withBorder
    >
      <Avatar
        size="lg"
        radius="xl"
        src="https://raw.githubusercontent.com/raikoudev/raikou/master/.demo/avatars/avatar-3.png"
      />
    </Indicator>
  );
}

export const offset: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
