import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ActionIcon } from "@raikou/server";

const code = `
import { ActionIcon } from '@raikou/core';

function Demo() {
  return <ActionIcon size="xl" loading loaderProps={{ type: 'dots' }} />;
}
`;

function Demo() {
  return <ActionIcon size="xl" loading loaderProps={{ type: "dots" }} />;
}

export const loaderProps: RaikouDemo = {
  type: "code",
  component: Demo,
  centered: true,
  code,
};
