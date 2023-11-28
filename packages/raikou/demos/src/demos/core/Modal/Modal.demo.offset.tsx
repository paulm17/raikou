import React from "react";
import { Button } from "@raikou/server";
import { Modal } from "@raikou/client";
import { useDisclosure } from "@raikou/hooks";
import { RaikouDemo } from "@raikou/ds";
import { AuthenticationForm } from "../../../shared/AuthenticationForm/AuthenticationForm";

const code = `
import { useDisclosure } from '@raikou/hooks';
import { Modal, Button } from '@raikou/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" yOffset="1vh" xOffset={0}>
        {/* Modal content */}
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
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        yOffset="1vh"
        xOffset={0}
      >
        <AuthenticationForm noPadding noShadow />
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}

export const offset: RaikouDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
