import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Group, Button, Text } from "@raikou/server";
import { Dialog, TextInput } from "@raikou/client";
import { useDisclosure } from "@raikou/hooks";

const code = `
import { useDisclosure } from '@raikou/hooks';
import { Dialog, Group, Button, TextInput, Text } from '@raikou/core';

function Demo() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Group justify="center">
        <Button onClick={toggle}>Toggle dialog</Button>
      </Group>

      <Dialog opened={opened} withCloseButton onClose={close} size="lg" radius="md">
        <Text size="sm" mb="xs" fw={500}>
          Subscribe to email newsletter
        </Text>

        <Group align="flex-end">
          <TextInput placeholder="hello@gluesticker.com" style={{ flex: 1 }} />
          <Button onClick={close}>Subscribe</Button>
        </Group>
      </Dialog>
    </>
  );
}
`;

function Demo() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Group justify="center">
        <Button onClick={toggle}>Toggle dialog</Button>
      </Group>

      <Dialog
        opened={opened}
        withCloseButton
        onClose={close}
        size="lg"
        radius="md"
      >
        <Text size="sm" mb="xs" fw={500}>
          Subscribe to email newsletter
        </Text>

        <Group align="flex-end">
          <TextInput placeholder="hello@gluesticker.com" style={{ flex: 1 }} />
          <Button onClick={close}>Subscribe</Button>
        </Group>
      </Dialog>
    </>
  );
}

export const usage: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
