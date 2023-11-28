import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { ActionIcon, Group, ColorSwatch, Text } from "@raikou/server";
import { IconColorPicker } from "@tabler/icons-react";
import { useEyeDropper } from "@raikou/hooks";

const code = `
import { useState } from 'react';
import { ActionIcon, Group, ColorSwatch, Text } from '@raikou/core';
import { IconColorPicker } from '@tabler/icons-react';
import { useEyeDropper } from '@raikou/hooks';

function Demo() {
  const [color, setColor] = useState('');
  const [error, setError] = useState<Error | null>(null);
  const { supported, open } = useEyeDropper();

  const pickColor = async () => {
    try {
      const { sRGBHex } = (await open())!;
      setColor(sRGBHex);
    } catch (e) {
      setError(e as Error);
    }
  };

  if (!supported) {
    return <Text ta="center">EyeDropper API is not supported in your browser</Text>;
  }

  return (
    <Group>
      <ActionIcon variant="default" onClick={pickColor}>
        <IconColorPicker size="1rem" stroke={1.5} />
      </ActionIcon>
      {color ? (
        <Group gap="xs">
          <ColorSwatch color={color} />
          <Text>Picked color: {color}</Text>
        </Group>
      ) : (
        <Text>Click the button to pick color</Text>
      )}
      {error && <Text c="red">Error: {error?.message}</Text>}
    </Group>
  );
}
`;

function Demo() {
  const [color, setColor] = useState("");
  const [error, setError] = useState<Error | null>(null);
  const { supported, open } = useEyeDropper();

  const pickColor = async () => {
    try {
      const { sRGBHex } = (await open())!;
      setColor(sRGBHex);
    } catch (e) {
      setError(e as Error);
    }
  };

  if (!supported) {
    return (
      <Text ta="center">EyeDropper API is not supported in your browser</Text>
    );
  }

  return (
    <Group>
      <ActionIcon variant="default" onClick={pickColor}>
        <IconColorPicker size="1rem" stroke={1.5} />
      </ActionIcon>
      {color ? (
        <Group gap="xs">
          <ColorSwatch color={color} />
          <Text>Picked color: {color}</Text>
        </Group>
      ) : (
        <Text>Click the button to pick color</Text>
      )}
      {error && <Text c="red">Error: {error?.message}</Text>}
    </Group>
  );
}

export const useEyeDropperUsage: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
