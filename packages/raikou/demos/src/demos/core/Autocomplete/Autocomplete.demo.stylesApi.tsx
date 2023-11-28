import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { IconAt } from "@tabler/icons-react";
import { Autocomplete } from "@raikou/client";
import { rem } from "@raikou/system";
import { AutocompleteStylesApi } from "@raikou/styles-api";

const code = `
import { IconAt } from '@tabler/icons-react';
import { Autocomplete, rem } from '@raikou/core';

function Demo() {
  return (
    <Autocomplete
     {{props}}
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="Autocomplete"
      description="Description"
      error="Error"
      placeholder="Autocomplete"
      data={['React', 'Angular']}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <Autocomplete
      {...props}
      dropdownOpened
      leftSection={
        <IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      }
      withAsterisk
      label="Autocomplete"
      description="Description"
      placeholder="Autocomplete"
      data={[
        { group: "Frontend", items: ["React", "Angular"] },
        { group: "Backend", items: ["Node", "Django"] },
      ]}
    />
  );
}

export const stylesApi: RaikouDemo = {
  type: "styles-api",
  data: AutocompleteStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
