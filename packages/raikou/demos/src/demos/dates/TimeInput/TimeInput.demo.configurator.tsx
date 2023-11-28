import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { TimeInput } from "@raikou/dates";
import { inputControls } from "../../../shared";

const code = `
import { TimeInput } from '@raikou/dates';


function Demo() {
  return (
    <TimeInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`;

function Wrapper(props: any) {
  return <TimeInput {...props} placeholder="Input placeholder" />;
}

export const configurator: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
