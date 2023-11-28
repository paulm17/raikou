import React from "react";
import { useDisclosure } from "@raikou/hooks";
import { Button } from "@raikou/server";
import { Modal } from "@raikou/client";
import { RaikouDemo } from "@raikou/ds";
import { AuthenticationForm } from "../../../shared/AuthenticationForm/AuthenticationForm";

const code = `
import { useDisclosure } from '@raikou/hooks';
import { Modal, Button } from '@raikou/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open centered Modal</Button>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        <AuthenticationForm noPadding noShadow />
      </Modal>

      <Button onClick={open}>Open centered Modal</Button>
    </>
  );
}

export const centered: RaikouDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
