import React from "react";
import { Text, Group, Code } from "@raikou/server";
import { DEFAULT_THEME, rem } from "@raikou/system";
import { RaikouDemo } from "@raikou/ds";
import { useResizeObserver } from "@raikou/hooks";

const code = `
import { Text, Code, rem } from '@raikou/core';
import { useResizeObserver } from '@raikou/hooks';

function Demo() {
  const [ref, rect] = useResizeObserver();

  return (
    <>
      <textarea ref={ref} style={{ width: rem(400), height: rem(120) }} />
      <Text ta="center">Rect: <Code>{JSON.stringify(rect)}</Code></Text>
    </>
  );
}`;

function Demo() {
  const theme = DEFAULT_THEME;
  const [ref, rect] = useResizeObserver();

  return (
    <>
      <Text ta="center" size="sm" mb="xs">
        Resize textarea by dragging its right bottom corner
      </Text>

      <Group justify="center">
        <textarea
          ref={ref}
          style={{
            width: rem(400),
            height: rem(120),
            border: "none",
            backgroundColor: "var(--raikou-color-blue-light)",
            position: "relative",
          }}
        />
      </Group>
      <Text ta="center" style={{ marginTop: theme.spacing.sm }}>
        Rect: <Code>{JSON.stringify(rect, null, 2)}</Code>
      </Text>
    </>
  );
}

export const useResizeObserverDemo: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
