import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Slider } from "@raikou/client";
import { SliderStylesApi } from "@raikou/styles-api";

const code = `
import { Slider } from '@raikou/core';

function Demo() {
  return <Slider{{props}} marks={[{ value: 20, label: '20%' }, { value: 80, label: '80%' }]} labelAlwaysOn />;
}
`;

function Demo(props: any) {
  return (
    <Slider
      marks={[
        { value: 20, label: "20%" },
        { value: 80, label: "80%" },
      ]}
      defaultValue={40}
      labelAlwaysOn
      mb={40}
      {...props}
    />
  );
}

export const stylesApi: RaikouDemo = {
  type: "styles-api",
  data: SliderStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 400,
};
