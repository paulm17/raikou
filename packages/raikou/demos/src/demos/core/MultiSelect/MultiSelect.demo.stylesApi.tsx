import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { IconAt } from "@tabler/icons-react";
import { MultiSelect } from "@raikou/client";
import { rem } from "@raikou/system";
import { MultiSelectStylesApi } from "@raikou/styles-api";

const code = `
import { IconAt } from '@tabler/icons-react';
import { MultiSelect, rem } from '@raikou/core';

function Demo() {
  return (
    <MultiSelect
     {{props}}
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="MultiSelect"
      description="Description"
      error="Error"
      placeholder="MultiSelect"
      defaultValue={['React', 'Angular']}
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Node', 'Django'] },
      ]}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <MultiSelect
      {...props}
      dropdownOpened
      leftSection={
        <IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      }
      withAsterisk
      label="MultiSelect"
      description="Description"
      placeholder="MultiSelect"
      defaultValue={["React", "Angular"]}
      data={[
        { group: "Frontend", items: ["React", "Angular"] },
        { group: "Backend", items: ["Node", "Django"] },
      ]}
    />
  );
}

export const stylesApi: RaikouDemo = {
  type: "styles-api",
  data: MultiSelectStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
