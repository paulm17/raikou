import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { RingProgress } from "@raikou/client";
import { Text } from "@raikou/server";

const code = `
import { RingProgress, Text } from '@raikou/core';

function Demo() {
  return (
    <RingProgress
      size={170}
      thickness={16}
      label={
        <Text size="xs" ta="center" px="xs" style={{ pointerEvents: 'none' }}>
          Hover sections to see tooltips
        </Text>
      }
      sections={[
        { value: 40, color: 'cyan', tooltip: 'Documents – 40 Gb' },
        { value: 25, color: 'orange', tooltip: 'Apps – 25 Gb' },
        { value: 15, color: 'grape', tooltip: 'Other – 15 Gb' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <RingProgress
      size={170}
      thickness={16}
      label={
        <Text size="xs" ta="center" px="xs" style={{ pointerEvents: "none" }}>
          Hover sections to see tooltips
        </Text>
      }
      sections={[
        { value: 40, color: "cyan", tooltip: "Documents – 40 Gb" },
        { value: 25, color: "orange", tooltip: "Apps – 25 Gb" },
        { value: 15, color: "grape", tooltip: "Other – 15 Gb" },
      ]}
    />
  );
}

export const tooltip: RaikouDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
