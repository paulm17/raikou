import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { NumberInput } from "@raikou/client";
import { IconChartBubble } from "@tabler/icons-react";

const code = `
import { NumberInput } from '@raikou/core';
import { IconChartBubble } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NumberInput label="Hide controls" placeholder="Hide controls" hideControls />
      <NumberInput
        label="Custom right section"
        placeholder="Custom right section"
        mt="md"
        rightSection={<IconChartBubble />}
        rightSectionPointerEvents="none"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <NumberInput
        label="Hide controls"
        placeholder="Hide controls"
        hideControls
      />
      <NumberInput
        label="Custom right section"
        placeholder="Custom right section"
        mt="md"
        rightSection={<IconChartBubble />}
        rightSectionPointerEvents="none"
      />
    </>
  );
}

export const rightSection: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
