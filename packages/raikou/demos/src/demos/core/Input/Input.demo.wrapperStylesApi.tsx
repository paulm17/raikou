import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Input } from "@raikou/client";
import { InputWrapperStylesApi } from "@raikou/styles-api";

const code = `
import { Input } from '@raikou/core';

function Demo() {
  return <Input.Wrapper{{props}} label="Input label" description="Input description" error="Input error" withAsterisk />;
}
`;

function Demo(props: any) {
  return (
    <Input.Wrapper
      label="Input label"
      description="Input description"
      error="Input error"
      withAsterisk
      {...props}
    >
      <Input placeholder="Input" />
    </Input.Wrapper>
  );
}

export const wrapperStylesApi: RaikouDemo = {
  type: "styles-api",
  data: InputWrapperStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
