import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Indicator } from "@raikou/server";
import { Avatar } from "@raikou/client";

const code = `
import { Avatar, Indicator } from '@raikou/core';

function Demo() {
  return (
    <Indicator inline processing color="red" size={12}>
      <Avatar
        size="lg"
        radius="sm"
        src="https://raw.githubusercontent.com/raikoudev/raikou/master/.demo/avatars/avatar-4.png"
      />
    </Indicator>
  );
}
`;

function Demo() {
  return (
    <Indicator inline processing color="red" size={12}>
      <Avatar
        size="lg"
        radius="sm"
        src="https://raw.githubusercontent.com/raikoudev/raikou/master/.demo/avatars/avatar-4.png"
      />
    </Indicator>
  );
}

export const processing: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
};
