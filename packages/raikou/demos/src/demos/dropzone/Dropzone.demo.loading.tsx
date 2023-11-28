import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { BaseDemo } from "./_base";

const code = `
import { Dropzone } from '@raikou/dropzone';

function Demo() {
  return (
    <Dropzone loading onDrop={() => {}}>
      {/* children */}
    </Dropzone>
  );
}
`;

function Demo() {
  return <BaseDemo loading />;
}

export const loading: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
