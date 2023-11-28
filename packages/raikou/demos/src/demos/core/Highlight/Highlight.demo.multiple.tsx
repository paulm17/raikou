import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Highlight } from "@raikou/server";

const code = `
import { Highlight } from '@raikou/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
`;

function Demo() {
  return (
    <Highlight highlight={["this", "that"]}>
      Highlight this and also that
    </Highlight>
  );
}

export const multiple: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
