import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { IconAt } from "@tabler/icons-react";
import { TagsInput } from "@raikou/client";
import { rem } from "@raikou/system";
import { TagsInputStylesApi } from "@raikou/styles-api";

const code = `
import { IconAt } from '@tabler/icons-react';
import { TagsInput, rem } from '@raikou/core';

function Demo() {
  return (
    <TagsInput
     {{props}}
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="TagsInput"
      description="Description"
      error="Error"
      placeholder="TagsInput"
      defaultValue={['First', 'Second']}
      data={['React', 'Angular']}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <TagsInput
      {...props}
      dropdownOpened
      leftSection={
        <IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      }
      withAsterisk
      label="TagsInput"
      description="Description"
      placeholder="TagsInput"
      defaultValue={["First", "Second"]}
      data={[
        { group: "Frontend", items: ["React", "Angular"] },
        { group: "Backend", items: ["Node", "Django"] },
      ]}
    />
  );
}

export const stylesApi: RaikouDemo = {
  type: "styles-api",
  data: TagsInputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
