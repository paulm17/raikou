import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Text } from "@raikou/server";
import { gradientControls } from "../../../shared";

const code = (props: any) => `
import { Text } from '@raikou/core';

function Demo() {
  return (
    <Text
      size="xl"
      fw={900}
      variant="gradient"
      gradient={{ from: '${props.gradientFrom}', to: '${props.gradientTo}', deg: ${props.gradientDegree} }}
    >
      Gradient Text
    </Text>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Text
      size="xl"
      fw={900}
      variant="gradient"
      gradient={{
        from: props.gradientFrom,
        to: props.gradientTo,
        deg: props.gradientDegree,
      }}
    >
      Gradient Text
    </Text>
  );
}

export const gradient: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: gradientControls,
};
