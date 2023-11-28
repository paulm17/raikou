import React from "react";
import { useDisclosure } from "@raikou/hooks";
import { RaikouDemo } from "@raikou/ds";
import { Stack } from "@raikou/server";
import { PasswordInput } from "@raikou/client";

const code = `
import { useDisclosure } from '@raikou/hooks';
import { PasswordInput, Stack } from '@raikou/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <Stack>
      <PasswordInput
        label="Password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
      <PasswordInput
        label="Confirm password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
    </Stack>
  );
}
`;

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <Stack>
      <PasswordInput
        label="Password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
      <PasswordInput
        label="Confirm password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
    </Stack>
  );
}

export const controlledVisibility: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
