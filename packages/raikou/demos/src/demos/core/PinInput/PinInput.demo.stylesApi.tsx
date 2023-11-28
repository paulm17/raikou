import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { PinInput } from "@raikou/client";
import { PinInputStylesApi } from "@raikou/styles-api";

const code = `
import { PinInput } from '@raikou/core';

function Demo() {
  return (
    <PinInput{{props}} />
  );
}
`;

function Demo(props: any) {
  return <PinInput {...props} />;
}

export const stylesApi: RaikouDemo = {
  type: "styles-api",
  data: PinInputStylesApi,
  component: Demo,
  code,
  centered: true,
};
