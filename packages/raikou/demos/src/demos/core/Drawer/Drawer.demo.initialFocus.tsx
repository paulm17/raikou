import React from "react";
import { Drawer, TextInput } from "@raikou/client";
import { Button } from "@raikou/server";
import { useDisclosure } from "@raikou/hooks";
import { RaikouDemo } from "@raikou/ds";

const code = `
import { useDisclosure } from '@raikou/hooks';
import { Drawer, Button, TextInput } from '@raikou/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Focus demo">
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Focus demo">
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}

export const initialFocus: RaikouDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
