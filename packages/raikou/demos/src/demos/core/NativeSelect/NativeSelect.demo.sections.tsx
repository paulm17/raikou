import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { NativeSelect } from "@raikou/client";
import { rem } from "@raikou/system";
import { IconChevronDown, IconHash } from "@tabler/icons-react";

const code = `
import { NativeSelect, rem } from '@raikou/core';
import { IconChevronDown, IconHash } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NativeSelect
        leftSection={<IconHash style={{ width: rem(16), height: rem(16) }} />}
        leftSectionPointerEvents="none"
        label="Left section"
        data={['React', 'Angular']}
      />

      <NativeSelect
        rightSection={<IconChevronDown style={{ width: rem(16), height: rem(16) }} />}
        label="Right section"
        data={['React', 'Angular']}
        mt="md"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <NativeSelect
        leftSection={<IconHash style={{ width: rem(16), height: rem(16) }} />}
        leftSectionPointerEvents="none"
        label="Left section"
        data={["React", "Angular"]}
      />

      <NativeSelect
        rightSection={
          <IconChevronDown style={{ width: rem(16), height: rem(16) }} />
        }
        label="Right section"
        data={["React", "Angular"]}
        mt="md"
      />
    </>
  );
}

export const sections: RaikouDemo = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
