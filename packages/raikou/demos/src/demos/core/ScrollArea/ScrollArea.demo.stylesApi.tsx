import React from "react";
import { Box } from "@raikou/server";
import { ScrollArea } from "@raikou/client";
import { RaikouDemo } from "@raikou/ds";
import { Content } from "./_content";
import classes from "./ScrollArea.demo.stylesApi.module.css";

const code = `
import { ScrollArea, Box } from '@raikou/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <ScrollArea w={300} h={200} type="always" offsetScrollbars classNames={classes}>
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
`;

const cssCode = `
.scrollbar {
  &,
  &:hover {
    background-color: light-dark(var(--raikou-color-gray-0), var(--raikou-color-dark-6));
  }

  &[data-orientation='vertical'] .thumb {
    background-color: var(--raikou-color-red-6);
  }

  &[data-orientation='horizontal'] .thumb {
    background-color: var(--raikou-color-blue-6);
  }
}

.corner {
  background-color: light-dark(var(--raikou-color-gray-0), var(--raikou-color-dark-6));
  opacity: 1;
}
`;

function Demo() {
  return (
    <ScrollArea
      w={300}
      h={200}
      type="always"
      offsetScrollbars
      classNames={classes}
    >
      <Box w={600}>
        <Content />
      </Box>
    </ScrollArea>
  );
}

export const stylesApi: RaikouDemo = {
  type: "code",
  component: Demo,
  centered: true,
  code: [
    { fileName: "Demo.tsx", code, language: "tsx" },
    { fileName: "Demo.module.css", code: cssCode, language: "css" },
  ],
};
