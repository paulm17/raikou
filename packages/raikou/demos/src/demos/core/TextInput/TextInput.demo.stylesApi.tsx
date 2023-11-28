import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { TextInput } from "@raikou/client";
import { rem } from "@raikou/system";
import { IconAt } from "@tabler/icons-react";
import { TextInputStylesApi } from "@raikou/styles-api";

const code = `
import { IconAt } from '@tabler/icons-react';
import { TextInput, rem } from '@raikou/core';

function Demo() {
  return (
    <TextInput
      label="Label"
      placeholder="TextInput"
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
    <TextInput
      label="Label"
      placeholder="TextInput"
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
  data: TextInputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
