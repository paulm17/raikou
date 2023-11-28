import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Group } from "@raikou/server";
import { Pagination } from "@raikou/client";

const code = `
import { Group, Pagination } from '@raikou/core';

function Demo() {
  return (
    <Pagination.Root total={10}>
      <Group gap={5} justify="center">
        <Pagination.First />
        <Pagination.Previous />
        <Pagination.Items />
        <Pagination.Next />
        <Pagination.Last />
      </Group>
    </Pagination.Root>
  );
}
`;

function Demo() {
  return (
    <Pagination.Root total={10}>
      <Group gap={5} justify="center">
        <Pagination.First />
        <Pagination.Previous />
        <Pagination.Items />
        <Pagination.Next />
        <Pagination.Last />
      </Group>
    </Pagination.Root>
  );
}

export const composition: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
