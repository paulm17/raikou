import React, { useEffect } from "react";
import { RaikouDemo } from "@raikou/ds";
import { Slider } from "@raikou/client";

const code = `
import { Slider } from '@raikou/core';

function Demo() {
  return (
    <Slider
      defaultValue={100}
      min={70}
      max={130}
      onChange={(value) => {
        document.documentElement.style.fontSize = \`\${value}%\`;
      }}
    />
  );
}
`;

function Demo() {
  useEffect(
    () => () => {
      document.documentElement.style.fontSize = "100%";
    },
    [],
  );

  return (
    <Slider
      defaultValue={100}
      min={70}
      max={130}
      onChange={(value) => {
        document.documentElement.style.fontSize = `${value}%`;
      }}
    />
  );
}

export const remSlider: RaikouDemo = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
