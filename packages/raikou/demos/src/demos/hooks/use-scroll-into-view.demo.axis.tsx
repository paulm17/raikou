import React from "react";
import { useScrollIntoView } from "@raikou/hooks";
import { RaikouDemo } from "@raikou/ds";
import { Button, Text, Group, Paper, Box } from "@raikou/server";

const code = `
import { useScrollIntoView } from '@raikou/hooks';
import { Button, Text, Group, Paper, Box } from '@raikou/core';

function Demo() {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >({ axis: 'x' });

  return (
    <Group justify="center">
      <Paper ref={scrollableRef} h={150} w={300} style={{ overflowX: 'scroll' }}>
        <Box pl={260} pr={450}>
          <Paper
            ref={targetRef}
            p="md"
            style={{
              backgroundColor: 'var(--raikou-color-blue-light)',
              width: 'max-content',
            }}
          >
            <Text>Scroll me into view</Text>
          </Paper>
        </Box>
      </Paper>
      <Button onClick={() => scrollIntoView()}>Scroll to target</Button>
    </Group>
  );
}
`;

function Demo() {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >({ axis: "x" });

  return (
    <Group justify="center">
      <Paper
        ref={scrollableRef}
        h={150}
        w={300}
        style={{ overflowX: "scroll" }}
      >
        <Box pl={260} pr={450}>
          <Paper
            ref={targetRef}
            p="md"
            style={{
              backgroundColor: "var(--raikou-color-blue-light)",
              width: "max-content",
            }}
          >
            <Text>Scroll me into view</Text>
          </Paper>
        </Box>
      </Paper>
      <Button onClick={() => scrollIntoView()}>Scroll to target</Button>
    </Group>
  );
}

export const useScrollIntoViewAxis: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
