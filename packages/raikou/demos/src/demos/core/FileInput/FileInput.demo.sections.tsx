import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { FileInput } from "@raikou/client";
import { rem } from "@raikou/system";
import { IconFileCv } from "@tabler/icons-react";

const code = `
import { FileInput, rem } from '@raikou/core';
import { IconFileCv } from '@tabler/icons-react';

function Demo() {
  const icon = <IconFileCv style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

  return (
    <>
      <FileInput
        leftSection={icon}
        label="Attach your CV"
        placeholder="Your CV"
        leftSectionPointerEvents="none"
      />
      <FileInput
        rightSection={icon}
        label="Attach your CV"
        placeholder="Your CV"
        rightSectionPointerEvents="none"
        mt="md"
      />
    </>
  );
}
`;

function Demo() {
  const icon = (
    <IconFileCv style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
  );

  return (
    <>
      <FileInput
        leftSection={icon}
        label="Attach your CV"
        placeholder="Your CV"
        leftSectionPointerEvents="none"
      />
      <FileInput
        rightSection={icon}
        label="Attach your CV"
        placeholder="Your CV"
        rightSectionPointerEvents="none"
        mt="md"
      />
    </>
  );
}

export const sections: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
