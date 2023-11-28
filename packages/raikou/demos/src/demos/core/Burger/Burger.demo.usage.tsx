import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { useDisclosure } from "@raikou/hooks";
import { Burger } from "@raikou/client";

const code = `
import { useDisclosure } from '@raikou/hooks';
import { Burger } from '@raikou/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure();
  return <Burger{{props}} opened={opened} onClick={toggle} aria-label="Toggle navigation" />;
}
`;

function Wrapper(props: any) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <Burger
      {...props}
      opened={opened}
      onClick={toggle}
      aria-label="Toggle navigation"
    />
  );
}

export const usage: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { type: "size", prop: "size", initialValue: "md", libraryValue: "md" },
  ],
};
