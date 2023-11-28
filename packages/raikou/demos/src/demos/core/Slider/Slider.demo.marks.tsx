import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Slider, RangeSlider } from "@raikou/client";

const code = `
import { Slider, RangeSlider } from '@raikou/core';

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

function Demo() {
  return (
    <>
      <Slider defaultValue={40} marks={[{ value: 10 }, { value: 40 }, { value: 95 }]} />
      <Slider defaultValue={40} marks={marks} />
      <RangeSlider defaultValue={[20, 80]} marks={marks} />
    </>
  );
}
`;

function Demo() {
  const marks = [
    { value: 20, label: "20%" },
    { value: 50, label: "50%" },
    { value: 80, label: "80%" },
  ];

  return (
    <>
      <Slider
        defaultValue={40}
        marks={[{ value: 10 }, { value: 40 }, { value: 95 }]}
        mb={32}
      />
      <Slider defaultValue={40} marks={marks} mb={32} />
      <RangeSlider defaultValue={[20, 80]} marks={marks} mb={32} />
    </>
  );
}

export const marks: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 400,
};
