import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button } from "@raikou/server";
import { rem } from "@raikou/system";
import { ButtonStylesApi } from "@raikou/styles-api";
import { IconAt } from "@tabler/icons-react";

const code = `
import { Button, rem } from '@raikou/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  return <Button{{props}} leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}>Your email</Button>;
}
`;

function Demo(props: any) {
  return (
    <Button
      leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
      {...props}
    >
      Your email
    </Button>
  );
}

export const stylesApi: RaikouDemo = {
  type: "styles-api",
  data: ButtonStylesApi,
  component: Demo,
  code,
  centered: true,
};
