import React from "react";
import { Text, Code } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { useMouse } from "@raikou/hooks";

const code = `
import { Text, Code } from '@raikou/core';
import { useMouse } from '@raikou/hooks';

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text ta="center">
      Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
    </Text>
  );
}`;

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text ta="center">
      Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
    </Text>
  );
}

export const useMouseUsage: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
