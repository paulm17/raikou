import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Radio } from "@raikou/client";
import { RadioStylesApi } from "@raikou/styles-api";

const code = `
import { Radio } from '@raikou/core';

function Demo() {
  return (
    <Radio
      label="Radio"
      description="Radio description"
      error="Radio error"
      defaultChecked
     {{props}}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <Radio
      label="Radio"
      description="Radio description"
      error="Radio error"
      defaultChecked
      {...props}
    />
  );
}

export const stylesApi: RaikouDemo = {
  type: "styles-api",
  data: RadioStylesApi,
  component: Demo,
  code,
  centered: true,
};
