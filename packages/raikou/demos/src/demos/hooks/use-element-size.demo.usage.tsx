import React from "react";
import { Text, Group } from "@raikou/server";
import { rem, DEFAULT_THEME } from "@raikou/system";
import { RaikouDemo } from "@raikou/ds";
import { useElementSize } from "@raikou/hooks";

const code = `
import { useElementSize } from '@raikou/hooks';
import { rem } from '@raikou/core';

function Demo() {
  const { ref, width, height } = useElementSize();

  return (
    <>
      <textarea ref={ref} style={{ width: rem(400), height: rem(120) }} />
      <div>Width: {width}, height: {height}</div>
    </>
  );
}`;

function Demo() {
  const theme = DEFAULT_THEME;
  const { ref, width, height } = useElementSize();

  return (
    <>
      <Text ta="center" size="sm" style={{ marginBottom: theme.spacing.xs }}>
        Resize textarea by dragging its right bottom corner
      </Text>

      <Group justify="center">
        <textarea
          ref={ref}
          aria-label="Resize me"
          style={{
            width: rem(400),
            height: rem(120),
            border: "none",
            backgroundColor: "var(--raikou-color-body)",
            position: "relative",
          }}
        />
      </Group>
      <Text ta="center" mt="sm">
        Width: {width}, height: {height}
      </Text>
    </>
  );
}

export const useElementSizeDemo: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
  dimmed: true,
};
