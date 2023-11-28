import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { Input } from "@raikou/client";
import { CloseButton } from "@raikou/server";
import { IconAt } from "@tabler/icons-react";

const code = `
import { useState } from 'react';
import { Input, CloseButton } from '@raikou/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const [value, setValue] = useState('Clear me');
  return (
    <>
      <Input placeholder="Your email" leftSection={<IconAt size={16} />} />
      <Input
        placeholder="Clearable input"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        mt="md"
        rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => setValue('')}
            style={{ display: value ? undefined : 'none' }}
          />
        }
      />
    </>
  );
}
`;

function Demo() {
  const [value, setValue] = useState("Clear me");
  return (
    <>
      <Input placeholder="Your email" leftSection={<IconAt size={16} />} />
      <Input
        placeholder="Clearable input"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        mt="md"
        rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => setValue("")}
            style={{ display: value ? undefined : "none" }}
          />
        }
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
