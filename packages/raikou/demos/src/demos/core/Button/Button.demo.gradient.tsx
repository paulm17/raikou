import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button } from "@raikou/server";
import { gradientControls } from "../../../shared";

const code = (props: any) => `
import { Button } from '@raikou/core';

function Demo() {
  return (
    <Button
      variant="gradient"
      gradient={{ from: '${props.gradientFrom}', to: '${props.gradientTo}', deg: ${props.gradientDegree} }}
    >
      Gradient button
    </Button>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Button
      variant="gradient"
      gradient={{
        from: props.gradientFrom,
        to: props.gradientTo,
        deg: props.gradientDegree,
      }}
    >
      Gradient button
    </Button>
  );
}

export const gradient: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: gradientControls,
};
