import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Breadcrumbs, Anchor } from "@raikou/server";

const code = `
import { Breadcrumbs, Anchor } from '@raikou/core';

const items = [
  { title: 'Raikou', href: '#' },
  { title: 'Raikou hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Demo() {
  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator="→" mt="xs">{items}</Breadcrumbs>
    </>
  );
}
`;

const items = [
  { title: "Raikou", href: "https://raikou.dev" },
  { title: "Raikou hooks", href: "#" },
  { title: "use-id", href: "#" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Demo() {
  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs
        separator="→"
        mt="xs"
        classNames={{ separator: "raikou-rotate-rtl" }}
      >
        {items}
      </Breadcrumbs>
    </>
  );
}

export const usage: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
