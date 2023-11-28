import React from "react";
import { useDisclosure, useMediaQuery } from "@raikou/hooks";
import { Button } from "@raikou/server";
import { Modal } from "@raikou/client";
import { em } from "@raikou/system";
import { RaikouDemo } from "@raikou/ds";

const code = `
import { useDisclosure, useMediaQuery } from '@raikou/hooks';
import { Modal, Button } from '@raikou/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: ${em(800)})');

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen={isMobile}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        The Modal will be full screen only on mobile
      </Modal>

      <Button onClick={open}>Open Modal</Button>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery(`(max-width: ${em(800)})`);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen={isMobile}
        transitionProps={{ transition: "fade", duration: 200 }}
      >
        The Modal will be full screen only on mobile
      </Modal>

      <Button onClick={open}>Open Modal</Button>
    </>
  );
}

export const fullScreenMobile: RaikouDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
