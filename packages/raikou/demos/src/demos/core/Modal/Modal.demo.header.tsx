import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { useDisclosure } from "@raikou/hooks";
import { Button } from "@raikou/server";
import { Modal } from "@raikou/client";

const code = `
import { useDisclosure } from '@raikou/hooks';
import { Modal, Button } from '@raikou/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        Modal without header, press escape or click on overlay to close
      </Modal>

      <Button onClick={open}>Open Modal</Button>
    </>
  );
}

`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        Modal without header, press escape or click on overlay to close
      </Modal>

      <Button onClick={open}>Open Modal</Button>
    </>
  );
}

export const header: RaikouDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
