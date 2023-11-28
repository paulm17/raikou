import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { SegmentedControl } from "@raikou/client";
import { Text } from "@raikou/server";

const code = `
import { SegmentedControl } from '@raikou/core';

function Demo() {
  return (
    <>
      <Text size="sm" fw={500} mt={3}>
        No transitions
      </Text>
      <SegmentedControl data={['React', 'Angular', 'Vue', 'Svelte']} transitionDuration={0} />

      <Text size="sm" fw={500} mt="md">
        500ms linear transition
      </Text>
      <SegmentedControl
        data={['React', 'Angular', 'Vue', 'Svelte']}
        transitionDuration={500}
        transitionTimingFunction="linear"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Text size="sm" fw={500} mt={3}>
        No transitions
      </Text>
      <SegmentedControl
        data={["React", "Angular", "Vue", "Svelte"]}
        transitionDuration={0}
      />

      <Text size="sm" fw={500} mt="md">
        500ms linear transition
      </Text>
      <SegmentedControl
        data={["React", "Angular", "Vue", "Svelte"]}
        transitionDuration={500}
        transitionTimingFunction="linear"
      />
    </>
  );
}

export const transitions: RaikouDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
