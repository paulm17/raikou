import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Switch } from "@raikou/client";
import { SwitchStylesApi } from "@raikou/styles-api";

const code = `
import { Switch } from '@raikou/core';

function Demo() {
  return <Switch{{props}} label="Switch component" description="Switch description" error="Switch error />;
}
`;

function Demo(props: any) {
  return (
    <Switch
      {...props}
      label="Switch component"
      description="Switch description"
      error="Switch error"
    />
  );
}

export const stylesApi: RaikouDemo = {
  type: "styles-api",
  data: SwitchStylesApi,
  component: Demo,
  centered: true,
  code,
};
