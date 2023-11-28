import React from "react";
import { Grid } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { ColWrapper as Col } from "./_col-wrapper";

const code = `
import { Grid } from '@raikou/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={3} order={{ base: 2, sm: 1, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={3} order={{ base: 3, sm: 2, lg: 2 }}>3</Grid.Col>
      <Grid.Col span={3} order={{ base: 1, sm: 3, lg: 1 }}>1</Grid.Col>
    </Grid>
  );
}
`;

function Demo() {
  return (
    <Grid>
      <Col span={3} order={{ base: 2, sm: 1, lg: 3 }}>
        2
      </Col>
      <Col span={3} order={{ base: 3, sm: 2, lg: 2 }}>
        3
      </Col>
      <Col span={3} order={{ base: 1, sm: 3, lg: 1 }}>
        1
      </Col>
    </Grid>
  );
}

export const order: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
