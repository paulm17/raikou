import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Accordion } from "@raikou/client";
import { IconPlus } from "@tabler/icons-react";
import { groceries } from "./_base";
import classes from "./Accordion.demo.chevron.module.css";

const code = `
import { IconPlus } from '@tabler/icons-react';
import { Accordion } from '@raikou/core';
import classes from './Demo.module.css';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji} disabled={item.value === 'Bananas'}>
        {item.value}
      </Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion
      defaultValue="Apples"
      classNames={{ chevron: classes.chevron }}
      chevron={<IconPlus className={classes.icon} />}
    >
      {items}
    </Accordion>
  );
}
`;

const cssCode = `
.chevron {
  &[data-rotate] {
    transform: rotate(45deg);
  }
}

.icon {
  width: rem(16px);
  height: rem(16px);
}
`;

function Demo() {
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion
      defaultValue="Apples"
      classNames={{ chevron: classes.chevron }}
      chevron={<IconPlus className={classes.icon} />}
    >
      {items}
    </Accordion>
  );
}

export const chevron: RaikouDemo = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.tsx", language: "tsx", code },
    { fileName: "Demo.module.css", code: cssCode, language: "scss" },
  ],
  centered: true,
  maxWidth: 600,
};
