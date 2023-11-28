import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { RangeSlider, Slider } from "@raikou/client";

const code = `
import { RangeSlider, Slider } from '@raikou/core';

function Demo() {
  return (
    <>
      <Slider inverted defaultValue={80} />
      <RangeSlider inverted defaultValue={[40, 80]} mt="xl" />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Slider inverted defaultValue={80} />
      <RangeSlider inverted defaultValue={[40, 80]} mt="xl" />
    </>
  );
}

export const inverted: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 400,
};
