import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ThemeIcon } from "@raikou/server";
import { IconHeart } from "@tabler/icons-react";
import { gradientControls } from "../../../shared";

const code = (props: any) => `
import { ThemeIcon } from '@raikou/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ThemeIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{ from: '${props.gradientFrom}', to: '${props.gradientTo}', deg: ${props.gradientDegree} }}
    >
      <IconHeart />
    </ThemeIcon>
  );
}
`;

function Wrapper(props: any) {
  return (
    <ThemeIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{
        from: props.gradientFrom,
        to: props.gradientTo,
        deg: props.gradientDegree,
      }}
    >
      <IconHeart />
    </ThemeIcon>
  );
}

export const gradient: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: gradientControls,
};
