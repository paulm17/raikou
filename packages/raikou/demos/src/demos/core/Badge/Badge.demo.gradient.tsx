import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Badge } from "@raikou/server";
import { gradientControls } from "../../../shared";

const code = (props: any) => `
import { Badge } from '@raikou/server';

function Demo() {
  return (
    <Badge
      size="xl"
      variant="gradient"
      gradient={{ from: '${props.gradientFrom}', to: '${props.gradientTo}', deg: ${props.gradientDegree} }}
    >
      Gradient badge
    </Badge>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Badge
      size="xl"
      variant="gradient"
      gradient={{
        from: props.gradientFrom,
        to: props.gradientTo,
        deg: props.gradientDegree,
      }}
    >
      Gradient badge
    </Badge>
  );
}

export const gradient: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: gradientControls,
};
