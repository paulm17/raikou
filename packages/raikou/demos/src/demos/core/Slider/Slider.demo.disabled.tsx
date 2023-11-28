import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Slider, RangeSlider } from "@raikou/client";
import { Box } from "@raikou/server";

const code = `
import { Slider, RangeSlider } from '@raikou/core';

function Demo() {
  return (
    <>
      <Slider defaultValue={60} disabled />
      <RangeSlider
        mt="xl"
        mb="xl"
        disabled
        defaultValue={[25, 75]}
        marks={[
          { value: 0, label: 'xs' },
          { value: 25, label: 'sm' },
          { value: 50, label: 'md' },
          { value: 75, label: 'lg' },
          { value: 100, label: 'xl' },
        ]}
      />
    </>
  );
}
`;

function Demo() {
  return (
    <Box maw={400} mx="auto">
      <Slider defaultValue={60} disabled />
      <RangeSlider
        mt="xl"
        mb="xl"
        disabled
        defaultValue={[25, 75]}
        marks={[
          { value: 0, label: "xs" },
          { value: 25, label: "sm" },
          { value: 50, label: "md" },
          { value: 75, label: "lg" },
          { value: 100, label: "xl" },
        ]}
      />
    </Box>
  );
}

export const disabled: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
