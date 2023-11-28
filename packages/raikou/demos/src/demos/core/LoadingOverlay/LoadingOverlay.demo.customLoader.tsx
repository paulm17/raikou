import React from "react";
import { Button, Group, Box } from "@raikou/server";
import { LoadingOverlay } from "@raikou/client";
import { useDisclosure } from "@raikou/hooks";
import { RaikouDemo } from "@raikou/ds";
import { AuthenticationForm } from "../../../shared/AuthenticationForm/AuthenticationForm";

const code = `
import { useDisclosure } from '@raikou/hooks';
import { LoadingOverlay, Button, Group, Box } from '@raikou/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <>
      <Box pos="relative">
        <LoadingOverlay visible={visible} loaderProps={{ children: 'Loading...' }} />
        {/* ...other content */}
      </Box>

      <Group position="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}`;

export function Demo() {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <>
      <Box pos="relative">
        <LoadingOverlay
          visible={visible}
          loaderProps={{ children: "Loading..." }}
        />
        <AuthenticationForm noSubmit />
      </Box>

      <Group justify="center" mt="xl">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}

export const customLoader: RaikouDemo = {
  centered: true,
  maxWidth: 400,
  dimmed: true,
  type: "code",
  code,
  component: Demo,
};
