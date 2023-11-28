import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Code } from "@raikou/server";

const code = `
import { Code } from '@raikou/core';

const codeForPreviousDemo = \`import React from 'react';
import { Code } from '@raikou/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}\`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}
`;

const codeForPreviousDemo = `import React from 'react';
import { Code } from '@raikou/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}

export const block: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
