import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { FileInput } from "@raikou/client";
import { rem } from "@raikou/system";
import { IconAt } from "@tabler/icons-react";
import { FileInputStylesApi } from "@raikou/styles-api";

const code = `
import { IconAt } from '@tabler/icons-react';
import { FileInput, rem } from '@raikou/core';

function Demo() {
  return (
    <FileInput
      label="Label"
      placeholder="FileInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      {{props}}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <FileInput
      label="Label"
      placeholder="FileInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      {...props}
    />
  );
}

export const stylesApi: RaikouDemo = {
  type: "styles-api",
  data: FileInputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
