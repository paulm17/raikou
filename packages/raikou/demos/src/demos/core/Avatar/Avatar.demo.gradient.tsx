import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Avatar } from "@raikou/client";
import { gradientControls } from "../../../shared";

const code = (props: any) => `
import { Avatar } from '@raikou/core';

function Demo() {
  return (
    <Avatar
      size="xl"
      variant="gradient"
      gradient={{ from: '${props.gradientFrom}', to: '${props.gradientTo}', deg: ${props.gradientDegree} }}
    >
      GR
    </Avatar>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Avatar
      size="xl"
      variant="gradient"
      gradient={{
        from: props.gradientFrom,
        to: props.gradientTo,
        deg: props.gradientDegree,
      }}
    >
      GR
    </Avatar>
  );
}

export const gradient: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: gradientControls,
};
