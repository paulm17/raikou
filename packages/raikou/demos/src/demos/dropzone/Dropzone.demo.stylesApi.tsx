import React from "react";
import { Text } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { Dropzone, IMAGE_MIME_TYPE } from "@raikou/dropzone";
import classes from "./Dropzone.demo.stylesApi.module.css";

const cssCode = `
.root {
  min-height: rem(120px);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background-color: light-dark(var(--raikou-color-gray-0), var(--raikou-color-dark-6));

  &[data-accept] {
    color: var(--raikou-color-white);
    background-color: var(--raikou-color-blue-6);
  }

  &[data-reject] {
    color: var(--raikou-color-white);
    background-color: var(--raikou-color-red-6);
  }
}

`;

const code = `
import { Text } from '@raikou/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@raikou/dropzone';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Dropzone onDrop={() => {}} accept={IMAGE_MIME_TYPE} className={classes.root}>
      <Text ta="center">Drop images here</Text>
    </Dropzone>
  );
}
`;

function Demo() {
  return (
    <Dropzone
      onDrop={() => {}}
      accept={IMAGE_MIME_TYPE}
      className={classes.root}
    >
      <Text ta="center">Drop images here</Text>
    </Dropzone>
  );
}

export const stylesApi: RaikouDemo = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.tsx", code, language: "tsx" },
    { fileName: "Demo.module.css", code: cssCode, language: "scss" },
  ],
};
