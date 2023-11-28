import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Input } from "@raikou/client";
import classes from "./Styles.demo.customVariant.module.css";

const code = `
import { Input, RaikouProvider, createTheme } from '@raikou/core';
import classes from './Demo.module.css';

// It is better to add new variants in theme.components
// This way you will be able to use them in anywhere in the app
const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  }
});

function Demo() {
  return (
    <RaikouProvider theme={theme}>
      <Input variant="underline" placeholder="Underline input" />
      <Input variant="filled" placeholder="Filled input" mt="md" />
    </RaikouProvider>
  );
}
`;

const cssCode = `
.input {
  &[data-variant='underline'] {
    border-bottom: rem(2px) solid;
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;

    @mixin light {
      border-color: var(--raikou-color-gray-3);
    }

    @mixin dark {
      border-color: var(--raikou-color-dark-3);
    }

    &:focus {
      border-color: var(--raikou-color-blue-filled);
    }
  }
}
`;

function Demo() {
  return (
    <>
      <Input
        classNames={classes}
        variant="underline"
        placeholder="Underline input"
      />
      <Input
        classNames={classes}
        variant="filled"
        placeholder="Filled input"
        mt="md"
      />
    </>
  );
}

export const customVariant: RaikouDemo = {
  type: "code",
  component: Demo,
  maxWidth: 360,
  centered: true,
  code: [
    { fileName: "Demo.tsx", code, language: "tsx" },
    { fileName: "Demo.module.css", code: cssCode, language: "css" },
  ],
};
