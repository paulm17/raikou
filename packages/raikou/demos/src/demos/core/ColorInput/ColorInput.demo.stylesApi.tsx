import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ColorInput } from "@raikou/client";
import { ColorInputStylesApi } from "@raikou/styles-api";

const code = `
import { ColorInput, rem } from '@raikou/core';

function Demo() {
  return (
    <ColorInput
      label="Label"
      placeholder="ColorInput"
      description="Description"
      error="Error"
      withAsterisk
      swatches={['#000', '#fff', '#f00', '#0f0', '#00f']}
      format="rgba"
      {{props}}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <ColorInput
      label="Label"
      placeholder="ColorInput"
      description="Description"
      error="Error"
      withAsterisk
      swatches={["#000", "#fff", "#f00", "#0f0", "#00f"]}
      format="rgba"
      classNames={props.classNames}
    />
  );
}

export const stylesApi: RaikouDemo = {
  type: "styles-api",
  data: ColorInputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
