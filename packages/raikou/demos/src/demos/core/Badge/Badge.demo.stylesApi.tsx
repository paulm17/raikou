import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { BadgeStylesApi } from "@raikou/styles-api";
import { Badge } from "@raikou/server";
import { rem } from "@raikou/theme";
import { IconAt } from "@tabler/icons-react";

const code = `
import { Badge } from '@raikou/server';
import { rem } from '@raikou/system';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt style={{ width: rem(12), height: rem(12) }} />;

  return (
    <Badge leftSection={icon} rightSection={icon}{{props}}>
      Badge component
    </Badge>
  );
}
`;

function Demo(props: any) {
  const icon = <IconAt style={{ width: rem(12), height: rem(12) }} />;

  return (
    <Badge leftSection={icon} rightSection={icon} {...props}>
      Badge component
    </Badge>
  );
}

export const stylesApi: RaikouDemo = {
  type: "styles-api",
  data: BadgeStylesApi,
  component: Demo,
  centered: true,
  code,
};
