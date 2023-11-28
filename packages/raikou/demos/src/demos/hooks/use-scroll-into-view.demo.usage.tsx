import React from "react";
import { useScrollIntoView } from "@raikou/hooks";
import { RaikouDemo } from "@raikou/ds";
import { Button, Text, Group, Box } from "@raikou/server";

const code = `
import { useScrollIntoView } from '@raikou/hooks';
import { Button, Text, Group, Box } from '@raikou/core';

function Demo() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  return (
    <Group justify="center">
      <Button
        onClick={() =>
          scrollIntoView({
            alignment: 'center',
          })
        }
      >
        Scroll to target
      </Button>
      <Box
        style={{
          width: '100%',
          height: '50vh',
          backgroundColor: 'var(--raikou-color-blue-light)',
        }}
      />
      <Text ref={targetRef}>Hello there</Text>
    </Group>
  );
}
`;

function Demo() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  return (
    <Group justify="center">
      <Button
        onClick={() =>
          scrollIntoView({
            alignment: "center",
          })
        }
      >
        Scroll to target
      </Button>
      <Box
        style={{
          width: "100%",
          height: "50vh",
          backgroundColor: "var(--raikou-color-blue-light)",
        }}
      />
      <Text ref={targetRef}>Hello there</Text>
    </Group>
  );
}

export const useScrollIntoViewUsage: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
