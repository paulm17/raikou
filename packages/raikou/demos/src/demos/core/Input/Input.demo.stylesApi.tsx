import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Input } from "@raikou/client";
import { rem } from "@raikou/system";
import { InputStylesApi } from "@raikou/styles-api";
import { IconAt, IconChevronDown } from "@tabler/icons-react";

const code = `
import { Input, rem } from '@raikou/core';

function Demo() {
  const at = <IconAt style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;
  const chevron = <IconChevronDown style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;
  return <Input{{props}} placeholder="Input component" leftSection={at} rightSection={chevron} />;
}
`;

function Demo(props: any) {
  const at = (
    <IconAt style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
  );
  const chevron = (
    <IconChevronDown style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
  );
  return (
    <Input
      placeholder="Input component"
      leftSection={at}
      rightSection={chevron}
      {...props}
    />
  );
}

export const stylesApi: RaikouDemo = {
  type: "styles-api",
  data: InputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
