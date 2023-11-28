import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ActionIcon } from "@raikou/server";
import { IconHeart } from "@tabler/icons-react";
import { gradientControls } from "../../../shared";

const code = (props: any) => `
import { ActionIcon } from '@raikou/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{ from: '${props.gradientFrom}', to: '${props.gradientTo}', deg: ${props.gradientDegree} }}
    >
      <IconHeart />
    </ActionIcon>
  );
}
`;

function Wrapper(props: any) {
  return (
    <ActionIcon
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
    </ActionIcon>
  );
}

export const gradient: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: gradientControls,
};
