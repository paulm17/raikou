import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { useDisclosure } from "@raikou/hooks";
import { Button, Group, Text, Box } from "@raikou/server";
import { Collapse } from "@raikou/client";

const code = `
import { Button, Group, Text, Collapse, Box } from '@raikou/core';
import { useDisclosure } from '@raikou/hooks';

function Demo() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button onClick={toggle}>Toggle content</Button>
      </Group>

      <Collapse in={opened}>
        <Text>{/* ... content */}</Text>
      </Collapse>
    </Box>
  );
}
`;

function Demo() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button onClick={toggle}>Toggle content</Button>
      </Group>

      <Collapse in={opened}>
        <Text>
          From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has
          blue-green skin with darker patches. It has red eyes with white
          pupils, pointed, ear-like structures on top of its head, and a short,
          blunt snout with a wide mouth. A pair of small, pointed teeth are
          visible in the upper jaw when its mouth is open. Each of its thick
          legs ends with three sharp claws. On Bulbasaur&apos;s back is a green
          plant bulb, which is grown from a seed planted there at birth. The
          bulb also conceals two slender, tentacle-like vines and provides it
          with energy through photosynthesis as well as from the nutrient-rich
          seeds contained within.
        </Text>
      </Collapse>
    </Box>
  );
}

export const usage: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
