import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Pagination } from "@raikou/client";
import { PaginationStylesApi } from "@raikou/styles-api";

const code = `
import { Pagination } from '@raikou/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`;

function Demo(props: any) {
  return <Pagination total={10} {...props} />;
}

export const stylesApi: RaikouDemo = {
  type: "styles-api",
  data: PaginationStylesApi,
  component: Demo,
  code,
  centered: true,
};
