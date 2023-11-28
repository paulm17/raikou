import React from "react";
import { useDisclosure } from "@raikou/hooks";
import { Button } from "@raikou/server";
import { Drawer, ScrollArea } from "@raikou/client";
import { RaikouDemo } from "@raikou/ds";

const code = `
import { useDisclosure } from '@raikou/hooks';
import { Drawer, Button, ScrollArea } from '@raikou/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Drawer with scroll</p>);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Header is sticky"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {content}
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Drawer with scroll</p>);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Header is sticky"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {content}
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}

export const scrollarea: RaikouDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
