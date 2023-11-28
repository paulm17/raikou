import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { Group, Text, Code } from "@raikou/server";
import { rem } from "@raikou/system";
import { useMove } from "@raikou/hooks";

const code = `
import { useState } from 'react';
import { Group, Text, Code, rem } from '@raikou/core';
import { useMove } from '@raikou/hooks';

function Demo() {
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref, active } = useMove(setValue);

  return (
    <>
      <Group justify="center">
        <div
          ref={ref}
          style={{
            width: rem(400),
            height: rem(120),
            backgroundColor: 'var(--raikou-color-blue-light)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: \`calc(\${value.x * 100}% - \${rem(8)})\`,
              top: \`calc(\${value.y * 100}% - \${rem(8)})\`,
              width: rem(16),
              height: rem(16),
              backgroundColor: active ? 'var(--raikou-color-teal-7)' : 'var(--raikou-color-blue-7)',
            }}
          />
        </div>
      </Group>
      <Text ta="center" mt="sm">
        Values <Code>{\`{ x: \${Math.round(value.x * 100)}, y: \${Math.round(value.y * 100)} }\`}</Code>
      </Text>
    </>
  );
}`;

function Demo() {
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref, active } = useMove(setValue);

  return (
    <>
      <Group justify="center">
        <div
          // @ts-ignore
          ref={ref}
          style={{
            width: rem(400),
            height: rem(120),
            backgroundColor: "var(--raikou-color-blue-light)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: `calc(${value.x * 100}% - ${rem(8)})`,
              top: `calc(${value.y * 100}% - ${rem(8)})`,
              width: rem(16),
              height: rem(16),
              backgroundColor: active
                ? "var(--raikou-color-teal-7)"
                : "var(--raikou-color-blue-7)",
            }}
          />
        </div>
      </Group>
      <Text ta="center" mt="sm">
        Values{" "}
        <Code>{`{ x: ${Math.round(value.x * 100)}, y: ${Math.round(
          value.y * 100,
        )} }`}</Code>
      </Text>
    </>
  );
}

export const useMoveUsage: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
