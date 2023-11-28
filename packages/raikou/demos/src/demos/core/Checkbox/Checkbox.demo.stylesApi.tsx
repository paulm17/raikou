import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Checkbox } from "@raikou/client";
import { CheckboxStylesApi } from "@raikou/styles-api";

const code = `
import { Checkbox } from '@raikou/core';

function Demo() {
  return (
    <Checkbox
      label="Checkbox"
      description="Checkbox description"
      error="Checkbox error"
      defaultChecked
     {{props}}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <Checkbox
      label="Checkbox"
      description="Checkbox description"
      error="Checkbox error"
      defaultChecked
      {...props}
    />
  );
}

export const stylesApi: RaikouDemo = {
  type: "styles-api",
  data: CheckboxStylesApi,
  component: Demo,
  code,
  centered: true,
};
