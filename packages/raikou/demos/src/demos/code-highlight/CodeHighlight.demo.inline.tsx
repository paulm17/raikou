import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Text } from "@raikou/server";
import { InlineCodeHighlight } from "@raikou/code-highlight";

const code = `
import { Text } from '@raikou/core';
import { InlineCodeHighlight } from '@raikou/code-highlight';

function Demo() {
  return (
    <Text>
      You can highlight code inline:{' '}
      <InlineCodeHighlight code="import React from 'react';" language="tsx" />. Is not that cool?
    </Text>
  );
}
`;

function Demo() {
  return (
    <Text>
      You can highlight code inline:{" "}
      <InlineCodeHighlight code="import React from 'react';" language="tsx" />.
      Is not that cool?
    </Text>
  );
}

export const inline: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
