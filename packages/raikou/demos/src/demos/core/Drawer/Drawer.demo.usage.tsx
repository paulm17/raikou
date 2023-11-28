import React from "react";
import { Button } from "@raikou/server";
import { Drawer } from "@raikou/client";
import { RaikouDemo } from "@raikou/ds";
import { useDisclosure } from "@raikou/hooks";
import { AuthenticationForm } from "../../../shared/AuthenticationForm/AuthenticationForm";

const code = `
import { useDisclosure } from '@raikou/hooks';
import { Drawer, Button } from '@raikou/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
        <AuthenticationForm noShadow noPadding />
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}

export const usage: RaikouDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
