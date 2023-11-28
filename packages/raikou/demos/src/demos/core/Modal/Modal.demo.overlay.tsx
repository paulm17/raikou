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
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
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
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <AuthenticationForm noShadow noPadding />
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}

export const overlay: RaikouDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
