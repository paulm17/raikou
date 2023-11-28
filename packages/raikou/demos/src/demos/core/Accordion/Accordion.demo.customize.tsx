import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Accordion } from "@raikou/client";
import { groceries } from "./_base";
import classes from "./Accordion.demo.customize.module.css";

const code = `
import { Accordion } from '@raikou/core';
import classes from './Demo.module.css';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion maw={400} defaultValue="Apples" classNames={classes}>
      {items}
    </Accordion>
  );
}
`;

const cssCode = `.root {
  border-radius: var(--raikou-radius-sm);
  background-color: light-dark(var(--raikou-color-gray-0), var(--raikou-color-dark-6));
}

.item {
  background-color: light-dark(var(--raikou-color-gray-0), var(--raikou-color-dark-6));
  border: rem(1px) solid transparent;
  position: relative;
  z-index: 0;
  transition: transform 150ms ease;

  &[data-active] {
    transform: scale(1.03);
    z-index: 1;
    background-color: var(--raikou-color-body);
    border-color: light-dark(var(--raikou-color-gray-2), var(--raikou-color-dark-4));
    box-shadow: var(--raikou-shadow-md);
    border-radius: var(--raikou-radius-md);
  }
}

.chevron {
  &[data-rotate] {
    transform: rotate(-90deg);
  }
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
    <Accordion defaultValue="Apples" classNames={classes} variant="filled">
      {items}
    </Accordion>
  );
}

export const customize: RaikouDemo = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.tsx", language: "tsx", code },
    { fileName: "Demo.module.css", code: cssCode, language: "scss" },
  ],
  centered: true,
  maxWidth: 500,
};
