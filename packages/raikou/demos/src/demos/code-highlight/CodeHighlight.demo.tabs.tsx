import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { CodeHighlightTabs } from "@raikou/code-highlight";

const tsxCode = `
import { Group, Button, RaikouProvider, createTheme } from '@raikou/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Button: Button.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <RaikouProvider theme={theme}>
      <Group>
        <Button variant="danger">Danger variant</Button>
        <Button variant="primary">Primary variant</Button>
      </Group>
    </RaikouProvider>
  );
}
`;

const cssCode = `
.root {
  &[data-variant='danger'] {
    background-color: var(--raikou-color-red-9);
    color: var(--raikou-color-red-0);
  }

  &[data-variant='primary'] {
    background: linear-gradient(45deg, #4b6cb7 10%, #253b67 90%);
    color: var(--raikou-color-white);
  }
}
`;

const code = `
import { CodeHighlightTabs } from '@raikou/code-highlight';

const tsxCode = \`${tsxCode}\`;

const cssCode = \`${cssCode}\`;

function Demo() {
  return (
    <CodeHighlightTabs
      code={[
        { fileName: 'Demo.tsx', code: tsxCode, language: 'tsx' },
        { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <CodeHighlightTabs
      code={[
        { fileName: "Demo.tsx", code: tsxCode, language: "tsx" },
        { fileName: "Demo.module.css", code: cssCode, language: "scss" },
      ]}
    />
  );
}

export const tabs: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
