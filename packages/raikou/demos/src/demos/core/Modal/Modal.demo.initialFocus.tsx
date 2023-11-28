import React from "react";
import { Button } from "@raikou/server";
import { Modal, TextInput } from "@raikou/client";
import { useDisclosure } from "@raikou/hooks";
import { RaikouDemo } from "@raikou/ds";

const code = `
import { useDisclosure } from '@raikou/hooks';
import { Modal, Button, TextInput } from '@raikou/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Focus demo">
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Focus demo">
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}

export const initialFocus: RaikouDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
