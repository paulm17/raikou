import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { Group, Text } from "@raikou/server";
import { rem } from "@raikou/theme";
import { useMove } from "@raikou/hooks";

const code = `
import { useState } from 'react';
import { Group, Text, rem } from '@raikou/core';
import { useMove } from '@raikou/hooks';

function Demo() {
  const [value, setValue] = useState(0.2);
  const { ref } = useMove(({ y }) => setValue(1 - y));

  return (
    <>
      <Group justify="center">
        <div
          ref={ref}
          style={{
            width: rem(16),
            height: rem(120),
            backgroundColor: 'var(--raikou-color-blue-light)',
            position: 'relative',
          }}
        >
          {/* Filled bar */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              height: \`\${value * 100}%\`,
              width: rem(16),
              backgroundColor: 'var(--raikou-color-blue-filled)',
            }}
          />

          {/* Thumb */}
          <div
            style={{
              position: 'absolute',
              bottom: \`calc(\${value * 100}% - \${rem(8)})\`,
              left: 0,
              width: rem(16),
              height: rem(16),
              backgroundColor: 'var(--raikou-color-blue-7)',
            }}
          />
        </div>
      </Group>

      <Text ta="center" mt="sm">
        Value: {Math.round(value * 100)}
      </Text>
    </>
  );
}`;

function Demo() {
  const [value, setValue] = useState(0.2);
  const { ref } = useMove(({ y }) => setValue(1 - y));

  return (
    <>
      <Group justify="center">
        <div
          // @ts-ignore
          ref={ref}
          style={{
            width: rem(16),
            height: rem(120),
            backgroundColor: "var(--raikou-color-blue-light)",
            position: "relative",
          }}
        >
          {/* Filled bar */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              height: `${value * 100}%`,
              width: rem(16),
              backgroundColor: "var(--raikou-color-blue-filled)",
            }}
          />

          {/* Thumb */}
          <div
            style={{
              position: "absolute",
              bottom: `calc(${value * 100}% - ${rem(8)})`,
              left: 0,
              width: rem(16),
              height: rem(16),
              backgroundColor: "var(--raikou-color-blue-7)",
            }}
          />
        </div>
      </Group>

      <Text ta="center" mt="sm">
        Value: {Math.round(value * 100)}
      </Text>
    </>
  );
}

export const useMoveVertical: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
