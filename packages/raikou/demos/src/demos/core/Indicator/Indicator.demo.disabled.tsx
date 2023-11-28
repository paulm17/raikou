import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { useDisclosure } from "@raikou/hooks";
import { Indicator, Button, Stack } from "@raikou/server";
import { Avatar } from "@raikou/client";

const code = `
import { useDisclosure } from '@raikou/hooks';
import { Avatar, Indicator, Button, Stack } from '@raikou/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure();

  return (
    <Stack align="center">
      <Indicator inline disabled={!visible} color="red" size={12}>
        <Avatar
          size="lg"
          radius="sm"
          src="https://raw.githubusercontent.com/raikoudev/raikou/master/.demo/avatars/avatar-5.png"
        />
      </Indicator>
      <Button onClick={toggle}>Toggle indicator</Button>
    </Stack>
  );
}
`;

function Demo() {
  const [visible, { toggle }] = useDisclosure();

  return (
    <Stack align="center">
      <Indicator inline disabled={!visible} color="red" size={12}>
        <Avatar
          size="lg"
          radius="sm"
          src="https://raw.githubusercontent.com/raikoudev/raikou/master/.demo/avatars/avatar-5.png"
        />
      </Indicator>
      <Button onClick={toggle}>Toggle indicator</Button>
    </Stack>
  );
}

export const disabled: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
};
