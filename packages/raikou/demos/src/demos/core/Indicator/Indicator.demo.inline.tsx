import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Indicator } from "@raikou/server";
import { Avatar } from "@raikou/client";

const code = `
import { Avatar, Indicator } from '@raikou/core';

function Demo() {
  return (
    <Indicator inline label="New" size={16}>
      <Avatar
        size="lg"
        radius="sm"
        src="https://raw.githubusercontent.com/raikoudev/raikou/master/.demo/avatars/avatar-2.png"
      />
    </Indicator>
  );
}
`;

function Demo() {
  return (
    <Indicator inline label="New" size={16}>
      <Avatar
        size="lg"
        radius="sm"
        src="https://raw.githubusercontent.com/raikoudev/raikou/master/.demo/avatars/avatar-2.png"
      />
    </Indicator>
  );
}

export const inline: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
