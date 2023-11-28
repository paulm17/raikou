import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Progress } from "@raikou/client";
import { ProgressStylesApi } from "@raikou/styles-api";

const code = `
import { Progress } from '@raikou/core';

function Demo() {
  return (
    <Progress.Root size="xl"{{props}}>
      <Progress.Section value={35}>
        <Progress.Label>Documents</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}
`;

function Demo(props: any) {
  return (
    <Progress.Root size="xl" {...props}>
      <Progress.Section value={35}>
        <Progress.Label>Documents</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}

export const stylesApi: RaikouDemo = {
  type: "styles-api",
  data: ProgressStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 400,
};
