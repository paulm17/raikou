import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { JsonInput } from "@raikou/client";
import { rem } from "@raikou/system";
import { IconAt } from "@tabler/icons-react";
import { JsonInputStylesApi } from "@raikou/styles-api";

const code = `
import { IconAt } from '@tabler/icons-react';
import { JsonInput, rem } from '@raikou/core';

function Demo() {
  return (
    <JsonInput
      label="Label"
      placeholder="JsonInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      autosize
      {{props}}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <JsonInput
      label="Label"
      placeholder="JsonInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      autosize
      {...props}
    />
  );
}

export const stylesApi: RaikouDemo = {
  type: "styles-api",
  data: JsonInputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
