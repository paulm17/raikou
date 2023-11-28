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
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        {/* Drawer content */}
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
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        <AuthenticationForm noShadow noPadding />
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}

export const overlay: RaikouDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
