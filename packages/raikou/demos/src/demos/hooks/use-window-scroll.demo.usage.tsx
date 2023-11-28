import React from "react";
import { useWindowScroll } from "@raikou/hooks";
import { RaikouDemo } from "@raikou/ds";
import { Button, Text, Group } from "@raikou/server";

const code = `
import { useWindowScroll } from '@raikou/hooks';
import { Button, Text, Group } from '@raikou/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Group justify="center">
      <Text>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </Text>
      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Group>
  );
}
`;

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Group justify="center">
      <Text>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </Text>
      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Group>
  );
}

export const useWindowScrollDemo: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
