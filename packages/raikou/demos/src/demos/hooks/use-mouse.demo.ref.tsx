import React from "react";
import { Group, Text, Code, Box } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { useMouse } from "@raikou/hooks";

const code = `
import { Text, Code, Group, Box } from '@raikou/core';
import { useMouse } from '@raikou/hooks';

function Demo() {
  const { ref, x, y } = useMouse();

  return (
    <>
      <Group justify="center">
        <Box ref={ref} w={300} h={180} bg="var(--raikou-color-blue-light)" />
      </Group>
      <Text ta="center">
        Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
      </Text>
    </>
  );
}
`;

function Demo() {
  const { ref, x, y } = useMouse();

  return (
    <>
      <Group justify="center">
        <Box ref={ref} w={300} h={180} bg="var(--raikou-color-blue-light)" />
      </Group>
      <Text ta="center" mt="sm">
        Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
      </Text>
    </>
  );
}

export const useMouseRef: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
