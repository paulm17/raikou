import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { ColorInput } from "@raikou/client";
import { Text } from "@raikou/server";

const code = `
import { ColorInput, Text } from '@raikou/core';

function Demo() {
  const [changeEndValue, setChangeEndValue] = useState('#FFFFFF');

  return (
    <>
      <Text mb="md">
        Change end value: <b>{changeEndValue}</b>
      </Text>

      <ColorInput
        label="Pick color"
        placeholder="Pick color"
        defaultValue="#FFFFFF"
        onChangeEnd={setChangeEndValue}
      />
    </>
  );
}
`;

function Demo() {
  const [changeEndValue, setChangeEndValue] = useState("#FFFFFF");

  return (
    <>
      <Text mb="md">
        Change end value: <b>{changeEndValue}</b>
      </Text>

      <ColorInput
        label="Pick color"
        placeholder="Pick color"
        defaultValue="#FFFFFF"
        onChangeEnd={setChangeEndValue}
      />
    </>
  );
}

export const onChangeEnd: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
