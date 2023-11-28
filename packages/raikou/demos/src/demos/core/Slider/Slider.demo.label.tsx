import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Slider } from "@raikou/client";
import { Text } from "@raikou/server";

const code = `
import { Slider, Text } from '@raikou/core';

function Demo() {
  return (
    <>
      <Text size="sm">No label</Text>
      <Slider defaultValue={40} label={null} />

      <Text size="sm" mt="xl">Formatted label</Text>
      <Slider defaultValue={40} label={(value) => \`\${value} °C\`} />

      <Text size="sm" mt="xl">Label always visible</Text>
      <Slider defaultValue={40} labelAlwaysOn />

      <Text size="sm" mt="xl">Custom label transition</Text>
      <Slider
        defaultValue={40}
        labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }}
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Text size="sm">No label</Text>
      <Slider defaultValue={40} label={null} />

      <Text size="sm" mt="xl">
        Formatted label
      </Text>
      <Slider defaultValue={40} label={(value) => `${value} °C`} />

      <Text size="sm" mt="xl">
        Label always visible
      </Text>
      <Slider defaultValue={40} labelAlwaysOn />

      <Text size="sm" mt="xl">
        Custom label transition
      </Text>
      <Slider
        defaultValue={40}
        labelTransitionProps={{
          transition: "skew-down",
          duration: 150,
          timingFunction: "linear",
        }}
      />
    </>
  );
}

export const label: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 400,
};
