import React from "react";
import { useDisclosure } from "@raikou/hooks";
import { Button } from "@raikou/server";
import { Modal } from "@raikou/client";
import { RaikouDemo } from "@raikou/ds";

const code = `
import { useDisclosure } from '@raikou/hooks';
import { Modal, Button } from '@raikou/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Modal with scroll</p>);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Header is sticky">
        {content}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Modal with scroll</p>);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Header is sticky">
        {content}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}

export const overflow: RaikouDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
