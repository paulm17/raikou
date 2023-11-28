import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { RingProgress } from "@raikou/client";
import { Text } from "@raikou/server";

const code = `
import { RingProgress, Text } from '@raikou/core';

function Demo() {
  return (
    <RingProgress
      label={
        <Text size="xs" ta="center">
          Application data usage
        </Text>
      }
      sections={[
        { value: 40, color: 'cyan' },
        { value: 15, color: 'orange' },
        { value: 15, color: 'grape' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <RingProgress
      label={
        <Text size="xs" ta="center">
          Application data usage
        </Text>
      }
      sections={[
        { value: 40, color: "cyan" },
        { value: 15, color: "orange" },
        { value: 15, color: "grape" },
      ]}
    />
  );
}

export const usage: RaikouDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
