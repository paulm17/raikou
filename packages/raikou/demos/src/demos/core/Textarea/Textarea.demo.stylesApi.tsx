import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Textarea } from "@raikou/client";
import { rem } from "@raikou/system";
import { IconAt } from "@tabler/icons-react";
import { TextareaStylesApi } from "@raikou/styles-api";

const code = `
import { IconAt } from '@tabler/icons-react';
import { Textarea, rem } from '@raikou/core';

function Demo() {
  return (
    <Textarea
      label="Label"
      placeholder="Textarea"
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
    <Textarea
      label="Label"
      placeholder="Textarea"
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
  data: TextareaStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
