import React from "react";
import { useDisclosure } from "@raikou/hooks";
import { Group } from "../../Group/src";
import { Button } from "../../Button/src";
import { TextInput } from "../../TextInput/src";
import { Text } from "../../Text/src";
import { Dialog } from "./Dialog";

export default { title: "Dialog" };

export function Usage() {
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
        className="testeasdda"
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
