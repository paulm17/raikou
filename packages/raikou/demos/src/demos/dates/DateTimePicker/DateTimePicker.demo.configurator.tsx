import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { DateTimePicker } from "@raikou/dates";
import { inputControls } from "../../../shared";

const code = `
import { DateTimePicker } from '@raikou/dates';


function Demo() {
  return (
    <DateTimePicker
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`;

function Wrapper(props: any) {
  return <DateTimePicker {...props} placeholder="Input placeholder" />;
}

export const configurator: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 400,
  controls: inputControls,
};
