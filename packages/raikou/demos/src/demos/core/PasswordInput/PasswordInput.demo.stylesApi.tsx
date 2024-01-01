import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { PasswordInput } from "@raikou/client";
import { rem } from "@raikou/theme";
import { IconLock } from "@tabler/icons-react";
import { PasswordInputStylesApi } from "@raikou/styles-api";

const code = `
import { IconLock } from '@tabler/icons-react';
import { PasswordInput, rem } from '@raikou/core';

function Demo() {
  return (
    <PasswordInput
      label="Label"
      placeholder="PasswordInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />}
      {{props}}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <PasswordInput
      label="Label"
      placeholder="PasswordInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />}
      {...props}
    />
  );
}

export const stylesApi: RaikouDemo = {
  type: "styles-api",
  data: PasswordInputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
