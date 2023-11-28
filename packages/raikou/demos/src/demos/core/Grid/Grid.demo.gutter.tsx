import React from "react";
import { Grid } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { ColWrapper as Col } from "./_col-wrapper";

const code = `
import { Grid } from '@raikou/core';

function Demo() {
  return (
    <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
  );
}
`;

function Demo() {
  return (
    <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}>
      <Col span={4}>1</Col>
      <Col span={4}>2</Col>
      <Col span={4}>3</Col>
    </Grid>
  );
}

export const gutter: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
