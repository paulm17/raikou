import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { DateInput } from "@raikou/dates";
import { inputControls } from "../../../shared";

const code = `
import { DateInput } from '@raikou/dates';


function Demo() {
  return (
    <DateInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`;

function Wrapper(props: any) {
  return <DateInput {...props} placeholder="Input placeholder" />;
}

export const configurator: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
