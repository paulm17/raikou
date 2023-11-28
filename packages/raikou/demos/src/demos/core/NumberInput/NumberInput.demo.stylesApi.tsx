import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { NumberInput } from "@raikou/client";
import { rem } from "@raikou/system";
import { IconAt } from "@tabler/icons-react";
import { NumberInputStylesApi } from "@raikou/styles-api";

const code = `
import { IconAt } from '@tabler/icons-react';
import { NumberInput, rem } from '@raikou/core';

function Demo() {
  return (
    <NumberInput
      label="Label"
      placeholder="NumberInput"
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
    <NumberInput
      label="Label"
      placeholder="NumberInput"
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
  data: NumberInputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
