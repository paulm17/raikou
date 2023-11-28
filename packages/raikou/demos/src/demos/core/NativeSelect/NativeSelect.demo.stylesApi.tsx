import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { NativeSelect } from "@raikou/client";
import { NativeSelectStylesApi } from "@raikou/styles-api";

const code = `
import { NativeSelect } from '@raikou/core';

function Demo() {
  return <NativeSelect{{props}} data={['React', 'Angular']} label="NativeSelect label" description="NativeSelect description" error="NativeSelect error" withAsterisk />;
}
`;

function Demo(props: any) {
  return (
    <NativeSelect
      {...props}
      data={["React", "Angular"]}
      label="NativeSelect label"
      description="NativeSelect description"
      error="NativeSelect error"
      withAsterisk
    />
  );
}

export const stylesApi: RaikouDemo = {
  type: "styles-api",
  data: NativeSelectStylesApi,
  component: Demo,
  centered: true,
  maxWidth: 340,
  code,
};
